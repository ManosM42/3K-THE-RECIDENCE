import * as React from "react";

export type Lang = "en" | "gr";

const STRINGS = {
  nav: {
    home: { en: "Home", gr: "Αρχική" },
    apartment: { en: "The Apartment", gr: "Το Διαμέρισμα" },
    restaurants: { en: "Restaurants", gr: "Εστιατόρια" },
    beaches: { en: "Beaches", gr: "Παραλίες" },
    attractions: { en: "Attractions", gr: "Αξιοθέατα" },
    entertainment: { en: "Entertainment", gr: "Διασκέδαση" },
    contact: { en: "Contact", gr: "Επικοινωνία" },
  },
  hero: {
    location1: { en: "HERAKLION · CRETE", gr: "ΗΡΑΚΛΕΙΟ · ΚΡΗΤΗ" },
    title1: { en: "Your Private Retreat in the Heart of Crete", gr: "Η Προσωπική σας Κατοικία στην Καρδιά της Κρήτης" },
    subtitle1: { en: "Two Bedrooms · Private Garden · One Minute from the Harbor", gr: "Δύο Υπνοδωμάτια · Ιδιωτικός Κήπος · Ένα Λεπτό από το Λιμάνι" },
    cta1: { en: "Book Your Stay", gr: "Κλείστε Θέση" },

    location2: { en: "A QUIET NEIGHBORHOOD", gr: "ΗΣΥΧΗ ΓΕΙΤΟΝΙΑ" },
    title2: { en: "Wake up steps from the seafront promenade.", gr: "Ξυπνήστε δίπλα στον παραλιακό πεζόδρομο." },
    subtitle2: { en: "Walk to the Venetian harbor along the coast.", gr: "Περπατήστε στο Ενετικό λιμάνι κατά μήκος της ακτής." },
    cta2: { en: "Discover the Apartment", gr: "Ανακαλύψτε το Διαμέρισμα" },

    location3: { en: "DESIGNED FOR REST", gr: "ΣΧΕΔΙΑΣΜΕΝΟ ΓΙΑ ΞΕΚΟΥΡΑΣΗ" },
    title3: { en: "A brand-new home with a private Mediterranean garden.", gr: "Ένα ολοκαίνουριο σπίτι με ιδιωτικό μεσογειακό κήπο." },
    subtitle3: { en: "Bright spaces, modern bathroom, fully equipped kitchen.", gr: "Φωτεινοί χώροι, σύγχρονο μπάνιο, πλήρως εξοπλισμένη κουζίνα." },
    cta3: { en: "Explore Nearby", gr: "Δείτε τη γύρω περιοχή" },
  },
  about: {
    eyebrow: { en: "THE APARTMENT", gr: "ΤΟ ΔΙΑΜΕΡΙΣΜΑ" },
    title: { en: "Brand-new. Stylish. Yours, for the stay.", gr: "Καινούριο. Προσεγμένο. Δικό σας, για τη διαμονή σας." },
    body: {
      en: "Enjoy your stay at 3K The Residence — a brand-new, stylish apartment with a lovely private garden. Bright and welcoming, perfect for families, couples, or small groups. Two comfortable bedrooms, a cozy living area, a fully equipped kitchen, and a modern bathroom — everything you need for a truly relaxing stay. Ideally located close to the city center, the port, and the airport. A quiet neighborhood with easy parking, just one minute from the seafront promenade. Walk toward the city center along the coast, soaking in the beauty of Heraklion along the way.",
      gr: "Απολαύστε τη διαμονή σας στο 3K The Residence — ένα καινούριο, προσεγμένο διαμέρισμα με όμορφο ιδιωτικό κήπο. Φωτεινός και φιλόξενος χώρος, ιδανικός για οικογένειες, ζευγάρια ή μικρές παρέες. Δύο άνετα υπνοδωμάτια, καθιστικό, πλήρως εξοπλισμένη κουζίνα και σύγχρονο μπάνιο. Κοντά στο κέντρο, το λιμάνι και το αεροδρόμιο. Ήσυχη γειτονιά, εύκολο πάρκινγκ, ένα λεπτό από τον παραλιακό δρόμο.",
    },
    stats: [
      { value: 2, label: { en: "Bedrooms", gr: "Υπνοδωμάτια" } },
      { value: 4, label: { en: "Guests", gr: "Επισκέπτες" } },
      { value: 1, label: { en: "Min to Port", gr: "Λεπτό στο Λιμάνι" } },
    ],
  },
  findUs: {
    title: { en: "Find Us", gr: "Βρείτε μας" },
    sub: { en: "Quiet neighborhood · 1 min from the seafront · Easy parking", gr: "Ήσυχη γειτονιά  ·  Εύκολο πάρκινγκ" },
  },
  contact: {
    title: { en: "Reserve Your Stay", gr: "Κάντε την Κράτησή σας" },
    sub: { en: "Tell us your dates — we'll be in touch within 24 hours.", gr: "Πείτε μας τις ημερομηνίες σας — θα επικοινωνήσουμε εντός 24 ωρών." },
    name: { en: "Full Name", gr: "Ονοματεπώνυμο" },
    email: { en: "Email", gr: "Email" },
    phone: { en: "Phone (optional)", gr: "Τηλέφωνο (προαιρετικό)" },
    checkin: { en: "Check-in", gr: "Άφιξη" },
    checkout: { en: "Check-out", gr: "Αναχώρηση" },
    guests: { en: "Guests", gr: "Επισκέπτες" },
    message: { en: "Message", gr: "Μήνυμα" },
    submit: { en: "Send Inquiry", gr: "Αποστολή" },
    success: { en: "Thank you. We received your inquiry.", gr: "Ευχαριστούμε. Το αίτημά σας ελήφθη." },
    error: { en: "Something went wrong. Please try again.", gr: "Κάτι πήγε στραβά. Δοκιμάστε ξανά." },
  },
  common: {
    explore: { en: "Explore", gr: "Δείτε" },
    viewDetails: { en: "View Details", gr: "Λεπτομέρειες" },
    back: { en: "Back", gr: "Πίσω" },
    distance: { en: "Distance from 3K", gr: "Απόσταση από 3K" },
    type: { en: "Type", gr: "Τύπος" },
    bestSeason: { en: "Best Season", gr: "Καλύτερη Εποχή" },
    tip: { en: "Insider Tip", gr: "Συμβουλή" },
    gallery: { en: "Gallery", gr: "Φωτογραφίες" },
    map: { en: "Location", gr: "Τοποθεσία" },
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: typeof STRINGS };
const I18nCtx = React.createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "gr") setLangState(saved);
  }, []);
  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  }, []);
  return <I18nCtx.Provider value={{ lang, setLang, t: STRINGS }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n outside provider");
  return ctx;
}

export const pick = <T,>(obj: { en: T; gr: T }, lang: Lang) => obj[lang];
