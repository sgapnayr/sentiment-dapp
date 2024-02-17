import BaseBanner from "@/components/BaseBanner";
import BaseGrowingEcosystem from "@/components/BaseGrowingEcosystem";
import DefaultLayout from "@/layout/default-layout";

export default function Home() {
  return (
    <DefaultLayout>
      <BaseBanner />
      <BaseGrowingEcosystem />
    </DefaultLayout>
  );
}
