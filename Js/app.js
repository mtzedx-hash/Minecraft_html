console.log("Proyecto funcionando");

// Ejemplo de interacción
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    alert("Navegando a sección");
  });
});
