function updateClock(){
    const now = new Date();
    const options = {
        weekday: 'long',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour24: true
    };
    const timeString = now.toLocaleString('us-chicago', options);
    document.getElementById('time').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);