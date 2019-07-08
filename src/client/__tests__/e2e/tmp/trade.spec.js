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
describe('UI Smoke Tests for Reactive Trader Cloud App', () => __awaiter(this, void 0, void 0, function* () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(protractor_1.browser.params.baseUrl);
    }));
    it('Verify Reactive Trader Page Title', () => __awaiter(this, void 0, void 0, function* () {
        let pageTitle = yield protractor_1.browser.getTitle();
        expect(pageTitle).toEqual('Reactive Trader Cloud');
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3Rlc3RzL3RyYWRlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUF3QjtBQUN4QiwyQ0FBMEU7QUFFMUUsUUFBUSxDQUFDLDhDQUE4QyxFQUFFLEdBQVEsRUFBRTtJQUVqRSxVQUFVLENBQUMsR0FBUSxFQUFFO1FBQ25CLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbUNBQW1DLEVBQUUsR0FBUSxFQUFFO1FBQ2hELElBQUksU0FBUyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDcEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxHQUFRLEVBQUU7UUFDZixNQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDdkIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==