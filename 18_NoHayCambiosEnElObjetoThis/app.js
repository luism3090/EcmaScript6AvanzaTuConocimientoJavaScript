var manejador = {
  id: "123",
  init1: function () {
    document.addEventListener(
      "click",
      function (event) {
        this.clickEnPagina(event.type, "init1");
      }.bind(this),
      false
    );
  },
  clickEnPagina: function (type, param) {
    console.log(
      "Manejando " + type + " en " + param + " para el id " + this.id
    );
  },
  init2: function () {
    document.addEventListener("click", (event) =>
      this.clickEnPagina(event.type, "init2")
    );
  },
};

manejador.init1();
manejador.init2();
