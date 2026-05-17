// lot6-documentation.jsx — Lot 6 production · documentation transversale
//
// Objectif : transformer le catalogue (Lot 4 + Lot 5 = 55 composants) en
// matériel transmissible. Cinq notes :
//
//   H1 · Inventaire / Index visuel — vue plate des 55 composants par
//        section, slug → format → usage canonique
//   H2 · Brief illustrateur transmissible — option C DirCom 14 mai
//   H3 · Protocole de swap logos — comment Sébastien injecte ses fichiers
//        Midjourney/DALL-E sans casser le Lot 4
//   H4 · Garde-fous récapitulatifs — checklist 12 points par production
//   H5 · Critère final — la question Hermès / Aesop / The Row
//
// Exports window : DocH1, DocH2, DocH3, DocH4, DocH5

// ─────────────────────────────────────────────────────────────
// Layout générique d'une note de documentation. Plus dense que
// NoteCard du Lot 4 — on est dans la doc, on assume la matière.
// ─────────────────────────────────────────────────────────────
function DocNote({ kicker, title, accent = T.wtfGold, children, bg = T.wtfLight, ink = T.ink }) {
  return (
    <div style={{
      width:'100%', height:'100%', background: bg, color: ink,
      padding: 36, display:'flex', flexDirection:'column', gap: 18,
      overflow:'auto',
    }}>
      {kicker && (
        <div style={{
          fontFamily: T.ffBody,
          fontSize: 11, letterSpacing:'.22em', textTransform:'uppercase',
          color: accent, fontWeight: 500,
        }}>{kicker}</div>
      )}
      <h2 style={{
        fontFamily: T.ffDisplay, fontWeight: 400,
        fontVariationSettings:'"opsz" 96, "wght" 400',
        fontSize: 26, lineHeight: 1.18,
        color: ink, maxWidth:'32ch', textWrap:'balance',
      }}>{title}</h2>
      <div style={{
        fontFamily: T.ffBody, fontSize: 13, lineHeight: 1.55,
        color: T.ink2,
        display:'flex', flexDirection:'column', gap: 12,
        maxWidth:'66ch',
      }}>{children}</div>
    </div>
  );
}

// Mini tableau d'inventaire — slug · format · usage
function InvRow({ slug, format, usage, accent = T.wtfGold }) {
  return (
    <div style={{
      display:'grid', gridTemplateColumns:'minmax(72px, .9fr) minmax(96px, 1.1fr) 3fr',
      gap: 14, alignItems:'baseline', padding: '6px 0',
      borderBottom: `1px solid ${T.inkLine}`,
    }}>
      <code style={{fontFamily: T.ffMono, fontSize: 11, color: accent, letterSpacing:'.02em'}}>
        {slug}
      </code>
      <span style={{fontFamily: T.ffMono, fontSize: 10, color: T.inkMute, letterSpacing:'.04em'}}>
        {format}
      </span>
      <span style={{fontFamily: T.ffBody, fontSize: 12, color: T.ink2, lineHeight: 1.4}}>
        {usage}
      </span>
    </div>
  );
}

// Section title à l'intérieur d'une note (regroupement d'InvRow)
function InvHead({ children, accent = T.wtfGold }) {
  return (
    <div style={{display:'flex', alignItems:'center', gap: 12, marginTop: 14, marginBottom: 4}}>
      <span style={{
        fontFamily: T.ffBody, fontSize: 11, letterSpacing:'.18em',
        textTransform:'uppercase', color: T.ink, fontWeight: 500,
      }}>{children}</span>
      <span style={{flex: 1, height: 1, background: accent, opacity: 0.4}}/>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
// H1 — Inventaire / Index visuel
// ═════════════════════════════════════════════════════════════
function DocH1() {
  return (
    <DocNote
      kicker="Lot 6 · H1 · Inventaire production v3"
      title="55 composants livrés. Slug, format, usage canonique."
      accent={T.wtfGold}
    >
      <p>Toutes les pièces sont rendues sur tokens v3 verrouillés, marges 96–128 px,
      Fraunces 96 opsz pour les titres, Inter Tight 300/400 pour le body. Aucun des
      9 interdits cardinaux (anti-pattern 11bis). Pipeline cible : wkhtmltoimage 3× ou
      capture Retina iPad Pro.</p>

      <InvHead accent={T.eesGold}>Section A · Citations pures (Lot 4 · 8)</InvHead>
      <InvRow accent={T.eesGold} slug="A1" format="1080×1080" usage="EES citation IG carré · « Le corps sait. »" />
      <InvRow accent={T.eesGold} slug="A2" format="1080×1350" usage="EES citation IG portrait · « Reposer le système nerveux. »" />
      <InvRow accent={T.sesGold} slug="A3" format="1200×1200" usage="SÉSÂMES citation LI carré · « Pas par manque de système. »" />
      <InvRow accent={T.sesGold} slug="A4" format="1080×1350" usage="SÉSÂMES citation IG portrait · seuil à nommer" />
      <InvRow accent={T.wtfGold} slug="A5" format="1200×1200" usage="WTF citation LI carré · maison-mère" />
      <InvRow accent={T.wtfGold} slug="A6" format="1080×1350" usage="WTF manifeste fond bleu nuit · pivot signature" />
      <InvRow accent={T.voieCopper} slug="A7" format="1080×1080" usage="Voie citation IG carré · mouvement avant méthode" />
      <InvRow accent={T.eesGold} slug="A8" format="1080×1350" usage="EES manifeste rose poudré profond · pivot rare" />

      <InvHead accent={T.eesGold}>Section B · Photo + texte (Lot 4 · 7)</InvHead>
      <InvRow accent={T.eesGold} slug="B1" format="1080×1080" usage="EES photo dominante IG carré · main posée" />
      <InvRow accent={T.eesGold} slug="B2" format="1080×1350" usage="EES photo + texte IG portrait" />
      <InvRow accent={T.sesGold} slug="B3" format="1200×1200" usage="SÉSÂMES photo + texte LI carré" />
      <InvRow accent={T.sesGold} slug="B4" format="1080×1350" usage="SÉSÂMES photo + texte IG portrait" />
      <InvRow accent={T.wtfGold} slug="B5" format="1584×396" usage="WTF banner LinkedIn personnel" />
      <InvRow accent={T.voieCopper} slug="B6" format="1080×1080" usage="Voie photo + texte IG carré" />
      <InvRow accent={T.voieCopper} slug="B7" format="1080×1350" usage="Voie photo dominante IG portrait" />

      <InvHead accent={T.celCoral}>Section C · Profils personnels (Lot 4 · 4)</InvHead>
      <InvRow accent={T.sebPetrol} slug="C1" format="1200×1200" usage="Sébastien profil LI · liseré pétrole" />
      <InvRow accent={T.sebPetrol} slug="C2" format="1080×1350" usage="Sébastien chronique IG portrait" />
      <InvRow accent={T.celCoral} slug="C3" format="1200×1200" usage="Céline profil LI · liseré coral" />
      <InvRow accent={T.celCoral} slug="C4" format="1080×1350" usage="Céline chronique IG portrait" />

      <InvHead accent={T.wtfGold}>Section D · Stories (Lot 4 · 4) — 1080×1920 9:16</InvHead>
      <InvRow accent={T.eesGold} slug="D1" format="9:16" usage="EES story tagline « Le corps sait. »" />
      <InvRow accent={T.sesGold} slug="D2" format="9:16" usage="SÉSÂMES story tagline « L'attention précède l'action. »" />
      <InvRow accent={T.wtfGold} slug="D3" format="9:16" usage="WTF manifeste bleu nuit" />
      <InvRow accent={T.voieCopper} slug="D4" format="9:16" usage="Voie story tagline mouvement / méthode" />

      <InvHead accent={T.wtfGold}>Section E · Système email (Lot 4 · 5)</InvHead>
      <InvRow accent={T.sebPetrol} slug="E1" format="600×200" usage="Signature email Sébastien" />
      <InvRow accent={T.celCoral} slug="E2" format="600×200" usage="Signature email Céline" />
      <InvRow accent={T.wtfGold} slug="E3" format="600×200" usage="Signature email WTF institutionnelle" />
      <InvRow accent={T.eesGold} slug="E4" format="600×260" usage="Header newsletter EES" />
      <InvRow accent={T.sesGold} slug="E5" format="600×260" usage="Header newsletter SÉSÂMES" />

      <InvHead accent={T.wtfGold}>Section F · Hero web (Lot 4 · 4) — 1440×720</InvHead>
      <InvRow accent={T.wtfGold} slug="F1" format="1440×720" usage="WTF hero maison-mère" />
      <InvRow accent={T.sesGold} slug="F2" format="1440×720" usage="SÉSÂMES hero clarification" />
      <InvRow accent={T.eesGold} slug="F3" format="1440×720" usage="EES hero sanctuaire" />
      <InvRow accent={T.voieCopper} slug="F4" format="1440×720" usage="Voie hero autonomie économique" />

      <InvHead accent={T.eesGold}>Section H · Carrousels narratifs (Lot 5 · 21) — 1080×1350</InvHead>
      <InvRow accent={T.eesGold} slug="A1→A5" format="1080×1350 ×5" usage="EES « Reposer le système nerveux »" />
      <InvRow accent={T.sesGold} slug="B1→B6" format="1080×1350 ×6" usage="SÉSÂMES « Pas par manque de sérieux »" />
      <InvRow accent={T.wtfGold} slug="C1→C5" format="1080×1350 ×5" usage="WTF « Une maison. Trois chemins. »" />
      <InvRow accent={T.voieCopper} slug="D1→D5" format="1080×1350 ×5" usage="Voie « Le mouvement avant la méthode. »" />

      <InvHead accent={T.wtfGold}>Section G/I · Notes doctrine (Lot 4 · 2 + Lot 6 · 5)</InvHead>
      <InvRow slug="G1" format="note" usage="Garde-fous transversaux Lot 4" />
      <InvRow slug="G2" format="note" usage="Question retour DirCom · pistes logos A/B/C" />
      <InvRow slug="H1" format="note" usage="Cet inventaire (Lot 6)" />
      <InvRow slug="H2" format="note" usage="Brief illustrateur transmissible (option C)" />
      <InvRow slug="H3" format="note" usage="Protocole de swap logos WTF + AVE" />
      <InvRow slug="H4" format="note" usage="Checklist 12 points par production" />
      <InvRow slug="H5" format="note" usage="Critère final Hermès / Aesop / The Row" />
    </DocNote>
  );
}

// ═════════════════════════════════════════════════════════════
// H2 — Brief illustrateur transmissible (option C DirCom)
// ═════════════════════════════════════════════════════════════
function DocH2() {
  return (
    <DocNote
      kicker="Lot 6 · H2 · Brief illustrateur transmissible"
      title="Si l'option C est retenue : brief formel pour commande externe."
      accent={T.sesGold}
    >
      <p><strong>Contexte.</strong> Way To Freedom est l'écosystème porté par Céline & Sébastien
      depuis Sainte-Hélène en Médoc. Maison-mère + trois chemins distincts (clarification intérieure
      SÉSÂMES, sanctuaire du corps EES, voie d'autonomie économique). Mood : Aman, Hermès, The Row,
      Aimé Leon Dore. <em>Pas</em> Monocle, NYT, Apartamento.</p>

      <p><strong>Pièces à produire.</strong></p>
      <ul style={{paddingLeft: 18, display:'flex', flexDirection:'column', gap: 6}}>
        <li><strong>Logo WTF maison-mère.</strong> Métaphore visuelle : montagne en émergence
        + papillon-or qui plane au-dessus du sommet. Trait habité, dessiné à la main, jamais
        géométrique pur. Référence d'âme : Folon. Référence de rigueur : Saville pour le silence.</li>
        <li><strong>Logo AVE Aloe Vera Excellence.</strong> Phénix sobre, presque cartographique.
        Réminiscence sceau du Bon Marché ou Diptyque. Doit pouvoir tenir en 32 px (favicon) comme en
        kakemono 600 px. Encre noire + or canalisé <code>#C9A24E</code> uniquement.</li>
      </ul>

      <p><strong>Contraintes typographiques.</strong> Aucun lettrage manuscrit sur le wordmark.
      Le wordmark <em>Way To Freedom</em> reste en Fraunces 144 opsz, weight 300, letter-spacing
      <code>.04em</code>. L'illustration vit à côté du wordmark, jamais à la place.</p>

      <p><strong>Livrables techniques attendus.</strong></p>
      <ul style={{paddingLeft: 18, display:'flex', flexDirection:'column', gap: 6}}>
        <li>SVG vectoriel propre, calques nommés, gabarit Illustrator.</li>
        <li>PNG transparent 1024 px et 2048 px sur le côté long.</li>
        <li>Version monochrome (noir 100%) + version or (1 seul ton, pas de dégradé).</li>
        <li>Clear-zone définie en hauteur de glyphe (cohérent doctrine chap. XVI).</li>
      </ul>

      <p><strong>Illustrateurs envisagés.</strong> Bourthoumieux (trait Folon), Toutsy (rigueur
      typographique + chaleur), ou équivalent à proposer. Budget à arbitrer avec DirCom.
      Délai indicatif : 4 à 6 semaines, deux rounds d'allers-retours.</p>

      <p><strong>Anti-brief — ce que l'illustrateur NE doit PAS faire.</strong> Gradient de
      paillettes. Effet 3D ombré. Style « start-up amicale » (formes molles colorées).
      Reproduction servile de Folon (on cherche la cousinité, pas la copie). Pas d'emoji
      ni de glyphe inspiré jeu vidéo.</p>
    </DocNote>
  );
}

// ═════════════════════════════════════════════════════════════
// H3 — Protocole de swap logos
// ═════════════════════════════════════════════════════════════
function DocH3() {
  return (
    <DocNote
      kicker="Lot 6 · H3 · Protocole de swap · révisé 15 mai 2026"
      title="Doctrine 14 mai actualisée : le sceau papillon-corps humain est le logo signature unique. La composition montagne est manifeste éditorial."
      accent={T.wtfGold}
    >
      <p><strong>Doctrine 14 mai 2026 (révise 1er mai).</strong> Le logo WTF principal unique
      est désormais le <em>sceau papillon-corps humain</em> v2 (silhouette androgyne ailée,
      gravure XVIIe, touches vertes végétation). C'est l'objet de signature compacte qui
      apparaît partout où WTF a besoin d'une marque identifiable. La composition montagne
      (Image 2 manifeste) est <strong>reclassée</strong> : ce n'est pas un logo, c'est un
      <em>manifeste narratif éditorial</em> pour usages longs (hero web pleine page, ouverture
      de carrousel manifeste, kakemono, packaging). Les deux coexistent dans des usages
      distincts et ne se confondent jamais.</p>

      <p><strong>État du swap (15 mai 2026).</strong> Les sceaux DALL-E ont été reçus et
      intégrés. Six constantes pointent vers <code>v3/assets/logos/</code> :
      <code>LOGO_WTF_SRC</code>, <code>MANIFESTE_WTF_SRC</code>, <code>FAVICON_WTF_SRC</code>,
      <code>LOGO_AVE_SRC</code>, <code>FAVICON_AVE_SRC</code>, <code>LOGO_EES_FAVICON_SRC</code>.
      Tous les composants <code>{'<LogoWTF/>'}</code>, <code>{'<LogoAVE/>'}</code>,
      <code>{'<LogoManifesteWTF/>'}</code>, <code>{'<LogoEESFavicon/>'}</code> rendent
      l'image photoréaliste, pas le fallback typographique.</p>

      <p><strong>Trois manières de re-swapper (si nouvelle itération).</strong></p>

      <ol style={{paddingLeft: 18, display:'flex', flexDirection:'column', gap: 10}}>
        <li>
          <strong>Méthode A · remplacement de fichier.</strong> Écraser le PNG dans
          <code> v3/assets/logos/wtf-sceau-v2.png</code>. Aucune modification de code.
          <em>Recommandé</em> pour les itérations de raffinement.
        </li>
        <li>
          <strong>Méthode B · nouveau chemin.</strong> Coller le fichier sous un nouveau nom
          puis modifier la constante correspondante dans <code>v3/lot5-logo-swap.jsx</code>.
          Pratique pour A/B tester deux pistes Midjourney côte-à-côte.
        </li>
        <li>
          <strong>Méthode C · override global runtime.</strong> Avant chargement,
          <code> window.LOGO_WTF_SRC = "..."</code>. Test isolé sans rebuild.
        </li>
      </ol>

      <p><strong>Validation avant swap définitif.</strong> Tester l'image dans : carte WTF F1
      (hero web), carte C5 carrousel WTF (signature duo sur crème), card story D3 (bleu nuit),
      signature email E3, favicon 32 px. Si l'image tient à toutes ces échelles et tous ces
      fonds, on swappe. Sinon, on demande un raffinement.</p>

      <p><strong>Note sur fonds foncés — résolu 15 mai 2026.</strong> Les six PNG sceau écosystème
      ont été détourés par soustraction chromatique du fond cream (canal alpha activé). Ils se posent
      désormais proprement sur n'importe quel canvas — bleu nuit, crème, rose poudré, vert sage —
      sans rectangle cream incongru. Un seul standard, plus de fallback géométrique conservé pour
      les fonds foncés. Doctrine d'écosystème visuelle cohérente.</p>

      <p><strong>Régression.</strong> Pour repasser un fallback typographique (test, ou si une
      piste retenue est invalidée), passer la constante à <code>null</code> dans
      <code>v3/lot5-logo-swap.jsx</code>.</p>
    </DocNote>
  );
}

// ═════════════════════════════════════════════════════════════
// H4 — Checklist 12 points par production
// ═════════════════════════════════════════════════════════════
function DocH4() {
  const items = [
    'Tokens v3 utilisés exclusivement (palettes pôle alignées au sujet — pas mixées)',
    'Fraunces 96 opsz pour titres, Inter Tight 300/400 pour body, Instrument Serif italique sur mot-cœur',
    'Marges respiration : minimum 96 px sur les côtés en 1080+, 64 px en formats email',
    'Mot-cœur en italique avec or pôle, jamais plus de 2 mots dorés par visuel',
    'Wordmark de l\'entité présent (pas glyphe seul, sauf favicon ≤ 64 px)',
    'Signature respectant la convention nominale (Sébastien seul, Céline seule, ou Céline & Sébastien duo)',
    'Tagline canonique respectée si signée (Sanctuaire du corps · L\'attention précède l\'action · etc.)',
    'Aucun des 9 interdits 11bis : pas de N°, pas d\'eyebrow daté, pas de cartouche, pas de filets surlignants haut+bas, pas de glyphe inventé, pas de surligneur or paillette',
    'Tiret cadratin uniquement en incise rédigée (jamais en flanquement de signature)',
    'Photos en aplat provisoire avec instruction de cadrage ≤ 14 mots (swap photos authentiques en production)',
    'Pagination de carrousel en points discrets bas-droite (pas de "1/5" magazine)',
    'Test rasterisation 3× wkhtmltoimage : aucun corps texte < 12 px, plancher --ink-2',
  ];
  return (
    <DocNote
      kicker="Lot 6 · H4 · Checklist 12 points"
      title="À cocher par production. Un seul « non » → on ne livre pas, on corrige."
      accent={T.eesGold}
    >
      <p>Cette grille est la traversée obligatoire avant toute livraison. Plus exigeante que la
      checklist 9 points de grammaire-v2.2 — elle intègre les arbitrages doctrine du 14 mai 2026
      (or transversal aligné pôle dominant, plancher rasterisation, conventions nominales duo).</p>

      <div style={{display:'flex', flexDirection:'column', gap: 4, marginTop: 4}}>
        {items.map((it, i) => (
          <div key={i} style={{
            display:'grid', gridTemplateColumns:'24px 1fr', gap: 10,
            alignItems:'baseline', padding:'6px 0',
            borderBottom: i < items.length - 1 ? `1px solid ${T.inkLine}` : 'none',
          }}>
            <span style={{
              fontFamily: T.ffMono, fontSize: 11, color: T.inkMute,
              display:'inline-flex', alignItems:'center', justifyContent:'center',
              width: 22, height: 22, border: `1px solid ${T.inkLine}`,
            }}>{String(i+1).padStart(2,'0')}</span>
            <span style={{fontSize: 12, color: T.ink2, lineHeight: 1.5}}>{it}</span>
          </div>
        ))}
      </div>
    </DocNote>
  );
}

// ═════════════════════════════════════════════════════════════
// H5 — Critère final Hermès / Aesop / The Row
// ═════════════════════════════════════════════════════════════
function DocH5() {
  return (
    <DocNote
      kicker="Lot 6 · H5 · Critère final"
      title="« Est-ce que ce visuel pourrait sortir sous la signature d'Aesop, Hermès, ou The Row ? »"
      accent={T.wtfGold}
      bg={T.wtfLight}
    >
      <p>La question terminale avant chaque livraison. Si la réponse est <em>non</em>, je ne
      livre pas. Je retravaille.</p>

      <p><strong>Critères de filtrage opérables.</strong></p>

      <ul style={{paddingLeft: 18, display:'flex', flexDirection:'column', gap: 8}}>
        <li><strong>Le silence travaille.</strong> Au moins 30% d'espace négatif sur la composition.
        Le vide n'est pas du remplissage manqué — c'est la matière qui permet à l'essentiel d'apparaître.</li>
        <li><strong>Aucun élément ne crie.</strong> Pas de gradient lumineux, pas d'ombre portée
        dramatique, pas d'urgence marketing. La voix édito reste basse, posée, tenante.</li>
        <li><strong>L'italique sert l'accent, pas la décoration.</strong> Idéalement un seul mot
        italisé par bloc de titre. Si le visuel a deux mots dorés, c'est probablement trop.</li>
        <li><strong>Pas de placement d'icône pour combler.</strong> Si un emplacement semble vide,
        c'est qu'il <em>doit</em> rester vide, ou qu'il manque une vraie matière (photo
        authentique, citation tenante). On ne pose pas d'icône pour faire genre.</li>
        <li><strong>La typographie porte tout.</strong> Si on retire la couleur et qu'il reste
        rien, le visuel n'était pas tenu par la typo — il était tenu par la couleur. Retravailler.</li>
        <li><strong>La signature est sobre.</strong> Prénom seul. Pas de titre, pas de fonction
        marketing, pas de slogan en queue. Le lien vers le site suffit comme passerelle.</li>
      </ul>

      <p><strong>Trois référents-cibles atteints.</strong></p>

      <ul style={{paddingLeft: 18, display:'flex', flexDirection:'column', gap: 6}}>
        <li><em>« Le corps sait. Encore faut-il l'écouter. »</em> — EES IG carré 30/04/2026</li>
        <li><em>« Reposer le système nerveux. »</em> — EES paysage</li>
        <li><em>« Pas par manque de sérieux. Par manque de système. »</em> — SÉSÂMES 28/04/2026</li>
      </ul>

      <p>Tout Lot 4 et Lot 5 vise au moins ce niveau. Les composants qui ne l'atteignent pas
      retournent à la table de travail, pas dans le catalogue.</p>
    </DocNote>
  );
}

Object.assign(window, { DocH1, DocH2, DocH3, DocH4, DocH5, DocNote, InvRow, InvHead });
