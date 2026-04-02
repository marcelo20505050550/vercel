import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import CaldeirariaLandingPage from "@/components/services/CaldeirariaLandingPage";

export const metadata: Metadata = {
  title: "Caldeiraria | Boaventura Usinagem",
  description: "Soluções sob medida para estruturas e equipamentos metálicos com alta precisão, qualidade e acabamento profissional.",
};

export default function CaldeirariaPage() {
  return (
    <MainLayout>
      <CaldeirariaLandingPage />
    </MainLayout>
  );
}
