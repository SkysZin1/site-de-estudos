// Indice simples usado pela busca global da pagina inicial.
const searchData = [
  {
    title: "StudyHub",
    description: "Pagina inicial com acesso as materias, fluxo de estudo e pesquisa global.",
    category: "Geral",
    type: "Pagina",
    keywords: ["inicio", "home", "materias", "estudo", "studyhub"],
    url: "index.html"
  },
  {
    title: "Como usar o site",
    description: "Fluxo recomendado para estudar: materia, topicos, formulas, exemplos, questoes e resumo.",
    category: "Geral",
    type: "Conteudo",
    keywords: ["como usar", "roteiro", "fluxo", "revisao", "prova"],
    url: "index.html#como-usar"
  },
  {
    title: "FOE - Fenomenos Ondulatorios e Eletromagneticos",
    description: "Pagina de estudo sobre inducao, corrente alternada, circuitos RLC, transformadores, Maxwell e ondas eletromagneticas.",
    category: "FOE",
    type: "Pagina",
    keywords: ["foe", "ondas", "eletromagnetismo", "campo magnetico", "inducao", "aula 32"],
    url: "materias/foe.html"
  },
  {
    title: "Resumo Facil FOE",
    description: "Revisao rapida com teoria essencial, formulas, pegadinhas e checklist de FOE.",
    category: "FOE",
    type: "Resumo",
    keywords: ["resumo foe", "resumo facil", "revisao rapida", "formulas foe", "inducao", "rlc"],
    url: "materias/resumos/foe-resumo.html"
  },
  {
    title: "Formulas FOE",
    description: "Caixas rapidas com fluxo magnetico, Faraday-Lenz, fem de movimento, RL, reatancias, impedancia e ondas eletromagneticas.",
    category: "FOE",
    type: "Formula",
    keywords: ["formulas foe", "formula foe", "inducao", "circuito rlc", "corrente alternada", "ondas eletromagneticas", "revisao rapida"],
    url: "materias/resumos/foe-resumo.html#formulas"
  },
  {
    title: "Fórmulas e Variáveis de FOE",
    description: "Pagina interativa com formulario da AV3, variaveis principais e questoes curtas de aplicacao direta das formulas.",
    category: "FOE",
    type: "Treino",
    keywords: ["formulas foe", "formulario foe", "formulario av3", "decorar formula", "decorar variaveis", "variaveis foe", "questoes pequenas", "alternativas", "inducao", "rl", "rlc", "transformador", "maxwell", "ondas eletromagneticas"],
    url: "materias/exercicios/foe-formulas-treino.html"
  },
  {
    title: "Fluxo magnetico",
    description: "Relacao entre campo magnetico, area, angulo e fluxo atraves de uma superficie.",
    category: "FOE",
    type: "Formula",
    keywords: ["fluxo", "campo magnetico", "phi", "espira", "inducao", "formulas"],
    url: "materias/foe.html#fluxo"
  },
  {
    title: "Lei de Faraday-Lenz",
    description: "Fem induzida pela variacao do fluxo magnetico e sentido de oposicao da corrente induzida.",
    category: "FOE",
    type: "Formula",
    keywords: ["faraday", "lenz", "inducao", "fem", "fluxo magnetico", "formulas"],
    url: "materias/foe.html#faraday"
  },
  {
    title: "Fem de movimento e correntes de Foucault",
    description: "Inducao causada por movimento em campo magnetico e correntes parasitas em materiais condutores.",
    category: "FOE",
    type: "Conteudo",
    keywords: ["fem de movimento", "foucault", "correntes parasitas", "campo magnetico", "exemplo"],
    url: "materias/foe.html#movimento"
  },
  {
    title: "Circuito RL",
    description: "Constante de tempo, crescimento e decaimento da corrente em circuito com resistor e indutor.",
    category: "FOE",
    type: "Formula",
    keywords: ["circuito rl", "indutor", "constante de tempo", "corrente", "formulas"],
    url: "materias/foe.html#rl"
  },
  {
    title: "Corrente alternada",
    description: "Valor eficaz, valor de pico, frequencia angular e comportamento senoidal.",
    category: "FOE",
    type: "Formula",
    keywords: ["corrente alternada", "ca", "valor eficaz", "rms", "frequencia", "formulas"],
    url: "materias/foe.html#ca"
  },
  {
    title: "Circuito RLC",
    description: "Impedancia, reatancia indutiva, reatancia capacitiva e ressonancia em circuito serie.",
    category: "FOE",
    type: "Formula",
    keywords: ["circuito rlc", "impedancia", "ressonancia", "reatancia", "formulas"],
    url: "materias/foe.html#rlc"
  },
  {
    title: "Transformadores",
    description: "Relacao entre espiras, tensao, corrente e potencia em transformadores ideais.",
    category: "FOE",
    type: "Conteudo",
    keywords: ["transformador", "transformadores", "espiras", "tensao", "corrente", "formulas"],
    url: "materias/foe.html#transformadores"
  },
  {
    title: "Equacoes de Maxwell",
    description: "Leis que conectam campos eletricos, campos magneticos, corrente de deslocamento e forca de Lorentz.",
    category: "FOE",
    type: "Resumo",
    keywords: ["maxwell", "ampere", "lorentz", "campo eletrico", "campo magnetico", "resumo"],
    url: "materias/foe.html#maxwell"
  },
  {
    title: "Ondas eletromagneticas",
    description: "Conteudo da Aula 32 sobre equacao de onda, relacao E/B, Poynting, intensidade e energia.",
    category: "FOE",
    type: "Conteudo",
    keywords: ["aula 32", "ondas eletromagneticas", "poynting", "intensidade", "densidade de energia", "campo eletrico", "campo magnetico"],
    url: "materias/foe.html#ondas-eletromagneticas"
  },
  {
    title: "Exercicios Sugeridos de FOE",
    description: "Pagina com exercicios sugeridos, resolucoes comentadas e treino extra detalhado de inducao eletromagnetica, RL, RLC, transformadores e ondas eletromagneticas.",
    category: "FOE",
    type: "Questao",
    keywords: ["questoes", "exercicios sugeridos", "exercicios foe", "resolucao", "foe", "inducao", "inducao eletromagnetica", "lei de faraday", "lei de lenz", "circuito rl", "descarga rl", "rl", "rlc", "ressonancia", "transformador", "transformadores", "onda eletromagnetica", "ondas eletromagneticas"],
    url: "materias/exercicios/foe-exercicios.html"
  },
  {
    title: "Treino extra de FOE",
    description: "Bloco com doze questoes extras e raciocinio detalhado sobre inducao eletromagnetica, transformadores, RL, RLC e ondas eletromagneticas.",
    category: "FOE",
    type: "Questao",
    keywords: ["treino extra", "questoes extras", "foe", "inducao eletromagnetica", "lei de faraday", "lei de lenz", "fem induzida", "transformador", "transformador elevador", "rlc", "ressonancia rlc", "circuito rl", "descarga rl", "onda eletromagnetica", "intensidade media"],
    url: "materias/exercicios/foe-exercicios.html#treino-extra"
  },
  {
    title: "FT - Fenomenos de Transporte",
    description: "Pagina de estudo sobre escoamento, perda de carga e transferencia de calor.",
    category: "FT",
    type: "Pagina",
    keywords: ["ft", "fenomenos de transporte", "escoamento", "calor", "fluido"],
    url: "materias/ft.html"
  },
  {
    title: "Resumo Facil FT",
    description: "Revisao rapida com Bernoulli, perda de carga, Reynolds, calor e resistencia termica.",
    category: "FT",
    type: "Resumo",
    keywords: ["resumo ft", "resumo facil", "revisao rapida", "transferencia de calor", "perda de carga"],
    url: "materias/resumos/ft-resumo.html"
  },
  {
    title: "Formulas resistencia termica",
    description: "Resumo visual com formulas de conducao, conveccao, radiacao e resistencias termicas.",
    category: "FT",
    type: "Formula",
    keywords: ["formulas resistencia termica", "formulas ft", "conducao", "conveccao", "radiacao", "calor"],
    url: "materias/resumos/ft-resumo.html#formulas"
  },
  {
    title: "Equacao de Bernoulli",
    description: "Conservacao de energia mecanica em escoamentos com pressoes, velocidades e cotas.",
    category: "FT",
    type: "Formula",
    keywords: ["bernoulli", "energia", "pressao", "velocidade", "cota", "formulas"],
    url: "materias/ft.html#bernoulli"
  },
  {
    title: "Perda de carga",
    description: "Energia mecanica dissipada por atrito e acessorios em tubulacoes reais.",
    category: "FT",
    type: "Conteudo",
    keywords: ["perda de carga", "tubulacao", "atrito", "darcy", "formulas"],
    url: "materias/ft.html#perda-carga"
  },
  {
    title: "Numero de Reynolds",
    description: "Criterio para classificar escoamentos laminares, transitorios ou turbulentos.",
    category: "FT",
    type: "Formula",
    keywords: ["reynolds", "laminar", "turbulento", "viscosidade", "escoamento", "formulas"],
    url: "materias/ft.html#reynolds"
  },
  {
    title: "Darcy-Weisbach",
    description: "Formula para perda distribuida em tubos usando fator de atrito, comprimento, diametro e velocidade.",
    category: "FT",
    type: "Formula",
    keywords: ["darcy", "weisbach", "perda distribuida", "fator de atrito", "formulas"],
    url: "materias/ft.html#darcy"
  },
  {
    title: "Conducao",
    description: "Transferencia de calor atraves de solidos ou meios parados por diferenca de temperatura.",
    category: "FT",
    type: "Formula",
    keywords: ["conducao", "transferencia de calor", "fourier", "parede plana", "formulas"],
    url: "materias/ft.html#conducao"
  },
  {
    title: "Conveccao e radiacao",
    description: "Troca de calor com fluido em movimento e emissao de energia por ondas eletromagneticas.",
    category: "FT",
    type: "Formula",
    keywords: ["conveccao", "radiacao", "newton", "stefan boltzmann", "calor", "formulas"],
    url: "materias/ft.html#conveccao-radiacao"
  },
  {
    title: "Resistencia termica",
    description: "Modelo de circuito termico para paredes em serie, paralelo, conducao e conveccao.",
    category: "FT",
    type: "Formula",
    keywords: ["resistencia termica", "circuito termico", "serie", "paralelo", "calor", "formulas"],
    url: "materias/ft.html#resistencia-termica"
  },
  {
    title: "Exercicios Sugeridos de FT",
    description: "Pagina com as listas resolvidas de perda de carga e transferencia de calor.",
    category: "FT",
    type: "Questao",
    keywords: ["questoes", "exercicios", "exercicios sugeridos", "resolucao", "ft", "perda de carga", "transferencia de calor", "lista 1", "lista 2"],
    url: "materias/exercicios/ft-exercicios.html"
  },
  {
    title: "Lista 1 de FT - Perda de carga",
    description: "Exercicios resolvidos sobre Darcy-Weisbach, Reynolds, comprimento equivalente, acessorios e pressao disponivel.",
    category: "FT",
    type: "Questao",
    keywords: ["lista 1 ft", "perda de carga", "darcy", "weisbach", "moody", "comprimento equivalente", "oleoduto", "chuveiro"],
    url: "materias/exercicios/ft-exercicios.html#perda-carga"
  },
  {
    title: "Lista 2 de FT - Transferencia de calor",
    description: "Exercicios resolvidos com diagramas de conducao, conveccao, resistencia termica e paredes compostas.",
    category: "FT",
    type: "Questao",
    keywords: ["lista 2 ft", "transferencia de calor", "conducao", "conveccao", "resistencia termica", "parede composta", "geladeira", "forno"],
    url: "materias/exercicios/ft-exercicios.html#transferencia-calor"
  },
  {
    title: "Calculo 3 - Modelagem Matematica de Fenomenos",
    description: "Pagina de estudo sobre matrizes, autovalores, sistemas de EDOs e metodos numericos.",
    category: "Calculo 3",
    type: "Pagina",
    keywords: ["calculo 3", "mmf", "modelagem", "edo", "sistemas lineares"],
    url: "materias/calculo3.html"
  },
  {
    title: "Resumo Facil Calculo 3",
    description: "Revisao rapida com matrizes, autovalores, sistemas de EDO, Euler e RK4.",
    category: "Calculo 3",
    type: "Resumo",
    keywords: ["resumo calculo 3", "resumo facil", "revisao rapida", "edo", "euler", "runge-kutta"],
    url: "materias/resumos/calculo3-resumo.html"
  },
  {
    title: "Formulas EDO e metodos numericos",
    description: "Consulta rapida para sistemas de EDO, Euler, Runge-Kutta e autovalores.",
    category: "Calculo 3",
    type: "Formula",
    keywords: ["formulas edo", "formulas calculo 3", "euler", "runge-kutta", "rk4", "sistemas lineares"],
    url: "materias/resumos/calculo3-resumo.html#formulas"
  },
  {
    title: "Matrizes e sistemas lineares",
    description: "Representacao matricial e resolucao de sistemas algebricos e diferenciais.",
    category: "Calculo 3",
    type: "Conteudo",
    keywords: ["matrizes", "sistemas lineares", "matriz", "vetores", "formulas"],
    url: "materias/calculo3.html#matrizes"
  },
  {
    title: "Autovalores e autovetores",
    description: "Valores e vetores especiais usados para entender matrizes e resolver sistemas.",
    category: "Calculo 3",
    type: "Formula",
    keywords: ["autovalores", "autovetores", "determinante", "matriz", "formulas"],
    url: "materias/calculo3.html#autovalores"
  },
  {
    title: "Sistemas lineares de EDOs",
    description: "Modelos do tipo x' = Ax para variaveis acopladas em fenomenos dinamicos.",
    category: "Calculo 3",
    type: "Conteudo",
    keywords: ["edo", "edos", "sistemas lineares", "sistema diferencial", "modelagem"],
    url: "materias/calculo3.html#sistemas-lineares"
  },
  {
    title: "Metodo de Euler",
    description: "Metodo numerico de passo simples para aproximar solucoes de EDOs.",
    category: "Calculo 3",
    type: "Formula",
    keywords: ["euler", "metodo euler", "edo", "metodo numerico", "formulas"],
    url: "materias/calculo3.html#euler"
  },
  {
    title: "Runge-Kutta RK4",
    description: "Metodo numerico de quarta ordem para aproximar EDOs com maior precisao.",
    category: "Calculo 3",
    type: "Formula",
    keywords: ["runge-kutta", "runge kutta", "rk4", "edo", "metodos numericos"],
    url: "materias/calculo3.html#rk4"
  },
  {
    title: "Checklist de revisao de Calculo 3",
    description: "Lista final para conferir conceitos, formulas, variaveis e pegadinhas antes da prova.",
    category: "Calculo 3",
    type: "Resumo",
    keywords: ["checklist", "revisao", "prova", "formulas", "calculo 3", "mmf"],
    url: "materias/resumos/calculo3-resumo.html#checklist"
  },
  {
    title: "Exercicios Sugeridos de Calculo 3",
    description: "Pagina com duas provas antigas de AV3 resolvidas, com enunciado completo, alternativas e passo a passo.",
    category: "Calculo 3",
    type: "Questao",
    keywords: ["questoes", "exercicios", "exercicios sugeridos", "resolucao", "calculo 3", "mmf", "av3", "prova antiga", "autovalores", "mistura"],
    url: "materias/exercicios/calculo3-exercicios.html"
  },
  {
    title: "AV3 antiga 01 de Calculo 3",
    description: "Questoes resolvidas da prova 2378526.0 sobre mistura, autovalores, transformacoes lineares, operador D e sistemas.",
    category: "Calculo 3",
    type: "Questao",
    keywords: ["av3 old 01", "prova antiga", "calculo 3", "mmf", "salmoura", "tanques", "autovalores", "operador d"],
    url: "materias/exercicios/calculo3-exercicios.html#av3-old-01"
  },
  {
    title: "AV3 antiga 02 de Calculo 3",
    description: "Questoes resolvidas da prova 2378284.0 sobre linearidade, derivadas, autovalores, tanques e sistemas de EDOs.",
    category: "Calculo 3",
    type: "Questao",
    keywords: ["av3 old 02", "prova antiga", "calculo 3", "mmf", "linearidade", "derivada", "tanques", "sistemas"],
    url: "materias/exercicios/calculo3-exercicios.html#av3-old-02"
  }
];

// Controla o botao de voltar ao topo, interacoes visuais, busca e quizzes.
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  const cards = document.querySelectorAll(".subject-card");
  const quizzes = document.querySelectorAll("[data-quiz]");
  const solutionToggles = document.querySelectorAll("[data-solution-toggle]");
  const searchInput = document.querySelector("[data-search-input]");
  const searchResults = document.querySelector("[data-search-results]");
  const searchStatus = document.querySelector("[data-search-status]");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      const shouldShowButton = window.scrollY > 320;
      backToTopButton.classList.toggle("is-visible", shouldShowButton);
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Destaca o card que está em foco pelo teclado ou mouse.
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => card.classList.add("is-active"));
    card.addEventListener("mouseleave", () => card.classList.remove("is-active"));
    card.addEventListener("focus", () => card.classList.add("is-active"));
    card.addEventListener("blur", () => card.classList.remove("is-active"));
  });

  const normalizeText = (text) => String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const escapeHTML = (text) => String(text).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[character]));

  const getSearchText = (item) => normalizeText([
    item.title,
    item.description,
    item.category,
    item.type,
    item.keywords.join(" ")
  ].join(" "));

  const scoreSearchItem = (item, query, terms) => {
    const searchableText = getSearchText(item);

    if (!terms.every((term) => searchableText.includes(term))) {
      return 0;
    }

    let score = 1;
    const title = normalizeText(item.title);
    const keywords = normalizeText(item.keywords.join(" "));

    if (title.includes(query)) {
      score += 5;
    }

    if (keywords.includes(query)) {
      score += 3;
    }

    if (normalizeText(item.type).includes(query)) {
      score += 1;
    }

    return score;
  };

  const renderSearchResults = (results) => {
    if (!searchResults) {
      return;
    }

    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-empty">
          <strong>Nenhum resultado encontrado.</strong>
          <p>Tente buscar por outro termo, como "formulas", "EDO", "Bernoulli" ou "circuito RLC".</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = results.map((item) => `
      <article class="search-result-card">
        <h3>${escapeHTML(item.title)}</h3>
        <div class="search-result-meta">
          <span>${escapeHTML(item.category)}</span>
          <span>${escapeHTML(item.type)}</span>
        </div>
        <p class="search-result-description">${escapeHTML(item.description)}</p>
        <a class="search-result-link" href="${escapeHTML(item.url)}">Abrir</a>
      </article>
    `).join("");
  };

  if (searchInput && searchResults && searchStatus) {
    searchInput.addEventListener("input", () => {
      const query = normalizeText(searchInput.value.trim());

      if (query.length < 2) {
        searchResults.innerHTML = "";
        searchStatus.textContent = "Digite pelo menos 2 caracteres para iniciar a busca.";
        return;
      }

      const terms = query.split(/\s+/).filter(Boolean);
      const results = searchData
        .map((item) => ({
          item,
          score: scoreSearchItem(item, query, terms)
        }))
        .filter((result) => result.score > 0)
        .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
        .map((result) => result.item);

      searchStatus.textContent = results.length === 1
        ? "1 resultado encontrado."
        : `${results.length} resultados encontrados.`;

      renderSearchResults(results);
    });
  }

  quizzes.forEach((quiz) => {
    const questions = quiz.querySelectorAll(".quiz-card");
    const score = quiz.querySelector("[data-quiz-score]");
    const resetButton = quiz.querySelector("[data-quiz-reset]");

    const updateScore = () => {
      const answered = quiz.querySelectorAll(".quiz-card.is-answered").length;
      const correct = quiz.querySelectorAll(".quiz-card.is-correct").length;

      if (score) {
        score.textContent = answered === 0
          ? "Responda às questões para ver seu desempenho."
          : `Pontuação: ${correct}/${answered} respondidas corretamente.`;
      }
    };

    questions.forEach((question) => {
      const correctOption = question.dataset.correct;
      const options = question.querySelectorAll("[data-option]");
      const feedback = question.querySelector(".quiz-feedback");
      const feedbackTitle = question.querySelector("[data-feedback-title]");

      options.forEach((option) => {
        option.addEventListener("click", () => {
          if (question.classList.contains("is-answered")) {
            return;
          }

          const selectedOption = option.dataset.option;
          const isCorrect = selectedOption === correctOption;

          question.classList.add("is-answered");
          question.classList.toggle("is-correct", isCorrect);
          question.classList.toggle("is-wrong", !isCorrect);

          options.forEach((currentOption) => {
            currentOption.disabled = true;

            if (currentOption.dataset.option === correctOption) {
              currentOption.classList.add("is-correct-option");
            }
          });

          option.classList.add(isCorrect ? "is-selected-correct" : "is-selected-wrong");

          if (feedback) {
            feedback.hidden = false;
          }

          if (feedbackTitle) {
            feedbackTitle.textContent = isCorrect
              ? "Resposta correta."
              : "Resposta incorreta.";
          }

          updateScore();
        });
      });
    });

    if (resetButton) {
      resetButton.addEventListener("click", () => {
        questions.forEach((question) => {
          question.classList.remove("is-answered", "is-correct", "is-wrong");

          question.querySelectorAll("[data-option]").forEach((option) => {
            option.disabled = false;
            option.classList.remove(
              "is-correct-option",
              "is-selected-correct",
              "is-selected-wrong"
            );
          });

          const feedback = question.querySelector(".quiz-feedback");
          const feedbackTitle = question.querySelector("[data-feedback-title]");

          if (feedback) {
            feedback.hidden = true;
          }

          if (feedbackTitle) {
            feedbackTitle.textContent = "";
          }
        });

        updateScore();
      });
    }

    updateScore();
  });

  solutionToggles.forEach((button) => {
    const card = button.closest(".open-question-card");
    const solution = card ? card.querySelector(".solution-panel") : null;

    button.addEventListener("click", () => {
      if (!solution) {
        return;
      }

      const isHidden = solution.hidden;
      solution.hidden = !isHidden;
      button.setAttribute("aria-expanded", String(isHidden));
      button.textContent = isHidden ? "Ocultar resolução" : "Mostrar resolução";
      card.classList.toggle("is-open", isHidden);
    });
  });
});
