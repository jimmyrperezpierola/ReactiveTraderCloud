import _ from 'lodash'
import React, { Component, useContext } from 'react'

import { ConnectionState } from 'rt-system'
import { ServiceStatus } from 'rt-types'
import { Content, Fill, Header, Root, OpenFinLogoContainer } from './styled'
import { OpenFinLogo } from './assets/OpenFinLogo'
import { PlatformContext } from 'rt-components'

const Logo: React.SFC = () => {
  const platform = useContext(PlatformContext)

  return (
    <div>
      {platform.name === 'openfin' && (
        <OpenFinLogoContainer>
          <OpenFinLogo />
        </OpenFinLogoContainer>
      )}
    </div>
  )
}

export default class StatusBar extends Component<
  {
    connectionStatus: ConnectionState
    services: ServiceStatus[]
  },
  {}
> {
  render() {
    return (
      <Root>
        <Content expand={false}>
          <Header>
            <Fill />
            <Logo />
            {this.props.children}
          </Header>
        </Content>
      </Root>
    )
  }
}
