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

export const FormPersonalSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Fullname must be 2 characters at minimum")
    .required("Fullname is required"),
  birthplace: Yup.string()
    .min(2, "Birthplace must be 2 characters at minimum")
    .required("Birthplace is required"),
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
});

export const FormCompanySchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Company Name must be 2 characters at minimum")
    .required("Company Name is required"),
  companyAddress: Yup.string()
    .min(2, "Company Address must be 2 characters at minimum")
    .required("company Address is required"),
  fieldOfBusiness: Yup.string()
    .min(2, "Field Of Business must be 2 characters at minimum")
    .required("Field Of Business is required"),
  operatingTerm: Yup.string()
    .min(2, "Operating Term must be 2 characters at minimum")
    .required("Operating Term is required"),
  employeeTotal: Yup.number().required("Employee Total is required"),
  averageEarnings2020: Yup.number().required("averageEarnings2020 is required"),
  averageEarnings2021: Yup.number().required("averageEarnings2021 is required"),
  averageEarnings2022: Yup.number().required("averageEarnings2022 is required"),
});

const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

export const FormSupportSchema = Yup.object().shape({
  ktpFile: Yup.mixed()
    .required("Required")
    .test("is-valid-type", "Not a valid image type", (value) =>
      isValidFileType(value && value.name.toLowerCase(), "image"),
    )
    .test(
      "is-valid-size",
      "Max allowed size is 100KB",
      (value) => value && value.size <= MAX_FILE_SIZE,
    ),
  moneyReportFile: Yup.mixed()
    .required("Required")
    .test("is-valid-type", "Not a valid image type", (value) =>
      isValidFileType(value && value.name.toLowerCase(), "image"),
    )
    .test(
      "is-valid-size",
      "Max allowed size is 100KB",
      (value) => value && value.size <= MAX_FILE_SIZE,
    ),
  proofIncome: Yup.mixed()
    .test("is-valid-type", "Not a valid image type", (value) =>
      isValidFileType(value && value.name.toLowerCase(), "image"),
    )
    .test(
      "is-valid-size",
      "Max allowed size is 100KB",
      (value) => value && value.size <= MAX_FILE_SIZE,
    ),
  note: Yup.string(),
});
