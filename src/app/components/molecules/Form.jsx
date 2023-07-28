import { Form, Formik } from "formik";
import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { LoginSchema, RegisterSchema } from "@/utils/validation";
import { MdChevronRight } from "@/utils/icon";
import { loginHandler, registerHandler } from "@/utils/auth";

const FormComponent = ({ as }) => {
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
                  onSubmit={(values, { resetForm }) => {
                    registerHandler(values);
                    resetForm();
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

          default:
            break;
        }
      })()}
    </>
  );
};

export default FormComponent;
