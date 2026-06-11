// Controla o botão de voltar ao topo, interações visuais e quizzes.
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  const cards = document.querySelectorAll(".subject-card");
  const quizzes = document.querySelectorAll("[data-quiz]");
  const solutionToggles = document.querySelectorAll("[data-solution-toggle]");

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
