import * as accounting from "openexchangerates/accounting.js"

export class NumberFormatValueConverter {

    settings = {
        thousand: ".",
        decimal: ","
    };

    toView(unformatted, precision) {
        if (!unformatted)
            return "";

        let settings = Object.assign({precision:precision}, this.settings);
        let formatted = accounting.formatNumber(unformatted, settings);
        return formatted;
    }

    fromView(formatted, precision){

        if (!formatted){
            return null;
        }

        let unformatted = accounting.unformat(formatted, this.settings.decimal);

        return unformatted;
    }
}