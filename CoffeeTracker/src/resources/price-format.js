import * as accounting from "openexchangerates/accounting.js"

export class PriceFormatValueConverter {

    settings = {
        thousand: ".",
        decimal: ",",
        precision: 2
    };

    toView(value) {
        if (!value)
            return "";

        let formatted = accounting.formatNumber(value, this.settings);
        return formatted;
    }
}