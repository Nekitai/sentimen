export function Analisis() {
  return (
    <div className="analisis items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-40">
      <div className="container mx-auto text-center p-4">
        <h1 className="text-950 dark:text-gray-100 text-5xl font-bold pb-2">Analisis</h1>
        <div className="mt-4 py-3 text-gray-500 dark:text-gray-300">
          <input type="file" id="fileInput" accept=".csv" className="border border-gray-300 rounded-md px-8 py-2 text-grey-950 dark:text-gray-100" />
          <button className="px-6 py-2 bg-gray-950 text-100 dark:bg-gray-100 dark:text-gray-950 rounded-lg">Unggah</button>
            <select className="border border-gray-950 rounded-md px-4 py-2 text-gray-950 dark:text-gray-100 dark:border-gray-950 ml-4" id="sentimentFilter">
            <option value="all">Semua Sentimen</option>
            <option value="positive">Positif</option>
            <option value="negative">Negatif</option>
            <option value="neutral">Netral</option>
            </select>
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
        </div>
      </div>
      <div className="container mx-auto text-center p-4">
      </div>
    </div>
  );
}
