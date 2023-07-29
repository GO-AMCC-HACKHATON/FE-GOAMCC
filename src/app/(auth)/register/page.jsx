"use client";

import FormComponent from "@/components/molecules/Form";
import MainLayout from "@/components/templates/MainLayout";
import { Feans } from "@/utils/icon";
import Image from "next/image";
import React from "react";

const RegisterPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex flex-col w-full h-full px-4 pt-20 mx-auto sm:max-w-md bg-prs-secondary bg-fe-primary">
          <Image src={Feans} alt="feans-logo" className="mb-8" />
          <h1 className="mb-2 font-bold text-fe-h4">Daftar Akun FinEase</h1>
          <h3 className="text-[#7B7B7B] text-sm">
            Daftar di aplikasi FinEase dan ajukan pinjaman modal bisnis kamu.
          </h3>
          <FormComponent as="register" />
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
