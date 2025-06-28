# Matematika Test Website

Bu website boshlang'ich ta'lim yo'nalishi uchun matematika o'qitish metodikasi fanidan test savollarini o'z ichiga oladi.

## Xususiyatlar

- **10 ta guruh**: Har bir guruhda 30 ta savol (oxirgi guruhda 11 ta)
- **45 soniya vaqt**: Har bir savol uchun
- **Javoblar aralashtiriladi**: Har safar boshqacha tartibda
- **To'g'ri/noto'g'ri ko'rsatish**: Yashil va qizil ranglar bilan
- **Responsive dizayn**: Barcha qurilmalarda ishlaydi
- **Zamonaviy interfeys**: Chiroyli va foydalanuvchi do'st

## Foydalanish

1. `index.html` faylini brauzerda oching
2. Kerakli guruhni tanlang (1-10)
3. Har bir savol uchun 45 soniya vaqt beriladi
4. Javobni tanlang va "Keyingi savol" tugmasini bosing
5. Test tugagach natijalarni ko'ring

## Fayllar tuzilishi

```
├── index.html          # Asosiy HTML fayl
├── styles.css          # CSS stillar
├── script.js           # JavaScript logikasi
└── README.md           # Bu fayl
```

## Savollarni qo'shish

Barcha 281 ta savolni qo'shish uchun `script.js` faylidagi `quizData` obyektini kengaytiring:

```javascript
const quizData = {
    group1: [
        {
            question: "Savol matni",
            options: [
                "A) Birinchi variant",
                "B) Ikkinchi variant", 
                "C) Uchinchi variant",
                "D) To'rtinchi variant"
            ],
            correct: 0  // To'g'ri javob indeksi (0-3)
        }
        // ... ko'proq savollar
    ],
    group2: [
        // 31-60 savollar
    ],
    // ... boshqa guruhlar
};
```

## Savol formatlari

Har bir savol quyidagi formatda bo'lishi kerak:

```javascript
{
    question: "Savol matni",
    options: [
        "A) Birinchi variant",
        "B) Ikkinchi variant", 
        "C) Uchinchi variant",
        "D) To'rtinchi variant"
    ],
    correct: 0  // To'g'ri javob indeksi (0-3)
}
```

## Guruhlar

- **Guruh 1**: Savollar 1-30 (30 ta)
- **Guruh 2**: Savollar 31-60 (30 ta)
- **Guruh 3**: Savollar 61-90 (30 ta)
- **Guruh 4**: Savollar 91-120 (30 ta)
- **Guruh 5**: Savollar 121-150 (30 ta)
- **Guruh 6**: Savollar 151-180 (30 ta)
- **Guruh 7**: Savollar 181-210 (30 ta)
- **Guruh 8**: Savollar 211-240 (30 ta)
- **Guruh 9**: Savollar 241-270 (30 ta)
- **Guruh 10**: Savollar 271-281 (11 ta)

## Texnik xususiyatlar

- **HTML5**: Zamonaviy HTML standartlari
- **CSS3**: Flexbox va Grid layout
- **JavaScript ES6+**: Zamonaviy JavaScript
- **Responsive**: Mobile-first yondashuv
- **Cross-browser**: Barcha zamonaviy brauzerlarda ishlaydi

## O'rnatish

1. Barcha fayllarni bir papkaga saqlang
2. `index.html` faylini brauzerda oching
3. Hech qanday qo'shimcha o'rnatish talab qilinmaydi

## Muammolar

Agar muammolar yuzaga kelsa:

1. Brauzer konsolini tekshiring (F12)
2. JavaScript xatoliklari bor-yo'qligini ko'ring
3. Fayl yo'llarini to'g'riligini tekshiring

## Rivojlantirish

Website'ni rivojlantirish uchun:

1. Yangi savollar qo'shish
2. Dizaynni o'zgartirish
3. Yangi xususiyatlar qo'shish
4. Performance optimizatsiyasi

## Litsenziya

Bu loyiha ochiq manba hisoblanadi va bepul foydalanish uchun mo'ljallangan. 