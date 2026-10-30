const books = [
  {id:1,title:"مبادئ البرمجة",author:"فريق كتابي",category:"التكنولوجيا",icon:"⌘",description:"مدخل مبسط إلى مفاهيم البرمجة والخوارزميات."},
  {id:2,title:"رحلة في التاريخ",author:"قسم التاريخ",category:"التاريخ",icon:"⌛",description:"محطات وأحداث صنعت العالم عبر العصور."},
  {id:3,title:"فن التفكير",author:"قسم التنمية",category:"التنمية",icon:"✧",description:"أفكار عملية لتنظيم التفكير وحل المشكلات."},
  {id:4,title:"حدائق الأدب",author:"قسم الأدب",category:"الأدب",icon:"❧",description:"مدخل إلى القراءة الأدبية وتذوق النصوص."},
  {id:5,title:"أساسيات العلوم",author:"قسم العلوم",category:"العلوم",icon:"⚗",description:"مفاهيم علمية تمهيدية بطريقة سهلة."},
  {id:6,title:"ثقافات العالم",author:"قسم الثقافة",category:"الثقافة",icon:"◎",description:"نافذة على ثقافات وتجارب إنسانية متنوعة."},
  {id:7,title:"عالم الرواية",author:"قسم الأدب",category:"الأدب",icon:"❦",description:"تعرف على أشكال الرواية وعناصرها."},
  {id:8,title:"التقنية الحديثة",author:"فريق كتابي",category:"التكنولوجيا",icon:"⌘",description:"نظرة عامة على التقنيات الرقمية الحديثة."}
];
const categories = ["الكل", ...new Set(books.map(book => book.category))];
let activeCategory = "الكل";
const grid = document.querySelector("#bookGrid");
const categoryBar = document.querySelector("#categories");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const dialog = document.querySelector("#bookDialog");

function renderCategories(){
  categoryBar.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "category" + (category === activeCategory ? " active" : "");
    button.textContent = category;
    button.addEventListener("click", () => { activeCategory = category; renderCategories(); renderBooks(); });
    categoryBar.appendChild(button);
  });
}
function renderBooks(){
  const term = searchInput.value.trim().toLocaleLowerCase("ar");
  const filtered = books.filter(book => {
    const categoryMatch = activeCategory === "الكل" || book.category === activeCategory;
    const text = (book.title + " " + book.author + " " + book.category).toLocaleLowerCase("ar");
    return categoryMatch && text.includes(term);
  });
  grid.innerHTML = "";
  emptyState.classList.toggle("hidden", filtered.length !== 0);
  filtered.forEach(book => {
    const card = document.createElement("article");
    card.className = "book-card";
    card.tabIndex = 0;
    card.innerHTML = `<div class="cover" aria-hidden="true">${book.icon}</div>
      <h3>${escapeHtml(book.title)}</h3><p class="author">${escapeHtml(book.author)}</p>
      <span class="book-category">${escapeHtml(book.category)}</span>`;
    card.addEventListener("click", () => showBook(book));
    card.addEventListener("keydown", event => { if(event.key === "Enter") showBook(book); });
    grid.appendChild(card);
  });
}
function showBook(book){
  document.querySelector("#dialogContent").innerHTML = `
    <div class="dialog-cover">${book.icon}</div>
    <span class="book-category">${escapeHtml(book.category)}</span>
    <h2>${escapeHtml(book.title)}</h2><p class="muted">${escapeHtml(book.author)}</p>
    <p>${escapeHtml(book.description)}</p>
    <p class="muted">هذا سجل تجريبي. ستتم إضافة ملفات القراءة بعد ربط قاعدة البيانات.</p>`;
  dialog.showModal();
}
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
searchInput.addEventListener("input", renderBooks);
document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
document.querySelector("#year").textContent = new Date().getFullYear();
renderCategories();
renderBooks();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));
