import moment from 'moment';

export class DateFormatValueConverter {
    toView(value) {
        if (!value)
            return "";

        let formatted = moment(value).format('DD.MM.YYYY H:mm') +  ' Uhr';
        return formatted;
    }
}