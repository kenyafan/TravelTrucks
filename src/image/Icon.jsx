export const Icon = ({ id, width, height, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/icons.svg#${id}`} />
    </svg>
  );
};
