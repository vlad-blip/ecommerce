type Props = {
  children: React.ReactNode;
};

export default function NavButton({ children }: Props) {
  return (
    <button className="flex bg-gray-200 py-1 px-3 rounded-md text-blue-600 font-semi-bold whitespace-nowrap">
      {children}
    </button>
  );
}
