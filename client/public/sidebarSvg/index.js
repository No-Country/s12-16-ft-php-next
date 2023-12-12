import React from "react";

export default function OpenClose() {
  return (
    <svg
      width="56"
      height="176"
      viewBox="0 0 56 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_649_589)">
        <path
          d="M31.1166 130.552C29.4855 136.759 11 154.69 11 154.69V13.3103C11 13.3103 27.8544 29.1724 31.1166 35.3793C34.3787 41.5862 32.7477 124.345 31.1166 130.552Z"
          fill="#FFC756"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_649_589"
          x="0.6"
          y="0.910547"
          width="54.8"
          height="174.179"
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
          <feOffset dx="-6" dy="-4" />
          <feGaussianBlur stdDeviation="8.2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_649_589"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_649_589"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
