export const dateToYear = (date: string): number => {
    const d = new Date(date);
    let year = d.getFullYear();
    return year;
}