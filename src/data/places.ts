export type Category = "restaurants" | "beaches" | "attractions" | "entertainment";

export type Place = {
  id: string;
  category: Category;
  name: { en: string; gr: string };
  shortDescription: { en: string; gr: string };
  description: { en: string; gr: string };
  distance: string;
  rating: number;
  type: { en: string; gr: string };
  bestSeason: { en: string; gr: string };
  tip: { en: string; gr: string };
  lat: number;
  lng: number;
  image: string;
  gallery: string[];
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const places: Place[] = [
  // RESTAURANTS
  {
    id: "peskesi",
    category: "restaurants",
    name: { en: "Peskesi", gr: "Πεσκέσι" },
    shortDescription: {
      en: "Ancient Cretan cuisine in a stone-walled courtyard.",
      gr: "Αρχαία κρητική κουζίνα σε πέτρινη αυλή.",
    },
    description: {
      en: "Peskesi is a celebrated Heraklion institution serving recipes traced back to Minoan and Byzantine Crete. Wild greens, slow-braised lamb, raki distilled in-house — every plate is rooted in a centuries-old farming network.",
      gr: "Το Πεσκέσι είναι κορυφαία διεύθυνση στο Ηράκλειο που σερβίρει συνταγές από τη Μινωική και Βυζαντινή Κρήτη. Άγρια χόρτα, αρνί σιγομαγειρεμένο, σπιτική ρακή — κάθε πιάτο ριζωμένο σε αιωνόβιο αγροτικό δίκτυο.",
    },
    distance: "1.2 km",
    rating: 4.8,
    type: { en: "Cretan · Fine Dining", gr: "Κρητική · Γκουρμέ" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: {
      en: "Ask for the apaki — smoked pork cured with mountain herbs.",
      gr: "Ζητήστε το απάκι — καπνιστό χοιρινό με βότανα.",
    },
    lat: 35.3397, lng: 25.1340,
    image: img("photo-1414235077428-338989a2e8c0"),
    gallery: [
      img("photo-1414235077428-338989a2e8c0"),
      img("photo-1559339352-11d035aa65de"),
      img("photo-1551218808-94e220e084d2"),
    ],
  },
  {
    id: "brilliant-buffet",
    category: "restaurants",
    name: { en: "Brilliant Buffet", gr: "Brilliant Buffet" },
    shortDescription: {
      en: "Refined Mediterranean tasting menu inside the Lato Hotel.",
      gr: "Εκλεπτυσμένο μεσογειακό μενού στο ξενοδοχείο Lato.",
    },
    description: {
      en: "An award-winning rooftop kitchen overlooking the Venetian harbor. Chef-led Mediterranean plates, an extensive Greek wine list, and one of the best harbor sunsets in town.",
      gr: "Βραβευμένη κουζίνα ταράτσας με θέα στο Ενετικό λιμάνι. Μεσογειακά πιάτα, εκτενής λίστα ελληνικών κρασιών και θέα ηλιοβασιλέματος.",
    },
    distance: "1.3 km",
    rating: 4.7,
    type: { en: "Mediterranean · Rooftop", gr: "Μεσογειακή · Ταράτσα" },
    bestSeason: { en: "Spring to autumn", gr: "Άνοιξη – Φθινόπωρο" },
    tip: { en: "Book the corner table for harbor views.", gr: "Κλείστε γωνιακό τραπέζι για τη θέα." },
    lat: 35.3401, lng: 25.1328,
    image: img("photo-1466978913421-dad2ebd01d17"),
    gallery: [
      img("photo-1466978913421-dad2ebd01d17"),
      img("photo-1592861956120-e524fc739696"),
      img("photo-1414235077428-338989a2e8c0"),
    ],
  },
  {
    id: "ligo-krasi-ligo-thalassa",
    category: "restaurants",
    name: { en: "Ligo Krasi Ligo Thalassa", gr: "Λίγο Κρασί Λίγο Θάλασσα" },
    shortDescription: {
      en: "Seaside fish taverna, feet from the waves.",
      gr: "Παραθαλάσσια ψαροταβέρνα, στα βότσαλα.",
    },
    description: {
      en: "A romantic, family-run taverna whose name means 'a little wine, a little sea'. Daily catch grilled simply with lemon and Cretan olive oil, served on a stone terrace overlooking the Aegean.",
      gr: "Ρομαντική οικογενειακή ταβέρνα. Φρεσκοψημένα ψάρια ημέρας με λεμόνι και κρητικό λάδι, σε πέτρινο εξώστη πάνω από το Αιγαίο.",
    },
    distance: "2.1 km",
    rating: 4.6,
    type: { en: "Seafood · Taverna", gr: "Ψαροταβέρνα" },
    bestSeason: { en: "April – October", gr: "Απρίλιος – Οκτώβριος" },
    tip: { en: "Order the grilled octopus and a chilled Vidiano.", gr: "Δοκιμάστε χταπόδι σχάρας με Βιδιανό." },
    lat: 35.3412, lng: 25.1198,
    image: img("photo-1414235077428-338989a2e8c0"),
    gallery: [
      img("photo-1414235077428-338989a2e8c0"),
      img("photo-1505253758473-96b7015fcd40"),
      img("photo-1559339352-11d035aa65de"),
    ],
  },
  {
    id: "erganos",
    category: "restaurants",
    name: { en: "Erganos Traditional Cretan", gr: "Έργανος" },
    shortDescription: {
      en: "Rustic farmhouse plates inside a museum-like setting.",
      gr: "Παραδοσιακή κουζίνα σε μουσειακό περιβάλλον.",
    },
    description: {
      en: "Erganos feels like stepping into a Cretan grandmother's kitchen. Carved wooden interiors, hand-painted plates, and dishes like gamopilafo (wedding rice) and antikristo lamb cooked the old way.",
      gr: "Σαν να μπαίνετε στην κουζίνα μιας Κρητικιάς γιαγιάς. Σκαλιστά ξύλα, γαμοπίλαφο, αντικριστό αρνί στην παλιά συνταγή.",
    },
    distance: "1.0 km",
    rating: 4.7,
    type: { en: "Traditional Cretan", gr: "Παραδοσιακή Κρητική" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Save room for loukoumades drizzled with thyme honey.", gr: "Αφήστε χώρο για λουκουμάδες με μέλι θυμαρίσιο." },
    lat: 35.3389, lng: 25.1335,
    image: img("photo-1559339352-11d035aa65de"),
    gallery: [
      img("photo-1559339352-11d035aa65de"),
      img("photo-1414235077428-338989a2e8c0"),
      img("photo-1551218808-94e220e084d2"),
    ],
  },

  // BEACHES
  {
    id: "amnisos-beach",
    category: "beaches",
    name: { en: "Amnisos Beach", gr: "Παραλία Αμνισού" },
    shortDescription: {
      en: "Long sandy bay with shallow turquoise water.",
      gr: "Μακρά αμμώδης παραλία με ρηχά γαλαζοπράσινα νερά.",
    },
    description: {
      en: "Once the harbor of Minoan Knossos, Amnisos blends archaeology with golden sand. Family-friendly shallows, taverna umbrellas, and a sunset that lights up Dia island on the horizon.",
      gr: "Άλλοτε το λιμάνι της Μινωικής Κνωσού, ο Αμνισός συνδυάζει αρχαιολογία με χρυσή άμμο. Φιλικός για οικογένειες, με ταβέρνες και θέα στη Δία.",
    },
    distance: "4.8 km",
    rating: 4.5,
    type: { en: "Organized · Sandy", gr: "Οργανωμένη · Αμμώδης" },
    bestSeason: { en: "May – October", gr: "Μάιος – Οκτώβριος" },
    tip: { en: "Visit the Minoan ruins at the western end of the beach.", gr: "Δείτε τα Μινωικά ερείπια στο δυτικό άκρο." },
    lat: 35.3372, lng: 25.1882,
    image: img("photo-1507525428034-b723cf961d3e"),
    gallery: [
      img("photo-1507525428034-b723cf961d3e"),
      img("photo-1519046904884-53103b34b206"),
      img("photo-1493558103817-58b2924bce98"),
    ],
  },
  {
    id: "karteros-beach",
    category: "beaches",
    name: { en: "Karteros Beach", gr: "Παραλία Καρτερού" },
    shortDescription: {
      en: "Lively beach lined with bars and water sports.",
      gr: "Ζωντανή παραλία με beach bars και θαλάσσια σπορ.",
    },
    description: {
      en: "Karteros is the energetic neighbor to Amnisos — DJ sets at sunset, paddleboards on the bay, and a buzzy young crowd. The fine grey-gold sand stretches almost a kilometer.",
      gr: "Ο ενεργητικός γείτονας του Αμνισού — DJ sets, SUP, νεανική ατμόσφαιρα. Λεπτή χρυσογκρι άμμος σχεδόν ένα χιλιόμετρο.",
    },
    distance: "3.6 km",
    rating: 4.4,
    type: { en: "Lively · Sandy", gr: "Ζωντανή · Αμμώδης" },
    bestSeason: { en: "June – September", gr: "Ιούνιος – Σεπτέμβριος" },
    tip: { en: "Friday evenings have live music at the central bar.", gr: "Παρασκευή βράδυ ζωντανή μουσική στο κεντρικό bar." },
    lat: 35.3401, lng: 25.1743,
    image: img("photo-1519046904884-53103b34b206"),
    gallery: [
      img("photo-1519046904884-53103b34b206"),
      img("photo-1507525428034-b723cf961d3e"),
      img("photo-1473496169904-658ba7c44d8a"),
    ],
  },
  {
    id: "kokkini- beach",
    category: "beaches",
    name: { en: "Kokkini Beach", gr: "Παραλία Κοκκίνη" },
    shortDescription: {
      en: "Tucked-away red-sand cove for slow afternoons.",
      gr: "Κρυμμένος κολπίσκος με κόκκινη άμμο.",
    },
    description: {
      en: "Named for its rust-red sand, Kokkini Ammos is the quieter cousin further east. Sheltered, intimate, and a favorite of locals who want to escape the crowds.",
      gr: "Ονομάστηκε από την κοκκινωπή άμμο. Πιο ήσυχη, ιδανική για όσους θέλουν να αποφύγουν τον κόσμο.",
    },
    distance: "6.2 km",
    rating: 4.6,
    type: { en: "Secluded · Red sand", gr: "Απομονωμένη · Κόκκινη άμμος" },
    bestSeason: { en: "May – October", gr: "Μάιος – Οκτώβριος" },
    tip: { en: "Bring water shoes — the seabed has smooth pebbles.", gr: "Φέρτε παπούτσια θαλάσσης — βότσαλα στον βυθό." },
    lat: 35.3354, lng: 25.2021,
    image: img("photo-1473496169904-658ba7c44d8a"),
    gallery: [
      img("photo-1473496169904-658ba7c44d8a"),
      img("photo-1493558103817-58b2924bce98"),
      img("photo-1507525428034-b723cf961d3e"),
    ],
  },
  {
    id: "agia-pelagia",
    category: "beaches",
    name: { en: "Agia Pelagia Beach", gr: "Παραλία Αγίας Πελαγίας" },
    shortDescription: {
      en: "Crystal cove sheltered between two headlands.",
      gr: "Κρυστάλλινος κόλπος ανάμεσα σε δύο ακρωτήρια.",
    },
    description: {
      en: "A horseshoe bay 20 minutes west of the apartment, ringed by white pebble shores and the clearest water on this stretch of coast. Famous for snorkeling around the rocky edges.",
      gr: "Πέταλο κόλπου 20 λεπτά δυτικά, με λευκά βότσαλα και πεντακάθαρα νερά. Φημισμένη για snorkeling.",
    },
    distance: "20 km",
    rating: 4.8,
    type: { en: "Pebble · Snorkel", gr: "Βότσαλα · Snorkel" },
    bestSeason: { en: "May – October", gr: "Μάιος – Οκτώβριος" },
    tip: { en: "Take the cliffside path to a hidden second cove.", gr: "Ακολουθήστε το μονοπάτι σε δεύτερο κρυφό κόλπο." },
    lat: 35.3798, lng: 25.0312,
    image: img("photo-1493558103817-58b2924bce98"),
    gallery: [
      img("photo-1493558103817-58b2924bce98"),
      img("photo-1507525428034-b723cf961d3e"),
      img("photo-1519046904884-53103b34b206"),
    ],
  },

  // ATTRACTIONS
  {
    id: "archaeological-museum",
    category: "attractions",
    name: { en: "Heraklion Archaeological Museum", gr: "Αρχαιολογικό Μουσείο Ηρακλείου" },
    shortDescription: {
      en: "The greatest Minoan collection in the world.",
      gr: "Η μεγαλύτερη Μινωική συλλογή στον κόσμο.",
    },
    description: {
      en: "Two floors of frescoes, gold jewelry, and the iconic Phaistos Disc — every great discovery from Knossos and beyond lives here. Allow at least two hours.",
      gr: "Δύο όροφοι τοιχογραφιών, χρυσών κοσμημάτων και ο Δίσκος της Φαιστού. Αφιερώστε τουλάχιστον δύο ώρες.",
    },
    distance: "1.4 km",
    rating: 4.8,
    type: { en: "Museum", gr: "Μουσείο" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Buy a combo ticket with Knossos to save 20%.", gr: "Πάρτε συνδυασμένο εισιτήριο με Κνωσό." },
    lat: 35.3401, lng: 25.1337,
    image: img("photo-1564399579883-451a5d44ec08"),
    gallery: [
      img("photo-1564399579883-451a5d44ec08"),
      img("photo-1583325958575-0c95eb7e6e2e"),
      img("photo-1539650116574-75c0c6d73f0e"),
    ],
  },
  {
    id: "koules-fortress",
    category: "attractions",
    name: { en: "Koules Venetian Fortress", gr: "Κούλες" },
    shortDescription: {
      en: "Sea-fort guarding the old Venetian harbor.",
      gr: "Θαλάσσιο κάστρο στο Ενετικό λιμάνι.",
    },
    description: {
      en: "Built in the 16th century, Koules still anchors Heraklion's waterfront. Climb the ramparts at golden hour for an unbeatable panorama of the city, the sea, and the lighthouse pier.",
      gr: "Χτισμένο τον 16ο αιώνα, ο Κούλες κυριαρχεί στην παραλιακή. Ανεβείτε στα τείχη το ηλιοβασίλεμα για πανοραμική θέα.",
    },
    distance: "1.5 km",
    rating: 4.6,
    type: { en: "Historic site", gr: "Ιστορικό μνημείο" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Walk the long pier behind the fort at sunset.", gr: "Περπατήστε τη μακρά προβλήτα πίσω από το κάστρο." },
    lat: 35.3434, lng: 25.1342,
    image: img("photo-1599661046827-dacde6976549"),
    gallery: [
      img("photo-1599661046827-dacde6976549"),
      img("photo-1564399579883-451a5d44ec08"),
      img("photo-1605346495257-7e4d5b1aab38"),
    ],
  },
  {
    id: "knossos",
    category: "attractions",
    name: { en: "Knossos Palace", gr: "Ανάκτορο Κνωσού" },
    shortDescription: {
      en: "Europe's oldest city — heart of the Minoan civilization.",
      gr: "Η αρχαιότερη πόλη της Ευρώπης — καρδιά του Μινωικού πολιτισμού.",
    },
    description: {
      en: "Four thousand years of myth and stone. Walk the throne room, see Sir Arthur Evans' famous restorations, and trace the labyrinth that inspired the legend of the Minotaur.",
      gr: "Τέσσερις χιλιετίες μύθου και πέτρας. Δείτε την Αίθουσα του Θρόνου και τις αναστηλώσεις του Έβανς.",
    },
    distance: "5.1 km",
    rating: 4.7,
    type: { en: "Archaeological site", gr: "Αρχαιολογικός χώρος" },
    bestSeason: { en: "Spring / autumn", gr: "Άνοιξη / Φθινόπωρο" },
    tip: { en: "Arrive at opening to beat the cruise crowds.", gr: "Φτάστε στις πρωινές ώρες πριν τα κρουαζιερόπλοια." },
    lat: 35.2985, lng: 25.1631,
    image: img("photo-1605346495257-7e4d5b1aab38"),
    gallery: [
      img("photo-1605346495257-7e4d5b1aab38"),
      img("photo-1599661046827-dacde6976549"),
      img("photo-1564399579883-451a5d44ec08"),
    ],
  },
  {
    id: "1866-market",
    category: "attractions",
    name: { en: "1866 Street Market", gr: "Αγορά της 1866" },
    shortDescription: {
      en: "Heraklion's pulsating outdoor food bazaar.",
      gr: "Η πολύβουη υπαίθρια αγορά του Ηρακλείου.",
    },
    description: {
      en: "Pyramids of olives, hanging bunches of oregano, fresh bread, raki tastings — the city's beating market street, alive since the 19th century.",
      gr: "Πυραμίδες ελιές, ματσάκια ρίγανης, φρέσκο ψωμί και ρακή — η πολύβουη αγορά από τον 19ο αιώνα.",
    },
    distance: "1.1 km",
    rating: 4.5,
    type: { en: "Market", gr: "Αγορά" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Stop for a bougatsa at Kirkor near the start of the street.", gr: "Δοκιμάστε μπουγάτσα στον Κιρκόρ στην αρχή του δρόμου." },
    lat: 35.3389, lng: 25.1318,
    image: img("photo-1488459716781-31db52582fe9"),
    gallery: [
      img("photo-1488459716781-31db52582fe9"),
      img("photo-1542838132-92c53300491e"),
      img("photo-1601001435957-74f0958a93c5"),
    ],
  },

  // ENTERTAINMENT
  {
    id: "utopia",
    category: "entertainment",
    name: { en: "Utopia Cocktail Bar", gr: "Utopia Cocktail Bar" },
    shortDescription: {
      en: "Award-winning craft cocktails in an art-deco room.",
      gr: "Βραβευμένα cocktails σε αρ ντεκό αίθουσα.",
    },
    description: {
      en: "A bartender-driven cocktail lounge, ranked among the best in Greece. Cretan herbs and house-distilled spirits mixed by a team that competes internationally.",
      gr: "Cocktail bar που ξεχωρίζει πανελλαδικά. Κρητικά βότανα και αποστάγματα από μια ομάδα διεθνών διαγωνισμών.",
    },
    distance: "1.2 km",
    rating: 4.8,
    type: { en: "Cocktail bar", gr: "Cocktail bar" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Try the dittany & honey sour — only on Crete.", gr: "Δοκιμάστε το δίκταμο & μέλι sour." },
    lat: 35.3408, lng: 25.1301,
    image: img("photo-1514933651103-005eec06c04b"),
    gallery: [
      img("photo-1514933651103-005eec06c04b"),
      img("photo-1572116469696-31de0f17cc34"),
      img("photo-1470337458703-46ad1756a187"),
    ],
  },
  {
    id: "privilege",
    category: "entertainment",
    name: { en: "Privilege Club", gr: "Privilege Club" },
    shortDescription: {
      en: "Heraklion's headline nightclub on the waterfront.",
      gr: "Το κορυφαίο club του Ηρακλείου στην παραλία.",
    },
    description: {
      en: "Open-air dance floor and an indoor mainroom that hosts international DJs through the summer. Dress sharp; the night gets going after midnight.",
      gr: "Ανοιχτή πίστα και κλειστό mainroom με διεθνείς DJs. Ντύσιμο επιμελημένο — η νύχτα ξεκινά μετά τα μεσάνυχτα.",
    },
    distance: "1.5 km",
    rating: 4.4,
    type: { en: "Nightclub", gr: "Νυχτερινό κέντρο" },
    bestSeason: { en: "June – September", gr: "Ιούνιος – Σεπτέμβριος" },
    tip: { en: "Reserve a table on weekends — the queue is long.", gr: "Κλείστε τραπέζι το Σαββατοκύριακο." },
    lat: 35.3421, lng: 25.1289,
    image: img("photo-1571266028243-d220c6a85f29"),
    gallery: [
      img("photo-1571266028243-d220c6a85f29"),
      img("photo-1470337458703-46ad1756a187"),
      img("photo-1572116469696-31de0f17cc34"),
    ],
  },
  {
    id: "envy",
    category: "entertainment",
    name: { en: "Envy Club", gr: "Envy Club" },
    shortDescription: {
      en: "Stylish lounge bar with sea views and house DJs.",
      gr: "Στιλάτο lounge bar με θέα στη θάλασσα.",
    },
    description: {
      en: "Velvet booths, amber lighting, deep house from sunset to late. Envy strikes the balance between cocktail bar and dance club for an after-dinner stop.",
      gr: "Βελούδινοι καναπέδες, μελί φωτισμός, deep house από ηλιοβασίλεμα ως αργά. Ιδανικό μετά το δείπνο.",
    },
    distance: "1.4 km",
    rating: 4.5,
    type: { en: "Lounge club", gr: "Lounge club" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Sit on the outdoor terrace facing the harbor.", gr: "Καθίστε στην εξωτερική βεράντα προς το λιμάνι." },
    lat: 35.3418, lng: 25.1295,
    image: img("photo-1470337458703-46ad1756a187"),
    gallery: [
      img("photo-1470337458703-46ad1756a187"),
      img("photo-1571266028243-d220c6a85f29"),
      img("photo-1514933651103-005eec06c04b"),
    ],
  },
  {
    id: "remedy",
    category: "entertainment",
    name: { en: "Remedy Bar Heraklion", gr: "Remedy Bar" },
    shortDescription: {
      en: "Speakeasy hideaway with vinyl and rare spirits.",
      gr: "Speakeasy καταφύγιο με βινύλιο και σπάνια ποτά.",
    },
    description: {
      en: "Dimly lit, vinyl-only soundtrack, a back bar of small-batch spirits curated like a wine cellar. Remedy is for slow nights and long conversations.",
      gr: "Χαμηλός φωτισμός, μόνο βινύλιο, και μπαρ με σπάνια αποστάγματα. Για αργές νύχτες και κουβέντες.",
    },
    distance: "1.2 km",
    rating: 4.7,
    type: { en: "Speakeasy bar", gr: "Speakeasy" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "The bartender's choice never disappoints.", gr: "Η επιλογή του bartender δεν απογοητεύει." },
    lat: 35.3405, lng: 25.1310,
    image: img("photo-1572116469696-31de0f17cc34"),
    gallery: [
      img("photo-1572116469696-31de0f17cc34"),
      img("photo-1514933651103-005eec06c04b"),
      img("photo-1470337458703-46ad1756a187"),
    ],
  },
];

export const RESIDENCE = { lat:35.3412298321936 , lng: 25.150282008004897, name: "3K The Residence" };

export const categoryMeta: Record<Category, { en: string; gr: string; emoji: string; tagline: { en: string; gr: string } }> = {
  restaurants: {
    en: "Nearby Restaurants",
    gr: "Εστιατόρια Κοντά",
    emoji: "",
    tagline: {
      en: "Where Heraklion eats — from ancient recipes to harbor rooftops.",
      gr: "Εκεί που τρώει το Ηράκλειο — από αρχαίες συνταγές έως ταράτσες λιμανιού.",
    },
  },
  beaches: {
    en: "Nearby Beaches",
    gr: "Παραλίες Κοντά",
    emoji: "",
    tagline: {
      en: "Sand, pebbles, and the clearest Aegean within minutes of the door.",
      gr: "Άμμος, βότσαλα και το πιο διάφανο Αιγαίο σε λίγα λεπτά.",
    },
  },
  attractions: {
    en: "Nearby Attractions",
    gr: "Αξιοθέατα Κοντά",
    emoji: "",
    tagline: {
      en: "Four thousand years of history at your doorstep.",
      gr: "Τέσσερις χιλιετίες ιστορίας στο κατώφλι σας.",
    },
  },
  entertainment: {
    en: "Nearby Entertainment",
    gr: "Διασκέδαση Κοντά",
    emoji: "",
    tagline: {
      en: "Cocktails, DJs, and slow nights in the city's best rooms.",
      gr: "Cocktails, DJs και αργές νύχτες στα καλύτερα στέκια της πόλης.",
    },
  },
};

export const placesByCategory = (c: Category) => places.filter((p) => p.category === c);
export const placeById = (id: string) => places.find((p) => p.id === id);
