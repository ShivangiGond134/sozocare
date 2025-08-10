function generateToken() {
  const token = 'SZ' + Math.floor(1000 + Math.random() * 9000);
  alert("Your token number is: " + token);
}

function setReminder() {
  const time = document.getElementById("medTime").value;
  if (time) {
    alert("Reminder set for: " + new Date(time).toLocaleString());
  } else {
    alert("Please select a time.");
  }
}

