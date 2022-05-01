"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var homePageLocator_1 = require("../automationCode/locators/homePageLocator");
(0, cucumber_1.Given)(/^I open the url \"([^\"]*)\"$/, function (website) {
    browser.url(website);
});
// Then(/^enter 'fan'$/, function (keyset) {
//     browser.maximize.window();
//     console.log(keyset);
//   });
(0, cucumber_1.Then)(/^enter value$/, function () {
    browser.maximizeWindow();
});
(0, cucumber_1.Then)(/^enter value \"([^\"]*)\"$/, function (fan) {
    console.log(fan);
    homePageLocator_1.homePageLoc.searchField.setValue(fan);
});
