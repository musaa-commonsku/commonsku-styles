import React from "react"

export function NavFinanceIcon({
  width=24,
  style={},
  fill="none",
  color="#fff",
  outline=true, // outline/completely filled in
  ...props
}: React.PropsWithChildren<{
  fill?: string,
  color?: string,
  width?: number | string,
  outline?: boolean,
  style?: React.CSSProperties,
}>) {
  return (
    <svg
      fill={fill}
      width={width}
      height={width}
      style={style}
      {...props}
    >
      {outline ? <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43.96 0 1.504.32 1.76.844.2.413.543.796 1.002.796.485 0 .885-.41.739-.873-.307-.975-1.083-1.786-2.341-2.097v-.545a1.165 1.165 0 0 0-2.33 0v.525c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.126 0-1.772-.357-2.087-.889-.229-.387-.576-.751-1.026-.751-.503 0-.917.433-.745.906.416 1.142 1.469 1.814 2.678 2.064v.53a1.17 1.17 0 1 0 2.34 0v-.5c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42Z"
        fill={color}
      /> : <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1.41 16.09v.58c0 .73-.6 1.33-1.33 1.33h-.01c-.73 0-1.33-.6-1.33-1.33v-.6c-1.33-.28-2.51-1.01-3.01-2.24-.23-.55.2-1.16.8-1.16h.24c.37 0 .67.25.81.6.29.75 1.05 1.27 2.51 1.27 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21v-.6c0-.73.6-1.33 1.33-1.33h.01c.73 0 1.33.6 1.33 1.33v.62c1.38.34 2.25 1.2 2.63 2.26.2.55-.22 1.13-.81 1.13h-.26c-.37 0-.67-.26-.77-.62-.23-.76-.86-1.25-2.12-1.25-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.02 1.83-1.39 2.83-3.13 3.16Z"
        fill={color}
      />}
    </svg>
  );
}

export default NavFinanceIcon;