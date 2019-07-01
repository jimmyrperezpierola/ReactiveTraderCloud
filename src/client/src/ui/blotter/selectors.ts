import { createSelector } from 'reselect'
import { GlobalState } from 'StoreTypes'

const getBlotterTrades = (state: GlobalState) => state.blotterService && state.blotterService.trades

const getBlotterTradesForSymbol = (state: GlobalState, symbol: string) => {
  return (
    state.blotterService &&
    Object.keys(state.blotterService.trades)
      .filter(id => state.blotterService.trades[id].symbol === symbol)
      .map(id => state.blotterService.trades[id])
  )
}
const getBlotterStatus = ({ compositeStatusService }: GlobalState) =>
  compositeStatusService.blotter && compositeStatusService.blotter.connectionStatus

export const selectBlotterRows = createSelector(
  getBlotterTrades,
  trades => Object.values(trades).reverse(),
)

export const selectBlotterRowsForSymbol = createSelector(
  getBlotterTradesForSymbol,
  trades => Object.values(trades).reverse(),
)

export const selectBlotterStatus = createSelector(
  getBlotterStatus,
  status => status,
)
