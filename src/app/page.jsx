import Image from "next/image";
import React from "react";
import {
  Coin,
  Feans,
  FeansText,
  FeansWhite,
  Message,
  Riwayat,
  Saldo,
  Tunai,
} from "@/utils/icon";
import { CONTENT_BERANDA } from "@/constants";
import MainLayout from "@/components/templates/MainLayout";
import Card from "@/components/atoms/Card";

export default function Home() {
  return (
    <MainLayout>
      <section>
        <div className="mx-auto sm:max-w-md bg-fe-primary">
          <div className="px-4 py-10 bg-fe-orange rounded-bl-[32px] rounded-br-[32px]">
            <div className="flex justify-between">
              <Image src={FeansWhite} alt="feans-logo" className="mb-8" />
              <Image src={FeansText} alt="feans-logo" className="mb-8" />
              <Image src={Message} alt="feans-logo" className="mb-8" />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-white">Selamat Pagi,</p>
                <h1 className="font-bold text-white text-fe-h4">Nabraska</h1>
              </div>
              <div className="flex gap-2">
                <div className="bg-[#FFB904] w-full p-3 border-2 rounded-xl border-fe-secondary">
                  <p className="text-xs text-white">Jumlah Saldo</p>
                  <h1 className="font-bold text-white text-fe-h4">
                    <span className="text-xs font-light text-white">Rp</span>{" "}
                    1.000
                  </h1>
                </div>
                <div className="bg-[#FFB904] w-full p-3 border-2 rounded-xl border-fe-secondary">
                  <p className="text-xs text-white">Total Tagihan</p>
                  <h1 className="font-bold text-white text-fe-h4">
                    <span className="text-xs font-light text-white">Rp</span>{" "}
                    700.000
                  </h1>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="bg-[#FFF0B9] p-2 w-[80%] text-sm rounded-2xl space-x-2">
                  <Image
                    src={Coin}
                    alt="feans-logo"
                    className="inline-block w-6"
                  />
                  <span className="text-[#CA5B00] text-xs">
                    Kamu Sedang Mengajukan peminjaman
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto sm:max-w-md bg-fe-primary">
          <div className="px-4 py-10">
            <div className="grid max-w-xs grid-cols-3 gap-10 mx-auto place-items-center">
              <div className="w-full px-4 py-1 text-center bg-white rounded-xl">
                <Image src={Saldo} alt="feans-logo" className="w-12" />
                <p className="text-[#CA5B00] text-xs">Isi Saldo</p>
              </div>
              <div className="w-full px-4 py-1 text-center bg-white rounded-xl">
                <Image src={Tunai} alt="feans-logo" className="w-12" />
                <p className="text-[#CA5B00] text-xs">Isi Saldo</p>
              </div>
              <div className="w-full px-4 py-1 text-center bg-white rounded-xl">
                <Image src={Riwayat} alt="feans-logo" className="w-12" />
                <p className="text-[#CA5B00] text-xs">Isi Saldo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto sm:max-w-md bg-fe-primary">
          <div className="px-4">
            <div className="space-y-3">
              {CONTENT_BERANDA.map((content) => {
                return (
                  <Card
                    key={content.id}
                    title={content.title}
                    image={content.image}
                    description={content.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
