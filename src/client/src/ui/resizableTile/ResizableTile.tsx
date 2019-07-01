import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styled } from 'rt-theme'
import _ from 'lodash'

import SpotTileContainer from '../../ui/spotTile/SpotTileContainer'
import { TileViews } from '../../ui/workspace/workspaceHeader'

import { selectPositionsChartModel } from '../../ui/analytics/selectors'
import { AnalyticsActions } from '../../ui/analytics/actions'
import PNLBar from '../../ui/analytics/components/analyticsBarChart/PNLBar'
import { BlotterContainer } from '../../ui/blotter'
import { getMinMax } from '../analytics/utils/chartUtils'

const ResizableWrapper = styled('div')`
  height: 100%;
  width: 100%;
`

const SpotTileStyle = styled.div`
  min-width: 26rem;
  min-height: 12rem;
  padding: 0.625rem;
  margin: auto;
`
const BarGraphWrapper = styled('div')`
  min-width: 26rem;
  padding: 0.625rem;
  margin: auto;
`

const BlotterWrapper = styled('div')`
  height: calc(100% - 260px);
  padding: 0.625rem;
`

interface Props {
  id: string
  tileView: TileViews
}

interface ViewState {
  showBarGraph: boolean
  showBlotter: boolean
}

const initalState: ViewState = {
  showBarGraph: false,
  showBlotter: false,
}

const showBarGraphThreshold = 250
const showBlotterThreshold = 420
const bounceFrequency = 50

function useExpandedWindow(expandThrehold: number) {
  const dispatch = useDispatch()

  const [viewState, setViewState] = useState(initalState)

  useEffect(() => {
    dispatch(AnalyticsActions.subcribeToAnalytics())
  }, [dispatch])

  useEffect(() => {
    const handleResize = _.debounce(
      () =>
        setViewState({
          showBarGraph: window.innerHeight > showBarGraphThreshold,
          showBlotter: window.innerHeight > showBlotterThreshold,
        }),
      bounceFrequency,
    )
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return { viewState }
}

const ResizableTile: React.FC<Props> = ({ id, tileView }) => {
  const positionsData = useSelector(selectPositionsChartModel)
  const positionRow = positionsData.seriesData.find(data => data.symbol === id)

  const { max } = getMinMax(positionsData.seriesData)

  const { viewState } = useExpandedWindow(250)
  return (
    <ResizableWrapper>
      <SpotTileStyle>
        <SpotTileContainer id={id} tileView={TileViews.Analytics} />
      </SpotTileStyle>
      {viewState.showBarGraph && positionRow && (
        <BarGraphWrapper>
          <PNLBar symbol={id} basePnl={positionRow.basePnl} maxVal={max} />
        </BarGraphWrapper>
      )}
      {viewState.showBlotter && (
        <BlotterWrapper>
          <BlotterContainer symbol={id} />
        </BlotterWrapper>
      )}
    </ResizableWrapper>
  )
}

export default ResizableTile
