import {browser, element, ExpectedConditions as EC, protractor, by} from 'protractor'
import { TradePage } from '../pages/trade.page'

const maxWaitTime = 10000;
const tradePage = new TradePage()

export class TradeMethod {

  async fillNotional(newNotionalValue: string): Promise<boolean> {
    await browser.wait(EC.visibilityOf(tradePage.textAmountThirdCell()), maxWaitTime)
    const textNotional = await tradePage.textAmountThirdCell().getAttribute('value')
    expect(textNotional).toEqual('1,000,000')
    await tradePage.textAmountThirdCell().clear()
    await tradePage.textAmountThirdCell().sendKeys(newNotionalValue)
    return true
  }

  async GBPToUSDTrade(): Promise<boolean> {
    await browser.wait(EC.visibilityOf(tradePage.linkAll()), maxWaitTime)
    await tradePage.linkAll().click()
    await this.fillNotional('1,111,111')
    await browser.wait(EC.visibilityOf(tradePage.buttonSellThirdCell()), maxWaitTime)
    await tradePage.buttonSellThirdCell().click()
    await browser.sleep(2000)
    await browser.wait(EC.visibilityOf(tradePage.tradeSuccessMessage()), maxWaitTime)
    await expect(tradePage.tradeSuccessMessage().getText()).toBeTruthy()
    expect(tradePage.tradeSuccessMessage().getText()).toContain('You sold')
    await browser.wait(EC.visibilityOf(tradePage.buttonCloseTradeSuccess()), maxWaitTime)
    await tradePage.buttonCloseTradeSuccess().click()
    return true
  }

  async GBPToJPYTrade(): Promise<boolean> {
    await browser.wait(EC.visibilityOf(tradePage.linkAll()), maxWaitTime)
    await tradePage.linkAll().click()
    await browser.wait(EC.visibilityOf(tradePage.buttonBuyFourthCell()), maxWaitTime)
    await tradePage.buttonBuyFourthCell().click()
    await browser.sleep(2000)
    await browser.wait(EC.visibilityOf(tradePage.tradeRejectedMessage()), maxWaitTime)
    expect(tradePage.tradeRejectedMessage().getText()).toEqual('Your trade has been rejected')
    await browser.wait(EC.visibilityOf(tradePage.buttonCloseTradeRejected()), maxWaitTime)
    await tradePage.buttonCloseTradeRejected().click()
    return true
  }

  async EURToJPYTrade(): Promise<boolean> {
    await browser.wait(EC.visibilityOf(tradePage.linkAll()), maxWaitTime)
    await tradePage.linkAll().click()
    await browser.wait(EC.visibilityOf(tradePage.buttonBuyFifthCell()), maxWaitTime)
    await tradePage.buttonBuyFifthCell().click()
    await browser.sleep(2000)
    await browser.wait(EC.visibilityOf(tradePage.tradeExecutionTimeOutMessage()), maxWaitTime)
    expect(tradePage.tradeExecutionTimeOutMessage().getText()).toEqual('Trade Execution taking longer then Expected')
    await browser.wait(EC.visibilityOf(tradePage.tradeSuccessMessage()), maxWaitTime)
    expect(tradePage.tradeSuccessMessage().getText()).toBeTruthy()
    expect(tradePage.tradeSuccessMessage().getText()).toContain('You bought')
    await browser.wait(EC.visibilityOf(tradePage.buttonCloseTradeSuccess()), maxWaitTime)
    await tradePage.buttonCloseTradeSuccess().click()
    return true
  }

  async EURToUSDTrade(): Promise<boolean> {
    await browser.wait(EC.visibilityOf(tradePage.linkAll()), maxWaitTime)
    await tradePage.linkAll().click()
    await browser.wait(EC.visibilityOf(tradePage.buttonSellFirstCell()), maxWaitTime)
    await tradePage.buttonSellFirstCell().click()
    await browser.sleep(2000)
    await browser.wait(EC.visibilityOf(tradePage.tradeSuccessMessage()), maxWaitTime)
    expect(tradePage.tradeSuccessMessage().getText()).toBeTruthy()
    expect(tradePage.tradeSuccessMessage().getText()).toContain('You sold')
    await browser.wait(EC.visibilityOf(tradePage.buttonCloseTradeSuccess()), maxWaitTime)
    await tradePage.buttonCloseTradeSuccess().click()
    return true
  }
}
