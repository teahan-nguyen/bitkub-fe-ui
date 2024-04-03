export default function SVGArrowDownSelect({
  className,
  isSmall,
}: {
  isSmall: boolean;
  className: string;
}) {
  if (isSmall) {
    return (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_112_10054)">
          <path
            className={className}
            d="M6.77222 7.15845L10.8402 10.9751L14.9082 7.15845L16.1578 8.33345L10.8402 13.3334L5.52258 8.33345L6.77222 7.15845Z"
            fill="none"
          />
        </g>
        <defs>
          <clipPath id="clip0_112_10054">
            <rect
              width="21.2705"
              height="20"
              fill="white"
              transform="translate(0.204956)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_112_10054)">
        <path
          className={className}
          d="M6.77222 7.15845L10.8402 10.9751L14.9082 7.15845L16.1578 8.33345L10.8402 13.3334L5.52258 8.33345L6.77222 7.15845Z"
          fill="none"
        />
      </g>
      <defs>
        <clipPath id="clip0_112_10054">
          <rect
            width="21.2705"
            height="20"
            fill="white"
            transform="translate(0.204956)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
