function updateClock(){
    const time = new Date();

    const currentDay = {
        weekday: 'long'
    };
    const currentTime = {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour24: true
    };
    const dayString = time.toLocaleString('us-chicago', currentDay);
    const timeString = time.toLocaleString('us-chicago', currentTime);
    document.getElementById('day').textContent = dayString;
    document.getElementById('time').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);