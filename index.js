const estudiantes = [];

document
  .getElementById("formularioEstudiante")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe normalmente

    // Obtener los datos del formulario
    const nombres = document.getElementById("nombres").value;
    const numeroCuenta = document.getElementById("numeroCuenta").value;
    const contraseña = document.getElementById("contraseña").value;
    // Validar los datos del formulario
    // Puedes agregar más condiciones de validación según tus necesidades uwu
    const esValido = validarDatos(
      nombres,
      numeroCuenta,
      contraseña
    );

    if (!esValido) {
      // Si los datos no son válidos, muestra un mensaje y no continúes uwu
      alert("Por favor, verifica los datos ingresados.");
      return;
    }

    // Crear una instancia de la clase Estudiante
    const estudiante = new Estudiante(
      nombres,
      numeroCuenta,
      contraseña
    );


    // Agregar el estudiante al array de estudiantes
    estudiantes.push(estudiante);

    // Llamar a la función mostrarEstudianteEnHTML para mostrar la información del estudiante
    mostrarEstudianteEnHTML(estudiante);
  });

// Manejador de eventos para el botón que muestra el listado de estudiantes
document
  .getElementById("mostrarListado")
  .addEventListener("click", function () {
    // Selecciona el elemento HTML donde se mostrará el listado
    const listadoEstudiantes = document.getElementById("listadoEstudiantes");

    // Crear una cadena de texto para el listado horizontal
    let listadoTexto = "";

    // Iterar sobre los estudiantes y construir la cadena de texto
    estudiantes.forEach((estudiante, i) => {
      listadoTexto += `${i + 1
        } ${estudiante.getNombre()} ${estudiante.getNumCuenta()}<br>`;
    });

    // Actualizar el contenido del elemento HTML con el listado de estudiantes
    listadoEstudiantes.innerHTML = listadoTexto;
  });

// Función para validar los datos del formulario
function validarDatos(
  nombres,
  numeroCuenta,
  contraseña
) {
  // Expresiones regulares para validar los datos
  const nombreRegex = /^[A-Za-z\s]+$/;
  const cuentaRegex = /^[0-9]{8}$/;
  const gradoGrupoRegex = /^[1-8][A-K]$/;

  // Verificar si los datos cumplen con los requisitos
  const esNombreValido = nombreRegex.test(nombres);
  const esNumeroCuentaValido = cuentaRegex.test(numeroCuenta);
  // const esContraseña = gradoGrupoRegex.test(contraseña);

  // Devolver true si todos los campos son válidos, false en caso contrario
  return (
    esNombreValido &&
    esNumeroCuentaValido
    //esContraseña
  );
}

// Función para mostrar la información de un estudiante en el HTML
// Función para mostrar la información del estudiante en el HTML
function mostrarEstudianteEnHTML(estudiante) {
  // Selecciona el elemento HTML por su ID
  const infoEstudiante = document.getElementById("infoEstudiante");

  // Construye una cadena de texto con la información del estudiante
  const info = `
      <p>Nombre: ${estudiante.getNombre()}</p>
      <p>Número de Cuenta: ${estudiante.getNumCuenta()}</p>
      <p>Contraseña: ${estudiante.getContraseña()}</p>
  `;

  // Actualiza el contenido del elemento HTML con la información
  infoEstudiante.innerHTML = info;
}

// Manejador de eventos para limpiar los campos del formulario
document.getElementById("agregarNuevo").addEventListener("click", function () {
  // Limpia los campos del formulario utilizando el método reset()
  document.getElementById("formularioEstudiante").reset();

  // Limpia la información del elemento HTML
  const infoEstudiante = document.getElementById("infoEstudiante");
  infoEstudiante.innerHTML = ""; // Establece el contenido a cadena vacía
});