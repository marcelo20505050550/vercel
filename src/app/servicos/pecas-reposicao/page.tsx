import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import PecasReposicaoLandingPage from "@/components/services/PecasReposicaoLandingPage";

export const metadata: Metadata = {
  title: "Peças de Reposição | Boaventura Usinagem",
  description: "Componentes sob medida para manutenção e reposição de máquinas, garantindo desempenho contínuo e durabilidade.",
};

export default function PecasReposicaoPage() {
  return (
    <MainLayout>
      <PecasReposicaoLandingPage />
    </MainLayout>
  );
}
