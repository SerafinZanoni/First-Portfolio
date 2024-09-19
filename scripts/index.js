class Activity {
  constructor(id, title, description, urlImage) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.urlImage = urlImage;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  addActivity(activity) {
    this.activities.push(activity);
  }
  getAllActivities() {
    return this.activities;
  }
  createActivity(title, description, urlImage) {
    const id = this.activities.length + 1;
    const activity = new Activity(id, title, description, urlImage);
    this.addActivity(activity);
  }
  deleteActivityById(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }

  // Le consulte a chatgpt que podria mejorar o agregar y dentro de todas las opciones que me dio me parecio la mas util la de editar

  editActivity(id, title, description, urlImage) {
    const activity = this.activities.find((activity) => activity.id === id);
    activity.title = title;
    activity.description = description;
    activity.urlImage = urlImage;
  }
}
const repository = new Repository();

const title = document.getElementById("title");
const description = document.getElementById("description");
const urlImage = document.getElementById("urlImage");
const button = document.getElementById("button");
const activityCardContainer = document.getElementById("activityCardContainer");

const createActivityHTML = (activity) => {
  const activityDiv = document.createElement("div");
  activityDiv.classList.add("tarjeta");
  activityDiv.innerHTML = `
    <img src="${activity.urlImage}" alt="Imagen de la actividad" />
    <p>${activity.title}</p>
    <H1>${activity.description}</H1>
    <button class="delete-btn">Eliminar</button>
  `;

  const deleteButton = activityDiv.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    repository.deleteActivityById(activity.id);
    renderActivities();
  });

  return activityDiv;
};

const renderActivities = () => {
  activityCardContainer.innerHTML = "";

  const activities = repository.getAllActivities();

  const activityElements = activities.map(createActivityHTML);

  activityElements.forEach((activityElement) => {
    activityCardContainer.appendChild(activityElement);
  });
};

const handleCreateActivity = (event) => {
  event.preventDefault();

  const titleValue = title.value;
  const descriptionValue = description.value;
  const urlImageValue = urlImage.value;

  if (!titleValue || !descriptionValue || !urlImageValue) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  repository.createActivity(titleValue, descriptionValue, urlImageValue);

  title.value = "";
  description.value = "";
  urlImage.value = "";

  renderActivities();
};

button.addEventListener("click", handleCreateActivity);

document.addEventListener("DOMContentLoaded", renderActivities);
