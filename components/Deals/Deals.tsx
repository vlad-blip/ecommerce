import DealsContainer from "./DealsContainer";
import Categories from "./Categories";
import Banner from "./Banner";
import AuthForm from "./AuthForm";

export default function Deals() {
  return (
    <DealsContainer>
      <Categories className="hidden md:flex" />
      <Banner />
      <div className="hidden md:flex gap-2 flex-col basis-1/5">
        <AuthForm />
        <p className="bg-orange-400 text-white p-4 rounded-md">
          Get US $10 off with a new supplier
        </p>
        <p className="bg-teal-400 text-white p-4 rounded-md">
          Send quotes with supplier preferences
        </p>
      </div>
    </DealsContainer>
  );
}
