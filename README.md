# parallax-course by Andrii Nazaruk 

# 🌍 Efekt Paralaksy – Interaktywny kurs online

## 📌 Opis projektu
Efekt paralaksy to popularna technika web designu, która dodaje iluzję głębi i dynamiki do stron internetowych. W tym projekcie znajdziesz:
- 📖 **Teoretyczne wprowadzenie** do efektu paralaksy
- 🎨 **Przykłady implementacji** z użyciem **CSS** i **JavaScript**
- ✅ **Interaktywny quiz** sprawdzający Twoją wiedzę

## 🛠️ Jak uruchomić projekt?

Aby uruchomić stronę lokalnie na swoim komputerze:

### 1️⃣ **Sklonuj repozytorium**
Otwórz terminal i wpisz:

git clone https://github.com/andnazvis/parallax-course.git

# 2️⃣ Przejdź do folderu projektu

cd parallax-course

# 3️⃣ Uruchom lokalny serwer
Jeśli masz zainstalowany Live Server w VS Code:

Otwórz index.html i kliknij "Go Live"

# 🎨 Jak działa efekt paralaksy?
Efekt paralaksy można osiągnąć na dwa sposoby:

# ✅ Metoda CSS

.parallax {
    background-image: url('tlo.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    height: 100vh;
}

🔹 Plusy: Proste i lekkie rozwiązanie
🔹 Minusy: Nie działa na wszystkich urządzeniach mobilnych

# ✅ Metoda JavaScript

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    document.querySelector('.parallax').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

🔹 Plusy: Płynniejszy efekt, działa na mobilnych
🔹 Minusy: Większe obciążenie strony

## 📝 Test: Sprawdź swoją wiedzę!
W projekcie znajdziesz konspekt i quiz, który pomoże Ci sprawdzić, jak dobrze rozumiesz efekt paralaksy.
Aby go rozwiązać, przewiń stronę w dół i kliknij "Sprawdź odpowiedzi".


