import React from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../redux/reducers/surveyResult";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Nama minimal 3 karakter")
    .required("Nama wajib diisi"),
  umur: yup.string().required("Umur wajib diisi"),
  gender: yup
    .mixed()
    .oneOf(["Laki-laki", "Perempuan"])
    .required("Gender wajib diisi"),
  smoker: yup
    .mixed()
    .oneOf(["Ya", "Tidak"])
    .required("Status perokok wajib diisi"),
  rokok: yup.array().notRequired(),
});

function MainPage() {
  // const [isData, setData] = React.useState();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.surveyResult.data);
  console.log("aa", users);
  console.log("data", users);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  console.log("ini", register);
  function saveData(value) {
    dispatch(addUsers(value));
      if (users.length > 0) {
        Swal.fire({
          title: "Berhasil!",
          text: "Data berhasil disimpan",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
  }

  // function submitData(data) {
  //   const getData = localStorage.getItem("surveyData");

  //   const dataArray = getData ? JSON.parse(getData) : [];

  //   dataArray.push(data);
  //   localStorage.setItem("surveyData", JSON.stringify(dataArray));

  //   const checkSaved = localStorage.getItem("surveyData");
  //   const parsed = JSON.parse(checkSaved);

  //   if (parsed.length > 0) {
  //     Swal.fire({
  //       title: "Berhasil!",
  //       text: "Data berhasil disimpan",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //     });
  //   }
  // }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6 w-full">
      <form onSubmit={handleSubmit(saveData)}>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl flex flex-col gap-5 justify-center border-t-10 border-orange-500 mb-10">
          <h1 className="text-xl font-bold"> Form Survey Perokok</h1>
          <p>
            Survei ini bertujuan untuk memahami kebiasaan merokok di kalangan
            masyarakat. Semua jawaban bersifat anonim dan hanya akan digunakan
            untuk keperluan penelitian. Mohon isi dengan jujur dan lengkap.
          </p>
          <p>Terima kasih!😊</p>
          <div className="flex flex-row items-center border-y-1 h-[40px] gap-1">
            <h1 className="font-bold">Dwisetbu@gmail.com</h1>
            <span className="text-sm text-blue-700">Ganti akun</span>
          </div>
        </div>
        <div className="class-cart">
          <div>
            <Input
              {...register("name")}
              id="name"
              type="text"
              label="Masukkan nama anda"
              className="border-b-1 border-black w-full outline-0
              "
            />
          </div>
          {errors.name && (
            <div className="text-red-600">{errors.name.message}</div>
          )}
        </div>
        <div className="class-cart">
          <div>
            <Input
              {...register("umur")}
              id="umur"
              type="text"
              label="Berapa umur anda"
              className="border-b-1 border-black w-full outline-0
              "
            />
          </div>
          {errors.umur && (
            <div className="text-red-600">{errors.umur.message}</div>
          )}
        </div>
        <div className="class-cart">
          <div>
            <Input
              {...register("gender")}
              id="gender"
              type="radio"
              label="Apa jenis kelamin anda"
              value={["Laki-laki", "Perempuan"]}
            />
          </div>
          {errors.gender && (
            <div className="text-red-600">{errors.gender.message}</div>
          )}
        </div>
        <div className="class-cart">
          <div>
            <Input
              {...register("smoker")}
              id="smoker"
              type="radio"
              label="Apakah anda perokok?"
              value={["Ya", "Tidak"]}
            />
          </div>
        </div>
        <div className="class-cart">
          <div>
            <Input
              {...register("rokok")}
              id="rokok"
              type="checkbox"
              label="Jika anda perokok, rokok apa yang pernah anda coba?"
              value={[
                "Gudang Garam Filter",
                "Lucky Strike",
                "Marlboro",
                "Esse",
              ]}
            />
          </div>
        </div>
        <div className="flex fle-row justify-center items-center gap-20">
          <Button
            type="submit"
            className="text-white hover:bg-white shadow-md hover:text-blue-700"
          >
            Simpan
          </Button>
          <div className="bg-blue-600 p-6 rounded-lg shadow-md h-[10px] flex justify-center items-center hover:bg-white">
            <Link to="/result" className=" text-white hover:text-blue-700">
              Lihat Hasil Survey
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MainPage;
