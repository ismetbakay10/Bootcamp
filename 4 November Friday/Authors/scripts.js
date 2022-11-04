let authors = [
  {
    firstName: "Andreas",
    lastName: "Neeser",
    image: "tile_andreas_neeser.jpg",
  },
  {
    firstName: "Anna",
    lastName: "Ruchat",
    image: "tile_anna_ruchat.jpg",
  },
  {
    firstName: "Arno",
    lastName: "Camenisch",
    image: "tile_arno_camenisch.jpg",
  },
  {
    firstName: "Barbara",
    lastName: "Schibli",
    image: "tile_barbara_schibli.jpg",
  },
  {
    firstName: "Demian",
    lastName: "Leinhard",
    image: "tile_demian_leinhard.jpg",
  },
  {
    firstName: "Flurina",
    lastName: "Bader",
    image: "tile_flurina_bader.jpg",
  },
  {
    firstName: "Franco",
    lastName: "Supino",
    image: "tile_franco_supino.jpg",
  },
  {
    firstName: "Lukas",
    lastName: "Hartmann",
    image: "tile_lukas_hartmann.jpg",
  },
  {
    firstName: "Marius",
    lastName: "Popescu",
    image: "tile_marius_popescu.jpg",
  },
  {
    firstName: "Reto",
    lastName: "Haenny",
    image: "tile_reto_haenny.jpg",
  },
  {
    firstName: "Sandra",
    lastName: "Kuenzi",
    image: "tile_sandra_kuenzi.jpg",
  },
  {
    firstName: "Simon",
    lastName: "Libsig",
    image: "tile_simon_libsig.jpg",
  },
];


let card = document.getElementById("author")
let person = "";

//for (let index = 0; index < arrayTeam.length; index++) {
authors.forEach((member, index) => {
  person += `<li class="img${index}" style ="background-image: url(./img/${member.image}); background-repeat: no-repeat;
  background-size: cover;"><button>${member.firstName}</button><button>${member.lastName}</button></li>`;
              card.innerHTML = person;
 });


