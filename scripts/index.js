const botonLupa = document.querySelector(".botonBuscar");
const barraBusqueda = document.querySelector(".barraBusqueda");

botonLupa.addEventListener("click", () => {
  botonLupa.classList.add("animar-lupa");
  barraBusqueda.classList.toggle("mostrar");

  botonLupa.addEventListener(
    "animationend",
    () => botonLupa.classList.remove("animar-lupa"),
    { once: true }
  );
});
