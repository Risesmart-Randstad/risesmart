// Généré depuis Questionnaire_Auto_Evaluation_Label_PME_2026.xlsx
const PILLARS = [
 "Gouvernance & Dialogue social",
 "Impact local",
 "QVCT (Santé & Sécurité)",
 "Gestion des carrières",
 "Environnement",
 "Chaîne de valeur & Innovation"
];
const QUESTIONS = [
 {
  "id": 1,
  "pillar": 0,
  "label": "Engagement RSE de la direction",
  "text": "La direction a-t-elle formalisé sa politique RSE avec au moins une action phare par pilier et des responsabilités clairement désignées ?",
  "proofs": "Charte RSE formalisée, lettre d'engagement de la direction, fiches de poste avec missions RSE, feuille de route."
 },
 {
  "id": 2,
  "pillar": 0,
  "label": "Pilotage et reporting RSE",
  "text": "Suivez-vous régulièrement un tableau de bord d'indicateurs ESG (social, environnement, gouvernance) pour mesurer vos progrès ?",
  "proofs": "Tableau de bord RSE actif, indicateurs clés mesurés annuellement, revue de direction dédiée RSE."
 },
 {
  "id": 3,
  "pillar": 0,
  "label": "Qualité du dialogue social",
  "text": "Consultez-vous régulièrement vos collaborateurs et instances représentatives (CSE) au-delà des obligations légales ?",
  "proofs": "Procès-verbaux CSE, enquêtes de satisfaction internes, ateliers participatifs, bilans sociaux partagés."
 },
 {
  "id": 4,
  "pillar": 1,
  "label": "Ancrage économique territorial",
  "text": "Favorisez-vous prioritairement l'emploi local, la présence d'activités en France et les approvisionnements régionaux ?",
  "proofs": "Part des achats régionaux/nationaux, maintien des sites de production en France, recrutements locaux."
 },
 {
  "id": 5,
  "pillar": 1,
  "label": "Engagement sociétal et mécénat",
  "text": "Soutenez-vous des initiatives locales (associations, événements, écoles, projets environnementaux ou solidaires) ?",
  "proofs": "Conventions de mécénat, dons aux associations locales, journées de solidarité entreprise, parrainages."
 },
 {
  "id": 6,
  "pillar": 1,
  "label": "Partage de savoir-faire",
  "text": "Développez-vous des partenariats locaux (écoles, clusters, réseaux) pour transmettre vos compétences et accueillir des talents ?",
  "proofs": "Accueil régulier d'alternants/stagiaires locaux, interventions écoles, adhésion aux réseaux économiques locaux."
 },
 {
  "id": 7,
  "pillar": 2,
  "label": "Prévention des risques et sécurité",
  "text": "Votre Document Unique (DUERP) est-il à jour et décliné en actions concrètes de prévention (TMS, RPS, EPI) ?",
  "proofs": "DUERP mis à jour < 1 an, plan d'action sécurité formalisé, fiches de postes sécurité, équipements ergonomiques."
 },
 {
  "id": 8,
  "pillar": 2,
  "label": "Aménagement et bien-être au travail",
  "text": "Avez-vous déployé des mesures concrètes d'amélioration des postes, de l'ergonomie ou de l'organisation du travail ?",
  "proofs": "Charte télétravail/droit à la déconnexion, matériel ergonomique, aménagement des espaces de pause/repos."
 },
 {
  "id": 9,
  "pillar": 2,
  "label": "Suivi de la santé au travail",
  "text": "Analysez-vous systématiquement les accidents du travail, presqu'accidents et arrêts pour adapter vos règles ?",
  "proofs": "Registre presqu'accidents, analyse de l'absentéisme, commissions sécurité, actions correctives documentées."
 },
 {
  "id": 10,
  "pillar": 3,
  "label": "Formation continue",
  "text": "Proposez-vous un plan de formation annuel permettant à l'ensemble des salariés de développer leurs compétences ?",
  "proofs": "Plan de développement des compétences à jour, taux d'accès à la formation > 50%, budgets dédiés."
 },
 {
  "id": 11,
  "pillar": 3,
  "label": "GPEC et évolutions internes",
  "text": "Disposez-vous d'un suivi des parcours professionnels favorisant la promotion interne et la polyvalence ?",
  "proofs": "Entretiens professionnels réalisés à 100%, cartographie des compétences, matrice de polyvalence, promotions internes."
 },
 {
  "id": 12,
  "pillar": 3,
  "label": "Tutorat et intégration",
  "text": "Un parcours d'accueil et d'accompagnement par parrainage/tutorat est-il structuré pour sécuriser la prise de poste ?",
  "proofs": "Livret d'accueil formalisé, tuteur/parrain désigné pour chaque arrivant, rapport d'étonnement post-intégration."
 },
 {
  "id": 13,
  "pillar": 4,
  "label": "Stratégie Climat et bilan GES",
  "text": "Réalisez-vous un bilan de vos émissions de gaz à effet de serre (GES) assorti d'objectifs chiffrés de réduction ?",
  "proofs": "Bilan GES / Carbone réalisé (Scopes 1, 2, 3), plan de décarbonation formalisé, objectifs 2030 chiffrés."
 },
 {
  "id": 14,
  "pillar": 4,
  "label": "Éco-conception et impact produits",
  "text": "Analysez-vous le cycle de vie de vos produits/services pour réduire leurs emballages et améliorer leur recyclabilité ?",
  "proofs": "Démarche d'Analyse de Cycle de Vie (ACV), emballages 100% recyclables ou biosourcés, réduction du suremballage."
 },
 {
  "id": 15,
  "pillar": 4,
  "label": "Réduction des déchets et gaspillage",
  "text": "Avez-vous mis en place un plan de sobriété (énergie, eau) et de valorisation de vos déchets (démarche 3R) ?",
  "proofs": "Tri 5 flux effectif, plan de sobriété énergétique, valorisation des déchets de production > 70%, suivi des consommations."
 },
 {
  "id": 16,
  "pillar": 5,
  "label": "Achats responsables",
  "text": "Évaluez-vous vos fournisseurs clés sur des critères RSE et intégrez-vous des clauses RSE dans vos contrats ?",
  "proofs": "Charte d'achats responsables signée, évaluations RSE des fournisseurs stratégiques, clauses RSE contractuelles."
 },
 {
  "id": 17,
  "pillar": 5,
  "label": "Éthique et transparence",
  "text": "Disposez-vous d'une charte éthique formalisée et de règles claires pour prévenir la corruption et les conflits d'intérêts ?",
  "proofs": "Code de conduite éthique, dispositif d'alerte interne, transparence de l'information consommateur/client."
 },
 {
  "id": 18,
  "pillar": 5,
  "label": "Innovation durable",
  "text": "Intégrez-vous des critères RSE dès la phase d'étude ou de conception de vos nouveaux projets, produits ou services ?",
  "proofs": "Grille d'évaluation RSE pour les nouveaux projets/R&D, démarches d'éco-innovation, produits certifiés."
 }
];
