import Nav from "@/components/Navigation/Nav";
import Deals from "@/components/Deals/Deals";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="">
        <Deals />
      </main>
    </>
  );
}
