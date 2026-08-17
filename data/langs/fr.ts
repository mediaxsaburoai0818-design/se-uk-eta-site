import type { LangContent } from "./_schema";
import { FACTS as F } from "./_schema";

// フランス語。8月対象シートのベルギー(No.12)・スイス(No.13)がフランス語圏のため必要。
// フランス本国はカナダeTA側の対象で、当サイト(UK ETA)の対象ではない。
const fr: LangContent = {
  code: "fr",
  label: "Français",
  siteName: "Guide UK ETA",
  tagline: "L'autorisation de voyage pour le Royaume-Uni, étape par étape",
  homeTitle: `UK ETA : ${F.fee} et une réponse en général sous 1 jour | Guide en français 2026`,
  homeDescription:
    `Guide en français sur l'UK ETA : elle coûte ${F.fee}, reste valable ${F.validYears} ans et permet des séjours de ${F.staySixMonths} mois maximum par voyage. Comment en faire la demande sur le site officiel GOV.UK.`,
  homeLead:
    `Pour voyager au Royaume-Uni, il vous faut une UK ETA. Elle coûte ${F.fee} sur le site officiel, la réponse arrive en général sous 1 jour, et l'autorisation reste valable ${F.validYears} ans pour plusieurs voyages.`,
  nav: { info: "À propos de l'ETA", entry: "Voyager au Royaume-Uni", faq: "Questions fréquentes" },
  officialLinkLabel: "Faire la demande sur le site officiel GOV.UK",
  updatedLabel: "Mis à jour",
  pages: {
    "what-is-eta": {
      slug: "qu-est-ce-que-l-eta",
      title: "Qu'est-ce que l'UK ETA : une autorisation préalable obligatoire, pas un visa | 2026",
      description: `L'UK ETA est une autorisation de voyage électronique à demander avant le départ. Ce n'est pas un visa : tout se fait en ligne, elle coûte ${F.fee} et elle est rattachée à votre passeport.`,
      h1: "Qu'est-ce que l'UK ETA",
      lead: "L'UK ETA (Electronic Travel Authorisation) se demande avant le voyage. Elle ne remplace pas votre passeport et ce n'est pas un visa.",
      sections: [
        { h: "Ce n'est pas un visa", p: [
          "L'ETA est une autorisation préalable destinée aux voyageurs qui n'ont pas besoin de visa pour le Royaume-Uni. Le contrôle a lieu avant l'embarquement : sans ETA, la compagnie aérienne peut vous refuser.",
          "Contrairement à un visa, il n'y a ni rendez-vous ni entretien. Tout se fait en ligne." ] },
        { h: "Rattachée à votre passeport", p: [
          `L'autorisation est liée au passeport utilisé pour la demande. Si vous changez de passeport, vous devez en demander une nouvelle, même s'il reste du temps sur les ${F.validYears} ans.`,
          "Rien à imprimer : à la frontière, il suffit de présenter le même passeport." ] },
        { h: "Qui doit en faire la demande", p: [
          "Les voyageurs des pays exemptés de visa, donc la Belgique et la Suisse également, que ce soit pour le tourisme, une visite familiale, un déplacement professionnel ou un transit.",
          "Les enfants et les bébés doivent aussi avoir leur propre ETA." ] },
      ],
    },
    application: {
      slug: "comment-faire-la-demande",
      title: "Comment demander l'UK ETA : en ligne et en quelques minutes | Guide 2026",
      description: `Les étapes pour demander l'UK ETA via le site officiel ou l'application GOV.UK : passeport, photo du visage, coordonnées et paiement de ${F.fee}.`,
      h1: "Comment demander l'UK ETA",
      lead: "La demande se fait entièrement en ligne, sur le site officiel GOV.UK ou dans l'application officielle. Vous n'avez à vous déplacer nulle part.",
      sections: [
        { h: "Ce qu'il faut préparer", p: [
          "Le passeport avec lequel vous voyagez, une photo de votre visage (vous pouvez la prendre avec votre téléphone), une adresse e-mail et une carte de paiement.",
          "Les informations doivent correspondre exactement au passeport. Un nom orthographié différemment est la cause de refus la plus fréquente." ] },
        { h: "Les étapes", p: [
          `Rendez-vous sur le site officiel GOV.UK ou téléchargez l'application officielle, scannez la page de données de votre passeport, prenez la photo, répondez aux questions et payez ${F.fee}.`,
          `Ensuite, vous attendez la décision. Elle arrive en général sous 1 jour, mais prévoyez jusqu'à ${F.decisionDays} jours ouvrés.` ] },
        { h: "À vérifier avant d'envoyer", p: [
          "Que le numéro de passeport et la date d'expiration sont bien recopiés, que le visage est net sur la photo, et que l'adresse e-mail est correcte : c'est là qu'arrivera la décision.",
          "Faites la demande à l'avance, pas le jour du départ." ] },
      ],
    },
    fee: {
      slug: "tarif",
      title: `Tarif de l'UK ETA : ${F.fee} sur le site officiel | Attention aux intermédiaires`,
      description: `L'UK ETA coûte ${F.fee} sur GOV.UK. C'est un paiement unique pour ${F.validYears} ans et plusieurs voyages. Comment repérer les sites qui ajoutent une commission.`,
      h1: "Combien coûte l'UK ETA",
      lead: `Le tarif officiel est de ${F.fee} et vous le payez une seule fois. L'autorisation reste ensuite valable ${F.validYears} ans, pour plusieurs voyages.`,
      sections: [
        { h: "Un seul paiement", p: [
          `Il n'y a ni frais annuels ni renouvellement intermédiaire : vous payez ${F.fee} lors de la demande et l'autorisation est valable ${F.validYears} ans, ou jusqu'à l'expiration du passeport.`,
          "Le montant est également prélevé en cas de refus, car il couvre le traitement du dossier." ] },
        { h: "Les sites qui demandent plus", p: [
          "Certains intermédiaires ajoutent leur propre commission au montant officiel. Ils ne sont pas mandatés par les autorités britanniques et font exactement ce que vous pouvez faire vous-même.",
          `Si un site demande nettement plus que ${F.fee}, la différence est leur commission.` ] },
        { h: "Reconnaître le site officiel", p: [
          "L'adresse officielle se trouve sous le domaine GOV.UK. Méfiez-vous des sites qui se présentent comme « partenaire officiel » ou « agent agréé » : les autorités britanniques n'habilitent aucun tiers à déposer les demandes.",
        ] },
      ],
    },
    "status-check": {
      slug: "verifier-le-statut",
      title: "Vérifier le statut de votre UK ETA : où et avec quoi | 2026",
      description: "Comment vérifier si votre UK ETA est approuvée : la décision arrive par e-mail et le statut se consulte avec votre numéro de passeport.",
      h1: "Vérifier le statut de votre UK ETA",
      lead: "La décision est communiquée par e-mail. Si vous ne l'avez pas reçue, vous pouvez consulter le statut avec les données du passeport utilisé pour la demande.",
      sections: [
        { h: "Regardez d'abord vos e-mails", p: [
          "L'approbation est envoyée à l'adresse indiquée lors de la demande. Vérifiez aussi le dossier des indésirables avant de conclure à un problème.",
          "Aucun document à imprimer n'est délivré : l'autorisation est enregistrée sur votre passeport." ] },
        { h: "Ce dont vous avez besoin", p: [
          "Le numéro du passeport utilisé pour la demande et vos données personnelles telles que vous les avez saisies.",
          "Si vous avez fait la demande avec un autre passeport, la vérification ne la trouvera pas." ] },
        { h: "Si cela prend plus de temps", p: [
          `La plupart des décisions arrivent sous 1 jour, mais prévoyez jusqu'à ${F.decisionDays} jours ouvrés. Si le délai s'allonge et que le départ approche, contactez les canaux officiels.`,
        ] },
      ],
    },
    validity: {
      slug: "validite",
      title: `UK ETA : valable ${F.validYears} ans ou jusqu'à l'expiration du passeport | 2026`,
      description: `L'UK ETA est valable ${F.validYears} ans à compter de l'approbation et couvre plusieurs voyages. Avec un nouveau passeport, il faut refaire la demande.`,
      h1: "Combien de temps l'UK ETA est-elle valable",
      lead: `L'autorisation est valable ${F.validYears} ans, ou jusqu'à l'expiration du passeport si celle-ci intervient avant.`,
      sections: [
        { h: "Plusieurs voyages inclus", p: [
          `Pendant ces ${F.validYears} ans, vous pouvez vous rendre au Royaume-Uni aussi souvent que vous le souhaitez, tant que chaque séjour ne dépasse pas ${F.staySixMonths} mois.`,
          "Il n'est pas nécessaire de refaire une demande pour chaque voyage." ] },
        { h: "En cas de nouveau passeport", p: [
          "L'autorisation est liée au passeport utilisé pour la demande. Si vous le renouvelez, il faut en demander une nouvelle, même s'il reste de la validité.",
        ] },
        { h: "Retrouver la date", p: [
          "La date figure dans l'e-mail d'approbation. Si vous ne l'avez plus, consultez le statut avec les données de votre passeport.",
        ] },
      ],
    },
    "processing-time": {
      slug: "delai-de-traitement",
      title: `UK ETA : réponse en général sous 1 jour (jusqu'à ${F.decisionDays} jours ouvrés) | 2026`,
      description: `La décision sur l'UK ETA arrive en général sous 1 jour, mais prévoyez jusqu'à ${F.decisionDays} jours ouvrés. Quand faire la demande.`,
      h1: "Combien de temps prend l'UK ETA",
      lead: `Dans la plupart des cas, la réponse arrive sous 1 jour. Il reste toutefois conseillé de prévoir jusqu'à ${F.decisionDays} jours ouvrés.`,
      sections: [
        { h: "Quand faire la demande", p: [
          "Faites-la dès que votre vol est réservé, et non la veille du départ. Si un contrôle supplémentaire est nécessaire, le délai s'allonge.",
          "Sans autorisation approuvée, la compagnie aérienne peut vous refuser l'embarquement." ] },
        { h: "Pourquoi cela prend parfois plus de temps", p: [
          "Les demandes qui doivent être examinées manuellement (par exemple en cas de réponse « oui » aux questions) prennent plus de temps que celles traitées automatiquement.",
        ] },
        { h: "Si rien n'arrive", p: [
          "Vérifiez le dossier des indésirables et l'exactitude de l'adresse indiquée. Consultez ensuite le statut avec les données de votre passeport.",
        ] },
      ],
    },
    "required-documents": {
      slug: "documents-necessaires",
      title: "Documents pour l'UK ETA : passeport, photo et carte de paiement | 2026",
      description: "Ce qu'il faut pour l'UK ETA : le passeport avec lequel vous voyagez, une photo du visage, une adresse e-mail et un moyen de paiement.",
      h1: "Quels documents sont nécessaires",
      lead: "La demande est simple : passeport, photo et moyen de paiement. Aucun justificatif de voyage n'est demandé.",
      sections: [
        { h: "Passeport", p: [
          "Ce doit être le passeport avec lequel vous voyagez, et il doit être valide. Recopiez les informations exactement telles qu'elles figurent.",
        ] },
        { h: "Photo du visage", p: [
          "Vous pouvez la prendre avec votre téléphone pendant la demande. Le visage doit être bien visible, sans lunettes de soleil ni rien qui le masque, sur un fond uni.",
        ] },
        { h: "E-mail et paiement", p: [
          `La décision arrive par e-mail, l'adresse doit donc être exacte. Le paiement de ${F.fee} se fait à la fin, par carte.`,
        ] },
      ],
    },
    "stay-duration": {
      slug: "duree-de-sejour",
      title: `Avec l'UK ETA, jusqu'à ${F.staySixMonths} mois par voyage | 2026`,
      description: `L'UK ETA permet des séjours allant jusqu'à ${F.staySixMonths} mois par voyage, pour le tourisme, une visite ou des affaires. Ce qu'elle ne permet pas.`,
      h1: "Combien de temps pouvez-vous rester",
      lead: `Par voyage, vous pouvez rester jusqu'à ${F.staySixMonths} mois au Royaume-Uni. L'autorisation couvre le tourisme, les visites familiales, les affaires et le transit.`,
      sections: [
        { h: "Ce qui est autorisé", p: [
          "Le tourisme, rendre visite à de la famille ou à des amis, des réunions et des activités professionnelles ponctuelles, ainsi que le transit par le Royaume-Uni.",
        ] },
        { h: "Ce qui n'est pas autorisé", p: [
          "Vous ne pouvez pas travailler pour un employeur britannique ni vous y installer. D'autres voies existent pour cela.",
          "Les études de longue durée ne sont pas couvertes non plus : l'ETA concerne les séjours courts." ] },
        { h: "Plusieurs voyages", p: [
          `Vous pouvez voyager plusieurs fois tant que l'autorisation est valable, mais chaque séjour est limité à ${F.staySixMonths} mois et les séjours ne peuvent pas s'enchaîner indéfiniment.`,
        ] },
      ],
    },
    faq: {
      slug: "questions-frequentes",
      title: "UK ETA : réponses courtes sur le tarif, la validité et le délai | FAQ 2026",
      description: `Questions fréquentes sur l'UK ETA : combien elle coûte (${F.fee}), combien de temps elle est valable (${F.validYears} ans), quel est le délai et que faire en cas de refus.`,
      h1: "Questions fréquentes sur l'UK ETA",
      lead: "Réponses courtes aux questions les plus posées. Chaque point renvoie à l'explication complète.",
      sections: [
        { h: `Combien ça coûte ? ${F.fee}`, p: [`Le tarif officiel sur GOV.UK est de ${F.fee}, à payer une seule fois pour ${F.validYears} ans.`] },
        { h: `Valable combien de temps ? ${F.validYears} ans`, p: ["Ou jusqu'à l'expiration du passeport, si elle intervient avant. Elle couvre plusieurs voyages."] },
        { h: "Quel délai ? En général 1 jour", p: [`Prévoyez jusqu'à ${F.decisionDays} jours ouvrés et ne vous y prenez pas à la dernière minute.`] },
        { h: "Et en cas de refus ?", p: ["Il n'y a pas de recours possible. Il faudrait alors demander un visa correspondant à l'objet du voyage."] },
        { h: "Les enfants en ont-ils besoin ?", p: ["Oui. Chacun, y compris les bébés et les enfants, doit avoir sa propre autorisation."] },
      ],
    },
    about: {
      slug: "a-propos-de-ce-guide",
      title: "À propos de ce guide UK ETA | Qui nous sommes et comment nous travaillons",
      description: "Qui publie ce guide en français sur l'UK ETA, d'où viennent les informations et comment nous traitons les corrections.",
      h1: "À propos de ce guide",
      lead: "Ce guide explique l'UK ETA en français. Ce n'est pas un site officiel des autorités britanniques et nous ne déposons pas de demandes.",
      sections: [
        { h: "Ce n'est pas un site officiel", p: ["Nous ne sommes pas liés aux autorités britanniques. La demande se fait toujours sur le site officiel GOV.UK ou dans l'application officielle."] },
        { h: "D'où viennent les informations", p: ["Les montants, délais et conditions proviennent de ce que publie GOV.UK. Pour les chiffres susceptibles de changer, nous indiquons la date de mise à jour."] },
        { h: "Corrections", p: ["Si vous constatez une information obsolète ou erronée, signalez-le nous. Nous la corrigerons."] },
      ],
    },
    privacy: {
      slug: "confidentialite",
      title: "Politique de confidentialité | Guide UK ETA",
      description: "Quelles données ce site collecte et à quelles fins.",
      h1: "Politique de confidentialité",
      lead: "Cette page explique comment les données sont traitées sur ce site.",
      sections: [
        { h: "Quelles données", p: ["La lecture du guide ne nécessite aucune donnée personnelle. Nous ne déposons pas de demandes d'ETA et ne recevons donc ni données de passeport ni données de paiement."] },
        { h: "Statistiques", p: ["Nous utilisons des statistiques d'usage agrégées pour améliorer le contenu. Elles ne servent pas à identifier des personnes."] },
      ],
    },
    terms: {
      slug: "informations-legales",
      title: "Informations légales | Guide UK ETA",
      description: "Conditions d'utilisation de ce guide d'information sur l'UK ETA.",
      h1: "Informations légales",
      lead: "Conditions d'utilisation du contenu de ce site.",
      sections: [
        { h: "Caractère informatif", p: ["Le contenu est fourni à titre d'information. Les conditions officielles peuvent changer ; vérifiez-les sur GOV.UK avant votre demande."] },
        { h: "Responsabilité", p: ["Nous ne sommes pas responsables des décisions fondées uniquement sur ce guide. Chaque demande est tranchée par les autorités britanniques."] },
      ],
    },
  },
};

export default fr;
