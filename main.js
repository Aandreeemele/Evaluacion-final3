document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const mensaje = document.getElementById("mensaje").value;
    alert(`Mensaje enviado: ${mensaje}`);
  });
  