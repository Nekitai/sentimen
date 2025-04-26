import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from "axios";

export function Analisis() {
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("http://127.0.0.1:5000/upload", formData);
    return response.data;
  };

  const pieData = [
    { name: "Positif", value: 0 },
    { name: "Negatif", value: 0 },
    { name: "Netral", value: 0 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const [analysisResult, setAnalysisResult] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [Loading, setLoading] = useState(false);

  const handleAnalisis = async () => {
    try {
      const fileInput = document.getElementById("fileInput");
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        setLoading(true); // Mulai loading

        const uploadResponse = await uploadFile(file);
        if (uploadResponse.error) {
          alert(uploadResponse.error);
          setLoading(false);
          return;
        }

        const analysisResponse = await axios.post("http://127.0.0.1:5000/analisis");
        const result = analysisResponse.data;

        setAnalysisResult(result);

        const counts = { positif: 0, negatif: 0, netral: 0 };
        result.forEach((item) => {
          let sentiment = item.lex_sentiment;
          if (typeof sentiment === "object" && sentiment !== null) {
            sentiment = sentiment.sentiment;
          }
          sentiment = sentiment?.toLowerCase();
          if (sentiment in counts) {
            counts[sentiment]++;
          }
        });

        setPieChartData([
          { name: "Positif", value: counts["positif"] },
          { name: "Negatif", value: counts["negatif"] },
          { name: "Netral", value: counts["netral"] },
        ]);

        setLoading(false); // Selesai loading
      } else {
        alert("Silakan unggah file terlebih dahulu.");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat analisis.");
      console.error(error);
      setLoading(false); // Selesai loading walaupun error
    }
  };

  const handleReset = () => {
    setAnalysisResult([]);
    setPieChartData([]);
    document.getElementById("fileInput").value = "";
  };
  return (
    <div className="analisis items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-40">
      <div className="container mx-auto text-center p-4">
        <h1 className="text-950 dark:text-gray-100 text-5xl font-bold pb-2">Analisis</h1>
        {/* upload file */}
        <div className="mt-4 py-3 text-gray-500 dark:text-gray-300">
          <input type="file" id="fileInput" accept=".csv" className="border border-gray-300 rounded-md px-8 py-2 text-grey-950 dark:text-gray-100" />
          <button
            className="px-6 py-2 bg-gray-950 text-gray-100 dark:bg-gray-100 dark:text-gray-950 rounded-lg"
            onClick={async () => {
              const fileInput = document.getElementById("fileInput");
              if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                try {
                  const result = await uploadFile(file);
                  if (result.message) {
                    alert(result.message);
                  } else {
                    console.log(result);
                  }
                } catch (error) {
                  alert("Terjadi kesalahan saat mengunggah file.");
                  console.error(error);
                }
              } else {
                alert("Silakan pilih file untuk diunggah.");
              }
            }}
          >
            Unggah
          </button>
          <div className="mt-4 flex justify-center items-center lg:gap-12 gap-8">
            <button className="px-6 py-2 bg-gray-950 text-gray-100 dark:bg-gray-100 dark:text-gray-950 rounded-lg" onClick={handleAnalisis}>
              Analisis
            </button>
            <button className="px-6 py-2 bg-gray-950 text-gray-100 dark:bg-gray-100 dark:text-gray-950 rounded-lg" onClick={handleReset}>
              Reset
            </button>
          </div>
          {/*Loading efek */}
          {Loading && (
            <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
              <div className="text-center">
                <svg className="animate-spin h-12 w-12 text-white mx-auto mb-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                <p className="text-white text-lg font-semibold">Sedang menganalisis...</p>
              </div>
            </div>
          )}
          {/* tabel */}
          <div className="mt-6">
            <table className="table-auto border-collapse border border-gray-300 w-full text-gray-950 dark:text-gray-100">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Teks Lengkap</th>
                  <th className="border border-gray-300 px-4 py-2">Sentimen Leksikal</th>
                  <th className="border border-gray-300 px-4 py-2">Sentimen SVM</th>
                </tr>
              </thead>
              <tbody>
                {analysisResult.slice(0, 10).map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{item.full_text}</td>
                    <td className="border border-gray-300 px-4 py-2">{typeof item.lex_sentiment === "object" ? item.lex_sentiment.sentiment : item.lex_sentiment}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.svm_sentiment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* PIE CHART */}
          <div className="mt-12  justify-center">
            <div className="mb-6 py-4  justify-center items-center">
              <h2 className="text-3xl font-bold text-gray-950 dark:text-gray-100 mb-6">Hasil Analisis</h2>
            </div>
            <div className="flex justify-center items-center">
              <PieChart width={400} height={300}>
                <Pie dataKey="value" data={pieChartData.length > 0 ? pieChartData : pieData} cx="50%" cy="50%" outerRadius={100} label>
                  {(pieChartData.length > 0 ? pieChartData : pieData).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
          {/* Hasil Wordcloud */}
          <div className="mt-12  justify-center">
            <div className="mb-6 py-4  justify-center items-center">
              <h2 className="text-3xl font-bold text-gray-950 dark:text-gray-100 mb-6">Hasil Wordcloud</h2>
            </div>
            <div className="flex justify-center items-center">
              <img src="src/assets/img/output.png" alt="Wordcloud" className="w-full max-w-md" />
            </div>
          </div>
          {/* Button Download */}
          <div className="mt-6 flex justify-center items-center lg:gap-12 gap-8">
            <button className="px-6 py-2 bg-gray-950 text-gray-100 dark:bg-gray-100 dark:text-gray-950 rounded-lg">
              <a href="">Download</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
