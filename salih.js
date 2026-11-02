/* Kasasu'n-Nebiyyîn — Hz. Sâlih kıssası (s. 115–133)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "salih",
 "title_ar": "قِصَّةُ صَالِحٍ عَلَيْهِ السَّلَامُ",
 "title_tr": "Hz. Sâlih'in Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 115–133 («نَاقَةُ ثَمُودَ»)",
 "overrides": {
  "عاد": "عاد_قوم",
  "عادا": "عاد_قوم",
  "كعاد": "عاد_قوم",
  "صالح": "صالح_نبي",
  "صالحا": "صالح_نبي",
  "بصالح": "صالح_نبي",
  "لصالح": "صالح_نبي",
  "وهاجر": "هاجر_فعل"
 },
 "units": [
  {
   "id": 1,
   "emoji": "⛰️",
   "title_ar": "أَرْضُ ثَمُودَ",
   "title_tr": "Semûd'un toprağı",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «بَعْدَ عَادٍ», «كُفْرَانُ ثَمُودَ». Semûd, Âd'dan sonra gelen bir kavim. Sence Âd'ın başına gelenlerden ders aldılar mı?",
     "options": [
      [
       "لَا، كَانُوا عَلَى أَثَرِ عَادٍ",
       "Hayır, Âd'ın izinden gittiler"
      ],
      [
       "نَعَمْ، شَكَرُوا اللهَ",
       "Evet, Allah'a şükrettiler"
      ],
      [
       "تَرَكُوا الْجِبَالَ وَسَكَنُوا الْبَحْرَ",
       "Dağları bırakıp denize yerleştiler"
      ]
     ]
    },
    "vocab": [
     [
      "وَرِثَ",
      "mirasçısı oldu, yerine geçti",
      "🔁"
     ],
     [
      "آمِنٌ",
      "güvenli",
      "🛡️"
     ],
     [
      "يَنْحِتُ",
      "yontar",
      "🪨"
     ],
     [
      "يَنْقُشُ / نُقُوشٌ",
      "nakış işler / nakışlar",
      "🎨"
     ],
     [
      "الشَّمْعُ",
      "mum",
      "🕯️"
     ],
     [
      "ظَنَّ أَنَّ",
      "…-dığını sandı",
      "💭"
     ]
    ]
   },
   "stop": {
    "section": 2,
    "after": 0,
    "prompt_tr": "Bütün bu nimetler Semûd'u şükre yöneltmedi. Sence onları neye sürükledi?",
    "options": [
     [
      "إِلَى الْكُفْرِ وَالطُّغْيَانِ",
      "İnkâra ve azgınlığa"
     ],
     [
      "إِلَى الصَّدَقَةِ",
      "Sadaka vermeye"
     ],
     [
      "إِلَى السَّفَرِ",
      "Yolculuğa"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "وَرِثَتْ ثَمُودُ عَادًا.",
     "كَانَتْ أَرْضُهُمْ جَمِيلَةً خَضْرَاءَ.",
     "نَحَتُوا مِنَ الْجِبَالِ بُيُوتًا.",
     "فَتَحَ اللهُ عَلَيْهِمْ أَبْوَابَ كُلِّ شَيْءٍ.",
     "نَسُوا اللهَ وَفَرِحُوا بِمَا أُوتُوا.",
     "ظَنُّوا أَنَّ الْمَوْتَ لَا يَصِلُ إِلَيْهِمْ."
    ],
    "questions": [
     {
      "q": "عَلَى أَثَرِ مَنْ كَانَتْ ثَمُودُ؟",
      "qt": "Semûd kimin izinden gidiyordu?",
      "o": [
       "عَلَى أَثَرِ عَادٍ",
       "عَلَى أَثَرِ صَالِحٍ",
       "عَلَى أَثَرِ إِبْرَاهِيمَ"
      ],
      "ot": [
       "Âd'ın izinden",
       "Sâlih'in izinden",
       "İbrahim'in izinden"
      ],
      "a": 0,
      "ev": [
       "1.1"
      ]
     },
     {
      "q": "كَيْفَ كَانُوا يَبْنُونَ بُيُوتَهُمْ؟",
      "qt": "Evlerini nasıl yapıyorlardı?",
      "o": [
       "يَنْحِتُونَهَا مِنَ الْجِبَالِ",
       "يَبْنُونَهَا مِنَ الْخَشَبِ",
       "يَصْنَعُونَهَا مِنَ الشَّعْرِ"
      ],
      "ot": [
       "Dağlardan yontuyorlardı",
       "Ağaçtan yapıyorlardı",
       "Kıldan (çadır) yapıyorlardı"
      ],
      "a": 0,
      "ev": [
       "1.4"
      ]
     },
     {
      "q": "كَانَ الْحَجَرُ لَهُمْ كَـ ...؟",
      "qt": "Taş onlar için neye benziyordu?",
      "o": [
       "الشَّمْعِ",
       "الْحَدِيدِ",
       "الْمَاءِ"
      ],
      "ot": [
       "Muma",
       "Demire",
       "Suya"
      ],
      "a": 0,
      "ev": [
       "1.5"
      ]
     },
     {
      "q": "مَاذَا قَالُوا لَمَّا فَرِحُوا بِمَا أُوتُوا؟",
      "qt": "Kendilerine verilenle şımarınca ne dediler?",
      "o": [
       "مَنْ أَشَدُّ مِنَّا قُوَّةً",
       "الْحَمْدُ لِلّٰهِ",
       "نَحْنُ ضُعَفَاءُ"
      ],
      "ot": [
       "Bizden daha güçlü kim var?",
       "Hamd Allah'a mahsustur",
       "Biz zayıfız"
      ],
      "a": 0,
      "ev": [
       "2.1"
      ]
     },
     {
      "q": "مَاذَا ظَنُّوا عَنِ الْمَوْتِ؟",
      "qt": "Ölüm hakkında ne sandılar?",
      "o": [
       "أَنَّهُ لَا يَدْخُلُ الْجِبَالَ",
       "أَنَّهُ قَرِيبٌ جِدًّا",
       "أَنَّهُ يَأْتِي مِنَ الْبَحْرِ"
      ],
      "ot": [
       "Dağlara giremeyeceğini",
       "Çok yakın olduğunu",
       "Denizden geleceğini"
      ],
      "a": 0,
      "ev": [
       "2.3"
      ]
     }
    ],
    "focus": {
     "title": "ظَنَّ أَنَّ …: «…-dığını sandı»",
     "explain": "<b>أَنَّ</b> bir isim cümlesini bağlar; ardından isim ya da bitişik zamir gelir ve mansub olur: <span class='ar-inline'>ظَنُّوا أَنَّهُمْ لَا يَمُوتُونَ</span> (ölmeyeceklerini sandılar), <span class='ar-inline'>ظَنُّوا أَنَّ الْمَوْتَ لَا يَدْخُلُ</span> (ölümün girmeyeceğini sandılar), <span class='ar-inline'>أَنَّ عَادًا إِنَّمَا هَلَكُوا</span>. <b>أَنْ</b> (+ fiil) ile karıştırmayın: <span class='ar-inline'>أَرَادَ اللهُ أَنْ يُرْسِلَ</span>.",
     "examples": [
      "وَظَنُّوا أَنَّهُمْ لَا يَمُوتُونَ",
      "وَظَنُّوا أَنَّ الْمَوْتَ لَا يَدْخُلُ فِي هٰذِهِ الْجِبَالِ",
      "يَظُنُّونَ أَنَّ أُمَّةَ نُوحٍ إِنَّمَا غَرِقَتْ لِأَنَّهَا كَانَتْ فِي الْوَادِي"
     ],
     "items": [
      {
       "q": "وَظَنُّوا ____ لَا يَمُوتُونَ.",
       "o": [
        "أَنَّهُمْ",
        "أَنْ",
        "هُمْ"
       ],
       "a": 0
      },
      {
       "q": "وَظَنُّوا أَنَّ ____ لَا يَدْخُلُ فِي هٰذِهِ الْجِبَالِ.",
       "o": [
        "الْمَوْتَ",
        "الْمَوْتُ",
        "الْمَوْتِ"
       ],
       "a": 0
      },
      {
       "q": "وَأَنَّ ____ إِنَّمَا هَلَكُوا لِأَنَّهُمْ كَانُوا فِي السَّهْلِ.",
       "o": [
        "عَادًا",
        "عَادٌ",
        "عَادٍ"
       ],
       "a": 0
      },
      {
       "q": "يَظُنُّونَ أَنَّ أُمَّةَ نُوحٍ إِنَّمَا غَرِقَتْ ____ كَانَتْ فِي الْوَادِي.",
       "o": [
        "لِأَنَّهَا",
        "لِأَنْ",
        "لَهَا"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "وَرِثَتْ ثَمُودُ {عَادًا}. وَكَانُوا يَنْحِتُونَ مِنَ {الْجِبَالِ} بُيُوتًا. وَفَتَحَ اللهُ عَلَيْهِمْ {بَرَكَاتٍ} مِنَ السَّمَاءِ وَالْأَرْضِ. وَلٰكِنَّهُمْ لَمْ {يَشْكُرُوا}، وَظَنُّوا أَنَّهُمْ لَا {يَمُوتُونَ}."
    },
    "think": {
     "q": "لِمَاذَا ظَنَّتْ ثَمُودُ أَنَّهَا فِي مَكَانٍ آمِنٍ؟",
     "qt": "Semûd neden güvende olduğunu sandı?",
     "model": "Evlerini sağlam dağlara oymuşlardı; Nûh ümmetinin vadide boğulduğunu, Âd'ın ovada helak olduğunu düşünüp felaketin sebebini yerde aradılar. Oysa o kavimler bulundukları yer yüzünden değil, inkârları yüzünden helak olmuştu. Kıssa, insanın gerçek güvenliği taşta ve güçte araması hatasını gösteriyor."
    },
    "retell": [
     "ثَمُودُ",
     "عَلَى أَثَرِ عَادٍ",
     "الْجِبَالُ",
     "بَرَكَاتٌ",
     "الطُّغْيَانُ",
     "ظَنُّوا"
    ],
    "quran": [
     {
      "ar": "وَاذْكُرُوا إِذْ جَعَلَكُمْ خُلَفَاءَ مِنْ بَعْدِ عَادٍ وَبَوَّأَكُمْ فِي الْأَرْضِ تَتَّخِذُونَ مِنْ سُهُولِهَا قُصُورًا وَتَنْحِتُونَ الْجِبَالَ بُيُوتًا",
      "ref": "A'râf 7:74",
      "tr": "Hatırlayın ki Allah sizi Âd'dan sonra onların yerine getirdi ve sizi yeryüzüne yerleştirdi; ovalarında saraylar ediniyor, dağları oyup evler yapıyorsunuz.",
      "inText": "وَرِثَتْ ثَمُودُ عَادًا …"
     },
     {
      "ar": "أَتُتْرَكُونَ فِي مَا هَاهُنَا آمِنِينَ ۝ فِي جَنَّاتٍ وَعُيُونٍ ۝ وَزُرُوعٍ وَنَخْلٍ طَلْعُهَا هَضِيمٌ ۝ وَتَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا فَارِهِينَ",
      "ref": "Şuarâ 26:146–149",
      "tr": "Buradaki nimetler içinde güven içinde bırakılacağınızı mı sanıyorsunuz? Bahçeler ve pınarlar içinde, ekinler ve tomurcukları yumuşacık hurmalıklar içinde? Dağlardan ustalıkla evler yontuyorsunuz.",
      "inText": "فَكَانُوا يَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا …"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "بَعْدَ عَادٍ",
     "title_tr": "Âd'dan sonra",
     "s": [
      [
       "وَرِثَتْ ثَمُودُ عَادًا كَمَا وَرِثَتْ عَادٌ أُمَّةَ نُوحٍ.",
       "Âd'ın Nûh ümmetinin yerine geçtiği gibi Semûd da Âd'ın yerine geçti."
      ],
      [
       "وَكَانَتْ ثَمُودُ عَلَى أَثَرِ عَادٍ، كَمَا كَانَتْ عَادٌ عَلَى أَثَرِ أُمَّةِ نُوحٍ.",
       "Âd'ın Nûh ümmetinin izinden gittiği gibi Semûd da Âd'ın izinden gidiyordu."
      ],
      [
       "وَكَانَتْ أَرْضُ ثَمُودَ أَرْضًا آمِنَةً جَمِيلَةً خَضْرَاءَ، فِيهَا بَسَاتِينُ وَعُيُونٌ وَجَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ.",
       "Semûd'un toprağı güvenli, güzel, yemyeşil bir topraktı; orada bahçeler, pınarlar ve altından ırmaklar akan bağlar vardı."
      ],
      [
       "وَكَانَتْ ثَمُودُ كَعَادٍ فِي الْعِمَارَةِ وَالزِّرَاعَةِ وَفِي كَثْرَةِ الْبَسَاتِينِ.",
       "Semûd imarda, tarımda ve bahçelerinin çokluğunda Âd gibiydi."
      ],
      [
       "وَفَاقُوهُمْ فِي الْعَقْلِ وَالصِّنَاعَةِ، فَكَانُوا يَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا وَاسِعَةً جَمِيلَةً، وَيَنْقُشُونَ فِي الْحِجَارَةِ نُقُوشًا بَدِيعَةً.",
       "Akılda ve zanaatta onları geçtiler: dağlardan geniş, güzel evler yontar, taşlara harika nakışlar işlerlerdi."
      ],
      [
       "وَقَدْ لَانَ لَهُمُ الْحَجَرُ بِعَقْلِهِمْ وَصِنَاعَتِهِمْ فَيَصْنَعُونَ بِهِ مَا يَصْنَعُ الْإِنْسَانُ بِالشَّمْعِ.",
       "Akılları ve ustalıkları sayesinde taş onlara yumuşamıştı; insanın mumla yaptığını onlar taşla yapıyorlardı."
      ],
      [
       "وَإِذَا دَخَلَ الْإِنْسَانُ مَدِينَتَهُمْ رَأَى عَجَبًا، رَأَى قُصُورًا عَظِيمَةً كَالْجِبَالِ كَأَنَّمَا بَنَاهَا الْجِنُّ، وَرَأَى أَزْهَارًا جَمِيلَةً فِي الْجُدْرَانِ كَأَنَّمَا أَنْبَتَهَا الرَّبِيعُ.",
       "İnsan şehirlerine girince şaşılacak şeyler görürdü: sanki cinler yapmış gibi dağlar kadar büyük saraylar, duvarlarda sanki bahar yeşertmiş gibi güzel çiçekler."
      ],
      [
       "وَقَدْ فَتَحَ اللهُ عَلَى ثَمُودَ بَرَكَاتٍ مِنَ السَّمَاءِ وَالْأَرْضِ، وَقَدْ فَتَحَ اللهُ عَلَى ثَمُودَ أَبْوَابَ كُلِّ شَيْءٍ.",
       "Allah Semûd'a gökten ve yerden bereketler açmış, onlara her şeyin kapılarını açmıştı."
      ],
      [
       "جَادَتْ لَهُمُ السَّمَاءُ بِالْأَمْطَارِ، وَجَادَتْ لَهُمُ الْأَرْضُ بِالنَّبَاتِ وَالْأَزْهَارِ، وَجَادَتْ لَهُمُ الْبَسَاتِينُ بِالْفَوَاكِهِ وَالْأَثْمَارِ، وَبَارَكَ اللهُ لَهُمْ فِي الرِّزْقِ وَالْأَعْمَارِ.",
       "Gök onlara cömertçe yağmur, yer bitki ve çiçek, bahçeler meyve ve ürün verdi; Allah rızıklarını ve ömürlerini bereketli kıldı."
      ]
     ]
    },
    {
     "n": 2,
     "title_ar": "كُفْرَانُ ثَمُودَ",
     "title_tr": "Semûd'un nankörlüğü",
     "s": [
      [
       "وَلٰكِنَّ كُلَّ ذٰلِكَ لَمْ يَحْمِلْ ثَمُودَ عَلَى الشُّكْرِ وَعِبَادَةِ اللهِ تَعَالَى.",
       "Ama bütün bunlar Semûd'u şükre ve yüce Allah'a ibadete yöneltmedi."
      ],
      [
       "بَلْ حَمَلَهُمْ ذٰلِكَ عَلَى الْكُفْرِ وَالطُّغْيَانِ؛ نَسُوا اللهَ وَفَرِحُوا بِمَا أُوتُوا وَقَالُوا: مَنْ أَشَدُّ مِنَّا قُوَّةً.",
       "Aksine bu onları inkâra ve azgınlığa sürükledi: Allah'ı unuttular, kendilerine verilenle şımardılar ve «Bizden daha güçlü kim var?» dediler."
      ],
      [
       "وَظَنُّوا أَنَّهُمْ لَا يَمُوتُونَ وَلَا يَخْرُجُونَ مِنْ قُصُورِهِمْ وَجَنَّاتِهِمْ أَبَدًا.",
       "Hiç ölmeyeceklerini, saraylarından ve bahçelerinden asla çıkmayacaklarını sandılar."
      ],
      [
       "وَظَنُّوا أَنَّ الْمَوْتَ لَا يَدْخُلُ فِي هٰذِهِ الْجِبَالِ وَلَا يَجِدُ إِلَيْهِمْ سَبِيلًا!",
       "Ölümün bu dağlara giremeyeceğini, onlara bir yol bulamayacağını sandılar!"
      ],
      [
       "لَعَلَّهُمْ كَانُوا يَظُنُّونَ أَنَّ أُمَّةَ نُوحٍ إِنَّمَا غَرِقَتْ لِأَنَّهَا كَانَتْ فِي الْوَادِي.",
       "Belki de Nûh ümmetinin sırf vadide olduğu için boğulduğunu sanıyorlardı."
      ],
      [
       "وَأَنَّ عَادًا إِنَّمَا هَلَكُوا لِأَنَّهُمْ كَانُوا فِي السَّهْلِ!",
       "Âd'ın da sırf ovada olduğu için helak olduğunu!"
      ],
      [
       "وَأَنَّهُمْ مِنَ الْخَوْفِ وَالْمَوْتِ بِمَكَانٍ آمِنٍ.",
       "Kendilerinin ise korkudan ve ölümden güvende bir yerde olduğunu."
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "🌟",
   "title_ar": "صَالِحٌ الْفَتَى",
   "title_tr": "Genç Sâlih",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «عِبَادَةُ الْأَصْنَامِ», «صَالِحٌ عَلَيْهِ الصَّلَاةُ وَالسَّلَامُ». Sâlih çok zeki bir çocuktu. Sence insanlar onun için ne umuyordu?",
     "options": [
      [
       "أَنْ يَكُونَ غَنِيًّا شَرِيفًا",
       "Zengin ve ileri gelen biri olmasını"
      ],
      [
       "أَنْ يَكُونَ نَبِيًّا",
       "Peygamber olmasını"
      ],
      [
       "أَنْ يَتْرُكَ بَلَدَهُ",
       "Memleketini terk etmesini"
      ]
     ]
    },
    "vocab": [
     [
      "أَهَانَ",
      "alçalttı, hor gördü",
      "👎"
     ],
     [
      "خَضَعَ",
      "boyun eğdi",
      "🙇"
     ],
     [
      "نَجِيبٌ / رَشِيدٌ",
      "zeki / olgun",
      "🌟"
     ],
     [
      "رَجَاءٌ",
      "umut",
      "🤞"
     ],
     [
      "شَأْنٌ",
      "önem, büyük gelecek",
      "📈"
     ],
     [
      "النُّبُوَّةُ",
      "peygamberlik",
      "📜"
     ]
    ]
   },
   "stop": {
    "section": 4,
    "after": 10,
    "prompt_tr": "Babası oğlunun at üstünde, arkasında hizmetçilerle zengin biri olacağını hayal ediyordu. Ama Allah başka bir şey istedi. Sence ne?",
    "options": [
     [
      "أَنْ يَجْعَلَهُ نَبِيًّا وَرَسُولًا",
      "Onu peygamber ve elçi yapmayı"
     ],
     [
      "أَنْ يَجْعَلَهُ مَلِكًا",
      "Onu kral yapmayı"
     ],
     [
      "أَنْ يَجْعَلَهُ تَاجِرًا",
      "Onu tüccar yapmayı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "نَحَتُوا الْحِجَارَةَ وَعَبَدُوا الْأَصْنَامَ.",
     "أَهَانُوا أَنْفُسَهُمْ.",
     "أَرَادَ اللهُ أَنْ يُرْسِلَ إِلَيْهِمْ رَسُولًا.",
     "كَانَ صَالِحٌ وَلَدًا نَجِيبًا رَشِيدًا.",
     "كَانَ أَبُوهُ يَرْجُو أَنْ يَكُونَ غَنِيًّا.",
     "شَرَّفَهُ اللهُ بِالنُّبُوَّةِ."
    ],
    "questions": [
     {
      "q": "مَاذَا صَنَعَتْ ثَمُودُ مِنَ الْحِجَارَةِ؟",
      "qt": "Semûd taşlardan ne yaptı?",
      "o": [
       "أَصْنَامًا عَبَدُوهَا",
       "سُفُنًا",
       "سُيُوفًا"
      ],
      "ot": [
       "Taptıkları putlar",
       "Gemiler",
       "Kılıçlar"
      ],
      "a": 0,
      "ev": [
       "3.0"
      ]
     },
     {
      "q": "لِمَاذَا كَانَتْ عِبَادَتُهُمْ لِلْحَجَرِ عَجَبًا؟",
      "qt": "Taşa tapmaları neden şaşılacak bir şeydi?",
      "o": [
       "لِأَنَّهُمْ يَنْحِتُونَهُ بِأَيْدِيهِمْ",
       "لِأَنَّ الْحَجَرَ كَانَ ذَهَبًا",
       "لِأَنَّ الْحَجَرَ كَانَ يَتَكَلَّمُ"
      ],
      "ot": [
       "Çünkü onu kendi elleriyle yontuyorlardı",
       "Çünkü taş altındı",
       "Çünkü taş konuşuyordu"
      ],
      "a": 0,
      "ev": [
       "3.6"
      ]
     },
     {
      "q": "كَيْفَ كَانَ صَالِحٌ فِي صِغَرِهِ؟",
      "qt": "Sâlih küçükken nasıldı?",
      "o": [
       "وَلَدًا نَجِيبًا رَشِيدًا",
       "وَلَدًا ضَعِيفًا",
       "وَلَدًا لَا يَعْرِفُهُ أَحَدٌ"
      ],
      "ot": [
       "Zeki ve olgun bir çocuk",
       "Zayıf bir çocuk",
       "Kimsenin tanımadığı bir çocuk"
      ],
      "a": 0,
      "ev": [
       "4.3"
      ]
     },
     {
      "q": "مَاذَا كَانَ أَبُوهُ يَرَى؟",
      "qt": "Babası ne düşünüyordu?",
      "o": [
       "أَنَّهُ يَكْسِبُ مَالًا عَظِيمًا",
       "أَنَّهُ يَكُونُ نَبِيًّا",
       "أَنَّهُ يَتْرُكُ الْبَيْتَ"
      ],
      "ot": [
       "Büyük bir servet kazanacağını",
       "Peygamber olacağını",
       "Evi terk edeceğini"
      ],
      "a": 0,
      "ev": [
       "4.8"
      ]
     },
     {
      "q": "مَاذَا أَرَادَ اللهُ لِصَالِحٍ؟",
      "qt": "Allah Sâlih için ne istedi?",
      "o": [
       "أَنْ يُشَرِّفَهُ بِالنُّبُوَّةِ",
       "أَنْ يَكُونَ أَغْنَى النَّاسِ",
       "أَنْ يَسْكُنَ قَصْرًا"
      ],
      "ot": [
       "Onu peygamberlikle şereflendirmeyi",
       "İnsanların en zengini olmasını",
       "Bir sarayda oturmasını"
      ],
      "a": 0,
      "ev": [
       "4.11"
      ]
     }
    ],
    "focus": {
     "title": "Gelecek zaman: سَـ + muzari",
     "explain": "Muzari fiilin başına gelen <b>سَـ</b> (veya <b>سَوْفَ</b>) fiile gelecek anlamı verir: <span class='ar-inline'>يَكُونُ</span> (olur) → <span class='ar-inline'>سَيَكُونُ</span> (olacak). <span class='ar-inline'>سَيَكُونُ لَهُ شَأْنٌ</span> (onun büyük bir geleceği olacak), <span class='ar-inline'>سَيَكُونُ لَهُ قَصْرٌ جَمِيلٌ</span> (güzel bir sarayı olacak). Sonraki ünitelerde de göreceksiniz: <span class='ar-inline'>سَيَبْعَثُكُمْ</span>, <span class='ar-inline'>سَيَعْجَزُ</span>.",
     "examples": [
      "سَيَكُونُ لَهُ شَأْنٌ، سَيَكُونُ لَهُ شَأْنٌ",
      "وَيَرَوْنَ أَنَّهُ سَيَكُونُ لَهُ قَصْرٌ جَمِيلٌ"
     ],
     "items": [
      {
       "q": "يَقُولُونَ: ____ لَهُ شَأْنٌ.",
       "o": [
        "سَيَكُونُ",
        "كَانَ",
        "كُنْ"
       ],
       "a": 0
      },
      {
       "q": "وَيَرَوْنَ أَنَّهُ ____ لَهُ قَصْرٌ جَمِيلٌ.",
       "o": [
        "سَيَكُونُ",
        "سَكَانَ",
        "يَكُونُوا"
       ],
       "a": 0
      },
      {
       "q": "«سَيَكْسِبُ» = …",
       "o": [
        "kazanacak",
        "kazandı",
        "kazan!"
       ],
       "a": 0
      },
      {
       "q": "إِنَّ اللهَ ____ بَعْدَ مَوْتِكُمْ.",
       "o": [
        "سَيَبْعَثُكُمْ",
        "بَعَثَكُمْ",
        "ابْعَثُوا"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "عَبَدَتْ ثَمُودُ {الْأَصْنَامَ}. وَكَانَ فِيهِمْ رَجُلٌ اسْمُهُ {صَالِحٌ}. وَكَانَ وَلَدًا {نَجِيبًا} جِدًّا. وَكَانَ لِلنَّاسِ فِيهِ {رَجَاءٌ} كَبِيرٌ. وَلٰكِنَّ اللهَ أَرَادَ أَنْ يُشَرِّفَهُ بِ{النُّبُوَّةِ}."
    },
    "think": {
     "q": "«وَهَلْ فَوْقَ ذٰلِكَ شَرَفٌ؟» مَا الشَّرَفُ الْحَقِيقِيُّ فِي هٰذِهِ الْقِصَّةِ؟",
     "qt": "«Bundan büyük şeref var mı?» Bu kıssada gerçek şeref nedir?",
     "model": "İnsanlar şerefi saray, bahçe, at ve hizmetçide görüyordu. Kıssa ise gerçek şerefin Allah'ın bir insanı insanları karanlıktan aydınlığa çıkarmak için seçmesi olduğunu söylüyor. Herkesin ölçüsü maldı; Allah'ın ölçüsü ise görev ve hidayetti."
    },
    "personal": {
     "q": "كَانَ لِلنَّاسِ فِي صَالِحٍ رَجَاءٌ كَبِيرٌ. مَاذَا تُرِيدُ أَنْ تَكُونَ؟",
     "qt": "İnsanların Sâlih'ten büyük umutları vardı. Sen ne olmak istiyorsun? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "أُرِيدُ أَنْ أَكُونَ …",
      "سَأَكُونُ …"
     ]
    },
    "retell": [
     "الْأَصْنَامُ",
     "أَهَانُوا أَنْفُسَهُمْ",
     "صَالِحٌ",
     "نَجِيبٌ رَشِيدٌ",
     "رَجَاءٌ",
     "النُّبُوَّةُ"
    ],
    "quran": [
     {
      "ar": "إِنَّ اللهَ لَا يَظْلِمُ النَّاسَ شَيْئًا وَلٰكِنَّ النَّاسَ أَنْفُسَهُمْ يَظْلِمُونَ",
      "ref": "Yûnus 10:44",
      "tr": "Allah insanlara hiçbir şekilde zulmetmez; fakat insanlar kendilerine zulmederler.",
      "inText": "«إِنَّ اللهَ لَا يَظْلِمُ النَّاسَ شَيْئًا …»"
     },
     {
      "ar": "وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللهَ فَأَنْسَاهُمْ أَنْفُسَهُمْ",
      "ref": "Haşr 59:19",
      "tr": "Allah'ı unutan, bu yüzden Allah'ın da onlara kendilerini unutturduğu kimseler gibi olmayın.",
      "inText": "نَسُوا اللهَ فَنَسُوا أَنْفُسَهُمْ"
     },
     {
      "ar": "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ … وَرَزَقْنَاهُمْ مِنَ الطَّيِّبَاتِ",
      "ref": "İsrâ 17:70",
      "tr": "Andolsun biz Âdemoğullarını şerefli kıldık … ve onları temiz şeylerle rızıklandırdık.",
      "inText": "إِنَّ اللهَ كَرَّمَهُمْ وَرَزَقَهُمْ مِنَ الطَّيِّبَاتِ"
     }
    ]
   },
   "sections": [
    {
     "n": 3,
     "title_ar": "عِبَادَةُ الْأَصْنَامِ",
     "title_tr": "Putlara tapınma",
     "s": [
      [
       "وَلَمْ يَكْفِهِمْ هٰذَا، بَلْ نَحَتُوا الْحِجَارَةَ وَعَبَدُوا الْأَصْنَامَ.",
       "Bu da onlara yetmedi; taşları yonttular ve putlara taptılar."
      ],
      [
       "وَصَارُوا يَعْبُدُونَ الْحِجَارَةَ كَمَا كَانَتْ أُمَّةُ نُوحٍ تَعْبُدُهَا، وَكَذٰلِكَ عَادٌ.",
       "Nûh ümmetinin ve Âd'ın taptığı gibi onlar da taşlara tapmaya başladılar."
      ],
      [
       "إِنَّ اللهَ قَدْ مَلَّكَهُمْ هٰذِهِ الْحِجَارَةَ وَلٰكِنَّهُمْ مِنْ جَهْلِهِمْ صَارُوا عُبَّادَ الْحِجَارَةِ.",
       "Allah bu taşları onların hizmetine vermişti; ama cehaletlerinden taşlara tapan kullar oldular."
      ],
      [
       "إِنَّ اللهَ كَرَّمَهُمْ وَرَزَقَهُمْ مِنَ الطَّيِّبَاتِ.",
       "Allah onları şerefli kılmış ve temiz şeylerle rızıklandırmıştı."
      ],
      [
       "وَلٰكِنَّهُمْ أَهَانُوا أَنْفُسَهُمْ وَأَهَانُوا الْإِنْسَانَ.",
       "Ama onlar kendilerini de insanlığı da alçalttılar."
      ],
      [
       "«إِنَّ اللهَ لَا يَظْلِمُ النَّاسَ شَيْئًا وَلٰكِنَّ النَّاسَ أَنْفُسَهُمْ يَظْلِمُونَ».",
       "«Allah insanlara hiçbir şekilde zulmetmez; fakat insanlar kendilerine zulmederler.»"
      ],
      [
       "عَجَبًا! إِنَّ الْحَجَرَ الَّذِي يَنْحِتُونَهُ بِأَيْدِيهِمْ فَلَا يَأْبَى وَلَا يَعْصِيهِمْ.",
       "Ne tuhaf! Kendi elleriyle yonttukları, onlara ne karşı koyan ne de isyan eden taş…"
      ],
      [
       "قَدْ خَضَعُوا لَهُ وَوَقَفُوا سَاجِدِينَ!",
       "…ona boyun eğdiler ve secdeye kapandılar!"
      ],
      [
       "أَيَعْبُدُ الْقَوِيُّ الضَّعِيفَ؟ أَيَسْجُدُ السَّيِّدُ لِعَبْدِهِ؟",
       "Güçlü olan zayıfa mı tapar? Efendi kölesine mi secde eder?"
      ],
      [
       "وَلٰكِنَّهُمْ نَسُوا اللهَ فَنَسُوا أَنْفُسَهُمْ، وَأَبَوْا أَنْ يَعْبُدُوا اللهَ فَأَذَلَّهُمُ اللهُ.",
       "Ama Allah'ı unuttular, böylece kendilerini de unuttular; Allah'a ibadet etmeyi reddettiler, Allah da onları zelil etti."
      ]
     ]
    },
    {
     "n": 4,
     "title_ar": "صَالِحٌ عَلَيْهِ الصَّلَاةُ وَالسَّلَامُ",
     "title_tr": "Sâlih aleyhisselâm",
     "s": [
      [
       "وَأَرَادَ اللهُ أَنْ يُرْسِلَ إِلَيْهِمْ رَسُولًا، كَمَا أَرْسَلَ إِلَى أُمَّةِ نُوحٍ وَأَرْسَلَ إِلَى عَادٍ رَسُولًا.",
       "Nûh ümmetine ve Âd'a elçi gönderdiği gibi Allah onlara da bir elçi göndermek istedi."
      ],
      [
       "إِنَّ اللهَ لَا يَرْضَى لِعِبَادِهِ الْكُفْرَ، إِنَّ اللهَ لَا يُحِبُّ الْفَسَادَ فِي الْأَرْضِ.",
       "Allah kulları için küfre razı olmaz; Allah yeryüzünde bozgunculuğu sevmez."
      ],
      [
       "وَكَانَ فِيهِمْ رَجُلٌ اسْمُهُ صَالِحٌ، وُلِدَ فِي بَيْتٍ شَرِيفٍ وَنَشَأَ عَلَى عَقْلٍ وَصَلَاحٍ.",
       "Aralarında Sâlih adında bir adam vardı; soylu bir ailede doğmuş, akıl ve iyilik üzere yetişmişti."
      ],
      [
       "وَكَانَ وَلَدًا نَجِيبًا جِدًّا، وَكَانَ وَلَدًا رَشِيدًا جِدًّا، يُشِيرُ إِلَيْهِ النَّاسُ.",
       "Çok zeki ve çok olgun bir çocuktu; insanlar onu parmakla gösterirdi."
      ],
      [
       "وَيَقُولُونَ: هٰذَا صَالِحٌ، هٰذَا صَالِحٌ.",
       "Ve derlerdi: İşte Sâlih, işte Sâlih."
      ],
      [
       "وَكَانَ لِلنَّاسِ فِيهِ رَجَاءٌ كَبِيرٌ، يَقُولُونَ: سَيَكُونُ لَهُ شَأْنٌ، سَيَكُونُ لَهُ شَأْنٌ.",
       "İnsanların ondan büyük umutları vardı; «Onun büyük bir geleceği olacak, büyük bir geleceği olacak» derlerdi."
      ],
      [
       "يَرَى النَّاسُ أَنَّ صَالِحًا يَكُونُ مِنْ أَشْرَافِهِمْ، وَيَكُونُ مِنْ أَغْنِيَائِهِمْ.",
       "İnsanlar Sâlih'in ileri gelenlerinden ve zenginlerinden biri olacağını düşünüyordu."
      ],
      [
       "وَيَرَوْنَ أَنَّهُ سَيَكُونُ لَهُ قَصْرٌ جَمِيلٌ وَبُسْتَانٌ كَبِيرٌ.",
       "Onun güzel bir sarayı ve büyük bir bahçesi olacağını düşünüyorlardı."
      ],
      [
       "وَيَرَى أَبُوهُ أَنَّ ابْنَهُ يَكْسِبُ بِعَقْلِهِ مَالًا عَظِيمًا وَيَخْرُجُ فِي النَّاسِ.",
       "Babası da oğlunun aklıyla büyük bir servet kazanacağını ve insanların arasına çıkacağını düşünüyordu."
      ],
      [
       "يَخْرُجُ عَلَى فَرَسٍ وَوَرَاءَهُ الْخَدَمُ فَيُسَلِّمُ عَلَيْهِ النَّاسُ، وَيَقُولُونَ: هٰذَا ابْنُ فُلَانٍ، هٰذَا ابْنُ فُلَانٍ!",
       "Bir atın üstünde, arkasında hizmetçilerle çıkacak, insanlar onu selamlayıp «Bu falancanın oğlu, bu falancanın oğlu!» diyecekti."
      ],
      [
       "وَكَمْ يَكُونُ سُرُورُهُ إِذَا سَمِعَ النَّاسَ يَقُولُونَ إِنَّهُ سَعِيدٌ جِدًّا، إِنَّ ابْنَهُ غَنِيٌّ جِدًّا.",
       "İnsanların «O çok mutlu, oğlu çok zengin» dediğini duyunca ne kadar sevinecekti!"
      ],
      [
       "وَلٰكِنَّ اللهَ أَرَادَ غَيْرَ ذٰلِكَ، إِنَّ اللهَ أَرَادَ أَنْ يُشَرِّفَهُ بِالنُّبُوَّةِ وَيُرْسِلَهُ إِلَى قَوْمِهِ، لِيُخْرِجَهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ.",
       "Ama Allah başka bir şey istedi: onu peygamberlikle şereflendirmek ve kavmini karanlıklardan aydınlığa çıkarması için onlara göndermek."
      ],
      [
       "وَهَلْ فَوْقَ ذٰلِكَ شَرَفٌ؟ وَهَلْ فَوْقَ ذٰلِكَ كَرَامَةٌ؟",
       "Bundan daha büyük bir şeref var mı? Bundan daha büyük bir ikram var mı?"
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "😏",
   "title_ar": "دَعْوَةٌ وَسُخْرِيَةٌ",
   "title_tr": "Davet ve alay",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «دَعْوَةُ صَالِحٍ», «دِعَايَةُ الْأَغْنِيَاءِ», «قَدْ أَخْطَأْنَا ظَنَّنَا!». Sâlih davetine başladı. Sence en çok kim karşı çıktı?",
     "options": [
      [
       "الْأَغْنِيَاءُ",
       "Zenginler"
      ],
      [
       "الْفُقَرَاءُ",
       "Yoksullar"
      ],
      [
       "الْأَطْفَالُ",
       "Çocuklar"
      ]
     ]
    },
    "vocab": [
     [
      "بِأَعْلَى صَوْتِهِ",
      "var gücüyle bağırarak",
      "📣"
     ],
     [
      "الْخُدَّامُ",
      "hizmetçiler",
      "🧑‍🍳"
     ],
     [
      "يَبْعَثُ",
      "diriltir",
      "🌅"
     ],
     [
      "ضَحِكَ",
      "güldü",
      "😂"
     ],
     [
      "يَمِيلُ إِلَى",
      "-e meyleder, yakınlaşır",
      "↗️"
     ],
     [
      "أَخْطَأَ ظَنُّنَا",
      "tahminimiz yanlış çıktı",
      "❌"
     ]
    ]
   },
   "stop": {
    "section": 5,
    "after": 8,
    "prompt_tr": "Hizmetçiler zenginlere Sâlih'in ne dediğini anlattı: «Ben Allah'ın elçisiyim.» Sence zenginler ne yaptı?",
    "options": [
     [
      "ضَحِكُوا وَقَالُوا: مِسْكِينٌ!",
      "Güldüler ve «Zavallı!» dediler"
     ],
     [
      "آمَنُوا بِهِ",
      "Ona iman ettiler"
     ],
     [
      "أَعْطَوْهُ قَصْرًا",
      "Ona bir saray verdiler"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَامَ صَالِحٌ يَدْعُو قَوْمَهُ.",
     "غَضِبَ الْأَغْنِيَاءُ وَقَالُوا: مَنْ هٰذَا؟",
     "ضَحِكُوا وَقَالُوا: مَا عِنْدَهُ قَصْرٌ وَلَا بُسْتَانٌ.",
     "خَافُوا عَلَى رِيَاسَتِهِمْ.",
     "قَالُوا: مَا هٰذَا إِلَّا بَشَرٌ مِثْلُكُمْ.",
     "قَالُوا: قَدْ خَابَ رَجَاؤُنَا فِيكَ."
    ],
    "questions": [
     {
      "q": "مَنْ غَضِبَ مِنْ دَعْوَةِ صَالِحٍ؟",
      "qt": "Sâlih'in davetine kim öfkelendi?",
      "o": [
       "أَغْنِيَاءُ ثَمُودَ",
       "أَبُو صَالِحٍ",
       "الْخُدَّامُ"
      ],
      "ot": [
       "Semûd'un zenginleri",
       "Sâlih'in babası",
       "Hizmetçiler"
      ],
      "a": 0,
      "ev": [
       "5.3"
      ]
     },
     {
      "q": "لِمَاذَا ضَحِكَ الْأَغْنِيَاءُ؟",
      "qt": "Zenginler neden güldü?",
      "o": [
       "لِأَنَّهُ مَا عِنْدَهُ قَصْرٌ وَلَا بُسْتَانٌ",
       "لِأَنَّهُ قَالَ نُكْتَةً",
       "لِأَنَّهُ كَانَ صَغِيرًا جِدًّا"
      ],
      "ot": [
       "Çünkü ne sarayı vardı ne bahçesi",
       "Çünkü bir şaka yaptı",
       "Çünkü çok küçüktü"
      ],
      "a": 0,
      "ev": [
       "5.9"
      ]
     },
     {
      "q": "عَلَى مَاذَا خَافَ الْأَغْنِيَاءُ؟",
      "qt": "Zenginler neyi kaybetmekten korktu?",
      "o": [
       "عَلَى رِيَاسَتِهِمْ",
       "عَلَى أَوْلَادِهِمْ",
       "عَلَى أَصْنَامِهِمْ مِنَ الْكَسْرِ"
      ],
      "ot": [
       "Önderliklerini",
       "Çocuklarını",
       "Putlarının kırılmasını"
      ],
      "a": 0,
      "ev": [
       "6.0"
      ]
     },
     {
      "q": "مَاذَا قَالَ الْأَغْنِيَاءُ عَنْ صَالِحٍ؟",
      "qt": "Zenginler Sâlih hakkında ne dedi?",
      "o": [
       "مَا هٰذَا إِلَّا بَشَرٌ مِثْلُكُمْ",
       "هٰذَا مَلَكٌ مِنَ السَّمَاءِ",
       "هٰذَا أَغْنَى النَّاسِ"
      ],
      "ot": [
       "Bu sizin gibi bir insandan başkası değil",
       "Bu gökten bir melek",
       "Bu insanların en zengini"
      ],
      "a": 0,
      "ev": [
       "6.1"
      ]
     },
     {
      "q": "مَاذَا كَانَ النَّاسُ يَقُولُونَ إِذَا مَرَّ صَالِحٌ؟",
      "qt": "Sâlih geçtiğinde insanlar ne diyordu?",
      "o": [
       "رَحِمَ اللهُ أَبَا صَالِحٍ لَقَدْ ضَاعَ ابْنُهُ",
       "هٰذَا ابْنُ فُلَانٍ الْغَنِيُّ",
       "مَرْحَبًا بِرَسُولِ اللهِ"
      ],
      "ot": [
       "Allah Sâlih'in babasına rahmet etsin, oğlu heba oldu",
       "Bu zengin falancanın oğlu",
       "Allah'ın elçisine hoş geldin"
      ],
      "a": 0,
      "ev": [
       "7.7"
      ]
     }
    ],
    "focus": {
     "title": "كَانَ'in çekimi: كُنْتَ، كُنَّا، كَانُوا",
     "explain": "<b>كَانَ</b> şahıslara göre çekimlenir ve ortası kısalır: <span class='ar-inline'>كُنْتُ</span> (ben idim), <span class='ar-inline'>كُنْتَ</span> (sen idin), <span class='ar-inline'>كُنَّا</span> (biz idik), <span class='ar-inline'>كَانُوا</span> (onlar idi). Haberi mansub olur: <span class='ar-inline'>كُنْتَ وَلَدًا نَجِيبًا</span>. Muzari ile «-ıyordu»: <span class='ar-inline'>كُنَّا نَظُنُّ</span> (sanıyorduk). Olumsuz cezm: <span class='ar-inline'>لَمْ تَكُنْ شَيْئًا</span>.",
     "examples": [
      "يَا صَالِحُ كُنْتَ وَلَدًا نَجِيبًا جِدًّا",
      "وَكُنَّا نَظُنُّ أَنَّكَ سَتَكُونُ مِنْ كِبَارِ النَّاسِ",
      "وَالَّذِينَ كَانُوا فِي سِنِّكَ",
      "فَلَمْ تَكُنْ شَيْئًا"
     ],
     "items": [
      {
       "q": "يَا صَالِحُ ____ وَلَدًا نَجِيبًا جِدًّا.",
       "o": [
        "كُنْتَ",
        "كَانُوا",
        "كُنَّا"
       ],
       "a": 0
      },
      {
       "q": "وَ____ نَظُنُّ أَنَّكَ سَتَكُونُ مِنْ كِبَارِ النَّاسِ.",
       "o": [
        "كُنَّا",
        "كُنْتَ",
        "كَانَ"
       ],
       "a": 0
      },
      {
       "q": "وَالَّذِينَ ____ فِي سِنِّكَ أَصْبَحُوا رِجَالًا كِبَارًا.",
       "o": [
        "كَانُوا",
        "كَانَ",
        "كُنْتُ"
       ],
       "a": 0
      },
      {
       "q": "كُنْتَ وَلَدًا ____.",
       "o": [
        "رَشِيدًا",
        "رَشِيدٌ",
        "رَشِيدٍ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ صَالِحٌ: يَا قَوْمِ {اعْبُدُوا} اللهَ. فَضَحِكَ {الْأَغْنِيَاءُ} وَقَالُوا: مِسْكِينٌ! وَخَافُوا عَلَى {رِيَاسَتِهِمْ} وَقَالُوا: مَا هٰذَا إِلَّا {بَشَرٌ} مِثْلُكُمْ. وَقَالُوا لِصَالِحٍ: قَدْ خَابَ {رَجَاؤُنَا} فِيكَ."
    },
    "think": {
     "q": "قَالَ الْقَوْمُ لِصَالِحٍ: «أَخَذْتَ سَبِيلَ الْفَقْرِ». هَلْ ضَاعَ صَالِحٌ حَقًّا؟",
     "qt": "Kavim Sâlih'e «Yoksulluk yolunu tuttun» dedi. Sâlih gerçekten heba mı oldu?",
     "model": "Kavim başarıyı yalnızca mal ve mevkiyle ölçtüğü için Sâlih'i «heba olmuş» gördü. Oysa Sâlih Allah'ın elçisi olmuştu; bu, onların hayal ettiği her saraydan daha büyük bir şerefti. Kıssa, insanların ölçüsüyle Allah'ın ölçüsünün ne kadar farklı olabileceğini gösteriyor; sonunda heba olan saraylar oldu, Sâlih değil."
    },
    "retell": [
     "دَعْوَةُ صَالِحٍ",
     "الْأَغْنِيَاءُ",
     "ضَحِكُوا",
     "رِيَاسَةٌ",
     "بَشَرٌ مِثْلُكُمْ",
     "خَابَ رَجَاؤُنَا"
    ],
    "quran": [
     {
      "ar": "وَإِلَى ثَمُودَ أَخَاهُمْ صَالِحًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ",
      "ref": "A'râf 7:73",
      "tr": "Semûd'a da kardeşleri Sâlih'i (gönderdik). Dedi ki: Ey kavmim! Allah'a ibadet edin; sizin O'ndan başka ilahınız yoktur.",
      "inText": "«يَا قَوْمِ اعْبُدُوا اللهَ …»"
     },
     {
      "ar": "يَأْكُلُ مِمَّا تَأْكُلُونَ مِنْهُ وَيَشْرَبُ مِمَّا تَشْرَبُونَ ۝ وَلَئِنْ أَطَعْتُمْ بَشَرًا مِثْلَكُمْ إِنَّكُمْ إِذًا لَخَاسِرُونَ",
      "ref": "Mü'minûn 23:33–34",
      "tr": "Sizin yediğinizden yiyor, içtiğinizden içiyor. Eğer sizin gibi bir insana itaat ederseniz, o zaman gerçekten kaybedenlerden olursunuz.",
      "inText": "«مَا هٰذَا إِلَّا بَشَرٌ مِثْلُكُمْ …»"
     },
     {
      "ar": "قَالُوا يَا صَالِحُ قَدْ كُنْتَ فِينَا مَرْجُوًّا قَبْلَ هٰذَا ۖ أَتَنْهَانَا أَنْ نَعْبُدَ مَا يَعْبُدُ آبَاؤُنَا",
      "ref": "Hûd 11:62",
      "tr": "Dediler ki: Ey Sâlih! Sen bundan önce aramızda kendisinden umut beklenen biriydin. Babalarımızın taptıklarına tapmaktan bizi alıkoyuyor musun?",
      "inText": "وَكُنَّا نَظُنُّ أَنَّكَ سَتَكُونُ مِنْ كِبَارِ النَّاسِ"
     }
    ]
   },
   "sections": [
    {
     "n": 5,
     "title_ar": "دَعْوَةُ صَالِحٍ",
     "title_tr": "Sâlih'in daveti",
     "s": [
      [
       "وَقَامَ صَالِحٌ فِي قَوْمِهِ يَقُولُ بِأَعْلَى صَوْتِهِ:",
       "Sâlih kavminin arasında kalkıp var gücüyle seslendi:"
      ],
      [
       "«يَا قَوْمِ اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ».",
       "«Ey kavmim! Allah'a ibadet edin; sizin O'ndan başka hiçbir ilahınız yoktur.»"
      ],
      [
       "وَكَانَ الْأَغْنِيَاءُ فِي شُغْلٍ مِنَ الْأَكْلِ وَالشُّرْبِ، وَكَانُوا فِي لَهْوٍ وَلَعِبٍ.",
       "Zenginler yemek ve içmekle meşguldü; eğlence ve oyun içindeydiler."
      ],
      [
       "وَكَانُوا يَعْبُدُونَ الْأَصْنَامَ وَلَا يَرَوْنَ إِلٰهًا غَيْرَهَا، فَمَا أَعْجَبَتْهُمْ دَعْوَةُ صَالِحٍ، فَغَضِبَ أَغْنِيَاءُ ثَمُودَ وَقَالُوا: مَنْ هٰذَا؟",
       "Putlara tapıyor, onlardan başka ilah tanımıyorlardı. Sâlih'in daveti hoşlarına gitmedi; Semûd'un zenginleri öfkelenip «Bu da kim?» dediler."
      ],
      [
       "قَالَ الْخُدَّامُ: هٰذَا صَالِحٌ.",
       "Hizmetçiler dedi: Bu Sâlih."
      ],
      [
       "قَالُوا: مَاذَا يَقُولُ؟",
       "Dediler: Ne diyor?"
      ],
      [
       "قَالُوا: يَقُولُ: اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ،",
       "Dediler: «Allah'a ibadet edin; sizin O'ndan başka ilahınız yoktur» diyor."
      ],
      [
       "وَيَقُولُ: إِنَّ اللهَ سَيَبْعَثُكُمْ بَعْدَ مَوْتِكُمْ وَيَجْزِيكُمْ.",
       "«Allah sizi öldükten sonra diriltecek ve karşılığınızı verecek» diyor."
      ],
      [
       "وَيَقُولُ: أَنَا رَسُولُ اللهِ أَرْسَلَنِي إِلَى قَوْمِي.",
       "«Ben Allah'ın elçisiyim, beni kavmime gönderdi» diyor."
      ],
      [
       "فَضَحِكَ الْأَغْنِيَاءُ وَقَالُوا: مِسْكِينٌ! هَلْ يَكُونُ هٰذَا رَسُولًا؟ مَا عِنْدَهُ قَصْرٌ وَلَا بُسْتَانٌ، وَمَا لَهُ زَرْعٌ وَلَا نَخِيلٌ! فَكَيْفَ يَكُونُ هٰذَا رَسُولًا؟",
       "Zenginler güldü ve dedi: Zavallı! Bu mu elçi olacak? Ne sarayı var ne bahçesi; ne ekini var ne hurmalığı! Bu nasıl elçi olur?"
      ]
     ]
    },
    {
     "n": 6,
     "title_ar": "دِعَايَةُ الْأَغْنِيَاءِ",
     "title_tr": "Zenginlerin propagandası",
     "s": [
      [
       "وَرَأَى الْأَغْنِيَاءُ أَنَّ بَعْضَ النَّاسِ يَمِيلُونَ إِلَى صَالِحٍ فَخَافُوا عَلَى رِيَاسَتِهِمْ وَقَالُوا:",
       "Zenginler bazı insanların Sâlih'e meylettiğini görünce önderliklerini kaybetmekten korktular ve dediler:"
      ],
      [
       "«مَا هٰذَا إِلَّا بَشَرٌ مِثْلُكُمْ، يَأْكُلُ مِمَّا تَأْكُلُونَ مِنْهُ وَيَشْرَبُ مِمَّا تَشْرَبُونَ».",
       "«Bu, sizin gibi bir insandan başkası değil; sizin yediğinizden yiyor, içtiğinizden içiyor.»"
      ],
      [
       "«وَلَئِنْ أَطَعْتُمْ بَشَرًا مِثْلَكُمْ إِنَّكُمْ إِذًا لَخَاسِرُونَ».",
       "«Eğer sizin gibi bir insana itaat ederseniz, o zaman gerçekten kaybedenlerden olursunuz.»"
      ],
      [
       "«أَيَعِدُكُمْ أَنَّكُمْ إِذَا مِتُّمْ وَكُنْتُمْ تُرَابًا وَعِظَامًا أَنَّكُمْ مُخْرَجُونَ».",
       "«Öldüğünüz, toprak ve kemik olduğunuz zaman (diri olarak) çıkarılacağınızı mı vaat ediyor size?»"
      ],
      [
       "«هَيْهَاتَ هَيْهَاتَ لِمَا تُوعَدُونَ».",
       "«Size vaat edilen ne kadar da uzak, ne kadar da uzak!»"
      ],
      [
       "«إِنْ هِيَ إِلَّا حَيَاتُنَا الدُّنْيَا نَمُوتُ وَنَحْيَا وَمَا نَحْنُ بِمَبْعُوثِينَ».",
       "«Hayat, ancak bu dünya hayatımızdır; ölürüz ve yaşarız, biz diriltilecek değiliz.»"
      ],
      [
       "«إِنْ هُوَ إِلَّا رَجُلٌ افْتَرَى عَلَى اللهِ كَذِبًا وَمَا نَحْنُ لَهُ بِمُؤْمِنِينَ».",
       "«O, Allah'a karşı yalan uyduran bir adamdan başkası değil; biz ona inanacak değiliz.»"
      ]
     ]
    },
    {
     "n": 7,
     "title_ar": "قَدْ أَخْطَأْنَا ظَنَّنَا!",
     "title_tr": "Sana dair umudumuz boşa çıktı!",
     "s": [
      [
       "وَكَفَرَ النَّاسُ بِصَالِحٍ وَلَمْ يُؤْمِنُوا بِهِ.",
       "İnsanlar Sâlih'i inkâr etti ve ona inanmadı."
      ],
      [
       "وَلَمَّا وَعَظَهُمْ صَالِحٌ وَمَنَعَهُمْ مِنْ عِبَادَةِ الْأَصْنَامِ قَالُوا:",
       "Sâlih onlara öğüt verip putlara tapmaktan alıkoymaya çalışınca dediler:"
      ],
      [
       "يَا صَالِحُ كُنْتَ وَلَدًا نَجِيبًا جِدًّا، وَكُنْتَ وَلَدًا رَشِيدًا جِدًّا وَكُنَّا نَظُنُّ أَنَّكَ سَتَكُونُ مِنْ كِبَارِ النَّاسِ وَأَشْرَافِهِمْ.",
       "Ey Sâlih! Sen çok zeki, çok olgun bir çocuktun; senin insanların büyüklerinden ve ileri gelenlerinden olacağını sanıyorduk."
      ],
      [
       "وَكُنَّا نَظُنُّ أَنَّكَ سَتَكُونُ مِثْلَ فُلَانٍ وَفُلَانٍ فَلَمْ تَكُنْ شَيْئًا، وَالَّذِينَ كَانُوا فِي سِنِّكَ، وَكَانُوا دُونَكَ فِي الْعَقْلِ، أَصْبَحُوا رِجَالًا كِبَارًا.",
       "Falan ve filan gibi olacağını sanıyorduk ama hiçbir şey olamadın. Senin yaşında olanlar, akılca senden aşağı olanlar büyük adamlar oldular."
      ],
      [
       "وَأَنْتَ يَا صَالِحُ أَخَذْتَ سَبِيلَ الْفَقْرِ، قَدْ أَخْطَأَ ظَنُّنَا فِيكَ، قَدْ خَابَ رَجَاؤُنَا فِيكَ.",
       "Sen ise ey Sâlih, yoksulluk yolunu tuttun. Senin hakkındaki tahminimiz yanlış çıktı, sana dair umudumuz boşa gitti."
      ],
      [
       "مِسْكِينٌ أَبُوكَ مَا نَالَ خَيْرًا مِنْكَ.",
       "Zavallı baban, senden hiçbir hayır görmedi."
      ],
      [
       "مِسْكِينَةٌ أُمُّكَ، لَقَدْ ضَاعَ تَعَبُهَا فِيكَ!",
       "Zavallı annen, senin için çektiği emek boşa gitti!"
      ],
      [
       "سَمِعَ صَالِحٌ كُلَّ هٰذَا وَتَأَسَّفَ عَلَى قَوْمِهِ، وَإِذَا مَرَّ صَالِحٌ بِقَوْمٍ قَالُوا: رَحِمَ اللهُ أَبَا صَالِحٍ لَقَدْ ضَاعَ ابْنُهُ.",
       "Sâlih bütün bunları duydu ve kavmine üzüldü. Sâlih bir topluluğun yanından geçtiğinde «Allah Sâlih'in babasına rahmet etsin, oğlu heba oldu» derlerdi."
      ]
     ]
    }
   ]
  },
  {
   "id": 4,
   "emoji": "💬",
   "title_ar": "نَصِيحَةُ صَالِحٍ",
   "title_tr": "Sâlih'in öğüdü",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «نَصِيحَةُ صَالِحٍ», «مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ». Semûd sonsuza dek saraylarında yaşayacağını sanıyordu. Sence Sâlih onlara neyi hatırlattı?",
     "options": [
      [
       "أَنَّ آبَاءَهُمْ مَاتُوا مَعَ قُصُورِهِمْ",
       "Babalarının da sarayları varken öldüğünü"
      ],
      [
       "أَنَّ قُصُورَهُمْ صَغِيرَةٌ",
       "Saraylarının küçük olduğunu"
      ],
      [
       "أَنَّ الْمَاءَ قَلِيلٌ",
       "Suyun az olduğunu"
      ]
     ]
    },
    "vocab": [
     [
      "لَمْ يَزَلْ",
      "devam etti, hep …",
      "🔄"
     ],
     [
      "إِلَى الْأَبَدِ",
      "sonsuza dek",
      "♾️"
     ],
     [
      "زُرُوعٌ وَنَخِيلٌ",
      "ekinler ve hurmalıklar",
      "🌴"
     ],
     [
      "مَلَكُ الْمَوْتِ",
      "ölüm meleği",
      "⏳"
     ],
     [
      "أَجْرٌ",
      "ücret",
      "💰"
     ],
     [
      "آيَةٌ",
      "mucize, ayet",
      "✨"
     ]
    ]
   },
   "stop": {
    "section": 9,
    "after": 6,
    "prompt_tr": "Kavim Sâlih'e cevap bulamadı. Sence ondan ne istediler?",
    "options": [
     [
      "أَنْ يَأْتِيَ بِآيَةٍ",
      "Bir mucize getirmesini"
     ],
     [
      "أَنْ يَسْكُتَ",
      "Susmasını"
     ],
     [
      "أَنْ يَبْنِيَ لَهُمْ قَصْرًا",
      "Onlara bir saray yapmasını"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "نَصَحَ صَالِحٌ قَوْمَهُ بِحِكْمَةٍ وَرِفْقٍ.",
     "سَأَلَهُمْ: أَتَظُنُّونَ أَنَّكُمْ هُنَا إِلَى الْأَبَدِ؟",
     "ذَكَّرَهُمْ بِآبَائِهِمُ الَّذِينَ مَاتُوا.",
     "قَالَ: مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ.",
     "عَجَزَ الْقَوْمُ عَنِ الْجَوَابِ.",
     "طَلَبُوا مِنْهُ آيَةً."
    ],
    "questions": [
     {
      "q": "كَيْفَ كَانَ صَالِحٌ يَدْعُو قَوْمَهُ؟",
      "qt": "Sâlih kavmini nasıl davet ediyordu?",
      "o": [
       "بِحِكْمَةٍ وَرِفْقٍ",
       "بِغَضَبٍ وَشِدَّةٍ",
       "بِالْمَالِ وَالْهَدَايَا"
      ],
      "ot": [
       "Hikmetle ve yumuşaklıkla",
       "Öfkeyle ve sertlikle",
       "Mal ve hediyelerle"
      ],
      "a": 0,
      "ev": [
       "8.0"
      ]
     },
     {
      "q": "لِمَاذَا ذَكَرَ صَالِحٌ آبَاءَهُمْ؟",
      "qt": "Sâlih neden babalarından söz etti?",
      "o": [
       "لِأَنَّهُمْ مَاتُوا وَلَمْ تَنْفَعْهُمْ قُصُورُهُمْ",
       "لِأَنَّهُمْ كَانُوا مُؤْمِنِينَ",
       "لِأَنَّهُمْ كَانُوا فُقَرَاءَ"
      ],
      "ot": [
       "Çünkü öldüler ve sarayları onlara fayda vermedi",
       "Çünkü onlar mümindi",
       "Çünkü onlar yoksuldu"
      ],
      "a": 0,
      "ev": [
       "8.7",
       "8.10"
      ]
     },
     {
      "q": "عَنْ مَاذَا يَسْأَلُهُمُ اللهُ؟",
      "qt": "Allah onlara neyi soracak?",
      "o": [
       "عَنْ هٰذِهِ النِّعَمِ",
       "عَنْ أَسْمَاءِ آبَائِهِمْ",
       "عَنْ عَدَدِ قُصُورِهِمْ"
      ],
      "ot": [
       "Bu nimetleri",
       "Babalarının adlarını",
       "Saraylarının sayısını"
      ],
      "a": 0,
      "ev": [
       "8.12"
      ]
     },
     {
      "q": "هَلْ طَلَبَ صَالِحٌ مِنْ قَوْمِهِ أَجْرًا؟",
      "qt": "Sâlih kavminden ücret istedi mi?",
      "o": [
       "لَا، أَجْرُهُ عَلَى رَبِّ الْعَالَمِينَ",
       "نَعَمْ، مَالًا كَثِيرًا",
       "نَعَمْ، بُسْتَانًا"
      ],
      "ot": [
       "Hayır, ücreti âlemlerin Rabbine aittir",
       "Evet, çok mal",
       "Evet, bir bahçe"
      ],
      "a": 0,
      "ev": [
       "9.3"
      ]
     },
     {
      "q": "مَاذَا طَلَبَ الْقَوْمُ مِنْ صَالِحٍ؟",
      "qt": "Kavim Sâlih'ten ne istedi?",
      "o": [
       "أَنْ يَأْتِيَ بِآيَةٍ",
       "أَنْ يَتْرُكَ الْبَلَدَ",
       "أَنْ يَعْبُدَ الْأَصْنَامَ"
      ],
      "ot": [
       "Bir mucize getirmesini",
       "Memleketi terk etmesini",
       "Putlara tapmasını"
      ],
      "a": 0,
      "ev": [
       "9.7"
      ]
     }
    ],
    "focus": {
     "title": "«Hâlâ / sürekli»: لَا يَزَالُ، لَمْ يَزَلْ",
     "explain": "<b>زَالَ</b> tek başına «sona erdi» demektir; olumsuzlanınca «hâlâ, durmadan» anlamı çıkar: <span class='ar-inline'>لَا تَزَالُونَ فِي هٰذِهِ الْبَسَاتِينِ</span> (bu bahçelerde kalmaya devam edersiniz), <span class='ar-inline'>لَمْ يَزَلْ صَالِحٌ يَنْصَحُ</span> (Sâlih öğüt vermeye devam etti). Arkasından muzari fiil de gelebilir: <span class='ar-inline'>لَا تَزَالُونَ تَأْكُلُونَ</span>. Hûd kıssasındaki <span class='ar-inline'>مَا زَالَ هُودٌ يَنْصَحُ</span> da aynı anlamdadır.",
     "examples": [
      "وَلَمْ يَزَلْ صَالِحٌ يَنْصَحُ لِقَوْمِهِ",
      "أَتَظُنُّونَ أَنَّكُمْ لَا تَزَالُونَ فِي هٰذِهِ الْبَسَاتِينِ",
      "وَأَنَّكُمْ لَا تَزَالُونَ تَأْكُلُونَ مِنْ هٰذِهِ الزُّرُوعِ"
     ],
     "items": [
      {
       "q": "وَ____ صَالِحٌ يَنْصَحُ لِقَوْمِهِ.",
       "o": [
        "لَمْ يَزَلْ",
        "زَالَ",
        "لَا زَالُوا"
       ],
       "a": 0
      },
      {
       "q": "أَتَظُنُّونَ أَنَّكُمْ ____ فِي هٰذِهِ الْبَسَاتِينِ؟",
       "o": [
        "لَا تَزَالُونَ",
        "لَا يَزَالُ",
        "لَمْ يَزَلْ"
       ],
       "a": 0
      },
      {
       "q": "وَأَنَّكُمْ لَا تَزَالُونَ ____ مِنْ هٰذِهِ الزُّرُوعِ.",
       "o": [
        "تَأْكُلُونَ",
        "أَكَلْتُمْ",
        "كُلُوا"
       ],
       "a": 0
      },
      {
       "q": "«لَمْ يَزَلْ يَنْصَحُ» = …",
       "o": [
        "öğüt vermeye devam etti",
        "öğüt vermeyi bıraktı",
        "hiç öğüt vermedi"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ صَالِحٌ: أَتَظُنُّونَ أَنَّكُمْ هُنَا إِلَى {الْأَبَدِ}؟ فَلِمَاذَا مَاتَ {آبَاؤُكُمْ}؟ وَقَالَ: مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ {أَجْرٍ}. فَعَجَزَ {الْقَوْمُ} وَقَالُوا: فَأْتِ بِ{آيَةٍ}."
    },
    "think": {
     "q": "لِمَاذَا طَلَبَ الْقَوْمُ آيَةً بَعْدَ أَنْ عَجَزُوا عَنِ الْجَوَابِ؟",
     "qt": "Kavim cevap veremeyince neden mucize istedi?",
     "model": "Sâlih'in sözlerine akılla karşılık veremediler; ama inanmak da istemiyorlardı. Mucize istemek hem konuyu değiştirmenin hem de Sâlih'i zor durumda bırakmanın bir yoluydu: imkânsız bir şey isterlerse onun âciz kalacağını düşündüler. Sonraki ünite, bu isteğin nasıl karşılık bulduğunu anlatıyor."
    },
    "retell": [
     "نَصِيحَةٌ",
     "إِلَى الْأَبَدِ",
     "آبَاؤُكُمْ",
     "مَلَكُ الْمَوْتِ",
     "أَجْرٌ",
     "آيَةٌ"
    ],
    "quran": [
     {
      "ar": "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِيَ إِلَّا عَلَى رَبِّ الْعَالَمِينَ",
      "ref": "Şuarâ 26:145",
      "tr": "Buna karşılık sizden hiçbir ücret istemiyorum; benim ücretim ancak âlemlerin Rabbine aittir.",
      "inText": "«وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ …»"
     },
     {
      "ar": "فَاتَّقُوا اللهَ وَأَطِيعُونِ ۝ وَلَا تُطِيعُوا أَمْرَ الْمُسْرِفِينَ ۝ الَّذِينَ يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ",
      "ref": "Şuarâ 26:150–152",
      "tr": "Allah'tan sakının ve bana itaat edin. Haddi aşanların emrine uymayın; onlar yeryüzünde bozgunculuk yapar, düzeltmezler.",
      "inText": "وَلِمَاذَا تُطِيعُونَ الَّذِينَ … يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ"
     },
     {
      "ar": "قَالُوا إِنَّمَا أَنْتَ مِنَ الْمُسَحَّرِينَ ۝ مَا أَنْتَ إِلَّا بَشَرٌ مِثْلُنَا فَأْتِ بِآيَةٍ إِنْ كُنْتَ مِنَ الصَّادِقِينَ",
      "ref": "Şuarâ 26:153–154",
      "tr": "Dediler ki: Sen ancak büyülenmişlerdensin. Sen de bizim gibi bir insansın; doğru söyleyenlerdensen bir mucize getir.",
      "inText": "«إِنَّمَا أَنْتَ مِنَ الْمُسَحَّرِينَ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 8,
     "title_ar": "نَصِيحَةُ صَالِحٍ",
     "title_tr": "Sâlih'in öğüdü",
     "s": [
      [
       "وَلَمْ يَزَلْ صَالِحٌ يَنْصَحُ لِقَوْمِهِ وَيَدْعُوهُمْ إِلَى اللهِ بِحِكْمَةٍ وَرِفْقٍ.",
       "Sâlih kavmine öğüt vermeye ve onları hikmetle, yumuşaklıkla Allah'a çağırmaya devam etti."
      ],
      [
       "يَقُولُ: يَا إِخْوَانِي! أَتَظُنُّونَ أَنَّكُمْ هُنَا إِلَى الْأَبَدِ؟",
       "Diyordu ki: Kardeşlerim! Burada sonsuza dek kalacağınızı mı sanıyorsunuz?"
      ],
      [
       "أَتَظُنُّونَ أَنَّكُمْ تَسْكُنُونَ فِي هٰذِهِ الْقُصُورِ دَائِمًا؟",
       "Bu saraylarda hep oturacağınızı mı sanıyorsunuz?"
      ],
      [
       "أَتَظُنُّونَ أَنَّكُمْ لَا تَزَالُونَ فِي هٰذِهِ الْبَسَاتِينِ وَالْأَنْهَارِ؟",
       "Bu bahçelerde ve ırmakların başında hep kalacağınızı mı sanıyorsunuz?"
      ],
      [
       "وَأَنَّكُمْ لَا تَزَالُونَ تَأْكُلُونَ مِنْ هٰذِهِ الزُّرُوعِ وَالْأَشْجَارِ؟",
       "Bu ekinlerden ve ağaçlardan hep yemeye devam edeceğinizi mi?"
      ],
      [
       "وَأَنَّكُمْ لَا تَزَالُونَ تَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا؟",
       "Dağlardan hep evler yontmaya devam edeceğinizi mi?"
      ],
      [
       "أَبَدًا! أَبَدًا! إِنَّ ذٰلِكَ لَا يَكُونُ! إِنَّ ذٰلِكَ لَا يَكُونُ!",
       "Asla! Asla! Bu olmaz! Bu olmaz!"
      ],
      [
       "فَلِمَاذَا مَاتَ آبَاؤُكُمْ يَا إِخْوَانِي!",
       "Öyleyse babalarınız neden öldü, kardeşlerim!"
      ],
      [
       "كَانَتْ لَهُمْ قُصُورٌ، وَكَانَتْ لَهُمْ كَذٰلِكَ بَسَاتِينُ وَعُيُونٌ.",
       "Onların da sarayları vardı; bahçeleri ve pınarları da vardı."
      ],
      [
       "وَكَانَتْ لَهُمْ زُرُوعٌ وَنَخِيلٌ، وَكَانُوا يَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا يَسْكُنُونَ فِيهَا.",
       "Ekinleri ve hurmalıkları vardı; dağlardan oturacakları evler yontarlardı."
      ],
      [
       "وَلٰكِنَّ كُلَّ ذٰلِكَ لَمْ يَنْفَعْهُمْ! وَلٰكِنَّ كُلَّ ذٰلِكَ لَمْ يَمْنَعْهُمْ!",
       "Ama bütün bunlar onlara fayda vermedi! Bütün bunlar onları (ölümden) koruyamadı!"
      ],
      [
       "وَوَصَلَ إِلَيْهِمْ مَلَكُ الْمَوْتِ وَوَجَدَ إِلَيْهِمْ سَبِيلًا!",
       "Ölüm meleği onlara ulaştı ve onlara bir yol buldu!"
      ],
      [
       "كَذٰلِكَ تَمُوتُونَ أَنْتُمْ أَيْضًا وَيَسْأَلُكُمُ اللهُ عَنْ هٰذِهِ النِّعَمِ.",
       "Siz de böyle öleceksiniz ve Allah size bu nimetleri soracak."
      ]
     ]
    },
    {
     "n": 9,
     "title_ar": "مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ",
     "title_tr": "Sizden bir ücret istemiyorum",
     "s": [
      [
       "وَيَا إِخْوَانِي لِمَاذَا تَفِرُّونَ مِنِّي؟ مَاذَا تَخَافُونَ؟",
       "Kardeşlerim! Neden benden kaçıyorsunuz? Neden korkuyorsunuz?"
      ],
      [
       "أَنَا لَا أَنْقُصُ مِنْ مَالِكُمْ شَيْئًا، أَنَا لَا أَطْلُبُ مِنْكُمْ شَيْئًا.",
       "Ben malınızdan hiçbir şey eksiltmiyorum; sizden hiçbir şey istemiyorum."
      ],
      [
       "أَنَا أَنْصَحُ لَكُمْ وَأُبَلِّغُكُمْ رِسَالَاتِ رَبِّي.",
       "Ben size öğüt veriyor ve Rabbimin mesajlarını ulaştırıyorum."
      ],
      [
       "«وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ إِنْ أَجْرِيَ إِلَّا عَلَى رَبِّ الْعَالَمِينَ».",
       "«Buna karşılık sizden hiçbir ücret istemiyorum; benim ücretim ancak âlemlerin Rabbine aittir.»"
      ],
      [
       "وَيَا إِخْوَانِي لِمَاذَا لَا تُطِيعُونِي وَأَنَا لَكُمْ نَاصِحٌ أَمِينٌ؟",
       "Kardeşlerim! Ben sizin için güvenilir bir öğütçüyken neden bana itaat etmiyorsunuz?"
      ],
      [
       "وَلِمَاذَا تُطِيعُونَ الَّذِينَ يَظْلِمُونَ النَّاسَ وَيَأْكُلُونَ أَمْوَالَهُمْ؟ وَالَّذِينَ يَفْجُرُونَ وَيُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ!",
       "İnsanlara zulmeden ve mallarını yiyenlere, günah işleyip yeryüzünde bozgunculuk yapan ve düzeltmeyenlere neden itaat ediyorsunuz!"
      ],
      [
       "وَعَجَزَ الْقَوْمُ وَلَمْ يَجِدُوا عَلَى ذٰلِكَ جَوَابًا.",
       "Kavim âciz kaldı ve buna bir cevap bulamadı."
      ],
      [
       "فَقَالُوا: «إِنَّمَا أَنْتَ مِنَ الْمُسَحَّرِينَ. مَا أَنْتَ إِلَّا بَشَرٌ مِثْلُنَا فَأْتِ بِآيَةٍ إِنْ كُنْتَ مِنَ الصَّادِقِينَ».",
       "Dediler ki: «Sen ancak büyülenmişlerdensin. Sen de bizim gibi bir insansın; doğru söyleyenlerdensen bir mucize getir.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 5,
   "emoji": "🐪",
   "title_ar": "نَاقَةُ اللهِ",
   "title_tr": "Allah'ın devesi",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «نَاقَةُ اللهِ», «النَّوْبَةُ». Kavim bir kayayı gösterip «Bu dağdan gebe bir deve çıkar!» dedi. Sence ne oldu?",
     "options": [
      [
       "خَرَجَتْ مِنَ الْجَبَلِ نَاقَةٌ",
       "Dağdan bir deve çıktı"
      ],
      [
       "لَمْ يَحْدُثْ شَيْءٌ",
       "Hiçbir şey olmadı"
      ],
      [
       "سَقَطَ الْجَبَلُ",
       "Dağ çöktü"
      ]
     ]
    },
    "vocab": [
     [
      "نَاقَةٌ",
      "dişi deve",
      "🐪"
     ],
     [
      "صَخْرَةٌ",
      "kaya",
      "🪨"
     ],
     [
      "حَامِلٌ",
      "gebe",
      "🤰"
     ],
     [
      "تَلِدُ / وَلَدَتْ",
      "doğurur / doğurdu",
      "🍼"
     ],
     [
      "الْمَاشِيَةُ",
      "sürü, hayvanlar",
      "🐑"
     ],
     [
      "النَّوْبَةُ",
      "sıra, nöbet",
      "🔁"
     ]
    ]
   },
   "stop": {
    "section": 10,
    "after": 5,
    "prompt_tr": "Kavim Sâlih'in âciz kalacağından emindi. Ama Sâlih Allah'ın her şeye gücünün yettiğini biliyordu. Sence ne oldu?",
    "options": [
     [
      "دَعَا اللهَ فَخَرَجَتْ نَاقَةٌ مِنَ الْجَبَلِ",
      "Allah'a dua etti ve dağdan bir deve çıktı"
     ],
     [
      "تَرَكَ قَوْمَهُ وَذَهَبَ",
      "Kavmini bırakıp gitti"
     ],
     [
      "صَنَعَ نَاقَةً مِنَ الْحَجَرِ",
      "Taştan bir deve heykeli yaptı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَ صَالِحٌ: أَيَّ آيَةٍ تُرِيدُونَ؟",
     "طَلَبُوا نَاقَةً حَامِلًا مِنَ الْجَبَلِ.",
     "دَعَا صَالِحٌ رَبَّهُ.",
     "خَرَجَتْ نَاقَةٌ مِنَ الْجَبَلِ وَوَلَدَتْ.",
     "خَافَتِ الْمَاشِيَةُ مِنَ النَّاقَةِ.",
     "جَعَلَ صَالِحٌ الْمَاءَ نَوْبَةً."
    ],
    "questions": [
     {
      "q": "أَيَّ آيَةٍ طَلَبَ الْقَوْمُ؟",
      "qt": "Kavim nasıl bir mucize istedi?",
      "o": [
       "نَاقَةً حَامِلًا تَخْرُجُ مِنَ الْجَبَلِ",
       "مَطَرًا مِنَ السَّمَاءِ",
       "قَصْرًا مِنْ ذَهَبٍ"
      ],
      "ot": [
       "Dağdan çıkacak gebe bir deve",
       "Gökten yağmur",
       "Altından bir saray"
      ],
      "a": 0,
      "ev": [
       "10.1"
      ]
     },
     {
      "q": "مَاذَا ظَنَّ الْقَوْمُ؟",
      "qt": "Kavim ne sandı?",
      "o": [
       "أَنَّ صَالِحًا سَيَعْجَزُ",
       "أَنَّ النَّاقَةَ سَتَخْرُجُ",
       "أَنَّ صَالِحًا سَيَهْرُبُ"
      ],
      "ot": [
       "Sâlih'in âciz kalacağını",
       "Devenin çıkacağını",
       "Sâlih'in kaçacağını"
      ],
      "a": 0,
      "ev": [
       "10.4"
      ]
     },
     {
      "q": "كَمْ وَاحِدًا آمَنَ بَعْدَ خُرُوجِ النَّاقَةِ؟",
      "qt": "Devenin çıkmasından sonra kaç kişi iman etti?",
      "o": [
       "وَاحِدٌ فَقَطْ",
       "كُلُّ النَّاسِ",
       "لَا أَحَدَ"
      ],
      "ot": [
       "Yalnızca bir kişi",
       "Bütün insanlar",
       "Hiç kimse"
      ],
      "a": 0,
      "ev": [
       "10.7"
      ]
     },
     {
      "q": "مَاذَا قَالَ صَالِحٌ عَنِ النَّاقَةِ؟",
      "qt": "Sâlih deve hakkında ne dedi?",
      "o": [
       "لَا تَمَسُّوهَا بِسُوءٍ",
       "اذْبَحُوهَا وَكُلُوهَا",
       "احْبِسُوهَا فِي الْبَيْتِ"
      ],
      "ot": [
       "Ona kötülükle dokunmayın",
       "Onu kesip yiyin",
       "Onu evde hapsedin"
      ],
      "a": 0,
      "ev": [
       "11.2"
      ]
     },
     {
      "q": "كَيْفَ جَعَلَ صَالِحٌ الشُّرْبَ؟",
      "qt": "Sâlih su içmeyi nasıl düzenledi?",
      "o": [
       "يَوْمٌ لِلنَّاقَةِ وَيَوْمٌ لِلْمَاشِيَةِ",
       "النَّاقَةُ لَا تَشْرَبُ أَبَدًا",
       "الْمَاشِيَةُ تَشْرَبُ كُلَّ يَوْمٍ"
      ],
      "ot": [
       "Bir gün devenin, bir gün sürünün",
       "Deve hiç su içmez",
       "Sürü her gün içer"
      ],
      "a": 0,
      "ev": [
       "11.6"
      ]
     }
    ],
    "focus": {
     "title": "Dişil özne, dişil fiil: خَرَجَتْ، وَلَدَتْ، تَشْرَبُ",
     "explain": "Özne dişil olunca fiil de dişil olur. Mazide fiilin sonuna <b>ـَتْ</b> eklenir: <span class='ar-inline'>خَرَجَتْ نَاقَةٌ</span>, <span class='ar-inline'>وَلَدَتْ</span>, <span class='ar-inline'>هَرَبَتِ الْمَاشِيَةُ</span>. Muzaride <b>تَـ</b> ile başlar: <span class='ar-inline'>النَّاقَةُ تَأْكُلُ وَتَشْرَبُ</span>, <span class='ar-inline'>مَاشِيَتُهُمْ تَخَافُهَا</span>. Eril özneyle karşılaştırın: <span class='ar-inline'>خَرَجَ صَالِحٌ</span>, <span class='ar-inline'>يَشْرَبُ</span>.",
     "examples": [
      "خَرَجَتْ مِنَ الْجَبَلِ نَاقَةٌ حَامِلٌ وَوَلَدَتْ",
      "إِنَّ هٰذِهِ النَّاقَةَ تَأْكُلُ فِي أَرْضِ اللهِ وَتَشْرَبُ",
      "هَرَبَتِ الْمَاشِيَةُ وَفَرَّتْ"
     ],
     "items": [
      {
       "q": "____ مِنَ الْجَبَلِ نَاقَةٌ حَامِلٌ.",
       "o": [
        "خَرَجَتْ",
        "خَرَجَ",
        "خَرَجُوا"
       ],
       "a": 0
      },
      {
       "q": "إِنَّ هٰذِهِ النَّاقَةَ ____ فِي أَرْضِ اللهِ.",
       "o": [
        "تَأْكُلُ",
        "يَأْكُلُ",
        "يَأْكُلُونَ"
       ],
       "a": 0
      },
      {
       "q": "كُلَّمَا جَاءَتْ تَشْرَبُ ____ الْمَاشِيَةُ.",
       "o": [
        "هَرَبَتِ",
        "هَرَبَ",
        "هَرَبُوا"
       ],
       "a": 0
      },
      {
       "q": "فَدَعَا اللهَ ____.",
       "o": [
        "صَالِحٌ",
        "النَّاقَةُ",
        "الْمَاشِيَةُ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "طَلَبَ الْقَوْمُ {نَاقَةً} مِنَ الْجَبَلِ. فَدَعَا صَالِحٌ {رَبَّهُ}، فَخَرَجَتْ نَاقَةٌ وَ{وَلَدَتْ}. وَقَالَ صَالِحٌ: لَا {تَمَسُّوهَا} بِسُوءٍ. وَكَانَ لِلنَّاقَةِ يَوْمٌ وَلِ{مَاشِيَتِهِمْ} يَوْمٌ."
    },
    "think": {
     "q": "رَأَى النَّاسُ النَّاقَةَ تَخْرُجُ مِنَ الْجَبَلِ وَلٰكِنْ لَمْ يُؤْمِنْ إِلَّا وَاحِدٌ. لِمَاذَا؟",
     "qt": "İnsanlar devenin dağdan çıktığını gördü ama yalnızca biri iman etti. Neden?",
     "model": "İstedikleri mucizeyi gözleriyle gördüler, hayret ettiler; ama sorun kanıt eksikliği değildi. Önderlik, mal ve alışkanlık kaybetme korkusu onları inanmaktan alıkoydu. Kıssa, kalbin kabule hazır olmadığı yerde en açık delilin bile yetmeyebileceğini gösteriyor."
    },
    "retell": [
     "آيَةٌ",
     "صَخْرَةٌ",
     "نَاقَةٌ حَامِلٌ",
     "دَعَا اللهَ",
     "الْمَاشِيَةُ",
     "النَّوْبَةُ"
    ],
    "quran": [
     {
      "ar": "وَيَا قَوْمِ هٰذِهِ نَاقَةُ اللهِ لَكُمْ آيَةً فَذَرُوهَا تَأْكُلْ فِي أَرْضِ اللهِ وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابٌ قَرِيبٌ",
      "ref": "Hûd 11:64",
      "tr": "Ey kavmim! İşte size bir mucize olarak Allah'ın devesi. Bırakın Allah'ın toprağında otlasın; ona kötülükle dokunmayın, yoksa sizi yakın bir azap yakalar.",
      "inText": "هٰذِهِ نَاقَةُ اللهِ … «وَلَا تَمَسُّوهَا بِسُوءٍ …»"
     },
     {
      "ar": "قَالَ هٰذِهِ نَاقَةٌ لَهَا شِرْبٌ وَلَكُمْ شِرْبُ يَوْمٍ مَعْلُومٍ",
      "ref": "Şuarâ 26:155",
      "tr": "Dedi ki: İşte bir deve; belli bir günde su içme hakkı onun, belli bir günde de sizindir.",
      "inText": "لِلنَّاقَةِ يَوْمٌ وَلِمَاشِيَتِكُمْ يَوْمٌ"
     }
    ]
   },
   "sections": [
    {
     "n": 10,
     "title_ar": "نَاقَةُ اللهِ",
     "title_tr": "Allah'ın devesi",
     "s": [
      [
       "قَالَ صَالِحٌ: وَأَيَّ آيَةٍ تُرِيدُونَ؟",
       "Sâlih dedi: Nasıl bir mucize istiyorsunuz?"
      ],
      [
       "قَالُوا: هٰذِهِ صَخْرَةٌ، فَأَخْرِجْ لَنَا مِنْ هٰذَا الْجَبَلِ نَاقَةً حَامِلًا!",
       "Dediler: İşte bir kaya; bize bu dağdan gebe bir dişi deve çıkar!"
      ],
      [
       "وَكَانَ النَّاسُ يَعْلَمُونَ أَنَّ النَّاقَةَ لَا تَلِدُهَا إِلَّا النَّاقَةُ.",
       "İnsanlar deveyi ancak bir devenin doğurabileceğini biliyorlardı."
      ],
      [
       "وَأَنَّ النَّاقَةَ لَا تَنْبُتُ مِنَ الْأَرْضِ وَلَا تَنْتُجُ مِنَ الْحَجَرِ.",
       "Ve devenin ne topraktan biteceğini ne de taştan doğacağını."
      ],
      [
       "وَآمَنُوا أَنَّ صَالِحًا سَيَعْجَزُ وَأَنَّهُمْ سَيَنْجَحُونَ!",
       "Sâlih'in âciz kalacağına ve kendilerinin kazanacağına inandılar!"
      ],
      [
       "وَلٰكِنَّ صَالِحًا كَانَ قَوِيَّ الْإِيمَانِ بِرَبِّهِ وَكَانَ يَعْلَمُ أَنَّ اللهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
       "Ama Sâlih'in Rabbine imanı güçlüydü; Allah'ın her şeye gücünün yettiğini biliyordu."
      ],
      [
       "فَدَعَا اللهَ صَالِحٌ، وَكَانَ كَمَا طَلَبَ النَّاسُ، خَرَجَتْ مِنَ الْجَبَلِ نَاقَةٌ حَامِلٌ وَوَلَدَتْ.",
       "Sâlih Allah'a dua etti ve insanların istediği gibi oldu: dağdan gebe bir deve çıktı ve doğurdu."
      ],
      [
       "وَتَحَيَّرَ النَّاسُ وَدُهِشُوا، وَلٰكِنْ لَمْ يُؤْمِنْ مِنْهُمْ إِلَّا وَاحِدٌ.",
       "İnsanlar şaşırıp kaldı, hayret ettiler; ama içlerinden yalnızca biri iman etti."
      ]
     ]
    },
    {
     "n": 11,
     "title_ar": "النَّوْبَةُ",
     "title_tr": "Sıra",
     "s": [
      [
       "قَالَ صَالِحٌ: هٰذِهِ نَاقَةُ اللهِ، وَهٰذِهِ آيَةُ اللهِ!",
       "Sâlih dedi: Bu Allah'ın devesidir, bu Allah'ın mucizesidir!"
      ],
      [
       "سَأَلْتُمُوهُ فَخَلَقَهَا لَكُمْ بِقُدْرَتِهِ.",
       "Onu O'ndan istediniz, O da kudretiyle onu sizin için yarattı."
      ],
      [
       "فَاتْرُكُوا هٰذِهِ النَّاقَةَ «وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابٌ قَرِيبٌ».",
       "Bu deveyi bırakın «ve ona kötülükle dokunmayın; yoksa sizi yakın bir azap yakalar.»"
      ],
      [
       "وَإِنَّ هٰذِهِ النَّاقَةَ تَأْكُلُ فِي أَرْضِ اللهِ وَتَشْرَبُ وَتَأْتِي وَتَذْهَبُ، وَلَيْسَ عَلَيْكُمْ عَلَفُهَا وَمَاؤُهَا، فَالْعَلَفُ كَثِيرٌ وَالْمَاءُ كَثِيرٌ.",
       "Bu deve Allah'ın toprağında yer, içer, gelir ve gider; yemi ve suyu size düşmez. Yem de bol, su da bol."
      ],
      [
       "وَكَانَتْ هٰذِهِ النَّاقَةُ كَبِيرَةً جِدًّا وَغَرِيبَةً فِي الْخَلْقِ، فَكَانَتْ مَاشِيَتُهُمْ تَخَافُهَا وَتَنْفِرُ مِنْهَا.",
       "Bu deve çok büyüktü ve yaratılışı tuhaftı; bu yüzden hayvanları ondan korkar ve ürkerdi."
      ],
      [
       "وَكَانَتْ كُلَّمَا جَاءَتْ تَشْرَبُ هَرَبَتِ الْمَاشِيَةُ وَفَرَّتْ.",
       "Ne zaman su içmeye gelse hayvanlar kaçıp uzaklaşırdı."
      ],
      [
       "رَأَى صَالِحٌ ذٰلِكَ فَقَالَ: لِلنَّاقَةِ يَوْمٌ وَلِمَاشِيَتِكُمْ يَوْمٌ، فَيَوْمًا تَشْرَبُ هٰذِهِ النَّاقَةُ وَيَوْمًا تَشْرَبُ مَاشِيَتُكُمْ.",
       "Sâlih bunu görünce dedi: Bir gün devenin, bir gün hayvanlarınızın; bir gün bu deve içer, bir gün hayvanlarınız içer."
      ],
      [
       "وَكَذٰلِكَ كَانَ، فَإِذَا كَانَتْ نَوْبَةُ النَّاقَةِ ذَهَبَتْ فَشَرِبَتْ، وَإِذَا كَانَتْ نَوْبَةُ مَاشِيَةِ الْقَوْمِ ذَهَبَتْ فَشَرِبَتْ.",
       "Ve öyle oldu: devenin sırası gelince o gidip içer, kavmin hayvanlarının sırası gelince onlar gidip içerdi."
      ]
     ]
    }
   ]
  },
  {
   "id": 6,
   "emoji": "⚡",
   "title_ar": "الطُّغْيَانُ وَالْعَذَابُ",
   "title_tr": "Azgınlık ve azap",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «طُغْيَانُ ثَمُودَ», «الْعَذَابُ». Kavim devenin su sırasından bıktı. Sence ne yaptılar?",
     "options": [
      [
       "قَتَلُوا النَّاقَةَ",
       "Deveyi öldürdüler"
      ],
      [
       "حَفَرُوا بِئْرًا جَدِيدَةً",
       "Yeni bir kuyu kazdılar"
      ],
      [
       "آمَنُوا بِصَالِحٍ",
       "Sâlih'e iman ettiler"
      ]
     ]
    },
    "vocab": [
     [
      "ضَجِرَ",
      "bıktı, sıkıldı",
      "😤"
     ],
     [
      "حَذَّرَ",
      "uyardı",
      "⚠️"
     ],
     [
      "الشَّقِيُّ",
      "bedbaht, azgın",
      "😈"
     ],
     [
      "نَحَرَ",
      "boğazladı",
      "🗡️"
     ],
     [
      "صَيْحَةٌ / زِلْزَالٌ",
      "korkunç çığlık / deprem",
      "⚡"
     ],
     [
      "بِئْرٌ مُعَطَّلَةٌ",
      "terk edilmiş kuyu",
      "🕳️"
     ]
    ]
   },
   "stop": {
    "section": 12,
    "after": 3,
    "prompt_tr": "«Bu deveyi kim öldürecek?» Sâlih onları uyarmıştı. Sence biri çıktı mı?",
    "options": [
     [
      "قَامَ رَجُلَانِ وَقَالَا: أَنَا",
      "İki adam kalkıp «Ben!» dedi"
     ],
     [
      "لَمْ يَقُمْ أَحَدٌ",
      "Kimse kalkmadı"
     ],
     [
      "قَامَ صَالِحٌ وَمَنَعَهُمْ",
      "Sâlih kalkıp onları durdurdu"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "ضَجِرَ النَّاسُ مِنَ النَّاقَةِ.",
     "قَتَلَ الشَّقِيَّانِ النَّاقَةَ.",
     "قَالَ صَالِحٌ: تَمَتَّعُوا ثَلَاثَةَ أَيَّامٍ.",
     "أَرَادَ تِسْعَةُ رِجَالٍ أَنْ يَقْتُلُوا صَالِحًا.",
     "جَاءَتِ الصَّيْحَةُ وَالزِّلْزَالُ.",
     "هَاجَرَ صَالِحٌ وَالْمُؤْمِنُونَ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا ضَجِرَ النَّاسُ مِنَ النَّاقَةِ؟",
      "qt": "İnsanlar neden deveden bıktı?",
      "o": [
       "لِأَنَّ مَاشِيَتَهُمْ تَنْفِرُ مِنْهَا",
       "لِأَنَّهَا كَانَتْ تَأْكُلُ زُرُوعَهُمْ",
       "لِأَنَّهَا كَانَتْ صَغِيرَةً"
      ],
      "ot": [
       "Çünkü hayvanları ondan ürküyordu",
       "Çünkü ekinlerini yiyordu",
       "Çünkü küçüktü"
      ],
      "a": 0,
      "ev": [
       "12.1"
      ]
     },
     {
      "q": "كَيْفَ قَتَلَ الشَّقِيَّانِ النَّاقَةَ؟",
      "qt": "İki bedbaht deveyi nasıl öldürdü?",
      "o": [
       "رَمَاهَا الْأَوَّلُ بِسَهْمٍ وَنَحَرَهَا الثَّانِي",
       "أَغْرَقَاهَا فِي الْمَاءِ",
       "تَرَكَاهَا بِلَا مَاءٍ"
      ],
      "ot": [
       "Birincisi ok attı, ikincisi boğazladı",
       "Onu suda boğdular",
       "Onu susuz bıraktılar"
      ],
      "a": 0,
      "ev": [
       "12.6"
      ]
     },
     {
      "q": "كَمْ يَوْمًا أَمْهَلَهُمْ صَالِحٌ؟",
      "qt": "Sâlih onlara kaç gün mühlet verdi?",
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
       "13.0"
      ]
     },
     {
      "q": "مَاذَا أَرَادَ التِّسْعَةُ رِجَالٍ؟",
      "qt": "Dokuz adam ne yapmak istedi?",
      "o": [
       "أَنْ يَقْتُلُوا صَالِحًا وَأَهْلَهُ فِي اللَّيْلِ",
       "أَنْ يُؤْمِنُوا بِصَالِحٍ",
       "أَنْ يَهْرُبُوا مِنَ الْمَدِينَةِ"
      ],
      "ot": [
       "Sâlih'i ve ailesini gece öldürmek",
       "Sâlih'e iman etmek",
       "Şehirden kaçmak"
      ],
      "a": 0,
      "ev": [
       "13.2"
      ]
     },
     {
      "q": "بِمَاذَا جَاءَ الْعَذَابُ؟",
      "qt": "Azap nasıl geldi?",
      "o": [
       "بِصَيْحَةٍ مَعَ زِلْزَالٍ شَدِيدٍ",
       "بِطُوفَانٍ",
       "بِرِيحٍ وَرَمْلٍ"
      ],
      "ot": [
       "Şiddetli bir depremle birlikte korkunç bir çığlıkla",
       "Tufanla",
       "Rüzgâr ve kumla"
      ],
      "a": 0,
      "ev": [
       "13.4"
      ]
     }
    ],
    "focus": {
     "title": "لَمَّا + mazi: «-ınca, -dığında»",
     "explain": "<b>لَمَّا</b> mazi fiille gelince geçmişte bir olayın ardından başka bir olayın olduğunu anlatır: <span class='ar-inline'>لَمَّا عَلِمَ صَالِحٌ … تَأَسَّفَ</span> (Sâlih öğrenince üzüldü), <span class='ar-inline'>لَمَّا كَانَ الْيَوْمُ الثَّالِثُ جَاءَهُمُ الْعَذَابُ</span> (üçüncü gün olunca azap geldi), <span class='ar-inline'>لَمَّا مَرَّ رَسُولُ اللهِ … قَالَ</span>. Dikkat: <span class='ar-inline'>لَمْ</span> + muzari ise olumsuzdur (<span class='ar-inline'>لَمْ يَحْذَرُوا</span>).",
     "examples": [
      "وَلَمَّا عَلِمَ صَالِحٌ أَنَّ النَّاقَةَ قَدْ نُحِرَتْ تَأَسَّفَ",
      "وَلَمَّا كَانَ الْيَوْمُ الثَّالِثُ جَاءَهُمُ الْعَذَابُ",
      "وَلَمَّا مَرَّ رَسُولُ اللهِ … قَالَ لِأَصْحَابِهِ"
     ],
     "items": [
      {
       "q": "وَ____ عَلِمَ صَالِحٌ أَنَّ النَّاقَةَ قَدْ نُحِرَتْ تَأَسَّفَ.",
       "o": [
        "لَمَّا",
        "لَمْ",
        "لَا"
       ],
       "a": 0
      },
      {
       "q": "وَلَمَّا كَانَ الْيَوْمُ الثَّالِثُ ____ الْعَذَابُ.",
       "o": [
        "جَاءَهُمُ",
        "يَجِيءُ",
        "جِئْ"
       ],
       "a": 0
      },
      {
       "q": "حَذَّرَهُمْ صَالِحٌ وَلٰكِنَّهُمْ ____ يَحْذَرُوا.",
       "o": [
        "لَمْ",
        "لَمَّا",
        "لَنْ"
       ],
       "a": 0
      },
      {
       "q": "«لَمَّا مَرَّ … قَالَ» = …",
       "o": [
        "geçerken / geçince … dedi",
        "geçmedi … demedi",
        "geçecek … diyecek"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَتَلَ الشَّقِيَّانِ {النَّاقَةَ}. فَقَالَ صَالِحٌ: تَمَتَّعُوا ثَلَاثَةَ {أَيَّامٍ}. وَحَفِظَ اللهُ صَالِحًا وَ{أَهْلَهُ}. وَجَاءَ الْعَذَابُ بِ{صَيْحَةٍ} وَزِلْزَالٍ، وَهَاجَرَ صَالِحٌ وَ{الْمُؤْمِنُونَ}."
    },
    "think": {
     "q": "لِمَاذَا أَمَرَ النَّبِيُّ ﷺ أَصْحَابَهُ أَنْ يَكُونُوا بَاكِينَ إِذَا مَرُّوا بِدِيَارِ ثَمُودَ؟",
     "qt": "Peygamberimiz (s.a.v.) ashabına Semûd'un yurdundan geçerken neden ağlayarak geçmelerini emretti?",
     "model": "Semûd'un yurdu bir gezi yeri değil, bir ibret yeriydi. Ağlamak, orada olanları ciddiye almak ve aynı hatalara düşmekten korkmak demektir. Dağlara oyulmuş saraylar hâlâ duruyor ama içinde kimse yok; bu, gücün ve malın insanı kurtarmadığını en açık biçimde gösteriyor."
    },
    "retell": [
     "ضَجِرُوا",
     "الشَّقِيَّانِ",
     "ثَلَاثَةُ أَيَّامٍ",
     "تِسْعَةُ رِجَالٍ",
     "صَيْحَةٌ وَزِلْزَالٌ",
     "هَاجَرَ"
    ],
    "quran": [
     {
      "ar": "فَعَقَرُوهَا فَقَالَ تَمَتَّعُوا فِي دَارِكُمْ ثَلَاثَةَ أَيَّامٍ ۖ ذٰلِكَ وَعْدٌ غَيْرُ مَكْذُوبٍ",
      "ref": "Hûd 11:65",
      "tr": "Ama onu boğazladılar. Bunun üzerine Sâlih dedi: Yurdunuzda üç gün daha yaşayın; bu yalanlanamayacak bir vaattir.",
      "inText": "«تَمَتَّعُوا فِي دَارِكُمْ ثَلَاثَةَ أَيَّامٍ …»"
     },
     {
      "ar": "وَكَانَ فِي الْمَدِينَةِ تِسْعَةُ رَهْطٍ يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ ۝ قَالُوا تَقَاسَمُوا بِاللهِ لَنُبَيِّتَنَّهُ وَأَهْلَهُ ثُمَّ لَنَقُولَنَّ لِوَلِيِّهِ مَا شَهِدْنَا مَهْلِكَ أَهْلِهِ وَإِنَّا لَصَادِقُونَ",
      "ref": "Neml 27:48–49",
      "tr": "Şehirde yeryüzünde bozgunculuk yapan ve düzeltmeyen dokuz kişi vardı. Allah adına birbirlerine yemin ederek dediler: Ona ve ailesine mutlaka gece baskın yapacağız; sonra velisine «Ailesinin öldürülüşünü görmedik, biz doğru söylüyoruz» diyeceğiz.",
      "inText": "وَكَانَ فِي الْمَدِينَةِ تِسْعَةُ رِجَالٍ …"
     },
     {
      "ar": "فَتَوَلَّى عَنْهُمْ وَقَالَ يَا قَوْمِ لَقَدْ أَبْلَغْتُكُمْ رِسَالَةَ رَبِّي وَنَصَحْتُ لَكُمْ وَلٰكِنْ لَا تُحِبُّونَ النَّاصِحِينَ",
      "ref": "A'râf 7:79",
      "tr": "Sâlih onlardan yüz çevirdi ve dedi: Ey kavmim! Andolsun size Rabbimin mesajını ulaştırdım ve size öğüt verdim; ama siz öğüt verenleri sevmiyorsunuz.",
      "inText": "«يَا قَوْمِ لَقَدْ أَبْلَغْتُكُمْ رِسَالَةَ رَبِّي …»"
     },
     {
      "ar": "فَكَأَيِّنْ مِنْ قَرْيَةٍ أَهْلَكْنَاهَا وَهِيَ ظَالِمَةٌ فَهِيَ خَاوِيَةٌ عَلَى عُرُوشِهَا وَبِئْرٍ مُعَطَّلَةٍ وَقَصْرٍ مَشِيدٍ",
      "ref": "Hac 22:45",
      "tr": "Nice zalim memleketi helak ettik; çatıları çökmüş, duvarları üstüne yıkılmış hâldedir. Nice terk edilmiş kuyu ve yüksek saray (sahipsiz kalmıştır).",
      "inText": "إِلَّا قُصُورًا خَالِيَةً وَبِئْرًا مُعَطَّلَةً"
     },
     {
      "ar": "أَلَا إِنَّ ثَمُودَ كَفَرُوا رَبَّهُمْ ۗ أَلَا بُعْدًا لِثَمُودَ",
      "ref": "Hûd 11:68",
      "tr": "İyi bilin ki Semûd Rablerini inkâr etti. İyi bilin ki Semûd (rahmetten) uzak olsun!",
      "inText": "«أَلَا إِنَّ ثَمُودَ كَفَرُوا رَبَّهُمْ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 12,
     "title_ar": "طُغْيَانُ ثَمُودَ",
     "title_tr": "Semûd'un azgınlığı",
     "s": [
      [
       "وَلٰكِنِ اسْتَكْبَرَ الْقَوْمُ وَظَلَمُوا، وَقَالُوا: لِمَاذَا لَا تَشْرَبُ مَاشِيَتُنَا كُلَّ يَوْمٍ.",
       "Ama kavim büyüklük tasladı ve zulmetti; «Hayvanlarımız neden her gün içmesin?» dediler."
      ],
      [
       "وَضَجِرَ النَّاسُ مِنْ هٰذِهِ النَّاقَةِ الَّتِي تَنْفِرُ مِنْهَا مَاشِيَتُهُمْ.",
       "İnsanlar, hayvanlarının kendisinden ürktüğü bu deveden bıktı."
      ],
      [
       "وَكَانَ صَالِحٌ قَدْ حَذَّرَهُمْ مِنْ أَنْ يُهِينُوا هٰذِهِ النَّاقَةَ، وَلٰكِنَّهُمْ لَمْ يَحْذَرُوا.",
       "Sâlih onları bu deveye kötü davranmamaları için uyarmıştı; ama sakınmadılar."
      ],
      [
       "قَالُوا: مَنْ يَقْتُلُ هٰذِهِ النَّاقَةَ؟",
       "Dediler: Bu deveyi kim öldürecek?"
      ],
      [
       "قَامَ رَجُلٌ وَقَالَ: أَنَا!",
       "Bir adam kalktı ve «Ben!» dedi."
      ],
      [
       "وَقَامَ الْآخَرُ وَقَالَ: أَنَا!",
       "Öteki de kalktı ve «Ben!» dedi."
      ],
      [
       "وَذَهَبَ الشَّقِيَّانِ وَجَلَسَا يَنْتَظِرَانِ خُرُوجَ النَّاقَةِ، حَتَّى إِذَا خَرَجَتِ النَّاقَةُ رَمَاهَا الْأَوَّلُ بِسَهْمٍ، وَنَحَرَهَا الثَّانِي فَقَتَلَهَا.",
       "İki bedbaht gidip devenin çıkmasını beklemeye oturdu. Deve çıkınca birincisi ona ok attı, ikincisi de onu boğazlayıp öldürdü."
      ]
     ]
    },
    {
     "n": 13,
     "title_ar": "الْعَذَابُ",
     "title_tr": "Azap",
     "s": [
      [
       "وَلَمَّا عَلِمَ صَالِحٌ أَنَّ النَّاقَةَ قَدْ نُحِرَتْ تَأَسَّفَ وَحَزِنَ جِدًّا، وَقَالَ لِلنَّاسِ: «تَمَتَّعُوا فِي دَارِكُمْ ثَلَاثَةَ أَيَّامٍ ذٰلِكَ وَعْدٌ غَيْرُ مَكْذُوبٍ».",
       "Sâlih devenin boğazlandığını öğrenince çok üzüldü ve insanlara dedi: «Yurdunuzda üç gün daha yaşayın; bu yalanlanamayacak bir vaattir.»"
      ],
      [
       "وَكَانَ فِي الْمَدِينَةِ تِسْعَةُ رِجَالٍ يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ،",
       "Şehirde yeryüzünde bozgunculuk yapan ve düzeltmeyen dokuz adam vardı."
      ],
      [
       "فَحَلَفُوا وَقَالُوا لَنَقْتُلَنَّ صَالِحًا وَأَهْلَهُ فِي اللَّيْلِ، وَإِذَا سُئِلْنَا نَقُولُ مَا عِنْدَنَا عِلْمٌ،",
       "Yemin edip dediler: Sâlih'i ve ailesini gece mutlaka öldüreceğiz; sorulursak «Bizim bir bilgimiz yok» deriz."
      ],
      [
       "وَلٰكِنَّ اللهَ حَفِظَ صَالِحًا وَأَهْلَهُ.",
       "Ama Allah Sâlih'i ve ailesini korudu."
      ],
      [
       "وَلَمَّا كَانَ الْيَوْمُ الثَّالِثُ جَاءَهُمُ الْعَذَابُ، أَصْبَحُوا كَعَادَتِهِمْ فَإِذَا بِصَيْحَةٍ مَعَ زِلْزَالٍ شَدِيدٍ.",
       "Üçüncü gün olunca azap onlara geldi: her zamanki gibi sabaha çıktılar ki bir de ne görsünler, şiddetli bir depremle birlikte korkunç bir çığlık!"
      ],
      [
       "صَيْحَةٌ تَقَطَّرَتْ مِنْهَا الْقُلُوبُ وَزِلْزَالٌ تَهَدَّمَتْ مِنْهُ الْبُيُوتُ وَكَانَ يَوْمًا عَلَى ثَمُودَ شَدِيدًا.",
       "Yürekleri parçalayan bir çığlık, evleri yıkan bir deprem… Semûd için çok çetin bir gündü."
      ],
      [
       "وَمَاتَ النَّاسُ كُلُّهُمْ وَخَرِبَتِ الْمَدِينَةُ.",
       "İnsanların hepsi öldü ve şehir harap oldu."
      ],
      [
       "وَهَاجَرَ صَالِحٌ وَالْمُؤْمِنُونَ مِنْ تِلْكَ الْمَدِينَةِ الشَّقِيَّةِ. وَمَا يَصْنَعُونَ فِيهَا؟",
       "Sâlih ve müminler o bedbaht şehirden göç ettiler. Orada ne yapacaklardı ki?"
      ],
      [
       "وَخَرَجَ صَالِحٌ وَهُوَ يَنْظُرُ إِلَى قَوْمِهِ وَهُمْ أَمْوَاتٌ، فَقَالَ بِصَوْتٍ حَزِينٍ:",
       "Sâlih ölü yatan kavmine bakarak çıktı ve hüzünlü bir sesle dedi:"
      ],
      [
       "«يَا قَوْمِ لَقَدْ أَبْلَغْتُكُمْ رِسَالَةَ رَبِّي وَنَصَحْتُ لَكُمْ وَلٰكِنْ لَا تُحِبُّونَ النَّاصِحِينَ».",
       "«Ey kavmim! Andolsun size Rabbimin mesajını ulaştırdım ve size öğüt verdim; ama siz öğüt verenleri sevmiyorsunuz.»"
      ],
      [
       "وَلَا يَرَى الْإِنْسَانُ الْيَوْمَ هُنَالِكَ إِلَّا قُصُورًا خَالِيَةً وَبِئْرًا مُعَطَّلَةً.",
       "İnsan bugün orada boş saraylardan ve terk edilmiş bir kuyudan başka bir şey görmez."
      ],
      [
       "وَلَا يَرَى إِلَّا قُرًى مُوحِشَةً لَيْسَ فِيهَا دَاعٍ وَلَا مُجِيبٌ.",
       "Seslenen de cevap veren de olmayan ıssız köylerden başka bir şey görmez."
      ],
      [
       "وَلَمَّا مَرَّ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ عَلَى دِيَارِ ثَمُودَ فِي طَرِيقِهِ إِلَى الشَّامِ قَالَ لِأَصْحَابِهِ:",
       "Resûlullah (s.a.v.) Şam yolunda Semûd'un yurdundan geçerken ashabına dedi ki:"
      ],
      [
       "«لَا تَدْخُلُوا مَسَاكِنَ الَّذِينَ ظَلَمُوا أَنْفُسَهُمْ إِلَّا أَنْ تَكُونُوا بَاكِينَ حَذَرًا مِنْ أَنْ يُصِيبَكُمْ مِثْلُ مَا أَصَابَهُمْ».",
       "«Kendilerine zulmedenlerin yurtlarına, onların başına gelenin sizin de başınıza gelmesinden sakınarak ağlayan kimseler olmanız dışında girmeyin.»"
      ],
      [
       "«أَلَا إِنَّ ثَمُودَ كَفَرُوا رَبَّهُمْ أَلَا بُعْدًا لِثَمُودَ».",
       "«İyi bilin ki Semûd Rablerini inkâr etti. İyi bilin ki Semûd (rahmetten) uzak olsun!»"
      ]
     ]
    }
   ]
  }
 ]
});
