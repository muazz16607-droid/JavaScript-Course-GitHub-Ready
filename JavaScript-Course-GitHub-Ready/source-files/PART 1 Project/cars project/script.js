const cars = [
  {
    brand: "Toyota",
    title: "Toyota Corolla",
    price: 8000,
    image: ""
  },
  {
    brand: "Honda",
    title: "Honda Civic",
    price: 9500,
    image: "https://source.unsplash.com/400x300/?honda"
  },
  {
    brand: "Nissan",
    title: "Nissan X-Trail",
    price: 12000,
    image: "https://source.unsplash.com/400x300/?nissan"
  }
];

// Show cars
function displayCars(list, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  container.innerHTML = "";

  list.forEach(car => {
    container.innerHTML += `
      <div class="car">
        <img src="${car.image}">
        <h3>${car.title}</h3>
        <p>$${car.price}</p>
      </div>
    `;
  });
}

// Homepage load
if (document.getElementById("featuredCars")) {
  displayCars(cars, "featuredCars");
}

// Listing page load
if (document.getElementById("carList")) {
  displayCars(cars, "carList");
}

// Search (Homepage)
function searchCars() {
  const brand = document.getElementById("searchBrand").value.toLowerCase();
  const price = document.getElementById("searchPrice").value;

  const filtered = cars.filter(car => {
    return (
      car.brand.toLowerCase().includes(brand) &&
      (price === "" || car.price <= price)
    );
  });

  localStorage.setItem("filteredCars", JSON.stringify(filtered));
  window.location.href = "cars.html";
}

// Apply Filters (Listing page)
function applyFilters() {
  const price = document.getElementById("filterPrice").value;
  const brand = document.getElementById("filterBrand").value;

  const filtered = cars.filter(car => {
    return (
      (brand === "" || car.brand === brand) &&
      (price === "" || car.price <= price)
    );
  });

  displayCars(filtered, "carList");
}

// Load searched cars
window.onload = () => {
  const saved = localStorage.getItem("filteredCars");
  if (saved && document.getElementById("carList")) {
    displayCars(JSON.parse(saved), "carList");
  }
};