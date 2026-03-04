// Portfolio JavaScript functionality

// Function to display current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' };
    const formattedDateTime = now.toLocaleString('en-GB', options).replace(',', '');
    console.log(`Current Date and Time (UTC): ${formattedDateTime}`);
}

displayCurrentDateTime();
