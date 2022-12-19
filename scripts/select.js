class Page {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}
const pages = [
  new Page("Mt. Everest", "./kosciuszko.html"),
  new Page("Mt. Blanc", "./elo.html"),
];

const overlay = document.querySelector(".overlay");
const select = document.querySelector("select");

for (const [i, page] of Object.entries(pages)) {
  select[i] = new Option(
    page.name,
    page.address,
    undefined,
    i == +select.dataset.id
  );
}

select.addEventListener("change", (event) => {
  overlay.classList.add("loading");
  overlay.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName != "fadeIn") return;
    location.assign(event.target.value);
  });
});
