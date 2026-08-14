interface SquaresProps {
  /** Size of each square cell in px */
  squareSize?: number;
  /** Grid line color */
  borderColor?: string;
  backgroundColor?: string;
  className?: string;
}

const Squares = ({
  squareSize = 40,
  borderColor = "rgba(0, 0, 0, 0.08)",
  backgroundColor,
  className,
}: SquaresProps) => {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor,
        backgroundImage: `
          linear-gradient(to right, ${borderColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${borderColor} 1px, transparent 1px)
        `,
        backgroundSize: `${squareSize}px ${squareSize}px`,
      }}
    />
  );
};

export default Squares;
