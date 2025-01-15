# Countdown-Timer

A dynamic countdown timer application that calculates the time remaining from a user-specified date and time until the target. The timer allows you to start, stop, and reset the countdown with precision, displaying the time left in days, hours, minutes, and seconds.

# Features

1. Entry Date - Input field to enter the target date in the DD-MM-YYYY format.
2. Entry Time - Input field to specify the target time in 12-hour format (AM/PM).
3. Calculate - A button to start the countdown timer after validating the entered date and time.
4. Stop - A button to pause the countdown at any point.
5. Reset - A button to reset the countdown, clearing all inputs and the displayed time.
6. Live Display - Real-time display of the remaining time, showing:
- Days
- Hours
- Minutes
- Seconds

# How it Works

1. Input Validation: Ensures the entered date and time are valid and in the future.
2. Time Calculation: Calculates the difference between the current time and the target time in milliseconds and converts it to days, hours, minutes, and seconds.
3. Live Update: Dynamically updates the countdown every second using JavaScript.
4. Stop Functionality: Temporarily halts the countdown without losing the target time.
5. Reset Functionality: Clears all inputs and resets the display to its initial state.

## Running Countdown-Timer

```
git clone  https://github.com/SpandanL96/countdown-timer.git
cd countdown-timer

open index.html

git init
git add .
git commit -m "Initial commit for Countdown Timer"
git remote add origin https://github.com/SpandanL96/countdown-timer.git

```

## Screenshots

<h1>Countdown Timer in Am </h1>

![count timwe am1](https://github.com/user-attachments/assets/815f04f9-f48d-45d0-8626-7993386d0624)
<div>
  </div>

<h1>Countdown Timer in Pm </h1>

![count time pm](https://github.com/user-attachments/assets/89505093-2007-4898-99ad-5d2413c77804)
<div>
  </div>

# Future Enhancements

1. Add a sound or notification when the timer reaches zero.
2. Allow multiple countdowns to run simultaneously.
3. Provide themes or color customization options.
4. Display an error message for invalid inputs

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## Thank You 

**Keep Coding**
