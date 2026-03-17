document.addEventListener("DOMContentLoaded", () => {
  // Likes
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("liked");
    });
  });

  // Bottom nav active
  const page = window.location.pathname.split("/").pop().replace(".html", "") || "home";
  const navLinks = document.querySelectorAll(".bottom-nav-link");

  navLinks.forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });

  // Mostrar publicación creada desde create.html
  const container = document.getElementById("newPostContainer");
  const savedPost = localStorage.getItem("newPost");

  if (container && savedPost) {
    const post = JSON.parse(savedPost);

    let imgHTML = "";
    if (post.image) {
      imgHTML = `<img src="img/post-demo.jpg" alt="Imagen simulada" class="post-image">`;
    }

    const postHTML = `
      <article class="post-card">
        <div class="post-header">
          <div class="post-user">
            <img src="img/avatar.png" alt="Maria Fernanda" class="post-avatar">
            <div>
              <h2 class="post-name">Luis Serra<span class="post-time">• ahora</span></h2>
            </div>
          </div>

          <button class="post-menu-btn" type="button" aria-label="Más opciones">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
        </div>

        <p class="post-text">${post.text || "Publicación sin texto"}</p>
        ${imgHTML}

        <div class="post-actions">
          <button class="post-action" type="button">
            <i class="fa-regular fa-comment"></i>
            <span>0</span>
          </button>

          <button class="post-action like-btn" type="button">
            <i class="fa-solid fa-heart"></i>
            <span>0</span>
          </button>

          <button class="post-action" type="button">
            <i class="fa-regular fa-eye"></i>
            <span>0</span>
          </button>

          <button class="post-action" type="button">
            <i class="fa-solid fa-share-nodes"></i>
            <span>0</span>
          </button>
        </div>
      </article>
    `;

    container.innerHTML = postHTML;

    // volver a activar likes del nuevo post
    const newLikeButtons = container.querySelectorAll(".like-btn");
    newLikeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("liked");
      });
    });

    localStorage.removeItem("newPost");
  }
});