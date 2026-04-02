import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import MaquinasEspeciaisLandingPage from "@/components/services/MaquinasEspeciaisLandingPage";

export const metadata: Metadata = {
  title: "Máquinas Especiais | Boaventura Usinagem",
  description: "Desenvolvimento de máquinas sob medida para processos industriais específicos, criando soluções exclusivas e inovadoras.",
};

export default function MaquinasEspeciaisPage() {
  return (
    <MainLayout>
      <MaquinasEspeciaisLandingPage />
    </MainLayout>
  );
}
