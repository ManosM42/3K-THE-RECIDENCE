import image from "@/assets/peskesi.jpg";
import image2 from "@/assets/kastella.jpg";
import image3 from "@/assets/kouzineri.jpg";
import image4 from "@/assets/archipelagos.jpg";
import image5 from "@/assets/apiri.jpg";
import image6 from "@/assets/amalias.jpg";
import image7 from "@/assets/papafigos.jpg";
import image8 from "@/assets/chalali.jpg";

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
  // ADDITIONAL RESTAURANTS
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
    image: image ,
    gallery: []
  },
{
  id: "apiri-greek-eatery",
  category: "restaurants",
  name: { en: "Apiri Greek Eatery", gr: "Apiri Greek Eatery" },
  shortDescription: {
    en: "Modern Greek cuisine with a creative Mediterranean twist.",
    gr: "Μοντέρνα ελληνική κουζίνα με δημιουργική μεσογειακή πινελιά.",
  },
  description: {
    en: "A stylish eatery near the historic centre serving contemporary takes on Greek classics. Premium ingredients, refined plating, and a sleek atmosphere make it ideal for visitors seeking a modern spin on Hellenic gastronomy.",
    gr: "Κομψό εστιατόριο κοντά στο ιστορικό κέντρο με σύγχρονη εκδοχή της ελληνικής κουζίνας. Premium πρώτες ύλες, προσεγμένο plating και κομψό περιβάλλον.",
  },
  distance: "1.1 km",
  rating: 4.7,
  type: { en: "Mediterranean · Modern Greek", gr: "Μεσογειακή · Μοντέρνα Ελληνική" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Great choice for a creative dinner near the old town.",
    gr: "Ιδανικό για δημιουργικό δείπνο κοντά στην παλιά πόλη.",
  },
  lat: 35.3383, lng: 25.1350,
  image: image5 ,
  gallery: []
  
},
{
  id: "sir-papafigos",
  category: "restaurants",
  name: { en: "Sir Papafigos", gr: "Sir Papafigos" },
  shortDescription: {
    en: "Fine-dining vibes with creative Greek plates and cocktails.",
    gr: "Fine dining ατμόσφαιρα με δημιουργικά ελληνικά πιάτα και cocktails.",
  },
  description: {
    en: "Heraklion's go-to for a sophisticated night out. Sir Papafigos blends fine-dining aesthetics with locally rooted Cretan flavours, standout cocktails, and a polished interior — perfect for a date night or special occasion.",
    gr: "Η κορυφαία επιλογή για βραδινή έξοδο στο Ηράκλειο. Συνδυάζει fine dining αισθητική με κρητικές γεύσεις, εξαιρετικά cocktails και σοφιστικέ περιβάλλον.",
  },
  distance: "1.0 km",
  rating: 4.9,
  type: { en: "Fine Dining · Creative Greek", gr: "Fine Dining · Δημιουργική Ελληνική" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Open from 1 pm on weekends; weekdays from 5 pm — plan accordingly.",
    gr: "Σαββατοκύριακα από 13:00, καθημερινές από 17:00 — προγραμματίστε ανάλογα.",
  },
  lat: 35.3400, lng: 25.1325,
  image: image7,
  gallery: [
   
  ],
},
{
  id: "chalali",
  category: "restaurants",
  name: { en: "Chalali", gr: "Chalali" },
  shortDescription: {
    en: "Generous portions of authentic Greek comfort food.",
    gr: "Γενναιόδωρες μερίδες αυθεντικού ελληνικού comfort food.",
  },
  description: {
    en: "A beloved taverna on Riga Feraiou Square, Chalali is famous for its grills, slow-cooked dishes, and warm family service. Big portions, honest prices, and a lively square-side table — a local favourite equally loved by visitors.",
    gr: "Αγαπημένη ταβέρνα στην Πλατεία Ρήγα Φεραίου. Ψητά, μαγειρευτά, φιλική εξυπηρέτηση και μεγάλες μερίδες σε καλές τιμές.",
  },
  distance: "1.4 km",
  rating: 4.8,
  type: { en: "Traditional Greek · Taverna", gr: "Παραδοσιακή Ελληνική · Ταβέρνα" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Grab a square-facing table and order the mixed grill.",
    gr: "Πιάστε τραπέζι με θέα στην πλατεία και παραγγείλτε μικτή σχάρα.",
  },
  lat: 35.3367, lng: 25.1372,
  image: image8,
  gallery: [
    
  ],
},
{
  id: "kastella-seafood",
  category: "restaurants",
  name: { en: "Kastella Seafood Restaurant", gr: "Kastella Seafood Restaurant" },
  shortDescription: {
    en: "Fresh fish and seafood by the Heraklion waterfront.",
    gr: "Φρέσκο ψάρι και θαλασσινά στο παραλιακό μέτωπο.",
  },
  description: {
    en: "Perched on the seafront promenade, Kastella specialises in the day's freshest catch prepared in Mediterranean style. A relaxed summer atmosphere, sunset views, and a menu built around the sea make it a top pick for a seaside dinner.",
    gr: "Στο παραλιακό μέτωπο του Ηρακλείου, η Kastella ειδικεύεται σε φρέσκο ψάρι και θαλασσινά με μεσογειακές γεύσεις και χαλαρή καλοκαιρινή ατμόσφαιρα.",
  },
  distance: "1.5 km",
  rating: 4.7,
  type: { en: "Seafood · Waterfront", gr: "Θαλασσινά · Παραλιακό" },
  bestSeason: { en: "Spring to autumn", gr: "Άνοιξη – Φθινόπωρο" },
  tip: {
    en: "Arrive before sunset for the best light over the harbour.",
    gr: "Φτάστε πριν το ηλιοβασίλεμα για την καλύτερη θέα στο λιμάνι.",
  },
  lat: 35.3417, lng: 25.1296,
  image: image2,
  gallery: [

  ],
},
{
  id: "archipelagos-seafood",
  category: "restaurants",
  name: { en: "Archipelagos Seafood Restaurant", gr: "Archipelagos Seafood Restaurant" },
  shortDescription: {
    en: "Elegant seafood dining with an island soul.",
    gr: "Κομψό seafood dining με νησιώτικο χαρακτήρα.",
  },
  description: {
    en: "Right next to Kastella on the waterfront, Archipelagos elevates the seafood experience with modern plating and a premium island aesthetic. Daily catch, fine Greek wines, and a sophisticated setting for a memorable seaside evening.",
    gr: "Δίπλα στην Kastella, το Archipelagos ανεβάζει την εμπειρία seafood με μοντέρνο plating και premium νησιώτική αισθητική. Ψάρι ημέρας, εκλεκτά κρασιά.",
  },
  distance: "1.5 km",
  rating: 4.8,
  type: { en: "Seafood · Fine Dining", gr: "Θαλασσινά · Fine Dining" },
  bestSeason: { en: "Spring to autumn", gr: "Άνοιξη – Φθινόπωρο" },
  tip: {
    en: "Note it closes earlier than neighbours — check hours before you go.",
    gr: "Κλείνει νωρίτερα από τα γύρω — ελέγξτε ωράρια πριν πάτε.",
  },
  lat: 35.3419, lng: 25.1298,
  image: image4,
  gallery: [
  
  ],
},
{
  id: "amalias-kitchen",
  category: "restaurants",
  name: { en: "Amalia's Kitchen", gr: "Amalia's Kitchen" },
  shortDescription: {
    en: "Homestyle Greek cooking in a warm, cosy setting.",
    gr: "Σπιτική ελληνική μαγειρική σε ζεστό, cozy περιβάλλον.",
  },
  description: {
    en: "Amalia's Kitchen is the kind of place that feels like a family table. Traditional recipes, friendly service, and a relaxed Mediterranean mood make it perfect for visitors looking for an unhurried, local dining experience in central Heraklion.",
    gr: "Η κουζίνα της Αμαλίας είναι σαν οικογενειακό τραπέζι. Παραδοσιακές συνταγές, φιλική εξυπηρέτηση και χαλαρή μεσογειακή ατμόσφαιρα.",
  },
  distance: "1.2 km",
  rating: 4.6,
  type: { en: "Greek · Casual", gr: "Ελληνική · Casual" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Open from midday — great for a relaxed lunch before sightseeing.",
    gr: "Ανοιχτό από μεσημέρι — ιδανικό για χαλαρό γεύμα πριν τις εκδρομές.",
  },
  lat: 35.3405, lng: 25.1314,
  image: image6 ,
  gallery: []
  
},
{
  id: "kouzeineri",
  category: "restaurants",
  name: { en: "Kouzeineri", gr: "KOUZEINERI" },
  shortDescription: {
    en: "Contemporary Greek kitchen with stylish urban flair.",
    gr: "Σύγχρονη ελληνική κουζίνα με urban στυλ.",
  },
  description: {
    en: "Set on Agios Titos square in the heart of Heraklion, Kouzeineri marries traditional Greek flavours with contemporary cooking techniques and sharp, modern presentation. A popular upscale dinner destination that stays open late.",
    gr: "Στην Αγίου Τίτου, το Kouzeineri ενώνει παραδοσιακές γεύσεις με σύγχρονες τεχνικές και έντονο, μοντέρνο plating. Δημοφιλής επιλογή για upscale βραδινό.",
  },
  distance: "1.1 km",
  rating: 4.7,
  type: { en: "Modern Greek · Upscale", gr: "Μοντέρνα Ελληνική · Upscale" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Open until midnight — ideal if you're eating on a late Greek schedule.",
    gr: "Ανοιχτό μέχρι τα μεσάνυχτα — ιδανικό για αργό ελληνικό δείπνο.",
  },
  lat: 35.3395, lng: 25.1341,
  image: image3,
  gallery: [
   
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
