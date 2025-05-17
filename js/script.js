document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevenir envío hasta validar

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const cedula = document.getElementById("cedula").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const ingresos = document.getElementById("ingresos").value.trim();

        if (nombre === "") 
            return alert("Por favor, ingrese su nombre.");
        if (apellido === "") 
            return alert("Por favor, ingrese su apellido.");
        if (email === "" || !email.includes("@")) 
            return alert("Ingrese un correo electrónico válido.");
        if (direccion === "") 
            return alert("Por favor, ingrese su dirección.");
        
        if (!/^\d{6,12}$/.test(cedula)) {
            return alert("La cédula debe contener entre 6 y 12 dígitos numéricos.");
        }

        if (!/^\d{7,10}$/.test(telefono)) {
            return alert("El teléfono debe contener entre 7 y 10 dígitos numéricos.");
        }

        if (ingresos === "" || isNaN(ingresos) || ingresos <= 0) {
            return alert("Por favor, ingrese un valor válido de ingresos.");
        }

        const checkboxes = document.querySelectorAll(".seleccion_check input[type='checkbox']");
        const seleccionados = Array.from(checkboxes).filter(chk => chk.checked);
        if (seleccionados.length !== 1) {
            return alert("Por favor, seleccione solo una opción para discapacidad (sí o no).");
        }

        alert("Formulario enviado correctamente.");
        form.submit();
    });
});
