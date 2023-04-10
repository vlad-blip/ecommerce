import TimerCell from "./TimerCell";

type Props = {
  className?: string;
};

const DUMMY_DATA = [
  { number: "04", duration: "Days" },
  {
    number: "13",
    duration: "Hour",
  },
  { number: "34", duration: "Min" },
  { number: "56", duration: "Sec" },
];

export default function Timer({ className = "" }: Props) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {DUMMY_DATA.map((timer, i) =>
        timer.duration === "Days" ? (
          <TimerCell className="hidden md:block" key={i} {...timer} />
        ) : (
          <TimerCell key={i} {...timer} />
        )
      )}
    </div>
  );
}
