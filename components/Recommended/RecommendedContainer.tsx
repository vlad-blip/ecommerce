import RecommendedItems from "./RecommendedItems";

export default function RecommendedContainer() {
  return (
    <section className="w-4/5 mx-auto mb-10">
      <h3 className="text-2xl font-bold">Recommended items</h3>
      <div className="mt-8">
        <RecommendedItems />
      </div>
    </section>
  );
}
