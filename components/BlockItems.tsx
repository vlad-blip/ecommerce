type Props = {
  aside: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export default function BlockItems({ aside, content, className }: Props) {
  return (
    <section
      className={`flex flex-col my-4 md:flex-row justify-between bg-white md:w-4/5 mx-auto md:border-2 border-gray-200 rounded-md ${className}`}
    >
      <div className="md:w-72">{aside}</div>
      <div className="overflow-auto w-full">{content}</div>
    </section>
  );
}
