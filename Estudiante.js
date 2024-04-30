class Estudiante {
  constructor(nombres, numCuenta, contraseña) {
    this.setNombre(nombres);
    this.setNumCuenta(numCuenta);
    this.setContraseña(contraseña);
  }

  // Métodos para obtener los atributos
  getNombre() {
    return this.nombres;
  }

  getContraseña() {
    return this.contraseña;
  }

  getNumCuenta() {
    return this.numCuenta;
  }

  // Métodos para establecer los atributos si se necesitan
  setNombre(nombre) {
    const expresionRegular = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    if (!expresionRegular.test(nombre)) {
      alert("Favor de introducir tus nombres en texto plano.");
      return false;
    } else {
      this.nombres = nombre;
      return true;
    }
  }

  setContraseña(contraseña) {
    if (contraseña.length < 8 || contraseña.trim() === '') {
      alert("Favor de introducir una contraseña no vacía de al menos 8 caracteres");
      return false;
    } else {
      this.contraseña = contraseña;
      return true;
    }
  }

  setNumCuenta(numCuenta) {
    const expresionRegular = /^[0-9]{8}$/;
    if (!expresionRegular.test(numCuenta)) {
      alert(
        "En el número de cuenta solo se admiten caracteres numéricos y deben ser 8 dígitos."
      );
      return false;
    } else {
      this.numCuenta = numCuenta;
      return true;
    }
  }

  esValido() {
    if (
      this.setNombre(this.nombres) &&
      this.setNumCuenta(this.numCuenta) &&
      this.setContraseña(this.contraseña)
    ) {
      return true;
    } else {
      return false;
    }
  }
}

