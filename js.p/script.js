// === EFEKT PARALAKSY ===
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');
let plant = document.getElementById('plant');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 1.1 + 'px';
  leaf.style.top = value * -1.5 + 'px';
  leaf.style.left = value * 1.2 + 'px';
  hill5.style.left = value * 1.5 + 'px';
  hill4.style.left = value * -1.5 + 'px';
  hill1.style.top = value * 0.5 + 'px';
  tree.style.top = value * 0.2 + 'px';
  plant.style.left = value * 1.1 + 'px';
});

// === PYTANIA DO TESTU ===
const quizData = [
  {
    question: "Co to jest efekt paralaksy?",
    options: ["Efekt wizualny", "Styl CSS", "Nowy język programowania", "Narzędzie do projektowania"],
    correct: 0
  },
  {
    question: "Który z tych języków może być używany do efektu paralaksy?",
    options: ["Python", "CSS", "SQL", "C++"],
    correct: 1
  },
  {
    question: "Jaki parametr w CSS pomaga stworzyć efekt paralaksy?",
    options: ["background-repeat", "background-position", "background-attachment", "z-index"],
    correct: 2
  },
  {
    question: "Co oznacza 'background-attachment: fixed'?",
    options: ["Obraz przewija się ze stroną", "Obraz jest nieruchomy", "Obraz zmienia kolor", "Obraz znika"],
    correct: 1
  },
  {
    question: "Która metoda JavaScript może manipulować pozycją tła?",
    options: ["document.setBackground()", "document.style.color", "document.querySelector().style.backgroundPositionY", "document.getBackground()"],
    correct: 2
  },
  {
    question: "Jaki efekt wizualny daje paralaksa?",
    options: ["Wszystkie warstwy poruszają się w tym samym tempie", "Tło porusza się wolniej niż treść", "Tło przesuwa się szybciej niż treść", "Treść staje się przezroczysta"],
    correct: 1
  },
  {
    question: "Czy paralaksa działa na wszystkich przeglądarkach?",
    options: ["Tak, zawsze", "Nie, tylko w Chrome", "Tak, ale może działać inaczej", "Nie, tylko w Firefox"],
    correct: 2
  },
  {
    question: "Co może być wadą efektu paralaksy?",
    options: ["Spowalnia stronę", "Poprawia czytelność", "Zwiększa wydajność", "Jest zawsze responsywny"],
    correct: 0
  },
  {
    question: "Jak można poprawić wydajność paralaksy?",
    options: ["Zmniejszyć rozmiar obrazków", "Dodać więcej efektów", "Użyć większych plików", "Nie można jej poprawić"],
    correct: 0
  },
  {
    question: "Czy efekt paralaksy można zrobić w JavaScript?",
    options: ["Tak", "Nie", "Tylko w PHP", "Tylko w Pythonie"],
    correct: 0
  },
  {
    question: "Jaki jest główny cel efektu paralaksy na stronach internetowych?",
    options: ["Poprawa szybkości ładowania strony", "Stworzenie iluzji głębi i ruchu", "Zmniejszenie zużycia pamięci RAM", "Optymalizacja kodu HTML"],
    correct: 1
  },
  {
    question: "Które z poniższych zastosowań paralaksy jest najbardziej popularne?",
    options: ["Formularze kontaktowe", "Efekty tekstowe", "Tła w stronach produktowych", "Zmiana kolorów przy przewijaniu"],
    correct: 2
  },
  {
    question: "Jak można sprawić, by efekt paralaksy był bardziej płynny?",
    options: ["Użyć mniejszych obrazów", "Użyć transformacji CSS i optymalizować animacje", "Unikać użycia JavaScript", "Dodawać więcej efektów do strony"],
    correct: 1
  },
  {
    question: "Jaka jednostka w CSS jest najczęściej używana do określania wysokości efektu paralaksy?",
    options: ["px", "em", "vh", "%"],
    correct: 2
  },
  {
    question: "Czy efekt paralaksy może wpływać na dostępność strony?",
    options: ["Nie, nie ma to wpływu", "Tak, może powodować problemy dla osób z problemami wzroku", "Nie, jeśli strona jest dobrze zoptymalizowana", "Tak, ale tylko w przeglądarkach mobilnych"],
    correct: 1
  }
];

// === GENEROWANIE PYTAŃ ===
function loadQuiz() {
  let quizContainer = document.getElementById("quiz-container");
  quizData.forEach((q, index) => {
    let questionDiv = document.createElement("div");
    questionDiv.classList.add("quiz-question");
    questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    let optionsDiv = document.createElement("div");
    optionsDiv.classList.add("quiz-options");

    q.options.forEach((option, i) => {
      let label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="q${index}" value="${i}"> ${option}`;
      optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
  });
}

// === SPRAWDZANIE WYNIKU ===
function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    let selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.correct) {
      score++;
    }
  });

  document.getElementById("result").innerText = `Twój wynik: ${score} / ${quizData.length}`;
}

window.onload = loadQuiz;
