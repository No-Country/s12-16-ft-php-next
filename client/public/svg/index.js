import React from "react";

export const ModalButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="220"
      viewBox="0 0 60 220"
      fill="none"
    >
      <g filter="url(#filter0_d_318_13349)">
        <path
          d="M25.2258 63.4483C27.1535 57.2414 49 39.3103 49 39.3103L49 180.69C49 180.69 29.0811 164.828 25.2259 158.621C21.3706 152.414 23.2982 69.6552 25.2258 63.4483Z"
          fill="white"
        />
      </g>
      <path
        d="M35 106L39.1041 110.048L35.1779 114.049"
        stroke="#094B63"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_318_13349"
          x="0.6"
          y="18.9105"
          width="58.8"
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
            result="effect1_dropShadow_318_13349"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_318_13349"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
