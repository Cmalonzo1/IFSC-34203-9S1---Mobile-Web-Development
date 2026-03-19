document.addEventListener("DOMContentLoaded", () => {
    

    function createStreak(){    
        let background = document.querySelector('.background');

        let streak = document.createElement('div');
        streak.classList.add('streak');

        let widths = [(innerWidth / 2), (innerWidth / 4)];
        let streakWidth = innerWidth / 4;
        let streakHeight = 30;

        //adding properties
        streak.style.backgroundColor = 'red';
        streak.style.width = streakWidth + 'px';
        streak.style.height = streakHeight + 'px';
        streak.style.opacity = 0.2 + (Math.random() * 0.8);
        background.appendChild(streak);
    };
    
    for (let i = 0; i < 5; i++){
        createStreak();
    }
});