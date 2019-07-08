import { browser, element, ElementFinder, by } from 'protractor'

export class TradePage {

  // Live rates Component locators
  labelLiveRates() {
    return browser.element(by.css('.styled__LiStyle-bh08f7-2.styled__LeftNavItemFirst-bh08f7-3.hwNYKP'))
  }

  linkAll() {
    return browser.element.all(by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.dDGSrG')).get(0)
  }

  linkEUR() {
    return browser.element.all(by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(1)
  }

  linkUSD() {
    return browser.element.all(by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(0)
  }

  linkGBP() {
    return browser.element.all(by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(2)
  }

  linkAUD() {
    return browser.element.all(by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(3)
  }

  linkNZD() {
    return browser.element.all(by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(4)
  }

  linkTableView() {
    return browser.element.all(by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.dDGSrG')).get(1)
  }

  linkGraphView() {
    return browser.element.all(by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(5)
  }

  buttonSellFirstCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(0)
  }

  buttonBuyFirstCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(1)
  }

  labelCurrencyFirstCell() {
    return browser.element.all(by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(0)
  }

  textAmountFirstCell() {
    return browser.element.all(by.css('input.styled__Input-wn8bkr-3.IGows')).get(0)
  }

  buttonDetachFirstCell() {
    return browser.element(by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(0)
  }

  buttonSellSecondCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(2)
  }

  buttonBuySecondCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(3)
  }

  labelCurrencySecondCell() {
    return browser.element.all(by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(1)
  }

  textAmountSecondCell() {
    return browser.element.all(by.css('input.styled__Input-wn8bkr-3.IGows')).get(1)
  }

  buttonDetachSecondCell() {
    return browser.element(by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(1)
  }

  buttonSellThirdCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(4)
  }

  buttonBuyThirdCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(5)
  }

  labelCurrencyThirdCell() {
    return browser.element.all(by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(2)
  }

  textAmountThirdCell() {
    return browser.element.all(by.css('input.styled__Input-wn8bkr-3.IGows')).get(2)
  }

  buttonDetachThirdCell() {
    return browser.element(by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(2)
  }

  buttonSellFourthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(6)
  }

  buttonBuyFourthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(7)
  }

  labelCurrencyFourthCell() {
    return browser.element.all(by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(3)
  }

  textAmountFourthCell() {
    return browser.element.all(by.css('input.styled__Input-wn8bkr-3.IGows')).get(3)
  }

  buttonDetachFourthCell() {
    return browser.element(by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(3)
  }

  buttonSellFifthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(8)
  }

  buttonBuyFifthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(9)
  }

  labelCurrencyFifthCell() {
    return browser.element.all(by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(4)
  }

  textAmountFifthCell() {
    return browser.element.all(by.css('input.styled__Input-wn8bkr-3.IGows')).get(4)
  }

  buttonDetachFifthCell() {
    return browser.element(by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(4)
  }

  buttonSellSixthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(10)
  }

  buttonBuySixthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(11)
  }

  labelCurrencySixthCell() {
    return browser.element.all(by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(5)
  }

  textAmountSixthCell() {
    return browser.element.all(by.css('input.styled__Input-wn8bkr-3.IGows')).get(5)
  }

  buttonDetachSixthCell() {
    return browser.element(by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(5)
  }

  buttonSellSeventhCell() {
    return browser.element.all(by.css('div.styled__PriceButtonDisabledPlaceholder-sc-1vddl31-1.gdGMKs')).get(0)
  }

  buttonBuySeventhCell() {
    return browser.element.all(by.css('div.styled__PriceButtonDisabledPlaceholder-sc-1vddl31-1.gdGMKs')).get(1)
  }

  buttonInitiateRFQ() {
    return browser.element(by.css('span.TileBooking__BookingStatus-b4jprv-2.jxSENf'))
  }

  labelCurrencySeventhCell() {
    return browser.element.all(by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(6)
  }

  textAmountSeventhCell() {
    return browser.element.all(by.css('input.styled__Input-wn8bkr-3.IGows')).get(6)
  }

  buttonRedoSeventhCell() {
    return browser.element(by.css('.fas.fa-redo.fa-flip-horizontal'))
  }

  buttonDetachSeventhCell() {
    return browser.element(by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(6)
  }

  buttonSellEigthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(12)
  }

  buttonBuyEigthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(13)
  }

  labelCurrencyEigthCell() {
    return browser.element.all(by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(7)
  }

  textAmountEigthCell() {
    return browser.element.all(by.css('input.styled__Input-wn8bkr-3.IGows')).get(7)
  }

  buttonDetachEigthCell() {
    return browser.element(by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(7)
  }

  buttonSellNinthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(14)
  }

  buttonBuyNinthCell() {
    return browser.element.all(by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(15)
  }

  labelCurrencyNinthCell() {
    return browser.element.all(by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(8)
  }

  textAmountNinthCell() {
    return browser.element.all(by.css('input.styled__Input-wn8bkr-3.IGows')).get(8)
  }

  buttonDetachNinthCell() {
    return browser.element(by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(8)
  }

  tradeRejectedMessage() {
    return browser.element(by.css('div.TileNotification__Content-sc-19yw4wf-5.jIfHZr'))
  }

  buttonCloseTradeRejected() {
    return browser.element(by.css('div.styled__TileBaseStyle-sc-6mxq7t-2.TileNotification__TileNotificationStyle-sc-19yw4wf-0.eCcGTf > button'))
  }

  tradeExecutionTimeOutMessage() {
    return browser.element(by.css('.TileNotification__Content-sc-19yw4wf-5'))
  }

  tradeSuccessMessage() {
    return browser.element(by.css('div.styled__TileBaseStyle-sc-6mxq7t-2.TileNotification__TileNotificationStyle-sc-19yw4wf-0.bPQmtX > div.TileNotification__Content-sc-19yw4wf-5.jIfHZr'))
  }

  buttonCloseTradeSuccess() {
    return browser.element(by.css('div.styled__TileBaseStyle-sc-6mxq7t-2.TileNotification__TileNotificationStyle-sc-19yw4wf-0.bPQmtX > button'))
  }

  // Executed Trades Component locators
  labelExecutedTrades() {
    return browser.element(by.css('div.BlotterHeader__BlotterLeft-sc-1bvhiat-3.euXKsm'))
  }

  textBackGroundColour() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[1]'))
  }

  textTradeId() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[2]'))
  }

  textTradeStatus() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[3]'))
  }

  textTradeDate() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[4]/span'))
  }

  textTradeDirection() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[5]'))
  }

  textTradeCCYToCCY() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[6]'))
  }

  textTradeDealtCCY() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[7]'))
  }

  textTradeNotional() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[8]/span'))
  }

  textTradeRate() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[9]'))
  }

  textTradeValueDate() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[10]/span'))
  }

  textTraderName() {
    return browser.element(by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[11]'))
  }

  buttonExportCsv() {
    return browser.element(by.css('.ExcelButton__Button-ouhco0-0.hxONBK > svg'))
  }

  textFieldFilter() {
    return browser.element(by.css('input.QuickFilter__QuickFilterInput-sc-1y8fby7-1.ccuwiU'))
  }

  buttonCloseFilter() {
    return browser.element(by.css('.fas.fa-times'))
  }
}
