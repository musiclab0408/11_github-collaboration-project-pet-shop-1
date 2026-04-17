// Add your filename to the petImage list!
// Format: "studentName_petName.jpg"
const petImages = [
  // add your pet file(s) name below this line with a comma at the end:
  "alison_ninja.JPG",
  "James_Dani-Dog.jpg",
  "shruti_gigi.jpg",
  "mollie_raster.jpg",
  "rees_bjorn.jpg",
  "sam_black-cat.jpg",
  "tracy_my-minions.jpg",
  "chris_baby-girl.jpeg",
  "scotty_cookie.jpg",
  "aldemar_goldy.jpeg",
  "chris_bandit.jpeg",
  "sam_lady-cat.jpg",
  "ana_sakura.jpg",
  "Ashley_james-the-dream.jpg",
  "Nathan_Munch.jpg",
];

/*
  PLEASE DO NOT MODIFY THE CODE BELOW
*/

const gallery = document.getElementById("gallery");

// This method loops through an array/list to look at each item inside
petImages.forEach((fileName) => {
  // we replace any -, remove the file extension, then split the owner and pet name
  const fileNameTrimmedSpace = fileName.split("-").join(" ");
  const nameData = fileNameTrimmedSpace.split(".")[0];
  const [owner, pet] = nameData.split("_");

  if (owner && pet) {
    // Some DOM manipulation to create new pet card elements
    const card = document.createElement("div");
    card.className = "pet-card";

    card.innerHTML = `
            <img src="./assets/${fileName}" alt="${pet}" />
            <div class="pet-info">
                <p class="pet-name">${pet.charAt(0).toUpperCase() + pet.slice(1)}</p>
                <p class="owner-name">Owner: ${owner.charAt(0).toUpperCase() + owner.slice(1)}</p>
            </div>
        `;
    gallery.appendChild(card); // put the pet card inside the gallery element
  }
});

// Modal constants
const modal = document.getElementById("pet-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Listen for clicks on the gallery
gallery.addEventListener("click", (e) => {
  // Check if the clicked element (or its parent) is a pet-card
  const card = e.target.closest(".pet-card");

  if (card) {
    const img = card.querySelector("img");
    const petName = card.querySelector(".pet-name").innerText;

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = `${petName}`;
  }
});

// close modal on x icon or outside image click
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target === closeBtn) {
    modal.style.display = "none";
  }
});

unction renderGallery(filteredArray) {
     const gallery = document.getElementById("gallery");
     gallery.innerHTML = "";

     filteredArray.forEach((fileName) => {
          const nameData = fileName.split("-").join(" ").split(".")[0];
          const [owner, pet] = nameData.split("_");

          if (owner && pet) {
               const card = document.createElement("div");
               card.className = "pet-card";

               const img = document.createElement("img");
               img.src = "./assets/" + fileName;
               img.alt = pet;

               const info = document.createElement("div");
               info.className = "pet-info";

               const petName = document.createElement("p");
               petName.className = "pet-name";
               petName.textContent = pet.charAt(0).toUpperCase() + pet.slice(1);

               const ownerName = document.createElement("p");
               ownerName.className = "owner-name";
               ownerName.textContent = "Owner: " + owner.charAt(0).toUpperCase() + owner.slice(1);

               info.appendChild(petName);
               info.appendChild(ownerName);
               card.appendChild(img);
               card.appendChild(info);
               gallery.appendChild(card);
               setTimeout(() => { card.classList.add("visible"); }, 10);
          }
     });
}

const showCatsBtn = document.createElement("button");
showCatsBtn.textContent = "Show Cats";

const showDogsBtn = document.createElement("button");
showDogsBtn.textContent = "Show Dogs";

document.querySelector("header").after(showCatsBtn, showDogsBtn);

showCatsBtn.addEventListener("click", () => {
     const cats = petImages.filter(fileName => fileName.includes("cat")); // boolean includes
     renderGallery(cats);
});

showDogsBtn.addEventListener("click", () => {
     const dogs = petImages.filter(fileName => fileName.includes("dog")); // boolean includes
     renderGallery(dogs);
});

const showAllBtn = document.createElement("button");
showAllBtn.textContent = "Show All";
document.querySelector("header").after(showAllBtn);

showAllBtn.addEventListener("click", () => {
     renderGallery(petImages);
});