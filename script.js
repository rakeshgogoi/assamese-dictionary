// Sample Assamese dictionary data (replace with a real API/database later)
const dictionary = {
  "জোন": {
    meaning: "Moon",
    example: "জোনটোৱে আকাশত জিলিকে। (The moon shines in the sky.)",
    synonyms: ["চন্দ্ৰ", "শশী"]
  },
  "পানী": {
    meaning: "Water",
    example: "পানী নোহোৱা জীৱন অসম্ভৱ। (Life is impossible without water.)",
    synonyms: ["নীৰ", "তোয়"]
  },
  "মৰম": {
    meaning: "Love",
    example: "মৰমেই পৃথিৱীৰ সবাতোকৈ শক্তিশালী чувство। (Love is the strongest emotion on Earth.)",
    synonyms: ["প্রেম", "স্নেহ"]
  }
};

function searchWord() {
  const input = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("wordResult");

  if (dictionary[input]) {
    const word = dictionary[input];
    resultDiv.innerHTML = `
      <h2>${input}</h2>
      <p><strong>Meaning:</strong> ${word.meaning}</p>
      <p><strong>Example:</strong> ${word.example}</p>
      <p><strong>Synonyms:</strong> ${word.synonyms.join(", ")}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>শব্দটো পোৱা নগ'ল। অন্য এটা চেষ্টা কৰক। (Word not found. Try another.)</p>`;
  }
}