import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import MainLayout from "@/components/templates/MainLayout";
import { ArrowBack, BCA, Coin, Feans } from "@/utils/icon";
import Image from "next/image";
import React from "react";
import { MdChevronRight } from "react-icons/md";

const PaymentPage = () => {
  return (
    <MainLayout>
      <div className="w-full h-screen mx-auto bg-fe-primary sm:max-w-md">
        <div className="w-full">
          <div className="z-50 px-4 py-10 rounded-bl-[32px] rounded-br-[32px] bg-fe-orange pb-20">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-white rounded-xl">
                <Image src={ArrowBack} alt="feans-logo" />
              </div>
              <h1 className="px-8 font-bold text-center text-white text-fe-h4">
                Isi Saldo
              </h1>
              <span></span>
            </div>
          </div>
          <form className="relative w-full rounded-xl">
            <div className="p-5 mx-5 -mt-10 space-y-3 bg-white rounded-2xl">
              <p className="text-gray-400">Masukan Nominal Saldo</p>
              <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                  <Image src={BCA} alt="bca" className="inline-block" />
                  <h1 className="uppercase">BANK CENTRAL ASIA</h1>
                </div>
                <div className="flex items-center text-[#CA5B00]">
                  <p className="font-bold">Ganti</p>
                  <MdChevronRight alt="indicator" className="text-2xl" />
                </div>
              </div>
            </div>
          </form>
          <div className="relative w-full rounded-xl">
            <div className="p-10 mx-5 mt-5 space-y-3 bg-white border rounded-2xl border-fe-orange">
              <p className="text-center text-gray-400">
                Nomor Akun Virtual BCA
              </p>
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center space-x-4">
                  <h1 className="text-2xl font-bold uppercase text-fe-orange">
                    3901081767804377
                  </h1>
                </div>
                <p>Atas Nama</p>
                <p className="font-bold">Nabraska Amarilys</p>
                <button className="inline-block w-1/2 px-3 py-2 border rounded-xl border-fe-orange">
                  Salin Kode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentPage;
