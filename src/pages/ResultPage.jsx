import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ResultForm() {
  const [data, setData] = useState(null);
  console.log("aaa", data);

  useEffect(() => {
    const stored = localStorage.getItem("surveyData");
    console.log("result", stored);
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) return <p>Belum ada data</p>;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6 w-full">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl flex flex-col justify-center items-center border-t-10 border-orange-500 mb-10">
        <h1 className="font-bold text-2xl">Data Hasil Survey</h1>
        <table>
          <thead className="w-[30px]">
            <tr className="border-1">
              <th className="border-1 w-[200px]">Nama</th>
              <th className="border-1 w-[200px]">Umur</th>
              <th className="border-1 w-[200px]">Jenis Kelamin</th>
              <th className="border-1 w-[200px]">Perokok</th>
              <th className="border-1 w-[200px]">Rokok</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border-1 w-[200px] self-center">{item.name}</td>
                <td className="border-1 w-[200px]">{item.umur}</td>
                <td className="border-1 w-[200px]">{item.gender}</td>
                <td className="border-1 w-[200px]">{item.smoker}</td>
                <td className="border-1 w-[200px]">
                  {item.rokok?.join(", ") || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/" className="hover:text-blue-700">
        Kembali isi survey
      </Link>
    </div>
  );
}

export default ResultForm;
