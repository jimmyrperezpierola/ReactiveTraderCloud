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
// Import required pages
const protractor_1 = require("protractor");
const trade_page_1 = require("../pages/trade.page");
const trade_method_1 = require("../steps/trade.method");
const tradePage = new trade_page_1.TradePage();
const tradeMethod = new trade_method_1.TradeMethod();
describe('UI Smoke Tests for Reactive Trader Cloud App', () => __awaiter(this, void 0, void 0, function* () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(protractor_1.browser.params.baseUrl);
    }));
    it('should validate the GBP to USD trade', () => __awaiter(this, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getTitle()).toEqual('Reactive Trader Cloud');
        yield tradeMethod.GBPToUSDTrade();
        yield expect(tradePage.textTradeStatus().getText()).toEqual('Done');
        expect(tradePage.textBackGroundColour().getCssValue('background-color')).toEqual('rgba(40, 201, 136, 1)');
    }));
    it('should  validate the GBP to JPY trade', () => __awaiter(this, void 0, void 0, function* () {
        yield tradeMethod.GBPToJPYTrade();
        expect(tradePage.textTradeStatus().getText()).toEqual('Rejected');
        expect(tradePage.textBackGroundColour().getCssValue('background-color')).toEqual('rgba(249, 76, 76, 1)');
    }));
    it('should  validate the EUR to JPY trade', () => __awaiter(this, void 0, void 0, function* () {
        yield tradeMethod.EURToJPYTrade();
        expect(tradePage.textTradeStatus().getText()).toEqual('Done');
    }));
    it('should  validate the EUR to USD trade', () => __awaiter(this, void 0, void 0, function* () {
        yield tradeMethod.EURToUSDTrade();
        expect(tradePage.textTradeId().isPresent()).toBeTruthy();
        expect(tradePage.textTradeStatus().getText()).toEqual('Done');
        expect(tradePage.textTradeDate().isPresent()).toBeTruthy();
        expect(tradePage.textTradeDirection().getText()).toEqual('Sell');
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3RyYWRlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUF3QjtBQUN4QiwyQ0FBOEQ7QUFDOUQsb0RBQStDO0FBQy9DLHdEQUFtRDtBQUVuRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQTtBQUNqQyxNQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQTtBQUVyQyxRQUFRLENBQUMsOENBQThDLEVBQUUsR0FBUSxFQUFFO0lBRWpFLFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFDbkIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDM0MsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxHQUFRLEVBQUU7UUFDbkQsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQ2pFLE1BQU0sV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ2pDLE1BQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuRSxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtJQUMzRyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHVDQUF1QyxFQUFFLEdBQVEsRUFBRTtRQUNwRCxNQUFNLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUNqQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2pFLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQzFHLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdUNBQXVDLEVBQUUsR0FBUSxFQUFFO1FBQ3BELE1BQU0sV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ2pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFRLEVBQUU7UUFDcEQsTUFBTSxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDakMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3hELE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzFELE1BQU0sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLEdBQVEsRUFBRTtRQUNmLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9