/* Kasasu'n-Nebiyyîn — Hz. Hûd kıssası (s. 99–114)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "hud",
 "title_ar": "قِصَّةُ هُودٍ عَلَيْهِ السَّلَامُ",
 "title_tr": "Hz. Hûd'un Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 99–114 («الْعَاصِفَةُ»)",
 "overrides": {
  "عاد": "عاد_قوم",
  "عادا": "عاد_قوم",
  "لعاد": "عاد_قوم"
 },
 "units": [
  {
   "id": 1,
   "emoji": "🐪",
   "title_ar": "نِعَمُ عَادٍ",
   "title_tr": "Âd'ın nimetleri",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «بَعْدَ نُوحٍ», «كُفْرَانُ عَادٍ». Âd güçlü ve zengin bir kavimdi. Sence bu nimetlere karşı nasıl davrandılar?",
     "options": [
      [
       "لَمْ يَشْكُرُوا اللهَ",
       "Allah'a şükretmediler"
      ],
      [
       "شَكَرُوا اللهَ كَثِيرًا",
       "Allah'a çok şükrettiler"
      ],
      [
       "أَعْطَوْهَا لِلْفُقَرَاءِ",
       "Hepsini yoksullara verdiler"
      ]
     ]
    },
    "vocab": [
     [
      "قَوِيٌّ ج أَقْوِيَاءُ",
      "güçlü",
      "💪"
     ],
     [
      "حَدِيدٌ",
      "demir",
      "⚙️"
     ],
     [
      "إِبِلٌ / غَنَمٌ / خَيْلٌ",
      "develer / koyunlar / atlar",
      "🐪"
     ],
     [
      "تَمْلَأُ",
      "doldurur",
      "🫙"
     ],
     [
      "بَسَاتِينُ وَعُيُونٌ",
      "bahçeler ve pınarlar",
      "🌳"
     ],
     [
      "يَنْحَتُ",
      "yontar",
      "🪨"
     ]
    ]
   },
   "stop": {
    "section": 1,
    "after": 9,
    "prompt_tr": "Âd'ın her şeyi vardı: güç, hayvanlar, çocuklar, yeşil bahçeler. Bölüm başlığı «كُفْرَانُ عَادٍ» (Âd'ın nankörlüğü). Sence ne oldu?",
    "options": [
     [
      "نَسُوا اللهَ وَعَبَدُوا الْأَصْنَامَ",
      "Allah'ı unutup putlara taptılar"
     ],
     [
      "تَرَكُوا أَرْضَهُمْ",
      "Topraklarını terk ettiler"
     ],
     [
      "صَارُوا فُقَرَاءَ",
      "Yoksul oldular"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "انْتَشَرَتْ ذُرِّيَّةُ نُوحٍ فِي الْأَرْضِ.",
     "كَانَتْ عَادٌ أُمَّةً قَوِيَّةً.",
     "بَارَكَ اللهُ لِعَادٍ فِي كُلِّ شَيْءٍ.",
     "لَمْ يَشْكُرُوا اللهَ عَلَى النِّعَمِ.",
     "نَسُوا قِصَّةَ الطُّوفَانِ.",
     "صَارُوا يَعْبُدُونَ الْأَصْنَامَ."
    ],
    "questions": [
     {
      "q": "مَنْ كَانَتْ عَادٌ؟",
      "qt": "Âd kimdi?",
      "o": [
       "أُمَّةٌ مِنْ ذُرِّيَّةِ نُوحٍ",
       "أُمَّةُ نُوحٍ الَّتِي غَرِقَتْ",
       "قَرْيَةٌ فِي مِصْرَ"
      ],
      "ot": [
       "Nûh'un soyundan bir topluluk",
       "Nûh'un boğulan ümmeti",
       "Mısır'da bir köy"
      ],
      "a": 0,
      "ev": [
       "1.1"
      ]
     },
     {
      "q": "كَيْفَ كَانَتْ أَجْسَامُ عَادٍ؟",
      "qt": "Âd'ın bedenleri nasıldı?",
      "o": [
       "كَأَنَّهَا مِنْ حَدِيدٍ",
       "ضَعِيفَةً صَغِيرَةً",
       "كَأَنَّهَا مِنْ طِينٍ"
      ],
      "ot": [
       "Sanki demirdendi",
       "Zayıf ve küçüktü",
       "Sanki çamurdandı"
      ],
      "a": 0,
      "ev": [
       "1.2"
      ]
     },
     {
      "q": "مَاذَا كَانَ يَمْلَأُ الْبُيُوتَ؟",
      "qt": "Evleri ne dolduruyordu?",
      "o": [
       "أَوْلَادُ عَادٍ",
       "خَيْلُ عَادٍ",
       "إِبِلُ عَادٍ"
      ],
      "ot": [
       "Âd'ın çocukları",
       "Âd'ın atları",
       "Âd'ın develeri"
      ],
      "a": 0,
      "ev": [
       "1.6"
      ]
     },
     {
      "q": "مَاذَا نَسِيَتْ عَادٌ؟",
      "qt": "Âd neyi unuttu?",
      "o": [
       "قِصَّةَ الطُّوفَانِ",
       "أَسْمَاءَ أَوْلَادِهِمْ",
       "طَرِيقَ الْمَرْعَى"
      ],
      "ot": [
       "Tufan kıssasını",
       "Çocuklarının adlarını",
       "Otlağın yolunu"
      ],
      "a": 0,
      "ev": [
       "2.0"
      ]
     },
     {
      "q": "كَيْفَ كَانُوا يَصْنَعُونَ الْأَصْنَامَ؟",
      "qt": "Putları nasıl yapıyorlardı?",
      "o": [
       "يَنْحَتُونَهَا مِنَ الْحِجَارَةِ بِأَيْدِيهِمْ",
       "يَشْتَرُونَهَا مِنْ قَوْمٍ آخَرِينَ",
       "يَصْنَعُونَهَا مِنَ الْحَدِيدِ"
      ],
      "ot": [
       "Taştan kendi elleriyle yontuyorlardı",
       "Başka bir kavimden satın alıyorlardı",
       "Demirden yapıyorlardı"
      ],
      "a": 0,
      "ev": [
       "2.3"
      ]
     }
    ],
    "focus": {
     "title": "Kırık çoğul: أَقْوِيَاءُ، أَجْسَامٌ، بُيُوتٌ",
     "explain": "Arapçada pek çok isim, sonuna ek almak yerine <b>iç yapısı değişerek</b> çoğul olur. Metinde bunun çok örneği var: <span class='ar-inline'>قَوِيٌّ ← أَقْوِيَاءُ</span>, <span class='ar-inline'>جِسْمٌ ← أَجْسَامٌ</span>, <span class='ar-inline'>بَيْتٌ ← بُيُوتٌ</span>, <span class='ar-inline'>وَلَدٌ ← أَوْلَادٌ</span>, <span class='ar-inline'>بُسْتَانٌ ← بَسَاتِينُ</span>, <span class='ar-inline'>صَنَمٌ ← أَصْنَامٌ</span>, <span class='ar-inline'>عَاقِلٌ ← عُقَلَاءُ</span>, <span class='ar-inline'>غَبِيٌّ ← أَغْبِيَاءُ</span>. İnsan dışı çoğullar dişil tekil gibi davranır: <span class='ar-inline'>أَوْلَادُ عَادٍ تَمْلَأُ الْبُيُوتَ</span>.",
     "examples": [
      "وَكَانُوا رِجَالًا أَقْوِيَاءَ",
      "أَجْسَامُهُمْ كَأَنَّهَا مِنْ حَدِيدٍ",
      "فِيهَا بَسَاتِينُ وَعُيُونٌ كَثِيرَةٌ",
      "عُقَلَاءَ فِي الدُّنْيَا أَغْبِيَاءَ فِي الدِّينِ"
     ],
     "items": [
      {
       "q": "وَكَانُوا رِجَالًا ____.",
       "o": [
        "أَقْوِيَاءَ",
        "قَوِيًّا",
        "قُوَّةً"
       ],
       "a": 0
      },
      {
       "q": "فِيهَا ____ وَعُيُونٌ كَثِيرَةٌ.",
       "o": [
        "بَسَاتِينُ",
        "بُسْتَانٌ",
        "بُسْتَانَانِ"
       ],
       "a": 0
      },
      {
       "q": "وَكَانَتْ أَوْلَادُ عَادٍ تَمْلَأُ ____.",
       "o": [
        "الْبُيُوتَ",
        "الْبَيْتُ",
        "بَيْتٍ"
       ],
       "a": 0
      },
      {
       "q": "وَكَانُوا ____ فِي الدُّنْيَا أَغْبِيَاءَ فِي الدِّينِ.",
       "o": [
        "عُقَلَاءَ",
        "عَاقِلًا",
        "عَقْلًا"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "كَانَتْ عَادٌ أُمَّةً مِنْ ذُرِّيَّةِ {نُوحٍ}. وَكَانُوا رِجَالًا {أَقْوِيَاءَ}. وَبَارَكَ اللهُ لَهُمْ فِي كُلِّ {شَيْءٍ}. وَلٰكِنَّهُمْ لَمْ {يَشْكُرُوا} اللهَ، وَصَارُوا يَعْبُدُونَ {الْأَصْنَامَ}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ: كَانُوا عُقَلَاءَ فِي الدُّنْيَا أَغْبِيَاءَ فِي الدِّينِ؟",
     "qt": "Kitap neden «Dünya işlerinde akıllı, dinde akılsızdılar» diyor?",
     "model": "Âd güçlüydü; hayvan yetiştirmeyi, bahçe kurmayı, ev yapmayı iyi biliyordu. Yani dünya işlerinde akıllıydılar. Ama kendi elleriyle yonttukları taşlara secde ediyor, onlardan bir şey istiyorlardı. Akıllarını Allah'ı tanımak için kullanmadılar; zekâ tek başına doğru yolu göstermiyordu."
    },
    "retell": [
     "ذُرِّيَّةُ نُوحٍ",
     "عَادٌ",
     "أَقْوِيَاءُ",
     "النِّعَمُ",
     "لَمْ يَشْكُرُوا",
     "الْأَصْنَامُ"
    ],
    "quran": [
     {
      "ar": "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ ۝ إِرَمَ ذَاتِ الْعِمَادِ ۝ الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ",
      "ref": "Fecr 89:6–8",
      "tr": "Rabbinin Âd'a ne yaptığını görmedin mi? Sütunlarla dolu İrem'e; ülkeler içinde benzeri yaratılmamış olan (İrem'e)?",
      "inText": "وَكَانُوا رِجَالًا أَقْوِيَاءَ"
     },
     {
      "ar": "وَاتَّقُوا الَّذِي أَمَدَّكُمْ بِمَا تَعْلَمُونَ ۝ أَمَدَّكُمْ بِأَنْعَامٍ وَبَنِينَ ۝ وَجَنَّاتٍ وَعُيُونٍ",
      "ref": "Şuarâ 26:132–134",
      "tr": "Bildiğiniz şeylerle sizi destekleyenden sakının. O size hayvanlar ve oğullar, bahçeler ve pınarlar verdi.",
      "inText": "فِيهَا بَسَاتِينُ وَعُيُونٌ كَثِيرَةٌ"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "بَعْدَ نُوحٍ",
     "title_tr": "Nûh'tan sonra",
     "s": [
      [
       "بَارَكَ اللهُ فِي ذُرِّيَّةِ نُوحٍ فَانْتَشَرَتْ فِي الْأَرْضِ.",
       "Allah Nûh'un soyunu bereketli kıldı; onlar da yeryüzüne yayıldı."
      ],
      [
       "وَكَانَ مِنْهَا أُمَّةٌ يُقَالُ لَهَا عَادٌ.",
       "Onlardan Âd denilen bir topluluk vardı."
      ],
      [
       "وَكَانُوا رِجَالًا أَقْوِيَاءَ، أَجْسَامُهُمْ كَأَنَّهَا مِنْ حَدِيدٍ، يَغْلِبُونَ كُلَّ وَاحِدٍ وَلَا يَغْلِبُهُمْ أَحَدٌ.",
       "Güçlü adamlardı; bedenleri sanki demirdendi. Herkesi yenerlerdi, onları kimse yenemezdi."
      ],
      [
       "وَلَا يَخَافُونَ أَحَدًا وَيَخَافُهُمْ كُلُّ أَحَدٍ.",
       "Kimseden korkmazlardı, herkes onlardan korkardı."
      ],
      [
       "وَبَارَكَ اللهُ لِعَادٍ فِي كُلِّ شَيْءٍ، فَكَانَتْ إِبِلُ عَادٍ وَغَنَمُهَا تَمْلَأُ الْوَادِيَ.",
       "Allah Âd'a her şeyde bereket verdi; Âd'ın develeri ve koyunları vadiyi doldururdu."
      ],
      [
       "وَكَانَتْ خَيْلُ عَادٍ تَمْلَأُ الْمَيْدَانَ.",
       "Âd'ın atları meydanı doldururdu."
      ],
      [
       "وَكَانَتْ أَوْلَادُ عَادٍ تَمْلَأُ الْبُيُوتَ.",
       "Âd'ın çocukları evleri doldururdu."
      ],
      [
       "وَإِذَا خَرَجَتْ إِبِلُ عَادٍ وَغَنَمُهَا إِلَى الْمَرْعَى كَانَ لَهَا مَنْظَرٌ جَمِيلٌ جِدًّا.",
       "Âd'ın develeri ve koyunları otlağa çıktığında çok güzel bir görüntü olurdu."
      ],
      [
       "وَإِذَا خَرَجَ الْأَطْفَالُ فِي الصَّبَاحِ يَلْعَبُونَ كَانَ لَهُمْ مَنْظَرٌ جَمِيلٌ جِدًّا.",
       "Çocuklar sabahleyin oynamaya çıktığında çok güzel bir görüntü olurdu."
      ],
      [
       "وَكَانَتْ أَرْضُ عَادٍ كَذٰلِكَ أَرْضًا جَمِيلَةً خَضْرَاءَ، فِيهَا بَسَاتِينُ وَعُيُونٌ كَثِيرَةٌ.",
       "Âd'ın toprağı da güzel, yemyeşil bir topraktı; orada pek çok bahçe ve pınar vardı."
      ]
     ]
    },
    {
     "n": 2,
     "title_ar": "كُفْرَانُ عَادٍ",
     "title_tr": "Âd'ın nankörlüğü",
     "s": [
      [
       "وَلٰكِنَّ عَادًا لَمْ يَشْكُرُوا اللهَ عَلَى هٰذِهِ النِّعَمِ الْكَثِيرَةِ، وَنَسِيَتْ عَادٌ قِصَّةَ الطُّوفَانِ الَّتِي سَمِعُوهَا مِنْ آبَائِهِمْ وَرَأَوْا آثَارَهُ فِي الْأَرْضِ.",
       "Ama Âd bu pek çok nimet için Allah'a şükretmedi. Âd, babalarından duydukları ve izlerini yeryüzünde gördükleri tufan kıssasını unuttu."
      ],
      [
       "وَنَسُوا لِمَاذَا أَرْسَلَ اللهُ الطُّوفَانَ عَلَى أُمَّةِ نُوحٍ.",
       "Allah'ın tufanı Nûh'un ümmetine neden gönderdiğini unuttular."
      ],
      [
       "وَصَارُوا يَعْبُدُونَ الْأَصْنَامَ كَمَا كَانَتْ أُمَّةُ نُوحٍ تَعْبُدُ الْأَصْنَامَ.",
       "Nûh'un ümmetinin putlara taptığı gibi onlar da putlara tapmaya başladılar."
      ],
      [
       "وَكَانُوا يَنْحَتُونَ الْأَصْنَامَ مِنَ الْحِجَارَةِ بِأَيْدِيهِمْ ثُمَّ يَسْجُدُونَ لَهَا وَيَعْبُدُونَهَا.",
       "Putları kendi elleriyle taştan yontarlar, sonra onlara secde eder ve taparlardı."
      ],
      [
       "وَكَانُوا يَسْأَلُونَهَا حَاجَاتِهِمْ وَيَدْعُونَهَا وَيَذْبَحُونَ لَهَا.",
       "İhtiyaçlarını onlardan ister, onlara dua eder ve onlar için kurban keserlerdi."
      ],
      [
       "وَكَانُوا عَلَى أَثَرِ أُمَّةِ نُوحٍ.",
       "Nûh'un ümmetinin izinden gidiyorlardı."
      ],
      [
       "وَكَانَتْ عُقُولُهُمْ لَا تَمْنَعُهُمْ مِنْ عِبَادَةِ الْأَصْنَامِ.",
       "Akılları onları putlara tapmaktan alıkoymuyordu."
      ],
      [
       "وَكَانَتْ عُقُولُهُمْ لَا تَهْدِيهِمْ.",
       "Akılları onlara doğru yolu göstermiyordu."
      ],
      [
       "وَكَانُوا عُقَلَاءَ فِي الدُّنْيَا أَغْبِيَاءَ فِي الدِّينِ.",
       "Dünya işlerinde akıllı, din konusunda ise akılsızdılar."
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "🏰",
   "title_ar": "ظُلْمٌ وَقُصُورٌ",
   "title_tr": "Zulüm ve saraylar",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «عُدْوَانُ عَادٍ», «قُصُورُ عَادٍ». Güçlü olup Allah'tan korkmayan bir kavim nasıl davranır sence?",
     "options": [
      [
       "يَظْلِمُونَ النَّاسَ",
       "İnsanlara zulmederler"
      ],
      [
       "يُسَاعِدُونَ الضُّعَفَاءَ",
       "Zayıflara yardım ederler"
      ],
      [
       "يَعِيشُونَ فِي الْجِبَالِ وَحْدَهُمْ",
       "Dağlarda tek başlarına yaşarlar"
      ]
     ]
    },
    "vocab": [
     [
      "وَبَالٌ",
      "bela, kötü sonuç",
      "⚠️"
     ],
     [
      "ظُلْمٌ / عُدْوَانٌ",
      "zulüm / saldırganlık",
      "👊"
     ],
     [
      "وُحُوشُ الْغَابَةِ",
      "ormanın vahşi hayvanları",
      "🐺"
     ],
     [
      "الضَّعِيفُ ج الضُّعَفَاءُ",
      "zayıf",
      "🧎"
     ],
     [
      "قَصْرٌ ج قُصُورٌ",
      "saray",
      "🏰"
     ],
     [
      "يَفْخَرُ",
      "övünür",
      "😤"
     ]
    ]
   },
   "stop": {
    "section": 3,
    "after": 2,
    "prompt_tr": "«Onları zulümden ne alıkoyacaktı?» Âd ne Allah'a ne ahirete inanıyordu. Sence insanlara nasıl davrandılar?",
    "options": [
     [
      "ظَلَمُوهُمْ وَأَفْسَدُوا قُرَاهُمْ",
      "Onlara zulmedip köylerini bozdular"
     ],
     [
      "عَلَّمُوهُمْ وَنَصَحُوهُمْ",
      "Onlara öğretip öğüt verdiler"
     ],
     [
      "تَرَكُوهُمْ فِي سَلَامٍ",
      "Onları rahat bıraktılar"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "صَارَتْ قُوَّةُ عَادٍ وَبَالًا عَلَى النَّاسِ.",
     "كَانُوا يَظْلِمُونَ الضُّعَفَاءَ.",
     "كَانَ الضُّعَفَاءُ يَفِرُّونَ مِنْ ظُلْمِهِمْ.",
     "لَمْ يَكُنْ لَهُمْ شُغْلٌ إِلَّا الْأَكْلُ وَاللَّعِبُ.",
     "بَنَوْا قُصُورًا عَالِيَةً مِنْ غَيْرِ حَاجَةٍ.",
     "كَانَ الْفُقَرَاءُ لَا يَجِدُونَ بَيْتًا."
    ],
    "questions": [
     {
      "q": "لِمَاذَا صَارَتْ قُوَّةُ عَادٍ وَبَالًا؟",
      "qt": "Âd'ın gücü neden bela oldu?",
      "o": [
       "لِأَنَّهُمْ لَا يُؤْمِنُونَ بِاللهِ وَلَا بِالْآخِرَةِ",
       "لِأَنَّهُمْ كَانُوا فُقَرَاءَ",
       "لِأَنَّهُمْ كَانُوا قَلِيلِينَ"
      ],
      "ot": [
       "Çünkü Allah'a da ahirete de inanmıyorlardı",
       "Çünkü yoksuldular",
       "Çünkü sayıları azdı"
      ],
      "a": 0,
      "ev": [
       "3.1"
      ]
     },
     {
      "q": "كَانَتْ عَادٌ كَـ ...؟",
      "qt": "Âd neye benziyordu?",
      "o": [
       "وُحُوشِ الْغَابَةِ",
       "الْأَطْفَالِ الصِّغَارِ",
       "الطُّيُورِ فِي السَّمَاءِ"
      ],
      "ot": [
       "Ormanın vahşi hayvanlarına",
       "Küçük çocuklara",
       "Gökteki kuşlara"
      ],
      "a": 0,
      "ev": [
       "3.4"
      ]
     },
     {
      "q": "مَاذَا كَانُوا يَفْعَلُونَ إِذَا دَخَلُوا قَرْيَةً؟",
      "qt": "Bir köye girdiklerinde ne yapıyorlardı?",
      "o": [
       "أَفْسَدُوهَا وَأَذَلُّوا أَعِزَّتَهَا",
       "بَنَوْا فِيهَا مَسْجِدًا",
       "أَعْطَوْا أَهْلَهَا طَعَامًا"
      ],
      "ot": [
       "Orayı bozup ileri gelenlerini aşağılıyorlardı",
       "Orada bir mescit yapıyorlardı",
       "Halkına yiyecek veriyorlardı"
      ],
      "a": 0,
      "ev": [
       "3.7"
      ]
     },
     {
      "q": "مَا كَانَ شُغْلُ عَادٍ؟",
      "qt": "Âd'ın uğraşı neydi?",
      "o": [
       "الْأَكْلُ وَالشُّرْبُ وَاللَّهْوُ وَاللَّعِبُ",
       "الْعِلْمُ وَالْعِبَادَةُ",
       "الزِّرَاعَةُ وَالتِّجَارَةُ"
      ],
      "ot": [
       "Yemek, içmek, eğlence ve oyun",
       "İlim ve ibadet",
       "Tarım ve ticaret"
      ],
      "a": 0,
      "ev": [
       "4.0"
      ]
     },
     {
      "q": "كَيْفَ كَانَتْ بُيُوتُ الْأَغْنِيَاءِ؟",
      "qt": "Zenginlerin evleri nasıldı?",
      "o": [
       "لَا سَاكِنَ فِيهَا",
       "صَغِيرَةً ضَيِّقَةً",
       "مَمْلُوءَةً بِالْفُقَرَاءِ"
      ],
      "ot": [
       "İçinde oturan yoktu",
       "Küçük ve dardı",
       "Yoksullarla doluydu"
      ],
      "a": 0,
      "ev": [
       "4.6"
      ]
     }
    ],
    "focus": {
     "title": "«Sadece / -den başka»: لَا … إِلَّا",
     "explain": "Olumsuz cümle + <b>إِلَّا</b> «yalnızca» anlamı verir: <span class='ar-inline'>لَا شُغْلَ لَهُمْ إِلَّا الْأَكْلُ</span> (yemekten başka işleri yoktu = tek işleri yemekti). Fiille de kullanılır: <span class='ar-inline'>لَا يَلْقَى شَيْئًا إِلَّا قَتَلَهُ</span> (karşılaştığı her şeyi öldürür), <span class='ar-inline'>لَا يَرَوْنَ مَكَانًا … إِلَّا بَنَوْا عَلَيْهِ</span> (gördükleri her yere mutlaka bina yaparlardı).",
     "examples": [
      "لَا شُغْلَ لَهُمْ إِلَّا الْأَكْلُ وَالشُّرْبُ",
      "لَا يَلْقَى شَيْئًا إِلَّا قَتَلَهُ",
      "لَا يَرَوْنَ مَكَانًا خَالِيًا … إِلَّا بَنَوْا عَلَيْهَا قَصْرًا"
     ],
     "items": [
      {
       "q": "وَكَانَ عَادٌ لَا شُغْلَ لَهُمْ ____ الْأَكْلُ وَالشُّرْبُ.",
       "o": [
        "إِلَّا",
        "إِلَى",
        "إِذَا"
       ],
       "a": 0
      },
      {
       "q": "كَالْفِيلِ الْهَائِجِ، ____ يَلْقَى شَيْئًا إِلَّا قَتَلَهُ.",
       "o": [
        "لَا",
        "لَمْ",
        "مَا"
       ],
       "a": 0
      },
      {
       "q": "لَا يَرَوْنَ مَكَانًا خَالِيًا إِلَّا ____ عَلَيْهِ قَصْرًا.",
       "o": [
        "بَنَوْا",
        "بَيْتًا",
        "بِنَاءٌ"
       ],
       "a": 0
      },
      {
       "q": "«لَا شُغْلَ لَهُمْ إِلَّا اللَّعِبُ» = …",
       "o": [
        "كَانَ شُغْلُهُمُ اللَّعِبَ فَقَطْ",
        "لَمْ يَكُونُوا يَلْعَبُونَ",
        "كَانُوا يَعْمَلُونَ كَثِيرًا"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "صَارَتْ {قُوَّةُ} عَادٍ وَبَالًا عَلَى النَّاسِ. وَكَانُوا {يَظْلِمُونَ} الضُّعَفَاءَ. وَكَانُوا يَبْنُونَ {قُصُورًا} عَالِيَةً مِنْ غَيْرِ {حَاجَةٍ}، وَالْفُقَرَاءُ لَا يَجِدُونَ {بَيْتًا}."
    },
    "think": {
     "q": "«مَنْ رَأَى قُصُورَهُمْ عَرَفَ أَنَّهُمْ لَا يُؤْمِنُونَ بِالْآخِرَةِ». لِمَاذَا؟",
     "qt": "«Saraylarını gören, ahirete inanmadıklarını anlardı.» Neden?",
     "model": "Saraylarını sanki hiç ölmeyecekmiş gibi, ihtiyaç olmadan, övünmek için yapıyorlardı; yanı başlarındaki yoksullar ise evsizdi. Ahirete ve hesaba inanan biri malını böyle boşa harcamaz, komşusunu aç bırakmaz. Binaları, inandıkları şeyi (ya da inanmadıklarını) ele veriyordu."
    },
    "retell": [
     "قُوَّةٌ",
     "وَبَالٌ",
     "ظُلْمٌ",
     "الضُّعَفَاءُ",
     "قُصُورٌ",
     "الْفُقَرَاءُ"
    ],
    "quran": [
     {
      "ar": "أَتَبْنُونَ بِكُلِّ رِيعٍ آيَةً تَعْبَثُونَ ۝ وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ ۝ وَإِذَا بَطَشْتُمْ بَطَشْتُمْ جَبَّارِينَ",
      "ref": "Şuarâ 26:128–130",
      "tr": "Her yüksek yere boş yere bir anıt mı dikiyorsunuz? Ebedî kalacakmışsınız gibi sağlam yapılar ediniyorsunuz. Yakaladığınızda da zorbaca yakalıyorsunuz.",
      "inText": "كَأَنَّمَا يَسْكُنُونَ فِيهَا دَائِمًا وَلَا يَمُوتُونَ أَبَدًا"
     },
     {
      "ar": "فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ بِغَيْرِ الْحَقِّ وَقَالُوا مَنْ أَشَدُّ مِنَّا قُوَّةً",
      "ref": "Fussilet 41:15",
      "tr": "Âd ise yeryüzünde haksız yere büyüklük tasladı ve «Bizden daha güçlü kim var?» dedi.",
      "inText": "وَهُمْ لَا يَرَوْنَ فَوْقَهُمْ أَحَدًا"
     }
    ]
   },
   "sections": [
    {
     "n": 3,
     "title_ar": "عُدْوَانُ عَادٍ",
     "title_tr": "Âd'ın saldırganlığı",
     "s": [
      [
       "وَصَارَتْ قُوَّةُ عَادٍ وَبَالًا عَلَيْهِمْ وَعَلَى النَّاسِ.",
       "Âd'ın gücü hem kendilerine hem insanlara bir bela oldu."
      ],
      [
       "لِأَنَّهُمْ لَا يُؤْمِنُونَ بِاللهِ وَلَا يُؤْمِنُونَ بِالْآخِرَةِ.",
       "Çünkü Allah'a da ahirete de inanmıyorlardı."
      ],
      [
       "فَمَاذَا يَمْنَعُهُمْ مِنَ الظُّلْمِ؟ وَمَاذَا يَمْنَعُهُمْ مِنَ الْعُدْوَانِ؟",
       "Peki onları zulümden ne alıkoyacaktı? Saldırganlıktan ne alıkoyacaktı?"
      ],
      [
       "وَلِمَاذَا لَا يَظْلِمُونَ النَّاسَ؟ وَهُمْ لَا يَرَوْنَ فَوْقَهُمْ أَحَدًا، وَلَا يَخَافُونَ حِسَابًا وَلَا عِقَابًا.",
       "İnsanlara neden zulmetmesinler ki? Üstlerinde kimseyi görmüyorlar, ne hesaptan ne cezadan korkuyorlardı."
      ],
      [
       "وَكَانُوا كَوُحُوشِ الْغَابَةِ يَظْلِمُ الْكَبِيرُ مِنْهُمُ الصَّغِيرَ، وَيَأْكُلُ الْقَوِيُّ مِنْهُمُ الضَّعِيفَ.",
       "Ormanın vahşi hayvanları gibiydiler: büyükleri küçüğe zulmeder, güçlüleri zayıfı yerdi."
      ],
      [
       "وَإِذَا غَضِبُوا كَانُوا كَالْفِيلِ الْهَائِجِ، لَا يَلْقَى شَيْئًا إِلَّا قَتَلَهُ.",
       "Öfkelendiklerinde azgın bir fil gibi olurlardı; karşısına çıkan her şeyi öldürürdü."
      ],
      [
       "وَكَانُوا إِذَا حَارَبُوا أَهْلَكُوا الْحَرْثَ وَالنَّسْلَ.",
       "Savaştıklarında ekini ve nesli yok ederlerdi."
      ],
      [
       "وَإِذَا دَخَلُوا قَرْيَةً أَفْسَدُوهَا وَجَعَلُوا أَعِزَّةَ أَهْلِهَا أَذِلَّةً.",
       "Bir köye girdiklerinde orayı bozar, halkının ileri gelenlerini aşağılık hâle getirirlerdi."
      ],
      [
       "وَكَانَ الضُّعَفَاءُ يَخَافُونَ شَرَّهُمْ، وَيَفِرُّونَ مِنْ ظُلْمِهِمْ.",
       "Zayıflar onların kötülüğünden korkar, zulümlerinden kaçarlardı."
      ],
      [
       "وَصَارَتْ قُوَّتُهُمْ وَبَالًا عَلَيْهِمْ وَعَلَى النَّاسِ.",
       "Güçleri hem kendilerine hem insanlara bela oldu."
      ],
      [
       "وَكَذٰلِكَ كُلُّ مَنْ لَا يَخَافُ اللهَ وَلَا يُؤْمِنُ بِالْآخِرَةِ.",
       "Allah'tan korkmayan ve ahirete inanmayan herkes böyledir."
      ]
     ]
    },
    {
     "n": 4,
     "title_ar": "قُصُورُ عَادٍ",
     "title_tr": "Âd'ın sarayları",
     "s": [
      [
       "وَكَانَ عَادٌ لَا شُغْلَ لَهُمْ إِلَّا الْأَكْلُ وَالشُّرْبُ وَاللَّهْوُ وَاللَّعِبُ.",
       "Âd'ın yemekten, içmekten, eğlenceden ve oyundan başka bir işi yoktu."
      ],
      [
       "وَكَانَ بَعْضُهُمْ يَفْخَرُ عَلَى بَعْضٍ فِي بِنَاءِ الْقُصُورِ الْعَالِيَةِ وَالْبُيُوتِ الْوَاسِعَةِ.",
       "Yüksek saraylar ve geniş evler yapmakta birbirlerine karşı övünürlerdi."
      ],
      [
       "وَكَانَتْ أَمْوَالُهُمْ تَضِيعُ فِي الْمَاءِ وَالطِّينِ وَالْحِجَارَةِ.",
       "Malları su, çamur ve taş uğruna boşa gidiyordu."
      ],
      [
       "وَكَانُوا لَا يَرَوْنَ مَكَانًا خَالِيًا أَوْ أَرْضًا مُرْتَفِعَةً إِلَّا بَنَوْا عَلَيْهَا قَصْرًا رَفِيعًا.",
       "Boş bir yer ya da yüksek bir arazi gördüler mi, mutlaka üzerine yüce bir saray yaparlardı."
      ],
      [
       "وَكَانُوا يَبْنُونَ بُيُوتًا كَأَنَّمَا يَسْكُنُونَ فِيهَا دَائِمًا وَلَا يَمُوتُونَ أَبَدًا.",
       "Sanki orada sonsuza dek oturacak ve hiç ölmeyecekmiş gibi evler yaparlardı."
      ],
      [
       "وَكَانُوا يَبْنُونَ قُصُورًا مِنْ غَيْرِ حَاجَةٍ وَالنَّاسُ لَا يَجِدُونَ مَا يَأْكُلُونَ وَيَلْبَسُونَ.",
       "İnsanlar yiyecek ve giyecek bir şey bulamazken onlar ihtiyaç olmadan saraylar yaparlardı."
      ],
      [
       "وَكَانَ الْفُقَرَاءُ مِنْهُمْ لَا يَجِدُونَ بَيْتًا يَسْكُنُونَ فِيهِ وَبُيُوتُ الْأَغْنِيَاءِ لَا سَاكِنَ فِيهَا.",
       "Aralarındaki yoksullar oturacak bir ev bulamıyordu; zenginlerin evlerinde ise oturan kimse yoktu."
      ],
      [
       "وَمَنْ رَآهُمْ وَرَأَى قُصُورَهُمْ عَرَفَ أَنَّهُمْ لَا يُؤْمِنُونَ بِالْآخِرَةِ.",
       "Onları ve saraylarını gören, ahirete inanmadıklarını anlardı."
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "📣",
   "title_ar": "هُودٌ يَدْعُو قَوْمَهُ",
   "title_tr": "Hûd kavmini davet ediyor",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «هُودٌ الرَّسُولُ», «دَعْوَةُ هُودٍ», «جَوَابُ الْقَوْمِ». Allah Âd'a bir elçi gönderecek. Sence bu elçi kim olacak?",
     "options": [
      [
       "رَجُلٌ مِنْهُمْ يَعْرِفُونَهُ",
       "Onların içinden, tanıdıkları bir adam"
      ],
      [
       "مَلَكٌ مِنَ السَّمَاءِ",
       "Gökten bir melek"
      ],
      [
       "رَجُلٌ غَرِيبٌ مِنْ بَلَدٍ بَعِيدٍ",
       "Uzak bir ülkeden yabancı bir adam"
      ]
     ]
    },
    "vocab": [
     [
      "يَسْتَعْمِلُ",
      "kullanır",
      "🛠️"
     ],
     [
      "يَهْدِي",
      "doğru yola iletir",
      "🧭"
     ],
     [
      "شَرِيفٌ",
      "soylu",
      "🏅"
     ],
     [
      "خُلَفَاءُ",
      "(öncekilerin) yerine gelenler",
      "🔁"
     ],
     [
      "الظِّلُّ",
      "gölge",
      "🌗"
     ],
     [
      "سَفِيهٌ / مَجْنُونٌ",
      "beyinsiz / deli",
      "🤪"
     ]
    ]
   },
   "stop": {
    "section": 7,
    "after": 2,
    "prompt_tr": "Hûd'un sözleri kavmin canını sıktı ve birbirlerine bir şey söylediler. Sence ne dediler?",
    "options": [
     [
      "قَالُوا: سَفِيهٌ أَوْ مَجْنُونٌ",
      "«Beyinsiz ya da deli» dediler"
     ],
     [
      "قَالُوا: صَدَقَ هُودٌ",
      "«Hûd doğru söylüyor» dediler"
     ],
     [
      "قَالُوا: نَذْهَبُ مَعَهُ",
      "«Onunla gidelim» dediler"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "أَرَادَ اللهُ أَنْ يُرْسِلَ إِلَى عَادٍ رَسُولًا.",
     "كَانَ الرَّسُولُ هُودًا مِنْ بَيْتٍ شَرِيفٍ.",
     "دَعَا هُودٌ قَوْمَهُ إِلَى عِبَادَةِ اللهِ.",
     "ضَرَبَ لَهُمْ مَثَلَ الْكَلْبِ.",
     "قَالَ الْقَوْمُ: سَفِيهٌ أَوْ مَجْنُونٌ.",
     "قَالَ هُودٌ: أَنَا رَسُولٌ مِنْ رَبِّ الْعَالَمِينَ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا فَسَدَتْ عُقُولُ عَادٍ؟",
      "qt": "Âd'ın akılları neden bozulmuştu?",
      "o": [
       "لِأَنَّهُمْ لَا يَسْتَعْمِلُونَهَا فِي الدِّينِ",
       "لِأَنَّهُمْ كَانُوا مَرْضَى",
       "لِأَنَّهُمْ لَمْ يَأْكُلُوا"
      ],
      "ot": [
       "Çünkü onları din konusunda kullanmıyorlardı",
       "Çünkü hastaydılar",
       "Çünkü yemek yemiyorlardı"
      ],
      "a": 0,
      "ev": [
       "5.3"
      ]
     },
     {
      "q": "لِمَاذَا أَرَادَ اللهُ أَنْ يَكُونَ الرَّسُولُ مِنْ أَنْفُسِهِمْ؟",
      "qt": "Allah elçinin neden kendi içlerinden olmasını istedi?",
      "o": [
       "لِيَعْرِفُوهُ وَيَفْهَمُوا كَلَامَهُ",
       "لِأَنَّهُ كَانَ أَقْوَاهُمْ",
       "لِأَنَّهُ كَانَ أَغْنَاهُمْ"
      ],
      "ot": [
       "Onu tanısınlar ve sözünü anlasınlar diye",
       "Çünkü en güçlüleriydi",
       "Çünkü en zenginleriydi"
      ],
      "a": 0,
      "ev": [
       "5.6"
      ]
     },
     {
      "q": "فِي أَيِّ بَيْتٍ وُلِدَ هُودٌ؟",
      "qt": "Hûd nasıl bir ailede doğdu?",
      "o": [
       "فِي بَيْتٍ شَرِيفٍ",
       "فِي بَيْتٍ فَقِيرٍ بَعِيدٍ",
       "فِي قَصْرِ الْمَلِكِ"
      ],
      "ot": [
       "Soylu bir ailede",
       "Uzakta yoksul bir evde",
       "Kralın sarayında"
      ],
      "a": 0,
      "ev": [
       "5.7"
      ]
     },
     {
      "q": "أَيَّ حَيَوَانٍ ذَكَرَ هُودٌ مَثَلًا؟",
      "qt": "Hûd örnek olarak hangi hayvanı andı?",
      "o": [
       "الْكَلْبَ",
       "الْفِيلَ",
       "الْجَمَلَ"
      ],
      "ot": [
       "Köpeği",
       "Fili",
       "Deveyi"
      ],
      "a": 0,
      "ev": [
       "6.6"
      ]
     },
     {
      "q": "مَاذَا قَالَ أَشْرَافُ قَوْمِهِ؟",
      "qt": "Kavminin ileri gelenleri ne dedi?",
      "o": [
       "إِنَّا لَنَرَاكَ فِي سَفَاهَةٍ",
       "إِنَّكَ رَسُولٌ أَمِينٌ",
       "نَحْنُ نُؤْمِنُ بِكَ"
      ],
      "ot": [
       "Biz seni beyinsizlik içinde görüyoruz",
       "Sen güvenilir bir elçisin",
       "Biz sana inanıyoruz"
      ],
      "a": 0,
      "ev": [
       "7.6"
      ]
     }
    ],
    "focus": {
     "title": "أَنْ + muzari: «-mek / -mesi»",
     "explain": "<b>أَنْ</b> kendisinden sonraki muzari fiili mastar gibi yapar ve sonunu <b>nasb</b> eder (ـُ → ـَ; ـُونَ → ـُوا): <span class='ar-inline'>أَرَادَ اللهُ أَنْ يُرْسِلَ</span> (Allah göndermek istedi), <span class='ar-inline'>أَنْ يَكُونَ هٰذَا الرَّسُولُ مِنْ أَنْفُسِهِمْ</span> (bu elçinin onlardan olmasını), <span class='ar-inline'>أَنْ تَعْبُدُوا اللهَ</span> (Allah'a ibadet etmeniz; تَعْبُدُونَ değil).",
     "examples": [
      "وَأَرَادَ اللهُ أَنْ يُرْسِلَ إِلَى عَادٍ رَسُولًا",
      "وَأَرَادَ اللهُ أَنْ يَكُونَ هٰذَا الرَّسُولُ مِنْ أَنْفُسِهِمْ",
      "كَانَ مِنْ حَقِّ هٰذِهِ النِّعَمِ أَنْ تَعْبُدُوا اللهَ"
     ],
     "items": [
      {
       "q": "وَأَرَادَ اللهُ أَنْ ____ إِلَى عَادٍ رَسُولًا.",
       "o": [
        "يُرْسِلَ",
        "أَرْسَلَ",
        "يُرْسِلُونَ"
       ],
       "a": 0
      },
      {
       "q": "وَأَرَادَ اللهُ أَنْ ____ هٰذَا الرَّسُولُ مِنْ أَنْفُسِهِمْ.",
       "o": [
        "يَكُونَ",
        "كَانَ",
        "يَكُونُوا"
       ],
       "a": 0
      },
      {
       "q": "كَانَ مِنْ حَقِّ هٰذِهِ النِّعَمِ أَنْ ____ اللهَ.",
       "o": [
        "تَعْبُدُوا",
        "تَعْبُدُونَ",
        "عَبَدْتُمْ"
       ],
       "a": 0
      },
      {
       "q": "فَأَرَادَ اللهُ ____ يُرْسِلَ إِلَيْهِمْ رَسُولًا يَهْدِيهِمْ.",
       "o": [
        "أَنْ",
        "إِنَّ",
        "لَمْ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "أَرْسَلَ اللهُ إِلَى عَادٍ {هُودًا}. وُلِدَ فِي بَيْتٍ {شَرِيفٍ}. وَقَالَ لَهُمْ: يَا قَوْمِ {اعْبُدُوا} اللهَ. وَلٰكِنَّ الْقَوْمَ قَالُوا: {سَفِيهٌ} أَوْ {مَجْنُونٌ}!"
    },
    "think": {
     "q": "لِمَاذَا ذَكَرَ هُودٌ الْكَلْبَ؟",
     "qt": "Hûd neden köpek örneğini verdi?",
     "model": "Bir köpeğe bir kemik atan kişiye köpek sadık kalır; sahibini bırakıp başkasına gitmez, hele bir taşa secde etmez. Hûd şöyle demek istiyor: Allah size sayısız nimet verdi; buna rağmen O'nu bırakıp kendi yonttuğunuz taşlara tapıyorsunuz. İnsan, hayvandan daha yüce yaratıldığı hâlde ondan daha vefasız davranıyor."
    },
    "retell": [
     "هُودٌ",
     "رَسُولٌ",
     "بَيْتٌ شَرِيفٌ",
     "اعْبُدُوا اللهَ",
     "الْكَلْبُ",
     "سَفَاهَةٌ"
    ],
    "quran": [
     {
      "ar": "وَإِلَى عَادٍ أَخَاهُمْ هُودًا ۗ قَالَ يَا قَوْمِ اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ ۚ أَفَلَا تَتَّقُونَ",
      "ref": "A'râf 7:65",
      "tr": "Âd'a da kardeşleri Hûd'u (gönderdik). Dedi ki: Ey kavmim! Allah'a ibadet edin; sizin O'ndan başka ilahınız yoktur. Hâlâ sakınmayacak mısınız?",
      "inText": "«يَا قَوْمِ اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ»"
     },
     {
      "ar": "قَالَ الْمَلَأُ الَّذِينَ كَفَرُوا مِنْ قَوْمِهِ إِنَّا لَنَرَاكَ فِي سَفَاهَةٍ وَإِنَّا لَنَظُنُّكَ مِنَ الْكَاذِبِينَ",
      "ref": "A'râf 7:66",
      "tr": "Kavminden inkâr eden ileri gelenler dedi: Biz seni beyinsizlik içinde görüyoruz ve seni yalancılardan sanıyoruz.",
      "inText": "«إِنَّا لَنَرَاكَ فِي سَفَاهَةٍ …»"
     },
     {
      "ar": "قَالَ يَا قَوْمِ لَيْسَ بِي سَفَاهَةٌ وَلٰكِنِّي رَسُولٌ مِنْ رَبِّ الْعَالَمِينَ ۝ أُبَلِّغُكُمْ رِسَالَاتِ رَبِّي وَأَنَا لَكُمْ نَاصِحٌ أَمِينٌ",
      "ref": "A'râf 7:67–68",
      "tr": "Dedi: Ey kavmim! Bende beyinsizlik yok; ama ben âlemlerin Rabbinden bir elçiyim. Size Rabbimin mesajlarını ulaştırıyorum; ben sizin için güvenilir bir öğütçüyüm.",
      "inText": "«يَا قَوْمِ لَيْسَ بِي سَفَاهَةٌ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 5,
     "title_ar": "هُودٌ الرَّسُولُ",
     "title_tr": "Elçi Hûd",
     "s": [
      [
       "وَأَرَادَ اللهُ أَنْ يُرْسِلَ إِلَى عَادٍ رَسُولًا.",
       "Allah Âd'a bir elçi göndermek istedi."
      ],
      [
       "إِنَّ اللهَ لَا يَرْضَى لِعِبَادِهِ الْكُفْرَ، إِنَّ اللهَ لَا يُحِبُّ الْفَسَادَ فِي الْأَرْضِ.",
       "Allah kulları için küfre razı olmaz; Allah yeryüzünde bozgunculuğu sevmez."
      ],
      [
       "وَكَانَ عَادٌ لَا يَسْتَعْمِلُونَ عُقُولَهُمْ إِلَّا فِي الْأَكْلِ وَالشُّرْبِ وَاللَّهْوِ وَاللَّعِبِ وَبِنَاءِ الْبُيُوتِ.",
       "Âd akıllarını yalnızca yemek, içmek, eğlence, oyun ve ev yapmak için kullanırdı."
      ],
      [
       "وَقَدْ فَسَدَتْ عُقُولُهُمْ، لِأَنَّهُمْ لَا يَسْتَعْمِلُونَهَا فِي الدِّينِ.",
       "Akılları bozulmuştu, çünkü onları din konusunda kullanmıyorlardı."
      ],
      [
       "وَكَانَ عَادٌ عُقَلَاءَ فِي الدُّنْيَا أَغْبِيَاءَ فِي الدِّينِ، يَعْبُدُونَ الْحِجَارَةَ وَلَا يَعْقِلُونَ.",
       "Âd dünya işlerinde akıllı, dinde akılsızdı; taşlara taparlar ve düşünmezlerdi."
      ],
      [
       "فَأَرَادَ اللهُ أَنْ يُرْسِلَ إِلَيْهِمْ رَسُولًا يَهْدِيهِمْ.",
       "Allah onlara, kendilerini doğru yola iletecek bir elçi göndermek istedi."
      ],
      [
       "وَأَرَادَ اللهُ أَنْ يَكُونَ هٰذَا الرَّسُولُ مِنْ أَنْفُسِهِمْ، يَعْرِفُونَهُ وَيَفْهَمُونَ كَلَامَهُ.",
       "Allah bu elçinin kendi içlerinden olmasını istedi: onu tanıyacak ve sözünü anlayacaklardı."
      ],
      [
       "كَانَ هُودٌ ذٰلِكَ الرَّسُولَ، وُلِدَ فِي بَيْتٍ شَرِيفٍ فِي عَادٍ وَنَشَأَ عَلَى عَقْلٍ وَصَلَاحٍ.",
       "O elçi Hûd'du. Âd içinde soylu bir ailede doğdu; akıl ve iyilik üzere yetişti."
      ]
     ]
    },
    {
     "n": 6,
     "title_ar": "دَعْوَةُ هُودٍ",
     "title_tr": "Hûd'un daveti",
     "s": [
      [
       "وَقَامَ هُودٌ فِي قَوْمِهِ يَدْعُو وَيَقُولُ:",
       "Hûd kavminin arasında kalkıp davet ederek şöyle dedi:"
      ],
      [
       "«يَا قَوْمِ اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ».",
       "«Ey kavmim! Allah'a ibadet edin; sizin O'ndan başka hiçbir ilahınız yoktur.»"
      ],
      [
       "وَقَالَ هُودٌ: يَا قَوْمِ كَيْفَ تَعْبُدُونَ الْحِجَارَةَ وَلَا تَعْبُدُونَ الَّذِي خَلَقَكُمْ؟!",
       "Hûd dedi: Ey kavmim! Taşlara nasıl tapıyorsunuz da sizi yaratana ibadet etmiyorsunuz?!"
      ],
      [
       "يَا قَوْمِ هٰذِهِ الْحِجَارَةُ الَّتِي تَنْحِتُونَهَا أَمْسِ كَيْفَ تَعْبُدُونَهَا الْيَوْمَ؟",
       "Ey kavmim! Dün yonttuğunuz bu taşlara bugün nasıl taparsınız?"
      ],
      [
       "إِنَّ اللهَ خَلَقَكُمْ وَرَزَقَكُمْ، وَبَارَكَ لَكُمْ فِي الْأَمْوَالِ وَالْأَوْلَادِ وَالْحَرْثِ وَالنَّسْلِ، وَجَعَلَكُمْ خُلَفَاءَ مِنْ بَعْدِ قَوْمِ نُوحٍ وَرَزَقَكُمْ قُوَّةً فِي الْجِسْمِ.",
       "Allah sizi yarattı ve rızıklandırdı; mallarınızı, çocuklarınızı, ekininizi ve neslinizi bereketli kıldı; sizi Nûh kavminden sonra onların yerine getirdi ve size beden gücü verdi."
      ],
      [
       "كَانَ مِنْ حَقِّ هٰذِهِ النِّعَمِ أَنْ تَعْبُدُوا اللهَ وَلَا تَعْبُدُوا غَيْرَهُ.",
       "Bu nimetlerin hakkı, Allah'a ibadet etmeniz ve O'ndan başkasına ibadet etmemenizdi."
      ],
      [
       "إِنَّ هٰذَا الْكَلْبَ الَّذِي تَرْمُونَ إِلَيْهِ بِعَظْمٍ لَا يُفَارِقُ بَيْتَكُمْ وَيَتْبَعُكُمْ كَالظِّلِّ.",
       "Kendisine bir kemik attığınız şu köpek evinizden ayrılmaz ve sizi gölge gibi izler."
      ],
      [
       "أَفَرَأَيْتُمْ كَلْبًا يَتْرُكُ سَيِّدَهُ وَيَذْهَبُ إِلَى غَيْرِهِ؟",
       "Sahibini bırakıp başkasına giden bir köpek gördünüz mü?"
      ],
      [
       "أَرَأَيْتُمْ حَيَوَانًا يَعْبُدُ حَجَرًا، أَوْ رَأَيْتُمْ حَيَوَانًا يَسْجُدُ لِصَنَمٍ؟",
       "Bir taşa tapan bir hayvan gördünüz mü, ya da bir puta secde eden bir hayvan gördünüz mü?"
      ],
      [
       "هَلِ الْإِنْسَانُ أَدْنَى مِنَ الْحَيَوَانِ، أَمْ هُوَ أَجَلُّ مِنَ الْحَيَوَانِ؟",
       "İnsan hayvandan daha mı aşağıdır, yoksa hayvandan daha mı yücedir?"
      ]
     ]
    },
    {
     "n": 7,
     "title_ar": "جَوَابُ الْقَوْمِ",
     "title_tr": "Kavmin cevabı",
     "s": [
      [
       "كَانَ الْقَوْمُ فِي شُغْلٍ مِنَ الْأَكْلِ وَالشُّرْبِ وَاللَّهْوِ وَاللَّعِبِ.",
       "Kavim yemek, içmek, eğlence ve oyunla meşguldü."
      ],
      [
       "وَقَدْ رَضُوا بِالْحَيَاةِ الدُّنْيَا وَاطْمَأَنُّوا بِهَا.",
       "Dünya hayatına razı olmuş ve onunla yetinip rahatlamışlardı."
      ],
      [
       "ضَاقَ قَلْبُهُمْ بِكَلَامِ هُودٍ وَقَالَ بَعْضُهُمْ لِبَعْضٍ:",
       "Hûd'un sözlerinden canları sıkıldı ve birbirlerine dediler:"
      ],
      [
       "مَا يَقُولُ هُودٌ؟ مَاذَا يُرِيدُ هُودٌ؟ نَحْنُ لَا نَفْهَمُ كَلَامَهُ!",
       "Hûd ne diyor? Hûd ne istiyor? Biz onun sözünü anlamıyoruz!"
      ],
      [
       "قَالُوا: سَفِيهٌ أَوْ مَجْنُونٌ!",
       "Dediler: Beyinsiz ya da deli!"
      ],
      [
       "وَلَمَّا دَعَاهُمْ هُودٌ مَرَّةً أُخْرَى، قَالَ أَشْرَافُ قَوْمِهِ:",
       "Hûd onları bir kez daha davet edince kavminin ileri gelenleri dedi:"
      ],
      [
       "«إِنَّا لَنَرَاكَ فِي سَفَاهَةٍ وَإِنَّا لَنَظُنُّكَ مِنَ الْكَاذِبِينَ».",
       "«Biz seni beyinsizlik içinde görüyoruz ve seni yalancılardan sanıyoruz.»"
      ],
      [
       "قَالَ: «يَا قَوْمِ لَيْسَ بِي سَفَاهَةٌ وَلٰكِنِّي رَسُولٌ مِنْ رَبِّ الْعَالَمِينَ».",
       "Dedi: «Ey kavmim! Bende beyinsizlik yok; ama ben âlemlerin Rabbinden bir elçiyim.»"
      ],
      [
       "«أُبَلِّغُكُمْ رِسَالَاتِ رَبِّي وَأَنَا لَكُمْ نَاصِحٌ أَمِينٌ».",
       "«Size Rabbimin mesajlarını ulaştırıyorum; ben sizin için güvenilir bir öğütçüyüm.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 4,
   "emoji": "🤲",
   "title_ar": "حِكْمَةُ هُودٍ وَإِيمَانُهُ",
   "title_tr": "Hûd'un hikmeti ve imanı",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «حِكْمَةُ هُودٍ», «إِيمَانُ هُودٍ». Kavmi ona «beyinsiz» dedi. Sence Hûd onlarla nasıl konuşmaya devam etti?",
     "options": [
      [
       "بِحِكْمَةٍ وَرِفْقٍ",
       "Hikmetle ve yumuşaklıkla"
      ],
      [
       "بِغَضَبٍ وَشِدَّةٍ",
       "Öfkeyle ve sertlikle"
      ],
      [
       "سَكَتَ وَتَرَكَهُمْ",
       "Sustu ve onları bıraktı"
      ]
     ]
    },
    "vocab": [
     [
      "رِفْقٌ",
      "yumuşaklık, nezaket",
      "🕊️"
     ],
     [
      "أَجْرٌ",
      "ücret, karşılık",
      "💰"
     ],
     [
      "يَفْقِدُ",
      "kaybeder",
      "🫥"
     ],
     [
      "عَجَزَ",
      "âciz kaldı",
      "😶"
     ],
     [
      "نَفْعٌ / ضَرٌّ",
      "fayda / zarar",
      "⚖️"
     ],
     [
      "تَوَكَّلَ عَلَى",
      "-e güvendi, tevekkül etti",
      "🤲"
     ]
    ]
   },
   "stop": {
    "section": 9,
    "after": 0,
    "prompt_tr": "Âd, Hûd'a bir cevap bulamadı. Sence âciz kalınca ne dediler?",
    "options": [
     [
      "آلِهَتُنَا غَضِبَتْ عَلَيْكَ",
      "«İlahlarımız sana öfkelendi»"
     ],
     [
      "صَدَقْتَ يَا هُودُ",
      "«Doğru söyledin ey Hûd»"
     ],
     [
      "نُرِيدُ أَنْ نَتَعَلَّمَ",
      "«Öğrenmek istiyoruz»"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "دَعَا هُودٌ قَوْمَهُ بِحِكْمَةٍ وَرِفْقٍ.",
     "قَالَ: لَا أَسْأَلُكُمْ مَالًا.",
     "قَالَ: إِنَّ اللهَ يُرْسِلُ إِلَى كُلِّ قَوْمٍ رَجُلًا مِنْهُمْ.",
     "لَمْ تَجِدْ عَادٌ جَوَابًا.",
     "قَالُوا: غَضِبَتْ عَلَيْكَ آلِهَتُنَا.",
     "قَالَ هُودٌ: إِنِّي تَوَكَّلْتُ عَلَى اللهِ."
    ],
    "questions": [
     {
      "q": "كَيْفَ كَانَ هُودٌ يَدْعُو قَوْمَهُ؟",
      "qt": "Hûd kavmini nasıl davet ediyordu?",
      "o": [
       "بِحِكْمَةٍ وَرِفْقٍ",
       "بِالسَّيْفِ",
       "بِالصِّيَاحِ وَالْغَضَبِ"
      ],
      "ot": [
       "Hikmetle ve yumuşaklıkla",
       "Kılıçla",
       "Bağırıp öfkelenerek"
      ],
      "a": 0,
      "ev": [
       "8.0"
      ]
     },
     {
      "q": "هَلْ كَانَ هُودٌ يَسْأَلُ قَوْمَهُ مَالًا؟",
      "qt": "Hûd kavminden mal istiyor muydu?",
      "o": [
       "لَا، أَجْرُهُ عَلَى اللهِ",
       "نَعَمْ، مَالًا كَثِيرًا",
       "نَعَمْ، قَصْرًا عَالِيًا"
      ],
      "ot": [
       "Hayır, onun ücreti Allah'a aittir",
       "Evet, çok mal",
       "Evet, yüksek bir saray"
      ],
      "a": 0,
      "ev": [
       "8.3"
      ]
     },
     {
      "q": "مَاذَا يَحْدُثُ لَهُمْ إِذَا آمَنُوا؟",
      "qt": "İman ederlerse onlara ne olur?",
      "o": [
       "يُبَارِكُ اللهُ لَهُمْ فِي الرِّزْقِ",
       "يَفْقِدُونَ أَمْوَالَهُمْ",
       "يَصِيرُونَ ضُعَفَاءَ"
      ],
      "ot": [
       "Allah rızıklarını bereketlendirir",
       "Mallarını kaybederler",
       "Zayıf düşerler"
      ],
      "a": 0,
      "ev": [
       "8.5"
      ]
     },
     {
      "q": "مَاذَا قَالَ الْقَوْمُ لَمَّا عَجَزُوا؟",
      "qt": "Kavim âciz kalınca ne dedi?",
      "o": [
       "غَضِبَتْ عَلَيْكَ آلِهَتُنَا",
       "نَحْنُ نُؤْمِنُ بِاللهِ",
       "أَنْتَ أَخُونَا"
      ],
      "ot": [
       "İlahlarımız sana öfkelendi",
       "Biz Allah'a inanıyoruz",
       "Sen bizim kardeşimizsin"
      ],
      "a": 0,
      "ev": [
       "9.1"
      ]
     },
     {
      "q": "عَلَى مَنْ تَوَكَّلَ هُودٌ؟",
      "qt": "Hûd kime tevekkül etti?",
      "o": [
       "عَلَى اللهِ رَبِّهِ وَرَبِّهِمْ",
       "عَلَى قُوَّةِ جِسْمِهِ",
       "عَلَى أَشْرَافِ قَوْمِهِ"
      ],
      "ot": [
       "Kendisinin ve onların Rabbi olan Allah'a",
       "Beden gücüne",
       "Kavminin ileri gelenlerine"
      ],
      "a": 0,
      "ev": [
       "9.12"
      ]
     }
    ],
    "focus": {
     "title": "«Ne … ne …»: لَا … وَلَا …",
     "explain": "İki şeyi birlikte olumsuzlamak için <b>لَا … وَلَا</b> kullanılır: <span class='ar-inline'>لَا تَنْفَعُ أَحَدًا وَلَا تَضُرُّ</span> (ne fayda verir ne zarar), <span class='ar-inline'>لَا تَمْلِكُ خَيْرًا وَلَا شَرًّا</span> (elinde ne iyilik vardır ne kötülük). Üçlü de olabilir: <span class='ar-inline'>لَا تَتَكَلَّمُ وَلَا تَسْمَعُ وَلَا تَنْظُرُ</span>.",
     "examples": [
      "لَا تَنْفَعُ أَحَدًا وَلَا تَضُرُّ",
      "لَا تَتَكَلَّمُ وَلَا تَسْمَعُ وَلَا تَنْظُرُ",
      "لَا تَمْلِكُ خَيْرًا وَلَا شَرًّا",
      "لَا أُؤْمِنُ بِآلِهَتِكُمْ وَلَا أَخَافُهُمْ"
     ],
     "items": [
      {
       "q": "إِنَّ هٰذِهِ الْأَصْنَامَ لَا تَنْفَعُ أَحَدًا ____ تَضُرُّ.",
       "o": [
        "وَلَا",
        "وَلَمْ",
        "إِلَّا"
       ],
       "a": 0
      },
      {
       "q": "لَا تَمْلِكُ خَيْرًا وَلَا ____.",
       "o": [
        "شَرًّا",
        "خَيْرًا",
        "نَفْعًا"
       ],
       "a": 0
      },
      {
       "q": "وَلَا تَمْلِكُونَ لِي نَفْعًا وَلَا ____.",
       "o": [
        "ضَرًّا",
        "نَفْعًا",
        "خَيْرًا"
       ],
       "a": 0
      },
      {
       "q": "إِنِّي لَا أُؤْمِنُ بِآلِهَتِكُمْ وَلَا ____.",
       "o": [
        "أَخَافُهُمْ",
        "خِفْتُهُمْ",
        "يَخَافُونَ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "دَعَا هُودٌ قَوْمَهُ بِحِكْمَةٍ وَ{رِفْقٍ}. وَقَالَ: لَا أَسْأَلُكُمْ {مَالًا}. فَلَمْ تَجِدْ عَادٌ {جَوَابًا}. قَالَ هُودٌ: إِنَّ الْأَصْنَامَ لَا تَنْفَعُ وَلَا {تَضُرُّ}، وَإِنِّي {تَوَكَّلْتُ} عَلَى اللهِ."
    },
    "think": {
     "q": "قَالَ هُودٌ: «فَكِيدُونِي جَمِيعًا». مِنْ أَيْنَ جَاءَتْ هٰذِهِ الشَّجَاعَةُ؟",
     "qt": "Hûd «Hepiniz bana tuzak kurun» dedi. Bu cesaret nereden geliyordu?",
     "model": "Hûd tek başınaydı; karşısında herkesin korktuğu güçlü bir kavim vardı. Ama o putların ve onlara tapanların ne fayda ne zarar verebileceğine inanıyordu. Her şeyin Allah'ın elinde olduğuna, O'nun izni olmadan bir yaprağın bile düşmeyeceğine güveniyordu. Cesareti kendi gücünden değil, tevekkülünden geliyordu."
    },
    "personal": {
     "q": "دَعَا هُودٌ قَوْمَهُ بِرِفْقٍ. هَلْ نَصَحْتَ أَحَدًا بِرِفْقٍ؟",
     "qt": "Hûd kavmini yumuşaklıkla davet etti. Sen birine yumuşak bir dille öğüt verdiğin oldu mu? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "نَصَحْتُ … بِرِفْقٍ",
      "قُلْتُ لِـ …: …"
     ]
    },
    "retell": [
     "حِكْمَةٌ وَرِفْقٌ",
     "لَا أَسْأَلُكُمْ مَالًا",
     "عَجَزُوا",
     "الْأَصْنَامُ",
     "لَا تَنْفَعُ وَلَا تَضُرُّ",
     "تَوَكَّلْتُ"
    ],
    "quran": [
     {
      "ar": "يَا قَوْمِ لَا أَسْأَلُكُمْ عَلَيْهِ أَجْرًا ۖ إِنْ أَجْرِيَ إِلَّا عَلَى الَّذِي فَطَرَنِي ۚ أَفَلَا تَعْقِلُونَ",
      "ref": "Hûd 11:51",
      "tr": "Ey kavmim! Buna karşılık sizden bir ücret istemiyorum. Benim ücretim ancak beni yaratana aittir. Hâlâ akıl etmeyecek misiniz?",
      "inText": "«يَا قَوْمِ لَا أَسْأَلُكُمْ عَلَيْهِ مَالًا …»"
     },
     {
      "ar": "وَيَا قَوْمِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ يُرْسِلِ السَّمَاءَ عَلَيْكُمْ مِدْرَارًا وَيَزِدْكُمْ قُوَّةً إِلَى قُوَّتِكُمْ",
      "ref": "Hûd 11:52",
      "tr": "Ey kavmim! Rabbinizden bağışlanma dileyin, sonra O'na tövbe edin ki üzerinize gökten bol yağmur göndersin ve gücünüze güç katsın.",
      "inText": "بَلْ يُبَارِكُ اللهُ لَكُمْ فِي الرِّزْقِ وَيَزِيدُ فِي قُوَّتِكُمْ"
     },
     {
      "ar": "أَوَعَجِبْتُمْ أَنْ جَاءَكُمْ ذِكْرٌ مِنْ رَبِّكُمْ عَلَى رَجُلٍ مِنْكُمْ لِيُنْذِرَكُمْ",
      "ref": "A'râf 7:69",
      "tr": "Sizi uyarmak için içinizden bir adam aracılığıyla Rabbinizden size bir öğüt gelmesine mi şaştınız?",
      "inText": "«أَوَعَجِبْتُمْ أَنْ جَاءَكُمْ ذِكْرٌ …»"
     },
     {
      "ar": "إِنِّي أُشْهِدُ اللهَ وَاشْهَدُوا أَنِّي بَرِيءٌ مِمَّا تُشْرِكُونَ ۝ مِنْ دُونِهِ ۖ فَكِيدُونِي جَمِيعًا ثُمَّ لَا تُنْظِرُونِ ۝ إِنِّي تَوَكَّلْتُ عَلَى اللهِ رَبِّي وَرَبِّكُمْ",
      "ref": "Hûd 11:54–56",
      "tr": "Allah'ı şahit tutuyorum, siz de şahit olun ki ben sizin O'ndan başka ortak koştuklarınızdan uzağım. Hepiniz bana tuzak kurun, sonra bana mühlet vermeyin. Ben benim de Rabbim, sizin de Rabbiniz olan Allah'a tevekkül ettim.",
      "inText": "«إِنِّي بَرِيءٌ مِمَّا تُشْرِكُونَ» …"
     }
    ]
   },
   "sections": [
    {
     "n": 8,
     "title_ar": "حِكْمَةُ هُودٍ",
     "title_tr": "Hûd'un hikmeti",
     "s": [
      [
       "وَمَا زَالَ هُودٌ يَنْصَحُ لِقَوْمِهِ وَيَدْعُوهُمْ بِحِكْمَةٍ وَرِفْقٍ.",
       "Hûd kavmine öğüt vermeye ve onları hikmetle, yumuşaklıkla davet etmeye devam etti."
      ],
      [
       "قَالَ هُودٌ: يَا قَوْمِ أَنَا أَخُوكُمْ وَصَدِيقُكُمْ بِالْأَمْسِ! أَلَا تَعْرِفُونَنِي؟",
       "Hûd dedi: Ey kavmim! Ben dünkü kardeşiniz ve arkadaşınızım! Beni tanımıyor musunuz?"
      ],
      [
       "يَا إِخْوَانِي! لِمَاذَا تَخَافُونَنِي وَتَفِرُّونَ مِنِّي، إِنِّي لَا أَنْقُصُ مِنْ مَالِكُمْ شَيْئًا.",
       "Kardeşlerim! Neden benden korkup kaçıyorsunuz? Ben malınızdan hiçbir şey eksiltmiyorum."
      ],
      [
       "«يَا قَوْمِ لَا أَسْأَلُكُمْ عَلَيْهِ مَالًا إِنْ أَجْرِيَ إِلَّا عَلَى اللهِ».",
       "«Ey kavmim! Buna karşılık sizden bir mal istemiyorum; benim ücretim ancak Allah'a aittir.»"
      ],
      [
       "يَا قَوْمِ مَاذَا تَخَافُونَ إِنْ آمَنْتُمْ بِاللهِ، وَاللهِ لَا تَفْقِدُونَ مِنْ أَمْوَالِكُمْ شَيْئًا إِذَا آمَنْتُمْ بِاللهِ!",
       "Ey kavmim! Allah'a iman ederseniz neden korkuyorsunuz? Allah'a yemin olsun, Allah'a iman ederseniz mallarınızdan hiçbir şey kaybetmezsiniz!"
      ],
      [
       "بَلْ يُبَارِكُ اللهُ لَكُمْ فِي الرِّزْقِ وَيَزِيدُ فِي قُوَّتِكُمْ.",
       "Aksine Allah rızkınızı bereketlendirir ve gücünüzü artırır."
      ],
      [
       "وَيَا قَوْمِ لِمَاذَا تَتَعَجَّبُونَ مِنْ رِسَالَتِي؟ إِنَّ اللهَ لَا يُكَلِّمُ وَاحِدًا وَاحِدًا!",
       "Ey kavmim! Elçiliğime neden şaşırıyorsunuz? Allah herkesle tek tek konuşmaz!"
      ],
      [
       "إِنَّ اللهَ لَا يُخَاطِبُ كُلَّ أَحَدٍ يَقُولُ لَهُ: افْعَلْ كَذَا، افْعَلْ كَذَا!",
       "Allah herkese tek tek hitap edip «Şunu yap, bunu yap!» demez."
      ],
      [
       "إِنَّ اللهَ يُرْسِلُ إِلَى كُلِّ قَوْمٍ رَجُلًا مِنْهُمْ يُكَلِّمُهُمْ وَيَنْصَحُ لَهُمْ.",
       "Allah her kavme, onlarla konuşacak ve onlara öğüt verecek kendilerinden bir adam gönderir."
      ],
      [
       "وَقَدْ أَرْسَلَنِي إِلَيْكُمْ أُكَلِّمُكُمْ وَأَنْصَحُ لَكُمْ:",
       "Beni de sizinle konuşayım ve size öğüt vereyim diye gönderdi:"
      ],
      [
       "«أَوَعَجِبْتُمْ أَنْ جَاءَكُمْ ذِكْرٌ مِنْ رَبِّكُمْ عَلَى رَجُلٍ مِنْكُمْ لِيُنْذِرَكُمْ؟»",
       "«Sizi uyarmak için içinizden bir adam aracılığıyla Rabbinizden size bir öğüt gelmesine mi şaştınız?»"
      ]
     ]
    },
    {
     "n": 9,
     "title_ar": "إِيمَانُ هُودٍ",
     "title_tr": "Hûd'un imanı",
     "s": [
      [
       "وَلَمْ تَجِدْ عَادٌ جَوَابًا! وَمَا عَلِمُوا كَيْفَ يُجِيبُونَ هُودًا!",
       "Âd bir cevap bulamadı! Hûd'a nasıl cevap vereceklerini bilemediler!"
      ],
      [
       "وَلٰكِنَّهُمْ قَالُوا لَمَّا عَجَزُوا: قَدْ غَضِبَتْ عَلَيْكَ آلِهَتُنَا فَأَصَابَكَ مَرَضٌ فِي عَقْلِكَ!",
       "Ama âciz kalınca dediler: İlahlarımız sana öfkelendi, bu yüzden aklına bir hastalık isabet etti!"
      ],
      [
       "وَقَدْ وَقَعَ عَلَيْكَ وَبَالٌ مِنَ الْآلِهَةِ!",
       "İlahlardan sana bir bela geldi!"
      ],
      [
       "قَالَ هُودٌ: إِنَّ هٰذِهِ الْأَصْنَامَ حِجَارَةٌ لَا تَنْفَعُ أَحَدًا وَلَا تَضُرُّ!",
       "Hûd dedi: Bu putlar taştır; kimseye ne fayda verir ne zarar!"
      ],
      [
       "وَإِنَّ هٰذِهِ الْأَصْنَامَ حِجَارَةٌ لَا تَتَكَلَّمُ وَلَا تَسْمَعُ وَلَا تَنْظُرُ!",
       "Bu putlar taştır; ne konuşur, ne işitir, ne görür!"
      ],
      [
       "إِنَّ هٰذِهِ الْأَصْنَامَ لَا تَمْلِكُ خَيْرًا وَلَا شَرًّا!",
       "Bu putların elinde ne iyilik vardır ne kötülük!"
      ],
      [
       "وَلَا تَمْلِكُ لِأَحَدٍ نَفْعًا وَلَا ضَرًّا!",
       "Kimseye ne fayda ne zarar verebilirler!"
      ],
      [
       "وَإِنَّكُمْ أَيْضًا لَا تَمْلِكُونَ خَيْرًا وَلَا شَرًّا!",
       "Sizin de elinizde ne iyilik vardır ne kötülük!"
      ],
      [
       "وَلَا تَمْلِكُونَ لِي نَفْعًا وَلَا ضَرًّا!",
       "Bana ne fayda ne zarar verebilirsiniz!"
      ],
      [
       "إِنِّي لَا أُؤْمِنُ بِآلِهَتِكُمْ وَلَا أَخَافُهُمْ.",
       "Ben sizin ilahlarınıza inanmıyorum ve onlardan korkmuyorum."
      ],
      [
       "«إِنِّي بَرِيءٌ مِمَّا تُشْرِكُونَ».",
       "«Ben sizin ortak koştuklarınızdan uzağım.»"
      ],
      [
       "«فَكِيدُونِي جَمِيعًا ثُمَّ لَا تُنْظِرُونِ».",
       "«Hepiniz bana tuzak kurun, sonra bana hiç mühlet vermeyin.»"
      ],
      [
       "«إِنِّي تَوَكَّلْتُ عَلَى اللهِ رَبِّي وَرَبِّكُمْ».",
       "«Ben benim de Rabbim, sizin de Rabbiniz olan Allah'a tevekkül ettim.»"
      ],
      [
       "كُلُّ شَيْءٍ تَحْتَ يَدِهِ، وَلَا تَسْقُطُ وَرَقَةٌ إِلَّا بِإِذْنِهِ.",
       "Her şey O'nun elinin altındadır; O'nun izni olmadan bir yaprak bile düşmez."
      ]
     ]
    }
   ]
  },
  {
   "id": 5,
   "emoji": "🌪️",
   "title_ar": "الْعَاصِفَةُ",
   "title_tr": "Fırtına",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «عِنَادُ عَادٍ», «الْعَذَابُ». Âd yıllardır yağmur bekliyordu. Bir gün gökte büyük bir bulut gördüler. Sence bu bulut ne getirdi?",
     "options": [
      [
       "رِيحًا فِيهَا عَذَابٌ",
       "İçinde azap olan bir rüzgâr"
      ],
      [
       "مَطَرًا كَثِيرًا وَخَيْرًا",
       "Bol yağmur ve bereket"
      ],
      [
       "لَا شَيْءَ",
       "Hiçbir şey"
      ]
     ]
    },
    "vocab": [
     [
      "عِنَادٌ",
      "inat",
      "🙅"
     ],
     [
      "دَلِيلٌ / بَيِّنَةٌ",
      "delil / açık kanıt",
      "🔎"
     ],
     [
      "سَحَابَةٌ",
      "bulut",
      "☁️"
     ],
     [
      "رِيحٌ / عَاصِفَةٌ",
      "rüzgâr / fırtına",
      "🌪️"
     ],
     [
      "الرُّعْبُ",
      "dehşet, korku",
      "😱"
     ],
     [
      "نَجَا / هَلَكَ",
      "kurtuldu / helak oldu",
      "⚖️"
     ]
    ]
   },
   "stop": {
    "section": 11,
    "after": 5,
    "prompt_tr": "İnsanlar «Bulut! Yağmur!» diye sevinçle dans ediyor. Hûd ise bulutu görünce bir şey anladı. Sence ne anladı?",
    "options": [
     [
      "أَنَّ الْعَذَابَ قَدْ جَاءَ",
      "Azabın geldiğini"
     ],
     [
      "أَنَّ الْمَطَرَ سَيَأْتِي",
      "Yağmurun geleceğini"
     ],
     [
      "أَنَّ قَوْمَهُ آمَنُوا",
      "Kavminin iman ettiğini"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَتْ عَادٌ: لَا نَتْرُكُ آلِهَتَنَا.",
     "سَأَلُوا: مَتَى يَجِيءُ الْعَذَابُ؟",
     "رَأَوْا سَحَابَةً فَفَرِحُوا.",
     "قَالَ هُودٌ: هٰذِهِ رِيحٌ فِيهَا عَذَابٌ.",
     "هَبَّتِ الْعَاصِفَةُ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ.",
     "نَجَا هُودٌ وَالْمُؤْمِنُونَ وَهَلَكَتْ عَادٌ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا لَا تَتْرُكُ عَادٌ آلِهَتَهَا؟",
      "qt": "Âd ilahlarını neden bırakmıyor?",
      "o": [
       "لِأَنَّ آبَاءَهُمْ كَانُوا يَعْبُدُونَهَا",
       "لِأَنَّهَا تَنْفَعُهُمْ",
       "لِأَنَّ هُودًا أَمَرَهُمْ بِذٰلِكَ"
      ],
      "ot": [
       "Çünkü babaları onlara tapıyordu",
       "Çünkü onlara fayda veriyor",
       "Çünkü Hûd bunu emretti"
      ],
      "a": 0,
      "ev": [
       "10.4"
      ]
     },
     {
      "q": "مَاذَا قَالَ هُودٌ لَمَّا سَأَلُوهُ: مَتَى يَجِيءُ الْعَذَابُ؟",
      "qt": "«Azap ne zaman gelecek?» diye sorduklarında Hûd ne dedi?",
      "o": [
       "إِنَّمَا الْعِلْمُ عِنْدَ اللهِ",
       "يَجِيءُ غَدًا",
       "لَا يَجِيءُ أَبَدًا"
      ],
      "ot": [
       "Bilgi ancak Allah katındadır",
       "Yarın gelecek",
       "Asla gelmeyecek"
      ],
      "a": 0,
      "ev": [
       "10.8"
      ]
     },
     {
      "q": "لِمَاذَا فَرِحَ النَّاسُ جِدًّا؟",
      "qt": "İnsanlar neden çok sevindi?",
      "o": [
       "رَأَوْا سَحَابَةً تَأْتِي إِلَيْهِمْ",
       "آمَنُوا بِهُودٍ",
       "وَجَدُوا مَالًا كَثِيرًا"
      ],
      "ot": [
       "Kendilerine doğru gelen bir bulut gördüler",
       "Hûd'a iman ettiler",
       "Çok mal buldular"
      ],
      "a": 0,
      "ev": [
       "11.2"
      ]
     },
     {
      "q": "كَمْ دَامَتِ الْعَاصِفَةُ؟",
      "qt": "Fırtına ne kadar sürdü?",
      "o": [
       "سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ",
       "يَوْمًا وَاحِدًا",
       "أَرْبَعِينَ يَوْمًا"
      ],
      "ot": [
       "Yedi gece sekiz gün",
       "Bir gün",
       "Kırk gün"
      ],
      "a": 0,
      "ev": [
       "11.16"
      ]
     },
     {
      "q": "لِمَاذَا نَجَا هُودٌ وَالْمُؤْمِنُونَ؟",
      "qt": "Hûd ve müminler neden kurtuldu?",
      "o": [
       "بِإِيمَانِهِمْ",
       "بِقُوَّتِهِمْ",
       "بِقُصُورِهِمُ الْعَالِيَةِ"
      ],
      "ot": [
       "İmanları sayesinde",
       "Güçleri sayesinde",
       "Yüksek sarayları sayesinde"
      ],
      "a": 0,
      "ev": [
       "11.19"
      ]
     }
    ],
    "focus": {
     "title": "Benzetme: كَـ، كَأَنَّ، مِثْلُ",
     "explain": "Bir şeyi başka bir şeye benzetmek için isimden önce <b>كَـ</b> (gibi), cümleden önce <b>كَأَنَّ</b> (sanki) kullanılır; <b>مِثْلُ</b> de «benzeri» demektir. Bu kıssada çok var: <span class='ar-inline'>كَأَشْجَارِ النَّخْلِ</span> (hurma ağaçları gibi), <span class='ar-inline'>كَوُحُوشِ الْغَابَةِ</span>, <span class='ar-inline'>كَالْفِيلِ الْهَائِجِ</span>, <span class='ar-inline'>كَالظِّلِّ</span>, <span class='ar-inline'>أَجْسَامُهُمْ كَأَنَّهَا مِنْ حَدِيدٍ</span>, <span class='ar-inline'>مَا رَأَى النَّاسُ مِثْلَهَا</span>.",
     "examples": [
      "فَكَانُوا كَأَشْجَارِ النَّخْلِ سَقَطَتْ عَلَى الْأَرْضِ",
      "أَجْسَامُهُمْ كَأَنَّهَا مِنْ حَدِيدٍ",
      "رِيحٌ شَدِيدَةٌ مَا رَأَى النَّاسُ مِثْلَهَا"
     ],
     "items": [
      {
       "q": "وَمَاتَ الْقَوْمُ فَكَانُوا ____ النَّخْلِ سَقَطَتْ عَلَى الْأَرْضِ.",
       "o": [
        "كَأَشْجَارِ",
        "أَشْجَارُ",
        "فِي أَشْجَارِ"
       ],
       "a": 0
      },
      {
       "q": "أَجْسَامُهُمْ ____ مِنْ حَدِيدٍ.",
       "o": [
        "كَأَنَّهَا",
        "كَأَنَّهُ",
        "كَأَنَّكَ"
       ],
       "a": 0
      },
      {
       "q": "هَبَّتْ رِيحٌ شَدِيدَةٌ مَا رَأَى النَّاسُ ____.",
       "o": [
        "مِثْلَهَا",
        "مِثْلَهُ",
        "مِثْلَهُمْ"
       ],
       "a": 0
      },
      {
       "q": "لَا يُفَارِقُ بَيْتَكُمْ وَيَتْبَعُكُمْ ____.",
       "o": [
        "كَالظِّلِّ",
        "الظِّلُّ",
        "لِلظِّلِّ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَتْ عَادٌ: لَا نَتْرُكُ {آلِهَتَنَا}. ثُمَّ رَأَوْا {سَحَابَةً} فَفَرِحُوا. وَلٰكِنَّهَا كَانَتْ {رِيحًا} فِيهَا عَذَابٌ أَلِيمٌ. فَنَجَا هُودٌ وَالْمُؤْمِنُونَ بِ{إِيمَانِهِمْ}، وَهَلَكَتْ عَادٌ بِ{كُفْرِهَا}."
    },
    "think": {
     "q": "رَأَتْ عَادٌ السَّحَابَةَ فَفَرِحَتْ، وَرَآهَا هُودٌ فَفَهِمَ أَنَّ الْعَذَابَ جَاءَ. لِمَاذَا رَأَوْا شَيْئًا وَاحِدًا بِعُيُونٍ مُخْتَلِفَةٍ؟",
     "qt": "Âd bulutu görünce sevindi, Hûd ise azabın geldiğini anladı. Aynı şeyi neden farklı gözlerle gördüler?",
     "model": "Âd yalnızca istediği şeyi, yani yağmuru görüyordu; uyarıları alaya almış, «azabı bekliyoruz» bile demişlerdi. Hûd ise Allah'ın sözüne güveniyor ve kavminin inadını biliyordu. İnsan neye inanıyorsa olaylara da o gözle bakar. Ayrıca kıssa, güçlerine güvenen Âd'ın bir rüzgâr karşısında ne kadar çaresiz kaldığını gösteriyor."
    },
    "retell": [
     "عِنَادٌ",
     "آلِهَتُنَا",
     "سَحَابَةٌ",
     "رِيحٌ",
     "الْعَاصِفَةُ",
     "نَجَا / هَلَكَتْ"
    ],
    "quran": [
     {
      "ar": "قَالَ إِنَّمَا الْعِلْمُ عِنْدَ اللهِ وَأُبَلِّغُكُمْ مَا أُرْسِلْتُ بِهِ",
      "ref": "Ahkâf 46:23",
      "tr": "Dedi: Bilgi ancak Allah katındadır; ben size gönderildiğim şeyi ulaştırıyorum.",
      "inText": "«إِنَّمَا الْعِلْمُ عِنْدَ اللهِ …»"
     },
     {
      "ar": "فَلَمَّا رَأَوْهُ عَارِضًا مُسْتَقْبِلَ أَوْدِيَتِهِمْ قَالُوا هٰذَا عَارِضٌ مُمْطِرُنَا ۚ بَلْ هُوَ مَا اسْتَعْجَلْتُمْ بِهِ ۖ رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ",
      "ref": "Ahkâf 46:24",
      "tr": "Onu vadilerine doğru gelen bir bulut olarak görünce «Bu bize yağmur yağdıracak bir bulut» dediler. Hayır, o acele istediğiniz şeydir: içinde acı bir azap bulunan bir rüzgâr.",
      "inText": "بَلْ هُوَ رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ"
     },
     {
      "ar": "سَخَّرَهَا عَلَيْهِمْ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا فَتَرَى الْقَوْمَ فِيهَا صَرْعَى كَأَنَّهُمْ أَعْجَازُ نَخْلٍ خَاوِيَةٍ",
      "ref": "Hâkka 69:7",
      "tr": "Allah onu yedi gece sekiz gün aralıksız üzerlerine musallat etti. O kavmi orada, içi boş hurma kütükleri gibi yere serilmiş görürdün.",
      "inText": "كَانَ ذٰلِكَ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ"
     },
     {
      "ar": "أَلَا إِنَّ عَادًا كَفَرُوا رَبَّهُمْ ۗ أَلَا بُعْدًا لِعَادٍ قَوْمِ هُودٍ",
      "ref": "Hûd 11:60",
      "tr": "İyi bilin ki Âd Rablerini inkâr etti. İyi bilin ki Hûd'un kavmi Âd, rahmetten uzak olsun!",
      "inText": "«أَلَا إِنَّ عَادًا كَفَرُوا رَبَّهُمْ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 10,
     "title_ar": "عِنَادُ عَادٍ",
     "title_tr": "Âd'ın inadı",
     "s": [
      [
       "سَمِعَتْ عَادٌ كُلَّ ذٰلِكَ وَلٰكِنَّهُمْ لَمْ يُؤْمِنُوا!",
       "Âd bütün bunları duydu ama iman etmediler!"
      ],
      [
       "ضَاعَتْ فِيهِمْ نَصِيحَةُ هُودٍ! ضَاعَتْ فِيهِمْ حِكْمَةُ هُودٍ.",
       "Hûd'un öğüdü onlarda boşa gitti! Hûd'un hikmeti onlarda boşa gitti."
      ],
      [
       "وَقَالُوا يَا هُودُ مَا عِنْدَكَ دَلِيلٌ وَلَا بَيِّنَةٌ!",
       "Dediler: Ey Hûd! Senin ne bir delilin var ne de açık bir kanıtın!"
      ],
      [
       "وَلَا نَتْرُكُ يَا هُودُ آلِهَتَنَا الْقَدِيمَةَ لِقَوْلِكَ الْجَدِيدِ.",
       "Ey Hûd! Senin yeni sözün için eski ilahlarımızı bırakmayız."
      ],
      [
       "أَنَتْرُكُ الْآلِهَةَ الَّتِي كَانَ يَعْبُدُهَا آبَاؤُنَا لِقَوْلِ قَائِلٍ؟ أَبَدًا، أَبَدًا!",
       "Babalarımızın taptığı ilahları birinin sözü yüzünden mi bırakacağız? Asla, asla!"
      ],
      [
       "وَيَا هُودُ إِنَّكَ لَا تُؤْمِنُ بِآلِهَتِنَا وَلَا تَخَافُهُمْ.",
       "Ey Hûd! Sen bizim ilahlarımıza inanmıyorsun ve onlardan korkmuyorsun."
      ],
      [
       "فَإِنَّا لَا نُؤْمِنُ بِإِلٰهِكَ وَلَا نَخَافُ عَذَابَهُ.",
       "Biz de senin ilahına inanmıyoruz ve onun azabından korkmuyoruz."
      ],
      [
       "وَإِنَّا نَسْمَعُكَ كَثِيرًا تَذْكُرُ الْعَذَابَ، فَأَيْنَ هُوَ يَا هُودُ، وَمَتَى يَجِيءُ؟",
       "Seni hep azaptan söz ederken duyuyoruz; nerede o, ey Hûd, ne zaman gelecek?"
      ],
      [
       "قَالَ هُودٌ: «إِنَّمَا الْعِلْمُ عِنْدَ اللهِ وَإِنَّمَا أَنَا نَذِيرٌ مُبِينٌ».",
       "Hûd dedi: «Bilgi ancak Allah katındadır; ben sadece apaçık bir uyarıcıyım.»"
      ],
      [
       "قَالَتْ عَادٌ: فَإِنَّا نَنْتَظِرُ ذٰلِكَ الْعَذَابَ وَنَشْتَاقُ أَنْ نَرَاهُ.",
       "Âd dedi: O hâlde o azabı bekliyoruz ve onu görmeyi özlüyoruz."
      ],
      [
       "وَتَعَجَّبَ هُودٌ مِنْ جَرَاءَتِهِمْ، وَتَأَسَّفَ هُودٌ عَلَى سَفَاهَتِهِمْ.",
       "Hûd onların cüretine şaştı ve beyinsizliklerine üzüldü."
      ]
     ]
    },
    {
     "n": 11,
     "title_ar": "الْعَذَابُ",
     "title_tr": "Azap",
     "s": [
      [
       "وَكَانَ عَادٌ يَنْتَظِرُونَ الْمَطَرَ كُلَّ يَوْمٍ وَيَنْظُرُونَ إِلَى السَّمَاءِ فَلَا يَرَوْنَ قِطْعَةَ سَحَابٍ.",
       "Âd her gün yağmur bekler, gökyüzüne bakar ama bir parça bulut göremezdi."
      ],
      [
       "وَكَانُوا فِي حَاجَةٍ إِلَى الْمَطَرِ، وَكَانَ لَهُمْ شَوْقٌ عَظِيمٌ إِلَى الْمَطَرِ.",
       "Yağmura muhtaçtılar ve yağmuru çok büyük bir özlemle bekliyorlardı."
      ],
      [
       "ذَاتَ يَوْمٍ رَأَوْا سَحَابَةً تَأْتِي إِلَيْهِمْ، فَفَرِحُوا جِدًّا.",
       "Bir gün kendilerine doğru gelen bir bulut gördüler ve çok sevindiler."
      ],
      [
       "وَصَاحُوا: هٰذِهِ سَحَابَةٌ تَأْتِي مِنْهَا مَطَرٌ.",
       "Bağırdılar: Bu, yağmur getirecek bir bulut!"
      ],
      [
       "وَرَقَصَ النَّاسُ فَرَحًا، وَنَادَى بَعْضُهُمْ بَعْضًا وَقَالُوا:",
       "İnsanlar sevinçten dans etti, birbirlerine seslenip dediler:"
      ],
      [
       "سَحَابَةٌ! مَطَرٌ! سَحَابَةٌ مَطَرٌ!",
       "Bulut! Yağmur! Bulut, yağmur!"
      ],
      [
       "وَلٰكِنْ هُودًا فَهِمَ أَنَّ الْعَذَابَ قَدْ جَاءَ.",
       "Ama Hûd azabın geldiğini anladı."
      ],
      [
       "وَقَالَ لَهُمْ هُودٌ: لَيْسَ هٰذَا سَحَابَ رَحْمَةٍ، بَلْ هُوَ رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ.",
       "Hûd onlara dedi: Bu bir rahmet bulutu değil; aksine içinde acı bir azap bulunan bir rüzgârdır."
      ],
      [
       "وَكَانَ كَذٰلِكَ، فَقَدْ هَبَّتْ رِيحٌ شَدِيدَةٌ مَا رَأَى النَّاسُ مِثْلَهَا، وَمَا سَمِعَ النَّاسُ بِمِثْلِهَا.",
       "Ve öyle oldu: insanların benzerini ne gördüğü ne de duyduğu şiddetli bir rüzgâr esti."
      ],
      [
       "وَهَبَّتِ الْعَاصِفَةُ تَقْلَعُ الْأَشْجَارَ وَتَهْدِمُ الْبُيُوتَ وَتَحْمِلُ الدَّوَابَّ وَتَرْمِي بِهَا إِلَى مَكَانٍ بَعِيدٍ.",
       "Fırtına esti; ağaçları söküyor, evleri yıkıyor, hayvanları kaldırıp uzak bir yere fırlatıyordu."
      ],
      [
       "وَطَارَتْ رِمَالُ الصَّحْرَاءِ وَأَظْلَمَتِ الدُّنْيَا فَلَا يَرَى الْإِنْسَانُ شَيْئًا.",
       "Çölün kumları uçuştu, dünya karardı; insan hiçbir şey göremiyordu."
      ],
      [
       "وَدَخَلَهُمُ الرُّعْبُ فَدَخَلُوا بُيُوتَهُمْ وَأَغْلَقُوا أَبْوَابَهَا.",
       "İçlerine dehşet düştü; evlerine girip kapılarını kapattılar."
      ],
      [
       "وَعَانَقَ الْأَطْفَالُ الْأُمَّهَاتِ، وَاعْتَصَمَ النَّاسُ بِالْجُدْرَانِ، وَدَخَلَ النَّاسُ الْحُجُرَاتِ.",
       "Çocuklar annelerine sarıldı; insanlar duvarlara sığındı ve odalara girdi."
      ],
      [
       "الْأَطْفَالُ يَبْكُونَ وَالنِّسَاءُ يَصْرُخْنَ، وَالرِّجَالُ يَدْعُونَ وَيَسْتَغِيثُونَ.",
       "Çocuklar ağlıyor, kadınlar çığlık atıyor, erkekler dua edip yardım diliyordu."
      ],
      [
       "وَكَانَ قَائِلٌ يَقُولُ:",
       "Biri şöyle diyordu:"
      ],
      [
       "«لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللهِ».",
       "«Bugün Allah'ın emrinden koruyacak kimse yoktur.»"
      ],
      [
       "كَانَ ذٰلِكَ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ.",
       "Bu, yedi gece sekiz gün sürdü."
      ],
      [
       "وَمَاتَ الْقَوْمُ فَكَانُوا كَأَشْجَارِ النَّخْلِ سَقَطَتْ عَلَى الْأَرْضِ.",
       "Kavim öldü; yere devrilmiş hurma ağaçları gibi oldular."
      ],
      [
       "وَكَانَ مَنْظَرًا قَبِيحًا جِدًّا، النَّاسُ أَمْوَاتٌ يَأْكُلُهُمُ الطَّيْرُ، وَالْبُيُوتُ خَرَابٌ يَسْكُنُهَا الْبُومُ.",
       "Çok çirkin bir manzaraydı: insanlar ölü, kuşlar onları yiyor; evler harabe, içinde baykuşlar oturuyor."
      ],
      [
       "وَنَجَا هُودٌ وَالْمُؤْمِنُونَ بِإِيمَانِهِمْ، وَهَلَكَتْ عَادٌ بِكُفْرِهَا وَعِنَادِهَا.",
       "Hûd ve müminler imanları sayesinde kurtuldu; Âd ise küfrü ve inadı yüzünden helak oldu."
      ],
      [
       "«أَلَا إِنَّ عَادًا كَفَرُوا رَبَّهُمْ، أَلَا بُعْدًا لِعَادٍ قَوْمِ هُودٍ».",
       "«İyi bilin ki Âd Rablerini inkâr etti. İyi bilin ki Hûd'un kavmi Âd, rahmetten uzak olsun!»"
      ]
     ]
    }
   ]
  }
 ]
});
