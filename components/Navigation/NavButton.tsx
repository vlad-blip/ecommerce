type Props = {
  children: React.ReactNode;
};

export default function NavButton({ children }: Props) {
  return (
    <button className="flex md:bg-transparent bg-gray-200 py-1 px-3 items-center gap-2 rounded-md text-blue-600 md:text-black font-semi-bold whitespace-nowrap">
      {children}
    </button>
  );
}
