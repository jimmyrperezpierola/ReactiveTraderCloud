// Import required pages
import {browser, element, ExpectedConditions as EC, by} from 'protractor';

describe('UI Smoke Tests for Reactive Trader Cloud App', async() => {

  beforeEach(async() => {
    await browser.waitForAngularEnabled(false)
    await browser.get(browser.params.baseUrl)
  })

  it('Verify Reactive Trader Page Title', async() => {
    let pageTitle = await browser.getTitle()
    expect(pageTitle).toEqual('Reactive Trader Cloud')
  })

  afterAll(async() => {
      await browser.close()
    })

})
