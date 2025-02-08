export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    
    const daysOfWeek: string[] = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];
    const monthsOfYear: string[] = ["Січня", "Лютого", "Березня", "Квітеня", "Травеня", "Червеня", "Липеня", "Серпеня", "Вересеня", "Жовтеня", "Листопада", "Грудня"];
    
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = monthsOfYear[date.getMonth()];
  
    return `${dayOfWeek}, ${day} ${month}`;
}