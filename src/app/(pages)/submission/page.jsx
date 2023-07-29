import Button from "@/components/atoms/Button";
import MainLayout from "@/components/templates/MainLayout";
import { Feans, Saldo } from "@/utils/icon";
import Image from "next/image";

const SubmissionPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center justify-center w-full h-screen px-4 mx-auto space-y-3 sm:max-w-md bg-prs-secondary bg-fe-primary">
          <h1 className="font-bold text-fe-h4 text-[#F09000] text-center px-10">
            Pengajuan Peminjaman Modal
          </h1>
          <Image src={Saldo} alt="saldo" />
          <p className="text-[#7B7B7B] text-sm mb-4 text-center px-12">
            Fin Ease akan membantu menyediakan pinjaman yang mudah dan aman
            sesuai kebutuhan dan kondisi bisnis Anda !
          </p>
          <div className="flex gap-10 pt-3">
            <Button>Selengkapnya</Button>
            <Button>Ajukan Sekarang</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SubmissionPage;
