// All quiz questions, grouped
const allQuestions = {
  group1: [
    {
      question: "Koordinatalar so'zining ma'nosi -?",
      options: [
        "(lotincha: co - 'birgalikda', ordinatus - 'tartiblangan', 'aniqlangan') - nuqtaning to'g'ri chiziq, tekislik, fazo va turli yuzalardagi holatini aniqlovchi sonlar.",
        "(turkcha: co - 'birgalikda', ordinatus - 'tartiblangan', 'aniqlangan') - nuqtaning to'g'ri chiziq, tekislik, fazo va turli yuzalardagi holatini aniqlovchi sonlar.",
        "(ingilizcha: co - 'birgalikda', ordinatus - 'tartiblangan', 'aniqlangan') - nuqtaning to'g'ri chiziq, tekislik, fazo va turli yuzalardagi holatini aniqlovchi sonlar.",
        "(arabcha: co - 'birgalikda', ordinatus - 'tartiblangan', 'aniqlangan') - nuqtaning to'g'ri chiziq, tekislik, fazo va turli yuzalardagi holatini aniqlovchi sonlar."
      ],
      correct: 0
    },
    {
      question: "Grafik so'zining ma'nosi bu-?",
      options: [
        "lotincha 'graphikos' so'zidan olingan bo'lib - chizilgan",
        "lotincha 'graphikos' so'zidan olingan bo'lib - chizilmagan",
        "fransuzcha 'graphikos' so'zidan olingan bo'lib - chizilgan",
        "arabcha 'graphikos' so'zidan olingan bo'lib - chizilgan"
      ],
      correct: 0
    },
    {
      question: "Diagramma so'zining ma'nosi -?",
      options: [
        "yunoncha diagramma - chizma, rasm, shakl degan ma'noni anglatadi.",
        "yunoncha diagramma - shakl degan ma'noni anglatadi.",
        "fransuzcha diagramma - chizma, rasm, shakl degan ma'noni anglatadi.",
        "arabcha diagramma - chizma, rasm, shakl degan ma'noni anglatadi."
      ],
      correct: 0
    },
    {
      question: "Simmetriya ma'nosi bu-?",
      options: [
        "yunoncha: symmetria - o'lchovdosh",
        "yunoncha: symmetria - chizma",
        "fransuzcha symmetria - o'lchovdosh",
        "arabcha symmetria - o'lchovdosh"
      ],
      correct: 0
    },
    {
      question: "Paxtadan 35% tola olinadi. 840 kg tola olish uchun qancha paxta kerak bo'adi?",
      options: [
        "2400 kg",
        "240 kg",
        "24 kg",
        "400 kg"
      ],
      correct: 0
    },
    {
      question: "Bоshlаngʻich sinflаrdа аlgеbrа elеmеntlаrini kiritishdаn mаqsаd nimа?",
      options: [
        "oʻquvchilаrning sоn hаqidаgi, аrifmеtik аmаl hаqidаgi, mаtеmаtik munоsаbаt hаqidаgi umumlаshtirishlаrni yuksаkrоq dаrаjаdа koʻtаrishdаn, bundаn kеyin аlgеbrа elеmеntlаrini muvаffаqiyatli oʻrgаnish uchun аsоs hоsil qilishdаn ibоrаt",
        "oʻquvchilаrni аlgеbrаik tushunchаlаr bilаn tаnishtirish, аmаlgа qoʻllаshgа oʻrgаtishdаn ibоrаt",
        "gеоmеtrik mаtеriаllаrni oʻrgаtishgа zаminyarаtishdаn ibоrа",
        "аrifmеtik mаtеriаllаrni chuqurrоq oʻrgаtishdаn ibоrаt"
      ],
      correct: 0
    },
    {
      question: "Vаqtgа оid tаsаvvurlаrni tаrkib tоptirish (yil, оy, hаftа, sutkа, sоаt, minut) nimа yordаmidа аmаlgа оshirilаdi?",
      options: [
        "Tаbеl-kаlеndаr vа sоаt mоdеli yordаmidа",
        "Sоаt mоdеli yordаmidа",
        "quyosh vа sоаt yordаmidа",
        "yil, hаftа yordаmidа"
      ],
      correct: 0
    },
    {
      question: "Dars 45 minut davom etadi. Oʻquvchilar darsning 2/5 qismini masalalar yechishga, 2/9 qismini tenglamalar yechishga sarflashdi. Qolgan vaqtda esa ular mustaqil ishlarni bajarishdi. Mustaqil ishlarni bajarish uchun oʻquvchilarga necha minut kerak boʻlgan?",
      options: [
        "17 minut",
        "18 minut",
        "19 minut",
        "20 minut"
      ],
      correct: 0
    },
    {
      question: "Konstruktr 240 ta detaldan iborat.Ularning 1/3 qismi qora .Barcha detallarning 1/8qismi qizil.Qolgan detallar esa kulrang.Konstruktordagi detallarning nechtasi kulrang.",
      options: [
        "130",
        "230",
        "135",
        "280"
      ],
      correct: 0
    },
    {
      question: "Konstruktorda oʻt oʻchirish mashinasini yigish uchun 564 ta detal mavjud . Ularning 1/3 qismi kabinani yigʻishga qolganining 1/4 qismi koʻtarish mexanizmini yigʻishga ishlatiladi.Qolgan qismlardan esa yongʻin uskunalari va tirkama yigʻish mumkin .Ushbu yongʻin uskunalari va tirkama yigʻishga qancha detal kerak boʻladi?",
      options: [
        "282",
        "130",
        "135",
        "280"
      ],
      correct: 0
    },
    {
      question: "Bir oʻram rangli qogʻozning narxi 7800 soʻm. Rangli kartonning narxi esa rangli qogʻoz narxidan 3700 soʻm qimmat. 3 oʻram rangli karton va 5 oʻram rangli qogʻoz uchun qancha toʻlash kerak?",
      options: [
        "73500 soʻm",
        "40900 soʻm",
        "40700 soʻm",
        "50900 soʻm"
      ],
      correct: 0
    },
    {
      question: "Bir qadoq sariyogʻning massasi 250 g. Qadoq besh qismga boʻlingan. Krem tayyorlash uchun uchta shunday qism ishlatildi. Krem uchun qancha sariyogʻ ishlatilgan?",
      options: [
        "150 g",
        "409 g",
        "407g",
        "509g"
      ],
      correct: 0
    },
    {
      question: "Aziza uy vazifasini 1 h 20 min da bajardi. Bu vaqtning 1/4 qismini u matematikaga sarfladi, yana 15 minut ona tili bilan shugʻullandi. U vaqtning 1/5 qismida she'r yodladi, qolgan vaqtini esa Tabiiy fanlarda berilgan loyiha ishiga sarfladi.  Aziza loyiha ishiga qancha vaqt sarflagan?",
      options: [
        "29 min",
        "40 min",
        "47 min",
        "59min "
      ],
      correct: 0
    },
    {
      question: "Jasur oʻzining sevimli kitoblarini tarozida tortdi. 'Maugli' kitobining massasi 750g ni tashkil etdi. Bu ertaklar toʻplamidan 64 g yengil, detektiv hikoyalar toʻplamidan esa 461g ogʻir. Bu uchta kitobning birgalikdagi massasi qanday?",
      options: [
        "1853",
        "1860",
        "1843",
        "1863 "
      ],
      correct: 0
    },
    {
      question: "Kafeda 30 turdagi pitsa taklif etiladi. Ularning 1/3 qismi achchiq sousli,1/6 qismi zaytunli,qolganlari esa kolbasa va boshqa mahsulotli. Agar Aziza achchiq yoki zaytunni yoqtirmasa,u necha turdagi pitsani tanlashi mumkin?",
      options: [
        "15",
        "20",
        "30",
        "45 "
      ],
      correct: 0
    },
    {
      question: "1 kg sutli shokolad tayyorlash uchun 900 ta kakao donachasi kerak boʻladi.1 ta mevada 50 ta donacha mavjud 3 kg shokolad tayyorlash uchun qancha meva yiğish kerak?",
      options: [
        "54 ta meva",
        "60 ta meva",
        "30 ta meva",
        "45 ta meva"
      ],
      correct: 0
    },
    {
      question: "Oshxonada tushlik tayyorlash uchun 24 kg piyoz archiladi. Bu piyozning oltidan bir qismi shoʻrvaga, 3/8 qismi salatlarga ishlatildi. Qolgan piyoz esa ikkinchi taomlarga ishlatildi. Ikkinchi taomlarga qancha piyoz ketgan?",
      options: [
        "11 kg",
        "21 kg",
        "33 kg",
        "10 kg"
      ],
      correct: 0
    },
    {
      question: "Duradgor shogirdi bilan birgalikda partalarni tamirlayapti.U 6 kunda 36 ta partani taʼmirlab boʻldi, shogirdi esa shu vaqt ichida undan 24 ta kam partani taʼmirladi.Duradgor bir kunda shogirdidan necha marta koʻp partani tamirlagan?",
      options: [
        "3 marta koʻp",
        "2 marta koʻp ",
        "4 marta koʻp",
        "5 marta koʻp"
      ],
      correct: 0
    },
    {
      question: "Toshkent boʻylab sayohatga 139 nafar erkak, ulardan 84 nafar koʻp ayol, erkaklardan 47 nafar koʻp bolalar chiqishdi. Sayohatga borganlarning umumiy soni nechta?",
      options: [
        "548 nafar",
        "538 nafar ",
        "578 nafar ",
        "540 nafar "
      ],
      correct: 0
    },
    {
      question: "Onamning hamyonida 900 000 soʻm bor. Onam avval 165 000 soʻmga koʻylak, keyin 135 000 soʻmga shim sotib oldilar. Onamning hamyonida qancha pul qoldi?",
      options: [
        "600000",
        "300000 ",
        "700000",
        "200000 "
      ],
      correct: 0
    },
    {
      question: "Xaridlar roʻyxatida goʻsht va tovuq bor. Goʻshtning umumiy qiymati    230 000 soʻm, tovuq goʻshtining umumiy qiymati 190 000 soʻm. Sotuvchi 30 ming soʻm chegirma qildi. Xarid uchun qancha toʻlandi?",
      options: [
        "390 000 soʻm",
        "300000 soʻm",
        "700000 soʻm",
        "900000 soʻm"
      ],
      correct: 0
    },
    {
      question: "Bozorda shaftoli uchun 68 000 soʻm, uzum uchun 39 000 soʻm, olma uchun 32 000 soʻm toʻlandi. Mevalar uchun jami necha soʻm toʻlandi?",
      options: [
        "139 000 soʻm",
        "700000 soʻm",
        "760000 soʻm",
        "900000 soʻm"
      ],
      correct: 0
    },
    {
      question: "Zargarlik doʻkonida 399 ta tilla uzuk, ulardan 5 marta koʻp kumush uzuk bor. Uzuklar 7 tadan qilib qutilarga solindi. Nechta quti kerak bo'lgan? ",
      options: [
        "342 ta quti",
        "700 ta quti",
        "760  ta quti",
        "900  ta quti"
      ],
      correct: 0
    },
    {
      question: "Azim noyob hayvonlar haqidagi kitobni 3 kunda oʻqidi. U birinchi kuni 142 bet oʻqidi, bu ikkinchi kun oʻqiganidan 15 bet koʻp. Agar kitob 356 betdan iborat boʻlsa, u uchinchi kuni necha bet oʻqigan?",
      options: [
        "87 bet",
        "70 bet",
        "76 bet",
        "90 bet"
      ],
      correct: 0
    },
    {
      question: "Musobaqada 42 mamlakat qatnashyapti. Har bir mamlakatdan 12 tadan sportchi va 3 tadan trener kelgan. Ular mehmonxonaning 9 ta qavatini toʻliq egallashdi. Mehmonxonaning har bir qavatida nechtadan xona bor ?",
      options: [
        "70 ta xona bor",
        "75 ta xona bor",
        "76 ta xona bor",
        "90 ta xona bor"
      ],
      correct: 0
    },
    {
      question: "Qahvaxonada 16 ta toʻrt oʻrinli stol bor,qolgan stollar olti oʻrinli.Qahvaxona hammasi boʻlib 172 kishini sigʻdira oladi.Qahvaxonada nechta olti oʻrinli stol bor?",
      options: [
        "18 ta olti oʻrinli stol bor",
        "16 ta olti oʻrinli stol bor",
        "14 ta olti oʻrinli stol bor",
        "20 ta olti oʻrinli stol bor"
      ],
      correct: 0
    },
    {
      question: "Sartaroshxonada uchta usta ishlaydi. Noyabr oyida birinchi usta 258 ta kishining sochini oldi. Ikkinchi usta birinchi ustadan 3 marta kam kishining sochini oldi. Uchinchi usta esa birinchi va ikkinchi usta birgalikda olganidan ikki baravar kam odamning sochini oldi. Uchinchi usta noyabr oyida necha kishining sochini olgan",
      options: [
        "172 ta kishining sochini olgan ",
        "161 ta kishining sochini olgan",
        "145 ta kishining sochini olgan",
        "168 ta kishining sochini olgan"
      ],
      correct: 0
    },
    {
      question: "Batalyonda uchta rota bor. Birinchi rotada 98 ta askar,ikkinchisida undan 12 ta askar koʻp, uchinchisida esa ikkinchisidan 17 ta kam askar bor. Bu batalyonda nechta askar bor?",
      options: [
        "301 ta askar bor  ",
        "160 ta askar bor  ",
        "140 ta askar bor  ",
        "303 ta askar bor  "
      ],
      correct: 0
    },
    {
      question: "Qandolat fabrikasida 24 ta tayyor tort bor, har bir tortga beze va muzqaymoq qoʻshilgan. Bezeli tortlar 15 ta, muzqaymoqli tortlar 19 ta boʻlsa, ham beze ham muzqaymoq qoʻshilgan tortlar nechta?",
      options: [
        "10 ta   ",
        "6 ta ",
        "14 ta ",
        "30 ta "
      ],
      correct: 0
    },
    {
      question: "Ekspeditor doʻkonlarga tovar tarqatdi. U 5 tadoʻkonga 8175 ta nonni teng taqsimlashi kerak. U oxirgi doʻkonga nechta  nonni olib boradi?",
      options: [
        "1635 ta   ",
        "1986 ta ",
        "1476 ta ",
        "1234 ta "
      ],
      correct: 0
    }
  ],
  group2: [
    {
      question: "Katta temirdan 8 ta, kichkinasidan esa 5 ta kam detall qirqib olish mumkin. 40 ta katta va 27 ta kichkina temir boʻladigan jami nechta detal qirqib olish mumkin ? ",
      options: [
        "14 ta   ",
        "19 ta ",
        "16 ta ",
        "13 ta "
      ],
      correct: 0
    },
    {
      question: "Harbiy mashqlar maxsus maydonchalarda poligonlarda oʻtkaziladi. Poligonning boʻyi 3120 m, eni 800 m boʻladi. Xavfsizlik maqsadida uning atrofi devor bilan oʻrab chiqiladi. Ana shu devorning uzunligini toping.",
      options: [
        "7840  m   ",
        "7619m ",
        "8716 m ",
        "9813 m "
      ],
      correct: 0
    },
    {
      question: "Kasalxona uchun 135 ta termometr sotib olindi. Termometrlar bir xil qutilarga bir necha donadan solingan ekan. Birinchi boʻlimga 2 quti, ikkinchi boʻlimga 3 quti, uchinchisiga esa 4 quti yuborildi. Har bir qutida nechtadan termometr bor?",
      options: [
        "15 ta    ",
        "60 ta ",
        "45 ta",
        "35 ta  "
      ],
      correct: 0
    },
    {
      question: "Bemorga kuniga 4 ta dori ichish buyurildi. Dorilar ikkita idishga solingan. Ularning biriga 80 ta, ikkinchisiga undan 56 ta kam dori solingan. Bemor bu dorilarni necha kun ichadi?",
      options: [
        "26 kun     ",
        "16 kun ",
        "14kun ",
        "18 kun  "
      ],
      correct: 0
    },
    {
      question: "Hisobchi jumadan yakshanbagacha qahvaxonaga 980 kishi tashrif buyurganini hisoblab chiqdi.Shu bilan birga dam olish kunlari qahvaxonaga 725 kishi tashrif buyurgan.Agar shanba kuni qahvaxonada juma kundagidan 123 kishi koʻp boʻlgan boʻlsa ,yakshanba kuni necha kishi tashrif buyurgan?",
      options: [
        "347 kishi     ",
        "166 kishi ",
        "387 kishi ",
        "255 kishi"
      ],
      correct: 0
    },
    {
      question: "Suv taminoti orqali suv yuborishdan oldin quvurlar maxsus basseynda tozalanadi. Suv tozalaydigan bitta basseynning yuzi 98 m². Agar bu basseynning uzunligi 14 m boʻlsa uning perimetri qanday boʻladi?",
      options: [
        "42 m   ",
        "16 m  ",
        "38m   ",
        "25  m "
      ],
      correct: 0
    },
    {
      question: "'Juft va toq'sonlar mavzusi nechanchi sinf Matematikasining nechanchi qismida yangi mavzu sifatida berilgan?",
      options: [
        "1-sinf Matematika, 1- qism",
        " 2-sinf Matematika, 2-qism",
        " 3-sinf Matematika  1-qism",
        " 4-sinf Matematika 1-qism"
      ],
      correct: 0
    },
    {
      question: "'Qoʻshishning oʻrin almashtirish xossasi' mavzusi nechanchi sinf Matematikasining nechanchi qismida yangi mavzu sifatida berilgan?",
      options: [
        "1-sinf Matematika, 1- qism",
        " 2- sinf Matematika, 4- qism",
        "2-sinf Matematika,  1- qism",
        "D. 3-sinf Matematika, 1- qism"
      ],
      correct: 0
    },
    {
      question: "'Qoʻshish jadvali' mavzusi nechanchi sinf Matematikasining nechanchi qismida yangi mavzu sifatida berilgan?",
      options: [
        "1-sinf Matematika, 1- qism",
        " 2-sinf Matematika, 1- qism",
        " 3-sinf Matematika, 2- qism",
        " 4-sinf Matematika, 1- qism"
      ],
      correct: 0
    },
    {
      question: " 'Narsalar guruhi' mavzusi nechanchi sinf Matematikasining nechanchi qismida yangi mavzu sifatida berilgan?",
      options: [
        "1-sinf Matematika, 1- qism",
        " 2- sinf Matematika, 1-qism",
        " 4- sinf Matematika 1- qism",
        " 3-sinf Matematika 1- qism"
      ],
      correct: 0
    },
    {
      question: "'Guruhlarni taqqoslash' mavzusi nechanchi sinf Matematikasining nechanchi qismida yangi mavzu sifatida berilgan?",
      options: [
        "1- sinf Matematika, 1- qism",
        " 2- sinf Matematika 1- qism",
        " 3- sinf Matematika 1 – qism",
        " 4 - sinf Matematika 1- qism"
      ],
      correct: 0
    },
    {
      question: "'Yaxlit songacha qoʻshish (31+9) 'mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "2-sinf matematika 2-qism",
        "3-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Sonlarni qoʻshish (25+6)'mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "1-sinf matematika 2-qism",
        "1-sinf matematika 1-qism",
        "2-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Sonlarni ayirish (43-16)' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "3-sinf matematika 2-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Ustun koʻrinishida qoʻshish va ayirish' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "1-sinf matematika 1-qism"
      ],
      correct: 0
    },
    {
      question: "'Sonlarni koʻpaytirish' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Koʻpaytirish jadvali' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Boʻlish jadvali' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 2-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Koʻpaytirishning oʻrin almashtirish xossasi' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Koʻpaytirishning taqsimot xossasi' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Uzunlik birliklari' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Vaqt birliklari' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Mass birliklari' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Pul birliklari' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Geometrik shakllar' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Toʻgʻri chiziq va egri chiziq' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Uzunlikni oʻlchash' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Vaqtni oʻlchash' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Massani oʻlchash' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    },
    {
      question: "'Pulni hisoblash' mavzusi nechanchi sinf matematikasining nechanchi qismida berilgan?",
      options: [
        "2-sinf matematika 1-qism",
        "3-sinf matematika 1-qism",
        "4-sinf matematika 1-qism",
        "1-sinf matematika 2-qism"
      ],
      correct: 0
    }
  ],
  group3: [
    {
      question: "O'quvchilar sinfda 25 ta masala yechishdi. Ularning 3/5 qismi to'g'ri yechildi. Nechta masala noto'g'ri yechildi?",
      options: [
        "10 ta masala",
        "15 ta masala",
        "20 ta masala",
        "5 ta masala"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 120 ta kitob bor. Ularning 1/4 qismi matematika kitoblari, 1/3 qismi adabiyot kitoblari. Qolgan kitoblar qanday fanlarga tegishli?",
      options: [
        "Boshqa fanlarga tegishli",
        "Fizika faniga tegishli",
        "Kimyo faniga tegishli",
        "Biologiya faniga tegishli"
      ],
      correct: 0
    },
    {
      question: "Avtobusda 48 yo'lovchi bor edi. Birinchi bekatda 12 kishi tushdi, ikkinchi bekatda 8 kishi chiqdi. Avtobusda nechta yo'lovchi qoldi?",
      options: [
        "44 ta yo'lovchi",
        "40 ta yo'lovchi",
        "36 ta yo'lovchi",
        "52 ta yo'lovchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 240 ta o'q-dori bor edi. Birinchi kun 60 ta, ikkinchi kun 80 ta sotildi. Do'konda nechta o'q-dori qoldi?",
      options: [
        "100 ta o'q-dori",
        "120 ta o'q-dori",
        "140 ta o'q-dori",
        "160 ta o'q-dori"
      ],
      correct: 0
    },
    {
      question: "Bog'da 180 ta daraxt ekildi. Ularning 1/3 qismi olma daraxtlari, 1/4 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 360 ta o'quvchi o'qiyapti. Ularning 2/5 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "216 ta qiz bola",
        "144 ta qiz bola",
        "180 ta qiz bola",
        "200 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 120 ta bemor bor edi. Birinchi kun 25 ta bemor tuzaldi, ikkinchi kun 30 ta bemor tuzaldi. Kasalxonada nechta bemor qoldi?",
      options: [
        "65 ta bemor",
        "55 ta bemor",
        "75 ta bemor",
        "85 ta bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 500 ta mahsulot ishlab chiqarildi. Ularning 3/10 qismi sifatli mahsulotlar. Sifatli bo'lmagan mahsulotlar nechta?",
      options: [
        "350 ta mahsulot",
        "150 ta mahsulot",
        "200 ta mahsulot",
        "250 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 240 ta uy bor. Ularning 1/6 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "200 ta uy",
        "180 ta uy",
        "220 ta uy",
        "160 ta uy"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 300 ta kitob bor. Ularning 2/5 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "180 ta kitob",
        "120 ta kitob",
        "150 ta kitob",
        "200 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 150 ta gul ekildi. Ularning 1/3 qismi atirgullar, 1/5 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 400 ta o'quvchi bor. Ularning 3/8 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "250 ta o'quvchi",
        "150 ta o'quvchi",
        "200 ta o'quvchi",
        "300 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 180 ta mahsulot bor edi. Birinchi kun 45 ta, ikkinchi kun 60 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "75 ta mahsulot",
        "85 ta mahsulot",
        "95 ta mahsulot",
        "65 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 200 ta bemor bor edi. Ularning 2/5 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "120 ta ayol bemor",
        "80 ta ayol bemor",
        "100 ta ayol bemor",
        "140 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 600 ta mahsulot ishlab chiqarildi. Ularning 1/4 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "450 ta mahsulot",
        "150 ta mahsulot",
        "300 ta mahsulot",
        "400 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 250 ta kitob bor. Ularning 2/5 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "150 ta kitob",
        "100 ta kitob",
        "120 ta kitob",
        "180 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 200 ta daraxt bor. Ularning 1/4 qismi olma daraxtlari, 1/5 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 450 ta o'quvchi bor. Ularning 3/10 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "315 ta o'quvchi",
        "135 ta o'quvchi",
        "225 ta o'quvchi",
        "300 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 300 ta mahsulot bor edi. Birinchi kun 75 ta, ikkinchi kun 90 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "135 ta mahsulot",
        "145 ta mahsulot",
        "155 ta mahsulot",
        "125 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 180 ta bemor bor edi. Ularning 1/3 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "120 ta ayol bemor",
        "60 ta ayol bemor",
        "90 ta ayol bemor",
        "150 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 800 ta mahsulot ishlab chiqarildi. Ularning 1/5 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "640 ta mahsulot",
        "160 ta mahsulot",
        "400 ta mahsulot",
        "600 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 300 ta uy bor. Ularning 1/5 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "240 ta uy",
        "200 ta uy",
        "260 ta uy",
        "180 ta uy"
      ],
      correct: 0
    },
    {
      question: "Bog'da 180 ta gul ekildi. Ularning 1/4 qismi atirgullar, 1/6 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 500 ta o'quvchi bor. Ularning 2/5 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "300 ta qiz bola",
        "200 ta qiz bola",
        "250 ta qiz bola",
        "350 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 400 ta kitob bor. Ularning 3/8 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "250 ta kitob",
        "150 ta kitob",
        "200 ta kitob",
        "300 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 240 ta daraxt bor. Ularning 1/3 qismi olma daraxtlari, 1/4 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 600 ta o'quvchi bor. Ularning 1/4 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "450 ta o'quvchi",
        "150 ta o'quvchi",
        "300 ta o'quvchi",
        "400 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 360 ta mahsulot bor edi. Birinchi kun 90 ta, ikkinchi kun 120 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "150 ta mahsulot",
        "160 ta mahsulot",
        "170 ta mahsulot",
        "140 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 240 ta bemor bor edi. Ularning 2/5 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "144 ta ayol bemor",
        "96 ta ayol bemor",
        "120 ta ayol bemor",
        "180 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "O'quvchilar sinfda 30 ta masala yechishdi. Ularning 4/5 qismi to'g'ri yechildi. Nechta masala noto'g'ri yechildi?",
      options: [
        "6 ta masala",
        "24 ta masala",
        "18 ta masala",
        "12 ta masala"
      ],
      correct: 0
    }
  ],
  group4: [
    {
      question: "O'quvchilar sinfda 35 ta masala yechishdi. Ularning 2/7 qismi to'g'ri yechildi. Nechta masala noto'g'ri yechildi?",
      options: [
        "25 ta masala",
        "10 ta masala",
        "15 ta masala",
        "20 ta masala"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 280 ta kitob bor. Ularning 3/7 qismi matematika kitoblari, 1/4 qismi adabiyot kitoblari. Qolgan kitoblar qanday fanlarga tegishli?",
      options: [
        "Boshqa fanlarga tegishli",
        "Fizika faniga tegishli",
        "Kimyo faniga tegishli",
        "Biologiya faniga tegishli"
      ],
      correct: 0
    },
    {
      question: "Avtobusda 56 yo'lovchi bor edi. Birinchi bekatda 14 kishi tushdi, ikkinchi bekatda 12 kishi chiqdi. Avtobusda nechta yo'lovchi qoldi?",
      options: [
        "30 ta yo'lovchi",
        "42 ta yo'lovchi",
        "38 ta yo'lovchi",
        "54 ta yo'lovchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 320 ta o'q-dori bor edi. Birinchi kun 80 ta, ikkinchi kun 100 ta sotildi. Do'konda nechta o'q-dori qoldi?",
      options: [
        "140 ta o'q-dori",
        "160 ta o'q-dori",
        "180 ta o'q-dori",
        "120 ta o'q-dori"
      ],
      correct: 0
    },
    {
      question: "Bog'da 240 ta daraxt ekildi. Ularning 1/4 qismi olma daraxtlari, 1/6 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 480 ta o'quvchi o'qiyapti. Ularning 3/8 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "300 ta qiz bola",
        "180 ta qiz bola",
        "240 ta qiz bola",
        "320 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 160 ta bemor bor edi. Birinchi kun 35 ta bemor tuzaldi, ikkinchi kun 40 ta bemor tuzaldi. Kasalxonada nechta bemor qoldi?",
      options: [
        "85 ta bemor",
        "75 ta bemor",
        "95 ta bemor",
        "105 ta bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 700 ta mahsulot ishlab chiqarildi. Ularning 2/7 qismi sifatli mahsulotlar. Sifatli bo'lmagan mahsulotlar nechta?",
      options: [
        "500 ta mahsulot",
        "200 ta mahsulot",
        "300 ta mahsulot",
        "400 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 360 ta uy bor. Ularning 1/8 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "315 ta uy",
        "280 ta uy",
        "320 ta uy",
        "300 ta uy"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 420 ta kitob bor. Ularning 3/7 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "240 ta kitob",
        "180 ta kitob",
        "200 ta kitob",
        "280 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 200 ta gul ekildi. Ularning 1/5 qismi atirgullar, 1/8 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 560 ta o'quvchi bor. Ularning 2/7 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "400 ta o'quvchi",
        "160 ta o'quvchi",
        "280 ta o'quvchi",
        "320 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 240 ta mahsulot bor edi. Birinchi kun 60 ta, ikkinchi kun 80 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "100 ta mahsulot",
        "120 ta mahsulot",
        "140 ta mahsulot",
        "80 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 280 ta bemor bor edi. Ularning 3/7 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "160 ta ayol bemor",
        "120 ta ayol bemor",
        "140 ta ayol bemor",
        "200 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 900 ta mahsulot ishlab chiqarildi. Ularning 1/6 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "750 ta mahsulot",
        "150 ta mahsulot",
        "450 ta mahsulot",
        "600 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 350 ta kitob bor. Ularning 2/7 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "250 ta kitob",
        "100 ta kitob",
        "150 ta kitob",
        "200 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 280 ta daraxt bor. Ularning 1/7 qismi olma daraxtlari, 1/8 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 640 ta o'quvchi bor. Ularning 3/8 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "400 ta o'quvchi",
        "240 ta o'quvchi",
        "320 ta o'quvchi",
        "480 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 400 ta mahsulot bor edi. Birinchi kun 100 ta, ikkinchi kun 120 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "180 ta mahsulot",
        "200 ta mahsulot",
        "220 ta mahsulot",
        "160 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 320 ta bemor bor edi. Ularning 2/8 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "240 ta ayol bemor",
        "80 ta ayol bemor",
        "160 ta ayol bemor",
        "200 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 1000 ta mahsulot ishlab chiqarildi. Ularning 1/8 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "875 ta mahsulot",
        "125 ta mahsulot",
        "500 ta mahsulot",
        "750 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 400 ta uy bor. Ularning 1/10 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "360 ta uy",
        "320 ta uy",
        "380 ta uy",
        "340 ta uy"
      ],
      correct: 0
    },
    {
      question: "Bog'da 240 ta gul ekildi. Ularning 1/6 qismi atirgullar, 1/10 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 720 ta o'quvchi bor. Ularning 2/9 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "560 ta qiz bola",
        "160 ta qiz bola",
        "320 ta qiz bola",
        "480 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 500 ta kitob bor. Ularning 2/5 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "300 ta kitob",
        "200 ta kitob",
        "250 ta kitob",
        "350 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 300 ta daraxt bor. Ularning 1/6 qismi olma daraxtlari, 1/10 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 800 ta o'quvchi bor. Ularning 1/5 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "640 ta o'quvchi",
        "160 ta o'quvchi",
        "400 ta o'quvchi",
        "600 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 480 ta mahsulot bor edi. Birinchi kun 120 ta, ikkinchi kun 140 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "220 ta mahsulot",
        "240 ta mahsulot",
        "260 ta mahsulot",
        "200 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 360 ta bemor bor edi. Ularning 3/9 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "240 ta ayol bemor",
        "120 ta ayol bemor",
        "180 ta ayol bemor",
        "200 ta ayol bemor"
      ],
      correct: 0
    }
  ],
  group5: [
    {
      question: "O'quvchilar sinfda 42 ta masala yechishdi. Ularning 3/7 qismi to'g'ri yechildi. Nechta masala noto'g'ri yechildi?",
      options: [
        "24 ta masala",
        "18 ta masala",
        "21 ta masala",
        "28 ta masala"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 350 ta kitob bor. Ularning 2/5 qismi matematika kitoblari, 1/7 qismi adabiyot kitoblari. Qolgan kitoblar qanday fanlarga tegishli?",
      options: [
        "Boshqa fanlarga tegishli",
        "Fizika faniga tegishli",
        "Kimyo faniga tegishli",
        "Biologiya faniga tegishli"
      ],
      correct: 0
    },
    {
      question: "Avtobusda 64 yo'lovchi bor edi. Birinchi bekatda 16 kishi tushdi, ikkinchi bekatda 14 kishi chiqdi. Avtobusda nechta yo'lovchi qoldi?",
      options: [
        "34 ta yo'lovchi",
        "48 ta yo'lovchi",
        "42 ta yo'lovchi",
        "58 ta yo'lovchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 400 ta o'q-dori bor edi. Birinchi kun 100 ta, ikkinchi kun 120 ta sotildi. Do'konda nechta o'q-dori qoldi?",
      options: [
        "180 ta o'q-dori",
        "200 ta o'q-dori",
        "220 ta o'q-dori",
        "160 ta o'q-dori"
      ],
      correct: 0
    },
    {
      question: "Bog'da 320 ta daraxt ekildi. Ularning 1/8 qismi olma daraxtlari, 1/10 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 600 ta o'quvchi o'qiyapti. Ularning 2/5 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "360 ta qiz bola",
        "240 ta qiz bola",
        "300 ta qiz bola",
        "400 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 200 ta bemor bor edi. Birinchi kun 45 ta bemor tuzaldi, ikkinchi kun 50 ta bemor tuzaldi. Kasalxonada nechta bemor qoldi?",
      options: [
        "105 ta bemor",
        "95 ta bemor",
        "115 ta bemor",
        "125 ta bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 1200 ta mahsulot ishlab chiqarildi. Ularning 1/6 qismi sifatli mahsulotlar. Sifatli bo'lmagan mahsulotlar nechta?",
      options: [
        "1000 ta mahsulot",
        "200 ta mahsulot",
        "400 ta mahsulot",
        "600 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 450 ta uy bor. Ularning 1/9 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "400 ta uy",
        "360 ta uy",
        "420 ta uy",
        "380 ta uy"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 480 ta kitob bor. Ularning 3/8 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "300 ta kitob",
        "180 ta kitob",
        "200 ta kitob",
        "280 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 280 ta gul ekildi. Ularning 1/7 qismi atirgullar, 1/8 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 720 ta o'quvchi bor. Ularning 1/6 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "600 ta o'quvchi",
        "120 ta o'quvchi",
        "360 ta o'quvchi",
        "480 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 320 ta mahsulot bor edi. Birinchi kun 80 ta, ikkinchi kun 100 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "140 ta mahsulot",
        "160 ta mahsulot",
        "180 ta mahsulot",
        "120 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 400 ta bemor bor edi. Ularning 1/5 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "320 ta ayol bemor",
        "80 ta ayol bemor",
        "200 ta ayol bemor",
        "240 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 1500 ta mahsulot ishlab chiqarildi. Ularning 1/10 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "1350 ta mahsulot",
        "150 ta mahsulot",
        "750 ta mahsulot",
        "1000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 420 ta kitob bor. Ularning 2/7 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "300 ta kitob",
        "120 ta kitob",
        "180 ta kitob",
        "240 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 360 ta daraxt bor. Ularning 1/9 qismi olma daraxtlari, 1/12 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 800 ta o'quvchi bor. Ularning 1/8 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "700 ta o'quvchi",
        "100 ta o'quvchi",
        "400 ta o'quvchi",
        "600 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 480 ta mahsulot bor edi. Birinchi kun 120 ta, ikkinchi kun 140 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "220 ta mahsulot",
        "240 ta mahsulot",
        "260 ta mahsulot",
        "200 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 500 ta bemor bor edi. Ularning 2/10 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "400 ta ayol bemor",
        "100 ta ayol bemor",
        "250 ta ayol bemor",
        "300 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 1800 ta mahsulot ishlab chiqarildi. Ularning 1/12 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "1650 ta mahsulot",
        "150 ta mahsulot",
        "900 ta mahsulot",
        "1200 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 540 ta uy bor. Ularning 1/12 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "495 ta uy",
        "450 ta uy",
        "480 ta uy",
        "510 ta uy"
      ],
      correct: 0
    },
    {
      question: "Bog'da 320 ta gul ekildi. Ularning 1/8 qismi atirgullar, 1/10 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 900 ta o'quvchi bor. Ularning 1/9 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "800 ta qiz bola",
        "100 ta qiz bola",
        "450 ta qiz bola",
        "600 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 560 ta kitob bor. Ularning 3/10 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "392 ta kitob",
        "168 ta kitob",
        "280 ta kitob",
        "336 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 400 ta daraxt bor. Ularning 1/10 qismi olma daraxtlari, 1/16 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 1000 ta o'quvchi bor. Ularning 1/10 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "900 ta o'quvchi",
        "100 ta o'quvchi",
        "500 ta o'quvchi",
        "750 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 600 ta mahsulot bor edi. Birinchi kun 150 ta, ikkinchi kun 180 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "270 ta mahsulot",
        "300 ta mahsulot",
        "330 ta mahsulot",
        "250 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 600 ta bemor bor edi. Ularning 1/6 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "500 ta ayol bemor",
        "100 ta ayol bemor",
        "300 ta ayol bemor",
        "400 ta ayol bemor"
      ],
      correct: 0
    }
  ],
  group6: [
    {
      question: "O'quvchilar sinfda 48 ta masala yechishdi. Ularning 5/8 qismi to'g'ri yechildi. Nechta masala noto'g'ri yechildi?",
      options: [
        "18 ta masala",
        "30 ta masala",
        "24 ta masala",
        "36 ta masala"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 600 ta kitob bor. Ularning 1/3 qismi matematika kitoblari, 1/4 qismi adabiyot kitoblari. Qolgan kitoblar qanday fanlarga tegishli?",
      options: [
        "Boshqa fanlarga tegishli",
        "Fizika faniga tegishli",
        "Kimyo faniga tegishli",
        "Biologiya faniga tegishli"
      ],
      correct: 0
    },
    {
      question: "Avtobusda 72 yo'lovchi bor edi. Birinchi bekatda 18 kishi tushdi, ikkinchi bekatda 16 kishi chiqdi. Avtobusda nechta yo'lovchi qoldi?",
      options: [
        "38 ta yo'lovchi",
        "54 ta yo'lovchi",
        "46 ta yo'lovchi",
        "62 ta yo'lovchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 500 ta o'q-dori bor edi. Birinchi kun 125 ta, ikkinchi kun 150 ta sotildi. Do'konda nechta o'q-dori qoldi?",
      options: [
        "225 ta o'q-dori",
        "250 ta o'q-dori",
        "275 ta o'q-dori",
        "200 ta o'q-dori"
      ],
      correct: 0
    },
    {
      question: "Bog'da 400 ta daraxt ekildi. Ularning 1/5 qismi olma daraxtlari, 1/8 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 750 ta o'quvchi o'qiyapti. Ularning 2/5 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "450 ta qiz bola",
        "300 ta qiz bola",
        "375 ta qiz bola",
        "500 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 250 ta bemor bor edi. Birinchi kun 55 ta bemor tuzaldi, ikkinchi kun 60 ta bemor tuzaldi. Kasalxonada nechta bemor qoldi?",
      options: [
        "135 ta bemor",
        "125 ta bemor",
        "145 ta bemor",
        "155 ta bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 2000 ta mahsulot ishlab chiqarildi. Ularning 1/8 qismi sifatli mahsulotlar. Sifatli bo'lmagan mahsulotlar nechta?",
      options: [
        "1750 ta mahsulot",
        "250 ta mahsulot",
        "500 ta mahsulot",
        "1000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 600 ta uy bor. Ularning 1/12 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "550 ta uy",
        "500 ta uy",
        "580 ta uy",
        "520 ta uy"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 640 ta kitob bor. Ularning 3/8 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "400 ta kitob",
        "240 ta kitob",
        "280 ta kitob",
        "360 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 360 ta gul ekildi. Ularning 1/6 qismi atirgullar, 1/9 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 900 ta o'quvchi bor. Ularning 1/9 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "800 ta o'quvchi",
        "100 ta o'quvchi",
        "450 ta o'quvchi",
        "600 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 400 ta mahsulot bor edi. Birinchi kun 100 ta, ikkinchi kun 120 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "180 ta mahsulot",
        "200 ta mahsulot",
        "220 ta mahsulot",
        "160 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 500 ta bemor bor edi. Ularning 1/5 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "400 ta ayol bemor",
        "100 ta ayol bemor",
        "250 ta ayol bemor",
        "300 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 2400 ta mahsulot ishlab chiqarildi. Ularning 1/12 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "2200 ta mahsulot",
        "200 ta mahsulot",
        "1200 ta mahsulot",
        "1600 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 480 ta kitob bor. Ularning 2/5 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "288 ta kitob",
        "192 ta kitob",
        "240 ta kitob",
        "320 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 450 ta daraxt bor. Ularning 1/9 qismi olma daraxtlari, 1/15 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 1200 ta o'quvchi bor. Ularning 1/10 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "1080 ta o'quvchi",
        "120 ta o'quvchi",
        "600 ta o'quvchi",
        "900 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 600 ta mahsulot bor edi. Birinchi kun 150 ta, ikkinchi kun 180 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "270 ta mahsulot",
        "300 ta mahsulot",
        "330 ta mahsulot",
        "250 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 700 ta bemor bor edi. Ularning 1/7 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "600 ta ayol bemor",
        "100 ta ayol bemor",
        "350 ta ayol bemor",
        "500 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 3000 ta mahsulot ishlab chiqarildi. Ularning 1/15 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "2800 ta mahsulot",
        "200 ta mahsulot",
        "1500 ta mahsulot",
        "2000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 720 ta uy bor. Ularning 1/15 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "672 ta uy",
        "600 ta uy",
        "680 ta uy",
        "640 ta uy"
      ],
      correct: 0
    },
    {
      question: "Bog'da 400 ta gul ekildi. Ularning 1/8 qismi atirgullar, 1/12 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 1100 ta o'quvchi bor. Ularning 1/11 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "1000 ta qiz bola",
        "100 ta qiz bola",
        "550 ta qiz bola",
        "800 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 700 ta kitob bor. Ularning 2/7 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "500 ta kitob",
        "200 ta kitob",
        "300 ta kitob",
        "400 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 500 ta daraxt bor. Ularning 1/10 qismi olma daraxtlari, 1/20 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 1400 ta o'quvchi bor. Ularning 1/14 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "1300 ta o'quvchi",
        "100 ta o'quvchi",
        "700 ta o'quvchi",
        "1000 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 800 ta mahsulot bor edi. Birinchi kun 200 ta, ikkinchi kun 240 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "360 ta mahsulot",
        "400 ta mahsulot",
        "440 ta mahsulot",
        "320 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 800 ta bemor bor edi. Ularning 1/8 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "700 ta ayol bemor",
        "100 ta ayol bemor",
        "400 ta ayol bemor",
        "600 ta ayol bemor"
      ],
      correct: 0
    }
  ],
  group7: [
    {
      question: "O'quvchilar sinfda 54 ta masala yechishdi. Ularning 4/9 qismi to'g'ri yechildi. Nechta masala noto'g'ri yechildi?",
      options: [
        "30 ta masala",
        "24 ta masala",
        "27 ta masala",
        "36 ta masala"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 800 ta kitob bor. Ularning 1/4 qismi matematika kitoblari, 1/5 qismi adabiyot kitoblari. Qolgan kitoblar qanday fanlarga tegishli?",
      options: [
        "Boshqa fanlarga tegishli",
        "Fizika faniga tegishli",
        "Kimyo faniga tegishli",
        "Biologiya faniga tegishli"
      ],
      correct: 0
    },
    {
      question: "Avtobusda 80 yo'lovchi bor edi. Birinchi bekatda 20 kishi tushdi, ikkinchi bekatda 18 kishi chiqdi. Avtobusda nechta yo'lovchi qoldi?",
      options: [
        "42 ta yo'lovchi",
        "58 ta yo'lovchi",
        "50 ta yo'lovchi",
        "66 ta yo'lovchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 600 ta o'q-dori bor edi. Birinchi kun 150 ta, ikkinchi kun 180 ta sotildi. Do'konda nechta o'q-dori qoldi?",
      options: [
        "270 ta o'q-dori",
        "300 ta o'q-dori",
        "330 ta o'q-dori",
        "240 ta o'q-dori"
      ],
      correct: 0
    },
    {
      question: "Bog'da 500 ta daraxt ekildi. Ularning 1/10 qismi olma daraxtlari, 1/25 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 900 ta o'quvchi o'qiyapti. Ularning 1/3 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "600 ta qiz bola",
        "300 ta qiz bola",
        "450 ta qiz bola",
        "650 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 300 ta bemor bor edi. Birinchi kun 65 ta bemor tuzaldi, ikkinchi kun 70 ta bemor tuzaldi. Kasalxonada nechta bemor qoldi?",
      options: [
        "165 ta bemor",
        "155 ta bemor",
        "175 ta bemor",
        "185 ta bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 3600 ta mahsulot ishlab chiqarildi. Ularning 1/18 qismi sifatli mahsulotlar. Sifatli bo'lmagan mahsulotlar nechta?",
      options: [
        "3400 ta mahsulot",
        "200 ta mahsulot",
        "600 ta mahsulot",
        "1200 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 900 ta uy bor. Ularning 1/18 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "850 ta uy",
        "800 ta uy",
        "880 ta uy",
        "820 ta uy"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 800 ta kitob bor. Ularning 3/10 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "560 ta kitob",
        "240 ta kitob",
        "320 ta kitob",
        "480 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 450 ta gul ekildi. Ularning 1/9 qismi atirgullar, 1/15 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 1600 ta o'quvchi bor. Ularning 1/16 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "1500 ta o'quvchi",
        "100 ta o'quvchi",
        "800 ta o'quvchi",
        "1200 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 700 ta mahsulot bor edi. Birinchi kun 175 ta, ikkinchi kun 210 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "315 ta mahsulot",
        "350 ta mahsulot",
        "385 ta mahsulot",
        "280 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 900 ta bemor bor edi. Ularning 1/9 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "800 ta ayol bemor",
        "100 ta ayol bemor",
        "450 ta ayol bemor",
        "600 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 4500 ta mahsulot ishlab chiqarildi. Ularning 1/20 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "4275 ta mahsulot",
        "225 ta mahsulot",
        "2250 ta mahsulot",
        "3000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 600 ta kitob bor. Ularning 2/5 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "360 ta kitob",
        "240 ta kitob",
        "300 ta kitob",
        "400 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 600 ta daraxt bor. Ularning 1/12 qismi olma daraxtlari, 1/30 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 1800 ta o'quvchi bor. Ularning 1/18 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "1700 ta o'quvchi",
        "100 ta o'quvchi",
        "900 ta o'quvchi",
        "1400 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 1000 ta mahsulot bor edi. Birinchi kun 250 ta, ikkinchi kun 300 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "450 ta mahsulot",
        "500 ta mahsulot",
        "550 ta mahsulot",
        "400 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 1000 ta bemor bor edi. Ularning 1/10 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "900 ta ayol bemor",
        "100 ta ayol bemor",
        "500 ta ayol bemor",
        "700 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 5400 ta mahsulot ishlab chiqarildi. Ularning 1/25 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "5184 ta mahsulot",
        "216 ta mahsulot",
        "2700 ta mahsulot",
        "3600 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 1200 ta uy bor. Ularning 1/20 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "1140 ta uy",
        "1080 ta uy",
        "1160 ta uy",
        "1120 ta uy"
      ],
      correct: 0
    },
    {
      question: "Bog'da 500 ta gul ekildi. Ularning 1/10 qismi atirgullar, 1/20 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 2000 ta o'quvchi bor. Ularning 1/20 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "1900 ta qiz bola",
        "100 ta qiz bola",
        "1000 ta qiz bola",
        "1500 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 900 ta kitob bor. Ularning 2/9 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "700 ta kitob",
        "200 ta kitob",
        "300 ta kitob",
        "500 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 700 ta daraxt bor. Ularning 1/14 qismi olma daraxtlari, 1/35 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 2200 ta o'quvchi bor. Ularning 1/22 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "2100 ta o'quvchi",
        "100 ta o'quvchi",
        "1100 ta o'quvchi",
        "1700 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 1200 ta mahsulot bor edi. Birinchi kun 300 ta, ikkinchi kun 360 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "540 ta mahsulot",
        "600 ta mahsulot",
        "660 ta mahsulot",
        "480 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 1200 ta bemor bor edi. Ularning 1/12 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "1100 ta ayol bemor",
        "100 ta ayol bemor",
        "600 ta ayol bemor",
        "800 ta ayol bemor"
      ],
      correct: 0
    }
  ],
  group8: [
    {
      question: "O'quvchilar sinfda 60 ta masala yechishdi. Ularning 3/5 qismi to'g'ri yechildi. Nechta masala noto'g'ri yechildi?",
      options: [
        "24 ta masala",
        "36 ta masala",
        "30 ta masala",
        "42 ta masala"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 1000 ta kitob bor. Ularning 1/5 qismi matematika kitoblari, 1/8 qismi adabiyot kitoblari. Qolgan kitoblar qanday fanlarga tegishli?",
      options: [
        "Boshqa fanlarga tegishli",
        "Fizika faniga tegishli",
        "Kimyo faniga tegishli",
        "Biologiya faniga tegishli"
      ],
      correct: 0
    },
    {
      question: "Avtobusda 90 yo'lovchi bor edi. Birinchi bekatda 22 kishi tushdi, ikkinchi bekatda 20 kishi chiqdi. Avtobusda nechta yo'lovchi qoldi?",
      options: [
        "48 ta yo'lovchi",
        "62 ta yo'lovchi",
        "54 ta yo'lovchi",
        "70 ta yo'lovchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 800 ta o'q-dori bor edi. Birinchi kun 200 ta, ikkinchi kun 240 ta sotildi. Do'konda nechta o'q-dori qoldi?",
      options: [
        "360 ta o'q-dori",
        "400 ta o'q-dori",
        "440 ta o'q-dori",
        "320 ta o'q-dori"
      ],
      correct: 0
    },
    {
      question: "Bog'da 800 ta daraxt ekildi. Ularning 1/16 qismi olma daraxtlari, 1/40 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 1200 ta o'quvchi o'qiyapti. Ularning 1/4 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "900 ta qiz bola",
        "300 ta qiz bola",
        "600 ta qiz bola",
        "800 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 400 ta bemor bor edi. Birinchi kun 85 ta bemor tuzaldi, ikkinchi kun 90 ta bemor tuzaldi. Kasalxonada nechta bemor qoldi?",
      options: [
        "225 ta bemor",
        "215 ta bemor",
        "235 ta bemor",
        "245 ta bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 6000 ta mahsulot ishlab chiqarildi. Ularning 1/25 qismi sifatli mahsulotlar. Sifatli bo'lmagan mahsulotlar nechta?",
      options: [
        "5760 ta mahsulot",
        "240 ta mahsulot",
        "800 ta mahsulot",
        "1500 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 1500 ta uy bor. Ularning 1/25 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "1440 ta uy",
        "1380 ta uy",
        "1460 ta uy",
        "1420 ta uy"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 1000 ta kitob bor. Ularning 2/5 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "600 ta kitob",
        "400 ta kitob",
        "500 ta kitob",
        "700 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 600 ta gul ekildi. Ularning 1/12 qismi atirgullar, 1/24 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 2400 ta o'quvchi bor. Ularning 1/24 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "2300 ta o'quvchi",
        "100 ta o'quvchi",
        "1200 ta o'quvchi",
        "1800 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 1400 ta mahsulot bor edi. Birinchi kun 350 ta, ikkinchi kun 420 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "630 ta mahsulot",
        "700 ta mahsulot",
        "770 ta mahsulot",
        "560 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 1400 ta bemor bor edi. Ularning 1/14 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "1300 ta ayol bemor",
        "100 ta ayol bemor",
        "700 ta ayol bemor",
        "1000 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 7200 ta mahsulot ishlab chiqarildi. Ularning 1/30 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "6960 ta mahsulot",
        "240 ta mahsulot",
        "3600 ta mahsulot",
        "4800 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 800 ta kitob bor. Ularning 3/10 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "560 ta kitob",
        "240 ta kitob",
        "320 ta kitob",
        "480 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 900 ta daraxt bor. Ularning 1/18 qismi olma daraxtlari, 1/45 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 2800 ta o'quvchi bor. Ularning 1/28 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "2700 ta o'quvchi",
        "100 ta o'quvchi",
        "1400 ta o'quvchi",
        "2100 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 1600 ta mahsulot bor edi. Birinchi kun 400 ta, ikkinchi kun 480 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "720 ta mahsulot",
        "800 ta mahsulot",
        "880 ta mahsulot",
        "640 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 1600 ta bemor bor edi. Ularning 1/16 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "1500 ta ayol bemor",
        "100 ta ayol bemor",
        "800 ta ayol bemor",
        "1200 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 9000 ta mahsulot ishlab chiqarildi. Ularning 1/35 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "8743 ta mahsulot",
        "257 ta mahsulot",
        "4500 ta mahsulot",
        "6000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 2000 ta uy bor. Ularning 1/30 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "1933 ta uy",
        "1867 ta uy",
        "1953 ta uy",
        "1913 ta uy"
      ],
      correct: 0
    },
    {
      question: "Bog'da 700 ta gul ekildi. Ularning 1/14 qismi atirgullar, 1/28 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 3200 ta o'quvchi bor. Ularning 1/32 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "3100 ta qiz bola",
        "100 ta qiz bola",
        "1600 ta qiz bola",
        "2400 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 1200 ta kitob bor. Ularning 1/4 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "900 ta kitob",
        "300 ta kitob",
        "400 ta kitob",
        "800 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 1000 ta daraxt bor. Ularning 1/20 qismi olma daraxtlari, 1/50 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 3600 ta o'quvchi bor. Ularning 1/36 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "3500 ta o'quvchi",
        "100 ta o'quvchi",
        "1800 ta o'quvchi",
        "2700 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 2000 ta mahsulot bor edi. Birinchi kun 500 ta, ikkinchi kun 600 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "900 ta mahsulot",
        "1000 ta mahsulot",
        "1100 ta mahsulot",
        "800 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 2000 ta bemor bor edi. Ularning 1/20 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "1900 ta ayol bemor",
        "100 ta ayol bemor",
        "1000 ta ayol bemor",
        "1500 ta ayol bemor"
      ],
      correct: 0
    }
  ],
  group9: [
    {
      question: "O'quvchilar sinfda 66 ta masala yechishdi. Ularning 4/11 qismi to'g'ri yechildi. Nechta masala noto'g'ri yechildi?",
      options: [
        "42 ta masala",
        "24 ta masala",
        "30 ta masala",
        "48 ta masala"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 1200 ta kitob bor. Ularning 1/6 qismi matematika kitoblari, 1/10 qismi adabiyot kitoblari. Qolgan kitoblar qanday fanlarga tegishli?",
      options: [
        "Boshqa fanlarga tegishli",
        "Fizika faniga tegishli",
        "Kimyo faniga tegishli",
        "Biologiya faniga tegishli"
      ],
      correct: 0
    },
    {
      question: "Avtobusda 100 yo'lovchi bor edi. Birinchi bekatda 25 kishi tushdi, ikkinchi bekatda 22 kishi chiqdi. Avtobusda nechta yo'lovchi qoldi?",
      options: [
        "53 ta yo'lovchi",
        "67 ta yo'lovchi",
        "58 ta yo'lovchi",
        "74 ta yo'lovchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 1000 ta o'q-dori bor edi. Birinchi kun 250 ta, ikkinchi kun 300 ta sotildi. Do'konda nechta o'q-dori qoldi?",
      options: [
        "450 ta o'q-dori",
        "500 ta o'q-dori",
        "550 ta o'q-dori",
        "400 ta o'q-dori"
      ],
      correct: 0
    },
    {
      question: "Bog'da 1200 ta daraxt ekildi. Ularning 1/24 qismi olma daraxtlari, 1/60 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 1500 ta o'quvchi o'qiyapti. Ularning 1/5 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "1200 ta qiz bola",
        "300 ta qiz bola",
        "750 ta qiz bola",
        "1000 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 500 ta bemor bor edi. Birinchi kun 105 ta bemor tuzaldi, ikkinchi kun 110 ta bemor tuzaldi. Kasalxonada nechta bemor qoldi?",
      options: [
        "285 ta bemor",
        "275 ta bemor",
        "295 ta bemor",
        "305 ta bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 12000 ta mahsulot ishlab chiqarildi. Ularning 1/40 qismi sifatli mahsulotlar. Sifatli bo'lmagan mahsulotlar nechta?",
      options: [
        "11700 ta mahsulot",
        "300 ta mahsulot",
        "1000 ta mahsulot",
        "2000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 2500 ta uy bor. Ularning 1/35 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "2429 ta uy",
        "2364 ta uy",
        "2446 ta uy",
        "2407 ta uy"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 1400 ta kitob bor. Ularning 2/7 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "1000 ta kitob",
        "400 ta kitob",
        "500 ta kitob",
        "800 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 800 ta gul ekildi. Ularning 1/16 qismi atirgullar, 1/32 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 4000 ta o'quvchi bor. Ularning 1/40 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "3900 ta o'quvchi",
        "100 ta o'quvchi",
        "2000 ta o'quvchi",
        "3000 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 1800 ta mahsulot bor edi. Birinchi kun 450 ta, ikkinchi kun 540 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "810 ta mahsulot",
        "900 ta mahsulot",
        "990 ta mahsulot",
        "720 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 1800 ta bemor bor edi. Ularning 1/18 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "1700 ta ayol bemor",
        "100 ta ayol bemor",
        "900 ta ayol bemor",
        "1200 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 15000 ta mahsulot ishlab chiqarildi. Ularning 1/45 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "14667 ta mahsulot",
        "333 ta mahsulot",
        "7500 ta mahsulot",
        "10000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 1000 ta kitob bor. Ularning 3/10 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "700 ta kitob",
        "300 ta kitob",
        "400 ta kitob",
        "600 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 1200 ta daraxt bor. Ularning 1/24 qismi olma daraxtlari, 1/60 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 4400 ta o'quvchi bor. Ularning 1/44 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "4300 ta o'quvchi",
        "100 ta o'quvchi",
        "2200 ta o'quvchi",
        "3300 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 2400 ta mahsulot bor edi. Birinchi kun 600 ta, ikkinchi kun 720 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "1080 ta mahsulot",
        "1200 ta mahsulot",
        "1320 ta mahsulot",
        "960 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 2400 ta bemor bor edi. Ularning 1/24 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "2300 ta ayol bemor",
        "100 ta ayol bemor",
        "1200 ta ayol bemor",
        "1800 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 18000 ta mahsulot ishlab chiqarildi. Ularning 1/50 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "17640 ta mahsulot",
        "360 ta mahsulot",
        "9000 ta mahsulot",
        "12000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 3000 ta uy bor. Ularning 1/40 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "2925 ta uy",
        "2850 ta uy",
        "2940 ta uy",
        "2910 ta uy"
      ],
      correct: 0
    },
    {
      question: "Bog'da 900 ta gul ekildi. Ularning 1/18 qismi atirgullar, 1/36 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 4800 ta o'quvchi bor. Ularning 1/48 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "4700 ta qiz bola",
        "100 ta qiz bola",
        "2400 ta qiz bola",
        "3600 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 1600 ta kitob bor. Ularning 1/5 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "1280 ta kitob",
        "320 ta kitob",
        "400 ta kitob",
        "1200 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 1400 ta daraxt bor. Ularning 1/28 qismi olma daraxtlari, 1/70 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 5200 ta o'quvchi bor. Ularning 1/52 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "5100 ta o'quvchi",
        "100 ta o'quvchi",
        "2600 ta o'quvchi",
        "3900 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 3000 ta mahsulot bor edi. Birinchi kun 750 ta, ikkinchi kun 900 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "1350 ta mahsulot",
        "1500 ta mahsulot",
        "1650 ta mahsulot",
        "1200 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 3000 ta bemor bor edi. Ularning 1/30 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "2900 ta ayol bemor",
        "100 ta ayol bemor",
        "1500 ta ayol bemor",
        "2200 ta ayol bemor"
      ],
      correct: 0
    }
  ],
  group10: [
    {
      question: "O'quvchilar sinfda 72 ta masala yechishdi. Ularning 5/12 qismi to'g'ri yechildi. Nechta masala noto'g'ri yechildi?",
      options: [
        "42 ta masala",
        "30 ta masala",
        "36 ta masala",
        "48 ta masala"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 1600 ta kitob bor. Ularning 1/8 qismi matematika kitoblari, 1/12 qismi adabiyot kitoblari. Qolgan kitoblar qanday fanlarga tegishli?",
      options: [
        "Boshqa fanlarga tegishli",
        "Fizika faniga tegishli",
        "Kimyo faniga tegishli",
        "Biologiya faniga tegishli"
      ],
      correct: 0
    },
    {
      question: "Avtobusda 110 yo'lovchi bor edi. Birinchi bekatda 28 kishi tushdi, ikkinchi bekatda 24 kishi chiqdi. Avtobusda nechta yo'lovchi qoldi?",
      options: [
        "58 ta yo'lovchi",
        "72 ta yo'lovchi",
        "62 ta yo'lovchi",
        "78 ta yo'lovchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 1200 ta o'q-dori bor edi. Birinchi kun 300 ta, ikkinchi kun 360 ta sotildi. Do'konda nechta o'q-dori qoldi?",
      options: [
        "540 ta o'q-dori",
        "600 ta o'q-dori",
        "660 ta o'q-dori",
        "480 ta o'q-dori"
      ],
      correct: 0
    },
    {
      question: "Bog'da 1600 ta daraxt ekildi. Ularning 1/32 qismi olma daraxtlari, 1/80 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 1800 ta o'quvchi o'qiyapti. Ularning 1/6 qismi o'g'il bolalar. Qiz bolalar nechta?",
      options: [
        "1500 ta qiz bola",
        "300 ta qiz bola",
        "900 ta qiz bola",
        "1200 ta qiz bola"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 600 ta bemor bor edi. Birinchi kun 125 ta bemor tuzaldi, ikkinchi kun 130 ta bemor tuzaldi. Kasalxonada nechta bemor qoldi?",
      options: [
        "345 ta bemor",
        "335 ta bemor",
        "355 ta bemor",
        "365 ta bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 24000 ta mahsulot ishlab chiqarildi. Ularning 1/60 qismi sifatli mahsulotlar. Sifatli bo'lmagan mahsulotlar nechta?",
      options: [
        "23600 ta mahsulot",
        "400 ta mahsulot",
        "1200 ta mahsulot",
        "2000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Qishloqda 3500 ta uy bor. Ularning 1/45 qismi yangi qurilgan uylar. Eski uylar nechta?",
      options: [
        "3422 ta uy",
        "3344 ta uy",
        "3444 ta uy",
        "3400 ta uy"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 1800 ta kitob bor. Ularning 2/9 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "1400 ta kitob",
        "400 ta kitob",
        "500 ta kitob",
        "1200 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 1000 ta gul ekildi. Ularning 1/20 qismi atirgullar, 1/40 qismi lola gullar. Qolgan gullar qanday gullar?",
      options: [
        "Boshqa turdagi gullar",
        "Qizg'aldoq gullar",
        "Binafsha gullar",
        "Sariq gullar"
      ],
      correct: 0
    },
    {
      question: "Maktabda 5600 ta o'quvchi bor. Ularning 1/56 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "5500 ta o'quvchi",
        "100 ta o'quvchi",
        "2800 ta o'quvchi",
        "4200 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 3600 ta mahsulot bor edi. Birinchi kun 900 ta, ikkinchi kun 1080 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "1620 ta mahsulot",
        "1800 ta mahsulot",
        "1980 ta mahsulot",
        "1440 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 3600 ta bemor bor edi. Ularning 1/36 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "3500 ta ayol bemor",
        "100 ta ayol bemor",
        "1800 ta ayol bemor",
        "2700 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 30000 ta mahsulot ishlab chiqarildi. Ularning 1/75 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "29600 ta mahsulot",
        "400 ta mahsulot",
        "15000 ta mahsulot",
        "20000 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kutubxonada 2000 ta kitob bor. Ularning 1/6 qismi o'qilgan kitoblar. O'qilmagan kitoblar nechta?",
      options: [
        "1667 ta kitob",
        "333 ta kitob",
        "400 ta kitob",
        "1600 ta kitob"
      ],
      correct: 0
    },
    {
      question: "Bog'da 1800 ta daraxt bor. Ularning 1/36 qismi olma daraxtlari, 1/90 qismi uzum daraxtlari. Qolgan daraxtlar qanday mevali daraxtlar?",
      options: [
        "Boshqa mevali daraxtlar",
        "Shaftoli daraxtlari",
        "O'rik daraxtlari",
        "Gilos daraxtlari"
      ],
      correct: 0
    },
    {
      question: "Maktabda 6000 ta o'quvchi bor. Ularning 1/60 qismi kichik sinf o'quvchilari. Katta sinf o'quvchilari nechta?",
      options: [
        "5900 ta o'quvchi",
        "100 ta o'quvchi",
        "3000 ta o'quvchi",
        "4500 ta o'quvchi"
      ],
      correct: 0
    },
    {
      question: "Do'konda 4200 ta mahsulot bor edi. Birinchi kun 1050 ta, ikkinchi kun 1260 ta sotildi. Do'konda nechta mahsulot qoldi?",
      options: [
        "1890 ta mahsulot",
        "2100 ta mahsulot",
        "2310 ta mahsulot",
        "1680 ta mahsulot"
      ],
      correct: 0
    },
    {
      question: "Kasalxonada 4200 ta bemor bor edi. Ularning 1/42 qismi erkak bemorlar. Ayol bemorlar nechta?",
      options: [
        "4100 ta ayol bemor",
        "100 ta ayol bemor",
        "2100 ta ayol bemor",
        "3200 ta ayol bemor"
      ],
      correct: 0
    },
    {
      question: "Fabrikada 36000 ta mahsulot ishlab chiqarildi. Ularning 1/90 qismi eksportga jo'natildi. Mahalliy bozorda sotilgan mahsulotlar nechta?",
      options: [
        "35600 ta mahsulot",
        "400 ta mahsulot",
        "18000 ta mahsulot",
        "24000 ta mahsulot"
      ],
      correct: 0
    }
  ]
};
// No export needed, just include this file before script.js in HTML 
