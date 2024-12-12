const time = document.querySelector(".Time");
const startbtn = document.querySelector(".start-btn");
const stopbtn = document.querySelector(".stop-btn");
let active = false;
let [ss, mm, hh] = [0, 0, 0];
let interval;

function watchcount() {
    ss++;
    if (ss > 59) {
        ss = 0;
        mm++;
        if (mm > 59) {
            mm = 0;
            hh++;
        }
    }
    
    hh = String(hh).padStart(2, '0');
    mm = String(mm).padStart(2, '0');
    ss = String(ss).padStart(2, '0');
    
    time.textContent = `${hh}:${mm}:${ss}`;
}

startbtn.addEventListener('click', () => {
    active = !active;
    if (active) {
        startbtn.textContent = 'STOP';
        startbtn.classList.add('active');
        interval = setInterval(watchcount, 1000); 
    } else {
        startbtn.textContent = 'START';
        startbtn.classList.remove('active');
        clearInterval(interval); 
    }
});

stopbtn.addEventListener('click', () => {
    clearInterval(interval); 
    [ss, mm, hh] = [0, 0, 0];
    time.textContent = '00:00:00';
});
