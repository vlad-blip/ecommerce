import Image from "next/image";

export default function Menu({ className }: { className?: string }) {
  return (
    <button className={`${className}`}>
      <Image src="/icons/menu.svg" width={20} height={20} alt="Menu icon" />
    </button>
  );
}
