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
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full px-4 pt-20 mx-auto space-y-3 sm:max-w-md bg-prs-secondary bg-fe-primary">
          <Image
            src={ArrowBack}
            alt="feans-logo"
            className="mb"
            width={32}
            height={32}
          />
          <h1 className="font-bold text-fe-h4 text-[#F09000] text-center px-8">
            Isi Saldo
          </h1>
          <span></span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full px-4 pt-10 mx-auto space-y-3 sm:max-w-md bg-prs-secondary bg-fe-primary">
          <form className="relative w-full p-3 bg-white rounded-xl">
            <label htmlFor="saldo">Masukan Nominal Saldo</label>
            <div class="absolute inset-y-0 left-5 top-[25%] flex items-center pl-3 pointer-events-none">
              <h1 className="text-xl font-bold">Rp.</h1>
            </div>
            <input
              type="text"
              name="saldo"
              className="w-full h-12 text-xl font-bold border-2 rounded-lg outline-none px-14 border-fe-orange"
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full px-4 mx-auto space-y-3 sm:max-w-md bg-prs-secondary bg-fe-primary">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full pt-5 mx-auto space-y-3 sm:max-w-md bg-prs-secondary bg-fe-primary">
              <form className="relative w-full p-3 bg-white rounded-xl">
                <p className="text-gray-400">Transfer Bank</p>
                <div>
                  <div className="flex items-center justify-between w-full py-3 bg-white border-b cursor-pointer border-fe-orange">
                    <div className="flex items-center space-x-4">
                      <Image src={BCA} alt="bca" className="inline-block" />
                      <h1 className="uppercase">BANK CENTRAL ASIA</h1>
                    </div>
                    <div className="flex items-center text-[#CA5B00]">
                      <MdChevronRight alt="indicator" className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between w-full py-3 bg-white border-b cursor-pointer border-fe-orange">
                    <div className="flex items-center space-x-4">
                      <Image src={BCA} alt="bca" className="inline-block" />
                      <h1 className="uppercase">BANK CENTRAL ASIA</h1>
                    </div>
                    <div className="flex items-center text-[#CA5B00]">
                      <MdChevronRight alt="indicator" className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between w-full py-3 bg-white border-b cursor-pointer border-fe-orange">
                    <div className="flex items-center space-x-4">
                      <Image src={BCA} alt="bca" className="inline-block" />
                      <h1 className="uppercase">BANK CENTRAL ASIA</h1>
                    </div>
                    <div className="flex items-center text-[#CA5B00]">
                      <MdChevronRight alt="indicator" className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between w-full py-3 bg-white border-b cursor-pointer border-fe-orange">
                    <div className="flex items-center space-x-4">
                      <Image src={BCA} alt="bca" className="inline-block" />
                      <h1 className="uppercase">BANK CENTRAL ASIA</h1>
                    </div>
                    <div className="flex items-center text-[#CA5B00]">
                      <MdChevronRight alt="indicator" className="text-2xl" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <section>
          <div className="pt-24 mx-auto h-fit sm:max-w-md bg-fe-primary">
            <div className="w-full p-3 text-center shadow-sm rounded-xl">
              <button className="p-3 text-white rounded-xl bg-fe-orange">
                Isi Saldo Sekarang{" "}
                <Image
                  src={Coin}
                  alt="coin"
                  className="inline-block text-white"
                />
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default PaymentPage;
