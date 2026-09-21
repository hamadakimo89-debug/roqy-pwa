/* ===== Original inline script 1 ===== */
(function(){
/* ================= DATA ================= */
const NEW_CATEGORIES = [
{id:'sabah',icon:'🌞',bg:'#fbeecb',title:'أذكار الصباح',desc:'ورد بداية اليوم',hasAudio:true,audio:'https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Mishari_Raashid/Azkar_AlSba7_w_AlMsa/ar_1434_Azkar_AlSba7.mp3'},
{id:'masaa',icon:'🌙',bg:'#e4e6fb',title:'أذكار المساء',desc:'ورد نهاية اليوم',hasAudio:true,audio:'https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Mishari_Raashid/Azkar_AlSba7_w_AlMsa/ar_1434_Azkar_AlMsa.mp3'},
{id:'sleep',icon:'🌌',bg:'#eae0fa',title:'أذكار النوم',desc:'سكينة الليل'},
{id:'wake',icon:'🌅',bg:'#dff3ec',title:'أذكار الاستيقاظ',desc:'بداية يوم مبارك'},
{id:'salah',icon:'🚶',bg:'#dff3ec',title:'بعد الصلاة',desc:'أذكار ما بعد السلام'},
{id:'home',icon:'🏠',bg:'#deeee0',title:'المنزل والخروج',desc:'الدخول والخروج'},
{id:'travel',icon:'🧳',bg:'#e6eef7',title:'السفر والركوب',desc:'دعاء السفر'},
{id:'food',icon:'🍽️',bg:'#fbe6d9',title:'الطعام والشراب',desc:'بركة النعمة'},
{id:'masjid',icon:'🕌',bg:'#dcedf5',title:'المسجد والأذان',desc:'آداب المسجد'},
{id:'wudu',icon:'💧',bg:'#dff3ec',title:'الوضوء',desc:'أذكار الوضوء'},
{id:'worry',icon:'🤍',bg:'#f0e8f5',title:'الهم والكرب',desc:'تفريج الضيق'},
{id:'rain',icon:'🌧️',bg:'#e4edf5',title:'المطر والرياح',desc:'أذكار الطقس'},
{id:'sick',icon:'🩺',bg:'#f7e8eb',title:'المريض والعيادة',desc:'دعاء الشفاء'},
{id:'friday',icon:'🕋',bg:'#f6ecd8',title:'الجمعة',desc:'أذكار يوم الجمعة'},
{id:'jamiah',icon:'✨',bg:'#fbe1e6',title:'أدعية جامعة',desc:'دعوات شاملة للدنيا والآخرة'}
];

const NEW_DHIKR = {
  sabah: [
    {text:'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ', count:'مرة واحدة', ref:'آية الكرسي — سورة البقرة: 255'},
    {text:'قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', count:'3 مرات', ref:'سورة الإخلاص'},
    {text:'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، مِنْ شَرِّ مَا خَلَقَ، وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ', count:'3 مرات', ref:'سورة الفلق'},
    {text:'قُلْ أَعُوذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَهِ النَّاسِ، مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ، مِنَ الْجِنَّةِ وَالنَّاسِ', count:'3 مرات', ref:'سورة الناس'},
    {text:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ', count:'مرة واحدة', ref:'حصن المسلم — أذكار الصباح'},
    {text:'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ', count:'مرة واحدة', ref:'سيد الاستغفار'},
    {text:'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ', count:'3 مرات', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ', count:'3 مرات', ref:'حصن المسلم'},
    {text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ', count:'7 مرات', ref:'حصن المسلم'},
    {text:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ', count:'3 مرات', ref:'حصن المسلم'},
    {text:'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ رَسُولًا', count:'3 مرات', ref:'حصن المسلم'},
    {text:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', count:'100 مرة', ref:'حصن المسلم'},
    {text:'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ', count:'100 مرة', ref:'حصن المسلم'},
    {text:'أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ', count:'10 مرات', ref:'حصن المسلم'},
    {text:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', count:'10 مرات', ref:'حصن المسلم'}
  ],
  masaa: [
    {text:'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ', count:'مرة واحدة', ref:'آية الكرسي — سورة البقرة: 255'},
    {text:'قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', count:'3 مرات', ref:'سورة الإخلاص'},
    {text:'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، مِنْ شَرِّ مَا خَلَقَ، وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ', count:'3 مرات', ref:'سورة الفلق'},
    {text:'قُلْ أَعُوذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَهِ النَّاسِ، مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ، مِنَ الْجِنَّةِ وَالنَّاسِ', count:'3 مرات', ref:'سورة الناس'},
    {text:'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا', count:'مرة واحدة', ref:'حصن المسلم — أذكار المساء'},
    {text:'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ', count:'مرة واحدة', ref:'سيد الاستغفار'},
    {text:'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ', count:'3 مرات', ref:'حصن المسلم'},
    {text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ', count:'7 مرات', ref:'حصن المسلم'},
    {text:'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ', count:'3 مرات', ref:'حصن المسلم'},
    {text:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', count:'100 مرة', ref:'حصن المسلم'},
    {text:'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ', count:'100 مرة', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ', count:'10 مرات', ref:'حصن المسلم'},
    {text:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', count:'10 مرات', ref:'حصن المسلم'}
  ],
  salah: [
    {text:'أَسْتَغْفِرُ اللَّهَ', count:'3 مرات', ref:'بعد السلام مباشرة'},
    {text:'اللَّهُمَّ أَنْتَ السَّلَامُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'سُبْحَانَ اللَّهِ', count:'33 مرة', ref:'حصن المسلم'},
    {text:'الْحَمْدُ لِلَّهِ', count:'33 مرة', ref:'حصن المسلم'},
    {text:'اللَّهُ أَكْبَرُ، وتُكمَّل المئة بقول: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', count:'34 مرة', ref:'حصن المسلم'}
  ],
  sleep: [
    {text:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', count:'عند النوم', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ', count:'3 مرات', ref:'حصن المسلم'},
    {text:'بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', count:'عند الاستيقاظ', ref:'حصن المسلم'}
  ],
  home: [
    {text:'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا، ثُمَّ يُسَلِّمُ عَلَى أَهْلِهِ', count:'عند دخول المنزل', ref:'حصن المسلم'},
    {text:'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', count:'عند الخروج من المنزل', ref:'حصن المسلم — من قالها يُقال له: هُديت وكُفيت ووُقيت'},
    {text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ، أَوْ أَزِلَّ أَوْ أُزَلَّ، أَوْ أَظْلِمَ أَوْ أُظْلَمَ، أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ', count:'عند الخروج', ref:'حصن المسلم'},
    {text:'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ، اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى', count:'دعاء السفر', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ', count:'دعاء السفر', ref:'حصن المسلم'},
    {text:'آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ', count:'عند العودة من السفر', ref:'حصن المسلم'}
  ],
  food: [
    {text:'بِسْمِ اللَّهِ', count:'قبل الطعام', ref:'حصن المسلم'},
    {text:'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ', count:'بعد الطعام', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ', count:'مرة واحدة', ref:'حصن المسلم'}
  ],
  jamiah: [
    {text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', count:'مرة واحدة', ref:'سورة البقرة: 201'},
    {text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي', count:'مرة واحدة', ref:'سورة طه: 25-26'},
    {text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ', count:'مرة واحدة', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا', count:'دعاء عند الكرب والشدة', ref:'حصن المسلم'},
    {text:'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ', count:'دعاء الكرب', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ', count:'مأثور عن النبي ﷺ', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ خَيْرَهُ وَخَيْرَ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ', count:'دعاء لبس الثوب الجديد', ref:'حصن المسلم'},
    {text:'اسْتَخِرِ اللَّهَ: اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ...', count:'دعاء الاستخارة', ref:'حصن المسلم — ذكر حاجته بعدها'},
    {text:'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ', count:'دعاء عام للتوبة', ref:'حصن المسلم'}
  ],
  masjid: [
    {text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي بَصَرِي نُورًا، وَفِي سَمْعِي نُورًا', count:'الذهاب للمسجد', ref:'حصن المسلم'},
    {text:'أَعُوذُ بِاللَّهِ الْعَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ، بِسْمِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ', count:'عند الدخول', ref:'حصن المسلم'},
    {text:'بِسْمِ اللَّهِ، وَالصَّلَاةُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ', count:'عند الخروج', ref:'حصن المسلم'}
  ],
  aam: [
    {text:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ', count:'كلمتان خفيفتان على اللسان ثقيلتان في الميزان', ref:'متفق عليه'},
    {text:'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', count:'كنز من كنوز الجنة', ref:'متفق عليه'},
    {text:'مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ', count:'عند رؤية ما يعجبك من نعمة', ref:'حصن المسلم'},
    {text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', count:'عند الشدة والخوف', ref:'سورة آل عمران: 173'},
    {text:'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا', count:'عند المصيبة', ref:'حصن المسلم'},
    {text:'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ', count:'دعاء يونس عليه السلام — عند الكرب', ref:'سورة الأنبياء: 87'},
    {text:'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ', count:'كثّر منها في يومك', ref:'حصن المسلم'},
    {text:'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ', count:'من قالها غُفر له وإن كان فرَّ من الزحف', ref:'حصن المسلم'},
    {text:'الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ', count:'عند حصول أمر تسرّ به', ref:'حصن المسلم'},
    {text:'اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ', count:'تُقال بعد كل صلاة مكتوبة', ref:'حصن المسلم'},
    {text:'سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ، وَسَلَامٌ عَلَى الْمُرْسَلِينَ، وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', count:'خاتمة جميلة لمجلسك', ref:'سورة الصافات: 180-182'}
  ],
  wake:[{text:'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',count:'مرة واحدة',ref:'حصن المسلم'},{text:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',count:'مرة واحدة',ref:'حصن المسلم'}],
  travel:[{text:'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',count:'دعاء السفر',ref:'حصن المسلم'},{text:'اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ',count:'مرة واحدة',ref:'حصن المسلم'}],
  wudu:[{text:'بِسْمِ اللَّهِ',count:'قبل الوضوء',ref:'حصن المسلم'},{text:'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',count:'بعد الوضوء',ref:'رواه مسلم'}],
  worry:[{text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ',count:'مرة واحدة',ref:'حصن المسلم'},{text:'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',count:'عند الكرب',ref:'سورة الأنبياء: 87'}],
  rain:[{text:'اللَّهُمَّ صَيِّبًا نَافِعًا',count:'عند نزول المطر',ref:'صحيح البخاري'},{text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا',count:'عند الريح',ref:'صحيح مسلم'}],
  sick:[{text:'أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ',count:'7 مرات',ref:'رواه أبو داود'},{text:'اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَاسَ، اشْفِ أَنْتَ الشَّافِي',count:'للمريض',ref:'صحيح البخاري'}],
  friday:[{text:'اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ',count:'أكثر منها',ref:'يوم الجمعة'},{text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',count:'مرة واحدة',ref:'سورة البقرة: 201'}]
};

/* ================= RENDER CATEGORY GRID ================= */
const newGrid = document.getElementById('newCatGrid');
newGrid.innerHTML = NEW_CATEGORIES.map(c=>`
  <div class="cat-card" onclick="openSheet('${c.id}')">
    <div class="cat-text">
      <div class="ct-title"><span class="cat-icon" style="background:${c.bg};">${c.icon}</span>${c.title}</div>
      <div class="ct-desc">← ${c.desc}</div>
      <div class="ct-count">${NEW_DHIKR[c.id].length} ذِكرًا</div>
    </div>
  </div>`).join('');

/* ================= SHEET (dhikr detail) ================= */
function openSheet(catId){
  const cat = NEW_CATEGORIES.find(c=>c.id===catId);
  const list = NEW_DHIKR[catId];
  document.getElementById('newSheetTitle').textContent = cat.title;
  document.getElementById('newSheetIcon').textContent = cat.icon;
  document.getElementById('newSheetList').innerHTML = list.map((d,i)=>`
    <div class="dhikr-card">
      <div class="dk-top">
        <span class="dk-idx">${i+1} / ${list.length}</span>
        <span class="dk-count">${d.count}</span>
      </div>
      <div class="dk-text quran">${d.text}</div>
      <div class="dk-ref">${d.ref}</div>
    </div>`).join('');
  const audioBar = document.getElementById('newSheetAudioBar');
  const audioEl = document.getElementById('newSheetAudioEl');
  audioEl.pause();
  document.getElementById('newSaSub').textContent = 'شغّل الصوت لمتابعة القراءة صوتيًا';
  if(cat.hasAudio){
    audioEl.setAttribute('src', cat.audio);
    audioEl.load();
    audioBar.style.display='block';
    audioBar.dataset.audioUrl = cat.audio;
  }else{
    audioEl.removeAttribute('src');
    audioBar.style.display='none';
  }
  document.getElementById('newSheetScroll').scrollTop = 0;
  document.getElementById('newSheetBg')?.classList.add('open');
}
function closeSheet(){
  document.getElementById('newSheetBg')?.classList.remove('open');
  const audioEl = document.getElementById('newSheetAudioEl');
  audioEl.pause();
}
function showAudioFallback(){
  const audioBar = document.getElementById('newSheetAudioBar');
  const url = audioBar.dataset.audioUrl;
  document.getElementById('newSaSub').innerHTML = `تعذّر التشغيل هنا — <a href="${url}" target="_blank" rel="noopener" style="color:var(--teal);font-weight:800;">اضغط هنا للاستماع مباشرة ↗</a>`;
}
document.getElementById('newSheetAudioEl').addEventListener('error', showAudioFallback);
// Robust audio controls: user gesture starts playback, and switching pages stops it.
document.getElementById('newSheetAudioEl').addEventListener('loadedmetadata',()=>{
  document.getElementById('newSaSub').textContent='اضغط ▶ لتشغيل الورد الصوتي — مشاري راشد العفاسي';
});
document.getElementById('newSheetAudioEl').addEventListener('play',()=>{
  document.getElementById('newSaSub').textContent='يعمل الآن 🎧 — يمكنك الإيقاف أو متابعة القراءة';
});
document.getElementById('newSheetAudioEl').addEventListener('pause',()=>{
  if(!document.getElementById('newSheetAudioEl').ended) document.getElementById('newSaSub').textContent='متوقف مؤقتًا — اضغط ▶ للمتابعة';
});

/* ================= REMINDER ================= */
let remData = JSON.parse(localStorage.getItem('adhkarReminders')||'null') || {sabah:'06:00', masaa:'17:30', on:false};
function updateBellBtn(){
  document.getElementById('remBtn')?.classList.toggle('on', remData.on);
}
function openReminderModal(){
  document.getElementById('remSabah').value = remData.sabah;
  document.getElementById('remMasaa').value = remData.masaa;
  document.getElementById('remModal')?.classList.add('open');
}
async function saveReminders(){
  remData.sabah = document.getElementById('remSabah').value;
  remData.masaa = document.getElementById('remMasaa').value;
  remData.on = true;
  localStorage.setItem('adhkarReminders', JSON.stringify(remData));
  document.getElementById('remModal')?.classList.remove('open');
  updateBellBtn();
  if('Notification' in window && Notification.permission!=='granted'){
    try{ await Notification.requestPermission(); }catch(e){}
  }
  toast('تم حفظ التذكير — يعمل أثناء فتح الصفحة على جهازك 🔔');
}
document.getElementById('remModal').addEventListener('click', e=>{ if(e.target.id==='remModal') e.currentTarget.classList.remove('open'); });
let lastFiredMinute = null;
setInterval(()=>{
  if(!remData.on) return;
  const now = new Date();
  const hm = String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
  if(hm===lastFiredMinute) return;
  if(hm===remData.sabah){ fireReminder('🌅 حان وقت أذكار الصباح'); lastFiredMinute=hm; }
  else if(hm===remData.masaa){ fireReminder('🌙 حان وقت أذكار المساء'); lastFiredMinute=hm; }
}, 20000);
function fireReminder(msg){
  toast(msg);
  playReminderChime();
  if('Notification' in window && Notification.permission==='granted'){
    try{ new Notification('حصن المسلم', {body:msg}); }catch(e){}
  }
}
let remAudioCtx = null;
function playReminderChime(){
  try{
    if(!remAudioCtx) remAudioCtx = new (window.AudioContext||window.webkitAudioContext)();
    if(remAudioCtx.state==='suspended') remAudioCtx.resume();
    const now = remAudioCtx.currentTime;
    [988, 1319].forEach((f,i)=>{
      const t0 = now + i*0.2;
      const osc = remAudioCtx.createOscillator();
      const gain = remAudioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t0);
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(0.2, t0+0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0+0.4);
      osc.connect(gain).connect(remAudioCtx.destination);
      osc.start(t0);
      osc.stop(t0+0.42);
    });
  }catch(e){ /* audio not available */ }
}
updateBellBtn();

/* ================= TOAST ================= */
let toastTimer;
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
}
window.openSheet=openSheet;window.closeSheet=closeSheet;})();

/* ===== Original inline script 2 ===== */

const KEYS={profile:'habit_profile_v6',moods:'habit_moods_v6',tasks:'habit_tasks_v6',notes:'habit_notes_v6',tasbih:'tasbih_counts_by_date_v4',names:'asma_allah_saved_v3',hadith:'hadith_learning_saved_v1'};
const fixedTasks=[{id:'quran',name:'قراءة القرآن',icon:'📖',type:'ثابت'},{id:'prayers',name:'الصلوات الخمس',icon:'🕌',type:'ثابت'},{id:'adhkar',name:'الأذكار اليومية',icon:'📿',type:'ثابت'}];
const messages=[['وَبَشِّرِ الصَّابِرِينَ','سورة البقرة — الآية 155','🏔️','صبرك اليوم يصنع قوتك غدًا.'],['إِنَّ مَعَ الْعُسْرِ يُسْرًا','سورة الشرح — الآية 6','🌤️','ابدأ بالخطوة الصغيرة، فالثبات أهم من السرعة.'],['وَقُل رَّبِّ زِدْنِي عِلْمًا','سورة طه — الآية 114','📚','كل عادة بسيطة تكررها تبني مستقبلك.']];
const emojiCategories={'😀':['😀','😃','😄','😁','😆','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🤩','🥳','😏','😐','😶','🙄','😬','🤔','🤭','🤫','🤗','😱','😴','🤤','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶'],'❤️':['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','✨','💫','⭐','🌟','🔥','💥','💯'],'🙏':['🙏','👏','🙌','👐','🤝','👍','👎','👌','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','👇','☝️','✋','🤚','🖐️','💪','🫶','🙏','💐','🌹'],'🎉':['🎉','🎊','🎈','🎁','🎀','🎂','🏆','🥇','🎯','🚀','💡','✅','📌','📝','📚','💻','🧪','🏃','⚽','🎵','🎨','🎮','🎸','🎤'],'🌿':['🌿','🌱','🌲','🌳','🌴','🌵','🌻','🌼','🌷','🌹','🌸','🍀','🍎','🍊','🍋','🍇','🍉','🍓','🍒','🥝','🍕','🍔','☕','🍵'],'🏠':['🏠','🏡','🏢','🏫','🏥','🚗','🚌','✈️','🚲','⏰','📅','📖','📿','🕌','🕋','💼','📦','🔑','🛒','🧹','🛏️']};
const adhkar=[['subhanAllah','سبحان الله','✨'],['alhamdulillah','الحمد لله','🤍'],['allahuAkbar','الله أكبر','☀️'],['laIlaha','لا إله إلا الله','🌙'],['salawat','الصلاة على النبي','🕊️'],['tahlil','لا إله إلا الله وحده…','🤲']];
const TARGET=500;
const PRAYER_TIMES=[{name:'الفجر',icon:'🌅',time:'04:02'},{name:'الظهر',icon:'☀️',time:'12:09'},{name:'العصر',icon:'☁️',time:'15:26'},{name:'المغرب',icon:'🌇',time:'18:02'},{name:'العشاء',icon:'🌙',time:'20:14'}];
const PRAYER_RECORD_KEY='prayer_record_v5';
const PRAYER_SETTINGS_KEY='prayer_settings_v5';
let prayerRecordDate=new Date();
prayerRecordDate.setHours(12,0,0,0);
const names=[['الله','الاسم الجامع للصفات'],['الرحمن','واسع الرحمة'],['الرحيم','الرحيم بعباده'],['الملك','المالك المتصرف'],['القدوس','المنزه عن النقص'],['السلام','السالم من العيوب'],['المؤمن','المؤمّن لعباده'],['المهيمن','الرقيب الحافظ'],['العزيز','الغالب الذي لا يغلب'],['الجبار','الذي يجبر ضعف عباده'],['المتكبر','المتعالي عن صفات الخلق'],['الخالق','الموجد للخلق'],['البارئ','المنشئ للبرية'],['المصور','معطي الخلق صورهم'],['الغفار','كثير المغفرة'],['القهار','القاهر فوق عباده'],['الوهاب','كثير العطاء'],['الرزاق','المتكفل بالأرزاق'],['الفتاح','فاتح أبواب الخير'],['العليم','المحيط بكل علم'],['القابض','يقبض بحكمته'],['الباسط','يبسط الرزق والرحمة'],['الخافض','يخفض بحكمته'],['الرافع','يرفع بفضله'],['المعز','مانح العزة'],['المذل','يذل بعدله'],['السميع','يسمع كل شيء'],['البصير','يرى كل شيء'],['الحكم','الحاكم العدل'],['العدل','المنزه عن الظلم'],['اللطيف','الرفيق بعباده'],['الخبير','العليم بالبواطن'],['الحليم','لا يعاجل بالعقوبة'],['العظيم','عظيم الشأن'],['الغفور','الساتر للذنوب'],['الشكور','يثيب على القليل'],['العلي','العالي فوق خلقه'],['الكبير','الكبير في ذاته'],['الحفيظ','الحافظ لكل شيء'],['المقيت','الموصل للأقوات'],['الحسيب','الكافي والمحاسب'],['الجليل','ذو الجلال'],['الكريم','كثير الخير'],['الرقيب','المطلع على الأعمال'],['المجيب','مجيب الدعاء'],['الواسع','واسع الفضل'],['الحكيم','يضع الأمور مواضعها'],['الودود','المحب لعباده'],['المجيد','كامل المجد'],['الباعث','باعث الخلق'],['الشهيد','المطلع على كل شيء'],['الحق','الثابت الذي لا شك فيه'],['الوكيل','الكفيل بأرزاق عباده'],['القوي','كامل القوة'],['المتين','شديد القوة'],['الولي','ناصر المؤمنين'],['الحميد','المستحق للحمد'],['المحصي','أحصى كل شيء'],['المبدئ','يبدأ الخلق'],['المعيد','يعيد الخلق'],['المحيي','واهب الحياة'],['المميت','مقدر الموت'],['الحي','الكامل الحياة'],['القيوم','القائم بنفسه'],['الواجد','الغني الذي لا يفتقر'],['الماجد','كامل المجد'],['الواحد','المتفرد بالألوهية'],['الصمد','المقصود في الحوائج'],['القادر','كامل القدرة'],['المقتدر','البالغ القدرة'],['المقدم','يقدم من يشاء'],['المؤخر','يؤخر من يشاء'],['الأول','ليس قبله شيء'],['الآخر','ليس بعده شيء'],['الظاهر','فوق خلقه'],['الباطن','المحيط بكل شيء'],['الوالي','المالك للأمور'],['المتعالي','المنزه عن النقص'],['البر','كثير الإحسان'],['التواب','كثير قبول التوبة'],['المنتقم','يعاقب الظالمين'],['العفو','المتجاوز عن الذنوب'],['الرؤوف','شديد الرحمة'],['مالك الملك','المالك لكل شيء'],['ذو الجلال والإكرام','صاحب العظمة والفضل'],['المقسط','العادل'],['الجامع','يجمع الخلق'],['الغني','المستغني عن خلقه'],['المغني','المغني لعباده'],['المانع','يمنع بحكمته'],['الضار','يقدر الضر بحكمته'],['النافع','يقدر النفع'],['النور','منور السماوات والأرض'],['الهادي','المرشد للحق'],['البديع','مبدع الخلق'],['الباقي','الدائم بلا نهاية'],['الوارث','الباقي بعد فناء الخلق'],['الرشيد','الهادي إلى الرشد'],['الصبور','لا يعاجل بالعقوبة']];
const hadiths=[
['h01','إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.','عن عمر بن الخطاب رضي الله عنه — صحيح البخاري، الحديث 1.','ابدأ يومك بنية صالحة؛ فالعمل يقوى بالنية.'],
['h02','لَا يُؤْمِنُ أَحَدُكُمْ حَتَّىٰ يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.','عن أنس رضي الله عنه — متفق عليه.','اجعل الخير الذي تتمناه لنفسك لغيرك أيضًا.'],
['h03','مَنْ لَا يَرْحَمْ لَا يُرْحَمْ.','عن جرير بن عبد الله رضي الله عنه — متفق عليه.','الرحمة بالناس سبب لرحمة الله.'],
['h04','مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ.','عن أبي هريرة رضي الله عنه — متفق عليه.','اختر كلماتك، فالصمت أحيانًا خير.'],
['h05','لَا تَغْضَبْ.','عن أبي هريرة رضي الله عنه — صحيح البخاري، الحديث 6116.','درّب نفسك على ضبط الغضب قبل أن تتصرف.'],
['h06','الطُّهُورُ شَطْرُ الإِيمَانِ.','عن أبي مالك الأشعري رضي الله عنه — صحيح مسلم، الحديث 223.','النظافة والطهارة من أعمال الإيمان.'],
['h07','خَيْرُكُمْ مَنْ تَعَلَّمَ القُرْآنَ وَعَلَّمَهُ.','عن عثمان رضي الله عنه — صحيح البخاري، الحديث 5027.','اجعل لك نصيبًا ثابتًا من القرآن تعليمًا وتعلمًا.'],
['h08','الدِّينُ النَّصِيحَةُ.','عن تميم الداري رضي الله عنه — صحيح مسلم، الحديث 55.','النصيحة الصادقة تكون برفق وإخلاص.'],
['h09','يَسِّرُوا وَلَا تُعَسِّرُوا، وَبَشِّرُوا وَلَا تُنَفِّرُوا.','عن أنس رضي الله عنه — متفق عليه.','كن سببًا في التيسير والأمل.'],
['h10','إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ.','عن عبد الله بن مسعود رضي الله عنه — صحيح مسلم، الحديث 91.','الجمال المحمود يكون مع حسن الخلق والعمل.'],
['h11','الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ.','عن عبد الله بن عمرو رضي الله عنهما — متفق عليه.','احفظ لسانك ويدك عن أذى الناس.'],
['h12','مَنْ غَشَّنَا فَلَيْسَ مِنَّا.','عن أبي هريرة رضي الله عنه — صحيح مسلم، الحديث 101.','الصدق والأمانة أساس التعامل.'],
['h13','لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا.','عن أبي ذر رضي الله عنه — صحيح مسلم، الحديث 2626.','لا تستصغر أي خير ولو كان بسيطًا.'],
['h14','تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ.','عن أبي ذر رضي الله عنه — رواه الترمذي، الحديث 1956.','ابتسامتك عمل يسير وأثره جميل.'],
['h15','مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ.','عن أبي هريرة رضي الله عنه — صحيح مسلم، الحديث 2699.','استمرارك في التعلم عبادة إذا صلحت النية.'],
['h16','أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ.','عن عائشة رضي الله عنها — متفق عليه.','القليل المستمر أفضل من الحماس المنقطع.'],
['h17','إِنَّ اللَّهَ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ.','عن عائشة رضي الله عنها — صحيح البخاري، الحديث 6024.','الرفق يجمّل التعامل ويخفف المشكلات.'],
['h18','الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ.','عن أبي هريرة رضي الله عنه — متفق عليه.','قل كلمة طيبة كل يوم.'],
['h19','مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ.','عن ابن عمر رضي الله عنهما — متفق عليه.','ساعد غيرك فيما تستطيع.'],
['h20','المُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا.','عن أبي موسى الأشعري رضي الله عنه — متفق عليه.','التعاون يقوي المجتمع ويعين على الخير.'],
['h21','لَا ضَرَرَ وَلَا ضِرَارَ.','عن أبي سعيد الخدري رضي الله عنه — رواه ابن ماجه، الحديث 2340.','تجنب إيذاء نفسك والآخرين.'],
['h22','اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا.','عن أبي ذر ومعاذ رضي الله عنهما — رواه الترمذي، الحديث 1987.','إذا أخطأت فبادر بحسنة واستغفار.'],
['h23','احْفَظِ اللَّهَ يَحْفَظْكَ.','عن ابن عباس رضي الله عنهما — رواه الترمذي، الحديث 2516.','احفظ حدود الله في السر والعلن.'],
['h24','اغْتَنِمْ خَمْسًا قَبْلَ خَمْسٍ.','عن ابن عباس رضي الله عنهما — رواه الحاكم.','استثمر صحتك ووقتك وشبابك قبل زوالها.'],
['h25','مَنْ صَمَتَ نَجَا.','عن عبد الله بن عمرو رضي الله عنهما — رواه الترمذي.','لا تدخل في كلام يوقعك في الخطأ.'],
['h26','المَرْءُ مَعَ مَنْ أَحَبَّ.','عن أنس رضي الله عنه — متفق عليه.','اختر من تحبهم وصحبتك بعناية.'],
['h27','الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ.','عن عمران بن حصين رضي الله عنه — متفق عليه.','الحياء خلق يحجز عن القبيح ويقود للخير.'],
['h28','مَنْ لَا يَشْكُرُ النَّاسَ لَا يَشْكُرُ اللَّهَ.','عن أبي هريرة رضي الله عنه — رواه الترمذي وأبو داود.','عوّد نفسك على شكر من أحسن إليك.'],
['h29','مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ.','عن أبي مسعود الأنصاري رضي الله عنه — صحيح مسلم، الحديث 1893.','شارك الخير ولو بالدلالة عليه.'],
['h30','إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ.','عن أبي هريرة رضي الله عنه — صحيح مسلم، الحديث 2564.','اهتم بصلاح القلب والعمل قبل المظهر.']
];
let selectedDate=new Date(),view='week',activeDhikr='subhanAllah',selectedTaskIcon='⭐',toastTimer;
selectedDate.setHours(12,0,0,0);
const $=id=>document.getElementById(id);
function load(k,f={}){try{return JSON.parse(localStorage.getItem(k))||f}catch{return f}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function dateKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function addDays(d,n){const x=new Date(d);x.setDate(x.getDate()+n);x.setHours(12,0,0,0);return x}
function arDate(d){return new Intl.DateTimeFormat('ar-EG',{weekday:'long',day:'numeric',month:'long'}).format(d)}
function toast(t){$('toast').textContent=t;$('toast')?.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast')?.classList.remove('show'),1400)}
function monthParts(d){return{ar:new Intl.DateTimeFormat('ar-EG',{month:'long',year:'numeric'}).format(d),en:new Intl.DateTimeFormat('en-US',{month:'long',year:'numeric'}).format(d)}}
function renderWelcome(){const p=load(KEYS.profile,{name:'',image:''}),h=new Date().getHours();$('welcomeDate').textContent=arDate(new Date());$('greetingText').textContent=(h>=5&&h<12?'صباح الخير':'مساء الخير')+(p.name?' يا '+p.name:' يا صديقي');$('avatarImage').hidden=!p.image;$('avatarFallback').hidden=!!p.image;if(p.image)$('avatarImage').src=p.image}
function renderInspiration(){const n=Math.floor((selectedDate-new Date(selectedDate.getFullYear(),0,0))/86400000)%messages.length,m=messages[n];$('verseText').textContent=m[0];$('verseSource').textContent=m[1];$('verseIcon').textContent=m[2];$('wisdomText').textContent=m[3]}
function weekStart(d){const x=new Date(d);x.setDate(x.getDate()-((x.getDay()+1)%7));return x}
function renderCalendar(){const start=view==='week'?weekStart(selectedDate):new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1),m=monthParts(selectedDate);$('calendarSelectedDate').querySelector('.ar-month').textContent=m.ar;$('calendarSelectedDate').querySelector('.en-month').textContent=m.en;$('dateRow').innerHTML='';for(let i=0;i<7;i++){const d=addDays(start,i),b=document.createElement('button');b.className='date-btn'+(dateKey(d)===dateKey(selectedDate)?' active':'');b.innerHTML=`<span class="date-pill">${d.getDate()}</span><span class="date-day">${new Intl.DateTimeFormat('en-US',{weekday:'short'}).format(d).toUpperCase()}</span>`;b.onclick=()=>{selectedDate=d;renderAll()};$('dateRow').appendChild(b)}}
function taskData(d){const all=load(KEYS.tasks,{}),k=dateKey(d);if(!all[k]){all[k]={tasks:fixedTasks.map(x=>({...x,done:false}))};save(KEYS.tasks,all)}return all[k].tasks}
function saveTaskData(d,t){const all=load(KEYS.tasks,{});all[dateKey(d)]={tasks:t};save(KEYS.tasks,all)}
function taskStats(d){const t=taskData(d),done=t.filter(x=>x.done).length;return{tasks:t,done,total:t.length,p:t.length?Math.round(done/t.length*100):0}}
function renderTasks(){const s=taskStats(selectedDate);$('taskList').innerHTML='';$('summaryProgress').style.setProperty('--p',s.p+'%');$('summaryPercent').textContent=s.p+'%';$('summaryMessage').textContent=s.p===100?'رائع! أنجزت الكل 🎉':s.p?`أنجزت ${s.done}/${s.total} مهام`:'ابدأ أول مهمة 🌱';s.tasks.forEach(t=>{const li=document.createElement('li');li.className='task'+(t.done?' done':'');li.innerHTML=`<button class="check ${t.done?'checked':''}">✓</button><span class="task-icon">${t.icon}</span><span class="task-name"></span>${t.type==='مخصص'?'<button class="delete">🗑</button>':'<span></span>'}`;li.querySelector('.task-name').textContent=t.name;li.querySelector('.check').onclick=()=>{const a=taskData(selectedDate),x=a.find(y=>y.id===t.id);x.done=!x.done;saveTaskData(selectedDate,a);renderAll()};const del=li.querySelector('.delete');if(del)del.onclick=()=>{saveTaskData(selectedDate,taskData(selectedDate).filter(x=>x.id!==t.id));renderAll()};$('taskList').appendChild(li)})}
function renderMood(){const m=load(KEYS.moods,{})[dateKey(selectedDate)]||'';$('moodDateLabel').textContent=arDate(selectedDate);document.querySelectorAll('.mood-btn').forEach(b=>b.classList.toggle('active',b.dataset.mood===m));$('bear').className='bear '+(m?m.toLowerCase():'calm')}
function renderNotes(){$('noteInput').value=load(KEYS.notes,{})[dateKey(selectedDate)]||''}
function saveNote(){const n=load(KEYS.notes,{});n[dateKey(selectedDate)]=$('noteInput').value;save(KEYS.notes,n)}
function historyHTML(target){
  if(!target)return;
  const all=load(KEYS.tasks,{}), notes=load(KEYS.notes,{}), today=new Date();
  const escape=v=>{const el=document.createElement('div');el.textContent=v??'';return el.innerHTML};
  const days=[];
  for(let i=0;i<30;i++){
    const d=addDays(today,-i),k=dateKey(d),record=all[k];
    let tasks=record&&record.tasks?record.tasks:record;
    if(!Array.isArray(tasks))tasks=[];
    const note=notes[k]||'';
    if(tasks.length||String(note).trim())days.push({d,k,tasks,note});
  }
  if(!days.length){
    target.innerHTML='<div class="history-empty-card">لا يوجد سجل محفوظ حتى الآن.</div>';
    return;
  }
  target.innerHTML=days.map(({d,k,tasks,note})=>{
    const done=tasks.filter(x=>x&&x.done).length;
    const items=tasks.map(x=>`<span class="history-task-pill ${x.done?'done':''}">${escape(x.icon||'🎯')} ${escape(x.name||x.text||'مهمة')}</span>`).join('');
    return `<article class="history-day-card">
      <div class="history-day-head"><strong>${k}</strong><span>${done} من ${tasks.length} مكتملة</span></div>
      <div class="history-task-pills">${items||'<span class="history-task-pill empty">لا توجد مهام</span>'}</div>
      ${String(note).trim()?`<div class="history-day-note">📝 ${escape(note)}</div>`:''}
    </article>`;
  }).join('');
}
function renderHistory(){historyHTML($('historyList'));historyHTML($('fullHistoryList'))}
function renderStats(){const s=taskStats(selectedDate);$('statToday').textContent=s.p+'%';let n=0;for(let i=0;i<7;i++)n+=taskStats(addDays(selectedDate,-i)).done;$('statWeek').textContent=n}
function emptyCount(){const x={};adhkar.forEach(a=>x[a[0]]=0);return x}
function todayCount(){const all=load(KEYS.tasbih,{}),k=dateKey(new Date());if(!all[k]){all[k]=emptyCount();save(KEYS.tasbih,all)}return all[k]}
function renderPrayer(){
  const today=new Date();
  const days=Array.from({length:7},(_,i)=>addDays(today,i-6));
  const vals=days.map(d=>{const all=load(KEYS.tasbih,{}),c=all[dateKey(d)]||emptyCount();return Object.values(c).reduce((a,b)=>a+b,0)});
  $('tasbihHomeDate').textContent=arDate(today);
  $('weekTotal').textContent=vals.reduce((a,b)=>a+b,0);
  $('weeklyChart').innerHTML=days.map((d,i)=>{
    const raw=vals[i];
    const percent=raw?Math.round((raw/TARGET)*100):0;
    const barHeight=raw?Math.min(104,Math.max(10,Math.round(18+Math.sqrt(raw/TARGET)*65))):8;
    const isToday=dateKey(d)===dateKey(today);
    const exceeded=raw>TARGET;
    const isGold=raw>500;
    return `<div class="chart-col ${isToday?'today':''}">
      ${exceeded?'<span class="chart-star">⭐</span>':''}
      <span class="chart-percent">${percent}%</span>
      <div class="chart-value ${isGold?'gold':''}" style="height:${barHeight}px"></div>
      <span class="chart-day">${new Intl.DateTimeFormat('en-US',{weekday:'short'}).format(d).toUpperCase()}</span>
    </div>`;
  }).join('');
  renderNamesProgress();
  renderPrayersToday();
}
function pad2(v){return String(v).padStart(2,'0')}
function prayerSettings(){return load(PRAYER_SETTINGS_KEY,{muted:false,notifications:false})}
function arabicTime(value){let[h,m]=value.split(':').map(Number);const suffix=h>=12?'م':'ص';h=h%12||12;return `${h}:${pad2(m)} ${suffix}`}
function nextPrayerCalc(){const now=new Date();for(const p of PRAYER_TIMES){const [h,m]=p.time.split(':').map(Number);const target=new Date();target.setHours(h,m,0,0);if(target>now)return{prayer:p,target}}const p=PRAYER_TIMES[0],[h,m]=p.time.split(':').map(Number),target=new Date();target.setDate(target.getDate()+1);target.setHours(h,m,0,0);return{prayer:p,target}}
function updateRemaining(){const n=nextPrayerCalc(),diff=n.target-new Date(),rt=$('remainingTime'),np=$('nextPrayerName');if(!rt||!np)return;rt.textContent=`${pad2(Math.floor(diff/3600000))}:${pad2(Math.floor((diff%3600000)/60000))}:${pad2(Math.floor((diff%60000)/1000))}`;np.textContent='صلاة '+n.prayer.name}
function allPrayerRecords(){return load(PRAYER_RECORD_KEY,{})}
function prayerRecordFor(d){return allPrayerRecords()[dateKey(d)]||{}}
function setPrayerRecord(d,value){const all=allPrayerRecords();all[dateKey(d)]=value;save(PRAYER_RECORD_KEY,all)}
function renderPrayersToday(){const next=nextPrayerCalc().prayer.name,done=prayerRecordFor(new Date());$('prayerTimesDateLabel').textContent=arDate(new Date());$('prayersList').innerHTML='';PRAYER_TIMES.forEach(p=>{const card=document.createElement('article');card.className='pt-prayer'+(p.name===next?' next':'')+(done[p.name]?' done':'');card.innerHTML=`<span class="pt-prayer-icon">${p.icon}</span><span class="pt-prayer-name">${p.name}</span><span class="pt-prayer-time">${arabicTime(p.time)}</span><button class="pray-check">✓</button>`;card.querySelector('.pray-check').onclick=()=>{const d=prayerRecordFor(new Date());d[p.name]=!d[p.name];setPrayerRecord(new Date(),d);renderPrayersToday();toast(d[p.name]?'تم تسجيل صلاة '+p.name+' ✓':'تم إلغاء تسجيل '+p.name)};$('prayersList').appendChild(card)});const s=prayerSettings();$('notificationButton')?.classList.toggle('on',s.notifications);$('muteButton')?.classList.toggle('muted',s.muted);$('muteButton').textContent=s.muted?'🔇':'🔊'}
function renderPrayerRecordPage(){const today=new Date();today.setHours(12,0,0,0);$('prayerRecordDateLabel').textContent=arDate(prayerRecordDate);$('prayerDateStrip').innerHTML='';for(let i=-3;i<=3;i++){const d=addDays(today,i),b=document.createElement('button');b.className='date-chip'+(dateKey(d)===dateKey(prayerRecordDate)?' active':'');b.textContent=i===0?'اليوم':i===-1?'أمس':i===1?'غدًا':new Intl.DateTimeFormat('ar-EG',{day:'numeric',month:'short'}).format(d);b.onclick=()=>{prayerRecordDate=d;renderPrayerRecordPage()};$('prayerDateStrip').appendChild(b)}const future=prayerRecordDate>today,done=prayerRecordFor(prayerRecordDate);$('prayerRecordList').innerHTML='';PRAYER_TIMES.forEach(p=>{const row=document.createElement('article');row.className='record-row'+(done[p.name]?' done':'');row.innerHTML=`<div class="record-left"><span class="record-icon">${p.icon}</span><span><b>${p.name}</b><small>${arabicTime(p.time)}</small></span></div><button class="record-check" ${future?'disabled':''}>${done[p.name]?'✓':''}</button>`;row.querySelector('.record-check').onclick=()=>{if(future)return;const r=prayerRecordFor(prayerRecordDate);r[p.name]=!r[p.name];setPrayerRecord(prayerRecordDate,r);renderPrayerRecordPage();if(dateKey(prayerRecordDate)===dateKey(today))renderPrayersToday()};$('prayerRecordList').appendChild(row)});$('prayerFutureNote').textContent=future?'الأيام القادمة تعرض المواقيت فقط.':'اضغط على الدائرة بعد أداء الصلاة لتسجيلها.'}
function locatePrayer(){if(!navigator.geolocation)return toast('الموقع غير مدعوم');navigator.geolocation.getCurrentPosition(pos=>{const coords=`${pos.coords.latitude.toFixed(3)}, ${pos.coords.longitude.toFixed(3)}`;$('locationText').textContent=coords;if($('qiblaLocationText'))$('qiblaLocationText').textContent='الموقع الحالي: '+coords;if($('needle'))$('needle').style.transform=`rotate(${Math.round((pos.coords.longitude+360)%360)}deg)`;toast('تم تحديث الموقع. ستستخدم النسخة النهائية الإحداثيات لحساب المواقيت بدقة.')},()=>toast('لم يتم السماح للموقع'))}
function renderSelector(){$('dhikrSelector').innerHTML=adhkar.map(a=>`<button class="dhikr ${a[0]===activeDhikr?'active':''}" data-d="${a[0]}"><span class="dhikr-icon">${a[2]}</span><span class="dhikr-label">${a[1]}</span></button>`).join('');document.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{activeDhikr=b.dataset.d;renderCounter()})}
function renderCounterLog(){const c=todayCount();$('counterLog').innerHTML=adhkar.map(a=>{const n=c[a[0]]||0,p=Math.min(100,Math.round(n/TARGET*100));return `<div class="log-row"><div class="log-icon">${a[2]}</div><div><span class="log-name">${a[1]}</span><div class="log-track"><div class="log-fill" style="width:${p}%"></div></div></div><span class="log-count">${n}/${TARGET}</span></div>`}).join('')}
function renderCounter(){const a=adhkar.find(x=>x[0]===activeDhikr),c=todayCount();$('counterDate').textContent=arDate(new Date());$('activeDhikrName').textContent=a[1];$('activeDhikrTarget').textContent='الهدف اليومي: '+TARGET+' مرة';$('activeCount').textContent=c[a[0]]||0;renderSelector();renderCounterLog()}
function getSavedNames(){return load(KEYS.names,[])}
function renderNamesProgress(){const s=getSavedNames(),p=Math.round(s.length/names.length*100);$('miniNames').textContent=`${s.length} / ${names.length}`;if($('nameSaved')){$('nameSaved').textContent=s.length;$('namePercent').textContent=p+'%';$('nameRing').style.setProperty('--p',p+'%');$('nameFill').style.width=p+'%'}}
function renderNames(){const grid=$('namesGrid');if(!grid)return;const saved=getSavedNames();grid.innerHTML=names.map((n,i)=>`<button type="button" class="name-card ${saved.includes(i)?'saved':''}" data-name="${i}"><span class="name-number">${i+1}</span><span class="name-check">✓</span><span class="allah-name">${n[0]}</span><span class="name-meaning">${n[1]}</span></button>`).join('');grid.querySelectorAll('[data-name]').forEach(b=>b.onclick=()=>{const i=+b.dataset.name,s=getSavedNames(),p=s.indexOf(i);if(p<0){s.push(i);toast('تم حفظ: '+names[i][0]+' ✓')}else{s.splice(p,1);toast('تم إلغاء الحفظ')}s.sort((a,b)=>a-b);save(KEYS.names,s);renderNames();});renderNamesProgress()}
function getSavedHadith(){return load(KEYS.hadith,[])}
function renderHadith(){const list=$('hadithList');if(!list)return;const day=Math.floor((new Date()-new Date(new Date().getFullYear(),0,0))/86400000),pair=[hadiths[(day*2)%hadiths.length],hadiths[(day*2+1)%hadiths.length]],s=getSavedHadith(),p=Math.round(s.length/hadiths.length*100),todayKey=new Date().toISOString().slice(0,10);let daily=JSON.parse(localStorage.getItem('daily_hadith_done_v1')||'[]');daily=Array.isArray(daily)?daily:[];const isDone=daily.includes(todayKey);$('hadithDate').textContent=arDate(new Date());$('hadithSaved').textContent=s.length;$('hadithTotal').textContent=hadiths.length;$('hadithPercent').textContent=p+'%';$('hadithRing').style.setProperty('--p',p+'%');$('hadithFill').style.width=p+'%';list.innerHTML=`<div class="daily-learning-bar"><div class="daily-meta"><b>📅 حديثا اليوم · ${arDate(new Date())}</b><small>يظهر لك حديثان من مكتبة البرنامج يوميًا، مع المعنى العملي والشرح المختصر.</small></div><button type="button" class="daily-done-btn ${isDone?'done':''}" id="hadithDoneBtn">${isDone?'✓ أتممت اليوم':'أتممت حديث اليوم'}</button></div><p class="hadith-count-note">احفظ الحديث الذي تريد مراجعته لاحقًا، وسجّل إتمام درس اليوم عند الانتهاء.</p>`+pair.map((h,i)=>`<article class="hadith-card ${s.includes(h[0])?'saved':''}"><div class="hadith-head"><span class="hadith-number"><i>${i+1}</i>حديث اليوم</span><button type="button" class="save-hadith" data-hadith="${h[0]}">${s.includes(h[0])?'✓':'حفظ'}</button></div><p class="hadith-text">${h[1]}</p><p class="hadith-source">${h[2]}</p><p class="hadith-meaning"><b>المعنى والشرح:</b> ${h[3]}</p></article>`).join('');list.querySelectorAll('[data-hadith]').forEach(b=>b.onclick=()=>{const id=b.dataset.hadith,a=getSavedHadith(),i=a.indexOf(id);if(i<0){a.push(id);toast('تم حفظ الحديث ✓')}else{a.splice(i,1);toast('تم إلغاء حفظ الحديث')}save(KEYS.hadith,a);renderHadith()});list.querySelector('#hadithDoneBtn').onclick=()=>{let a=JSON.parse(localStorage.getItem('daily_hadith_done_v1')||'[]');if(!Array.isArray(a))a=[];if(!a.includes(todayKey))a.push(todayKey);a=a.slice(-60);localStorage.setItem('daily_hadith_done_v1',JSON.stringify(a));toast('تم تسجيل إتمام حديث اليوم ✓');renderHadith()}}
function showPage(id){document.querySelectorAll('.page').forEach(p=>{p.classList.remove('active');p.style.display='none'});const target=$(id+'Page');if(!target){toast('تعذر فتح الصفحة');return}target.classList.add('active');target.style.display='block';if(id==='prayer'){$('counterPage')?.classList.remove('show');$('prayerHome').style.display='block';renderPrayer()}if(id==='names')renderNames();if(id==='hadith')renderHadith();if(id==='prayerRecord')renderPrayerRecordPage();window.scrollTo({top:0,behavior:'smooth'})}
function renderAll(){renderWelcome();renderInspiration();renderCalendar();renderMood();renderTasks();renderHistory();renderNotes();renderStats();renderPrayer()}
function renderPicker(tabs,grid,onPick){const cats=Object.keys(emojiCategories);tabs.innerHTML='';function show(cat){grid.innerHTML=emojiCategories[cat].map(e=>`<button class="emoji-choice" type="button">${e}</button>`).join('');grid.querySelectorAll('.emoji-choice').forEach(b=>b.onclick=()=>onPick(b.textContent))}cats.forEach((cat,i)=>{const b=document.createElement('button');b.type='button';b.className='emoji-tab'+(i===0?' active':'');b.textContent=cat;b.onclick=()=>{tabs.querySelectorAll('.emoji-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');show(cat)};tabs.appendChild(b)});show(cats[0])}
document.querySelectorAll('.period').forEach(b=>b.onclick=()=>{document.querySelectorAll('.period').forEach(x=>x.classList.remove('active'));b.classList.add('active');view=b.dataset.view;renderCalendar()});
document.querySelectorAll('.mood-btn').forEach(b=>b.onclick=()=>{const m=load(KEYS.moods,{});m[dateKey(selectedDate)]=b.dataset.mood;save(KEYS.moods,m);renderMood()});
/* tasksTab / historyTab switching + rendering is bound once (see openHistory() below in the goals script). */
$('noteInput').oninput=saveNote;
$('saveNote').onclick=()=>{saveNote();toast('تم حفظ الملاحظة ✓')};
$('addStar').onclick=()=>{$('noteInput').value+=' ✨';saveNote()};
$('addHeart').onclick=()=>{$('noteInput').value+=' ❤️';saveNote()};
$('emojiToggle').onclick=()=>$('noteEmojiPanel')?.classList.toggle('show');
renderPicker($('noteEmojiTabs'),$('noteEmojiGrid'),e=>{$('noteInput').value+=e;saveNote();$('noteInput').focus()});
$('openTaskModal').onclick=()=>{$('taskNameInput').value='';selectedTaskIcon='⭐';$('selectedTaskIcon').textContent='⭐';$('taskEmojiPanel')?.classList.remove('show');$('taskOverlay')?.classList.add('show')};
$('taskEmojiToggle').onclick=()=>$('taskEmojiPanel')?.classList.toggle('show');
renderPicker($('taskEmojiTabs'),$('taskEmojiGrid'),e=>{selectedTaskIcon=e;$('selectedTaskIcon').textContent=e;$('taskEmojiPanel')?.classList.remove('show')});
$('cancelTask').onclick=()=>$('taskOverlay')?.classList.remove('show');
$('saveTask').onclick=()=>{const n=$('taskNameInput').value.trim();if(!n){toast('اكتب اسم المهمة أولًا');return}const a=taskData(selectedDate);a.push({id:'custom_'+Date.now(),name:n,icon:selectedTaskIcon,type:'مخصص',done:false});saveTaskData(selectedDate,a);$('taskOverlay')?.classList.remove('show');renderAll()};
$('openProfile').onclick=()=>{$('profileOverlay')?.classList.add('show');$('nameInput').value=load(KEYS.profile,{name:''}).name||''};
$('settingsProfile').onclick=()=>$('openProfile').click();
$('cancelProfile').onclick=()=>$('profileOverlay')?.classList.remove('show');
$('saveProfile').onclick=()=>{const old=load(KEYS.profile,{}),name=$('nameInput').value.trim(),file=$('imageInput').files[0],finish=image=>{save(KEYS.profile,{name,image:image||old.image||''});$('profileOverlay')?.classList.remove('show');renderWelcome()};if(file){const r=new FileReader();r.onload=e=>finish(e.target.result);r.readAsDataURL(file)}else finish('')};
document.querySelectorAll('.overlay').forEach(x=>x.onclick=e=>{if(e.target===x)x.classList.remove('show')});
$('openCounter').onclick=()=>{$('prayerHome').style.display='none';$('counterPage')?.classList.add('show');renderCounter()};
$('backToPrayer').onclick=()=>{$('counterPage')?.classList.remove('show');$('prayerHome').style.display='block';renderPrayer()};
$('openPrayerRecordBtn').onclick=()=>{prayerRecordDate=new Date();prayerRecordDate.setHours(12,0,0,0);showPage('prayerRecord')};
$('midQuranBtn').onclick=()=>toast('القرآن الكريم قريبًا بإذن الله');
$('midAzkarBtn').onclick=()=>showPage('adhkar');
$('openQiblaBtn').onclick=()=>showPage('qibla');
$('getLocationBtn').onclick=locatePrayer;
$('qiblaLocationButton').onclick=locatePrayer;
$('notificationButton').onclick=async()=>{const s=prayerSettings();if(!s.notifications&&'Notification'in window){const p=await Notification.requestPermission();if(p!=='granted')return toast('لم يتم السماح بالإشعارات')}s.notifications=!s.notifications;save(PRAYER_SETTINGS_KEY,s);renderPrayersToday();toast(s.notifications?'تم تفعيل تنبيهات الصلاة':'تم إيقاف تنبيهات الصلاة')};
$('muteButton').onclick=()=>{const s=prayerSettings();s.muted=!s.muted;save(PRAYER_SETTINGS_KEY,s);renderPrayersToday();toast(s.muted?'تم كتم صوت الأذان':'تم تشغيل صوت الأذان')};
updateRemaining();
setInterval(updateRemaining,1000);
$('tasbihButton').onclick=()=>{const c=todayCount(),a=adhkar.find(x=>x[0]===activeDhikr);c[a[0]]++;save(KEYS.tasbih,{...load(KEYS.tasbih,{}),[dateKey(new Date())]:c});if(navigator.vibrate)navigator.vibrate(10);renderCounter();renderPrayer()};
$('resetCurrentDhikr').onclick=()=>{const c=todayCount();c[activeDhikr]=0;save(KEYS.tasbih,{...load(KEYS.tasbih,{}),[dateKey(new Date())]:c});renderCounter();renderPrayer()};
$('openNames').onclick=()=>showPage('names');
$('openHadith').onclick=()=>showPage('hadith');
document.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>showPage(b.dataset.back));
document.querySelectorAll('.nav button[data-page]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.nav button[data-page]').forEach(x=>x.classList.remove('active'));b.classList.add('active');showPage(b.dataset.page)});
$('goalsNavBtn').onclick=()=>$('goalsOverlay')?.classList.add('open');
 document.querySelectorAll('.nav button').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.page;if(id){document.getElementById('goalsOverlay')?.classList.remove('open');document.querySelectorAll('.nav button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');showPage(id)}else if(btn.id==='goalsNavBtn'){document.getElementById('goalsOverlay')?.classList.add('open')}}));

 document.querySelectorAll('[data-goal-nav]').forEach(btn=>btn.addEventListener('click',()=>{const target=btn.dataset.goalNav;if(target==='goals')return;document.getElementById('goalsOverlay')?.classList.remove('open');if(target==='adhkar')showPage('adhkar');else showPage(target)}));

renderAll();


/* ===== Original inline script 3 ===== */

(function(){
const KEY='myGoals_v3',months=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
const empty=()=>({daily:[],monthly:[],yearly:[],ideas:''});const read=()=>{try{return JSON.parse(localStorage.getItem(KEY))||empty()}catch{return empty()}};let data=read(),selectedYearMonths=[];const now=new Date(),pad=n=>String(n).padStart(2,'0'),dateKey=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`,today=dateKey(now),uid=()=>crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random(),save=()=>localStorage.setItem(KEY,JSON.stringify(data)),esc=v=>{const e=document.createElement('div');e.textContent=v;return e.innerHTML};
function monthlyKey(){return `${document.getElementById('monthlyYear').value}-${pad(Number(document.getElementById('monthlyMonth').value)+1)}`}function pct(a){return a.length?Math.round(a.filter(x=>x.done).length/a.length*100):0}function updateProgress(){setP('dailyPercent',data.daily.filter(x=>x.date===(document.getElementById('dailyDate').value||today)));setP('monthlyPercent',data.monthly.filter(x=>x.month===monthlyKey()));setP('yearlyPercent',data.yearly.filter(x=>x.year===Number(document.getElementById('yearlyYear').value)))}function setP(id,a){const e=document.getElementById(id),p=pct(a);e.textContent=p+'%';e.style.setProperty('--pct',p+'%')}
function syncGoalTasksForDate(dateStr,forceDone=false){
  if(typeof taskData!=='function'||typeof saveTaskData!=='function'||typeof data==='undefined') return;
  const d=new Date(dateStr+'T12:00:00');
  const arr=taskData(d);
  const linked=data.daily.filter(g=>g.date===dateStr&&g.link);
  /* Deleted linked tasks are tombstoned. They must NEVER be recreated by a later sync. */
  const visibleLinked=linked.filter(g=>!isDeletedLinkedTask('goal-'+g.id,dateStr));
  const validIds=new Set(visibleLinked.map(g=>'goal-'+g.id));
  for(let i=arr.length-1;i>=0;i--){
    const id=String(arr[i].id||'');
    if(id.startsWith('goal-') && !validIds.has(id)) arr.splice(i,1);
  }
  visibleLinked.forEach(g=>{
    const id='goal-'+g.id;
    let t=arr.find(x=>String(x.id)===id);
    if(!t){
      arr.push({id,name:g.title,icon:g.icon||'🎯',type:'مخصص',done:!!g.done,note:g.note||''});
    }else{
      /* Merge only the goal's editable content; preserve the task's completion state. */
      const wasDone=!!t.done;
      t.name=g.title; t.icon=g.icon||'🎯'; t.type='مخصص';
      if(g.note!==undefined) t.note=g.note||'';
      if(forceDone) t.done=!!g.done; else t.done=wasDone;
    }
  });
  saveTaskData(d,arr);
  if(typeof renderV6Tasks==='function') renderV6Tasks();
  else if(typeof renderHomeMainTasks==='function') renderHomeMainTasks();
}
function renderDaily(){const d=document.getElementById('dailyDate').value||today,a=data.daily.filter(x=>x.date===d),list=document.getElementById('dailyList');list.innerHTML=a.length?a.map(x=>`<article class="goal ${x.done?'done':''}"><input class="goal-check" type="checkbox" data-daily-check="${x.id}" ${x.done?'checked':''}><span class="goal-icon">${esc(x.icon)}</span><div><div class="goal-title">${esc(x.title)}</div><small class="goal-meta">${x.link?'مرتبط بالمهام الرئيسية':'هدف خاص'}</small></div><button class="danger" data-daily-delete="${x.id}">حذف</button></article>`).join(''):'<div class="empty">لا توجد أهداف لهذا اليوم. ابدأ بهدف صغير يصنع فرقًا.</div>';document.querySelectorAll('[data-daily-check]').forEach(b=>b.onchange=()=>{const x=data.daily.find(x=>x.id===b.dataset.dailyCheck);if(x){x.done=b.checked;save();renderDaily();updateProgress();if(x.link)syncGoalTasksForDate(x.date,true)}});document.querySelectorAll('[data-daily-delete]').forEach(b=>b.onclick=()=>{const removed=data.daily.find(x=>x.id===b.dataset.dailyDelete);data.daily=data.daily.filter(x=>x.id!==b.dataset.dailyDelete);save();renderDaily();updateProgress();if(removed&&removed.link)syncGoalTasksForDate(removed.date)});updateProgress()}
function renderMonthly(){const k=monthlyKey(),a=data.monthly.filter(x=>x.month===k),list=document.getElementById('monthlyList');list.innerHTML=a.length?a.map(x=>`<article class="goal ${x.done?'done':''}"><input class="goal-check" type="checkbox" data-monthly-check="${x.id}" ${x.done?'checked':''}><span class="goal-icon">${esc(x.icon)}</span><div><div class="goal-title">${esc(x.title)}</div><small class="goal-meta">${months[Number(k.slice(5))-1]} ${k.slice(0,4)}</small>${x.note?`<small class="goal-note-preview">📝 ${esc(x.note)}</small>`:''}</div><button class="danger" data-monthly-delete="${x.id}">حذف</button></article>`).join(''):'<div class="empty">أضف أول هدف لهذا الشهر.</div>';document.querySelectorAll('[data-monthly-check]').forEach(b=>b.onchange=()=>{const x=data.monthly.find(x=>x.id===b.dataset.monthlyCheck);if(x){x.done=b.checked;save();renderMonthly()}});document.querySelectorAll('[data-monthly-delete]').forEach(b=>b.onclick=()=>{data.monthly=data.monthly.filter(x=>x.id!==b.dataset.monthlyDelete);save();renderMonthly()});updateProgress()}
function renderYearGrid(){document.getElementById('yearGrid').innerHTML=months.map((m,i)=>`<button type="button" class="month-chip ${selectedYearMonths.includes(i)?'selected':''}" data-year-month="${i}">${m}</button>`).join('');document.querySelectorAll('[data-year-month]').forEach(b=>b.onclick=()=>{const i=+b.dataset.yearMonth;selectedYearMonths=selectedYearMonths.includes(i)?selectedYearMonths.filter(x=>x!==i):[...selectedYearMonths,i];renderYearGrid()})}
function renderYearly(){const y=+document.getElementById('yearlyYear').value,a=data.yearly.filter(x=>x.year===y),list=document.getElementById('yearlyList');list.innerHTML=a.length?a.map(x=>`<article class="year-item ${x.done?'done':''}"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><div><strong>${esc(x.icon)} ${esc(x.title)}</strong><small>${x.months.length?x.months.map(m=>months[m]).join('، '):'كل شهور السنة'}</small>${x.note?`<small class="goal-note-preview">📝 ${esc(x.note)}</small>`:''}</div><div><button class="ghost" data-yearly-done="${x.id}">${x.done?'✓ مكتمل':'تم الإنجاز'}</button><button class="danger" data-yearly-delete="${x.id}">حذف</button></div></div></article>`).join(''):'<div class="empty">حدد الشهور وأضف هدفك السنوي.</div>';document.querySelectorAll('[data-yearly-done]').forEach(b=>b.onclick=()=>{const x=data.yearly.find(x=>x.id===b.dataset.yearlyDone);if(x){x.done=!x.done;save();renderYearly()}});document.querySelectorAll('[data-yearly-delete]').forEach(b=>b.onclick=()=>{data.yearly=data.yearly.filter(x=>x.id!==b.dataset.yearlyDelete);save();renderYearly()});updateProgress()}
function renderCalendar(){const y=viewDate.getFullYear(),m=viewDate.getMonth(),first=(new Date(y,m,1).getDay()+6)%7,last=new Date(y,m+1,0).getDate(),prev=new Date(y,m,0).getDate(),sel=document.getElementById('dailyDate').value||today;document.getElementById('calendarMonthTitle').textContent=`${months[m]} ${y}`;let c='';for(let i=0;i<first;i++)c+=`<button type="button" class="muted">${prev-first+i+1}</button>`;for(let d=1;d<=last;d++){const k=`${y}-${pad(m+1)}-${pad(d)}`,cl=[k===sel?'selected':'',k===today?'today':''].join(' ');c+=`<button type="button" class="${cl}" data-calendar-date="${k}">${d}</button>`}document.getElementById('monthCalendar').innerHTML=c;document.querySelectorAll('[data-calendar-date]').forEach(b=>b.onclick=()=>{document.getElementById('dailyDate').value=b.dataset.calendarDate;renderCalendar();renderDaily()})}
function renderSeason(){const m=now.getMonth(),box=document.querySelector('.season-widget'),title=document.getElementById('seasonTitle'),tip=document.getElementById('seasonTip');if(!box)return;box.classList.remove('autumn','winter','summer');if(m>=2&&m<=4){title.textContent='ربيع هادئ';tip.textContent='خطط بخفة واترك مساحة للنمو.'}else if(m>=5&&m<=7){box.classList.add('summer');title.textContent='صيف مشرق';tip.textContent='استثمر طاقتك في خطوة جديدة.'}else if(m>=8&&m<=10){box.classList.add('autumn');title.textContent='خريف متزن';tip.textContent='رتّب أولوياتك واترك ما لا يخدمك.'}else{box.classList.add('winter');title.textContent='شتاء دافئ';tip.textContent='ابنِ عاداتك بهدوء واستمرارية.'}}
let viewDate=new Date();viewDate.setDate(1);
document.querySelectorAll('.mg-tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.mg-tab').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.panel').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab+'Panel'))});document.getElementById('todayBtn').onclick=()=>{document.getElementById('dailyDate').value=today;viewDate=new Date();viewDate.setDate(1);renderCalendar();renderDaily()};document.getElementById('dailyDate').onchange=()=>{const d=new Date(document.getElementById('dailyDate').value+'T12:00:00');if(!isNaN(d)){selectedDate=new Date(d.getFullYear(),d.getMonth(),d.getDate(),12);viewDate=new Date(d.getFullYear(),d.getMonth(),1);renderCalendar();renderDaily();if(typeof renderTasks==='function')renderTasks();if(typeof renderNotes==='function')renderNotes();syncGoalTasksForDate(document.getElementById('dailyDate').value)}};document.getElementById('prevCalendar').onclick=()=>{viewDate.setMonth(viewDate.getMonth()-1);renderCalendar()};document.getElementById('nextCalendar').onclick=()=>{viewDate.setMonth(viewDate.getMonth()+1);renderCalendar()};document.getElementById('monthlyYear').onchange=renderMonthly;document.getElementById('monthlyMonth').onchange=renderMonthly;document.getElementById('yearlyYear').onchange=()=>{selectedYearMonths=[];renderYearGrid();renderYearly()};
document.getElementById('dailyForm').onsubmit=e=>{e.preventDefault();const title=document.getElementById('dailyTitle').value.trim();if(!title)return;const goalDate=document.getElementById('dailyDate').value||today;data.daily.push({id:uid(),title,icon:document.getElementById('dailyIcon').value||'🎯',date:goalDate,link:document.getElementById('dailyLinkCheck').checked,done:false,note:document.getElementById('dailyGoalNoteInput')?.value.trim()||''});save();document.getElementById('dailyTitle').value='';document.getElementById('dailyIcon').value='🎯';document.getElementById('dailyLinkCheck').checked=false;if(document.getElementById('dailyGoalNoteInput'))document.getElementById('dailyGoalNoteInput').value='';const gd=new Date(goalDate+'T12:00:00');if(!isNaN(gd)){selectedDate=gd;viewDate=new Date(gd.getFullYear(),gd.getMonth(),1)}renderDaily();renderCalendar();if(goalDate===dateKey(selectedDate)){syncGoalTasksForDate(goalDate,true)}else{syncGoalTasksForDate(goalDate,true)}if(typeof renderTasks==='function'&&goalDate===dateKey(selectedDate))renderTasks();if(typeof renderAll==='function'&&goalDate===dateKey(selectedDate))renderAll()};document.getElementById('monthlyForm').onsubmit=e=>{e.preventDefault();const title=document.getElementById('monthlyTitle').value.trim();if(!title)return;data.monthly.push({id:uid(),title,icon:document.getElementById('monthlyIcon').value||'📌',month:monthlyKey(),done:false,note:document.getElementById('monthlyGoalNoteInput')?.value.trim()||''});save();document.getElementById('monthlyTitle').value='';if(document.getElementById('monthlyGoalNoteInput'))document.getElementById('monthlyGoalNoteInput').value='';renderMonthly()};document.getElementById('yearlyForm').onsubmit=e=>{e.preventDefault();const title=document.getElementById('yearlyTitle').value.trim();if(!title)return;data.yearly.push({id:uid(),title,icon:document.getElementById('yearlyIcon').value||'🌟',year:+document.getElementById('yearlyYear').value,months:selectedYearMonths.slice(),done:false,note:document.getElementById('yearlyGoalNoteInput')?.value.trim()||''});save();document.getElementById('yearlyTitle').value='';if(document.getElementById('yearlyGoalNoteInput'))document.getElementById('yearlyGoalNoteInput').value='';renderYearly()};document.querySelectorAll('[data-icon]').forEach(b=>b.onclick=()=>{document.getElementById('dailyIcon').value=b.dataset.icon;document.getElementById('dailyTitle').value=b.dataset.title});document.querySelectorAll('[data-month-icon]').forEach(b=>b.onclick=()=>{document.getElementById('monthlyIcon').value=b.dataset.monthIcon;document.getElementById('monthlyTitle').value=b.dataset.monthTitle});document.querySelectorAll('[data-year-icon]').forEach(b=>b.onclick=()=>{document.getElementById('yearlyIcon').value=b.dataset.yearIcon;document.getElementById('yearlyTitle').value=b.dataset.yearTitle});document.getElementById('homeBtn').onclick=()=>document.getElementById('goalsOverlay')?.classList.remove('open');
const icons=['🎯','📖','🕌','📿','🎓','⚽','🏃','💪','📚','💰','🧠','❤️','⭐','🌟','🌱','✈️','🏆','✅','📝','💡','📅','⏰','🔥','🎨','🎵','💬','📱','💻','🏠','🚗','🍎','☕','🎮','📈','🤲','🧘','🛒','🎁','🔔','🌙','☀️','🧹','🛠️','🧪','🎸','🌍','🧳','🕋','🚀','🧩','📌','🔑','🗓️','🗣️','👥','💎','🌈','🪴','📦','🧾','🏋️'];const picker=document.createElement('div');picker.className='icon-picker';picker.innerHTML=icons.map(i=>`<button type="button" data-pick="${i}">${i}</button>`).join('');document.body.appendChild(picker);let target=null;document.querySelectorAll('.icon-trigger').forEach(b=>b.onclick=e=>{e.stopPropagation();target=document.getElementById(b.dataset.iconTarget);const r=b.getBoundingClientRect();picker.style.top=Math.min(innerHeight-190,r.bottom+5)+'px';picker.style.left=Math.max(8,Math.min(innerWidth-300,r.left))+'px';picker.classList.toggle('open')});picker.onclick=e=>{const b=e.target.closest('[data-pick]');if(!b||!target)return;target.value=b.dataset.pick;target.previousElementSibling.textContent=b.dataset.pick;picker.classList.remove('open')};document.addEventListener('click',()=>picker.classList.remove('open'));

function setup(){const d=(typeof selectedDate!=='undefined'&&selectedDate instanceof Date)?selectedDate:new Date();const k=dateKey(d);document.getElementById('dailyDate').value=k;viewDate=new Date(d.getFullYear(),d.getMonth(),1);document.getElementById('monthlyYear').value=now.getFullYear();document.getElementById('monthlyMonth').innerHTML=months.map((m,i)=>`<option value="${i}">${m}</option>`).join('');document.getElementById('monthlyMonth').value=now.getMonth();document.getElementById('yearlyYear').value=now.getFullYear();renderDaily();renderMonthly();renderYearGrid();renderYearly();renderCalendar();renderSeason();syncGoalTasksForDate(k)}setup();
})();

/* ===== Unified history + goals ideas controller ===== */
(function(){
  'use strict';
  const q=id=>document.getElementById(id);
  const esc=v=>{const e=document.createElement('div');e.textContent=v??'';return e.innerHTML};

  /* ---------- History: one controller, screenshot-style cards ---------- */
  function renderHistoryCards(){
    const host=q('historyPanel'); if(!host)return;
    const tasks=(()=>{try{return JSON.parse(localStorage.getItem('habit_tasks_v6')||'{}')}catch(_){return {}}})();
    const notes=(()=>{try{return JSON.parse(localStorage.getItem('habit_notes_v6')||'{}')}catch(_){return {}}})();
    const today=new Date(); today.setHours(12,0,0,0);
    const days=[];
    for(let i=0;i<30;i++){
      const d=new Date(today); d.setDate(d.getDate()-i);
      const k=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      let arr=tasks[k]; if(arr&&arr.tasks)arr=arr.tasks; if(!Array.isArray(arr))arr=[];
      const note=notes[k]||'';
      if(arr.length||String(note).trim())days.push({k,arr,note});
    }
    host.innerHTML=`<div class="history-paper">
      <h1>سجل الإنجاز اليومي</h1>
      <p class="history-subtitle">المهام والملاحظات المحفوظة في الأيام السابقة</p>
      <div class="history-actions">
        <button type="button" id="historyPrintBtn">PDF طباعة / حفظ</button>
        <button type="button" class="secondary" id="historyRefreshBtn">تحديث السجل</button>
      </div>
      <div class="history-section-title">سجل المهام والإنجاز</div>
      <div class="history-cards">${days.length?days.map(({k,arr,note})=>{
        const done=arr.filter(x=>x&&x.done).length;
        const pills=arr.map(x=>`<span class="history-task-pill ${x.done?'done':''}">${esc(x.icon||'🎯')} ${esc(x.name||x.text||'مهمة')}</span>`).join('');
        return `<article class="history-day-card">
          <div class="history-day-head"><strong>${k}</strong><span>${done} من ${arr.length} مكتملة</span></div>
          <div class="history-task-pills">${pills||'<span class="history-task-pill empty">لا توجد مهام</span>'}</div>
          ${String(note).trim()?`<div class="history-day-note">📝 ${esc(note)}</div>`:''}
        </article>`;
      }).join(''):'<div class="history-empty-card">لا يوجد سجل محفوظ حتى الآن.</div>'}</div>
    </div>`;
    q('historyPrintBtn').onclick=()=>window.print();
    q('historyRefreshBtn').onclick=renderHistoryCards;
  }

  function openHistory(){
    q('tasksTab')?.classList.remove('active'); q('historyTab')?.classList.add('active');
    q('tasksPanel')?.classList.add('hidden'); q('historyPanel')?.classList.remove('hidden');
    renderHistoryCards();
  }
  q('historyTab')?.addEventListener('click',openHistory,true);
  q('tasksTab')?.addEventListener('click',()=>{q('historyPanel')?.classList.add('hidden');q('tasksPanel')?.classList.remove('hidden');},true);

  /* ---------- Unified ideas controller: daily + monthly + yearly ---------- */
  const PERIOD_KEY='goal_period_ideas_v1';
  const DAILY_KEY='daily_goal_ideas_by_date_v34';
  const read=(key,def={})=>{try{const v=JSON.parse(localStorage.getItem(key));return v&&typeof v==='object'?v:def}catch(_){return def}};
  const write=(key,v)=>{try{localStorage.setItem(key,JSON.stringify(v))}catch(_) {}};

  /* WhatsApp-style compact emoji categories. One controller only. */
  const IDEA_EMOJIS={
    '😀':['😀','😃','😄','😁','😆','😅','😂','🤣','😊','🙂','🙃','😉','😌','😍','🥰','😘','😎','🤩','🥳','😇','🤗','🤔','😐','😴','😮','😢','😭','😡','🤍','❤️'],
    '❤️':['❤️','🩷','🧡','💛','💚','💙','💜','🖤','🩶','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','💯'],
    '🎯':['🎯','⭐','🌟','✨','🔥','💡','🎉','🎊','🏆','🥇','🥈','💪','🌱','📚','📝','📌','📖','🚀','💎','🎯','✅','❌','⚡','🔔'],
    '🙏':['🙏','🤲','🕌','📿','🕋','☀️','🌙','🌿','🌸','🤍','❤️','📖','🕊️','☕','🍃','🌺','🌷','🌹'],
    '🍎':['🍎','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍒','🥝','🥑','🥕','🥦','🍅','🍞','☕','🍵','🥤'],
    '⚽':['⚽','🏀','🏈','⚾','🎾','🏐','🥊','🏋️','🚴','🏃','🧘','🧗','🏊','🚶','🥇','🏆']
  };

  function periodKey(type){
    const year=q(type==='monthly'?'monthlyYear':'yearlyYear')?.value||new Date().getFullYear();
    if(type==='monthly'){
      const month=String(Number(q('monthlyMonth')?.value||new Date().getMonth())+1).padStart(2,'0');
      return `monthly:${year}-${month}`;
    }
    return `yearly:${year}`;
  }

  function createPeriodIdeasBox(type,mountId,title,description){
    const mount=q(mountId); if(!mount)return null;
    let box=mount.querySelector('.period-ideas-box');
    if(!box){
      box=document.createElement('section');
      box.className='period-ideas-box';
      box.dataset.type=type;
      box.innerHTML=`<h3>💡 ${title}</h3><p>${description}</p><textarea placeholder="اكتب أفكارك هنا..."></textarea><div class="period-ideas-actions"><div class="period-emoji-wrap"><button type="button" class="period-emoji-btn" aria-label="إضافة إيموجي" title="إضافة إيموجي">😊</button><div class="period-emoji-panel" role="dialog"><div class="period-emoji-tabs"></div><div class="period-emoji-grid"></div></div></div><span class="period-ideas-status"></span><button type="button" class="period-ideas-save">حفظ الأفكار</button></div>`;
      mount.appendChild(box);
    } else {
      box.dataset.type=type;
    }
    return box;
  }

  function addEmojiPicker(box,textarea){
    if(!box||!textarea)return;
    const tools=box.querySelector('.period-ideas-actions'); if(!tools)return;
    let wrap=box.querySelector('.period-emoji-wrap');
    if(!wrap){
      wrap=document.createElement('div');
      wrap.className='period-emoji-wrap';
      tools.insertBefore(wrap,tools.firstChild);
    }
    wrap.innerHTML='<button type="button" class="period-emoji-btn" aria-label="إضافة إيموجي" title="إضافة إيموجي">😊</button><div class="period-emoji-panel" role="dialog"><div class="period-emoji-tabs"></div><div class="period-emoji-grid"></div></div>';
    const btn=wrap.querySelector('.period-emoji-btn');
    const panel=wrap.querySelector('.period-emoji-panel');
    const tabs=wrap.querySelector('.period-emoji-tabs');
    const grid=wrap.querySelector('.period-emoji-grid');
    if(!btn||!panel||!tabs||!grid)return;

    const cats=Object.keys(IDEA_EMOJIS);
    function show(cat){
      tabs.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x.dataset.cat===cat));
      grid.innerHTML=(IDEA_EMOJIS[cat]||[]).map(e=>`<button type="button" aria-label="${e}">${e}</button>`).join('');
    }
    tabs.innerHTML=cats.map((cat,i)=>`<button type="button" data-cat="${cat}" class="${i===0?'active':''}" title="${cat}">${cat}</button>`).join('');
    show(cats[0]);

    /* Robust delegated controller: works even when the goals UI re-renders. */
    btn.onclick=(e)=>{
      e.preventDefault();
      e.stopPropagation();
      const willOpen=!panel.classList.contains('open');
      document.querySelectorAll('.period-emoji-panel.open').forEach(x=>x.classList.remove('open'));
      if(willOpen){
        panel.classList.add('open');
        panel.style.display='block';
      }
    };
    tabs.onclick=(e)=>{
      const tab=e.target.closest('button[data-cat]');
      if(!tab)return;
      e.preventDefault(); e.stopPropagation();
      show(tab.dataset.cat);
    };
    grid.onclick=(e)=>{
      const emojiBtn=e.target.closest('button');
      if(!emojiBtn)return;
      e.preventDefault(); e.stopPropagation();
      const value=emojiBtn.textContent||'';
      const start=textarea.selectionStart==null?textarea.value.length:textarea.selectionStart;
      const end=textarea.selectionEnd==null?start:textarea.selectionEnd;
      textarea.value=textarea.value.slice(0,start)+value+textarea.value.slice(end);
      textarea.dispatchEvent(new Event('input',{bubbles:true}));
      textarea.focus();
      const next=start+value.length;
      try{textarea.setSelectionRange(next,next)}catch(_){ }
      panel.classList.remove('open');
      panel.style.display='';
    };

    /* The same three quick icons shown in the main notes box. */
    let quick=tools.querySelector('.period-quick-icons');
    if(!quick){
      quick=document.createElement('div');
      quick.className='period-quick-icons';
      quick.innerHTML='<button type="button" data-quick-emoji="❤️" aria-label="قلب">❤️</button><button type="button" data-quick-emoji="✨" aria-label="نجوم">✨</button><button type="button" data-quick-emoji="😊" aria-label="ابتسامة">😊</button>';
      tools.insertBefore(quick,wrap);
    }
    const insertQuickEmoji=(b,e)=>{
      if(!b)return;
      if(e){e.preventDefault();e.stopPropagation();}
      const value=b.dataset.quickEmoji||b.textContent||'';
      if(!value)return;
      const focused=document.activeElement===textarea;
      const start=focused && typeof textarea.selectionStart==='number' ? textarea.selectionStart : textarea.value.length;
      const end=focused && typeof textarea.selectionEnd==='number' ? textarea.selectionEnd : start;
      textarea.focus({preventScroll:true});
      textarea.value=textarea.value.slice(0,start)+value+textarea.value.slice(end);
      textarea.dispatchEvent(new Event('input',{bubbles:true}));
      try{const next=start+value.length;textarea.setSelectionRange(next,next)}catch(_){ }
    };
    quick.onpointerdown=(e)=>{
      const b=e.target.closest('[data-quick-emoji]');
      if(!b)return;
      e.preventDefault();
    };
    quick.onclick=(e)=>{
      const b=e.target.closest('[data-quick-emoji]');
      if(!b)return;
      insertQuickEmoji(b,e);
    };
  }

  function bindPeriodBox(type,box){
    if(!box)return;
    const text=box.querySelector('textarea'),saveBtn=box.querySelector('.period-ideas-save'),status=box.querySelector('.period-ideas-status');
    if(!text)return;
    addEmojiPicker(box,text);
    if(!text.dataset.periodIdeasBound){
      text.dataset.periodIdeasBound='1';
      text.addEventListener('input',()=>{
        const db=read(PERIOD_KEY,{}),value=text.value;
        if(value.trim())db[periodKey(type)]=value; else delete db[periodKey(type)];
        write(PERIOD_KEY,db);
      });
    }
    if(saveBtn&&!saveBtn.dataset.bound){
      saveBtn.dataset.bound='1';
      saveBtn.addEventListener('click',()=>{
        text.dispatchEvent(new Event('input',{bubbles:true}));
        if(status){status.textContent='تم الحفظ ✓';setTimeout(()=>{status.textContent=''},900)}
      });
    }
  }

  function loadPeriodIdeas(type){
    const mountId=type==='monthly'?'monthlyIdeasMount':'yearlyIdeasMount';
    const box=q(mountId)?.querySelector('.period-ideas-box'); if(!box)return;
    const text=box.querySelector('textarea'); if(!text||document.activeElement===text)return;
    text.value=read(PERIOD_KEY,{})[periodKey(type)]||'';
  }

  function ensurePeriodIdeas(){
    const monthly=createPeriodIdeasBox('monthly','monthlyIdeasMount','مساحة أفكاري','أفكارك وملاحظاتك الخاصة بهذا الشهر فقط.');
    const yearly=createPeriodIdeasBox('yearly','yearlyIdeasMount','مساحة أفكاري','أفكارك وملاحظاتك الخاصة بهذه السنة فقط.');
    bindPeriodBox('monthly',monthly); bindPeriodBox('yearly',yearly);
    loadPeriodIdeas('monthly'); loadPeriodIdeas('yearly');
  }

  function bindDailyEmoji(){
    const box=q('dailyIdeasBox'),text=q('dailyIdeasText'); if(!box||!text)return;
    addEmojiPicker(box,text);
  }
  /* Expose the single emoji controller so the daily-goals module can bind it after creating its box. */
  window.bindPeriodIdeasEmoji = addEmojiPicker;

  document.addEventListener('click',e=>{
    if(!e.target.closest('.period-emoji-wrap'))document.querySelectorAll('.period-emoji-panel.open').forEach(x=>{x.classList.remove('open');x.style.display=''});
  });
  /* One capture-level controller for the three quick emoji buttons. */
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-quick-emoji]'); if(!b)return;
    const box=b.closest('.period-ideas-box'),textarea=box?.querySelector('textarea'); if(!textarea)return;
    e.preventDefault();e.stopPropagation();
    const value=b.dataset.quickEmoji||b.textContent||'',focused=document.activeElement===textarea;
    const start=focused&&typeof textarea.selectionStart==='number'?textarea.selectionStart:textarea.value.length;
    const end=focused&&typeof textarea.selectionEnd==='number'?textarea.selectionEnd:start;
    textarea.focus({preventScroll:true}); textarea.value=textarea.value.slice(0,start)+value+textarea.value.slice(end);
    textarea.dispatchEvent(new Event('input',{bubbles:true}));
    try{const next=start+value.length;textarea.setSelectionRange(next,next)}catch(_){}
  },true);

  ensurePeriodIdeas();
  bindDailyEmoji();
  q('dailyDate')?.addEventListener('change',()=>setTimeout(bindDailyEmoji,0));
  q('todayBtn')?.addEventListener('click',()=>setTimeout(bindDailyEmoji,0));
  q('monthlyYear')?.addEventListener('change',()=>setTimeout(()=>{ensurePeriodIdeas();loadPeriodIdeas('monthly')},0));
  q('monthlyMonth')?.addEventListener('change',()=>setTimeout(()=>loadPeriodIdeas('monthly'),0));
  q('yearlyYear')?.addEventListener('change',()=>setTimeout(()=>loadPeriodIdeas('yearly'),0));

  window.renderUnifiedHistory=renderHistoryCards;
})();

/* v4 runtime: global navigation, adhan option, and prayer persistence polish */
(function(){
  const q=id=>document.getElementById(id);
  // Make every internal view return home through the same bottom navigation.
  document.querySelectorAll('.nav button[data-page]').forEach(b=>{b.addEventListener('click',()=>{const id=b.dataset.page;if(typeof showPage==='function'){showPage(id);document.querySelectorAll('.nav button').forEach(x=>x.classList.toggle('active',x===b))}})});
  const backIds=['backToPrayer','backToHome'];backIds.forEach(id=>{const b=q(id);if(b)b.addEventListener('click',()=>typeof showPage==='function'&&showPage(id==='backToPrayer'?'prayer':'home'))});
  // Audio permission and a gentle short adhan tone using Web Audio after user opt-in.
  function adhanTone(){const s=typeof prayerSettings==='function'?prayerSettings():{};if(s.muted)return;try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const c=new C(),o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=523.25;g.gain.setValueAtTime(.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(.08,c.currentTime+.05);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+1.4);o.connect(g).connect(c.destination);o.start();o.stop(c.currentTime+1.45)}catch(_){}}
  function updateAdhanStatus(){let el=document.querySelector('.adhan-status');if(!el){const row=document.querySelector('.location-row');if(row){el=document.createElement('div');el.className='adhan-status';row.insertAdjacentElement('afterend',el)}}if(el){const s=typeof prayerSettings==='function'?prayerSettings():{};el.textContent=s.muted?'الأذان مكتوم':'الأذان مفعّل عند تسجيل الصلاة'}}
  const mute=q('muteButton');if(mute){const old=mute.onclick;mute.addEventListener('click',()=>setTimeout(updateAdhanStatus,20));updateAdhanStatus()}
  // Play the short permission-approved tone when a prayer is marked complete.
  const list=q('prayersList');if(list){list.addEventListener('click',e=>{if(e.target.closest('.pray-check'))adhanTone()})}
  // Ensure the nav is visible after every page transition.
  const oldShow=window.showPage;if(typeof oldShow==='function'){window.showPage=function(id){oldShow(id);setTimeout(()=>document.querySelector('.nav')?.classList.add('global-nav-visible'),0)}}
  window.addEventListener('load',()=>{document.querySelector('.nav')?.classList.add('global-nav-visible');updateAdhanStatus()});
})();


/* v5 runtime */
(function(){
  const q=id=>document.getElementById(id);
  const sirah=q('openSirah');if(sirah)sirah.addEventListener('click',()=>typeof showPage==='function'&&showPage('sirah'));
  // The complete prayer card records the prayer; the small check remains a visual affordance.
  const list=q('prayersList');if(list){list.addEventListener('click',e=>{const card=e.target.closest('.pt-prayer');if(!card||e.target.closest('.pray-check'))return;const check=card.querySelector('.pray-check');if(check)check.click()})}
  // Re-apply a stable fixed navigation after internal page transitions.
  const nav=document.querySelector('.nav');if(nav){nav.classList.add('global-nav-visible');nav.querySelectorAll('button').forEach(b=>b.style.cursor='pointer')}
  const oldShow=window.showPage;if(typeof oldShow==='function'&&!window.__homefitV5Show){window.__homefitV5Show=true;window.showPage=function(id){oldShow(id);setTimeout(()=>{document.querySelector('.nav')?.classList.add('global-nav-visible');window.scrollTo({top:0,behavior:'smooth'})},20)}}
})();



/* ===== Original inline script 4 ===== */

(function(){
  const modal=document.getElementById('libraryModal');
  if(!modal)return;
  const title=document.getElementById('libraryDialogTitle'),sub=document.getElementById('libraryDialogSubtitle'),text=document.getElementById('libraryDialogText'),source=document.getElementById('libraryDialogSource');
  function close(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
  document.querySelectorAll('.sirah-card[data-story-title]').forEach(card=>card.addEventListener('click',e=>{
    if(e.target.closest('button'))return;
    title.textContent=card.dataset.storyTitle;sub.textContent='قراءة قصصية من مكتبة السيرة والقصص';text.textContent=card.dataset.storyText;source.textContent=card.dataset.storySource;modal.classList.add('open');modal.setAttribute('aria-hidden','false');
  }));
  document.getElementById('libraryClose').onclick=close;
  modal.addEventListener('click',e=>{if(e.target===modal)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  document.getElementById('libraryPrint').onclick=()=>window.print();
})();


/* ===== Original inline script 5 ===== */

(function(){
  const stories=[
    {title:'قصة أصحاب الفيل',type:'قصة قرآنية',verse:'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ۝ أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ ۝ وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ۝ تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ ۝ فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ ۝',source:'سورة الفيل 105:1–5',parts:[['المشهد الأول','كان أبرهة ملكًا على اليمن، ورأى الناس يقصدون الكعبة للحج، فبنى كنيسة عظيمة يريد أن يصرف العرب عن بيت الله. فلما لم يحقق ما أراد، عزم على هدم الكعبة، وجهز جيشًا كبيرًا يتقدمه فيل ضخم.'],['المشهد الثاني','سار الجيش نحو مكة، وخرج أهلها إلى الجبال يحتمون، وكان في مقدمتهم عبد المطلب جد النبي ﷺ. أخذ أبرهة بعض أموال أهل مكة، ومنها إبل لعبد المطلب، فجاءه عبد المطلب يطلب إبله، ثم قال إن للبيت ربًا يحميه.'],['المشهد الثالث','لما اقترب الجيش من مكة، برك الفيل ولم يتقدم نحو الكعبة، فإذا وُجّه إلى جهة أخرى قام مسرعًا. أرسل الله طيرًا أبابيل تحمل حجارة صغيرة من سجيل، فأصابت الجيش، فجعلهم الله كعصف مأكول، وحفظ بيته الحرام.']],lesson:['حماية الله لبيته وأوليائه تكون بحكمته.','القوة والعدد لا يغنيان عن الحق.','من أعظم أسباب النصر الثقة بالله مع الأخذ بالأسباب.']},
    {title:'قصة موسى وفرعون',type:'قصة قرآنية',verse:'وَنُرِيدُ أَن نَّمُنَّ عَلَى الَّذِينَ اسْتُضْعِفُوا فِي الْأَرْضِ وَنَجْعَلَهُمْ أَئِمَّةً وَنَجْعَلَهُمُ الْوَارِثِينَ ۝',source:'سورة القصص 28:5',parts:[['البداية','كان فرعون يقتل أبناء بني إسرائيل ويستحيي نساءهم خوفًا على ملكه. ولدت أم موسى طفلها، فأوحى الله إليها أن ترضعه، فإذا خافت عليه تضعه في التابوت وتلقيه في اليم، ووعدها أن يرده إليها ويجعله من المرسلين.'],['في بيت فرعون','التقط آل فرعون موسى، فصار في بيت من كان يطلب قتله، وألقى الله عليه المحبة. رفض موسى المراضع حتى دلت أخته على أمه، فعاد إليها لترضعه وقلبها مطمئن بوعد الله.'],['الرسالة والنجاة','كبر موسى ثم خرج من مصر، وعاد رسولًا إلى فرعون مع أخيه هارون. أيده الله بالآيات، ونجّى بني إسرائيل، وشق البحر لهم، وأغرق فرعون وجنوده عندما طغوا وكذبوا.']],lesson:['قد يأتي الفرج من المكان الذي لا يتوقعه الإنسان.','الطغيان مهما طال فله نهاية.','وعد الله حق، لكن يحتاج إلى صبر وثبات.']},
    {title:'الهجرة النبوية',type:'من السيرة النبوية',verse:'إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا ۖ',source:'سورة التوبة 9:40',parts:[['اشتداد الأذى','اشتد أذى قريش على النبي ﷺ وأصحابه، وأذن الله للمؤمنين بالهجرة إلى المدينة. اجتمع زعماء قريش على قتله، فأذن الله له بالخروج مع أبي بكر رضي الله عنه.'],['الغار والطريق','خرج النبي ﷺ ليلًا، واتجه إلى غار ثور، وبقي فيه مع أبي بكر حتى خفّ الطلب. وحين اقترب المشركون قال أبو بكر: لو نظر أحدهم تحت قدميه لرآنا، فقال النبي ﷺ: لا تحزن إن الله معنا.'],['الوصول والبناء','تابعا الطريق حتى وصلا إلى المدينة، فاستقبلهما الأنصار بالفرح. بنى النبي ﷺ المسجد، وآخى بين المهاجرين والأنصار، وبدأ مجتمع يقوم على العبادة والأخوة والعدل.']],lesson:['التوكل الصحيح يجمع بين الثقة بالله والتخطيط.','الصديق الصالح عون في الأزمات.','الهجرة انتقال من الضعف إلى بناء حياة صالحة.']},
    {title:'غزوة بدر الكبرى',type:'غزوة من السيرة',verse:'وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ ۖ فَاتَّقُوا اللَّهَ لَعَلَّكُمْ تَشْكُرُونَ ۝',source:'سورة آل عمران 3:123',parts:[['قبل المعركة','خرج المسلمون لاعتراض قافلة قريش، ثم تحولت المواجهة إلى قتال عندما خرجت قريش بجيش كبير. كان المسلمون أقل عددًا، فاستشار النبي ﷺ أصحابه وثبتوا معه.'],['يوم بدر','نزل المسلمون عند الماء، ورتب النبي ﷺ الصفوف، وأكثر من الدعاء. بدأت المعركة، وأيد الله المؤمنين، وقُتل من قادة قريش من قُتل وأُسر آخرون، وظهر أثر الطاعة والصبر.'],['بعد النصر','عاد المسلمون وقد تعلموا أن النصر ليس بالكثرة وحدها، بل بتوفيق الله مع الإعداد والثبات. وكانت بدر نقطة تحول رفعت معنويات المسلمين وأظهرت قوة المجتمع الجديد.']],lesson:['الشورى تقوي الجماعة.','النصر يحتاج إلى إعداد ودعاء وثبات.','اشكر النعمة ولا تجعل الانتصار سببًا للغرور.']}
    ,{title:'بدء الوحي',type:'من السيرة النبوية',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',source:'سورة العلق 96:1',parts:[['الخلوة والتفكر','كان النبي ﷺ يحب الخلوة في غار حراء، يتعبد ويتفكر في خلق الله.'],['نزول الوحي','جاءه جبريل عليه السلام بأول الوحي، وكانت بداية الرسالة الخاتمة.'],['البداية الجديدة','عاد النبي ﷺ إلى بيته، ثم بدأت مرحلة الدعوة والبلاغ والصبر.']],lesson:['التفكر يهيئ القلب للخير.','البدايات العظيمة تحتاج ثباتًا وصبرًا.','العلم والوحي أساس الهداية.']},
    {title:'إسلام أبي بكر الصديق',type:'من السيرة النبوية',verse:'وَالسَّابِقُونَ الأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالأَنصَارِ',source:'سورة التوبة 9:100',parts:[['الإيمان المبكر','كان أبو بكر رضي الله عنه من أوائل من آمن بالنبي ﷺ وصدقه.'],['الدعم والنصرة','وقف إلى جانب النبي ﷺ، وساهم في نصرة الدعوة ومساندة المستضعفين.'],['الصحبة','استمرت صحبته للنبي ﷺ في الهجرة والمواقف الكبرى حتى وفاته ﷺ.']],lesson:['المبادرة إلى الخير فضيلة.','الصاحب الصالح يثبتك عند الشدة.','الإيمان يظهر في المواقف.']},
    {title:'الهجرة إلى الحبشة',type:'من السيرة النبوية',verse:'إِنَّ الَّذِينَ آمَنُوا وَهَاجَرُوا وَجَاهَدُوا فِي سَبِيلِ اللَّهِ',source:'سورة الأنفال 8:72',parts:[['اشتداد الأذى','اشتد أذى قريش على بعض المسلمين، فبحثوا عن مكان يأمنون فيه على دينهم.'],['الهجرة','أذن النبي ﷺ لبعض أصحابه بالهجرة إلى الحبشة، حيث كان بها ملك عادل.'],['الثبات','كانت الهجرة درسًا في التضحية والثبات على الدين مع الأخذ بالأسباب.']],lesson:['حفظ الدين يستحق التضحية.','الأمانة والعدل قيمتان عظيمتان.','الثبات يحتاج إلى قرار شجاع.']},
    {title:'عام الحزن',type:'من السيرة النبوية',verse:'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',source:'سورة الشرح 94:5',parts:[['فقد السند','توفي أبو طالب، ثم توفيت خديجة رضي الله عنها، فاشتد الحزن على النبي ﷺ.'],['الابتلاء','مرت الدعوة بمرحلة صعبة، لكن النبي ﷺ استمر في البلاغ ولم يتراجع.'],['الفرج','جاء بعد الشدة فتح في أبواب جديدة للدعوة، ثم كانت الهجرة إلى المدينة.']],lesson:['الشدائد لا تعني نهاية الطريق.','الصبر في الأزمات يصنع الثبات.','بعد العسر يأتي اليسر بإذن الله.']},
    {title:'بيعة العقبة',type:'من السيرة النبوية',verse:'إِنَّ الَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ اللَّهَ',source:'سورة الفتح 48:10',parts:[['لقاء الأنصار','جاء نفر من أهل يثرب فآمنوا بالنبي ﷺ، ثم عادوا يدعون قومهم.'],['البيعة','اجتمع عدد أكبر من أهل يثرب وبايعوا النبي ﷺ على النصرة والطاعة في المعروف.'],['طريق المدينة','كانت البيعة مقدمة للهجرة وبناء المجتمع المسلم في المدينة.']],lesson:['النصرة تكون بالعمل لا بالكلام فقط.','الوفاء بالعهد من صفات المؤمنين.','المشاريع الكبيرة تحتاج جماعة صادقة.']},
    {title:'غزوة أحد',type:'غزوة من السيرة',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا',source:'سورة آل عمران 3:139',parts:[['بداية المعركة','خرج المسلمون لمواجهة قريش، ورتب النبي ﷺ الصفوف ووضع الرماة في موضعهم.'],['الابتلاء','حدث اضطراب في الموقف بعد مخالفة بعض الرماة للأمر، وتحولت المعركة إلى اختبار شديد.'],['الدروس','تعلم المسلمون أهمية الطاعة والثبات وعدم الاغترار ببداية النصر.']],lesson:['طاعة القائد في المعروف تحفظ الجماعة.','الخطأ لا يعني نهاية الطريق.','الابتلاء يكشف الصدق والثبات.']},
    {title:'غزوة الخندق',type:'غزوة من السيرة',verse:'إِذْ جَاءَتْكُمْ جُنُودٌ فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا',source:'سورة الأحزاب 33:9',parts:[['الاستعداد','اجتمعت قبائل على المدينة، فأشار سلمان الفارسي بحفر الخندق.'],['الحصار','واجه المسلمون حصارًا شديدًا، وثبتوا مع النبي ﷺ رغم الخوف والجوع.'],['الفرج','أرسل الله الريح والملائكة، فانصرف الأحزاب دون تحقيق هدفهم.']],lesson:['الشورى تجمع الخبرات.','التخطيط لا ينافي التوكل.','الصبر وقت الأزمات طريق للفرج.']},
    {title:'صلح الحديبية',type:'من السيرة النبوية',verse:'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا',source:'سورة الفتح 48:1',parts:[['الخروج للعمرة','خرج النبي ﷺ وأصحابه يريدون العمرة، فمنعتهم قريش من دخول مكة.'],['الصلح','تم الاتفاق على هدنة وشروط بدت لبعض الصحابة شديدة، لكنها فتحت بابًا واسعًا للدعوة.'],['ثمرة الصلح','انتشر الإسلام في فترة الهدنة، وأصبح التواصل أكثر أمنًا، وكان الصلح مقدمة لفتح مكة.']],lesson:['قد يكون التنازل الحكيم طريقًا لنصر أكبر.','النتائج لا تظهر دائمًا في اللحظة الأولى.','الحكمة في إدارة الأزمات مهمة.']},
    {title:'فتح مكة',type:'من السيرة النبوية',verse:'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',source:'سورة النصر 110:1',parts:[['دخول مكة','دخل النبي ﷺ مكة في قوة ومنعة، وكان هدفه إزالة الشرك وإقامة الحق.'],['العفو','أعلن الأمان لكثير من أهل مكة، ولم يجعل النصر بابًا للانتقام الشخصي.'],['التغيير','طهرت الكعبة من الأصنام، ودخل الناس في دين الله أفواجًا.']],lesson:['العفو عند المقدرة خلق عظيم.','النصر الحقيقي يقترن بالتواضع.','الهدف من القوة إقامة الحق لا الانتقام.']},
    {title:'حجة الوداع',type:'من السيرة النبوية',verse:'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ',source:'سورة المائدة 5:3',parts:[['الاجتماع العظيم','حج النبي ﷺ في آخر حياته واجتمع معه عدد كبير من المسلمين.'],['خطبة الوداع','بيّن حقوق الناس وحرمة الدماء والأموال، وأوصى بالنساء وبالتمسك بكتاب الله.'],['إتمام الرسالة','كانت الحجة من أعظم محطات تبليغ الرسالة وتعليم الأمة.']],lesson:['حقوق الناس عظيمة.','العدل والرحمة أساس المجتمع.','العلم النافع يجب أن يصل إلى الناس.']},
    {title:'وفاة النبي ﷺ',type:'من السيرة النبوية',verse:'إِنَّكَ مَيِّتٌ وَإِنَّهُم مَّيِّتُونَ',source:'سورة الزمر 39:30',parts:[['المرض','اشتد المرض بالنبي ﷺ في آخر حياته، وكان يوصي بالصلاة وبالخير.'],['اللحظات الأخيرة','توفي النبي ﷺ بعد أن بلغ الرسالة وأدى الأمانة ونصح الأمة.'],['الأثر','حمل الصحابة الرسالة من بعده، وبقي سنته وتعليمه هداية للمسلمين.']],lesson:['الدنيا فانية والعمل الصالح هو الباقي.','الاقتداء بالنبي ﷺ يكون بالعمل بسنته.','المسؤولية تنتقل إلى الأجيال.']},
    {title:'مؤاخاة المهاجرين والأنصار',type:'من السيرة النبوية',verse:'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ',source:'سورة الحجرات 49:10',parts:[['بعد الهجرة','لما قدم المهاجرون المدينة احتاج المجتمع الجديد إلى روابط قوية.'],['المؤاخاة','آخى النبي ﷺ بين المهاجرين والأنصار، فقام المجتمع على التعاون والإيثار.'],['بناء المجتمع','صار التعاون قيمة عملية في السكن والعمل والمساعدة وحماية المجتمع.']],lesson:['الأخوة تتحول إلى عمل.','الإيثار يبني الثقة.','المجتمع القوي يتعاون أفراده.']}
  ];
  const day=Math.floor((new Date()-new Date(new Date().getFullYear(),0,0))/86400000),story=stories[day%stories.length];
  let part=0;
  const host=document.getElementById('dailyStoryContent');
  function esc(v){return String(v).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[x]))}
  function render(){const current=story.parts[part];const todayKey=new Date().toISOString().slice(0,10);let done=JSON.parse(localStorage.getItem('daily_sirah_done_v1')||'[]');done=Array.isArray(done)?done:[];const isDone=done.includes(todayKey);const nextDate=new Date(Date.now()+86400000);host.innerHTML=`<span class="story-day-badge">${esc(story.type)} · سيرة اليوم</span><section class="daily-learning-bar"><div class="daily-meta"><b>📅 درس اليوم · ${esc(arDate(new Date()))}</b><small>كل يوم تتغير القصة تلقائيًا، وتستطيع متابعة الأجزاء بالترتيب.</small></div><button type="button" class="daily-done-btn ${isDone?'done':''}" id="sirahDoneBtn">${isDone?'✓ قرأت اليوم':'قرأت السيرة اليوم'}</button></section><section class="story-hero"><p>${esc(story.source)}</p><h2>${esc(story.title)}</h2><p>الجزء ${part+1} من ${story.parts.length}</p></section><section class="story-section story-verse"><h3>الآية أو الدليل</h3><p>${esc(story.verse)}<br><small>${esc(story.source)}</small></p></section><section class="story-section"><h3>${esc(current[0])}</h3><p>${esc(current[1])}</p></section><div class="story-parts">${story.parts.map((x,i)=>`<button type="button" class="story-part ${i===part?'current':''}" data-part="${i}">الجزء ${i+1}</button>`).join('')}</div><section class="story-section story-lesson"><h3>المستفاد من القصة</h3><ul>${story.lesson.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section><div class="story-nav"><button type="button" id="storyPrev" ${part===0?'disabled':''}>الجزء السابق</button><button type="button" id="storyNext" ${part===story.parts.length-1?'disabled':''}>الجزء التالي</button></div><div class="daily-next">غدًا بإذن الله ستظهر لك سيرة اليوم التالية تلقائيًا.</div>`;host.querySelectorAll('[data-part]').forEach(b=>b.onclick=()=>{part=+b.dataset.part;render()});host.querySelector('#storyPrev').onclick=()=>{if(part>0){part--;render()}};host.querySelector('#storyNext').onclick=()=>{if(part<story.parts.length-1){part++;render()}};host.querySelector('#sirahDoneBtn').onclick=()=>{let a=JSON.parse(localStorage.getItem('daily_sirah_done_v1')||'[]');if(!Array.isArray(a))a=[];if(!a.includes(todayKey))a.push(todayKey);a=a.slice(-60);localStorage.setItem('daily_sirah_done_v1',JSON.stringify(a));toast('تم تسجيل قراءة السيرة اليوم ✓');render()}}
  if(host)render();
  function open(id){document.querySelectorAll('.page').forEach(x=>{x.classList.remove('active');x.style.display='none'});const el=document.getElementById(id+'Page');if(!el)return;el.classList.add('active');el.style.display='block';if(id==='names'&&typeof renderNames==='function')renderNames();if(id==='hadith'&&typeof renderHadith==='function')renderHadith();if(id==='sirah')render();window.scrollTo({top:0,behavior:'smooth'})}
  document.addEventListener('click',e=>{const b=e.target.closest('#openSirah');if(!b)return;e.preventDefault();e.stopImmediatePropagation();open('sirah')},true);
})();


/* ===== Original inline script 6 ===== */

/* Final safety: guarantee the learning pages render after the full file loads. */
window.addEventListener('load',function(){
  try{
    if(typeof renderNames==='function') renderNames();
    if(typeof renderHadith==='function') renderHadith();
  }catch(e){ console.error('HomeFit learning pages:',e); }
});


/* ===== Original inline script 7 ===== */

(function(){
  const q=id=>document.getElementById(id);
  const DATA_URL='https://raw.githubusercontent.com/Seen-Arabic/Morning-And-Evening-Adhkar-DB/main/ar.json';
  const AUDIO={morning:'https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Mishari_Raashid/Azkar_AlSba7_w_AlMsa/ar_1434_Azkar_AlSba7.mp3',evening:'https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Mishari_Raashid/Azkar_AlSba7_w_AlMsa/ar_1434_Azkar_AlMsa.mp3'};
  const cats=[
    {id:'morning',title:'أذكار الصباح',sub:'الورد الكامل',icon:'🌞',cls:'cat-morning'},
    {id:'evening',title:'أذكار المساء',sub:'الورد الكامل',icon:'🌙',cls:'cat-evening'},
    {id:'sleep',title:'SLEEP',sub:'أذكار النوم — سكينة الليل',icon:'🌌',cls:'cat-sleep'},
    {id:'wake',title:'WAKE UP',sub:'أذكار الاستيقاظ — بداية يوم مبارك',icon:'🌅',cls:'cat-wake'},
    {id:'general',title:'أذكار عامة',sub:'ورد يومي',icon:'📿',cls:'cat-general'},
    {id:'home',title:'المنزل والخروج',sub:'الدخول والخروج',icon:'🏠',cls:'cat-home'},
    {id:'travel',title:'السفر والركوب',sub:'دعاء السفر',icon:'🧳',cls:'cat-travel'},
    {id:'food',title:'الطعام والشراب',sub:'بركة النعمة',icon:'🍽️',cls:'cat-food'},
    {id:'masjid',title:'المسجد والأذان',sub:'آداب المسجد',icon:'🕌',cls:'cat-masjid'},
    {id:'wudu',title:'الوضوء',sub:'أذكار الوضوء',icon:'💧',cls:'cat-wudu'},
    {id:'worry',title:'الهم والكرب',sub:'تفريج الضيق',icon:'🤍',cls:'cat-worry'},
    {id:'rain',title:'المطر والرياح',sub:'أذكار الطقس',icon:'🌧️',cls:'cat-rain'},
    {id:'sick',title:'المريض والعيادة',sub:'دعاء الشفاء',icon:'🩺',cls:'cat-sick'},
    {id:'friday',title:'الجمعة',sub:'أذكار يوم الجمعة',icon:'🕋',cls:'cat-friday'},
    {id:'quran',title:'أدعية من القرآن',sub:'أدعية قرآنية',icon:'📖',cls:'cat-quran'},
    {id:'dua',title:'أدعية جامعة',sub:'خير الدنيا والآخرة',icon:'✨',cls:'cat-dua'}
  ];  const localDuas={
    general:[{text:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',count:100,source:'ذكر عام'},{text:'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',count:1,source:'كنز من كنوز الجنة'}],
    sleep:[{text:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',count:1,source:'دعاء النوم'},{text:'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',count:3,source:'حصن المسلم'}],
    wake:[{text:'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',count:1,source:'حصن المسلم'},{text:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',count:1,source:'ذكر مستحب'}],
    home:[{text:'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',count:1,source:'دعاء دخول المنزل'},{text:'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',count:1,source:'دعاء الخروج'}],
    travel:[{text:'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',count:1,source:'دعاء السفر'},{text:'اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ',count:1,source:'حصن المسلم'}],
    food:[{text:'بِسْمِ اللَّهِ',count:1,source:'قبل الطعام'},{text:'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ',count:1,source:'بعد الطعام'}],
    masjid:[{text:'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',count:1,source:'عند دخول المسجد'},{text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',count:1,source:'عند الخروج'}],
    wudu:[{text:'بِسْمِ اللَّهِ',count:1,source:'قبل الوضوء'},{text:'اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',count:1,source:'بعد الوضوء'}],
    worry:[{text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ',count:1,source:'حصن المسلم'},{text:'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',count:1,source:'سورة الأنبياء: 87'}],
    rain:[{text:'اللَّهُمَّ صَيِّبًا نَافِعًا',count:1,source:'عند نزول المطر'},{text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَأَعُوذُ بِكَ مِنْ شَرِّهَا',count:1,source:'عند الريح'}],
    sick:[{text:'أَسْأَلُ اللَّهَ الْعَظِيمَ أَنْ يَشْفِيَكَ',count:7,source:'عيادة المريض'},{text:'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ اشْفِ أَنْتَ الشَّافِي',count:1,source:'دعاء الشفاء'}],
    friday:[{text:'اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ',count:1,source:'يوم الجمعة'},{text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً',count:1,source:'سورة البقرة: 201'}],
    quran:[{text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',count:1,source:'سورة طه: 25-26'},{text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',count:1,source:'سورة الفرقان: 74'}],
    dua:[{text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً',count:1,source:'سورة البقرة: 201'},{text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ',count:1,source:'دعاء جامع'}]
  };
  let all=[];let currentList=[];let currentIndex=0;
  function key(){return new Date().toISOString().slice(0,10)}
  function renderCats(){const host=q('adhkarCategories');if(!host)return;host.innerHTML=cats.map(c=>`<button type="button" class="adhkar-cat ${c.cls}" data-cat="${c.id}"><div class="cat-icon">${c.icon}</div><h3>${c.title}</h3><p>${c.sub}</p></button>`).join('');host.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>openCategory(b.dataset.cat))}
  function byType(cat){if(cat==='morning')return all.filter(x=>x.type===0||x.type===1);if(cat==='evening')return all.filter(x=>x.type===0||x.type===2);return localDuas[cat]||[]}
  function openCategory(cat){currentList=byType(cat);currentIndex=0;openItem(0,cat)}
  function openItem(i,cat){if(!currentList.length)return;currentIndex=(i+currentList.length)%currentList.length;const x=currentList[currentIndex];const m=q('adhkarModal');q('dhModalBadge').textContent=cats.find(c=>c.id===cat)?.title||'الأذكار';q('dhModalTitle').textContent=(cat==='morning'?'الذكر الصباحي':cat==='evening'?'الذكر المسائي':'الذكر والدعاء');q('dhModalCount').textContent=x.count===1?'مرة واحدة':`${x.count} مرات`;q('dhModalText').textContent=x.content||x.text;q('dhModalSource').textContent=x.source||'';q('dhModalArt').textContent=cats.find(c=>c.id===cat)?.icon||'🤲';q('dhDoneText').textContent=isDone(cat,currentIndex)?'تم قراءة هذا الذكر اليوم':'لم يتم إكمال هذا الذكر اليوم';q('dhDoneBtn').textContent=isDone(cat,currentIndex)?'✓ مكتمل':'تم ✓';m.classList.add('open');m.setAttribute('aria-hidden','false');m.dataset.cat=cat}
  function isDone(cat,i){try{return JSON.parse(localStorage.getItem('adhkar_done_v1')||'{}')[key()+':'+cat+':'+i]===true}catch(e){return false}}
  q('dhNext')?.addEventListener('click',()=>openItem(currentIndex+1,q('adhkarModal').dataset.cat));
  q('dhCopy')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(q('dhModalText').textContent);toast('تم نسخ الذكر ✓')}catch(e){toast('تعذر النسخ')}});
  q('dhDoneBtn')?.addEventListener('click',()=>{const m=q('adhkarModal'),cat=m.dataset.cat;let d={};try{d=JSON.parse(localStorage.getItem('adhkar_done_v1')||'{}')}catch(e){}d[key()+':'+cat+':'+currentIndex]=true;localStorage.setItem('adhkar_done_v1',JSON.stringify(d));q('dhDoneText').textContent='تم قراءة هذا الذكر اليوم';q('dhDoneBtn').textContent='✓ مكتمل';toast('تم تسجيل الذكر ✓')});
  function close(){q('adhkarModal')?.classList.remove('open');q('adhkarModal')?.setAttribute('aria-hidden','true')}
  q('adhkarClose')?.addEventListener('click',close);q('adhkarModal')?.addEventListener('click',e=>{if(e.target===q('adhkarModal'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  function setupAudio(){const audio=q('adhkarAudio');q('morningAudioBtn')?.addEventListener('click',()=>{audio.src=AUDIO.morning;audio.play().catch(()=>{});q('morningAudioBtn').classList.add('active');q('eveningAudioBtn').classList.remove('active')});q('eveningAudioBtn')?.addEventListener('click',()=>{audio.src=AUDIO.evening;audio.play().catch(()=>{});q('eveningAudioBtn').classList.add('active');q('morningAudioBtn').classList.remove('active')})}
  function setupReminder(){const t=q('adhkarReminderToggle');if(!t)return;t.checked=localStorage.getItem('adhkar_reminder')==='1';t.onchange=()=>{if(t.checked){localStorage.setItem('adhkar_reminder','1');if('Notification'in window&&Notification.permission==='default')Notification.requestPermission();toast('تم تفعيل تذكير الأذكار ✓')}else{localStorage.removeItem('adhkar_reminder');toast('تم إيقاف تذكير الأذكار')}}}
  async function load(){renderCats();setupAudio();setupReminder();try{const r=await fetch(DATA_URL,{cache:'force-cache'});if(r.ok){all=await r.json();localStorage.setItem('adhkar_source_cache_v1',JSON.stringify(all))}}catch(e){try{all=JSON.parse(localStorage.getItem('adhkar_source_cache_v1')||'[]')}catch(_){all=[]}}}
  const oldMid=q('midAzkarBtn');if(oldMid)oldMid.addEventListener('click',()=>window.showPage&&window.showPage('adhkar'));
  const oldShow=window.showPage;if(typeof oldShow==='function'&&!window.__adhkarShow){window.__adhkarShow=true;window.showPage=function(id){oldShow(id);if(id==='adhkar'){setTimeout(()=>{document.querySelector('#adhkarPage')?.scrollIntoView({block:'start'});},20)}}}
  load();
})();


/* ===== Original inline script 8 ===== */

/* ===== مصروفاتي (Money) — منطق مستقل داخل IIFE ===== */
(function(){

const monthDate=document.getElementById('monthDate');
const monthName=document.getElementById('monthName');
const investRate=document.getElementById('investRate');
const charityRate=document.getElementById('charityRate');
const zakatRate=document.getElementById('zakatRate');
const notes=document.getElementById('notes');
const saveBtn=document.getElementById('saveBtn');
const newMonthBtn=document.getElementById('newMonthBtn');
const newMonthTop=document.getElementById('newMonthTop');
const historyBtn=document.getElementById('historyBtn');
const moneyHistoryPanel=document.getElementById('moneyHistoryPanel');
const closeHistory=document.getElementById('closeHistory');
const moneyHistoryList=document.getElementById('moneyHistoryList');

const key='nor-money-dark-preview-v4'; const historyKey='nor-money-dark-history-v1'; const fmt=new Intl.NumberFormat('en-US',{maximumFractionDigits:2});
const money=n=>fmt.format(Math.max(0,Number(n)||0))+' ج.م';
function addRow(target, values=['','','']){const tpl=document.getElementById(target==='fixedRows'?'fixedTemplate':'dailyTemplate').content.cloneNode(true);const row=tpl.querySelector('.finance-row');row.querySelector('.item-name').value=values[0]||'';row.querySelector('.item-amount').value=values[1]||'';row.querySelector('.item-date').value=values[2]||'';row.querySelector('.item-amount').addEventListener('input',update);row.querySelector('.item-name').addEventListener('input',save);row.querySelector('.item-date').addEventListener('change',save);row.querySelector('.delete').addEventListener('click',()=>{row.remove();update()});document.getElementById(target).appendChild(tpl)}
function total(id){return [...document.querySelectorAll('#'+id+' .item-amount')].reduce((a,e)=>a+(Number(e.value)||0),0)}
function rows(id){return [...document.querySelectorAll('#'+id+' .finance-row')].map(r=>[r.querySelector('.item-name').value,r.querySelector('.item-amount').value,r.querySelector('.item-date').value])}
function updateCharts(income,expenses,balance){const max=Math.max(income,expenses,Math.max(balance,0),1), y=n=>180-(Math.max(0,n)/max*155); const pts=n=>`55,${y(n*.72)} 335,${y(n*.88)} 620,${y(n)}`; [['incomeLine',income],['expenseLine',expenses],['balanceLine',Math.max(balance,0)]].forEach(([id,n])=>document.getElementById(id).setAttribute('points',pts(n))); [['incomeDot',income],['expenseDot',expenses],['balanceDot',Math.max(balance,0)]].forEach(([id,n])=>{const d=document.getElementById(id);d.setAttribute('cy',y(n));}); const area=document.getElementById('balanceArea'); if(area){const b=Math.max(0,balance);area.setAttribute('d',`M55 180 L335 ${y(b*.88)} L620 ${y(b)} L620 180 Z`);}}
function update(persist=true){const income=[...document.querySelectorAll('.income-input')].reduce((a,e)=>a+(Number(e.value)||0),0);const fixed=total('fixedRows'),daily=total('dailyRows'),expenses=fixed+daily,balance=income-expenses,pct=income?expenses/income*100:0;document.getElementById('incomeTotalInput').value=money(income);document.getElementById('fixedTotal').textContent=money(fixed);document.getElementById('dailyTotal').textContent=money(daily);document.getElementById('incomeStat').textContent=money(income);document.getElementById('expenseStat').textContent=money(expenses);document.getElementById('balanceStat').textContent=money(balance);document.getElementById('percentStat').textContent=pct.toFixed(1)+'%';updateExpenseDonut(pct);const tips=[];if(!income)tips.push('أضف مرتبًا أو أكثر لتبدأ قراءة التحليل المالي.');else{if(balance<0)tips.push('⚠️ الإنفاق تجاوز الدخل بمقدار '+money(-balance)+'؛ راجع المصروفات القابلة للتقليل أولًا.');else if(balance/income<.15)tips.push('💡 المتبقي أقل من 15% من دخلك؛ ضع حدًا أسبوعيًا للمصروفات اليومية.');else tips.push('✅ لديك متبقٍ جيد قدره '+money(balance)+'؛ يمكنك توزيعه بين الطوارئ والادخار.');if(fixed/income>.35)tips.push('📌 التزاماتك الثابتة تتخطى 35% من الدخل؛ تجنب إضافة قسط جديد إن أمكن.');if(daily/income>.4)tips.push('🛒 المصروف اليومي مرتفع؛ راقب الطعام والمواصلات والمشتريات الصغيرة.')}document.getElementById('tips').innerHTML=tips.slice(0,3).map(x=>'<div class="tip">'+x+'</div>').join('');calculateExtras(balance);if(persist)save(false)}
function updateExpenseDonut(pct){const value=Math.min(100,Math.max(0,pct));const d=document.getElementById('expenseDonut');if(d){d.style.setProperty('--donut-progress',value+'%');document.getElementById('expenseDonutValue').textContent=value.toFixed(1)+'%';document.getElementById('percentStatInline').textContent=value.toFixed(1)+'%'}}
function calculateExtras(balance){const r=Number(document.getElementById('investRate').value)||0;document.getElementById('investAnswer').textContent=money(Math.max(0,balance)*r/100);const cr=Number(document.getElementById('charityRate').value)||0;document.getElementById('charityAnswer').textContent=money(Math.max(0,balance)*cr/100)+' صدقة';const zr=Number(document.getElementById('zakatRate').value)||0;document.getElementById('zakatAnswer').textContent=money(Math.max(0,balance)*zr/100)+' زكاة'}
function currentState(){return {income:[...document.querySelectorAll('.income-input')].map(x=>x.value),fixed:rows('fixedRows'),daily:rows('dailyRows'),date:monthDate.value,month:monthName.value,rate:investRate.value,charityRate:charityRate.value,zakatRate:zakatRate.value,notes:notes.value,locked:!!window.__moneyLocked}}
function save(alertUser=false){localStorage.setItem(key,JSON.stringify(currentState()));}
function clearRows(id){document.getElementById(id).innerHTML=''}
function applyState(s,persist=true){clearRows('fixedRows');clearRows('dailyRows');document.querySelectorAll('.income-input').forEach((e,i)=>e.value=(s.income||[])[i]||'');(s.fixed||[]).forEach(x=>addRow('fixedRows',x));(s.daily||[]).forEach(x=>addRow('dailyRows',x));monthDate.value=s.date||'';monthName.value=s.month||'أغسطس 2026';investRate.value=s.rate||'20';charityRate.value=s.charityRate||'1';zakatRate.value=s.zakatRate||'2.5';notes.value=s.notes||'';window.__moneyLocked=!!s.locked;applyMoneyLock();update(persist)}
function yearOf(s){const m=String(s.date||'').match(/^(\d{4})/);return m?m[1]:String(s.savedAt||'').slice(0,4)||'غير محدد'}
function getHistory(){try{return JSON.parse(localStorage.getItem(historyKey)||'[]')}catch(e){return []}}
function archiveRecord(s){const income=s.income.reduce((a,x)=>a+(Number(x)||0),0),expenses=s.fixed.concat(s.daily).reduce((a,x)=>a+(Number(x[1])||0),0);const record={...s,incomeTotal:income,expensesTotal:expenses,savedAt:new Date().toISOString()};let arr=getHistory();arr=[record,...arr.filter(x=>!(x.month===record.month&&x.date===record.date))].slice(0,120);localStorage.setItem(historyKey,JSON.stringify(arr))}
function renderHistory(){const list=document.getElementById('moneyHistoryList');if(!list)return;const arr=getHistory();if(!arr.length){list.innerHTML='<p class="small-muted">لا توجد سنوات محفوظة بعد. عند بدء شهر جديد سيُحفظ الشهر الحالي داخل ملخص السنة.</p>';return}const groups={};arr.forEach((s,i)=>{const y=yearOf(s);(groups[y]??=[]).push({...s,_i:i})});list.innerHTML=Object.keys(groups).sort((a,b)=>b.localeCompare(a)).map(y=>{const items=groups[y],income=items.reduce((a,s)=>a+(Number(s.incomeTotal)||0),0),expenses=items.reduce((a,s)=>a+(Number(s.expensesTotal)||0),0);return '<details class="annual-group"><summary>ملخص سنة '+y+' — '+items.length+' شهر</summary><div class="annual-total"><span>الدخل: '+money(income)+'</span><span>المصروفات: '+money(expenses)+'</span><span>المتبقي: '+money(income-expenses)+'</span></div>'+items.map(s=>'<div class="annual-month"><div><strong>'+String(s.month||'شهر سابق')+'</strong><small> — دخل '+money(s.incomeTotal||0)+' | مصروفات '+money(s.expensesTotal||0)+'</small></div><button type="button" data-open-history="'+s._i+'">فتح الشهر</button></div>').join('')+'</details>'}).join('')}
function setCurrentMonthOption(label){monthName.innerHTML='<option>'+label+'</option>';monthName.value=label;const tab=document.getElementById('moneyMonthLabel');if(tab)tab.textContent=label;const tabIcon=document.querySelector('#moneyMonthTab .money-month-icon');if(tabIcon)tabIcon.textContent='🗓️';}
function freshState(date){const d=date||new Date();const label=new Intl.DateTimeFormat('ar-EG',{month:'long',year:'numeric'}).format(d);return {income:['','',''],fixed:[],daily:[],date:d.toISOString().slice(0,10),month:label,rate:'20',charityRate:'1',zakatRate:'2.5',notes:'',locked:false}}
function load(){let s;try{s=JSON.parse(localStorage.getItem(key))}catch(e){};s=s||freshState(new Date());const currentYear=String(new Date().getFullYear());if(s.date&&yearOf(s)!==currentYear&&(s.income.some(Boolean)||s.fixed.length||s.daily.length||s.notes.trim())){archiveRecord(s);s=freshState(new Date());localStorage.setItem(key,JSON.stringify(s))}applyState(s);setCurrentMonthOption(s.month||'الشهر الحالي');const d=new Date(s.date||new Date());const isCurrent=d.getMonth()===new Date().getMonth()&&d.getFullYear()===new Date().getFullYear();const tab=document.getElementById('moneyMonthTab');if(tab)tab.title=isCurrent?'الشهر الحالي':'شهر محفوظ/سابق';renderHistory()}
function applyMoneyLock(){const root=document.getElementById('moneyRoot');if(!root)return;root.classList.toggle('money-locked',!!window.__moneyLocked);root.querySelectorAll('input,textarea,select,.add,.delete,#saveBtn,#newMonthBtn,#newMonthTop').forEach(el=>{el.disabled=!!window.__moneyLocked;});root.querySelectorAll('.close-month').forEach(b=>{b.disabled=false;b.textContent=window.__moneyLocked?'🔓 فتح الشهر':'🔒 إغلاق الشهر';});const tab=document.getElementById('moneyMonthTab');if(tab)tab.classList.toggle('locked',!!window.__moneyLocked)}
function toggleMoneyLock(){window.__moneyLocked=!window.__moneyLocked;localStorage.setItem(key,JSON.stringify(currentState()));applyMoneyLock();toastMoney(window.__moneyLocked?'تم قفل الشهر 🔒 — البيانات محمية من التعديل.':'تم فتح الشهر 🔓 — يمكنك التعديل الآن.');}
function toastMoney(msg){let t=document.getElementById('moneyLockToast');if(!t){t=document.createElement('div');t.id='moneyLockToast';t.style.cssText='position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;padding:10px 16px;border-radius:999px;background:#176c55;color:#fff;font:800 12px Tahoma;box-shadow:0 10px 24px rgba(23,108,85,.25)';document.body.appendChild(t);}t.textContent=msg;clearTimeout(window.__moneyToastTimer);window.__moneyToastTimer=setTimeout(()=>t.remove(),2200)}
function newMonth(){const s=currentState();if(window.__moneyLocked){toastMoney('افتح الشهر أولًا قبل بدء شهر جديد.');return}const hasData=s.income.some(Boolean)||s.fixed.length||s.daily.length||s.notes.trim();if(hasData)archiveRecord(s);const d=new Date(s.date||new Date());d.setDate(1);d.setMonth(d.getMonth()+1);const fresh=freshState(d);localStorage.setItem(key,JSON.stringify(fresh));location.reload()}
document.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>{addRow(b.dataset.add);update()}));document.querySelectorAll('.income-input').forEach(e=>e.addEventListener('input',update));[investRate,charityRate,zakatRate,notes,monthDate,monthName].forEach(e=>e.addEventListener(e.tagName==='SELECT'?'change':'input',()=>{const income=[...document.querySelectorAll('.income-input')].reduce((a,x)=>a+(Number(x.value)||0),0);calculateExtras(income-total('fixedRows')-total('dailyRows'));save(false)}));saveBtn.addEventListener('click',()=>save(false));newMonthBtn.addEventListener('click',newMonth);newMonthTop.addEventListener('click',newMonth);document.querySelectorAll('.close-month').forEach(b=>b.addEventListener('click',toggleMoneyLock));historyBtn.addEventListener('click',()=>{moneyHistoryPanel.hidden=!moneyHistoryPanel.hidden;renderHistory()});closeHistory.addEventListener('click',()=>moneyHistoryPanel.hidden=true);moneyHistoryList.addEventListener('click',e=>{const b=e.target.closest('[data-open-history]');if(!b)return;const arr=getHistory();const s=arr[Number(b.dataset.openHistory)];if(s){applyState(s,false);moneyHistoryPanel.hidden=true;window.scrollTo({top:0,behavior:'smooth'})}});load();

})();


/* ===== Original inline script 9 ===== */

/* ===== Tasks (Focus Flow) — منطق مستقل داخل IIFE ===== */
(function(){

/* ================= DATA ================= */
const TASK_ICONS = ["📝","💬","📞","📧","🛒","🧹","🚗","☕","💻","🎨","🏋️","🍳","🧘","🎯","🔔","📅","🎵","🎮","🌱","⚡","💡","🏆","📊","🖊️","🧠","🔥","🌙","☀️","✅","📌","🧾","🛠️"];
const SUBJ_ICONS = ["📐","⚗️","🧬","⚛️","📖","🌍","🏛️","💻","🗣️","🎨","🏃","🎵","➗","🧾","⚖️","🏥","📊","🧪","📚","🖊️","🧠","🌐","🎓","📏","🔬","🧮","📜","🗺️","🎼","🖥️","🧑‍🔬","📕"];

let store = loadStore();
function loadStore(){
  let data;
  try{
    const raw = localStorage.getItem('focusFlowData');
    data = raw ? JSON.parse(raw) : null;
  }catch(e){ data = null; }
  if(!data) data = {tasks:[], taskHistory:[], subjects:[], subjHistory:[], schedule:[], subjectNotes:{}};
  if(!data.subjectNotes) data.subjectNotes = {};
  if(!data.schedule) data.schedule = [];
  data.schedule.forEach(s=>{
    if(!s.date){ s.date = toISO(new Date()); }
    if(s.completed===undefined) s.completed=false;
    if(!s.status) s.status='idle';
  });
  return data;
}
function saveStore(){ localStorage.setItem('focusFlowData', JSON.stringify(store)); }

let selectedTaskIcon = TASK_ICONS[0];
let selectedSubjIcon = SUBJ_ICONS[0];
let selectedSchedSubjectId = null;
let selectedTaskMode = 'countdown';
let selectedSchedMode = 'countdown';
function setTaskMode(m){
  selectedTaskMode = m;
  document.querySelectorAll('#taskModeToggle .mode-btn').forEach(b=>b.classList.toggle('active', b.dataset.mode===m));
  document.getElementById('taskDurationRow').style.display = m==='countdown' ? 'block' : 'none';
}
function setSchedMode(m){
  selectedSchedMode = m;
  document.querySelectorAll('#schedModeToggle .mode-btn').forEach(b=>b.classList.toggle('active', b.dataset.mode===m));
  document.getElementById('schedDurationRow').style.display = m==='countdown' ? 'block' : 'none';
}
let activeItem = null; // {type:'task'|'schedule', id}
const intervals = {}; // key: type+id -> intervalId
let reschedTarget = null; // {type,id}
let scheduleView = 'list';
let scheduleStripStart = new Date();
let selectedScheduleDate = null;
let calendarMonth = new Date();

function toISO(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function todayISO(){ return toISO(new Date()); }
function formatDateShort(iso){
  if(!iso) return '';
  const [y,m,d] = iso.split('-');
  return `${d}/${m}`;
}
selectedScheduleDate = todayISO();

/* ================= INIT ================= */
function buildIconGrid(container, icons, onPick){
  container.innerHTML = icons.map((ic,i)=>`<div class="icon-opt${i===0?' sel':''}" data-ic="${ic}">${ic}</div>`).join('');
  container.querySelectorAll('.icon-opt').forEach(el=>{
    el.addEventListener('click', ()=>{
      container.querySelectorAll('.icon-opt').forEach(x=>x.classList.remove('sel'));
      el.classList.add('sel');
      onPick(el.dataset.ic);
    });
  });
}
buildIconGrid(document.getElementById('taskIconGrid'), TASK_ICONS, ic=>selectedTaskIcon=ic);
buildIconGrid(document.getElementById('subjIconGrid'), SUBJ_ICONS, ic=>selectedSubjIcon=ic);

document.getElementById('taskDate').value = todayISO();
document.getElementById('schedDate').value = selectedScheduleDate;
buildTime12Select('taskTime', 4, 0, 'م');
buildTime12Select('schedTime', 4, 0, 'م');
buildTime12Select('reschedTime', 4, 0, 'م');

rolloverOldTasks();
renderAll();
resumeRunningTimers();
setScheduleView('list');
updateLiveClock();
setInterval(updateLiveClock, 15000);
setInterval(()=>{
  const today = todayISO();
  if(localStorage.getItem('ff_lastDate') !== today){
    const changed = rolloverOldTasks();
    if(changed){
      renderTasks(); renderHistory();
      toast('📅 يوم جديد! تم أرشفة مهام الأمس وصفحتك جاهزة لمهام اليوم');
    }
  }
}, 5*60*1000);

/* ================= TABS ================= */
function switchTab(tab){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.getElementById('view-tasks')?.classList.toggle('active', tab==='tasks');
  document.getElementById('view-students')?.classList.toggle('active', tab==='students');
}
function togglePanel(id){
  document.getElementById(id).classList.toggle('open');
}
function openSchedPanel(){
  document.getElementById('schedDate').value = selectedScheduleDate;
  const p = document.getElementById('schedPanel');
  p.classList.add('open');
  p.scrollIntoView({behavior:'smooth', block:'center'});
}

/* ================= LIVE CLOCK + PROGRESS RING ================= */
const RING_CIRCUMFERENCE = 2*Math.PI*66;
function fmt12(d){
  let h = d.getHours();
  const m = d.getMinutes();
  const ampm = h>=12 ? 'م' : 'ص';
  h = h%12; if(h===0) h=12;
  return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+' '+ampm;
}
function updateLiveClock(){
  const el = document.getElementById('liveClockText');
  if(el) el.textContent = fmt12(new Date());
}
function updateProgressRing(){
  const ring = document.getElementById('ringProgress');
  if(!activeItem){ ring.setAttribute('stroke-dashoffset', RING_CIRCUMFERENCE); return; }
  const item = findItem(activeItem.type, activeItem.id);
  if(!item){ ring.setAttribute('stroke-dashoffset', RING_CIRCUMFERENCE); return; }
  if(item.mode==='countup'){
    // no fixed total: show a full ring while running/paused, empty when idle
    ring.setAttribute('stroke-dashoffset', item.status==='idle' ? RING_CIRCUMFERENCE : 0);
    return;
  }
  if(!item.totalSec){ ring.setAttribute('stroke-dashoffset', RING_CIRCUMFERENCE); return; }
  const pctRemaining = Math.max(0, Math.min(1, item.remainingSec/item.totalSec));
  ring.setAttribute('stroke-dashoffset', RING_CIRCUMFERENCE*(1-pctRemaining));
}


/* ================= TIME HELPERS ================= */
function fmt(sec){
  sec = Math.max(0, Math.round(sec));
  const m = Math.floor(sec/60), s = sec%60;
  return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}
function clockNow(d){ return fmt12(d); }
function timeStr12(hhmm){
  if(!hhmm) return '';
  const parts = hhmm.split(':');
  const h = parseInt(parts[0],10), m = parseInt(parts[1],10);
  const ampm = h>=12 ? 'م' : 'ص';
  let hh = h%12; if(hh===0) hh=12;
  return String(hh).padStart(2,'0')+':'+String(m).padStart(2,'0')+' '+ampm;
}

/* ================= 12-HOUR TIME PICKERS ================= */
function buildTime12Select(prefix, defaultH, defaultM, defaultAmpm){
  const hourSel = document.getElementById(prefix+'Hour');
  const minSel = document.getElementById(prefix+'Min');
  hourSel.innerHTML = Array.from({length:12},(_,i)=>i+1).map(h=>`<option value="${h}">${h}</option>`).join('');
  minSel.innerHTML = Array.from({length:12},(_,i)=>i*5).map(m=>`<option value="${m}">${String(m).padStart(2,'0')}</option>`).join('');
  hourSel.value = defaultH;
  minSel.value = defaultM;
  document.getElementById(prefix+'Ampm').value = defaultAmpm;
}
function getTime12Value(prefix){
  const h = parseInt(document.getElementById(prefix+'Hour').value,10);
  const m = parseInt(document.getElementById(prefix+'Min').value,10);
  const ampm = document.getElementById(prefix+'Ampm').value;
  let hh = h%12;
  if(ampm==='م') hh += 12;
  return String(hh).padStart(2,'0')+':'+String(m).padStart(2,'0');
}
function setTime12Value(prefix, hhmm){
  if(!hhmm) return;
  const [H,M] = hhmm.split(':').map(Number);
  const ampm = H>=12 ? 'م' : 'ص';
  let h12 = H%12; if(h12===0) h12=12;
  const mRounded = Math.round(M/5)*5 % 60;
  document.getElementById(prefix+'Hour').value = h12;
  document.getElementById(prefix+'Min').value = mRounded;
  document.getElementById(prefix+'Ampm').value = ampm;
}
function toggleTimePicker(prefix){
  const enabled = document.getElementById(prefix+'Enable').checked;
  document.getElementById(prefix+'Picker').style.display = enabled ? 'flex' : 'none';
}
function ensureSchedTimer(s){
  if(!s.mode) s.mode = 'countdown';
  if(s.mode==='countdown'){
    if(!s.totalSec){
      s.totalSec = (s.duration||45)*60;
      s.remainingSec = s.totalSec;
      s.status = s.status || 'idle';
    }
  }else{
    if(s.elapsedSec===undefined){ s.elapsedSec = 0; }
    s.status = s.status || 'idle';
  }
}
function findItem(type,id){
  if(type==='task') return store.tasks.find(x=>x.id===id);
  const s = store.schedule.find(x=>x.id===id);
  if(s) ensureSchedTimer(s);
  return s;
}
function historyKeyFor(type){ return type==='task' ? 'taskHistory' : 'subjHistory'; }

/* ================= ADD TASK / SUBJECT ================= */
function addTask(){
  const name = document.getElementById('taskName').value.trim();
  const mode = selectedTaskMode;
  const dur = parseInt(document.getElementById('taskDuration').value)||25;
  const date = document.getElementById('taskDate').value || todayISO();
  const time = document.getElementById('taskTimeEnable').checked ? getTime12Value('taskTime') : '';
  if(!name){ toast('اكتب اسم المهمة أولاً'); return; }
  const item = {id:'t'+Date.now(), name, icon:selectedTaskIcon, mode,
    totalSec: mode==='countdown'?dur*60:0, remainingSec: mode==='countdown'?dur*60:0, elapsedSec:0,
    status:'idle', createdAt:Date.now(), scheduledDate:date, scheduledTime:time};
  store.tasks.unshift(item);
  saveStore();
  document.getElementById('taskName').value='';
  document.getElementById('taskDate').value = todayISO();
  document.getElementById('taskTimeEnable').checked = false;
  document.getElementById('taskTimePicker').style.display = 'none';
  setTaskMode('countdown');
  togglePanel('taskPanel');
  renderTasks();
  toast(date===todayISO() ? 'تمت إضافة المهمة ✓' : `تمت جدولة المهمة ليوم ${formatDateShort(date)} ✓`);
}
function addSubject(){
  const name = document.getElementById('subjName').value.trim();
  if(!name){ toast('اكتب اسم المادة أولاً'); return; }
  const item = {id:'s'+Date.now(), name, icon:selectedSubjIcon, createdAt:Date.now()};
  store.subjects.unshift(item);
  saveStore();
  document.getElementById('subjName').value='';
  togglePanel('subjPanel');
  renderSubjectChips();
  buildSchedSubjectPicker();
  buildNotesSubjectSelect();
  toast('تمت إضافة المادة ✓ — دوس عليها تحت لتجدولها في الجدول');
}

/* ================= TIMER ENGINE (tasks + schedule sessions) ================= */
function keyOf(type,id){ return type+'_'+id; }

function startTimer(type,id){
  const item = findItem(type,id);
  if(!item || item.status==='running') return;
  item.status='running';
  saveStore();
  const k = keyOf(type,id);
  if(intervals[k]) clearInterval(intervals[k]);
  intervals[k] = setInterval(()=>tick(type,id), 1000);
  setActive(type,id);
  render(type);
}
function pauseTimer(type,id){
  const item = findItem(type,id);
  if(!item) return;
  item.status='paused';
  const k = keyOf(type,id);
  if(intervals[k]){ clearInterval(intervals[k]); delete intervals[k]; }
  saveStore();
  render(type);
}
function tick(type,id){
  const item = findItem(type,id);
  if(!item || item.status!=='running') return;
  if(item.mode==='countup'){
    item.elapsedSec = (item.elapsedSec||0) + 1;
    saveStore();
    render(type);
    return;
  }
  item.remainingSec--;
  if(item.remainingSec<=0){
    item.remainingSec = 0;
    finishItem(type,id,true);
    return;
  }
  saveStore();
  render(type);
}
function snoozeItem(type,id){
  const item = findItem(type,id);
  if(!item) return;
  if(item.mode==='countup'){ toast('التأجيل غير متاح لعدّاد تصاعدي'); return; }
  item.remainingSec += 5*60;
  item.totalSec = Math.max(item.totalSec, item.remainingSec);
  if(item.status==='finished') item.status='paused';
  saveStore();
  render(type);
  toast('تم تأجيل الوقت 5 دقائق ⏱');
}
function openResched(type,id){
  const item = findItem(type,id);
  if(!item) return;
  const nm = type==='task' ? item.name : subjNameOf(item);
  const ic = type==='task' ? item.icon : subjIconOf(item);
  reschedTarget = {type,id};
  document.getElementById('reschedTargetName').textContent = `${ic} ${nm} — اختر اليوم والوقت الجديد`;
  document.getElementById('reschedDate').value = (type==='task'?item.scheduledDate:item.date) || todayISO();
  setTime12Value('reschedTime', (type==='task'?item.scheduledTime:item.time) || '16:00');
  document.getElementById('reschedModal')?.classList.add('open');
}
function closeResched(){
  document.getElementById('reschedModal')?.classList.remove('open');
  reschedTarget = null;
}
function confirmResched(){
  if(!reschedTarget) return;
  const item = findItem(reschedTarget.type, reschedTarget.id);
  if(!item) return;
  const date = document.getElementById('reschedDate').value || todayISO();
  const time = getTime12Value('reschedTime');
  if(reschedTarget.type==='task'){
    item.scheduledDate = date; item.scheduledTime = time;
  }else{
    item.date = date; item.time = time;
  }
  if(item.status==='finished') item.status='idle';
  saveStore();
  render(reschedTarget.type);
  if(reschedTarget.type==='schedule'){ buildScheduleStrip(); renderSchedule(); renderScheduleTimeline(); renderTodayPlan(); renderMiniCalendar(); }
  toast(date===todayISO() ? 'تم التأجيل لليوم في الوقت المحدد ✓' : `تم التأجيل ليوم ${formatDateShort(date)} ✓`);
  closeResched();
}
function ctrlResched(){ if(activeItem) openResched(activeItem.type, activeItem.id); }
function subjNameOf(schedItem){ const s = store.subjects.find(x=>x.id===schedItem.subjectId); return s?s.name:'مادة محذوفة'; }
function subjIconOf(schedItem){ const s = store.subjects.find(x=>x.id===schedItem.subjectId); return s?s.icon:'❔'; }

function finishItem(type,id,auto){
  const item = findItem(type,id);
  if(!item) return;
  const k = keyOf(type,id);
  if(intervals[k]){ clearInterval(intervals[k]); delete intervals[k]; }
  item.status='finished';
  const nm = type==='task' ? item.name : subjNameOf(item);
  const ic = type==='task' ? item.icon : subjIconOf(item);
  const plannedMin = item.mode==='countup' ? Math.max(1,Math.round((item.elapsedSec||0)/60)) : Math.round(item.totalSec/60);
  const hist = store[historyKeyFor(type)];
  hist.unshift({name:nm, icon:ic, finishedAt:Date.now(), plannedMin});
  if(hist.length>60) hist.length=60;
  if(type==='schedule') item.completed = true;
  saveStore();
  render(type);
  if(type==='schedule'){ renderSchedule(); renderScheduleTimeline(); renderTodayPlan(); renderSubjectChart(); renderMiniCalendar(); }
  if(auto) playChime();
  toast(auto ? `انتهى الوقت: ${nm} 🎉` : `تم إنهاء: ${nm} ✓`);
}
function deleteItem(type,id){
  const k = keyOf(type,id);
  if(intervals[k]){ clearInterval(intervals[k]); delete intervals[k]; }
  if(type==='task') store.tasks = store.tasks.filter(x=>x.id!==id);
  else store.schedule = store.schedule.filter(x=>x.id!==id);
  if(activeItem && activeItem.type===type && activeItem.id===id) activeItem=null;
  saveStore();
  render(type);
  updateDial();
  if(type==='schedule'){ buildScheduleStrip(); renderSchedule(); renderScheduleTimeline(); renderTodayPlan(); renderMiniCalendar(); }
}
function resumeRunningTimers(){
  store.tasks.forEach(t=>{ if(t.status==='running'){ intervals[keyOf('task',t.id)] = setInterval(()=>tick('task',t.id),1000); } });
  store.schedule.forEach(s=>{ if(s.status==='running'){ ensureSchedTimer(s); intervals[keyOf('schedule',s.id)] = setInterval(()=>tick('schedule',s.id),1000); } });
}
function rolloverOldTasks(){
  const today = todayISO();
  if(localStorage.getItem('ff_lastDate') === today) return false;
  let changed = false;
  store.tasks = store.tasks.filter(t=>{
    const day = t.scheduledDate || toISO(new Date(t.createdAt||Date.now()));
    if(day < today){
      if(t.status !== 'finished'){
        const plannedMin = t.mode==='countup' ? Math.max(1,Math.round((t.elapsedSec||0)/60)) : Math.round((t.totalSec||0)/60);
        store.taskHistory.unshift({name:t.name, icon:t.icon, finishedAt:Date.now(), plannedMin});
        if(store.taskHistory.length>60) store.taskHistory.length=60;
      }
      const k = keyOf('task', t.id);
      if(intervals[k]){ clearInterval(intervals[k]); delete intervals[k]; }
      if(activeItem && activeItem.type==='task' && activeItem.id===t.id) activeItem=null;
      changed = true;
      return false;
    }
    return true;
  });
  localStorage.setItem('ff_lastDate', today);
  if(changed) saveStore();
  return changed;
}

/* ================= ACTIVE / DIAL ================= */
function setActive(type,id){
  activeItem = {type,id};
  updateDial();
}
function updateDial(){
  const ringBtn=document.getElementById('ringPlayBtn'), ringIcon=document.getElementById('ringPlayIcon');
  const btnSnooze=document.getElementById('btnSnooze'), btnFinish=document.getElementById('btnFinish'), btnResched=document.getElementById('btnResched');
  if(!activeItem){
    document.getElementById('activeIcon').textContent='🌙';
    document.getElementById('activeTime').textContent='00:00';
    document.getElementById('activeNameText').textContent='اختر مهمة أو حصة مذاكرة';
    setStatusPill('idle','بلا نشاط');
    document.getElementById('metaEndSub').textContent='—';
    ringBtn.disabled=true; btnSnooze.disabled=true; btnFinish.disabled=true; btnResched.disabled=true;
    ringIcon.textContent='▶';
    document.getElementById('ringCaption').textContent='Start';
    updateProgressRing();
    return;
  }
  const item = findItem(activeItem.type, activeItem.id);
  if(!item){ activeItem=null; updateDial(); return; }
  ringBtn.disabled=false; btnSnooze.disabled=(item.mode==='countup'); btnFinish.disabled=false; btnResched.disabled=false;
  const nm = activeItem.type==='task' ? item.name : subjNameOf(item);
  const ic = activeItem.type==='task' ? item.icon : subjIconOf(item);
  document.getElementById('activeIcon').textContent = ic;
  document.getElementById('activeTime').textContent = fmt(item.mode==='countup' ? (item.elapsedSec||0) : item.remainingSec);
  document.getElementById('activeNameText').textContent = nm;

  const statusLabels = {idle:'لم يبدأ بعد', running:'جاري الآن', paused:'متوقف مؤقتًا', finished:'انتهى'};
  setStatusPill(item.status, statusLabels[item.status]||item.status);
  ringIcon.textContent = item.status==='running' ? '⏸' : '▶';
  ringBtn.disabled = item.status==='finished';
  document.getElementById('ringCaption').textContent = item.status==='running' ? 'Pause' : (item.status==='finished' ? 'Done' : 'Start');

  if(item.mode==='countup'){
    document.getElementById('metaEndSub').textContent = item.status==='running' ? '⏳ يعدّ تصاعديًا...' : 'جاهز للبدء من صفر';
  }else{
    document.getElementById('metaEndSub').textContent = 'ينتهي: ' + clockNow(new Date(Date.now()+item.remainingSec*1000));
  }
  updateProgressRing();
}
function setStatusPill(status,text){
  const el = document.getElementById('activeStatus');
  el.className = 'status-pill status-'+status;
  el.textContent = text;
}
function ctrlPlayPause(){
  if(!activeItem) return;
  const item = findItem(activeItem.type, activeItem.id);
  if(!item) return;
  if(item.status==='running') pauseTimer(activeItem.type, activeItem.id);
  else startTimer(activeItem.type, activeItem.id);
  updateDial();
}
function ctrlSnooze(){ if(activeItem){ snoozeItem(activeItem.type, activeItem.id); updateDial(); } }
function ctrlFinish(){ if(activeItem){ finishItem(activeItem.type, activeItem.id,false); updateDial(); } }

/* ================= RENDER: TASKS ================= */
function render(type){
  if(type==='task') renderTasks(); else { renderSchedule(); renderScheduleTimeline(); }
  if(activeItem) updateDial();
}
function renderAll(){
  renderTasks(); renderSubjectChips(); renderHistory();
  buildSchedSubjectPicker(); buildScheduleStrip(); renderSchedule(); renderScheduleTimeline();
  renderTodayPlan(); renderSubjectChart(); renderMiniCalendar(); buildNotesSubjectSelect();
}

function taskRowHtml(item){
  const isCountup = item.mode==='countup';
  const pct = (!isCountup && item.totalSec>0) ? Math.round((1-item.remainingSec/item.totalSec)*100) : 0;
  const isActive = activeItem && activeItem.type==='task' && activeItem.id===item.id;
  const statusTxt = {idle:'لم يبدأ',running:'يعمل الآن',paused:'متوقف',finished:'مكتمل'}[item.status];
  const durTxt = isCountup ? '⏳ عدّاد تصاعدي' : `${Math.round(item.totalSec/60)} د`;
  const dateBadge = (item.scheduledDate && item.scheduledDate!==todayISO())
    ? `<span class="row-date-badge">📅 ${formatDateShort(item.scheduledDate)}${item.scheduledTime?' · '+timeStr12(item.scheduledTime):''}</span>`
    : (item.scheduledTime ? `<span class="row-date-badge">⏰ ${timeStr12(item.scheduledTime)}</span>` : '');
  return `
  <div class="item-row${isActive?' active-item':''}" onclick="selectFromRow(event,'task','${item.id}')">
    <div class="item-icon">${item.icon}</div>
    <div class="item-info">
      <div class="nm">${escapeHtml(item.name)}</div>
      <div class="meta-line">${statusTxt} · ${durTxt} ${dateBadge}</div>
      ${isCountup ? '' : `<div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>`}
    </div>
    <div class="mini-time mono">${fmt(isCountup ? (item.elapsedSec||0) : item.remainingSec)}</div>
    <div class="row-btns">
      <button class="icon-btn play" title="${item.status==='running'?'إيقاف':'تشغيل'}" onclick="rowToggle(event,'task','${item.id}')">${item.status==='running'?'⏸':'▶'}</button>
      ${isCountup ? '' : `<button class="icon-btn" title="تأجيل 5 دقائق" onclick="rowSnooze(event,'task','${item.id}')">⏱</button>`}
      <button class="icon-btn" title="تأجيل ليوم/وقت آخر" onclick="rowResched(event,'task','${item.id}')">📅</button>
      <button class="icon-btn fin" title="إنهاء" onclick="rowFinish(event,'task','${item.id}')">✔</button>
      <button class="icon-btn del" title="حذف" onclick="rowDelete(event,'task','${item.id}')">🗑</button>
    </div>
  </div>`;
}
function renderTasks(){
  const list = document.getElementById('ffTaskList');
  document.getElementById('taskCount').textContent = `(${store.tasks.length})`;
  if(!store.tasks.length){ list.innerHTML = `<div class="empty-note">لا توجد مهام بعد — أضف أول مهمة لتبدأ التركيز 🎯</div>`; return; }
  const today = todayISO();
  const todays = store.tasks.filter(t=>!t.scheduledDate || t.scheduledDate<=today);
  const upcoming = store.tasks.filter(t=>t.scheduledDate && t.scheduledDate>today);
  let html = todays.map(t=>taskRowHtml(t)).join('');
  if(upcoming.length){
    html += `<div class="section-subhead">🗓️ مهام مجدولة قادمة</div>` + upcoming.map(t=>taskRowHtml(t)).join('');
  }
  list.innerHTML = html || `<div class="empty-note">لا توجد مهام اليوم</div>`;
}
function renderSubjectChips(){
  const holder = document.getElementById('subjChipRow');
  if(!store.subjects.length){ holder.innerHTML = `<div class="empty-note">لا توجد مواد بعد — أضف مادتك الأولى 📚</div>`; return; }
  holder.innerHTML = store.subjects.map(s=>`
    <button class="subj-chip" onclick="quickScheduleSubject('${s.id}')">
      <span class="chip-ic">${s.icon}</span>${escapeHtml(s.name)}
      <span class="chip-hint">+ جدولة</span>
    </button>`).join('');
}
function quickScheduleSubject(id){
  selectedSchedSubjectId = id;
  buildSchedSubjectPicker();
  openSchedPanel();
}
function selectFromRow(e,type,id){ setActive(type,id); render(type); }
function rowToggle(e,type,id){ e.stopPropagation(); const item=findItem(type,id); if(item.status==='running') pauseTimer(type,id); else startTimer(type,id); }
function rowSnooze(e,type,id){ e.stopPropagation(); snoozeItem(type,id); }
function rowResched(e,type,id){ e.stopPropagation(); openResched(type,id); }
function rowFinish(e,type,id){ e.stopPropagation(); finishItem(type,id,false); }
function rowDelete(e,type,id){ e.stopPropagation(); deleteItem(type,id); }
function rowNote(e,id){ e.stopPropagation(); openNoteModal(id); }
let noteTargetId = null;
function openNoteModal(id){
  const s = store.schedule.find(x=>x.id===id);
  if(!s) return;
  noteTargetId = id;
  const subj = store.subjects.find(x=>x.id===s.subjectId);
  document.getElementById('noteModalName').textContent = `${subj?subj.icon:'📖'} ${subj?subj.name:'مادة'} — ${timeStr12(s.time)}`;
  document.getElementById('noteModalText').value = s.note || '';
  document.getElementById('noteModal')?.classList.add('open');
}
function closeNoteModal(){
  document.getElementById('noteModal')?.classList.remove('open');
  noteTargetId = null;
}
function confirmNote(){
  if(!noteTargetId) return;
  const s = store.schedule.find(x=>x.id===noteTargetId);
  if(!s) return;
  s.note = document.getElementById('noteModalText').value.trim();
  saveStore();
  renderSchedule(); renderScheduleTimeline(); renderTodayPlan();
  toast('تم حفظ الملاحظة ✓');
  closeNoteModal();
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ================= HISTORY ================= */
function renderHistory(){
  const th = document.getElementById('taskHistoryList');
  th.innerHTML = store.taskHistory.length ? store.taskHistory.map(h=>histRow(h)).join('') : `<div class="empty-note">لا يوجد سجل مهام حتى الآن</div>`;
  const sh = document.getElementById('subjHistoryList');
  sh.innerHTML = store.subjHistory.length ? store.subjHistory.map(h=>histRow(h)).join('') : `<div class="empty-note">لا يوجد سجل مذاكرة حتى الآن</div>`;
}
function histRow(h){
  const d = new Date(h.finishedAt);
  const dateStr = d.toLocaleDateString('ar-EG',{day:'2-digit',month:'2-digit'}) + ' - ' + clockNow(d);
  return `<div class="hist-row"><span class="h-icon">${h.icon}</span><span class="h-name">${escapeHtml(h.name)}</span><span class="h-date">${h.plannedMin} د · ${dateStr}</span></div>`;
}
function clearHistory(key){
  if(!confirm('مسح السجل بالكامل؟')) return;
  store[key] = [];
  saveStore();
  renderHistory();
  if(key==='subjHistory') renderSubjectChart();
}
function toggleCollapse(wrapId, btnId){
  document.getElementById(wrapId).classList.toggle('open');
  document.getElementById(btnId).classList.toggle('open');
}

/* ================= SCHEDULE (date-based, playable) ================= */
function buildSchedSubjectPicker(){
  const holder = document.getElementById('schedSubjectPicker');
  if(!store.subjects.length){
    holder.innerHTML = `<div class="empty-note" style="padding:10px;">أضف مادة أولاً من الأعلى قبل إنشاء الجدول</div>`;
    selectedSchedSubjectId = null;
    return;
  }
  if(!selectedSchedSubjectId || !store.subjects.find(s=>s.id===selectedSchedSubjectId)){
    selectedSchedSubjectId = store.subjects[0].id;
  }
  holder.innerHTML = store.subjects.map(s=>`
    <div class="subj-pick-item${s.id===selectedSchedSubjectId?' sel':''}" data-sid="${s.id}" onclick="pickSchedSubject('${s.id}')">
      <span class="ic">${s.icon}</span><span>${escapeHtml(s.name)}</span>
    </div>`).join('');
}
function pickSchedSubject(id){
  selectedSchedSubjectId = id;
  document.querySelectorAll('#schedSubjectPicker .subj-pick-item').forEach(el=>el.classList.toggle('sel', el.dataset.sid===id));
}
function buildScheduleStrip(){
  const holder = document.getElementById('dateStrip');
  const monthLabel = document.getElementById('scheduleMonthLabel');
  const base = new Date(scheduleStripStart); base.setHours(0,0,0,0);
  let html='';
  for(let i=0;i<7;i++){
    const d = new Date(base); d.setDate(base.getDate()+i);
    const iso = toISO(d);
    const dayName = d.toLocaleDateString('ar-EG',{weekday:'short'});
    const dayNum = d.getDate();
    const isSel = iso===selectedScheduleDate;
    const hasItems = store.schedule.some(s=>s.date===iso);
    html += `<button class="date-chip${isSel?' active':''}" data-date="${iso}" onclick="pickScheduleDate('${iso}')">
      <span class="dn">${dayName}</span><strong>${dayNum}</strong>${hasItems?'<span class="dot"></span>':''}
    </button>`;
  }
  holder.innerHTML = html;
  monthLabel.textContent = base.toLocaleDateString('ar-EG',{month:'long',year:'numeric'});
  document.getElementById('monthPicker').value = base.getFullYear()+'-'+String(base.getMonth()+1).padStart(2,'0');
}
function shiftStrip(days){
  scheduleStripStart.setDate(scheduleStripStart.getDate()+days);
  buildScheduleStrip();
}
function jumpToMonth(){
  const val = document.getElementById('monthPicker').value;
  if(!val) return;
  const [y,m] = val.split('-').map(Number);
  scheduleStripStart = new Date(y, m-1, 1);
  buildScheduleStrip();
}
function pickScheduleDate(iso){
  selectedScheduleDate = iso;
  buildScheduleStrip();
  renderSchedule();
  renderScheduleTimeline();
  renderMiniCalendar();
}
function setScheduleView(v){
  scheduleView = v;
  document.getElementById('viewListBtn')?.classList.toggle('active', v==='list');
  document.getElementById('viewTimelineBtn')?.classList.toggle('active', v==='timeline');
  document.getElementById('scheduleList').style.display = v==='list' ? 'block' : 'none';
  document.getElementById('scheduleTimeline').style.display = v==='timeline' ? 'block' : 'none';
}
function addSchedule(){
  const date = document.getElementById('schedDate').value || selectedScheduleDate;
  const time = getTime12Value('schedTime');
  const mode = selectedSchedMode;
  const dur = parseInt(document.getElementById('schedDuration').value)||45;
  const tag = document.getElementById('schedTag').value;
  const note = document.getElementById('schedNote').value.trim();
  if(!selectedSchedSubjectId){ toast('أضف مادة أولاً قبل إنشاء الجدول'); return; }
  store.schedule.push({id:'sc'+Date.now(), date, time, subjectId:selectedSchedSubjectId, mode,
    duration:dur, tag, note, completed:false, status:'idle',
    totalSec: mode==='countdown'?dur*60:0, remainingSec: mode==='countdown'?dur*60:0, elapsedSec:0});
  saveStore();
  document.getElementById('schedNote').value = '';
  setSchedMode('countdown');
  togglePanel('schedPanel');
  selectedScheduleDate = date;
  buildScheduleStrip();
  renderSchedule();
  renderScheduleTimeline();
  renderTodayPlan();
  renderMiniCalendar();
  toast('أُضيف للجدول ✓');
}
function tagClass(tag){
  if(tag==='استراحة') return 'rest';
  if(tag==='واجب') return 'homework';
  return '';
}
function scheduleRowHtml(s){
  ensureSchedTimer(s);
  const isCountup = s.mode==='countup';
  const subj = store.subjects.find(x=>x.id===s.subjectId);
  const ic = subj ? subj.icon : '❔';
  const nm = subj ? subj.name : 'مادة محذوفة';
  const isActive = activeItem && activeItem.type==='schedule' && activeItem.id===s.id;
  const pct = (!isCountup && s.totalSec>0) ? Math.round((1-s.remainingSec/s.totalSec)*100) : 0;
  const statusTxt = s.completed ? 'مكتملة' : {idle:'لم تبدأ',running:'شغّالة الآن',paused:'متوقفة',finished:'مكتملة'}[s.status];
  const durTxt = isCountup ? '⏳ عدّاد تصاعدي' : `${Math.round(s.totalSec/60)} د`;
  return `
  <div class="item-row${isActive?' active-item':''}" onclick="selectFromRow(event,'schedule','${s.id}')">
    <div class="item-icon">${ic}</div>
    <div class="item-info">
      <div class="nm">${escapeHtml(nm)}</div>
      <div class="meta-line">${statusTxt} · <span class="row-date-badge">🕒 ${timeStr12(s.time)}</span> · ${durTxt} <span class="row-date-badge">${s.completed?'✅ منتهية':(s.tag||'مذاكرة')}</span></div>
      ${isCountup ? '' : `<div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>`}
      ${s.note ? `<div class="item-note" title="${escapeHtml(s.note)}">📝 ${escapeHtml(s.note)}</div>` : ''}
    </div>
    <div class="mini-time mono">${fmt(isCountup ? (s.elapsedSec||0) : s.remainingSec)}</div>
    <div class="row-btns">
      <button class="icon-btn play" title="${s.status==='running'?'إيقاف':'تشغيل'}" onclick="rowToggle(event,'schedule','${s.id}')">${s.status==='running'?'⏸':'▶'}</button>
      <button class="icon-btn" title="ملاحظة" onclick="rowNote(event,'${s.id}')">📝</button>
      <button class="icon-btn" title="تأجيل ليوم/وقت آخر" onclick="rowResched(event,'schedule','${s.id}')">📅</button>
      <button class="icon-btn fin" title="إنهاء" onclick="rowFinish(event,'schedule','${s.id}')">✔</button>
      <button class="icon-btn del" title="حذف" onclick="rowDelete(event,'schedule','${s.id}')">🗑</button>
    </div>
  </div>`;
}
function renderSchedule(){
  const items = store.schedule.filter(s=>s.date===selectedScheduleDate).sort((a,b)=>a.time.localeCompare(b.time));
  const list = document.getElementById('scheduleList');
  if(!items.length){ list.innerHTML = `<div class="empty-note">لا توجد عناصر في خطة يوم ${formatDateShort(selectedScheduleDate)}</div>`; return; }
  list.innerHTML = items.map(s=>scheduleRowHtml(s)).join('');
}
function addMinutesToTime(timeStr, mins){
  const [h,m] = timeStr.split(':').map(Number);
  let total = h*60+m+mins;
  total = ((total%1440)+1440)%1440;
  const hh = Math.floor(total/60), mm = total%60;
  return String(hh).padStart(2,'0')+':'+String(mm).padStart(2,'0');
}
function renderScheduleTimeline(){
  // weekly board: one column per visible day, small dot+box per item, red when completed
  const holder = document.getElementById('scheduleTimeline');
  const base = new Date(scheduleStripStart); base.setHours(0,0,0,0);
  let html = '<div class="board-wrap">';
  for(let i=0;i<7;i++){
    const d = new Date(base); d.setDate(base.getDate()+i);
    const iso = toISO(d);
    const dayName = d.toLocaleDateString('ar-EG',{weekday:'short'});
    const items = store.schedule.filter(s=>s.date===iso).sort((a,b)=>a.time.localeCompare(b.time));
    html += `<div class="board-col${iso===selectedScheduleDate?' board-col-active':''}">
      <div class="board-col-head" onclick="pickScheduleDate('${iso}')" style="cursor:pointer;">${dayName}<strong>${d.getDate()}</strong></div>`;
    if(!items.length){
      html += `<div class="board-empty">لا يوجد</div>`;
    }else{
      items.forEach(s=>{
        const subj = store.subjects.find(x=>x.id===s.subjectId);
        const ic = subj ? subj.icon : '❔';
        const nm = subj ? subj.name : 'محذوفة';
        html += `<div class="board-item${s.completed?' board-done':''}">
          <span class="board-dot"></span>
          <div class="board-box" onclick="pickScheduleDate('${iso}')" title="${escapeHtml(nm)} — ${timeStr12(s.time)}${s.note?' — '+escapeHtml(s.note):''}">
            <div class="b-top"><span>${ic}</span><span class="b-nm">${escapeHtml(nm)}</span>${s.note?'<span> 📝</span>':''}</div>
            <span class="b-time">${timeStr12(s.time)}${s.completed?' ✕':''}</span>
          </div>
        </div>`;
      });
    }
    html += `</div>`;
  }
  html += '</div>';
  holder.innerHTML = html;
}
function renderTodayPlan(){
  const block = document.getElementById('todayPlanBlock');
  const today = todayISO();
  const dayName = new Date().toLocaleDateString('ar-EG',{weekday:'long'});
  document.getElementById('todayPlanDayName').textContent = dayName;
  const items = store.schedule.filter(s=>s.date===today).sort((a,b)=>a.time.localeCompare(b.time));
  if(!items.length){ block.style.display='none'; return; }
  block.style.display='block';
  document.getElementById('todayPlanList').innerHTML = items.map(s=>{
    ensureSchedTimer(s);
    const subj = store.subjects.find(x=>x.id===s.subjectId);
    const ic = subj ? subj.icon : '❔';
    const nm = subj ? subj.name : 'مادة محذوفة';
    const btnLabel = s.completed ? '✓ تم' : (s.status==='running' ? '⏸ إيقاف' : '▶ ابدأ');
    const disabled = (!subj || s.completed) ? 'disabled' : '';
    return `<div class="today-plan-row">
      <span class="tp-ic">${ic}</span>
      <span class="tp-time mono">${timeStr12(s.time)}</span>
      <span class="tp-name">${escapeHtml(nm)} <span class="row-date-badge">${s.tag||'مذاكرة'}</span></span>
      <button ${disabled} onclick="startTodayPlanItem('${s.id}')">${btnLabel}</button>
    </div>`;
  }).join('');
}
function startTodayPlanItem(scheduleId){
  const s = store.schedule.find(x=>x.id===scheduleId);
  if(!s) return;
  ensureSchedTimer(s);
  if(s.status==='running'){ pauseTimer('schedule', s.id); }
  else{ setActive('schedule', s.id); startTimer('schedule', s.id); }
  switchTab('students');
  renderTodayPlan();
  toast('🎯 خطة اليوم جاهزة على التايمر بالأعلى');
}
function deleteSchedule(id){ deleteItem('schedule', id); }
function exportPlan(){
  if(!store.schedule.length){ toast('أضف عناصر للجدول أولاً'); return; }
  const grouped = {};
  store.schedule.forEach(s=>{ (grouped[s.date] = grouped[s.date]||[]).push(s); });
  const dates = Object.keys(grouped).sort();
  let html = '';
  dates.forEach(date=>{
    const d = new Date(date+'T00:00:00');
    html += `<h3>${d.toLocaleDateString('ar-EG',{weekday:'long', day:'numeric', month:'long'})}</h3>`;
    grouped[date].sort((a,b)=>a.time.localeCompare(b.time)).forEach(s=>{
      const subj = store.subjects.find(x=>x.id===s.subjectId);
      const nm = subj ? `${subj.icon} ${subj.name}` : 'مادة محذوفة';
      html += `<div class="p-row"><strong>${timeStr12(s.time)}</strong><span>${nm}</span><span>${s.tag||'مذاكرة'}</span><span>${s.mode==='countup'?'عدّاد تصاعدي':(s.duration+' دقيقة')}</span><span>${s.completed?'✅ منتهية':''}</span>${s.note?`<span>📝 ${s.note}</span>`:''}</div>`;
    });
  });
  document.getElementById('printContent').innerHTML = html || '<p>لا توجد خطة بعد.</p>';
  window.print();
}

/* ================= SUBJECT DISTRIBUTION CHART ================= */
function renderSubjectChart(){
  const holder = document.getElementById('subjChartHolder');
  if(!store.subjHistory.length){ holder.innerHTML = `<div class="empty-note">ابدأ أول جلسة مذاكرة عشان تظهر إحصائياتك هنا 📊</div>`; return; }
  const totals = {};
  store.subjHistory.forEach(h=>{ totals[h.name] = (totals[h.name]||0) + (h.plannedMin||0); });
  const entries = Object.entries(totals).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const grandTotal = entries.reduce((s,[,v])=>s+v,0) || 1;
  const palette = ['#7c6fe0','#39a6ca','#3fb88f','#e2a24c','#e2707e','#a3a9bd'];
  const r=58, C=2*Math.PI*r;
  let offset=0, segs='', legend='';
  entries.forEach(([name,val],i)=>{
    const pct = val/grandTotal;
    const len = pct*C;
    const color = palette[i%palette.length];
    segs += `<circle cx="76" cy="76" r="${r}" fill="none" stroke="${color}" stroke-width="19" stroke-dasharray="${len} ${C-len}" stroke-dashoffset="${-offset}" transform="rotate(-90 76 76)"/>`;
    offset += len;
    legend += `<div class="legend-row"><span class="dot" style="background:${color}"></span><span class="lg-name">${escapeHtml(name)}</span><span class="lg-pct">${Math.round(pct*100)}%</span></div>`;
  });
  holder.innerHTML = `
    <div class="chart-flex">
      <svg viewBox="0 0 152 152" width="128" height="128">
        <circle cx="76" cy="76" r="${r}" fill="none" stroke="#ebeef8" stroke-width="19"/>
        ${segs}
        <text x="76" y="72" text-anchor="middle" font-size="9.5" fill="#7c8399">الإجمالي</text>
        <text x="76" y="88" text-anchor="middle" font-size="14" font-weight="800" fill="#232945">${grandTotal} د</text>
      </svg>
      <div class="chart-legend">${legend}</div>
    </div>`;
}

/* ================= MINI PROFESSIONAL CALENDAR ================= */
function renderMiniCalendar(){
  const holder = document.getElementById('miniCalendar');
  const y = calendarMonth.getFullYear(), m = calendarMonth.getMonth();
  const first = new Date(y,m,1);
  const startOffset = (first.getDay()+1)%7; // week starts Saturday
  const daysInMonth = new Date(y,m+1,0).getDate();
  const prevDays = new Date(y,m,0).getDate();
  const todayIso = todayISO();
  const dow = ['س','ح','ن','ث','ر','خ','ج'];
  let cells = '';
  for(let i=0;i<startOffset;i++){
    const dayNum = prevDays - startOffset + i + 1;
    cells += `<div class="cal-day other-month">${dayNum}</div>`;
  }
  for(let d=1; d<=daysInMonth; d++){
    const iso = toISO(new Date(y,m,d));
    const hasItems = store.schedule.some(s=>s.date===iso);
    const isToday = iso===todayIso;
    const isSel = iso===selectedScheduleDate;
    cells += `<div class="cal-day${isToday?' is-today':''}${isSel?' is-selected':''}" onclick="calendarPick('${iso}')">${d}${hasItems?'<span class="cal-dot"></span>':''}</div>`;
  }
  const totalCells = startOffset + daysInMonth;
  const remaining = (7 - (totalCells % 7)) % 7;
  for(let i=1;i<=remaining;i++){ cells += `<div class="cal-day other-month">${i}</div>`; }
  holder.innerHTML = `
    <div class="cal-head">
      <div class="cal-nav"><button onclick="calShift(-1)">‹</button></div>
      <span class="cal-title">${first.toLocaleDateString('ar-EG',{month:'long',year:'numeric'})}</span>
      <div class="cal-nav"><button onclick="calShift(1)">›</button></div>
    </div>
    <div class="cal-grid">${dow.map(d=>`<div class="cal-dow">${d}</div>`).join('')}${cells}</div>
  `;
}
function calShift(n){
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth()+n, 1);
  renderMiniCalendar();
}
function calendarPick(iso){
  selectedScheduleDate = iso;
  const d = new Date(iso+'T00:00:00');
  scheduleStripStart = new Date(d);
  buildScheduleStrip();
  renderSchedule();
  renderScheduleTimeline();
  renderMiniCalendar();
  toast(`تم اختيار ${formatDateShort(iso)}`);
}

/* ================= SUBJECT NOTES ================= */
function buildNotesSubjectSelect(){
  const sel = document.getElementById('notesSubjectSelect');
  const box = document.getElementById('notesText');
  if(!store.subjects.length){
    sel.innerHTML = `<option value="">أضف مادة أولاً</option>`;
    box.value=''; box.disabled=true;
    return;
  }
  box.disabled=false;
  sel.innerHTML = store.subjects.map(s=>`<option value="${s.id}">${s.icon} ${escapeHtml(s.name)}</option>`).join('');
  loadSubjectNote();
}
function loadSubjectNote(){
  const id = document.getElementById('notesSubjectSelect').value;
  document.getElementById('notesText').value = (store.subjectNotes && store.subjectNotes[id]) || '';
}
function saveSubjectNote(){
  const id = document.getElementById('notesSubjectSelect').value;
  if(!id){ toast('أضف مادة أولاً'); return; }
  if(!store.subjectNotes) store.subjectNotes = {};
  store.subjectNotes[id] = document.getElementById('notesText').value;
  saveStore();
  toast('تم حفظ الملاحظة ✓');
}

/* ================= SHARE / QR ================= */
function openShare(){
  document.getElementById('shareModal')?.classList.add('open');
  const link = window.location.href;
  document.getElementById('shareLink').value = link;
  const holder = document.getElementById('qrcode');
  holder.innerHTML='';
  try{
    if(window.QRCode){
      new QRCode(holder, {text: link, width:180, height:180, colorDark:"#232945", colorLight:"#ffffff"});
    }else{
      holder.innerHTML = '<p style="color:#333;font-size:12px;">تعذر تحميل مكتبة QR (تحتاج اتصال إنترنت)</p>';
    }
  }catch(e){
    holder.innerHTML = '<p style="color:#333;font-size:12px;">تعذر إنشاء رمز QR</p>';
  }
}
function closeShare(){ document.getElementById('shareModal')?.classList.remove('open'); }
function copyLink(){
  const inp = document.getElementById('shareLink');
  inp.select();
  navigator.clipboard?.writeText(inp.value).then(()=>toast('تم نسخ الرابط ✓')).catch(()=>toast('انسخه يدويًا'));
}

/* ================= SOUND ALERT ================= */
let soundOn = localStorage.getItem('ff_sound') !== 'off';
let audioCtx = null;
function updateSoundBtn(){ document.getElementById('soundToggleBtn').textContent = soundOn ? '🔔' : '🔕'; }
function toggleSound(){
  soundOn = !soundOn;
  localStorage.setItem('ff_sound', soundOn ? 'on' : 'off');
  updateSoundBtn();
  if(soundOn) playChime();
  toast(soundOn ? 'صوت التنبيه مُفعّل 🔔' : 'صوت التنبيه متوقف 🔕');
}
function playChime(){
  if(!soundOn) return;
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==='suspended') audioCtx.resume();
    const now = audioCtx.currentTime;
    const notes = [880, 1108, 1318, 1108];
    notes.forEach((f,i)=>{
      const t0 = now + i*0.16;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t0);
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(0.22, t0+0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0+0.38);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(t0);
      osc.stop(t0+0.4);
    });
  }catch(e){ /* audio not available */ }
}
updateSoundBtn();

/* ================= TOAST ================= */
let toastTimer;
function toast(msg){
  const t = document.getElementById('ffToast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}


/* expose functions referenced by inline onclick= attributes */
window.addSchedule=addSchedule;
window.addSubject=addSubject;
window.addTask=addTask;
window.calShift=calShift;
window.calendarPick=calendarPick;
window.clearHistory=clearHistory;
window.closeNoteModal=closeNoteModal;
window.closeResched=closeResched;
window.closeShare=closeShare;
window.confirmNote=confirmNote;
window.confirmResched=confirmResched;
window.copyLink=copyLink;
window.ctrlFinish=ctrlFinish;
window.ctrlPlayPause=ctrlPlayPause;
window.ctrlResched=ctrlResched;
window.ctrlSnooze=ctrlSnooze;
window.exportPlan=exportPlan;
window.openSchedPanel=openSchedPanel;
window.openShare=openShare;
window.pickSchedSubject=pickSchedSubject;
window.pickScheduleDate=pickScheduleDate;
window.quickScheduleSubject=quickScheduleSubject;
window.rowDelete=rowDelete;
window.rowFinish=rowFinish;
window.rowNote=rowNote;
window.rowResched=rowResched;
window.rowSnooze=rowSnooze;
window.rowToggle=rowToggle;
window.saveSubjectNote=saveSubjectNote;
window.selectFromRow=selectFromRow;
window.setSchedMode=setSchedMode;
window.setScheduleView=setScheduleView;
window.setTaskMode=setTaskMode;
window.shiftStrip=shiftStrip;
window.startTodayPlanItem=startTodayPlanItem;
window.switchTab=switchTab;
window.toggleCollapse=toggleCollapse;
window.togglePanel=togglePanel;
window.toggleSound=toggleSound;
})();


/* ===== Original inline script 10 ===== */

/* ===== Protect (اعتني بنفسك) — منطق مستقل داخل IIFE ===== */
(function(){

/* ================= STORAGE ================= */
const STORAGE_KEY = 'selfcare_v1';
function loadStore(){
  let data;
  try{ data = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); }catch(e){ data = null; }
  if(!data) data = {};
  if(!data.settings) data.settings = {};
  const s = data.settings;
  if(s.dark===undefined) s.dark = false;
  if(!s.fbUrl) s.fbUrl = 'https://www.facebook.com';
  if(!s.ttUrl) s.ttUrl = 'https://www.tiktok.com';
  if(!s.fbMinutes) s.fbMinutes = 15;
  if(!s.ttMinutes) s.ttMinutes = 15;
  if(!s.habitName) s.habitName = '';
  if(!data.logs) data.logs = {};
  if(!data.logs.social) data.logs.social = {};
  if(!data.logs.habit) data.logs.habit = {};
  if(!data.tasksByDate) data.tasksByDate = {};
  if(!data.timers) data.timers = {
    fb:{running:false, remainingSec:s.fbMinutes*60, endAt:null},
    tt:{running:false, remainingSec:s.ttMinutes*60, endAt:null}
  };
  return data;
}
let store = loadStore();
function saveStore(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); }
window.__protectStore=store;

/* ================= HELPERS ================= */
function toISO(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function todayISO(){ return toISO(new Date()); }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function fmtTime(sec){
  sec = Math.max(0, Math.round(sec));
  const h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = sec%60;
  if(h>0) return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}
function escapeHtml(str){ return String(str).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
let toastTimer;
function toast(msg){
  const t = document.getElementById('careToast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
}

/* ================= THEME ================= */
function applyTheme(){
  document.getElementById('protectRoot').setAttribute('data-theme', store.settings.dark ? 'dark' : 'light');
  document.getElementById('themeBtn').textContent = store.settings.dark ? '☀️' : '🌙';
}
function toggleTheme(){
  store.settings.dark = !store.settings.dark;
  saveStore();
  applyTheme();
}

/* ================= COVER TIPS (rotating) ================= */
const COVER_TIPS = [
  'كل خطوة صغيرة بتاخدها النهاردة بتفرق بكرة 🌱',
  'الاستمرارية أهم من الكمال، كمّل زي ما إنت 💪',
  'وقتك أثمن حاجة تملكها — اصرفه صح ⏳',
  'يوم صعب مش معناه فشل، معناه إنك لسه بتحاول 🌤️',
  'اهتم بدماغك زي ما بتهتم بجسمك 🧠',
  'راحة العقل أهم استثمار تعمله لنفسك ✨'
];
document.getElementById('coverTip').textContent = pick(COVER_TIPS);

/* ================= SOCIAL MEDIA TIMERS ================= */
function toggleUrlEdit(app){
  const row = document.getElementById(app+'UrlRow');
  row.classList.toggle('open');
  document.getElementById(app+'UrlInput').value = store.settings[app+'Url'];
}
function saveUrl(app){
  const val = document.getElementById(app+'UrlInput').value.trim();
  if(val) store.settings[app+'Url'] = val;
  saveStore();
  document.getElementById(app+'UrlRow').classList.remove('open');
  toast('تم حفظ الرابط ✓');
}
function openApp(app){
  window.open(store.settings[app+'Url'], '_blank');
}
function setDuration(app){
  const val = parseInt(document.getElementById(app+'MinutesInput').value) || 15;
  store.settings[app+'Minutes'] = val;
  const t = store.timers[app];
  if(!t.running){ t.remainingSec = val*60; t.endAt=null; }
  saveStore();
  updateTimerUI(app);
}
function toggleAppTimer(app){
  const t = store.timers[app];
  if(t.running) pauseAppTimer(app); else startAppTimer(app);
}
function startAppTimer(app){
  const t = store.timers[app];
  if(t.running) return;
  if(!t.remainingSec || t.remainingSec<=0) t.remainingSec = (store.settings[app+'Minutes']||15)*60;
  t.endAt = Date.now() + t.remainingSec*1000;
  t.running = true;
  document.getElementById(app+'Card').classList.remove('done');
  saveStore();
  updateTimerUI(app);
}
function pauseAppTimer(app){
  const t = store.timers[app];
  if(!t.running) return;
  t.remainingSec = Math.max(0, Math.round((t.endAt-Date.now())/1000));
  t.running = false;
  saveStore();
  updateTimerUI(app);
}
function resetAppTimer(app){
  const t = store.timers[app];
  t.running = false;
  t.remainingSec = (store.settings[app+'Minutes']||15)*60;
  t.endAt = null;
  document.getElementById(app+'Card').classList.remove('warn','done');
  saveStore();
  updateTimerUI(app);
}
function onTimerDone(app){
  const t = store.timers[app];
  t.running = false;
  t.remainingSec = 0;
  saveStore();
  document.getElementById(app+'Card').classList.remove('warn');
  document.getElementById(app+'Card').classList.add('done');
  playChime();
  toast(pick(TIMER_DONE_MSGS));
}
function updateTimerUI(app){
  const t = store.timers[app];
  const total = (store.settings[app+'Minutes']||15)*60;
  document.getElementById(app+'TimerTime').textContent = fmtTime(t.remainingSec);
  document.getElementById(app+'PlayBtn').textContent = t.running ? '⏸' : '▶';
  document.getElementById(app+'MinutesInput').value = store.settings[app+'Minutes'];
  const warnThreshold = Math.max(30, Math.round(total*0.2));
  const card = document.getElementById(app+'Card');
  const isWarn = t.running && t.remainingSec>0 && t.remainingSec<=warnThreshold;
  card.classList.toggle('warn', isWarn);
  if(t.remainingSec>0) card.classList.remove('done');
}
function tickAppTimers(){
  ['fb','tt'].forEach(app=>{
    if(!document.getElementById(app+'Card')) return;
    const t = store.timers[app];
    if(t.running){
      const rem = Math.max(0, Math.round((t.endAt-Date.now())/1000));
      t.remainingSec = rem;
      if(rem<=0){ onTimerDone(app); }
      else updateTimerUI(app);
    }
  });
}
setInterval(tickAppTimers, 1000);

/* sound chime */
let audioCtx = null;
function playChime(){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==='suspended') audioCtx.resume();
    const now = audioCtx.currentTime;
    [880,1108,1318].forEach((f,i)=>{
      const t0 = now + i*0.16;
      const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
      osc.type='sine'; osc.frequency.setValueAtTime(f,t0);
      gain.gain.setValueAtTime(0,t0); gain.gain.linearRampToValueAtTime(0.22,t0+0.02); gain.gain.exponentialRampToValueAtTime(0.0001,t0+0.38);
      osc.connect(gain).connect(audioCtx.destination); osc.start(t0); osc.stop(t0+0.4);
    });
  }catch(e){}
}

const TIMER_DONE_MSGS = [
  '🎉 وقتك خلص! اقفل التطبيق دلوقتي وكافئ نفسك بحاجة تانية',
  '⏰ خلاص! الوقت انتهى، ودماغك محتاج راحة من السكرول 🧠',
  '💪 برافو إنك التزمت! اقفل التطبيق وكمّل يومك بحاجة مفيدة'
];

const TIPS = [
  'فعّل تنبيه وقت الاستخدام من إعدادات هاتفك',
  'اقفل الإشعارات غير الضرورية للتطبيقات',
  'خصص وقت معين باليوم للسوشيال ميديا بس',
  'حط الموبايل في غرفة تانية وقت المذاكرة أو الشغل',
  'بدل السكرول بقراءة كتاب أو مشي 15 دقيقة',
  'امسح أي تطبيق حسيت إنه بياخد وقتك بشكل مبالغ فيه'
];
if(document.getElementById('tipsList')) document.getElementById('tipsList').innerHTML = TIPS.map((t,i)=>`<div class="tip-item"><span class="ti-num">${i+1}.</span><span>${t}</span></div>`).join('');

/* ================= TRACKERS (social + habit) ================= */
const successMsgs = ['🎉 برافو عليك!','💪 استمر كده!','🌟 يوم رائع!','🔥 أنت قوي جدًا!','👏 فخور بيك!','✨ خطوة تانية للأمام!'];
const failMsgs = ['لا بأس، بكرة يوم جديد 🌱','المهم إنك تكمل، جرب تاني 💪','كل يوم فرصة جديدة 🌤️','ولا حد كامل، كمّل ولا تستسلم 🙏'];

let viewMonth = { social: clampMonth(new Date()), habit: clampMonth(new Date()) };
function clampMonth(d){
  const min = new Date(2026,0,1), max = new Date(2027,11,1);
  const nd = new Date(d.getFullYear(), d.getMonth(), 1);
  if(nd<min) return min;
  if(nd>max) return max;
  return nd;
}
function shiftMonth(section, delta){
  const d = viewMonth[section];
  viewMonth[section] = clampMonth(new Date(d.getFullYear(), d.getMonth()+delta, 1));
  renderTracker(section);
}
function cycleDay(section, iso){
  if(iso > todayISO()) return;
  const log = store.logs[section];
  const cur = log[iso];
  let next;
  if(!cur) next = 'success';
  else if(cur==='success') next = 'fail';
  else next = null;
  if(next) log[iso] = next; else delete log[iso];
  saveStore();
  renderTracker(section);
  if(next==='success') toast(pick(successMsgs));
  else if(next==='fail') toast(pick(failMsgs));
}
function quickLog(section, status){
  const iso = todayISO();
  store.logs[section][iso] = status;
  saveStore();
  viewMonth[section] = clampMonth(new Date());
  renderTracker(section);
  toast(status==='success' ? pick(successMsgs) : pick(failMsgs));
  const card = document.getElementById(section==='social'?'socialTodayStatus':'habitTodayStatus');
  card.classList.add('anim-pop');
  setTimeout(()=>card.classList.remove('anim-pop'), 300);
}
function computeStats(section){
  const log = store.logs[section];
  let success=0, fail=0;
  Object.values(log).forEach(v=>{ if(v==='success') success++; else if(v==='fail') fail++; });
  const total = success+fail;
  const rate = total ? Math.round(success/total*100) : 0;
  let best=0, run=0;
  let cursor = new Date(2026,0,1);
  const end = new Date(2027,11,31);
  while(cursor<=end){
    const iso = toISO(cursor);
    if(log[iso]==='success'){ run++; if(run>best) best=run; } else run=0;
    cursor.setDate(cursor.getDate()+1);
  }
  let cur=0, first=true;
  let c2 = new Date();
  let guard=0;
  while(guard<900){
    guard++;
    const iso = toISO(c2);
    const st = log[iso];
    if(first && !st){ first=false; c2.setDate(c2.getDate()-1); continue; }
    first=false;
    if(st==='success'){ cur++; c2.setDate(c2.getDate()-1); } else break;
  }
  return {success, fail, rate, best, current:cur, total};
}
const DOW = ['س','ح','ن','ث','ر','خ','ج'];
function renderTracker(section){
  const d = viewMonth[section];
  const y=d.getFullYear(), m=d.getMonth();
  const first = new Date(y,m,1);
  const startOffset = (first.getDay()+1)%7;
  const daysInMonth = new Date(y,m+1,0).getDate();
  const today = todayISO();
  const log = store.logs[section];
  let cells='';
  for(let i=0;i<startOffset;i++) cells += `<div class="cal2-day other"></div>`;
  for(let dnum=1; dnum<=daysInMonth; dnum++){
    const iso = toISO(new Date(y,m,dnum));
    const status = log[iso];
    const isFuture = iso>today;
    const isToday = iso===today;
    let cls='cal2-day';
    if(status==='success') cls+=' success';
    else if(status==='fail') cls+=' fail';
    if(isToday) cls+=' today';
    if(isFuture) cls+=' future';
    cells += `<div class="${cls}" onclick="cycleDay('${section}','${iso}')">${dnum}</div>`;
  }
  document.getElementById(section+'CalGrid').innerHTML = cells;
  document.getElementById(section+'DowRow').innerHTML = DOW.map(x=>`<div class="cal-dow">${x}</div>`).join('');
  document.getElementById(section+'MonthLabel').textContent = d.toLocaleDateString('ar-EG',{month:'long',year:'numeric'});
  const stats = computeStats(section);
  document.getElementById(section+'StatSuccess').textContent = stats.success;
  document.getElementById(section+'StatFail').textContent = stats.fail;
  document.getElementById(section+'StatRate').textContent = stats.rate+'%';
  document.getElementById(section+'StatStreak').textContent = stats.current;
  document.getElementById(section+'StatBest').textContent = stats.best;
  document.getElementById(section+'StatTotal').textContent = stats.total;
  const todayStatus = log[today];
  const label = todayStatus==='success' ? '✅ تم تسجيل يوم ناجح النهاردة' : todayStatus==='fail' ? '❌ اتسجل النهاردة كصعب — وبكرة يوم جديد' : '⬜ لسه ما سجلتش النهاردة';
  document.getElementById(section+'TodayStatus').textContent = label;
}

/* ================= HABIT NAME ================= */
function saveHabitName(){
  store.settings.habitName = document.getElementById('habitNameInput').value.trim();
  saveStore();
  toast('تم حفظ اسم العادة ✓');
}

/* ================= TODAY'S PLAN (TASKS) ================= */
function careAddTask(){
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if(!text) return;
  const today = todayISO();
  if(!store.tasksByDate[today]) store.tasksByDate[today] = [];
  store.tasksByDate[today].push({id:'tk'+Date.now(), text, done:false});
  saveStore();
  input.value='';
  renderTasks();
}
function toggleTask(id){
  const today = todayISO();
  const list = store.tasksByDate[today] || [];
  const t = list.find(x=>x.id===id);
  if(t){ t.done = !t.done; saveStore(); renderTasks(); }
}
function deleteTask(id){
  const today = todayISO();
  store.tasksByDate[today] = (store.tasksByDate[today]||[]).filter(x=>x.id!==id);
  saveStore();
  renderTasks();
}
function renderTasks(){
  const today = todayISO();
  const list = store.tasksByDate[today] || [];
  document.getElementById('planDateLabel').textContent = new Date().toLocaleDateString('ar-EG',{weekday:'long', day:'numeric', month:'long'});
  if(!list.length){
    document.getElementById('careTaskList').innerHTML = `<div class="task-empty">لا توجد مهام اليوم — أضف أول مهمة لك 🎯</div>`;
    document.getElementById('taskProgress').textContent = '';
    return;
  }
  const doneCount = list.filter(t=>t.done).length;
  document.getElementById('taskProgress').textContent = `أنجزت ${doneCount} من ${list.length} مهمة اليوم`;
  document.getElementById('careTaskList').innerHTML = list.map(t=>`
    <div class="task-item">
      <div class="task-check${t.done?' done':''}" onclick="toggleTask('${t.id}')">${t.done?'✓':''}</div>
      <div class="task-text${t.done?' done':''}">${escapeHtml(t.text)}</div>
      <button class="task-del" onclick="deleteTask('${t.id}')">🗑</button>
    </div>`).join('');
}

/* ================= INIT ================= */
function init(){
  applyTheme();
  if(document.getElementById('fbUrlInput')) document.getElementById('fbUrlInput').value = store.settings.fbUrl;
  if(document.getElementById('ttUrlInput')) document.getElementById('ttUrlInput').value = store.settings.ttUrl;
  if(document.getElementById('fbMinutesInput')) document.getElementById('fbMinutesInput').value = store.settings.fbMinutes;
  if(document.getElementById('ttMinutesInput')) document.getElementById('ttMinutesInput').value = store.settings.ttMinutes;
  if(document.getElementById('habitNameInput')) document.getElementById('habitNameInput').value = store.settings.habitName;
  if(document.getElementById('fbCard')) updateTimerUI('fb');
  if(document.getElementById('ttCard')) updateTimerUI('tt');
  if(document.getElementById('socialCalGrid')) renderTracker('social');
  if(document.getElementById('habitCalGrid')) renderTracker('habit');
  if(document.getElementById('careTaskList')) renderTasks();
}
init();


/* expose functions referenced by inline onclick/onchange/onkeypress attributes */
window.toggleTheme=toggleTheme;
window.toggleUrlEdit=toggleUrlEdit;
window.saveUrl=saveUrl;
window.openApp=openApp;
window.resetAppTimer=resetAppTimer;
window.toggleAppTimer=toggleAppTimer;
window.setDuration=setDuration;
window.quickLog=quickLog;
window.shiftMonth=shiftMonth;
window.careAddTask=careAddTask;
window.saveHabitName=saveHabitName;
window.cycleDay=cycleDay;
window.toggleTask=toggleTask;
window.deleteTask=deleteTask;
})();


/* ===== Original inline script 11 ===== */

/* Final safety guard: optional UI elements must never throw classList null errors. */
(function(){
  const rawGet=document.getElementById.bind(document);
  window.$safe=function(id){return rawGet(id)};
  const safeIds=['view-students','view-tasks','counterPage','goalsOverlay','seasonTitle','seasonTip','fullHistoryList','newSheetBg','newSheetAudioEl','newSheetAudioBar','newSaSub','remBtn','remModal'];
  // Keep behavior intact; only guard calls made by optional enhancement code.
  window.addEventListener('error',function(e){
    if(e&&e.error&&/classList/.test(String(e.error.message||''))){
      console.warn('HomeFit optional UI guard:',e.error.message);
      e.preventDefault();
    }
  });
})();


/* ===== Original inline script 12 ===== */

/* ===== FINAL PATCH 2026-09: goals/tasks, notes history, governorate prayer times, compact UI, protect habits, expenses ===== */
(function(){
  const q=id=>document.getElementById(id);
  const safeText=(el,v)=>{if(el)el.textContent=v};

  /* ---------- Compact unified page sizing ---------- */
  const style=document.createElement('style');
  style.textContent=`
    body{padding-bottom:104px!important}
    .app{width:min(100%,540px)!important}
    .page{width:min(100%,540px)!important;margin-inline:auto!important}
    .page-card{width:100%!important}
    .money-app,.focus-app,.protect-app{width:100%!important;max-width:540px!important;margin-inline:auto!important}
    .goals-overlay{padding:8px 8px 100px!important}
    .mg-app{width:min(100%,540px)!important}
    .goals-overlay .topbar{padding:9px 11px!important;margin-bottom:8px!important}
    .goals-overlay .brand-icon{width:38px!important;height:38px!important;font-size:19px!important}
    .goals-overlay .topbar h1{font-size:17px!important}
    .goals-overlay .hero{grid-template-columns:1fr 1fr!important;gap:6px!important;margin-bottom:8px!important}
    .goals-overlay .goals-trio-card{min-height:128px!important;border-radius:15px!important;overflow:hidden!important}
    .goals-overlay .calendar-trio{padding:8px!important}
    .goals-overlay .embedded-goal-art{height:94px!important;object-fit:cover!important}
    .goals-overlay .trio-caption{padding:4px 7px!important;font-size:8px!important}
    .goals-overlay .goals-wisdom-card{display:flex!important;flex-direction:column!important}
    .goals-overlay .goals-wisdom-card .embedded-goal-art{height:82px!important;flex:0 0 82px!important}
    .goals-overlay .wisdom-copy{padding:5px 8px 8px!important}
    .goals-overlay .wisdom-copy b{font-size:14px!important;font-weight:900!important;display:block!important}
    .goals-overlay .wisdom-copy blockquote{margin:3px 0!important;font-size:10px!important;line-height:1.7!important;font-weight:800!important}
    .goals-overlay .wisdom-copy small{font-size:8px!important;font-weight:700!important}
    .goals-overlay .panel{padding:9px!important;border-radius:16px!important}
    .goals-overlay .panel-head{margin-bottom:7px!important}
    .goals-overlay .panel-head h3{font-size:13px!important}
    .goals-overlay .daily-workspace{grid-template-columns:112px minmax(0,1fr)!important;gap:6px!important}
    .goals-overlay .daily-date-box{padding:6px!important}
    .goals-overlay .compact-goal-form{grid-template-columns:38px minmax(0,1fr) 67px!important;gap:4px!important;padding:4px!important}
    .goals-overlay .compact-link{font-size:7px!important;margin-top:2px!important}
    .goals-overlay .quick-icons{gap:4px!important}
    .goals-overlay .quick-icons button{padding:5px 6px!important;font-size:7px!important}
    .goals-overlay .goal{min-height:42px!important;padding:6px 7px!important}
    .goals-overlay .goal-title{font-size:10px!important;font-weight:800!important}
    .goals-overlay .goal-meta{font-size:7px!important}
    .goals-overlay .mg-tabs{margin-bottom:8px!important;padding:4px!important}
    .goals-overlay .mg-tab{padding:7px 4px!important;font-size:9px!important}
    .protect-habit-name-row{display:flex!important;align-items:center!important;gap:7px!important;margin-bottom:12px!important}
    .protect-habit-name{flex:1!important;min-width:0!important;font-weight:900!important;font-size:15px!important}
    .habit-save-btn{flex:0 0 auto!important;padding:8px 10px!important;border-radius:9px!important;color:#fff!important;background:linear-gradient(145deg,#48b9a7,#4e79d8)!important;font-size:9px!important;font-weight:900!important}
    .prayer-governorate-row{display:grid!important;grid-template-columns:auto 110px minmax(0,1fr) auto!important;align-items:center!important;gap:5px!important}
    #governorateSelect{height:31px!important;min-width:0!important;padding:3px 6px!important;border:1px solid #cfe2ea!important;border-radius:9px!important;background:#fff!important;color:#36536b!important;font-size:8px!important;font-weight:800!important}
    #locationText{min-width:0!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;font-size:7px!important;color:#7890a0!important}
    #getLocationBtn{padding:7px 8px!important;border-radius:9px!important;background:linear-gradient(145deg,#56bfa9,#4b82c8)!important;color:#fff!important;font-size:7px!important;font-weight:900!important}
    .pt-prayer{min-height:55px!important;padding:8px 7px!important;display:grid!important;grid-template-columns:32px minmax(0,1fr) auto 26px!important;align-items:center!important;gap:5px!important;border-radius:13px!important}
    .pt-prayer-icon{width:30px!important;height:30px!important;display:grid!important;place-items:center!important;border-radius:9px!important;font-size:17px!important}
    .pt-prayer-name{font-size:10px!important;font-weight:900!important;white-space:nowrap!important}
    .pt-prayer-time{font-size:10px!important;font-weight:900!important;white-space:nowrap!important}
    .pray-check{width:24px!important;height:24px!important;border-radius:8px!important;font-size:11px!important}
    @media(max-width:430px){
      .app,.page,.money-app,.focus-app,.protect-app{max-width:100%!important}
      .goals-overlay .hero{grid-template-columns:1fr 1fr!important}
      .goals-overlay .daily-workspace{grid-template-columns:1fr!important}
      .goals-overlay .daily-date-box{width:125px!important}
      .prayer-governorate-row{grid-template-columns:auto 94px minmax(0,1fr)!important}
      #getLocationBtn{grid-column:2 / -1!important;width:fit-content!important;justify-self:start!important}
    }
  `;
  document.head.appendChild(style);

  /* Deleted linked tasks are remembered so later goal synchronization cannot recreate them. */
  function deletedLinkedTasks(){try{return JSON.parse(localStorage.getItem('deleted_linked_goal_tasks_v1')||'{}')}catch(e){return {}}}
  function markDeletedLinkedTask(id,date){if(!String(id||'').startsWith('goal-'))return;const all=deletedLinkedTasks();all[date||'']=all[date||'']||{};all[date||''][id]=true;try{localStorage.setItem('deleted_linked_goal_tasks_v1',JSON.stringify(all))}catch(e){}}
  function isDeletedLinkedTask(id,date){const all=deletedLinkedTasks();return !!(all[date||'']&&all[date||''][id])}
  window.markDeletedLinkedTask=markDeletedLinkedTask;
  window.isDeletedLinkedTask=isDeletedLinkedTask;
  /* ---------- Goals linked to the MAIN home tasks ---------- */
  function renderHomeMainTasks(){
    /* The task list itself is painted once by the unified controller (window.renderTasks). */
    if(typeof window.renderTasks==='function') window.renderTasks();
  }
  function syncGoalTasks(dateStr){
    if(typeof taskData!=='function'||typeof saveTaskData!=='function'||typeof data==='undefined') return;
    const d=new Date(dateStr+'T12:00:00');
    const arr=taskData(d);
    const linked=data.daily.filter(g=>g.date===dateStr && g.link && !isDeletedLinkedTask('goal-'+g.id,dateStr));
    const valid=new Set(linked.map(g=>'goal-'+g.id));
    for(let i=arr.length-1;i>=0;i--){
      if(String(arr[i].id||'').startsWith('goal-') && !valid.has(arr[i].id)) arr.splice(i,1);
    }
    linked.forEach(g=>{
      const id='goal-'+g.id; let t=arr.find(x=>x.id===id);
      if(!t){t={id,name:g.title,icon:g.icon||'🎯',type:'مخصص',done:!!g.done};arr.push(t)}
      else {t.name=g.title;t.icon=g.icon||'🎯';t.done=!!g.done;t.type='مخصص'}
    });
    saveTaskData(d,arr);
    if(typeof renderHomeMainTasks==='function') renderHomeMainTasks();
  }
  window.syncGoalTasksForDate=syncGoalTasks;

  /* ---------- Daily goal form: always sync after saving ---------- */
  const dailyForm=q('dailyForm');
  if(dailyForm){
    dailyForm.addEventListener('submit',()=>setTimeout(()=>syncGoalTasks((q('dailyDate')?.value)||new Date().toISOString().slice(0,10)),30));
  }

  /* ---------- Notes: save reliably + immediately appear in history ---------- */
  function saveHomeNote(){
    const input=q('noteInput'); if(!input || typeof KEYS==='undefined'||typeof selectedDate==='undefined') return;
    const notes=load(KEYS.notes,{}); notes[dateKey(selectedDate)]=input.value; save(KEYS.notes,notes);
    if(typeof renderHistory==='function'){
      try{ if(q('historyList')) historyHTML(q('historyList')); if(q('fullHistoryList')) historyHTML(q('fullHistoryList')); }catch(e){}
    }
    toast('تم حفظ الملاحظة ✓');
  }
  const saveNoteBtn=q('saveNote'); if(saveNoteBtn)saveNoteBtn.onclick=saveHomeNote;
  const noteInput=q('noteInput'); if(noteInput)noteInput.addEventListener('change',saveHomeNote);

  /* ---------- Prayer times by Egyptian governorate; no GPS permission required ---------- */
  const GOV={
    cairo:{ar:'القاهرة',lat:30.0444,lon:31.2357},giza:{ar:'الجيزة',lat:30.0131,lon:31.2089},alexandria:{ar:'الإسكندرية',lat:31.2001,lon:29.9187},qalyubia:{ar:'القليوبية',lat:30.4667,lon:31.1833},sharqia:{ar:'الشرقية',lat:30.7327,lon:31.7195},dakahlia:{ar:'الدقهلية',lat:31.0364,lon:31.3807},gharbia:{ar:'الغربية',lat:30.8754,lon:31.0335},monufia:{ar:'المنوفية',lat:30.5972,lon:30.9876},beheira:{ar:'البحيرة',lat:30.8481,lon:30.3436},kafr_el_sheikh:{ar:'كفر الشيخ',lat:31.1107,lon:30.9388},damietta:{ar:'دمياط',lat:31.4175,lon:31.8144},port_said:{ar:'بورسعيد',lat:31.2653,lon:32.3019},ismailia:{ar:'الإسماعيلية',lat:30.5965,lon:32.2715},suez:{ar:'السويس',lat:29.9668,lon:32.5498},fayoum:{ar:'الفيوم',lat:29.3084,lon:30.8428},beni_suef:{ar:'بني سويف',lat:29.0661,lon:31.0994},minya:{ar:'المنيا',lat:28.1099,lon:30.7503},asyut:{ar:'أسيوط',lat:27.1809,lon:31.1837},sohag:{ar:'سوهاج',lat:26.5591,lon:31.6957},qena:{ar:'قنا',lat:26.1551,lon:32.7160},luxor:{ar:'الأقصر',lat:25.6872,lon:32.6396},aswan:{ar:'أسوان',lat:24.0889,lon:32.8998},red_sea:{ar:'البحر الأحمر',lat:27.2579,lon:33.8116},new_valley:{ar:'الوادي الجديد',lat:25.4514,lon:30.5466},north_sinai:{ar:'شمال سيناء',lat:31.1313,lon:33.8033},south_sinai:{ar:'جنوب سيناء',lat:28.4945,lon:34.0183},matrouh:{ar:'مطروح',lat:31.3543,lon:27.2373}
  };
  const PRAYER_MAP={Fajr:'الفجر',Dhuhr:'الظهر',Asr:'العصر',Maghrib:'المغرب',Isha:'العشاء'};
  function fmtArabicTime(raw){let [h,m]=String(raw||'').split(':').map(Number);if(!Number.isFinite(h)||!Number.isFinite(m))return raw||'--';const ap=h>=12?'م':'ص';h=h%12||12;return `${h}:${String(m).padStart(2,'0')} ${ap}`}
  function applyPrayerTimes(times,govName){
    if(!times)return;
    if(typeof PRAYER_TIMES!=='undefined') Object.keys(PRAYER_MAP).forEach(k=>{const ar=PRAYER_MAP[k],p=PRAYER_TIMES.find(x=>x.name===ar);if(p&&times[k])p.time=String(times[k]).split(' ')[0]});
    document.querySelectorAll('#prayersList .pt-prayer').forEach(card=>{const name=card.querySelector('.pt-prayer-name')?.textContent.trim(),key=Object.keys(PRAYER_MAP).find(k=>PRAYER_MAP[k]===name),node=card.querySelector('.pt-prayer-time');if(key&&node&&times[key])node.textContent=fmtArabicTime(String(times[key]).split(' ')[0])});
    const date=new Date(); safeText(q('locationText'),'مواقيت '+govName+' لهذا اليوم');
    try{localStorage.setItem('prayer_governorate_v1',q('governorateSelect').value);localStorage.setItem('prayer_times_v1',JSON.stringify({date:dateKey(date),gov:q('governorateSelect').value,times}));}catch(e){}
    if(typeof renderPrayerRecordPage==='function')renderPrayerRecordPage();
  }
  async function loadGovernoratePrayerTimes(){
    const sel=q('governorateSelect'); if(!sel)return;
    const key=sel.value, g=GOV[key]||GOV.cairo;
    safeText(q('locationText'),'جارٍ تحديث مواقيت '+g.ar+'...');
    try{
      const d=new Date(), date=`${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()}`;
      const url=`https://api.aladhan.com/v1/timings/${date}?latitude=${g.lat}&longitude=${g.lon}&method=5`;
      const r=await fetch(url,{cache:'no-store'}); if(!r.ok)throw new Error('HTTP '+r.status);
      const j=await r.json(); applyPrayerTimes(j?.data?.timings,g.ar); toast('تم تحديث مواقيت الصلاة حسب محافظة '+g.ar+' ✓');
    }catch(e){
      const cached=(()=>{try{return JSON.parse(localStorage.getItem('prayer_times_v1')||'null')}catch(_){return null}})();
      if(cached&&cached.gov===key&&cached.times) applyPrayerTimes(cached.times,g.ar);
      else safeText(q('locationText'),'تعذر الاتصال بالمواقيت — تم الاحتفاظ بالمواقيت الحالية');
    }
  }
  const govSel=q('governorateSelect'), locBtn=q('getLocationBtn');
  if(govSel){try{const saved=localStorage.getItem('prayer_governorate_v1');if(saved&&GOV[saved])govSel.value=saved}catch(e){} govSel.addEventListener('change',loadGovernoratePrayerTimes);}
  if(locBtn){locBtn.onclick=loadGovernoratePrayerTimes;}

  /* ---------- Protect: two editable habit names ---------- */
  function savePrimaryHabitName(){
    const el=q('habitNamePrimary'); if(!el)return;
    window.__protectStore.settings.habitName1=el.value.trim()||'التعفن الدماغي'; localStorage.setItem('selfcare_v1',JSON.stringify(window.__protectStore)); el.value=window.__protectStore.settings.habitName1; toast('تم حفظ اسم العادة الأولى ✓');
  }
  function saveSecondHabitName(){
    const el=q('habitNameInput'); if(!el)return;
    window.__protectStore.settings.habitName=el.value.trim()||'عادة سلبية'; localStorage.setItem('selfcare_v1',JSON.stringify(window.__protectStore)); el.value=window.__protectStore.settings.habitName; toast('تم حفظ اسم العادة الثانية ✓');
  }
  const sb1=q('saveHabitPrimaryBtn'), sb2=q('saveHabitNameBtn');
  if(sb1)sb1.onclick=savePrimaryHabitName; if(sb2)sb2.onclick=saveSecondHabitName;
  if(q('habitNamePrimary'))q('habitNamePrimary').value=window.__protectStore.settings.habitName1||'التعفن الدماغي';
  if(q('habitNameInput'))q('habitNameInput').value=window.__protectStore.settings.habitName||'';

  /* Removed social-media UI means old Protect init must not crash. */
  try{
    if(typeof renderTracker==='function'){renderTracker('social');renderTracker('habit');}
  }catch(e){}

  /* ---------- Unified page navigation: keep the home task panel fresh ---------- */
  const oldShow=window.showPage;
  if(typeof oldShow==='function'&&!window.__finalPatchShowWrapped){
    window.__finalPatchShowWrapped=true;
    window.showPage=function(id){
      oldShow(id);
      if(id==='home')setTimeout(renderHomeMainTasks,20);
      if(id==='prayer')setTimeout(loadGovernoratePrayerTimes,80);
      
    };
  }
  setTimeout(()=>{try{renderHomeMainTasks()}catch(e){}},80);
  setTimeout(()=>{try{if(govSel)loadGovernoratePrayerTimes()}catch(e){}},300);
})();


/* ===== Original inline script 13 ===== */

/* ===== FINAL V3 PATCH: tasbih edit, goal image, nav, unified theme, task visibility ===== */
(function(){
  const q=id=>document.getElementById(id);
  const css=document.createElement('style');
  css.textContent=`
    /* Unified soft homepage palette across the whole program */
    html,body{background:radial-gradient(circle at 90% 0,#e2d3ff55,transparent 28%),radial-gradient(circle at 3% 42%,#ccf4ef66,transparent 32%),linear-gradient(135deg,#f4f9fc,#edf4fb)!important;color:#23364d!important}
    #moneyRoot,#focusRoot,#protectRoot{background:transparent!important;color:#23364d!important}
    #moneyRoot .card,#moneyRoot .tool,#moneyRoot .notes-box,#focusRoot .card,#focusRoot .panel,#protectRoot .card,#protectRoot .panel{background:rgba(255,255,255,.80)!important;border-color:rgba(255,255,255,.95)!important;box-shadow:0 10px 24px rgba(87,124,153,.10)!important}
    #moneyRoot .top,#focusRoot .top,#protectRoot .top{background:rgba(255,255,255,.72)!important;border-color:rgba(255,255,255,.9)!important;backdrop-filter:blur(16px)!important}
    #moneyRoot input,#moneyRoot textarea,#moneyRoot select,#focusRoot input,#focusRoot textarea,#focusRoot select,#protectRoot input,#protectRoot textarea,#protectRoot select{background:rgba(255,255,255,.82)!important;color:#30475e!important;border-color:#dce8ef!important}

    /* Five-item glass bottom navigation */
    .main-bottom-nav{width:min(540px,calc(100% - 18px))!important;bottom:8px!important;padding:6px!important;gap:4px!important;border:1px solid rgba(255,255,255,.72)!important;background:linear-gradient(135deg,rgba(151,226,232,.72),rgba(119,173,232,.66))!important;backdrop-filter:blur(20px) saturate(145%)!important;-webkit-backdrop-filter:blur(20px) saturate(145%)!important;box-shadow:0 12px 32px rgba(54,104,133,.24),inset 0 1px 2px rgba(255,255,255,.9)!important}
    .main-bottom-nav button{min-height:48px!important;padding:5px 4px!important;border:1px solid transparent!important;color:#fff!important;background:rgba(255,255,255,.06)!important;text-shadow:0 1px 2px rgba(42,82,112,.18)!important}
    .main-bottom-nav button span:first-child{font-size:20px!important;line-height:1.05!important;filter:drop-shadow(0 2px 3px rgba(43,79,103,.16))}
    .main-bottom-nav button span:last-child{font-size:8px!important;font-weight:900!important;margin-top:3px!important}
    .main-bottom-nav button.active{color:#3c6c89!important;background:rgba(255,255,255,.82)!important;border-color:rgba(255,255,255,.92)!important;box-shadow:0 4px 12px rgba(63,106,132,.16),inset 0 1px 1px #fff!important;text-shadow:none!important}

    /* Goals: exactly two centered blocks, same dimensions */
    .goals-overlay .goals-two-center{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important;max-width:680px!important;margin:0 auto 10px!important;align-items:stretch!important}
    .goals-overlay .goals-two-center .goals-trio-card{height:220px!important;min-height:220px!important;width:100%!important}
    .goals-overlay .goals-two-center .calendar-trio{padding:11px!important}
    .goals-overlay .goals-glass-card{padding:0!important;overflow:hidden!important;border-radius:20px!important;background:rgba(255,255,255,.45)!important}
    .goals-glass-image{display:block;width:100%;height:100%;object-fit:cover;object-position:center;border-radius:inherit}
    .goals-overlay .goals-two-center + .mg-tabs{margin-top:4px!important}

    /* More breathing room so linked home tasks are always visible */
    #tasksPanel .tasks-box{min-height:120px!important;padding-bottom:14px!important;overflow:visible!important}
    #tasksPanel .tasks-layout{min-height:82px!important;overflow:visible!important}
    #tasksPanel .task-list{min-height:72px!important;overflow:visible!important}
    #tasksPanel .task{overflow:visible!important}

    /* Tasbih manual editing */
    .manual-count-box{max-width:330px;margin:12px auto 9px;padding:10px;border:1px solid rgba(255,255,255,.55);border-radius:16px;background:rgba(255,255,255,.13);box-shadow:inset 0 1px 2px rgba(255,255,255,.25)}
    .manual-count-box label{display:block;margin-bottom:6px;color:#dff2ff;font-size:9px;font-weight:900}
    .manual-count-row{display:grid;grid-template-columns:1fr auto;gap:6px}
    .manual-count-row input{width:100%;height:34px;padding:5px 9px;border:1px solid rgba(255,255,255,.4);border-radius:10px;outline:0;background:rgba(255,255,255,.92);color:#294965;font:900 12px Arial;text-align:center}
    .manual-count-row button{height:34px;padding:5px 10px;border:0;border-radius:10px;color:#245b83;background:#fff;font-size:8px;font-weight:900;white-space:nowrap}
    .manual-count-box small{display:block;margin-top:5px;color:#d4eaf7;font-size:7px;line-height:1.5}
    .chart-percent.gold-label{color:#d58b13;font-weight:900}
    .chart-value.gold{min-height:10px!important;transform:scaleX(1.16);transform-origin:center bottom}
    .chart-star{z-index:3}
    @media(max-width:520px){
      .goals-overlay .goals-two-center{grid-template-columns:1fr 1fr!important;gap:7px!important;max-width:100%!important}
      .goals-overlay .goals-two-center .goals-trio-card{height:185px!important;min-height:185px!important}
      .goals-overlay .goals-two-center .calendar-trio{padding:7px!important}
      .main-bottom-nav{bottom:6px!important;width:calc(100% - 14px)!important}
      .main-bottom-nav button{min-height:45px!important;padding:4px 2px!important}
      .main-bottom-nav button span:first-child{font-size:18px!important}
      .main-bottom-nav button span:last-child{font-size:7px!important}
    }
  `;
  document.head.appendChild(css);

  // Manual external tasbih count: add the entered amount to the active dhikr for today.
  const manualBtn=q('applyManualTasbih'), manualInput=q('manualTasbihCount');
  if(manualBtn){
    manualBtn.onclick=function(){
      const amount=Math.max(0,Math.floor(Number(manualInput?.value||0)));
      if(!amount){ if(typeof toast==='function')toast('اكتب عددًا صحيحًا أولًا'); return; }
      if(typeof todayCount!=='function'||typeof activeDhikr==='undefined'||typeof save!=='function'||typeof KEYS==='undefined'){return}
      const c=todayCount(); c[activeDhikr]=(Number(c[activeDhikr])||0)+amount;
      save(KEYS.tasbih,{...load(KEYS.tasbih,{}),[dateKey(new Date())]:c});
      if(manualInput)manualInput.value='';
      if(typeof renderCounter==='function')renderCounter();
      if(typeof renderPrayer==='function')renderPrayer();
      if(typeof toast==='function')toast('تمت إضافة '+amount+' للعداد ✓');
    };
  }

  // Keep chart percentage readable and emphasize >500 with gold + star.
  if(typeof renderPrayer==='function'&&!window.__v3ChartWrapped){
    window.__v3ChartWrapped=true;
    const oldRenderPrayer=window.renderPrayer;
    window.renderPrayer=function(){
      oldRenderPrayer();
      const bars=document.querySelectorAll('#weeklyChart .chart-col');
      bars.forEach((col)=>{
        const rawText=col.querySelector('.chart-percent')?.textContent||'0%';
        const pct=parseInt(rawText)||0;
        const raw=Math.round(pct*(typeof TARGET!=='undefined'?TARGET:33)/100);
        if(pct>1515){} // no-op guard
        if(raw>500){
          col.querySelector('.chart-value')?.classList.add('gold');
          const label=col.querySelector('.chart-percent'); if(label)label.classList.add('gold-label');
          if(!col.querySelector('.chart-star')){const st=document.createElement('span');st.className='chart-star';st.textContent='⭐';col.prepend(st)}
        }
      });
    };
  }

  // Goal linking: sync immediately, then refresh after the home panel has rendered.
  function refreshLinkedTasks(){
    try{if(typeof renderHomeMainTasks==='function')renderHomeMainTasks();}catch(e){}
    setTimeout(()=>{try{if(typeof renderHomeMainTasks==='function')renderHomeMainTasks();}catch(e){}},80);
    setTimeout(()=>{try{if(typeof renderHomeMainTasks==='function')renderHomeMainTasks();}catch(e){}},250);
  }
  const df=q('dailyForm');
  if(df){df.addEventListener('submit',()=>{setTimeout(()=>{try{if(typeof syncGoalTasks==='function')syncGoalTasks(q('dailyDate')?.value||new Date().toISOString().slice(0,10));}catch(e){} refreshLinkedTasks();},80);});}

  // Bottom navigation active state, including Goals overlay.
  document.querySelectorAll('.main-bottom-nav button').forEach(btn=>{
    btn.addEventListener('click',function(){
      document.querySelectorAll('.main-bottom-nav button').forEach(x=>x.classList.remove('active'));
      this.classList.add('active');
      if(this.id==='goalsNavBtn') setTimeout(()=>q('goalsOverlay')?.classList.add('open'),0);
    },true);
  });
  q('homeBtn')?.addEventListener('click',()=>{q('goalsOverlay')?.classList.remove('open');document.querySelector('.main-bottom-nav [data-page="home"]')?.classList.add('active');document.querySelectorAll('.main-bottom-nav button:not([data-page="home"])').forEach(x=>x.classList.remove('active'));});

  // If any internal page is opened, keep its matching main tab highlighted.
  document.addEventListener('click',function(e){
    const b=e.target.closest?.('[data-page]'); if(!b||!b.closest('.main-bottom-nav'))return;
    const id=b.dataset.page;
    if(id) setTimeout(()=>{document.querySelectorAll('.main-bottom-nav button').forEach(x=>x.classList.toggle('active',x===b));},10);
  });
})();


/* ===== Original inline script 14 ===== */

(function(){
  const q=id=>document.getElementById(id);
  // Home-only night mode toggle. Preference persists, but the control itself exists only on Home.
  const night=q('homeThemeToggle');
  function applyNight(on){document.body.classList.toggle('home-night',!!on);if(night){night.classList.toggle('active',!!on);night.textContent=on?'☀':'☾';}}
  const saved=localStorage.getItem('home-night-mode')==='1'; applyNight(saved);
  if(night) night.addEventListener('click',()=>{const on=!document.body.classList.contains('home-night');localStorage.setItem('home-night-mode',on?'1':'0');applyNight(on);});

  // Counter page cleanup: it must never remain underneath Home or another page.
  const baseShow=window.showPage;
  if(typeof baseShow==='function'&&!window.__latestCounterIsolation){
    window.__latestCounterIsolation=true;
    window.showPage=function(id){
      if(id!=='prayer') q('counterPage')?.classList.remove('show');
      baseShow(id);
      if(id!=='prayer') q('counterPage')?.classList.remove('show');
      if(id==='home') setTimeout(()=>{try{typeof renderHomeMainTasks==='function'&&renderHomeMainTasks()}catch(e){}},30);
    };
  }
  // Also handle bottom-nav clicks directly, including navigation from Counter to Home.
  document.querySelectorAll('.nav button[data-page]').forEach(btn=>btn.addEventListener('click',()=>{
    if(btn.dataset.page!=='prayer') q('counterPage')?.classList.remove('show');
  },true));

  // Goal -> Home task sync (single call; the unified controller already re-syncs on its own events).
  function syncGoalToHome(dateStr){
    try{
      if(typeof window.syncGoalTasksForDate==='function') window.syncGoalTasksForDate(dateStr);
      if(typeof renderHomeMainTasks==='function') renderHomeMainTasks();
    }catch(e){}
  }
  const dailyForm=q('dailyForm');
  if(dailyForm) dailyForm.addEventListener('submit',()=>{
    const date=(q('dailyDate')?.value)||new Date().toISOString().slice(0,10);
    setTimeout(()=>syncGoalToHome(date),50);
  },true);

  // Home task checkbox <-> linked goal completion sync is already handled by the
  // unified task controller's own check-button handler (syncGoalDone()), so no
  // separate delegated listener is needed here.

  // Make the archive naturally appear directly after the month block.
  const moneyRoot=q('moneyRoot'), monthTab=q('moneyMonthTab'), archive=q('moneyHistoryPanel');
  if(moneyRoot&&archive){
    const monthCard=archive.previousElementSibling;
    if(monthCard && monthCard.querySelector('#monthDate')) monthCard.insertAdjacentElement('afterend',archive);
  }
})();


/* ===== Original inline script 15 ===== */

(function(){
  const quranBtn=document.getElementById('midQuranBtn');
  const quranPage=document.getElementById('quranPage');
  const frame=document.getElementById('quranEmbeddedFrame');
  const back=document.getElementById('quranBackToProgram');
  const quranBase64="PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iYXIiIGRpcj0icnRsIj48aGVhZD48bWV0YSBjaGFyc2V0PSJ1dGYtOCI+PG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+2KfZhNmC2LHYotmGINin2YTZg9ix2YrZhSDigJQg2YjYtti5INin2YTZgtix2KfYodipPC90aXRsZT48bGluayByZWw9InByZWNvbm5lY3QiIGhyZWY9Imh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20iPjxsaW5rIHJlbD0icHJlY29ubmVjdCIgaHJlZj0iaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbSIgY3Jvc3NvcmlnaW4+PGxpbmsgaHJlZj0iaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWlyaTp3Z2h0QDQwMDs3MDAmZmFtaWx5PVRhamF3YWw6d2dodEA0MDA7NTAwOzcwMDs4MDAmZGlzcGxheT1zd2FwIiByZWw9InN0eWxlc2hlZXQiPjxzdHlsZT4KOnJvb3R7LS1iZzojZWRmNGYxOy0tcGFwZXI6I2ZmZmRmNzstLWluazojMjQzYzM3Oy0tbXV0ZWQ6IzcxODc4MDstLXRlYWw6IzE3ODU2ZDstLWdvbGQ6I2M5OTIzZDstLWxpbmU6I2Q5ZThkZjstLXNoYWRvdzowIDIwcHggNDVweCByZ2JhKDM4LDg3LDY4LC4xNCl9Kntib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbCxib2R5e21hcmdpbjowO21pbi1oZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDAlLCNmZmYgMCAxNCUsdHJhbnNwYXJlbnQgMzglKSxsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCNmN2ZiZjksdmFyKC0tYmcpKTtjb2xvcjp2YXIoLS1pbmspO2ZvbnQtZmFtaWx5OlRhamF3YWwsQXJpYWwsc2Fucy1zZXJpZn1idXR0b24saW5wdXR7Zm9udDppbmhlcml0fWJ1dHRvbntjdXJzb3I6cG9pbnRlcn0uYXBwe3dpZHRoOm1pbigxMDYwcHgsMTAwJSk7bWFyZ2luOmF1dG87cGFkZGluZzoxOHB4IDE0cHggNzBweH0udG9we3Bvc2l0aW9uOnN0aWNreTt0b3A6MDt6LWluZGV4OjU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtnYXA6MTJweDtwYWRkaW5nOjEzcHggMTZweDttYXJnaW4tYm90dG9tOjE1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZmZmO2JvcmRlci1yYWRpdXM6MjBweDtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjc4KTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigxNnB4KTtib3gtc2hhZG93OnZhcigtLXNoYWRvdyl9LmJyYW5ke2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHh9LmJyYW5kLWljb257ZGlzcGxheTpncmlkO3BsYWNlLWl0ZW1zOmNlbnRlcjt3aWR0aDo0M3B4O2hlaWdodDo0M3B4O2JvcmRlci1yYWRpdXM6MTRweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxNDVkZWcsI2U4ZjhlZiwjOGVkNmJjKTtmb250LXNpemU6MjNweH1oMXtmb250LXNpemU6MThweDttYXJnaW46MDtmb250LXdlaWdodDo4MDB9LnN1YnttYXJnaW46MnB4IDAgMDtjb2xvcjp2YXIoLS1tdXRlZCk7Zm9udC1zaXplOjExcHh9LnRvb2xze2Rpc3BsYXk6ZmxleDtnYXA6N3B4O2FsaWduLWl0ZW1zOmNlbnRlcn0udG9vbC1idG57Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1saW5lKTtib3JkZXItcmFkaXVzOjEycHg7YmFja2dyb3VuZDojZmZmO2NvbG9yOnZhcigtLWluayk7cGFkZGluZzo4cHggMTBweDtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEycHh9LnRvb2wtYnRuOmhvdmVye2JvcmRlci1jb2xvcjp2YXIoLS10ZWFsKTtjb2xvcjp2YXIoLS10ZWFsKX0ucGFuZWx7cGFkZGluZzoxNnB4O2JvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuOSk7Ym9yZGVyLXJhZGl1czoyMnB4O2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuNyk7Ym94LXNoYWRvdzp2YXIoLS1zaGFkb3cpO21hcmdpbi1ib3R0b206MTRweH0uc2VhcmNoe3dpZHRoOjEwMCU7cGFkZGluZzoxMnB4IDE0cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1saW5lKTtib3JkZXItcmFkaXVzOjEzcHg7YmFja2dyb3VuZDojZmZmO2NvbG9yOnZhcigtLWluayk7b3V0bGluZTowfS5zZWFyY2g6Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLXRlYWwpO2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMjMsMTMzLDEwOSwuMTIpfS5zdXJhaC1saXN0e2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMjAwcHgsMWZyKSk7Z2FwOjlweDttYXJnaW4tdG9wOjEycHh9LnN1cmFoe2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHg7d2lkdGg6MTAwJTtwYWRkaW5nOjExcHggMTJweDtib3JkZXI6MXB4IHNvbGlkICNlM2VlZTg7Ym9yZGVyLXJhZGl1czoxNHB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE0NWRlZywjZmZmLCNmNGZhZjcpO3RleHQtYWxpZ246cmlnaHQ7Y29sb3I6dmFyKC0taW5rKX0uc3VyYWg6aG92ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTFweCk7Ym9yZGVyLWNvbG9yOiM4ZGNkYjV9Lm51bXtkaXNwbGF5OmdyaWQ7cGxhY2UtaXRlbXM6Y2VudGVyO3dpZHRoOjMxcHg7aGVpZ2h0OjMxcHg7ZmxleDowIDAgMzFweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNlNGY0ZWM7Y29sb3I6dmFyKC0tdGVhbCk7Zm9udC13ZWlnaHQ6ODAwO2ZvbnQtc2l6ZToxMnB4fS5zdXJhaCBzdHJvbmd7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTRweH0uc3VyYWggc21hbGx7ZGlzcGxheTpibG9jaztjb2xvcjp2YXIoLS1tdXRlZCk7Zm9udC1zaXplOjEwcHg7bWFyZ2luLXRvcDoycHh9LnJlYWRlcntkaXNwbGF5Om5vbmV9LnJlYWRlci5vcGVue2Rpc3BsYXk6YmxvY2t9LnJlYWRlci1oZWFke2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Z2FwOjEycHg7bWFyZ2luLWJvdHRvbToxMnB4fS5yZWFkZXItdGl0bGV7Zm9udC1zaXplOjE5cHg7bWFyZ2luOjB9LnJlYWRlci1tZXRhe2NvbG9yOnZhcigtLW11dGVkKTtmb250LXNpemU6MTFweDttYXJnaW4tdG9wOjNweH0uYmFja3tib3JkZXI6MXB4IHNvbGlkIHZhcigtLWxpbmUpO2JvcmRlci1yYWRpdXM6MTJweDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzo5cHggMTJweDtjb2xvcjp2YXIoLS10ZWFsKTtmb250LXdlaWdodDo4MDB9LnBhZ2Vze2Rpc3BsYXk6Z3JpZDtnYXA6MzBweH0ucGFnZXtwYWRkaW5nOjI4cHggY2xhbXAoMThweCw1dncsNjJweCkgMzRweDtib3JkZXI6MXB4IHNvbGlkICNlYWRmY2E7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDp2YXIoLS1wYXBlcik7Ym94LXNoYWRvdzowIDEycHggMjhweCByZ2JhKDk3LDc1LDM2LC4xMik7cG9zaXRpb246cmVsYXRpdmV9LnBhZ2U6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6OXB4O2JvcmRlcjoxcHggc29saWQgcmdiYSgyMDEsMTQ2LDYxLC4yNCk7cG9pbnRlci1ldmVudHM6bm9uZX0ucGFnZS10b3B7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjojOWE3NzQyO2ZvbnQtc2l6ZToxMXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlOWRjYzM7cGFkZGluZy1ib3R0b206MTBweDttYXJnaW4tYm90dG9tOjIwcHh9LnN1cmFoLWhlYWRpbmd7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjJweCAwIDE4cHh9LnN1cmFoLWhlYWRpbmcgaDJ7Zm9udC1mYW1pbHk6QW1pcmksc2VyaWY7Zm9udC1zaXplOjMwcHg7bWFyZ2luOjA7Y29sb3I6IzE3M2YzNH0uc3VyYWgtaGVhZGluZyBwe2ZvbnQtZmFtaWx5OkFtaXJpLHNlcmlmO2NvbG9yOiM5ODczM2E7Zm9udC1zaXplOjE2cHg7bWFyZ2luOjJweCAwfS5iYXNtYWxhe2ZvbnQtZmFtaWx5OkFtaXJpLHNlcmlmO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMTczZjM0O3BhZGRpbmc6MTBweCAwIDIycHg7bGV0dGVyLXNwYWNpbmc6LjJweH0uYXlhaC10ZXh0e2ZvbnQtZmFtaWx5OkFtaXJpLHNlcmlmO2ZvbnQtc2l6ZTpjbGFtcCgyN3B4LDMuMnZ3LDM3cHgpO2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoyLjM1O3RleHQtYWxpZ246anVzdGlmeTtjb2xvcjojMTQyZjJhO3dvcmQtc3BhY2luZzo1cHg7dGV4dC1zaGFkb3c6MCAuMnB4IDAgIzE0MmYyYX0uYXlhaHtkaXNwbGF5OmlubGluZX0uYXlhaC1udW17ZGlzcGxheTppbmxpbmUtZ3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDttYXJnaW46MCA3cHg7Y29sb3I6IzhkNjkzNjtib3JkZXI6MXB4IHNvbGlkICNjYmE5NmQ7Ym9yZGVyLXJhZGl1czo1MCU7Zm9udC1mYW1pbHk6QW1pcmksc2VyaWY7Zm9udC1zaXplOjE5cHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2JhY2tncm91bmQ6I2ZmZmFmMH0ucGFnZS1zZXB7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTRweDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbG9yOiNiNjg3M2U7Zm9udC1mYW1pbHk6QW1pcmksc2VyaWY7Zm9udC1zaXplOjI1cHh9LnBhZ2Utc2VwOmJlZm9yZSwucGFnZS1zZXA6YWZ0ZXJ7Y29udGVudDonJztoZWlnaHQ6MXB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LCNkNmI3N2QsdHJhbnNwYXJlbnQpO2ZsZXg6MX0ubG9hZGluZywuZW1wdHl7cGFkZGluZzozNXB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOnZhcigtLW11dGVkKX0uaGludHtjb2xvcjp2YXIoLS1tdXRlZCk7Zm9udC1zaXplOjExcHg7bWFyZ2luOjlweCAwIDB9QG1lZGlhKG1heC13aWR0aDo2NTBweCl7LmFwcHtwYWRkaW5nOjEwcHggOHB4IDQ1cHh9LnRvcHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6MTFweH0udG9vbHN7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS50b29sLWJ0bntwYWRkaW5nOjdweCA4cHg7Zm9udC1zaXplOjExcHh9LnN1cmFoLWxpc3R7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7Z2FwOjdweH0uc3VyYWh7cGFkZGluZzo5cHggN3B4O2dhcDo3cHh9LnN1cmFoIHN0cm9uZ3tmb250LXNpemU6MTJweH0uc3VyYWggc21hbGx7Zm9udC1zaXplOjlweH0ubnVte3dpZHRoOjI3cHg7aGVpZ2h0OjI3cHg7ZmxleC1iYXNpczoyN3B4O2ZvbnQtc2l6ZToxMXB4fS5wYWdle3BhZGRpbmc6MjJweCAxNXB4IDI3cHh9LnBhZ2U6YmVmb3Jle2luc2V0OjZweH0uYXlhaC10ZXh0e2ZvbnQtc2l6ZToyNXB4O2xpbmUtaGVpZ2h0OjIuNDU7d29yZC1zcGFjaW5nOjJweH0uYmFzbWFsYXtmb250LXNpemU6MjVweDtwYWRkaW5nLWJvdHRvbToxOHB4fS5zdXJhaC1oZWFkaW5nIGgye2ZvbnQtc2l6ZToyNnB4fS5heWFoLW51bXt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2ZvbnQtc2l6ZToxNnB4O21hcmdpbjowIDRweH19CjxzdHlsZT4ucXVyYW4tY292ZXJ7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxNDBweCAxZnI7Z2FwOjE2cHg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1ib3R0b206MTRweDtwYWRkaW5nOjE1cHg7Ym9yZGVyLXJhZGl1czoyMnB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywjMTY1YzRjLCMyYTliN2IgNTUlLCNkM2FiNjEpO2NvbG9yOiNmZmZ9LmNvdmVyLWFydHttaW4taGVpZ2h0OjEzNXB4O2JvcmRlci1yYWRpdXM6MTVweDtkaXNwbGF5OmdyaWQ7cGxhY2UtaXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE0NWRlZywjMGQ0NjNjLCMxMDM1MmUpO2JvcmRlcjoycHggc29saWQgI2QzYWI2MTtmb250LXNpemU6NThweH0uY292ZXItY29weSBoMntmb250LWZhbWlseTpBbWlyaSxzZXJpZjtmb250LXNpemU6MzBweDttYXJnaW46MH0uY292ZXItY29weSBwe21hcmdpbjo1cHggMDtsaW5lLWhlaWdodDoxLjg7Zm9udC1zaXplOjEzcHh9LmNvdmVyLWNvcHkgc21hbGx7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDo4cHg7cGFkZGluZzo1cHggOXB4O2JvcmRlci1yYWRpdXM6OTlweDtiYWNrZ3JvdW5kOiNmZmZmZmYyYn0ucXVyYW4tdGFic3tkaXNwbGF5OmZsZXg7Z2FwOjdweDttYXJnaW4tYm90dG9tOjEycHg7cGFkZGluZzo1cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1saW5lKTtib3JkZXItcmFkaXVzOjE1cHg7YmFja2dyb3VuZDojZmZmZmZmYjh9LnF1cmFuLXRhYntmbGV4OjE7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czoxMXB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tbXV0ZWQpO3BhZGRpbmc6MTBweCA3cHg7Zm9udC13ZWlnaHQ6ODAwfS5xdXJhbi10YWIuYWN0aXZle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywjMzhiODk1LCM0YTliZDcpO2NvbG9yOiNmZmZ9LnZpZXctbm90ZXtwYWRkaW5nOjExcHggMTNweDttYXJnaW4tYm90dG9tOjEycHg7Ym9yZGVyLXJhZGl1czoxM3B4O2JhY2tncm91bmQ6I2YwZmFmNTtjb2xvcjojNGY3MTY3O2ZvbnQtc2l6ZToxMnB4fS5xdXJhbi1yb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NnB4fS5xdXJhbi1vcGVue2ZsZXg6MTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo4cHg7dGV4dC1hbGlnbjpyaWdodDtib3JkZXI6MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWluayk7cGFkZGluZzo1cHh9LnF1cmFuLWFjdGlvbntib3JkZXI6MXB4IHNvbGlkIHZhcigtLWxpbmUpO2JvcmRlci1yYWRpdXM6OXB4O2JhY2tncm91bmQ6I2Y3ZmNmOTtjb2xvcjojNmU4YjgwO3BhZGRpbmc6N3B4IDZweDtmb250LXNpemU6MTFweH0ucXVyYW4tYWN0aW9uLmFjdGl2ZXtiYWNrZ3JvdW5kOiNkZmY1ZTk7Y29sb3I6IzExODA1Zjtib3JkZXItY29sb3I6IzgwYzlhYX0uanV6LWdyaWQsLmhpc3RvcnktZ3JpZHtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDE1MHB4LDFmcikpO2dhcDo4cHh9Lmp1ei1jYXJkLC5oaXN0b3J5LWNhcmR7Ym9yZGVyOjFweCBzb2xpZCAjZTBlZWU3O2JvcmRlci1yYWRpdXM6MTNweDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzoxMnB4O2NvbG9yOnZhcigtLWluayl9Lmp1ei1jYXJkIHN0cm9uZywuaGlzdG9yeS1jYXJkIHN0cm9uZ3tkaXNwbGF5OmJsb2NrO2NvbG9yOnZhcigtLXRlYWwpfS5qdXotY2FyZCBzbWFsbCwuaGlzdG9yeS1jYXJkIHNtYWxse2NvbG9yOnZhcigtLW11dGVkKTtmb250LXNpemU6MTBweH0uaGlzdG9yeS1jYXJke2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtnYXA6OHB4O2FsaWduLWl0ZW1zOmNlbnRlcn0uaGlzdG9yeS1jYXJkIGJ1dHRvbntib3JkZXI6MXB4IHNvbGlkIHZhcigtLWxpbmUpO2JhY2tncm91bmQ6I2Y3ZmNmOTtjb2xvcjp2YXIoLS10ZWFsKTtib3JkZXItcmFkaXVzOjlweDtwYWRkaW5nOjZweH1AbWVkaWEobWF4LXdpZHRoOjY1MHB4KXsucXVyYW4tY292ZXJ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjg1cHggMWZyO3BhZGRpbmc6MTBweH0uY292ZXItYXJ0e21pbi1oZWlnaHQ6MTAwcHg7Zm9udC1zaXplOjQycHh9LmNvdmVyLWNvcHkgaDJ7Zm9udC1zaXplOjIzcHh9LmNvdmVyLWNvcHkgcHtmb250LXNpemU6MTFweH0ucXVyYW4tdGFie2ZvbnQtc2l6ZToxMXB4fS5xdXJhbi1hY3Rpb257cGFkZGluZzo2cHggNHB4O2ZvbnQtc2l6ZToxMHB4fX08L3N0eWxlPjxzdHlsZSBpZD0icGxhbi1zdHlsZSI+LnN1cmFoLWljb25ze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTg1cHgsMWZyKSk7Z2FwOjhweDttYXJnaW4tdG9wOjEycHh9LnN1cmFoLW1pbml7bWluLXdpZHRoOjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6OHB4O3BhZGRpbmc6OHB4IDlweDtib3JkZXI6MXB4IHNvbGlkICNkZWVlZTY7Ym9yZGVyLXJhZGl1czoxNHB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE0NWRlZywjZmZmZmZmLCNmMmZhZjYpO3RleHQtYWxpZ246cmlnaHQ7bWluLWhlaWdodDo2NHB4O2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDM4LDg3LDY4LC4wNil9LnN1cmFoLW1pbmkgLnN1cmFoLWJhZGdle2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDtmbGV4OjAgMCAzMHB4O21hcmdpbjowO2JvcmRlci1yYWRpdXM6MTBweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxNDVkZWcsI2U2ZjdlZiwjZDVlZmU0KTtjb2xvcjojMTU3YzVlO2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjgwMH0uc3VyYWgtbWluaSAuc3VyYWgtaW5mb3ttaW4td2lkdGg6MDtmbGV4OjF9LnN1cmFoLW1pbmkgc3Ryb25ne2Rpc3BsYXk6YmxvY2s7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2ZvbnQtc2l6ZToxMnB4fS5zdXJhaC1taW5pIHNtYWxse2Rpc3BsYXk6YmxvY2s7Y29sb3I6dmFyKC0tbXV0ZWQpO2ZvbnQtc2l6ZTo5cHg7bWFyZ2luOjJweCAwIDB9Lm1pbmktYWN0aW9uc3tkaXNwbGF5OmZsZXg7Z2FwOjNweDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4LXdyYXA6d3JhcH0ubWluaS1hY3Rpb25zIGJ1dHRvbntib3JkZXI6MXB4IHNvbGlkIHZhcigtLWxpbmUpO2JvcmRlci1yYWRpdXM6OHB4O2JhY2tncm91bmQ6I2Y4ZmNmYTtjb2xvcjojNmE4ODdjO3BhZGRpbmc6NHB4IDZweDtmb250LXNpemU6OXB4O3doaXRlLXNwYWNlOm5vd3JhcH0ubWluaS1hY3Rpb25zIGJ1dHRvbi5hY3RpdmV7YmFja2dyb3VuZDojZDlmM2U1O2NvbG9yOiMxMDdjNWI7Ym9yZGVyLWNvbG9yOiM4M2M5YTd9LnBsYW4tcGFuZWx7bWFyZ2luLXRvcDoxNHB4O3BhZGRpbmc6MTVweDtib3JkZXI6MXB4IHNvbGlkICNkY2VjZTQ7Ym9yZGVyLXJhZGl1czoxOHB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE0NWRlZywjZmZmZmZmZDksI2VmZmFmNSl9LnBsYW4taGVhZHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo4cHg7bWFyZ2luLWJvdHRvbToxMXB4fS5wbGFuLWhlYWQgaDJ7bWFyZ2luOjA7Zm9udC1zaXplOjE2cHg7Y29sb3I6IzE5NmI1NH0ucGxhbi1oZWFkIHNwYW57Zm9udC1zaXplOjIycHh9LnBsYW4tZm9ybXtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyO2dhcDo5cHg7YWxpZ24taXRlbXM6ZW5kfS5wbGFuLWZpZWxkIGxhYmVse2Rpc3BsYXk6YmxvY2s7Y29sb3I6dmFyKC0tbXV0ZWQpO2ZvbnQtc2l6ZToxMXB4O21hcmdpbi1ib3R0b206NXB4fS5wbGFuLWZpZWxkIGlucHV0LC5wbGFuLWZpZWxkIHNlbGVjdHt3aWR0aDoxMDAlO3BhZGRpbmc6OXB4O2JvcmRlcjoxcHggc29saWQgdmFyKC0tbGluZSk7Ym9yZGVyLXJhZGl1czoxMHB4O2JhY2tncm91bmQ6I2ZmZjtjb2xvcjp2YXIoLS1pbmspfS5kYXlzLXRpdGxle21hcmdpbjoxMnB4IDAgNnB4O2NvbG9yOnZhcigtLW11dGVkKTtmb250LXNpemU6MTFweH0uZGF5c3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjVweH0uZGF5e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjRweDtwYWRkaW5nOjZweCA4cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1saW5lKTtib3JkZXItcmFkaXVzOjlweDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6IzU1NzY2Yjtmb250LXNpemU6MTBweH0uZGF5IGlucHV0e2FjY2VudC1jb2xvcjojMWI5Yzc1fS5jcmVhdGUtcGxhbnttYXJnaW4tdG9wOjExcHg7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czoxMHB4O3BhZGRpbmc6MTBweCAxNHB4O2NvbG9yOiNmZmY7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNGFhN2QsIzRjOWJkNyk7Zm9udC13ZWlnaHQ6ODAwfS5wbGFuLWxpc3R7ZGlzcGxheTpncmlkO2dhcDo4cHg7bWFyZ2luLXRvcDoxMnB4fS5wbGFuLWNhcmR7cGFkZGluZzoxMXB4O2JvcmRlci1yYWRpdXM6MTJweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGVlZWU2fS5wbGFuLWNhcmQgaDN7bWFyZ2luOjAgMCA2cHg7Y29sb3I6IzE5NmI1NDtmb250LXNpemU6MTNweH0ucGxhbi1jYXJkIHB7bWFyZ2luOjNweCAwO2NvbG9yOnZhcigtLW11dGVkKTtmb250LXNpemU6MTBweH0ucGxhbi10YWJsZXtkaXNwbGF5OmdyaWQ7Z2FwOjVweDttYXJnaW4tdG9wOjhweH0ucGxhbi1yb3d7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2dhcDo4cHg7cGFkZGluZzo2cHggOHB4O2JvcmRlci1yYWRpdXM6OHB4O2JhY2tncm91bmQ6I2YzZmFmNjtmb250LXNpemU6MTBweH0ucGxhbi1yb3cuZG9uZXtiYWNrZ3JvdW5kOiNkZmY1ZTg7Y29sb3I6IzE2NzM1MX0uZGVsZXRlLXBsYW57ZmxvYXQ6bGVmdDtib3JkZXI6MDtib3JkZXItcmFkaXVzOjdweDtiYWNrZ3JvdW5kOiNmZmYwZjA7Y29sb3I6I2I4NWE1YTtwYWRkaW5nOjRweCA3cHg7Zm9udC1zaXplOjEwcHh9QG1lZGlhKG1heC13aWR0aDo3MDBweCl7LnN1cmFoLWljb25ze2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMywxZnIpO2dhcDo1cHh9LnBsYW4tZm9ybXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcn0ucGxhbi1mb3JtIC5wbGFuLWZpZWxkOmxhc3QtY2hpbGR7Z3JpZC1jb2x1bW46MS8tMX19QG1lZGlhKG1heC13aWR0aDo0MzBweCl7LnN1cmFoLWljb25ze2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMywxZnIpfS5taW5pLWFjdGlvbnMgYnV0dG9ue2ZvbnQtc2l6ZTo4cHg7cGFkZGluZzo0cHggM3B4fS5wbGFuLWZvcm17Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcn19IDwvc3R5bGU+PC9zdHlsZT48c3R5bGU+Ci8qINiq2K3Yr9mK2KvYp9iqINin2YTYpdi12K/Yp9ixINin2YTYrNiv2YrYryAqLwouYXBwe3dpZHRoOm1pbig0NjBweCwxMDAlKTtwYWRkaW5nOjhweCA3cHggMzRweH0KLnRvcHtwYWRkaW5nOjEwcHggMTJweDtib3JkZXItcmFkaXVzOjE2cHg7bWFyZ2luLWJvdHRvbToxMHB4fQoucGFuZWx7cGFkZGluZzoxMXB4O2JvcmRlci1yYWRpdXM6MTdweDttYXJnaW4tYm90dG9tOjEwcHh9Ci5xdXJhbi1jb3ZlcntncmlkLXRlbXBsYXRlLWNvbHVtbnM6ODBweCAxZnI7cGFkZGluZzo5cHg7Z2FwOjEwcHg7Ym9yZGVyLXJhZGl1czoxN3B4fQouY292ZXItYXJ0e21pbi1oZWlnaHQ6ODVweDtmb250LXNpemU6MzhweH0KLmNvdmVyLWNvcHkgaDJ7Zm9udC1zaXplOjIycHh9LmNvdmVyLWNvcHkgcHtmb250LXNpemU6MTBweDtsaW5lLWhlaWdodDoxLjU1fS5jb3Zlci1jb3B5IHNtYWxse2ZvbnQtc2l6ZTo5cHg7bWFyZ2luLXRvcDo0cHh9Ci5xdXJhbi10YWJze21hcmdpbi1ib3R0b206OXB4fS5xdXJhbi10YWJ7cGFkZGluZzo4cHggNXB4O2ZvbnQtc2l6ZToxMHB4fQouc3VyYWgtaWNvbnN7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLDFmcik7Z2FwOjVweH0KLnN1cmFoLW1pbml7cGFkZGluZzo3cHggNXB4O2JvcmRlci1yYWRpdXM6MTBweH0KLnBhZ2V7cGFkZGluZzoyMnB4IDE1cHggMjZweH0ucGFnZXN7Z2FwOjE4cHh9Ci8qINin2LPZhSDYp9mE2LPZiNix2Kkg2KvZhSDYp9mE2KjYs9mF2YTYqSAqLwouc3VyYWgtaGVhZGluZ3ttYXJnaW4tYm90dG9tOjNweH0uYmFzbWFsYXtwYWRkaW5nOjVweCAwIDE4cHg7bWFyZ2luOjAgYXV0b30KLyog2KLYrtixINmC2LHYp9ih2KkgKi8KLmNvbnRpbnVlLXJlYWRpbmd7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtnYXA6OHB4O21hcmdpbjo5cHggMDtwYWRkaW5nOjlweCAxMHB4O2JvcmRlcjoxcHggc29saWQgdmFyKC0tbGluZSk7Ym9yZGVyLXJhZGl1czoxMnB4O2JhY2tncm91bmQ6I2Y1ZmJmODtjb2xvcjp2YXIoLS1pbmspO2ZvbnQtc2l6ZToxMXB4fQouY29udGludWUtcmVhZGluZyBidXR0b257Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czo5cHg7cGFkZGluZzo2cHggOXB4O2JhY2tncm91bmQ6IzE3ODU2ZDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjgwMDtmb250LXNpemU6MTBweH0KLyog2K7Yt9i3INin2YTYrdmB2LggKi8KLnBsYW4tZm9ybXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtnYXA6N3B4fS5wbGFuLWZvcm0gLnBsYW4tZmllbGQ6bGFzdC1jaGlsZHtncmlkLWNvbHVtbjoxLy0xfQoucGxhbi1wYW5lbHtwYWRkaW5nOjExcHg7Ym9yZGVyLXJhZGl1czoxNXB4fS5jcmVhdGUtcGxhbnt3aWR0aDoxMDAlO3BhZGRpbmc6OXB4fQpAbWVkaWEobWF4LXdpZHRoOjQzMHB4KXsuYXBwe3dpZHRoOm1pbig0NjBweCwxMDAlKTtwYWRkaW5nOjZweCA1cHggMzBweH0uc3VyYWgtaWNvbnN7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLDFmcil9LmF5YWgtdGV4dHtmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDoyLjM1fS5wYWdle3BhZGRpbmc6MThweCAxMnB4IDIycHh9LmJhc21hbGF7Zm9udC1zaXplOjI0cHh9fQo8L3N0eWxlPjxzdHlsZSBpZD0iZmluYWwtcXVyYW4tZml4ZXMiPi5zdXJhaC1oZWFkaW5ne2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyfS5zdXJhaC1oZWFkaW5nIGgye21hcmdpbjowIDAgMnB4fS5iYXNtYWxhe2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O21hcmdpbjowIWltcG9ydGFudDtwYWRkaW5nOjAgMCAxNHB4IWltcG9ydGFudDtmb250LXNpemU6Y2xhbXAoMjhweCw0dncsMzhweCkhaW1wb3J0YW50O2ZvbnQtZmFtaWx5OkFtaXJpLHNlcmlmIWltcG9ydGFudH0ucGxhbi1pdGVtcy1maWVsZCBzZWxlY3R7bWluLWhlaWdodDoxMTBweDtsaW5lLWhlaWdodDoxLjh9LnBsYW4taXRlbXMtZmllbGQgc21hbGx7Zm9udC1zaXplOjlweDtjb2xvcjp2YXIoLS1tdXRlZCl9LnBsYW4tcm93e2FsaWduLWl0ZW1zOmNlbnRlcn0ucGxhbi1jaGVja3tib3JkZXI6MXB4IHNvbGlkIHZhcigtLWxpbmUpO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjdweDttaW4td2lkdGg6MjRweDtwYWRkaW5nOjNweCA1cHg7Y29sb3I6Izc4OTQ4YTtmb250LXNpemU6MTBweH0ucGxhbi1jaGVjay5hY3RpdmV7YmFja2dyb3VuZDojZGZmNWU4O2NvbG9yOiMxNjczNTE7Ym9yZGVyLWNvbG9yOiM4Y2M5YWF9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXJ7Ym9yZGVyOjAhaW1wb3J0YW50O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7d2lkdGg6YXV0byFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8haW1wb3J0YW50O21hcmdpbjowIDdweCFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50O3ZlcnRpY2FsLWFsaWduOm1pZGRsZSFpbXBvcnRhbnQ7Y29sb3I6IzhmNmIzMiFpbXBvcnRhbnQ7Zm9udDo3MDAgMjRweCBBbWlyaSFpbXBvcnRhbnQ7cG9zaXRpb246cmVsYXRpdmUhaW1wb3J0YW50fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmJlZm9yZSwuYXlhaC1udW0ub3JuYXRlLW51bWJlcjphZnRlcntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyIC5heWFoLWRpZ2l0OmJlZm9yZXtjb250ZW50OifbnSc7bWFyZ2luLWxlZnQ6MnB4fS5yZWFkZXJ7bWF4LXdpZHRoOjEwMCV9LnBhZ2V7bWF4LXdpZHRoOjEwMCV9QG1lZGlhKG1heC13aWR0aDo0NjBweCl7LmFwcHt3aWR0aDptaW4oNDYwcHgsMTAwJSl9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXJ7Zm9udC1zaXplOjE5cHghaW1wb3J0YW50O21hcmdpbjowIDRweCFpbXBvcnRhbnR9LmJhc21hbGF7Zm9udC1zaXplOjI0cHghaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjExcHghaW1wb3J0YW50fS5wbGFuLWl0ZW1zLWZpZWxkIHNlbGVjdHttaW4taGVpZ2h0Ojk1cHh9fTwvc3R5bGU+PHN0eWxlIGlkPSJ2ZXJpZmllZC1xdXJhbi1maXhlcyI+Ci8qINin2YTZgdmH2LHYszog2KXYuNmH2KfYsSDYrNmF2YrYuSDYp9mE2LPZiNixINi52YbYryDZgdiq2K0g2KfZhNio2LHZhtin2YXYrCAqLwojc3VyYWhWaWV3e2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fQovKiDYudmG2YjYp9mGINin2YTYs9mI2LHYqSDYq9mFINin2YTYqNiz2YXZhNipINmF2KjYp9i02LHYqSDYqtit2KrZhyAqLwouc3VyYWgtaGVhZGluZ3tkaXNwbGF5OmZsZXghaW1wb3J0YW50O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbiFpbXBvcnRhbnQ7YWxpZ24taXRlbXM6Y2VudGVyIWltcG9ydGFudDt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7bWFyZ2luOjJweCAwIDE0cHghaW1wb3J0YW50fQouc3VyYWgtaGVhZGluZyBoMntvcmRlcjoxIWltcG9ydGFudDttYXJnaW46MCAwIDNweCFpbXBvcnRhbnR9Ci5zdXJhaC1oZWFkaW5nIC5iYXNtYWxhe29yZGVyOjIhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O21hcmdpbjowIWltcG9ydGFudDtwYWRkaW5nOjAgMCAxNnB4IWltcG9ydGFudH0KLyog2LnZhNin2YXYqSDYp9mE2KLZitipOiDYp9mE2LHZgtmFINiv2KfYrtmEINin2YTYudmE2KfZhdipINmI2YTZitizINiu2KfYsdis2YfYpyAqLwouYXlhaC1udW0ub3JuYXRlLW51bWJlcntkaXNwbGF5OmlubGluZS1ncmlkIWltcG9ydGFudDtwbGFjZS1pdGVtczpjZW50ZXIhaW1wb3J0YW50O3dpZHRoOjQzcHghaW1wb3J0YW50O2hlaWdodDo0M3B4IWltcG9ydGFudDttYXJnaW46MCA2cHghaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnQ7Ym9yZGVyOjAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnQ7YmFja2dyb3VuZDp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZSFpbXBvcnRhbnQ7dmVydGljYWwtYWxpZ246bWlkZGxlIWltcG9ydGFudDtjb2xvcjojOGY2ODJmIWltcG9ydGFudDtmb250OjcwMCAyMHB4IEFtaXJpLHNlcmlmIWltcG9ydGFudDtsaW5lLWhlaWdodDoxIWltcG9ydGFudDtpc29sYXRpb246aXNvbGF0ZSFpbXBvcnRhbnR9Ci5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmJlZm9yZXtjb250ZW50OifbnSchaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtpbnNldDowIWltcG9ydGFudDtkaXNwbGF5OmdyaWQhaW1wb3J0YW50O3BsYWNlLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnQ7Y29sb3I6I2I5ODk0MCFpbXBvcnRhbnQ7Zm9udDo0MDAgNDNweCBBbWlyaSxzZXJpZiFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MSFpbXBvcnRhbnQ7ei1pbmRleDowIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lIWltcG9ydGFudH0KLmF5YWgtbnVtLm9ybmF0ZS1udW1iZXI6YWZ0ZXJ7Y29udGVudDpub25lIWltcG9ydGFudDtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fQouYXlhaC1udW0ub3JuYXRlLW51bWJlciAuYXlhaC1kaWdpdHtwb3NpdGlvbjpyZWxhdGl2ZSFpbXBvcnRhbnQ7ei1pbmRleDoyIWltcG9ydGFudDtkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtjb2xvcjojN2Y1ZDJjIWltcG9ydGFudDtmb250OjcwMCAxOXB4IEFtaXJpLHNlcmlmIWltcG9ydGFudDtsaW5lLWhlaWdodDo0M3B4IWltcG9ydGFudDt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTFweCkhaW1wb3J0YW50fQpAbWVkaWEobWF4LXdpZHRoOjQ2MHB4KXsuYXlhaC1udW0ub3JuYXRlLW51bWJlcnt3aWR0aDozN3B4IWltcG9ydGFudDtoZWlnaHQ6MzdweCFpbXBvcnRhbnQ7bWFyZ2luOjAgNHB4IWltcG9ydGFudH0uYXlhaC1udW0ub3JuYXRlLW51bWJlcjpiZWZvcmV7Zm9udC1zaXplOjM3cHghaW1wb3J0YW50fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyIC5heWFoLWRpZ2l0e2ZvbnQtc2l6ZToxNnB4IWltcG9ydGFudDtsaW5lLWhlaWdodDozN3B4IWltcG9ydGFudH19Cjwvc3R5bGU+PHN0eWxlIGlkPSJleGFjdC1tdXNoYWYtbWFya2VyLWZvbnQiPgpAZm9udC1mYWNle2ZvbnQtZmFtaWx5OidVdGhtYW5pY0hhZnMnO3NyYzp1cmwoJ2h0dHBzOi8vdmVyc2VzLnF1cmFuLmZvdW5kYXRpb24vZm9udHMvcXVyYW4vaGFmcy91dGhtYW5pY19oYWZzL1V0aG1hbmljSGFmczFWZXIxOC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSx1cmwoJ2h0dHBzOi8vdmVyc2VzLnF1cmFuLmZvdW5kYXRpb24vZm9udHMvcXVyYW4vaGFmcy91dGhtYW5pY19oYWZzL1V0aG1hbmljSGFmczFWZXIxOC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7Zm9udC1kaXNwbGF5OnN3YXB9Ci8qINi52YTYp9mF2Kkg2KfZhNii2YrYqSDYo9mC2LHYqCDZhNi52YTYp9mF2Kkg2KfZhNmF2LXYrdmBOiDYstiu2LHZgdipINmB2LnZhNmK2Kkg2YjYp9mE2LHZgtmFINiv2KfYrtmE2YfYpyAqLwouYXlhaC1udW0ub3JuYXRlLW51bWJlcntmb250LWZhbWlseTonVXRobWFuaWNIYWZzJyxBbWlyaSxzZXJpZiFpbXBvcnRhbnQ7d2lkdGg6NDZweCFpbXBvcnRhbnQ7aGVpZ2h0OjQ2cHghaW1wb3J0YW50O21hcmdpbjowIDZweCFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50O3Bvc2l0aW9uOnJlbGF0aXZlIWltcG9ydGFudDtib3JkZXI6MCFpbXBvcnRhbnQ7YmFja2dyb3VuZDp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7dmVydGljYWwtYWxpZ246bWlkZGxlIWltcG9ydGFudDtvdmVyZmxvdzp2aXNpYmxlIWltcG9ydGFudDtjb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Zm9udC1zaXplOjAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjEhaW1wb3J0YW50fQouYXlhaC1udW0ub3JuYXRlLW51bWJlcjpiZWZvcmV7Y29udGVudDon250nIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7aW5zZXQ6MCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudDthbGlnbi1pdGVtczpjZW50ZXIhaW1wb3J0YW50O2p1c3RpZnktY29udGVudDpjZW50ZXIhaW1wb3J0YW50O2NvbG9yOiM4ZTY5MzIhaW1wb3J0YW50O2ZvbnQtZmFtaWx5OidVdGhtYW5pY0hhZnMnLHNlcmlmIWltcG9ydGFudDtmb250LXNpemU6NDZweCFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NDAwIWltcG9ydGFudDtsaW5lLWhlaWdodDoxIWltcG9ydGFudDt6LWluZGV4OjEhaW1wb3J0YW50fQouYXlhaC1udW0ub3JuYXRlLW51bWJlciAuYXlhaC1kaWdpdHtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7aW5zZXQ6MCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudDthbGlnbi1pdGVtczpjZW50ZXIhaW1wb3J0YW50O2p1c3RpZnktY29udGVudDpjZW50ZXIhaW1wb3J0YW50O2NvbG9yOiM1ZDQ3MjghaW1wb3J0YW50O2ZvbnQtZmFtaWx5OkFtaXJpLHNlcmlmIWltcG9ydGFudDtmb250LXNpemU6MTZweCFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudDtsaW5lLWhlaWdodDoxIWltcG9ydGFudDt6LWluZGV4OjIhaW1wb3J0YW50O3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xcHgpIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lIWltcG9ydGFudH0KQG1lZGlhKG1heC13aWR0aDo0NjBweCl7LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXJ7d2lkdGg6MzlweCFpbXBvcnRhbnQ7aGVpZ2h0OjM5cHghaW1wb3J0YW50O21hcmdpbjowIDRweCFpbXBvcnRhbnR9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXI6YmVmb3Jle2ZvbnQtc2l6ZTozOXB4IWltcG9ydGFudH0uYXlhaC1udW0ub3JuYXRlLW51bWJlciAuYXlhaC1kaWdpdHtmb250LXNpemU6MTRweCFpbXBvcnRhbnR9fQo8L3N0eWxlPgo8c3R5bGUgaWQ9ImZpbmFsLXBsYW4tbmF2LWZpeCI+Ci5wbGFuLWZvcm17Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyIDFmciFpbXBvcnRhbnR9LnBsYW4taXRlbXMtZmllbGR7Z3JpZC1jb2x1bW46c3BhbiAyfS5wbGFuLWZpZWxkIGlucHV0W3R5cGU9ZGF0ZV17ZGlyZWN0aW9uOmx0cjt0ZXh0LWFsaWduOmNlbnRlcn0KQG1lZGlhKG1heC13aWR0aDo3MDBweCl7LnBsYW4tZm9ybXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciFpbXBvcnRhbnR9LnBsYW4taXRlbXMtZmllbGR7Z3JpZC1jb2x1bW46MS8tMX19CkBtZWRpYShtYXgtd2lkdGg6NDMwcHgpey5wbGFuLWZvcm17Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciFpbXBvcnRhbnR9LnBsYW4taXRlbXMtZmllbGR7Z3JpZC1jb2x1bW46MS8tMX19Ci5xdXJhbi10YWJ7Y3Vyc29yOnBvaW50ZXIhaW1wb3J0YW50O3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247dXNlci1zZWxlY3Q6bm9uZX0ucXVyYW4tdGFiOmFjdGl2ZXt0cmFuc2Zvcm06c2NhbGUoLjk4KX0KPC9zdHlsZT48L2hlYWQ+PGJvZHk+PG1haW4gY2xhc3M9ImFwcCI+PGhlYWRlciBjbGFzcz0idG9wIj48ZGl2IGNsYXNzPSJicmFuZCI+PGRpdiBjbGFzcz0iYnJhbmQtaWNvbiI+8J+TljwvZGl2PjxkaXY+PGgxPtin2YTZgtix2KLZhiDYp9mE2YPYsdmK2YU8L2gxPjxwIGNsYXNzPSJzdWIiPtmI2LbYuSDZgtix2KfYodipINmI2KfYttitINio2KrZhtiz2YrZgiDZgtix2YrYqCDZhdmGINin2YTZhdi12K3ZgTwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJ0b29scyI+PGJ1dHRvbiBjbGFzcz0idG9vbC1idG4iIGlkPSJmb250RG93biI+QeKIkjwvYnV0dG9uPjxidXR0b24gY2xhc3M9InRvb2wtYnRuIiBpZD0iZm9udFVwIj5B77yLPC9idXR0b24+PC9kaXY+PC9oZWFkZXI+PHNlY3Rpb24gY2xhc3M9InBhbmVsIiBpZD0ibGlicmFyeSI+PGRpdiBjbGFzcz0icXVyYW4tY292ZXIiPjxkaXYgY2xhc3M9ImNvdmVyLWFydCI+8J+VizwvZGl2PjxkaXYgY2xhc3M9ImNvdmVyLWNvcHkiPjxoMj7Yp9mE2YLYsdii2YYg2KfZhNmD2LHZitmFPC9oMj48cD7ZhtmI2LHZjCDZgdmKINin2YTZgtmE2Kgg2YjYt9mF2KPZhtmK2YbYqdmMINmB2Yog2KfZhNmK2YjZhS48YnI+2KfZgtix2KPYjCDYp9it2YHYuNiMINmI2LHYp9is2Lkg2YjYsdiv2YMuPC9wPjxzbWFsbD7Zodmh2aQg2LPZiNix2Kkgwrcg2YLYsdin2KHYqSDZiNit2YHYuCDZiNmF2LHYp9is2LnYqTwvc21hbGw+PC9kaXY+PC9kaXY+PG5hdiBjbGFzcz0icXVyYW4tdGFicyI+PGJ1dHRvbiB0eXBlPSJidXR0b24iIGlkPSJuYXZTdXJhaHMiIGNsYXNzPSJxdXJhbi10YWIgYWN0aXZlIiBkYXRhLXZpZXc9InN1cmFocyI+4pi3INin2YTYs9mI2LE8L2J1dHRvbj48YnV0dG9uIHR5cGU9ImJ1dHRvbiIgaWQ9Im5hdkp1eiIgY2xhc3M9InF1cmFuLXRhYiIgZGF0YS12aWV3PSJqdXoiPuKXiCDYp9mE2KPYrNiy2KfYoTwvYnV0dG9uPjxidXR0b24gdHlwZT0iYnV0dG9uIiBpZD0ibmF2SGlzdG9yeSIgY2xhc3M9InF1cmFuLXRhYiIgZGF0YS12aWV3PSJoaXN0b3J5Ij7ihrsg2KfZhNiz2KzZhDwvYnV0dG9uPjxidXR0b24gdHlwZT0iYnV0dG9uIiBpZD0ibmF2UGxhbnMiIGNsYXNzPSJxdXJhbi10YWIiIGRhdGEtdmlldz0icGxhbnMiPvCfk4Ug2K7Yt9i32Yo8L2J1dHRvbj48L25hdj48ZGl2IGlkPSJsYXN0UmVhZGluZyIgY2xhc3M9ImNvbnRpbnVlLXJlYWRpbmciPjxzcGFuIGNsYXNzPSJsci10ZXh0Ij48L3NwYW4+PGJ1dHRvbiBvbmNsaWNrPSJvcGVuTGFzdFJlYWRpbmcoKSI+2YXYqtin2KjYudipINin2YTZgtix2KfYodipPC9idXR0b24+PC9kaXY+PGRpdiBpZD0idmlld05vdGUiIGNsYXNzPSJ2aWV3LW5vdGUiPtit2K/YryA8Yj7inJMg2K3Zgdi4PC9iPiDYo9mIIDxiPuKGuyDZhdix2KfYrNi52Kk8L2I+INio2KzZiNin2LEg2KfYs9mFINin2YTYs9mI2LHYqdiMINij2Ygg2KPZhti02KYg2K7Yt9ipINit2YHYuCDZhdmGINmC2LPZhSDYrti32LfZii48L2Rpdj48ZGl2IGlkPSJzdXJhaFZpZXciPjxkaXYgc3R5bGU9ImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Z2FwOjhweDttYXJnaW4tYm90dG9tOjhweCI+PGgyIHN0eWxlPSJtYXJnaW46MDtmb250LXNpemU6MTZweDtjb2xvcjojMTk2YjU0Ij7wn5OaINmB2YfYsdizINin2YTYs9mI2LE8L2gyPjxzcGFuIHN0eWxlPSJmb250LXNpemU6MTBweDtjb2xvcjp2YXIoLS1tdXRlZCkiPtmh2aHZpCDYs9mI2LHYqTwvc3Bhbj48L2Rpdj48aW5wdXQgaWQ9InNlYXJjaCIgY2xhc3M9InNlYXJjaCIgcGxhY2Vob2xkZXI9Itio2K3YqyDYp9iu2KrZitin2LHZiiDYqNin2LPZhSDYp9mE2LPZiNix2KkuLi4iPjxkaXYgaWQ9Imxpc3QiIGNsYXNzPSJzdXJhaC1pY29ucyI+PC9kaXY+PC9kaXY+PGRpdiBpZD0ianV6VmlldyIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+PGRpdiBpZD0ianV6TGlzdCIgY2xhc3M9Imp1ei1ncmlkIj48L2Rpdj48L2Rpdj48ZGl2IGlkPSJoaXN0b3J5VmlldyIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+PGRpdiBpZD0iaGlzdG9yeSIgY2xhc3M9Imhpc3RvcnktZ3JpZCI+PC9kaXY+PC9kaXY+PGRpdiBpZD0icGxhbnNWaWV3IiBzdHlsZT0iZGlzcGxheTpub25lIj48c2VjdGlvbiBjbGFzcz0icGxhbi1wYW5lbCIgaWQ9InBsYW5zQnVpbGRlciI+PGRpdiBjbGFzcz0icGxhbi1oZWFkIj48aDI+8J+ThSDYrti32KrZiiDYp9mE2K7Yp9i12Kk8L2gyPjxzcGFuPvCfl5PvuI88L3NwYW4+PC9kaXY+PHAgY2xhc3M9ImhpbnQiPtij2YbYqiDYqtiu2KrYp9ixINin2YTYs9mI2LEg2KPZiCDYp9mE2KPYrNiy2KfYoSDYo9mIINin2YTYo9it2LLYp9io2Iwg2KvZhSDYqtiu2KrYp9ixINij2YrYp9mFINin2YTYrdmB2LjYjCDZiNiz2YrZj9mG2LTYoyDZhNmDINis2K/ZiNmEINmF2LHYqtioINiq2YTZgtin2KbZitmL2KcuPC9wPjxkaXYgY2xhc3M9InBsYW4tZm9ybSI+PGRpdiBjbGFzcz0icGxhbi1maWVsZCI+PGxhYmVsPtmG2YjYuSDYp9mE2YjYsdivPC9sYWJlbD48c2VsZWN0IGlkPSJwbGFuVHlwZSI+PG9wdGlvbiB2YWx1ZT0ic3VyYWgiPtiz2YjYsTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9Imp1eiI+2KPYrNiy2KfYoTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9ImhpemIiPtij2K3Ystin2Kg8L29wdGlvbj48L3NlbGVjdD48L2Rpdj48ZGl2IGNsYXNzPSJwbGFuLWZpZWxkIHBsYW4taXRlbXMtZmllbGQiPjxsYWJlbD7Yp9iu2KrZitin2LEg2KfZhNmI2LHYryA8c21hbGw+KNmK2YXZg9mGINin2K7YqtmK2KfYsSDYo9mD2KvYsSDZhdmGINmI2KfYrdivKTwvc21hbGw+PC9sYWJlbD48c2VsZWN0IGlkPSJwbGFuSXRlbSIgbXVsdGlwbGUgc2l6ZT0iNSI+PC9zZWxlY3Q+PC9kaXY+PGRpdiBjbGFzcz0icGxhbi1maWVsZCI+PGxhYmVsPtiq2KfYsdmK2K4g2KfZhNio2K/Yp9mK2Kk8L2xhYmVsPjxpbnB1dCBpZD0icGxhblN0YXJ0IiB0eXBlPSJkYXRlIj48L2Rpdj48ZGl2IGNsYXNzPSJwbGFuLWZpZWxkIj48bGFiZWw+2KrYp9ix2YrYriDYp9mE2KfZhtiq2YfYp9ihPC9sYWJlbD48aW5wdXQgaWQ9InBsYW5FbmQiIHR5cGU9ImRhdGUiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImRheXMtdGl0bGUiPtin2K7YqtixINij2YrYp9mFINin2YTYrdmB2Lg8L2Rpdj48ZGl2IGlkPSJkYXlzIiBjbGFzcz0iZGF5cyI+PC9kaXY+PGJ1dHRvbiBpZD0iY3JlYXRlUGxhbiIgY2xhc3M9ImNyZWF0ZS1wbGFuIj7YpdmG2LTYp9ihINis2K/ZiNmEINin2YTYrti32Kk8L2J1dHRvbj48L3NlY3Rpb24+PGRpdiBpZD0icGxhbnNPbmx5IiBjbGFzcz0icGxhbi1saXN0Ij48L2Rpdj48L2Rpdj48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9InJlYWRlciIgaWQ9InJlYWRlciI+PGRpdiBjbGFzcz0icmVhZGVyLWhlYWQiPjxkaXY+PGgyIGlkPSJyZWFkZXJUaXRsZSIgY2xhc3M9InJlYWRlci10aXRsZSI+PC9oMj48cCBpZD0icmVhZGVyTWV0YSIgY2xhc3M9InJlYWRlci1tZXRhIj48L3A+PC9kaXY+PGJ1dHRvbiB0eXBlPSJidXR0b24iIGlkPSJiYWNrIiBjbGFzcz0iYmFjayI+4oC5INin2YTYs9mI2LE8L2J1dHRvbj48L2Rpdj48ZGl2IGlkPSJwYWdlcyIgY2xhc3M9InBhZ2VzIj48L2Rpdj48L3NlY3Rpb24+PC9tYWluPjxzY3JpcHQ+Y29uc3Qgc3VyYWhzPVt7aWQ6MSxuYW1lOifYp9mE2YHYp9iq2K3YqScsYXlhaHM6N30se2lkOjIsbmFtZTon2KfZhNio2YLYsdipJyxheWFoczoyODZ9LHtpZDozLG5hbWU6J9ii2YQg2LnZhdix2KfZhicsYXlhaHM6MjAwfSx7aWQ6NCxuYW1lOifYp9mE2YbYs9in2KEnLGF5YWhzOjE3Nn0se2lkOjUsbmFtZTon2KfZhNmF2KfYptiv2KknLGF5YWhzOjEyMH0se2lkOjYsbmFtZTon2KfZhNij2YbYudin2YUnLGF5YWhzOjE2NX0se2lkOjcsbmFtZTon2KfZhNij2LnYsdin2YEnLGF5YWhzOjIwNn0se2lkOjgsbmFtZTon2KfZhNij2YbZgdin2YQnLGF5YWhzOjc1fSx7aWQ6OSxuYW1lOifYp9mE2KrZiNio2KknLGF5YWhzOjEyOX0se2lkOjEwLG5hbWU6J9mK2YjZhtizJyxheWFoczoxMDl9LHtpZDoxMSxuYW1lOifZh9mI2K8nLGF5YWhzOjEyM30se2lkOjEyLG5hbWU6J9mK2YjYs9mBJyxheWFoczoxMTF9LHtpZDoxMyxuYW1lOifYp9mE2LHYudivJyxheWFoczo0M30se2lkOjE0LG5hbWU6J9il2KjYsdin2YfZitmFJyxheWFoczo1Mn0se2lkOjE1LG5hbWU6J9in2YTYrdis2LEnLGF5YWhzOjk5fSx7aWQ6MTYsbmFtZTon2KfZhNmG2K3ZhCcsYXlhaHM6MTI4fSx7aWQ6MTcsbmFtZTon2KfZhNil2LPYsdin2KEnLGF5YWhzOjExMX0se2lkOjE4LG5hbWU6J9in2YTZg9mH2YEnLGF5YWhzOjExMH0se2lkOjE5LG5hbWU6J9mF2LHZitmFJyxheWFoczo5OH0se2lkOjIwLG5hbWU6J9i32YcnLGF5YWhzOjEzNX0se2lkOjIxLG5hbWU6J9in2YTYo9mG2KjZitin2KEnLGF5YWhzOjExMn0se2lkOjIyLG5hbWU6J9in2YTYrdisJyxheWFoczo3OH0se2lkOjIzLG5hbWU6J9in2YTZhdik2YXZhtmI2YYnLGF5YWhzOjExOH0se2lkOjI0LG5hbWU6J9in2YTZhtmI2LEnLGF5YWhzOjY0fSx7aWQ6MjUsbmFtZTon2KfZhNmB2LHZgtin2YYnLGF5YWhzOjc3fSx7aWQ6MjYsbmFtZTon2KfZhNi02LnYsdin2KEnLGF5YWhzOjIyN30se2lkOjI3LG5hbWU6J9in2YTZhtmF2YQnLGF5YWhzOjkzfSx7aWQ6MjgsbmFtZTon2KfZhNmC2LXYtScsYXlhaHM6ODh9LHtpZDoyOSxuYW1lOifYp9mE2LnZhtmD2KjZiNiqJyxheWFoczo2OX0se2lkOjMwLG5hbWU6J9in2YTYsdmI2YUnLGF5YWhzOjYwfSx7aWQ6MzEsbmFtZTon2YTZgtmF2KfZhicsYXlhaHM6MzR9LHtpZDozMixuYW1lOifYp9mE2LPYrNiv2KknLGF5YWhzOjMwfSx7aWQ6MzMsbmFtZTon2KfZhNij2K3Ystin2KgnLGF5YWhzOjczfSx7aWQ6MzQsbmFtZTon2LPYqNijJyxheWFoczo1NH0se2lkOjM1LG5hbWU6J9mB2KfYt9ixJyxheWFoczo0NX0se2lkOjM2LG5hbWU6J9mK2LMnLGF5YWhzOjgzfSx7aWQ6MzcsbmFtZTon2KfZhNi12KfZgdin2KonLGF5YWhzOjE4Mn0se2lkOjM4LG5hbWU6J9i1JyxheWFoczo4OH0se2lkOjM5LG5hbWU6J9in2YTYstmF2LEnLGF5YWhzOjc1fSx7aWQ6NDAsbmFtZTon2LrYp9mB2LEnLGF5YWhzOjg1fSx7aWQ6NDEsbmFtZTon2YHYtdmE2KonLGF5YWhzOjU0fSx7aWQ6NDIsbmFtZTon2KfZhNi02YjYsdmJJyxheWFoczo1M30se2lkOjQzLG5hbWU6J9in2YTYstiu2LHZgScsYXlhaHM6ODl9LHtpZDo0NCxuYW1lOifYp9mE2K/Yrtin2YYnLGF5YWhzOjU5fSx7aWQ6NDUsbmFtZTon2KfZhNis2KfYq9mK2KknLGF5YWhzOjM3fSx7aWQ6NDYsbmFtZTon2KfZhNij2K3Zgtin2YEnLGF5YWhzOjM1fSx7aWQ6NDcsbmFtZTon2YXYrdmF2K8nLGF5YWhzOjM4fSx7aWQ6NDgsbmFtZTon2KfZhNmB2KrYrScsYXlhaHM6Mjl9LHtpZDo0OSxuYW1lOifYp9mE2K3YrNix2KfYqicsYXlhaHM6MTh9LHtpZDo1MCxuYW1lOifZgicsYXlhaHM6NDV9LHtpZDo1MSxuYW1lOifYp9mE2LDYp9ix2YrYp9iqJyxheWFoczo2MH0se2lkOjUyLG5hbWU6J9in2YTYt9mI2LEnLGF5YWhzOjQ5fSx7aWQ6NTMsbmFtZTon2KfZhNmG2KzZhScsYXlhaHM6NjJ9LHtpZDo1NCxuYW1lOifYp9mE2YLZhdixJyxheWFoczo1NX0se2lkOjU1LG5hbWU6J9in2YTYsdit2YXZhicsYXlhaHM6Nzh9LHtpZDo1NixuYW1lOifYp9mE2YjYp9mC2LnYqScsYXlhaHM6OTZ9LHtpZDo1NyxuYW1lOifYp9mE2K3Yr9mK2K8nLGF5YWhzOjI5fSx7aWQ6NTgsbmFtZTon2KfZhNmF2KzYp9iv2YTYqScsYXlhaHM6MjJ9LHtpZDo1OSxuYW1lOifYp9mE2K3YtNixJyxheWFoczoyNH0se2lkOjYwLG5hbWU6J9in2YTZhdmF2KrYrdmG2KknLGF5YWhzOjEzfSx7aWQ6NjEsbmFtZTon2KfZhNi12YEnLGF5YWhzOjE0fSx7aWQ6NjIsbmFtZTon2KfZhNis2YXYudipJyxheWFoczoxMX0se2lkOjYzLG5hbWU6J9in2YTZhdmG2KfZgdmC2YjZhicsYXlhaHM6MTF9LHtpZDo2NCxuYW1lOifYp9mE2KrYutin2KjZhicsYXlhaHM6MTh9LHtpZDo2NSxuYW1lOifYp9mE2LfZhNin2YInLGF5YWhzOjEyfSx7aWQ6NjYsbmFtZTon2KfZhNiq2K3YsdmK2YUnLGF5YWhzOjEyfSx7aWQ6NjcsbmFtZTon2KfZhNmF2YTZgycsYXlhaHM6MzB9LHtpZDo2OCxuYW1lOifYp9mE2YLZhNmFJyxheWFoczo1Mn0se2lkOjY5LG5hbWU6J9in2YTYrdin2YLYqScsYXlhaHM6NTJ9LHtpZDo3MCxuYW1lOifYp9mE2YXYudin2LHYrCcsYXlhaHM6NDR9LHtpZDo3MSxuYW1lOifZhtmI2K0nLGF5YWhzOjI4fSx7aWQ6NzIsbmFtZTon2KfZhNis2YYnLGF5YWhzOjI4fSx7aWQ6NzMsbmFtZTon2KfZhNmF2LLZhdmEJyxheWFoczoyMH0se2lkOjc0LG5hbWU6J9in2YTZhdiv2KvYsScsYXlhaHM6NTZ9LHtpZDo3NSxuYW1lOifYp9mE2YLZitin2YXYqScsYXlhaHM6NDB9LHtpZDo3NixuYW1lOifYp9mE2KXZhtiz2KfZhicsYXlhaHM6MzF9LHtpZDo3NyxuYW1lOifYp9mE2YXYsdiz2YTYp9iqJyxheWFoczo1MH0se2lkOjc4LG5hbWU6J9in2YTZhtio2KMnLGF5YWhzOjQwfSx7aWQ6NzksbmFtZTon2KfZhNmG2KfYsti52KfYqicsYXlhaHM6NDZ9LHtpZDo4MCxuYW1lOifYudio2LMnLGF5YWhzOjQyfSx7aWQ6ODEsbmFtZTon2KfZhNiq2YPZiNmK2LEnLGF5YWhzOjI5fSx7aWQ6ODIsbmFtZTon2KfZhNin2YbZgdi32KfYsScsYXlhaHM6MTl9LHtpZDo4MyxuYW1lOifYp9mE2YXYt9mB2YHZitmGJyxheWFoczozNn0se2lkOjg0LG5hbWU6J9in2YTYp9mG2LTZgtin2YInLGF5YWhzOjI1fSx7aWQ6ODUsbmFtZTon2KfZhNio2LHZiNisJyxheWFoczoyMn0se2lkOjg2LG5hbWU6J9in2YTYt9in2LHZgicsYXlhaHM6MTd9LHtpZDo4NyxuYW1lOifYp9mE2KPYudmE2YknLGF5YWhzOjE5fSx7aWQ6ODgsbmFtZTon2KfZhNi62KfYtNmK2KknLGF5YWhzOjI2fSx7aWQ6ODksbmFtZTon2KfZhNmB2KzYsScsYXlhaHM6MzB9LHtpZDo5MCxuYW1lOifYp9mE2KjZhNivJyxheWFoczoyMH0se2lkOjkxLG5hbWU6J9in2YTYtNmF2LMnLGF5YWhzOjE1fSx7aWQ6OTIsbmFtZTon2KfZhNmE2YrZhCcsYXlhaHM6MjF9LHtpZDo5MyxuYW1lOifYp9mE2LbYrdmJJyxheWFoczoxMX0se2lkOjk0LG5hbWU6J9in2YTYtNix2K0nLGF5YWhzOjh9LHtpZDo5NSxuYW1lOifYp9mE2KrZitmGJyxheWFoczo4fSx7aWQ6OTYsbmFtZTon2KfZhNi52YTZgicsYXlhaHM6MTl9LHtpZDo5NyxuYW1lOifYp9mE2YLYr9ixJyxheWFoczo1fSx7aWQ6OTgsbmFtZTon2KfZhNio2YrZhtipJyxheWFoczo4fSx7aWQ6OTksbmFtZTon2KfZhNiy2YTYstmE2KknLGF5YWhzOjh9LHtpZDoxMDAsbmFtZTon2KfZhNi52KfYr9mK2KfYqicsYXlhaHM6MTF9LHtpZDoxMDEsbmFtZTon2KfZhNmC2KfYsdi52KknLGF5YWhzOjExfSx7aWQ6MTAyLG5hbWU6J9in2YTYqtmD2KfYq9ixJyxheWFoczo4fSx7aWQ6MTAzLG5hbWU6J9in2YTYudi12LEnLGF5YWhzOjN9LHtpZDoxMDQsbmFtZTon2KfZhNmH2YXYstipJyxheWFoczo5fSx7aWQ6MTA1LG5hbWU6J9in2YTZgdmK2YQnLGF5YWhzOjV9LHtpZDoxMDYsbmFtZTon2YLYsdmK2LQnLGF5YWhzOjR9LHtpZDoxMDcsbmFtZTon2KfZhNmF2KfYudmI2YYnLGF5YWhzOjd9LHtpZDoxMDgsbmFtZTon2KfZhNmD2YjYq9ixJyxheWFoczozfSx7aWQ6MTA5LG5hbWU6J9in2YTZg9in2YHYsdmI2YYnLGF5YWhzOjZ9LHtpZDoxMTAsbmFtZTon2KfZhNmG2LXYsScsYXlhaHM6M30se2lkOjExMSxuYW1lOifYp9mE2YXYs9ivJyxheWFoczo1fSx7aWQ6MTEyLG5hbWU6J9in2YTYpdiu2YTYp9i1JyxheWFoczo0fSx7aWQ6MTEzLG5hbWU6J9in2YTZgdmE2YInLGF5YWhzOjV9LHtpZDoxMTQsbmFtZTon2KfZhNmG2KfYsycsYXlhaHM6Nn1dO2NvbnN0IGFyPW49PlN0cmluZyhuKS5yZXBsYWNlKC9bMC05XS9nLGQ9PifZoNmh2aLZo9mk2aXZptmn2ajZqSdbZF0pO2NvbnN0IGxpc3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKSxzZWFyY2g9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLHJlYWRlcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhZGVyJyksbGlicmFyeT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlicmFyeScpLHBhZ2VzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpO2xldCBmb250PU51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncXVyYW5fcmVhZGVyX2ZvbnQnKXx8MzApLHN0YXRlPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3F1cmFuX2Z1bGxfdjInKXx8J3sic2F2ZWQiOnt9LCJyZXZpZXciOnt9LCJyZWFkIjp7fSwicGxhbnMiOltdLCJqdXpEb25lIjp7fX0nKTtzdGF0ZS5qdXpEb25lPXN0YXRlLmp1ekRvbmV8fHt9O2NvbnN0IHNhdmU9KCk9PmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdxdXJhbl9mdWxsX3YyJyxKU09OLnN0cmluZ2lmeShzdGF0ZSkpO2NvbnN0IHdlZWtkYXlzPVsn2KfZhNij2K3YrycsJ9in2YTYpdir2YbZitmGJywn2KfZhNir2YTYp9ir2KfYoScsJ9in2YTYo9ix2KjYudin2KEnLCfYp9mE2K7ZhdmK2LMnLCfYp9mE2KzZhdi52KknLCfYp9mE2LPYqNiqJ107ZnVuY3Rpb24gcmVuZGVyKCl7Y29uc3QgcT1zZWFyY2gudmFsdWUudHJpbSgpO2xpc3QuaW5uZXJIVE1MPXN1cmFocy5maWx0ZXIocz0+IXF8fHMubmFtZS5pbmNsdWRlcyhxKSkubWFwKHM9PmA8ZGl2IGNsYXNzPSJzdXJhaC1taW5pIj48c3BhbiBjbGFzcz0ic3VyYWgtYmFkZ2UiPiR7YXIocy5pZCl9PC9zcGFuPjxkaXYgY2xhc3M9InN1cmFoLWluZm8iPjxzdHJvbmc+JHtzLm5hbWV9PC9zdHJvbmc+PHNtYWxsPiR7YXIocy5heWFocyl9INii2YrYqTwvc21hbGw+PGRpdiBjbGFzcz0ibWluaS1hY3Rpb25zIj48YnV0dG9uIGRhdGEtb3Blbj0iJHtzLmlkfSI+8J+TliDZgtix2KfYodipPC9idXR0b24+PGJ1dHRvbiBjbGFzcz0iJHtzdGF0ZS5zYXZlZFtzLmlkXT8nYWN0aXZlJzonJ30iIGRhdGEtc2F2ZT0iJHtzLmlkfSI+4pyTINit2YHYuDwvYnV0dG9uPjxidXR0b24gY2xhc3M9IiR7c3RhdGUucmV2aWV3W3MuaWRdPydhY3RpdmUnOicnfSIgZGF0YS1yZXZpZXc9IiR7cy5pZH0iPuKGuyDZhdix2KfYrNi52Kk8L2J1dHRvbj48L2Rpdj48L2Rpdj48L2Rpdj5gKS5qb2luKCcnKXx8JzxkaXYgY2xhc3M9ZW1wdHk+2YTYpyDYqtmI2KzYryDYs9mI2LHYqSDZhdi32KfYqNmC2Kk8L2Rpdj4nfWZ1bmN0aW9uIHJlbmRlckhpc3RvcnkoKXtjb25zdCBkb25lPXN1cmFocy5maWx0ZXIocz0+c3RhdGUuc2F2ZWRbcy5pZF18fHN0YXRlLnJldmlld1tzLmlkXSk7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKS5pbm5lckhUTUw9ZG9uZS5sZW5ndGg/ZG9uZS5tYXAocz0+YDxkaXYgY2xhc3M9aGlzdG9yeS1jYXJkPjxkaXY+PHN0cm9uZz4ke3MubmFtZX08L3N0cm9uZz48c21hbGw+JHtzdGF0ZS5zYXZlZFtzLmlkXT8n4pyTINmF2K3ZgdmI2LjYqSAnOicnfSR7c3RhdGUucmV2aWV3W3MuaWRdPyfihrsg2YTZhNmF2LHYp9is2LnYqSc6Jyd9PC9zbWFsbD48L2Rpdj48YnV0dG9uIGRhdGEtb3Blbj0iJHtzLmlkfSI+2YHYqtitPC9idXR0b24+PC9kaXY+YCkuam9pbignJyk6JzxkaXYgY2xhc3M9ZW1wdHk+2YTYpyDZitmI2KzYryDYs9is2YQg2KjYudivPC9kaXY+J31jb25zdCBqdXpTdXJhaE5hbWVzPVsn2KfZhNmB2KfYqtit2KnYjCDYp9mE2KjZgtix2KknLCAn2KfZhNio2YLYsdipJywgJ9in2YTYqNmC2LHYqdiMINii2YQg2LnZhdix2KfZhicsICfYotmEINi52YXYsdin2YbYjCDYp9mE2YbYs9in2KEnLCAn2KfZhNmG2LPYp9ih2Iwg2KfZhNmF2KfYptiv2KknLCAn2KfZhNmF2KfYptiv2KnYjCDYp9mE2KPZhti52KfZhScsICfYp9mE2KPZhti52KfZhdiMINin2YTYo9i52LHYp9mBJywgJ9in2YTYo9i52LHYp9mB2Iwg2KfZhNij2YbZgdin2YQnLCAn2KfZhNij2YbZgdin2YTYjCDYp9mE2KrZiNio2KnYjCDZitmI2YbYsycsICfYp9mE2KrZiNio2KnYjCDZitmI2YbYs9iMINmH2YjYrycsICfZh9mI2K/YjCDZitmI2LPZgScsICfZitmI2LPZgdiMINin2YTYsdi52K/YjCDYpdio2LHYp9mH2YrZhScsICfYpdio2LHYp9mH2YrZhdiMINin2YTYrdis2LHYjCDYp9mE2YbYrdmEJywgJ9in2YTZhtit2YTYjCDYp9mE2KXYs9ix2KfYoScsICfYp9mE2KXYs9ix2KfYodiMINin2YTZg9mH2YEnLCAn2KfZhNmD2YfZgdiMINmF2LHZitmF2Iwg2LfZhycsICfYt9mH2Iwg2KfZhNij2YbYqNmK2KfYodiMINin2YTYrdisJywgJ9in2YTZhdik2YXZhtmI2YbYjCDYp9mE2YbZiNix2Iwg2KfZhNmB2LHZgtin2YYnLCAn2KfZhNmB2LHZgtin2YbYjCDYp9mE2LTYudix2KfYodiMINin2YTZhtmF2YQnLCAn2KfZhNmG2YXZhNiMINin2YTZgti12LXYjCDYp9mE2LnZhtmD2KjZiNiqJywgJ9in2YTYudmG2YPYqNmI2KrYjCDYp9mE2LHZiNmF2Iwg2YTZgtmF2KfZhicsICfYp9mE2KPYrdiy2KfYqNiMINiz2KjYo9iMINmB2KfYt9ixJywgJ9mK2LPYjCDYp9mE2LXYp9mB2KfYqtiMINi12Iwg2KfZhNiy2YXYsScsICfYp9mE2LLZhdix2Iwg2LrYp9mB2LHYjCDZgdi12YTYqicsICfZgdi12YTYqtiMINin2YTYtNmI2LHZidiMINin2YTYstiu2LHZgScsICfYp9mE2KPYrdmC2KfZgdiMINmF2K3Zhdiv2Iwg2KfZhNmB2KrYrScsICfYp9mE2LDYp9ix2YrYp9iq2Iwg2KfZhNi32YjYsdiMINin2YTZhtis2YUnLCAn2KfZhNmF2KzYp9iv2YTYqdiMINin2YTYrdi02LHYjCDYp9mE2LXZgScsICfYp9mE2YXZhNmD2Iwg2KfZhNmC2YTZhdiMINin2YTYrdin2YLYqScsICfYp9mE2YbYqNij2Iwg2KfZhNmG2KfYsti52KfYqtiMINi52KjYs9iMINin2YTYqtmD2YjZitixJ107ZnVuY3Rpb24gcmVuZGVySnV6KCl7Y29uc3QgZG9uZT1zdGF0ZS5qdXpEb25lfHx7fTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanV6TGlzdCcpLmlubmVySFRNTD1BcnJheS5mcm9tKHtsZW5ndGg6MzB9LChfLGkpPT5gPGRpdiBjbGFzcz1qdXotY2FyZD48c3Ryb25nPtin2YTYrNiy2KEgJHthcihpKzEpfTwvc3Ryb25nPjxzbWFsbCBjbGFzcz1qdXotc3VyYWhzPiR7anV6U3VyYWhOYW1lc1tpXX08L3NtYWxsPjxidXR0b24gY2xhc3M9Imp1ei1kb25lICR7ZG9uZVtpKzFdPydhY3RpdmUnOicnfSIgZGF0YS1qdXotZG9uZT0iJHtpKzF9Ij4ke2RvbmVbaSsxXT8n4pyTINiq2YUg2KXZhtmH2KfYoSDYp9mE2KzYstihJzon4peLINmE2YUg2KPZhtiq2YfZkCDZhdmGINin2YTYrNiy2KEnfTwvYnV0dG9uPjwvZGl2PmApLmpvaW4oJycpfWZ1bmN0aW9uIGl0ZW1PcHRpb25zKCl7Y29uc3QgdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhblR5cGUnKS52YWx1ZSxlbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhbkl0ZW0nKTtpZih0PT09J3N1cmFoJyl7ZWwuaW5uZXJIVE1MPXN1cmFocy5tYXAoeD0+YDxvcHRpb24gdmFsdWU9IiR7eC5pZH0iPiR7eC5pZH0uICR7eC5uYW1lfTwvb3B0aW9uPmApLmpvaW4oJycpfWVsc2V7Y29uc3Qgbj10PT09J2p1eic/MzA6NjA7ZWwuaW5uZXJIVE1MPUFycmF5LmZyb20oe2xlbmd0aDpufSwoXyxpKT0+YDxvcHRpb24gdmFsdWU9IiR7aSsxfSI+JHt0PT09J2p1eic/J9in2YTYrNiy2KEnOifYp9mE2K3YstioJ30gJHthcihpKzEpfTwvb3B0aW9uPmApLmpvaW4oJycpfX0KZnVuY3Rpb24gcmVuZGVyRGF5cygpe2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlzJykuaW5uZXJIVE1MPXdlZWtkYXlzLm1hcCgoZCxpKT0+YDxsYWJlbCBjbGFzcz1kYXk+PGlucHV0IHR5cGU9Y2hlY2tib3ggdmFsdWU9IiR7aX0iPiR7ZH08L2xhYmVsPmApLmpvaW4oJycpfQpmdW5jdGlvbiBhclBsYW5EYXRlKGlzb0RhdGUpe2NvbnN0IHA9U3RyaW5nKGlzb0RhdGV8fCcnKS5zcGxpdCgnLScpLm1hcChOdW1iZXIpO2lmKHAubGVuZ3RoIT09M3x8IXBbMF0pcmV0dXJuIFN0cmluZyhpc29EYXRlfHwnJyk7Y29uc3QgZD1uZXcgRGF0ZShwWzBdLHBbMV0tMSxwWzJdLDEyKTtjb25zdCB3ZD1bJ9in2YTYo9it2K8nLCfYp9mE2KXYq9mG2YrZhicsJ9in2YTYq9mE2KfYq9in2KEnLCfYp9mE2KPYsdio2LnYp9ihJywn2KfZhNiu2YXZitizJywn2KfZhNis2YXYudipJywn2KfZhNiz2KjYqiddW2QuZ2V0RGF5KCldO3JldHVybiB3ZCsnIOKAlCAnK2FyKGQuZ2V0RGF0ZSgpKSsnICcrWyfZitmG2KfZitixJywn2YHYqNix2KfZitixJywn2YXYp9ix2LMnLCfYo9io2LHZitmEJywn2YXYp9mK2YgnLCfZitmI2YbZitmIJywn2YrZiNmE2YrZiCcsJ9ij2LrYs9i32LMnLCfYs9io2KrZhdio2LEnLCfYo9mD2KrZiNio2LEnLCfZhtmI2YHZhdio2LEnLCfYr9mK2LPZhdio2LEnXVtkLmdldE1vbnRoKCldKycgJythcihkLmdldEZ1bGxZZWFyKCkpfQpmdW5jdGlvbiBwbGFuQ2FyZChwKXtyZXR1cm4gYDxhcnRpY2xlIGNsYXNzPSJwbGFuLWNhcmQiPjxidXR0b24gY2xhc3M9ImRlbGV0ZS1wbGFuIiBkYXRhLWRlbGV0ZS1wbGFuPSIke3AuaWR9Ij7Yrdiw2YE8L2J1dHRvbj48aDM+8J+ThSAke3AuaXRlbXM/Lmxlbmd0aD4xP3AuaXRlbXMubGVuZ3RoKycg2YjYsdiv2KfYqic6cC5pdGVtcz8uWzBdfHxwLml0ZW19PC9oMz48cD7ZhdmGOiAke2FyUGxhbkRhdGUocC5zdGFydCl8fHAuc3RhcnR8fCfigJQnfTxicj7YpdmE2Yk6ICR7YXJQbGFuRGF0ZShwLmVuZCl8fHAuZW5kfHwn4oCUJ308L3A+PGRpdiBjbGFzcz0icGxhbi10YWJsZSI+PGRpdiBjbGFzcz0icGxhbi1yb3cgcGxhbi1yb3ctaGVhZCI+PHNwYW4+2KfZhNmK2YjZhSDZiNin2YTYqtin2LHZitiuPC9zcGFuPjxiPtin2YTZiNix2K88L2I+PHNwYW4+2KfZhNit2KfZhNipPC9zcGFuPjwvZGl2PiR7KHAuc2NoZWR1bGV8fFtdKS5tYXAoKHgsaWR4KT0+YDxkaXYgY2xhc3M9InBsYW4tcm93ICR7eC5kb25lPydkb25lJzonJ30iPjxzcGFuPiR7eC5pc29EYXRlP2FyUGxhbkRhdGUoeC5pc29EYXRlKTp4LmRhdGV9PC9zcGFuPjxiPiR7eC5pdGVtfTwvYj48YnV0dG9uIGNsYXNzPSJwbGFuLWNoZWNrICR7eC5kb25lPydhY3RpdmUnOicnfSIgZGF0YS1wbGFuLWlkPSIke3AuaWR9IiBkYXRhLXBsYW4taW5kZXg9IiR7aWR4fSI+JHt4LmRvbmU/J+Kckyc6J+KXiyd9PC9idXR0b24+PC9kaXY+YCkuam9pbignJyl9PC9kaXY+PC9hcnRpY2xlPmB9CmZ1bmN0aW9uIHJlbmRlclBsYW5zKCl7Y29uc3QgaHRtbD1zdGF0ZS5wbGFucy5sZW5ndGg/c3RhdGUucGxhbnMubWFwKHBsYW5DYXJkKS5qb2luKCcnKTonPGRpdiBjbGFzcz0iZW1wdHkiPtmE2YUg2KrZhti02KYg2K7Yt9ipINio2LnYry4g2KfYrtiq2LEg2KfZhNmI2LHYryDZiNij2YrYp9mFINin2YTYrdmB2Lgg2YjYqtin2LHZitiuINin2YTYqNiv2KfZitipINmI2KfZhNmG2YfYp9mK2Kkg2KvZhSDYo9mG2LTYpiDYp9mE2KzYr9mI2YQuPC9kaXY+Jztjb25zdCBvdXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW5zT25seScpO2lmKG91dClvdXQuaW5uZXJIVE1MPWh0bWx9CmZ1bmN0aW9uIGNyZWF0ZVBsYW4oKXtjb25zdCBzdGFydD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhblN0YXJ0Jyk/LnZhbHVlfHwnJyxlbmQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW5FbmQnKT8udmFsdWV8fCcnLHNlbD1bLi4uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW5JdGVtJykuc2VsZWN0ZWRPcHRpb25zXSxkYXlzPVsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGF5cyBpbnB1dDpjaGVja2VkJyldLm1hcCh4PT4reC52YWx1ZSk7aWYoIXN0YXJ0fHwhZW5kKXthbGVydCgn2YXZhiDZgdi22YTZgyDYp9iu2KrYsSDYqtin2LHZitiuINin2YTYqNiv2KfZitipINmI2KrYp9ix2YrYriDYp9mE2KfZhtiq2YfYp9ihLicpO3JldHVybn1pZihlbmQ8c3RhcnQpe2FsZXJ0KCfYqtin2LHZitiuINin2YTYp9mG2KrZh9in2KEg2YrYrNioINij2YYg2YrZg9mI2YYg2KjYudivINiq2KfYsdmK2K4g2KfZhNio2K/Yp9mK2KkuJyk7cmV0dXJufWlmKCFkYXlzLmxlbmd0aCl7YWxlcnQoJ9in2K7YqtixINmK2YjZhSDYrdmB2Lgg2YjYp9it2K/Zi9inINi52YTZiSDYp9mE2KPZgtmELicpO3JldHVybn1pZighc2VsLmxlbmd0aCl7YWxlcnQoJ9in2K7YqtixINiz2YjYsdipINij2Ygg2KzYstih2YvYpyDYo9mIINit2LLYqNmL2Kcg2YjYp9it2K/Zi9inINi52YTZiSDYp9mE2KPZgtmELicpO3JldHVybn1jb25zdCB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuVHlwZScpLnZhbHVlO2NvbnN0IGl0ZW1zPXNlbC5tYXAobz0+e2lmKHQ9PT0nc3VyYWgnKXtjb25zdCB6PXN1cmFocy5maW5kKHg9PnguaWQ9PT0rby52YWx1ZSk7cmV0dXJuIHo/ei5uYW1lOm8udGV4dENvbnRlbnQudHJpbSgpfXJldHVybiB0PT09J2p1eic/J9in2YTYrNiy2KEgJythcihvLnZhbHVlKTon2KfZhNit2LLYqCAnK2FyKG8udmFsdWUpfSk7Y29uc3Qgc2NoZWR1bGU9W107bGV0IGQ9bmV3IERhdGUoc3RhcnQrJ1QxMjowMDowMCcpLGxhc3Q9bmV3IERhdGUoZW5kKydUMTI6MDA6MDAnKSxpZHg9MDt3aGlsZShkPD1sYXN0JiZpZHg8aXRlbXMubGVuZ3RoKXtpZihkYXlzLmluY2x1ZGVzKGQuZ2V0RGF5KCkpKXtjb25zdCBpc29EYXRlPWQuZ2V0RnVsbFllYXIoKSsnLScrU3RyaW5nKGQuZ2V0TW9udGgoKSsxKS5wYWRTdGFydCgyLCcwJykrJy0nK1N0cmluZyhkLmdldERhdGUoKSkucGFkU3RhcnQoMiwnMCcpO3NjaGVkdWxlLnB1c2goe2lzb0RhdGUsZGF0ZTphclBsYW5EYXRlKGlzb0RhdGUpLGl0ZW06aXRlbXNbaWR4XSxkb25lOmZhbHNlfSk7aWR4Kyt9ZC5zZXREYXRlKGQuZ2V0RGF0ZSgpKzEpfWlmKGlkeDxpdGVtcy5sZW5ndGgpe2FsZXJ0KCfYp9mE2YHYqtix2Kkg2KfZhNmF2K3Yr9iv2Kkg2YTYpyDYqtmD2YHZiiDZhNil2YbZh9in2KEg2KfZhNmI2LHYry4g2YjYs9mR2Lkg2KrYp9ix2YrYriDYp9mE2KfZhtiq2YfYp9ihINij2Ygg2KfYrtiq2LEg2KPZitin2YXZi9inINij2YPYq9ixLicpO3JldHVybn1zdGF0ZS5wbGFucy51bnNoaWZ0KHtpZDpEYXRlLm5vdygpLGl0ZW1zLHN0YXJ0LGVuZCxkYXlzLHNjaGVkdWxlfSk7c2F2ZSgpO3JlbmRlclBsYW5zKCk7dGFiKCdwbGFucycpfQpmdW5jdGlvbiB0YWIodil7Y29uc3QgbWFwPXtzdXJhaHM6J3N1cmFoVmlldycsanV6OidqdXpWaWV3JyxoaXN0b3J5OidoaXN0b3J5VmlldycscGxhbnM6J3BsYW5zVmlldyd9O2lmKCFtYXBbdl0pdj0nc3VyYWhzJztkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXVyYW4tdGFiW2RhdGEtdmlld10nKS5mb3JFYWNoKHg9PnguY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyx4LmRhdGFzZXQudmlldz09PXYpKTtPYmplY3Qua2V5cyhtYXApLmZvckVhY2goaz0+e2NvbnN0IGVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hcFtrXSk7aWYoZWwpZWwuc3R5bGUuZGlzcGxheT0oaz09PXY/J2Jsb2NrJzonbm9uZScpfSk7aWYocmVhZGVyKXtyZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO3JlYWRlci5zdHlsZS5kaXNwbGF5PSdub25lJ31pZihsaWJyYXJ5KWxpYnJhcnkuc3R5bGUuZGlzcGxheT0nYmxvY2snO2lmKHY9PT0nanV6JylyZW5kZXJKdXooKTtpZih2PT09J2hpc3RvcnknKXJlbmRlckhpc3RvcnkoKTtpZih2PT09J3BsYW5zJylyZW5kZXJQbGFucygpO2lmKHY9PT0nc3VyYWhzJyl7aWYoc2VhcmNoKXNlYXJjaC52YWx1ZT0nJztyZW5kZXIoKX13aW5kb3cuc2Nyb2xsVG8oe3RvcDowLGJlaGF2aW9yOidzbW9vdGgnfSl9ZnVuY3Rpb24gc2V0TGFzdFJlYWRpbmcoaWQscGFnZSl7bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3F1cmFuX2xhc3RfcmVhZGluZycsSlNPTi5zdHJpbmdpZnkoe2lkLHBhZ2U6cGFnZXx8MSxhdDpEYXRlLm5vdygpfSkpO3JlbmRlckxhc3RSZWFkaW5nKCl9CmxldCByZWFkaW5nT2JzZXJ2ZXI9bnVsbDtmdW5jdGlvbiBvYnNlcnZlUmVhZGluZ1BhZ2VzKCl7aWYocmVhZGluZ09ic2VydmVyKXJlYWRpbmdPYnNlcnZlci5kaXNjb25uZWN0KCk7Y29uc3QgYWxsPVsuLi5wYWdlcy5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZScpXTtpZighYWxsLmxlbmd0aClyZXR1cm47cmVhZGluZ09ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57Y29uc3QgdmlzaWJsZT1lbnRyaWVzLmZpbHRlcihlPT5lLmlzSW50ZXJzZWN0aW5nKS5zb3J0KChhLGIpPT5iLmludGVyc2VjdGlvblJhdGlvLWEuaW50ZXJzZWN0aW9uUmF0aW8pWzBdO2lmKHZpc2libGUpe2NvbnN0IHBnPSt2aXNpYmxlLnRhcmdldC5kYXRhc2V0Lm11c2hhZlBhZ2U7Y29uc3QgaWQ9c3VyYWhzLmZpbmQocz0+cy5uYW1lPT09ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWRlclRpdGxlJykudGV4dENvbnRlbnQpPy5pZDtpZihpZClzZXRMYXN0UmVhZGluZyhpZCxwZyl9fSx7dGhyZXNob2xkOlsuMjUsLjUsLjc1XX0pO2FsbC5mb3JFYWNoKHA9PnJlYWRpbmdPYnNlcnZlci5vYnNlcnZlKHApKX0KZnVuY3Rpb24gcmVuZGVyTGFzdFJlYWRpbmcoKXtjb25zdCBib3g9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3RSZWFkaW5nJyk7aWYoIWJveClyZXR1cm47bGV0IHg9bnVsbDt0cnl7eD1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdxdXJhbl9sYXN0X3JlYWRpbmcnKXx8J251bGwnKX1jYXRjaChlKXt9O2lmKCF4KXJldHVybiBib3guc3R5bGUuZGlzcGxheT0nbm9uZSc7Y29uc3Qgcz1zdXJhaHMuZmluZChhPT5hLmlkPT09K3guaWQpO2lmKCFzKXJldHVybjtib3guc3R5bGUuZGlzcGxheT0nZmxleCc7Ym94LnF1ZXJ5U2VsZWN0b3IoJy5sci10ZXh0JykudGV4dENvbnRlbnQ9J9ii2K7YsSDZgtix2KfYodipOiDYs9mI2LHYqSAnK3MubmFtZSsnIOKAlCDYtdmB2K3YqSAnK2FyKHgucGFnZXx8MSl9CmZ1bmN0aW9uIG9wZW5MYXN0UmVhZGluZygpe2xldCB4O3RyeXt4PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3F1cmFuX2xhc3RfcmVhZGluZycpfHwnbnVsbCcpfWNhdGNoKGUpe307aWYoeClvcGVuU3VyYWgoK3guaWQpfQphc3luYyBmdW5jdGlvbiBvcGVuU3VyYWgoaWQpe2NvbnN0IGN1cnJlbnQ9c3VyYWhzLmZpbmQocz0+cy5pZD09PWlkKTtsZXQgbGFzdD1udWxsO3RyeXtsYXN0PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3F1cmFuX2xhc3RfcmVhZGluZycpfHwnbnVsbCcpfWNhdGNoKGUpe307Y29uc3QgcmVzdW1lUGFnZT1sYXN0JiYrbGFzdC5pZD09PWlkPyhsYXN0LnBhZ2V8fDEpOjE7bGlicmFyeS5zdHlsZS5kaXNwbGF5PSdub25lJztyZWFkZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkZXJUaXRsZScpLnRleHRDb250ZW50PWN1cnJlbnQubmFtZTtwYWdlcy5pbm5lckhUTUw9JzxkaXYgY2xhc3M9bG9hZGluZz7YrNin2LHZjSDYqtit2YXZitmEINin2YTYotmK2KfYqi4uLjwvZGl2Pic7dHJ5e2NvbnN0IGo9KGF3YWl0IChhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYWxxdXJhbi5jbG91ZC92MS9zdXJhaC8ke2lkfS9xdXJhbi11dGhtYW5pYCkpLmpzb24oKSkuZGF0YTtjb25zdCBCQVNNQUxBPSfYqNmQ2LPZktmF2ZAg2KfZhNmE2ZHZjtmH2ZAg2KfZhNix2ZHZjtit2ZLZhdmO2bDZhtmQINin2YTYsdmR2Y7YrdmQ2YrZhdmQJzsKY29uc3Qgbm9ybWFsaXplQXJhYmljPXQ9Pih0fHwnJykucmVwbGFjZSgvW9mx2KXYo9iiXS9nLCfYpycpLnJlcGxhY2UoL9mOfNmLfNmPfNmMfNmQfNmNfNmSfNmRfNmAfNmwL2csJycpLnJlcGxhY2UoL1xzKy9nLCcgJykudHJpbSgpOwpjb25zdCBpc0Jhc21hbGFUZXh0PXQ9Pntjb25zdCBuPW5vcm1hbGl6ZUFyYWJpYyh0KTtyZXR1cm4gbi5zdGFydHNXaXRoKCfYqNiz2YUg2KfZhNmE2Ycg2KfZhNix2K3ZhdmGINin2YTYsdit2YrZhScpfHxuLmluY2x1ZGVzKCfYqNiz2YUg2KfZhNmE2Ycg2KfZhNix2K3ZhdmGINin2YTYsdit2YrZhScpfTsKbGV0IGF5YWhzPVsuLi4oai5heWFoc3x8W10pXS5tYXAoYT0+KHsuLi5hLHRleHQ6KGEudGV4dHx8JycpLnRyaW0oKX0pKTsKaWYoaWQ9PT0xKXsKICAvKiDZgdmKINin2YTZgdin2KrYrdipOiDYp9mE2KjYs9mF2YTYqSDYqti52LHYtiDYo9iz2YHZhCDYp9iz2YUg2KfZhNiz2YjYsdip2Iwg2YjYo9mI2YQg2KLZitipINin2YTZhdi52LHZiNi22Kkg2YfZiiDYp9mE2K3ZhdivINmE2YTZhyDYsdioINin2YTYudin2YTZhdmK2YYg2KjYsdmC2YUg2aEgKi8KICBjb25zdCBmYXRpaGE9WwogICAgJ9in2YTZktit2Y7ZhdmS2K/ZjyDZhNmQ2YTZkdmO2YfZkCDYsdmO2KjZkdmQINin2YTZkti52Y7Yp9mE2Y7ZhdmQ2YrZhtmOJywKICAgICfYp9mE2LHZkdmO2K3ZktmF2Y7ZsNmG2ZAg2KfZhNix2ZHZjtit2ZDZitmF2ZAnLAogICAgJ9mF2Y7Yp9mE2ZDZg9mQINmK2Y7ZiNmS2YXZkCDYp9mE2K/ZkdmQ2YrZhtmQJywKICAgICfYpdmQ2YrZkdmO2KfZg9mOINmG2Y7YudmS2KjZj9iv2Y8g2YjZjtil2ZDZitmR2Y7Yp9mD2Y4g2YbZjtiz2ZLYqtmO2LnZkNmK2YbZjycsCiAgICAn2KfZh9mS2K/ZkNmG2Y7YpyDYp9mE2LXZkdmQ2LHZjtin2LfZjiDYp9mE2ZLZhdmP2LPZktiq2Y7ZgtmQ2YrZhdmOJywKICAgICfYtdmQ2LHZjtin2LfZjiDYp9mE2ZHZjtiw2ZDZitmG2Y4g2KPZjtmG2ZLYudmO2YXZktiq2Y4g2LnZjtmE2Y7ZitmS2YfZkNmF2ZInLAogICAgJ9i62Y7ZitmS2LHZkCDYp9mE2ZLZhdmO2LrZkti22Y/ZiNio2ZAg2LnZjtmE2Y7ZitmS2YfZkNmF2ZIg2YjZjtmE2Y7YpyDYp9mE2LbZkdmO2KfZhNmR2ZDZitmG2Y4nCiAgXTsKICBheWFocz1mYXRpaGEubWFwKCh0ZXh0LGkpPT4oey4uLmF5YWhzW01hdGgubWluKGkrMSxheWFocy5sZW5ndGgtMSldfHx7fSx0ZXh0LG51bWJlckluU3VyYWg6aSsxfSkpOwp9ZWxzZXsKICAvKiDYp9mE2KjYs9mF2YTYqSDYqtmP2LnYsdi2INmF2LHYqSDZiNin2K3Yr9ipINiq2K3YqiDYp9iz2YUg2KfZhNiz2YjYsdip2Iwg2YjZhNinINiq2Y/Zg9ix2LEg2K/Yp9iu2YQg2KPZiNmEINii2YrYqSAqLwogIGF5YWhzPWF5YWhzLm1hcCgoYSxpKT0+e2lmKGk9PT0wICYmIGlzQmFzbWFsYVRleHQoYS50ZXh0KSl7Y29uc3Qgd29yZHM9YS50ZXh0LnRyaW0oKS5zcGxpdCgvXHMrLyk7cmV0dXJuIHsuLi5hLHRleHQ6d29yZHMuc2xpY2UoNCkuam9pbignICcpLnRyaW0oKX19cmV0dXJuIGF9KTsKfQpheWFocz1heWFocy5maWx0ZXIoYT0+YS50ZXh0KTtjb25zdCBncm91cHM9W107YXlhaHMuZm9yRWFjaChhPT57bGV0IGc9Z3JvdXBzLmZpbmQoeD0+eC5wYWdlPT09YS5wYWdlKTtpZighZyl7Zz17cGFnZTphLnBhZ2UsaXRlbXM6W119O2dyb3Vwcy5wdXNoKGcpfWcuaXRlbXMucHVzaChhKX0pO2NvbnN0IHNob3dCYXNtYWxhPWlkIT09OTtwYWdlcy5pbm5lckhUTUw9Z3JvdXBzLm1hcCgoZyxpKT0+YDxhcnRpY2xlIGNsYXNzPSJwYWdlIiBkYXRhLW11c2hhZi1wYWdlPSIke2cucGFnZX0iPjxkaXYgY2xhc3M9InBhZ2UtdG9wIj48c3Bhbj7YtdmB2K3YqSAke2FyKGcucGFnZSl9PC9zcGFuPjxzcGFuPtin2YTYrNiy2KEgJHthcihnLml0ZW1zWzBdPy5qdXp8fCcnKX08L3NwYW4+PC9kaXY+JHtpPycnOmA8ZGl2IGNsYXNzPSJzdXJhaC1oZWFkaW5nIj48aDI+JHtjdXJyZW50Lm5hbWV9PC9oMj4ke3Nob3dCYXNtYWxhPyc8ZGl2IGNsYXNzPSJiYXNtYWxhIj7YqNmQ2LPZktmF2ZAg2KfZhNmE2ZHZjtmH2ZAg2KfZhNix2ZHZjtit2ZLZhdmO2bDZhtmQINin2YTYsdmR2Y7YrdmQ2YrZhdmQPC9kaXY+JzonJ308L2Rpdj5gfTxkaXYgY2xhc3M9ImF5YWgtdGV4dCI+JHtnLml0ZW1zLm1hcChhPT5gPHNwYW4gY2xhc3M9ImF5YWgiPiR7YS50ZXh0LnRyaW0oKX0gPHNwYW4gY2xhc3M9ImF5YWgtbnVtIG9ybmF0ZS1udW1iZXIiPjxzcGFuIGNsYXNzPSJheWFoLWRpZ2l0Ij4ke2FyKGEubnVtYmVySW5TdXJhaCl9PC9zcGFuPjwvc3Bhbj48L3NwYW4+YCkuam9pbignICcpfTwvZGl2PjwvYXJ0aWNsZT4ke2k8Z3JvdXBzLmxlbmd0aC0xPyc8ZGl2IGNsYXNzPSJwYWdlLXNlcCI+2548L2Rpdj4nOicnfWApLmpvaW4oJycpO3NldEZvbnQoZm9udCk7c2V0TGFzdFJlYWRpbmcoaWQscmVzdW1lUGFnZSk7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57Y29uc3QgdGFyZ2V0PVsuLi5wYWdlcy5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZScpXS5maW5kKHA9PitwLmRhdGFzZXQubXVzaGFmUGFnZT09PStyZXN1bWVQYWdlKTtpZih0YXJnZXQpdGFyZ2V0LnNjcm9sbEludG9WaWV3KHtibG9jazonc3RhcnQnLGJlaGF2aW9yOidhdXRvJ30pO29ic2VydmVSZWFkaW5nUGFnZXMoKX0pO31jYXRjaChlKXtwYWdlcy5pbm5lckhUTUw9JzxkaXYgY2xhc3M9ZW1wdHk+2KrYudiw2LEg2KrYrdmF2YrZhCDYp9mE2LPZiNix2KkuINiq2K3ZgtmCINmF2YYg2KfZhNin2KrYtdin2YQuPC9kaXY+J319CmZ1bmN0aW9uIHNldEZvbnQodil7Zm9udD1NYXRoLm1heCgyNCxNYXRoLm1pbig0NCx2KSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3F1cmFuX3JlYWRlcl9mb250Jyxmb250KTtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXlhaC10ZXh0JykuZm9yRWFjaCh4PT54LnN0eWxlLmZvbnRTaXplPWZvbnQrJ3B4Jyl9bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZT0+e2NvbnN0IG89ZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtb3Blbl0nKTtpZihvKXtvcGVuU3VyYWgoK28uZGF0YXNldC5vcGVuKTtyZXR1cm59Y29uc3QgYT1lLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1zYXZlXScpLHI9ZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmV2aWV3XScpO2lmKGEpe3N0YXRlLnNhdmVkW2EuZGF0YXNldC5zYXZlXT0hc3RhdGUuc2F2ZWRbYS5kYXRhc2V0LnNhdmVdO3NhdmUoKTtyZW5kZXIoKX1pZihyKXtzdGF0ZS5yZXZpZXdbci5kYXRhc2V0LnJldmlld109IXN0YXRlLnJldmlld1tyLmRhdGFzZXQucmV2aWV3XTtzYXZlKCk7cmVuZGVyKCl9fSk7c2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JyxyZW5kZXIpO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZpZXddJykuZm9yRWFjaCh4PT54Lm9uY2xpY2s9KCk9PnRhYih4LmRhdGFzZXQudmlldykpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqdXpMaXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGU9Pntjb25zdCBiPWUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWp1ei1kb25lXScpO2lmKCFiKXJldHVybjtjb25zdCBpZD0rYi5kYXRhc2V0Lmp1ekRvbmU7c3RhdGUuanV6RG9uZVtpZF09IXN0YXRlLmp1ekRvbmVbaWRdO3NhdmUoKTtyZW5kZXJKdXooKX0pO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGU9Pntjb25zdCBvPWUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW9wZW5dJyk7aWYobylvcGVuU3VyYWgoK28uZGF0YXNldC5vcGVuKX0pO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuVHlwZScpLm9uY2hhbmdlPWl0ZW1PcHRpb25zO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVQbGFuJykub25jbGljaz1jcmVhdGVQbGFuO2Z1bmN0aW9uIGhhbmRsZVBsYW5DbGljayhlKXtjb25zdCBjPWUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBsYW4taWRdJyk7aWYoYyl7Y29uc3QgcD1zdGF0ZS5wbGFucy5maW5kKHg9PnguaWQ9PWMuZGF0YXNldC5wbGFuSWQpO2lmKHAmJnAuc2NoZWR1bGVbYy5kYXRhc2V0LnBsYW5JbmRleF0pe3Auc2NoZWR1bGVbYy5kYXRhc2V0LnBsYW5JbmRleF0uZG9uZT0hcC5zY2hlZHVsZVtjLmRhdGFzZXQucGxhbkluZGV4XS5kb25lO3NhdmUoKTtyZW5kZXJQbGFucygpfXJldHVybn1jb25zdCBiPWUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWRlbGV0ZS1wbGFuXScpO2lmKGIpe3N0YXRlLnBsYW5zPXN0YXRlLnBsYW5zLmZpbHRlcih4PT54LmlkIT1iLmRhdGFzZXQuZGVsZXRlUGxhbik7c2F2ZSgpO3JlbmRlclBsYW5zKCl9fWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuTGlzdCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsaGFuZGxlUGxhbkNsaWNrKTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhbnNPbmx5Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxoYW5kbGVQbGFuQ2xpY2spO2Z1bmN0aW9uIGNsb3NlUmVhZGVyKCl7aWYocmVhZGluZ09ic2VydmVyKXtyZWFkaW5nT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO3JlYWRpbmdPYnNlcnZlcj1udWxsfXJlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7cmVhZGVyLnN0eWxlLmRpc3BsYXk9J25vbmUnO2xpYnJhcnkuc3R5bGUuZGlzcGxheT0nYmxvY2snO2xpYnJhcnkuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOidzdGFydCcsYmVoYXZpb3I6J3Ntb290aCd9KTt0YWIoJ3N1cmFocycpO3JlbmRlcigpO3JlbmRlckxhc3RSZWFkaW5nKCl9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO2Uuc3RvcFByb3BhZ2F0aW9uKCk7Y2xvc2VSZWFkZXIoKX0pO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250RG93bicpLm9uY2xpY2s9KCk9PnNldEZvbnQoZm9udC0yKTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udFVwJykub25jbGljaz0oKT0+c2V0Rm9udChmb250KzIpO2NvbnN0IGxvY2FsUGxhbkRhdGU9ZD0+e2NvbnN0IHg9bmV3IERhdGUoZCk7cmV0dXJuIGAke3guZ2V0RnVsbFllYXIoKX0tJHtTdHJpbmcoeC5nZXRNb250aCgpKzEpLnBhZFN0YXJ0KDIsJzAnKX0tJHtTdHJpbmcoeC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsJzAnKX1gfTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhblN0YXJ0JykudmFsdWU9bG9jYWxQbGFuRGF0ZShuZXcgRGF0ZSgpKTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhbkVuZCcpLnZhbHVlPWxvY2FsUGxhbkRhdGUobmV3IERhdGUoRGF0ZS5ub3coKSs2Kjg2NDAwMDAwKSk7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW5TdGFydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsZnVuY3Rpb24oKXtjb25zdCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFuRW5kJyk7aWYoZSYmKCFlLnZhbHVlfHxuZXcgRGF0ZShlLnZhbHVlKydUMTI6MDA6MDAnKTxuZXcgRGF0ZSh0aGlzLnZhbHVlKydUMTI6MDA6MDAnKSkpZS52YWx1ZT10aGlzLnZhbHVlfSk7aXRlbU9wdGlvbnMoKTtyZW5kZXJEYXlzKCk7c2VhcmNoLnZhbHVlPScnO3JlbmRlcigpO3JlbmRlclBsYW5zKCk7cmVuZGVyTGFzdFJlYWRpbmcoKTtpZih3aW5kb3cucXVyYW5Hb1RhYil3aW5kb3cucXVyYW5Hb1RhYignc3VyYWhzJyk7PC9zY3JpcHQ+CjxzdHlsZSBpZD0icXVyYW4tZmluYWwtcG9saXNoIj4KLmF5YWgtbnVtLm9ybmF0ZS1udW1iZXJ7d2lkdGg6MzhweDtoZWlnaHQ6MzhweDttYXJnaW46MCA2cHg7Ym9yZGVyOjAhaW1wb3J0YW50O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7Y29sb3I6IzlhNmQyZiFpbXBvcnRhbnQ7Zm9udDo3MDAgMjBweCBBbWlyaSxzZXJpZiFpbXBvcnRhbnQ7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246bWlkZGxlfS5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmJlZm9yZXtjb250ZW50OifbnSc7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MDtkaXNwbGF5OmdyaWQ7cGxhY2UtaXRlbXM6Y2VudGVyO2NvbG9yOiNiODg4M2Y7Zm9udDo3MDAgMzhweCBBbWlyaSxzZXJpZjt6LWluZGV4OjB9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXI6YWZ0ZXJ7Y29udGVudDonJ30uYXlhaC1udW0ub3JuYXRlLW51bWJlcntpc29sYXRpb246aXNvbGF0ZX0uYXlhaC1udW0ub3JuYXRlLW51bWJlcntjb2xvcjojODE1YjI5IWltcG9ydGFudH0uYXlhaC1udW0ub3JuYXRlLW51bWJlcjo6Zmlyc3QtbGV0dGVye3Bvc2l0aW9uOnJlbGF0aXZlfS5heWFoLW51bS5vcm5hdGUtbnVtYmVye3BhZGRpbmctdG9wOjFweH0uYXlhaC1udW0ub3JuYXRlLW51bWJlcntsaW5lLWhlaWdodDozOHB4fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmJlZm9yZXtwb2ludGVyLWV2ZW50czpub25lfS5qdXotY2FyZHtwYWRkaW5nOjEycHggMTNweH0uanV6LWNhcmQgLmp1ei1zdXJhaHN7Zm9udC1zaXplOjExcHh9Lmp1ei1jYXJkIC5qdXotZG9uZXt3aWR0aDoxMDAlO2JvcmRlcjoxcHggc29saWQgI2NmZTZkYjtib3JkZXItcmFkaXVzOjEwcHg7YmFja2dyb3VuZDojZjVmYmY4O2NvbG9yOiM1YjdiNzA7cGFkZGluZzo4cHggN3B4O2ZvbnQ6NzAwIDEwcHggVGFqYXdhbH0uanV6LWNhcmQgLmp1ei1kb25lLmFjdGl2ZXtiYWNrZ3JvdW5kOiNkZmY1ZTk7Y29sb3I6IzBmODA2NTtib3JkZXItY29sb3I6IzgzYzlhN30uanV6LWNhcmQgLmp1ei1kb25lLmFjdGl2ZTo6YmVmb3Jle2NvbnRlbnQ6J+KYhSAnO2NvbG9yOiNjOTkyM2R9QG1lZGlhKG1heC13aWR0aDo2NTBweCl7LnN1cmFoLWljb25ze2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7Z2FwOjdweH0uc3VyYWgtbWluaXttaW4taGVpZ2h0OjYycHh9LnN1cmFoLW1pbmkgc3Ryb25ne2ZvbnQtc2l6ZToxMnB4fS5taW5pLWFjdGlvbnMgYnV0dG9ue2ZvbnQtc2l6ZTo5cHg7cGFkZGluZzo0cHggNnB4fS5heWFoLW51bS5vcm5hdGUtbnVtYmVye3dpZHRoOjM0cHg7aGVpZ2h0OjM0cHg7bWFyZ2luOjAgNHB4fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmJlZm9yZXtmb250LXNpemU6MzRweH0uYXlhaC1udW0ub3JuYXRlLW51bWJlcntmb250LXNpemU6MThweDtsaW5lLWhlaWdodDozNHB4fX0KPC9zdHlsZT4KCjxzdHlsZSBpZD0icXVyYW4tbGF5b3V0LWZpeCI+Ci8qINmF2LXYrdmBOiDYudmE2KfZhdin2Kog2KfZhNii2YrYp9iqINmF2LLYrtix2YHYqdiMINmF2Lkg2KjZgtin2KEg2LHZgtmFINin2YTYotmK2Kkg2YjYp9i22K3Zi9inINiv2KfYrtmEINin2YTYudmE2KfZhdipICovCi5heWFoLW51bS5vcm5hdGUtbnVtYmVye2Rpc3BsYXk6aW5saW5lLWdyaWQhaW1wb3J0YW50O3BsYWNlLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnQ7d2lkdGg6MzlweCFpbXBvcnRhbnQ7aGVpZ2h0OjM5cHghaW1wb3J0YW50O21hcmdpbjowIDVweCFpbXBvcnRhbnQ7Ym9yZGVyOjAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6NTAlIWltcG9ydGFudDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O3Bvc2l0aW9uOnJlbGF0aXZlIWltcG9ydGFudDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGUhaW1wb3J0YW50O2NvbG9yOiM4ZjY4MmYhaW1wb3J0YW50O2ZvbnQ6NzAwIDE4cHggQW1pcmksc2VyaWYhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjM5cHghaW1wb3J0YW50O2lzb2xhdGlvbjppc29sYXRlfS5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmJlZm9yZXtjb250ZW50OifbnSchaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtpbnNldDowIWltcG9ydGFudDtkaXNwbGF5OmdyaWQhaW1wb3J0YW50O3BsYWNlLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnQ7Y29sb3I6I2MwOGMzZSFpbXBvcnRhbnQ7Zm9udDo0MDAgMzlweCBBbWlyaSxzZXJpZiFpbXBvcnRhbnQ7ei1pbmRleDotMSFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZSFpbXBvcnRhbnR9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXI6YWZ0ZXJ7Y29udGVudDpub25lIWltcG9ydGFudH0KLyog2KjYt9in2YLYp9iqINin2YTYs9mI2LE6INmF2LPYqti32YrZhNin2Kog2LXYutmK2LHYqSDZiNmE2YrYs9iqINmF2LHYqNi52KfYqiAqLwouc3VyYWgtaWNvbnN7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDIwMHB4LDFmcikpIWltcG9ydGFudH0uc3VyYWgtbWluaXttaW4taGVpZ2h0OjY2cHghaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MTRweCFpbXBvcnRhbnQ7cGFkZGluZzo4cHggMTBweCFpbXBvcnRhbnR9LnN1cmFoLW1pbmkgLnN1cmFoLWJhZGdle3dpZHRoOjI5cHghaW1wb3J0YW50O2hlaWdodDoyOXB4IWltcG9ydGFudDtmbGV4LWJhc2lzOjI5cHghaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6OXB4IWltcG9ydGFudH0ubWluaS1hY3Rpb25zIGJ1dHRvbntib3JkZXItcmFkaXVzOjhweCFpbXBvcnRhbnQ7cGFkZGluZzo0cHggN3B4IWltcG9ydGFudH0KLyog2KfZhNij2KzYstin2KE6INin2LPZhSDYp9mE2KzYstihICsg2KPYs9mF2KfYoSDYp9mE2LPZiNixICsg2LLYsSDYp9mE2KXZhtmH2KfYoSDZgdmC2LcgKi8KLmp1ei1jYXJke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjdweH0uanV6LWNhcmQgc3Ryb25ne2ZvbnQtc2l6ZToxM3B4fS5qdXotY2FyZCAuanV6LXN1cmFoc3ttYXJnaW46MCFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MS43NX0uanV6LWNhcmQgLmp1ei1kb25le21hcmdpbi10b3A6YXV0b30KQG1lZGlhKG1heC13aWR0aDo2NTBweCl7LnN1cmFoLWljb25ze2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIhaW1wb3J0YW50fS5zdXJhaC1taW5pe21pbi1oZWlnaHQ6NjRweCFpbXBvcnRhbnR9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXJ7d2lkdGg6MzRweCFpbXBvcnRhbnQ7aGVpZ2h0OjM0cHghaW1wb3J0YW50O21hcmdpbjowIDNweCFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHghaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjM0cHghaW1wb3J0YW50fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmJlZm9yZXtmb250LXNpemU6MzRweCFpbXBvcnRhbnR9LmF5YWgtdGV4dHtsaW5lLWhlaWdodDoyLjM1IWltcG9ydGFudH19Cjwvc3R5bGU+CjxzdHlsZSBpZD0ibXVzaGFmLWF5YWgtbWFya2VyLWZpbmFsIj4KLyog2LnZhNin2YXYqSDYsdmC2YUg2KfZhNii2YrYqTog2KfZhNix2YLZhSDZgdmKINmC2YTYqCDYp9mE2LnZhNin2YXYqSDYp9mE2LLYrtix2YHZitipICovCi5heWFoLW51bS5vcm5hdGUtbnVtYmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZSFpbXBvcnRhbnQ7d2lkdGg6NDRweCFpbXBvcnRhbnQ7aGVpZ2h0OjQ0cHghaW1wb3J0YW50O21hcmdpbjowIDZweCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDtib3JkZXI6MCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowIWltcG9ydGFudDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IWltcG9ydGFudDtjb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Zm9udC1zaXplOjAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjEhaW1wb3J0YW50O3ZlcnRpY2FsLWFsaWduOm1pZGRsZSFpbXBvcnRhbnQ7b3ZlcmZsb3c6dmlzaWJsZSFpbXBvcnRhbnQ7aXNvbGF0aW9uOmlzb2xhdGUhaW1wb3J0YW50O30KLmF5YWgtbnVtLm9ybmF0ZS1udW1iZXI6OmJlZm9yZXtjb250ZW50OifbnSchaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtpbnNldDowIWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50O2FsaWduLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnQ7anVzdGlmeS1jb250ZW50OmNlbnRlciFpbXBvcnRhbnQ7Y29sb3I6I2E5N2IzNSFpbXBvcnRhbnQ7Zm9udC1mYW1pbHk6QW1pcmksIlRpbWVzIE5ldyBSb21hbiIsc2VyaWYhaW1wb3J0YW50O2ZvbnQtc2l6ZTo0NHB4IWltcG9ydGFudDtmb250LXdlaWdodDo0MDAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjEhaW1wb3J0YW50O3otaW5kZXg6MSFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZSFpbXBvcnRhbnQ7fQouYXlhaC1udW0ub3JuYXRlLW51bWJlciAuYXlhaC1kaWdpdHtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7aW5zZXQ6MCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudDthbGlnbi1pdGVtczpjZW50ZXIhaW1wb3J0YW50O2p1c3RpZnktY29udGVudDpjZW50ZXIhaW1wb3J0YW50O2NvbG9yOiM2ZjUxMjghaW1wb3J0YW50O2ZvbnQtZmFtaWx5OkFtaXJpLCJUaW1lcyBOZXcgUm9tYW4iLHNlcmlmIWltcG9ydGFudDtmb250LXNpemU6MTdweCFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudDtsaW5lLWhlaWdodDoxIWltcG9ydGFudDt6LWluZGV4OjIhaW1wb3J0YW50O3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xcHgpIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lIWltcG9ydGFudDt9CkBtZWRpYShtYXgtd2lkdGg6NjUwcHgpey5heWFoLW51bS5vcm5hdGUtbnVtYmVye3dpZHRoOjM2cHghaW1wb3J0YW50O2hlaWdodDozNnB4IWltcG9ydGFudDttYXJnaW46MCA0cHghaW1wb3J0YW50fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyOjpiZWZvcmV7Zm9udC1zaXplOjM2cHghaW1wb3J0YW50fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyIC5heWFoLWRpZ2l0e2ZvbnQtc2l6ZToxNHB4IWltcG9ydGFudDt9fQo8L3N0eWxlPgoKPHN0eWxlIGlkPSJ2OS1xdXJhbi1uYXZpZ2F0aW9uLXN0eWxlIj4KLnJlYWRlci1oZWFke3Bvc2l0aW9uOnN0aWNreSFpbXBvcnRhbnQ7dG9wOjAhaW1wb3J0YW50O3otaW5kZXg6NjAhaW1wb3J0YW50O3BhZGRpbmc6MTBweCAwIWltcG9ydGFudDttYXJnaW46MCAwIDEycHghaW1wb3J0YW50O2JhY2tncm91bmQ6cmdiYSgyNDcsMjUxLDI0OSwuOTQpIWltcG9ydGFudDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZDllOGRmIWltcG9ydGFudDtiYWNrZHJvcC1maWx0ZXI6Ymx1cigxNHB4KSFpbXBvcnRhbnQ7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigxNHB4KSFpbXBvcnRhbnR9Ci5yZWFkZXItaGVhZCAuYmFja3tib3gtc2hhZG93OjAgNnB4IDE2cHggcmdiYSgzOCw4Nyw2OCwuMTIpIWltcG9ydGFudH0KLnF1cmFuLXRhYnt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uIWltcG9ydGFudDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fQpAbWVkaWEobWF4LXdpZHRoOjY1MHB4KXsucmVhZGVyLWhlYWR7cGFkZGluZzo4cHggMCFpbXBvcnRhbnR9LnJlYWRlci1oZWFkIC5iYWNre3BhZGRpbmc6OHB4IDExcHghaW1wb3J0YW50fX0KPC9zdHlsZT4KPHNjcmlwdCBpZD0icXVyYW4tZmluYWwtY29udHJvbGxlci12OCI+KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO2NvbnN0IG1hcD17c3VyYWhzOidzdXJhaFZpZXcnLGp1ejonanV6VmlldycsaGlzdG9yeTonaGlzdG9yeVZpZXcnLHBsYW5zOidwbGFuc1ZpZXcnfTtmdW5jdGlvbiBnbyh2KXtpZighbWFwW3ZdKXY9J3N1cmFocyc7Y29uc3Qgcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhZGVyJyksbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlicmFyeScpO2lmKHIpe3IuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO3Iuc3R5bGUuZGlzcGxheT0nbm9uZSd9aWYobClsLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJztPYmplY3Qua2V5cyhtYXApLmZvckVhY2goaz0+e2NvbnN0IGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWFwW2tdKTtpZihlKXtlLmhpZGRlbj1rIT09djtlLnN0eWxlLmRpc3BsYXk9az09PXY/J2Jsb2NrJzonbm9uZSd9fSk7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1cmFuLXRhYltkYXRhLXZpZXddJykuZm9yRWFjaChiPT5iLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsYi5kYXRhc2V0LnZpZXc9PT12KSk7aWYodj09PSdzdXJhaHMnJiZ0eXBlb2YgcmVuZGVyPT09J2Z1bmN0aW9uJylyZW5kZXIoKTtpZih2PT09J2p1eicmJnR5cGVvZiByZW5kZXJKdXo9PT0nZnVuY3Rpb24nKXJlbmRlckp1eigpO2lmKHY9PT0naGlzdG9yeScmJnR5cGVvZiByZW5kZXJIaXN0b3J5PT09J2Z1bmN0aW9uJylyZW5kZXJIaXN0b3J5KCk7aWYodj09PSdwbGFucycmJnR5cGVvZiByZW5kZXJQbGFucz09PSdmdW5jdGlvbicpcmVuZGVyUGxhbnMoKX13aW5kb3cucXVyYW5Hb1RhYlY4PWdvO1snbmF2U3VyYWhzJywnbmF2SnV6JywnbmF2SGlzdG9yeScsJ25hdlBsYW5zJ10uZm9yRWFjaChpZD0+e2NvbnN0IGI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO2lmKCFiKXJldHVybjtjb25zdCBjPWIuY2xvbmVOb2RlKHRydWUpO2IucmVwbGFjZVdpdGgoYyk7Yy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO2Uuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7Z28oYy5kYXRhc2V0LnZpZXcpfSx0cnVlKX0pO2dvKCdzdXJhaHMnKTtjb25zdCBkYXlzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlzJyk7aWYoZGF5cyYmdHlwZW9mIHJlbmRlckRheXM9PT0nZnVuY3Rpb24nKXJlbmRlckRheXMoKTtjb25zdCBlbmQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW5FbmQnKTtjb25zdCBzdGFydD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhblN0YXJ0Jyk7aWYoc3RhcnQmJmVuZClzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLGZ1bmN0aW9uKCl7aWYoIWVuZC52YWx1ZXx8ZW5kLnZhbHVlPHN0YXJ0LnZhbHVlKWVuZC52YWx1ZT1zdGFydC52YWx1ZX0pO2NvbnN0IGJ0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUGxhbicpO2lmKGJ0bil7Y29uc3QgYz1idG4uY2xvbmVOb2RlKHRydWUpO2J0bi5yZXBsYWNlV2l0aChjKTtjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtjcmVhdGVQbGFuKCl9LHRydWUpfWNvbnN0IGhvc3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW5zVmlldycpO2lmKGhvc3QpaG9zdC5zdHlsZS5kaXNwbGF5PSdub25lJzt9KSgpOzwvc2NyaXB0Pgo8c3R5bGUgaWQ9InJlYWRlci1maXhlZC10b3AtZmluYWwiPgoucmVhZGVyLWhlYWR7cG9zaXRpb246c3RpY2t5IWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7ei1pbmRleDo5OTk5IWltcG9ydGFudDttaW4taGVpZ2h0OjU4cHghaW1wb3J0YW50O3BhZGRpbmc6OXB4IDEwcHghaW1wb3J0YW50O21hcmdpbjowIDAgMTJweCFpbXBvcnRhbnQ7YmFja2dyb3VuZDpyZ2JhKDI0NywyNTEsMjQ5LC45NikhaW1wb3J0YW50O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkOWU4ZGYhaW1wb3J0YW50O2JveC1zaGFkb3c6MCA1cHggMTZweCByZ2JhKDM4LDg3LDY4LC4xMCkhaW1wb3J0YW50O2JhY2tkcm9wLWZpbHRlcjpibHVyKDEycHgpIWltcG9ydGFudDstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDEycHgpIWltcG9ydGFudH0KLnJlYWRlci1oZWFkIC5iYWNre3Bvc2l0aW9uOnJlbGF0aXZlIWltcG9ydGFudDt6LWluZGV4OjEwMDAwIWltcG9ydGFudDt3aGl0ZS1zcGFjZTpub3dyYXAhaW1wb3J0YW50O2JveC1zaGFkb3c6MCAzcHggOXB4IHJnYmEoMzgsODcsNjgsLjEwKSFpbXBvcnRhbnR9Ci5yZWFkZXItdGl0bGV7Zm9udC1zaXplOjE4cHghaW1wb3J0YW50fS5yZWFkZXItbWV0YXtmb250LXNpemU6MTBweCFpbXBvcnRhbnR9CkBtZWRpYShtYXgtd2lkdGg6NjUwcHgpey5yZWFkZXItaGVhZHt0b3A6MCFpbXBvcnRhbnQ7cGFkZGluZzo3cHggOHB4IWltcG9ydGFudDttaW4taGVpZ2h0OjU0cHghaW1wb3J0YW50fS5yZWFkZXItaGVhZCAuYmFja3twYWRkaW5nOjhweCAxMHB4IWltcG9ydGFudDtmb250LXNpemU6MTFweCFpbXBvcnRhbnR9LnJlYWRlci10aXRsZXtmb250LXNpemU6MTZweCFpbXBvcnRhbnR9fQo8L3N0eWxlPgo8c2NyaXB0IGlkPSJyZWFkZXItZml4ZWQtdG9wLWZpbmFsLWpzIj4KKGZ1bmN0aW9uKCl7CiAgZnVuY3Rpb24gbG9ja1JlYWRlckhlYWQoKXsKICAgIHZhciBoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFkZXIgLnJlYWRlci1oZWFkJyk7CiAgICBpZihoKXtoLnN0eWxlLnBvc2l0aW9uPSdzdGlja3knO2guc3R5bGUudG9wPScwcHgnO2guc3R5bGUuekluZGV4PSc5OTk5J30KICB9CiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsbG9ja1JlYWRlckhlYWQpOwogIGxvY2tSZWFkZXJIZWFkKCk7Cn0pKCk7Cjwvc2NyaXB0Pgo8L2JvZHk+PC9odG1sPgo8c3R5bGU+Lyog2KrYudiv2YrZhNin2Kog2KfZhNmF2LXYrdmBINin2YTZhtmH2KfYptmK2Kkg2LnZhNmJINin2YTZhdmE2YEg2KfZhNmF2LHZgdmCICovLmJhc21hbGF7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MTBweCBhdXRvIDI1cHg7Zm9udC1zaXplOmNsYW1wKDMwcHgsNHZ3LDQzcHgpO2ZvbnQtZmFtaWx5OkFtaXJpLHNlcmlmO2NvbG9yOiMxNzRiM2J9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXJ7ZGlzcGxheTppbmxpbmUtZ3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7d2lkdGg6NDRweDtoZWlnaHQ6NDRweDttYXJnaW46MCA5cHg7Ym9yZGVyOjJweCBzb2xpZCAjYzk5YjRkO2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOiM5ODZkMmU7YmFja2dyb3VuZDojZmZmYWYwO2ZvbnQ6NzAwIDI0cHggQW1pcmk7dmVydGljYWwtYWxpZ246bWlkZGxlO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgM3B4ICNmZmZhZjAsMCAwIDAgMXB4ICNlYWQzOWJ9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXI6YmVmb3JlLC5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2NvbG9yOiNjOTliNGQ7Zm9udDoxNHB4IEFtaXJpO2xpbmUtaGVpZ2h0OjF9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXI6YmVmb3Jle2NvbnRlbnQ6J9ueJztyaWdodDotMTZweH0uYXlhaC1udW0ub3JuYXRlLW51bWJlcjphZnRlcntjb250ZW50Oifbnic7bGVmdDotMTZweH0uanV6LWNhcmQgLmp1ei1zdXJhaHN7ZGlzcGxheTpibG9jaztjb2xvcjojNWY4MTc0O2xpbmUtaGVpZ2h0OjEuODttYXJnaW46N3B4IDAgOXB4fS5qdXotY2FyZCBidXR0b257Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czo4cHg7YmFja2dyb3VuZDojZTVmNWVjO2NvbG9yOiMwZjgwNjU7Zm9udDo3MDAgMTBweCBUYWphd2FsO3BhZGRpbmc6NnB4IDhweDtjdXJzb3I6cG9pbnRlcn1AbWVkaWEobWF4LXdpZHRoOjY1MHB4KXsuYXlhaC1udW0ub3JuYXRlLW51bWJlcnt3aWR0aDozNnB4O2hlaWdodDozNnB4O2ZvbnQtc2l6ZToxOXB4O21hcmdpbjowIDZweH0uYXlhaC1udW0ub3JuYXRlLW51bWJlcjpiZWZvcmUsLmF5YWgtbnVtLm9ybmF0ZS1udW1iZXI6YWZ0ZXJ7Zm9udC1zaXplOjExcHh9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXI6YmVmb3Jle3JpZ2h0Oi0xMnB4fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmFmdGVye2xlZnQ6LTEycHh9fTwvc3R5bGU+Cgo8c3R5bGUgaWQ9InZlcmlmaWVkLXVzZXItZml4ZXMtMiI+Ci8qINij2LHZgtin2YUg2KfZhNii2YrYp9iqOiDYp9mE2LHZgtmFINiv2KfYrtmEINin2YTYudmE2KfZhdipINmG2YHYs9mH2KcgKi8KLmF5YWgtbnVtLm9ybmF0ZS1udW1iZXJ7ZGlzcGxheTppbmxpbmUtZ3JpZCFpbXBvcnRhbnQ7cGxhY2UtaXRlbXM6Y2VudGVyIWltcG9ydGFudDt3aWR0aDo0MnB4IWltcG9ydGFudDtoZWlnaHQ6NDJweCFpbXBvcnRhbnQ7bWFyZ2luOjAgNnB4IWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O2JvcmRlcjowIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjAhaW1wb3J0YW50O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50O3Bvc2l0aW9uOnJlbGF0aXZlIWltcG9ydGFudDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGUhaW1wb3J0YW50O2lzb2xhdGlvbjppc29sYXRlIWltcG9ydGFudDtsaW5lLWhlaWdodDoxIWltcG9ydGFudDtjb2xvcjojN2Q1YjJhIWltcG9ydGFudDtmb250LWZhbWlseTpBbWlyaSxzZXJpZiFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudDtmb250LXNpemU6MTlweCFpbXBvcnRhbnQ7b3ZlcmZsb3c6dmlzaWJsZSFpbXBvcnRhbnR9Ci5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmJlZm9yZXtjb250ZW50OifbnSchaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtpbnNldDowIWltcG9ydGFudDtkaXNwbGF5OmdyaWQhaW1wb3J0YW50O3BsYWNlLWl0ZW1zOmNlbnRlciFpbXBvcnRhbnQ7Y29sb3I6I2I4ODkzZiFpbXBvcnRhbnQ7Zm9udC1mYW1pbHk6QW1pcmksc2VyaWYhaW1wb3J0YW50O2ZvbnQtc2l6ZTo0MnB4IWltcG9ydGFudDtmb250LXdlaWdodDo0MDAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjEhaW1wb3J0YW50O3otaW5kZXg6MSFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZSFpbXBvcnRhbnR9Ci5heWFoLW51bS5vcm5hdGUtbnVtYmVyIC5heWFoLWRpZ2l0e3Bvc2l0aW9uOnJlbGF0aXZlIWltcG9ydGFudDt6LWluZGV4OjIhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O2NvbG9yOiM3ZDViMmEhaW1wb3J0YW50O2ZvbnQtZmFtaWx5OkFtaXJpLHNlcmlmIWltcG9ydGFudDtmb250LXNpemU6MThweCFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudDtsaW5lLWhlaWdodDo0MnB4IWltcG9ydGFudDt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7bWFyZ2luOjAhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnR9CiNsaWJyYXJ5e2Rpc3BsYXk6YmxvY2t9Ci5yZWFkZXJ7ZGlzcGxheTpub25lfQoucmVhZGVyLm9wZW57ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9CkBtZWRpYShtYXgtd2lkdGg6NjUwcHgpey5heWFoLW51bS5vcm5hdGUtbnVtYmVye3dpZHRoOjM2cHghaW1wb3J0YW50O2hlaWdodDozNnB4IWltcG9ydGFudDttYXJnaW46MCA0cHghaW1wb3J0YW50fS5heWFoLW51bS5vcm5hdGUtbnVtYmVyOmJlZm9yZXtmb250LXNpemU6MzZweCFpbXBvcnRhbnR9LmF5YWgtbnVtLm9ybmF0ZS1udW1iZXIgLmF5YWgtZGlnaXR7Zm9udC1zaXplOjE1cHghaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjM2cHghaW1wb3J0YW50fX0KPC9zdHlsZT4KCgo8c3R5bGUgaWQ9InYxMS1xdXJhbi1uYXYtaGFyZC1maXgiPgoucXVyYW4tdGFicyAucXVyYW4tdGFie3BvaW50ZXItZXZlbnRzOmF1dG8haW1wb3J0YW50O2N1cnNvcjpwb2ludGVyIWltcG9ydGFudDt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZSFpbXBvcnRhbnQ7ei1pbmRleDoyMCFpbXBvcnRhbnR9CiNzdXJhaFZpZXdbaGlkZGVuXSwjanV6Vmlld1toaWRkZW5dLCNoaXN0b3J5Vmlld1toaWRkZW5dLCNwbGFuc1ZpZXdbaGlkZGVuXXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fQo8L3N0eWxlPgo=";
  let quranUrl=null;
  function decodeQuran(){
    if(quranUrl) return quranUrl;
    const bin=atob(quranBase64);
    const bytes=new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i);
    const html=new TextDecoder('utf-8').decode(bytes);
    quranUrl=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'}));
    return quranUrl;
  }
  function openIntegratedQuran(){
    if(!frame) return;
    if(!frame.src) frame.src=decodeQuran();
    if(typeof window.showPage==='function') window.showPage('quran');
    else { document.querySelectorAll('.page').forEach(p=>{p.classList.remove('active');p.style.display='none'}); if(quranPage){quranPage.classList.add('active');quranPage.style.display='block'} }
    setTimeout(()=>{try{frame.contentWindow.postMessage({type:'quran-host-open'},'*')}catch(e){}},250);
  }
  function backToProgram(){
    if(typeof window.showPage==='function') window.showPage('prayer');
    else if(quranPage){quranPage.classList.remove('active');quranPage.style.display='none'}
  }
  if(quranBtn){
    quranBtn.onclick=function(e){e.preventDefault();openIntegratedQuran();};
  }
  if(back) back.addEventListener('click',backToProgram);
  window.addEventListener('beforeunload',()=>{if(quranUrl) URL.revokeObjectURL(quranUrl)});
  window.openIntegratedQuran=openIntegratedQuran;
})();


/* ===== Original inline script 16 ===== */

(function(){
  const $=id=>document.getElementById(id);
  const escText=s=>String(s??'');
  const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const moodDefs={
    Happy:{emoji:'😊',label:'Happy',bear:'happy'},
    Calm:{emoji:'😌',label:'Calm',bear:'calm'},
    Excited:{emoji:'🤩',label:'Excited',bear:'excited'},
    Sad:{emoji:'😔',label:'Sad',bear:'sad'},
    Angry:{emoji:'😠',label:'Angry',bear:'angry'},
    Tired:{emoji:'😴',label:'Tired',bear:'sad'}
  };
  let editingTaskId=null, editingGoalId=null;
  function moodStore(){try{return JSON.parse(localStorage.getItem('habit_moods_v6')||'{}')||{}}catch(e){return {}}}
  function saveMoodStore(v){localStorage.setItem('habit_moods_v6',JSON.stringify(v))}
  function currentSelectedDate(){return typeof selectedDate!=='undefined'?selectedDate:new Date()}

  /* Calendar + mood redesigned as one visual module. */
  function renderV5Calendar(){
    const home=document.getElementById('home'); if(!home)return;
    const calendar=home.querySelector('.calendar.card'); const mood=home.querySelector('.mood.card');
    if(!calendar||!mood)return;
    const d=currentSelectedDate(); const today=new Date(); today.setHours(12,0,0,0);
    const start=new Date(d); start.setDate(d.getDate()-3); start.setHours(12,0,0,0);
    const ms=new Intl.DateTimeFormat('en-US',{month:'long',year:'numeric'}).format(d);
    const full=new Intl.DateTimeFormat('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'}).format(d);
    const days=[];
    for(let i=0;i<7;i++){const x=new Date(start);x.setDate(start.getDate()+i);days.push(x)}
    calendar.querySelector('.ar-month').textContent='';
    calendar.querySelector('.en-month').textContent=ms;
    const row=calendar.querySelector('#dateRow'); row.innerHTML=days.map(x=>{
      const k=iso(x),m=moodStore()[k],def=moodDefs[m];
      const isSel=k===iso(d),isToday=k===iso(today);
      return `<button type="button" class="date-btn ${isSel?'active':''} ${isToday?'today':''}" data-v5-date="${k}"><span class="date-pill">${x.getDate()}</span><span class="date-day">${new Intl.DateTimeFormat('en-US',{weekday:'short'}).format(x).toUpperCase()}</span>${def?`<span class="mini-mood">${def.emoji}</span>`:''}</button>`;
    }).join('');
    row.querySelectorAll('[data-v5-date]').forEach(b=>b.onclick=()=>{const parts=b.dataset.v5Date.split('-').map(Number);selectedDate=new Date(parts[0],parts[1]-1,parts[2],12);renderAll()});
    let chosen=moodStore()[iso(d)]||''; const def=moodDefs[chosen]||moodDefs.Calm;
    mood.querySelector('.mood-head span').textContent=full;
    const bear=mood.querySelector('#bear'); bear.className='bear '+def.bear;
    let cap=mood.querySelector('.mood-calendar-caption');
    if(!cap){cap=document.createElement('div');cap.className='mood-calendar-caption';mood.appendChild(cap)}
    cap.textContent=chosen?`${def.emoji} ${def.label} · ${full}`:`Choose the mood you feel · ${full}`;
  }
  function ensureMoodTrigger(){
    const mood=document.querySelector('#home .mood.card'); if(!mood)return;
    let btn=mood.querySelector('.mood-choice-trigger');
    if(!btn){
      btn=document.createElement('button');btn.type='button';btn.className='mood-choice-trigger';btn.innerHTML='<span class="mood-trigger-icon">😊</span><small>Choose the mood I feel</small>';
      const layout=mood.querySelector('.mood-layout'); layout?.prepend(btn); btn.onclick=openMoodPicker;
    }
    const cur=moodStore()[iso(currentSelectedDate())]; const def=moodDefs[cur]||moodDefs.Calm;
    btn.querySelector('.mood-trigger-icon').textContent=def.emoji;
  }
  function ensureMoodPicker(){
    if($('moodPickerOverlay'))return;
    const o=document.createElement('div');o.id='moodPickerOverlay';o.innerHTML=`<section class="mood-picker-modal"><h2>Choose the mood I feel</h2><p>Your bear will react and your mood will be saved for this day.</p><div id="moodPickerGrid"></div><button type="button" id="moodPickerClose">Close</button></section>`;document.body.appendChild(o);
    o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('show')});$('moodPickerClose').onclick=()=>o.classList.remove('show');
    const grid=$('moodPickerGrid');Object.entries(moodDefs).forEach(([key,v])=>{const b=document.createElement('button');b.type='button';b.dataset.mood=key;b.innerHTML=`<span class="big-mood">${v.emoji}</span><small>${v.label}</small>`;b.onclick=()=>{const all=moodStore();all[iso(currentSelectedDate())]=key;saveMoodStore(all);o.classList.remove('show');renderV5Calendar();ensureMoodTrigger();toast('Mood saved ✓')};grid.appendChild(b)});
  }
  function openMoodPicker(){ensureMoodPicker();const cur=moodStore()[iso(currentSelectedDate())]||'';document.querySelectorAll('#moodPickerGrid button').forEach(b=>b.classList.toggle('active',b.dataset.mood===cur));$('moodPickerOverlay').classList.add('show')}

  /* Main tasks: icon badge, notes, edit, delete. */
  function renderV5Tasks(){
    const list=$('taskList'); if(!list||typeof taskData!=='function')return;
    const d=currentSelectedDate(),tasks=taskData(d),done=tasks.filter(x=>x.done).length,pct=tasks.length?Math.round(done/tasks.length*100):0;
    $('summaryProgress')?.style.setProperty('--p',pct+'%');if($('summaryPercent'))$('summaryPercent').textContent=pct+'%';if($('summaryMessage'))$('summaryMessage').textContent=pct===100?'رائع! أنجزت الكل 🎉':pct?`أنجزت ${done}/${tasks.length} مهام`:'ابدأ أول مهمة 🌱';
    list.innerHTML='';tasks.forEach(t=>{
      const li=document.createElement('li');li.className='task'+(t.done?' done':'');
      const isGoal=String(t.id||'').startsWith('goal-');
      li.innerHTML=`<button type="button" class="check ${t.done?'checked':''}">${t.done?'✓':''}</button><span class="task-icon">${escText(t.icon||'🎯')}</span><div class="task-main"><div class="task-name"></div>${t.note?`<div class="task-note"></div>`:''}</div><span class="task-actions"><button type="button" class="task-edit">✎</button>${t.type==='مخصص'||isGoal?'<button type="button" class="task-delete">🗑</button>':''}</span>`;
      li.querySelector('.task-name').textContent=t.name||t.text||'مهمة';if(t.note)li.querySelector('.task-note').textContent=t.note;
      li.querySelector('.check').onclick=()=>{const a=taskData(d),x=a.find(y=>y.id===t.id);if(!x)return;x.done=!x.done;saveTaskData(d,a);if(isGoal&&typeof data!=='undefined'){const g=data.daily.find(g=>'goal-'+g.id===x.id);if(g){g.done=x.done;save();}}renderV5Tasks()};
      li.querySelector('.task-edit').onclick=()=>openTaskEditor(t,d);
      const del=li.querySelector('.task-delete');if(del)del.onclick=()=>{saveTaskData(d,taskData(d).filter(x=>x.id!==t.id));if(isGoal&&typeof data!=='undefined'){data.daily=data.daily.filter(g=>'goal-'+g.id!==t.id);save()}renderV5Tasks();try{renderDaily()}catch(e){}};
      list.appendChild(li);
    });
  }
  function resetTaskModal(){editingTaskId=null;$('taskOverlay')?.classList.remove('editing');$('taskOverlay')?.querySelector('h2')&&( $('taskOverlay').querySelector('h2').textContent='إضافة مهمة جديدة');$('taskOverlay')?.querySelector('.task-edit-title')?.remove();if($('taskNameInput'))$('taskNameInput').value='';if($('taskNoteInput'))$('taskNoteInput').value='';selectedTaskIcon='⭐';if($('selectedTaskIcon'))$('selectedTaskIcon').textContent='⭐';$('taskEmojiPanel')?.classList.remove('show')}
  function openTaskEditor(t,d){
    editingTaskId=t.id;$('taskOverlay')?.classList.add('show','editing');let modal=$('taskOverlay')?.querySelector('.modal');if(modal&&!modal.querySelector('.task-edit-title')){const p=document.createElement('p');p.className='task-edit-title';p.textContent='تعديل المهمة والملاحظات';modal.insertBefore(p,modal.querySelector('label'))}if($('taskOverlay')?.querySelector('h2'))$('taskOverlay').querySelector('h2').textContent='تعديل المهمة';$('taskNameInput').value=t.name||t.text||'';if($('taskNoteInput'))$('taskNoteInput').value=t.note||'';selectedTaskIcon=t.icon||'⭐';$('selectedTaskIcon').textContent=selectedTaskIcon;$('taskEmojiPanel')?.classList.remove('show')
  }
  function ensureTaskNoteField(){const modal=$('taskOverlay')?.querySelector('.modal');if(!modal||$('taskNoteInput'))return;const ta=document.createElement('textarea');ta.id='taskNoteInput';ta.className='task-note-field';ta.placeholder='ملاحظة خاصة بهذه المهمة (اختياري)...';modal.querySelector('.selected-icon')?.after(ta)}
  function saveV5Task(){
    const n=$('taskNameInput')?.value.trim();if(!n){toast('اكتب اسم المهمة أولًا');return}const note=$('taskNoteInput')?.value.trim()||'';const d=currentSelectedDate();const arr=taskData(d);
    if(editingTaskId){const t=arr.find(x=>x.id===editingTaskId);if(t){t.name=n;t.icon=selectedTaskIcon;t.note=note;saveTaskData(d,arr);$('taskOverlay')?.classList.remove('show','editing');renderV5Tasks();toast('تم تعديل المهمة ✓')}return}
    arr.push({id:'custom_'+Date.now(),name:n,icon:selectedTaskIcon,type:'مخصص',done:false,note});saveTaskData(d,arr);$('taskOverlay')?.classList.remove('show','editing');resetTaskModal();renderV5Tasks();toast('تمت إضافة المهمة ✓');
  }

  /* Goals: icon + note + edit while preserving goal/main-task linking. */
  function renderV5Daily(){
    const date=$('dailyDate')?.value||new Date().toISOString().slice(0,10),a=(typeof data!=='undefined'?data.daily.filter(x=>x.date===date):[]),list=$('dailyList');if(!list)return;
    list.innerHTML=a.length?a.map(x=>`<article class="goal ${x.done?'done':''}"><input class="goal-check" type="checkbox" data-v5-goal-check="${x.id}" ${x.done?'checked':''}><span class="goal-icon">${escText(x.icon||'🎯')}</span><div><div class="goal-title"></div>${x.note?'<div class="goal-note"></div>':''}<small class="goal-meta">${x.link?'مرتبط بالمهام الرئيسية':'هدف خاص'}</small></div><span class="goal-actions"><button type="button" class="goal-edit" data-v5-goal-edit="${x.id}">✎</button><button type="button" class="goal-delete" data-v5-goal-delete="${x.id}">🗑</button></span></article>`).join(''):'<div class="empty">لا توجد أهداف لهذا اليوم. ابدأ بهدف صغير يصنع فرقًا.</div>';
    a.forEach(x=>{const el=list.querySelector(`[data-v5-goal-check="${x.id}"]`)?.closest('.goal');if(!el)return;el.querySelector('.goal-title').textContent=x.title;if(x.note)el.querySelector('.goal-note').textContent=x.note});
    list.querySelectorAll('[data-v5-goal-check]').forEach(b=>b.onchange=()=>{const x=data.daily.find(x=>x.id===b.dataset.v5GoalCheck);if(x){x.done=b.checked;save();renderV5Daily();updateProgress();if(x.link)syncGoalTasksForDate(x.date,true)}});
    list.querySelectorAll('[data-v5-goal-edit]').forEach(b=>b.onclick=()=>{const x=data.daily.find(x=>x.id===b.dataset.v5GoalEdit);if(!x)return;editingGoalId=x.id;$('dailyTitle').value=x.title;$('dailyIcon').value=x.icon||'🎯';const trig=document.querySelector('#dailyForm .icon-trigger');if(trig)trig.textContent=x.icon||'🎯';$('dailyLinkCheck').checked=!!x.link;const note=$('dailyGoalNoteInput');if(note)note.value=x.note||'';const add=$('dailyForm').querySelector('.compact-add');if(add)add.textContent='حفظ التعديل';$('dailyTitle').focus()});
    list.querySelectorAll('[data-v5-goal-delete]').forEach(b=>b.onclick=()=>{const x=data.daily.find(x=>x.id===b.dataset.v5GoalDelete);data.daily=data.daily.filter(x=>x.id!==b.dataset.v5GoalDelete);save();renderV5Daily();updateProgress();if(x?.link)syncGoalTasksForDate(x.date)});
    updateProgress();
  }
  function handleGoalSubmit(e){
    e.preventDefault();const title=$('dailyTitle')?.value.trim();if(!title)return;const date=$('dailyDate')?.value||new Date().toISOString().slice(0,10),icon=$('dailyIcon')?.value||'🎯',link=!!$('dailyLinkCheck')?.checked,note=$('dailyGoalNoteInput')?.value.trim()||'';
    if(editingGoalId){const x=data.daily.find(g=>g.id===editingGoalId);if(x){x.title=title;x.icon=icon;x.link=link;x.note=note;save();syncGoalTasksForDate(x.date);toast('تم تعديل الهدف ✓')}}else{data.daily.push({id:uid(),title,icon,date,link,done:false,note});save();syncGoalTasksForDate(date);toast('تمت إضافة الهدف ✓')}
    editingGoalId=null;$('dailyTitle').value='';$('dailyIcon').value='🎯';$('dailyLinkCheck').checked=false;if($('dailyForm .icon-trigger'))$('dailyForm .icon-trigger').textContent='🎯';if($('dailyGoalNoteInput'))$('dailyGoalNoteInput').value='';const add=$('dailyForm').querySelector('.compact-add');if(add)add.textContent='+ إضافة هدف';renderV5Daily();
  }

  function init(){
    const home=document.getElementById('home');if(!home)return;
    ensureTaskNoteField();ensureMoodPicker();ensureMoodTrigger();renderV5Calendar();renderV5Tasks();renderV5Daily();
    const tf=$('taskOverlay');if(tf){$('openTaskModal')?.addEventListener('click',()=>{resetTaskModal();tf.classList.add('show')},true);$('saveTask')?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();saveV5Task()},true);$('cancelTask')?.addEventListener('click',()=>{resetTaskModal()},true)}
    const df=$('dailyForm');if(df){df.onsubmit=handleGoalSubmit}
    /* Keep the redesigned home module synced when other home actions rerender. */
    const oldRenderAll=window.renderAll;
    if(typeof oldRenderAll==='function'&&!window.__v5RenderWrapped){window.__v5RenderWrapped=true;window.renderAll=function(){oldRenderAll();setTimeout(()=>{ensureMoodTrigger();renderV5Calendar();renderV5Tasks();renderV5Daily()},0)}}
    setTimeout(()=>{ensureMoodTrigger();renderV5Calendar();renderV5Tasks();renderV5Daily()},80);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  window.v5HomeRefresh=()=>{renderV5Calendar();ensureMoodTrigger();renderV5Tasks();renderV5Daily()};
})();


/* ===== Original inline script 17 ===== */

(function(){
'use strict';
const $=id=>document.getElementById(id),GOALS_KEY='myGoals_v3',IDEAS_KEY='goal_daily_ideas_v1';let editingId=null;
const dayKey=d=>{const x=new Date(d);return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`};const read=(key,fallback)=>{try{const v=JSON.parse(localStorage.getItem(key));return v&&typeof v==='object'?v:fallback}catch(_){return fallback}};const write=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value))}catch(_){}};const esc=v=>{const e=document.createElement('div');e.textContent=v||'';return e.innerHTML};
function currentDate(){return dayKey(typeof selectedDate!=='undefined'?selectedDate:new Date())}function taskList(){return taskData(selectedDate)}
function enhancedRenderTasks(){const s=taskStats(selectedDate),list=$('taskList');if(!list)return;list.innerHTML='';$('summaryProgress').style.setProperty('--p',s.p+'%');$('summaryPercent').textContent=s.p+'%';$('summaryMessage').textContent=s.p===100?'رائع! أنجزت الكل 🎉':s.p?`أنجزت ${s.done}/${s.total} مهام`:'ابدأ أول مهمة 🌱';s.tasks.forEach(task=>{const li=document.createElement('li');li.className='task'+(task.done?' done':'');li.innerHTML=`<button class="check ${task.done?'checked':''}" type="button">✓</button><span class="task-icon">${esc(task.icon||'⭐')}</span><span class="task-main"><span class="task-name">${esc(task.name)}</span>${task.note?`<span class="task-note-preview">📝 ${esc(task.note)}</span>`:''}</span><span class="task-actions"><button class="task-action note" type="button" title="ملاحظة">📝</button><button class="task-action edit" type="button" title="تعديل">✏️</button><button class="task-action delete" type="button" title="حذف">🗑️</button></span>`;li.querySelector('.check').onclick=()=>{const all=taskList(),item=all.find(x=>x.id===task.id);if(!item)return;item.done=!item.done;saveTaskData(selectedDate,all);syncGoalDone();enhancedRenderTasks()};li.querySelector('.note').onclick=()=>openEditor(task,'note');li.querySelector('.edit').onclick=()=>openEditor(task,'edit');li.querySelector('.delete').onclick=()=>{if(confirm(`حذف مهمة «${task.name}»؟`)){if(String(task.id||'').startsWith('goal-')&&typeof window.markDeletedLinkedTask==='function')window.markDeletedLinkedTask(task.id,currentDate());saveTaskData(selectedDate,taskList().filter(t=>t.id!==task.id));enhancedRenderTasks()}};list.appendChild(li)})}
function openEditor(task,mode){editingId=task.id;$('taskEditTitle').textContent=mode==='note'?'ملاحظة المهمة':'تعديل المهمة';$('taskEditHint').textContent=mode==='note'?'اكتب ملاحظة خاصة بهذه المهمة.':'يمكنك تعديل الاسم وإضافة ملاحظة.';$('taskEditName').value=task.name||'';$('taskEditName').disabled=mode==='note';$('taskEditNote').value=task.note||'';$('taskEditOverlay').classList.add('show');setTimeout(()=>$(mode==='note'?'taskEditNote':'taskEditName').focus(),0)}function closeEditor(){$('taskEditOverlay').classList.remove('show');editingId=null}
function syncGoalsToHome(date){if(typeof taskData!=='function'||typeof saveTaskData!=='function')return;const goals=read(GOALS_KEY,{daily:[]}),linked=(goals.daily||[]).filter(g=>g.date===date&&g.link&&!(typeof window.isDeletedLinkedTask==='function'&&window.isDeletedLinkedTask('goal-'+g.id,date))),d=new Date(date+'T12:00:00'),tasks=taskData(d);const validIds=new Set(linked.map(g=>'goal-'+g.id));for(let i=tasks.length-1;i>=0;i--){const id=String(tasks[i].id||'');if(id.startsWith('goal-')&&!validIds.has(id))tasks.splice(i,1)}linked.forEach(g=>{const id='goal-'+g.id;let task=tasks.find(t=>String(t.id)===id);if(!task)tasks.push({id,name:g.title,icon:g.icon||'🎯',type:'مخصص',done:!!g.done,note:g.note||''});else{task.name=g.title;task.icon=g.icon||'🎯';task.done=!!g.done;task.note=g.note||''}});saveTaskData(d,tasks);if(currentDate()===date)enhancedRenderTasks()}
function syncGoalDone(){const date=currentDate(),goals=read(GOALS_KEY,{daily:[]}),tasks=taskList();let changed=false;(goals.daily||[]).forEach(g=>{if(g.date!==date||!g.link)return;const task=tasks.find(t=>String(t.id)==='goal-'+g.id);if(task&&g.done!==!!task.done){g.done=!!task.done;changed=true}});if(changed)write(GOALS_KEY,goals)}
function ensureIdeas(){const mount=$('dailyIdeasMount');if(!mount)return;let box=$('dailyIdeasBox');if(!box){box=document.createElement('section');box.id='dailyIdeasBox';box.className='period-ideas-box';box.dataset.type='daily';box.innerHTML='<h3>💡 مساحة أفكاري</h3><p>أفكارك وملاحظاتك الخاصة بهذا اليوم فقط.</p><textarea id="dailyIdeasText" placeholder="اكتب أفكارك هنا..."></textarea><div class="period-ideas-actions"><div class="period-emoji-wrap"><button type="button" class="period-emoji-btn" aria-label="إضافة إيموجي" title="إضافة إيموجي">😊</button><div class="period-emoji-panel" role="dialog"><div class="period-emoji-tabs"></div><div class="period-emoji-grid"></div></div></div><span class="period-ideas-status daily-ideas-status" id="dailyIdeasStatus"></span><button type="button" class="period-ideas-save" id="dailyIdeasSave">حفظ الأفكار</button></div>';mount.appendChild(box);const saveIdeas=()=>{const db=read(IDEAS_KEY,{}),key=$('dailyDate')?.value||currentDate(),value=$('dailyIdeasText').value.trim();if(value)db[key]=$('dailyIdeasText').value;else delete db[key];write(IDEAS_KEY,db)};$('dailyIdeasText').addEventListener('input',saveIdeas);$('dailyIdeasSave').onclick=()=>{saveIdeas();$('dailyIdeasStatus').textContent='تم الحفظ ✓';setTimeout(()=>{$('dailyIdeasStatus').textContent=''},900)}}else if(!box.querySelector('.period-emoji-wrap')){const actions=box.querySelector('.period-ideas-actions');actions?.insertAdjacentHTML('afterbegin','<div class="period-emoji-wrap"><button type="button" class="period-emoji-btn" aria-label="إضافة إيموجي" title="إضافة إيموجي">😊</button><div class="period-emoji-panel" role="dialog"><div class="period-emoji-tabs"></div><div class="period-emoji-grid"></div></div></div>')}if(typeof window.bindPeriodIdeasEmoji==='function')window.bindPeriodIdeasEmoji(box,$('dailyIdeasText'))}
function loadIdeas(){ensureIdeas();const textarea=$('dailyIdeasText'),key=$('dailyDate')?.value||currentDate();if(textarea&&document.activeElement!==textarea)textarea.value=read(IDEAS_KEY,{})[key]||''}
function init(){window.renderTasks=enhancedRenderTasks;$('cancelTaskEdit').onclick=closeEditor;$('taskEditOverlay').onclick=e=>{if(e.target===$('taskEditOverlay'))closeEditor()};$('saveTaskEdit').onclick=()=>{if(!editingId)return;const all=taskList(),task=all.find(t=>t.id===editingId);if(!task)return closeEditor();const name=$('taskEditName').value.trim();if(!$('taskEditName').disabled&&!name){toast('اكتب اسم المهمة أولًا');return}if(!$('taskEditName').disabled)task.name=name;task.note=$('taskEditNote').value.trim();saveTaskData(selectedDate,all);closeEditor();enhancedRenderTasks();toast('تم حفظ تعديل المهمة ✓')};ensureIdeas();loadIdeas();syncGoalsToHome($('dailyDate')?.value||currentDate());$('dailyDate')?.addEventListener('change',()=>setTimeout(()=>{loadIdeas();syncGoalsToHome($('dailyDate').value)},0));$('todayBtn')?.addEventListener('click',()=>setTimeout(()=>{loadIdeas();syncGoalsToHome($('dailyDate')?.value||currentDate())},0));document.addEventListener('click',e=>{if(e.target.closest('[data-calendar-date]'))setTimeout(()=>{loadIdeas();syncGoalsToHome($('dailyDate')?.value||currentDate())},0)});$('dailyForm')?.addEventListener('submit',()=>setTimeout(()=>syncGoalsToHome($('dailyDate')?.value||currentDate()),0),true);enhancedRenderTasks()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();


/* ===== Original inline script 18 ===== */

(function(){
  'use strict';
  const q=id=>document.getElementById(id);
  const DARK_KEY='global-dark-mode-v1';
  function isDark(){return localStorage.getItem(DARK_KEY)==='1';}
  function applyGlobalTheme(on){
    const value=!!on;
    document.documentElement.classList.toggle('global-dark',value);
    document.body.classList.toggle('global-dark',value);
    document.body.classList.toggle('home-night',value);
    const home=q('homeThemeToggle'); if(home){home.classList.toggle('active',value);home.textContent=value?'☀':'☾';}
    const protect=q('protectRoot'); if(protect)protect.setAttribute('data-theme',value?'dark':'light');
    const old=q('themeBtn'); if(old)old.textContent=value?'☀️':'🌙';
  }
  function setGlobalTheme(){const on=!isDark();localStorage.setItem(DARK_KEY,on?'1':'0');applyGlobalTheme(on);}
  window.__applyGlobalTheme=applyGlobalTheme;
  window.toggleTheme=setGlobalTheme;
  applyGlobalTheme(isDark());
  q('homeThemeToggle')?.addEventListener('click',setGlobalTheme);

  // Rename the bottom navigation entry and make its icon a timer.
  const nav=document.querySelector('.main-bottom-nav button[data-page="focusFlow"]');
  if(nav){const spans=nav.querySelectorAll('span');if(spans[0])spans[0].textContent='⏱️';if(spans[1])spans[1].textContent='المهام';}
  const focusTitle=document.querySelector('#focusFlowPage .page-head h1'); if(focusTitle)focusTitle.textContent='المهام والمؤقت';

  // Reliable home task tabs, including the history tab.
  const tasksTab=q('tasksTab'), historyTab=q('historyTab'), tasksPanel=q('tasksPanel'), historyPanel=q('historyPanel');
  function showHomeTasks(){tasksTab?.classList.add('active');historyTab?.classList.remove('active');tasksPanel?.classList.remove('hidden');historyPanel?.classList.add('hidden');}
  function showHomeHistory(){tasksTab?.classList.remove('active');historyTab?.classList.add('active');tasksPanel?.classList.add('hidden');historyPanel?.classList.remove('hidden');if(typeof window.renderHistory==='function')window.renderHistory();else if(typeof historyHTML==='function')historyHTML(q('historyList'));}
  tasksTab?.addEventListener('click',showHomeTasks,true); historyTab?.addEventListener('click',showHomeHistory,true);

  // Reliable collapse/open behavior for the task history inside the Tasks page.
  const histToggle=q('taskHistToggle'), histWrap=q('taskHistWrap');
  histToggle?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();histWrap?.classList.toggle('open');histToggle.classList.toggle('open');},true);
})();


/* ===== Original inline script 19 ===== */

(function(){
  'use strict';
  const q=id=>document.getElementById(id), KEY='global-dark-mode-v1';
  function apply(on){
    const value=!!on;
    localStorage.setItem(KEY,value?'1':'0');
    document.documentElement.classList.toggle('global-dark',value);
    document.body.classList.toggle('global-dark',value);
    document.body.classList.toggle('home-night',value);
    const h=q('homeThemeToggle'); if(h){h.classList.toggle('active',value);h.textContent=value?'☀':'☾';}
    const t=q('themeBtn'); if(t)t.textContent=value?'☀️':'🌙';
    const r=q('protectRoot'); if(r)r.setAttribute('data-theme',value?'dark':'light');
  }
  function toggle(){apply(localStorage.getItem(KEY)!=='1');}
  window.__forceGlobalThemeToggle=toggle;
  // Direct onclick assignment works even if another overlay or legacy listener exists.
  const h=q('homeThemeToggle');
  if(h){h.onclick=toggle;h.setAttribute('type','button');h.style.pointerEvents='auto';}
  const t=q('themeBtn'); if(t)t.onclick=toggle;
  apply(localStorage.getItem(KEY)==='1');
})();


/* ===== Original inline script 20 ===== */

(function(){
  const b=document.getElementById('homeThemeToggle');
  if(!b)return;
  document.addEventListener('click',function(e){
    if(e.target===b || e.target.closest?.('#homeThemeToggle')){
      e.preventDefault();
      e.stopImmediatePropagation();
      window.__forceGlobalThemeToggle?.();
    }
  },true);
})();


/* ===== Original inline script 21 ===== */

(function(){
 'use strict';
 const LANG_KEY='app-language-v1', sheet=document.getElementById('languageSheet'), btn=document.getElementById('settingsMenuBtn');
 const dict={
  ar:{settings:'الإعدادات واللغة',home:'الرئيسية',prayer:'الصلوات',goals:'الأهداف',protect:'Protect',tasks:'المهام',money:'مصروفاتي',addTask:'إضافة مهمة',todayTasks:'مهام اليوم',history:'سجل الإنجاز',notes:'ملاحظات اليوم',save:'حفظ الملاحظة',weekly:'Weekly',monthly:'Monthly',mood:'كيف تشعر اليوم؟',theme:'النظام الليلي'},
  en:{settings:'Settings & Language',home:'Home',prayer:'Prayers',goals:'Goals',protect:'Protect',tasks:'Tasks',money:'Expenses',addTask:'Add task',todayTasks:'Today tasks',history:'Achievement log',notes:'Today notes',save:'Save note',weekly:'Weekly',monthly:'Monthly',mood:'How are you feeling?',theme:'Dark mode'},
  fr:{settings:'Réglages et langue',home:'Accueil',prayer:'Prières',goals:'Objectifs',protect:'Protect',tasks:'Tâches',money:'Dépenses',addTask:'Ajouter une tâche',todayTasks:'Tâches du jour',history:'Journal des réussites',notes:'Notes du jour',save:'Enregistrer',weekly:'Hebdomadaire',monthly:'Mensuel',mood:'Comment vous sentez-vous ?',theme:'Mode sombre'}
 };
 const exact={
  'الرئيسية':'home','الصلوات':'prayer','الأهداف':'goals','مصروفاتي':'money','الدراسة':'tasks','مهام اليوم':'todayTasks','سجل الإنجاز':'history','ملاحظات اليوم':'notes','حفظ الملاحظة':'save','Weekly':'weekly','Monthly':'monthly','How are you feeling?':'mood','الإعدادات':'settings','الإعدادات واللغة':'settings','إضافة مهمة':'addTask'
 };
 function current(){return localStorage.getItem(LANG_KEY)||'ar'}
 function translateText(lang){
   const d=dict[lang]||dict.ar;
   document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.dataset.language=lang;
   document.title=lang==='ar'?'عاداتي اليومية':lang==='en'?'My Daily Habits':'Mes habitudes quotidiennes';
   document.querySelectorAll('[data-language]').forEach(x=>x.classList.toggle('active',x.dataset.language===lang));
   const navMap={home:d.home,prayer:d.prayer,goals:d.goals,protect:d.protect,focusFlow:d.tasks,money:d.money};
   document.querySelectorAll('.main-bottom-nav button').forEach(b=>{const id=b.dataset.page;if(id&&navMap[id]){const sp=b.querySelectorAll('span');if(sp[1])sp[1].textContent=navMap[id]}});
   const set=(sel,text)=>document.querySelectorAll(sel).forEach(e=>{if(e)e.textContent=text});
   set('#languageTitle',d.settings);set('#homeThemeToggle',document.body.classList.contains('global-dark')?'☀':'☾');
   set('#tasksTab',d.todayTasks);set('#historyTab',d.history);set('#saveNote',d.save);set('#languageClose','×');
   const add=document.querySelector('#tasksPanel .add-task');if(add){add.dataset.langLabel=d.addTask;add.setAttribute('aria-label',d.addTask)}
   document.querySelectorAll('#tasksPanel .add-task').forEach(e=>{e.style.setProperty('--add-label',JSON.stringify(d.addTask))});
   document.querySelectorAll('.period[data-view="week"]').forEach(e=>e.textContent=d.weekly);document.querySelectorAll('.period[data-view="month"]').forEach(e=>e.textContent=d.monthly);
   const mood=document.querySelector('.mood-head h2');if(mood)mood.textContent=d.mood;
   const note=document.querySelector('#noteInput');if(note)note.placeholder=lang==='ar'?'اكتب ملاحظاتك عن يومك هنا...':lang==='en'?'Write your notes about today...':'Écrivez vos notes sur votre journée...';
   // Translate common exact labels without disturbing user-entered values.
   const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
   while(n=walker.nextNode()){const raw=n.nodeValue.trim();let key=exact[raw];if(!key){for(const source of Object.keys(dict)){for(const k of Object.keys(dict[source]))if(dict[source][k]===raw){key=k;break}if(key)break}}if(key&&d[key])n.nodeValue=n.nodeValue.replace(raw,d[key]);}
 }
 function open(){sheet.classList.add('open')};function close(){sheet.classList.remove('open')}
 btn?.addEventListener('click',open);document.getElementById('languageClose')?.addEventListener('click',close);sheet?.addEventListener('click',e=>{if(e.target===sheet)close()});
 document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem(LANG_KEY,b.dataset.language);translateText(b.dataset.language);close()}));
 window.__applyLanguage=translateText;if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>translateText(current()),{once:true});else translateText(current());
})();


/* ===== Original inline script 22 ===== */

(function(){
 'use strict';
 const translations={
  'سجل الإنجاز اليومي':['Daily Achievement Log','Journal des réussites'],'المهام والمؤقت':['Tasks & Timer','Tâches et minuteur'],'مهام ومذاكرة':['Tasks & Study','Tâches et études'],'حدّد موادك الدراسية':['Choose your subjects','Choisissez vos matières'],'ملاحظات المواد':['Subject notes','Notes de matière'],'خطة المذاكرة — Focus Flow':['Study plan — Focus Flow','Plan d’étude — Focus Flow'],'مشاركة ومعاينة الصفحة':['Share and preview page','Partager et prévisualiser la page'],'إغلاق المعاينة':['Close preview','Fermer l’aperçu'],'تأكيد التأجيل':['Confirm reschedule','Confirmer le report'],'ملاحظة الحصة':['Session note','Note de session'],
  'الإحصائيات':['Statistics','Statistiques'],'ملخص إنجازك الحالي.':['Your current progress summary.','Résumé de votre progression.'],
  'إدارة بيانات البرنامج الأساسية.':['Manage the basic program data.','Gérer les données de base.'],'تعديل الاسم والصورة':['Edit name and photo','Modifier le nom et la photo'],
  'التسبيح والصلوات':['Dhikr & Prayers','Dhikr et prières'],'أسماء الله الحسنى':['Names of Allah','Noms d’Allah'],'احفظ حديثًا':['Learn a Hadith','Apprendre un hadith'],
  'حديثان جديدان يوميًا':['Two new hadiths daily','Deux hadiths par jour'],'تعلّم سيرتك':['Learn the Seerah','Découvrir la Sira'],'سيرة جديدة يوميًا':['A new Seerah story daily','Une nouvelle histoire par jour'],
  'ملخص عداد التسبيح':['Dhikr Counter Summary','Résumé du compteur de dhikr'],'نسبة إجمالي الأذكار لكل يوم — آخر 7 أيام':['Total dhikr per day — last 7 days','Dhikr total par jour — 7 derniers jours'],'إجمالي الأسبوع':['Weekly total','Total hebdomadaire'],
  'الأذكار والأدعية':['Adhkar & Duas','Adhkar et invocations'],'مواقيت الصلاة':['Prayer Times','Horaires de prière'],'اتجاه القبلة':['Qibla Direction','Direction de la Qibla'],'سجل الصلوات':['Prayer Log','Journal des prières'],'تحديث المواقيت':['Update prayer times','Actualiser les horaires'],
  'المصحف — السور والأجزاء والسجل وخططي':['Quran — Surahs, Juz, history and plans','Coran — sourates, juz, historique et plans'],'رحلة حفظ الأسماء الحسنى':['Names memorization journey','Parcours de mémorisation des noms'],'رحلة حفظ الأحاديث':['Hadith memorization journey','Parcours de mémorisation des hadiths'],
  'أذكارك اليومية في مكان واحد':['Your daily adhkar in one place','Vos adhkar quotidiens au même endroit'],'أذكار الصباح':['Morning adhkar','Adhkar du matin'],'أذكار المساء':['Evening adhkar','Adhkar du soir'],'حفظ التذكير':['Save reminder','Enregistrer le rappel'],'تجربة صوت التنبيه':['Test reminder sound','Tester le son du rappel'],
  'دخلك ومصروفاتك الشهرية في مكان واحد':['Your income and monthly expenses in one place','Vos revenus et dépenses mensuelles au même endroit'],'سجل الأشهر':['Monthly archive','Archive mensuelle'],'متزامن':['Synced','Synchronisé'],'التاريخ':['Date','Date'],'الشهر':['Month','Mois'],'أرشيف السنوات':['Year archive','Archive annuelle'],
  'الدخل الشهري':['Monthly income','Revenus mensuels'],'المرتب الأساسي':['Basic salary','Salaire de base'],'دخل إضافي ١':['Extra income 1','Revenu supplémentaire 1'],'دخل إضافي ٢':['Extra income 2','Revenu supplémentaire 2'],'إجمالي المرتبات':['Total income','Revenus totaux'],
  'المصروفات الثابتة':['Fixed expenses','Dépenses fixes'],'+ بند ثابت':['+ Fixed item','+ Poste fixe'],'إجمالي الثابتة:':['Fixed total:','Total fixe :'],'مصروفات يومية':['Daily expenses','Dépenses quotidiennes'],'+ إضافة مصروف':['+ Add expense','+ Ajouter une dépense'],'إجمالي اليومية:':['Daily total:','Total quotidien :'],
  'النتيجة':['Result','Résultat'],'إجمالي الدخل':['Total income','Revenus totaux'],'إجمالي المصروفات':['Total expenses','Dépenses totales'],'المتبقي':['Remaining','Reste'],'ملخص الإنفاق':['Spending summary','Résumé des dépenses'],'نسبة المصروفات من الدخل':['Expenses as % of income','Dépenses en % des revenus'],'من إجمالي المرتب':['Of total salary','Du salaire total'],'استثمار مقترح':['Suggested investment','Investissement suggéré'],'من المتبقي':['Of remaining amount','Du montant restant'],'صدقة + زكاة':['Charity + Zakat','Aumône + Zakat'],'نسب قابلة للتعديل':['Adjustable rates','Taux ajustables'],'نصائح ذكية':['Smart tips','Conseils intelligents'],'إجراءات':['Actions','Actions'],'حفظ ومزامنة':['Save & sync','Enregistrer et synchroniser'],'تقرير / PDF':['Report / PDF','Rapport / PDF'],'إغلاق الشهر':['Close month','Clôturer le mois'],
  'مهامك وحصص المذاكرة والطلاب في مكان واحد':['Tasks, study sessions and students in one place','Tâches, sessions d’étude et étudiants au même endroit'],'دائرة تركيزك اليومية — مهامك ومذاكرتك في مكان واحد':['Your daily focus circle — tasks and study in one place','Votre cercle de concentration — tâches et études au même endroit'],'مشاركة الصفحة و QR':['Share page & QR','Partager la page et QR'],'اختر مهمة أو حصة مذاكرة':['Choose a task or study session','Choisissez une tâche ou une session'],'بلا نشاط':['Idle','Inactif'],'إنهاء':['Finish','Terminer'],'تأجيل 5د':['Snooze 5 min','Reporter 5 min'],'تأجيل لموعد':['Reschedule','Reprogrammer'],'المهام':['Tasks','Tâches'],'الطلاب':['Students','Étudiants'],'مهامي':['My tasks','Mes tâches'],'إضافة مادة':['Add subject','Ajouter une matière'],'اسم المادة':['Subject name','Nom de la matière'],'إضافة المادة':['Add subject','Ajouter la matière'],
  'خطة اليوم —':['Today’s plan —','Plan du jour —'],'إنشاء جدول المذاكرة':['Create study schedule','Créer un planning d’étude'],'إضافة حصة مذاكرة للجدول':['Add study session','Ajouter une session d’étude'],'المدة (دقيقة)':['Duration (minutes)','Durée (minutes)'],'تصنيف البند':['Item type','Type d’élément'],'مذاكرة':['Study','Étude'],'استراحة':['Break','Pause'],'تطوير':['Development','Développement'],'واجب':['Homework','Devoir'],'ملاحظة (اختياري)':['Note (optional)','Note (facultative)'],'إضافة للجدول':['Add to schedule','Ajouter au planning'],'حصصي (بتايمر)':['My sessions (with timer)','Mes sessions (avec minuteur)'],'عرض الأسبوع':['Week view','Vue hebdomadaire'],'تصدير الخطة (طباعة / PDF)':['Export plan (Print / PDF)','Exporter le plan (Imprimer / PDF)'],'نظرة عامة':['Overview','Vue d’ensemble'],'توزيع اهتمامك بالمواد':['Subject focus distribution','Répartition de votre attention'],'التقويم':['Calendar','Calendrier'],'ملاحظات المواد':['Subject notes','Notes de matière'],'اختر مادة':['Choose a subject','Choisir une matière'],'ملاحظاتك':['Your notes','Vos notes'],'حفظ الملاحظة':['Save note','Enregistrer la note'],'سجل المذاكرة السابق':['Study history','Historique d’étude'],
  'اعتني بنفسك':['Take care of yourself','Prenez soin de vous'],'انضباط رقمي وعادات ومهام يومك':['Digital discipline, habits and daily tasks','Discipline numérique, habitudes et tâches quotidiennes'],'العادة الأولى':['First habit','Première habitude'],'العادة الثانية':['Second habit','Deuxième habitude'],'خطة اليوم':['Today’s plan','Plan du jour'],'الرئيسية':['Home','Accueil'],'الصلوات':['Prayers','Prières'],'الأهداف':['Goals','Objectifs'],'الدراسة':['Study','Étude'],'ملفك الشخصي':['Your profile','Votre profil'],'أضف اسمك وصورتك من الجهاز.':['Add your name and photo from your device.','Ajoutez votre nom et votre photo depuis votre appareil.'],'الاسم':['Name','Nom'],'الصورة الشخصية':['Profile photo','Photo de profil'],'إضافة مهمة جديدة':['Add new task','Ajouter une tâche'],'اكتب اسم المهمة واختر رمزًا.':['Enter a task name and choose an icon.','Saisissez le nom de la tâche et choisissez une icône.']
 };
 const reverse={}; for(const [ar,vals] of Object.entries(translations)){reverse[ar]=ar;vals.forEach((v,i)=>reverse[v]=ar)}
 function lang(){return localStorage.getItem('app-language-v1')||'ar'}
 function tr(raw,l){if(!raw)return raw;const ar=reverse[raw]||raw;return l==='ar'?ar:(translations[ar]?.[l==='fr'?1:0]||raw)}
 function applyAll(){const l=lang();document.body.dataset.language=l;document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=walker.nextNode()){const parent=n.parentElement;if(!parent||['SCRIPT','STYLE','TEXTAREA','INPUT','OPTION'].includes(parent.tagName))continue;const raw=n.nodeValue.trim();const val=tr(raw,l);if(val!==raw)n.nodeValue=n.nodeValue.replace(raw,val)}
  document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(e=>{const v=e.getAttribute('placeholder');const x=tr(v,l);if(x!==v)e.setAttribute('placeholder',x)});
  document.querySelectorAll('[title]').forEach(e=>{const v=e.getAttribute('title'),x=tr(v,l);if(x!==v)e.setAttribute('title',x)});
  const add=document.querySelector('#tasksPanel .add-task');if(add){const text=l==='ar'?'إضافة مهمة':l==='fr'?'Ajouter une tâche':'Add task';add.setAttribute('aria-label',text);add.dataset.langLabel=text}
 }
 const old=window.__applyLanguage;window.__applyLanguage=function(l){localStorage.setItem('app-language-v1',l);old?.(l);setTimeout(applyAll,0)};
 document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>setTimeout(applyAll,30)));
 document.querySelectorAll('.main-bottom-nav button[data-page]').forEach(b=>b.addEventListener('click',()=>setTimeout(applyAll,120)));
 let timer,observer;function startTranslationObserver(){if(observer)return;observer=new MutationObserver(()=>{clearTimeout(timer);timer=setTimeout(applyAll,120)});observer.observe(document.body,{childList:true,subtree:true});applyAll()}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startTranslationObserver,{once:true});else startTranslationObserver();
})();


/* ===== Original inline script 23 ===== */

(function(){
 'use strict';
 const KEY='app-device-mode-v1', sheet=document.getElementById('languageSheet');
 const title=document.getElementById('deviceModeTitle');
 const labels={ar:{title:'وضع العرض',auto:'تلقائي',phone:'📱 الهاتف',desktop:'💻 الكمبيوتر'},en:{title:'Display mode',auto:'Auto',phone:'📱 Phone',desktop:'💻 Computer'},fr:{title:'Mode d’affichage',auto:'Auto',phone:'📱 Téléphone',desktop:'💻 Ordinateur'}};
 function lang(){return localStorage.getItem('app-language-v1')||'ar'}
 function mode(){return localStorage.getItem(KEY)||'auto'}
 function apply(){let m=mode();if(m==='auto')m=matchMedia('(max-width: 700px)').matches?'phone':'desktop';document.body.classList.remove('device-phone','device-desktop');document.body.classList.add('device-'+m);document.body.dataset.deviceMode=mode();
  const l=labels[lang()]||labels.ar;if(title){title.textContent=l.title}document.querySelectorAll('.device-mode-option[data-device-mode]').forEach(b=>{b.textContent=l[b.dataset.deviceMode];b.classList.toggle('active',b.dataset.deviceMode===mode())});
 }
 document.querySelectorAll('.device-mode-option[data-device-mode]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem(KEY,b.dataset.deviceMode);apply()}));
 window.__applyDeviceMode=apply;window.addEventListener('resize',()=>{if(mode()==='auto')apply()});
 const oldLang=window.__applyLanguage;window.__applyLanguage=function(l){oldLang?.(l);setTimeout(apply,0)};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();



/* ===== Qibla and device-location enhancement ===== */
(function(){
  'use strict';
  const LOCATION_KEY='prayer_device_location_v2';
  const KAABA={lat:21.422487, lon:39.826206};
  let currentLocation=null;
  let orientationBound=false;
  let orientationPermission=false;

  const el=id=>document.getElementById(id);
  const toastSafe=msg=>{try{if(typeof toast==='function')toast(msg)}catch(_){}
  };
  const dayKey=()=>{const d=new Date();return `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()}`};
  const saveJson=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value))}catch(_){} };
  const readJson=(key,fallback=null)=>{try{const v=JSON.parse(localStorage.getItem(key)||'null');return v??fallback}catch(_){return fallback}};
  const number=(v,f=0)=>Number.isFinite(Number(v))?Number(v):f;
  const deg=v=>(v+360)%360;

  function bearingToKaaba(lat,lon){
    const p1=lat*Math.PI/180, p2=KAABA.lat*Math.PI/180, dl=(KAABA.lon-lon)*Math.PI/180;
    return deg(Math.atan2(Math.sin(dl),Math.cos(p1)*Math.tan(p2)-Math.sin(p1)*Math.cos(dl))*180/Math.PI);
  }
  function formatBearing(v){return `${Math.round(deg(v))}°`}

  function paintQibla(){
    if(!currentLocation)return;
    const bearing=bearingToKaaba(currentLocation.lat,currentLocation.lon);
    currentLocation.bearing=bearing;
    const info=el('qiblaLocationText');
    if(info) info.textContent=`اتجاه القبلة من موقعك: ${formatBearing(bearing)} — حرّك الهاتف حتى يستقر السهم`;
    const label=el('qiblaBearingText'); if(label)label.textContent=formatBearing(bearing);
    const needle=el('needle'); if(needle)needle.style.transform=`rotate(${bearing}deg)`;
  }
  function orientationHandler(event){
    if(!currentLocation)return;
    let heading=null;
    if(typeof event.webkitCompassHeading==='number') heading=event.webkitCompassHeading;
    else if(typeof event.alpha==='number') heading=360-event.alpha;
    if(heading==null)return;
    const needle=el('needle');
    if(needle)needle.style.transform=`rotate(${deg(currentLocation.bearing-heading)}deg)`;
    const state=el('qiblaCompassStatus');
    if(state)state.textContent='تم تفعيل بوصلة الهاتف — وجّه السهم نحو القبلة';
  }
  async function bindOrientation(){
    if(orientationBound)return true;
    try{
      if(typeof DeviceOrientationEvent!=='undefined' && typeof DeviceOrientationEvent.requestPermission==='function'){
        const permission=await DeviceOrientationEvent.requestPermission();
        if(permission!=='granted'){toastSafe('اسمح باستخدام مستشعر الاتجاه لتفعيل البوصلة');return false}
      }
      window.addEventListener('deviceorientationabsolute',orientationHandler,true);
      window.addEventListener('deviceorientation',orientationHandler,true);
      orientationBound=true;orientationPermission=true;
      orientationHandler({alpha:null});
      return true;
    }catch(_){toastSafe('تعذر تشغيل بوصلة الهاتف في هذا المتصفح');return false}
  }

  function updatePrayerCards(times){
    if(!times)return;
    const map={Fajr:'الفجر',Sunrise:'الشروق',Dhuhr:'الظهر',Asr:'العصر',Maghrib:'المغرب',Isha:'العشاء'};
    document.querySelectorAll('#prayersList .pt-prayer').forEach(card=>{
      const name=card.querySelector('.pt-prayer-name')?.textContent.trim();
      const key=Object.keys(map).find(k=>map[k]===name);
      const time=key&&times[key];
      const node=card.querySelector('.pt-prayer-time');
      if(time&&node)node.textContent=String(time).split(' ')[0];
    });
  }
  async function fetchPrayerByCoordinates(lat,lon,sourceLabel){
    const date=dayKey();
    const url=`https://api.aladhan.com/v1/timings/${date}?latitude=${encodeURIComponent(lat)}&longitude=${encodeURIComponent(lon)}&method=5`;
    const response=await fetch(url,{cache:'no-store'});
    if(!response.ok)throw new Error('prayer api '+response.status);
    const json=await response.json();
    const times=json?.data?.timings;
    if(!times)throw new Error('no timings');
    updatePrayerCards(times);
    saveJson('prayer_times_device_v2',{date,lat,lon,times,source:sourceLabel||'device'});
    const text=el('locationText');if(text)text.textContent=sourceLabel||`موقع الهاتف: ${lat.toFixed(3)}, ${lon.toFixed(3)}`;
    try{if(typeof applyPrayerTimes==='function')applyPrayerTimes(times,sourceLabel||'موقع الهاتف')}catch(_){}
    return times;
  }
  function applySavedDeviceLocation(){
    const saved=readJson(LOCATION_KEY);
    if(!saved||!Number.isFinite(Number(saved.lat))||!Number.isFinite(Number(saved.lon)))return false;
    currentLocation={lat:Number(saved.lat),lon:Number(saved.lon),source:saved.source||'device'};
    paintQibla();
    const label=saved.label||`موقع الهاتف: ${currentLocation.lat.toFixed(3)}, ${currentLocation.lon.toFixed(3)}`;
    const text=el('locationText');if(text)text.textContent=label;
    const cached=readJson('prayer_times_device_v2');
    if(cached&&cached.date===dayKey()&&Math.abs(Number(cached.lat)-currentLocation.lat)<.0001&&cached.times){updatePrayerCards(cached.times)}
    fetchPrayerByCoordinates(currentLocation.lat,currentLocation.lon,label).catch(()=>{});
    return true;
  }
  function usePosition(position,source='device'){
    const lat=Number(position.coords.latitude),lon=Number(position.coords.longitude);
    if(!Number.isFinite(lat)||!Number.isFinite(lon))throw new Error('invalid coordinates');
    currentLocation={lat,lon,source};
    saveJson(LOCATION_KEY,{lat,lon,source,label:`موقع الهاتف: ${lat.toFixed(3)}, ${lon.toFixed(3)}`});
    paintQibla();
    const text=el('locationText');if(text)text.textContent=`جارٍ تحديث المواقيت من موقع الهاتف…`;
    fetchPrayerByCoordinates(lat,lon,`موقع الهاتف: ${lat.toFixed(3)}, ${lon.toFixed(3)}`).then(()=>toastSafe('تم تثبيت موقع الهاتف وتحديث المواقيت ✓')).catch(()=>toastSafe('تم حفظ الموقع، تعذر تحديث المواقيت الآن'));
  }
  function locateFromPhone(options={}){
    if(!navigator.geolocation){toastSafe('الموقع غير مدعوم في هذا المتصفح');return}
    if(options.qibla)bindOrientation();
    navigator.geolocation.getCurrentPosition(pos=>usePosition(pos,'device'),err=>{
      const saved=readJson(LOCATION_KEY);
      if(saved)applySavedDeviceLocation();
      const msg=err?.code===1?'اسمح للموقع من إعدادات المتصفح ليتم التحديث تلقائيًا':'تعذر قراءة موقع الهاتف؛ يمكنك اختيار المحافظة يدويًا';
      if(options.silent!==true)toastSafe(msg);
    },{enableHighAccuracy:true,maximumAge:300000,timeout:12000});
  }
  async function activateQibla(){
    if(!currentLocation){
      if(!navigator.geolocation){toastSafe('الموقع غير مدعوم');return}
      navigator.geolocation.getCurrentPosition(pos=>{usePosition(pos,'device');bindOrientation()},()=>toastSafe('اسمح بالموقع أولًا لتحديد القبلة'),{enableHighAccuracy:true,maximumAge:300000,timeout:12000});
    }else{paintQibla();await bindOrientation()}
  }
  function openQiblaAndStart(){
    try{if(typeof showPage==='function')showPage('qibla')}catch(_){}
    setTimeout(activateQibla,80);
  }

  function install(){
    const mainBtn=el('getLocationBtn');
    if(mainBtn){mainBtn.textContent='📍 استخدام موقع الهاتف';mainBtn.title='تحديث مواقيت الصلاة من موقع الهاتف';mainBtn.onclick=()=>locateFromPhone({silent:false});}
    const qBtn=el('qiblaLocationButton');if(qBtn){qBtn.textContent='📍 تفعيل موقع الهاتف والبوصلة';qBtn.onclick=activateQibla;}
    const qOpen=el('openQiblaBtn');if(qOpen)qOpen.onclick=openQiblaAndStart;
    applySavedDeviceLocation();
    // يطلب الإذن تلقائيًا عند أول تشغيل فقط، ثم يعتمد على الموقع المحفوظ.
    const saved=readJson(LOCATION_KEY);
    if(saved) return;
    setTimeout(()=>locateFromPhone({silent:true}),450);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
  window.__deviceLocationFix={locateFromPhone,activateQibla,applySavedDeviceLocation};
})();
