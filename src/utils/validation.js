import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Fullname must be 2 characters at minimum")
    .required("Fullname is required"),
  username: Yup.string()
    .min(2, "Username must be 2 characters at minimum")
    .required("Username is required"),
  ktp: Yup.string()
    .required("KTP is required")
    .matches(/^[0-9]{16}$/, "KTP is not valid"),
  gender: Yup.number().oneOf([1, 2]).required("Pilih gender"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^(\+62|62|0)8[1-9][0-9]{6,9}$/g, "Phone number is not valid"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  birthday: Yup.date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Birthday is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match",
  ),
});

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be 2 characters at minimum")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required("Password is required"),
});
