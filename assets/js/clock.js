function updateClock(){
    const time = new Date();

    const currentDay = {
        weekday: 'long'
    };
    const currentTime = {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    const dayString = time.toLocaleString(undefined, currentDay);
    const timeString = time.toLocaleString(undefined, currentTime);
    document.getElementById('day').textContent = dayString;
    document.getElementById('time').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);