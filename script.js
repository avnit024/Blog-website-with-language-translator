const categoryImages = {
  tech: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  travel: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  lifestyle: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
};

const categoryColors = {
  tech: "#3498db",
  lifestyle: "#e67e22",
  travel: "#27ae60"
};

const posts = [
  {
    title: "The Future of AI in 2025",
    category: "tech",
    meta: "By Jane Doe • 6 min read",
    authorPic: "https://randomuser.me/api/portraits/women/44.jpg",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    content:
      "Artificial Intelligence is evolving at an unprecedented pace. In 2025, expect AI to be more integrated into everyday tools, personalized assistants, and decision-making systems...",
  },
  {
    title: "Top 10 Travel Destinations You Must Visit",
    category: "travel",
    meta: "By John Smith • 5 min read",
    authorPic: "https://randomuser.me/api/portraits/men/54.jpg",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    content:
      "Looking for your next adventure? These 10 breathtaking destinations will inspire your wanderlust in 2025, from serene beaches to bustling metropolises...",
  },
  {
    title: "Healthy Morning Habits for a Better Life",
    category: "lifestyle",
    meta: "By Sarah Johnson • 4 min read",
    authorPic: "https://randomuser.me/api/portraits/women/36.jpg",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    content:
      "Your mornings set the tone for the entire day. Here’s how you can cultivate habits like meditation, journaling, and proper nutrition for a productive lifestyle...",
  },
  {
    title: "5G Networks: What They Mean for You",
    category: "tech",
    meta: "By Mike Adams • 7 min read",
    authorPic: "https://randomuser.me/api/portraits/men/61.jpg",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80",
    content:
      "The rollout of 5G is revolutionizing how we connect. Learn how faster speeds, lower latency, and IoT enhancements will shape the digital landscape...",
  },
  {
    title: "Exploring Hidden Gems of Europe",
    category: "travel",
    meta: "By Emma Carter • 6 min read",
    authorPic: "https://randomuser.me/api/portraits/women/50.jpg",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
    content:
      "From quaint villages in Italy to unexplored corners of Eastern Europe, these destinations offer authentic experiences away from tourist crowds...",
  },
  {
    title: "How to Maintain Work-Life Balance in 2025",
    category: "lifestyle",
    meta: "By Alex Brown • 5 min read",
    authorPic: "https://randomuser.me/api/portraits/men/22.jpg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80",
    content:
      "With remote work becoming a norm, balancing personal and professional life has never been more critical. Here’s how to do it effectively...",
  },
  {
    title: "Top Gadgets You Need This Year",
    category: "tech",
    meta: "By Sophia Lee • 4 min read",
    authorPic: "https://randomuser.me/api/portraits/women/33.jpg",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
    content:
      "From smart home devices to wearables, here are the top tech gadgets of 2025 that can make your life easier and more exciting...",
  },
  {
    title: "Solo Travel Tips for First-Timers",
    category: "travel",
    meta: "By Daniel Scott • 6 min read",
    authorPic: "https://randomuser.me/api/portraits/men/29.jpg",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764b84?auto=format&fit=crop&w=800&q=80",
    content:
      "Traveling alone can be daunting but rewarding. Learn safety tips, how to plan an itinerary, and ways to make the most out of your solo adventures...",
  },
  {
    title: "Meditation Practices for Busy People",
    category: "lifestyle",
    meta: "By Olivia White • 5 min read",
    authorPic: "https://randomuser.me/api/portraits/women/62.jpg",
    image: "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=800&q=80",
    content:
      "Even the busiest people can integrate mindfulness. Here are 5-minute meditation techniques that can help reduce stress and improve mental clarity...",
  },
  {
    title: "The Rise of Quantum Computing",
    category: "tech",
    meta: "By Ethan Green • 8 min read",
    authorPic: "https://randomuser.me/api/portraits/men/18.jpg",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=800&q=80",
    content:
      "Quantum computing is no longer just theoretical. Discover how it’s transforming industries like cryptography, finance, and AI research...",
  }
];



let visiblePosts = 3;

function renderPosts() {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";
  posts.slice(0, visiblePosts).forEach((post, index) => {
    const img = categoryImages[post.category];
    const color = categoryColors[post.category];
// Inside renderPosts():
blogList.innerHTML += `
  <article data-category="${post.category}">
    <div style="position:relative;">
      <img src="${post.image}" alt="${post.title}" />
      <div class="category-label">${post.category.toUpperCase()}</div>
    </div>
    <h2>${post.title}</h2>
    <div class="meta">
      <img src="${post.authorPic}" alt="Author" class="author-pic" />
      ${post.meta}
    </div>
    <p>${post.content.substring(0, 130)}...</p>
    <button class="read-more" data-index="${posts.indexOf(post)}">Read More</button>
    <div class="clap-btn" data-index="${posts.indexOf(post)}">👏 <span class="clap-count">0</span></div>
  </article>`;

  });
  attachPostEvents();
}

renderPosts();

document.getElementById("loadMore").addEventListener("click", () => {
  visiblePosts += 2;
  if (visiblePosts >= posts.length) document.getElementById("loadMore").style.display = "none";
  renderPosts();
});

// Trending sidebar posts
const popularList = document.getElementById("popularPosts");
posts.slice(0, 3).forEach((post) => {
  const img = categoryImages[post.category];
  let li = document.createElement("li");
  li.innerHTML = `<img src="${img}" alt="${post.title}" /> ${post.title}`;
  popularList.appendChild(li);
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Search functionality
document.getElementById("searchBar").addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  document.querySelectorAll(".blog-grid article").forEach((article) => {
    const text = article.innerText.toLowerCase();
    article.style.display = text.includes(searchText) ? "" : "none";
  });
});

// Modal elements
const modal = document.getElementById("postModal");
const closeModal = document.querySelector(".close");

function attachPostEvents() {
  document.querySelectorAll(".read-more").forEach((btn) => {
    btn.addEventListener("click", function () {
      const post = posts[this.dataset.index];
      document.getElementById("modalTitle").innerText = post.title;
      document.getElementById("modalMeta").innerText = post.meta;
      document.getElementById("modalImage").src = categoryImages[post.category];
      document.getElementById("modalContent").innerText = post.content;
      loadComments(this.dataset.index);
      modal.style.display = "block";
      modal.dataset.postIndex = this.dataset.index;
    });
  });

  // Clap button event
  document.querySelectorAll(".clap-btn").forEach((btn) => {
    const index = btn.dataset.index;
    btn.addEventListener("click", function () {
      let count = parseInt(btn.querySelector(".clap-count").innerText);
      count++;
      btn.querySelector(".clap-count").innerText = count;
      localStorage.setItem("claps_" + index, count);
      btn.classList.add("clap-animate");
      setTimeout(() => btn.classList.remove("clap-animate"), 300);
    });
    const savedClaps = localStorage.getItem("claps_" + index);
    if (savedClaps) btn.querySelector(".clap-count").innerText = savedClaps;
  });
}

closeModal.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Comments
function loadComments(postIndex) {
  const commentsList = document.getElementById("commentsList");
  commentsList.innerHTML = "";
  const comments = JSON.parse(localStorage.getItem("comments_" + postIndex)) || [];
  comments.forEach((comment) => {
    let p = document.createElement("p");
    p.innerText = comment;
    commentsList.appendChild(p);
  });
}

document.getElementById("addComment").addEventListener("click", () => {
  const commentInput = document.getElementById("commentInput");
  const postIndex = modal.dataset.postIndex;
  if (commentInput.value.trim() !== "") {
    const comments = JSON.parse(localStorage.getItem("comments_" + postIndex)) || [];
    comments.push(commentInput.value.trim());
    localStorage.setItem("comments_" + postIndex, JSON.stringify(comments));
    commentInput.value = "";
    loadComments(postIndex);
  }
});
const translatorToggle = document.getElementById('translatorToggle');
const translatorDropdown = document.getElementById('translatorDropdown');


translatorToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  translatorDropdown.classList.toggle('active');
});

document.addEventListener('click', () => {
  translatorDropdown.classList.remove('active');
});
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,es,fr,de,zh-CN,hi,ar,ru,ja',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,es,fr,de,zh-CN,hi,ar,ru,ja,it,pt,ko,tr,th,pl,sv,nl,uk,vi,bn',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
}
