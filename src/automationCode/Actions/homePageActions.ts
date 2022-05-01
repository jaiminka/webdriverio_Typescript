import {homePageLoc} from "../locators/homePageLocator";

class homePageActions {

    enterSearch(fan:string){
        homePageLoc.searchField.setValue(fan);
    }

    reenterSearch(value :string, box :string){
        homePageLoc.searchFiled1(box).setValue(value);
    }
}

export const homePageAction = new homePageActions()
