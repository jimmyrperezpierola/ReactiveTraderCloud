import { CurrencyPairPosition } from '../model/currencyPairPosition'

export const getMinMax = (chartData: CurrencyPairPosition[]) =>
  chartData.reduce(
    (prev, curr) => {
      const { basePnl } = curr
      prev.max = Math.max(prev.max, basePnl)
      prev.min = Math.min(prev.min, basePnl)
      return prev
    },
    { max: 0, min: 0 },
  )
