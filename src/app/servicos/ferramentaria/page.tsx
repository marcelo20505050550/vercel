import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import FerramentariaLandingPage from "@/components/services/FerramentariaLandingPage";

export const metadata: Metadata = {
  title: "Ferramentaria | Boaventura Usinagem",
  description: "Fabricação de ferramentas especializadas, moldes e dispositivos de precisão para otimizar processos produtivos.",
};

export default function FerramentariaPage() {
  return (
    <MainLayout>
      <FerramentariaLandingPage />
    </MainLayout>
  );
}
