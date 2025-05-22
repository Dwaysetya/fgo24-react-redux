import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeData } from "../redux/reducers/surveyResult";

function ResultForm() {
  const [data, setData] = useState([]);

  console.log("aaa", data);
  const stored = useSelector((state) => state.surveyResult.data);
  const dispatch = useDispatch();

  function handleDelete(index) {
    dispatch(removeData(index));
  }

  useEffect(() => {
    setData(stored);
  }, [stored]);

  if (!data) return <p>Belum ada data</p>;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6 w-full">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl flex flex-col justify-center items-center border-t-10 border-orange-500 mb-10">
        <h1 className="font-bold text-2xl mb-5">Data Hasil Survey</h1>
        <table>
          <thead className="w-[30px]">
            <tr className="border-1">
              <th className="border-1 w-[500px]">Nama</th>
              <th className="border-1 w-[500px]">Umur</th>
              <th className="border-1 w-[500px]">Jenis Kelamin</th>
              <th className="border-1 w-[500px]">Perokok</th>
              <th className="border-1 w-[500px]">Rokok</th>
              <th className="border-1 w-[500px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border-1 w-[500px] self-center p-5">
                  <p className="flex justify-center items-center">
                    {item.name}
                  </p>
                </td>
                <td className="border-1 w-[500px]">
                  <p className="flex justify-center items-center">
                    {item.umur}
                  </p>
                </td>
                <td className="border-1 w-[500px]">
                  <p className="flex justify-center items-center">
                    {item.gender}
                  </p>
                </td>
                <td className="border-1 w-[500px]">
                  <p className="flex justify-center items-center">
                    {item.smoker}
                  </p>
                </td>
                <td className="border-1 w-[500px]">
                  <p className="flex justify-center items-center">
                    {item.rokok?.join(", ") || "-"}
                  </p>
                </td>
                <td className="border-1 w-[500px] ">
                  <p
                    className="text-red-500 hover:text-amber-400 flex justify-center items-center cursor-pointer"
                    onClick={() => handleDelete(index)}
                  >
                    Hapus
                  </p>
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
