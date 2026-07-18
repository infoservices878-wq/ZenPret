// ─────────────────────────────────────────────────────────────────────────────
// FRANÇAIS — Source de vérité
// Couvre : Home, Navbar, Footer, et tous les composants home/
// Toute nouvelle clé doit être ajoutée ici EN PREMIER
// puis reproduite dans en.ts / de.ts / es.ts / it.ts / pt.ts
// ─────────────────────────────────────────────────────────────────────────────

export const fr = {

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home:      "Accueil",
    loans:     "Nos Prêts",
    about:     "À Propos",
    contact:   "Contact",
    comment:   "Comment ça marche",
    simulator: "Simulateur",
    loanTypes: {
      personnel:     "Prêt Personnel",
      professionnel: "Prêt Professionnel",
      conso:         "Prêt Consommation",
      etudiant:      "Prêt Étudiant",
      auto:          "Prêt Auto",
      rachat:        "Rachat de Crédit",
    },
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    badge:        "Réponse en moins de 2 minutes",
    titleLine1:   "Financez",
    titleHighlight:"vos projets",
    titleLine2:   "simplement.",
    subtitle:     "Simulez votre prêt en quelques secondes, obtenez une réponse immédiate.",
    subtitleBold: "Transparent, rapide, sans engagement.",
    cta1:         "Simuler mon prêt",
    cta2:         "Découvrir les prêts",
    trustBadges: {
      instant:  "Réponse immédiate",
      secure:   "Données sécurisées",
      clients:  "+12 000 clients",
    },
    statsCard: {
      rateLabel:   "Taux à partir de",
      rateCompete: "Compétitif",
      rateSub:     "TAEG · Sous conditions",
      minLabel:    "Montant min.",
      maxLabel:    "Montant max.",
      secureTitle: "100% sécurisé",
      secureSub:   "Vos données protégées",
      clientsCount:"12 000+",
      clientsSub:  "clients satisfaits",
    },
  },

  // ── Hero Simulator ───────────────────────────────────────────────────────────
  heroSimulator: {
    badge:        "Simulateur de prêt",
    titleBefore:  "Financez",
    titleHighlight:"ce qui compte",
    titleAfter:   "vraiment.",
    subtitle:     "Voiture, travaux, études ou voyage — obtenez une estimation en temps réel, sans engagement.",
    projects: {
      travaux: "Travaux",
      auto:    "Auto",
      etudes:  "Études",
      voyage:  "Voyage",
      mariage: "Mariage",
      sante:   "Santé",
    },
    stats: {
      rate:    "3%",
      rateLabel:    "TAEG dès",
      unlock:  "48h",
      unlockLabel:  "Déblocage",
      online:  "100%",
      onlineLabel:  "En ligne",
    },
    card: {
      title:       "Votre simulation",
      badge:       "Gratuit · Sans engagement",
      amountLabel: "Montant souhaité",
      durationLabel:"Durée de remboursement",
      monthlyLabel: "Mensualité estimée",
      interestLabel:"Coût total intérêts",
      rateNote:    "TAEG fixe indicatif : 3% · Simulation non contractuelle",
      nofees:      "Faible frais de dossier",
      instant:     "Réponse immédiate",
      cta:         "Trouver mon crédit",
      legal:       "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
    },
  },

  // ── Popular Projects ─────────────────────────────────────────────────────────
  popularProjects: {
    badge:    "Vos projets de vie",
    title:    "Donnez vie à vos projets",
    subtitle: "Des solutions de financement pensées pour chaque étape de votre vie.",
    cta:      "Simuler mon prêt gratuitement",
    ctaSub:   "Sans engagement · Réponse en moins de 2 minutes",
    learnMore:"En savoir plus",
    projects: [
      {
        title:       "Acheter une voiture",
        description: "Financez votre véhicule neuf ou d'occasion avec un taux compétitif.",
        tag:         "Dès 3%",
      },
      {
        title:       "Faire des travaux",
        description: "Rénovez votre maison avec un financement flexible et rapide.",
        tag:         "Jusqu'à 75 000€",
      },
      {
        title:       "Partir en voyage",
        description: "Réalisez le voyage dont vous rêvez sans attendre.",
        tag:         "Réponse immédiate",
      },
      {
        title:       "Financer des études",
        description: "Investissez dans votre avenir avec un prêt étudiant sur mesure.",
        tag:         "Taux préférentiel",
      },
      {
        title:       "Organiser un mariage",
        description: "Préparez votre grand jour en toute sérénité.",
        tag:         "Faible frais de dossier",
      },
    ],
  },

  // ── Loan Products ────────────────────────────────────────────────────────────
  loanProducts: {
    badge:    "Nos produits",
    title:    "Nos solutions de financement",
    subtitle: "Survolez une carte pour voir une estimation instantanée de votre mensualité.",
    cta:      "Comparer toutes nos offres",
    example:  "Exemple",
    perMonth: "/ mois estimé",
    seeOffer: "Voir l'offre",
    products: [
      { title: "Prêt personnel",    description: "Financez n'importe quel projet de vie sans justificatif."        },
      { title: "Prêt professionnel",description: "Développez votre activité avec un financement flexible."         },
      { title: "Prêt conso",        description: "Réalisez vos achats avec une solution simple et rapide."         },
      { title: "Prêt étudiant",     description: "Financez vos études et investissez dans votre avenir."           },
      { title: "Prêt auto",         description: "Achetez votre véhicule neuf ou d'occasion au meilleur taux."    },
      { title: "Rachat de crédit",  description: "Regroupez vos crédits et allégez vos mensualités."              },
    ],
  },

  // ── Highlighted Project (slider) ─────────────────────────────────────────────
  highlightedProject: {
    badge: "Projets à la une",
    title: "Quel est votre prochain projet ?",
    noCommit: "Sans engagement · Gratuit",
    trustBadges: {
      rating:  "+200 000 clients",
      secure:  "100% sécurisé",
    },
    proofs: {
      rating: "Noté 4.8/5 par nos clients",
      speed:  "Réponse en 2 minutes",
      secure: "Données 100% sécurisées",
    },
    slides: [
      {
        title:       "Achetez la voiture de vos rêves",
        subtitle:    "Prêt auto",
        description: "Neuf ou d'occasion, obtenez un financement rapide avec un taux compétitif. Réponse en moins de 2 minutes.",
        cta:         "Simuler mon prêt auto",
        tag:         "Dès 3,9% TAEG",
      },
      {
        title:       "Transformez votre maison",
        subtitle:    "Travaux & rénovation",
        description: "Cuisine, salle de bain, extension… Financez vos travaux jusqu'à 75 000€ avec des mensualités adaptées.",
        cta:         "Financer mes travaux",
        tag:         "Jusqu'à 75 000€",
      },
      {
        title:       "Le monde vous appartient",
        subtitle:    "Voyage & évasion",
        description: "Bali, Islande, Japon… Ne laissez plus le budget freiner vos aventures. Partez maintenant, remboursez sereinement.",
        cta:         "Financer mon voyage",
        tag:         "Réponse immédiate",
      },
      {
        title:       "Investissez dans votre avenir",
        subtitle:    "Études & formation",
        description: "Master, école de commerce, formation pro — accédez aux meilleures formations sans contrainte financière.",
        cta:         "Financer mes études",
        tag:         "Taux préférentiel",
      },
    ],
  },

  // ── Mission Section ──────────────────────────────────────────────────────────
  mission: {
    badge:      "Fab Finance & Vous",
    title:      "Le financement qui",
    titleHighlight: "fait la différence",
    text1:      "Chez Fab Finance, nous mettons notre expertise au service de vos projets de vie. Prêt personnel, crédit consommation, prêt auto ou rachat de crédit : des solutions simples, transparentes et adaptées à chaque situation.",
    text2:      "Notre mission est de rendre le financement plus accessible grâce à des outils digitaux innovants et à un accompagnement humain à chaque étape.",
    cta:        "Découvrir notre mission",
    stats: {
      clients:     "+200 000",
      clientsLabel:"projets financés",
      rating:      "4.8",
      ratingLabel: "Avis clients",
    },
    pillars: [
      { title: "Rapidité",        text: "Réponse en moins de 2 minutes, déblocage des fonds en 48h."                    },
      { title: "Transparence",    text: "Zéro frais cachés. Chaque euro est expliqué avant signature."                   },
      { title: "Accompagnement",  text: "Des conseillers humains disponibles à chaque étape de votre projet."            },
      { title: "Inclusion",       text: "Nos solutions sont pensées pour tous les profils, sans discrimination."          },
    ],
  },

  // ── Why Choose Us ────────────────────────────────────────────────────────────
  whyChooseUs: {
    badge:    "Nos engagements",
    title:    "Pourquoi choisir",
    titleHighlight: "Fab Finance ?",
    subtitle: "Technologie et expertise humaine réunies pour une expérience de financement simple, rapide et fiable.",
    items: [
      {
        title:      "Réponse rapide",
        desc:       "Obtenez une réponse de principe en quelques minutes. Pas d'attente, pas de paperasse inutile.",
        stat:       "2 min",
        statLabel:  "réponse de principe",
      },
      {
        title:      "100% sécurisé",
        desc:       "Vos données sont chiffrées et protégées par des technologies bancaires de dernière génération.",
        stat:       "256-bit",
        statLabel:  "chiffrement SSL",
      },
      {
        title:      "Accompagnement humain",
        desc:       "Nos conseillers dédiés vous guident à chaque étape, de la simulation à la signature.",
        stat:       "7j/7",
        statLabel:  "conseillers disponibles",
      },
      {
        title:      "Taux compétitifs",
        desc:       "Des solutions transparentes adaptées à votre profil. Zéro frais cachés, zéro mauvaise surprise.",
        stat:       "3%",
        statLabel:  "TAEG à partir de",
      },
    ],
    metrics: [
      { value: "+200 000", label: "projets financés"    },
      { value: "48h",      label: "déblocage des fonds" },
      { value: "4.8/5",    label: "satisfaction client" },
      { value: "0€",       label: "frais de dossier"    },
    ],
  },

  // ── Trust Section ────────────────────────────────────────────────────────────
  trust: {
    badge:    "Preuve sociale",
    title:    "Ils nous font",
    titleHighlight: "confiance",
    subtitle: "Des milliers de clients font confiance à Fab Finance pour financer leurs projets personnels et professionnels.",
    certifiedBy: "Reconnu et certifié par",
    stats: [
      { value: "+200 000", label: "projets financés"     },
      { value: "4.8 / 5",  label: "satisfaction clients" },
      { value: "48h",      label: "délai de déblocage"   },
      { value: "100%",     label: "plateforme sécurisée" },
    ],
    reviews: [
      {
        name: "Sophie Martin",
        role: "Prêt personnel · 12 000€",
        text: "Demande ultra simple et réponse en quelques minutes. J'ai obtenu mon financement en moins de 48h. Je recommande les yeux fermés !",
      },
      {
        name: "Lucas Bernard",
        role: "Prêt auto · 18 000€",
        text: "Interface claire et transparente. La simulation m'a permis de comprendre immédiatement le coût réel de mon crédit. Aucune mauvaise surprise.",
        featured: true,
        featuredLabel: "Coup de ❤️",
      },
      {
        name: "Claire Dupont",
        role: "Travaux · 25 000€",
        text: "Service client vraiment professionnel et disponible. Ils m'ont accompagnée de A à Z pour financer ma rénovation. Merci Fab Finance !",
      },
    ],
  },

  // ── FAQ Section ──────────────────────────────────────────────────────────────
  faq: {
    badge:       "FAQ",
    title:       "Questions fréquentes",
    subtitle:    "Tout ce que vous devez savoir avant de faire votre demande.",
    notFound:    "Vous ne trouvez pas votre réponse ?",
    teamReply:   "Notre équipe répond en moins de 2h en semaine.",
    contactCta:  "Nous contacter",
    items: [
      {
        q: "Combien de temps pour obtenir une réponse ?",
        a: "Vous recevez une réponse de principe en moins de 2 minutes après votre simulation en ligne. Une fois votre dossier complet soumis, la décision définitive intervient sous 24 à 48 heures.",
      },
      {
        q: "Quels documents sont nécessaires ?",
        a: "Selon votre situation : une pièce d'identité, vos 3 derniers bulletins de salaire ou justificatifs de revenus, un justificatif de domicile récent et votre RIB. Tout se fait en ligne, sans paperasse.",
      },
      {
        q: "Puis-je rembourser mon prêt par anticipation ?",
        a: "Oui, vous pouvez rembourser partiellement ou totalement votre crédit à tout moment. Des indemnités de remboursement anticipé peuvent s'appliquer selon les conditions contractuelles.",
      },
      {
        q: "Mes données sont-elles sécurisées ?",
        a: "Absolument. Toutes vos informations sont chiffrées en SSL 256-bit et nous sommes conformes au RGPD. Vos données ne sont jamais revendues à des tiers.",
      },
      {
        q: "Y a-t-il des frais de dossier ?",
        a: "Oui. Fab Finance facture des frais de dossier qui sont très faibles.  La simulation est gratuite et sans engagement. Vous ne payez que les intérêts définis dans votre contrat.",
      },
      {
        q: "Quel est le montant maximum que je peux emprunter ?",
        a: "Selon le type de prêt, vous pouvez emprunter jusqu'à 75 000 € pour un prêt personnel, et jusqu'à 100 000 € pour un prêt professionnel. Le montant accordé dépend de votre profil et de votre capacité de remboursement.",
      },
    ],
  },

  // ── Final CTA ────────────────────────────────────────────────────────────────
  finalCta: {
    badge:       "Simulation gratuite · Sans engagement",
    title:       "Prêt à concrétiser",
    titleHighlight: "votre projet ?",
    subtitle1:   "Rejoignez",
    subtitle2:   "+200 000 clients",
    subtitle3:   "qui nous font confiance. Faites votre demande en 2 minutes et obtenez une réponse de principe immédiate.",
    cta1:        "Demander un prêt maintenant",
    cta2:        "Parler à un conseiller",
    badges: {
      speed:    "Réponse en 2 minutes",
      secure:   "100% sécurisé",
      clients:  "+200 000 clients satisfaits",
    },
    legal: "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. Fab Finance — ORIAS n° 14 001 728.",
  },

  // ── Simulator page ───────────────────────────────────────────────────────────
  simulator: {
    hero: {
      badge:          "100% sécurisé · Sans engagement",
      title:          "Demandez votre",
      titleHighlight: "prêt",
      subtitle:       "Réponse de principe immédiate · Dossier confidentiel · Faible frais de dossier",
    },
    card: {
      title:         "Simulateur",
      amountLabel:   "Montant",
      durationLabel: "Durée",
      totalInterest: "Total des intérêts",
      debtRatio:     "Taux d'endettement",
      rateNote:      "TAEG fixe indicatif : 3%",
    },
    reassurance: [
      "Vos données sont chiffrées (SSL 256-bit)",
      "Réponse de principe en moins de 2 minutes",
      "Faible frais de dossier · Sans engagement",
    ],
    result: {
      approvedBadge: "Demande pré-approuvée",
      approvedTitle: "Félicitations ! 🎉",
      approvedText:  "Votre profil correspond à nos critères. Un conseiller va vous contacter sous 24h pour finaliser votre dossier.",
      recapTitle:    "Récapitulatif",
      recapMonthly:  "Mensualité",
      pendingBadge:  "Dossier en cours d'analyse",
      pendingTitle:  "Dossier reçu",
      pendingText:   "Votre dossier nécessite une étude approfondie. Vous recevrez une réponse par email d'ici 48h.",
      retry:         "Faire une autre simulation",
    },
    debtRatioFull:      "Taux d'endettement estimé",
    debtRatioThreshold: "Seuil recommandé : 33%",
    debtRatioWarning:   "⚠️ Votre taux dépasse les 33% recommandés. Votre dossier sera étudié au cas par cas.",
    debtRatioOk:        "✓ Votre taux d'endettement est dans la norme recommandée (< 33%).",
    steps: ["Votre projet", "Identité", "Situation", "Adresse"],
    form: {
      step1: {
        title: "Votre projet",
        desc:  "Dites-nous ce que vous souhaitez financer.",
        loanTypeLabel: "Type de crédit",
        loanTypeOptions: ["Prêt Personnel", "Prêt Professionnel", "Prêt Auto", "Prêt Étudiant", "Consommation", "Rachat de crédit"],
        amountLabel:   "Montant (€)",
        durationLabel: "Durée (mois)",
      },
      step2: {
        title: "Informations personnelles",
        desc:  "Vos informations sont 100% confidentielles et sécurisées.",
      },
      step3: {
        title: "Situation professionnelle",
        desc:  "Ces informations nous permettent d'évaluer votre dossier.",
        statusLabel:       "Situation",
        statusPlaceholder: "Sélectionner",
        statusOptions: ["Salarié(e)", "Indépendant(e) / Freelance", "Fonctionnaire", "Étudiant(e)", "Retraité(e)", "Sans emploi"],
        incomeLabel:   "Revenu mensuel net (€)",
        expensesLabel: "Charges mensuelles (€)",
      },
      step4: {
        title: "Votre adresse",
        desc:  "Dernière étape avant l'analyse de votre dossier.",
        addressLabel: "Adresse",
        cityLabel:    "Ville",
        zipLabel:     "Code postal",
        countryLabel: "Pays",
        rgpd1: "En soumettant ce formulaire, vous acceptez notre",
        rgpd2: "et le traitement de vos données conformément au RGPD.",
      },
      continue:  "Continuer",
      analyzing: "Analyse en cours…",
      submit:    "Soumettre ma demande",
      errors: {
        email:            "Email invalide",
        phone:            "Numéro invalide",
        loanType:         "Type de crédit requis",
        amountMin:        "Montant minimum 500 €",
        durationMin:      "Durée minimum 6 mois",
        income:           "Revenu invalide",
        employmentStatus: "Situation professionnelle requise",
        expenses:         "Charges invalides",
        address:          "Adresse requise",
        city:             "Ville requise",
        zipCode:          "Code postal invalide",
        country:          "Pays requis",
      },
    },
  },

  // ── How it works ─────────────────────────────────────────────────────────────
  howItWorks: {
    badge:     "Processus 100% transparent",
    title:     "Comment obtenir votre prêt ?",
    subtitle:  "De la simulation au versement des fonds, découvrez chaque étape.",
    steps:     "6 étapes simples",
    journey:   "Le parcours Fab Finance",
    guarantee: "Nos engagements",
    whyUs:     "Pourquoi choisir Fab Finance ?",
    cta:       "Démarrer ma simulation",
    ctaSub:    "Gratuit · Sans engagement · Réponse en 2 minutes",

    hero: {
      titleLine1: "Comment obtenir",
      titleLine2: "votre prêt ?",
      subtitle:   "De la simulation au versement des fonds, découvrez chaque étape de notre processus. Simple, rapide et entièrement accompagné par nos conseillers.",
      stats: [
        { value: "2 min",    label: "pour simuler"     },
        { value: "24h",      label: "réponse dossier"  },
        { value: "14 jours", label: "rétractation"     },
        { value: "Faible",   label: "frais de dossier" },
      ],
    },
    stepWord: "Étape",
    stepsList: [
      {
        title: "Simulez votre prêt", subtitle: "Moins de 2 minutes",
        desc: "Indiquez le montant souhaité, la durée de remboursement et votre projet. Notre simulateur calcule instantanément votre mensualité estimée et le coût total de votre crédit.",
        details: ["Aucun engagement à cette étape", "Résultat instantané, 100% gratuit", "Modifiez les paramètres librement"],
      },
      {
        title: "Complétez votre demande", subtitle: "5 à 10 minutes",
        desc: "Renseignez votre situation personnelle et professionnelle dans notre formulaire sécurisé. Nos conseillers ont besoin de ces informations pour étudier votre dossier au mieux.",
        details: ["Formulaire 100% en ligne et sécurisé", "Données chiffrées SSL 256-bit", "Sauvegarde automatique à chaque étape"],
      },
      {
        title: "Étude de votre dossier", subtitle: "Réponse sous 24h",
        desc: "Un conseiller Fab Finance dédié analyse votre dossier et vous contacte par téléphone ou WhatsApp pour affiner votre offre et répondre à toutes vos questions.",
        details: ["Conseiller personnel attitré", "Contact par téléphone ou WhatsApp", "Analyse humaine, pas automatisée"],
      },
      {
        title: "Recevez votre offre", subtitle: "Sous 48h",
        desc: "Vous recevez votre offre de prêt personnalisée par email avec toutes les conditions détaillées : TAEG, mensualités, durée, et coût total. Prenez le temps de lire.",
        details: ["Offre détaillée et transparente", "TAEG et conditions claires", "Délai de réflexion sans pression"],
      },
      {
        title: "Signez votre contrat", subtitle: "Signature électronique",
        desc: "Si l'offre vous convient, vous disposez d'un délai légal de rétractation de 14 jours. À l'issue de ce délai, confirmez votre acceptation par signature électronique sécurisée.",
        details: ["Délai légal de rétractation 14 jours", "Signature électronique certifiée eIDAS", "Zéro déplacement, 100% en ligne"],
      },
      {
        title: "Recevez vos fonds", subtitle: "Virement sous 24–48h",
        desc: "Une fois votre contrat signé et le délai de rétractation écoulé, les fonds sont versés directement sur votre compte bancaire. Votre projet peut démarrer !",
        details: ["Virement bancaire sécurisé", "Fonds disponibles sous 24 à 48h", "Notification par SMS et email"],
      },
    ],
    guarantees: [
      { title: "Rapidité",       desc: "Réponse de principe en 2 minutes, fonds sous 48h après signature." },
      { title: "Sécurité",       desc: "Vos données sont chiffrées SSL 256-bit et jamais revendues à des tiers." },
      { title: "Accompagnement", desc: "Un conseiller dédié vous suit de la simulation au versement des fonds." },
      { title: "Transparence",   desc: "Zéro frais cachés, faible frais de dossier. Le TAEG est affiché dès le départ." },
    ],
    reviews: {
      ratingValue: "4,8 / 5",
      ratingSub:   "Basé sur +12 000 avis clients vérifiés",
      items: [
        "Tout s'est passé exactement comme décrit. Mon conseiller était joignable à chaque étape.",
        "Du formulaire au virement, 4 jours seulement. Incroyable pour un prêt de cette taille.",
        "Enfin un organisme de crédit qui explique clairement chaque étape sans jargon.",
      ],
    },
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Combien de temps dure le processus complet ?", a: "De la simulation au versement des fonds, le processus prend généralement entre 5 et 10 jours ouvrés, en tenant compte du délai légal de rétractation de 14 jours. En cas d'urgence, contactez-nous directement par WhatsApp." },
      { q: "Quels documents dois-je préparer ?", a: "Pièce d'identité, 3 derniers bulletins de salaire (ou justificatifs de revenus), justificatif de domicile récent et RIB. Tout se transmet en ligne, en quelques clics." },
      { q: "Ma demande engage-t-elle à quoi que ce soit ?", a: "Non. La simulation et la demande de dossier sont totalement gratuites et sans engagement. Vous n'êtes engagé qu'après avoir signé votre contrat, et vous disposez encore d'un délai de rétractation de 14 jours." },
      { q: "Puis-je suivre l'avancement de mon dossier ?", a: "Oui. Votre conseiller Fab Finance vous tient informé à chaque étape par téléphone, email ou WhatsApp. Vous pouvez le contacter directement à tout moment." },
    ],
    finalCta: {
      badge:    "Prêt à commencer ?",
      title:    "Simulez votre prêt maintenant",
      subtitle: "Gratuit, sans engagement, réponse en 2 minutes. Votre conseiller vous contacte sous 24h.",
      talkToAdvisor: "Parler à un conseiller",
      responseTime:  "Réponse en 2 min",
    },
  },

  // ── About ────────────────────────────────────────────────────────────────────
  about: {
    hero: {
      badge:          "Fondée en 2016 · Paris",
      title:          "Réinventer le crédit",
      titleHighlight: "pour tous",
      subtitle:       "Fab Finance s'est donnée pour mission de rendre le financement accessible, transparent et équitable. Fini la complexité bancaire traditionnelle.",
    },
    stats: [
      { label: "Clients satisfaits",       sub: "depuis 2016"           },
      { label: "Projets financés",         sub: "en volume cumulé"      },
      { label: "Note TrustPilot",          sub: "+12 000 avis vérifiés" },
      { label: "Délai moyen de versement", sub: "après accord"          },
    ],
    orias: {
      badge: "Agréé ORIAS",
      sub:   "Intermédiaire en crédit",
    },
    missionSection: {
      eyebrow:        "Notre mission",
      title:          "Le financement",
      titleHighlight: "autrement",
      text1: "Nous croyons que chaque projet mérite d'être financé simplement. C'est pourquoi nous avons construit une plateforme qui allie la puissance de la technologie à la chaleur de l'accompagnement humain.",
      text2: "Notre engagement : zéro frais cachés, zéro jargon bancaire, et une réponse de principe en moins de 2 minutes — 7 jours sur 7.",
      features: [
        "Simulation gratuite et sans engagement",
        "Conseillers disponibles 7j/7",
        "Déblocage des fonds en 48h",
        "Faible frais de dossier",
      ],
      cta: "Commencer ma simulation",
    },
    valuesSection: {
      eyebrow: "Ce qui nous anime",
      title:   "Nos valeurs",
      items: [
        { title: "L'Humain au centre",   text: "La technologie nous aide à être rapides, mais ce sont nos conseillers qui font la différence par leur écoute et leur disponibilité." },
        { title: "Transparence totale",  text: "Pas de jargon, pas de frais cachés. Vous savez exactement ce que vous payez dès le premier jour, sans mauvaise surprise." },
        { title: "Excellence du service",text: "Nous visons la perfection dans chaque interaction pour vous offrir la meilleure expérience de financement possible." },
        { title: "Impact positif",       text: "Nous finançons prioritairement les projets de transition énergétique et d'amélioration de l'habitat durable." },
      ],
    },
    timelineSection: {
      eyebrow: "Notre histoire",
      title:   "8 ans d'innovation",
      events: [
        "Fondation de Fab Finance à Paris avec une mission claire : démocratiser le crédit.",
        "Lancement du simulateur en ligne — réponse de principe en moins de 2 minutes.",
        "Franchissement du cap des 100 000 clients et obtention de l'agrément ORIAS.",
        "Expansion européenne et lancement des prêts professionnels et étudiants.",
        "1 million de clients satisfaits et 5 milliards d'euros de projets financés.",
      ],
    },
    finalCta: {
      title:    "Rejoignez l'aventure",
      subtitle: "Plus d'un million de clients nous font déjà confiance. À votre tour de concrétiser vos projets avec Fab Finance.",
    },
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    hero: {
      badge:    "Nous sommes là pour vous",
      title:    "Contactez",
      titleHighlight: "notre équipe",
      subtitle: "Nos experts sont disponibles 7j/7 pour répondre à toutes vos questions sur vos projets de financement.",
    },
    info: [
      { title: "Siège social" },
      { title: "Téléphone", sub: "Lun–Ven, 9h–18h · Gratuit" },
      { title: "Email",     sub: "Réponse sous 24h" },
    ],
    quickLinksTitle: "Accès rapides",
    availability: "Nos conseillers sont disponibles et répondent généralement en moins de 2 heures en semaine.",
    form: {
      title:    "Envoyez-nous un message",
      subtitle: "Tous les champs marqués sont obligatoires",
      firstName:            "Prénom",
      firstNamePlaceholder: "Jean",
      lastName:             "Nom",
      lastNamePlaceholder:  "Dupont",
      emailPlaceholder:     "jean.dupont@email.com",
      phoneOptional:        "(optionnel)",
      phonePlaceholder:     "06 12 34 56 78",
      subjectPlaceholder:   "Sélectionnez un sujet",
      subjectOptions: [
        "Demande d'information",
        "Suivi de dossier",
        "Simulation de prêt",
        "Réclamation",
        "Partenariat",
        "Autre",
      ],
      messageLabel:       "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ? Décrivez votre projet ou votre question...",
      rgpd1:     "En soumettant ce formulaire, vous acceptez notre",
      rgpdLink:  "politique de confidentialité",
      rgpd2:     ". Vos données sont traitées conformément au RGPD.",
      sending:      "Envoi en cours…",
      successTitle: "Message envoyé !",
      successDesc:  "Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais, sous 24h maximum.",
      errors: {
        firstName: "Le prénom est requis",
        lastName:  "Le nom est requis",
        email:     "Adresse email invalide",
        subject:   "Le sujet est requis",
        message:   "Le message doit contenir au moins 10 caractères",
      },
    },
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline: "FabFinance vous accompagne dans tous vos projets de vie avec des solutions de financement simples, transparentes et adaptées.",
    ctaTitle:   "Prêt à financer votre projet ?",
    ctaSub:     "Simulation gratuite · Réponse en 2 minutes · Sans engagement",
    ctaButton:  "Simuler mon prêt",
    rights:     "Tous droits réservés.",
    legal:      "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
    links: {
      loans:   "Nos prêts",
      company: "Entreprise",
      legal:   "Légal",
    },
    legalLinks: {
      mentions:  "Mentions légales",
      privacy:   "Politique de confidentialité",
      howItWorks:"Comment ça marche",
      cookies:   "Gestion des cookies",
    },
  },

  // ── Common ───────────────────────────────────────────────────────────────────
  common: {
    simulate:  "Simuler mon prêt",
    learnMore: "En savoir plus",
    back:      "Retour",
    free:      "Gratuit",
    noFees:    "Sans frais",
    secure:    "100% sécurisé",
    instant:   "Réponse instantanée",
    noCommit:  "Sans engagement",
    monthly:   "mois",
    euros:     "€",
  },
}

export type Translation = typeof fr