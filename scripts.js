

function displayCountDownTimer() {
  // selecting the HTML elements involved

  const days = document.querySelector('#days');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');

  // define the constructor that returns the current date and time
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  // define the launch date and time 
  let launchTime = new Date(`December 25 ${currentYear} 00:00:00`);
  if (currentTime > launchTime) {
    launchTime = new Date(`December 25 ${currentYear + 1} 00:00:00`);
  }


  // define the time remaining
  const difference = launchTime - currentTime;

  const days_ = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours_ = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes_ = Math.floor(difference / 1000 / 60) % 60;
  const seconds_ = Math.floor(difference / 1000) % 60;

  days.innerHTML = days_ < 10 ? '0' + days_ : days_;
  hours.innerHTML = hours_ < 10 ? '0' + hours_ : hours_;
  minutes.innerHTML = minutes_ < 10 ? '0' + minutes_ : minutes_;
  seconds.innerHTML = seconds_ < 10 ? '0' + seconds_ : seconds_;
};

setInterval(displayCountDownTimer, 1000);