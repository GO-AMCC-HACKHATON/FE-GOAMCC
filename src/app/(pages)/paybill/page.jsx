import MainLayout from "@/components/templates/MainLayout";
import { ArrowBack, Coin, FeansWhite, Message, Tagihan } from "@/utils/icon";
import Image from "next/image";
import React from "react";

const PayBillPage = () => {
  return (
    <MainLayout>
      <section className="relative">
        <div className="mx-auto sm:max-w-md bg-fe-primary">
          <div className="px-4 py-10 z-50 bg-fe-orange rounded-bl-[32px] rounded-br-[32px]">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-white rounded-xl">
                <Image src={ArrowBack} alt="feans-logo" />
              </div>
              <h1 className="px-8 font-bold text-center text-white text-fe-h4">
                Bayar Tagihan
              </h1>
              <span></span>
            </div>
            <div className="max-w-[50%] mx-auto space-y-4 py-5">
              <div className="">
                <div className="w-full p-3 bg-white shadow-sm rounded-xl">
                  <p className="text-xs text-center text-fe-orange">
                    Maksimal Pinjaman
                  </p>
                  <h1 className="font-bold text-fe-h4 text-fe-orange">
                    <span className="text-xs font-light">Rp</span> 12.000.000
                  </h1>
                </div>
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
            <div className="absolute sm:left-[44%] left-[25%]  mx-auto space-y-4">
              <div className="w-full p-3 bg-white shadow-sm rounded-xl">
                <p className="text-xs text-center text-fe-orange">
                  Maksimal Pinjaman
                </p>
                <h1 className="font-bold text-fe-h4 text-fe-orange">
                  <span className="text-xs font-light">Rp</span> 12.000.000
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-20 mx-auto h-fit sm:max-w-md bg-fe-primary">
          <div className="w-full p-3 text-center shadow-sm rounded-xl">
            <Image src={Tagihan} alt="tagihan" className="inline-block w-2/3" />
          </div>
        </div>
      </section>
      <section>
        <div className="pt-24 mx-auto h-fit sm:max-w-md bg-fe-primary">
          <div className="w-full p-3 text-center shadow-sm rounded-xl">
            <button className="p-3 text-white rounded-xl bg-fe-orange">
              Bayar Sekarang{" "}
              <Image
                src={Coin}
                alt="coin"
                className="inline-block text-white"
              />
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PayBillPage;
