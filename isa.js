/* Kasasu'n-Nebiyyîn — Hz. Îsâ'nın Kıssası (s. 341–384)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "isa",
 "title_ar": "قِصَّةُ سَيِّدِنَا عِيسَى بْنِ مَرْيَمَ عَلَيْهِ الصَّلَاةُ وَالسَّلَامُ",
 "title_tr": "Hz. Îsâ'nın Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 341–384",
 "units": [
  {
   "id": 1,
   "emoji": "✨",
   "title_ar": "وِلَادَةٌ خَارِقَةٌ لِلْعَادَةِ",
   "title_tr": "Olağanüstü bir doğum",
   "pre": {
    "predict": {
     "prompt_tr": "Îsâ babasız doğdu. Tabiat kanunlarından başka bir şeye inanmayan biri bu doğuma nasıl bakar sence?",
     "options": [
      [
       "يَصْعُبُ عَلَيْهِ أَنْ يُصَدِّقَهَا",
       "Ona inanmak zor gelir"
      ],
      [
       "يُصَدِّقُهَا بِسُهُولَةٍ",
       "Kolayca inanır"
      ],
      [
       "لَا يَهْتَمُّ بِهَا",
       "Hiç ilgilenmez"
      ]
     ]
    },
    "vocab": [
     [
      "خَارِقٌ لِلْعَادَةِ",
      "olağanüstü",
      "🌟"
     ],
     [
      "الْقَوَانِينُ الطَّبِيعِيَّةُ",
      "tabiat kanunları",
      "🌍"
     ],
     [
      "التَّجْرِبَةُ",
      "deney, tecrübe",
      "🧪"
     ],
     [
      "الْإِرَادَةُ",
      "irade, dileme",
      "🎯"
     ],
     [
      "الْقُدْرَةُ",
      "kudret, güç",
      "💪"
     ],
     [
      "الطِّبُّ",
      "tıp",
      "🩺"
     ]
    ]
   },
   "stop": {
    "section": 1,
    "after": 5,
    "prompt_tr": "Tabiat kanunlarına tapar gibi inanana bu doğuma inanmak zor geldi. Peki Allah'a kudret sahibi bir yaratıcı olarak inanan için nasıldır?",
    "options": [
     [
      "يَسْهُلُ عَلَيْهِ الْإِيمَانُ بِهَا",
      "Ona inanmak kolay gelir"
     ],
     [
      "يَشُقُّ عَلَيْهِ أَكْثَرَ",
      "Daha da zor gelir"
     ],
     [
      "يُنْكِرُهَا",
      "Onu inkâr eder"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "عِيسَى آخِرُ الرُّسُلِ قَبْلَ مُحَمَّدٍ ﷺ.",
     "وِلَادَتُهُ خَارِقَةٌ لِلْعَادَةِ.",
     "شَقَّ الْإِيمَانُ بِهَا عَلَى مَنْ آمَنَ بِالطَّبِيعَةِ.",
     "وَهَانَ عَلَى مَنْ آمَنَ بِاللهِ الْقَادِرِ.",
     "مَثَلُ عِيسَى كَمَثَلِ آدَمَ."
    ],
    "questions": [
     {
      "q": "مَنْ هُوَ آخِرُ الرُّسُلِ قَبْلَ نَبِيِّنَا مُحَمَّدٍ؟",
      "qt": "Peygamberimiz Muhammed'den önceki son peygamber kimdir?",
      "o": [
       "عِيسَى",
       "مُوسَى",
       "يَحْيَى"
      ],
      "ot": [
       "Îsâ",
       "Mûsâ",
       "Yahyâ"
      ],
      "a": 0,
      "ev": [
       "1.0"
      ]
     },
     {
      "q": "عَلَى مَنْ شَقَّ الْإِيمَانُ بِوِلَادَةِ عِيسَى؟",
      "qt": "Îsâ'nın doğumuna inanmak kime zor geldi?",
      "o": [
       "عَلَى مَنْ آمَنَ بِالْقَوَانِينِ الطَّبِيعِيَّةِ كَإِلٰهٍ",
       "عَلَى مَنْ آمَنَ بِاللهِ الْقَادِرِ",
       "عَلَى الْأَطْفَالِ"
      ],
      "ot": [
       "Tabiat kanunlarına ilah gibi inanana",
       "Kudret sahibi Allah'a inanana",
       "Çocuklara"
      ],
      "a": 0,
      "ev": [
       "1.3"
      ]
     },
     {
      "q": "مَاذَا جَهِلَ مَنْ آمَنَ بِالطَّبِيعَةِ وَحْدَهَا؟",
      "qt": "Yalnızca tabiata inanan neyi bilmedi?",
      "o": [
       "قُدْرَةَ اللهِ الَّتِي أَحَاطَتْ بِكُلِّ شَيْءٍ",
       "أَحْكَامَ الطِّبِّ",
       "عُلُومَ الرِّيَاضِيَّاتِ"
      ],
      "ot": [
       "Her şeyi kuşatan Allah'ın kudretini",
       "Tıbbın hükümlerini",
       "Matematiği"
      ],
      "a": 0,
      "ev": [
       "1.4"
      ]
     },
     {
      "q": "بِمَنْ شَبَّهَ اللهُ عِيسَى فِي خَلْقِهِ؟",
      "qt": "Allah, Îsâ'yı yaratılışı bakımından kime benzetti?",
      "o": [
       "بِآدَمَ",
       "بِنُوحٍ",
       "بِإِبْرَاهِيمَ"
      ],
      "ot": [
       "Âdem'e",
       "Nûh'a",
       "İbrahim'e"
      ],
      "a": 0,
      "ev": [
       "1.8"
      ]
     },
     {
      "q": "كَيْفَ كَانَ الْعَصْرُ الَّذِي وُلِدَ فِيهِ عِيسَى؟",
      "qt": "Îsâ'nın doğduğu çağ nasıldı?",
      "o": [
       "بَلَغَتْ فِيهِ الْعُلُومُ وَالطِّبُّ مَكَانَةً عَالِيَةً",
       "لَمْ يَكُنْ فِيهِ عِلْمٌ",
       "كَانَ عَصْرَ حُرُوبٍ فَقَطْ"
      ],
      "ot": [
       "İlimler ve tıp yüksek bir mertebeye ulaşmıştı",
       "Hiç ilim yoktu",
       "Sadece savaş çağıydı"
      ],
      "a": 0,
      "ev": [
       "2.1"
      ]
     }
    ],
    "focus": {
     "title": "Sınırlama edatı إِنَّمَا: «ancak, sadece»",
     "explain": "<b>إِنَّمَا</b> cümleyi sınırlar ve «ancak, sadece, yalnızca» anlamı katar: <span class='ar-inline'>إِنَّمَا أَمْرُهُ … أَنْ يَقُولَ لَهُ كُنْ</span> (O'nun emri sadece «Ol!» demektir). <span class='ar-inline'>إِنَّ</span>'den farklı olarak kendinden sonraki ismi nasb etmez; ardından isim cümlesi de fiil cümlesi de gelebilir.",
     "examples": [
      "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ كُنْ فَيَكُونُ",
      "إِنَّمَا هِيَ آيَاتٌ مِنَ اللهِ",
      "إِنَّمَا يُرِيدُونَ اطْمِئْنَانًا"
     ],
     "items": [
      {
       "q": "____ أَمْرُهُ أَنْ يَقُولَ لَهُ كُنْ فَيَكُونُ.",
       "o": [
        "إِنَّمَا",
        "لَعَلَّ",
        "لٰكِنْ"
       ],
       "a": 0
      },
      {
       "q": "«إِنَّمَا هِيَ آيَاتٌ» = …",
       "o": [
        "Onlar sadece âyetlerdir",
        "Onlar âyet değildir",
        "Onlar âyet midir?"
       ],
       "a": 0
      },
      {
       "q": "إِنَّمَا ____ آيَةٌ مِنَ اللهِ.",
       "o": [
        "هِيَ",
        "هَا",
        "إِيَّاهَا"
       ],
       "a": 0
      },
      {
       "q": "«Biz sadece kalbimizin yatışmasını istiyoruz.»",
       "o": [
        "إِنَّمَا نُرِيدُ اطْمِئْنَانًا",
        "لَا نُرِيدُ اطْمِئْنَانًا",
        "هَلْ نُرِيدُ اطْمِئْنَانًا؟"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "وِلَادَةُ عِيسَى {خَارِقَةٌ} لِلْعَادَةِ. شَقَّ الْإِيمَانُ بِهَا عَلَى مَنْ آمَنَ بِالْقَوَانِينِ {الطَّبِيعِيَّةِ}، وَهَانَ عَلَى مَنْ آمَنَ بِاللهِ {الْقَادِرِ}. وَمَثَلُ عِيسَى عِنْدَ اللهِ كَمَثَلِ {آدَمَ} خَلَقَهُ مِنْ {تُرَابٍ}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ إِنَّ وِلَادَةً مِنْ أُمٍّ بِغَيْرِ أَبٍ «أَهْوَنُ» مِنْ خَلْقِ آدَمَ؟",
     "qt": "Kitap neden babasız bir anneden doğmanın Âdem'in yaratılışından «daha kolay inanılır» olduğunu söylüyor?",
     "model": "Âdem ne anneden ne babadan yaratıldı; Îsâ'nın ise bir annesi vardı. Âdem'in yaratılışını kabul eden biri, ondan daha az olağanüstü olan Îsâ'nın doğumunu da kabul etmelidir. Âl-i İmrân 59. âyet bu karşılaştırmayı yapar: ikisi de Allah'ın «Ol!» emriyle var olmuştur."
    },
    "retell": [
     "آخِرُ الرُّسُلِ",
     "خَارِقَةٌ لِلْعَادَةِ",
     "الْقَوَانِينُ الطَّبِيعِيَّةُ",
     "قُدْرَةُ اللهِ",
     "كُنْ فَيَكُونُ",
     "كَمَثَلِ آدَمَ"
    ],
    "quran": [
     {
      "ar": "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ كُنْ فَيَكُونُ",
      "ref": "Yâsîn 36:82",
      "tr": "O bir şeyi dilediğinde, emri ona sadece «Ol!» demektir; o da hemen oluverir.",
      "inText": "«إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا …»"
     },
     {
      "ar": "إِنَّ مَثَلَ عِيسَىٰ عِنْدَ اللَّهِ كَمَثَلِ آدَمَ ۖ خَلَقَهُ مِنْ تُرَابٍ ثُمَّ قَالَ لَهُ كُنْ فَيَكُونُ",
      "ref": "Âl-i İmrân 3:59",
      "tr": "Allah katında Îsâ'nın durumu Âdem'in durumu gibidir. Onu topraktan yarattı, sonra ona «Ol!» dedi, o da oluverdi.",
      "inText": "«إِنَّ مَثَلَ عِيسَى عِنْدَ اللهِ كَمَثَلِ آدَمَ …»"
     },
     {
      "ar": "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ",
      "ref": "Haşr 59:24",
      "tr": "O, yaratan, var eden, şekil veren Allah'tır. En güzel isimler O'nundur.",
      "inText": "«هُوَ اللهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "قِصَّةٌ خَارِقَةٌ لِلْعَادَةِ",
     "title_tr": "Olağanüstü bir kıssa",
     "s": [
      [
       "وَيَجِيءُ دَوْرُ سَيِّدِنَا عِيسَى، وَهُوَ آخِرُ الرُّسُلِ، قَبْلَ نَبِيِّنَا مُحَمَّدٍ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ.",
       "Sıra efendimiz Îsâ'ya gelir; o, Peygamberimiz Allah'ın Resûlü Muhammed'den (s.a.v.) önceki son peygamberdir."
      ],
      [
       "وَهِيَ قِصَّةٌ تَجَلَّتْ فِيهَا إِرَادَةُ اللهِ الْقَاهِرَةُ، وَقُدْرَةُ اللهِ الْمُطْلَقَةُ، وَحِكْمَةُ اللهِ الدَّقِيقَةُ.",
       "Bu, Allah'ın her şeye galip iradesinin, sınırsız kudretinin ve ince hikmetinin açıkça görüldüğü bir kıssadır."
      ],
      [
       "فَأَمْرُهُ كُلُّهُ خَارِقٌ لِلْعَادَةِ، وَوِلَادَتُهُ خَارِقَةٌ لِلْعَادَةِ، حَارَتْ فِيهَا الْأَلْبَابُ، وَنُسِخَتْ فِيهَا الْقَوَانِينُ.",
       "Onun bütün işi olağanüstüdür; doğumu da olağanüstüdür. Akıllar onun karşısında şaşırmış, kanunlar bozulmuştur."
      ],
      [
       "وَشَقَّ الْإِيمَانُ بِهَا وَالتَّصْدِيقُ لَهَا عَلَى مَنْ آمَنَ بِالْقَوَانِينِ الطَّبِيعِيَّةِ كَإِلٰهٍ لَا يَزُولُ وَلَا يَحُولُ، وَآمَنَ بِالتَّجْرِبَةِ وَالْمُشَاهَدَةِ.",
       "Tabiat kanunlarına yok olmayan, değişmeyen bir ilah gibi inanan, deneye ve gözleme inanan kimseye bu doğuma inanmak ve onu tasdik etmek zor geldi."
      ],
      [
       "وَآمَنَ بِأَحْكَامِ الطِّبِّ وَالطَّبِيعَةِ كَنَامُوسٍ لَا يَتَغَيَّرُ وَلَا يَتَبَدَّلُ، وَجَهِلَ قُدْرَةَ اللهِ الَّتِي أَحَاطَتْ بِكُلِّ شَيْءٍ، وَغَلَبَتْ عَلَى كُلِّ شَيْءٍ.",
       "O kimse tıbbın ve tabiatın hükümlerine değişmez bir yasa gibi inandı; her şeyi kuşatan, her şeye galip gelen Allah'ın kudretini bilmedi."
      ],
      [
       "وَإِرَادَتَهُ الَّتِي لَا يَحُولُ دُونَهَا شَيْءٌ: «إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ كُنْ فَيَكُونُ».",
       "Önünde hiçbir şeyin duramadığı iradesini de bilmedi: «O bir şeyi dilediğinde, emri ona sadece 'Ol!' demektir; o da hemen oluverir.»"
      ],
      [
       "وَهَانَ هٰذَا الْإِيمَانُ عَلَى مَنْ آمَنَ بِاللهِ كَإِلٰهٍ قَادِرٍ مُرِيدٍ، خَالِقٍ صَانِعٍ: «هُوَ اللهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَى يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ».",
       "Allah'a kudret ve irade sahibi, yaratan ve var eden bir ilah olarak inanan için ise bu iman kolaydır: «O, yaratan, var eden, şekil veren Allah'tır. En güzel isimler O'nundur. Göklerde ve yerde ne varsa O'nu tesbih eder. O, mutlak galiptir, hikmet sahibidir.»"
      ],
      [
       "وَمِنْ غَيْرِ أُمٍّ وَأَبٍ، وَوِلَادَةٌ مِنْ أُمٍّ مِنْ غَيْرِ أَبٍ أَهْوَنُ وَأَيْسَرُ لِلتَّصْدِيقِ مِنْ وِلَادَةٍ مِنْ غَيْرِ أُمٍّ وَلَا أَبٍ.",
       "(Âdem) anasız ve babasız (yaratıldı); babasız olarak bir anneden doğmak, anasız ve babasız var olmaktan daha kolay ve daha inanılır bir şeydir."
      ],
      [
       "لِذٰلِكَ يَقُولُ اللهُ تَعَالَى: «إِنَّ مَثَلَ عِيسَى عِنْدَ اللهِ كَمَثَلِ آدَمَ خَلَقَهُ مِنْ تُرَابٍ ثُمَّ قَالَ لَهُ كُنْ فَيَكُونُ».",
       "Bu yüzden Allah Teâlâ şöyle buyurur: «Allah katında Îsâ'nın durumu Âdem'in durumu gibidir. Onu topraktan yarattı, sonra ona 'Ol!' dedi, o da oluverdi.»"
      ]
     ]
    },
    {
     "n": 2,
     "title_ar": "أَمْرُهُ كُلُّهُ عَجَبٌ",
     "title_tr": "Onun bütün işi şaşırtıcıdır",
     "s": [
      [
       "وَأَمْرُ سَيِّدِنَا عِيسَى كُلُّهُ عَجَبٌ.",
       "Efendimiz Îsâ'nın bütün işi şaşırtıcıdır."
      ],
      [
       "وَقَدْ كَانَتْ وِلَادَتُهُ فِي عَصْرٍ بَلَغَتْ فِيهِ «يُونَانُ» أَوْجَهَا فِي الْعُلُومِ الْعَقْلِيَّةِ وَالرِّيَاضِيَّةِ، وَكَانَتْ لِلطِّبِّ دَوْلَةٌ وَصَوْلَةٌ.",
       "Onun doğumu, «Yunan»ın akli ilimlerde ve matematikte zirveye ulaştığı bir çağda oldu; tıbbın da o zaman büyük bir itibarı ve gücü vardı."
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "🏛️",
   "title_ar": "حَالُ الْيَهُودِ فِي عَصْرِهِ",
   "title_tr": "Onun çağında Yahudilerin hâli",
   "pre": {
    "predict": {
     "prompt_tr": "Îsâ'nın gönderildiği toplum her şeyi maddi sebeplerle açıklıyor, ruhu inkâr ediyordu. Sence mucizeler böyle bir topluma ne anlatır?",
     "options": [
      [
       "أَنَّ قُدْرَةَ اللهِ فَوْقَ الْأَسْبَابِ",
       "Allah'ın kudretinin sebeplerin üstünde olduğunu"
      ],
      [
       "أَنَّ الطِّبَّ يَكْفِي",
       "Tıbbın yeterli olduğunu"
      ],
      [
       "لَا شَيْءَ",
       "Hiçbir şey"
      ]
     ]
    },
    "vocab": [
     [
      "الرُّوحُ",
      "ruh",
      "🕊️"
     ],
     [
      "مَادِّيٌّ",
      "maddi",
      "🧱"
     ],
     [
      "الْقُشُورُ",
      "kabuklar",
      "🥜"
     ],
     [
      "اللُّبَابُ",
      "öz",
      "🌰"
     ],
     [
      "الْفَقِيرُ",
      "fakir",
      "🫳"
     ],
     [
      "الرِّبَا",
      "faiz",
      "💰"
     ]
    ]
   },
   "stop": {
    "section": 3,
    "after": 2,
    "prompt_tr": "Onlara göre hiçbir şey sebepsiz olmaz. Sence Îsâ'ya verilen mucizeler bu dar maddeci akıl için ne oldu?",
    "options": [
     [
      "عِلَاجًا لِلْعَقْلِ الْمَادِّيِّ",
      "Maddeci akla bir ilaç"
     ],
     [
      "لُعْبَةً لِلْأَطْفَالِ",
      "Çocuklar için bir oyun"
     ],
     [
      "سِحْرًا",
      "Bir büyü"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "خَضَعَ الْيَهُودُ لِلْعُلُومِ السَّائِدَةِ.",
     "أَنْكَرُوا الرُّوحَ وَفَسَّرُوا كُلَّ شَيْءٍ تَفْسِيرًا مَادِّيًّا.",
     "كَانَتِ الْمُعْجِزَاتُ عِلَاجًا لِعُقُولِهِمْ.",
     "قَسَتْ قُلُوبُهُمْ عَلَى الضُّعَفَاءِ.",
     "عَادَوْا مَنْ دَعَاهُمْ إِلَى الْحَقِّ."
    ],
    "questions": [
     {
      "q": "مَاذَا اشْتَهَرَ فِي الْيَهُودِ فِي ذٰلِكَ الْعَصْرِ؟",
      "qt": "O çağda Yahudiler arasında ne yaygınlaştı?",
      "o": [
       "إِنْكَارُ الرُّوحِ",
       "حُبُّ الْفُقَرَاءِ",
       "الزُّهْدُ فِي الْمَالِ"
      ],
      "ot": [
       "Ruhu inkâr etmek",
       "Fakirleri sevmek",
       "Maldan el çekmek"
      ],
      "a": 0,
      "ev": [
       "3.1"
      ]
     },
     {
      "q": "مَاذَا كَانَتْ مُعْجِزَاتُ عِيسَى لِلْعَقْلِ الْمَادِّيِّ؟",
      "qt": "Îsâ'nın mucizeleri maddeci akıl için neydi?",
      "o": [
       "عِلَاجًا",
       "تَسْلِيَةً",
       "عِقَابًا"
      ],
      "ot": [
       "Bir ilaç",
       "Bir eğlence",
       "Bir ceza"
      ],
      "a": 0,
      "ev": [
       "3.3"
      ]
     },
     {
      "q": "بِمَ تَمَسَّكَ الْيَهُودُ دُونَ اللُّبَابِ؟",
      "qt": "Yahudiler özü bırakıp neye sarıldılar?",
      "o": [
       "بِالْقُشُورِ",
       "بِالْحَقِيقَةِ",
       "بِالرَّحْمَةِ"
      ],
      "ot": [
       "Kabuklara",
       "Hakikate",
       "Merhamete"
      ],
      "a": 0,
      "ev": [
       "3.4"
      ]
     },
     {
      "q": "مَاذَا وَلَّدَ الْحُكْمُ الرُّومَانِيُّ الطَّوِيلُ فِيهِمْ؟",
      "qt": "Uzun Roma yönetimi onlarda neyi doğurdu?",
      "o": [
       "النِّفَاقَ وَالتَّحَيُّلَ",
       "الشَّجَاعَةَ وَالصِّدْقَ",
       "الْعِلْمَ وَالطِّبَّ"
      ],
      "ot": [
       "İkiyüzlülük ve hilekârlığı",
       "Cesaret ve doğruluğu",
       "İlim ve tıbbı"
      ],
      "a": 0,
      "ev": [
       "3.9"
      ]
     },
     {
      "q": "كَيْفَ عَامَلُوا مَنْ دَعَاهُمْ إِلَى الدِّينِ الصَّحِيحِ؟",
      "qt": "Onları doğru dine çağırana nasıl davrandılar?",
      "o": [
       "عَادَوْهُ وَحَارَبُوهُ",
       "أَكْرَمُوهُ",
       "اتَّبَعُوهُ"
      ],
      "ot": [
       "Ona düşman olup savaştılar",
       "Ona ikram ettiler",
       "Ona uydular"
      ],
      "a": 0,
      "ev": [
       "4.5"
      ]
     }
    ],
    "focus": {
     "title": "Mastar (مَصْدَر) isim olarak: إِنْكَارُ الرُّوحِ",
     "explain": "Mastar, fiilin isim hâlidir ve cümlede özne, nesne ya da tamlama öğesi olabilir: <span class='ar-inline'>إِنْكَارُ الرُّوحِ</span> (ruhun inkârı), <span class='ar-inline'>التَّمَسُّكُ بِالْقُشُورِ</span> (kabuklara sarılmak). Kalıplar fiil babına göre değişir: <span class='ar-inline'>أَنْكَرَ → إِنْكَارٌ</span>, <span class='ar-inline'>تَمَسَّكَ → تَمَسُّكٌ</span>, <span class='ar-inline'>قَدَّسَ → تَقْدِيسٌ</span>, <span class='ar-inline'>اسْتَخَفَّ → اسْتِخْفَافٌ</span>.",
     "examples": [
      "وَاشْتَهَرَ فِيهِمْ إِنْكَارُ الرُّوحِ",
      "وَغَلَوْا فِي تَقْدِيسِ الْعُنْصُرِ وَالدَّمِ",
      "وَوُلِدَ فِيهِمُ الِاسْتِخْفَافُ بِالْأَنْبِيَاءِ"
     ],
     "items": [
      {
       "q": "أَنْكَرَ → ____",
       "o": [
        "إِنْكَارٌ",
        "تَنْكِيرٌ",
        "مُنْكِرٌ"
       ],
       "a": 0
      },
      {
       "q": "قَدَّسَ → ____",
       "o": [
        "تَقْدِيسٌ",
        "قُدْسٌ",
        "مُقَدَّسٌ"
       ],
       "a": 0
      },
      {
       "q": "اسْتَخَفَّ → ____",
       "o": [
        "اسْتِخْفَافٌ",
        "خِفَّةٌ",
        "خَفِيفٌ"
       ],
       "a": 0
      },
      {
       "q": "«التَّمَسُّكُ بِالْقُشُورِ» = …",
       "o": [
        "Kabuklara sarılmak",
        "Kabukları atmak",
        "Kabuk soymak"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "اشْتَهَرَ فِي الْيَهُودِ إِنْكَارُ {الرُّوحِ}، وَفَسَّرُوا كُلَّ شَيْءٍ تَفْسِيرًا {مَادِّيًّا}. فَكَانَتِ الْمُعْجِزَاتُ {عِلَاجًا} لِعُقُولِهِمْ. وَتَمَسَّكُوا بِالْقُشُورِ دُونَ {اللُّبَابِ}، وَقَسَتْ {قُلُوبُهُمْ}."
    },
    "think": {
     "q": "مَا الْفَرْقُ بَيْنَ «الْقُشُورِ» وَ«اللُّبَابِ» فِي الدِّينِ؟",
     "qt": "Dinde «kabuk» ile «öz» arasındaki fark nedir? Bir örnek ver.",
     "model": "Kabuk, dinin dış görünüşü ve şekilleridir; öz ise o şekillerin amacı olan iman, sevgi, merhamet ve adalettir. Yazara göre o dönemin insanları şekillere sıkı sıkıya bağlı kalıp zayıfa acımayı ve fakire yardım etmeyi unuttular. Örneğin ibadetin şekline dikkat edip komşusunu aç bırakan biri kabuğa sarılmış, özü kaçırmıştır."
    },
    "retell": [
     "إِنْكَارُ الرُّوحِ",
     "تَفْسِيرًا مَادِّيًّا",
     "عِلَاجًا لِلْعَقْلِ",
     "الْقُشُورُ دُونَ اللُّبَابِ",
     "قَسَتْ قُلُوبُهُمْ",
     "عَادَوْهُ وَحَارَبُوهُ"
    ],
    "quran": [
     {
      "ar": "ثُمَّ قَسَتْ قُلُوبُكُمْ مِنْ بَعْدِ ذَٰلِكَ فَهِيَ كَالْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةً",
      "ref": "Bakara 2:74",
      "tr": "Sonra bunun ardından kalpleriniz katılaştı; artık onlar taş gibi, hatta daha da katıdır.",
      "inText": "«وَقَسَتْ قُلُوبُهُمْ»"
     },
     {
      "ar": "وَيَسْأَلُونَكَ عَنِ الرُّوحِ ۖ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي وَمَا أُوتِيتُمْ مِنَ الْعِلْمِ إِلَّا قَلِيلًا",
      "ref": "İsrâ 17:85",
      "tr": "Sana ruh hakkında soru soruyorlar. De ki: Ruh, Rabbimin emrindendir. Size ilimden ancak az bir şey verilmiştir.",
      "inText": "«إِنْكَارُ الرُّوحِ وَمَا يَتَّصِلُ بِهَا»"
     }
    ]
   },
   "sections": [
    {
     "n": 3,
     "title_ar": "خُضُوعُ الْيَهُودِ لِلْأَسْبَابِ الظَّاهِرَةِ",
     "title_tr": "Yahudilerin görünen sebeplere boyun eğmesi",
     "s": [
      [
       "وَخَضَعَ الْيَهُودُ، وَهُمْ أُمَّةٌ كَثُرَ فِيهَا الْأَنْبِيَاءُ، لِلْعُلُومِ السَّائِدَةِ فِي عَصْرِهِمْ.",
       "İçinden pek çok peygamber çıkmış bir ümmet olan Yahudiler, çağlarında hâkim olan ilimlere boyun eğdiler."
      ],
      [
       "وَاشْتَهَرَ فِيهِمْ إِنْكَارُ الرُّوحِ وَمَا يَتَّصِلُ بِهَا، وَاعْتَادُوا أَنْ يُفَسِّرُوا كُلَّ مَا يَرَوْنَهُ تَفْسِيرًا مَادِّيًّا.",
       "Aralarında ruhu ve ruhla ilgili şeyleri inkâr etmek yaygınlaştı; gördükleri her şeyi maddi olarak açıklamaya alıştılar."
      ],
      [
       "فَلَا وُجُودَ لِشَيْءٍ عِنْدَهُمْ، وَلَا إِمْكَانَ لِحَادِثٍ إِلَّا بِالسَّبَبِ وَالْعِلَّةِ.",
       "Onlara göre hiçbir şey sebepsiz var olmaz, hiçbir olay sebep ve illet olmadan mümkün değildir."
      ],
      [
       "فَكَانَتِ الْمُعْجِزَاتُ الَّتِي أَكْرَمَ اللهُ بِهَا سَيِّدَنَا عِيسَى عِلَاجًا لِلْعَقْلِ الْمَادِّيِّ الضَّيِّقِ، وَحَاجَةَ الْعَصْرِ وَنِدَاءَ الزَّمَانِ.",
       "Allah'ın efendimiz Îsâ'ya ikram ettiği mucizeler, dar maddeci akla bir ilaç, çağın bir ihtiyacı ve zamanın bir çağrısı oldu."
      ],
      [
       "وَأَمْعَنَ الْيَهُودُ فِي الْوُقُوفِ عِنْدَ الظَّاهِرِ، وَالتَّمَسُّكِ بِالْقُشُورِ دُونَ اللُّبَابِ، وَالتَّشَبُّثِ بِالْمَظَاهِرِ دُونَ الْحَقِيقَةِ.",
       "Yahudiler görünende takılıp kalmakta, özü bırakıp kabuğa sarılmakta, hakikati bırakıp görüntülere tutunmakta iyice ileri gittiler."
      ],
      [
       "وَغَلَوْا فِي تَقْدِيسِ الْعُنْصُرِ وَالدَّمِ، وَفِي حُبِّ الْمَالِ وَالْمَادَّةِ، وَانْهَمَكُوا فِي الْحَيَاةِ انْهِمَاكًا زَائِدًا.",
       "Soyu ve kanı kutsamakta, mala ve maddeye düşkünlükte aşırı gittiler; dünya hayatına aşırı derecede daldılar."
      ],
      [
       "وَقَسَتْ قُلُوبُهُمْ، وَجَفَّتْ طِبَاعُهُمْ، فَلَا يَرِقُّونَ لِلضَّعِيفِ، وَلَا يَعْطِفُونَ عَلَى الْفَقِيرِ.",
       "Kalpleri katılaştı, mizaçları kurudu; zayıfa acımaz, fakire şefkat göstermez oldular."
      ],
      [
       "وَيُعَامِلُونَ مَنْ لَا يَجْرِي فِي عُرُوقِهِ الدَّمُ الْإِسْرَائِيلِيُّ مُعَامَلَةَ الْحَيَوَانَاتِ وَالْكِلَابِ أَوِ الْجَمَادَاتِ الَّتِي لَا رُوحَ فِيهَا.",
       "Damarlarında İsrailoğulları kanı akmayanlara hayvanlara, köpeklere ya da ruhsuz cansız varlıklara davranır gibi davranıyorlardı."
      ],
      [
       "وَيَخْضَعُونَ لِلْأَقْوِيَاءِ الْأَغْنِيَاءِ، وَيَتَجَبَّرُونَ عَلَى الصِّغَارِ الْفُقَرَاءِ، وَيَقْسُونَ عِنْدَ الْقُدْرَةِ، وَيَلِينُونَ عِنْدَ الْعَجْزِ.",
       "Güçlü zenginlere boyun eğer, küçük ve fakirlere zorbalık eder; güçleri yettiğinde sertleşir, aciz kaldıklarında yumuşarlardı."
      ],
      [
       "قَدْ وَلَّدَتْ فِيهِمْ حَيَاةُ الذُّلِّ وَالْعُبُودِيَّةِ الَّتِي عَاشُوهَا فِي الْحُكْمِ الرُّومَانِيِّ الَّذِي دَامَ مُدَّةً طَوِيلَةً فِي سُورِيَا وَفِلَسْطِينَ: النِّفَاقَ وَالْخُنُوعَ وَالتَّحَيُّلَ وَالدَّهَاءَ، وَاللُّجُوءَ إِلَى الْمُؤَامَرَةِ وَالسِّرِّيَّةِ.",
       "Suriye ve Filistin'de uzun süren Roma yönetimi altında yaşadıkları zillet ve kölelik hayatı onlarda ikiyüzlülük, boyun eğiklik, hilekârlık, kurnazlık ve komploya, gizliliğe başvurma huylarını doğurmuştu."
      ]
     ]
    },
    {
     "n": 4,
     "title_ar": "اسْتِخْفَافٌ وَتَمَرُّدٌ",
     "title_tr": "Hafife alma ve isyan",
     "s": [
      [
       "وَوُلِدَ فِيهِمُ الِاسْتِخْفَافُ بِالْأَنْبِيَاءِ، وَالِاجْتِرَاءُ عَلَيْهِمْ، حَتَّى بِالْقَتْلِ، وَالتَّعَامُلُ بِالرِّبَا، وَالْعَبَثُ بِالتَّعَالِيمِ الدِّينِيَّةِ، وَالْغِلْظَةُ وَالْجَفَافُ، وَضَعْفُ الْعَاطِفَةِ الْإِنْسَانِيَّةِ.",
       "Onlarda peygamberleri hafife almak, onlara karşı öldürecek kadar cüretkâr olmak, faizle iş görmek, dinî öğretilerle oynamak, kabalık, katılık ve insani duygu zayıflığı doğdu."
      ],
      [
       "وَتَجَرَّدَتْ قُلُوبُ كَثِيرٍ مِنْهُمْ مِنْ حُبِّ اللهِ الْخَالِصِ، وَالرَّحْمَةِ عَلَى الْإِنْسَانِ، مَهْمَا كَانَ أَصْلُهُ وَفَصْلُهُ، وَاحْتِرَامِ الْإِنْسَانِيَّةِ.",
       "Pek çoğunun kalbi, Allah'a halis sevgiden, soyu sopu ne olursa olsun insana merhametten ve insanlığa saygıdan boşaldı."
      ],
      [
       "وَكَادُوا يَنْسَوْنَ مَعَانِيَ الْمُوَاسَاةِ وَالْمُسَاوَاةِ وَالْبِرِّ وَالْكَرَمِ.",
       "Yardımlaşma, eşitlik, iyilik ve cömertlik kavramlarını neredeyse unuttular."
      ],
      [
       "وَكَانُوا يُؤْمِنُونَ بِالنُّبُوءَاتِ وَالرِّسَالَاتِ، وَقَدْ كَثُرَتْ فِيهِمُ الْأَنْبِيَاءُ، وَزَخَرَتْ صُحُفُهُمْ بِأَخْبَارِهِمْ.",
       "Nübüvvetlere ve risaletlere inanıyorlardı; aralarında peygamberler çoğalmış, sahifeleri onların haberleriyle dolup taşmıştı."
      ],
      [
       "وَلٰكِنَّهُمْ قَدْ أَصْبَحُوا فِي الزَّمَنِ الْأَخِيرِ لَا يُؤْمِنُونَ إِلَّا بِمَا وَافَقَ هَوَاهُمْ، وَأَيَّدَهُمْ فِي سِيَرِهِمْ وَأَخْلَاقِهِمْ، آمِنِينَ مِنْ نَقْدِهِمْ وَحِسَابِهِمْ.",
       "Ama son zamanlarda yalnızca heveslerine uyan, gidişatlarını ve ahlaklarını destekleyen, kendilerini eleştiriden ve hesaptan emin kılan şeylere inanır olmuşlardı."
      ],
      [
       "وَدَعَاهُمْ إِلَى الدِّينِ الصَّحِيحِ، وَالْحَقِّ الصَّرِيحِ، وَإِصْلَاحِ الْحَالِ، عَادَوْهُ وَحَارَبُوهُ.",
       "Onları doğru dine, apaçık hakka ve hallerini düzeltmeye çağırana düşman oldular ve onunla savaştılar."
      ],
      [
       "وَكَانَتْ عِنْدَهُمْ جُرْأَةٌ عَلَى الْبُهْتِ وَالِافْتِرَاءِ، وَكِتْمَانِ الْحَقِّ، وَشَهَادَةِ الزُّورِ.",
       "İftira atmaya, yalan uydurmaya, hakkı gizlemeye ve yalancı şahitlik etmeye karşı bir cüretleri vardı."
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "👶",
   "title_ar": "وِلَادَةٌ تَتَحَدَّى الْمَأْلُوفَ",
   "title_tr": "Alışılmışa meydan okuyan bir doğum",
   "pre": {
    "predict": {
     "prompt_tr": "İsrailoğulları bir zamanlar tevhid inancıyla üstün tutulmuştu; sonra soylarıyla övünmeye başladılar. Sence Îsâ'nın sade, fakir yaşayışı onlara ne mesaj verdi?",
     "options": [
      [
       "أَنَّ الْكَرَامَةَ بِالتَّقْوَى لَا بِالنَّسَبِ",
       "Değerin soyla değil takvayla olduğunu"
      ],
      [
       "أَنَّ الْغِنَى أَهَمُّ شَيْءٍ",
       "Zenginliğin en önemli şey olduğunu"
      ],
      [
       "أَنَّ النَّسَبَ يَكْفِي",
       "Soyun yeterli olduğunu"
      ]
     ]
    },
    "vocab": [
     [
      "التَّوْحِيدُ",
      "tevhid, Allah'ı bir bilmek",
      "☝️"
     ],
     [
      "الْعِجْلُ",
      "buzağı",
      "🐂"
     ],
     [
      "النَّسَبُ",
      "soy",
      "🌳"
     ],
     [
      "الْمَهْدُ",
      "beşik",
      "🛏️"
     ],
     [
      "الْغُرَبَاءُ",
      "garipler, yabancılar",
      "🧳"
     ],
     [
      "يُوَاسِي",
      "teselli eder, yardım eder",
      "🤝"
     ]
    ]
   },
   "stop": {
    "section": 8,
    "after": 1,
    "prompt_tr": "Mesih'in doğumu ve yaşayışı, Yahudilerin inandığı ölçülere meydan okuyordu. Sence nasıl bir hayat yaşadı?",
    "options": [
     [
      "عَاشَ فَقِيرًا مَعَ الضُّعَفَاءِ",
      "Zayıflarla birlikte fakir bir hayat yaşadı"
     ],
     [
      "عَاشَ فِي قُصُورِ الْأَغْنِيَاءِ",
      "Zenginlerin saraylarında yaşadı"
     ],
     [
      "صَارَ مَلِكًا",
      "Kral oldu"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "امْتَازَ بَنُو إِسْرَائِيلَ بِعَقِيدَةِ التَّوْحِيدِ.",
     "تَسَرَّبَتْ إِلَيْهِمْ عَقَائِدُ زَائِفَةٌ.",
     "أَدَلُّوا بِنَسَبِهِمْ وَقَالُوا: نَحْنُ أَبْنَاءُ اللهِ.",
     "وُلِدَ الْمَسِيحُ وَكَلَّمَ النَّاسَ فِي الْمَهْدِ.",
     "عَاشَ مَعَ الضُّعَفَاءِ وَلَمْ يُفَرِّقْ بَيْنَ النَّاسِ."
    ],
    "questions": [
     {
      "q": "بِمَ امْتَازَ بَنُو إِسْرَائِيلَ عَنِ الْأُمَمِ الْمُعَاصِرَةِ؟",
      "qt": "İsrailoğulları çağdaş ümmetlerden neyle ayrılıyordu?",
      "o": [
       "بِعَقِيدَةِ التَّوْحِيدِ",
       "بِكَثْرَةِ الْمَالِ",
       "بِقُوَّةِ الْجَيْشِ"
      ],
      "ot": [
       "Tevhid inancıyla",
       "Mallarının çokluğuyla",
       "Ordularının gücüyle"
      ],
      "a": 0,
      "ev": [
       "5.0"
      ]
     },
     {
      "q": "كَيْفَ تَسَرَّبَتْ إِلَيْهِمُ الْعَقَائِدُ الزَّائِفَةُ؟",
      "qt": "Sahte inançlar onlara nasıl sızdı?",
      "o": [
       "بِالِاخْتِلَاطِ بِالشُّعُوبِ الْوَثَنِيَّةِ",
       "بِقِرَاءَةِ التَّوْرَاةِ",
       "بِاتِّبَاعِ الْأَنْبِيَاءِ"
      ],
      "ot": [
       "Putperest kavimlerle karışarak",
       "Tevrat'ı okuyarak",
       "Peygamberlere uyarak"
      ],
      "a": 0,
      "ev": [
       "6.0"
      ]
     },
     {
      "q": "مَاذَا كَانُوا يَقُولُونَ عَنْ أَنْفُسِهِمْ؟",
      "qt": "Kendileri hakkında ne diyorlardı?",
      "o": [
       "نَحْنُ أَبْنَاءُ اللهِ وَأَحِبَّاؤُهُ",
       "نَحْنُ عِبَادٌ ضُعَفَاءُ",
       "نَحْنُ خَاسِرُونَ"
      ],
      "ot": [
       "Biz Allah'ın oğulları ve sevgilileriyiz",
       "Biz zayıf kullarız",
       "Biz zarardayız"
      ],
      "a": 0,
      "ev": [
       "7.1"
      ]
     },
     {
      "q": "أَيْنَ كَلَّمَ الْمَسِيحُ النَّاسَ أَوَّلَ مَرَّةٍ؟",
      "qt": "Mesih insanlarla ilk kez nerede konuştu?",
      "o": [
       "فِي الْمَهْدِ",
       "فِي السُّوقِ",
       "فِي الْقَصْرِ"
      ],
      "ot": [
       "Beşikte",
       "Çarşıda",
       "Sarayda"
      ],
      "a": 0,
      "ev": [
       "8.2"
      ]
     },
     {
      "q": "هَلْ كَانَ الْمَسِيحُ يُفَرِّقُ بَيْنَ الْفَقِيرِ وَالْغَنِيِّ؟",
      "qt": "Mesih fakirle zengin arasında ayrım yapar mıydı?",
      "o": [
       "لَا، لَمْ يَكُنْ يُفَرِّقُ",
       "نَعَمْ، كَانَ يُكْرِمُ الْأَغْنِيَاءَ",
       "كَانَ يَبْتَعِدُ عَنِ الْفُقَرَاءِ"
      ],
      "ot": [
       "Hayır, ayrım yapmazdı",
       "Evet, zenginlere ikram ederdi",
       "Fakirlerden uzak dururdu"
      ],
      "a": 0,
      "ev": [
       "8.4"
      ]
     }
    ],
    "focus": {
     "title": "كَانَ + muzari: geçmişte alışkanlık",
     "explain": "<b>كَانَ</b> ile birlikte muzari fiil kullanılınca geçmişte süregelen ya da alışkanlık hâline gelmiş bir durumu anlatır (Türkçedeki «-ardı / -yordu»): <span class='ar-inline'>كَانُوا يَقُولُونَ</span> (derlerdi), <span class='ar-inline'>كَانُوا يُؤْمِنُونَ</span> (inanırlardı). <span class='ar-inline'>كَانَ</span> özneye göre çekimlenir; muzari fiil de özneye uyar: <span class='ar-inline'>كَانَتْ تَقُولُ</span>, <span class='ar-inline'>كَانُوا يَقُولُونَ</span>.",
     "examples": [
      "وَكَانُوا يُؤْمِنُونَ بِالنُّبُوءَاتِ وَالرِّسَالَاتِ",
      "وَكَانَ الْيَهُودُ لَا يَعْمَلُونَ شَيْئًا يَوْمَ السَّبْتِ",
      "وَكَانَ سَيِّدُنَا عِيسَى يَقْضِي أَكْثَرَ أَوْقَاتِهِ فِي السِّيَاحَةِ"
     ],
     "items": [
      {
       "q": "كَانُوا ____ : «نَحْنُ أَبْنَاءُ اللهِ».",
       "o": [
        "يَقُولُونَ",
        "قَالَ",
        "يَقُولُ"
       ],
       "a": 0
      },
      {
       "q": "كَانَ الْمَسِيحُ ____ الضُّعَفَاءَ.",
       "o": [
        "يُوَاسِي",
        "يُوَاسُونَ",
        "تُوَاسِي"
       ],
       "a": 0
      },
      {
       "q": "«كَانُوا يُؤْمِنُونَ» = …",
       "o": [
        "İnanırlardı",
        "İnanacaklar",
        "İnanmadılar"
       ],
       "a": 0
      },
      {
       "q": "«Mesih zenginlerin meclislerine gitmezdi.»",
       "o": [
        "كَانَ الْمَسِيحُ لَا يَذْهَبُ إِلَى مَجَالِسِ الْأَغْنِيَاءِ",
        "سَيَذْهَبُ الْمَسِيحُ إِلَى مَجَالِسِ الْأَغْنِيَاءِ",
        "ذَهَبَ الْمَسِيحُ إِلَى مَجَالِسِ الْأَغْنِيَاءِ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "كَانَ بَنُو إِسْرَائِيلَ يَمْتَازُونَ بِعَقِيدَةِ {التَّوْحِيدِ}، ثُمَّ أَدَلُّوا بِ{النَّسَبِ}. وَوُلِدَ الْمَسِيحُ وَكَلَّمَ النَّاسَ فِي {الْمَهْدِ}، وَنَشَأَ عِنْدَ أُمٍّ {فَقِيرَةٍ}، وَلَا يُفَرِّقُ بَيْنَ فَقِيرٍ وَ{غَنِيٍّ}."
    },
    "think": {
     "q": "لِمَاذَا وَصَفَ الْكِتَابُ حَيَاةَ الْمَسِيحِ بِأَنَّهَا «تَحَدٍّ»؟",
     "qt": "Kitap Mesih'in hayatını neden bir «meydan okuma» olarak niteliyor?",
     "model": "Toplum soya, zenginliğe ve makama değer veriyordu; Mesih ise alışılmamış bir şekilde doğdu, fakir bir annenin yanında büyüdü, zenginlerden uzak durup zayıflarla birlikte yaşadı. Böylece hayatı, toplumun «değerli» saydığı her şeyin aslında Allah katında ölçü olmadığını gösterdi."
    },
    "retell": [
     "عَقِيدَةُ التَّوْحِيدِ",
     "عَقَائِدُ زَائِفَةٌ",
     "أَبْنَاءُ اللهِ",
     "كَلَّمَ النَّاسَ فِي الْمَهْدِ",
     "أُمٌّ فَقِيرَةٌ",
     "يُوَاسِي الضُّعَفَاءَ"
    ],
    "quran": [
     {
      "ar": "يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَنِّي فَضَّلْتُكُمْ عَلَى الْعَالَمِينَ",
      "ref": "Bakara 2:47",
      "tr": "Ey İsrailoğulları! Size verdiğim nimetimi ve sizi âlemlere üstün kıldığımı hatırlayın.",
      "inText": "«يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ …»"
     },
     {
      "ar": "وَقَالَتِ الْيَهُودُ وَالنَّصَارَىٰ نَحْنُ أَبْنَاءُ اللَّهِ وَأَحِبَّاؤُهُ",
      "ref": "Mâide 5:18",
      "tr": "Yahudiler ve Hristiyanlar «Biz Allah'ın oğulları ve sevgilileriyiz» dediler.",
      "inText": "«نَحْنُ أَبْنَاءُ اللهِ وَأَحِبَّاؤُهُ»"
     },
     {
      "ar": "وَقَالُوا لَنْ تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَعْدُودَةً",
      "ref": "Bakara 2:80",
      "tr": "«Ateş bize sayılı birkaç gün dışında dokunmayacak» dediler.",
      "inText": "«لَنْ تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَعْدُودَةً»"
     }
    ]
   },
   "sections": [
    {
     "n": 5,
     "title_ar": "نِعْمَةُ اللهِ عَلَى بَنِي إِسْرَائِيلَ",
     "title_tr": "Allah'ın İsrailoğullarına nimeti",
     "s": [
      [
       "وَكَانُوا أُمَّةً تَمْتَازُ عَنِ الْأُمَمِ الْمُعَاصِرَةِ لَهُمْ بِعَقِيدَةِ التَّوْحِيدِ، وَذٰلِكَ سِرُّ تَفْضِيلِهِمْ عَلَى غَيْرِهِمْ حِينَئِذٍ.",
       "Onlar, çağdaşları olan ümmetlerden tevhid inancıyla ayrılan bir ümmetti; o zaman başkalarına üstün tutulmalarının sırrı buydu."
      ],
      [
       "وَقَدْ قَالَ اللهُ تَعَالَى: «يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَنِّي فَضَّلْتُكُمْ عَلَى الْعَالَمِينَ».",
       "Allah Teâlâ şöyle buyurmuştur: «Ey İsrailoğulları! Size verdiğim nimetimi ve sizi (bir zamanlar) âlemlere üstün kıldığımı hatırlayın.»"
      ]
     ]
    },
    {
     "n": 6,
     "title_ar": "نُكْرَانٌ لِلْجَمِيلِ",
     "title_tr": "İyiliğe nankörlük",
     "s": [
      [
       "وَلٰكِنْ تَسَرَّبَ إِلَيْهِمْ بِحُكْمِ الِاخْتِلَاطِ وَمُجَاوَرَةِ الشُّعُوبِ الْمُشْرِكَةِ الْوَثَنِيَّةِ، وَبِطُولِ الْعَهْدِ بِتَعَالِيمِ الْأَنْبِيَاءِ، عَقَائِدُ زَائِفَةٌ، وَعَادَاتٌ جَاهِلِيَّةٌ.",
       "Ama müşrik, putperest kavimlerle karışmaları ve onlara komşu olmaları, peygamberlerin öğretilerinden uzun zaman geçmesi yüzünden onlara sahte inançlar ve cahiliye âdetleri sızdı."
      ],
      [
       "وَقَدْ عَبَدُوا الْعِجْلَ فِي مِصْرَ، وَبَالَغُوا فِي تَقْدِيسِ عُزَيْرٍ وَتَعْظِيمِهِ، حَتَّى تَخَطَّوْا بِهِ حُدُودَ الْبَشَرِيَّةِ.",
       "Mısır'da buzağıya taptılar; Üzeyr'i kutsamakta ve yüceltmekte o kadar ileri gittiler ki onu insanlık sınırlarının ötesine taşıdılar."
      ],
      [
       "وَبَلَغَتْ بِهِمُ الْوَقَاحَةُ إِلَى أَنْ نَسَبُوا بَعْضَ أَعْمَالِ الشِّرْكِ وَالْوَثَنِيَّةِ، وَأَعْمَالَ السِّحْرِ وَالْكُفْرِ، وَالْأَفْعَالَ الشَّنِيعَةَ، إِلَى بَعْضِ الْأَنْبِيَاءِ، وَلَمْ يَتَّقُوا اللهَ فِيهِمْ.",
       "Küstahlıkları, şirk ve putperestlik işlerini, büyü ve küfür işlerini, çirkin fiilleri bazı peygamberlere isnat edecek kadar ileri gitti; onlar hakkında Allah'tan korkmadılar."
      ]
     ]
    },
    {
     "n": 7,
     "title_ar": "زَهْوٌ وَإِدْلَالٌ",
     "title_tr": "Kibir ve övünme",
     "s": [
      [
       "وَكَانُوا رَغْمَ كُلِّ ذٰلِكَ شَدِيدِي الْإِدْلَالِ بِالنَّسَبِ، شَدِيدِي الِاعْتِدَادِ عَلَى الْأَمَانِيِّ وَالْأَحْلَامِ.",
       "Bütün bunlara rağmen soylarıyla çok övünür, kuru umutlara ve hayallere çok güvenirlerdi."
      ],
      [
       "يَقُولُونَ: «نَحْنُ أَبْنَاءُ اللهِ وَأَحِبَّاؤُهُ»، وَيَقُولُونَ: «لَنْ تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَعْدُودَةً».",
       "«Biz Allah'ın oğulları ve sevgilileriyiz» derler, «Ateş bize sayılı birkaç gün dışında dokunmayacak» derlerdi."
      ]
     ]
    },
    {
     "n": 8,
     "title_ar": "وِلَادَةُ الْمَسِيحِ تَتَحَدَّى الْمَحْسُوسَ الْمَعْرُوفَ",
     "title_tr": "Mesih'in doğumu bilinen duyulur düzene meydan okuyor",
     "s": [
      [
       "وَكَانَتْ وِلَادَةُ الْمَسِيحِ وَحَيَاتُهُ وَدَعْوَتُهُ وَمَعِيشَتُهُ تَحَدِّيًا لِكُلِّ ذٰلِكَ.",
       "Mesih'in doğumu, hayatı, daveti ve yaşayışı bütün bunlara bir meydan okumaydı."
      ],
      [
       "تَحَدِّيًا لِلْمَحْسُوسِ الْمُقَرَّرِ، تَحَدِّيًا لِلْأَعْرَافِ الشَّائِعَةِ، وَالْعَادَاتِ الْمُتَّبَعَةِ، وَالْقَوَانِينِ الْمَرْسُومَةِ، وَالْمُثُلِ الْعُلْيَا الَّتِي يُؤْمِنُ بِهَا الْيَهُودُ، وَالْغَايَاتِ الَّتِي يَتَنَافَسُونَ فِيهَا وَيَتَقَاتَلُونَ عَلَيْهَا.",
       "Yerleşik duyulur düzene, yaygın örflere, uyulan âdetlere, çizilmiş kanunlara, Yahudilerin inandığı yüce ideallere, uğrunda yarıştıkları ve birbirleriyle çarpıştıkları hedeflere bir meydan okumaydı."
      ],
      [
       "فَوُلِدَ مِنْ طَرِيقَةٍ غَيْرِ مَأْلُوفَةٍ، وَكَلَّمَ النَّاسَ فِي الْمَهْدِ، وَنَشَأَ فِي أَحْضَانِ أُمٍّ فَقِيرَةٍ مُبْتَذَلَةٍ.",
       "Alışılmamış bir yolla doğdu, beşikteyken insanlarla konuştu ve fakir, mütevazı bir annenin kucağında büyüdü."
      ],
      [
       "وَعَاشَ فِي جَوٍّ مَلِيءٍ بِالطَّعْنِ وَالْقَدْحِ، بَعِيدٍ عَنْ مَظَاهِرِ الْعَظَمَةِ وَالْغِنَى وَمَجَالِسِ الْأَغْنِيَاءِ.",
       "Dil uzatma ve kötülemelerle dolu, büyüklük ve zenginlik görüntülerinden ve zenginlerin meclislerinden uzak bir ortamda yaşadı."
      ],
      [
       "وَيُؤَاكِلُهُمْ، وَيَحْنُو عَلَيْهِمْ، وَيُوَاسِي الضُّعَفَاءَ وَالْغُرَبَاءَ، وَلَا يُفَرِّقُ بَيْنَ فَقِيرٍ وَغَنِيٍّ، وَحَاكِمٍ وَمَحْكُومٍ، وَشَرِيفٍ وَوَضِيعٍ.",
       "(Halkla) birlikte yemek yer, onlara şefkat gösterir, zayıfları ve garipleri teselli eder; fakirle zengin, yöneten ile yönetilen, soylu ile sıradan arasında ayrım yapmazdı."
      ]
     ]
    }
   ]
  },
  {
   "id": 4,
   "emoji": "🕊️",
   "title_ar": "الْمُعْجِزَاتُ وَالدَّعْوَةُ",
   "title_tr": "Mucizeler ve davet",
   "pre": {
    "predict": {
     "prompt_tr": "Îsâ, doktorların iyileştiremediği hastaları Allah'ın izniyle iyileştiriyordu. Sence herkes ona inandı mı?",
     "options": [
      [
       "لَا، كَذَّبَهُ كَثِيرٌ مِنْهُمْ وَعَادَوْهُ",
       "Hayır, birçoğu onu yalanlayıp ona düşman oldu"
      ],
      [
       "نَعَمْ، آمَنَ بِهِ الْجَمِيعُ",
       "Evet, herkes iman etti"
      ],
      [
       "لَمْ يَعْلَمْ بِهِ أَحَدٌ",
       "Kimse duymadı"
      ]
     ]
    },
    "vocab": [
     [
      "الْإِنْجِيلُ",
      "İncil",
      "📖"
     ],
     [
      "الْأَكْمَهُ",
      "doğuştan kör",
      "🙈"
     ],
     [
      "الْأَبْرَصُ",
      "alacalı (deri hastası)",
      "🩹"
     ],
     [
      "الطِّينُ",
      "çamur",
      "🏺"
     ],
     [
      "الطَّيْرُ",
      "kuş",
      "🐦"
     ],
     [
      "يَدَّخِرُ",
      "biriktirir, saklar",
      "🫙"
     ]
    ]
   },
   "stop": {
    "section": 9,
    "after": 1,
    "prompt_tr": "Îsâ hastaları iyileştiriyor, ölüleri diriltiyordu. Sence çamurla ilgili hangi mucizesi vardı?",
    "options": [
     [
      "يَصْنَعُ مِنَ الطِّينِ طَيْرًا فَيَطِيرُ بِإِذْنِ اللهِ",
      "Çamurdan kuş yapar, o da Allah'ın izniyle uçardı"
     ],
     [
      "يَبْنِي مِنَ الطِّينِ قَصْرًا",
      "Çamurdan saray yapardı"
     ],
     [
      "يَصْنَعُ أَصْنَامًا",
      "Put yapardı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "آتَاهُ اللهُ الْإِنْجِيلَ وَأَيَّدَهُ بِرُوحِ الْقُدُسِ.",
     "شَفَى الْمَرْضَى وَأَحْيَا الْمَوْتَى بِإِذْنِ اللهِ.",
     "دَعَا الْيَهُودَ إِلَى رُوحِ الدِّينِ وَالتَّوْحِيدِ.",
     "نَصَبَ الْيَهُودُ لَهُ الْحَرْبَ.",
     "طَعَنُوا فِي أُمِّهِ مَرْيَمَ وَطَارَدُوهُ."
    ],
    "questions": [
     {
      "q": "مَا الْكِتَابُ الَّذِي آتَاهُ اللهُ عِيسَى؟",
      "qt": "Allah Îsâ'ya hangi kitabı verdi?",
      "o": [
       "الْإِنْجِيلَ",
       "التَّوْرَاةَ",
       "الزَّبُورَ"
      ],
      "ot": [
       "İncil'i",
       "Tevrat'ı",
       "Zebur'u"
      ],
      "a": 0,
      "ev": [
       "9.0"
      ]
     },
     {
      "q": "بِإِذْنِ مَنْ كَانَ عِيسَى يُحْيِي الْمَوْتَى؟",
      "qt": "Îsâ ölüleri kimin izniyle diriltiyordu?",
      "o": [
       "بِإِذْنِ اللهِ",
       "بِقُوَّتِهِ هُوَ",
       "بِعِلْمِ الطِّبِّ"
      ],
      "ot": [
       "Allah'ın izniyle",
       "Kendi gücüyle",
       "Tıp ilmiyle"
      ],
      "a": 0,
      "ev": [
       "9.1"
      ]
     },
     {
      "q": "مَاذَا كَانَ عِيسَى يُخْبِرُ النَّاسَ بِهِ؟",
      "qt": "Îsâ insanlara neyi haber veriyordu?",
      "o": [
       "بِمَا يَأْكُلُونَهُ وَيَدَّخِرُونَهُ فِي بُيُوتِهِمْ",
       "بِأَسْعَارِ السُّوقِ",
       "بِأَخْبَارِ الْمُلُوكِ"
      ],
      "ot": [
       "Ne yediklerini ve evlerinde ne biriktirdiklerini",
       "Çarşıdaki fiyatları",
       "Kralların haberlerini"
      ],
      "a": 0,
      "ev": [
       "9.3"
      ]
     },
     {
      "q": "إِلَى مَاذَا دَعَا عِيسَى الْيَهُودَ؟",
      "qt": "Îsâ Yahudileri neye çağırdı?",
      "o": [
       "إِلَى رُوحِ الدِّينِ وَالتَّوْحِيدِ الْخَالِصِ",
       "إِلَى جَمْعِ الْمَالِ",
       "إِلَى الْحَرْبِ"
      ],
      "ot": [
       "Dinin ruhuna ve halis tevhide",
       "Mal toplamaya",
       "Savaşa"
      ],
      "a": 0,
      "ev": [
       "10.1"
      ]
     },
     {
      "q": "كَيْفَ تَنَاوَلَ الْيَهُودُ أُمَّهُ مَرْيَمَ؟",
      "qt": "Yahudiler annesi Meryem'e nasıl dil uzattılar?",
      "o": [
       "بِالْقَذْفِ وَالطَّعْنِ",
       "بِالْمَدْحِ وَالثَّنَاءِ",
       "بِالْهَدَايَا"
      ],
      "ot": [
       "İftira ve karalamayla",
       "Övgüyle",
       "Hediyelerle"
      ],
      "a": 0,
      "ev": [
       "11.2"
      ]
     }
    ],
    "focus": {
     "title": "أَفْعَلَ / يُفْعِلُ (IV. bab): أَحْيَا يُحْيِي",
     "explain": "IV. bab fiilleri mazide başta <b>أَ</b> ile gelir: <span class='ar-inline'>أَكْرَمَ، أَبْرَأَ، أَحْيَا، أَحَلَّ</span>. Muzaride ön ek ötreli olur: <span class='ar-inline'>يُكْرِمُ، يُبْرِئُ، يُحْيِي، يُحِلُّ</span>. Bu bab çoğu zaman «ettirgen» anlam verir: <span class='ar-inline'>حَيِيَ</span> (yaşadı) → <span class='ar-inline'>أَحْيَا</span> (yaşattı, diriltti). Mastarı <span class='ar-inline'>إِفْعَال</span> kalıbındadır: <span class='ar-inline'>إِكْرَامٌ، إِحْيَاءٌ</span>.",
     "examples": [
      "وَأَكْرَمَهُ اللهُ بِالنُّبُوَّةِ وَالْوَحْيِ",
      "وَيُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ، وَيُحْيِي الْمَوْتَى بِإِذْنِ اللهِ",
      "وَحَرَّمُوا مَا أَحَلَّهُ اللهُ"
     ],
     "items": [
      {
       "q": "أَحْيَا → (muzari) ____",
       "o": [
        "يُحْيِي",
        "يَحْيَا",
        "يُحَيِّي"
       ],
       "a": 0
      },
      {
       "q": "أَكْرَمَ → (muzari) ____",
       "o": [
        "يُكْرِمُ",
        "يَكْرُمُ",
        "يُكَرِّمُ"
       ],
       "a": 0
      },
      {
       "q": "عِيسَى ____ الْمَرْضَى بِإِذْنِ اللهِ.",
       "o": [
        "يُبْرِئُ",
        "بَرِئَ",
        "يَبْرَأُ"
       ],
       "a": 0
      },
      {
       "q": "«أَحْيَا» kelimesinin anlamı:",
       "o": [
        "diriltti",
        "yaşadı",
        "öldü"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "آتَى اللهُ عِيسَى {الْإِنْجِيلَ}، وَكَانَ يُبْرِئُ الْأَكْمَهَ وَ{الْأَبْرَصَ}، وَيُحْيِي {الْمَوْتَى} بِإِذْنِ اللهِ. وَدَعَا الْيَهُودَ إِلَى {التَّوْحِيدِ} الْخَالِصِ، فَنَصَبُوا لَهُ {الْحَرْبَ}."
    },
    "think": {
     "q": "لِمَاذَا كَانَ عِيسَى يَقُولُ دَائِمًا «بِإِذْنِ اللهِ»؟",
     "qt": "Îsâ mucizelerini anlatırken neden hep «Allah'ın izniyle» diyordu?",
     "model": "Çünkü mucizeleri yapan aslında Allah'tı; Îsâ yalnızca bir aracıydı. «Allah'ın izniyle» ifadesi, insanların onu ilah sanmasının önüne geçer ve tevhidi korur. Böylece mucizeler insanları Îsâ'ya tapmaya değil, Allah'a inanmaya yöneltmeliydi."
    },
    "personal": {
     "q": "كَانَ عِيسَى يُوَاسِي الْفُقَرَاءَ وَالْمَرْضَى. كَيْفَ تُسَاعِدُ أَنْتَ مَنْ يَحْتَاجُ؟",
     "qt": "Îsâ fakirlere ve hastalara destek olurdu. Sen ihtiyaç sahibine nasıl yardım edersin? Kısa bir Arapça cümle yaz.",
     "hint": [
      "أُسَاعِدُ …",
      "أَزُورُ الْمَرِيضَ …",
      "أُعْطِي الْفَقِيرَ …"
     ]
    },
    "retell": [
     "الْإِنْجِيلُ",
     "يُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ",
     "يُحْيِي الْمَوْتَى",
     "بِإِذْنِ اللهِ",
     "رُوحُ الدِّينِ",
     "نَصَبُوا لَهُ الْحَرْبَ"
    ],
    "quran": [
     {
      "ar": "وَتُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ بِإِذْنِي ۖ وَإِذْ تُخْرِجُ الْمَوْتَىٰ بِإِذْنِي",
      "ref": "Mâide 5:110",
      "tr": "Benim iznimle doğuştan körü ve alacalıyı iyileştiriyordun; benim iznimle ölüleri (mezardan) çıkarıyordun.",
      "inText": "«وَيُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ، وَيُحْيِي الْمَوْتَى بِإِذْنِ اللهِ»"
     },
     {
      "ar": "وَآتَيْنَاهُ الْإِنْجِيلَ فِيهِ هُدًى وَنُورٌ",
      "ref": "Mâide 5:46",
      "tr": "Ona içinde hidayet ve nur bulunan İncil'i verdik.",
      "inText": "«وَآتَاهُ الْإِنْجِيلَ»"
     }
    ]
   },
   "sections": [
    {
     "n": 9,
     "title_ar": "مُعْجِزَاتُ الْمَسِيحِ",
     "title_tr": "Mesih'in mucizeleri",
     "s": [
      [
       "وَأَكْرَمَهُ اللهُ بِالنُّبُوَّةِ وَالْوَحْيِ، وَآتَاهُ الْإِنْجِيلَ، وَأَيَّدَهُ بِرُوحِ الْقُدُسِ، وَالْمُعْجِزَاتِ الْبَاهِرَةِ.",
       "Allah onu peygamberlik ve vahiyle onurlandırdı, ona İncil'i verdi, onu Ruhu'l-Kudüs ile ve göz kamaştırıcı mucizelerle destekledi."
      ],
      [
       "يَشْفِي اللهُ بِهِ الْمَرْضَى الَّذِينَ عَجَزَ عَنْ مُدَاوَاتِهِمُ الْأَطِبَّاءُ، وَيُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ، وَيُحْيِي الْمَوْتَى بِإِذْنِ اللهِ.",
       "Allah onun eliyle, doktorların tedavi etmekten aciz kaldığı hastalara şifa veriyordu; o, doğuştan körü ve alacalıyı iyileştiriyor, Allah'ın izniyle ölüleri diriltiyordu."
      ],
      [
       "وَيَخْلُقُ لِلنَّاسِ مِنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ، فَيَنْفُخُ فِيهِ فَيَكُونُ طَيْرًا بِإِذْنِ اللهِ.",
       "İnsanlar için çamurdan kuş biçiminde bir şey yapıyor, ona üflüyor ve o Allah'ın izniyle kuş oluyordu."
      ],
      [
       "وَيُنَبِّئُ بِمَا يَأْكُلُهُ النَّاسُ وَيَدَّخِرُونَهُ فِي بُيُوتِهِمْ.",
       "İnsanların ne yediklerini ve evlerinde ne biriktirdiklerini haber veriyordu."
      ],
      [
       "فَيُعِيدُ بِكُلِّ ذٰلِكَ الثِّقَةَ بِمَا جَاءَ فِي التَّوْرَاةِ مِنْ خَبَرِ مُعْجِزَاتِ الرُّسُلِ، وَأَخْبَارِ الْقُدْرَةِ الْإِلٰهِيَّةِ، وَيُجَدِّدُ الْإِيمَانَ بِهَا.",
       "Bütün bunlarla, Tevrat'ta geçen peygamber mucizelerine ve ilahi kudretle ilgili haberlere duyulan güveni yeniden kazandırıyor, onlara imanı tazeliyordu."
      ],
      [
       "وَيُكَذِّبُ الْعِبَادَةَ لِلْحِسِّ وَالتَّجْرِبَةِ، فَقَامَ الَّذِينَ يُنْكِرُونَ سَعَةَ الْقُدْرَةِ الْإِلٰهِيَّةِ، وَقُوَّةَ الْإِرَادَةِ الرَّبَّانِيَّةِ، فَقَرَّرُوا أَنْ لَا جَدِيدَ، وَأَنْ لَا مَزِيدَ فِيمَا عَلِمُوهُ وَشَاهَدُوهُ.",
       "Duyuya ve deneye tapınmayı yalanlıyordu. İlahi kudretin genişliğini ve Rabbanî iradenin gücünü inkâr edenler ise kalkıp yeni hiçbir şeyin olmadığına, bildikleri ve gördüklerinin ötesinde hiçbir şeyin bulunmadığına karar verdiler."
      ]
     ]
    },
    {
     "n": 10,
     "title_ar": "دَعْوَتُهُ إِلَى الدِّينِ وَتَكْذِيبُ الْيَهُودِ",
     "title_tr": "Dine daveti ve Yahudilerin yalanlaması",
     "s": [
      [
       "وَكَذَّبَ الْيَهُودُ فِي كَثِيرٍ مِمَّا حَمَلُوهُ، وَغَلَوْا فِيهِ، وَحَرَّمُوا مَا أَحَلَّهُ اللهُ، وَأَحَلُّوا مَا حَرَّمَهُ اللهُ.",
       "Yahudiler kendilerine yüklenenlerin çoğunu yalanladılar, onda aşırı gittiler; Allah'ın helal kıldığını haram, haram kıldığını helal saydılar."
      ],
      [
       "فَقَامَ يَدْعُوهُمْ إِلَى رُوحِ الدِّينِ وَلُبَابِهِ، وَأَصْلِهِ وَحَقِيقَتِهِ.",
       "O da kalkıp onları dinin ruhuna ve özüne, aslına ve hakikatine çağırdı."
      ],
      [
       "وَالْحُبِّ لِلّٰهِ حُبًّا يَغْلِبُ عَلَى كُلِّ حُبٍّ، وَالرَّحْمَةِ عَلَى الْإِنْسَانِيَّةِ وَاحْتِرَامِهَا، وَالْمُوَاسَاةِ لِلْفُقَرَاءِ.",
       "Allah'ı her sevgiden üstün gelen bir sevgiyle sevmeye, insanlığa merhamet etmeye ve ona saygı duymaya, fakirlerle dayanışmaya çağırdı."
      ],
      [
       "وَيَدْعُوهُمْ إِلَى التَّوْحِيدِ الْخَالِصِ، وَرَفْضِ كُلِّ مَا دَخَلَ عَلَى دِينِ الْأَنْبِيَاءِ مِنْ عَادَاتٍ جَاهِلِيَّةٍ، وَعَقَائِدَ بَاطِلَةٍ.",
       "Onları halis tevhide ve peygamberlerin dinine sonradan giren bütün cahiliye âdetlerini ve batıl inançları reddetmeye çağırıyordu."
      ]
     ]
    },
    {
     "n": 11,
     "title_ar": "الْيَهُودُ يَنْصِبُونَ لَهُ الْحَرْبَ",
     "title_tr": "Yahudiler ona savaş açıyor",
     "s": [
      [
       "وَشَقَّ كُلُّ ذٰلِكَ عَلَى الْيَهُودِ، وَنَصَبُوا لَهُ الْحَرْبَ، وَرَمَوْهُ عَنْ قَوْسٍ وَاحِدَةٍ.",
       "Bütün bunlar Yahudilere ağır geldi; ona savaş açtılar ve hep birlikte ona saldırdılar."
      ],
      [
       "وَرَشَقُوهُ بِالسِّهَامِ وَالْقَذَائِفِ، وَتَنَاوَلُوهُ بِالسَّبِّ الْقَبِيحِ وَالْقَوْلِ الْبَذِيءِ.",
       "Ona oklar ve mermiler yağdırdılar (sözlü saldırılarda bulundular); çirkin sövgüler ve hayasız sözlerle ona dil uzattılar."
      ],
      [
       "وَتَنَاوَلُوا أُمَّهُ مَرْيَمَ الْبَتُولَ بِالْقَذْفِ وَالطَّعْنِ.",
       "İffetli annesi Meryem'e de iftira atıp dil uzattılar."
      ],
      [
       "وَعَاكَسُوهُ وَطَارَدُوهُ، وَأَهَاجُوا لَهُ الْأَوْبَاشَ، وَسَدُّوا فِي وَجْهِهِ الطُّرُقَ.",
       "Ona engel oldular, peşine düştüler, ayak takımını ona karşı kışkırttılar ve önündeki yolları kapattılar."
      ]
     ]
    }
   ]
  },
  {
   "id": 5,
   "emoji": "📜",
   "title_ar": "قِصَّتُهُ فِي الْقُرْآنِ",
   "title_tr": "Kur'an'da onun kıssası",
   "pre": {
    "predict": {
     "prompt_tr": "Bu ünitede kıssayı Âl-i İmrân sûresinden okuyacağız. Melekler Meryem'e bir müjde veriyor. Sence Meryem nasıl karşıladı?",
     "options": [
      [
       "تَعَجَّبَتْ: كَيْفَ يَكُونُ لِي وَلَدٌ وَلَمْ يَمْسَسْنِي بَشَرٌ؟",
       "Şaşırdı: Bana bir insan dokunmamışken nasıl çocuğum olur?"
      ],
      [
       "فَرِحَتْ وَلَمْ تَسْأَلْ",
       "Sevindi ve hiç soru sormadı"
      ],
      [
       "رَفَضَتِ الْبِشَارَةَ",
       "Müjdeyi reddetti"
      ]
     ]
    },
    "vocab": [
     [
      "يُبَشِّرُ",
      "müjdeler",
      "📣"
     ],
     [
      "كَلِمَةٌ",
      "kelime, söz",
      "💬"
     ],
     [
      "وَجِيهٌ",
      "itibarlı, saygın",
      "🎖️"
     ],
     [
      "كَهْلٌ",
      "olgun yaşta",
      "🧔"
     ],
     [
      "الْحَوَارِيُّونَ",
      "havariler",
      "👥"
     ],
     [
      "مَكَرَ",
      "tuzak kurdu",
      "🪤"
     ]
    ]
   },
   "stop": {
    "section": 12,
    "after": 2,
    "prompt_tr": "Melekler Meryem'e, adı Mesih olan bir oğulla müjde verdi. Sence Meryem ne dedi?",
    "options": [
     [
      "كَيْفَ يَكُونُ لِي وَلَدٌ وَلَمْ يَمْسَسْنِي بَشَرٌ؟",
      "Bana bir insan dokunmamışken nasıl çocuğum olur?"
     ],
     [
      "أُرِيدُ بِنْتًا",
      "Kız istiyorum"
     ],
     [
      "مَتَى يَكُونُ مَلِكًا؟",
      "Ne zaman kral olacak?"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "بَشَّرَتِ الْمَلَائِكَةُ مَرْيَمَ بِعِيسَى.",
     "تَعَجَّبَتْ مَرْيَمُ: أَنَّى يَكُونُ لِي وَلَدٌ؟",
     "جَاءَ عِيسَى بِالْآيَاتِ إِلَى بَنِي إِسْرَائِيلَ.",
     "قَالَ الْحَوَارِيُّونَ: نَحْنُ أَنْصَارُ اللهِ.",
     "رَفَعَ اللهُ عِيسَى إِلَيْهِ."
    ],
    "questions": [
     {
      "q": "بِمَ بَشَّرَتِ الْمَلَائِكَةُ مَرْيَمَ؟",
      "qt": "Melekler Meryem'i neyle müjdeledi?",
      "o": [
       "بِكَلِمَةٍ مِنَ اللهِ اسْمُهُ الْمَسِيحُ",
       "بِمَالٍ كَثِيرٍ",
       "بِبَيْتٍ جَدِيدٍ"
      ],
      "ot": [
       "Adı Mesih olan, Allah'tan bir kelimeyle",
       "Çok malla",
       "Yeni bir evle"
      ],
      "a": 0,
      "ev": [
       "12.2"
      ]
     },
     {
      "q": "مَتَى يُكَلِّمُ عِيسَى النَّاسَ؟",
      "qt": "Îsâ insanlarla ne zaman konuşacaktı?",
      "o": [
       "فِي الْمَهْدِ وَكَهْلًا",
       "بَعْدَ مَوْتِهِ فَقَطْ",
       "لَا يُكَلِّمُهُمْ أَبَدًا"
      ],
      "ot": [
       "Beşikte ve olgunluk çağında",
       "Sadece ölümünden sonra",
       "Hiç konuşmayacaktı"
      ],
      "a": 0,
      "ev": [
       "12.2"
      ]
     },
     {
      "q": "مَاذَا يَقُولُ اللهُ إِذَا قَضَى أَمْرًا؟",
      "qt": "Allah bir işe hükmettiğinde ne der?",
      "o": [
       "كُنْ",
       "انْتَظِرْ",
       "لَا"
      ],
      "ot": [
       "Ol!",
       "Bekle!",
       "Hayır!"
      ],
      "a": 0,
      "ev": [
       "12.3"
      ]
     },
     {
      "q": "مَنْ قَالَ: «نَحْنُ أَنْصَارُ اللهِ»؟",
      "qt": "«Biz Allah'ın yardımcılarıyız» diyen kimdi?",
      "o": [
       "الْحَوَارِيُّونَ",
       "الْكُفَّارُ",
       "الْمَلَائِكَةُ"
      ],
      "ot": [
       "Havariler",
       "İnkârcılar",
       "Melekler"
      ],
      "a": 0,
      "ev": [
       "12.8"
      ]
     },
     {
      "q": "مَاذَا قَالَ اللهُ لِعِيسَى عِنْدَمَا مَكَرَ بِهِ الْكُفَّارُ؟",
      "qt": "İnkârcılar tuzak kurunca Allah Îsâ'ya ne dedi?",
      "o": [
       "إِنِّي مُتَوَفِّيكَ وَرَافِعُكَ إِلَيَّ",
       "اهْرُبْ إِلَى مِصْرَ",
       "قَاتِلْهُمْ"
      ],
      "ot": [
       "Seni alacağım ve kendime yükselteceğim",
       "Mısır'a kaç",
       "Onlarla savaş"
      ],
      "a": 0,
      "ev": [
       "12.9"
      ]
     }
    ],
    "focus": {
     "title": "Nidâ: يَا + münâdâ («Ey …!»)",
     "explain": "Seslenmede <b>يَا</b> kullanılır. Tek kelimelik özel isim ötre ile okunur ve tenvin almaz: <span class='ar-inline'>يَا مَرْيَمُ</span>, <span class='ar-inline'>يَا عِيسَى</span>. Münâdâ bir tamlamanın ilk öğesi ise üstün alır: <span class='ar-inline'>يَا عِيسَى ابْنَ مَرْيَمَ</span>, <span class='ar-inline'>يَا بَنِي إِسْرَائِيلَ</span>. «Rabbim» derken <span class='ar-inline'>يَا</span> çoğu zaman düşer: <span class='ar-inline'>رَبِّ</span>, <span class='ar-inline'>رَبَّنَا</span>.",
     "examples": [
      "إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللهَ يُبَشِّرُكِ",
      "إِذْ قَالَ اللهُ يَا عِيسَى إِنِّي مُتَوَفِّيكَ",
      "قَالَتْ رَبِّ أَنَّى يَكُونُ لِي وَلَدٌ"
     ],
     "items": [
      {
       "q": "يَا ____ إِنَّ اللهَ يُبَشِّرُكِ.",
       "o": [
        "مَرْيَمُ",
        "مَرْيَمَ",
        "مَرْيَمٍ"
       ],
       "a": 0
      },
      {
       "q": "يَا بَنِي ____ اذْكُرُوا نِعْمَتِيَ.",
       "o": [
        "إِسْرَائِيلَ",
        "إِسْرَائِيلُ",
        "إِسْرَائِيلٌ"
       ],
       "a": 0
      },
      {
       "q": "يَا عِيسَى ____ مَرْيَمَ",
       "o": [
        "ابْنَ",
        "ابْنُ",
        "ابْنِ"
       ],
       "a": 0
      },
      {
       "q": "«رَبَّنَا آمَنَّا» = …",
       "o": [
        "Rabbimiz! İnandık",
        "Rabbimiz inandı",
        "Rabbimize inanmadık"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَتِ الْمَلَائِكَةُ: يَا {مَرْيَمُ} إِنَّ اللهَ يُبَشِّرُكِ بِكَلِمَةٍ مِنْهُ اسْمُهُ {الْمَسِيحُ}. وَيُكَلِّمُ النَّاسَ فِي {الْمَهْدِ}. وَقَالَ الْحَوَارِيُّونَ: نَحْنُ {أَنْصَارُ} اللهِ. وَقَالَ اللهُ: يَا عِيسَى إِنِّي مُتَوَفِّيكَ وَ{رَافِعُكَ} إِلَيَّ."
    },
    "think": {
     "q": "لِمَاذَا يُكَرِّرُ عِيسَى فِي الْآيَاتِ: «إِنَّ اللهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ»؟",
     "qt": "Îsâ âyetlerde neden «Allah benim de Rabbim, sizin de Rabbinizdir; O'na ibadet edin» diyor?",
     "model": "Çünkü getirdiği mucizeler insanları ona tapmaya götürebilirdi. Îsâ bu sözle kendisinin de bir kul olduğunu, ibadetin yalnızca Allah'a yapılacağını açıkça bildiriyor. Kur'an'a göre bütün peygamberlerin ortak çağrısı budur."
    },
    "retell": [
     "يَا مَرْيَمُ",
     "كَلِمَةٌ مِنْهُ",
     "فِي الْمَهْدِ وَكَهْلًا",
     "كُنْ فَيَكُونُ",
     "أَنْصَارُ اللهِ",
     "رَافِعُكَ إِلَيَّ"
    ],
    "quran": [
     {
      "ar": "إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِنْهُ اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ",
      "ref": "Âl-i İmrân 3:45",
      "tr": "Hani melekler: «Ey Meryem! Allah seni kendisinden bir kelimeyle müjdeliyor; adı Meryem oğlu Îsâ Mesih'tir» demişti.",
      "inText": "Metin, Âl-i İmrân 45–60. âyetleri aktarıyor."
     },
     {
      "ar": "فَأَشَارَتْ إِلَيْهِ ۖ قَالُوا كَيْفَ نُكَلِّمُ مَنْ كَانَ فِي الْمَهْدِ صَبِيًّا",
      "ref": "Meryem 19:29",
      "tr": "Meryem çocuğu işaret etti. «Beşikteki bir çocukla nasıl konuşuruz?» dediler.",
      "inText": "«وَيُكَلِّمُ النَّاسَ فِي الْمَهْدِ»"
     }
    ]
   },
   "sections": [
    {
     "n": 12,
     "title_ar": "قِصَّةُ عِيسَى فِي الْقُرْآنِ",
     "title_tr": "Kur'an'da Îsâ'nın kıssası",
     "s": [
      [
       "ثُمَّ أَرَادُوا قَتْلَهُ وَالتَّخَلُّصَ مِنْهُ، فَنَجَّاهُ اللهُ وَرَدَّ كَيْدَهُمْ عَلَيْهِمْ، وَرَفَعَهُ إِلَيْهِ مُكَرَّمًا مُطَهَّرًا.",
       "Sonra onu öldürmek ve ondan kurtulmak istediler; Allah onu kurtardı, tuzaklarını başlarına geçirdi ve onu şerefli ve temiz olarak kendi katına yükseltti."
      ],
      [
       "وَاسْمَعُوا قِصَّتَهُ فِي الْقُرْآنِ:",
       "Onun Kur'an'daki kıssasını dinleyin:"
      ],
      [
       "«إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللهَ يُبَشِّرُكِ بِكَلِمَةٍ مِنْهُ اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ وَجِيهًا فِي الدُّنْيَا وَالْآخِرَةِ وَمِنَ الْمُقَرَّبِينَ * وَيُكَلِّمُ النَّاسَ فِي الْمَهْدِ وَكَهْلًا وَمِنَ الصَّالِحِينَ».",
       "«Hani melekler şöyle demişti: 'Ey Meryem! Allah seni kendisinden bir kelimeyle müjdeliyor; adı Meryem oğlu Îsâ Mesih'tir. Dünyada ve ahirette itibarlıdır, (Allah'a) yakın kılınanlardandır. Beşikte de, yetişkinken de insanlarla konuşacak ve salihlerden olacaktır.'»"
      ],
      [
       "«قَالَتْ رَبِّ أَنَّى يَكُونُ لِي وَلَدٌ وَلَمْ يَمْسَسْنِي بَشَرٌ قَالَ كَذٰلِكِ اللهُ يَخْلُقُ مَا يَشَاءُ إِذَا قَضَى أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ».",
       "«Meryem: 'Rabbim! Bana hiçbir insan dokunmamışken nasıl çocuğum olabilir?' dedi. (Allah) buyurdu: 'Öyledir, Allah dilediğini yaratır. Bir işe hükmettiğinde ona sadece 'Ol!' der, o da oluverir.'»"
      ],
      [
       "«وَيُعَلِّمُهُ الْكِتَابَ وَالْحِكْمَةَ وَالتَّوْرَاةَ وَالْإِنْجِيلَ * وَرَسُولًا إِلَى بَنِي إِسْرَائِيلَ أَنِّي قَدْ جِئْتُكُمْ بِآيَةٍ مِنْ رَبِّكُمْ».",
       "«Ona kitabı, hikmeti, Tevrat'ı ve İncil'i öğretecek; onu İsrailoğullarına bir peygamber olarak gönderecek. (O şöyle diyecek:) 'Ben size Rabbinizden bir mucize getirdim.'»"
      ],
      [
       "«أَنِّي أَخْلُقُ لَكُمْ مِنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ فَأَنْفُخُ فِيهِ فَيَكُونُ طَيْرًا بِإِذْنِ اللهِ وَأُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ وَأُحْيِي الْمَوْتَى بِإِذْنِ اللهِ».",
       "«'Ben size çamurdan kuş biçiminde bir şey yapar, ona üflerim; o da Allah'ın izniyle kuş olur. Doğuştan körü ve alacalıyı iyileştiririm, Allah'ın izniyle ölüleri diriltirim.'»"
      ],
      [
       "«وَأُنَبِّئُكُمْ بِمَا تَأْكُلُونَ وَمَا تَدَّخِرُونَ فِي بُيُوتِكُمْ إِنَّ فِي ذٰلِكَ لَآيَةً لَكُمْ إِنْ كُنْتُمْ مُؤْمِنِينَ».",
       "«'Ne yediğinizi ve evlerinizde ne biriktirdiğinizi size haber veririm. Eğer inanıyorsanız bunda sizin için elbette bir ibret vardır.'»"
      ],
      [
       "«وَمُصَدِّقًا لِمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَلِأُحِلَّ لَكُمْ بَعْضَ الَّذِي حُرِّمَ عَلَيْكُمْ وَجِئْتُكُمْ بِآيَةٍ مِنْ رَبِّكُمْ فَاتَّقُوا اللهَ وَأَطِيعُونِ * إِنَّ اللهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ هٰذَا صِرَاطٌ مُسْتَقِيمٌ».",
       "«'Benden önceki Tevrat'ı doğrulayıcı olarak ve size haram kılınan bazı şeyleri helal kılmak için geldim. Size Rabbinizden bir mucize getirdim. Artık Allah'tan korkun ve bana itaat edin. Şüphesiz Allah benim de Rabbim, sizin de Rabbinizdir; O'na ibadet edin. İşte bu dosdoğru yoldur.'»"
      ],
      [
       "«فَلَمَّا أَحَسَّ عِيسَى مِنْهُمُ الْكُفْرَ قَالَ مَنْ أَنْصَارِي إِلَى اللهِ قَالَ الْحَوَارِيُّونَ نَحْنُ أَنْصَارُ اللهِ آمَنَّا بِاللهِ وَاشْهَدْ بِأَنَّا مُسْلِمُونَ * رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ».",
       "«Îsâ onlardaki inkârı sezince: 'Allah yolunda yardımcılarım kim?' dedi. Havariler: 'Biz Allah'ın yardımcılarıyız. Allah'a inandık; şahit ol ki biz Müslümanlarız. Rabbimiz! İndirdiğine inandık ve elçiye uyduk. Bizi şahitlerle beraber yaz' dediler.»"
      ],
      [
       "«وَمَكَرُوا وَمَكَرَ اللهُ وَاللهُ خَيْرُ الْمَاكِرِينَ * إِذْ قَالَ اللهُ يَا عِيسَى إِنِّي مُتَوَفِّيكَ وَرَافِعُكَ إِلَيَّ وَمُطَهِّرُكَ مِنَ الَّذِينَ كَفَرُوا».",
       "«(İnkârcılar) tuzak kurdular, Allah da (onların tuzaklarını boşa çıkaracak) tedbir aldı. Allah tedbir alanların en hayırlısıdır. Hani Allah şöyle demişti: 'Ey Îsâ! Seni vefat ettireceğim (alacağım), seni kendime yükselteceğim ve seni inkâr edenlerden temizleyeceğim.'»"
      ],
      [
       "«وَجَاعِلُ الَّذِينَ اتَّبَعُوكَ فَوْقَ الَّذِينَ كَفَرُوا إِلَى يَوْمِ الْقِيَامَةِ ثُمَّ إِلَيَّ مَرْجِعُكُمْ فَأَحْكُمُ بَيْنَكُمْ فِيمَا كُنْتُمْ فِيهِ تَخْتَلِفُونَ».",
       "«'Sana uyanları kıyamet gününe kadar inkâr edenlerin üstünde tutacağım. Sonra dönüşünüz banadır; ayrılığa düştüğünüz şeyler hakkında aranızda ben hüküm vereceğim.'»"
      ],
      [
       "«فَأَمَّا الَّذِينَ كَفَرُوا فَأُعَذِّبُهُمْ عَذَابًا شَدِيدًا فِي الدُّنْيَا وَالْآخِرَةِ وَمَا لَهُمْ مِنْ نَاصِرِينَ * وَأَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَيُوَفِّيهِمْ أُجُورَهُمْ وَاللهُ لَا يُحِبُّ الظَّالِمِينَ».",
       "«'İnkâr edenlere gelince, onları dünyada ve ahirette çetin bir azaba uğratacağım; onların hiç yardımcıları da yoktur. İman edip salih ameller işleyenlere gelince, (Allah) onların mükâfatlarını tam olarak verecektir. Allah zalimleri sevmez.'»"
      ],
      [
       "«ذٰلِكَ نَتْلُوهُ عَلَيْكَ مِنَ الْآيَاتِ وَالذِّكْرِ الْحَكِيمِ * إِنَّ مَثَلَ عِيسَى عِنْدَ اللهِ كَمَثَلِ آدَمَ خَلَقَهُ مِنْ تُرَابٍ ثُمَّ قَالَ لَهُ كُنْ فَيَكُونُ * الْحَقُّ مِنْ رَبِّكَ فَلَا تَكُنْ مِنَ الْمُمْتَرِينَ».",
       "«İşte bunu sana âyetlerden ve hikmetli zikirden okuyoruz. Allah katında Îsâ'nın durumu Âdem'in durumu gibidir. Onu topraktan yarattı, sonra ona 'Ol!' dedi, o da oluverdi. Hak Rabbinden gelendir; sakın şüphe edenlerden olma.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 6,
   "emoji": "🎣",
   "title_ar": "الضُّعَفَاءُ يُؤْمِنُونَ",
   "title_tr": "Zayıflar iman ediyor",
   "pre": {
    "predict": {
     "prompt_tr": "Her peygamberde olduğu gibi Îsâ'yı da zenginler ve liderler reddetti. Sence ona kimler iman etti?",
     "options": [
      [
       "الصَّيَّادُونَ وَأَهْلُ الْحِرَفِ وَالْفُقَرَاءُ",
       "Balıkçılar, zanaatkârlar ve fakirler"
      ],
      [
       "الْمُلُوكُ وَالْأُمَرَاءُ",
       "Krallar ve emirler"
      ],
      [
       "لَمْ يُؤْمِنْ بِهِ أَحَدٌ",
       "Hiç kimse"
      ]
     ]
    },
    "vocab": [
     [
      "مُبَارَكٌ",
      "mübarek, bereketli",
      "🌾"
     ],
     [
      "جَبَّارٌ",
      "zorba",
      "👊"
     ],
     [
      "الزُّعَمَاءُ",
      "liderler",
      "👑"
     ],
     [
      "مُتْرَفٌ",
      "varlık içinde şımarmış",
      "💎"
     ],
     [
      "الصَّيَّادُ",
      "avcı, balıkçı",
      "🎣"
     ],
     [
      "عَرَقُ الْجَبِينِ",
      "alın teri",
      "💧"
     ]
    ]
   },
   "stop": {
    "section": 15,
    "after": 1,
    "prompt_tr": "Zenginler ve liderler Îsâ'yı küçük gördü. Îsâ korkmadı. Sence kime yöneldi?",
    "options": [
     [
      "إِلَى عَامَّةِ النَّاسِ وَالْفُقَرَاءِ",
      "Sıradan insanlara ve fakirlere"
     ],
     [
      "إِلَى الْحَاكِمِ الرُّومِيِّ",
      "Romalı valiye"
     ],
     [
      "تَرَكَ الدَّعْوَةَ",
      "Daveti bıraktı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَ عِيسَى: إِنِّي عَبْدُ اللهِ.",
     "ابْتَعَدَ عَنْهُ الرُّؤَسَاءُ وَالْأَغْنِيَاءُ.",
     "لَمْ يَخْشَ عِيسَى مِنْهُمْ.",
     "أَقْبَلَ عَلَى عَامَّةِ النَّاسِ وَفُقَرَائِهِمْ.",
     "آمَنَ بِهِ الْحَوَارِيُّونَ وَقَالُوا: نَحْنُ أَنْصَارُ اللهِ."
    ],
    "questions": [
     {
      "q": "مَاذَا قَالَ عِيسَى عَنْ نَفْسِهِ فِي سُورَةِ مَرْيَمَ؟",
      "qt": "Îsâ Meryem sûresinde kendisi hakkında ne dedi?",
      "o": [
       "إِنِّي عَبْدُ اللهِ",
       "إِنِّي ابْنُ اللهِ",
       "إِنِّي مَلِكٌ"
      ],
      "ot": [
       "Ben Allah'ın kuluyum",
       "Ben Allah'ın oğluyum",
       "Ben bir kralım"
      ],
      "a": 0,
      "ev": [
       "13.1"
      ]
     },
     {
      "q": "مَنِ ابْتَعَدَ عَنْ عِيسَى؟",
      "qt": "Îsâ'dan kimler uzaklaştı?",
      "o": [
       "الرُّؤَسَاءُ وَالزُّعَمَاءُ",
       "الصَّيَّادُونَ",
       "الْحَوَارِيُّونَ"
      ],
      "ot": [
       "Reisler ve liderler",
       "Balıkçılar",
       "Havariler"
      ],
      "a": 0,
      "ev": [
       "14.0"
      ]
     },
     {
      "q": "لِمَاذَا اسْتَصْغَرُوا عِيسَى؟",
      "qt": "Îsâ'yı neden küçük gördüler?",
      "o": [
       "لِأَنَّهُ لَمْ يَكُنْ صَاحِبَ حَوْلٍ وَطَوْلٍ",
       "لِأَنَّهُ كَانَ صَغِيرًا فِي السِّنِّ",
       "لِأَنَّهُ لَمْ يَأْتِ بِمُعْجِزَةٍ"
      ],
      "ot": [
       "Çünkü güç ve servet sahibi değildi",
       "Çünkü yaşı küçüktü",
       "Çünkü mucize getirmedi"
      ],
      "a": 0,
      "ev": [
       "15.1"
      ]
     },
     {
      "q": "لِمَاذَا لَانَتْ قُلُوبُ الْفُقَرَاءِ؟",
      "qt": "Fakirlerin kalpleri neden yumuşamıştı?",
      "o": [
       "لِأَنَّهُمْ يَأْكُلُونَ بِكَدِّ يَمِينِهِمْ",
       "لِأَنَّهُمْ أَغْنِيَاءُ",
       "لِأَنَّهُمْ كَانُوا مُلُوكًا"
      ],
      "ot": [
       "Çünkü ellerinin emeğiyle geçiniyorlardı",
       "Çünkü zengindiler",
       "Çünkü kraldılar"
      ],
      "a": 0,
      "ev": [
       "15.2"
      ]
     },
     {
      "q": "مَنْ كَانَ فِي الطَّائِفَةِ الَّتِي آمَنَتْ؟",
      "qt": "İman eden toplulukta kimler vardı?",
      "o": [
       "الْقَصَّارُونَ وَصَيَّادُو الْأَسْمَاكِ",
       "الْأُمَرَاءُ وَالْوُزَرَاءُ",
       "الْأَطِبَّاءُ الْيُونَانِيُّونَ"
      ],
      "ot": [
       "Çamaşırcılar ve balıkçılar",
       "Emirler ve vezirler",
       "Yunanlı doktorlar"
      ],
      "a": 0,
      "ev": [
       "15.4"
      ]
     }
    ],
    "focus": {
     "title": "لَمْ + muzari (cezm): geçmişte olumsuzluk",
     "explain": "<b>لَمْ</b> muzari fiili cezm eder ve anlamı geçmişe çevirir: <span class='ar-inline'>لَمْ يَخْشَ</span> (korkmadı). Cezmde son harekeli harf sükûn alır (<span class='ar-inline'>يَجْعَلُ → لَمْ يَجْعَلْ</span>), sonu illetli fiilde son harf düşer (<span class='ar-inline'>يَخْشَى → لَمْ يَخْشَ</span>, <span class='ar-inline'>يَهَابُ → لَمْ يَهَبْ</span>, <span class='ar-inline'>يَكُونُ → لَمْ يَكُنْ</span>). Çoğul ve ikil eklerinde <span class='ar-inline'>ـنَ</span> düşer: <span class='ar-inline'>يَكُونُونَ → لَمْ يَكُونُوا</span>.",
     "examples": [
      "وَلَمْ يَجْعَلْنِي جَبَّارًا شَقِيًّا",
      "وَلَمْ يَخْشَ عِيسَى مِنْهُمْ، وَلَمْ يَهَبِ الْعِنَادَ وَالْكُفْرَ",
      "لِأَنَّهُ لَمْ يَكُنْ صَاحِبَ حَوْلٍ وَطَوْلٍ"
     ],
     "items": [
      {
       "q": "لَمْ ____ عِيسَى مِنْهُمْ.",
       "o": [
        "يَخْشَ",
        "يَخْشَى",
        "يَخْشُونَ"
       ],
       "a": 0
      },
      {
       "q": "لَمْ ____ صَاحِبَ حَوْلٍ.",
       "o": [
        "يَكُنْ",
        "يَكُونُ",
        "كَانَ"
       ],
       "a": 0
      },
      {
       "q": "الْحَوَارِيُّونَ لَمْ ____ مِثْلَهُ فِي الصَّبْرِ.",
       "o": [
        "يَكُونُوا",
        "يَكُونُونَ",
        "يَكُنْ"
       ],
       "a": 0
      },
      {
       "q": "«لَمْ يَجْعَلْنِي جَبَّارًا» = …",
       "o": [
        "Beni zorba kılmadı",
        "Beni zorba kılacak",
        "Beni zorba kıldı"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ عِيسَى: إِنِّي {عَبْدُ} اللهِ. وَابْتَعَدَ عَنْهُ الرُّؤَسَاءُ وَ{الْأَغْنِيَاءُ}، وَلَمْ {يَخْشَ} عِيسَى مِنْهُمْ. فَأَقْبَلَ عَلَى عَامَّةِ النَّاسِ وَ{فُقَرَائِهِمْ}، فَآمَنَ مِنْهُمُ الْقَصَّارُونَ وَ{صَيَّادُو} الْأَسْمَاكِ."
    },
    "think": {
     "q": "لِمَاذَا يُؤْمِنُ الْفُقَرَاءُ بِالْأَنْبِيَاءِ قَبْلَ الْأَغْنِيَاءِ فِي أَكْثَرِ الْقِصَصِ؟",
     "qt": "Kıssaların çoğunda fakirler neden zenginlerden önce peygamberlere iman ediyor?",
     "model": "Zenginler ve liderler yeni bir davette makamlarını, ayrıcalıklarını ve itibarlarını kaybetme tehlikesi görür; kibir de onları engeller. Ellerinin emeğiyle geçinen insanların kaybedecek böyle bir şeyi yoktur, kalpleri daha yumuşaktır. Sebe 34–35'te de varlık içinde şımarmış olanların her uyarıcıyı reddettiği anlatılır."
    },
    "personal": {
     "q": "قَالَ الصَّيَّادُونَ: «نَحْنُ أَنْصَارُ اللهِ». بِمَ تَنْصُرُ أَنْتَ الْحَقَّ؟",
     "qt": "Balıkçılar «Biz Allah'ın yardımcılarıyız» dediler. Sen hakka nasıl destek olursun? Kısa bir Arapça cümle yaz.",
     "hint": [
      "أَنْصُرُ الْحَقَّ بِـ …",
      "أَقُولُ الصِّدْقَ …",
      "أُسَاعِدُ الضَّعِيفَ …"
     ]
    },
    "retell": [
     "إِنِّي عَبْدُ اللهِ",
     "الرُّؤَسَاءُ وَالزُّعَمَاءُ",
     "لَمْ يَخْشَ",
     "عَامَّةُ النَّاسِ",
     "صَيَّادُو الْأَسْمَاكِ",
     "أَنْصَارُ اللهِ"
    ],
    "quran": [
     {
      "ar": "قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا",
      "ref": "Meryem 19:30",
      "tr": "(Bebek) dedi ki: Ben Allah'ın kuluyum. O bana kitabı verdi ve beni peygamber yaptı.",
      "inText": "«قَالَ إِنِّي عَبْدُ اللهِ …»"
     },
     {
      "ar": "وَمَا أَرْسَلْنَا فِي قَرْيَةٍ مِنْ نَذِيرٍ إِلَّا قَالَ مُتْرَفُوهَا إِنَّا بِمَا أُرْسِلْتُمْ بِهِ كَافِرُونَ",
      "ref": "Sebe 34:34",
      "tr": "Hangi memlekete bir uyarıcı gönderdiysek, oranın varlık içinde şımarmışları mutlaka «Biz sizinle gönderilen şeyi inkâr ediyoruz» dediler.",
      "inText": "«وَمَا أَرْسَلْنَا فِي قَرْيَةٍ مِنْ نَذِيرٍ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 13,
     "title_ar": "سِيرَتُهُ وَدَعْوَتُهُ فِي الْقُرْآنِ",
     "title_tr": "Kur'an'da hayatı ve daveti",
     "s": [
      [
       "وَاقْرَؤُوا وَصْفَهُ تَعَالَى لِسِيرَتِهِ وَدَعْوَتِهِ، فِي قَوْلِهِ:",
       "Allah Teâlâ'nın onun hayatını ve davetini anlattığı şu sözünü okuyun:"
      ],
      [
       "«قَالَ إِنِّي عَبْدُ اللهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا * وَجَعَلَنِي مُبَارَكًا أَيْنَ مَا كُنْتُ وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا».",
       "«(Bebek) dedi ki: 'Ben Allah'ın kuluyum. O bana kitabı verdi ve beni peygamber yaptı. Nerede olursam olayım beni mübarek kıldı; yaşadığım sürece bana namazı ve zekâtı emretti.'»"
      ],
      [
       "«وَبَرًّا بِوَالِدَتِي وَلَمْ يَجْعَلْنِي جَبَّارًا شَقِيًّا * وَالسَّلَامُ عَلَيَّ يَوْمَ وُلِدْتُ وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا».",
       "«'Beni anneme iyi davranan biri kıldı; beni zorba ve isyankâr kılmadı. Doğduğum gün, öleceğim gün ve diri olarak kaldırılacağım gün bana selam olsun.'»"
      ]
     ]
    },
    {
     "n": 14,
     "title_ar": "صِرَاعٌ قَدِيمٌ",
     "title_tr": "Eski bir çatışma",
     "s": [
      [
       "وَوَقَعَ لِسَيِّدِنَا عِيسَى مَا وَقَعَ لِلْأَنْبِيَاءِ قَبْلَهُ، فَابْتَعَدَ عَنْهُ الرُّؤَسَاءُ وَالزُّعَمَاءُ، وَهَجَرَهُ الْأَغْنِيَاءُ وَالْأَقْوِيَاءُ.",
       "Efendimiz Îsâ'nın başına, kendisinden önceki peygamberlerin başına gelenler geldi: Reisler ve liderler ondan uzaklaştı, zenginler ve güçlüler onu terk etti."
      ],
      [
       "وَرَأَوْا فِي الْإِيمَانِ بِهِ وَاتِّبَاعِهِ غَضَاضَةً وَعَيْبًا، وَشَقَّ عَلَيْهِمُ التَّنَازُلُ عَمَّا كَانُوا عَلَيْهِ مِنْ رِيَاسَةٍ وَزَعَامَةٍ وَامْتِيَازٍ وَسِيَادَةٍ.",
       "Ona inanmayı ve uymayı bir küçüklük ve ayıp saydılar; sahip oldukları reislik, liderlik, ayrıcalık ve efendilikten vazgeçmek onlara ağır geldi."
      ],
      [
       "وَصَدَقَ قَوْلُ اللهِ تَعَالَى: «وَمَا أَرْسَلْنَا فِي قَرْيَةٍ مِنْ نَذِيرٍ إِلَّا قَالَ مُتْرَفُوهَا إِنَّا بِمَا أُرْسِلْتُمْ بِهِ كَافِرُونَ * وَقَالُوا نَحْنُ أَكْثَرُ أَمْوَالًا وَأَوْلَادًا وَمَا نَحْنُ بِمُعَذَّبِينَ».",
       "Allah Teâlâ'nın şu sözü doğru çıktı: «Hangi memlekete bir uyarıcı gönderdiysek, oranın varlık içinde şımarmış önde gelenleri mutlaka: 'Biz sizinle gönderilen şeyi inkâr ediyoruz' dediler. 'Biz malca ve evlatça daha çoğuz; biz azaba uğratılacak da değiliz' dediler.»"
      ]
     ]
    },
    {
     "n": 15,
     "title_ar": "إِيمَانُ عَامَّةِ النَّاسِ وَفُقَرَائِهِمْ",
     "title_tr": "Sıradan insanların ve fakirlerin imanı",
     "s": [
      [
       "وَلَمْ يَخْشَ عِيسَى مِنْهُمْ، وَلَمْ يَهَبِ الْعِنَادَ وَالْكُفْرَ.",
       "Îsâ onlardan korkmadı; inattan ve inkârdan çekinmedi."
      ],
      [
       "وَرَأَى أَنَّ مَا جَاءَ بِهِ مِنْ آيَاتٍ بَيِّنَاتٍ وَمُعْجِزَاتٍ بَاهِرَاتٍ اسْتَيْقَنَتْهَا أَنْفُسُهُمْ، وَاسْتَصْغَرُوهُ لِأَنَّهُ لَمْ يَكُنْ صَاحِبَ حَوْلٍ وَطَوْلٍ.",
       "Getirdiği apaçık delillerin ve göz kamaştırıcı mucizelerin doğruluğuna kalplerinin kesin olarak inandığını gördü; onu ise güç ve servet sahibi olmadığı için küçük gördüler."
      ],
      [
       "أَقْبَلَ عَلَى عَامَّةِ النَّاسِ وَفُقَرَائِهِمْ، وَقَدْ لَانَتْ قُلُوبُهُمْ، وَصَفَتْ نُفُوسُهُمْ، لِأَنَّهُمْ يَأْكُلُونَ بِكَدِّ يَمِينِهِمْ وَعَرَقِ جَبِينِهِمْ.",
       "O da sıradan insanlara ve fakirlere yöneldi; onların kalpleri yumuşamış, gönülleri saflaşmıştı, çünkü ellerinin emeğiyle ve alınlarının teriyle geçiniyorlardı."
      ],
      [
       "لَا يَتَفَاخَرُونَ بِنَسَبٍ، وَلَا يَتَطَاوَلُونَ بِجَاهٍ وَمَنْصِبٍ.",
       "Soyla övünmüyor, makam ve mevkiyle büyüklenmiyorlardı."
      ],
      [
       "فَآمَنَتْ مِنْهُمْ طَائِفَةٌ، فِيهَا الْقَصَّارُونَ، وَفِيهَا صَيَّادُو الْأَسْمَاكِ، وَفِيهَا أَهْلُ الْحِرَفِ وَالْمِهَنِ.",
       "Onlardan bir topluluk iman etti; içlerinde çamaşırcılar (kumaş ağartıcıları), balıkçılar, zanaat ve meslek sahipleri vardı."
      ]
     ]
    },
    {
     "n": 16,
     "title_ar": "نَحْنُ أَنْصَارُ اللهِ",
     "title_tr": "Biz Allah'ın yardımcılarıyız",
     "s": [
      [
       "فَآمَنُوا بِالْمَسِيحِ وَالْتَفُّوا حَوْلَهُ، وَوَضَعُوا أَيْدِيَهُمْ فِي يَدِهِ وَقَالُوا: «نَحْنُ أَنْصَارُ اللهِ».",
       "Mesih'e iman edip etrafında toplandılar, ellerini onun eline koyup «Biz Allah'ın yardımcılarıyız» dediler."
      ],
      [
       "يَقُولُ اللهُ تَعَالَى: «فَلَمَّا أَحَسَّ عِيسَى مِنْهُمُ الْكُفْرَ قَالَ مَنْ أَنْصَارِي إِلَى اللهِ قَالَ الْحَوَارِيُّونَ نَحْنُ أَنْصَارُ اللهِ آمَنَّا بِاللهِ وَاشْهَدْ بِأَنَّا مُسْلِمُونَ * رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ».",
       "Allah Teâlâ şöyle buyurur: «Îsâ onlardaki inkârı sezince: 'Allah yolunda yardımcılarım kim?' dedi. Havariler: 'Biz Allah'ın yardımcılarıyız. Allah'a inandık; şahit ol ki biz Müslümanlarız. Rabbimiz! İndirdiğine inandık ve elçiye uyduk. Bizi şahitlerle beraber yaz' dediler.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 7,
   "emoji": "🍽️",
   "title_ar": "الْحَوَارِيُّونَ وَالْمَائِدَةُ",
   "title_tr": "Havariler ve sofra",
   "pre": {
    "predict": {
     "prompt_tr": "Havariler Îsâ ile birlikte yolculuk ederken aç kaldılar ve gökten bir sofra istediler. Sence Îsâ bu isteğe nasıl baktı?",
     "options": [
      [
       "لَمْ يُعْجِبْهُ سُؤَالُهُمْ وَحَذَّرَهُمْ",
       "Bu istek hoşuna gitmedi ve onları uyardı"
      ],
      [
       "فَرِحَ بِهِ كَثِيرًا",
       "Çok sevindi"
      ],
      [
       "ضَحِكَ مِنْهُمْ",
       "Onlara güldü"
      ]
     ]
    },
    "vocab": [
     [
      "السِّيَاحَةُ",
      "yolculuk, gezip dolaşma",
      "🚶"
     ],
     [
      "الْجُوعُ",
      "açlık",
      "🍞"
     ],
     [
      "الْمَائِدَةُ",
      "sofra",
      "🍽️"
     ],
     [
      "الْأَدَبُ",
      "edep, terbiye",
      "🙇"
     ],
     [
      "الْغَيْبُ",
      "gayb, görünmeyen",
      "🌫️"
     ],
     [
      "الِاطْمِئْنَانُ",
      "kalbin yatışması",
      "😌"
     ]
    ]
   },
   "stop": {
    "section": 19,
    "after": 0,
    "prompt_tr": "Havariler «Rabbin bize gökten bir sofra indirebilir mi?» dediler. Sence bu soru Îsâ'nın hoşuna gitti mi?",
    "options": [
     [
      "لَا، كَرِهَ أُسْلُوبَهُمْ",
      "Hayır, üsluplarını beğenmedi"
     ],
     [
      "نَعَمْ، أَعْجَبَهُ",
      "Evet, hoşuna gitti"
     ],
     [
      "لَمْ يَسْمَعْهُمْ",
      "Onları duymadı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "كَانَ عِيسَى يَقْضِي أَوْقَاتَهُ فِي السِّيَاحَةِ وَالدَّعْوَةِ.",
     "أَصَابَ الْحَوَارِيِّينَ الْجُوعُ وَالتَّعَبُ.",
     "طَلَبُوا مَائِدَةً مِنَ السَّمَاءِ.",
     "حَذَّرَهُمْ عِيسَى مِنْ سُوءِ الْعَاقِبَةِ.",
     "قَالُوا: نُرِيدُ اطْمِئْنَانًا لَا امْتِحَانًا."
    ],
    "questions": [
     {
      "q": "أَيْنَ كَانَ عِيسَى يَقْضِي أَكْثَرَ أَوْقَاتِهِ؟",
      "qt": "Îsâ vaktinin çoğunu nerede geçirirdi?",
      "o": [
       "فِي السِّيَاحَةِ وَالِانْتِقَالِ",
       "فِي الْقَصْرِ",
       "فِي السُّوقِ"
      ],
      "ot": [
       "Yolculukta, yer değiştirerek",
       "Sarayda",
       "Çarşıda"
      ],
      "a": 0,
      "ev": [
       "17.0"
      ]
     },
     {
      "q": "كَيْفَ كَانَ عِيسَى يَصْبِرُ عَلَى الْجُوعِ؟",
      "qt": "Îsâ açlığa nasıl katlanırdı?",
      "o": [
       "يَجْتَزِئُ بِمَا يَسُدُّ الرَّمَقَ",
       "يَأْكُلُ كَثِيرًا",
       "يَطْلُبُ الطَّعَامَ مِنَ الْأَغْنِيَاءِ"
      ],
      "ot": [
       "Canını ayakta tutacak kadarıyla yetinirdi",
       "Çok yerdi",
       "Zenginlerden yemek isterdi"
      ],
      "a": 0,
      "ev": [
       "17.3"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يُعْجِبْ عِيسَى سُؤَالُ الْحَوَارِيِّينَ؟",
      "qt": "Havarilerin sorusu Îsâ'nın neden hoşuna gitmedi?",
      "o": [
       "لِأَنَّهُمْ لَمْ يَكُونُوا مُتَأَدِّبِينَ فِي سُؤَالِهِمْ",
       "لِأَنَّهُ لَمْ يَكُنْ جَائِعًا",
       "لِأَنَّهُ لَا يُحِبُّ الطَّعَامَ"
      ],
      "ot": [
       "Çünkü sorularında edepli değillerdi",
       "Çünkü kendisi aç değildi",
       "Çünkü yemeği sevmezdi"
      ],
      "a": 0,
      "ev": [
       "19.0"
      ]
     },
     {
      "q": "مَا الْمُعْجِزَاتُ عِنْدَ الْكِتَابِ؟",
      "qt": "Kitaba göre mucizeler nedir?",
      "o": [
       "آيَاتٌ مِنَ اللهِ تَقُومُ بِهَا حُجَّتُهُ",
       "مَخَارِيقُ يُسَلَّى بِهَا الْأَطْفَالُ",
       "سِحْرٌ"
      ],
      "ot": [
       "Allah'ın delilini tamamlayan âyetler",
       "Çocukları eğlendiren hokkabazlıklar",
       "Büyü"
      ],
      "a": 0,
      "ev": [
       "19.4"
      ]
     },
     {
      "q": "مَاذَا قَالَ الْحَوَارِيُّونَ عَنْ قَصْدِهِمْ؟",
      "qt": "Havariler niyetleri hakkında ne dediler?",
      "o": [
       "إِنَّمَا يُرِيدُونَ اطْمِئْنَانًا",
       "يُرِيدُونَ امْتِحَانَ اللهِ",
       "يُرِيدُونَ الْمَالَ"
      ],
      "ot": [
       "Sadece kalplerinin yatışmasını istiyorlar",
       "Allah'ı sınamak istiyorlar",
       "Mal istiyorlar"
      ],
      "a": 0,
      "ev": [
       "21.0"
      ]
     }
    ],
    "focus": {
     "title": "أَنْ + muzari (nasb): أَنْ يُنَزِّلَ",
     "explain": "<b>أَنْ</b> muzari fiili nasb eder ve onu mastar anlamına çevirir («-mek, -mesi»): <span class='ar-inline'>طَلَبُوا أَنْ يَسْأَلَ</span> (istemesini talep ettiler). Nasbda son harf üstün alır: <span class='ar-inline'>يَسْأَلُ → أَنْ يَسْأَلَ</span>. Çoğul ve ikil eklerinde <span class='ar-inline'>ـنَ</span> düşer: <span class='ar-inline'>تَأْكُلُونَ → أَنْ تَأْكُلُوا</span>, <span class='ar-inline'>نَأْكُلُ → أَنْ نَأْكُلَ</span>.",
     "examples": [
      "فَطَلَبُوا مِنْ سَيِّدِنَا عِيسَى أَنْ يَسْأَلَ اللهَ أَنْ يُنَزِّلَ لَهُمْ مَائِدَةً",
      "هَلْ يَسْتَطِيعُ رَبُّكَ أَنْ يُنَزِّلَ عَلَيْنَا مَائِدَةً",
      "نُرِيدُ أَنْ نَأْكُلَ مِنْهَا"
     ],
     "items": [
      {
       "q": "طَلَبُوا أَنْ ____ اللهُ مَائِدَةً.",
       "o": [
        "يُنَزِّلَ",
        "يُنَزِّلُ",
        "نَزَلَ"
       ],
       "a": 0
      },
      {
       "q": "نُرِيدُ أَنْ ____ مِنْهَا.",
       "o": [
        "نَأْكُلَ",
        "نَأْكُلُ",
        "أَكَلْنَا"
       ],
       "a": 0
      },
      {
       "q": "لَا يَسْتَطِيعُونَ أَنْ ____ .",
       "o": [
        "يَصْبِرُوا",
        "يَصْبِرُونَ",
        "صَبَرُوا"
       ],
       "a": 0
      },
      {
       "q": "«أَنْ يَسْأَلَ اللهَ» = …",
       "o": [
        "Allah'tan istemesi",
        "Allah'tan istedi",
        "Allah'tan isteyecek"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "كَانَ عِيسَى يَصْبِرُ عَلَى {الْجُوعِ}. أَمَّا الْحَوَارِيُّونَ فَطَلَبُوا أَنْ يُنَزِّلَ اللهُ {مَائِدَةً} مِنَ السَّمَاءِ. وَلَمْ يَكُونُوا {مُتَأَدِّبِينَ} فِي سُؤَالِهِمْ، فَحَذَّرَهُمْ عِيسَى مِنْ سُوءِ {الْعَاقِبَةِ}. فَقَالُوا: نُرِيدُ {اطْمِئْنَانًا}."
    },
    "think": {
     "q": "لِمَاذَا يُطَالِبُ الْأَنْبِيَاءُ أُمَمَهُمْ بِالْإِيمَانِ بِالْغَيْبِ؟",
     "qt": "Peygamberler ümmetlerinden neden gaybe iman etmelerini ister?",
     "model": "İman, görünmeyene güvenmektir; her şey gözle görülseydi imanın bir değeri kalmazdı. Yazara göre mucizeler, insanları eğlendirmek için istendiğinde gösterilen şeyler değildir. Mucize görüp de inkâr edene artık mühlet verilmez; bu yüzden Îsâ havarileri ısrarcı bir istekten sakındırdı."
    },
    "personal": {
     "q": "كَانَ عِيسَى يَصْبِرُ فِي السَّفَرِ عَلَى الْيُسْرِ وَالْعُسْرِ. مَتَى تَحْتَاجُ أَنْتَ إِلَى الصَّبْرِ؟",
     "qt": "Îsâ yolculukta kolaylığa da zorluğa da sabrederdi. Sen ne zaman sabra ihtiyaç duyarsın? Kısa bir Arapça cümle yaz.",
     "hint": [
      "أَحْتَاجُ إِلَى الصَّبْرِ عِنْدَمَا …",
      "أَصْبِرُ عَلَى …",
      "فِي السَّفَرِ …"
     ]
    },
    "retell": [
     "السِّيَاحَةُ",
     "يَصْبِرُ عَلَى الْجُوعِ",
     "مَائِدَةٌ مِنَ السَّمَاءِ",
     "سُوءُ أَدَبٍ",
     "سُوءُ الْعَاقِبَةِ",
     "اطْمِئْنَانًا"
    ],
    "quran": [
     {
      "ar": "إِذْ قَالَ الْحَوَارِيُّونَ يَا عِيسَى ابْنَ مَرْيَمَ هَلْ يَسْتَطِيعُ رَبُّكَ أَنْ يُنَزِّلَ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ",
      "ref": "Mâide 5:112",
      "tr": "Hani havariler: «Ey Meryem oğlu Îsâ! Rabbin bize gökten bir sofra indirebilir mi?» demişlerdi.",
      "inText": "«هَلْ يَسْتَطِيعُ رَبُّكَ أَنْ يُنَزِّلَ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ؟»"
     },
     {
      "ar": "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ",
      "ref": "Bakara 2:3",
      "tr": "Onlar gayba inanırlar ve namazı dosdoğru kılarlar.",
      "inText": "«يُطَالِبُونَ أُمَمَهُمْ بِالْإِيمَانِ بِالْغَيْبِ»"
     }
    ]
   },
   "sections": [
    {
     "n": 17,
     "title_ar": "سِيَاحَةٌ وَدَعْوَةٌ",
     "title_tr": "Yolculuk ve davet",
     "s": [
      [
       "وَكَانَ سَيِّدُنَا عِيسَى يَقْضِي أَكْثَرَ أَوْقَاتِهِ فِي السِّيَاحَةِ، وَالِانْتِقَالِ مِنْ مَكَانٍ إِلَى مَكَانٍ.",
       "Efendimiz Îsâ vaktinin çoğunu yolculukta, bir yerden bir yere geçerek geçirirdi."
      ],
      [
       "يَدْعُو بَنِي إِسْرَائِيلَ إِلَى اللهِ، وَيَهْدِي خِرَافَهُمُ الضَّالَّةَ إِلَى رَبِّهَا وَسَيِّدِهَا.",
       "İsrailoğullarını Allah'a çağırır, onların yolunu kaybetmiş koyunlarını Rablerine ve sahiplerine yöneltirdi."
      ],
      [
       "وَيَتَّفِقُ لَهُ فِي هٰذِهِ الْجَوْلَاتِ وَالرِّحْلَاتِ الْيُسْرُ وَالْعُسْرُ، وَالضِّيقُ وَالرَّخَاءُ.",
       "Bu dolaşmalarda ve yolculuklarda başına kolaylık da zorluk da, darlık da bolluk da gelirdi."
      ],
      [
       "وَيَحْمِلُ ذٰلِكَ بِصَبْرٍ وَجَلَدٍ وَاحْتِسَابٍ، وَيَصْبِرُ عَلَى الْجُوعِ، وَيَجْتَزِئُ بِمَا يَسُدُّ الرَّمَقَ.",
       "Bunlara sabırla, dayanıklılıkla ve sevabını Allah'tan umarak katlanır; açlığa sabreder, ancak canını ayakta tutacak kadarıyla yetinirdi."
      ]
     ]
    },
    {
     "n": 18,
     "title_ar": "الْحَوَارِيُّونَ يَطْلُبُونَ مَائِدَةً مِنَ السَّمَاءِ",
     "title_tr": "Havariler gökten bir sofra istiyor",
     "s": [
      [
       "أَمَّا الْحَوَارِيُّونَ فَلَمْ يَكُونُوا فِي مَنْزِلَتِهِ مِنَ الصَّبْرِ وَالْجَلَدِ وَالتَّقَشُّفِ وَالزَّهَادَةِ، وَأَصَابَهُمْ شَيْءٌ مِنْ ذٰلِكَ.",
       "Havariler ise sabır, dayanıklılık, sade yaşayış ve dünyaya gönül bağlamamakta onun derecesinde değildi; bundan (açlık ve sıkıntıdan) onlara da bir şeyler isabet etti."
      ],
      [
       "فَطَلَبُوا مِنْ سَيِّدِنَا عِيسَى أَنْ يَسْأَلَ اللهَ أَنْ يُنَزِّلَ لَهُمْ مَائِدَةً مِنَ السَّمَاءِ، يَأْكُلُونَ مِنْهَا وَيَشْبَعُونَ بَعْدَ جُوعٍ، وَيَنْعَمُونَ بَعْدَ عَنَاءٍ.",
       "Efendimiz Îsâ'dan, Allah'tan kendilerine gökten bir sofra indirmesini istemesini talep ettiler; ondan yiyecek, açlıktan sonra doyacak, sıkıntıdan sonra rahata kavuşacaklardı."
      ]
     ]
    },
    {
     "n": 19,
     "title_ar": "سُوءُ أَدَبٍ",
     "title_tr": "Edepsizlik",
     "s": [
      [
       "وَلَمْ يَكُونُوا مُتَأَدِّبِينَ فِي سُؤَالِهِمْ، فَقَالُوا: «هَلْ يَسْتَطِيعُ رَبُّكَ أَنْ يُنَزِّلَ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ؟»",
       "Sorularında edepli değillerdi; «Rabbin bize gökten bir sofra indirebilir mi?» dediler."
      ],
      [
       "وَلَمْ يُعْجِبْ عِيسَى سُؤَالُهُمْ، وَكَرِهَ الْأُسْلُوبَ الَّذِي خَاطَبُوهُ بِهِ.",
       "Soruları Îsâ'nın hoşuna gitmedi; kendisine hitap ettikleri üslubu beğenmedi."
      ],
      [
       "وَالْأَنْبِيَاءُ جَمِيعًا يُطَالِبُونَ أُمَمَهُمْ بِالْإِيمَانِ بِالْغَيْبِ، وَيُكَلِّفُونَهُمْ إِيَّاهُ.",
       "Bütün peygamberler ümmetlerinden gaybe iman etmelerini ister ve bunu onlara bir yükümlülük olarak yüklerler."
      ],
      [
       "وَلَيْسَتِ الْمُعْجِزَاتُ مَخَارِيقَ يُسَلَّى بِهَا الْأَطْفَالُ وَيُلْهَى بِهَا الْأَغْمَارُ.",
       "Mucizeler, çocukların eğlendirildiği, toyların oyalandığı hokkabazlıklar değildir."
      ],
      [
       "إِنَّمَا هِيَ آيَاتٌ مِنَ اللهِ يُظْهِرُهَا عَلَى أَيْدِي أَنْبِيَائِهِ حِينَ يَشَاءُ، وَتَقُومُ بِهَا حُجَّةُ اللهِ عَلَى الْعِبَادِ، فَلَا يُمْهَلُونَ بَعْدَ ظُهُورِهَا وَإِنْكَارِهَا.",
       "Onlar ancak Allah'ın dilediği zaman peygamberlerinin elinde ortaya çıkardığı âyetlerdir; onlarla Allah'ın kullar üzerindeki delili tamamlanır. Mucize ortaya çıktıktan ve inkâr edildikten sonra artık mühlet verilmez."
      ]
     ]
    },
    {
     "n": 20,
     "title_ar": "تَحْذِيرُ قَوْمِهِ مِنْ سُوءِ الْعَاقِبَةِ",
     "title_tr": "Kavmini kötü sondan uyarması",
     "s": [
      [
       "لِذٰلِكَ خَافَ سَيِّدُنَا عِيسَى عَلَيْهِمْ، وَحَذَّرَهُمْ مِنْ سُوءِ الْعَاقِبَةِ.",
       "Bu yüzden efendimiz Îsâ onlar adına korktu ve onları kötü bir sondan sakındırdı."
      ],
      [
       "وَنَهَاهُمْ عَنِ امْتِحَانِ اللهِ تَعَالَى، فَهُوَ أَعْلَى وَأَجَلُّ مِنْ ذٰلِكَ.",
       "Onları Allah Teâlâ'yı sınamaya kalkmaktan men etti; çünkü O bundan çok daha yüce ve uludur."
      ]
     ]
    },
    {
     "n": 21,
     "title_ar": "إِلْحَاحٌ وَإِصْرَارٌ",
     "title_tr": "Israr ve diretme",
     "s": [
      [
       "وَلٰكِنَّ الْحَوَارِيِّينَ تَشَبَّثُوا بِسُؤَالِهِمْ، وَذَكَرُوا أَنَّهُمْ جَادُّونَ فِي هٰذَا السُّؤَالِ، لَا يَقْصِدُونَ امْتِحَانًا، إِنَّمَا يُرِيدُونَ اطْمِئْنَانًا.",
       "Ama havariler isteklerinde direttiler; bu istekte ciddi olduklarını, bir sınama amaçlamadıklarını, yalnızca kalplerinin yatışmasını istediklerini söylediler."
      ],
      [
       "وَلِيَكُونَ ذٰلِكَ ذِكْرَى لِلْأَجْيَالِ الْقَادِمَةِ، وَقِصَّةً تُحْكَى وَتُرْوَى عَلَى مَرِّ الْأَيَّامِ.",
       "Ayrıca bunun gelecek nesiller için bir hatıra, günler boyu anlatılıp aktarılan bir kıssa olmasını istiyorlardı."
      ],
      [
       "فَتَكُونَ دَلِيلًا عَلَى صِدْقِ هٰذَا الدِّينِ، وَمَنْزِلَةِ الْمُؤْمِنِينَ الْأَوَّلِينَ وَالْحَوَارِيِّينَ الصَّادِقِينَ.",
       "Böylece bu dinin doğruluğuna, ilk müminlerin ve sadık havarilerin değerine bir delil olacaktı."
      ]
     ]
    }
   ]
  },
  {
   "id": 8,
   "emoji": "⚖️",
   "title_ar": "الْمَائِدَةُ وَالْمُؤَامَرَةُ",
   "title_tr": "Sofra ve komplo",
   "pre": {
    "predict": {
     "prompt_tr": "Yahudilerin dinî ileri gelenleri Îsâ'yı Romalı valiye şikâyet ettiler. Roma yönetimi dinî konulara karışmıyordu. Sence onu nasıl suçladılar?",
     "options": [
      [
       "قَالُوا: إِنَّهُ خَطَرٌ عَلَى الدَّوْلَةِ",
       "«O devlet için bir tehlikedir» dediler"
      ],
      [
       "قَالُوا: إِنَّهُ لَا يُصَلِّي",
       "«O namaz kılmıyor» dediler"
      ],
      [
       "لَمْ يَشْكُوهُ",
       "Şikâyet etmediler"
      ]
     ]
    },
    "vocab": [
     [
      "عِيدٌ",
      "bayram",
      "🎉"
     ],
     [
      "الْحَاكِمُ",
      "vali, yönetici",
      "🏛️"
     ],
     [
      "ثَائِرٌ",
      "isyancı",
      "✊"
     ],
     [
      "الشَّرَارَةُ",
      "kıvılcım",
      "🔥"
     ],
     [
      "السِّيَاسَةُ",
      "siyaset",
      "🗳️"
     ],
     [
      "الْإِلْحَاحُ",
      "ısrar",
      "🔁"
     ]
    ]
   },
   "stop": {
    "section": 25,
    "after": 0,
    "prompt_tr": "Şikâyetlerini «devlete tehlike» gibi siyasi sözlerle süslediler. Sence neden dinî sebebi değil de siyasi sebebi öne çıkardılar?",
    "options": [
     [
      "لِأَنَّ الْحُكَّامَ لَا يَهْتَمُّونَ بِالْأُمُورِ الدِّينِيَّةِ",
      "Çünkü yöneticiler dinî konularla ilgilenmiyordu"
     ],
     [
      "لِأَنَّهُمْ يُحِبُّونَ السِّيَاسَةَ",
      "Çünkü siyaseti seviyorlardı"
     ],
     [
      "لِأَنَّ عِيسَى كَانَ مَلِكًا",
      "Çünkü Îsâ kraldı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "دَعَا عِيسَى أَنْ يُنَزِّلَ اللهُ مَائِدَةً.",
     "عِيلَ صَبْرُ الْيَهُودِ.",
     "رَفَعُوا قَضِيَّتَهُ إِلَى الْحَاكِمِ الرُّومِيِّ.",
     "خَلَطُوا الْكَلَامَ بِالسِّيَاسَةِ.",
     "أَرَادَ الْحُكَّامُ التَّخَلُّصَ مِنَ الْقَضِيَّةِ."
    ],
    "questions": [
     {
      "q": "مَاذَا طَلَبَ عِيسَى أَنْ تَكُونَ الْمَائِدَةُ لَهُمْ؟",
      "qt": "Îsâ sofranın onlar için ne olmasını istedi?",
      "o": [
       "عِيدًا لِأَوَّلِهِمْ وَآخِرِهِمْ",
       "تِجَارَةً",
       "زِينَةً"
      ],
      "ot": [
       "Öncekileri ve sonrakileri için bir bayram",
       "Bir ticaret",
       "Bir süs"
      ],
      "a": 0,
      "ev": [
       "22.3"
      ]
     },
     {
      "q": "إِلَى مَنْ رَفَعَ الْيَهُودُ قَضِيَّةَ عِيسَى؟",
      "qt": "Yahudiler Îsâ'nın davasını kime taşıdılar?",
      "o": [
       "إِلَى الْحَاكِمِ الرُّومِيِّ",
       "إِلَى الْمَلِكِ الْيُونَانِيِّ",
       "إِلَى الْحَوَارِيِّينَ"
      ],
      "ot": [
       "Romalı valiye",
       "Yunan kralına",
       "Havarilere"
      ],
      "a": 0,
      "ev": [
       "23.1"
      ]
     },
     {
      "q": "بِمَ وَصَفُوا عِيسَى أَمَامَ الْحَاكِمِ؟",
      "qt": "Valinin önünde Îsâ'yı nasıl nitelediler?",
      "o": [
       "رَجُلٌ ثَائِرٌ فَوْضَوِيٌّ",
       "رَجُلٌ صَالِحٌ",
       "طَبِيبٌ مَاهِرٌ"
      ],
      "ot": [
       "İsyancı, düzen tanımaz bir adam",
       "Salih bir adam",
       "Usta bir doktor"
      ],
      "a": 0,
      "ev": [
       "23.1"
      ]
     },
     {
      "q": "لِمَاذَا خَلَطَ الْيَهُودُ الْكَلَامَ بِالسِّيَاسَةِ؟",
      "qt": "Yahudiler sözü neden siyasetle karıştırdılar?",
      "o": [
       "لِأَنَّ الْجَانِبَ الدِّينِيَّ لَا يُثِيرُ الْحُكَّامَ",
       "لِأَنَّهُمْ لَا يَعْرِفُونَ الدِّينَ",
       "لِأَنَّ عِيسَى طَلَبَ ذٰلِكَ"
      ],
      "ot": [
       "Çünkü dinî taraf yöneticileri harekete geçirmiyordu",
       "Çünkü dini bilmiyorlardı",
       "Çünkü Îsâ bunu istedi"
      ],
      "a": 0,
      "ev": [
       "25.1"
      ]
     },
     {
      "q": "لِمَاذَا أَرَادَ الْحُكَّامُ التَّخَلُّصَ مِنَ الْقَضِيَّةِ؟",
      "qt": "Yöneticiler neden davadan kurtulmak istediler?",
      "o": [
       "لِأَنَّهَا أَصْبَحَتْ حَدِيثَ الْبَلَدِ وَاشْتَدَّ الْإِلْحَاحُ",
       "لِأَنَّهُمْ أَحَبُّوا عِيسَى",
       "لِأَنَّهُمْ كَانُوا يَهُودًا"
      ],
      "ot": [
       "Çünkü şehrin dilinde dolaşıyordu ve ısrar artmıştı",
       "Çünkü Îsâ'yı seviyorlardı",
       "Çünkü Yahudiydiler"
      ],
      "a": 0,
      "ev": [
       "26.2"
      ]
     }
    ],
    "focus": {
     "title": "لَا: olumsuzluk mu, yasak mı?",
     "explain": "<b>لَا</b> muzariden önce iki şekilde gelir. <b>Nefy lâ'sı</b> fiili değiştirmez, «-maz/-mez» anlamı verir: <span class='ar-inline'>لَا يَخْضَعُ لِنِظَامٍ</span> (düzene boyun eğmez). <b>Nehy lâ'sı</b> (yasak) muhatap fiilini cezm eder: <span class='ar-inline'>لَا تَسْتَصْغِرْ</span> (küçümseme!). Cezmli fiilin ardından vasıl hemzesi gelirse sükûn kesreye döner: <span class='ar-inline'>وَلَا تَسْتَصْغِرِ الشَّرَارَةَ</span>.",
     "examples": [
      "لَا يَخْضَعُ لِنِظَامٍ، وَلَا يَتَقَيَّدُ بِقَانُونٍ",
      "وَلَا تَسْتَصْغِرِ الشَّرَارَةَ مَهْمَا كَانَتْ تَافِهَةً",
      "الْحَقُّ مِنْ رَبِّكَ فَلَا تَكُنْ مِنَ الْمُمْتَرِينَ"
     ],
     "items": [
      {
       "q": "«لَا يُعَظِّمُ عَظِيمًا» — buradaki لَا:",
       "o": [
        "olumsuzluk (nefy)",
        "yasak (nehy)",
        "soru"
       ],
       "a": 0
      },
      {
       "q": "____ الشَّرَارَةَ! (küçümseme)",
       "o": [
        "لَا تَسْتَصْغِرِ",
        "لَا تَسْتَصْغِرُ",
        "لَا يَسْتَصْغِرُونَ"
       ],
       "a": 0
      },
      {
       "q": "فَلَا ____ مِنَ الْمُمْتَرِينَ.",
       "o": [
        "تَكُنْ",
        "تَكُونُ",
        "كَانَ"
       ],
       "a": 0
      },
      {
       "q": "«لَا يَتَقَيَّدُ بِقَانُونٍ» = …",
       "o": [
        "Hiçbir kanuna bağlı kalmaz",
        "Kanuna bağlı kalma!",
        "Kanuna bağlı kaldı"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "طَلَبَ عِيسَى أَنْ تَكُونَ الْمَائِدَةُ {عِيدًا} لَهُمْ. ثُمَّ رَفَعَ الْيَهُودُ قَضِيَّتَهُ إِلَى الْحَاكِمِ {الرُّومِيِّ}، وَقَالُوا: إِنَّهُ {خَطَرٌ} عَلَى الدَّوْلَةِ. وَخَلَطُوا الْكَلَامَ بِ{السِّيَاسَةِ}، وَاشْتَدَّ {إِلْحَاحُهُمْ}."
    },
    "think": {
     "q": "لِمَاذَا يَصِفُ الْكِتَابُ كَلَامَ الْيَهُودِ بِأَنَّهُ «مَمْلُوءٌ بِالْمَكْرِ وَالدَّهَاءِ»؟",
     "qt": "Kitap Yahudilerin sözünü neden «hile ve kurnazlıkla dolu» diye niteliyor?",
     "model": "Asıl rahatsızlıkları dinîydi; ama Roma yönetimi dinî tartışmalara karışmıyordu. Bu yüzden Îsâ'yı devlet için tehlikeli bir isyancı gibi gösterdiler; «kıvılcımı küçümseme» diyerek valiyi korkuttular. Gerçek sebebi gizleyip dinleyeni harekete geçirecek bir sebep uydurmak, kurnazlığın tipik bir örneğidir."
    },
    "retell": [
     "عِيدًا لِأَوَّلِنَا وَآخِرِنَا",
     "عِيلَ صَبْرُ الْيَهُودِ",
     "الْحَاكِمُ الرُّومِيُّ",
     "ثَائِرٌ فَوْضَوِيٌّ",
     "خَلَطُوا الْكَلَامَ بِالسِّيَاسَةِ",
     "حَدِيثُ الْبَلَدِ"
    ],
    "quran": [
     {
      "ar": "قَالَ عِيسَى ابْنُ مَرْيَمَ اللَّهُمَّ رَبَّنَا أَنْزِلْ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ تَكُونُ لَنَا عِيدًا لِأَوَّلِنَا وَآخِرِنَا وَآيَةً مِنْكَ",
      "ref": "Mâide 5:114",
      "tr": "Meryem oğlu Îsâ: «Allah'ım, Rabbimiz! Bize gökten bir sofra indir; o bizim için, öncekilerimiz ve sonrakilerimiz için bir bayram ve senden bir mucize olsun» dedi.",
      "inText": "«اللّٰهُمَّ رَبَّنَا أَنْزِلْ عَلَيْنَا مَائِدَةً …»"
     },
     {
      "ar": "قَالَ اللَّهُ إِنِّي مُنَزِّلُهَا عَلَيْكُمْ ۖ فَمَنْ يَكْفُرْ بَعْدُ مِنْكُمْ فَإِنِّي أُعَذِّبُهُ عَذَابًا لَا أُعَذِّبُهُ أَحَدًا مِنَ الْعَالَمِينَ",
      "ref": "Mâide 5:115",
      "tr": "Allah: «Ben onu size indireceğim; ama bundan sonra sizden kim inkâr ederse, ona âlemlerden hiç kimseye etmeyeceğim bir azabı ederim» dedi.",
      "inText": "«قَالَ اللهُ إِنِّي مُنَزِّلُهَا عَلَيْكُمْ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 22,
     "title_ar": "الْقُرْآنُ يَحْكِي الْقِصَّةَ",
     "title_tr": "Kur'an kıssayı anlatıyor",
     "s": [
      [
       "وَدَعُوا الْقُرْآنَ يَحْكِي هٰذِهِ الْقِصَّةَ:",
       "Bu kıssayı Kur'an'ın anlatmasına bırakın:"
      ],
      [
       "«إِذْ قَالَ الْحَوَارِيُّونَ يَا عِيسَى ابْنَ مَرْيَمَ هَلْ يَسْتَطِيعُ رَبُّكَ أَنْ يُنَزِّلَ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ قَالَ اتَّقُوا اللهَ إِنْ كُنْتُمْ مُؤْمِنِينَ».",
       "«Hani havariler: 'Ey Meryem oğlu Îsâ! Rabbin bize gökten bir sofra indirebilir mi?' demişlerdi. (Îsâ): 'İnanıyorsanız Allah'tan korkun' demişti.»"
      ],
      [
       "«قَالُوا نُرِيدُ أَنْ نَأْكُلَ مِنْهَا وَتَطْمَئِنَّ قُلُوبُنَا وَنَعْلَمَ أَنْ قَدْ صَدَقْتَنَا وَنَكُونَ عَلَيْهَا مِنَ الشَّاهِدِينَ».",
       "«'Ondan yemek, kalplerimizin yatışması, bize doğru söylediğini bilmek ve ona şahitlerden olmak istiyoruz' dediler.»"
      ],
      [
       "«قَالَ عِيسَى ابْنُ مَرْيَمَ اللّٰهُمَّ رَبَّنَا أَنْزِلْ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ تَكُونُ لَنَا عِيدًا لِأَوَّلِنَا وَآخِرِنَا وَآيَةً مِنْكَ وَارْزُقْنَا وَأَنْتَ خَيْرُ الرَّازِقِينَ».",
       "«Meryem oğlu Îsâ: 'Allah'ım, Rabbimiz! Bize gökten bir sofra indir; o bizim için, öncekilerimiz ve sonrakilerimiz için bir bayram ve senden bir mucize olsun. Bizi rızıklandır; sen rızık verenlerin en hayırlısısın' dedi.»"
      ],
      [
       "«قَالَ اللهُ إِنِّي مُنَزِّلُهَا عَلَيْكُمْ فَمَنْ يَكْفُرْ بَعْدُ مِنْكُمْ فَإِنِّي أُعَذِّبُهُ عَذَابًا لَا أُعَذِّبُهُ أَحَدًا مِنَ الْعَالَمِينَ».",
       "«Allah buyurdu: 'Ben onu size indireceğim; ama bundan sonra sizden kim inkâr ederse, ona âlemlerden hiç kimseye etmeyeceğim bir azabı ederim.'»"
      ]
     ]
    },
    {
     "n": 23,
     "title_ar": "الْيَهُودُ يُحَاوِلُونَ التَّخَلُّصَ مِنْ سَيِّدِنَا عِيسَى",
     "title_tr": "Yahudiler efendimiz Îsâ'dan kurtulmaya çalışıyor",
     "s": [
      [
       "وَعِيلَ صَبْرُ الْيَهُودِ، وَفَاضَتْ كَأْسُ عَدَاوَتِهِمْ وَعِنَادِهِمْ، فَأَرَادُوا التَّخَلُّصَ مِنْ سَيِّدِنَا عِيسَى.",
       "Yahudilerin sabrı tükendi, düşmanlık ve inat kadehleri taştı; efendimiz Îsâ'dan kurtulmak istediler."
      ],
      [
       "فَرَفَعُوا قَضِيَّتَهُ إِلَى الْحَاكِمِ الرُّومِيِّ، وَقَالُوا: إِنَّهُ رَجُلٌ ثَائِرٌ فَوْضَوِيٌّ، مَرَقَ مِنْ دِينِنَا، وَاسْتَهْوَى شَبَابَنَا، فَفَتَنُوا بِهِ، وَفَرَّقَ أَمْرَنَا، وَسَفَّهَ أَحْلَامَنَا، وَشَغَلَ بَالَنَا.",
       "Davasını Romalı valiye taşıdılar ve dediler ki: «O isyancı, düzen tanımaz bir adamdır; dinimizden çıktı, gençlerimizi kendine çekti, onlar da onunla fitneye düştüler. Birliğimizi dağıttı, akıllarımızı küçümsedi ve aklımızı meşgul etti.»"
      ]
     ]
    },
    {
     "n": 24,
     "title_ar": "أُسْلُوبُ النَّاقِمِينَ وَالسِّيَاسِيِّينَ",
     "title_tr": "Kin besleyenlerin ve siyasetçilerin üslubu",
     "s": [
      [
       "وَهُوَ خَطَرٌ عَلَى الدَّوْلَةِ، لَا يَخْضَعُ لِنِظَامٍ، وَلَا يَتَقَيَّدُ بِقَانُونٍ، وَلَا يُعَظِّمُ عَظِيمًا، وَلَا يُقَدِّسُ قَدِيمًا.",
       "«O devlet için bir tehlikedir; hiçbir düzene boyun eğmez, hiçbir kanuna bağlı kalmaz, büyüğe saygı göstermez, eskiyi kutsal saymaz."
      ],
      [
       "وَهُوَ رَجُلٌ ثَوْرِيٌّ، إِذَا لَمْ يُكَفَّ شَرُّهُ فَإِنَّهُ يَتَفَاقَمُ، وَلَا تَسْتَصْغِرِ الشَّرَارَةَ مَهْمَا كَانَتْ تَافِهَةً.",
       "O bir devrimcidir; şerri durdurulmazsa büyür. Kıvılcım ne kadar önemsiz olursa olsun onu küçümseme!»"
      ]
     ]
    },
    {
     "n": 25,
     "title_ar": "مَكْرٌ وَدَهَاءٌ",
     "title_tr": "Hile ve kurnazlık",
     "s": [
      [
       "وَكَانَ كَلَامًا مَمْلُوءًا بِالْمَكْرِ وَالدَّهَاءِ، مَصْبُوغًا بِالصِّبْغَةِ السِّيَاسِيَّةِ.",
       "Bu, hile ve kurnazlıkla dolu, siyasi bir renge boyanmış bir sözdü."
      ],
      [
       "وَكَانُوا يَعْرِفُونَ أَنَّ الْجَانِبَ الدِّينِيَّ لَا يُثِيرُ الْحُكَّامَ وَلَا يَهُمُّهُمْ، فَقَدْ كَانَ مِنْ سِيَاسَتِهِمْ أَنْ لَا يَتَدَخَّلُوا فِي أُمُورِ الْيَهُودِ الدِّينِيَّةِ، وَلِذٰلِكَ خَلَطُوا الْكَلَامَ بِالسِّيَاسَةِ.",
       "Dinî tarafın yöneticileri harekete geçirmediğini ve onları ilgilendirmediğini biliyorlardı; çünkü Yahudilerin dinî işlerine karışmamak onların siyasetiydi. Bu yüzden sözü siyasetle karıştırdılar."
      ]
     ]
    },
    {
     "n": 26,
     "title_ar": "مُشْكِلَةٌ",
     "title_tr": "Bir sorun",
     "s": [
      [
       "وَكَانَ مِنَ الصَّعْبِ أَنْ يَتَحَقَّقَ الْحُكَّامُ الْأَجَانِبُ الْمُشْرِكُونَ حَقِيقَةَ الْأَمْرِ، وَيَعْرِفُوا أَغْرَاضَ الْيَهُودِ، وَسَبَبَ عَدَاوَتِهِمْ لِلْمَسِيحِ.",
       "Yabancı ve müşrik yöneticilerin işin aslını araştırıp anlamaları, Yahudilerin amaçlarını ve Mesih'e düşmanlıklarının sebebini bilmeleri zordu."
      ],
      [
       "وَكَانُوا فِي شُغْلٍ شَاغِلٍ عَنْ ذٰلِكَ بِالْأُمُورِ الْإِدَارِيَّةِ.",
       "Üstelik idari işlerle başlarını kaşıyacak vakitleri yoktu."
      ],
      [
       "وَلٰكِنِ اشْتَدَّ إِلْحَاحُ الْيَهُودِ، وَطَالَ تَرَدُّدُهُمْ إِلَيْهِمْ، فَأَرَادُوا التَّخَلُّصَ مِنْ هٰذِهِ الْقَضِيَّةِ الَّتِي أَصْبَحَتْ حَدِيثَ الْبَلَدِ.",
       "Ama Yahudilerin ısrarı arttı, onlara gidip gelmeleri uzadı; (yöneticiler de) şehrin dilinde dolaşan bu davadan kurtulmak istediler."
      ]
     ]
    }
   ]
  },
  {
   "id": 9,
   "emoji": "🌇",
   "title_ar": "فِي الْمَحْكَمَةِ",
   "title_tr": "Mahkemede",
   "pre": {
    "predict": {
     "prompt_tr": "Mahkeme cuma günü ikindiden sonra kuruldu; Yahudiler cumartesi hiç iş yapmazdı. Sence bu durum hükmü nasıl etkiledi?",
     "options": [
      [
       "أَسْرَعُوا فِي الْحُكْمِ قَبْلَ الْغُرُوبِ",
       "Gün batmadan hükmü çabucak çıkardılar"
      ],
      [
       "أَجَّلُوا الْحُكْمَ شَهْرًا",
       "Hükmü bir ay ertelediler"
      ],
      [
       "أَطْلَقُوا سَرَاحَهُ",
       "Onu serbest bıraktılar"
      ]
     ]
    },
    "vocab": [
     [
      "الْمَحْكَمَةُ",
      "mahkeme",
      "🏛️"
     ],
     [
      "السَّبْتُ",
      "cumartesi",
      "📅"
     ],
     [
      "الْغُرُوبُ",
      "güneşin batışı",
      "🌇"
     ],
     [
      "الصَّلِيبُ",
      "çarmıh",
      "✝️"
     ],
     [
      "الشُّرْطَةُ",
      "polis",
      "👮"
     ],
     [
      "لَاغِبٌ",
      "yorgun, bitkin",
      "😩"
     ]
    ]
   },
   "stop": {
    "section": 27,
    "after": 5,
    "prompt_tr": "Vali sıkılmıştı, vakit kısaydı, kalabalık bağırıyordu ve güneş batmak üzereydi. Sence nasıl bir karar verdi?",
    "options": [
     [
      "حَكَمَ عَلَيْهِ بِالصَّلْبِ",
      "Asılmasına hükmetti"
     ],
     [
      "بَرَّأَهُ",
      "Onu beraat ettirdi"
     ],
     [
      "سَجَنَهُ يَوْمًا",
      "Onu bir gün hapsetti"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "كَانَتِ الْمَحْكَمَةُ يَوْمَ الْجُمُعَةِ بَعْدَ الْعَصْرِ.",
     "احْتَشَدَ الْيَهُودُ لِسَمَاعِ الْحُكْمِ.",
     "أَصْدَرَ الْحَاكِمُ الْحُكْمَ بِالصَّلْبِ.",
     "كَانَ عَلَى الْمَحْكُومِ أَنْ يَحْمِلَ صَلِيبَهُ.",
     "كَانَ الْمَسِيحُ لَاغِبًا لَا يَسْتَطِيعُ أَنْ يُسْرِعَ."
    ],
    "questions": [
     {
      "q": "مَتَى كَانَتِ الْمُحَاكَمَةُ؟",
      "qt": "Yargılama ne zamandı?",
      "o": [
       "يَوْمَ الْجُمُعَةِ بَعْدَ الْعَصْرِ",
       "يَوْمَ السَّبْتِ صَبَاحًا",
       "فِي مُنْتَصَفِ اللَّيْلِ"
      ],
      "ot": [
       "Cuma günü ikindiden sonra",
       "Cumartesi sabahı",
       "Gece yarısı"
      ],
      "a": 0,
      "ev": [
       "27.0"
      ]
     },
     {
      "q": "لِمَاذَا كَانَ الْيَهُودُ حَرِيصِينَ عَلَى الْحُكْمِ قَبْلَ الْغُرُوبِ؟",
      "qt": "Yahudiler neden hükmün gün batmadan çıkmasını çok istiyordu?",
      "o": [
       "لِأَنَّهُمْ لَا يَعْمَلُونَ شَيْئًا يَوْمَ السَّبْتِ",
       "لِأَنَّهُمْ جَائِعُونَ",
       "لِأَنَّ الْحَاكِمَ سَيُسَافِرُ"
      ],
      "ot": [
       "Çünkü cumartesi hiçbir iş yapmazlardı",
       "Çünkü açtılar",
       "Çünkü vali yolculuğa çıkacaktı"
      ],
      "a": 0,
      "ev": [
       "27.1"
      ]
     },
     {
      "q": "هَلْ كَانَتْ لِلْحَاكِمِ مَصْلَحَةٌ فِي الْقَضِيَّةِ؟",
      "qt": "Valinin davada bir çıkarı var mıydı?",
      "o": [
       "لَا، لَمْ تَكُنْ لَهُ فِيهَا رَغْبَةٌ وَلَا مَصْلَحَةٌ",
       "نَعَمْ، كَانَ يَكْرَهُ عِيسَى",
       "نَعَمْ، أَخَذَ مَالًا"
      ],
      "ot": [
       "Hayır, ne isteği ne çıkarı vardı",
       "Evet, Îsâ'dan nefret ediyordu",
       "Evet, para aldı"
      ],
      "a": 0,
      "ev": [
       "27.4"
      ]
     },
     {
      "q": "مَاذَا كَانَ يُوجِبُ الْقَانُونُ الْجِنَائِيُّ عَلَى الْمَحْكُومِ؟",
      "qt": "Ceza kanunu mahkûma neyi zorunlu kılıyordu?",
      "o": [
       "أَنْ يَحْمِلَ صَلِيبَهُ بِنَفْسِهِ",
       "أَنْ يَدْفَعَ غَرَامَةً",
       "أَنْ يُسَافِرَ"
      ],
      "ot": [
       "Çarmıhını kendisinin taşımasını",
       "Para cezası ödemesini",
       "Yolculuğa çıkmasını"
      ],
      "a": 0,
      "ev": [
       "28.0"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَسْتَطِعِ الْمَسِيحُ أَنْ يُسْرِعَ فِي الْمَشْيِ؟",
      "qt": "Mesih neden hızlı yürüyemedi?",
      "o": [
       "لِأَنَّهُ كَانَ لَاغِبًا وَالصَّلِيبُ ثَقِيلًا",
       "لِأَنَّهُ لَمْ يُرِدِ الذَّهَابَ",
       "لِأَنَّ الطَّرِيقَ مُغْلَقٌ"
      ],
      "ot": [
       "Çünkü bitkindi ve çarmıh ağırdı",
       "Çünkü gitmek istemedi",
       "Çünkü yol kapalıydı"
      ],
      "a": 0,
      "ev": [
       "29.1"
      ]
     }
    ],
    "focus": {
     "title": "كَانَ + haber (mansub): كَانَ الصَّلِيبُ ثَقِيلًا",
     "explain": "<b>كَانَ</b> isim cümlesinin başına gelince öznesi (ismi) merfû kalır, haberi mansub olur: <span class='ar-inline'>الصَّلِيبُ ثَقِيلٌ</span> → <span class='ar-inline'>كَانَ الصَّلِيبُ ثَقِيلًا</span>. Aynı kural <span class='ar-inline'>لَيْسَ، صَارَ، أَصْبَحَ، مَا زَالَ</span> için de geçerlidir. Haber şibh-i cümle ise (cer harfi + isim) şekli değişmez: <span class='ar-inline'>وَكَانَ ذٰلِكَ يَوْمَ الْجُمُعَةِ</span>.",
     "examples": [
      "وَكَانَ الْمَشْنَقُ بَعِيدًا",
      "وَكَانَ السَّيِّدُ الْمَسِيحُ لَاغِبًا",
      "وَكَانَ الْجَمْعُ حَاشِدًا"
     ],
     "items": [
      {
       "q": "كَانَ الصَّلِيبُ ____ .",
       "o": [
        "ثَقِيلًا",
        "ثَقِيلٌ",
        "ثَقِيلٍ"
       ],
       "a": 0
      },
      {
       "q": "كَانَ ____ بَعِيدًا.",
       "o": [
        "الْمَشْنَقُ",
        "الْمَشْنَقَ",
        "الْمَشْنَقِ"
       ],
       "a": 0
      },
      {
       "q": "وَكَانَ الْوَقْتُ ____ .",
       "o": [
        "قَصِيرًا",
        "قَصِيرٌ",
        "قِصَرٌ"
       ],
       "a": 0
      },
      {
       "q": "«كَانَ الْمَسِيحُ لَاغِبًا» = …",
       "o": [
        "Mesih bitkindi",
        "Mesih bitkin değil",
        "Mesih bitkin olacak"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "كَانَ ذٰلِكَ يَوْمَ {الْجُمُعَةِ} بَعْدَ الْعَصْرِ. وَكَانَ الْيَهُودُ لَا يَعْمَلُونَ شَيْئًا يَوْمَ {السَّبْتِ}. فَأَصْدَرَ الْحَاكِمُ الْحُكْمَ بِ{الصَّلْبِ}. وَكَانَ الصَّلِيبُ {ثَقِيلًا}، وَكَانَ الْمَسِيحُ {لَاغِبًا}."
    },
    "think": {
     "q": "مَا الْعَوَامِلُ الَّتِي جَعَلَتِ الْحَاكِمَ يُسْرِعُ فِي الْحُكْمِ؟",
     "qt": "Valinin hükmü aceleyle vermesinde hangi etkenler rol oynadı?",
     "model": "Metin birkaç sebep sayıyor: Vakit kısaydı ve güneş batmak üzereydi; Yahudiler cumartesiden önce işi bitirmek istiyordu; kalabalık bağırıp baskı yapıyordu; valinin de davada ne bir isteği ne bir çıkarı vardı, sadece bu dertten kurtulmak istiyordu. Adaletin değil baskının ve aceleciliğin belirlediği bir karar ortaya çıktı."
    },
    "personal": {
     "q": "أَسْرَعَ الْحَاكِمُ فِي الْحُكْمِ بِسَبَبِ الضَّغْطِ. هَلْ تَسَرَّعْتَ مَرَّةً فِي قَرَارٍ؟",
     "qt": "Vali baskı yüzünden aceleyle hüküm verdi. Sen hiç aceleyle bir karar verdin mi? Kısa bir Arapça cümle yaz.",
     "hint": [
      "تَسَرَّعْتُ مَرَّةً فِي …",
      "لَا أَتَسَرَّعُ لِأَنَّ …",
      "أُفَكِّرُ قَبْلَ …"
     ]
    },
    "retell": [
     "يَوْمُ الْجُمُعَةِ",
     "يَوْمُ السَّبْتِ",
     "الشَّمْسُ مَالَتْ لِلْغُرُوبِ",
     "الْحُكْمُ بِالصَّلْبِ",
     "يَحْمِلُ صَلِيبَهُ",
     "لَاغِبًا"
    ],
    "quran": [
     {
      "ar": "وَاسْأَلْهُمْ عَنِ الْقَرْيَةِ الَّتِي كَانَتْ حَاضِرَةَ الْبَحْرِ إِذْ يَعْدُونَ فِي السَّبْتِ",
      "ref": "A'râf 7:163",
      "tr": "Onlara, deniz kıyısındaki o şehrin halkını sor; hani onlar cumartesi yasağını çiğniyorlardı.",
      "inText": "«وَكَانَ الْيَهُودُ لَا يَعْمَلُونَ شَيْئًا يَوْمَ السَّبْتِ»"
     }
    ]
   },
   "sections": [
    {
     "n": 27,
     "title_ar": "سَيِّدُنَا الْمَسِيحُ فِي الْمَحْكَمَةِ",
     "title_tr": "Efendimiz Mesih mahkemede",
     "s": [
      [
       "وَكَانَ ذٰلِكَ يَوْمَ الْجُمُعَةِ بَعْدَ الْعَصْرِ، لَيْلَةَ السَّبْتِ.",
       "Bu, cuma günü ikindiden sonra, cumartesi gecesiydi."
      ],
      [
       "وَكَانَ الْيَهُودُ لَا يَعْمَلُونَ شَيْئًا يَوْمَ السَّبْتِ، وَكَانَ يَوْمَ عُطْلَةٍ وَكَفٍّ عَنِ الْعَمَلِ.",
       "Yahudiler cumartesi günü hiçbir iş yapmazlardı; o gün tatil ve işten el çekme günüydü."
      ],
      [
       "فَكَانُوا حَرِيصِينَ كُلَّ الْحِرْصِ عَلَى أَنْ يَصْدُرَ الْحُكْمُ قَبْلَ أَنْ تَغْرُبَ شَمْسُ يَوْمِ الْجُمُعَةِ، وَيَسْتَرِيحُوا مِنْ أَمْرِ الْمَسِيحِ.",
       "Bu yüzden hükmün cuma günü güneş batmadan çıkmasını ve Mesih meselesinden kurtulmayı çok istiyorlardı."
      ],
      [
       "فَيَنَامُوا هَادِئِي الْبَالِ، وَيُصْبِحُوا نَاعِمِي الْبَالِ لَا يُزْعِجُهُمْ شَيْءٌ.",
       "Böylece gönül rahatlığıyla uyuyacak, hiçbir şeyin rahatsız etmediği huzurlu bir sabaha uyanacaklardı."
      ],
      [
       "وَقَدْ ضَاقَ الْحَاكِمُ بِالْقَضِيَّةِ ذَرْعًا، وَلَيْسَ لَهُ فِيهَا رَغْبَةٌ وَلَا لِأُمَّتِهِ فِيهَا مَصْلَحَةٌ.",
       "Vali bu davadan bıkıp usanmıştı; onda ne kendisinin bir isteği ne de milletinin bir çıkarı vardı."
      ],
      [
       "وَقَدِ احْتَشَدَ الْيَهُودُ لِسَمَاعِ الْحُكْمِ، وَهُمْ بَيْنَ صَائِحٍ وَهَاتِفٍ وَمُنْذِرٍ وَمُتَحَكِّمٍ.",
       "Yahudiler hükmü duymak için toplanmıştı; kimi bağırıyor, kimi slogan atıyor, kimi tehdit ediyor, kimi dayatıyordu."
      ],
      [
       "وَالْحَاكِمُ مُتَضَايِقٌ، وَالْوَقْتُ قَصِيرٌ، وَالشَّمْسُ قَدْ مَالَتْ لِلْغُرُوبِ، فَأَصْدَرَ الْحُكْمَ عَلَيْهِ بِالْقَتْلِ صَلْبًا.",
       "Vali sıkılmıştı, vakit kısaydı, güneş batmak üzereydi; o da onun asılarak öldürülmesine hükmetti."
      ]
     ]
    },
    {
     "n": 28,
     "title_ar": "الْقَانُونُ الْجِنَائِيُّ فِي ذٰلِكَ الْعَصْرِ",
     "title_tr": "O çağın ceza kanunu",
     "s": [
      [
       "وَكَانَ الْقَانُونُ الْجِنَائِيُّ فِي ذٰلِكَ الْعَصْرِ يُوجِبُ أَنْ يَحْمِلَ الْمَحْكُومُ عَلَيْهِ بِالشَّنْقِ صَلِيبَهُ الَّذِي يُصْلَبُ عَلَيْهِ.",
       "O çağın ceza kanunu, idama mahkûm edilen kişinin üzerine asılacağı çarmıhı kendisinin taşımasını gerektiriyordu."
      ],
      [
       "وَكَانَ الْمَشْنَقُ بَعِيدًا كَمَا هِيَ الْعَادَةُ فِي الْبِلَادِ الْمُتَمَدِّنَةِ، وَكَانَ الْجَمْعُ حَاشِدًا يَتَسَاقَطُ بَعْضُهُ عَلَى بَعْضٍ.",
       "Medeni memleketlerde âdet olduğu üzere idam yeri uzaktaydı; kalabalık da birbirinin üstüne düşecek kadar yoğundu."
      ],
      [
       "وَكَانَ رِجَالُ الشُّرْطَةِ، وَأَكْثَرُهُمْ مِنَ الْأَجَانِبِ، مَأْمُورِينَ مُوَظَّفِينَ لَا رَغْبَةَ لَهُمْ فِي هٰذِهِ الْقَضِيَّةِ.",
       "Çoğu yabancılardan olan polisler, bu davada hiçbir istekleri olmayan, emir altındaki memurlardı."
      ],
      [
       "وَكَانَ الْإِسْرَائِيلِيُّونَ أَشْبَاهًا عِنْدَهُمْ يَلْتَبِسُ عَلَيْهِمْ أَمْرُهُمْ، فَلَا يُمَيِّزُونَ بَيْنَهُمْ، شَأْنُ الْأَجَانِبِ فِي نَظَرِ الْأَجَانِبِ.",
       "İsrailoğulları onların gözünde birbirine benzerdi, onları karıştırırlardı; yabancıların yabancılara bakışında olduğu gibi aralarında ayrım yapamazlardı."
      ],
      [
       "وَكَانَ الْوَقْتُ مَسَاءً قَدْ مَدَّ الظَّلَامُ رِوَاقَهُ.",
       "Vakit akşamdı; karanlık örtüsünü germişti."
      ],
      [
       "وَكَانَ بَعْضُ الْيَهُودِ وَالْمُتَحَمِّسِينَ السُّفَهَاءِ مِنَ الشَّبَابِ يَنَالُونَ عَلَى السَّيِّدِ الْمَسِيحِ، وَيَتَدَافَعُونَ عَلَيْهِ، يَسُبُّونَهُ وَيُعَيِّرُونَهُ، وَيُرِيدُونَ إِيذَاءَهُ وَإِهَانَتَهُ.",
       "Bazı Yahudiler ve gençlerden bazı coşkulu beyinsizler efendimiz Mesih'e saldırıyor, üzerine itişip kakışıyor, ona sövüp ayıplıyor, ona eziyet edip onu aşağılamak istiyorlardı."
      ]
     ]
    },
    {
     "n": 29,
     "title_ar": "عِيسَى يَتَحَمَّلُ الْأَذَى",
     "title_tr": "Îsâ eziyete katlanıyor",
     "s": [
      [
       "وَكَانَ السَّيِّدُ الْمَسِيحُ لَاغِبًا، قَدْ أَضْنَاهُ الْجُهْدُ، وَطُولُ الْوُقُوفِ فِي الْمَحْكَمَةِ، وَتَحَمُّلُ الْأَذَى.",
       "Efendimiz Mesih yorgun düşmüştü; çaba, mahkemede uzun süre ayakta durmak ve eziyetlere katlanmak onu bitkin bırakmıştı."
      ],
      [
       "وَكَانَ الصَّلِيبُ ثَقِيلًا، وَقَدْ كُلِّفَ حَمْلَهُ، فَكَانَ لَا يَسْتَطِيعُ أَنْ يُسْرِعَ فِي الْمَشْيِ.",
       "Çarmıh ağırdı ve onu taşımakla yükümlü tutulmuştu; bu yüzden hızlı yürüyemiyordu."
      ]
     ]
    }
   ]
  },
  {
   "id": 10,
   "emoji": "🌑",
   "title_ar": "وَلٰكِنْ شُبِّهَ لَهُمْ",
   "title_tr": "Ama onlara benzer gösterildi",
   "pre": {
    "predict": {
     "prompt_tr": "Polis, Îsâ'ya en çok eziyet eden gence çarmıhı taşıttı. Hava kararmıştı ve idam yerinin polisleri yerel dili bilmiyordu. Sence ne oldu?",
     "options": [
      [
       "أَخَذُوا الشَّابَّ بَدَلًا مِنْ عِيسَى",
       "Îsâ yerine genci aldılar"
      ],
      [
       "عَرَفُوا عِيسَى بِسُهُولَةٍ",
       "Îsâ'yı kolayca tanıdılar"
      ],
      [
       "هَرَبَ الْجَمِيعُ",
       "Herkes kaçtı"
      ]
     ]
    },
    "vocab": [
     [
      "تَدْبِيرٌ",
      "tedbir, düzen",
      "🧩"
     ],
     [
      "الْعُودُ",
      "tahta, sopa",
      "🪵"
     ],
     [
      "الْمَوْكِبُ",
      "kafile, alay",
      "🚶‍♂️"
     ],
     [
      "الضَّجِيجُ",
      "gürültü",
      "📢"
     ],
     [
      "بَرَاءَةٌ",
      "suçsuzluk",
      "🕊️"
     ],
     [
      "الظَّلَامُ",
      "karanlık",
      "🌑"
     ]
    ]
   },
   "stop": {
    "section": 31,
    "after": 1,
    "prompt_tr": "İdam yerinin polisleri işi devraldı; genci çarmıhı taşırken gördüler. Ortalık karışmıştı. Sence kimi aldılar?",
    "options": [
     [
      "الشَّابَّ الْحَامِلَ لِلصَّلِيبِ",
      "Çarmıhı taşıyan genci"
     ],
     [
      "عِيسَى",
      "Îsâ'yı"
     ],
     [
      "الْحَاكِمَ",
      "Valiyi"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "أَمَرَ الشُّرْطِيُّ شَابًّا إِسْرَائِيلِيًّا بِحَمْلِ الْعُودِ.",
     "وَصَلَ الْمَوْكِبُ إِلَى بَابِ الْمَشْنَقِ.",
     "أَخَذَ شُرْطَةُ الْمَشْنَقِ الشَّابَّ.",
     "ظَنَّ الْيَهُودُ أَنَّ الْمَصْلُوبَ هُوَ الْمَسِيحُ.",
     "نَجَّى اللهُ عِيسَى وَرَفَعَهُ إِلَيْهِ."
    ],
    "questions": [
     {
      "q": "مَنْ أُمِرَ بِحَمْلِ الصَّلِيبِ؟",
      "qt": "Çarmıhı taşıması kime emredildi?",
      "o": [
       "شَابٌّ إِسْرَائِيلِيٌّ",
       "أَحَدُ الْحَوَارِيِّينَ",
       "الْحَاكِمُ"
      ],
      "ot": [
       "İsrailoğullarından bir genç",
       "Havarilerden biri",
       "Vali"
      ],
      "a": 0,
      "ev": [
       "30.0"
      ]
     },
     {
      "q": "كَيْفَ كَانَ هٰذَا الشَّابُّ؟",
      "qt": "Bu genç nasıl biriydi?",
      "o": [
       "أَحْرَصَ زُمَلَائِهِ عَلَى إِيذَاءِ الْمَسِيحِ",
       "مِنْ أَتْبَاعِ الْمَسِيحِ",
       "طَبِيبًا رُومِيًّا"
      ],
      "ot": [
       "Arkadaşları içinde Mesih'e eziyete en hevesli olan",
       "Mesih'in takipçilerinden",
       "Romalı bir doktor"
      ],
      "a": 0,
      "ev": [
       "30.1"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَلْتَفِتْ شُرْطَةُ الْمَشْنَقِ إِلَى صِيَاحِ الشَّابِّ؟",
      "qt": "İdam yerinin polisleri neden gencin bağırışına aldırmadı?",
      "o": [
       "لِأَنَّهُمْ لَا يَفْهَمُونَ لُغَتَهُ",
       "لِأَنَّهُمْ كَانُوا نِيَامًا",
       "لِأَنَّهُ كَانَ صَامِتًا"
      ],
      "ot": [
       "Çünkü onun dilini anlamıyorlardı",
       "Çünkü uyuyorlardı",
       "Çünkü o susuyordu"
      ],
      "a": 0,
      "ev": [
       "31.4"
      ]
     },
     {
      "q": "مَاذَا ظَنَّ الْيَهُودُ؟",
      "qt": "Yahudiler ne sandı?",
      "o": [
       "أَنَّ الْمَصْلُوبَ هُوَ الْمَسِيحُ",
       "أَنَّ الْمَسِيحَ هَرَبَ",
       "أَنَّ الْحَاكِمَ بَرَّأَهُ"
      ],
      "ot": [
       "Asılanın Mesih olduğunu",
       "Mesih'in kaçtığını",
       "Valinin onu beraat ettirdiğini"
      ],
      "a": 0,
      "ev": [
       "32.1"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ اللهُ بِعِيسَى؟",
      "qt": "Allah Îsâ'ya ne yaptı?",
      "o": [
       "نَجَّاهُ وَرَفَعَهُ إِلَيْهِ",
       "تَرَكَهُ لِلْيَهُودِ",
       "أَرْسَلَهُ إِلَى مِصْرَ"
      ],
      "ot": [
       "Onu kurtarıp kendi katına yükseltti",
       "Onu Yahudilere bıraktı",
       "Onu Mısır'a gönderdi"
      ],
      "a": 0,
      "ev": [
       "33.0"
      ]
     }
    ],
    "focus": {
     "title": "İsm-i tafdil: أَشَدُّ، أَكْثَرُ، أَحْرَصُ",
     "explain": "Karşılaştırma ve üstünlük için <b>أَفْعَلُ</b> kalıbı kullanılır: <span class='ar-inline'>حَرِيصٌ → أَحْرَصُ</span> (daha/en hevesli), <span class='ar-inline'>كَثِيرٌ → أَكْثَرُ</span>, <span class='ar-inline'>شَدِيدٌ → أَشَدُّ</span>. Bir isme izafe edilince «en …» anlamı verir: <span class='ar-inline'>أَشَدَّ زُمَلَائِهِ حَمَاسَةً</span> (arkadaşlarının en coşkulusu). Ardından gelen mansub isim (temyiz) neyde üstün olduğunu söyler: <span class='ar-inline'>حَمَاسَةً، سَفَاهَةً</span>.",
     "examples": [
      "وَكَانَ أَشَدَّ زُمَلَائِهِ حَمَاسَةً، وَأَكْثَرَهُمْ سَفَاهَةً",
      "وَأَحْرَصَهُمْ عَلَى إِيذَاءِ السَّيِّدِ الْمَسِيحِ",
      "فَهُوَ أَعْلَى وَأَجَلُّ مِنْ ذٰلِكَ"
     ],
     "items": [
      {
       "q": "حَرِيصٌ → ____",
       "o": [
        "أَحْرَصُ",
        "حُرَصَاءُ",
        "مَحْرُوصٌ"
       ],
       "a": 0
      },
      {
       "q": "كَانَ أَشَدَّ زُمَلَائِهِ ____ .",
       "o": [
        "حَمَاسَةً",
        "حَمَاسَةٌ",
        "حَمَاسَةٍ"
       ],
       "a": 0
      },
      {
       "q": "اللهُ ____ وَأَجَلُّ مِنْ ذٰلِكَ.",
       "o": [
        "أَعْلَى",
        "عَالٍ",
        "عُلُوٌّ"
       ],
       "a": 0
      },
      {
       "q": "«أَكْثَرُهُمْ سَفَاهَةً» = …",
       "o": [
        "Onların en beyinsizi",
        "Onların hepsi beyinsiz",
        "Onlar beyinsiz değil"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "أَمَرَ الشُّرْطِيُّ شَابًّا بِحَمْلِ {الْعُودِ}، وَكَانَ أَحْرَصَ زُمَلَائِهِ عَلَى {إِيذَاءِ} الْمَسِيحِ. فَأَخَذَهُ شُرْطَةُ {الْمَشْنَقِ}، وَهُوَ يُعْلِنُ {بَرَاءَتَهُ}. أَمَّا عِيسَى فَنَجَّاهُ اللهُ وَ{رَفَعَهُ} إِلَيْهِ."
    },
    "think": {
     "q": "كَيْفَ يُفَسِّرُ الْكِتَابُ قَوْلَهُ تَعَالَى: «وَلٰكِنْ شُبِّهَ لَهُمْ»؟",
     "qt": "Kitap «ama onlara benzer gösterildi» âyetini nasıl açıklıyor? Bu açıklama hakkında ne düşünüyorsun?",
     "model": "Yazar, çarmıha Îsâ yerine ona en çok eziyet eden gencin gerildiğini anlatıyor: karanlık, kalabalık, yabancı polislerin İsrailoğullarını birbirinden ayıramaması ve dili anlamamaları bu karışıklığa yol açmıştı. Bu, müfessirlerin «benzetilme» hakkındaki yorumlarından biridir. Kur'an ise yalnızca Îsâ'nın öldürülmediğini ve asılmadığını, Allah'ın onu kendi katına yükselttiğini bildirir; ayrıntılar yoruma açıktır."
    },
    "retell": [
     "شَابٌّ إِسْرَائِيلِيٌّ",
     "حَمْلُ الْعُودِ",
     "بَابُ الْمَشْنَقِ",
     "لَا يَفْهَمُونَ لُغَتَهُ",
     "شُبِّهَ لَهُمْ",
     "رَفَعَهُ إِلَيْهِ"
    ],
    "quran": [
     {
      "ar": "وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِنْ شُبِّهَ لَهُمْ",
      "ref": "Nisâ 4:157",
      "tr": "Onu öldürmediler ve asmadılar; fakat (öldürdükleri) onlara (Îsâ'ya) benzer gösterildi.",
      "inText": "Başlık: «وَلٰكِنْ شُبِّهَ لَهُمْ»"
     },
     {
      "ar": "وَمَكَرُوا وَمَكَرَ اللَّهُ ۖ وَاللَّهُ خَيْرُ الْمَاكِرِينَ",
      "ref": "Âl-i İmrân 3:54",
      "tr": "Onlar tuzak kurdular, Allah da (onların tuzaklarını boşa çıkaracak) tedbir aldı. Allah tedbir alanların en hayırlısıdır.",
      "inText": "«تَدْبِيرٌ إِلٰهِيٌّ»"
     }
    ]
   },
   "sections": [
    {
     "n": 30,
     "title_ar": "تَدْبِيرٌ إِلٰهِيٌّ",
     "title_tr": "İlahi bir tedbir",
     "s": [
      [
       "وَهُنَا أَمَرَ الشُّرْطِيُّ الْمُوَكَّلُ بِهِ شَابًّا إِسْرَائِيلِيًّا بِحَمْلِ الْعُودِ.",
       "İşte burada onunla görevli polis, İsrailoğullarından bir gence tahtayı (çarmıhı) taşımasını emretti."
      ],
      [
       "وَكَانَ أَشَدَّ زُمَلَائِهِ حَمَاسَةً، وَأَكْثَرَهُمْ سَفَاهَةً، وَأَحْرَصَهُمْ عَلَى إِيذَاءِ السَّيِّدِ الْمَسِيحِ وَمُبَادَرَتِهِ إِلَيْهِ.",
       "Bu genç arkadaşları arasında en coşkulu, en beyinsiz, efendimiz Mesih'e eziyet etmeye ve ona saldırmaya en hevesli olanıydı."
      ],
      [
       "حَتَّى يَنْتَهِيَ الْأَمْرُ سَرِيعًا، وَيَتَخَلَّصَ مِنْ هٰذِهِ الْمَسْؤُولِيَّةِ الْمُرْهِقَةِ.",
       "(Polis bunu) iş çabucak bitsin ve bu yorucu sorumluluktan kurtulsun diye (yaptı)."
      ]
     ]
    },
    {
     "n": 31,
     "title_ar": "وَلٰكِنْ شُبِّهَ لَهُمْ",
     "title_tr": "Ama onlara benzer gösterildi",
     "s": [
      [
       "وَهٰكَذَا وَصَلَ الْمَوْكِبُ إِلَى بَابِ الْمَشْنَقِ، فَتَقَدَّمَ شُرْطَةُ الْمَشْنَقِ، وَتَسَلَّمُوا الْأَمْرَ مِنَ الشُّرْطَةِ الْمَدَنِيِّينَ.",
       "Böylece kafile idam yerinin kapısına ulaştı; idam yerinin polisleri öne çıktı ve işi sivil polislerden devraldı."
      ],
      [
       "وَرَأَوُا الشَّابَّ يَحْمِلُ الصَّلِيبَ، وَاخْتَلَطَ الْحَابِلُ بِالنَّابِلِ، وَكَثُرَ الضَّجِيجُ.",
       "Genci çarmıhı taşırken gördüler; ortalık birbirine karıştı, gürültü arttı."
      ],
      [
       "فَأَخَذُوا بِيَدِ الشَّابِّ الْحَامِلِ لِلصَّلِيبِ، وَهُمْ لَا يَشُكُّونَ فِي أَنَّهُ هُوَ الْمَحْكُومُ عَلَيْهِ بِالصَّلْبِ.",
       "Çarmıhı taşıyan gencin elinden tuttular; onun asılmaya mahkûm edilen kişi olduğundan hiç şüphe etmiyorlardı."
      ],
      [
       "وَهُوَ يَصِيحُ وَيَضِجُّ، وَيُعْلِنُ بَرَاءَتَهُ، وَأَنَّهُ لَا شَأْنَ لَهُ بِالْحُكْمِ وَالصَّلْبِ، وَإِنَّمَا كُلِّفَ حَمْلَ الْعُودِ سُخْرَةً وَظُلْمًا.",
       "O ise bağırıp çağırıyor, suçsuz olduğunu, hükümle ve asılmayla hiçbir ilgisi olmadığını, tahtayı taşımakla zorla ve haksız yere yükümlü tutulduğunu ilan ediyordu."
      ],
      [
       "وَشُرْطَةُ الْمَشْنَقِ لَا يَلْتَفِتُونَ إِلَى ذٰلِكَ، وَلَا يَفْهَمُونَ لُغَتَهُ، لِأَنَّهُمْ مِنَ الرُّومِ وَالْيُونَانِ الْأُمَّةِ الْحَاكِمَةِ.",
       "İdam yerinin polisleri buna aldırmıyor, onun dilini de anlamıyorlardı; çünkü onlar yönetici millet olan Romalılardan ve Yunanlılardandı."
      ]
     ]
    },
    {
     "n": 32,
     "title_ar": "تَنْفِيذُ حُكْمٍ",
     "title_tr": "Hükmün infazı",
     "s": [
      [
       "وَكُلُّ مُجْرِمٍ يَتَنَصَّلُ مِنْ جَرِيمَتِهِ، وَكُلُّ مُجْرِمٍ لَهُ صِيَاحٌ وَعَوِيلٌ، وَأَخَذُوهُ وَنَفَّذُوا فِيهِ الْحُكْمَ.",
       "Her suçlu suçunu inkâr eder, her suçlu bağırıp feryat eder; onu alıp hükmü onun üzerinde uyguladılar."
      ],
      [
       "وَالْيَهُودُ وَاقِفُونَ عَلَى بُعْدٍ، وَالدُّنْيَا لَيْلٌ وَظَلَامٌ، وَهُمْ يَظُنُّونَ كُلَّ الظَّنِّ أَنَّ الْمَصْلُوبَ هُوَ الْمَسِيحُ.",
       "Yahudiler uzakta duruyordu; ortalık gece ve karanlıktı. Asılanın Mesih olduğundan neredeyse emindiler."
      ]
     ]
    },
    {
     "n": 33,
     "title_ar": "رَفْعُ عِيسَى إِلَى السَّمَاءِ",
     "title_tr": "Îsâ'nın göğe yükseltilmesi",
     "s": [
      [
       "أَمَّا سَيِّدُنَا عِيسَى ابْنُ مَرْيَمَ فَقَدْ نَجَّاهُ اللهُ تَعَالَى مِنْ كَيْدِ الْيَهُودِ، وَرَفَعَهُ إِلَيْهِ مُكَرَّمًا مُطَهَّرًا مِنَ الَّذِينَ كَفَرُوا.",
       "Meryem oğlu efendimiz Îsâ'ya gelince, Allah Teâlâ onu Yahudilerin tuzağından kurtardı ve onu şerefli ve inkâr edenlerden arınmış olarak kendi katına yükseltti."
      ]
     ]
    }
   ]
  },
  {
   "id": 11,
   "emoji": "☁️",
   "title_ar": "الرَّفْعُ وَالنُّزُولُ وَالْبِشَارَةُ",
   "title_tr": "Yükseltilme, iniş ve müjde",
   "pre": {
    "predict": {
     "prompt_tr": "Kur'an, Îsâ'nın öldürülmediğini, Allah'ın onu kendi katına yükselttiğini söyler. Sence Îsâ kendisinden sonra gelecek bir peygamberi müjdeledi mi?",
     "options": [
      [
       "نَعَمْ، بَشَّرَ بِرَسُولٍ اسْمُهُ أَحْمَدُ",
       "Evet, adı Ahmed olan bir elçiyi müjdeledi"
      ],
      [
       "لَا، لَمْ يُبَشِّرْ بِأَحَدٍ",
       "Hayır, kimseyi müjdelemedi"
      ],
      [
       "بَشَّرَ بِمَلِكٍ",
       "Bir kralı müjdeledi"
      ]
     ]
    },
    "vocab": [
     [
      "بُهْتَانٌ",
      "büyük iftira",
      "🗯️"
     ],
     [
      "الظَّنُّ",
      "zan, tahmin",
      "❓"
     ],
     [
      "يَقِينًا",
      "kesin olarak",
      "✅"
     ],
     [
      "سَيَنْزِلُ",
      "inecek",
      "⬇️"
     ],
     [
      "مُتَوَاتِرٌ",
      "mütevatir, çok sayıda kanalla gelen",
      "📚"
     ],
     [
      "يُبَشِّرُ",
      "müjdeler",
      "📣"
     ]
    ]
   },
   "stop": {
    "section": 35,
    "after": 0,
    "prompt_tr": "Kitaba göre Îsâ, Allah dilediği zaman gökten inecek. Sence indiğinde ne yapacak?",
    "options": [
     [
      "يَنْصُرُ الْحَقَّ وَيَكْبِتُ أَهْلَ الْبَاطِلِ",
      "Hakka yardım edip batıl ehlini kahredecek"
     ],
     [
      "يَبْنِي قَصْرًا",
      "Bir saray yapacak"
     ],
     [
      "يَعُودُ إِلَى السَّمَاءِ فَوْرًا",
      "Hemen göğe dönecek"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَ الْيَهُودُ: إِنَّا قَتَلْنَا الْمَسِيحَ.",
     "مَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلٰكِنْ شُبِّهَ لَهُمْ.",
     "رَفَعَهُ اللهُ إِلَيْهِ.",
     "سَيَنْزِلُ قَبْلَ الْقِيَامَةِ وَيَنْصُرُ الْحَقَّ.",
     "بَشَّرَ بِرَسُولٍ اسْمُهُ أَحْمَدُ."
    ],
    "questions": [
     {
      "q": "مَاذَا قَالَ الْيَهُودُ عَنِ الْمَسِيحِ؟",
      "qt": "Yahudiler Mesih hakkında ne dediler?",
      "o": [
       "إِنَّا قَتَلْنَا الْمَسِيحَ",
       "إِنَّا آمَنَّا بِالْمَسِيحِ",
       "إِنَّا لَمْ نَرَهُ"
      ],
      "ot": [
       "Biz Mesih'i öldürdük",
       "Biz Mesih'e inandık",
       "Biz onu görmedik"
      ],
      "a": 0,
      "ev": [
       "34.1"
      ]
     },
     {
      "q": "مَا الَّذِي اتَّبَعَهُ الَّذِينَ اخْتَلَفُوا فِيهِ؟",
      "qt": "Onun hakkında ayrılığa düşenler neye uydular?",
      "o": [
       "الظَّنَّ",
       "الْعِلْمَ الْيَقِينِيَّ",
       "الْإِنْجِيلَ"
      ],
      "ot": [
       "Zanna",
       "Kesin bilgiye",
       "İncil'e"
      ],
      "a": 0,
      "ev": [
       "34.2"
      ]
     },
     {
      "q": "مَتَى سَيَنْزِلُ عِيسَى؟",
      "qt": "Îsâ ne zaman inecek?",
      "o": [
       "حِينَ يُرِيدُهُ اللهُ قَبْلَ الْقِيَامَةِ",
       "غَدًا",
       "لَا يَنْزِلُ أَبَدًا"
      ],
      "ot": [
       "Allah dilediği zaman, kıyametten önce",
       "Yarın",
       "Hiç inmeyecek"
      ],
      "a": 0,
      "ev": [
       "35.0"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يُكْمِلْ عِيسَى مُهِمَّتَهُ فِي الدَّعْوَةِ؟",
      "qt": "Îsâ davet görevini neden tamamlayamadı?",
      "o": [
       "لِشِدَّةِ مُحَارَبَةِ الْيَهُودِ وَقِلَّةِ أَنْصَارِهِ",
       "لِأَنَّهُ تَعِبَ مِنْهَا",
       "لِأَنَّهُ صَارَ مَلِكًا"
      ],
      "ot": [
       "Yahudilerin şiddetli düşmanlığı ve yardımcılarının azlığı yüzünden",
       "Çünkü ondan yoruldu",
       "Çünkü kral oldu"
      ],
      "a": 0,
      "ev": [
       "36.0"
      ]
     },
     {
      "q": "مَا اسْمُ الرَّسُولِ الَّذِي بَشَّرَ بِهِ عِيسَى؟",
      "qt": "Îsâ'nın müjdelediği elçinin adı nedir?",
      "o": [
       "أَحْمَدُ",
       "يَحْيَى",
       "مُوسَى"
      ],
      "ot": [
       "Ahmed",
       "Yahyâ",
       "Mûsâ"
      ],
      "a": 0,
      "ev": [
       "36.2"
      ]
     }
    ],
    "focus": {
     "title": "Gelecek zaman: سَـ / سَوْفَ + muzari",
     "explain": "Muzari fiilin başına <b>سَـ</b> (yakın gelecek) ya da <b>سَوْفَ</b> (daha uzak gelecek) getirilince fiil açıkça gelecek zaman bildirir: <span class='ar-inline'>يَنْزِلُ</span> (iner / inecek) → <span class='ar-inline'>سَيَنْزِلُ</span> (inecek). <span class='ar-inline'>سَـ</span> fiile bitişik yazılır, <span class='ar-inline'>سَوْفَ</span> ayrı yazılır: <span class='ar-inline'>سَوْفَ يَعْلَمُونَ</span>. Olumsuzu <span class='ar-inline'>لَنْ</span> + mansub muzaridir: <span class='ar-inline'>لَنْ تَمَسَّنَا النَّارُ</span>.",
     "examples": [
      "وَسَيَنْزِلُ مِنَ السَّمَاءِ حِينَ يُرِيدُهُ اللهُ",
      "فَسَيَحْشُرُهُمْ إِلَيْهِ جَمِيعًا",
      "لَنْ تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَعْدُودَةً"
     ],
     "items": [
      {
       "q": "____ عِيسَى مِنَ السَّمَاءِ. (inecek)",
       "o": [
        "سَيَنْزِلُ",
        "نَزَلَ",
        "لَمْ يَنْزِلْ"
       ],
       "a": 0
      },
      {
       "q": "«سَوْفَ يَعْلَمُونَ» = …",
       "o": [
        "Bilecekler",
        "Bildiler",
        "Bilmiyorlar"
       ],
       "a": 0
      },
      {
       "q": "سَيَنْزِلُ ↔ (olumsuz) ____",
       "o": [
        "لَنْ يَنْزِلَ",
        "لَمْ يَنْزِلْ",
        "لَا تَنْزِلْ"
       ],
       "a": 0
      },
      {
       "q": "«Hakka yardım edecek.»",
       "o": [
        "سَيَنْصُرُ الْحَقَّ",
        "نَصَرَ الْحَقَّ",
        "لَمْ يَنْصُرِ الْحَقَّ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ الْيَهُودُ: إِنَّا {قَتَلْنَا} الْمَسِيحَ، وَمَا قَتَلُوهُ وَمَا {صَلَبُوهُ}. بَلْ {رَفَعَهُ} اللهُ إِلَيْهِ. وَ{سَيَنْزِلُ} قَبْلَ الْقِيَامَةِ. وَبَشَّرَ بِرَسُولٍ اسْمُهُ {أَحْمَدُ}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ إِنَّ أَمْرَ عِيسَى «مِنْ أَوَّلِهِ إِلَى آخِرِهِ عَجَبٌ»؟",
     "qt": "Kitap neden Îsâ'nın işinin «başından sonuna kadar şaşırtıcı» olduğunu söylüyor?",
     "model": "Babasız doğdu, beşikte konuştu, Allah'ın izniyle ölüleri diriltti; öldürülmek istendiğinde Allah onu kurtarıp kendi katına yükseltti ve kıyametten önce yeniden inecek. Doğumu, hayatı ve sonu alışılmış düzenin dışındadır. Yazar ilk bölümde başladığı fikre dönüyor: Bütün bunlar Allah'ın kudretinin sınırsız olduğunu gösterir."
    },
    "retell": [
     "بُهْتَانًا عَظِيمًا",
     "مَا قَتَلُوهُ وَمَا صَلَبُوهُ",
     "اتِّبَاعُ الظَّنِّ",
     "رَفَعَهُ اللهُ إِلَيْهِ",
     "سَيَنْزِلُ",
     "اسْمُهُ أَحْمَدُ"
    ],
    "quran": [
     {
      "ar": "بَلْ رَفَعَهُ اللَّهُ إِلَيْهِ ۚ وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا",
      "ref": "Nisâ 4:158",
      "tr": "Bilakis Allah onu kendi katına yükseltti. Allah mutlak galiptir, hikmet sahibidir.",
      "inText": "«بَلْ رَفَعَهُ اللهُ إِلَيْهِ …»"
     },
     {
      "ar": "وَإِنْ مِنْ أَهْلِ الْكِتَابِ إِلَّا لَيُؤْمِنَنَّ بِهِ قَبْلَ مَوْتِهِ ۖ وَيَوْمَ الْقِيَامَةِ يَكُونُ عَلَيْهِمْ شَهِيدًا",
      "ref": "Nisâ 4:159",
      "tr": "Ehl-i kitaptan, ölümünden önce ona mutlaka iman etmeyecek hiç kimse yoktur. Kıyamet günü de o, onlara karşı şahit olacaktır.",
      "inText": "«وَإِنْ مِنْ أَهْلِ الْكِتَابِ …»"
     },
     {
      "ar": "وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِنْ بَعْدِي اسْمُهُ أَحْمَدُ",
      "ref": "Saff 61:6",
      "tr": "Benden sonra gelecek, adı Ahmed olan bir elçiyi müjdeleyici olarak (geldim).",
      "inText": "«وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِنْ بَعْدِي اسْمُهُ أَحْمَدُ»"
     }
    ]
   },
   "sections": [
    {
     "n": 34,
     "title_ar": "الْقُرْآنُ يَتَحَدَّثُ عَنِ الْقِصَّةِ",
     "title_tr": "Kur'an kıssadan söz ediyor",
     "s": [
      [
       "وَذٰلِكَ قَوْلُهُ تَعَالَى وَهُوَ يَتَحَدَّثُ عَنِ الْيَهُودِ:",
       "Bu, Allah Teâlâ'nın Yahudilerden söz ederken buyurduğu şu sözdür:"
      ],
      [
       "«وَبِكُفْرِهِمْ وَقَوْلِهِمْ عَلَى مَرْيَمَ بُهْتَانًا عَظِيمًا * وَقَوْلِهِمْ إِنَّا قَتَلْنَا الْمَسِيحَ عِيسَى ابْنَ مَرْيَمَ رَسُولَ اللهِ وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلٰكِنْ شُبِّهَ لَهُمْ».",
       "«İnkârları ve Meryem'e büyük bir iftirada bulunmaları sebebiyle; bir de 'Biz Allah'ın elçisi Meryem oğlu Îsâ Mesih'i öldürdük' demeleri sebebiyle (onları lanetledik). Hâlbuki onu öldürmediler ve asmadılar; fakat (öldürdükleri) onlara (Îsâ'ya) benzer gösterildi.»"
      ],
      [
       "«وَإِنَّ الَّذِينَ اخْتَلَفُوا فِيهِ لَفِي شَكٍّ مِنْهُ مَا لَهُمْ بِهِ مِنْ عِلْمٍ إِلَّا اتِّبَاعَ الظَّنِّ وَمَا قَتَلُوهُ يَقِينًا * بَلْ رَفَعَهُ اللهُ إِلَيْهِ وَكَانَ اللهُ عَزِيزًا حَكِيمًا».",
       "«Onun hakkında ayrılığa düşenler, bu konuda kesin bir şüphe içindedir; onların bu konuda zanna uymaktan başka hiçbir bilgileri yoktur. Onu kesin olarak öldürmediler. Bilakis Allah onu kendi katına yükseltti. Allah mutlak galiptir, hikmet sahibidir.»"
      ],
      [
       "وَهُوَ فِي السَّمَاءِ كَمَا يُرِيدُهُ اللهُ تَعَالَى، وَهُوَ الْقَادِرُ عَلَى كُلِّ شَيْءٍ.",
       "O, Allah Teâlâ'nın dilediği şekilde göktedir; Allah her şeye kadirdir."
      ],
      [
       "وَقَدْ كَانَتْ وِلَادَتُهُ عَجَبًا، وَحَيَاتُهُ وَأَمْرُهُ كُلُّهُ مِنْ أَوَّلِهِ إِلَى آخِرِهِ عَجَبٌ خَارِقٌ لِلْعَادَةِ، مُثْبِتٌ لِلْقُدْرَةِ الْإِلٰهِيَّةِ الْمُطْلَقَةِ.",
       "Doğumu şaşırtıcıydı; hayatı ve bütün işi de başından sonuna kadar olağanüstü bir hayret konusudur ve ilahi kudretin sınırsızlığını ispat eder."
      ]
     ]
    },
    {
     "n": 35,
     "title_ar": "نُزُولُ عِيسَى قَبْلَ الْقِيَامَةِ",
     "title_tr": "Îsâ'nın kıyametten önce inişi",
     "s": [
      [
       "وَسَيَنْزِلُ مِنَ السَّمَاءِ حِينَ يُرِيدُهُ اللهُ، وَيُقِيمُ الْحُجَّةَ عَلَى مَنْ فَرَّطُوا فِيهِ وَأَفْرَطُوا، مِنَ الْيَهُودِ وَالنَّصَارَى.",
       "Allah dilediği zaman gökten inecek; onun hakkında kusur eden ve aşırı giden Yahudilere ve Hristiyanlara karşı delili ortaya koyacaktır."
      ],
      [
       "وَيَنْصُرُ الْحَقَّ، وَيَكْبِتُ أَهْلَ الْبَاطِلِ، كَمَا أَخْبَرَ بِهِ نَبِيُّنَا صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ.",
       "Hakka yardım edecek, batıl ehlini kahredecektir; Peygamberimiz (s.a.v.) bunu böyle haber vermiştir."
      ],
      [
       "وَوَرَدَتْ بِهِ الْأَخْبَارُ الصَّحِيحَةُ، وَالْأَحَادِيثُ الْمُتَوَاتِرَةُ، وَاعْتَقَدَهُ الْمُسْلِمُونَ فِي كُلِّ عَصْرٍ.",
       "Bununla ilgili sahih haberler ve mütevatir hadisler gelmiştir; Müslümanlar her çağda buna inanmışlardır."
      ],
      [
       "وَصَدَقَ اللهُ الْعَظِيمُ: «وَإِنْ مِنْ أَهْلِ الْكِتَابِ إِلَّا لَيُؤْمِنَنَّ بِهِ قَبْلَ مَوْتِهِ وَيَوْمَ الْقِيَامَةِ يَكُونُ عَلَيْهِمْ شَهِيدًا».",
       "Yüce Allah doğru söylemiştir: «Ehl-i kitaptan, ölümünden önce ona mutlaka iman etmeyecek hiç kimse yoktur. Kıyamet günü de o, onlara karşı şahit olacaktır.»"
      ]
     ]
    },
    {
     "n": 36,
     "title_ar": "بِشَارَتُهُ بِبِعْثَةِ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ",
     "title_tr": "Efendimiz Muhammed'in (s.a.v.) gönderilişini müjdelemesi",
     "s": [
      [
       "وَلَمْ يُكْمِلْ سَيِّدُنَا الْمَسِيحُ مُهِمَّتَهُ فِي الدَّعْوَةِ لِشِدَّةِ مُحَارَبَةِ الْيَهُودِ وَكَيْدِهِمْ لَهُ، وَضَعْفِهِ وَقِلَّةِ أَنْصَارِهِ وَتَوَزُّعِ النَّاسِ.",
       "Efendimiz Mesih, Yahudilerin ona şiddetle savaşması ve tuzak kurması, kendisinin zayıflığı, yardımcılarının azlığı ve insanların dağınıklığı yüzünden davet görevini tamamlayamadı."
      ],
      [
       "وَامْتَثَلَ أَمْرَ رَبِّهِ، وَبَشَّرَ النَّاسَ بِرَسُولٍ يَأْتِي مِنْ بَعْدِهِ يُكْمِلُ مَا بَدَأَهُ، وَيُتِمُّ مَا نَقَصَهُ، وَتَقُومُ حُجَّتُهُ عَلَى خَلْقِهِ.",
       "Rabbinin emrine uydu ve insanlara, kendisinden sonra gelecek, başladığını tamamlayacak, eksik bıraktığını bitirecek ve Allah'ın kulları üzerindeki delilini tamamlayacak bir elçiyi müjdeledi."
      ],
      [
       "«وَإِذْ قَالَ عِيسَى ابْنُ مَرْيَمَ يَا بَنِي إِسْرَائِيلَ إِنِّي رَسُولُ اللهِ إِلَيْكُمْ مُصَدِّقًا لِمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِنْ بَعْدِي اسْمُهُ أَحْمَدُ».",
       "«Hani Meryem oğlu Îsâ: 'Ey İsrailoğulları! Ben size Allah'ın elçisiyim; benden önceki Tevrat'ı doğrulayıcı ve benden sonra gelecek, adı Ahmed olan bir elçiyi müjdeleyici olarak geldim' demişti.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 12,
   "emoji": "☝️",
   "title_ar": "دَعْوَةُ التَّوْحِيدِ",
   "title_tr": "Tevhid daveti",
   "pre": {
    "predict": {
     "prompt_tr": "Yazar, Îsâ'nın sade tevhid davetinin sonradan karmaşık bir inanca dönüştüğünü anlatıyor. Sence Îsâ kendisi neye çağırmıştı?",
     "options": [
      [
       "إِلَى عِبَادَةِ اللهِ وَحْدَهُ",
       "Yalnızca Allah'a ibadete"
      ],
      [
       "إِلَى عِبَادَةِ نَفْسِهِ",
       "Kendisine ibadete"
      ],
      [
       "إِلَى عِبَادَةِ أُمِّهِ",
       "Annesine ibadete"
      ]
     ]
    },
    "vocab": [
     [
      "غَامِضٌ",
      "kapalı, anlaşılmaz",
      "🌫️"
     ],
     [
      "مُعَقَّدٌ",
      "karmaşık",
      "🧶"
     ],
     [
      "الصَّمَدُ",
      "her şeyin kendisine muhtaç olduğu",
      "🏔️"
     ],
     [
      "تَمَاثِيلُ",
      "heykeller",
      "🗿"
     ],
     [
      "الْكَنَائِسُ",
      "kiliseler",
      "⛪"
     ],
     [
      "رَبَّانِيٌّ",
      "Rabbe halis kul",
      "🤲"
     ]
    ]
   },
   "stop": {
    "section": 37,
    "after": 5,
    "prompt_tr": "Sonraki nesiller Mesih'i ve annesini ilahlık derecesine çıkardılar. Sence Kur'an buna nasıl cevap veriyor?",
    "options": [
     [
      "الْمَسِيحُ رَسُولٌ وَأُمُّهُ صِدِّيقَةٌ، كَانَا يَأْكُلَانِ الطَّعَامَ",
      "Mesih bir elçidir, annesi dosdoğru bir kadındır; ikisi de yemek yerdi"
     ],
     [
      "يُوَافِقُهُمْ",
      "Onlara katılıyor"
     ],
     [
      "لَا يَذْكُرُ ذٰلِكَ",
      "Bundan hiç söz etmiyor"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "دَعَا الْمَسِيحُ إِلَى التَّوْحِيدِ الْخَالِصِ.",
     "غَلَا فِيهِ أَتْبَاعُهُ.",
     "قَالُوا: الْأَبُ وَالِابْنُ وَرُوحُ الْقُدُسِ.",
     "أَنْكَرَ اللهُ مَا اعْتَقَدُوهُ.",
     "جَاءَ فِي الْإِنْجِيلِ: لِلرَّبِّ إِلٰهِكَ تَسْجُدُ."
    ],
    "questions": [
     {
      "q": "إِلَى مَاذَا تَحَوَّلَتْ دَعْوَةُ الْمَسِيحِ؟",
      "qt": "Mesih'in daveti neye dönüştü?",
      "o": [
       "إِلَى عَقِيدَةٍ غَامِضَةٍ وَفَلْسَفَةٍ مُعَقَّدَةٍ",
       "إِلَى دِينٍ أَسْهَلَ",
       "إِلَى عِلْمِ الطِّبِّ"
      ],
      "ot": [
       "Kapalı bir inanca ve karmaşık bir felsefeye",
       "Daha kolay bir dine",
       "Tıp ilmine"
      ],
      "a": 0,
      "ev": [
       "37.0"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ أَتْبَاعُ الْمَسِيحِ؟",
      "qt": "Mesih'e uyanlar ne yaptı?",
      "o": [
       "غَلَوْا فِيهِ وَأَطْرَوْهُ",
       "نَسُوهُ",
       "حَارَبُوهُ"
      ],
      "ot": [
       "Onun hakkında aşırı gidip onu abartarak övdüler",
       "Onu unuttular",
       "Onunla savaştılar"
      ],
      "a": 0,
      "ev": [
       "37.1"
      ]
     },
     {
      "q": "بِمَ وَصَفَ الْقُرْآنُ أُمَّ الْمَسِيحِ؟",
      "qt": "Kur'an Mesih'in annesini nasıl niteledi?",
      "o": [
       "صِدِّيقَةٌ",
       "إِلٰهَةٌ",
       "مَلَكٌ"
      ],
      "ot": [
       "Dosdoğru bir kadın",
       "Bir ilahe",
       "Bir melek"
      ],
      "a": 0,
      "ev": [
       "37.6"
      ]
     },
     {
      "q": "مَا الدَّلِيلُ فِي الْآيَةِ عَلَى أَنَّ عِيسَى وَأُمَّهُ بَشَرٌ؟",
      "qt": "Âyette Îsâ'nın ve annesinin insan olduğuna dair delil nedir?",
      "o": [
       "كَانَا يَأْكُلَانِ الطَّعَامَ",
       "كَانَا يَطِيرَانِ",
       "كَانَا لَا يَنَامَانِ"
      ],
      "ot": [
       "İkisi de yemek yerdi",
       "İkisi de uçardı",
       "İkisi de uyumazdı"
      ],
      "a": 0,
      "ev": [
       "37.6"
      ]
     },
     {
      "q": "مَاذَا جَاءَ فِي الْإِنْجِيلِ مِنْ قَوْلِ عِيسَى؟",
      "qt": "İncil'de Îsâ'nın hangi sözü geçer?",
      "o": [
       "لِلرَّبِّ إِلٰهِكَ تَسْجُدُ وَلَهُ وَحْدَهُ تَعْبُدُ",
       "اعْبُدُونِي",
       "أَنَا إِلٰهُكُمْ"
      ],
      "ot": [
       "Rabbin olan Tanrı'ya secde edeceksin ve yalnız O'na kulluk edeceksin",
       "Bana kulluk edin",
       "Ben sizin ilahınızım"
      ],
      "a": 0,
      "ev": [
       "38.1"
      ]
     }
    ],
    "focus": {
     "title": "İlgi zamirleri: الَّذِي، الَّتِي، الَّذِينَ",
     "explain": "Belirli bir ismi niteleyen cümleyi bağlamak için ilgi zamiri kullanılır ve isimle cinsiyet-sayı bakımından uyar: eril tekil <span class='ar-inline'>الَّذِي</span>, dişil tekil <span class='ar-inline'>الَّتِي</span>, eril çoğul <span class='ar-inline'>الَّذِينَ</span>. Örnek: <span class='ar-inline'>الْإِلٰهُ الْوَاحِدُ الَّذِي لَمْ يَلِدْ</span> (doğurmamış olan bir İlah). Nitelenen isim belirsizse ilgi zamiri kullanılmaz: <span class='ar-inline'>رَسُولٌ يَأْتِي مِنْ بَعْدِي</span>.",
     "examples": [
      "الْإِلٰهِ الْوَاحِدِ الصَّمَدِ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ",
      "قُدْرَةَ اللهِ الَّتِي أَحَاطَتْ بِكُلِّ شَيْءٍ",
      "فَقَامَ الَّذِينَ يُنْكِرُونَ سَعَةَ الْقُدْرَةِ الْإِلٰهِيَّةِ"
     ],
     "items": [
      {
       "q": "الْإِلٰهُ ____ لَمْ يَلِدْ وَلَمْ يُولَدْ.",
       "o": [
        "الَّذِي",
        "الَّتِي",
        "الَّذِينَ"
       ],
       "a": 0
      },
      {
       "q": "نِعْمَتِيَ ____ أَنْعَمْتُ عَلَيْكُمْ.",
       "o": [
        "الَّتِي",
        "الَّذِي",
        "الَّذِينَ"
       ],
       "a": 0
      },
      {
       "q": "لَقَدْ كَفَرَ ____ قَالُوا …",
       "o": [
        "الَّذِينَ",
        "الَّذِي",
        "الَّتِي"
       ],
       "a": 0
      },
      {
       "q": "رَسُولٌ ____ مِنْ بَعْدِي. (belirsiz isim)",
       "o": [
        "يَأْتِي",
        "الَّذِي يَأْتِي",
        "الَّتِي تَأْتِي"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "دَعَا الْمَسِيحُ إِلَى {التَّوْحِيدِ} الْخَالِصِ، ثُمَّ تَحَوَّلَتْ دَعْوَتُهُ إِلَى عَقِيدَةٍ {غَامِضَةٍ}. فَغَلَا فِيهِ {أَتْبَاعُهُ}. وَقَالَ اللهُ: مَا الْمَسِيحُ إِلَّا {رَسُولٌ}، وَأُمُّهُ {صِدِّيقَةٌ}."
    },
    "think": {
     "q": "لِمَاذَا ذَكَرَ الْقُرْآنُ أَنَّ عِيسَى وَأُمَّهُ «كَانَا يَأْكُلَانِ الطَّعَامَ»؟",
     "qt": "Kur'an neden Îsâ'nın ve annesinin «yemek yediklerini» özellikle belirtiyor?",
     "model": "Yemek yemek, muhtaç olmanın ve insan olmanın açık bir işaretidir. Yemeğe muhtaç olan, açlık çeken bir varlık ilah olamaz; çünkü ilah hiçbir şeye muhtaç değildir (الصَّمَد). Âyet bu basit ve herkesin anlayacağı delille Îsâ'nın ve annesinin ilahlaştırılmasına cevap veriyor."
    },
    "retell": [
     "التَّوْحِيدُ الْخَالِصُ",
     "عَقِيدَةٌ غَامِضَةٌ",
     "غَلَا فِيهِ أَتْبَاعُهُ",
     "رَسُولٌ",
     "أُمُّهُ صِدِّيقَةٌ",
     "لَهُ وَحْدَهُ تَعْبُدُ"
    ],
    "quran": [
     {
      "ar": "مَا الْمَسِيحُ ابْنُ مَرْيَمَ إِلَّا رَسُولٌ قَدْ خَلَتْ مِنْ قَبْلِهِ الرُّسُلُ وَأُمُّهُ صِدِّيقَةٌ ۖ كَانَا يَأْكُلَانِ الطَّعَامَ",
      "ref": "Mâide 5:75",
      "tr": "Meryem oğlu Mesih ancak bir peygamberdir; ondan önce de peygamberler gelip geçmiştir. Annesi de dosdoğru bir kadındır. İkisi de yemek yerlerdi.",
      "inText": "«مَا الْمَسِيحُ ابْنُ مَرْيَمَ إِلَّا رَسُولٌ …»"
     },
     {
      "ar": "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ",
      "ref": "İhlâs 112:1–3",
      "tr": "De ki: O, Allah'tır, bir tektir. Allah Samed'dir (her şey O'na muhtaçtır). O doğurmamış ve doğurulmamıştır.",
      "inText": "«الْإِلٰهِ الْوَاحِدِ الصَّمَدِ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ»"
     },
     {
      "ar": "مَا كَانَ لِبَشَرٍ أَنْ يُؤْتِيَهُ اللَّهُ الْكِتَابَ وَالْحُكْمَ وَالنُّبُوَّةَ ثُمَّ يَقُولَ لِلنَّاسِ كُونُوا عِبَادًا لِي مِنْ دُونِ اللَّهِ",
      "ref": "Âl-i İmrân 3:79",
      "tr": "Allah'ın kendisine kitap, hüküm ve peygamberlik verdiği hiçbir insanın, sonra da insanlara «Allah'ı bırakıp bana kul olun» demesi düşünülemez.",
      "inText": "«مَا كَانَ لِبَشَرٍ أَنْ يُؤْتِيَهُ اللهُ الْكِتَابَ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 37,
     "title_ar": "مِنَ التَّوْحِيدِ الْخَالِصِ إِلَى عَقِيدَةٍ غَامِضَةٍ",
     "title_tr": "Halis tevhidden kapalı bir inanca",
     "s": [
      [
       "وَمِنْ غَرَائِبِ تَارِيخِ الْأَدْيَانِ، وَمِمَّا تَدْمَعُ لَهُ الْعُيُونُ، وَتَذُوبُ لَهُ الْقُلُوبُ، أَنَّهُ تَحَوَّلَتْ دَعْوَةُ الْمَسِيحِ إِلَى التَّوْحِيدِ الْخَالِصِ وَالدِّينِ السَّهْلِ السَّائِغِ الْبَعِيدِ عَنْ كُلِّ غُمُوضٍ وَتَعْقِيدٍ، وَتَحْرِيفٍ وَتَأْوِيلٍ بَعِيدٍ، وَالدَّعْوَةُ إِلَى عِبَادَةِ اللهِ وَحْدَهُ، وَالسُّؤَالِ مِنْهُ، وَالِالْتِجَاءِ إِلَيْهِ، وَحُبِّهِ الْخَالِصِ، إِلَى عَقِيدَةٍ غَامِضَةٍ، وَفَلْسَفَةٍ مُعَقَّدَةٍ.",
       "Dinler tarihinin tuhaflıklarından, gözleri yaşartan ve kalpleri eriten şeylerden biri şudur: Mesih'in halis tevhide, her türlü kapalılıktan, karmaşıklıktan, tahriften ve uzak yorumdan uzak, kolay ve hoş bir dine daveti; yalnızca Allah'a ibadet etmeye, yalnızca O'ndan istemeye, O'na sığınmaya ve O'nu halis bir sevgiyle sevmeye çağrısı, kapalı bir inanca ve karmaşık bir felsefeye dönüştü."
      ],
      [
       "فَغَلَا فِيهِ أَتْبَاعُهُ، وَأَطْرَوْهُ إِطْرَاءً خَرَجَ بِهِ مِنْ حُدُودِ الْبَشَرِيَّةِ إِلَى حُدُودِ الْأُلُوهِيَّةِ.",
       "Ona uyanlar onun hakkında aşırı gittiler ve onu, insanlık sınırlarından ilahlık sınırlarına çıkaracak kadar abartarak övdüler."
      ],
      [
       "فَقَالُوا: «الْمَسِيحُ ابْنُ اللهِ»، وَقَالُوا: «اتَّخَذَ اللهُ وَلَدًا»، وَقَالُوا: «إِنَّ اللهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ».",
       "«Mesih Allah'ın oğludur» dediler, «Allah çocuk edindi» dediler, «Allah, Meryem oğlu Mesih'in ta kendisidir» dediler."
      ],
      [
       "وَجَعَلُوا مِنَ الْإِلٰهِ الْوَاحِدِ الصَّمَدِ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ، أُسْرَةً مُؤَلَّفَةً مِنْ ثَلَاثَةِ أَعْضَاءٍ، كُلُّهُمْ إِلٰهٌ، فَقَالُوا: الْأَبُ وَالِابْنُ وَرُوحُ الْقُدُسِ.",
       "Doğurmamış ve doğurulmamış, bir ve her şeyin kendisine muhtaç olduğu İlah'ı, hepsi ilah olan üç üyeli bir aileye dönüştürdüler; «Baba, Oğul ve Ruhu'l-Kudüs» dediler."
      ],
      [
       "وَاعْتَقَدُوا فِي مَرْيَمَ أُمِّ الْمَسِيحِ وَعَامَلُوهَا بِمَا يَبْلُغُ بِهَا إِلَى دَرَجَةِ التَّقْدِيسِ وَالْعِبَادَةِ، فَقَالُوا: «أُمُّ اللهِ».",
       "Mesih'in annesi Meryem hakkında da onu kutsama ve ibadet derecesine çıkaracak bir inanç beslediler ve ona öyle davrandılar; «Allah'ın annesi» dediler."
      ],
      [
       "وَشَاعَتْ لَهَا تَمَاثِيلُ وَصُوَرٌ فِي الْكَنَائِسِ، يَخْضَعُ لَهَا النَّصَارَى بِاللُّجُوءِ وَالدُّعَاءِ، وَالنَّذْرِ وَالِانْحِنَاءِ.",
       "Kiliselerde onun heykelleri ve resimleri yaygınlaştı; Hristiyanlar onlara sığınarak, dua ederek, adak adayarak ve eğilerek boyun eğerler."
      ],
      [
       "وَقَدْ قَالَ اللهُ تَعَالَى مُنْكِرًا مَا اعْتَقَدُوهُ، مُسْتَبْشِعًا مَا فَعَلُوهُ: «مَا الْمَسِيحُ ابْنُ مَرْيَمَ إِلَّا رَسُولٌ قَدْ خَلَتْ مِنْ قَبْلِهِ الرُّسُلُ وَأُمُّهُ صِدِّيقَةٌ كَانَا يَأْكُلَانِ الطَّعَامَ».",
       "Allah Teâlâ, inandıklarını reddederek ve yaptıklarını çirkin görerek şöyle buyurmuştur: «Meryem oğlu Mesih ancak bir peygamberdir; ondan önce de peygamberler gelip geçmiştir. Annesi de dosdoğru bir kadındır. İkisi de yemek yerlerdi.»"
      ],
      [
       "«انْظُرْ كَيْفَ نُبَيِّنُ لَهُمُ الْآيَاتِ ثُمَّ انْظُرْ أَنَّى يُؤْفَكُونَ * قُلْ أَتَعْبُدُونَ مِنْ دُونِ اللهِ مَا لَا يَمْلِكُ لَكُمْ ضَرًّا وَلَا نَفْعًا وَاللهُ هُوَ السَّمِيعُ الْعَلِيمُ».",
       "«Bak, onlara âyetleri nasıl açıklıyoruz; sonra bak, nasıl (haktan) çevriliyorlar! De ki: 'Allah'ı bırakıp size ne zarar ne de fayda verebilecek şeylere mi tapıyorsunuz? Hâlbuki her şeyi işiten, her şeyi bilen Allah'tır.'»"
      ]
     ]
    },
    {
     "n": 38,
     "title_ar": "عِيسَى يَدْعُو إِلَى عِبَادَةِ اللهِ وَحْدَهُ",
     "title_tr": "Îsâ yalnızca Allah'a ibadete çağırıyor",
     "s": [
      [
       "وَقَدْ دَعَا كَغَيْرِهِ مِنَ الْأَنْبِيَاءِ إِلَى عِبَادَةِ اللهِ وَحْدَهُ.",
       "O da diğer peygamberler gibi yalnızca Allah'a ibadet etmeye çağırdı."
      ],
      [
       "فَجَاءَ مِنْ قَوْلِهِ فِي الْإِنْجِيلِ: «مَكْتُوبٌ لِلرَّبِّ إِلٰهِكَ تَسْجُدُ، وَلَهُ وَحْدَهُ تَعْبُدُ» (مَتَّى ٤: ١٠)، وَقَوْلُهُ: «مَكْتُوبٌ لِلرَّبِّ إِلٰهِكَ تَسْجُدُ وَلَهُ وَحْدَهُ تَعْبُدُ» (لُوقَا ٤: ٨).",
       "İncil'de onun şu sözü geçer: «Yazılmıştır: Rabbin olan Tanrı'ya secde edeceksin ve yalnız O'na kulluk edeceksin» (Matta 4:10); yine şu sözü: «Yazılmıştır: Rabbin olan Tanrı'ya secde edeceksin ve yalnız O'na kulluk edeceksin» (Luka 4:8)."
      ],
      [
       "وَقَدْ قَالَ اللهُ تَعَالَى: «مَا كَانَ لِبَشَرٍ أَنْ يُؤْتِيَهُ اللهُ الْكِتَابَ وَالْحُكْمَ وَالنُّبُوَّةَ ثُمَّ يَقُولَ لِلنَّاسِ كُونُوا عِبَادًا لِي مِنْ دُونِ اللهِ وَلٰكِنْ كُونُوا رَبَّانِيِّينَ بِمَا كُنْتُمْ تُعَلِّمُونَ الْكِتَابَ وَبِمَا كُنْتُمْ تَدْرُسُونَ».",
       "Allah Teâlâ şöyle buyurmuştur: «Allah'ın kendisine kitap, hüküm ve peygamberlik verdiği hiçbir insanın, sonra da insanlara 'Allah'ı bırakıp bana kul olun' demesi düşünülemez. Bilakis (şöyle der:) 'Kitabı öğretmekte ve okuyup öğrenmekte olduğunuz için Rabbe halis kullar olun.'»"
      ],
      [
       "«وَلَا يَأْمُرَكُمْ أَنْ تَتَّخِذُوا الْمَلَائِكَةَ وَالنَّبِيِّينَ أَرْبَابًا أَيَأْمُرُكُمْ بِالْكُفْرِ بَعْدَ إِذْ أَنْتُمْ مُسْلِمُونَ».",
       "«O size melekleri ve peygamberleri rabler edinmenizi de emretmez. Siz Müslüman olduktan sonra size inkârı mı emredecek?»"
      ]
     ]
    }
   ]
  },
  {
   "id": 13,
   "emoji": "🌅",
   "title_ar": "مَشْهَدٌ مِنْ يَوْمِ الْقِيَامَةِ",
   "title_tr": "Kıyamet gününden bir sahne",
   "pre": {
    "predict": {
     "prompt_tr": "Kur'an, kıyamet gününde Allah'ın Îsâ'ya «İnsanlara beni ve annemi ilah edinin diye sen mi söyledin?» diye soracağını anlatır. Sence Îsâ ne cevap verecek?",
     "options": [
      [
       "سُبْحَانَكَ، مَا قُلْتُ لَهُمْ إِلَّا: اعْبُدُوا اللهَ",
       "Seni tenzih ederim; onlara sadece «Allah'a ibadet edin» dedim"
      ],
      [
       "نَعَمْ، قُلْتُ ذٰلِكَ",
       "Evet, söyledim"
      ],
      [
       "يَسْكُتُ",
       "Susar"
      ]
     ]
    },
    "vocab": [
     [
      "يَسْتَنْكِفُ",
      "çekinir, kendine yediremez",
      "🙅"
     ],
     [
      "يَسْتَكْبِرُ",
      "büyüklenir",
      "🦚"
     ],
     [
      "يَحْشُرُ",
      "toplar, bir araya getirir",
      "👥"
     ],
     [
      "يَتَبَرَّأُ",
      "uzak olduğunu bildirir",
      "🚫"
     ],
     [
      "الرَّقِيبُ",
      "gözetleyen",
      "👁️"
     ],
     [
      "الْفَوْزُ",
      "kurtuluş, başarı",
      "🏆"
     ]
    ]
   },
   "stop": {
    "section": 41,
    "after": 3,
    "prompt_tr": "Allah, Îsâ'ya «İnsanlara, beni ve annemi ilah edinin diye sen mi söyledin?» diye soruyor. Sence Îsâ'nın ilk sözü ne olacak?",
    "options": [
     [
      "سُبْحَانَكَ",
      "Seni tenzih ederim"
     ],
     [
      "نَعَمْ",
      "Evet"
     ],
     [
      "لَا أَدْرِي",
      "Bilmiyorum"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَ الْمَسِيحُ: اعْبُدُوا اللهَ رَبِّي وَرَبَّكُمْ.",
     "لَنْ يَسْتَنْكِفَ الْمَسِيحُ أَنْ يَكُونَ عَبْدًا لِلّٰهِ.",
     "يَسْأَلُ اللهُ عِيسَى يَوْمَ الْقِيَامَةِ.",
     "يَتَبَرَّأُ عِيسَى مِمَّا قَالَهُ النَّاسُ.",
     "يَنْفَعُ الصَّادِقِينَ صِدْقُهُمْ."
    ],
    "questions": [
     {
      "q": "مَاذَا قَالَ الْمَسِيحُ لِبَنِي إِسْرَائِيلَ؟",
      "qt": "Mesih İsrailoğullarına ne dedi?",
      "o": [
       "اعْبُدُوا اللهَ رَبِّي وَرَبَّكُمْ",
       "اعْبُدُونِي",
       "اعْبُدُوا أُمِّي"
      ],
      "ot": [
       "Benim de Rabbim, sizin de Rabbiniz olan Allah'a ibadet edin",
       "Bana ibadet edin",
       "Anneme ibadet edin"
      ],
      "a": 0,
      "ev": [
       "39.1"
      ]
     },
     {
      "q": "مَا جَزَاءُ مَنْ يُشْرِكُ بِاللهِ؟",
      "qt": "Allah'a ortak koşanın cezası nedir?",
      "o": [
       "حَرَّمَ اللهُ عَلَيْهِ الْجَنَّةَ",
       "يَدْخُلُ الْجَنَّةَ",
       "لَا شَيْءَ"
      ],
      "ot": [
       "Allah ona cenneti haram kılar",
       "Cennete girer",
       "Hiçbir şey"
      ],
      "a": 0,
      "ev": [
       "39.2"
      ]
     },
     {
      "q": "هَلْ يَسْتَنْكِفُ الْمَسِيحُ أَنْ يَكُونَ عَبْدًا لِلّٰهِ؟",
      "qt": "Mesih Allah'a kul olmaktan çekinir mi?",
      "o": [
       "لَا، لَنْ يَسْتَنْكِفَ",
       "نَعَمْ",
       "أَحْيَانًا"
      ],
      "ot": [
       "Hayır, asla çekinmez",
       "Evet",
       "Bazen"
      ],
      "a": 0,
      "ev": [
       "40.1"
      ]
     },
     {
      "q": "مَاذَا قَالَ عِيسَى عَنْ دَعْوَتِهِ يَوْمَ الْقِيَامَةِ؟",
      "qt": "Îsâ kıyamet günü daveti hakkında ne diyecek?",
      "o": [
       "مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ",
       "قُلْتُ لَهُمْ: اتَّخِذُونِي إِلٰهًا",
       "نَسِيتُ مَا قُلْتُ"
      ],
      "ot": [
       "Onlara sadece bana emrettiğini söyledim",
       "Onlara: Beni ilah edinin, dedim",
       "Ne dediğimi unuttum"
      ],
      "a": 0,
      "ev": [
       "41.5"
      ]
     },
     {
      "q": "مَاذَا يَنْفَعُ الصَّادِقِينَ يَوْمَ الْقِيَامَةِ؟",
      "qt": "Kıyamet günü doğrulara ne fayda verecek?",
      "o": [
       "صِدْقُهُمْ",
       "مَالُهُمْ",
       "نَسَبُهُمْ"
      ],
      "ot": [
       "Doğrulukları",
       "Malları",
       "Soyları"
      ],
      "a": 0,
      "ev": [
       "41.7"
      ]
     }
    ],
    "focus": {
     "title": "Şart cümlesi: إِنْ / مَنْ + cezm + فَـ",
     "explain": "Şart edatları (<b>إِنْ</b> «eğer», <b>مَنْ</b> «kim») iki fiili cezm edebilir: <span class='ar-inline'>مَنْ يُشْرِكْ … فَقَدْ حَرَّمَ</span>. Cevap kısmı fiil cümlesi olarak doğrudan gelemiyorsa (isim cümlesi, <span class='ar-inline'>قَدْ</span>, emir vb.) başına <b>فَـ</b> gelir: <span class='ar-inline'>إِنْ تُعَذِّبْهُمْ فَإِنَّهُمْ عِبَادُكَ</span>. Şart fiili mazi de olabilir: <span class='ar-inline'>إِنْ كُنْتُ قُلْتُهُ فَقَدْ عَلِمْتَهُ</span>.",
     "examples": [
      "إِنَّهُ مَنْ يُشْرِكْ بِاللهِ فَقَدْ حَرَّمَ اللهُ عَلَيْهِ الْجَنَّةَ",
      "إِنْ تُعَذِّبْهُمْ فَإِنَّهُمْ عِبَادُكَ وَإِنْ تَغْفِرْ لَهُمْ فَإِنَّكَ أَنْتَ الْعَزِيزُ الْحَكِيمُ",
      "إِنْ كُنْتُ قُلْتُهُ فَقَدْ عَلِمْتَهُ"
     ],
     "items": [
      {
       "q": "مَنْ ____ بِاللهِ فَقَدْ حَرَّمَ اللهُ عَلَيْهِ الْجَنَّةَ.",
       "o": [
        "يُشْرِكْ",
        "يُشْرِكُ",
        "أَشْرَكُوا"
       ],
       "a": 0
      },
      {
       "q": "إِنْ ____ لَهُمْ فَإِنَّكَ أَنْتَ الْعَزِيزُ.",
       "o": [
        "تَغْفِرْ",
        "تَغْفِرُ",
        "غَفُورٌ"
       ],
       "a": 0
      },
      {
       "q": "إِنْ تُعَذِّبْهُمْ ____ عِبَادُكَ.",
       "o": [
        "فَإِنَّهُمْ",
        "إِنَّهُمْ",
        "وَإِنَّهُمْ"
       ],
       "a": 0
      },
      {
       "q": "«مَنْ يَسْتَنْكِفْ … فَسَيَحْشُرُهُمْ» = …",
       "o": [
        "Kim çekinirse … (Allah) onları toplayacak",
        "Kim çekindi … topladı",
        "Çekinmeyin … toplayın"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ الْمَسِيحُ: اعْبُدُوا اللهَ {رَبِّي} وَرَبَّكُمْ. مَنْ {يُشْرِكْ} بِاللهِ فَقَدْ حَرَّمَ اللهُ عَلَيْهِ {الْجَنَّةَ}. وَيَوْمَ الْقِيَامَةِ يَقُولُ عِيسَى: {سُبْحَانَكَ}، مَا قُلْتُ لَهُمْ إِلَّا مَا {أَمَرْتَنِي} بِهِ."
    },
    "think": {
     "q": "مَا الَّذِي يَلْفِتُ نَظَرَكَ فِي جَوَابِ عِيسَى: «إِنْ تُعَذِّبْهُمْ فَإِنَّهُمْ عِبَادُكَ وَإِنْ تَغْفِرْ لَهُمْ …»؟",
     "qt": "Îsâ'nın «Eğer onlara azap edersen onlar senin kullarındır; eğer onları bağışlarsan…» cevabında dikkatini çeken nedir?",
     "model": "Îsâ, ümmetinin aşırılarından uzak olduğunu açıkça söylüyor ama onları lanetlemiyor da. Hükmü tamamen Allah'a bırakıyor: Azap etmek de Allah'ın hakkıdır, bağışlamak da. Bu, bir peygamberin hem tevhid konusundaki kesinliğini hem de ümmetine duyduğu merhameti gösteren edepli bir cevaptır."
    },
    "retell": [
     "رَبِّي وَرَبَّكُمْ",
     "مَنْ يُشْرِكْ بِاللهِ",
     "لَنْ يَسْتَنْكِفَ",
     "سُبْحَانَكَ",
     "عَلَّامُ الْغُيُوبِ",
     "يَنْفَعُ الصَّادِقِينَ صِدْقُهُمْ"
    ],
    "quran": [
     {
      "ar": "وَإِذْ قَالَ اللَّهُ يَا عِيسَى ابْنَ مَرْيَمَ أَأَنْتَ قُلْتَ لِلنَّاسِ اتَّخِذُونِي وَأُمِّيَ إِلَٰهَيْنِ مِنْ دُونِ اللَّهِ",
      "ref": "Mâide 5:116",
      "tr": "Allah şöyle diyecek: «Ey Meryem oğlu Îsâ! İnsanlara, Allah'ı bırakıp beni ve annemi iki ilah edinin diye sen mi söyledin?»",
      "inText": "Metin, Mâide 116–120. âyetleri aktarıyor."
     },
     {
      "ar": "لَنْ يَسْتَنْكِفَ الْمَسِيحُ أَنْ يَكُونَ عَبْدًا لِلَّهِ وَلَا الْمَلَائِكَةُ الْمُقَرَّبُونَ",
      "ref": "Nisâ 4:172",
      "tr": "Mesih de, (Allah'a) yakın melekler de Allah'a kul olmaktan asla çekinmezler.",
      "inText": "«لَنْ يَسْتَنْكِفَ الْمَسِيحُ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 39,
     "title_ar": "الْقُرْآنُ يُصَرِّحُ بِدَعْوَةِ عِيسَى",
     "title_tr": "Kur'an Îsâ'nın davetini açıkça bildiriyor",
     "s": [
      [
       "وَقَدْ نَقَلَ الْقُرْآنُ، وَهُوَ الْكِتَابُ الْمُصَدِّقُ لِمَا بَيْنَ يَدَيْهِ وَالْمُهَيْمِنُ عَلَيْهِ، مِنْ إِعْلَانِ سَيِّدِنَا عِيسَى بِالتَّوْحِيدِ الْخَالِصِ وَالدَّعْوَةِ إِلَيْهِ، فِي أُسْلُوبٍ صَرِيحٍ وَاضِحٍ لَا مَزِيدَ عَلَيْهِ:",
       "Kendinden öncekileri doğrulayan ve onları koruyup gözeten kitap olan Kur'an, efendimiz Îsâ'nın halis tevhidi ilan edişini ve ona çağırışını, bundan daha açık olamayacak, apaçık bir üslupla aktarmıştır:"
      ],
      [
       "«لَقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ وَقَالَ الْمَسِيحُ يَا بَنِي إِسْرَائِيلَ اعْبُدُوا اللهَ رَبِّي وَرَبَّكُمْ».",
       "«'Allah, Meryem oğlu Mesih'in ta kendisidir' diyenler andolsun ki kâfir oldular. Hâlbuki Mesih: 'Ey İsrailoğulları! Benim de Rabbim, sizin de Rabbiniz olan Allah'a ibadet edin' demişti.»"
      ],
      [
       "«إِنَّهُ مَنْ يُشْرِكْ بِاللهِ فَقَدْ حَرَّمَ اللهُ عَلَيْهِ الْجَنَّةَ وَمَأْوَاهُ النَّارُ وَمَا لِلظَّالِمِينَ مِنْ أَنْصَارٍ».",
       "«'Şüphesiz kim Allah'a ortak koşarsa, Allah ona cenneti haram kılar; onun varacağı yer ateştir. Zalimlerin hiç yardımcıları yoktur.'»"
      ]
     ]
    },
    {
     "n": 40,
     "title_ar": "مَنْزِلَةُ التَّوْحِيدِ فِي دَعْوَتِهِ",
     "title_tr": "Davetinde tevhidin yeri",
     "s": [
      [
       "وَقَالَ فِي أُسْلُوبٍ جَمِيلٍ بَلِيغٍ يَتَذَوَّقُهُ كُلُّ مَنْ عَرَفَ مَنْزِلَةَ التَّوْحِيدِ وَسِيرَةَ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ، وَمَا طُبِعُوا عَلَيْهِ مِنْ مَعْرِفَةِ اللهِ تَعَالَى وَالْخُضُوعِ لَهُ، وَالرَّهْبَةِ مِنْهُ:",
       "Tevhidin değerini, nebilerin ve resullerin hayatını, onların yaratılıştan sahip oldukları Allah'ı tanıma, O'na boyun eğme ve O'ndan korkma hâlini bilen herkesin tadına varacağı güzel ve beliğ bir üslupla şöyle buyurdu:"
      ],
      [
       "«لَنْ يَسْتَنْكِفَ الْمَسِيحُ أَنْ يَكُونَ عَبْدًا لِلّٰهِ وَلَا الْمَلَائِكَةُ الْمُقَرَّبُونَ وَمَنْ يَسْتَنْكِفْ عَنْ عِبَادَتِهِ وَيَسْتَكْبِرْ فَسَيَحْشُرُهُمْ إِلَيْهِ جَمِيعًا».",
       "«Mesih de, (Allah'a) yakın melekler de Allah'a kul olmaktan asla çekinmezler. Kim O'na kulluktan çekinir ve büyüklük taslarsa, (bilsin ki) Allah onların hepsini huzurunda toplayacaktır.»"
      ],
      [
       "«فَأَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَيُوَفِّيهِمْ أُجُورَهُمْ وَيَزِيدُهُمْ مِنْ فَضْلِهِ».",
       "«İman edip salih ameller işleyenlere gelince, Allah onların mükâfatlarını tam olarak verecek ve lütfundan onlara fazlasını da ihsan edecektir.»"
      ],
      [
       "«وَأَمَّا الَّذِينَ اسْتَنْكَفُوا وَاسْتَكْبَرُوا فَيُعَذِّبُهُمْ عَذَابًا أَلِيمًا وَلَا يَجِدُونَ لَهُمْ مِنْ دُونِ اللهِ وَلِيًّا وَلَا نَصِيرًا».",
       "«Çekinip büyüklük taslayanlara gelince, onları can yakıcı bir azapla cezalandıracaktır. Onlar Allah'tan başka ne bir dost ne de bir yardımcı bulabilirler.»"
      ]
     ]
    },
    {
     "n": 41,
     "title_ar": "مَشْهَدٌ رَائِعٌ مِنْ مَشَاهِدِ الْقِيَامَةِ",
     "title_tr": "Kıyametin etkileyici sahnelerinden biri",
     "s": [
      [
       "وَقَدْ صَوَّرَ الْقُرْآنُ فِي بَلَاغَتِهِ وَإِعْجَازِهِ مَشْهَدًا مِنْ مَشَاهِدِ الْقِيَامَةِ الرَّائِعَةِ، يَتَبَرَّأُ فِيهِ سَيِّدُنَا عِيسَى مِمَّا تَقُولُهُ النَّاسُ فِيهِ، وَعَامَلُوهُ بِهِ.",
       "Kur'an, belagati ve mucizevi üslubuyla kıyametin etkileyici sahnelerinden birini tasvir etmiştir; bu sahnede efendimiz Îsâ, insanların onun hakkında söylediklerinden ve ona yaptıklarından uzak olduğunu bildirir."
      ],
      [
       "وَيُوَضِّحُ دَعْوَتَهُ فِي قُوَّةٍ وَصِدْقٍ، وَيُدِينُ فِي هٰذِهِ الْقَضِيَّةِ الْغُلَاةَ مِنْ أُمَّتِهِ، وَأَنَّهُمْ هُمُ الْمَسْؤُولُونَ وَحْدَهُمْ عَنْ هٰذِهِ الْجَرِيمَةِ.",
       "Davetini güçlü ve samimi bir şekilde açıklar; bu konuda ümmetinin aşırılarını suçlu bulur ve bu suçtan yalnızca onların sorumlu olduğunu bildirir."
      ],
      [
       "اقْرَؤُوا الْقُرْآنَ، وَاسْتَشْعِرُوا جَلَالَ الْمَوْقِفِ وَرَوْعَةَ الْمَشْهَدِ:",
       "Kur'an'ı okuyun; o durumun yüceliğini ve sahnenin heybetini içinizde hissedin:"
      ],
      [
       "«وَإِذْ قَالَ اللهُ يَا عِيسَى ابْنَ مَرْيَمَ أَأَنْتَ قُلْتَ لِلنَّاسِ اتَّخِذُونِي وَأُمِّيَ إِلٰهَيْنِ مِنْ دُونِ اللهِ».",
       "«Allah şöyle diyecek: 'Ey Meryem oğlu Îsâ! İnsanlara, Allah'ı bırakıp beni ve annemi iki ilah edinin diye sen mi söyledin?'»"
      ],
      [
       "«قَالَ سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ إِنْ كُنْتُ قُلْتُهُ فَقَدْ عَلِمْتَهُ تَعْلَمُ مَا فِي نَفْسِي وَلَا أَعْلَمُ مَا فِي نَفْسِكَ إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ».",
       "«O da: 'Seni tenzih ederim! Hakkım olmayan bir şeyi söylemek bana yakışmaz. Eğer onu söyleseydim, sen onu elbette bilirdin. Sen benim içimdekini bilirsin, ben ise senin zatında olanı bilmem. Şüphesiz gaybları hakkıyla bilen sensin' diyecek.»"
      ],
      [
       "«مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ أَنِ اعْبُدُوا اللهَ رَبِّي وَرَبَّكُمْ وَكُنْتُ عَلَيْهِمْ شَهِيدًا مَا دُمْتُ فِيهِمْ فَلَمَّا تَوَفَّيْتَنِي كُنْتَ أَنْتَ الرَّقِيبَ عَلَيْهِمْ وَأَنْتَ عَلَى كُلِّ شَيْءٍ شَهِيدٌ».",
       "«'Ben onlara, bana emrettiğinden başkasını söylemedim: Benim de Rabbim, sizin de Rabbiniz olan Allah'a ibadet edin (dedim). Aralarında bulunduğum sürece onlara şahittim. Beni (aralarından) aldığında ise onları gözetleyen yalnız sen oldun. Sen her şeye şahitsin.'»"
      ],
      [
       "«إِنْ تُعَذِّبْهُمْ فَإِنَّهُمْ عِبَادُكَ وَإِنْ تَغْفِرْ لَهُمْ فَإِنَّكَ أَنْتَ الْعَزِيزُ الْحَكِيمُ».",
       "«'Eğer onlara azap edersen, şüphesiz onlar senin kullarındır. Eğer onları bağışlarsan, şüphesiz sen mutlak galipsin, hikmet sahibisin.'»"
      ],
      [
       "«قَالَ اللهُ هٰذَا يَوْمُ يَنْفَعُ الصَّادِقِينَ صِدْقُهُمْ لَهُمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا رَضِيَ اللهُ عَنْهُمْ وَرَضُوا عَنْهُ ذٰلِكَ الْفَوْزُ الْعَظِيمُ».",
       "«Allah şöyle diyecek: 'Bu, doğrulara doğruluklarının fayda vereceği gündür. Onlar için, içinde ebedî kalacakları, altlarından ırmaklar akan cennetler vardır. Allah onlardan razı olmuş, onlar da O'ndan razı olmuşlardır. İşte büyük kurtuluş budur.'»"
      ],
      [
       "«لِلّٰهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَمَا فِيهِنَّ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ».",
       "«Göklerin, yerin ve onlarda bulunanların mülkü Allah'ındır. O her şeye kadirdir.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 14,
   "emoji": "🗺️",
   "title_ar": "إِلَى أُورُبَّا",
   "title_tr": "Avrupa'ya doğru",
   "pre": {
    "predict": {
     "prompt_tr": "Hristiyanlık, putperestliğin köklü olduğu Yunan ve Roma dünyasına yayıldı. Sence bu yeni ortam dini nasıl etkiledi?",
     "options": [
      [
       "أَخَذَ الدِّينُ كَثِيرًا مِنْ عَقَائِدِهِمْ وَتَقَالِيدِهِمْ",
       "Din onların inançlarından ve geleneklerinden çok şey aldı"
      ],
      [
       "لَمْ يَتَأَثَّرْ أَبَدًا",
       "Hiç etkilenmedi"
      ],
      [
       "زَالَتِ الْوَثَنِيَّةُ فَوْرًا",
       "Putperestlik hemen yok oldu"
      ]
     ]
    },
    "vocab": [
     [
      "الْوَثَنِيَّةُ",
      "putperestlik",
      "🗿"
     ],
     [
      "سَافِرٌ",
      "açık, örtüsüz",
      "👁️"
     ],
     [
      "هَيْكَلٌ",
      "tapınak",
      "🏛️"
     ],
     [
      "تَنَصَّرَ",
      "Hristiyan oldu",
      "✝️"
     ],
     [
      "الْفَلْسَفَةُ",
      "felsefe",
      "🤔"
     ],
     [
      "مَأْسَاةٌ",
      "trajedi",
      "🎭"
     ]
    ]
   },
   "stop": {
    "section": 42,
    "after": 4,
    "prompt_tr": "Roma köklü bir putperestlik merkeziydi. Sonra imparator Hristiyan oldu ve onu devletin resmî dini yaptı. Sence bundan sonra ne oldu?",
    "options": [
     [
      "بَدَأَتِ النَّصْرَانِيَّةُ تَأْخُذُ مِنَ الْوَثَنِيَّةِ",
      "Hristiyanlık putperestlikten bir şeyler almaya başladı"
     ],
     [
      "زَالَتْ كُلُّ الْعَادَاتِ الْقَدِيمَةِ",
      "Bütün eski âdetler yok oldu"
     ],
     [
      "تَرَكَ النَّاسُ الدِّينَ",
      "İnsanlar dini bıraktı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "انْتَقَلَ دُعَاةُ الْمَسِيحِيَّةِ إِلَى أُورُبَّا.",
     "كَانَ الْيُونَانُ وَالرُّومَانُ وَثَنِيِّينَ.",
     "تَنَصَّرَ قُسْطَنْطِينُ وَجَعَلَهَا دِينَ الدَّوْلَةِ.",
     "أَخَذَتِ النَّصْرَانِيَّةُ مِنَ الْعَقَائِدِ الْوَثَنِيَّةِ.",
     "نَشَأَ دِينٌ جَدِيدٌ."
    ],
    "questions": [
     {
      "q": "كَيْفَ كَانَ الْيُونَانُ يَتَصَوَّرُونَ صِفَاتِ اللهِ؟",
      "qt": "Yunanlılar Allah'ın sıfatlarını nasıl tasavvur ediyorlardı?",
      "o": [
       "فِي شَكْلِ آلِهَةٍ شَتَّى",
       "إِلٰهًا وَاحِدًا",
       "لَمْ يَتَصَوَّرُوهَا"
      ],
      "ot": [
       "Çeşitli ilahlar şeklinde",
       "Tek bir ilah olarak",
       "Hiç tasavvur etmediler"
      ],
      "a": 0,
      "ev": [
       "42.1"
      ]
     },
     {
      "q": "مَنْ جَعَلَ النَّصْرَانِيَّةَ دِينَ الدَّوْلَةِ الرَّسْمِيَّ؟",
      "qt": "Hristiyanlığı devletin resmî dini kim yaptı?",
      "o": [
       "قُسْطَنْطِينُ الْكَبِيرُ",
       "الْحَاكِمُ الرُّومِيُّ فِي فِلَسْطِينَ",
       "الْحَوَارِيُّونَ"
      ],
      "ot": [
       "Büyük Konstantin",
       "Filistin'deki Romalı vali",
       "Havariler"
      ],
      "a": 0,
      "ev": [
       "42.5"
      ]
     },
     {
      "q": "مِمَّ أَخَذَتِ النَّصْرَانِيَّةُ؟",
      "qt": "Hristiyanlık nelerden (bir şeyler) aldı?",
      "o": [
       "مِنَ الْعَقَائِدِ الْوَثَنِيَّةِ وَالْفَلْسَفَةِ الْيُونَانِيَّةِ",
       "مِنَ الْقُرْآنِ",
       "مِنْ عُلُومِ الطِّبِّ"
      ],
      "ot": [
       "Putperest inançlardan ve Yunan felsefesinden",
       "Kur'an'dan",
       "Tıp ilimlerinden"
      ],
      "a": 0,
      "ev": [
       "42.5"
      ]
     },
     {
      "q": "مَاذَا فَقَدَتِ النَّصْرَانِيَّةُ رُوَيْدًا رُوَيْدًا؟",
      "qt": "Hristiyanlık yavaş yavaş neyi kaybetti?",
      "o": [
       "أَصَالَتَهَا النَّبَوِيَّةَ وَبَسَاطَتَهَا",
       "أَتْبَاعَهَا",
       "كَنَائِسَهَا"
      ],
      "ot": [
       "Peygamberlikten gelen asaletini ve sadeliğini",
       "Takipçilerini",
       "Kiliselerini"
      ],
      "a": 0,
      "ev": [
       "42.6"
      ]
     },
     {
      "q": "بِمَ شَبَّهَ الْكِتَابُ النَّصْرَانِيَّةَ بَعْدَ ذٰلِكَ؟",
      "qt": "Kitap bundan sonraki Hristiyanlığı neye benzetiyor?",
      "o": [
       "بِسَالِكِ طَرِيقٍ يَضِلُّ فِي ظَلَامِ اللَّيْلِ",
       "بِشَجَرَةٍ مُثْمِرَةٍ",
       "بِنَهْرٍ صَافٍ"
      ],
      "ot": [
       "Gecenin karanlığında yolunu kaybeden bir yolcuya",
       "Meyve veren bir ağaca",
       "Berrak bir nehre"
      ],
      "a": 0,
      "ev": [
       "42.10"
      ]
     }
    ],
    "focus": {
     "title": "Nisbe ve sıfat uyumu: الْفَلْسَفَةُ الْيُونَانِيَّةُ",
     "explain": "Bir isme <b>ـِيٌّ</b> (dişili <b>ـِيَّةٌ</b>) eklenince «-li, -e ait» anlamında nisbe sıfatı olur: <span class='ar-inline'>يُونَانُ → يُونَانِيٌّ</span>, <span class='ar-inline'>رُومٌ → رُومِيٌّ</span>, <span class='ar-inline'>وَثَنٌ → وَثَنِيٌّ</span>. Sıfat, nitelediği isme cinsiyet, belirlilik ve hâl bakımından uyar: <span class='ar-inline'>الْفَلْسَفَةِ الْيُونَانِيَّةِ</span>, <span class='ar-inline'>التَّقَالِيدِ الرُّومِيَّةِ</span>. İnsan dışı çoğullar dişil tekil sıfat alır: <span class='ar-inline'>الْعَقَائِدِ الْوَثَنِيَّةِ</span>.",
     "examples": [
      "مِنَ الْعَقَائِدِ الْوَثَنِيَّةِ وَالتَّقَالِيدِ الرُّومِيَّةِ وَالْفَلْسَفَةِ الْيُونَانِيَّةِ",
      "وَقَدْ شَاعَتْ فِيهَا الْوَثَنِيَّةُ السَّافِرَةُ",
      "وَجَعَلَهُ دِينَ الدَّوْلَةِ الرَّسْمِيَّ"
     ],
     "items": [
      {
       "q": "الْفَلْسَفَةُ ____",
       "o": [
        "الْيُونَانِيَّةُ",
        "الْيُونَانِيُّ",
        "يُونَانِيَّةٌ"
       ],
       "a": 0
      },
      {
       "q": "الْعَقَائِدُ ____ (insan dışı çoğul)",
       "o": [
        "الْوَثَنِيَّةُ",
        "الْوَثَنِيُّونَ",
        "الْوَثَنِيُّ"
       ],
       "a": 0
      },
      {
       "q": "رُومٌ → ____",
       "o": [
        "رُومِيٌّ",
        "رُومَانٌ",
        "مَرُومٌ"
       ],
       "a": 0
      },
      {
       "q": "«الدِّينُ الرَّسْمِيُّ» = …",
       "o": [
        "resmî din",
        "resim dini",
        "eski din"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "انْتَقَلَ دُعَاةُ الْمَسِيحِيَّةِ إِلَى {أُورُبَّا}، وَكَانَ الْيُونَانُ {وَثَنِيِّينَ}. وَلَمَّا تَنَصَّرَ {قُسْطَنْطِينُ} جَعَلَهَا دِينَ الدَّوْلَةِ. فَأَخَذَتِ النَّصْرَانِيَّةُ مِنَ الْعَقَائِدِ الْوَثَنِيَّةِ وَالْفَلْسَفَةِ {الْيُونَانِيَّةِ}، وَفَقَدَتْ {بَسَاطَتَهَا} الشَّرْقِيَّةَ."
    },
    "think": {
     "q": "شَبَّهَ الْكَاتِبُ النَّصْرَانِيَّةَ بِـ«سَالِكِ طَرِيقٍ يَضِلُّ فِي ظَلَامِ اللَّيْلِ». مَا مَعْنَى هٰذَا التَّشْبِيهِ؟",
     "qt": "Yazar, sonraki Hristiyanlığı «gecenin karanlığında yolunu kaybeden yolcuya» benzetiyor. Bu benzetme ne anlatıyor? Bunun bir yazarın yorumu olduğunu da düşünerek değerlendir.",
     "model": "Yolcu bir yerde küçük bir sapma yapar, karanlıkta bunu fark etmez ve yürümeye devam eder; sonunda ilk yoldan çok uzaklaşır. Yazar, dinin baştaki sade tevhid yolundan küçük adımlarla ayrılıp sonunda bambaşka bir yere vardığını anlatmak istiyor. Bu, yazarın Müslüman bakış açısından yaptığı bir tarih yorumudur; Hristiyanlar kendi tarihlerini farklı anlatır. Dil öğrenen biri olarak benzetmenin nasıl kurulduğuna (كَـ + سَالِكِ طَرِيقٍ) da dikkat edebiliriz."
    },
    "retell": [
     "دُعَاةُ الْمَسِيحِيَّةِ",
     "الْوَثَنِيَّةُ السَّافِرَةُ",
     "آلِهَةٌ شَتَّى",
     "قُسْطَنْطِينُ الْكَبِيرُ",
     "دِينُ الدَّوْلَةِ الرَّسْمِيُّ",
     "سَالِكُ طَرِيقٍ يَضِلُّ"
    ],
    "quran": [
     {
      "ar": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      "ref": "Fâtiha 1:6–7",
      "tr": "Bizi dosdoğru yola ilet; nimet verdiklerinin yoluna, gazaba uğramışların ve sapmışların yoluna değil.",
      "inText": "«اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ …»"
     },
     {
      "ar": "قُلْ يَا أَهْلَ الْكِتَابِ لَا تَغْلُوا فِي دِينِكُمْ غَيْرَ الْحَقِّ وَلَا تَتَّبِعُوا أَهْوَاءَ قَوْمٍ قَدْ ضَلُّوا مِنْ قَبْلُ",
      "ref": "Mâide 5:77",
      "tr": "De ki: Ey kitap ehli! Dininizde haksız yere aşırı gitmeyin; daha önce sapmış bir topluluğun heveslerine uymayın.",
      "inText": "«وَدَخَلَ فِيهَا بَعْضُ الْمُنَافِقِينَ، فَطَعَّمُوهَا بِعَقَائِدِهِمُ الْقَدِيمَةِ»"
     }
    ]
   },
   "sections": [
    {
     "n": 42,
     "title_ar": "مِنْ عَقِيدَةٍ غَامِضَةٍ إِلَى وَثَنِيَّةٍ سَافِرَةٍ",
     "title_tr": "Kapalı bir inançtan açık bir putperestliğe",
     "s": [
      [
       "وَانْتَقَلَ دُعَاةُ الْمَسِيحِيَّةِ إِلَى أُورُبَّا بِدَافِعٍ مِنْ عِنْدِهِمْ، وَقَدْ شَاعَتْ فِيهَا الْوَثَنِيَّةُ السَّافِرَةُ مِنْ زَمَانٍ، وَغَاصَتْ فِيهَا إِلَى الْأَذْقَانِ.",
       "Hristiyanlığın davetçileri kendi istekleriyle Avrupa'ya geçtiler; orada uzun zamandan beri açık bir putperestlik yaygınlaşmış, (Avrupa) ona çenesine kadar batmıştı."
      ],
      [
       "فَكَانَ الْيُونَانُ وَثَنِيِّينَ، وَقَدْ تَصَوَّرُوا صِفَاتِ اللهِ فِي شَكْلِ آلِهَةٍ شَتَّى، نَحَتُوا لَهَا تَمَاثِيلَ، وَبَنَوْا لَهَا مَعَابِدَ وَهَيَاكِلَ.",
       "Yunanlılar putperestti; Allah'ın sıfatlarını çeşitli ilahlar şeklinde tasavvur etmiş, onlara heykeller yontmuş, mabetler ve tapınaklar kurmuşlardı."
      ],
      [
       "فَلِلرِّزْقِ إِلٰهٌ، وَلِلرَّحْمَةِ إِلٰهٌ، وَلِلْقَهْرِ إِلٰهٌ.",
       "Rızkın bir ilahı, merhametin bir ilahı, kahrın bir ilahı vardı."
      ],
      [
       "وَكَانَتْ رُومِيَّةُ عَرِيقَةً فِي الْوَثَنِيَّةِ وَالتَّمَسُّكِ بِالْخُرَافَاتِ، وَقَدِ امْتَزَجَتِ الْوَثَنِيَّةُ بِلَحْمِهَا وَدَمِهَا، وَجَرَتْ مِنْهَا مَجْرَى الرُّوحِ وَالدَّمِ.",
       "Roma da putperestlikte ve hurafelere sarılmakta köklüydü; putperestlik onun etine ve kanına karışmış, onda ruh ve kan gibi dolaşır olmuştu."
      ],
      [
       "وَكَانَ الرُّومَانُ يَعْبُدُونَ آلِهَةً شَتَّى.",
       "Romalılar çeşitli ilahlara tapıyorlardı."
      ],
      [
       "فَلَمَّا وَصَلَتِ الرُّومَانِيَّةُ إِلَى الْعَاصِمَةِ، وَتَنَصَّرَ قُسْطَنْطِينُ الْكَبِيرُ، وَاحْتَضَنَ الدِّينَ الْجَدِيدَ، وَتَبَنَّاهُ وَجَعَلَهُ دِينَ الدَّوْلَةِ الرَّسْمِيَّ، بَدَأَتِ النَّصْرَانِيَّةُ تَأْخُذُ الشَّيْءَ الْكَثِيرَ مِنَ الْعَقَائِدِ الْوَثَنِيَّةِ وَالتَّقَالِيدِ الرُّومِيَّةِ وَالْفَلْسَفَةِ الْيُونَانِيَّةِ.",
       "(Hristiyanlık) başkente ulaşıp Büyük Konstantin Hristiyan olunca, yeni dini bağrına basıp benimseyince ve onu devletin resmî dini yapınca, Hristiyanlık putperest inançlardan, Roma geleneklerinden ve Yunan felsefesinden pek çok şey almaya başladı."
      ],
      [
       "وَتَدْنُو إِلَيْهَا رُوَيْدًا رُوَيْدًا، وَصَارَتْ تَفْقِدُ أَصَالَتَهَا النَّبَوِيَّةَ، وَبَسَاطَتَهَا الشَّرْقِيَّةَ، وَحَمَاسَتَهَا التَّوْحِيدِيَّةَ.",
       "Yavaş yavaş onlara yaklaştı; peygamberlikten gelen asaletini, Doğu'ya özgü sadeliğini ve tevhid coşkusunu kaybetmeye başladı."
      ],
      [
       "وَدَخَلَ فِيهَا بَعْضُ الْمُنَافِقِينَ، فَطَعَّمُوهَا بِعَقَائِدِهِمُ الْقَدِيمَةِ وَذَوْقِهِمُ الْوَثَنِيِّ.",
       "İçine bazı münafıklar girdi ve onu eski inançları ve putperest zevkleriyle aşıladılar."
      ],
      [
       "وَنَشَأَ مِنْ ذٰلِكَ دِينٌ جَدِيدٌ، تَتَجَلَّى فِيهِ النَّصْرَانِيَّةُ وَالْوَثَنِيَّةُ سَوَاءً بِسَوَاءٍ.",
       "Bundan, Hristiyanlığın ve putperestliğin eşit ölçüde göründüğü yeni bir din doğdu."
      ],
      [
       "وَكَذٰلِكَ سَارَتِ النَّصْرَانِيَّةُ الزَّاحِفَةُ الْفَاتِحَةُ عَلَى دَرْبٍ غَيْرِ الدَّرْبِ الَّذِي سَلَكَ الْمَسِيحُ بِهَا عَلَيْهِ، وَدَعَا إِلَيْهِ.",
       "Böylece ilerleyen ve fetheden Hristiyanlık, Mesih'in onu yürüttüğü ve çağırdığı yoldan başka bir yolda yürüdü."
      ],
      [
       "وَكَانَتْ كَسَالِكِ طَرِيقٍ يَضِلُّ عَنِ الطَّرِيقِ، عَنْ قَصْدٍ أَوْ عَنْ غَيْرِ قَصْدٍ، فِي ظَلَامِ اللَّيْلِ، فَيُوَاصِلُ سَيْرَهُ عَلَى طَرِيقٍ لَا يَلْتَقِي بِالطَّرِيقِ الْأَوَّلِ إِلَى الْأَخِيرِ.",
       "O, gecenin karanlığında, bilerek ya da bilmeyerek yolunu kaybeden ve ilk yolla sonuna kadar hiç kesişmeyen bir yolda yürümeye devam eden bir yolcu gibiydi."
      ],
      [
       "وَلِهٰذِهِ الْحِكْمَةِ الدَّقِيقَةِ الَّتِي لَا يَعْرِفُهَا إِلَّا مَنْ قَرَأَ تَارِيخَ هٰذِهِ الدِّيَانَةِ، وَصَفَهُمُ اللهُ بِالضَّلَالِ حِينَ وَصَفَ الْيَهُودَ بِالْمَغْضُوبِ عَلَيْهِمْ، فَقَالَ عَلَى لِسَانِ الْمُسْلِمِينَ:",
       "Ancak bu dinin tarihini okuyanların bilebileceği bu ince hikmetten dolayı Allah, Yahudileri «gazaba uğramışlar» diye nitelediğinde onları da «sapmışlar» diye nitelemiş ve Müslümanların diliyle şöyle buyurmuştur:"
      ],
      [
       "«اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ».",
       "«Bizi dosdoğru yola ilet; nimet verdiklerinin yoluna, gazaba uğramışların ve sapmışların yoluna değil.»"
      ],
      [
       "وَكَانَتْ فِي ذٰلِكَ مَأْسَاةٌ لِأُورُبَّا، وَمَأْسَاةٌ لِلْإِنْسَانِيَّةِ الَّتِي قَادَتْهَا أُورُبَّا زَمَنًا طَوِيلًا، وَلَا تَزَالُ مُسَيْطِرَةً عَلَيْهَا وَمُتَحَكِّمَةً فِيهَا، وَلِلّٰهِ الْأَمْرُ مِنْ قَبْلُ وَمِنْ بَعْدُ.",
       "Bunda Avrupa için bir trajedi, Avrupa'nın uzun zaman önderlik ettiği ve hâlâ üzerinde hâkimiyet kurup onu yönettiği insanlık için de bir trajedi vardı. Önünde de sonunda da emir Allah'ındır."
      ]
     ]
    }
   ]
  }
 ]
});
