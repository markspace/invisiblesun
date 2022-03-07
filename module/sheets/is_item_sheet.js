export default class is_item_sheet extends ItemSheet {
    get template() {
        return `systems/invisiblesun/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.invisiblesun;

        return data;
    }
}