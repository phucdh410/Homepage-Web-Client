export const MTimelineNodeIcon = ({
  className,
}: {
  className?: string | undefined;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="71"
      viewBox="0 0 71 71"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_2543_69375)">
        <circle cx="35.5" cy="35.5" r="15.5" fill="#124874" />
        <circle cx="35.5" cy="35.5" r="7.5" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_2543_69375"
          x="0"
          y="0"
          width="71"
          height="71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0705882 0 0 0 0 0.282353 0 0 0 0 0.454902 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2543_69375"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2543_69375"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
