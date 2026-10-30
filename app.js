"use strict"; 

/* ==========================================================================
KITABI - TRANSLATIONS DATA
========================================================================== */ 

const translations = {
ar: {
navLibrary: "المكتبة",
navFeatures: "المميزات",
favorites: "المفضلة",
eyebrow: "مساحة واحدة لكل ما تحب قراءته",
heroTitle: 'افتح كتاباً،
وافتح عالماً جديداً.',
heroDesc: "اكتشف عناوين جديدة، وابحث حسب المجال، واجمع الكتب التي تهمك في مكتبتك الخاصة.",
explore: "استكشف المكتبة",
heroFoot: "المعرفة تبدأ بصفحة",
statOne: "مكتبة تجريبية قابلة للتوسّع",
statTwo: "لغات للواجهة",
statThree: "مساحة لاكتشاف المعرفة",
curated: "اختيارات KITABI",
libraryTitle: "اكتشف المكتبة",
librarySubtitle: "ابحث في العناوين التجريبية أو صفِّ النتائج حسب التصنيف.",
searchPlaceholder: "ابحث عن عنوان أو مؤلف...",
empty: "لا توجد نتائج مطابقة. جرّب بحثاً آخر.",
featureSearch: "بحث سهل",
featureSearchDesc: "اعثر على العناوين حسب الاسم أو المؤلف.",
featureFav: "قائمتك المفضلة",
featureFavDesc: "احفظ اختياراتك على هذا الجهاز.",
featureGrow: "قابلة للتوسّع",
featureGrowDesc: "الخطوة التالية: ربط قاعدة بيانات وإضافة كتب مرخّصة.",
footerText: "اقرأ، اكتشف، تعلّم.",
all: "الكل",
categoryScience: "العلوم",
categoryLiterature: "الأدب",
categoryHistory: "التاريخ",
categoryTechnology: "التكنولوجيا",
categoryDevelopment: "التطوير",
author: "المؤلف",
details: "التفاصيل",
addFavorite: "أضف للمفضلة",
removeFavorite: "إزالة من المفضلة",
results: "نتيجة",
demoNotice: "هذا عنوان تجريبي، وليس كتاباً كاملاً متاحاً للقراءة أو التحميل.",
noFavorites: "لم تضف كتباً إلى المفضلة بعد."
}, 

en: {
navLibrary: "Library",
navFeatures: "Features",
favorites: "Favorites",
eyebrow: "One place for everything you love to read",
heroTitle: 'Open a book,
open a new world.',
heroDesc: "Discover titles, explore subjects, and collect the books that interest you.",
explore: "Explore library",
heroFoot: "Knowledge begins with a page",
statOne: "Expandable demo library",
statTwo: "Interface languages",
statThree: "A space to discover knowledge",
curated: "KITABI PICKS",
libraryTitle: "Explore the library",
librarySubtitle: "Search demo titles or filter by category.",
searchPlaceholder: "Search by title or author...",
empty: "No matching results. Try another search.",
featureSearch: "Easy search",
featureSearchDesc: "Find titles by name or author.",
featureFav: "Your favorites",
featureFavDesc: "Save your selections on this device.",
featureGrow: "Expandable",
featureGrowDesc: "Next step: connect a database and add licensed books.",
footerText: "Read, discover, learn.",
all: "All",
categoryScience: "Science",
categoryLiterature: "Literature",
categoryHistory: "History",
categoryTechnology: "Technology",
categoryDevelopment: "Personal growth",
author: "Author",
details: "Details",
addFavorite: "Add to favorites",
removeFavorite: "Remove from favorites",
results: "results",
demoNotice: "This is a demo title, not a complete book available to read or download.",
noFavorites: "You have not added any favorites yet."
}, 

fr: {
navLibrary: "Bibliothèque",
navFeatures: "Fonctionnalités",
favorites: "Favoris",
eyebrow: "Un seul espace pour vos lectures",
heroTitle: 'Ouvrez un livre,
ouvrez un nouveau monde.',
heroDesc: "Découvrez des titres, explorez des sujets et rassemblez vos livres préférés.",
explore: "Explorer la bibliothèque",
heroFoot: "La connaissance commence par une page",
statOne: "Bibliothèque de démonstration évolutive",
statTwo: "Langues de l’interface",
statThree: "Un espace de découverte",
curated: "SÉLECTION KITABI",
libraryTitle: "Explorer la bibliothèque",
librarySubtitle: "Recherchez des titres de démonstration ou filtrez par catégorie.",
searchPlaceholder: "Rechercher un titre ou un auteur...",
empty: "Aucun résultat. Essayez une autre recherche.",
featureSearch: "Recherche facile",
featureSearchDesc: "Trouvez des titres par nom ou auteur.",
featureFav: "Vos favoris",
featureFavDesc: "Enregistrez vos choix sur cet appareil.",
featureGrow: "Évolutive",
featureGrowDesc: "Prochaine étape : connecter une base de données et ajouter des livres sous licence.",
footerText: "Lire, découvrir, apprendre.",
all: "Tout",
categoryScience: "Sciences",
categoryLiterature: "Littérature",
categoryHistory: "Histoire",
categoryTechnology: "Technologie",
categoryDevelopment: "Développement personnel",
author: "Auteur",
details: "Détails",
addFavorite: "Ajouter aux favoris",
removeFavorite: "Retirer des favoris",
results: "résultats",
demoNotice: "Ceci est un titre de démonstration, pas un livre complet disponible à la lecture ou au téléchargement.",
noFavorites: "Vous n’avez pas encore ajouté de favoris."
}
}; 

/* ==========================================================================
KITABI - DEMO BOOKS DATA
========================================================================== */ 

const books = [
{
id: 1,
symbol: "✦",
category: "science",
title: {
ar: "رحلة في عالم العلوم",
en: "A Journey Through Science",
fr: "Voyage dans le monde des sciences"
},
author: {
ar: "فريق KITABI",
en: "KITABI Team",
fr: "Équipe KITABI"
},
description: {
ar: "عنوان تجريبي للتعرف على قسم العلوم واكتشاف موضوعاته.",
en: "A demo entry introducing the science category and its topics.",
fr: "Une entrée de démonstration pour découvrir la catégorie des sciences."
}
},
{
id: 2,
symbol: "❖",
category: "literature",
title: {
ar: "حدائق الأدب",
en: "Gardens of Literature",
fr: "Jardins de la littérature"
},
author: {
ar: "فريق KITABI",
en: "KITABI Team",
fr: "Équipe KITABI"
},
description: {
ar: "عنوان تجريبي لقسم الأدب والقراءة.",
en: "A demo entry for literature and reading.",
fr: "Une entrée de démonstration pour la littérature et la lecture."
}
},
{
id: 3,
symbol: "⌘",
category: "technology",
title: {
ar: "مدخل إلى التكنولوجيا",
en: "Introduction to Technology",
fr: "Introduction à la technologie"
},
author: {
ar: "فريق KITABI",
en: "KITABI Team",
fr: "Équipe KITABI"
},
description: {
ar: "عنوان تجريبي للتعرف على عالم التكنولوجيا.",
en: "A demo entry exploring the world of technology.",
fr: "Une entrée de démonstration pour explorer la technologie."
}
},
{
id: 4,
symbol: "◈",
category: "history",
title: {
ar: "صفحات من التاريخ",
en: "Pages from History",
fr: "Pages d’histoire"
},
author: {
ar: "فريق KITABI",
en: "KITABI Team",
fr: "Équipe KITABI"
},
description: {
ar: "عنوان تجريبي للتعرف على قسم التاريخ.",
en: "A demo entry introducing the history category.",
fr: "Une entrée de démonstration pour découvrir l’histoire."
}
},
{
id: 5,
symbol: "✧",
category: "development",
title: {
ar: "خطوات نحو التطور",
en: "Steps Towards Growth",
fr: "Les étapes du développement"
},
author: {
ar: "فريق KITABI",
en: "KITABI Team",
fr: "Équipe KITABI"
},
description: {
ar: "عنوان تجريبي حول التعلم وتطوير المهارات.",
en: "A demo entry about learning and developing skills.",
fr: "Une entrée de démonstration sur l’apprentissage et les compétences."
}
},
{
id: 6,
symbol: "✺",
category: "science",
title: {
ar: "أسرار الطبيعة",
en: "Secrets of Nature",
fr: "Les secrets de la nature"
},
author: {
ar: "فريق KITABI",
en: "KITABI Team",
fr: "Équipe KITABI"
},
description: {
ar: "عنوان تجريبي لاستكشاف موضوعات الطبيعة.",
en: "A demo entry exploring topics related to nature.",
fr: "Une entrée de démonstration sur la nature."
}
}
];
