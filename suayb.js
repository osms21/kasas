/* Kasasu'n-Nebiyyîn — Hz. Şuayb'ın Kıssası (s. 287–300)
   Her cümle: ["Arapça (harekeli)", "Türkçe"]. Kur'an'dan alıntılar «...» içinde. */
window.STORIES = window.STORIES || [];
window.STORIES.push({
 "id": "suayb",
 "title_ar": "قِصَّةُ شُعَيْبٍ عَلَيْهِ السَّلَامُ",
 "title_tr": "Hz. Şuayb'ın Kıssası",
 "source": "Kasasu'n-Nebiyyîn, s. 287–300",
 "overrides": {
  "للابوين": "ابواه",
  "حياتكم": "حياة",
  "اصلاتك": "صلاة",
  "انهاكم": "ينهاهم",
  "بعزيز": "عزيز_قيمة",
  "بقيت": "بقية",
  "وذلت": "ذلت",
  "والهلاك": "هلاك",
  "واتاه": "واتاكم"
 },
 "units": [
  {
   "id": 1,
   "emoji": "🐪",
   "title_ar": "أَهْلُ مَدْيَنَ",
   "title_tr": "Medyen halkı",
   "pre": {
    "predict": {
     "prompt_tr": "Yazar önce okuduğunuz kıssalara geri bakıyor, sonra yeni bir kıssaya geçiyor: Medyen halkı büyük bir ticaret yolunun üzerinde yaşıyor. Sence bu zengin tüccarların en büyük kusuru neydi?",
     "options": [
      [
       "كَانُوا يَنْقُصُونَ الْمِكْيَالَ وَالْمِيزَانَ",
       "Ölçüyü ve tartıyı eksik tutuyorlardı"
      ],
      [
       "كَانُوا لَا يَعْمَلُونَ",
       "Hiç çalışmıyorlardı"
      ],
      [
       "كَانُوا فُقَرَاءَ جِدًّا",
       "Çok fakirdiler"
      ]
     ]
    },
    "vocab": [
     [
      "صِرَاعٌ",
      "mücadele, çatışma",
      "⚔️"
     ],
     [
      "الْحَقُّ / الْبَاطِلُ",
      "hak / bâtıl",
      "⚖️"
     ],
     [
      "تِجَارَةٌ / سِلَعٌ",
      "ticaret / mallar",
      "📦"
     ],
     [
      "قَافِلَةٌ ج قَوَافِلُ",
      "kervan",
      "🐪"
     ],
     [
      "الْمِكْيَالُ / الْمِيزَانُ",
      "ölçek / terazi",
      "⚖️"
     ],
     [
      "يُطَفِّفُونَ",
      "ölçüde hile yaparlar",
      "🤏"
     ]
    ]
   },
   "stop": {
    "section": 3,
    "after": 5,
    "prompt_tr": "Medyen halkı ölçüde hile yapıyor, kervanları korkutuyordu. Sence Allah ne yaptı?",
    "options": [
     [
      "بَعَثَ إِلَيْهِمْ رَسُولَهُ شُعَيْبًا",
      "Onlara elçisi Şuayb'ı gönderdi"
     ],
     [
      "أَهْلَكَهُمْ فِي الْحَالِ",
      "Onları hemen helak etti"
     ],
     [
      "تَرَكَهُمْ",
      "Onları kendi hâllerine bıraktı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَرَأْتُمْ قِصَصَ إِبْرَاهِيمَ وَيُوسُفَ وَنُوحٍ وَهُودٍ وَصَالِحٍ وَمُوسَى.",
     "هٰذِهِ قِصَصُ صِرَاعٍ بَيْنَ الْحَقِّ وَالْبَاطِلِ.",
     "فِي الْقُرْآنِ قِصَصٌ غَيْرُ هٰذِهِ الْقِصَصِ.",
     "كَانَ أَهْلُ مَدْيَنَ عَلَى طَرِيقِ التِّجَارَةِ.",
     "كَانُوا يَنْقُصُونَ الْمِكْيَالَ وَالْمِيزَانَ.",
     "بَعَثَ اللهُ إِلَيْهِمْ شُعَيْبًا."
    ],
    "questions": [
     {
      "q": "كَيْفَ قَرَأَ الطُّلَّابُ الْقِصَصَ السَّابِقَةَ؟",
      "qt": "Öğrenciler önceki kıssaları nasıl okudular?",
      "o": [
       "بِشَوْقٍ وَرَغْبَةٍ",
       "بِمَلَلٍ وَتَعَبٍ",
       "بِسُرْعَةٍ دُونَ فَهْمٍ"
      ],
      "ot": [
       "Özlem ve istekle",
       "Sıkılarak ve yorularak",
       "Anlamadan, hızla"
      ],
      "a": 0,
      "ev": [
       "1.2"
      ]
     },
     {
      "q": "عَلَى أَيِّ شَيْءٍ تَنْتَصِرُ هٰذِهِ الْقِصَصُ؟",
      "qt": "Bu kıssalarda ne neye galip gelir?",
      "o": [
       "الْحَقُّ عَلَى الْبَاطِلِ",
       "الْقَوِيُّ عَلَى الضَّعِيفِ",
       "الْكَثِيرُ عَلَى الْقَلِيلِ"
      ],
      "ot": [
       "Hak bâtıla",
       "Güçlü zayıfa",
       "Çok aza"
      ],
      "a": 0,
      "ev": [
       "2.2"
      ]
     },
     {
      "q": "أَيْنَ كَانَ أَهْلُ مَدْيَنَ؟",
      "qt": "Medyen halkı nerede yaşıyordu?",
      "o": [
       "عَلَى الْجَادَّةِ التِّجَارِيَّةِ بَيْنَ الْيَمَنِ وَالشَّامِ",
       "فِي جِبَالِ الْحِجْرِ",
       "عَلَى نَهْرِ النِّيلِ"
      ],
      "ot": [
       "Yemen ile Şam arasındaki ticaret yolu üzerinde",
       "Hicr dağlarında",
       "Nil nehri kıyısında"
      ],
      "a": 0,
      "ev": [
       "3.1"
      ]
     },
     {
      "q": "مَاذَا كَانُوا يَفْعَلُونَ بِالْقَوَافِلِ؟",
      "qt": "Kervanlara ne yapıyorlardı?",
      "o": [
       "يَتَوَعَّدُونَهَا وَيُخِيفُونَهَا",
       "يَحْمُونَهَا",
       "يَشْتَرُونَ مِنْهَا"
      ],
      "ot": [
       "Onları tehdit edip korkutuyorlardı",
       "Onları koruyorlardı",
       "Onlardan alışveriş yapıyorlardı"
      ],
      "a": 0,
      "ev": [
       "3.4"
      ]
     },
     {
      "q": "بِمَاذَا أَمَرَهُمْ شُعَيْبٌ فِي الْمِكْيَالِ وَالْمِيزَانِ؟",
      "qt": "Şuayb onlara ölçü ve tartı konusunda ne emretti?",
      "o": [
       "أَنْ يُوفُوهُمَا بِالْقِسْطِ",
       "أَنْ يَتْرُكُوا التِّجَارَةَ",
       "أَنْ يَرْفَعُوا الْأَسْعَارَ"
      ],
      "ot": [
       "Onları adaletle tam yapmalarını",
       "Ticareti bırakmalarını",
       "Fiyatları artırmalarını"
      ],
      "a": 0,
      "ev": [
       "3.8"
      ]
     }
    ],
    "focus": {
     "title": "Zıt kavramlar: بَيْنَ … وَ(بَيْنَ) …",
     "explain": "<b>بَيْنَ</b> iki şeyin «arasında» demektir: <span class='ar-inline'>صِرَاعٌ بَيْنَ الْحَقِّ وَالْبَاطِلِ</span> (hak ile bâtıl arasında mücadele). Birden çok çift sayılırken <span class='ar-inline'>وَبَيْنَ</span> tekrarlanır. Arapça metinler sık sık zıt çiftlerle düşünür: <span class='ar-inline'>الْعِلْمُ ↔ الْجَهْلُ</span>, <span class='ar-inline'>النُّورُ ↔ الظَّلَامُ</span>, <span class='ar-inline'>الضَّعِيفُ ↔ الْقَوِيُّ</span>, <span class='ar-inline'>الْقَلِيلُ ↔ الْكَثِيرُ</span>.",
     "examples": [
      "قِصَّةُ صِرَاعٍ بَيْنَ الْحَقِّ وَالْبَاطِلِ وَبَيْنَ الْعِلْمِ وَالْجَهْلِ",
      "وَبَيْنَ النُّورِ وَالظَّلَامِ",
      "قِصَّةُ انْتِصَارٍ … وَالضَّعِيفِ عَلَى الْقَوِيِّ، وَالْقَلِيلِ عَلَى الْكَثِيرِ"
     ],
     "items": [
      {
       "q": "صِرَاعٌ بَيْنَ الْعِلْمِ وَ____",
       "o": [
        "الْجَهْلِ",
        "الْعَالِمِ",
        "الْكِتَابِ"
       ],
       "a": 0
      },
      {
       "q": "وَبَيْنَ النُّورِ وَ____",
       "o": [
        "الظَّلَامِ",
        "الشَّمْسِ",
        "الْقَمَرِ"
       ],
       "a": 0
      },
      {
       "q": "انْتِصَارُ الضَّعِيفِ عَلَى ____",
       "o": [
        "الْقَوِيِّ",
        "الْقَلِيلِ",
        "الصَّغِيرِ"
       ],
       "a": 0
      },
      {
       "q": "«بَيْنَ الْيَمَنِ وَالشَّامِ» = …",
       "o": [
        "Yemen ile Şam arasında",
        "Yemen'den Şam'a",
        "Yemen'de ve Şam'da"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "هٰذِهِ قِصَصُ صِرَاعٍ بَيْنَ الْحَقِّ وَ{الْبَاطِلِ}. وَكَانَ أَهْلُ مَدْيَنَ أَصْحَابَ {تِجَارَةٍ}. وَكَانُوا يَنْقُصُونَ الْمِكْيَالَ وَ{الْمِيزَانَ}، وَيُخِيفُونَ {الْقَوَافِلَ}. فَبَعَثَ اللهُ إِلَيْهِمْ رَسُولَهُ {شُعَيْبًا}."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ إِنَّ هٰذِهِ الْقِصَصَ «قِصَّةُ انْتِصَارٍ لِلضَّعِيفِ عَلَى الْقَوِيِّ»؟",
     "qt": "Kitap neden bu kıssaların «zayıfın güçlüye karşı zaferi» olduğunu söylüyor?",
     "model": "Okuduğumuz kıssalarda peygamberler ve onlara inananlar çoğu zaman az ve güçsüzdü: Nûh'un gemisindekiler, Mûsâ ve köle hâlindeki İsrâiloğulları... Karşılarında ise güçlü kavimler, krallar ve ordular vardı. Ama sonunda hak tarafında olan azınlık kurtuldu, zalim çoğunluk helak oldu. Yazar, gerçek gücün sayıda ve servette değil, hakta olduğunu vurguluyor."
    },
    "retell": [
     "قِصَصُ الْأَنْبِيَاءِ",
     "الْحَقُّ وَالْبَاطِلُ",
     "مَدْيَنُ",
     "تِجَارَةٌ",
     "الْمِكْيَالُ وَالْمِيزَانُ",
     "شُعَيْبٌ"
    ],
    "quran": [
     {
      "ar": "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ ۗ مَا كَانَ حَدِيثًا يُفْتَرَىٰ وَلَٰكِنْ تَصْدِيقَ الَّذِي بَيْنَ يَدَيْهِ وَتَفْصِيلَ كُلِّ شَيْءٍ وَهُدًى وَرَحْمَةً لِقَوْمٍ يُؤْمِنُونَ",
      "ref": "Yûsuf 12:111",
      "tr": "Andolsun, onların kıssalarında akıl sahipleri için bir ibret vardır. Bu, uydurulmuş bir söz değildir; kendinden öncekini doğrulayan, her şeyi açıklayan, iman eden bir topluluk için hidayet ve rahmettir.",
      "inText": "«لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ …»"
     },
     {
      "ar": "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَٰهٍ غَيْرُهُ ۖ وَلَا تَنْقُصُوا الْمِكْيَالَ وَالْمِيزَانَ ۚ إِنِّي أَرَاكُمْ بِخَيْرٍ وَإِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ مُحِيطٍ",
      "ref": "Hûd 11:84",
      "tr": "Medyen'e de kardeşleri Şuayb'ı (gönderdik). Dedi ki: Ey kavmim! Allah'a kulluk edin, sizin O'ndan başka ilahınız yoktur. Ölçüyü ve tartıyı eksik tutmayın. Ben sizi bolluk içinde görüyorum; ama sizin için kuşatıcı bir günün azabından korkuyorum.",
      "inText": "«يَا قَوْمِ اعْبُدُوا اللهَ … وَلَا تَنْقُصُوا الْمِكْيَالَ وَالْمِيزَانَ …»"
     },
     {
      "ar": "وَيَا قَوْمِ أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ ۖ وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ",
      "ref": "Hûd 11:85",
      "tr": "Ey kavmim! Ölçüyü ve tartıyı adaletle tam yapın; insanların mallarını eksik vermeyin ve yeryüzünde bozguncular olarak dolaşmayın.",
      "inText": "«وَيَا قَوْمِ أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 1,
     "title_ar": "نَظْرَةٌ عَلَى الْقِصَصِ السَّابِقَةِ",
     "title_tr": "Önceki kıssalara bir bakış",
     "s": [
      [
       "قَرَأْتُمْ قِصَّةَ سَيِّدِنَا إِبْرَاهِيمَ وَسَيِّدِنَا يُوسُفَ، وَقَرَأْتُمْ قِصَّةَ سَيِّدِنَا نُوحٍ وَسَيِّدِنَا هُودٍ وَسَيِّدِنَا صَالِحٍ.",
       "Efendimiz İbrâhim'in ve efendimiz Yûsuf'un kıssasını okudunuz; efendimiz Nûh'un, efendimiz Hûd'un ve efendimiz Sâlih'in kıssasını okudunuz."
      ],
      [
       "قَرَأْتُمْ قِصَّةَ سَيِّدِنَا مُوسَى فِي شَيْءٍ مِنَ التَّفْصِيلِ وَالتَّطْوِيلِ.",
       "Efendimiz Mûsâ'nın kıssasını biraz ayrıntılı ve uzunca okudunuz."
      ],
      [
       "قَرَأْتُمْ كُلَّ ذٰلِكَ بِشَوْقٍ وَرَغْبَةٍ، وَإِجْلَالٍ وَتَقْدِيرٍ، وَحَلَّتْ فِي نُفُوسِكُمْ وَقُلُوبِكُمْ مَحَلَّ الْقِصَصِ الْحَبِيبَةِ الْأَثِيرَةِ.",
       "Bütün bunları özlemle ve istekle, saygı ve takdirle okudunuz; bu kıssalar gönüllerinizde ve kalplerinizde sevilen, gözde hikâyelerin yerini aldı."
      ],
      [
       "وَوَعَتْهَا ذَاكِرَتُكُمْ، وَذَلَّتْ بِهَا أَلْسِنَتُكُمْ.",
       "Hafızanız onları belledi, dilleriniz onlara alıştı."
      ],
      [
       "وَقَدْ رَآكُمُ النَّاسُ تَحْكُونَهَا لِإِخْوَتِكُمُ الصِّغَارِ، وَتُرَدِّدُونَهَا لِلْأَبَوَيْنِ، وَالْإِخْوَةِ الْكِبَارِ.",
       "İnsanlar sizi, onları küçük kardeşlerinize anlatırken, anne babanıza ve büyük kardeşlerinize tekrar tekrar söylerken gördü."
      ],
      [
       "وَأَنْتُمْ تَتَذَوَّقُونَهَا، وَقَدْ تَتَحَمَّسُونَ فِي حِكَايَتِهَا.",
       "Siz de onların tadını çıkarıyor, anlatırken bazen heyecanlanıyordunuz."
      ]
     ]
    },
    {
     "n": 2,
     "title_ar": "قِصَّةُ صِرَاعٍ بَيْنَ الْحَقِّ وَالْبَاطِلِ",
     "title_tr": "Hak ile bâtılın mücadelesi",
     "s": [
      [
       "وَلَا غَرَابَةَ؛ فَإِنَّهَا قِصَصٌ شَائِقَةٌ مُثِيرَةٌ.",
       "Buna şaşmamalı; çünkü bunlar ilgi çekici, heyecan verici kıssalardır."
      ],
      [
       "وَإِنَّهَا قِصَّةُ صِرَاعٍ بَيْنَ الْحَقِّ وَالْبَاطِلِ وَبَيْنَ الْعِلْمِ وَالْجَهْلِ وَبَيْنَ النُّورِ وَالظَّلَامِ، وَبَيْنَ الْإِنْسَانِيَّةِ وَالْوَحْشِيَّةِ، وَبَيْنَ الْجَزْمِ وَالْيَقِينِ، وَالظَّنِّ وَالتَّخْمِينِ.",
       "Bunlar hak ile bâtıl, ilim ile cehalet, nur ile karanlık, insanlık ile vahşet, kesinlik ve yakîn ile zan ve tahmin arasındaki mücadelenin hikâyesidir."
      ],
      [
       "ثُمَّ إِنَّهَا قِصَّةُ انْتِصَارٍ لِلْحَقِّ عَلَى الْبَاطِلِ، وَالْعِلْمِ عَلَى الْجَهْلِ، وَالضَّعِيفِ عَلَى الْقَوِيِّ، وَالْقَلِيلِ عَلَى الْكَثِيرِ.",
       "Sonra bunlar hakkın bâtıla, ilmin cehalete, zayıfın güçlüye, azın çoğa karşı zaferinin hikâyesidir."
      ],
      [
       "قِصَّةٌ فِيهَا عِلْمٌ وَحِكْمَةٌ وَمَوْعِظَةٌ وَذِكْرَى، وَصَدَقَ اللهُ الْعَظِيمُ:",
       "İçinde ilim, hikmet, öğüt ve hatırlatma bulunan bir hikâye. Yüce Allah ne doğru söylemiştir:"
      ],
      [
       "«لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ مَا كَانَ حَدِيثًا يُفْتَرَى وَلٰكِنْ تَصْدِيقَ الَّذِي بَيْنَ يَدَيْهِ وَتَفْصِيلَ كُلِّ شَيْءٍ وَهُدًى وَرَحْمَةً لِقَوْمٍ يُؤْمِنُونَ».",
       "«Andolsun, onların kıssalarında akıl sahipleri için bir ibret vardır. Bu (Kur'an) uydurulmuş bir söz değildir; kendinden öncekileri doğrulayan, her şeyi açıklayan, iman eden bir topluluk için hidayet ve rahmettir.»"
      ],
      [
       "وَلَيْسَ مَا حَكَيْنَاهُ لَكُمْ مِنْ قِصَصِ النَّبِيِّينَ هُوَ كُلَّ مَا حَكَاهُ اللهُ فِي الْقُرْآنِ مِنْ قِصَصِهِمْ وَحِكَايَاتِهِمْ.",
       "Size anlattığımız peygamber kıssaları, Allah'ın Kur'an'da onlardan anlattığı kıssaların ve hikâyelerin hepsi değildir."
      ],
      [
       "فَفِي الْقُرْآنِ قِصَصٌ غَيْرُ هٰذِهِ الْقِصَصِ.",
       "Kur'an'da bunlardan başka kıssalar da vardır."
      ]
     ]
    },
    {
     "n": 3,
     "title_ar": "وَإِلَى مَدْيَنَ أَخَاهُمْ شُعَيْبًا",
     "title_tr": "Medyen'e de kardeşleri Şuayb'ı (gönderdik)",
     "s": [
      [
       "فِيهِ قِصَّةُ نَبِيِّ اللهِ شُعَيْبٍ الَّذِي أَرْسَلَهُ اللهُ إِلَى مَدْيَنَ وَأَصْحَابِ الْأَيْكَةِ، وَهُمْ أَصْحَابُ تِجَارَةٍ وَسِلَعٍ.",
       "Kur'an'da, Allah'ın Medyen halkına ve Eyke halkına gönderdiği Allah'ın peygamberi Şuayb'ın kıssası vardır. Onlar ticaret ve mal sahibi insanlardı."
      ],
      [
       "فَقَدْ كَانُوا عَلَى الْجَادَّةِ التِّجَارِيَّةِ الْكَبِيرَةِ بَيْنَ الْيَمَنِ وَالشَّامِ وَبَيْنَ الْعِرَاقِ وَمِصْرَ، عَلَى سَاحِلِ الْبَحْرِ الْأَحْمَرِ.",
       "Çünkü Kızıldeniz kıyısında, Yemen ile Şam ve Irak ile Mısır arasındaki büyük ticaret yolunun üzerindeydiler."
      ],
      [
       "كَانُوا يُشْرِكُونَ بِاللهِ غَيْرَهُ، كَمَا كَانَتْ أُمَمُ الْأَنْبِيَاءِ فِي كُلِّ عَصْرٍ.",
       "Her çağdaki peygamber ümmetleri gibi onlar da Allah'a başkasını ortak koşuyorlardı."
      ],
      [
       "وَكَانُوا - زِيَادَةً إِلَى ذٰلِكَ - يَنْقُصُونَ الْمِكْيَالَ وَالْمِيزَانَ، وَيُطَفِّفُونَ فِي الْكَيْلِ.",
       "Bunun da ötesinde ölçüyü ve tartıyı eksik tutuyor, ölçerken hile yapıyorlardı."
      ],
      [
       "وَيَتَعَرَّضُونَ لِلْقَوَافِلِ، فَيَتَوَعَّدُونَهَا وَيُخِيفُونَهَا، وَيَعِيثُونَ فِي الْأَرْضِ فَسَادًا.",
       "Kervanların yolunu kesiyor, onları tehdit edip korkutuyor, yeryüzünde bozgunculuk yapıp duruyorlardı."
      ],
      [
       "شَأْنَ الْأَغْنِيَاءِ الْأَقْوِيَاءِ الَّذِينَ لَا يَرْجُونَ حِسَابًا وَلَا يَخْشَوْنَ عَذَابًا.",
       "Tıpkı hesap vermeyi ummayan, azaptan korkmayan güçlü zenginler gibi."
      ],
      [
       "فَبَعَثَ اللهُ إِلَيْهِمْ رَسُولَهُ شُعَيْبًا يَدْعُوهُمْ وَيُنْذِرُهُمْ، وَيَقُولُ لَهُمْ:",
       "Allah da onlara elçisi Şuayb'ı gönderdi; onları (Allah'a) çağırıyor, uyarıyor ve onlara diyordu:"
      ],
      [
       "«يَا قَوْمِ اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ وَلَا تَنْقُصُوا الْمِكْيَالَ وَالْمِيزَانَ إِنِّي أَرَاكُمْ بِخَيْرٍ وَإِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ مُحِيطٍ».",
       "«Ey kavmim! Allah'a kulluk edin; sizin O'ndan başka hiçbir ilahınız yoktur. Ölçüyü ve tartıyı eksik tutmayın. Ben sizi bolluk içinde görüyorum; ama sizin için kuşatıcı bir günün azabından korkuyorum.»"
      ],
      [
       "«وَيَا قَوْمِ أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ».",
       "«Ey kavmim! Ölçüyü ve tartıyı adaletle tam yapın; insanların mallarını eksik vermeyin ve yeryüzünde bozguncular olarak dolaşmayın.»"
      ]
     ]
    }
   ]
  },
  {
   "id": 2,
   "emoji": "⚖️",
   "title_ar": "دَعْوَةُ شُعَيْبٍ",
   "title_tr": "Şuayb'ın daveti",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «دَعْوَةُ شُعَيْبٍ», «أَبٌ رَحِيمٌ وَمُعَلِّمٌ حَكِيمٌ», «جَوَابُ قَوْمِهِ». Şuayb tüccarlara hilesiz ticaretin daha hayırlı olduğunu anlatıyor. Sence kavmi ne cevap verdi?",
     "options": [
      [
       "سَخِرُوا مِنْهُ وَمِنْ صَلَاتِهِ",
       "Onunla ve namazıyla alay ettiler"
      ],
      [
       "شَكَرُوهُ وَتَابُوا",
       "Ona teşekkür edip tövbe ettiler"
      ],
      [
       "أَعْطَوْهُ مَالًا كَثِيرًا",
       "Ona çok mal verdiler"
      ]
     ]
    },
    "vocab": [
     [
      "الرِّبْحُ",
      "kâr",
      "💰"
     ],
     [
      "الْخِيَانَةُ",
      "hıyanet, aldatma",
      "🐍"
     ],
     [
      "تَبْخَسُوا",
      "eksik verirsiniz",
      "📉"
     ],
     [
      "بَقِيَّةٌ",
      "kalan, artan",
      "🪙"
     ],
     [
      "أَوْفُوا",
      "tam yapın!",
      "✅"
     ],
     [
      "الْحَلِيمُ",
      "yumuşak huylu",
      "🙂"
     ]
    ]
   },
   "stop": {
    "section": 6,
    "after": 0,
    "prompt_tr": "Kavmin akıllıları sanki bir sır keşfetmiş gibi böbürlenerek konuşmaya başladı. Sence ne dediler?",
    "options": [
     [
      "أَصَلَاتُكَ تَأْمُرُكَ أَنْ نَتْرُكَ مَا يَعْبُدُ آبَاؤُنَا؟",
      "Atalarımızın taptığını bırakmamızı sana namazın mı emrediyor?"
     ],
     [
      "نَحْنُ نُؤْمِنُ بِكَ",
      "Biz sana inanıyoruz"
     ],
     [
      "أَيْنَ الْمِيزَانُ؟",
      "Terazi nerede?"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالَ شُعَيْبٌ: الرِّبْحُ الْحَلَالُ خَيْرٌ مِنَ الْخِيَانَةِ.",
     "قَالَ: الْقَلِيلُ الَّذِي يَنْفَعُ خَيْرٌ مِنَ الْكَثِيرِ.",
     "قَالَ: بَقِيَّتُ اللهِ خَيْرٌ لَكُمْ.",
     "نَصَحَهُمْ كَالْأَبِ الرَّحِيمِ.",
     "قَالَ الْقَوْمُ: أَصَلَاتُكَ تَأْمُرُكَ؟"
    ],
    "questions": [
     {
      "q": "مَا الْعُقْدَةُ الَّتِي كَانَتْ فِي نُفُوسِهِمْ؟",
      "qt": "İçlerindeki düğüm neydi?",
      "o": [
       "حُبُّ الْمَالِ وَالزِّيَادَةِ",
       "الْخَوْفُ مِنَ الْمَوْتِ",
       "حُبُّ الْأَصْنَامِ فَقَطْ"
      ],
      "ot": [
       "Mal ve fazlalık sevgisi",
       "Ölüm korkusu",
       "Yalnızca put sevgisi"
      ],
      "a": 0,
      "ev": [
       "4.0"
      ]
     },
     {
      "q": "مَا مَصِيرُ الْمَالِ الَّذِي يُكْتَسَبُ بِالْخِيَانَةِ؟",
      "qt": "Hıyanetle kazanılan malın sonu nedir?",
      "o": [
       "التَّلَفُ وَالضَّيَاعُ",
       "الزِّيَادَةُ وَالْبَرَكَةُ",
       "الْحِفْظُ فِي الْبَيْتِ"
      ],
      "ot": [
       "Telef olmak ve kaybolmak",
       "Artmak ve bereketlenmek",
       "Evde korunmak"
      ],
      "a": 0,
      "ev": [
       "4.2"
      ]
     },
     {
      "q": "أَيُّهُمَا خَيْرٌ عِنْدَ شُعَيْبٍ؟",
      "qt": "Şuayb'a göre hangisi daha hayırlı?",
      "o": [
       "الْقَلِيلُ الَّذِي يَنْفَعُ",
       "الْكَثِيرُ الَّذِي لَا يَنْفَعُ",
       "لَا فَرْقَ بَيْنَهُمَا"
      ],
      "ot": [
       "Fayda veren az",
       "Fayda vermeyen çok",
       "İkisi arasında fark yok"
      ],
      "a": 0,
      "ev": [
       "4.4"
      ]
     },
     {
      "q": "كَيْفَ كَانَ شُعَيْبٌ يَنْصَحُ قَوْمَهُ؟",
      "qt": "Şuayb kavmine nasıl öğüt veriyordu?",
      "o": [
       "شَأْنَ الْأَبِ الرَّحِيمِ وَالْمُعَلِّمِ الْحَكِيمِ",
       "بِالْغَضَبِ وَالصِّيَاحِ",
       "بِالْكِتَابَةِ فَقَطْ"
      ],
      "ot": [
       "Merhametli bir baba ve hikmetli bir öğretmen gibi",
       "Öfkelenip bağırarak",
       "Yalnızca yazarak"
      ],
      "a": 0,
      "ev": [
       "5.0"
      ]
     },
     {
      "q": "أَيْنَ كَانُوا يَقْعُدُونَ لِيَصُدُّوا النَّاسَ؟",
      "qt": "İnsanları engellemek için nereye oturuyorlardı?",
      "o": [
       "بِكُلِّ صِرَاطٍ",
       "فِي الْمَسْجِدِ",
       "فِي السُّوقِ فَقَطْ"
      ],
      "ot": [
       "Her yolun başına",
       "Mescide",
       "Yalnızca çarşıya"
      ],
      "a": 0,
      "ev": [
       "5.2"
      ]
     }
    ],
    "focus": {
     "title": "Çoğul emir ve yasak: أَوْفُوا / لَا تَبْخَسُوا",
     "explain": "Birden fazla kişiye emir verilirken fiil <b>ـُوا</b> ile biter: <span class='ar-inline'>اعْبُدُوا</span> (kulluk edin), <span class='ar-inline'>أَوْفُوا</span> (tam yapın), <span class='ar-inline'>اذْكُرُوا</span> (hatırlayın). Yasaklamak için <b>لَا</b> + cezimli muzari kullanılır; çoğulda sondaki ن düşer: <span class='ar-inline'>تَنْقُصُونَ → لَا تَنْقُصُوا</span>, <span class='ar-inline'>تُفْسِدُونَ → لَا تُفْسِدُوا</span>.",
     "examples": [
      "«يَا قَوْمِ اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ»",
      "«فَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ»",
      "«وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا»"
     ],
     "items": [
      {
       "q": "«يَا قَوْمِ ____ اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ»",
       "o": [
        "اعْبُدُوا",
        "تَعْبُدُونَ",
        "عَبَدُوا"
       ],
       "a": 0
      },
      {
       "q": "«وَلَا ____ الْمِكْيَالَ وَالْمِيزَانَ»",
       "o": [
        "تَنْقُصُوا",
        "تَنْقُصُونَ",
        "نَقَصُوا"
       ],
       "a": 0
      },
      {
       "q": "«____ الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ»",
       "o": [
        "أَوْفُوا",
        "يُوفُونَ",
        "وَفَاءٌ"
       ],
       "a": 0
      },
      {
       "q": "«وَلَا تُفْسِدُوا» = …",
       "o": [
        "Bozgunculuk yapmayın",
        "Bozgunculuk yapmadılar",
        "Bozgunculuk yapacaklar"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالَ شُعَيْبٌ: إِنَّ الرِّبْحَ بَعْدَ وَفَاءِ الْكَيْلِ خَيْرٌ مِنْ أَخْذِ أَمْوَالِ النَّاسِ بِ{الْخِيَانَةِ}. وَالْقَلِيلُ الَّذِي {يَنْفَعُ} خَيْرٌ مِنَ الْكَثِيرِ. وَكَانَ يَنْصَحُهُمْ شَأْنَ الْأَبِ {الرَّحِيمِ}. فَقَالُوا: أَ{صَلَاتُكَ} تَأْمُرُكَ أَنْ نَتْرُكَ مَا يَعْبُدُ {آبَاؤُنَا}؟"
    },
    "think": {
     "q": "لِمَاذَا قَالَ الْقَوْمُ: «أَصَلَاتُكَ تَأْمُرُكَ … أَنْ نَفْعَلَ فِي أَمْوَالِنَا مَا نَشَاءُ»؟",
     "qt": "Kavim neden «Mallarımızda dilediğimizi yapmamamızı sana namazın mı emrediyor?» dedi?",
     "model": "Onlara göre din yalnızca ibadetle ilgiliydi; ticaret, para ve mal ise dinin karışamayacağı kişisel bir alandı. Şuayb'ın ölçü ve tartıya karışmasını bu yüzden garip buldular ve alay ettiler. Kıssa, dinin yalnızca namazdan ibaret olmadığını; dürüstlüğün, alışverişin ve başkalarının hakkının da dinin içinde olduğunu gösteriyor."
    },
    "personal": {
     "q": "قَالَ شُعَيْبٌ: «وَالْقَلِيلُ الَّذِي يَنْفَعُ خَيْرٌ مِنَ الْكَثِيرِ الَّذِي لَا يَنْفَعُ». هَلْ عِنْدَكَ مِثَالٌ مِنْ حَيَاتِكَ؟",
     "qt": "Şuayb, «Fayda veren az, fayda vermeyen çoktan hayırlıdır» dedi. Hayatından bir örnek var mı? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "كِتَابٌ وَاحِدٌ مُفِيدٌ خَيْرٌ مِنْ …",
      "صَدِيقٌ وَاحِدٌ … خَيْرٌ مِنْ …",
      "قَلِيلٌ مِنَ … يَنْفَعُنِي"
     ]
    },
    "retell": [
     "حُبُّ الْمَالِ",
     "الْخِيَانَةُ",
     "الْقَلِيلُ الَّذِي يَنْفَعُ",
     "بَقِيَّتُ اللهِ",
     "أَبٌ رَحِيمٌ",
     "أَصَلَاتُكَ تَأْمُرُكَ"
    ],
    "quran": [
     {
      "ar": "قُلْ لَا يَسْتَوِي الْخَبِيثُ وَالطَّيِّبُ وَلَوْ أَعْجَبَكَ كَثْرَةُ الْخَبِيثِ ۚ فَاتَّقُوا اللَّهَ يَا أُولِي الْأَلْبَابِ لَعَلَّكُمْ تُفْلِحُونَ",
      "ref": "Mâide 5:100",
      "tr": "De ki: Kötünün çokluğu hoşuna gitse bile kötü ile temiz bir olmaz. Ey akıl sahipleri! Allah'tan sakının ki kurtuluşa eresiniz.",
      "inText": "«قُلْ لَا يَسْتَوِي الْخَبِيثُ وَالطَّيِّبُ …»"
     },
     {
      "ar": "بَقِيَّتُ اللَّهِ خَيْرٌ لَكُمْ إِنْ كُنْتُمْ مُؤْمِنِينَ ۚ وَمَا أَنَا عَلَيْكُمْ بِحَفِيظٍ",
      "ref": "Hûd 11:86",
      "tr": "Eğer inanıyorsanız Allah'ın (helalden) bıraktığı kâr sizin için daha hayırlıdır. Ben sizin üzerinize bekçi değilim.",
      "inText": "«بَقِيَّتُ اللهِ خَيْرٌ لَكُمْ …»"
     },
     {
      "ar": "وَلَا تَقْعُدُوا بِكُلِّ صِرَاطٍ تُوعِدُونَ وَتَصُدُّونَ عَنْ سَبِيلِ اللَّهِ مَنْ آمَنَ بِهِ وَتَبْغُونَهَا عِوَجًا ۚ وَاذْكُرُوا إِذْ كُنْتُمْ قَلِيلًا فَكَثَّرَكُمْ ۖ وَانْظُرُوا كَيْفَ كَانَ عَاقِبَةُ الْمُفْسِدِينَ",
      "ref": "A'râf 7:86",
      "tr": "Her yolun başına oturup tehditler savurarak Allah'a inananları O'nun yolundan alıkoymayın ve o yolu eğri göstermeye çalışmayın. Az iken Allah'ın sizi çoğalttığını hatırlayın ve bozguncuların sonunun nasıl olduğuna bakın.",
      "inText": "«وَلَا تَقْعُدُوا بِكُلِّ صِرَاطٍ …»"
     },
     {
      "ar": "قَالُوا يَا شُعَيْبُ أَصَلَاتُكَ تَأْمُرُكَ أَنْ نَتْرُكَ مَا يَعْبُدُ آبَاؤُنَا أَوْ أَنْ نَفْعَلَ فِي أَمْوَالِنَا مَا نَشَاءُ ۖ إِنَّكَ لَأَنْتَ الْحَلِيمُ الرَّشِيدُ",
      "ref": "Hûd 11:87",
      "tr": "Dediler ki: Ey Şuayb! Atalarımızın taptıklarını bırakmamızı ya da mallarımız hakkında dilediğimizi yapmaktan vazgeçmemizi sana namazın mı emrediyor? Sen de amma yumuşak huylu, aklı başında birisin!",
      "inText": "«أَصَلَاتُكَ تَأْمُرُكَ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 4,
     "title_ar": "دَعْوَةُ شُعَيْبٍ",
     "title_tr": "Şuayb'ın daveti",
     "s": [
      [
       "وَيَبْسُطُ لَهُمْ فِي الْكَلَامِ وَيَحُلُّ عُقْدَةً فِي نُفُوسِهِمْ، وَهِيَ عُقْدَةُ حُبِّ الْمَالِ وَالزِّيَادَةِ، فَيَقُولُ:",
       "Onlara uzun uzun açıklıyor ve içlerindeki bir düğümü, mal ve fazlalık sevgisi düğümünü çözüyor ve diyordu:"
      ],
      [
       "إِنَّ مَا يَفْضُلُ لَكُمْ مِنَ الرِّبْحِ بَعْدَ وَفَاءِ الْكَيْلِ وَالْمِيزَانِ خَيْرٌ لَكُمْ مِنْ أَخْذِ أَمْوَالِ النَّاسِ بِالظُّلْمِ وَالْخِيَانَةِ.",
       "Ölçüyü ve tartıyı tam yaptıktan sonra size kalan kâr, insanların mallarını zulüm ve hıyanetle almaktan sizin için daha hayırlıdır."
      ],
      [
       "وَإِذَا نَظَرْتُمْ فِي حَيَاتِكُمْ وَفِي حَيَاةِ هٰؤُلَاءِ الَّذِينَ أَثْرَوْا وَجَمَعُوا الْأَمْوَالَ، وَجَدْتُمْ أَنَّ مَا اكْتَسَبُوهُ عَنْ طَرِيقِ التَّطْفِيفِ وَالْبَخْسِ وَالْخِيَانَةِ، كَانَ مَصِيرُهُ إِلَى التَّلَفِ وَالضَّيَاعِ أَوِ الْفَسَادِ وَالْبَلَاءِ.",
       "Kendi hayatınıza ve zengin olup mal toplayanların hayatına bakarsanız, eksik ölçmek, eksik vermek ve hıyanet yoluyla kazandıklarının sonunun telef olmak, kaybolmak ya da bozulmak ve belâ olduğunu görürsünüz."
      ],
      [
       "فَسُرِقَ أَوْ نُهِبَ أَوْ أُنْفِقَ فِي غَيْرِ مَا يُرْضِي اللهَ أَوْ سُلِّطَ عَلَيْهِ مَنْ أَتْلَفَهُ وَعَبِثَ بِهِ.",
       "Ya çalındı, ya yağmalandı, ya Allah'ın razı olmadığı yerlere harcandı, ya da başına onu telef edip har vurup harman savuran biri musallat oldu."
      ],
      [
       "وَالْقَلِيلُ الَّذِي يَنْفَعُ خَيْرٌ مِنَ الْكَثِيرِ الَّذِي لَا يَنْفَعُ: «قُلْ لَا يَسْتَوِي الْخَبِيثُ وَالطَّيِّبُ وَلَوْ أَعْجَبَكَ كَثْرَةُ الْخَبِيثِ».",
       "Fayda veren az, fayda vermeyen çoktan hayırlıdır: «De ki: Kötünün çokluğu hoşuna gitse bile kötü ile temiz bir olmaz.»"
      ],
      [
       "وَنَصِيحَتِي لَكُمْ خَالِصَةٌ مُخْلِصَةٌ، وَاللهُ هُوَ الرَّقِيبُ عَلَيْكُمْ وَحْدَهُ.",
       "Size öğüdüm halis ve samimidir; sizi gözetleyen de yalnızca Allah'tır."
      ],
      [
       "يَقُولُ فِي رِفْقٍ وَحِكْمَةٍ وَعَنْ عِلْمٍ وَبَصِيرَةٍ:",
       "Yumuşaklıkla ve hikmetle, bilgi ve basiretle şöyle diyordu:"
      ],
      [
       "«بَقِيَّتُ اللهِ خَيْرٌ لَكُمْ إِنْ كُنْتُمْ مُؤْمِنِينَ وَمَا أَنَا عَلَيْكُمْ بِحَفِيظٍ».",
       "«Eğer inanıyorsanız, Allah'ın (helalden) bıraktığı kâr sizin için daha hayırlıdır. Ben sizin üzerinize bekçi değilim.»"
      ]
     ]
    },
    {
     "n": 5,
     "title_ar": "أَبٌ رَحِيمٌ وَمُعَلِّمٌ حَكِيمٌ",
     "title_tr": "Merhametli bir baba, hikmetli bir öğretmen",
     "s": [
      [
       "وَيَتَنَوَّعُ لَهُمْ فِي الْخِطَابِ، وَيَتَفَنَّنُ فِي النَّصِيحَةِ، شَأْنَ الْأَبِ الرَّحِيمِ وَالْمُعَلِّمِ الْحَكِيمِ، فَيَقُولُ:",
       "Merhametli bir baba ve hikmetli bir öğretmen gibi onlara türlü türlü hitap ediyor, öğüdünü çeşit çeşit veriyor ve diyordu:"
      ],
      [
       "«يَا قَوْمِ اعْبُدُوا اللهَ مَا لَكُمْ مِنْ إِلٰهٍ غَيْرُهُ قَدْ جَاءَتْكُمْ بَيِّنَةٌ مِنْ رَبِّكُمْ فَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا ذٰلِكُمْ خَيْرٌ لَكُمْ إِنْ كُنْتُمْ مُؤْمِنِينَ».",
       "«Ey kavmim! Allah'a kulluk edin; sizin O'ndan başka ilahınız yoktur. Size Rabbinizden apaçık bir delil geldi. Ölçüyü ve tartıyı tam yapın, insanların mallarını eksik vermeyin, düzeltildikten sonra yeryüzünde bozgunculuk yapmayın. İnanıyorsanız bu sizin için daha hayırlıdır.»"
      ],
      [
       "«وَلَا تَقْعُدُوا بِكُلِّ صِرَاطٍ تُوعِدُونَ وَتَصُدُّونَ عَنْ سَبِيلِ اللهِ مَنْ آمَنَ بِهِ وَتَبْغُونَهَا عِوَجًا وَاذْكُرُوا إِذْ كُنْتُمْ قَلِيلًا فَكَثَّرَكُمْ وَانْظُرُوا كَيْفَ كَانَ عَاقِبَةُ الْمُفْسِدِينَ».",
       "«Her yolun başına oturup tehditler savurarak Allah'a inananları O'nun yolundan alıkoymayın ve o yolu eğri göstermeye çalışmayın. Az iken Allah'ın sizi çoğalttığını hatırlayın ve bozguncuların sonunun nasıl olduğuna bakın.»"
      ]
     ]
    },
    {
     "n": 6,
     "title_ar": "جَوَابُ قَوْمِهِ",
     "title_tr": "Kavminin cevabı",
     "s": [
      [
       "وَقَدْ دَقَّقَ أَذْكِيَاؤُهُمْ فِي تَفْسِيرِ هٰذِهِ الدَّعْوَةِ وَتَعْلِيلِهَا، وَقَالُوا فِي تِيهٍ وَزَهْوٍ، كَأَنَّهُمُ اكْتَشَفُوا سِرًّا، أَوْ فَكُّوا لُغْزًا:",
       "Akıllıları bu daveti yorumlamaya ve sebebini bulmaya uğraştılar; sanki bir sır keşfetmiş ya da bir bilmeceyi çözmüşler gibi kibir ve böbürlenmeyle dediler:"
      ],
      [
       "«قَالُوا يَا شُعَيْبُ أَصَلَاتُكَ تَأْمُرُكَ أَنْ نَتْرُكَ مَا يَعْبُدُ آبَاؤُنَا أَوْ أَنْ نَفْعَلَ فِي أَمْوَالِنَا مَا نَشَاءُ إِنَّكَ لَأَنْتَ الْحَلِيمُ الرَّشِيدُ».",
       "«Dediler ki: Ey Şuayb! Atalarımızın taptıklarını bırakmamızı ya da mallarımız hakkında dilediğimizi yapmaktan vazgeçmemizi sana namazın mı emrediyor? Sen de amma yumuşak huylu, aklı başında birisin (ha)!»"
      ]
     ]
    }
   ]
  },
  {
   "id": 3,
   "emoji": "🗣️",
   "title_ar": "شُعَيْبٌ يَشْرَحُ دَعْوَتَهُ",
   "title_tr": "Şuayb davetini açıklıyor",
   "pre": {
    "predict": {
     "prompt_tr": "Kavmi Şuayb'la alay etti. Başlıklar: «شُعَيْبٌ يَشْرَحُ دَعْوَتَهُ», «مَا نَفْقَهُ كَثِيرًا مِمَّا تَقُولُ». Sence Şuayb onlara nasıl karşılık verdi?",
     "options": [
      [
       "تَلَطَّفَ لَهُمْ وَلَمْ يَغْضَبْ",
       "Onlara nazik davrandı, öfkelenmedi"
      ],
      [
       "سَبَّهُمْ وَتَرَكَهُمْ",
       "Onlara sövüp onları bıraktı"
      ],
      [
       "سَكَتَ وَلَمْ يَتَكَلَّمْ أَبَدًا",
       "Susup hiç konuşmadı"
      ]
     ]
    },
    "vocab": [
     [
      "تَلَطَّفَ",
      "nazik davrandı",
      "🤝"
     ],
     [
      "الْحَسَدُ",
      "kıskançlık",
      "😒"
     ],
     [
      "رَخِيُّ الْبَالِ",
      "kafası rahat, huzurlu",
      "😌"
     ],
     [
      "الْبِرُّ",
      "iyilik",
      "💚"
     ],
     [
      "أَجْنَبِيَّةٌ",
      "yabancı",
      "🌐"
     ],
     [
      "نَفْقَهُ",
      "anlarız, kavrarız",
      "🤔"
     ]
    ]
   },
   "stop": {
    "section": 8,
    "after": 1,
    "prompt_tr": "Kavim, Şuayb sanki yabancı bir dilde konuşuyormuş gibi davrandı; oysa o en açık konuşanlarındandı. Sence insanlar neden böyle yapar?",
    "options": [
     [
      "لِأَنَّ النَّصِيحَةَ كَبُرَتْ عَلَيْهِمْ",
      "Çünkü öğüt onlara ağır gelir"
     ],
     [
      "لِأَنَّهُمْ لَا يَسْمَعُونَ جَيِّدًا",
      "Çünkü iyi duymazlar"
     ],
     [
      "لِأَنَّ اللُّغَةَ صَعْبَةٌ حَقًّا",
      "Çünkü dil gerçekten zordur"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "تَلَطَّفَ شُعَيْبٌ لِقَوْمِهِ وَلَمْ يَغْضَبْ.",
     "قَالَ: أَكْرَمَنِي اللهُ بِالنُّبُوَّةِ.",
     "قَالَ: لَا أَنْهَاكُمْ عَنْ شَيْءٍ وَآتِيهِ.",
     "قَالَ: إِنْ أُرِيدُ إِلَّا الْإِصْلَاحَ.",
     "تَجَاهَلَ الْقَوْمُ كَلَامَهُ."
    ],
    "questions": [
     {
      "q": "مَاذَا حَمَلَ شُعَيْبًا عَلَى الدَّعْوَةِ بَعْدَ صَمْتٍ طَوِيلٍ؟",
      "qt": "Uzun bir sessizlikten sonra Şuayb'ı davete ne sevk etti?",
      "o": [
       "النُّبُوَّةُ وَالْوَحْيُ",
       "الْحَسَدُ",
       "حُبُّ الْمَالِ"
      ],
      "ot": [
       "Peygamberlik ve vahiy",
       "Kıskançlık",
       "Mal sevgisi"
      ],
      "a": 0,
      "ev": [
       "7.1"
      ]
     },
     {
      "q": "لِمَاذَا لَمْ يَكُنْ شُعَيْبٌ حَاسِدًا؟",
      "qt": "Şuayb neden kıskanç değildi?",
      "o": [
       "لِأَنَّ اللهَ أَغْنَاهُ وَرَزَقَهُ حَلَالًا طَيِّبًا",
       "لِأَنَّهُ لَا يُحِبُّ التِّجَارَةَ",
       "لِأَنَّهُ كَانَ مَلِكًا"
      ],
      "ot": [
       "Çünkü Allah onu zengin etmiş, helal ve temiz rızık vermişti",
       "Çünkü ticareti sevmiyordu",
       "Çünkü kraldı"
      ],
      "a": 0,
      "ev": [
       "7.2"
      ]
     },
     {
      "q": "مَا الَّذِي لَا يَفْعَلُهُ شُعَيْبٌ؟",
      "qt": "Şuayb neyi yapmaz?",
      "o": [
       "يَنْهَى عَنْ أَمْرٍ وَيَرْتَكِبُهُ",
       "يَنْصَحُ قَوْمَهُ",
       "يَشْكُرُ اللهَ"
      ],
      "ot": [
       "Bir şeyi yasaklayıp kendisi yapmak",
       "Kavmine öğüt vermek",
       "Allah'a şükretmek"
      ],
      "a": 0,
      "ev": [
       "7.4"
      ]
     },
     {
      "q": "مَاذَا يُرِيدُ شُعَيْبٌ؟",
      "qt": "Şuayb ne istiyor?",
      "o": [
       "الْإِصْلَاحَ مَا اسْتَطَاعَ",
       "الْمُلْكَ وَالرِّيَاسَةَ",
       "أَمْوَالَ الْقَوْمِ"
      ],
      "ot": [
       "Gücü yettiğince düzeltmeyi",
       "Mülk ve başkanlığı",
       "Kavmin mallarını"
      ],
      "a": 0,
      "ev": [
       "7.8"
      ]
     },
     {
      "q": "كَيْفَ كَانَ كَلَامُ شُعَيْبٍ فِي الْحَقِيقَةِ؟",
      "qt": "Şuayb'ın konuşması aslında nasıldı?",
      "o": [
       "مِنْ أَبْلَغِ الْكَلَامِ وَأَنْصَعِهِ بَيَانًا",
       "غَيْرَ مَفْهُومٍ",
       "بِلُغَةٍ أَجْنَبِيَّةٍ"
      ],
      "ot": [
       "Sözlerin en etkilisi ve en berrağı",
       "Anlaşılmaz",
       "Yabancı bir dilde"
      ],
      "a": 0,
      "ev": [
       "8.1"
      ]
     }
    ],
    "focus": {
     "title": "مَعَ أَنَّ: «-diği hâlde, oysa»",
     "explain": "<b>مَعَ أَنَّ</b> + isim cümlesi, beklentiye ters düşen bir durumu anlatır: «… olduğu hâlde, oysa». <span class='ar-inline'>كَأَنَّهُ يَتَكَلَّمُ فِي لُغَةٍ أَجْنَبِيَّةٍ مَعَ أَنَّهُ ابْنُ الْبَلَدِ</span> (sanki yabancı dilde konuşuyordu; oysa o memleketin çocuğuydu). <b>أَنَّ</b>'den sonra isim ya da zamir mansub gelir: <span class='ar-inline'>أَنَّهُ</span>, <span class='ar-inline'>أَنَّ اللهَ</span>.",
     "examples": [
      "كَأَنَّهُ كَانَ يَتَكَلَّمُ مَعَهُمْ فِي لُغَةٍ أَجْنَبِيَّةٍ مَعَ أَنَّهُ ابْنُ الْبَلَدِ",
      "وَكَأَنَّهُ كَانَ غَيْرَ مُبِينٍ … مَعَ أَنَّهُ مِنْ أَبْلَغِهِمْ كَلَامًا",
      "(benzer: رَغْمَ) فَقَدْ تَوَرَّطَتْ رَغْمَ دَهَائِهَا وَذَكَائِهَا"
     ],
     "items": [
      {
       "q": "تَجَاهَلُوا كَلَامَهُ ____ أَنَّهُ ابْنُ الْبَلَدِ.",
       "o": [
        "مَعَ",
        "لِأَنَّ",
        "حَتَّى"
       ],
       "a": 0
      },
      {
       "q": "كَأَنَّهُ غَيْرُ مُبِينٍ مَعَ ____ مِنْ أَبْلَغِهِمْ كَلَامًا.",
       "o": [
        "أَنَّهُ",
        "أَنْ",
        "إِنْ"
       ],
       "a": 0
      },
      {
       "q": "لَمْ يَنْجَحْ مَعَ أَنَّهُ ____ كَثِيرًا.",
       "o": [
        "دَرَسَ",
        "لَمْ يَدْرُسْ",
        "لَا يَدْرُسُ أَبَدًا"
       ],
       "a": 0
      },
      {
       "q": "«مَعَ أَنَّهُ أَخُو الْقَوْمِ» = …",
       "o": [
        "Oysa o kavmin kardeşiydi",
        "Çünkü o kavmin kardeşiydi",
        "Kavmin kardeşiyle birlikte"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "تَلَطَّفَ شُعَيْبٌ لِقَوْمِهِ فَلَمْ {يَغْضَبْ}. وَقَالَ: إِنَّ اللهَ {أَغْنَانِي} وَرَزَقَنِي حَلَالًا طَيِّبًا. وَإِنِّي لَا أَنْهَاكُمْ عَنْ أَمْرٍ وَ{أَرْتَكِبُهُ}. وَتَجَاهَلَ الْقَوْمُ كَلَامَهُ مَعَ أَنَّهُ ابْنُ {الْبَلَدِ}."
    },
    "think": {
     "q": "لِمَاذَا قَالَ شُعَيْبٌ: «وَمَا أُرِيدُ أَنْ أُخَالِفَكُمْ إِلَى مَا أَنْهَاكُمْ عَنْهُ»؟",
     "qt": "Şuayb neden «Size yasakladığım şeyi arkanızdan kendim yapmak istemiyorum» dedi?",
     "model": "Bir öğüdün etkili olması için öğüt verenin söylediğini kendisinin de yapması gerekir. İnsanlar, başkalarına iyiliği emredip kendisi yapmayanlara güvenmez. Şuayb, hem kendi ticaretinde dürüst olduğunu hem de kıskançlıktan ya da çıkar için konuşmadığını göstererek kavminin güvenini kazanmak istiyor."
    },
    "retell": [
     "تَلَطَّفَ",
     "النُّبُوَّةُ وَالْوَحْيُ",
     "حَلَالًا طَيِّبًا",
     "الْإِصْلَاحُ",
     "لُغَةٌ أَجْنَبِيَّةٌ",
     "النَّصِيحَةُ"
    ],
    "quran": [
     {
      "ar": "قَالَ يَا قَوْمِ أَرَأَيْتُمْ إِنْ كُنْتُ عَلَىٰ بَيِّنَةٍ مِنْ رَبِّي وَرَزَقَنِي مِنْهُ رِزْقًا حَسَنًا ۚ وَمَا أُرِيدُ أَنْ أُخَالِفَكُمْ إِلَىٰ مَا أَنْهَاكُمْ عَنْهُ ۚ إِنْ أُرِيدُ إِلَّا الْإِصْلَاحَ مَا اسْتَطَعْتُ ۚ وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ",
      "ref": "Hûd 11:88",
      "tr": "Dedi ki: Ey kavmim! Ne dersiniz, ben Rabbimden apaçık bir delil üzerindeysem ve O bana katından güzel bir rızık vermişse? Size yasakladığım şeyi arkanızdan kendim yapmak istemiyorum. Gücüm yettiğince yalnızca düzeltmek istiyorum. Başarım ancak Allah'ın yardımıyladır. Yalnızca O'na tevekkül ettim ve O'na yöneliyorum.",
      "inText": "«قَالَ يَا قَوْمِ أَرَأَيْتُمْ إِنْ كُنْتُ عَلَى بَيِّنَةٍ …»"
     },
     {
      "ar": "أَتَأْمُرُونَ النَّاسَ بِالْبِرِّ وَتَنْسَوْنَ أَنْفُسَكُمْ وَأَنْتُمْ تَتْلُونَ الْكِتَابَ ۚ أَفَلَا تَعْقِلُونَ",
      "ref": "Bakara 2:44",
      "tr": "Siz Kitap'ı okuduğunuz hâlde insanlara iyiliği emredip kendinizi unutuyor musunuz? Hiç düşünmüyor musunuz?",
      "inText": "«الَّذِينَ يَأْمُرُونَ النَّاسَ بِالْبِرِّ وَيَنْسَوْنَ أَنْفُسَهُمْ»"
     },
     {
      "ar": "يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ",
      "ref": "Saff 61:2",
      "tr": "Ey iman edenler! Yapmayacağınız şeyi neden söylüyorsunuz?",
      "inText": "«الَّذِينَ يَقُولُونَ مَا لَا يَفْعَلُونَ»"
     }
    ]
   },
   "sections": [
    {
     "n": 7,
     "title_ar": "شُعَيْبٌ يَشْرَحُ دَعْوَتَهُ",
     "title_tr": "Şuayb davetini açıklıyor",
     "s": [
      [
       "وَتَلَطَّفَ لَهُمْ شُعَيْبٌ، فَلَمْ يَقْسُ وَلَمْ يَغْضَبْ.",
       "Şuayb onlara nazik davrandı; ne sertleşti ne de öfkelendi."
      ],
      [
       "وَأَفْهَمَهُمْ أَنَّهُ مَا حَمَلَهُ عَلَى هٰذِهِ الدَّعْوَةِ وَالنَّصِيحَةِ بَعْدَ صَمْتٍ طَوِيلٍ وَعَدَمِ تَعَرُّضٍ لِمَا كَانُوا عَلَيْهِ مِنْ أَخْلَاقٍ فَاسِدَةٍ وَتَصَرُّفَاتٍ جَائِرَةٍ، إِلَّا مَا أَكْرَمَهُ اللهُ بِهِ أَخِيرًا: بِالنُّبُوَّةِ وَالْوَحْيِ وَمَا شَرَحَ لَهُ صَدْرَهُ وَآتَاهُ نُورًا مِنْ عِنْدِهِ.",
       "Onlara anlattı ki, uzun bir sessizlikten ve onların bozuk ahlakına, haksız davranışlarına hiç karışmadıktan sonra kendisini bu davete ve öğüde sevk eden şey, Allah'ın sonunda ona verdiği ikramdır: peygamberlik, vahiy, Allah'ın onun göğsünü açması ve ona katından bir nur vermesi."
      ],
      [
       "وَأَنَّهُ لَا يَحْمِلُهُ عَلَى ذٰلِكَ الْحَسَدُ، فَقَدْ أَغْنَاهُ اللهُ وَرَزَقَهُ حَلَالًا طَيِّبًا.",
       "Onu buna sevk edenin kıskançlık olmadığını da anlattı; çünkü Allah onu zengin etmiş, ona helal ve temiz rızık vermişti."
      ],
      [
       "وَأَنَّهُ بِذٰلِكَ سَعِيدٌ، هَنِيءُ النَّفْسِ، رَخِيُّ الْبَالِ، شَاكِرٌ لِلهِ تَعَالَى بِالْقَلْبِ وَاللِّسَانِ.",
       "Ve bununla mutlu, gönlü huzurlu, kafası rahat olduğunu, Allah Teâlâ'ya kalbiyle ve diliyle şükrettiğini anlattı."
      ],
      [
       "ثُمَّ أَنَّهُ لَا يَنْهَاهُمْ عَنْ أَمْرٍ وَيَرْتَكِبُهُ، وَيَمْنَعُهُمْ مِنْ شَيْءٍ وَيَأْتِيهِ.",
       "Sonra, onları bir şeyden men edip de kendisinin onu yapmadığını, onlara bir şeyi yasaklayıp kendisinin onu işlemediğini anlattı."
      ],
      [
       "وَأَنَّهُ لَيْسَ مِنَ الَّذِينَ يَأْمُرُونَ النَّاسَ بِالْبِرِّ وَيَنْسَوْنَ أَنْفُسَهُمْ، وَلَا مِنَ الَّذِينَ يَقُولُونَ مَا لَا يَفْعَلُونَ.",
       "İnsanlara iyiliği emredip kendini unutanlardan, yapmadığını söyleyenlerden olmadığını anlattı."
      ],
      [
       "إِنَّمَا يُرِيدُ إِصْلَاحَهُمْ وَإِسْعَادَهُمْ وَإِنْقَاذَهُمْ مِنَ الْعَذَابِ الَّذِي يُحَلِّقُ عَلَى رُءُوسِهِمْ.",
       "O yalnızca onları düzeltmek, mutlu etmek ve başlarının üzerinde dolaşan azaptan kurtarmak istiyordu."
      ],
      [
       "وَإِنَّ الْفَضْلَ كُلَّهُ يَرْجِعُ إِلَى اللهِ تَعَالَى وَعَلَيْهِ اعْتِمَادُهُ.",
       "Bütün iyilik Allah Teâlâ'ya döner; onun dayanağı da yalnızca O'dur."
      ],
      [
       "«قَالَ يَا قَوْمِ أَرَأَيْتُمْ إِنْ كُنْتُ عَلَى بَيِّنَةٍ مِنْ رَبِّي وَرَزَقَنِي مِنْهُ رِزْقًا حَسَنًا وَمَا أُرِيدُ أَنْ أُخَالِفَكُمْ إِلَى مَا أَنْهَاكُمْ عَنْهُ إِنْ أُرِيدُ إِلَّا الْإِصْلَاحَ مَا اسْتَطَعْتُ وَمَا تَوْفِيقِي إِلَّا بِاللهِ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ».",
       "«Dedi ki: Ey kavmim! Ne dersiniz, ben Rabbimden apaçık bir delil üzerindeysem ve O bana katından güzel bir rızık vermişse? Ben, size yasakladığım şeyi arkanızdan kendim yapmak istemiyorum. Gücüm yettiğince yalnızca düzeltmek istiyorum. Başarım ancak Allah'ın yardımıyladır. Yalnızca O'na tevekkül ettim ve yalnızca O'na yöneliyorum.»"
      ]
     ]
    },
    {
     "n": 8,
     "title_ar": "مَا نَفْقَهُ كَثِيرًا مِمَّا تَقُولُ",
     "title_tr": "Söylediklerinin çoğunu anlamıyoruz",
     "s": [
      [
       "وَتَجَاهَلَ الْقَوْمُ مَا أَرَادَهُ شُعَيْبٌ كَأَنَّهُ كَانَ يَتَكَلَّمُ مَعَهُمْ فِي لُغَةٍ أَجْنَبِيَّةٍ مَعَ أَنَّهُ ابْنُ الْبَلَدِ وَأَخُو الْقَوْمِ.",
       "Kavim, Şuayb'ın ne demek istediğini anlamazlıktan geldi; sanki onlarla yabancı bir dilde konuşuyordu. Oysa o, o memleketin çocuğu ve kavmin kardeşiydi."
      ],
      [
       "وَكَأَنَّهُ كَانَ غَيْرَ مُبِينٍ فِي كَلَامِهِ غَيْرَ مُفْصِحٍ مَعَ أَنَّهُ مِنْ أَبْلَغِهِمْ كَلَامًا وَأَنْصَعِهِمْ بَيَانًا.",
       "Sanki sözünü açık ve düzgün söyleyemiyordu; oysa o, içlerinde sözü en etkili, anlatımı en berrak olanlardandı."
      ],
      [
       "وَهٰكَذَا يَقُولُ النَّاسُ إِذَا كَبُرَتْ عَلَيْهِمُ النَّصِيحَةُ وَشَقَّ عَلَيْهِمُ الْعَمَلُ.",
       "İnsanlar, öğüt kendilerine ağır gelince ve uygulamak zor gelince böyle derler."
      ]
     ]
    }
   ]
  },
  {
   "id": 4,
   "emoji": "⚡",
   "title_ar": "الرَّجْفَةُ",
   "title_tr": "Sarsıntı",
   "pre": {
    "predict": {
     "prompt_tr": "Başlıklar: «السَّهْمُ الْأَخِيرُ», «حُجَّةٌ قَاطِعَةٌ», «عَاقِبَةُ أُمَّةٍ كَذَّبَتْ نَبِيَّهَا». Önceki kıssaları hatırla: Nûh, Hûd ve Sâlih'in kavimleri peygamberlerini yalanladı. Sence Şuayb'ın kavminin sonu ne oldu?",
     "options": [
      [
       "أَخَذَتْهُمُ الرَّجْفَةُ",
       "Onları bir sarsıntı yakaladı"
      ],
      [
       "آمَنُوا كُلُّهُمْ",
       "Hepsi iman etti"
      ],
      [
       "هَاجَرُوا إِلَى مِصْرَ",
       "Mısır'a göç ettiler"
      ]
     ]
    },
    "vocab": [
     [
      "رَهْطٌ / عَشِيرَةٌ",
      "akraba topluluğu, aşiret",
      "👨‍👩‍👦"
     ],
     [
      "رَجَمَ",
      "taşladı",
      "🪨"
     ],
     [
      "مِلَّةٌ",
      "din",
      "📿"
     ],
     [
      "الرَّجْفَةُ",
      "sarsıntı, deprem",
      "🌋"
     ],
     [
      "جَاثِمِينَ",
      "diz üstü çökmüş, cansız",
      "⬇️"
     ],
     [
      "آسَى",
      "üzülürüm",
      "😔"
     ]
    ]
   },
   "stop": {
    "section": 13,
    "after": 0,
    "prompt_tr": "Kavim alay etti: «Doğru söylüyorsan üzerimize gökten parçalar düşür!» «Son hep aynıydı.» Sence ne oldu?",
    "options": [
     [
      "أَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا جَاثِمِينَ",
      "Onları sarsıntı yakaladı, diz üstü çökmüş olarak sabahladılar"
     ],
     [
      "لَمْ يَحْدُثْ شَيْءٌ",
      "Hiçbir şey olmadı"
     ],
     [
      "خَرَجَ شُعَيْبٌ وَحْدَهُ وَبَقُوا سَالِمِينَ",
      "Şuayb tek başına çıktı, onlar sağ kaldı"
     ]
    ]
   },
   "checks": {},
   "post": {
    "order": [
     "قَالُوا: لَوْلَا رَهْطُكَ لَرَجَمْنَاكَ.",
     "قَالَ: أَرَهْطِي أَعَزُّ عَلَيْكُمْ مِنَ اللهِ؟",
     "هَدَّدُوهُ بِالْإِخْرَاجِ مِنَ الْقَرْيَةِ.",
     "دَعَا شُعَيْبٌ: رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا.",
     "أَخَذَتْهُمُ الرَّجْفَةُ.",
     "تَوَلَّى شُعَيْبٌ عَنْهُمْ."
    ],
    "questions": [
     {
      "q": "لِمَاذَا لَمْ يَرْجُمُوا شُعَيْبًا؟",
      "qt": "Şuayb'ı neden taşlamadılar?",
      "o": [
       "بِسَبَبِ رَهْطِهِ وَعَشِيرَتِهِ",
       "لِأَنَّهُمْ أَحَبُّوهُ",
       "لِأَنَّهُ هَرَبَ"
      ],
      "ot": [
       "Akrabası ve aşireti yüzünden",
       "Çünkü onu seviyorlardı",
       "Çünkü kaçtı"
      ],
      "a": 0,
      "ev": [
       "9.2"
      ]
     },
     {
      "q": "مِمَّ تَعَجَّبَ شُعَيْبٌ؟",
      "qt": "Şuayb neye şaştı?",
      "o": [
       "أَنْ يَكُونَ رَهْطُهُ أَعَزَّ عَلَيْهِمْ مِنَ اللهِ",
       "مِنْ كَثْرَةِ أَمْوَالِهِمْ",
       "مِنْ قُوَّةِ جُيُوشِهِمْ"
      ],
      "ot": [
       "Akrabasının onlara Allah'tan daha değerli gelmesine",
       "Mallarının çokluğuna",
       "Ordularının gücüne"
      ],
      "a": 0,
      "ev": [
       "9.3"
      ]
     },
     {
      "q": "مَا السَّهْمُ الْأَخِيرُ الَّذِي أَطْلَقُوهُ؟",
      "qt": "Attıkları son ok neydi?",
      "o": [
       "لَنُخْرِجَنَّكَ مِنْ قَرْيَتِنَا أَوْ لَتَعُودُنَّ فِي مِلَّتِنَا",
       "سَنَقْتُلُ أَوْلَادَكَ",
       "سَنَأْخُذُ أَمْوَالَكَ"
      ],
      "ot": [
       "Seni memleketimizden çıkaracağız ya da dinimize döneceksin",
       "Çocuklarını öldüreceğiz",
       "Mallarını alacağız"
      ],
      "a": 0,
      "ev": [
       "10.1"
      ]
     },
     {
      "q": "مَاذَا طَلَبُوا مِنْ شُعَيْبٍ أَخِيرًا؟",
      "qt": "Sonunda Şuayb'dan ne istediler?",
      "o": [
       "أَنْ يُسْقِطَ عَلَيْهِمْ كِسَفًا مِنَ السَّمَاءِ",
       "أَنْ يَدْعُوَ لَهُمْ بِالْمَطَرِ",
       "أَنْ يُعَلِّمَهُمُ التِّجَارَةَ"
      ],
      "ot": [
       "Üzerlerine gökten parçalar düşürmesini",
       "Onlar için yağmur duası etmesini",
       "Onlara ticaret öğretmesini"
      ],
      "a": 0,
      "ev": [
       "12.1"
      ]
     },
     {
      "q": "مَاذَا قَالَ شُعَيْبٌ لَمَّا تَوَلَّى عَنْهُمْ؟",
      "qt": "Şuayb onlardan yüz çevirirken ne dedi?",
      "o": [
       "لَقَدْ أَبْلَغْتُكُمْ رِسَالَاتِ رَبِّي وَنَصَحْتُ لَكُمْ",
       "أَنَا نَادِمٌ عَلَى دَعْوَتِكُمْ",
       "سَأَرْجِعُ إِلَيْكُمْ غَدًا"
      ],
      "ot": [
       "Size Rabbimin mesajlarını ulaştırdım ve size öğüt verdim",
       "Sizi davet ettiğime pişmanım",
       "Yarın size döneceğim"
      ],
      "a": 0,
      "ev": [
       "14.1"
      ]
     }
    ],
    "focus": {
     "title": "لَوْلَا … لَـ …: «… olmasaydı …-irdi»",
     "explain": "<b>لَوْلَا</b> + isim, bir şeyin var olması yüzünden başka bir şeyin gerçekleşmediğini anlatır: «… olmasaydı». Cevap fiili genellikle <b>لَـ</b> + mazi ile gelir: <span class='ar-inline'>لَوْلَا رَهْطُكَ لَرَجَمْنَاكَ</span> (akraban olmasaydı seni taşlardık). Karşılaştırın: <span class='ar-inline'>لَوْ</span> + fiil «… -seydi», <span class='ar-inline'>لَوْلَا</span> + isim «… olmasaydı».",
     "examples": [
      "«وَلَوْلَا رَهْطُكَ لَرَجَمْنَاكَ»",
      "وَأَنَّهُ لَوْلَا عَشِيرَتُهُ وَقَرَابَتُهُمْ لَهُ لَرَجَمُوهُ بِالْحِجَارَةِ",
      "(لَوْ ile) لَوْ كَانَ مِنَ السِّحْرِ لَضَرَبْنَا السِّحْرَ بِالسِّحْرِ"
     ],
     "items": [
      {
       "q": "«وَ____ رَهْطُكَ لَرَجَمْنَاكَ»",
       "o": [
        "لَوْلَا",
        "لَوْ",
        "لَمْ"
       ],
       "a": 0
      },
      {
       "q": "لَوْلَا عَشِيرَتُهُ ____ بِالْحِجَارَةِ.",
       "o": [
        "لَرَجَمُوهُ",
        "يَرْجُمُونَهُ",
        "رَجْمٌ"
       ],
       "a": 0
      },
      {
       "q": "لَوْلَا الْمَطَرُ لَ____ الزُّرُوعُ.",
       "o": [
        "مَاتَتِ",
        "تَمُوتُ",
        "مَوْتٌ"
       ],
       "a": 0
      },
      {
       "q": "«لَوْلَا اللهُ مَا اهْتَدَيْنَا» = …",
       "o": [
        "Allah olmasaydı doğru yolu bulamazdık",
        "Allah bizi doğru yola iletti",
        "Allah'a dua ettik"
       ],
       "a": 0
      }
     ]
    },
    "cloze": {
     "text": "قَالُوا: لَوْلَا {رَهْطُكَ} لَرَجَمْنَاكَ. فَقَالَ: أَرَهْطِي أَعَزُّ عَلَيْكُمْ مِنَ {اللهِ}؟ ثُمَّ قَالُوا: لَنُخْرِجَنَّكَ مِنْ {قَرْيَتِنَا}. فَأَخَذَتْهُمُ {الرَّجْفَةُ}، وَتَوَلَّى شُعَيْبٌ عَنْهُمْ وَقَالَ: لَقَدْ أَبْلَغْتُكُمْ {رِسَالَاتِ} رَبِّي."
    },
    "think": {
     "q": "لِمَاذَا يَقُولُ الْكِتَابُ: «وَكَانَتِ الْعَاقِبَةُ وَاحِدَةً»؟",
     "qt": "Kitap neden «Son hep aynıydı» diyor?",
     "model": "Nûh, Hûd, Sâlih ve Şuayb kıssalarında aynı düzen tekrar ediyor: Peygamber gelir, kavmini öğütle ve sabırla davet eder; kavmin ileri gelenleri alay eder, tehdit eder ve azap ister; sonunda yalanlayanlar helak olur, inananlar kurtulur. Yazar, bu tekrarın bir tesadüf değil, Allah'ın değişmeyen kanunu olduğunu hatırlatıyor."
    },
    "personal": {
     "q": "قَالَ شُعَيْبٌ لِرَبِّهِ: «عَلَى اللهِ تَوَكَّلْنَا». مَتَى تَوَكَّلْتَ عَلَى اللهِ فِي أَمْرٍ صَعْبٍ؟",
     "qt": "Şuayb «Biz Allah'a tevekkül ettik» dedi. Zor bir işte ne zaman Allah'a güvendin? Kısa bir Arapça cümleyle yaz.",
     "hint": [
      "تَوَكَّلْتُ عَلَى اللهِ لَمَّا …",
      "كَانَ عِنْدِي امْتِحَانٌ صَعْبٌ فَـ …",
      "دَعَوْتُ اللهَ وَ …"
     ]
    },
    "retell": [
     "رَهْطٌ",
     "لَرَجَمْنَاكَ",
     "لَنُخْرِجَنَّكَ",
     "رَبَّنَا افْتَحْ",
     "الرَّجْفَةُ",
     "أَبْلَغْتُكُمْ"
    ],
    "quran": [
     {
      "ar": "قَالُوا يَا شُعَيْبُ مَا نَفْقَهُ كَثِيرًا مِمَّا تَقُولُ وَإِنَّا لَنَرَاكَ فِينَا ضَعِيفًا ۖ وَلَوْلَا رَهْطُكَ لَرَجَمْنَاكَ ۖ وَمَا أَنْتَ عَلَيْنَا بِعَزِيزٍ ۝ قَالَ يَا قَوْمِ أَرَهْطِي أَعَزُّ عَلَيْكُمْ مِنَ اللَّهِ وَاتَّخَذْتُمُوهُ وَرَاءَكُمْ ظِهْرِيًّا ۖ إِنَّ رَبِّي بِمَا تَعْمَلُونَ مُحِيطٌ",
      "ref": "Hûd 11:91–92",
      "tr": "Dediler ki: Ey Şuayb! Söylediklerinin çoğunu anlamıyoruz; biz seni aramızda zayıf görüyoruz. Akraban olmasaydı seni taşlardık; sen bizim gözümüzde değerli değilsin. Dedi ki: Ey kavmim! Akrabam size Allah'tan daha mı değerli ki O'nu arkanıza atıp unuttunuz? Şüphesiz Rabbim yaptıklarınızı kuşatmıştır.",
      "inText": "«قَالُوا يَا شُعَيْبُ مَا نَفْقَهُ كَثِيرًا …»"
     },
     {
      "ar": "قَالَ الْمَلَأُ الَّذِينَ اسْتَكْبَرُوا مِنْ قَوْمِهِ لَنُخْرِجَنَّكَ يَا شُعَيْبُ وَالَّذِينَ آمَنُوا مَعَكَ مِنْ قَرْيَتِنَا أَوْ لَتَعُودُنَّ فِي مِلَّتِنَا ۚ قَالَ أَوَلَوْ كُنَّا كَارِهِينَ",
      "ref": "A'râf 7:88",
      "tr": "Kavminden büyüklük taslayan ileri gelenler dedi ki: Ey Şuayb! Ya seni ve seninle birlikte iman edenleri memleketimizden mutlaka çıkaracağız ya da dinimize döneceksiniz. Şuayb dedi: Biz istemesek de mi?",
      "inText": "«لَنُخْرِجَنَّكَ يَا شُعَيْبُ …»"
     },
     {
      "ar": "فَكَذَّبُوهُ فَأَخَذَهُمْ عَذَابُ يَوْمِ الظُّلَّةِ ۚ إِنَّهُ كَانَ عَذَابَ يَوْمٍ عَظِيمٍ",
      "ref": "Şuarâ 26:189",
      "tr": "Onu yalanladılar; bunun üzerine onları gölge gününün azabı yakaladı. Şüphesiz o, büyük bir günün azabıydı.",
      "inText": "«فَأَسْقِطْ عَلَيْنَا كِسَفًا مِنَ السَّمَاءِ …» isteğinin karşılığı (Eyke halkı)"
     },
     {
      "ar": "فَأَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ ۝ الَّذِينَ كَذَّبُوا شُعَيْبًا كَأَنْ لَمْ يَغْنَوْا فِيهَا ۚ الَّذِينَ كَذَّبُوا شُعَيْبًا كَانُوا هُمُ الْخَاسِرِينَ",
      "ref": "A'râf 7:91–92",
      "tr": "Bunun üzerine onları sarsıntı yakaladı; yurtlarında diz üstü çökmüş olarak sabahladılar. Şuayb'ı yalanlayanlar sanki orada hiç oturmamışlardı. Şuayb'ı yalanlayanlar, asıl kaybedenler onlar oldu.",
      "inText": "«فَأَخَذَتْهُمُ الرَّجْفَةُ …»"
     }
    ]
   },
   "sections": [
    {
     "n": 9,
     "title_ar": "شُعَيْبٌ يَتَعَجَّبُ مِنْ قَوْمِهِ",
     "title_tr": "Şuayb kavmine şaşırıyor",
     "s": [
      [
       "وَتَعَلَّلُوا بِضَعْفِهِ وَوَحْدَتِهِ وَأَنَّهُ لَوْلَا عَشِيرَتُهُ وَقَرَابَتُهُمْ لَهُ لَرَجَمُوهُ بِالْحِجَارَةِ وَتَخَلَّصُوا مِنْهُ.",
       "Onun zayıflığını ve yalnızlığını bahane ettiler; eğer aşireti ve onlarla akrabalığı olmasaydı onu taşlayıp ondan kurtulacaklarını söylediler."
      ],
      [
       "وَقَدِ اسْتَنْكَرَ ذٰلِكَ شُعَيْبٌ وَتَعَجَّبَ مِنْ أَنْ يَكُونَ اللهُ الْعَزِيزُ الْقَادِرُ، وَالْقَوِيُّ الْقَاهِرُ، أَهْوَنَ عَلَيْهِمْ مِنْ عَشِيرَةٍ هِيَ عُرْضَةٌ لِلْأَمْرَاضِ وَالْهَلَاكِ وَالضَّعْفِ وَالْعَجْزِ.",
       "Şuayb buna karşı çıktı; mutlak güç sahibi, her şeye kadir, güçlü ve her şeye hâkim Allah'ın, hastalıklara, ölüme, zayıflığa ve âcizliğe açık bir aşiretten daha değersiz görülmesine şaştı."
      ],
      [
       "«قَالُوا يَا شُعَيْبُ مَا نَفْقَهُ كَثِيرًا مِمَّا تَقُولُ وَإِنَّا لَنَرَاكَ فِينَا ضَعِيفًا وَلَوْلَا رَهْطُكَ لَرَجَمْنَاكَ وَمَا أَنْتَ عَلَيْنَا بِعَزِيزٍ».",
       "«Dediler ki: Ey Şuayb! Söylediklerinin çoğunu anlamıyoruz. Biz seni aramızda zayıf görüyoruz. Eğer akraban olmasaydı seni taşlardık. Sen bizim gözümüzde değerli biri değilsin.»"
      ],
      [
       "«قَالَ يَا قَوْمِ أَرَهْطِي أَعَزُّ عَلَيْكُمْ مِنَ اللهِ وَاتَّخَذْتُمُوهُ وَرَاءَكُمْ ظِهْرِيًّا إِنَّ رَبِّي بِمَا تَعْمَلُونَ مُحِيطٌ».",
       "«Dedi ki: Ey kavmim! Akrabam size Allah'tan daha mı değerli ki O'nu arkanıza atıp unuttunuz? Şüphesiz Rabbim yaptıklarınızı kuşatmıştır.»"
      ]
     ]
    },
    {
     "n": 10,
     "title_ar": "السَّهْمُ الْأَخِيرُ",
     "title_tr": "Son ok",
     "s": [
      [
       "وَلَمَّا انْقَطَعَتْ حُجَّتُهُمْ أَطْلَقُوا السَّهْمَ الْأَخِيرَ الَّذِي أَطْلَقَهُ الْمُتَكَبِّرُونَ مِنْ كُلِّ أُمَّةٍ عَلَى نَبِيِّهِمْ وَأَتْبَاعِهِ:",
       "Delilleri tükenince, her ümmetin kibirlilerinin peygamberlerine ve ona uyanlara attığı son oku attılar:"
      ],
      [
       "«قَالَ الْمَلَأُ الَّذِينَ اسْتَكْبَرُوا مِنْ قَوْمِهِ لَنُخْرِجَنَّكَ يَا شُعَيْبُ وَالَّذِينَ آمَنُوا مَعَكَ مِنْ قَرْيَتِنَا أَوْ لَتَعُودُنَّ فِي مِلَّتِنَا».",
       "«Kavminden büyüklük taslayan ileri gelenler dedi ki: Ey Şuayb! Ya seni ve seninle birlikte iman edenleri memleketimizden mutlaka çıkaracağız ya da dinimize döneceksiniz.»"
      ]
     ]
    },
    {
     "n": 11,
     "title_ar": "حُجَّةٌ قَاطِعَةٌ",
     "title_tr": "Kesin bir delil",
     "s": [
      [
       "فَكَانَ جَوَابُهُ جَوَابَ فَخُورٍ بِدِينِهِ غَيُورٍ عَلَى عَقِيدَتِهِ وَضَمِيرِهِ:",
       "Onun cevabı, diniyle övünen, inancını ve vicdanını kıskançlıkla koruyan birinin cevabıydı:"
      ],
      [
       "«قَالَ أَوَلَوْ كُنَّا كَارِهِينَ * قَدِ افْتَرَيْنَا عَلَى اللهِ كَذِبًا إِنْ عُدْنَا فِي مِلَّتِكُمْ بَعْدَ إِذْ نَجَّانَا اللهُ مِنْهَا وَمَا يَكُونُ لَنَا أَنْ نَعُودَ فِيهَا إِلَّا أَنْ يَشَاءَ اللهُ رَبُّنَا وَسِعَ رَبُّنَا كُلَّ شَيْءٍ عِلْمًا عَلَى اللهِ تَوَكَّلْنَا رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ».",
       "«Dedi ki: Biz istemesek de mi? Allah bizi sizin dininizden kurtardıktan sonra ona dönersek Allah'a karşı yalan uydurmuş oluruz. Rabbimiz Allah dilemedikçe ona dönmemiz bizim için olacak şey değildir. Rabbimizin ilmi her şeyi kuşatmıştır. Biz yalnızca Allah'a tevekkül ettik. Rabbimiz! Bizimle kavmimiz arasında hak ile hüküm ver. Sen hüküm verenlerin en hayırlısısın.»"
      ]
     ]
    },
    {
     "n": 12,
     "title_ar": "بَلْ قَالُوا مِثْلَ مَا قَالَ الْأَوَّلُونَ",
     "title_tr": "Öncekilerin dediğini dediler",
     "s": [
      [
       "فَلَمْ يَنْفَعْهُمْ ذٰلِكَ، بَلْ قَالُوا مِثْلَمَا قَالَ الْأَوَّلُونَ:",
       "Bu onlara fayda vermedi; aksine öncekilerin dediği gibi dediler:"
      ],
      [
       "«قَالُوا إِنَّمَا أَنْتَ مِنَ الْمُسَحَّرِينَ * وَمَا أَنْتَ إِلَّا بَشَرٌ مِثْلُنَا وَإِنْ نَظُنُّكَ لَمِنَ الْكَاذِبِينَ * فَأَسْقِطْ عَلَيْنَا كِسَفًا مِنَ السَّمَاءِ إِنْ كُنْتَ مِنَ الصَّادِقِينَ».",
       "«Dediler ki: Sen ancak büyülenmişlerdensin. Sen de bizim gibi bir insandan başka bir şey değilsin. Biz seni yalancılardan sanıyoruz. Eğer doğru söyleyenlerdensen haydi üzerimize gökten parçalar düşür!»"
      ]
     ]
    },
    {
     "n": 13,
     "title_ar": "عَاقِبَةُ أُمَّةٍ كَذَّبَتْ نَبِيَّهَا",
     "title_tr": "Peygamberini yalanlayan ümmetin sonu",
     "s": [
      [
       "وَكَانَتِ الْعَاقِبَةُ وَاحِدَةً، عَاقِبَةَ كُلِّ أُمَّةٍ كَذَّبَتْ نَبِيَّهَا وَكَفَرَتْ بِنِعْمَةِ اللهِ:",
       "Son hep aynıydı: peygamberini yalanlayan ve Allah'ın nimetine nankörlük eden her ümmetin sonu:"
      ],
      [
       "«فَأَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ * الَّذِينَ كَذَّبُوا شُعَيْبًا كَأَنْ لَمْ يَغْنَوْا فِيهَا الَّذِينَ كَذَّبُوا شُعَيْبًا كَانُوا هُمُ الْخَاسِرِينَ».",
       "«Bunun üzerine onları o sarsıntı yakaladı; yurtlarında diz üstü çökmüş olarak sabahladılar. Şuayb'ı yalanlayanlar sanki orada hiç oturmamışlardı. Şuayb'ı yalanlayanlar, asıl kaybedenler onlar oldu.»"
      ]
     ]
    },
    {
     "n": 14,
     "title_ar": "بَلَّغَ الرِّسَالَةَ وَأَدَّى الْأَمَانَةَ",
     "title_tr": "Mesajı tebliğ etti, emaneti yerine getirdi",
     "s": [
      [
       "وَكَانَ شَأْنُ شُعَيْبٍ، شَأْنَ كُلِّ نَبِيٍّ بَلَّغَ الرِّسَالَةَ، وَأَدَّى الْأَمَانَةَ وَأَقَامَ الْحُجَّةَ:",
       "Şuayb'ın durumu da mesajı tebliğ eden, emaneti yerine getiren ve delili ortaya koyan her peygamberin durumu gibiydi:"
      ],
      [
       "«فَتَوَلَّى عَنْهُمْ وَقَالَ يَا قَوْمِ لَقَدْ أَبْلَغْتُكُمْ رِسَالَاتِ رَبِّي وَنَصَحْتُ لَكُمْ فَكَيْفَ آسَى عَلَى قَوْمٍ كَافِرِينَ».",
       "«Şuayb onlardan yüz çevirdi ve dedi: Ey kavmim! Andolsun, size Rabbimin mesajlarını ulaştırdım ve size öğüt verdim. Artık inkâr eden bir kavim için nasıl üzülürüm?»"
      ]
     ]
    }
   ]
  }
 ]
});
