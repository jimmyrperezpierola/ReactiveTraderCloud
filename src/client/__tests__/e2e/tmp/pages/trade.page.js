"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class TradePage {
    // Live rates Component locators
    labelLiveRates() {
        return protractor_1.browser.element(protractor_1.by.css('.styled__LiStyle-bh08f7-2.styled__LeftNavItemFirst-bh08f7-3.hwNYKP'));
    }
    linkAll() {
        return protractor_1.browser.element.all(protractor_1.by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.dDGSrG')).get(0);
    }
    linkEUR() {
        return protractor_1.browser.element.all(protractor_1.by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(1);
    }
    linkUSD() {
        return protractor_1.browser.element.all(protractor_1.by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(0);
    }
    linkGBP() {
        return protractor_1.browser.element.all(protractor_1.by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(2);
    }
    linkAUD() {
        return protractor_1.browser.element.all(protractor_1.by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(3);
    }
    linkNZD() {
        return protractor_1.browser.element.all(protractor_1.by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(4);
    }
    linkTableView() {
        return protractor_1.browser.element.all(protractor_1.by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.dDGSrG')).get(1);
    }
    linkGraphView() {
        return protractor_1.browser.element.all(protractor_1.by.css('.styled__LiStyle-bh08f7-2.styled__NavItem-bh08f7-4.hFhFum')).get(5);
    }
    buttonSellFirstCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(0);
    }
    buttonBuyFirstCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(1);
    }
    labelCurrencyFirstCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(0);
    }
    textAmountFirstCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('input.styled__Input-wn8bkr-3.IGows')).get(0);
    }
    buttonDetachFirstCell() {
        return protractor_1.browser.element(protractor_1.by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(0);
    }
    buttonSellSecondCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(2);
    }
    buttonBuySecondCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(3);
    }
    labelCurrencySecondCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(1);
    }
    textAmountSecondCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('input.styled__Input-wn8bkr-3.IGows')).get(1);
    }
    buttonDetachSecondCell() {
        return protractor_1.browser.element(protractor_1.by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(1);
    }
    buttonSellThirdCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(4);
    }
    buttonBuyThirdCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(5);
    }
    labelCurrencyThirdCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(2);
    }
    textAmountThirdCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('input.styled__Input-wn8bkr-3.IGows')).get(2);
    }
    buttonDetachThirdCell() {
        return protractor_1.browser.element(protractor_1.by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(2);
    }
    buttonSellFourthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(6);
    }
    buttonBuyFourthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(7);
    }
    labelCurrencyFourthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(3);
    }
    textAmountFourthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('input.styled__Input-wn8bkr-3.IGows')).get(3);
    }
    buttonDetachFourthCell() {
        return protractor_1.browser.element(protractor_1.by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(3);
    }
    buttonSellFifthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(8);
    }
    buttonBuyFifthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(9);
    }
    labelCurrencyFifthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(4);
    }
    textAmountFifthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('input.styled__Input-wn8bkr-3.IGows')).get(4);
    }
    buttonDetachFifthCell() {
        return protractor_1.browser.element(protractor_1.by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(4);
    }
    buttonSellSixthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(10);
    }
    buttonBuySixthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(11);
    }
    labelCurrencySixthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(5);
    }
    textAmountSixthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('input.styled__Input-wn8bkr-3.IGows')).get(5);
    }
    buttonDetachSixthCell() {
        return protractor_1.browser.element(protractor_1.by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(5);
    }
    buttonSellSeventhCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__PriceButtonDisabledPlaceholder-sc-1vddl31-1.gdGMKs')).get(0);
    }
    buttonBuySeventhCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__PriceButtonDisabledPlaceholder-sc-1vddl31-1.gdGMKs')).get(1);
    }
    buttonInitiateRFQ() {
        return protractor_1.browser.element(protractor_1.by.css('span.TileBooking__BookingStatus-b4jprv-2.jxSENf'));
    }
    labelCurrencySeventhCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(6);
    }
    textAmountSeventhCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('input.styled__Input-wn8bkr-3.IGows')).get(6);
    }
    buttonRedoSeventhCell() {
        return protractor_1.browser.element(protractor_1.by.css('.fas.fa-redo.fa-flip-horizontal'));
    }
    buttonDetachSeventhCell() {
        return protractor_1.browser.element(protractor_1.by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(6);
    }
    buttonSellEigthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(12);
    }
    buttonBuyEigthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(13);
    }
    labelCurrencyEigthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(7);
    }
    textAmountEigthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('input.styled__Input-wn8bkr-3.IGows')).get(7);
    }
    buttonDetachEigthCell() {
        return protractor_1.browser.element(protractor_1.by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(7);
    }
    buttonSellNinthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(14);
    }
    buttonBuyNinthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('div.styled__Box-m2h9d2-1.styled__Pip-m2h9d2-4.fnESnJ')).get(15);
    }
    labelCurrencyNinthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('span.styled__CurrencyPairSymbol-wn8bkr-0.evWWeD')).get(8);
    }
    textAmountNinthCell() {
        return protractor_1.browser.element.all(protractor_1.by.css('input.styled__Input-wn8bkr-3.IGows')).get(8);
    }
    buttonDetachNinthCell() {
        return protractor_1.browser.element(protractor_1.by.css('.TileControls__TopRightButton-sc-3ej1f5-0.eWqAno > svg')).get(8);
    }
    tradeRejectedMessage() {
        return protractor_1.browser.element(protractor_1.by.css('div.TileNotification__Content-sc-19yw4wf-5.jIfHZr'));
    }
    buttonCloseTradeRejected() {
        return protractor_1.browser.element(protractor_1.by.css('div.styled__TileBaseStyle-sc-6mxq7t-2.TileNotification__TileNotificationStyle-sc-19yw4wf-0.eCcGTf > button'));
    }
    tradeExecutionTimeOutMessage() {
        return protractor_1.browser.element(protractor_1.by.css('.TileNotification__Content-sc-19yw4wf-5'));
    }
    tradeSuccessMessage() {
        return protractor_1.browser.element(protractor_1.by.css('div.styled__TileBaseStyle-sc-6mxq7t-2.TileNotification__TileNotificationStyle-sc-19yw4wf-0.bPQmtX > div.TileNotification__Content-sc-19yw4wf-5.jIfHZr'));
    }
    buttonCloseTradeSuccess() {
        return protractor_1.browser.element(protractor_1.by.css('div.styled__TileBaseStyle-sc-6mxq7t-2.TileNotification__TileNotificationStyle-sc-19yw4wf-0.bPQmtX > button'));
    }
    // Executed Trades Component locators
    labelExecutedTrades() {
        return protractor_1.browser.element(protractor_1.by.css('div.BlotterHeader__BlotterLeft-sc-1bvhiat-3.euXKsm'));
    }
    textBackGroundColour() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[1]'));
    }
    textTradeId() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[2]'));
    }
    textTradeStatus() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[3]'));
    }
    textTradeDate() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[4]/span'));
    }
    textTradeDirection() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[5]'));
    }
    textTradeCCYToCCY() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[6]'));
    }
    textTradeDealtCCY() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[7]'));
    }
    textTradeNotional() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[8]/span'));
    }
    textTradeRate() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[9]'));
    }
    textTradeValueDate() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[10]/span'));
    }
    textTraderName() {
        return protractor_1.browser.element(protractor_1.by.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[11]'));
    }
    buttonExportCsv() {
        return protractor_1.browser.element(protractor_1.by.css('.ExcelButton__Button-ouhco0-0.hxONBK > svg'));
    }
    textFieldFilter() {
        return protractor_1.browser.element(protractor_1.by.css('input.QuickFilter__QuickFilterInput-sc-1y8fby7-1.ccuwiU'));
    }
    buttonCloseFilter() {
        return protractor_1.browser.element(protractor_1.by.css('.fas.fa-times'));
    }
}
exports.TradePage = TradePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL3RyYWRlLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBZ0U7QUFFaEUsTUFBYSxTQUFTO0lBRXBCLGdDQUFnQztJQUNoQyxjQUFjO1FBQ1osT0FBTyxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9FQUFvRSxDQUFDLENBQUMsQ0FBQTtJQUN0RyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sb0JBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sb0JBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sb0JBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sb0JBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sb0JBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RyxDQUFDO0lB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