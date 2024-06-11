const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const freelancerList = document.getElementById("freelancers-list");
const averagePriceDisplay = document.getElementById("average-price");

function calculateAveragePrice(prices) {
  const total = prices.reduce((acc, current) => acc + current.price, 0);
  return (total / prices.length).toFixed(2);
}

function displayFreelancers(data) {
  freelancerList.innerHTML = ""; // Clear existing list
  data.forEach((freelancer) => {
    const freelancerElement = document.createElement("div");
    freelancerElement.classList.add("freelancer");
    freelancerElement.innerHTML = `
        <p><strong>${freelancer.name}</strong> - ${freelancer.occupation} ($${freelancer.price})</p>
      `;
    freelancerList.appendChild(freelancerElement);
  });
}

function updateAveragePrice(newPrice) {
  freelancers.push(newPrice); // Add new freelancer
  const average = calculateAveragePrice(freelancers.map((f) => f.price));
  averagePriceDisplay.textContent = `Average Starting Price: $${average}`;
  displayFreelancers(freelancers); // Update freelancer list with new average
}

// Initial display
displayFreelancers(freelancers);
averagePriceDisplay.textContent = `Average Starting Price: $${calculateAveragePrice(
  freelancers.map((f) => f.price)
)}`;

// Simulate adding new freelancers every few seconds (replace with actual implementation)
setInterval(() => {
  const newFreelancer = {
    name: `New Freelancer ${Math.random().toFixed(2)}`,
    price: Math.floor(Math.random() * 100) + 1, // Random price between $1 and $100
    occupation: "placeholder", // Add logic to generate random occupation
  };
  updateAveragePrice(newFreelancer);
}, 3000); // Update every 3 seconds (adjust interval as needed)
