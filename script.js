// Save user preference in localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Retrieve user preference from localStorage
function getPreference(key) {
  return localStorage.getItem(key);
}

// Trigger bounce animation on the button
function triggerBounceAnimation() {
  const btn = document.getElementById('animateBtn');

  // Add bounce animation class
  btn.classList.add('bounce');

  // Remove class after animation ends to allow re-triggering
  btn.addEventListener('animationend', () => {
    btn.classList.remove('bounce');
  }, { once: true });

  // Store timestamp of last click
  savePreference('buttonLastClicked', new Date().toISOString());
}

// On page load, log last click time if available
window.addEventListener('DOMContentLoaded', () => {
  const lastClicked = getPreference('buttonLastClicked');
  if (lastClicked) {
    console.log(`Button was last clicked on: ${lastClicked}`);
  }
});

// Attach click event to trigger animation and store preference
document.getElementById('animateBtn').addEventListener('click', triggerBounceAnimation);
