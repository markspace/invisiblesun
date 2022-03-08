export default class is_item_sheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 530,
            classes: ["invisiblesun", "sheet", "item"]
        });
    }

    get template() {
        return `systems/invisiblesun/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.invisiblesun;

        return data;
    }
}