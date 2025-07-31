document.getElementById("hoaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const alias = document.getElementById("alias").value.trim();
  const bio = document.getElementById("bio").value.trim();
  const tag = document.getElementById("tag").value;

  const preview = document.getElementById("submissionPreview");
  preview.innerHTML = `
    <h3>✨ Submission Preview</h3>
    <p><strong>Alias:</strong> ${alias}</p>
    <p><strong>Bio:</strong> ${bio}</p>
    <p><strong>Tag:</strong> ${tag}</p>
    <p>Note: Image uploads and backend moderation can be added later.</p>
  `;

  // Hook this into a backend later for storage/moderation
});
