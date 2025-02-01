export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    
    const daysOfWeek: string[] = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];
    const monthsOfYear: string[] = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = monthsOfYear[date.getMonth()];
  
    return `${dayOfWeek}, ${day} ${month}`;
}