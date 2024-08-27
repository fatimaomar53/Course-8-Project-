export const handleSubmit = async (event) => {
  event.preventDefault();

  const urlInput = document.getElementById("url").value.trim();
  if (!urlInput) {
    alert("URL cannot be empty. Please provide a valid URL.");
    return;
  }

  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: urlInput }),
    };

    const response = await fetch("http://localhost:8081/api", requestOptions);
    const resultData = await response.json();

    const output = `
            <p>Polarity: ${resultData.score_tag}</p>
            <p>Subjectivity: ${resultData.subjectivity}</p>
            <p>Text: ${resultData.sentence_list[0].text}</p>
        `;

    document.getElementById("results").innerHTML = output;
  } catch (err) {
    console.error("There was an issue with the request:", err);
  }
};
