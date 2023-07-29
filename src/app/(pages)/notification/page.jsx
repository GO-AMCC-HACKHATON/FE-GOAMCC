import Button from "@/components/atoms/Button";
import MainLayout from "@/components/templates/MainLayout";
import { Feans, MdChevronRight } from "@/utils/icon";
import Image from "next/image";
import React from "react";

const NotificationPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full h-screen px-4 pt-20 mx-auto space-y-3 sm:max-w-md bg-fe-primary">
          <h1 className="font-bold text-lg text-[#F09000] text-start">
            Hari Ini
          </h1>
          <div className="space-y-2">
            <div className="flex items-center px-4 py-3 space-x-3 bg-white rounded-xl">
              <div>
                <Image
                  src={Feans}
                  alt="feans-logo"
                  className="mb"
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-sm ">
                <h1 className="font-bold line-clamp-1">
                  Selamat pinjaman modal yang kamu ajukan sudah berhasil
                </h1>
                <p className="text-xs text-[#7B7B7B]">
                  Selamat! Pinjaman modal yang kamu ajukan sudah berhasil.
                </p>
              </div>
              <div className="flex items-center text-[#7B7B7B]">
                <p className="text-xs">1 jam lalu</p>
              </div>
            </div>
            <div className="flex items-center px-4 py-3 space-x-3 bg-white rounded-xl">
              <div>
                <Image
                  src={Feans}
                  alt="feans-logo"
                  className="mb"
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-sm ">
                <h1 className="font-bold line-clamp-1">
                  Selamat pinjaman modal yang kamu ajukan sudah berhasil
                </h1>
                <p className="text-xs text-[#7B7B7B]">
                  Selamat! Pinjaman modal yang kamu ajukan sudah berhasil.
                </p>
              </div>
              <div className="flex items-center text-[#7B7B7B]">
                <p className="text-xs">1 jam lalu</p>
              </div>
            </div>
            <div className="flex items-center px-4 py-3 space-x-3 bg-white rounded-xl">
              <div>
                <Image
                  src={Feans}
                  alt="feans-logo"
                  className="mb"
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-sm ">
                <h1 className="font-bold line-clamp-1">
                  Selamat pinjaman modal yang kamu ajukan sudah berhasil
                </h1>
                <p className="text-xs text-[#7B7B7B]">
                  Selamat! Pinjaman modal yang kamu ajukan sudah berhasil.
                </p>
              </div>
              <div className="flex items-center text-[#7B7B7B]">
                <p className="text-xs">1 jam lalu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotificationPage;
