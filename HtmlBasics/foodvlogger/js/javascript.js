// Show alert on input focus
const searchInput = document.querySelector("main input");

searchInput.addEventListener("focus", () => {
  console.log("User is searching...");
});

// Optional - show placeholder animation (typing effect)
const placeholderText = [
  "Search for Pizza, Biryani, Sushi...",
  "Find your favourite restaurant...",
  "What do you crave today?"
];
let i = 0;
setInterval(() => {
  searchInput.setAttribute("placeholder", placeholderText[i]);
  i = (i + 1) % placeholderText.length;
}, 3000);
