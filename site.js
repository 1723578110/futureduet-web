const copyButton = document.getElementById("copy-bibtex");
const bibtex = document.getElementById("bibtex");

copyButton?.addEventListener("click", async () => {
  const originalLabel = copyButton.textContent;

  try {
    await navigator.clipboard.writeText(bibtex.textContent.trim());
    copyButton.textContent = "Copied";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(bibtex);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Selected";
  }

  window.setTimeout(() => {
    copyButton.textContent = originalLabel;
  }, 1600);
});
