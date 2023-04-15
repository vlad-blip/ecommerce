import Nav from "@/components/Navigation/Nav";
import Deals from "@/components/Deals/Deals";
import OffersContainer from "@/components/Offers/OffersContainer";
import OutdoorContainer from "@/components/Outdoor/OutdoorContainer";
import GadgetsContainer from "@/components/Gadgets/GadgetsContainer";
import InquiryContainer from "@/components/Inquiry/InquiryContainer";
import RecommendedContainer from "@/components/Recommended/RecommendedContainer";
import ServicesContainer from "@/components/Services/ServicesContainer";
import SuppliersContainer from "@/components/Suppliers/SuppliersContainer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Deals />
        <OffersContainer />
        <OutdoorContainer />
        <GadgetsContainer />
        <InquiryContainer />
        <RecommendedContainer />
        <ServicesContainer />
        <SuppliersContainer />
      </main>
    </>
  );
}
