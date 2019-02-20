import React, { SFC, useContext } from 'react'
import { OpenFinChrome, OpenFinControls, PlatformContext } from 'rt-components'

import ShellRoute from './ShellRoute'

export const OpenFinRoute: SFC = ({ ...props }) => {
  const platform = useContext(PlatformContext)

  return (
    <OpenFinChrome>
      <ShellRoute
        header={
          <OpenFinControls
            minimize={platform.window.minimize!}
            maximize={platform.window.maximize!}
            close={platform.window.close!}
          />
        }
        {...props}
      />
    </OpenFinChrome>
  )
}

export default OpenFinRoute
