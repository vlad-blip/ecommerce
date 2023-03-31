import Link from "next/link";

type Props = {
  className?: string;
  children: string;
};

export default function Category({ children, className = "" }: Props) {
  return (
    <Link
      href=""
      className={`pl-4 py-2 text-gray-600 hover:text-black hover:bg-blue-100 hover:font-semibold rounded-md ${className}`}
    >
      {children}
    </Link>
  );
}
