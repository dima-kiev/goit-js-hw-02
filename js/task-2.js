function formatMessage(message, maxLength) {
    // Отримати довжину рядка
    const messageLength = message.length;

    // Перевірити, чи рядок менший або дорівнює maxLength
    if (messageLength <= maxLength) {
        return message; // Повернути рядок без змін
    }

    // Якщо рядок довший, обрізати і додати "..."
    const trimmedMessage = message.slice(0, maxLength) + "...";
    return trimmedMessage; // Повернути обрізаний рядок

}


console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
