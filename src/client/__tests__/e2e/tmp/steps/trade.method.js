"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const trade_page_1 = require("../pages/trade.page");
const maxWaitTime = 10000;
const tradePage = new trade_page_1.TradePage();
class TradeMethod {
    fillNotional(newNotionalValue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.textAmountThirdCell()), maxWaitTime);
            const textNotional = yield tradePage.textAmountThirdCell().getAttribute('value');
            expect(textNotional).toEqual('1,000,000');
            yield tradePage.textAmountThirdCell().clear();
            yield tradePage.textAmountThirdCell().sendKeys(newNotionalValue);
            return true;
        });
    }
    GBPToUSDTrade() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.linkAll()), maxWaitTime);
            yield tradePage.linkAll().click();
            yield this.fillNotional('1,111,111');
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.buttonSellThirdCell()), maxWaitTime);
            yield tradePage.buttonSellThirdCell().click();
            yield protractor_1.browser.sleep(2000);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.tradeSuccessMessage()), maxWaitTime);
            yield expect(tradePage.tradeSuccessMessage().getText()).toBeTruthy();
            expect(tradePage.tradeSuccessMessage().getText()).toContain('You sold');
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.buttonCloseTradeSuccess()), maxWaitTime);
            yield tradePage.buttonCloseTradeSuccess().click();
            return true;
        });
    }
    GBPToJPYTrade() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.linkAll()), maxWaitTime);
            yield tradePage.linkAll().click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.buttonBuyFourthCell()), maxWaitTime);
            yield tradePage.buttonBuyFourthCell().click();
            yield protractor_1.browser.sleep(2000);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.tradeRejectedMessage()), maxWaitTime);
            expect(tradePage.tradeRejectedMessage().getText()).toEqual('Your trade has been rejected');
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.buttonCloseTradeRejected()), maxWaitTime);
            yield tradePage.buttonCloseTradeRejected().click();
            return true;
        });
    }
    EURToJPYTrade() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.linkAll()), maxWaitTime);
            yield tradePage.linkAll().click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.buttonBuyFifthCell()), maxWaitTime);
            yield tradePage.buttonBuyFifthCell().click();
            yield protractor_1.browser.sleep(2000);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.tradeExecutionTimeOutMessage()), maxWaitTime);
            expect(tradePage.tradeExecutionTimeOutMessage().getText()).toEqual('Trade Execution taking longer then Expected');
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.tradeSuccessMessage()), maxWaitTime);
            expect(tradePage.tradeSuccessMessage().getText()).toBeTruthy();
            expect(tradePage.tradeSuccessMessage().getText()).toContain('You bought');
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.buttonCloseTradeSuccess()), maxWaitTime);
            yield tradePage.buttonCloseTradeSuccess().click();
            return true;
        });
    }
    EURToUSDTrade() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.linkAll()), maxWaitTime);
            yield tradePage.linkAll().click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.buttonSellFirstCell()), maxWaitTime);
            yield tradePage.buttonSellFirstCell().click();
            yield protractor_1.browser.sleep(2000);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.tradeSuccessMessage()), maxWaitTime);
            expect(tradePage.tradeSuccessMessage().getText()).toBeTruthy();
            expect(tradePage.tradeSuccessMessage().getText()).toContain('You sold');
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(tradePage.buttonCloseTradeSuccess()), maxWaitTime);
            yield tradePage.buttonCloseTradeSuccess().click();
            return true;
        });
    }
}
exports.TradeMethod = TradeMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUubWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHMvdHJhZGUubWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUY7QUFDckYsb0RBQStDO0FBRS9DLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQztBQUMxQixNQUFNLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQTtBQUVqQyxNQUFhLFdBQVc7SUFFaEIsWUFBWSxDQUFDLGdCQUF3Qjs7WUFDekMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFBO1lBQ2pGLE1BQU0sWUFBWSxHQUFHLE1BQU0sU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2hGLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDekMsTUFBTSxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUM3QyxNQUFNLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ2hFLE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQztLQUFBO0lBRUssYUFBYTs7WUFDakIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQTtZQUNyRSxNQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNqQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDcEMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxD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