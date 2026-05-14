// Photos Import
import image from "@/assets/peskesi.jpg";
import image2 from "@/assets/kastella.jpg";
import image3 from "@/assets/kouzineri.jpg";
import image4 from "@/assets/archipelagos.jpg";
import image5 from "@/assets/apiri.jpg";
import image6 from "@/assets/amalias.jpg";
import image7 from "@/assets/papafigos.jpg";
import image8 from "@/assets/chalali.jpg";
import enter1 from "@/assets/envy.jpg";
import enter2 from "@/assets/bowling.jpg";
import enter3 from "@/assets/lunapark.jpg";
import enter4 from "@/assets/xalavro.jpg";
import enter5 from "@/assets/swing thing.jpg";
import enter6 from "@/assets/thebitters.jpg";
import enter7 from "@/assets/bofor.jpg";
import enter8 from "@/assets/stone.jpg";
import enter9 from "@/assets/domes.jpg";
import beach from "@/assets/karteros.jpg";
import beach2 from "@/assets/ammoudara.jpg";
import beach3 from "@/assets/psaromoura.jpg";
import beach4 from "@/assets/ligaria.jpg";
import beach5 from "@/assets/kokkini.jpg";
import attra from "@/assets/knossos.jpg";
import attra2 from "@/assets/mouseio.jpeg";
import attra3 from "@/assets/koules.jpeg";
import attra4 from "@/assets/cretems.jpg";
import attra5 from "@/assets/natural.jpg";
import attra6 from "@/assets/liontaria.jpg";
import attra7 from "@/assets/loggia.jpg";
import attra8 from "@/assets/titos.jpg";
import attra9 from "@/assets/minas.jpg";
import attra10 from "@/assets/kazantzakis.jpg";

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
    distance: "4.8 km",
    rating: 4.8,
    type: { en: "Cretan · Fine Dining", gr: "Κρητική · Γκουρμέ" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: {
      en: "Ask for the apaki — smoked pork cured with mountain herbs.",
      gr: "Ζητήστε το απάκι — καπνιστό χοιρινό με βότανα.",
    },
    lat: 35.340216060873225, lng: 25.132607285295112,
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
  distance: "4.7 km",
  rating: 4.7,
  type: { en: "Mediterranean · Modern Greek", gr: "Μεσογειακή · Μοντέρνα Ελληνική" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Great choice for a creative dinner near the old town.",
    gr: "Ιδανικό για δημιουργικό δείπνο κοντά στην παλιά πόλη.",
  },
  lat: 35.33844741062669, lng: 25.131128859592522,
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
  distance: "4.9 km",
  rating: 4.9,
  type: { en: "Fine Dining · Creative Greek", gr: "Fine Dining · Δημιουργική Ελληνική" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Open from 1 pm on weekends; weekdays from 5 pm — plan accordingly.",
    gr: "Σαββατοκύριακα από 13:00, καθημερινές από 17:00 — προγραμματίστε ανάλογα.",
  },
  lat: 35.342681949400315, lng: 25.134286008312042,
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
  distance: "2.7 km",
  rating: 4.8,
  type: { en: "Traditional Greek · Taverna", gr: "Παραδοσιακή Ελληνική · Ταβέρνα" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Grab a square-facing table and order the mixed grill.",
    gr: "Πιάστε τραπέζι με θέα στην πλατεία και παραγγείλτε μικτή σχάρα.",
  },
  lat: 35.33685945643513, lng: 25.130399973624925,
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
  distance: "1.8 km",
  rating: 4.7,
  type: { en: "Seafood · Waterfront", gr: "Θαλασσινά · Παραλιακό" },
  bestSeason: { en: "Spring to autumn", gr: "Άνοιξη – Φθινόπωρο" },
  tip: {
    en: "Arrive before sunset for the best light over the harbour.",
    gr: "Φτάστε πριν το ηλιοβασίλεμα για την καλύτερη θέα στο λιμάνι.",
  },
  lat: 35.34282218631425, lng: 25.13310425707597,
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
  distance: "1.9 km",
  rating: 4.8,
  type: { en: "Seafood · Fine Dining", gr: "Θαλασσινά · Fine Dining" },
  bestSeason: { en: "Spring to autumn", gr: "Άνοιξη – Φθινόπωρο" },
  tip: {
    en: "Note it closes earlier than neighbours — check hours before you go.",
    gr: "Κλείνει νωρίτερα από τα γύρω — ελέγξτε ωράρια πριν πάτε.",
  },
  lat: 35.34280720548324, lng: 25.1329350329724,
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
  distance: "2.3 km",
  rating: 4.6,
  type: { en: "Greek · Casual", gr: "Ελληνική · Casual" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Open from midday — great for a relaxed lunch before sightseeing.",
    gr: "Ανοιχτό από μεσημέρι — ιδανικό για χαλαρό γεύμα πριν τις εκδρομές.",
  },
  lat: 35.3405420685142, lng: 25.133612281184305,
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
  distance: "2.0 km",
  rating: 4.7,
  type: { en: "Modern Greek · Upscale", gr: "Μοντέρνα Ελληνική · Upscale" },
  bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
  tip: {
    en: "Open until midnight — ideal if you're eating on a late Greek schedule.",
    gr: "Ανοιχτό μέχρι τα μεσάνυχτα — ιδανικό για αργό ελληνικό δείπνο.",
  },
  lat: 35.34046891106718, lng: 25.135475439566303,
  image: image3,
  gallery: [
   
  ],
},

// BEACHES
    {
    id: "karteros",
    category: "beaches",
    name: { en: "Karteros Beach", gr: "Παραλία Καρτερού" },
    shortDescription: {
      en: "Young and lively beach near the airport with beach bars and easy access.",
      gr: "Νεανική παραλία κοντά στο αεροδρόμιο με beach bars και εύκολη πρόσβαση.",
    },
    description: {
      en: "A youthful beach close to the airport with beach bars, sand and a lively crowd in summer. Very easy to reach from the city centre — ideal for a spontaneous afternoon dip.",
      gr: "Νεανική παραλία κοντά στο αεροδρόμιο με beach bars, άμμο και αρκετό κόσμο το καλοκαίρι. Πολύ εύκολη πρόσβαση από την πόλη.",
    },
    distance: "5.3 km",
    rating: 6.5,
    type: { en: "Sandy beach · Beach bars", gr: "Αμμώδης · Beach bars" },
    bestSeason: { en: "May – October", gr: "Μάιος – Οκτώβριος" },
    tip: {
      en: "Planes landing overhead add a surprisingly fun atmosphere.",
      gr: "Τα αεροπλάνα που προσγειώνονται προσθέτουν μια ξεχωριστή ατμόσφαιρα.",
    },
    lat: 35.33183012410901, lng: 25.199962600467465,
    image: beach,
    gallery: [],
  },
  {
    id: "ammoudara",
    category: "beaches",
    name: { en: "Ammoudara Beach", gr: "Παραλία Αμμουδάρας" },
    shortDescription: {
      en: "Vast sandy beach west of Heraklion with water sports and sunsets.",
      gr: "Τεράστια αμμώδης παραλία δυτικά με water sports και ηλιοβασίλεμα.",
    },
    description: {
      en: "A vast sandy beach west of Heraklion with organised spots, water sports and stunning sunsets. One of the most popular beaches for locals and visitors alike.",
      gr: "Τεράστια αμμώδης παραλία δυτικά του Ηρακλείου με οργανωμένα spots, water sports και πολύ ωραίο ηλιοβασίλεμα.",
    },
    distance: "6.5 km",
    rating: 4.5,
    type: { en: "Sandy beach · Water sports", gr: "Αμμώδης · Water sports" },
    bestSeason: { en: "May – October", gr: "Μάιος – Οκτώβριος" },
    tip: {
      en: "Stay for sunset — the western exposure makes it spectacular.",
      gr: "Μείνετε για το ηλιοβασίλεμα — η δυτική έκθεση το κάνει εντυπωσιακό.",
    },
    lat: 35.337504309378176, lng: 25.087553302965535,
    image: beach2,
    gallery: [],
  },
  {
    id: "psaromoura",
    category: "beaches",
    name: { en: "Psaromoura Beach", gr: "Παραλία Ψαρόμουρα" },
    shortDescription: {
      en: "Exotic hidden cove with crystal-clear water and rocks for diving.",
      gr: "Εξωτικός κρυφός κόλπος με κρυστάλλινα νερά και βράχια για βουτιές.",
    },
    description: {
      en: "A small exotic cove with incredibly clear water and rocks perfect for diving and snorkelling. One of the most postcard-worthy beaches near Heraklion.",
      gr: "Μικρός εξωτικός κόλπος με απίστευτα καθαρά νερά και βράχια για βουτιές και snorkeling. Από τις πιο καρτποσταλικές παραλίες κοντά στο Ηράκλειο.",
    },
    distance: "29.1 km",
    rating: 4.1,
    type: { en: "Cove · Snorkelling", gr: "Κόλπος · Snorkeling" },
    bestSeason: { en: "June – September", gr: "Ιούνιος – Σεπτέμβριος" },
    tip: {
      en: "Bring snorkelling gear — the underwater scenery is exceptional.",
      gr: "Φέρτε εξοπλισμό snorkeling — ο βυθός είναι εξαιρετικός.",
    },
    lat: 35.41321225454655, lng: 25.016608328086594, 
    image: beach3,
    gallery: [],
  },
  {
    id: "lygaria",
    category: "beaches",
    name: { en: "Lygaria Beach", gr: "Παραλία Λυγαριά" },
    shortDescription: {
      en: "Sheltered bay with calm waters and lush green surroundings.",
      gr: "Προστατευμένος κόλπος με ήρεμα νερά και καταπράσινο τοπίο.",
    },
    description: {
      en: "A sheltered bay with calm waters and lush green landscape all around. An excellent choice for a relaxed swim and a meal by the sea.",
      gr: "Προστατευμένος κόλπος με ήρεμα νερά και καταπράσινο τοπίο γύρω. Πολύ καλή επιλογή για χαλαρό μπάνιο και φαγητό δίπλα στη θάλασσα.",
    },
    distance: "22.9 km",
    rating: 4.6,
    type: { en: "Sheltered bay", gr: "Προστατευμένος κόλπος" },
    bestSeason: { en: "May – October", gr: "Μάιος – Οκτώβριος" },
    tip: {
      en: "The tavernas right on the beach serve fresh fish daily.",
      gr: "Οι ταβέρνες στην παραλία σερβίρουν φρέσκο ψάρι καθημερινά.",
    },
    lat: 35.3988199087793, lng: 25.027320949977454,
    image: beach4,
    gallery: [],
  },
{
    id: "kokkini-hani",
    category: "beaches",
    name: { en: "Kokkini Hani Beach", gr: "Παραλία Κόκκινη Χάνι" },
    shortDescription: {
      en: "Relaxed organised beach east of Heraklion with crystal waters.",
      gr: "Ήρεμη οργανωμένη παραλία ανατολικά του Ηρακλείου με κρυστάλλινα νερά.",
    },
    description: {
      en: "A well-loved stretch of coast just east of Heraklion, where fine sand meets clear blue water and the pace slows right down. Sunbeds, beach bars and a handful of tavernas make it an easy full-day escape from the city.",
      gr: "Αγαπημένη παραλία ανατολικά του Ηρακλείου με λεπτή άμμο, καθαρά νερά και χαλαρό ρυθμό. Ξαπλώστρες, beach bars και ταβέρνες για μια ολοκληρωμένη μέρα μακριά από την πόλη.",
    },
    distance: "12.6 km",
    rating: 4.4,
    type: { en: "Organised beach", gr: "Οργανωμένη παραλία" },
    bestSeason: { en: "May – October", gr: "Μάιος – Οκτώβριος" },
    tip: {
      en: "The tavernas along the shore serve grilled octopus fresh off the boat — don't skip it.",
      gr: "Οι ταβέρνες στην παραλία σερβίρουν χταπόδι στα κάρβουνα φρέσκο από τη βάρκα — μην το χάσετε.",
    },
    lat: 35.33207372045652, lng: 25.256214888674098,
    image: beach5,
    gallery: [],
  },

 // ATTRACTIONS
  {
    id: "knossos",
    category: "attractions",
    name: { en: "Knossos Palace", gr: "Ανάκτορο Κνωσού" },
    shortDescription: {
      en: "Europe's most important Minoan palace and birthplace of the Minotaur myth.",
      gr: "Το σημαντικότερο μινωικό ανάκτορο και η γενέτειρα του μύθου του Μινώταυρου.",
    },
    description: {
      en: "The most significant Minoan palace in Crete and one of Europe's most historic archaeological sites. Linked to the legend of the Minotaur, it reveals the extraordinary sophistication of Minoan civilisation.",
      gr: "Το σημαντικότερο μινωικό ανάκτορο της Κρήτης και ένας από τους πιο ιστορικούς αρχαιολογικούς χώρους της Ευρώπης. Συνδέεται με τον μύθο του Μινώταυρου και δείχνει τον προηγμένο πολιτισμό των Μινωιτών.",
    },
    distance: "5.8 km",
    rating: 4.8,
    type: { en: "Archaeological site", gr: "Αρχαιολογικός χώρος" },
    bestSeason: { en: "Spring / Autumn", gr: "Άνοιξη / Φθινόπωρο" },
    tip: { en: "Arrive at opening to beat the cruise ship crowds.", gr: "Φτάστε νωρίς το πρωί πριν τα κρουαζιερόπλοια." },
    lat: 35.29803130920095, lng: 25.16275486350167, 
    image: attra,
    gallery: [],
  },
  {
    id: "archaeological-museum",
    category: "attractions",
    name: { en: "Heraklion Archaeological Museum", gr: "Αρχαιολογικό Μουσείο Ηρακλείου" },
    shortDescription: {
      en: "One of Greece's finest museums, home to the Phaistos Disc and Minoan frescoes.",
      gr: "Ένα από τα κορυφαία μουσεία της Ελλάδας με μινωικά εκθέματα και τον Δίσκο της Φαιστού.",
    },
    description: {
      en: "One of Greece's finest archaeological museums, housing authentic Minoan exhibits, breathtaking frescoes and the iconic Phaistos Disc. An essential visit alongside Knossos.",
      gr: "Ένα από τα κορυφαία αρχαιολογικά μουσεία της Ελλάδας, με αυθεντικά μινωικά εκθέματα, τοιχογραφίες και τον Δίσκο της Φαιστού.",
    },
    distance: "1.6 km",
    rating: 4.8,
    type: { en: "Museum", gr: "Μουσείο" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Buy a combo ticket with Knossos to save 20%.", gr: "Πάρτε συνδυασμένο εισιτήριο με Κνωσό και γλιτώστε 20%." },
    lat: 35.33901718251801, lng: 25.137149533563537,
    image: attra2,
    gallery: [],
  },
  {
    id: "koules-fortress",
    category: "attractions",
    name: { en: "Koules Fortress", gr: "Κούλες" },
    shortDescription: {
      en: "Venetian sea-fortress at the old harbour entrance with sweeping sea views.",
      gr: "Ενετικό φρούριο στην είσοδο του παλιού λιμανιού με τρομερή θέα στη θάλασσα.",
    },
    description: {
      en: "A Venetian fortress at the entrance of the old harbour that protected Heraklion during the Venetian era. Climb the ramparts for sweeping views across the sea and the city skyline.",
      gr: "Ενετικό φρούριο στην είσοδο του παλιού λιμανιού που προστάτευε το Ηράκλειο κατά την Ενετοκρατία. Προσφέρει τρομερή θέα στη θάλασσα.",
    },
    distance: "1.5 km",
    rating: 4.6,
    type: { en: "Historic site", gr: "Ιστορικό μνημείο" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Walk the long pier behind the fort at sunset — the light is extraordinary.", gr: "Περπατήστε τη μακρά προβλήτα πίσω από τον Κούλε στο ηλιοβασίλεμα." },
    lat: 35.344641380053886, lng: 25.136893380316856,
    image: attra3,
    gallery: [],
  },
  {
    id: "historical-museum",
    category: "attractions",
    name: { en: "Historical Museum of Crete", gr: "Ιστορικό Μουσείο Κρήτης" },
    shortDescription: {
      en: "Crete's modern history from Byzantine times to World War II.",
      gr: "Η νεότερη ιστορία της Κρήτης από τα βυζαντινά χρόνια ως τον Β' Παγκόσμιο Πόλεμο.",
    },
    description: {
      en: "A museum dedicated to the modern history of Crete, spanning the Byzantine period through to World War II. Includes a reconstruction of El Greco's study and powerful exhibits on the Battle of Crete.",
      gr: "Μουσείο αφιερωμένο στη νεότερη ιστορία της Κρήτης, από τα βυζαντινά χρόνια μέχρι τον Β' Παγκόσμιο Πόλεμο. Περιλαμβάνει ανακατασκευή του γραφείου του Ελ Γκρέκο.",
    },
    distance: "2.3 km",
    rating: 4.5,
    type: { en: "Museum", gr: "Μουσείο" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Don't miss the El Greco room on the first floor.", gr: "Μην χάσετε την αίθουσα Ελ Γκρέκο στον πρώτο όροφο." },
    lat: 35.3419407934156, lng: 25.130922753733625,
    image: attra4,
    gallery: [],
  },
  {
    id: "natural-history-museum",
    category: "attractions",
    name: { en: "Natural History Museum of Crete", gr: "Φυσικό Ιστορικό Μουσείο Κρήτης" },
    shortDescription: {
      en: "Interactive museum exploring Crete's nature, geology and Mediterranean wildlife.",
      gr: "Διαδραστικό μουσείο για τη φύση, τη γεωλογία και την πανίδα της Κρήτης.",
    },
    description: {
      en: "An interactive museum presenting the nature, geology and fauna of Crete and the broader Mediterranean. Great for families, with impressive dioramas and hands-on exhibits.",
      gr: "Διαδραστικό μουσείο που παρουσιάζει τη φύση, τη γεωλογία και την πανίδα της Κρήτης και της Μεσογείου. Ιδανικό για οικογένειες.",
    },
    distance: "2.4 km",
    rating: 4.4,
    type: { en: "Museum", gr: "Μουσείο" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "The earthquake simulator is a highlight — kids love it.", gr: "Ο προσομοιωτής σεισμού είναι από τα πιο εντυπωσιακά εκθέματα." },
    lat: 35.34194082508471, lng: 25.126686332518645,
    image: attra5,
    gallery: [],
  },
  {
    id: "morosini-fountain",
    category: "attractions",
    name: { en: "Morosini Fountain", gr: "Κρήνη Μοροζίνι — Λιοντάρια" },
    shortDescription: {
      en: "Heraklion's iconic 17th-century Venetian fountain, known as 'Ta Liontaria'.",
      gr: "Το εμβληματικό ενετικό συντριβάνι του 17ου αιώνα, γνωστό ως «Λιοντάρια».",
    },
    description: {
      en: "The famous 'Lions' square of Heraklion — a 17th-century Venetian fountain and the city's historic meeting point. Surrounded by cafés and the hum of daily life, it is the true heart of the city centre.",
      gr: "Η διάσημη πλατεία «Λιοντάρια» του Ηρακλείου, ενετικό συντριβάνι του 17ου αιώνα και ιστορικό σημείο συνάντησης της πόλης.",
    },
    distance: "2.5 km",
    rating: 4.5,
    type: { en: "Landmark", gr: "Αξιοθέατο" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Grab a coffee from one of the surrounding cafés and watch the city go by.", gr: "Πιείτε καφέ σε ένα από τα γύρω καφέ και απολαύστε τη ζωή της πλατείας." },
    lat: 35.33914272402486, lng: 25.133172272410008,
    image: attra6,
    gallery: [],
  },
  {
    id: "venetian-loggia",
    category: "attractions",
    name: { en: "Venetian Loggia", gr: "Ενετική Λότζια" },
    shortDescription: {
      en: "Stunning Venetian nobles' club, now Heraklion's City Hall.",
      gr: "Εντυπωσιακό ενετικό κτήριο — πρώην λέσχη ευγενών, σήμερα Δημαρχείο.",
    },
    description: {
      en: "An impressive Venetian building that served as a club for the Venetian nobility during the occupation, and today houses the City Hall. One of the finest examples of Renaissance architecture in Crete.",
      gr: "Εντυπωσιακό ενετικό κτήριο που χρησιμοποιούνταν ως λέσχη ευγενών κατά την Ενετοκρατία και σήμερα στεγάζει το Δημαρχείο Ηρακλείου.",
    },
    distance: "2.6 km",
    rating: 4.4,
    type: { en: "Historic building", gr: "Ιστορικό κτήριο" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Step inside the courtyard — the architecture is best appreciated from within.", gr: "Μπείτε στην αυλή — η αρχιτεκτονική φαίνεται καλύτερα από μέσα." },
    lat: 35.33983200002686, lng: 25.134003295418594,
    image: attra7,
    gallery: [],
  },
  {
    id: "agios-titos",
    category: "attractions",
    name: { en: "Agios Titos Church", gr: "Ναός Αγίου Τίτου" },
    shortDescription: {
      en: "Historic church with Byzantine and Venetian influences, dedicated to Crete's patron saint.",
      gr: "Ιστορικός ναός με βυζαντινές και ενετικές επιρροές, αφιερωμένος στον προστάτη της Κρήτης.",
    },
    description: {
      en: "A historic church bearing Byzantine and Venetian influences, dedicated to Saint Titos, the patron saint of Crete. Originally built in the 10th century, it has been rebuilt several times and remains one of the city's most revered landmarks.",
      gr: "Ιστορικός ναός με βυζαντινές και ενετικές επιρροές, αφιερωμένος στον προστάτη άγιο της Κρήτης. Χτισμένος τον 10ο αιώνα, έχει ανακατασκευαστεί πολλές φορές.",
    },
    distance: "2.7 km",
    rating: 4.5,
    type: { en: "Church", gr: "Εκκλησία" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "The church houses the skull relic of Saint Titos — a deeply venerated object.", gr: "Ο ναός φυλάσσει την κάρα του Αγίου Τίτου, ένα πολύτιμο ιερό λείψανο." },
    lat: 35.34013831574252, lng: 25.13457997034743,
    image: attra8,
    gallery: [],
  },
  {
    id: "agios-minas-cathedral",
    category: "attractions",
    name: { en: "Agios Minas Cathedral", gr: "Καθεδρικός Ναός Αγίου Μηνά" },
    shortDescription: {
      en: "One of Greece's largest cathedrals — an imposing landmark of Heraklion.",
      gr: "Ένας από τους μεγαλύτερους ναούς της Ελλάδας με επιβλητική αρχιτεκτονική.",
    },
    description: {
      en: "One of the largest cathedrals in Greece, with imposing architecture and immense religious significance for Crete. The interior features exceptional frescoes and a grand chandelier. A must-see even for non-religious visitors.",
      gr: "Ένας από τους μεγαλύτερους ναούς της Ελλάδας με επιβλητική αρχιτεκτονική και σημαντικό θρησκευτικό ρόλο για την Κρήτη. Εξαιρετικές τοιχογραφίες και μεγαλοπρεπής πολυέλαιος.",
    },
    distance: "2.4 km",
    rating: 4.6,
    type: { en: "Cathedral", gr: "Καθεδρικός ναός" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Visit on a Sunday morning to hear the cathedral choir.", gr: "Επισκεφθείτε Κυριακή πρωί για να ακούσετε τη χορωδία." },
    lat: 35.337659368037954, lng: 25.13095071987684,
    image: attra9,
    gallery: [],
  },
  {
    id: "kazantzakis-museum",
    category: "attractions",
    name: { en: "Nikos Kazantzakis Museum", gr: "Μουσείο Νίκου Καζαντζάκη" },
    shortDescription: {
      en: "Dedicated to Crete's greatest writer — manuscripts, personal items and a journey through his life.",
      gr: "Αφιερωμένο στον μεγάλο Κρητικό συγγραφέα — χειρόγραφα, αντικείμενα και η ζωή του.",
    },
    description: {
      en: "A museum dedicated to Nikos Kazantzakis, Crete's greatest writer and author of Zorba the Greek. Houses manuscripts, personal belongings and detailed exhibits tracing his extraordinary life and literary legacy.",
      gr: "Μουσείο αφιερωμένο στον σπουδαίο Κρητικό συγγραφέα Νίκο Καζαντζάκη, με χειρόγραφα, προσωπικά αντικείμενα και πληροφορίες για το έργο του.",
    },
    distance: "15.5 km",
    rating: 4.5,
    type: { en: "Museum", gr: "Μουσείο" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Located in Myrtia village — combine it with a drive through the Cretan countryside.", gr: "Βρίσκεται στη Μυρτιά — συνδυάστε το με βόλτα στην κρητική ύπαιθρο." },
    lat: 35.234924535913976, lng: 25.20955428095438,
    image: attra10,
    gallery: [],
  },

  // ENTERTAINMENT
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
    distance: "3.1 km",
    rating: 4.6,
    type: { en: "Lounge club", gr: "Lounge club" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Sit on the outdoor terrace facing the harbor.", gr: "Καθίστε στην εξωτερική βεράντα προς το λιμάνι." },
    lat: 35.341118656819944, lng: 25.1190955669926,
    image: enter1,
    gallery: [],
  },
  {
    id: "bowling",
    category: "entertainment",
    name: { en: "Iraklio Bowling Center", gr: "Iraklio Bowling Center" },
    shortDescription: {
      en: "Classic bowling & arcade spot in Katsambas — great for groups.",
      gr: "Κλασικό σημείο για παρέες στον Κατσαμπά με bowling και arcade games.",
    },
    description: {
      en: "Bowling lanes, arcade games, burgers and coffee all under one roof in Katsambas. A great way to kick off the evening before heading out for drinks.",
      gr: "Bowling, arcade games, burgers και καφέ στον Κατσαμπά. Πολύ καλή επιλογή για να ξεκινήσει η βραδιά πριν το ποτό.",
    },
    distance: "1.0 km",
    rating: 4.3,
    type: { en: "Bowling & arcade", gr: "Bowling & arcade" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Book a lane in advance on weekends.", gr: "Κλείστε lane εκ των προτέρων τα Σαββατοκύριακα." },
    lat: 35.33967569873855, lng: 25.14312012282288,
    image: enter2,
    gallery: [],
  },
  {
    id: "luna-park-katerina",
    category: "entertainment",
    name: { en: "Luna Park Katerina", gr: "Luna Park Katerina" },
    shortDescription: {
      en: "Seaside luna park next to Heraklion harbour.",
      gr: "Μικρό λούνα παρκ δίπλα στο λιμάνι του Ηρακλείου.",
    },
    description: {
      en: "A small amusement park right by Heraklion harbour, perfect for an evening stroll with sea views and a summery vibe.",
      gr: "Ιδανικό για βραδινή βόλτα με θέα τη θάλασσα και καλοκαιρινό vibe δίπλα στο λιμάνι.",
    },
    distance: "1.0 km",
    rating: 4.1,
    type: { en: "Amusement park", gr: "Λούνα παρκ" },
    bestSeason: { en: "May – September", gr: "Μάιος – Σεπτέμβριος" },
    tip: { en: "Best enjoyed at sunset with a walk along the harbour.", gr: "Ιδανικό στο ηλιοβασίλεμα με βόλτα στο λιμάνι." },
    lat: 35.340752176643925, lng: 25.14439685431772,
    image: enter3,
    gallery: [],
  },
  {
    id: "xalavro",
    category: "entertainment",
    name: { en: "Xalavro Open Bar", gr: "Xalavro Open Bar" },
    shortDescription: {
      en: "Iconic cocktail bar in a neoclassical building with open-air courtyard.",
      gr: "Από τα πιο γνωστά cocktail bars σε ανακαινισμένο νεοκλασικό κτήριο.",
    },
    description: {
      en: "One of the city's most recognisable cocktail bars, set inside a renovated neoclassical building with an open-air courtyard, DJs and premium cocktails. A favourite of both tourists and locals.",
      gr: "Σε ανακαινισμένο νεοκλασικό κτήριο με open-air αυλή, DJs και premium cocktails. Αγαπημένο τουριστών και ντόπιων.",
    },
    distance: "1.8 km",
    rating: 4.5,
    type: { en: "Cocktail bar", gr: "Cocktail bar" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "The courtyard fills up fast — arrive early for a good spot.", gr: "Η αυλή γεμίζει γρήγορα — ελάτε νωρίς." },
    lat: 35.33905749856544, lng: 25.13522283629178,
    image: enter4,
    gallery: [],
  },
  {
    id: "swing-thing",
    category: "entertainment",
    name: { en: "Swing Thing", gr: "Swing Thing" },
    shortDescription: {
      en: "Vintage cocktail bar with jazz, funk and urban cool.",
      gr: "Stylish cocktail bar με vintage αισθητική και jazz/funk μουσική.",
    },
    description: {
      en: "Stylish cocktail bar with vintage aesthetics, jazz and funk music, and a calm urban atmosphere. The go-to spot for a quality drink in the city centre.",
      gr: "Vintage αισθητική, jazz/funk μουσική και ήρεμο urban περιβάλλον. Ιδανικό για πιο ποιοτικό ποτό στο κέντρο.",
    },
    distance: "2.3 km",
    rating: 4.6,
    type: { en: "Cocktail bar", gr: "Cocktail bar" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Ask for the seasonal cocktail menu — it changes regularly.", gr: "Ζητήστε το εποχικό μενού cocktails." },
    lat: 35.339927627126286, lng: 25.133698379476666,
    image: enter5,
    gallery: [],
  },
  {
    id: "bitters-bar",
    category: "entertainment",
    name: { en: "The Bitters Bar", gr: "The Bitters Bar" },
    shortDescription: {
      en: "Speakeasy-style bar with creative cocktails and city nightlife energy.",
      gr: "Speakeasy-style cocktail bar με δημιουργικά ποτά.",
    },
    description: {
      en: "Speakeasy-style cocktail bar with inventive drinks and a buzzy city nightlife feel. A great first stop for groups before heading to a club.",
      gr: "Δημιουργικά ποτά και πιο city nightlife αίσθηση. Πολύ καλό για παρέες και πρώτο ποτό πριν το club.",
    },
    distance: "2.8 km",
    rating: 4.5,
    type: { en: "Speakeasy bar", gr: "Speakeasy" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Great for groups — the bar team handles large orders with ease.", gr: "Ιδανικό για παρέες — η ομάδα χειρίζεται μεγάλες παραγγελίες άψογα." },
    lat: 35.338970513017706, lng: 25.132783493915596,
    image: enter6,
    gallery: [],
  },
  {
    id: "bofor",
    category: "entertainment",
    name: { en: "Bofor Music Stage", gr: "Bofor Music Stage" },
    shortDescription: {
      en: "Live music stage and club with intense late-night energy.",
      gr: "Music stage και club με live events και έντονη νυχτερινή ενέργεια.",
    },
    description: {
      en: "A music stage and club hosting live events and parties with a high-energy atmosphere. It usually fills up after midnight.",
      gr: "Live events, parties και πιο έντονη νυχτερινή ενέργεια. Συνήθως γεμίζει αργά μετά τις 12.",
    },
    distance: "1.9 km",
    rating: 4.4,
    type: { en: "Music club", gr: "Music club" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Check their social media for upcoming live events.", gr: "Δείτε τα social media τους για live events." },
    lat: 35.340732619508984, lng: 25.138045491644466,
    image: enter7,
    gallery: [],
  },
  {
    id: "stone-project",
    category: "entertainment",
    name: { en: "Stone Project", gr: "Stone Project" },
    shortDescription: {
      en: "Modern cocktail bar with industrial design and a young crowd.",
      gr: "Μοντέρνο cocktail bar με industrial design και νεανικό κοινό.",
    },
    description: {
      en: "A modern cocktail bar with a relaxed atmosphere, industrial design aesthetic and a predominantly young clientele.",
      gr: "Relaxed ατμόσφαιρα, industrial design και αρκετά νεανικό κοινό στο κέντρο της πόλης.",
    },
    distance: "1.7 km",
    rating: 4.4,
    type: { en: "Cocktail bar", gr: "Cocktail bar" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "The industrial interior is great — grab a spot near the bar.", gr: "Πιάστε θέση κοντά στο μπαρ για την καλύτερη εμπειρία." },
    lat: 35.33891962127242, lng: 25.135329329456138,
    image: enter8,
    gallery: [],
  },
  {
    id: "domes",
    category: "entertainment",
    name: { en: "Domes All Day Cafe Bar", gr: "Domes All Day Cafe Bar" },
    shortDescription: {
      en: "Upscale all-day bar with cocktails, sushi and rooftop vibes.",
      gr: "Πολυτελές all-day spot με cocktails, sushi και rooftop αισθητική.",
    },
    description: {
      en: "A premium all-day venue offering cocktails, sushi, music and rooftop-style aesthetics. One of the most popular spots in the city for an evening drink and a photo-worthy atmosphere.",
      gr: "Cocktails, sushi, μουσική και rooftop αισθητική. Πολύ δημοφιλές για βραδινό ποτό και instagramική ατμόσφαιρα.",
    },
    distance: "2.4 km",
    rating: 4.6,
    type: { en: "All-day bar", gr: "All-day bar" },
    bestSeason: { en: "Year-round", gr: "Όλο τον χρόνο" },
    tip: { en: "Reserve for weekend evenings — it gets packed after 10 PM.", gr: "Κάντε κράτηση τα Σαββατοκύριακα — γεμίζει μετά τις 10." },
    lat: 35.340027672874484, lng: 25.133837132181274,
    image: enter9,
    gallery: [],
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
