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
  
    editActivity(id, title, description, urlImage) {
      const activity = this.activities.find((activity) => activity.id === id);
      activity.title = title;
      activity.description = description;
      activity.urlImage = urlImage;
    }
  }
  
  // Crear una instancia global de Repository
  const repository = new Repository();
  
  // Obtener referencias a los elementos del formulario
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const urlImage = document.getElementById("urlImage");
  const button = document.getElementById("button");
  const activityCardContainer = document.getElementById("activityCardContainer");
  
  // Función para crear un elemento HTML a partir de una instancia de Activity
  const createActivityHTML = (activity) => {
    const activityDiv = document.createElement("div");
    activityDiv.classList.add("tarjeta");
    activityDiv.innerHTML = `
      <img src="${activity.urlImage}" alt="Imagen de la actividad" />
      <p>${activity.title}</p>
      <H1>${activity.description}</H1>
      <button class="delete-btn">Eliminar</button>
    `;
  
    // Asignar el evento de eliminar al botón "Eliminar"
    const deleteButton = activityDiv.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      repository.deleteActivityById(activity.id);
      renderActivities(); // Volver a renderizar después de eliminar
    });
  
    return activityDiv;
  };
  
  // Función para renderizar todas las actividades
  const renderActivities = () => {
    // Vaciar el contenido actual del contenedor
    activityCardContainer.innerHTML = "";
  
    // Obtener el listado completo de actividades
    const activities = repository.getAllActivities();
  
    // Mapear el listado de actividades para convertirlas en elementos HTML
    const activityElements = activities.map(createActivityHTML);
  
    // Agregar cada elemento HTML al contenedor
    activityElements.forEach((activityElement) => {
      activityCardContainer.appendChild(activityElement);
    });
  };
  
  // Función para manejar la creación de una nueva actividad y luego renderizar todas
  const handleCreateActivity = (event) => {
    event.preventDefault();
  
    const titleValue = title.value;
    const descriptionValue = description.value;
    const urlImageValue = urlImage.value;
  
    if (!titleValue || !descriptionValue || !urlImageValue) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Crear la nueva actividad
    repository.createActivity(titleValue, descriptionValue, urlImageValue);
  
    // Limpiar los campos del formulario
    title.value = "";
    description.value = "";
    urlImage.value = "";
  
    // Volver a renderizar todas las actividades
    renderActivities();
  };
  
  // Asignar el evento al botón para crear una actividad
  button.addEventListener("click", handleCreateActivity);
  
  // Renderizar las actividades al cargar la página
  document.addEventListener("DOMContentLoaded", renderActivities);
  