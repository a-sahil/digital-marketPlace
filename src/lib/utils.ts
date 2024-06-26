import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(
  price: number | string, 
  options: {
    currency ?: "USD" | "EUR" | "GBP" | "BDT",
    notation ?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'USD' , notation ='compact' }= options

  const numericPrice = typeOf price === "string" ? parseFloat(price) : price
}  