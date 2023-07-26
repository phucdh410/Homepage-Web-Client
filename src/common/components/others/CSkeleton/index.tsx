import { ICSkeletonProps } from "./types";

export const CSkeleton = ({
  count = 1,
  className = "",
  isImage = false,
}: ICSkeletonProps) => {
  return (
    <span className={`block ${className}`}>
      {Array(count)
        .fill("")
        .map((e, i) => (
          <span
            key={i}
            className={`skeleton block w-full mb-1 last:mb-0 ${
              isImage ? "h-inherit rounded-inherit" : ""
            }`}
          >
            &zwnj;
          </span>
        ))}
    </span>
  );
};
