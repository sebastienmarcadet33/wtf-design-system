// lot4-primitives.jsx — Lot 4 production · primitives partagées · V3.0c
//
// Source des tokens : tokens-v3.css (inlinés ici en JS pour usage inline JSX).
// Wordmarks typographiques propres (pas SVG d'illustration) — placeholders
// honnêtes pour WTF / AVE en attendant validation pistes itération 3.
//
// ────────────────────────────────────────────────────────────
// V3.0c · 19 mai 2026 · DirCom + Claude Design
// ────────────────────────────────────────────────────────────
// Synchronisation miroir tokens V3.0b finalisée :
//   · eesRose        #E8D2C6  (rose poudré signature restauré v2.1)
//   · eesRoseDeep    #D9B8A6  (manifeste pivot rare)
//   · eesGoldSoft    #D9B884  (or doux V3.0b, dégradés photo)
//   · eesRoseSoft    deprecated — re-pointé sur eesRose pour compat
//     (à retirer définitivement quand PhotoSlot aura migré vers eesRose)
//   · AVE enrichie : aveAloes #5E7A4E + aveAloesClair #93A984 + aveFlamme #C9622E
// ────────────────────────────────────────────────────────────
//
// Exports window : T, Frame, ArtbgL4, MetaL4, NoteCard,
//   WordmarkEES, WordmarkSES, WordmarkWTF, WordmarkVoie, WordmarkAVE,
//   PapillonGold, TriangleSes, MonogrammePhoenix,
//   PhotoSlot, TitreL4, SignatureL4, TaglineL4, Filet, MotCoeur

// ─────────────────────────────────────────────────────────────
// Tokens — miroir tokens-v3.css
// ─────────────────────────────────────────────────────────────
const T = {
  // WTF · V3.0b chaude
  wtfLight:    '#FAF7F2',
  wtfLin:      '#F6F1E8',
  wtfNuit:     '#1B1814',  // nuit dominante V3.0b (remplace #1F2438)
  wtfNuitChaude: '#2E2A22',
  wtfDoreBas:  '#B8884A',  // or terre partagé EES · cohérence mère-fille
  wtfGold:     '#B8884A',  // alias — re-pointé V3.0b (était #C9A24E)
  wtfInk:      '#0F1218',
  // EES · V3.0b rose restauré
  eesCream:    '#F6F1E8',
  eesRose:     '#E8D2C6',  // SIGNATURE V3.0b restaurée (était #DCC5C0)
  eesRoseDeep: '#D9B8A6',  // V3.0b (était #C9A99F)
  eesGold:     '#B8884A',
  eesGoldSoft: '#D9B884',  // V3.0b réintégré
  eesSage:     '#7A8B6F',
  eesDeep:     '#2E3829',
  eesRoseSoft: '#E8D2C6',  // alias deprecated — re-pointé sur rose signature
  // SÉSÂMES · inchangé
  sesLight:    '#FAF7F2',
  sesViolet:   '#4A3A5C',
  sesSky:      '#BCD4DE',
  sesGold:     '#C9A24E',
  sesGoldFlake:'#D4B260',
  sesFlame:    '#E89B3F',
  sesInk:      '#0F1218',
  // Voie · inchangé
  voieCopper:  '#B0732E',
  voieNight:   '#1F3B4D',
  voieCream:   '#F6F1E8',
  voieGold:    '#C9A24E',
  // AVE · V3.0b enrichie
  aveCream:    '#F6F1E8',
  aveAloes:    '#5E7A4E',  // V3.0b signature matière végétale
  aveAloesClair: '#93A984',// V3.0b bandeaux, hauts de page
  aveGold:     '#C9A24E',
  aveInk:      '#0F1218',
  aveFlamme:   '#C9622E',  // V3.0b pivot 1-2×/saison MAX
  // Profils fondateurs · couche au-dessus, inchangé
  celCoral:    '#D55B47',
  sebPetrol:   '#2D5F6E',
  // Encres communes
  ink:         '#1F1A14',
  ink2:        '#3B342A',
  inkMute:     '#5C544A',
  inkLine:     'rgba(15,18,24,.12)',
  // Polices
  ffDisplay:   'Fraunces, Georgia, serif',
  ffItalic:    'Instrument Serif, Georgia, serif',
  ffBody:      'Inter Tight, system-ui, sans-serif',
  ffMono:      'ui-monospace, SF Mono, Menlo, monospace',
};

// ─────────────────────────────────────────────────────────────
// Frame — canevas fixe (1080×1080, 1080×1350, etc.) scalé pour
// l'affichage dans l'artboard. La taille canonique reste intacte
// pour cohérence avec la production rasterisée wkhtmltoimage 3×.
// ─────────────────────────────────────────────────────────────
function Frame({ w, h, bg, ink = T.ink, scale = 0.4, children, style }) {
  return (
    <div style={{
      width: w, height: h,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: bg, color: ink,
      fontFamily: T.ffBody,
      position: 'relative', overflow: 'hidden',
      ...style,
    }}>
      {children}
    </div>
  );
}

// Conteneur d'artboard : enveloppe + pied méta léger
function ArtbgL4({ children, bg = T.wtfLight, ink = T.ink, padding = 0 }) {
  return (
    <div style={{
      width:'100%', height:'100%', background: bg, color: ink,
      display:'flex', flexDirection:'column', overflow:'hidden',
    }}>
      <div style={{flex: 1, padding, display:'flex', alignItems:'flex-start', justifyContent:'flex-start', position:'relative', overflow:'hidden'}}>
        {children}
      </div>
    </div>
  );
}

function MetaL4({ label, sub, light = false }) {
  return (
    <div style={{
      padding:'12px 22px',
      borderTop:`1px solid ${light ? 'rgba(250,247,242,.18)' : 'rgba(15,18,24,.10)'}`,
      display:'flex', alignItems:'baseline', gap: 12, justifyContent:'space-between',
      fontFamily: T.ffBody,
    }}>
      <span style={{
        fontSize: 11, letterSpacing: '.16em', textTransform:'uppercase',
        color: light ? 'rgba(250,247,242,.62)' : T.ink2, fontWeight: 500,
      }}>{label}</span>
      {sub && (
        <span style={{
          fontSize: 10, letterSpacing: '.06em', fontFamily: T.ffMono,
          color: light ? 'rgba(250,247,242,.40)' : 'rgba(15,18,24,.50)',
        }}>{sub}</span>
      )}
    </div>
  );
}

function NoteCard({ eyebrow, title, body, accent = T.wtfGold }) {
  return (
    <div style={{
      width:'100%', height:'100%', background: T.wtfLight,
      padding: 36, display:'flex', flexDirection:'column', gap: 18,
    }}>
      {eyebrow && (
        <div style={{
          fontFamily: T.ffBody,
          fontSize: 11, letterSpacing:'.22em', textTransform:'uppercase',
          color: accent, fontWeight: 500,
        }}>{eyebrow}</div>
      )}
      <h2 style={{
        fontFamily: T.ffDisplay, fontWeight: 400,
        fontVariationSettings:'"opsz" 96, "wght" 400',
        fontSize: 26, lineHeight: 1.18,
        color: T.ink, maxWidth:'32ch', textWrap:'balance',
      }}>{title}</h2>
      <div style={{
        fontFamily: T.ffBody, fontSize: 14, lineHeight: 1.55,
        color: T.ink2, maxWidth:'52ch',
        display:'flex', flexDirection:'column', gap: 10,
      }}>{body}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Wordmarks typographiques — pas d'illustration, pas de glyphe
// inventé. EES wordmark provisoire : Fraunces italic SOFT 60
// + lettre C légèrement agrandie. SÉSÂMES garde son triangle
// (acquis doctrine). WTF et AVE en attente itération 3 (placeholder
// typo propre + indication italique).
// ─────────────────────────────────────────────────────────────
function WordmarkEES({ size = 48, color = T.eesGold }) {
  return (
    <span style={{
      fontFamily: T.ffDisplay, fontStyle:'italic',
      fontVariationSettings:`"opsz" 96, "wght" 400, "SOFT" 80`,
      fontSize: size, color, letterSpacing:'.005em',
      lineHeight: 1, display:'inline-block', whiteSpace:'nowrap',
    }}>
      EssenCel’en Soi
    </span>
  );
}

function WordmarkSES({ size = 28, color = T.sesInk, withGlyph = true, gap = 14 }) {
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap,
      fontFamily: T.ffDisplay, fontWeight: 400,
      fontVariationSettings:`"opsz" 96, "wght" 400`,
      fontSize: size, color, letterSpacing:'.32em',
      textTransform:'uppercase', lineHeight: 1,
    }}>
      {withGlyph && <TriangleSes size={size * 0.95} ink={color}/>}
      <span>SÉSÂMES</span>
    </span>
  );
}

function WordmarkWTF({ size = 32, color = T.wtfInk, weight = 300 }) {
  return (
    <span style={{
      fontFamily: T.ffDisplay,
      fontVariationSettings:`"opsz" 144, "wght" ${weight}`,
      fontSize: size, color, letterSpacing:'.04em',
      lineHeight: 1, display:'inline-block', whiteSpace:'nowrap',
    }}>
      Way To Freedom
    </span>
  );
}

function WordmarkVoie({ size = 32, color = T.voieCopper, italic = true }) {
  return (
    <span style={{
      fontFamily: T.ffDisplay, fontStyle: italic ? 'italic' : 'normal',
      fontVariationSettings:`"opsz" 96, "wght" 400`,
      fontSize: size, color, letterSpacing:'.02em',
      lineHeight: 1, display:'inline-block', whiteSpace:'nowrap',
    }}>
      Voie d’autonomie
    </span>
  );
}

function WordmarkAVE({ size = 24, color = T.aveInk }) {
  return (
    <span style={{
      fontFamily: T.ffDisplay,
      fontVariationSettings:`"opsz" 96, "wght" 400`,
      fontSize: size, color, letterSpacing:'.34em',
      textTransform:'uppercase', lineHeight: 1, display:'inline-block',
    }}>AVE</span>
  );
}

// ─────────────────────────────────────────────────────────────
// Glyphes minimaux autorisés
// — TriangleSes : géométrie pure (formes simples), trait fin
// — PapillonGold : silhouette extrêmement réduite, formes
//   géométriques (deux ailes en ellipses), pas une illustration
//   Folon. Placeholder typographique en attendant itération 3.
// — MonogrammePhoenix : monogramme initiale en cartouche, pas
//   un phénix illustré. Placeholder honnête.
// ─────────────────────────────────────────────────────────────
function TriangleSes({ size = 28, ink = T.sesInk, gold = T.sesGold, sky = T.sesSky }) {
  const s = size;
  return (
    <svg viewBox="0 0 80 80" width={s} height={s} aria-hidden="true" style={{display:'inline-block', verticalAlign:'middle'}}>
      <path d="M 40 10 L 67 62 L 13 62 Z" fill="none" stroke={ink} strokeWidth="2.4" strokeLinejoin="round"/>
      <ellipse cx="40" cy="47" rx="7" ry="3.2" fill={gold}/>
      <path d="M 40 33 Q 38 27 40 22 Q 42 27 40 33 Z" fill={sky} opacity="0.9"/>
    </svg>
  );
}

// Papillon « extractible v2 » de l'itération 2 — silhouette
// géométrique simple, autorisée comme glyphe doctrinal (équivalent
// du triangle SÉSÂMES). PAS l'illustration Folon — pour ça on attend.
function PapillonGold({ size = 64, gold = T.wtfGold, ink = T.wtfInk }) {
  const s = size;
  return (
    <svg viewBox="0 0 120 120" width={s} height={s} aria-hidden="true">
      <g transform="translate(60 60)">
        <path d="M 0 0
                 C -18 -16, -42 -18, -52 -7
                 C -58 5, -50 16, -34 17
                 C -20 17, -8 11, -2 4
                 L 0 0
                 L 2 4
                 C 8 11, 20 17, 34 17
                 C 50 16, 58 5, 52 -7
                 C 42 -18, 18 -16, 0 0 Z"
              fill={gold}/>
        <line x1="0" y1="-13" x2="0" y2="17" stroke={ink} strokeWidth="1.6" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

// Monogramme phénix — placeholder honnête (lettre A dans cartouche
// rectangulaire double filet, esprit emblème Maier sans tenter
// l'illustration). Swap quand itération 2 AVE validée.
function MonogrammePhoenix({ size = 80, ink = T.aveInk, gold = T.aveGold }) {
  const s = size;
  return (
    <svg viewBox="0 0 100 120" width={s * 100/120} height={s} aria-hidden="true">
      <rect x="6" y="6" width="88" height="108" fill="none" stroke={ink} strokeWidth="2.2"/>
      <rect x="12" y="12" width="76" height="96" fill="none" stroke={ink} strokeWidth="0.6"/>
      <text x="50" y="76" textAnchor="middle"
            style={{
              fontFamily:'Fraunces, Georgia, serif',
              fontStyle:'italic',
              fontSize: 56, fill: gold,
              fontWeight: 400,
            }}>A</text>
      <line x1="22" y1="90" x2="78" y2="90" stroke={ink} strokeWidth="0.6"/>
      <text x="50" y="102" textAnchor="middle"
            style={{
              fontFamily:'Inter Tight, sans-serif',
              fontSize: 7, letterSpacing:'.36em',
              fill: ink, fontWeight: 500,
            }}>EX · IGNE · VITA</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// PhotoSlot — aplat assumé provisoire, instruction de cadrage.
// `direction` court (≤ 14 mots) — pas de bavardage scénique.
// ─────────────────────────────────────────────────────────────
function PhotoSlot({ w, h, instruction, tint = T.eesRoseSoft, light = false }) {
  const stripeFg = light ? 'rgba(250,247,242,.18)' : 'rgba(15,18,24,.06)';
  return (
    <div style={{
      width: w, height: h, background: tint,
      backgroundImage:
        `repeating-linear-gradient(135deg, ${stripeFg} 0 1px, transparent 1px 22px)`,
      display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily: T.ffItalic, fontStyle:'italic',
      fontSize: Math.max(12, Math.min(w, h) * 0.045),
      color: light ? 'rgba(250,247,242,.7)' : 'rgba(15,18,24,.6)',
      textAlign:'center', padding: 28, lineHeight: 1.35,
    }}>
      <span style={{maxWidth:'78%'}}>{instruction}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Texte primitives
// ─────────────────────────────────────────────────────────────
function TitreL4({ before = '', accent, after = '', accentColor = T.wtfGold, ink = T.ink, size = 80, maxw = '14ch', align = 'left' }) {
  return (
    <h1 style={{
      fontFamily: T.ffDisplay, fontWeight: 400,
      fontVariationSettings:'"opsz" 96, "wght" 400, "SOFT" 0',
      fontSize: size, lineHeight: 1.12, color: ink,
      maxWidth: maxw, textWrap:'balance',
      margin: 0, padding: 0,
      fontFeatureSettings:'"kern" 1, "liga" 1',
      textAlign: align,
    }}>
      {before}
      <em style={{
        fontFamily: T.ffItalic, fontStyle:'italic',
        color: accentColor, fontWeight: 400, letterSpacing:'.005em',
      }}>{accent}</em>
      {after}
    </h1>
  );
}

function SignatureL4({ name, color = T.ink, size = 32 }) {
  return (
    <span style={{
      fontFamily: T.ffItalic, fontStyle:'italic',
      fontSize: size, lineHeight: 1.2,
      letterSpacing:'.005em', color,
    }}>{name}</span>
  );
}

function TaglineL4({ children, color = T.ink2, size = 14 }) {
  const tracking = size >= 19 ? '.22em' : (size >= 14 ? '.16em' : '.12em');
  return (
    <span style={{
      fontFamily: T.ffBody, fontSize: size, fontWeight: 500,
      letterSpacing: tracking, textTransform:'uppercase', color,
      lineHeight: 1.3,
    }}>{children}</span>
  );
}

function Filet({ w = 56, h = 1, color = T.wtfGold, opacity = 0.75, vertical = false }) {
  return (
    <div style={{
      width: vertical ? h : w, height: vertical ? w : h,
      background: color, opacity,
    }} />
  );
}

// Mot-cœur en italique, accent or — sans surligneur, juste l'italique
function MotCoeur({ children, color = T.wtfGold, size = 'inherit' }) {
  return (
    <em style={{
      fontFamily: T.ffItalic, fontStyle:'italic',
      color, fontSize: size, letterSpacing:'.005em',
    }}>{children}</em>
  );
}

Object.assign(window, {
  T, Frame, ArtbgL4, MetaL4, NoteCard,
  WordmarkEES, WordmarkSES, WordmarkWTF, WordmarkVoie, WordmarkAVE,
  TriangleSes, PapillonGold, MonogrammePhoenix,
  PhotoSlot, TitreL4, SignatureL4, TaglineL4, Filet, MotCoeur,
});
