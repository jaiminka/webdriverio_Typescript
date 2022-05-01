import $$ from "webdriverio/build/commands/browser/$$";

class homePageLocator {

    get searchField() {
        return $("input[title=\"Search\"]");
    }
    get searchFiled1() {
        return (button:string) => $("input[title='"+button+"']");
    }

}
export const homePageLoc = new homePageLocator()
