// function getCurrentDay() {
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const currentDate = new Date();
//     const currentDay = daysOfWeek[currentDate.getUTCDay()];
//     return currentDay;
// }

// function getCurrentUTCTime() {
//     const currentDate = new Date();
//     const utcTime = currentDate.toUTCString();
//     return utcTime;
// }


// document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the Week: ${getCurrentDay()}`;
// document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${getCurrentUTCTime()}`;


function displayDateTime() {
    // Get the current date and time
    const currentDate = new Date();
  
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  
    // Extract day of the week, hour, minute, and second
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
  
    // Create formatted strings
    const formattedDayOfWeek = `${currentDay}`;
  
    // Display the day of the week and time on the webpage
    const dayOfWeekDiv = document.getElementById('dayOfWeek');
  
    dayOfWeekDiv.textContent = formattedDayOfWeek;
  
    const currentTimeInMilliseconds = new Date();
  
    // Display the current time in UTC milliseconds on the webpage
    const currentTimeDiv = document.getElementById('currentTimeInMilliseconds');
  
    currentTimeDiv.textContent = `${currentTimeInMilliseconds.getTime()}`;
  }
  
  // Update the displayed date and time every second
  setInterval(displayDateTime, 1000);
  
  // Initial call to displayDateTime fn
  displayDateTime();
