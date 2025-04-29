// Bidirectional dictionary (Assamese ↔ English)
const dictionary = {
  // Assamese to English
  "জোন": { meaning: "Moon", example: "জোনটোৱে আকাশত জিলিকে। (The moon shines in the sky.)", synonyms: ["চন্দ্ৰ", "শশী"] },
  "পানী": { meaning: "Water", example: "পানী নোহোৱা জীৱন অসম্ভৱ। (Life is impossible without water.)", synonyms: ["নীৰ", "তোয়"] },
  "মৰম": { meaning: "Love", example: "মৰমেই পৃথিৱীৰ সবাতোকৈ শক্তিশালী чувство। (Love is the strongest emotion.)", synonyms: ["প্রেম", "স্নেহ"] },

  // English to Assamese (reverse entries)
  "Moon": { meaning: "জোন", example: "The moon shines in the sky. (জোনটোৱে আকাশত জিলিকে।)", synonyms: ["চন্দ্ৰ", "শশী"] },
  "Water": { meaning: "পানী", example: "Life is impossible without water. (পানী নোহোৱা জীৱন অসম্ভৱ।)", synonyms: ["নীৰ", "তোয়"] },
  "Love": { meaning: "মৰম", example: "Love is the strongest emotion. (মৰমেই সবাতোকৈ শক্তিশালী чувство।)", synonyms: ["প্রেম", "স্নেহ"] }
};

let isAssameseToEnglish = true; // Default direction

// Toggle search direction
document.getElementById("toggleDirection").addEventListener("change", function() {
  isAssameseToEnglish = !isAssameseToEnglish;
  document.getElementById("direction-label").textContent = isAssameseToEnglish ? "অসমীয়া → ইংৰাজী" : "ইংৰাজী → অসমীয়া";
  document.getElementById("searchInput").placeholder = isAssameseToEnglish ? "অসমীয়া শব্দ লিখক..." : "Type English word...";
});

function searchWord() {
  const input = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("wordResult");

  if (!input) {
    resultDiv.innerHTML = `<p>অনুগ্ৰহ কৰি এটা শব্দ লিখক। (Please enter a word.)</p>`;
    return;
  }

  const wordData = dictionary[input];
  if (wordData) {
    if (isAssameseToEnglish) {
      resultDiv.innerHTML = `
        <h2>${input}</h2>
        <p><strong>Meaning:</strong> ${wordData.meaning}</p>
        <p><strong>Example:</strong> ${wordData.example}</p>
        <p><strong>Synonyms:</strong> ${wordData.synonyms.join(", ")}</p>
      `;
    } else {
      resultDiv.innerHTML = `
        <h2>${input}</h2>
        <p><strong>অৰ্থ:</strong> ${wordData.meaning}</p>
        <p><strong>উদাহৰণ:</strong> ${wordData.example}</p>
        <p><strong>সমাৰ্থক শব্দ:</strong> ${wordData.synonyms.join(", ")}</p>
      `;
    }
  } else {
    resultDiv.innerHTML = `<p>শব্দটো পোৱা নগ'ল। অন্য এটা চেষ্টা কৰক। (Word not found. Try another.)</p>`;
  }
}
