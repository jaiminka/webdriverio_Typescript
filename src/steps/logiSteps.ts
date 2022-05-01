import { Given, Then } from "@cucumber/cucumber";
import {homePageLoc} from "../automationCode/locators/homePageLocator";
import {homePageAction} from "../automationCode/Actions/homePageActions";



Given(/^I open the url \"([^\"]*)\"$/, function (website) {
    browser.url(website);
  });

Then(/^enter value$/, function () {
    browser.maximizeWindow();
  });

Then(/^enter value \"([^\"]*)\"$/, function (fan) {
      console.log(fan);
      homePageAction.enterSearch(fan);
  });

Then(/^re enter value "([^"]*)" in "([^"]*)"$/, function (value, box) {
    console.log(value);
    homePageAction.reenterSearch(value,box)
});
