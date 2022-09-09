import { CurrencyFormats } from '../constants/currency'

export const formatter = price => {
  const fullPrice = +`${price?.amount}.${price?.decimals < 10 ? '0' + price?.decimals : price?.decimals}`
  const priceFormatted = fullPrice.toLocaleString(CurrencyFormats[price?.currency]?.format, { maximumFractionDigits: 2, minimumFractionDigits: 2 })

  const integerValue = priceFormatted.substring(0, priceFormatted.length - 3)
  const decimalValue = priceFormatted.slice(-2)
  const currencySymbol = CurrencyFormats[price?.currency]?.symbol

  return { priceFormatted, integerValue, decimalValue, currencySymbol }
}
