import * as React from "react";

function Oval(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={3}
      height={4}
      viewBox="0 0 3 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={1.5} cy={2} r={1.5} fill="#D7D7D7" />
    </svg>
  );
}

export default Oval;
