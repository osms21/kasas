/* Kasasu'n-Nebiyyîn — Hz. Nûh kıssası (s. 73–98)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "nuh",
 "title_ar": "قِصَّةُ نُوحٍ عَلَيْهِ السَّلَامُ",
 "title_tr": "Hz. Nûh'un Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 73–98 («سَفِينَةُ نُوحٍ»)",
 "units": [
  {
   "id": 1,
   "emoji": "🌍",
   "title_ar": "بَعْدَ آدَمَ",
   "title_tr": "Âdem'den sonra",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «بَعْدَ آدَمَ», «حَسَدُ الشَّيْطَانِ», «فِكْرَةُ الشَّيْطَانِ». Sence şeytan insanlar için ne isteyecek?",
     "options": [
      [
       "أَنْ يَدْخُلُوا النَّارَ مَعَهُ",
       "Onların da kendisiyle cehenneme girmesini"
      ],
      [
       "أَنْ يَدْخُلُوا الْجَنَّةَ",
       "Onların cennete girmesini"
      ],
      [
       "أَنْ يَبْنُوا بُيُوتًا",
       "Onların ev yapmasını"
      ]
     ]
    },
    "vocab": [
     [
      "ذُرِّيَّةٌ",
      "soy, nesil",
      "👨‍👩‍👧"
     ],
     [
      "أُمَّةٌ وَاحِدَةٌ",
      "tek bir ümmet",
      "🤝"
     ],
     [
      "الشَّيْطَانُ / إِبْلِيسُ",
      "şeytan / İblis",
      "😈"
     ],
     [
      "يَحْسُدُ",
      "kıskanır",
      "😒"
     ],
     [
      "الشِّرْكُ",
      "Allah'a ortak koşma",
      "⚠️"
     ],
     [
      "الْجَنَّةُ / النَّارُ",
      "cennet / cehennem",
      "🌿🔥"
     ]
    ]
   },
   "stop": {
    "section": 2,
    "after": 7,
    "prompt_tr": "Şeytan «Âdemoğullarından intikam almalıyım» diyor. Sence bunu nasıl yapacak?",
    "options": [
     [
      "يَدْعُوهُمْ إِلَى عِبَادَةِ الْأَصْنَامِ",
      "Onları putlara tapmaya çağıracak"
     ],
     [
      "يَضْرِبُهُمْ",
      "Onları dövecek"
     ],
     [
      "يَتْرُكُهُمْ",
      "Onları bırakacak"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "انْتَشَرَتْ ذُرِّيَّةُ آدَمَ وَكَثُرَتْ.",
     "كَانَ النَّاسُ يَعْبُدُونَ اللهَ.",
     "حَسَدَ الشَّيْطَانُ بَنِي آدَمَ.",
     "أَرَادَ الشَّيْطَانُ أَنْ يَنْتَقِمَ.",
     "رَأَى الشَّيْطَانُ أَنْ يَدْعُوَهُمْ إِلَى الْأَصْنَامِ.",
     "عَرَفَ أَنَّ النَّاسَ يَسُبُّونَهُ إِنْ قَالَ ذٰلِكَ."
    ],
    "questions": [
     {
      "q": "عَلَى أَيِّ دِينٍ كَانَ النَّاسُ؟",
      "qt": "İnsanlar hangi din üzereydi?",
      "o": [
       "عَلَى دِينِ أَبِيهِمْ آدَمَ",
       "عَلَى دِينِ إِبْلِيسَ",
       "عَلَى عِبَادَةِ الْأَصْنَامِ"
      ],
      "ot": [
       "Babaları Âdem'in dini üzere",
       "İblis'in dini üzere",
       "Putlara tapma üzere"
      ],
      "a": 0,
      "ev": [
       "1.6"
      ]
     },
     {
      "q": "لِمَاذَا طَرَدَ اللهُ إِبْلِيسَ؟",
      "qt": "Allah İblis'i neden kovdu?",
      "o": [
       "لِأَنَّهُ لَمْ يَسْجُدْ لِآدَمَ",
       "لِأَنَّهُ كَسَرَ الْأَصْنَامَ",
       "لِأَنَّهُ أَكَلَ مِنَ الشَّجَرَةِ"
      ],
      "ot": [
       "Çünkü Âdem'e secde etmedi",
       "Çünkü putları kırdı",
       "Çünkü ağaçtan yedi"
      ],
      "a": 0,
      "ev": [
       "2.5"
      ]
     },
     {
      "q": "مَاذَا كَانَ يُرِيدُ إِبْلِيسُ لِبَنِي آدَمَ؟",
      "qt": "İblis Âdemoğulları için ne istiyordu?",
      "o": [
       "أَنْ يَدْخُلُوا مَعَهُ النَّارَ",
       "أَنْ يَدْخُلُوا الْجَنَّةَ",
       "أَنْ يَكُونُوا أُمَّةً وَاحِدَةً"
      ],
      "ot": [
       "Kendisiyle birlikte cehenneme girmelerini",
       "Cennete girmelerini",
       "Tek bir ümmet olmalarını"
      ],
      "a": 0,
      "ev": [
       "2.6"
      ]
     },
     {
      "q": "مَاذَا كَانَ الشَّيْطَانُ يَعْرِفُ؟",
      "qt": "Şeytan neyi biliyordu?",
      "o": [
       "أَنَّ اللهَ لَا يَغْفِرُ الشِّرْكَ",
       "أَنَّ النَّاسَ يُحِبُّونَهُ",
       "أَنَّ الْأَصْنَامَ تَنْفَعُ"
      ],
      "ot": [
       "Allah'ın şirki bağışlamadığını",
       "İnsanların onu sevdiğini",
       "Putların fayda verdiğini"
      ],
      "a": 0,
      "ev": [
       "3.1"
      ]
     },
     {
      "q": "مَاذَا يَفْعَلُ النَّاسُ لَوْ قَالَ لَهُمْ: اعْبُدُوا الْأَصْنَامَ؟",
      "qt": "«Putlara tapın» deseydi insanlar ne yapardı?",
      "o": [
       "يَسُبُّونَهُ وَيَضْرِبُونَهُ",
       "يَعْبُدُونَ الْأَصْنَامَ",
       "يَسْكُتُونَ"
      ],
      "ot": [
       "Ona söver ve onu döverlerdi",
       "Putlara taparlardı",
       "Susarlardı"
      ],
      "a": 0,
      "ev": [
       "3.4"
      ]
     }
    ],
    "focus": {
     "title": "«Eğer … olsaydı, …-irdi»: لَوْ … لَـ",
     "explain": "<b>لَوْ</b> gerçekleşmemiş bir durumu varsayar; cevap kısmı çoğunlukla <b>لَـ</b> ile başlar: <span class='ar-inline'>لَوْ رَجَعَ آدَمُ … لَمَا عَرَفَهُمْ</span> (Âdem dönseydi onları tanımazdı), <span class='ar-inline'>لَوْ قِيلَ لَهُ … لَتَعَجَّبَ</span> (ona denseydi şaşırırdı), <span class='ar-inline'>لَوْ ذَهَبَ … لَسَبَّهُ النَّاسُ</span> (gitseydi insanlar ona söverdi).",
     "examples": [
      "فَلَوْ رَجَعَ آدَمُ … لَمَا عَرَفَهُمْ",
      "وَلَوْ قِيلَ لَهُ … لَتَعَجَّبَ كَثِيرًا",
      "لَوْ ذَهَبَ إِلَى النَّاسِ … لَسَبَّهُ النَّاسُ"
     ],
     "items": [
      {
       "q": "فَ____ رَجَعَ آدَمُ وَرَأَى أَوْلَادَهُ لَمَا عَرَفَهُمْ.",
       "o": [
        "لَوْ",
        "هَلْ",
        "لَا"
       ],
       "a": 0
      },
      {
       "q": "وَلَوْ قِيلَ لَهُ: هٰذِهِ ذُرِّيَّتُكَ ____ كَثِيرًا.",
       "o": [
        "لَتَعَجَّبَ",
        "تَعَجَّبَ",
        "يَتَعَجَّبُ"
       ],
       "a": 0
      },
      {
       "q": "لَوْ ذَهَبَ إِلَى النَّاسِ ____ النَّاسُ.",
       "o": [
        "لَسَبَّهُ",
        "سَبَّهُ",
        "يَسُبُّهُ"
       ],
       "a": 0
      },
      {
       "q": "لَوْ رَجَعَ آدَمُ ____ عَرَفَهُمْ.",
       "o": [
        "لَمَا",
        "مَا",
        "لَيْسَ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "بَارَكَ اللهُ فِي {ذُرِّيَّةِ} آدَمَ. وَكَانَ النَّاسُ أُمَّةً {وَاحِدَةً}. وَلٰكِنَّ {الشَّيْطَانَ} حَسَدَهُمْ. وَكَانَ يَعْرِفُ أَنَّ اللهَ لَا يَغْفِرُ {الشِّرْكَ}. فَأَرَادَ أَنْ يَدْعُوَهُمْ إِلَى عِبَادَةِ {الْأَصْنَامِ}."
    },
    "think": {
     "q": "لِمَاذَا لَمْ يَقُلِ الشَّيْطَانُ لِلنَّاسِ مُبَاشَرَةً: اعْبُدُوا الْأَصْنَامَ؟",
     "qt": "Şeytan insanlara neden doğrudan «Putlara tapın» demedi?",
     "model": "Çünkü insanlar Allah'a ibadet ediyordu ve böyle açık bir çağrıyı hemen reddeder, ona söverlerdi. Şeytan bunu bildiği için açık bir yol değil, adım adım ilerleyen gizli bir yol (bir «kapı») aradı. Bir sonraki ünite bu hileyi anlatıyor."
    },
    "retell": [
     "ذُرِّيَّةُ آدَمَ",
     "أُمَّةٌ وَاحِدَةٌ",
     "إِبْلِيسُ",
     "حَسَدٌ",
     "الشِّرْكُ",
     "الْأَصْنَامُ"
    ],
    "quran": [
     {
      "ar": "كَانَ النَّاسُ أُمَّةً وَاحِدَةً",
      "ref": "Bakara 2:213",
      "tr": "İnsanlar tek bir ümmetti.",
      "inText": "وَكَانَ النَّاسُ أُمَّةً وَاحِدَةً"
     },
     {
      "ar": "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَى وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ",
      "ref": "Bakara 2:34",
      "tr": "Hani meleklere: Âdem'e secde edin, demiştik; İblis dışında hepsi secde etti. O kaçındı, büyüklük tasladı ve kâfirlerden oldu.",
      "inText": "إِنَّهُ لَمْ يَسْجُدْ لِآدَمَ"
     },
     {
      "ar": "إِنَّ اللهَ لَا يَغْفِرُ أَنْ يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذٰلِكَ لِمَنْ يَشَاءُ",
      "ref": "Nisâ 4:48",
      "tr": "Allah kendisine ortak koşulmasını bağışlamaz; bundan başkasını dilediği kimse için bağışlar.",
      "inText": "إِنَّ اللهَ لَا يَغْفِرُ الشِّرْكَ"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "بَعْدَ آدَمَ",
     "title_tr": "Âdem'den sonra",
     "s": [
      [
       "بَارَكَ اللهُ فِي ذُرِّيَّةِ آدَمَ، فَكَانَ فِيهَا رِجَالٌ كَثِيرٌ وَنِسَاءٌ.",
       "Allah Âdem'in soyunu bereketli kıldı; aralarında pek çok erkek ve kadın vardı."
      ],
      [
       "وَانْتَشَرَتْ ذُرِّيَّةُ آدَمَ وَكَثُرَتْ.",
       "Âdem'in soyu yayıldı ve çoğaldı."
      ],
      [
       "فَلَوْ رَجَعَ آدَمُ وَرَأَى أَوْلَادَهُ لَمَا عَرَفَهُمْ.",
       "Âdem geri dönüp çocuklarını görseydi onları tanımazdı."
      ],
      [
       "وَلَوْ قِيلَ لَهُ: هٰذِهِ ذُرِّيَّتُكَ يَا آدَمُ! لَتَعَجَّبَ كَثِيرًا وَقَالَ: سُبْحَانَ اللهِ! هٰؤُلَاءِ كُلُّهُمْ أَوْلَادِي؟ هٰذِهِ كُلُّهَا ذُرِّيَّتِي؟!",
       "Ona «Ey Âdem, bu senin soyun!» denseydi çok şaşırır ve derdi ki: Sübhanallah! Bunların hepsi benim çocuklarım mı? Bunların hepsi benim soyum mu?!"
      ],
      [
       "وَكَانَتْ لِذُرِّيَّةِ آدَمَ قُرًى كَثِيرَةٌ، وَبَنَوْا بُيُوتًا كَثِيرَةً.",
       "Âdem'in soyunun pek çok köyü vardı; pek çok ev yaptılar."
      ],
      [
       "وَكَانُوا يَحْرُثُونَ الْأَرْضَ وَيَزْرَعُونَ وَيَعِيشُونَ.",
       "Toprağı sürer, ekin eker ve geçinirlerdi."
      ],
      [
       "وَكَانَ النَّاسُ عَلَى دِينِ أَبِيهِمْ آدَمَ، يَعْبُدُونَ اللهَ وَلَا يُشْرِكُونَ بِهِ شَيْئًا!",
       "İnsanlar babaları Âdem'in dini üzereydi; Allah'a ibadet eder, O'na hiçbir şeyi ortak koşmazlardı!"
      ],
      [
       "وَكَانَ النَّاسُ أُمَّةً وَاحِدَةً أَبُوهُمْ آدَمُ وَرَبُّهُمُ اللهُ.",
       "İnsanlar tek bir ümmetti; babaları Âdem, Rableri Allah'tı."
      ]
     ]
    },
    {
     "n": 2,
     "title_ar": "حَسَدُ الشَّيْطَانِ",
     "title_tr": "Şeytanın kıskançlığı",
     "s": [
      [
       "وَلٰكِنْ كَيْفَ يَرْضَى إِبْلِيسُ وَذُرِّيَّتُهُ بِهٰذَا؟!",
       "Ama İblis ve soyu buna nasıl razı olur?!"
      ],
      [
       "أَلَا يَزَالُ النَّاسُ يَعْبُدُونَ اللهَ؟",
       "İnsanlar hâlâ Allah'a ibadet mi ediyor?"
      ],
      [
       "أَلَا يَزَالُ النَّاسُ أُمَّةً وَاحِدَةً لَا يَخْتَلِفُونَ؟ إِنَّ ذٰلِكَ لَا يَكُونُ! إِنَّ ذٰلِكَ لَا يَكُونُ!",
       "İnsanlar hâlâ ayrılığa düşmeyen tek bir ümmet mi? Bu olamaz! Bu olamaz!"
      ],
      [
       "هَلْ يَدْخُلُ ذُرِّيَّةُ آدَمَ الْجَنَّةَ، وَيَدْخُلُ إِبْلِيسُ وَذُرِّيَّتُهُ النَّارَ؟",
       "Âdem'in soyu cennete girsin de İblis ve soyu cehenneme mi girsin?"
      ],
      [
       "إِنَّ ذٰلِكَ لَا يَكُونُ، إِنَّ ذٰلِكَ لَا يَكُونُ!",
       "Bu olamaz, bu olamaz!"
      ],
      [
       "إِنَّهُ لَمْ يَسْجُدْ لِآدَمَ فَطَرَدَهُ اللهُ وَلَعَنَهُ.",
       "O, Âdem'e secde etmemişti; Allah da onu kovmuş ve lanetlemişti."
      ],
      [
       "أَلَا يَنْتَقِمُ مِنْ بَنِي آدَمَ فَيَدْخُلُوا مَعَهُ النَّارَ؟",
       "Âdemoğullarından intikam alıp onların da kendisiyle birlikte cehenneme girmelerini sağlamayacak mı?"
      ],
      [
       "لَا بُدَّ أَنْ يَكُونَ ذٰلِكَ! لَا بُدَّ أَنْ يَكُونَ ذٰلِكَ.",
       "Bu mutlaka olmalı! Bu mutlaka olmalı."
      ]
     ]
    },
    {
     "n": 3,
     "title_ar": "فِكْرَةُ الشَّيْطَانِ",
     "title_tr": "Şeytanın fikri",
     "s": [
      [
       "وَرَأَى الشَّيْطَانُ أَنْ يَدْعُوَ النَّاسَ إِلَى عِبَادَةِ الْأَصْنَامِ فَيَدْخُلُوا النَّارَ وَلَا يَدْخُلُوا الْجَنَّةَ أَبَدًا.",
       "Şeytan insanları putlara tapmaya çağırmaya karar verdi; böylece cehenneme girecekler ve cennete asla girmeyeceklerdi."
      ],
      [
       "وَكَانَ الشَّيْطَانُ يَعْرِفُ أَنَّ اللهَ لَا يَغْفِرُ الشِّرْكَ، وَيَغْفِرُ كُلَّ شَيْءٍ إِذَا أَرَادَ.",
       "Şeytan biliyordu ki Allah şirki bağışlamaz; dilerse her şeyi bağışlar."
      ],
      [
       "فَأَرَادَ الشَّيْطَانُ أَنْ يَدْعُوَهُمْ إِلَى الشِّرْكِ، فَلَا يَدْخُلُوا الْجَنَّةَ أَبَدًا.",
       "Şeytan onları şirke çağırmak istedi ki cennete asla girmesinler."
      ],
      [
       "وَلٰكِنْ كَيْفَ الطَّرِيقُ إِلَى ذٰلِكَ، وَالنَّاسُ يَعْبُدُونَ اللهَ؟",
       "Ama insanlar Allah'a ibadet ederken bunun yolu ne olabilirdi?"
      ],
      [
       "إِنَّهُ لَوْ ذَهَبَ إِلَى النَّاسِ وَقَالَ لَهُمْ: اعْبُدُوا الْأَصْنَامَ وَلَا تَعْبُدُوا اللهَ لَسَبَّهُ النَّاسُ وَضَرَبُوهُ.",
       "İnsanlara gidip «Putlara tapın, Allah'a ibadet etmeyin» deseydi insanlar ona söver ve onu döverlerdi."
      ],
      [
       "قَالُوا: مَعَاذَ اللهِ، أَنُشْرِكُ بِرَبِّنَا؟ أَنَعْبُدُ الْأَصْنَامَ؟",
       "Derlerdi ki: Allah korusun! Rabbimize ortak mı koşalım? Putlara mı tapalım?"
      ],
      [
       "أَنْتَ شَيْطَانٌ رَجِيمٌ! إِنَّكَ لَشَيْطَانٌ خَبِيثٌ!",
       "Sen kovulmuş bir şeytansın! Sen gerçekten kötü bir şeytansın!"
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "🗿",
   "title_ar": "مِنَ الصُّوَرِ إِلَى الْأَصْنَامِ",
   "title_tr": "Resimlerden putlara",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «صُوَرُ الصَّالِحِينَ» → «التَّمَاثِيلُ» → «الْأَصْنَامُ». Sence insanlar putlara nasıl tapmaya başladı?",
     "options": [
      [
       "خُطْوَةً خُطْوَةً",
       "Adım adım"
      ],
      [
       "فِي يَوْمٍ وَاحِدٍ",
       "Bir günde"
      ],
      [
       "لِأَنَّ نَبِيًّا أَمَرَهُمْ",
       "Bir peygamber emrettiği için"
      ]
     ]
    },
    "vocab": [
     [
      "صَالِحٌ ج صَالِحُونَ",
      "salih, iyi insan",
      "😇"
     ],
     [
      "صُورَةٌ ج صُوَرٌ",
      "resim",
      "🖼️"
     ],
     [
      "تِمْثَالٌ ج تَمَاثِيلُ",
      "heykel",
      "🗽"
     ],
     [
      "يَشْتَاقُ",
      "özler",
      "💭"
     ],
     [
      "يَتَبَرَّكُ بِـ",
      "uğurlu sayar",
      "✨"
     ],
     [
      "صَارَ",
      "oldu; başladı",
      "🔄"
     ]
    ]
   },
   "stop": {
    "section": 5,
    "after": 5,
    "prompt_tr": "İnsanlar ölen salihleri çok özlüyor ve «Onlar öldü, ne yapabiliriz?» diyor. Sence şeytan ne önerecek?",
    "options": [
     [
      "اعْمَلُوا لَهُمْ صُوَرًا",
      "Onların resimlerini yapın"
     ],
     [
      "انْسَوْهُمْ",
      "Onları unutun"
     ],
     [
      "اعْبُدُوا اللهَ وَحْدَهُ",
      "Yalnız Allah'a ibadet edin"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "مَاتَ رِجَالٌ صَالِحُونَ.",
     "قَالَ الشَّيْطَانُ: اعْمَلُوا لَهُمْ صُوَرًا.",
     "انْتَقَلُوا مِنَ الصُّوَرِ إِلَى التَّمَاثِيلِ.",
     "كَانُوا يَتَبَرَّكُونَ بِالتَّمَاثِيلِ.",
     "صَارَ الْأَبْنَاءُ يَسْجُدُونَ لَهَا.",
     "صَارَتِ الْأَصْنَامُ آلِهَةً."
    ],
    "questions": [
     {
      "q": "كَيْفَ كَانَ الرِّجَالُ الصَّالِحُونَ؟",
      "qt": "Salih adamlar nasıldı?",
      "o": [
       "يَخَافُونَ اللهَ وَيَعْبُدُونَهُ",
       "يَعْبُدُونَ الْأَصْنَامَ",
       "يَحْسُدُونَ النَّاسَ"
      ],
      "ot": [
       "Allah'tan korkar ve O'na ibadet ederlerdi",
       "Putlara taparlardı",
       "İnsanları kıskanırlardı"
      ],
      "a": 0,
      "ev": [
       "4.1"
      ]
     },
     {
      "q": "مَاذَا قَالَ الشَّيْطَانُ لِلنَّاسِ؟",
      "qt": "Şeytan insanlara ne dedi?",
      "o": [
       "اعْمَلُوا لَهُمْ صُوَرًا",
       "اعْبُدُوا الْأَصْنَامَ",
       "اذْبَحُوا لَهُمْ"
      ],
      "ot": [
       "Onların resimlerini yapın",
       "Putlara tapın",
       "Onlar için kurban kesin"
      ],
      "a": 0,
      "ev": [
       "5.6"
      ]
     },
     {
      "q": "هَلْ كَانَ النَّاسُ يَعْبُدُونَ التَّمَاثِيلَ أَوَّلَ الْأَمْرِ؟",
      "qt": "İnsanlar başta heykellere tapıyor muydu?",
      "o": [
       "لَا، كَانُوا يَعْبُدُونَ اللهَ",
       "نَعَمْ، مِنْ أَوَّلِ يَوْمٍ",
       "نَعَمْ، وَيَذْبَحُونَ لَهَا"
      ],
      "ot": [
       "Hayır, Allah'a ibadet ediyorlardı",
       "Evet, ilk günden beri",
       "Evet, ve onlara kurban kesiyorlardı"
      ],
      "a": 0,
      "ev": [
       "6.2"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ الْأَبْنَاءُ؟",
      "qt": "Oğullar ne yaptı?",
      "o": [
       "صَارُوا يَسْجُدُونَ لَهَا",
       "كَسَرُوا التَّمَاثِيلَ",
       "تَرَكُوا التَّمَاثِيلَ"
      ],
      "ot": [
       "Onlara secde etmeye başladılar",
       "Heykelleri kırdılar",
       "Heykelleri bıraktılar"
      ],
      "a": 0,
      "ev": [
       "7.3"
      ]
     },
     {
      "q": "مَا أَسْمَاءُ هٰذِهِ الْآلِهَةِ؟",
      "qt": "Bu ilahların adları ne?",
      "o": [
       "وَدٌّ وَسُوَاعٌ وَيَغُوثُ وَيَعُوقُ وَنَسْرٌ",
       "آزَرُ وَإِبْلِيسُ",
       "اللَّاتُ وَالْعُزَّى"
      ],
      "ot": [
       "Vedd, Süvâ, Yeğûs, Yeûk ve Nesr",
       "Âzer ve İblis",
       "Lât ve Uzzâ"
      ],
      "a": 0,
      "ev": [
       "7.6"
      ]
     }
    ],
    "focus": {
     "title": "صَارَ: «oldu» / «-meye başladı»",
     "explain": "<b>صَارَ</b> bir değişimi anlatır. İsimle: <span class='ar-inline'>صَارَتِ الْأَصْنَامُ آلِهَةً</span> (putlar ilah oldu; isim üstünlü olur). Muzari fiille: <span class='ar-inline'>صَارُوا يَسْجُدُونَ</span> (secde etmeye başladılar). Özne çoğulsa: صَارُوا; dişil/çoğul cansız ise: صَارَتْ.",
     "examples": [
      "صَارُوا يَسْجُدُونَ لَهَا",
      "صَارُوا يَسْأَلُونَهَا",
      "صَارَتْ هٰذِهِ الْأَصْنَامُ آلِهَةً"
     ],
     "items": [
      {
       "q": "فَزَادَ الْأَبْنَاءُ عَلَى الْآبَاءِ، وَ____ يَسْجُدُونَ لَهَا.",
       "o": [
        "صَارُوا",
        "صَارَ",
        "صَارَتْ"
       ],
       "a": 0
      },
      {
       "q": "وَهٰكَذَا ____ هٰذِهِ الْأَصْنَامُ آلِهَةً.",
       "o": [
        "صَارَتْ",
        "صَارُوا",
        "صِرْتَ"
       ],
       "a": 0
      },
      {
       "q": "صَارَتِ الْأَصْنَامُ ____.",
       "o": [
        "آلِهَةً",
        "آلِهَةٌ",
        "آلِهَةٍ"
       ],
       "a": 0
      },
      {
       "q": "وَصَارُوا ____ ، وَيَذْبَحُونَ لَهَا.",
       "o": [
        "يَسْأَلُونَهَا",
        "سَأَلُوهَا",
        "يَسْأَلُهَا"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ الشَّيْطَانُ: اعْمَلُوا لَهُمْ {صُوَرًا}. ثُمَّ انْتَقَلُوا إِلَى {التَّمَاثِيلِ}. وَكَانُوا {يَتَبَرَّكُونَ} بِهَا. وَزَادَ {الْأَبْنَاءُ} عَلَى الْآبَاءِ. وَصَارَتِ الْأَصْنَامُ {آلِهَةً}."
    },
    "think": {
     "q": "لِمَاذَا لَمْ يَعْبُدِ الْآبَاءُ التَّمَاثِيلَ وَعَبَدَهَا الْأَبْنَاءُ؟",
     "qt": "Babalar heykellere tapmadığı hâlde oğullar neden taptı?",
     "model": "Babalar heykellerin sadece salih insanları hatırlatan taşlar olduğunu biliyordu. Oğullar ise yalnızca babalarının onlara gösterdiği büyük saygıyı (öpme, dokunma, başı eğme) gördü, nedenini bilmedi ve bir adım daha ileri gitti. Küçük sapmalar nesilden nesle büyüyebilir."
    },
    "retell": [
     "الصَّالِحُونَ",
     "صُوَرٌ",
     "تَمَاثِيلُ",
     "يَتَبَرَّكُونَ",
     "الْأَبْنَاءُ",
     "آلِهَةٌ"
    ],
    "quran": [
     {
      "ar": "وَقَالُوا لَا تَذَرُنَّ آلِهَتَكُمْ وَلَا تَذَرُنَّ وَدًّا وَلَا سُوَاعًا وَلَا يَغُوثَ وَيَعُوقَ وَنَسْرًا",
      "ref": "Nûh 71:23",
      "tr": "Dediler ki: Sakın ilahlarınızı bırakmayın; Vedd'i, Süvâ'ı, Yeğûs'u, Yeûk'u ve Nesr'i asla bırakmayın.",
      "inText": "هٰذَا وَدٌّ، وَذٰلِكَ سُوَاعٌ، وَهٰذَا يَغُوثُ..."
     }
    ]
   },
   "sections": [
    {
     "n": 4,
     "title_ar": "حِيلَةُ الشَّيْطَانِ",
     "title_tr": "Şeytanın hilesi",
     "s": [
      [
       "وَلٰكِنَّ الشَّيْطَانَ وَجَدَ بَابًا يَدْخُلُ مِنْهُ إِلَى رُؤُوسِ النَّاسِ.",
       "Fakat şeytan insanların kafasına girebileceği bir kapı buldu."
      ],
      [
       "كَانَ رِجَالٌ يَخَافُونَ اللهَ، وَيَعْبُدُونَهُ لَيْلًا وَنَهَارًا، وَيَذْكُرُونَهُ ذِكْرًا كَثِيرًا.",
       "Allah'tan korkan, gece gündüz O'na ibadet eden ve O'nu çokça anan adamlar vardı."
      ],
      [
       "وَكَانُوا يُحِبُّونَ اللهَ، وَكَانَ اللهُ يُحِبُّهُمْ وَيَسْتَجِيبُ لَهُمْ.",
       "Onlar Allah'ı severdi; Allah da onları sever ve dualarına karşılık verirdi."
      ],
      [
       "وَكَانَ النَّاسُ يُحِبُّونَهُمْ وَيُعَظِّمُونَهُمْ، وَكَانَ الشَّيْطَانُ يَعْرِفُ ذٰلِكَ جَيِّدًا.",
       "İnsanlar onları sever ve onlara büyük saygı gösterirdi; şeytan da bunu çok iyi biliyordu."
      ],
      [
       "وَقَدْ مَاتَ هٰؤُلَاءِ وَانْتَقَلُوا إِلَى رَحْمَةِ اللهِ!",
       "Bu adamlar ölmüş ve Allah'ın rahmetine kavuşmuşlardı!"
      ],
      [
       "ذَهَبَ الشَّيْطَانُ إِلَى النَّاسِ وَذَكَرَ هٰؤُلَاءِ الرِّجَالَ.",
       "Şeytan insanlara gitti ve bu adamlardan söz etti."
      ],
      [
       "وَقَالَ: كَيْفَ كَانَ فِيكُمْ فُلَانٌ وَفُلَانٌ؟",
       "Ve dedi ki: Aranızdaki falanca ve falanca nasıl biriydi?"
      ],
      [
       "قَالُوا: سُبْحَانَ اللهِ! رِجَالُ اللهِ وَأَوْلِيَاؤُهُ! أُولٰئِكَ إِذَا دَعَوْا أَجَابَهُمْ، وَإِذَا سَأَلُوا أَعْطَاهُمْ.",
       "Dediler ki: Sübhanallah! Onlar Allah'ın adamları ve dostlarıydı! Dua ettiklerinde Allah onlara karşılık verir, bir şey istediklerinde verirdi."
      ]
     ]
    },
    {
     "n": 5,
     "title_ar": "صُوَرُ الصَّالِحِينَ",
     "title_tr": "Salihlerin resimleri",
     "s": [
      [
       "قَالَ الشَّيْطَانُ: فَكَيْفَ حُزْنُكُمْ عَلَيْهِمْ؟",
       "Şeytan dedi ki: Onlar için üzüntünüz nasıl?"
      ],
      [
       "قَالُوا: شَدِيدٌ.",
       "Dediler ki: Çok büyük."
      ],
      [
       "قَالَ: وَكَيْفَ اشْتِيَاقُكُمْ إِلَيْهِمْ؟",
       "Dedi ki: Peki onlara özleminiz nasıl?"
      ],
      [
       "قَالُوا: عَظِيمٌ!",
       "Dediler ki: Çok büyük!"
      ],
      [
       "قَالَ: وَلِمَاذَا لَا تَنْظُرُونَ إِلَيْهِمْ كُلَّ يَوْمٍ؟",
       "Dedi ki: Öyleyse neden onlara her gün bakmıyorsunuz?"
      ],
      [
       "قَالُوا: وَكَيْفَ السَّبِيلُ إِلَى ذٰلِكَ وَقَدْ مَاتُوا؟",
       "Dediler ki: Onlar öldükten sonra bunun yolu ne?"
      ],
      [
       "قَالَ: اعْمَلُوا لَهُمْ صُوَرًا وَانْظُرُوا إِلَيْهِمْ كُلَّ صَبَاحٍ.",
       "Dedi ki: Onların resimlerini yapın ve her sabah onlara bakın."
      ],
      [
       "وَأُعْجِبَ النَّاسُ بِرَأْيِ إِبْلِيسَ وَصَوَّرُوا الصَّالِحِينَ.",
       "İnsanlar İblis'in fikrini beğendi ve salihlerin resimlerini yaptılar."
      ],
      [
       "وَكَانُوا يَنْظُرُونَ إِلَى هٰذِهِ الصُّوَرِ كُلَّ يَوْمٍ، وَإِذَا رَأَوْهَا ذَكَرُوا أُولٰئِكَ الصَّالِحِينَ.",
       "Bu resimlere her gün bakar, onları görünce o salih insanları hatırlarlardı."
      ]
     ]
    },
    {
     "n": 6,
     "title_ar": "مِنَ الصُّوَرِ إِلَى التَّمَاثِيلِ",
     "title_tr": "Resimlerden heykellere",
     "s": [
      [
       "وَانْتَقَلُوا مِنَ الصُّوَرِ إِلَى التَّمَاثِيلِ.",
       "Resimlerden heykellere geçtiler."
      ],
      [
       "وَعَمِلُوا لِلصَّالِحِينَ تَمَاثِيلَ كَثِيرَةً، وَوَضَعُوهَا فِي بُيُوتِهِمْ وَفِي مَسَاجِدِهِمْ.",
       "Salihler için pek çok heykel yaptılar ve onları evlerine ve mescitlerine koydular."
      ],
      [
       "وَكَانُوا يَعْبُدُونَ اللهَ لَا يُشْرِكُونَ بِهِ شَيْئًا.",
       "(Hâlâ) Allah'a ibadet ediyor, O'na hiçbir şeyi ortak koşmuyorlardı."
      ],
      [
       "وَكَانُوا يَعْرِفُونَ أَنَّ هٰذِهِ تَمَاثِيلُ لِلصَّالِحِينَ.",
       "Bunların salihlerin heykelleri olduğunu biliyorlardı."
      ],
      [
       "وَأَنَّ هٰذِهِ حِجَارَةٌ لَا تَنْفَعُهُمْ وَلَا تَضُرُّهُمْ وَلَا تَرْزُقُهُمْ.",
       "Ve bunların kendilerine ne fayda ne zarar veren, ne de rızık veren taşlar olduğunu (biliyorlardı)."
      ],
      [
       "وَلٰكِنَّهُمْ كَانُوا يَتَبَرَّكُونَ بِهَا وَيُعَظِّمُونَهَا، لِأَنَّهَا تَمَاثِيلُ لِلصَّالِحِينَ.",
       "Fakat onları uğurlu sayar ve onlara saygı gösterirlerdi, çünkü onlar salihlerin heykelleriydi."
      ],
      [
       "وَكَثُرَتْ هٰذِهِ التَّمَاثِيلُ فِيهِمْ، وَكَثُرَ تَعْظِيمُهَا.",
       "Bu heykeller aralarında çoğaldı, onlara gösterilen saygı da arttı."
      ],
      [
       "وَإِذَا مَاتَ فِيهِمْ رَجُلٌ صَالِحٌ عَمِلُوا لَهُ تِمْثَالًا وَسَمَّوْهُ بِاسْمِهِ.",
       "Aralarında salih bir adam ölünce onun için bir heykel yapar ve ona onun adını verirlerdi."
      ]
     ]
    },
    {
     "n": 7,
     "title_ar": "مِنَ التَّمَاثِيلِ إِلَى الْأَصْنَامِ",
     "title_tr": "Heykellerden putlara",
     "s": [
      [
       "وَمَضَى هٰؤُلَاءِ، وَرَأَى الْأَوْلَادُ آبَاءَهُمْ يَتَبَرَّكُونَ بِهَا، وَرَأَوْا آبَاءَهُمْ يُعَظِّمُونَهَا تَعْظِيمًا شَدِيدًا.",
       "Bu insanlar da göçüp gitti; çocuklar babalarının bu heykelleri uğurlu saydığını ve onlara çok büyük saygı gösterdiğini gördüler."
      ],
      [
       "وَكَانُوا يَرَوْنَهُمْ يُقَبِّلُونَ هٰذِهِ التَّمَاثِيلَ، وَيَلْمَسُونَهَا وَيَدْعُونَ عِنْدَهَا.",
       "Babalarının bu heykelleri öptüğünü, onlara dokunduğunu ve yanlarında dua ettiğini görürlerdi."
      ],
      [
       "وَكَانُوا يَرَوْنَهُمْ يَخْفِضُونَ رُؤُوسَهُمْ وَيَرْكَعُونَ عِنْدَهَا.",
       "Onların yanında başlarını eğdiklerini ve rükû ettiklerini görürlerdi."
      ],
      [
       "فَزَادَ الْأَبْنَاءُ عَلَى الْآبَاءِ، وَصَارُوا يَسْجُدُونَ لَهَا.",
       "Oğullar babalarını da aştı ve heykellere secde etmeye başladılar."
      ],
      [
       "وَصَارُوا يَسْأَلُونَهَا، وَيَذْبَحُونَ لَهَا.",
       "Onlardan dilekte bulunmaya ve onlar için kurban kesmeye başladılar."
      ],
      [
       "وَهٰكَذَا صَارَتْ هٰذِهِ الْأَصْنَامُ آلِهَةً، وَصَارَ النَّاسُ يَعْبُدُونَهَا كَمَا كَانُوا يَعْبُدُونَ اللهَ مِنْ قَبْلُ.",
       "Böylece bu putlar ilah hâline geldi; insanlar daha önce Allah'a ibadet ettikleri gibi onlara tapmaya başladılar."
      ],
      [
       "وَكَثُرَتْ هٰذِهِ الْآلِهَةُ فِيهِمْ، هٰذَا وَدٌّ، وَذٰلِكَ سُوَاعٌ، وَهٰذَا يَغُوثُ، وَذٰلِكَ يَعُوقُ، وَهٰذَا نَسْرٌ.",
       "Bu ilahlar aralarında çoğaldı: Bu Vedd, şu Süvâ, bu Yeğûs, şu Yeûk, bu da Nesr."
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "📜",
   "title_ar": "الرَّسُولُ",
   "title_tr": "Elçi",
   "pre": {
    "predict": {
     "prompt_tr": "Başlık: «بَشَرٌ أَمْ مَلَكٌ» (insan mı, melek mi?). Sence Allah insanlara bir insan mı gönderecek, bir melek mi?",
     "options": [
      [
       "بَشَرًا مِنْهُمْ",
       "Onlardan bir insan"
      ],
      [
       "مَلَكًا مِنَ السَّمَاءِ",
       "Gökten bir melek"
      ],
      [
       "لَا يُرْسِلُ أَحَدًا",
       "Kimseyi göndermeyecek"
      ]
     ]
    },
    "vocab": [
     [
      "غَضَبٌ",
      "öfke, gazap",
      "⛈️"
     ],
     [
      "رَسُولٌ",
      "elçi",
      "📜"
     ],
     [
      "بَشَرٌ",
      "insan",
      "🧍"
     ],
     [
      "مَلَكٌ",
      "melek",
      "👼"
     ],
     [
      "يَنْصَحُ",
      "öğüt verir",
      "🗣️"
     ],
     [
      "أَمِينٌ",
      "güvenilir",
      "🤝"
     ]
    ]
   },
   "stop": {
    "section": 10,
    "after": 0,
    "prompt_tr": "Allah elçinin bir insan olmasını istedi. Sence neden?",
    "options": [
     [
      "لِيَعْرِفَهُ النَّاسُ وَيَفْهَمُوا كَلَامَهُ",
      "İnsanlar onu tanısın ve sözünü anlasın diye"
     ],
     [
      "لِأَنَّ الْمَلَائِكَةَ لَا يَتَكَلَّمُونَ",
      "Çünkü melekler konuşmaz"
     ],
     [
      "لِأَنَّهُ غَنِيٌّ",
      "Çünkü o zengin"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "غَضِبَ اللهُ عَلَى النَّاسِ.",
     "حَبَسَ اللهُ الْمَطَرَ.",
     "أَرَادَ اللهُ أَنْ يُرْسِلَ رَسُولًا.",
     "أَرَادَ اللهُ أَنْ يَكُونَ الرَّسُولُ بَشَرًا.",
     "اخْتَارَ اللهُ نُوحًا.",
     "قَالَ نُوحٌ: إِنِّي لَكُمْ رَسُولٌ أَمِينٌ."
    ],
    "questions": [
     {
      "q": "مَاذَا فَعَلَ اللهُ لَمَّا غَضِبَ عَلَى النَّاسِ؟",
      "qt": "Allah insanlara gazap edince ne yaptı?",
      "o": [
       "حَبَسَ الْمَطَرَ",
       "أَرْسَلَ الطُّوفَانَ",
       "أَعْطَاهُمْ رِزْقًا كَثِيرًا"
      ],
      "ot": [
       "Yağmuru kesti",
       "Tufanı gönderdi",
       "Onlara bol rızık verdi"
      ],
      "a": 0,
      "ev": [
       "8.6"
      ]
     },
     {
      "q": "هَلْ تَابَ النَّاسُ؟",
      "qt": "İnsanlar tövbe etti mi?",
      "o": [
       "لَا، مَا تَابُوا",
       "نَعَمْ، تَابُوا",
       "نَعَمْ، وَكَسَرُوا الْأَصْنَامَ"
      ],
      "ot": [
       "Hayır, tövbe etmediler",
       "Evet, tövbe ettiler",
       "Evet, ve putları kırdılar"
      ],
      "a": 0,
      "ev": [
       "8.7"
      ]
     },
     {
      "q": "لِمَاذَا أَرَادَ اللهُ أَنْ يَكُونَ الرَّسُولُ بَشَرًا؟",
      "qt": "Allah elçinin neden insan olmasını istedi?",
      "o": [
       "لِيَعْرِفَهُ النَّاسُ وَيَفْهَمُوا كَلَامَهُ",
       "لِأَنَّ الْبَشَرَ لَا يَمُوتُونَ",
       "لِأَنَّ الْمَلَائِكَةَ كَثِيرُونَ"
      ],
      "ot": [
       "İnsanlar onu tanısın ve sözünü anlasın diye",
       "Çünkü insanlar ölmez",
       "Çünkü melekler çok"
      ],
      "a": 0,
      "ev": [
       "10.0"
      ]
     },
     {
      "q": "مَنِ اخْتَارَ اللهُ لِرِسَالَتِهِ؟",
      "qt": "Allah risaleti için kimi seçti?",
      "o": [
       "نُوحًا",
       "أَحَدَ الْأَغْنِيَاءِ",
       "أَحَدَ الرُّؤَسَاءِ"
      ],
      "ot": [
       "Nûh'u",
       "Zenginlerden birini",
       "İleri gelenlerden birini"
      ],
      "a": 0,
      "ev": [
       "11.1"
      ]
     },
     {
      "q": "كَيْفَ كَانَ نُوحٌ؟",
      "qt": "Nûh nasıl biriydi?",
      "o": [
       "صَادِقًا أَمِينًا",
       "غَنِيًّا مُتَكَبِّرًا",
       "غَاضِبًا"
      ],
      "ot": [
       "Doğru sözlü ve güvenilir",
       "Zengin ve kibirli",
       "Öfkeli"
      ],
      "a": 0,
      "ev": [
       "11.4"
      ]
     }
    ],
    "focus": {
     "title": "Şart: إِذَا كَانَ … قَالَ …",
     "explain": "<b>إِذَا</b> «-dığında, -se» anlamında bir koşul kurar; iki kısım da genellikle geçmiş zaman biçimindedir ama anlam geneldir: <span class='ar-inline'>إِذَا كَانَ الرَّسُولُ مَلَكًا قَالَ النَّاسُ …</span> (elçi melek olsa insanlar derdi ki …). Metin aynı kalıbı tekrar ederek iki ihtimali karşılaştırıyor: مَلَكًا / بَشَرًا.",
     "examples": [
      "وَإِذَا كَانَ الرَّسُولُ مَلَكًا قَالَ النَّاسُ",
      "وَإِذَا كَانَ الرَّسُولُ بَشَرًا قَالَ"
     ],
     "items": [
      {
       "q": "____ كَانَ الرَّسُولُ مَلَكًا قَالَ النَّاسُ: هُوَ مَلَكٌ وَنَحْنُ بَشَرٌ!",
       "o": [
        "إِذَا",
        "هَلْ",
        "لِمَاذَا"
       ],
       "a": 0
      },
      {
       "q": "وَإِذَا كَانَ الرَّسُولُ ____ قَالَ: أَنَا مِثْلُكُمْ.",
       "o": [
        "بَشَرًا",
        "بَشَرٌ",
        "بَشَرٍ"
       ],
       "a": 0
      },
      {
       "q": "إِنَّكَ لَا تَعْطَشُ وَلَا ____.",
       "o": [
        "تَجُوعُ",
        "نَجُوعُ",
        "أَجُوعُ"
       ],
       "a": 0
      },
      {
       "q": "وَنَحْنُ بَشَرٌ ____ وَنَجُوعُ.",
       "o": [
        "نَعْطَشُ",
        "تَعْطَشُ",
        "يَعْطَشُ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "غَضِبَ اللهُ عَلَى النَّاسِ وَحَبَسَ {الْمَطَرَ}. وَأَرَادَ اللهُ أَنْ يُرْسِلَ إِلَيْهِمْ {رَسُولًا}. وَأَرَادَ أَنْ يَكُونَ الرَّسُولُ {بَشَرًا}. وَاخْتَارَ اللهُ {نُوحًا}. وَقَالَ نُوحٌ: إِنِّي لَكُمْ رَسُولٌ {أَمِينٌ}."
    },
    "think": {
     "q": "لَوْ كَانَ الرَّسُولُ مَلَكًا، مَاذَا يَقُولُ النَّاسُ؟",
     "qt": "Elçi bir melek olsaydı insanlar ne derdi? Metin buna nasıl cevap veriyor?",
     "model": "«O melek, biz insanız; o susamaz, acıkmaz, hastalanmaz; biz onun gibi ibadet edemeyiz» diyerek mazeret bulurlardı. İnsan bir elçi ise «Ben de sizin gibi yiyip içiyor, hastalanıyorum ama Allah'a ibadet ediyorum» der; böylece insanların mazereti kalmaz."
    },
    "retell": [
     "غَضِبَ اللهُ",
     "الْمَطَرُ",
     "رَسُولٌ",
     "بَشَرٌ",
     "مَلَكٌ",
     "نُوحٌ"
    ],
    "quran": [
     {
      "ar": "قُلْ لَوْ كَانَ فِي الْأَرْضِ مَلَائِكَةٌ يَمْشُونَ مُطْمَئِنِّينَ لَنَزَّلْنَا عَلَيْهِمْ مِنَ السَّمَاءِ مَلَكًا رَسُولًا",
      "ref": "İsrâ 17:95",
      "tr": "De ki: Yeryüzünde rahat rahat dolaşan melekler olsaydı, elbette onlara gökten elçi olarak bir melek indirirdik.",
      "inText": "بَشَرٌ أَمْ مَلَكٌ (ilgili ayet)"
     },
     {
      "ar": "إِنَّا أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ أَنْ أَنْذِرْ قَوْمَكَ مِنْ قَبْلِ أَنْ يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ",
      "ref": "Nûh 71:1",
      "tr": "Biz Nûh'u kavmine, kendilerine acı bir azap gelmeden önce kavmini uyar diye gönderdik.",
      "inText": "«أَنْ أَنْذِرْ قَوْمَكَ...»"
     },
     {
      "ar": "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ",
      "ref": "Şuarâ 26:107",
      "tr": "Şüphesiz ben size gönderilmiş güvenilir bir elçiyim.",
      "inText": "«إِنِّي لَكُمْ رَسُولٌ أَمِينٌ»"
     }
    ]
   },
   "sections": [
    {
     "n": 8,
     "title_ar": "غَضَبُ اللهِ",
     "title_tr": "Allah'ın gazabı",
     "s": [
      [
       "وَغَضِبَ اللهُ عَلَى النَّاسِ غَضَبًا شَدِيدًا وَلَعَنَهُمْ.",
       "Allah insanlara çok gazap etti ve onları lanetledi."
      ],
      [
       "وَلِمَاذَا لَا يَغْضَبُ اللهُ عَلَى النَّاسِ وَلَا يَلْعَنُهُمْ؟",
       "Allah insanlara neden gazap etmesin ve onları neden lanetlemesin?"
      ],
      [
       "أَلِهٰذَا خَلَقَهُمْ، أَلِهٰذَا يَرْزُقُهُمْ؟",
       "Onları bunun için mi yarattı, onlara bunun için mi rızık veriyor?"
      ],
      [
       "يَمْشُونَ عَلَى أَرْضِ اللهِ وَيَكْفُرُونَ بِاللهِ!",
       "Allah'ın yeryüzünde yürüyorlar ve Allah'ı inkâr ediyorlar!"
      ],
      [
       "وَيَأْكُلُونَ رِزْقَ اللهِ وَيُشْرِكُونَ بِاللهِ!",
       "Allah'ın rızkını yiyorlar ve Allah'a ortak koşuyorlar!"
      ],
      [
       "إِنَّ هٰذَا لَظُلْمٌ عَظِيمٌ! إِنَّ هٰذَا لَظُلْمٌ عَظِيمٌ!",
       "Bu gerçekten büyük bir zulüm! Bu gerçekten büyük bir zulüm!"
      ],
      [
       "فَغَضِبَ اللهُ عَلَى النَّاسِ، وَحَبَسَ الْمَطَرَ وَضَيَّقَ عَلَيْهِمْ، وَقَلَّ الْحَرْثُ وَقَلَّ النَّسْلُ.",
       "Allah insanlara gazap etti; yağmuru kesti ve onları darlığa düşürdü; ekin de nesil de azaldı."
      ],
      [
       "وَلٰكِنَّ النَّاسَ مَا عَقَلُوا، وَلٰكِنَّ النَّاسَ مَا تَابُوا.",
       "Fakat insanlar akıllanmadı; insanlar tövbe etmedi."
      ]
     ]
    },
    {
     "n": 9,
     "title_ar": "الرَّسُولُ",
     "title_tr": "Elçi",
     "s": [
      [
       "وَأَرَادَ اللهُ أَنْ يُرْسِلَ إِلَيْهِمْ رَجُلًا مِنْهُمْ يُكَلِّمُهُمْ وَيَنْصَحُ لَهُمْ.",
       "Allah onlara, aralarından onlarla konuşacak ve onlara öğüt verecek bir adam göndermek istedi."
      ],
      [
       "إِنَّ اللهَ لَا يُكَلِّمُ وَاحِدًا وَاحِدًا، إِنَّ اللهَ لَا يُخَاطِبُ كُلَّ أَحَدٍ يَقُولُ لَهُ افْعَلْ كَذَا، افْعَلْ كَذَا.",
       "Allah insanlarla tek tek konuşmaz; Allah herkese ayrı ayrı «şunu yap, bunu yap» diye hitap etmez."
      ],
      [
       "إِنَّ الْمُلُوكَ لَا يُكَلِّمُونَ وَاحِدًا وَاحِدًا.",
       "Krallar bile insanlarla tek tek konuşmaz."
      ],
      [
       "إِنَّ الْمُلُوكَ لَا يَذْهَبُونَ إِلَى كُلِّ أَحَدٍ يَقُولُونَ لَهُ افْعَلْ كَذَا، افْعَلْ كَذَا.",
       "Krallar herkese gidip «şunu yap, bunu yap» demezler."
      ],
      [
       "وَالْمُلُوكُ بَشَرٌ كَالْبَشَرِ، يَقْدِرُ كُلُّ أَحَدٍ أَنْ يَرَاهُمْ وَيَسْمَعَ كَلَامَهُمْ، وَلَا يَقْدِرُ أَحَدٌ أَنْ يَرَى اللهَ وَيَسْمَعَ كَلَامَهُ وَيُكَلِّمَهُ، وَلَا يَقْدِرُ عَلَى ذٰلِكَ إِلَّا مَنْ أَرَادَ اللهُ، إِذَا أَرَادَ اللهُ.",
       "Krallar da diğer insanlar gibi insandır; herkes onları görebilir ve sözlerini duyabilir. Ama hiç kimse Allah'ı görüp sözünü duyamaz ve O'nunla konuşamaz; buna ancak Allah'ın dilediği kişi, Allah dilediğinde güç yetirebilir."
      ],
      [
       "فَأَرَادَ اللهُ أَنْ يُرْسِلَ إِلَى النَّاسِ رَسُولًا يُكَلِّمُهُمْ وَيَنْصَحُ لَهُمْ.",
       "Bu yüzden Allah insanlara, onlarla konuşacak ve onlara öğüt verecek bir elçi göndermek istedi."
      ]
     ]
    },
    {
     "n": 10,
     "title_ar": "بَشَرٌ أَمْ مَلَكٌ",
     "title_tr": "İnsan mı, melek mi?",
     "s": [
      [
       "وَأَرَادَ اللهُ أَنْ يَكُونَ هٰذَا الرَّسُولُ بَشَرًا، وَأَنْ يَكُونَ وَاحِدًا مِنَ النَّاسِ، يَعْرِفُهُ النَّاسُ وَيَفْهَمُونَ كَلَامَهُ.",
       "Allah bu elçinin bir insan olmasını, insanlardan biri olmasını istedi; insanlar onu tanısın ve sözünü anlasın diye."
      ],
      [
       "وَإِذَا كَانَ الرَّسُولُ مَلَكًا قَالَ النَّاسُ: مَا لَنَا وَلَهُ؟ هُوَ مَلَكٌ وَنَحْنُ بَشَرٌ!",
       "Elçi bir melek olsaydı insanlar derdi ki: Bizimle onun ne ilgisi var? O bir melek, biz ise insanız!"
      ],
      [
       "نَحْنُ نَأْكُلُ وَنَشْرَبُ وَلَنَا أَهْلٌ وَذُرِّيَّةٌ فَكَيْفَ نَعْبُدُ اللهَ؟",
       "Biz yiyip içiyoruz, ailemiz ve çocuklarımız var; Allah'a nasıl ibadet edelim?"
      ],
      [
       "وَإِذَا كَانَ الرَّسُولُ بَشَرًا قَالَ أَنَا آكُلُ وَأَشْرَبُ وَلِي أَهْلٌ وَذُرِّيَّةٌ وَأَنَا أَعْبُدُ اللهَ فَلِمَ لَا تَعْبُدُونَ اللهَ؟",
       "Elçi bir insan olunca der ki: Ben de yiyip içiyorum, benim de ailem ve çocuklarım var ve ben Allah'a ibadet ediyorum; siz neden Allah'a ibadet etmiyorsunuz?"
      ],
      [
       "وَإِذَا كَانَ الرَّسُولُ مَلَكًا قَالَ النَّاسُ: إِنَّكَ لَا تَعْطَشُ وَلَا تَجُوعُ، وَإِنَّكَ لَا تَمْرَضُ وَلَا تَمُوتُ فَتَعْبُدُ اللهَ وَتَذْكُرُهُ دَائِمًا!",
       "Elçi bir melek olsaydı insanlar derdi ki: Sen ne susarsın ne acıkırsın, ne hastalanırsın ne ölürsün; bu yüzden Allah'a ibadet eder ve O'nu hep anarsın!"
      ],
      [
       "وَنَحْنُ بَشَرٌ نَعْطَشُ وَنَجُوعُ، وَنَمْرَضُ وَنَمُوتُ، فَكَيْفَ نَعْبُدُ اللهَ وَنَذْكُرُهُ دَائِمًا؟",
       "Biz ise insanız; susarız, acıkırız, hastalanır ve ölürüz; Allah'a nasıl ibadet edip O'nu hep analım?"
      ],
      [
       "وَإِذَا كَانَ الرَّسُولُ بَشَرًا قَالَ أَنَا مِثْلُكُمْ أَعْطَشُ وَأَجُوعُ وَأَمْرَضُ وَأَمُوتُ وَأَعْبُدُ اللهَ وَأَذْكُرُهُ، فَلِمَاذَا لَا تَعْبُدُونَ اللهَ وَلَا تَذْكُرُونَهُ؟ فَيَنْقَطِعُ كَلَامُ النَّاسِ وَلَا يَجِدُونَ عُذْرًا.",
       "Elçi bir insan olunca der ki: Ben de sizin gibiyim; susarım, acıkırım, hastalanırım, ölürüm; yine de Allah'a ibadet eder ve O'nu anarım. Siz neden Allah'a ibadet etmiyor ve O'nu anmıyorsunuz? Böylece insanların sözü kesilir ve bir mazeret bulamazlar."
      ]
     ]
    },
    {
     "n": 11,
     "title_ar": "نُوحٌ الرَّسُولُ",
     "title_tr": "Elçi Nûh",
     "s": [
      [
       "وَأَرَادَ اللهُ أَنْ يُرْسِلَ نُوحًا إِلَى قَوْمِهِ.",
       "Allah Nûh'u kavmine göndermek istedi."
      ],
      [
       "كَانَ فِي الْقَوْمِ أَغْنِيَاءُ وَرُؤَسَاءُ، وَلٰكِنَّ اللهَ اخْتَارَ نُوحًا لِرِسَالَتِهِ. وَلَمْ يَخْتَرْ أَحَدًا مِنْهُمْ.",
       "Kavmin içinde zenginler ve ileri gelenler vardı; ama Allah risaleti için Nûh'u seçti, onlardan hiçbirini seçmedi."
      ],
      [
       "اللهُ يَعْلَمُ مَنْ يَحْمِلُ رِسَالَتَهُ، وَاللهُ يَعْلَمُ مَنْ يَحْمِلُ أَمَانَتَهُ.",
       "Allah, risaletini kimin taşıyacağını bilir; Allah, emanetini kimin taşıyacağını bilir."
      ],
      [
       "وَكَانَ نُوحٌ رَجُلًا صَالِحًا كَرِيمًا، وَكَانَ نُوحٌ رَجُلًا عَاقِلًا حَلِيمًا.",
       "Nûh salih ve değerli bir adamdı; Nûh akıllı ve yumuşak huylu bir adamdı."
      ],
      [
       "وَكَانَ نُوحٌ نَاصِحًا شَفِيقًا، وَكَانَ نُوحٌ صَادِقًا أَمِينًا.",
       "Nûh öğüt veren ve şefkatli biriydi; Nûh doğru sözlü ve güvenilirdi."
      ],
      [
       "اخْتَارَ اللهُ نُوحًا لِرِسَالَتِهِ وَأَوْحَى إِلَيْهِ: «أَنْ أَنْذِرْ قَوْمَكَ مِنْ قَبْلِ أَنْ يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ».",
       "Allah Nûh'u risaleti için seçti ve ona vahyetti: «Kavmine, kendilerine acı bir azap gelmeden önce uyarıda bulun.»"
      ],
      [
       "فَقَامَ نُوحٌ فِي قَوْمِهِ يَقُولُ لِلنَّاسِ: «إِنِّي لَكُمْ رَسُولٌ أَمِينٌ».",
       "Nûh kavminin arasında kalkıp insanlara dedi ki: «Ben size gönderilmiş güvenilir bir elçiyim.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 4,
   "emoji": "🗣️",
   "title_ar": "مَاذَا أَجَابَهُ الْقَوْمُ؟",
   "title_tr": "Kavim ne cevap verdi?",
   "pre": {
    "predict": {
     "prompt_tr": "Başlık: «اتَّبَعَكَ الْأَرْذَلُونَ» (sana en düşükler uydu). Sence Nûh'a önce kimler iman edecek?",
     "options": [
      [
       "الْفُقَرَاءُ وَالْمَسَاكِينُ",
       "Fakirler ve yoksullar"
      ],
      [
       "الْأَغْنِيَاءُ وَالرُّؤَسَاءُ",
       "Zenginler ve ileri gelenler"
      ],
      [
       "الْقَوْمُ كُلُّهُمْ",
       "Bütün kavim"
      ]
     ]
    },
    "vocab": [
     [
      "غَنِيٌّ ج أَغْنِيَاءُ",
      "zengin",
      "💰"
     ],
     [
      "مِسْكِينٌ ج مَسَاكِينُ",
      "yoksul",
      "🥖"
     ],
     [
      "يَطْرُدُ",
      "kovar",
      "🚪"
     ],
     [
      "ضَلَالَةٌ",
      "sapıklık",
      "🧭"
     ],
     [
      "آمَنَ بِـ",
      "-e iman etti",
      "🤲"
     ],
     [
      "كِبْرٌ",
      "kibir",
      "😤"
     ]
    ]
   },
   "stop": {
    "section": 14,
    "after": 8,
    "prompt_tr": "Zenginler Nûh'tan yoksul müminleri yanından kovmasını istedi. Sence Nûh ne yapacak?",
    "options": [
     [
      "يَأْبَى وَلَا يَطْرُدُهُمْ",
      "Reddedecek, onları kovmayacak"
     ],
     [
      "يَطْرُدُهُمْ",
      "Onları kovacak"
     ],
     [
      "يَذْهَبُ مَعَ الْأَغْنِيَاءِ",
      "Zenginlerle gidecek"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَ نُوحٌ: إِنِّي لَكُمْ رَسُولٌ أَمِينٌ.",
     "قَالَ أَصْدِقَاؤُهُ: مَتَى جَاءَتْهُ النُّبُوَّةُ؟",
     "قَالَ الْمَلَأُ: إِنَّا لَنَرَاكَ فِي ضَلَالٍ.",
     "آمَنَ بِهِ بَعْضُ الْمَسَاكِينِ.",
     "طَلَبَ الْأَغْنِيَاءُ أَنْ يَطْرُدَهُمْ.",
     "قَالَ نُوحٌ: مَا أَنَا بِطَارِدِ الْمُؤْمِنِينَ."
    ],
    "questions": [
     {
      "q": "مَاذَا قَالَ أَصْدِقَاءُ نُوحٍ؟",
      "qt": "Nûh'un arkadaşları ne dedi?",
      "o": [
       "كَانَ يَلْعَبُ مَعَنَا فَمَتَى جَاءَتْهُ النُّبُوَّةُ؟",
       "نَحْنُ نُؤْمِنُ بِكَ",
       "اذْهَبْ إِلَى الْمَلِكِ"
      ],
      "ot": [
       "Bizimle oynardı; peygamberlik ona ne zaman geldi?",
       "Biz sana inanıyoruz",
       "Krala git"
      ],
      "a": 0,
      "ev": [
       "12.3"
      ]
     },
     {
      "q": "مَاذَا كَانَ النَّاسُ يَرَوْنَ عَنْ عِبَادَةِ الْأَصْنَامِ؟",
      "qt": "İnsanlar putlara tapmak hakkında ne düşünüyordu?",
      "o": [
       "أَنَّهَا الْحَقُّ وَالْعَقْلُ",
       "أَنَّهَا ضَلَالَةٌ",
       "أَنَّهَا سَفَاهَةٌ"
      ],
      "ot": [
       "Doğru ve akıllıca olduğunu",
       "Sapıklık olduğunu",
       "Akılsızlık olduğunu"
      ],
      "a": 0,
      "ev": [
       "13.0"
      ]
     },
     {
      "q": "مَنْ آمَنَ بِنُوحٍ؟",
      "qt": "Nûh'a kimler iman etti?",
      "o": [
       "بَعْضُ الَّذِينَ يَعْمَلُونَ بِأَيْدِيهِمْ",
       "الْأَغْنِيَاءُ",
       "الْقَوْمُ كُلُّهُمْ"
      ],
      "ot": [
       "Elleriyle çalışan bazı kişiler",
       "Zenginler",
       "Bütün kavim"
      ],
      "a": 0,
      "ev": [
       "14.2"
      ]
     },
     {
      "q": "مَا الَّذِي مَنَعَ الْأَغْنِيَاءَ أَنْ يُطِيعُوا نُوحًا؟",
      "qt": "Zenginleri Nûh'a uymaktan ne alıkoydu?",
      "o": [
       "كِبْرُهُمْ",
       "فَقْرُهُمْ",
       "خَوْفُهُمْ مِنَ الْمَلِكِ"
      ],
      "ot": [
       "Kibirleri",
       "Fakirlikleri",
       "Kraldan korkmaları"
      ],
      "a": 0,
      "ev": [
       "14.3"
      ]
     },
     {
      "q": "لِمَاذَا قَالَ الْأَغْنِيَاءُ إِنَّ دِينَ نُوحٍ لَيْسَ بِخَيْرٍ؟",
      "qt": "Zenginler Nûh'un dininin neden hayırlı olmadığını söyledi?",
      "o": [
       "لَوْ كَانَ خَيْرًا لَأَتَاهُمْ قَبْلَ الْمَسَاكِينِ",
       "لِأَنَّهُ دِينٌ قَدِيمٌ",
       "لِأَنَّ نُوحًا غَنِيٌّ"
      ],
      "ot": [
       "Hayırlı olsaydı yoksullardan önce onlara gelirdi",
       "Çünkü eski bir din",
       "Çünkü Nûh zengin"
      ],
      "a": 0,
      "ev": [
       "15.5"
      ]
     }
    ],
    "focus": {
     "title": "Soru hemzesi: أَ … ؟ / أَ … أَمْ … ؟",
     "explain": "Kelimenin başına gelen <b>أَ</b> cümleyi soru yapar: <span class='ar-inline'>أَنُؤْمِنُ لَكَ؟</span> (sana inanır mıyız?). <b>أَمَا</b> «… -medi mi?» demektir: <span class='ar-inline'>أَمَا وَجَدَ اللهُ أَحَدًا غَيْرَهُ؟</span>. İki seçenek arasında soru: <b>أَ … أَمْ …</b>: <span class='ar-inline'>أَلَيْلًا أَمْ نَهَارًا؟</span> (gece mi, gündüz mü?).",
     "examples": [
      "أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ الْأَرْذَلُونَ؟",
      "أَمَا وَجَدَ اللهُ أَحَدًا غَيْرَهُ؟",
      "أَلَيْلًا أَمْ نَهَارًا؟"
     ],
     "items": [
      {
       "q": "____نُؤْمِنُ لَكَ وَاتَّبَعَكَ الْأَرْذَلُونَ؟",
       "o": [
        "أَ",
        "لَا",
        "سَـ"
       ],
       "a": 0
      },
      {
       "q": "أَلَيْلًا ____ نَهَارًا؟",
       "o": [
        "أَمْ",
        "وَ",
        "بَلْ"
       ],
       "a": 0
      },
      {
       "q": "____ وَجَدَ اللهُ أَحَدًا غَيْرَهُ؟",
       "o": [
        "أَمَا",
        "مَا",
        "لَمَّا"
       ],
       "a": 0
      },
      {
       "q": "____ صَارَ هٰذَا نَبِيًّا؟",
       "o": [
        "مَتَى",
        "أَيْنَ",
        "مَنْ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ الْمَلَأُ: إِنَّا لَنَرَاكَ فِي {ضَلَالٍ} مُبِينٍ. وَمَا آمَنَ بِنُوحٍ إِلَّا بَعْضُ {الْمَسَاكِينِ}. وَمَنَعَ الْأَغْنِيَاءَ {كِبْرُهُمْ}. وَطَلَبُوا مِنْ نُوحٍ أَنْ {يَطْرُدَ} الْمَسَاكِينَ. وَقَالَ نُوحٌ: مَا أَنَا بِطَارِدِ {الْمُؤْمِنِينَ}."
    },
    "think": {
     "q": "مَا رَأْيُكَ فِي قَوْلِ الْأَغْنِيَاءِ: «لَوْ كَانَ خَيْرًا مَا سَبَقُونَا إِلَيْهِ»؟",
     "qt": "Zenginlerin «Hayırlı olsaydı onlar bizi geçemezdi» sözü hakkında ne düşünüyorsun?",
     "model": "Bu söz, iyiliği zenginlik ve statüyle ölçen bir düşünce. Zenginler her güzel şeyin önce kendilerine geleceğine alışmışlardı. Oysa metin, iman edenlerin elleriyle çalışıp helal kazanan ihlaslı insanlar olduğunu vurguluyor; değer, mal ve makamla değil kalple ölçülür."
    },
    "retell": [
     "رَسُولٌ أَمِينٌ",
     "الْأَصْدِقَاءُ",
     "الْأَغْنِيَاءُ",
     "الْمَسَاكِينُ",
     "يَطْرُدُ",
     "مَا أَنَا بِطَارِدِ"
    ],
    "quran": [
     {
      "ar": "قَالَ الْمَلَأُ مِنْ قَوْمِهِ إِنَّا لَنَرَاكَ فِي ضَلَالٍ مُبِينٍ",
      "ref": "A'râf 7:60",
      "tr": "Kavminin ileri gelenleri dedi ki: Biz seni apaçık bir sapıklık içinde görüyoruz.",
      "inText": "«إِنَّا لَنَرَاكَ فِي ضَلَالٍ مُبِينٍ»"
     },
     {
      "ar": "فَقَالَ الْمَلَأُ الَّذِينَ كَفَرُوا مِنْ قَوْمِهِ مَا هٰذَا إِلَّا بَشَرٌ مِثْلُكُمْ يُرِيدُ أَنْ يَتَفَضَّلَ عَلَيْكُمْ وَلَوْ شَاءَ اللهُ لَأَنْزَلَ مَلَائِكَةً مَا سَمِعْنَا بِهٰذَا فِي آبَائِنَا الْأَوَّلِينَ",
      "ref": "Mü'minûn 23:24",
      "tr": "Kavminden inkâr eden ileri gelenler dedi ki: Bu sizin gibi bir insandan başkası değil; size üstün gelmek istiyor. Allah dileseydi melekler indirirdi. Biz önceki atalarımızdan böyle bir şey duymadık.",
      "inText": "«مَا هٰذَا إِلَّا بَشَرٌ مِثْلُكُمْ» · «لَوْ شَاءَ اللهُ...»"
     },
     {
      "ar": "قَالُوا أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ الْأَرْذَلُونَ",
      "ref": "Şuarâ 26:111",
      "tr": "Dediler ki: Sana en düşükler uymuşken biz sana inanır mıyız?",
      "inText": "«أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ الْأَرْذَلُونَ؟»"
     },
     {
      "ar": "وَمَا أَنَا بِطَارِدِ الْمُؤْمِنِينَ إِنْ أَنَا إِلَّا نَذِيرٌ مُبِينٌ",
      "ref": "Şuarâ 26:114–115",
      "tr": "Ben müminleri kovacak değilim; ben sadece apaçık bir uyarıcıyım.",
      "inText": "«مَا أَنَا بِطَارِدِ الْمُؤْمِنِينَ»"
     },
     {
      "ar": "لَوْ كَانَ خَيْرًا مَا سَبَقُونَا إِلَيْهِ",
      "ref": "Ahkâf 46:11",
      "tr": "Hayırlı olsaydı onlar bizi geçip ona önce ulaşamazlardı.",
      "inText": "«لَوْ كَانَ خَيْرًا مَا سَبَقُونَا إِلَيْهِ»"
     }
    ]
   },
   "sections": [
    {
     "n": 12,
     "title_ar": "مَاذَا أَجَابَهُ الْقَوْمُ؟",
     "title_tr": "Kavim ona ne cevap verdi?",
     "s": [
      [
       "وَلَمَّا قَامَ نُوحٌ فِي قَوْمِهِ يَقُولُ: «إِنِّي لَكُمْ رَسُولٌ أَمِينٌ».",
       "Nûh kavminin arasında kalkıp «Ben size gönderilmiş güvenilir bir elçiyim» deyince,"
      ],
      [
       "قَامَ بَعْضُ النَّاسِ يَقُولُونَ: مَتَى صَارَ هٰذَا نَبِيًّا؟",
       "bazı insanlar kalkıp dediler ki: Bu ne zaman peygamber oldu?"
      ],
      [
       "بِالْأَمْسِ كَانَ رَجُلًا مِنَّا وَالْيَوْمَ يَقُولُ أَنَا رَسُولُ اللهِ إِلَيْكُمْ!",
       "Dün bizden biriydi, bugün «Ben Allah'ın size gönderdiği elçiyim» diyor!"
      ],
      [
       "وَقَالَ أَصْدِقَاءُ نُوحٍ: هٰذَا كَانَ يَلْعَبُ مَعَنَا فِي الصِّغَرِ وَيَجْلِسُ مَعَنَا كُلَّ يَوْمٍ فَمَتَى جَاءَتْهُ النُّبُوَّةُ؟ أَلَيْلًا أَمْ نَهَارًا؟!",
       "Nûh'un arkadaşları dedi ki: Bu küçükken bizimle oynardı, her gün bizimle otururdu; peygamberlik ona ne zaman geldi? Gece mi, gündüz mü?!"
      ],
      [
       "وَقَالَ الْأَغْنِيَاءُ وَالْمُتَكَبِّرُونَ: أَمَا وَجَدَ اللهُ أَحَدًا غَيْرَهُ؟",
       "Zenginler ve büyüklük taslayanlar dedi ki: Allah ondan başka birini bulamadı mı?"
      ],
      [
       "أَمَاتَ النَّاسُ كُلُّهُمْ، أَمَا وَجَدَ فِي الْقَوْمِ إِلَّا فَقِيرًا؟",
       "Bütün insanlar öldü mü? Kavmin içinde bir fakirden başkasını bulamadı mı?"
      ],
      [
       "وَقَالَ الْجُهَّالُ: «مَا هٰذَا إِلَّا بَشَرٌ مِثْلُكُمْ».",
       "Cahiller dedi ki: «Bu, sizin gibi bir insandan başka bir şey değil.»"
      ],
      [
       "وَقَالُوا: «لَوْ شَاءَ اللهُ لَأَنْزَلَ مَلَائِكَةً مَا سَمِعْنَا بِهٰذَا فِي آبَائِنَا الْأَوَّلِينَ».",
       "Ve dediler ki: «Allah dileseydi melekler indirirdi; biz önceki atalarımızdan böyle bir şey duymadık.»"
      ],
      [
       "وَقَالَ بَعْضُ النَّاسِ إِنَّ نُوحًا يُرِيدُ أَنْ يَنَالَ الرِّيَاسَةَ وَالشَّرَفَ بِهٰذَا الطَّرِيقِ.",
       "Bazı insanlar da dedi ki: Nûh bu yolla başkanlık ve şeref elde etmek istiyor."
      ]
     ]
    },
    {
     "n": 13,
     "title_ar": "بَيْنَ نُوحٍ وَقَوْمِهِ",
     "title_tr": "Nûh ile kavmi arasında",
     "s": [
      [
       "كَانَ النَّاسُ يَرَوْنَ أَنَّ عِبَادَةَ الْأَصْنَامِ هُوَ الْحَقُّ، وَأَنَّ عِبَادَةَ الْأَصْنَامِ هُوَ الْعَقْلُ.",
       "İnsanlar putlara tapmanın doğru olduğunu, putlara tapmanın akıllıca olduğunu düşünüyordu."
      ],
      [
       "وَكَانُوا يَرَوْنَ أَنَّ الَّذِي لَا يَعْبُدُ الْأَصْنَامَ هُوَ فِي ضَلَالَةٍ وَسَفَاهَةٍ.",
       "Putlara tapmayan kişinin sapıklık ve akılsızlık içinde olduğunu düşünüyorlardı."
      ],
      [
       "وَكَانُوا يَقُولُونَ: قَدْ كَانَ آبَاؤُنَا يَعْبُدُونَ الْأَصْنَامَ فَلِمَاذَا لَا يَعْبُدُهَا هٰذَا؟",
       "Derlerdi ki: Babalarımız putlara taparlardı; bu adam neden onlara tapmıyor?"
      ],
      [
       "وَكَانَ نُوحٌ يَرَى أَنَّ عِبَادَةَ الْأَصْنَامِ ضَلَالَةٌ، وَأَنَّ عِبَادَةَ الْأَصْنَامِ سَفَاهَةٌ.",
       "Nûh ise putlara tapmanın sapıklık, putlara tapmanın akılsızlık olduğunu görüyordu."
      ],
      [
       "وَكَانَ نُوحٌ يَرَى أَنَّ آبَاءَهُ كَانُوا فِي ضَلَالَةٍ وَسَفَاهَةٍ، وَأَنَّ آدَمَ وَهُوَ أَبُو الْآبَاءِ مَا كَانَ يَعْبُدُ الْأَصْنَامَ، بَلْ كَانَ يَعْبُدُ اللهَ.",
       "Nûh, atalarının sapıklık ve akılsızlık içinde olduğunu; ataların atası Âdem'in putlara tapmadığını, bilakis Allah'a ibadet ettiğini görüyordu."
      ],
      [
       "وَأَنَّ الْقَوْمَ فِي ضَلَالَةٍ وَسَفَاهَةٍ إِذْ يَعْبُدُونَ الْحِجَارَةَ وَلَا يَعْبُدُونَ اللهَ الَّذِي خَلَقَهُمْ.",
       "Ve kavmin, taşlara tapıp kendilerini yaratan Allah'a ibadet etmedikleri için sapıklık ve akılsızlık içinde olduğunu (görüyordu)."
      ],
      [
       "قَامَ نُوحٌ فِي الْقَوْمِ يَقُولُ بِأَعْلَى صَوْتِهِ: «يَا قَوْمِ اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ».",
       "Nûh kavminin arasında kalkıp en yüksek sesiyle dedi ki: «Ey kavmim! Allah'a ibadet edin; sizin O'ndan başka hiçbir ilahınız yok. Ben sizin için büyük bir günün azabından korkuyorum.»"
      ],
      [
       "«قَالَ الْمَلَأُ مِنْ قَوْمِهِ إِنَّا لَنَرَاكَ فِي ضَلَالٍ مُبِينٍ».",
       "«Kavminin ileri gelenleri dedi ki: Biz seni apaçık bir sapıklık içinde görüyoruz.»"
      ],
      [
       "«قَالَ يَا قَوْمِ لَيْسَ بِي ضَلَالَةٌ وَلٰكِنِّي رَسُولٌ مِنْ رَبِّ الْعَالَمِينَ، أُبَلِّغُكُمْ رِسَالَاتِ رَبِّي وَأَنْصَحُ لَكُمْ وَأَعْلَمُ مِنَ اللهِ مَا لَا تَعْلَمُونَ».",
       "«Dedi ki: Ey kavmim! Bende hiçbir sapıklık yok; ben âlemlerin Rabbinden gönderilmiş bir elçiyim. Size Rabbimin mesajlarını ulaştırıyor, size öğüt veriyorum ve Allah tarafından sizin bilmediğiniz şeyleri biliyorum.»"
      ]
     ]
    },
    {
     "n": 14,
     "title_ar": "اتَّبَعَكَ الْأَرْذَلُونَ",
     "title_tr": "Sana en düşükler uydu",
     "s": [
      [
       "وَاجْتَهَدَ نُوحٌ كَثِيرًا أَنْ يُؤْمِنَ قَوْمُهُ وَيَعْبُدُوا اللهَ وَيَتْرُكُوا الْأَصْنَامَ.",
       "Nûh, kavmi iman etsin, Allah'a ibadet etsin ve putları bıraksın diye çok çabaladı."
      ],
      [
       "وَلٰكِنْ مَا آمَنَ بِنُوحٍ إِلَّا بَعْضُ الْأَفْرَادِ مِنْ قَوْمِهِ.",
       "Fakat kavminden Nûh'a sadece birkaç kişi iman etti."
      ],
      [
       "مَا آمَنَ بِهِ إِلَّا بَعْضُ الْأَفْرَادِ الَّذِينَ يَعْمَلُونَ بِأَيْدِيهِمْ وَيَأْكُلُونَ الْحَلَالَ.",
       "Ona sadece elleriyle çalışan ve helal yiyen birkaç kişi iman etti."
      ],
      [
       "أَمَّا الْأَغْنِيَاءُ مِنْ قَوْمِهِ فَقَدْ مَنَعَهُمْ كِبْرُهُمْ أَنْ يُطِيعُوا نُوحًا.",
       "Kavminin zenginlerine gelince, kibirleri onları Nûh'a uymaktan alıkoydu."
      ],
      [
       "وَشَغَلَتْهُمْ أَمْوَالُهُمْ وَأَوْلَادُهُمْ أَنْ يُفَكِّرُوا فِي الْآخِرَةِ.",
       "Malları ve çocukları onları ahireti düşünmekten alıkoydu."
      ],
      [
       "وَكَانُوا يَقُولُونَ: نَحْنُ أَشْرَافٌ وَهٰؤُلَاءِ أَرَاذِلُ.",
       "Derlerdi ki: Biz şerefli kimseleriz, bunlar ise en düşük insanlar."
      ],
      [
       "وَلَمَّا دَعَاهُمْ نُوحٌ إِلَى اللهِ قَالُوا:",
       "Nûh onları Allah'a davet edince dediler ki:"
      ],
      [
       "«أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ الْأَرْذَلُونَ؟»",
       "«Sana en düşükler uymuşken biz sana inanır mıyız?»"
      ],
      [
       "وَطَلَبُوا مِنْ نُوحٍ أَنْ يَطْرُدَ هٰؤُلَاءِ الْمَسَاكِينَ.",
       "Nûh'tan bu yoksulları yanından kovmasını istediler."
      ],
      [
       "وَلٰكِنَّ نُوحًا أَبَى وَقَالَ: «مَا أَنَا بِطَارِدِ الْمُؤْمِنِينَ».",
       "Fakat Nûh reddetti ve dedi ki: «Ben müminleri kovacak değilim.»"
      ],
      [
       "إِنَّ بَابِي لَيْسَ بِبَابِ مَلِكٍ، «إِنْ أَنَا إِلَّا نَذِيرٌ مُبِينٌ».",
       "Benim kapım bir kralın kapısı değil; «ben sadece apaçık bir uyarıcıyım.»"
      ],
      [
       "وَكَانَ نُوحٌ يَعْرِفُ أَنَّ هٰؤُلَاءِ الْمَسَاكِينَ مُؤْمِنُونَ مُخْلِصُونَ.",
       "Nûh bu yoksulların ihlaslı müminler olduğunu biliyordu."
      ],
      [
       "وَأَنَّ اللهَ يَغْضَبُ إِذَا طَرَدَ هٰؤُلَاءِ الْمَسَاكِينَ، وَإِذَنْ لَا يَنْصُرُهُ أَحَدٌ.",
       "Ve bu yoksulları kovarsa Allah'ın gazap edeceğini, o zaman kimsenin ona yardım edemeyeceğini (biliyordu)."
      ],
      [
       "فَقَالَ نُوحٌ: «يَا قَوْمِ مَنْ يَنْصُرُنِي مِنَ اللهِ إِنْ طَرَدْتُهُمْ».",
       "Nûh dedi ki: «Ey kavmim! Onları kovarsam Allah'a karşı bana kim yardım eder?»"
      ]
     ]
    },
    {
     "n": 15,
     "title_ar": "حُجَّةُ الْأَغْنِيَاءِ",
     "title_tr": "Zenginlerin bahanesi",
     "s": [
      [
       "وَقَالَ الْأَغْنِيَاءُ: الَّذِي يَدْعُو إِلَيْهِ نُوحٌ لَيْسَ بِحَقٍّ وَلَيْسَ بِخَيْرٍ.",
       "Zenginler dedi ki: Nûh'un çağırdığı şey ne doğrudur ne de hayırlıdır."
      ],
      [
       "لِمَاذَا؟",
       "Neden?"
      ],
      [
       "لِأَنَّا جَرَّبْنَا أَنَّا نَحْنُ السَّابِقُونَ فِي كُلِّ خَيْرٍ.",
       "Çünkü biz her iyilikte önde olanların biz olduğunu tecrübe ettik."
      ],
      [
       "لَنَا كُلُّ طَيِّبٍ مِنَ الطَّعَامِ، وَلَنَا كُلُّ جَمِيلٍ مِنَ اللِّبَاسِ. وَالنَّاسُ فِي كُلِّ شَيْءٍ لَنَا تَبَعٌ.",
       "Yiyeceğin en güzeli bizim, giyeceğin en güzeli bizim. İnsanlar her şeyde bize uyar."
      ],
      [
       "وَإِنَّا رَأَيْنَا أَنَّ الْخَيْرَ لَا يُخْطِئُنَا وَلَا يُجَاوِزُنَا فِي الْمَدِينَةِ.",
       "Gördük ki bu şehirde hayır bizi ıskalamaz ve bizi atlayıp geçmez."
      ],
      [
       "فَلَوْ كَانَ هٰذَا الدِّينُ خَيْرًا لَأَتَانَا قَبْلَ هٰؤُلَاءِ الْمَسَاكِينِ.",
       "Bu din hayırlı olsaydı bu yoksullardan önce bize gelirdi."
      ],
      [
       "«لَوْ كَانَ خَيْرًا مَا سَبَقُونَا إِلَيْهِ».",
       "«Hayırlı olsaydı onlar bizi geçip ona önce ulaşamazlardı.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 5,
   "emoji": "🪚",
   "title_ar": "السَّفِينَةُ",
   "title_tr": "Gemi",
   "pre": {
    "predict": {
     "prompt_tr": "Nûh kavmini çok uzun süre davet etti ama çoğu iman etmedi. Sence Allah Nûh'a ne yapmasını emredecek?",
     "options": [
      [
       "أَنْ يَصْنَعَ سَفِينَةً",
       "Bir gemi yapmasını"
      ],
      [
       "أَنْ يَبْنِيَ بَيْتًا",
       "Bir ev yapmasını"
      ],
      [
       "أَنْ يَذْهَبَ إِلَى مِصْرَ",
       "Mısır'a gitmesini"
      ]
     ]
    },
    "vocab": [
     [
      "سَفِينَةٌ",
      "gemi",
      "🚢"
     ],
     [
      "يَصْنَعُ",
      "yapar, imal eder",
      "🔨"
     ],
     [
      "نَجَّارٌ",
      "marangoz",
      "🪚"
     ],
     [
      "يَسْخَرُ مِنْ",
      "-le alay eder",
      "😏"
     ],
     [
      "أَلْفُ سَنَةٍ",
      "bin yıl",
      "⏳"
     ],
     [
      "أُذُنٌ ج آذَانٌ",
      "kulak / kulaklar",
      "👂"
     ]
    ]
   },
   "stop": {
    "section": 18,
    "after": 3,
    "prompt_tr": "Nûh, denizden çok uzakta büyük bir gemi yapmaya başladı. Sence kavmi ne yapacak?",
    "options": [
     [
      "يَسْخَرُونَ مِنْهُ",
      "Onunla alay edecekler"
     ],
     [
      "يُسَاعِدُونَهُ",
      "Ona yardım edecekler"
     ],
     [
      "يُؤْمِنُونَ بِهِ",
      "Ona iman edecekler"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "دَعَا نُوحٌ قَوْمَهُ إِلَى اللهِ.",
     "جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ.",
     "مَكَثَ نُوحٌ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا.",
     "دَعَا نُوحٌ عَلَى الْكَافِرِينَ.",
     "بَدَأَ نُوحٌ يَصْنَعُ سَفِينَةً.",
     "سَخِرَ الْقَوْمُ مِنْ نُوحٍ."
    ],
    "questions": [
     {
      "q": "مَاذَا يَحْدُثُ إِنْ آمَنَ الْقَوْمُ؟",
      "qt": "Kavim iman ederse ne olur?",
      "o": [
       "يَرْضَى اللهُ وَيُرْسِلُ الْأَمْطَارَ",
       "يَأْتِي الطُّوفَانُ",
       "يَمُوتُونَ"
      ],
      "ot": [
       "Allah razı olur ve yağmurlar gönderir",
       "Tufan gelir",
       "Ölürler"
      ],
      "a": 0,
      "ev": [
       "16.3",
       "16.4"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ الْقَوْمُ لَمَّا دَعَاهُمْ نُوحٌ؟",
      "qt": "Nûh onları davet edince kavim ne yaptı?",
      "o": [
       "جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ",
       "آمَنُوا بِهِ",
       "سَأَلُوهُ عَنِ اللهِ"
      ],
      "ot": [
       "Parmaklarını kulaklarına tıkadılar",
       "Ona iman ettiler",
       "Ona Allah'ı sordular"
      ],
      "a": 0,
      "ev": [
       "16.10"
      ]
     },
     {
      "q": "كَمْ سَنَةً مَكَثَ نُوحٌ فِي قَوْمِهِ؟",
      "qt": "Nûh kavminin içinde kaç yıl kaldı?",
      "o": [
       "أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا",
       "خَمْسِينَ سَنَةً",
       "مِائَةَ سَنَةٍ"
      ],
      "ot": [
       "Elli yıl eksik bin yıl",
       "Elli yıl",
       "Yüz yıl"
      ],
      "a": 0,
      "ev": [
       "17.1"
      ]
     },
     {
      "q": "مَاذَا أَوْحَى اللهُ إِلَى نُوحٍ؟",
      "qt": "Allah Nûh'a ne vahyetti?",
      "o": [
       "لَنْ يُؤْمِنَ مِنْ قَوْمِكَ إِلَّا مَنْ قَدْ آمَنَ",
       "سَيُؤْمِنُ قَوْمُكَ كُلُّهُمْ",
       "اذْهَبْ إِلَى بَلَدٍ آخَرَ"
      ],
      "ot": [
       "Kavminden iman etmiş olanlardan başkası iman etmeyecek",
       "Kavminin hepsi iman edecek",
       "Başka bir ülkeye git"
      ],
      "a": 0,
      "ev": [
       "17.9"
      ]
     },
     {
      "q": "لِمَاذَا سَخِرَ الْقَوْمُ مِنَ السَّفِينَةِ؟",
      "qt": "Kavim gemiyle neden alay etti?",
      "o": [
       "لِأَنَّ الْبَحْرَ بَعِيدٌ جِدًّا",
       "لِأَنَّهَا صَغِيرَةٌ",
       "لِأَنَّ نُوحًا لَا يَعْرِفُ النِّجَارَةَ"
      ],
      "ot": [
       "Çünkü deniz çok uzak",
       "Çünkü gemi küçük",
       "Çünkü Nûh marangozluk bilmiyor"
      ],
      "a": 0,
      "ev": [
       "18.10"
      ]
     }
    ],
    "focus": {
     "title": "مَتَى ile sorular: إِلَى مَتَى؟ مِنْ مَتَى؟",
     "explain": "<b>مَتَى</b> «ne zaman?» demektir. Önüne harf gelince anlamı değişir: <span class='ar-inline'>إِلَى مَتَى؟</span> = ne zamana kadar? (sabrın sınırını sorar), <span class='ar-inline'>مِنْ مَتَى؟</span> = ne zamandan beri? (alaycı soru). Metin «إِلَى مَتَى» sorusunu art arda tekrarlayarak Nûh'un uzun bekleyişini hissettiriyor.",
     "examples": [
      "فَإِلَى مَتَى يَنْتَظِرُ نُوحٌ؟",
      "إِلَى مَتَى يَرَى الْحِجَارَةَ تُعْبَدُ؟",
      "مِنْ مَتَى صِرْتَ نَجَّارًا؟"
     ],
     "items": [
      {
       "q": "فَإِلَى ____ يَنْتَظِرُ نُوحٌ؟",
       "o": [
        "مَتَى",
        "أَيْنَ",
        "مَنْ"
       ],
       "a": 0
      },
      {
       "q": "____ مَتَى صِرْتَ نَجَّارًا؟",
       "o": [
        "مِنْ",
        "إِلَى",
        "فِي"
       ],
       "a": 0
      },
      {
       "q": "«ne zamana kadar?» = ____",
       "o": [
        "إِلَى مَتَى؟",
        "مِنْ مَتَى؟",
        "مَتَى؟"
       ],
       "a": 0
      },
      {
       "q": "وَ____ تَمْشِي هٰذِهِ السَّفِينَةُ يَا نُوحُ؟",
       "o": [
        "أَيْنَ",
        "مَتَى",
        "مَنْ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "دَعَا نُوحٌ قَوْمَهُ فَجَعَلُوا {أَصَابِعَهُمْ} فِي آذَانِهِمْ. وَمَكَثَ فِيهِمْ أَلْفَ {سَنَةٍ} إِلَّا خَمْسِينَ عَامًا. وَأَمَرَهُ اللهُ أَنْ يَصْنَعَ {سَفِينَةً}. وَصَارَ الْقَوْمُ {يَسْخَرُونَ} مِنْهُ. وَكَانَ نُوحٌ يَسْمَعُ كُلَّ ذٰلِكَ وَ{يَصْبِرُ}."
    },
    "think": {
     "q": "لِمَاذَا جَعَلَ الْقَوْمُ أَصَابِعَهُمْ فِي آذَانِهِمْ؟",
     "qt": "Kavim neden parmaklarını kulaklarına tıkadı? «Duymak istemeyen nasıl duyar?» cümlesini açıkla.",
     "model": "Sorun duyamamak değil, duymak istememekti. Kibir ve inat yüzünden öğüdü dinlemeyi baştan reddettiler. Metindeki soru bunu vurguluyor: Dinlemeye niyeti olmayan biri ne kadar konuşulsa da anlamaz."
    },
    "personal": {
     "q": "صَبَرَ نُوحٌ صَبْرًا طَوِيلًا. مَتَى صَبَرْتَ أَنْتَ؟",
     "qt": "Nûh çok uzun süre sabretti. Sen bir şey için ne zaman sabrettin? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "صَبَرْتُ عَلَى …",
      "صَبَرْتُ لَمَّا …"
     ]
    },
    "retell": [
     "دَعَا",
     "آذَانُهُمْ",
     "أَلْفُ سَنَةٍ",
     "سَفِينَةٌ",
     "نَجَّارٌ",
     "يَسْخَرُونَ"
    ],
    "quran": [
     {
      "ar": "قَالَ يَا قَوْمِ إِنِّي لَكُمْ نَذِيرٌ مُبِينٌ أَنِ اعْبُدُوا اللهَ وَاتَّقُوهُ وَأَطِيعُونِ",
      "ref": "Nûh 71:2–3",
      "tr": "Dedi ki: Ey kavmim! Ben sizin için apaçık bir uyarıcıyım: Allah'a ibadet edin, O'ndan sakının ve bana itaat edin.",
      "inText": "«قَالَ يَا قَوْمِ إِنِّي لَكُمْ نَذِيرٌ مُبِينٌ...»"
     },
     {
      "ar": "وَإِنِّي كُلَّمَا دَعَوْتُهُمْ لِتَغْفِرَ لَهُمْ جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ",
      "ref": "Nûh 71:7",
      "tr": "Onları, bağışlaman için her davet ettiğimde parmaklarını kulaklarına tıkadılar.",
      "inText": "جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ"
     },
     {
      "ar": "فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا",
      "ref": "Ankebût 29:14",
      "tr": "Onların arasında elli yıl eksik bin yıl kaldı.",
      "inText": "أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا"
     },
     {
      "ar": "قَالَ إِنْ تَسْخَرُوا مِنَّا فَإِنَّا نَسْخَرُ مِنْكُمْ كَمَا تَسْخَرُونَ",
      "ref": "Hûd 11:38",
      "tr": "Dedi ki: Bizimle alay ediyorsanız, siz nasıl alay ediyorsanız biz de sizinle öyle alay edeceğiz.",
      "inText": "«إِنْ تَسْخَرُوا مِنَّا...»"
     }
    ]
   },
   "sections": [
    {
     "n": 16,
     "title_ar": "دَعْوَةُ نُوحٍ",
     "title_tr": "Nûh'un daveti",
     "s": [
      [
       "وَدَعَا نُوحٌ قَوْمَهُ، وَاجْتَهَدَ فِي النَّصِيحَةِ.",
       "Nûh kavmini davet etti ve öğüt vermekte çok çabaladı."
      ],
      [
       "«قَالَ يَا قَوْمِ إِنِّي لَكُمْ نَذِيرٌ مُبِينٌ، أَنِ اعْبُدُوا اللهَ وَاتَّقُوهُ وَأَطِيعُونِ، يَغْفِرْ لَكُمْ مِنْ ذُنُوبِكُمْ وَيُؤَخِّرْكُمْ إِلَى أَجَلٍ مُسَمًّى إِنَّ أَجَلَ اللهِ إِذَا جَاءَ لَا يُؤَخَّرُ لَوْ كُنْتُمْ تَعْلَمُونَ».",
       "«Dedi ki: Ey kavmim! Ben sizin için apaçık bir uyarıcıyım: Allah'a ibadet edin, O'ndan sakının ve bana itaat edin ki günahlarınızı bağışlasın ve sizi belirlenmiş bir vakte kadar ertelesin. Bilseydiniz, Allah'ın belirlediği vakit geldiğinde ertelenmez.»"
      ],
      [
       "وَكَانَ اللهُ حَبَسَ عَنْهُمُ الْمَطَرَ وَغَضِبَ عَلَيْهِمْ وَقَلَّ الْحَرْثُ وَقَلَّ النَّسْلُ.",
       "Allah onlardan yağmuru kesmiş ve onlara gazap etmişti; ekin de nesil de azalmıştı."
      ],
      [
       "فَقَالَ نُوحٌ: يَا قَوْمِ إِنْ آمَنْتُمْ رَضِيَ عَنْكُمُ اللهُ وَزَالَ هٰذَا الْعَذَابُ.",
       "Nûh dedi ki: Ey kavmim! İman ederseniz Allah sizden razı olur ve bu azap kalkar."
      ],
      [
       "وَأَرْسَلَ عَلَيْكُمُ الْأَمْطَارَ وَبَارَكَ لَكُمْ فِي الرِّزْقِ وَالْأَوْلَادِ.",
       "Üzerinize yağmurlar gönderir; rızkınızı ve çocuklarınızı bereketli kılar."
      ],
      [
       "وَدَعَا نُوحٌ قَوْمَهُ إِلَى اللهِ وَقَالَ لَهُمْ: أَلَا تَعْرِفُونَ اللهَ؟",
       "Nûh kavmini Allah'a çağırdı ve onlara dedi ki: Allah'ı tanımıyor musunuz?"
      ],
      [
       "هٰذِهِ آيَاتُ اللهِ حَوْلَكُمْ أَلَا تَنْظُرُونَ إِلَيْهَا؟ أَلَا تَنْظُرُونَ إِلَى السَّمَاءِ وَالْأَرْضِ؟ أَلَا تَنْظُرُونَ إِلَى الشَّمْسِ وَالْقَمَرِ؟",
       "İşte etrafınızda Allah'ın ayetleri; onlara bakmıyor musunuz? Göğe ve yere bakmıyor musunuz? Güneşe ve aya bakmıyor musunuz?"
      ],
      [
       "مَنْ خَلَقَ السَّمَاوَاتِ؟ وَجَعَلَ الْقَمَرَ فِيهِنَّ نُورًا وَجَعَلَ الشَّمْسَ سِرَاجًا؟",
       "Gökleri kim yarattı? Ayı onların içinde bir nur, güneşi bir kandil kılan kim?"
      ],
      [
       "وَمَنْ خَلَقَكُمْ وَجَعَلَ لَكُمُ الْأَرْضَ بِسَاطًا؟",
       "Sizi kim yarattı ve yeryüzünü size bir döşek kıldı?"
      ],
      [
       "وَلٰكِنْ قَوْمُ نُوحٍ لَمْ يَعْقِلُوا! وَلٰكِنْ قَوْمُ نُوحٍ لَمْ يُؤْمِنُوا!",
       "Fakat Nûh'un kavmi akıllanmadı! Nûh'un kavmi iman etmedi!"
      ],
      [
       "بَلْ إِذَا دَعَاهُمْ نُوحٌ إِلَى اللهِ جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ.",
       "Bilakis Nûh onları Allah'a çağırdığında parmaklarını kulaklarına tıkadılar."
      ],
      [
       "وَكَيْفَ يَفْهَمُ مَنْ لَا يَسْمَعُ؟ وَكَيْفَ يَسْمَعُ مَنْ لَا يُرِيدُ أَنْ يَسْمَعَ؟",
       "Duymayan nasıl anlar? Duymak istemeyen nasıl duyar?"
      ]
     ]
    },
    {
     "n": 17,
     "title_ar": "دُعَاءُ نُوحٍ",
     "title_tr": "Nûh'un duası",
     "s": [
      [
       "وَاجْتَهَدَ نُوحٌ كَثِيرًا وَبَقِيَ يَدْعُو قَوْمَهُ زَمَنًا طَوِيلًا.",
       "Nûh çok çabaladı ve kavmini uzun bir süre davet etti."
      ],
      [
       "مَكَثَ نُوحٌ فِي قَوْمِهِ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا يَدْعُوهُمْ إِلَى اللهِ.",
       "Nûh kavminin içinde elli yıl eksik bin yıl kalarak onları Allah'a çağırdı."
      ],
      [
       "وَلٰكِنْ قَوْمُ نُوحٍ لَمْ يُؤْمِنُوا.",
       "Fakat Nûh'un kavmi iman etmedi."
      ],
      [
       "وَلَمْ يَتْرُكُوا عِبَادَةَ الْأَصْنَامِ، وَلَمْ يَرْجِعُوا إِلَى اللهِ.",
       "Putlara tapmayı bırakmadılar ve Allah'a dönmediler."
      ],
      [
       "فَإِلَى مَتَى يَنْتَظِرُ نُوحٌ؟ إِلَى مَتَى يَرَى فَسَادَ الْأَرْضِ؟",
       "Nûh daha ne zamana kadar bekleyecekti? Yeryüzünün bozulmasını ne zamana kadar görecekti?"
      ],
      [
       "إِلَى مَتَى يَرَى الْحِجَارَةَ تُعْبَدُ؟",
       "Taşlara tapıldığını ne zamana kadar görecekti?"
      ],
      [
       "إِلَى مَتَى يَرَى النَّاسَ يَأْكُلُونَ رِزْقَ اللهِ وَيَعْبُدُونَ غَيْرَهُ؟",
       "İnsanların Allah'ın rızkını yiyip O'ndan başkasına taptığını ne zamana kadar görecekti?"
      ],
      [
       "لِمَاذَا لَا يَغْضَبُ نُوحٌ؟ إِنَّهُ صَبَرَ صَبْرًا لَمْ يَصْبِرْ أَحَدٌ مِثْلَهُ!",
       "Nûh neden kızmasın? O, hiç kimsenin sabretmediği kadar sabretti!"
      ],
      [
       "أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا اللهُ أَكْبَرُ! اللهُ أَكْبَرُ!",
       "Elli yıl eksik bin yıl! Allahu ekber! Allahu ekber!"
      ],
      [
       "وَقَدْ أَوْحَى اللهُ إِلَى نُوحٍ: «إِنَّهُ لَنْ يُؤْمِنَ مِنْ قَوْمِكَ إِلَّا مَنْ قَدْ آمَنَ».",
       "Allah Nûh'a vahyetmişti: «Kavminden daha önce iman etmiş olanlardan başkası artık iman etmeyecek.»"
      ],
      [
       "وَقَالَ قَوْمُ نُوحٍ لَمَّا دَعَاهُمْ نُوحٌ مَرَّةً أُخْرَى.",
       "Nûh onları bir kez daha davet edince kavmi dedi ki:"
      ],
      [
       "«يَا نُوحُ قَدْ جَادَلْتَنَا فَأَكْثَرْتَ جِدَالَنَا فَأْتِنَا بِمَا تَعِدُنَا إِنْ كُنْتَ مِنَ الصَّادِقِينَ».",
       "«Ey Nûh! Bizimle tartıştın, hem de çok tartıştın. Doğru söyleyenlerdensen bizi tehdit ettiğin şeyi getir.»"
      ],
      [
       "وَغَضِبَ نُوحٌ لِلّٰهِ وَيَئِسَ مِنْ هٰؤُلَاءِ وَقَالَ: اللّٰهُمَّ لَا تَتْرُكْ عَلَى الْأَرْضِ أَحَدًا مِنَ الْكَافِرِينَ.",
       "Nûh Allah için öfkelendi ve bunlardan ümidini kesti; dedi ki: Allah'ım! Yeryüzünde kâfirlerden hiç kimseyi bırakma."
      ]
     ]
    },
    {
     "n": 18,
     "title_ar": "السَّفِينَةُ",
     "title_tr": "Gemi",
     "s": [
      [
       "وَأَجَابَ اللهُ دَعْوَةَ نُوحٍ وَأَرَادَ أَنْ يُغْرِقَ قَوْمَهُ.",
       "Allah Nûh'un duasını kabul etti ve kavmini suda boğmak istedi."
      ],
      [
       "وَلٰكِنَّ اللهَ يُرِيدُ كَذٰلِكَ أَنْ يَنْجُوَ نُوحٌ وَالْمُؤْمِنُونَ.",
       "Fakat Allah, Nûh'un ve müminlerin de kurtulmasını istiyordu."
      ],
      [
       "فَأَمَرَ نُوحًا أَنْ يَصْنَعَ سَفِينَةً كَبِيرَةً.",
       "Bu yüzden Nûh'a büyük bir gemi yapmasını emretti."
      ],
      [
       "وَبَدَأَ نُوحٌ يَصْنَعُ سَفِينَةً كَبِيرَةً.",
       "Nûh büyük bir gemi yapmaya başladı."
      ],
      [
       "وَرَآهُ قَوْمُهُ فِي هٰذَا الشُّغْلِ فَوَجَدُوا شُغْلًا وَصَارُوا يَسْخَرُونَ مِنْهُ.",
       "Kavmi onu bu işle uğraşırken gördü; kendilerine bir uğraş buldular ve onunla alay etmeye başladılar."
      ],
      [
       "مَا هٰذَا يَا نُوحُ؟ مِنْ مَتَى صِرْتَ نَجَّارًا؟",
       "Bu ne ey Nûh? Ne zamandan beri marangoz oldun?"
      ],
      [
       "أَمَا كُنَّا نَقُولُ لَكَ لَا تَجْلِسْ إِلَى هٰؤُلَاءِ الْأَرَاذِلِ.",
       "Biz sana bu düşük insanlarla oturma demiyor muyduk?"
      ],
      [
       "وَلٰكِنَّكَ مَا سَمِعْتَ كَلَامَنَا وَجَلَسْتَ إِلَى النَّجَّارِينَ وَالْحَدَّادِينَ فَصِرْتَ نَجَّارًا!",
       "Ama sen sözümüzü dinlemedin, marangozlarla ve demircilerle oturdun; sonunda marangoz oldun!"
      ],
      [
       "وَأَيْنَ تَمْشِي هٰذِهِ السَّفِينَةُ يَا نُوحُ؟ إِنَّ أَمْرَكَ كُلَّهُ عَجَبٌ.",
       "Bu gemi nerede yüzecek ey Nûh? Senin işin baştan sona tuhaf."
      ],
      [
       "أَتَمْشِي هٰذِهِ فِي الرَّمْلِ أَمْ تَصْعَدُ الْجَبَلَ؟",
       "Bu gemi kumda mı yürüyecek, yoksa dağa mı tırmanacak?"
      ],
      [
       "الْبَحْرُ مِنْ هُنَا بَعِيدٌ جِدًّا، هَلْ يَحْمِلُهَا الْجِنُّ أَمْ تَجُرُّهَا الثِّيرَانُ؟",
       "Deniz buradan çok uzak; onu cinler mi taşıyacak, yoksa öküzler mi çekecek?"
      ],
      [
       "وَكَانَ نُوحٌ يَسْمَعُ كُلَّ ذٰلِكَ وَيَصْبِرُ، وَقَدْ سَمِعَ أَشَدَّ مِنْ هٰذَا فَصَبَرَ!",
       "Nûh bütün bunları duyar ve sabrederdi; bundan daha ağırını duymuş ve yine sabretmişti!"
      ],
      [
       "وَلٰكِنَّهُ كَانَ يَقُولُ لَهُمْ أَحْيَانًا: «إِنْ تَسْخَرُوا مِنَّا فَإِنَّا نَسْخَرُ مِنْكُمْ كَمَا تَسْخَرُونَ».",
       "Fakat bazen onlara derdi ki: «Bizimle alay ediyorsanız, siz bizimle alay ettiğiniz gibi biz de sizinle alay edeceğiz.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 6,
   "emoji": "🌊",
   "title_ar": "الطُّوفَانُ",
   "title_tr": "Tufan",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «الطُّوفَانُ», «ابْنُ نُوحٍ», «لَيْسَ مِنْ أَهْلِكَ». Sence Nûh'un oğlu gemiye binecek mi?",
     "options": [
      [
       "لَا، يَذْهَبُ إِلَى جَبَلٍ",
       "Hayır, bir dağa gidecek"
      ],
      [
       "نَعَمْ، يَرْكَبُ مَعَ أَبِيهِ",
       "Evet, babasıyla binecek"
      ],
      [
       "يَبْنِي سَفِينَةً أُخْرَى",
       "Başka bir gemi yapacak"
      ]
     ]
    },
    "vocab": [
     [
      "الطُّوفَانُ",
      "tufan",
      "🌊"
     ],
     [
      "مَطَرٌ / أَمْطَرَ",
      "yağmur / yağmur yağdırdı",
      "🌧️"
     ],
     [
      "مَوْجٌ",
      "dalga(lar)",
      "〰️"
     ],
     [
      "جَبَلٌ",
      "dağ",
      "⛰️"
     ],
     [
      "زَوْجٌ",
      "çift; eş",
      "🐾"
     ],
     [
      "يَنْجُو",
      "kurtulur",
      "🛟"
     ]
    ]
   },
   "stop": {
    "section": 20,
    "after": 1,
    "prompt_tr": "Nûh oğluna «Yavrum, bizimle bin» dedi. Sence oğlu ne cevap verecek?",
    "options": [
     [
      "سَآوِي إِلَى جَبَلٍ",
      "Bir dağa sığınacağım"
     ],
     [
      "أَرْكَبُ مَعَكَ يَا أَبِي",
      "Seninle binerim babacığım"
     ],
     [
      "أَنَا أَخَافُ الْمَاءَ",
      "Sudan korkarım"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "أَمْطَرَتِ السَّمَاءُ وَنَبَعَ الْمَاءُ.",
     "رَكِبَ الْمُؤْمِنُونَ السَّفِينَةَ.",
     "قَالَ ابْنُ نُوحٍ: سَآوِي إِلَى جَبَلٍ.",
     "كَانَ ابْنُ نُوحٍ مِنَ الْمُغْرَقِينَ.",
     "اسْتَوَتِ السَّفِينَةُ عَلَى الْجُودِيِّ.",
     "هَبَطَ نُوحٌ بِسَلَامٍ."
    ],
    "questions": [
     {
      "q": "مَنْ كَانَ مَعَ نُوحٍ فِي السَّفِينَةِ؟",
      "qt": "Gemide Nûh'la birlikte kimler vardı?",
      "o": [
       "مَنْ آمَنَ بِهِ وَمِنْ كُلِّ حَيَوَانٍ زَوْجٌ",
       "الْقَوْمُ كُلُّهُمْ",
       "ابْنُهُ وَالْأَغْنِيَاءُ"
      ],
      "ot": [
       "Ona iman edenler ve her hayvandan bir çift",
       "Bütün kavim",
       "Oğlu ve zenginler"
      ],
      "a": 0,
      "ev": [
       "19.7",
       "19.8"
      ]
     },
     {
      "q": "لِمَاذَا أَخَذَ نُوحٌ مِنْ كُلِّ حَيَوَانٍ زَوْجًا؟",
      "qt": "Nûh neden her hayvandan bir çift aldı?",
      "o": [
       "لِأَنَّ الطُّوفَانَ عَامٌّ",
       "لِأَنَّهُ يُحِبُّ الْحَيَوَانَاتِ",
       "لِيَبِيعَهَا"
      ],
      "ot": [
       "Çünkü tufan her yeri kaplayacaktı",
       "Çünkü hayvanları seviyor",
       "Onları satmak için"
      ],
      "a": 0,
      "ev": [
       "19.6"
      ]
     },
     {
      "q": "أَيْنَ أَرَادَ ابْنُ نُوحٍ أَنْ يَذْهَبَ؟",
      "qt": "Nûh'un oğlu nereye gitmek istedi?",
      "o": [
       "إِلَى جَبَلٍ",
       "إِلَى السَّفِينَةِ",
       "إِلَى الْبَحْرِ"
      ],
      "ot": [
       "Bir dağa",
       "Gemiye",
       "Denize"
      ],
      "a": 0,
      "ev": [
       "20.2"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَكُنِ ابْنُ نُوحٍ مِنْ أَهْلِهِ؟",
      "qt": "Nûh'un oğlu neden onun ailesinden sayılmadı?",
      "o": [
       "لِأَنَّ اللهَ يَنْظُرُ إِلَى الْأَعْمَالِ لَا إِلَى الْأَنْسَابِ",
       "لِأَنَّهُ كَانَ صَغِيرًا",
       "لِأَنَّهُ لَمْ يَكُنْ فِي الْبَيْتِ"
      ],
      "ot": [
       "Çünkü Allah soylara değil amellere bakar",
       "Çünkü küçüktü",
       "Çünkü evde değildi"
      ],
      "a": 0,
      "ev": [
       "21.1"
      ]
     },
     {
      "q": "عَلَى أَيِّ جَبَلٍ اسْتَوَتِ السَّفِينَةُ؟",
      "qt": "Gemi hangi dağın üzerine oturdu?",
      "o": [
       "الْجُودِيِّ",
       "الطُّورِ",
       "الصَّفَا"
      ],
      "ot": [
       "Cûdî",
       "Tûr",
       "Safâ"
      ],
      "a": 0,
      "ev": [
       "22.1"
      ]
     }
    ],
    "focus": {
     "title": "Fiile bitişen zamirler: يَعْصِمُنِي، أَعِظُكَ، تَرْحَمْنِي",
     "explain": "Arapçada «beni, seni, onu» gibi nesne zamirleri fiilin sonuna bitişir: <b>ـنِي</b> = beni (<span class='ar-inline'>يَعْصِمُنِي</span>: beni korur), <b>ـكَ</b> = seni (<span class='ar-inline'>أَعِظُكَ</span>: sana öğüt veririm, <span class='ar-inline'>أَسْأَلَكَ</span>: senden isterim), <b>ـهُ</b> = onu (<span class='ar-inline'>أَرَادَهُ</span>: onu istedi).",
     "examples": [
      "سَآوِي إِلَى جَبَلٍ يَعْصِمُنِي",
      "إِنِّي أَعِظُكَ",
      "وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي"
     ],
     "items": [
      {
       "q": "سَآوِي إِلَى جَبَلٍ ____ مِنَ الْمَاءِ. (beni korur)",
       "o": [
        "يَعْصِمُنِي",
        "يَعْصِمُكَ",
        "يَعْصِمُهُ"
       ],
       "a": 0
      },
      {
       "q": "إِنِّي ____ أَنْ تَكُونَ مِنَ الْجَاهِلِينَ. (sana öğüt veririm)",
       "o": [
        "أَعِظُكَ",
        "أَعِظُنِي",
        "يَعِظُكَ"
       ],
       "a": 0
      },
      {
       "q": "رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ ____ مَا لَيْسَ لِي بِهِ عِلْمٌ. (senden isterim)",
       "o": [
        "أَسْأَلَكَ",
        "أَسْأَلَهُ",
        "تَسْأَلَنِي"
       ],
       "a": 0
      },
      {
       "q": "وَإِلَّا تَغْفِرْ لِي وَ____ أَكُنْ مِنَ الْخَاسِرِينَ. (bana merhamet et)",
       "o": [
        "تَرْحَمْنِي",
        "تَرْحَمْهُ",
        "أَرْحَمْكَ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "أَمْطَرَتِ {السَّمَاءُ} وَنَبَعَ الْمَاءُ. وَسَارَتِ السَّفِينَةُ فِي مَوْجٍ {كَالْجِبَالِ}. وَقَالَ ابْنُ نُوحٍ: سَآوِي إِلَى {جَبَلٍ}. وَاسْتَوَتِ السَّفِينَةُ عَلَى {الْجُودِيِّ}. وَهَبَطَ نُوحٌ {بِسَلَامٍ}."
    },
    "think": {
     "q": "مَاذَا نَتَعَلَّمُ مِنْ قَوْلِهِ: «إِنَّ اللهَ لَا يَنْظُرُ إِلَى الْأَنْسَابِ بَلْ يَنْظُرُ إِلَى الْأَعْمَالِ»؟",
     "qt": "«Allah soylara değil amellere bakar» cümlesinden ne öğreniyoruz?",
     "model": "Bir peygamberin oğlu olmak bile tek başına kurtuluş sağlamadı. İnsan, ailesiyle ya da soyuyla değil kendi inancı ve yaptıklarıyla değerlendirilir. Nûh'un üzüntüsü bir babanın doğal sevgisini gösterir; ama o da uyarıyı kabul edip tövbe etti."
    },
    "retell": [
     "الطُّوفَانُ",
     "السَّفِينَةُ",
     "ابْنُ نُوحٍ",
     "جَبَلٌ",
     "الْمَوْجُ",
     "الْجُودِيُّ"
    ],
    "quran": [
     {
      "ar": "وَهِيَ تَجْرِي بِهِمْ فِي مَوْجٍ كَالْجِبَالِ وَنَادَى نُوحٌ ابْنَهُ وَكَانَ فِي مَعْزِلٍ يَا بُنَيَّ ارْكَبْ مَعَنَا وَلَا تَكُنْ مَعَ الْكَافِرِينَ",
      "ref": "Hûd 11:42",
      "tr": "Gemi onları dağlar gibi dalgalar arasında götürüyordu. Nûh, bir kenarda duran oğluna seslendi: Yavrum! Bizimle birlikte bin, kâfirlerle beraber olma.",
      "inText": "«يَا بُنَيَّ ارْكَبْ مَعَنَا...»"
     },
     {
      "ar": "قَالَ سَآوِي إِلَى جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللهِ إِلَّا مَنْ رَحِمَ وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ",
      "ref": "Hûd 11:43",
      "tr": "Dedi ki: Beni sudan koruyacak bir dağa sığınacağım. Dedi ki: Bugün Allah'ın emrinden koruyacak hiçbir şey yok; ancak O'nun merhamet ettiği kurtulur. Aralarına dalga girdi ve o da boğulanlardan oldu.",
      "inText": "«سَآوِي إِلَى جَبَلٍ...»"
     },
     {
      "ar": "قَالَ يَا نُوحُ إِنَّهُ لَيْسَ مِنْ أَهْلِكَ إِنَّهُ عَمَلٌ غَيْرُ صَالِحٍ فَلَا تَسْأَلْنِ مَا لَيْسَ لَكَ بِهِ عِلْمٌ إِنِّي أَعِظُكَ أَنْ تَكُونَ مِنَ الْجَاهِلِينَ",
      "ref": "Hûd 11:46",
      "tr": "Dedi ki: Ey Nûh! O senin ailenden değildir; o salih olmayan bir iş yaptı. Bilmediğin şeyi benden isteme. Cahillerden olmaman için sana öğüt veriyorum.",
      "inText": "«يَا نُوحُ إِنَّهُ لَيْسَ مِنْ أَهْلِكَ...»"
     },
     {
      "ar": "وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ وَاسْتَوَتْ عَلَى الْجُودِيِّ وَقِيلَ بُعْدًا لِلْقَوْمِ الظَّالِمِينَ",
      "ref": "Hûd 11:44",
      "tr": "Denildi ki: Ey yer! Suyunu yut. Ey gök! Tut (yağmurunu). Su çekildi, iş bitirildi; gemi Cûdî'nin üzerine oturdu ve: Zalimler topluluğu uzak olsun! denildi.",
      "inText": "وَاسْتَوَتِ السَّفِينَةُ عَلَى جَبَلِ الْجُودِيِّ"
     },
     {
      "ar": "سَلَامٌ عَلَى نُوحٍ فِي الْعَالَمِينَ",
      "ref": "Sâffât 37:79",
      "tr": "Âlemler içinde Nûh'a selam olsun.",
      "inText": "«سَلَامٌ عَلَى نُوحٍ فِي الْعَالَمِينَ»"
     }
    ]
   },
   "sections": [
    {
     "n": 19,
     "title_ar": "الطُّوفَانُ",
     "title_tr": "Tufan",
     "s": [
      [
       "وَجَاءَ وَعْدُ اللهِ فَالْعِيَاذُ بِاللهِ!",
       "Ve Allah'ın vaadi geldi; Allah'a sığınırız!"
      ],
      [
       "أَمْطَرَتِ السَّمَاءُ وَأَمْطَرَتْ وَأَمْطَرَتْ.",
       "Gök yağmur yağdırdı, yağdırdı, yağdırdı."
      ],
      [
       "حَتَّى كَأَنَّ السَّمَاءَ مُنْخَلَةٌ لَا تُمْسِكُ مَاءً.",
       "Sanki gök hiç su tutmayan bir elekti."
      ],
      [
       "وَنَبَعَ الْمَاءُ وَسَالَ حَتَّى أَحَاطَ بِالنَّاسِ مِنْ كُلِّ جَانِبٍ.",
       "Yerden su fışkırdı ve aktı; sonunda insanları her yandan kuşattı."
      ],
      [
       "وَأَوْحَى اللهُ إِلَى نُوحٍ: خُذْ مَعَكَ مَنْ آمَنَ بِكَ مِنْ قَوْمِكَ وَأَهْلِكَ.",
       "Allah Nûh'a vahyetti: Kavminden ve ailenden sana iman edenleri yanına al."
      ],
      [
       "وَأَوْحَى اللهُ إِلَى نُوحٍ أَنْ يَأْخُذَ مَعَهُ مِنْ كُلِّ حَيَوَانٍ وَطَائِرٍ زَوْجًا، ذَكَرًا وَأُنْثَى.",
       "Allah Nûh'a, her hayvandan ve kuştan bir çift, bir erkek ve bir dişi yanına almasını vahyetti."
      ],
      [
       "لِأَنَّ الطُّوفَانَ عَامٌّ لَا يَنْجُو مِنْهُ إِنْسَانٌ وَلَا حَيَوَانٌ.",
       "Çünkü tufan her yeri kaplayacaktı; ondan ne insan ne hayvan kurtulacaktı."
      ],
      [
       "وَكَذٰلِكَ فَعَلَ نُوحٌ، فَكَانَ مَعَهُ فِي السَّفِينَةِ مَنْ آمَنَ بِهِ مِنْ قَوْمِهِ.",
       "Nûh da öyle yaptı; gemide yanında kavminden ona iman edenler vardı."
      ],
      [
       "وَمِنْ كُلِّ حَيَوَانٍ وَطَائِرٍ زَوْجٌ.",
       "Ve her hayvandan ve kuştan bir çift."
      ],
      [
       "وَسَارَتِ السَّفِينَةُ تَجْرِي بِهِمْ فِي مَوْجٍ كَالْجِبَالِ.",
       "Gemi onları dağlar gibi dalgalar arasında götürmeye başladı."
      ],
      [
       "وَارْتَقَى الْقَوْمُ كُلَّ مَكَانٍ عَالٍ وَكُلَّ رَبْوَةٍ يَفِرُّونَ مِنْ عَذَابِ اللهِ.",
       "Kavim Allah'ın azabından kaçarak her yüksek yere ve her tepeye çıktı."
      ],
      [
       "وَلٰكِنْ لَا مَلْجَأَ مِنَ اللهِ إِلَّا إِلَيْهِ.",
       "Fakat Allah'tan kaçıp sığınılacak yer yine ancak O'dur."
      ]
     ]
    },
    {
     "n": 20,
     "title_ar": "ابْنُ نُوحٍ",
     "title_tr": "Nûh'un oğlu",
     "s": [
      [
       "وَكَانَ لِنُوحٍ ابْنٌ كَانَ مَعَ الْكَافِرِينَ.",
       "Nûh'un kâfirlerle birlikte olan bir oğlu vardı."
      ],
      [
       "وَرَأَى نُوحٌ ابْنَهُ فِي الطُّوفَانِ فَقَالَ: «يَا بُنَيَّ ارْكَبْ مَعَنَا وَلَا تَكُنْ مَعَ الْكَافِرِينَ».",
       "Nûh oğlunu tufanın içinde gördü ve dedi ki: «Yavrum! Bizimle birlikte bin, kâfirlerle beraber olma.»"
      ],
      [
       "قَالَ «سَآوِي إِلَى جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ».",
       "Dedi ki: «Beni sudan koruyacak bir dağa sığınacağım.»"
      ],
      [
       "قَالَ «لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللهِ إِلَّا مَنْ رَحِمَ».",
       "Dedi ki: «Bugün Allah'ın emrinden koruyacak hiçbir şey yok; ancak O'nun merhamet ettiği kurtulur.»"
      ],
      [
       "«وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ».",
       "«Aralarına dalga girdi ve o da boğulanlardan oldu.»"
      ],
      [
       "وَحَزِنَ نُوحٌ عَلَى ابْنِهِ، وَكَيْفَ لَا يَحْزَنُ وَهُوَ ابْنُهُ.",
       "Nûh oğlu için üzüldü; nasıl üzülmesin, o onun oğluydu."
      ],
      [
       "وَأَرَادَ أَنْ يَنْجُوَ ابْنُهُ مِنَ النَّارِ يَوْمَ الْقِيَامَةِ إِذْ لَمْ يَنْجُ مِنَ الْمَاءِ أَمْسِ.",
       "Dün sudan kurtulamadığına göre, oğlunun kıyamet günü ateşten kurtulmasını istedi."
      ],
      [
       "إِنَّ النَّارَ أَشَدُّ مِنَ الْمَاءِ، وَإِنَّ عَذَابَ الْآخِرَةِ أَشَدُّ.",
       "Ateş sudan daha şiddetlidir; ahiret azabı daha şiddetlidir."
      ],
      [
       "أَمَا وَعَدَهُ اللهُ أَنَّهُ يُنْجِي أَهْلَهُ؟ بَلَى! إِنَّ وَعْدَ اللهِ حَقٌّ.",
       "Allah ona ailesini kurtaracağını vaat etmemiş miydi? Evet! Allah'ın vaadi haktır."
      ],
      [
       "فَأَرَادَ أَنْ يَشْفَعَ لِابْنِهِ عِنْدَ اللهِ.",
       "Bu yüzden Allah katında oğlu için şefaat etmek istedi."
      ]
     ]
    },
    {
     "n": 21,
     "title_ar": "لَيْسَ مِنْ أَهْلِكَ",
     "title_tr": "O senin ailenden değil",
     "s": [
      [
       "«وَنَادَى نُوحٌ رَبَّهُ فَقَالَ إِنَّ ابْنِي مِنْ أَهْلِي وَإِنَّ وَعْدَكَ الْحَقُّ وَأَنْتَ أَحْكَمُ الْحَاكِمِينَ».",
       "«Nûh Rabbine seslendi ve dedi ki: Oğlum benim ailemdendir; senin vaadin elbette haktır ve sen hükmedenlerin en iyisisin.»"
      ],
      [
       "وَلٰكِنَّ اللهَ لَا يَنْظُرُ إِلَى الْأَنْسَابِ بَلْ يَنْظُرُ إِلَى الْأَعْمَالِ.",
       "Fakat Allah soylara bakmaz; amellere bakar."
      ],
      [
       "وَاللهُ لَا يَقْبَلُ الشَّفَاعَةَ فِي الْمُشْرِكِينَ.",
       "Allah müşrikler hakkında şefaati kabul etmez."
      ],
      [
       "وَلَيْسَ الْمُشْرِكُ مِنْ أَهْلِ النَّبِيِّ وَإِنْ كَانَ ابْنَهُ.",
       "Müşrik, peygamberin oğlu olsa bile onun ailesinden sayılmaz."
      ],
      [
       "فَنَبَّهَ اللهُ نُوحًا عَلَى ذٰلِكَ وَقَالَ: «يَا نُوحُ إِنَّهُ لَيْسَ مِنْ أَهْلِكَ إِنَّهُ عَمَلٌ غَيْرُ صَالِحٍ فَلَا تَسْأَلْنِ مَا لَيْسَ لَكَ بِهِ عِلْمٌ إِنِّي أَعِظُكَ أَنْ تَكُونَ مِنَ الْجَاهِلِينَ».",
       "Allah Nûh'u bu konuda uyardı ve dedi ki: «Ey Nûh! O senin ailenden değildir; o salih olmayan bir iş yaptı. Bilmediğin bir şeyi benden isteme. Cahillerden olmaman için sana öğüt veriyorum.»"
      ],
      [
       "وَتَنَبَّهَ نُوحٌ وَتَابَ إِلَى اللهِ وَقَالَ:",
       "Nûh uyarıyı anladı, Allah'a tövbe etti ve dedi ki:"
      ],
      [
       "«رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي أَكُنْ مِنَ الْخَاسِرِينَ».",
       "«Rabbim! Bilmediğim bir şeyi senden istemekten sana sığınırım. Beni bağışlamaz ve bana merhamet etmezsen kaybedenlerden olurum.»"
      ]
     ]
    },
    {
     "n": 22,
     "title_ar": "بَعْدَ الطُّوفَانِ",
     "title_tr": "Tufandan sonra",
     "s": [
      [
       "وَلَمَّا كَانَ مَا أَرَادَهُ اللهُ وَغَرِقَ الْكُفَّارُ أَمْسَكَتِ السَّمَاءُ وَغَارَ الْمَاءُ.",
       "Allah'ın dilediği olup kâfirler boğulunca gök yağmuru tuttu ve su çekildi."
      ],
      [
       "وَاسْتَوَتِ السَّفِينَةُ عَلَى جَبَلِ الْجُودِيِّ «وَقِيلَ بُعْدًا لِلْقَوْمِ الظَّالِمِينَ».",
       "Gemi Cûdî dağının üzerine oturdu «ve: Zalimler topluluğu (rahmetten) uzak olsun! denildi.»"
      ],
      [
       "وَقِيلَ يَا نُوحُ اهْبِطْ بِسَلَامٍ.",
       "Ve denildi ki: Ey Nûh! Esenlikle (gemiden) in."
      ],
      [
       "وَهَبَطَ نُوحٌ وَأَصْحَابُ السَّفِينَةِ يَمْشُونَ عَلَى الْبَرِّ بِسَلَامٍ.",
       "Nûh ve gemidekiler indiler; esenlik içinde karada yürüyorlardı."
      ],
      [
       "وَهَلَكَ الْكُفَّارُ مِنْ قَوْمِ نُوحٍ فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ.",
       "Nûh'un kavminden kâfirler helak oldu; onlara ne gök ağladı ne yer."
      ],
      [
       "وَبَارَكَ اللهُ فِي ذُرِّيَّةِ نُوحٍ فَانْتَشَرَتْ فِي الْأَرْضِ.",
       "Allah Nûh'un soyunu bereketli kıldı ve soyu yeryüzüne yayıldı."
      ],
      [
       "وَمَلَأَتِ الْأَرْضَ.",
       "Ve yeryüzünü doldurdu."
      ],
      [
       "وَكَانَ فِيهِمْ أُمَمٌ وَكَانَ فِيهَا أَنْبِيَاءُ وَمُلُوكٌ.",
       "Onlardan ümmetler oluştu; aralarında peygamberler ve krallar vardı."
      ],
      [
       "«سَلَامٌ عَلَى نُوحٍ فِي الْعَالَمِينَ».",
       "«Âlemler içinde Nûh'a selam olsun.»"
      ],
      [
       "«سَلَامٌ عَلَى نُوحٍ فِي الْعَالَمِينَ».",
       "«Âlemler içinde Nûh'a selam olsun.»"
      ]
     ]
    }
   ]
  }
 ]
});
