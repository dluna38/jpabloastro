export default function (date: string | number | Date,
    dateStyle: 'full' | 'long' | 'medium' | 'short' = 'long',
    locale: string = 'es-ES') {
    return new Date(date).toLocaleDateString(locale, {
        dateStyle: dateStyle,
    })
}