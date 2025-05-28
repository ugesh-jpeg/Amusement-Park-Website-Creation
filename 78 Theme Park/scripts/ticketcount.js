function updateTicketCount(type, change) {
    const countElement = document.getElementById(`${type}-count`);
    let currentCount = Number(countElement.textContent);
    let newCount = currentCount + change;
    if (newCount < 0) 
    {
        newCount = 0;
    }
    countElement.textContent = newCount;
}
