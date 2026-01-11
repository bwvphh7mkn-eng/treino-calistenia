const dias = [
  {
    titulo: "Dia 1 – Corpo Todo",
    exercicios: [
      ["Agachamento", "https://www.youtube.com/results?search_query=agachamento+correto"],
      ["Flexão inclinada", "https://www.youtube.com/results?search_query=flexão+inclinada"],
      ["Afundo para trás", "https://www.youtube.com/results?search_query=afundo+para+trás"],
      ["Abdominal crunch", "https://www.youtube.com/results?search_query=abdominal+crunch"],
      ["Prancha", "https://www.youtube.com/results?search_query=prancha+abdominal"]
    ]
  },
  {
    titulo: "Dia 2 – Pernas",
    exercicios: [
      ["Agachamento sumô", "https://www.youtube.com/results?search_query=agachamento+sumô"],
      ["Afundo alternado", "https://www.youtube.com/results?search_query=afundo+alternado"],
      ["Elevação de quadril", "https://www.youtube.com/results?search_query=elevação+de+quadril"],
      ["Panturrilha em pé", "https://www.youtube.com/results?search_query=panturrilha+em+pé"],
      ["Wall sit", "https://www.youtube.com/results?search_query=wall+sit"]
    ]
  }
];

const container = document.getElementById("dias");

dias.forEach(dia => {
  const div = document.createElement("div");
  div.className = "dia";
  div.innerHTML = `<h2>${dia.titulo}</h2>` +
    dia.exercicios.map(e =>
      `<p>• ${e[0]} — <a href="${e[1]}" target="_blank">🎥 Vídeo</a></p>`
    ).join("") +
    `<button>Treino concluído ✅</button>`;
  container.appendChild(div);
});
