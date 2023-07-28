"use client";

import FormComponent from "@/app/components/molecules/Form";
import MainLayout from "@/app/components/templates/MainLayout";
import { Feans } from "@/utils/icon";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-col w-full h-full px-4 pt-20 mx-auto sm:max-w-md bg-prs-secondary bg-fe-primary">
          <Image src={Feans} alt="feans-logo" className="mb-8" />
          <h1 className="mb-2 font-bold text-fe-h4">Masuk ke akun kamu</h1>
          <h3 className="text-[#7B7B7B] text-sm">
            Masukkan akun dan kamu bisa mengajukan pinjaman modal.
          </h3>
          <FormComponent as="login" />
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
