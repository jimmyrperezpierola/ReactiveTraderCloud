import React from 'react'
import { CurrencyPairPosition } from '../../model/index'
import PNLBar from './PNLBar'
import { getMinMax } from '../../utils/chartUtils'

export interface Props {
  chartData: CurrencyPairPosition[]
}

const AnalyticsBarChart: React.FC<Props> = ({ chartData }) => {
  const { max, min } = getMinMax(chartData)
  const maxWidth = Math.max(Math.abs(max), Math.abs(min))
  return (
    <React.Fragment>
      {chartData.map((chartItem, index) => {
        const { basePnl, symbol } = chartItem
        return <PNLBar key={index} basePnl={basePnl} symbol={symbol} maxVal={maxWidth} />
      })}
    </React.Fragment>
  )
}

export default AnalyticsBarChart
