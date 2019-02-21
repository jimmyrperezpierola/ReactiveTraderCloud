import React, { useContext } from 'react'
import { OpenFinChrome, OpenFinHeader, PlatformContext } from 'rt-components'
import { styled } from 'rt-theme'

const RouteStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.core.darkBackground};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const RouteWrapper: React.SFC = ({ children }) => {
  const platform = useContext(PlatformContext)
  return (
    <RouteStyle>
      {platform.name === 'openfin' ? (
        <OpenFinChrome>
          <OpenFinHeader close={platform.window.close} />
          {children}
        </OpenFinChrome>
      ) : (
        children
      )}
    </RouteStyle>
  )
}

export { RouteStyle, RouteWrapper }
