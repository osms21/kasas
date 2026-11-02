/* Kasasu'n-Nebiyyîn — Hz. Yusuf kıssası (s. 30–71)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "yusuf",
 "title_ar": "قِصَّةُ يُوسُفَ عَلَيْهِ السَّلَامُ",
 "title_tr": "Hz. Yûsuf'un Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 30–71 («أَحْسَنُ الْقَصَصِ»)",
 "units": [
  {
   "id": 1,
   "emoji": "🌙",
   "title_ar": "رُؤْيَا عَجِيبَةٌ",
   "title_tr": "Şaşırtıcı bir rüya",
   "pre": {
    "predict": {
     "prompt_tr": "Başlık: «رُؤْيَا عَجِيبَةٌ» (şaşırtıcı bir rüya). Sence küçük Yusuf rüyasında ne görecek?",
     "options": [
      [
       "كَوَاكِبَ وَشَمْسًا وَقَمَرًا",
       "Yıldızlar, güneş ve ay"
      ],
      [
       "بَحْرًا كَبِيرًا",
       "Büyük bir deniz"
      ],
      [
       "بَيْتًا جَدِيدًا",
       "Yeni bir ev"
      ]
     ]
    },
    "vocab": [
     [
      "رُؤْيَا",
      "rüya",
      "💭"
     ],
     [
      "أَخٌ ج إِخْوَةٌ",
      "kardeş / kardeşler",
      "👦"
     ],
     [
      "يَحْسُدُ",
      "kıskanır",
      "😒"
     ],
     [
      "يَخَافُ عَلَى",
      "için endişelenir",
      "😟"
     ],
     [
      "ذِئْبٌ",
      "kurt",
      "🐺"
     ],
     [
      "يَلْعَبُ",
      "oynar",
      "⚽"
     ]
    ]
   },
   "stop": {
    "section": 2,
    "after": 6,
    "prompt_tr": "Kardeşler «Yusuf'u öldürün ya da uzak bir yere atın» dedi. Sence ne yapacaklar?",
    "options": [
     [
      "يُلْقُونَهُ فِي بِئْرٍ",
      "Onu bir kuyuya atacaklar"
     ],
     [
      "يَتْرُكُونَهُ مَعَ أَبِيهِ",
      "Onu babasıyla bırakacaklar"
     ],
     [
      "يُرْسِلُونَهُ إِلَى مِصْرَ",
      "Onu Mısır'a gönderecekler"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "رَأَى يُوسُفُ رُؤْيَا عَجِيبَةً.",
     "حَكَى يُوسُفُ الرُّؤْيَا لِأَبِيهِ.",
     "قَالَ يَعْقُوبُ: لَا تُخْبِرْ إِخْوَتَكَ.",
     "حَكَى يُوسُفُ الرُّؤْيَا لِإِخْوَتِهِ.",
     "اتَّفَقَ الْإِخْوَةُ عَلَى الشَّرِّ.",
     "أَذِنَ يَعْقُوبُ لِيُوسُفَ."
    ],
    "questions": [
     {
      "q": "كَمْ أَخًا كَانَ لِيُوسُفَ؟",
      "qt": "Yusuf'un kaç kardeşi vardı?",
      "o": [
       "أَحَدَ عَشَرَ",
       "عَشَرَةٌ",
       "اثْنَانِ"
      ],
      "a": 0,
      "ev": [
       "1.0"
      ],
      "ot": [
       "On bir",
       "On",
       "İki"
      ]
     },
     {
      "q": "لِمَاذَا فَرِحَ يَعْقُوبُ بِالرُّؤْيَا؟",
      "qt": "Yakup rüyaya neden sevindi?",
      "o": [
       "لِأَنَّهَا بَشَارَةٌ بِعِلْمٍ وَنُبُوَّةٍ",
       "لِأَنَّهَا رُؤْيَا جَمِيلَةٌ فَقَطْ",
       "لِأَنَّ يُوسُفَ ذَهَبَ إِلَى الْغَابَةِ"
      ],
      "a": 0,
      "ev": [
       "1.11"
      ],
      "ot": [
       "Çünkü ilim ve peygamberlik müjdesi",
       "Çünkü sadece güzel bir rüya",
       "Çünkü Yusuf ormana gitti"
      ]
     },
     {
      "q": "لِمَاذَا كَانَ الْإِخْوَةُ يَحْسُدُونَ يُوسُفَ؟",
      "qt": "Kardeşler Yusuf'u neden kıskanıyordu?",
      "o": [
       "لِأَنَّ أَبَاهُمْ يُحِبُّهُ أَكْثَرَ",
       "لِأَنَّهُ كَانَ قَوِيًّا",
       "لِأَنَّهُ كَانَ غَنِيًّا"
      ],
      "a": 0,
      "ev": [
       "2.2"
      ],
      "ot": [
       "Çünkü babaları onu daha çok seviyor",
       "Çünkü o güçlüydü",
       "Çünkü o zengindi"
      ]
     },
     {
      "q": "مَاذَا قَالَ أَحَدُ الْإِخْوَةِ؟",
      "qt": "Kardeşlerden biri ne dedi?",
      "o": [
       "أَلْقُوهُ فِي بِئْرٍ",
       "اُقْتُلُوهُ",
       "اُتْرُكُوهُ"
      ],
      "a": 0,
      "ev": [
       "2.8"
      ],
      "ot": [
       "Onu bir kuyuya atın",
       "Onu öldürün",
       "Onu bırakın"
      ]
     },
     {
      "q": "مِمَّ كَانَ يَعْقُوبُ يَخَافُ؟",
      "qt": "Yakup neden korkuyordu?",
      "o": [
       "أَنْ يَأْكُلَ الذِّئْبُ يُوسُفَ",
       "أَنْ يَضِيعَ الطَّعَامُ",
       "أَنْ يَذْهَبَ يُوسُفُ إِلَى مِصْرَ"
      ],
      "a": 0,
      "ev": [
       "3.9"
      ],
      "ot": [
       "Kurdun Yusuf'u yemesinden",
       "Yiyeceğin kaybolmasından",
       "Yusuf'un Mısır'a gitmesinden"
      ]
     }
    ],
    "focus": {
     "title": "Sayılar: أَحَدَ عَشَرَ كَوْكَبًا",
     "explain": "11–99 arası sayılardan sonra sayılan isim <b>tekil ve üstün (mansub)</b> gelir: <span class='ar-inline'>أَحَدَ عَشَرَ كَوْكَبًا</span> (on bir yıldız), <span class='ar-inline'>أَحَدَ عَشَرَ أَخًا</span> (on bir kardeş). 3–10 arası sayılardan sonra ise isim <b>çoğul</b> olur: <span class='ar-inline'>سَبْعُ بَقَرَاتٍ</span> (yedi inek).",
     "examples": [
      "أَحَدَ عَشَرَ كَوْكَبًا",
      "أَحَدَ عَشَرَ أَخًا",
      "اثْنَا عَشَرَ وَلَدًا"
     ],
     "items": [
      {
       "q": "رَأَى يُوسُفُ أَحَدَ عَشَرَ ____.",
       "o": [
        "كَوْكَبًا",
        "كَوَاكِبَ",
        "كَوْكَبٌ"
       ],
       "a": 0
      },
      {
       "q": "كَانَ لِيُوسُفَ أَحَدَ عَشَرَ ____.",
       "o": [
        "أَخًا",
        "إِخْوَةً",
        "أَخٌ"
       ],
       "a": 0
      },
      {
       "q": "كَانَ لِيَعْقُوبَ اثْنَا عَشَرَ ____.",
       "o": [
        "وَلَدًا",
        "أَوْلَادًا",
        "وَلَدٌ"
       ],
       "a": 0
      },
      {
       "q": "____ عَشَرَ كَوْكَبًا",
       "o": [
        "أَحَدَ",
        "وَاحِدٌ",
        "أَحَدٌ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "رَأَى يُوسُفُ أَحَدَ عَشَرَ {كَوْكَبًا} وَالشَّمْسَ وَالْقَمَرَ. وَقَالَ يَعْقُوبُ: لَا تُخْبِرْ {إِخْوَتَكَ}. وَكَانَ الْإِخْوَةُ {يَحْسُدُونَ} يُوسُفَ. وَقَالَ يَعْقُوبُ: أَخَافُ أَنْ يَأْكُلَهُ {الذِّئْبُ}. وَفِي النِّهَايَةِ {أَذِنَ} يَعْقُوبُ لِيُوسُفَ."
    },
    "think": {
     "q": "لِمَاذَا قَالَ يَعْقُوبُ: لَا تُخْبِرْ بِهٰذِهِ الرُّؤْيَا أَحَدًا مِنْ إِخْوَتِكَ؟",
     "qt": "Yakup neden «Bu rüyayı kardeşlerinden hiçbirine anlatma» dedi?",
     "model": "Yakup insanların huylarını ve şeytanın insanı nasıl kışkırttığını biliyordu. Kardeşlerin zaten kıskançlık duyduğunu görüyordu; bu rüya Yusuf'un yükseleceğini gösterdiği için kıskançlığı artırır ve onları düşmanlığa iterdi."
    },
    "retell": [
     "رُؤْيَا",
     "أَحَدَ عَشَرَ كَوْكَبًا",
     "يَعْقُوبُ",
     "يَحْسُدُونَ",
     "الذِّئْبُ",
     "أَذِنَ"
    ],
    "quran": [
     {
      "ar": "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ",
      "ref": "Yûsuf 12:4",
      "tr": "Hani Yusuf babasına: Babacığım, ben on bir yıldız, güneş ve ay gördüm; onları bana secde ederken gördüm, demişti.",
      "inText": "«يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا...»"
     },
     {
      "ar": "قَالَ يَا بُنَيَّ لَا تَقْصُصْ رُؤْيَاكَ عَلَى إِخْوَتِكَ فَيَكِيدُوا لَكَ كَيْدًا",
      "ref": "Yûsuf 12:5",
      "tr": "Dedi ki: Yavrucuğum, rüyanı kardeşlerine anlatma; yoksa sana bir tuzak kurarlar.",
      "inText": "لَا تُخْبِرْ بِهٰذِهِ الرُّؤْيَا أَحَدًا مِنْ إِخْوَتِكَ"
     },
     {
      "ar": "أَرْسِلْهُ مَعَنَا غَدًا يَرْتَعْ وَيَلْعَبْ وَإِنَّا لَهُ لَحَافِظُونَ",
      "ref": "Yûsuf 12:12",
      "tr": "Yarın onu bizimle gönder, gezsin oynasın; biz onu mutlaka koruruz.",
      "inText": "«أَرْسِلْهُ مَعَنَا غَدًا...»"
     },
     {
      "ar": "وَأَخَافُ أَنْ يَأْكُلَهُ الذِّئْبُ وَأَنْتُمْ عَنْهُ غَافِلُونَ",
      "ref": "Yûsuf 12:13",
      "tr": "Siz ondan habersizken onu kurdun yemesinden korkarım.",
      "inText": "«أَخَافُ أَنْ يَأْكُلَهُ الذِّئْبُ...»"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "رُؤْيَا عَجِيبَةٌ",
     "title_tr": "Şaşırtıcı bir rüya",
     "s": [
      [
       "كَانَ يُوسُفُ وَلَدًا صَغِيرًا، وَكَانَ لَهُ أَحَدَ عَشَرَ أَخًا.",
       "Yusuf küçük bir çocuktu ve on bir kardeşi vardı."
      ],
      [
       "وَكَانَ يُوسُفُ غُلَامًا جَمِيلًا، وَكَانَ يُوسُفُ غُلَامًا ذَكِيًّا.",
       "Yusuf güzel bir çocuktu, Yusuf zeki bir çocuktu."
      ],
      [
       "وَكَانَ أَبُوهُ يَعْقُوبُ يُحِبُّهُ أَكْثَرَ مِنْ جَمِيعِ إِخْوَتِهِ.",
       "Babası Yakup onu bütün kardeşlerinden daha çok severdi."
      ],
      [
       "ذَاتَ لَيْلَةٍ رَأَى يُوسُفُ رُؤْيَا عَجِيبَةً.",
       "Bir gece Yusuf şaşırtıcı bir rüya gördü."
      ],
      [
       "رَأَى أَحَدَ عَشَرَ كَوْكَبًا وَرَأَى الشَّمْسَ وَالْقَمَرَ كُلٌّ يَسْجُدُ لَهُ.",
       "On bir yıldız, güneş ve ay gördü; hepsi ona secde ediyordu."
      ],
      [
       "تَعَجَّبَ يُوسُفُ الصَّغِيرُ كَثِيرًا! وَمَا فَهِمَ هٰذِهِ الرُّؤْيَا، كَيْفَ تَسْجُدُ الْكَوَاكِبُ وَالشَّمْسُ وَالْقَمَرُ لِرَجُلٍ؟",
       "Küçük Yusuf çok şaşırdı! Bu rüyayı anlamadı: Yıldızlar, güneş ve ay bir insana nasıl secde eder?"
      ],
      [
       "ذَهَبَ يُوسُفُ الصَّغِيرُ إِلَى أَبِيهِ يَعْقُوبَ وَحَكَى لَهُ هٰذِهِ الرُّؤْيَا الْعَجِيبَةَ.",
       "Küçük Yusuf babası Yakup'a gitti ve ona bu şaşırtıcı rüyayı anlattı."
      ],
      [
       "«قَالَ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ».",
       "«Dedi ki: Babacığım, ben on bir yıldız, güneş ve ay gördüm; onları bana secde ederken gördüm.»"
      ],
      [
       "وَكَانَ أَبُوهُ يَعْقُوبُ نَبِيًّا.",
       "Babası Yakup bir peygamberdi."
      ],
      [
       "فَرِحَ يَعْقُوبُ بِهٰذِهِ الرُّؤْيَا كَثِيرًا.",
       "Yakup bu rüyaya çok sevindi."
      ],
      [
       "وَقَالَ: بَارَكَ اللهُ لَكَ يَا يُوسُفُ، فَسَيَكُونُ لَكَ شَأْنٌ.",
       "Ve dedi ki: Allah sana bereket versin ey Yusuf; senin büyük bir şanın olacak."
      ],
      [
       "هٰذِهِ الرُّؤْيَا بَشَارَةٌ بِعِلْمٍ وَنُبُوَّةٍ.",
       "Bu rüya ilmin ve peygamberliğin müjdesidir."
      ],
      [
       "وَقَدْ أَنْعَمَ اللهُ عَلَى جَدِّكَ إِسْحَاقَ، وَقَدْ أَنْعَمَ اللهُ عَلَى جَدِّكَ إِبْرَاهِيمَ.",
       "Allah deden İshak'a nimet verdi, deden İbrahim'e de nimet verdi."
      ],
      [
       "وَإِنَّهُ يُنْعِمُ عَلَيْكَ وَيُنْعِمُ عَلَى آلِ يَعْقُوبَ.",
       "O sana da ve Yakup ailesine de nimet verecek."
      ],
      [
       "وَكَانَ يَعْقُوبُ شَيْخًا كَبِيرًا، وَكَانَ يَعْرِفُ طَبَائِعَ النَّاسِ، وَكَانَ يَعْرِفُ كَيْفَ يَغْلِبُ الشَّيْطَانُ، وَكَيْفَ يَلْعَبُ الشَّيْطَانُ بِالْإِنْسَانِ.",
       "Yakup yaşlı bir adamdı; insanların huylarını bilirdi, şeytanın nasıl galip geldiğini ve insanla nasıl oynadığını bilirdi."
      ],
      [
       "فَقَالَ يَا وَلَدِي، لَا تُخْبِرْ بِهٰذِهِ الرُّؤْيَا أَحَدًا مِنْ إِخْوَتِكَ، فَإِنَّهُمْ يَحْسُدُونَكَ وَيَكُونُونَ لَكَ عَدُوًّا.",
       "Dedi ki: Oğlum, bu rüyayı kardeşlerinden hiçbirine anlatma; yoksa seni kıskanırlar ve sana düşman olurlar."
      ]
     ]
    },
    {
     "n": 2,
     "title_ar": "حَسَدُ الْإِخْوَةِ",
     "title_tr": "Kardeşlerin kıskançlığı",
     "s": [
      [
       "وَكَانَ لِيُوسُفَ أَخٌ آخَرُ مِنْ أُمِّهِ اسْمُهُ بِنْيَامِينُ.",
       "Yusuf'un annesinden Bünyamin adında bir kardeşi daha vardı."
      ],
      [
       "وَكَانَ يَعْقُوبُ يُحِبُّهُمَا حُبًّا شَدِيدًا، وَكَانَ لَا يُحِبُّ مِثْلَهُمَا أَحَدًا.",
       "Yakup ikisini çok severdi; kimseyi onlar kadar sevmezdi."
      ],
      [
       "وَكَانَ الْإِخْوَةُ يَحْسُدُونَ يُوسُفَ وَبِنْيَامِينَ وَيَغْضَبُونَ، كَانُوا يَقُولُونَ: لِمَاذَا يُحِبُّ أَبُونَا يُوسُفَ وَبِنْيَامِينَ أَكْثَرَ؟",
       "Kardeşler Yusuf'u ve Bünyamin'i kıskanır ve kızarlardı; derlerdi ki: Babamız neden Yusuf'u ve Bünyamin'i daha çok seviyor?"
      ],
      [
       "وَلِمَاذَا يُحِبُّهُمَا وَهُمَا صَغِيرَانِ ضَعِيفَانِ؟",
       "Onlar küçük ve zayıfken neden onları seviyor?"
      ],
      [
       "لِمَاذَا لَا يُحِبُّنَا مِثْلَ يُوسُفَ وَبِنْيَامِينَ وَنَحْنُ شُبَّانٌ أَقْوِيَاءُ، هٰذَا أَمْرٌ عَجِيبٌ.",
       "Biz güçlü gençleriz; neden bizi Yusuf ve Bünyamin gibi sevmiyor? Bu tuhaf bir iş."
      ],
      [
       "وَكَانَ يُوسُفُ وَلَدًا صَغِيرًا، فَحَكَى الرُّؤْيَا لِإِخْوَتِهِ وَغَضِبَ الْإِخْوَةُ جِدًّا لَمَّا سَمِعُوا الرُّؤْيَا وَاشْتَدَّ حَسَدُهُمْ.",
       "Yusuf küçük bir çocuktu; rüyayı kardeşlerine anlattı. Kardeşler rüyayı duyunca çok kızdılar ve kıskançlıkları arttı."
      ],
      [
       "وَاجْتَمَعَ الْإِخْوَةُ يَوْمًا وَقَالُوا: اُقْتُلُوا يُوسُفَ أَوِ اطْرَحُوهُ أَرْضًا بَعِيدَةً.",
       "Bir gün kardeşler toplandı ve dediler ki: Yusuf'u öldürün ya da onu uzak bir yere atın."
      ],
      [
       "حِينَئِذٍ يَكُونُ أَبُوكُمْ لَكُمْ خَالِصًا، وَيَكُونُ حُبُّهُ لَكُمْ خَالِصًا.",
       "O zaman babanız yalnızca sizin olur, sevgisi de yalnızca size kalır."
      ],
      [
       "قَالَ أَحَدُهُمْ: لَا بَلْ أَلْقُوهُ فِي بِئْرٍ فِي طَرِيقٍ يَأْخُذُهُ بَعْضُ الْمُسَافِرِينَ.",
       "İçlerinden biri dedi ki: Hayır, onu yol üstündeki bir kuyuya atın; yolculardan biri onu alır."
      ],
      [
       "وَوَافَقَ عَلَيْهِ جَمِيعُ الْإِخْوَةِ.",
       "Bütün kardeşler buna razı oldu."
      ]
     ]
    },
    {
     "n": 3,
     "title_ar": "وَفْدٌ إِلَى يَعْقُوبَ",
     "title_tr": "Yakup'a gelen heyet",
     "s": [
      [
       "وَلَمَّا اتَّفَقُوا عَلَى هٰذَا الرَّأْيِ جَاءُوا إِلَى يَعْقُوبَ.",
       "Bu fikirde anlaşınca Yakup'a geldiler."
      ],
      [
       "وَكَانَ يَعْقُوبُ يَخَافُ عَلَى يُوسُفَ كَثِيرًا، وَكَانَ يَعْرِفُ أَنَّ الْإِخْوَةَ يَحْسُدُونَهُ وَلَا يُحِبُّونَهُ.",
       "Yakup Yusuf için çok endişelenirdi; kardeşlerin onu kıskandığını ve sevmediğini biliyordu."
      ],
      [
       "وَكَانَ يَعْقُوبُ لَا يُرْسِلُ يُوسُفَ مَعَ الْإِخْوَةِ. وَكَانَ يُوسُفُ يَلْعَبُ مَعَ أَخِيهِ وَلَا يَذْهَبُ بَعِيدًا.",
       "Yakup Yusuf'u kardeşleriyle göndermezdi. Yusuf kardeşiyle oynar, uzağa gitmezdi."
      ],
      [
       "وَكَانَ الْإِخْوَةُ يَعْرِفُونَ ذٰلِكَ، وَلٰكِنَّهُمْ عَزَمُوا عَلَى الشَّرِّ.",
       "Kardeşler bunu biliyordu, ama kötülüğe karar vermişlerdi."
      ],
      [
       "قَالُوا يَا أَبَانَا لِمَاذَا لَا تُرْسِلُ مَعَنَا يُوسُفَ؟ مَاذَا تَخَافُ؟",
       "Dediler ki: Babamız, neden Yusuf'u bizimle göndermiyorsun? Neden korkuyorsun?"
      ],
      [
       "هُوَ أَخُونَا الْعَزِيزُ، وَأَخُونَا الصَّغِيرُ، وَنَحْنُ أَبْنَاءُ أَبٍ. وَالْإِخْوَةُ دَائِمًا يَلْعَبُونَ جَمِيعًا، فَلِمَاذَا لَا نَذْهَبُ نَحْنُ وَنَلْعَبُ جَمِيعًا؟",
       "O bizim sevgili kardeşimiz, küçük kardeşimiz; hepimiz bir babanın oğullarıyız. Kardeşler hep birlikte oynar; öyleyse neden birlikte gidip oynamayalım?"
      ],
      [
       "«أَرْسِلْهُ مَعَنَا غَدًا يَرْتَعْ وَيَلْعَبْ وَإِنَّا لَهُ لَحَافِظُونَ».",
       "«Yarın onu bizimle gönder, gezsin oynasın; biz onu mutlaka koruruz.»"
      ],
      [
       "وَكَانَ يَعْقُوبُ شَيْخًا كَبِيرًا، وَكَانَ يَعْقُوبُ عَاقِلًا حَلِيمًا، وَكَانَ يَعْقُوبُ لَا يُحِبُّ أَنْ يَبْتَعِدَ مِنْهُ يُوسُفُ. وَكَانَ يَخَافُ عَلَى يُوسُفَ كَثِيرًا.",
       "Yakup yaşlıydı; akıllı ve yumuşak huyluydu. Yusuf'un kendisinden uzaklaşmasını istemezdi ve onun için çok endişelenirdi."
      ],
      [
       "فَقَالَ لِأَبْنَائِهِ:",
       "Bunun üzerine oğullarına dedi ki:"
      ],
      [
       "«أَخَافُ أَنْ يَأْكُلَهُ الذِّئْبُ وَأَنْتُمْ عَنْهُ غَافِلُونَ».",
       "«Siz ondan habersizken onu kurdun yemesinden korkuyorum.»"
      ],
      [
       "قَالُوا: أَبَدًا! كَيْفَ يَأْكُلُهُ الذِّئْبُ وَنَحْنُ حَاضِرُونَ؟ وَكَيْفَ يَأْكُلُهُ وَنَحْنُ شُبَّانٌ أَقْوِيَاءُ؟",
       "Dediler ki: Asla! Biz oradayken kurt onu nasıl yer? Biz güçlü gençlerken onu nasıl yer?"
      ],
      [
       "وَأَذِنَ يَعْقُوبُ لِيُوسُفَ.",
       "Ve Yakup Yusuf'a izin verdi."
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "🐺",
   "title_ar": "يُوسُفُ فِي الْبِئْرِ",
   "title_tr": "Yusuf kuyuda",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «إِلَى الْغَابَةِ» ve «أَمَامَ يَعْقُوبَ». Kardeşler babalarına ne diyecek sence?",
     "options": [
      [
       "أَكَلَهُ الذِّئْبُ",
       "Onu kurt yedi"
      ],
      [
       "ذَهَبَ إِلَى مِصْرَ",
       "Mısır'a gitti"
      ],
      [
       "يَلْعَبُ فِي الْغَابَةِ",
       "Ormanda oynuyor"
      ]
     ]
    },
    "vocab": [
     [
      "غَابَةٌ",
      "orman",
      "🌲"
     ],
     [
      "بِئْرٌ",
      "kuyu",
      "🪣"
     ],
     [
      "عَمِيقٌ",
      "derin",
      "⬇️"
     ],
     [
      "مُظْلِمٌ",
      "karanlık",
      "🌑"
     ],
     [
      "قَمِيصٌ",
      "gömlek",
      "👕"
     ],
     [
      "دَمٌ",
      "kan",
      "🩸"
     ]
    ]
   },
   "stop": {
    "section": 4,
    "after": 11,
    "prompt_tr": "Kardeşler babalarına «Onu kurt yedi» demeye karar verdi. Sence babalarını nasıl inandırmaya çalışacaklar?",
    "options": [
     [
      "يَصْبُغُونَ الْقَمِيصَ بِالدَّمِ",
      "Gömleği kana boyayacaklar"
     ],
     [
      "يَرْجِعُونَ إِلَى الْبِئْرِ",
      "Kuyuya geri dönecekler"
     ],
     [
      "يَقُولُونَ الْحَقَّ",
      "Doğruyu söyleyecekler"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "أَلْقَى الْإِخْوَةُ يُوسُفَ فِي الْبِئْرِ.",
     "قَالَ اللهُ لِيُوسُفَ: لَا تَحْزَنْ.",
     "ذَبَحَ الْإِخْوَةُ كَبْشًا.",
     "صَبَغُوا قَمِيصَ يُوسُفَ بِالدَّمِ.",
     "جَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ.",
     "قَالَ يَعْقُوبُ: فَصَبْرٌ جَمِيلٌ."
    ],
    "questions": [
     {
      "q": "كَيْفَ كَانَتِ الْبِئْرُ؟",
      "qt": "Kuyu nasıldı?",
      "o": [
       "عَمِيقَةً مُظْلِمَةً",
       "صَغِيرَةً جَمِيلَةً",
       "قَرِيبَةً مِنَ الْبَيْتِ"
      ],
      "a": 0,
      "ev": [
       "4.3"
      ],
      "ot": [
       "Derin ve karanlık",
       "Küçük ve güzel",
       "Eve yakın"
      ]
     },
     {
      "q": "مَاذَا قَالَ اللهُ لِيُوسُفَ فِي الْبِئْرِ؟",
      "qt": "Allah kuyuda Yusuf'a ne dedi?",
      "o": [
       "لَا تَحْزَنْ وَلَا تَخَفْ",
       "اُخْرُجْ مِنَ الْبِئْرِ",
       "اِرْجِعْ إِلَى أَبِيكَ"
      ],
      "a": 0,
      "ev": [
       "4.5"
      ],
      "ot": [
       "Üzülme ve korkma",
       "Kuyudan çık",
       "Babana dön"
      ]
     },
     {
      "q": "مَتَى جَاءَ الْإِخْوَةُ إِلَى أَبِيهِمْ؟",
      "qt": "Kardeşler babalarına ne zaman geldi?",
      "o": [
       "عِشَاءً",
       "صَبَاحًا",
       "بَعْدَ سَنَةٍ"
      ],
      "a": 0,
      "ev": [
       "5.0"
      ],
      "ot": [
       "Akşam",
       "Sabah",
       "Bir yıl sonra"
      ]
     },
     {
      "q": "كَيْفَ عَرَفَ يَعْقُوبُ أَنَّ الْقِصَّةَ مَوْضُوعَةٌ؟",
      "qt": "Yakup hikâyenin uydurma olduğunu nasıl anladı?",
      "o": [
       "لِأَنَّ الْقَمِيصَ كَانَ سَالِمًا",
       "لِأَنَّ الْإِخْوَةَ ضَحِكُوا",
       "لِأَنَّ الذِّئْبَ جَاءَ"
      ],
      "a": 0,
      "ev": [
       "5.5"
      ],
      "ot": [
       "Çünkü gömlek sapasağlamdı",
       "Çünkü kardeşler güldü",
       "Çünkü kurt geldi"
      ]
     },
     {
      "q": "هَلْ نَامَ يُوسُفُ فِي الْبِئْرِ؟",
      "qt": "Yusuf kuyuda uyudu mu?",
      "o": [
       "لَا، مَا نَامَ",
       "نَعَمْ، نَامَ عَلَى الْفِرَاشِ",
       "نَعَمْ، وَأَكَلَ الطَّعَامَ"
      ],
      "a": 0,
      "ev": [
       "6.4"
      ],
      "ot": [
       "Hayır, uyumadı",
       "Evet, yatakta uyudu",
       "Evet, ve yemek yedi"
      ]
     }
    ],
    "focus": {
     "title": "Yasak: لَا + cezimli fiil (لَا تَحْزَنْ)",
     "explain": "Birine «yapma!» demek için <b>لَا</b> + muzari fiil kullanılır ve fiilin sonu <b>sükûnlu (cezimli)</b> olur: <span class='ar-inline'>تَحْزَنُ ← لَا تَحْزَنْ</span> (üzülme!), <span class='ar-inline'>تَخَافُ ← لَا تَخَفْ</span> (korkma!), <span class='ar-inline'>تُخْبِرُ ← لَا تُخْبِرْ</span> (haber verme!). Ortadaki uzun harf bazen düşer: تَخَافُ → تَخَفْ.",
     "examples": [
      "لَا تَحْزَنْ",
      "لَا تَخَفْ",
      "لَا تُخْبِرْ بِهٰذِهِ الرُّؤْيَا"
     ],
     "items": [
      {
       "q": "لَا ____ وَلَا تَخَفْ.",
       "o": [
        "تَحْزَنْ",
        "تَحْزَنُ",
        "يَحْزَنُ"
       ],
       "a": 0
      },
      {
       "q": "لَا تَحْزَنْ وَلَا ____.",
       "o": [
        "تَخَفْ",
        "تَخَافُ",
        "خَافَ"
       ],
       "a": 0
      },
      {
       "q": "يَا وَلَدِي، لَا ____ إِخْوَتَكَ.",
       "o": [
        "تُخْبِرْ",
        "تُخْبِرُ",
        "أَخْبَرَ"
       ],
       "a": 0
      },
      {
       "q": "إِنَّ اللهَ ____، وَسَيَكُونُ لَكَ شَأْنٌ.",
       "o": [
        "مَعَكَ",
        "لَا مَعَكَ",
        "تَحْزَنْ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "أَلْقَى الْإِخْوَةُ يُوسُفَ فِي {بِئْرٍ} فِي الْغَابَةِ. وَكَانَتِ الْبِئْرُ عَمِيقَةً {مُظْلِمَةً}. وَصَبَغُوا {قَمِيصَ} يُوسُفَ بِالدَّمِ. وَقَالُوا: أَكَلَهُ {الذِّئْبُ}. وَعَرَفَ يَعْقُوبُ أَنَّهُ دَمٌ {كَذِبٌ}."
    },
    "think": {
     "q": "لِمَاذَا قَالَ يَعْقُوبُ «فَصَبْرٌ جَمِيلٌ» وَلَمْ يَغْضَبْ؟",
     "qt": "Yakup neden öfkelenmek yerine «güzel bir sabır» dedi?",
     "model": "Yakup bir peygamberdi; hikâyenin uydurma olduğunu anladı ama işi Allah'a bıraktı. «Güzel sabır», şikâyet etmeden, ümidi kaybetmeden sabretmektir. Hüznünü saklamadı ama kimseye kötülük de yapmadı."
    },
    "retell": [
     "الْغَابَةُ",
     "الْبِئْرُ",
     "لَا تَحْزَنْ",
     "الْقَمِيصُ",
     "الدَّمُ",
     "صَبْرٌ جَمِيلٌ"
    ],
    "quran": [
     {
      "ar": "وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ",
      "ref": "Yûsuf 12:16",
      "tr": "Akşam ağlayarak babalarına geldiler.",
      "inText": "«وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ»"
     },
     {
      "ar": "قَالُوا يَا أَبَانَا إِنَّا ذَهَبْنَا نَسْتَبِقُ وَتَرَكْنَا يُوسُفَ عِنْدَ مَتَاعِنَا فَأَكَلَهُ الذِّئْبُ",
      "ref": "Yûsuf 12:17",
      "tr": "Dediler ki: Babamız, biz yarışmaya gittik, Yusuf'u eşyalarımızın yanında bıraktık; onu kurt yedi.",
      "inText": "«إِنَّا ذَهَبْنَا نَسْتَبِقُ...»"
     },
     {
      "ar": "وَجَاءُوا عَلَى قَمِيصِهِ بِدَمٍ كَذِبٍ قَالَ بَلْ سَوَّلَتْ لَكُمْ أَنْفُسُكُمْ أَمْرًا فَصَبْرٌ جَمِيلٌ",
      "ref": "Yûsuf 12:18",
      "tr": "Gömleğinin üstünde yalancı bir kanla geldiler. Dedi ki: Hayır, nefisleriniz sizi bir işe sürükledi; artık bana düşen güzelce sabretmektir.",
      "inText": "«بِدَمٍ كَذِبٍ» · «فَصَبْرٌ جَمِيلٌ»"
     }
    ]
   },
   "sections": [
    {
     "n": 4,
     "title_ar": "إِلَى الْغَابَةِ",
     "title_tr": "Ormana",
     "s": [
      [
       "وَفَرِحَ الْإِخْوَةُ كَثِيرًا لَمَّا أَذِنَ يَعْقُوبُ لِيُوسُفَ.",
       "Yakup Yusuf'a izin verince kardeşler çok sevindi."
      ],
      [
       "وَذَهَبُوا إِلَى غَابَةٍ وَأَلْقَوْا يُوسُفَ فِي بِئْرٍ فِي الْغَابَةِ وَلَمْ يَرْحَمُوا يُوسُفَ الصَّغِيرَ، وَلَمْ يَرْحَمُوا يَعْقُوبَ الشَّيْخَ الْكَبِيرَ.",
       "Bir ormana gittiler ve Yusuf'u ormandaki bir kuyuya attılar; ne küçük Yusuf'a acıdılar ne de yaşlı Yakup'a."
      ],
      [
       "وَكَانَ يُوسُفُ وَلَدًا صَغِيرًا، وَكَانَ قَلْبُهُ صَغِيرًا.",
       "Yusuf küçük bir çocuktu, kalbi de küçüktü."
      ],
      [
       "وَكَانَتِ الْبِئْرُ عَمِيقَةً، وَكَانَتِ الْبِئْرُ مُظْلِمَةً.",
       "Kuyu derindi, kuyu karanlıktı."
      ],
      [
       "وَكَانَ يُوسُفُ وَحِيدًا.",
       "Yusuf yapayalnızdı."
      ],
      [
       "وَلٰكِنَّ اللهَ بَشَّرَ يُوسُفَ وَقَالَ لَهُ: لَا تَحْزَنْ وَلَا تَخَفْ.",
       "Fakat Allah Yusuf'u müjdeledi ve ona dedi ki: Üzülme ve korkma."
      ],
      [
       "إِنَّ اللهَ مَعَكَ، وَسَيَكُونُ لَكَ شَأْنٌ.",
       "Allah seninle beraberdir; senin büyük bir şanın olacak."
      ],
      [
       "سَيَحْضُرُ إِلَيْكَ الْإِخْوَةُ وَتُخْبِرُهُمْ بِمَا فَعَلُوهُ.",
       "Kardeşlerin sana gelecek ve sen onlara yaptıklarını haber vereceksin."
      ],
      [
       "وَلَمَّا فَرَغُوا مِنْ شَأْنِهِمْ وَأَلْقَوْا يُوسُفَ فِي الْبِئْرِ اجْتَمَعُوا وَقَالُوا:",
       "İşlerini bitirip Yusuf'u kuyuya atınca toplandılar ve dediler ki:"
      ],
      [
       "مَاذَا نَقُولُ لِأَبِينَا؟",
       "Babamıza ne diyeceğiz?"
      ],
      [
       "قَالَ بَعْضُهُمْ: كَانَ أَبُونَا يَقُولُ أَخَافُ أَنْ يَأْكُلَهُ الذِّئْبُ، فَنَقُولُ لَهُ يَا أَبَانَا قَدْ أَكَلَهُ الذِّئْبُ.",
       "Bazıları dedi ki: Babamız «Onu kurdun yemesinden korkuyorum» diyordu; biz de ona «Babamız, onu kurt yedi» deriz."
      ],
      [
       "وَوَافَقَ الْإِخْوَةُ عَلَى ذٰلِكَ، وَقَالُوا نَعَمْ نَقُولُ لَهُ يَا أَبَانَا قَدْ أَكَلَهُ الذِّئْبُ.",
       "Kardeşler buna razı oldu ve dediler ki: Evet, ona «Babamız, onu kurt yedi» deriz."
      ],
      [
       "قَالَ بَعْضُ الْإِخْوَةِ: وَلٰكِنْ مَا آيَةُ ذٰلِكَ؟ قَالُوا: آيَةُ ذٰلِكَ الدَّمُ.",
       "Kardeşlerden biri dedi ki: Ama bunun delili ne olacak? Dediler ki: Delili kan."
      ],
      [
       "وَأَخَذَ الْإِخْوَةُ كَبْشًا وَذَبَحُوهُ.",
       "Kardeşler bir koç alıp kestiler."
      ],
      [
       "وَأَخَذُوا قَمِيصَ يُوسُفَ وَصَبَغُوهُ.",
       "Yusuf'un gömleğini alıp (kanla) boyadılar."
      ],
      [
       "وَفَرِحَ الْإِخْوَةُ جِدًّا، وَقَالُوا الْآنَ يُصَدِّقُ أَبُونَا.",
       "Kardeşler çok sevindi ve dediler ki: Şimdi babamız inanır."
      ]
     ]
    },
    {
     "n": 5,
     "title_ar": "أَمَامَ يَعْقُوبَ",
     "title_tr": "Yakup'un karşısında",
     "s": [
      [
       "«وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ».",
       "«Akşam ağlayarak babalarına geldiler.»"
      ],
      [
       "«قَالُوا يَا أَبَانَا إِنَّا ذَهَبْنَا نَسْتَبِقُ وَتَرَكْنَا يُوسُفَ عِنْدَ مَتَاعِنَا فَأَكَلَهُ الذِّئْبُ».",
       "«Dediler ki: Babamız, biz yarışmaya gittik, Yusuf'u eşyalarımızın yanında bıraktık; onu kurt yedi.»"
      ],
      [
       "«وَجَاءُوا عَلَى قَمِيصِهِ بِدَمٍ كَذِبٍ» وَقَالُوا هٰذَا دَمُ يُوسُفَ!",
       "«Gömleğinin üstünde yalancı bir kanla geldiler» ve dediler ki: Bu Yusuf'un kanı!"
      ],
      [
       "وَكَانَ أَبُوهُمْ يَعْقُوبُ نَبِيًّا، وَكَانَ شَيْخًا كَبِيرًا، وَكَانَ أَعْقَلَ مِنْ أَوْلَادِهِ.",
       "Babaları Yakup bir peygamberdi; yaşlıydı ve oğullarından daha akıllıydı."
      ],
      [
       "وَكَانَ يَعْقُوبُ يَعْرِفُ أَنَّ الذِّئْبَ إِذَا أَكَلَ إِنْسَانًا جَرَحَهُ وَشَقَّ قَمِيصَهُ.",
       "Yakup bilirdi ki kurt bir insanı yerse onu yaralar ve gömleğini yırtar."
      ],
      [
       "وَكَانَ قَمِيصُ يُوسُفَ سَالِمًا، وَكَانَ مَصْبُوغًا فِي الدَّمِ.",
       "Yusuf'un gömleği ise sapasağlamdı; sadece kana boyanmıştı."
      ],
      [
       "فَعَرَفَ يَعْقُوبُ أَنَّهُ دَمٌ كَذِبٌ، وَأَنَّ قِصَّةَ الذِّئْبِ قِصَّةٌ مَوْضُوعَةٌ.",
       "Yakup bunun yalancı bir kan olduğunu ve kurt hikâyesinin uydurma olduğunu anladı."
      ],
      [
       "فَقَالَ لِأَوْلَادِهِ: بَلْ هٰذِهِ قِصَّةٌ وَضَعْتُمُوهَا «فَصَبْرٌ جَمِيلٌ» وَحَزِنَ يَعْقُوبُ عَلَى يُوسُفَ حُزْنًا شَدِيدًا، وَلٰكِنَّهُ صَبَرَ صَبْرًا جَمِيلًا.",
       "Oğullarına dedi ki: Hayır, bu sizin uydurduğunuz bir hikâye; «artık bana düşen güzelce sabretmektir.» Yakup Yusuf için çok üzüldü ama güzelce sabretti."
      ]
     ]
    },
    {
     "n": 6,
     "title_ar": "يُوسُفُ فِي الْبِئْرِ",
     "title_tr": "Yusuf kuyuda",
     "s": [
      [
       "وَرَجَعَ الْإِخْوَةُ إِلَى الْبَيْتِ، وَتَرَكُوا يُوسُفَ فِي الْبِئْرِ.",
       "Kardeşler eve döndü ve Yusuf'u kuyuda bıraktılar."
      ],
      [
       "وَأَكَلَ الْإِخْوَةُ الطَّعَامَ، وَنَامُوا عَلَى الْفِرَاشِ.",
       "Kardeşler yemek yediler ve yataklarında uyudular."
      ],
      [
       "وَيُوسُفُ فِي الْبِئْرِ، لَا فِرَاشَ وَلَا طَعَامَ.",
       "Yusuf ise kuyudaydı; ne yatak vardı ne yemek."
      ],
      [
       "وَنَسِيَ الْإِخْوَانُ يُوسُفَ، وَنَامُوا.",
       "Kardeşler Yusuf'u unuttu ve uyudu."
      ],
      [
       "وَمَا نَامَ يُوسُفُ، وَمَا نَسِيَ أَحَدًا.",
       "Yusuf uyumadı ve kimseyi unutmadı."
      ],
      [
       "وَبَقِيَ يَعْقُوبُ يَذْكُرُ يُوسُفَ، وَبَقِيَ يُوسُفُ يَذْكُرُ يَعْقُوبَ.",
       "Yakup Yusuf'u anıp durdu, Yusuf da Yakup'u anıp durdu."
      ],
      [
       "وَكَانَ يُوسُفُ فِي الْبِئْرِ، وَكَانَتِ الْبِئْرُ عَمِيقَةً.",
       "Yusuf kuyudaydı ve kuyu derindi."
      ],
      [
       "وَكَانَتِ الْبِئْرُ فِي الْغَابَةِ، وَكَانَتِ الْغَابَةُ مُوحِشَةً.",
       "Kuyu ormandaydı ve orman ıssız ve korkutucuydu."
      ],
      [
       "وَكَانَ ذٰلِكَ فِي اللَّيْلِ، وَكَانَ اللَّيْلُ مُظْلِمًا.",
       "Bu gece vaktiydi ve gece karanlıktı."
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "🏰",
   "title_ar": "مِنَ الْبِئْرِ إِلَى الْقَصْرِ",
   "title_tr": "Kuyudan saraya",
   "pre": {
    "predict": {
     "prompt_tr": "Başlık: «مِنَ الْبِئْرِ إِلَى الْقَصْرِ» (kuyudan saraya). Sence Yusuf kuyudan nasıl çıkacak?",
     "options": [
      [
       "يُخْرِجُهُ رَجُلٌ مِنَ الْمُسَافِرِينَ",
       "Yolculardan bir adam onu çıkaracak"
      ],
      [
       "يُخْرِجُهُ إِخْوَتُهُ",
       "Kardeşleri onu çıkaracak"
      ],
      [
       "يُخْرِجُهُ أَبُوهُ",
       "Babası onu çıkaracak"
      ]
     ]
    },
    "vocab": [
     [
      "دَلْوٌ",
      "kova",
      "🪣"
     ],
     [
      "غُلَامٌ",
      "oğlan çocuk, genç",
      "🧒"
     ],
     [
      "سُوقٌ",
      "çarşı, pazar",
      "🛒"
     ],
     [
      "يَشْتَرِي",
      "satın alır",
      "💰"
     ],
     [
      "قَصْرٌ",
      "saray",
      "🏰"
     ],
     [
      "سِجْنٌ",
      "zindan, hapishane",
      "⛓️"
     ]
    ]
   },
   "stop": {
    "section": 7,
    "after": 5,
    "prompt_tr": "Adam kovayı çıkardı ve kovada bir çocuk vardı! Sence ne yapacaklar?",
    "options": [
     [
      "يَبِيعُونَهُ فِي السُّوقِ",
      "Onu çarşıda satacaklar"
     ],
     [
      "يُرْجِعُونَهُ إِلَى أَبِيهِ",
      "Onu babasına götürecekler"
     ],
     [
      "يَتْرُكُونَهُ فِي الْغَابَةِ",
      "Onu ormanda bırakacaklar"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "عَطِشَ الْمُسَافِرُونَ فِي الطَّرِيقِ.",
     "أَدْلَى الرَّجُلُ دَلْوَهُ.",
     "أَخْرَجَ الرَّجُلُ غُلَامًا مِنَ الْبِئْرِ.",
     "اشْتَرَى الْعَزِيزُ يُوسُفَ.",
     "أَبَى يُوسُفُ الْخِيَانَةَ.",
     "دَخَلَ يُوسُفُ السِّجْنَ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا أَرْسَلَ الْمُسَافِرُونَ رَجُلًا إِلَى الْبِئْرِ؟",
      "qt": "Yolcular kuyuya neden bir adam gönderdi?",
      "o": [
       "لِيَأْتِيَ لَهُمْ بِالْمَاءِ",
       "لِيَبْحَثَ عَنْ يُوسُفَ",
       "لِيَنَامَ"
      ],
      "a": 0,
      "ev": [
       "7.2"
      ],
      "ot": [
       "Onlara su getirsin diye",
       "Yusuf'u arasın diye",
       "Uyusun diye"
      ]
     },
     {
      "q": "مَنِ اشْتَرَى يُوسُفَ؟",
      "qt": "Yusuf'u kim satın aldı?",
      "o": [
       "عَزِيزُ مِصْرَ",
       "مَلِكُ الشَّامِ",
       "يَعْقُوبُ"
      ],
      "a": 0,
      "ev": [
       "7.10"
      ],
      "ot": [
       "Mısır'ın azizi",
       "Şam'ın kralı",
       "Yakup"
      ]
     },
     {
      "q": "لِمَاذَا أَبَى يُوسُفُ الْخِيَانَةَ؟",
      "qt": "Yusuf neden ihaneti reddetti?",
      "o": [
       "لِأَنَّهُ يَخَافُ اللهَ",
       "لِأَنَّهُ كَانَ مَرِيضًا",
       "لِأَنَّهُ لَا يَعْرِفُ الْعَزِيزَ"
      ],
      "a": 0,
      "ev": [
       "8.3"
      ],
      "ot": [
       "Çünkü Allah'tan korkuyor",
       "Çünkü hastaydı",
       "Çünkü azizi tanımıyor"
      ]
     },
     {
      "q": "هَلْ كَانَ الْعَزِيزُ يَعْرِفُ أَنَّ يُوسُفَ بَرِيءٌ؟",
      "qt": "Aziz Yusuf'un suçsuz olduğunu biliyor muydu?",
      "o": [
       "نَعَمْ",
       "لَا"
      ],
      "a": 0,
      "ev": [
       "8.13"
      ],
      "ot": [
       "Evet",
       "Hayır"
      ]
     },
     {
      "q": "مَاذَا قَالَ يُوسُفُ عَنِ السِّجْنِ؟",
      "qt": "Yusuf zindan için ne dedi?",
      "o": [
       "السِّجْنُ أَحَبُّ إِلَيَّ",
       "أَنَا أَخَافُ السِّجْنَ",
       "لَا أَذْهَبُ إِلَى السِّجْنِ"
      ],
      "a": 0,
      "ev": [
       "8.11"
      ],
      "ot": [
       "Zindan bana daha sevimli",
       "Ben zindandan korkarım",
       "Zindana gitmem"
      ]
     }
    ],
    "focus": {
     "title": "Ani durum: فَإِذَا … (bir de ne görsün!)",
     "explain": "<b>فَإِذَا</b> + isim, beklenmedik bir şeyle karşılaşmayı anlatır; Türkçede «bir de ne görsün…» gibi: <span class='ar-inline'>نَزَعَ الدَّلْوَ فَإِذَا الدَّلْوُ ثَقِيلَةٌ</span> (kovayı çekti, bir de ne görsün kova ağır!). <span class='ar-inline'>أَخْرَجَهَا فَإِذَا فِي الدَّلْوِ غُلَامٌ</span> (çıkardı, bir de ne görsün kovada bir çocuk!).",
     "examples": [
      "فَإِذَا الدَّلْوُ ثَقِيلَةٌ",
      "فَإِذَا فِي الدَّلْوِ غُلَامٌ"
     ],
     "items": [
      {
       "q": "نَزَعَ الدَّلْوَ ____ الدَّلْوُ ثَقِيلَةٌ!",
       "o": [
        "فَإِذَا",
        "لِمَاذَا",
        "هَلْ"
       ],
       "a": 0
      },
      {
       "q": "أَخْرَجَهَا فَإِذَا فِي الدَّلْوِ ____!",
       "o": [
        "غُلَامٌ",
        "غُلَامًا",
        "غُلَامَ"
       ],
       "a": 0
      },
      {
       "q": "«يَا ____ هٰذَا غُلَامٌ».",
       "o": [
        "بُشْرَى",
        "أَبَتِ",
        "وَلَدِي"
       ],
       "a": 0
      },
      {
       "q": "مَنْ ____ هٰذَا الْغُلَامَ؟",
       "o": [
        "يَشْتَرِي",
        "يَشْرَبُ",
        "يَلْعَبُ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "أَدْلَى الرَّجُلُ {دَلْوَهُ} فِي الْبِئْرِ. وَأَخْرَجَهَا فَإِذَا فِي الدَّلْوِ {غُلَامٌ}! وَبَاعُوهُ فِي {السُّوقِ}. وَاشْتَرَاهُ {عَزِيزُ} مِصْرَ. وَقَالَ يُوسُفُ: {السِّجْنُ} أَحَبُّ إِلَيَّ."
    },
    "think": {
     "q": "لِمَاذَا قَالَ يُوسُفُ: «السِّجْنُ أَحَبُّ إِلَيَّ»؟",
     "qt": "Yusuf neden «Zindan bana daha sevimli» dedi?",
     "model": "Yusuf için Allah'a karşı gelmek ve kendisine iyilik eden efendisine ihanet etmek zindandan daha ağırdı. Özgürlüğünü kaybetmeyi, dürüstlüğünü kaybetmeye tercih etti."
    },
    "retell": [
     "الْبِئْرُ",
     "الدَّلْوُ",
     "غُلَامٌ",
     "الْعَزِيزُ",
     "أَمِينٌ",
     "السِّجْنُ"
    ],
    "quran": [
     {
      "ar": "قَالَ يَا بُشْرَى هٰذَا غُلَامٌ",
      "ref": "Yûsuf 12:19",
      "tr": "Dedi ki: Müjde! İşte bir oğlan!",
      "inText": "«يَا بُشْرَى هٰذَا غُلَامٌ»"
     },
     {
      "ar": "وَشَرَوْهُ بِثَمَنٍ بَخْسٍ دَرَاهِمَ مَعْدُودَةٍ",
      "ref": "Yûsuf 12:20",
      "tr": "Onu ucuz bir fiyata, birkaç dirheme sattılar.",
      "inText": "بِدَرَاهِمَ مَعْدُودَةٍ"
     },
     {
      "ar": "مَا هٰذَا بَشَرًا إِنْ هٰذَا إِلَّا مَلَكٌ كَرِيمٌ",
      "ref": "Yûsuf 12:31",
      "tr": "Bu bir insan değil; bu ancak değerli bir melektir.",
      "inText": "«مَا هٰذَا بَشَرًا...»"
     },
     {
      "ar": "قَالَ رَبِّ السِّجْنُ أَحَبُّ إِلَيَّ مِمَّا يَدْعُونَنِي إِلَيْهِ",
      "ref": "Yûsuf 12:33",
      "tr": "Dedi ki: Rabbim! Zindan bana, bunların beni çağırdığı şeyden daha sevimlidir.",
      "inText": "«السِّجْنُ أَحَبُّ إِلَيَّ»"
     }
    ]
   },
   "sections": [
    {
     "n": 7,
     "title_ar": "مِنَ الْبِئْرِ إِلَى الْقَصْرِ",
     "title_tr": "Kuyudan saraya",
     "s": [
      [
       "وَكَانَتْ جَمَاعَةٌ تُسَافِرُ فِي هٰذِهِ الْغَابَةِ.",
       "Bir kafile bu ormanda yolculuk ediyordu."
      ],
      [
       "وَعَطِشُوا فِي الطَّرِيقِ، وَبَحَثُوا عَنْ بِئْرٍ.",
       "Yolda susadılar ve bir kuyu aradılar."
      ],
      [
       "وَرَأَوْا بِئْرًا، فَأَرْسَلُوا إِلَيْهَا رَجُلًا يَأْتِي لَهُمْ بِالْمَاءِ.",
       "Bir kuyu gördüler ve onlara su getirmesi için kuyuya bir adam gönderdiler."
      ],
      [
       "جَاءَ الرَّجُلُ إِلَى الْبِئْرِ، وَأَدْلَى دَلْوَهُ.",
       "Adam kuyuya geldi ve kovasını sarkıttı."
      ],
      [
       "وَنَزَعَ الدَّلْوَ، فَإِذَا الدَّلْوُ ثَقِيلَةٌ!",
       "Kovayı çekti; bir de ne görsün, kova ağır!"
      ],
      [
       "وَأَخْرَجَهَا فَإِذَا فِي الدَّلْوِ غُلَامٌ!",
       "Kovayı çıkardı; bir de ne görsün, kovada bir çocuk!"
      ],
      [
       "دَهِشَ الرَّجُلُ وَنَادَى.",
       "Adam hayrete düştü ve seslendi:"
      ],
      [
       "«يَا بُشْرَى هٰذَا غُلَامٌ».",
       "«Müjde! İşte bir çocuk.»"
      ],
      [
       "وَفَرِحَ النَّاسُ جِدًّا وَأَخْفَوْهُ.",
       "İnsanlar çok sevindi ve onu sakladılar."
      ],
      [
       "وَوَصَلُوا إِلَى مِصْرَ، وَقَامُوا فِي السُّوقِ وَنَادَوْا: مَنْ يَشْتَرِي هٰذَا الْغُلَامَ؟ مَنْ يَشْتَرِي هٰذَا الْغُلَامَ؟",
       "Mısır'a vardılar, çarşıda durup seslendiler: Bu çocuğu kim satın alır? Bu çocuğu kim satın alır?"
      ],
      [
       "اشْتَرَى عَزِيزُ مِصْرَ يُوسُفَ بِدَرَاهِمَ مَعْدُودَةٍ.",
       "Mısır'ın azizi Yusuf'u birkaç dirheme satın aldı."
      ],
      [
       "وَبَاعَهُ التُّجَّارُ وَمَا عَرَفُوا يُوسُفَ.",
       "Tüccarlar onu sattılar ama Yusuf'un kim olduğunu bilmediler."
      ],
      [
       "وَذَهَبَ بِهِ الْعَزِيزُ إِلَى قَصْرِهِ، وَقَالَ لِامْرَأَتِهِ أَكْرِمِي يُوسُفَ، إِنَّهُ وَلَدٌ رَشِيدٌ.",
       "Aziz onu sarayına götürdü ve karısına dedi ki: Yusuf'a iyi bak, o akıllı bir çocuk."
      ]
     ]
    },
    {
     "n": 8,
     "title_ar": "الْوَفَاءُ وَالْأَمَانَةُ",
     "title_tr": "Vefa ve emanet",
     "s": [
      [
       "وَرَاوَدَتِ امْرَأَةُ الْعَزِيزِ يُوسُفَ عَلَى الْخِيَانَةِ.",
       "Azizin karısı Yusuf'u ihanete çağırdı."
      ],
      [
       "وَلٰكِنْ يُوسُفُ أَبَى، وَقَالَ: كَلَّا!",
       "Fakat Yusuf reddetti ve dedi ki: Asla!"
      ],
      [
       "أَنَا لَا أَخُونُ سَيِّدِي، إِنَّهُ أَحْسَنَ إِلَيَّ وَأَكْرَمَنِي.",
       "Ben efendime ihanet etmem; o bana iyilik etti ve beni ağırladı."
      ],
      [
       "إِنِّي أَخَافُ اللهَ.",
       "Ben Allah'tan korkarım."
      ],
      [
       "وَغَضِبَتِ امْرَأَةُ الْعَزِيزِ وَشَكَتْ إِلَى زَوْجِهَا.",
       "Azizin karısı kızdı ve kocasına şikâyet etti."
      ],
      [
       "وَعَرَفَ الْعَزِيزُ أَنَّ الْمَرْأَةَ كَاذِبَةٌ.",
       "Aziz kadının yalan söylediğini anladı."
      ],
      [
       "وَعَرَفَ أَنَّ يُوسُفَ أَمِينٌ.",
       "Ve Yusuf'un güvenilir olduğunu anladı."
      ],
      [
       "فَقَالَ لِزَوْجِهِ «إِنَّكِ كُنْتِ مِنَ الْخَاطِئِينَ».",
       "Karısına dedi ki: «Sen gerçekten hata edenlerdensin.»"
      ],
      [
       "وَعُرِفَ يُوسُفُ فِي مِصْرَ بِجَمَالِهِ، وَإِذَا رَآهُ أَحَدٌ قَالَ «مَا هٰذَا بَشَرًا، إِنْ هٰذَا إِلَّا مَلَكٌ كَرِيمٌ».",
       "Yusuf Mısır'da güzelliğiyle tanındı; biri onu görünce derdi ki: «Bu bir insan değil; bu ancak değerli bir melektir.»"
      ],
      [
       "وَاشْتَدَّ غَضَبُ الْمَرْأَةِ وَقَالَتْ لِيُوسُفَ:",
       "Kadının öfkesi arttı ve Yusuf'a dedi ki:"
      ],
      [
       "إِذَنْ تَذْهَبُ إِلَى السِّجْنِ!",
       "Öyleyse zindana gideceksin!"
      ],
      [
       "قَالَ يُوسُفُ: «السِّجْنُ أَحَبُّ إِلَيَّ».",
       "Yusuf dedi ki: «Zindan benim için daha sevimlidir.»"
      ],
      [
       "وَبَعْدَ أَيَّامٍ رَأَى الْعَزِيزُ أَنْ يُرْسِلَ يُوسُفَ إِلَى السِّجْنِ.",
       "Birkaç gün sonra aziz Yusuf'u zindana göndermeye karar verdi."
      ],
      [
       "وَكَانَ الْعَزِيزُ يَعْرِفُ أَنَّ يُوسُفَ بَرِيءٌ.",
       "Oysa aziz Yusuf'un suçsuz olduğunu biliyordu."
      ],
      [
       "وَدَخَلَ يُوسُفُ السِّجْنَ.",
       "Ve Yusuf zindana girdi."
      ]
     ]
    }
   ]
  },
  {
   "id": 4,
   "emoji": "⛓️",
   "title_ar": "مَوْعِظَةُ السِّجْنِ",
   "title_tr": "Zindandaki öğüt",
   "pre": {
    "predict": {
     "prompt_tr": "Başlık: «مَوْعِظَةُ السِّجْنِ» (zindandaki öğüt). Sence Yusuf zindanda ne yapacak?",
     "options": [
      [
       "يَدْعُو أَهْلَ السِّجْنِ إِلَى اللهِ",
       "Zindandakileri Allah'a davet edecek"
      ],
      [
       "يَنَامُ وَيَحْزَنُ",
       "Uyuyup üzülecek"
      ],
      [
       "يَهْرُبُ مِنَ السِّجْنِ",
       "Zindandan kaçacak"
      ]
     ]
    },
    "vocab": [
     [
      "مَوْعِظَةٌ",
      "öğüt",
      "🗣️"
     ],
     [
      "تَأْوِيلٌ",
      "yorum (rüya yorumu)",
      "🔮"
     ],
     [
      "خُبْزٌ",
      "ekmek",
      "🍞"
     ],
     [
      "طَيْرٌ",
      "kuş(lar)",
      "🐦"
     ],
     [
      "رَحِيمٌ",
      "merhametli",
      "💚"
     ],
     [
      "حِكْمَةٌ",
      "hikmet, bilgelik",
      "🦉"
     ]
    ]
   },
   "stop": {
    "section": 9,
    "after": 9,
    "prompt_tr": "İki adam rüyalarının yorumunu sordu. Yusuf rüya yorumunu biliyor. Sence hemen yorumlayacak mı?",
    "options": [
     [
      "لَا، يَبْدَأُ بِالْمَوْعِظَةِ",
      "Hayır, önce öğüt verecek"
     ],
     [
      "نَعَمْ، يُخْبِرُهُمَا فَوْرًا",
      "Evet, hemen söyleyecek"
     ],
     [
      "لَا يُخْبِرُهُمَا أَبَدًا",
      "Hiç söylemeyecek"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "دَخَلَ يُوسُفُ السِّجْنَ.",
     "أَحَبَّ أَهْلُ السِّجْنِ يُوسُفَ.",
     "دَخَلَ مَعَهُ السِّجْنَ رَجُلَانِ.",
     "قَصَّ الرَّجُلَانِ رُؤْيَاهُمَا.",
     "قَالَ يُوسُفُ: أُخْبِرُكُمَا قَبْلَ الطَّعَامِ.",
     "بَدَأَ يُوسُفُ مَوْعِظَتَهُ."
    ],
    "questions": [
     {
      "q": "مَاذَا عَرَفَ أَهْلُ السِّجْنِ عَنْ يُوسُفَ؟",
      "qt": "Zindandakiler Yusuf hakkında ne öğrendi?",
      "o": [
       "أَنَّهُ شَابٌّ كَرِيمٌ عِنْدَهُ عِلْمٌ",
       "أَنَّهُ سَارِقٌ",
       "أَنَّهُ مَلِكٌ"
      ],
      "a": 0,
      "ev": [
       "9.0",
       "9.1"
      ],
      "ot": [
       "Onun ilim sahibi, değerli bir genç olduğunu",
       "Onun hırsız olduğunu",
       "Onun kral olduğunu"
      ]
     },
     {
      "q": "مَاذَا رَأَى الرَّجُلُ الْآخَرُ فِي الْمَنَامِ؟",
      "qt": "İkinci adam rüyasında ne gördü?",
      "o": [
       "يَحْمِلُ خُبْزًا تَأْكُلُ الطَّيْرُ مِنْهُ",
       "يَعْصِرُ خَمْرًا",
       "يَرَى أَحَدَ عَشَرَ كَوْكَبًا"
      ],
      "a": 0,
      "ev": [
       "9.7"
      ],
      "ot": [
       "Kuşların yediği bir ekmek taşıyor",
       "Şarap sıkıyor",
       "On bir yıldız görüyor"
      ]
     },
     {
      "q": "مَنْ كَانَ النَّاسُ يَعْبُدُونَ فِي زَمَانِ يُوسُفَ؟",
      "qt": "Yusuf'un zamanında insanlar kime tapıyordu?",
      "o": [
       "غَيْرَ اللهِ",
       "اللهَ وَحْدَهُ",
       "يُوسُفَ"
      ],
      "a": 0,
      "ev": [
       "9.11"
      ],
      "ot": [
       "Allah'tan başkasına",
       "Yalnız Allah'a",
       "Yusuf'a"
      ]
     },
     {
      "q": "كَيْفَ كَانَ يُوسُفُ فِي السِّجْنِ؟",
      "qt": "Yusuf zindanda nasıldı?",
      "o": [
       "حُرًّا جَرِيئًا",
       "خَائِفًا حَزِينًا",
       "غَاضِبًا"
      ],
      "a": 0,
      "ev": [
       "9.22"
      ],
      "ot": [
       "Özgür ve cesur",
       "Korkmuş ve üzgün",
       "Öfkeli"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَسْتَعْجِلْ يُوسُفُ؟",
      "qt": "Yusuf neden acele etmedi?",
      "o": [
       "لِيَجِدَ الْفُرْصَةَ لِلْمَوْعِظَةِ",
       "لِأَنَّهُ لَا يَعْرِفُ التَّأْوِيلَ",
       "لِأَنَّهُ كَانَ نَائِمًا"
      ],
      "a": 0,
      "ev": [
       "10.4",
       "10.11"
      ],
      "ot": [
       "Öğüt için fırsat bulmak için",
       "Çünkü yorumu bilmiyordu",
       "Çünkü uyuyordu"
      ]
     }
    ],
    "focus": {
     "title": "İkil (müsenna): رَجُلَانِ، رُؤْيَاهُمَا",
     "explain": "Arapçada iki kişi için ayrı bir biçim var: isim + <b>ـَانِ</b> (ötre hâli) ya da <b>ـَيْنِ</b> (üstün/esre hâli): <span class='ar-inline'>رَجُلٌ ← رَجُلَانِ</span> (iki adam), <span class='ar-inline'>الرَّجُلَيْنِ</span>. Fiil ve zamirler de ikil olur: <span class='ar-inline'>جَلَسَا</span> (ikisi oturdu), <span class='ar-inline'>رُؤْيَاهُمَا</span> (ikisinin rüyası), <span class='ar-inline'>أُخْبِرُكُمَا</span> (ikinize haber veririm).",
     "examples": [
      "دَخَلَ مَعَهُ السِّجْنَ رَجُلَانِ",
      "فَجَلَسَا وَاطْمَأَنَّا",
      "قَالَ لَهُمَا يُوسُفُ"
     ],
     "items": [
      {
       "q": "دَخَلَ مَعَهُ السِّجْنَ ____.",
       "o": [
        "رَجُلَانِ",
        "رَجُلٌ",
        "رِجَالٌ"
       ],
       "a": 0
      },
      {
       "q": "فَ____ وَاطْمَأَنَّا.",
       "o": [
        "جَلَسَا",
        "جَلَسَ",
        "جَلَسُوا"
       ],
       "a": 0
      },
      {
       "q": "ثُمَّ قَالَ ____ يُوسُفُ.",
       "o": [
        "لَهُمَا",
        "لَهُ",
        "لَهُمْ"
       ],
       "a": 0
      },
      {
       "q": "إِنَّ الْحَاجَةَ سَاقَتِ ____ إِلَيَّ.",
       "o": [
        "الرَّجُلَيْنِ",
        "الرَّجُلَ",
        "الرِّجَالُ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "دَخَلَ يُوسُفُ {السِّجْنَ}. وَكَانَ فِي صَدْرِهِ قَلْبٌ {رَحِيمٌ}. وَدَخَلَ مَعَهُ رَجُلَانِ وَقَصَّا عَلَيْهِ {رُؤْيَاهُمَا}. وَلٰكِنْ يُوسُفُ لَمْ {يَسْتَعْجِلْ}. وَوَجَدَ يُوسُفُ {الْفُرْصَةَ} فَبَدَأَ مَوْعِظَتَهُ."
    },
    "think": {
     "q": "لِمَاذَا بَدَأَ يُوسُفُ بِالْمَوْعِظَةِ قَبْلَ التَّأْوِيلِ؟",
     "qt": "Yusuf neden yorumdan önce öğütle başladı?",
     "model": "İhtiyaç sahibi kişi dikkatle dinler. Yusuf iki adamın yoruma ihtiyaç duyduğu bu anı bir fırsat bildi; önce onları rahatlattı, sonra en önemli mesajı (tevhidi) verdi. Bu, öğretmenler için de bir yöntem: doğru anı beklemek."
    },
    "retell": [
     "السِّجْنُ",
     "رَجُلَانِ",
     "رُؤْيَا",
     "التَّأْوِيلُ",
     "لَمْ يَسْتَعْجِلْ",
     "الْمَوْعِظَةُ"
    ],
    "quran": [
     {
      "ar": "وَدَخَلَ مَعَهُ السِّجْنَ فَتَيَانِ قَالَ أَحَدُهُمَا إِنِّي أَرَانِي أَعْصِرُ خَمْرًا وَقَالَ الْآخَرُ إِنِّي أَرَانِي أَحْمِلُ فَوْقَ رَأْسِي خُبْزًا تَأْكُلُ الطَّيْرُ مِنْهُ",
      "ref": "Yûsuf 12:36",
      "tr": "Onunla birlikte zindana iki genç girdi. Biri: Ben kendimi şarap sıkarken görüyorum, dedi. Öteki: Ben de kendimi başımın üstünde ekmek taşırken görüyorum, kuşlar ondan yiyor, dedi.",
      "inText": "«إِنِّي أَرَانِي أَعْصِرُ خَمْرًا» · «...تَأْكُلُ الطَّيْرُ مِنْهُ»"
     },
     {
      "ar": "ذٰلِكُمَا مِمَّا عَلَّمَنِي رَبِّي",
      "ref": "Yûsuf 12:37",
      "tr": "Bu, Rabbimin bana öğrettiklerindendir.",
      "inText": "«ذٰلِكُمَا مِمَّا عَلَّمَنِي رَبِّي»"
     }
    ]
   },
   "sections": [
    {
     "n": 9,
     "title_ar": "مَوْعِظَةُ السِّجْنِ",
     "title_tr": "Zindandaki öğüt",
     "s": [
      [
       "وَدَخَلَ يُوسُفُ السِّجْنَ، وَعَرَفَ أَهْلُ السِّجْنِ جَمِيعًا أَنَّ يُوسُفَ شَابٌّ كَرِيمٌ.",
       "Yusuf zindana girdi; zindandakilerin hepsi Yusuf'un cömert ve değerli bir genç olduğunu anladı."
      ],
      [
       "وَأَنَّ يُوسُفَ عِنْدَهُ عِلْمٌ عَظِيمٌ.",
       "Ve Yusuf'un büyük bir ilmi olduğunu."
      ],
      [
       "وَأَنَّ يُوسُفَ فِي صَدْرِهِ قَلْبٌ رَحِيمٌ.",
       "Ve Yusuf'un göğsünde merhametli bir kalp olduğunu."
      ],
      [
       "وَأَحَبَّ أَهْلُ السِّجْنِ يُوسُفَ وَأَكْرَمُوهُ.",
       "Zindandakiler Yusuf'u sevdi ve ona saygı gösterdi."
      ],
      [
       "وَفَرِحَ النَّاسُ بِيُوسُفَ وَعَظَّمُوهُ.",
       "İnsanlar Yusuf'a sevindi ve onu yücelttiler."
      ],
      [
       "وَدَخَلَ مَعَهُ السِّجْنَ رَجُلَانِ وَقَصَّا عَلَيْهِ رُؤْيَاهُمَا:",
       "Onunla birlikte zindana iki adam girdi ve ona rüyalarını anlattılar:"
      ],
      [
       "«وَقَالَ أَحَدُهُمَا إِنِّي أَرَانِي أَعْصِرُ خَمْرًا»",
       "«Biri dedi ki: Ben (rüyamda) kendimi şarap sıkarken görüyorum.»"
      ],
      [
       "«وَقَالَ الْآخَرُ إِنِّي أَرَانِي أَحْمِلُ فَوْقَ رَأْسِي خُبْزًا تَأْكُلُ الطَّيْرُ مِنْهُ».",
       "«Öteki dedi ki: Ben de kendimi başımın üstünde ekmek taşırken görüyorum; kuşlar ondan yiyor.»"
      ],
      [
       "وَسَأَلَا يُوسُفَ عَنِ التَّأْوِيلِ.",
       "Yusuf'a rüyanın yorumunu sordular."
      ],
      [
       "وَكَانَ يُوسُفُ عَالِمًا بِتَأْوِيلِ الرُّؤْيَا.",
       "Yusuf rüya yorumunu bilirdi."
      ],
      [
       "وَكَانَ يُوسُفُ نَبِيًّا مِنَ الْأَنْبِيَاءِ.",
       "Yusuf peygamberlerden bir peygamberdi."
      ],
      [
       "وَكَانَ النَّاسُ فِي زَمَانِهِ يَعْبُدُونَ غَيْرَ اللهِ.",
       "Onun zamanında insanlar Allah'tan başkasına tapıyordu."
      ],
      [
       "وَوَضَعُوا أَرْبَابًا كَثِيرَةً مِنْ عِنْدِ أَنْفُسِهِمْ.",
       "Kendi kafalarından pek çok rab uydurmuşlardı."
      ],
      [
       "وَقَالُوا هٰذَا رَبُّ الْبَرِّ، وَهٰذَا رَبُّ الْبَحْرِ، وَهٰذَا رَبُّ الرِّزْقِ، وَهٰذَا رَبُّ الْمَطَرِ.",
       "Derlerdi ki: Bu karanın rabbi, bu denizin rabbi, bu rızkın rabbi, bu da yağmurun rabbi."
      ],
      [
       "وَكَانَ يُوسُفُ يَرَى كُلَّ ذٰلِكَ وَيَضْحَكُ.",
       "Yusuf bütün bunları görür ve gülerdi."
      ],
      [
       "وَكَانَ يُوسُفُ يَعْلَمُ كُلَّ ذٰلِكَ وَيَبْكِي.",
       "Yusuf bütün bunları bilir ve ağlardı."
      ],
      [
       "وَكَانَ يُوسُفُ يُرِيدُ أَنْ يَدْعُوَهُمْ إِلَى اللهِ.",
       "Yusuf onları Allah'a davet etmek istiyordu."
      ],
      [
       "وَقَدْ أَرَادَ اللهُ أَنْ يَكُونَ ذٰلِكَ فِي السِّجْنِ.",
       "Allah da bunun zindanda olmasını dilemişti."
      ],
      [
       "أَلَا يَسْتَحِقُّ أَهْلُ السِّجْنِ الْمَوْعِظَةَ؟",
       "Zindandakiler öğüdü hak etmiyor mu?"
      ],
      [
       "أَلَا يَسْتَحِقُّ أَهْلُ السِّجْنِ الرَّحْمَةَ؟",
       "Zindandakiler merhameti hak etmiyor mu?"
      ],
      [
       "أَلَيْسَ أَهْلُ السِّجْنِ عِبَادَ اللهِ؟",
       "Zindandakiler Allah'ın kulları değil mi?"
      ],
      [
       "أَلَيْسَ أَهْلُ السِّجْنِ بَنِي آدَمَ؟",
       "Zindandakiler Âdemoğulları değil mi?"
      ],
      [
       "كَانَ يُوسُفُ فِي السِّجْنِ وَلٰكِنَّهُ كَانَ حُرًّا جَرِيئًا.",
       "Yusuf zindandaydı ama özgür ve cesurdu."
      ],
      [
       "كَانَ يُوسُفُ فَقِيرًا وَلٰكِنَّهُ كَانَ جَوَادًا سَخِيًّا.",
       "Yusuf fakirdi ama cömert ve eli açıktı."
      ],
      [
       "إِنَّ الْأَنْبِيَاءَ يَجْهَرُونَ بِالْحَقِّ فِي كُلِّ مَكَانٍ.",
       "Peygamberler her yerde hakkı açıkça söyler."
      ],
      [
       "إِنَّ الْأَنْبِيَاءَ يَجُودُونَ بِالْخَيْرِ فِي كُلِّ زَمَانٍ.",
       "Peygamberler her zaman iyilik dağıtır."
      ]
     ]
    },
    {
     "n": 10,
     "title_ar": "حِكْمَةُ يُوسُفَ",
     "title_tr": "Yusuf'un hikmeti",
     "s": [
      [
       "قَالَ يُوسُفُ فِي نَفْسِهِ:",
       "Yusuf içinden dedi ki:"
      ],
      [
       "إِنَّ الْحَاجَةَ سَاقَتِ الرَّجُلَيْنِ إِلَيَّ.",
       "İhtiyaç bu iki adamı bana getirdi."
      ],
      [
       "وَإِنَّ صَاحِبَ الْحَاجَةِ يَلِينُ وَيَخْضَعُ.",
       "İhtiyaç sahibi yumuşar ve boyun eğer."
      ],
      [
       "وَإِنَّ صَاحِبَ الْحَاجَةِ يُطِيعُ وَيَسْمَعُ.",
       "İhtiyaç sahibi itaat eder ve dinler."
      ],
      [
       "فَلَوْ قُلْتُ لَهُمَا شَيْئًا لَسَمِعَا وَسَمِعَ أَهْلُ السِّجْنِ، وَلٰكِنْ يُوسُفُ لَمْ يَسْتَعْجِلْ.",
       "Onlara bir şey söylesem dinlerler, zindandakiler de dinler. Ama Yusuf acele etmedi."
      ],
      [
       "بَلْ قَالَ لَهُمَا:",
       "Bilakis onlara dedi ki:"
      ],
      [
       "أَنَا أُخْبِرُكُمَا بِتَأْوِيلِ الرُّؤْيَا قَبْلَ أَنْ يَأْتِيَكُمَا طَعَامُكُمَا.",
       "Yemeğiniz size gelmeden önce rüyanın yorumunu size haber vereceğim."
      ],
      [
       "فَجَلَسَا وَاطْمَأَنَّا.",
       "İkisi oturdu ve içleri rahatladı."
      ],
      [
       "ثُمَّ قَالَ لَهُمَا يُوسُفُ:",
       "Sonra Yusuf onlara dedi ki:"
      ],
      [
       "أَنَا عَالِمٌ بِتَأْوِيلِ الرُّؤْيَا، «ذٰلِكُمَا مِمَّا عَلَّمَنِي رَبِّي».",
       "Ben rüya yorumunu bilirim; «bu, Rabbimin bana öğrettiklerindendir.»"
      ],
      [
       "فَفَرِحَا وَاطْمَأَنَّا.",
       "İkisi sevindi ve rahatladı."
      ],
      [
       "وَهُنَا وَجَدَ يُوسُفُ الْفُرْصَةَ فَبَدَأَ مَوْعِظَتَهُ.",
       "İşte burada Yusuf fırsatı buldu ve öğüdüne başladı."
      ]
     ]
    }
   ]
  },
  {
   "id": 5,
   "emoji": "☝️",
   "title_ar": "مَوْعِظَةُ التَّوْحِيدِ",
   "title_tr": "Tevhid öğüdü",
   "pre": {
    "predict": {
     "prompt_tr": "Başlık: «مَوْعِظَةُ التَّوْحِيدِ». Zindandakiler «karanın rabbi, denizin rabbi…» diyordu. Sence Yusuf onlara ne soracak?",
     "options": [
      [
       "أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ؟",
       "Birçok rab mı hayırlı, yoksa tek Allah mı?"
      ],
      [
       "مِنْ أَيْنَ أَنْتُمْ؟",
       "Nerelisiniz?"
      ],
      [
       "مَاذَا تَأْكُلُونَ؟",
       "Ne yiyorsunuz?"
      ]
     ]
    },
    "vocab": [
     [
      "التَّوْحِيدُ",
      "tevhid (Allah'ı bir bilmek)",
      "☝️"
     ],
     [
      "الْبَرُّ",
      "kara",
      "🏜️"
     ],
     [
      "الْبَحْرُ",
      "deniz",
      "🌊"
     ],
     [
      "الْمَطَرُ",
      "yağmur",
      "🌧️"
     ],
     [
      "الرِّزْقُ",
      "rızık",
      "🌾"
     ],
     [
      "يُصْلَبُ",
      "asılır",
      "⚖️"
     ]
    ]
   },
   "stop": {
    "section": 12,
    "after": 0,
    "prompt_tr": "Yusuf öğüdünü bitirdi ve yorumu söyleyecek. Sence iki adamın sonu ne olacak?",
    "options": [
     [
      "أَحَدُهُمَا يَسْقِي الْمَلِكَ وَالْآخَرُ يُصْلَبُ",
      "Biri krala içki sunacak, öteki asılacak"
     ],
     [
      "يَخْرُجَانِ جَمِيعًا",
      "İkisi de serbest kalacak"
     ],
     [
      "يَبْقَيَانِ فِي السِّجْنِ",
      "İkisi de zindanda kalacak"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَ يُوسُفُ: ذٰلِكُمَا مِمَّا عَلَّمَنِي رَبِّي.",
     "سَأَلَ يُوسُفُ: أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ؟",
     "أَخْبَرَهُمَا يُوسُفُ بِالتَّأْوِيلِ.",
     "قَالَ لِلْأَوَّلِ: اذْكُرْنِي عِنْدَ رَبِّكَ.",
     "نَسِيَ السَّاقِي أَنْ يَذْكُرَ يُوسُفَ.",
     "أَقَامَ يُوسُفُ فِي السِّجْنِ سِنِينَ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا عَلَّمَ اللهُ يُوسُفَ؟",
      "qt": "Allah Yusuf'a neden (ilim) öğretti?",
      "o": [
       "لِأَنَّهُ تَرَكَ طَرِيقَ أَهْلِ الشِّرْكِ",
       "لِأَنَّهُ كَانَ غَنِيًّا",
       "لِأَنَّهُ كَانَ فِي السِّجْنِ"
      ],
      "a": 0,
      "ev": [
       "11.4"
      ],
      "ot": [
       "Çünkü şirk ehlinin yolunu bıraktı",
       "Çünkü zengindi",
       "Çünkü zindandaydı"
      ]
     },
     {
      "q": "هَلِ التَّوْحِيدُ لِيُوسُفَ وَآبَائِهِ فَقَطْ؟",
      "qt": "Tevhid sadece Yusuf ve ataları için mi?",
      "o": [
       "لَا، هُوَ لِلنَّاسِ جَمِيعًا",
       "نَعَمْ، لَهُمْ فَقَطْ",
       "نَعَمْ، لِأَهْلِ مِصْرَ"
      ],
      "a": 0,
      "ev": [
       "11.9"
      ],
      "ot": [
       "Hayır, bütün insanlar için",
       "Evet, sadece onlar için",
       "Evet, Mısır halkı için"
      ]
     },
     {
      "q": "مَاذَا قَالَ يُوسُفُ عَنِ الْأَرْبَابِ الْكَثِيرَةِ؟",
      "qt": "Yusuf çok sayıdaki rablar için ne dedi?",
      "o": [
       "إِنْ هِيَ إِلَّا أَسْمَاءٌ",
       "هِيَ تَخْلُقُ الْأَرْضَ",
       "هِيَ خَيْرٌ مِنَ اللهِ"
      ],
      "a": 0,
      "ev": [
       "11.20"
      ],
      "ot": [
       "Onlar sadece isimlerden ibaret",
       "Onlar yeryüzünü yaratır",
       "Onlar Allah'tan daha hayırlı"
      ]
     },
     {
      "q": "مَاذَا قَالَ يُوسُفُ لِلرَّجُلِ الْأَوَّلِ؟",
      "qt": "Yusuf birinci adama ne dedi?",
      "o": [
       "اذْكُرْنِي عِنْدَ رَبِّكَ",
       "لَا تَحْزَنْ",
       "أَنَا أَخُوكَ"
      ],
      "a": 0,
      "ev": [
       "12.3"
      ],
      "ot": [
       "Efendinin yanında beni an",
       "Üzülme",
       "Ben senin kardeşinim"
      ]
     },
     {
      "q": "كَمْ أَقَامَ يُوسُفُ فِي السِّجْنِ؟",
      "qt": "Yusuf zindanda ne kadar kaldı?",
      "o": [
       "سِنِينَ",
       "يَوْمًا",
       "شَهْرًا"
      ],
      "a": 0,
      "ev": [
       "12.6"
      ],
      "ot": [
       "Yıllarca",
       "Bir gün",
       "Bir ay"
      ]
     }
    ],
    "focus": {
     "title": "Ayrıntılandırma: أَمَّا … فَـ …",
     "explain": "<b>أَمَّا … فَـ</b> «…'e gelince, o …» anlamında iki şeyi ayırarak anlatır. Cevap kısmı mutlaka <b>فَـ</b> ile başlar: <span class='ar-inline'>أَمَّا أَحَدُكُمَا فَيَسْقِي رَبَّهُ خَمْرًا</span> (biriniz ise efendisine şarap sunacak), <span class='ar-inline'>وَأَمَّا الْآخَرُ فَيُصْلَبُ</span> (ötekine gelince, o asılacak).",
     "examples": [
      "أَمَّا أَحَدُكُمَا فَيَسْقِي رَبَّهُ خَمْرًا",
      "وَأَمَّا الْآخَرُ فَيُصْلَبُ"
     ],
     "items": [
      {
       "q": "____ أَحَدُكُمَا فَيَسْقِي رَبَّهُ خَمْرًا.",
       "o": [
        "أَمَّا",
        "هَلْ",
        "لَا"
       ],
       "a": 0
      },
      {
       "q": "وَأَمَّا الْآخَرُ ____.",
       "o": [
        "فَيُصْلَبُ",
        "يُصْلَبُ",
        "وَيُصْلَبُ"
       ],
       "a": 0
      },
      {
       "q": "أَمَّا يُوسُفُ ____ فِي السِّجْنِ.",
       "o": [
        "فَبَقِيَ",
        "بَقِيَ",
        "وَبَقِيَ"
       ],
       "a": 0
      },
      {
       "q": "أَمَّا السَّاقِي ____ أَنْ يَذْكُرَ يُوسُفَ.",
       "o": [
        "فَنَسِيَ",
        "نَسِيَ",
        "يَنْسَى"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ يُوسُفُ: أَأَرْبَابٌ {مُتَفَرِّقُونَ} خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ؟ وَهٰذَا {التَّوْحِيدُ} لِلنَّاسِ جَمِيعًا. وَقَالَ لِلْأَوَّلِ: {اذْكُرْنِي} عِنْدَ رَبِّكَ. وَلٰكِنْ {نَسِيَ} السَّاقِي. وَأَقَامَ يُوسُفُ فِي السِّجْنِ {سِنِينَ}."
    },
    "think": {
     "q": "لِمَاذَا قَالَ يُوسُفُ: «انْظُرُوا إِلَى الْأَرْضِ وَإِلَى السَّمَاءِ»؟",
     "qt": "Yusuf neden «Yere ve göğe bakın» dedi?",
     "model": "Soyut bir tartışma yerine herkesin görebildiği bir delil gösterdi: Yer, gök ve insan Allah'ın yarattıklarıdır. Uydurma rabların yarattığı tek bir şey gösterilemez; bu yüzden onlar sadece isimden ibarettir."
    },
    "retell": [
     "التَّوْحِيدُ",
     "أَرْبَابٌ",
     "اللهُ الْوَاحِدُ",
     "التَّأْوِيلُ",
     "اذْكُرْنِي",
     "نَسِيَ"
    ],
    "quran": [
     {
      "ar": "وَاتَّبَعْتُ مِلَّةَ آبَائِي إِبْرَاهِيمَ وَإِسْحَاقَ وَيَعْقُوبَ مَا كَانَ لَنَا أَنْ نُشْرِكَ بِاللهِ مِنْ شَيْءٍ",
      "ref": "Yûsuf 12:38",
      "tr": "Atalarım İbrahim, İshak ve Yakup'un dinine uydum. Allah'a hiçbir şeyi ortak koşmak bize yakışmaz.",
      "inText": "«وَاتَّبَعْتُ مِلَّةَ آبَائِي...»"
     },
     {
      "ar": "يَا صَاحِبَيِ السِّجْنِ أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ",
      "ref": "Yûsuf 12:39",
      "tr": "Ey zindan arkadaşlarım! Birbirinden ayrı birçok rab mı daha hayırlı, yoksa tek ve her şeye galip olan Allah mı?",
      "inText": "«أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ...»"
     },
     {
      "ar": "إِنِ الْحُكْمُ إِلَّا لِلّٰهِ أَمَرَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ ذٰلِكَ الدِّينُ الْقَيِّمُ وَلٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ",
      "ref": "Yûsuf 12:40",
      "tr": "Hüküm yalnızca Allah'ındır. O, kendisinden başkasına ibadet etmemenizi emretmiştir. Dosdoğru din budur; fakat insanların çoğu bilmez.",
      "inText": "«لَا تَعْبُدُوا إِلَّا إِيَّاهُ» · «ذٰلِكَ الدِّينُ الْقَيِّمُ»"
     },
     {
      "ar": "أَمَّا أَحَدُكُمَا فَيَسْقِي رَبَّهُ خَمْرًا وَأَمَّا الْآخَرُ فَيُصْلَبُ فَتَأْكُلُ الطَّيْرُ مِنْ رَأْسِهِ",
      "ref": "Yûsuf 12:41",
      "tr": "Biriniz efendisine şarap sunacak; öteki ise asılacak ve kuşlar onun başından yiyecek.",
      "inText": "«أَمَّا أَحَدُكُمَا...»"
     }
    ]
   },
   "sections": [
    {
     "n": 11,
     "title_ar": "مَوْعِظَةُ التَّوْحِيدِ",
     "title_tr": "Tevhid öğüdü",
     "s": [
      [
       "قَالَ يُوسُفُ «ذٰلِكُمَا مِمَّا عَلَّمَنِي رَبِّي».",
       "Yusuf dedi ki: «Bu, Rabbimin bana öğrettiklerindendir.»"
      ],
      [
       "وَلٰكِنَّ اللهَ لَا يُؤْتِي عِلْمَهُ كُلَّ أَحَدٍ.",
       "Fakat Allah ilmini herkese vermez."
      ],
      [
       "إِنَّ اللهَ لَا يُؤْتِي عِلْمَهُ الْمُشْرِكَ.",
       "Allah ilmini müşrike vermez."
      ],
      [
       "هَلْ تَعْرِفَانِ لِمَاذَا عَلَّمَنِي رَبِّي؟",
       "Rabbimin bana neden öğrettiğini biliyor musunuz?"
      ],
      [
       "لِأَنِّي تَرَكْتُ طَرِيقَ أَهْلِ الشِّرْكِ.",
       "Çünkü ben şirk ehlinin yolunu bıraktım."
      ],
      [
       "«وَاتَّبَعْتُ مِلَّةَ آبَائِي إِبْرَاهِيمَ وَإِسْحَاقَ وَيَعْقُوبَ».",
       "«Ve atalarım İbrahim, İshak ve Yakup'un dinine uydum.»"
      ],
      [
       "«مَا كَانَ لَنَا أَنْ نُشْرِكَ بِاللهِ مِنْ شَيْءٍ».",
       "«Allah'a hiçbir şeyi ortak koşmak bize yakışmaz.»"
      ],
      [
       "قَالَ يُوسُفُ:",
       "Yusuf dedi ki:"
      ],
      [
       "وَهٰذَا التَّوْحِيدُ لَيْسَ لَنَا فَقَطْ.",
       "Bu tevhid yalnızca bizim için değil."
      ],
      [
       "بَلْ هُوَ لِلنَّاسِ جَمِيعًا.",
       "Bilakis bütün insanlar içindir."
      ],
      [
       "«ذٰلِكَ مِنْ فَضْلِ اللهِ عَلَيْنَا وَعَلَى النَّاسِ وَلٰكِنَّ أَكْثَرَ النَّاسِ لَا يَشْكُرُونَ».",
       "«Bu, Allah'ın bize ve insanlara bir lütfudur; fakat insanların çoğu şükretmez.»"
      ],
      [
       "وَهُنَا وَقَفَ يُوسُفُ وَسَأَلَهُمَا.",
       "Burada Yusuf durdu ve onlara sordu:"
      ],
      [
       "تَقُولُونَ رَبُّ الْبَرِّ وَرَبُّ الْبَحْرِ وَرَبُّ الرِّزْقِ وَرَبُّ الْمَطَرِ.",
       "Siz karanın rabbi, denizin rabbi, rızkın rabbi ve yağmurun rabbi diyorsunuz."
      ],
      [
       "وَنَحْنُ نَقُولُ اللهُ رَبُّ الْعَالَمِينَ.",
       "Biz ise Allah âlemlerin Rabbidir diyoruz."
      ],
      [
       "«أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ».",
       "«Birbirinden ayrı birçok rab mı daha hayırlı, yoksa tek ve her şeye galip olan Allah mı?»"
      ],
      [
       "أَيْنَ رَبُّ الْبَرِّ وَرَبُّ الْبَحْرِ وَرَبُّ الرِّزْقِ وَرَبُّ الْمَطَرِ؟",
       "Karanın rabbi, denizin rabbi, rızkın rabbi ve yağmurun rabbi nerede?"
      ],
      [
       "«أَرُونِي مَاذَا خَلَقُوا مِنَ الْأَرْضِ أَمْ لَهُمْ شِرْكٌ فِي السَّمَاوَاتِ».",
       "«Bana gösterin, yeryüzünden neyi yarattılar? Yoksa göklerde bir ortaklıkları mı var?»"
      ],
      [
       "انْظُرُوا إِلَى الْأَرْضِ وَإِلَى السَّمَاءِ وَانْظُرُوا إِلَى الْإِنْسَانِ.",
       "Yere ve göğe bakın, insana bakın."
      ],
      [
       "«هٰذَا خَلْقُ اللهِ فَأَرُونِي مَاذَا خَلَقَ الَّذِينَ مِنْ دُونِهِ».",
       "«Bu, Allah'ın yaratmasıdır; O'ndan başkalarının ne yarattığını bana gösterin.»"
      ],
      [
       "وَكَيْفَ رَبُّ الْبَرِّ وَرَبُّ الْبَحْرِ وَرَبُّ الرِّزْقِ وَرَبُّ الْمَطَرِ؟",
       "Karanın, denizin, rızkın ve yağmurun rabbi diye bir şey nasıl olur?"
      ],
      [
       "«إِنْ هِيَ إِلَّا أَسْمَاءٌ سَمَّيْتُمُوهَا أَنْتُمْ وَآبَاؤُكُمْ».",
       "«Bunlar sizin ve atalarınızın taktığı isimlerden başka bir şey değildir.»"
      ],
      [
       "الْحُكْمُ لِلّٰهِ، الْمُلْكُ لِلّٰهِ، الْأَرْضُ لِلّٰهِ، الْأَمْرُ لِلّٰهِ.",
       "Hüküm Allah'ındır, mülk Allah'ındır, yeryüzü Allah'ındır, emir Allah'ındır."
      ],
      [
       "«لَا تَعْبُدُوا إِلَّا إِيَّاهُ».",
       "«O'ndan başkasına ibadet etmeyin.»"
      ],
      [
       "«ذٰلِكَ الدِّينُ الْقَيِّمُ».",
       "«İşte dosdoğru din budur.»"
      ],
      [
       "«وَلٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ».",
       "«Fakat insanların çoğu bilmez.»"
      ]
     ]
    },
    {
     "n": 12,
     "title_ar": "تَأْوِيلُ الرُّؤْيَا",
     "title_tr": "Rüyanın yorumu",
     "s": [
      [
       "وَلَمَّا فَرَغَ يُوسُفُ مِنْ مَوْعِظَتِهِ أَخْبَرَهُمَا بِتَأْوِيلِ الرُّؤْيَا.",
       "Yusuf öğüdünü bitirince onlara rüyanın yorumunu haber verdi."
      ],
      [
       "قَالَ: «أَمَّا أَحَدُكُمَا فَيَسْقِي رَبَّهُ خَمْرًا».",
       "Dedi ki: «Biriniz efendisine şarap sunacak.»"
      ],
      [
       "«وَأَمَّا الْآخَرُ فَيُصْلَبُ فَتَأْكُلُ الطَّيْرُ مِنْ رَأْسِهِ».",
       "«Öteki ise asılacak ve kuşlar onun başından yiyecek.»"
      ],
      [
       "وَقَالَ لِلْأَوَّلِ «اذْكُرْنِي عِنْدَ رَبِّكَ».",
       "Birincisine dedi ki: «Efendinin yanında beni an.»"
      ],
      [
       "وَخَرَجَ الرَّجُلَانِ، فَكَانَ الْأَوَّلُ سَاقِيًا لِلْمَلِكِ وَصُلِبَ الْآخَرُ.",
       "İki adam çıktı; birincisi krala sâki (içki sunan) oldu, öteki asıldı."
      ],
      [
       "وَنَسِيَ السَّاقِي أَنْ يَذْكُرَ يُوسُفَ عِنْدَ الْمَلِكِ.",
       "Sâki, Yusuf'u kralın yanında anmayı unuttu."
      ],
      [
       "وَأَقَامَ يُوسُفُ فِي السِّجْنِ سِنِينَ.",
       "Yusuf zindanda yıllarca kaldı."
      ]
     ]
    }
   ]
  },
  {
   "id": 6,
   "emoji": "🌾",
   "title_ar": "عَلَى خَزَائِنِ الْأَرْضِ",
   "title_tr": "Ülkenin hazineleri başında",
   "pre": {
    "predict": {
     "prompt_tr": "Mısır kralı yedi semiz inek ve yedi cılız inek gördü. Sence bu rüya neyi anlatıyor?",
     "options": [
      [
       "سَبْعَ سِنِينَ خِصْبٍ وَسَبْعَ سِنِينَ قَحْطٍ",
       "Yedi bolluk ve yedi kıtlık yılını"
      ],
      [
       "سَبْعَةَ أَيَّامٍ مِنَ الْعِيدِ",
       "Yedi bayram gününü"
      ],
      [
       "سَبْعَةَ مُلُوكٍ",
       "Yedi kralı"
      ]
     ]
    },
    "vocab": [
     [
      "بَقَرَةٌ ج بَقَرَاتٌ",
      "inek / inekler",
      "🐄"
     ],
     [
      "سِمَانٌ / عِجَافٌ",
      "semiz / cılız",
      "⚖️"
     ],
     [
      "سُنْبُلَةٌ",
      "başak",
      "🌾"
     ],
     [
      "قَحْطٌ",
      "kıtlık",
      "🏜️"
     ],
     [
      "خَزَائِنُ",
      "hazineler, ambarlar",
      "🏛️"
     ],
     [
      "بَرِيءٌ",
      "suçsuz",
      "🕊️"
     ]
    ]
   },
   "stop": {
    "section": 15,
    "after": 0,
    "prompt_tr": "Elçi Yusuf'a «Kral seni çağırıyor!» dedi. Sence Yusuf hemen çıkacak mı?",
    "options": [
     [
      "لَا، يُرِيدُ التَّفْتِيشَ أَوَّلًا",
      "Hayır, önce soruşturma isteyecek"
     ],
     [
      "نَعَمْ، يُسْرِعُ إِلَى الْبَابِ",
      "Evet, kapıya koşacak"
     ],
     [
      "لَا، يَبْقَى فِي السِّجْنِ أَبَدًا",
      "Hayır, sonsuza dek zindanda kalacak"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "رَأَى الْمَلِكُ سَبْعَ بَقَرَاتٍ سِمَانٍ.",
     "ذَهَبَ السَّاقِي إِلَى يُوسُفَ.",
     "أَخْبَرَ يُوسُفُ بِالتَّأْوِيلِ وَالتَّدْبِيرِ.",
     "أَرْسَلَ الْمَلِكُ إِلَى يُوسُفَ.",
     "عَلِمَ النَّاسُ أَنَّ يُوسُفَ بَرِيءٌ.",
     "كَانَ يُوسُفُ عَلَى خَزَائِنِ الْأَرْضِ."
    ],
    "questions": [
     {
      "q": "مَاذَا قَالَ جُلَسَاءُ الْمَلِكِ عَنِ الرُّؤْيَا؟",
      "qt": "Kralın meclisindekiler rüya için ne dedi?",
      "o": [
       "هٰذَا لَيْسَ بِشَيْءٍ",
       "هٰذِهِ بَشَارَةٌ",
       "هٰذَا قَحْطٌ"
      ],
      "a": 0,
      "ev": [
       "13.5"
      ],
      "ot": [
       "Bu önemli bir şey değil",
       "Bu bir müjde",
       "Bu bir kıtlık"
      ]
     },
     {
      "q": "كَمْ سَنَةً يَطُولُ الْقَحْطُ؟",
      "qt": "Kıtlık kaç yıl sürecek?",
      "o": [
       "سَبْعَ سِنِينَ",
       "سَنَةً وَاحِدَةً",
       "عَشْرَ سِنِينَ"
      ],
      "a": 0,
      "ev": [
       "13.13"
      ],
      "ot": [
       "Yedi yıl",
       "Bir yıl",
       "On yıl"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَخْرُجْ يُوسُفُ مِنَ السِّجْنِ فَوْرًا؟",
      "qt": "Yusuf zindandan neden hemen çıkmadı?",
      "o": [
       "لِيَعْلَمَ النَّاسُ أَنَّهُ بَرِيءٌ",
       "لِأَنَّهُ خَافَ الْمَلِكَ",
       "لِأَنَّهُ كَانَ مَرِيضًا"
      ],
      "a": 0,
      "ev": [
       "15.2",
       "15.8"
      ],
      "ot": [
       "İnsanlar onun suçsuz olduğunu bilsin diye",
       "Çünkü kraldan korktu",
       "Çünkü hastaydı"
      ]
     },
     {
      "q": "لِمَاذَا كَانَتْ خَزَائِنُ الْأَرْضِ ضَائِعَةً؟",
      "qt": "Ülkenin hazineleri neden boşa gidiyordu?",
      "o": [
       "لِأَنَّ الْأُمَرَاءَ لَا يَخَافُونَ اللهَ",
       "لِأَنَّهَا قَلِيلَةٌ",
       "لِأَنَّ الْمَطَرَ كَثِيرٌ"
      ],
      "a": 0,
      "ev": [
       "16.4"
      ],
      "ot": [
       "Çünkü yöneticiler Allah'tan korkmuyor",
       "Çünkü hazineler az",
       "Çünkü çok yağmur var"
      ]
     },
     {
      "q": "مَاذَا قَالَ يُوسُفُ لِلْمَلِكِ؟",
      "qt": "Yusuf krala ne dedi?",
      "o": [
       "اجْعَلْنِي عَلَى خَزَائِنِ الْأَرْضِ",
       "أَرْسِلْنِي إِلَى أَبِي",
       "أَعْطِنِي قَصْرًا"
      ],
      "a": 0,
      "ev": [
       "16.15"
      ],
      "ot": [
       "Beni ülkenin hazinelerinin başına getir",
       "Beni babama gönder",
       "Bana bir saray ver"
      ]
     }
    ],
    "focus": {
     "title": "حَفِيظٌ عَلِيمٌ: فَعِيلٌ kalıbı",
     "explain": "<b>فَعِيلٌ</b> kalıbı bir özelliği güçlü ve kalıcı biçimde taşıyanı anlatır: <span class='ar-inline'>حَفِظَ ← حَفِيظٌ</span> (iyi koruyan), <span class='ar-inline'>عَلِمَ ← عَلِيمٌ</span> (çok bilen), <span class='ar-inline'>رَحِمَ ← رَحِيمٌ</span>, <span class='ar-inline'>كَرُمَ ← كَرِيمٌ</span>. Metin bu iki sıfatın neden birlikte gerektiğini açıklıyor: Sadece koruyan ama bilmeyen yetmez; sadece bilen ama güvenilmez olan da yetmez.",
     "examples": [
      "إِنِّي حَفِيظٌ عَلِيمٌ",
      "رَجُلًا رَحِيمًا",
      "جَوَادًا كَرِيمًا"
     ],
     "items": [
      {
       "q": "اجْعَلْنِي عَلَى خَزَائِنِ الْأَرْضِ إِنِّي حَفِيظٌ ____.",
       "o": [
        "عَلِيمٌ",
        "عِلْمٌ",
        "يَعْلَمُ"
       ],
       "a": 0
      },
      {
       "q": "سَمِعَ يَعْقُوبُ أَنَّ فِي مِصْرَ رَجُلًا ____.",
       "o": [
        "رَحِيمًا",
        "رَحْمَةً",
        "يَرْحَمُ"
       ],
       "a": 0
      },
      {
       "q": "حَفِظَ ← ____",
       "o": [
        "حَفِيظٌ",
        "حَافِظُونَ",
        "يَحْفَظُ"
       ],
       "a": 0
      },
      {
       "q": "كَانَ يُوسُفُ جَوَادًا ____ لَا يَعْرِفُ الْبُخْلَ.",
       "o": [
        "كَرِيمًا",
        "كَرَمًا",
        "أَكْرَمَ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "رَأَى الْمَلِكُ سَبْعَ {بَقَرَاتٍ} سِمَانٍ. وَقَالَ يُوسُفُ: يَكُونُ بَعْدَ ذٰلِكَ {قَحْطٌ} عَامٌّ. وَمَا خَرَجَ يُوسُفُ حَتَّى عَلِمَ النَّاسُ أَنَّهُ {بَرِيءٌ}. وَقَالَ: اجْعَلْنِي عَلَى {خَزَائِنِ} الْأَرْضِ إِنِّي حَفِيظٌ {عَلِيمٌ}."
    },
    "think": {
     "q": "لِمَاذَا طَلَبَ يُوسُفُ الْعَمَلَ عَلَى خَزَائِنِ الْأَرْضِ؟ هَلْ كَانَ يُحِبُّ الْمُلْكَ؟",
     "qt": "Yusuf neden hazinelerin başına geçmek istedi? Makam sevgisinden mi?",
     "model": "Hayır. Metne göre Yusuf, kıtlıkta insanların aç kalıp ölmesine dayanamıyordu ve yöneticilerin halkın malını yemesini istemiyordu. Bu iş için hem güvenilir hem bilgili biri gerekiyordu ve kendisinde bu iki özelliğin olduğunu biliyordu; hakkı söylemekten de çekinmedi."
    },
    "retell": [
     "رُؤْيَا الْمَلِكِ",
     "سَبْعُ بَقَرَاتٍ",
     "قَحْطٌ",
     "التَّفْتِيشُ",
     "بَرِيءٌ",
     "حَفِيظٌ عَلِيمٌ"
    ],
    "quran": [
     {
      "ar": "وَقَالَ الْمَلِكُ إِنِّي أَرَى سَبْعَ بَقَرَاتٍ سِمَانٍ يَأْكُلُهُنَّ سَبْعٌ عِجَافٌ وَسَبْعَ سُنْبُلَاتٍ خُضْرٍ وَأُخَرَ يَابِسَاتٍ",
      "ref": "Yûsuf 12:43",
      "tr": "Kral dedi ki: Ben (rüyamda) yedi semiz ineği yedi cılız ineğin yediğini, yedi yeşil başak ve diğer yedi kuru başak görüyorum.",
      "inText": "سَبْعَ بَقَرَاتٍ سِمَانٍ ... سَبْعَ سُنْبُلَاتٍ خُضْرٍ"
     },
     {
      "ar": "وَقَالَ الْمَلِكُ ائْتُونِي بِهِ أَسْتَخْلِصْهُ لِنَفْسِي",
      "ref": "Yûsuf 12:54",
      "tr": "Kral dedi ki: Onu bana getirin, onu kendime özel danışman edineyim.",
      "inText": "«ائْتُونِي بِهِ أَسْتَخْلِصْهُ لِنَفْسِي»"
     },
     {
      "ar": "قَالَ اجْعَلْنِي عَلَى خَزَائِنِ الْأَرْضِ إِنِّي حَفِيظٌ عَلِيمٌ",
      "ref": "Yûsuf 12:55",
      "tr": "Dedi ki: Beni ülkenin hazinelerinin başına getir; ben iyi korurum ve iyi bilirim.",
      "inText": "«اجْعَلْنِي عَلَى خَزَائِنِ الْأَرْضِ...»"
     }
    ]
   },
   "sections": [
    {
     "n": 13,
     "title_ar": "رُؤْيَا الْمَلِكِ",
     "title_tr": "Kralın rüyası",
     "s": [
      [
       "وَرَأَى مَلِكُ مِصْرَ رُؤْيَا عَجِيبَةً.",
       "Mısır kralı şaşırtıcı bir rüya gördü."
      ],
      [
       "رَأَى فِي الْمَنَامِ سَبْعَ بَقَرَاتٍ سِمَانٍ.",
       "Rüyasında yedi semiz inek gördü."
      ],
      [
       "وَيَأْكُلُ هٰذِهِ الْبَقَرَاتِ سَبْعُ بَقَرَاتٍ عِجَافٍ.",
       "Bu inekleri yedi cılız inek yiyordu."
      ],
      [
       "وَرَأَى الْمَلِكُ سَبْعَ سُنْبُلَاتٍ خُضْرٍ وَسَبْعَ سُنْبُلَاتٍ يَابِسَاتٍ.",
       "Kral yedi yeşil başak ve yedi kuru başak da gördü."
      ],
      [
       "تَعَجَّبَ الْمَلِكُ مِنْ هٰذِهِ الرُّؤْيَا الْعَجِيبَةِ وَسَأَلَ جُلَسَاءَهُ عَنْ تَأْوِيلِ الرُّؤْيَا.",
       "Kral bu şaşırtıcı rüyaya hayret etti ve meclisindekilere rüyanın yorumunu sordu."
      ],
      [
       "قَالُوا: هٰذَا لَيْسَ بِشَيْءٍ، النَّائِمُ يَرَى أَشْيَاءَ كَثِيرَةً لَا حَقِيقَةَ لَهَا.",
       "Dediler ki: Bu önemli bir şey değil; uyuyan kişi gerçeği olmayan pek çok şey görür."
      ],
      [
       "وَلٰكِنْ قَالَ السَّاقِي: لَا، بَلْ أُخْبِرُكُمْ بِتَأْوِيلِ هٰذِهِ الرُّؤْيَا.",
       "Fakat sâki dedi ki: Hayır, bu rüyanın yorumunu ben size haber vereceğim."
      ],
      [
       "وَذَهَبَ السَّاقِي إِلَى السِّجْنِ وَسَأَلَ يُوسُفَ عَنْ تَأْوِيلِ رُؤْيَا الْمَلِكِ.",
       "Sâki zindana gitti ve Yusuf'a kralın rüyasının yorumunu sordu."
      ],
      [
       "كَانَ يُوسُفُ جَوَادًا كَرِيمًا مُشْفِقًا عَلَى خَلْقِ اللهِ فَأَخْبَرَهُ بِالتَّأْوِيلِ.",
       "Yusuf cömert, değerli ve Allah'ın kullarına şefkatliydi; ona yorumu haber verdi."
      ],
      [
       "وَكَانَ يُوسُفُ جَوَادًا كَرِيمًا لَا يَعْرِفُ الْبُخْلَ.",
       "Yusuf cömertti; cimriliği bilmezdi."
      ],
      [
       "فَأَخْبَرَ يُوسُفُ بِالتَّأْوِيلِ وَدَلَّ عَلَى التَّدْبِيرِ.",
       "Yusuf yorumu haber verdi ve ne yapılması gerektiğini gösterdi."
      ],
      [
       "قَالَ تَزْرَعُونَ سَبْعَ سِنِينَ، وَاتْرُكُوا مَا حَصَدْتُمْ فِي سُنْبُلِهِ إِلَّا قَلِيلًا مِمَّا تَأْكُلُونَ.",
       "Dedi ki: Yedi yıl ekin ekeceksiniz; biçtiğinizi, yiyeceğiniz az bir kısım dışında başağında bırakın."
      ],
      [
       "وَيَكُونُ بَعْدَ ذٰلِكَ قَحْطٌ عَامٌّ تَأْكُلُونَ فِيهِ مَا خَزَنْتُمْ إِلَّا قَلِيلًا.",
       "Bundan sonra genel bir kıtlık olacak; o zaman biriktirdiğinizi yiyeceksiniz, azı hariç."
      ],
      [
       "وَيَطُولُ هٰذَا الْقَحْطُ إِلَى سَبْعِ سِنِينَ.",
       "Bu kıtlık yedi yıl sürecek."
      ],
      [
       "وَبَعْدَ ذٰلِكَ يَأْتِي النَّصْرُ وَيُخْصِبُ النَّاسُ.",
       "Ondan sonra yardım gelecek ve insanlar bolluğa kavuşacak."
      ],
      [
       "وَذَهَبَ السَّاقِي وَأَخْبَرَ الْمَلِكَ بِتَأْوِيلِ رُؤْيَاهُ.",
       "Sâki gitti ve krala rüyasının yorumunu haber verdi."
      ]
     ]
    },
    {
     "n": 14,
     "title_ar": "الْمَلِكُ يُرْسِلُ إِلَى يُوسُفَ",
     "title_tr": "Kral Yusuf'u çağırtıyor",
     "s": [
      [
       "وَلَمَّا سَمِعَ الْمَلِكُ هٰذَا التَّأْوِيلَ وَالتَّدْبِيرَ فَرِحَ جِدًّا، وَقَالَ: مَنْ صَاحِبُ هٰذَا التَّأْوِيلِ؟",
       "Kral bu yorumu ve tedbiri duyunca çok sevindi ve dedi ki: Bu yorumun sahibi kim?"
      ],
      [
       "وَقَالَ الْمَلِكُ: مَنْ هٰذَا الرَّجُلُ الْكَرِيمُ الَّذِي نَصَحَ لَنَا وَدَلَّ عَلَى التَّدْبِيرِ؟",
       "Kral dedi ki: Bize öğüt veren ve tedbiri gösteren bu değerli adam kim?"
      ],
      [
       "قَالَ السَّاقِي: هٰذَا يُوسُفُ الصِّدِّيقُ، وَهُوَ الَّذِي أَخْبَرَ أَنِّي سَأَكُونُ سَاقِيًا لِسَيِّدِي الْمَلِكِ.",
       "Sâki dedi ki: Bu, dosdoğru Yusuf'tur; efendim kralın sâkisi olacağımı haber veren de odur."
      ],
      [
       "وَاشْتَاقَ الْمَلِكُ إِلَى لِقَاءِ يُوسُفَ، وَأَرْسَلَ إِلَى يُوسُفَ.",
       "Kral Yusuf'la görüşmeyi çok istedi ve Yusuf'a haber gönderdi."
      ],
      [
       "وَقَالَ الْمَلِكُ «ائْتُونِي بِهِ أَسْتَخْلِصْهُ لِنَفْسِي».",
       "Kral dedi ki: «Onu bana getirin, onu kendime özel danışman yapayım.»"
      ]
     ]
    },
    {
     "n": 15,
     "title_ar": "يُوسُفُ يَسْأَلُ التَّفْتِيشَ",
     "title_tr": "Yusuf soruşturma istiyor",
     "s": [
      [
       "وَلَمَّا جَاءَ الرَّسُولُ إِلَى يُوسُفَ وَقَالَ لَهُ إِنَّ الْمَلِكَ يَدْعُوكَ!",
       "Elçi Yusuf'a gelip «Kral seni çağırıyor!» deyince,"
      ],
      [
       "مَا رَضِيَ يُوسُفُ أَنْ يَخْرُجَ مِنَ السِّجْنِ هٰكَذَا.",
       "Yusuf zindandan böylece çıkmaya razı olmadı."
      ],
      [
       "وَيَقُولُ النَّاسُ هٰذَا يُوسُفُ! هٰذَا كَانَ أَمْسِ فِي السِّجْنِ، إِنَّهُ خَانَ الْعَزِيزَ.",
       "(Yoksa) insanlar derdi ki: Bu Yusuf! Bu dün zindandaydı; azize ihanet etmişti."
      ],
      [
       "إِنَّ يُوسُفَ كَانَ كَبِيرَ النَّفْسِ أَبِيًّا، إِنَّ يُوسُفَ كَانَ كَبِيرَ الْعَقْلِ ذَكِيًّا.",
       "Yusuf onurlu ve gururluydu; Yusuf akıllı ve zekiydi."
      ],
      [
       "لَوْ كَانَ أَحَدٌ مَكَانَ يُوسُفَ فِي السِّجْنِ وَجَاءَهُ رَسُولُ الْمَلِكِ.",
       "Zindanda Yusuf'un yerinde başka biri olsaydı ve ona kralın elçisi gelseydi,"
      ],
      [
       "وَقَالَ لَهُ رَسُولُ الْمَلِكِ إِنَّ الْمَلِكَ يَدْعُوكَ وَيَنْتَظِرُكَ لَأَسْرَعَ هٰذَا الرَّجُلُ إِلَى بَابِ السِّجْنِ وَخَرَجَ.",
       "ve kralın elçisi ona «Kral seni çağırıyor ve seni bekliyor» deseydi, bu adam hemen zindanın kapısına koşar ve çıkardı."
      ],
      [
       "وَلٰكِنْ يُوسُفُ لَمْ يُسْرِعْ.",
       "Fakat Yusuf acele etmedi."
      ],
      [
       "وَلٰكِنْ يُوسُفُ لَمْ يَسْتَعْجِلْ.",
       "Yusuf aceleci davranmadı."
      ],
      [
       "بَلْ قَالَ لِرَسُولِ الْمَلِكِ: أَنَا أُرِيدُ التَّفْتِيشَ أَنَا أُرِيدُ الْبَحْثَ عَنْ قَضِيَّتِي.",
       "Bilakis kralın elçisine dedi ki: Ben soruşturma istiyorum; davamın araştırılmasını istiyorum."
      ],
      [
       "وَسَأَلَ الْمَلِكُ عَنْ يُوسُفَ وَعَلِمَ الْمَلِكُ وَعَلِمَ النَّاسُ أَنَّ يُوسُفَ بَرِيءٌ.",
       "Kral Yusuf hakkında soruşturdu; kral da insanlar da Yusuf'un suçsuz olduğunu öğrendi."
      ],
      [
       "وَخَرَجَ يُوسُفُ بَرِيئًا وَأَكْرَمَهُ الْمَلِكُ.",
       "Yusuf suçsuz olarak çıktı ve kral ona ikramda bulundu."
      ]
     ]
    },
    {
     "n": 16,
     "title_ar": "عَلَى خَزَائِنِ الْأَرْضِ",
     "title_tr": "Ülkenin hazineleri başında",
     "s": [
      [
       "وَكَانَ يُوسُفُ يَعْلَمُ أَنَّ الْأَمَانَةَ قَلِيلَةٌ فِي النَّاسِ.",
       "Yusuf insanlarda güvenilirliğin az olduğunu biliyordu."
      ],
      [
       "وَكَانَ يُوسُفُ يَعْلَمُ أَنَّ الْخِيَانَةَ كَثِيرَةٌ فِي النَّاسِ.",
       "Yusuf insanlarda hıyanetin çok olduğunu biliyordu."
      ],
      [
       "وَكَانَ يُوسُفُ يَرَى أَنَّ النَّاسَ يَخُونُونَ فِي أَمْوَالِ اللهِ.",
       "Yusuf insanların Allah'ın mallarında hıyanet ettiğini görüyordu."
      ],
      [
       "وَكَانَ يَرَى أَنَّ فِي الْأَرْضِ خَزَائِنَ كَثِيرَةً وَلٰكِنَّهَا ضَائِعَةٌ.",
       "Ülkede pek çok hazine olduğunu, ama boşa gittiğini görüyordu."
      ],
      [
       "إِنَّهَا ضَائِعَةٌ لِأَنَّ الْأُمَرَاءَ لَا يَخَافُونَ اللهَ فِيهَا.",
       "Boşa gidiyordu, çünkü yöneticiler bu konuda Allah'tan korkmuyordu."
      ],
      [
       "فَمَا أَكَلَ كِلَابُهُمْ وَلَا تَجِدُ النَّاسُ مَا يَأْكُلُونَ.",
       "Onların köpekleri bile yiyordu ama insanlar yiyecek bir şey bulamıyordu."
      ],
      [
       "وَتَلْبَسُ بُيُوتُهُمْ وَلَا تَجِدُ النَّاسُ مَا يَلْبَسُونَ.",
       "Evleri süslü örtülerle kaplıydı ama insanlar giyecek bir şey bulamıyordu."
      ],
      [
       "وَلَا يَنْفَعُ النَّاسَ بِخَزَائِنِ الْأَرْضِ إِلَّا مَنْ كَانَ حَفِيظًا عَلِيمًا.",
       "Ülkenin hazinelerini insanlara ancak koruyan ve bilen biri faydalı kılabilir."
      ],
      [
       "وَمَنْ كَانَ حَفِيظًا وَمَا كَانَ عَلِيمًا لَا يَعْلَمُ أَيْنَ خَزَائِنُ الْأَرْضِ وَكَيْفَ يَنْتَفِعُ بِهَا.",
       "Koruyan ama bilgisi olmayan kişi hazinelerin nerede olduğunu ve onlardan nasıl yararlanılacağını bilmez."
      ],
      [
       "وَمَنْ كَانَ عَلِيمًا وَمَا كَانَ حَفِيظًا يَأْكُلُ مِنْهَا وَيَخُونُ فِيهَا.",
       "Bilgili ama güvenilir olmayan kişi de ondan yer ve hıyanet eder."
      ],
      [
       "وَكَانَ يُوسُفُ حَفِيظًا عَلِيمًا.",
       "Yusuf ise hem koruyan hem bilendi."
      ],
      [
       "وَكَانَ يُوسُفُ لَا يُرِيدُ أَنْ يَتْرُكَ الْأُمَرَاءَ يَأْكُلُونَ أَمْوَالَ النَّاسِ.",
       "Yusuf yöneticilerin insanların mallarını yemesine göz yummak istemiyordu."
      ],
      [
       "وَكَانَ يُوسُفُ لَا يَقْدِرُ أَنْ يَرَى النَّاسَ يَجُوعُونَ وَيَمُوتُونَ.",
       "Yusuf insanların aç kalıp ölmesine dayanamazdı."
      ],
      [
       "وَكَانَ يُوسُفُ لَا يَسْتَحْيِي مِنَ الْحَقِّ.",
       "Yusuf hakkı söylemekten çekinmezdi."
      ],
      [
       "فَقَالَ لِلْمَلِكِ:",
       "Krala dedi ki:"
      ],
      [
       "«اجْعَلْنِي عَلَى خَزَائِنِ الْأَرْضِ إِنِّي حَفِيظٌ عَلِيمٌ».",
       "«Beni ülkenin hazinelerinin başına getir; ben iyi korurum ve iyi bilirim.»"
      ],
      [
       "وَهٰكَذَا كَانَ يُوسُفُ أَمِينًا لِخَزَائِنِ مِصْرَ.",
       "Böylece Yusuf Mısır'ın hazinelerinin emini oldu."
      ],
      [
       "وَاسْتَرَاحَ النَّاسُ جِدًّا وَحَمِدُوا اللهَ.",
       "İnsanlar çok rahatladı ve Allah'a hamdettiler."
      ]
     ]
    }
   ]
  },
  {
   "id": 7,
   "emoji": "🐪",
   "title_ar": "جَاءَ إِخْوَةُ يُوسُفَ",
   "title_tr": "Yusuf'un kardeşleri geldi",
   "pre": {
    "predict": {
     "prompt_tr": "Kıtlık geldi ve kardeşler yiyecek almak için Mısır'a gidiyor. Sence Yusuf'u tanıyacaklar mı?",
     "options": [
      [
       "لَا، لَا يَعْرِفُونَهُ",
       "Hayır, onu tanımayacaklar"
      ],
      [
       "نَعَمْ، يَعْرِفُونَهُ فَوْرًا",
       "Evet, hemen tanıyacaklar"
      ],
      [
       "يُوسُفُ لَا يَعْرِفُهُمْ أَيْضًا",
       "Yusuf da onları tanımayacak"
      ]
     ]
    },
    "vocab": [
     [
      "مَجَاعَةٌ",
      "kıtlık, açlık",
      "🍽️"
     ],
     [
      "مَتَاعٌ",
      "eşya, yük",
      "🎒"
     ],
     [
      "يَعْرِفُ / مُنْكِرٌ",
      "tanır / tanımayan",
      "🤔"
     ],
     [
      "يَعِدُ / يُعَاهِدُ",
      "söz verir",
      "🤝"
     ],
     [
      "بَابٌ ج أَبْوَابٌ",
      "kapı / kapılar",
      "🚪"
     ],
     [
      "مَالٌ",
      "para, mal",
      "💰"
     ]
    ]
   },
   "stop": {
    "section": 18,
    "after": 10,
    "prompt_tr": "Kardeşler, Yusuf'a «Kardeşimizi kurt yedi» dedi; konuştukları kişinin Yusuf olduğunu bilmiyorlar. Sence Yusuf ne yapacak?",
    "options": [
     [
      "يَضْحَكُ فِي نَفْسِهِ وَلَا يَقُولُ شَيْئًا",
      "İçinden gülecek ve bir şey söylemeyecek"
     ],
     [
      "يَغْضَبُ وَيَحْبِسُهُمْ",
      "Kızıp onları hapsedecek"
     ],
     [
      "يَقُولُ: أَنَا يُوسُفُ",
      "«Ben Yusuf'um» diyecek"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "كَانَتْ فِي مِصْرَ وَالشَّامِ مَجَاعَةٌ.",
     "أَرْسَلَ يَعْقُوبُ أَبْنَاءَهُ إِلَى مِصْرَ.",
     "عَرَفَ يُوسُفُ إِخْوَتَهُ.",
     "قَالَ يُوسُفُ: ائْتُونِي بِأَخٍ لَكُمْ.",
     "وَجَدُوا مَالَهُمْ فِي مَتَاعِهِمْ.",
     "عَاهَدُوا اللهَ وَأَخَذُوا بِنْيَامِينَ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا بَقِيَ بِنْيَامِينُ عِنْدَ أَبِيهِ؟",
      "qt": "Bünyamin neden babasının yanında kaldı?",
      "o": [
       "لِأَنَّ يَعْقُوبَ يُحِبُّهُ وَيَخَافُ عَلَيْهِ",
       "لِأَنَّهُ كَانَ مَرِيضًا",
       "لِأَنَّهُ لَا يُحِبُّ السَّفَرَ"
      ],
      "a": 0,
      "ev": [
       "17.4"
      ],
      "ot": [
       "Çünkü Yakup onu seviyor ve onun için endişeleniyor",
       "Çünkü hastaydı",
       "Çünkü yolculuğu sevmiyor"
      ]
     },
     {
      "q": "مَاذَا كَانَ الْإِخْوَةُ يَظُنُّونَ عَنْ يُوسُفَ؟",
      "qt": "Kardeşler Yusuf hakkında ne sanıyordu?",
      "o": [
       "أَنَّهُ قَدْ مَاتَ",
       "أَنَّهُ فِي مِصْرَ",
       "أَنَّهُ مَلِكٌ"
      ],
      "a": 0,
      "ev": [
       "17.7"
      ],
      "ot": [
       "Onun öldüğünü",
       "Onun Mısır'da olduğunu",
       "Onun kral olduğunu"
      ]
     },
     {
      "q": "هَلْ فَضَحَهُمْ يُوسُفُ؟",
      "qt": "Yusuf onları rezil etti mi?",
      "o": [
       "لَا، لَمْ يَقُلْ لَهُمْ شَيْئًا",
       "نَعَمْ، أَمَامَ النَّاسِ",
       "نَعَمْ، وَحَبَسَهُمْ"
      ],
      "a": 0,
      "ev": [
       "17.15"
      ],
      "ot": [
       "Hayır, onlara bir şey söylemedi",
       "Evet, insanların önünde",
       "Evet, ve onları hapsetti"
      ]
     },
     {
      "q": "مَاذَا طَلَبَ يُوسُفُ مِنْ إِخْوَتِهِ؟",
      "qt": "Yusuf kardeşlerinden ne istedi?",
      "o": [
       "أَنْ يَأْتُوا بِأَخِيهِمْ",
       "أَنْ يَدْفَعُوا مَالًا كَثِيرًا",
       "أَنْ يَبْقَوْا فِي مِصْرَ"
      ],
      "a": 0,
      "ev": [
       "18.15"
      ],
      "ot": [
       "Kardeşlerini getirmelerini",
       "Çok para ödemelerini",
       "Mısır'da kalmalarını"
      ]
     },
     {
      "q": "مَاذَا قَالَ يَعْقُوبُ لِأَبْنَائِهِ قَبْلَ السَّفَرِ؟",
      "qt": "Yakup oğullarına yolculuktan önce ne dedi?",
      "o": [
       "ادْخُلُوا مِنْ أَبْوَابٍ مُتَفَرِّقَةٍ",
       "ادْخُلُوا مِنْ بَابٍ وَاحِدٍ",
       "لَا تَذْهَبُوا"
      ],
      "a": 0,
      "ev": [
       "19.10"
      ],
      "ot": [
       "Ayrı kapılardan girin",
       "Tek bir kapıdan girin",
       "Gitmeyin"
      ]
     }
    ],
    "focus": {
     "title": "Soru kelimeleri: مِنْ أَيْنَ؟ مَنْ؟ هَلْ؟ لِمَاذَا؟",
     "explain": "Yusuf ile kardeşleri arasındaki konuşma bir soru-cevap zinciri: <span class='ar-inline'>مِنْ أَيْنَ أَنْتُمْ؟</span> (nerelisiniz?), <span class='ar-inline'>مَنْ أَبُوكُمْ؟</span> (babanız kim?), <span class='ar-inline'>هَلْ لَكُمْ أَخٌ آخَرُ؟</span> (başka kardeşiniz var mı?), <span class='ar-inline'>لِمَاذَا مَا جَاءَ مَعَكُمْ؟</span> (neden sizinle gelmedi?). Bu bölümü bir arkadaşınla rol yaparak okuyabilirsin.",
     "examples": [
      "مِنْ أَيْنَ أَنْتُمْ؟",
      "مَنْ أَبُوكُمْ؟",
      "هَلْ لَكُمْ أَخٌ آخَرُ؟"
     ],
     "items": [
      {
       "q": "____ أَنْتُمْ؟ — مِنْ كَنْعَانَ!",
       "o": [
        "مِنْ أَيْنَ",
        "مَنْ",
        "هَلْ"
       ],
       "a": 0
      },
      {
       "q": "____ أَبُوكُمْ؟ — يَعْقُوبُ.",
       "o": [
        "مَنْ",
        "أَيْنَ",
        "مَاذَا"
       ],
       "a": 0
      },
      {
       "q": "____ لَكُمْ أَخٌ آخَرُ؟ — نَعَمْ.",
       "o": [
        "هَلْ",
        "لِمَاذَا",
        "مَنْ"
       ],
       "a": 0
      },
      {
       "q": "____ مَا جَاءَ مَعَكُمْ؟ — لِأَنَّ وَالِدَنَا لَا يَتْرُكُهُ.",
       "o": [
        "لِمَاذَا",
        "هَلْ",
        "مِنْ أَيْنَ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "كَانَتْ فِي مِصْرَ وَالشَّامِ {مَجَاعَةٌ}. وَجَاءَ إِخْوَةُ يُوسُفَ فَعَرَفَهُمْ وَهُمْ لَهُ {مُنْكِرُونَ}. وَقَالَ: ائْتُونِي بِأَخٍ لَكُمْ مِنْ {أَبِيكُمْ}. وَوَجَدُوا {مَالَهُمْ} فِي مَتَاعِهِمْ. وَقَالَ يَعْقُوبُ: ادْخُلُوا مِنْ أَبْوَابٍ {مُتَفَرِّقَةٍ}."
    },
    "think": {
     "q": "لِمَاذَا رَدَّ يُوسُفُ مَالَ إِخْوَتِهِ فِي مَتَاعِهِمْ؟",
     "qt": "Yusuf kardeşlerinin parasını neden yüklerine geri koydurdu?",
     "model": "Metin bunu doğrudan söylemiyor; bu bir yorum sorusu. Olası cevaplar: Yusuf ailesinin fakir olduğunu biliyordu ve onlara yardım etmek istedi; ayrıca bu cömertlik kardeşlerin geri dönmesini, Bünyamin'i getirmesini kolaylaştırdı."
    },
    "retell": [
     "مَجَاعَةٌ",
     "الْإِخْوَةُ",
     "مُنْكِرُونَ",
     "بِنْيَامِينُ",
     "مَتَاعٌ",
     "عَاهَدُوا"
    ],
    "quran": [
     {
      "ar": "وَجَاءَ إِخْوَةُ يُوسُفَ فَدَخَلُوا عَلَيْهِ فَعَرَفَهُمْ وَهُمْ لَهُ مُنْكِرُونَ",
      "ref": "Yûsuf 12:58",
      "tr": "Yusuf'un kardeşleri gelip onun yanına girdiler; o onları tanıdı, onlar ise onu tanımadılar.",
      "inText": "«فَعَرَفَهُمْ وَهُمْ لَهُ مُنْكِرُونَ»"
     },
     {
      "ar": "قَالَ ائْتُونِي بِأَخٍ لَكُمْ مِنْ أَبِيكُمْ",
      "ref": "Yûsuf 12:59",
      "tr": "Dedi ki: Babanızdan olan kardeşinizi bana getirin.",
      "inText": "«ائْتُونِي بِأَخٍ لَكُمْ مِنْ أَبِيكُمْ»"
     },
     {
      "ar": "قَالَ هَلْ آمَنُكُمْ عَلَيْهِ إِلَّا كَمَا أَمِنْتُكُمْ عَلَى أَخِيهِ مِنْ قَبْلُ فَاللهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
      "ref": "Yûsuf 12:64",
      "tr": "Dedi ki: Daha önce kardeşi hakkında size güvendiğim gibi mi onun hakkında da size güveneyim? Allah en hayırlı koruyucudur; O merhametlilerin en merhametlisidir.",
      "inText": "«اللهُ خَيْرٌ حَافِظًا...»"
     },
     {
      "ar": "وَقَالَ يَا بَنِيَّ لَا تَدْخُلُوا مِنْ بَابٍ وَاحِدٍ وَادْخُلُوا مِنْ أَبْوَابٍ مُتَفَرِّقَةٍ",
      "ref": "Yûsuf 12:67",
      "tr": "Dedi ki: Oğullarım! Tek bir kapıdan girmeyin, ayrı ayrı kapılardan girin.",
      "inText": "«يَا بَنِيَّ لَا تَدْخُلُوا مِنْ بَابٍ وَاحِدٍ...»"
     }
    ]
   },
   "sections": [
    {
     "n": 17,
     "title_ar": "جَاءَ إِخْوَةُ يُوسُفَ",
     "title_tr": "Yusuf'un kardeşleri geldi",
     "s": [
      [
       "وَكَانَ فِي مِصْرَ وَالشَّامِ مَجَاعَةٌ كَمَا أَخْبَرَ يُوسُفُ.",
       "Yusuf'un haber verdiği gibi Mısır'da ve Şam'da kıtlık oldu."
      ],
      [
       "وَسَمِعَ أَهْلُ الشَّامِ وَسَمِعَ يَعْقُوبُ أَنَّ فِي مِصْرَ رَجُلًا رَحِيمًا، وَأَنَّ فِي مِصْرَ جَوَادًا كَرِيمًا، وَهُوَ عَلَى خَزَائِنِ الْأَرْضِ.",
       "Şam halkı ve Yakup duydu ki Mısır'da merhametli bir adam, cömert ve değerli biri var ve o ülkenin hazinelerinin başında."
      ],
      [
       "وَكَانَ النَّاسُ يَذْهَبُونَ إِلَيْهِ وَيَأْخُذُونَ الطَّعَامَ.",
       "İnsanlar ona gider ve yiyecek alırdı."
      ],
      [
       "وَأَرْسَلَ يَعْقُوبُ أَبْنَاءَهُ إِلَى مِصْرَ بِالْمَالِ لِيَأْتُوا بِالطَّعَامِ.",
       "Yakup oğullarını yiyecek getirmeleri için parayla Mısır'a gönderdi."
      ],
      [
       "وَبَقِيَ بِنْيَامِينُ عِنْدَ وَالِدِهِ لِأَنَّ يَعْقُوبَ كَانَ يُحِبُّهُ جِدًّا، وَمَا كَانَ يُرِيدُ أَنْ يَبْعُدَ عَنْهُ، وَكَانَ يَعْقُوبُ يَخَافُ عَلَيْهِ كَمَا كَانَ يَخَافُ عَلَى يُوسُفَ.",
       "Bünyamin babasının yanında kaldı; çünkü Yakup onu çok severdi, ondan uzak kalmak istemezdi ve Yusuf için korktuğu gibi onun için de korkardı."
      ],
      [
       "وَتَوَجَّهَ إِخْوَةُ يُوسُفَ إِلَى يُوسُفَ وَهُمْ لَا يَعْرِفُونَ أَنَّهُ أَخُوهُمْ يُوسُفُ.",
       "Yusuf'un kardeşleri Yusuf'a yöneldiler; onun kardeşleri Yusuf olduğunu bilmiyorlardı."
      ],
      [
       "وَهُمْ لَا يَعْرِفُونَ أَنَّهُ يُوسُفُ الَّذِي كَانَ فِي الْبِئْرِ.",
       "Onun kuyudaki Yusuf olduğunu bilmiyorlardı."
      ],
      [
       "وَهُمْ يَظُنُّونَ أَنَّهُ قَدْ مَاتَ.",
       "Onun öldüğünü sanıyorlardı."
      ],
      [
       "وَكَيْفَ لَا يَمُوتُ وَقَدْ كَانَ فِي الْبِئْرِ.",
       "Kuyudayken nasıl ölmemiş olabilirdi ki?"
      ],
      [
       "كَانَتِ الْبِئْرُ عَمِيقَةً وَكَانَتِ الْغَابَةُ مُوحِشَةً.",
       "Kuyu derindi, orman ıssızdı."
      ],
      [
       "كَانَتِ الْبِئْرُ فِي الْغَابَةِ، وَكَانَتِ الْغَابَةُ مُوحِشَةً، وَكَانَ ذٰلِكَ فِي اللَّيْلِ، وَكَانَ اللَّيْلُ مُظْلِمًا.",
       "Kuyu ormandaydı, orman ıssızdı; gece vaktiydi ve gece karanlıktı."
      ],
      [
       "«وَجَاءَ إِخْوَةُ يُوسُفَ فَدَخَلُوا عَلَيْهِ فَعَرَفَهُمْ وَهُمْ لَهُ مُنْكِرُونَ».",
       "«Yusuf'un kardeşleri gelip onun yanına girdiler; o onları tanıdı, onlar ise onu tanımadılar.»"
      ],
      [
       "كَانُوا مُنْكِرِينَ لِيُوسُفَ لَا يَعْرِفُونَهُ، وَلٰكِنْ مَا أَنْكَرَهُمْ يُوسُفُ بَلْ عَرَفَهُمْ.",
       "Onlar Yusuf'u tanımıyorlardı; ama Yusuf onları tanımazlık etmedi, bilakis tanıdı."
      ],
      [
       "عَرَفَ يُوسُفُ أَنَّ هٰؤُلَاءِ هُمُ الَّذِينَ أَلْقَوْهُ فِي الْبِئْرِ.",
       "Yusuf bunların kendisini kuyuya atanlar olduğunu bildi."
      ],
      [
       "وَأَنَّ هٰؤُلَاءِ هُمُ الَّذِينَ كَانُوا يُرِيدُونَ قَتْلَهُ وَلٰكِنَّ اللهَ حَفِظَهُ.",
       "Ve bunların onu öldürmek isteyenler olduğunu; ama Allah onu korumuştu."
      ],
      [
       "وَلٰكِنْ يُوسُفُ لَمْ يَقُلْ لَهُمْ شَيْئًا وَلَمْ يَفْضَحْهُمْ.",
       "Fakat Yusuf onlara bir şey demedi ve onları rezil etmedi."
      ]
     ]
    },
    {
     "n": 18,
     "title_ar": "بَيْنَ يُوسُفَ وَإِخْوَتِهِ",
     "title_tr": "Yusuf ile kardeşleri arasında",
     "s": [
      [
       "وَكَلَّمَهُمْ يُوسُفُ وَقَالَ لَهُمْ:",
       "Yusuf onlarla konuştu ve dedi ki:"
      ],
      [
       "مِنْ أَيْنَ أَنْتُمْ؟",
       "Nerelisiniz?"
      ],
      [
       "قَالُوا: مِنْ كَنْعَانَ!",
       "Dediler ki: Ken'an'dan!"
      ],
      [
       "قَالَ: مَنْ أَبُوكُمْ؟",
       "Dedi ki: Babanız kim?"
      ],
      [
       "قَالُوا: يَعْقُوبُ بْنُ إِسْحَاقَ بْنِ إِبْرَاهِيمَ (عَلَيْهِمُ الصَّلَوَاتُ وَالسَّلَامُ).",
       "Dediler ki: İbrahim oğlu İshak oğlu Yakup (onlara salât ve selam olsun)."
      ],
      [
       "قَالَ: هَلْ لَكُمْ أَخٌ آخَرُ؟",
       "Dedi ki: Başka bir kardeşiniz var mı?"
      ],
      [
       "قَالُوا: نَعَمْ لَنَا أَخٌ اسْمُهُ بِنْيَامِينُ!",
       "Dediler ki: Evet, Bünyamin adında bir kardeşimiz var!"
      ],
      [
       "قَالَ: لِمَاذَا مَا جَاءَ مَعَكُمْ؟",
       "Dedi ki: Neden sizinle gelmedi?"
      ],
      [
       "قَالُوا: لِأَنَّ وَالِدَنَا لَا يَتْرُكُهُ وَلَا يُحِبُّ أَنْ يَبْعُدَ عَنْهُ.",
       "Dediler ki: Çünkü babamız onu bırakmıyor ve ondan uzak kalmak istemiyor."
      ],
      [
       "قَالَ: لِأَيِّ شَيْءٍ لَا يَتْرُكُهُ هَلْ هُوَ وَلَدٌ صَغِيرٌ جِدًّا؟",
       "Dedi ki: Onu neden bırakmıyor? O çok küçük bir çocuk mu?"
      ],
      [
       "قَالُوا: لَا، وَلٰكِنْ كَانَ لَهُ أَخٌ اسْمُهُ يُوسُفُ، ذَهَبَ مَعَنَا مَرَّةً، وَذَهَبْنَا نَسْتَبِقُ وَتَرَكْنَا يُوسُفَ عِنْدَ مَتَاعِنَا فَأَكَلَهُ الذِّئْبُ.",
       "Dediler ki: Hayır; ama onun Yusuf adında bir kardeşi vardı. Bir kere bizimle geldi; biz yarışmaya gittik, Yusuf'u eşyalarımızın yanında bıraktık ve onu kurt yedi."
      ],
      [
       "فَضَحِكَ يُوسُفُ فِي نَفْسِهِ وَلٰكِنْ لَمْ يَقُلْ شَيْئًا.",
       "Yusuf içinden güldü ama bir şey söylemedi."
      ],
      [
       "وَاشْتَاقَ يُوسُفُ إِلَى أَخِيهِ بِنْيَامِينَ.",
       "Yusuf kardeşi Bünyamin'i çok özledi."
      ],
      [
       "وَأَرَادَ اللهُ أَنْ يَمْتَحِنَ يَعْقُوبَ مَرَّةً ثَانِيَةً.",
       "Allah Yakup'u ikinci kez sınamak istedi."
      ],
      [
       "فَأَمَرَ لَهُمْ يُوسُفُ بِالطَّعَامِ.",
       "Yusuf onlara yiyecek verilmesini emretti."
      ],
      [
       "وَقَالَ لَهُمْ «ائْتُونِي بِأَخٍ لَكُمْ مِنْ أَبِيكُمْ».",
       "Ve onlara dedi ki: «Babanızdan olan kardeşinizi bana getirin.»"
      ],
      [
       "وَلَا تَجِدُونَ طَعَامًا إِذَا لَمْ تَأْتُوا بِهِ.",
       "Onu getirmezseniz yiyecek bulamazsınız."
      ],
      [
       "وَأَمَرَ يُوسُفُ بِمَالِهِمْ فَوُضِعَ فِي مَتَاعِهِمْ.",
       "Yusuf paralarının (geri) yüklerinin içine konmasını emretti."
      ]
     ]
    },
    {
     "n": 19,
     "title_ar": "بَيْنَ يَعْقُوبَ وَأَبْنَائِهِ",
     "title_tr": "Yakup ile oğulları arasında",
     "s": [
      [
       "وَرَجَعُوا إِلَى أَبِيهِمْ وَأَخْبَرُوهُ بِالْخَبَرِ وَقَالُوا لَهُ: أَرْسِلْ مَعَنَا أَخَانَا، وَإِلَّا لَا نَجِدُ خَيْرًا عِنْدَ الْعَزِيزِ.",
       "Babalarına döndüler, ona olanları anlattılar ve dediler ki: Kardeşimizi bizimle gönder; yoksa azizin yanında hiçbir hayır bulamayız."
      ],
      [
       "وَطَلَبُوا مِنْ يَعْقُوبَ بِنْيَامِينَ وَقَالُوا: «إِنَّا لَهُ لَحَافِظُونَ».",
       "Yakup'tan Bünyamin'i istediler ve dediler ki: «Biz onu mutlaka koruruz.»"
      ],
      [
       "قَالَ يَعْقُوبُ: «هَلْ آمَنُكُمْ عَلَيْهِ إِلَّا كَمَا أَمِنْتُكُمْ عَلَى أَخِيهِ مِنْ قَبْلُ».",
       "Yakup dedi ki: «Daha önce kardeşi hakkında size güvendiğim gibi mi onun hakkında da size güveneyim?»"
      ],
      [
       "هَلْ نَسِيتُمْ قِصَّةَ يُوسُفَ، أَتَحْفَظُونَ بِنْيَامِينَ كَمَا حَفِظْتُمْ يُوسُفَ.",
       "Yusuf'un hikâyesini unuttunuz mu? Bünyamin'i de Yusuf'u koruduğunuz gibi mi koruyacaksınız?"
      ],
      [
       "«اللهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ».",
       "«Allah en hayırlı koruyucudur; O merhametlilerin en merhametlisidir.»"
      ],
      [
       "وَوَجَدُوا مَالَهُمْ فِي مَتَاعِهِمْ فَقَالُوا لِأَبِيهِمْ:",
       "Paralarını yüklerinin içinde buldular ve babalarına dediler ki:"
      ],
      [
       "إِنَّ الْعَزِيزَ رَجُلٌ كَرِيمٌ، قَدْ رَدَّ مَالَنَا وَلَمْ يَأْخُذْ مِنَّا ثَمَنًا.",
       "Aziz cömert bir adam; paramızı geri verdi ve bizden ücret almadı."
      ],
      [
       "أَرْسِلْ مَعَنَا بِنْيَامِينَ نَأْخُذْ حَقَّهُ أَيْضًا.",
       "Bünyamin'i bizimle gönder, onun payını da alalım."
      ],
      [
       "قَالَ لَهُمْ يَعْقُوبُ لَنْ أُرْسِلَهُ مَعَكُمْ حَتَّى تُعَاهِدُوا اللهَ أَنَّكُمْ تَرْجِعُونَ بِهِ إِلَّا أَنْ يُحَاطَ بِكُمْ.",
       "Yakup onlara dedi ki: Başınıza çaresiz bir iş gelmedikçe onu geri getireceğinize Allah'a söz vermedikçe onu sizinle asla göndermem."
      ],
      [
       "وَعَاهَدُوا اللهَ وَقَالَ يَعْقُوبُ «اللهُ عَلَى مَا نَقُولُ وَكِيلٌ».",
       "Allah'a söz verdiler; Yakup dedi ki: «Söylediklerimize Allah vekildir.»"
      ],
      [
       "وَقَالَ يَعْقُوبُ لِبَنِيهِ: «يَا بَنِيَّ لَا تَدْخُلُوا مِنْ بَابٍ وَاحِدٍ وَادْخُلُوا مِنْ أَبْوَابٍ مُتَفَرِّقَةٍ».",
       "Yakup oğullarına dedi ki: «Oğullarım, tek bir kapıdan girmeyin; ayrı ayrı kapılardan girin.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 8,
   "emoji": "🏺",
   "title_ar": "بِنْيَامِينُ عِنْدَ يُوسُفَ",
   "title_tr": "Bünyamin Yusuf'un yanında",
   "pre": {
    "predict": {
     "prompt_tr": "Yusuf, kardeşi Bünyamin'in yanında kalmasını istiyor; ama kardeşler onu geri götürmeye söz vermişti. Sence Yusuf ne yapacak?",
     "options": [
      [
       "يَضَعُ الْإِنَاءَ فِي مَتَاعِ بِنْيَامِينَ",
       "Bünyamin'in yüküne bir kap koyacak"
      ],
      [
       "يَحْبِسُ جَمِيعَ الْإِخْوَةِ",
       "Bütün kardeşleri hapsedecek"
      ],
      [
       "يَذْهَبُ مَعَهُمْ إِلَى كَنْعَانَ",
       "Onlarla Ken'an'a gidecek"
      ]
     ]
    },
    "vocab": [
     [
      "إِنَاءٌ",
      "kap",
      "🏺"
     ],
     [
      "سَارِقٌ",
      "hırsız",
      "🕵️"
     ],
     [
      "يَفْقِدُ",
      "kaybeder",
      "❓"
     ],
     [
      "يَحْبِسُ",
      "alıkoyar, tutar",
      "✋"
     ],
     [
      "مُصِيبَةٌ",
      "musibet, felaket",
      "⛈️"
     ],
     [
      "حِكْمَةٌ",
      "hikmet",
      "🦉"
     ]
    ]
   },
   "stop": {
    "section": 20,
    "after": 13,
    "prompt_tr": "Münadi «Siz hırsızsınız!» diye seslendi. Sence kap kimin yükünden çıkacak?",
    "options": [
     [
      "مِنْ مَتَاعِ بِنْيَامِينَ",
      "Bünyamin'in yükünden"
     ],
     [
      "مِنْ مَتَاعِ الْأَخِ الْكَبِيرِ",
      "Büyük kardeşin yükünden"
     ],
     [
      "لَا يَجِدُونَهُ",
      "Bulamayacaklar"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "دَخَلَ الْإِخْوَةُ مِنْ أَبْوَابٍ مُتَفَرِّقَةٍ.",
     "قَالَ يُوسُفُ لِبِنْيَامِينَ: إِنِّي أَنَا أَخُوكَ.",
     "وَضَعَ يُوسُفُ الْإِنَاءَ فِي مَتَاعِ بِنْيَامِينَ.",
     "خَرَجَ الْإِنَاءُ مِنْ مَتَاعِ بِنْيَامِينَ.",
     "بَقِيَ الْأَخُ الْكَبِيرُ فِي مِصْرَ.",
     "قَالَ يَعْقُوبُ: عَسَى اللهُ أَنْ يَأْتِيَنِي بِهِمْ جَمِيعًا."
    ],
    "questions": [
     {
      "q": "مَاذَا قَالَ يُوسُفُ لِبِنْيَامِينَ؟",
      "qt": "Yusuf Bünyamin'e ne dedi?",
      "o": [
       "إِنِّي أَنَا أَخُوكَ",
       "أَنْتَ سَارِقٌ",
       "اِرْجِعْ إِلَى أَبِيكَ"
      ],
      "a": 0,
      "ev": [
       "20.2"
      ],
      "ot": [
       "Ben senin kardeşinim",
       "Sen hırsızsın",
       "Babana dön"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَحْبِسْ يُوسُفُ بِنْيَامِينَ بِغَيْرِ سَبَبٍ؟",
      "qt": "Yusuf Bünyamin'i neden sebepsiz alıkoymadı?",
      "o": [
       "لِأَنَّ النَّاسَ يَقُولُونَ: هٰذَا ظُلْمٌ",
       "لِأَنَّهُ لَا يُحِبُّهُ",
       "لِأَنَّ الْمَلِكَ مَنَعَهُ"
      ],
      "a": 0,
      "ev": [
       "20.9"
      ],
      "ot": [
       "Çünkü insanlar «Bu zulüm» der",
       "Çünkü onu sevmiyor",
       "Çünkü kral ona engel oldu"
      ]
     },
     {
      "q": "مَاذَا قَالَ الْإِخْوَةُ لَمَّا خَرَجَ الْإِنَاءُ؟",
      "qt": "Kap çıkınca kardeşler ne dedi?",
      "o": [
       "سَرَقَ أَخٌ لَهُ مِنْ قَبْلُ",
       "نَحْنُ وَضَعْنَاهُ",
       "هٰذَا إِنَاؤُنَا"
      ],
      "a": 0,
      "ev": [
       "20.19"
      ],
      "ot": [
       "Daha önce onun bir kardeşi de çalmıştı",
       "Onu biz koyduk",
       "Bu bizim kabımız"
      ]
     },
     {
      "q": "كَيْفَ كَانَ يُوسُفُ لَمَّا سَمِعَ الْبُهْتَانَ؟",
      "qt": "Yusuf iftirayı duyunca nasıldı?",
      "o": [
       "سَكَتَ وَلَمْ يَغْضَبْ",
       "غَضِبَ جِدًّا",
       "ضَحِكَ أَمَامَهُمْ"
      ],
      "a": 0,
      "ev": [
       "20.19"
      ],
      "ot": [
       "Sustu ve kızmadı",
       "Çok kızdı",
       "Onların önünde güldü"
      ]
     },
     {
      "q": "لِمَاذَا اطْمَأَنَّ يَعْقُوبُ؟",
      "qt": "Yakup neden rahatladı?",
      "o": [
       "لِأَنَّهُ عَلِمَ أَنَّ لِلّٰهِ حِكْمَةً",
       "لِأَنَّ بِنْيَامِينَ رَجَعَ",
       "لِأَنَّ الْإِخْوَةَ صَدَقُوا"
      ],
      "a": 0,
      "ev": [
       "21.5",
       "21.14"
      ],
      "ot": [
       "Çünkü bunda Allah'ın bir hikmeti olduğunu anladı",
       "Çünkü Bünyamin döndü",
       "Çünkü kardeşler doğruyu söyledi"
      ]
     }
    ],
    "focus": {
     "title": "Edilgen (meçhul) fiil: فُجِعَ، وُجِدَ",
     "explain": "Fiili yapanı söylemeden «yapıldı» demek için edilgen kullanılır. Geçmiş zamanda ilk harf ötreli, sondan önceki harf esrelidir: <span class='ar-inline'>وَجَدَ ← وُجِدَ</span> (bulundu), <span class='ar-inline'>فَجَعَ ← فُجِعَ</span> (acıya uğratıldı). Şimdiki zamanda ilk harf ötre, sondan önceki üstün: <span class='ar-inline'>يُفْجَعُ</span> (acıya uğratılır), <span class='ar-inline'>يُصْلَبُ</span> (asılır).",
     "examples": [
      "مَنْ وُجِدَ فِي رَحْلِهِ",
      "أَمْسِ فُجِعَ فِي يُوسُفَ",
      "الْيَوْمَ يُفْجَعُ فِي بِنْيَامِينَ"
     ],
     "items": [
      {
       "q": "جَزَاؤُهُ مَنْ ____ فِي رَحْلِهِ.",
       "o": [
        "وُجِدَ",
        "وَجَدَ",
        "يَجِدُ"
       ],
       "a": 0
      },
      {
       "q": "أَمْسِ ____ يَعْقُوبُ فِي يُوسُفَ.",
       "o": [
        "فُجِعَ",
        "فَجَعَ",
        "فَجَعُوا"
       ],
       "a": 0
      },
      {
       "q": "وَالْيَوْمَ ____ فِي بِنْيَامِينَ.",
       "o": [
        "يُفْجَعُ",
        "يَفْجَعُ",
        "فَجَعَ"
       ],
       "a": 0
      },
      {
       "q": "وَأَمَّا الْآخَرُ فَ____.",
       "o": [
        "يُصْلَبُ",
        "يَصْلُبُ",
        "صَلَبَ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ يُوسُفُ لِبِنْيَامِينَ: إِنِّي أَنَا {أَخُوكَ}. وَوَضَعَ {الْإِنَاءَ} فِي مَتَاعِ بِنْيَامِينَ. وَقَالَ الْمُؤَذِّنُ: إِنَّكُمْ {لَسَارِقُونَ}. وَبَقِيَ بِنْيَامِينُ عِنْدَ {يُوسُفَ}. وَقَالَ يَعْقُوبُ: عَسَى اللهُ أَنْ يَأْتِيَنِي بِهِمْ {جَمِيعًا}."
    },
    "think": {
     "q": "كَيْفَ اطْمَأَنَّ يَعْقُوبُ وَقَدْ فَقَدَ ثَلَاثَةً مِنْ أَبْنَائِهِ؟",
     "qt": "Üç oğlunu kaybetmişken Yakup nasıl rahatlayabildi?",
     "model": "Yakup olayları sırf talihsizlik olarak görmedi; Allah'ın bir babayı art arda bu kadar acıya boğmayacağını, bunun arkasında gizli bir hikmet olduğunu düşündü. Allah kullarını sınar, sonra sevindirir. Bu ümit onu rahatlattı."
    },
    "retell": [
     "بِنْيَامِينُ",
     "إِنِّي أَنَا أَخُوكَ",
     "الْإِنَاءُ",
     "سَارِقُونَ",
     "حِكْمَةٌ",
     "جَمِيعًا"
    ],
    "quran": [
     {
      "ar": "قَالَ إِنِّي أَنَا أَخُوكَ فَلَا تَبْتَئِسْ بِمَا كَانُوا يَعْمَلُونَ",
      "ref": "Yûsuf 12:69",
      "tr": "Dedi ki: Ben senin kardeşinim; onların yaptıklarına üzülme.",
      "inText": "«إِنِّي أَنَا أَخُوكَ»"
     },
     {
      "ar": "قَالُوا نَفْقِدُ صُوَاعَ الْمَلِكِ وَلِمَنْ جَاءَ بِهِ حِمْلُ بَعِيرٍ",
      "ref": "Yûsuf 12:72",
      "tr": "Dediler ki: Kralın su tasını kaybettik; onu getirene bir deve yükü var.",
      "inText": "نَفْقِدُ صُوَاعَ الْمَلِكِ ..."
     },
     {
      "ar": "قَالُوا إِنْ يَسْرِقْ فَقَدْ سَرَقَ أَخٌ لَهُ مِنْ قَبْلُ",
      "ref": "Yûsuf 12:77",
      "tr": "Dediler ki: Eğer o çaldıysa, daha önce onun bir kardeşi de çalmıştı.",
      "inText": "إِنْ يَسْرِقْ فَقَدْ سَرَقَ أَخٌ لَهُ مِنْ قَبْلُ"
     },
     {
      "ar": "عَسَى اللهُ أَنْ يَأْتِيَنِي بِهِمْ جَمِيعًا إِنَّهُ هُوَ الْعَلِيمُ الْحَكِيمُ",
      "ref": "Yûsuf 12:83",
      "tr": "Umulur ki Allah onların hepsini bana getirir; şüphesiz O her şeyi bilendir, hikmet sahibidir.",
      "inText": "«عَسَى اللهُ أَنْ يَأْتِيَنِي بِهِمْ جَمِيعًا...»"
     }
    ]
   },
   "sections": [
    {
     "n": 20,
     "title_ar": "بِنْيَامِينُ عِنْدَ يُوسُفَ",
     "title_tr": "Bünyamin Yusuf'un yanında",
     "s": [
      [
       "وَدَخَلَ الْإِخْوَةُ مِنْ أَبْوَابٍ مُتَفَرِّقَةٍ كَمَا أَمَرَهُمْ أَبُوهُمْ وَوَصَلُوا إِلَى يُوسُفَ.",
       "Kardeşler babalarının emrettiği gibi ayrı kapılardan girdiler ve Yusuf'a ulaştılar."
      ],
      [
       "وَلَمَّا رَأَى يُوسُفُ بِنْيَامِينَ فَرِحَ جِدًّا وَأَنْزَلَهُ فِي بَيْتِهِ.",
       "Yusuf Bünyamin'i görünce çok sevindi ve onu kendi evinde konakladı."
      ],
      [
       "وَقَالَ يُوسُفُ لِبِنْيَامِينَ «إِنِّي أَنَا أَخُوكَ».",
       "Yusuf Bünyamin'e dedi ki: «Ben senin kardeşinim.»"
      ],
      [
       "وَضَمَّ يُوسُفُ بِنْيَامِينَ بَعْدَ زَمَنٍ طَوِيلٍ فَذَكَرَ أُمَّهُ وَأَبَاهُ وَذَكَرَ بَيْتَهُ وَذَكَرَ صِغَرَهُ.",
       "Yusuf uzun bir zamandan sonra Bünyamin'e sarıldı; annesini, babasını, evini ve çocukluğunu hatırladı."
      ],
      [
       "وَأَرَادَ يُوسُفُ أَنْ يَبْقَى عِنْدَهُ بِنْيَامِينُ يَرَاهُ كُلَّ يَوْمٍ.",
       "Yusuf Bünyamin'in yanında kalmasını, onu her gün görmeyi istedi."
      ],
      [
       "وَيُكَلِّمُهُ وَيَسْأَلُهُ عَنْ بَيْتِهِ.",
       "Onunla konuşmayı ve ona evini sormayı (istedi)."
      ],
      [
       "وَلٰكِنْ كَيْفَ السَّبِيلُ إِلَى ذٰلِكَ، وَبِنْيَامِينُ رَاجِعٌ غَدًا إِلَى كَنْعَانَ؟",
       "Ama bunun yolu neydi? Bünyamin yarın Ken'an'a dönecekti."
      ],
      [
       "وَكَيْفَ السَّبِيلُ إِلَى ذٰلِكَ وَالْإِخْوَةُ عَاهَدُوا اللهَ عَلَى أَنْ يَرْجِعُوا بِهِ مَعَهُمْ؟",
       "Kardeşler onu kendileriyle geri götüreceklerine Allah'a söz vermişken bunun yolu ne olabilirdi?"
      ],
      [
       "وَكَيْفَ يُمْكِنُ لِيُوسُفَ أَنْ يَحْبِسَ بِنْيَامِينَ عِنْدَهُ بِغَيْرِ سَبَبٍ؟",
       "Yusuf Bünyamin'i sebepsiz yere yanında nasıl alıkoyabilirdi?"
      ],
      [
       "وَيَقُولُ النَّاسُ: قَدْ حَبَسَ الْعَزِيزُ عِنْدَهُ كَنْعَانِيًّا بِغَيْرِ سَبَبٍ، إِنَّ هٰذَا لَظُلْمٌ!",
       "(Yoksa) insanlar derdi ki: Aziz Ken'anlı birini sebepsiz yere alıkoydu; bu bir zulüm!"
      ],
      [
       "وَلٰكِنْ يُوسُفُ كَانَ ذَكِيًّا عَاقِلًا.",
       "Fakat Yusuf zeki ve akıllıydı."
      ],
      [
       "كَانَ عِنْدَ يُوسُفَ إِنَاءٌ ثَمِينٌ وَكَانَ يَشْرَبُ فِيهِ.",
       "Yusuf'un değerli bir kabı vardı ve onunla içerdi."
      ],
      [
       "وَضَعَ هٰذَا الْإِنَاءَ فِي مَتَاعِ بِنْيَامِينَ، وَأَذَّنَ مُؤَذِّنٌ إِنَّكُمْ لَسَارِقُونَ.",
       "Bu kabı Bünyamin'in yüküne koydu; sonra bir münadi «Siz hırsızsınız!» diye seslendi."
      ],
      [
       "وَالْتَفَتَ الْإِخْوَةُ، وَقَالُوا مَاذَا تَفْقِدُونَ؟",
       "Kardeşler dönüp dediler ki: Ne kaybettiniz?"
      ],
      [
       "قَالُوا: نَفْقِدُ صُوَاعَ (إِنَاءَ) الْمَلِكِ، وَلِمَنْ جَاءَ بِهِ حِمْلُ بَعِيرٍ.",
       "Dediler ki: Kralın su kabını (tasını) kaybettik; onu getirene bir deve yükü (ödül) var."
      ],
      [
       "«قَالُوا تَاللهِ لَقَدْ عَلِمْتُمْ مَا جِئْنَا لِنُفْسِدَ فِي الْأَرْضِ وَمَا كُنَّا سَارِقِينَ».",
       "«Dediler ki: Allah'a yemin olsun, siz de biliyorsunuz ki biz bu ülkede bozgunculuk yapmaya gelmedik; biz hırsız da değiliz.»"
      ],
      [
       "«قَالُوا فَمَا جَزَاؤُهُ إِنْ كُنْتُمْ كَاذِبِينَ».",
       "«Dediler ki: Eğer yalancıysanız bunun cezası nedir?»"
      ],
      [
       "«قَالُوا جَزَاؤُهُ مَنْ وُجِدَ فِي رَحْلِهِ فَهُوَ جَزَاؤُهُ كَذٰلِكَ نَجْزِي الظَّالِمِينَ».",
       "«Dediler ki: Cezası, (kap) kimin yükünde bulunursa onun kendisidir; biz zalimleri böyle cezalandırırız.»"
      ],
      [
       "وَخَرَجَ الْإِنَاءُ مِنْ مَتَاعِ بِنْيَامِينَ فَخَجِلَ الْإِخْوَةُ وَلٰكِنْ قَالُوا مِنْ غَيْرِ خَجَلٍ:",
       "Kap Bünyamin'in yükünden çıktı; kardeşler utandılar ama yine de utanmadan dediler ki:"
      ],
      [
       "إِنْ يَسْرِقْ (بِنْيَامِينُ) فَقَدْ سَرَقَ أَخٌ لَهُ (يُوسُفُ) مِنْ قَبْلُ، وَسَمِعَ يُوسُفُ هٰذَا الْبُهْتَانَ فَسَكَتَ وَلَمْ يَغْضَبْ وَكَانَ يُوسُفُ كَرِيمًا حَلِيمًا.",
       "Eğer o (Bünyamin) çaldıysa, daha önce onun bir kardeşi (Yusuf) de çalmıştı. Yusuf bu iftirayı duydu, sustu ve kızmadı; Yusuf cömert ve yumuşak huyluydu."
      ],
      [
       "«قَالُوا يَا أَيُّهَا الْعَزِيزُ إِنَّ لَهُ أَبًا شَيْخًا كَبِيرًا فَخُذْ أَحَدَنَا مَكَانَهُ إِنَّا نَرَاكَ مِنَ الْمُحْسِنِينَ».",
       "«Dediler ki: Ey aziz! Onun çok yaşlı bir babası var; onun yerine birimizi al. Biz seni iyilik edenlerden görüyoruz.»"
      ],
      [
       "«قَالَ مَعَاذَ اللهِ أَنْ نَأْخُذَ إِلَّا مَنْ وَجَدْنَا مَتَاعَنَا عِنْدَهُ إِنَّا إِذًا لَظَالِمُونَ».",
       "«Dedi ki: Eşyamızı kimin yanında bulduysak ondan başkasını almaktan Allah'a sığınırız; yoksa zalimlerden oluruz.»"
      ],
      [
       "وَهٰكَذَا بَقِيَ بِنْيَامِينُ عِنْدَ يُوسُفَ وَفَرِحَ الْأَخَوَانِ جَمِيعًا.",
       "Böylece Bünyamin Yusuf'un yanında kaldı ve iki kardeş birlikte sevindi."
      ],
      [
       "إِنَّ يُوسُفَ كَانَ وَحِيدًا مُنْذُ زَمَنٍ طَوِيلٍ لَا يَرَى أَحَدًا مِنْ أَهْلِهِ.",
       "Yusuf uzun zamandır yalnızdı; ailesinden kimseyi görmüyordu."
      ],
      [
       "وَقَدْ سَاقَ اللهُ إِلَيْهِ بِنْيَامِينَ أَفَلَا يَحْبِسُهُ عِنْدَهُ يَرَاهُ وَيُكَلِّمُهُ. وَهَلْ مِنَ الظُّلْمِ أَنْ يُقِيمَ أَخٌ عِنْدَ أَخِيهِ.",
       "Allah ona Bünyamin'i getirmişti; onu yanında tutup görmesin, onunla konuşmasın mı? Bir kardeşin kardeşinin yanında kalması zulüm müdür?"
      ],
      [
       "أَبَدًا! أَبَدًا!",
       "Asla! Asla!"
      ]
     ]
    },
    {
     "n": 21,
     "title_ar": "إِلَى يَعْقُوبَ",
     "title_tr": "Yakup'a dönüş",
     "s": [
      [
       "وَتَحَيَّرَ الْإِخْوَةُ كَيْفَ يَرْجِعُونَ إِلَى أَبِيهِمْ؟!",
       "Kardeşler şaşırıp kaldı: Babalarına nasıl döneceklerdi?!"
      ],
      [
       "وَفَكَّرَ الْإِخْوَةُ مَاذَا يَقُولُونَ لِأَبِيهِمْ؟!",
       "Kardeşler babalarına ne diyeceklerini düşündüler."
      ],
      [
       "إِنَّهُمْ فَجَعُوهُ أَمْسِ فِي يُوسُفَ، أَفَيَفْجَعُونَهُ الْيَوْمَ فِي بِنْيَامِينَ!",
       "Dün onu Yusuf'la acıya boğmuşlardı; bugün de Bünyamin'le mi acıya boğacaklardı!"
      ],
      [
       "أَمَّا كَبِيرُهُمْ فَأَبَى أَنْ يَرْجِعَ إِلَى يَعْقُوبَ وَقَالَ لِإِخْوَتِهِ:",
       "En büyükleri ise Yakup'a dönmeyi reddetti ve kardeşlerine dedi ki:"
      ],
      [
       "«ارْجِعُوا إِلَى أَبِيكُمْ فَقُولُوا يَا أَبَانَا إِنَّ ابْنَكَ سَرَقَ وَمَا شَهِدْنَا إِلَّا بِمَا عَلِمْنَا وَمَا كُنَّا لِلْغَيْبِ حَافِظِينَ».",
       "«Babanıza dönün ve deyin ki: Babamız, oğlun hırsızlık etti; biz yalnızca bildiğimize şahitlik ediyoruz; gaybı da bilemezdik.»"
      ],
      [
       "وَلَمَّا سَمِعَ يَعْقُوبُ الْقِصَّةَ عَلِمَ أَنَّ لِلّٰهِ يَدًا فِي ذٰلِكَ، وَأَنَّ لِلّٰهِ حِكْمَةً.",
       "Yakup olanları duyunca bunda Allah'ın bir eli ve bir hikmeti olduğunu anladı."
      ],
      [
       "أَمْسِ فُجِعَ فِي يُوسُفَ وَالْيَوْمَ يُفْجَعُ فِي بِنْيَامِينَ إِنَّ اللهَ لَا يَجْمَعُ عَلَيْهِ مُصِيبَتَيْنِ، إِنَّ اللهَ لَا يَفْجَعُهُ فِي ابْنَيْنِ.",
       "Dün Yusuf'la acıya uğradı, bugün Bünyamin'le; Allah ona iki musibeti bir arada vermez, onu iki oğluyla birden acıya boğmaz."
      ],
      [
       "إِنَّ اللهَ لَا يَفْجَعُهُ فِي ابْنَيْنِ كَيُوسُفَ وَبِنْيَامِينَ.",
       "Allah onu Yusuf ve Bünyamin gibi iki oğulla acıya boğmaz."
      ],
      [
       "إِنَّ لِلّٰهِ فِي ذٰلِكَ يَدًا خَفِيَّةً.",
       "Bunda Allah'ın gizli bir eli var."
      ],
      [
       "إِنَّ لِلّٰهِ فِي ذٰلِكَ حِكْمَةً مُخْفِيَّةً.",
       "Bunda Allah'ın gizli bir hikmeti var."
      ],
      [
       "إِنَّ اللهَ لَمْ يَزَلْ يَمْتَحِنُ عِبَادَهُ ثُمَّ يَسُرُّهُمْ وَيُنْعِمُ عَلَيْهِمْ.",
       "Allah kullarını hep sınar, sonra onları sevindirir ve nimet verir."
      ],
      [
       "ثُمَّ إِنَّ الِابْنَ الْكَبِيرَ بَقِيَ فِي مِصْرَ أَيْضًا وَأَبَى أَنْ يَرْجِعَ إِلَى كَنْعَانَ.",
       "Üstelik büyük oğul da Mısır'da kaldı ve Ken'an'a dönmeyi reddetti."
      ],
      [
       "أَفَيُفْجَعُ فِي الثَّالِثِ أَيْضًا وَقَدْ فُجِعَ مِنْ قَبْلُ فِي اثْنَيْنِ.",
       "Daha önce iki oğluyla acıya uğramışken üçüncüsüyle de mi acıya uğrayacaktı?"
      ],
      [
       "إِنَّ هٰذَا لَا يَكُونُ.",
       "Bu olamaz."
      ],
      [
       "وَهُنَا اطْمَأَنَّ يَعْقُوبُ وَقَالَ:",
       "İşte burada Yakup'un içi rahatladı ve dedi ki:"
      ],
      [
       "«عَسَى اللهُ أَنْ يَأْتِيَنِي بِهِمْ جَمِيعًا إِنَّهُ هُوَ الْعَلِيمُ الْحَكِيمُ».",
       "«Umulur ki Allah onların hepsini bana getirir; şüphesiz O her şeyi bilendir, hikmet sahibidir.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 9,
   "emoji": "👕",
   "title_ar": "يَظْهَرُ السِّرُّ",
   "title_tr": "Sır ortaya çıkıyor",
   "pre": {
    "predict": {
     "prompt_tr": "Başlık: «يَظْهَرُ السِّرُّ» (sır ortaya çıkıyor). Sence kardeşler Yusuf'u nasıl tanıyacak?",
     "options": [
      [
       "يُوسُفُ يَقُولُ لَهُمْ مَا فَعَلُوا بِهِ",
       "Yusuf onlara ona yaptıklarını söyleyecek"
      ],
      [
       "يَرَوْنَ قَمِيصَهُ",
       "Gömleğini görecekler"
      ],
      [
       "الْمَلِكُ يُخْبِرُهُمْ",
       "Kral onlara söyleyecek"
      ]
     ]
    },
    "vocab": [
     [
      "سِرٌّ",
      "sır",
      "🤫"
     ],
     [
      "حُزْنٌ",
      "hüzün, üzüntü",
      "😢"
     ],
     [
      "يَأْسٌ",
      "ümitsizlik",
      "🚫"
     ],
     [
      "رَائِحَةٌ / رِيحٌ",
      "koku",
      "👃"
     ],
     [
      "بَصِيرٌ",
      "gören",
      "👁️"
     ],
     [
      "يَغْفِرُ",
      "bağışlar",
      "🤲"
     ]
    ]
   },
   "stop": {
    "section": 22,
    "after": 13,
    "prompt_tr": "Yusuf kendini tutamadı ve konuşmaya başladı. Sence onlara ne söyleyecek?",
    "options": [
     [
      "هَلْ عَلِمْتُمْ مَا فَعَلْتُمْ بِيُوسُفَ؟",
      "Yusuf'a ne yaptığınızı biliyor musunuz?"
     ],
     [
      "اُخْرُجُوا مِنْ مِصْرَ!",
      "Mısır'dan çıkın!"
     ],
     [
      "أَعْطُونِي مَالًا",
      "Bana para verin"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَ يَعْقُوبُ: يَا أَسَفَى عَلَى يُوسُفَ.",
     "ذَهَبَ الْإِخْوَةُ إِلَى مِصْرَ مَرَّةً ثَالِثَةً.",
     "قَالَ يُوسُفُ: أَنَا يُوسُفُ وَهٰذَا أَخِي.",
     "أَلْقَى الْبَشِيرُ الْقَمِيصَ عَلَى وَجْهِ يَعْقُوبَ.",
     "اسْتَقْبَلَ يُوسُفُ أَبَوَيْهِ فِي مِصْرَ.",
     "تَوَفَّى اللهُ يُوسُفَ مُسْلِمًا."
    ],
    "questions": [
     {
      "q": "إِلَى مَنْ كَانَ يَعْقُوبُ يَشْكُو حُزْنَهُ؟",
      "qt": "Yakup hüznünü kime açıyordu?",
      "o": [
       "إِلَى اللهِ",
       "إِلَى أَبْنَائِهِ",
       "إِلَى الْمَلِكِ"
      ],
      "a": 0,
      "ev": [
       "22.3"
      ],
      "ot": [
       "Allah'a",
       "Oğullarına",
       "Krala"
      ]
     },
     {
      "q": "كَيْفَ عَلِمَ الْإِخْوَةُ أَنَّهُ يُوسُفُ؟",
      "qt": "Kardeşler onun Yusuf olduğunu nasıl anladı?",
      "o": [
       "لِأَنَّ السِّرَّ لَا يَعْلَمُهُ إِلَّا يُوسُفُ وَهُمْ",
       "لِأَنَّهُمْ رَأَوْا قَمِيصَهُ",
       "لِأَنَّ بِنْيَامِينَ أَخْبَرَهُمْ"
      ],
      "a": 0,
      "ev": [
       "22.15"
      ],
      "ot": [
       "Çünkü bu sırrı Yusuf ve onlardan başkası bilmiyordu",
       "Çünkü onun gömleğini gördüler",
       "Çünkü Bünyamin onlara söyledi"
      ]
     },
     {
      "q": "هَلْ لَامَ يُوسُفُ إِخْوَتَهُ؟",
      "qt": "Yusuf kardeşlerini kınadı mı?",
      "o": [
       "لَا، قَالَ: يَغْفِرُ اللهُ لَكُمْ",
       "نَعَمْ، لَامَهُمْ كَثِيرًا",
       "نَعَمْ، وَحَبَسَهُمْ"
      ],
      "a": 0,
      "ev": [
       "22.26",
       "22.27"
      ],
      "ot": [
       "Hayır, «Allah sizi bağışlasın» dedi",
       "Evet, onları çok kınadı",
       "Evet, ve onları hapsetti"
      ]
     },
     {
      "q": "مَاذَا حَدَثَ لَمَّا أُلْقِيَ الْقَمِيصُ عَلَى وَجْهِ يَعْقُوبَ؟",
      "qt": "Gömlek Yakup'un yüzüne konunca ne oldu?",
      "o": [
       "ارْتَدَّ بَصِيرًا",
       "بَكَى",
       "نَامَ"
      ],
      "a": 0,
      "ev": [
       "24.3"
      ],
      "ot": [
       "Gözleri yeniden gördü",
       "Ağladı",
       "Uyudu"
      ]
     },
     {
      "q": "كَيْفَ كَانَ يُوسُفُ يُرِيدُ أَنْ يَمُوتَ؟",
      "qt": "Yusuf nasıl ölmek istiyordu?",
      "o": [
       "مَوْتَ عَبْدٍ مَعَ الصَّالِحِينَ",
       "مَوْتَ مَلِكٍ مَعَ الْمُلُوكِ",
       "فِي كَنْعَانَ"
      ],
      "a": 0,
      "ev": [
       "25.5"
      ],
      "ot": [
       "Bir kul olarak, salihlerle birlikte",
       "Bir kral olarak, krallarla birlikte",
       "Ken'an'da"
      ]
     }
    ],
    "focus": {
     "title": "Tekrar okuma: Rüya gerçek oldu",
     "explain": "Kıssa, başladığı cümleyle bitiyor: <span class='ar-inline'>إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ</span>. <b>رَأَيْتُ</b> (gördüm) birinci şahıs geçmiş zamandır; <b>رَأَيْتُهُمْ</b> (onları gördüm) sonuna zamir almıştır. Ünite 1'deki rüyayı ve buradaki yorumunu karşılaştır: 11 yıldız = 11 kardeş, güneş ve ay = anne ve baba.",
     "examples": [
      "رَأَيْتُ",
      "رَأَيْتُهُمْ لِي سَاجِدِينَ",
      "هٰذَا تَأْوِيلُ رُؤْيَايَ"
     ],
     "items": [
      {
       "q": "أَحَدَ عَشَرَ كَوْكَبًا = ____",
       "o": [
        "الْإِخْوَةُ",
        "الْأَبَوَانِ",
        "الْمُلُوكُ"
       ],
       "a": 0
      },
      {
       "q": "الشَّمْسُ وَالْقَمَرُ = ____",
       "o": [
        "الْأَبَوَانِ",
        "الْإِخْوَةُ",
        "الْمَلِكُ وَالْعَزِيزُ"
       ],
       "a": 0
      },
      {
       "q": "إِنِّي ____ أَحَدَ عَشَرَ كَوْكَبًا.",
       "o": [
        "رَأَيْتُ",
        "رَأَى",
        "رَأَوْا"
       ],
       "a": 0
      },
      {
       "q": "هٰذَا تَأْوِيلُ ____ مِنْ قَبْلُ.",
       "o": [
        "رُؤْيَايَ",
        "رُؤْيَاهُ",
        "رُؤْيَاكَ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ يَعْقُوبُ: يَا {أَسَفَى} عَلَى يُوسُفَ. وَقَالَ يُوسُفُ: أَنَا يُوسُفُ وَهٰذَا {أَخِي}. وَأَلْقَى الْبَشِيرُ {الْقَمِيصَ} عَلَى وَجْهِ يَعْقُوبَ فَارْتَدَّ {بَصِيرًا}. وَقَالَ يُوسُفُ: هٰذَا تَأْوِيلُ {رُؤْيَايَ} مِنْ قَبْلُ."
    },
    "think": {
     "q": "لِمَاذَا تُسَمَّى قِصَّةُ يُوسُفَ «أَحْسَنَ الْقَصَصِ»؟",
     "qt": "Yusuf kıssası neden «kıssaların en güzeli» diye anılır?",
     "model": "Kişisel bir yanıt sorusu. Olası fikirler: Rüyayla başlayıp rüyanın gerçekleşmesiyle biten bütünlüklü bir yapısı var; kıskançlık, sabır, dürüstlük, affetme gibi pek çok değeri bir arada gösteriyor; kuyudan saraya uzanan bir yolculukla sabrın güzel sonucunu anlatıyor."
    },
    "retell": [
     "يَعْقُوبُ",
     "حُزْنٌ",
     "السِّرُّ",
     "يَغْفِرُ اللهُ لَكُمْ",
     "الْقَمِيصُ",
     "بَصِيرًا"
    ],
    "quran": [
     {
      "ar": "قَالَ إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللهِ وَأَعْلَمُ مِنَ اللهِ مَا لَا تَعْلَمُونَ",
      "ref": "Yûsuf 12:86",
      "tr": "Dedi ki: Ben derdimi ve hüznümü yalnızca Allah'a açıyorum; ben Allah tarafından sizin bilmediğiniz şeyleri bilirim.",
      "inText": "«إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللهِ...»"
     },
     {
      "ar": "قَالُوا أَإِنَّكَ لَأَنْتَ يُوسُفُ قَالَ أَنَا يُوسُفُ وَهٰذَا أَخِي قَدْ مَنَّ اللهُ عَلَيْنَا إِنَّهُ مَنْ يَتَّقِ وَيَصْبِرْ فَإِنَّ اللهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
      "ref": "Yûsuf 12:90",
      "tr": "Dediler ki: Yoksa sen gerçekten Yusuf musun? Dedi ki: Ben Yusuf'um, bu da kardeşim. Allah bize lütufta bulundu. Kim Allah'tan sakınır ve sabrederse, Allah iyilik edenlerin mükâfatını zayi etmez.",
      "inText": "«أَنَا يُوسُفُ وَهٰذَا أَخِي...»"
     },
     {
      "ar": "قَالَ لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ يَغْفِرُ اللهُ لَكُمْ وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
      "ref": "Yûsuf 12:92",
      "tr": "Dedi ki: Bugün size hiçbir kınama yok. Allah sizi bağışlasın; O merhametlilerin en merhametlisidir.",
      "inText": "«يَغْفِرُ اللهُ لَكُمْ...»"
     },
     {
      "ar": "اذْهَبُوا بِقَمِيصِي هٰذَا فَأَلْقُوهُ عَلَى وَجْهِ أَبِي يَأْتِ بَصِيرًا وَأْتُونِي بِأَهْلِكُمْ أَجْمَعِينَ",
      "ref": "Yûsuf 12:93",
      "tr": "Bu gömleğimi götürün, babamın yüzüne koyun; gözleri açılır. Bütün ailenizi de bana getirin.",
      "inText": "«اذْهَبُوا بِقَمِيصِي هٰذَا...»"
     },
     {
      "ar": "رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ وَعَلَّمْتَنِي مِنْ تَأْوِيلِ الْأَحَادِيثِ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنْتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
      "ref": "Yûsuf 12:101",
      "tr": "Rabbim! Bana mülkten verdin, bana olayların yorumunu öğrettin. Ey göklerin ve yerin yaratıcısı! Dünyada ve ahirette benim velim sensin. Canımı Müslüman olarak al ve beni salihlere kat.",
      "inText": "«رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ...»"
     }
    ]
   },
   "sections": [
    {
     "n": 22,
     "title_ar": "يَظْهَرُ السِّرُّ",
     "title_tr": "Sır ortaya çıkıyor",
     "s": [
      [
       "وَلٰكِنْ يَعْقُوبُ كَانَ بَشَرًا فِي صَدْرِهِ قَلْبُ بَشَرٍ لَا قِطْعَةُ حَجَرٍ.",
       "Fakat Yakup bir insandı; göğsünde bir taş parçası değil, insan kalbi vardı."
      ],
      [
       "فَتَذَكَّرَ يُوسُفَ وَتَجَدَّدَ حُزْنُهُ وَقَالَ «يَا أَسَفَى عَلَى يُوسُفَ».",
       "Yusuf'u hatırladı, hüznü tazelendi ve dedi ki: «Vah Yusuf'um vah!»"
      ],
      [
       "وَلَامَهُ أَبْنَاؤُهُ وَقَالُوا إِنَّكَ لَا تَزَالُ تَذْكُرُ يُوسُفَ حَتَّى تَهْلِكَ.",
       "Oğulları onu kınadı ve dediler ki: Sen helak olana kadar Yusuf'u anıp duracaksın."
      ],
      [
       "قَالَ يَعْقُوبُ: «إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللهِ وَأَعْلَمُ مِنَ اللهِ مَا لَا تَعْلَمُونَ».",
       "Yakup dedi ki: «Ben derdimi ve hüznümü yalnızca Allah'a açıyorum; ben Allah tarafından sizin bilmediğiniz şeyleri bilirim.»"
      ],
      [
       "وَكَانَ يَعْقُوبُ يَعْلَمُ أَنَّ الْيَأْسَ كُفْرٌ، وَكَانَ يَعْقُوبُ لَهُ رَجَاءٌ كَبِيرٌ فِي اللهِ.",
       "Yakup ümitsizliğin küfür olduğunu biliyordu; Yakup'un Allah'a büyük bir ümidi vardı."
      ],
      [
       "وَأَرْسَلَ يَعْقُوبُ أَبْنَاءَهُ إِلَى مِصْرَ لِيَبْحَثُوا عَنْ يُوسُفَ وَبِنْيَامِينَ وَيَتَجَسَّسُوا ذٰلِكَ.",
       "Yakup oğullarını Yusuf'u ve Bünyamin'i aramaları ve araştırmaları için Mısır'a gönderdi."
      ],
      [
       "وَنَهَاهُمْ يَعْقُوبُ مِنْ أَنْ يَقْنَطُوا مِنْ رَحْمَةِ اللهِ.",
       "Yakup onları Allah'ın rahmetinden ümit kesmekten sakındırdı."
      ],
      [
       "وَذَهَبَ الْإِخْوَةُ إِلَى مِصْرَ مَرَّةً ثَالِثَةً.",
       "Kardeşler üçüncü kez Mısır'a gittiler."
      ],
      [
       "وَدَخَلُوا عَلَى يُوسُفَ وَشَكَوْا إِلَيْهِ فَقْرَهُمْ وَمُصِيبَتَهُمْ وَسَأَلُوهُ الْفَضْلَ.",
       "Yusuf'un yanına girdiler; ona yoksulluklarından ve başlarına gelenlerden yakındılar ve ondan lütuf istediler."
      ],
      [
       "وَهُنَا هَاجَ الْحُزْنُ وَالْحُبُّ فِي يُوسُفَ وَلَمْ يَمْلِكْ نَفْسَهُ.",
       "İşte burada Yusuf'un içinde hüzün ve sevgi kabardı; kendini tutamadı."
      ],
      [
       "أَبْنَاءُ أَبِي وَأَبْنَاءُ الْأَنْبِيَاءِ يَشْكُونَ فَقْرَهُمْ وَمُصِيبَتَهُمْ إِلَى مَلِكٍ مِنَ الْمُلُوكِ.",
       "Babamın oğulları, peygamberlerin oğulları yoksulluklarını ve dertlerini krallardan bir krala mı yakınıyor!"
      ],
      [
       "إِلَى مَتَى أُخْفِي الْأَمْرَ عَنْهُمْ وَإِلَى مَتَى أَرَى حَالَهُمْ.",
       "Bu işi onlardan ne zamana kadar gizleyeceğim, onların bu hâlini ne zamana kadar göreceğim?"
      ],
      [
       "وَإِلَى مَتَى لَا أَرَى أَبِي؟",
       "Babamı ne zamana kadar görmeyeceğim?"
      ],
      [
       "لَمْ يَمْلِكْ يُوسُفُ نَفْسَهُ وَقَالَ لَهُمْ:",
       "Yusuf kendini tutamadı ve onlara dedi ki:"
      ],
      [
       "«هَلْ عَلِمْتُمْ مَا فَعَلْتُمْ بِيُوسُفَ وَأَخِيهِ إِذْ أَنْتُمْ جَاهِلُونَ».",
       "«Siz cahilken Yusuf'a ve kardeşine ne yaptığınızı biliyor musunuz?»"
      ],
      [
       "وَكَانَ الْإِخْوَةُ يَعْلَمُونَ أَنَّ هٰذَا السِّرَّ لَا يَعْلَمُهُ إِلَّا يُوسُفُ وَنَحْنُ.",
       "Kardeşler bu sırrı Yusuf'tan ve kendilerinden başka kimsenin bilmediğini biliyorlardı."
      ],
      [
       "فَعَلِمُوا أَنَّهُ يُوسُفُ.",
       "Onun Yusuf olduğunu anladılar."
      ],
      [
       "سُبْحَانَ اللهِ! هَلْ يُوسُفُ حَيٌّ، أَمَا مَاتَ فِي الْبِئْرِ.",
       "Sübhanallah! Yusuf yaşıyor mu? Kuyuda ölmedi mi?"
      ],
      [
       "يَا سَلَامُ! هَلْ يُوسُفُ عَزِيزُ مِصْرَ؟",
       "Aman Allah'ım! Yusuf, Mısır'ın azizi mi?"
      ],
      [
       "هُوَ الَّذِي عَلَى خَزَائِنِ الْأَرْضِ؟",
       "Ülkenin hazinelerinin başındaki o mu?"
      ],
      [
       "هُوَ الَّذِي كَانَ يَأْمُرُ لَنَا بِالطَّعَامِ؟",
       "Bize yiyecek verilmesini emreden o mu?"
      ],
      [
       "وَمَا بَقِيَ عِنْدَهُمْ شَكٌّ أَنَّ الَّذِي يُكَلِّمُهُمْ هُوَ يُوسُفُ بْنُ يَعْقُوبَ!",
       "Kendileriyle konuşanın Yakup oğlu Yusuf olduğundan artık hiç şüpheleri kalmadı!"
      ],
      [
       "«قَالُوا أَإِنَّكَ لَأَنْتَ يُوسُفُ».",
       "«Dediler ki: Yoksa sen gerçekten Yusuf musun?»"
      ],
      [
       "قَالَ «أَنَا يُوسُفُ وَهٰذَا أَخِي، قَدْ مَنَّ اللهُ عَلَيْنَا».",
       "Dedi ki: «Ben Yusuf'um, bu da kardeşim; Allah bize lütufta bulundu.»"
      ],
      [
       "«إِنَّهُ مَنْ يَتَّقِ وَيَصْبِرْ فَإِنَّ اللهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ».",
       "«Kim Allah'tan sakınır ve sabrederse, şüphesiz Allah iyilik edenlerin mükâfatını zayi etmez.»"
      ],
      [
       "«قَالُوا تَاللهِ لَقَدْ آثَرَكَ اللهُ عَلَيْنَا وَإِنْ كُنَّا لَخَاطِئِينَ».",
       "«Dediler ki: Allah'a yemin olsun, Allah seni bize üstün kıldı; biz gerçekten hata etmişiz.»"
      ],
      [
       "وَمَا لَامَهُمْ يُوسُفُ عَلَى فِعْلَتِهِمْ، بَلْ قَالَ:",
       "Yusuf onları yaptıkları için kınamadı; bilakis dedi ki:"
      ],
      [
       "«يَغْفِرُ اللهُ لَكُمْ وَهُوَ أَرْحَمُ الرَّاحِمِينَ».",
       "«Allah sizi bağışlasın; O merhametlilerin en merhametlisidir.»"
      ]
     ]
    },
    {
     "n": 23,
     "title_ar": "يُوسُفُ يُرْسِلُ إِلَى يَعْقُوبَ",
     "title_tr": "Yusuf Yakup'a haber gönderiyor",
     "s": [
      [
       "وَاشْتَاقَ يُوسُفُ إِلَى لِقَاءِ يَعْقُوبَ، وَكَيْفَ لَا يَشْتَاقُ وَقَدْ طَالَ الْفِرَاقُ.",
       "Yusuf Yakup'la buluşmayı çok özledi; ayrılık bu kadar uzamışken nasıl özlemesin?"
      ],
      [
       "وَلِمَاذَا يَصْبِرُ الْآنَ وَقَدْ ظَهَرَ السِّرُّ.",
       "Sır ortaya çıkmışken şimdi neden sabretsin?"
      ],
      [
       "وَكَيْفَ يَطِيبُ لَهُ الشَّرَابُ وَالطَّعَامُ وَأَبُوهُ لَا يَطِيبُ لَهُ شَرَابٌ وَلَا طَعَامٌ وَلَا مَنَامٌ.",
       "Babasına ne içecek ne yemek ne de uyku tatlı gelmezken ona yemek ve içecek nasıl tatlı gelsin?"
      ],
      [
       "قَدِ انْكَشَفَ السِّرُّ، وَقَدْ ظَهَرَ السِّرُّ، وَقَدْ أَرَادَ اللهُ أَنْ تَقَرَّ عَيْنُ يَعْقُوبَ.",
       "Sır açığa çıktı, sır ortaya çıktı; Allah Yakup'un gözünün aydın olmasını diledi."
      ],
      [
       "وَكَانَ يَعْقُوبُ قَدْ عَمِيَ مِنْ كَثْرَةِ الْبُكَاءِ وَالْحُزْنِ.",
       "Yakup çok ağlamaktan ve üzüntüden gözlerini kaybetmişti."
      ],
      [
       "فَقَالَ يُوسُفُ:",
       "Yusuf dedi ki:"
      ],
      [
       "«اذْهَبُوا بِقَمِيصِي هٰذَا فَأَلْقُوهُ عَلَى وَجْهِ أَبِي يَأْتِ بَصِيرًا، وَأْتُونِي بِأَهْلِكُمْ أَجْمَعِينَ».",
       "«Bu gömleğimi götürün, babamın yüzüne koyun; gözleri açılır. Bütün ailenizi de bana getirin.»"
      ]
     ]
    },
    {
     "n": 24,
     "title_ar": "يَعْقُوبُ عِنْدَ يُوسُفَ",
     "title_tr": "Yakup Yusuf'un yanında",
     "s": [
      [
       "وَلَمَّا سَارَ الرِّجَالُ بِقَمِيصِ يُوسُفَ إِلَى كَنْعَانَ.",
       "Adamlar Yusuf'un gömleğiyle Ken'an'a doğru yola çıkınca,"
      ],
      [
       "أَحَسَّ يَعْقُوبُ رَائِحَةَ يُوسُفَ، وَقَالَ: «إِنِّي لَأَجِدُ رِيحَ يُوسُفَ».",
       "Yakup Yusuf'un kokusunu hissetti ve dedi ki: «Ben Yusuf'un kokusunu alıyorum.»"
      ],
      [
       "قَالُوا تَاللهِ إِنَّكَ لَفِي ضَلَالِكَ الْقَدِيمِ.",
       "Dediler ki: Allah'a yemin olsun, sen hâlâ eski yanılgındasın."
      ],
      [
       "وَلٰكِنْ كَانَ يَعْقُوبُ صَادِقًا، فَلَمَّا أَنْ جَاءَ الْبَشِيرُ أَلْقَاهُ عَلَى وَجْهِهِ فَارْتَدَّ بَصِيرًا، قَالَ أَلَمْ أَقُلْ لَكُمْ إِنِّي أَعْلَمُ مِنَ اللهِ مَا لَا تَعْلَمُونَ.",
       "Fakat Yakup doğru söylüyordu. Müjdeci gelip gömleği onun yüzüne koyunca gözleri yeniden gördü. Dedi ki: Size, ben Allah tarafından sizin bilmediğiniz şeyleri bilirim, dememiş miydim?"
      ],
      [
       "«قَالُوا يَا أَبَانَا اسْتَغْفِرْ لَنَا ذُنُوبَنَا إِنَّا كُنَّا خَاطِئِينَ».",
       "«Dediler ki: Babamız, günahlarımız için bağışlanma dile; biz gerçekten hata etmişiz.»"
      ],
      [
       "«قَالَ سَوْفَ أَسْتَغْفِرُ لَكُمْ رَبِّي إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ».",
       "«Dedi ki: Sizin için Rabbimden bağışlanma dileyeceğim; şüphesiz O çok bağışlayan, çok merhametlidir.»"
      ],
      [
       "وَلَمَّا وَصَلَ يَعْقُوبُ إِلَى مِصْرَ اسْتَقْبَلَهُ يُوسُفُ، وَلَا تَسْأَلْ عَنْ فَرَحِهِمَا وَسُرُورِهِمَا.",
       "Yakup Mısır'a varınca Yusuf onu karşıladı; ikisinin sevincini ve mutluluğunu hiç sorma!"
      ],
      [
       "وَكَانَ يَوْمًا مَشْهُودًا فِي مِصْرَ وَكَانَ يَوْمًا مُبَارَكًا.",
       "Mısır'da unutulmaz bir gündü, mübarek bir gündü."
      ],
      [
       "وَرَفَعَ يُوسُفُ أَبَوَيْهِ عَلَى الْعَرْشِ وَوَقَعُوا كُلُّهُمْ سُجَّدًا لِيُوسُفَ.",
       "Yusuf anne-babasını tahtın üzerine çıkardı; hepsi Yusuf için secdeye kapandılar."
      ],
      [
       "وَقَالَ يُوسُفُ: «هٰذَا تَأْوِيلُ رُؤْيَايَ مِنْ قَبْلُ قَدْ جَعَلَهَا رَبِّي حَقًّا».",
       "Yusuf dedi ki: «Bu, daha önceki rüyamın yorumudur; Rabbim onu gerçek kıldı.»"
      ],
      [
       "«إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ».",
       "«Ben on bir yıldız, güneş ve ay gördüm; onları bana secde ederken gördüm.»"
      ],
      [
       "وَحَمِدَ يُوسُفُ اللهَ حَمْدًا طَيِّبًا كَثِيرًا.",
       "Yusuf Allah'a güzel ve bol bol hamdetti."
      ],
      [
       "وَشَكَرَ يُوسُفُ عَلَى ذٰلِكَ شُكْرًا عَظِيمًا.",
       "Yusuf bunun için büyük bir şükürle şükretti."
      ],
      [
       "وَبَقِيَ يَعْقُوبُ وَآلُ يَعْقُوبَ فِي مِصْرَ زَمَنًا طَوِيلًا.",
       "Yakup ve Yakup ailesi Mısır'da uzun bir süre kaldı."
      ],
      [
       "وَمَاتَ يَعْقُوبُ وَزَوْجُهُ فِي مِصْرَ.",
       "Yakup ve eşi Mısır'da vefat etti."
      ]
     ]
    },
    {
     "n": 25,
     "title_ar": "حُسْنُ الْعَاقِبَةِ",
     "title_tr": "Güzel son",
     "s": [
      [
       "وَلَمْ يَشْغَلْ يُوسُفَ هٰذَا الْمُلْكُ الْعَظِيمُ عَنِ اللهِ وَلَمْ يُغَيِّرْهُ.",
       "Bu büyük mülk Yusuf'u Allah'tan alıkoymadı ve onu değiştirmedi."
      ],
      [
       "وَكَانَ يُوسُفُ يَذْكُرُ اللهَ وَيَعْبُدُهُ وَيَخَافُهُ.",
       "Yusuf Allah'ı anar, O'na ibadet eder ve O'ndan korkardı."
      ],
      [
       "وَكَانَ يُوسُفُ يَحْكُمُ بِحُكْمِ اللهِ وَيُنَفِّذُ أَوَامِرَ اللهِ.",
       "Yusuf Allah'ın hükmüyle hükmeder ve Allah'ın emirlerini uygulardı."
      ],
      [
       "وَكَانَ يُوسُفُ لَا يَرَى الْمُلْكَ كَبِيرًا وَلَا يَعُدُّهُ شَيْئًا كَبِيرًا.",
       "Yusuf mülkü büyük görmez ve onu büyük bir şey saymazdı."
      ],
      [
       "وَكَانَ يُوسُفُ لَا يُحِبُّ أَنْ يَمُوتَ مَوْتَ مَلِكٍ وَيُحْشَرَ مَعَ الْمُلُوكِ.",
       "Yusuf bir kral gibi ölüp krallarla birlikte haşredilmeyi istemezdi."
      ],
      [
       "بَلْ كَانَ يُحِبُّ أَنْ يَمُوتَ مَوْتَ عَبْدٍ وَيُحْشَرَ مَعَ الصَّالِحِينَ.",
       "Bilakis bir kul gibi ölüp salihlerle birlikte haşredilmeyi isterdi."
      ],
      [
       "وَكَانَ دُعَاءُ يُوسُفَ:",
       "Yusuf'un duası şuydu:"
      ],
      [
       "«رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ وَعَلَّمْتَنِي مِنْ تَأْوِيلِ الْأَحَادِيثِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنْتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ».",
       "«Rabbim! Bana mülkten verdin ve bana olayların yorumunu öğrettin. Ey göklerin ve yerin yaratıcısı! Dünyada ve ahirette benim velim sensin. Canımı Müslüman olarak al ve beni salihlere kat.»"
      ],
      [
       "وَتَوَفَّاهُ اللهُ مُسْلِمًا وَأَلْحَقَهُ بِآبَائِهِ إِبْرَاهِيمَ وَإِسْحَاقَ وَيَعْقُوبَ صَلَّى اللهُ عَلَيْهِمْ وَعَلَى نَبِيِّنَا وَسَلَّمَ.",
       "Allah onun canını Müslüman olarak aldı ve onu ataları İbrahim, İshak ve Yakup'a kattı. Allah onlara ve peygamberimize salât ve selam etsin."
      ]
     ]
    }
   ]
  }
 ]
});
