import * as React from 'react'
import { PlatformAdapter } from './adapters'

export const PlatformContext = React.createContext<PlatformAdapter>(null)
export const { Provider: PlatformProvider, Consumer: PlatformConsumer } = PlatformContext
