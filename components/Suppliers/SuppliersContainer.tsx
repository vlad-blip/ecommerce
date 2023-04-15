import Suppliers from "./Suppliers";

export default function SuppliersContainer() {
  return (
    <section className="w-4/5 mx-auto mb-10">
      <h4 className="text-2xl font-bold">Suppliers by region</h4>
      <div className="mt-10">
        <Suppliers />
      </div>
    </section>
  );
}
