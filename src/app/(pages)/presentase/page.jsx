"use client";

import Button from "@/components/atoms/Button";
import Chart from "@/components/atoms/Chart";
import MainLayout from "@/components/templates/MainLayout";
import { Feans, MdChevronRight } from "@/utils/icon";
import Image from "next/image";
import React from "react";

const PresentasePage = () => {
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
            Presentase Kesehatan Finansial
          </h1>
          <h3 className="text-[#7B7B7B] text-sm mb-4">
            Isikan sesuai dengan data yang valid
          </h3>
          <Chart />
          <Button type="submit">
            Ambil Peminjaman{" "}
            <MdChevronRight className="inline-block text-lg font-extrabold" />
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default PresentasePage;
