// Simulating data fetching
const youtubeData = {
  education: 120,
  reels: 60,
  gaming: 180,
};

const instagramData = {
  education: 100,
  reels: 150,
  gaming: 200,
};

// Displaying data on dashboard
document.getElementById(
  "youtube-education"
).textContent = `Education: ${youtubeData.education} minutes`;
document.getElementById(
  "youtube-reels"
).textContent = `Reels: ${youtubeData.reels} minutes`;
document.getElementById(
  "youtube-gaming"
).textContent = `Gaming: ${youtubeData.gaming} minutes`;

document.getElementById(
  "instagram-education"
).textContent = `Education: ${instagramData.education} minutes`;
document.getElementById(
  "instagram-reels"
).textContent = `Reels: ${instagramData.reels} minutes`;
document.getElementById(
  "instagram-gaming"
).textContent = `Gaming: ${instagramData.gaming} minutes`;

// Creating a chart
const ctx = document.getElementById("activity-chart").getContext("2d");
const activityChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["YouTube", "Instagram"],
    datasets: [
      {
        label: "Education",
        data: [youtubeData.education, instagramData.education],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Reels",
        data: [youtubeData.reels, instagramData.reels],
        backgroundColor: "#FFC107",
      },
      {
        label: "Gaming",
        data: [youtubeData.gaming, instagramData.gaming],
        backgroundColor: "red",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Toggle menu visibility
// Toggle menu visibility
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

// Function to simulate fetching API content
function accessAPI() {
    alert("Fetching data from API...");
    // Simulate data fetch and populate the data-cards section.
}

// Perform search functionality
function performSearch() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const cards = document.querySelectorAll(".data-cards .card");

    cards.forEach(card => {
        let isMatch = false;
        const details = card.querySelectorAll(".card-details p");
        
        details.forEach(detail => {
            if (detail.textContent.toLowerCase().includes(searchInput)) {
                isMatch = true;
            }
        });

        card.style.display = isMatch ? "block" : "none";
    });
}

// Simulate data fetch for demonstration
function fetchAPIData() {
    // Dummy data for API response
    const apiData = [
        { platform: "YouTube", education: "120 mins", reels: "60 mins", gaming: "180 mins" },
        { platform: "Instagram", education: "100 mins", reels: "150 mins", gaming: "200 mins" }
    ];

    // Dynamically insert the data into the data-cards section
    const dataCards = document.getElementById("data-cards");
    dataCards.innerHTML = ""; // Clear previous content

    apiData.forEach(data => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${data.platform} Activity</h3>
            <div class="card-details">
                <p>Education: ${data.education}</p>
                <p>Reels: ${data.reels}</p>
                <p>Gaming: ${data.gaming}</p>
            </div>
        `;
        dataCards.appendChild(card);
    });
}

// Trigger data fetch on page load for demonstration purposes
window.onload = fetchAPIData;
// Simulating Google Login - This would be integrated with Google's API in a real app
document.querySelector('.google-login').addEventListener('click', function () {
    alert("Google Login feature is under development.");
});
