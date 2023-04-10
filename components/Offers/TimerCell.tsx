type Props = {
  number: string;
  duration: string;
  className?: string;
};

export default function TimerCell({ number, duration, className }: Props) {
  return (
    <div
      className={`bg-gray-300 md:bg-gray-700 text-center py-1 px-4 md:py-2 md:px-3 md:rounded-md ${className}`}
    >
      <p className="font-bold text-gray-500 text-2xl md:text-sm md:text-white">
        {number}
      </p>
      <p className="text-gray-500 md:text-white md:text-sm">{duration}</p>
    </div>
  );
}
