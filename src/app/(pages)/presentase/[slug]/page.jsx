"use client";

import Button from "@/components/atoms/Button";
import MainLayout from "@/components/templates/MainLayout";
import { getToken } from "@/utils/helper";
import { Feans, MdChevronRight } from "@/utils/icon";
import Image from "next/image";

const PinjamanPage = () => {
  const token = getToken();
  console.log(token);
  const addBalanceHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "http://34.101.154.14:8175/hackathon/bankAccount/addBalance",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          receiverAccountNo: "58594545352927",
          amount: 700000,
        }),
      },
    );
    alert("berhasil");
    return await res.json();
  };
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center w-full h-screen px-4 pt-20 mx-auto space-y-3 sm:max-w-md bg-prs-secondary bg-fe-primary">
          <Image
            src={Feans}
            alt="feans-logo"
            className="mb"
            width={32}
            height={32}
          />
          <h1 className="font-bold text-fe-h4 text-[#F09000] text-center px-8">
            Pinjaman Beresiko Aman
          </h1>
          <h3 className="text-[#7B7B7B] text-sm mb-4 text-center">
            Rekomandasi angka maksimal pinjaman dengan resiko aman berdasarkan
            analisa dari data finansial bisnismu.
          </h3>
          <div>
            <div className="w-full p-3 bg-white shadow-sm rounded-xl">
              <p className="text-xs text-center text-fe-orange">
                Maksimal Pinjaman
              </p>
              <h1 className="font-bold text-fe-h4 text-fe-orange">
                <span className="text-xs font-light">Rp</span> 12.000.000
              </h1>
            </div>
          </div>
          <div className="w-full">
            <input
              type="range"
              min="0"
              max="4"
              step="1"
              className="h-[15px] w-full bg-gradient-to-r from-[#FF4F04] to-[#FEDF70] rounded-lg appearance-none cursor-pointer range-5xl"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span className="w-8 text-left">0</span>
              <span className="w-8 text-center">1</span>
              <span className="w-8 text-center">2</span>
            </div>
          </div>
          <div>
            <div className="w-full p-3 bg-white shadow-sm rounded-xl">
              <p className="text-xs text-center text-fe-orange">
                Jumlah Modal Dipinjam
              </p>
              <h1 className="font-bold text-fe-h2 text-fe-orange">
                <span className="text-sm font-light">Rp</span> 6.000.000
              </h1>
            </div>
          </div>
          <form className="w-full">
            <div
              className="flex items-center justify-between w-full px-4 py-3 bg-white cursor-pointer"
              onClick={addBalanceHandler}
            >
              <div>
                <div className="text-sm text-[#CA5B00]">
                  <h1 className="font-bold">6 Bulan</h1>
                  <p className="text-xs text-[#F09000]">1.32% per bulan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-[#CA5B00]">
                  <h1 className="font-bold">Rp. 1.320.000 </h1>
                  <p className="text-xs text-[#F09000]">cicilan perbulan</p>
                </div>
                <div className="flex items-center text-[#CA5B00]">
                  <MdChevronRight alt="indicator" className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full px-4 py-3 bg-white">
              <div>
                <div className="text-sm text-[#CA5B00]">
                  <h1 className="font-bold">6 Bulan</h1>
                  <p className="text-xs text-[#F09000]">1.32% per bulan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-[#CA5B00]">
                  <h1 className="font-bold">Rp. 1.320.000 </h1>
                  <p className="text-xs text-[#F09000]">cicilan perbulan</p>
                </div>
                <div className="flex items-center text-[#CA5B00]">
                  <MdChevronRight alt="indicator" className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full px-4 py-3 bg-white">
              <div>
                <div className="text-sm text-[#CA5B00]">
                  <h1 className="font-bold">6 Bulan</h1>
                  <p className="text-xs text-[#F09000]">1.32% per bulan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-[#CA5B00]">
                  <h1 className="font-bold">Rp. 1.320.000 </h1>
                  <p className="text-xs text-[#F09000]">cicilan perbulan</p>
                </div>
                <div className="flex items-center text-[#CA5B00]">
                  <MdChevronRight alt="indicator" className="text-2xl" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default PinjamanPage;
