var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    image: "https://m.media-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image:
      "https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg",
  },
];

const bookContainer = document.createElement("section");
let book ="";
for (let index = 0; index < books.length; index++) {
  book += ` <ul>
             <li>Title: ${books[index].title}</li>
             <li>Author: ${books[index].author}</li>
             <li>alreadyRead: ${books[index].alreadyRead}</li>
             <li><img src="${books[index].image}" width="300px"></li>
            </ul>
            `;
  bookContainer.innerHTML = book;
}
document
  .getElementsByTagName("h1")[0]
  .insertAdjacentElement("afterend", bookContainer);
