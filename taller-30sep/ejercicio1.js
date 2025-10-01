// Validar número de teléfono (10 dígitos)
function validarTelefono(telefono) {
  let regex = /^\d{10}$/;
  return regex.test(telefono);
}
console.log(validarTelefono("3124567890")); // true
console.log(validarTelefono("12345")); // false

// Validar URL
function validarURL(url) {
  let regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;
  return regex.test(url);
}
console.log(validarURL("https://google.com")); // true
console.log(validarURL("not_a_url")); // false

// Validar contraseña (mínimo 8 caracteres, 1 número y 1 mayúscula)
function validarPassword(pass) {
  let regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(pass);
}
console.log(validarPassword("Hola1234")); // true
console.log(validarPassword("hola")); // false
