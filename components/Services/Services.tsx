import Service from "./Service";

export default function Services() {
  return (
    <ul className="flex flex-col md:flex-row gap-4">
      <li className="w-full mx-auto">
        <Service
          img="/images/ServicesIndustry.svg"
          title="Source from Industry Hubs"
          icon="/icons/search.svg"
        />
      </li>
      <li className="w-full mx-auto">
        <Service
          img="/images/ServicesProducts.svg"
          title="Customize Your Products"
          icon="/icons/inventory_2.svg"
        />
      </li>
      <li className="w-full mx-auto">
        <Service
          img="/images/ServicesDelivery.svg"
          title="Fast, reliable shipping by ocean or air"
          icon="/icons/send.svg"
        />
      </li>
      <li className="w-full mx-auto">
        <Service
          img="/images/ServicesMonitoring.svg"
          title="Product monitoring and inspection"
          icon="/icons/security.svg"
        />
      </li>
    </ul>
  );
}
