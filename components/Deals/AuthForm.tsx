import Image from "next/image";

export default function AuthForm() {
  return (
    <div className="bg-blue-100 p-4 rounded-md h-full">
      <div className="flex gap-2 pb-4">
        <Image
          src="/icons/Avatar.svg"
          width={44}
          height={44}
          alt="Avatar icon"
        />
        <p>Hi, user let&apos;s get started</p>
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-blue-500 text-white py-1 rounded-md">
          Join now
        </button>
        <button className="bg-white text-blue-500 py-1 rounded-md">
          Log in
        </button>
      </div>
    </div>
  );
}
