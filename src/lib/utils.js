import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  return formatter.format(price).replace("$", "$ ");
};

export async function generateSHA256Hash(input) {
  // Encode the input string as UTF-8
  const encoder = new TextEncoder();
  const data = encoder.encode(input);

  // Compute the SHA-256 hash
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Convert the hash buffer to a hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

export const getImagesHash = async ({ color, wheel, brake, seat, trim }) => {
  const stateString = `color:${color},wheel:${wheel},brake:${brake},seat:${seat},trim:${trim}`;
  console.log({ stateString });
  return await generateSHA256Hash(stateString);
};
