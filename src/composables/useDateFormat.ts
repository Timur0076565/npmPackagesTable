export function useDateFormat(value: any) {
    const date = new Date(value);

    if (date instanceof Date && !Number.isNaN(date)) {
        return Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format(date);
    }

    return value;
}
