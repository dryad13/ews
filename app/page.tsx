import {
  AllianceBanner,
  Alliances,
  DepotFacilities,
  DivisionsGrid,
  PortsDirectory,
} from "@/components/home/HomeSections";
import { ContactBlock } from "@/components/home/ContactBlock";
import { HeroShip } from "@/components/home/HeroShip";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <HeroShip />
      <Alliances />
      <DivisionsGrid />
      <DepotFacilities />
      <PortsDirectory />
      <AllianceBanner />
      <ContactBlock />
    </div>
  );
}
