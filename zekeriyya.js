/* Kasasu'n-Nebiyyîn — Hz. Zekeriyyâ'nın Kıssası (s. 331–340)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "zekeriyya",
 "title_ar": "قِصَّةُ زَكَرِيَّا عَلَيْهِ السَّلَامُ",
 "title_tr": "Hz. Zekeriyyâ'nın Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 331–340",
 "overrides": {
  "وطورا": "طورا_تارة",
  "فقرت": "قرت",
  "لابويه": "ابواه",
  "بالابوين": "ابواه"
 },
 "voverrides": {
  "وَإِمَامًا": "امام_قائد"
 },
 "units": [
  {
   "id": 1,
   "emoji": "🤲",
   "title_ar": "دُعَاءُ زَكَرِيَّا",
   "title_tr": "Zekeriyyâ'nın duası",
   "pre": {
    "predict": {
     "prompt_tr": "Zekeriyyâ yaşlanmıştı, kemikleri zayıflamış, saçları ağarmıştı; karısının çocuğu olmuyordu. Yine de Allah'tan salih bir evlat istedi. Sence ne oldu?",
     "options": [
      [
       "اسْتَجَابَ اللهُ دُعَاءَهُ وَرَزَقَهُ وَلَدًا",
       "Allah duasını kabul etti ve ona bir evlat verdi"
      ],
      [
       "لَمْ يُولَدْ لَهُ وَلَدٌ أَبَدًا",
       "Hiç çocuğu olmadı"
      ],
      [
       "تَبَنَّى طِفْلًا مِنَ النَّاسِ",
       "İnsanlardan bir çocuğu evlat edindi"
      ]
     ]
    },
    "vocab": [
     [
      "وَلَدٌ صَالِحٌ",
      "salih evlat",
      "👶"
     ],
     [
      "يَرِثُ",
      "vâris olur",
      "📜"
     ],
     [
      "السِّنُّ",
      "yaş",
      "🎂"
     ],
     [
      "الشَّيْبُ",
      "saç ağarması, aklar",
      "👴"
     ],
     [
      "التَّجَارِبُ",
      "tecrübeler",
      "🧪"
     ],
     [
      "الْحَنَانُ",
      "şefkat",
      "💗"
     ]
    ]
   },
   "stop": {
    "section": 1,
    "after": 1,
    "prompt_tr": "Zekeriyyâ yaşlıydı ve karısının doğurmasından ümit kesilmişti. İnsanlar ve tecrübeler «bu mümkün değil» diyordu. Sence Allah ne yaptı?",
    "options": [
     [
      "اسْتَجَابَ دُعَاءَهُ وَكَذَّبَ ظُنُونَ النَّاسِ",
      "Duasını kabul edip insanların sanılarını boşa çıkardı"
     ],
     [
      "قَالَ لَهُ: انْتَظِرْ مِئَةَ سَنَةٍ",
      "Ona: Yüz yıl bekle, dedi"
     ],
     [
      "لَمْ يُجِبْهُ",
      "Ona cevap vermedi"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "كَبِرَ زَكَرِيَّا وَوَهَنَ مِنْهُ الْعَظْمُ.",
     "دَعَا اللهَ بِوَلَدٍ صَالِحٍ.",
     "اسْتَجَابَ اللهُ دُعَاءَهُ.",
     "رَزَقَهُ وَلَدًا رَاشِدًا.",
     "أَرَاهُ اللهُ آيَاتِ قُدْرَتِهِ."
    ],
    "questions": [
     {
      "q": "أَيَّ وَلَدٍ طَلَبَ زَكَرِيَّا؟",
      "qt": "Zekeriyyâ nasıl bir evlat istedi?",
      "o": [
       "وَلَدًا صَالِحًا يَرِثُهُ وَيَقُومُ بِالدَّعْوَةِ",
       "وَلَدًا غَنِيًّا",
       "وَلَدًا مَلِكًا"
      ],
      "ot": [
       "Ona vâris olacak ve davet görevini üstlenecek salih bir evlat",
       "Zengin bir evlat",
       "Kral bir evlat"
      ],
      "a": 0,
      "ev": [
       "1.0"
      ]
     },
     {
      "q": "مَتَى دَعَا زَكَرِيَّا؟",
      "qt": "Zekeriyyâ ne zaman dua etti?",
      "o": [
       "حِينَ تَقَدَّمَ بِهِ السِّنُّ",
       "وَهُوَ صَغِيرٌ",
       "قَبْلَ أَنْ يَتَزَوَّجَ"
      ],
      "ot": [
       "Yaşı ilerlediğinde",
       "Küçükken",
       "Evlenmeden önce"
      ],
      "a": 0,
      "ev": [
       "1.1"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ اسْتِجَابَةُ الدُّعَاءِ بِظُنُونِ النَّاسِ؟",
      "qt": "Duanın kabulü insanların sanılarını ne yaptı?",
      "o": [
       "كَذَّبَهَا",
       "صَدَّقَهَا",
       "لَمْ يُغَيِّرْهَا"
      ],
      "ot": [
       "Onları boşa çıkardı",
       "Onları doğruladı",
       "Onları değiştirmedi"
      ],
      "a": 0,
      "ev": [
       "1.2"
      ]
     },
     {
      "q": "بِمَ خَصَّ اللهُ الْوَلَدَ؟",
      "qt": "Allah çocuğu neyle seçkin kıldı?",
      "o": [
       "بِالْحَنَانِ وَالصَّلَاحِ وَالْبِرِّ بِالْوَالِدَيْنِ",
       "بِالْمَالِ وَالْقُصُورِ",
       "بِالْقُوَّةِ وَالْجُيُوشِ"
      ],
      "ot": [
       "Şefkat, iyilik ve anne babaya iyilikle",
       "Mal ve saraylarla",
       "Güç ve ordularla"
      ],
      "a": 0,
      "ev": [
       "1.3"
      ]
     },
     {
      "q": "مَاذَا تَحَقَّقَ لِزَكَرِيَّا؟",
      "qt": "Zekeriyyâ neyi kesin olarak anladı?",
      "o": [
       "أَنَّ الْكَوْنَ كُلَّهُ بِيَدِ اللهِ",
       "أَنَّ الطِّبَّ يَشْفِي كُلَّ شَيْءٍ",
       "أَنَّ النَّاسَ صَدَقُوا"
      ],
      "ot": [
       "Bütün kâinatın Allah'ın elinde olduğunu",
       "Tıbbın her şeyi iyileştirdiğini",
       "İnsanların haklı olduğunu"
      ],
      "a": 0,
      "ev": [
       "1.6"
      ]
     }
    ],
    "focus": {
     "title": "İlgi zamiri مَا: يَفْعَلُ مَا يَشَاءُ",
     "explain": "<b>مَا</b> fiilden sonra gelince çoğu zaman «-diği şey(ler)» anlamında bir ilgi zamiridir: <span class='ar-inline'>يَفْعَلُ مَا يَشَاءُ</span> (dilediğini yapar), <span class='ar-inline'>يَخْلُقُ مَا يَشَاءُ</span> (dilediğini yaratır). İnsanlar için <span class='ar-inline'>مَنْ</span> kullanılır: <span class='ar-inline'>يَرْزُقُ مَنْ يَشَاءُ</span> (dilediğine rızık verir). Dikkat: <span class='ar-inline'>مَا</span> olumsuzluk da olabilir: <span class='ar-inline'>مَا عَرَفْتُمْ</span> (bilmediniz).",
     "examples": [
      "وَأَنَّهُ يَفْعَلُ مَا يَشَاءُ وَيَخْلُقُ مَا يَشَاءُ",
      "يُحَرِّكُ مَا يَشَاءُ وَيُعَطِّلُ مَا يَشَاءُ",
      "وَيَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ"
     ],
     "items": [
      {
       "q": "إِنَّ اللهَ يَفْعَلُ ____ يَشَاءُ.",
       "o": [
        "مَا",
        "مَنْ",
        "مَتَى"
       ],
       "a": 0
      },
      {
       "q": "وَيَرْزُقُ ____ يَشَاءُ بِغَيْرِ حِسَابٍ.",
       "o": [
        "مَنْ",
        "مَا",
        "كَيْفَ"
       ],
       "a": 0
      },
      {
       "q": "تَأْكُلُ مِنْهَا ____ تَشَاءُ.",
       "o": [
        "مَا",
        "مَنْ",
        "أَيْنَ"
       ],
       "a": 0
      },
      {
       "q": "«يَخْلُقُ مَا يَشَاءُ» = …",
       "o": [
        "Dilediğini yaratır",
        "Ne yaratır?",
        "Hiçbir şey yaratmaz"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "دَعَا زَكَرِيَّا بِوَلَدٍ {صَالِحٍ} حِينَ تَقَدَّمَ بِهِ {السِّنُّ}. فَاسْتَجَابَ اللهُ {دُعَاءَهُ}، وَرَزَقَهُ وَلَدًا رَاشِدًا. وَعَرَفَ أَنَّ اللهَ يَفْعَلُ مَا {يَشَاءُ} وَيَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ {حِسَابٍ}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ إِنَّ اللهَ «أَبْطَلَ التَّجَارِبَ الْقَدِيمَةَ»؟",
     "qt": "Kitap neden Allah'ın «eski tecrübeleri geçersiz kıldığını» söylüyor?",
     "model": "İnsanların tecrübesine göre çok yaşlı bir adamın ve kısır bir kadının çocuğu olmaz. Zekeriyyâ'nın oğlunun doğumu bu tecrübenin dışına çıktı. Yazar, tabiattaki düzenin de Allah'ın koyduğu bir düzen olduğunu, O dilerse bu düzenin dışında da yaratabileceğini anlatıyor. Bu yüzden insan, sebepler tükendi diye ümidini kesmemeli."
    },
    "personal": {
     "q": "دَعَا زَكَرِيَّا وَلَمْ يَيْأَسْ. مَاذَا تَدْعُو اللهَ أَنْ يُعْطِيَكَ؟",
     "qt": "Zekeriyyâ ümidini kesmeden dua etti. Sen Allah'tan ne vermesini istersin? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "أَدْعُو اللهَ أَنْ …",
      "رَبِّ هَبْ لِي …",
      "أَسْأَلُ اللهَ …"
     ]
    },
    "retell": [
     "زَكَرِيَّا",
     "وَلَدٌ صَالِحٌ",
     "تَقَدَّمَ بِهِ السِّنُّ",
     "اسْتَجَابَ اللهُ",
     "الْحَنَانُ وَالْبِرُّ",
     "يَفْعَلُ مَا يَشَاءُ"
    ],
    "quran": [
     {
      "ar": "قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُنْ بِدُعَائِكَ رَبِّ شَقِيًّا",
      "ref": "Meryem 19:4",
      "tr": "Dedi ki: Rabbim! Kemiklerim gevşedi, saçım sakalım ağardı. Rabbim! Sana dua edip de hiçbir zaman eli boş dönmedim.",
      "inText": "«وَوَهَنَ مِنْهُ الْعَظْمُ، وَلَمَعَ مِنْهُ الشَّيْبُ»"
     },
     {
      "ar": "يَرِثُنِي وَيَرِثُ مِنْ آلِ يَعْقُوبَ ۖ وَاجْعَلْهُ رَبِّ رَضِيًّا",
      "ref": "Meryem 19:6",
      "tr": "Bana ve Yakup ailesine vâris olacak (bir evlat bağışla). Rabbim! Onu razı olunan biri kıl.",
      "inText": "«رَضِيٍّ بَرٍّ تَقِيٍّ، يَرِثُهُ وَيَرِثُ مِنْ آلِ يَعْقُوبَ»"
     },
     {
      "ar": "تُولِجُ اللَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي اللَّيْلِ ۖ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ ۖ وَتَرْزُقُ مَنْ تَشَاءُ بِغَيْرِ حِسَابٍ",
      "ref": "Âl-i İmrân 3:27",
      "tr": "Geceyi gündüze katarsın, gündüzü geceye katarsın. Ölüden diriyi çıkarırsın, diriden ölüyü çıkarırsın. Dilediğine hesapsız rızık verirsin.",
      "inText": "«يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "دُعَاءُ زَكَرِيَّا بِوَلَدٍ صَالِحٍ",
     "title_tr": "Zekeriyyâ'nın salih bir evlat için duası",
     "s": [
      [
       "وَلَوْنٌ آخَرُ مِنْ آلَاءِ اللهِ عَلَى عِبَادِهِ، وَآيَاتِ قُدْرَتِهِ الَّتِي أَحَاطَتْ بِكُلِّ شَيْءٍ، تَجَلَّى فِي دُعَاءِ زَكَرِيَّا بِوَلَدٍ صَالِحٍ، رَضِيٍّ بَرٍّ تَقِيٍّ، يَرِثُهُ وَيَرِثُ مِنْ آلِ يَعْقُوبَ، وَيَقُومُ بِالدَّعْوَةِ إِلَى اللهِ.",
       "Allah'ın kullarına verdiği nimetlerin ve her şeyi kuşatan kudretinin delillerinin bir başka türü, Zekeriyyâ'nın salih, razı olunan, iyiliksever ve takvâ sahibi bir evlat için yaptığı duada ortaya çıktı: Ona ve Yakup ailesine vâris olacak, Allah'a davet görevini üstlenecek bir evlat."
      ],
      [
       "وَذٰلِكَ حِينَ تَقَدَّمَ بِهِ السِّنُّ، وَوَهَنَ مِنْهُ الْعَظْمُ، وَلَمَعَ مِنْهُ الشَّيْبُ، وَانْقَطَعَ الرَّجَاءُ مِنْ أَنْ تَلِدَ زَوْجَتُهُ.",
       "Bu, yaşının ilerlediği, kemiklerinin zayıfladığı, saçlarına aklar düştüğü ve karısının doğurmasından ümidin kesildiği bir zamandaydı."
      ],
      [
       "فَاسْتَجَابَ اللهُ تَعَالَى دُعَاءَهُ، وَكَذَّبَ ظُنُونَ النَّاسِ، وَأَبْطَلَ التَّجَارِبَ الْقَدِيمَةَ، فَرَزَقَهُ وَلَدًا رَاشِدًا، بَكَّرَ بِهِ النُّبُوغُ وَالْحِكْمَةُ، وَالْحِلْمُ وَالْعِلْمُ، وَالْكِتَابُ فِي الصِّغَرِ.",
       "Allah Teâlâ onun duasını kabul etti, insanların sanılarını boşa çıkardı, eski tecrübeleri geçersiz kıldı ve ona doğru yolda bir evlat verdi. Küçük yaşta ona üstün yetenek ve hikmet, yumuşak huy ve ilim, kitap erkenden geldi."
      ],
      [
       "خَصَّهُ بِالْحَنَانِ وَالصَّلَاحِ وَالتَّقْوَى وَالْبِرِّ بِالْوَالِدَيْنِ، وَالرِّقَّةِ وَلِينِ الْكَنَفِ وَخَفْضِ الْجَنَاحِ.",
       "Allah onu şefkat, iyilik, takvâ, anne babaya iyilik, incelik, yumuşak huyluluk ve alçakgönüllülükle seçkin kıldı."
      ],
      [
       "وَرَبَطَ اللهُ عَلَى قَلْبِ زَكَرِيَّا، وَأَرَاهُ آيَاتٍ تَدُلُّ عَلَى قُدْرَةِ اللهِ الْوَاسِعَةِ، وَأَنَّهُ يَفْعَلُ مَا يَشَاءُ وَيَخْلُقُ مَا يَشَاءُ.",
       "Allah Zekeriyyâ'nın kalbini sağlamlaştırdı ve ona, Allah'ın geniş kudretini, dilediğini yaptığını ve dilediğini yarattığını gösteren deliller gösterdi."
      ],
      [
       "وَأَرَاهُ تَصَرُّفَهُ فِي خَلْقِهِ وَفِي أَعْضَاءِ جِسْمِهِ، يُحَرِّكُ مَا يَشَاءُ وَيُعَطِّلُ مَا يَشَاءُ.",
       "Ona, yarattıkları üzerinde ve onun kendi vücudunun organları üzerinde dilediği gibi tasarruf ettiğini gösterdi: Dilediğini hareket ettirir, dilediğini durdurur."
      ],
      [
       "وَتَحَقَّقَ لَهُ أَنَّ الْكَوْنَ كُلَّهُ بِيَدِهِ، يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ، وَيَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ.",
       "Ve bütün kâinatın O'nun elinde olduğunu kesin olarak anladı: Ölüden diriyi, diriden ölüyü çıkarır ve dilediğine hesapsız rızık verir."
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "🌸",
   "title_ar": "مَوْلِدُ مَرْيَمَ",
   "title_tr": "Meryem'in doğumu",
   "pre": {
    "predict": {
     "prompt_tr": "İmrân'ın karısı, bir oğlu olursa onu Allah'ın dinine hizmet için adayacağını söyledi. Ama bir kız doğurdu. Sence bu kız nasıl biri oldu?",
     "options": [
      [
       "أَقْوَى عَلَى الْعِبَادَةِ مِنْ كَثِيرٍ مِنَ الْفِتْيَانِ",
       "İbadette pek çok delikanlıdan daha güçlü"
      ],
      [
       "لَمْ تَهْتَمَّ بِالدِّينِ",
       "Dinle ilgilenmedi"
      ],
      [
       "صَارَتْ مَلِكَةً",
       "Kraliçe oldu"
      ]
     ]
    },
    "vocab": [
     [
      "نَذَرَ",
      "adadı, adakta bulundu",
      "🕊️"
     ],
     [
      "ذَكَرٌ / أُنْثَى",
      "erkek / dişi, kız",
      "⚥"
     ],
     [
      "تَهَبُ",
      "bağışlar, adar",
      "🎁"
     ],
     [
      "الْكَآبَةُ",
      "hüzün, keder",
      "😔"
     ],
     [
      "هِمَّةٌ",
      "azim, gayret",
      "🔥"
     ],
     [
      "أُعِيذُهَا",
      "onu (sana) sığındırırım",
      "🛡️"
     ]
    ]
   },
   "stop": {
    "section": 3,
    "after": 0,
    "prompt_tr": "«Salih kadın bir şey istedi, Allah başka bir şey istedi.» Sence ne oldu?",
    "options": [
     [
      "وَلَدَتْ أُنْثَى",
      "Kız doğurdu"
     ],
     [
      "وَلَدَتْ تَوْأَمَيْنِ",
      "İkiz doğurdu"
     ],
     [
      "لَمْ تَلِدْ",
      "Doğurmadı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "نَذَرَتِ امْرَأَةُ عِمْرَانَ مَا فِي بَطْنِهَا لِلهِ.",
     "وَلَدَتْ أُنْثَى فَحَزِنَتْ.",
     "سَمَّتْهَا مَرْيَمَ.",
     "أَعَاذَتْهَا بِاللهِ مِنَ الشَّيْطَانِ.",
     "كَانَتْ مَرْيَمُ قَوِيَّةً عَلَى الْعِبَادَةِ."
    ],
    "questions": [
     {
      "q": "مَاذَا نَذَرَتِ امْرَأَةُ عِمْرَانَ؟",
      "qt": "İmrân'ın karısı ne adadı?",
      "o": [
       "أَنْ تَهَبَ وَلَدَهَا لِلهِ لِخِدْمَةِ دِينِهِ",
       "أَنْ تَصُومَ سَنَةً",
       "أَنْ تَبْنِيَ مَسْجِدًا"
      ],
      "ot": [
       "Çocuğunu Allah'ın dinine hizmet için adamayı",
       "Bir yıl oruç tutmayı",
       "Bir mescit yapmayı"
      ],
      "a": 0,
      "ev": [
       "2.0"
      ]
     },
     {
      "q": "مِنْ أَيِّ أُسْرَةٍ كَانَتِ امْرَأَةُ عِمْرَانَ؟",
      "qt": "İmrân'ın karısı hangi ailedendi?",
      "o": [
       "مِنْ أُسْرَةِ زَكَرِيَّا",
       "مِنْ أُسْرَةِ فِرْعَوْنَ",
       "مِنْ أُسْرَةِ سُلَيْمَانَ"
      ],
      "ot": [
       "Zekeriyyâ'nın ailesinden",
       "Firavun'un ailesinden",
       "Süleyman'ın ailesinden"
      ],
      "a": 0,
      "ev": [
       "2.0"
      ]
     },
     {
      "q": "كَيْفَ شَعَرَتْ لَمَّا وَلَدَتْ أُنْثَى؟",
      "qt": "Kız doğurunca ne hissetti?",
      "o": [
       "حَزِنَتْ وَغَشِيَتْهَا الْكَآبَةُ",
       "فَرِحَتْ كَثِيرًا",
       "غَضِبَتْ عَلَى زَوْجِهَا"
      ],
      "ot": [
       "Üzüldü ve onu bir hüzün kapladı",
       "Çok sevindi",
       "Kocasına kızdı"
      ],
      "a": 0,
      "ev": [
       "3.1"
      ]
     },
     {
      "q": "مَاذَا قَدَّرَ اللهُ لِهٰذِهِ الْبِنْتِ؟",
      "qt": "Allah bu kız için ne takdir etti?",
      "o": [
       "أَنْ تَكُونَ أُمًّا لِنَبِيٍّ صَالِحٍ",
       "أَنْ تَكُونَ مَلِكَةً",
       "أَنْ تَكُونَ نَبِيَّةً"
      ],
      "ot": [
       "Salih bir peygamberin annesi olmasını",
       "Kraliçe olmasını",
       "Peygamber olmasını"
      ],
      "a": 0,
      "ev": [
       "3.3"
      ]
     },
     {
      "q": "مَاذَا سَمَّتْهَا أُمُّهَا؟",
      "qt": "Annesi ona ne ad verdi?",
      "o": [
       "مَرْيَمَ",
       "هَاجَرَ",
       "سَارَةَ"
      ],
      "ot": [
       "Meryem",
       "Hâcer",
       "Sâre"
      ],
      "a": 0,
      "ev": [
       "3.4"
      ]
     }
    ],
    "focus": {
     "title": "لِـ + isim: «için, -e ait»",
     "explain": "<b>لِـ</b> isimden önce gelince amaç ya da sahiplik bildirir ve ismi mecrur yapar: <span class='ar-inline'>لِخِدْمَةِ دِينِهِ</span> (dinine hizmet için), <span class='ar-inline'>لِحِكْمَةٍ يَعْلَمُهَا</span> (bildiği bir hikmet için), <span class='ar-inline'>أُمًّا لِنَبِيٍّ</span> (bir peygamberin annesi). Allah lafzıyla <span class='ar-inline'>لِلهِ</span> yazılır. Zamirle <span class='ar-inline'>لَهُ، لَهَا، لَكَ</span> olur.",
     "examples": [
      "تَهَبُ هٰذَا الْوَلَدَ لِلهِ لِخِدْمَةِ دِينِهِ",
      "وَإِذَا قَدَّرَ اللهُ - لِحِكْمَةٍ يَعْلَمُهَا - أَنْ تَكُونَ أُنْثَى",
      "فَقَدْ قَدَّرَ اللهُ أَنْ تَكُونَ أُمًّا لِنَبِيٍّ صَالِحٍ"
     ],
     "items": [
      {
       "q": "تَهَبُ الْوَلَدَ لِلهِ ____ دِينِهِ.",
       "o": [
        "لِخِدْمَةِ",
        "خِدْمَةُ",
        "يَخْدُمُ"
       ],
       "a": 0
      },
      {
       "q": "أَنْ تَكُونَ أُمًّا ____ صَالِحٍ.",
       "o": [
        "لِنَبِيٍّ",
        "نَبِيٌّ",
        "نَبِيًّا"
       ],
       "a": 0
      },
      {
       "q": "«رَبِّ إِنِّي نَذَرْتُ ____ مَا فِي بَطْنِي»",
       "o": [
        "لَكَ",
        "بِكَ",
        "مِنْكَ"
       ],
       "a": 0
      },
      {
       "q": "«لِحِكْمَةٍ يَعْلَمُهَا» = …",
       "o": [
        "Bildiği bir hikmet için",
        "Hikmeti bilmiyor",
        "Hikmetle bildi"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "نَذَرَتِ امْرَأَةُ عِمْرَانَ مَا فِي {بَطْنِهَا} لِلهِ. فَوَلَدَتْ {أُنْثَى} فَحَزِنَتْ. وَلٰكِنَّهَا كَانَتْ أَقْوَى عَلَى {الْعِبَادَةِ} مِنْ كَثِيرٍ مِنَ الْفِتْيَانِ. وَسَمَّتْهَا {مَرْيَمَ}، وَأَعَاذَتْهَا بِاللهِ مِنَ {الشَّيْطَانِ}."
    },
    "think": {
     "q": "«وَأَرَادَتِ الْمَرْأَةُ الصَّالِحَةُ أَمْرًا، وَأَرَادَ اللهُ أَمْرًا». مَاذَا نَتَعَلَّمُ مِنْ ذٰلِكَ؟",
     "qt": "«Salih kadın bir şey istedi, Allah başka bir şey istedi.» Bundan ne öğreniyoruz?",
     "model": "Anne bir oğul bekliyordu ve kızı doğunca üzüldü; çünkü niyeti çocuğunu mabede hizmete adamaktı. Oysa Allah'ın planı daha büyüktü: Bu kız, ibadette birçok erkekten üstün olacak ve Îsâ gibi bir peygamberin annesi olacaktı. İnsan istediği olmayınca üzülebilir; ama Allah kullarının iyiliğini daha iyi bilir. Bu cümle Mûsâ kıssasındaki «Mûsâ bir şey istedi, Allah başka bir şey istedi» sözünü de hatırlatıyor."
    },
    "retell": [
     "امْرَأَةُ عِمْرَانَ",
     "نَذَرَتْ",
     "أُنْثَى",
     "حَزِنَتْ",
     "مَرْيَمُ",
     "أُعِيذُهَا"
    ],
    "quran": [
     {
      "ar": "إِذْ قَالَتِ امْرَأَتُ عِمْرَانَ رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي مُحَرَّرًا فَتَقَبَّلْ مِنِّي ۖ إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
      "ref": "Âl-i İmrân 3:35",
      "tr": "Hani İmrân'ın karısı: Rabbim! Karnımdakini her şeyden azade olarak sana adadım; benden kabul et. Şüphesiz sen işitensin, bilensin, demişti.",
      "inText": "«إِذْ قَالَتِ امْرَأَةُ عِمْرَانَ …»"
     },
     {
      "ar": "فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنْثَىٰ وَاللَّهُ أَعْلَمُ بِمَا وَضَعَتْ وَلَيْسَ الذَّكَرُ كَالْأُنْثَىٰ ۖ وَإِنِّي سَمَّيْتُهَا مَرْيَمَ وَإِنِّي أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ",
      "ref": "Âl-i İmrân 3:36",
      "tr": "Onu doğurunca dedi ki: Rabbim! Onu kız doğurdum. -Allah onun ne doğurduğunu daha iyi bilir.- Erkek, kız gibi değildir. Ona Meryem adını verdim. Onu ve soyunu kovulmuş şeytandan sana sığındırırım.",
      "inText": "«فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنْثَى …»"
     }
    ]
   },
   "sections": [
    {
     "n": 2,
     "title_ar": "نَذْرُ امْرَأَةِ عِمْرَانَ",
     "title_tr": "İmrân'ın karısının adağı",
     "s": [
      [
       "وَقَدْ نَذَرَتِ امْرَأَةُ عِمْرَانَ مِنْ أُسْرَةِ سَيِّدِنَا زَكَرِيَّا - عَلَيْهِ السَّلَامُ - وَكَانَتِ امْرَأَةً صَالِحَةً تُحِبُّ اللهَ وَتُحِبُّ دِينَهُ - أَنَّهَا إِذَا وَلَدَتْ ذَكَرًا تَهَبُ هٰذَا الْوَلَدَ لِلهِ لِخِدْمَةِ دِينِهِ.",
       "Efendimiz Zekeriyyâ'nın (a.s.) ailesinden olan İmrân'ın karısı -Allah'ı ve O'nun dinini seven salih bir kadındı- bir erkek çocuk doğurursa onu Allah'ın dinine hizmet etmesi için Allah'a adayacağına dair adakta bulundu."
      ],
      [
       "وَسَأَلَتِ اللهَ أَنْ يَتَقَبَّلَ هٰذَا الْوَلَدَ وَيَنْفَعَ بِهِ دِينَهُ وَعِبَادَهُ، وَأَنْ يَكُونَ دَاعِيًا إِلَى اللهِ وَإِمَامًا مِنْ أَئِمَّةِ الْهُدَى.",
       "Allah'tan bu çocuğu kabul etmesini, onunla dinine ve kullarına fayda vermesini, onun Allah'a çağıran biri ve hidayet önderlerinden bir önder olmasını diledi."
      ]
     ]
    },
    {
     "n": 3,
     "title_ar": "قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنْثَى",
     "title_tr": "«Rabbim, onu kız doğurdum» dedi",
     "s": [
      [
       "وَأَرَادَتِ الْمَرْأَةُ الصَّالِحَةُ أَمْرًا، وَأَرَادَ اللهُ أَمْرًا، وَاللهُ أَعْلَمُ بِمَصْلَحَةِ عِبَادِهِ.",
       "Salih kadın bir şey istedi, Allah başka bir şey istedi; Allah kullarının iyiliğini daha iyi bilir."
      ],
      [
       "فَإِذَا هِيَ تَلِدُ أُنْثَى، فَتَحْزَنُ لِذٰلِكَ وَتَغْشَاهَا الْكَآبَةُ.",
       "Bir de baktı ki kız doğurmuş; buna üzüldü ve onu bir hüzün kapladı."
      ],
      [
       "وَلٰكِنِ الْوَلِيدَةُ لَمْ تَكُنْ كَكُلِّ أُنْثَى، بَلْ كَانَتْ أَقْوَى عَلَى الْعِبَادَةِ، وَأَعْلَى هِمَّةً فِي الطَّاعَاتِ وَالْخَيْرَاتِ مِنْ كَثِيرٍ مِنَ الْفِتْيَانِ.",
       "Ama yeni doğan kız her kız gibi değildi; aksine ibadete pek çok delikanlıdan daha güçlü, itaatte ve hayırlı işlerde onlardan daha yüksek azimliydi."
      ],
      [
       "وَإِذَا قَدَّرَ اللهُ - لِحِكْمَةٍ يَعْلَمُهَا - أَنْ تَكُونَ أُنْثَى، وَالنُّبُوَّةُ لَا يَضْطَلِعُ بِأَعْبَائِهَا إِلَّا الرِّجَالُ، فَقَدْ قَدَّرَ اللهُ أَنْ تَكُونَ أُمًّا لِنَبِيٍّ صَالِحٍ يَكُونُ لَهُ شَأْنٌ:",
       "Allah -bildiği bir hikmet sebebiyle- onun kız olmasını takdir ettiyse ve peygamberliğin yükünü ancak erkekler üstleniyorsa, Allah onun da büyük bir şanı olacak salih bir peygamberin annesi olmasını takdir etmişti:"
      ],
      [
       "«إِذْ قَالَتِ امْرَأَةُ عِمْرَانَ رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي مُحَرَّرًا فَتَقَبَّلْ مِنِّي إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ * فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنْثَى وَاللهُ أَعْلَمُ بِمَا وَضَعَتْ وَلَيْسَ الذَّكَرُ كَالْأُنْثَى وَإِنِّي سَمَّيْتُهَا مَرْيَمَ وَإِنِّي أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ».",
       "«Hani İmrân'ın karısı: Rabbim! Karnımdakini sana adadım; (her şeyden) azade olarak (sana hizmet etsin). Benden kabul et; şüphesiz sen işitensin, bilensin, demişti. Onu doğurunca dedi ki: Rabbim! Onu kız doğurdum. -Allah onun ne doğurduğunu daha iyi bilir.- Erkek, kız gibi değildir. Ona Meryem adını verdim. Onu ve soyunu kovulmuş şeytandan sana sığındırırım.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "🍎",
   "title_ar": "رِزْقُ مَرْيَمَ",
   "title_tr": "Meryem'in rızkı",
   "pre": {
    "predict": {
     "prompt_tr": "Meryem, Zekeriyyâ'nın himayesindeydi. Zekeriyyâ onun yanına her girdiğinde mevsimi olmayan meyveler buluyordu. Sence bu durum Zekeriyyâ'ya ne düşündürdü?",
     "options": [
      [
       "أَنَّ اللهَ يَقْدِرُ أَنْ يَهَبَ لَهُ وَلَدًا",
       "Allah'ın ona da bir evlat bağışlayabileceğini"
      ],
      [
       "أَنَّ مَرْيَمَ تَشْتَرِي الْفَوَاكِهَ",
       "Meryem'in meyveleri satın aldığını"
      ],
      [
       "أَنَّ أَحَدًا يَسْرِقُ لَهَا",
       "Birinin onun için çaldığını"
      ]
     ]
    },
    "vocab": [
     [
      "كَفَالَةٌ / كَفَّلَ",
      "himaye / bakımını üstlendi",
      "🤝"
     ],
     [
      "الْفَوَاكِهُ",
      "meyveler",
      "🍇"
     ],
     [
      "أَوَانٌ",
      "mevsim, vakit",
      "📅"
     ],
     [
      "الْمِحْرَابُ",
      "mihrap, ibadet odası",
      "🕌"
     ],
     [
      "أَنَّى لَكِ هٰذَا؟",
      "bu sana nereden?",
      "❓"
     ],
     [
      "ذُرِّيَّةٌ",
      "nesil, evlat",
      "👨‍👩‍👦"
     ]
    ]
   },
   "stop": {
    "section": 5,
    "after": 1,
    "prompt_tr": "Zekeriyyâ düşündü: Meryem'e mevsimsiz meyve veren Allah, yaşlı bir adama da evlat verebilir. Sence içinde ne oldu?",
    "options": [
     [
      "جَاشَتْ نَفْسُهُ وَانْتَعَشَ الْأَمَلُ",
      "İçi coştu ve umudu canlandı"
     ],
     [
      "حَزِنَ وَيَئِسَ",
      "Üzülüp ümitsizliğe düştü"
     ],
     [
      "نَسِيَ الْأَمْرَ",
      "Bunu unuttu"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "كَانَتْ مَرْيَمُ فِي كَفَالَةِ زَكَرِيَّا.",
     "وَجَدَ عِنْدَهَا رِزْقًا فِي غَيْرِ أَوَانِهِ.",
     "قَالَ: يَا مَرْيَمُ أَنَّى لَكِ هٰذَا؟",
     "أَلْهَمَهُ اللهُ أَنَّهُ يَقْدِرُ أَنْ يَهَبَ لَهُ وَلَدًا.",
     "دَعَا: رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً."
    ],
    "questions": [
     {
      "q": "لِمَاذَا كَانَتْ مَرْيَمُ فِي كَفَالَةِ زَكَرِيَّا؟",
      "qt": "Meryem neden Zekeriyyâ'nın himayesindeydi?",
      "o": [
       "لِمَكَانَتِهَا مِنْهُ",
       "لِأَنَّهَا يَتِيمَةٌ فَقِيرَةٌ فَقَطْ",
       "لِأَنَّ الْمَلِكَ أَمَرَ"
      ],
      "ot": [
       "Ona yakınlığı sebebiyle",
       "Yalnızca fakir bir yetim olduğu için",
       "Kral emrettiği için"
      ],
      "a": 0,
      "ev": [
       "4.0"
      ]
     },
     {
      "q": "بِمَاذَا كَانَ اللهُ يُكْرِمُ مَرْيَمَ؟",
      "qt": "Allah Meryem'e neyle ikram ediyordu?",
      "o": [
       "بِالْفَوَاكِهِ فِي غَيْرِ أَوَانِهَا",
       "بِالذَّهَبِ",
       "بِالثِّيَابِ الْجَمِيلَةِ"
      ],
      "ot": [
       "Mevsimi olmayan meyvelerle",
       "Altınla",
       "Güzel elbiselerle"
      ],
      "a": 0,
      "ev": [
       "4.1"
      ]
     },
     {
      "q": "مَاذَا قَالَتْ مَرْيَمُ عَنِ الرِّزْقِ؟",
      "qt": "Meryem rızık hakkında ne dedi?",
      "o": [
       "هُوَ مِنْ عِنْدِ اللهِ",
       "اشْتَرَيْتُهُ مِنَ السُّوقِ",
       "جَاءَتْ بِهِ أُمِّي"
      ],
      "ot": [
       "Bu Allah katındandır",
       "Onu çarşıdan aldım",
       "Onu annem getirdi"
      ],
      "a": 0,
      "ev": [
       "4.2"
      ]
     },
     {
      "q": "لِمَاذَا انْقَطَعَ الرَّجَاءُ مِنْ زَكَرِيَّا؟",
      "qt": "Zekeriyyâ'dan neden ümit kesilmişti?",
      "o": [
       "لِعُلُوِّ السِّنِّ وَعُقْمِ الزَّوْجِ",
       "لِأَنَّهُ كَانَ فَقِيرًا",
       "لِأَنَّهُ كَانَ مَرِيضًا"
      ],
      "ot": [
       "İleri yaşı ve eşinin kısırlığı yüzünden",
       "Fakir olduğu için",
       "Hasta olduğu için"
      ],
      "a": 0,
      "ev": [
       "5.1"
      ]
     },
     {
      "q": "مَاذَا طَلَبَ زَكَرِيَّا فِي دُعَائِهِ؟",
      "qt": "Zekeriyyâ duasında ne istedi?",
      "o": [
       "ذُرِّيَّةً طَيِّبَةً",
       "مَالًا كَثِيرًا",
       "عُمْرًا طَوِيلًا"
      ],
      "ot": [
       "Temiz bir nesil",
       "Çok mal",
       "Uzun bir ömür"
      ],
      "a": 0,
      "ev": [
       "5.4"
      ]
     }
    ],
    "focus": {
     "title": "قَدْ + mazi: «artık, gerçekten -mış»",
     "explain": "<b>قَدْ</b> mazi fiilden önce gelince olayın gerçekleşmiş ve tamamlanmış olduğunu vurgular: <span class='ar-inline'>قَدْ طَعَنَ فِي السِّنِّ</span> (yaşı iyice ilerlemiş), <span class='ar-inline'>قَدِ انْقَطَعَ مِنْهُ الرَّجَاءُ</span> (ondan ümit artık kesilmişti). Sonraki harf sakin ise <b>قَدِ</b> olur. Muzari ile <span class='ar-inline'>قَدْ يَفْعَلُ</span> ise «bazen yapar, yapabilir» demektir.",
     "examples": [
      "يَقْدِرُ أَنْ يَهَبَ شَيْخًا قَدْ طَعَنَ فِي السِّنِّ",
      "وَلِذٰلِكَ قَدِ انْقَطَعَ مِنْهُ الرَّجَاءُ",
      "(muzari ile) وَقَدْ تَتَحَمَّسُونَ فِي حِكَايَتِهَا"
     ],
     "items": [
      {
       "q": "شَيْخًا ____ طَعَنَ فِي السِّنِّ",
       "o": [
        "قَدْ",
        "لَنْ",
        "لَمْ"
       ],
       "a": 0
      },
      {
       "q": "قَدِ ____ مِنْهُ الرَّجَاءُ",
       "o": [
        "انْقَطَعَ",
        "يَنْقَطِعَ",
        "انْقِطَاعٌ"
       ],
       "a": 0
      },
      {
       "q": "«قَدْ جَاءَ الْأَمْرُ» = …",
       "o": [
        "İş artık geldi",
        "İş gelmeyecek",
        "İş gelebilir mi?"
       ],
       "a": 0
      },
      {
       "q": "«قَدْ تَتَحَمَّسُونَ» = …",
       "o": [
        "Bazen heyecanlanırsınız",
        "Heyecanlandınız",
        "Heyecanlanmayın"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "كَانَتْ مَرْيَمُ فِي {كَفَالَةِ} زَكَرِيَّا. وَكُلَّمَا دَخَلَ عَلَيْهَا الْمِحْرَابَ وَجَدَ عِنْدَهَا {رِزْقًا}. فَقَالَ: يَا مَرْيَمُ أَنَّى لَكِ {هٰذَا}؟ قَالَتْ: هُوَ مِنْ عِنْدِ {اللهِ}. فَدَعَا زَكَرِيَّا: رَبِّ هَبْ لِي ذُرِّيَّةً {طَيِّبَةً}."
    },
    "think": {
     "q": "كَيْفَ أَلْهَمَ رِزْقُ مَرْيَمَ زَكَرِيَّا أَنْ يَدْعُوَ بِوَلَدٍ؟",
     "qt": "Meryem'in rızkı Zekeriyyâ'ya evlat için dua etmeyi nasıl ilham etti?",
     "model": "Zekeriyyâ, Meryem'in yanında mevsimi olmayan meyveleri görünce şöyle düşündü: Tabiatın olağan düzeninin dışında meyve verebilen Allah, olağan düzene göre çocuğu olamayacak yaşlı bir adama da evlat verebilir. Bir başkasına verilen nimet onun umudunu canlandırdı. Kur'an da «İşte orada Zekeriyyâ Rabbine dua etti» diyerek duanın tam o anda yapıldığını gösteriyor."
    },
    "retell": [
     "كَفَالَةُ زَكَرِيَّا",
     "الْفَوَاكِهُ",
     "الْمِحْرَابُ",
     "أَنَّى لَكِ هٰذَا",
     "انْتَعَشَ الْأَمَلُ",
     "ذُرِّيَّةً طَيِّبَةً"
    ],
    "quran": [
     {
      "ar": "فَتَقَبَّلَهَا رَبُّهَا بِقَبُولٍ حَسَنٍ وَأَنْبَتَهَا نَبَاتًا حَسَنًا وَكَفَّلَهَا زَكَرِيَّا ۖ كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا الْمِحْرَابَ وَجَدَ عِنْدَهَا رِزْقًا ۖ قَالَ يَا مَرْيَمُ أَنَّىٰ لَكِ هَٰذَا ۖ قَالَتْ هُوَ مِنْ عِنْدِ اللَّهِ ۖ إِنَّ اللَّهَ يَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ",
      "ref": "Âl-i İmrân 3:37",
      "tr": "Rabbi onu güzel bir kabulle kabul etti, onu güzel bir şekilde yetiştirdi ve Zekeriyyâ'yı onun bakımıyla görevlendirdi. Zekeriyyâ onun yanına mihraba her girdiğinde yanında bir rızık bulurdu. Ey Meryem! Bu sana nereden geliyor, derdi. O da: Bu Allah katındandır; Allah dilediğine hesapsız rızık verir, derdi.",
      "inText": "«فَتَقَبَّلَهَا رَبُّهَا بِقَبُولٍ حَسَنٍ …»"
     },
     {
      "ar": "هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُ ۖ قَالَ رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ",
      "ref": "Âl-i İmrân 3:38",
      "tr": "İşte orada Zekeriyyâ Rabbine dua etti: Rabbim! Bana katından temiz bir nesil bağışla; şüphesiz sen duayı işitensin.",
      "inText": "«هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 4,
     "title_ar": "عِنَايَةُ اللهِ بِالْفَتَاةِ الصَّالِحَةِ",
     "title_tr": "Allah'ın salih kıza ilgisi",
     "s": [
      [
       "وَكَانَتْ فِي كَفَالَةِ سَيِّدِنَا زَكَرِيَّا لِمَكَانَتِهَا مِنْهُ، وَفِي رِعَايَةِ اللهِ تَعَالَى.",
       "Meryem, ona yakınlığı sebebiyle efendimiz Zekeriyyâ'nın himayesinde ve Allah Teâlâ'nın gözetimindeydi."
      ],
      [
       "فَكَانَ اللهُ يُكْرِمُهَا بِالْأَثْمَارِ وَالْفَوَاكِهِ فِي غَيْرِ أَوَانِهَا وَفِي غَيْرِ مَكَانِهَا، تَأْكُلُ مِنْهَا مَا تَشَاءُ وَتَهَبُ مِنْهَا مَا تَشَاءُ:",
       "Allah ona mevsimi olmayan zamanlarda ve yetişmediği yerlerde meyveler ikram ediyordu; o da bunlardan dilediğini yiyor, dilediğini başkalarına veriyordu:"
      ],
      [
       "«فَتَقَبَّلَهَا رَبُّهَا بِقَبُولٍ حَسَنٍ وَأَنْبَتَهَا نَبَاتًا حَسَنًا وَكَفَّلَهَا زَكَرِيَّا كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا الْمِحْرَابَ وَجَدَ عِنْدَهَا رِزْقًا قَالَ يَا مَرْيَمُ أَنَّى لَكِ هٰذَا قَالَتْ هُوَ مِنْ عِنْدِ اللهِ إِنَّ اللهَ يَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ».",
       "«Rabbi onu güzel bir kabulle kabul etti, onu güzel bir şekilde yetiştirdi ve Zekeriyyâ'yı onun bakımıyla görevlendirdi. Zekeriyyâ onun yanına mihraba her girdiğinde yanında bir rızık bulurdu. Ey Meryem! Bu sana nereden geliyor, derdi. O da: Bu Allah katındandır; Allah dilediğine hesapsız rızık verir, derdi.»"
      ]
     ]
    },
    {
     "n": 5,
     "title_ar": "إِلْهَامًا مِنَ الرَّبِّ الرَّحِيمِ",
     "title_tr": "Merhametli Rabden bir ilham",
     "s": [
      [
       "وَأَلْهَمَ اللهُ زَكَرِيَّا - وَهُوَ مِنْ بَنِي الْأَنْبِيَاءِ، وَمِنَ الْعُقَلَاءِ الْأَذْكِيَاءِ - أَنَّ الَّذِي يَقْدِرُ عَلَى أَنْ يُكْرِمَ فَتَاةً صَالِحَةً، أَخْلَصَتْ أُمُّهَا فِي النَّذْرِ بِهَا وَالدُّعَاءِ لَهَا، وَأَخْلَصَتْ هِيَ فِي الطَّاعَةِ وَالْعِبَادَةِ، بِفَوَاكِهَ سَابِقَةٍ لِزَمَانِهَا أَوْ مُتَأَخِّرَةٍ عَنْ أَوَانِهَا، يَقْدِرُ أَنْ يَهَبَ شَيْخًا قَدْ طَعَنَ فِي السِّنِّ وَعَلَاهُ الشَّيْبُ، وَأَثَّرَ فِيهِ الْوَهْنُ.",
       "Allah, peygamber soyundan gelen, akıllı ve zeki biri olan Zekeriyyâ'ya şunu ilham etti: Annesi onu adarken ve ona dua ederken ihlaslı davranan, kendisi de itaatte ve ibadette ihlaslı olan salih bir kıza, mevsiminden önce ya da sonra meyveler ikram edebilen Allah, yaşı ilerlemiş, saçlarını aklar basmış ve zayıflığın iz bıraktığı bir ihtiyara da (evlat) bağışlayabilir."
      ],
      [
       "وَلِذٰلِكَ قَدِ انْقَطَعَ مِنْهُ الرَّجَاءُ لِعُلُوِّ السِّنِّ وَعُقْمِ الزَّوْجِ، وَجَرَتِ الْعَادَةُ أَنْ لَا يُولَدَ لِرَجُلٍ فِي هٰذِهِ الْحَالِ.",
       "Bu yüzden ileri yaşı ve eşinin kısırlığı sebebiyle ondan ümit kesilmişti; böyle bir durumdaki adamın çocuğunun olmaması da olağan bir şeydi."
      ],
      [
       "فَجَاشَتْ نَفْسُهُ، وَعَلَتْ هِمَّتُهُ، وَانْتَعَشَ الْأَمَلُ، وَقَوِيَتِ الثِّقَةُ بِالرَّبِّ.",
       "İçi coştu, azmi yükseldi, umudu canlandı ve Rabbine güveni güçlendi."
      ],
      [
       "فَفَاضَ لِسَانُهُ بِدُعَاءٍ أَمَّنَتْ عَلَيْهِ الْمَلَائِكَةُ، وَتَحَرَّكَتْ بِهِ رَحْمَةُ اللهِ، وَكَانَ كُلُّهُ إِلْهَامًا مِنَ الرَّبِّ الرَّحِيمِ، وَتَقْدِيرًا مِنَ الْعَزِيزِ الْعَلِيمِ.",
       "Dilinden, meleklerin «âmin» dediği ve Allah'ın rahmetini harekete geçiren bir dua döküldü. Bütün bunlar merhametli Rabden bir ilham, mutlak güç sahibi ve her şeyi bilen Allah'tan bir takdirdi."
      ],
      [
       "«هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُ قَالَ رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ».",
       "«İşte orada Zekeriyyâ Rabbine dua etti: Rabbim! Bana katından temiz bir nesil bağışla; şüphesiz sen duayı işitensin.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 4,
   "emoji": "📗",
   "title_ar": "يَحْيَى",
   "title_tr": "Yahyâ",
   "pre": {
    "predict": {
     "prompt_tr": "Allah Zekeriyyâ'ya bir oğul müjdeledi. Zekeriyyâ bunun ne zaman olacağını bilmek için bir işaret istedi. Sence işaret neydi?",
     "options": [
      [
       "أَلَّا يُكَلِّمَ النَّاسَ ثَلَاثَةَ أَيَّامٍ إِلَّا رَمْزًا",
       "Üç gün insanlarla işaret dışında konuşamaması"
      ],
      [
       "أَنْ يَنْزِلَ الْمَطَرُ",
       "Yağmur yağması"
      ],
      [
       "أَنْ يَرَى نُورًا فِي السَّمَاءِ",
       "Gökte bir ışık görmesi"
      ]
     ]
    },
    "vocab": [
     [
      "بِشَارَةٌ",
      "müjde",
      "📣"
     ],
     [
      "آيَةٌ / أَمَارَةٌ",
      "işaret",
      "🔔"
     ],
     [
      "رَمْزًا",
      "işaretle",
      "🤟"
     ],
     [
      "أَبْكَمُ",
      "dilsiz",
      "🤐"
     ],
     [
      "قُرَّةُ عَيْنٍ",
      "göz aydınlığı",
      "😊"
     ],
     [
      "أَقْرَانٌ",
      "akranlar",
      "👦"
     ]
    ]
   },
   "stop": {
    "section": 8,
    "after": 0,
    "prompt_tr": "Yahyâ doğdu; anne babasının göz aydınlığı ve babasının halefi oldu. Sence küçükken nasıl bir çocuktu?",
    "options": [
     [
      "أَقْبَلَ عَلَى الْعِلْمِ وَهُوَ غُلَامٌ",
      "Daha çocukken ilme yöneldi"
     ],
     [
      "كَانَ يُحِبُّ اللَّعِبَ فَقَطْ",
      "Yalnızca oyunu severdi"
     ],
     [
      "كَانَ كَسْلَانَ",
      "Tembeldi"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "تَوَجَّهَتِ الْبِشَارَةُ إِلَى زَكَرِيَّا.",
     "طَلَبَ زَكَرِيَّا آيَةً.",
     "لَمْ يُكَلِّمِ النَّاسَ ثَلَاثَةَ أَيَّامٍ.",
     "وُلِدَ يَحْيَى.",
     "أَقْبَلَ يَحْيَى عَلَى الْعِلْمِ وَهُوَ غُلَامٌ.",
     "قَالَ اللهُ: يَا يَحْيَى خُذِ الْكِتَابَ بِقُوَّةٍ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا طَلَبَ زَكَرِيَّا آيَةً؟",
      "qt": "Zekeriyyâ neden bir işaret istedi?",
      "o": [
       "لِأَنَّ الْإِنْسَانَ خُلِقَ مِنْ عَجَلٍ",
       "لِأَنَّهُ لَمْ يُؤْمِنْ",
       "لِأَنَّ النَّاسَ طَلَبُوا ذٰلِكَ"
      ],
      "ot": [
       "Çünkü insan aceleci yaratılmıştır",
       "Çünkü inanmadı",
       "Çünkü insanlar bunu istedi"
      ],
      "a": 0,
      "ev": [
       "6.1"
      ]
     },
     {
      "q": "كَمْ يَوْمًا لَمْ يُكَلِّمْ زَكَرِيَّا النَّاسَ؟",
      "qt": "Zekeriyyâ kaç gün insanlarla konuşamadı?",
      "o": [
       "ثَلَاثَةَ أَيَّامٍ",
       "سَبْعَةَ أَيَّامٍ",
       "يَوْمًا وَاحِدًا"
      ],
      "ot": [
       "Üç gün",
       "Yedi gün",
       "Bir gün"
      ],
      "a": 0,
      "ev": [
       "6.2"
      ]
     },
     {
      "q": "مَاذَا تُعَلِّمُنَا آيَةُ السُّكُوتِ عَنْ قُدْرَةِ اللهِ؟",
      "qt": "Susma işareti bize Allah'ın kudreti hakkında ne öğretiyor?",
      "o": [
       "الَّذِي يَسْتَطِيعُ أَنْ يَمْنَعَ يَسْتَطِيعُ أَنْ يُعْطِيَ",
       "أَنَّ الْكَلَامَ لَا فَائِدَةَ لَهُ",
       "أَنَّ زَكَرِيَّا كَانَ مَرِيضًا"
      ],
      "ot": [
       "Alıkoyabilen, verebilir de",
       "Konuşmanın faydası yoktur",
       "Zekeriyyâ hastaydı"
      ],
      "a": 0,
      "ev": [
       "6.4"
      ]
     },
     {
      "q": "مَاذَا كَانَ يَحْيَى لِأَبَوَيْهِ؟",
      "qt": "Yahyâ anne babası için neydi?",
      "o": [
       "قُرَّةَ عَيْنٍ",
       "حِمْلًا ثَقِيلًا",
       "غَرِيبًا"
      ],
      "ot": [
       "Göz aydınlığı",
       "Ağır bir yük",
       "Bir yabancı"
      ],
      "a": 0,
      "ev": [
       "8.0"
      ]
     },
     {
      "q": "بِمَ يَمْتَازُ يَحْيَى عَنْ أَقْرَانِهِ؟",
      "qt": "Yahyâ akranlarından neyle ayrılıyordu?",
      "o": [
       "بِالْحُبِّ وَالْحَنَانِ وَالْبِرِّ بِالْأَبَوَيْنِ",
       "بِالْقُوَّةِ وَالْغِنَى",
       "بِكَثْرَةِ اللَّعِبِ"
      ],
      "ot": [
       "Sevgi, şefkat ve anne babaya iyilikle",
       "Güç ve zenginlikle",
       "Çok oyun oynamakla"
      ],
      "a": 0,
      "ev": [
       "8.2"
      ]
     }
    ],
    "focus": {
     "title": "Edilgen muzari: يُولَدُ، يُشَارُ، يُبْعَثُ",
     "explain": "Muzari fiil edilgen (meçhul) yapılırken ilk harf <b>ـُ</b>, sondan bir önceki harf <b>ـَ</b> olur: <span class='ar-inline'>يَلِدُ → يُولَدُ</span> (doğar, doğurulur), <span class='ar-inline'>يَبْعَثُ → يُبْعَثُ</span> (diriltilir), <span class='ar-inline'>يُشِيرُ → يُشَارُ</span> (işaret edilir). Mazi edilgen ise <span class='ar-inline'>وُلِدَ</span>, <span class='ar-inline'>خُلِقَ</span>, <span class='ar-inline'>ابْتُلِيَ</span> biçimindedir.",
     "examples": [
      "وَيُولَدُ يَحْيَى فَيَكُونُ قُرَّةَ عَيْنٍ لِأَبَوَيْهِ",
      "يُشَارُ فِي ذٰلِكَ إِلَيْهِ بِالْبَنَانِ",
      "«وَسَلَامٌ عَلَيْهِ يَوْمَ وُلِدَ وَيَوْمَ يَمُوتُ وَيَوْمَ يُبْعَثُ حَيًّا»"
     ],
     "items": [
      {
       "q": "وَ____ يَحْيَى فَيَكُونُ قُرَّةَ عَيْنٍ لِأَبَوَيْهِ.",
       "o": [
        "يُولَدُ",
        "يَلِدُ",
        "وَلَدَ"
       ],
       "a": 0
      },
      {
       "q": "«وَيَوْمَ ____ حَيًّا»",
       "o": [
        "يُبْعَثُ",
        "يَبْعَثُ",
        "بَعَثَ"
       ],
       "a": 0
      },
      {
       "q": "____ فِي ذٰلِكَ إِلَيْهِ بِالْبَنَانِ.",
       "o": [
        "يُشَارُ",
        "يُشِيرُ",
        "أَشَارَ"
       ],
       "a": 0
      },
      {
       "q": "«وَخُلِقَ الْإِنْسَانُ مِنْ عَجَلٍ» — خُلِقَ = …",
       "o": [
        "yaratıldı",
        "yarattı",
        "yaratır"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "طَلَبَ زَكَرِيَّا {آيَةً}، فَكَانَتْ آيَتُهُ أَلَّا يُكَلِّمَ النَّاسَ ثَلَاثَةَ أَيَّامٍ إِلَّا {رَمْزًا}. ثُمَّ وُلِدَ {يَحْيَى}، فَكَانَ قُرَّةَ {عَيْنٍ} لِأَبَوَيْهِ. وَقَالَ اللهُ: يَا يَحْيَى خُذِ {الْكِتَابَ} بِقُوَّةٍ."
    },
    "think": {
     "q": "لِمَاذَا جَعَلَ اللهُ آيَةَ زَكَرِيَّا أَنْ يَسْكُتَ لِسَانُهُ؟",
     "qt": "Allah Zekeriyyâ'nın işaretini neden dilinin susması yaptı?",
     "model": "Zekeriyyâ yaşlı bir adamın ve kısır bir kadının çocuğu olmasının nasıl mümkün olacağını merak ediyordu. Allah ona kendi bedeninde bir delil gösterdi: Sağlam ve konuşan dili, hiçbir hastalık olmadan üç gün sustu. Yazara göre bir organın özelliğini alıp geri verebilen Allah, kısır bir bedene de doğurma özelliğini verebilir: «Alıkoymaya gücü yeten vermeye de güç yetirir.» Susma günleri aynı zamanda zikir ve tesbihle geçecek bir şükür zamanıydı."
    },
    "personal": {
     "q": "كَانَ يَحْيَى «بَرًّا بِوَالِدَيْهِ». كَيْفَ تَبَرُّ وَالِدَيْكَ؟",
     "qt": "Yahyâ «anne babasına iyilik eden» biriydi. Sen anne babana nasıl iyilik edersin? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "أُسَاعِدُ أُمِّي فِي …",
      "أَزُورُ وَالِدَيَّ …",
      "أَسْمَعُ كَلَامَ أَبِي وَ …"
     ]
    },
    "retell": [
     "بِشَارَةٌ",
     "آيَةٌ",
     "ثَلَاثَةُ أَيَّامٍ",
     "وُلِدَ يَحْيَى",
     "قُرَّةُ عَيْنٍ",
     "خُذِ الْكِتَابَ بِقُوَّةٍ"
    ],
    "quran": [
     {
      "ar": "قَالَ رَبِّ اجْعَلْ لِي آيَةً ۖ قَالَ آيَتُكَ أَلَّا تُكَلِّمَ النَّاسَ ثَلَاثَةَ أَيَّامٍ إِلَّا رَمْزًا ۗ وَاذْكُرْ رَبَّكَ كَثِيرًا وَسَبِّحْ بِالْعَشِيِّ وَالْإِبْكَارِ",
      "ref": "Âl-i İmrân 3:41",
      "tr": "Dedi ki: Rabbim! Bana bir işaret ver. Allah dedi: Senin işaretin, insanlarla üç gün işaretle olmadıkça konuşamamandır. Rabbini çok an; akşam ve sabah O'nu tesbih et.",
      "inText": "«… آيَتُكَ أَلَّا تُكَلِّمَ النَّاسَ ثَلَاثَةَ أَيَّامٍ إِلَّا رَمْزًا …»"
     },
     {
      "ar": "وَزَكَرِيَّا إِذْ نَادَىٰ رَبَّهُ رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ ۝ فَاسْتَجَبْنَا لَهُ وَوَهَبْنَا لَهُ يَحْيَىٰ وَأَصْلَحْنَا لَهُ زَوْجَهُ ۚ إِنَّهُمْ كَانُوا يُسَارِعُونَ فِي الْخَيْرَاتِ وَيَدْعُونَنَا رَغَبًا وَرَهَبًا ۖ وَكَانُوا لَنَا خَاشِعِينَ",
      "ref": "Enbiyâ 21:89–90",
      "tr": "Zekeriyyâ'yı da (an). Hani o Rabbine: Rabbim! Beni yalnız bırakma; sen vârislerin en hayırlısısın, diye seslenmişti. Biz de duasını kabul ettik, ona Yahyâ'yı bağışladık ve eşini (doğurmaya) elverişli kıldık. Onlar hayırlı işlerde yarışırlar, umarak ve korkarak bize dua ederlerdi; bize karşı derin saygı içindeydiler.",
      "inText": "«وَزَكَرِيَّا إِذْ نَادَى رَبَّهُ …»"
     },
     {
      "ar": "يَا يَحْيَىٰ خُذِ الْكِتَابَ بِقُوَّةٍ ۖ وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا ۝ وَحَنَانًا مِنْ لَدُنَّا وَزَكَاةً ۖ وَكَانَ تَقِيًّا ۝ وَبَرًّا بِوَالِدَيْهِ وَلَمْ يَكُنْ جَبَّارًا عَصِيًّا ۝ وَسَلَامٌ عَلَيْهِ يَوْمَ وُلِدَ وَيَوْمَ يَمُوتُ وَيَوْمَ يُبْعَثُ حَيًّا",
      "ref": "Meryem 19:12–15",
      "tr": "Ey Yahyâ! Kitab'a sıkıca sarıl. Ona daha çocukken hikmet verdik; katımızdan bir şefkat ve temizlik de (verdik). O takvâ sahibiydi; anne babasına iyilik ederdi; zorba ve isyankâr değildi. Doğduğu gün, öleceği gün ve diri olarak kaldırılacağı gün ona selam olsun.",
      "inText": "«يَا يَحْيَى خُذِ الْكِتَابَ بِقُوَّةٍ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 6,
     "title_ar": "بِشَارَةٌ بِوَلَدٍ",
     "title_tr": "Bir evlat müjdesi",
     "s": [
      [
       "وَأَجَابَ اللهُ دُعَاءَهُ، وَتَوَجَّهَتْ إِلَيْهِ الْبِشَارَةُ بِوَلَدٍ صَالِحٍ قَرِيبِ زَمَانِ وِلَادَتِهِ.",
       "Allah onun duasını kabul etti; doğumu yakın olan salih bir evladın müjdesi ona geldi."
      ],
      [
       "وَخُلِقَ الْإِنْسَانُ مِنْ عَجَلٍ، فَطَلَبَ أَمَارَةً عَلَى إِمْكَانِ هٰذَا الْحَدَثِ الْكَبِيرِ وَقُرْبِ ظُهُورِهِ.",
       "İnsan aceleci yaratılmıştır; o da bu büyük olayın mümkün olduğuna ve yakında gerçekleşeceğine dair bir işaret istedi."
      ],
      [
       "فَقَالَ: «رَبِّ اجْعَلْ لِي آيَةً قَالَ آيَتُكَ أَلَّا تُكَلِّمَ النَّاسَ ثَلَاثَةَ أَيَّامٍ إِلَّا رَمْزًا وَاذْكُرْ رَبَّكَ كَثِيرًا وَسَبِّحْ بِالْعَشِيِّ وَالْإِبْكَارِ».",
       "Dedi ki: «Rabbim! Bana bir işaret ver. Allah dedi: Senin işaretin, insanlarla üç gün işaretle olmadıkça konuşamamandır. Rabbini çok an; akşam ve sabah O'nu tesbih et.»"
      ],
      [
       "فَالْقَادِرُ الَّذِي يَسْتَطِيعُ أَنْ يَسْلُبَ خَوَاصَّ الْأَشْيَاءِ، فَيَجْعَلَ اللِّسَانَ النَّاطِقَ أَبْكَمَ، لَا يَسْتَطِيعُ أَنْ يَتَحَرَّكَ بِكَلِمَةٍ، يَسْتَطِيعُ أَنْ يُودِعَ مَا شَاءَ مِنْ مَخْلُوقَاتِهِ مَا شَاءَ مِنْ خَوَاصَّ.",
       "Eşyanın özelliklerini elinden alabilen, konuşan dili tek bir kelimeyle bile kıpırdayamayacak kadar dilsiz yapabilen kudret sahibi, yarattıklarından dilediğine dilediği özellikleri de verebilir."
      ],
      [
       "وَالْقَوِيُّ الَّذِي يَسْتَطِيعُ أَنْ يَمْنَعَ يَسْتَطِيعُ أَنْ يُعْطِيَ.",
       "Alıkoymaya gücü yeten güçlü (Allah), vermeye de güç yetirir."
      ]
     ]
    },
    {
     "n": 7,
     "title_ar": "آيَاتُ اللهِ وَقُدْرَتُهُ",
     "title_tr": "Allah'ın delilleri ve kudreti",
     "s": [
      [
       "وَظَهَرَتْ آيَاتُ اللهِ وَقُدْرَتُهُ فِي جِسْمِهِ ثُمَّ فِي بَيْتِهِ وَأُسْرَتِهِ، وُلِدَ يَحْيَى، فَقَرَّتْ بِهِ عَيْنُهُ وَاشْتَدَّ بِهِ أَزْرُهُ، وَعَاشَتْ بِهِ دَعْوَتُهُ.",
       "Allah'ın delilleri ve kudreti önce onun bedeninde, sonra evinde ve ailesinde ortaya çıktı: Yahyâ doğdu; onunla gözü aydın oldu, onunla gücü arttı, daveti onunla yaşadı."
      ],
      [
       "وَاسْمَعُوا الْقُرْآنَ يَحْكِي هٰذِهِ الْقِصَّةَ تَارَةً فِي إِيجَازٍ وَطَوْرًا فِي تَفْصِيلٍ، فَيَقُولُ:",
       "Kur'an'ı dinleyin; bu kıssayı bazen kısaca, bazen ayrıntılı olarak anlatır ve şöyle der:"
      ],
      [
       "«وَزَكَرِيَّا إِذْ نَادَى رَبَّهُ رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ * فَاسْتَجَبْنَا لَهُ وَوَهَبْنَا لَهُ يَحْيَى وَأَصْلَحْنَا لَهُ زَوْجَهُ إِنَّهُمْ كَانُوا يُسَارِعُونَ فِي الْخَيْرَاتِ وَيَدْعُونَنَا رَغَبًا وَرَهَبًا وَكَانُوا لَنَا خَاشِعِينَ».",
       "«Zekeriyyâ'yı da (an). Hani o Rabbine: Rabbim! Beni yalnız bırakma; sen vârislerin en hayırlısısın, diye seslenmişti. Biz de onun duasını kabul ettik, ona Yahyâ'yı bağışladık ve eşini (doğurmaya) elverişli kıldık. Onlar hayırlı işlerde yarışırlar, umarak ve korkarak bize dua ederlerdi; bize karşı derin saygı içindeydiler.»"
      ]
     ]
    },
    {
     "n": 8,
     "title_ar": "يَحْيَى يَضْطَلِعُ بِأَعْبَاءِ الدَّعْوَةِ",
     "title_tr": "Yahyâ davetin yükünü üstleniyor",
     "s": [
      [
       "وَيُولَدُ يَحْيَى فَيَكُونُ قُرَّةَ عَيْنٍ لِأَبَوَيْهِ، وَخَلِيفَةً لِوَالِدِهِ الْعَظِيمِ، فَيَضْطَلِعُ بِأَعْبَاءِ الدَّعْوَةِ إِلَى اللهِ وَالدِّينِ الْخَالِصِ.",
       "Yahyâ doğar; anne babasının göz aydınlığı, yüce babasının halefi olur ve Allah'a ve halis dine davetin yükünü üstlenir."
      ],
      [
       "وَتَظْهَرُ فِيهِ آثَارُ النَّجَابَةِ مُنْذُ الصِّغَرِ، فَيُقْبِلُ عَلَى الْعِلْمِ وَهُوَ غُلَامٌ، وَيَتَجَلَّى فِيهِ الصَّلَاحُ وَالتَّقْوَى وَهُوَ شَابٌّ.",
       "Küçüklüğünden itibaren onda zekâ ve asaletin izleri görülür; daha çocukken ilme yönelir, gençken de onda iyilik ve takvâ ortaya çıkar."
      ],
      [
       "وَيَمْتَازُ عَنْ أَقْرَانِهِ فِي الْحُبِّ وَالْحَنَانِ، وَالْبِرِّ بِالْأَبَوَيْنِ، يُشَارُ فِي ذٰلِكَ إِلَيْهِ بِالْبَنَانِ، يَقُولُ اللهُ تَعَالَى مُخَاطِبًا إِيَّاهُ:",
       "Sevgide, şefkatte ve anne babaya iyilikte akranlarından ayrılır; bu konuda parmakla gösterilir. Allah Teâlâ ona hitap ederek buyurur:"
      ],
      [
       "«يَا يَحْيَى خُذِ الْكِتَابَ بِقُوَّةٍ وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا * وَحَنَانًا مِنْ لَدُنَّا وَزَكَاةً وَكَانَ تَقِيًّا * وَبَرًّا بِوَالِدَيْهِ وَلَمْ يَكُنْ جَبَّارًا عَصِيًّا * وَسَلَامٌ عَلَيْهِ يَوْمَ وُلِدَ وَيَوْمَ يَمُوتُ وَيَوْمَ يُبْعَثُ حَيًّا».",
       "«Ey Yahyâ! Kitab'a sıkıca sarıl. Ona daha çocukken hikmet verdik. Katımızdan bir şefkat ve temizlik de (verdik). O takvâ sahibiydi; anne babasına iyilik ederdi; zorba ve isyankâr değildi. Doğduğu gün, öleceği gün ve diri olarak kaldırılacağı gün ona selam olsun.»"
      ]
     ]
    }
   ]
  }
 ]
});
