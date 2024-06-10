import toRomanNumerals from "./romanNumerals";

const USE_NON_GREGORIAN_CALENDARS = true;

const DATE_TYPE = ["about", "calculated", "after", "before", "between", "from"];
const DATE_TYPE_FR = ["environ", "calculé", "après", "avant", "entre", "de"];
const DATE_TYPE_SHORT = ["a", "c", "a", "b", "e", "f"];

const DATE_CALENDAR = ["Gregorian", "Julian", "French Republic", "Hebrew"];

const GREGORIAN_MONTH_NAMES = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
];

const FRENCH_REPUBLIC_MONTH_NAMES = [
    "Vendémiaire",
    "Brumaire",
    "Frimaire",
    "Nivôse",
    "Pluviôse",
    "Ventôse",
    "Germinal",
    "Floréal",
    "Prairial",
    "Messidor",
    "Thermidor",
    "Fructidor",
    "Complémentaire",
];

export const longDate = (date) => {
    const {
        date_type: type,
        date_format: format,
        date1_calendar: calendar1,
        date1_precision: precision1,
        date1_day: day1,
        date1_month: month1,
        date1_year: year1,
        date2_calendar: calendar2,
        date2_precision: precision2,
        date2_day: day2,
        date2_month: month2,
        date2_year: year2,
    } = date;

    const getFormattedDate = (date) => {
        const { calendar, precision, day, month, year } = date;

        const formatDay = (day) => {
            if (day === 1) {
                return "1er";
            }
            return day;
        };

        if (calendar === "French Republic" && precision >= 3) {
            const romanYear = toRomanNumerals(year);
            return `${day} ${FRENCH_REPUBLIC_MONTH_NAMES[month - 1]} an ${romanYear}`;
        } else if (calendar === "French Republic" && precision === 2) {
            const romanYear = toRomanNumerals(year);
            return `${FRENCH_REPUBLIC_MONTH_NAMES[month - 1]} an ${romanYear}`;
        } else if (calendar === "French Republic" && precision === 1) {
            const romanYear = toRomanNumerals(year);
            return `an ${romanYear}`;
        } else if (precision >= 3) {
            return `${formatDay(day)} ${GREGORIAN_MONTH_NAMES[month - 1]} ${year}`;
        } else if (precision === 2) {
            return `${GREGORIAN_MONTH_NAMES[month - 1]} ${year}`;
        } else {
            return `${year}`;
        }
    };

    let date1Formatted = "";
    if (USE_NON_GREGORIAN_CALENDARS) {
        date1Formatted = getFormattedDate({
            calendar: calendar1,
            precision: precision1,
            day: day1,
            month: month1,
            year: year1,
        });

        let gregorianDate = "";
        if (format === "single" && calendar1 === "French Republic") {
            gregorianDate = ` (${getFormattedDate({
                calendar: "Gregorian",
                precision: precision1,
                day: day1,
                month: month1,
                year: year1,
            })})`;
        }
        date1Formatted += gregorianDate;
    } else {
        date1Formatted = getFormattedDate({
            calendar: "Gregorian",
            precision: precision1,
            day: day1,
            month: month1,
            year: year1,
        });
    }

    let date2 = "";
    if (format === "range") {
        date2 = getFormattedDate({
            calendar: calendar2,
            precision: precision2,
            day: day2,
            month: month2,
            year: year2,
        });
    }

    const typePrefix =
        type === "from" && precision1 === 3
            ? "du "
            : type
                ? DATE_TYPE_FR[DATE_TYPE.indexOf(type)] + " "
                : "";

    const typeSuffix =
        type === "between"
            ? precision2 === 3
                ? " et le "
                : " et "
            : type === "from"
                ? precision2 === 3
                    ? " au "
                    : " à "
                : "";

    return type === "between"
        ? `${typePrefix}${precision1 === 3 ? "le " : ""}${date1Formatted}${typeSuffix}${date2}`
        : type === "from"
            ? `${typePrefix}${date1Formatted}${typeSuffix}${date2}`
            : `${typePrefix}${date1Formatted}`;
};

export const shortDate = (date) => {
    const {
        date1_calendar: calendar,
        date1_precision: precision,
    } = date;

    const formatDay = (day) => day.toString().padStart(2, "0");
    const formatMonth = (month) => month.toString().padStart(2, "0");

    let dateString = "";
    if (calendar === "Gregorian") {
        switch (precision) {
            case 3:
                dateString = `${formatDay(date.date1_day)}-${formatMonth(date.date1_month)}-${date.date1_year}`;
                break;
            case 2:
                dateString = `${formatMonth(date.date1_month)}-${date.date1_year}`;
                break;
            case 1:
                dateString = `${date.date1_year}`;
                break;
            default:
                dateString = `${formatDay(date.date1_day)}-${formatMonth(date.date1_month)}-${date.date1_year}`;
                break;
        }
    } else {
        switch (precision) {
            case 3:
                dateString = `${formatDay(date.day)}-${formatMonth(date.month)}-${date.year}`;
                break;
            case 2:
                dateString = `${formatMonth(date.month)}-${date.year}`;
                break;
            case 1:
                dateString = `${date.year}`;
                break;
            default:
                dateString = `${formatDay(date.day)}-${formatMonth(date.month)}-${date.year}`;
                break;
        }
    }
    return dateString;
};


export const yearDate = (date) => {
    const { date1_calendar: calendar, date1_year: year } = date;

    if (calendar === "date1_calendar" && date.date1_calendar) {
        return `${date.date1_year}`;
    } else {
        return `${year}`;
    }
};