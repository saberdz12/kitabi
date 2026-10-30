const CACHE_NAME = "kitabi-v5";

// مصفوفة الملفات بعد إضافة مسارات الـ 100 كتاب الحقيقية لتخزينها للعمل بدون إنترنت
const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.webmanifest",

  // --- قسم الروايات والقصص العربية والعالمية (1 - 35) ---
  "./books/1-عزازيل.txt",
  "./books/2-رجال-في-الشمس.txt",
  "./books/3-ثلاثية-غرناطة.txt",
  "./books/4-موسم-الهجرة-إلى-الشمال.txt",
  "./books/5-بين-القصرين.txt",
  "./books/6-قصر-الشوق.txt",
  "./books/7-السكرية.txt",
  "./books/8-مدن-الملح.txt",
  "./books/9-البؤساء.txt",
  "./books/10-ذاكرة-الجسد.txt",
  "./books/11-ساق-البامبو.txt",
  "./books/12-موت-صغير.txt",
  "./books/13-بريد-الليل.txt",
  "./books/14-فرانكشتاين-في-بغداد.txt",
  "./books/15-اللص-والكلاب.txt",
  "./books/16-أولاد-حارتنا.txt",
  "./books/17-الخيميائي.txt",
  "./books/18-الحرافيش.txt",
  "./books/19-طوق-الياسمين.txt",
  "./books/20-واإسلاماه.txt",
  "./books/21-الجريمة-والعقاب.txt",
  "./books/22-الإخوة-كارامازوف.txt",
  "./books/23-مئة-عام-من-العزلة.txt",
  "./books/24-1984.txt",
  "./books/25-مزرعة-الحيوان.txt",
  "./books/26-الحب-في-زمن-الكوليرا.txt",
  "./books/27-المسخ.txt",
  "./books/28-دون-كيشوت.txt",
  "./books/29-ملحمة-أنيت.txt",
  "./books/30-الشيخ-والبحر.txt",
  "./books/31-الغريب.txt",
  "./books/32-آنا-كارينينا.txt",
  "./books/33-الحرب-والسلام.txt",
  "./books/34-صورة-دوريان-غراي.txt",
  "./books/35-المحاكمة.txt",

  // --- قسم الفكر والفلسفة والعلوم (36 - 65) ---
  "./books/36-مقدمة-ابن-خلدون.txt",
  "./books/37-الشبيه-الواحد-والأربعون.txt",
  "./books/38-حي-بن-يقظان.txt",
  "./books/39-تهافت-التهافت.txt",
  "./books/40-تهافت-الفلاسفة.txt",
  "./books/41-هكذا-تكلم-زرادشت.txt",
  "./books/42-جمهورية-أفلاطون.txt",
  "./books/43-الأمير.txt",
  "./books/44-العقد-الاجتماعي.txt",
  "./books/45-نقد-العقل-الخالص.txt",
  "./books/46-منطق-الطير.txt",
  "./books/47-فصل-المقال.txt",
  "./books/48-مستقبل-وهم.txt",
  "./books/49-تجديد-الفكر-العربي.txt",
  "./books/50-شروط-النهضة.txt",
  "./books/51-مشكلة-الأفكار.txt",
  "./books/52-تاريخ-موجز-للزمن.txt",
  "./books/53-الإنسان-ذلك-المجهول.txt",
  "./books/54-الوجود-والعدم.txt",
  "./books/55-طوق-الحمامة.txt",
  "./books/56-عزاء-الفلسفة.txt",
  "./books/57-المنقذ-من-الضلال.txt",
  "./books/58-فن-الحرب.txt",
  "./books/59-الاستشراق.txt",
  "./books/60-فلسفتنا.txt",
  "./books/61-تأملات-ديكارت.txt",
  "./books/62-الخوف-من-الحرية.txt",
  "./books/63-بنية-الثورات-العلمية.txt",
  "./books/64-رسالة-الغفران.txt",
  "./books/65-تاريخ-الفلسفة-الغربية.txt",

  // --- قسم تطوير الذات وعلم النفس (66 - 85) ---
  "./books/66-استثمر-في-نفسك-أولا.txt",
  "./books/67-العادات-الذرية.txt",
  "./books/68-الأب-الغني-والأب-الفقير.txt",
  "./books/69-قوة-العقل-الباطن.txt",
  "./books/70-كيف-تكسب-الأصدقاء.txt",
  "./books/71-العادات-السبع.txt",
  "./books/72-التفكير-السريع-والبطيء.txt",
  "./books/73-فن-اللامبالاة.txt",
  "./books/74-الراهب-الذي-باع-الفيراري.txt",
  "./books/75-الإنسان-يبحث-عن-المعنى.txt",
  "./books/76-الذكاء-العاطفي.txt",
  "./books/77-قوة-الآن.txt",
  "./books/78-الوثبة.txt",
  "./books/79-نادي-الخامسة-صباحا.txt",
  "./books/80-قواعد-السطوة.txt",
  "./books/81-الإتقان.txt",
  "./books/82-المفاتيح-العشرة-للنجاح.txt",
  "./books/83-التركيز-الفائق.txt",
  "./books/84-عقلية-الإنجاز.txt",
  "./books/85-تحفيز-الذات.txt",

  // --- قسم التاريخ والسير الذاتية والأدب (86 - 100) ---
  "./books/86-عبقرية-محمد.txt",
  "./books/87-عبقرية-عمر.txt",
  "./books/88-السيرة-النبوية.txt",
  "./books/89-تاريخ-الطبري.txt",
  "./books/90-البداية-والنهاية.txt",
  "./books/91-سيرة-عمر-بن-عبدالعزيز.txt",
  "./books/92-حياتي-أحمد-أمين.txt",
  "./books/93-الأيام-طه-حسين.txt",
  "./books/94-مذكرات-غاندي.txt",
  "./books/95-مذكرات-مانديلا.txt",
  "./books/96-تاريخ-الحضارة.txt",
  "./books/97-مائة-من-عظماء-الإسلام.txt",
  "./books/98-سيرة-صلاح-الدين.txt",
  "./books/99-الكامل-في-التاريخ.txt",
  "./books/100-مذكرات-ابن-خلدون.txt"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache =>
            cache.put(event.request, copy)
          );
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
