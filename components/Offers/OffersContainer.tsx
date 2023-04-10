import BlockItems from "../BlockItems";
import Offers from "./Offers";
import Timer from "./Timer";

function Aside() {
  return (
    <div className="flex py-4 md:w-72 md:flex-col md:items-baseline items-center justify-between px-4">
      <hgroup className="pb-4">
        <h4 className="text-xl font-bold">Deals and offers</h4>
        <p className="text-xl text-gray-600">Electronic devices</p>
      </hgroup>
      <Timer />
    </div>
  );
}

export default function OffersContainer() {
  return <BlockItems className="my-6" aside={<Aside />} content={<Offers />} />;
}
