import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function cn(...inputs: (string | undefined)[]) {
//   return inputs.filter(Boolean).join(" ");
// }
