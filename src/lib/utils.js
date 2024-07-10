// @ts-nocheck

export function formatDate(date, dateStyle, locales = 'it') {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}
