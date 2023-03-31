import Image from "next/image";

type Props = {
  icon: string;
  className?: string;
  children: React.ReactNode;
};

export default function Action({ icon, className, children }: Props) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Image src={icon} alt="Action icon" />
      <span>{children}</span>
    </div>
  );
}
