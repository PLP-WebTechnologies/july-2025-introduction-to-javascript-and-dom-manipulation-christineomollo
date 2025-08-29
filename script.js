// ============================
// Part 1: Variables & Conditionals
// ============================

// Declare variables with different data types
let hotelName = "Hotel Zee";
const maxGuests = 4;
var roomsAvailable = 3;

// Simple conditionals
let part1Output = "";

if (roomsAvailable > 0) {
  part1Output = `Welcome to ${hotelName}! We have ${roomsAvailable} rooms available for up to ${maxGuests} guests each.`;
} else {
  part1Output = `Sorry, no rooms available at ${hotelName} right now.`;
}

// Output to the page
document.getElementById('part1-output').textContent = part1Output;


// ============================
// Part 2: Functions — Reusability
// ============================

// Function to calculate total price based on nights and rate per night
function calculateTotalPrice(nights, ratePerNight) {
  return nights * ratePerNight;
}

// Function to format guest greeting message
function formatGreeting(name) {
  return `Hello, ${name}! Welcome to ${hotelName}.`;
}

// Use the functions and show result
const totalPrice = calculateTotalPrice(3, 120); // 3 nights at $120/night
const greetingMessage = formatGreeting("Alice");

document.getElementById('part2-output').textContent = 
  `If you stay 3 nights, your total will be $${totalPrice}. Example greeting: "${greetingMessage}"`;


// ============================
// Part 3: Loops — Repetition
// ============================

const amenities = ["Free WiFi", "Swimming Pool", "Breakfast Included", "24/7 Room Service"];
const listElement = document.getElementById('part3-list');

// Using for loop
for (let i = 0; i < amenities.length; i++) {
  let li = document.createElement('li');
  li.textContent = `Amenity (for loop): ${amenities[i]}`;
  listElement.appendChild(li);
}

// Using forEach loop
amenities.forEach(amenity => {
  let li = document.createElement('li');
  li.textContent = `Amenity (forEach): ${amenity}`;
  listElement.appendChild(li);
});


// ============================
// Part 4: DOM Interaction
// ============================

// 1. Toggle page theme between light and dark
const toggleBtn = document.getElementById('toggle-btn');
const themeStatus = document.getElementById('theme-status');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  let currentTheme = document.body.classList.contains('dark-theme') ? "Dark" : "Light";
  themeStatus.textContent = `Current theme: ${currentTheme}`;
});

// 2. Create and add a dynamic content box
const dynamicContent = document.getElementById('dynamic-content');
function addDynamicMessage(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  dynamicContent.appendChild(p);
}

// Add initial message
addDynamicMessage("Enjoy your stay at Hotel Zee!");

// 3. Greet user based on input
const greetBtn = document.getElementById('greet-btn');
const nameInput = document.getElementById('name-input');
const greetingOutput = document.getElementById('greeting-output');

greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name.length > 0) {
    greetingOutput.textContent = formatGreeting(name);
  } else {
    greetingOutput.textContent = "Please enter your name to be greeted.";
  }
});
