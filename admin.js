document.addEventListener("keydown", e => {
  if (e.key === "F12") {
    const code = prompt("Código Admin:");
    if (code === "7777") {
      alert("Modo Admin Ativado");
      localStorage.setItem("admin", "true");
    }
  }
});
