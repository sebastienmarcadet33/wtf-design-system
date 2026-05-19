# INPUTS_PHASE_2_LOT9.md — Journal d'entrée Lot 9 Web System

**Statut** · Backlog inputs collectés en Phase 1, à consommer au démarrage Lot 9
**Date d'ouverture** · 19 mai 2026
**Brief de référence** · brief DirCom *Lot 9 Web System TIP V3* du 19 mai (transmis en conversation, à archiver Notion)
**Réponse consolidée** · *Arbitrages Lot 9 + inventaire complet* du 19 mai
**Compléments** · clarifications téléphone + doctrine Bon Cadeau du 19 mai

---

## 1. Cartographie des 5 sites/sous-pages

| Site / sous-page | Statut | Stack cible | Palette dominante |
|---|---|---|---|
| **waytofreedom.fr** maison-mère | Refonte V3 | Astro + CMS headless | `--wtf-light #FAFAFA` + `--wtf-ink #1F1A14` + `--wtf-dore-bas #B8884A` |
| **waytofreedom.fr/clarification-interieure** SÉSÂMES | Sous-page caractérisée | Idem WTF, classe CSS scope | `--ses-light #FAF7F2` dominant + `--ses-ink #0F1218` accents + `--ses-gold #C9A24E` |
| **waytofreedom.fr/revenu-complementaire-independant** Voie | Sous-page caractérisée | Idem WTF, classe CSS scope | `--voie-cream #F6F1E8` dominant + `--voie-copper #B0732E` accents + `--voie-night #1F3B4D` hero/pivot |
| **essencelensoi.fr** EES | Refonte structurelle complète depuis WordPress UAGB | Astro + CMS headless (Sanity ou Decap) | `--ees-cream #F6F1E8` + `--ees-rose #E8D2C6` + `--ees-gold #B8884A` |
| **aloeveraexcellence.com** AVE | Refonte hub publiant | Astro + CMS headless | `--ave-cream #F6F1E8` + `--ave-aloes #5E7A4E` + `--ave-gold #C9A24E` |

**Bascule chromatique** · sèche au routing (rechargement de route), pas de transition au scroll. Classe CSS scope sur `<body>` (`.wtf-maison-mere`, `.wtf-sesames`, `.wtf-voie`, `.ees`, `.ave`) redéfinit les variables CSS. Une seule règle de bascule par entité, source unique tokens-v3.css.

**Footer écosystème** · INVARIANT sur `--wtf-nuit-chaude #2E2A22` quelle que soit la page parente. Textes crème, filets `--wtf-dore-bas`, sceau papillon-corps WTF en signature centrale. *« La page peut être EES rose poudré, mais le pied dit maison commune. »*

---

## 2. Doctrine responsive scellée

### Breakpoints CSS (6)
```css
--bp-min:  320px;   /* plancher garde-fou */
--bp-sm:   640px;   /* mobile large → tablette portrait */
--bp-md:   1024px;  /* tablette paysage → laptop */
--bp-lg:   1280px;  /* desktop standard */
--bp-xl:   1600px;  /* desktop large */
--bp-2xl:  1920px;  /* plafond, contraint au-delà */
```

### Breakpoints maquettes validation (3)
375 mobile · 768 tablette · 1440 desktop. Bonus 1920 sur les 2 hero les plus structurants (WTF maison-mère + EES Home) si pertinent.

### Type scale fluide via `clamp()`
```css
--type-display: clamp(2.5rem, 5vw + 1rem, 6rem);          /* 40 → 96 */
--type-h1:      clamp(2rem,   3vw + 1rem, 4rem);          /* 32 → 64 */
--type-h2:      clamp(1.5rem, 2vw + 0.75rem, 2.5rem);     /* 24 → 40 */
--type-h3:      clamp(1.25rem,1vw + 0.875rem, 1.75rem);   /* 20 → 28 */
--type-body:    clamp(1rem,   0.5vw + 0.875rem, 1.125rem);/* 16 → 18 */
--type-small:   clamp(0.75rem,0.25vw + 0.6875rem, 0.875rem); /* 12 → 14 */
```

Plancher minimum · 16px body, 12px méta/tag (WCAG AA + plancher TIP V3).

### Hero F1-F4 comportement
- ≥ 1024px · ratio 2:1, composition canvas adaptée (titre + sous-bloc + signature)
- 640-1024px · ratio 4:3, repositionnement
- < 640px · ratio 3:4 portrait, pile verticale

### Logos petites largeurs
- Wordmarks (WordmarkEES, WordmarkSES, WordmarkAVE) · taille mini 240px, sinon fallback typo
- Sceaux (LogoWTF, LogoAVE) · taille mini 32px
- Triangle SÉSÂMES · taille mini 24px

---

## 3. Doctrine interaction

### Focus visible (refus halo SaaS)
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

### Hover liens
- Lien corps de texte · italique Instrument Serif souligné 1px `--accent`, hover souligné s'épaissit à 2px en 220ms
- Lien navigation · pas de souligné par défaut, hover ajoute filet bas 1px `--accent` en 220ms

### Transitions normées
- Durée micro-interactions · 220ms
- Bascule routing · instantanée (rechargement)
- Apparition au scroll · 320ms (parcimonie)
- Easing · `cubic-bezier(0.22, 0.61, 0.36, 1)` (registre Aesop)

### Sticky
- Refus sticky agressif (CTA flottant, header qui se réduit, sidebar qui suit)
- Acceptable · sidebar ToC sur articles longs desktop, header standard sticky sans réduction

### Curseurs
Default partout, pointer uniquement sur cliquables. Pas de curseur personnalisé.

---

## 4. Fonctions transactionnelles

### B4 · RDV EES
- Pas d'embed Calendly V1
- CTA primaire · bouton "Demander un rendez-vous" → `wa.me/33662737300?text=...` (Céline)
- CTA secondaire · "Ou écrire par email" → `mailto:contact@essencelensoi.fr`

### B5 · Formulaire prospect Voie · Brevo 4 étapes
1. Formulaire web · Prénom + Nom + Email + Téléphone (opt) + Question ouverte (textarea) + RGPD éditorialisée
2. Page confirmation éditoriale dédiée · "Votre message est arrivé" + délai 48h + sceau WTF + citation pied
3. Email autoresponder humain texte signé Céline & Sébastien (30 sec)
4. Alerte interne Sébastien + Céline (Brevo dashboard)

### B6 · GBP page Contact EES
Vignette statique + adresse texte sémantique + horaires "Sur rendez-vous" + téléphone + lien sortant "Voir l'itinéraire sur Google Maps"

### Cartographie téléphones (correction)
| Site | Téléphone |
|---|---|
| waytofreedom.fr + SÉSÂMES + Contact général | `+33 7 85 87 60 79` (Sébastien) |
| Voie | aucun, formulaire Brevo uniquement |
| essencelensoi.fr | `+33 6 62 73 73 00` (Céline) |
| aloeveraexcellence.com | aucun, hub discret sans contact direct |

---

## 5. Photothèque et inventaires

### C7 · Photothèque · placeholders V1
Tous emplacements photo en **placeholders typographiques honnêtes** (doctrine Aesop). Annotation explicite par slot :
```
[ SLOT PHOTO · HERO EES HOME ]
Ratio : 3:4 portrait (mobile), 16:9 paysage (desktop)
Sujet : mains de praticienne en geste, contexte cabinet jardin
Lumière : tamisée matinale, naturelle, jamais frontale flash
Atmosphère : sanctuaire du corps, douceur respirante
Cadre : liseré --liz-base 0.16em coral ou or terre selon section
```
Session photo dédiée s'ouvre après validation structure maquettes.

### C8 · Articles EES (Notion à transmettre par Sébastien)
- Pilier · *Soin énergétique dans le Médoc* (`350503e2989d8111961cc8972f85ec20`)
- Satellite · *Chi Nei Tsang à Sainte-Hélène* (`347503e2989d819f8979e5a1f95cd3b8`)
- Satellite · *Harmonisation énergétique* (`347503e2989d8150b318fdb48b56138e`)
- Satellite · *Reconnexion énergétique profonde* (`347503e2989d81bda2e1cafb98fbac08`)

### Article AVE · trame fictive à rédiger
Sujet possible · *Comprendre la fatigue chronique · ce que dit votre corps quand il ralentit*. Validation Sébastien en patch après livraison.

---

## 6. Cartographie réseaux sociaux · 14 canaux audités

| Site / sous-page | Canaux page Contact + footer héritage |
|---|---|
| **waytofreedom.fr** | Facebook WTF (`https://www.facebook.com/waytofreedom33480`) · LinkedIn WTF (`https://www.linkedin.com/company/way-to-freedom/`) · GBP WTF (`https://share.google/4zxgwyazMOQG6fu3R`, mention "en attente validation Google" si non live) · IG WTF (slot prévu, "bientôt") · LinkedIn Céline · LinkedIn Sébastien |
| **SÉSÂMES** sous-page | GBP SÉSÂMES (`https://share.google/trBJYmmuCOawJ3bSP`) · LinkedIn Sébastien · FB Sébastien · IG Sébastien |
| **Voie** | Hérite footer maison-mère, pas de canal dédié |
| **essencelensoi.fr** | Facebook EES (`https://www.facebook.com/EssenCelenSoiByCeline`) · Instagram EES (`https://www.instagram.com/essencelensoi`) · GBP EES (`https://share.google/hVDesZaNmQSryHDHN`) · LinkedIn Céline (`https://www.linkedin.com/in/celinemarcadetfree/`) · FB Céline perso · IG Céline perso |
| **aloeveraexcellence.com** | Pas de page Contact, doctrine hub discret |

**Doctrine relais** · profils perso Céline + Sébastien portent voix cofondatrice (palette globale écosystème), pas voix praticienne.

**Doctrine SÉSÂMES sans canaux dédiés V1** · *« SÉSÂMES vit aujourd'hui sur le profil de Sébastien, c'est ma voix. »*

**Doctrine Voie sans canaux dédiés** · *« Voie d'autonomie vit sur WTF et au travers des partages d'expérience. »*

---

## 7. Inputs EES contact

- Email · `contact@essencelensoi.fr`
- Téléphone Céline · `+33 6 62 73 73 00` (numéro perso qui fait pro, migration eSIM dédiée dès trésorerie respiration)
- Adresse cabinet · 17 Allée des Marronniers, 33480 Sainte-Hélène (Gironde, Médoc)
- Facebook · `https://www.facebook.com/EssenCelenSoiByCeline`
- Instagram · `https://www.instagram.com/essencelensoi`
- GBP · `https://share.google/hVDesZaNmQSryHDHN`
- Mention légale obligatoire footer · *« Les soins proposés chez EssenCel'en Soi sont des pratiques de bien-être non médicales et ne se substituent pas à un suivi ou à un avis médical. »*
- Filiation footer · *« © 2026 EssenCel'en Soi — Marque portée par Way To Freedom »*

---

## 8. Architecture EES live observée 19 mai

### Navigation actuelle
Accueil · Soins & Parcours · Le Cocoon · Ressources · À propos · Contact

### Pages EES à intégrer Lot 9 (non listées dans brief initial)
- **Le Cocoon** — soin spécifique, page dédiée
- **Bons cadeaux** — page transactionnelle (voir §10 doctrine Bon Cadeau)
- **Soins complémentaires** — page catalogue

Traitement possible · dérivés du template `Page Pratique` (Le Cocoon = variante Pratique, Soins complémentaires = variante Listing). À trancher au démarrage Lot 9.

### Architecture éditoriale ressources EES actuelle (3 catégories)
- *Le corps & l'énergie* (signaux, fatigue, surcharge)
- *Chemins d'apaisement* (système nerveux, tensions)
- *Rythmes & saisons* (cycles, étapes de vie)

À comparer / aligner avec les 4 catégories AVE prévues au brief (Fatigue · Digestion · Équilibre · Saisons). EES et AVE peuvent garder des cartographies distinctes — EES = catégories pratiques de soin, AVE = signaux du corps pédagogiques.

### Anti-pattern détecté sur site live · emojis catégories
Page Ressources EES utilise 🌿 🌸 🌙 en glyphes catégorie. Contredit doctrine V3.0c *« pas d'emojis dans les visuels »*. À arbitrer Lot 9 :
- (a) Conserver — exception DirCom (motif déjà ancré côté SEO + lecteurs habitués)
- (b) Remplacer par glyphes Fraunces / filets / signes typographiques propres

> **Avis DA filé** · option (b) pour tenir test final Aesop / The Beauty Chef.

---

## 9. Livrables Lot 9 attendus · 4 fichiers + scellement

| Fichier | Contenu | Lignes estimées |
|---|---|---|
| `iteration6-lot9-doctrine.html` | tokens-responsive-v1 + interaction-v1 + library web components × 3 breakpoints | ~4 000 |
| `iteration6-lot9-wtf.html` | Home WTF + sous-page SÉSÂMES + sous-page Voie + À propos + Contact WTF | ~5 000 |
| `iteration6-lot9-ees.html` | Home + Pratique + Article + Listing + À propos + Contact EES (+ Bons cadeaux + Le Cocoon + Soins complémentaires à confirmer) | ~4 000 |
| `iteration6-lot9-ave.html` | Home + Signal du corps + Article + Listing + À propos AVE | ~3 000 |
| `LOT9_SCELLEMENT_TEMPLATE_WEB_V3.md` | Document de scellement consolidé | — |

Validation DirCom unique à la fin sur les quatre, pas par sous-livraison.

---

## 10. Doctrine Bon Cadeau EES V3 (mini-template PageTransactionnelle)

### Architecture validée · carte A4 pliée en deux = 4 faces A5
Imprimable jet d'encre standard sur papier crème/ivoire 120g (Clairefontaine ivoire ou équivalent). Enveloppe kraft A5 générique pour transport.

### Face 1 · Couverture extérieure
- Wordmark EES gold script haut gauche (~22pt)
- Tag "Bon cadeau" small caps Inter Tight haut droite + filet or
- Zone destinataire italique bas · "Pour Soline · de la part de Maman"
- Pied URL + lieu + "À ouvrir à l'intérieur" small caps 10pt
- **Bloc central paramétrable par variante d'occasion** (voir tableau ci-dessous)

### Face 2 · Intérieure gauche · message manuscrit
- Eyebrow italique "Un mot pour vous" (ou variation cohérente)
- 6-8 lignes-guides manuscrites discrètes `--ees-gold-soft` opacité 0.20
- Petit filet or au pied + zone signature libre

### Face 3 · Intérieure droite · le bon cadeau lui-même
- Eyebrow italique "Bon cadeau"
- Bloc paramétrable structuré :
  - Soin offert (ligne paramétrable)
  - "Ou déduction possible sur toute autre prestation" italique 12pt
  - Valeur (Fraunces 64pt or terre)
  - Date d'émission small caps 11pt
  - Date validité (+12 mois) small caps 11pt
  - Numéro unique `N° EES-[année]-[séquence]`
- Pied · "Pour prendre rendez-vous · WhatsApp 06 62 73 73 00" small caps 11pt

### Face 4 · Dos · signature maison
- Sceau papillon-corps WTF centré ~80px
- "Way To Freedom" small caps + filets or
- Coordonnées EES + mention légale bien-être italique 9pt

### 7 variantes V1 à produire
| Variante | Eyebrow | Mot dominant | Suffix |
|---|---|---|---|
| Anniversaire | "Pour vos" | **[20/30/40/50/60/70/80/90/100]** Fraunces 240pt or terre | "ans." italique 36pt |
| Fête mères/pères/grands-parents | "Une heure de soin" | — | "pour Maman." Fraunces italique 110pt or terre (paramétrable Papa/Mamie/Papy) |
| Saint-Valentin | "Une heure" | — | "pour toi." Fraunces italique 110pt cel-coral ou ees-gold |
| Noël | — | "Joyeux Noël." Fraunces italique 110pt or terre | — |
| Naissance | "Pour fêter la venue de" | **[prénom]** Fraunces 96pt or terre | — |
| Convalescence | "Pour se" | — | "déposer." Fraunces italique 110pt or terre |
| Neutre | "Une heure" | — | "pour vous." Fraunces italique 110pt or terre |

### Doctrine de composition cardinale
Le marqueur d'occasion est **purement typographique**. Jamais illustration florale, iconographie fête, emoji, pictogramme. La typographie fait l'occasion.

### Workflow Céline V1 (manuel)
Template HTML imprimable paramétrable par variante. Céline ouvre → renseigne champs → imprime recto-verso → plie → glisse enveloppe kraft → SumUp. Limite ~10-15 bons/mois acceptable. Au-delà, V2 automatisation (génération PDF formulaire web Phase 3 Claude Code).

### Page web "Bons cadeaux" sur essencelensoi.fr
Hero éditorial sobre + section "Les bons cadeaux disponibles" (formats) + section "Comment ça se passe" (3 étapes patientes WhatsApp Céline) + CTA primaire WhatsApp + CTA secondaire email + petites vignettes 7 variantes couverture en "Les variantes possibles".

### Critères de réussite Bon Cadeau V3
1. Donatrice ressent que l'occasion est honorée à l'ouverture (résonance émotionnelle)
2. Bénéficiaire conserve volontiers l'objet après RDV (registre conservable)
3. Céline paramètre + imprime en moins de 5 minutes (workflow opérationnel)
4. Test final TIP V3 · *« Cet objet pourrait-il être produit par Le Bon Marché ou Aesop ? »*

---

## 11. Accessibilité WCAG AA · garde-fous Lot 9

- Contraste · 4.5:1 texte courant, 3:1 texte large 18px+
- Sémantique HTML propre · nav/main/article/section/aside/footer
- h1 unique par page, hiérarchie h2/h3/h4 respectée
- Tab sequence logique, focus visible, skip link "Aller au contenu"
- Drawer mobile fermable par Escape, FAQ accordéons Enter/Space
- `prefers-reduced-motion` · animations 0.01ms
- `prefers-color-scheme: dark` · **PAS de mode sombre V1** (arbitrage DirCom, registre éditorial impose palette stable)

### Cibles Lighthouse V1
LCP < 2.5s · INP < 200ms · CLS < 0.1 · Performance ≥ 90 · Accessibility ≥ 95

---

## 12. Hors-périmètre Lot 9 (confirmation)

- Intégration WordPress UAGB (essencelensoi.fr actuel)
- Build Astro + déploiement + CMS headless · passe Claude Code
- Migration contenu WordPress → CMS · passe Sébastien + Claude Code
- Réécriture skill `notion-to-essencelensoi` · projet parallèle Sébastien
- Configuration GBP préservation SEO Médoc · projet Sébastien
- Mode sombre V1 · refusé arbitrage DirCom

---

## 13. Critère final Lot 9

Le template Lot 9 est validé si les 5 sites/sous-pages tiennent les 5 tensions TIP V3 (profond sans grandiloquence · simple sans pauvreté · clair sans froideur · chaleureux sans mollesse · premium sans arrogance) en responsive sur les 3 breakpoints validés.

Test de référence ·
- waytofreedom.fr + SÉSÂMES + Voie + EES · *« Cette maquette pourrait-elle apparaître comme refonte d'un site Aesop, Hermès, The Row ou Frédéric Malle ? »*
- AVE · *« Cette maquette pourrait-elle apparaître comme refonte de The Beauty Chef Edit ou Pukka Wellness ? »*

Si non sur une page, retravailler avant scellement.

---

## 14. Calendrier indicatif

- Lot 9 production Claude Design · 7-12 jours
- Validation DirCom + 1 cycle retours · 2-3 jours
- Scellement Lot 9 cible · J+15 à J+20
- Passe Claude Code intégration EES (priorité 1) · J+15 → J+30
- Mise en production essencelensoi.fr V1 · J+45 cible
- Passes Claude Code WTF + AVE · J+45 → J+75 (conditionnées seuil respiration 3 000 €/mois Mémoire Stratégique)

---

*Inputs Phase 2 collectés 19 mai 2026 — DirCom Way To Freedom · Claude Design*
*À consommer au démarrage de la session Lot 9 dédiée*
