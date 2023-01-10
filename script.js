// targeting the parent element
const blogContainer = document.querySelector(".blog__container");
const blogModal = document.querySelector(".blog__modal__body");
// global
let globalStore = [];

// -----------------------------------------------------
// a function for creating a new card
const newCard = ({
  id,
  imageUrl,
  blogTitle,
  blogType,
  blogDescription,
}) => `<div class="col-lg-4 col-md-6" id=${id}>
<div class="card m-2">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success" id="${id}" onclick="editCard.apply(this, arguments)"><i class="fas fa-pencil-alt" id="${id}" onclick="editCard.apply(this, arguments)"></i></button>
    <button type="button" class="btn btn-outline-danger" id="${id}" onclick="deleteCard.apply(this, arguments)"><i class="fas fa-trash-alt" id="${id}" onclick="deleteCard.apply(this, arguments)"></i></button>
  </div>
  <img
    src=${imageUrl}
    class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${blogTitle}</h5>
    <p class="card-text">${blogDescription}</p>
    <span class="badge bg-primary">${blogType}</span>
  </div>
  <div class="card-footer text-muted">
    <button type="button" id="${id}" class="btn btn-outline-primary float-end" data-bs-toggle="modal"
    data-bs-target="#showblog" onclick="openBlog.apply(this, arguments)">Open Blog</button>
  </div>
</div>
</div>`;

// --------------------------------------------------
const loadData = () => {
  // access localstorage
  // localStorage.getItem("blog") ===  localStorage.blog
  const getInitialData = localStorage.blog; // if null, then
  if (!getInitialData) return;

  // convert stringified-object to object
  const { cards } = JSON.parse(getInitialData);

  // map around the array to generate HTML card and inject it to DOM
  cards.map((blogObject) => {
    const createNewBlog = newCard(blogObject);
    blogContainer.insertAdjacentHTML("beforeend", createNewBlog);
    globalStore.push(blogObject);
  });
};

const updateLocalStorage = () => {
  localStorage.setItem(
    "blog",
    JSON.stringify({
      cards: globalStore,
    })
  );
};

//  function for save changes----------------------------------------

// create a function which will trigerred on clicking on save changes in the modal
const saveChanges = () => {
  const blogData = {
    id: `${Date.now()}`, // generating a unique id for each card
    imageUrl: document.getElementById("imageurl").value,
    blogTitle: document.getElementById("title").value,
    blogType: document.getElementById("type").value,
    blogDescription: document.getElementById("description").value,
  };

  const createNewBlog = newCard(blogData);
  blogContainer.insertAdjacentHTML("beforeend", createNewBlog);

  globalStore.push(blogData);

  //  API  -> add t localStorage
  updateLocalStorage();
  // provide some unique identification, i.e key, here key is "blog",
};
