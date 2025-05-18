document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;
    const cedula = document.getElementById("cedula").value;
    const telefono = document.getElementById("telefono").value;
    const ingresos = document.getElementById("ingresos").value;

    if (nombre === "") {
      alert("Escribe tu nombre.");
      return;
    }

    if (apellido === "") {
      alert("Escribe tu apellido.");
      return;
    }

    if (!(/\w+([-+.’]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(email)) {
        alert("Escribe un correo válido.");
        return;
    }

    if (direccion === "") {
      alert("Escribe tu dirección.");
      return;
    }

    if (!/^\d{10}$/.test(cedula)) {
        alert("La cedula debe tener 10 numeros.");
        return;
    }

    if (/^\d{10}$/.test(telefono)) {
      alert("La cedula debe tener 10 numero.");
      return;
    }

    if (ingresos === "" || isNaN(ingresos) || ingresos <= 0) {
      alert("Pon un ingreso valido.");
      return;
    }

    alert("¡Formulario listo para enviar!");
    form.submit();
  });
});
