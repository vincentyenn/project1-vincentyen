const funFacts = [
  "Octopuses have three hearts.",
  "Honey can last for years without spoiling.",
  "Bananas are berries, but strawberries are not.",
  "A day on Venus is longer than a year on Venus.",
  "A group of flamingos is called a flamboyance.",
  "Butterflies taste with their feet.",
  "The Eiffel Tower can grow taller in warm weather.",
  "Sharks existed before trees.",
  "The Moon moves about an inch and a half farther from Earth each year.",
  "Sea otters sometimes hold hands while they sleep.",
  "A shrimp's heart is located in its head region.",
  "Some turtles can absorb oxygen through their skin underwater.",
  "Cows can form close social bonds with other cows.",
  "The first oranges were green.",
  "A cloud can weigh more than a million pounds.",
  "Koalas have fingerprints that look remarkably similar to human prints.",
  "The shortest war in recorded history lasted less than an hour.",
  "A jiffy is an actual unit of time used by physicists.",
  "The human brain uses roughly one fifth of the body's energy.",
  "A bolt of lightning can heat the air around it more than the Sun's surface.",
  "There are more possible chess games than there are atoms in the observable universe.",
  "Some bamboo species can grow almost three feet in a single day.",
  "A teaspoonful of neutron-star material would weigh billions of tons on Earth.",
  "The dot over a lowercase i or j is called a tittle.",
  "A crocodile cannot stick its tongue out.",
  "The fingerprints of a koala are difficult to tell apart from a human's.",
  "The world's oldest known living organisms include bristlecone pine trees.",
  "A snail can sleep for several years in the right conditions.",
  "Some fungi create underground networks that connect tree roots.",
  "The smell after rain has a name: petrichor.",
  "Blue whales can make sounds that travel hundreds of miles underwater.",
  "The average lightning bolt is about three miles long.",
  "Water can boil and freeze at the same time under the right pressure.",
  "A single strand of spaghetti is called a spaghetto.",
  "The first computer bug was an actual moth found in a relay.",
  "Cleopatra lived closer in time to the first Moon landing than to the building of the Great Pyramid of Giza.",
  "Saturn would float in water if there were a bathtub large enough to hold it, because its average density is lower than water.",
  "Some frogs can survive being partially frozen during winter and thaw when temperatures rise.",
  "The first astronauts who landed on the Moon left mirrors there that scientists can still use to measure the Earth-Moon distance.",
  "A single bolt of lightning can contain enough energy to toast thousands of slices of bread, although capturing that energy is difficult.",
  "Pineapples grow from many individual flowers that fuse together around a central core.",
  "The oxygen released by a large tree in a year can support the breathing needs of several people, depending on the species and conditions.",
  "The oldest continuously operating university in the world is generally recognized as the University of al-Qarawiyyin in Morocco, founded in 859.",
  "Some species of albatross can fly for hours without flapping their wings by using wind currents above the ocean.",
  "A standard deck of cards can be arranged in more possible orders than there are seconds since the Big Bang.",
  "An average cumulus cloud can contain hundreds of tons of water, even though it looks weightless from the ground.",
  "The Voyager 1 spacecraft has been traveling through space since 1977 and is the most distant human-made object from Earth.",
  "Ravens can learn to imitate certain sounds, including some human words, especially when raised around people.",
  "The Sahara has not always been a desert. At several times in the past, it contained grasslands, lakes, and rivers.",
  "A hummingbird's heart can beat more than a thousand times per minute during active flight.",
  "The world's oceans contain underwater mountain ranges that form a connected chain stretching for tens of thousands of miles.",
  "The tiny grooves in a vinyl record are long enough that a single side can hold several minutes of sound in one continuous spiral.",
  "Mars has the largest volcano in the solar system, Olympus Mons, which is about three times the height of Mount Everest.",
  "Some desert plants open their pores mainly at night, which helps them conserve water in hot climates.",
  "The deepest point in the ocean is deeper than Mount Everest is tall.",
  "A pencil can draw a line roughly 35 miles long before it runs out of usable graphite.",
  "The total length of the blood vessels in an adult human body is often estimated at around 60,000 miles.",
  "Many languages use different words for blue and green because the way people divide colors varies across cultures.",
  "The first photographs required such long exposure times that moving people usually did not appear in the final image.",
  "Some corals can fluoresce under blue light, giving reefs a bright glow that is invisible under normal daylight.",
  "A refrigerator magnet can hold a note to a door because billions of tiny magnetic regions inside it line up in the same direction.",
  "The world's fastest-growing plant is bamboo, and some varieties can grow more than a yard in a day under ideal conditions.",
  "The first email was sent in 1971, and the at sign was chosen to separate a user name from the computer receiving the message.",
  "A solar eclipse happens only when the Moon's shadow crosses a small part of Earth, which is why most eclipses are not visible everywhere.",
  "Some ants build living bridges with their bodies so the rest of the colony can cross gaps more quickly.",
  "The largest known living organism by area is a honey fungus in Oregon that spreads through an underground network.",
  "The word robot comes from a Czech word meaning forced labor or work.",
  "At the speed of light, a trip around Earth's equator would take a little over one seventh of a second."
];

const planetNames = [
  "Asterra", "Virelia", "Caldris", "Nymora", "Solenne", "Orith", "Velora", "Cyrune",
  "Lunaris", "Kestrel", "Aurelia", "Thalor", "Meridia", "Eldara", "Novaris", "Caelum",
  "Ilyra", "Sereon", "Oberis", "Tavira", "Zyra", "Peregrine", "Arden", "Sylara",
  "Corvane", "Liora", "Eos", "Mireon", "Vespera", "Aquila", "Rovena", "Kalyth",
  "Damaris", "Oriana", "Telara", "Borealis", "Cascadia", "Altair", "Elaris", "Rhodan"
];

const worldTypes = [
  { name: "world-ocean", size: 88, depth: 105, glow: "rgba(77, 182, 255, 0.94)" },
  { name: "world-lava", size: 108, depth: 170, glow: "rgba(255, 99, 39, 0.94)" },
  { name: "world-ice", size: 76, depth: 38, glow: "rgba(155, 229, 255, 0.9)" },
  { name: "world-rocky", size: 92, depth: 88, glow: "rgba(222, 141, 98, 0.9)" },
  { name: "world-cloud", size: 100, depth: 135, glow: "rgba(182, 137, 255, 0.94)" },
  { name: "world-gas", size: 120, depth: 205, glow: "rgba(255, 139, 93, 0.95)" }
];

const planetSpots = [...document.querySelectorAll(".planet-spot")];
const factTargets = [...document.querySelectorAll(".fact-copy")];
const orbitBands = [...document.querySelectorAll(".orbit")];
const orbitRings = [...document.querySelectorAll(".orbit-network-ring")];
const orbitRoutes = [...document.querySelectorAll(".orbit-network-route")];
const starLayers = [...document.querySelectorAll(".star-layer")];
const spacePage = document.querySelector(".space-page");
const galaxyReset = document.querySelector(".galactic-core");
let factDeck = [];
let planetNameDeck = [];
let isJumping = false;

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const replacementIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[replacementIndex]] = [copy[replacementIndex], copy[index]];
  }

  return copy;
}

function randomBetween(minimum, maximum) {
  return minimum + Math.random() * (maximum - minimum);
}

function drawFact() {
  if (!factDeck.length) factDeck = shuffle(funFacts);
  return factDeck.pop();
}

function drawPlanetName() {
  if (!planetNameDeck.length) planetNameDeck = shuffle(planetNames);
  return planetNameDeck.pop();
}

function showRandomFact(planetId) {
  const factTarget = document.querySelector(`[data-fact-for="${planetId}"]`);
  if (factTarget) factTarget.textContent = drawFact();
}

function selectPlanet(planetId) {
  const control = document.getElementById(planetId);
  if (!control || isJumping) return;

  control.checked = true;
  showRandomFact(planetId);
}

function createPlanetPositions(count) {
  const startAngle = randomBetween(0, Math.PI * 2);

  return Array.from({ length: count }, (_, index) => {
    const angle = startAngle + (index * Math.PI * 2) / count + randomBetween(-0.22, 0.22);
    const radius = randomBetween(29, 43);
    const x = Math.max(12, Math.min(88, 50 + Math.cos(angle) * radius));
    const y = Math.max(16, Math.min(84, 50 + Math.sin(angle) * radius * 0.72));

    return [x, y];
  });
}

function redrawOrbitNetwork(planetPositions) {
  orbitRings.forEach((ring, index) => {
    const centerX = randomBetween(465, 535);
    const centerY = randomBetween(450, 550);
    const radiusX = randomBetween(index === 0 ? 360 : 220, index === 0 ? 485 : 360);
    const radiusY = randomBetween(index === 0 ? 130 : 85, index === 0 ? 250 : 175);

    ring.setAttribute("cx", centerX.toFixed(0));
    ring.setAttribute("cy", centerY.toFixed(0));
    ring.setAttribute("rx", radiusX.toFixed(0));
    ring.setAttribute("ry", radiusY.toFixed(0));
    ring.setAttribute("transform", `rotate(${randomBetween(-70, 70).toFixed(0)} 500 500)`);
  });

  const points = planetPositions.map(([x, y]) => [x * 10, y * 10]);
  const [first, second, third, fourth, fifth] = points;

  orbitRoutes[0].setAttribute(
    "d",
    `M ${first[0].toFixed(0)} ${first[1].toFixed(0)} C ${randomBetween(260, 430).toFixed(0)} ${randomBetween(80, 260).toFixed(0)} ${randomBetween(540, 760).toFixed(0)} ${randomBetween(100, 360).toFixed(0)} ${third[0].toFixed(0)} ${third[1].toFixed(0)}`
  );
  orbitRoutes[1].setAttribute(
    "d",
    `M ${second[0].toFixed(0)} ${second[1].toFixed(0)} C ${randomBetween(180, 420).toFixed(0)} ${randomBetween(500, 760).toFixed(0)} ${randomBetween(590, 790).toFixed(0)} ${randomBetween(650, 900).toFixed(0)} ${fifth[0].toFixed(0)} ${fifth[1].toFixed(0)}`
  );
  orbitRoutes[2].setAttribute(
    "d",
    `M ${fourth[0].toFixed(0)} ${fourth[1].toFixed(0)} C ${randomBetween(390, 560).toFixed(0)} ${randomBetween(240, 440).toFixed(0)} ${randomBetween(520, 700).toFixed(0)} ${randomBetween(510, 700).toFixed(0)} ${third[0].toFixed(0)} ${third[1].toFixed(0)}`
  );
}

function reshapeOrbitBands() {
  orbitBands.forEach((orbit, index) => {
    const depth = [-180, -70, -280][index];
    const width = randomBetween(index === 2 ? 86 : 52, index === 2 ? 130 : 98);
    const height = randomBetween(index === 2 ? 27 : 16, index === 2 ? 52 : 36);

    orbit.style.width = `${width.toFixed(0)}vw`;
    orbit.style.height = `${height.toFixed(0)}vw`;
    orbit.style.transform = `translate3d(-50%, -50%, ${depth}px) rotate(${randomBetween(-78, 78).toFixed(0)}deg)`;
    orbit.style.opacity = randomBetween(0.34, 0.7).toFixed(2);
  });
}

function createNewGalaxy() {
  const positions = createPlanetPositions(planetSpots.length);
  const worlds = shuffle(worldTypes).slice(0, planetSpots.length);

  planetSpots.forEach((planet, index) => {
    const [x, y] = positions[index];
    const world = worlds[index];
    const planetName = drawPlanetName();
    const nameTarget = document.querySelector(`[data-name-for="${planet.htmlFor}"]`);

    planet.classList.remove(...worldTypes.map((type) => type.name));
    planet.classList.add(world.name);
    planet.style.setProperty("--planet-x", `${x.toFixed(1)}%`);
    planet.style.setProperty("--planet-y", `${y.toFixed(1)}%`);
    planet.style.setProperty("--planet-size", `${Math.round(world.size + randomBetween(-13, 14))}px`);
    planet.style.setProperty("--planet-depth", `${Math.round(world.depth + randomBetween(-55, 56))}px`);
    planet.style.setProperty("--planet-glow", world.glow);
    planet.style.backgroundPosition = `${Math.floor(randomBetween(0, 50))}% ${Math.floor(randomBetween(0, 50))}%`;
    planet.querySelector("span").textContent = `Open ${planetName}`;
    if (nameTarget) nameTarget.textContent = planetName;
  });

  redrawOrbitNetwork(positions);
  reshapeOrbitBands();
  starLayers.forEach((layer) => {
    layer.style.backgroundPosition = `${Math.floor(randomBetween(-70, 70))}px ${Math.floor(randomBetween(-70, 70))}px`;
  });
  spacePage.style.setProperty("--galaxy-hue", `${Math.floor(randomBetween(-120, 121))}deg`);
  factTargets.forEach((factTarget) => {
    factTarget.textContent = drawFact();
  });
}

function resetGalaxy() {
  if (isJumping) return;

  isJumping = true;
  document.getElementById("planet-none").checked = true;
  spacePage.classList.add("is-jumping");

  window.setTimeout(() => {
    createNewGalaxy();
    spacePage.classList.remove("is-jumping");
    isJumping = false;
  }, 850);
}

planetSpots.forEach((planet) => {
  planet.addEventListener("click", () => selectPlanet(planet.htmlFor));

  planet.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    selectPlanet(planet.htmlFor);
  });
});

galaxyReset.addEventListener("click", resetGalaxy);

createNewGalaxy();
