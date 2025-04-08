const StudentPaginationSvg = () => {
  return (
    <svg
      width={532}
      height={84}
      viewBox="0 0 732 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={6} cy={38} r={6} fill="#20B486" />
      <circle cx={30} cy={38} r={6} fill="#CFD3D6" />
      <circle cx={54} cy={38} r={6} fill="#CFD3D6" />
      <circle cx={78} cy={38} r={6} fill="#CFD3D6" />
      <circle cx={102} cy={38} r={6} fill="#CFD3D6" />
      <g filter="url(#filter0_d_44_228)">
        <rect
          x={612}
          y={16}
          width={44}
          height={44}
          rx={8}
          fill="white"
          shapeRendering="crispEdges"
        />
        <path
          d="M637 45.5L629.5 38L637 30.5"
          stroke="#363A3D"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter1_d_44_228)">
        <rect
          x={672}
          y={16}
          width={44}
          height={44}
          rx={8}
          fill="#20B486"
          shapeRendering="crispEdges"
        />
        <path
          d="M691 30.5L698.5 38L691 45.5"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_44_228"
          x={588}
          y={0}
          width={84}
          height={84}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-4} dy={4} />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.12549 0 0 0 0 0.705882 0 0 0 0 0.52549 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_44_228"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_44_228"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_44_228"
          x={648}
          y={0}
          width={84}
          height={84}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-4} dy={4} />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.12549 0 0 0 0 0.705882 0 0 0 0 0.52549 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_44_228"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_44_228"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default StudentPaginationSvg;
