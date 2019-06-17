import { Browser, Finsemble, OpenFin, PlatformAdapter } from './adapters'

// @ts-ignore
export const isFinsemble =
  // @ts-ignore
  typeof fin !== 'undefined' && fin.container && fin.container === 'Electron'
const isOpenFin = typeof fin !== 'undefined'

const getPlatform: () => PlatformAdapter = () => {
  if (isFinsemble) {
    console.info('Using Finsemble API')
    return new Finsemble()
  }
  if (isOpenFin) {
    console.info('Using OpenFin API')
    return new OpenFin()
  }
  console.info('Using Browser API')
  return new Browser()
}

const platform = getPlatform()
export default platform
