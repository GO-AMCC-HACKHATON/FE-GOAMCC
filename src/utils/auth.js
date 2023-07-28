import axios from "axios";

const BASEURL = "http://34.101.154.14:8175/hackathon/user/";

export const registerHandler = async (value) => {
  try {
    const res = await axios.post(BASEURL + "auth/create", {
      ktpId: value.ktp,
      username: value.username,
      loginPassword: value.password,
      phoneNumber: value.phoneNumber,
      birthDate: value.birthday,
      gender: value.gender,
      email: value.gender,
    });
    alert("success");
    return await res.data;
  } catch (error) {
    alert(error);
  }
};
