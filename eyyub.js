/* Kasasu'n-Nebiyyîn — Hz. Eyyûb ve Hz. Yûnus'un Kıssası (s. 323–330)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "eyyub",
 "title_ar": "قِصَّةُ أَيُّوبَ وَيُونُسَ عَلَيْهِمَا السَّلَامُ",
 "title_tr": "Hz. Eyyûb ve Hz. Yûnus'un Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 323–330",
 "overrides": {
  "وذا": "ذي"
 },
 "voverrides": {
  "النُّونِ": "نون_حوت"
 },
 "units": [
  {
   "id": 1,
   "emoji": "🌿",
   "title_ar": "صَبْرُ أَيُّوبَ",
   "title_tr": "Eyyûb'un sabrı",
   "pre": {
    "predict": {
     "prompt_tr": "Eyyûb'un çok malı, hayvanı ve çocukları vardı. Sonra hepsini kaybetti ve ağır bir hastalığa yakalandı. Sence ne yaptı?",
     "options": [
      [
       "صَبَرَ وَشَكَرَ وَلَمْ يَشْكُ",
       "Sabretti, şükretti ve şikâyet etmedi"
      ],
      [
       "غَضِبَ وَتَرَكَ الدُّعَاءَ",
       "Öfkelenip duayı bıraktı"
      ],
      [
       "هَرَبَ مِنْ بَلَدِهِ",
       "Memleketinden kaçtı"
      ]
     ]
    },
    "vocab": [
     [
      "ابْتُلِيَ",
      "imtihan edildi, belâya uğradı",
      "⚖️"
     ],
     [
      "الْأَنْعَامُ",
      "sürüler (deve, sığır, koyun)",
      "🐄"
     ],
     [
      "سَلِيمٌ",
      "sağlam",
      "💪"
     ],
     [
      "يَحْنُو عَلَى",
      "-e şefkat gösterir",
      "🤲"
     ],
     [
      "يَتَذَمَّرُ",
      "sızlanır, söylenir",
      "😤"
     ],
     [
      "الضُّرُّ",
      "dert, sıkıntı",
      "🤕"
     ]
    ]
   },
   "stop": {
    "section": 3,
    "after": 0,
    "prompt_tr": "Uzun yıllardan sonra Allah Eyyûb'a kabul edilecek bir dua ilham etti. Sence duadan sonra ne oldu?",
    "options": [
     [
      "عَافَاهُ اللهُ وَرَدَّ عَلَيْهِ مَالَهُ وَأَهْلَهُ",
      "Allah ona sağlık verdi, malını ve ailesini geri verdi"
     ],
     [
      "بَقِيَ مَرِيضًا حَتَّى مَاتَ",
      "Ölünceye kadar hasta kaldı"
     ],
     [
      "سَافَرَ إِلَى بَلَدٍ آخَرَ",
      "Başka bir ülkeye gitti"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "كَانَ لِأَيُّوبَ مَالٌ كَثِيرٌ وَأَوْلَادٌ.",
     "ابْتُلِيَ فِي مَالِهِ وَأَوْلَادِهِ.",
     "ابْتُلِيَ فِي جَسَدِهِ.",
     "صَبَرَ سِنِينَ طِوَالًا.",
     "دَعَا رَبَّهُ: أَنِّي مَسَّنِيَ الضُّرُّ.",
     "عَافَاهُ اللهُ وَرَدَّ عَلَيْهِ مَالَهُ."
    ],
    "questions": [
     {
      "q": "مَا الَّذِي بَقِيَ سَلِيمًا مِنْ جَسَدِ أَيُّوبَ؟",
      "qt": "Eyyûb'un bedeninden sağlam kalan neydi?",
      "o": [
       "قَلْبُهُ وَلِسَانُهُ",
       "يَدَاهُ وَرِجْلَاهُ",
       "عَيْنَاهُ"
      ],
      "ot": [
       "Kalbi ve dili",
       "Elleri ve ayakları",
       "Gözleri"
      ],
      "a": 0,
      "ev": [
       "1.2"
      ]
     },
     {
      "q": "مَنْ بَقِيَ مَعَ أَيُّوبَ يَحْنُو عَلَيْهِ؟",
      "qt": "Eyyûb'un yanında ona şefkat gösteren kim kaldı?",
      "o": [
       "زَوْجَتُهُ",
       "أَوْلَادُهُ",
       "أَصْدِقَاؤُهُ"
      ],
      "ot": [
       "Karısı",
       "Çocukları",
       "Arkadaşları"
      ],
      "a": 0,
      "ev": [
       "1.3"
      ]
     },
     {
      "q": "كَيْفَ كَانَ أَيُّوبُ رَغْمَ الْبَلَاءِ؟",
      "qt": "Eyyûb belâya rağmen nasıldı?",
      "o": [
       "صَابِرًا شَاكِرًا",
       "غَضْبَانَ حَزِينًا",
       "يَشْكُو لِكُلِّ النَّاسِ"
      ],
      "ot": [
       "Sabırlı ve şükreden",
       "Öfkeli ve üzgün",
       "Herkese şikâyet eden"
      ],
      "a": 0,
      "ev": [
       "2.0"
      ]
     },
     {
      "q": "مَاذَا قَالَ أَيُّوبُ فِي دُعَائِهِ؟",
      "qt": "Eyyûb duasında ne dedi?",
      "o": [
       "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ",
       "لِمَاذَا ابْتَلَيْتَنِي؟",
       "أَعْطِنِي مَالًا كَثِيرًا"
      ],
      "ot": [
       "Bana dert dokundu; sen merhametlilerin en merhametlisisin",
       "Beni neden imtihan ettin?",
       "Bana çok mal ver"
      ],
      "a": 0,
      "ev": [
       "3.2"
      ]
     },
     {
      "q": "مَاذَا آتَى اللهُ أَيُّوبَ بَعْدَ الدُّعَاءِ؟",
      "qt": "Allah duadan sonra Eyyûb'a ne verdi?",
      "o": [
       "أَهْلَهُ وَمِثْلَهُمْ مَعَهُمْ",
       "قَصْرًا عَظِيمًا",
       "مُلْكًا وَاسِعًا"
      ],
      "ot": [
       "Ailesini ve onlarla birlikte bir mislini",
       "Büyük bir saray",
       "Geniş bir mülk"
      ],
      "a": 0,
      "ev": [
       "3.2"
      ]
     }
    ],
    "focus": {
     "title": "سِوَى: «-den başka, … dışında»",
     "explain": "<b>سِوَى</b> bir istisna bildirir ve kendinden sonraki isim tamlayan olarak (mecrur) gelir: <span class='ar-inline'>سِوَى قَلْبِهِ</span> (kalbi dışında), <span class='ar-inline'>سِوَى زَوْجَتِهِ</span> (karısından başka). Çoğunlukla olumsuz bir cümleden sonra gelir: <span class='ar-inline'>لَمْ يَبْقَ أَحَدٌ … سِوَى زَوْجَتِهِ</span>. Anlamca <span class='ar-inline'>إِلَّا</span>'ya yakındır: <span class='ar-inline'>لَا مَلْجَأَ مِنَ اللهِ إِلَّا إِلَيْهِ</span>.",
     "examples": [
      "فَلَمْ يَبْقَ مِنْهُ سَلِيمٌ سِوَى قَلْبِهِ وَلِسَانِهِ",
      "وَلَمْ يَبْقَ أَحَدٌ مِنَ النَّاسِ يَحْنُو عَلَيْهِ سِوَى زَوْجَتِهِ",
      "وَأَنْ لَا مَلْجَأَ مِنَ اللهِ إِلَّا إِلَيْهِ"
     ],
     "items": [
      {
       "q": "فَلَمْ يَبْقَ مِنْهُ سَلِيمٌ ____ قَلْبِهِ.",
       "o": [
        "سِوَى",
        "مَعَ",
        "بَعْدَ"
       ],
       "a": 0
      },
      {
       "q": "لَمْ يَبْقَ أَحَدٌ سِوَى ____.",
       "o": [
        "زَوْجَتِهِ",
        "زَوْجَتُهُ",
        "زَوْجَتَهُ"
       ],
       "a": 0
      },
      {
       "q": "لَا مَلْجَأَ مِنَ اللهِ ____ إِلَيْهِ.",
       "o": [
        "إِلَّا",
        "لٰكِنْ",
        "أَوْ"
       ],
       "a": 0
      },
      {
       "q": "«لَمْ يَحْضُرْ أَحَدٌ سِوَى أَخِي» = …",
       "o": [
        "Kardeşimden başka kimse gelmedi",
        "Kardeşim gelmedi",
        "Herkes kardeşimle geldi"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "كَانَ لِأَيُّوبَ مَالٌ كَثِيرٌ وَ{أَوْلَادٌ}. فَابْتُلِيَ فِي ذٰلِكَ كُلِّهِ، وَلَمْ يَبْقَ مِنْهُ سَلِيمٌ سِوَى {قَلْبِهِ} وَلِسَانِهِ. وَكَانَ {صَابِرًا} شَاكِرًا. ثُمَّ دَعَا رَبَّهُ فَ{عَافَاهُ} اللهُ وَرَدَّ عَلَيْهِ {مَالَهُ}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ إِنَّ قِصَّةَ أَيُّوبَ «نَمَطٌ آخَرُ مِنَ الْقِصَصِ»؟",
     "qt": "Kitap neden Eyyûb'un kıssasının «başka türden bir kıssa» olduğunu söylüyor?",
     "model": "Önceki kıssalarda peygamberin karşısında onu yalanlayan bir kavim, zalim bir kral ya da bir düşman vardı. Eyyûb'un kıssasında ise düşman yok; imtihan hastalık, yoksulluk ve yalnızlık. Kıssa, iman eden birinin sıkıntı karşısında nasıl sabredeceğini ve Allah'ın sabredenlere sonunda nasıl kat kat karşılık verdiğini anlatıyor."
    },
    "personal": {
     "q": "كَانَ أَيُّوبُ صَابِرًا شَاكِرًا. مَتَى صَبَرْتَ عَلَى شَيْءٍ صَعْبٍ؟",
     "qt": "Eyyûb sabırlı ve şükredendi. Sen zor bir şeye ne zaman sabrettin? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "صَبَرْتُ لَمَّا …",
      "كُنْتُ مَرِيضًا فَـ …",
      "لَمْ أَشْكُ حِينَ …"
     ]
    },
    "retell": [
     "مَالٌ وَأَوْلَادٌ",
     "ابْتُلِيَ",
     "زَوْجَتُهُ",
     "صَابِرًا شَاكِرًا",
     "مَسَّنِيَ الضُّرُّ",
     "عَافَاهُ اللهُ"
    ],
    "quran": [
     {
      "ar": "وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ ۝ فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِنْ ضُرٍّ ۖ وَآتَيْنَاهُ أَهْلَهُ وَمِثْلَهُمْ مَعَهُمْ رَحْمَةً مِنْ عِنْدِنَا وَذِكْرَىٰ لِلْعَابِدِينَ",
      "ref": "Enbiyâ 21:83–84",
      "tr": "Eyyûb'u da (an). Hani o Rabbine: Bana bu dert dokundu; sen merhametlilerin en merhametlisisin, diye seslenmişti. Biz de duasını kabul ettik, ondaki derdi giderdik; katımızdan bir rahmet ve ibadet edenlere bir öğüt olarak ona ailesini ve onlarla birlikte bir mislini daha verdik.",
      "inText": "«وَأَيُّوبَ إِذْ نَادَى رَبَّهُ …»"
     },
     {
      "ar": "إِنَّا وَجَدْنَاهُ صَابِرًا ۚ نِعْمَ الْعَبْدُ ۖ إِنَّهُ أَوَّابٌ",
      "ref": "Sâd 38:44",
      "tr": "Biz onu sabırlı bulduk. O ne güzel kuldu! Şüphesiz o, Allah'a çokça yönelen biriydi.",
      "inText": "«وَكَانَ رَغْمَ كُلِّ ذٰلِكَ صَابِرًا شَاكِرًا»"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "قِصَّةُ أَيُّوبَ نَمَطٌ آخَرُ مِنَ الْقِصَصِ",
     "title_tr": "Eyyûb'un kıssası: başka türden bir kıssa",
     "s": [
      [
       "وَقِصَّةُ أَيُّوبَ فِي الْقُرْآنِ نَمَطٌ آخَرُ مِنَ الْقِصَصِ، وَمَظْهَرٌ آخَرُ مِنْ مَظَاهِرِ نِعَمِ اللهِ عَلَى عِبَادِهِ الْمُؤْمِنِينَ الصَّابِرِينَ الشَّاكِرِينَ، وَالْأَنْبِيَاءِ الْمَحْبُوبِينَ.",
       "Kur'an'daki Eyyûb kıssası başka türden bir kıssadır; Allah'ın sabreden, şükreden mümin kullarına ve sevgili peygamberlerine verdiği nimetlerin bir başka görünümüdür."
      ],
      [
       "فَقَدْ كَانَ لَهُ مِنَ الدَّوَابِّ وَالْأَنْعَامِ وَالْحَرْثِ شَيْءٌ كَثِيرٌ، وَأَوْلَادٌ مُرْضِيَةٌ.",
       "Onun pek çok binek hayvanı, sürüsü ve ekini, gönül hoşnut eden çocukları vardı."
      ],
      [
       "فَابْتُلِيَ فِي ذٰلِكَ كُلِّهِ، وَذَهَبَ عَنْهُ آخِرُهُ، ثُمَّ ابْتُلِيَ فِي جَسَدِهِ فَلَمْ يَبْقَ مِنْهُ سَلِيمٌ سِوَى قَلْبِهِ وَلِسَانِهِ، يَذْكُرُ بِهِمَا اللهَ عَزَّ وَجَلَّ.",
       "Bütün bunlarla imtihan edildi; hepsi sonuna kadar elinden gitti. Sonra bedeniyle imtihan edildi; kalbi ve dili dışında sağlam bir yeri kalmadı; onlarla da aziz ve celil olan Allah'ı anıyordu."
      ],
      [
       "وَأُفْرِدَ فِي نَاحِيَةٍ مِنَ الْبَلَدِ، وَلَمْ يَبْقَ أَحَدٌ مِنَ النَّاسِ يَحْنُو عَلَيْهِ سِوَى زَوْجَتِهِ، كَانَتْ تَقُومُ بِأَمْرِهِ.",
       "Şehrin bir köşesine tek başına bırakıldı; insanlardan ona şefkat gösteren, karısından başka kimse kalmadı. Onun bakımını karısı üstleniyordu."
      ],
      [
       "وَاحْتَاجَتْ أَيْضًا فَصَارَتْ تَخْدُمُ النَّاسَ مِنْ أَجْلِهِ.",
       "Sonunda o da muhtaç düştü ve onun için insanların hizmetinde çalışmaya başladı."
      ]
     ]
    },
    {
     "n": 2,
     "title_ar": "صَبْرُ أَيُّوبَ",
     "title_tr": "Eyyûb'un sabrı",
     "s": [
      [
       "وَكَانَ رَغْمَ كُلِّ ذٰلِكَ صَابِرًا شَاكِرًا، يَلْهَجُ لِسَانُهُ بِالذِّكْرِ وَالشُّكْرِ.",
       "Bütün bunlara rağmen sabırlı ve şükredendi; dili zikir ve şükürle dolup taşıyordu."
      ],
      [
       "لَا يَشْكُو وَلَا يَعْتِبُ وَلَا يَتَذَمَّرُ وَلَا يَغْضَبُ، وَدَامَ عَلَى ذٰلِكَ سِنِينَ طِوَالًا.",
       "Ne şikâyet ediyor, ne sitem ediyor, ne sızlanıyor, ne de öfkeleniyordu. Uzun yıllar bu hâl üzere devam etti."
      ]
     ]
    },
    {
     "n": 3,
     "title_ar": "مِحْنَتُهُ وَمِنْحَتُهُ",
     "title_tr": "Çilesi ve armağanı",
     "s": [
      [
       "وَلَمَّا تَمَّ مَا أَرَادَهُ اللهُ لَهُ مِنَ ابْتِلَاءٍ، وَمَا أَرَادَ بِهِ مِنْ تَكْمِيلٍ وَرَفْعِ دَرَجَاتٍ، وَالرِّضَا بِالْقَضَاءِ، أَلْهَمَهُ الدُّعَاءَ الْمُسْتَجَابَ الَّذِي تَجَلَّى فِيهِ عَجْزُهُ وَبُؤْسُهُ، وَأَنْ لَا مَلْجَأَ مِنَ اللهِ إِلَّا إِلَيْهِ، وَأَنَّهُ الْقَادِرُ عَلَى كُلِّ شَيْءٍ.",
       "Allah'ın onun için dilediği imtihan, olgunlaştırma, dereceleri yükseltme ve kadere rıza tamamlanınca, Allah ona kabul edilen duayı ilham etti. O duada Eyyûb'un âcizliği ve sıkıntısı, Allah'tan yine ancak O'na sığınılabileceği ve O'nun her şeye gücü yettiği ortaya çıkıyordu."
      ],
      [
       "وَعَافَاهُ اللهُ فِي بَدَنِهِ وَأَهْلِهِ، وَرَدَّ عَلَيْهِ مَالَهُ، وَبَارَكَ لَهُ فِي كُلِّ ذٰلِكَ، فَكَانَ أَضْعَافًا مُضَاعَفَةً، يَقُولُ اللهُ تَبَارَكَ وَتَعَالَى:",
       "Allah ona bedeninde ve ailesinde sağlık ve esenlik verdi, malını ona geri verdi ve bütün bunları onun için bereketlendirdi; hepsi kat kat arttı. Allah Tebâreke ve Teâlâ buyuruyor:"
      ],
      [
       "«وَأَيُّوبَ إِذْ نَادَى رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ * فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِنْ ضُرٍّ وَآتَيْنَاهُ أَهْلَهُ وَمِثْلَهُمْ مَعَهُمْ رَحْمَةً مِنْ عِنْدِنَا وَذِكْرَى لِلْعَابِدِينَ».",
       "«Eyyûb'u da (an). Hani o Rabbine: Bana bu dert dokundu; sen merhametlilerin en merhametlisisin, diye seslenmişti. Biz de onun duasını kabul ettik, ondaki derdi giderdik; katımızdan bir rahmet ve ibadet edenlere bir öğüt olarak ona ailesini ve onlarla birlikte bir mislini daha verdik.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "🏙️",
   "title_ar": "يُونُسُ وَأَهْلُ نِينَوَى",
   "title_tr": "Yûnus ve Ninova halkı",
   "pre": {
    "predict": {
     "prompt_tr": "Yûnus, Ninova halkını Allah'a çağırdı; onlar reddetti. Yûnus öfkelenip şehirden çıktı ve onları üç gün sonra gelecek bir azapla uyardı. Sence Ninova halkı ne yaptı?",
     "options": [
      [
       "خَرَجُوا إِلَى الصَّحْرَاءِ وَتَضَرَّعُوا إِلَى اللهِ",
       "Çöle çıkıp Allah'a yalvardılar"
      ],
      [
       "ضَحِكُوا وَلَمْ يُبَالُوا",
       "Gülüp aldırmadılar"
      ],
      [
       "قَتَلُوا يُونُسَ",
       "Yûnus'u öldürdüler"
      ]
     ]
    },
    "vocab": [
     [
      "الْيَأْسُ",
      "ümitsizlik",
      "😞"
     ],
     [
      "الرَّجَاءُ / الْأَمَلُ",
      "umut",
      "🌱"
     ],
     [
      "مُغَاضِبًا",
      "öfkeli olarak",
      "😠"
     ],
     [
      "تَضَرَّعُوا",
      "yalvardılar",
      "🙏"
     ],
     [
      "الصَّحْرَاءُ",
      "çöl",
      "🏜️"
     ],
     [
      "الْخِزْيُ",
      "rezillik",
      "😳"
     ]
    ]
   },
   "stop": {
    "section": 5,
    "after": 1,
    "prompt_tr": "Yûnus öfkeyle çıkıp gitti ve onları üç gün sonra azapla tehdit etti. Sence Ninova halkı bu tehdide inandı mı?",
    "options": [
     [
      "نَعَمْ، عَلِمُوا أَنَّ النَّبِيَّ لَا يَكْذِبُ",
      "Evet; peygamberin yalan söylemeyeceğini anladılar"
     ],
     [
      "لَا، ظَنُّوهُ كَاذِبًا",
      "Hayır, onu yalancı sandılar"
     ],
     [
      "لَمْ يَسْمَعُوا كَلَامَهُ",
      "Sözünü duymadılar"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "بَعَثَ اللهُ يُونُسَ إِلَى أَهْلِ نِينَوَى.",
     "أَبَوْا عَلَيْهِ وَتَمَادَوْا فِي كُفْرِهِمْ.",
     "خَرَجَ يُونُسُ مُغَاضِبًا.",
     "خَرَجَ الْقَوْمُ إِلَى الصَّحْرَاءِ.",
     "تَضَرَّعُوا إِلَى اللهِ.",
     "رَفَعَ اللهُ عَنْهُمُ الْعَذَابَ."
    ],
    "questions": [
     {
      "q": "مَاذَا تُثْبِتُ قِصَّةُ يُونُسَ مَعَ قِصَّةِ أَيُّوبَ؟",
      "qt": "Yûnus'un kıssası Eyyûb'un kıssasıyla birlikte neyi gösteriyor?",
      "o": [
       "قُدْرَةَ اللهِ وَلُطْفَهُ بِعِبَادِهِ",
       "قُوَّةَ الْمُلُوكِ",
       "جَمَالَ الْبَحْرِ"
      ],
      "ot": [
       "Allah'ın kudretini ve kullarına lütfunu",
       "Kralların gücünü",
       "Denizin güzelliğini"
      ],
      "a": 0,
      "ev": [
       "4.0"
      ]
     },
     {
      "q": "إِلَى أَيْنَ بَعَثَ اللهُ يُونُسَ؟",
      "qt": "Allah Yûnus'u nereye gönderdi?",
      "o": [
       "إِلَى أَهْلِ نِينَوَى",
       "إِلَى أَهْلِ مَدْيَنَ",
       "إِلَى أَهْلِ مِصْرَ"
      ],
      "ot": [
       "Ninova halkına",
       "Medyen halkına",
       "Mısır halkına"
      ],
      "a": 0,
      "ev": [
       "5.0"
      ]
     },
     {
      "q": "كَيْفَ خَرَجَ يُونُسُ مِنْ بَيْنِ قَوْمِهِ؟",
      "qt": "Yûnus kavminin arasından nasıl çıktı?",
      "o": [
       "مُغَاضِبًا لَهُمْ",
       "فَرِحًا",
       "خَائِفًا مِنَ الْمَلِكِ"
      ],
      "ot": [
       "Onlara öfkelenerek",
       "Sevinerek",
       "Kraldan korkarak"
      ],
      "a": 0,
      "ev": [
       "5.1"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ الْقَوْمُ بِالْأُمَّهَاتِ وَالْأَوْلَادِ؟",
      "qt": "Kavim analar ve yavrularına ne yaptı?",
      "o": [
       "فَرَّقُوا بَيْنَهَا",
       "ذَبَحُوهَا",
       "تَرَكُوهَا فِي الْقَرْيَةِ"
      ],
      "ot": [
       "Onları birbirinden ayırdılar",
       "Onları kestiler",
       "Onları köyde bıraktılar"
      ],
      "a": 0,
      "ev": [
       "5.2"
      ]
     },
     {
      "q": "مَا الْقَرْيَةُ الَّتِي نَفَعَهَا إِيمَانُهَا؟",
      "qt": "İmanı kendisine fayda veren şehir hangisiydi?",
      "o": [
       "قَوْمُ يُونُسَ",
       "قَوْمُ نُوحٍ",
       "قَوْمُ فِرْعَوْنَ"
      ],
      "ot": [
       "Yûnus'un kavmi",
       "Nûh'un kavmi",
       "Firavun'un kavmi"
      ],
      "a": 0,
      "ev": [
       "5.4"
      ]
     }
    ],
    "focus": {
     "title": "Cins olumsuzluğu: لَا نُورَ وَلَا هَوَاءَ",
     "explain": "<b>لَا</b> belirsiz bir ismin önüne gelip onu tanvinsiz ve üstünlü (<b>ـَ</b>) yaparsa, o türden <b>hiçbir şeyin</b> bulunmadığını anlatır: <span class='ar-inline'>لَا نُورَ</span> (hiç ışık yok), <span class='ar-inline'>لَا مَلْجَأَ</span> (hiçbir sığınak yok). Kelime-i tevhit de böyledir: <span class='ar-inline'>لَا إِلٰهَ إِلَّا اللهُ</span>. Karşılaştırın: <span class='ar-inline'>لَا يَكْذِبُ</span> (fiilin önünde: yalan söylemez).",
     "examples": [
      "فَلَا نُورَ وَلَا هَوَاءَ، وَلَا أَمَلَ وَلَا رَجَاءَ",
      "وَأَنْ لَا مَلْجَأَ مِنَ اللهِ إِلَّا إِلَيْهِ",
      "«أَنْ لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ»"
     ],
     "items": [
      {
       "q": "فَلَا ____ وَلَا هَوَاءَ.",
       "o": [
        "نُورَ",
        "نُورٌ",
        "النُّورُ"
       ],
       "a": 0
      },
      {
       "q": "وَلَا أَمَلَ وَلَا ____.",
       "o": [
        "رَجَاءَ",
        "رَجَاءٌ",
        "يَرْجُو"
       ],
       "a": 0
      },
      {
       "q": "لَا ____ مِنَ اللهِ إِلَّا إِلَيْهِ.",
       "o": [
        "مَلْجَأَ",
        "مَلْجَأٌ",
        "الْمَلْجَأُ"
       ],
       "a": 0
      },
      {
       "q": "«لَا شَكَّ فِيهِ» = …",
       "o": [
        "Onda hiç şüphe yok",
        "Ondan şüphelenme",
        "Şüphe ettim"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "بَعَثَ اللهُ يُونُسَ إِلَى أَهْلِ {نِينَوَى}. فَأَبَوْا عَلَيْهِ، فَخَرَجَ {مُغَاضِبًا} لَهُمْ. فَخَرَجُوا إِلَى {الصَّحْرَاءِ}، وَ{تَضَرَّعُوا} إِلَى اللهِ، فَرَفَعَ اللهُ عَنْهُمُ {الْعَذَابَ}."
    },
    "think": {
     "q": "لِمَاذَا رَفَعَ اللهُ الْعَذَابَ عَنْ قَوْمِ يُونُسَ وَلَمْ يَرْفَعْهُ عَنْ قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ؟",
     "qt": "Allah neden azabı Yûnus'un kavminden kaldırdı da Nûh, Âd ve Semûd kavimlerinden kaldırmadı?",
     "model": "Önceki kavimler azabı gözleriyle görünceye kadar inkârda ısrar ettiler, hatta peygamberlerinden azabı getirmesini istediler. Yûnus'un kavmi ise azabın işaretlerini görünce hemen pişman oldu, hep birlikte çöle çıkıp içtenlikle Allah'a yalvardı. Ayet, samimi ve zamanında yapılan tövbenin kabul edildiğini, Allah'ın rahmetinin azabından önce geldiğini gösteriyor."
    },
    "retell": [
     "يُونُسُ",
     "نِينَوَى",
     "مُغَاضِبًا",
     "بَعْدَ ثَلَاثٍ",
     "الصَّحْرَاءُ",
     "رَفَعَ اللهُ الْعَذَابَ"
    ],
    "quran": [
     {
      "ar": "فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ فَنَفَعَهَا إِيمَانُهَا إِلَّا قَوْمَ يُونُسَ لَمَّا آمَنُوا كَشَفْنَا عَنْهُمْ عَذَابَ الْخِزْيِ فِي الْحَيَاةِ الدُّنْيَا وَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ",
      "ref": "Yûnus 10:98",
      "tr": "Keşke (helak edilen) şehirlerden biri iman etseydi de imanı ona fayda verseydi! Ancak Yûnus'un kavmi başka; onlar iman edince dünya hayatında rezillik azabını onlardan kaldırdık ve onları bir süreye kadar yaşattık.",
      "inText": "«فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ …»"
     },
     {
      "ar": "وَأَرْسَلْنَاهُ إِلَىٰ مِائَةِ أَلْفٍ أَوْ يَزِيدُونَ ۝ فَآمَنُوا فَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ",
      "ref": "Sâffât 37:147–148",
      "tr": "Onu yüz bin ya da daha fazla kişiye peygamber olarak gönderdik. Onlar da iman ettiler; biz de onları bir süreye kadar yaşattık.",
      "inText": "«بَعَثَهُ اللهُ إِلَى أَهْلِ قَرْيَةِ نِينَوَى»"
     }
    ]
   },
   "sections": [
    {
     "n": 4,
     "title_ar": "قِصَّةُ يُونُسَ وَحِكْمَتُهَا",
     "title_tr": "Yûnus'un kıssası ve hikmeti",
     "s": [
      [
       "وَتَأْتِي قِصَّةُ يُونُسَ مَقْرُونَةً بِقِصَّةِ أَيُّوبَ مُؤَيِّدَةً لَهَا فِي إِثْبَاتِ قُدْرَةِ اللهِ تَعَالَى وَلُطْفِهِ بِعِبَادِهِ، وَإِغَاثَتِهِ لَهُمْ حِينَ يَنْقَطِعُ الرَّجَاءُ.",
       "Yûnus'un kıssası Eyyûb'un kıssasıyla birlikte gelir ve Allah Teâlâ'nın kudretini, kullarına lütfunu ve ümit kesildiği anda onların imdadına yetişmesini göstermekte onu destekler."
      ],
      [
       "وَيَغْشَى الْيَأْسُ الْقَاتِلُ وَالظَّلَامُ الْحَالِكُ، وَتَنْسَدُّ جَمِيعُ الْمَنَافِذِ، فَلَا نُورَ وَلَا هَوَاءَ، وَلَا أَمَلَ وَلَا رَجَاءَ.",
       "Öldürücü bir ümitsizlik ve zifirî bir karanlık her yanı kaplar, bütün çıkış yolları kapanır: Ne ışık vardır ne hava, ne umut vardır ne beklenti."
      ],
      [
       "يَدُورُ رَحَى الْمَوْتِ قَوِيَّةً سَرِيعَةً تَطْحَنُ حَبَّةَ الْحَيَاةِ نَاعِمَةً دَقِيقَةً.",
       "Ölümün değirmen taşı güçlü ve hızlı döner; hayat tanesini ince ince öğütür."
      ],
      [
       "هُنَالِكَ تَبْرُزُ يَدُ الْقُدْرَةِ الْإِلٰهِيَّةِ، الْقَوِيَّةُ الْقَاهِرَةُ، الرَّحِيمَةُ الْحَكِيمَةُ، فَتُخْرِجُ هٰذَا الْإِنْسَانَ الضَّعِيفَ مِنْ أَشْدَاقِ الْأَسَدِ الضَّارِي وَالْمَوْتِ الْفَاتِكِ.",
       "İşte o an ilahî kudretin güçlü, her şeye hâkim, merhametli ve hikmetli eli ortaya çıkar ve bu zayıf insanı yırtıcı aslanın çenesinden ve öldürücü ölümün pençesinden çıkarır."
      ],
      [
       "فَيَخْرُجُ سَلِيمًا غَيْرَ مَخْدُوشٍ، كَامِلًا غَيْرَ مَنْقُوصٍ، كَأَنَّمَا كَانَ عَلَى فِرَاشِهِ فِي بَيْتِهِ، مَحْفُوظًا بَيْنَ أَهْلِهِ.",
       "O da sapasağlam, tek çizik almadan, eksiksiz çıkar; sanki evinde yatağındaymış, ailesinin arasında korunuyormuş gibi."
      ]
     ]
    },
    {
     "n": 5,
     "title_ar": "يُونُسُ بَيْنَ قَوْمِهِ",
     "title_tr": "Yûnus kavminin arasında",
     "s": [
      [
       "وَهٰذِهِ قِصَّةُ يُونُسَ: بَعَثَهُ اللهُ إِلَى أَهْلِ قَرْيَةِ «نِينَوَى» فَدَعَاهُمْ إِلَى اللهِ تَعَالَى، فَأَبَوْا عَلَيْهِ، وَتَمَادَوْا فِي كُفْرِهِمْ.",
       "İşte Yûnus'un kıssası: Allah onu «Ninova» şehrinin halkına gönderdi. O da onları Allah Teâlâ'ya çağırdı; ama onlar ona karşı direndiler ve inkârlarında ısrar ettiler."
      ],
      [
       "فَخَرَجَ مِنْ بَيْنِ أَظْهُرِهِمْ مُغَاضِبًا لَهُمْ وَوَعَدَهُمْ بِالْعَذَابِ بَعْدَ ثَلَاثٍ.",
       "Yûnus onlara öfkelenerek aralarından çıktı ve onları üç gün sonra azapla tehdit etti."
      ],
      [
       "فَلَمَّا تَحَقَّقُوا مِنْهُ ذٰلِكَ وَعَلِمُوا أَنَّ النَّبِيَّ لَا يَكْذِبُ خَرَجُوا إِلَى الصَّحْرَاءِ بِأَطْفَالِهِمْ وَأَنْعَامِهِمْ وَمَوَاشِيهِمْ، وَفَرَّقُوا بَيْنَ الْأُمَّهَاتِ وَأَوْلَادِهَا.",
       "Bunun gerçek olduğundan emin olup peygamberin yalan söylemeyeceğini anlayınca, çocuklarıyla, sürüleri ve hayvanlarıyla çöle çıktılar; anneleri yavrularından ayırdılar."
      ],
      [
       "ثُمَّ تَضَرَّعُوا إِلَى اللهِ عَزَّ وَجَلَّ، وَجَأَرُوا إِلَيْهِ، وَرَغَتِ الْإِبِلُ وَفِصَالُهَا، وَخَارَتِ الْبَقَرُ وَأَوْلَادُهَا، وَثَغَتِ الْغَنَمُ وَسِخَالُهَا، فَرَفَعَ اللهُ عَنْهُمُ الْعَذَابَ.",
       "Sonra aziz ve celil olan Allah'a yalvarıp yakardılar, O'na feryat ettiler. Develer ve yavruları böğürdü, inekler ve buzağıları möledi, koyunlar ve kuzuları meledi. Allah da azabı onlardan kaldırdı."
      ],
      [
       "قَالَ اللهُ تَعَالَى: «فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ فَنَفَعَهَا إِيمَانُهَا إِلَّا قَوْمَ يُونُسَ لَمَّا آمَنُوا كَشَفْنَا عَنْهُمْ عَذَابَ الْخِزْيِ فِي الْحَيَاةِ الدُّنْيَا وَمَتَّعْنَاهُمْ إِلَى حِينٍ».",
       "Allah Teâlâ buyurdu: «Keşke (helak edilen) şehirlerden biri iman etseydi de imanı ona fayda verseydi! Ancak Yûnus'un kavmi başka; onlar iman edince dünya hayatında rezillik azabını onlardan kaldırdık ve onları bir süreye kadar yaşattık.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "🐋",
   "title_ar": "فِي بَطْنِ الْحُوتِ",
   "title_tr": "Balığın karnında",
   "pre": {
    "predict": {
     "prompt_tr": "Yûnus bir gemiye bindi; deniz dalgalandı ve gemi batmak üzereydi. Gemidekiler birini denize atmak için kura çektiler. Sence kura kime çıktı ve sonra ne oldu?",
     "options": [
      [
       "عَلَى يُونُسَ فَالْتَقَمَهُ حُوتٌ",
       "Yûnus'a çıktı ve onu bir balık yuttu"
      ],
      [
       "عَلَى صَاحِبِ السَّفِينَةِ",
       "Gemi sahibine çıktı"
      ],
      [
       "لَمْ تَقَعْ عَلَى أَحَدٍ",
       "Kimseye çıkmadı"
      ]
     ]
    },
    "vocab": [
     [
      "سَفِينَةٌ",
      "gemi",
      "⛵"
     ],
     [
      "الْقُرْعَةُ",
      "kura",
      "🎲"
     ],
     [
      "حُوتٌ",
      "balık, büyük balık",
      "🐋"
     ],
     [
      "الْتَقَمَ",
      "yuttu",
      "😮"
     ],
     [
      "ظُلْمَةٌ ج ظُلُمَاتٌ",
      "karanlık",
      "🌑"
     ],
     [
      "الْغَمُّ",
      "keder, tasa",
      "😔"
     ]
    ]
   },
   "stop": {
    "section": 7,
    "after": 3,
    "prompt_tr": "Yûnus üç karanlığın içindeydi: balığın karnı, deniz ve gece. Allah ona kurtuluş sözlerini ilham etti. Sence Yûnus ne dedi?",
    "options": [
     [
      "لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
      "Senden başka ilah yok; seni tenzih ederim; ben zalimlerden oldum"
     ],
     [
      "أَخْرِجْنِي وَإِلَّا غَضِبْتُ",
      "Beni çıkar, yoksa öfkelenirim"
     ],
     [
      "لَمْ يَقُلْ شَيْئًا",
      "Hiçbir şey demedi"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "رَكِبَ يُونُسُ فِي سَفِينَةٍ.",
     "خَافُوا أَنْ يَغْرَقُوا فَاقْتَرَعُوا.",
     "وَقَعَتِ الْقُرْعَةُ عَلَى يُونُسَ ثَلَاثَ مَرَّاتٍ.",
     "أَلْقَى نَفْسَهُ فِي الْبَحْرِ فَالْتَقَمَهُ الْحُوتُ.",
     "دَعَا فِي الظُّلُمَاتِ.",
     "نَجَّاهُ اللهُ مِنَ الْغَمِّ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا اقْتَرَعَ أَهْلُ السَّفِينَةِ؟",
      "qt": "Gemidekiler neden kura çektiler?",
      "o": [
       "لِيُلْقُوا رَجُلًا يَتَخَفَّفُونَ بِهِ",
       "لِيَخْتَارُوا رَئِيسًا",
       "لِيَقْسِمُوا الطَّعَامَ"
      ],
      "ot": [
       "Gemiyi hafifletmek için birini atmak üzere",
       "Bir başkan seçmek için",
       "Yemeği paylaştırmak için"
      ],
      "a": 0,
      "ev": [
       "6.1"
      ]
     },
     {
      "q": "كَمْ مَرَّةً وَقَعَتِ الْقُرْعَةُ عَلَى يُونُسَ؟",
      "qt": "Kura Yûnus'a kaç kez çıktı?",
      "o": [
       "ثَلَاثَ مَرَّاتٍ",
       "مَرَّةً وَاحِدَةً",
       "سَبْعَ مَرَّاتٍ"
      ],
      "ot": [
       "Üç kez",
       "Bir kez",
       "Yedi kez"
      ],
      "a": 0,
      "ev": [
       "6.2"
      ]
     },
     {
      "q": "بِمَاذَا أَوْحَى اللهُ إِلَى الْحُوتِ؟",
      "qt": "Allah balığa ne vahyetti?",
      "o": [
       "أَلَّا يَأْكُلَ لَهُ لَحْمًا وَلَا يَهْشِمَ لَهُ عَظْمًا",
       "أَنْ يَأْكُلَهُ",
       "أَنْ يَذْهَبَ بِهِ إِلَى مِصْرَ"
      ],
      "ot": [
       "Etinden yememesini ve kemiğini kırmamasını",
       "Onu yemesini",
       "Onu Mısır'a götürmesini"
      ],
      "a": 0,
      "ev": [
       "6.6"
      ]
     },
     {
      "q": "فِي كَمْ ظُلْمَةٍ كَانَ يُونُسُ؟",
      "qt": "Yûnus kaç karanlığın içindeydi?",
      "o": [
       "ثَلَاثٍ: بَطْنِ الْحُوتِ وَالْبَحْرِ وَاللَّيْلِ",
       "وَاحِدَةٍ",
       "سَبْعٍ"
      ],
      "ot": [
       "Üç: balığın karnı, deniz ve gece",
       "Bir",
       "Yedi"
      ],
      "a": 0,
      "ev": [
       "7.0"
      ]
     },
     {
      "q": "لِمَنْ فِي هٰذِهِ الْقِصَّةِ سَلْوَى؟",
      "qt": "Bu kıssada kimin için teselli var?",
      "o": [
       "لِكُلِّ بَائِسٍ مَلْهُوفٍ وَيَائِسٍ مُضْطَرِبٍ",
       "لِلْأَغْنِيَاءِ فَقَطْ",
       "لِلْمُلُوكِ"
      ],
      "ot": [
       "Her çaresiz, yardım bekleyen ve ümitsiz insan için",
       "Yalnızca zenginler için",
       "Krallar için"
      ],
      "a": 0,
      "ev": [
       "7.3"
      ]
     }
    ],
    "focus": {
     "title": "Dişil çoğul ـَات: ظُلُمَاتٌ، كُرُبَاتٌ، سَمَاوَاتٌ",
     "explain": "Pek çok dişil isim ـَة'yi atıp <b>ـَات</b> alarak çoğul yapılır: <span class='ar-inline'>ظُلْمَةٌ → ظُلُمَاتٌ</span> (karanlıklar), <span class='ar-inline'>كُرْبَةٌ → كُرُبَاتٌ</span> (sıkıntılar), <span class='ar-inline'>كَلِمَةٌ → كَلِمَاتٌ</span>, <span class='ar-inline'>سَمَاءٌ → سَمَاوَاتٌ</span>, <span class='ar-inline'>خَيْرٌ → خَيْرَاتٌ</span>. Bu çoğulun mansub ve mecrur hâli ـِ ile olur: <span class='ar-inline'>تُبَدِّدُ الظُّلُمَاتِ</span>.",
     "examples": [
      "ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ",
      "الْكَلِمَاتِ الَّتِي تُبَدِّدُ الظُّلُمَاتِ وَتَكْشِفُ الْكُرُبَاتِ",
      "وَتَسْتَنْزِلُ الرَّحْمَةَ مِنْ فَوْقِ سَبْعِ سَمَاوَاتٍ"
     ],
     "items": [
      {
       "q": "ظُلْمَةٌ ← ____",
       "o": [
        "ظُلُمَاتٌ",
        "ظُلَّامٌ",
        "ظَلَامِيٌّ"
       ],
       "a": 0
      },
      {
       "q": "كَلِمَةٌ ← ____",
       "o": [
        "كَلِمَاتٌ",
        "كُلُومٌ",
        "كَلَامٌ"
       ],
       "a": 0
      },
      {
       "q": "مِنْ فَوْقِ سَبْعِ ____",
       "o": [
        "سَمَاوَاتٍ",
        "سَمَاءٍ",
        "سَمَاوَاتٌ"
       ],
       "a": 0
      },
      {
       "q": "«الْكُرُبَاتُ» = …",
       "o": [
        "sıkıntılar",
        "sıkıntı",
        "sıkıldı"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "رَكِبَ يُونُسُ فِي {سَفِينَةٍ}، فَوَقَعَتْ عَلَيْهِ {الْقُرْعَةُ}، فَأَلْقَى نَفْسَهُ فِي الْبَحْرِ فَالْتَقَمَهُ {الْحُوتُ}. فَنَادَى فِي {الظُّلُمَاتِ}: لَا إِلٰهَ إِلَّا أَنْتَ. فَنَجَّاهُ اللهُ مِنَ {الْغَمِّ}."
    },
    "think": {
     "q": "لِمَاذَا قَالَ يُونُسُ فِي دُعَائِهِ: «إِنِّي كُنْتُ مِنَ الظَّالِمِينَ»؟",
     "qt": "Yûnus duasında neden «Ben zalimlerden oldum» dedi?",
     "model": "Yûnus, Allah'ın izni gelmeden kavmine öfkelenerek aralarından ayrılmıştı. Balığın karnında bunun bir hata olduğunu anladı. Duasında önce Allah'ın birliğini ve yüceliğini andı, sonra suçu başkasına değil kendine yükledi. Kıssa, kurtuluşun hatayı kabul edip Allah'a dönmekle başladığını; ayetin sonundaki «Müminleri işte böyle kurtarırız» sözüyle de bunun herkes için geçerli olduğunu gösteriyor."
    },
    "personal": {
     "q": "فِي قِصَّةِ يُونُسَ «سَلْوَى لِكُلِّ بَائِسٍ». مَاذَا تَفْعَلُ إِذَا ضَاقَتْ عَلَيْكَ نَفْسُكَ؟",
     "qt": "Yûnus'un kıssasında «her çaresiz için bir teselli» var. İçin daraldığında ne yaparsın? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "إِذَا ضَاقَتْ عَلَيَّ نَفْسِي أَدْعُو …",
      "أَتَكَلَّمُ مَعَ …",
      "أَقْرَأُ … / أَمْشِي …"
     ]
    },
    "retell": [
     "سَفِينَةٌ",
     "الْقُرْعَةُ",
     "الْحُوتُ",
     "ظُلُمَاتٌ",
     "لَا إِلٰهَ إِلَّا أَنْتَ",
     "نَجَّيْنَاهُ"
    ],
    "quran": [
     {
      "ar": "وَإِنَّ يُونُسَ لَمِنَ الْمُرْسَلِينَ ۝ إِذْ أَبَقَ إِلَى الْفُلْكِ الْمَشْحُونِ ۝ فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ ۝ فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ",
      "ref": "Sâffât 37:139–142",
      "tr": "Şüphesiz Yûnus da gönderilen peygamberlerdendi. Hani o dolu bir gemiye kaçmıştı. Kura çekti ve kaybedenlerden oldu. Kendini kınar bir hâldeyken onu balık yuttu.",
      "inText": "«فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ»"
     },
     {
      "ar": "وَذَا النُّونِ إِذْ ذَهَبَ مُغَاضِبًا فَظَنَّ أَنْ لَنْ نَقْدِرَ عَلَيْهِ فَنَادَىٰ فِي الظُّلُمَاتِ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ ۝ فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ ۚ وَكَذَٰلِكَ نُنْجِي الْمُؤْمِنِينَ",
      "ref": "Enbiyâ 21:87–88",
      "tr": "Zünnûn'u da (an). Hani o öfkeli bir hâlde gitmiş ve onu asla sıkıntıya sokmayacağımızı sanmıştı. Sonra karanlıklar içinde: Senden başka ilah yoktur; seni tenzih ederim; ben gerçekten zalimlerden oldum, diye seslendi. Biz de duasını kabul ettik ve onu kederden kurtardık. Müminleri işte böyle kurtarırız.",
      "inText": "«وَذَا النُّونِ إِذْ ذَهَبَ مُغَاضِبًا …»"
     },
     {
      "ar": "فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ ۝ لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ",
      "ref": "Sâffât 37:143–144",
      "tr": "Eğer o Allah'ı tesbih edenlerden olmasaydı, insanların diriltileceği güne kadar balığın karnında kalırdı.",
      "inText": "«ثُمَّ أَلْهَمَهُ اللهُ الْكَلِمَاتِ الَّتِي تُبَدِّدُ الظُّلُمَاتِ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 6,
     "title_ar": "يُونُسُ فِي بَطْنِ الْحُوتِ",
     "title_tr": "Yûnus balığın karnında",
     "s": [
      [
       "وَأَمَّا يُونُسُ - عَلَيْهِ السَّلَامُ - فَإِنَّهُ ذَهَبَ فَرَكِبَ مَعَ قَوْمٍ فِي سَفِينَةٍ، فَلَجَّتْ بِهِمْ، وَخَافُوا أَنْ يَغْرَقُوا.",
       "Yûnus'a (a.s.) gelince, o gidip bazı insanlarla birlikte bir gemiye bindi. Gemi onlarla birlikte dalgalı denizde çalkalandı ve boğulmaktan korktular."
      ],
      [
       "فَاقْتَرَعُوا عَلَى رَجُلٍ يُلْقُونَهُ مِنْ بَيْنِهِمْ يَتَخَفَّفُونَ بِهِ.",
       "Gemiyi hafifletmek için aralarından denize atacakları bir adamı seçmek üzere kura çektiler."
      ],
      [
       "فَوَقَعَتِ الْقُرْعَةُ عَلَى يُونُسَ فَأَبَوْا أَنْ يُلْقُوهُ، ثُمَّ أَعَادُوهَا، فَوَقَعَتْ عَلَيْهِ أَيْضًا، فَأَبَوْا، ثُمَّ أَعَادُوهَا فَوَقَعَتْ عَلَيْهِ أَيْضًا.",
       "Kura Yûnus'a çıktı; onu atmak istemediler. Sonra kurayı tekrarladılar, yine ona çıktı; yine istemediler. Sonra bir daha tekrarladılar, yine ona çıktı."
      ],
      [
       "قَالَ اللهُ تَعَالَى: «فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ». أَيْ فَوَقَعَتْ عَلَيْهِ الْقُرْعَةُ.",
       "Allah Teâlâ buyurdu: «Kura çekti ve kaybedenlerden oldu.» Yani kura ona çıktı."
      ],
      [
       "فَقَامَ يُونُسُ - عَلَيْهِ السَّلَامُ - وَتَجَرَّدَ مِنْ ثِيَابِهِ، ثُمَّ أَلْقَى نَفْسَهُ فِي الْبَحْرِ.",
       "Yûnus (a.s.) kalktı, elbiselerini çıkardı, sonra kendini denize attı."
      ],
      [
       "وَقَدْ أَرْسَلَ اللهُ سُبْحَانَهُ حُوتًا يَشُقُّ الْبِحَارَ حَتَّى جَاءَ فَالْتَقَمَ يُونُسَ حِينَ أَلْقَى نَفْسَهُ مِنَ السَّفِينَةِ.",
       "Yüce Allah denizleri yararak gelen bir balık göndermişti; balık geldi ve Yûnus kendini gemiden attığı anda onu yutuverdi."
      ],
      [
       "فَأَوْحَى اللهُ إِلَى ذٰلِكَ الْحُوتِ أَنْ لَا تَأْكُلْ لَهُ لَحْمًا، وَلَا تَهْشِمْ لَهُ عَظْمًا.",
       "Allah o balığa şöyle vahyetti: Onun etinden yeme, kemiğini de kırma."
      ]
     ]
    },
    {
     "n": 7,
     "title_ar": "وَاسْتَجَابَ اللهُ دُعَاءَهُ",
     "title_tr": "Allah duasını kabul etti",
     "s": [
      [
       "فَكَانَ فِي ظُلْمَةِ بَطْنِ الْحُوتِ، فِي ظُلْمَةِ الْبَحْرِ، فِي ظُلْمَةِ اللَّيْلِ، ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ.",
       "Balığın karnının karanlığında, denizin karanlığında, gecenin karanlığındaydı: birbiri üstüne binmiş karanlıklar."
      ],
      [
       "فَمَا أَشَدَّ الظَّلَامَ! وَمَا أَبْعَدَ السَّلَامَ!",
       "Karanlık ne kadar koyu! Kurtuluş ne kadar uzak!"
      ],
      [
       "وَمَكَثَ مَا شَاءَ اللهُ أَنْ يَمْكُثَ، ثُمَّ أَلْهَمَهُ اللهُ الْكَلِمَاتِ الَّتِي تُبَدِّدُ الظُّلُمَاتِ وَتَكْشِفُ الْكُرُبَاتِ، وَتَسْتَنْزِلُ الرَّحْمَةَ مِنْ فَوْقِ سَبْعِ سَمَاوَاتٍ.",
       "Allah'ın dilediği kadar orada kaldı. Sonra Allah ona karanlıkları dağıtan, sıkıntıları gideren ve yedi kat göğün üstünden rahmeti indiren sözleri ilham etti."
      ],
      [
       "وَاسْمَعِ الْقُرْآنَ يَحْكِي هٰذِهِ الْقِصَّةَ الْغَرِيبَةَ الْفَرِيدَةَ الَّتِي فِيهَا سَلْوَى لِكُلِّ بَائِسٍ مَلْهُوفٍ، وَيَائِسٍ مُضْطَرِبٍ، قَدْ ضَاقَتْ عَلَيْهِ الْأَرْضُ بِمَا رَحُبَتْ، وَضَاقَتْ عَلَيْهِ نَفْسُهُ، وَرَأَى عِيَانًا أَنْ لَا مَلْجَأَ مِنَ اللهِ إِلَّا إِلَيْهِ.",
       "Kur'an'ı dinle; bu şaşırtıcı ve eşsiz kıssayı anlatıyor. Bu kıssada, bütün genişliğine rağmen yeryüzü kendisine dar gelen, içi daralan ve Allah'tan ancak O'na sığınılabileceğini açıkça gören her çaresiz, yardım bekleyen, ümitsiz ve huzursuz insan için bir teselli vardır."
      ],
      [
       "«وَذَا النُّونِ إِذْ ذَهَبَ مُغَاضِبًا فَظَنَّ أَنْ لَنْ نَقْدِرَ عَلَيْهِ فَنَادَى فِي الظُّلُمَاتِ أَنْ لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ * فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ وَكَذٰلِكَ نُنْجِي الْمُؤْمِنِينَ».",
       "«Zünnûn'u (balık sahibi Yûnus'u) da (an). Hani o öfkeli bir hâlde gitmiş ve onu asla sıkıntıya sokmayacağımızı sanmıştı. Sonra karanlıklar içinde: Senden başka ilah yoktur; seni tenzih ederim; ben gerçekten zalimlerden oldum, diye seslendi. Biz de duasını kabul ettik ve onu kederden kurtardık. Müminleri işte böyle kurtarırız.»"
      ]
     ]
    }
   ]
  }
 ]
});
