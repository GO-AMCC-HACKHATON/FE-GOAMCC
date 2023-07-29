"use client";

import FormComponent from "@/components/molecules/Form";
import MainLayout from "@/components/templates/MainLayout";
import { Feans } from "@/utils/icon";
import Image from "next/image";
import React from "react";

const PersonalFormPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex flex-col w-full h-full px-4 pt-20 mx-auto sm:max-w-md bg-prs-secondary bg-fe-primary">
          <Image src={Feans} alt="feans-logo" className="mb-8" />
          <h1 className=" font-bold text-fe-h4 text-[#F09000]">
            Formulir Pengajuan
          </h1>
          <h3 className="text-[#7B7B7B] text-sm mb-4">
            Isikan sesuai dengan data yang valid
          </h3>
          <h3 className="font-bold text-lg text-[#CA5B00]">Data Pribadi</h3>
          <FormComponent as="personal" />
        </div>
      </div>
    </MainLayout>
  );
};

export default PersonalFormPage;
