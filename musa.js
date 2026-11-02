/* Kasasu'n-Nebiyyîn — Hz. Mûsâ kıssası (s. 135–284)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "musa",
 "title_ar": "قِصَّةُ مُوسَى عَلَيْهِ السَّلَامُ",
 "title_tr": "Hz. Mûsâ'nın Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 135–284",
 "overrides": {
  "لكرمه": "كرم_اسم",
  "وكرمه": "كرم_اسم",
  "وملكا": "ملك",
  "ملكا": "ملك",
  "بملكه": "ملك_مال",
  "ملكك": "ملك_مال",
  "ملكه": "ملك_مال",
  "وجن": "جن_فعل",
  "حجر": "حجر_كنف",
  "حجرها": "حجر_كنف",
  "واثار": "يثير",
  "ويستحيي": "نستحيي",
  "ها": "ها_هو",
  "وها": "ها_هو",
  "بملككم": "ملك_مال",
  "بايات": "اية"
 },
 "voverrides": {
  "الْمُلْكُ": "ملك_مال",
  "وَعَادٍ": "عاد_قوم",
  "إِمَامٍ": "امام_قائد",
  "الْإِمَامَ": "امام_قائد",
  "إِمَّا": "اما_او",
  "فَإِمَّا": "اما_او",
  "وَإِمَّا": "اما_او"
 },
 "units": [
  {
   "id": 1,
   "emoji": "🏛️",
   "title_ar": "بَنُو إِسْرَائِيلَ فِي مِصْرَ",
   "title_tr": "İsrailoğulları Mısır'da",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «مِنْ كَنْعَانَ إِلَى مِصْرَ», «بَعْدَ يُوسُفَ», «بَنُو إِسْرَائِيلَ فِي مِصْرَ». Yûsuf kıssasının sonunu hatırla. Sence Yûsuf öldükten sonra Mısırlılar İsrailoğullarına nasıl davrandı?",
     "options": [
      [
       "تَغَيَّرُوا لَهُمْ بَعْدَ مُدَّةٍ",
       "Bir süre sonra onlara karşı değiştiler"
      ],
      [
       "أَحَبُّوهُمْ دَائِمًا",
       "Onları hep sevdiler"
      ],
      [
       "طَرَدُوهُمْ فِي الْيَوْمِ الْأَوَّلِ",
       "Onları ilk gün kovdular"
      ]
     ]
    },
    "vocab": [
     [
      "انْتَقَلَ",
      "taşındı, göçtü",
      "🚚"
     ],
     [
      "يَرْعَى الْغَنَمَ",
      "koyun güder",
      "🐑"
     ],
     [
      "طَابَ لَهُ",
      "hoşuna gitti, ona tatlı geldi",
      "😊"
     ],
     [
      "مَجَاعَةٌ",
      "kıtlık",
      "🌾"
     ],
     [
      "أَخْلَاقٌ",
      "ahlak",
      "🧭"
     ],
     [
      "غَرِيبٌ",
      "yabancı",
      "🧳"
     ]
    ]
   },
   "stop": {
    "section": 3,
    "after": 2,
    "prompt_tr": "Ken'anlılar, yani İsrailoğulları, şeref ve mal sahibiydi. Sence hep böyle mi kaldılar?",
    "options": [
     [
      "لَا، فَسَدَتْ أَخْلَاقُهُمْ وَتَغَيَّرَ النَّاسُ لَهُمْ",
      "Hayır; ahlakları bozuldu, insanlar da onlara karşı değişti"
     ],
     [
      "نَعَمْ، بَقُوا مُلُوكَ مِصْرَ",
      "Evet, Mısır'ın kralları olarak kaldılar"
     ],
     [
      "رَجَعُوا إِلَى كَنْعَانَ",
      "Ken'an'a döndüler"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "انْتَقَلَ يَعْقُوبُ وَأَوْلَادُهُ إِلَى مِصْرَ.",
     "فَرِحَ بِهِمْ يُوسُفُ وَأَهْلُ مِصْرَ.",
     "مَاتَ يَعْقُوبُ ثُمَّ مَاتَ يُوسُفُ.",
     "عَزَّى أَهْلُ مِصْرَ إِخْوَةَ يُوسُفَ.",
     "فَسَدَتْ أَخْلَاقُ بَنِي إِسْرَائِيلَ.",
     "نَظَرَ إِلَيْهِمْ أَهْلُ مِصْرَ كَغُرَبَاءَ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا انْتَقَلَ يَعْقُوبُ إِلَى مِصْرَ؟",
      "qt": "Yakup neden Mısır'a taşındı?",
      "o": [
       "لِأَنَّ يُوسُفَ كَانَ سَيِّدَ مِصْرَ",
       "لِأَنَّ كَنْعَانَ كَانَتْ بَعِيدَةً",
       "لِأَنَّ فِرْعَوْنَ دَعَاهُ"
      ],
      "ot": [
       "Çünkü Yûsuf Mısır'ın efendisiydi",
       "Çünkü Ken'an uzaktı",
       "Çünkü Firavun onu davet etti"
      ],
      "a": 0,
      "ev": [
       "1.1"
      ]
     },
     {
      "q": "مَاذَا كَانُوا يَفْعَلُونَ فِي كَنْعَانَ؟",
      "qt": "Ken'an'da ne yapıyorlardı?",
      "o": [
       "يَرْعَوْنَ الْغَنَمَ وَيَبِيعُونَ الصُّوفَ",
       "يَبْنُونَ الْقُصُورَ",
       "يَصْنَعُونَ السُّفُنَ"
      ],
      "ot": [
       "Koyun güdüp yün satıyorlardı",
       "Saraylar yapıyorlardı",
       "Gemiler yapıyorlardı"
      ],
      "a": 0,
      "ev": [
       "1.2"
      ]
     },
     {
      "q": "لِمَاذَا أَحَبَّ أَهْلُ مِصْرَ بَيْتَ يَعْقُوبَ؟",
      "qt": "Mısır halkı Yakup'un ailesini neden sevdi?",
      "o": [
       "لِأَنَّهُمْ يُحِبُّونَ يُوسُفَ لِكَرَمِهِ وَإِحْسَانِهِ",
       "لِأَنَّهُمْ كَانُوا أَغْنِيَاءَ",
       "لِأَنَّهُمْ كَانُوا مِنْ مِصْرَ"
      ],
      "ot": [
       "Çünkü cömertliği ve iyiliği yüzünden Yûsuf'u seviyorlardı",
       "Çünkü zengindiler",
       "Çünkü Mısırlıydılar"
      ],
      "a": 0,
      "ev": [
       "1.11"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ يُوسُفُ أَيَّامَ الْمَجَاعَةِ؟",
      "qt": "Yûsuf kıtlık günlerinde ne yaptı?",
      "o": [
       "أَغَاثَ النَّاسَ فَأَكَلُوا وَشَبِعُوا",
       "تَرَكَ مِصْرَ",
       "بَاعَ الطَّعَامَ لِلْأَغْنِيَاءِ فَقَطْ"
      ],
      "ot": [
       "İnsanlara yardım etti, yiyip doydular",
       "Mısır'ı terk etti",
       "Yiyeceği sadece zenginlere sattı"
      ],
      "a": 0,
      "ev": [
       "2.14"
      ]
     },
     {
      "q": "لِمَاذَا تَغَيَّرَ النَّاسُ لِبَنِي إِسْرَائِيلَ؟",
      "qt": "İnsanlar İsrailoğullarına karşı neden değişti?",
      "o": [
       "لِأَنَّ أَخْلَاقَهُمْ فَسَدَتْ وَتَرَكُوا الدَّعْوَةَ",
       "لِأَنَّهُمْ صَارُوا فُقَرَاءَ كُلُّهُمْ",
       "لِأَنَّ يَعْقُوبَ أَمَرَهُمْ"
      ],
      "ot": [
       "Çünkü ahlakları bozuldu ve daveti bıraktılar",
       "Çünkü hepsi yoksullaştı",
       "Çünkü Yakup onlara emretti"
      ],
      "a": 0,
      "ev": [
       "3.3"
      ]
     }
    ],
    "focus": {
     "title": "Pekiştirme: فَرِحَ فَرَحًا عَظِيمًا",
     "explain": "Fiilden sonra aynı kökten bir mastar gelir ve genelde bir sıfat alır; anlam pekişir (mef'ûl-i mutlak): <span class='ar-inline'>فَرِحَ بِهِمْ فَرَحًا عَظِيمًا</span> (onlara çok büyük bir sevinçle sevindi), <span class='ar-inline'>حَزِنَ عَلَيْهِ حُزْنًا شَدِيدًا</span> (ona çok üzüldü), <span class='ar-inline'>بَكَوْا عَلَيْهِ بُكَاءً طَوِيلًا</span> (uzun uzun ağladılar). Mastar mansubdur.",
     "examples": [
      "فَاسْتَقْبَلَهُمْ يُوسُفُ وَفَرِحَ بِهِمْ فَرَحًا عَظِيمًا",
      "وَحَزِنَ عَلَيْهِ أَهْلُ مِصْرَ حُزْنًا شَدِيدًا",
      "وَبَكَوْا عَلَيْهِ بُكَاءً طَوِيلًا"
     ],
     "items": [
      {
       "q": "وَفَرِحَ بِهِمْ ____ عَظِيمًا.",
       "o": [
        "فَرَحًا",
        "فَرَحٌ",
        "فَرِحٌ"
       ],
       "a": 0
      },
      {
       "q": "وَحَزِنَ عَلَيْهِ أَهْلُ مِصْرَ ____ شَدِيدًا.",
       "o": [
        "حُزْنًا",
        "فَرَحًا",
        "بُكَاءً"
       ],
       "a": 0
      },
      {
       "q": "وَبَكَوْا عَلَيْهِ ____ طَوِيلًا.",
       "o": [
        "بُكَاءً",
        "بُكَاءٌ",
        "يَبْكُونَ"
       ],
       "a": 0
      },
      {
       "q": "«حَزِنَ حُزْنًا شَدِيدًا» = …",
       "o": [
        "çok üzüldü",
        "biraz üzüldü",
        "hiç üzülmedi"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "انْتَقَلَ يَعْقُوبُ وَأَوْلَادُهُ إِلَى {مِصْرَ}. وَفَرِحَ بِهِمْ يُوسُفُ فَرَحًا {عَظِيمًا}. وَبَعْدَ مُدَّةٍ مَاتَ {يُوسُفُ}. وَلٰكِنْ فَسَدَتْ {أَخْلَاقُ} بَنِي إِسْرَائِيلَ، وَنَسِيَ النَّاسُ {فَضْلَ} يُوسُفَ."
    },
    "think": {
     "q": "لِمَاذَا نَسِيَ أَهْلُ مِصْرَ فَضْلَ يُوسُفَ بَعْدَ مُدَّةٍ؟",
     "qt": "Mısır halkı bir süre sonra Yûsuf'un iyiliğini neden unuttu?",
     "model": "Metin iki sebep gösteriyor: Birincisi, İsrailoğulları değişti; ahlakları bozuldu, insanları Allah'a çağırmayı bırakıp dünyaya daldılar, yani babalarının saygınlığını taşıyan davranışları kaybettiler. İkincisi, zaman geçtikçe Mısırlılarda «Mısır Mısırlılarındır» düşüncesi güçlendi ve Yûsuf bir yabancı olarak hatırlanmaya başladı. Saygınlık soyla değil davranışla korunur."
    },
    "retell": [
     "كَنْعَانُ",
     "مِصْرُ",
     "يَعْقُوبُ وَيُوسُفُ",
     "الْمَجَاعَةُ",
     "فَسَدَتْ أَخْلَاقُهُمْ",
     "غَرِيبٌ"
    ],
    "quran": [
     {
      "ar": "فَلَمَّا دَخَلُوا عَلَى يُوسُفَ آوَى إِلَيْهِ أَبَوَيْهِ وَقَالَ ادْخُلُوا مِصْرَ إِنْ شَاءَ اللهُ آمِنِينَ",
      "ref": "Yûsuf 12:99",
      "tr": "Yûsuf'un yanına girdiklerinde o, anne ve babasını bağrına bastı ve dedi: Allah'ın izniyle güven içinde Mısır'a girin.",
      "inText": "وَجَاءَ يَعْقُوبُ وَأَوْلَادُهُ إِلَى مِصْرَ فَاسْتَقْبَلَهُمْ يُوسُفُ"
     },
     {
      "ar": "وَلَقَدْ جَاءَكُمْ يُوسُفُ مِنْ قَبْلُ بِالْبَيِّنَاتِ فَمَا زِلْتُمْ فِي شَكٍّ مِمَّا جَاءَكُمْ بِهِ",
      "ref": "Ğâfir 40:34",
      "tr": "Andolsun, daha önce Yûsuf size apaçık delillerle gelmişti; ama onun getirdiği şeyden hep şüphe içinde kaldınız.",
      "inText": "وَنَسِيَ كَثِيرٌ مِنَ النَّاسِ فَضْلَ يُوسُفَ"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "مِنْ كَنْعَانَ إِلَى مِصْرَ",
     "title_tr": "Ken'an'dan Mısır'a",
     "s": [
      [
       "انْتَقَلَ يَعْقُوبُ «عَلَيْهِ السَّلَامُ» إِلَى مِصْرَ وَانْتَقَلَ مَعَهُ أَوْلَادُهُ.",
       "Yakup (aleyhisselâm) Mısır'a taşındı, çocukları da onunla birlikte taşındı."
      ],
      [
       "انْتَقَلُوا إِلَى مِصْرَ لِأَنَّ يُوسُفَ بْنَ يَعْقُوبَ «عَلَيْهِمَا السَّلَامُ» هُوَ سَيِّدُ مِصْرَ، يَأْمُرُ وَيَنْهَى فِيهَا.",
       "Mısır'a taşındılar, çünkü Yakup oğlu Yûsuf (aleyhimesselâm) Mısır'ın efendisiydi; orada emreder ve yasaklardı."
      ],
      [
       "وَكَانُوا فِي كَنْعَانَ يَرْعَوْنَ الْغَنَمَ وَيَحْلُبُونَ الشَّاةَ وَيَبِيعُونَ الصُّوفَ.",
       "Ken'an'da koyun güder, koyun sağar ve yün satarlardı."
      ],
      [
       "وَعَبِيدُ يُوسُفَ وَخَدَمُهُ يَأْكُلُونَ وَيَنْعَمُونَ فِي مِصْرَ!",
       "Yûsuf'un köleleri ve hizmetçileri ise Mısır'da yiyip bolluk içinde yaşıyordu!"
      ],
      [
       "فَمَا يَصْنَعُونَ فِي كَنْعَانَ؟ وَلِمَاذَا لَا يَذْهَبُونَ إِلَى مِصْرَ؟",
       "Öyleyse Ken'an'da ne yapacaklardı? Neden Mısır'a gitmesinler?"
      ],
      [
       "أَرْسَلَ يُوسُفُ إِلَى يَعْقُوبَ وَأَهْلِهِ وَطَلَبَهُمْ مِنْ كَنْعَانَ.",
       "Yûsuf, Yakup'a ve ailesine haber gönderip onları Ken'an'dan çağırdı."
      ],
      [
       "وَكَانَ يُوسُفُ لَا يَطِيبُ لَهُ طَعَامٌ وَلَا شَرَابٌ حَتَّى يَرَى أَبَاهُ وَإِخْوَتَهُ.",
       "Yûsuf babasını ve kardeşlerini görene kadar yemekten de içmekten de tat alamıyordu."
      ],
      [
       "وَكَيْفَ يَطِيبُ لَهُ طَعَامٌ وَشَرَابٌ، وَكَيْفَ يَطِيبُ لَهُ عَيْشٌ وَهُوَ وَحِيدٌ فِي مِصْرَ؟",
       "Mısır'da yapayalnızken yemek ve içmekten nasıl tat alsın, hayattan nasıl zevk alsın?"
      ],
      [
       "وَمَاذَا يَصْنَعُ بِالْقُصُورِ وَأَبُوهُ وَإِخْوَتُهُ فِي بَيْتٍ صَغِيرٍ فِي كَنْعَانَ؟!",
       "Babası ve kardeşleri Ken'an'da küçük bir evdeyken saraylar ne işine yarardı?!"
      ],
      [
       "وَجَاءَ يَعْقُوبُ وَأَوْلَادُهُ إِلَى مِصْرَ فَاسْتَقْبَلَهُمْ يُوسُفُ وَفَرِحَ بِهِمْ فَرَحًا عَظِيمًا.",
       "Yakup ve çocukları Mısır'a geldi; Yûsuf onları karşıladı ve onlara çok sevindi."
      ],
      [
       "وَاسْتَقْبَلَتْ مِصْرُ أُسْرَةَ سَيِّدِهَا وَأُسْرَةَ مَلِكِهَا الْكَرِيمِ وَفَرِحَتْ بِهَا فَرَحًا عَظِيمًا.",
       "Mısır da efendisinin, cömert hükümdarının ailesini karşıladı ve ona çok sevindi."
      ],
      [
       "وَأَحَبَّ أَهْلُ مِصْرَ هٰذَا الْبَيْتَ الْكَرِيمَ، لِأَنَّهُمْ يُحِبُّونَ يُوسُفَ لِكَرَمِهِ وَإِحْسَانِهِ إِلَى النَّاسِ.",
       "Mısır halkı bu soylu aileyi sevdi, çünkü cömertliği ve insanlara iyiliği yüzünden Yûsuf'u seviyorlardı."
      ],
      [
       "وَلِأَنَّهُمْ رَأَوْا فِي يُوسُفَ أَخًا نَاصِحًا شَفِيقًا، فَرَأَوْا فِي يَعْقُوبَ وَالِدًا مَاجِدًا كَرِيمًا.",
       "Yûsuf'ta öğüt veren, şefkatli bir kardeş gördükleri için Yakup'ta da şerefli, cömert bir baba gördüler."
      ],
      [
       "وَكَانَ يَعْقُوبُ كَبِيرَ الْبِلَادِ، وَشَيْخَ مِصْرَ، وَكَانَ أَهْلُ مِصْرَ لَهُ كَالْأَبْنَاءِ.",
       "Yakup ülkenin büyüğü, Mısır'ın ihtiyarıydı; Mısır halkı onun için evlat gibiydi."
      ],
      [
       "وَطَابَتْ لِيَعْقُوبَ وَأَبْنَائِهِ الْإِقَامَةُ فِي مِصْرَ وَصَارَتْ لَهُمْ وَطَنًا.",
       "Mısır'da yaşamak Yakup'a ve oğullarına hoş geldi; Mısır onlar için bir vatan oldu."
      ]
     ]
    },
    {
     "n": 2,
     "title_ar": "بَعْدَ يُوسُفَ",
     "title_tr": "Yûsuf'tan sonra",
     "s": [
      [
       "وَبَعْدَ مُدَّةٍ مَاتَ يَعْقُوبُ فَحَزِنَ عَلَيْهِ يُوسُفُ وَحَزِنَ عَلَيْهِ أَهْلُ مِصْرَ.",
       "Bir süre sonra Yakup öldü; Yûsuf da Mısır halkı da ona üzüldü."
      ],
      [
       "وَدَفَنُوا الشَّيْخَ فِي مِصْرَ وَكَأَنَّهُمْ فَقَدُوا أَبَاهُمْ.",
       "İhtiyarı Mısır'a gömdüler; sanki kendi babalarını kaybetmişlerdi."
      ],
      [
       "وَبَعْدَ مُدَّةٍ مَاتَ يُوسُفُ أَيْضًا فَكَانَ يَوْمًا عَلَى أَهْلِ مِصْرَ شَدِيدًا.",
       "Bir süre sonra Yûsuf da öldü; bu, Mısır halkı için çok ağır bir gündü."
      ],
      [
       "وَحَزِنَ عَلَيْهِ أَهْلُ مِصْرَ حُزْنًا شَدِيدًا وَبَكَوْا عَلَيْهِ بُكَاءً طَوِيلًا.",
       "Mısır halkı ona çok üzüldü ve uzun uzun ağladı."
      ],
      [
       "وَنَسِيَ النَّاسُ أَحْزَانَهُمْ وَكَأَنَّهُمْ لَمْ تُصِبْهُمْ مُصِيبَةٌ قَبْلَ هٰذَا الْيَوْمِ.",
       "İnsanlar (önceki) acılarını unuttu; sanki bu günden önce başlarına hiç musibet gelmemişti."
      ],
      [
       "وَدَفَنُوا يُوسُفَ أَيْضًا وَعَزَّى بَعْضُهُمْ بَعْضًا، فَكَانُوا فِي يُوسُفَ سَوَاءً.",
       "Yûsuf'u da gömdüler ve birbirlerine taziyede bulundular; Yûsuf'un yasında hepsi birdi."
      ],
      [
       "كُلُّ صَغِيرٍ فَقَدَ أَبَاهُ وَكُلُّ كَبِيرٍ فَقَدَ أَخَاهُ.",
       "Her küçük babasını, her büyük kardeşini kaybetmişti."
      ],
      [
       "وَمَشَى النَّاسُ إِلَى إِخْوَةِ يُوسُفَ وَأَبْنَائِهِمْ يُعَزُّونَهُمْ.",
       "İnsanlar taziye için Yûsuf'un kardeşlerine ve onların oğullarına gittiler."
      ],
      [
       "وَيَقُولُونَ لَهُمْ: أَيُّهَا السَّادَةُ! لَيْسَتْ خَسَارَتُكُمُ الْيَوْمَ أَكْبَرَ مِنْ خَسَارَتِنَا نَحْنُ.",
       "Ve onlara diyorlardı: Efendiler! Bugün sizin kaybınız bizim kaybımızdan büyük değil."
      ],
      [
       "فَقَدْ فَقَدْنَا فِي دَفِينِ الْيَوْمِ أَخًا شَفِيقًا، وَسَيِّدًا رَحِيمًا وَمَلِكًا عَادِلًا.",
       "Bugün gömdüğümüz kişide şefkatli bir kardeşi, merhametli bir efendiyi ve adil bir hükümdarı kaybettik."
      ],
      [
       "هُوَ الَّذِي أَرَاحَ الْعِبَادَ، وَأَزَالَ الظُّلْمَ مِنَ الْبِلَادِ.",
       "Kulları rahata kavuşturan, ülkeden zulmü kaldıran oydu."
      ],
      [
       "هُوَ الَّذِي مَنَعَ الْكَبِيرَ يَظْلِمُ الصَّغِيرَ، وَمَنَعَ الْقَوِيَّ يَأْكُلُ الضَّعِيفَ.",
       "Büyüğün küçüğe zulmetmesini, güçlünün zayıfı ezmesini engelleyen oydu."
      ],
      [
       "هُوَ الَّذِي أَغَاثَ الْمَظْلُومَ وَأَجَارَ الْخَائِفَ وَأَطْعَمَ الْجَائِعَ.",
       "Mazluma yardım eden, korkanı koruyan, açı doyuran oydu."
      ],
      [
       "هُوَ الَّذِي هَدَانَا إِلَى الْحَقِّ وَدَعَانَا إِلَى اللهِ وَكُنَّا قَبْلَ قُدُومِهِ بَهَائِمَ لَا نَعْرِفُ اللهَ وَلَا نَعْرِفُ الْآخِرَةَ.",
       "Bizi hakka ileten, Allah'a çağıran oydu; o gelmeden önce Allah'ı da ahireti de bilmeyen hayvanlar gibiydik."
      ],
      [
       "هُوَ الَّذِي أَغَاثَنَا أَيَّامَ الْمَجَاعَةِ فَكُنَّا نَأْكُلُ وَنَشْبَعُ، وَالنَّاسُ يَمُوتُونَ فِي الْبِلَادِ الْأُخْرَى.",
       "Kıtlık günlerinde bize yardım eden oydu; başka ülkelerde insanlar ölürken biz yiyip doyuyorduk."
      ],
      [
       "إِنَّا لَا نَنْسَى مَلِكَنَا الْكَرِيمَ أَبَدًا وَلَا نَنْسَى أَيُّهَا السَّادَةُ أَنَّكُمْ إِخْوَتُهُ وَأَهْلُ بَيْتِهِ.",
       "Cömert hükümdarımızı asla unutmayız; efendiler, sizin onun kardeşleri ve ev halkı olduğunuzu da unutmayız."
      ],
      [
       "وَكَمْ فَرِحَ بِكُمْ سَيِّدُنَا يَوْمَ قُدُومِكُمْ إِلَى مِصْرَ وَكَمْ فَرِحْنَا بِفَرَحِ سَيِّدِنَا.",
       "Mısır'a geldiğiniz gün efendimiz size ne kadar sevinmişti, biz de efendimizin sevincine ne kadar sevinmiştik!"
      ],
      [
       "فَالْبِلَادُ بِلَادُكُمْ، وَإِنَّا لَكُمْ أَيُّهَا السَّادَةُ كَمَا كُنَّا فِي حَيَاةِ سَيِّدِنَا.",
       "Bu ülke sizin ülkenizdir; efendiler, biz size karşı efendimizin hayattayken olduğu gibiyiz."
      ]
     ]
    },
    {
     "n": 3,
     "title_ar": "بَنُو إِسْرَائِيلَ فِي مِصْرَ",
     "title_tr": "İsrailoğulları Mısır'da",
     "s": [
      [
       "وَهٰكَذَا كَانَ مُدَّةً طَوِيلَةً!",
       "Uzun bir süre böyle devam etti!"
      ],
      [
       "فَقَدْ حَفِظَ أَهْلُ مِصْرَ مَا قَالُوا وَعَرَفُوا لِلْكَنْعَانِيِّينَ الْفَضْلَ.",
       "Mısır halkı sözünü tuttu ve Ken'anlıların üstünlüğünü tanıdı."
      ],
      [
       "وَكَانَ هٰؤُلَاءِ الْكَنْعَانِيُّونَ الَّذِينَ كَانُوا يُدْعَوْنَ «بَنِي إِسْرَائِيلَ» أَصْحَابَ شَرَفٍ وَأَمْوَالٍ.",
       "«İsrailoğulları» diye anılan bu Ken'anlılar şeref ve mal sahibiydiler."
      ],
      [
       "وَلٰكِنْ تَغَيَّرَتِ الْأَحْوَالُ بَعْدَ ذٰلِكَ، فَقَدْ فَسَدَتْ أَخْلَاقُهُمْ، وَتَرَكُوا الدَّعْوَةَ إِلَى اللهِ وَدُعَاءَ الْخَلْقِ إِلَى اللهِ، وَسَقَطُوا عَلَى الدُّنْيَا.",
       "Ama sonra durum değişti: ahlakları bozuldu, Allah'a davet etmeyi ve insanları Allah'a çağırmayı bıraktılar, dünyaya düştüler."
      ],
      [
       "وَتَغَيَّرَ لَهُمُ النَّاسُ أَيْضًا وَصَارُوا يَنْظُرُونَ إِلَيْهِمْ بِغَيْرِ مَا كَانُوا يَنْظُرُونَ إِلَى آبَائِهِمْ.",
       "İnsanlar da onlara karşı değişti; onlara babalarına baktıklarından farklı bir gözle bakmaya başladılar."
      ],
      [
       "وَصَارُوا كَسَائِرِ النَّاسِ، لَا يَمْتَازُونَ عَنِ النَّاسِ إِلَّا بِالنَّسَبِ.",
       "Diğer insanlar gibi oldular; insanlardan yalnızca soylarıyla ayrılıyorlardı."
      ],
      [
       "وَصَارَ النَّاسُ يَحْسُدُونَ الْغَنِيَّ مِنْهُمْ وَيَحْتَقِرُونَ الْفَقِيرَ مِنْهُمْ.",
       "İnsanlar aralarındaki zengini kıskanmaya, yoksulu hor görmeye başladı."
      ],
      [
       "وَصَارَ أَهْلُ مِصْرَ يَنْظُرُونَ إِلَيْهِمْ كَغَرِيبٍ جَاءَ مِنْ بَلَدٍ آخَرَ وَلَيْسَ لَهُ حَقٌّ فِي مِصْرَ.",
       "Mısır halkı onlara başka bir ülkeden gelmiş, Mısır'da hakkı olmayan bir yabancı gibi bakmaya başladı."
      ],
      [
       "وَكَانَ أَهْلُ مِصْرَ يَعْتَقِدُونَ أَنَّهُمْ هُمْ أَهْلُ الْبِلَادِ وَأَنَّ مِصْرَ لِلْمِصْرِيِّينَ.",
       "Mısırlılar ülkenin asıl sahiplerinin kendileri olduğuna ve Mısır'ın Mısırlılara ait olduğuna inanıyordu."
      ],
      [
       "وَيَرَى بَعْضُ أَهْلِ مِصْرَ أَنَّ يُوسُفَ كَانَ غَرِيبًا جَاءَ مِنْ كَنْعَانَ.",
       "Bazı Mısırlılar, Yûsuf'un Ken'an'dan gelmiş bir yabancı olduğunu düşünüyordu."
      ],
      [
       "وَاشْتَرَاهُ عَزِيزُ مِصْرَ.",
       "Onu Mısır'ın azizi satın almıştı."
      ],
      [
       "وَلَيْسَ لِلْكَنْعَانِيِّ أَنْ يَحْكُمَ مِصْرَ.",
       "Bir Ken'anlının Mısır'ı yönetmeye hakkı yoktu (diyorlardı)."
      ],
      [
       "وَنَسِيَ كَثِيرٌ مِنَ النَّاسِ فَضْلَ يُوسُفَ وَكَرَمَهُ وَإِحْسَانَهُ.",
       "İnsanların çoğu Yûsuf'un üstünlüğünü, cömertliğini ve iyiliğini unuttu."
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "👑",
   "title_ar": "فِرْعَوْنُ الْجَبَّارُ",
   "title_tr": "Zorba Firavun",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «فِرْعَوْنُ مِصْرَ», «ذَبْحُ الْأَطْفَالِ». Sence yeni Firavun İsrailoğullarını nasıl görüyordu?",
     "options": [
      [
       "عَبِيدًا خُلِقُوا لِيَخْدُمُوا",
       "Hizmet etmek için yaratılmış köleler olarak"
      ],
      [
       "أَوْلَادَ الْأَنْبِيَاءِ الْكِرَامِ",
       "Peygamberlerin soylu çocukları olarak"
      ],
      [
       "أَصْدِقَاءَ لِلْقِبْطِ",
       "Kıptîlerin dostları olarak"
      ]
     ]
    },
    "vocab": [
     [
      "عَرْشٌ",
      "taht",
      "🪑"
     ],
     [
      "جَبَّارٌ",
      "zorba",
      "👊"
     ],
     [
      "الْقِبْطُ",
      "Kıptîler (Mısırlılar)",
      "🏺"
     ],
     [
      "كَاهِنٌ",
      "kâhin",
      "🔮"
     ],
     [
      "الشُّرْطَةُ",
      "askerler, muhafızlar",
      "💂"
     ],
     [
      "يَذْبَحُ",
      "boğazlar",
      "🗡️"
     ]
    ]
   },
   "stop": {
    "section": 5,
    "after": 0,
    "prompt_tr": "Kâhin dedi: «İsrailoğullarında bir çocuk doğacak; mülkün onun eliyle yok olacak.» Sence Firavun ne yaptı?",
    "options": [
     [
      "أَمَرَ بِذَبْحِ كُلِّ مَوْلُودٍ",
      "Doğan her çocuğun boğazlanmasını emretti"
     ],
     [
      "آمَنَ بِاللهِ",
      "Allah'a iman etti"
     ],
     [
      "تَرَكَ الْمُلْكَ",
      "Tahtı bıraktı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "جَاءَ عَلَى عَرْشِ مِصْرَ مَلِكٌ جَبَّارٌ.",
     "كَانَ يَرَى الْقِبْطَ مُلُوكًا وَبَنِي إِسْرَائِيلَ عَبِيدًا.",
     "قَالَ: أَنَا رَبُّكُمُ الْأَعْلَى.",
     "امْتَنَعَ بَنُو إِسْرَائِيلَ عَنْ عِبَادَتِهِ.",
     "قَالَ كَاهِنٌ: يُولَدُ مَوْلُودٌ يَذْهَبُ مُلْكُكَ عَلَى يَدِهِ.",
     "أَمَرَ فِرْعَوْنُ بِذَبْحِ الْأَطْفَالِ."
    ],
    "questions": [
     {
      "q": "كَيْفَ كَانَ فِرْعَوْنُ يَرَى الْقِبْطَ وَبَنِي إِسْرَائِيلَ؟",
      "qt": "Firavun Kıptîleri ve İsrailoğullarını nasıl görüyordu?",
      "o": [
       "الْقِبْطُ لِيَحْكُمُوا وَبَنُو إِسْرَائِيلَ لِيَخْدُمُوا",
       "كُلُّهُمْ سَوَاءٌ",
       "بَنُو إِسْرَائِيلَ لِيَحْكُمُوا"
      ],
      "ot": [
       "Kıptîler hükmetsin, İsrailoğulları hizmet etsin diye",
       "Hepsi eşit",
       "İsrailoğulları hükmetsin diye"
      ],
      "a": 0,
      "ev": [
       "4.6",
       "4.7"
      ]
     },
     {
      "q": "مَاذَا كَانَ فِرْعَوْنُ يَقُولُ؟",
      "qt": "Firavun ne diyordu?",
      "o": [
       "أَنَا رَبُّكُمُ الْأَعْلَى",
       "أَنَا عَبْدُ اللهِ",
       "أَنَا مِنْ كَنْعَانَ"
      ],
      "ot": [
       "Ben sizin en yüce rabbinizim",
       "Ben Allah'ın kuluyum",
       "Ben Ken'an'lıyım"
      ],
      "a": 0,
      "ev": [
       "4.10"
      ]
     },
     {
      "q": "لِمَاذَا اشْتَدَّ غَضَبُ فِرْعَوْنَ عَلَى بَنِي إِسْرَائِيلَ؟",
      "qt": "Firavun'un İsrailoğullarına öfkesi neden şiddetlendi?",
      "o": [
       "لِأَنَّهُمُ امْتَنَعُوا عَنْ عِبَادَتِهِ",
       "لِأَنَّهُمْ سَرَقُوا مَالَهُ",
       "لِأَنَّهُمْ تَرَكُوا مِصْرَ"
      ],
      "ot": [
       "Çünkü ona tapmayı reddettiler",
       "Çünkü malını çaldılar",
       "Çünkü Mısır'ı terk ettiler"
      ],
      "a": 0,
      "ev": [
       "4.15"
      ]
     },
     {
      "q": "مَاذَا قَالَ الْكَاهِنُ لِفِرْعَوْنَ؟",
      "qt": "Kâhin Firavun'a ne dedi?",
      "o": [
       "يُولَدُ مَوْلُودٌ يَذْهَبُ مُلْكُكَ عَلَى يَدِهِ",
       "سَتَعِيشُ أَلْفَ سَنَةٍ",
       "سَيَأْتِي مَطَرٌ كَثِيرٌ"
      ],
      "ot": [
       "Bir çocuk doğacak, mülkün onun eliyle yok olacak",
       "Bin yıl yaşayacaksın",
       "Çok yağmur gelecek"
      ],
      "a": 0,
      "ev": [
       "5.0"
      ]
     },
     {
      "q": "مَاذَا أَمَرَ فِرْعَوْنُ الشُّرْطَةَ؟",
      "qt": "Firavun askerlere ne emretti?",
      "o": [
       "أَنْ يَذْبَحُوا كُلَّ مَوْلُودٍ فِي بَنِي إِسْرَائِيلَ",
       "أَنْ يَحْرُسُوا الْأَطْفَالَ",
       "أَنْ يَذْبَحُوا الْغَنَمَ لِلْعِيدِ"
      ],
      "ot": [
       "İsrailoğullarında doğan her çocuğu boğazlamalarını",
       "Çocukları korumalarını",
       "Bayram için koyun kesmelerini"
      ],
      "a": 0,
      "ev": [
       "5.1"
      ]
     }
    ],
    "focus": {
     "title": "Amaç: لِـ + muzari («-mek için»)",
     "explain": "Muzari fiilin başına gelen <b>لِـ</b> amaç bildirir ve fiili mansub yapar (ـونَ → ـوا): <span class='ar-inline'>خُلِقُوا لِيَحْكُمُوا</span> (hükmetmek için yaratıldılar), <span class='ar-inline'>خُلِقُوا لِيَخْدُمُوا</span> (hizmet etmek için yaratıldılar). Sâlih kıssasında da vardı: <span class='ar-inline'>لِيُخْرِجَهُمْ مِنَ الظُّلُمَاتِ</span>.",
     "examples": [
      "الْقِبْطُ مِنْ نَوْعِ الْمُلُوكِ خُلِقُوا لِيَحْكُمُوا",
      "وَبَنُو إِسْرَائِيلَ مِنْ نَوْعِ الْعَبِيدِ خُلِقُوا لِيَخْدُمُوا"
     ],
     "items": [
      {
       "q": "الْقِبْطُ خُلِقُوا ____.",
       "o": [
        "لِيَحْكُمُوا",
        "يَحْكُمُونَ",
        "حَكَمُوا"
       ],
       "a": 0
      },
      {
       "q": "وَبَنُو إِسْرَائِيلَ خُلِقُوا لِـ____.",
       "o": [
        "يَخْدُمُوا",
        "يَخْدُمُونَ",
        "خَدَمُوا"
       ],
       "a": 0
      },
      {
       "q": "«لِيَحْكُمُوا» = …",
       "o": [
        "hükmetmeleri için",
        "hükmettiler",
        "hükmetmeyin"
       ],
       "a": 0
      },
      {
       "q": "ذَهَبَ الْكَاهِنُ إِلَى فِرْعَوْنَ ____ لَهُ خَبَرًا.",
       "o": [
        "لِيَقُولَ",
        "يَقُولُونَ",
        "قُلْ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "جَاءَ عَلَى عَرْشِ مِصْرَ مَلِكٌ {جَبَّارٌ}. وَكَانَ يَقُولُ: أَنَا {رَبُّكُمُ} الْأَعْلَى. وَقَالَ لَهُ {كَاهِنٌ}: يُولَدُ مَوْلُودٌ يَذْهَبُ {مُلْكُكَ} عَلَى يَدِهِ. فَأَمَرَ الشُّرْطَةَ أَنْ {يَذْبَحُوا} كُلَّ مَوْلُودٍ."
    },
    "think": {
     "q": "لِمَاذَا كَانَ فِرْعَوْنُ يَرَى أَنَّ النَّاسَ نَوْعَانِ؟",
     "qt": "Firavun neden insanları iki tür olarak görüyordu?",
     "model": "Firavun gücünü korumak için insanları «hükmetmek için yaratılanlar» ve «hizmet etmek için yaratılanlar» diye ayırdı. Böylece zulmünü doğal bir düzen gibi gösterebiliyordu. Oysa bütün insanlar Âdem'in çocuklarıdır; bu ayrım kibirden ve korkudan doğuyor. Kendini «en yüce rab» sanan biri başkasını insan yerine koymayabilir."
    },
    "retell": [
     "عَرْشُ مِصْرَ",
     "جَبَّارٌ",
     "الْقِبْطُ",
     "رَبُّكُمُ الْأَعْلَى",
     "كَاهِنٌ",
     "ذَبْحُ الْأَطْفَالِ"
    ],
    "quran": [
     {
      "ar": "إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ وَجَعَلَ أَهْلَهَا شِيَعًا يَسْتَضْعِفُ طَائِفَةً مِنْهُمْ يُذَبِّحُ أَبْنَاءَهُمْ وَيَسْتَحْيِي نِسَاءَهُمْ ۚ إِنَّهُ كَانَ مِنَ الْمُفْسِدِينَ",
      "ref": "Kasas 28:4",
      "tr": "Firavun yeryüzünde büyüklük tasladı ve halkını fırkalara ayırdı; onlardan bir topluluğu güçsüz düşürüyor, oğullarını boğazlıyor, kadınlarını sağ bırakıyordu. O, bozgunculardandı.",
      "inText": "«إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ …»"
     },
     {
      "ar": "فَقَالَ أَنَا رَبُّكُمُ الْأَعْلَى",
      "ref": "Nâziât 79:24",
      "tr": "Dedi ki: Ben sizin en yüce rabbinizim.",
      "inText": "«أَنَا رَبُّكُمُ الْأَعْلَى»"
     },
     {
      "ar": "وَنَادَى فِرْعَوْنُ فِي قَوْمِهِ قَالَ يَا قَوْمِ أَلَيْسَ لِي مُلْكُ مِصْرَ وَهٰذِهِ الْأَنْهَارُ تَجْرِي مِنْ تَحْتِي ۖ أَفَلَا تُبْصِرُونَ",
      "ref": "Zuhruf 43:51",
      "tr": "Firavun kavmine seslendi: Ey kavmim! Mısır'ın mülkü benim değil mi? Şu ırmaklar da altımdan akıyor. Görmüyor musunuz?",
      "inText": "«أَلَيْسَ لِي مُلْكُ مِصْرَ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 4,
     "title_ar": "فِرْعَوْنُ مِصْرَ",
     "title_tr": "Mısır'ın Firavunu",
     "s": [
      [
       "وَجَاءَ عَلَى عَرْشِ مِصْرَ فَرَاعِنَةٌ «مُلُوكُ مِصْرَ» يُبْغِضُونَ بَنِي إِسْرَائِيلَ بُغْضًا شَدِيدًا.",
       "Mısır tahtına İsrailoğullarından şiddetle nefret eden firavunlar (Mısır kralları) geldi."
      ],
      [
       "وَجَاءَ عَلَى عَرْشِ مِصْرَ مَلِكٌ جَبَّارٌ جِدًّا.",
       "Mısır tahtına çok zorba bir kral geldi."
      ],
      [
       "فَكَانَ لَا يَرَى أَنَّ بَنِي إِسْرَائِيلَ مِنْ أَوْلَادِ الْأَنْبِيَاءِ وَأَنَّهُمْ مِنْ بَيْتِ يُوسُفَ مَلِكِ مِصْرَ الْكَرِيمِ.",
       "İsrailoğullarının peygamber çocukları olduğunu, Mısır'ın cömert hükümdarı Yûsuf'un ailesinden geldiklerini kabul etmiyordu."
      ],
      [
       "بَلْ كَانَ لَا يَرَى أَنَّهُمْ بَشَرٌ يَسْتَحِقُّونَ الرَّحْمَةَ وَالْإِنْصَافَ.",
       "Hatta onları merhamet ve adaleti hak eden insanlar olarak bile görmüyordu."
      ],
      [
       "وَجَاءَ عَلَى عَرْشِ مِصْرَ مَلِكٌ جَبَّارٌ جِدًّا.",
       "Evet, Mısır tahtına çok zorba bir kral gelmişti."
      ],
      [
       "وَكَانَ يَرَى أَنَّ قَوْمَهُ «الْقِبْطَ» مِنْ نَوْعٍ وَأَنَّ بَنِي إِسْرَائِيلَ مِنْ نَوْعٍ آخَرَ.",
       "Kendi kavmi Kıptîlerin bir türden, İsrailoğullarının ise başka bir türden olduğunu düşünüyordu."
      ],
      [
       "الْقِبْطُ مِنْ نَوْعِ الْمُلُوكِ خُلِقُوا لِيَحْكُمُوا.",
       "Kıptîler hükmetmek için yaratılmış krallar türündendi."
      ],
      [
       "وَبَنُو إِسْرَائِيلَ مِنْ نَوْعِ الْعَبِيدِ خُلِقُوا لِيَخْدُمُوا.",
       "İsrailoğulları ise hizmet etmek için yaratılmış köleler türündendi."
      ],
      [
       "وَكَانَ فِرْعَوْنُ يُعَامِلُ بَنِي إِسْرَائِيلَ مُعَامَلَةَ الْحَمِيرِ وَالدَّوَابِّ يَسْتَخْدِمُهَا الْإِنْسَانُ وَلَا يُعْطِيهَا إِلَّا قُوتَ يَوْمِهَا.",
       "Firavun İsrailoğullarına, insanın çalıştırıp ancak günlük yiyeceğini verdiği eşekler ve yük hayvanları gibi davranıyordu."
      ],
      [
       "وَكَانَ فِرْعَوْنُ مَلِكًا جَبَّارًا مُتَكَبِّرًا لَا يَرَى فَوْقَهُ أَحَدًا.",
       "Firavun, üstünde kimseyi görmeyen zorba ve kibirli bir kraldı."
      ],
      [
       "وَكَانَ لَا يُؤْمِنُ بِاللهِ بَلْ كَانَ يَقُولُ: «أَنَا رَبُّكُمُ الْأَعْلَى».",
       "Allah'a inanmıyor, aksine «Ben sizin en yüce rabbinizim» diyordu."
      ],
      [
       "وَكَانَ مَغْرُورًا بِمُلْكِهِ وَقُصُورِهِ وَقُوَّتِهِ وَيَقُولُ: «أَلَيْسَ لِي مُلْكُ مِصْرَ وَهٰذِهِ الْأَنْهَارُ تَجْرِي مِنْ تَحْتِي أَفَلَا تُبْصِرُونَ».",
       "Mülküyle, saraylarıyla ve gücüyle böbürlenir ve derdi ki: «Mısır'ın mülkü benim değil mi? Şu ırmaklar da altımdan akıyor. Görmüyor musunuz?»"
      ],
      [
       "وَكَأَنَّهُ كَانَ خَلِيفَةً لِنُمْرُودَ مَلِكِ بَابِلَ.",
       "Sanki Babil kralı Nemrut'un halefiydi."
      ],
      [
       "وَكَانَ يَغْضَبُ إِذَا عَلِمَ أَحَدًا يَرَى فَوْقَهُ أَحَدًا.",
       "Birinin kendisinden üstün birini tanıdığını öğrenince öfkelenirdi."
      ],
      [
       "وَدَعَا النَّاسَ إِلَى عِبَادَتِهِ وَالسُّجُودِ لَهُ، وَأَطَاعَهُ النَّاسُ.",
       "İnsanları kendisine ibadete ve secdeye çağırdı; insanlar da ona itaat etti."
      ],
      [
       "وَامْتَنَعَ بَنُو إِسْرَائِيلَ لِأَنَّهُمْ يُؤْمِنُونَ بِاللهِ وَيُؤْمِنُونَ بِرُسُلِهِ وَاشْتَدَّ غَضَبُ فِرْعَوْنَ عَلَى بَنِي إِسْرَائِيلَ.",
       "İsrailoğulları ise reddetti, çünkü Allah'a ve O'nun elçilerine inanıyorlardı; Firavun'un İsrailoğullarına öfkesi şiddetlendi."
      ]
     ]
    },
    {
     "n": 5,
     "title_ar": "ذَبْحُ الْأَطْفَالِ",
     "title_tr": "Çocukların boğazlanması",
     "s": [
      [
       "وَذَهَبَ كَاهِنٌ قِبْطِيٌّ إِلَى فِرْعَوْنَ وَقَالَ لَهُ: «يُولَدُ مَوْلُودٌ فِي بَنِي إِسْرَائِيلَ يَذْهَبُ مُلْكُكَ عَلَى يَدِهِ».",
       "Kıptî bir kâhin Firavun'a gidip dedi ki: «İsrailoğullarında bir çocuk doğacak; mülkün onun eliyle yok olacak.»"
      ],
      [
       "وَجُنَّ جُنُونُ فِرْعَوْنَ، وَأَمَرَ الشُّرْطَةَ أَنْ يَذْبَحُوا كُلَّ مَوْلُودٍ يُولَدُ فِي بَنِي إِسْرَائِيلَ.",
       "Firavun çılgına döndü ve askerlerine İsrailoğullarında doğan her çocuğu boğazlamalarını emretti."
      ],
      [
       "وَكَانَ فِرْعَوْنُ يَرَى أَنَّهُ رَبُّ النَّاسِ يَذْبَحُ مَنْ يَشَاءُ وَيَتْرُكُ مَنْ يَشَاءُ، كَصَاحِبِ الْغَنَمِ يَذْبَحُ مِنْ غَنَمِهِ مَا يَشَاءُ وَيَتْرُكُ مَا يَشَاءُ.",
       "Firavun kendini insanların rabbi sanıyordu: koyunlarından dilediğini kesip dilediğini bırakan bir sürü sahibi gibi, dilediğini öldürüp dilediğini bırakıyordu."
      ],
      [
       "وَانْتَشَرَتِ الشُّرْطَةُ فِي مِصْرَ يُفَتِّشُونَ وَيَبْحَثُونَ، فَإِذَا عَلِمُوا مَوْلُودًا وُلِدَ فِي بَنِي إِسْرَائِيلَ أَخَذُوهُ وَذَبَحُوهُ كَمَا تُذْبَحُ النَّعْجَةُ.",
       "Askerler Mısır'a yayılıp arıyor, araştırıyordu; İsrailoğullarında doğan bir çocuğu öğrendiklerinde onu alıp bir koyun boğazlanır gibi boğazlıyorlardı."
      ],
      [
       "وَعَاشَتِ الذِّئَابُ فِي الْغَابَةِ وَعَاشَتِ الْحَيَّاتُ وَالْعَقَارِبُ فِي الْبَلَدِ، وَلَمْ يَتَعَرَّضْ لَهَا أَحَدٌ.",
       "Kurtlar ormanda, yılanlar ve akrepler ülkede yaşıyordu; kimse onlara dokunmuyordu."
      ],
      [
       "وَلٰكِنْ مَا كَانَ لِمَوْلُودٍ فِي بَنِي إِسْرَائِيلَ أَنْ يَعِيشَ فِي مَمْلَكَةِ فِرْعَوْنَ.",
       "Ama İsrailoğullarından doğan bir çocuğun Firavun'un ülkesinde yaşamasına izin yoktu."
      ],
      [
       "وَذُبِحَ أُلُوفٌ مِنَ الْأَطْفَالِ أَمَامَ آبَائِهِمْ وَأُمَّهَاتِهِمْ.",
       "Binlerce çocuk babalarının ve annelerinin gözü önünde boğazlandı."
      ],
      [
       "وَكَانَ الْيَوْمُ الَّذِي يُولَدُ فِيهِ مَوْلُودٌ فِي بَنِي إِسْرَائِيلَ يَوْمًا عَسِيرًا، وَكَانَ يَوْمَ حُزْنٍ وَبُكَاءٍ.",
       "İsrailoğullarında bir çocuğun doğduğu gün çok zor bir gündü; hüzün ve gözyaşı günüydü."
      ],
      [
       "وَكَانَ الْيَوْمُ الَّذِي يُولَدُ فِيهِ مَوْلُودٌ فِي بَنِي إِسْرَائِيلَ يَوْمَ تَعْزِيَةٍ وَرِثَاءٍ.",
       "İsrailoğullarında bir çocuğun doğduğu gün taziye ve ağıt günüydü."
      ],
      [
       "وَكَانَ يُذْبَحُ مِئَاتٌ مِنَ الْأَطْفَالِ فِي يَوْمٍ وَاحِدٍ كَعِيدِ الْأَضْحَى، يُذْبَحُ فِيهِ مِئَاتٌ مِنَ الْغَنَمِ وَالنِّعَاجِ وَالْبَقَرِ.",
       "Tek bir günde yüzlerce çocuk boğazlanıyordu; tıpkı yüzlerce koyun ve sığırın kesildiği Kurban Bayramı gibi."
      ],
      [
       "«إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ وَجَعَلَ أَهْلَهَا شِيَعًا يَسْتَضْعِفُ طَائِفَةً مِنْهُمْ يُذَبِّحُ أَبْنَاءَهُمْ وَيَسْتَحْيِي نِسَاءَهُمْ إِنَّهُ كَانَ مِنَ الْمُفْسِدِينَ».",
       "«Firavun yeryüzünde büyüklük tasladı ve halkını fırkalara ayırdı; onlardan bir topluluğu güçsüz düşürüyor, oğullarını boğazlıyor, kadınlarını sağ bırakıyordu. O, bozgunculardandı.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "🧺",
   "title_ar": "مُوسَى فِي النِّيلِ",
   "title_tr": "Nil'deki Mûsâ",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «وِلَادَةُ مُوسَى», «فِي النِّيلِ». Askerler her yerde bebek arıyor. Sence Mûsâ'nın annesi bebeğini nasıl korudu?",
     "options": [
      [
       "وَضَعَتْهُ فِي صُنْدُوقٍ وَأَلْقَتْهُ فِي النِّيلِ",
       "Onu bir sandığa koyup Nil'e bıraktı"
      ],
      [
       "أَعْطَتْهُ لِلشُّرْطَةِ",
       "Onu askerlere verdi"
      ],
      [
       "هَرَبَتْ بِهِ إِلَى كَنْعَانَ",
       "Onunla Ken'an'a kaçtı"
      ]
     ]
    },
    "vocab": [
     [
      "قَدَّرَ",
      "takdir etti",
      "📜"
     ],
     [
      "خَلَاصٌ",
      "kurtuluş",
      "🕊️"
     ],
     [
      "عَلَى رَغْمِ",
      "-e rağmen",
      "💪"
     ],
     [
      "صُنْدُوقٌ",
      "sandık",
      "📦"
     ],
     [
      "أَلْهَمَ",
      "ilham etti, içine doğurdu",
      "💡"
     ],
     [
      "تَوَكَّلَ عَلَى",
      "-e güvendi, tevekkül etti",
      "🤲"
     ]
    ]
   },
   "stop": {
    "section": 7,
    "after": 2,
    "prompt_tr": "Zavallı anne ne yapsın, bebeği nereye saklasın? Askerlerin karga gözü, karınca burnu var. Sence Allah ona ne ilham etti?",
    "options": [
     [
      "أَنْ تَضَعَهُ فِي صُنْدُوقٍ وَتُلْقِيَهُ فِي النِّيلِ",
      "Onu sandığa koyup Nil'e bırakmasını"
     ],
     [
      "أَنْ تُخْفِيَهُ فِي الْبَيْتِ",
      "Onu evde saklamasını"
     ],
     [
      "أَنْ تَذْهَبَ إِلَى فِرْعَوْنَ",
      "Firavun'a gitmesini"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "وُلِدَ مُوسَى بْنُ عِمْرَانَ.",
     "عَاشَ ثَلَاثَةَ أَشْهُرٍ.",
     "خَافَتْ أُمُّهُ عَلَيْهِ.",
     "أَلْهَمَهَا اللهُ أَنْ تَضَعَهُ فِي صُنْدُوقٍ.",
     "تَوَكَّلَتْ عَلَى اللهِ.",
     "أَلْقَتْهُ فِي النِّيلِ."
    ],
    "questions": [
     {
      "q": "ابْنُ مَنْ مُوسَى؟",
      "qt": "Mûsâ kimin oğlu?",
      "o": [
       "ابْنُ عِمْرَانَ",
       "ابْنُ يُوسُفَ",
       "ابْنُ فِرْعَوْنَ"
      ],
      "ot": [
       "İmrân'ın oğlu",
       "Yûsuf'un oğlu",
       "Firavun'un oğlu"
      ],
      "a": 0,
      "ev": [
       "6.5"
      ]
     },
     {
      "q": "كَمْ شَهْرًا عَاشَ مُوسَى قَبْلَ النِّيلِ؟",
      "qt": "Mûsâ Nil'den önce kaç ay yaşadı?",
      "o": [
       "ثَلَاثَةَ أَشْهُرٍ",
       "سَنَةً",
       "أُسْبُوعًا"
      ],
      "ot": [
       "Üç ay",
       "Bir yıl",
       "Bir hafta"
      ],
      "a": 0,
      "ev": [
       "6.6"
      ]
     },
     {
      "q": "لِمَاذَا خَافَتْ أُمُّ مُوسَى؟",
      "qt": "Mûsâ'nın annesi neden korktu?",
      "o": [
       "لِأَنَّ الشُّرْطَةَ تَخْتَطِفُ الْأَطْفَالَ",
       "لِأَنَّ النِّيلَ كَانَ بَعِيدًا",
       "لِأَنَّ مُوسَى كَانَ مَرِيضًا"
      ],
      "ot": [
       "Çünkü askerler çocukları kaçırıyordu",
       "Çünkü Nil uzaktı",
       "Çünkü Mûsâ hastaydı"
      ],
      "a": 0,
      "ev": [
       "7.1"
      ]
     },
     {
      "q": "مَاذَا أَلْهَمَ اللهُ أُمَّ مُوسَى؟",
      "qt": "Allah Mûsâ'nın annesine ne ilham etti?",
      "o": [
       "أَنْ تَضَعَهُ فِي صُنْدُوقٍ وَتُلْقِيَهُ فِي النِّيلِ",
       "أَنْ تَبِيعَهُ",
       "أَنْ تَتْرُكَهُ فِي الصَّحْرَاءِ"
      ],
      "ot": [
       "Onu sandığa koyup Nil'e bırakmasını",
       "Onu satmasını",
       "Onu çölde bırakmasını"
      ],
      "a": 0,
      "ev": [
       "7.3"
      ]
     },
     {
      "q": "عَلَى مَاذَا اعْتَمَدَتِ الْأُمُّ؟",
      "qt": "Anne neye dayandı?",
      "o": [
       "عَلَى وَحْيِ اللهِ",
       "عَلَى قُوَّتِهَا",
       "عَلَى الشُّرْطَةِ"
      ],
      "ot": [
       "Allah'ın vahyine",
       "Kendi gücüne",
       "Askerlere"
      ],
      "a": 0,
      "ev": [
       "7.6"
      ]
     }
    ],
    "focus": {
     "title": "Retorik soru: كَيْفَ لَا …؟",
     "explain": "<b>كَيْفَ لَا …؟</b> gerçek bir soru değildir; «elbette …» anlamı verir: <span class='ar-inline'>وَكَيْفَ لَا تَخَافُ؟</span> (nasıl korkmasın! = elbette korkar). <span class='ar-inline'>كَيْفَ تَضَعُ الْأُمُّ طِفْلَهَا فِي صُنْدُوقٍ؟!</span> ise şaşkınlık bildirir. Sonraki ünitelerde de göreceksiniz: <span class='ar-inline'>فَكَيْفَ لَا تُحِبُّهُ سَيِّدَاتُ الْقَصْرِ</span>.",
     "examples": [
      "وَكَيْفَ لَا تَخَافُ وَعَدُوُّ الْأَطْفَالِ بِمِرْصَادٍ؟!",
      "كَيْفَ تَضَعُ الْأُمُّ الْحَنُونُ طِفْلَهَا فِي صُنْدُوقٍ؟!",
      "وَكَيْفَ يَتَنَفَّسُ الطِّفْلُ فِي الصُّنْدُوقِ؟!"
     ],
     "items": [
      {
       "q": "وَ____ لَا تَخَافُ وَعَدُوُّ الْأَطْفَالِ بِمِرْصَادٍ؟!",
       "o": [
        "كَيْفَ",
        "أَيْنَ",
        "مَتَى"
       ],
       "a": 0
      },
      {
       "q": "«كَيْفَ لَا تَخَافُ؟!» = …",
       "o": [
        "Elbette korkar!",
        "Neden korkuyor?",
        "Hiç korkmaz."
       ],
       "a": 0
      },
      {
       "q": "مَنْ ____ الطِّفْلَ فِي الصُّنْدُوقِ؟",
       "o": [
        "يُرْضِعُ",
        "رَضَعَ",
        "أَرْضِعِي"
       ],
       "a": 0
      },
      {
       "q": "وَكَيْفَ ____ الطِّفْلُ فِي الصُّنْدُوقِ؟!",
       "o": [
        "يَتَنَفَّسُ",
        "تَنَفَّسَ",
        "تَنَفَّسُوا"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "وُلِدَ مُوسَى بْنُ {عِمْرَانَ}. وَخَافَتْ {أُمُّهُ} عَلَيْهِ. فَأَلْهَمَهَا اللهُ أَنْ تَضَعَهُ فِي {صُنْدُوقٍ} وَتُلْقِيَهُ فِي {النِّيلِ}. وَتَوَكَّلَتْ عَلَى {اللهِ}."
    },
    "think": {
     "q": "كَيْفَ يَكُونُ الصُّنْدُوقُ فِي النِّيلِ أَحْفَظَ لِلطِّفْلِ مِنَ الْبَيْتِ؟",
     "qt": "Nil'deki bir sandık bebeği evden daha iyi nasıl koruyabilir?",
     "model": "Akla göre ev en güvenli yerdir, nehir ise tehlikelidir. Ama evde askerler onu mutlaka bulacaktı. Anne, Allah'ın vahyine güvendi ve en tehlikeli görünen yolu seçti. Kıssa, tevekkülün gözü kapalı bir bekleyiş değil, korkuya rağmen doğru olanı yapmak olduğunu gösteriyor."
    },
    "retell": [
     "وِلَادَةُ مُوسَى",
     "عَلَى رَغْمِ فِرْعَوْنَ",
     "خَافَتْ",
     "صُنْدُوقٌ",
     "النِّيلُ",
     "تَوَكَّلَتْ"
    ],
    "quran": [
     {
      "ar": "وَأَوْحَيْنَا إِلَى أُمِّ مُوسَى أَنْ أَرْضِعِيهِ ۖ فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ وَلَا تَخَافِي وَلَا تَحْزَنِي ۖ إِنَّا رَادُّوهُ إِلَيْكِ وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ",
      "ref": "Kasas 28:7",
      "tr": "Mûsâ'nın annesine: Onu emzir; onun için korkarsan onu nehre bırak; korkma ve üzülme, biz onu sana geri döndüreceğiz ve onu peygamberlerden kılacağız, diye vahyettik.",
      "inText": "«وَأَوْحَيْنَا إِلَى أُمِّ مُوسَى …»"
     },
     {
      "ar": "إِذْ أَوْحَيْنَا إِلَى أُمِّكَ مَا يُوحَى ۝ أَنِ اقْذِفِيهِ فِي التَّابُوتِ فَاقْذِفِيهِ فِي الْيَمِّ",
      "ref": "Tâhâ 20:38–39",
      "tr": "Hani annene vahyedilmesi gerekeni vahyetmiştik: Onu sandığa koy, sonra onu nehre bırak.",
      "inText": "أَلْهَمَهَا أَنْ تَضَعَهُ فِي صُنْدُوقٍ وَتُلْقِيَهُ فِي النِّيلِ"
     }
    ]
   },
   "sections": [
    {
     "n": 6,
     "title_ar": "وِلَادَةُ مُوسَى",
     "title_tr": "Mûsâ'nın doğumu",
     "s": [
      [
       "وَأَرَادَ اللهُ أَنْ يَقَعَ مَا كَانَ فِرْعَوْنُ يَخَافُهُ وَيَحْذَرُهُ.",
       "Allah, Firavun'un korktuğu ve sakındığı şeyin gerçekleşmesini istedi."
      ],
      [
       "وُلِدَ ذٰلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللهُ أَنْ يَذْهَبَ مُلْكُ فِرْعَوْنَ عَلَى يَدِهِ.",
       "Allah'ın, Firavun'un mülkünü onun eliyle yok etmeyi takdir ettiği o çocuk doğdu."
      ],
      [
       "وُلِدَ ذٰلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللهُ أَنْ يَكُونَ خَلَاصُ بَنِي إِسْرَائِيلَ عَلَى يَدِهِ.",
       "Allah'ın, İsrailoğullarının kurtuluşunu onun eliyle takdir ettiği o çocuk doğdu."
      ],
      [
       "وُلِدَ ذٰلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللهُ أَنْ يُخْرِجَ النَّاسَ مِنْ عِبَادَةِ النَّاسِ إِلَى عِبَادَةِ اللهِ.",
       "Allah'ın, insanları insanlara kulluktan Allah'a kulluğa çıkarmasını takdir ettiği o çocuk doğdu."
      ],
      [
       "وُلِدَ ذٰلِكَ الْمَوْلُودُ الَّذِي قَدَّرَ اللهُ أَنْ يُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ.",
       "Allah'ın, insanları karanlıklardan aydınlığa çıkarmasını takdir ettiği o çocuk doğdu."
      ],
      [
       "وُلِدَ مُوسَى بْنُ عِمْرَانَ عَلَى رَغْمِ فِرْعَوْنَ وَجُنُودِهِ.",
       "İmrân oğlu Mûsâ, Firavun'a ve askerlerine rağmen doğdu."
      ],
      [
       "وَعَاشَ مُوسَى ثَلَاثَةَ أَشْهُرٍ عَلَى رَغْمِ الشُّرْطَةِ وَرَقَابَتِهِمْ.",
       "Mûsâ, askerlere ve onların gözetimine rağmen üç ay yaşadı."
      ]
     ]
    },
    {
     "n": 7,
     "title_ar": "فِي النِّيلِ",
     "title_tr": "Nil'de",
     "s": [
      [
       "وَلٰكِنْ خَافَتْ أُمُّ مُوسَى عَلَى مَوْلُودِهَا الْجَمِيلِ، وَكَيْفَ لَا تَخَافُ وَعَدُوُّ الْأَطْفَالِ بِمِرْصَادٍ؟!",
       "Ama Mûsâ'nın annesi güzel bebeği için korktu; çocukların düşmanı pusuda beklerken nasıl korkmasın?!"
      ],
      [
       "وَكَيْفَ لَا تَخَافُ وَقَدِ اخْتَطَفَتِ الشُّرْطَةُ عَشَرَاتٍ مِنَ الْأَطْفَالِ مِنْ حِجْرِ الْأُمَّهَاتِ فِي أُسْرَتِهَا.",
       "Askerler onun ailesinde onlarca çocuğu annelerin kucağından kaparken nasıl korkmasın?"
      ],
      [
       "مَاذَا تَصْنَعُ الْأُمُّ الْمِسْكِينَةُ، وَأَيْنَ تُخْفِي هٰذَا الْمَوْلُودَ الْجَمِيلَ وَالشُّرْطَةُ لَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ.",
       "Zavallı anne ne yapsın, bu güzel bebeği nereye saklasın? Askerlerin karga gözü ve karınca burnu var."
      ],
      [
       "هُنَالِكَ أَغَاثَ اللهُ الْأُمَّ الْمِسْكِينَةَ وَأَلْهَمَهَا أَنْ تَضَعَهُ فِي صُنْدُوقٍ وَتُلْقِيَهُ فِي النِّيلِ.",
       "İşte o zaman Allah zavallı anneye yardım etti ve onu bir sandığa koyup Nil'e bırakmasını ilham etti."
      ],
      [
       "اللهُ أَكْبَرُ! كَيْفَ تَضَعُ الْأُمُّ الْحَنُونُ طِفْلَهَا فِي صُنْدُوقٍ وَتُلْقِيهِ فِي النِّيلِ؟!",
       "Allahu ekber! Şefkatli bir anne bebeğini nasıl bir sandığa koyup Nil'e bırakır?!"
      ],
      [
       "مَنْ يُرْضِعُ الطِّفْلَ فِي الصُّنْدُوقِ؟ وَكَيْفَ يَتَنَفَّسُ الطِّفْلُ فِي الصُّنْدُوقِ؟!",
       "Sandıktaki bebeği kim emzirecek? Bebek sandıkta nasıl nefes alacak?!"
      ],
      [
       "كُلَّ ذٰلِكَ فَكَّرَتِ الْأُمُّ الْحَنُونُ وَلٰكِنَّهَا تَوَكَّلَتْ عَلَى اللهِ وَاعْتَمَدَتْ عَلَى وَحْيِ اللهِ.",
       "Şefkatli anne bütün bunları düşündü; ama Allah'a tevekkül etti ve Allah'ın vahyine dayandı."
      ],
      [
       "وَلَيْسَ الْبَيْتُ أَحْفَظَ لِلطِّفْلِ مِنَ الصُّنْدُوقِ!",
       "Ev, bebeği sandıktan daha iyi korumazdı!"
      ],
      [
       "هُنَا الشُّرْطَةُ فِي كُلِّ مَكَانٍ، وَعَدُوُّ الْأَطْفَالِ بِمِرْصَادٍ.",
       "Burada askerler her yerde, çocukların düşmanı pusuda."
      ],
      [
       "وَالشُّرْطَةُ لَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ.",
       "Askerlerin karga gözü ve karınca burnu var."
      ],
      [
       "وَفَعَلَتِ الْأُمُّ الْمِسْكِينَةُ مَا أَمَرَهَا اللهُ وَوَضَعَتْ طِفْلَهَا الْجَمِيلَ فِي صُنْدُوقٍ وَأَلْقَتْهُ فِي النِّيلِ.",
       "Zavallı anne Allah'ın emrettiğini yaptı; güzel bebeğini bir sandığa koyup Nil'e bıraktı."
      ],
      [
       "وَجَزِعَتِ الْأُمُّ الْحَنُونُ ثُمَّ صَبَرَتْ وَتَوَكَّلَتْ عَلَى اللهِ.",
       "Şefkatli anne önce sarsıldı, sonra sabretti ve Allah'a tevekkül etti."
      ],
      [
       "«وَأَوْحَيْنَا إِلَى أُمِّ مُوسَى أَنْ أَرْضِعِيهِ فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ وَلَا تَخَافِي وَلَا تَحْزَنِي إِنَّا رَادُّوهُ إِلَيْكِ وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ».",
       "«Mûsâ'nın annesine: Onu emzir; onun için korkarsan onu nehre bırak; korkma ve üzülme, biz onu sana geri döndüreceğiz ve onu peygamberlerden kılacağız, diye vahyettik.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 4,
   "emoji": "📦",
   "title_ar": "فِي قَصْرِ فِرْعَوْنَ",
   "title_tr": "Firavun'un sarayında",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «فِي قَصْرِ فِرْعَوْنَ», «مَنْ يُرْضِعُ الطِّفْلَ؟». Sence sandık nereye ulaştı?",
     "options": [
      [
       "إِلَى قَصْرِ فِرْعَوْنَ",
       "Firavun'un sarayına"
      ],
      [
       "إِلَى الْبَحْرِ",
       "Denize"
      ],
      [
       "إِلَى قَرْيَةٍ بَعِيدَةٍ",
       "Uzak bir köye"
      ]
     ]
    },
    "vocab": [
     [
      "شَاطِئٌ",
      "kıyı",
      "🏖️"
     ],
     [
      "يَتَنَزَّهُ",
      "gezintiye çıkar",
      "🚶"
     ],
     [
      "أَمْوَاجٌ",
      "dalgalar",
      "🌊"
     ],
     [
      "الْمَلِكَةُ",
      "kraliçe",
      "👸"
     ],
     [
      "قُرَّةُ عَيْنٍ",
      "göz aydınlığı",
      "💖"
     ],
     [
      "مُرْضِعٌ ج مَرَاضِعُ",
      "sütanne",
      "🍼"
     ]
    ]
   },
   "stop": {
    "section": 8,
    "after": 14,
    "prompt_tr": "Hizmetçiler: «Bu çocuk İsrailoğullarından; kral onu mutlaka boğazlamalı» dedi. Sence bebeği kim kurtardı?",
    "options": [
     [
      "الْمَلِكَةُ شَفَعَتْ لَهُ",
      "Kraliçe onun için aracı oldu"
     ],
     [
      "الشُّرْطَةُ",
      "Askerler"
     ],
     [
      "الْكَاهِنُ",
      "Kâhin"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "كَانَ فِرْعَوْنُ وَالْمَلِكَةُ يَتَنَزَّهَانِ عَلَى النِّيلِ.",
     "رَأَيَا صُنْدُوقًا فِي الْمَاءِ.",
     "فُتِحَ الصُّنْدُوقُ فَإِذَا فِيهِ غُلَامٌ.",
     "شَفَعَتِ الْمَلِكَةُ لِلطِّفْلِ.",
     "أَبَى الطِّفْلُ كُلَّ الْمَرَاضِعِ.",
     "أَصْبَحَ الطِّفْلُ حَدِيثَ الْقَصْرِ."
    ],
    "questions": [
     {
      "q": "أَيْنَ رَأَى فِرْعَوْنُ وَالْمَلِكَةُ الصُّنْدُوقَ؟",
      "qt": "Firavun ve kraliçe sandığı nerede gördü?",
      "o": [
       "فِي النِّيلِ تَلْعَبُ بِهِ الْأَمْوَاجُ",
       "فِي حَدِيقَةِ الْقَصْرِ",
       "فِي السُّوقِ"
      ],
      "ot": [
       "Nil'de, dalgalar onu oynatırken",
       "Sarayın bahçesinde",
       "Çarşıda"
      ],
      "a": 0,
      "ev": [
       "8.4"
      ]
     },
     {
      "q": "مَاذَا وَجَدُوا فِي الصُّنْدُوقِ؟",
      "qt": "Sandıkta ne buldular?",
      "o": [
       "غُلَامًا جَمِيلًا يَبْتَسِمُ",
       "ذَهَبًا",
       "خَشَبَةً"
      ],
      "ot": [
       "Gülümseyen güzel bir oğlan",
       "Altın",
       "Bir tahta parçası"
      ],
      "a": 0,
      "ev": [
       "8.11"
      ]
     },
     {
      "q": "مَاذَا قَالَ بَعْضُ الْخَدَمِ؟",
      "qt": "Hizmetçilerden bazıları ne dedi?",
      "o": [
       "إِنَّهُ إِسْرَائِيلِيٌّ وَلَا بُدَّ أَنْ يَذْبَحَهُ الْمَلِكُ",
       "إِنَّهُ ابْنُ الْمَلِكِ",
       "إِنَّهُ مِنْ أَسْوَانَ"
      ],
      "ot": [
       "O İsrailoğullarından, kral onu mutlaka boğazlamalı",
       "O kralın oğlu",
       "O Asvan'lı"
      ],
      "a": 0,
      "ev": [
       "8.14"
      ]
     },
     {
      "q": "مَنْ شَفَعَ لِمُوسَى عِنْدَ الْمَلِكِ؟",
      "qt": "Kralın yanında Mûsâ için kim aracı oldu?",
      "o": [
       "الْمَلِكَةُ",
       "هَامَانُ",
       "الْكَاهِنُ"
      ],
      "ot": [
       "Kraliçe",
       "Hâmân",
       "Kâhin"
      ],
      "a": 0,
      "ev": [
       "8.16"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَرْتَضِعِ الطِّفْلُ مِنَ الْمَرَاضِعِ؟",
      "qt": "Bebek sütannelerden neden emmedi?",
      "o": [
       "لِأَنَّ اللهَ حَرَّمَ عَلَيْهِ الْمَرَاضِعَ",
       "لِأَنَّهُ كَانَ شَبْعَانَ",
       "لِأَنَّ الْمَرَاضِعَ كُنَّ مَرِيضَاتٍ"
      ],
      "ot": [
       "Çünkü Allah sütanneleri ona haram kılmıştı",
       "Çünkü toktu",
       "Çünkü sütanneler hastaydı"
      ],
      "a": 0,
      "ev": [
       "9.8"
      ]
     }
    ],
    "focus": {
     "title": "«Herkes»: كُلٌّ — «her …»: كُلُّ + isim",
     "explain": "<b>كُلُّ</b> belirsiz tekil isimle «her» demektir: <span class='ar-inline'>كُلُّ مَوْلُودٍ</span> (her bebek), <span class='ar-inline'>كُلُّ صَغِيرٍ</span> (her küçük). Arkasında isim olmadan tenvinli <b>كُلٌّ</b> «herkes» anlamına gelir: <span class='ar-inline'>كُلٌّ يَأْخُذُهُ وَيُقَبِّلُهُ</span> (herkes onu alıp öpüyor), <span class='ar-inline'>كُلٌّ يُحِبُّهُ</span> (herkes onu seviyor).",
     "examples": [
      "وَتَحَيَّرَ النَّاسُ، كُلٌّ يَأْخُذُهُ وَيَرَاهُ",
      "كُلٌّ يَأْخُذُهُ وَيُقَبِّلُهُ، وَكُلٌّ يُحِبُّهُ وَيَمْدَحُهُ",
      "أَنْ يَذْبَحُوا كُلَّ مَوْلُودٍ"
     ],
     "items": [
      {
       "q": "____ يَأْخُذُهُ وَيُقَبِّلُهُ.",
       "o": [
        "كُلٌّ",
        "كُلَّ",
        "كُلِّ"
       ],
       "a": 0
      },
      {
       "q": "أَمَرَ أَنْ يَذْبَحُوا كُلَّ ____.",
       "o": [
        "مَوْلُودٍ",
        "مَوْلُودٌ",
        "الْمَوْلُودِينَ"
       ],
       "a": 0
      },
      {
       "q": "«كُلٌّ يُحِبُّهُ» = …",
       "o": [
        "Herkes onu seviyor",
        "Hepsi onu sevmiyor",
        "Biri onu seviyor"
       ],
       "a": 0
      },
      {
       "q": "وَكُلٌّ ____ وَيُقَبِّلُهُ، لِأَنَّ الطِّفْلَ جَمِيلٌ.",
       "o": [
        "يَأْخُذُهُ",
        "يَأْخُذُونَهُ",
        "خُذْهُ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "رَأَى فِرْعَوْنُ وَالْمَلِكَةُ {صُنْدُوقًا} فِي النِّيلِ. وَفِيهِ {غُلَامٌ} جَمِيلٌ. وَدَخَلَ حُبُّهُ فِي قَلْبِ {الْمَلِكَةِ}. وَطَلَبَتْ لَهُ {مُرْضِعًا}، وَلٰكِنَّ الطِّفْلَ {أَبَى}."
    },
    "think": {
     "q": "«أَرَادَ اللهُ أَنْ يُرَبِّيَ فِرْعَوْنُ طِفْلًا يَذْهَبُ مُلْكُهُ عَلَى يَدِهِ». مَاذَا يُعَلِّمُنَا ذٰلِكَ؟",
     "qt": "«Allah, Firavun'un mülkünü yok edecek çocuğu Firavun'un büyütmesini istedi.» Bu bize ne öğretiyor?",
     "model": "Firavun binlerce çocuğu bu tek çocuk yüzünden öldürttü; ama o çocuk onun kendi sarayına, kendi eline geldi. İnsan ne kadar güçlü olursa olsun, tedbirleri Allah'ın takdirini değiştiremez. Kıssa bunu acı bir ironiyle anlatıyor: «Zavallı Firavun!»"
    },
    "retell": [
     "شَاطِئُ النِّيلِ",
     "صُنْدُوقٌ",
     "غُلَامٌ يَبْتَسِمُ",
     "الْمَلِكَةُ",
     "قُرَّةُ عَيْنٍ",
     "الْمَرَاضِعُ"
    ],
    "quran": [
     {
      "ar": "وَقَالَتِ امْرَأَتُ فِرْعَوْنَ قُرَّتُ عَيْنٍ لِي وَلَكَ ۖ لَا تَقْتُلُوهُ عَسَى أَنْ يَنْفَعَنَا أَوْ نَتَّخِذَهُ وَلَدًا وَهُمْ لَا يَشْعُرُونَ",
      "ref": "Kasas 28:9",
      "tr": "Firavun'un karısı dedi: Benim için de senin için de bir göz aydınlığı! Onu öldürmeyin; belki bize faydası olur ya da onu evlat ediniriz. Oysa onlar (işin sonunu) sezmiyorlardı.",
      "inText": "«قُرَّةُ عَيْنٍ لِي وَلَكَ …»"
     },
     {
      "ar": "فَالْتَقَطَهُ آلُ فِرْعَوْنَ لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا ۗ إِنَّ فِرْعَوْنَ وَهَامَانَ وَجُنُودَهُمَا كَانُوا خَاطِئِينَ",
      "ref": "Kasas 28:8",
      "tr": "Firavun ailesi onu (sudan) aldı ki sonunda onlar için bir düşman ve keder olsun. Firavun, Hâmân ve askerleri gerçekten yanılıyorlardı.",
      "inText": "«فَالْتَقَطَهُ آلُ فِرْعَوْنَ …»"
     },
     {
      "ar": "وَحَرَّمْنَا عَلَيْهِ الْمَرَاضِعَ مِنْ قَبْلُ",
      "ref": "Kasas 28:12",
      "tr": "Daha önce sütanneleri ona haram kılmıştık.",
      "inText": "وَلٰكِنَّ اللهَ حَرَّمَ عَلَيْهِ الْمَرَاضِعَ"
     }
    ]
   },
   "sections": [
    {
     "n": 8,
     "title_ar": "فِي قَصْرِ فِرْعَوْنَ",
     "title_tr": "Firavun'un sarayında",
     "s": [
      [
       "كَانَ فِرْعَوْنُ لَهُ قُصُورٌ كَثِيرَةٌ عَلَى شَاطِئِ النِّيلِ.",
       "Firavun'un Nil kıyısında pek çok sarayı vardı."
      ],
      [
       "وَكَانَ يَتَنَقَّلُ مِنْ قَصْرٍ إِلَى قَصْرٍ وَيَتَنَزَّهُ عَلَى شَاطِئِ النِّيلِ.",
       "Saraydan saraya geçer, Nil kıyısında gezintiye çıkardı."
      ],
      [
       "وَكَانَ يَوْمًا جَالِسًا عَلَى شَاطِئِ النِّيلِ يَتَنَزَّهُ وَيَرَى إِلَى النَّهْرِ يَجْرِي تَحْتَ رِجْلَيْهِ.",
       "Bir gün Nil kıyısında oturmuş, gezinti yapıyor ve ayaklarının altından akan nehre bakıyordu."
      ],
      [
       "وَكَانَتْ مَعَهُ مَلِكَةُ مِصْرَ تَتَنَزَّهُ مَعَ الْمَلِكِ وَتَرَى إِلَى النِّيلِ يَجْرِي.",
       "Yanında Mısır kraliçesi de vardı; kralla birlikte geziyor ve akan Nil'e bakıyordu."
      ],
      [
       "وَبَيْنَمَا يَتَنَزَّهَانِ إِذْ وَقَعَ بَصَرُهُمَا عَلَى صُنْدُوقٍ تَلْعَبُ بِهِ أَمْوَاجُ النِّيلِ كَأَنَّمَا تُقَبِّلُهُ.",
       "İkisi gezinirken gözleri, Nil'in dalgalarının sanki öpüyormuş gibi oynattığı bir sandığa ilişti."
      ],
      [
       "هَلْ تَرَى يَا سَيِّدِي ذٰلِكَ الصُّنْدُوقَ؟",
       "Efendim, şu sandığı görüyor musun?"
      ],
      [
       "أَيْنَ الصُّنْدُوقُ فِي النِّيلِ؟ إِنَّمَا هِيَ خَشَبَةٌ سَقَطَتْ فِي النِّيلِ.",
       "Nil'de sandık nerede? O, Nil'e düşmüş bir tahta parçası sadece."
      ],
      [
       "لَا يَا سَيِّدِي إِنَّمَا هُوَ صُنْدُوقٌ!",
       "Hayır efendim, o bir sandık!"
      ],
      [
       "وَقَرُبَ الصُّنْدُوقُ، فَقَالَ النَّاسُ: نَعَمْ هٰذَا صُنْدُوقٌ!",
       "Sandık yaklaştı; insanlar «Evet, bu bir sandık!» dediler."
      ],
      [
       "وَأَمَرَ الْمَلِكُ أَحَدَ الْخَدَمِ، وَقَالَ: إِلَيْكَ هٰذَا الصُّنْدُوقَ!",
       "Kral hizmetçilerden birine emredip «Şu sandığı getir!» dedi."
      ],
      [
       "وَذَهَبَ الْخَادِمُ وَأَخْرَجَ الصُّنْدُوقَ!",
       "Hizmetçi gidip sandığı çıkardı!"
      ],
      [
       "وَفُتِحَ الصُّنْدُوقُ فَإِذَا فِيهِ غُلَامٌ جَمِيلٌ يَبْتَسِمُ.",
       "Sandık açıldı; bir de ne görsünler, içinde gülümseyen güzel bir oğlan çocuğu!"
      ],
      [
       "وَتَحَيَّرَ النَّاسُ، كُلٌّ يَأْخُذُهُ وَيَرَاهُ.",
       "İnsanlar şaşırdı; herkes onu alıp bakıyordu."
      ],
      [
       "وَتَحَيَّرَ فِرْعَوْنُ وَرَآهُ.",
       "Firavun da şaşırdı ve ona baktı."
      ],
      [
       "قَالَ بَعْضُ الْخَدَمِ: إِنَّ هٰذَا الْغُلَامَ إِسْرَائِيلِيٌّ وَلَا بُدَّ لِلْمَلِكِ أَنْ يَذْبَحَهُ.",
       "Hizmetçilerden bazıları dedi: Bu çocuk İsrailoğullarından; kral onu mutlaka boğazlamalı."
      ],
      [
       "وَرَأَتْهُ الْمَلِكَةُ، وَدَخَلَ حُبُّهُ فِي قَلْبِهَا فَضَمَّتْهُ إِلَى صَدْرِهَا وَقَبَّلَتْهُ.",
       "Kraliçe onu gördü, sevgisi kalbine girdi; onu bağrına basıp öptü."
      ],
      [
       "وَشَفَعَتْ لَهُ عِنْدَ الْمَلِكِ وَقَالَتْ: «قُرَّةُ عَيْنٍ لِي وَلَكَ لَا تَقْتُلُوهُ عَسَى أَنْ يَنْفَعَنَا أَوْ نَتَّخِذَهُ وَلَدًا».",
       "Kralın yanında onun için aracı oldu ve dedi: «Benim için de senin için de bir göz aydınlığı! Onu öldürmeyin; belki bize faydası olur ya da onu evlat ediniriz.»"
      ],
      [
       "وَهٰكَذَا دَخَلَ مُوسَى بْنُ عِمْرَانَ قَصْرَ فِرْعَوْنَ، وَعَاشَ عَلَى رَغْمِ فِرْعَوْنَ وَشُرْطَتِهِ.",
       "İşte böylece İmrân oğlu Mûsâ Firavun'un sarayına girdi ve Firavun'a ve askerlerine rağmen yaşadı."
      ],
      [
       "وَلَمْ يَهْتَدِ الشُّرْطَةُ إِلَى هٰذَا الْمَوْلُودِ الْإِسْرَائِيلِيِّ، وَلَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ.",
       "Karga gözlü, karınca burunlu askerler bu İsrailoğlu bebeği bulamadılar."
      ],
      [
       "وَأَرَادَ اللهُ أَنْ يُرَبِّيَ فِرْعَوْنُ «عَدُوُّ الْأَطْفَالِ» طِفْلًا يَذْهَبُ مُلْكُهُ عَلَى يَدِهِ.",
       "Allah, «çocukların düşmanı» Firavun'un, mülkünü yok edecek bir çocuğu büyütmesini istedi."
      ],
      [
       "مِسْكِينٌ فِرْعَوْنُ! لَقَدْ أَخْطَأَ فِي شَأْنِ مُوسَى.",
       "Zavallı Firavun! Mûsâ konusunda yanıldı."
      ],
      [
       "وَقَدْ أَخْطَأَ مَعَهُ وَزِيرُهُ هَامَانُ وَجُنُودُهُ.",
       "Onunla birlikte veziri Hâmân ve askerleri de yanıldı."
      ],
      [
       "«فَالْتَقَطَهُ آلُ فِرْعَوْنَ لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا إِنَّ فِرْعَوْنَ وَهَامَانَ وَجُنُودَهُمَا كَانُوا خَاطِئِينَ».",
       "«Firavun ailesi onu (sudan) aldı ki sonunda onlar için bir düşman ve bir keder olsun. Firavun, Hâmân ve askerleri gerçekten yanılıyorlardı.»"
      ]
     ]
    },
    {
     "n": 9,
     "title_ar": "مَنْ يُرْضِعُ الطِّفْلَ؟",
     "title_tr": "Bebeği kim emzirecek?",
     "s": [
      [
       "وَكَانَ الطِّفْلُ الْجَدِيدُ وَكَانَ الطِّفْلُ الْجَمِيلُ لُعْبَةَ الْقَصْرِ وَلَهْوَ الدَّارِ.",
       "Yeni gelen bu güzel bebek sarayın oyuncağı, evin neşesi oldu."
      ],
      [
       "كُلٌّ يَأْخُذُهُ وَيُقَبِّلُهُ، وَكُلٌّ يُحِبُّهُ وَيَمْدَحُهُ، لِأَنَّ الْمَلِكَةَ تُحِبُّهُ حُبًّا عَظِيمًا.",
       "Herkes onu alıp öpüyor, herkes onu sevip övüyordu; çünkü kraliçe onu çok seviyordu."
      ],
      [
       "فَكَيْفَ لَا تُحِبُّهُ سَيِّدَاتُ الْقَصْرِ وَكَيْفَ لَا يُحِبُّهُ خَدَمُ الْقَصْرِ.",
       "Sarayın hanımları onu nasıl sevmesin, sarayın hizmetçileri onu nasıl sevmesin?"
      ],
      [
       "وَكُلٌّ يَأْخُذُهُ وَيُقَبِّلُهُ، لِأَنَّ الطِّفْلَ جَمِيلٌ.",
       "Herkes onu alıp öpüyordu, çünkü bebek çok güzeldi."
      ],
      [
       "وَطَلَبَتِ الْمَلِكَةُ مُرْضِعًا تُرْضِعُ الطِّفْلَ، وَجَاءَتْ وَأَخَذَتِ الطِّفْلَ وَلٰكِنَّ الطِّفْلَ يَبْكِي وَيَأْبَى.",
       "Kraliçe bebeği emzirecek bir sütanne istedi; sütanne gelip bebeği aldı ama bebek ağlıyor ve reddediyordu."
      ],
      [
       "وَطَلَبَتِ الْمَلِكَةُ مُرْضِعًا أُخْرَى، وَحَضَرَتْ وَأَخَذَتِ الطِّفْلَ، وَلٰكِنَّ الطِّفْلَ يَبْكِي وَيَأْبَى.",
       "Kraliçe başka bir sütanne istedi; o da gelip bebeği aldı ama bebek ağlıyor ve reddediyordu."
      ],
      [
       "وَثَالِثَةً وَرَابِعَةً وَخَامِسَةً وَلٰكِنَّ الطِّفْلَ يَبْكِي وَيَأْبَى.",
       "Üçüncüsü, dördüncüsü, beşincisi… ama bebek ağlıyor ve reddediyordu."
      ],
      [
       "عَجَبًا! لِمَاذَا لَا يَرْتَضِعُ الطِّفْلُ، لِأَيِّ شَيْءٍ يَبْكِي؟",
       "Ne tuhaf! Bebek neden emmiyor, neden ağlıyor?"
      ],
      [
       "اجْتَهَدَتِ الْمَرَاضِعُ أَنْ تُرْضِعَ الطِّفْلَ لِتَسُرَّ الْمَلِكَةَ وَتَنَالَ مِنْهَا جَائِزَةً، وَلٰكِنَّ اللهَ حَرَّمَ عَلَيْهِ الْمَرَاضِعَ.",
       "Sütanneler kraliçeyi memnun edip ondan ödül almak için bebeği emzirmeye çabaladılar; ama Allah sütanneleri ona haram kılmıştı."
      ],
      [
       "وَأَصْبَحَ الطِّفْلُ حَدِيثَ الْقَصْرِ وَشُغْلَ الدَّارِ.",
       "Bebek sarayın dilinde, evin gündeminde oldu."
      ],
      [
       "هَلْ رَأَيْتِ يَا أُخْتِي الطِّفْلَ الْجَدِيدَ؟",
       "Kardeşim, yeni bebeği gördün mü?"
      ],
      [
       "نَعَمْ قَدْ رَأَيْتُهُ، طِفْلٌ جَمِيلٌ جِدًّا.",
       "Evet, gördüm; çok güzel bir bebek."
      ],
      [
       "وَلٰكِنَّهُ طِفْلٌ غَرِيبٌ لَيْسَ كَالْأَطْفَالِ! إِنَّهُ لَا يَرْتَضِعُ.",
       "Ama tuhaf bir bebek, diğer bebeklere benzemiyor! Hiç emmiyor."
      ],
      [
       "وَإِذَا أَخَذَتْهُ مُرْضِعٌ يَبْكِي وَيَأْبَى أَنْ يَرْتَضِعَ؛ مِسْكِينٌ كَيْفَ يَعِيشُ؟ إِنَّهُ يَمُوتُ.",
       "Bir sütanne onu kucağına alınca ağlıyor ve emmeyi reddediyor. Zavallı, nasıl yaşayacak? Ölecek."
      ],
      [
       "نَعَمْ قَدْ مَضَى عَلَيْهِ أَيَّامٌ وَلَمْ يَرْتَضِعْ.",
       "Evet, günler geçti ve hâlâ emmedi."
      ]
     ]
    }
   ]
  },
  {
   "id": 5,
   "emoji": "🤱",
   "title_ar": "فِي حِجْرِ أُمِّهِ",
   "title_tr": "Annesinin kucağında",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «فِي حِجْرِ أُمِّهِ», «إِلَى قَصْرِ فِرْعَوْنَ!». Bebek hiçbir sütanneden emmiyor. Sence ne olacak?",
     "options": [
      [
       "يَرْجِعُ إِلَى أُمِّهِ",
       "Annesine geri dönecek"
      ],
      [
       "يَمُوتُ مِنَ الْجُوعِ",
       "Açlıktan ölecek"
      ],
      [
       "يَذْبَحُهُ فِرْعَوْنُ",
       "Firavun onu boğazlayacak"
      ]
     ]
    },
    "vocab": [
     [
      "أُخْتٌ",
      "kız kardeş",
      "👧"
     ],
     [
      "تَبْحَثُ عَنْ",
      "arıyor",
      "🔎"
     ],
     [
      "يَرْتَضِعُ",
      "emer",
      "🍼"
     ],
     [
      "ارْتَابَ",
      "şüphelendi",
      "🤨"
     ],
     [
      "يَنْشَأُ",
      "yetişir, büyür",
      "🌱"
     ],
     [
      "يَغِيظُهُ",
      "onu öfkelendirir",
      "😠"
     ]
    ]
   },
   "stop": {
    "section": 10,
    "after": 12,
    "prompt_tr": "Saraydaki kadınlar «Yedincisini neden denemeyelim?» diyor. Sence yedinci sütanne kim olacak?",
    "options": [
     [
      "أُمُّ مُوسَى",
      "Mûsâ'nın kendi annesi"
     ],
     [
      "الْمَلِكَةُ",
      "Kraliçe"
     ],
     [
      "امْرَأَةٌ مِنْ أَسْوَانَ",
      "Asvan'dan bir kadın"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "أَرْسَلَتِ الْأُمُّ ابْنَتَهَا تَبْحَثُ عَنْ مُوسَى.",
     "سَمِعَتِ الْأُخْتُ أَنَّ الطِّفْلَ لَا يَرْتَضِعُ.",
     "قَالَتْ: أَنَا أَعْرِفُ امْرَأَةً.",
     "ارْتَضَعَ مُوسَى مِنْ أُمِّهِ.",
     "رَجَعَتْ أُمُّ مُوسَى وَفِي حِجْرِهَا ابْنُهَا.",
     "نَشَأَ مُوسَى فِي قَصْرِ فِرْعَوْنَ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا أَرْسَلَتِ الْأُمُّ ابْنَتَهَا؟",
      "qt": "Anne kızını neden gönderdi?",
      "o": [
       "لِتَنْظُرَ أَخَاهَا لَعَلَّهُ حَيٌّ",
       "لِتَشْتَرِيَ طَعَامًا",
       "لِتَعْمَلَ فِي الْقَصْرِ"
      ],
      "ot": [
       "Kardeşine baksın diye, belki hayattadır",
       "Yiyecek alsın diye",
       "Sarayda çalışsın diye"
      ],
      "a": 0,
      "ev": [
       "10.0"
      ]
     },
     {
      "q": "مَاذَا قَالَتْ أُخْتُ مُوسَى فِي الْقَصْرِ؟",
      "qt": "Mûsâ'nın kız kardeşi sarayda ne dedi?",
      "o": [
       "أَنَا أَعْرِفُ امْرَأَةً يَرْتَضِعُ مِنْهَا الطِّفْلُ",
       "أَنَا أُخْتُ هٰذَا الطِّفْلِ",
       "أَعْطُونِي الطِّفْلَ"
      ],
      "ot": [
       "Bebeğin emeceği bir kadın tanıyorum",
       "Ben bu bebeğin kardeşiyim",
       "Bebeği bana verin"
      ],
      "a": 0,
      "ev": [
       "10.10"
      ]
     },
     {
      "q": "لِمَاذَا ارْتَابَ فِرْعَوْنُ؟",
      "qt": "Firavun neden şüphelendi?",
      "o": [
       "لِأَنَّ الطِّفْلَ قَبِلَ هٰذِهِ الْمَرْأَةَ",
       "لِأَنَّ الْمَرْأَةَ كَانَتْ غَنِيَّةً",
       "لِأَنَّ الطِّفْلَ بَكَى"
      ],
      "ot": [
       "Çünkü bebek bu kadını kabul etti",
       "Çünkü kadın zengindi",
       "Çünkü bebek ağladı"
      ],
      "a": 0,
      "ev": [
       "10.18"
      ]
     },
     {
      "q": "مَاذَا قَالَتْ أُمُّ مُوسَى لِفِرْعَوْنَ؟",
      "qt": "Mûsâ'nın annesi Firavun'a ne dedi?",
      "o": [
       "أَنَا امْرَأَةٌ طَيِّبَةُ الرِّيحِ طَيِّبَةُ اللَّبَنِ",
       "أَنَا أُمُّهُ",
       "لَا أُرِيدُ رِزْقًا"
      ],
      "ot": [
       "Ben kokusu güzel, sütü güzel bir kadınım",
       "Ben onun annesiyim",
       "Maaş istemiyorum"
      ],
      "a": 0,
      "ev": [
       "10.19"
      ]
     },
     {
      "q": "مَاذَا رَأَى مُوسَى فِي الْقَصْرِ؟",
      "qt": "Mûsâ sarayda ne gördü?",
      "o": [
       "كَيْفَ يَشْقَى بَنُو إِسْرَائِيلَ لِيَنْعَمَ فِرْعَوْنُ",
       "كَيْفَ يُحِبُّ فِرْعَوْنُ بَنِي إِسْرَائِيلَ",
       "كَيْفَ يَعْبُدُ النَّاسُ اللهَ"
      ],
      "ot": [
       "Firavun bolluk içinde yaşasın diye İsrailoğullarının nasıl sıkıntı çektiğini",
       "Firavun'un İsrailoğullarını nasıl sevdiğini",
       "İnsanların Allah'a nasıl ibadet ettiğini"
      ],
      "a": 0,
      "ev": [
       "11.4"
      ]
     }
    ],
    "focus": {
     "title": "Hâl cümlesi: وَهُوَ / وَهِيَ («… iken»)",
     "explain": "Başına <b>وَ</b> gelen bir isim cümlesi, olayın hangi durumda olduğunu anlatır (vâv-ı hâliye): <span class='ar-inline'>وَلِمَاذَا لَا يَرْتَضِعُ وَهِيَ أُمُّهُ؟</span> (o, annesiyken neden emmesin?), <span class='ar-inline'>وَهُوَ جَائِعٌ</span> (aç iken), <span class='ar-inline'>رَجَعَتْ … وَفِي حِجْرِهَا مُوسَى</span> (kucağında Mûsâ varken döndü). Ünite 1'de de vardı: <span class='ar-inline'>وَهُوَ وَحِيدٌ فِي مِصْرَ</span>.",
     "examples": [
      "وَلِمَاذَا لَا يَرْتَضِعُ وَهِيَ أُمُّهُ الْحَنُونُ؟!",
      "وَلِمَاذَا لَا يَرْتَضِعُ وَهُوَ جَائِعٌ مُنْذُ ثَلَاثَةِ أَيَّامٍ؟!",
      "وَرَجَعَتْ أُمُّ مُوسَى إِلَى بَيْتِهَا وَفِي حِجْرِهَا مُوسَى"
     ],
     "items": [
      {
       "q": "وَلِمَاذَا لَا يَرْتَضِعُ وَ____ أُمُّهُ الْحَنُونُ؟!",
       "o": [
        "هِيَ",
        "هُوَ",
        "هُمْ"
       ],
       "a": 0
      },
      {
       "q": "وَلِمَاذَا لَا يَرْتَضِعُ وَ____ جَائِعٌ؟!",
       "o": [
        "هُوَ",
        "هِيَ",
        "أَنْتِ"
       ],
       "a": 0
      },
      {
       "q": "وَرَجَعَتْ أُمُّ مُوسَى إِلَى بَيْتِهَا ____ حِجْرِهَا مُوسَى.",
       "o": [
        "وَفِي",
        "فِي",
        "لِأَنَّ"
       ],
       "a": 0
      },
      {
       "q": "«وَهُوَ وَحِيدٌ فِي مِصْرَ» = …",
       "o": [
        "Mısır'da yalnızken",
        "Mısır'a yalnız gitti",
        "Mısır'da yalnız değil"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "ذَهَبَتْ {أُخْتُ} مُوسَى تَبْحَثُ عَنْ أَخِيهَا. وَقَالَتْ: أَنَا أَعْرِفُ {امْرَأَةً}. وَجَاءَتْ أُمُّ مُوسَى فَ{ارْتَضَعَ} مِنْهَا. وَرَجَعَتْ إِلَى بَيْتِهَا وَفِي {حِجْرِهَا} مُوسَى. ثُمَّ نَشَأَ مُوسَى فِي {قَصْرِ} الْمَلِكِ."
    },
    "think": {
     "q": "لِمَاذَا زَالَتْ مِنْ قَلْبِ مُوسَى مَهَابَةُ الْمُلُوكِ؟",
     "qt": "Mûsâ'nın kalbinden krallara karşı korku neden silindi?",
     "model": "Mûsâ sarayın içinde, kral çocukları gibi büyüdü. Kralların da sıradan insanlar olduğunu, zenginliklerinin başkalarının sırtından geldiğini kendi gözüyle gördü. Bu, ileride Firavun'un karşısına korkmadan çıkabilmesi için bir hazırlıktı: Allah onu düşmanının evinde yetiştirdi."
    },
    "retell": [
     "أُخْتُ مُوسَى",
     "الْمُرْضِعُ السَّابِعَةُ",
     "ارْتَضَعَ",
     "ارْتَابَ فِرْعَوْنُ",
     "حِجْرُ أُمِّهِ",
     "يَشْقَى بَنُو إِسْرَائِيلَ"
    ],
    "quran": [
     {
      "ar": "وَقَالَتْ لِأُخْتِهِ قُصِّيهِ ۖ فَبَصُرَتْ بِهِ عَنْ جُنُبٍ وَهُمْ لَا يَشْعُرُونَ",
      "ref": "Kasas 28:11",
      "tr": "Annesi onun kız kardeşine: Onu izle, dedi. O da onlar farkına varmadan uzaktan onu gözetledi.",
      "inText": "وَذَهَبَتْ أُخْتُ مُوسَى تَبْحَثُ عَنْ أَخِيهَا"
     },
     {
      "ar": "فَقَالَتْ هَلْ أَدُلُّكُمْ عَلَى أَهْلِ بَيْتٍ يَكْفُلُونَهُ لَكُمْ وَهُمْ لَهُ نَاصِحُونَ",
      "ref": "Kasas 28:12",
      "tr": "Kız kardeşi dedi: Size, onu sizin için büyütecek ve ona iyi davranacak bir aile göstereyim mi?",
      "inText": "أَنَا أَعْرِفُ امْرَأَةً فِي الْبَلَدِ …"
     },
     {
      "ar": "فَرَدَدْنَاهُ إِلَى أُمِّهِ كَيْ تَقَرَّ عَيْنُهَا وَلَا تَحْزَنَ وَلِتَعْلَمَ أَنَّ وَعْدَ اللهِ حَقٌّ وَلٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ",
      "ref": "Kasas 28:13",
      "tr": "Böylece onu annesine geri döndürdük ki gözü aydın olsun, üzülmesin ve Allah'ın vaadinin gerçek olduğunu bilsin; fakat onların çoğu bilmez.",
      "inText": "«فَرَدَدْنَاهُ إِلَى أُمِّهِ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 10,
     "title_ar": "فِي حِجْرِ أُمِّهِ",
     "title_tr": "Annesinin kucağında",
     "s": [
      [
       "وَقَالَتِ الْأُمُّ الْحَنُونُ لِأُخْتِ مُوسَى: اذْهَبِي يَا بِنْتِي وَانْظُرِي أَخَاكِ لَعَلَّهُ حَيٌّ.",
       "Şefkatli anne Mûsâ'nın kız kardeşine dedi: Kızım, git kardeşine bir bak; belki hayattadır."
      ],
      [
       "إِنَّ اللهَ قَدْ وَعَدَنِي أَنَّهُ يَرُدُّ الطِّفْلَ إِلَيَّ وَأَنَّهُ يَحْفَظُهُ.",
       "Allah bana bebeği geri döndüreceğini ve onu koruyacağını vaat etti."
      ],
      [
       "وَذَهَبَتْ أُخْتُ مُوسَى تَبْحَثُ عَنْ أَخِيهَا.",
       "Mûsâ'nın kız kardeşi kardeşini aramaya gitti."
      ],
      [
       "وَسَمِعَتِ النَّاسَ يَتَحَدَّثُونَ عَنْ طِفْلٍ جَمِيلٍ فِي قَصْرِ الْمَلِكِ.",
       "İnsanların kralın sarayındaki güzel bir bebekten söz ettiğini duydu."
      ],
      [
       "ذَهَبَتِ السَّيِّدَةُ وَوَقَفَتْ تَسْمَعُ حَدِيثَ النِّسَاءِ فِي الْقَصْرِ.",
       "Genç hanım gidip saraydaki kadınların konuşmasını dinlemeye durdu."
      ],
      [
       "هَلْ جَاءَتِ الْمُرْضِعُ الَّتِي طَلَبَتْهَا الْمَلِكَةُ مِنْ أَسْوَانَ؟",
       "Kraliçenin Asvan'dan istediği sütanne geldi mi?"
      ],
      [
       "نَعَمْ يَا سَيِّدَتِي، وَلٰكِنَّ الطِّفْلَ أَبَى أَيْضًا وَلَمْ يَرْتَضِعْ.",
       "Evet hanımım, ama bebek onu da reddetti ve emmedi."
      ],
      [
       "يَا سَلَامُ! مَا شَأْنُ هٰذَا الطِّفْلِ؟ لَعَلَّ هٰذِهِ هِيَ السَّادِسَةُ الَّتِي جَرَّبَتْهَا الْمَلِكَةُ.",
       "Hayret! Bu bebeğin derdi ne? Kraliçenin denediği altıncı sütanne bu olsa gerek."
      ],
      [
       "نَعَمْ وَيَقُولُونَ إِنَّهَا مُرْضِعٌ نَظِيفَةٌ جِدًّا وَكُلٌّ يَرْتَضِعُ مِنْهَا.",
       "Evet; çok temiz bir sütanne olduğunu ve her bebeğin ondan emdiğini söylüyorlar."
      ],
      [
       "سَمِعَتْ أُخْتُ مُوسَى هٰذَا الْكَلَامَ وَقَالَتْ بِأَدَبٍ وَلُطْفٍ:",
       "Mûsâ'nın kız kardeşi bu sözleri duydu ve edeple, nezaketle dedi:"
      ],
      [
       "أَنَا أَعْرِفُ امْرَأَةً فِي الْبَلَدِ، لَا بُدَّ أَنْ يَرْتَضِعَ مِنْهَا الطِّفْلُ.",
       "Şehirde bir kadın tanıyorum; bebek mutlaka ondan emer."
      ],
      [
       "قَالَتِ امْرَأَةٌ: أَنَا لَا أُصَدِّقُ قَدْ جَرَّبْنَا سِتَّ مَرَاضِعَ وَلٰكِنَّ الطِّفْلَ لَمْ يَرْتَضِعْ.",
       "Bir kadın dedi: İnanmıyorum; altı sütanne denedik ama bebek emmedi."
      ],
      [
       "قَالَتْ أُخْرَى: وَلِمَاذَا لَا نُجَرِّبُ السَّابِعَةَ، مَاذَا عَلَيْنَا؟",
       "Bir başkası dedi: Yedincisini neden denemeyelim? Ne kaybederiz?"
      ],
      [
       "وَوَصَلَ الْخَبَرُ إِلَى الْمَلِكَةِ فَطَلَبَتِ الْجَارِيَةَ وَقَالَتْ: «اذْهَبِي وَخُذِي مَعَكِ هٰذِهِ الْمَرْأَةَ».",
       "Haber kraliçeye ulaştı; kızı çağırıp «Git ve o kadını yanına alıp getir» dedi."
      ],
      [
       "وَجَاءَتْ أُمُّ مُوسَى، وَجَاءَتْ خَادِمَةٌ وَقَدَّمَتْ إِلَيْهَا مُوسَى.",
       "Mûsâ'nın annesi geldi; bir hizmetçi gelip Mûsâ'yı ona uzattı."
      ],
      [
       "فَاعْتَنَقَ الطِّفْلُ الْمَرْأَةَ وَأَقْبَلَ يَرْتَضِعُ، كَأَنَّهُ كَانَ مِنْهَا عَلَى مِيعَادٍ.",
       "Bebek kadına sarıldı ve emmeye başladı; sanki onunla sözleşmiş gibiydi."
      ],
      [
       "وَلِمَاذَا لَا يَرْتَضِعُ وَهِيَ أُمُّهُ الْحَنُونُ؟!",
       "Neden emmesin ki, o onun şefkatli annesiydi?!"
      ],
      [
       "وَلِمَاذَا لَا يَرْتَضِعُ وَهُوَ جَائِعٌ مُنْذُ ثَلَاثَةِ أَيَّامٍ؟!",
       "Neden emmesin ki, üç gündür açtı?!"
      ],
      [
       "وَعَجِبَتِ الْمَلِكَةُ وَعَجِبَ أَهْلُ الْقَصْرِ وَارْتَابَ فِرْعَوْنُ وَقَالَ: لِمَاذَا قَبِلَ هٰذَا الطِّفْلُ هٰذِهِ الْمَرْأَةَ فَهَلْ هِيَ أُمُّهُ؟",
       "Kraliçe de saray halkı da şaşırdı; Firavun ise şüphelenip dedi: Bu bebek neden bu kadını kabul etti, yoksa annesi mi?"
      ],
      [
       "قَالَتْ أُمُّ مُوسَى: يَا سَيِّدِي أَنَا امْرَأَةٌ طَيِّبَةُ الرِّيحِ طَيِّبَةُ اللَّبَنِ كُلُّ طِفْلٍ يَقْبَلُنِي.",
       "Mûsâ'nın annesi dedi: Efendim, ben kokusu güzel, sütü güzel bir kadınım; her bebek beni kabul eder."
      ],
      [
       "وَسَكَتَ فِرْعَوْنُ وَأَجْرَى عَلَيْهَا رِزْقًا.",
       "Firavun sustu ve ona maaş bağladı."
      ],
      [
       "وَرَجَعَتْ أُمُّ مُوسَى إِلَى بَيْتِهَا وَفِي حِجْرِهَا مُوسَى.",
       "Mûsâ'nın annesi kucağında Mûsâ ile evine döndü."
      ],
      [
       "«فَرَدَدْنَاهُ إِلَى أُمِّهِ كَيْ تَقَرَّ عَيْنُهَا وَلَا تَحْزَنَ وَلِتَعْلَمَ أَنَّ وَعْدَ اللهِ حَقٌّ وَلٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ».",
       "«Böylece onu annesine geri döndürdük ki gözü aydın olsun, üzülmesin ve Allah'ın vaadinin gerçek olduğunu bilsin; fakat insanların çoğu bilmez.»"
      ]
     ]
    },
    {
     "n": 11,
     "title_ar": "إِلَى قَصْرِ فِرْعَوْنَ!",
     "title_tr": "Firavun'un sarayına!",
     "s": [
      [
       "وَلَمَّا أَتَمَّتْ أُمُّ مُوسَى رَضَاعَتَهُ رَدَّتْهُ إِلَى الْقَصْرِ.",
       "Mûsâ'nın annesi onu emzirmeyi tamamlayınca saraya geri götürdü."
      ],
      [
       "وَنَشَأَ مُوسَى فِي قَصْرِ الْمَلِكِ كَمَا يَنْشَأُ أَبْنَاءُ الْمُلُوكِ.",
       "Mûsâ kralın sarayında, kral çocuklarının yetiştiği gibi yetişti."
      ],
      [
       "وَهٰكَذَا زَالَتْ مِنْ قَلْبِ مُوسَى مَهَابَةُ الْمُلُوكِ وَالْأَغْنِيَاءِ.",
       "Böylece Mûsâ'nın kalbinden krallara ve zenginlere karşı duyulan korku silindi."
      ],
      [
       "وَرَأَى مُوسَى بِعَيْنَيْهِ كَيْفَ يَنْعَمُ فِرْعَوْنُ وَأَهْلُهُ.",
       "Mûsâ, Firavun'un ve ailesinin nasıl bolluk içinde yaşadığını kendi gözleriyle gördü."
      ],
      [
       "وَكَيْفَ يَشْقَى بَنُو إِسْرَائِيلَ لِيَنْعَمَ فِرْعَوْنُ وَأَهْلُهُ.",
       "Firavun ve ailesi bolluk içinde yaşasın diye İsrailoğullarının nasıl sıkıntı çektiğini gördü."
      ],
      [
       "وَكَيْفَ يَجُوعُ بَنُو إِسْرَائِيلَ لِتَشْبَعَ دَوَابُّ فِرْعَوْنَ.",
       "Firavun'un hayvanları doysun diye İsrailoğullarının nasıl aç kaldığını gördü."
      ],
      [
       "وَكَيْفَ يُعَامِلُونَ بَنِي إِسْرَائِيلَ مُعَامَلَةَ الْحَمِيرِ وَالدَّوَابِّ.",
       "İsrailoğullarına nasıl eşek ve yük hayvanı muamelesi yapıldığını gördü."
      ],
      [
       "وَكَيْفَ يَسْتَخْدِمُونَهُمْ وَيَسُومُونَهُمْ سُوءَ الْعَذَابِ.",
       "Onları nasıl çalıştırıp işkencenin en kötüsüne uğrattıklarını gördü."
      ],
      [
       "وَكَانَ مُوسَى يَرَى ذٰلِكَ صَبَاحَ مَسَاءَ وَيَسْكُتُ.",
       "Mûsâ bunu sabah akşam görüyor ve susuyordu."
      ],
      [
       "وَلٰكِنْ كَانَ مُوسَى يَغِيظُهُ ذٰلِكَ.",
       "Ama bu durum Mûsâ'yı öfkelendiriyordu."
      ],
      [
       "وَكَيْفَ لَا يَغِيظُهُ إِهَانَةُ قَوْمِهِ وَأُسْرَتِهِ.",
       "Kavminin ve ailesinin aşağılanması onu nasıl öfkelendirmesin?"
      ],
      [
       "وَهُمْ أَبْنَاءُ الْأَنْبِيَاءِ، وَهُمْ أَبْنَاءُ الْكِرَامِ.",
       "Onlar peygamberlerin çocuklarıydı, soylu insanların çocuklarıydı."
      ],
      [
       "وَمَا ذَنْبُ بَنِي إِسْرَائِيلَ، أَلِأَنَّهُمْ لَيْسُوا أَقْبَاطًا؟! أَلِأَنَّهُمْ مِنْ كَنْعَانَ؟!",
       "İsrailoğullarının suçu neydi? Kıptî olmadıkları için mi?! Ken'an'dan geldikleri için mi?!"
      ],
      [
       "هٰذَا لَيْسَ بِذَنْبٍ! هٰذَا لَيْسَ بِذَنْبٍ!",
       "Bu bir suç değil! Bu bir suç değil!"
      ]
     ]
    }
   ]
  },
  {
   "id": 6,
   "emoji": "⚡",
   "title_ar": "الضَّرْبَةُ الْقَاضِيَةُ",
   "title_tr": "Öldürücü darbe",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «الضَّرْبَةُ الْقَاضِيَةُ», «يَظْهَرُ السِّرُّ». Mûsâ güçlü bir genç oldu ve mazlumları savunuyordu. Sence başına ne geldi?",
     "options": [
      [
       "ضَرَبَ قِبْطِيًّا فَمَاتَ",
       "Bir Kıptîye vurdu ve adam öldü"
      ],
      [
       "صَارَ وَزِيرًا لِفِرْعَوْنَ",
       "Firavun'a vezir oldu"
      ],
      [
       "سَافَرَ إِلَى كَنْعَانَ",
       "Ken'an'a gitti"
      ]
     ]
    },
    "vocab": [
     [
      "يَقْتَتِلَانِ",
      "(ikisi) kavga ediyor",
      "🤼"
     ],
     [
      "الْقَاضِيَةُ",
      "öldürücü (darbe)",
      "💥"
     ],
     [
      "نَدِمَ",
      "pişman oldu",
      "😔"
     ],
     [
      "يَتَرَقَّبُ",
      "kollar, gözetler",
      "👀"
     ],
     [
      "قَتِيلٌ / قَاتِلٌ",
      "öldürülen / katil",
      "⚖️"
     ],
     [
      "وَقِحٌ",
      "yüzsüz",
      "😤"
     ]
    ]
   },
   "stop": {
    "section": 12,
    "after": 4,
    "prompt_tr": "İsrailoğlu bağırdı ve Kıptîyi şikâyet ederek Mûsâ'yı yardıma çağırdı. Sence Mûsâ ne yaptı?",
    "options": [
     [
      "غَضِبَ فَضَرَبَ الْقِبْطِيَّ",
      "Öfkelenip Kıptîye vurdu"
     ],
     [
      "تَرَكَهُمَا وَذَهَبَ",
      "Onları bırakıp gitti"
     ],
     [
      "نَادَى الشُّرْطَةَ",
      "Askerleri çağırdı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "آتَى اللهُ مُوسَى حُكْمًا وَعِلْمًا.",
     "وَجَدَ رَجُلَيْنِ يَقْتَتِلَانِ.",
     "ضَرَبَ مُوسَى الْقِبْطِيَّ فَمَاتَ.",
     "نَدِمَ مُوسَى وَتَابَ.",
     "ظَهَرَ السِّرُّ فِي الْيَوْمِ الثَّانِي.",
     "خَرَجَ مُوسَى مِنْ مِصْرَ خَائِفًا."
    ],
    "questions": [
     {
      "q": "مَاذَا آتَى اللهُ مُوسَى لَمَّا كَانَ شَابًّا؟",
      "qt": "Mûsâ genç olunca Allah ona ne verdi?",
      "o": [
       "حُكْمًا وَعِلْمًا",
       "مَالًا كَثِيرًا",
       "قَصْرًا"
      ],
      "ot": [
       "Hikmet ve ilim",
       "Çok mal",
       "Bir saray"
      ],
      "a": 0,
      "ev": [
       "12.0"
      ]
     },
     {
      "q": "هَلْ قَصَدَ مُوسَى أَنْ يَقْتُلَ الْقِبْطِيَّ؟",
      "qt": "Mûsâ Kıptîyi öldürmeyi amaçladı mı?",
      "o": [
       "لَا، ضَرَبَهُ وَلٰكِنَّهَا كَانَتِ الْقَاضِيَةَ",
       "نَعَمْ، أَرَادَ قَتْلَهُ",
       "لَمْ يَضْرِبْهُ أَبَدًا"
      ],
      "ot": [
       "Hayır, sadece vurdu ama darbe öldürücü oldu",
       "Evet, onu öldürmek istedi",
       "Ona hiç vurmadı"
      ],
      "a": 0,
      "ev": [
       "12.9"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ مُوسَى بَعْدَ مَوْتِ الْقِبْطِيِّ؟",
      "qt": "Kıptî ölünce Mûsâ ne yaptı?",
      "o": [
       "نَدِمَ وَتَابَ إِلَى اللهِ",
       "فَرِحَ",
       "هَرَبَ فِي الْحَالِ إِلَى مَدْيَنَ"
      ],
      "ot": [
       "Pişman oldu ve Allah'a tövbe etti",
       "Sevindi",
       "Hemen Medyen'e kaçtı"
      ],
      "a": 0,
      "ev": [
       "12.6",
       "12.7"
      ]
     },
     {
      "q": "كَيْفَ عَرَفَ الْقِبْطِيُّ الثَّانِي أَنَّ مُوسَى هُوَ الْقَاتِلُ؟",
      "qt": "İkinci Kıptî katilin Mûsâ olduğunu nasıl anladı?",
      "o": [
       "مِنْ كَلَامِ الْإِسْرَائِيلِيِّ",
       "مِنَ الشُّرْطَةِ",
       "مِنْ فِرْعَوْنَ"
      ],
      "ot": [
       "İsrailoğlunun sözünden",
       "Askerlerden",
       "Firavun'dan"
      ],
      "a": 0,
      "ev": [
       "13.7",
       "13.8"
      ]
     },
     {
      "q": "مَاذَا قَالَ الرَّجُلُ النَّاصِحُ لِمُوسَى؟",
      "qt": "Öğüt veren adam Mûsâ'ya ne dedi?",
      "o": [
       "اخْرُجْ إِنِّي لَكَ مِنَ النَّاصِحِينَ",
       "اذْهَبْ إِلَى فِرْعَوْنَ",
       "ابْقَ فِي الْقَصْرِ"
      ],
      "ot": [
       "Çık, ben senin iyiliğini isteyenlerdenim",
       "Firavun'a git",
       "Sarayda kal"
      ],
      "a": 0,
      "ev": [
       "13.18"
      ]
     }
    ],
    "focus": {
     "title": "أَصْبَحَ: «… oldu» / «… hâlde sabahladı»",
     "explain": "<b>أَصْبَحَ</b>, <b>كَانَ</b> gibi çalışır: öznesi merfû, haberi mansubdur. Hem «sabahladı» hem de genel olarak «oldu, hâline geldi» anlamı taşır: <span class='ar-inline'>أَصْبَحَ فِي الْمَدِينَةِ خَائِفًا</span> (şehirde korku içinde sabahladı), <span class='ar-inline'>أَصْبَحَ الْقَتِيلُ حَدِيثَ الْبَلَدِ</span> (öldürülen adam herkesin dilinde oldu). Önceki ünitede: <span class='ar-inline'>أَصْبَحَ الطِّفْلُ حَدِيثَ الْقَصْرِ</span>.",
     "examples": [
      "وَأَصْبَحَ فِي الْمَدِينَةِ خَائِفًا يَتَرَقَّبُ",
      "وَأَصْبَحَ الْقَتِيلُ حَدِيثَ الْبَلَدِ وَشُغْلَ الْمَدِينَةِ",
      "وَأَصْبَحَ الطِّفْلُ حَدِيثَ الْقَصْرِ"
     ],
     "items": [
      {
       "q": "وَأَصْبَحَ فِي الْمَدِينَةِ ____ يَتَرَقَّبُ.",
       "o": [
        "خَائِفًا",
        "خَائِفٌ",
        "خَوْفٌ"
       ],
       "a": 0
      },
      {
       "q": "وَأَصْبَحَ الْقَتِيلُ ____ الْبَلَدِ.",
       "o": [
        "حَدِيثَ",
        "حَدِيثُ",
        "حَدِيثٌ"
       ],
       "a": 0
      },
      {
       "q": "____ الطِّفْلُ حَدِيثَ الْقَصْرِ.",
       "o": [
        "أَصْبَحَ",
        "أَصْبَحُوا",
        "أَصْبَحَتْ"
       ],
       "a": 0
      },
      {
       "q": "«أَصْبَحَ خَائِفًا» = …",
       "o": [
        "korku içinde sabahladı / korkar oldu",
        "korkmadı",
        "korkuttu"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "وَجَدَ مُوسَى رَجُلَيْنِ {يَقْتَتِلَانِ}. فَضَرَبَ {الْقِبْطِيَّ} فَمَاتَ. وَنَدِمَ مُوسَى وَ{تَابَ} إِلَى اللهِ. وَفِي الْيَوْمِ الثَّانِي ظَهَرَ {السِّرُّ}، فَخَرَجَ مُوسَى خَائِفًا {يَتَرَقَّبُ}."
    },
    "think": {
     "q": "لِمَاذَا قَالَ مُوسَى: «هٰذَا مِنْ عَمَلِ الشَّيْطَانِ»؟",
     "qt": "Mûsâ neden «Bu şeytanın işidir» dedi?",
     "model": "Mûsâ mazluma yardım etmek istedi; niyeti iyiydi. Ama öfkeye kapılıp ölçüyü kaçırdı ve istemeden bir insanın ölümüne sebep oldu. Bunu kendi hatası olarak kabul etti, bahane aramadı, hemen tövbe etti. Kıssa, iyi bir amacın bile öfkeyle bozulabileceğini ve hatadan sonra yapılacak şeyin dürüstçe pişmanlık olduğunu gösteriyor."
    },
    "retell": [
     "حُكْمٌ وَعِلْمٌ",
     "رَجُلَانِ يَقْتَتِلَانِ",
     "الضَّرْبَةُ الْقَاضِيَةُ",
     "نَدِمَ وَتَابَ",
     "يَظْهَرُ السِّرُّ",
     "اخْرُجْ"
    ],
    "quran": [
     {
      "ar": "فَوَكَزَهُ مُوسَى فَقَضَى عَلَيْهِ ۖ قَالَ هٰذَا مِنْ عَمَلِ الشَّيْطَانِ ۖ إِنَّهُ عَدُوٌّ مُضِلٌّ مُبِينٌ",
      "ref": "Kasas 28:15",
      "tr": "Mûsâ ona bir yumruk vurdu ve ölümüne sebep oldu. Dedi: Bu şeytanın işidir; o apaçık saptırıcı bir düşmandır.",
      "inText": "«قَالَ هٰذَا مِنْ عَمَلِ الشَّيْطَانِ …»"
     },
     {
      "ar": "قَالَ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي فَغَفَرَ لَهُ ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ",
      "ref": "Kasas 28:16",
      "tr": "Dedi: Rabbim! Ben kendime zulmettim, beni bağışla. Allah da onu bağışladı. Şüphesiz O çok bağışlayan, çok merhamet edendir.",
      "inText": "وَتَابَ اللهُ عَلَى مُوسَى …"
     },
     {
      "ar": "وَجَاءَ رَجُلٌ مِنْ أَقْصَى الْمَدِينَةِ يَسْعَى قَالَ يَا مُوسَى إِنَّ الْمَلَأَ يَأْتَمِرُونَ بِكَ لِيَقْتُلُوكَ فَاخْرُجْ إِنِّي لَكَ مِنَ النَّاصِحِينَ",
      "ref": "Kasas 28:20",
      "tr": "Şehrin öbür ucundan bir adam koşarak geldi ve dedi: Ey Mûsâ! İleri gelenler seni öldürmek için aralarında anlaşıyorlar; hemen çık, ben senin iyiliğini isteyenlerdenim.",
      "inText": "«اخْرُجْ إِنِّي لَكَ مِنَ النَّاصِحِينَ»"
     }
    ]
   },
   "sections": [
    {
     "n": 12,
     "title_ar": "الضَّرْبَةُ الْقَاضِيَةُ",
     "title_tr": "Öldürücü darbe",
     "s": [
      [
       "وَلَمَّا كَانَ مُوسَى شَابًّا قَوِيًّا آتَاهُ اللهُ حُكْمًا وَعِلْمًا.",
       "Mûsâ güçlü bir genç olunca Allah ona hikmet ve ilim verdi."
      ],
      [
       "وَكَانَ مُوسَى يُبْغِضُ الظَّالِمِينَ وَيَكْرَهُهُمْ، وَيُحِبُّ الضُّعَفَاءَ وَالْمَظْلُومِينَ وَيَنْصُرُهُمْ وَكَذٰلِكَ كُلُّ نَبِيٍّ.",
       "Mûsâ zalimlerden nefret eder, onları sevmezdi; zayıfları ve mazlumları sever, onlara yardım ederdi. Her peygamber böyledir."
      ],
      [
       "وَدَخَلَ مُوسَى مَدِينَةَ فِرْعَوْنَ مَرَّةً وَالنَّاسُ فِي لَهْوٍ وَشُغْلٍ.",
       "Mûsâ bir keresinde, insanlar eğlence ve işle meşgulken Firavun'un şehrine girdi."
      ],
      [
       "وَوَجَدَ فِيهَا رَجُلَيْنِ يَقْتَتِلَانِ هٰذَا مِنْ بَنِي إِسْرَائِيلَ وَهٰذَا مِنَ الْأَقْبَاطِ أَعْدَاءِ بَنِي إِسْرَائِيلَ.",
       "Orada kavga eden iki adam buldu: biri İsrailoğullarından, diğeri İsrailoğullarının düşmanı Kıptîlerdendi."
      ],
      [
       "فَصَرَخَ الْإِسْرَائِيلِيُّ وَنَادَى مُوسَى لِنَصْرِهِ وَشَكَا الْقِبْطِيَّ.",
       "İsrailoğlu bağırdı, yardım için Mûsâ'yı çağırdı ve Kıptîyi şikâyet etti."
      ],
      [
       "وَغَضِبَ مُوسَى فَضَرَبَ الْقِبْطِيَّ، فَكَانَتِ الْقَاضِيَةَ.",
       "Mûsâ öfkelenip Kıptîye vurdu; darbe öldürücü oldu."
      ],
      [
       "وَمَاتَ الْقِبْطِيُّ وَنَدِمَ مُوسَى جِدًّا وَعَرَفَ أَنَّ هٰذَا مِنْ عَمَلِ الشَّيْطَانِ.",
       "Kıptî öldü; Mûsâ çok pişman oldu ve bunun şeytanın işi olduğunu anladı."
      ],
      [
       "فَتَابَ مُوسَى إِلَى اللهِ وَأَنَابَ وَكَذٰلِكَ كُلُّ نَبِيٍّ.",
       "Mûsâ Allah'a tövbe edip O'na yöneldi. Her peygamber böyledir."
      ],
      [
       "«قَالَ هٰذَا مِنْ عَمَلِ الشَّيْطَانِ إِنَّهُ عَدُوٌّ مُضِلٌّ مُبِينٌ».",
       "«Dedi ki: Bu şeytanın işidir; o, apaçık saptırıcı bir düşmandır.»"
      ],
      [
       "وَتَابَ اللهُ عَلَى مُوسَى، لِأَنَّ مُوسَى لَمْ يَقْصِدْ أَنْ يَقْتُلَ الْقِبْطِيَّ، بَلْ ضَرَبَهُ وَلٰكِنَّهَا كَانَتِ الْقَاضِيَةَ.",
       "Allah Mûsâ'nın tövbesini kabul etti; çünkü Mûsâ Kıptîyi öldürmeyi amaçlamamış, sadece vurmuştu, ama darbe öldürücü olmuştu."
      ],
      [
       "وَحَمِدَ اللهَ مُوسَى وَقَالَ: إِنَّ اللهَ قَدْ أَنْعَمَ عَلَيَّ وَغَفَرَ لِي «فَلَنْ أَكُونَ ظَهِيرًا لِلْمُجْرِمِينَ».",
       "Mûsâ Allah'a hamdetti ve dedi: Allah bana nimet verdi ve beni bağışladı; «artık suçlulara asla destek olmayacağım.»"
      ],
      [
       "وَأَصْبَحَ فِي الْمَدِينَةِ خَائِفًا يَتَرَقَّبُ وَيَحْذَرُ مَتَى تَجِيئُهُ شُرْطَةُ فِرْعَوْنَ وَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ.",
       "Şehirde korku içinde, etrafı kollayarak sabahladı; karga gözlü, karınca burunlu Firavun askerlerinin ne zaman geleceğinden çekiniyordu."
      ],
      [
       "وَأَصْبَحَ خَائِفًا يَتَرَقَّبُ مَتَى تَجِيئُهُ الشُّرْطَةُ وَيَأْخُذُونَهُ إِلَى الْجَبَّارِ.",
       "Askerlerin ne zaman gelip kendisini zorbaya götüreceğini korkuyla bekliyordu."
      ],
      [
       "وَرَأَى الشُّرْطَةُ قَتِيلًا قِبْطِيًّا مِنْ خَدَمِ فِرْعَوْنَ فَفَتَّشُوا عَنِ الْقَاتِلِ وَلٰكِنَّهُمْ لَمْ يَهْتَدُوا إِلَيْهِ.",
       "Askerler, Firavun'un hizmetçilerinden öldürülmüş bir Kıptî gördüler; katili aradılar ama bulamadılar."
      ],
      [
       "وَمَنْ يَدُلُّهُمْ عَلَى الْقَاتِلِ وَلَا يَعْلَمُهُ إِلَّا مُوسَى وَالْإِسْرَائِيلِيُّ؟!",
       "Katili Mûsâ ve o İsrailoğlundan başka kimse bilmiyorken onlara kim yol gösterecekti?!"
      ],
      [
       "وَأَصْبَحَ الْقَتِيلُ حَدِيثَ الْبَلَدِ وَشُغْلَ الْمَدِينَةِ، كُلٌّ يَتَحَدَّثُ عَنْهُ وَلَا يَعْلَمُ قَاتِلَهُ.",
       "Öldürülen adam ülkenin dilinde, şehrin gündeminde oldu; herkes ondan söz ediyor ama katilini bilmiyordu."
      ],
      [
       "وَغَضِبَ فِرْعَوْنُ وَقَالَ لِلشُّرْطَةِ: لَا بُدَّ أَنْ تُفَتِّشُوا عَنِ الْقَاتِلِ.",
       "Firavun öfkelendi ve askerlere dedi: Katili mutlaka arayıp bulmalısınız."
      ]
     ]
    },
    {
     "n": 13,
     "title_ar": "يَظْهَرُ السِّرُّ",
     "title_tr": "Sır ortaya çıkıyor",
     "s": [
      [
       "وَفِي الْيَوْمِ الثَّانِي يَرَى مُوسَى ذٰلِكَ الْإِسْرَائِيلِيَّ فِي قِتَالٍ وَخِصَامٍ مَعَ قِبْطِيٍّ آخَرَ.",
       "Ertesi gün Mûsâ, o İsrailoğlunu başka bir Kıptîyle kavga ve çekişme içinde görür."
      ],
      [
       "وَمَا اسْتَحَى الْإِسْرَائِيلِيُّ بَلْ صَرَخَ وَنَادَى مُوسَى لِنُصْرَتِهِ.",
       "İsrailoğlu utanmadı; aksine bağırıp yardım için Mûsâ'yı çağırdı."
      ],
      [
       "قَالَ مُوسَى: إِنَّكَ رَجُلٌ وَقِحٌ، أَلَا تَزَالُ فِي قِتَالٍ وَجِدَالٍ مَعَ النَّاسِ وَلَا تَزَالُ تَصْرُخُ وَتُنَادِينِي.",
       "Mûsâ dedi: Sen yüzsüz bir adamsın; hâlâ insanlarla kavga edip tartışıyor, hâlâ bağırıp beni çağırıyorsun."
      ],
      [
       "أَلَا أَزَالُ أَنْصُرُكَ وَأُسَاعِدُكَ «إِنَّكَ لَغَوِيٌّ مُبِينٌ».",
       "Ben hep sana mı yardım edip arka çıkacağım? «Sen gerçekten apaçık bir azgınsın.»"
      ],
      [
       "وَلٰكِنْ أَرَادَ مُوسَى أَنْ يُؤَدِّبَ الْقِبْطِيَّ قَلِيلًا وَتَقَدَّمَ إِلَيْهِمَا.",
       "Ama Mûsâ Kıptîye biraz ders vermek istedi ve onlara doğru ilerledi."
      ],
      [
       "وَرَأَى الْإِسْرَائِيلِيُّ غَضَبَ مُوسَى وَسَمِعَ مَلَامَهُ.",
       "İsrailoğlu Mûsâ'nın öfkesini gördü ve azarını işitti."
      ],
      [
       "وَخَافَ أَنْ يَضْرِبَهُ مُوسَى فَتَكُونَ الْقَاضِيَةَ، كَمَا ضَرَبَ الْقِبْطِيَّ فَكَانَتِ الْقَاضِيَةَ.",
       "Kıptîye vurup öldürdüğü gibi Mûsâ'nın kendisine de vurup öldürmesinden korktu."
      ],
      [
       "«فَقَالَ يَا مُوسَى أَتُرِيدُ أَنْ تَقْتُلَنِي كَمَا قَتَلْتَ نَفْسًا بِالْأَمْسِ إِنْ تُرِيدُ إِلَّا أَنْ تَكُونَ جَبَّارًا فِي الْأَرْضِ وَمَا تُرِيدُ أَنْ تَكُونَ مِنَ الْمُصْلِحِينَ».",
       "«Dedi ki: Ey Mûsâ! Dün bir adamı öldürdüğün gibi beni de mi öldürmek istiyorsun? Sen yeryüzünde ancak bir zorba olmak istiyorsun, ıslah edenlerden olmak istemiyorsun.»"
      ],
      [
       "هُنَالِكَ عَرَفَ الْقِبْطِيُّ أَنَّ مُوسَى هُوَ قَاتِلُ أَمْسِ.",
       "İşte o zaman Kıptî, dünkü katilin Mûsâ olduğunu anladı."
      ],
      [
       "وَذَهَبَ الْقِبْطِيُّ وَأَخْبَرَ الشُّرْطَةَ بِأَنَّ مُوسَى هُوَ الْقَاتِلُ.",
       "Kıptî gidip askerlere katilin Mûsâ olduğunu haber verdi."
      ],
      [
       "وَوَصَلَ الْخَبَرُ إِلَى فِرْعَوْنَ فَغَضِبَ وَقَالَ: أَذٰلِكَ الْفَتَى رَبِيبُ الْقَصْرِ وَرَضِيعُ الْمُلْكِ؟",
       "Haber Firavun'a ulaştı; öfkelenip dedi: Sarayda büyüyen, saltanat sütüyle beslenen o genç mi?"
      ],
      [
       "وَلٰكِنَّ اللهَ أَرَادَ أَنْ يَنْجُوَ مُوسَى مِنْ شَرِّ فِرْعَوْنَ وَشُرْطَتِهِ.",
       "Ama Allah, Mûsâ'nın Firavun'un ve askerlerinin şerrinden kurtulmasını istedi."
      ],
      [
       "إِنَّ مُوسَى لَمْ يَقْصِدْ أَنْ يَقْتُلَ الْقِبْطِيَّ بَلْ ضَرَبَهُ ضَرْبَةً كَانَتِ الْقَاضِيَةَ.",
       "Mûsâ Kıptîyi öldürmeyi amaçlamamıştı; ona vurmuş, darbe öldürücü olmuştu."
      ],
      [
       "وَلٰكِنَّ فِرْعَوْنَ وَشُرْطَتَهُ لَا يُسَلِّمُونَ ذٰلِكَ وَلَا يَقْبَلُونَ لِمُوسَى عُذْرًا.",
       "Ama Firavun ve askerleri bunu kabul etmez, Mûsâ'dan hiçbir mazeret kabul etmezlerdi."
      ],
      [
       "إِنَّ اللهَ قَدْ قَدَّرَ أَنْ يَذْهَبَ مُلْكُ فِرْعَوْنَ عَلَى يَدِ مُوسَى، إِنَّ اللهَ قَدْ قَدَّرَ أَنْ يَكُونَ خَلَاصُ بَنِي إِسْرَائِيلَ عَلَى يَدِ مُوسَى.",
       "Allah, Firavun'un mülkünün Mûsâ eliyle yok olmasını, İsrailoğullarının kurtuluşunun da Mûsâ eliyle olmasını takdir etmişti."
      ],
      [
       "إِنَّ اللهَ قَدْ قَدَّرَ أَنْ يُخْرِجَ مُوسَى النَّاسَ مِنْ عِبَادَةِ الْعِبَادِ إِلَى عِبَادَةِ اللهِ تَعَالَى.",
       "Allah, Mûsâ'nın insanları kullara kulluktan yüce Allah'a kulluğa çıkarmasını takdir etmişti."
      ],
      [
       "وَكَيْفَ يَكُونُ ذٰلِكَ إِذَا وَصَلَتْ إِلَيْهِ يَدُ الشُّرْطَةِ الظَّالِمِينَ.",
       "Zalim askerlerin eli ona ulaşırsa bu nasıl olacaktı?"
      ],
      [
       "وَكَانَ رِجَالُ فِرْعَوْنَ وَوُزَرَاؤُهُ يَتَشَاوَرُونَ وَيَعْزِمُونَ عَلَى قَتْلِ مُوسَى.",
       "Firavun'un adamları ve vezirleri istişare ediyor, Mûsâ'yı öldürmeye karar veriyorlardı."
      ],
      [
       "وَكَانَ رَجُلٌ يَسْمَعُ كُلَّ ذٰلِكَ وَيَعْرِفُهُ فَجَاءَ إِلَى مُوسَى وَأَخْبَرَهُ بِالْخَبَرِ وَقَالَ: «اخْرُجْ إِنِّي لَكَ مِنَ النَّاصِحِينَ».",
       "Bütün bunları duyup bilen bir adam Mûsâ'ya gelip haberi verdi ve dedi: «(Şehirden) çık; ben senin iyiliğini isteyenlerdenim.»"
      ],
      [
       "«فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ قَالَ رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ».",
       "«Mûsâ korku içinde, etrafı kollayarak oradan çıktı. Dedi ki: Rabbim! Beni zalimler topluluğundan kurtar.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 7,
   "emoji": "🐑",
   "title_ar": "إِلَى مَدْيَنَ",
   "title_tr": "Medyen'e",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «مِنْ مِصْرَ إِلَى مَدْيَنَ», «فِي مَدْيَنَ», «الطَّلَبُ». Mûsâ yabancı bir ülkeye geldi; kimseyi tanımıyor. Sence orada ne oldu?",
     "options": [
      [
       "سَاعَدَ امْرَأَتَيْنِ فَدَعَاهُ أَبُوهُمَا",
       "İki kadına yardım etti, babaları da onu davet etti"
      ],
      [
       "أَخَذَتْهُ الشُّرْطَةُ",
       "Askerler onu yakaladı"
      ],
      [
       "رَجَعَ إِلَى مِصْرَ فِي الْحَالِ",
       "Hemen Mısır'a döndü"
      ]
     ]
    },
    "vocab": [
     [
      "بَادِيَةٌ",
      "çöl, kır",
      "🏜️"
     ],
     [
      "حُرِّيَّةٌ / عَدْلٌ",
      "özgürlük / adalet",
      "⚖️"
     ],
     [
      "بِئْرٌ",
      "kuyu",
      "🕳️"
     ],
     [
      "تَسْقِي",
      "sular",
      "💧"
     ],
     [
      "تَذُودُ",
      "(sudan) geri tutar",
      "✋"
     ],
     [
      "مَأْوًى",
      "sığınak, barınak",
      "🏠"
     ]
    ]
   },
   "stop": {
    "section": 15,
    "after": 9,
    "prompt_tr": "Kızlar dedi: «İnsanlar güçlü, biz zayıfız; babamız da çok yaşlı.» Sence Mûsâ ne yaptı?",
    "options": [
     [
      "سَقَى لَهُمَا",
      "Onlar için (hayvanları) suladı"
     ],
     [
      "تَرَكَهُمَا",
      "Onları bıraktı"
     ],
     [
      "طَلَبَ مِنْهُمَا مَالًا",
      "Onlardan para istedi"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "ذَهَبَ مُوسَى إِلَى مَدْيَنَ.",
     "وَجَدَ امْرَأَتَيْنِ عِنْدَ الْبِئْرِ.",
     "سَقَى لَهُمَا.",
     "دَعَا رَبَّهُ فِي الظِّلِّ.",
     "جَاءَتْهُ إِحْدَاهُمَا تَمْشِي عَلَى اسْتِحْيَاءٍ.",
     "قَالَ لَهُ الشَّيْخُ: لَا تَخَفْ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا ذَهَبَ مُوسَى إِلَى مَدْيَنَ؟",
      "qt": "Mûsâ neden Medyen'e gitti?",
      "o": [
       "لِأَنَّ يَدَ فِرْعَوْنَ لَا تَصِلُ إِلَيْهَا",
       "لِأَنَّ فِيهَا قُصُورًا",
       "لِأَنَّ أُمَّهُ هُنَاكَ"
      ],
      "ot": [
       "Çünkü Firavun'un eli oraya ulaşamıyordu",
       "Çünkü orada saraylar vardı",
       "Çünkü annesi oradaydı"
      ],
      "a": 0,
      "ev": [
       "14.2"
      ]
     },
     {
      "q": "لِمَاذَا كَانَتِ الْمَرْأَتَانِ لَا تَسْقِيَانِ؟",
      "qt": "İki kadın neden sulamıyordu?",
      "o": [
       "لِأَنَّ النَّاسَ أَقْوِيَاءُ وَهُمَا ضَعِيفَتَانِ",
       "لِأَنَّ الْبِئْرَ لَا مَاءَ فِيهَا",
       "لِأَنَّ الْغَنَمَ لَا تَعْطَشُ"
      ],
      "ot": [
       "Çünkü insanlar güçlü, onlar zayıftı",
       "Çünkü kuyuda su yoktu",
       "Çünkü koyunlar susamıyordu"
      ],
      "a": 0,
      "ev": [
       "15.7"
      ]
     },
     {
      "q": "مَاذَا قَالَ مُوسَى بَعْدَ أَنْ سَقَى لَهُمَا؟",
      "qt": "Mûsâ onlar için suladıktan sonra ne dedi?",
      "o": [
       "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
       "أَعْطُونِي أَجْرًا",
       "أَيْنَ أَبُوكُمَا؟"
      ],
      "ot": [
       "Rabbim, bana indireceğin her hayra muhtacım",
       "Bana ücret verin",
       "Babanız nerede?"
      ],
      "a": 0,
      "ev": [
       "15.13"
      ]
     },
     {
      "q": "لِمَاذَا تَعَجَّبَ الشَّيْخُ؟",
      "qt": "İhtiyar neden şaşırdı?",
      "o": [
       "لِأَنَّ بِنْتَيْهِ وَصَلَتَا قَبْلَ الْمِيعَادِ",
       "لِأَنَّ الْغَنَمَ ضَاعَتْ",
       "لِأَنَّ مُوسَى كَانَ مَلِكًا"
      ],
      "ot": [
       "Çünkü kızları vaktinden önce geldi",
       "Çünkü koyunlar kayboldu",
       "Çünkü Mûsâ bir kraldı"
      ],
      "a": 0,
      "ev": [
       "16.0"
      ]
     },
     {
      "q": "كَيْفَ مَشَى مُوسَى مَعَ الْبِنْتِ؟",
      "qt": "Mûsâ kızla nasıl yürüdü?",
      "o": [
       "أَمَامَهَا لِئَلَّا يَقَعَ نَظَرُهُ عَلَيْهَا",
       "وَرَاءَهَا يَتَكَلَّمُ مَعَهَا",
       "رَاكِبًا عَلَى فَرَسٍ"
      ],
      "ot": [
       "Gözü ona ilişmesin diye önünde",
       "Arkasında onunla konuşarak",
       "Bir ata binerek"
      ],
      "a": 0,
      "ev": [
       "16.12"
      ]
     }
    ],
    "focus": {
     "title": "İkil fiiller: قَالَتَا، تَسْقِيَانِ، تَرَكْتُمَا",
     "explain": "Özne iki kişi olunca fiil de ikil olur. Mazi: <span class='ar-inline'>قَالَتَا</span> (ikisi dedi, dişil), <span class='ar-inline'>ذَهَبَتَا</span>, <span class='ar-inline'>تَرَكْتُمَا</span> (ikiniz bıraktınız). Muzari <b>ـَانِ</b> ile biter: <span class='ar-inline'>تَذُودَانِ</span>, <span class='ar-inline'>تَنْتَظِرَانِ</span>, <span class='ar-inline'>تَسْقِيَانِ</span>.",
     "examples": [
      "وَوَجَدَ امْرَأَتَيْنِ تَذُودَانِ غَنَمَهُمَا وَتَنْتَظِرَانِ",
      "فَقَالَ: لِمَاذَا لَا تَسْقِيَانِ؟ قَالَتَا: …",
      "قَالَ الشَّيْخُ: وَأَيْنَ تَرَكْتُمَا الرَّجُلَ؟"
     ],
     "items": [
      {
       "q": "وَوَجَدَ امْرَأَتَيْنِ ____ غَنَمَهُمَا.",
       "o": [
        "تَذُودَانِ",
        "تَذُودُ",
        "يَذُودُونَ"
       ],
       "a": 0
      },
      {
       "q": "فَقَالَ: لِمَاذَا لَا ____؟",
       "o": [
        "تَسْقِيَانِ",
        "تَسْقِي",
        "يَسْقُونَ"
       ],
       "a": 0
      },
      {
       "q": "____: لَا يُمْكِنُ لَنَا أَنْ نَسْقِيَ غَنَمَنَا.",
       "o": [
        "قَالَتَا",
        "قَالَتْ",
        "قَالُوا"
       ],
       "a": 0
      },
      {
       "q": "قَالَ الشَّيْخُ: وَأَيْنَ ____ الرَّجُلَ؟",
       "o": [
        "تَرَكْتُمَا",
        "تَرَكْتِ",
        "تَرَكُوا"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "ذَهَبَ مُوسَى إِلَى {مَدْيَنَ}. وَوَجَدَ امْرَأَتَيْنِ عِنْدَ {الْبِئْرِ}. فَسَقَى {لَهُمَا}. ثُمَّ جَاءَتْهُ إِحْدَاهُمَا تَمْشِي عَلَى {اسْتِحْيَاءٍ}، وَقَالَ لَهُ الشَّيْخُ: لَا {تَخَفْ}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ: «يَا حَبَّذَا الْبَدَاوَةُ مَعَ الْحُرِّيَّةِ وَالْعَدْلِ»؟",
     "qt": "Kitap neden «Özgürlük ve adaletle birlikte bedevîlik ne güzeldir» diyor?",
     "model": "Mısır'da saraylar, çarşılar, büyük bir medeniyet vardı; ama orada çocuklar boğazlanıyor, insanlar köleleştiriliyordu. Medyen ise sade bir çöl ülkesiydi; fakat orada kimse korku içinde yatıp kalkmıyordu. Yazar, insanın mutluluğunun binalardan çok özgürlük ve adalete bağlı olduğunu vurguluyor."
    },
    "personal": {
     "q": "سَقَى مُوسَى لِلْمَرْأَتَيْنِ وَهُوَ لَا يَعْرِفُهُمَا. هَلْ سَاعَدْتَ أَحَدًا لَا تَعْرِفُهُ؟",
     "qt": "Mûsâ, tanımadığı iki kadına yardım etti. Sen tanımadığın birine yardım ettin mi? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "سَاعَدْتُ … فِي …",
      "حَمَلْتُ … لِـ …"
     ]
    },
    "retell": [
     "مَدْيَنُ",
     "بِئْرٌ",
     "امْرَأَتَانِ",
     "سَقَى لَهُمَا",
     "الظِّلُّ",
     "الشَّيْخُ"
    ],
    "quran": [
     {
      "ar": "وَلَمَّا تَوَجَّهَ تِلْقَاءَ مَدْيَنَ قَالَ عَسَى رَبِّي أَنْ يَهْدِيَنِي سَوَاءَ السَّبِيلِ",
      "ref": "Kasas 28:22",
      "tr": "Medyen'e doğru yönelince dedi: Umarım Rabbim beni doğru yola iletir.",
      "inText": "«وَلَمَّا تَوَجَّهَ تِلْقَاءَ مَدْيَنَ …»"
     },
     {
      "ar": "وَلَمَّا وَرَدَ مَاءَ مَدْيَنَ وَجَدَ عَلَيْهِ أُمَّةً مِنَ النَّاسِ يَسْقُونَ وَوَجَدَ مِنْ دُونِهِمُ امْرَأَتَيْنِ تَذُودَانِ ۖ قَالَ مَا خَطْبُكُمَا ۖ قَالَتَا لَا نَسْقِي حَتَّى يُصْدِرَ الرِّعَاءُ ۖ وَأَبُونَا شَيْخٌ كَبِيرٌ",
      "ref": "Kasas 28:23",
      "tr": "Medyen suyuna varınca orada hayvanlarını sulayan bir topluluk ve onların gerisinde (hayvanlarını) geri tutan iki kadın buldu. Derdiniz ne, dedi. Dediler: Çobanlar çekilip gitmedikçe sulayamayız; babamız da çok yaşlı bir ihtiyar.",
      "inText": "وَوَجَدَ امْرَأَتَيْنِ تَذُودَانِ غَنَمَهُمَا …"
     },
     {
      "ar": "فَسَقَى لَهُمَا ثُمَّ تَوَلَّى إِلَى الظِّلِّ فَقَالَ رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
      "ref": "Kasas 28:24",
      "tr": "Onlar için suladı, sonra gölgeye çekildi ve dedi: Rabbim! Bana indireceğin her hayra muhtacım.",
      "inText": "«ثُمَّ تَوَلَّى إِلَى الظِّلِّ …»"
     },
     {
      "ar": "فَجَاءَتْهُ إِحْدَاهُمَا تَمْشِي عَلَى اسْتِحْيَاءٍ قَالَتْ إِنَّ أَبِي يَدْعُوكَ لِيَجْزِيَكَ أَجْرَ مَا سَقَيْتَ لَنَا",
      "ref": "Kasas 28:25",
      "tr": "Derken iki kızdan biri utana utana yürüyerek ona geldi ve dedi: Babam, bizim için sulamanın karşılığını vermek üzere seni çağırıyor.",
      "inText": "«فَجَاءَتْهُ إِحْدَاهُمَا …»"
     }
    ]
   },
   "sections": [
    {
     "n": 14,
     "title_ar": "مِنْ مِصْرَ إِلَى مَدْيَنَ",
     "title_tr": "Mısır'dan Medyen'e",
     "s": [
      [
       "وَلٰكِنْ إِلَى أَيْنَ يَذْهَبُ مُوسَى، وَمِصْرُ كُلُّهُ مَمْلَكَةٌ لِفِرْعَوْنَ؟!",
       "Ama Mûsâ nereye gidecekti? Mısır'ın tamamı Firavun'un ülkesiydi?!"
      ],
      [
       "وَشُرْطَةُ فِرْعَوْنَ بِالْمِرْصَادِ، وَلَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ!",
       "Firavun'un askerleri pusudaydı; karga gözleri ve karınca burunları vardı!"
      ],
      [
       "أَلْهَمَ اللهُ مُوسَى أَنْ يَذْهَبَ إِلَى مَدْيَنَ الْبَلَدِ الْعَرَبِيِّ، حَيْثُ لَا تَصِلُ إِلَيْهِ يَدُ فِرْعَوْنَ.",
       "Allah, Mûsâ'ya Firavun'un elinin ulaşamadığı Arap diyarı Medyen'e gitmesini ilham etti."
      ],
      [
       "إِنَّ مَدْيَنَ بَادِيَةٌ وَقُرًى لَيْسَ فِيهَا مَدَنِيَّةُ مِصْرَ.",
       "Medyen bir çöl ve köylerden ibaretti; orada Mısır'ın medeniyeti yoktu."
      ],
      [
       "وَلَيْسَ فِيهَا قُصُورُ مِصْرَ وَأَسْوَاقُ مِصْرَ.",
       "Orada Mısır'ın sarayları ve çarşıları da yoktu."
      ],
      [
       "وَلٰكِنَّهَا بِلَادٌ سَعِيدَةٌ لِأَنَّهَا بَعِيدَةٌ مِنْ فِرْعَوْنَ.",
       "Ama mutlu bir diyardı, çünkü Firavun'dan uzaktı."
      ],
      [
       "وَإِنَّهَا سَعِيدَةٌ لِأَنَّهَا بِلَادٌ حُرَّةٌ لَيْسَتْ تَحْتَ حُكْمِ فِرْعَوْنَ.",
       "Mutluydu, çünkü Firavun'un yönetiminde olmayan hür bir diyardı."
      ],
      [
       "يَا حَبَّذَا الْبَدَاوَةُ مَعَ الْحُرِّيَّةِ وَالْعَدْلِ.",
       "Özgürlük ve adaletle birlikte bedevîlik ne güzeldir!"
      ],
      [
       "وَيَا شَقَاوَةَ الْمَدَنِيَّةِ مَعَ الْعُبُودِيَّةِ وَالذُّلِّ.",
       "Kölelik ve zilletle birlikte medeniyet ne acıdır!"
      ],
      [
       "هُنَالِكَ يُصْبِحُ كُلُّ أَحَدٍ لَا يَخَافُ سَطْوَةَ فِرْعَوْنَ وَقَهْرَهُ.",
       "Orada herkes Firavun'un baskısından ve zulmünden korkmadan sabahlar."
      ],
      [
       "وَهُنَالِكَ يَبِيتُ كُلُّ أَحَدٍ لَا يَخَافُ شُرْطَةَ فِرْعَوْنَ وَشَرَّهُ، هُنَالِكَ لَا تُذْبَحُ الْأَبْنَاءُ.",
       "Orada herkes Firavun'un askerlerinden ve şerrinden korkmadan geceler; orada oğullar boğazlanmaz."
      ],
      [
       "قَصَدَ مُوسَى مَدْيَنَ. وَخَرَجَ مِنْ مِصْرَ خَائِفًا يَتَرَقَّبُ أَيَتْبَعُهُ أَحَدٌ وَلٰكِنْ نَامَ عَنْهُ الشُّرْطَةُ.",
       "Mûsâ Medyen'e yöneldi. Peşinden biri geliyor mu diye kollayarak, korku içinde Mısır'dan çıktı; ama askerler ondan habersiz kaldı."
      ],
      [
       "خَرَجَ مُوسَى عَلَى اسْمِ اللهِ يَدْعُو اللهَ وَيَطْلُبُ مِنْهُ النَّصْرَ.",
       "Mûsâ Allah'ın adıyla yola çıktı; Allah'a dua ediyor ve O'ndan yardım istiyordu."
      ],
      [
       "«وَلَمَّا تَوَجَّهَ تِلْقَاءَ مَدْيَنَ قَالَ عَسَى رَبِّي أَنْ يَهْدِيَنِي سَوَاءَ السَّبِيلِ».",
       "«Medyen'e doğru yönelince dedi ki: Umarım Rabbim beni doğru yola iletir.»"
      ]
     ]
    },
    {
     "n": 15,
     "title_ar": "فِي مَدْيَنَ",
     "title_tr": "Medyen'de",
     "s": [
      [
       "وَصَلَ مُوسَى إِلَى مَدْيَنَ، لَا يَعْرِفُ أَحَدًا وَلَا يَعْرِفُهُ أَحَدٌ.",
       "Mûsâ Medyen'e vardı; ne o kimseyi tanıyordu ne de onu kimse tanıyordu."
      ],
      [
       "فَمَنْ يَأْوِي إِلَيْهِ فِي اللَّيْلِ؟ وَأَيْنَ يَبِيتُ؟",
       "Gece kimin yanına sığınacak? Nerede geceleyecekti?"
      ],
      [
       "تَحَيَّرَ مُوسَى وَلٰكِنَّهُ أَيْقَنَ أَنَّ اللهَ لَا يُضِيعُهُ!",
       "Mûsâ şaşırdı; ama Allah'ın kendisini yüzüstü bırakmayacağından emindi!"
      ],
      [
       "وَكَانَ هُنَالِكَ بِئْرٌ يَسْقِي عَلَيْهَا النَّاسُ غَنَمَهُمْ وَمَاشِيَتَهُمْ.",
       "Orada insanların koyunlarını ve hayvanlarını suladığı bir kuyu vardı."
      ],
      [
       "وَوَجَدَ امْرَأَتَيْنِ تَذُودَانِ غَنَمَهُمَا وَتَنْتَظِرَانِ أَنْ يَسْقِيَ النَّاسُ فَتَسْقِيَا.",
       "Koyunlarını (sudan) geri tutan ve insanların sulamasını bitirmesini bekleyen iki kadın gördü."
      ],
      [
       "رَأَى مُوسَى ذٰلِكَ وَفِي قَلْبِهِ حَنَانُ الْكَرِيمِ وَشَفَقَةُ الْأَبِ الرَّحِيمِ.",
       "Mûsâ bunu gördü; kalbinde cömert insanın sevecenliği ve merhametli bir babanın şefkati vardı."
      ],
      [
       "فَقَالَ: لِمَاذَا لَا تَسْقِيَانِ؟",
       "Dedi ki: Neden sulamıyorsunuz?"
      ],
      [
       "قَالَتَا: لَا يُمْكِنُ لَنَا أَنْ نَسْقِيَ غَنَمَنَا حَتَّى يَسْقِيَ النَّاسُ، لِأَنَّهُمْ أَقْوِيَاءُ وَنَحْنُ ضُعَفَاءُ، وَلِأَنَّهُمْ رِجَالٌ وَنَحْنُ إِنَاثٌ.",
       "Dediler: İnsanlar sulamayı bitirmeden koyunlarımızı sulayamayız; çünkü onlar güçlü, biz zayıfız; onlar erkek, biz kadınız."
      ],
      [
       "وَكَأَنَّمَا عَرَفَتَا أَنَّ مُوسَى سَيَسْأَلُهُمَا: فَلِمَاذَا لَا يَسْقِي أَحَدٌ مِنْ رِجَالِ بَيْتِكُنَّ؟",
       "Sanki Mûsâ'nın kendilerine «Peki evinizin erkeklerinden biri neden sulamıyor?» diye soracağını anlamışlardı."
      ],
      [
       "فَسَبَقَتَا وَقَالَتَا: «وَأَبُونَا شَيْخٌ كَبِيرٌ».",
       "Ondan önce davranıp dediler: «Babamız da çok yaşlı bir ihtiyar.»"
      ],
      [
       "وَهَاجَ فِي مُوسَى حَنَانُ الْكَرِيمِ وَسَقَى لَهُمَا وَذَهَبَتَا.",
       "Mûsâ'nın içinde cömert insanın sevecenliği kabardı; onlar için (hayvanları) suladı, onlar da gittiler."
      ],
      [
       "وَأَيْنَ يَذْهَبُ مُوسَى الْآنَ؟!",
       "Peki Mûsâ şimdi nereye gidecek?!"
      ],
      [
       "وَإِلَى أَيْنَ يَأْوِي فِي اللَّيْلِ وَأَيْنَ يَبِيتُ؟! إِنَّهُ لَا يَعْرِفُ أَحَدًا وَلَا يَعْرِفُهُ أَحَدٌ!",
       "Gece nereye sığınacak, nerede geceleyecek?! Ne o kimseyi tanıyor ne de onu kimse tanıyor!"
      ],
      [
       "«ثُمَّ تَوَلَّى إِلَى الظِّلِّ فَقَالَ رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ».",
       "«Sonra gölgeye çekildi ve dedi ki: Rabbim! Bana indireceğin her hayra muhtacım.»"
      ]
     ]
    },
    {
     "n": 16,
     "title_ar": "الطَّلَبُ",
     "title_tr": "Davet",
     "s": [
      [
       "وَوَصَلَتِ الْجَارِيَتَانِ إِلَى الْبَيْتِ قَبْلَ الْمِيعَادِ فَتَعَجَّبَ أَبُوهُمَا وَسَأَلَهُمَا عَنِ السَّبَبِ.",
       "İki genç kız eve vaktinden önce vardı; babaları şaşırdı ve onlara sebebini sordu."
      ],
      [
       "وَقَالَ لَهُمَا: مَا أَعْجَلَكُمَا يَا بِنْتَيَّ، وَكَيْفَ وَصَلْتُمَا الْيَوْمَ قَبْلَ الْمِيعَادِ؟",
       "Onlara dedi: Kızlarım, ne çabuk geldiniz! Bugün vaktinden önce nasıl vardınız?"
      ],
      [
       "قَالَتِ السَّيِّدَتَانِ: قَدْ قَدَّرَ اللهُ لَنَا رَجُلًا كَرِيمًا سَقَى لَنَا.",
       "İki hanım dedi: Allah bize cömert bir adam nasip etti; bizim için suladı."
      ],
      [
       "تَعَجَّبَ الشَّيْخُ وَعَرَفَ أَنَّهُ رَجُلٌ غَرِيبٌ لِأَنَّ أَحَدًا لَمْ يَرْحَمْهُنَّ يَوْمًا.",
       "İhtiyar şaşırdı ve onun yabancı biri olduğunu anladı; çünkü şimdiye kadar hiç kimse onlara acımamıştı."
      ],
      [
       "قَالَ الشَّيْخُ: وَأَيْنَ تَرَكْتُمَا الرَّجُلَ؟",
       "İhtiyar dedi: Peki adamı nerede bıraktınız?"
      ],
      [
       "قَالَتَا: تَرَكْنَاهُ فِي مَكَانِهِ، رَجُلٌ غَرِيبٌ لَيْسَ لَهُ مَأْوًى!",
       "Dediler: Onu yerinde bıraktık; sığınacak yeri olmayan bir yabancı!"
      ],
      [
       "قَالَ الشَّيْخُ: مَا أَحْسَنْتُمَا يَا بِنْتَيَّ، رَجُلٌ غَرِيبٌ قَدْ أَحْسَنَ إِلَيْنَا وَلَيْسَ لَهُ مَأْوًى فِي الْبَلَدِ.",
       "İhtiyar dedi: İyi etmediniz kızlarım; bize iyilik etmiş bir yabancı, üstelik bu memlekette sığınacak yeri yok."
      ],
      [
       "إِلَى مَنْ يَأْوِي فِي اللَّيْلِ، وَأَيْنَ يَبِيتُ؟!",
       "Gece kime sığınacak, nerede geceleyecek?!"
      ],
      [
       "إِنَّ لَهُ عَلَيْنَا حَقَّ الضِّيَافَةِ، وَإِنَّ لَهُ عَلَيْنَا حَقَّ الْإِحْسَانِ!",
       "Onun üzerimizde misafirlik hakkı var, iyiliğe karşılık hakkı var!"
      ],
      [
       "لِتَذْهَبْ إِحْدَاكُمَا وَتَأْخُذْهُ مَعَهَا.",
       "İkinizden biri gitsin ve onu yanında getirsin."
      ],
      [
       "«فَجَاءَتْهُ إِحْدَاهُمَا تَمْشِي عَلَى اسْتِحْيَاءٍ قَالَتْ إِنَّ أَبِي يَدْعُوكَ لِيَجْزِيَكَ أَجْرَ مَا سَقَيْتَ لَنَا».",
       "«Derken iki kızdan biri utana utana yürüyerek ona geldi ve dedi: Babam, bizim için (hayvanları) sulamanın karşılığını vermek üzere seni çağırıyor.»"
      ],
      [
       "وَعَرَفَ مُوسَى أَنَّ اللهَ قَدْ أَجَابَ دُعَاءَهُ وَبَوَّأَ لَهُ، فَمَا أَبَى.",
       "Mûsâ, Allah'ın duasını kabul ettiğini ve ona bir sığınak hazırladığını anladı; bu yüzden reddetmedi."
      ],
      [
       "وَخَرَجَ مُوسَى أَمَامَهَا لِئَلَّا يَقَعَ نَظَرُهُ عَلَيْهَا، وَمَشَى مُوسَى مَشْيَ الْكِرَامِ.",
       "Gözü ona ilişmesin diye Mûsâ önden yürüdü; soylu insanların yürüyüşüyle yürüdü."
      ],
      [
       "وَلَمَّا وَصَلَ إِلَى الشَّيْخِ سَأَلَهُ عَنِ اسْمِهِ وَوَطَنِهِ وَخَبَرِهِ.",
       "İhtiyarın yanına varınca ihtiyar ona adını, memleketini ve başından geçenleri sordu."
      ],
      [
       "وَأَخْبَرَ مُوسَى خَبَرَهُ، وَقَصَّ عَلَيْهِ قِصَّتَهُ.",
       "Mûsâ da başından geçenleri anlattı, ona hikâyesini aktardı."
      ],
      [
       "سَمِعَ الشَّيْخُ كُلَّ ذٰلِكَ بِصَبْرٍ وَهُدُوءٍ.",
       "İhtiyar bütün bunları sabırla ve sakince dinledi."
      ],
      [
       "وَلَمَّا انْتَهَى مُوسَى مِنْ قِصَّتِهِ «قَالَ لَا تَخَفْ نَجَوْتَ مِنَ الْقَوْمِ الظَّالِمِينَ».",
       "Mûsâ hikâyesini bitirince «Korkma, zalimler topluluğundan kurtuldun» dedi."
      ]
     ]
    }
   ]
  },
  {
   "id": 8,
   "emoji": "🔥",
   "title_ar": "الزَّوَاجُ وَالنَّارُ",
   "title_tr": "Evlilik ve ateş",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «الزَّوَاجُ», «إِلَى مِصْرَ». Kızlardan biri babasına Mûsâ'yı övdü. Sence nasıl biri olduğunu söyledi?",
     "options": [
      [
       "قَوِيٌّ أَمِينٌ",
       "Güçlü ve güvenilir"
      ],
      [
       "غَنِيٌّ جِدًّا",
       "Çok zengin"
      ],
      [
       "مَلِكٌ مِنْ مِصْرَ",
       "Mısır'dan bir kral"
      ]
     ]
    },
    "vocab": [
     [
      "اسْتَأْجَرَ",
      "ücretle tuttu",
      "🤝"
     ],
     [
      "أَمِينٌ",
      "güvenilir",
      "🛡️"
     ],
     [
      "صِهْرٌ",
      "damat",
      "💍"
     ],
     [
      "صَدَاقٌ",
      "mehir",
      "🎁"
     ],
     [
      "نَارٌ / قَبَسٌ",
      "ateş / kor parçası",
      "🔥"
     ],
     [
      "عَصًا",
      "asa, değnek",
      "🦯"
     ]
    ]
   },
   "stop": {
    "section": 18,
    "after": 6,
    "prompt_tr": "Soğuk ve karanlık bir gecede Mûsâ uzakta bir ateş gördü ve ona doğru yürüdü. Sence ateşin yanında ne buldu?",
    "options": [
     [
      "كَلَّمَهُ اللهُ",
      "Allah onunla konuştu"
     ],
     [
      "وَجَدَ رِجَالًا يَطْبُخُونَ",
      "Yemek pişiren adamlar buldu"
     ],
     [
      "لَمْ يَجِدْ شَيْئًا",
      "Hiçbir şey bulamadı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَتِ الْبِنْتُ: اسْتَأْجِرْهُ إِنَّهُ قَوِيٌّ أَمِينٌ.",
     "زَوَّجَ الشَّيْخُ مُوسَى إِحْدَى ابْنَتَيْهِ.",
     "قَضَى مُوسَى الْأَجَلَ وَسَارَ بِأَهْلِهِ.",
     "رَأَى نَارًا فِي الصَّحْرَاءِ.",
     "كَلَّمَهُ اللهُ فِي الْوَادِي الْمُقَدَّسِ.",
     "صَارَتِ الْعَصَا حَيَّةً."
    ],
    "questions": [
     {
      "q": "لِمَاذَا قَالَتِ الْبِنْتُ إِنَّ مُوسَى قَوِيٌّ؟",
      "qt": "Kız Mûsâ'nın güçlü olduğunu neden söyledi?",
      "o": [
       "لِأَنَّهُ رَفَعَ غِطَاءَ الْبِئْرِ وَحْدَهُ",
       "لِأَنَّهُ ضَرَبَ رَجُلًا",
       "لِأَنَّهُ كَانَ طَوِيلًا"
      ],
      "ot": [
       "Çünkü kuyunun kapağını tek başına kaldırdı",
       "Çünkü bir adama vurdu",
       "Çünkü uzun boyluydu"
      ],
      "a": 0,
      "ev": [
       "17.3"
      ]
     },
     {
      "q": "لِمَاذَا قَالَتْ إِنَّهُ أَمِينٌ؟",
      "qt": "Onun güvenilir olduğunu neden söyledi?",
      "o": [
       "لِأَنَّهُ مَشَى أَمَامَهَا وَلَمْ يَنْظُرْ إِلَيْهَا",
       "لِأَنَّهُ رَدَّ لَهَا مَالًا",
       "لِأَنَّهُ صَلَّى"
      ],
      "ot": [
       "Çünkü önünde yürüdü ve ona bakmadı",
       "Çünkü ona para iade etti",
       "Çünkü namaz kıldı"
      ],
      "a": 0,
      "ev": [
       "17.4"
      ]
     },
     {
      "q": "كَمْ سَنَةً كَانَ الصَّدَاقُ؟",
      "qt": "Mehir kaç yıl (çalışma) idi?",
      "o": [
       "ثَمَانِيَ سَنَوَاتٍ، وَعَشْرٌ إِنْ أَرَادَ",
       "سَنَةً وَاحِدَةً",
       "عِشْرِينَ سَنَةً"
      ],
      "ot": [
       "Sekiz yıl, isterse on",
       "Bir yıl",
       "Yirmi yıl"
      ],
      "a": 0,
      "ev": [
       "17.14",
       "17.16"
      ]
     },
     {
      "q": "لِمَاذَا ذَهَبَ مُوسَى إِلَى النَّارِ؟",
      "qt": "Mûsâ ateşe neden gitti?",
      "o": [
       "لِيَأْتِيَ بِقَبَسٍ أَوْ يَجِدَ هُدًى",
       "لِيَطْبُخَ طَعَامًا",
       "لِيَهْرُبَ مِنْ أَهْلِهِ"
      ],
      "ot": [
       "Bir kor getirmek ya da yol gösteren bulmak için",
       "Yemek pişirmek için",
       "Ailesinden kaçmak için"
      ],
      "a": 0,
      "ev": [
       "18.5"
      ]
     },
     {
      "q": "مَاذَا صَارَتِ الْعَصَا لَمَّا أَلْقَاهَا مُوسَى؟",
      "qt": "Mûsâ asayı atınca asa neye dönüştü?",
      "o": [
       "حَيَّةً تَسْعَى",
       "شَجَرَةً",
       "نَارًا"
      ],
      "ot": [
       "Koşan bir yılana",
       "Bir ağaca",
       "Ateşe"
      ],
      "a": 0,
      "ev": [
       "18.16"
      ]
     }
    ],
    "focus": {
     "title": "Karşılaştırma: أَفْعَلُ مِنْ («daha …»)",
     "explain": "<b>أَفْعَلُ</b> kalıbı + <b>مِنْ</b> «-den daha …» anlamı verir: <span class='ar-inline'>أَحَقُّ مِنْ هٰذَا الْفَتَى</span> (bu gençten daha layık), <span class='ar-inline'>أَفْضَلُ مِنْ هٰذَا الشَّابِّ</span> (bu gençten daha iyi). Önceki ünitelerde: <span class='ar-inline'>لَيْسَ الْبَيْتُ أَحْفَظَ لِلطِّفْلِ مِنَ الصُّنْدُوقِ</span>, <span class='ar-inline'>أَكْبَرَ مِنْ خَسَارَتِنَا</span>.",
     "examples": [
      "مَنْ ذَا يَكُونُ أَحَقَّ مِنْ هٰذَا الْفَتَى بِأَنْ يَكُونَ صِهْرًا لِي",
      "وَأَيْنَ أَجِدُ فِي الدُّنْيَا أَفْضَلَ مِنْ هٰذَا الشَّابِّ؟!",
      "وَلَيْسَ الْبَيْتُ أَحْفَظَ لِلطِّفْلِ مِنَ الصُّنْدُوقِ!"
     ],
     "items": [
      {
       "q": "مَنْ ذَا يَكُونُ ____ مِنْ هٰذَا الْفَتَى؟",
       "o": [
        "أَحَقَّ",
        "حَقًّا",
        "يَحِقُّ"
       ],
       "a": 0
      },
      {
       "q": "وَأَيْنَ أَجِدُ ____ مِنْ هٰذَا الشَّابِّ؟",
       "o": [
        "أَفْضَلَ",
        "فَاضِلٌ",
        "فَضْلٌ"
       ],
       "a": 0
      },
      {
       "q": "لَيْسَ الْبَيْتُ أَحْفَظَ لِلطِّفْلِ ____ الصُّنْدُوقِ.",
       "o": [
        "مِنَ",
        "إِلَى",
        "فِي"
       ],
       "a": 0
      },
      {
       "q": "«أَكْبَرُ مِنْ» = …",
       "o": [
        "-den daha büyük",
        "en küçük",
        "büyüdü"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَتِ الْبِنْتُ: إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ {الْأَمِينُ}. وَتَزَوَّجَ مُوسَى وَعَمِلَ {ثَمَانِيَ} سَنَوَاتٍ أَوْ عَشْرًا. ثُمَّ سَارَ بِأَهْلِهِ وَرَأَى {نَارًا}. وَهُنَاكَ {كَلَّمَ} اللهُ مُوسَى، وَصَارَتِ الْعَصَا {حَيَّةً}."
    },
    "think": {
     "q": "لِمَاذَا أَطَالَ مُوسَى الْكَلَامَ عَنْ عَصَاهُ؟",
     "qt": "Mûsâ asasından neden uzun uzun bahsetti?",
     "model": "Allah sadece «Sağ elindeki nedir?» diye sordu; kısa cevap «Asamdır» olurdu. Ama Mûsâ Rabbiyle konuşmanın tadını almıştı ve konuşmanın uzun sürmesini istedi; bu yüzden asanın faydalarını tek tek saydı. Bu, sade ve samimi bir sevginin ifadesidir."
    },
    "personal": {
     "q": "«إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ». مَا أَهَمُّ صِفَةٍ عِنْدَكَ فِي الصَّدِيقِ؟",
     "qt": "«Ücretle tuttuğunun en hayırlısı güçlü ve güvenilir olandır.» Sence bir arkadaşta en önemli özellik nedir? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "أَهَمُّ صِفَةٍ عِنْدِي …",
      "أُحِبُّ الصَّدِيقَ الْ…"
     ]
    },
    "retell": [
     "الْقَوِيُّ الْأَمِينُ",
     "صِهْرٌ",
     "ثَمَانِيَ حِجَجٍ",
     "نَارٌ",
     "الْوَادِي الْمُقَدَّسُ",
     "الْعَصَا وَالْيَدُ"
    ],
    "quran": [
     {
      "ar": "قَالَتْ إِحْدَاهُمَا يَا أَبَتِ اسْتَأْجِرْهُ ۖ إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ",
      "ref": "Kasas 28:26",
      "tr": "Kızlardan biri dedi: Babacığım, onu ücretle tut; ücretle tuttuğunun en hayırlısı güçlü ve güvenilir olandır.",
      "inText": "«يَا أَبَتِ اسْتَأْجِرْهُ …»"
     },
     {
      "ar": "قَالَ إِنِّي أُرِيدُ أَنْ أُنْكِحَكَ إِحْدَى ابْنَتَيَّ هَاتَيْنِ عَلَى أَنْ تَأْجُرَنِي ثَمَانِيَ حِجَجٍ ۖ فَإِنْ أَتْمَمْتَ عَشْرًا فَمِنْ عِنْدِكَ",
      "ref": "Kasas 28:27",
      "tr": "Dedi: Sekiz yıl bana çalışman karşılığında şu iki kızımdan birini sana nikâhlamak istiyorum; eğer on yıla tamamlarsan o senden bir lütuftur.",
      "inText": "«إِنِّي أُرِيدُ أَنْ أُنْكِحَكَ …»"
     },
     {
      "ar": "فَلَمَّا أَتَاهَا نُودِيَ يَا مُوسَى ۝ إِنِّي أَنَا رَبُّكَ فَاخْلَعْ نَعْلَيْكَ ۖ إِنَّكَ بِالْوَادِ الْمُقَدَّسِ طُوًى",
      "ref": "Tâhâ 20:11–12",
      "tr": "Oraya varınca seslenildi: Ey Mûsâ! Ben senin Rabbinim; ayakkabılarını çıkar, sen kutsal vadi Tuvâ'dasın.",
      "inText": "«فَلَمَّا أَتَاهَا نُودِيَ يَا مُوسَى …»"
     },
     {
      "ar": "وَمَا تِلْكَ بِيَمِينِكَ يَا مُوسَى ۝ قَالَ هِيَ عَصَايَ أَتَوَكَّأُ عَلَيْهَا وَأَهُشُّ بِهَا عَلَى غَنَمِي وَلِيَ فِيهَا مَآرِبُ أُخْرَى",
      "ref": "Tâhâ 20:17–18",
      "tr": "Sağ elindeki nedir, ey Mûsâ? Dedi: O benim asamdır; ona dayanırım, onunla koyunlarıma yaprak silkelerim; onda benim için başka faydalar da var.",
      "inText": "«وَمَا تِلْكَ بِيَمِينِكَ يَا مُوسَى»"
     }
    ]
   },
   "sections": [
    {
     "n": 17,
     "title_ar": "الزَّوَاجُ",
     "title_tr": "Evlilik",
     "s": [
      [
       "وَأَقَامَ مُوسَى عِنْدَهُمْ مَقَامَ ضَيْفٍ كَرِيمٍ، بَلْ حَلَّ مِنْهُمْ مَحَلَّ الْوَلَدِ الْعَزِيزِ.",
       "Mûsâ onların yanında değerli bir misafir gibi kaldı; hatta onlar için sevgili bir evlat yerine geçti."
      ],
      [
       "وَقَالَتْ سَيِّدَةٌ لِوَالِدِهَا يَوْمًا فِي بَسَاطَةٍ وَطَهَارَةٍ: «يَا أَبَتِ اسْتَأْجِرْهُ إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ».",
       "Kızlardan biri bir gün sadelik ve temizlikle babasına dedi: «Babacığım, onu ücretle tut; ücretle tuttuğunun en hayırlısı güçlü ve güvenilir olandır.»"
      ],
      [
       "قَالَ الشَّيْخُ: وَمَا عِلْمُكِ بِقُوَّتِهِ وَأَمَانَتِهِ يَا بِنْتِي؟",
       "İhtiyar dedi: Kızım, onun gücünü ve güvenilirliğini nereden biliyorsun?"
      ],
      [
       "قَالَتْ: أَمَّا قُوَّتُهُ فَلِأَنَّهُ رَفَعَ الْغِطَاءَ عَنِ الْبِئْرِ وَحْدَهُ، وَلَا يَرْفَعُهُ إِلَّا جَمَاعَةٌ.",
       "Dedi: Gücüne gelince, kuyunun kapağını tek başına kaldırdı; oysa onu ancak bir grup insan kaldırabilir."
      ],
      [
       "وَأَمَّا أَمَانَتُهُ يَا أَبَتِ فَلِأَنَّهُ مَشَى أَمَامِي لَا يَنْظُرُ إِلَيَّ طُولَ الطَّرِيقِ.",
       "Güvenilirliğine gelince babacığım, yol boyunca önümde yürüdü ve bana hiç bakmadı."
      ],
      [
       "وَلَا بُدَّ لِلْأَجِيرِ وَلَا بُدَّ لِلْخَادِمِ أَنْ يَكُونَ قَوِيًّا أَمِينًا.",
       "İşçinin de hizmetçinin de mutlaka güçlü ve güvenilir olması gerekir."
      ],
      [
       "فَإِذَا لَمْ يَكُنْ قَوِيًّا ضَعُفَ عَنِ الْعَمَلِ.",
       "Güçlü olmazsa işi yapmaya gücü yetmez."
      ],
      [
       "وَإِذَا لَمْ يَكُنْ أَمِينًا لَمْ تَنْفَعْنَا قُوَّتُهُ مَعَ خِيَانَتِهِ.",
       "Güvenilir olmazsa, hainliğiyle birlikte gücü bize fayda vermez."
      ],
      [
       "وَوَافَقَ كَلَامُ السَّيِّدَةِ هَوًى فِي قَلْبِ الشَّيْخِ وَلٰكِنَّهُ فَكَّرَ فِي الْمَسْأَلَةِ كَوَالِدٍ.",
       "Kızın sözü ihtiyarın gönlündeki bir isteğe denk geldi; ama o meseleyi bir baba gibi düşündü."
      ],
      [
       "وَفَكَّرَ فِي الْمَسْأَلَةِ كَشَيْخٍ عَاقِلٍ.",
       "Meseleyi akıllı bir ihtiyar gibi düşündü."
      ],
      [
       "قَالَ الشَّيْخُ فِي نَفْسِهِ: مَنْ ذَا يَكُونُ أَحَقَّ مِنْ هٰذَا الْفَتَى بِأَنْ يَكُونَ صِهْرًا لِي.",
       "İhtiyar içinden dedi: Bana damat olmaya bu gençten daha layık kim olabilir?"
      ],
      [
       "وَأَيْنَ أَجِدُ فِي الدُّنْيَا أَفْضَلَ مِنْ هٰذَا الشَّابِّ؟!",
       "Dünyada bu gençten daha iyisini nerede bulurum?!"
      ],
      [
       "أَمَّا فِي مَدْيَنَ فَلَمْ أَجِدْ أَحَدًا أَهْلًا لِذٰلِكَ!",
       "Medyen'de ise buna layık kimseyi bulamadım!"
      ],
      [
       "وَلَعَلَّ اللهَ قَدْ سَاقَ إِلَيَّ هٰذَا الْفَتَى لِيَكُونَ لِي صِهْرًا وَوَزِيرًا.",
       "Belki de Allah bu genci bana damat ve yardımcı olsun diye göndermiştir."
      ],
      [
       "فَقَالَ فِي وَقَارٍ وَشَفَقَةٍ وَحِكْمَةٍ: «إِنِّي أُرِيدُ أَنْ أُنْكِحَكَ إِحْدَى ابْنَتَيَّ هَاتَيْنِ عَلَى أَنْ تَأْجُرَنِي ثَمَانِيَ حِجَجٍ».",
       "Ağırbaşlılıkla, şefkatle ve hikmetle dedi: «Sekiz yıl bana çalışman karşılığında şu iki kızımdan birini sana nikâhlamak istiyorum.»"
      ],
      [
       "وَهٰذَا هُوَ صَدَاقُكَ، أَمَّا هٰذِهِ السَّنَوَاتُ الثَّمَانِي فَلَا بُدَّ مِنْهَا.",
       "Bu da senin mehrin olsun; bu sekiz yıl ise mutlaka gerekli."
      ],
      [
       "«فَإِنْ أَتْمَمْتَ عَشْرًا فَمِنْ عِنْدِكَ وَمَا أُرِيدُ أَنْ أَشُقَّ عَلَيْكَ سَتَجِدُنِي إِنْ شَاءَ اللهُ مِنَ الصَّالِحِينَ».",
       "«Eğer on yıla tamamlarsan, o senden bir lütuf olur. Sana zorluk çıkarmak istemem; inşallah beni iyilerden bulacaksın.»"
      ],
      [
       "خَافَ الشَّيْخُ أَنْ يَذْهَبَ الشَّابُّ بِبِنْتِهِ وَيَبْقَى وَحِيدًا.",
       "İhtiyar, gencin kızını alıp gitmesinden ve kendisinin yalnız kalmasından korktu."
      ],
      [
       "وَرَأَى الشَّيْخُ أَنْ يُجَرِّبَ الشَّابَّ أَيْضًا حَتَّى إِذَا اطْمَأَنَّ إِلَيْهِ وَدَّعَهُ.",
       "İhtiyar ayrıca genci denemek istedi; ona güveni tam olunca onu uğurlayacaktı."
      ],
      [
       "وَوَافَقَ مُوسَى عَلَى ذٰلِكَ وَرَأَى أَنَّ هٰذَا مِنَ اللهِ وَأَنَّ اللهَ سَيُبَارِكُ فِي ذٰلِكَ.",
       "Mûsâ bunu kabul etti; bunun Allah'tan olduğunu ve Allah'ın onu bereketli kılacağını düşündü."
      ],
      [
       "إِنَّ اللهَ قَدْ سَاقَهُ إِلَى مَدْيَنَ وَأَرْسَلَهُ إِلَى الشَّيْخِ وَأَلْقَى فِي قَلْبِهِ حَنَانًا وَحُبًّا.",
       "Allah onu Medyen'e sevk etmiş, ihtiyarın yanına göndermiş ve onun kalbine sevecenlik ve sevgi koymuştu."
      ],
      [
       "فَقَالَ: «ذٰلِكَ بَيْنِي وَبَيْنَكَ».",
       "Dedi ki: «Bu, benimle senin aranda (bir anlaşma)dır.»"
      ],
      [
       "وَلٰكِنْ أَرَادَ مُوسَى - بِحِكْمَتِهِ وَعَقْلِهِ - أَنْ يَحْفَظَ لَهُ حَقَّ الْخِيَارِ لَعَلَّهُ يَسْأَمُ فَقَالَ: «أَيَّمَا الْأَجَلَيْنِ قَضَيْتُ فَلَا عُدْوَانَ عَلَيَّ وَاللهُ عَلَى مَا نَقُولُ وَكِيلٌ».",
       "Ama Mûsâ, hikmeti ve aklıyla, belki ileride bıkarım diye seçme hakkını saklı tutmak istedi ve dedi: «İki süreden hangisini doldurursam doldurayım, bana haksızlık edilmesin. Söylediklerimize Allah vekildir.»"
      ]
     ]
    },
    {
     "n": 18,
     "title_ar": "إِلَى مِصْرَ",
     "title_tr": "Mısır'a doğru",
     "s": [
      [
       "«وَلَمَّا قَضَى مُوسَى الْأَجَلَ سَارَ بِأَهْلِهِ» وَوَدَّعَ الشَّيْخَ وَوَدَّعَهُ الشَّيْخُ وَدَعَا لَهُ:",
       "«Mûsâ süreyi doldurunca ailesiyle yola çıktı.» İhtiyarla vedalaştı; ihtiyar da onu uğurladı ve ona dua etti:"
      ],
      [
       "عَلَى بَرَكَةِ اللهِ يَا وَلَدِي! فِي أَمَانِ اللهِ يَا بِنْتِي!",
       "Allah'ın bereketiyle oğlum! Allah'a emanet ol kızım!"
      ],
      [
       "وَسَافَرَ مُوسَى بِأَهْلِهِ، وَاللَّيْلُ كُلُّهُ بَرْدٌ وَظَلَامٌ.",
       "Mûsâ ailesiyle yolculuğa çıktı; gece baştan başa soğuk ve karanlıktı."
      ],
      [
       "وَلٰكِنْ أَيْنَ النَّارُ فِي الصَّحْرَاءِ؟",
       "Ama çölde ateş nerede?"
      ],
      [
       "وَمَاذَا يَصْنَعَانِ إِذَا لَمْ يَجِدَا نَارًا يَصْطَلِيَانِ بِهَا، وَلَمْ يَجِدَا نُورًا يَهْتَدِيَانِ بِهِ؟!",
       "Isınacakları bir ateş, yollarını bulacakları bir ışık bulamazlarsa ne yapacaklardı?!"
      ],
      [
       "وَبَيْنَمَا هُمَا يَسِيرَانِ وَمُوسَى يَبْحَثُ عَنْ نَارٍ «إِذْ رَأَى نَارًا فَقَالَ لِأَهْلِهِ امْكُثُوا إِنِّي آنَسْتُ نَارًا لَعَلِّي آتِيكُمْ مِنْهَا بِقَبَسٍ أَوْ أَجِدُ عَلَى النَّارِ هُدًى».",
       "İkisi yürürken ve Mûsâ ateş ararken «birden bir ateş gördü ve ailesine dedi: Durun, ben bir ateş gördüm; belki ondan size bir kor getiririm ya da ateşin yanında bir yol gösteren bulurum.»"
      ],
      [
       "وَسَارَ مُوسَى قِبَلَ النَّارِ عَلَى جَنَاحِ الشَّوْقِ.",
       "Mûsâ özlem kanatlarıyla ateşe doğru yürüdü."
      ],
      [
       "«فَلَمَّا أَتَاهَا نُودِيَ يَا مُوسَى إِنِّي أَنَا رَبُّكَ فَاخْلَعْ نَعْلَيْكَ إِنَّكَ بِالْوَادِ الْمُقَدَّسِ طُوًى».",
       "«Oraya varınca ona seslenildi: Ey Mûsâ! Ben senin Rabbinim; ayakkabılarını çıkar, sen kutsal vadi Tuvâ'dasın.»"
      ],
      [
       "هُنَالِكَ كَلَّمَ اللهُ مُوسَى وَأَوْحَى إِلَيْهِ.",
       "İşte orada Allah Mûsâ ile konuştu ve ona vahyetti."
      ],
      [
       "«وَأَنَا اخْتَرْتُكَ فَاسْتَمِعْ لِمَا يُوحَى إِنَّنِي أَنَا اللهُ لَا إِلٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي إِنَّ السَّاعَةَ آتِيَةٌ».",
       "«Ben seni seçtim; şimdi vahyolunanı dinle. Şüphesiz ben Allah'ım, benden başka ilah yoktur; bana ibadet et ve beni anmak için namaz kıl. Kıyamet mutlaka gelecektir.»"
      ],
      [
       "وَكَانَ فِي يَدِ مُوسَى عَصًا كَانَ يَحْمِلُهَا وَيَسْتَعِينُ بِهَا.",
       "Mûsâ'nın elinde taşıdığı ve yardım aldığı bir asa vardı."
      ],
      [
       "فَقَالَ اللهُ تَعَالَى: «وَمَا تِلْكَ بِيَمِينِكَ يَا مُوسَى».",
       "Yüce Allah dedi: «Sağ elindeki nedir, ey Mûsâ?»"
      ],
      [
       "وَأَجَابَ مُوسَى فِي بَسَاطَةٍ وَسَذَاجَةٍ: «هِيَ عَصَايَ».",
       "Mûsâ sadelik ve saflıkla cevap verdi: «O benim asamdır.»"
      ],
      [
       "وَأَخَذَ مُوسَى يَعُدُّ فَوَائِدَ هٰذِهِ الْعَصَا فِي تَفْصِيلٍ لِأَنَّهُ أَرَادَ أَنْ يُكَلِّمَ اللهَ وَيَكُونَ حَدِيثُهُ طَوِيلًا.",
       "Mûsâ bu asanın faydalarını ayrıntılı saymaya başladı; çünkü Allah ile konuşmak ve konuşmasının uzun sürmesini istiyordu."
      ],
      [
       "«هِيَ عَصَايَ أَتَوَكَّأُ عَلَيْهَا وَأَهُشُّ بِهَا عَلَى غَنَمِي وَلِيَ فِيهَا مَآرِبُ أُخْرَى».",
       "«O benim asamdır; ona dayanırım, onunla koyunlarıma yaprak silkelerim; onda benim için başka faydalar da var.»"
      ],
      [
       "«قَالَ أَلْقِهَا يَا مُوسَى».",
       "«Allah dedi: Onu yere at, ey Mûsâ!»"
      ],
      [
       "«فَأَلْقَاهَا فَإِذَا هِيَ حَيَّةٌ تَسْعَى».",
       "«Mûsâ onu attı; bir de ne görsün, o koşan bir yılan!»"
      ],
      [
       "«قَالَ خُذْهَا وَلَا تَخَفْ سَنُعِيدُهَا سِيرَتَهَا الْأُولَى».",
       "«Allah dedi: Onu tut ve korkma; onu ilk hâline döndüreceğiz.»"
      ],
      [
       "وَمَنَحَ مُوسَى آيَةً ثَانِيَةً، هِيَ الْيَدُ الْبَيْضَاءُ فَقَالَ:",
       "Mûsâ'ya ikinci bir mucize, bembeyaz el mucizesi verdi ve dedi:"
      ],
      [
       "«وَاضْمُمْ يَدَكَ إِلَى جَنَاحِكَ تَخْرُجْ بَيْضَاءَ مِنْ غَيْرِ سُوءٍ آيَةً أُخْرَى».",
       "«Elini koltuğunun altına koy; başka bir mucize olarak kusursuz, bembeyaz çıksın.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 9,
   "emoji": "🗣️",
   "title_ar": "أَمَامَ فِرْعَوْنَ",
   "title_tr": "Firavun'un karşısında",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «اذْهَبْ إِلَى فِرْعَوْنَ إِنَّهُ طَغَى», «أَمَامَ فِرْعَوْنَ». Allah Mûsâ'ya Firavun'a gitmesini emretti. Sence Mûsâ'yı en çok ne endişelendirdi?",
     "options": [
      [
       "أَنَّهُ قَتَلَ مِنْهُمْ نَفْسًا",
       "Onlardan birini öldürmüş olması"
      ],
      [
       "أَنَّ الطَّرِيقَ طَوِيلٌ",
       "Yolun uzun olması"
      ],
      [
       "أَنَّهُ لَا يَعْرِفُ مِصْرَ",
       "Mısır'ı tanımaması"
      ]
     ]
    },
    "vocab": [
     [
      "طَغَى",
      "azdı, haddi aştı",
      "🌋"
     ],
     [
      "يُوَاجِهُ",
      "karşısına çıkar",
      "🧍"
     ],
     [
      "حُبْسَةٌ",
      "(dilde) tutukluk",
      "🤐"
     ],
     [
      "لَيِّنٌ",
      "yumuşak",
      "🪶"
     ],
     [
      "يَمُنُّ عَلَى",
      "başına kakar",
      "☝️"
     ],
     [
      "تَرْبِيَةٌ",
      "yetiştirme",
      "🌱"
     ]
    ]
   },
   "stop": {
    "section": 20,
    "after": 4,
    "prompt_tr": "Firavun dedi: «Seni biz büyütmedik mi? Sonra o yaptığın işi yaptın!» Sence Mûsâ nasıl cevap verdi?",
    "options": [
     [
      "أَجَابَ فِي صَرَاحَةٍ وَوَقَارٍ",
      "Açıkça ve ağırbaşlılıkla cevap verdi"
     ],
     [
      "كَذَبَ وَقَالَ: لَمْ أَفْعَلْ",
      "Yalan söyleyip «Yapmadım» dedi"
     ],
     [
      "سَكَتَ وَخَرَجَ",
      "Susup çıktı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "أَمَرَ اللهُ مُوسَى أَنْ يَذْهَبَ إِلَى فِرْعَوْنَ.",
     "خَافَ مُوسَى وَطَلَبَ أَنْ يُرْسَلَ مَعَهُ هَارُونُ.",
     "أَوْصَاهُمَا اللهُ بِالْقَوْلِ اللَّيِّنِ.",
     "جَاءَا إِلَى فِرْعَوْنَ يَدْعُوَانِهِ.",
     "مَنَّ فِرْعَوْنُ عَلَى مُوسَى بِالتَّرْبِيَةِ.",
     "أَجَابَ مُوسَى فِي صَرَاحَةٍ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا خَافَ مُوسَى أَنْ يَذْهَبَ إِلَى فِرْعَوْنَ؟",
      "qt": "Mûsâ Firavun'a gitmekten neden korktu?",
      "o": [
       "لِأَنَّهُ قَتَلَ مِنْهُمْ نَفْسًا",
       "لِأَنَّهُ لَا يُحِبُّ مِصْرَ",
       "لِأَنَّ هَارُونَ مَرِيضٌ"
      ],
      "ot": [
       "Çünkü onlardan birini öldürmüştü",
       "Çünkü Mısır'ı sevmiyordu",
       "Çünkü Hârûn hastaydı"
      ],
      "a": 0,
      "ev": [
       "19.8"
      ]
     },
     {
      "q": "مَنْ طَلَبَ مُوسَى أَنْ يُرْسِلَهُ اللهُ مَعَهُ؟",
      "qt": "Mûsâ Allah'tan yanında kimin gönderilmesini istedi?",
      "o": [
       "هَارُونَ",
       "الشَّيْخَ",
       "أُخْتَهُ"
      ],
      "ot": [
       "Hârûn'u",
       "İhtiyarı",
       "Kız kardeşini"
      ],
      "a": 0,
      "ev": [
       "19.12"
      ]
     },
     {
      "q": "كَيْفَ أَمَرَ اللهُ مُوسَى وَهَارُونَ أَنْ يُكَلِّمَا فِرْعَوْنَ؟",
      "qt": "Allah Mûsâ ile Hârûn'a Firavun'la nasıl konuşmalarını emretti?",
      "o": [
       "بِقَوْلٍ لَيِّنٍ",
       "بِصَوْتٍ عَالٍ وَغَضَبٍ",
       "بِالسَّيْفِ"
      ],
      "ot": [
       "Yumuşak bir sözle",
       "Yüksek sesle ve öfkeyle",
       "Kılıçla"
      ],
      "a": 0,
      "ev": [
       "19.18"
      ]
     },
     {
      "q": "بِمَاذَا مَنَّ فِرْعَوْنُ عَلَى مُوسَى؟",
      "qt": "Firavun Mûsâ'nın başına neyi kaktı?",
      "o": [
       "بِأَنَّهُ رَبَّاهُ فِيهِمْ وَلِيدًا",
       "بِأَنَّهُ أَعْطَاهُ مَالًا",
       "بِأَنَّهُ زَوَّجَهُ"
      ],
      "ot": [
       "Onu küçükken aralarında yetiştirmesini",
       "Ona mal vermesini",
       "Onu evlendirmesini"
      ],
      "a": 0,
      "ev": [
       "20.3"
      ]
     },
     {
      "q": "لِمَاذَا وَقَعَ مُوسَى بِيَدِ فِرْعَوْنَ؟",
      "qt": "Mûsâ neden Firavun'un eline düştü?",
      "o": [
       "لِأَنَّ فِرْعَوْنَ أَمَرَ بِقَتْلِ الْأَطْفَالِ",
       "لِأَنَّ أُمَّهُ بَاعَتْهُ",
       "لِأَنَّهُ ضَاعَ فِي السُّوقِ"
      ],
      "ot": [
       "Çünkü Firavun çocukların öldürülmesini emretmişti",
       "Çünkü annesi onu satmıştı",
       "Çünkü çarşıda kaybolmuştu"
      ],
      "a": 0,
      "ev": [
       "20.8"
      ]
     }
    ],
    "focus": {
     "title": "Mazi şahıs ekleri: فَعَلْتَ / فَعَلْتُ",
     "explain": "Mazi fiil şahsa göre ek alır: <b>ـتُ</b> «ben», <b>ـتَ</b> «sen (eril)», <b>ـتِ</b> «sen (dişil)». Firavun: <span class='ar-inline'>وَفَعَلْتَ فَعْلَتَكَ</span> (o işi yaptın). Mûsâ: <span class='ar-inline'>فَعَلْتُهَا</span> (onu ben yaptım), <span class='ar-inline'>فَفَرَرْتُ مِنْكُمْ</span> (sizden kaçtım), <span class='ar-inline'>قَتَلْتُ مِنْهُمْ نَفْسًا</span>. Sen için: <span class='ar-inline'>عَامَلْتَ قَوْمِي</span>, <span class='ar-inline'>كَفَلْتَ</span>, <span class='ar-inline'>عَبَّدْتَ</span>.",
     "examples": [
      "«وَفَعَلْتَ فَعْلَتَكَ الَّتِي فَعَلْتَ …»",
      "«قَالَ فَعَلْتُهَا إِذًا وَأَنَا مِنَ الضَّالِّينَ …»",
      "إِنَّكَ عَامَلْتَ قَوْمِي كُلَّهُمْ مُعَامَلَةَ الْحَمِيرِ"
     ],
     "items": [
      {
       "q": "قَالَ فِرْعَوْنُ: وَ____ فَعْلَتَكَ الَّتِي فَعَلْتَ.",
       "o": [
        "فَعَلْتَ",
        "فَعَلْتُ",
        "فَعَلُوا"
       ],
       "a": 0
      },
      {
       "q": "قَالَ مُوسَى: ____ إِذًا وَأَنَا مِنَ الضَّالِّينَ.",
       "o": [
        "فَعَلْتُهَا",
        "فَعَلْتَهَا",
        "فَعَلَهَا"
       ],
       "a": 0
      },
      {
       "q": "رَبِّ إِنِّي ____ مِنْهُمْ نَفْسًا.",
       "o": [
        "قَتَلْتُ",
        "قَتَلْتَ",
        "قَتَلُوا"
       ],
       "a": 0
      },
      {
       "q": "إِنَّكَ ____ قَوْمِي مُعَامَلَةَ الْحَمِيرِ.",
       "o": [
        "عَامَلْتَ",
        "عَامَلْتُ",
        "عَامَلَ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "أَمَرَ اللهُ مُوسَى أَنْ يَذْهَبَ إِلَى {فِرْعَوْنَ}. وَطَلَبَ مُوسَى أَنْ يُرْسِلَ اللهُ مَعَهُ {هَارُونَ}. وَقَالَ اللهُ: قُولَا لَهُ قَوْلًا {لَيِّنًا}. وَمَنَّ فِرْعَوْنُ عَلَى مُوسَى بِ{التَّرْبِيَةِ}، فَأَجَابَ مُوسَى فِي {صَرَاحَةٍ} وَوَقَارٍ."
    },
    "think": {
     "q": "لِمَاذَا أَمَرَ اللهُ مُوسَى أَنْ يُكَلِّمَ فِرْعَوْنَ قَوْلًا لَيِّنًا؟",
     "qt": "Allah Mûsâ'ya Firavun'la neden yumuşak konuşmasını emretti?",
     "model": "Firavun en büyük zorbaydı; ama Allah ona bile önce yumuşak bir dille gidilmesini istedi, «belki öğüt alır ya da korkar» diye. Sert söz insanı inada iter, yumuşak söz kalbe yol açar. Mûsâ da Firavun'un suçlamalarına öfkelenmeden, yalan söylemeden ve hatasını saklamadan cevap verdi."
    },
    "retell": [
     "اذْهَبْ إِلَى فِرْعَوْنَ",
     "هَارُونُ",
     "قَوْلًا لَيِّنًا",
     "أَلَمْ نُرَبِّكَ",
     "فَعَلْتُهَا",
     "عَبَّدْتَ بَنِي إِسْرَائِيلَ"
    ],
    "quran": [
     {
      "ar": "اذْهَبَا إِلَى فِرْعَوْنَ إِنَّهُ طَغَى ۝ فَقُولَا لَهُ قَوْلًا لَيِّنًا لَعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَى",
      "ref": "Tâhâ 20:43–44",
      "tr": "Firavun'a gidin, çünkü o azdı. Ona yumuşak söz söyleyin; belki öğüt alır ya da korkar.",
      "inText": "«فَقُولَا لَهُ قَوْلًا لَيِّنًا …»"
     },
     {
      "ar": "فَأْتِيَا فِرْعَوْنَ فَقُولَا إِنَّا رَسُولُ رَبِّ الْعَالَمِينَ ۝ أَنْ أَرْسِلْ مَعَنَا بَنِي إِسْرَائِيلَ",
      "ref": "Şuarâ 26:16–17",
      "tr": "Firavun'a gidin ve deyin: Biz âlemlerin Rabbinin elçisiyiz; İsrailoğullarını bizimle gönder.",
      "inText": "«فَأْتِيَا فِرْعَوْنَ …»"
     },
     {
      "ar": "قَالَ أَلَمْ نُرَبِّكَ فِينَا وَلِيدًا وَلَبِثْتَ فِينَا مِنْ عُمُرِكَ سِنِينَ",
      "ref": "Şuarâ 26:18",
      "tr": "Firavun dedi: Seni küçük bir çocukken aramızda yetiştirmedik mi? Ömrünün nice yılını aramızda geçirmedin mi?",
      "inText": "«أَلَمْ نُرَبِّكَ فِينَا وَلِيدًا …»"
     },
     {
      "ar": "وَتِلْكَ نِعْمَةٌ تَمُنُّهَا عَلَيَّ أَنْ عَبَّدْتَ بَنِي إِسْرَائِيلَ",
      "ref": "Şuarâ 26:22",
      "tr": "Başıma kaktığın o nimet, İsrailoğullarını köleleştirmen yüzündendir.",
      "inText": "«وَتِلْكَ نِعْمَةٌ تَمُنُّهَا عَلَيَّ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 19,
     "title_ar": "اذْهَبْ إِلَى فِرْعَوْنَ إِنَّهُ طَغَى",
     "title_tr": "Firavun'a git, çünkü o azdı",
     "s": [
      [
       "وَأَمَرَ اللهُ مُوسَى بَعْدَ ذٰلِكَ كُلِّهِ أَنْ يَشْرَعَ عَمَلَهُ الَّذِي خَلَقَهُ لِأَجْلِهِ.",
       "Bütün bunlardan sonra Allah Mûsâ'ya, kendisini yaratmış olduğu göreve başlamasını emretti."
      ],
      [
       "إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ، إِنَّ فِرْعَوْنَ أَفْسَدَ فِي الْأَرْضِ.",
       "Firavun yeryüzünde büyüklük tasladı; Firavun yeryüzünde bozgunculuk yaptı."
      ],
      [
       "إِنَّ قَوْمَ فِرْعَوْنَ كَفَرُوا بِاللهِ، إِنَّ قَوْمَ فِرْعَوْنَ أَفْسَدُوا فِي أَرْضِ اللهِ.",
       "Firavun'un kavmi Allah'ı inkâr etti; Firavun'un kavmi Allah'ın yeryüzünde bozgunculuk yaptı."
      ],
      [
       "إِنَّ اللهَ لَا يَرْضَى لِعِبَادِهِ الْكُفْرَ إِنَّ اللهَ لَا يُحِبُّ الْفَسَادَ فِي الْأَرْضِ.",
       "Allah kulları için küfre razı olmaz; Allah yeryüzünde bozgunculuğu sevmez."
      ],
      [
       "فَأَرَادَ اللهُ أَنْ يَذْهَبَ مُوسَى إِلَى فِرْعَوْنَ وَقَوْمِهِ «إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ».",
       "Allah, Mûsâ'nın Firavun'a ve kavmine gitmesini istedi; «çünkü onlar yoldan çıkmış bir kavimdi.»"
      ],
      [
       "لٰكِنْ كَيْفَ يَذْهَبُ مُوسَى إِلَى فِرْعَوْنَ وَكَيْفَ يُوَاجِهُ الْجَبَّارَ.",
       "Ama Mûsâ Firavun'a nasıl gidecek, o zorbanın karşısına nasıl çıkacaktı?"
      ],
      [
       "وَهُوَ الَّذِي قَتَلَ الْقِبْطِيَّ بِالْأَمْسِ وَمَا أَمْسِ بِبَعِيدٍ!",
       "Kıptîyi dün öldüren oydu; dün de o kadar uzak değildi!"
      ],
      [
       "وَهُوَ الَّذِي خَرَجَ مِنْ مِصْرَ خَائِفًا يَتَرَقَّبُ، وَيَعْرِفُهُ الشُّرْطَةُ وَيَعْرِفُهُ أَهْلُ الْقَصْرِ.",
       "Mısır'dan korku içinde, etrafı kollayarak çıkan oydu; askerler de saray halkı da onu tanıyordu."
      ],
      [
       "«قَالَ رَبِّ إِنِّي قَتَلْتُ مِنْهُمْ نَفْسًا فَأَخَافُ أَنْ يَقْتُلُونِ».",
       "«Dedi ki: Rabbim! Ben onlardan bir kişiyi öldürdüm; beni öldürmelerinden korkuyorum.»"
      ],
      [
       "وَذَكَرَ مُوسَى أَنَّ فِي لِسَانِهِ حُبْسَةً.",
       "Mûsâ dilinde bir tutukluk olduğunu da söyledi."
      ],
      [
       "وَلٰكِنَّ اللهَ كَانَ يَعْرِفُ ذٰلِكَ كُلَّهُ وَيُرِيدُ أَنْ يَذْهَبَ مُوسَى رَغْمَ ذٰلِكَ كُلِّهِ.",
       "Ama Allah bunların hepsini biliyordu ve bütün bunlara rağmen Mûsâ'nın gitmesini istiyordu."
      ],
      [
       "«وَإِذْ نَادَى رَبُّكَ مُوسَى أَنِ ائْتِ الْقَوْمَ الظَّالِمِينَ، قَوْمَ فِرْعَوْنَ أَلَا يَتَّقُونَ».",
       "«Hani Rabbin Mûsâ'ya seslenmişti: O zalimler topluluğuna, Firavun'un kavmine git! Hâlâ sakınmayacaklar mı?»"
      ],
      [
       "«قَالَ رَبِّ إِنِّي أَخَافُ أَنْ يُكَذِّبُونِ وَيَضِيقُ صَدْرِي وَلَا يَنْطَلِقُ لِسَانِي فَأَرْسِلْ إِلَى هَارُونَ».",
       "«Dedi ki: Rabbim! Beni yalanlamalarından korkuyorum; göğsüm daralıyor, dilim açılmıyor; Hârûn'a da (elçilik) gönder.»"
      ],
      [
       "«وَلَهُمْ عَلَيَّ ذَنْبٌ فَأَخَافُ أَنْ يَقْتُلُونِ».",
       "«Üstelik onların bana yükledikleri bir suç var; beni öldürmelerinden korkuyorum.»"
      ],
      [
       "«قَالَ كَلَّا فَاذْهَبَا بِآيَاتِنَا إِنَّا مَعَكُمْ مُسْتَمِعُونَ».",
       "«Allah dedi: Asla! Mucizelerimizle gidin; şüphesiz biz sizinle beraberiz, dinleyicileriz.»"
      ],
      [
       "«فَأْتِيَا فِرْعَوْنَ فَقُولَا إِنَّا رَسُولُ رَبِّ الْعَالَمِينَ».",
       "«Firavun'a gidin ve deyin: Biz âlemlerin Rabbinin elçisiyiz.»"
      ],
      [
       "«أَنْ أَرْسِلْ مَعَنَا بَنِي إِسْرَائِيلَ».",
       "«İsrailoğullarını bizimle gönder.»"
      ],
      [
       "وَأَوْصَى اللهُ مُوسَى وَهَارُونَ بِاللِّينِ وَالرِّفْقِ مَعَ فِرْعَوْنَ.",
       "Allah Mûsâ ile Hârûn'a Firavun'a karşı yumuşak ve nazik olmalarını tavsiye etti."
      ],
      [
       "إِنَّ اللهَ يُحِبُّ الرِّفْقَ مَعَ أَعْدَائِهِ إِلَى حَدٍّ فَقَالَ: «فَقُولَا لَهُ قَوْلًا لَيِّنًا لَعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَى».",
       "Allah düşmanlarına karşı bile belli bir ölçüde yumuşaklığı sever; bu yüzden dedi: «Ona yumuşak söz söyleyin; belki öğüt alır ya da korkar.»"
      ]
     ]
    },
    {
     "n": 20,
     "title_ar": "أَمَامَ فِرْعَوْنَ",
     "title_tr": "Firavun'un karşısında",
     "s": [
      [
       "وَجَاءَ مُوسَى وَهَارُونُ إِلَى فِرْعَوْنَ وَقَامَا فِي مَجْلِسِهِ يَدْعُوَانِهِ إِلَى اللهِ.",
       "Mûsâ ile Hârûn Firavun'a geldiler ve meclisinde ayağa kalkıp onu Allah'a davet ettiler."
      ],
      [
       "وَغَضِبَ الْجَبَّارُ مِنْ جَرَاءَةِ مُوسَى وَقَالَ فِي عُلُوٍّ وَكِبْرٍ:",
       "Zorba, Mûsâ'nın cesaretine öfkelendi ve büyüklenerek, kibirle dedi:"
      ],
      [
       "مَنْ تَكُونُ أَيُّهَا الشَّابُّ حَتَّى تَقُومَ فِي مَجْلِسِي وَتَعِظَنِي. أَلَسْتَ ذٰلِكَ الْغُلَامَ الَّذِي الْتَقَطْنَاهُ مِنَ الْبَحْرِ؟!",
       "Ey genç, sen kim oluyorsun da meclisimde kalkıp bana öğüt veriyorsun? Sen sudan aldığımız o çocuk değil misin?!"
      ],
      [
       "«أَلَمْ نُرَبِّكَ فِينَا وَلِيدًا وَلَبِثْتَ فِينَا مِنْ عُمُرِكَ سِنِينَ».",
       "«Seni küçük bir çocukken aramızda yetiştirmedik mi? Ömrünün nice yılını aramızda geçirmedin mi?»"
      ],
      [
       "«وَفَعَلْتَ فَعْلَتَكَ الَّتِي فَعَلْتَ وَأَنْتَ مِنَ الْكَافِرِينَ».",
       "«Ve sonunda o yaptığın işi yaptın; sen nankörlerdensin.»"
      ],
      [
       "وَلَمْ يَغْضَبْ مُوسَى وَلَمْ يَكْذِبْ وَلَمْ يَجْحَدْ وَلَمْ يَعْتَذِرْ بَلْ أَجَابَ فِي صَرَاحَةٍ وَوَقَارٍ.",
       "Mûsâ ne öfkelendi, ne yalan söyledi, ne inkâr etti, ne de bahane uydurdu; açıkça ve ağırbaşlılıkla cevap verdi."
      ],
      [
       "«قَالَ فَعَلْتُهَا إِذًا وَأَنَا مِنَ الضَّالِّينَ. فَفَرَرْتُ مِنْكُمْ لَمَّا خِفْتُكُمْ فَوَهَبَ لِي رَبِّي حُكْمًا وَجَعَلَنِي مِنَ الْمُرْسَلِينَ».",
       "«Dedi ki: Onu, henüz yolu bilmeyenlerden iken yaptım. Sizden korkunca sizden kaçtım; sonra Rabbim bana hikmet bağışladı ve beni elçilerden kıldı.»"
      ],
      [
       "وَقَالَ مُوسَى: إِنَّكَ يَا فِرْعَوْنُ تَمُنُّ عَلَيَّ بِالتَّرْبِيَةِ وَلٰكِنْ لَا تَنْظُرُ لِمَاذَا وَقَعْتُ بِيَدِكَ وَكَيْفَ أَمْكَنَكَ أَنْ تُرَبِّيَنِي؟",
       "Mûsâ dedi: Ey Firavun! Beni yetiştirdiğini başıma kakıyorsun; ama neden senin eline düştüğüme ve beni nasıl yetiştirebildiğine bakmıyorsun?"
      ],
      [
       "إِنَّكَ لَوْ لَمْ تَأْمُرْ بِقَتْلِ الْأَطْفَالِ لَمَا أَلْقَتْنِي أُمِّي فِي النِّيلِ وَمَا وَقَعْتُ بِيَدِكَ.",
       "Eğer çocukların öldürülmesini emretmeseydin, annem beni Nil'e bırakmaz, ben de senin eline düşmezdim."
      ],
      [
       "وَهَلْ هٰذِهِ نِعْمَةٌ تُعَدُّ وَتُذْكَرُ فِي جَنْبِ ظُلْمِكَ وَقَسَاوَتِكَ؟",
       "Senin zulmün ve katılığın yanında bu, sayılıp anılacak bir nimet mi?"
      ],
      [
       "إِنَّكَ عَامَلْتَ قَوْمِي كُلَّهُمْ مُعَامَلَةَ الْحَمِيرِ وَالدَّوَابِّ.",
       "Sen kavmimin hepsine eşek ve yük hayvanı muamelesi yaptın."
      ],
      [
       "وَكُنْتَ تَزْجُرُهُمْ زَجْرَ الْكِلَابِ.",
       "Onları köpek kovar gibi azarlıyordun."
      ],
      [
       "وَكُنْتَ تَسُومُهُمْ سُوءَ الْعَذَابِ.",
       "Onları işkencenin en kötüsüne uğratıyordun."
      ],
      [
       "فَأَيُّ فَضْلٍ لَكَ إِذَا كَفَلْتَ طِفْلًا مِنْهُمْ؟! وَذٰلِكَ أَيْضًا عَنْ جَهْلٍ وَخَطَإٍ!",
       "Onlardan bir çocuğa bakmışsan bunun ne üstünlüğü var?! Üstelik bu da bilmeden ve yanlışlıkla oldu!"
      ],
      [
       "«وَتِلْكَ نِعْمَةٌ تَمُنُّهَا عَلَيَّ أَنْ عَبَّدْتَ بَنِي إِسْرَائِيلَ».",
       "«Başıma kaktığın o nimet, İsrailoğullarını köleleştirmen yüzündendir.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 10,
   "emoji": "🐍",
   "title_ar": "رَبُّ الْعَالَمِينَ",
   "title_tr": "Âlemlerin Rabbi",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «الدَّعْوَةُ إِلَى اللهِ», «مُعْجِزَاتُ مُوسَى». Firavun «Âlemlerin Rabbi de ne?» diye soracak. Sence tartışma nasıl bitecek?",
     "options": [
      [
       "يُهَدِّدُ فِرْعَوْنُ مُوسَى وَيَجْمَعُ السَّحَرَةَ",
       "Firavun Mûsâ'yı tehdit edip sihirbazları toplayacak"
      ],
      [
       "يُؤْمِنُ فِرْعَوْنُ",
       "Firavun iman edecek"
      ],
      [
       "يَسْكُتُ مُوسَى",
       "Mûsâ susacak"
      ]
     ]
    },
    "vocab": [
     [
      "مُوقِنٌ",
      "kesin inanan",
      "✔️"
     ],
     [
      "الْمَشْرِقُ وَالْمَغْرِبُ",
      "doğu ve batı",
      "🧭"
     ],
     [
      "الْقُرُونُ الْأُولَى",
      "önceki nesiller",
      "⏳"
     ],
     [
      "مَسْجُونٌ",
      "hapsedilmiş",
      "⛓️"
     ],
     [
      "ثُعْبَانٌ",
      "büyük yılan, ejderha",
      "🐍"
     ],
     [
      "السَّحَرَةُ",
      "sihirbazlar",
      "🎩"
     ]
    ]
   },
   "stop": {
    "section": 22,
    "after": 2,
    "prompt_tr": "Firavun dedi: «Doğru söyleyenlerdensen getir onu!» Sence Mûsâ ne gösterdi?",
    "options": [
     [
      "أَلْقَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ",
      "Asasını attı, o bir ejderha oldu"
     ],
     [
      "أَعْطَاهُ كِتَابًا",
      "Ona bir kitap verdi"
     ],
     [
      "دَعَا النَّاسَ إِلَى الْقِتَالِ",
      "İnsanları savaşa çağırdı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "سَأَلَ فِرْعَوْنُ: وَمَا رَبُّ الْعَالَمِينَ؟",
     "قَالَ مُوسَى: رَبُّ السَّمَاوَاتِ وَالْأَرْضِ.",
     "قَالَ فِرْعَوْنُ: إِنَّ رَسُولَكُمْ لَمَجْنُونٌ.",
     "هَدَّدَ فِرْعَوْنُ مُوسَى بِالسِّجْنِ.",
     "أَلْقَى مُوسَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ.",
     "جَمَعَ فِرْعَوْنُ السَّحَرَةَ لِيَوْمِ الزِّينَةِ."
    ],
    "questions": [
     {
      "q": "مَاذَا قَالَ مُوسَى عَنْ رَبِّ الْعَالَمِينَ أَوَّلًا؟",
      "qt": "Mûsâ Âlemlerin Rabbi hakkında ilk olarak ne dedi?",
      "o": [
       "رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا",
       "رَبُّ مِصْرَ وَحْدَهَا",
       "رَبُّ بَنِي إِسْرَائِيلَ فَقَطْ"
      ],
      "ot": [
       "Göklerin, yerin ve ikisi arasındakilerin Rabbi",
       "Yalnızca Mısır'ın Rabbi",
       "Sadece İsrailoğullarının Rabbi"
      ],
      "a": 0,
      "ev": [
       "21.2"
      ]
     },
     {
      "q": "مَاذَا قَالَ فِرْعَوْنُ عَنْ مُوسَى لَمَّا اشْتَدَّ غَضَبُهُ؟",
      "qt": "Firavun öfkesi artınca Mûsâ hakkında ne dedi?",
      "o": [
       "إِنَّ رَسُولَكُمْ لَمَجْنُونٌ",
       "إِنَّهُ صَادِقٌ",
       "إِنَّهُ ابْنِي"
      ],
      "ot": [
       "Elçiniz kesinlikle bir deli",
       "O doğru söylüyor",
       "O benim oğlum"
      ],
      "a": 0,
      "ev": [
       "21.7"
      ]
     },
     {
      "q": "لِمَاذَا سَأَلَ فِرْعَوْنُ عَنِ الْقُرُونِ الْأُولَى؟",
      "qt": "Firavun önceki nesilleri neden sordu?",
      "o": [
       "لِيُثِيرَ غَضَبَ مَلَئِهِ عَلَى مُوسَى",
       "لِأَنَّهُ يُحِبُّ التَّارِيخَ",
       "لِيَتَعَلَّمَ الدِّينَ"
      ],
      "ot": [
       "İleri gelenleri Mûsâ'ya karşı kışkırtmak için",
       "Çünkü tarihi seviyordu",
       "Dini öğrenmek için"
      ],
      "a": 0,
      "ev": [
       "21.11"
      ]
     },
     {
      "q": "بِمَاذَا هَدَّدَ فِرْعَوْنُ مُوسَى؟",
      "qt": "Firavun Mûsâ'yı neyle tehdit etti?",
      "o": [
       "بِالسِّجْنِ",
       "بِالنَّفْيِ إِلَى مَدْيَنَ",
       "بِأَخْذِ عَصَاهُ"
      ],
      "ot": [
       "Hapisle",
       "Medyen'e sürmekle",
       "Asasını almakla"
      ],
      "a": 0,
      "ev": [
       "21.18"
      ]
     },
     {
      "q": "مَتَى كَانَ مِيعَادُ السَّحَرَةِ؟",
      "qt": "Sihirbazlarla buluşma ne zamandı?",
      "o": [
       "يَوْمَ الزِّينَةِ",
       "فِي اللَّيْلِ",
       "بَعْدَ سَنَةٍ"
      ],
      "ot": [
       "Bayram (süslenme) gününde",
       "Gece",
       "Bir yıl sonra"
      ],
      "a": 0,
      "ev": [
       "22.15"
      ]
     }
    ],
    "focus": {
     "title": "Şart: إِنْ كُنْتُمْ … («eğer … iseniz»)",
     "explain": "<b>إِنْ</b> + <b>كَانَ</b>'in mazi çekimi şart bildirir: <span class='ar-inline'>إِنْ كُنْتُمْ مُوقِنِينَ</span> (eğer kesin inanıyorsanız), <span class='ar-inline'>إِنْ كُنْتُمْ تَعْقِلُونَ</span> (eğer aklınızı kullanıyorsanız), <span class='ar-inline'>إِنْ كُنْتَ مِنَ الصَّادِقِينَ</span> (eğer doğru söyleyenlerdensen), <span class='ar-inline'>إِنْ كَانُوا هُمُ الْغَالِبِينَ</span>. Haber mansubdur (مُوقِنِينَ، الصَّادِقِينَ).",
     "examples": [
      "«رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا إِنْ كُنْتُمْ مُوقِنِينَ»",
      "«رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ وَمَا بَيْنَهُمَا إِنْ كُنْتُمْ تَعْقِلُونَ»",
      "«فَأْتِ بِهِ إِنْ كُنْتَ مِنَ الصَّادِقِينَ»"
     ],
     "items": [
      {
       "q": "رَبُّ السَّمَاوَاتِ وَالْأَرْضِ ____ كُنْتُمْ مُوقِنِينَ.",
       "o": [
        "إِنْ",
        "أَنْ",
        "إِنَّ"
       ],
       "a": 0
      },
      {
       "q": "فَأْتِ بِهِ إِنْ ____ مِنَ الصَّادِقِينَ.",
       "o": [
        "كُنْتَ",
        "كُنْتُمْ",
        "كَانُوا"
       ],
       "a": 0
      },
      {
       "q": "إِنْ كُنْتُمْ ____.",
       "o": [
        "مُوقِنِينَ",
        "مُوقِنُونَ",
        "مُوقِنٌ"
       ],
       "a": 0
      },
      {
       "q": "لَعَلَّنَا نَتَّبِعُ السَّحَرَةَ إِنْ ____ هُمُ الْغَالِبِينَ.",
       "o": [
        "كَانُوا",
        "كُنْتَ",
        "كَانَ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ مُوسَى: رَبُّ {السَّمَاوَاتِ} وَالْأَرْضِ. فَقَالَ فِرْعَوْنُ: إِنَّ رَسُولَكُمْ لَ{مَجْنُونٌ}. وَأَلْقَى مُوسَى {عَصَاهُ} فَإِذَا هِيَ ثُعْبَانٌ مُبِينٌ. فَجَمَعَ فِرْعَوْنُ {السَّحَرَةَ}، وَكَانَ يَوْمُ {الزِّينَةِ} هُوَ الْمِيعَادَ."
    },
    "think": {
     "q": "لِمَاذَا قَالَ فِرْعَوْنُ: «لَأَجْعَلَنَّكَ مِنَ الْمَسْجُونِينَ»؟",
     "qt": "Firavun neden «Seni zindana atarım» dedi?",
     "model": "Firavun tartışmada her soruyu sordu, ama Mûsâ her seferinde daha güçlü bir cevap verdi. Delil bulamayınca tehdide başvurdu. Metin bunu «âciz kalıp öfkelenen bütün kralların söylediği söz» diye niteliyor: Sözü bitenin elinde yalnızca güç kalır."
    },
    "retell": [
     "رَبُّ الْعَالَمِينَ",
     "الْمَشْرِقُ وَالْمَغْرِبُ",
     "الْقُرُونُ الْأُولَى",
     "الْمَسْجُونُونَ",
     "ثُعْبَانٌ وَيَدٌ بَيْضَاءُ",
     "يَوْمُ الزِّينَةِ"
    ],
    "quran": [
     {
      "ar": "قَالَ فِرْعَوْنُ وَمَا رَبُّ الْعَالَمِينَ ۝ قَالَ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا ۖ إِنْ كُنْتُمْ مُوقِنِينَ",
      "ref": "Şuarâ 26:23–24",
      "tr": "Firavun dedi: Âlemlerin Rabbi de ne? Mûsâ dedi: Eğer kesin inanan kimselerseniz, O göklerin, yerin ve ikisi arasındakilerin Rabbidir.",
      "inText": "«وَمَا رَبُّ الْعَالَمِينَ» …"
     },
     {
      "ar": "قَالَ فَمَا بَالُ الْقُرُونِ الْأُولَى ۝ قَالَ عِلْمُهَا عِنْدَ رَبِّي فِي كِتَابٍ ۖ لَا يَضِلُّ رَبِّي وَلَا يَنْسَى",
      "ref": "Tâhâ 20:51–52",
      "tr": "Firavun dedi: Peki önceki nesillerin durumu ne olacak? Mûsâ dedi: Onların bilgisi Rabbimin katında bir kitaptadır; Rabbim ne yanılır ne unutur.",
      "inText": "«عِلْمُهَا عِنْدَ رَبِّي فِي كِتَابٍ …»"
     },
     {
      "ar": "قَالَ لَئِنِ اتَّخَذْتَ إِلٰهًا غَيْرِي لَأَجْعَلَنَّكَ مِنَ الْمَسْجُونِينَ",
      "ref": "Şuarâ 26:29",
      "tr": "Firavun dedi: Andolsun, benden başka bir ilah edinirsen seni mutlaka zindana atılanlardan ederim.",
      "inText": "«لَئِنِ اتَّخَذْتَ إِلٰهًا غَيْرِي …»"
     },
     {
      "ar": "فَأَلْقَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُبِينٌ ۝ وَنَزَعَ يَدَهُ فَإِذَا هِيَ بَيْضَاءُ لِلنَّاظِرِينَ",
      "ref": "Şuarâ 26:32–33",
      "tr": "Mûsâ asasını attı; o apaçık bir ejderha oluverdi. Elini çıkardı; bakanlar için bembeyaz oluverdi.",
      "inText": "«فَأَلْقَى مُوسَى عَصَاهُ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 21,
     "title_ar": "الدَّعْوَةُ إِلَى اللهِ",
     "title_tr": "Allah'a davet",
     "s": [
      [
       "وَعَجَزَ فِرْعَوْنُ وَلَمْ يَجِدْ جَوَابًا، فَأَرَادَ أَنْ يَتَخَلَّصَ فَقَالَ:",
       "Firavun âciz kaldı ve bir cevap bulamadı; işin içinden sıyrılmak istedi ve dedi:"
      ],
      [
       "«وَمَا رَبُّ الْعَالَمِينَ» الَّذِي أَسْمَعُكَ تَذْكُرُهُ؟",
       "«Âlemlerin Rabbi de ne?» Senin andığını duyduğum o şey ne?"
      ],
      [
       "«قَالَ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا إِنْ كُنْتُمْ مُوقِنِينَ».",
       "«Mûsâ dedi: Eğer kesin inanan kimselerseniz, O göklerin, yerin ve ikisi arasındakilerin Rabbidir.»"
      ],
      [
       "غَضِبَ فِرْعَوْنُ مِنْ هٰذَا الْجَوَابِ وَأَرَادَ أَنْ يَغْضَبَ أَهْلُ الْمَجْلِسِ وَيَتَعَجَّبُوا.",
       "Firavun bu cevaba öfkelendi ve meclistekilerin de öfkelenip şaşırmasını istedi."
      ],
      [
       "«فَقَالَ لِمَنْ حَوْلَهُ أَلَا تَسْتَمِعُونَ»؟",
       "«Etrafındakilere dedi: Duyuyor musunuz?»"
      ],
      [
       "وَلَمْ يَقْطَعْ مُوسَى الْكَلَامَ بَلْ ضَرَبَ فِرْعَوْنَ ضَرْبَةً ثَانِيَةً.",
       "Mûsâ sözünü kesmedi; aksine Firavun'a ikinci bir darbe indirdi."
      ],
      [
       "«قَالَ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ».",
       "«Dedi ki: O sizin de Rabbiniz, önceki atalarınızın da Rabbidir.»"
      ],
      [
       "وَاشْتَدَّ غَضَبُ فِرْعَوْنَ وَلَمْ يَصْبِرْ وَقَالَ: «إِنَّ رَسُولَكُمُ الَّذِي أُرْسِلَ إِلَيْكُمْ لَمَجْنُونٌ».",
       "Firavun'un öfkesi şiddetlendi, sabredemedi ve dedi: «Size gönderilen bu elçiniz kesinlikle bir deli!»"
      ],
      [
       "وَلَمْ يَقْطَعْ مُوسَى الْكَلَامَ وَضَرَبَ فِرْعَوْنَ ضَرْبَةً ثَالِثَةً.",
       "Mûsâ sözünü kesmedi ve Firavun'a üçüncü bir darbe indirdi."
      ],
      [
       "«قَالَ رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ وَمَا بَيْنَهُمَا إِنْ كُنْتُمْ تَعْقِلُونَ».",
       "«Dedi ki: Eğer aklınızı kullanıyorsanız, O doğunun, batının ve ikisi arasındakilerin Rabbidir.»"
      ],
      [
       "وَأَرَادَ فِرْعَوْنُ أَنْ يَشْغَلَ مُوسَى عَنْ هٰذَا الْمَوْضُوعِ الْمُرِّ.",
       "Firavun, Mûsâ'yı bu acı konudan uzaklaştırmak istedi."
      ],
      [
       "وَأَرَادَ فِرْعَوْنُ أَنْ يُثِيرَ غَضَبَ مَلَئِهِ. فَقَالَ: «وَمَا بَالُ الْقُرُونِ الْأُولَى؟!»",
       "Firavun ileri gelenlerinin öfkesini kışkırtmak istedi ve dedi: «Peki önceki nesillerin durumu ne olacak?!»"
      ],
      [
       "قَالَ فِرْعَوْنُ فِي نَفْسِهِ: إِذَا قَالَ مُوسَى إِنَّهُمْ كَانُوا عَلَى الْحَقِّ، قُلْتُ: فَإِنَّهُمْ كَانُوا يَعْبُدُونَ الْأَصْنَامَ!",
       "Firavun içinden dedi: Eğer Mûsâ «Onlar hak üzereydi» derse, «Ama onlar putlara tapıyordu!» derim."
      ],
      [
       "وَإِذَا قَالَ مُوسَى إِنَّهُمْ كَانُوا فِي ضَلَالَةٍ وَسَفَاهَةٍ، غَضِبَ أَهْلُ الْمَجْلِسِ وَقَالُوا إِنَّ مُوسَى سَبَّ آبَاءَنَا.",
       "Eğer «Onlar sapıklık ve akılsızlık içindeydi» derse, meclistekiler öfkelenir ve «Mûsâ atalarımıza sövdü» derler."
      ],
      [
       "وَلٰكِنَّ مُوسَى كَانَ أَعْقَلَ مِنْ فِرْعَوْنَ وَكَانَ مُوسَى عَلَى نُورٍ مِنْ رَبِّهِ، فَقَالَ:",
       "Ama Mûsâ Firavun'dan daha akıllıydı ve Rabbinden gelen bir nur üzereydi; dedi ki:"
      ],
      [
       "«عِلْمُهَا عِنْدَ رَبِّي فِي كِتَابٍ لَا يَضِلُّ رَبِّي وَلَا يَنْسَى».",
       "«Onların bilgisi Rabbimin katında bir kitaptadır. Rabbim ne yanılır ne unutur.»"
      ],
      [
       "ثُمَّ أَنْشَأَ مُوسَى يَقُولُ مَا كَانَ فِرْعَوْنُ يَفِرُّ مِنْهُ وَيَتَخَلَّصُ: «لَا يَضِلُّ رَبِّي وَلَا يَنْسَى، الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا وَسَلَكَ لَكُمْ فِيهَا سُبُلًا وَأَنْزَلَ مِنَ السَّمَاءِ مَاءً».",
       "Sonra Mûsâ, Firavun'un kaçıp sıyrılmaya çalıştığı konuyu anlatmaya başladı: «Rabbim ne yanılır ne unutur. O, yeryüzünü size beşik yapan, orada sizin için yollar açan ve gökten su indirendir.»"
      ],
      [
       "وَتَحَيَّرَ فِرْعَوْنُ وَبُهِتَ وَلَمْ يَدْرِ مَا يَقُولُ فَقَالَ مَا تَقُولُهُ الْمُلُوكُ كُلُّهُمْ إِذَا عَجَزُوا وَغَضِبُوا.",
       "Firavun şaşırdı, apışıp kaldı ve ne diyeceğini bilemedi; bütün kralların âciz kalıp öfkelendiklerinde söylediğini söyledi."
      ],
      [
       "«قَالَ لَئِنِ اتَّخَذْتَ إِلٰهًا غَيْرِي لَأَجْعَلَنَّكَ مِنَ الْمَسْجُونِينَ».",
       "«Dedi ki: Andolsun, benden başka bir ilah edinirsen seni mutlaka zindana atılanlardan ederim!»"
      ]
     ]
    },
    {
     "n": 22,
     "title_ar": "مُعْجِزَاتُ مُوسَى",
     "title_tr": "Mûsâ'nın mucizeleri",
     "s": [
      [
       "وَلَمَّا أَطْلَقَ فِرْعَوْنُ سَهْمَهُ، أَرَادَ مُوسَى أَنْ يَرْمِيَهُ بِسَهْمِ اللهِ.",
       "Firavun okunu atınca Mûsâ da ona Allah'ın okuyla karşılık vermek istedi."
      ],
      [
       "«قَالَ أَوَلَوْ جِئْتُكَ بِشَيْءٍ مُبِينٍ؟!»",
       "«Dedi ki: Sana apaçık bir şey getirsem de mi?!»"
      ],
      [
       "«قَالَ فَأْتِ بِهِ إِنْ كُنْتَ مِنَ الصَّادِقِينَ».",
       "«Firavun dedi: Doğru söyleyenlerdensen getir onu!»"
      ],
      [
       "«فَأَلْقَى مُوسَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُبِينٌ».",
       "«Mûsâ asasını attı; bir de ne görsünler, o apaçık bir ejderha!»"
      ],
      [
       "«وَنَزَعَ يَدَهُ فَإِذَا هِيَ بَيْضَاءُ لِلنَّاظِرِينَ».",
       "«Elini (koynundan) çıkardı; bakanlar için bembeyaz!»"
      ],
      [
       "وَوَجَدَ فِرْعَوْنُ مَقَالًا يَقُولُهُ لِجُلَسَائِهِ.",
       "Firavun meclisindekilere söyleyecek bir söz buldu."
      ],
      [
       "«قَالَ لِلْمَلَإِ حَوْلَهُ إِنَّ هٰذَا لَسَاحِرٌ عَلِيمٌ».",
       "«Etrafındaki ileri gelenlere dedi: Bu gerçekten çok bilgili bir sihirbaz!»"
      ],
      [
       "وَوَافَقَ أَهْلُ الْمَجْلِسِ «قَالُوا إِنَّ هٰذَا لَسِحْرٌ مُبِينٌ».",
       "Meclistekiler de ona katıldı: «Bu apaçık bir sihirdir» dediler."
      ],
      [
       "«قَالَ مُوسَى أَتَقُولُونَ لِلْحَقِّ لَمَّا جَاءَكُمْ أَسِحْرٌ هٰذَا وَلَا يُفْلِحُ السَّاحِرُونَ».",
       "«Mûsâ dedi: Size gelen hak için böyle mi diyorsunuz? Bu sihir mi? Sihirbazlar asla kurtuluşa eremez.»"
      ],
      [
       "وَرَمَى فِرْعَوْنُ مُوسَى بِسَهْمٍ آخَرَ فَقَالَ: «قَالُوا أَجِئْتَنَا لِتَلْفِتَنَا عَمَّا وَجَدْنَا عَلَيْهِ آبَاءَنَا وَتَكُونَ لَكُمَا الْكِبْرِيَاءُ فِي الْأَرْضِ وَمَا نَحْنُ لَكُمَا بِمُؤْمِنِينَ».",
       "Firavun Mûsâ'ya başka bir ok attı: «Dediler ki: Bizi atalarımızı üzerinde bulduğumuz yoldan çevirmek ve yeryüzünde büyüklük ikinizin olsun diye mi geldin? Biz size inanacak değiliz.»"
      ],
      [
       "وَأَرَادَ فِرْعَوْنُ أَنْ يُخَوِّفَ الْمَلَأَ مِنْ مُوسَى فِعْلَ الْمُلُوكِ.",
       "Firavun, kralların yaptığı gibi, ileri gelenleri Mûsâ'dan korkutmak istedi."
      ],
      [
       "فَقَالَ: «يُرِيدُ أَنْ يُخْرِجَكُمْ مِنْ أَرْضِكُمْ بِسِحْرِهِ فَمَاذَا تَأْمُرُونَ».",
       "Dedi ki: «Sihriyle sizi yurdunuzdan çıkarmak istiyor; ne dersiniz?»"
      ],
      [
       "أَشَارَ الْمَلَأُ عَلَى الْمَلِكِ أَنْ يَجْمَعَ السَّحَرَةَ مِنْ مَمْلَكَتِهِ وَيَرْمِيَ بِهِمْ مُوسَى.",
       "İleri gelenler krala, ülkesindeki sihirbazları toplayıp onları Mûsâ'nın karşısına çıkarmasını önerdi."
      ],
      [
       "وَهٰكَذَا كَانَ: نُودِيَ فِي مَمْلَكَةِ مِصْرَ «أَلَا مَنْ كَانَ يَعْرِفُ السِّحْرَ فَلْيَحْضُرْ إِلَى الْمَلِكِ».",
       "Ve öyle oldu; Mısır ülkesinde ilan edildi: «Sihir bilen herkes kralın huzuruna gelsin!»"
      ],
      [
       "وَاجْتَمَعَ السَّحَرَةُ مِنْ كُلِّ نَاحِيَةٍ مِنْ نَوَاحِي الْمَمْلَكَةِ.",
       "Sihirbazlar ülkenin dört bir yanından toplandı."
      ],
      [
       "وَكَانَ يَوْمُ الزِّينَةِ هُوَ الْمِيعَادَ.",
       "Buluşma günü bayram (süslenme) günüydü."
      ],
      [
       "«وَقِيلَ لِلنَّاسِ هَلْ أَنْتُمْ مُجْتَمِعُونَ، لَعَلَّنَا نَتَّبِعُ السَّحَرَةَ إِنْ كَانُوا هُمُ الْغَالِبِينَ»؟",
       "«İnsanlara denildi: Toplanıyor musunuz? Galip gelirlerse sihirbazlara uyarız belki.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 11,
   "emoji": "🏟️",
   "title_ar": "يَوْمُ الزِّينَةِ",
   "title_tr": "Bayram günü",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «إِلَى الْمَيْدَانِ», «بَيْنَ الْحَقِّ وَالْبَاطِلِ». Mısır'ın en ünlü sihirbazları meydanda. Sence kim kazanacak?",
     "options": [
      [
       "مُوسَى، وَيُؤْمِنُ السَّحَرَةُ",
       "Mûsâ; sihirbazlar da iman edecek"
      ],
      [
       "السَّحَرَةُ",
       "Sihirbazlar"
      ],
      [
       "لَا أَحَدَ",
       "Hiç kimse"
      ]
     ]
    },
    "vocab": [
     [
      "الْمَيْدَانُ",
      "meydan",
      "🏟️"
     ],
     [
      "أَفْوَاجًا",
      "bölük bölük",
      "👥"
     ],
     [
      "حِبَالٌ وَعِصِيٌّ",
      "ipler ve asalar",
      "🪢"
     ],
     [
      "أَجْرٌ",
      "ödül, ücret",
      "💰"
     ],
     [
      "تَلْقَفُ",
      "yutar",
      "😮"
     ],
     [
      "الْحَقُّ / الْبَاطِلُ",
      "hak / bâtıl",
      "⚖️"
     ]
    ]
   },
   "stop": {
    "section": 24,
    "after": 13,
    "prompt_tr": "İpler ve asalar yılan gibi koşuyor; Mûsâ'nın kalbine bir korku düştü. Allah «Korkma, üstün olan sensin» dedi. Sence Mûsâ asasını atınca ne olacak?",
    "options": [
     [
      "تَلْقَفُ مَا صَنَعُوا",
      "Onların yaptıklarını yutacak"
     ],
     [
      "تَهْرُبُ الْعَصَا",
      "Asa kaçacak"
     ],
     [
      "لَا يَحْدُثُ شَيْءٌ",
      "Hiçbir şey olmayacak"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "خَرَجَ النَّاسُ إِلَى الْمَيْدَانِ أَفْوَاجًا.",
     "طَلَبَ السَّحَرَةُ أَجْرًا مِنْ فِرْعَوْنَ.",
     "أَلْقَى السَّحَرَةُ حِبَالَهُمْ وَعِصِيَّهُمْ.",
     "خَافَ مُوسَى فَشَجَّعَهُ اللهُ.",
     "أَلْقَى مُوسَى عَصَاهُ فَلَقِفَتْ مَا صَنَعُوا.",
     "سَجَدَ السَّحَرَةُ وَآمَنُوا."
    ],
    "questions": [
     {
      "q": "مَنْ بَقِيَ فِي الْبُيُوتِ يَوْمَ الزِّينَةِ؟",
      "qt": "Bayram günü evlerde kim kaldı?",
      "o": [
       "الْمَرِيضُ وَالْعَاجِزُ فَقَطْ",
       "الْأَطْفَالُ",
       "النِّسَاءُ"
      ],
      "ot": [
       "Sadece hasta ve güçsüz olanlar",
       "Çocuklar",
       "Kadınlar"
      ],
      "a": 0,
      "ev": [
       "23.2"
      ]
     },
     {
      "q": "مَاذَا طَلَبَ السَّحَرَةُ مِنْ فِرْعَوْنَ؟",
      "qt": "Sihirbazlar Firavun'dan ne istedi?",
      "o": [
       "أَجْرًا إِنْ كَانُوا الْغَالِبِينَ",
       "أَنْ يُؤْمِنَ بِمُوسَى",
       "أَنْ يَتْرُكَهُمْ يَرْجِعُونَ"
      ],
      "ot": [
       "Galip gelirlerse bir ödül",
       "Mûsâ'ya iman etmesini",
       "Dönmelerine izin vermesini"
      ],
      "a": 0,
      "ev": [
       "23.17"
      ]
     },
     {
      "q": "مَاذَا رَأَى النَّاسُ لَمَّا أَلْقَى السَّحَرَةُ حِبَالَهُمْ؟",
      "qt": "Sihirbazlar iplerini atınca insanlar ne gördü?",
      "o": [
       "حَيَّاتٍ تَسْعَى",
       "طُيُورًا تَطِيرُ",
       "نَارًا"
      ],
      "ot": [
       "Koşan yılanlar",
       "Uçan kuşlar",
       "Ateş"
      ],
      "a": 0,
      "ev": [
       "24.2"
      ]
     },
     {
      "q": "مَاذَا فَعَلَتْ عَصَا مُوسَى؟",
      "qt": "Mûsâ'nın asası ne yaptı?",
      "o": [
       "لَقِفَتْ مَا صَنَعُوا",
       "صَارَتْ نَارًا",
       "طَارَتْ فِي السَّمَاءِ"
      ],
      "ot": [
       "Onların yaptıklarını yuttu",
       "Ateş oldu",
       "Göğe uçtu"
      ],
      "a": 0,
      "ev": [
       "24.16"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ السَّحَرَةُ فِي النِّهَايَةِ؟",
      "qt": "Sihirbazlar sonunda ne yaptı?",
      "o": [
       "سَجَدُوا وَآمَنُوا بِرَبِّ مُوسَى وَهَارُونَ",
       "هَرَبُوا",
       "ضَرَبُوا مُوسَى"
      ],
      "ot": [
       "Secdeye kapanıp Mûsâ ile Hârûn'un Rabbine iman ettiler",
       "Kaçtılar",
       "Mûsâ'ya vurdular"
      ],
      "a": 0,
      "ev": [
       "24.26"
      ]
     }
    ],
    "focus": {
     "title": "Pekiştirme: إِنَّ … لَـ",
     "explain": "<b>إِنَّ</b>'nin haberine (ya da ertelenmiş ismine) <b>لَـ</b> eklenirse anlam iyice pekişir: <span class='ar-inline'>إِنَّا لَنَحْنُ الْغَالِبُونَ</span> (galip gelecek olan kesinlikle biziz), <span class='ar-inline'>إِنَّكُمْ إِذًا لَمِنَ الْمُقَرَّبِينَ</span> (o zaman siz kesinlikle yakınlarımdan olursunuz), <span class='ar-inline'>أَئِنَّ لَنَا لَأَجْرًا</span> (bize mutlaka bir ödül var mı?). Önceki ünitede: <span class='ar-inline'>إِنَّ هٰذَا لَسَاحِرٌ عَلِيمٌ</span>.",
     "examples": [
      "«قَالُوا بِعِزَّةِ فِرْعَوْنَ إِنَّا لَنَحْنُ الْغَالِبُونَ»",
      "«قَالَ نَعَمْ وَإِنَّكُمْ إِذًا لَمِنَ الْمُقَرَّبِينَ»",
      "«قَالَ لِلْمَلَإِ حَوْلَهُ إِنَّ هٰذَا لَسَاحِرٌ عَلِيمٌ»"
     ],
     "items": [
      {
       "q": "قَالُوا بِعِزَّةِ فِرْعَوْنَ إِنَّا ____ الْغَالِبُونَ.",
       "o": [
        "لَنَحْنُ",
        "نَحْنُ لَا",
        "لَمْ نَحْنُ"
       ],
       "a": 0
      },
      {
       "q": "قَالَ نَعَمْ وَإِنَّكُمْ إِذًا ____ الْمُقَرَّبِينَ.",
       "o": [
        "لَمِنَ",
        "مِنْ",
        "لَا مِنَ"
       ],
       "a": 0
      },
      {
       "q": "إِنَّ هٰذَا ____ عَلِيمٌ.",
       "o": [
        "لَسَاحِرٌ",
        "سَاحِرًا",
        "لِسَاحِرٍ"
       ],
       "a": 0
      },
      {
       "q": "«إِنَّا لَنَحْنُ الْغَالِبُونَ» = …",
       "o": [
        "Galip gelecek olan kesinlikle biziz",
        "Biz galip gelmeyeceğiz",
        "Kim galip gelecek?"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "خَرَجَ النَّاسُ إِلَى {الْمَيْدَانِ} أَفْوَاجًا. وَأَلْقَى السَّحَرَةُ {حِبَالَهُمْ} وَعِصِيَّهُمْ. وَقَالَ اللهُ لِمُوسَى: لَا {تَخَفْ}. وَأَلْقَى مُوسَى عَصَاهُ فَإِذَا هِيَ {تَلْقَفُ} مَا صَنَعُوا. فَسَجَدَ السَّحَرَةُ وَ{آمَنُوا}."
    },
    "think": {
     "q": "لِمَاذَا كَانَ السَّحَرَةُ أَوَّلَ مَنْ آمَنَ؟",
     "qt": "Neden ilk iman edenler sihirbazlar oldu?",
     "model": "Sihirbazlar sihrin ne olduğunu herkesten iyi biliyordu; sihrin bir göz aldatması, bir «sanat» olduğunu biliyorlardı. Mûsâ'nın asasının yaptığının sihir olmadığını, insan gücünün ötesinde olduğunu en iyi onlar anlayabilirdi: «Sihir olsaydı sihre sihirle karşılık verirdik.» Bilgileri onları hakka götürdü."
    },
    "retell": [
     "الْمَيْدَانُ",
     "السَّحَرَةُ",
     "أَجْرٌ",
     "حَيَّاتٌ تَسْعَى",
     "تَلْقَفُ",
     "سَاجِدِينَ"
    ],
    "quran": [
     {
      "ar": "فَلَمَّا جَاءَ السَّحَرَةُ قَالُوا لِفِرْعَوْنَ أَئِنَّ لَنَا لَأَجْرًا إِنْ كُنَّا نَحْنُ الْغَالِبِينَ ۝ قَالَ نَعَمْ وَإِنَّكُمْ إِذًا لَمِنَ الْمُقَرَّبِينَ",
      "ref": "Şuarâ 26:41–42",
      "tr": "Sihirbazlar gelince Firavun'a dediler: Eğer biz galip gelirsek bize mutlaka bir ödül var, değil mi? Firavun dedi: Evet; o zaman siz kesinlikle bana yakın olanlardan olacaksınız.",
      "inText": "«أَئِنَّ لَنَا لَأَجْرًا …»"
     },
     {
      "ar": "قَالَ بَلْ أَلْقُوا ۖ فَإِذَا حِبَالُهُمْ وَعِصِيُّهُمْ يُخَيَّلُ إِلَيْهِ مِنْ سِحْرِهِمْ أَنَّهَا تَسْعَى ۝ فَأَوْجَسَ فِي نَفْسِهِ خِيفَةً مُوسَى ۝ قُلْنَا لَا تَخَفْ إِنَّكَ أَنْتَ الْأَعْلَى",
      "ref": "Tâhâ 20:66–68",
      "tr": "Mûsâ: Hayır, siz atın, dedi. Bir de ne görsün, sihirleri yüzünden ipleri ve asaları ona koşuyormuş gibi görünüyordu. Mûsâ içinde bir korku duydu. Dedik ki: Korkma, üstün olan kesinlikle sensin.",
      "inText": "«لَا تَخَفْ إِنَّكَ أَنْتَ الْأَعْلَى»"
     },
     {
      "ar": "فَوَقَعَ الْحَقُّ وَبَطَلَ مَا كَانُوا يَعْمَلُونَ",
      "ref": "A'râf 7:118",
      "tr": "Böylece hak yerini buldu, onların yaptıkları boşa çıktı.",
      "inText": "«فَوَقَعَ الْحَقُّ …»"
     },
     {
      "ar": "وَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ ۝ قَالُوا آمَنَّا بِرَبِّ الْعَالَمِينَ ۝ رَبِّ مُوسَى وَهَارُونَ",
      "ref": "A'râf 7:120–122",
      "tr": "Sihirbazlar secdeye kapandılar. Dediler: Âlemlerin Rabbine, Mûsâ'nın ve Hârûn'un Rabbine iman ettik.",
      "inText": "«وَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 23,
     "title_ar": "إِلَى الْمَيْدَانِ",
     "title_tr": "Meydana doğru",
     "s": [
      [
       "وَتَرَى النَّاسَ يَخْرُجُونَ مِنْ بُيُوتِهِمْ ضُحًى! وَيَمْشُونَ إِلَى الْمَيْدَانِ أَفْوَاجًا.",
       "İnsanların kuşluk vakti evlerinden çıktığını görürsün! Meydana bölük bölük yürüyorlar."
      ],
      [
       "وَيَمْشُونَ إِلَى الْمَيْدَانِ أَطْفَالًا، وَشُبَّانًا وَشُيُوخًا، وَرِجَالًا وَنِسَاءً.",
       "Çocuklar, gençler ve ihtiyarlar, erkekler ve kadınlar meydana yürüyor."
      ],
      [
       "وَلَمْ يَبْقَ فِي الْبَيْتِ إِلَّا مَرِيضٌ أَوْ عَاجِزٌ.",
       "Evde hasta ya da güçsüz olanlardan başkası kalmadı."
      ],
      [
       "وَلَا تَسْمَعُ فِي الْمَطَرِيَّةِ إِلَّا حَدِيثَ السِّحْرِ وَأَسْمَاءَ السَّحَرَةِ.",
       "Matariyye'de (Firavunlar dönemi Mısır'ın başkenti) sihir konuşmasından ve sihirbazların adlarından başka bir şey duymazsın."
      ],
      [
       "هَلْ جَاءَ سَاحِرُ أَسْوَانَ الْأَكْبَرُ أَيْضًا؟",
       "Asvan'ın büyük sihirbazı da geldi mi?"
      ],
      [
       "نَعَمْ وَسَاحِرُ الْأُقْصُرِ وَسَاحِرُ الْجِيزَةِ الشَّهِيرُ!",
       "Evet; Luksor'un sihirbazı ve Gize'nin ünlü sihirbazı da!"
      ],
      [
       "مَاذَا تَرَى يَا أَخِي مَنْ يَغْلِبُ؟",
       "Ne dersin kardeşim, kim kazanır?"
      ],
      [
       "إِنَّ مِصْرَ قَدْ أَلْقَتْ أَفْلَاذَ كَبِدِهَا تَرَى يَغْلِبُهُمْ أَحَدٌ!",
       "Mısır ciğerparelerini (en iyilerini) ortaya koydu; sence onları kimse yenebilir mi!"
      ],
      [
       "وَكَيْفَ يَغْلِبُهُمْ مُوسَى وَأَخُوهُ وَأَيْنَ تَعَلَّمَا السِّحْرَ؟",
       "Mûsâ ile kardeşi onları nasıl yensin? Sihri nerede öğrendiler ki?"
      ],
      [
       "نَشَأَ فِي قَصْرِ الْمَلِكِ ثُمَّ خَرَجَ مِنْ مِصْرَ خَائِفًا يَتَرَقَّبُ وَكَانَ فِي مَدْيَنَ سِنِينَ.",
       "Kralın sarayında büyüdü, sonra korku içinde Mısır'dan çıktı ve yıllarca Medyen'de kaldı."
      ],
      [
       "فَأَيْنَ تَعَلَّمَا السِّحْرَ؟",
       "Peki sihri nerede öğrendiler?"
      ],
      [
       "أَفِي مِصْرَ؟ لَا! أَفِي مَدْيَنَ؟ مَا سَمِعْنَا أَنَّ هُنَالِكَ فَنًّا!",
       "Mısır'da mı? Hayır! Medyen'de mi? Orada böyle bir sanat olduğunu hiç duymadık!"
      ],
      [
       "وَجَاءَ بَنُو إِسْرَائِيلَ وَهُمْ بَيْنَ يَأْسٍ وَرَجَاءٍ وَلَعَلَّ الْيَأْسَ أَغْلَبُ، اللهُ يَرْحَمُ ابْنَ عِمْرَانَ! اللهُ يَنْصُرُ بَنِي إِسْرَائِيلَ!",
       "İsrailoğulları ümitsizlik ile umut arasında geldi; belki de ümitsizlik daha ağır basıyordu. Allah İmrân oğluna merhamet etsin! Allah İsrailoğullarına yardım etsin!"
      ],
      [
       "وَجَاءَ السَّحَرَةُ وَأَقْبَلُوا بِخُيَلَائِهِمْ وَفَخْرِهِمْ.",
       "Sihirbazlar geldi; kibir ve övünç içinde ilerlediler."
      ],
      [
       "وَخَرَجُوا فِي مَلَابِسَ مُلَوَّنَةٍ وَخَرَجُوا يَحْمِلُونَ الْعِصِيَّ وَالْحِبَالَ.",
       "Renkli elbiseler içinde, ellerinde asalar ve iplerle çıktılar."
      ],
      [
       "وَخَرَجُوا يَضْحَكُونَ وَيَمْرَحُونَ، الْيَوْمَ يَوْمُ الْفَنِّ!",
       "Gülüp eğlenerek çıktılar: Bugün sanat günü!"
      ],
      [
       "الْيَوْمَ يَرَى الْمَلِكُ صَنِيعَنَا، الْيَوْمَ يَرَى الْقَوْمُ فَضْلَنَا!",
       "Bugün kral marifetimizi görecek, bugün halk üstünlüğümüzü görecek!"
      ],
      [
       "«فَلَمَّا جَاءَ السَّحَرَةُ قَالُوا لِفِرْعَوْنَ أَئِنَّ لَنَا لَأَجْرًا إِنْ كُنَّا نَحْنُ الْغَالِبِينَ».",
       "«Sihirbazlar gelince Firavun'a dediler: Eğer biz galip gelirsek bize mutlaka bir ödül var, değil mi?»"
      ],
      [
       "«قَالَ نَعَمْ وَإِنَّكُمْ إِذًا لَمِنَ الْمُقَرَّبِينَ».",
       "«Firavun dedi: Evet; o zaman siz kesinlikle bana yakın olanlardan olacaksınız.»"
      ],
      [
       "وَهٰذِهِ هِيَ جَائِزَةُ الْمُلُوكِ! وَهٰذَا عَطَاءُ الْمُلُوكِ!",
       "İşte kralların ödülü budur! İşte kralların bağışı budur!"
      ],
      [
       "وَهٰذَا الَّذِي يُخْدَعُ بِهِ الرِّجَالُ! وَهٰذَا الَّذِي يُصَادُ بِهِ الْأَبْطَالُ!",
       "Adamlar bununla aldatılır! Kahramanlar bununla avlanır!"
      ],
      [
       "وَفَرِحَ السَّحَرَةُ بِمَوَاعِيدِ فِرْعَوْنَ.",
       "Sihirbazlar Firavun'un vaatlerine sevindiler."
      ]
     ]
    },
    {
     "n": 24,
     "title_ar": "بَيْنَ الْحَقِّ وَالْبَاطِلِ",
     "title_tr": "Hak ile bâtıl arasında",
     "s": [
      [
       "«قَالَ لَهُمْ مُوسَى أَلْقُوا مَا أَنْتُمْ مُلْقُونَ».",
       "«Mûsâ onlara dedi: Atacağınızı atın!»"
      ],
      [
       "«فَأَلْقَوْا حِبَالَهُمْ وَعِصِيَّهُمْ وَقَالُوا بِعِزَّةِ فِرْعَوْنَ إِنَّا لَنَحْنُ الْغَالِبُونَ».",
       "«İplerini ve asalarını attılar ve dediler: Firavun'un izzeti hakkı için, galip gelecek olan kesinlikle biziz!»"
      ],
      [
       "وَرَأَى النَّاسُ عَجَبًا، حَيَّاتٌ تَسْعَى فِي الْمَيْدَانِ، وَدُهِشَ النَّاسُ وَتَرَاجَعُوا إِلَى الْخَلْفِ وَهَتَفُوا: حَيَّاتٌ! حَيَّاتٌ!",
       "İnsanlar şaşılacak bir şey gördü: meydanda koşuşan yılanlar! Hayretle geri çekildiler ve bağırdılar: Yılanlar! Yılanlar!"
      ],
      [
       "وَصَاحَتِ النِّسَاءُ وَبَكَتِ الْأَطْفَالُ وَعَلَا الْهُتَافُ فِي الْمَيْدَانِ: حَيَّاتٌ! حَيَّاتٌ!",
       "Kadınlar çığlık attı, çocuklar ağladı; meydanda haykırışlar yükseldi: Yılanlar! Yılanlar!"
      ],
      [
       "وَرَأَى مُوسَى مَا رَأَى النَّاسُ وَتَعَجَّبَ «فَإِذَا حِبَالُهُمْ وَعِصِيُّهُمْ يُخَيَّلُ إِلَيْهِ مِنْ سِحْرِهِمْ أَنَّهَا تَسْعَى».",
       "Mûsâ da insanların gördüğünü gördü ve şaşırdı: «Bir de ne görsün, sihirleri yüzünden ipleri ve asaları ona koşuyormuş gibi görünüyordu.»"
      ],
      [
       "وَخَطَرَ فِي قَلْبِ مُوسَى خَاطِرُ خَوْفٍ! وَلِمَاذَا لَا يَخَافُ مُوسَى؟",
       "Mûsâ'nın kalbinden bir korku geçti! Mûsâ neden korkmasın?"
      ],
      [
       "هٰذَا يَوْمُ الرِّهَانِ! وَعِنْدَ الِامْتِحَانِ يُكْرَمُ الرَّجُلُ أَوْ يُهَانُ!",
       "Bu, yarış günüydü! İnsan sınav anında ya onurlanır ya da rezil olur!"
      ],
      [
       "وَإِذَا غَلَبَ السَّحَرَةُ - لَا قَدَّرَ اللهُ ذٰلِكَ.",
       "Ya sihirbazlar kazanırsa — Allah takdir etmesin!"
      ],
      [
       "وَإِذَا غُلِبَ مُوسَى - لَا سَمَحَ اللهُ بِذٰلِكَ.",
       "Ya Mûsâ yenilirse — Allah izin vermesin!"
      ],
      [
       "فَمَاذَا يَكُونُ؟ الْعِيَاذُ بِاللهِ!!",
       "O zaman ne olur? Allah korusun!!"
      ],
      [
       "وَلَيْسَ غَلَبُ مُوسَى غَلَبَ رَجُلٍ، بَلْ هُوَ غَلَبُ دِينٍ أَمَامَ مَلِكٍ.",
       "Mûsâ'nın yenilgisi bir adamın yenilgisi değildi; bir kralın karşısında bir dinin yenilgisiydi."
      ],
      [
       "بَلْ هُوَ غَلَبُ حَقٍّ أَمَامَ بَاطِلٍ.",
       "Hatta bâtılın karşısında hakkın yenilgisiydi."
      ],
      [
       "لَا قَدَّرَ اللهُ ذٰلِكَ! لَا سَمَحَ اللهُ بِذٰلِكَ!",
       "Allah takdir etmesin! Allah izin vermesin!"
      ],
      [
       "وَلٰكِنَّ اللهَ شَجَّعَهُ وَقَالَ: «لَا تَخَفْ إِنَّكَ أَنْتَ الْأَعْلَى».",
       "Ama Allah onu yüreklendirdi ve dedi: «Korkma, üstün olan kesinlikle sensin.»"
      ],
      [
       "«وَأَلْقِ مَا فِي يَمِينِكَ تَلْقَفْ مَا صَنَعُوا إِنَّمَا صَنَعُوا كَيْدُ سَاحِرٍ وَلَا يُفْلِحُ السَّاحِرُ حَيْثُ أَتَى».",
       "«Sağ elindekini at; onların yaptıklarını yutsun. Yaptıkları sadece bir sihirbaz hilesidir; sihirbaz nereye gelirse gelsin kurtuluşa eremez.»"
      ],
      [
       "«فَقَالَ مُوسَى مَا جِئْتُمْ بِهِ السِّحْرُ إِنَّ اللهَ سَيُبْطِلُهُ إِنَّ اللهَ لَا يُصْلِحُ عَمَلَ الْمُفْسِدِينَ وَيُحِقُّ اللهُ الْحَقَّ بِكَلِمَاتِهِ وَلَوْ كَرِهَ الْمُجْرِمُونَ».",
       "«Mûsâ dedi: Sizin getirdiğiniz sihirdir; Allah onu boşa çıkaracaktır. Allah bozguncuların işini düzeltmez. Suçlular hoşlanmasa da Allah sözleriyle hakkı gerçekleştirir.»"
      ],
      [
       "«وَأَلْقَى مُوسَى عَصَاهُ فَإِذَا هِيَ تَلْقَفُ مَا يَأْفِكُونَ».",
       "«Mûsâ asasını attı; bir de ne görsünler, o onların uydurduklarını yutuyor!»"
      ],
      [
       "«فَوَقَعَ الْحَقُّ وَبَطَلَ مَا كَانُوا يَعْمَلُونَ».",
       "«Böylece hak yerini buldu, onların yaptıkları boşa çıktı.»"
      ],
      [
       "وَدُهِشَ السَّحَرَةُ وَبُهِتُوا.",
       "Sihirbazlar şaşırdı ve donup kaldı."
      ],
      [
       "أَيُّ شَيْءٍ هٰذَا؟ إِنَّا نَعْرِفُ السِّحْرَ وَأَصْلَهُ وَإِنَّا نَعْرِفُ السِّحْرَ وَأَنْوَاعَهُ.",
       "Bu da ne? Biz sihri ve kökenini biliriz, sihri ve türlerini biliriz."
      ],
      [
       "وَنَحْنُ أَسَاتِذَةُ الْفَنِّ! وَنَحْنُ أَئِمَّةُ الْفَنِّ!",
       "Biz bu sanatın ustalarıyız! Biz bu sanatın önderleriyiz!"
      ],
      [
       "هٰذَا لَيْسَ مِنَ السِّحْرِ! هٰذَا لَيْسَ مِنَ السِّحْرِ!",
       "Bu sihir değil! Bu sihir değil!"
      ],
      [
       "لَوْ كَانَ مِنَ السِّحْرِ لَضَرَبْنَا السِّحْرَ بِالسِّحْرِ وَقَرَعْنَا الْفَنَّ بِالْفَنِّ!",
       "Sihir olsaydı sihre sihirle karşılık verir, sanatı sanatla alt ederdik!"
      ],
      [
       "وَلٰكِنِ اضْمَحَلَّ فَنُّنَا أَمَامَ هٰذَا، وَذَابَ كَمَا يَذُوبُ النَّدَى أَمَامَ الشَّمْسِ.",
       "Ama sanatımız bunun karşısında silinip gitti; güneşin karşısında çiğin eridiği gibi eridi."
      ],
      [
       "فَمِنْ أَيْنَ هٰذَا؟ هٰذَا مِنَ اللهِ!",
       "Peki bu nereden? Bu Allah'tandır!"
      ],
      [
       "اقْتَنَعَ السَّحَرَةُ بِأَنَّ مُوسَى نَبِيٌّ وَأَنَّ اللهَ قَدْ مَنَحَهُ مُعْجِزَةً فَصَرَخُوا وَهَتَفُوا: «آمَنَّا بِرَبِّ هَارُونَ وَمُوسَى».",
       "Sihirbazlar Mûsâ'nın peygamber olduğuna ve Allah'ın ona bir mucize verdiğine ikna oldular; bağırıp haykırdılar: «Hârûn'un ve Mûsâ'nın Rabbine iman ettik.»"
      ],
      [
       "«وَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ، قَالُوا آمَنَّا بِرَبِّ الْعَالَمِينَ، رَبِّ مُوسَى وَهَارُونَ».",
       "«Sihirbazlar secdeye kapandılar ve dediler: Âlemlerin Rabbine, Mûsâ'nın ve Hârûn'un Rabbine iman ettik.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 12,
   "emoji": "🗼",
   "title_ar": "وَعِيدُ فِرْعَوْنَ وَسَفَاهَتُهُ",
   "title_tr": "Firavun'un tehdidi ve akılsızlığı",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «وَعِيدُ فِرْعَوْنَ», «سَفَاهَةُ فِرْعَوْنَ». Sihirbazlar iman etti. Sence Firavun onlara ne yaptı?",
     "options": [
      [
       "هَدَّدَهُمْ بِالْقَطْعِ وَالصَّلْبِ",
       "El-ayaklarını kesmek ve asmakla tehdit etti"
      ],
      [
       "أَعْطَاهُمُ الْأَجْرَ",
       "Onlara ödülü verdi"
      ],
      [
       "آمَنَ مَعَهُمْ",
       "Onlarla birlikte iman etti"
      ]
     ]
    },
    "vocab": [
     [
      "وَعِيدٌ",
      "tehdit",
      "⚠️"
     ],
     [
      "ارْتَدَّ",
      "geri döndü",
      "↩️"
     ],
     [
      "يَأْذَنُ",
      "izin verir",
      "✅"
     ],
     [
      "لَأُقَطِّعَنَّ",
      "mutlaka keseceğim",
      "🗡️"
     ],
     [
      "صَرْحٌ",
      "yüksek kule",
      "🗼"
     ],
     [
      "فَضْلًا عَنْ",
      "… şöyle dursun",
      "➕"
     ]
    ]
   },
   "stop": {
    "section": 25,
    "after": 9,
    "prompt_tr": "Firavun dedi: «Ben size izin vermeden ona iman ettiniz ha?!» Sence sihirbazlar onun tehditlerine nasıl karşılık verdi?",
    "options": [
     [
      "صَبَرُوا وَثَبَتُوا عَلَى إِيمَانِهِمْ",
      "Sabredip imanlarında sebat ettiler"
     ],
     [
      "رَجَعُوا عَنْ إِيمَانِهِمْ",
      "İmanlarından döndüler"
     ],
     [
      "هَرَبُوا مِنْ مِصْرَ",
      "Mısır'dan kaçtılar"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "جُنَّ جُنُونُ فِرْعَوْنَ.",
     "قَالَ: آمَنْتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ؟",
     "هَدَّدَ السَّحَرَةَ بِالْقَطْعِ وَالصَّلْبِ.",
     "صَبَرَ الْمُؤْمِنُونَ وَقَالُوا: لَا ضَيْرَ.",
     "أَمَرَ فِرْعَوْنُ هَامَانَ أَنْ يَبْنِيَ صَرْحًا.",
     "أَرَادَ فِرْعَوْنُ أَنْ يَقْتُلَ مُوسَى."
    ],
    "questions": [
     {
      "q": "لِمَاذَا جُنَّ جُنُونُ فِرْعَوْنَ؟",
      "qt": "Firavun neden çılgına döndü?",
      "o": [
       "لِأَنَّ السَّحَرَةَ صَارُوا جُنْدَ مُوسَى",
       "لِأَنَّ مُوسَى هَرَبَ",
       "لِأَنَّ النِّيلَ جَفَّ"
      ],
      "ot": [
       "Çünkü sihirbazlar Mûsâ'nın askerleri oldu",
       "Çünkü Mûsâ kaçtı",
       "Çünkü Nil kurudu"
      ],
      "a": 0,
      "ev": [
       "25.3"
      ]
     },
     {
      "q": "مَاذَا قَالَ فِرْعَوْنُ لِلسَّحَرَةِ أَوَّلًا؟",
      "qt": "Firavun sihirbazlara önce ne dedi?",
      "o": [
       "آمَنْتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ؟",
       "أَحْسَنْتُمْ",
       "خُذُوا أَجْرَكُمْ"
      ],
      "ot": [
       "Ben izin vermeden ona iman ettiniz ha?",
       "Aferin size",
       "Ödülünüzü alın"
      ],
      "a": 0,
      "ev": [
       "25.9"
      ]
     },
     {
      "q": "بِمَاذَا تَلَقَّى الْمُؤْمِنُونَ سِهَامَ فِرْعَوْنَ؟",
      "qt": "Müminler Firavun'un oklarını neyle karşıladı?",
      "o": [
       "بِجُنَّةِ الْإِيمَانِ وَالصَّبْرِ",
       "بِالسُّيُوفِ",
       "بِالْبُكَاءِ وَالْهَرَبِ"
      ],
      "ot": [
       "İman ve sabır kalkanıyla",
       "Kılıçlarla",
       "Ağlayıp kaçarak"
      ],
      "a": 0,
      "ev": [
       "25.14"
      ]
     },
     {
      "q": "مَاذَا طَلَبَ فِرْعَوْنُ مِنْ هَامَانَ؟",
      "qt": "Firavun Hâmân'dan ne istedi?",
      "o": [
       "أَنْ يَبْنِيَ لَهُ صَرْحًا",
       "أَنْ يَقْتُلَ السَّحَرَةَ",
       "أَنْ يُحْضِرَ مُوسَى"
      ],
      "ot": [
       "Kendisine yüksek bir kule yapmasını",
       "Sihirbazları öldürmesini",
       "Mûsâ'yı getirmesini"
      ],
      "a": 0,
      "ev": [
       "26.10"
      ]
     },
     {
      "q": "مَا الْحِيلَةُ الَّتِي وَجَدَهَا فِرْعَوْنُ فِي النِّهَايَةِ؟",
      "qt": "Firavun sonunda hangi çareyi buldu?",
      "o": [
       "أَنْ يَقْتُلَ مُوسَى",
       "أَنْ يُؤْمِنَ",
       "أَنْ يَتْرُكَ مِصْرَ"
      ],
      "ot": [
       "Mûsâ'yı öldürmek",
       "İman etmek",
       "Mısır'ı terk etmek"
      ],
      "a": 0,
      "ev": [
       "26.20"
      ]
     }
    ],
    "focus": {
     "title": "«… şöyle dursun»: فَضْلًا عَنْ",
     "explain": "<b>فَضْلًا عَنْ</b> «… şöyle dursun / … bir yana» anlamındadır; daha zor olanı olumsuzlamayı güçlendirir: <span class='ar-inline'>لَمْ يَصِلْ إِلَى السَّحَابِ فَضْلًا عَنِ الْقَمَرِ</span> (aya şöyle dursun, bulutlara bile ulaşamadı). Metin bu kalıbı merdiven gibi kullanıyor: bulut → ay → güneş → yıldızlar → gök.",
     "examples": [
      "لَمْ يَصِلْ إِلَى السَّحَابِ فَضْلًا عَنِ الْقَمَرِ",
      "وَلَمْ يَصِلْ إِلَى الْقَمَرِ فَضْلًا عَنِ الشَّمْسِ",
      "وَلَمْ يَصِلْ إِلَى الْكَوَاكِبِ فَضْلًا عَنِ السَّمَاءِ"
     ],
     "items": [
      {
       "q": "لَمْ يَصِلْ إِلَى السَّحَابِ ____ عَنِ الْقَمَرِ.",
       "o": [
        "فَضْلًا",
        "فَضْلٌ",
        "أَفْضَلَ"
       ],
       "a": 0
      },
      {
       "q": "وَلَمْ يَصِلْ إِلَى الْقَمَرِ فَضْلًا عَنِ ____.",
       "o": [
        "الشَّمْسِ",
        "السَّحَابِ",
        "الطِّينِ"
       ],
       "a": 0
      },
      {
       "q": "وَلَمْ يَصِلْ إِلَى الشَّمْسِ فَضْلًا عَنِ ____.",
       "o": [
        "الْكَوَاكِبِ",
        "الْقَمَرِ",
        "السَّحَابِ"
       ],
       "a": 0
      },
      {
       "q": "«لَمْ يَصِلْ إِلَى الْقَمَرِ فَضْلًا عَنِ الشَّمْسِ» = …",
       "o": [
        "Güneşe şöyle dursun, aya bile ulaşamadı",
        "Önce aya, sonra güneşe ulaştı",
        "Güneş aydan daha yakındır"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ فِرْعَوْنُ لِلسَّحَرَةِ: آمَنْتُمْ لَهُ قَبْلَ أَنْ {آذَنَ} لَكُمْ؟ وَلٰكِنَّهُمْ قَالُوا: لَا {ضَيْرَ}. وَقَالَ فِرْعَوْنُ لِ{هَامَانَ}: ابْنِ لِي صَرْحًا. وَلٰكِنَّهُ لَمْ يَصِلْ إِلَى {السَّحَابِ}، فَأَرَادَ أَنْ يَقْتُلَ {مُوسَى}."
    },
    "think": {
     "q": "كَانَ فِرْعَوْنُ يَعْتَقِدُ أَنَّهُ مَلِكُ الْعُقُولِ وَالْقُلُوبِ. هَلْ كَانَ ذٰلِكَ صَحِيحًا؟",
     "qt": "Firavun akılların ve kalplerin de kralı olduğuna inanıyordu. Bu doğru muydu?",
     "model": "Firavun bedenleri cezalandırabilir, dillere yasak koyabilirdi; ama sihirbazların kalbine giren imanı söküp atamadı. Tehditleri ne kadar ağırlaşırsa onların cevabı o kadar sakin ve kararlı oldu: «Zararı yok, biz Rabbimize döneceğiz.» Kıssa, gücün bedene hükmedebileceğini ama kalbe hükmedemeyeceğini gösteriyor. Kule hikâyesi de onun akıl dışı kibrini sergiliyor."
    },
    "retell": [
     "جُنَّ جُنُونُهُ",
     "قَبْلَ أَنْ آذَنَ لَكُمْ",
     "لَأُقَطِّعَنَّ",
     "لَا ضَيْرَ",
     "صَرْحٌ",
     "فَضْلًا عَنْ"
    ],
    "quran": [
     {
      "ar": "قَالَ آمَنْتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ ۖ إِنَّهُ لَكَبِيرُكُمُ الَّذِي عَلَّمَكُمُ السِّحْرَ",
      "ref": "Tâhâ 20:71",
      "tr": "Firavun dedi: Ben size izin vermeden ona iman ettiniz ha! Şüphesiz o, size sihri öğreten büyüğünüzdür.",
      "inText": "«آمَنْتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ»"
     },
     {
      "ar": "قَالُوا لَا ضَيْرَ ۖ إِنَّا إِلَى رَبِّنَا مُنْقَلِبُونَ ۝ إِنَّا نَطْمَعُ أَنْ يَغْفِرَ لَنَا رَبُّنَا خَطَايَانَا أَنْ كُنَّا أَوَّلَ الْمُؤْمِنِينَ",
      "ref": "Şuarâ 26:50–51",
      "tr": "Dediler: Zararı yok; biz zaten Rabbimize döneceğiz. İlk iman edenler olduğumuz için Rabbimizin hatalarımızı bağışlamasını umuyoruz.",
      "inText": "«لَا ضَيْرَ …»"
     },
     {
      "ar": "وَقَالَ فِرْعَوْنُ يَا أَيُّهَا الْمَلَأُ مَا عَلِمْتُ لَكُمْ مِنْ إِلٰهٍ غَيْرِي فَأَوْقِدْ لِي يَا هَامَانُ عَلَى الطِّينِ فَاجْعَلْ لِي صَرْحًا لَعَلِّي أَطَّلِعُ إِلَى إِلٰهِ مُوسَى وَإِنِّي لَأَظُنُّهُ مِنَ الْكَاذِبِينَ",
      "ref": "Kasas 28:38",
      "tr": "Firavun dedi: Ey ileri gelenler! Sizin için benden başka bir ilah tanımıyorum. Ey Hâmân! Benim için çamur üzerine ateş yak ve bana yüksek bir kule yap; belki Mûsâ'nın ilahını görürüm. Ama ben onu yalancılardan sanıyorum.",
      "inText": "«فَأَوْقِدْ لِي يَا هَامَانُ عَلَى الطِّينِ …»"
     },
     {
      "ar": "وَقَالَ فِرْعَوْنُ ذَرُونِي أَقْتُلْ مُوسَى وَلْيَدْعُ رَبَّهُ ۖ إِنِّي أَخَافُ أَنْ يُبَدِّلَ دِينَكُمْ أَوْ أَنْ يُظْهِرَ فِي الْأَرْضِ الْفَسَادَ",
      "ref": "Ğâfir 40:26",
      "tr": "Firavun dedi: Bırakın beni, Mûsâ'yı öldüreyim; o da Rabbine yalvarsın! Ben onun dininizi değiştirmesinden ya da yeryüzünde bozgunculuk çıkarmasından korkuyorum.",
      "inText": "«ذَرُونِي أَقْتُلْ مُوسَى …»"
     }
    ]
   },
   "sections": [
    {
     "n": 25,
     "title_ar": "وَعِيدُ فِرْعَوْنَ",
     "title_tr": "Firavun'un tehdidi",
     "s": [
      [
       "وَجُنَّ جُنُونُ فِرْعَوْنَ!",
       "Firavun çılgına döndü!"
      ],
      [
       "وَقَامَ فِرْعَوْنُ وَقَعَدَ وَبَرَقَ فِرْعَوْنُ وَرَعَدَ.",
       "Firavun yerinde duramadı; gürledi, şimşekler çaktırdı."
      ],
      [
       "مِسْكِينٌ فِرْعَوْنُ وَقَعَ مَا لَمْ يَكُنْ يَرْجُوهُ!",
       "Zavallı Firavun! Hiç beklemediği şey başına geldi!"
      ],
      [
       "إِنَّهُ أَرَادَ أَنْ يَهْزِمَ مُوسَى بِالسَّحَرَةِ فَأَصْبَحَ السَّحَرَةُ جُنْدَ مُوسَى.",
       "Sihirbazlarla Mûsâ'yı yenmek istemişti; ama sihirbazlar Mûsâ'nın askerleri oldu."
      ],
      [
       "إِنَّهُ أَرَادَ أَنْ يَصُدَّ النَّاسَ عَنْ مُوسَى فَجَاءَ بِالسَّحَرَةِ فَإِذَا بِهِمْ أَوَّلُ الْمُؤْمِنِينَ!",
       "İnsanları Mûsâ'dan uzaklaştırmak için sihirbazları getirmişti; bir de ne görsün, onlar ilk iman edenler oldu!"
      ],
      [
       "إِنَّ سِهَامَهُ ارْتَدَّتْ عَلَيْهِ.",
       "Attığı oklar kendisine geri döndü."
      ],
      [
       "وَكَانَ فِرْعَوْنُ يَعْتَقِدُ أَنَّهُ مَلِكُ الْعُقُولِ كَمَا أَنَّهُ مَلِكُ الْأَجْسَامِ.",
       "Firavun bedenlerin kralı olduğu gibi akılların da kralı olduğuna inanıyordu."
      ],
      [
       "وَأَنَّ لَهُ سُلْطَانًا عَلَى الْقُلُوبِ كَمَا أَنَّ لَهُ سُلْطَانًا عَلَى الْأَلْسِنَةِ.",
       "Dillere hükmettiği gibi kalplere de hükmettiğine inanıyordu."
      ],
      [
       "وَلَيْسَ لِأَحَدٍ فِي مِصْرَ أَنْ يَعْتَقِدَ شَيْئًا أَوْ يُؤْمِنَ بِشَيْءٍ إِلَّا بِإِذْنِهِ فَقَالَ فِي كِبْرٍ وَجَبَرُوتٍ:",
       "Mısır'da hiç kimse onun izni olmadan bir şeye inanamaz, bir şeye iman edemezdi; kibir ve zorbalıkla dedi:"
      ],
      [
       "«آمَنْتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ»؟!",
       "«Ben size izin vermeden ona iman ettiniz ha?!»"
      ],
      [
       "وَرَمَاهُمْ فِرْعَوْنُ بِسَهْمٍ مِنْ سِهَامِ الْمُلُوكِ فَقَالَ: «إِنَّهُ لَكَبِيرُكُمُ الَّذِي عَلَّمَكُمُ السِّحْرَ»!",
       "Firavun onlara kralların oklarından birini attı ve dedi: «O, size sihri öğreten büyüğünüzdür!»"
      ],
      [
       "وَرَمَاهُمْ بِسَهْمٍ ثَانٍ فَقَالَ: «إِنَّ هٰذَا لَمَكْرٌ مَكَرْتُمُوهُ فِي الْمَدِينَةِ لِتُخْرِجُوا مِنْهَا أَهْلَهَا فَسَوْفَ تَعْلَمُونَ»!!",
       "İkinci bir ok attı ve dedi: «Bu, halkını şehirden çıkarmak için şehirde kurduğunuz bir tuzaktır; yakında göreceksiniz!»"
      ],
      [
       "وَرَمَاهُمْ بِسَهْمٍ ثَالِثٍ مَسْمُومٍ هُوَ السَّهْمُ الْأَخِيرُ فِي كِنَانَةِ الْمُلُوكِ.",
       "Onlara zehirli üçüncü bir ok attı; bu, kralların sadağındaki son oktu."
      ],
      [
       "«لَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُمْ مِنْ خِلَافٍ وَلَأُصَلِّبَنَّكُمْ أَجْمَعِينَ».",
       "«Andolsun, ellerinizi ve ayaklarınızı çaprazlama keseceğim, sonra hepinizi asacağım!»"
      ],
      [
       "وَتَلَقَّى الْمُؤْمِنُونَ السِّهَامَ كُلَّهَا بِجُنَّةِ الْإِيمَانِ وَالصَّبْرِ وَقَالُوا:",
       "Müminler bütün okları iman ve sabır kalkanıyla karşıladılar ve dediler:"
      ],
      [
       "«لَا ضَيْرَ إِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ».",
       "«Zararı yok! Biz zaten Rabbimize döneceğiz.»"
      ],
      [
       "«إِنَّا نَطْمَعُ أَنْ يَغْفِرَ لَنَا رَبُّنَا خَطَايَانَا أَنْ كُنَّا أَوَّلَ الْمُؤْمِنِينَ».",
       "«İlk iman edenler olduğumuz için Rabbimizin hatalarımızı bağışlamasını umuyoruz.»"
      ],
      [
       "وَقَالُوا فِي إِيمَانٍ وَحَمَاسَةٍ: «إِنَّا آمَنَّا بِرَبِّنَا لِيَغْفِرَ لَنَا خَطَايَانَا وَمَا أَكْرَهْتَنَا عَلَيْهِ مِنَ السِّحْرِ وَاللهُ خَيْرٌ وَأَبْقَى».",
       "İman ve coşkuyla dediler: «Hatalarımızı ve bizi zorladığın sihri bağışlasın diye Rabbimize iman ettik. Allah daha hayırlı ve daha kalıcıdır.»"
      ],
      [
       "«إِنَّهُ مَنْ يَأْتِ رَبَّهُ مُجْرِمًا فَإِنَّ لَهُ جَهَنَّمَ لَا يَمُوتُ فِيهَا وَلَا يَحْيَى».",
       "«Kim Rabbine suçlu olarak gelirse, ona cehennem vardır; orada ne ölür ne yaşar.»"
      ],
      [
       "«وَمَنْ يَأْتِهِ مُؤْمِنًا قَدْ عَمِلَ الصَّالِحَاتِ فَأُولٰئِكَ لَهُمُ الدَّرَجَاتُ الْعُلَى، جَنَّاتُ عَدْنٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ وَذٰلِكَ جَزَاءُ مَنْ تَزَكَّى».",
       "«Kim de O'na salih ameller işlemiş bir mümin olarak gelirse, işte onlara en yüce dereceler, altından ırmaklar akan Adn cennetleri vardır. Bu, arınanın mükâfatıdır.»"
      ]
     ]
    },
    {
     "n": 26,
     "title_ar": "سَفَاهَةُ فِرْعَوْنَ",
     "title_tr": "Firavun'un akılsızlığı",
     "s": [
      [
       "وَاهْتَمَّ فِرْعَوْنُ بِأَمْرِ مُوسَى كَثِيرًا وَطَارَ نَوْمُهُ.",
       "Firavun Mûsâ meselesine çok kafa yordu; uykusu kaçtı."
      ],
      [
       "وَبَقِيَ فِرْعَوْنُ لَا يَطِيبُ لَهُ طَعَامٌ وَلَا شَرَابٌ.",
       "Firavun yemekten de içmekten de tat alamaz oldu."
      ],
      [
       "وَأَثَارَ غَضَبَهُ الْآخَرُونَ أَيْضًا وَقَالُوا: «أَتَذَرُ مُوسَى وَقَوْمَهُ لِيُفْسِدُوا فِي الْأَرْضِ وَيَذَرَكَ وَآلِهَتَكَ»؟!",
       "Başkaları da öfkesini kışkırttı ve dedi: «Mûsâ'yı ve kavmini yeryüzünde bozgunculuk yapsınlar, seni ve ilahlarını bıraksınlar diye mi serbest bırakıyorsun?!»"
      ],
      [
       "وَغَضِبَ فِرْعَوْنُ وَثَارَ.",
       "Firavun öfkelendi ve köpürdü."
      ],
      [
       "«قَالَ سَنُقَتِّلُ أَبْنَاءَهُمْ وَنَسْتَحْيِي نِسَاءَهُمْ وَإِنَّا فَوْقَهُمْ قَاهِرُونَ».",
       "«Dedi ki: Oğullarını öldüreceğiz, kadınlarını sağ bırakacağız; biz onların üstünde ezici bir güce sahibiz.»"
      ],
      [
       "وَأَرَادَ فِرْعَوْنُ أَنْ يَصُدَّ بَنِي إِسْرَائِيلَ وَأَهْلَ مِصْرَ عَنْ مُوسَى بِكُلِّ حِيلَةٍ.",
       "Firavun her türlü hileyle İsrailoğullarını ve Mısır halkını Mûsâ'dan uzaklaştırmak istedi."
      ],
      [
       "«وَنَادَى فِرْعَوْنُ فِي قَوْمِهِ قَالَ يَا قَوْمِ أَلَيْسَ لِي مُلْكُ مِصْرَ وَهٰذِهِ الْأَنْهَارُ تَجْرِي مِنْ تَحْتِي أَفَلَا تُبْصِرُونَ».",
       "«Firavun kavmine seslenip dedi: Ey kavmim! Mısır'ın mülkü benim değil mi? Şu ırmaklar da altımdan akıyor. Görmüyor musunuz?»"
      ],
      [
       "«أَمْ أَنَا خَيْرٌ مِنْ هٰذَا الَّذِي هُوَ مَهِينٌ وَلَا يَكَادُ يُبِينُ»!",
       "«Yoksa ben, şu zavallı ve neredeyse derdini anlatamayan adamdan daha hayırlı değil miyim?»"
      ],
      [
       "وَقَالَ فِرْعَوْنُ فِي رَزَانَةٍ وَحِلْمٍ: «يَا أَيُّهَا الْمَلَأُ مَا عَلِمْتُ لَكُمْ مِنْ إِلٰهٍ غَيْرِي»!!",
       "Firavun ağırbaşlı ve sakin bir tavırla dedi: «Ey ileri gelenler! Sizin için benden başka bir ilah tanımıyorum!»"
      ],
      [
       "كَأَنَّهُ فَتَّشَ كَثِيرًا وَفَكَّرَ كَثِيرًا وَنَصَحَ لِقَوْمِهِ.",
       "Sanki çok araştırmış, çok düşünmüş ve kavmine öğüt veriyormuş gibi!"
      ],
      [
       "وَقَالَ فِي سَفَاهَةٍ وَجُنُونٍ: «فَأَوْقِدْ لِي يَا هَامَانُ عَلَى الطِّينِ فَاجْعَلْ لِي صَرْحًا لَعَلِّي أَطَّلِعُ إِلَى إِلٰهِ مُوسَى وَإِنِّي لَأَظُنُّهُ مِنَ الْكَاذِبِينَ».",
       "Akılsızca ve çılgınca dedi: «Ey Hâmân! Benim için çamur üzerine ateş yak (tuğla pişir) ve bana yüksek bir kule yap; belki Mûsâ'nın ilahını görürüm. Ama ben onu yalancılardan sanıyorum.»"
      ],
      [
       "وَأَوْقَدَ هَامَانُ عَلَى الطِّينِ، وَبَنَى صَرْحًا وَلٰكِنْ إِلَى أَيْنَ؟ تَعِبَ هَامَانُ وَتَعِبَ الْبَنَّاؤُونَ وَنَفِدَ الطِّينُ وَالْآجُرُّ.",
       "Hâmân çamuru pişirdi ve bir kule yaptı; ama nereye kadar? Hâmân yoruldu, ustalar yoruldu, çamur ve tuğla tükendi."
      ],
      [
       "وَلَا يَزَالُ فِرْعَوْنُ بَعِيدًا لَمْ يَصِلْ إِلَى السَّحَابِ فَضْلًا عَنِ الْقَمَرِ.",
       "Firavun hâlâ çok uzaktaydı; aya şöyle dursun, bulutlara bile ulaşamadı."
      ],
      [
       "وَلَمْ يَصِلْ إِلَى الْقَمَرِ فَضْلًا عَنِ الشَّمْسِ.",
       "Güneşe şöyle dursun, aya bile ulaşamadı."
      ],
      [
       "وَلَمْ يَصِلْ إِلَى الشَّمْسِ فَضْلًا عَنِ الْكَوَاكِبِ.",
       "Yıldızlara şöyle dursun, güneşe bile ulaşamadı."
      ],
      [
       "وَلَمْ يَصِلْ إِلَى الْكَوَاكِبِ فَضْلًا عَنِ السَّمَاءِ.",
       "Göğe şöyle dursun, yıldızlara bile ulaşamadı."
      ],
      [
       "وَخَابَ فِرْعَوْنُ وَخَجِلَ وَعَجَزَ فِرْعَوْنُ وَقَعَدَ.",
       "Firavun hüsrana uğradı, utandı; âciz kalıp oturdu."
      ],
      [
       "مِسْكِينٌ أَلَا يَدْرِي أَنَّ اللهَ «خَلَقَ الْأَرْضَ وَالسَّمَاوَاتِ الْعُلَى».",
       "Zavallı! Allah'ın «yeri ve yüce gökleri yarattığını» bilmiyor mu?"
      ],
      [
       "«لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَمَا بَيْنَهُمَا وَمَا تَحْتَ الثَّرَى».",
       "«Göklerde, yerde, ikisinin arasında ve toprağın altında ne varsa O'nundur.»"
      ],
      [
       "«وَهُوَ الَّذِي فِي السَّمَاءِ إِلٰهٌ وَفِي الْأَرْضِ إِلٰهٌ».",
       "«O, gökte de ilahtır, yerde de ilahtır.»"
      ],
      [
       "وَلَمْ يَجِدْ فِرْعَوْنُ حِيلَةً إِلَّا أَنْ يَقْتُلَ مُوسَى وَحُجَّتُهُ أَنَّ مُوسَى يُظْهِرُ فِي الْأَرْضِ الْفَسَادَ.",
       "Firavun Mûsâ'yı öldürmekten başka çare bulamadı; bahanesi de Mûsâ'nın yeryüzünde bozgunculuk çıkarmasıydı."
      ],
      [
       "«وَقَالَ فِرْعَوْنُ ذَرُونِي أَقْتُلْ مُوسَى وَلْيَدْعُ رَبَّهُ إِنِّي أَخَافُ أَنْ يُبَدِّلَ دِينَكُمْ أَوْ أَنْ يُظْهِرَ فِي الْأَرْضِ الْفَسَادَ».",
       "«Firavun dedi: Bırakın beni, Mûsâ'yı öldüreyim; o da Rabbine yalvarsın! Ben onun dininizi değiştirmesinden ya da yeryüzünde bozgunculuk çıkarmasından korkuyorum.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 13,
   "emoji": "🧔",
   "title_ar": "مُؤْمِنُ آلِ فِرْعَوْنَ",
   "title_tr": "Firavun ailesinden mümin",
   "pre": {
    "predict": {
     "prompt_tr": "Firavun Mûsâ'yı öldürmek istiyor. Başlık: «مُؤْمِنُ آلِ فِرْعَوْنَ» (Firavun ailesinden bir mümin). Sence bu adam ne yaptı?",
     "options": [
      [
       "دَافَعَ عَنْ مُوسَى أَمَامَ الْقَوْمِ",
       "Kavmin önünde Mûsâ'yı savundu"
      ],
      [
       "سَاعَدَ فِرْعَوْنَ عَلَى قَتْلِهِ",
       "Firavun'a onu öldürmede yardım etti"
      ],
      [
       "هَرَبَ إِلَى مَدْيَنَ",
       "Medyen'e kaçtı"
      ]
     ]
    },
    "vocab": [
     [
      "يَكْتُمُ",
      "gizler",
      "🤫"
     ],
     [
      "رَشِيدٌ",
      "aklı başında, doğru yolda",
      "🧭"
     ],
     [
      "الْبَيِّنَاتُ",
      "apaçık deliller",
      "📜"
     ],
     [
      "تَغْتَرُّوا",
      "aldanırsınız",
      "🎭"
     ],
     [
      "سَكْرَةٌ",
      "sarhoşluk",
      "🌀"
     ],
     [
      "النَّجَاةُ",
      "kurtuluş",
      "🛟"
     ]
    ]
   },
   "stop": {
    "section": 27,
    "after": 8,
    "prompt_tr": "Adam dedi: «Bugün mülk sizin; ama Allah'ın azabı gelirse bizi kim kurtarır?» Sence Firavun ne cevap verdi?",
    "options": [
     [
      "مَا أُرِيكُمْ إِلَّا مَا أَرَى",
      "Size yalnızca kendi gördüğümü gösteriyorum"
     ],
     [
      "صَدَقْتَ، أُؤْمِنُ بِمُوسَى",
      "Doğru söyledin, Mûsâ'ya inanıyorum"
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
     "أَرَادَ فِرْعَوْنُ أَنْ يَقْتُلَ مُوسَى.",
     "قَامَ رَجُلٌ يَكْتُمُ إِيمَانَهُ وَدَافَعَ عَنْ مُوسَى.",
     "ذَكَّرَهُمْ بِيَوْمِ الْقِيَامَةِ.",
     "ذَكَّرَهُمْ بِيُوسُفَ النَّبِيِّ.",
     "دَعَاهُمْ إِلَى النَّجَاةِ وَدَعَوْهُ إِلَى النَّارِ.",
     "وَقَاهُ اللهُ سَيِّئَاتِ مَا مَكَرُوا."
    ],
    "questions": [
     {
      "q": "مَاذَا كَانَ يَكْتُمُ الرَّجُلُ مِنْ آلِ فِرْعَوْنَ؟",
      "qt": "Firavun ailesinden olan adam neyi gizliyordu?",
      "o": [
       "إِيمَانَهُ",
       "مَالَهُ",
       "اسْمَهُ"
      ],
      "ot": [
       "İmanını",
       "Malını",
       "Adını"
      ],
      "a": 0,
      "ev": [
       "27.0"
      ]
     },
     {
      "q": "مَاذَا قَالَ الرَّجُلُ عَنْ مُوسَى إِنْ كَانَ كَاذِبًا؟",
      "qt": "Adam, Mûsâ yalancıysa ne olacağını söyledi?",
      "o": [
       "فَعَلَيْهِ كَذِبُهُ",
       "فَاقْتُلُوهُ",
       "فَاسْجُنُوهُ"
      ],
      "ot": [
       "Yalanı kendi aleyhinedir",
       "Onu öldürün",
       "Onu hapsedin"
      ],
      "a": 0,
      "ev": [
       "27.4"
      ]
     },
     {
      "q": "مَا النِّعْمَةُ الَّتِي لَمْ يَعْرِفُوا فَضْلَهَا؟",
      "qt": "Değerini bilmedikleri nimet neydi?",
      "o": [
       "يُوسُفُ النَّبِيُّ",
       "النِّيلُ",
       "الْمُلْكُ"
      ],
      "ot": [
       "Peygamber Yûsuf",
       "Nil",
       "Mülk"
      ],
      "a": 0,
      "ev": [
       "27.23"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَسْمَعِ الْقَوْمُ صَوْتَ مُوسَى؟",
      "qt": "Kavim neden Mûsâ'nın sesini duymuyordu?",
      "o": [
       "لِأَنَّهُمْ سُكَارَى بِسَكْرَةِ الدُّنْيَا",
       "لِأَنَّ مُوسَى كَانَ بَعِيدًا",
       "لِأَنَّهُمْ نَائِمُونَ"
      ],
      "ot": [
       "Çünkü dünya sarhoşluğuyla sarhoştular",
       "Çünkü Mûsâ uzaktaydı",
       "Çünkü uyuyorlardı"
      ],
      "a": 0,
      "ev": [
       "28.5"
      ]
     },
     {
      "q": "إِلَى أَيْنَ دَعَا الْجُهَّالُ الرَّجُلَ؟",
      "qt": "Cahiller adamı neye çağırdı?",
      "o": [
       "إِلَى دِينِ الْآبَاءِ",
       "إِلَى مَدْيَنَ",
       "إِلَى الْبَحْرِ"
      ],
      "ot": [
       "Ataların dinine",
       "Medyen'e",
       "Denize"
      ],
      "a": 0,
      "ev": [
       "28.10"
      ]
     }
    ],
    "focus": {
     "title": "Emre bağlı cevap ve إِنْ + cezimli fiil",
     "explain": "Emirden sonra gelen ve onun sonucunu bildiren fiil cezimli olur: <span class='ar-inline'>اتَّبِعُونِ أَهْدِكُمْ</span> (bana uyun, sizi doğru yola ileteyim) — <span class='ar-inline'>أَهْدِي</span> değil <span class='ar-inline'>أَهْدِ</span>. Şart edatı <b>إِنْ</b> de fiili cezimler: <span class='ar-inline'>إِنْ يَكُنْ</span> → kısaltılmış hâli <span class='ar-inline'>إِنْ يَكُ</span>; cevap fiili de cezimli: <span class='ar-inline'>يُصِبْكُمْ</span>.",
     "examples": [
      "«إِنْ يَكُ كَاذِبًا فَعَلَيْهِ كَذِبُهُ»",
      "«وَإِنْ يَكُ صَادِقًا يُصِبْكُمْ بَعْضُ الَّذِي يَعِدُكُمْ»",
      "«يَا قَوْمِ اتَّبِعُونِ أَهْدِكُمْ سَبِيلَ الرَّشَادِ»"
     ],
     "items": [
      {
       "q": "«اتَّبِعُونِ ____ سَبِيلَ الرَّشَادِ»",
       "o": [
        "أَهْدِكُمْ",
        "أَهْدِيكُمْ",
        "هَدَيْتُكُمْ"
       ],
       "a": 0
      },
      {
       "q": "«وَإِنْ يَكُ صَادِقًا ____ بَعْضُ الَّذِي يَعِدُكُمْ»",
       "o": [
        "يُصِبْكُمْ",
        "يُصِيبُكُمْ",
        "أَصَابَكُمْ"
       ],
       "a": 0
      },
      {
       "q": "«إِنْ ____ كَاذِبًا فَعَلَيْهِ كَذِبُهُ»",
       "o": [
        "يَكُ",
        "يَكُونُ",
        "كَانَتْ"
       ],
       "a": 0
      },
      {
       "q": "«إِنْ يَكُ» = …",
       "o": [
        "eğer … ise",
        "… idi",
        "… olmayacak"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَامَ رَجُلٌ مِنْ آلِ فِرْعَوْنَ يَكْتُمُ {إِيمَانَهُ}. وَقَالَ: أَتَقْتُلُونَ رَجُلًا أَنْ يَقُولَ رَبِّيَ {اللهُ}؟ وَقَالَ: إِنَّمَا هٰذِهِ الْحَيَاةُ الدُّنْيَا {مَتَاعٌ}. مَا لِي أَدْعُوكُمْ إِلَى {النَّجَاةِ} وَتَدْعُونَنِي إِلَى {النَّارِ}؟"
    },
    "think": {
     "q": "لِمَاذَا ذَكَّرَ الرَّجُلُ قَوْمَهُ بِيُوسُفَ؟",
     "qt": "Adam kavmine neden Yûsuf'u hatırlattı?",
     "model": "Mısırlılar Yûsuf'un değerini o hayattayken bilmemişler, öldükten sonra «Onun gibisi bir daha gelmez» diye hayıflanmışlardı. Adam, aynı hatayı Mûsâ'ya karşı tekrarladıklarını göstermek istiyor: Bir peygamber aralarındayken onu tanımıyor, kaybedince pişman oluyorlar."
    },
    "retell": [
     "رَجُلٌ مُؤْمِنٌ",
     "يَكْتُمُ إِيمَانَهُ",
     "يَوْمُ الْقِيَامَةِ",
     "يُوسُفُ",
     "النَّجَاةُ / النَّارُ",
     "وَقَاهُ اللهُ"
    ],
    "quran": [
     {
      "ar": "وَقَالَ رَجُلٌ مُؤْمِنٌ مِنْ آلِ فِرْعَوْنَ يَكْتُمُ إِيمَانَهُ أَتَقْتُلُونَ رَجُلًا أَنْ يَقُولَ رَبِّيَ اللَّهُ وَقَدْ جَاءَكُمْ بِالْبَيِّنَاتِ مِنْ رَبِّكُمْ ۖ وَإِنْ يَكُ كَاذِبًا فَعَلَيْهِ كَذِبُهُ ۖ وَإِنْ يَكُ صَادِقًا يُصِبْكُمْ بَعْضُ الَّذِي يَعِدُكُمْ",
      "ref": "Mü'min 40:28",
      "tr": "Firavun ailesinden imanını gizleyen mümin bir adam dedi: «Rabbim Allah'tır dediği için bir adamı öldürecek misiniz? Oysa o size Rabbinizden apaçık delillerle geldi. Yalancıysa yalanı kendi aleyhinedir; doğru söylüyorsa sizi tehdit ettiği şeylerin bir kısmı başınıza gelir.»",
      "inText": "«أَتَقْتُلُونَ رَجُلًا أَنْ يَقُولَ رَبِّيَ اللهُ …»"
     },
     {
      "ar": "وَلَقَدْ جَاءَكُمْ يُوسُفُ مِنْ قَبْلُ بِالْبَيِّنَاتِ فَمَا زِلْتُمْ فِي شَكٍّ مِمَّا جَاءَكُمْ بِهِ ۖ حَتَّىٰ إِذَا هَلَكَ قُلْتُمْ لَنْ يَبْعَثَ اللَّهُ مِنْ بَعْدِهِ رَسُولًا",
      "ref": "Mü'min 40:34",
      "tr": "Andolsun, daha önce Yûsuf da size apaçık delillerle gelmişti; onun getirdiğinden hep şüphe içinde kaldınız. O ölünce: «Allah ondan sonra hiç peygamber göndermeyecek» dediniz.",
      "inText": "«وَلَقَدْ جَاءَكُمْ يُوسُفُ مِنْ قَبْلُ …»"
     },
     {
      "ar": "وَيَا قَوْمِ مَا لِي أَدْعُوكُمْ إِلَى النَّجَاةِ وَتَدْعُونَنِي إِلَى النَّارِ",
      "ref": "Mü'min 40:41",
      "tr": "Ey kavmim! Ne oluyor ki ben sizi kurtuluşa çağırıyorum, siz ise beni ateşe çağırıyorsunuz!",
      "inText": "«وَيَا قَوْمِ مَا لِي أَدْعُوكُمْ إِلَى النَّجَاةِ …»"
     },
     {
      "ar": "فَوَقَاهُ اللَّهُ سَيِّئَاتِ مَا مَكَرُوا ۖ وَحَاقَ بِآلِ فِرْعَوْنَ سُوءُ الْعَذَابِ",
      "ref": "Mü'min 40:45",
      "tr": "Allah onu kurdukları tuzakların kötülüklerinden korudu; Firavun ailesini ise azabın en kötüsü kuşattı.",
      "inText": "«فَوَقَاهُ اللهُ سَيِّئَاتِ مَا مَكَرُوا …»"
     }
    ]
   },
   "sections": [
    {
     "n": 27,
     "title_ar": "مُؤْمِنُ آلِ فِرْعَوْنَ",
     "title_tr": "Firavun ailesinden mümin",
     "s": [
      [
       "وَلَمَّا أَرَادَ فِرْعَوْنُ أَنْ يَقْتُلَ مُوسَى قَامَ رَجُلٌ مِنْ آلِ فِرْعَوْنَ يَكْتُمُ إِيمَانَهُ وَقَالَ:",
       "Firavun Mûsâ'yı öldürmek isteyince, Firavun ailesinden imanını gizleyen bir adam kalktı ve dedi:"
      ],
      [
       "«أَتَقْتُلُونَ رَجُلًا أَنْ يَقُولَ رَبِّيَ اللهُ وَقَدْ جَاءَكُمْ بِالْبَيِّنَاتِ مِنْ رَبِّكُمْ».",
       "«Rabbim Allah'tır dediği için bir adamı öldürecek misiniz? Oysa o size Rabbinizden apaçık delillerle geldi.»"
      ],
      [
       "وَقَالَ الرَّجُلُ الرَّشِيدُ مِنْ آلِ فِرْعَوْنَ: لِمَاذَا تَتَعَرَّضُونَ لِمُوسَى وَلِمَاذَا تُؤْذُونَهُ؟",
       "Firavun ailesinden olan o aklı başında adam dedi: Neden Mûsâ'ya ilişiyorsunuz, neden ona eziyet ediyorsunuz?"
      ],
      [
       "إِذَا لَمْ تُؤْمِنُوا بِهِ فَاتْرُكُوهُ وَشَأْنَهُ وَخَلُّوا سَبِيلَهُ.",
       "Ona inanmıyorsanız onu kendi hâline bırakın, yolunu serbest bırakın."
      ],
      [
       "«إِنْ يَكُ كَاذِبًا فَعَلَيْهِ كَذِبُهُ».",
       "«Eğer yalancıysa yalanı kendi aleyhinedir.»"
      ],
      [
       "وَإِذَا آذَيْتُمُوهُ وَوَقَعْتُمْ بِهِ وَكَانَ نَبِيًّا فَلَكُمُ الْوَيْلُ.",
       "Ona eziyet eder, ona saldırırsanız ve o bir peygamberse, vay hâlinize!"
      ],
      [
       "«وَإِنْ يَكُ صَادِقًا يُصِبْكُمْ بَعْضُ الَّذِي يَعِدُكُمْ».",
       "«Eğer doğru söylüyorsa, sizi tehdit ettiği şeylerin bir kısmı başınıza gelir.»"
      ],
      [
       "وَيَا إِخْوَانِي لَا تَغْتَرُّوا بِمُلْكِكُمْ، وَلَا تَغْتَرُّوا بِقُوَّتِكُمْ وَجُنُودِكُمْ.",
       "Kardeşlerim, mülkünüze aldanmayın; gücünüze ve askerlerinize aldanmayın."
      ],
      [
       "«يَا قَوْمِ لَكُمُ الْمُلْكُ الْيَوْمَ ظَاهِرِينَ فِي الْأَرْضِ فَمَنْ يَنْصُرُنَا مِنْ بَأْسِ اللهِ إِنْ جَاءَنَا؟!»",
       "«Ey kavmim! Bugün yeryüzüne hâkim olarak mülk sizindir; ama Allah'ın azabı bize gelirse bizi ondan kim kurtarır?!»"
      ],
      [
       "وَكَانَ جَوَابُ فِرْعَوْنَ أَنْ قَالَ:",
       "Firavun'un cevabı şu oldu:"
      ],
      [
       "«مَا أُرِيكُمْ إِلَّا مَا أَرَى وَمَا أَهْدِيكُمْ إِلَّا سَبِيلَ الرَّشَادِ».",
       "«Ben size yalnızca kendi gördüğümü gösteriyorum; sizi de ancak doğru yola götürüyorum.»"
      ],
      [
       "وَأَرَادَ الرَّجُلُ الرَّشِيدُ أَنْ يُحَذِّرَ قَوْمَهُ سُوءَ الْعَاقِبَةِ وَمَصِيرَ الظَّالِمِينَ فَقَالَ:",
       "Aklı başında adam kavmini kötü sondan ve zalimlerin akıbetinden sakındırmak istedi ve dedi:"
      ],
      [
       "«وَيَا قَوْمِ إِنِّي أَخَافُ عَلَيْكُمْ مِثْلَ يَوْمِ الْأَحْزَابِ مِثْلَ دَأْبِ قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ وَالَّذِينَ مِنْ بَعْدِهِمْ وَمَا اللهُ يُرِيدُ ظُلْمًا لِلْعِبَادِ».",
       "«Ey kavmim! Ben sizin için o toplulukların başına gelen gün gibi bir günden korkuyorum: Nûh kavminin, Âd'ın, Semûd'un ve onlardan sonrakilerin başına gelen gibi. Allah kullarına zulmetmek istemez.»"
      ],
      [
       "وَخَوَّفَهُمُ الرَّجُلُ الرَّشِيدُ يَوْمَ الْقِيَامَةِ.",
       "Aklı başında adam onları kıyamet günüyle de korkuttu."
      ],
      [
       "وَمَا يَوْمُ الْقِيَامَةِ؟",
       "Kıyamet günü nedir?"
      ],
      [
       "«يَوْمَ يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ، وَأُمِّهِ وَأَبِيهِ، وَصَاحِبَتِهِ وَبَنِيهِ، لِكُلِّ امْرِئٍ مِنْهُمْ يَوْمَئِذٍ شَأْنٌ يُغْنِيهِ».",
       "«O gün kişi kardeşinden, annesinden, babasından, eşinden ve oğullarından kaçar. O gün onlardan her birinin kendisine yetecek bir derdi vardır.»"
      ],
      [
       "«الْأَخِلَّاءُ يَوْمَئِذٍ بَعْضُهُمْ لِبَعْضٍ عَدُوٌّ إِلَّا الْمُتَّقِينَ».",
       "«O gün takvâ sahipleri dışında dostlar birbirine düşmandır.»"
      ],
      [
       "«وَلَا أَنْسَابَ بَيْنَهُمْ يَوْمَئِذٍ وَلَا يَتَسَاءَلُونَ».",
       "«O gün aralarında soy bağı kalmaz, birbirlerini de sormazlar.»"
      ],
      [
       "يَوْمَ يُنَادِي الْمَلِكُ الْجَبَّارُ: «لِمَنِ الْمُلْكُ الْيَوْمَ، لِلهِ الْوَاحِدِ الْقَهَّارِ».",
       "O gün her şeye gücü yeten Hükümdar seslenir: «Bugün mülk kimindir? Bir ve her şeye hâkim olan Allah'ındır.»"
      ],
      [
       "يَوْمَ يَفْزَعُ النَّاسُ وَيَصْرُخُونَ وَيُنَادِي بَعْضُهُمْ بَعْضًا، وَيَوْمَ يُوَلُّونَ مُدْبِرِينَ مَا لَهُمْ مِنَ اللهِ مِنْ عَاصِمٍ.",
       "O gün insanlar dehşete düşer, çığlık atar, birbirlerine seslenir; arkalarını dönüp kaçarlar ama onları Allah'tan koruyacak kimse yoktur."
      ],
      [
       "فَقَالَ الرَّجُلُ الرَّشِيدُ:",
       "Aklı başında adam dedi:"
      ],
      [
       "«وَيَا قَوْمِ إِنِّي أَخَافُ عَلَيْكُمْ يَوْمَ التَّنَادِ، يَوْمَ تُوَلُّونَ مُدْبِرِينَ مَا لَكُمْ مِنَ اللهِ مِنْ عَاصِمٍ وَمَنْ يُضْلِلِ اللهُ فَمَا لَهُ مِنْ هَادٍ».",
       "«Ey kavmim! Ben sizin için birbirinize seslendiğiniz o günden korkuyorum. O gün arkanızı dönüp kaçarsınız; sizi Allah'tan koruyacak kimse yoktur. Allah kimi saptırırsa artık onu doğru yola iletecek yoktur.»"
      ],
      [
       "وَقَالَ الرَّجُلُ الرَّشِيدُ: إِنَّ اللهَ قَدْ وَهَبَكُمْ نِعْمَةً وَلٰكِنَّكُمْ مَا عَرَفْتُمْ فَضْلَهَا وَمَا قَدَرْتُمُوهَا حَقَّ قَدْرِهَا حَتَّى إِذَا ذَهَبَتْ تَأَسَّفْتُمْ عَلَيْهَا.",
       "Aklı başında adam dedi: Allah size bir nimet bağışlamıştı; ama siz onun değerini bilmediniz, hakkıyla kıymetini takdir etmediniz; o gidince de ardından hayıflandınız."
      ],
      [
       "ذٰلِكَ يُوسُفُ النَّبِيُّ عَلَيْهِ صَلَاةُ اللهِ وَسَلَامُهُ الَّذِي مَا عَرَفْتُمُوهُ وَلَمْ تَقْدُرُوهُ قَدْرَهُ.",
       "O nimet, tanımadığınız ve değerini bilmediğiniz Peygamber Yûsuf'tur; Allah'ın salât ve selâmı onun üzerine olsun."
      ],
      [
       "وَلٰكِنَّهُ لَمَّا مَاتَ قُلْتُمْ: سُبْحَانَ اللهِ نَبِيٌّ وَلَا كَيُوسُفَ.",
       "Ama o ölünce şöyle dediniz: Sübhânallah! Yûsuf gibi peygamber yoktur."
      ],
      [
       "مَلِكٌ وَلَا كَيُوسُفَ! رَجُلٌ وَلَا كَيُوسُفَ!",
       "Yûsuf gibi hükümdar yok! Yûsuf gibi adam yok!"
      ],
      [
       "وَمَنْ لَنَا بِنَبِيٍّ بَعْدَهُ؟! مَنْ لَنَا بِمِثْلِهِ؟!",
       "Ondan sonra bize kim bir peygamber getirir?! Onun bir benzerini bize kim verir?!"
      ],
      [
       "أَبَدًا! لَنْ يَأْتِيَ مِثْلُهُ!",
       "Asla! Onun gibisi bir daha gelmez!"
      ],
      [
       "«وَلَقَدْ جَاءَكُمْ يُوسُفُ مِنْ قَبْلُ بِالْبَيِّنَاتِ فَمَا زِلْتُمْ فِي شَكٍّ مِمَّا جَاءَكُمْ بِهِ حَتَّى إِذَا هَلَكَ قُلْتُمْ لَنْ يَبْعَثَ اللهُ مِنْ بَعْدِهِ رَسُولًا».",
       "«Andolsun, daha önce Yûsuf da size apaçık delillerle gelmişti; onun getirdiğinden hep şüphe içinde kaldınız. Sonunda o ölünce: Allah ondan sonra artık hiç peygamber göndermeyecek, dediniz.»"
      ],
      [
       "كَذٰلِكَ تَفْعَلُونَ بَعْدَ هٰذَا النَّبِيِّ أَيْضًا! وَتَنْدَمُونَ!",
       "Bu peygamberden sonra da aynısını yapacaksınız! Ve pişman olacaksınız!"
      ]
     ]
    },
    {
     "n": 28,
     "title_ar": "نَصِيحَةُ الرَّجُلِ",
     "title_tr": "Adamın öğüdü",
     "s": [
      [
       "وَوَعَظَ الرَّجُلُ قَوْمَهُ وَبَذَلَ لَهُمْ وُدَّهُ وَنَصِيحَتَهُ.",
       "Adam kavmine öğüt verdi; onlara sevgisini ve öğüdünü esirgemedi."
      ],
      [
       "«وَقَالَ الَّذِي آمَنَ يَا قَوْمِ اتَّبِعُونِ أَهْدِكُمْ سَبِيلَ الرَّشَادِ».",
       "«İman eden adam dedi: Ey kavmim! Bana uyun ki sizi doğru yola ileteyim.»"
      ],
      [
       "وَعَلِمَ الرَّجُلُ الرَّشِيدُ أَنَّ الْقَوْمَ فِي سَكْرَةٍ مِنَ الْحَيَاةِ الدُّنْيَا.",
       "Aklı başında adam, kavminin dünya hayatıyla sarhoş olduğunu anladı."
      ],
      [
       "وَأَنَّ فِرْعَوْنَ مَغْرُورٌ بِمُلْكِهِ وَقُوَّتِهِ.",
       "Firavun'un da mülküne ve gücüne aldandığını anladı."
      ],
      [
       "وَلٰكِنَّ هٰذِهِ الْحَيَاةَ حُلْمٌ مِنَ الْأَحْلَامِ، وَأَنَّ الدُّنْيَا ظِلٌّ زَائِلٌ.",
       "Oysa bu hayat rüyalardan bir rüyadır; dünya da geçip giden bir gölgedir."
      ],
      [
       "وَعَرَفَ الرَّجُلُ مَا يَمْنَعُ الْقَوْمَ مِنِ اتِّبَاعِ مُوسَى، ذٰلِكَ بِأَنَّهُمْ سُكَارَى بِسَكْرَةِ الدُّنْيَا.",
       "Adam, kavmi Mûsâ'ya uymaktan neyin alıkoyduğunu anladı: Onlar dünya sarhoşluğuyla sarhoştular."
      ],
      [
       "وَالسَّكْرَانُ مَا يَسْمَعُ وَمَا يَشْعُرُ.",
       "Sarhoş olan ne duyar ne de farkına varır."
      ],
      [
       "ذٰلِكَ بِأَنَّهُمْ حَيْثُ لَا يَسْمَعُونَ صَوْتَ مُوسَى.",
       "İşte bu yüzden Mûsâ'nın sesini duymuyorlardı."
      ],
      [
       "فَأَرَادَ أَنْ يُنَبِّهَهُمْ مِنْ غَفْلَتِهِمْ فَقَالَ:",
       "Onları gafletlerinden uyandırmak istedi ve dedi:"
      ],
      [
       "«يَا قَوْمِ إِنَّمَا هٰذِهِ الْحَيَاةُ الدُّنْيَا مَتَاعٌ وَإِنَّ الْآخِرَةَ هِيَ دَارُ الْقَرَارِ».",
       "«Ey kavmim! Bu dünya hayatı geçici bir faydalanmadan ibarettir; asıl kalınacak yurt ise âhirettir.»"
      ],
      [
       "وَطَفِقَ الْجُهَّالُ مِنْ قَوْمِهِ يَدْعُونَهُ إِلَى الْكُفْرِ وَالشِّرْكِ وَيَدْعُونَهُ إِلَى دِينِ الْآبَاءِ.",
       "Kavminin cahilleri onu küfre ve şirke, ataların dinine çağırmaya başladılar."
      ],
      [
       "فَإِذَا قَالَ لَهُمْ تَعَالَوْا إِلَى اللهِ! قَالُوا لَهُ ارْجِعْ إِلَى دِينِ الْآبَاءِ!",
       "O onlara «Allah'a gelin!» dedikçe, onlar ona «Ataların dinine dön!» diyorlardı."
      ],
      [
       "وَلَمَّا بَالَغُوا فِي الدَّعْوَةِ قَالَ لَهُمْ:",
       "Çağrılarında ileri gidince onlara dedi:"
      ],
      [
       "«وَيَا قَوْمِ مَا لِي أَدْعُوكُمْ إِلَى النَّجَاةِ وَتَدْعُونَنِي إِلَى النَّارِ».",
       "«Ey kavmim! Ne oluyor ki ben sizi kurtuluşa çağırıyorum, siz ise beni ateşe çağırıyorsunuz!»"
      ],
      [
       "«تَدْعُونَنِي لِأَكْفُرَ بِاللهِ وَأُشْرِكَ بِهِ مَا لَيْسَ لِي بِهِ عِلْمٌ وَأَنَا أَدْعُوكُمْ إِلَى الْعَزِيزِ الْغَفَّارِ».",
       "«Siz beni Allah'ı inkâr etmeye ve hakkında bilgim olmayan şeyleri O'na ortak koşmaya çağırıyorsunuz. Ben ise sizi mutlak güç sahibi, çok bağışlayan Allah'a çağırıyorum.»"
      ],
      [
       "وَقَالَ لَهُمُ الرَّجُلُ الرَّشِيدُ: أَيُّ نَبِيٍّ جَاءَ مِنْ آلِهَتِكُمْ؟",
       "Aklı başında adam onlara dedi: İlahlarınızdan hangi peygamber geldi?"
      ],
      [
       "وَأَيُّ كِتَابٍ نَزَلَ؟ وَمَنْ دَعَا إِلَيْهِ؟",
       "Hangi kitap indi? Ona kim çağırdı?"
      ],
      [
       "«إِنْ هِيَ إِلَّا أَسْمَاءٌ سَمَّيْتُمُوهَا أَنْتُمْ وَآبَاؤُكُمْ مَا أَنْزَلَ اللهُ بِهَا مِنْ سُلْطَانٍ».",
       "«Onlar sizin ve atalarınızın taktığı isimlerden başka bir şey değildir; Allah onlar hakkında hiçbir delil indirmemiştir.»"
      ],
      [
       "وَهٰؤُلَاءِ رُسُلُ اللهِ دَعَوْا إِلَى اللهِ، ذٰلِكَ إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ وَيُوسُفُ وَهٰذَا نَبِيُّ اللهِ مُوسَى.",
       "İşte Allah'ın elçileri Allah'a çağırdılar: İbrâhim (a.s.), Yûsuf ve işte Allah'ın peygamberi Mûsâ."
      ],
      [
       "وَفِي كُلِّ شَيْءٍ لَهُ آيَةٌ! وَفِي كُلِّ مَكَانٍ لَهُ دَعْوَةٌ!",
       "Her şeyde O'nun bir delili var! Her yerde O'na bir çağrı var!"
      ],
      [
       "«لَا جَرَمَ أَنَّمَا تَدْعُونَنِي إِلَيْهِ لَيْسَ لَهُ دَعْوَةٌ فِي الدُّنْيَا وَلَا فِي الْآخِرَةِ».",
       "«Şüphe yok ki beni çağırdığınız şeyin ne dünyada ne de âhirette bir çağrısı vardır.»"
      ],
      [
       "وَلَمَّا يَئِسَ الرَّجُلُ مِنْ هِدَايَتِهِمْ وَسَئِمَ الرَّجُلُ مِنْ بَلَادَتِهِمْ تَرَكَهُمْ وَقَالَ لَهُمْ:",
       "Adam onların hidayete ermesinden ümidini kesip anlayışsızlıklarından bıkınca onları bıraktı ve dedi:"
      ],
      [
       "«فَسَتَذْكُرُونَ مَا أَقُولُ لَكُمْ وَأُفَوِّضُ أَمْرِي إِلَى اللهِ إِنَّ اللهَ بَصِيرٌ بِالْعِبَادِ».",
       "«Size söylediklerimi yakında hatırlayacaksınız. Ben işimi Allah'a bırakıyorum. Şüphesiz Allah kullarını hakkıyla görendir.»"
      ],
      [
       "وَغَضِبَ النَّاسُ وَأَرَادَ آلُ فِرْعَوْنَ أَنْ يَقْتُلُوهُ وَلٰكِنَّ اللهَ عَصَمَهُ وَأَهْلَكَ أَعْدَاءَهُ.",
       "İnsanlar öfkelendi; Firavun ailesi onu öldürmek istedi; ama Allah onu korudu ve düşmanlarını helak etti."
      ],
      [
       "«فَوَقَاهُ اللهُ سَيِّئَاتِ مَا مَكَرُوا وَحَاقَ بِآلِ فِرْعَوْنَ سُوءُ الْعَذَابِ».",
       "«Allah onu, kurdukları tuzakların kötülüklerinden korudu; Firavun ailesini ise azabın en kötüsü kuşattı.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 14,
   "emoji": "👑",
   "title_ar": "امْرَأَةُ فِرْعَوْنَ",
   "title_tr": "Firavun'un karısı",
   "pre": {
    "predict": {
     "prompt_tr": "Firavun herkesin aklına ve kalbine hükmettiğini sanıyor. Başlık: «زَوْجُ فِرْعَوْنَ». Sence Firavun'un kendi evinde ne oldu?",
     "options": [
      [
       "آمَنَتِ امْرَأَتُهُ بِمُوسَى",
       "Karısı Mûsâ'ya iman etti"
      ],
      [
       "طَلَّقَ امْرَأَتَهُ",
       "Karısını boşadı"
      ],
      [
       "بَنَى قَصْرًا جَدِيدًا",
       "Yeni bir saray yaptı"
      ]
     ]
    },
    "vocab": [
     [
      "يَعْتَقِدُ",
      "inanır, sanır",
      "💭"
     ],
     [
      "سُلْطَانٌ",
      "hüküm, güç",
      "👑"
     ],
     [
      "عَلَى رَغْمِ",
      "-e rağmen",
      "✊"
     ],
     [
      "طَاعَةٌ",
      "itaat",
      "🙇"
     ],
     [
      "مِحْنَةٌ / بَلِيَّةٌ",
      "çile / belâ",
      "⛓️"
     ],
     [
      "تَوَكَّلُوا",
      "tevekkül edin",
      "🤲"
     ]
    ]
   },
   "stop": {
    "section": 29,
    "after": 12,
    "prompt_tr": "«Allah ona kendi evinde bir ibret gösterdi.» Sence bu ibret neydi?",
    "options": [
     [
      "آمَنَتِ امْرَأَتُهُ بِاللهِ",
      "Karısı Allah'a iman etti"
     ],
     [
      "مَرِضَ ابْنُهُ",
      "Oğlu hastalandı"
     ],
     [
      "احْتَرَقَ قَصْرُهُ",
      "Sarayı yandı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "كَانَ فِرْعَوْنُ يَعْتَقِدُ أَنَّهُ مَلِكُ الْعُقُولِ.",
     "آمَنَتِ امْرَأَةُ فِرْعَوْنَ بِاللهِ.",
     "لَمْ يَشْعُرْ فِرْعَوْنُ بِذٰلِكَ.",
     "دَعَتْ: رَبِّ ابْنِ لِي عِنْدَكَ بَيْتًا فِي الْجَنَّةِ.",
     "آذَى النَّاسُ بَنِي إِسْرَائِيلَ.",
     "أَمَرَهُمُ اللهُ أَنْ يَجْعَلُوا بُيُوتَهُمْ قِبْلَةً."
    ],
    "questions": [
     {
      "q": "مَاذَا كَانَ يَعْتَقِدُ فِرْعَوْنُ؟",
      "qt": "Firavun neye inanıyordu?",
      "o": [
       "أَنَّهُ مَلِكُ الْعُقُولِ كَمَا أَنَّهُ مَلِكُ الْأَجْسَامِ",
       "أَنَّهُ سَيَمُوتُ قَرِيبًا",
       "أَنَّ مُوسَى صَادِقٌ"
      ],
      "ot": [
       "Bedenlerin hükümdarı olduğu gibi akılların da hükümdarı olduğuna",
       "Yakında öleceğine",
       "Mûsâ'nın doğru söylediğine"
      ],
      "a": 0,
      "ev": [
       "29.0"
      ]
     },
     {
      "q": "هَلْ شَعَرَ فِرْعَوْنُ بِإِيمَانِ امْرَأَتِهِ؟",
      "qt": "Firavun karısının imanını fark etti mi?",
      "o": [
       "لَا، لَمْ يَشْعُرْ",
       "نَعَمْ، فِي الْحَالِ",
       "أَخْبَرَتْهُ الشُّرْطَةُ"
      ],
      "ot": [
       "Hayır, fark etmedi",
       "Evet, hemen",
       "Polisler ona haber verdi"
      ],
      "a": 0,
      "ev": [
       "29.18"
      ]
     },
     {
      "q": "مَاذَا طَلَبَتِ امْرَأَةُ فِرْعَوْنَ مِنْ رَبِّهَا؟",
      "qt": "Firavun'un karısı Rabbinden ne istedi?",
      "o": [
       "بَيْتًا فِي الْجَنَّةِ",
       "قَصْرًا فِي مِصْرَ",
       "مَالًا كَثِيرًا"
      ],
      "ot": [
       "Cennette bir ev",
       "Mısır'da bir saray",
       "Çok mal"
      ],
      "a": 0,
      "ev": [
       "29.27"
      ]
     },
     {
      "q": "مَاذَا قَالَ بَنُو إِسْرَائِيلَ لِمُوسَى لَمَّا سَئِمُوا؟",
      "qt": "İsrâiloğulları bıkınca Mûsâ'ya ne dediler?",
      "o": [
       "أُوذِينَا مِنْ قَبْلِ أَنْ تَأْتِيَنَا وَمِنْ بَعْدِ مَا جِئْتَنَا",
       "شُكْرًا لَكَ يَا مُوسَى",
       "نُرِيدُ أَنْ نَرْجِعَ إِلَى فِرْعَوْنَ"
      ],
      "ot": [
       "Sen gelmeden önce de eziyet gördük, geldikten sonra da",
       "Teşekkürler ey Mûsâ",
       "Firavun'a dönmek istiyoruz"
      ],
      "a": 0,
      "ev": [
       "30.7"
      ]
     },
     {
      "q": "كَيْفَ عَبَدَ بَنُو إِسْرَائِيلَ اللهَ وَفِرْعَوْنُ يَمْنَعُهُمْ؟",
      "qt": "Firavun engel olurken İsrâiloğulları Allah'a nasıl ibadet ettiler?",
      "o": [
       "جَعَلُوا بُيُوتَهُمْ قِبْلَةً",
       "خَرَجُوا إِلَى الصَّحْرَاءِ",
       "بَنَوْا مَسْجِدًا كَبِيرًا"
      ],
      "ot": [
       "Evlerini namaz yeri yaptılar",
       "Çöle çıktılar",
       "Büyük bir mescit yaptılar"
      ],
      "a": 0,
      "ev": [
       "30.19"
      ]
     }
    ],
    "focus": {
     "title": "لَمْ + cezimli muzari = olumsuz geçmiş",
     "explain": "<b>لَمْ</b> muzari fiilin başına gelir, onu cezimler ve anlamı <b>geçmişe</b> çevirir: <span class='ar-inline'>يَشْعُرُ</span> (fark eder) → <span class='ar-inline'>لَمْ يَشْعُرْ</span> (fark etmedi). Sonu ـُ olan fiil sükûnla biter; <span class='ar-inline'>تُغْنِي</span> gibi illetli fiiller son harfini kaybeder: <span class='ar-inline'>لَمْ تُغْنِ</span>. Aynı anlam <span class='ar-inline'>مَا شَعَرَ</span> ile de verilebilir.",
     "examples": [
      "وَلَمْ يَشْعُرْ بِذٰلِكَ فِرْعَوْنُ",
      "لَمْ تَنْفَعْنَا شَيْئًا! لَمْ تُغْنِ عَنَّا شَيْئًا!",
      "وَلٰكِنَّ مُوسَى لَمْ يَجْزَعْ! وَلٰكِنَّ مُوسَى لَمْ يَيْأَسْ!"
     ],
     "items": [
      {
       "q": "وَلَمْ ____ شُرْطَةُ فِرْعَوْنَ شَيْئًا.",
       "o": [
        "يَصْنَعْ",
        "يَصْنَعُ",
        "صَنَعَ"
       ],
       "a": 0
      },
      {
       "q": "لَمْ ____ عَنَّا شَيْئًا!",
       "o": [
        "تُغْنِ",
        "تُغْنِي",
        "أَغْنَيْتَ"
       ],
       "a": 0
      },
      {
       "q": "وَلٰكِنَّ مُوسَى لَمْ ____!",
       "o": [
        "يَيْأَسْ",
        "يَيْأَسُ",
        "يَئِسَ"
       ],
       "a": 0
      },
      {
       "q": "«لَمْ يَجْزَعْ» = …",
       "o": [
        "sızlanmadı",
        "sızlanmayacak",
        "sızlanıyor"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "آمَنَتِ امْرَأَةُ فِرْعَوْنَ بِاللهِ وَكَفَرَتْ {بِفِرْعَوْنَ}. وَلَمْ {يَشْعُرْ} بِذٰلِكَ فِرْعَوْنُ. إِنَّهُ يَمْلِكُ الْجِسْمَ وَلٰكِنَّهُ لَا يَمْلِكُ {الْعَقْلَ}. وَقَالَ مُوسَى لِقَوْمِهِ: اسْتَعِينُوا بِاللهِ {وَاصْبِرُوا}."
    },
    "think": {
     "q": "«إِنَّهُ يَمْلِكُ الْجِسْمَ وَلٰكِنَّهُ لَا يَمْلِكُ الْعَقْلَ». مَاذَا يَعْنِي ذٰلِكَ؟",
     "qt": "«Bedene sahip olabilir ama akla sahip olamaz.» Bu ne demek?",
     "model": "Bir zorba insanları hapsedebilir, susturabilir, dillerine yasak koyabilir; ama kalplerinde neye inandıklarına karışamaz. Firavun'un en yakınındaki kişi, kendi karısı, ona rağmen iman etti. İman zorla verilemez, zorla da alınamaz."
    },
    "personal": {
     "q": "آمَنَتِ امْرَأَةُ فِرْعَوْنَ عَلَى رَغْمِ زَوْجِهَا وَكَانَتْ شُجَاعَةً. مَتَى كُنْتَ شُجَاعًا؟",
     "qt": "Firavun'un karısı kocasına rağmen iman etti; cesurdu. Sen ne zaman cesur davrandın? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "كُنْتُ شُجَاعًا لَمَّا …",
      "قُلْتُ الْحَقَّ أَمَامَ …",
      "لَمْ أَخَفْ مِنْ …"
     ]
    },
    "retell": [
     "فِرْعَوْنُ",
     "مَلِكُ الْعُقُولِ",
     "امْرَأَةُ فِرْعَوْنَ",
     "بَيْتٌ فِي الْجَنَّةِ",
     "مِحْنَةٌ",
     "قِبْلَةٌ"
    ],
    "quran": [
     {
      "ar": "وَضَرَبَ اللَّهُ مَثَلًا لِلَّذِينَ آمَنُوا امْرَأَتَ فِرْعَوْنَ إِذْ قَالَتْ رَبِّ ابْنِ لِي عِنْدَكَ بَيْتًا فِي الْجَنَّةِ وَنَجِّنِي مِنْ فِرْعَوْنَ وَعَمَلِهِ وَنَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ",
      "ref": "Tahrîm 66:11",
      "tr": "Allah, iman edenlere Firavun'un karısını örnek gösterdi. Hani o: «Rabbim! Bana katında, cennette bir ev yap; beni Firavun'dan ve yaptıklarından kurtar, beni zalimler topluluğundan kurtar» demişti.",
      "inText": "«وَضَرَبَ اللهُ مَثَلًا لِلَّذِينَ آمَنُوا امْرَأَةَ فِرْعَوْنَ …»"
     },
     {
      "ar": "قَالَ مُوسَىٰ لِقَوْمِهِ اسْتَعِينُوا بِاللَّهِ وَاصْبِرُوا ۖ إِنَّ الْأَرْضَ لِلَّهِ يُورِثُهَا مَنْ يَشَاءُ مِنْ عِبَادِهِ ۖ وَالْعَاقِبَةُ لِلْمُتَّقِينَ",
      "ref": "A'râf 7:128",
      "tr": "Mûsâ kavmine dedi: «Allah'tan yardım dileyin ve sabredin. Yeryüzü Allah'ındır; onu kullarından dilediğine miras bırakır. Güzel sonuç takvâ sahiplerinindir.»",
      "inText": "«اسْتَعِينُوا بِاللهِ وَاصْبِرُوا …»"
     },
     {
      "ar": "قَالُوا أُوذِينَا مِنْ قَبْلِ أَنْ تَأْتِيَنَا وَمِنْ بَعْدِ مَا جِئْتَنَا ۚ قَالَ عَسَىٰ رَبُّكُمْ أَنْ يُهْلِكَ عَدُوَّكُمْ وَيَسْتَخْلِفَكُمْ فِي الْأَرْضِ فَيَنْظُرَ كَيْفَ تَعْمَلُونَ",
      "ref": "A'râf 7:129",
      "tr": "Dediler ki: «Sen bize gelmeden önce de eziyet gördük, geldikten sonra da.» Mûsâ dedi: «Umulur ki Rabbiniz düşmanınızı helak eder ve sizi yeryüzünde onların yerine getirir de nasıl davranacağınıza bakar.»",
      "inText": "«قَالُوا أُوذِينَا مِنْ قَبْلِ أَنْ تَأْتِيَنَا …»"
     },
     {
      "ar": "وَأَوْحَيْنَا إِلَىٰ مُوسَىٰ وَأَخِيهِ أَنْ تَبَوَّآ لِقَوْمِكُمَا بِمِصْرَ بُيُوتًا وَاجْعَلُوا بُيُوتَكُمْ قِبْلَةً وَأَقِيمُوا الصَّلَاةَ ۗ وَبَشِّرِ الْمُؤْمِنِينَ",
      "ref": "Yûnus 10:87",
      "tr": "Mûsâ'ya ve kardeşine şöyle vahyettik: «Mısır'da kavminiz için evler hazırlayın, evlerinizi namaz yerleri yapın ve namazı dosdoğru kılın. Müminleri müjdele.»",
      "inText": "«اجْعَلُوا بُيُوتَكُمْ قِبْلَةً وَأَقِيمُوا الصَّلَاةَ»"
     }
    ]
   },
   "sections": [
    {
     "n": 29,
     "title_ar": "زَوْجُ فِرْعَوْنَ",
     "title_tr": "Firavun'un eşi",
     "s": [
      [
       "وَكَانَ فِرْعَوْنُ يَعْتَقِدُ أَنَّهُ مَلِكُ الْعُقُولِ كَمَا أَنَّهُ مَلِكُ الْأَجْسَامِ.",
       "Firavun, bedenlerin hükümdarı olduğu gibi akılların da hükümdarı olduğuna inanıyordu."
      ],
      [
       "وَأَنَّ لَهُ سُلْطَانًا عَلَى الْقُلُوبِ كَمَا أَنَّ لَهُ سُلْطَانًا عَلَى الْأَلْسِنَةِ.",
       "Dillere hükmettiği gibi kalplere de hükmettiğini sanıyordu."
      ],
      [
       "وَلَيْسَ لِأَحَدٍ فِي مِصْرَ أَنْ يَعْتَقِدَ شَيْئًا أَوْ يُؤْمِنَ بِشَيْءٍ إِلَّا بِإِذْنِهِ.",
       "Mısır'da hiç kimse onun izni olmadan bir şeye inanamaz, bir şeye iman edemezdi."
      ],
      [
       "وَكَانَ إِذَا آمَنَ أَحَدٌ بِمُوسَى فِي أَقْصَى مَمْلَكَةِ مِصْرَ جُنَّ جُنُونُ فِرْعَوْنَ.",
       "Mısır krallığının en uzak köşesinde biri Mûsâ'ya iman etse Firavun çılgına dönerdi."
      ],
      [
       "وَقَامَ فِرْعَوْنُ وَقَعَدَ، وَبَرَقَ فِرْعَوْنُ وَرَعَدَ.",
       "Firavun yerinde duramaz, gürler de gürlerdi."
      ],
      [
       "وَقَالَ كَيْفَ يَكُونُ لَهُ أَنْ يُؤْمِنَ بِمُوسَى قَبْلَ أَنْ آذَنَ لَهُ؟!",
       "Ve derdi: Ben ona izin vermeden o nasıl Mûsâ'ya iman eder?!"
      ],
      [
       "يَعِيشُ فِي مَمْلَكَتِي وَيَعْصِينِي، وَيَأْكُلُ رِزْقِي وَيَكْفُرُنِي؟!",
       "Benim krallığımda yaşayıp bana isyan ediyor, benim rızkımı yiyip beni inkâr ediyor, öyle mi?!"
      ],
      [
       "أَنَا أَوْلَى بِكُلِّ رَجُلٍ فِي مِصْرَ مِنْ نَفْسِهِ!",
       "Ben Mısır'daki her adama kendisinden daha yakınım!"
      ],
      [
       "وَيَنْسَى فِرْعَوْنُ أَنَّهُ يَعِيشُ فِي مَمْلَكَةِ اللهِ وَيَعْصِيهِ، وَيَأْكُلُ رِزْقَ اللهِ وَيَكْفُرُ بِهِ.",
       "Firavun ise kendisinin Allah'ın mülkünde yaşayıp O'na isyan ettiğini, Allah'ın rızkını yiyip O'nu inkâr ettiğini unutuyordu."
      ],
      [
       "وَأَرَاهُ اللهُ آيَةً فِي بَيْتِهِ، آيَةً فِي أَهْلِهِ.",
       "Allah ona kendi evinde, kendi ailesinde bir ibret gösterdi."
      ],
      [
       "أَرَاهُ اللهُ أَنَّهُ مَلِكُ الْعُقُولِ كَمَا أَنَّهُ مَلِكُ الْأَجْسَامِ.",
       "Allah ona, bedenlerin hükümdarı olduğu gibi akılların da hükümdarı olup olmadığını gösterdi."
      ],
      [
       "وَأَنَّ لَهُ سُلْطَانًا عَلَى الْقُلُوبِ كَمَا أَنَّ لَهُ سُلْطَانًا عَلَى الْأَلْسِنَةِ.",
       "Dillere hükmettiği gibi kalplere de hükmedip hükmetmediğini gösterdi."
      ],
      [
       "وَأَنَّ اللهَ يَحُولُ بَيْنَ الرَّجُلِ وَأَهْلِهِ، وَأَنَّ اللهَ يَحُولُ بَيْنَ الْمَرْءِ وَقَلْبِهِ.",
       "Ve Allah'ın adamla ailesi arasına, kişiyle kalbi arasına girdiğini gösterdi."
      ],
      [
       "دَخَلَ الْإِيمَانُ فِي بَيْتِ فِرْعَوْنَ وَهُوَ لَا يَشْعُرُ، وَلَا يَمْلِكُ شَيْئًا.",
       "İman, Firavun'un evine girdi; o ise ne farkındaydı ne de elinden bir şey geliyordu."
      ],
      [
       "وَآمَنَتِ امْرَأَةُ فِرْعَوْنَ بِاللهِ وَكَفَرَتْ بِفِرْعَوْنَ.",
       "Firavun'un karısı Allah'a iman etti ve Firavun'u inkâr etti."
      ],
      [
       "وَآمَنَتْ بِمُوسَى عَلَى رَغْمِ زَوْجِهَا مَلِكِ مِصْرَ.",
       "Kocası Mısır kralına rağmen Mûsâ'ya iman etti."
      ],
      [
       "آمَنَتْ بِمُوسَى أَعْلَمُ خَلْقِ اللهِ بِفِرْعَوْنَ وَأَحَبُّ النَّاسِ إِلَيْهِ.",
       "Mûsâ'ya, Allah'ın kulları içinde Firavun'u en iyi tanıyan ve ona insanların en sevgilisi olan kişi iman etti."
      ],
      [
       "وَلَمْ يَصْنَعْ شُرْطَةُ فِرْعَوْنَ شَيْئًا وَلَمْ يَشْعُرُوا بِذٰلِكَ وَلَهُمْ شَامَّةُ النَّمْلِ وَعُيُونُ الْغُرَابِ.",
       "Firavun'un polisleri hiçbir şey yapamadı, bunun farkına bile varmadılar; oysa karınca gibi koku alır, karga gibi görürlerdi."
      ],
      [
       "وَلَمْ يَشْعُرْ بِذٰلِكَ فِرْعَوْنُ وَهُوَ أَقْرَبُ النَّاسِ إِلَيْهَا.",
       "Ona insanların en yakını olduğu hâlde Firavun da bunu fark etmedi."
      ],
      [
       "وَلَوْ عَلِمَ بِذٰلِكَ فِرْعَوْنُ مَاذَا فَعَلَ؟ إِنَّهُ يَمْلِكُ الْجِسْمَ وَلٰكِنَّهُ لَا يَمْلِكُ الْعَقْلَ.",
       "Firavun bunu bilseydi ne yapabilirdi ki? O bedene sahip olabilir ama akla sahip olamaz."
      ],
      [
       "وَإِنَّ لَهُ سُلْطَانًا عَلَى اللِّسَانِ وَلَيْسَ لَهُ عَلَى الْقَلْبِ سُلْطَانٌ.",
       "Dile hükmedebilir ama kalbe hükmedemez."
      ],
      [
       "عَلَى الْمَرْأَةِ أَنْ تُطِيعَ زَوْجَهَا وَلٰكِنْ لَا طَاعَةَ لِمَخْلُوقٍ فِي مَعْصِيَةِ الْخَالِقِ.",
       "Kadın kocasına itaat etmelidir; ama Yaratıcı'ya isyan konusunda hiçbir yaratılmışa itaat edilmez."
      ],
      [
       "عَلَى الْوَلَدِ أَنْ يُطِيعَ أَبَوَيْهِ وَأَنْ يَكُونَ بِهِمَا بَارًّا رَشِيدًا وَلٰكِنْ لَيْسَ لَهُ أَنْ يُطِيعَهُمَا فِي الشِّرْكِ.",
       "Çocuk anne babasına itaat etmeli, onlara iyilik eden ve aklı başında biri olmalıdır; ama şirk konusunda onlara itaat edemez."
      ],
      [
       "«وَإِنْ جَاهَدَاكَ عَلَى أَنْ تُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِ عِلْمٌ فَلَا تُطِعْهُمَا وَصَاحِبْهُمَا فِي الدُّنْيَا مَعْرُوفًا وَاتَّبِعْ سَبِيلَ مَنْ أَنَابَ إِلَيَّ ثُمَّ إِلَيَّ مَرْجِعُكُمْ فَأُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُونَ».",
       "«Eğer onlar, hakkında bilgin olmayan bir şeyi bana ortak koşman için seni zorlarlarsa onlara itaat etme; dünyada onlarla iyi geçin. Bana yönelenlerin yoluna uy. Sonra dönüşünüz banadır; ben de size yaptıklarınızı haber veririm.»"
      ],
      [
       "وَاسْتَقَامَتِ امْرَأَةُ فِرْعَوْنَ عَلَى الْإِيمَانِ، وَكَانَتْ تَعْبُدُ اللهَ فِي بَيْتِ عَدُوِّ اللهِ.",
       "Firavun'un karısı imanında dimdik durdu; Allah'ın düşmanının evinde Allah'a ibadet ediyordu."
      ],
      [
       "وَكَانَتْ تَخَافُ اللهَ وَتَتَبَرَّأُ إِلَى اللهِ مِمَّا يَعْمَلُ فِرْعَوْنُ.",
       "Allah'tan korkuyor, Firavun'un yaptıklarından Allah'a sığınarak uzak duruyordu."
      ],
      [
       "وَرَضِيَ اللهُ عَنِ امْرَأَةِ فِرْعَوْنَ وَأَنْجَاهَا اللهُ مِنْ فِرْعَوْنَ وَعَمَلِهِ وَضَرَبَهَا اللهُ مَثَلًا لِلْمُؤْمِنِينَ لِإِيمَانِهَا وَشَجَاعَتِهَا.",
       "Allah Firavun'un karısından razı oldu; onu Firavun'dan ve yaptıklarından kurtardı; imanı ve cesareti sebebiyle onu müminlere örnek gösterdi."
      ],
      [
       "«وَضَرَبَ اللهُ مَثَلًا لِلَّذِينَ آمَنُوا امْرَأَةَ فِرْعَوْنَ إِذْ قَالَتْ رَبِّ ابْنِ لِي عِنْدَكَ بَيْتًا فِي الْجَنَّةِ وَنَجِّنِي مِنْ فِرْعَوْنَ وَعَمَلِهِ وَنَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ».",
       "«Allah, iman edenlere Firavun'un karısını örnek gösterdi. Hani o: Rabbim! Bana katında, cennette bir ev yap; beni Firavun'dan ve onun yaptıklarından kurtar, beni zalimler topluluğundan kurtar, demişti.»"
      ]
     ]
    },
    {
     "n": 30,
     "title_ar": "مِحْنَةُ بَنِي إِسْرَائِيلَ",
     "title_tr": "İsrâiloğullarının çilesi",
     "s": [
      [
       "وَلَمَّا عَلِمَ النَّاسُ عَدَاوَةَ فِرْعَوْنَ لِبَنِي إِسْرَائِيلَ، تَقَرَّبُوا إِلَى فِرْعَوْنَ بِعَدَاوَتِهِمْ وَإِيذَائِهِمْ.",
       "İnsanlar Firavun'un İsrâiloğullarına düşmanlığını öğrenince, onlara düşmanlık ve eziyet ederek Firavun'a yaranmaya çalıştılar."
      ],
      [
       "وَاجْتَرَأَ عَلَى بَنِي إِسْرَائِيلَ الْأَطْفَالُ وَهَرَّتْهُمُ الْكِلَابُ.",
       "Çocuklar bile İsrâiloğullarına karşı cüretkâr oldu, köpekler onlara hırladı."
      ],
      [
       "فِي كُلِّ يَوْمٍ مِحْنَةٌ جَدِيدَةٌ! وَفِي كُلِّ يَوْمٍ بَلِيَّةٌ نَازِلَةٌ.",
       "Her gün yeni bir çile! Her gün inen yeni bir belâ!"
      ],
      [
       "وَمُوسَى عَلَيْهِ الصَّلَاةُ وَالسَّلَامُ يُسَلِّيهِمْ وَيُوصِيهِمْ بِالصَّبْرِ، وَيَقُولُ لَهُمْ:",
       "Mûsâ (a.s.) onları teselli ediyor, sabretmelerini tavsiye ediyor ve onlara diyordu:"
      ],
      [
       "«اسْتَعِينُوا بِاللهِ وَاصْبِرُوا إِنَّ الْأَرْضَ لِلهِ يُورِثُهَا مَنْ يَشَاءُ مِنْ عِبَادِهِ وَالْعَاقِبَةُ لِلْمُتَّقِينَ».",
       "«Allah'tan yardım dileyin ve sabredin. Şüphesiz yeryüzü Allah'ındır; onu kullarından dilediğine miras bırakır. Güzel sonuç takvâ sahiplerinindir.»"
      ],
      [
       "وَسَئِمَ بَنُو إِسْرَائِيلَ هٰذِهِ الْمِحْنَةَ وَهٰذَا الْأَذَى وَقَالُوا لِمُوسَى:",
       "İsrâiloğulları bu çileden ve bu eziyetten bıktılar ve Mûsâ'ya dediler:"
      ],
      [
       "لَمْ تَنْفَعْنَا شَيْئًا! لَمْ تُغْنِ عَنَّا شَيْئًا!",
       "Bize hiçbir faydan olmadı! Bize hiçbir yararın dokunmadı!"
      ],
      [
       "«قَالُوا أُوذِينَا مِنْ قَبْلِ أَنْ تَأْتِيَنَا وَمِنْ بَعْدِ مَا جِئْتَنَا».",
       "«Dediler ki: Sen bize gelmeden önce de eziyet gördük, geldikten sonra da.»"
      ],
      [
       "وَلٰكِنَّ مُوسَى لَمْ يَجْزَعْ! وَلٰكِنَّ مُوسَى لَمْ يَيْأَسْ!",
       "Ama Mûsâ sızlanmadı! Ama Mûsâ ümitsizliğe düşmedi!"
      ],
      [
       "«قَالَ عَسَى رَبُّكُمْ أَنْ يُهْلِكَ عَدُوَّكُمْ وَيَسْتَخْلِفَكُمْ فِي الْأَرْضِ فَيَنْظُرَ كَيْفَ تَعْمَلُونَ».",
       "«Dedi ki: Umulur ki Rabbiniz düşmanınızı helak eder ve sizi yeryüzünde onların yerine getirir de nasıl davranacağınıza bakar.»"
      ],
      [
       "«وَقَالَ مُوسَى يَا قَوْمِ إِنْ كُنْتُمْ آمَنْتُمْ بِاللهِ فَعَلَيْهِ تَوَكَّلُوا إِنْ كُنْتُمْ مُسْلِمِينَ».",
       "«Mûsâ dedi: Ey kavmim! Eğer Allah'a iman ettiyseniz ve O'na teslim olmuşsanız, yalnızca O'na tevekkül edin.»"
      ],
      [
       "«فَقَالُوا عَلَى اللهِ تَوَكَّلْنَا رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ * وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ».",
       "«Dediler ki: Biz Allah'a tevekkül ettik. Rabbimiz! Bizi zalimler topluluğu için bir deneme konusu yapma. Rahmetinle bizi kâfirler topluluğundan kurtar.»"
      ],
      [
       "وَكَانَ فِرْعَوْنُ يَمْنَعُ بَنِي إِسْرَائِيلَ مِنْ عِبَادَةِ اللهِ، وَيَغْضَبُ إِذَا رَآهُمْ يَعْبُدُونَ اللهَ وَيُصَلُّونَ لَهُ.",
       "Firavun İsrâiloğullarını Allah'a ibadet etmekten alıkoyuyor, onları Allah'a ibadet edip namaz kılarken görünce öfkeleniyordu."
      ],
      [
       "وَكَانَ يَمْنَعُهُمْ مِنْ أَنْ يَتَّخِذُوا مَسَاجِدَ لِلهِ فِي أَرْضِهِ، وَكَانَ يَغْضَبُ أَنْ يُعْبَدَ اللهُ فِي أَرْضِهِ.",
       "Allah'ın yeryüzünde O'na mescitler edinmelerine engel oluyor, Allah'a O'nun yeryüzünde ibadet edilmesine öfkeleniyordu."
      ],
      [
       "مَا أَجْهَلَ فِرْعَوْنَ! الْأَرْضُ لِلهِ لَا لِفِرْعَوْنَ!",
       "Firavun ne kadar da cahil! Yeryüzü Allah'ındır, Firavun'un değil!"
      ],
      [
       "وَمَنْ أَظْلَمُ مِمَّنْ مَنَعَ عِبَادَ اللهِ أَنْ يَعْبُدُوا اللهَ عَلَى أَرْضِ اللهِ؟!",
       "Allah'ın kullarını Allah'ın yeryüzünde Allah'a ibadet etmekten alıkoyandan daha zalim kim olabilir?!"
      ],
      [
       "وَمَنْ أَظْلَمُ مِمَّنْ دَعَا إِلَى عِبَادَتِهِ عَلَى أَرْضِ اللهِ؟!",
       "Allah'ın yeryüzünde insanları kendisine ibadete çağırandan daha zalim kim olabilir?!"
      ],
      [
       "وَلٰكِنَّ فِرْعَوْنَ مَا كَانَ يَقْدِرُ أَنْ يَمْنَعَ أَحَدًا يَفْعَلُ مَا يَشَاءُ فِي بَيْتِهِ!",
       "Ama Firavun, evinde dilediğini yapan birine engel olamazdı!"
      ],
      [
       "فَأَمَرَ اللهُ بَنِي إِسْرَائِيلَ عَلَى لِسَانِ مُوسَى:",
       "Allah, Mûsâ'nın diliyle İsrâiloğullarına şöyle emretti:"
      ],
      [
       "«اجْعَلُوا بُيُوتَكُمْ قِبْلَةً وَأَقِيمُوا الصَّلَاةَ».",
       "«Evlerinizi namaz kılınacak yerler yapın ve namazı dosdoğru kılın.»"
      ],
      [
       "وَعَجَزَ فِرْعَوْنُ وَعَجَزَتْ شُرْطَتُهُ أَنْ يَحُولُوا بَيْنَ بَنِي إِسْرَائِيلَ وَعِبَادَةِ اللهِ!",
       "Firavun da polisleri de İsrâiloğullarıyla Allah'a ibadet arasına girmekten âciz kaldılar!"
      ],
      [
       "وَمَنْ يَحُولُ بَيْنَ الْعَبْدِ وَرَبِّهِ؟! وَمَنْ يَحُولُ بَيْنَ الْمُسْلِمِ وَعِبَادَةِ اللهِ؟!",
       "Kulla Rabbi arasına kim girebilir?! Müslümanla Allah'a ibadet arasına kim girebilir?!"
      ]
     ]
    }
   ]
  },
  {
   "id": 15,
   "emoji": "🐸",
   "title_ar": "الْمَجَاعَاتُ وَالْآيَاتُ",
   "title_tr": "Kıtlıklar ve mucizeler",
   "pre": {
    "predict": {
     "prompt_tr": "Mısırlılar rızkın anahtarının Nil olduğunu sanıyor. Başlıklar: «الْمَجَاعَاتُ», «خَمْسُ آيَاتٍ». Sence Allah onlara ne gösterdi?",
     "options": [
      [
       "أَنَّ الرِّزْقَ بِيَدِ اللهِ",
       "Rızkın Allah'ın elinde olduğunu"
      ],
      [
       "أَنَّ النِّيلَ لَا يَنْقُصُ أَبَدًا",
       "Nil'in hiç azalmadığını"
      ],
      [
       "أَنَّ فِرْعَوْنَ رَبُّهُمْ",
       "Firavun'un rableri olduğunu"
      ]
     ]
    },
    "vocab": [
     [
      "مَجَاعَةٌ",
      "kıtlık",
      "🌾"
     ],
     [
      "غَاضَ الْمَاءُ",
      "su çekildi",
      "🏜️"
     ],
     [
      "الْجَرَادُ",
      "çekirge",
      "🦗"
     ],
     [
      "الْقُمَّلُ",
      "bit",
      "🐜"
     ],
     [
      "الضَّفَادِعُ",
      "kurbağalar",
      "🐸"
     ],
     [
      "الدَّمُ",
      "kan",
      "🩸"
     ]
    ]
   },
   "stop": {
    "section": 32,
    "after": 10,
    "prompt_tr": "Yağmur ve çekirgelerden sonra da ibret almadılar. «Allah onlara başka bir ordu gönderdi.» Sence bu ordu neydi?",
    "options": [
     [
      "الْقُمَّلُ",
      "Bitler"
     ],
     [
      "جُنُودٌ مِنَ الشَّامِ",
      "Şam'dan askerler"
     ],
     [
      "الْأُسُودُ",
      "Aslanlar"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "غَاضَ مَاءُ النِّيلِ وَكَانَتْ مَجَاعَةٌ.",
     "قَالُوا: هٰذَا مِنْ شُؤْمِ مُوسَى.",
     "أَمْطَرَتِ السَّمَاءُ حَتَّى غَرِقَتِ الزُّرُوعُ.",
     "أَكَلَ الْجَرَادُ الزُّرُوعَ وَالْأَشْجَارَ.",
     "تَسَلَّطَ عَلَيْهِمُ الْقُمَّلُ ثُمَّ الضَّفَادِعُ.",
     "سَالَ الدَّمُ مِنْ آنَافِهِمْ."
    ],
    "questions": [
     {
      "q": "مَاذَا كَانَ يَظُنُّ فِرْعَوْنُ وَأَهْلُ مِصْرَ؟",
      "qt": "Firavun ve Mısır halkı ne sanıyordu?",
      "o": [
       "أَنَّ النِّيلَ هُوَ مِفْتَاحُ الرِّزْقِ",
       "أَنَّ الْمَطَرَ يَكْفِيهِمْ",
       "أَنَّ مُوسَى سَاحِرٌ صَادِقٌ"
      ],
      "ot": [
       "Rızkın anahtarının Nil olduğunu",
       "Yağmurun onlara yettiğini",
       "Mûsâ'nın doğru bir sihirbaz olduğunu"
      ],
      "a": 0,
      "ev": [
       "31.10"
      ]
     },
     {
      "q": "لِمَنْ نَسَبُوا الْمَجَاعَاتِ؟",
      "qt": "Kıtlıkları kime yüklediler?",
      "o": [
       "إِلَى شُؤْمِ مُوسَى وَقَوْمِهِ",
       "إِلَى ظُلْمِ فِرْعَوْنَ",
       "إِلَى أَعْمَالِهِمْ"
      ],
      "ot": [
       "Mûsâ'nın ve kavminin uğursuzluğuna",
       "Firavun'un zulmüne",
       "Kendi yaptıklarına"
      ],
      "a": 0,
      "ev": [
       "31.22"
      ]
     },
     {
      "q": "لِمَاذَا عَجَزَ الْجُنُودُ عَنِ الْجَرَادِ وَالْقُمَّلِ؟",
      "qt": "Askerler çekirge ve bitler karşısında neden âciz kaldı?",
      "o": [
       "لِأَنَّهُ لَا تَعْمَلُ فِيهِ السُّيُوفُ وَلَا السِّهَامُ",
       "لِأَنَّهُمْ كَانُوا نَائِمِينَ",
       "لِأَنَّ فِرْعَوْنَ مَنَعَهُمْ"
      ],
      "ot": [
       "Çünkü onlara ne kılıç işler ne ok",
       "Çünkü uyuyorlardı",
       "Çünkü Firavun onlara engel oldu"
      ],
      "a": 0,
      "ev": [
       "32.8"
      ]
     },
     {
      "q": "مَاذَا كَانُوا يَقُولُونَ لِمُوسَى كُلَّمَا رَأَوْا آيَةً؟",
      "qt": "Her mucizeyi gördüklerinde Mûsâ'ya ne diyorlardı?",
      "o": [
       "ادْعُ لَنَا رَبَّكَ أَنْ يَكْشِفَ عَنَّا الْبَلَاءَ",
       "اخْرُجْ مِنْ مِصْرَ",
       "نَحْنُ لَا نَخَافُ"
      ],
      "ot": [
       "Rabbine dua et de belâyı bizden kaldırsın",
       "Mısır'dan çık",
       "Biz korkmayız"
      ],
      "a": 0,
      "ev": [
       "32.25"
      ]
     },
     {
      "q": "مَاذَا فَعَلُوا لَمَّا كَشَفَ اللهُ عَنْهُمُ الْبَلَاءَ؟",
      "qt": "Allah belâyı kaldırınca ne yaptılar?",
      "o": [
       "نَكَثُوا عَهْدَهُمْ",
       "آمَنُوا بِمُوسَى",
       "أَرْسَلُوا بَنِي إِسْرَائِيلَ"
      ],
      "ot": [
       "Sözlerini bozdular",
       "Mûsâ'ya iman ettiler",
       "İsrâiloğullarını gönderdiler"
      ],
      "a": 0,
      "ev": [
       "32.26"
      ]
     }
    ],
    "focus": {
     "title": "كُلَّمَا: «her … -dığında»",
     "explain": "<b>كُلَّمَا</b> «her ne zaman …sa» demektir ve tekrar eden bir durumu anlatır. Genellikle arkasından mazi fiil gelir, cevabı da mazi olur: <span class='ar-inline'>كُلَّمَا رَأَوْا آيَةً قَالُوا …</span> (her mucize gördüklerinde … derlerdi). Türkçede çoğu zaman geniş zaman ya da «-dıkça» ile karşılanır.",
     "examples": [
      "وَكُلَّمَا رَأَوْا آيَةً قَالُوا لِمُوسَى ادْعُ لَنَا رَبَّكَ",
      "وَكُلَّمَا ضَحِكُوا عَلَيْهِ بَكَى لَهُمْ",
      "وَكُلَّمَا أُمِرُوا بِأَمْرٍ يُخَالِفُونَهُ إِلَى ضِدِّهِ"
     ],
     "items": [
      {
       "q": "____ رَأَوْا آيَةً قَالُوا: ادْعُ لَنَا رَبَّكَ.",
       "o": [
        "وَكُلَّمَا",
        "وَكُلُّ",
        "وَكَيْفَ"
       ],
       "a": 0
      },
      {
       "q": "كُلَّمَا قَالَ لَهُمْ تَعَالَوْا إِلَى اللهِ ____: ارْجِعْ إِلَى دِينِ الْآبَاءِ.",
       "o": [
        "قَالُوا",
        "يَقُولُونَ غَدًا",
        "قَوْلٌ"
       ],
       "a": 0
      },
      {
       "q": "«كُلَّمَا ضَحِكُوا عَلَيْهِ بَكَى لَهُمْ» = …",
       "o": [
        "Ona güldükçe onlar için ağlardı",
        "Ona bir kez güldüler",
        "Hiç ağlamadı"
       ],
       "a": 0
      },
      {
       "q": "«كُلَّمَا» = …",
       "o": [
        "her ne zaman",
        "hiçbir zaman",
        "nereye"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "أَمَرَ اللهُ النِّيلَ فَغَاضَ {مَاؤُهُ}. ثُمَّ أَرْسَلَ عَلَيْهِمُ الْأَمْطَارَ وَ{الْجَرَادَ} وَالْقُمَّلَ وَ{الضَّفَادِعَ} وَالدَّمَ. وَكُلَّمَا رَأَوْا آيَةً قَالُوا: ادْعُ لَنَا {رَبَّكَ}. فَلَمَّا كَشَفَ اللهُ عَنْهُمُ الْبَلَاءَ نَكَثُوا {عَهْدَهُمْ}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ: «بَيْنَمَا هُمْ يَشْكُونَ قِلَّةَ الْمَاءِ إِذَا هُمْ يَشْكُونَ كَثْرَةَ الْمِيَاهِ»؟",
     "qt": "Kitap neden «Suyun azlığından şikâyet ederken bir de baktılar ki suların çokluğundan şikâyet ediyorlar» diyor?",
     "model": "Mısırlılar her şeyin Nil'e bağlı olduğunu sanıyordu. Allah önce suyu kesti, sonra suyu fazlasıyla verdi; ikisi de felaket oldu. Böylece suyun da, rızkın da ölçüsünün Allah'ın elinde olduğunu gördüler. Az da, çok da O'nun takdiriyledir."
    },
    "retell": [
     "النِّيلُ",
     "مَجَاعَةٌ",
     "شُؤْمٌ",
     "الطُّوفَانُ / الْجَرَادُ",
     "الْقُمَّلُ / الضَّفَادِعُ",
     "الدَّمُ"
    ],
    "quran": [
     {
      "ar": "وَقَالُوا مَهْمَا تَأْتِنَا بِهِ مِنْ آيَةٍ لِتَسْحَرَنَا بِهَا فَمَا نَحْنُ لَكَ بِمُؤْمِنِينَ",
      "ref": "A'râf 7:132",
      "tr": "Dediler ki: «Bizi büyülemek için ne mucize getirirsen getir, biz sana inanacak değiliz.»",
      "inText": "«وَقَالُوا مَهْمَا تَأْتِنَا بِهِ مِنْ آيَةٍ …»"
     },
     {
      "ar": "فَأَرْسَلْنَا عَلَيْهِمُ الطُّوفَانَ وَالْجَرَادَ وَالْقُمَّلَ وَالضَّفَادِعَ وَالدَّمَ آيَاتٍ مُفَصَّلَاتٍ فَاسْتَكْبَرُوا وَكَانُوا قَوْمًا مُجْرِمِينَ",
      "ref": "A'râf 7:133",
      "tr": "Biz de üzerlerine tufanı, çekirgeyi, biti, kurbağaları ve kanı ayrı ayrı mucizeler olarak gönderdik. Yine de büyüklendiler; onlar suçlu bir topluluktu.",
      "inText": "«فَأَرْسَلْنَا عَلَيْهِمُ الطُّوفَانَ …»"
     },
     {
      "ar": "وَلَقَدْ أَخَذْنَا آلَ فِرْعَوْنَ بِالسِّنِينَ وَنَقْصٍ مِنَ الثَّمَرَاتِ لَعَلَّهُمْ يَذَّكَّرُونَ",
      "ref": "A'râf 7:130",
      "tr": "Andolsun, öğüt alsınlar diye Firavun ailesini kıtlık yıllarıyla ve ürün eksikliğiyle yakaladık.",
      "inText": "«هٰذِهِ السِّنُونَ» / «نَقَصَتْ ثَمَرَاتُهُمْ»"
     }
    ]
   },
   "sections": [
    {
     "n": 31,
     "title_ar": "الْمَجَاعَاتُ",
     "title_tr": "Kıtlıklar",
     "s": [
      [
       "وَلَمَّا طَغَى فِرْعَوْنُ وَأَسْرَفَ فِي الْغَفْلَةِ وَالْعِنَادِ أَرَادَ اللهُ أَنْ يُنَبِّهَهُ.",
       "Firavun azıp gaflette ve inatta haddi aşınca Allah onu uyarmak istedi."
      ],
      [
       "إِنَّ اللهَ لَا يَرْضَى لِعِبَادِهِ الْكُفْرَ! إِنَّ اللهَ لَا يُحِبُّ الْفَسَادَ فِي الْأَرْضِ!",
       "Allah kullarının inkâr etmesine razı olmaz! Allah yeryüzünde bozgunculuğu sevmez!"
      ],
      [
       "وَكَانَ فِرْعَوْنُ بَلِيدًا جِدًّا، ضَاعَتْ فِيهِ الْحِكْمَةُ وَالْمَوْعِظَةُ.",
       "Firavun çok anlayışsızdı; hikmet de öğüt de onda boşa gitti."
      ],
      [
       "وَالْحِمَارُ لَا يَتَنَبَّهُ حَتَّى يُضْرَبَ!",
       "Eşek de dövülmedikçe kendine gelmez!"
      ],
      [
       "فَأَرَادَ اللهُ أَنْ يُنَبِّهَهُ!",
       "Allah onu uyarmak istedi!"
      ],
      [
       "وَمِصْرُ بِلَادٌ مُخْصِبَةٌ خَضْرَاءُ، بِلَادُ الْخَيْرَاتِ وَالْأَثْمَارِ وَبِلَادُ الْحُبُوبِ.",
       "Mısır verimli, yemyeşil bir ülkedir; bolluk ve meyve ülkesi, tahıl ülkesidir."
      ],
      [
       "وَقَدْ عَلِمْتُمْ كَيْفَ أَنْجَدَتْ مِصْرُ بِلَادًا بَعِيدَةً أَيَّامَ الْمَجَاعَةِ فِي عَهْدِ يُوسُفَ عَلَيْهِ السَّلَامُ.",
       "Yûsuf (a.s.) döneminde, kıtlık günlerinde Mısır'ın uzak ülkelere nasıl yardım ettiğini biliyorsunuz."
      ],
      [
       "وَكَيْفَ أَنْجَدَتْ مِصْرُ أَهْلَ الشَّامِ وَأَهْلَ كَنْعَانَ!",
       "Mısır'ın Şam ve Kenan halkına nasıl yardım ettiğini de!"
      ],
      [
       "وَالنِّيلُ هُوَ الَّذِي يُرْوِي أَرْضَ مِصْرَ وَيَسْقِي زُرُوعَهُمْ.",
       "Mısır toprağını sulayan ve ekinlerine su veren Nil'dir."
      ],
      [
       "وَهُوَ مَنْبَعُ السَّعَادَةِ وَالْخَيْرِ فِي مِصْرَ.",
       "Mısır'da mutluluğun ve bolluğun kaynağı odur."
      ],
      [
       "وَكَانَ فِرْعَوْنُ وَأَهْلُ مِصْرَ يَظُنُّونَ أَنَّ النِّيلَ هُوَ مِفْتَاحُ الرِّزْقِ.",
       "Firavun ve Mısır halkı rızkın anahtarının Nil olduğunu sanıyorlardı."
      ],
      [
       "وَأَنَّ مِصْرَ غَنِيَّةٌ بِالنِّيلِ عَنِ الْمَطَرِ وَعَنْ كُلِّ شَيْءٍ.",
       "Ve Mısır'ın Nil sayesinde yağmura da başka her şeye de muhtaç olmadığını sanıyorlardı."
      ],
      [
       "وَلَا يَعْلَمُونَ أَنَّ اللهَ عِنْدَهُ مَفَاتِيحُ الرِّزْقِ.",
       "Rızkın anahtarlarının Allah katında olduğunu bilmiyorlardı."
      ],
      [
       "وَأَنَّ اللهَ يَبْسُطُ الرِّزْقَ لِمَنْ يَشَاءُ وَيَقْدِرُ.",
       "Allah'ın rızkı dilediğine bol verdiğini, dilediğine daralttığını da bilmiyorlardı."
      ],
      [
       "وَأَنَّ النِّيلَ يَجْرِي بِأَمْرِهِ وَيَفِيضُ بِأَمْرِهِ.",
       "Nil'in de O'nun emriyle aktığını, O'nun emriyle taştığını bilmiyorlardı."
      ],
      [
       "وَأَمَرَ اللهُ النِّيلَ فَغَاضَ مَاؤُهُ وَذَهَبَ فِي الْأَرْضِ.",
       "Allah Nil'e emretti; suyu çekildi ve toprağa gömüldü."
      ],
      [
       "فَمَاذَا يُرْوِي زُرُوعَ أَهْلِ مِصْرَ؟!",
       "Peki şimdi Mısır halkının ekinlerini ne sulayacak?!"
      ],
      [
       "نَقَصَتْ ثَمَرَاتُهُمْ وَنَقَصَتْ حُبُوبُهُمْ وَكَانَتْ مَجَاعَةٌ بَعْدَ مَجَاعَةٍ!",
       "Meyveleri azaldı, tahılları azaldı; kıtlık üstüne kıtlık geldi!"
      ],
      [
       "وَعَجَزَ فِرْعَوْنُ وَعَجَزَ هَامَانُ وَعَجَزَتْ شُرْطَةُ فِرْعَوْنَ عَنْ كُلِّ حِيلَةٍ.",
       "Firavun da Hâmân da Firavun'un polisleri de hiçbir çare bulamadılar."
      ],
      [
       "هُنَالِكَ عَلِمَ أَهْلُ مِصْرَ أَنَّ فِرْعَوْنَ لَيْسَ رَبَّهُمْ، وَأَنَّ الرِّزْقَ بِيَدِ اللهِ!",
       "İşte o zaman Mısır halkı Firavun'un kendi rableri olmadığını, rızkın Allah'ın elinde olduğunu anladı!"
      ],
      [
       "وَلٰكِنَّ ذٰلِكَ لَمْ يَنْفَعْ فِرْعَوْنَ، وَلَمْ يَنْفَعْ أَهْلَ مِصْرَ وَلَمْ يُنَبِّهْهُمْ!",
       "Ama bu ne Firavun'a fayda verdi ne Mısır halkına; onları uyandırmadı da!"
      ],
      [
       "وَحَالَ الشَّيْطَانُ بَيْنَهُمْ وَبَيْنَ الْمَوْعِظَةِ وَالْعِبْرَةِ.",
       "Şeytan onlarla öğüt ve ibret arasına girdi."
      ],
      [
       "قَالُوا هٰذِهِ الْمَجَاعَاتُ وَهٰذِهِ السِّنُونَ مِنْ شُؤْمِ مُوسَى وَقَوْمِهِ!",
       "Dediler ki: Bu kıtlıklar ve bu kurak yıllar Mûsâ'nın ve kavminin uğursuzluğundandır!"
      ],
      [
       "يَا لَلْعَجَبِ! أَلَمْ يَكُنْ مُوسَى مِنْ قَبْلُ؟! أَلَمْ يَكُنْ بَنُو إِسْرَائِيلَ مُنْذُ زَمَنٍ بَعِيدٍ؟!",
       "Ne tuhaf! Mûsâ daha önce de yok muydu?! İsrâiloğulları çok uzun zamandan beri yok muydu?!"
      ],
      [
       "بَلْ ذٰلِكَ مِنْ شُؤْمِ أَعْمَالِهِمْ!! بَلْ ذٰلِكَ مِنْ شُؤْمِ كُفْرِهِمْ!",
       "Hayır, bu kendi işlerinin uğursuzluğundandı!! Hayır, bu kendi inkârlarının uğursuzluğundandı!"
      ],
      [
       "وَعَانَدَ فِرْعَوْنُ وَقَوْمُهُ وَقَالُوا إِنَّا لَا نَخْضَعُ لِهٰذَا السِّحْرِ.",
       "Firavun ve kavmi inat ettiler ve dediler: Biz bu sihre boyun eğmeyiz."
      ],
      [
       "«وَقَالُوا مَهْمَا تَأْتِنَا بِهِ مِنْ آيَةٍ لِتَسْحَرَنَا بِهَا فَمَا نَحْنُ لَكَ بِمُؤْمِنِينَ».",
       "«Dediler ki: Bizi büyülemek için ne mucize getirirsen getir, biz sana inanacak değiliz.»"
      ]
     ]
    },
    {
     "n": 32,
     "title_ar": "خَمْسُ آيَاتٍ",
     "title_tr": "Beş mucize",
     "s": [
      [
       "وَبَعَثَ اللهُ عَلَيْهِمْ آيَةً أُخْرَى.",
       "Allah onlara başka bir mucize gönderdi."
      ],
      [
       "أَرْسَلَ عَلَيْهِمُ الْأَمْطَارَ، فَفَاضَ النِّيلُ.",
       "Üzerlerine yağmurlar gönderdi, Nil taştı."
      ],
      [
       "وَأَمْطَرَتِ السَّمَاءُ وَأَمْطَرَتْ وَأَمْطَرَتْ وَأَمْطَرَتْ.",
       "Gökyüzü yağdırdı da yağdırdı da yağdırdı."
      ],
      [
       "حَتَّى غَرِقَتِ الزُّرُوعُ وَالْحُقُولُ، وَتَلِفَتِ الْحُبُوبُ وَالثِّمَارُ.",
       "Sonunda ekinler ve tarlalar sular altında kaldı, tahıllar ve meyveler mahvoldu."
      ],
      [
       "وَعَادَ الْمَطَرُ عَلَيْهِمْ وَبَالًا.",
       "Yağmur onlar için bir felakete dönüştü."
      ],
      [
       "وَبَيْنَمَا هُمْ يَشْكُونَ قِلَّةَ الْمَاءِ إِذَا هُمْ يَشْكُونَ كَثْرَةَ الْمِيَاهِ.",
       "Az önce suyun azlığından şikâyet ederken, şimdi suların çokluğundan şikâyet ediyorlardı."
      ],
      [
       "ثُمَّ أَرْسَلَ عَلَيْهِمُ الْجَرَادَ يَأْكُلُ الزُّرُوعَ وَالْحُقُولَ وَيَقَعُ عَلَى الْأَشْجَارِ فَلَا يَذَرُ مِنْهَا شَيْئًا.",
       "Sonra üzerlerine çekirgeleri gönderdi; ekinleri ve tarlaları yiyor, ağaçlara konup onlardan hiçbir şey bırakmıyordu."
      ],
      [
       "وَعَجَزَتْ جُنُودُ فِرْعَوْنَ وَشُرْطَتُهُ عَنْ قِتَالِ جُنْدِ اللهِ.",
       "Firavun'un askerleri ve polisleri Allah'ın ordusuyla savaşmaktan âciz kaldı."
      ],
      [
       "وَكَيْفَ يُقَاتِلُونَهُ وَلَا تَعْمَلُ فِيهِ السُّيُوفُ وَلَا تَعْمَلُ فِيهِ السِّهَامُ.",
       "Ona kılıç da işlemezken, ok da işlemezken onunla nasıl savaşsınlar?"
      ],
      [
       "هُنَالِكَ عَلِمَ أَهْلُ مِصْرَ ضَعْفَ فِرْعَوْنَ، وَعَجْزَ هَامَانَ، وَقِلَّةَ حِيلَةِ الشُّرْطَةِ.",
       "İşte o zaman Mısır halkı Firavun'un zayıflığını, Hâmân'ın âcizliğini ve polislerin çaresizliğini anladı."
      ],
      [
       "وَلٰكِنَّهُمْ لَمْ يَعْتَبِرُوا! وَلٰكِنَّهُمْ لَمْ يَتَنَبَّهُوا!",
       "Ama ibret almadılar! Ama uyanmadılar!"
      ],
      [
       "فَبَعَثَ اللهُ عَلَيْهِمْ جُنْدًا آخَرَ، ذٰلِكَ هُوَ الْقُمَّلُ.",
       "Allah onlara başka bir ordu gönderdi: Bitler."
      ],
      [
       "وَتَسَلَّطَ عَلَيْهِمُ الْقُمَّلُ، فَالْعِيَاذُ بِاللهِ!",
       "Bitler onları istila etti; Allah korusun!"
      ],
      [
       "الْقُمَّلُ فِي الْفِرَاشِ، وَالْقُمَّلُ فِي الثِّيَابِ، وَالْقُمَّلُ فِي الرَّأْسِ، وَالْقُمَّلُ فِي الشَّعْرِ.",
       "Yatakta bit, elbiselerde bit, başta bit, saçta bit."
      ],
      [
       "فَطَارَ نَوْمُهُمْ وَبَاتُوا يَقْصَعُونَ الْقُمَّلَ وَيَسُبُّونَهُ، حَتَّى يُصْبِحُوا.",
       "Uykuları kaçtı; sabaha kadar bitleri tırnaklarıyla ezip onlara söverek geceyi geçirdiler."
      ],
      [
       "وَكَيْفَ يُقَاتِلُونَهُ وَالْقُمَّلُ لَا تَعْمَلُ فِيهِ السُّيُوفُ وَلَا تَعْمَلُ فِيهِ السِّهَامُ، وَلَا يُنْجِدُهُمْ فِي ذٰلِكَ جُنُودُهُمْ وَشُرْطَتُهُمْ.",
       "Bitlerle nasıl savaşsınlar? Onlara ne kılıç işler ne ok; bu konuda askerleri ve polisleri de onlara yardım edemez."
      ],
      [
       "ثُمَّ بَعَثَ اللهُ عَلَيْهِمُ الضَّفَادِعَ، فَفِي الطَّعَامِ ضَفَادِعُ، وَفِي الشَّرَابِ ضَفَادِعُ، وَبَيْنَ مَلَابِسِهِمْ ضَفَادِعُ.",
       "Sonra Allah üzerlerine kurbağaları gönderdi: Yemekte kurbağa, içecekte kurbağa, elbiselerinin arasında kurbağa."
      ],
      [
       "وَسَئِمُوا هٰذِهِ الضَّفَادِعَ وَتَنَغَّصَ عَيْشُهُمْ.",
       "Bu kurbağalardan bıktılar, hayatları zehir oldu."
      ],
      [
       "وَانْتَشَرَتِ الضَّفَادِعُ وَفَشَتْ فِي جَمِيعِ أَنْحَاءِ الْبَيْتِ.",
       "Kurbağalar yayıldı, evin her köşesini sardı."
      ],
      [
       "تِلْكَ تَنِقُّ وَهٰذِهِ تَثِبُ هُنَا وَتِلْكَ تَقْفِزُ هُنَاكَ.",
       "Şu vıraklıyor, bu burada sıçrıyor, öteki orada zıplıyor."
      ],
      [
       "وَلَا يَقْتُلُونَ وَاحِدَةً إِلَّا وَتَأْتِي عَشْرٌ وَلَا يُخْرِجُونَ وَاحِدَةً إِلَّا وَتَظْهَرُ خَمْسٌ كَأَنَّهَا تُولَدُ فِي الْبَيْتِ.",
       "Birini öldürdüklerinde on tanesi geliyor, birini çıkardıklarında beş tanesi beliriyordu; sanki evin içinde doğuyorlardı."
      ],
      [
       "عَجَزَتِ الْحُرَّاسُ وَعَجَزَتِ الشُّرْطَةُ عَنِ الضَّفَادِعِ.",
       "Bekçiler de polisler de kurbağalar karşısında âciz kaldı."
      ],
      [
       "وَبَعَثَ اللهُ عَلَيْهِمْ آيَةً خَامِسَةً، ذٰلِكَ هُوَ الدَّمُ.",
       "Allah onlara beşinci bir mucize gönderdi: Kan."
      ],
      [
       "فَسَالَ الرُّعَافُ مِنْ آنَافِهِمْ وَضَعُفُوا وَتَعِبُوا جِدًّا.",
       "Burunlarından kan aktı; zayıf düştüler ve çok yoruldular."
      ],
      [
       "وَعَجَزَ الْأَطِبَّاءُ عَنِ الْعِلَاجِ وَلَمْ يَنْفَعْهُمْ دَوَاءٌ.",
       "Doktorlar tedavi edemedi, hiçbir ilaç onlara fayda vermedi."
      ],
      [
       "وَكُلَّمَا رَأَوْا آيَةً قَالُوا لِمُوسَى ادْعُ لَنَا رَبَّكَ أَنْ يَكْشِفَ عَنَّا الْبَلَاءَ وَنَتُوبَ وَنُؤْمِنَ وَنُرْسِلَ مَعَكَ بَنِي إِسْرَائِيلَ.",
       "Her mucizeyi gördüklerinde Mûsâ'ya: «Rabbine dua et de bu belâyı bizden kaldırsın; tövbe edelim, iman edelim ve İsrâiloğullarını seninle gönderelim» diyorlardı."
      ],
      [
       "فَلَمَّا كَشَفَ اللهُ عَنْهُمُ الْبَلَاءَ نَكَثُوا عَهْدَهُمْ.",
       "Allah belâyı onlardan kaldırınca ise sözlerini bozdular."
      ],
      [
       "«فَأَرْسَلْنَا عَلَيْهِمُ الطُّوفَانَ وَالْجَرَادَ وَالْقُمَّلَ وَالضَّفَادِعَ وَالدَّمَ آيَاتٍ مُفَصَّلَاتٍ فَاسْتَكْبَرُوا وَكَانُوا قَوْمًا مُجْرِمِينَ».",
       "«Biz de üzerlerine tufanı, çekirgeyi, biti, kurbağaları ve kanı ayrı ayrı mucizeler olarak gönderdik. Yine de büyüklendiler; onlar suçlu bir topluluktu.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 16,
   "emoji": "🌊",
   "title_ar": "الْبَحْرُ",
   "title_tr": "Deniz",
   "pre": {
    "predict": {
     "prompt_tr": "Mûsâ İsrâiloğullarıyla geceleyin Mısır'dan çıktı. Başlıklar: «الْخُرُوجُ», «غَرَقُ فِرْعَوْنَ». Önlerinde deniz, arkalarında Firavun'un ordusu var. Sence ne oldu?",
     "options": [
      [
       "انْفَلَقَ الْبَحْرُ وَنَجَوْا",
       "Deniz yarıldı ve kurtuldular"
      ],
      [
       "رَجَعُوا إِلَى مِصْرَ",
       "Mısır'a döndüler"
      ],
      [
       "قَاتَلُوا جُنُودَ فِرْعَوْنَ",
       "Firavun'un askerleriyle savaştılar"
      ]
     ]
    },
    "vocab": [
     [
      "يَسْرِي",
      "geceleyin yürür",
      "🌙"
     ],
     [
      "سِبْطٌ",
      "kabile, boy",
      "👥"
     ],
     [
      "أَمْوَاجٌ",
      "dalgalar",
      "🌊"
     ],
     [
      "غُبَارٌ",
      "toz",
      "💨"
     ],
     [
      "انْفَلَقَ",
      "yarıldı",
      "↔️"
     ],
     [
      "جُثَّةٌ",
      "ceset",
      "⚰️"
     ]
    ]
   },
   "stop": {
    "section": 33,
    "after": 24,
    "prompt_tr": "İnsanlar bağırıyor: «Önümüz deniz, arkamız düşman, bize ölümden başka bir şey kalmadı!» Sence Mûsâ ne dedi?",
    "options": [
     [
      "كَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ",
      "Asla! Rabbim benimle, bana yol gösterecek"
     ],
     [
      "نَعَمْ، سَنَمُوتُ",
      "Evet, öleceğiz"
     ],
     [
      "ارْجِعُوا إِلَى فِرْعَوْنَ",
      "Firavun'a dönün"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "سَارَ مُوسَى بِبَنِي إِسْرَائِيلَ فِي اللَّيْلِ.",
     "وَجَدُوا أَنْفُسَهُمْ أَمَامَ الْبَحْرِ.",
     "رَأَوْا جُنُودَ فِرْعَوْنَ وَرَاءَهُمْ.",
     "ضَرَبَ مُوسَى الْبَحْرَ بِعَصَاهُ فَانْفَلَقَ.",
     "دَخَلَ فِرْعَوْنُ الْبَحْرَ فَانْطَبَقَ عَلَيْهِ.",
     "قَذَفَ الْبَحْرُ جُثَّتَهُ."
    ],
    "questions": [
     {
      "q": "كَمْ سِبْطًا كَانَ بَنُو إِسْرَائِيلَ؟",
      "qt": "İsrâiloğulları kaç kabileydi?",
      "o": [
       "اثْنَا عَشَرَ سِبْطًا",
       "سَبْعَةُ أَسْبَاطٍ",
       "أَرْبَعُونَ سِبْطًا"
      ],
      "ot": [
       "On iki kabile",
       "Yedi kabile",
       "Kırk kabile"
      ],
      "a": 0,
      "ev": [
       "33.5"
      ]
     },
     {
      "q": "إِلَى أَيِّ جَانِبٍ سَارُوا فِي ظَلَامِ اللَّيْلِ؟",
      "qt": "Gecenin karanlığında hangi yöne gittiler?",
      "o": [
       "إِلَى جَانِبِ الشَّرْقِ",
       "إِلَى جَانِبِ الشَّمَالِ",
       "إِلَى جَانِبِ الْغَرْبِ"
      ],
      "ot": [
       "Doğuya",
       "Kuzeye",
       "Batıya"
      ],
      "a": 0,
      "ev": [
       "33.10"
      ]
     },
     {
      "q": "كَمْ طَرِيقًا كَانَ فِي الْبَحْرِ؟",
      "qt": "Denizde kaç yol açıldı?",
      "o": [
       "اثْنَا عَشَرَ طَرِيقًا",
       "طَرِيقٌ وَاحِدٌ",
       "طَرِيقَانِ"
      ],
      "ot": [
       "On iki yol",
       "Tek yol",
       "İki yol"
      ],
      "a": 0,
      "ev": [
       "33.28"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَضْرِبْ مُوسَى الْبَحْرَ مَرَّةً ثَانِيَةً؟",
      "qt": "Mûsâ denize neden ikinci kez vurmadı?",
      "o": [
       "لِأَنَّ اللهَ أَوْحَى إِلَيْهِ: اتْرُكِ الْبَحْرَ سَاكِنًا",
       "لِأَنَّهُ نَسِيَ عَصَاهُ",
       "لِأَنَّهُ كَانَ تَعْبَانَ"
      ],
      "ot": [
       "Çünkü Allah ona «Denizi olduğu gibi bırak» diye vahyetti",
       "Çünkü asasını unuttu",
       "Çünkü yorgundu"
      ],
      "a": 0,
      "ev": [
       "34.6"
      ]
     },
     {
      "q": "مَاذَا قَالَ فِرْعَوْنُ لَمَّا أَدْرَكَهُ الْغَرَقُ؟",
      "qt": "Firavun boğulmak üzereyken ne dedi?",
      "o": [
       "آمَنْتُ أَنَّهُ لَا إِلٰهَ إِلَّا الَّذِي آمَنَتْ بِهِ بَنُو إِسْرَائِيلَ",
       "أَنَا رَبُّكُمُ الْأَعْلَى",
       "أَيْنَ جُنُودِي؟"
      ],
      "ot": [
       "İsrâiloğullarının inandığından başka ilah olmadığına inandım",
       "Ben sizin en yüce rabbinizim",
       "Askerlerim nerede?"
      ],
      "a": 0,
      "ev": [
       "34.9"
      ]
     }
    ],
    "focus": {
     "title": "هُنَالِكَ: «işte o zaman / işte orada»",
     "explain": "<b>هُنَالِكَ</b> aslında «orada» demektir; hikâyede ise bir olayın doruk noktasını gösterir: «işte o an, işte o zaman». Arkasından genellikle mazi fiil gelir: <span class='ar-inline'>هُنَالِكَ ارْتَفَعَتِ الْأَصْوَاتُ</span> (işte o zaman sesler yükseldi). Benzerleri: <span class='ar-inline'>هُنَا</span> (burada), <span class='ar-inline'>هُنَاكَ</span> (şurada).",
     "examples": [
      "هُنَالِكَ ارْتَفَعَتِ الْأَصْوَاتُ.",
      "هُنَالِكَ أَظْلَمَتِ الدُّنْيَا فِي عُيُونِ بَنِي إِسْرَائِيلَ",
      "هُنَالِكَ تَزَلْزَلَ كُلُّ أَحَدٍ"
     ],
     "items": [
      {
       "q": "____ ارْتَفَعَتِ الْأَصْوَاتُ.",
       "o": [
        "هُنَالِكَ",
        "هٰذَا",
        "هَلْ"
       ],
       "a": 0
      },
      {
       "q": "هُنَالِكَ ____ أَهْلُ مِصْرَ أَنَّ فِرْعَوْنَ لَيْسَ رَبَّهُمْ.",
       "o": [
        "عَلِمَ",
        "يَعْلَمُونَ غَدًا",
        "عِلْمٌ"
       ],
       "a": 0
      },
      {
       "q": "تِلْكَ تَنِقُّ وَهٰذِهِ تَثِبُ ____ وَتِلْكَ تَقْفِزُ هُنَاكَ.",
       "o": [
        "هُنَا",
        "هُنَالِكَ",
        "هُمْ"
       ],
       "a": 0
      },
      {
       "q": "«هُنَالِكَ تَزَلْزَلَ كُلُّ أَحَدٍ» = …",
       "o": [
        "İşte o an herkes sarsıldı",
        "Orada kimse yoktu",
        "Herkes sarsılacak"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "سَارَ مُوسَى بِبَنِي إِسْرَائِيلَ فِي {اللَّيْلِ}. فَإِذَا بِهِمْ أَمَامَ {الْبَحْرِ}. فَقَالَ مُوسَى: كَلَّا إِنَّ مَعِيَ رَبِّي {سَيَهْدِينِ}. فَضَرَبَ بِعَصَاهُ الْبَحْرَ {فَانْفَلَقَ}. وَمَاتَ فِرْعَوْنُ فِي الْبَحْرِ {غَرَقًا}."
    },
    "think": {
     "q": "«أَخْطَأَ مُوسَى الطَّرِيقَ، وَحَيْثُ أَخْطَأَ مُوسَى أَصَابَ الْقَدَرُ». مَاذَا يَعْنِي ذٰلِكَ؟",
     "qt": "«Mûsâ yolu şaşırdı; ama Mûsâ'nın şaşırdığı yerde kader isabet etti.» Bu ne demek?",
     "model": "Mûsâ kuzeye, Şam yoluna gittiğini sanıyordu; ama denize çıktı. İnsan gözüyle bu bir hataydı ve herkesi korkuttu. Oysa Allah'ın planı tam da buydu: Deniz yarılacak, İsrâiloğulları kurtulacak, Firavun boğulacaktı. Bizim hata sandığımız şeyin içinde bazen hayır gizlidir."
    },
    "retell": [
     "الْخُرُوجُ لَيْلًا",
     "الْبَحْرُ الْأَحْمَرُ",
     "جُنْدٌ عَظِيمٌ",
     "كَلَّا إِنَّ مَعِيَ رَبِّي",
     "انْفَلَقَ الْبَحْرُ",
     "غَرِقَ فِرْعَوْنُ"
    ],
    "quran": [
     {
      "ar": "فَلَمَّا تَرَاءَى الْجَمْعَانِ قَالَ أَصْحَابُ مُوسَىٰ إِنَّا لَمُدْرَكُونَ ۝ قَالَ كَلَّا ۖ إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ",
      "ref": "Şuarâ 26:61–62",
      "tr": "İki topluluk birbirini görünce Mûsâ'nın arkadaşları: «Yakalandık!» dediler. Mûsâ dedi: «Asla! Rabbim benimle; O bana yol gösterecektir.»",
      "inText": "«كَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ»"
     },
     {
      "ar": "فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنِ اضْرِبْ بِعَصَاكَ الْبَحْرَ ۖ فَانْفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ",
      "ref": "Şuarâ 26:63",
      "tr": "Mûsâ'ya «Asanla denize vur» diye vahyettik. Deniz hemen yarıldı; her parça büyük bir dağ gibiydi.",
      "inText": "«فَضَرَبَ فَانْفَلَقَ الْبَحْرُ وَقَامَ الْمَاءُ عَلَى كُلِّ جَانِبٍ كَالْجَبَلِ»"
     },
     {
      "ar": "وَاتْرُكِ الْبَحْرَ رَهْوًا ۖ إِنَّهُمْ جُنْدٌ مُغْرَقُونَ",
      "ref": "Duhân 44:24",
      "tr": "Denizi açık ve durgun bırak; çünkü onlar boğulacak bir ordudur.",
      "inText": "«إِنَّهُمْ جُنْدٌ مُغْرَقُونَ»"
     },
     {
      "ar": "آلْآنَ وَقَدْ عَصَيْتَ قَبْلُ وَكُنْتَ مِنَ الْمُفْسِدِينَ ۝ فَالْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنْ خَلْفَكَ آيَةً",
      "ref": "Yûnus 10:91–92",
      "tr": "Şimdi mi? Oysa daha önce isyan etmiştin ve bozgunculardan olmuştun. Bugün senden sonrakilere bir ibret olasın diye senin bedenini kurtaracağız.",
      "inText": "«آلْآنَ وَقَدْ عَصَيْتَ قَبْلُ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 33,
     "title_ar": "الْخُرُوجُ",
     "title_tr": "Çıkış",
     "s": [
      [
       "وَضَاقَتْ عَلَى بَنِي إِسْرَائِيلَ أَرْضُ مِصْرَ وَهِيَ وَاسِعَةٌ.",
       "Geniş olduğu hâlde Mısır toprakları İsrâiloğullarına dar geldi."
      ],
      [
       "وَمَا يَصْنَعُونَ بِخِصْبِ مِصْرَ وَخَيْرَاتِهَا وَهُمْ فِي سِجْنٍ يَذُوقُونَ كُلَّ يَوْمٍ صُنُوفًا مِنَ الْعَذَابِ وَالْهَوَانِ؟!",
       "Her gün türlü türlü azap ve aşağılanma tattıkları bir zindandayken Mısır'ın bereketini ve nimetlerini ne yapsınlar?!"
      ],
      [
       "إِلَى مَتَى يَصْبِرُونَ، أَلَيْسُوا بَنِي آدَمَ يَشْعُرُونَ بِالْأَذَى وَالْأَلَمِ؟!",
       "Ne zamana kadar sabredecekler? Onlar da eziyeti ve acıyı hisseden Âdemoğulları değil mi?!"
      ],
      [
       "وَأَوْحَى اللهُ إِلَى مُوسَى أَنْ يَسْرِيَ بِبَنِي إِسْرَائِيلَ لَيْلًا وَيَخْرُجَ بِهِمْ مِنْ مِصْرَ.",
       "Allah Mûsâ'ya, İsrâiloğullarını geceleyin yola çıkarmasını ve onlarla Mısır'dan çıkmasını vahyetti."
      ],
      [
       "وَأَحَسَّ بِذٰلِكَ شُرْطَةُ فِرْعَوْنَ وَلَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ وَأَخْبَرُوا بِذٰلِكَ فِرْعَوْنَ.",
       "Karga gözlü, karınca burunlu Firavun polisleri bunu sezdiler ve Firavun'a haber verdiler."
      ],
      [
       "سَارَ مُوسَى بِبَنِي إِسْرَائِيلَ فِي اللَّيْلِ نَحْوَ الْأَرْضِ الْمُقَدَّسَةِ وَهُمُ اثْنَا عَشَرَ سِبْطًا كُلُّ سِبْطٍ عَلَيْهِ أَمِيرٌ.",
       "Mûsâ İsrâiloğullarıyla geceleyin kutsal topraklara doğru yürüdü. Onlar on iki kabileydi; her kabilenin başında bir emir vardı."
      ],
      [
       "وَالطَّرِيقُ إِلَى الشَّامِ طَرِيقٌ وَاضِحٌ مَعْلُومٌ، بَرٌّ يَصِلُ بَيْنَ الْبَرَّيْنِ وَقَدْ جَازَهُ مُوسَى مَرَّتَيْنِ.",
       "Şam'a giden yol açık ve bilinen bir yoldu; iki karayı birbirine bağlayan bir kara yoluydu. Mûsâ o yoldan iki kez geçmişti (bir kez Medyen'e giderken, bir kez Mısır'a dönerken)."
      ],
      [
       "وَلٰكِنَّ مُوسَى أَرَادَ أَمْرًا وَأَرَادَ اللهُ أَمْرًا وَكَانَ مَا أَرَادَهُ اللهُ.",
       "Ama Mûsâ bir şey istedi, Allah başka bir şey istedi; olan da Allah'ın istediği oldu."
      ],
      [
       "أَخْطَأَ مُوسَى الطَّرِيقَ، وَحَيْثُ أَخْطَأَ مُوسَى أَصَابَ الْقَدَرُ.",
       "Mûsâ yolu şaşırdı; ama Mûsâ'nın şaşırdığı yerde kader isabet etti."
      ],
      [
       "ظَنَّ مُوسَى أَنَّهُ يَسِيرُ بِبَنِي إِسْرَائِيلَ إِلَى جَانِبِ الشَّمَالِ.",
       "Mûsâ İsrâiloğullarıyla kuzey yönüne gittiğini sanıyordu."
      ],
      [
       "فَإِذَا بِهِمْ فِي ظَلَامِ اللَّيْلِ إِلَى جَانِبِ الشَّرْقِ.",
       "Oysa gecenin karanlığında doğu yönüne gidiyorlardı."
      ],
      [
       "وَإِذَا بِهِمْ أَمَامَ الْبَحْرِ الْأَحْمَرِ تَتَلَاطَمُ أَمْوَاجُهُ.",
       "Bir de baktılar ki dalgaları birbirine çarpan Kızıldeniz'in önündeler."
      ],
      [
       "يَا حَافِظُ! يَا سَاتِرُ! أَيْنَ نَحْنُ؟",
       "Ey Koruyan! Ey Örten! Neredeyiz biz?"
      ],
      [
       "كَانَ الْجَوَابُ إِنَّنَا أَمَامَ الْبَحْرِ!",
       "Cevap şuydu: Denizin önündeyiz!"
      ],
      [
       "وَالْتَفَتُوا إِلَى الْوَرَاءِ فَإِذَا بِغُبَارٍ سَاطِعٍ!",
       "Arkalarına döndüler; bir de ne görsünler, yükselen bir toz bulutu!"
      ],
      [
       "وَإِذَا بِجُنْدٍ عَظِيمٍ قَدْ سَدَّ الْأُفُقَ!",
       "Ve ufku kapatmış büyük bir ordu!"
      ],
      [
       "هُنَالِكَ ارْتَفَعَتِ الْأَصْوَاتُ.",
       "İşte o zaman sesler yükseldi."
      ],
      [
       "يَا ابْنَ عِمْرَانَ! مَاذَا أَنْكَرْتَ مِنَّا حَتَّى دَبَّرْتَ قَتْلَنَا!",
       "Ey İmrân'ın oğlu! Bizde neyi beğenmedin de ölümümüzü planladın!"
      ],
      [
       "وَجِئْتَ بِنَا إِلَى شَطِّ الْبَحْرِ لِيَقْتُلَنَا فِرْعَوْنُ قَتْلَ الْفِيرَانِ حَيْثُ لَا فِرَارَ وَلَا نَجَاةَ.",
       "Bizi deniz kıyısına getirdin ki Firavun bizi fare gibi öldürsün; kaçacak yer de yok, kurtuluş da!"
      ],
      [
       "لَا نَذْكُرُ إِلَيْكَ سُوءًا فَلِمَاذَا هٰذَا الِانْتِقَامُ؟!",
       "Sana karşı bir kötülüğümüzü hatırlamıyoruz; o hâlde bu intikam niye?!"
      ],
      [
       "أَلَمْ يَكْفِكَ مَا أَصَابَنَا مِنَ الْجَهْدِ وَالْبَلَاءِ لِأَجْلِكَ حَتَّى جِئْتَ بِنَا إِلَى هُنَا؟!",
       "Senin yüzünden başımıza gelen sıkıntı ve belâ yetmedi mi ki bizi buraya getirdin?!"
      ],
      [
       "هَا هُوَ الْبَحْرُ أَمَامَنَا، وَهَا هُوَ الْعَدُوُّ وَرَاءَنَا، وَلَيْسَ لَنَا إِلَّا الْمَوْتُ!",
       "İşte deniz önümüzde, işte düşman arkamızda; bize ölümden başka bir şey kalmadı!"
      ],
      [
       "هُنَالِكَ أَظْلَمَتِ الدُّنْيَا فِي عُيُونِ بَنِي إِسْرَائِيلَ، وَزَاغَتِ الْأَبْصَارُ وَاسْتَوْلَى الْيَأْسُ ثُمَّ خَفَتَتِ الْأَصْوَاتُ.",
       "İşte o zaman dünya İsrâiloğullarının gözünde karardı; gözler kaydı, ümitsizlik her yanı sardı, sonra sesler kısıldı."
      ],
      [
       "هُنَالِكَ تَزَلْزَلَ كُلُّ أَحَدٍ، وَحُقَّ لِلْجِبَالِ الرَّاسِيَاتِ أَنْ تَتَزَلْزَلَ.",
       "O an herkes sarsıldı; sapasağlam dağların bile sarsılması yerindeydi."
      ],
      [
       "وَلٰكِنَّ إِيمَانَ مُوسَى بِرَبِّهِ لَمْ يَتَزَلْزَلْ وَسَمِعَ النَّاسُ صَوْتًا فِيهِ جَلَالُ النُّبُوَّةِ.",
       "Ama Mûsâ'nın Rabbine imanı sarsılmadı; insanlar içinde peygamberlik heybeti olan bir ses duydular:"
      ],
      [
       "«كَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ».",
       "«Asla! Rabbim benimle; O bana yol gösterecektir.»"
      ],
      [
       "وَأَمَرَ اللهُ مُوسَى أَنْ يَضْرِبَ بِعَصَاهُ الْبَحْرَ.",
       "Allah Mûsâ'ya asasıyla denize vurmasını emretti."
      ],
      [
       "فَضَرَبَ فَانْفَلَقَ الْبَحْرُ وَقَامَ الْمَاءُ عَلَى كُلِّ جَانِبٍ كَالْجَبَلِ.",
       "Vurdu; deniz yarıldı ve su her iki yanda dağ gibi dikildi."
      ],
      [
       "وَإِذَا اثْنَا عَشَرَ طَرِيقًا لِاثْنَيْ عَشَرَ سِبْطًا لِكُلِّ سِبْطٍ طَرِيقٌ.",
       "Bir de baktılar ki on iki kabile için on iki yol açılmış; her kabileye bir yol."
      ],
      [
       "وَسَارَ الْقَوْمُ آمِنِينَ وَوَصَلُوا إِلَى بَرِّ الْأَمْنِ وَالسَّلَامِ.",
       "Kavim güven içinde yürüdü ve güven ve esenlik kıyısına ulaştı."
      ]
     ]
    },
    {
     "n": 34,
     "title_ar": "غَرَقُ فِرْعَوْنَ",
     "title_tr": "Firavun'un boğulması",
     "s": [
      [
       "وَرَأَى فِرْعَوْنُ كَيْفَ سَارَ بَنُو إِسْرَائِيلَ وَعَبَرُوا الْبَحْرَ آمِنِينَ.",
       "Firavun, İsrâiloğullarının nasıl yürüyüp denizi güven içinde geçtiklerini gördü."
      ],
      [
       "وَقَالَ فِرْعَوْنُ لِجُنُودِهِ انْظُرُوا إِلَى الْبَحْرِ كَيْفَ انْفَلَقَ طَوْعًا لِأَمْرِي حَتَّى آخُذَ هٰؤُلَاءِ الْفَارِّينَ.",
       "Firavun askerlerine dedi: Bakın denize, bu kaçakları yakalayayım diye benim emrime boyun eğip nasıl yarıldı!"
      ],
      [
       "وَتَقَدَّمَ فِرْعَوْنُ بِجُنُودِهِ، فَجَزِعَ بَنُو إِسْرَائِيلَ مَرَّةً أُخْرَى.",
       "Firavun askerleriyle ilerledi; İsrâiloğulları bir kez daha paniğe kapıldı."
      ],
      [
       "هَا هُوَ الْعَدُوُّ هَا هُوَ الظَّالِمُ يُرِيدُ أَنْ يَعْبُرَ الطَّرِيقَ إِلَيْنَا.",
       "İşte düşman, işte zalim; yolu geçip bize ulaşmak istiyor."
      ],
      [
       "وَلَا يَمْنَعُهُ مِنَّا شَيْءٌ، وَسَيَلْحَقُنَا وَيَأْخُذُنَا إِلَى مِصْرَ مَأْسُورِينَ أَذِلَّاءَ أَوْ يَقْتُلُنَا فِي هٰذِهِ الْبَرِّيَّةِ غُرَبَاءَ.",
       "Onu bizden hiçbir şey alıkoyamaz; bize yetişecek ve bizi esir ve hor olarak Mısır'a götürecek ya da bu çölde garip hâlde öldürecek."
      ],
      [
       "وَأَرَادَ مُوسَى أَنْ يَضْرِبَ بِعَصَاهُ الْبَرَّ فَيَعُودُ بَحْرًا كَمَا كَانَ وَلٰكِنْ أَوْحَى اللهُ إِلَيْهِ:",
       "Mûsâ asasıyla bu kuru yola vurup onu eskisi gibi denize çevirmek istedi; ama Allah ona vahyetti:"
      ],
      [
       "اتْرُكِ الْبَحْرَ سَاكِنًا «إِنَّهُمْ جُنْدٌ مُغْرَقُونَ».",
       "Denizi olduğu gibi bırak; «Çünkü onlar boğulacak bir ordudur.»"
      ],
      [
       "وَلَمَّا وَصَلَ فِرْعَوْنُ وَجُنُودُهُ إِلَى عَرْضِ الْبَحْرِ (وَهُوَ بَرٌّ) انْطَبَقَ عَلَيْهِمْ.",
       "Firavun ve askerleri denizin ortasına (o sırada kuru bir yoldu) varınca deniz üzerlerine kapandı."
      ],
      [
       "وَلَمَّا رَأَى فِرْعَوْنُ الْجِدَّ زَالَتْ سَكْرَتُهُ.",
       "Firavun işin ciddiyetini görünce sarhoşluğu geçti."
      ],
      [
       "«حَتَّى إِذَا أَدْرَكَهُ الْغَرَقُ قَالَ آمَنْتُ أَنَّهُ لَا إِلٰهَ إِلَّا الَّذِي آمَنَتْ بِهِ بَنُو إِسْرَائِيلَ وَأَنَا مِنَ الْمُسْلِمِينَ».",
       "«Nihayet boğulmak üzereyken dedi: İsrâiloğullarının inandığı ilahtan başka ilah olmadığına inandım; ben de Müslümanlardanım.»"
      ],
      [
       "وَلٰكِنْ هَيْهَاتَ «لَيْسَتِ التَّوْبَةُ لِلَّذِينَ يَعْمَلُونَ السَّيِّئَاتِ حَتَّى إِذَا حَضَرَ أَحَدَهُمُ الْمَوْتُ قَالَ إِنِّي تُبْتُ الْآنَ».",
       "Ama heyhat! «Kötülükleri yapıp dururken, içlerinden birine ölüm gelince ‘Şimdi tövbe ettim’ diyenlerin tövbesi kabul değildir.»"
      ],
      [
       "وَ«يَوْمَ يَأْتِي بَعْضُ آيَاتِ رَبِّكَ لَا يَنْفَعُ نَفْسًا إِيمَانُهَا لَمْ تَكُنْ آمَنَتْ مِنْ قَبْلُ أَوْ كَسَبَتْ فِي إِيمَانِهَا خَيْرًا».",
       "Ve: «Rabbinin bazı alametleri geldiği gün, daha önce iman etmemiş ya da imanında bir hayır kazanmamış kimseye o gün getireceği iman fayda vermez.»"
      ],
      [
       "فَقِيلَ لَهُ «آلْآنَ وَقَدْ عَصَيْتَ قَبْلُ وَكُنْتَ مِنَ الْمُفْسِدِينَ».",
       "Ona denildi ki: «Şimdi mi? Oysa daha önce isyan etmiştin ve bozgunculardan olmuştun.»"
      ],
      [
       "وَمَاتَ فِرْعَوْنُ فِي الْبَحْرِ غَرَقًا.",
       "Firavun denizde boğularak öldü."
      ],
      [
       "مَاتَ الْجَبَّارُ الَّذِي قَتَلَ أُلُوفًا مِنَ الْأَطْفَالِ وَالرِّجَالِ ذَبْحًا وَخَنْقًا.",
       "Binlerce çocuğu ve adamı boğazlayarak ve boğarak öldüren zorba öldü."
      ],
      [
       "مَاتَ الطَّاغِيَةُ الَّذِي قَتَلَ أُلُوفَ الْآلَافِ صَبْرًا وَشَنْقًا.",
       "Yüz binlerce insanı işkenceyle ve asarak öldüren azgın öldü."
      ],
      [
       "مَاتَ مَلِكُ مِصْرَ بَعِيدًا عَنْ عَرْشِهِ بَعِيدًا عَنْ قَصْرِهِ، بَعِيدًا عَنْ سُلْطَانِهِ لَا طَبِيبٌ يُدَاوِيهِ وَلَا صَدِيقٌ يُوَاسِيهِ، وَلَا عَيْنٌ تَبْكِيهِ.",
       "Mısır kralı tahtından uzakta, sarayından uzakta, saltanatından uzakta öldü; ne onu tedavi edecek bir doktor vardı, ne teselli edecek bir dost, ne de ardından ağlayacak bir göz."
      ],
      [
       "وَكَانَ بَنُو إِسْرَائِيلَ فِي شَكٍّ عَنْ مَوْتِهِ يَقُولُونَ إِنَّ فِرْعَوْنَ لَا يَمُوتُ.",
       "İsrâiloğulları onun öldüğünden şüphe ediyor, «Firavun ölmez» diyorlardı."
      ],
      [
       "أَمَا كُنَّا نَرَاهُ يَقْضِي أَيَّامًا وَلَا يَأْكُلُ وَلَا يَشْرَبُ؟!",
       "Onun günlerce yemeden içmeden durduğunu görmüyor muyduk?!"
      ],
      [
       "وَقَذَفَ الْبَحْرُ جُثَّتَهُ فَأَيْقَنُوا بِمَوْتِهِ.",
       "Deniz onun cesedini kıyıya attı; o zaman öldüğüne kesin olarak inandılar."
      ],
      [
       "وَقَالَ اللهُ تَعَالَى لِفِرْعَوْنَ «فَالْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنْ خَلْفَكَ آيَةً» وَكَانَتْ جُثَّةُ فِرْعَوْنَ آيَةً لِلنَّاظِرِينَ وَعِبْرَةً لِلْمُعْتَبِرِينَ.",
       "Allah Teâlâ Firavun'a şöyle dedi: «Bugün senden sonrakilere bir ibret olasın diye senin bedenini kurtaracağız.» Firavun'un cesedi bakanlar için bir delil, ibret alanlar için bir ders oldu."
      ],
      [
       "وَغَرِقَ جُنْدُ فِرْعَوْنَ عَنْ آخِرِهِ وَمَا نَجَا مِنْهُمْ أَحَدٌ.",
       "Firavun'un ordusu son ferdine kadar boğuldu; içlerinden hiç kimse kurtulmadı."
      ],
      [
       "وَخَلَّفُوا مِصْرَ وَرَاءَهُمْ وَلَمْ يَجِدُوا فِي أَرْضِهَا الْوَاسِعَةِ ذِرَاعًا لِمَدْفِنٍ.",
       "Mısır'ı arkalarında bıraktılar; onun geniş topraklarında kendilerine bir arşınlık mezar yeri bile bulamadılar."
      ],
      [
       "«كَمْ تَرَكُوا مِنْ جَنَّاتٍ وَعُيُونٍ، وَزُرُوعٍ وَمَقَامٍ كَرِيمٍ، وَنَعْمَةٍ كَانُوا فِيهَا فَاكِهِينَ، كَذٰلِكَ وَأَوْرَثْنَاهَا قَوْمًا آخَرِينَ، فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ وَمَا كَانُوا مُنْظَرِينَ».",
       "«Nice bahçeler ve pınarlar, ekinler ve güzel konaklar, içinde zevk ve sefa sürdükleri nice nimetler bıraktılar! İşte böyle oldu; biz onları başka bir kavme miras olarak verdik. Ne gök onlar için ağladı ne yer; onlara mühlet de verilmedi.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 17,
   "emoji": "🌥️",
   "title_ar": "فِي الْبَرِّيَّةِ",
   "title_tr": "Çölde",
   "pre": {
    "predict": {
     "prompt_tr": "İsrâiloğulları kurtuldu ama çöldeler: güneş yakıyor, su ve yiyecek yok. Başlıklar: «فِي الْبَرِّيَّةِ», «كُفْرَانُ بَنِي إِسْرَائِيلَ». Sence Allah onlara nasıl ikram etti, onlar nasıl karşılık verdi?",
     "options": [
      [
       "أَطْعَمَهُمُ اللهُ فَسَئِمُوا وَطَلَبُوا غَيْرَهُ",
       "Allah onları doyurdu; onlar bıkıp başka şey istediler"
      ],
      [
       "جَاعُوا حَتَّى مَاتُوا",
       "Ölünceye kadar aç kaldılar"
      ],
      [
       "رَجَعُوا إِلَى مِصْرَ فَرِحِينَ",
       "Sevinçle Mısır'a döndüler"
      ]
     ]
    },
    "vocab": [
     [
      "الْغَمَامُ",
      "bulut",
      "☁️"
     ],
     [
      "عَطِشَ / جَاعَ",
      "susadı / acıktı",
      "🥵"
     ],
     [
      "الْمَنُّ وَالسَّلْوَى",
      "kudret helvası ve bıldırcın",
      "🍯"
     ],
     [
      "الْبُقُولُ / الْخُضَرُ",
      "yeşillikler / sebzeler",
      "🥬"
     ],
     [
      "عَدَسٌ / بَصَلٌ",
      "mercimek / soğan",
      "🧅"
     ],
     [
      "عَنِيدٌ",
      "inatçı",
      "😤"
     ]
    ]
   },
   "stop": {
    "section": 36,
    "after": 5,
    "prompt_tr": "Dediler: «Ey Mûsâ, tek çeşit yemeğe dayanamayız; bize sebze, mercimek ve soğan iste!» Sence Mûsâ ne hissetti?",
    "options": [
     [
      "تَعَجَّبَ وَعَاتَبَهُمْ",
      "Şaşırdı ve onlara sitem etti"
     ],
     [
      "فَرِحَ بِطَلَبِهِمْ",
      "İsteklerine sevindi"
     ],
     [
      "ضَحِكَ وَسَكَتَ",
      "Gülüp sustu"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "أَظَلَّهُمُ الْغَمَامُ فِي الْبَرِّيَّةِ.",
     "ضَرَبَ مُوسَى الْحَجَرَ فَانْفَجَرَتِ اثْنَتَا عَشْرَةَ عَيْنًا.",
     "أَنْزَلَ اللهُ عَلَيْهِمُ الْمَنَّ وَالسَّلْوَى.",
     "سَئِمُوا الطَّعَامَ الْوَاحِدَ وَطَلَبُوا الْبُقُولَ.",
     "قِيلَ لَهُمْ: ادْخُلُوا الْبَابَ سُجَّدًا.",
     "بَدَّلُوا الْقَوْلَ فَأَنْزَلَ اللهُ عَلَيْهِمْ وَبَاءً."
    ],
    "questions": [
     {
      "q": "كَيْفَ حَمَاهُمُ اللهُ مِنْ حَرِّ الشَّمْسِ؟",
      "qt": "Allah onları güneşin sıcağından nasıl korudu?",
      "o": [
       "أَمَرَ الْغَمَامَ أَنْ يُظِلَّهُمْ",
       "ضَرَبَ لَهُمُ الْخِيَامَ",
       "أَدْخَلَهُمْ كَهْفًا"
      ],
      "ot": [
       "Bulutlara onları gölgelemesini emretti",
       "Onlara çadırlar kurdu",
       "Onları bir mağaraya soktu"
      ],
      "a": 0,
      "ev": [
       "35.7"
      ]
     },
     {
      "q": "كَمْ عَيْنًا انْفَجَرَتْ مِنَ الْحَجَرِ؟",
      "qt": "Taştan kaç pınar fışkırdı?",
      "o": [
       "اثْنَتَا عَشْرَةَ عَيْنًا",
       "عَيْنٌ وَاحِدَةٌ",
       "سَبْعُ عُيُونٍ"
      ],
      "ot": [
       "On iki pınar",
       "Bir pınar",
       "Yedi pınar"
      ],
      "a": 0,
      "ev": [
       "35.12"
      ]
     },
     {
      "q": "مَا الْمَنُّ وَالسَّلْوَى؟",
      "qt": "Menn ve selvâ nedir?",
      "o": [
       "شَيْءٌ مِثْلُ الْحَلْوَى وَطَيْرٌ",
       "خُبْزٌ وَمَاءٌ",
       "عَدَسٌ وَبَصَلٌ"
      ],
      "ot": [
       "Helvaya benzer bir şey ve kuş",
       "Ekmek ve su",
       "Mercimek ve soğan"
      ],
      "a": 0,
      "ev": [
       "35.16"
      ]
     },
     {
      "q": "كَيْفَ كَانَتْ طِبَاعُ بَنِي إِسْرَائِيلَ؟",
      "qt": "İsrâiloğullarının huyları nasıldı?",
      "o": [
       "قَلِيلِي التَّشَكُّرِ كَثِيرِي التَّشَكِّي",
       "صَبُورِينَ شَاكِرِينَ",
       "شُجْعَانًا أَقْوِيَاءَ"
      ],
      "ot": [
       "Az şükreden, çok şikâyet eden",
       "Sabırlı ve şükreden",
       "Cesur ve güçlü"
      ],
      "a": 0,
      "ev": [
       "36.2"
      ]
     },
     {
      "q": "كَيْفَ دَخَلُوا الْقَرْيَةَ؟",
      "qt": "Şehre nasıl girdiler?",
      "o": [
       "كُرْهًا وَهُزُوًا يَزْحَفُونَ",
       "سُجَّدًا يَقُولُونَ حِطَّةٌ",
       "رَاكِبِينَ عَلَى الْخَيْلِ"
      ],
      "ot": [
       "İsteksizce ve alay ederek sürünerek",
       "Eğilerek ve «Hıtta» diyerek",
       "Atlara binerek"
      ],
      "a": 0,
      "ev": [
       "37.7"
      ]
     }
    ],
    "focus": {
     "title": "Hayret ünlemi: يَا لَـ…! / مَا أَفْعَلَهُ!",
     "explain": "Şaşkınlık ya da hayret bildirmek için <b>يَا لَـ</b> + isim kullanılır: <span class='ar-inline'>يَا لَلْعَجَبِ!</span> (ne tuhaf!), <span class='ar-inline'>يَا لَفَسَادِ الذَّوْقِ!</span> (ne bozuk bir zevk!). Diğer kalıp <b>مَا أَفْعَلَ</b> + isim: <span class='ar-inline'>مَا أَجْهَلَ فِرْعَوْنَ!</span> (Firavun ne kadar cahil!).",
     "examples": [
      "يَا لَفَسَادِ الذَّوْقِ! يَا لَسُوءِ الِاخْتِيَارِ!",
      "يَا لَلْعَجَبِ! أَلَمْ يَكُنْ مُوسَى مِنْ قَبْلُ؟!",
      "مَا أَجْهَلَ فِرْعَوْنَ! الْأَرْضُ لِلهِ لَا لِفِرْعَوْنَ!"
     ],
     "items": [
      {
       "q": "____ الذَّوْقِ!",
       "o": [
        "يَا لَفَسَادِ",
        "يَا فَسَادُ",
        "مَا فَسَدَ"
       ],
       "a": 0
      },
      {
       "q": "____ فِرْعَوْنَ!",
       "o": [
        "مَا أَجْهَلَ",
        "مَا جَهِلَ",
        "يَا جَاهِلَ"
       ],
       "a": 0
      },
      {
       "q": "يَا ____! أَلَمْ يَكُنْ مُوسَى مِنْ قَبْلُ؟",
       "o": [
        "لَلْعَجَبِ",
        "عَجِيبٌ",
        "تَعَجَّبَ"
       ],
       "a": 0
      },
      {
       "q": "«يَا لَسُوءِ الِاخْتِيَارِ!» = …",
       "o": [
        "Ne kötü bir seçim!",
        "Seçim kötü değil",
        "Kötü seçme!"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "أَمَرَ اللهُ الْغَمَامَ أَنْ {يُظِلَّهُمْ}. وَضَرَبَ مُوسَى بِعَصَاهُ {الْحَجَرَ} فَانْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ {عَيْنًا}. وَأَنْزَلَ اللهُ عَلَيْهِمُ الْمَنَّ {وَالسَّلْوَى}. وَلٰكِنَّهُمْ قَالُوا: لَنْ نَصْبِرَ عَلَى طَعَامٍ {وَاحِدٍ}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ إِنَّ الْعُبُودِيَّةَ الطَّوِيلَةَ أَفْسَدَتْ ذَوْقَهُمْ وَخُلُقَهُمْ؟",
     "qt": "Kitap neden uzun köleliğin onların zevkini ve ahlakını bozduğunu söylüyor?",
     "model": "Yüzyıllarca köle olarak yaşayan insanlar kendi kararlarını vermeyi, sabretmeyi ve şükretmeyi öğrenememişti. Kölelikte alıştıkları köylü yemeğini, hür insanlara verilen «krallar yemeğine» tercih ettiler; emirlere de inatla karşı çıktılar. Yazar, özgürlüğün yalnızca zincirlerden kurtulmak olmadığını, insanın içindeki köleliği de bırakması gerektiğini anlatıyor."
    },
    "retell": [
     "الْبَرِّيَّةُ",
     "الْغَمَامُ",
     "اثْنَتَا عَشْرَةَ عَيْنًا",
     "الْمَنُّ وَالسَّلْوَى",
     "الْبُقُولُ وَالْعَدَسُ",
     "ادْخُلُوا الْبَابَ سُجَّدًا"
    ],
    "quran": [
     {
      "ar": "وَإِذِ اسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِ فَقُلْنَا اضْرِبْ بِعَصَاكَ الْحَجَرَ ۖ فَانْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا ۖ قَدْ عَلِمَ كُلُّ أُنَاسٍ مَشْرَبَهُمْ",
      "ref": "Bakara 2:60",
      "tr": "Hani Mûsâ kavmi için su istemişti; biz de «Asanla taşa vur» dedik. Ondan on iki pınar fışkırdı; her topluluk kendi içeceği yeri bildi.",
      "inText": "«فَانْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا …»"
     },
     {
      "ar": "وَظَلَّلْنَا عَلَيْكُمُ الْغَمَامَ وَأَنْزَلْنَا عَلَيْكُمُ الْمَنَّ وَالسَّلْوَىٰ ۖ كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ",
      "ref": "Bakara 2:57",
      "tr": "Bulutu üzerinize gölge yaptık; size kudret helvası ve bıldırcın indirdik: «Size verdiğimiz rızıkların temiz olanlarından yiyin.»",
      "inText": "«ذٰلِكَ هُوَ الْمَنُّ وَالسَّلْوَى»"
     },
     {
      "ar": "وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَنْ نَصْبِرَ عَلَىٰ طَعَامٍ وَاحِدٍ فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنْبِتُ الْأَرْضُ مِنْ بَقْلِهَا وَقِثَّائِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا ۖ قَالَ أَتَسْتَبْدِلُونَ الَّذِي هُوَ أَدْنَىٰ بِالَّذِي هُوَ خَيْرٌ ۚ اهْبِطُوا مِصْرًا فَإِنَّ لَكُمْ مَا سَأَلْتُمْ",
      "ref": "Bakara 2:61",
      "tr": "Hani «Ey Mûsâ! Tek çeşit yemeğe dayanamayacağız; Rabbine dua et de bize yerin bitirdiği sebzeden, acurdan, sarımsaktan, mercimekten ve soğandan çıkarsın» demiştiniz. Mûsâ: «Daha iyiyi daha aşağı olanla mı değiştirmek istiyorsunuz? Bir şehre inin; istedikleriniz orada var» demişti.",
      "inText": "«يَا مُوسَى لَنْ نَصْبِرَ عَلَى طَعَامٍ وَاحِدٍ …»"
     },
     {
      "ar": "وَإِذْ قُلْنَا ادْخُلُوا هَٰذِهِ الْقَرْيَةَ فَكُلُوا مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا وَادْخُلُوا الْبَابَ سُجَّدًا وَقُولُوا حِطَّةٌ نَغْفِرْ لَكُمْ خَطَايَاكُمْ ۚ وَسَنَزِيدُ الْمُحْسِنِينَ ۝ فَبَدَّلَ الَّذِينَ ظَلَمُوا قَوْلًا غَيْرَ الَّذِي قِيلَ لَهُمْ",
      "ref": "Bakara 2:58–59 (krş. A'râf 7:161)",
      "tr": "Hani «Bu şehre girin, orada dilediğiniz yerde bol bol yiyin; kapıdan eğilerek girin ve ‘Hıtta’ deyin ki hatalarınızı bağışlayalım; iyilik edenlere daha fazlasını vereceğiz» demiştik. Zulmedenler, kendilerine söylenen sözü başka bir sözle değiştirdiler.",
      "inText": "«اسْكُنُوا هٰذِهِ الْقَرْيَةَ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 35,
     "title_ar": "فِي الْبَرِّيَّةِ!",
     "title_tr": "Çölde!",
     "s": [
      [
       "وَصَلَ بَنُو إِسْرَائِيلَ إِلَى بَرِّ الْأَمْنِ وَالسَّلَامِ وَتَنَفَّسُوا فِي هَوَائِهِ كَالْأَحْرَارِ الْأَشْرَافِ.",
       "İsrâiloğulları güven ve esenlik kıyısına ulaştılar ve onun havasını hür ve şerefli insanlar gibi soludular."
      ],
      [
       "هُنَالِكَ لَا يَخَافُونَ فِرْعَوْنَ وَلَا يَخَافُونَ هَامَانَ وَلَا يَخَافُونَ شُرْطَتَهُ.",
       "Artık orada ne Firavun'dan korkuyorlardı ne Hâmân'dan ne de onun polislerinden."
      ],
      [
       "هُنَالِكَ يَمْشُونَ آمِنِينَ مُطْمَئِنِّينَ لَا يَخْشَوْنَ أَحَدًا إِلَّا اللهَ.",
       "Orada güven ve huzur içinde yürüyor, Allah'tan başka kimseden korkmuyorlardı."
      ],
      [
       "وَلٰكِنَّهُمْ كَانُوا أَهْلَ الْحَضَرِ وَكَانَتِ الشَّمْسُ تُؤْذِيهِمْ فِي الْبَرِّيَّةِ.",
       "Ama onlar şehir insanıydı; çölde güneş onlara eziyet ediyordu."
      ],
      [
       "وَكَانُوا ضُيُوفَ اللهِ! أَلَمْ تَرَ إِلَى الْمُلُوكِ كَيْفَ يُكْرِمُونَ ضُيُوفَهُمْ؟!",
       "Onlar Allah'ın misafirleriydi! Krallar misafirlerine nasıl ikram eder, görmedin mi?!"
      ],
      [
       "وَكَيْفَ يَضْرِبُونَ لَهُمُ الْخِيَامَ تَقِيهِمْ حَرَّ الشَّمْسِ؟!",
       "Onları güneşin sıcağından korusun diye onlara nasıl çadırlar kurarlar?!"
      ],
      [
       "إِنَّ كَرَامَةَ اللهِ فَوْقَ كُلِّ كَرَامَةٍ!",
       "Allah'ın ikramı her ikramın üstündedir!"
      ],
      [
       "وَأَمَرَ اللهُ الْغَمَامَ أَنْ يُظِلَّهُمْ، فَكَانُوا يَمْشُونَ فِي ظِلِّ الْغَمَامِ، وَكَانَ الْغَمَامُ يَسِيرُ مَعَهُمْ حَيْثُ سَارُوا وَيَقِفُ أَيْنَمَا وَقَفُوا.",
       "Allah bulutlara onları gölgelemesini emretti. Bulutların gölgesinde yürüyorlardı; bulut, nereye giderlerse onlarla gidiyor, nerede dururlarsa duruyordu."
      ],
      [
       "وَعَطِشَ بَنُو إِسْرَائِيلَ وَلَا مَاءَ فِي الْبَرِّيَّةِ، وَلَا نَهْرَ وَلَا بِئْرَ.",
       "İsrâiloğulları susadı; çölde ne su vardı, ne nehir, ne kuyu."
      ],
      [
       "ذَهَبُوا إِلَى مُوسَى، يَشْكُونَ إِلَيْهِ الْعَطَشَ كَمَا يَشْكُو الطِّفْلُ إِلَى أُمِّهِ وَيَسْتَغِيثُهَا.",
       "Çocuğun annesine şikâyet edip ondan yardım istemesi gibi Mûsâ'ya gidip ona susuzluktan yakındılar."
      ],
      [
       "وَدَعَا مُوسَى رَبَّهُ! وَمَنْ لَهُ غَيْرُهُ؟!",
       "Mûsâ Rabbine dua etti! Onun O'ndan başka kimi var ki?!"
      ],
      [
       "فَقَالَ «اضْرِبْ بِعَصَاكَ الْحَجَرَ».",
       "Allah buyurdu: «Asanla taşa vur.»"
      ],
      [
       "«فَانْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا قَدْ عَلِمَ كُلُّ أُنَاسٍ مَشْرَبَهُمْ».",
       "«Ondan on iki pınar fışkırdı. Her topluluk kendi içeceği yeri bildi.»"
      ],
      [
       "وَجَاعَ بَنُو إِسْرَائِيلَ فَشَكَوْا إِلَى مُوسَى الْجُوعَ كَمَا يَشْكُو الطِّفْلُ إِلَى أُمِّهِ وَيَسْتَغِيثُهَا.",
       "İsrâiloğulları acıktı; çocuğun annesine şikâyet edip ondan yardım istemesi gibi Mûsâ'ya açlıktan yakındılar."
      ],
      [
       "وَقَالُوا إِنَّكَ أَخْرَجْتَنَا مِنْ مِصْرَ أَرْضِ الْفَوَاكِهِ وَالثَّمَرَاتِ وَأَرْضِ الْخَيْرَاتِ وَالطَّيِّبَاتِ فَمَنْ لَنَا بِطَعَامٍ فِي هٰذِهِ الْبَرِّيَّةِ؟",
       "Dediler ki: Sen bizi meyvelerin ve ürünlerin, nimetlerin ve güzel yiyeceklerin ülkesi Mısır'dan çıkardın; bu çölde bize kim yiyecek verecek?"
      ],
      [
       "دَعَا مُوسَى رَبَّهُ! وَمَنْ لَهُ غَيْرُهُ؟! فَأَنْزَلَ عَلَيْهِمُ الطَّعَامَ.",
       "Mûsâ Rabbine dua etti! Onun O'ndan başka kimi var ki?! Allah da onlara yiyecek indirdi."
      ],
      [
       "أَنْزَلَ لَهُمْ عَلَى أَوْرَاقِ الْأَشْجَارِ مِثْلَ الْحَلْوَى، وَأَرْسَلَ إِلَيْهِمْ طَيْرًا يَأْخُذُونَهُ مِنَ الْأَشْجَارِ بِسُهُولَةٍ.",
       "Ağaçların yaprakları üzerine onlar için helvaya benzer bir şey indirdi; onlara ağaçlardan kolayca tuttukları kuşlar gönderdi."
      ],
      [
       "ذٰلِكَ هُوَ الْمَنُّ وَالسَّلْوَى، ضِيَافَةُ اللهِ لِبَنِي إِسْرَائِيلَ فِي الْبَرِّيَّةِ.",
       "İşte bu, Allah'ın çölde İsrâiloğullarına ikramı olan kudret helvası ve bıldırcındır."
      ]
     ]
    },
    {
     "n": 36,
     "title_ar": "كُفْرَانُ بَنِي إِسْرَائِيلَ",
     "title_tr": "İsrâiloğullarının nankörlüğü",
     "s": [
      [
       "وَلٰكِنَّ بَنِي إِسْرَائِيلَ قَدْ أَفْسَدَ ذَوْقَهُمْ وَخُلُقَهُمُ الْعُبُودِيَّةُ الطَّوِيلَةُ.",
       "Ama uzun süren kölelik İsrâiloğullarının zevkini ve ahlakını bozmuştu."
      ],
      [
       "وَكَانُوا لَا يَقِرُّونَ عَلَى شَيْءٍ، وَكَانُوا لَا يَسْكُنُونَ إِلَى شَيْءٍ وَكَانُوا فِي طِبَاعِهِمْ أَطْفَالًا.",
       "Hiçbir şeyde karar kılmaz, hiçbir şeyle yetinip huzur bulmazlardı; huyları çocuk gibiydi."
      ],
      [
       "وَكَانُوا قَلِيلِي التَّشَكُّرِ كَثِيرِي التَّشَكِّي سَرِيعِي السَّآمَةِ يُحِبُّونَ مَا مُنِعُوا وَيَكْرَهُونَ مَا أُعْطُوا.",
       "Az şükreder, çok şikâyet eder, çabuk bıkarlardı; kendilerinden esirgeneni sever, kendilerine verileni beğenmezlerdi."
      ],
      [
       "وَلَمْ يَلْبَثُوا قَلِيلًا أَنْ قَالُوا لِمُوسَى قَدْ سَئِمْنَا هٰذَا الطَّعَامَ الْوَاحِدَ، وَقَدْ سَئِمْنَا هٰذَا اللَّحْمَ وَهٰذِهِ الْحَلْوَى.",
       "Çok geçmeden Mûsâ'ya dediler: Bu tek çeşit yemekten bıktık; bu etten ve bu tatlıdan bıktık."
      ],
      [
       "وَقَدِ اشْتَهَيْنَا الْخُضَرَ وَالْبُقُولَ.",
       "Sebze ve yeşillik canımız çekti."
      ],
      [
       "«يَا مُوسَى لَنْ نَصْبِرَ عَلَى طَعَامٍ وَاحِدٍ فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنْبِتُ الْأَرْضُ مِنْ بَقْلِهَا وَقِثَّائِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا».",
       "«Ey Mûsâ! Biz tek çeşit yemeğe dayanamayacağız. Bizim için Rabbine dua et de bize yerin bitirdiği şeylerden; sebzesinden, acurundan, sarımsağından, mercimeğinden ve soğanından çıkarsın.»"
      ],
      [
       "تَعَجَّبَ مُوسَى مِنْ هٰذَا السُّؤَالِ الْغَرِيبِ وَقَالَ بِصَوْتٍ فِيهِ الْإِنْكَارُ وَفِيهِ الِاسْتِعْجَابُ وَفِيهِ الْعِتَابُ.",
       "Mûsâ bu tuhaf istek karşısında şaşırdı; içinde itiraz, hayret ve sitem bulunan bir sesle dedi:"
      ],
      [
       "«أَتَسْتَبْدِلُونَ الَّذِي هُوَ أَدْنَى بِالَّذِي هُوَ خَيْرٌ»؟!",
       "«Daha iyi olanı daha aşağı olanla mı değiştirmek istiyorsunuz?»!"
      ],
      [
       "أَبُقُولًا وَخُضَرًا مَكَانَ طُيُورٍ وَحَلْوَى لَمْ تَمَسَّهَا يَدُ إِنْسَانٍ؟!",
       "İnsan eli değmemiş kuşların ve tatlının yerine yeşillik ve sebze mi?!"
      ],
      [
       "أَطَعَامَ الْفَلَّاحِينَ بَدَلَ طَعَامِ الْمُلُوكِ؟",
       "Kralların yemeği yerine köylülerin yemeği mi?"
      ],
      [
       "يَا لَفَسَادِ الذَّوْقِ! يَا لَسُوءِ الِاخْتِيَارِ!",
       "Ne bozuk bir zevk! Ne kötü bir seçim!"
      ],
      [
       "وَلٰكِنَّ بَنِي إِسْرَائِيلَ لَمْ يَتَنَازَلُوا عَنْ سُؤَالِهِمْ، وَلَمْ يَزَالُوا يَطْلُبُونَ الْخُضَرَ وَالْبُقُولَ.",
       "Ama İsrâiloğulları isteklerinden vazgeçmediler; sebze ve yeşillik istemeye devam ettiler."
      ],
      [
       "فَقَالَ مُوسَى إِنَّ مَا سَأَلْتُمْ يُوجَدُ فِي كُلِّ قَرْيَةٍ وَمِصْرٍ.",
       "Mûsâ dedi: İstediğiniz şey her köyde ve her şehirde bulunur."
      ],
      [
       "«اهْبِطُوا مِصْرًا فَإِنَّ لَكُمْ مَا سَأَلْتُمْ».",
       "«Bir şehre inin; istedikleriniz orada sizin için var.»"
      ]
     ]
    },
    {
     "n": 37,
     "title_ar": "عِنَادُ بَنِي إِسْرَائِيلَ",
     "title_tr": "İsrâiloğullarının inadı",
     "s": [
      [
       "وَكَانَتْ بَنُو إِسْرَائِيلَ فِي طِبَاعِهِمْ أَطْفَالًا، وَأَطْفَالًا مُعَانِدِينَ.",
       "İsrâiloğulları huyca çocuktu; hem de inatçı çocuklar."
      ],
      [
       "وَكُلَّمَا أُمِرُوا بِأَمْرٍ يُخَالِفُونَهُ إِلَى ضِدِّهِ وَيَسْتَهْزِئُونَ بِهِ.",
       "Kendilerine ne emredildiyse ona muhalefet edip tam tersini yapıyor ve onunla alay ediyorlardı."
      ],
      [
       "كَأَنَّهُمْ يَرَوْنَ مِنَ الْوَاجِبِ أَنْ يُبَدِّلُوا مَا يُقَالُ لَهُمْ.",
       "Sanki kendilerine söyleneni değiştirmeyi bir görev sayıyorlardı."
      ],
      [
       "كَطِفْلٍ عَنِيدٍ يُقَالُ لَهُ قُمْ فَيَجْلِسُ وَيُقَالُ لَهُ اجْلِسْ فَيَقُومُ، وَيُقَالُ لَهُ اسْكُتْ فَيَتَكَلَّمُ وَيُقَالُ لَهُ تَكَلَّمْ فَيَسْكُتُ.",
       "Tıpkı inatçı bir çocuk gibi: Ona «Kalk» denir, oturur; «Otur» denir, kalkar; «Sus» denir, konuşur; «Konuş» denir, susar."
      ],
      [
       "وَكَانَ فِيهِمْ عِنَادُ الْأَطْفَالِ فِي خُبْثِ الْأَشْرَارِ فِي هُزْءِ الْأَعْدَاءِ فِي سَفَاهَةِ الْمَجَانِينِ.",
       "Onlarda kötülerin sinsiliği, düşmanların alaycılığı ve delilerin beyinsizliğiyle birleşmiş bir çocuk inadı vardı."
      ],
      [
       "كَانُوا يُرِيدُونَ أَنْ يَسْكُنُوا قَرْيَةً وَيَأْكُلُوا طَعَامَهُمُ الشَّهِيَّ مِنَ الْخُضَرِ وَالْبُقُولِ.",
       "Bir köye yerleşmek ve sevdikleri sebze ve yeşillik yemeklerini yemek istiyorlardı."
      ],
      [
       "وَلٰكِنَّهُمْ لَمَّا قِيلَ لَهُمْ «اسْكُنُوا هٰذِهِ الْقَرْيَةَ وَكُلُوا مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا وَادْخُلُوا الْبَابَ سُجَّدًا وَقُولُوا حِطَّةٌ نَغْفِرْ لَكُمْ خَطَايَاكُمْ وَسَنَزِيدُ الْمُحْسِنِينَ».",
       "Ama onlara şöyle denildiğinde: «Bu şehre yerleşin, orada dilediğiniz yerde bol bol yiyin; kapıdan eğilerek girin ve ‘Hıtta (bizi bağışla)’ deyin ki hatalarınızı bağışlayalım; iyilik edenlere daha fazlasını vereceğiz.»"
      ],
      [
       "غَضِبُوا مِنْ هٰذَا الْأَمْرِ الْإِلٰهِيِّ، وَدَخَلُوا الْقَرْيَةَ كُرْهًا وَهُزُوًا يَزْحَفُونَ عَلَى أَسْتَاهِهِمْ.",
       "Bu ilahî emre öfkelendiler; şehre isteksizce ve alay ederek, kalçalarının üstünde sürünerek girdiler."
      ],
      [
       "«فَبَدَّلَ الَّذِينَ ظَلَمُوا قَوْلًا غَيْرَ الَّذِي قِيلَ لَهُمْ».",
       "«Zulmedenler, kendilerine söylenen sözü başka bir sözle değiştirdiler.»"
      ],
      [
       "فَأَنْزَلَ اللهُ عَلَيْهِمْ بَلَاءً وَبَعَثَ عَلَيْهِمْ وَبَاءً مَاتُوا مِنْهُ مَوْتَ الْفِيرَانِ.",
       "Allah da onlara bir belâ indirdi, üzerlerine bir salgın gönderdi; ondan fareler gibi öldüler."
      ],
      [
       "وَإِذَا أُمِرُوا بِأَمْرٍ أَكْثَرُوا السُّؤَالَ وَالتَّنْقِيرَ.",
       "Kendilerine bir şey emredildiğinde soruyu ve kurcalamayı çoğaltırlardı."
      ],
      [
       "شَأْنَ رَجُلٍ لَا يُرِيدُ أَنْ يَعْمَلَ فَيُكْثِرُ السُّؤَالَ وَالتَّنْقِيرَ.",
       "Tıpkı iş yapmak istemeyen, bu yüzden soruyu ve kurcalamayı çoğaltan bir adam gibi."
      ],
      [
       "حَدَثَ فِي بَنِي إِسْرَائِيلَ حَادِثُ قَتْلٍ، فَأَهَمَّ ذٰلِكَ بَنِي إِسْرَائِيلَ.",
       "İsrâiloğulları arasında bir cinayet oldu; bu, İsrâiloğullarını çok kaygılandırdı."
      ],
      [
       "وَلَمْ يَهْتَدُوا إِلَى الْقَاتِلِ، وَكَانَ السُّؤَالُ عَنِ الْقَاتِلِ حَدِيثَ النَّاسِ.",
       "Katili bulamadılar; katilin kim olduğu herkesin konuştuğu konu oldu."
      ],
      [
       "جَاءُوا إِلَى مُوسَى عَلَيْهِ الصَّلَاةُ وَالسَّلَامُ وَقَالُوا أَعِنَّا يَا نَبِيَّ اللهِ فِي هٰذِهِ الْقَضِيَّةِ وَادْعُ اللهَ يُبَيِّنْ لَنَا الْقَاتِلَ.",
       "Mûsâ'ya (a.s.) gelip dediler: Ey Allah'ın peygamberi! Bu meselede bize yardım et; Allah'a dua et de bize katili açıklasın."
      ]
     ]
    }
   ]
  },
  {
   "id": 18,
   "emoji": "🐄",
   "title_ar": "الْبَقَرَةُ وَالشَّرِيعَةُ",
   "title_tr": "İnek ve şeriat",
   "pre": {
    "predict": {
     "prompt_tr": "Bir cinayet oldu, katil bilinmiyor. Allah onlara bir inek kesmelerini emretti. Başlık: «الْبَقَرَةُ». Sence İsrâiloğulları hemen kestiler mi?",
     "options": [
      [
       "لَا، أَكْثَرُوا السُّؤَالَ عَنْهَا",
       "Hayır, onun hakkında çok soru sordular"
      ],
      [
       "نَعَمْ، ذَبَحُوا أَوَّلَ بَقَرَةٍ",
       "Evet, ilk ineği kestiler"
      ],
      [
       "هَرَبُوا مِنَ الْقَرْيَةِ",
       "Köyden kaçtılar"
      ]
     ]
    },
    "vocab": [
     [
      "بَقَرَةٌ",
      "inek",
      "🐄"
     ],
     [
      "فَارِضٌ / بِكْرٌ",
      "yaşlı / körpe",
      "👵"
     ],
     [
      "عَوَانٌ",
      "orta yaşlı",
      "🐮"
     ],
     [
      "صَفْرَاءُ فَاقِعٌ",
      "parlak sarı",
      "🟡"
     ],
     [
      "تُثِيرُ الْأَرْضَ",
      "toprağı sürer",
      "🚜"
     ],
     [
      "شَرِيعَةٌ",
      "şeriat, ilahî kanun",
      "📖"
     ]
    ]
   },
   "stop": {
    "section": 38,
    "after": 13,
    "prompt_tr": "Üçüncü kez sordular ve sonunda «Allah dilerse doğruyu buluruz» dediler. Sence bu sefer ne oldu?",
    "options": [
     [
      "وُفِّقُوا فَاهْتَدَوْا",
      "Muvaffak oldular ve doğruyu buldular"
     ],
     [
      "غَضِبَ مُوسَى وَتَرَكَهُمْ",
      "Mûsâ öfkelenip onları bıraktı"
     ],
     [
      "لَمْ يَجِدُوا بَقَرَةً أَبَدًا",
      "Hiç inek bulamadılar"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "دَعَا مُوسَى رَبَّهُ فِي أَمْرِ الْقَاتِلِ.",
     "أَمَرَهُمُ اللهُ أَنْ يَذْبَحُوا بَقَرَةً.",
     "سَأَلُوا عَنْ سِنِّهَا ثُمَّ عَنْ لَوْنِهَا.",
     "فَتَّشُوا عَنِ الْبَقَرَةِ وَتَعِبُوا.",
     "اشْتَرَوْهَا مِنْ يَتِيمٍ بِثَمَنٍ غَالٍ.",
     "ذَبَحُوهَا وَمَا كَادُوا يَفْعَلُونَ."
    ],
    "questions": [
     {
      "q": "بِمَاذَا أَوْحَى اللهُ إِلَى مُوسَى لَمَّا دَعَاهُ؟",
      "qt": "Mûsâ dua edince Allah ona ne vahyetti?",
      "o": [
       "أَنْ يَأْمُرَهُمْ بِذَبْحِ بَقَرَةٍ",
       "أَنْ يَخْرُجُوا مِنَ الْقَرْيَةِ",
       "أَنْ يَصُومُوا ثَلَاثِينَ يَوْمًا"
      ],
      "ot": [
       "Onlara bir inek kesmelerini emretmesini",
       "Köyden çıkmalarını",
       "Otuz gün oruç tutmalarını"
      ],
      "a": 0,
      "ev": [
       "38.0"
      ]
     },
     {
      "q": "مَاذَا قَالُوا لَمَّا أَمَرَهُمْ مُوسَى بِذَبْحِ بَقَرَةٍ؟",
      "qt": "Mûsâ onlara inek kesmeyi emredince ne dediler?",
      "o": [
       "أَتَتَّخِذُنَا هُزُوًا",
       "سَمِعْنَا وَأَطَعْنَا",
       "لَا نَمْلِكُ بَقَرَةً"
      ],
      "ot": [
       "Bizimle alay mı ediyorsun?",
       "İşittik ve itaat ettik",
       "İneğimiz yok"
      ],
      "a": 0,
      "ev": [
       "38.3"
      ]
     },
     {
      "q": "مَا لَوْنُ الْبَقَرَةِ؟",
      "qt": "İneğin rengi neydi?",
      "o": [
       "صَفْرَاءُ فَاقِعٌ لَوْنُهَا",
       "سَوْدَاءُ",
       "بَيْضَاءُ"
      ],
      "ot": [
       "Parlak sarı",
       "Siyah",
       "Beyaz"
      ],
      "a": 0,
      "ev": [
       "38.10"
      ]
     },
     {
      "q": "لِمَاذَا صَعُبَ عَلَيْهِمُ الْأَمْرُ؟",
      "qt": "İş onlara neden zorlaştı?",
      "o": [
       "لِأَنَّهُمْ شَدَّدُوا فَشَدَّدَ اللهُ عَلَيْهِمْ",
       "لِأَنَّ الْبَقَرَ قَلِيلٌ فِي مِصْرَ",
       "لِأَنَّ مُوسَى لَمْ يُخْبِرْهُمْ"
      ],
      "ot": [
       "Çünkü onlar zorlaştırdı, Allah da onlara zorlaştırdı",
       "Çünkü Mısır'da inek azdı",
       "Çünkü Mûsâ onlara haber vermedi"
      ],
      "a": 0,
      "ev": [
       "38.15"
      ]
     },
     {
      "q": "لِمَاذَا يَحْتَاجُ النَّاسُ إِلَى الْأَنْبِيَاءِ؟",
      "qt": "İnsanlar peygamberlere neden muhtaçtır?",
      "o": [
       "لِأَنَّ الْعَالَمَ ظَلَامٌ إِلَّا مَنْ أَشْرَقَ لَهُ نُورٌ مِنْ رَبِّهِ",
       "لِأَنَّهُمْ أَغْنِيَاءُ",
       "لِأَنَّهُمْ يَبْنُونَ الْبُيُوتَ"
      ],
      "ot": [
       "Çünkü Rabbinden nur doğan dışında dünya karanlıktır",
       "Çünkü zengindirler",
       "Çünkü ev yaparlar"
      ],
      "a": 0,
      "ev": [
       "39.4"
      ]
     }
    ],
    "focus": {
     "title": "إِمَّا … وَإِمَّا: «ya … ya da …»",
     "explain": "İki ya da daha fazla seçenek sayarken her birinin başına <b>إِمَّا</b> getirilir; ikinciden itibaren <b>وَإِمَّا</b> denir: <span class='ar-inline'>إِمَّا بَقَرَةٌ فَارِضٌ وَإِمَّا بَقَرَةٌ بِكْرٌ</span> (ya yaşlı bir inek ya da körpe bir inek). Dikkat: <span class='ar-inline'>أَمَّا … فَـ</span> (… ise) ile karıştırmayın.",
     "examples": [
      "فَإِمَّا بَقَرَةٌ فَارِضٌ وَإِمَّا بَقَرَةٌ بِكْرٌ.",
      "وَإِمَّا عَوَانٌ وَلٰكِنْ غَيْرُ صَفْرَاءَ.",
      "وَإِمَّا بَقَرَةٌ عَوَانٌ صَفْرَاءُ وَلٰكِنْ لَوْنُهَا غَيْرُ فَاقِعٍ."
     ],
     "items": [
      {
       "q": "فَإِمَّا بَقَرَةٌ فَارِضٌ ____ بَقَرَةٌ بِكْرٌ.",
       "o": [
        "وَإِمَّا",
        "وَأَمَّا",
        "وَلَا"
       ],
       "a": 0
      },
      {
       "q": "____ عَوَانٌ وَلٰكِنْ غَيْرُ صَفْرَاءَ.",
       "o": [
        "وَإِمَّا",
        "وَإِنَّمَا",
        "وَأَيُّ"
       ],
       "a": 0
      },
      {
       "q": "«أَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ» — burada أَمَّا = …",
       "o": [
        "… ise / … a gelince",
        "ya … ya",
        "değil"
       ],
       "a": 0
      },
      {
       "q": "«إِمَّا … وَإِمَّا …» = …",
       "o": [
        "ya … ya da …",
        "hem … hem …",
        "ne … ne …"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ مُوسَى: إِنَّ اللهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا {بَقَرَةً}. فَسَأَلُوا: مَا هِيَ؟ مَا {لَوْنُهَا}؟ فَقَالَ: إِنَّهَا بَقَرَةٌ {صَفْرَاءُ} فَاقِعٌ لَوْنُهَا. فَذَبَحُوهَا وَمَا {كَادُوا} يَفْعَلُونَ. وَالْعَالَمُ كُلُّهُ ظَلَامٌ إِلَّا مَنْ أَشْرَقَ لَهُ {نُورٌ} مِنْ رَبِّهِ."
    },
    "think": {
     "q": "«فَلَوْ ذَبَحُوا أَيَّ بَقَرَةٍ لَكَانَتْ كَافِيَةً». مَاذَا نَتَعَلَّمُ مِنْ هٰذَا؟",
     "qt": "«Herhangi bir inek kesselerdi yeterdi.» Bundan ne öğreniyoruz?",
     "model": "Emir başta basitti: bir inek kesin. Ama İsrâiloğulları yapmak istemedikleri için soru üstüne soru sordular; her soru seçenekleri daralttı, sonunda çok zor bulunan, çok pahalı bir inek almak zorunda kaldılar. Gereksiz kurcalamak, işten kaçmanın bir yolu olabilir ve insanın kendi işini zorlaştırır."
    },
    "retell": [
     "حَادِثُ قَتْلٍ",
     "بَقَرَةٌ",
     "مَا هِيَ؟ مَا لَوْنُهَا؟",
     "يَتِيمٌ",
     "ذَبَحُوهَا",
     "نُورُ الْأَنْبِيَاءِ"
    ],
    "quran": [
     {
      "ar": "وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً ۖ قَالُوا أَتَتَّخِذُنَا هُزُوًا ۖ قَالَ أَعُوذُ بِاللَّهِ أَنْ أَكُونَ مِنَ الْجَاهِلِينَ",
      "ref": "Bakara 2:67",
      "tr": "Hani Mûsâ kavmine «Allah size bir inek kesmenizi emrediyor» demişti. «Bizimle alay mı ediyorsun?» dediler. «Cahillerden olmaktan Allah'a sığınırım» dedi.",
      "inText": "«وَإِذْ قَالَ مُوسَى لِقَوْمِهِ …»"
     },
     {
      "ar": "قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَنَا مَا لَوْنُهَا ۚ قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا تَسُرُّ النَّاظِرِينَ",
      "ref": "Bakara 2:69",
      "tr": "«Rabbine dua et de rengi ne, bize açıklasın» dediler. Mûsâ: «Allah diyor ki o, rengi parlak sarı, bakanların içini açan bir inektir» dedi.",
      "inText": "«قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَنَا مَا لَوْنُهَا»"
     },
     {
      "ar": "قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ لَا ذَلُولٌ تُثِيرُ الْأَرْضَ وَلَا تَسْقِي الْحَرْثَ مُسَلَّمَةٌ لَا شِيَةَ فِيهَا ۚ قَالُوا الْآنَ جِئْتَ بِالْحَقِّ ۚ فَذَبَحُوهَا وَمَا كَادُوا يَفْعَلُونَ",
      "ref": "Bakara 2:71",
      "tr": "Mûsâ dedi: «Allah diyor ki o, boyunduruğa koşulup toprak sürmeyen, ekin sulamayan, kusursuz, alacasız bir inektir.» «İşte şimdi gerçeği getirdin» dediler. Sonunda onu kestiler; ama neredeyse yapmayacaklardı.",
      "inText": "«فَذَبَحُوهَا وَمَا كَادُوا يَفْعَلُونَ»"
     },
     {
      "ar": "أَوْ كَظُلُمَاتٍ فِي بَحْرٍ لُجِّيٍّ يَغْشَاهُ مَوْجٌ مِنْ فَوْقِهِ مَوْجٌ مِنْ فَوْقِهِ سَحَابٌ ۚ ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ إِذَا أَخْرَجَ يَدَهُ لَمْ يَكَدْ يَرَاهَا ۗ وَمَنْ لَمْ يَجْعَلِ اللَّهُ لَهُ نُورًا فَمَا لَهُ مِنْ نُورٍ",
      "ref": "Nûr 24:40",
      "tr": "Ya da derin bir denizdeki karanlıklar gibidir: Onu dalga, üstünde dalga, onun da üstünde bulut kaplar. Birbiri üstüne binmiş karanlıklar! İnsan elini çıkarsa neredeyse göremez. Allah kime nur vermemişse onun hiç nuru yoktur.",
      "inText": "«ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 38,
     "title_ar": "الْبَقَرَةُ",
     "title_tr": "İnek",
     "s": [
      [
       "وَدَعَا مُوسَى رَبَّهُ فَأَوْحَى إِلَيْهِ أَنْ يَأْمُرَهُمْ بِذَبْحِ بَقَرَةٍ.",
       "Mûsâ Rabbine dua etti; Allah da ona, onlara bir inek kesmelerini emretmesini vahyetti."
      ],
      [
       "هُنَالِكَ حَلَّتِ الْمُصِيبَةُ، وَبَدَأَ بَنُو إِسْرَائِيلَ يَسْأَلُونَ وَيَسْخَرُونَ.",
       "İşte o zaman musibet başladı; İsrâiloğulları sorup alay etmeye başladılar."
      ],
      [
       "«وَإِذْ قَالَ مُوسَى لِقَوْمِهِ إِنَّ اللهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً».",
       "«Hani Mûsâ kavmine: Allah size bir inek kesmenizi emrediyor, demişti.»"
      ],
      [
       "«قَالُوا أَتَتَّخِذُنَا هُزُوًا».",
       "«Dediler ki: Bizimle alay mı ediyorsun?»"
      ],
      [
       "«قَالَ أَعُوذُ بِاللهِ أَنْ أَكُونَ مِنَ الْجَاهِلِينَ».",
       "«Dedi ki: Cahillerden olmaktan Allah'a sığınırım.»"
      ],
      [
       "وَهُنَا أَرْسَلُوا الْأَسْئِلَةَ.",
       "Ve burada soruları sıralamaya başladılar."
      ],
      [
       "«قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَنَا مَا هِيَ»؟",
       "«Dediler ki: Bizim için Rabbine dua et de onun nasıl bir şey olduğunu bize açıklasın.»"
      ],
      [
       "«قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ لَا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذٰلِكَ فَافْعَلُوا مَا تُؤْمَرُونَ».",
       "«Dedi ki: Allah diyor ki o ne yaşlı ne de körpe, ikisi arası orta yaşlı bir inektir. Haydi size emredileni yapın.»"
      ],
      [
       "وَلَمْ يَقِفُوا عَلَى هٰذَا السُّؤَالِ، بَلْ بَدَءُوا يَسْأَلُونَ عَنْ لَوْنِهَا.",
       "Bu soruyla yetinmediler; bu kez rengini sormaya başladılar."
      ],
      [
       "«قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَنَا مَا لَوْنُهَا».",
       "«Dediler ki: Bizim için Rabbine dua et de rengi ne, bize açıklasın.»"
      ],
      [
       "«قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا تَسُرُّ النَّاظِرِينَ».",
       "«Dedi ki: Allah diyor ki o, rengi parlak sarı, bakanların içini açan bir inektir.»"
      ],
      [
       "وَلَمْ يَجِدُوا سُؤَالًا فَأَطْلَقُوا السُّؤَالَ.",
       "Soracak başka bir şey bulamayınca soruyu genel tuttular."
      ],
      [
       "«قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَنَا مَا هِيَ إِنَّ الْبَقَرَ تَشَابَهَ عَلَيْنَا وَإِنَّا إِنْ شَاءَ اللهُ لَمُهْتَدُونَ».",
       "«Dediler ki: Bizim için Rabbine dua et de onun nasıl bir şey olduğunu bize açıklasın; çünkü inekler bize birbirine benzer göründü. Allah dilerse biz doğruyu buluruz.»"
      ],
      [
       "«قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ لَا ذَلُولٌ تُثِيرُ الْأَرْضَ وَلَا تَسْقِي الْحَرْثَ مُسَلَّمَةٌ لَا شِيَةَ فِيهَا».",
       "«Dedi ki: Allah diyor ki o, boyunduruğa koşulup toprak sürmeyen, ekin sulamayan, kusursuz, alacası olmayan bir inektir.»"
      ],
      [
       "وَوُفِّقُوا فِي هٰذِهِ الْمَرَّةِ لِأَنَّهُمْ قَالُوا «وَإِنَّا إِنْ شَاءَ اللهُ لَمُهْتَدُونَ» فَاهْتَدَوْا.",
       "Bu sefer muvaffak oldular; çünkü «Allah dilerse biz doğruyu buluruz» demişlerdi; böylece doğruyu buldular."
      ],
      [
       "وَلٰكِنَّ أَسْئِلَتَهُمْ ضَيَّقَتْ عَلَيْهِمُ الْأَمْرَ، فَلَوْ ذَبَحُوا أَيَّ بَقَرَةٍ لَكَانَتْ كَافِيَةً، وَلٰكِنَّهُمْ شَدَّدُوا فَشَدَّدَ اللهُ عَلَيْهِمْ.",
       "Ama soruları işi kendilerine zorlaştırdı. Herhangi bir inek kesselerdi yeterdi; ama onlar zorlaştırdılar, Allah da onlara zorlaştırdı."
      ],
      [
       "وَفَتَّشُوا عَنِ الْبَقَرَةِ الْعَوَانِ الصَّفْرَاءِ الْفَاقِعِ لَوْنُهَا الَّتِي لَا تُثِيرُ الْأَرْضَ وَلَا تَسْقِي الْحَرْثَ الْمُسَلَّمَةِ الَّتِي لَا شِيَةَ فِيهَا.",
       "Orta yaşlı, rengi parlak sarı, toprak sürmeyen, ekin sulamayan, kusursuz ve alacasız ineği aramaya koyuldular."
      ],
      [
       "وَنَدَرَ وُجُودُ هٰذِهِ الْبَقَرَةِ الْغَرِيبَةِ فَإِمَّا بَقَرَةٌ فَارِضٌ وَإِمَّا بَقَرَةٌ بِكْرٌ.",
       "Bu tuhaf ineği bulmak çok zordu: Ya yaşlı bir inek çıkıyordu ya da körpe bir inek."
      ],
      [
       "وَإِمَّا عَوَانٌ وَلٰكِنْ غَيْرُ صَفْرَاءَ.",
       "Ya orta yaşlı ama sarı değil."
      ],
      [
       "وَإِمَّا بَقَرَةٌ عَوَانٌ صَفْرَاءُ وَلٰكِنْ لَوْنُهَا غَيْرُ فَاقِعٍ.",
       "Ya orta yaşlı, sarı ama rengi parlak değil."
      ],
      [
       "وَإِمَّا بَقَرَةٌ عَوَانٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا وَلٰكِنَّهَا بَقَرَةٌ ذَلُولٌ تُثِيرُ الْأَرْضَ.",
       "Ya orta yaşlı, rengi parlak sarı ama toprak süren, boyunduruğa alışmış bir inek."
      ],
      [
       "وَإِمَّا بَقَرَةٌ عَوَانٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا لَا تُثِيرُ الْأَرْضَ وَلٰكِنَّهَا تَسْقِي الْحَرْثَ.",
       "Ya orta yaşlı, rengi parlak sarı, toprak sürmeyen ama ekin sulayan bir inek."
      ],
      [
       "وَفَتَّشُوا وَفَتَّشُوا وَعَلِمُوا عَاقِبَةَ هٰذَا التَّنْقِيرِ، مَا هِيَ؟ مَا لَوْنُهَا؟ مَا هِيَ! وَتَعِبُوا.",
       "Aradılar da aradılar; o «Nasıl bir şey? Rengi ne? Nasıl bir şey!» kurcalamalarının sonucunu gördüler ve yoruldular."
      ],
      [
       "وَأَرَادَ اللهُ بِيَتِيمٍ خَيْرًا فَوَجَدُوا هٰذِهِ الْبَقَرَةَ الَّتِي وَصَفَهَا اللهُ عِنْدَهُ فَاشْتَرَوْهَا بِثَمَنٍ غَالٍ جِدًّا «فَذَبَحُوهَا وَمَا كَادُوا يَفْعَلُونَ».",
       "Allah bir yetime iyilik dilemişti: Allah'ın vasfettiği bu ineği onun yanında buldular ve çok yüksek bir fiyata satın aldılar. «Sonunda onu kestiler; ama neredeyse bunu yapmayacaklardı.»"
      ],
      [
       "وَأَمَرَ اللهُ أَنْ يُضْرَبَ الْمَقْتُولُ بِجُزْءٍ مِنْ أَجْزَاءِ الْبَقَرَةِ فَيَحْيَا وَيُخْبِرَ بِاسْمِ الْقَاتِلِ.",
       "Allah, öldürülen adama ineğin bir parçasıyla vurulmasını emretti; o da dirilip katilin adını söyleyecekti."
      ],
      [
       "وَهٰكَذَا كَانَ …",
       "Ve öyle de oldu…"
      ]
     ]
    },
    {
     "n": 39,
     "title_ar": "الشَّرِيعَةُ",
     "title_tr": "Şeriat",
     "s": [
      [
       "وَخَرَجَ بَنُو إِسْرَائِيلَ مِنْ عَيْشِ الْبَهَائِمِ إِلَى عَيْشِ النَّاسِ.",
       "İsrâiloğulları hayvanların yaşayışından insanların yaşayışına geçtiler."
      ],
      [
       "وَصَارُوا يَعِيشُونَ فِي الْبَرِّيَّةِ كَالْأَحْرَارِ الْأَشْرَافِ.",
       "Çölde hür ve şerefli insanlar gibi yaşamaya başladılar."
      ],
      [
       "هُنَالِكَ احْتَاجُوا إِلَى شَرِيعَةٍ إِلٰهِيَّةٍ تَحْكُمُ بَيْنَهُمْ وَتُنِيرُ لَهُمُ السَّبِيلَ.",
       "İşte o zaman aralarında hüküm verecek ve onlara yolu aydınlatacak ilahî bir şeriata ihtiyaç duydular."
      ],
      [
       "إِنَّ الْإِنْسَانَ لَا يَسْتَطِيعُ أَنْ يَعِيشَ كَإِنْسَانٍ إِلَّا بِشَرِيعَةٍ إِلٰهِيَّةٍ، وَإِلَّا بِنُورٍ مِنْ رَبِّهِ.",
       "İnsan, ancak ilahî bir şeriatla ve Rabbinden gelen bir nurla insan gibi yaşayabilir."
      ],
      [
       "الْعَالَمُ كُلُّهُ ظَلَامٌ فِي ظَلَامٍ إِلَّا مَنْ أَشْرَقَ لَهُ نُورٌ مِنْ رَبِّهِ.",
       "Rabbinden kendisine bir nur doğan dışında bütün dünya karanlık içinde karanlıktır."
      ],
      [
       "وَذٰلِكَ النُّورُ هُوَ نُورُ الْأَنْبِيَاءِ الَّذِي يَهْتَدِي بِهِ النَّاسُ.",
       "O nur, insanların kendisiyle yolunu bulduğu peygamberlerin nurudur."
      ],
      [
       "وَمَنْ لَمْ يَهْتَدِ بِهٰذَا النُّورِ كَانَ فِي ضَلَالٍ يَخْبِطُ خَبْطَ عَشْوَاءَ.",
       "Bu nurla yolunu bulmayan, sapıklık içinde körü körüne el yordamıyla yürür."
      ],
      [
       "فَالْعَقَائِدُ - بِغَيْرِ هٰذَا النُّورِ - أَوْهَامٌ وَخُرَافَاتٌ يَضْحَكُ مِنْهَا الْأَطْفَالُ.",
       "İnançlar, bu nur olmadan, çocukların bile güleceği vehimler ve hurafelerdir."
      ],
      [
       "أَمَا سَمِعْتُمْ عَقَائِدَ الْمُشْرِكِينَ وَالْكُفَّارِ وَالْيَهُودِ وَالنَّصَارَى وَخُرَافَاتِهِمْ وَأَسَاطِيرَهُمْ؟!",
       "Müşriklerin, kâfirlerin, Yahudilerin ve Hristiyanların inançlarını, hurafelerini ve efsanelerini duymadınız mı?!"
      ],
      [
       "وَالْعِلْمُ جَهْلٌ وَظَنٌّ وَتَخْمِينٌ وَشَكٌّ «إِنْ يَتَّبِعُونَ إِلَّا الظَّنَّ وَإِنَّ الظَّنَّ لَا يُغْنِي مِنَ الْحَقِّ شَيْئًا».",
       "Bilgi de (bu nur olmadan) cehalet, zan, tahmin ve şüphedir: «Onlar zandan başka bir şeye uymuyorlar; zan ise gerçek karşısında hiçbir şey ifade etmez.»"
      ],
      [
       "وَالْأَخْلَاقُ تَفْرِيطٌ وَإِفْرَاطٌ وَتَقْصِيرٌ وَإِسْرَافٌ.",
       "Ahlak da ihmal ve aşırılık, eksiklik ve israftır."
      ],
      [
       "أَمَا رَأَيْتُمُ الَّذِينَ لَا يَتَّبِعُونَ الْأَنْبِيَاءَ كَيْفَ يَهْضِمُونَ الْحُقُوقَ وَكَيْفَ يُجَاوِزُونَ الْحُدُودَ وَكَيْفَ يَتَّبِعُونَ الْهَوَى؟!",
       "Peygamberlere uymayanların hakları nasıl çiğnediğini, sınırları nasıl aştığını ve heveslerinin peşinden nasıl gittiğini görmediniz mi?!"
      ],
      [
       "وَالْحُكْمُ وَالسِّيَاسَةُ ظُلْمٌ وَاسْتِبْدَادٌ وَخَبْطٌ فِي أَمْوَالِ النَّاسِ وَحُقُوقِهِمْ وَدِمَائِهِمْ.",
       "Yönetim ve siyaset de zulüm, baskı ve insanların mallarında, haklarında ve canlarında keyfî davranmaktır."
      ],
      [
       "أَمَا رَأَيْتُمْ أُولِي الْأَمْرِ - مِمَّنْ لَا يَخَافُونَ اللهَ وَلَا يَتَّبِعُونَ الشَّرِيعَةَ - كَيْفَ يَخُونُونَ الْأَمَانَاتِ وَكَيْفَ يَعْبَثُونَ بِأَمْوَالِ اللهِ، وَكَيْفَ يَعْبَثُونَ بِدِمَاءِ النَّاسِ وَحُقُوقِهِمْ؟!",
       "Allah'tan korkmayan ve şeriata uymayan yöneticilerin emanetlere nasıl ihanet ettiğini, Allah'ın mallarıyla nasıl oynadığını, insanların canlarıyla ve haklarıyla nasıl oynadığını görmediniz mi?!"
      ],
      [
       "وَكَيْفَ اسْتَعْبَدُوا النَّاسَ وَجَعَلُوهُمْ شِيَعًا يُذَبِّحُونَ رِجَالَهُمْ وَيَسْتَحْيُونَ نِسَاءَهُمْ، أَتَعْلَمُ كَمْ قُتِلَ فِي الْحَرْبِ الْأُولَى وَكَمْ قُتِلَ فِي الْحَرْبِ الثَّانِيَةِ؟!",
       "İnsanları nasıl köleleştirdiklerini, onları fırkalara ayırıp erkeklerini boğazlayıp kadınlarını sağ bıraktıklarını görmediniz mi? Birinci Dünya Savaşı'nda kaç kişinin, İkinci Dünya Savaşı'nda kaç kişinin öldürüldüğünü biliyor musun?!"
      ],
      [
       "فَالْعَالَمُ كُلُّهُ ظَلَامٌ فِي ظَلَامٍ إِلَّا مَنْ أَشْرَقَ لَهُ نُورٌ مِنْ رَبِّهِ.",
       "Rabbinden kendisine bir nur doğan dışında bütün dünya karanlık içinde karanlıktır."
      ],
      [
       "«ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ إِذَا أَخْرَجَ يَدَهُ لَمْ يَكَدْ يَرَاهَا وَمَنْ لَمْ يَجْعَلِ اللهُ لَهُ نُورًا فَمَا لَهُ مِنْ نُورٍ».",
       "«Birbiri üstüne binmiş karanlıklar! İnsan elini çıkarsa neredeyse onu göremez. Allah kime nur vermemişse artık onun hiç nuru yoktur.»"
      ],
      [
       "وَالنَّبِيُّ يُعَلِّمُ النَّاسَ كَيْفَ يَعْبُدُونَ اللهَ، وَكَذٰلِكَ يُعَلِّمُهُمْ كَيْفَ يُعَامِلُ بَعْضُهُمْ بَعْضًا.",
       "Peygamber insanlara Allah'a nasıl ibadet edeceklerini öğrettiği gibi, birbirlerine nasıl davranacaklarını da öğretir."
      ],
      [
       "وَالنَّبِيُّ يُعَلِّمُ النَّاسَ آدَابَ الْحَيَاةِ مَعَ آدَابِ الدِّينِ، وَيُعَلِّمُهُمْ آدَابَ الْأَكْلِ وَأَدَبَ الشُّرْبِ وَأَدَبَ النَّوْمِ وَأَدَبَ الْمَجْلِسِ وَأَدَبَ كُلِّ شَيْءٍ.",
       "Peygamber insanlara dinin âdabıyla birlikte hayatın âdabını da öğretir: Yemenin, içmenin, uyumanın, meclisin, her şeyin âdabını öğretir."
      ],
      [
       "وَيُعَلِّمُهُمُ الْآدَابَ كَمَا يُعَلِّمُ الْوَالِدُ الشَّفِيقُ أَبْنَاءَهُ الْأَعِزَّةَ.",
       "Şefkatli bir babanın sevgili çocuklarına öğrettiği gibi onlara edebi öğretir."
      ],
      [
       "وَالنَّاسُ كَالْأَطْفَالِ الصِّغَارِ يَحْتَاجُونَ فِي كِبَرِهِمْ إِلَى تَرْبِيَةِ الْأَنْبِيَاءِ أَكْثَرَ مِمَّا يَحْتَاجُونَ فِي صِغَرِهِمْ إِلَى تَرْبِيَةِ الْآبَاءِ.",
       "İnsanlar küçük çocuklar gibidir: Büyüdüklerinde peygamberlerin terbiyesine, küçükken babalarının terbiyesine duydukları ihtiyaçtan daha çok muhtaçtırlar."
      ],
      [
       "وَالَّذِينَ لَمْ يَتَلَقَّوْا هٰذِهِ التَّرْبِيَةَ النَّبَوِيَّةَ وَلَمْ يَتَعَلَّمُوا الْآدَابَ مِنَ الْأَنْبِيَاءِ كَأَشْجَارِ الْبَرِّيَّةِ، نَبَتَتْ وَنَشَأَتْ بِنَفْسِهَا فَتَرَى فِيهَا عِوَجًا وَشَوْكًا وَفَسَادًا.",
       "Bu peygamber terbiyesini almayan ve edebi peygamberlerden öğrenmeyenler çöl ağaçları gibidir: Kendi kendilerine bitip büyümüşlerdir; onlarda eğrilik, diken ve bozukluk görürsün."
      ]
     ]
    }
   ]
  },
  {
   "id": 19,
   "emoji": "⛰️",
   "title_ar": "الطُّورُ وَالْعِجْلُ",
   "title_tr": "Tûr ve buzağı",
   "pre": {
    "predict": {
     "prompt_tr": "Mûsâ Tevrat'ı almak için Tûr Dağı'na gitti; kavmini Hârûn'a bıraktı. Başlıklar: «التَّوْرَاةُ», «الْعِجْلُ». Sence o yokken kavmi ne yaptı?",
     "options": [
      [
       "عَبَدُوا عِجْلًا",
       "Bir buzağıya taptılar"
      ],
      [
       "صَامُوا وَصَلَّوْا",
       "Oruç tutup namaz kıldılar"
      ],
      [
       "رَجَعُوا إِلَى مِصْرَ",
       "Mısır'a döndüler"
      ]
     ]
    },
    "vocab": [
     [
      "مِيقَاتٌ",
      "buluşma vakti",
      "⏳"
     ],
     [
      "طُورُ سَيْنَاءَ",
      "Sînâ (Tûr) Dağı",
      "⛰️"
     ],
     [
      "تَجَلَّى",
      "tecelli etti, göründü",
      "✨"
     ],
     [
      "الْأَلْوَاحُ",
      "levhalar",
      "🪨"
     ],
     [
      "عِجْلٌ",
      "buzağı",
      "🐂"
     ],
     [
      "خُوَارٌ",
      "böğürme sesi",
      "🔊"
     ]
    ]
   },
   "stop": {
    "section": 40,
    "after": 10,
    "prompt_tr": "Mûsâ özlemle dedi: «Rabbim, bana kendini göster, sana bakayım!» Sence Allah ne cevap verdi?",
    "options": [
     [
      "لَنْ تَرَانِي وَلٰكِنِ انْظُرْ إِلَى الْجَبَلِ",
      "Beni göremezsin; ama dağa bak"
     ],
     [
      "تَعَالَ وَانْظُرْ",
      "Gel ve bak"
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
     "أَمَرَ اللهُ مُوسَى أَنْ يَصُومَ وَيَأْتِيَ إِلَى الطُّورِ.",
     "اسْتَخْلَفَ مُوسَى أَخَاهُ هَارُونَ.",
     "طَلَبَ مُوسَى أَنْ يَنْظُرَ إِلَى رَبِّهِ.",
     "تَجَلَّى رَبُّهُ لِلْجَبَلِ فَجَعَلَهُ دَكًّا.",
     "أَخَذَ مُوسَى الْأَلْوَاحَ.",
     "أَخْرَجَ السَّامِرِيُّ لَهُمْ عِجْلًا."
    ],
    "questions": [
     {
      "q": "لِمَاذَا اخْتَارَ مُوسَى سَبْعِينَ رَجُلًا؟",
      "qt": "Mûsâ neden yetmiş adam seçti?",
      "o": [
       "لِيَكُونُوا مِنَ الشَّاهِدِينَ",
       "لِيُقَاتِلُوا مَعَهُ",
       "لِيَحْمِلُوا الطَّعَامَ"
      ],
      "ot": [
       "Şahit olsunlar diye",
       "Onunla savaşsınlar diye",
       "Yiyecek taşısınlar diye"
      ],
      "a": 0,
      "ev": [
       "40.3"
      ]
     },
     {
      "q": "مَاذَا حَدَثَ لِلْجَبَلِ لَمَّا تَجَلَّى لَهُ رَبُّهُ؟",
      "qt": "Rabbi dağa tecelli edince dağa ne oldu?",
      "o": [
       "جَعَلَهُ دَكًّا",
       "صَارَ ذَهَبًا",
       "لَمْ يَتَحَرَّكْ"
      ],
      "ot": [
       "Onu darmadağın etti",
       "Altına dönüştü",
       "Hiç kımıldamadı"
      ],
      "a": 0,
      "ev": [
       "40.15"
      ]
     },
     {
      "q": "مَاذَا قَالَ السَّبْعُونَ رَجُلًا لِمُوسَى؟",
      "qt": "Yetmiş adam Mûsâ'ya ne dedi?",
      "o": [
       "لَنْ نُؤْمِنَ حَتَّى نَرَى اللهَ جَهْرَةً",
       "نَحْنُ مَعَكَ",
       "أَعْطِنَا الْأَلْوَاحَ"
      ],
      "ot": [
       "Allah'ı açıkça görmedikçe inanmayacağız",
       "Biz seninleyiz",
       "Levhaları bize ver"
      ],
      "a": 0,
      "ev": [
       "40.21"
      ]
     },
     {
      "q": "مَنْ أَخْرَجَ لِبَنِي إِسْرَائِيلَ الْعِجْلَ؟",
      "qt": "Buzağıyı İsrâiloğullarına kim çıkardı?",
      "o": [
       "السَّامِرِيُّ",
       "هَارُونُ",
       "فِرْعَوْنُ"
      ],
      "ot": [
       "Sâmirî",
       "Hârûn",
       "Firavun"
      ],
      "a": 0,
      "ev": [
       "41.10"
      ]
     },
     {
      "q": "مَاذَا قَالَ بَنُو إِسْرَائِيلَ لِهَارُونَ؟",
      "qt": "İsrâiloğulları Hârûn'a ne dedi?",
      "o": [
       "لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ حَتَّى يَرْجِعَ إِلَيْنَا مُوسَى",
       "أَنْتَ إِمَامُنَا وَنُطِيعُكَ",
       "اذْهَبْ إِلَى مُوسَى"
      ],
      "ot": [
       "Mûsâ dönünceye kadar ona tapmaya devam edeceğiz",
       "Sen önderimizsin, sana itaat ederiz",
       "Mûsâ'ya git"
      ],
      "a": 0,
      "ev": [
       "41.17"
      ]
     }
    ],
    "focus": {
     "title": "لَنْ + mansub fiil = «asla …-meyecek»",
     "explain": "<b>لَنْ</b> muzari fiilin başına gelir, onu mansub yapar (sonu ـَ olur) ve anlamı <b>geleceğe yönelik kesin olumsuzluk</b> olur: <span class='ar-inline'>تَرَى</span> → <span class='ar-inline'>لَنْ تَرَانِي</span> (beni asla göremezsin). Çoğul fiillerde ن düşer: <span class='ar-inline'>نُؤْمِنُ</span> → <span class='ar-inline'>لَنْ نُؤْمِنَ</span>, <span class='ar-inline'>تَسْتَطِيعُونَ</span> → <span class='ar-inline'>لَنْ تَسْتَطِيعُوا</span>. Karşılaştırın: <span class='ar-inline'>لَمْ</span> (geçmiş) – <span class='ar-inline'>لَنْ</span> (gelecek).",
     "examples": [
      "«قَالَ لَنْ تَرَانِي وَلٰكِنِ انْظُرْ إِلَى الْجَبَلِ»",
      "«لَنْ نُؤْمِنَ حَتَّى نَرَى اللهَ جَهْرَةً»",
      "«لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ حَتَّى يَرْجِعَ إِلَيْنَا مُوسَى»"
     ],
     "items": [
      {
       "q": "«قَالَ لَنْ ____ وَلٰكِنِ انْظُرْ إِلَى الْجَبَلِ»",
       "o": [
        "تَرَانِي",
        "رَأَيْتَنِي",
        "تَرَ"
       ],
       "a": 0
      },
      {
       "q": "«لَنْ ____ حَتَّى نَرَى اللهَ جَهْرَةً»",
       "o": [
        "نُؤْمِنَ",
        "نُؤْمِنُ",
        "آمَنَّا"
       ],
       "a": 0
      },
      {
       "q": "«يَا مُوسَى ____ نَصْبِرَ عَلَى طَعَامٍ وَاحِدٍ»",
       "o": [
        "لَنْ",
        "لَمْ",
        "مَا"
       ],
       "a": 0
      },
      {
       "q": "«لَنْ نَبْرَحَ» = …",
       "o": [
        "asla ayrılmayacağız",
        "ayrılmadık",
        "ayrılıyoruz"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "سَارَ مُوسَى إِلَى {الطُّورِ} وَقَالَ: رَبِّ أَرِنِي أَنْظُرْ إِلَيْكَ. قَالَ: لَنْ {تَرَانِي}. وَأَخَذَ مُوسَى {الْأَلْوَاحَ}. وَأَخْرَجَ السَّامِرِيُّ لِبَنِي إِسْرَائِيلَ {عِجْلًا} لَهُ خُوَارٌ. وَنَهَاهُمْ {هَارُونُ} عَنْ ذٰلِكَ."
    },
    "think": {
     "q": "لِمَاذَا عَبَدَ بَنُو إِسْرَائِيلَ الْعِجْلَ بَعْدَ كُلِّ مَا رَأَوْا مِنَ الْآيَاتِ؟",
     "qt": "İsrâiloğulları onca mucizeyi gördükten sonra neden buzağıya taptılar?",
     "model": "Yazara göre yüzyıllarca Mısır'da putperestlerle yaşamaları, şirke karşı nefretlerini yok etmişti; şirk sevgisi, çürük bir eve suyun sızması gibi kalplerine sızmıştı. Mûsâ birkaç gün aralarından ayrılınca bu eğilim hemen ortaya çıktı. Alışkanlıklar mucizelerden daha güçlü olabiliyor; bu yüzden imanın sürekli korunması gerekiyor."
    },
    "retell": [
     "الطُّورُ",
     "أَرْبَعُونَ لَيْلَةً",
     "رَبِّ أَرِنِي",
     "الْأَلْوَاحُ",
     "السَّامِرِيُّ",
     "الْعِجْلُ"
    ],
    "quran": [
     {
      "ar": "وَلَمَّا جَاءَ مُوسَىٰ لِمِيقَاتِنَا وَكَلَّمَهُ رَبُّهُ قَالَ رَبِّ أَرِنِي أَنْظُرْ إِلَيْكَ ۚ قَالَ لَنْ تَرَانِي وَلَٰكِنِ انْظُرْ إِلَى الْجَبَلِ فَإِنِ اسْتَقَرَّ مَكَانَهُ فَسَوْفَ تَرَانِي ۚ فَلَمَّا تَجَلَّىٰ رَبُّهُ لِلْجَبَلِ جَعَلَهُ دَكًّا وَخَرَّ مُوسَىٰ صَعِقًا ۚ فَلَمَّا أَفَاقَ قَالَ سُبْحَانَكَ تُبْتُ إِلَيْكَ وَأَنَا أَوَّلُ الْمُؤْمِنِينَ",
      "ref": "A'râf 7:143",
      "tr": "Mûsâ belirlediğimiz vakitte gelip Rabbi onunla konuşunca: «Rabbim! Bana kendini göster, sana bakayım» dedi. Allah: «Beni asla göremezsin; ama dağa bak, yerinde durursa beni göreceksin» dedi. Rabbi dağa tecelli edince onu darmadağın etti, Mûsâ da baygın düştü. Ayılınca: «Seni tenzih ederim, sana tövbe ettim; ben inananların ilkiyim» dedi.",
      "inText": "«رَبِّ أَرِنِي أَنْظُرْ إِلَيْكَ» …"
     },
     {
      "ar": "وَمَا أَعْجَلَكَ عَنْ قَوْمِكَ يَا مُوسَىٰ ۝ قَالَ هُمْ أُولَاءِ عَلَىٰ أَثَرِي وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَىٰ",
      "ref": "Tâhâ 20:83–84",
      "tr": "«Seni kavminden önce acele ettiren nedir, ey Mûsâ?» «Onlar işte arkamdalar. Rabbim! Razı olasın diye sana acele ettim.»",
      "inText": "«مَا أَعْجَلَكَ عَنْ قَوْمِكَ يَا مُوسَى؟»"
     },
     {
      "ar": "فَأَخْرَجَ لَهُمْ عِجْلًا جَسَدًا لَهُ خُوَارٌ فَقَالُوا هَٰذَا إِلَٰهُكُمْ وَإِلَٰهُ مُوسَىٰ فَنَسِيَ ۝ أَفَلَا يَرَوْنَ أَلَّا يَرْجِعُ إِلَيْهِمْ قَوْلًا وَلَا يَمْلِكُ لَهُمْ ضَرًّا وَلَا نَفْعًا",
      "ref": "Tâhâ 20:88–89",
      "tr": "Onlara böğüren bir buzağı heykeli çıkardı. «İşte bu sizin de ilahınız, Mûsâ'nın da ilahı; ama o unuttu» dediler. Görmüyorlar mı ki o, onlara hiçbir söz söyleyemiyor, onlara ne zarar ne fayda verebiliyor!",
      "inText": "«فَأَخْرَجَ لَهُمْ عِجْلًا جَسَدًا …»"
     },
     {
      "ar": "قَالُوا لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ حَتَّىٰ يَرْجِعَ إِلَيْنَا مُوسَىٰ",
      "ref": "Tâhâ 20:91",
      "tr": "«Mûsâ bize dönünceye kadar ona tapmaya devam edeceğiz» dediler.",
      "inText": "«لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 40,
     "title_ar": "التَّوْرَاةُ",
     "title_tr": "Tevrat",
     "s": [
      [
       "وَأَرَادَ اللهُ أَنْ لَا يَضِيعَ بَنُو إِسْرَائِيلَ كَمَا ضَاعَتْ أُمَمٌ بِغَيْرِ كِتَابٍ وَهُدًى مِنَ اللهِ.",
       "Allah, Allah'tan bir kitap ve hidayet olmadan kaybolup giden ümmetler gibi İsrâiloğullarının da kaybolmamasını istedi."
      ],
      [
       "وَأَرَادَ أَنْ لَا يَخْبِطُوا خَبْطَ عَشْوَاءَ كَمَا خَبَطَتْ أُمَمٌ خَبْطَ عَشْوَاءَ.",
       "Başka ümmetler gibi körü körüne el yordamıyla yürümelerini istemedi."
      ],
      [
       "أَمَرَ اللهُ مُوسَى أَنْ يَتَطَهَّرَ وَأَنْ يَصُومَ ثَلَاثِينَ يَوْمًا ثُمَّ يَأْتِيَ إِلَى طُورِ سَيْنَاءَ حَتَّى يُكَلِّمَهُ رَبُّهُ وَيَتَلَقَّى كِتَابًا يَكُونُ لَهُمُ الْإِمَامَ.",
       "Allah Mûsâ'ya temizlenmesini, otuz gün oruç tutmasını, sonra Rabbi onunla konuşsun ve onlara rehber olacak bir kitap alsın diye Tûr-i Sînâ'ya gelmesini emretti."
      ],
      [
       "اخْتَارَ مُوسَى مِنْ قَوْمِهِ سَبْعِينَ رَجُلًا يَكُونُونَ عَلَى ذٰلِكَ مِنَ الشَّاهِدِينَ لِأَنَّ بَنِي إِسْرَائِيلَ قَوْمٌ جُحُدٌ.",
       "Mûsâ kavminden, buna şahit olacak yetmiş adam seçti; çünkü İsrâiloğulları inkârcı bir kavimdi."
      ],
      [
       "«وَقَالَ لِأَخِيهِ هَارُونَ اخْلُفْنِي فِي قَوْمِي وَأَصْلِحْ وَلَا تَتَّبِعْ سَبِيلَ الْمُفْسِدِينَ» لِأَنَّ الْجَمَاعَةَ لَا بُدَّ لَهَا مِنْ إِمَامٍ.",
       "«Kardeşi Hârûn'a dedi: Kavmimin içinde benim yerime geç, işleri düzelt ve bozguncuların yoluna uyma.» Çünkü topluluğun mutlaka bir önderi olmalıdır."
      ],
      [
       "سَارَ مُوسَى لِمِيقَاتِ رَبِّهِ، وَلٰكِنَّهُ حَثَّهُ الشَّوْقُ إِلَى رَبِّهِ فَتَعَجَّلَ وَسَبَقَ إِلَى الطُّورِ.",
       "Mûsâ Rabbiyle buluşma vaktine doğru yürüdü; ama Rabbine duyduğu özlem onu acele ettirdi ve Tûr'a (kavminden) önce vardı."
      ],
      [
       "قَالَ اللهُ: «مَا أَعْجَلَكَ عَنْ قَوْمِكَ يَا مُوسَى؟»",
       "Allah dedi: «Seni kavminden önce acele ettiren nedir, ey Mûsâ?»"
      ],
      [
       "«قَالَ: هُمْ عَلَى أَثَرِي وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَى».",
       "«Dedi: Onlar arkamdan geliyorlar. Rabbim! Razı olasın diye sana acele ettim.»"
      ],
      [
       "وَأَمَرَهُ اللهُ أَنْ يُتِمَّ مِيقَاتَ رَبِّهِ أَرْبَعِينَ لَيْلَةً.",
       "Allah ona, Rabbiyle buluşma süresini kırk geceye tamamlamasını emretti."
      ],
      [
       "وَصَلَ مُوسَى إِلَى طُورِ سَيْنَاءَ فَكَلَّمَهُ رَبُّهُ وَنَاجَاهُ وَقَرَّبَهُ وَأَدْنَاهُ، فَزَادَهُ ذٰلِكَ شَوْقًا فَقَالَ:",
       "Mûsâ Tûr-i Sînâ'ya vardı; Rabbi onunla konuştu, onunla gizlice söyleşti, onu kendine yaklaştırdı. Bu onun özlemini daha da artırdı ve dedi:"
      ],
      [
       "«رَبِّ أَرِنِي أَنْظُرْ إِلَيْكَ».",
       "«Rabbim! Bana kendini göster, sana bakayım.»"
      ],
      [
       "وَاللهُ يَعْلَمُ أَنَّ مُوسَى لَا يَسْتَطِيعُ ذٰلِكَ، لِأَنَّ اللهَ «لَا تُدْرِكُهُ الْأَبْصَارُ وَهُوَ يُدْرِكُ الْأَبْصَارَ وَهُوَ اللَّطِيفُ الْخَبِيرُ».",
       "Allah, Mûsâ'nın buna güç yetiremeyeceğini biliyordu; çünkü Allah'ı «gözler idrak edemez; O ise gözleri idrak eder. O, en ince işleri bilen, her şeyden haberdar olandır.»"
      ],
      [
       "وَإِنَّ الْجِبَالَ لَا تَسْتَطِيعُ أَنْ تَحْمِلَ كَلَامَهُ فَضْلًا عَنْ نُورِهِ.",
       "Dağlar O'nun nurunu bırakın, kelamını bile taşıyamaz."
      ],
      [
       "«لَوْ أَنْزَلْنَا هٰذَا الْقُرْآنَ عَلَى جَبَلٍ لَرَأَيْتَهُ خَاشِعًا مُتَصَدِّعًا مِنْ خَشْيَةِ اللهِ».",
       "«Eğer biz bu Kur'an'ı bir dağa indirseydik, onu Allah korkusundan baş eğmiş, parça parça olmuş görürdün.»"
      ],
      [
       "«قَالَ لَنْ تَرَانِي وَلٰكِنِ انْظُرْ إِلَى الْجَبَلِ فَإِنِ اسْتَقَرَّ مَكَانَهُ فَسَوْفَ تَرَانِي».",
       "«Allah dedi: Beni asla göremezsin; ama dağa bak, eğer o yerinde durursa sen de beni göreceksin.»"
      ],
      [
       "«فَلَمَّا تَجَلَّى رَبُّهُ لِلْجَبَلِ جَعَلَهُ دَكًّا وَخَرَّ مُوسَى صَعِقًا».",
       "«Rabbi dağa tecelli edince onu darmadağın etti; Mûsâ da baygın düştü.»"
      ],
      [
       "«فَلَمَّا أَفَاقَ قَالَ سُبْحَانَكَ تُبْتُ إِلَيْكَ وَأَنَا أَوَّلُ الْمُؤْمِنِينَ».",
       "«Ayılınca dedi: Seni bütün eksikliklerden tenzih ederim! Sana tövbe ettim; ben inananların ilkiyim.»"
      ],
      [
       "«قَالَ يَا مُوسَى إِنِّي اصْطَفَيْتُكَ عَلَى النَّاسِ بِرِسَالَاتِي وَبِكَلَامِي فَخُذْ مَا آتَيْتُكَ وَكُنْ مِنَ الشَّاكِرِينَ».",
       "«Allah dedi: Ey Mûsâ! Ben seni elçiliklerimle ve seninle konuşmamla insanlar arasından seçtim. Sana verdiğimi al ve şükredenlerden ol.»"
      ],
      [
       "أَخَذَ مُوسَى الْأَلْوَاحَ وَفِيهَا كُلُّ مَا يَحْتَاجُ إِلَيْهِ بَنُو إِسْرَائِيلَ مَوْعِظَةً وَتَفْصِيلًا لِكُلِّ شَيْءٍ.",
       "Mûsâ levhaları aldı; onlarda İsrâiloğullarının ihtiyaç duyduğu her şey, bir öğüt ve her şeyin açıklaması olarak vardı."
      ],
      [
       "وَأَمَرَهُ اللهُ أَنْ يَأْخُذَهَا بِقُوَّةٍ وَيَأْمُرَ قَوْمَهُ أَنْ يَأْخُذُوا بِأَحْسَنِهَا.",
       "Allah ona levhaları sıkıca tutmasını ve kavmine de onların en güzeliyle amel etmelerini emretmesini buyurdu."
      ],
      [
       "وَلَمَّا وَصَلَ مُوسَى إِلَى السَّبْعِينَ رَجُلًا مِنْ قَوْمِهِ وَأَخْبَرَهُمْ بِمَا أَنْعَمَ اللهُ عَلَيْهِ قَالُوا فِي وَقَاحَةٍ وَجَسَارَةٍ:",
       "Mûsâ kavminden o yetmiş adamın yanına varıp onlara Allah'ın kendisine verdiği nimeti haber verince, onlar yüzsüzlük ve küstahlıkla dediler:"
      ],
      [
       "«لَنْ نُؤْمِنَ حَتَّى نَرَى اللهَ جَهْرَةً».",
       "«Allah'ı açıkça görmedikçe asla inanmayacağız.»"
      ],
      [
       "غَضِبَ اللهُ عَلَى هٰذِهِ الْوَقَاحَةِ وَالْجُرْأَةِ فَأَخَذَتْهُمُ الصَّاعِقَةُ وَهُمْ يَنْظُرُونَ.",
       "Allah bu yüzsüzlüğe ve küstahlığa öfkelendi; gözleri baka baka onları yıldırım çarptı."
      ],
      [
       "وَرَأَوْا أَنَّهُمْ لَا يَتَحَمَّلُونَ هٰذِهِ الصَّاعِقَةَ الَّتِي خَلَقَهَا اللهُ فَكَيْفَ يَتَحَمَّلُونَ نُورَ اللهِ!",
       "Allah'ın yarattığı bu yıldırıma dayanamadıklarını gördüler; Allah'ın nuruna nasıl dayanacaklardı ki!"
      ],
      [
       "وَدَعَا مُوسَى رَبَّهُ وَقَالَ: «رَبِّ لَوْ شِئْتَ أَهْلَكْتَهُمْ مِنْ قَبْلُ وَإِيَّايَ أَتُهْلِكُنَا بِمَا فَعَلَ السُّفَهَاءُ مِنَّا؟!»",
       "Mûsâ Rabbine dua edip dedi: «Rabbim! Dileseydin onları da beni de daha önce helak ederdin. İçimizdeki beyinsizlerin yaptıkları yüzünden bizi helak mı edeceksin?!»"
      ],
      [
       "وَأَجَابَ اللهُ دُعَاءَهُ وَبَعَثَهُمْ مِنْ بَعْدِ مَوْتِهِمْ لَعَلَّهُمْ يَشْكُرُونَ.",
       "Allah onun duasını kabul etti; şükretsinler diye onları ölümlerinden sonra diriltti."
      ]
     ]
    },
    {
     "n": 41,
     "title_ar": "الْعِجْلُ",
     "title_tr": "Buzağı",
     "s": [
      [
       "وَكَانَ بَنُو إِسْرَائِيلَ يَعِيشُونَ مَعَ الْمُشْرِكِينَ فِي مِصْرَ مُنْذُ قُرُونٍ.",
       "İsrâiloğulları yüzyıllardır Mısır'da müşriklerle birlikte yaşıyordu."
      ],
      [
       "وَكَانَ الْأَقْبَاطُ يَعْبُدُونَ أَشْيَاءَ كَثِيرَةً فِي مِصْرَ وَبَنُو إِسْرَائِيلَ يَرَوْنَ ذٰلِكَ بِعُيُونِهِمْ.",
       "Kıptîler Mısır'da pek çok şeye tapıyordu; İsrâiloğulları da bunu kendi gözleriyle görüyordu."
      ],
      [
       "وَزَالَتْ مِنْهُمْ كَرَاهَةُ الشِّرْكِ وَتَسَرَّبَ إِلَيْهِمْ حُبُّهُ كَمَا يَتَسَرَّبُ الْمَاءُ إِلَى بَيْتٍ وَاهِنٍ عَتِيقٍ.",
       "Şirke karşı nefretleri kayboldu; suyun çürük, eski bir eve sızması gibi şirk sevgisi onlara sızdı."
      ],
      [
       "وَكَانُوا كُلَّمَا وَجَدُوا فُرْصَةً انْحَدَرُوا إِلَى الشِّرْكِ كَمَا يَنْحَدِرُ الْمَاءُ إِلَى الْحُدُورِ.",
       "Her fırsat bulduklarında, suyun yokuş aşağı akması gibi şirke kayıyorlardı."
      ],
      [
       "وَزَاغَتْ قُلُوبُهُمْ وَفَسَدَ ذَوْقُهُمْ فَإِنْ يَرَوْا سَبِيلَ الرُّشْدِ لَا يَتَّخِذُوهُ سَبِيلًا وَإِنْ يَرَوْا سَبِيلَ الْغَيِّ يَتَّخِذُوهُ سَبِيلًا.",
       "Kalpleri kaydı, zevkleri bozuldu: Doğru yolu görseler onu yol edinmez, sapıklık yolunu görseler onu yol edinirlerdi."
      ],
      [
       "جَازُوا الْبَحْرَ «فَأَتَوْا عَلَى قَوْمٍ يَعْكُفُونَ عَلَى أَصْنَامٍ لَهُمْ قَالُوا يَا مُوسَى اجْعَلْ لَنَا إِلٰهًا كَمَا لَهُمْ آلِهَةٌ».",
       "Denizi geçtiler; «Putlarına tapan bir kavme rastladılar. Dediler ki: Ey Mûsâ! Onların ilahları olduğu gibi bize de bir ilah yap.»"
      ],
      [
       "وَغَضِبَ مُوسَى وَقَالَ «إِنَّكُمْ قَوْمٌ تَجْهَلُونَ».",
       "Mûsâ öfkelendi ve dedi: «Siz gerçekten cahil bir kavimsiniz.»"
      ],
      [
       "يَا لَلْعَجَبِ! يَا لَلظُّلْمِ! إِنَّ اللهَ قَدْ أَنْعَمَ عَلَيْكُمْ وَفَضَّلَكُمْ وَآتَاكُمْ مَا لَمْ يُؤْتِ أَحَدًا مِنَ الْعَالَمِينَ.",
       "Ne şaşılacak şey! Ne büyük zulüm! Allah size nimet verdi, sizi üstün kıldı ve âlemlerden hiç kimseye vermediğini size verdi."
      ],
      [
       "«أَغَيْرَ اللهِ أَبْغِيكُمْ إِلٰهًا وَهُوَ فَضَّلَكُمْ عَلَى الْعَالَمِينَ».",
       "«Sizi âlemlere üstün kılmışken, size Allah'tan başka bir ilah mı arayayım?»"
      ],
      [
       "سَارَ مُوسَى إِلَى الطُّورِ وَغَابَ عَنْهُمْ أَيَّامًا فَكَانُوا صَيْدَ الشَّيْطَانِ وَفَرِيسَةَ الشِّرْكِ.",
       "Mûsâ Tûr'a gitti ve birkaç gün onlardan uzak kaldı; onlar da şeytanın avı ve şirkin lokması oldular."
      ],
      [
       "قَامَ رَجُلٌ مِنْهُمْ يُقَالُ لَهُ السَّامِرِيُّ «فَأَخْرَجَ لَهُمْ عِجْلًا جَسَدًا لَهُ خُوَارٌ فَقَالُوا هٰذَا إِلٰهُكُمْ وَإِلٰهُ مُوسَى فَنَسِيَ».",
       "İçlerinden Sâmirî denen bir adam kalktı; «Onlara böğüren bir buzağı heykeli çıkardı. Dediler ki: İşte bu sizin de ilahınız, Mûsâ'nın da ilahı; ama o unuttu.»"
      ],
      [
       "وَفُتِنَ بَنُو إِسْرَائِيلَ بِهٰذَا الْعِجْلِ وَخَرُّوا عَلَيْهِ صُمًّا وَعُمْيَانًا.",
       "İsrâiloğulları bu buzağıyla imtihan edilip ona kapıldılar; sağır ve kör olarak önüne kapandılar."
      ],
      [
       "«أَفَلَا يَرَوْنَ أَلَّا يَرْجِعُ إِلَيْهِمْ قَوْلًا وَلَا يَمْلِكُ لَهُمْ ضَرًّا وَلَا نَفْعًا».",
       "«Görmüyorlar mı ki o, onlara hiçbir söz söyleyemiyor, onlara ne bir zarar ne de bir fayda verebiliyor!»"
      ],
      [
       "«أَلَمْ يَرَوْا أَنَّهُ لَا يُكَلِّمُهُمْ وَلَا يَهْدِيهِمْ سَبِيلًا».",
       "«Onunla konuşmadığını ve onlara hiçbir yol göstermediğini görmediler mi?»"
      ],
      [
       "وَنَهَاهُمْ هَارُونُ عَنْ ذٰلِكَ وَاجْتَهَدَ وَقَالَ:",
       "Hârûn onları bundan alıkoymaya çalıştı, çok uğraştı ve dedi:"
      ],
      [
       "«يَا قَوْمِ إِنَّمَا فُتِنْتُمْ بِهِ وَإِنَّ رَبَّكُمُ الرَّحْمٰنُ فَاتَّبِعُونِي وَأَطِيعُوا أَمْرِي».",
       "«Ey kavmim! Siz bununla sadece imtihan edildiniz. Sizin Rabbiniz Rahmân'dır; bana uyun ve emrime itaat edin.»"
      ],
      [
       "وَلٰكِنَّ بَنِي إِسْرَائِيلَ كَانُوا مَفْتُونِينَ بِسِحْرِ السَّامِرِيِّ وَأُشْرِبُوا فِي قُلُوبِهِمُ الْعِجْلَ فَقَالُوا:",
       "Ama İsrâiloğulları Sâmirî'nin büyüsüne kapılmışlardı; buzağı sevgisi kalplerine işlemişti ve dediler:"
      ],
      [
       "«لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ حَتَّى يَرْجِعَ إِلَيْنَا مُوسَى».",
       "«Mûsâ bize dönünceye kadar ona tapmaya devam edeceğiz.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 20,
   "emoji": "🏜️",
   "title_ar": "الْعِقَابُ وَالتِّيهُ",
   "title_tr": "Ceza ve çöl şaşkınlığı",
   "pre": {
    "predict": {
     "prompt_tr": "Mûsâ döndü ve kavminin buzağıya taptığını gördü. Başlıklar: «الْعِقَابُ», «جُبْنُ بَنِي إِسْرَائِيلَ». Sence Mûsâ Sâmirî'yi nasıl cezalandırdı?",
     "options": [
      [
       "أَنْ يَعِيشَ وَحْدَهُ لَا يَمَسُّهُ أَحَدٌ",
       "Kimse ona dokunmadan tek başına yaşamakla"
      ],
      [
       "أَنْ يَرْجِعَ إِلَى مِصْرَ",
       "Mısır'a dönmekle"
      ],
      [
       "عَفَا عَنْهُ",
       "Onu affetti"
      ]
     ]
    },
    "vocab": [
     [
      "غَضْبَانُ أَسِفًا",
      "öfkeli ve üzgün",
      "😠"
     ],
     [
      "لَا مِسَاسَ",
      "dokunmak yok",
      "🚫"
     ],
     [
      "أَحْرَقَ",
      "yaktı",
      "🔥"
     ],
     [
      "جُبْنٌ",
      "korkaklık",
      "🫣"
     ],
     [
      "جَبَّارُونَ",
      "zorbalar, devler",
      "🗿"
     ],
     [
      "يَتِيهُونَ",
      "şaşkın şaşkın dolaşırlar",
      "🌀"
     ]
    ]
   },
   "stop": {
    "section": 43,
    "after": 13,
    "prompt_tr": "Mûsâ dedi: «Allah'ın size yazdığı kutsal topraklara girin, geri dönmeyin!» Sence onlar ne cevap verdi?",
    "options": [
     [
      "إِنَّ فِيهَا قَوْمًا جَبَّارِينَ",
      "Orada zorba bir kavim var (girmeyiz)"
     ],
     [
      "سَنَدْخُلُ الْآنَ",
      "Hemen gireceğiz"
     ],
     [
      "نَحْنُ أَقْوَى مِنْهُمْ",
      "Biz onlardan güçlüyüz"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "رَجَعَ مُوسَى إِلَى قَوْمِهِ غَضْبَانَ أَسِفًا.",
     "اعْتَذَرَ هَارُونُ لِأَخِيهِ.",
     "عَاقَبَ مُوسَى السَّامِرِيَّ بِالِانْفِرَادِ.",
     "أُحْرِقَ الْعِجْلُ وَنُفِضَ فِي الْبَحْرِ.",
     "أَمَرَهُمْ مُوسَى أَنْ يَدْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ.",
     "قَالُوا: اذْهَبْ أَنْتَ وَرَبُّكَ فَقَاتِلَا."
    ],
    "questions": [
     {
      "q": "لِمَاذَا لَمْ يَتْرُكْ هَارُونُ الْقَوْمَ؟",
      "qt": "Hârûn kavmi neden bırakıp gitmedi?",
      "o": [
       "خَشِيَ أَنْ يَقُولَ مُوسَى: فَرَّقْتَ بَيْنَ بَنِي إِسْرَائِيلَ",
       "لِأَنَّهُ عَبَدَ الْعِجْلَ مَعَهُمْ",
       "لِأَنَّهُ كَانَ مَرِيضًا"
      ],
      "ot": [
       "Mûsâ'nın «İsrâiloğullarının arasına ayrılık soktun» demesinden korktu",
       "Çünkü o da buzağıya taptı",
       "Çünkü hastaydı"
      ],
      "a": 0,
      "ev": [
       "42.3"
      ]
     },
     {
      "q": "كَيْفَ عَاقَبَ مُوسَى السَّامِرِيَّ؟",
      "qt": "Mûsâ Sâmirî'yi nasıl cezalandırdı?",
      "o": [
       "بِالِانْفِرَادِ: يَعِيشُ وَحْدَهُ",
       "بِالسِّجْنِ",
       "بِالْقَتْلِ"
      ],
      "ot": [
       "Yalnızlıkla: tek başına yaşayacak",
       "Hapisle",
       "Ölümle"
      ],
      "a": 0,
      "ev": [
       "42.9"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ مُوسَى بِالْعِجْلِ؟",
      "qt": "Mûsâ buzağıyı ne yaptı?",
      "o": [
       "أَحْرَقَهُ ثُمَّ نَفَضَهُ فِي الْبَحْرِ",
       "بَاعَهُ",
       "دَفَنَهُ تَحْتَ الْجَبَلِ"
      ],
      "ot": [
       "Yaktı, sonra denize savurdu",
       "Sattı",
       "Dağın altına gömdü"
      ],
      "a": 0,
      "ev": [
       "42.14"
      ]
     },
     {
      "q": "لِمَاذَا خَافَ بَنُو إِسْرَائِيلَ مِنْ دُخُولِ الْأَرْضِ الْمُقَدَّسَةِ؟",
      "qt": "İsrâiloğulları kutsal topraklara girmekten neden korktu?",
      "o": [
       "لِأَنَّ فِيهَا قَوْمًا جَبَّارِينَ",
       "لِأَنَّهَا بَعِيدَةٌ جِدًّا",
       "لِأَنَّهُ لَا مَاءَ فِيهَا"
      ],
      "ot": [
       "Çünkü orada zorba bir kavim vardı",
       "Çünkü çok uzaktı",
       "Çünkü orada su yoktu"
      ],
      "a": 0,
      "ev": [
       "43.15"
      ]
     },
     {
      "q": "كَمْ سَنَةً حُرِّمَتْ عَلَيْهِمُ الْأَرْضُ الْمُقَدَّسَةُ؟",
      "qt": "Kutsal topraklar onlara kaç yıl haram kılındı?",
      "o": [
       "أَرْبَعِينَ سَنَةً",
       "عَشْرَ سَنَوَاتٍ",
       "سَنَةً وَاحِدَةً"
      ],
      "ot": [
       "Kırk yıl",
       "On yıl",
       "Bir yıl"
      ],
      "a": 0,
      "ev": [
       "43.24"
      ]
     }
    ],
    "focus": {
     "title": "Gereklilik: يَجِبُ أَنْ / لَا بُدَّ مِنْ",
     "explain": "<b>يَجِبُ أَنْ</b> + muzari = «-mesi gerekir, -meli»: <span class='ar-inline'>يَجِبُ أَنْ يَتَقَذَّرَهُ النَّاسُ</span> (insanların ondan tiksinmesi gerekir). <b>لَا بُدَّ مِنْ</b> + isim/mastar = «… şarttır, … kaçınılmazdır»: <span class='ar-inline'>لَا بُدَّ لَهَا مِنْ إِمَامٍ</span> (onun için bir önder şarttır). Benzer anlam: <span class='ar-inline'>عَلَى الْمَرْأَةِ أَنْ تُطِيعَ</span> (kadın itaat etmelidir).",
     "examples": [
      "إِنَّ الَّذِي فَرَّقَ بَيْنَ اللهِ وَعِبَادِهِ يَجِبُ أَنْ يُفَرَّقَ بَيْنَهُ وَبَيْنَ النَّاسِ.",
      "لِأَنَّ الْجَمَاعَةَ لَا بُدَّ لَهَا مِنْ إِمَامٍ.",
      "إِذَا كَانَ لَا بُدَّ مِنَ الدُّخُولِ فَادْخُلْ أَنْتَ بِمُعْجِزَةٍ"
     ],
     "items": [
      {
       "q": "____ أَنْ تَكُونَ الْأَرْضُ كُلُّهَا سِجْنًا لَهُ.",
       "o": [
        "يَجِبُ",
        "يُحِبُّ",
        "يَجِدُ"
       ],
       "a": 0
      },
      {
       "q": "الْجَمَاعَةُ لَا بُدَّ لَهَا ____ إِمَامٍ.",
       "o": [
        "مِنْ",
        "عَلَى",
        "فِي"
       ],
       "a": 0
      },
      {
       "q": "إِذَا كَانَ لَا بُدَّ مِنَ ____ فَادْخُلْ أَنْتَ.",
       "o": [
        "الدُّخُولِ",
        "يَدْخُلُ",
        "دَخَلَ"
       ],
       "a": 0
      },
      {
       "q": "«يَجِبُ أَنْ يَتَقَذَّرَهُ النَّاسُ» = …",
       "o": [
        "İnsanların ondan tiksinmesi gerekir",
        "İnsanlar ondan tiksindi",
        "İnsanlar onu sever"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "رَجَعَ مُوسَى إِلَى قَوْمِهِ {غَضْبَانَ} أَسِفًا. وَقَالَ لِلسَّامِرِيِّ: فَاذْهَبْ فَإِنَّ لَكَ فِي الْحَيَاةِ أَنْ تَقُولَ لَا {مِسَاسَ}. ثُمَّ قَالَ لِقَوْمِهِ: ادْخُلُوا الْأَرْضَ {الْمُقَدَّسَةَ}. فَقَالُوا: إِنَّ فِيهَا قَوْمًا {جَبَّارِينَ}. فَحُرِّمَتْ عَلَيْهِمْ {أَرْبَعِينَ} سَنَةً."
    },
    "think": {
     "q": "لِمَاذَا حُرِّمَتِ الْأَرْضُ الْمُقَدَّسَةُ عَلَيْهِمْ أَرْبَعِينَ سَنَةً؟",
     "qt": "Kutsal topraklar onlara neden kırk yıl haram kılındı?",
     "model": "Mısır'da kölelikle büyüyen nesil korkak ve isteksizdi; savaşmaya ve sorumluluk almaya cesaret edemedi. Kırk yıl içinde bu nesil ölecek, çölün zorluğu içinde yetişen yeni, güçlü bir nesil doğacaktı. Yazara göre bazı değişimler için bir neslin değişmesi gerekir."
    },
    "retell": [
     "غَضْبَانَ أَسِفًا",
     "هَارُونُ",
     "لَا مِسَاسَ",
     "إِحْرَاقُ الْعِجْلِ",
     "قَوْمٌ جَبَّارُونَ",
     "أَرْبَعُونَ سَنَةً"
    ],
    "quran": [
     {
      "ar": "قَالَ يَا هَارُونُ مَا مَنَعَكَ إِذْ رَأَيْتَهُمْ ضَلُّوا ۝ أَلَّا تَتَّبِعَنِ ۖ أَفَعَصَيْتَ أَمْرِي",
      "ref": "Tâhâ 20:92–93",
      "tr": "Mûsâ dedi: «Ey Hârûn! Onların saptıklarını gördüğünde bana uymaktan seni ne alıkoydu? Emrime karşı mı geldin?»",
      "inText": "«قَالَ يَا هَارُونُ مَا مَنَعَكَ …»"
     },
     {
      "ar": "قَالَ فَاذْهَبْ فَإِنَّ لَكَ فِي الْحَيَاةِ أَنْ تَقُولَ لَا مِسَاسَ",
      "ref": "Tâhâ 20:97",
      "tr": "Mûsâ dedi: «Defol! Hayatın boyunca senin cezan, ‘Bana dokunmayın’ demendir.»",
      "inText": "«قَالَ فَاذْهَبْ فَإِنَّ لَكَ فِي الْحَيَاةِ …»"
     },
     {
      "ar": "يَا قَوْمِ ادْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ الَّتِي كَتَبَ اللَّهُ لَكُمْ وَلَا تَرْتَدُّوا عَلَىٰ أَدْبَارِكُمْ فَتَنْقَلِبُوا خَاسِرِينَ",
      "ref": "Mâide 5:21",
      "tr": "Ey kavmim! Allah'ın size yazdığı kutsal topraklara girin; gerisin geri dönmeyin, yoksa kaybedenler olarak dönersiniz.",
      "inText": "«يَا قَوْمِ ادْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ …»"
     },
     {
      "ar": "قَالُوا يَا مُوسَىٰ إِنَّا لَنْ نَدْخُلَهَا أَبَدًا مَا دَامُوا فِيهَا ۖ فَاذْهَبْ أَنْتَ وَرَبُّكَ فَقَاتِلَا إِنَّا هَاهُنَا قَاعِدُونَ",
      "ref": "Mâide 5:24",
      "tr": "Dediler ki: «Ey Mûsâ! Onlar orada oldukça biz oraya asla girmeyeceğiz. Sen ve Rabbin gidin, savaşın; biz burada oturuyoruz.»",
      "inText": "«فَاذْهَبْ أَنْتَ وَرَبُّكَ فَقَاتِلَا …»"
     }
    ]
   },
   "sections": [
    {
     "n": 42,
     "title_ar": "الْعِقَابُ",
     "title_tr": "Ceza",
     "s": [
      [
       "وَلَمَّا أَخْبَرَ اللهُ مُوسَى أَنَّ بَنِي إِسْرَائِيلَ أَضَلَّهُمُ السَّامِرِيُّ رَجَعَ إِلَى قَوْمِهِ غَضْبَانَ أَسِفًا.",
       "Allah, Sâmirî'nin İsrâiloğullarını saptırdığını Mûsâ'ya haber verince, Mûsâ öfkeli ve üzgün olarak kavmine döndü."
      ],
      [
       "وَغَضِبَ عَلَى قَوْمِهِ وَغَضِبَ لِلهِ عَلَى أَخِيهِ هَارُونَ.",
       "Kavmine öfkelendi; Allah için kardeşi Hârûn'a da öfkelendi."
      ],
      [
       "«قَالَ يَا هَارُونُ مَا مَنَعَكَ إِذْ رَأَيْتَهُمْ ضَلُّوا أَلَّا تَتَّبِعَنِ، أَفَعَصَيْتَ أَمْرِي».",
       "«Dedi ki: Ey Hârûn! Onların saptıklarını gördüğünde bana uymaktan seni ne alıkoydu? Emrime karşı mı geldin?»"
      ],
      [
       "وَاعْتَذَرَ هَارُونُ وَقَالَ «إِنِّي خَشِيتُ أَنْ تَقُولَ فَرَّقْتَ بَيْنَ بَنِي إِسْرَائِيلَ وَلَمْ تَرْقُبْ قَوْلِي».",
       "Hârûn özür diledi ve dedi: «Ben, ‘İsrâiloğullarının arasına ayrılık soktun, sözümü gözetmedin’ demenden korktum.»"
      ],
      [
       "«إِنَّ الْقَوْمَ اسْتَضْعَفُونِي وَكَادُوا يَقْتُلُونَنِي».",
       "«Bu kavim beni hor gördü, neredeyse beni öldüreceklerdi.»"
      ],
      [
       "«قَالَ رَبِّ اغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ».",
       "«Mûsâ dedi: Rabbim! Beni ve kardeşimi bağışla, bizi rahmetine kat. Sen merhametlilerin en merhametlisisin.»"
      ],
      [
       "ثُمَّ الْتَفَتَ مُوسَى إِلَى السَّامِرِيِّ قَالَ: فَمَا خَطْبُكَ يَا سَامِرِيُّ؟",
       "Sonra Mûsâ Sâmirî'ye döndü ve dedi: Senin derdin ne, ey Sâmirî?"
      ],
      [
       "وَاعْتَرَفَ السَّامِرِيُّ بِجُرْمِهِ وَقَالَ: «كَذٰلِكَ سَوَّلَتْ لِي نَفْسِي».",
       "Sâmirî suçunu itiraf etti ve dedi: «Nefsim bana bunu böyle güzel gösterdi.»"
      ],
      [
       "«قَالَ فَاذْهَبْ فَإِنَّ لَكَ فِي الْحَيَاةِ أَنْ تَقُولَ لَا مِسَاسَ».",
       "«Mûsâ dedi: Defol! Hayatın boyunca senin cezan, ‘Bana dokunmayın’ demendir.»"
      ],
      [
       "وَعَاقَبَهُ مُوسَى بِالِانْفِرَادِ، يَمْشِي وَحْدَهُ وَيَعِيشُ وَحْدَهُ كَالْوَحْشِيِّ لَا يَأْلَفُ وَلَا يُؤْلَفُ.",
       "Mûsâ onu yalnızlıkla cezalandırdı: Vahşi bir hayvan gibi tek başına yürüyecek, tek başına yaşayacak; ne kimseye ısınacak ne de kimse ona ısınacaktı."
      ],
      [
       "وَأَيُّ عِقَابٍ أَكْبَرُ مِنْ هٰذَا؟!",
       "Bundan daha büyük ceza olur mu?!"
      ],
      [
       "إِنَّ الَّذِي نَجَّسَ أُلُوفًا مِنَ النَّاسِ بِالشِّرْكِ يَجِبُ أَنْ يَتَقَذَّرَهُ النَّاسُ وَيَنْبِذُوهُ.",
       "Binlerce insanı şirkle kirleten kişiden insanların tiksinmesi ve onu dışlaması gerekir."
      ],
      [
       "إِنَّ الَّذِي فَرَّقَ بَيْنَ اللهِ وَعِبَادِهِ يَجِبُ أَنْ يُفَرَّقَ بَيْنَهُ وَبَيْنَ النَّاسِ.",
       "Allah ile kulları arasını ayıranın, insanlardan ayrılması gerekir."
      ],
      [
       "إِنَّ الَّذِي دَعَا إِلَى الشِّرْكِ فِي أَرْضِ اللهِ مُذْنِبٌ يَجِبُ أَنْ تَكُونَ الْأَرْضُ كُلُّهَا سِجْنًا لَهُ.",
       "Allah'ın yeryüzünde şirke çağıran suçludur; bütün yeryüzünün ona zindan olması gerekir."
      ],
      [
       "ثُمَّ الْتَفَتَ مُوسَى إِلَى الْعِجْلِ الْمَلْعُونِ فَأَمَرَ بِإِحْرَاقِهِ فَأُحْرِقَ ثُمَّ نَفَضَهُ فِي الْبَحْرِ.",
       "Sonra Mûsâ o lanetli buzağıya döndü; yakılmasını emretti, buzağı yakıldı; sonra onun külünü denize savurdu."
      ],
      [
       "وَرَأَى بَنُو إِسْرَائِيلَ مَصِيرَ الْعِجْلِ الْمَعْبُودِ وَرَأَوْا ضَعْفَهُ وَعَجْزَهُ.",
       "İsrâiloğulları taptıkları buzağının akıbetini, zayıflığını ve âcizliğini gördüler."
      ],
      [
       "ثُمَّ الْتَفَتَ مُوسَى إِلَى بَنِي إِسْرَائِيلَ وَقَالَ:",
       "Sonra Mûsâ İsrâiloğullarına döndü ve dedi:"
      ],
      [
       "«يَا قَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنْفُسَكُمْ بِاتِّخَاذِكُمُ الْعِجْلَ فَتُوبُوا إِلَى بَارِئِكُمْ فَاقْتُلُوا أَنْفُسَكُمْ ذٰلِكُمْ خَيْرٌ لَكُمْ عِنْدَ بَارِئِكُمْ».",
       "«Ey kavmim! Buzağıyı ilah edinmekle kendinize zulmettiniz. Hemen yaratanınıza tövbe edin ve nefislerinizi öldürün. Bu, yaratanınız katında sizin için daha hayırlıdır.»"
      ],
      [
       "وَكَذٰلِكَ فَعَلُوا، وَقَتَلَ الَّذِينَ لَمْ يَعْبُدُوا الْعِجْلَ الَّذِينَ عَبَدُوهُ وَهٰكَذَا تَابَ اللهُ عَلَيْهِمْ.",
       "Öyle de yaptılar: Buzağıya tapmayanlar, ona tapanları öldürdü. Böylece Allah tövbelerini kabul etti."
      ],
      [
       "وَقَالَ اللهُ تَعَالَى:",
       "Allah Teâlâ buyurdu:"
      ],
      [
       "«إِنَّ الَّذِينَ اتَّخَذُوا الْعِجْلَ سَيَنَالُهُمْ غَضَبٌ مِنْ رَبِّهِمْ وَذِلَّةٌ فِي الْحَيَاةِ الدُّنْيَا، وَكَذٰلِكَ نَجْزِي الْمُفْتَرِينَ».",
       "«Buzağıyı ilah edinenlere, Rablerinden bir gazap ve dünya hayatında bir zillet erişecektir. İftira edenleri işte böyle cezalandırırız.»"
      ],
      [
       "وَكَذٰلِكَ عُبَّادُ الْعِجْلِ إِلَى يَوْمِ الْقِيَامَةِ وَكَذٰلِكَ الْمُشْرِكُونَ إِلَى يَوْمِ الْقِيَامَةِ!",
       "Kıyamet gününe kadar buzağıya tapanların ve kıyamet gününe kadar müşriklerin hâli böyledir!"
      ]
     ]
    },
    {
     "n": 43,
     "title_ar": "جُبْنُ بَنِي إِسْرَائِيلَ",
     "title_tr": "İsrâiloğullarının korkaklığı",
     "s": [
      [
       "نَشَأَ بَنُو إِسْرَائِيلَ عَلَى الْعُبُودِيَّةِ فِي مِصْرَ وَعَلَى الذُّلِّ وَالْهَوَانِ وَشَبَّ عَلَيْهِ الْأَطْفَالُ وَشَابَ عَلَيْهِ الشُّبَّانُ. وَبَرَدَ فِي عُرُوقِهِمُ الدَّمُ.",
       "İsrâiloğulları Mısır'da kölelik, zillet ve aşağılanma içinde yetişmişti; çocuklar bununla büyümüş, gençler bununla ihtiyarlamıştı. Damarlarındaki kan soğumuştu."
      ],
      [
       "وَأَصْبَحُوا لَا يَحْلُمُونَ بِسِيَادَةٍ وَلَا يَتَحَدَّثُونَ بِغَزْوٍ وَلَا جِهَادٍ.",
       "Artık ne bir efendilik hayal ediyor ne de savaştan ve cihattan söz ediyorlardı."
      ],
      [
       "كَانَ بَنُو إِسْرَائِيلَ يَقْضُونَ أَيَّامَهُمْ فِي الْغُرْبَةِ لَيْسَ لَهُمْ وَطَنٌ وَلَا حُكْمٌ.",
       "İsrâiloğulları günlerini gurbette geçiriyordu; ne bir vatanları vardı ne de bir yönetimleri."
      ],
      [
       "فَأَرَادَ مُوسَى بِوَحْيِ اللهِ أَنْ يَدْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ وَيَسْكُنُوا فِيهَا مُلُوكًا أَحْرَارًا.",
       "Mûsâ, Allah'ın vahyiyle onların kutsal topraklara girmelerini ve orada hür hükümdarlar olarak yaşamalarını istedi."
      ],
      [
       "وَلٰكِنَّ مُوسَى كَانَ يَعْرِفُ طَبِيعَةَ الْجُبْنِ وَالضَّعْفِ فِي بَنِي إِسْرَائِيلَ.",
       "Ama Mûsâ İsrâiloğullarındaki korkaklık ve zayıflık huyunu biliyordu."
      ],
      [
       "فَأَرَادَ أَنْ يُشَوِّقَهُمْ وَأَنْ يُهَوِّنَ عَلَيْهِمُ الْأَمْرَ لِأَنَّ الْأَرْضَ الْمُقَدَّسَةَ قَدِ اسْتَوْلَى عَلَيْهَا قَوْمٌ جَبَّارُونَ أُولُو قُوَّةٍ وَأُولُو بَأْسٍ شَدِيدٍ.",
       "Onları isteklendirmek ve işi onlara kolay göstermek istedi; çünkü kutsal topraklar güç ve büyük savaş gücü sahibi zorba bir kavmin eline geçmişti."
      ],
      [
       "وَلَا يَدْخُلُ بَنُو إِسْرَائِيلَ الْأَرْضَ الْمُقَدَّسَةَ حَتَّى يُخْرِجُوا مِنْهَا هٰؤُلَاءِ الْجَبَّارِينَ.",
       "İsrâiloğulları bu zorbaları oradan çıkarmadıkça kutsal topraklara giremezdi."
      ],
      [
       "فَذَكَّرَ نِعَمَ اللهِ عَلَيْهِمْ وَمَا فَضَّلَهُمْ بِهِ عَلَى الْعَالَمِينَ، حَتَّى يَنْشَطُوا لِلْجِهَادِ فِي سَبِيلِ اللهِ وَحَتَّى يَكْرَهُوا هٰذِهِ الْحَيَاةَ الذَّلِيلَةَ غَيْرَ اللَّائِقَةِ.",
       "Allah yolunda cihada heveslensinler ve bu yakışıksız, zelil hayattan nefret etsinler diye onlara Allah'ın nimetlerini ve onları âlemlere üstün kıldığı şeyleri hatırlattı."
      ],
      [
       "«وَإِذْ قَالَ مُوسَى لِقَوْمِهِ يَا قَوْمِ اذْكُرُوا نِعْمَةَ اللهِ عَلَيْكُمْ إِذْ جَعَلَ فِيكُمْ أَنْبِيَاءَ وَجَعَلَكُمْ مُلُوكًا وَآتَاكُمْ مَا لَمْ يُؤْتِ أَحَدًا مِنَ الْعَالَمِينَ».",
       "«Hani Mûsâ kavmine şöyle demişti: Ey kavmim! Allah'ın size olan nimetini hatırlayın: İçinizden peygamberler çıkardı, sizi hükümdarlar yaptı ve âlemlerden hiç kimseye vermediğini size verdi.»"
      ],
      [
       "ثُمَّ قَالَ لَهُمْ إِنَّ أَمَامَكُمُ الْأَرْضَ الْمُقَدَّسَةَ فَلَيْسَ لَكُمْ إِلَّا أَنْ تَقُومُوا وَتَنْتَزِعُوهَا مِنْ أَعْدَائِكُمْ.",
       "Sonra onlara dedi: Kutsal topraklar önünüzde; size düşen tek şey kalkıp onu düşmanlarınızın elinden almaktır."
      ],
      [
       "وَإِنَّ اللهَ إِذَا كَتَبَ لِأَحَدٍ شَيْئًا وَقَدَّرَهُ لَهُ فَقَدْ هَانَ عَلَيْهِ أَنْ يَأْخُذَهُ فَلَا رَادَّ لِقَضَاءِ اللهِ.",
       "Allah birine bir şey yazmış ve takdir etmişse, onu almak o kişiye kolaylaşır; Allah'ın hükmünü geri çevirecek yoktur."
      ],
      [
       "«يَا قَوْمِ ادْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ الَّتِي كَتَبَ اللهُ لَكُمْ».",
       "«Ey kavmim! Allah'ın size yazdığı kutsal topraklara girin.»"
      ],
      [
       "وَخَافَ أَنْ تَغْلِبَهُمْ طَبِيعَةُ الْجُبْنِ فَقَالَ:",
       "Korkaklık huylarının onlara galip gelmesinden korktu ve dedi:"
      ],
      [
       "«وَلَا تَرْتَدُّوا عَلَى أَدْبَارِكُمْ فَتَنْقَلِبُوا خَاسِرِينَ».",
       "«Sakın gerisin geri dönmeyin; yoksa kaybedenler olarak dönersiniz.»"
      ],
      [
       "وَوَقَعَ مَا كَانَ يَحْذَرُهُ مُوسَى، فَكَانَ جَوَابُهُمْ عَلَى كُلِّ مَا قَالَ مُوسَى:",
       "Mûsâ'nın korktuğu başa geldi; Mûsâ'nın bütün söylediklerine cevapları şu oldu:"
      ],
      [
       "«يَا مُوسَى إِنَّ فِيهَا قَوْمًا جَبَّارِينَ وَإِنَّا لَنْ نَدْخُلَهَا حَتَّى يَخْرُجُوا مِنْهَا».",
       "«Ey Mûsâ! Orada zorba bir kavim var. Onlar oradan çıkmadıkça biz oraya asla girmeyeceğiz.»"
      ],
      [
       "وَقَالُوا فِي وَقَارٍ وَسُكُونٍ:",
       "Ve ağırbaşlılıkla, sakin sakin dediler:"
      ],
      [
       "«فَإِنْ يَخْرُجُوا مِنْهَا فَإِنَّا دَاخِلُونَ».",
       "«Eğer oradan çıkarlarsa, o zaman biz gireriz.»"
      ],
      [
       "«قَالَ رَجُلَانِ مِنَ الَّذِينَ يَخَافُونَ أَنْعَمَ اللهُ عَلَيْهِمَا ادْخُلُوا عَلَيْهِمُ الْبَابَ فَإِذَا دَخَلْتُمُوهُ فَإِنَّكُمْ غَالِبُونَ * وَعَلَى اللهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ».",
       "«(Allah'tan) korkanlardan, Allah'ın nimet verdiği iki adam dedi: Onların üzerine kapıdan girin. Oradan girdiniz mi şüphesiz galip gelirsiniz. Eğer müminseniz yalnızca Allah'a tevekkül edin.»"
      ],
      [
       "وَلٰكِنَّ ذٰلِكَ لَمْ يُؤَثِّرْ فِيهِمْ وَقَالُوا:",
       "Ama bu onlara tesir etmedi ve dediler:"
      ],
      [
       "إِذَا كَانَ لَا بُدَّ مِنَ الدُّخُولِ فَادْخُلْ أَنْتَ بِمُعْجِزَةٍ، فَإِذَا سَمِعْنَا أَنَّكَ قَدْ دَخَلْتَهَا، جِئْنَا فَدَخَلْنَا نَحْنُ أَيْضًا آمِنِينَ سَالِمِينَ.",
       "Madem girmek şart, sen bir mucizeyle gir; senin oraya girdiğini duyunca biz de gelir, güven ve esenlik içinde gireriz."
      ],
      [
       "«قَالُوا يَا مُوسَى إِنَّا لَنْ نَدْخُلَهَا أَبَدًا مَا دَامُوا فِيهَا فَاذْهَبْ أَنْتَ وَرَبُّكَ فَقَاتِلَا إِنَّا هَاهُنَا قَاعِدُونَ».",
       "«Dediler ki: Ey Mûsâ! Onlar orada oldukça biz oraya asla girmeyeceğiz. Sen ve Rabbin gidin, savaşın; biz burada oturuyoruz.»"
      ],
      [
       "هُنَالِكَ غَضِبَ مُوسَى وَيَئِسَ مِنْ هٰؤُلَاءِ.",
       "İşte o zaman Mûsâ öfkelendi ve bunlardan ümidini kesti."
      ],
      [
       "«قَالَ رَبِّ إِنِّي لَا أَمْلِكُ إِلَّا نَفْسِي وَأَخِي فَافْرُقْ بَيْنَنَا وَبَيْنَ الْقَوْمِ الْفَاسِقِينَ».",
       "«Dedi ki: Rabbim! Ben kendimden ve kardeşimden başkasına söz geçiremiyorum. Artık bizimle bu yoldan çıkmış kavmin arasını ayır.»"
      ],
      [
       "«قَالَ فَإِنَّهَا مُحَرَّمَةٌ عَلَيْهِمْ أَرْبَعِينَ سَنَةً يَتِيهُونَ فِي الْأَرْضِ فَلَا تَأْسَ عَلَى الْقَوْمِ الْفَاسِقِينَ».",
       "«Allah dedi: Öyleyse orası onlara kırk yıl haram kılınmıştır; yeryüzünde şaşkın şaşkın dolaşacaklar. Sen o yoldan çıkmış kavim için üzülme.»"
      ],
      [
       "وَفِي هٰذِهِ الْمُدَّةِ يَمُوتُ هٰذَا الْجِيلُ الَّذِي نَشَأَ فِي مِصْرَ عَلَى الْعُبُودِيَّةِ وَالذُّلِّ.",
       "Bu süre içinde Mısır'da kölelik ve zillet içinde yetişmiş olan bu nesil ölecekti."
      ],
      [
       "وَيَنْشَأُ جِيلٌ آخَرُ يَنْشَأُ فِي هٰذَا التِّيهِ عَلَى الشِّدَّةِ وَالْعُسْرِ وَتِلْكَ أُمَّةُ الْمُسْتَقْبَلِ وَهٰذَا هُوَ مَصِيرُ الْيَهُودِ فِي كُلِّ زَمَانٍ أُمَّةٌ تَائِهَةٌ تَعِيشُ عَلَى الْعُبُودِيَّةِ وَالذُّلِّ.",
       "Ve bu çöl şaşkınlığı içinde, sıkıntı ve zorlukla yoğrulmuş başka bir nesil yetişecekti; işte geleceğin ümmeti oydu. Her zamanda Yahudilerin akıbeti de budur: Kölelik ve zillet içinde yaşayan, yolunu şaşırmış bir ümmet."
      ]
     ]
    }
   ]
  },
  {
   "id": 21,
   "emoji": "🐟",
   "title_ar": "مُوسَى وَالْخَضِرُ",
   "title_tr": "Mûsâ ve Hızır",
   "pre": {
    "predict": {
     "prompt_tr": "Mûsâ'ya «İnsanların en bilgilisi kim?» diye sordular; «Benim» dedi. Başlık: «فِي سَبِيلِ الْعِلْمِ». Sence Allah ona ne gösterdi?",
     "options": [
      [
       "أَنَّ عَبْدًا آخَرَ أَعْلَمُ مِنْهُ",
       "Kendisinden daha bilgili başka bir kul olduğunu"
      ],
      [
       "أَنَّهُ أَعْلَمُ النَّاسِ حَقًّا",
       "Gerçekten en bilgili insan olduğunu"
      ],
      [
       "كِتَابًا جَدِيدًا",
       "Yeni bir kitap"
      ]
     ]
    },
    "vocab": [
     [
      "مَجْمَعُ الْبَحْرَيْنِ",
      "iki denizin birleştiği yer",
      "🌊"
     ],
     [
      "حُوتٌ",
      "balık",
      "🐟"
     ],
     [
      "مِكْتَلٌ",
      "zenbil, sepet",
      "🧺"
     ],
     [
      "الصَّخْرَةُ",
      "kaya",
      "🪨"
     ],
     [
      "عُصْفُورٌ",
      "serçe",
      "🐦"
     ],
     [
      "جِدَارٌ",
      "duvar",
      "🧱"
     ]
    ]
   },
   "stop": {
    "section": 44,
    "after": 27,
    "prompt_tr": "Gemiciler onları ücretsiz taşıdı. Hızır, Mûsâ'ya ilim hakkında bir şey söyledi. Sence Hızır sonra ne yaptı?",
    "options": [
     [
      "نَزَعَ لَوْحًا مِنَ السَّفِينَةِ",
      "Gemiden bir tahta söktü"
     ],
     [
      "شَكَرَ أَهْلَ السَّفِينَةِ وَنَزَلَ",
      "Gemicilere teşekkür edip indi"
     ],
     [
      "نَامَ فِي السَّفِينَةِ",
      "Gemide uyudu"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَ مُوسَى: أَنَا أَعْلَمُ.",
     "حَمَلَ مُوسَى وَفَتَاهُ حُوتًا فِي مِكْتَلٍ.",
     "انْسَلَّ الْحُوتُ إِلَى الْبَحْرِ عِنْدَ الصَّخْرَةِ.",
     "لَقِيَ مُوسَى الْخَضِرَ.",
     "خَرَقَ الْخَضِرُ السَّفِينَةَ وَقَتَلَ الْغُلَامَ.",
     "أَقَامَ الْخَضِرُ الْجِدَارَ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا عَتَبَ اللهُ عَلَى مُوسَى؟",
      "qt": "Allah Mûsâ'yı neden kınadı?",
      "o": [
       "لِأَنَّهُ لَمْ يَرُدَّ الْعِلْمَ إِلَى اللهِ",
       "لِأَنَّهُ نَسِيَ الْحُوتَ",
       "لِأَنَّهُ تَرَكَ قَوْمَهُ"
      ],
      "ot": [
       "Çünkü bilgiyi Allah'a havale etmedi",
       "Çünkü balığı unuttu",
       "Çünkü kavmini bıraktı"
      ],
      "a": 0,
      "ev": [
       "44.3"
      ]
     },
     {
      "q": "كَيْفَ يَعْرِفُ مُوسَى مَكَانَ الْعَبْدِ الصَّالِحِ؟",
      "qt": "Mûsâ o iyi kulun yerini nasıl bilecekti?",
      "o": [
       "حَيْثُ يَفْقِدُ الْحُوتَ",
       "حَيْثُ يَرَى نَارًا",
       "حَيْثُ يَسْمَعُ صَوْتًا"
      ],
      "ot": [
       "Balığı kaybettiği yerde",
       "Ateş gördüğü yerde",
       "Bir ses duyduğu yerde"
      ],
      "a": 0,
      "ev": [
       "44.6"
      ]
     },
     {
      "q": "لِمَاذَا حَمَلَ أَهْلُ السَّفِينَةِ الْخَضِرَ وَمُوسَى بِغَيْرِ أُجْرَةٍ؟",
      "qt": "Gemiciler Hızır'la Mûsâ'yı neden ücretsiz taşıdı?",
      "o": [
       "لِأَنَّهُمْ عَرَفُوا الْخَضِرَ",
       "لِأَنَّ مُوسَى مَلِكٌ",
       "لِأَنَّ السَّفِينَةَ فَارِغَةٌ"
      ],
      "ot": [
       "Çünkü Hızır'ı tanıdılar",
       "Çünkü Mûsâ kraldı",
       "Çünkü gemi boştu"
      ],
      "a": 0,
      "ev": [
       "44.24"
      ]
     },
     {
      "q": "بِمَاذَا شَبَّهَ الْخَضِرُ عِلْمَهُ وَعِلْمَ مُوسَى أَمَامَ عِلْمِ اللهِ؟",
      "qt": "Hızır kendi ilmiyle Mûsâ'nın ilmini Allah'ın ilmi karşısında neye benzetti?",
      "o": [
       "بِنَقْرَةِ عُصْفُورٍ فِي الْبَحْرِ",
       "بِقَطْرَةِ مَطَرٍ",
       "بِحَبَّةِ رَمْلٍ"
      ],
      "ot": [
       "Bir serçenin denizden aldığı gaga dolusuna",
       "Bir yağmur damlasına",
       "Bir kum tanesine"
      ],
      "a": 0,
      "ev": [
       "44.27"
      ]
     },
     {
      "q": "مَا الَّذِي فَعَلَهُ الْخَضِرُ فِي الْقَرْيَةِ؟",
      "qt": "Hızır köyde ne yaptı?",
      "o": [
       "أَقَامَ جِدَارًا يُرِيدُ أَنْ يَنْقَضَّ",
       "طَلَبَ أُجْرَةً",
       "بَنَى بَيْتًا"
      ],
      "ot": [
       "Yıkılmak üzere olan bir duvarı doğrulttu",
       "Ücret istedi",
       "Bir ev yaptı"
      ],
      "a": 0,
      "ev": [
       "44.41"
      ]
     }
    ],
    "focus": {
     "title": "أَلَمْ …؟ «… değil mi? / … demedim mi?»",
     "explain": "Soru hemzesi <b>أَ</b> + <b>لَمْ</b> = <b>أَلَمْ</b>; cevabı «evet» olan, karşıdakine hatırlatma ya da sitem eden bir soru kurar: <span class='ar-inline'>أَلَمْ أَقُلْ إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ صَبْرًا؟</span> (Sana sabredemezsin demedim mi?). Fiil, لَمْ'den sonra olduğu gibi cezimlidir: <span class='ar-inline'>أَقُولُ → أَلَمْ أَقُلْ</span>. Böyle sorulara olumlu cevap <span class='ar-inline'>بَلَى</span> ile verilir.",
     "examples": [
      "أَلَمْ أَقُلْ إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ صَبْرًا؟!",
      "يَا لَلْعَجَبِ! أَلَمْ يَكُنْ مُوسَى مِنْ قَبْلُ؟!",
      "أَلَمْ يَكْفِكَ مَا أَصَابَنَا مِنَ الْجَهْدِ وَالْبَلَاءِ لِأَجْلِكَ؟!"
     ],
     "items": [
      {
       "q": "____ أَقُلْ لَكَ إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ صَبْرًا؟",
       "o": [
        "أَلَمْ",
        "أَلَا",
        "لَنْ"
       ],
       "a": 0
      },
      {
       "q": "أَلَمْ ____ إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ صَبْرًا؟",
       "o": [
        "أَقُلْ",
        "أَقُولُ",
        "قُلْتُ"
       ],
       "a": 0
      },
      {
       "q": "أَلَمْ تَرَ إِلَى الْمُلُوكِ كَيْفَ يُكْرِمُونَ ضُيُوفَهُمْ؟ — Olumlu cevap: …",
       "o": [
        "بَلَى",
        "لَا",
        "لَنْ"
       ],
       "a": 0
      },
      {
       "q": "«أَلَمْ يَكْفِكَ …؟» = …",
       "o": [
        "… sana yetmedi mi?",
        "… sana yetecek",
        "… sana yetti"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ مُوسَى: أَنَا {أَعْلَمُ}. فَأَوْحَى اللهُ إِلَيْهِ أَنَّ عَبْدًا بِمَجْمَعِ {الْبَحْرَيْنِ} أَعْلَمُ مِنْهُ. فَحَمَلَ {حُوتًا} فِي مِكْتَلٍ. وَلَقِيَ الْخَضِرَ فَقَالَ لَهُ: إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ {صَبْرًا}. ثُمَّ قَالَ: هٰذَا {فِرَاقُ} بَيْنِي وَبَيْنِكَ."
    },
    "think": {
     "q": "لِمَاذَا لَمْ يَسْتَطِعْ مُوسَى أَنْ يَصْبِرَ مَعَ الْخَضِرِ؟",
     "qt": "Mûsâ neden Hızır'la birlikteliğe sabredemedi?",
     "model": "Mûsâ gördüğü şeyin yalnızca dış yüzünü biliyordu: iyilik yapan gemicilerin gemisi deliniyor, masum bir çocuk öldürülüyor, kötü davranan köylülere karşılıksız iyilik yapılıyordu. Bunlar onun bildiği adalete aykırıydı. Hızır ise işlerin iç yüzünü biliyordu. İnsan bilmediği şeye sabretmekte zorlanır."
    },
    "personal": {
     "q": "قَالَ الْخَضِرُ: «أَنْتَ عَلَى عِلْمٍ لَا أَعْلَمُهُ». مَنْ عَلَّمَكَ شَيْئًا لَا تَعْلَمُهُ؟",
     "qt": "Hızır, «Sen benim bilmediğim bir ilme sahipsin» dedi. Kim sana bilmediğin bir şey öğretti? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "عَلَّمَنِي … كَيْفَ …",
      "تَعَلَّمْتُ مِنْ … أَنَّ …",
      "كَانَ … أَعْلَمَ مِنِّي فِي …"
     ]
    },
    "retell": [
     "أَنَا أَعْلَمُ",
     "مَجْمَعُ الْبَحْرَيْنِ",
     "الْحُوتُ",
     "السَّفِينَةُ",
     "الْغُلَامُ",
     "الْجِدَارُ"
    ],
    "quran": [
     {
      "ar": "فَلَمَّا جَاوَزَا قَالَ لِفَتَاهُ آتِنَا غَدَاءَنَا لَقَدْ لَقِينَا مِنْ سَفَرِنَا هَٰذَا نَصَبًا",
      "ref": "Kehf 18:62",
      "tr": "(Buluşma yerini) geçtiklerinde Mûsâ yardımcısına dedi: «Kuşluk yemeğimizi getir; bu yolculuğumuzda gerçekten yorulduk.»",
      "inText": "«آتِنَا غَدَاءَنَا لَقَدْ لَقِينَا …»"
     },
     {
      "ar": "قَالَ لَهُ مُوسَىٰ هَلْ أَتَّبِعُكَ عَلَىٰ أَنْ تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًا ۝ قَالَ إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ صَبْرًا",
      "ref": "Kehf 18:66–67",
      "tr": "Mûsâ ona: «Sana öğretilenden bana doğruyu öğretmen için sana uyabilir miyim?» dedi. O da: «Sen benimle beraberliğe asla sabredemezsin» dedi.",
      "inText": "«هَلْ أَتَّبِعُكَ عَلَى أَنْ تُعَلِّمَنِي …»"
     },
     {
      "ar": "قَالَ سَتَجِدُنِي إِنْ شَاءَ اللَّهُ صَابِرًا وَلَا أَعْصِي لَكَ أَمْرًا",
      "ref": "Kehf 18:69",
      "tr": "Mûsâ dedi: «İnşallah beni sabırlı bulacaksın; hiçbir emrine karşı gelmeyeceğim.»",
      "inText": "«سَتَجِدُنِي إِنْ شَاءَ اللهُ صَابِرًا …»"
     },
     {
      "ar": "قَالَ هَٰذَا فِرَاقُ بَيْنِي وَبَيْنِكَ ۚ سَأُنَبِّئُكَ بِتَأْوِيلِ مَا لَمْ تَسْتَطِعْ عَلَيْهِ صَبْرًا",
      "ref": "Kehf 18:78",
      "tr": "Dedi ki: «İşte bu, benimle senin aranın ayrılmasıdır. Sana sabredemediğin şeylerin iç yüzünü haber vereceğim.»",
      "inText": "«هٰذَا فِرَاقُ بَيْنِي وَبَيْنِكَ»"
     }
    ]
   },
   "sections": [
    {
     "n": 44,
     "title_ar": "فِي سَبِيلِ الْعِلْمِ",
     "title_tr": "İlim yolunda",
     "s": [
      [
       "عَنِ النَّبِيِّ ﷺ قَالَ: قَامَ مُوسَى خَطِيبًا فِي بَنِي إِسْرَائِيلَ فَسُئِلَ:",
       "Peygamber (s.a.v.) şöyle anlatmıştır: Mûsâ İsrâiloğulları arasında hutbe vermek için kalktı; ona soruldu:"
      ],
      [
       "أَيُّ النَّاسِ أَعْلَمُ؟",
       "İnsanların en bilgilisi kimdir?"
      ],
      [
       "فَقَالَ: أَنَا أَعْلَمُ!",
       "Dedi ki: En bilgili benim!"
      ],
      [
       "فَعَتَبَ اللهُ عَلَيْهِ إِذْ لَمْ يَرُدَّ الْعِلْمَ إِلَى اللهِ!",
       "Allah, bilgiyi Allah'a havale etmediği için onu kınadı!"
      ],
      [
       "فَأَوْحَى اللهُ إِلَيْهِ أَنَّ عَبْدًا مِنْ عِبَادِي بِمَجْمَعِ الْبَحْرَيْنِ هُوَ أَعْلَمُ مِنْكَ.",
       "Allah ona şöyle vahyetti: İki denizin birleştiği yerde kullarımdan bir kul var; o senden daha bilgilidir."
      ],
      [
       "قَالَ رَبِّ كَيْفَ بِهِ؟",
       "Dedi ki: Rabbim, ona nasıl ulaşırım?"
      ],
      [
       "فَقِيلَ لَهُ احْمِلْ حُوتًا فِي مِكْتَلٍ (زِنْبِيلٍ) فَإِذَا فَقَدْتَهُ فَهُوَ ثَمَّ.",
       "Ona denildi ki: Bir zenbil içinde bir balık taşı; balığı kaybettiğin yerde o kul oradadır."
      ],
      [
       "فَانْطَلَقَ وَانْطَلَقَ بِفَتَاهُ يُوشَعَ بْنِ نُونٍ وَحَمَلَا حُوتًا فِي مِكْتَلٍ حَتَّى كَانَا عِنْدَ الصَّخْرَةِ وَضَعَا رُءُوسَهُمَا فَنَامَا.",
       "Mûsâ, genç yardımcısı Yûşa' b. Nûn'u yanına alarak yola çıktı; bir zenbil içinde bir balık taşıdılar. Kayanın yanına varınca başlarını koyup uyudular."
      ],
      [
       "فَانْسَلَّ الْحُوتُ مِنَ الْمِكْتَلِ فَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ سَرَبًا (مَسْلَكًا) وَكَانَ لِمُوسَى وَفَتَاهُ عَجَبًا.",
       "Balık zenbilden sıyrılıp çıktı ve denizde bir tünel gibi yolunu tuttu; bu, Mûsâ ile yardımcısı için şaşılacak bir şeydi."
      ],
      [
       "فَانْطَلَقَا بَقِيَّةَ لَيْلَتِهِمَا وَيَوْمِهِمَا فَلَمَّا أَصْبَحَ قَالَ مُوسَى لِفَتَاهُ آتِنَا غَدَاءَنَا لَقَدْ لَقِينَا مِنْ سَفَرِنَا هٰذَا نَصَبًا (تَعَبًا).",
       "Gecelerinin ve günlerinin geri kalanında yürüdüler. Sabah olunca Mûsâ yardımcısına dedi: Kuşluk yemeğimizi getir; bu yolculuğumuzda gerçekten yorulduk."
      ],
      [
       "وَلَمْ يَجِدْ مُوسَى مَسًّا مِنَ النَّصَبِ حَتَّى جَاوَزَ الْمَكَانَ الَّذِي أُمِرَ بِهِ.",
       "Mûsâ, kendisine emredilen yeri geçinceye kadar hiç yorgunluk hissetmemişti."
      ],
      [
       "فَقَالَ لَهُ فَتَاهُ أَرَأَيْتَ إِذْ أَوَيْنَا إِلَى الصَّخْرَةِ فَإِنِّي نَسِيتُ الْحُوتَ.",
       "Yardımcısı ona dedi: Gördün mü? Kayaya sığındığımızda ben balığı unutmuşum."
      ],
      [
       "قَالَ مُوسَى: ذٰلِكَ مَا كُنَّا نَبْغِي!",
       "Mûsâ dedi: İşte aradığımız buydu!"
      ],
      [
       "فَارْتَدَّا عَلَى آثَارِهِمَا قَصَصًا.",
       "Kendi izlerini takip ederek geri döndüler."
      ],
      [
       "فَلَمَّا انْتَهَيَا إِلَى الصَّخْرَةِ إِذَا رَجُلٌ مُسَجًّى (مُغَطًّى) بِثَوْبٍ فَسَلَّمَ مُوسَى.",
       "Kayaya vardıklarında bir de baktılar ki bir elbiseye bürünmüş bir adam; Mûsâ selam verdi."
      ],
      [
       "فَقَالَ الْخَضِرُ: وَأَنَّى بِأَرْضِكَ السَّلَامُ؟",
       "Hızır dedi: Senin bu topraklarında selam nereden?"
      ],
      [
       "فَقَالَ: أَنَا مُوسَى!",
       "Dedi ki: Ben Mûsâ'yım!"
      ],
      [
       "فَقَالَ: مُوسَى بَنِي إِسْرَائِيلَ؟",
       "Dedi ki: İsrâiloğullarının Mûsâ'sı mı?"
      ],
      [
       "قَالَ: نَعَمْ!",
       "Dedi ki: Evet!"
      ],
      [
       "قَالَ مُوسَى: هَلْ أَتَّبِعُكَ عَلَى أَنْ تُعَلِّمَنِي مِمَّا عُلِّمْتَ رُشْدًا؟",
       "Mûsâ dedi: Sana öğretilenden bana doğruyu öğretmen için sana uyabilir miyim?"
      ],
      [
       "قَالَ: إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ صَبْرًا!",
       "Dedi ki: Sen benimle beraberliğe asla sabredemezsin!"
      ],
      [
       "يَا مُوسَى إِنِّي عَلَى عِلْمٍ مِنْ عِلْمِ اللهِ عَلَّمَنِيهِ لَا تَعْلَمُهُ أَنْتَ، وَأَنْتَ عَلَى عِلْمٍ عَلَّمَكَهُ اللهُ لَا أَعْلَمُهُ!",
       "Ey Mûsâ! Ben Allah'ın bana öğrettiği, senin bilmediğin bir ilme sahibim; sen de Allah'ın sana öğrettiği, benim bilmediğim bir ilme sahipsin!"
      ],
      [
       "قَالَ مُوسَى سَتَجِدُنِي إِنْ شَاءَ اللهُ صَابِرًا وَلَا أَعْصِي لَكَ أَمْرًا.",
       "Mûsâ dedi: İnşallah beni sabırlı bulacaksın; hiçbir emrine karşı gelmeyeceğim."
      ],
      [
       "فَانْطَلَقَا يَمْشِيَانِ عَلَى سَاحِلِ الْبَحْرِ لَيْسَ لَهُمَا سَفِينَةٌ فَمَرَّتْ بِهِمَا سَفِينَةٌ فَكَلَّمُوهُمْ أَنْ يَحْمِلُوهُمَا.",
       "Deniz kıyısında yürüyerek yola koyuldular; gemileri yoktu. Yanlarından bir gemi geçti; kendilerini taşımaları için gemicilerle konuştular."
      ],
      [
       "فَعُرِفَ الْخَضِرُ فَحَمَلُوهُمَا بِغَيْرِ نَوْلٍ (أُجْرَةٍ).",
       "Hızır tanındı; onları ücretsiz taşıdılar."
      ],
      [
       "فَجَاءَ عُصْفُورٌ فَوَقَعَ عَلَى حَرْفِ السَّفِينَةِ، فَنَقَرَ نَقْرَةً أَوْ نَقْرَتَيْنِ مِنَ الْبَحْرِ.",
       "Bir serçe gelip geminin kenarına kondu; denizden bir iki gaga vurdu."
      ],
      [
       "فَقَالَ الْخَضِرُ:",
       "Hızır dedi:"
      ],
      [
       "يَا مُوسَى مَا نَقَصَ عِلْمِي وَعِلْمُكَ مِنْ عِلْمِ اللهِ إِلَّا كَنَقْرَةِ هٰذَا الْعُصْفُورِ فِي الْبَحْرِ.",
       "Ey Mûsâ! Benim ilmim ve senin ilmin, Allah'ın ilminden ancak bu serçenin denizden gagasıyla aldığı kadarını eksiltir."
      ],
      [
       "فَعَمَدَ الْخَضِرُ إِلَى لَوْحٍ مِنْ أَلْوَاحِ السَّفِينَةِ فَنَزَعَهُ.",
       "Hızır geminin tahtalarından birine yönelip onu söktü."
      ],
      [
       "فَقَالَ مُوسَى:",
       "Mûsâ dedi:"
      ],
      [
       "قَوْمٌ حَمَلُونَا بِغَيْرِ نَوْلٍ عَمَدْتَ إِلَى سَفِينَتِهِمْ فَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا؟",
       "Bizi ücretsiz taşıyan insanların gemisine yönelip, içindekileri boğmak için onu deldin mi?"
      ],
      [
       "قَالَ الْخَضِرُ:",
       "Hızır dedi:"
      ],
      [
       "أَلَمْ أَقُلْ إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ صَبْرًا؟!",
       "Ben sana, benimle beraberliğe asla sabredemezsin, demedim mi?!"
      ],
      [
       "قَالَ مُوسَى:",
       "Mûsâ dedi:"
      ],
      [
       "لَا تُؤَاخِذْنِي بِمَا نَسِيتُ وَلَا تُرْهِقْنِي مِنْ أَمْرِي عُسْرًا.",
       "Unuttuğum şey yüzünden beni sorumlu tutma; bu işimde bana güçlük çıkarma."
      ],
      [
       "فَكَانَتِ الْأُولَى مِنْ مُوسَى نِسْيَانًا.",
       "Mûsâ'nın ilk itirazı bir unutkanlıktı."
      ],
      [
       "فَانْطَلَقَا فَإِذَا بِغُلَامٍ يَلْعَبُ مَعَ الْغِلْمَانِ فَأَخَذَ الْخَضِرُ بِرَأْسِهِ مِنْ أَعْلَاهُ فَاقْتَلَعَ رَأْسَهُ بِيَدِهِ.",
       "Yola devam ettiler; bir de baktılar ki çocuklarla oynayan bir oğlan. Hızır onun başını üstünden tuttu ve eliyle koparıverdi."
      ],
      [
       "فَقَالَ مُوسَى:",
       "Mûsâ dedi:"
      ],
      [
       "أَقَتَلْتَ نَفْسًا زَكِيَّةً بِغَيْرِ نَفْسٍ!",
       "Hiç kimseyi öldürmemiş tertemiz bir canı öldürdün ha!"
      ],
      [
       "قَالَ: أَلَمْ أَقُلْ لَكَ إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ صَبْرًا؟!",
       "Dedi ki: Ben sana, benimle beraberliğe asla sabredemezsin, demedim mi?!"
      ],
      [
       "فَانْطَلَقَا حَتَّى إِذَا أَتَيَا أَهْلَ قَرْيَةٍ اسْتَطْعَمَا أَهْلَهَا فَأَبَوْا أَنْ يُضَيِّفُوهُمَا فَوَجَدَا فِيهَا جِدَارًا يُرِيدُ أَنْ يَنْقَضَّ.",
       "Yine yola koyuldular. Nihayet bir köy halkına varıp onlardan yiyecek istediler; köylüler onları misafir etmeyi reddetti. Orada yıkılmak üzere olan bir duvar buldular."
      ],
      [
       "قَامَ الْخَضِرُ بِيَدِهِ فَأَقَامَهُ.",
       "Hızır eliyle onu doğrultuverdi."
      ],
      [
       "فَقَالَ مُوسَى:",
       "Mûsâ dedi:"
      ],
      [
       "لَوْ شِئْتَ لَاتَّخَذْتَ عَلَيْهِ أَجْرًا!",
       "İsteseydin buna karşılık bir ücret alırdın!"
      ],
      [
       "فَقَالَ: هٰذَا فِرَاقُ بَيْنِي وَبَيْنِكَ!",
       "Dedi ki: İşte bu, benimle senin aranın ayrılmasıdır!"
      ],
      [
       "قَالَ النَّبِيُّ ﷺ: «يَرْحَمُ اللهُ مُوسَى لَوَدِدْنَا لَوْ صَبَرَ حَتَّى يُقَصَّ عَلَيْنَا مِنْ أَمْرِهِمَا»!",
       "Peygamber (s.a.v.) buyurdu: «Allah Mûsâ'ya rahmet etsin! Ne isterdik, sabretseydi de ikisinin başından geçenler bize daha çok anlatılsaydı!» (Buhârî)"
      ]
     ]
    }
   ]
  },
  {
   "id": 22,
   "emoji": "📜",
   "title_ar": "التَّأْوِيلُ وَالْخَاتِمَةُ",
   "title_tr": "Yorum ve son",
   "pre": {
    "predict": {
     "prompt_tr": "Hızır gemiyi deldi, çocuğu öldürdü, duvarı doğrulttu. Başlık: «التَّأْوِيلُ» (iç yüzü). Sence gemiyi neden deldi?",
     "options": [
      [
       "لِأَنَّ مَلِكًا كَانَ يَأْخُذُ كُلَّ سَفِينَةٍ صَالِحَةٍ",
       "Çünkü bir kral her sağlam gemiyi zorla alıyordu"
      ],
      [
       "لِأَنَّهُ غَضِبَ مِنْ أَهْلِهَا",
       "Çünkü gemicilere kızmıştı"
      ],
      [
       "لِأَنَّهَا كَانَتْ قَدِيمَةً",
       "Çünkü gemi eskiydi"
      ]
     ]
    },
    "vocab": [
     [
      "مَسَاكِينُ",
      "yoksullar",
      "🤲"
     ],
     [
      "غَصْبًا",
      "zorla",
      "✊"
     ],
     [
      "كَنْزٌ",
      "hazine",
      "💰"
     ],
     [
      "يَتِيمٌ",
      "yetim",
      "🧒"
     ],
     [
      "الذِّلَّةُ وَالْمَسْكَنَةُ",
      "zillet ve yoksulluk",
      "⬇️"
     ],
     [
      "وَجِيهٌ",
      "itibarlı, saygın",
      "🌟"
     ]
    ]
   },
   "stop": {
    "section": 45,
    "after": 3,
    "prompt_tr": "Hızır gemiyi ve çocuğu açıkladı. Sence köylüler kötü davrandığı hâlde duvarı neden doğrulttu?",
    "options": [
     [
      "لِأَنَّ تَحْتَهُ كَنْزًا لِيَتِيمَيْنِ",
      "Çünkü altında iki yetimin hazinesi vardı"
     ],
     [
      "لِيَأْخُذَ أُجْرَةً",
      "Ücret almak için"
     ],
     [
      "لِأَنَّهُ جِدَارُ بَيْتِهِ",
      "Çünkü kendi evinin duvarıydı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "أَخْبَرَ الْخَضِرُ مُوسَى عَنِ السَّفِينَةِ.",
     "أَخْبَرَهُ عَنِ الْغُلَامِ.",
     "أَخْبَرَهُ عَنِ الْجِدَارِ وَالْكَنْزِ.",
     "عَرَفَ مُوسَى أَنَّ فَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمًا.",
     "تُوُفِّيَ مُوسَى وَبَنُو إِسْرَائِيلَ فِي التِّيهِ.",
     "ضَرَبَ اللهُ عَلَيْهِمُ الذِّلَّةَ."
    ],
    "questions": [
     {
      "q": "لِمَنْ كَانَتِ السَّفِينَةُ؟",
      "qt": "Gemi kimindi?",
      "o": [
       "لِمَسَاكِينَ يَعْمَلُونَ فِي الْبَحْرِ",
       "لِلْمَلِكِ",
       "لِلْخَضِرِ"
      ],
      "ot": [
       "Denizde çalışan yoksullarındı",
       "Kralındı",
       "Hızır'ındı"
      ],
      "a": 0,
      "ev": [
       "45.1"
      ]
     },
     {
      "q": "لِمَاذَا قَتَلَ الْخَضِرُ الْغُلَامَ؟",
      "qt": "Hızır çocuğu neden öldürdü?",
      "o": [
       "خَشِيَ أَنْ يُرْهِقَ أَبَوَيْهِ طُغْيَانًا وَكُفْرًا",
       "لِأَنَّهُ سَرَقَ",
       "لِأَنَّهُ ضَرَبَهُ"
      ],
      "ot": [
       "Anne babasını azgınlık ve inkâra sürüklemesinden korktu",
       "Çünkü hırsızlık yapmıştı",
       "Çünkü ona vurmuştu"
      ],
      "a": 0,
      "ev": [
       "45.2"
      ]
     },
     {
      "q": "لِمَاذَا حَفِظَ اللهُ كَنْزَ الْيَتِيمَيْنِ؟",
      "qt": "Allah iki yetimin hazinesini neden korudu?",
      "o": [
       "لِأَنَّ أَبَاهُمَا كَانَ صَالِحًا",
       "لِأَنَّهُمَا غَنِيَّانِ",
       "لِأَنَّ أَهْلَ الْقَرْيَةِ كُرَمَاءُ"
      ],
      "ot": [
       "Çünkü babaları iyi bir insandı",
       "Çünkü zengindiler",
       "Çünkü köylüler cömertti"
      ],
      "a": 0,
      "ev": [
       "45.4"
      ]
     },
     {
      "q": "مَاذَا عَرَفَ مُوسَى فِي النِّهَايَةِ؟",
      "qt": "Mûsâ sonunda neyi anladı?",
      "o": [
       "أَنَّ أَحَدًا لَا يُحِيطُ بِعِلْمِ اللهِ",
       "أَنَّهُ أَعْلَمُ النَّاسِ",
       "أَنَّ الْخَضِرَ مَلِكٌ"
      ],
      "ot": [
       "Hiç kimsenin Allah'ın ilmini kuşatamayacağını",
       "En bilgili insanın kendisi olduğunu",
       "Hızır'ın bir kral olduğunu"
      ],
      "a": 0,
      "ev": [
       "45.6"
      ]
     },
     {
      "q": "كَيْفَ كَانَ مُوسَى مَعَ قَوْمِهِ؟",
      "qt": "Mûsâ kavmine karşı nasıldı?",
      "o": [
       "أَشْفَقَ عَلَيْهِمْ مِنْ آبَائِهِمْ وَأُمَّهَاتِهِمْ",
       "قَاسِيًا عَلَيْهِمْ",
       "لَا يَهْتَمُّ بِهِمْ"
      ],
      "ot": [
       "Onlara analarından babalarından daha şefkatliydi",
       "Onlara karşı katıydı",
       "Onlarla ilgilenmezdi"
      ],
      "a": 0,
      "ev": [
       "46.8"
      ]
     }
    ],
    "focus": {
     "title": "Temyiz: خَيْرًا مِنْهُ زَكَاةً، زَادَهُ شَوْقًا",
     "explain": "Bir karşılaştırmanın ya da artışın <b>hangi bakımdan</b> olduğunu açıklayan nekre ve mansub isme <b>temyiz</b> denir: <span class='ar-inline'>خَيْرًا مِنْهُ زَكَاةً</span> (temizlik bakımından ondan daha hayırlı), <span class='ar-inline'>أَقْرَبَ رُحْمًا</span> (merhamet bakımından daha yakın), <span class='ar-inline'>فَزَادَهُ ذٰلِكَ شَوْقًا</span> (bu onun özlemini artırdı). Türkçede çoğu zaman «… bakımından» ya da doğrudan isimle çevrilir.",
     "examples": [
      "فَأَرَدْنَا أَنْ يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا مِنْهُ زَكَاةً وَأَقْرَبَ رُحْمًا.",
      "فَكَلَّمَهُ رَبُّهُ وَنَاجَاهُ … فَزَادَهُ ذٰلِكَ شَوْقًا",
      "وَجَعَلُوهُ أَهْوَنَ رَجُلٍ فِيهِمْ"
     ],
     "items": [
      {
       "q": "يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا مِنْهُ ____.",
       "o": [
        "زَكَاةً",
        "زَكَاةٌ",
        "الزَّكَاةِ"
       ],
       "a": 0
      },
      {
       "q": "وَأَقْرَبَ ____.",
       "o": [
        "رُحْمًا",
        "رُحْمٌ",
        "بِالرُّحْمِ"
       ],
       "a": 0
      },
      {
       "q": "فَزَادَهُ ذٰلِكَ ____.",
       "o": [
        "شَوْقًا",
        "شَوْقٌ",
        "الشَّوْقُ"
       ],
       "a": 0
      },
      {
       "q": "«أَكْثَرُ مِنْكَ عِلْمًا» = …",
       "o": [
        "Bilgice senden daha çok",
        "Senin bilgin çok",
        "Bilgiyi seven"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ الْخَضِرُ: أَمَّا السَّفِينَةُ فَكَانَتْ لِ{مَسَاكِينَ} يَعْمَلُونَ فِي الْبَحْرِ. وَأَمَّا الْغُلَامُ فَكَانَ أَبَوَاهُ {مُؤْمِنَيْنِ}. وَأَمَّا الْجِدَارُ فَكَانَ تَحْتَهُ {كَنْزٌ} لِيَتِيمَيْنِ. وَفَوْقَ كُلِّ ذِي عِلْمٍ {عَلِيمٌ}. وَتُوُفِّيَ مُوسَى وَبَنُو إِسْرَائِيلَ {يَتِيهُونَ} فِي الْأَرْضِ."
    },
    "think": {
     "q": "مَاذَا تَعَلَّمْنَا مِنْ قِصَّةِ مُوسَى وَالْخَضِرِ؟",
     "qt": "Mûsâ ile Hızır kıssasından ne öğrendik?",
     "model": "Görünüşte kötü olan bazı olayların arkasında hayır olabilir: Delinen gemi zorbadan kurtuldu, ölen çocuk anne babasının imanını kurtardı, karşılıksız doğrultulan duvar iki yetimin hakkını korudu. Ayrıca en büyük peygamberlerden biri bile «En bilgili benim» dememesi gerektiğini öğrendi; her bilenin üstünde daha iyi bilen biri vardır."
    },
    "retell": [
     "السَّفِينَةُ / الْمَلِكُ",
     "الْغُلَامُ / أَبَوَاهُ",
     "الْجِدَارُ / الْكَنْزُ",
     "فَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ",
     "التِّيهُ",
     "أَشْفَقُ خَلْقِ اللهِ"
    ],
    "quran": [
     {
      "ar": "أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ يَعْمَلُونَ فِي الْبَحْرِ فَأَرَدْتُ أَنْ أَعِيبَهَا وَكَانَ وَرَاءَهُمْ مَلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًا",
      "ref": "Kehf 18:79",
      "tr": "Gemi, denizde çalışan yoksullarındı; onu kusurlu yapmak istedim. Çünkü ileride her gemiyi zorla alan bir kral vardı.",
      "inText": "«أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ …»"
     },
     {
      "ar": "وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ يَتِيمَيْنِ فِي الْمَدِينَةِ وَكَانَ تَحْتَهُ كَنْزٌ لَهُمَا وَكَانَ أَبُوهُمَا صَالِحًا فَأَرَادَ رَبُّكَ أَنْ يَبْلُغَا أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنْزَهُمَا رَحْمَةً مِنْ رَبِّكَ ۚ وَمَا فَعَلْتُهُ عَنْ أَمْرِي ۚ ذَٰلِكَ تَأْوِيلُ مَا لَمْ تَسْطِعْ عَلَيْهِ صَبْرًا",
      "ref": "Kehf 18:82",
      "tr": "Duvar, şehirdeki iki yetim oğlanındı; altında onlara ait bir hazine vardı, babaları da iyi bir insandı. Rabbin, bir rahmet olarak onların erginlik çağına ulaşıp hazinelerini çıkarmalarını istedi. Ben bunu kendi isteğimle yapmadım. İşte sabredemediğin şeylerin iç yüzü budur.",
      "inText": "«وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ …»"
     },
     {
      "ar": "نَرْفَعُ دَرَجَاتٍ مَنْ نَشَاءُ ۗ وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ",
      "ref": "Yûsuf 12:76",
      "tr": "Dilediğimizin derecelerini yükseltiriz. Her bilenin üstünde daha iyi bilen biri vardır.",
      "inText": "«وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ»"
     },
     {
      "ar": "وَمَا ظَلَمَهُمُ اللَّهُ وَلَٰكِنْ كَانُوا أَنْفُسَهُمْ يَظْلِمُونَ",
      "ref": "Nahl 16:33",
      "tr": "Allah onlara zulmetmedi; ama onlar kendilerine zulmediyorlardı.",
      "inText": "«وَمَا ظَلَمَهُمُ اللهُ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 45,
     "title_ar": "التَّأْوِيلُ",
     "title_tr": "Yorum",
     "s": [
      [
       "ثُمَّ نَبَّأَ الْخَضِرُ مُوسَى.",
       "Sonra Hızır, Mûsâ'ya (olanların iç yüzünü) haber verdi."
      ],
      [
       "فَقَالَ: أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ يَعْمَلُونَ فِي الْبَحْرِ فَأَرَدْتُ أَنْ أَعِيبَهَا وَكَانَ وَرَاءَهُمْ مَلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ (صَالِحَةٍ) غَصْبًا.",
       "Dedi ki: Gemi, denizde çalışan yoksul insanlarındı; onu kusurlu yapmak istedim. Çünkü ileride, her (sağlam) gemiyi zorla alan bir kral vardı."
      ],
      [
       "وَأَمَّا الْغُلَامُ فَكَانَ أَبَوَاهُ مُؤْمِنَيْنِ فَخَشِينَا أَنْ يُرْهِقَهُمَا طُغْيَانًا وَكُفْرًا.",
       "Oğlana gelince, anne babası mümin kimselerdi; onları azgınlığa ve inkâra sürüklemesinden korktuk."
      ],
      [
       "فَأَرَدْنَا أَنْ يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا مِنْهُ زَكَاةً وَأَقْرَبَ رُحْمًا.",
       "İstedik ki Rableri onlara, ondan daha temiz ve daha merhametli bir evlat versin."
      ],
      [
       "وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ يَتِيمَيْنِ فِي الْمَدِينَةِ وَكَانَ تَحْتَهُ كَنْزٌ لَهُمَا، وَكَانَ أَبُوهُمَا صَالِحًا، فَأَرَادَ رَبُّكَ أَنْ يَبْلُغَا أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنْزَهُمَا رَحْمَةً مِنْ رَبِّكَ.",
       "Duvara gelince, o şehirdeki iki yetim oğlanındı; altında onlara ait bir hazine vardı; babaları da iyi bir insandı. Rabbin, Rabbinden bir rahmet olarak onların erginlik çağına ulaşmalarını ve hazinelerini çıkarmalarını istedi."
      ],
      [
       "وَمَا فَعَلْتُهُ عَنْ أَمْرِي، ذٰلِكَ تَأْوِيلُ مَا لَمْ تَسْطِعْ عَلَيْهِ صَبْرًا.",
       "Ben bunları kendi isteğimle yapmadım. İşte sabredemediğin şeylerin iç yüzü budur."
      ],
      [
       "هُنَالِكَ عَرَفَ مُوسَى أَنَّ أَحَدًا لَا يَسْتَطِيعُ أَنْ يُحِيطَ بِعِلْمِ اللهِ وَأَنَّ بَعْضَ عِلْمِهِ عِنْدَ بَعْضٍ وَبَعْضَهُ عِنْدَ بَعْضٍ، وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ.",
       "İşte o zaman Mûsâ, hiç kimsenin Allah'ın ilmini kuşatamayacağını, O'nun ilminin bir kısmının birinde, bir kısmının da başkasında olduğunu anladı. Her bilenin üstünde daha iyi bilen biri vardır."
      ]
     ]
    },
    {
     "n": 46,
     "title_ar": "بَنُو إِسْرَائِيلَ بَعْدَ مُوسَى",
     "title_tr": "Mûsâ'dan sonra İsrâiloğulları",
     "s": [
      [
       "وَتُوُفِّيَ مُوسَى وَبَنُو إِسْرَائِيلَ يَتِيهُونَ فِي الْأَرْضِ عِقَابًا مِنَ اللهِ وَجَزَاءَ أَعْمَالِهِمْ.",
       "Mûsâ vefat etti; İsrâiloğulları ise Allah'tan bir ceza ve yaptıklarının karşılığı olarak yeryüzünde şaşkın şaşkın dolaşıyordu."
      ],
      [
       "وَضَرَبَ اللهُ عَلَيْهِمُ الذِّلَّةَ وَالْمَسْكَنَةَ وَبَاءُوا بِغَضَبٍ مِنَ اللهِ.",
       "Allah onlara zillet ve yoksulluk damgası vurdu; Allah'ın gazabına uğradılar."
      ],
      [
       "إِنَّهُمْ قَدْ أَسْخَطُوا اللهَ الَّذِي جَعَلَ فِيهِمْ أَنْبِيَاءَ، وَجَعَلَهُمْ مُلُوكًا، وَآتَاهُمْ مَا لَمْ يُؤْتِ أَحَدًا مِنَ الْعَالَمِينَ فِي عَصْرِهِمْ.",
       "Onlar; içlerinden peygamberler çıkaran, onları hükümdarlar yapan ve kendi çağlarında âlemlerden hiç kimseye vermediğini onlara veren Allah'ı öfkelendirdiler."
      ],
      [
       "الَّذِي أَنْجَاهُمْ مِنْ آلِ فِرْعَوْنَ يَسُومُونَهُمْ سُوءَ الْعَذَابِ يُذَبِّحُونَ أَبْنَاءَهُمْ وَيَسْتَحْيُونَ نِسَاءَهُمْ.",
       "O Allah ki onları, kendilerine azabın en kötüsünü tattıran, oğullarını boğazlayıp kadınlarını sağ bırakan Firavun ailesinden kurtarmıştı."
      ],
      [
       "الَّذِي فَرَقَ بِهِمُ الْبَحْرَ فَأَنْجَاهُمْ وَأَغْرَقَ آلَ فِرْعَوْنَ وَهُمْ يَنْظُرُونَ.",
       "O Allah ki onlar için denizi yarmış, onları kurtarmış ve gözleri önünde Firavun ailesini boğmuştu."
      ],
      [
       "الَّذِي ظَلَّلَ عَلَيْهِمُ الْغَمَامَ وَأَنْزَلَ عَلَيْهِمُ الْمَنَّ وَالسَّلْوَى.",
       "O Allah ki onları bulutla gölgelendirmiş, onlara kudret helvası ve bıldırcın indirmişti."
      ],
      [
       "الَّذِي فَجَّرَ لَهُمْ مِنَ الْأَرْضِ عُيُونًا، وَوَسَّعَ لَهُمْ فِي مَأْكَلٍ وَمَشْرَبٍ.",
       "O Allah ki onlar için yerden pınarlar fışkırtmış, yiyeceklerini ve içeceklerini bol kılmıştı."
      ],
      [
       "وَكَانَ جَزَاءُ كُلِّ ذٰلِكَ أَنْ كَفَرُوا بِآيَاتِ اللهِ وَعَصَوْا وَاعْتَدَوْا.",
       "Bütün bunların karşılığı ise Allah'ın âyetlerini inkâr etmeleri, isyan etmeleri ve haddi aşmaları oldu."
      ],
      [
       "وَأَغْضَبُوا نَبِيَّهُمْ مُوسَى أَشْفَقَ خَلْقِ اللهِ عَلَيْهِمْ وَأَشْفَقَ عَلَيْهِمْ مِنْ آبَائِهِمْ وَأُمَّهَاتِهِمْ.",
       "Allah'ın kulları içinde onlara en şefkatli olan, onlara analarından babalarından daha şefkatli olan peygamberleri Mûsâ'yı öfkelendirdiler."
      ],
      [
       "ذٰلِكَ الَّذِي كَانَ يَحْنُو عَلَيْهِمْ حُنُوَّ الْمُرْضِعِ عَلَى الْفَطِيمِ وَالْأُمِّ الْحَنُونِ عَلَى الْيَتِيمِ.",
       "O, sütannenin sütten kesilmiş çocuğa, şefkatli annenin yetime düşkünlüğü gibi onlara düşkündü."
      ],
      [
       "ذٰلِكَ الَّذِي سَبُّوهُ دَعَا لَهُمْ، وَكُلَّمَا ضَحِكُوا عَلَيْهِ بَكَى لَهُمْ وَكُلَّمَا جَفَوْهُ رَثَى لَهُمْ.",
       "Ona sövdüklerinde onlara dua eden, ona güldükçe onlar için ağlayan, ona kaba davrandıkça onlara acıyan oydu."
      ],
      [
       "ذٰلِكَ الَّذِي خَلَّصَهُمْ مِنْ أَسْرِ فِرْعَوْنَ وَأَخْرَجَهُمْ مِنْ سِجْنِ مِصْرَ إِلَى بَرِّ الْحُرِّيَّةِ وَالشَّرَفِ، وَمِنْ حَيَاةِ الْعَبِيدِ الْأَشْقِيَاءِ، إِلَى حَيَاةِ الْأَحْرَارِ الشُّرَفَاءِ.",
       "Onları Firavun'un esaretinden kurtaran, Mısır zindanından hürriyet ve şeref kıyısına, bahtsız kölelerin hayatından hür ve şerefli insanların hayatına çıkaran oydu."
      ],
      [
       "قَدْ أَغْضَبُوهُ وَآذَوْهُ وَعَانَدُوهُ وَسَخِرُوا مِنْهُ وَجَعَلُوهُ أَهْوَنَ رَجُلٍ فِيهِمْ وَكَانَ عِنْدَ اللهِ وَجِيهًا.",
       "Onu öfkelendirdiler, ona eziyet ettiler, ona inat ettiler, onunla alay ettiler ve onu aralarındaki en değersiz adam yerine koydular; oysa o Allah katında itibarlıydı."
      ],
      [
       "أَلَا يَسْتَحِقُّونَ هٰذَا الْعِقَابَ وَالْخِزْيَ وَالذُّلَّ وَالْمَسْكَنَةَ وَالتِّيهَ الدَّائِمَ وَأَلَّا يُفْلِحُوا أَبَدًا؟",
       "Bu cezayı, rezilliği, zilleti, yoksulluğu, sürekli şaşkınlığı ve asla iflah olmamayı hak etmiyorlar mı?"
      ],
      [
       "بَلَى! إِنَّهُمْ يَسْتَحِقُّونَ كُلَّ ذٰلِكَ وَأَكْثَرَ بِأَعْمَالِهِمْ: «وَمَا ظَلَمَهُمُ اللهُ وَلٰكِنْ كَانُوا أَنْفُسَهُمْ يَظْلِمُونَ».",
       "Elbette! Yaptıkları yüzünden bütün bunları ve daha fazlasını hak ediyorlar: «Allah onlara zulmetmedi; ama onlar kendilerine zulmediyorlardı.»"
      ]
     ]
    }
   ]
  }
 ]
});
