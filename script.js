// ===============================
// DATA SOAL MATEMATIKA (7 soal per materi)
// ===============================

const mathQuestions = [
  // MATRiks (7 soal)
  { type: "matrix", question: "Hitung hasil penjumlahan matriks:\n[2 3] + [1 4]", answer: "3 7" },
  { type: "matrix", question: "Hitung hasil dari matriks:\n[5 2] - [3 1]", answer: "2 1" },
  { type: "matrix", question: "Hitung:\n[4 6] + [3 2]", answer: "7 8" },
  { type: "matrix", question: "Hitung:\n[10 2] - [4 1]", answer: "6 1" },
  { type: "matrix", question: "Hitung:\n[1 1] + [1 1]", answer: "2 2" },
  { type: "matrix", question: "Hitung:\n[7 8] - [2 3]", answer: "5 5" },
  { type: "matrix", question: "Hitung:\n[9 1] + [0 4]", answer: "9 5" },

  // BUNGA TUNGGAL (7 soal)
  { type: "bunga_tunggal", question: "Modal 1.000.000 bunga 10% selama 2 tahun. Berapa bunga tunggal?", answer: "200000" },
  { type: "bunga_tunggal", question: "Modal 2.000.000 bunga 5% selama 3 tahun. Bunga tunggal?", answer: "300000" },
  { type: "bunga_tunggal", question: "Modal 500.000 bunga 12% selama 1 tahun. Bunga tunggal?", answer: "60000" },
  { type: "bunga_tunggal", question: "Modal 3.000.000 bunga 8% selama 2 tahun. Bunga tunggal?", answer: "480000" },
  { type: "bunga_tunggal", question: "Modal 1.200.000 bunga 6% selama 4 tahun. Bunga tunggal?", answer: "288000" },
  { type: "bunga_tunggal", question: "Modal 800.000 bunga 10% selama 1 tahun. Bunga tunggal?", answer: "80000" },
  { type: "bunga_tunggal", question: "Modal 2.500.000 bunga 7% selama 3 tahun. Bunga tunggal?", answer: "525000" },

  // BUNGA MAJEMUK (7 soal)
  { type: "bunga_majemuk", question: "1.000.000 bunga majemuk 10% 2 tahun. Jumlah akhir?", answer: "1210000" },
  { type: "bunga_majemuk", question: "2.000.000 bunga 5% 2 tahun. Jumlah akhir?", answer: "2205000" },
  { type: "bunga_majemuk", question: "1.500.000 bunga 8% 3 tahun. Jumlah akhir?", answer: "1889568" },
  { type: "bunga_majemuk", question: "800.000 bunga 12% 2 tahun. Jumlah akhir?", answer: "1003520" },
  { type: "bunga_majemuk", question: "3.000.000 bunga 7% 1 tahun. Jumlah akhir?", answer: "3210000" },
  { type: "bunga_majemuk", question: "1.200.000 bunga 6% 3 tahun. Jumlah akhir?", answer: "1429152" },
  { type: "bunga_majemuk", question: "900.000 bunga 10% 2 tahun. Jumlah akhir?", answer: "1089000" },

  // ANUITAS (7 soal)
  { type: "anuitas", question: "Cicilan 500.000 selama 12 bulan. Total pembayaran?", answer: "6000000" },
  { type: "anuitas", question: "Cicilan 300.000 selama 10 bulan. Total pembayaran?", answer: "3000000" },
  { type: "anuitas", question: "Cicilan 250.000 selama 8 bulan. Total pembayaran?", answer: "2000000" },
  { type: "anuitas", question: "Cicilan 400.000 selama 6 bulan. Total pembayaran?", answer: "2400000" },
  { type: "anuitas", question: "Cicilan 350.000 selama 5 bulan. Total pembayaran?", answer: "1750000" },
  { type: "anuitas", question: "Cicilan 700.000 selama 12 bulan. Total pembayaran?", answer: "8400000" },
  { type: "anuitas", question: "Cicilan 150.000 selama 10 bulan. Total pembayaran?", answer: "1500000" },

  // BARISAN (7 soal)
  { type: "barisan", question: "Aritmatika: 2, 5, 8, 11. Suku ke-5?", answer: "14" },
  { type: "barisan", question: "Aritmatika: 3, 7, 11, 15. Suku ke-6?", answer: "23" },
  { type: "barisan", question: "Aritmatika: 1, 4, 7, 10. Suku ke-7?", answer: "19" },
  { type: "barisan", question: "Aritmatika: 5, 8, 11, 14. Suku ke-10?", answer: "32" },
  { type: "barisan", question: "Aritmatika: 6, 9, 12, 15. Suku ke-8?", answer: "27" },
  { type: "barisan", question: "Aritmatika: 10, 13, 16. Suku ke-6?", answer: "25" },
  { type: "barisan", question: "Aritmatika: 4, 6, 8, 10. Suku ke-9?", answer: "20" },

  // DERET (7 soal)
  { type: "deret", question: "2 + 5 + 8 + 11. Jumlah 4 suku?", answer: "26" },
  { type: "deret", question: "3 + 7 + 11 + 15. Jumlah 4 suku?", answer: "36" },
  { type: "deret", question: "1 + 4 + 7 + 10. Jumlah 4 suku?", answer: "22" },
  { type: "deret", question: "5 + 8 + 11 + 14. Jumlah 4 suku?", answer: "38" },
  { type: "deret", question: "6 + 9 + 12 + 15. Jumlah 4 suku?", answer: "42" },
  { type: "deret", question: "10 + 13 + 16 + 19. Jumlah 4 suku?", answer: "58" },
  { type: "deret", question: "4 + 6 + 8 + 10. Jumlah 4 suku?", answer: "28" },
];

// ===============================
// GAME MATEMATIKA
// ===============================

let mathScore = 0;

function loadMathQuestion() {
  const q = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];

  document.getElementById("math-question").innerText = q.question;
  document.getElementById("math-question").setAttribute("data-answer", q.answer);
  document.getElementById("math-answer").value = "";
  document.getElementById("math-result").innerHTML = "";
}

function checkMath() {
  const user = document.getElementById("math-answer").value.trim().toLowerCase();
  const benar = document.getElementById("math-question").getAttribute("data-answer").toLowerCase();

  if (user === benar) {
    mathScore++;
    document.getElementById("math-result").innerHTML = "<span style='color:green;font-weight:bold;'>Benar!</span>";
  } else {
    document.getElementById("math-result").innerHTML = "<span style='color:red;font-weight:bold;'>Salah! Jawaban: " + benar + "</span>";
  }

  document.getElementById("math-score").innerText = mathScore;

  setTimeout(loadMathQuestion, 1500);
}

loadMathQuestion();

// ===============================
// DATA SOAL BAHASA INGGRIS (25 SOAL)
// ===============================

const englishQuestions = [
  // 5 soal lama
  { question: "Apa arti 'dog' ?", answer: "anjing" },
  { question: "Apa arti 'cat' ?", answer: "kucing" },
  { question: "Apa arti 'apple' ?", answer: "apel" },
  { question: "Apa arti 'book' ?", answer: "buku" },
  { question: "Apa arti 'table' ?", answer: "meja" },

  // 20 soal baru
  { question: "Apa arti 'house' ?", answer: "rumah" },
  { question: "Apa arti 'water' ?", answer: "air" },
  { question: "Apa arti 'car' ?", answer: "mobil" },
  { question: "Apa arti 'flower' ?", answer: "bunga" },
  { question: "Apa arti 'sun' ?", answer: "matahari" },
  { question: "Apa arti 'moon' ?", answer: "bulan" },
  { question: "Apa arti 'school' ?", answer: "sekolah" },
  { question: "Apa arti 'teacher' ?", answer: "guru" },
  { question: "Apa arti 'student' ?", answer: "siswa" },
  { question: "Apa arti 'milk' ?", answer: "susu" },
  { question: "Apa arti 'bread' ?", answer: "roti" },
  { question: "Apa arti 'phone' ?", answer: "telepon" },
  { question: "Apa arti 'computer' ?", answer: "komputer" },
  { question: "Apa arti 'window' ?", answer: "jendela" },
  { question: "Apa arti 'chair' ?", answer: "kursi" },
  { question: "Apa arti 'pen' ?", answer: "pena" },
  { question: "Apa arti 'shoe' ?", answer: "sepatu" },
  { question: "Apa arti 'bird' ?", answer: "burung" },
  { question: "Apa arti 'food' ?", answer: "makanan" },
  { question: "Apa arti 'drink' ?", answer: "minuman" },
];

// ===============================
// GAME BAHASA INGGRIS
// ===============================

let engScore = 0;

function loadEnglish() {
  const q = englishQuestions[Math.floor(Math.random() * englishQuestions.length)];
  document.getElementById("eng-question").innerText = q.question;
  document.getElementById("eng-question").setAttribute("data-answer", q.answer);
  document.getElementById("eng-answer").value = "";
  document.getElementById("eng-result").innerHTML = "";
}

function checkEnglish() {
  const user = document.getElementById("eng-answer").value.trim().toLowerCase();
  const benar = document.getElementById("eng-question").getAttribute("data-answer");

  if (user === benar) {
    engScore++;
    document.getElementById("eng-result").innerHTML = "<span style='color:green;font-weight:bold;'>Benar!</span>";
  } else {
    document.getElementById("eng-result").innerHTML = "<span style='color:red;font-weight:bold;'>Salah! Jawaban: " + benar + "</span>";
  }

  document.getElementById("eng-score").innerText = engScore;

  setTimeout(loadEnglish, 1500);
}

loadEnglish();

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach((el) => observer.observe(el));
});
