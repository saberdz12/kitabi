
const $ = (selector) => document.querySelector(selector);

const translations = {
  ar: {
    all: "كل الكتب", search: "ابحث عن كتاب أو مؤلف...",
    favorites: "المفضلة", read: "افتح الكتاب في المصدر",
    details: "تفاصيل الكتاب", author: "المؤلف",
    category: "التصنيف", language: "اللغة",
    noBooks: "لم نعثر على كتب مطابقة لبحثك.",
    source: "المصدر الأصلي",
    arabic: "العربية", french: "الفرنسية", english: "الإنجليزية",
    count: "كتاب", favorite: "أضف إلى المفضلة",
    removeFavorite: "إزالة من المفضلة",
    description: "كتاب من مجموعة KITABI الرقمية. افتح المصدر الأصلي للاطلاع على النص وشروط استخدامه.",
    sourceNotice: "ستنتقل إلى موقع المكتبة الأصلية لقراءة الكتاب."
  },
  en: {
    all: "All books", search: "Search by title or author...",
    favorites: "Favorites", read: "Open book at source",
    details: "Book details", author: "Author",
    category: "Category", language: "Language",
    noBooks: "No matching books found.",
    source: "Original source",
    arabic: "Arabic", french: "French", english: "English",
    count: "books", favorite: "Add to favorites",
    removeFavorite: "Remove from favorites",
    description: "A book listed in the KITABI digital library. Visit the original source to read it and review its usage terms.",
    sourceNotice: "You will be redirected to the original library."
  },
  fr: {
    all: "Tous les livres", search: "Rechercher un titre ou un auteur...",
    favorites: "Favoris", read: "Ouvrir chez la source",
    details: "Détails du livre", author: "Auteur",
    category: "Catégorie", language: "Langue",
    noBooks: "Aucun livre correspondant.",
    source: "Source originale",
    arabic: "Arabe", french: "Français", english: "Anglais",
    count: "livres", favorite: "Ajouter aux favoris",
    removeFavorite: "Retirer des favoris",
    description: "Livre répertorié dans la bibliothèque numérique KITABI. Consultez la source originale pour lire le texte et ses conditions d'utilisation.",
    sourceNotice: "Vous serez redirigé vers la bibliothèque d'origine."
  }
};

// روابط البحث تذهب إلى المكتبات الأصلية.
// لا يتم نسخ ملفات الكتب أو استضافتها في KITABI.
const arabicBooks = [
  ["مقدمة ابن خلدون","ابن خلدون","تاريخ"],
  ["كليلة ودمنة","ابن المقفع","أدب"],
  ["الأيام","طه حسين","أدب"],
  ["حي بن يقظان","ابن طفيل","فلسفة"],
  ["ألف ليلة وليلة","مؤلفون متعددون","أدب"],
  ["لسان العرب","ابن منظور","لغة"],
  ["الأدب الكبير","ابن المقفع","أدب"],
  ["العقد الفريد","ابن عبد ربه","أدب"],
  ["البخلاء","الجاحظ","أدب"],
  ["البيان والتبيين","الجاحظ","أدب"],
  ["رسائل إخوان الصفا","إخوان الصفا","فلسفة"],
  ["تاريخ الطبري","الطبري","تاريخ"],
  ["مروج الذهب","المسعودي","تاريخ"],
  ["المقدمة","ابن خلدون","تاريخ"],
  ["مقامات الحريري","الحريري","أدب"],
  ["ديوان المتنبي","المتنبي","شعر"],
  ["ديوان أبي نواس","أبو نواس","شعر"],
  ["نهج البلاغة","الشريف الرضي","أدب"],
  ["رسائل الجاحظ","الجاحظ","أدب"],
  ["مفتاح العلوم","السكاكي","لغة"]
];

const frenchBooks = [
  ["Les Misérables","Victor Hugo"],
  ["Notre-Dame de Paris","Victor Hugo"],
  ["Le Comte de Monte-Cristo","Alexandre Dumas"],
  ["Les Trois Mousquetaires","Alexandre Dumas"],
  ["Le Tour du monde en quatre-vingts jours","Jules Verne"],
  ["Vingt mille lieues sous les mers","Jules Verne"],
  ["Voyage au centre de la Terre","Jules Verne"],
  ["Madame Bovary","Gustave Flaubert"],
  ["Candide","Voltaire"],
  ["Le Rouge et le Noir","Stendhal"],
  ["Germinal","Émile Zola"],
  ["L'Assommoir","Émile Zola"],
  ["Le Père Goriot","Honoré de Balzac"],
  ["Eugénie Grandet","Honoré de Balzac"],
  ["Les Fleurs du mal","Charles Baudelaire"],
  ["Cyrano de Bergerac","Edmond Rostand"],
  ["Tartuffe","Molière"],
  ["Le Malade imaginaire","Molière"],
  ["Les Confessions","Jean-Jacques Rousseau"],
  ["La Princesse de Clèves","Madame de La Fayette"]
];

const englishBooks = [
  ["Pride and Prejudice","Jane Austen",1342],
  ["Frankenstein","Mary Shelley",84],
  ["Alice's Adventures in Wonderland","Lewis Carroll",11],
  ["Moby-Dick","Herman Melville",15],
  ["The Adventures of Sherlock Holmes","Arthur Conan Doyle",1661],
  ["Jane Eyre","Charlotte Brontë",1260],
  ["Wuthering Heights","Emily Brontë",768],
  ["The Picture of Dorian Gray","Oscar Wilde",174],
  ["Dracula","Bram Stoker",345],
  ["A Tale of Two Cities","Charles Dickens",98],
  ["Great Expectations","Charles Dickens",1400],
  ["Adventures of Huckleberry Finn","Mark Twain",76],
  ["Walden","Henry David Thoreau",205],
  ["The Republic","Plato",1497],
  ["The Prince","Niccolò Machiavelli",1232],
  ["Emma","Jane Austen",158],
  ["Sense and Sensibility","Jane Austen",161],
  ["The Yellow Wallpaper","Charlotte Perkins Gilman",1952],
  ["The Time Machine","H. G. Wells",35],
  ["The Wonderful Wizard of Oz","L. Frank Baum",55]
];

const books = [
  ...arabicBooks.map((b, i) => ({
    id: "ar-" + (i + 1),
    title: b[0],
    author: b[1],
    category: b[2],
    language: "ar",
    symbol: "📘",
    source: "ويكي مصدر",
    sourceUrl: "https://ar.wikisource.org/w/index.php?search=" + encodeURIComponent(b[0])
  })),

  ...frenchBooks.map((b, i) => ({
    id: "fr-" + (i + 1),
    title: b[0],
    author: b[1],
    category: "Littérature",
    language: "fr",
    symbol: "📕",
    source: "Project Gutenberg",
    sourceUrl: "https://www.gutenberg.org/ebooks/search/?query=" + encodeURIComponent(b[0])
  })),

  ...englishBooks.map((b, i) => ({
    id: "en-" + (i + 1),
    title: b[0],
    author: b[1],
    category: "Literature",
    language: "en",
    symbol: "📗",
    source: "Project Gutenberg",
    sourceUrl: b[2]
      ? "https://www.gutenberg.org/ebooks/" + b[2]
      : "https://www.gutenberg.org/ebooks/search/?query=" + encodeURIComponent(b[0])
  }))
];

let currentLanguage = "ar";
let activeCategory = "all";
let favoritesOnly = false;
let searchTerm = "";

let favorites = [];
try {
  favorites = JSON.parse(localStorage.getItem("kitabi-favorites") || "[]");
  if (!Array.isArray(favorites)) favorites = [];
} catch {
  favorites = [];
}

const languageSelect = $("#languageSelect");
const searchInput = $("#searchInput");
const clearSearch = $("#clearSearch");
const favoritesToggle = $("#favoritesToggle");
const categoriesElement = $("#categories");
const bookGrid = $("#bookGrid");
const emptyState = $("#emptyState");
const resultCount = $("#resultCount");
const dialog = $("#bookDialog");
const dialogContent = $("#dialogContent");
const closeDialog = $("#closeDialog");

function saveFavorites() {
  localStorage.setItem("kitabi-favorites", JSON.stringify(favorites));
}

function languageName(code) {
  return translations[currentLanguage][
    code === "ar" ? "arabic" :
    code === "fr" ? "french" : "english"
  ];
}

function getVisibleBooks() {
  return books.filter(book => {
    const text = (
      book.title + " " + book.author + " " +
      book.category + " " + book.source
    ).toLowerCase();

    const matchesSearch = text.includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || book.category === activeCategory;
    const matchesFavorite =
      !favoritesOnly || favorites.includes(book.id);

    return matchesSearch && matchesCategory && matchesFavorite;
  });
}

function renderCategories() {
  const labels = {
    all: translations[currentLanguage].all,
    "أدب": "الأدب",
    "تاريخ": "التاريخ",
    "فلسفة": "الفلسفة",
    "لغة": "اللغة",
    "شعر": "الشعر",
    "Littérature": "Littérature",
    "Literature": "Literature"
  };

  const categories = [
    "all",
    ...new Set(books.map(book => book.category))
  ];

  categoriesElement.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");
    button.className =
      "category-btn" + (activeCategory === category ? " active" : "");
    button.textContent = labels[category] || category;

    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategories();
      renderBooks();
    });

    categoriesElement.appendChild(button);
  });
}

function createBookCard(book) {
  const card = document.createElement("article");
  card.className = "book-card";

  const isFavorite = favorites.includes(book.id);

  const cover = document.createElement("div");
  cover.className = "book-cover";
  cover.textContent = book.symbol;

  const title = document.createElement("h3");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.className = "book-author";
  author.textContent = book.author;

  const meta = document.createElement("p");
  meta.className = "book-meta";
  meta.textContent = languageName(book.language);

  const actions = document.createElement("div");
  actions.className = "book-actions";

  const readButton = document.createElement("button");
  readButton.className = "read-btn";
  readButton.textContent = translations[currentLanguage].read;
  readButton.addEventListener("click", () => openBook(book));

  const favoriteButton = document.createElement("button");
  favoriteButton.className = "favorite-btn";
  favoriteButton.textContent = isFavorite ? "★" : "☆";
  favoriteButton.title = isFavorite
    ? translations[currentLanguage].removeFavorite
    : translations[currentLanguage].favorite;

  favoriteButton.addEventListener("click", () => {
    if (favorites.includes(book.id)) {
      favorites = favorites.filter(id => id !== book.id);
    } else {
      favorites.push(book.id);
    }
    saveFavorites();
    renderBooks();
  });

  actions.append(readButton, favoriteButton);
  card.append(cover, title, author, meta, actions);

  card.addEventListener("dblclick", () => openBook(book));

  return card;
}

function renderBooks() {
  const visibleBooks = getVisibleBooks();
  bookGrid.innerHTML = "";

  visibleBooks.forEach(book => {
    bookGrid.appendChild(createBookCard(book));
  });

  emptyState.hidden = visibleBooks.length !== 0;

  if (resultCount) {
    resultCount.textContent =
      visibleBooks.length + " " + translations[currentLanguage].count;
  }
}

function openBook(book) {
  if (!dialog || !dialogContent) {
    window.open(book.sourceUrl, "_blank", "noopener,noreferrer");
    return;
  }

  dialogContent.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = book.title;

  const author = document.createElement("p");
  author.textContent =
    translations[currentLanguage].author + ": " + book.author;

  const language = document.createElement("p");
  language.textContent =
    translations[currentLanguage].language + ": " +
    languageName(book.language);

  const source = document.createElement("p");
  source.textContent =
    translations[currentLanguage].source + ": " + book.source;

  const notice = document.createElement("p");
  notice.textContent = translations[currentLanguage].sourceNotice;

  const link = document.createElement("a");
  link.href = book.sourceUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "read-btn";
  link.textContent = translations[currentLanguage].read;

  dialogContent.append(heading, author, language, source, notice, link);

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    window.open(book.sourceUrl, "_blank", "noopener,noreferrer");
  }
}

if (searchInput) {
  searchInput.addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    renderBooks();
  });
}

if (clearSearch) {
  clearSearch.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    searchTerm = "";
    renderBooks();
  });
}

if (favoritesToggle) {
  favoritesToggle.addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    favoritesToggle.classList.toggle("active", favoritesOnly);
    renderBooks();
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", event => {
    currentLanguage = event.target.value;
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
      currentLanguage === "ar" ? "rtl" : "ltr";

    if (searchInput) {
      searchInput.placeholder =
        translations[currentLanguage].search;
    }

    if (favoritesToggle) {
      favoritesToggle.textContent =
        translations[currentLanguage].favorites;
    }

    renderCategories();
    renderBooks();
  });
}

if (closeDialog && dialog) {
  closeDialog.addEventListener("click", () => dialog.close());
}

if (dialog) {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
}

const yearElement = $("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

renderCategories();
renderBooks();

// تفعيل العمل دون اتصال إذا كان ملف Service Worker موجوداً
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .catch(error => console.log("Service Worker:", error));
  });
}
