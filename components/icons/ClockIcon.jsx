import * as React from "react";

function ClockIcon({ stroke = "#6C7281", ...rest }) {
  return (
    <svg width={30} height={30} fill="none" stroke="gray" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  );
}

export default ClockIcon;
