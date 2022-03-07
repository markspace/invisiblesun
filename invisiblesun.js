import {invisiblesun} from "./module/config.js";
import is_item_sheet from "./module/sheets/is_item_sheet.js";

Hooks.once("init", function () {
    console.log("invisiblesun | Initialising Invisible Sun");

    CONFIG.invisiblesun = invisiblesun;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("invisiblesun", is_item_sheet, {makeDefault: true});
});