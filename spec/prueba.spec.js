describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

// Funciones a testear
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function esMayor(a, b) {
  return a > b;
}

function obtenerObjetoPersona() {
  return {
      nombre: "Juan",
      edad: 30
  };
}

function obtenerListaDeNumeros() {
  return [1, 2, 3, 4, 5];
}

function obtenerValorNulo() {
  return null;
}

function obtenerValorIndefinido() {
  return undefined;
}

// Grupo de pruebas para funciones matemáticas
describe("Pruebas para operaciones matemáticas", function() {

  it("debería sumar dos números correctamente", function() {
      const resultado = suma(3, 5);
      expect(resultado).toBe(8); // Espera que el resultado sea 8
  });

  it("debería restar dos números correctamente", function() {
      const resultado = resta(10, 4);
      expect(resultado).toBe(6); // Espera que el resultado sea 6
  });

  it("debería verificar si un número es mayor que otro", function() {
      const resultado = esMayor(10, 5);
      expect(resultado).toBeTrue(); // Espera que el resultado sea true
  });

  it("debería verificar que el resultado de la suma no es incorrecto", function() {
      const resultado = suma(2, 2);
      expect(resultado).not.toBe(5); // Espera que el resultado NO sea 5
  });

});

// Grupo de pruebas para manejo de strings
describe("Pruebas con strings", function() {
  
  it("debería verificar si la longitud de un string es correcta", function() {
      const texto = "Hola Mundo";
      expect(texto.length).toBe(10); // La longitud de 'Hola Mundo' es 10
  });

  it("debería verificar si dos strings son iguales", function() {
      const saludo = "Hola";
      expect(saludo).toBe("Hola"); // Espera que los dos strings sean iguales
  });

  it("debería verificar si un string contiene otro string", function() {
      const frase = "Jasmine es genial";
      expect(frase).toContain("genial"); // Verifica que la frase contiene "genial"
  });
  
});

// Grupo de pruebas para manejo de objetos
describe("Pruebas con objetos", function() {

  it("debería verificar las propiedades de un objeto", function() {
      const persona = obtenerObjetoPersona();
      expect(persona).toEqual({
          nombre: "Juan",
          edad: 30
      }); // Verifica que el objeto tiene las mismas propiedades y valores
  });

  it("debería verificar si el objeto tiene la propiedad nombre", function() {
      const persona = obtenerObjetoPersona();
      expect(persona.nombre).toBeDefined(); // Verifica que la propiedad 'nombre' está definida
  });
  
  it("debería verificar que una propiedad no existe en el objeto", function() {
      const persona = obtenerObjetoPersona();
      expect(persona.apellido).toBeUndefined(); // Verifica que 'apellido' no está definido
  });

});

// Grupo de pruebas para manejo de arrays
describe("Pruebas con arrays", function() {

  it("debería verificar si un array contiene un número", function() {
      const numeros = obtenerListaDeNumeros();
      expect(numeros).toContain(3); // Verifica que el array contiene el número 3
  });

  it("debería verificar que la longitud del array es correcta", function() {
      const numeros = obtenerListaDeNumeros();
      expect(numeros.length).toBe(5); // Verifica que el array tiene 5 elementos
  });

  it("debería verificar si dos arrays son iguales", function() {
      const numeros = obtenerListaDeNumeros();
      expect(numeros).toEqual([1, 2, 3, 4, 5]); // Verifica que los dos arrays son iguales
  });

});

// Grupo de pruebas para valores nulos o indefinidos
describe("Pruebas con valores nulos e indefinidos", function() {

  it("debería verificar que el valor es nulo", function() {
      const valor = obtenerValorNulo();
      expect(valor).toBeNull(); // Verifica que el valor es null
  });

  it("debería verificar que el valor está indefinido", function() {
      const valor = obtenerValorIndefinido();
      expect(valor).toBeUndefined(); // Verifica que el valor es undefined
  });

  it("debería verificar que el valor no está definido", function() {
      const valor = undefined;
      expect(valor).toBeUndefined(); // También verifica que el valor es undefined
  });

});
