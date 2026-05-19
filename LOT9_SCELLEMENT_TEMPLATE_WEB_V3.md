# SCELLEMENT TEMPLATE WEB V3 · LOT 9

**Version scellée** · V3.1 Web System
**Date de scellement** · 19 mai 2026
**Émis par** · DirCom Way To Freedom · Claude Design
**Périmètre** · template *Way To Freedom — Web System V3* fixé en l'état pour intégration Astro Phase 3
**Documents amont** · `SCELLEMENT_TEMPLATE_ECOSYSTEME_V3-0c.md` (canvas V3.0c) · `INPUTS_PHASE_2_LOT9.md`

---

## 1. Ce que scelle ce document

Ce document fige le **template web responsive de l'écosystème Way To Freedom**, complémentaire au scellement canvas V3.0c ·

> **Doctrine responsive + library web components + maquettes des 5 sites.**
> Échelle typographique fluide `clamp()` · 6 breakpoints CSS / 3 maquettes validation · doctrine d'interactions tenues · library de 8 composants × 3 breakpoints · maquettes complètes des 5 entités (19 pages + responsive snapshots) · footer écosystème invariant nuit chaude à 5 colonnes équivalentes · garde-fous accessibilité WCAG AA.

Le template peut être livré tel quel à **Claude Code** pour intégration Astro + Decap CMS headless dans une session Phase 3 dédiée.

**Ce que ce scellement ne couvre PAS** ·

- Build Astro + déploiement Hostinger + configuration CMS
- Migration de contenu WordPress UAGB (essencelensoi.fr actuel) vers le nouveau CMS
- Configuration GBP + préservation SEO Médoc
- Photothèque réelle (placeholders typographiques honnêtes, swap par Céline / Sébastien en passe dédiée)
- 7 variantes Bon Cadeau imprimable A4 (mini-template PageTransactionnelle, passe dédiée à ouvrir)
- Bascule DNS production

→ Périmètre de la **Phase 3 Claude Code intégration** ouvert en parallèle.

---

## 2. Architecture des 5 sites/sous-pages scellée

| Site / sous-page | Statut | Scope CSS | Palette dominante |
|---|---|---|---|
| **waytofreedom.fr** maison-mère | Refonte V3 | `.scope-wtf` | `--wtf-light #FAF7F2` + `--wtf-ink #1F1A14` + `--wtf-dore-bas #B8884A` |
| **waytofreedom.fr/clarification-interieure** SÉSÂMES | Sous-page caractérisée | `.scope-ses` | `--ses-light #FAF7F2` + `--ses-ink #0F1218` + `--ses-gold #C9A24E` |
| **waytofreedom.fr/revenu-complementaire-independant** Voie | Sous-page caractérisée | `.scope-voie` | `--voie-cream #F6F1E8` + `--voie-night #1F3B4D` + `--voie-copper #B0732E` |
| **essencelensoi.fr** EES | Refonte structurelle | `.scope-ees` | `--ees-cream #F6F1E8` + `--ees-rose #E8D2C6` + `--ees-gold #B8884A` |
| **aloeveraexcellence.com** AVE | Refonte hub publiant | `.scope-ave` | `--ave-cream #F6F1E8` + `--ave-aloes #5E7A4E` + `--ave-gold #C9A24E` |

**Bascule chromatique** · sèche au routing (rechargement de route, pas de transition au scroll). Classe CSS scope sur `<body>` redéfinit les variables CSS de l'entité. Une seule règle de bascule par entité, source unique `lot9-web-system.css`.

**Footer écosystème** · **INVARIANT** sur `--wtf-nuit-chaude #2E2A22` quelle que soit la page parente. **5 colonnes équivalentes** — WTF + SES + EES + Voie + AVE — même typographie, même taille, même filet. Aucune ne domine. Sceau papillon-corps WTF central + signature italique *« Écosystème porté par Céline & Sébastien Marcadet »*. *« La page peut être EES rose poudré, mais le pied dit maison commune. »*

---

## 3. Échelle typographique fluide scellée

Six paliers `clamp()` qui interpolent linéairement entre une borne basse (mobile 375) et une borne haute (desktop 1440+) selon la largeur de viewport ·

```css
--type-display: clamp(2.5rem, 5vw + 1rem, 6rem);            /* 40 → 96 */
--type-h1:      clamp(2rem,   3vw + 1rem, 4rem);            /* 32 → 64 */
--type-h2:      clamp(1.5rem, 2vw + 0.75rem, 2.5rem);       /* 24 → 40 */
--type-h3:      clamp(1.25rem,1vw + 0.875rem, 1.75rem);     /* 20 → 28 */
--type-body:    clamp(1rem,   0.5vw + 0.875rem, 1.125rem);  /* 16 → 18 */
--type-small:   clamp(0.75rem,0.25vw + 0.6875rem, 0.875rem);/* 12 → 14 */
```

Plancher absolu · **16 px** body, **12 px** méta/tag. WCAG AA + plancher TIP V3 respectés. Tracking borné par paliers (.12em / .16em / .22em) selon corps.

---

## 4. Breakpoints scellés

### Six paliers CSS
```css
--bp-min:  320px;   /* plancher garde-fou */
--bp-sm:   640px;   /* mobile large → tablette portrait */
--bp-md:   1024px;  /* tablette paysage → laptop */
--bp-lg:   1280px;  /* desktop standard */
--bp-xl:   1600px;  /* desktop large */
--bp-2xl:  1920px;  /* plafond, contraint au-delà */
```

### Trois maquettes validation
**375 mobile** · **768 tablette** · **1440 desktop**. Bonus 1920 sur les 2 hero les plus structurants (WTF maison-mère + EES Home) en passe d'enrichissement si pertinent.

### Logos & petites largeurs
- Wordmarks (WordmarkEES, WordmarkSES, WordmarkAVE) · taille mini 240px, fallback typo
- Sceaux (LogoWTF, LogoAVE) · taille mini 32px, préservés intégralement
- Triangle SÉSÂMES · taille mini 24px

---

## 5. Doctrine d'interaction scellée

### Focus visible
Outline plein 2 px sur `--accent` de l'entité active, offset 2 px. **Refus absolu du halo SaaS / box-shadow glow.**

### Transitions normées
- Micro-interactions (hover, focus, toggle) · **220 ms**
- Bascule routing entre territoires · **instantanée** (rechargement)
- Apparition au scroll · **320 ms** (parcimonie)
- Drawer mobile · **260 ms**
- Easing unique · `cubic-bezier(0.22, 0.61, 0.36, 1)` (registre Aesop)

### Sticky · refus du sticky agressif
**Interdits** · CTA flottant qui suit le scroll · header qui se réduit · sidebar de partage social qui colle · bannière cookies anti-respiration · newsletter pop-up.
**Acceptés** · header standard sticky sans réduction · sidebar ToC articles longs desktop · skip link focus-only.

### Hover liens
- Corps de texte · italique Instrument Serif souligné 1px, hover passe à 2px en 220ms
- Navigation · pas de souligné par défaut, hover ajoute filet bas 1px `--accent` en 220ms

### Curseurs
`cursor: default` partout. `pointer` uniquement sur cliquables. **Pas de curseur personnalisé.**

---

## 6. Library web components scellée · 8 composants

| Composant | Variantes | Démonstration |
|---|---|---|
| **Navigation** (header) | mobile drawer · tablette 4 items · desktop 6 items + CTA | scope-ees |
| **Boutons** | primaire · secondaire · tertiaire | × 5 scopes |
| **Forms** | champs filet bas · RGPD éditorialisée · 3 layouts BP | scope-voie |
| **Cards** | article · pratique · citation | × 3 scopes |
| **Hero responsive** | F1 WTF · F2 SES · F3 EES · F4 Voie · F5 AVE | F3 EES × 3 BP |
| **Photo slot** | placeholder typographique honnête | tous scopes |
| **Footer écosystème invariant** | 1440 6 colonnes · 768 3 groupes · 375 liste pliée | invariant |
| **Citation pivot** | inline · pleine page | tous scopes |

**Doctrine d'une seule grammaire** · la couleur change selon le scope, la forme jamais.

---

## 7. Inventaire production scellée · 19 pages + responsive snapshots

### Passe 9.1 · `iteration6-lot9-doctrine.html` (44 267 chars)
Cartographie · breakpoints · échelle clamp() · interactions · library × 3 BP · accessibilité · posture cardinale TIP V3 + test révisé *« évidemment et uniquement WTF TIP V3 »*.

### Passe 9.2 · `iteration6-lot9-wtf.html` (71 834 chars)
5 maquettes desktop 1440 + responsive snapshots Home aux 3 BP ·
1. Home WTF maison-mère
2. SÉSÂMES sous-page caractérisée (`/clarification-interieure`)
3. Voie d'autonomie sous-page (`/revenu-complementaire-independant`) + formulaire Brevo 4 étapes
4. À propos WTF (les Marcadet · mots qui portent / trahissent)
5. Contact WTF (3 canaux + formulaire partenariat)

### Passe 9.3 · `iteration6-lot9-ees.html` (93 376 chars)
9 maquettes desktop 1440 ·
1. Home EES · 3 piliers + soins + citation + ressources preview
2. Page Pratique · soin énergétique & corporel de référence + aside RDV
3. Article EES · avec table des matières sticky desktop
4. Listing Ressources · **emojis remplacés par eyebrows Instrument Serif italiques** (option (b) DirCom)
5. À propos EES · Céline + cabinet Sainte-Hélène
6. Contact EES · WhatsApp + email + vignette GBP
7. Le Cocoon · variante Page Pratique (parcours 6 séances)
8. Soins complémentaires · variante Listing (4 pratiques)
9. Bons cadeaux web · hero + 3 formats + 3 étapes + 7 variantes preview

### Passe 9.4 · `iteration6-lot9-ave.html` (50 661 chars)
5 maquettes desktop 1440 ·
1. Home AVE · 4 signaux + citation + articles récents
2. Signal du corps · catégorie pédagogique (la fatigue) + aside renvoi EES
3. Article AVE · trame *Comprendre la fatigue chronique*
4. Listing Ressources · 4 catégories (fatigue · digestion · équilibre · saisons)
5. À propos AVE · doctrine hub publiant discret + 3 principes éditoriaux

**Total · 19 pages-maquettes web + 1 doctrine + library × 3 BP + responsive snapshots.**

---

## 8. Garde-fous accessibilité scellés

### Contraste & encres
- Texte courant (16 px) · ratio **4.5:1**
- Texte large (≥ 18 px ou ≥ 14 px bold) · ratio **3:1**
- Éléments UI (focus, boutons) · ratio **3:1**
- Plancher encre sur fonds clairs · `--ink-2 #3B342A`

### Sémantique HTML
`<nav>` · `<main>` · `<article>` · `<section>` · `<aside>` · `<footer>` propres. Un seul `<h1>` par page, hiérarchie h2/h3/h4 respectée. Skip link *« Aller au contenu »* focus-only. Tab sequence logique.

### Préférences utilisateur
- `prefers-reduced-motion` · animations passent à 0.01ms
- `prefers-color-scheme: dark` · **PAS de mode sombre V1** (arbitrage DirCom, registre éditorial)

### Cibles Lighthouse V1
LCP **< 2.5s** · INP **< 200ms** · CLS **< 0.1** · Performance **≥ 90** · Accessibilité **≥ 95**.

---

## 9. Posture cardinale TIP V3 scellée (révisée)

Les écoles citées (Aesop, Hermès, The Row, Frédéric Malle, The Beauty Chef Edit, Pukka) sont des **boussoles de tension** — pas des templates. Ce qui fait la signature unique de Way To Freedom ·

1. **Palette double or** · or terre `#B8884A` EES/WTF + or canalisé `#C9A24E` SES/Voie/AVE, bascule alignée sujet.
2. **Sceaux iconographiques propriétaires** · papillon-corps WTF · triangle aquarellé canalisé SES · phénix renaissant AVE · ligature lune-C EES.
3. **Doctrine fondatrice nomade** · *« Les fondateurs sont les fondations qui voyagent. »*
4. **Articulation 3 chemins + 1 hub publiant** · inédite. Pas marque-mère + sous-marques. Pas parcours linéaire.
5. **Voix d'incarnation** · *« On organise des passages. »* Pas *vendre*, pas *transformer*, pas *coacher*.
6. **Cinq tensions tenues simultanément** · profond sans grandiloquence · simple sans pauvreté · clair sans froideur · chaleureux sans mollesse · premium sans arrogance.

### Test final révisé V3.0c (signature unique)

> *« Cette maquette pourrait-elle être **évidemment** et **uniquement** un site WTF TIP V3 ?
> La grammaire visuelle s'attribue-t-elle d'elle-même à l'écosystème Way To Freedom — et à personne d'autre ? »*

L'ancien test *« pourrait apparaître comme refonte d'un site Aesop ou Hermès »* glissait vers le pastiche. Le nouveau test est plus exigeant et plus juste.

---

## 10. Doctrine anti-patterns héritée V3.0c (toujours valable)

Interdits absolus dans toute production web ·

- Numéros de paragraphes type *« ¶ 01 »*, *« № 04 »*
- Grilles techniques de spécifications empilées en colonnes
- Glyphes géométriques inventés (Λ, S dans rond, triangles décoratifs hors identité)
- Rectangles or paillette en surligneurs · italique fine à la place
- En-têtes datés *« Lettre du jour — 28 avril »*
- Esthétique magazine premium NYT / Wallpaper / Kinfolk dans son aspect *« vu mille fois »*
- Photos stock (femme blanche en peignoir, mains jointes méditation, bougie kit yoga)
- Effets décoratifs · ombres portées superflues, gradients fades, éléments *« premium »* qui sentent le template
- Emojis dans les visuels et les listings catégories (résolu en passe 9.3, eyebrows italiques à la place)
- Coins arrondis SaaS, urgence marketing
- **Mode sombre V1 (refusé arbitrage DirCom)**

---

## 11. Sources de vérité scellées

| Fichier | Rôle |
|---|---|
| `v3/lot9-web-system.css` | Source partagée tokens responsive + scopes + library composants |
| `v3/tokens-v3.css` V3.0b | Tokens chromatiques + typo (hérités) |
| `v3/iteration6-lot9-doctrine.html` | Passe 9.1 · doctrine + library × 3 BP |
| `v3/iteration6-lot9-wtf.html` | Passe 9.2 · WTF + SÉSÂMES + Voie + À propos + Contact |
| `v3/iteration6-lot9-ees.html` | Passe 9.3 · 9 maquettes EES |
| `v3/iteration6-lot9-ave.html` | Passe 9.4 · 5 maquettes AVE |
| `LOT9_SCELLEMENT_TEMPLATE_WEB_V3.md` | Présent document de scellement |
| `INPUTS_PHASE_2_LOT9.md` | Backlog inputs Phase 1 consommé |
| `SCELLEMENT_TEMPLATE_ECOSYSTEME_V3-0c.md` | Scellement canvas V3.0c (amont) |
| Mémoire Centrale Notion | Doctrine vivante prioritaire en cas de contradiction |

---

## 12. Note Phase 3 · Claude Code intégration Astro

### Placeholders typographiques à remplacer
Dans les 4 fichiers HTML maquettes, les sceaux sont rendus typographiquement entre crochets ou cadres minimalistes ·
- `[W·F]` → `<img src="/logos/wtf-sceau-v2.png" alt="Way To Freedom" />`
- `[EES]` → `<img src="/logos/ees-favicon-v1.png" alt="EssenCel'en Soi" />`
- `[△ SES]` → `<img src="/logos/triangle-sesames.svg" alt="SÉSÂMES" />`
- `[AVE]` → `<img src="/logos/ave-sceau-v2.png" alt="Aloe Vera Excellence" />`

Voir `SCELLEMENT_TEMPLATE_ECOSYSTEME_V3-0c.md §5` pour les chemins d'origine des PNG transparents détourés universellement le 15 mai 2026.

### Slots photo placeholder
Chaque slot photo est marqué par un bloc `.c-photo-slot` ou équivalent, avec un tag SLOT et une instruction de cadrage italique. Le swap photos authentiques se fait en passe dédiée par Céline / Sébastien (smartphone) après validation structure maquettes.

### Articles EES à intégrer
Source Notion (à transmettre par Sébastien à Claude Code) ·
- Pilier · *Soin énergétique dans le Médoc* (`350503e2989d8111961cc8972f85ec20`)
- Satellite · *Chi Nei Tsang à Sainte-Hélène* (`347503e2989d819f8979e5a1f95cd3b8`)
- Satellite · *Harmonisation énergétique* (`347503e2989d8150b318fdb48b56138e`)
- Satellite · *Reconnexion énergétique profonde* (`347503e2989d81bda2e1cafb98fbac08`)

### Article AVE
Trame fictive *Comprendre la fatigue chronique* est utilisée dans la passe 9.4. À rédiger formellement après validation maquettes Lot 9 par Sébastien · validation en patch ultérieur.

### Stack technique cible
Astro statique + Decap CMS headless Git-based + Hostinger Node.js. Bascule sans casser l'existant — staging URL temporaire, test parallèle WordPress vivant, bascule DNS quand validé, backup 30 jours puis archivé.

---

## 13. Hash de scellement

| Élément | Valeur |
|---|---|
| Version | V3.1 Web System |
| Date | 19 mai 2026 |
| Documents web livrés | 5 (doctrine + WTF + EES + AVE + CSS partagé) |
| Pages-maquettes scellées | 19 desktop 1440 + responsive snapshots Home WTF aux 3 BP |
| Composants library scellés | 8 × 3 breakpoints validés |
| Footer écosystème | invariant nuit chaude 5 colonnes équivalentes |
| Tokens CSS | `lot9-web-system.css` (hérite `tokens-v3.css` V3.0b) |
| Statut Phase 3 Claude Code | **Prêt à ouvrir** · livrable transmissible |
| Backlog Phase 3 | Cf §12 du présent document |

---

## 14. Passes complémentaires reportées (hors Lot 9)

1. **Mini-template Bon Cadeau imprimable A4** · 7 variantes typographiques (Anniversaire / Fêtes / Saint-Valentin / Noël / Naissance / Convalescence / Neutre). Carte A4 pliée en deux = 4 faces A5. Passe dédiée à ouvrir après validation Lot 9.
2. **Photothèque réelle** · session photo Céline / Sébastien (smartphone) après validation structure maquettes.
3. **C+lune ligature vectorielle** pour usages 16-32px réels (chemin Bézier propre).
4. **AVE déclinaison monochrome noir** pour usages support très contraints.
5. **Audit chromatique des détourages** sur écran wide-gamut P3.
6. **Article AVE V1** · rédaction formelle *Comprendre la fatigue chronique* (trame fictive en place dans 9.4).

---

## 15. Critère final Lot 9 scellement

Le template Lot 9 est validé si les 5 sites/sous-pages tiennent les **5 tensions TIP V3** (profond sans grandiloquence · simple sans pauvreté · clair sans froideur · chaleureux sans mollesse · premium sans arrogance) en responsive sur les 3 breakpoints validés.

Test signature unique appliqué ·
- WTF + SÉSÂMES + Voie + EES + AVE · *« Cette maquette pourrait-elle être évidemment et uniquement un site WTF TIP V3 ? »*

Si non sur une page, retravailler avant intégration Phase 3.

---

## 16. Signature de scellement

Le présent scellement Lot 9 V3.1 Web System est arbitré par DirCom Way To Freedom et exécuté par Claude Design en cohérence avec ·

- `SCELLEMENT_TEMPLATE_ECOSYSTEME_V3-0c.md` (canvas V3.0c, 19 mai 2026)
- `ECOSYSTEM_GPS.md` V3.0c
- `INPUTS_PHASE_2_LOT9.md` (backlog Phase 1 consommé)
- Brief DirCom *Lot 9 Web System TIP V3* du 19 mai 2026
- Mémoire Centrale Notion doctrine vivante prioritaire
- Arbitrages d'ouverture Lot 9 (séquencement passes critiquables · Aesop pur · emojis EES remplacés option (b) · footer 5 entités équivalentes · 7 variantes Bon Cadeau imprimable reportées)
- Patch DirCom 19 mai 2026 (note Phase 3 sceau WTF placeholder typographique)

Toute évolution doctrinale postérieure (V3.2, etc.) requiert une mise à jour de ce document, datée et signée. La Mémoire Centrale Notion reste la source vivante prioritaire en cas de divergence.

---

*Fin du document de scellement Lot 9.*
*Way To Freedom · DirCom + Claude Design · 19 mai 2026 · V3.1 Web System*
