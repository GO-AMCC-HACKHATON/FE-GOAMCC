export const getGreetingBasedOnTime = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Selamat Pagi";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Selamat Siang";
  } else {
    greeting = "Selamat Malam";
  }

  return greeting;
};

export const getDataUser = () => {
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    return user;
  }
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    const token = JSON.parse(localStorage.getItem("token"));
    return token;
  }
};
