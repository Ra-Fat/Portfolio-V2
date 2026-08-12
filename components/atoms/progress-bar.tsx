
type Props = {
  vertical?: boolean;
  points?: number[];
};

export const ProgressBar = ({
  vertical = true,
  points = [],
}: Props) => (
  <div
    className={`
      ${
        vertical
          ? "relative w-1 h-full"
          : "absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1.5"
      }
      bg-white/10
    `}
  >
    <div
      className="absolute top-0 left-0 w-full bg-white/40"
    />

    {points.map((point, i) => (
      <div
        key={i}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white/70"
        style={{ top: `${point}%` }}
      />
    ))}
  </div>
);
