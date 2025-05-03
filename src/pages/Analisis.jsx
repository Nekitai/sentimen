import { useState, useRef } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from "axios";
import * as domtoimage from "dom-to-image";
import TablePagination from "@mui/material/TablePagination";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import GradientCircularProgress from "../components/GradientCircularProgress";


export function Analisis() {
  const chartRef = useRef(null);
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("http://127.0.0.1:5000/upload", formData);
    return response.data;
  };

  const pieData = [
    { name: "positif", value: 280 },
    { name: "negatif", value: 300 },
    { name: "netral", value: 120 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const [analysisResult, setAnalysisResult] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [wordcloudImages, setWordcloudImages] = useState({});
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = analysisResult.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleSendChartToBackend = async (container) => {
    if (!container) {
      console.error("Container element is null");
      return;
    }

    try {
      const targetWidth = 600;
      const rect = container.getBoundingClientRect();
      container.style.visibility = "visible";
      container.style.opacity = "1";

      const blob = await domtoimage.toBlob(container, {
        bgcolor: "#ffffff",
        width: targetWidth,
        height: rect.height,
        style: {
          transform: "scale(1)",
          transformOrigin: "center center",
          margin: 0,
          padding: 0,
        },
      });

      if (!blob || blob.size === 0) {
        throw new Error("Generated blob is empty");
      }

      const formData = new FormData();
      formData.append("file", blob, `chart_${Date.now()}.png`);

      const response = await axios.post("http://127.0.0.1:5000/upload_chart", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 30000,
      });

      return response.data;
    } catch (error) {
      console.error("Chart upload failed:", {
        error: error.message,
        stack: error.stack,
      });
      throw error;
    }
  };
  const handleAnalisis = async () => {
    try {
      const fileInput = document.getElementById("fileInput");
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        setLoading(true);

        const uploadResponse = await uploadFile(file);
        if (uploadResponse.error) {
          alert(uploadResponse.error);
          setLoading(false);
          return;
        }

        const analysisResponse = await axios.post("http://127.0.0.1:5000/analisis");
        const result = analysisResponse.data;

        const dataArray = result.data || [];
        setAnalysisResult(dataArray);
        setPage(0);
        setWordcloudImages(result.wordcloud || {});

        const counts = { positif: 0, negatif: 0, netral: 0 };
        dataArray.forEach((item) => {
          let sentiment = item.lex_sentiment;
          sentiment = typeof sentiment === "object" ? sentiment?.sentiment : sentiment;
          sentiment = sentiment?.toLowerCase();
          if (sentiment in counts) counts[sentiment]++;
        });

        const newChartData = [
          { name: "positif", value: counts["positif"] },
          { name: "negatif", value: counts["negatif"] },
          { name: "netral", value: counts["netral"] },
        ];

        setPieChartData(newChartData);

        await new Promise((resolve) => setTimeout(resolve, 100));

        const container = document.getElementById("chartCaptureArea");
        if (!container) {
          console.error("Chart container not found");
          return;
        }

        await handleSendChartToBackend(container);

        setLoading(false);
      } else {
        alert("Silakan unggah file terlebih dahulu.");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat analisis.");
      console.error("Analisis error:", error);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setAnalysisResult([]);
    setPieChartData([]);
    setWordcloudImages({});
    document.getElementById("fileInput").value = "";
  };

  const backendUrl = "http://127.0.0.1:5000/";

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
            <div className="fixed inset-0 bg-black/30 dark:bg-white/30 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-800 ease-in-out opacity-100">
              <div className="text-center">
                <GradientCircularProgress />
                <p className="text-gray-950 dark:text-white text-lg font-semibold mt-4">Sedang menganalisis...</p>
              </div>
            </div>
          )}
          {/* tabel */}
          <div className="mt-6 ease-in-out duration-300 delay-150">
            <table className="table-auto border-collapse border border-gray-300 w-full text-gray-950 dark:text-gray-100">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Teks Lengkap</th>
                  <th className="border border-gray-300 px-4 py-2">Sentimen Leksikal</th>
                  <th className="border border-gray-300 px-4 py-2">Sentimen SVM</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{item.full_text}</td>
                    <td className="border border-gray-300 px-4 py-2">{typeof item.lex_sentiment === "object" ? item.lex_sentiment.sentiment : item.lex_sentiment}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.svm_sentiment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Kontrol Halaman */}
            <div className="flex justify-center mt-4">
              <div className="w-auto">
                <TablePagination
                  component="div"
                  count={analysisResult.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  sx={{
                    "& .MuiTablePagination-toolbar": {
                      justifyContent: "center",
                    },
                    color: isDarkMode ? grey[950] : grey[100],
                    "& .MuiTablePagination-selectLabel": {
                      color: isDarkMode ? grey[950] : grey[100],
                    },
                    "& .MuiTablePagination-select": {
                      color: isDarkMode ? grey[950] : grey[100],
                    },
                    "& .MuiTablePagination-displayedRows": {
                      color: isDarkMode ? grey[950] : grey[100],
                    },
                    "& .MuiSvgIcon-root": {
                      color: isDarkMode ? grey[950] : grey[100],
                    },
                  }}
                />
              </div>
            </div>
          </div>
          {/* PIE CHART */}
          <div className="mt-12 justify-center">
            <div className="mb-6 py-4 justify-center items-center">
              <h2 className="text-3xl font-bold text-gray-950 dark:text-gray-100 mb-6">Hasil Analisis</h2>
            </div>
            <div className="flex justify-center items-center rounded-lg p-6" id="chartCaptureArea" ref={chartRef}>
              <PieChart width={400} height={300}>
                <Pie dataKey="value" data={pieChartData.length > 0 ? pieChartData : pieData} cx="50%" cy="50%" outerRadius={100} label>
                  {(pieChartData.length > 0 ? pieChartData : pieData).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0];
                      return (
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #ccc",
                            padding: "8px",
                            borderRadius: "4px",
                            color: "#333",
                          }}
                        >
                          <p>{`${data.name}: ${data.value}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend
                  payload={(pieChartData.length > 0 ? pieChartData : pieData).map((item, index) => ({
                    id: item.name,
                    type: "square",
                    value: item.name,
                    color: COLORS[index % COLORS.length],
                  }))}
                />
              </PieChart>
            </div>
          </div>

          {/* Hasil Wordcloud */}
          <div className="mt-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-950 dark:text-gray-100 mb-6">Hasil Wordcloud</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {wordcloudImages.positif && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-950 dark:text-gray-100">Positif</h3>
                  <img src={backendUrl + wordcloudImages.positif} alt="Positive Wordcloud" className="w-full max-w-xs" />
                </div>
              )}
              {wordcloudImages.negatif && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-950 dark:text-gray-100">Negatif</h3>
                  <img src={backendUrl + wordcloudImages.negatif} alt="Negative Wordcloud" className="w-full max-w-xs" />
                </div>
              )}
              {wordcloudImages.netral && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-950 dark:text-gray-100">Netral</h3>
                  <img src={backendUrl + wordcloudImages.netral} alt="Neutral Wordcloud" className="w-full max-w-xs" />
                </div>
              )}
            </div>
          </div>
          {/* Button Download */}
          <div className="mt-6 flex justify-center items-center lg:gap-12 gap-8">
            <button className="px-6 py-2 bg-gray-950 text-gray-100 dark:bg-gray-100 dark:text-gray-950 rounded-lg">
              <a href="http://127.0.0.1:5000/download/all">Download</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
