document.addEventListener("DOMContentLoaded", () => {
  const publishBtn = document.getElementById("publishBtn");
  const textInput = document.getElementById("postText");
  const imageBtn = document.getElementById("addImageBtn");

  let hasImage = false;

  if (imageBtn) {
    imageBtn.addEventListener("click", () => {
      hasImage = true;
      alert("Imagen agregada (simulación)");
    });
  }

  if (publishBtn) {
    publishBtn.addEventListener("click", () => {
      const text = textInput.value.trim();

      if (!text && !hasImage) {
        alert("Escribe algo o agrega una imagen");
        return;
      }

      const post = {
        text: text,
        image: hasImage
      };

      localStorage.setItem("newPost", JSON.stringify(post));
      window.location.href = "home.html";
    });
  }
});