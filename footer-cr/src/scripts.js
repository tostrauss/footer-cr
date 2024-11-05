document.addEventListener("DOMContentLoaded", () => {
  // Define button elements
  const buttons = {
    connect: document.getElementById("connectButton"),
    guide: document.getElementById("guideButton"),
    messages: document.getElementById("messagesButton"),
  };

  // Paths to active and inactive images, relative to Angular's assets folder
  const activeImages = {
    connect: "assets/Connect Button - pressed.png",
    guide: "assets/Guide Button - pressed.png",
    messages: "assets/Messages active.png",
  };

  const inactiveImages = {
    connect: "assets/Connect button - inactive.png",
    guide: "assets/Guide Button - inactive.png",
    messages: "assets/Messages Button - inactive.png",
  };

  // Function to toggle button images
  function toggleButton(buttonType) {
    console.log(`Button clicked: ${buttonType}`); // Debugging log

    // Reset all buttons to inactive images
    for (const type in buttons) {
      buttons[type].src = inactiveImages[type];
      console.log(`Set ${type} to inactive image`); // Debugging log
    }

    // Set the clicked button to active image
    buttons[buttonType].src = activeImages[buttonType];
    console.log(`Set ${buttonType} to active image`); // Debugging log
  }

  // Attach event listeners to each button
  buttons.connect.addEventListener("click", () => toggleButton("connect"));
  buttons.guide.addEventListener("click", () => toggleButton("guide"));
  buttons.messages.addEventListener("click", () => toggleButton("messages"));
});






  