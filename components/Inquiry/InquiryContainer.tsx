import Image from "next/image";

export default function InquiryContainer() {
  return (
    <section className="relative p-10 mb-10 md:w-4/5 mx-auto md:rounded-md overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500">
      <Image
        className="object-cover opacity-30"
        src="/images/InquiryBackground.png"
        alt=""
        fill
      />
      <div className="relative flex md:flex-row flex-col justify-between">
        <hgroup>
          <h3 className="text-4xl text-white">
            An easy way to send requests to all suppliers
          </h3>
          <p className="text-white my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </hgroup>
        <div className="bg-white p-4 rounded-md md:ml-10">
          <h4 className="text-2xl font-bold mb-4">Send quote to suppliers</h4>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="What item do you need?"
              className="border-2 rounded-md p-2"
            />
            <textarea
              placeholder="Write more details?"
              className="border-2 rounded-md p-2"
            />
            <div className="flex gap-2 flex-wrap">
              <input
                type="number"
                placeholder="Quantity"
                className="border-2 rounded-md p-2"
              />
              <select className="border-2 rounded-md p-2">
                <option>Pcs</option>
                <option>Something else</option>
                <option>Once again something</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 w-fit py-2 px-4 rounded-md text-white"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
