//indian Watach
let indianWatch = () => {
    let options = { timeZone : 'Asia/Kolkata'};
    let currentDate = new Date().toLocaleDateString(locales='en-US', options);
    let currentTime = new Date().toLocaleTimeString(locales='en-US', options);
    document.querySelector(selectors ='#indian-date').innerText = currentDate;
    document.querySelector(selectors ='#indian-time').innerText = currentTime;

};
//indianWatch();
setInterval(indianWatch,timeout = 1000);

//usa Watch
let usaWatch = () => {
    let options = { timeZone : 'America/New_York'};
    let currentDate = new Date().toLocaleDateString(locales='en-US', options);
    let currentTime = new Date().toLocaleTimeString(locales='en-US', options);
    document.querySelector(selectors ='#usa-date').innerText = currentDate;
    document.querySelector(selectors ='#usa-time').innerText = currentTime;

};
setInterval(usaWatch,timeout = 1000);

//china watch
let chinaWatch = () => {
    let options = { timeZone :'Asia/shanghai'};
    let currentDate = new Date().toLocaleDateString(locales='en-US', options);
    let currentTime = new Date().toLocaleTimeString(locales='en-US', options);
    document.querySelector(selectors='#china-date').innerText = currentDate;
    document.querySelector(selectors='#china-time').innerText = currentTime;

};
setInterval(chinaWatch,timeout=1000);