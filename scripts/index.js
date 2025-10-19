const botonLupa = document.querySelector(".lupa");

botonLupa.addEventListener("click", () => {
  botonLupa.classList.add("animar-lupa");

  // Quita la clase al acabar la animación para que pueda repetirse
  botonLupa.addEventListener(
    "animationend",
    () => {
      botonLupa.classList.remove("animar-lupa");
    },
    { once: true }
  );
});
