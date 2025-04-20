import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


const pieData = [
  { name: "Positif", value: 12 },
  { name: "Negatif", value: 7 },
  { name: "Netral", value: 5 },
];

const COLORS = ["#22c55e", "#ef4444", "#eab308"]; 


export function Analisis() {
  return (
    <div className="analisis items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-40">
      <div className="container mx-auto text-center p-4">
        <h1 className="text-950 dark:text-gray-100 text-5xl font-bold pb-2">Analisis</h1>
        {/* upload file */}
        <div className="mt-4 py-3 text-gray-500 dark:text-gray-300">
          <input type="file" id="fileInput" accept=".csv" className="border border-gray-300 rounded-md px-8 py-2 text-grey-950 dark:text-gray-100" />
          <button className="px-6 py-2 bg-gray-950 text-gray-100 dark:bg-gray-100 dark:text-gray-950 rounded-lg">Unggah</button>
          <div className="mt-4 flex justify-center items-center lg:gap-12 gap-8">
            <button className="px-6 py-2 bg-gray-950 text-gray-100 dark:bg-gray-100 dark:text-gray-950 rounded-lg">Analisis</button>
            <button className="px-6 py-2 bg-gray-950 text-gray-100 dark:bg-gray-100 dark:text-gray-950 rounded-lg">Reset</button>
          </div>
          {/* tabel */}
          <div className="mt-6">
            <table className="table-auto border-collapse border border-gray-300 w-full text-gray-950 dark:text-gray-100">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Kolom 1</th>
                  <th className="border border-gray-300 px-4 py-2">Kolom 2</th>
                  <th className="border border-gray-300 px-4 py-2">Kolom 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Data 1</td>
                  <td className="border border-gray-300 px-4 py-2">Data 2</td>
                  <td className="border border-gray-300 px-4 py-2">Data 3</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Data 4</td>
                  <td className="border border-gray-300 px-4 py-2">Data 5</td>
                  <td className="border border-gray-300 px-4 py-2">Data 6</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PIE CHART */}
          <div className="mt-12 flex justify-center">
            <h2 className="text-3xl font-bold text-gray-950 dark:text-gray-100 mb-6">📊 Hasil Analisis</h2>
            <PieChart width={400} height={300}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}
