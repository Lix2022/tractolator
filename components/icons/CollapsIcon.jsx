import * as React from "react";

function CollapsIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg width={30} height={30} fill="none" stroke="gray" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
  </svg>
  );
}

export default CollapsIcon;
