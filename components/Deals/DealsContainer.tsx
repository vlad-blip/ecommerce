type Props = {
  children: React.ReactNode;
};

export default function DealsContainer({ children }: Props) {
  return (
    <div className="flex gap-4 justify-between md:w-4/5 md:p-4 max-h-44 md:max-h-none mx-auto md:border-2 border-gray-200 rounded-md">
      {children}
    </div>
  );
}
