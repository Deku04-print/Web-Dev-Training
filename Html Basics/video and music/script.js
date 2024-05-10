    // Ask the user for confirmation
    var userInput = prompt("Bhai Gaana Sunega toh \"haa\" bolde:");

    // Check if the user input is 'yes'
    if (userInput === 'haa') {
      // Load the website content
      alert("Loading website...");
      // Place your code to load the website content here
    } else {
      // Show a message indicating that the website will not be loaded
      alert("Website loading cancelled.");
      // Optionally, you can redirect the user to another page or show a message
      // document.location.href = "alternative-page.html";
    }