# SCELLEMENT TEMPLATE ÉCOSYSTÈME · V3.0c

**Version scellée** · V3.0c
**Date de scellement** · 19 mai 2026
**Émis par** · DirCom Way To Freedom · Claude Design
**Périmètre** · template *Way To Freedom — Écosystème · Design System v2.1.1* fixé en l'état pour usage transversal

---

## 1. Ce que scelle ce document

Ce document fige le **template écosystème dans sa fonction actuelle** ·

> **Identité écosystème + production canvas signature.**
> Palettes par entité · typographie · logos officiels · doctrine anti-patterns · 61 objets visuels canvas (social, email, hero web fixes, profils, carrousels) · 6 sceaux écosystème · 9 composants transition V2.2 → V3.

Le template peut être utilisé **partout** pour produire des visuels canvas conformes à la doctrine TIP V3 (Notion, signatures email, social, supports imprimés, GBP cards, headers fixes).

**Ce que ce scellement ne couvre PAS** ·

- Doctrine responsive web fluide
- Library de composants web vivants (nav, formulaires, boutons, cards, footer)
- Page-types des 5 sites de l'écosystème
- Couche interaction web (focus, hover, transitions, sticky)
- Garde-fous accessibilité WCAG AA appliqués aux composants web

→ Périmètre du **Lot 9 Web System** ouvert en parallèle, à produire en session dédiée (voir `INPUTS_PHASE_2_LOT9.md`).

---

## 2. Architecture de l'écosystème scellée

| Entité | Statut | Frontalisation | URL |
|---|---|---|---|
| **Way To Freedom (WTF)** | Maison-mère narrative | Voix rare | waytofreedom.fr |
| **SÉSÂMES** | Chemin Sébastien · clarification intérieure | Sous-page caractérisée WTF | sesames.fr (à terme) |
| **EssenCel'en Soi (EES)** | Chemin Céline · sanctuaire du corps | Site propre | essencelensoi.fr |
| **Voie d'autonomie économique** | Chemin économique | Sous-page caractérisée WTF · Forever jamais nommé | waytofreedom.fr/revenu-complementaire-independant |
| **Aloe Vera Excellence (AVE)** | Hub pédagogique discret publiant | Site propre · jamais en façade commerciale | aloeveraexcellence.com |

Convention nominale fondateurs · *« Céline & Sébastien »* en ordre alphabétique partout. Exceptions signature de chemin · *« Sébastien »* seul pour SÉSÂMES, *« Céline »* seule pour EES.

---

## 3. Palettes signatures scellées V3.0c

| Entité | Dominante | Or | Accent rare |
|---|---|---|---|
| WTF | `--wtf-nuit #1B1814` / `--wtf-nuit-chaude #2E2A22` | `--wtf-dore-bas #B8884A` (or terre) | — |
| SÉSÂMES | `--ses-light #FAF7F2` + `--ses-ink #0F1218` | `--ses-gold #C9A24E` (or canalisé) | `--ses-violet #4A3A5C` pivot ponctuel |
| EES | `--ees-cream #F6F1E8` + `--ees-rose #E8D2C6` | `--ees-gold #B8884A` (or terre signature) | `--ees-rose-deep #D9B8A6` pivot 1-2×/mois |
| Voie | `--voie-cream #F6F1E8` + `--voie-night #1F3B4D` | `--voie-copper #B0732E` | — |
| AVE | `--ave-cream #F6F1E8` | `--ave-gold #C9A24E` | `--ave-aloes #5E7A4E` + `--ave-aloes-clair #93A984` + `--ave-flamme #C9622E` (1-2×/saison MAX) |

**Doctrine de bascule de l'or transversal** · EES + WTF dominant → or terre `#B8884A` ; SÉSÂMES + Voie + AVE → or canalisé `#C9A24E` ; cohabitation multi-marques → ton du support englobant tranche.

**Signatures personnelles fondateurs** (couche au-dessus, profils perso uniquement) ·
- `--cel-coral #D55B47` — Céline solaire
- `--seb-petrol #2D5F6E` — Sébastien tenant

---

## 4. Typographie scellée

Trois familles, Cormorant Garamond définitivement sortie du système.

- **Fraunces** (variable opsz 9..144 · wght 300/400/500 · ital 0/1 · SOFT 0..100) — display, titres, signature
- **Inter Tight** (300/400/500/600) — body, small caps, méta
- **Instrument Serif italique** — citations émotionnelles, mots pivots, eyebrows

WONK explicitement à 0 partout (incompatible registre TIP). Italique Instrument Serif réservée corps ≥ 24px ; en dessous bascule en Fraunces italic SOFT.

---

## 5. Logos officiels scellés

Six PNG transparents à masque alpha chromatique, détourés universellement le 15 mai 2026. Posables sur tous fonds.

| Fichier | Composant | Usage doctrinal |
|---|---|---|
| `v3/assets/logos/wtf-sceau-v2.png` | `<LogoWTF/>` | Signature unique WTF · partout où WTF a besoin d'une marque identifiable |
| `v3/assets/logos/wtf-manifeste-v2.png` | `<LogoManifesteWTF/>` | Manifeste narratif éditorial · jamais en signature |
| `v3/assets/logos/wtf-favicon.png` | `<LogoFaviconWTF/>` | Favicon WTF · papillon-corps simplifié |
| `v3/assets/logos/ave-sceau-v2.png` | `<LogoAVE/>` | Sceau AVE pleine signature · cadre noir + phénix |
| `v3/assets/logos/ave-favicon.png` | `<LogoFaviconAVE/>` | Favicon AVE · phénix sans cadre |
| `v3/assets/logos/ees-favicon-v1.png` | `<LogoEESFavicon/>` | Favicon EES · C+lune ligature transparente |

**Logo SÉSÂMES** · triangle aquarellé canalisé + wordmark gold (PNG sources, garde-fou `aspect-ratio` explicite V3.0c).
**Logo EES wordmark** · gold script avec ligature lune-C (PNG source `Logo EssenCel'en Soi.png` + extraction favicon).

**Doctrine cardinale** · aucune refonte vectorielle, aucun redessin. Les PNG sources sont contraints par CSS (`aspect-ratio`, `object-fit: contain`, `align-self: flex-start`) pour empêcher tout étirement dans les conteneurs flex / grid.

**Signature profils fondateurs** · porte toujours `<LogoWTF/>` (papillon-corps). Jamais `TriangleSes`, jamais `WordmarkSES` ou `WordmarkEES` en signature — les fondateurs portent la maison-mère, pas leur pôle.

---

## 6. Inventaire production scellée · 76 objets

### Lot 4 · 34 composants production (1er-15 mai 2026)
- Section A · 8 citations pures (EES × 3 · SÉSÂMES × 2 · WTF × 2 · Voie × 1)
- Section B · 7 photo + texte (EES × 2 · SÉSÂMES × 2 · WTF × 1 · Voie × 2)
- Section C · 4 profils personnels (Sébastien × 2 · Céline × 2)
- Section D · 4 stories 9:16 (EES + SÉSÂMES + WTF + Voie)
- Section E · 5 système email (3 signatures + 2 headers newsletter)
- Section F · 4 hero web 1440×720 (WTF + SÉSÂMES + EES + Voie)
- Section G · 2 notes doctrine

### Lot 5 · 21 cards carrousel narratif
- *Reposer le système nerveux* (EES) — 5 cards
- *Pas par manque de sérieux* (SÉSÂMES) — 6 cards
- *Une maison. Trois chemins.* (WTF) — 5 cards
- *Le mouvement avant la méthode.* (Voie) — 5 cards

### Lot 6 · 5 notes doctrine
H1 inventaire · H2 brief illustrateur (résolu Lot 7) · H3 protocole swap logos · H4 checklist 12 points · H5 critère final.

### Lot 7 · 6 sceaux écosystème
Six PNG transparents à masque alpha (voir §5).

### Lot 8 · 9 composants transition V2.2 → V3 + 3 patches V3.0c
EesGbp (A/B) · SesGbp (A/B) · AveHeader · AveHeaderEmail · AveHeaderMobile + CitaA9 contraste + StoryD5 contraste + uniformisation liseré profils sur `--liz-base`.

**Total · 76 objets visuels scellés dans la doctrine V3.0c.**

---

## 7. Doctrine anti-patterns scellée

Interdits absolus dans toute production écosystème ·

- Numéros de paragraphes type *« ¶ 01 »*, *« № 04 »*, *« 01. »*
- Grilles techniques de spécifications (FORMAT / DURÉE / MODALITÉ / LIEU empilées en colonnes)
- Glyphes géométriques inventés (Λ, S dans rond, triangles décoratifs hors identité officielle)
- Rectangles or paillette en surligneurs · italique fine à la place
- En-têtes datés *« Lettre du jour — 28 avril »*
- Esthétique magazine premium NYT / Wallpaper / Kinfolk dans son aspect *« vu mille fois »*
- Photos stock (femme blanche en peignoir, mains jointes méditation, bougie kit yoga)
- Effets décoratifs · ombres portées superflues, gradients fades, éléments *« premium »* qui sentent le template
- Emojis dans les visuels (sauf cas explicitement validé DirCom)
- Coins arrondis SaaS, urgence marketing (*« offre limitée »*, compteur, *« rejoignez les 10 000 »*)

---

## 8. Règles cardinales

- **Vouvoyer chaleureux** · jamais le *« tu »* marketing forcé, jamais le *« nous »* corporate
- **Promesse — nommer sans vendre** · aucun bénéfice promis, aucun résultat garanti
- **Tenir, pas convaincre** · si la personne reconnaît, elle s'avance
- **Doctrine fondatrice nomade** · *« Les fondateurs sont les fondations qui voyagent. La maison se porte avec eux. »* Aucune palette ne dérive d'un territoire fixe.
- **Tri-distinction Forever / AVE / Aloe Vera** · Forever jamais nommé publiquement. AVE = hub pédagogique discret. L'aloe vera apparaît comme compagnon de routine, jamais en push.
- **Doctrine contraste V3.0c** · sur fonds clairs, **textes sombres uniquement** (`--ink` plancher `--ink-2`). Textes clairs réservés aux fonds sombres.
- **Doctrine signature profils fondateurs** · `<LogoWTF/>` en signature pied droit toujours. Jamais le sceau du pôle.

---

## 9. Sources de vérité scellées

| Fichier | Rôle |
|---|---|
| `v3/tokens-v3.css` V3.0b | Source unique chromatique + typo + grille + liserés |
| `v3/entities-v3-FULL.css` | Primitives par entité (Frame, ArtbgL4, helpers) |
| `ECOSYSTEM_GPS.md` V3.0c | Doctrine écosystème consolidée |
| `Way To Freedom - Design System v2.1.html` | Livret référence imprimable (v2.1.1 validée 1er mai 2026) |
| `Way To Freedom - Design System v3.html` | Itération V3 (en cours d'enrichissement) |
| `v3/COVERAGE.md` | Inventaire détaillé des 61 objets + recette super_inline_html |
| Mémoire Centrale Notion | Doctrine vivante prioritaire en cas de contradiction |

---

## 10. Hash de scellement

| Élément | Valeur |
|---|---|
| Version | V3.0c |
| Date | 19 mai 2026 |
| Objets visuels scellés | 76 |
| Logos écosystème scellés | 6 PNG transparents |
| Tokens CSS | tokens-v3.css + entities-v3-FULL.css |
| Document de scellement visuel | `Scellement V3.0c.html` (livret 4 faces A4 portrait, imprimable) |
| Statut Lot 9 Web System | **Ouvert · pending production session dédiée** |
| Backlog Lot 9 | `INPUTS_PHASE_2_LOT9.md` (14 sections collectées) |

---

## 11. Prochaines passes (hors scellement)

1. **Lot 9 Web System** · session dédiée à ouvrir sur sollicitation DirCom. 4 fichiers + scellement consolidé. Brief intégral dans `INPUTS_PHASE_2_LOT9.md`.
2. **C+lune ligature vectorielle** pour usages 16-32px réels (chemin Bézier propre).
3. **AVE déclinaison monochrome noir** pour usages support très contraints.
4. **Audit chromatique des détourages** sur écran wide-gamut P3.
5. **Test rasterisation 3× wkhtmltoimage** sur échantillon après bundling super_inline_html.
6. **Session photothèque dédiée** une fois maquettes Lot 9 validées (slots photo identifiés en placeholders).

---

## 12. Mode d'emploi du template scellé

### Pour produire un visuel canvas conforme
1. Identifier l'entité (WTF / SÉSÂMES / EES / Voie / AVE)
2. Consulter palette signature §3 et fixer dominante + or + accent éventuel
3. Choisir le format canvas correspondant dans les 76 objets scellés (voir `v3/COVERAGE.md` pour table d'index)
4. Forker le composant React le plus proche (`iteration3-lot4.html`, `iteration3-lot5-lot6.html`, `iteration4-lot8-corrige.html` selon format)
5. Renseigner les slots (texte, photo authentique, citation)
6. Pipeline export PNG · `super_inline_html` + rasterisation Playwright (voir COVERAGE.md §3)
7. Auto-contrôle 6 questions (palette · typo · espace · anti-patterns · signature · critère final Aesop/Hermès/The Row) avant livraison

### Pour produire un visuel d'un type non couvert
Soumettre brief DirCom. Si validé, le composant produit s'ajoute à l'inventaire dans une version ultérieure (V3.0d, V3.1, etc.).

### Pour produire une page web
**Attendre l'ouverture du Lot 9.** Le template scellé V3.0c ne couvre pas la production web responsive. Tenter de l'utiliser pour un site reviendrait à confondre canvas et live web — pipeline différent, métier différent.

---

## 13. Signature de scellement

Le présent scellement V3.0c est arbitré par DirCom Way To Freedom et exécuté par Claude Design en cohérence avec ECOSYSTEM_GPS.md V3.0c, Patrimoine visuel scellé 17 mai 2026, Audit Canaux Fondations 4-5 mai 2026, et Mémoire Centrale Notion doctrine vivante prioritaire.

Toute évolution doctrinale postérieure (V3.0d, V3.1, etc.) requiert une mise à jour de ce document, datée et signée. La Mémoire Centrale Notion reste la source vivante prioritaire en cas de divergence.

---

*Fin du document de scellement.*
*Way To Freedom · DirCom + Claude Design · 19 mai 2026 · V3.0c*
