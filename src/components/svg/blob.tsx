import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const BlobArt = component$<QwikIntrinsicElements["svg"]>((props) => (
  <svg
    id="visual"
    viewBox="0 0 500 500"
    width="500"
    height="500"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    stroke="currentColor"
    fill="none"
    stroke-width="2"
    {...props}
  >
    <g transform="translate(181.80434586065303 202.42466648162423)">
      <path d="M167.8 -170.3C229.4 -148.4 299.3 -106.7 308.1 -54.7C316.9 -2.6 264.6 60 223.8 127.8C182.9 195.7 153.7 268.9 106.3 281.5C58.9 294.1 -6.6 246.2 -54.6 204.9C-102.7 163.7 -133.2 129.1 -152.7 90.5C-172.1 51.9 -180.6 9.3 -163.4 -18.4C-146.1 -46.2 -103.2 -59 -71.7 -86.3C-40.2 -113.5 -20.1 -155.3 16.5 -175C53.1 -194.7 106.3 -192.3 167.8 -170.3"></path>
    </g>
  </svg>
));
