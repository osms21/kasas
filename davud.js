/* Kasasu'n-Nebiyyîn — Hz. Dâvûd ve Hz. Süleyman'ın Kıssası (s. 301–322)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "davud",
 "title_ar": "قِصَّةُ دَاوُدَ وَسُلَيْمَانَ عَلَيْهِمَا السَّلَامُ",
 "title_tr": "Hz. Dâvûd ve Hz. Süleyman'ın Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 301–322",
 "overrides": {
  "سخر": "سخر_تسخير",
  "وسخر": "سخر_تسخير",
  "والنا": "الان_لين",
  "راسيات": "الراسيات",
  "سعادة": "السعادة",
  "وكلا": "كل",
  "فخافت": "خافت",
  "وعبدتها": "يعبد",
  "فاحكم": "يحكم",
  "واتاه": "واتاكم",
  "اتاني": "واتاكم",
  "اتاكم": "واتاكم",
  "وهلاك": "هلاك",
  "فبراه": "براه",
  "وهمها": "همها"
 },
 "voverrides": {
  "وَأَلَانَ": "الان_لين",
  "فَغُيِّرَ": "غير_مجهول",
  "اطَّلَعْتُ": "تطلع",
  "فَأَطْلَعَتْ": "اطلعت_اخبار",
  "آتَانِيَ": "واتاكم"
 },
 "units": [
  {
   "id": 1,
   "emoji": "🛡️",
   "title_ar": "دَاوُدُ الشَّاكِرُ",
   "title_tr": "Şükreden Dâvûd",
   "pre": {
    "predict": {
     "prompt_tr": "Yazar diyor ki: Kur'an yalnızca helak olan kavimleri anlatmaz, peygamberlere verilen nimetleri de anlatır. Başlık: «نِعْمَةُ اللهِ عَلَى دَاوُدَ». Sence Allah Dâvûd'a ne verdi?",
     "options": [
      [
       "أَلَانَ لَهُ الْحَدِيدَ وَعَلَّمَهُ صَنْعَةَ الدُّرُوعِ",
       "Demiri ona yumuşattı ve ona zırh yapmayı öğretti"
      ],
      [
       "أَعْطَاهُ سَفِينَةً عَظِيمَةً",
       "Ona büyük bir gemi verdi"
      ],
      [
       "جَعَلَهُ تَاجِرًا غَنِيًّا",
       "Onu zengin bir tüccar yaptı"
      ]
     ]
    },
    "vocab": [
     [
      "آلَاءُ اللهِ",
      "Allah'ın nimetleri",
      "🎁"
     ],
     [
      "سَخَّرَ",
      "boyun eğdirdi, emrine verdi",
      "🫡"
     ],
     [
      "الْحَدِيدُ",
      "demir",
      "⚙️"
     ],
     [
      "دِرْعٌ ج دُرُوعٌ",
      "zırh",
      "🛡️"
     ],
     [
      "التَّسْبِيحُ",
      "Allah'ı tesbih etme",
      "📿"
     ],
     [
      "خَلِيفَةٌ",
      "halife, yönetici",
      "👑"
     ]
    ]
   },
   "stop": {
    "section": 3,
    "after": 0,
    "prompt_tr": "Dâvûd büyük bir mülke rağmen huşu içinde bir kuldu. Sence insanlar arasında nasıl hükmediyordu?",
    "options": [
     [
      "بِالْحَقِّ وَلَا يُحَابِي أَحَدًا",
      "Hak ile, kimseyi kayırmadan"
     ],
     [
      "يُحَابِي الْأَغْنِيَاءَ",
      "Zenginleri kayırarak"
     ],
     [
      "لَا يَحْكُمُ أَبَدًا",
      "Hiç hüküm vermezdi"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "يَتَحَدَّثُ الْقُرْآنُ عَنْ آلَاءِ اللهِ عَلَى الْأَنْبِيَاءِ.",
     "آتَى اللهُ دَاوُدَ وَسُلَيْمَانَ عِلْمًا.",
     "سَخَّرَ اللهُ لِدَاوُدَ الْجِبَالَ وَالطَّيْرَ.",
     "أَلَانَ لَهُ الْحَدِيدَ.",
     "كَانَ دَاوُدُ عَبْدًا أَوَّابًا وَحَاكِمًا مُقْسِطًا."
    ],
    "questions": [
     {
      "q": "عَنْ أَيِّ شَيْءٍ تَحَدَّثَ الْقُرْآنُ كَثِيرًا أَيْضًا؟",
      "qt": "Kur'an başka neyden de çokça söz etti?",
      "o": [
       "عَنْ آلَاءِ اللهِ وَنِعَمِهِ عَلَى الْأَنْبِيَاءِ",
       "عَنِ التِّجَارَةِ",
       "عَنِ الْحُرُوبِ فَقَطْ"
      ],
      "ot": [
       "Allah'ın peygamberlere verdiği nimetlerden",
       "Ticaretten",
       "Yalnızca savaşlardan"
      ],
      "a": 0,
      "ev": [
       "1.2"
      ]
     },
     {
      "q": "مَاذَا قَالَ دَاوُدُ وَسُلَيْمَانُ لَمَّا آتَاهُمَا اللهُ عِلْمًا؟",
      "qt": "Allah onlara ilim verince Dâvûd ve Süleyman ne dediler?",
      "o": [
       "الْحَمْدُ لِلهِ الَّذِي فَضَّلَنَا",
       "نَحْنُ أَعْلَمُ النَّاسِ",
       "لَا نُرِيدُ الْعِلْمَ"
      ],
      "ot": [
       "Bizi üstün kılan Allah'a hamdolsun",
       "Biz insanların en bilgilisiyiz",
       "İlim istemiyoruz"
      ],
      "a": 0,
      "ev": [
       "1.6"
      ]
     },
     {
      "q": "مَاذَا كَانَتِ الْجِبَالُ وَالطَّيْرُ تَفْعَلُ مَعَ دَاوُدَ؟",
      "qt": "Dağlar ve kuşlar Dâvûd ile birlikte ne yapıyordu?",
      "o": [
       "تَتَجَاوَبُ مَعَهُ فِي الدُّعَاءِ وَالتَّسْبِيحِ",
       "تَحْمِلُهُ مِنْ مَكَانٍ إِلَى مَكَانٍ",
       "تَحْرُسُ قَصْرَهُ"
      ],
      "ot": [
       "Dua ve tesbihte ona eşlik ediyordu",
       "Onu bir yerden bir yere taşıyordu",
       "Sarayını koruyordu"
      ],
      "a": 0,
      "ev": [
       "2.0"
      ]
     },
     {
      "q": "لِمَاذَا عَلَّمَ اللهُ دَاوُدَ صَنْعَةَ الدُّرُوعِ؟",
      "qt": "Allah Dâvûd'a zırh yapmayı neden öğretti?",
      "o": [
       "لِتُحْصِنَ النَّاسَ مِنْ بَأْسِهِمْ",
       "لِيَبِيعَهَا وَيَصِيرَ غَنِيًّا",
       "لِيَلْعَبَ بِهَا"
      ],
      "ot": [
       "Savaşta insanları korusun diye",
       "Satıp zengin olsun diye",
       "Onlarla oynasın diye"
      ],
      "a": 0,
      "ev": [
       "2.2"
      ]
     },
     {
      "q": "كَيْفَ كَانَ دَاوُدُ يَحْكُمُ بَيْنَ النَّاسِ؟",
      "qt": "Dâvûd insanlar arasında nasıl hükmediyordu?",
      "o": [
       "بِالْحَقِّ وَلَا يُحَابِي",
       "بِالْهَوَى",
       "بِالْمَالِ"
      ],
      "ot": [
       "Hak ile, kimseyi kayırmadan",
       "Hevesine göre",
       "Para ile"
      ],
      "a": 0,
      "ev": [
       "3.1"
      ]
     }
    ],
    "focus": {
     "title": "Sıfat uyumu: الْمُلْكِ الْوَاسِعِ، الْيَدِ الْحَاذِقَةِ الْقَوِيَّةِ",
     "explain": "Sıfat, nitelediği isimden <b>sonra</b> gelir ve ona belirlilik (الْـ), cinsiyet ve hareke bakımından uyar: <span class='ar-inline'>الْمُلْكِ الْوَاسِعِ</span> (geniş mülk), <span class='ar-inline'>الْيَدِ الْحَاذِقَةِ الْقَوِيَّةِ</span> (usta ve güçlü el; يَد dişil olduğu için sıfatlar da ـَة alır). Belirsiz isimde sıfat da belirsizdir: <span class='ar-inline'>عَذَابٌ شَدِيدٌ</span>, <span class='ar-inline'>عَبْدًا خَاشِعًا</span>.",
     "examples": [
      "وَكَانَ دَاوُدُ مَعَ هٰذَا الْمُلْكِ الْوَاسِعِ وَالْيَدِ الْحَاذِقَةِ الْقَوِيَّةِ",
      "عَبْدًا خَاشِعًا أَوَّابًا … حَاكِمًا مُقْسِطًا",
      "«لَهُمْ عَذَابٌ شَدِيدٌ بِمَا نَسُوا يَوْمَ الْحِسَابِ»"
     ],
     "items": [
      {
       "q": "مَعَ هٰذَا الْمُلْكِ ____",
       "o": [
        "الْوَاسِعِ",
        "وَاسِعٌ",
        "الْوَاسِعَةِ"
       ],
       "a": 0
      },
      {
       "q": "وَالْيَدِ الْحَاذِقَةِ ____",
       "o": [
        "الْقَوِيَّةِ",
        "الْقَوِيِّ",
        "قَوِيَّةٌ"
       ],
       "a": 0
      },
      {
       "q": "كَانَ عَبْدًا ____",
       "o": [
        "خَاشِعًا",
        "الْخَاشِعَ",
        "خَاشِعَةً"
       ],
       "a": 0
      },
      {
       "q": "«لَهُمْ عَذَابٌ ____»",
       "o": [
        "شَدِيدٌ",
        "الشَّدِيدُ",
        "شَدِيدَةٌ"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "آتَى اللهُ دَاوُدَ وَسُلَيْمَانَ {عِلْمًا}. وَسَخَّرَ لِدَاوُدَ الْجِبَالَ وَ{الطَّيْرَ}، وَأَلَانَ لَهُ {الْحَدِيدَ}. وَكَانَ دَاوُدُ عَبْدًا خَاشِعًا {أَوَّابًا}، يَحْكُمُ بَيْنَ النَّاسِ {بِالْحَقِّ}."
    },
    "think": {
     "q": "كَانَ دَاوُدُ مَلِكًا قَوِيًّا وَلٰكِنَّهُ كَانَ «عَبْدًا خَاشِعًا». لِمَاذَا يَذْكُرُ الْكِتَابُ ذٰلِكَ؟",
     "qt": "Dâvûd güçlü bir kraldı, ama «huşu içinde bir kul»du. Kitap bunu neden belirtiyor?",
     "model": "Önceki kıssalarda güç ve servet insanları kibre götürmüştü: Firavun, Âd ve Semûd kavimleri, Medyen'in zengin tüccarları... Dâvûd ise büyük bir mülke ve olağanüstü yeteneklere rağmen alçakgönüllü kaldı, nimetin sahibini unutmadı ve adaletten ayrılmadı. Yazar, gücün kendi başına kötü olmadığını; asıl önemli olanın onu şükürle ve adaletle kullanmak olduğunu gösteriyor."
    },
    "retell": [
     "آلَاءُ اللهِ",
     "عِلْمًا",
     "الْجِبَالُ وَالطَّيْرُ",
     "الْحَدِيدُ / الدُّرُوعُ",
     "أَوَّابٌ",
     "خَلِيفَةٌ"
    ],
    "quran": [
     {
      "ar": "وَلَقَدْ آتَيْنَا دَاوُودَ وَسُلَيْمَانَ عِلْمًا ۖ وَقَالَا الْحَمْدُ لِلَّهِ الَّذِي فَضَّلَنَا عَلَىٰ كَثِيرٍ مِنْ عِبَادِهِ الْمُؤْمِنِينَ ۝ وَوَرِثَ سُلَيْمَانُ دَاوُودَ ۖ وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنْطِقَ الطَّيْرِ وَأُوتِينَا مِنْ كُلِّ شَيْءٍ ۖ إِنَّ هَٰذَا لَهُوَ الْفَضْلُ الْمُبِينُ",
      "ref": "Neml 27:15–16",
      "tr": "Andolsun, Dâvûd'a ve Süleyman'a ilim verdik. İkisi: Bizi mümin kullarının birçoğuna üstün kılan Allah'a hamdolsun, dediler. Süleyman Dâvûd'a vâris oldu ve dedi: Ey insanlar! Bize kuş dili öğretildi ve bize her şeyden verildi. Şüphesiz bu apaçık bir lütuftur.",
      "inText": "«وَلَقَدْ آتَيْنَا دَاوُدَ وَسُلَيْمَانَ عِلْمًا …»"
     },
     {
      "ar": "وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا ۖ يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ ۖ وَأَلَنَّا لَهُ الْحَدِيدَ ۝ أَنِ اعْمَلْ سَابِغَاتٍ وَقَدِّرْ فِي السَّرْدِ ۖ وَاعْمَلُوا صَالِحًا ۖ إِنِّي بِمَا تَعْمَلُونَ بَصِيرٌ",
      "ref": "Sebe' 34:10–11",
      "tr": "Andolsun, Dâvûd'a tarafımızdan bir lütuf verdik: Ey dağlar ve kuşlar! Onunla birlikte tesbih edin. Demiri de ona yumuşattık: Geniş zırhlar yap, halkaları ölçülü dok; salih amel işleyin. Ben yaptıklarınızı hakkıyla görürüm.",
      "inText": "«وَلَقَدْ آتَيْنَا دَاوُدَ مِنَّا فَضْلًا …»"
     },
     {
      "ar": "وَعَلَّمْنَاهُ صَنْعَةَ لَبُوسٍ لَكُمْ لِتُحْصِنَكُمْ مِنْ بَأْسِكُمْ ۖ فَهَلْ أَنْتُمْ شَاكِرُونَ",
      "ref": "Enbiyâ 21:80",
      "tr": "Savaşta sizi korusun diye ona sizin için zırh yapmayı öğrettik. Peki şükrediyor musunuz?",
      "inText": "«وَعَلَّمْنَاهُ صَنْعَةَ لَبُوسٍ لَكُمْ …»"
     },
     {
      "ar": "يَا دَاوُودُ إِنَّا جَعَلْنَاكَ خَلِيفَةً فِي الْأَرْضِ فَاحْكُمْ بَيْنَ النَّاسِ بِالْحَقِّ وَلَا تَتَّبِعِ الْهَوَىٰ فَيُضِلَّكَ عَنْ سَبِيلِ اللَّهِ",
      "ref": "Sâd 38:26",
      "tr": "Ey Dâvûd! Biz seni yeryüzünde halife yaptık. İnsanlar arasında hak ile hükmet; hevese uyma, yoksa seni Allah'ın yolundan saptırır.",
      "inText": "«يَا دَاوُدُ إِنَّا جَعَلْنَاكَ خَلِيفَةً …»"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "الْقُرْآنُ يَتَحَدَّثُ عَنْ آلَاءِ اللهِ",
     "title_tr": "Kur'an Allah'ın nimetlerinden söz ediyor",
     "s": [
      [
       "وَلَمْ يَقْتَصِرِ الْقُرْآنُ عَلَى ذِكْرِ أَيَّامِ اللهِ وَمَا لَقِيَهُ الْأَنْبِيَاءُ وَالرُّسُلُ مِنْ تَكْذِيبٍ وَسُخْرِيَةٍ وَإِهَانَةٍ وَمُطَارَدَةٍ مِنَ الْأُمَمِ الَّتِي بُعِثُوا فِيهَا.",
       "Kur'an yalnızca Allah'ın (ibret) günlerinden ve peygamberlerle elçilerin, içlerine gönderildikleri ümmetlerden gördükleri yalanlama, alay, hakaret ve kovalanmadan söz etmekle kalmadı."
      ],
      [
       "وَمَا لَقِيَتْ هٰذِهِ الْأُمَمُ مِنْ عُقُوبَةٍ وَعَذَابٍ وَهَلَاكٍ وَدَمَارٍ لِتَكْذِيبِهَا لِلرُّسُلِ وَاسْتِهْزَائِهَا بِهِمْ وَكَيْدِهَا لَهُمْ وَهَمِّهَا بِقَتْلِهِمْ، كَمَا مَرَّ بِكُمْ فِي قِصَصِ النَّبِيِّينَ.",
       "Peygamber kıssalarında gördüğünüz gibi, bu ümmetlerin elçileri yalanlamaları, onlarla alay etmeleri, onlara tuzak kurmaları ve onları öldürmeye kalkışmaları yüzünden uğradıkları ceza, azap, helak ve yıkımdan söz etmekle de kalmadı."
      ],
      [
       "بَلْ تَحَدَّثَ الْقُرْآنُ كَثِيرًا عَنْ آلَاءِ اللهِ، وَحَكَى فِي بَسْطٍ أَحْيَانًا وَفِي اخْتِصَارٍ أَحْيَانًا عَنْ نِعَمٍ كَثِيرَةٍ، أَنْعَمَ بِهَا عَلَى كَثِيرٍ مِنَ الْأَنْبِيَاءِ.",
       "Aksine Kur'an, Allah'ın nimetlerinden çokça söz etti; Allah'ın pek çok peygambere verdiği birçok nimeti bazen uzun uzun, bazen kısaca anlattı."
      ],
      [
       "مِنْهُمْ دَاوُدُ وَسُلَيْمَانُ، وَمِنْهُمْ أَيُّوبُ وَيُونُسُ، وَمِنْهُمْ زَكَرِيَّا وَيَحْيَى.",
       "Onlardan biri Dâvûd ve Süleyman, biri Eyyûb ve Yûnus, biri de Zekeriyyâ ve Yahyâ'dır."
      ],
      [
       "فَأَمَّا دَاوُدُ وَسُلَيْمَانُ فَقَدْ مَكَّنَ اللهُ لَهُمَا فِي الْأَرْضِ، وَوَسَّعَ لَهُمَا فِي الْمُلْكِ، وَمَدَّ لَهُمَا فِي الْعِلْمِ.",
       "Dâvûd ve Süleyman'a gelince, Allah onlara yeryüzünde güç ve yer verdi, mülklerini genişletti, ilimlerini artırdı."
      ],
      [
       "وَعَلَّمَهُمَا كَثِيرًا مِمَّا جَهِلَهُ النَّاسُ، وَسَخَّرَ لَهُمَا الْأَقْوِيَاءَ وَالْعُتَاةَ، وَمَا لَا يَنْقَادُ مِنَ الْحَيَوَانَاتِ وَالْجَمَادَاتِ، فَقَالَ:",
       "İnsanların bilmediği pek çok şeyi onlara öğretti; güçlüleri ve azgınları, boyun eğmeyen hayvanları ve cansız varlıkları onların emrine verdi ve buyurdu:"
      ],
      [
       "«وَلَقَدْ آتَيْنَا دَاوُدَ وَسُلَيْمَانَ عِلْمًا وَقَالَا الْحَمْدُ لِلهِ الَّذِي فَضَّلَنَا عَلَى كَثِيرٍ مِنْ عِبَادِهِ الْمُؤْمِنِينَ * وَوَرِثَ سُلَيْمَانُ دَاوُدَ وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنْطِقَ الطَّيْرِ وَأُوتِينَا مِنْ كُلِّ شَيْءٍ إِنَّ هٰذَا لَهُوَ الْفَضْلُ الْمُبِينُ».",
       "«Andolsun, Dâvûd'a ve Süleyman'a ilim verdik. İkisi: Bizi mümin kullarının birçoğuna üstün kılan Allah'a hamdolsun, dediler. Süleyman Dâvûd'a vâris oldu ve dedi: Ey insanlar! Bize kuş dili öğretildi ve bize her şeyden verildi. Şüphesiz bu apaçık bir lütuftur.»"
      ]
     ]
    },
    {
     "n": 2,
     "title_ar": "نِعْمَةُ اللهِ عَلَى دَاوُدَ",
     "title_tr": "Allah'ın Dâvûd'a nimeti",
     "s": [
      [
       "فَأَمَّا دَاوُدُ فَقَدْ سَخَّرَ اللهُ لَهُ الْجِبَالَ وَالطَّيْرَ تَتَجَاوَبُ مَعَهُ فِي الدُّعَاءِ وَالتَّسْبِيحِ، وَعَلَّمَهُ صَنْعَةَ الدُّرُوعِ، وَأَلَانَ لَهُ الْحَدِيدَ.",
       "Dâvûd'a gelince, Allah dağları ve kuşları onun emrine verdi; dua ve tesbihte ona eşlik ediyorlardı. Ona zırh yapmayı öğretti ve demiri ona yumuşattı."
      ],
      [
       "«وَلَقَدْ آتَيْنَا دَاوُدَ مِنَّا فَضْلًا يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ وَأَلَنَّا لَهُ الْحَدِيدَ * أَنِ اعْمَلْ سَابِغَاتٍ وَقَدِّرْ فِي السَّرْدِ وَاعْمَلُوا صَالِحًا إِنِّي بِمَا تَعْمَلُونَ بَصِيرٌ».",
       "«Andolsun, Dâvûd'a tarafımızdan bir lütuf verdik: Ey dağlar ve kuşlar! Onunla birlikte tesbih edin, dedik. Demiri de ona yumuşattık: Geniş zırhlar yap, halkaları ölçülü dok; hepiniz salih amel işleyin. Ben yaptıklarınızı hakkıyla görürüm.»"
      ],
      [
       "وَيَقُولُ: «وَسَخَّرْنَا مَعَ دَاوُدَ الْجِبَالَ يُسَبِّحْنَ وَالطَّيْرَ وَكُنَّا فَاعِلِينَ * وَعَلَّمْنَاهُ صَنْعَةَ لَبُوسٍ لَكُمْ لِتُحْصِنَكُمْ مِنْ بَأْسِكُمْ فَهَلْ أَنْتُمْ شَاكِرُونَ».",
       "Ve buyuruyor: «Dağları ve kuşları Dâvûd ile birlikte tesbih etsinler diye boyun eğdirdik; bunları yapan bizdik. Savaşta sizi korusun diye ona sizin için zırh yapmayı öğrettik. Peki şükrediyor musunuz?»"
      ]
     ]
    },
    {
     "n": 3,
     "title_ar": "شُكْرُهُ عَلَى هٰذِهِ النِّعْمَةِ",
     "title_tr": "Bu nimete şükrü",
     "s": [
      [
       "وَكَانَ دَاوُدُ مَعَ هٰذَا الْمُلْكِ الْوَاسِعِ وَالْيَدِ الْحَاذِقَةِ الْقَوِيَّةِ عَبْدًا خَاشِعًا أَوَّابًا، دَائِمَ الذِّكْرِ، طَوِيلَ الدُّعَاءِ وَالتَّسْبِيحِ.",
       "Dâvûd bu geniş mülküne ve usta, güçlü eline rağmen huşu içinde, Allah'a çokça yönelen bir kuldu; hep zikreder, uzun uzun dua ve tesbih ederdi."
      ],
      [
       "حَاكِمًا مُقْسِطًا، يَحْكُمُ بَيْنَ النَّاسِ بِالْحَقِّ وَلَا يُحَابِي.",
       "Adaletli bir hükümdardı; insanlar arasında hak ile hükmeder, kimseyi kayırmazdı."
      ],
      [
       "يَقُولُ اللهُ تَعَالَى: «يَا دَاوُدُ إِنَّا جَعَلْنَاكَ خَلِيفَةً فِي الْأَرْضِ فَاحْكُمْ بَيْنَ النَّاسِ بِالْحَقِّ وَلَا تَتَّبِعِ الْهَوَى فَيُضِلَّكَ عَنْ سَبِيلِ اللهِ إِنَّ الَّذِينَ يَضِلُّونَ عَنْ سَبِيلِ اللهِ لَهُمْ عَذَابٌ شَدِيدٌ بِمَا نَسُوا يَوْمَ الْحِسَابِ».",
       "Allah Teâlâ buyuruyor: «Ey Dâvûd! Biz seni yeryüzünde halife yaptık. İnsanlar arasında hak ile hükmet; hevese uyma, yoksa seni Allah'ın yolundan saptırır. Allah'ın yolundan sapanlara, hesap gününü unutmaları yüzünden çetin bir azap vardır.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "🍇",
   "title_ar": "الرِّيحُ وَالْكَرْمُ",
   "title_tr": "Rüzgâr ve bağ",
   "pre": {
    "predict": {
     "prompt_tr": "Süleyman'a rüzgâr ve cinler boyun eğdirildi. Sonra Dâvûd'a bir dava geldi: Koyunlar geceleyin birinin üzüm bağına girip onu mahvetti. Sence genç Süleyman nasıl bir hüküm önerdi?",
     "options": [
      [
       "أَنْ يَأْخُذَ صَاحِبُ الْكَرْمِ الْغَنَمَ حَتَّى يَعُودَ الْكَرْمُ كَمَا كَانَ",
       "Bağ eski hâline gelinceye kadar bağ sahibi koyunlardan faydalansın"
      ],
      [
       "أَنْ تُذْبَحَ الْغَنَمُ كُلُّهَا",
       "Bütün koyunlar kesilsin"
      ],
      [
       "أَلَّا يَأْخُذَ صَاحِبُ الْكَرْمِ شَيْئًا",
       "Bağ sahibi hiçbir şey almasın"
      ]
     ]
    },
    "vocab": [
     [
      "الرِّيحُ ج الرِّيَاحُ",
      "rüzgâr",
      "🌬️"
     ],
     [
      "الْجِنُّ / الشَّيَاطِينُ",
      "cinler / şeytanlar",
      "👤"
     ],
     [
      "كَرْمٌ",
      "üzüm bağı",
      "🍇"
     ],
     [
      "عَنَاقِيدُ",
      "salkımlar",
      "🍇"
     ],
     [
      "غَنَمٌ",
      "koyunlar",
      "🐑"
     ],
     [
      "قَضِيَّةٌ",
      "dava, mesele",
      "⚖️"
     ]
    ]
   },
   "stop": {
    "section": 5,
    "after": 2,
    "prompt_tr": "Dâvûd koyunların bağ sahibine verilmesine hükmetti. Sence Süleyman ne dedi?",
    "options": [
     [
      "غَيْرُ هٰذَا يَا نَبِيَّ اللهِ",
      "Bundan başka (bir hüküm) var, ey Allah'ın peygamberi"
     ],
     [
      "صَدَقْتَ، هٰذَا هُوَ الْحَقُّ",
      "Doğru söyledin, hak budur"
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
     "سَخَّرَ اللهُ لِسُلَيْمَانَ الرِّيحَ.",
     "سَخَّرَ لَهُ الْجِنَّ يَعْمَلُونَ لَهُ.",
     "دَخَلَتْ غَنَمٌ فِي كَرْمٍ فَأَفْسَدَتْهُ.",
     "قَضَى دَاوُدُ بِالْغَنَمِ لِصَاحِبِ الْكَرْمِ.",
     "قَالَ سُلَيْمَانُ: غَيْرُ هٰذَا يَا نَبِيَّ اللهِ."
    ],
    "questions": [
     {
      "q": "مَاذَا كَانَتِ الرِّيحُ تَفْعَلُ لِسُلَيْمَانَ؟",
      "qt": "Rüzgâr Süleyman için ne yapıyordu?",
      "o": [
       "تَحْمِلُهُ مِنْ مَكَانٍ إِلَى مَكَانٍ",
       "تَسْقِي زُرُوعَهُ",
       "تُخِيفُ أَعْدَاءَهُ فَقَطْ"
      ],
      "ot": [
       "Onu bir yerden bir yere taşıyordu",
       "Ekinlerini suluyordu",
       "Yalnızca düşmanlarını korkutuyordu"
      ],
      "a": 0,
      "ev": [
       "4.0"
      ]
     },
     {
      "q": "مَاذَا كَانَ الْجِنُّ يَفْعَلُونَ لِسُلَيْمَانَ؟",
      "qt": "Cinler Süleyman için ne yapıyordu?",
      "o": [
       "يُنَفِّذُونَ أَوَامِرَهُ وَيُكْمِلُونَ مَشَارِيعَهُ",
       "يُعَلِّمُونَهُ السِّحْرَ",
       "يُقَاتِلُونَهُ"
      ],
      "ot": [
       "Emirlerini yerine getirip işlerini tamamlıyorlardı",
       "Ona sihir öğretiyorlardı",
       "Onunla savaşıyorlardı"
      ],
      "a": 0,
      "ev": [
       "4.1"
      ]
     },
     {
      "q": "مَاذَا فَعَلَتِ الْغَنَمُ بِالْكَرْمِ؟",
      "qt": "Koyunlar bağa ne yaptı?",
      "o": [
       "أَفْسَدَتْهُ",
       "حَرَسَتْهُ",
       "سَقَتْهُ"
      ],
      "ot": [
       "Onu mahvetti",
       "Onu korudu",
       "Onu suladı"
      ],
      "a": 0,
      "ev": [
       "5.1"
      ]
     },
     {
      "q": "بِمَاذَا قَضَى دَاوُدُ أَوَّلًا؟",
      "qt": "Dâvûd önce nasıl hükmetti?",
      "o": [
       "بِالْغَنَمِ لِصَاحِبِ الْكَرْمِ",
       "بِالْكَرْمِ لِصَاحِبِ الْغَنَمِ",
       "بِقَتْلِ الْغَنَمِ"
      ],
      "ot": [
       "Koyunları bağ sahibine verdi",
       "Bağı koyun sahibine verdi",
       "Koyunların öldürülmesine"
      ],
      "a": 0,
      "ev": [
       "5.2"
      ]
     },
     {
      "q": "مَتَى يَرْجِعُ الْكَرْمُ وَالْغَنَمُ إِلَى صَاحِبَيْهِمَا فِي حُكْمِ سُلَيْمَانَ؟",
      "qt": "Süleyman'ın hükmünde bağ ve koyunlar sahiplerine ne zaman döner?",
      "o": [
       "إِذَا كَانَ الْكَرْمُ كَمَا كَانَ",
       "بَعْدَ عَشْرِ سِنِينَ",
       "لَا يَرْجِعَانِ أَبَدًا"
      ],
      "ot": [
       "Bağ eski hâline gelince",
       "On yıl sonra",
       "Hiç dönmezler"
      ],
      "a": 0,
      "ev": [
       "5.5"
      ]
     }
    ],
    "focus": {
     "title": "فَـ ile sonuç: تَدْفَعُ … فَيَقُومُ …",
     "explain": "<b>فَـ</b> bir olayı hemen ardından gelen olaya ya da sonucuna bağlar: «ve böylece, bunun üzerine». <span class='ar-inline'>دَخَلَتْ فِيهِ غَنَمٌ فَأَفْسَدَتْهُ</span> (koyunlar girdi ve onu mahvetti). Muzari ile de kullanılır: <span class='ar-inline'>تَدْفَعُ الْكَرْمَ إِلَى صَاحِبِ الْغَنَمِ فَيَقُومُ عَلَيْهِ</span> (bağı koyun sahibine verirsin, o da ona bakar). Karşılaştırın: <span class='ar-inline'>وَ</span> yalnızca ekler, <span class='ar-inline'>فَـ</span> sıra ve sonuç bildirir.",
     "examples": [
      "فَدَخَلَتْ فِيهِ غَنَمٌ لِقَوْمٍ فَأَفْسَدَتْهُ",
      "تَدْفَعُ الْكَرْمَ إِلَى صَاحِبِ الْغَنَمِ فَيَقُومُ عَلَيْهِ كَمَا كَانَ",
      "وَتَدْفَعُ الْغَنَمَ إِلَى صَاحِبِ الْكَرْمِ فَيُصِيبُ مِنْهَا"
     ],
     "items": [
      {
       "q": "دَخَلَتْ غَنَمٌ فِي الْكَرْمِ ____",
       "o": [
        "فَأَفْسَدَتْهُ",
        "فَيُفْسِدُ",
        "إِفْسَادٌ"
       ],
       "a": 0
      },
      {
       "q": "تَدْفَعُ الْغَنَمَ إِلَى صَاحِبِ الْكَرْمِ ____ مِنْهَا.",
       "o": [
        "فَيُصِيبُ",
        "فَأَصَابُوا",
        "إِصَابَةٌ"
       ],
       "a": 0
      },
      {
       "q": "سَخَّرَ لَهُ الرِّيحَ ____ إِلَيْهِ فِي أَقْرَبِ وَقْتٍ.",
       "o": [
        "فَيَصِلُ",
        "وَصَلَ",
        "وُصُولًا"
       ],
       "a": 0
      },
      {
       "q": "«فَقَضَى دَاوُدُ» — burada فَـ = …",
       "o": [
        "bunun üzerine",
        "ama",
        "çünkü"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "سَخَّرَ اللهُ لِسُلَيْمَانَ {الرِّيحَ} وَالْجِنَّ. وَدَخَلَتْ {غَنَمٌ} فِي كَرْمٍ فَأَفْسَدَتْهُ. فَقَضَى دَاوُدُ بِالْغَنَمِ لِصَاحِبِ {الْكَرْمِ}. فَقَالَ سُلَيْمَانُ: {غَيْرُ} هٰذَا يَا نَبِيَّ اللهِ. وَكُلًّا آتَاهُ اللهُ حُكْمًا وَ{عِلْمًا}."
    },
    "think": {
     "q": "لِمَاذَا كَانَ حُكْمُ سُلَيْمَانَ أَدَقَّ مِنْ حُكْمِ دَاوُدَ؟",
     "qt": "Süleyman'ın hükmü neden Dâvûd'unkinden daha inceydi?",
     "model": "Dâvûd'un hükmünde bağ sahibi zararını alıyordu ama koyun sahibi bütün malını kaybediyordu. Süleyman'ın hükmünde ise kimse malını kaybetmiyor: Bağ sahibi bağ düzelinceye kadar koyunların sütünden ve yününden faydalanıyor, koyun sahibi de bağı eski hâline getirip koyunlarını geri alıyor. Ayet ise ikisine de «hikmet ve ilim verdik» diyerek babayı küçümsemiyor; oğlunun daha ince bir çözüm bulduğunu söylüyor."
    },
    "retell": [
     "الرِّيحُ",
     "الْجِنُّ",
     "الْكَرْمُ",
     "الْغَنَمُ",
     "قَضَى دَاوُدُ",
     "غَيْرُ هٰذَا"
    ],
    "quran": [
     {
      "ar": "وَلِسُلَيْمَانَ الرِّيحَ عَاصِفَةً تَجْرِي بِأَمْرِهِ إِلَى الْأَرْضِ الَّتِي بَارَكْنَا فِيهَا ۚ وَكُنَّا بِكُلِّ شَيْءٍ عَالِمِينَ",
      "ref": "Enbiyâ 21:81",
      "tr": "Süleyman'ın emrine de, onun emriyle bereketli kıldığımız topraklara doğru esen şiddetli rüzgârı verdik. Biz her şeyi biliriz.",
      "inText": "«وَلِسُلَيْمَانَ الرِّيحَ عَاصِفَةً …»"
     },
     {
      "ar": "يَعْمَلُونَ لَهُ مَا يَشَاءُ مِنْ مَحَارِيبَ وَتَمَاثِيلَ وَجِفَانٍ كَالْجَوَابِ وَقُدُورٍ رَاسِيَاتٍ ۚ اعْمَلُوا آلَ دَاوُودَ شُكْرًا ۚ وَقَلِيلٌ مِنْ عِبَادِيَ الشَّكُورُ",
      "ref": "Sebe' 34:13",
      "tr": "Ona, dilediği gibi mabetler, heykeller, havuz büyüklüğünde çanaklar ve yerinden kımıldamaz kazanlar yaparlardı. Ey Dâvûd ailesi! Şükrederek çalışın. Kullarımdan pek azı çok şükredendir.",
      "inText": "«… اعْمَلُوا آلَ دَاوُدَ شُكْرًا …»"
     },
     {
      "ar": "وَدَاوُودَ وَسُلَيْمَانَ إِذْ يَحْكُمَانِ فِي الْحَرْثِ إِذْ نَفَشَتْ فِيهِ غَنَمُ الْقَوْمِ وَكُنَّا لِحُكْمِهِمْ شَاهِدِينَ ۝ فَفَهَّمْنَاهَا سُلَيْمَانَ ۚ وَكُلًّا آتَيْنَا حُكْمًا وَعِلْمًا",
      "ref": "Enbiyâ 21:78–79",
      "tr": "Dâvûd'u ve Süleyman'ı da an. Hani bir topluluğun koyunları geceleyin ekine dağılıp onu yemişti de ikisi ekin hakkında hüküm veriyorlardı. Biz onların hükmüne şahittik. O meseleyi Süleyman'a kavrattık. Her birine hikmet ve ilim verdik.",
      "inText": "«وَدَاوُدَ وَسُلَيْمَانَ إِذْ يَحْكُمَانِ فِي الْحَرْثِ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 4,
     "title_ar": "نِعْمَةُ اللهِ عَلَى سُلَيْمَانَ",
     "title_tr": "Allah'ın Süleyman'a nimeti",
     "s": [
      [
       "فَأَمَّا سُلَيْمَانُ فَقَدْ سَخَّرَ اللهُ لَهُ الرِّيَاحَ تَجْرِي بِأَمْرِهِ وَتَحْمِلُهُ مِنْ مَكَانٍ إِلَى مَكَانٍ، فَيَصِلُ إِلَيْهِ فِي أَقْرَبِ وَقْتٍ وَأَسْرَعِ زَمَانٍ.",
       "Süleyman'a gelince, Allah rüzgârları onun emrine verdi; onun emriyle esiyor ve onu bir yerden bir yere taşıyordu; o da gideceği yere en kısa sürede, en hızlı biçimde varıyordu."
      ],
      [
       "وَسَخَّرَ لَهُ الْأَقْوِيَاءَ وَالْحَاذِقِينَ مِنَ الْجِنِّ وَالْمَارِدِينَ مِنَ الشَّيَاطِينِ، يُنَفِّذُونَ أَوَامِرَهُ وَيُكْمِلُونَ مَشَارِيعَهُ الْعُمْرَانِيَّةَ وَالْبِنَائِيَّةَ الْعِمْلَاقَةَ.",
       "Cinlerin güçlülerini ve ustalarını, şeytanların azgınlarını da onun emrine verdi; emirlerini yerine getiriyor, dev imar ve inşaat işlerini tamamlıyorlardı."
      ],
      [
       "«وَلِسُلَيْمَانَ الرِّيحَ عَاصِفَةً تَجْرِي بِأَمْرِهِ إِلَى الْأَرْضِ الَّتِي بَارَكْنَا فِيهَا وَكُنَّا بِكُلِّ شَيْءٍ عَالِمِينَ * وَمِنَ الشَّيَاطِينِ مَنْ يَغُوصُونَ لَهُ وَيَعْمَلُونَ عَمَلًا دُونَ ذٰلِكَ وَكُنَّا لَهُمْ حَافِظِينَ».",
       "«Süleyman'ın emrine de, onun emriyle bereketli kıldığımız topraklara doğru esen şiddetli rüzgârı verdik. Biz her şeyi biliriz. Şeytanlardan da onun için dalgıçlık yapan ve bundan başka işler gören kimseler vardı. Onları gözetleyen bizdik.»"
      ],
      [
       "«وَلِسُلَيْمَانَ الرِّيحَ غُدُوُّهَا شَهْرٌ وَرَوَاحُهَا شَهْرٌ وَأَسَلْنَا لَهُ عَيْنَ الْقِطْرِ وَمِنَ الْجِنِّ مَنْ يَعْمَلُ بَيْنَ يَدَيْهِ بِإِذْنِ رَبِّهِ وَمَنْ يَزِغْ مِنْهُمْ عَنْ أَمْرِنَا نُذِقْهُ مِنْ عَذَابِ السَّعِيرِ * يَعْمَلُونَ لَهُ مَا يَشَاءُ مِنْ مَحَارِيبَ وَتَمَاثِيلَ وَجِفَانٍ كَالْجَوَابِ وَقُدُورٍ رَاسِيَاتٍ اعْمَلُوا آلَ دَاوُدَ شُكْرًا وَقَلِيلٌ مِنْ عِبَادِيَ الشَّكُورُ».",
       "«Süleyman'a da rüzgârı (verdik); sabahleyin gidişi bir aylık, akşamleyin dönüşü bir aylık yoldu. Ona erimiş bakır pınarını akıttık. Cinlerden bir kısmı da Rabbinin izniyle onun önünde çalışırdı; içlerinden kim emrimizden saparsa ona alevli ateşin azabını tattırırız. Ona, dilediği gibi mabetler, heykeller, havuz büyüklüğünde çanaklar ve yerinden kımıldamaz kazanlar yaparlardı. Ey Dâvûd ailesi! Şükrederek çalışın. Kullarımdan pek azı çok şükredendir.»"
      ]
     ]
    },
    {
     "n": 5,
     "title_ar": "فِقْهٌ دَقِيقٌ وَعِلْمٌ عَمِيقٌ",
     "title_tr": "İnce bir kavrayış, derin bir ilim",
     "s": [
      [
       "وَقَدْ تَجَلَّى ذَكَاؤُهُ وَقُدْرَتُهُ عَلَى الْحُكْمِ الصَّحِيحِ فِي قَضِيَّةٍ رُفِعَتْ إِلَى وَالِدِهِ الْعَظِيمِ.",
       "Süleyman'ın zekâsı ve doğru hüküm verme yeteneği, yüce babasına getirilen bir davada ortaya çıktı."
      ],
      [
       "فَكَانَ لِقَوْمٍ كَرْمٌ قَدْ أَنْبَتَتْ عَنَاقِيدُهُ، فَدَخَلَتْ فِيهِ غَنَمٌ لِقَوْمٍ فَأَفْسَدَتْهُ.",
       "Bazı insanların salkımları çıkmış bir üzüm bağı vardı; başka bazı insanların koyunları bağa girip onu mahvetti."
      ],
      [
       "فَقَضَى دَاوُدُ بِالْغَنَمِ لِصَاحِبِ الْكَرْمِ.",
       "Dâvûd, koyunların bağ sahibine verilmesine hükmetti."
      ],
      [
       "فَقَالَ سُلَيْمَانُ: غَيْرُ هٰذَا يَا نَبِيَّ اللهِ، قَالَ: وَمَا ذَاكَ؟",
       "Süleyman dedi: Bundan başka (bir hüküm), ey Allah'ın peygamberi! Dâvûd dedi: O nedir?"
      ],
      [
       "قَالَ: تَدْفَعُ الْكَرْمَ إِلَى صَاحِبِ الْغَنَمِ فَيَقُومُ عَلَيْهِ كَمَا كَانَ، وَتَدْفَعُ الْغَنَمَ إِلَى صَاحِبِ الْكَرْمِ فَيُصِيبُ مِنْهَا.",
       "Dedi ki: Bağı koyun sahibine verirsin, o da bağa eski hâline gelinceye kadar bakar; koyunları da bağ sahibine verirsin, o da onlardan faydalanır."
      ],
      [
       "حَتَّى إِذَا كَانَ الْكَرْمُ كَمَا كَانَ دَفَعْتَ الْكَرْمَ إِلَى صَاحِبِهِ وَدَفَعْتَ الْغَنَمَ إِلَى صَاحِبِهَا.",
       "Bağ eski hâline gelince bağı sahibine, koyunları da sahibine verirsin."
      ],
      [
       "وَخَصَّهُ اللهُ بِفِقْهٍ دَقِيقٍ وَعِلْمٍ عَمِيقٍ فَقَالَ:",
       "Allah onu ince bir kavrayış ve derin bir ilimle seçkin kıldı ve buyurdu:"
      ],
      [
       "«وَدَاوُدَ وَسُلَيْمَانَ إِذْ يَحْكُمَانِ فِي الْحَرْثِ إِذْ نَفَشَتْ فِيهِ غَنَمُ الْقَوْمِ وَكُنَّا لِحُكْمِهِمْ شَاهِدِينَ * فَفَهَّمْنَاهَا سُلَيْمَانَ وَكُلًّا آتَيْنَا حُكْمًا وَعِلْمًا».",
       "«Dâvûd'u ve Süleyman'ı da (an). Hani bir topluluğun koyunları geceleyin ekine dağılıp onu yemişti de ikisi ekin hakkında hüküm veriyorlardı. Biz onların hükmüne şahittik. O meseleyi Süleyman'a kavrattık. Her birine hikmet ve ilim verdik.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "🐜",
   "title_ar": "النَّمْلَةُ وَالْهُدْهُدُ",
   "title_tr": "Karınca ve hüdhüd",
   "pre": {
    "predict": {
     "prompt_tr": "Süleyman kuşların ve hayvanların dilini biliyordu. Başlıklar: «سُلَيْمَانُ يَعْرِفُ لُغَةَ الطَّيْرِ وَالْحَيَوَانِ», «قِصَّةُ هُدْهُدٍ». Sence hüdhüd Süleyman'a nereden haber getirdi?",
     "options": [
      [
       "مِنْ سَبَإٍ: قَوْمٌ يَسْجُدُونَ لِلشَّمْسِ",
       "Sebe'den: güneşe secde eden bir kavim"
      ],
      [
       "مِنْ مِصْرَ: فِرْعَوْنُ جَدِيدٌ",
       "Mısır'dan: yeni bir Firavun"
      ],
      [
       "مِنْ مَدْيَنَ: قَوْمُ شُعَيْبٍ",
       "Medyen'den: Şuayb'ın kavmi"
      ]
     ]
    },
    "vocab": [
     [
      "نَمْلَةٌ / النَّمْلُ",
      "karınca / karıncalar",
      "🐜"
     ],
     [
      "وَادٍ",
      "vadi",
      "🏞️"
     ],
     [
      "حَافِرٌ ج حَوَافِرُ",
      "toynak",
      "🐴"
     ],
     [
      "الْهُدْهُدُ",
      "hüdhüd kuşu",
      "🐦"
     ],
     [
      "تَوَعَّدَ",
      "tehdit etti",
      "☝️"
     ],
     [
      "سَبَأٌ",
      "Sebe' (Yemen'de bir ülke)",
      "🏰"
     ]
    ]
   },
   "stop": {
    "section": 7,
    "after": 2,
    "prompt_tr": "Hüdhüd kayboldu; Süleyman onu tehdit etti. Kısa süre sonra hüdhüd geldi. Sence ne dedi?",
    "options": [
     [
      "جِئْتُكَ بِخَبَرِ صِدْقٍ عَنْ سَبَإٍ",
      "Sana Sebe' hakkında doğru bir haber getirdim"
     ],
     [
      "كُنْتُ نَائِمًا",
      "Uyuyordum"
     ],
     [
      "ضَلَلْتُ الطَّرِيقَ",
      "Yolumu kaybettim"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "جَمَعَ سُلَيْمَانُ جُنُودَهُ مِنَ الْجِنِّ وَالْإِنْسِ وَالطَّيْرِ.",
     "خَافَتْ نَمْلَةٌ عَلَى قَبِيلَتِهَا.",
     "حَمِدَ سُلَيْمَانُ اللهَ وَلَمْ يَأْخُذْهُ التِّيهُ.",
     "لَمْ يَجِدْ سُلَيْمَانُ الْهُدْهُدَ فَتَوَعَّدَهُ.",
     "جَاءَ الْهُدْهُدُ بِخَبَرٍ عَنْ سَبَإٍ."
    ],
    "questions": [
     {
      "q": "مِنْ أَيِّ شَيْءٍ كَانَتْ جُنُودُ سُلَيْمَانَ؟",
      "qt": "Süleyman'ın orduları kimlerden oluşuyordu?",
      "o": [
       "مِنَ الْجِنِّ وَالْإِنْسِ وَالطَّيْرِ",
       "مِنَ الْإِنْسِ فَقَطْ",
       "مِنَ الْخَيْلِ وَالْإِبِلِ"
      ],
      "ot": [
       "Cinlerden, insanlardan ve kuşlardan",
       "Yalnızca insanlardan",
       "Atlardan ve develerden"
      ],
      "a": 0,
      "ev": [
       "6.2"
      ]
     },
     {
      "q": "مِمَّ خَافَتِ النَّمْلَةُ؟",
      "qt": "Karınca neden korktu?",
      "o": [
       "أَنْ تَحْطِمَ الْخُيُولُ قَبِيلَتَهَا",
       "أَنْ يَأْكُلَهَا الطَّيْرُ",
       "أَنْ يَنْزِلَ الْمَطَرُ"
      ],
      "ot": [
       "Atların kabilesini ezmesinden",
       "Kuşların onu yemesinden",
       "Yağmur yağmasından"
      ],
      "a": 0,
      "ev": [
       "6.3"
      ]
     },
     {
      "q": "مَاذَا فَعَلَ سُلَيْمَانُ لَمَّا فَهِمَ كَلَامَ النَّمْلَةِ؟",
      "qt": "Süleyman karıncanın sözünü anlayınca ne yaptı?",
      "o": [
       "حَمِدَ اللهَ وَشَكَرَ نِعْمَتَهُ",
       "تَكَبَّرَ وَفَخِرَ",
       "قَتَلَ النَّمْلَ"
      ],
      "ot": [
       "Allah'a hamd edip nimetine şükretti",
       "Kibirlenip övündü",
       "Karıncaları öldürdü"
      ],
      "a": 0,
      "ev": [
       "6.6"
      ]
     },
     {
      "q": "مَا عَمَلُ الْهُدْهُدِ عِنْدَ سُلَيْمَانَ؟",
      "qt": "Hüdhüdün Süleyman'ın yanındaki görevi neydi?",
      "o": [
       "يَدُلُّهُ عَلَى مَوَاضِعِ الْمِيَاهِ",
       "يَحْمِلُ الطَّعَامَ",
       "يُغَنِّي لَهُ"
      ],
      "ot": [
       "Ona su bulunan yerleri göstermek",
       "Yiyecek taşımak",
       "Ona şarkı söylemek"
      ],
      "a": 0,
      "ev": [
       "7.0"
      ]
     },
     {
      "q": "مَاذَا كَانَ أَهْلُ سَبَإٍ يَعْبُدُونَ؟",
      "qt": "Sebe' halkı neye tapıyordu?",
      "o": [
       "الشَّمْسَ",
       "الْقَمَرَ",
       "الْعِجْلَ"
      ],
      "ot": [
       "Güneşe",
       "Aya",
       "Buzağıya"
      ],
      "a": 0,
      "ev": [
       "7.6"
      ]
     }
    ],
    "focus": {
     "title": "Fiil + عَلَى: اطَّلَعَ عَلَى، دَلَّ عَلَى، خَافَ عَلَى",
     "explain": "Bazı fiiller anlamlarını belli bir harf-i cerle tamamlar; <b>عَلَى</b> ile gelince anlam değişir: <span class='ar-inline'>اطَّلَعَ عَلَى</span> (öğrendi, vâkıf oldu), <span class='ar-inline'>دَلَّهُ عَلَى</span> (ona gösterdi), <span class='ar-inline'>خَافَ عَلَى</span> (… için korktu; karşılaştırın: <span class='ar-inline'>خَافَ مِنْ</span> «-den korktu»), <span class='ar-inline'>مَرَّ عَلَى</span> (-den geçti), <span class='ar-inline'>حَمَلَهُ عَلَى</span> (onu … -e sevk etti).",
     "examples": [
      "وَكَانَ الْهُدْهُدُ … يَدُلُّهُ عَلَى مَوَاضِعِ الْمِيَاهِ",
      "فَخَافَتْ نَمْلَةٌ عَلَى قَبِيلَتِهَا",
      "اطَّلَعْتُ عَلَى مَا لَمْ تَطَّلِعْ عَلَيْهِ أَنْتَ وَلَا جُنُودُكَ"
     ],
     "items": [
      {
       "q": "فَمَرَّ سُلَيْمَانُ ____ وَادِي النَّمْلِ.",
       "o": [
        "عَلَى",
        "مِنْ",
        "إِلَى"
       ],
       "a": 0
      },
      {
       "q": "فَخَافَتْ نَمْلَةٌ ____ قَبِيلَتِهَا.",
       "o": [
        "عَلَى",
        "فِي",
        "بِـ"
       ],
       "a": 0
      },
      {
       "q": "اطَّلَعْتُ ____ مَا لَمْ تَطَّلِعْ عَلَيْهِ.",
       "o": [
        "عَلَى",
        "عَنْ",
        "مَعَ"
       ],
       "a": 0
      },
      {
       "q": "«بَلْ حَمَلَهُ ذٰلِكَ عَلَى حَمْدِ اللهِ» = …",
       "o": [
        "Bu onu Allah'a hamd etmeye sevk etti",
        "Allah'ı taşıdı",
        "Allah'a hamd etmedi"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "مَرَّ سُلَيْمَانُ عَلَى وَادِي {النَّمْلِ}، فَخَافَتْ نَمْلَةٌ عَلَى {قَبِيلَتِهَا}. فَحَمِدَ سُلَيْمَانُ اللهَ. وَلَمْ يَجِدِ {الْهُدْهُدَ}، ثُمَّ جَاءَ الْهُدْهُدُ بِخَبَرٍ عَنْ {سَبَإٍ}: قَوْمٌ يَسْجُدُونَ لِ{لشَّمْسِ}."
    },
    "think": {
     "q": "لِمَاذَا لَمْ يَأْخُذِ التِّيهُ سُلَيْمَانَ لَمَّا فَهِمَ كَلَامَ النَّمْلَةِ؟",
     "qt": "Süleyman karıncanın sözünü anlayınca neden kibre kapılmadı?",
     "model": "Bir karıncanın dilini anlamak çok büyük bir yetenekti; başka biri bununla övünebilirdi. Ama Süleyman bu yeteneğin kendisinden değil Allah'tan geldiğini biliyordu. Bu yüzden nimeti kendine mal etmek yerine Allah'a hamd etti ve salih kullar arasında olmak için dua etti. Ayrıca küçük bir karıncanın kabilesi için gösterdiği sorumluluk duygusu da dikkat çekici bir ders."
    },
    "personal": {
     "q": "خَافَتِ النَّمْلَةُ عَلَى قَبِيلَتِهَا وَحَذَّرَتْهَا. هَلْ حَذَّرْتَ أَحَدًا مِنْ خَطَرٍ؟",
     "qt": "Karınca kabilesi için korktu ve onları uyardı. Sen hiç birini bir tehlikeye karşı uyardın mı? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "حَذَّرْتُ أَخِي مِنْ …",
      "خِفْتُ عَلَى … فَقُلْتُ لَهُ …",
      "قُلْتُ لِصَدِيقِي: احْذَرْ …"
     ]
    },
    "retell": [
     "لُغَةُ الطَّيْرِ",
     "جُنُودُ سُلَيْمَانَ",
     "وَادِي النَّمْلِ",
     "حَمِدَ اللهَ",
     "الْهُدْهُدُ",
     "سَبَأٌ وَالشَّمْسُ"
    ],
    "quran": [
     {
      "ar": "حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ",
      "ref": "Neml 27:18",
      "tr": "Nihayet karınca vadisine geldiklerinde bir karınca dedi: Ey karıncalar! Yuvalarınıza girin; Süleyman ve askerleri farkına varmadan sizi ezmesin.",
      "inText": "Metinde anlatılıyor: «فَأَمَرَتْهُمْ بِالدُّخُولِ إِلَى مَسَاكِنِهِمْ»"
     },
     {
      "ar": "فَتَبَسَّمَ ضَاحِكًا مِنْ قَوْلِهَا وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
      "ref": "Neml 27:19",
      "tr": "Süleyman onun sözüne gülümsedi ve dedi: Rabbim! Bana ve anne babama verdiğin nimete şükretmemi ve razı olacağın salih ameli işlememi sağla; rahmetinle beni salih kullarının arasına kat.",
      "inText": "«… وَالدُّعَاءِ وَالتَّوْفِيقِ لِلْعَمَلِ الصَّالِحِ …»"
     },
     {
      "ar": "وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ",
      "ref": "Neml 27:20",
      "tr": "Süleyman kuşları gözden geçirdi ve dedi: Neden hüdhüdü göremiyorum? Yoksa kayıplardan mı?",
      "inText": "«فَلَمْ يَجِدْهُ، فَأَنْكَرَ ذٰلِكَ وَتَوَعَّدَهُ»"
     }
    ]
   },
   "sections": [
    {
     "n": 6,
     "title_ar": "سُلَيْمَانُ يَعْرِفُ لُغَةَ الطَّيْرِ وَالْحَيَوَانِ",
     "title_tr": "Süleyman kuşların ve hayvanların dilini biliyor",
     "s": [
      [
       "وَقَصَّ الْقُرْآنُ قِصَّةً حَكِيمَةً مُمْتِعَةً تَجَلَّى فِيهَا تَيَقُّظُ سُلَيْمَانَ فِي تَدْبِيرِ مَمْلَكَتِهِ وَرَهْبَةُ سُلْطَانِهِ، كَيْفَ جَمَعَ اللهُ لَهُ بَيْنَ سَعَادَةِ الدُّنْيَا وَالْآخِرَةِ وَبَيْنَ الْمُلْكِ وَالتَّمْكِينِ وَالنُّبُوَّةِ وَالرِّسَالَةِ فِي الدِّينِ.",
       "Kur'an hikmetli ve zevkli bir kıssa anlattı. Bu kıssada Süleyman'ın ülkesini yönetirken ne kadar uyanık olduğu, saltanatının heybeti ve Allah'ın ona dünya ile âhiret mutluluğunu, mülk ve iktidar ile dinde peygamberlik ve elçiliği nasıl bir arada verdiği ortaya çıkar."
      ],
      [
       "وَكَانَ يَعْرِفُ لُغَةَ الطَّيْرِ وَالْحَيَوَانِ.",
       "Kuşların ve hayvanların dilini biliyordu."
      ],
      [
       "وَجَمَعَ جُنُودَهُ مِنَ الْجِنِّ وَالْإِنْسِ وَالطَّيْرِ ذَاتَ مَرَّةٍ، وَرَكِبَ فِيهِمْ فِي أُبَّهَةٍ وَعَظَمَةٍ وَكَانُوا عَلَى نِظَامٍ كَامِلٍ وَكَانُوا فِي قِيَادَةِ رُؤَسَائِهِمْ.",
       "Bir gün cinlerden, insanlardan ve kuşlardan oluşan ordularını topladı ve görkem ve azamet içinde onların arasında yola çıktı. Kusursuz bir düzen içindeydiler ve komutanlarının yönetimindeydiler."
      ],
      [
       "فَمَرَّ سُلَيْمَانُ عَلَى وَادِي النَّمْلِ، فَخَافَتْ نَمْلَةٌ عَلَى قَبِيلَتِهَا أَنْ تَحْطِمَهَا الْخُيُولُ بِحَوَافِرِهَا وَلَا يَشْعُرُ بِذٰلِكَ سُلَيْمَانُ وَلَا جُنُودُهُ.",
       "Süleyman karınca vadisinden geçti. Bir karınca, Süleyman da askerleri de farkında olmadan atların toynaklarıyla kendi kabilesini ezmesinden korktu."
      ],
      [
       "فَأَمَرَتْهُمْ بِالدُّخُولِ إِلَى مَسَاكِنِهِمْ، فَفَهِمَ ذٰلِكَ سُلَيْمَانُ.",
       "Onlara yuvalarına girmelerini emretti; Süleyman da bunu anladı."
      ],
      [
       "وَلَمْ يَأْخُذْهُ التِّيهُ وَلَا الزَّهْوُ بِأَنَّهُ نَبِيٌّ مِنْ أَنْبِيَاءِ اللهِ.",
       "Allah'ın peygamberlerinden biri olduğu için kibre ve böbürlenmeye kapılmadı."
      ],
      [
       "بَلْ حَمَلَهُ ذٰلِكَ عَلَى حَمْدِ اللهِ تَعَالَى وَشُكْرِ نِعْمَتِهِ، وَالدُّعَاءِ وَالتَّوْفِيقِ لِلْعَمَلِ الصَّالِحِ وَالِانْخِرَاطِ فِي سِلْكِ عِبَادِ اللهِ الصَّالِحِينَ.",
       "Aksine bu onu Allah Teâlâ'ya hamd etmeye, nimetine şükretmeye, salih amele muvaffak olmak ve Allah'ın salih kullarının arasına katılmak için dua etmeye sevk etti."
      ]
     ]
    },
    {
     "n": 7,
     "title_ar": "قِصَّةُ هُدْهُدٍ",
     "title_tr": "Bir hüdhüdün hikâyesi",
     "s": [
      [
       "وَكَانَ الْهُدْهُدُ رَائِدَهُ وَعَيْنَهُ يَدُلُّهُ عَلَى مَوَاضِعِ الْمِيَاهِ، وَمَنَازِلِ الْجَيْشِ.",
       "Hüdhüd onun öncüsü ve gözüydü; ona su bulunan yerleri ve ordunun konaklayacağı yerleri gösterirdi."
      ],
      [
       "فَلَمْ يَجِدْهُ، فَأَنْكَرَ ذٰلِكَ وَتَوَعَّدَهُ.",
       "(Bir gün) onu bulamadı; buna kızdı ve onu tehdit etti."
      ],
      [
       "فَغَابَ زَمَانًا يَسِيرًا ثُمَّ جَاءَ، فَقَالَ لِسُلَيْمَانَ:",
       "Hüdhüd kısa bir süre ortadan kayboldu, sonra geldi ve Süleyman'a dedi:"
      ],
      [
       "اطَّلَعْتُ عَلَى مَا لَمْ تَطَّلِعْ عَلَيْهِ أَنْتَ وَلَا جُنُودُكَ وَجِئْتُكَ بِخَبَرِ صِدْقٍ عَنْ سَبَإٍ وَمَلِكَتِهِمْ.",
       "Ne senin ne de askerlerinin bildiği bir şeyi öğrendim; sana Sebe' ve onların kraliçesi hakkında doğru bir haber getirdim."
      ],
      [
       "لَهُمْ مُلْكٌ عَظِيمٌ، وَدَوْلَةٌ وَاسِعَةٌ.",
       "Onların büyük bir mülkü ve geniş bir devleti var."
      ],
      [
       "وَقَدْ وَجَدْتُهُمْ عَلَى هٰذَا الْعَقْلِ وَالْكِيَاسَةِ، وَالْمُلْكِ وَالرِّيَاسَةِ، أَصْحَابَ سَفَاهَةٍ وَجَهَالَةٍ.",
       "Onları bu akla ve zekâya, bu mülke ve başkanlığa rağmen beyinsiz ve cahil insanlar olarak buldum."
      ],
      [
       "وَهُمْ يَسْجُدُونَ لِلشَّمْسِ مِنْ دُونِ اللهِ، وَلَا يَفْقَهُونَ ذٰلِكَ، وَلَا يَهْتَدُونَ إِلَى عِبَادَةِ اللهِ وَحْدَهُ.",
       "Allah'ı bırakıp güneşe secde ediyorlar; bunun (yanlışlığını) kavramıyorlar ve yalnızca Allah'a ibadet etmenin yolunu bulamıyorlar."
      ]
     ]
    }
   ]
  },
  {
   "id": 4,
   "emoji": "✉️",
   "title_ar": "الْكِتَابُ وَالْهَدِيَّةُ",
   "title_tr": "Mektup ve hediye",
   "pre": {
    "predict": {
     "prompt_tr": "Süleyman Sebe' kraliçesine bir mektup yazıp onu İslâm'a çağırdı. Başlıklar: «الْمَلِكَةُ تَسْتَشِيرُ أَرْكَانَ دَوْلَتِهَا», «هَدِيَّةُ مُسَاوَمَةٍ». Sence kraliçe ne yaptı?",
     "options": [
      [
       "أَرْسَلَتْ إِلَيْهِ هَدِيَّةً لِتَمْتَحِنَهُ",
       "Onu sınamak için ona bir hediye gönderdi"
      ],
      [
       "أَعْلَنَتِ الْحَرْبَ فِي الْحَالِ",
       "Hemen savaş ilan etti"
      ],
      [
       "مَزَّقَتِ الْكِتَابَ",
       "Mektubu yırttı"
      ]
     ]
    },
    "vocab": [
     [
      "كِتَابٌ",
      "mektup",
      "✉️"
     ],
     [
      "تَسْتَشِيرُ",
      "danışıyor",
      "🗣️"
     ],
     [
      "أَرْكَانُ الدَّوْلَةِ",
      "devletin ileri gelenleri",
      "🏛️"
     ],
     [
      "هَدِيَّةٌ ج هَدَايَا",
      "hediye",
      "🎁"
     ],
     [
      "مُسَاوَمَةٌ",
      "pazarlık",
      "🤝"
     ],
     [
      "زَهِدَ فِي",
      "değer vermedi, yüz çevirdi",
      "🙅"
     ]
    ]
   },
   "stop": {
    "section": 10,
    "after": 0,
    "prompt_tr": "Kraliçe dedi: «Hediyeyi kabul ederse o bir kraldır; kabul etmezse bir peygamberdir.» Sence Süleyman hediyeyi ne yaptı?",
    "options": [
     [
      "أَعْرَضَ عَنْهَا وَزَهِدَ فِيهَا",
      "Ondan yüz çevirdi, ona değer vermedi"
     ],
     [
      "قَبِلَهَا وَفَرِحَ بِهَا",
      "Kabul edip ona sevindi"
     ],
     [
      "بَاعَهَا",
      "Sattı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "كَتَبَ سُلَيْمَانُ إِلَى مَلِكَةِ سَبَإٍ كِتَابًا.",
     "اسْتَشَارَتِ الْمَلِكَةُ أَرْكَانَ دَوْلَتِهَا.",
     "افْتَخَرُوا بِقُوَّتِهِمْ فَلَمْ تَقْبَلْ مَقَالَتَهُمْ.",
     "أَرْسَلَتْ إِلَيْهِ هَدِيَّةً.",
     "أَعْرَضَ سُلَيْمَانُ عَنِ الْهَدِيَّةِ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا كَتَبَ سُلَيْمَانُ إِلَى الْمَلِكَةِ؟",
      "qt": "Süleyman kraliçeye neden yazdı?",
      "o": [
       "لِيَدْعُوَهَا إِلَى الْإِسْلَامِ قَبْلَ أَنْ يَزْحَفَ عَلَى بِلَادِهَا",
       "لِيَطْلُبَ مِنْهَا مَالًا",
       "لِيَتَزَوَّجَهَا"
      ],
      "ot": [
       "Ülkesine yürümeden önce onu İslâm'a çağırmak için",
       "Ondan mal istemek için",
       "Onunla evlenmek için"
      ],
      "a": 0,
      "ev": [
       "8.2"
      ]
     },
     {
      "q": "بِمَاذَا كَانَ الْكِتَابُ يَجْمَعُ؟",
      "qt": "Mektup neleri bir araya getiriyordu?",
      "o": [
       "الرِّقَّةَ وَالصَّرَامَةَ",
       "الْغَضَبَ وَالسَّبَّ",
       "الشِّعْرَ وَالْغِنَاءَ"
      ],
      "ot": [
       "Yumuşaklık ve kararlılığı",
       "Öfke ve sövgüyü",
       "Şiir ve şarkıyı"
      ],
      "a": 0,
      "ev": [
       "8.4"
      ]
     },
     {
      "q": "كَيْفَ كَانَتِ الْمَلِكَةُ؟",
      "qt": "Kraliçe nasıl biriydi?",
      "o": [
       "عَاقِلَةً غَيْرَ مُتَسَرِّعَةٍ",
       "جَاهِلَةً مُتَسَرِّعَةً",
       "ضَعِيفَةً خَائِفَةً"
      ],
      "ot": [
       "Akıllı, acele etmeyen",
       "Cahil ve aceleci",
       "Zayıf ve korkak"
      ],
      "a": 0,
      "ev": [
       "9.1"
      ]
     },
     {
      "q": "كَيْفَ أَرَادَتِ الْمَلِكَةُ أَنْ تَعْرِفَ هَلْ سُلَيْمَانُ مَلِكٌ أَمْ نَبِيٌّ؟",
      "qt": "Kraliçe Süleyman'ın kral mı peygamber mi olduğunu nasıl anlamak istedi?",
      "o": [
       "بِالْهَدِيَّةِ: إِنْ قَبِلَهَا فَهُوَ مَلِكٌ",
       "بِالْحَرْبِ",
       "بِسُؤَالِ الْهُدْهُدِ"
      ],
      "ot": [
       "Hediyeyle: kabul ederse kraldır",
       "Savaşla",
       "Hüdhüde sorarak"
      ],
      "a": 0,
      "ev": [
       "9.9"
      ]
     },
     {
      "q": "مَاذَا قَالَ سُلَيْمَانُ عَنِ الْقَضِيَّةِ؟",
      "qt": "Süleyman mesele hakkında ne dedi?",
      "o": [
       "الْقَضِيَّةُ قَضِيَّةُ دَعْوَةٍ وَطَاعَةٍ لَا مُسَاوَمَةٍ",
       "الْقَضِيَّةُ قَضِيَّةُ مَالٍ",
       "الْقَضِيَّةُ هَزْلٌ"
      ],
      "ot": [
       "Mesele davet ve itaat meselesidir, pazarlık değil",
       "Mesele para meselesidir",
       "Mesele şakadır"
      ],
      "a": 0,
      "ev": [
       "10.4"
      ]
     }
    ],
    "focus": {
     "title": "Şart cevabında فَـ: فَإِنْ قَبِلَ … فَهُوَ مَلِكٌ",
     "explain": "Şart cümlesinin cevabı bir <b>isim cümlesi</b>, <b>emir</b> ya da <b>yasak</b> olursa başına <b>فَـ</b> gelir: <span class='ar-inline'>فَإِنْ قَبِلَ الْهَدِيَّةَ فَهُوَ مَلِكٌ فَقَاتِلُوهُ</span> (hediyeyi kabul ederse o bir kraldır, onunla savaşın). Cevap mazi bir fiilse فَـ gerekmez: <span class='ar-inline'>إِنْ عُدْنَا … قَدِ افْتَرَيْنَا</span> (burada قَدْ ile).",
     "examples": [
      "فَإِنْ قَبِلَ الْهَدِيَّةَ فَهُوَ مَلِكٌ فَقَاتِلُوهُ",
      "وَإِنْ لَمْ يَقْبَلْهَا فَهُوَ نَبِيٌّ فَاتَّبِعُوهُ",
      "«وَمَنْ شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ»"
     ],
     "items": [
      {
       "q": "فَإِنْ قَبِلَ الْهَدِيَّةَ ____ مَلِكٌ.",
       "o": [
        "فَهُوَ",
        "هُوَ وَ",
        "لِأَنَّهُ"
       ],
       "a": 0
      },
      {
       "q": "وَإِنْ لَمْ يَقْبَلْهَا فَهُوَ نَبِيٌّ ____.",
       "o": [
        "فَاتَّبِعُوهُ",
        "اتَّبَعُوهُ",
        "يَتَّبِعُونَهُ"
       ],
       "a": 0
      },
      {
       "q": "«وَمَنْ كَفَرَ ____ رَبِّي غَنِيٌّ كَرِيمٌ»",
       "o": [
        "فَإِنَّ",
        "إِنَّ وَ",
        "لِأَنَّ"
       ],
       "a": 0
      },
      {
       "q": "«إِنْ قَبِلَهَا فَهُوَ مَلِكٌ» = …",
       "o": [
        "Kabul ederse o bir kraldır",
        "Kabul etti, çünkü kraldı",
        "Kral onu kabul etti"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "كَتَبَ سُلَيْمَانُ إِلَى الْمَلِكَةِ {كِتَابًا} بَلِيغًا. فَاسْتَشَارَتْ أَرْكَانَ {دَوْلَتِهَا}. وَقَالَتْ: إِنْ قَبِلَ الْهَدِيَّةَ فَهُوَ {مَلِكٌ}، وَإِنْ لَمْ يَقْبَلْهَا فَهُوَ {نَبِيٌّ}. فَأَعْرَضَ سُلَيْمَانُ عَنِ {الْهَدِيَّةِ}."
    },
    "think": {
     "q": "لِمَاذَا لَمْ تَقْبَلِ الْمَلِكَةُ كَلَامَ أَرْكَانِ دَوْلَتِهَا عَنْ قُوَّتِهِمْ؟",
     "qt": "Kraliçe devletinin ileri gelenlerinin güçleri hakkındaki sözlerini neden kabul etmedi?",
     "model": "Meclisindekiler, kralların yanındakilerin her zaman yaptığı gibi, onu memnun etmek için güçleriyle övündüler. Kraliçe ise tecrübeliydi: Fatih kralların yendikleri ülkelere neler yaptığını biliyordu. Gurura kapılıp savaşa girmek yerine önce karşısındakini tanımak istedi. Yazar onu, aklını yalnızca ilah konusunda yanlış kullanan, ama yönetimde akıllı ve ölçülü bir lider olarak gösteriyor."
    },
    "personal": {
     "q": "اسْتَشَارَتِ الْمَلِكَةُ أَهْلَ الرَّأْيِ قَبْلَ أَنْ تَقْطَعَ أَمْرًا. مَنْ تَسْتَشِيرُ أَنْتَ فِي أُمُورِكَ؟",
     "qt": "Kraliçe karar vermeden önce görüş sahiplerine danıştı. Sen işlerinde kime danışırsın? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "أَسْتَشِيرُ أَبِي فِي …",
      "أَسْأَلُ … قَبْلَ أَنْ …",
      "أُحِبُّ أَنْ أَسْمَعَ رَأْيَ …"
     ]
    },
    "retell": [
     "كِتَابٌ بَلِيغٌ",
     "الرِّقَّةُ وَالصَّرَامَةُ",
     "أَرْكَانُ الدَّوْلَةِ",
     "مَلِكٌ أَمْ نَبِيٌّ",
     "هَدِيَّةٌ",
     "أَعْرَضَ عَنْهَا"
    ],
    "quran": [
     {
      "ar": "قَالَتْ يَا أَيُّهَا الْمَلَأُ إِنِّي أُلْقِيَ إِلَيَّ كِتَابٌ كَرِيمٌ ۝ إِنَّهُ مِنْ سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ",
      "ref": "Neml 27:29–31",
      "tr": "Kraliçe dedi: Ey ileri gelenler! Bana değerli bir mektup bırakıldı. Mektup Süleyman'dandır ve ‘Rahmân ve Rahîm olan Allah'ın adıyla’ başlıyor: Bana karşı büyüklük taslamayın ve teslim olarak bana gelin.",
      "inText": "«فَكَتَبَ إِلَيْهَا كِتَابًا بَلِيغًا …»"
     },
     {
      "ar": "قَالُوا نَحْنُ أُولُو قُوَّةٍ وَأُولُو بَأْسٍ شَدِيدٍ وَالْأَمْرُ إِلَيْكِ فَانْظُرِي مَاذَا تَأْمُرِينَ ۝ قَالَتْ إِنَّ الْمُلُوكَ إِذَا دَخَلُوا قَرْيَةً أَفْسَدُوهَا وَجَعَلُوا أَعِزَّةَ أَهْلِهَا أَذِلَّةً ۖ وَكَذَٰلِكَ يَفْعَلُونَ",
      "ref": "Neml 27:33–34",
      "tr": "Dediler ki: Biz güç sahibiyiz, çetin savaşçılarız; ama emir senindir, ne emredeceğine bir bak. Kraliçe dedi: Krallar bir ülkeye girdiklerinde orayı bozarlar, halkının ileri gelenlerini hor ve hakir yaparlar. İşte böyle yaparlar.",
      "inText": "«يُدِلُّونَ بِقُوَّتِهِمْ … حَذَّرَتْهُمْ مِنْ سُوءِ الْعَاقِبَةِ»"
     },
     {
      "ar": "فَلَمَّا جَاءَ سُلَيْمَانَ قَالَ أَتُمِدُّونَنِ بِمَالٍ فَمَا آتَانِيَ اللَّهُ خَيْرٌ مِمَّا آتَاكُمْ بَلْ أَنْتُمْ بِهَدِيَّتِكُمْ تَفْرَحُونَ",
      "ref": "Neml 27:36",
      "tr": "Elçi Süleyman'a gelince Süleyman dedi: Bana mal ile mi yardım ediyorsunuz? Allah'ın bana verdiği, size verdiğinden daha hayırlıdır. Hayır, siz kendi hediyenizle sevinirsiniz.",
      "inText": "«أَتُسَاوِمُونَنِي بِمَالٍ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 8,
     "title_ar": "سُلَيْمَانُ يَدْعُو مَلِكَةَ سَبَإٍ إِلَى دِينِهِ",
     "title_tr": "Süleyman Sebe' kraliçesini dinine çağırıyor",
     "s": [
      [
       "وَشَقَّ عَلَى نَبِيِّ اللهِ أَنْ يَكُونَ بِجِوَارِ مَمْلَكَتِهِ مُلْكٌ وَأُمَّةٌ لَا يَعْرِفُهَا وَلَمْ تَبْلُغْهَا دَعْوَتُهُ، وَلَا تَزَالُ تَعْبُدُ الشَّمْسَ.",
       "Allah'ın peygamberine, ülkesinin yanı başında tanımadığı, davetinin ulaşmadığı ve hâlâ güneşe tapan bir devletin ve ümmetin bulunması ağır geldi."
      ],
      [
       "وَثَارَتْ فِيهِ الْحَمِيَّةُ الدِّينِيَّةُ النَّبَوِيَّةُ.",
       "İçinde dinî ve peygamberce bir gayret kabardı."
      ],
      [
       "وَرَأَى مِنَ الصَّوَابِ أَنْ يَكْتُبَ إِلَى مَلِكَتِهَا وَحَاكِمَتِهَا الْمُشْرِكَةِ وَيَدْعُوَهَا إِلَى الْإِسْلَامِ، وَالطَّاعَةِ وَالِاسْتِسْلَامِ، قَبْلَ أَنْ يَزْحَفَ عَلَى بِلَادِهَا بِجُنُودِهِ الْقَاهِرَةِ.",
       "Ordularıyla onun ülkesine yürümeden önce, o ülkenin müşrik kraliçesine ve yöneticisine yazıp onu İslâm'a, itaate ve teslimiyete çağırmanın doğru olacağını düşündü."
      ],
      [
       "فَكَتَبَ إِلَيْهَا كِتَابًا بَلِيغًا وَدَعَاهَا فِيهِ إِلَى الْإِسْلَامِ وَالِاسْتِسْلَامِ.",
       "Ona etkili bir mektup yazdı ve onda onu İslâm'a ve teslimiyete çağırdı."
      ],
      [
       "وَالْكِتَابُ يَجْمَعُ بَيْنَ الرِّقَّةِ وَالصَّرَامَةِ وَتَوَاضُعِ الْأَنْبِيَاءِ وَغَيْرَةِ الْمُلُوكِ.",
       "Mektup yumuşaklık ile kararlılığı, peygamberlerin alçakgönüllülüğü ile kralların onurunu bir araya getiriyordu."
      ]
     ]
    },
    {
     "n": 9,
     "title_ar": "الْمَلِكَةُ تَسْتَشِيرُ أَرْكَانَ دَوْلَتِهَا",
     "title_tr": "Kraliçe devletinin ileri gelenlerine danışıyor",
     "s": [
      [
       "فَقَدْ كَانَ سُلَيْمَانُ جَامِعًا بَيْنَهُمَا.",
       "Çünkü Süleyman bu ikisini (peygamberliği ve krallığı) kendinde birleştirmişti."
      ],
      [
       "وَكَانَتِ الْمَرْأَةُ الَّتِي تَحْكُمُ هٰذِهِ الْبِلَادَ عَاقِلَةً غَيْرَ مُتَسَرِّعَةٍ فِي الْحُكْمِ، عِنْدَهَا تَجَارِبُ وَاسِعَةٌ مِنْ سِيَرِ الْمُلُوكِ وَأَخْبَارِ الْفَاتِحِينَ.",
       "Bu ülkeyi yöneten kadın akıllıydı, hüküm vermekte acele etmezdi; kralların hayatlarından ve fatihlerin haberlerinden edindiği geniş tecrübeleri vardı."
      ],
      [
       "وَإِنَّمَا خَانَهَا عَقْلُهَا فِي مَعْرِفَةِ الْإِلٰهِ وَعِبَادَتِهِ.",
       "Aklı ona yalnızca ilahı tanımakta ve O'na ibadet etmekte ihanet etmişti."
      ],
      [
       "فَلَمْ تَأْخُذْهَا حَمِيَّةُ الْمُلُوكِ، وَلَمْ تَسْتَبِدَّ بِالرَّأْيِ.",
       "Kralların gururuna kapılmadı ve tek başına karar vermedi."
      ],
      [
       "فَأَطْلَعَتْ أَهْلَ الرَّأْيِ مِنْ أَرْكَانِ دَوْلَتِهَا عَلَى هٰذَا الْكِتَابِ الَّذِي لَمْ يَكُنْ كَسَائِرِ الْكُتُبِ، إِنَّهُ كِتَابٌ مِنْ أَعْظَمِ الْمُلُوكِ فِي زَمَانِهَا وَمِنْ نَبِيٍّ دَاعٍ إِلَى اللهِ.",
       "Devletinin ileri gelenlerinden görüş sahiplerine, öteki mektuplara benzemeyen bu mektubu gösterdi. Bu, onun zamanındaki kralların en büyüğünden ve Allah'a çağıran bir peygamberden gelen bir mektuptu."
      ],
      [
       "وَلَمَّا بَدَأَ أَرْكَانُ دَوْلَتِهَا يُدِلُّونَ بِقُوَّتِهِمْ وَكَثْرَةِ جُيُوشِهِمْ إِرْضَاءً وَتَمَلُّقًا، شَأْنَ جُلَسَاءِ الْمُلُوكِ وَالْحُكَّامِ فِي كُلِّ زَمَانٍ وَمَكَانٍ، لَمْ تَقْبَلْ مَقَالَتَهُمْ وَلَمْ تُوَافِقْهُمْ عَلَيْهَا.",
       "Devletinin ileri gelenleri, her zaman ve her yerde kralların ve yöneticilerin meclis arkadaşlarının yaptığı gibi, onu memnun etmek ve ona yaranmak için güçleriyle ve ordularının çokluğuyla övünmeye başlayınca, onların sözünü kabul etmedi ve onlara katılmadı."
      ],
      [
       "بَلْ حَذَّرَتْهُمْ مِنْ سُوءِ الْعَاقِبَةِ وَذَكَّرَتْهُمْ بِسِيرَةِ الْمُلُوكِ الْفَاتِحِينَ فِي الْأُمَمِ الْمَفْتُوحَةِ وَمَصِيرِهَا بَعْدَ الْهَزِيمَةِ وَالِانْكِسَارِ.",
       "Aksine onları kötü sondan sakındırdı; fatih kralların fethedilen milletlere nasıl davrandığını ve bu milletlerin yenilgi ve bozgundan sonraki akıbetini onlara hatırlattı."
      ],
      [
       "وَقَالَتْ: سَيَكُونُ هٰذَا شَأْنَ بِلَادِنَا وَأُمَّتِنَا.",
       "Ve dedi: Ülkemizin ve milletimizin hâli de böyle olur."
      ],
      [
       "وَقَالَتْ لَهُمْ: إِنِّي سَأُرْسِلُ إِلَى سُلَيْمَانَ بِهَدَايَا وَطُرَفٍ فَأَمْتَحِنُهُ بِهَا.",
       "Ve onlara dedi: Ben Süleyman'a hediyeler ve nadide şeyler göndereceğim ve onu bunlarla sınayacağım."
      ],
      [
       "فَإِنْ قَبِلَ الْهَدِيَّةَ فَهُوَ مَلِكٌ فَقَاتِلُوهُ، وَإِنْ لَمْ يَقْبَلْهَا فَهُوَ نَبِيٌّ فَاتَّبِعُوهُ.",
       "Eğer hediyeyi kabul ederse o bir kraldır, onunla savaşın; kabul etmezse o bir peygamberdir, ona uyun."
      ]
     ]
    },
    {
     "n": 10,
     "title_ar": "هَدِيَّةُ مُسَاوَمَةٍ",
     "title_tr": "Pazarlık hediyesi",
     "s": [
      [
       "وَبَعَثَتْ إِلَيْهِ بِهَدِيَّةٍ عَظِيمَةٍ لَائِقَةٍ بِالْمُلُوكِ.",
       "Ona krallara yaraşır büyük bir hediye gönderdi."
      ],
      [
       "فَلَمَّا وَصَلَتْ إِلَى سُلَيْمَانَ أَعْرَضَ عَنْهَا وَزَهِدَ فِيهَا وَقَالَ:",
       "Hediye Süleyman'a ulaşınca ondan yüz çevirdi, ona hiç değer vermedi ve dedi:"
      ],
      [
       "أَتُسَاوِمُونَنِي بِمَالٍ لِأَتْرُكَكُمْ عَلَى شِرْكِكُمْ وَمُلْكِكُمْ؟",
       "Sizi şirkinizle ve mülkünüzle baş başa bırakayım diye benimle mal karşılığında pazarlık mı ediyorsunuz?"
      ],
      [
       "وَالَّذِي أَعْطَانِي اللهُ مِنَ الْمُلْكِ وَالْمَالِ وَالْجُنُودِ خَيْرٌ مِمَّا أَنْتُمْ فِيهِ.",
       "Allah'ın bana verdiği mülk, mal ve ordular, sizin içinde bulunduğunuz şeylerden daha hayırlıdır."
      ],
      [
       "وَالْأَمْرُ جِدٌّ لَيْسَ بِهَزْلٍ، وَالْقَضِيَّةُ قَضِيَّةُ دَعْوَةٍ وَطَاعَةٍ، لَيْسَتْ قَضِيَّةَ مُسَاوَمَةٍ.",
       "İş ciddidir, şaka değildir. Mesele davet ve itaat meselesidir, pazarlık meselesi değil."
      ],
      [
       "وَتَوَعَّدَهُمْ بِقَصْدِهِ لَهُمْ وَزَحْفِهِ عَلَى مُلْكِهِمْ.",
       "Ve onları, üzerlerine gelip ülkelerine yürümekle tehdit etti."
      ]
     ]
    }
   ]
  },
  {
   "id": 5,
   "emoji": "🪟",
   "title_ar": "الْعَرْشُ وَالصَّرْحُ",
   "title_tr": "Taht ve cam köşk",
   "pre": {
    "predict": {
     "prompt_tr": "Kraliçe boyun eğerek Süleyman'a doğru yola çıktı. Süleyman ona iki şey hazırladı: getirilip değiştirilen kendi tahtı ve altından su akan camdan bir saray. Sence kraliçe camdan sarayı görünce ne yaptı?",
     "options": [
      [
       "ظَنَّتْهُ مَاءً فَكَشَفَتْ عَنْ سَاقَيْهَا",
       "Su sandı ve eteğini toplayıp bacaklarını açtı"
      ],
      [
       "عَرَفَتْ فِي الْحَالِ أَنَّهُ زُجَاجٌ",
       "Hemen cam olduğunu anladı"
      ],
      [
       "رَجَعَتْ إِلَى بِلَادِهَا",
       "Ülkesine döndü"
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
      "مُعْجِزَةٌ",
      "mucize",
      "✨"
     ],
     [
      "زُجَاجٌ / قَوَارِيرُ",
      "cam",
      "🪟"
     ],
     [
      "صَرْحٌ",
      "köşk, saray",
      "🏛️"
     ],
     [
      "سَاقٌ",
      "bacak (incik)",
      "🦵"
     ],
     [
      "الْمَظَاهِرُ",
      "görünüşler",
      "👀"
     ]
    ]
   },
   "stop": {
    "section": 13,
    "after": 1,
    "prompt_tr": "Kraliçe camı akan bir su sandı ve suya girmek istedi. Sence Süleyman ne dedi?",
    "options": [
     [
      "إِنَّهُ صَرْحٌ مُمَرَّدٌ مِنْ قَوَارِيرَ",
      "Bu, camdan yapılmış pürüzsüz bir köşktür"
     ],
     [
      "احْذَرِي الْغَرَقَ",
      "Boğulmaktan sakın"
     ],
     [
      "هٰذَا نَهْرٌ عَمِيقٌ",
      "Bu derin bir nehirdir"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "أَقْبَلَتِ الْمَلِكَةُ خَاضِعَةً.",
     "أُحْضِرَ عَرْشُهَا قَبْلَ وُصُولِهَا.",
     "غُيِّرَ بَعْضُ صِفَاتِ الْعَرْشِ.",
     "بَنَى الْبَنَّاؤُونَ قَصْرًا مِنْ زُجَاجٍ.",
     "ظَنَّتِ الْمَلِكَةُ الزُّجَاجَ مَاءً.",
     "أَسْلَمَتْ مَعَ سُلَيْمَانَ لِلهِ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا أَرَادَ سُلَيْمَانُ أَنْ يُحْضِرَ عَرْشَهَا؟",
      "qt": "Süleyman tahtını neden getirtmek istedi?",
      "o": [
       "لِيُرِيَهَا آيَةً مِنْ آيَاتِ اللهِ",
       "لِيَجْلِسَ عَلَيْهِ",
       "لِيَبِيعَهُ"
      ],
      "ot": [
       "Ona Allah'ın mucizelerinden birini göstermek için",
       "Üzerine oturmak için",
       "Satmak için"
      ],
      "a": 0,
      "ev": [
       "11.2"
      ]
     },
     {
      "q": "لِمَاذَا غُيِّرَ بَعْضُ صِفَاتِ الْعَرْشِ؟",
      "qt": "Tahtın bazı özellikleri neden değiştirildi?",
      "o": [
       "لِيَخْتَبِرَ مَعْرِفَتَهَا وَثَبَاتَهَا",
       "لِأَنَّهُ كَانَ مَكْسُورًا",
       "لِيَكُونَ أَجْمَلَ"
      ],
      "ot": [
       "Tanıyıp tanımayacağını ve soğukkanlılığını sınamak için",
       "Çünkü kırıktı",
       "Daha güzel olsun diye"
      ],
      "a": 0,
      "ev": [
       "11.5"
      ]
     },
     {
      "q": "مِمَّ بُنِيَ الْقَصْرُ؟",
      "qt": "Saray neyden yapılmıştı?",
      "o": [
       "مِنْ زُجَاجٍ تَحْتَهُ مَاءٌ",
       "مِنْ ذَهَبٍ",
       "مِنْ حَدِيدٍ"
      ],
      "ot": [
       "Altından su akan camdan",
       "Altından",
       "Demirden"
      ],
      "a": 0,
      "ev": [
       "12.0"
      ]
     },
     {
      "q": "لِمَاذَا كَانَتِ الْمَلِكَةُ وَقَوْمُهَا يَسْجُدُونَ لِلشَّمْسِ؟",
      "qt": "Kraliçe ve kavmi neden güneşe secde ediyorlardı?",
      "o": [
       "لِأَنَّهَا أَكْبَرُ مَظْهَرٍ لِلنُّورِ وَالْحَيَاةِ",
       "لِأَنَّهَا قَرِيبَةٌ مِنْهُمْ",
       "لِأَنَّ سُلَيْمَانَ أَمَرَهُمْ"
      ],
      "ot": [
       "Çünkü güneş nurun ve hayatın en büyük görüntüsüydü",
       "Çünkü onlara yakındı",
       "Çünkü Süleyman emretti"
      ],
      "a": 0,
      "ev": [
       "12.4"
      ]
     },
     {
      "q": "مَاذَا قَالَتِ الْمَلِكَةُ فِي النِّهَايَةِ؟",
      "qt": "Kraliçe sonunda ne dedi?",
      "o": [
       "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ",
       "سَأَرْجِعُ إِلَى عِبَادَةِ الشَّمْسِ",
       "هٰذَا سِحْرٌ"
      ],
      "ot": [
       "Rabbim, kendime zulmettim; Süleyman ile birlikte teslim oldum",
       "Güneşe tapmaya döneceğim",
       "Bu sihirdir"
      ],
      "a": 0,
      "ev": [
       "13.4"
      ]
     }
    ],
    "focus": {
     "title": "كَمَا … كَذٰلِكَ …: «nasıl … ise, öyle de …»",
     "explain": "<b>كَمَا</b> «… gibi, nasıl …», <b>كَذٰلِكَ</b> «aynı şekilde, öyle de» demektir. İkisi birlikte iki durumu birbirine benzetir: <span class='ar-inline'>كَمَا أَخْطَأَتْ فِي مُعَامَلَةِ الزُّجَاجِ … كَذٰلِكَ أَخْطَأَتْ فِي مُعَامَلَةِ الشَّمْسِ</span> (camı su gibi görmekte nasıl yanıldıysa, güneşi yaratıcı gibi görmekte de öyle yanılmıştı). <b>كَمَا كَانَ</b> ise «eskisi gibi» anlamına gelir.",
     "examples": [
      "كَمَا أَخْطَأَتْ فِي مُعَامَلَةِ الزُّجَاجِ مُعَامَلَةَ الْمَاءِ … كَذٰلِكَ أَخْطَأَتْ فِي مُعَامَلَةِ الشَّمْسِ مُعَامَلَةَ الْخَالِقِ",
      "حَتَّى إِذَا كَانَ الْكَرْمُ كَمَا كَانَ",
      "«وَكَذٰلِكَ يَفْعَلُونَ»"
     ],
     "items": [
      {
       "q": "____ أَخْطَأَتْ فِي الزُّجَاجِ كَذٰلِكَ أَخْطَأَتْ فِي الشَّمْسِ.",
       "o": [
        "كَمَا",
        "كَمْ",
        "كَيْفَ"
       ],
       "a": 0
      },
      {
       "q": "كَمَا أَخْطَأَتْ فِي الزُّجَاجِ ____ أَخْطَأَتْ فِي الشَّمْسِ.",
       "o": [
        "كَذٰلِكَ",
        "لٰكِنْ",
        "لِذٰلِكَ"
       ],
       "a": 0
      },
      {
       "q": "حَتَّى إِذَا كَانَ الْكَرْمُ ____ كَانَ",
       "o": [
        "كَمَا",
        "مِمَّا",
        "كُلَّمَا"
       ],
       "a": 0
      },
      {
       "q": "«كَمَا كَانَ» = …",
       "o": [
        "eskisi gibi",
        "ne kadar",
        "her zaman"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "أَحْضَرَ سُلَيْمَانُ {عَرْشَهَا} قَبْلَ وُصُولِهَا وَكَانَ ذٰلِكَ {مُعْجِزَةً}. وَبَنَى لَهَا قَصْرًا مِنْ {زُجَاجٍ}. فَظَنَّتْهُ مَاءً فَكَشَفَتْ عَنْ {سَاقَيْهَا}. ثُمَّ قَالَتْ: رَبِّ إِنِّي ظَلَمْتُ {نَفْسِي}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ إِنَّ قِصَّةَ الزُّجَاجِ «أَبْلَغُ مِنْ مِائَةِ خُطْبَةٍ وَأَلْفِ دَلِيلٍ»؟",
     "qt": "Kitap neden cam köşk olayının «yüz hutbeden ve bin delilden daha etkili» olduğunu söylüyor?",
     "model": "Kraliçe akıllı ve tecrübeliydi; uzun konuşmalarla ikna edilmesi zor olabilirdi. Ama cam olayında kendi gözüyle, kendi hatasını yaşayarak gördü ki görünüş insanı yanıltabilir. Camı su sanmakla güneşi ilah sanmak arasındaki benzerliği kendisi fark etti. İnsanın kendi yaşayarak öğrendiği bir ders, dinlediği sözlerden çok daha kalıcıdır."
    },
    "retell": [
     "خَاضِعَةً",
     "الْعَرْشُ",
     "مُعْجِزَةٌ",
     "قَصْرٌ مِنْ زُجَاجٍ",
     "كَشَفَتْ عَنْ سَاقَيْهَا",
     "أَسْلَمَتْ"
    ],
    "quran": [
     {
      "ar": "قَالَ الَّذِي عِنْدَهُ عِلْمٌ مِنَ الْكِتَابِ أَنَا آتِيكَ بِهِ قَبْلَ أَنْ يَرْتَدَّ إِلَيْكَ طَرْفُكَ ۚ فَلَمَّا رَآهُ مُسْتَقِرًّا عِنْدَهُ قَالَ هَٰذَا مِنْ فَضْلِ رَبِّي لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ",
      "ref": "Neml 27:40",
      "tr": "Yanında kitaptan bir bilgi bulunan kişi dedi: Ben onu sana göz açıp kapayıncaya kadar getiririm. Süleyman tahtı yanında durur görünce dedi: Bu, Rabbimin lütfundandır; şükür mü edeceğim yoksa nankörlük mü, beni sınamak için.",
      "inText": "«وَقَدْ تَحَقَّقَ مَا أَرَادَ سُلَيْمَانُ فِي أَقْرَبِ وَقْتٍ»"
     },
     {
      "ar": "فَلَمَّا جَاءَتْ قِيلَ أَهَٰكَذَا عَرْشُكِ ۖ قَالَتْ كَأَنَّهُ هُوَ ۚ وَأُوتِينَا الْعِلْمَ مِنْ قَبْلِهَا وَكُنَّا مُسْلِمِينَ",
      "ref": "Neml 27:42",
      "tr": "Kraliçe gelince ona: Senin tahtın da böyle mi, denildi. Dedi ki: Sanki o! Bize bundan önce bilgi verilmişti; biz zaten teslim olmuştuk.",
      "inText": "«فَغُيِّرَ بَعْضُ صِفَاتِهِ …»"
     },
     {
      "ar": "قِيلَ لَهَا ادْخُلِي الصَّرْحَ ۖ فَلَمَّا رَأَتْهُ حَسِبَتْهُ لُجَّةً وَكَشَفَتْ عَنْ سَاقَيْهَا ۚ قَالَ إِنَّهُ صَرْحٌ مُمَرَّدٌ مِنْ قَوَارِيرَ ۗ قَالَتْ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ",
      "ref": "Neml 27:44",
      "tr": "Ona: Köşke gir, denildi. Onu görünce derin bir su sandı ve bacaklarını açtı. Süleyman dedi: Bu, camdan yapılmış pürüzsüz bir köşktür. Kraliçe dedi: Rabbim! Ben kendime zulmettim; Süleyman ile birlikte âlemlerin Rabbi Allah'a teslim oldum.",
      "inText": "«إِنَّهُ صَرْحٌ مُمَرَّدٌ مِنْ قَوَارِيرَ»"
     }
    ]
   },
   "sections": [
    {
     "n": 11,
     "title_ar": "الْمَلِكَةُ تَأْتِي خَاضِعَةً",
     "title_tr": "Kraliçe boyun eğerek geliyor",
     "s": [
      [
       "فَلَمَّا رَجَعَتْ هٰذِهِ «الْبَعْثَةُ» إِلَى مَلِكَةِ سَبَإٍ، وَحَكَتْ لَهَا الْقِصَّةَ، سَمِعَتْ وَأَطَاعَتْ هِيَ وَقَوْمُهَا وَأَقْبَلَتْ تَسِيرُ إِلَيْهِ فِي جُنُودِهَا خَاضِعَةً.",
       "Bu «elçi heyeti» Sebe' kraliçesine dönüp olanları anlatınca, kraliçe ve kavmi dinleyip itaat ettiler; kraliçe askerleriyle birlikte boyun eğmiş olarak ona doğru yola çıktı."
      ],
      [
       "وَلَمَّا تَحَقَّقَ سُلَيْمَانُ - عَلَيْهِ السَّلَامُ - قُدُومَهُمْ إِلَيْهِ فَرِحَ بِذٰلِكَ وَحَمِدَ اللهَ.",
       "Süleyman (a.s.) onların kendisine geldiğinden emin olunca buna sevindi ve Allah'a hamd etti."
      ],
      [
       "وَأَرَادَ أَنْ يُرِيَهَا آيَةً مِنْ آيَاتِ اللهِ، لِيَكُونَ ذٰلِكَ أَدَلَّ عَلَى قُدْرَةِ اللهِ وَنِعَمِهِ عَلَى سُلَيْمَانَ.",
       "Ona Allah'ın mucizelerinden birini göstermek istedi ki bu, Allah'ın kudretine ve Süleyman'a verdiği nimetlere daha açık bir delil olsun."
      ],
      [
       "فَأَرَادَ أَنْ يُحْضِرَ عَرْشَهَا الَّذِي وَكَّلَتْ بِهِ رِجَالًا أَقْوِيَاءَ أُمَنَاءَ، فَطَلَبَ مِنْ مَلَئِهِ أَنْ يَأْتُوهُ بِعَرْشِهَا قَبْلَ وُصُولِ هٰذَا الْمَوْكِبِ الْعَظِيمِ.",
       "Güçlü ve güvenilir adamları koruması için görevlendirdiği tahtını getirtmek istedi; bu büyük kafile varmadan önce tahtını getirmelerini meclisindekilerden istedi."
      ],
      [
       "وَقَدْ تَحَقَّقَ مَا أَرَادَ سُلَيْمَانُ فِي أَقْرَبِ وَقْتٍ وَكَانَ مُعْجِزَةً.",
       "Süleyman'ın istediği en kısa sürede gerçekleşti; bu bir mucizeydi."
      ],
      [
       "وَأَمَرَ بِهِ سُلَيْمَانُ فَغُيِّرَ بَعْضُ صِفَاتِهِ لِيَخْتَبِرَ مَعْرِفَتَهَا وَثَبَاتَهَا عِنْدَ رُؤْيَتِهِ.",
       "Süleyman emretti, tahtın bazı özellikleri değiştirildi; onu görünce kraliçenin tanıyıp tanımayacağını ve soğukkanlılığını sınamak istedi."
      ],
      [
       "وَإِنِ الْتَبَسَ عَلَيْهَا الْأَمْرُ كَانَ دَلِيلًا عَلَى قُصُورِ نَظَرِهَا فِي أُمُورٍ أَدَقَّ مِنْهُ وَأَبْعَدَ مَنَالًا.",
       "Eğer iş ona karışık gelirse, bu, ondan daha ince ve ulaşılması daha zor konularda görüşünün yetersiz olduğunu gösterecekti."
      ]
     ]
    },
    {
     "n": 12,
     "title_ar": "قَصْرٌ عَظِيمٌ مِنْ زُجَاجٍ",
     "title_tr": "Camdan büyük bir saray",
     "s": [
      [
       "وَأَمَرَ سُلَيْمَانُ الْبَنَّائِينَ مِنَ الْإِنْسِ وَالْجِنِّ فَبَنَوْا لَهَا قَصْرًا عَظِيمًا مِنْ زُجَاجٍ وَأَجْرَوْا تَحْتَهُ الْمَاءَ.",
       "Süleyman insanlardan ve cinlerden olan ustalara emretti; onlar da kraliçe için camdan büyük bir saray yaptılar ve altından su akıttılar."
      ],
      [
       "فَالَّذِي لَا يَعْرِفُ أَمْرَهُ يَحْسَبُ أَنَّهُ مَاءٌ، وَلٰكِنَّ الزُّجَاجَ يَحُولُ بَيْنَ الْمَاشِي وَبَيْنَ الْمَاءِ.",
       "İçyüzünü bilmeyen onu su sanır; ama cam, yürüyenle su arasına girer."
      ],
      [
       "وَكَانَ الْمُؤَكَّدُ أَنَّ الْمَلِكَةَ تَتَوَهَّمُهُ مَاءً فَتَكْشِفُ عَنْ سَاقَيْهَا.",
       "Kraliçenin onu su sanıp eteğini toplayarak bacaklarını açacağı kesindi."
      ],
      [
       "وَهُنَالِكَ تَتَبَيَّنُ الْخَطَأَ وَتُدْرِكُ قُصُورَ نَظَرِهَا وَانْخِدَاعَهَا بِالْمَظَاهِرِ.",
       "İşte o zaman hatasını görecek, görüşünün yetersizliğini ve görünüşe aldandığını anlayacaktı."
      ],
      [
       "وَكَانَتْ هِيَ وَقَوْمُهَا يَسْجُدُونَ لِلشَّمْسِ لِأَنَّهَا أَكْبَرُ مَظْهَرٍ لِلنُّورِ وَالْحَيَاةِ، الَّتِي هِيَ مِنْ صِفَاتِ اللهِ تَعَالَى.",
       "O ve kavmi güneşe secde ediyorlardı; çünkü güneş, Allah Teâlâ'nın sıfatlarından olan nurun ve hayatın en büyük görüntüsüydü."
      ],
      [
       "وَهُنَالِكَ يَنْكَشِفُ الْغِطَاءُ عَنْ عَيْنِهَا فَتَعْرِفُ أَنَّهَا كَمَا أَخْطَأَتْ فِي مُعَامَلَةِ الزُّجَاجِ مُعَامَلَةَ الْمَاءِ فَكَشَفَتْ عَنْ سَاقَيْهَا كَذٰلِكَ أَخْطَأَتْ فِي مُعَامَلَةِ الشَّمْسِ مُعَامَلَةَ الْخَالِقِ فَسَجَدَتْ لَهَا وَعَبَدَتْهَا.",
       "İşte o zaman gözündeki perde kalkacak ve anlayacaktı ki camı su sanıp bacaklarını açmakla nasıl yanıldıysa, güneşi yaratıcı sanıp ona secde etmek ve tapmakla da öyle yanılmıştı."
      ],
      [
       "وَكَانَ ذٰلِكَ أَبْلَغَ مِنْ مِائَةِ خُطْبَةٍ وَأَلْفِ دَلِيلٍ.",
       "Bu, yüz hutbeden ve bin delilden daha etkiliydi."
      ]
     ]
    },
    {
     "n": 13,
     "title_ar": "وَأَسْلَمَتْ مَعَ سُلَيْمَانَ لِلهِ رَبِّ الْعَالَمِينَ",
     "title_tr": "Süleyman ile birlikte âlemlerin Rabbi Allah'a teslim oldu",
     "s": [
      [
       "وَهٰكَذَا كَانَ، فَقَدْ تَوَرَّطَتْ رَغْمَ دَهَائِهَا وَذَكَائِهَا فِي هٰذَا الْخَطَأِ الْفَاحِشِ.",
       "Ve öyle de oldu: Bütün kurnazlığına ve zekâsına rağmen bu büyük hataya düştü."
      ],
      [
       "وَتَوَهَّمَتِ الزُّجَاجَةَ مَاءً رَقْرَاقًا يَسِيلُ وَيَمُوجُ، فَكَشَفَتْ عَنْ سَاقَيْهَا، وَأَرَادَتْ أَنْ تَخُوضَهُ.",
       "Camı akan ve dalgalanan berrak bir su sandı; bacaklarını açtı ve suya girmek istedi."
      ],
      [
       "هُنَالِكَ نَبَّهَهَا نَبِيُّ اللهِ سُلَيْمَانُ عَلَى خَطَئِهَا، وَقَالَ: إِنَّهُ صَرْحٌ مُمَرَّدٌ مِنْ قَوَارِيرَ.",
       "İşte o zaman Allah'ın peygamberi Süleyman ona hatasını gösterdi ve dedi: Bu, camdan yapılmış pürüzsüz bir saraydır."
      ],
      [
       "وَانْكَشَفَ الْغِطَاءُ عَنْ عَيْنِهَا، وَعَرَفَتْ جَهْلَهَا فِي قِيَاسِ الْمَظْهَرِ عَلَى الظَّاهِرِ وَعِبَادَةِ الشَّمْسِ وَالسُّجُودِ لَهَا.",
       "Gözündeki perde kalktı; görünüşü gerçekmiş gibi kabul etmekteki, güneşe tapıp ona secde etmekteki cehaletini anladı."
      ],
      [
       "وَابْتَدَرَتْ تَقُولُ: رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلهِ رَبِّ الْعَالَمِينَ.",
       "Hemen şöyle dedi: Rabbim! Ben kendime zulmettim; Süleyman ile birlikte âlemlerin Rabbi Allah'a teslim oldum."
      ]
     ]
    }
   ]
  },
  {
   "id": 6,
   "emoji": "📖",
   "title_ar": "الْقِصَّةُ فِي الْقُرْآنِ",
   "title_tr": "Kıssa Kur'an'da",
   "pre": {
    "predict": {
     "prompt_tr": "Şimdi aynı kıssayı Kur'an ayetleriyle okuyacaksın: hüdhüd, mektup, hediye, taht ve köşk. Kıssanın sırasını hatırlıyor musun? Sence mektuptan hemen sonra ne geldi?",
     "options": [
      [
       "الْمَلِكَةُ اسْتَشَارَتِ الْمَلَأَ",
       "Kraliçe ileri gelenlere danıştı"
      ],
      [
       "أُحْضِرَ الْعَرْشُ",
       "Taht getirildi"
      ],
      [
       "دَخَلَتِ الصَّرْحَ",
       "Köşke girdi"
      ]
     ]
    },
    "vocab": [
     [
      "تَفَقَّدَ",
      "gözden geçirdi, aradı",
      "🔍"
     ],
     [
      "نَبَأٌ",
      "haber",
      "📰"
     ],
     [
      "الْمَلَأُ",
      "ileri gelenler, meclis",
      "👥"
     ],
     [
      "أَفْتُونِي",
      "bana görüş bildirin",
      "💬"
     ],
     [
      "عِفْرِيتٌ",
      "ifrit (güçlü cin)",
      "👹"
     ],
     [
      "طَرْفٌ",
      "bakış, göz kırpma",
      "👁️"
     ]
    ]
   },
   "stop": {
    "section": 14,
    "after": 8,
    "prompt_tr": "Süleyman hediyeyi geri çevirdi ve elçiyi geri gönderdi. Sence şimdi meclisine ne sordu?",
    "options": [
     [
      "أَيُّكُمْ يَأْتِينِي بِعَرْشِهَا؟",
      "Hanginiz bana onun tahtını getirir?"
     ],
     [
      "أَيْنَ الْهَدِيَّةُ؟",
      "Hediye nerede?"
     ],
     [
      "مَتَى نَذْهَبُ إِلَى سَبَإٍ؟",
      "Sebe'ye ne zaman gidiyoruz?"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "تَفَقَّدَ سُلَيْمَانُ الطَّيْرَ.",
     "جَاءَ الْهُدْهُدُ بِنَبَإٍ يَقِينٍ.",
     "قَالَتْ: أُلْقِيَ إِلَيَّ كِتَابٌ كَرِيمٌ.",
     "قَالَ عِفْرِيتٌ: أَنَا آتِيكَ بِهِ.",
     "قَالَتْ: كَأَنَّهُ هُوَ.",
     "بَرَّأَ اللهُ سُلَيْمَانَ مِنَ الْكُفْرِ."
    ],
    "questions": [
     {
      "q": "مَاذَا قَالَ سُلَيْمَانُ لَمَّا لَمْ يَرَ الْهُدْهُدَ؟",
      "qt": "Süleyman hüdhüdü göremeyince ne dedi?",
      "o": [
       "مَا لِيَ لَا أَرَى الْهُدْهُدَ",
       "أَيْنَ الْعَرْشُ",
       "مَنْ أَنْتَ"
      ],
      "ot": [
       "Neden hüdhüdü göremiyorum?",
       "Taht nerede?",
       "Sen kimsin?"
      ],
      "a": 0,
      "ev": [
       "14.1"
      ]
     },
     {
      "q": "كَيْفَ بَدَأَ كِتَابُ سُلَيْمَانَ؟",
      "qt": "Süleyman'ın mektubu nasıl başlıyordu?",
      "o": [
       "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ",
       "يَا أَيُّهَا النَّاسُ",
       "أَنَا مَلِكُ الْأَرْضِ"
      ],
      "ot": [
       "Rahmân ve Rahîm olan Allah'ın adıyla",
       "Ey insanlar",
       "Ben yeryüzünün kralıyım"
      ],
      "a": 0,
      "ev": [
       "14.5"
      ]
     },
     {
      "q": "مَنْ أَتَى بِالْعَرْشِ أَسْرَعَ؟",
      "qt": "Tahtı en hızlı kim getirdi?",
      "o": [
       "الَّذِي عِنْدَهُ عِلْمٌ مِنَ الْكِتَابِ",
       "عِفْرِيتٌ مِنَ الْجِنِّ",
       "الْهُدْهُدُ"
      ],
      "ot": [
       "Yanında kitaptan bilgi bulunan kişi",
       "Cinlerden bir ifrit",
       "Hüdhüd"
      ],
      "a": 0,
      "ev": [
       "14.10"
      ]
     },
     {
      "q": "مَاذَا قَالَتِ الْمَلِكَةُ لَمَّا رَأَتْ عَرْشَهَا؟",
      "qt": "Kraliçe tahtını görünce ne dedi?",
      "o": [
       "كَأَنَّهُ هُوَ",
       "لَيْسَ هٰذَا عَرْشِي",
       "هٰذَا عَرْشِي بِلَا شَكٍّ"
      ],
      "ot": [
       "Sanki o!",
       "Bu benim tahtım değil",
       "Bu şüphesiz benim tahtım"
      ],
      "a": 0,
      "ev": [
       "14.11"
      ]
     },
     {
      "q": "مَاذَا نَسَبَ الْيَهُودُ إِلَى سُلَيْمَانَ؟",
      "qt": "Yahudiler Süleyman'a neyi isnat ettiler?",
      "o": [
       "السِّحْرَ وَالْكُفْرَ",
       "الْبُخْلَ",
       "الْجُبْنَ"
      ],
      "ot": [
       "Sihri ve inkârı",
       "Cimriliği",
       "Korkaklığı"
      ],
      "a": 0,
      "ev": [
       "15.1"
      ]
     }
    ],
    "focus": {
     "title": "Dişile hitap: أَفْتُونِي — تَأْمُرِينَ، عَرْشُكِ، ادْخُلِي",
     "explain": "Bir kadına hitap ederken fiil ve zamirler dişil olur: muzari <b>ـِينَ</b> ile biter: <span class='ar-inline'>تَأْمُرِينَ</span> (emredersin); emir <b>ـِي</b> ile: <span class='ar-inline'>انْظُرِي</span>, <span class='ar-inline'>ادْخُلِي</span>; iyelik zamiri <b>ـكِ</b> olur: <span class='ar-inline'>عَرْشُكِ</span>, <span class='ar-inline'>إِلَيْكِ</span>. Karşılaştırın: erkeğe <span class='ar-inline'>تَأْمُرُ</span>, <span class='ar-inline'>انْظُرْ</span>, <span class='ar-inline'>عَرْشُكَ</span>.",
     "examples": [
      "«وَالْأَمْرُ إِلَيْكِ فَانْظُرِي مَاذَا تَأْمُرِينَ»",
      "«فَلَمَّا جَاءَتْ قِيلَ أَهٰكَذَا عَرْشُكِ»",
      "«قِيلَ لَهَا ادْخُلِي الصَّرْحَ»"
     ],
     "items": [
      {
       "q": "«وَالْأَمْرُ إِلَيْكِ فَ____ مَاذَا تَأْمُرِينَ»",
       "o": [
        "انْظُرِي",
        "انْظُرْ",
        "انْظُرُوا"
       ],
       "a": 0
      },
      {
       "q": "«فَانْظُرِي مَاذَا ____»",
       "o": [
        "تَأْمُرِينَ",
        "تَأْمُرُ",
        "يَأْمُرُونَ"
       ],
       "a": 0
      },
      {
       "q": "«قِيلَ أَهٰكَذَا ____»",
       "o": [
        "عَرْشُكِ",
        "عَرْشُكَ",
        "عَرْشُهُ"
       ],
       "a": 0
      },
      {
       "q": "«ادْخُلِي الصَّرْحَ» — kime söyleniyor?",
       "o": [
        "bir kadına",
        "bir erkeğe",
        "bir topluluğa"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "تَفَقَّدَ سُلَيْمَانُ {الطَّيْرَ} فَقَالَ: مَا لِيَ لَا أَرَى الْهُدْهُدَ؟ وَقَالَتِ الْمَلِكَةُ: إِنِّي أُلْقِيَ إِلَيَّ كِتَابٌ {كَرِيمٌ}. وَقَالَ عِفْرِيتٌ مِنَ {الْجِنِّ}: أَنَا آتِيكَ بِهِ. فَلَمَّا جَاءَتْ قَالَتْ: كَأَنَّهُ {هُوَ}. وَمَا كَفَرَ سُلَيْمَانُ وَلٰكِنَّ {الشَّيَاطِينَ} كَفَرُوا."
    },
    "think": {
     "q": "قَالَ سُلَيْمَانُ لَمَّا رَأَى الْعَرْشَ: «هٰذَا مِنْ فَضْلِ رَبِّي لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ». مَاذَا يَعْنِي ذٰلِكَ؟",
     "qt": "Süleyman tahtı görünce «Bu, Rabbimin lütfundandır; şükür mü edeceğim nankörlük mü, beni sınamak için» dedi. Bu ne demek?",
     "model": "Süleyman büyük bir mucizeyi gerçekleşmiş görünce bunu kendi gücüne bağlamadı; Allah'ın lütfu saydı. Dahası, nimetin de bir sınav olduğunu söyledi: Sıkıntı insanı sabırla sınadığı gibi, nimet de şükürle sınar. Kıssa boyunca Dâvûd ve Süleyman'ın asıl özelliği bu: Ellerindeki büyük güce rağmen «Bu Allah'tandır» diyebilmeleri."
    },
    "retell": [
     "تَفَقَّدَ الطَّيْرَ",
     "نَبَأٌ يَقِينٌ",
     "كِتَابٌ كَرِيمٌ",
     "عِفْرِيتٌ",
     "كَأَنَّهُ هُوَ",
     "مَا كَفَرَ سُلَيْمَانُ"
    ],
    "quran": [
     {
      "ar": "فَمَكَثَ غَيْرَ بَعِيدٍ فَقَالَ أَحَطْتُ بِمَا لَمْ تُحِطْ بِهِ وَجِئْتُكَ مِنْ سَبَإٍ بِنَبَإٍ يَقِينٍ",
      "ref": "Neml 27:22",
      "tr": "Çok geçmeden (hüdhüd) gelip dedi: Senin bilmediğin bir şeyi öğrendim; sana Sebe'den kesin bir haber getirdim.",
      "inText": "«فَمَكَثَ غَيْرَ بَعِيدٍ …»"
     },
     {
      "ar": "وَاتَّبَعُوا مَا تَتْلُو الشَّيَاطِينُ عَلَىٰ مُلْكِ سُلَيْمَانَ ۖ وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا يُعَلِّمُونَ النَّاسَ السِّحْرَ",
      "ref": "Bakara 2:102",
      "tr": "Şeytanların Süleyman'ın hükümranlığı hakkında okuyup durdukları şeylere uydular. Oysa Süleyman inkâr etmedi; fakat insanlara sihri öğreten şeytanlar inkâr etti.",
      "inText": "«وَمَا كَفَرَ سُلَيْمَانُ وَلٰكِنَّ الشَّيَاطِينَ كَفَرُوا …»"
     },
     {
      "ar": "وَوَهَبْنَا لِدَاوُودَ سُلَيْمَانَ ۚ نِعْمَ الْعَبْدُ ۖ إِنَّهُ أَوَّابٌ",
      "ref": "Sâd 38:30",
      "tr": "Dâvûd'a Süleyman'ı bağışladık. O ne güzel kuldu! Şüphesiz o, Allah'a çokça yönelen biriydi.",
      "inText": "«وَوَهَبْنَا لِدَاوُدَ سُلَيْمَانَ …»"
     },
     {
      "ar": "وَإِنَّ لَهُ عِنْدَنَا لَزُلْفَىٰ وَحُسْنَ مَآبٍ",
      "ref": "Sâd 38:40",
      "tr": "Şüphesiz onun katımızda bir yakınlığı ve güzel bir dönüş yeri vardır.",
      "inText": "«وَإِنَّ لَهُ عِنْدَنَا لَزُلْفَى …»"
     }
    ]
   },
   "sections": [
    {
     "n": 14,
     "title_ar": "الْقُرْآنُ يَحْكِي قِصَّةَ سُلَيْمَانَ",
     "title_tr": "Kur'an Süleyman'ın kıssasını anlatıyor",
     "s": [
      [
       "وَاقْرَءُوا هٰذِهِ الْقِصَّةَ الشَّائِقَةَ الْمُمْتِعَةَ فِي الْقُرْآنِ، يَقُولُ اللهُ تَعَالَى:",
       "Bu ilgi çekici ve zevkli kıssayı Kur'an'da okuyun; Allah Teâlâ buyuruyor:"
      ],
      [
       "«وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ * لَأُعَذِّبَنَّهُ عَذَابًا شَدِيدًا أَوْ لَأَذْبَحَنَّهُ أَوْ لَيَأْتِيَنِّي بِسُلْطَانٍ مُبِينٍ».",
       "«Süleyman kuşları gözden geçirdi ve dedi: Neden hüdhüdü göremiyorum? Yoksa kayıplardan mı? Ya bana apaçık bir delil getirir ya da onu şiddetli bir azapla cezalandırırım veya boğazlarım.»"
      ],
      [
       "«فَمَكَثَ غَيْرَ بَعِيدٍ فَقَالَ أَحَطْتُ بِمَا لَمْ تُحِطْ بِهِ وَجِئْتُكَ مِنْ سَبَإٍ بِنَبَإٍ يَقِينٍ * إِنِّي وَجَدْتُ امْرَأَةً تَمْلِكُهُمْ وَأُوتِيَتْ مِنْ كُلِّ شَيْءٍ وَلَهَا عَرْشٌ عَظِيمٌ».",
       "«Çok geçmeden (hüdhüd) gelip dedi: Senin bilmediğin bir şeyi öğrendim; sana Sebe'den kesin bir haber getirdim. Ben onlara hükmeden bir kadın buldum; ona her şeyden verilmiş, büyük bir tahtı da var.»"
      ],
      [
       "«وَجَدْتُهَا وَقَوْمَهَا يَسْجُدُونَ لِلشَّمْسِ مِنْ دُونِ اللهِ وَزَيَّنَ لَهُمُ الشَّيْطَانُ أَعْمَالَهُمْ فَصَدَّهُمْ عَنِ السَّبِيلِ فَهُمْ لَا يَهْتَدُونَ * أَلَّا يَسْجُدُوا لِلهِ الَّذِي يُخْرِجُ الْخَبْءَ فِي السَّمَاوَاتِ وَالْأَرْضِ وَيَعْلَمُ مَا تُخْفُونَ وَمَا تُعْلِنُونَ * اللهُ لَا إِلٰهَ إِلَّا هُوَ رَبُّ الْعَرْشِ الْعَظِيمِ».",
       "«Onu ve kavmini, Allah'ı bırakıp güneşe secde ederken buldum. Şeytan onlara işlerini güzel göstermiş ve onları yoldan alıkoymuş; bu yüzden doğru yolu bulamıyorlar. Göklerde ve yerde gizli olanı ortaya çıkaran, gizlediğinizi ve açığa vurduğunuzu bilen Allah'a secde etmesinler diye (şeytan böyle yaptı). Allah, O'ndan başka ilah yoktur; büyük Arş'ın Rabbidir.»"
      ],
      [
       "«قَالَ سَنَنْظُرُ أَصَدَقْتَ أَمْ كُنْتَ مِنَ الْكَاذِبِينَ * اذْهَبْ بِكِتَابِي هٰذَا فَأَلْقِهْ إِلَيْهِمْ ثُمَّ تَوَلَّ عَنْهُمْ فَانْظُرْ مَاذَا يَرْجِعُونَ».",
       "«Süleyman dedi: Doğru mu söyledin, yoksa yalancılardan mısın, bakacağız. Bu mektubumu götür, onlara bırak; sonra onlardan biraz çekil de ne cevap vereceklerine bak.»"
      ],
      [
       "«قَالَتْ يَا أَيُّهَا الْمَلَأُ إِنِّي أُلْقِيَ إِلَيَّ كِتَابٌ كَرِيمٌ * إِنَّهُ مِنْ سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ * أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ».",
       "«Kraliçe dedi: Ey ileri gelenler! Bana değerli bir mektup bırakıldı. Mektup Süleyman'dandır ve ‘Rahmân ve Rahîm olan Allah'ın adıyla’ başlıyor: Bana karşı büyüklük taslamayın ve teslim olarak bana gelin.»"
      ],
      [
       "«قَالَتْ يَا أَيُّهَا الْمَلَأُ أَفْتُونِي فِي أَمْرِي مَا كُنْتُ قَاطِعَةً أَمْرًا حَتَّى تَشْهَدُونِ * قَالُوا نَحْنُ أُولُو قُوَّةٍ وَأُولُو بَأْسٍ شَدِيدٍ وَالْأَمْرُ إِلَيْكِ فَانْظُرِي مَاذَا تَأْمُرِينَ».",
       "«Dedi ki: Ey ileri gelenler! Bu işimde bana görüş bildirin; siz yanımda olmadan hiçbir işe karar vermem. Dediler ki: Biz güç sahibiyiz, çetin savaşçılarız; ama emir senindir, ne emredeceğine bir bak.»"
      ],
      [
       "«قَالَتْ إِنَّ الْمُلُوكَ إِذَا دَخَلُوا قَرْيَةً أَفْسَدُوهَا وَجَعَلُوا أَعِزَّةَ أَهْلِهَا أَذِلَّةً وَكَذٰلِكَ يَفْعَلُونَ * وَإِنِّي مُرْسِلَةٌ إِلَيْهِمْ بِهَدِيَّةٍ فَنَاظِرَةٌ بِمَ يَرْجِعُ الْمُرْسَلُونَ».",
       "«Dedi ki: Krallar bir ülkeye girdiklerinde orayı bozarlar, halkının ileri gelenlerini hor ve hakir yaparlar. İşte böyle yaparlar. Ben onlara bir hediye göndereceğim ve elçilerin ne ile döneceğine bakacağım.»"
      ],
      [
       "«فَلَمَّا جَاءَ سُلَيْمَانَ قَالَ أَتُمِدُّونَنِ بِمَالٍ فَمَا آتَانِيَ اللهُ خَيْرٌ مِمَّا آتَاكُمْ بَلْ أَنْتُمْ بِهَدِيَّتِكُمْ تَفْرَحُونَ * ارْجِعْ إِلَيْهِمْ فَلَنَأْتِيَنَّهُمْ بِجُنُودٍ لَا قِبَلَ لَهُمْ بِهَا وَلَنُخْرِجَنَّهُمْ مِنْهَا أَذِلَّةً وَهُمْ صَاغِرُونَ».",
       "«Elçi Süleyman'a gelince Süleyman dedi: Bana mal ile mi yardım ediyorsunuz? Allah'ın bana verdiği, size verdiğinden daha hayırlıdır. Hayır, siz kendi hediyenizle sevinirsiniz. Onlara dön! Andolsun, onlara karşı koyamayacakları ordularla geleceğiz ve onları oradan hor ve küçük düşmüş olarak çıkaracağız.»"
      ],
      [
       "«قَالَ يَا أَيُّهَا الْمَلَأُ أَيُّكُمْ يَأْتِينِي بِعَرْشِهَا قَبْلَ أَنْ يَأْتُونِي مُسْلِمِينَ * قَالَ عِفْرِيتٌ مِنَ الْجِنِّ أَنَا آتِيكَ بِهِ قَبْلَ أَنْ تَقُومَ مِنْ مَقَامِكَ وَإِنِّي عَلَيْهِ لَقَوِيٌّ أَمِينٌ».",
       "«Süleyman dedi: Ey ileri gelenler! Onlar teslim olarak bana gelmeden önce hanginiz bana onun tahtını getirebilir? Cinlerden bir ifrit dedi: Sen yerinden kalkmadan ben onu sana getiririm. Ben buna güç yetiririm ve güvenilirim.»"
      ],
      [
       "«قَالَ الَّذِي عِنْدَهُ عِلْمٌ مِنَ الْكِتَابِ أَنَا آتِيكَ بِهِ قَبْلَ أَنْ يَرْتَدَّ إِلَيْكَ طَرْفُكَ فَلَمَّا رَآهُ مُسْتَقِرًّا عِنْدَهُ قَالَ هٰذَا مِنْ فَضْلِ رَبِّي لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ وَمَنْ شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ وَمَنْ كَفَرَ فَإِنَّ رَبِّي غَنِيٌّ كَرِيمٌ».",
       "«Yanında kitaptan bir bilgi bulunan kişi dedi: Ben onu sana göz açıp kapayıncaya kadar getiririm. Süleyman tahtı yanında durur görünce dedi: Bu, Rabbimin lütfundandır; şükür mü edeceğim yoksa nankörlük mü, beni sınamak için. Kim şükrederse kendisi için şükreder; kim nankörlük ederse bilsin ki Rabbim her şeyden müstağnidir, cömerttir.»"
      ],
      [
       "«قَالَ نَكِّرُوا لَهَا عَرْشَهَا نَنْظُرْ أَتَهْتَدِي أَمْ تَكُونُ مِنَ الَّذِينَ لَا يَهْتَدُونَ * فَلَمَّا جَاءَتْ قِيلَ أَهٰكَذَا عَرْشُكِ قَالَتْ كَأَنَّهُ هُوَ وَأُوتِينَا الْعِلْمَ مِنْ قَبْلِهَا وَكُنَّا مُسْلِمِينَ».",
       "«Süleyman dedi: Tahtını onun tanıyamayacağı hâle getirin; bakalım tanıyacak mı, yoksa tanımayanlardan mı olacak? Kraliçe gelince ona: Senin tahtın da böyle mi, denildi. Dedi ki: Sanki o! Bize bundan önce bilgi verilmişti; biz zaten teslim olmuştuk.»"
      ],
      [
       "«وَصَدَّهَا مَا كَانَتْ تَعْبُدُ مِنْ دُونِ اللهِ إِنَّهَا كَانَتْ مِنْ قَوْمٍ كَافِرِينَ * قِيلَ لَهَا ادْخُلِي الصَّرْحَ فَلَمَّا رَأَتْهُ حَسِبَتْهُ لُجَّةً وَكَشَفَتْ عَنْ سَاقَيْهَا قَالَ إِنَّهُ صَرْحٌ مُمَرَّدٌ مِنْ قَوَارِيرَ قَالَتْ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلهِ رَبِّ الْعَالَمِينَ».",
       "«Allah'ı bırakıp taptığı şeyler onu (doğru yoldan) alıkoymuştu; çünkü o inkârcı bir kavimdendi. Ona: Köşke gir, denildi. Onu görünce derin bir su sandı ve eteğini toplayıp bacaklarını açtı. Süleyman dedi: Bu, camdan yapılmış pürüzsüz bir köşktür. Kraliçe dedi: Rabbim! Ben kendime zulmettim; Süleyman ile birlikte âlemlerin Rabbi Allah'a teslim oldum.»"
      ],
      [
       "وَهٰذَا نَبِيُّ اللهِ سُلَيْمَانُ وَقَدْ رَأَيْتُمْ مَوَاقِفَهُ فِي الدَّعْوَةِ إِلَى اللهِ وَإِلَى التَّوْحِيدِ، وَحِكْمَتَهُ وَفِقْهَهُ وَغَيْرَتَهُ عَلَى دِينِهِ وَعَقِيدَتِهِ.",
       "İşte Allah'ın peygamberi Süleyman! Onun Allah'a ve tevhide davetteki tutumlarını, hikmetini, kavrayışını ve dinine, inancına gösterdiği gayreti gördünüz."
      ]
     ]
    },
    {
     "n": 15,
     "title_ar": "وَمَا كَفَرَ سُلَيْمَانُ وَلٰكِنَّ الشَّيَاطِينَ كَفَرُوا",
     "title_tr": "Süleyman inkâr etmedi, şeytanlar inkâr etti",
     "s": [
      [
       "نَسَبَ إِلَيْهِ الْيَهُودُ مَا لَا يَلِيقُ بِمُؤْمِنٍ مُوَحِّدٍ شَرَحَ اللهُ صَدْرَهُ لِلْإِيمَانِ، فَضْلًا عَنْ نَبِيٍّ مُرْسَلٍ آتَاهُ اللهُ الْحِكْمَةَ، وَأَكْرَمَهُ بِالنُّبُوَّةِ، وَشَرَّفَهُ بِالْخِلَافَةِ.",
       "Yahudiler ona, Allah'ın göğsünü imana açtığı tevhid ehli bir mümine bile yakışmayan şeyler isnat ettiler; Allah'ın hikmet verdiği, peygamberlikle ikram ettiği ve halifelikle şereflendirdiği bir elçiye yakışmayacağını söylemeye bile gerek yok."
      ],
      [
       "فَنَسَبُوا إِلَيْهِ السِّحْرَ وَالْكُفْرَ وَالْمُدَاهَنَةَ لِلشِّرْكِ وَالِاضْطِرَابَ فِي أَمْرِ التَّوْحِيدِ بِسَبَبِ أَزْوَاجِهِ.",
       "Ona sihri, inkârı, eşleri yüzünden şirke göz yummayı ve tevhid konusunda sarsılmayı isnat ettiler."
      ],
      [
       "فَبَرَّأَهُ اللهُ مِنْ كُلِّ ذٰلِكَ فَقَالَ: «وَمَا كَفَرَ سُلَيْمَانُ وَلٰكِنَّ الشَّيَاطِينَ كَفَرُوا يُعَلِّمُونَ النَّاسَ السِّحْرَ».",
       "Allah onu bütün bunlardan temize çıkardı ve buyurdu: «Süleyman inkâr etmedi; fakat insanlara sihri öğreten şeytanlar inkâr etti.»"
      ],
      [
       "وَقَالَ: «وَوَهَبْنَا لِدَاوُدَ سُلَيْمَانَ نِعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ».",
       "Ve buyurdu: «Dâvûd'a Süleyman'ı bağışladık. O ne güzel kuldu! Şüphesiz o, Allah'a çokça yönelen biriydi.»"
      ],
      [
       "وَقَالَ: «وَإِنَّ لَهُ عِنْدَنَا لَزُلْفَى وَحُسْنَ مَآبٍ».",
       "Ve buyurdu: «Şüphesiz onun katımızda bir yakınlığı ve güzel bir dönüş yeri vardır.»"
      ]
     ]
    }
   ]
  }
 ]
});
