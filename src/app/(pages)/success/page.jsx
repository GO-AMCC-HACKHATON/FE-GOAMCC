import Button from "@/components/atoms/Button";
import MainLayout from "@/components/templates/MainLayout";
import { Feans, Success } from "@/utils/icon";
import Image from "next/image";

const SuccessPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center justify-center w-full h-screen px-4 mx-auto space-y-3 sm:max-w-md bg-prs-secondary bg-fe-primary">
          <Image
            src={Feans}
            alt="feans-logo"
            className="mb"
            width={32}
            height={32}
          />
          <h1 className="font-bold text-fe-h4 text-[#F09000] text-center px-8">
            Sukses!
          </h1>
          <p className="text-[#7B7B7B] text-sm mb-4 text-center px-12">
            Pengajuan peminjaman modal sedang diproses. Silahkan tunggu dalam
            1x24 jam. Kami akan mengirimkan pemberitahuan melalui notifikasi dan
            juga email.
          </p>
          <Image src={Success} alt="success" width={200} />
          <Button>Kembali Ke Halaman Utama</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default SuccessPage;
