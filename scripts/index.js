
// Actividades

// Implementar la clase Repository, la cual se encargará de crear, almacenar y manipular las actividades. La misma tendrá:

// Propiedad activities => Un arreglo para almacenar las actividades.

// Método getAllActivities => Debe retornar un arreglo con todas las actividades.

// Método createActivity => Debe instanciar una actividad con los datos correspondientes y almacenarla en su arreglo.

// EXTRA CREDIT. Método deleteActivity => Debe recibir un id y filtrar el arreglo para eliminar la actividad correspondiente.



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
  deleteActivity(id) {
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

// ejemplos de uso 

const repository = new Repository();
const activity1 = new Activity(1, 'Tenis', 'Jugar tenis', 'imgs/tenis.jpg');
const activity2 = new Activity(2, 'Tenis', 'Jugar tenis', 'imgs/tenis.jpg');
repository.addActivity(activity1);
repository.addActivity(activity2);


console.log(repository.getAllActivities());

repository.editActivity(2,'Futbol' , 'Jugar con los pies', 'imgs/futbol.jpg');


// preguntar porque muestra futbol y no solo los dos tenis si pido console log antes de edirtarlo

