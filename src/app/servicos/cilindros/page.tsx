import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import CilindrosLandingPage from "@/components/services/CilindrosLandingPage";

export const metadata: Metadata = {
  title: "Cilindros Hidráulicos e Pneumáticos | Boaventura Usinagem",
  description: "Fabricação e manutenção de cilindros hidráulicos e pneumáticos sob medida para sistemas de automação industrial.",
};

export default function CilindrosPage() {
  return (
    <MainLayout>
      <CilindrosLandingPage />
    </MainLayout>
  );
}
