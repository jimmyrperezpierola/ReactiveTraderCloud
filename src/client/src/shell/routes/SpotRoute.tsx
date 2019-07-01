import React from 'react'
import queryString from 'query-string'
import { RouteComponentProps } from 'react-router-dom'
import { RouteWrapper } from 'rt-components'
import { ResizableTile } from '../../ui/resizableTile'
import { TileViews } from '../../ui/workspace/workspaceHeader'

const getTileViewFromQueryStr: (queryStr: string) => TileViews = queryStr => {
  const parsedQueryString = queryString.parse(queryStr)
  const tileView = parsedQueryString['tileView']
  return !tileView
    ? TileViews.Normal
    : Object.values(TileViews).includes(tileView)
    ? (tileView as TileViews)
    : TileViews.Normal
}
export default ({ location: { search }, match }: RouteComponentProps<{ symbol: string }>) => {
  const tileView = getTileViewFromQueryStr(search)
  return (
    <RouteWrapper>
      <ResizableTile id={match.params.symbol} tileView={tileView} />
    </RouteWrapper>
  )
}
