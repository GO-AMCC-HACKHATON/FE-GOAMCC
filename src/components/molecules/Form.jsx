import { Form, Formik } from "formik";
import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import {
  FormCompanySchema,
  FormPersonalSchema,
  LoginSchema,
  RegisterSchema,
} from "@/utils/validation";
import { MdChevronRight } from "@/utils/icon";
import { registerHandler } from "@/utils/auth";
import { useAppState } from "@/context/state";
import { useRouter } from "next/navigation";

const FormComponent = ({ as }) => {
  const router = useRouter();
  const [state, setState] = useAppState();

  const registerHandler = async (value) => {
    const res = await fetch(
      "http://34.101.154.14:8175/hackathon/user/auth/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ktpId: value.ktp,
          username: value.username,
          loginPassword: value.password,
          phoneNumber: value.phoneNumber,
          birthDate: value.birthday,
          gender: parseInt(value.gender),
          email: value.gender,
        }),
      },
    );
    const { data, errMsg, errCode } = await res.json();

    if (errCode === "1025") {
      alert(errMsg);
      return;
    }
    alert("success");
    router.push("/login");
    return data;
  };

  const loginHandler = async (value) => {
    const res = await fetch(
      "http://34.101.154.14:8175/hackathon/user/auth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: value.username,
          loginPassword: value.password,
        }),
      },
    );

    const { data, errMsg, errCode } = await res.json();

    if (errCode === "1025") {
      alert(errMsg);
      return;
    }

    const infoRes = await fetch(
      "http://34.101.154.14:8175/hackathon/user/info",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.accessToken}`,
        },
        body: JSON.stringify({}),
      },
    );

    const infoData = await infoRes.json();

    localStorage.setItem("userInfo", JSON.stringify(infoData.data));

    alert("success");
    router.push("/");
    localStorage.setItem("token", JSON.stringify(data.accessToken));
    return data;
  };

  const savePersonalHandler = (value) => {
    setState({ ...state, ...value });
    router.push("/company");
  };
  const saveCompanyHandler = (value) => {
    setState({ ...state, ...value });
    router.push("/support");
  };
  return (
    <>
      {(() => {
        switch (as) {
          case "register":
            return (
              <div className="w-full h-full">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    fullname: "",
                    username: "",
                    ktp: "",
                    birthday: "",
                    password: "",
                    confirmPassword: "",
                    gender: "",
                    phoneNumber: "",
                  }}
                  onSubmit={(values) => {
                    registerHandler(values);
                  }}
                  validationSchema={RegisterSchema}
                >
                  {(props) => {
                    const {
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleBlur,
                    } = props;
                    return (
                      <Form className="flex flex-col justify-between h-full py-5">
                        <div className="space-y-[10px]">
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="phoneNumber"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Nomor Telepon
                            </label>
                            <Input
                              name="phoneNumber"
                              type="text"
                              placeholder="cth : 082287567645"
                              value={values.phoneNumber}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.phoneNumber}
                              errors={errors.phoneNumber}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Email
                            </label>
                            <Input
                              name="email"
                              type="text"
                              placeholder="cth : Rahmat Fajri Nandipinto"
                              value={values.email}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.email}
                              errors={errors.email}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="fullname"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Nama Lengkap
                            </label>
                            <Input
                              name="fullname"
                              type="text"
                              placeholder="cth : Rahmat Fajri Nandipinto"
                              value={values.fullname}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.fullname}
                              errors={errors.fullname}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="username"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Nama Pengguna
                            </label>
                            <Input
                              name="username"
                              type="text"
                              placeholder="cth : fajripinto"
                              value={values.username}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.username}
                              errors={errors.username}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="ktp"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Nomor KTP
                            </label>
                            <Input
                              name="ktp"
                              type="text"
                              placeholder="cth : 1808060000000"
                              value={values.ktp}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.ktp}
                              errors={errors.ktp}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="birthday"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Tanggal Lahir
                            </label>
                            <Input
                              name="birthday"
                              type="date"
                              placeholder="Tgl / Bln / Thn"
                              value={values.birthday}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.birthday}
                              errors={errors.birthday}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="gender"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Jenis Kelamin
                            </label>
                            <select
                              name="gender"
                              className="block w-full h-12 px-3 text-sm border-2 rounded-lg outline-none border-fe-secondary"
                              value={values.gender}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value={""} selected disabled>
                                Pilih gender
                              </option>
                              <option value={1}>Laki-laki</option>
                              <option value={2}>Perempuan</option>
                            </select>
                            <p className="text-xs italic text-red-500">
                              {touched.gender && errors.gender
                                ? errors.gender
                                : null}
                            </p>
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="password"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Password
                            </label>
                            <Input
                              name="password"
                              type="password"
                              placeholder="Ketik kata sandi"
                              value={values.password}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.password}
                              errors={errors.password}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="confirmPassword"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Konfirmasi Password
                            </label>
                            <Input
                              name="confirmPassword"
                              type="password"
                              placeholder="Ketik ulang kata sandi"
                              value={values.confirmPassword}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.confirmPassword}
                              errors={errors.confirmPassword}
                            />
                          </div>
                        </div>
                        <div className="mt-8 btn">
                          <Button type="submit">
                            Daftar{" "}
                            <MdChevronRight className="inline-block text-lg font-extrabold" />
                          </Button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            );
          case "login":
            return (
              <div className="w-full h-full">
                <Formik
                  initialValues={{
                    password: "",
                    username: "",
                  }}
                  onSubmit={(values, { resetForm }) => {
                    loginHandler(values);
                    resetForm();
                  }}
                  validationSchema={LoginSchema}
                >
                  {(props) => {
                    const {
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleBlur,
                    } = props;
                    return (
                      <Form className="flex flex-col h-full py-5">
                        <div className="space-y-[10px]">
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="username"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Nama Pengguna
                            </label>
                            <Input
                              name="username"
                              type="text"
                              placeholder="cth : fajripinto"
                              value={values.username}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.username}
                              errors={errors.username}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="password"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Password
                            </label>
                            <Input
                              name="password"
                              type="password"
                              placeholder="Ketik kata sandi"
                              value={values.password}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.password}
                              errors={errors.password}
                            />
                          </div>
                        </div>
                        <div className="mt-8 btn">
                          <Button type="submit">
                            Masuk{" "}
                            <MdChevronRight className="inline-block text-lg font-extrabold" />
                          </Button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            );
          case "personal":
            return (
              <div className="w-full h-full">
                <Formik
                  initialValues={{
                    birthplace: "",
                    email: "",
                    fullname: "",
                    ktp: "",
                    birthday: "",
                    gender: "",
                    phoneNumber: "",
                  }}
                  onSubmit={(values, { resetForm }) => {
                    savePersonalHandler(values);
                    resetForm();
                  }}
                  validationSchema={FormPersonalSchema}
                >
                  {(props) => {
                    const {
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleBlur,
                    } = props;
                    return (
                      <Form className="flex flex-col justify-between h-full py-5">
                        <div className="space-y-[10px]">
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="phoneNumber"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Nomor Telepon
                            </label>
                            <Input
                              name="phoneNumber"
                              type="text"
                              placeholder="cth : 082287567645"
                              value={values.phoneNumber}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.phoneNumber}
                              errors={errors.phoneNumber}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Email
                            </label>
                            <Input
                              name="email"
                              type="text"
                              placeholder="cth : Rahmat Fajri Nandipinto"
                              value={values.email}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.email}
                              errors={errors.email}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="fullname"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Nama Lengkap
                            </label>
                            <Input
                              name="fullname"
                              type="text"
                              placeholder="cth : Rahmat Fajri Nandipinto"
                              value={values.fullname}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.fullname}
                              errors={errors.fullname}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="birthplace"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Tempat Lahir :
                            </label>
                            <Input
                              name="birthplace"
                              type="text"
                              placeholder="cth : fajripinto"
                              value={values.birthplace}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.birthplace}
                              errors={errors.birthplace}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="ktp"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Nomor KTP
                            </label>
                            <Input
                              name="ktp"
                              type="text"
                              placeholder="cth : 1808060000000"
                              value={values.ktp}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.ktp}
                              errors={errors.ktp}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="birthday"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Tanggal Lahir
                            </label>
                            <Input
                              name="birthday"
                              type="date"
                              placeholder="Tgl / Bln / Thn"
                              value={values.birthday}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.birthday}
                              errors={errors.birthday}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="gender"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Jenis Kelamin
                            </label>
                            <select
                              name="gender"
                              className="block w-full h-12 px-3 text-sm border-2 rounded-lg outline-none border-fe-secondary"
                              value={values.gender}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value={""} selected disabled>
                                Pilih gender
                              </option>
                              <option value={1}>Laki-laki</option>
                              <option value={2}>Perempuan</option>
                            </select>
                            <p className="text-xs italic text-red-500">
                              {touched.gender && errors.gender
                                ? errors.gender
                                : null}
                            </p>
                          </div>
                        </div>
                        <div className="mt-8 btn">
                          <Button type="submit">
                            Selanjutnya{" "}
                            <MdChevronRight className="inline-block text-lg font-extrabold" />
                          </Button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            );
          case "company":
            return (
              <div className="w-full h-full">
                <Formik
                  initialValues={{
                    companyName: "",
                    companyAddress: "",
                    fieldOfBusiness: "",
                    operatingTerm: "",
                    employeeTotal: "",
                    averageEarnings2020: "",
                    averageEarnings2021: "",
                    averageEarnings2022: "",
                  }}
                  onSubmit={(values) => {
                    saveCompanyHandler(values);
                  }}
                  validationSchema={FormCompanySchema}
                >
                  {(props) => {
                    const {
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleBlur,
                    } = props;
                    return (
                      <Form className="flex flex-col justify-between h-full py-5">
                        <div className="space-y-[10px]">
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="companyName"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Nama Perusahaan/Instansi/Bisnis :
                            </label>
                            <Input
                              name="companyName"
                              type="text"
                              placeholder="cth : PT Gita Bahana Sang Surya/Pecel Lele Pak Mur"
                              value={values.companyName}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.companyName}
                              errors={errors.companyName}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="companyAddress"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Alamat Perusahaan/Instansi/Bisnis :
                            </label>
                            <textarea
                              name="companyAddress"
                              type="text"
                              placeholder="cth : Jalan Ahmad Yani No. 123, Kelurahan Cikini, Kecamatan Menteng, Kota Jakarta Pusat, DKI Jakarta 12345"
                              value={values.companyAddress}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="w-full h-24 p-3 text-sm border-2 rounded-lg outline-none border-fe-secondary"
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="fieldOfBusiness"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Bidang Usaha :
                            </label>
                            <Input
                              name="fieldOfBusiness"
                              type="text"
                              placeholder="Makanan"
                              value={values.fieldOfBusiness}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.fieldOfBusiness}
                              errors={errors.fieldOfBusiness}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="operatingTerm"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Jangka Operasi :
                            </label>
                            <Input
                              name="operatingTerm"
                              type="text"
                              placeholder="cth : 2 Tahun"
                              value={values.operatingTerm}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.operatingTerm}
                              errors={errors.operatingTerm}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="employeeTotal"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Jumlah Karyawan :
                            </label>
                            <Input
                              name="employeeTotal"
                              type="text"
                              placeholder="cth : 3 Orang"
                              value={values.birthday}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.employeeTotal}
                              errors={errors.employeeTotal}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="averageEarnings2020"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Penghasilan rata-rata per tahun 2020 :
                            </label>
                            <Input
                              name="averageEarnings2020"
                              type="text"
                              placeholder="cth : 50000000"
                              value={values.averageEarnings2020}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.averageEarnings2020}
                              errors={errors.averageEarnings2020}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="averageEarnings2021"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Penghasilan rata-rata per tahun 2021 :
                            </label>
                            <Input
                              name="averageEarnings2021"
                              type="text"
                              placeholder="cth : 58000000"
                              value={values.averageEarnings2021}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.averageEarnings2021}
                              errors={errors.averageEarnings2021}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="averageEarnings2022"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Penghasilan rata-rata per tahun 2022 :
                            </label>
                            <Input
                              name="averageEarnings2022"
                              type="text"
                              placeholder="cth : 112000000"
                              value={values.averageEarnings2022}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.averageEarnings2022}
                              errors={errors.averageEarnings2022}
                            />
                          </div>
                        </div>
                        <div className="mt-8 btn">
                          <Button type="submit">
                            Selanjutnya{" "}
                            <MdChevronRight className="inline-block text-lg font-extrabold" />
                          </Button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            );
          case "support":
            return (
              <div className="w-full h-full">
                <Formik
                  initialValues={{
                    ktpFile: "",
                    moneyReportFile: "",
                    proofIncome: "",
                    note: "",
                  }}
                  onSubmit={(values, { resetForm }) => {
                    saveSupportHandler(values);
                    resetForm();
                  }}
                  validationSchema={LoginSchema}
                >
                  {(props) => {
                    const {
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleBlur,
                    } = props;
                    return (
                      <Form className="flex flex-col h-full py-5">
                        <div className="space-y-[10px]">
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="ktpFile"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Foto KTP :
                            </label>
                            <Input
                              name="ktpFile"
                              type="file"
                              placeholder="cth : fajripinto"
                              value={values.username}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.ktpFile}
                              errors={errors.ktpFile}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="moneyReportFile"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Foto Laporan Keuangan :
                            </label>
                            <Input
                              name="moneyReportFile"
                              type="file"
                              placeholder="Ketik kata sandi"
                              value={values.moneyReportFile}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.moneyReportFile}
                              errors={errors.moneyReportFile}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="proofIncome"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Bukti Pendapatan Lain (Jika Ada) :
                            </label>
                            <Input
                              name="proofIncome"
                              type="file"
                              placeholder="Ketik kata sandi"
                              value={values.proofIncome}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.proofIncome}
                              errors={errors.proofIncome}
                            />
                          </div>
                          <div className="space-y-1 form-control">
                            <label
                              htmlFor="note"
                              className="text-sm font-medium text-fe-dark"
                            >
                              Catatan (Jika Ada) :
                            </label>
                            <Input
                              name="note"
                              type="text"
                              placeholder="Ketik kata sandi"
                              value={values.note}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              touched={touched.note}
                              errors={errors.note}
                            />
                          </div>
                        </div>
                        <div className="mt-8 btn">
                          <Button type="submit">
                            Selanjutnya{" "}
                            <MdChevronRight className="inline-block text-lg font-extrabold" />
                          </Button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            );
          default:
            break;
        }
      })()}
    </>
  );
};

export default FormComponent;
