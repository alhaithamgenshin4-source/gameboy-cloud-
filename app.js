let themes = [];

fetch("themes.json")
  .then(r => r.json())
  .then(d => {
    themes = d.themes;
    applyTheme(themes[0]);
  });

function applyTheme(theme) {
  document.body.style.backgroundImage =
    `url(${theme.background})`;
  localStorage.setItem("theme", theme.id);
}

function openStore() {
  const store = document.getElementById("store");
  store.innerHTML = "<h2>Store de Temas</h2>";

  themes.forEach(t => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${t.name}</p>
      <button onclick="applyTheme(themes.find(x=>'${t.id}'===x.id))">
        Aplicar
      </button>
    `;
    store.appendChild(div);
  });

  store.classList.remove("hidden");
}
