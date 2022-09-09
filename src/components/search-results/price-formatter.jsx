import { CurrencyFormats } from '../../constants/currency'

const priceFormatter = ({ price, currency }) => {
  const priceFormatted = price?.toString(toLocaleString(CurrencyFormats[currency].format, { maximumFractionDigits: 2, minimumFractionDigits: 2 }))

  const integerValue = priceFormatted.substring(0, priceFormatted.length - 3)
  const decimalValue = priceFormatted.slice(-2)

  return {
    currency: CurrencyFormats[currency].symbol,
    amount: integerValue,
    decimals: decimalValue,
  }
}

export default priceFormatter
