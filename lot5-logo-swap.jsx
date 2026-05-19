// lot5-logo-swap.jsx — Hook de swap logos écosystème WTF
//
// Lot 7 · scellement 15 mai 2026 — les 5 sceaux DALL-E sont arrivés.
// Les constantes ci-dessous pointent maintenant vers les fichiers locaux
// dans v3/assets/logos/. Tous les composants <LogoWTF/> <LogoAVE/>
// <LogoEESFavicon/> <LogoManifesteWTF/> <LogoFaviconWTF/> <LogoFaviconAVE/>
// rendent désormais l'image photoréaliste (grain gravure XVIIe, paillette
// or, vert chlorophylle d'enluminure), pas le fallback typographique.
//
// Régression possible : repasser une constante à `null` pour revenir au
// fallback typographique honnête du Lot 4 (PapillonGold / MonogrammePhoenix).
//
// Exports window : LogoWTF, LogoAVE, LogoManifesteWTF, LogoFaviconWTF,
//   LogoFaviconAVE, LogoEESFavicon, SwapStatus, et toutes les constantes SRC.

// ─────────────────────────────────────────────────────────────
// SOURCES — chemins relatifs au HTML qui inclut ce JSX.
// Les HTML qui chargent ce JSX vivent dans v3/, les fichiers logos
// vivent dans v3/assets/logos/ → chemin relatif "./assets/logos/...".
// ─────────────────────────────────────────────────────────────
const LOGO_WTF_SRC          = './assets/logos/wtf-sceau-v2.png';       // sceau papillon-corps humain v2 (signature compacte)
const MANIFESTE_WTF_SRC     = './assets/logos/wtf-manifeste-v2.png';   // manifeste narratif montagne (éditorial long, jamais signature)
const FAVICON_WTF_SRC       = './assets/logos/wtf-favicon.png';        // papillon-corps simplifié pour très petits formats
const LOGO_AVE_SRC          = './assets/logos/ave-sceau-v2.png';       // phénix + feuille aloès, cadre noir
const FAVICON_AVE_SRC       = './assets/logos/ave-favicon.png';        // phénix simplifié sans cadre ni flammes
const LOGO_EES_FAVICON_SRC  = './assets/logos/ees-favicon-v1.png';     // C+lune extrait par soustraction · or sur crème

// ─── V3.0b · WORDMARKS GITHUB raw (passe corrective post-Lot 8) ───
// PNG transparents servis depuis le repo wtf-logos. Chargement réseau
// au runtime ; en pipeline rasterisation offline, inliner via
// super_inline_html (recette COVERAGE.md §3). Fallback typographique
// honnête (Fraunces italic SOFT / TriangleSes géométrique) en cas
// d'erreur de chargement — plus jamais en mode par défaut.
const LOGO_EES_WORDMARK_SRC     = 'https://raw.githubusercontent.com/sebastienmarcadet33/wtf-logos/main/ees-wordmark.PNG';
const LOGO_SESAMES_WORDMARK_SRC = 'https://raw.githubusercontent.com/sebastienmarcadet33/wtf-logos/main/sesames-wordmark.png';
const LOGO_SESAMES_TRIANGLE_SRC = 'https://raw.githubusercontent.com/sebastienmarcadet33/wtf-logos/main/sesames-triangle.png';

// ─────────────────────────────────────────────────────────────
// Helper : récupère la source effective avec override window puis
// constante module puis null. Permet override runtime sans rebuild.
// ─────────────────────────────────────────────────────────────
function resolveSrc(propSrc, windowKey, moduleConst) {
  if (propSrc) return propSrc;
  if (typeof window !== 'undefined' && window[windowKey]) return window[windowKey];
  return moduleConst;
}

// ─────────────────────────────────────────────────────────────
// LogoWTF — sceau papillon-corps humain v2 (signature compacte)
// Props :
//   size       hauteur en px (largeur auto par ratio image)
//   src        override ponctuel
//   tone       'dark' | 'light' — invertit le fallback typo si src absent
// ─────────────────────────────────────────────────────────────
function LogoWTF({ size = 80, src, tone = 'dark', alt = 'Way To Freedom' }) {
  const finalSrc = resolveSrc(src, 'LOGO_WTF_SRC', LOGO_WTF_SRC);
  if (finalSrc) {
    return (
      <img src={finalSrc} alt={alt} draggable={false}
        style={{ height: size, width:'auto', display:'block', imageRendering:'auto' }}/>
    );
  }
  const ink = tone === 'light' ? T.wtfLight : T.wtfInk;
  return <PapillonGold size={size} gold={T.wtfGold} ink={ink}/>;
}

// ─────────────────────────────────────────────────────────────
// LogoAVE — phénix Aloe Vera Excellence (sceau pleine signature)
// ─────────────────────────────────────────────────────────────
function LogoAVE({ size = 80, src, tone = 'dark', alt = 'Aloe Vera Excellence' }) {
  const finalSrc = resolveSrc(src, 'LOGO_AVE_SRC', LOGO_AVE_SRC);
  if (finalSrc) {
    return (
      <img src={finalSrc} alt={alt} draggable={false}
        style={{ height: size, width:'auto', display:'block', imageRendering:'auto' }}/>
    );
  }
  const ink = tone === 'light' ? T.aveCream : T.aveInk;
  return <MonogrammePhoenix size={size} ink={ink} gold={T.aveGold}/>;
}

// ─────────────────────────────────────────────────────────────
// LogoManifesteWTF — manifeste narratif montagne (Image 2)
// USAGE STRICT : éditorial long, hero web manifeste, never signature.
// Doctrine 14 mai : pas un logo. Une composition narrative.
// ─────────────────────────────────────────────────────────────
function LogoManifesteWTF({ height = 320, src, alt = 'Way To Freedom · manifeste narratif' }) {
  const finalSrc = resolveSrc(src, 'MANIFESTE_WTF_SRC', MANIFESTE_WTF_SRC);
  if (finalSrc) {
    return (
      <img src={finalSrc} alt={alt} draggable={false}
        style={{ height, width:'auto', display:'block', imageRendering:'auto' }}/>
    );
  }
  // Fallback : papillon géométrique + filet bas (placeholder honnête)
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap: 18}}>
      <PapillonGold size={height * 0.45}/>
      <span style={{fontFamily:T.ffMono, fontSize: 10, color: T.inkMute, letterSpacing:'.06em'}}>
        manifeste indisponible
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// LogoFaviconWTF — papillon-corps simplifié, très petits formats
// ─────────────────────────────────────────────────────────────
function LogoFaviconWTF({ size = 64, src, alt = 'WTF favicon' }) {
  const finalSrc = resolveSrc(src, 'FAVICON_WTF_SRC', FAVICON_WTF_SRC);
  if (finalSrc) {
    return (
      <img src={finalSrc} alt={alt} draggable={false}
        style={{ height: size, width: size, display:'block', objectFit:'contain' }}/>
    );
  }
  return <PapillonGold size={size}/>;
}

// ─────────────────────────────────────────────────────────────
// LogoFaviconAVE — phénix simplifié sans cadre ni flammes
// ─────────────────────────────────────────────────────────────
function LogoFaviconAVE({ size = 64, src, alt = 'AVE favicon' }) {
  const finalSrc = resolveSrc(src, 'FAVICON_AVE_SRC', FAVICON_AVE_SRC);
  if (finalSrc) {
    return (
      <img src={finalSrc} alt={alt} draggable={false}
        style={{ height: size, width: size, display:'block', objectFit:'contain' }}/>
    );
  }
  return <MonogrammePhoenix size={size} ink={T.aveInk} gold={T.aveGold}/>;
}

// ─────────────────────────────────────────────────────────────
// LogoEESFavicon — C+lune extrait du gold script "EssenCel'en Soi"
// Extraction par soustraction chromatique depuis le source original
// (15 mai 2026, méthode validée chap. extraction wordmark). Variation
// canonique retenue après tests 3×3 : V2 = or sur crème #F2EDE4.
// ─────────────────────────────────────────────────────────────
function LogoEESFavicon({ size = 64, src, alt = 'EES favicon' }) {
  const finalSrc = resolveSrc(src, 'LOGO_EES_FAVICON_SRC', LOGO_EES_FAVICON_SRC);
  if (finalSrc) {
    return (
      <img src={finalSrc} alt={alt} draggable={false}
        style={{ height: size, width: size, display:'block', objectFit:'contain' }}/>
    );
  }
  // Fallback : juste un C en Fraunces italic — pas idéal mais honnête
  return (
    <div style={{
      width: size, height: size, display:'flex', alignItems:'center', justifyContent:'center',
      background: T.eesCream, color: T.eesGold,
      fontFamily: T.ffDisplay, fontStyle:'italic', fontSize: size * 0.7,
      fontVariationSettings:'"opsz" 96, "wght" 400',
    }}>C</div>
  );
}

// ─────────────────────────────────────────────────────────────
// SwapStatus — debug badge, état live / fallback typo par entité
// ─────────────────────────────────────────────────────────────
function SwapStatus({ entity = 'WTF' }) {
  const lookup = {
    WTF: LOGO_WTF_SRC,
    AVE: LOGO_AVE_SRC,
    'WTF manifeste': MANIFESTE_WTF_SRC,
    'WTF favicon': FAVICON_WTF_SRC,
    'AVE favicon': FAVICON_AVE_SRC,
    'EES favicon': LOGO_EES_FAVICON_SRC,
  };
  const overrideKeys = {
    WTF: 'LOGO_WTF_SRC',
    AVE: 'LOGO_AVE_SRC',
    'WTF manifeste': 'MANIFESTE_WTF_SRC',
    'WTF favicon': 'FAVICON_WTF_SRC',
    'AVE favicon': 'FAVICON_AVE_SRC',
    'EES favicon': 'LOGO_EES_FAVICON_SRC',
  };
  const src = (typeof window !== 'undefined' && window[overrideKeys[entity]]) || lookup[entity];
  const live = !!src;
  return (
    <span style={{
      fontFamily: T.ffMono, fontSize: 10, letterSpacing: '.06em',
      padding: '3px 8px', display:'inline-flex', alignItems:'center', gap: 6,
      background: live ? `color-mix(in oklab, ${T.eesSage} 18%, transparent)` : 'transparent',
      color: live ? T.eesSage : T.inkMute,
      border: `1px solid ${live ? T.eesSage : T.inkLine}`,
    }}>
      <span style={{
        width: 6, height: 6, borderRadius:'50%',
        background: live ? T.eesSage : T.inkMute,
      }}/>
      {entity} · {live ? 'live' : 'fallback typo'}
    </span>
  );
}

Object.assign(window, {
  LogoWTF, LogoAVE,
  LogoManifesteWTF, LogoFaviconWTF, LogoFaviconAVE, LogoEESFavicon,
  SwapStatus,
  LOGO_WTF_SRC, LOGO_AVE_SRC,
  MANIFESTE_WTF_SRC, FAVICON_WTF_SRC, FAVICON_AVE_SRC,
  LOGO_EES_FAVICON_SRC,
  LOGO_EES_WORDMARK_SRC, LOGO_SESAMES_WORDMARK_SRC, LOGO_SESAMES_TRIANGLE_SRC,
});

// ────────────────────────────────────────────────────────────
// V3.0b passe corrective · surcharge des wordmarks/glyphes typo
// par les PNG GitHub raw. Pattern resolveSrc + fallback typo honnête.
//
// Ces fonctions REMPLACENT les versions de lot4-primitives.jsx via
// le Object.assign final (lot5 charge après lot4 → window.WordmarkEES
// pointe vers la version <img>). Les composants utilisateurs voient
// la nouvelle version automatiquement au render.
// ────────────────────────────────────────────────────────────

// Helper : <img> avec fallback runtime sur échec de chargement.
// On utilise React state + onError parce qu'un simple <img onerror=> ne
// peut pas swapper vers un composant React. Le fallback est rendu en
// place tant que l'image n'a pas chargé ou a échoué.
//
// V3.0c · 19 mai 2026 — correctif anti-étirement :
//   · display 'inline-block' (et plus 'block') pour opt-out de l'étirement
//     flex-column par défaut (align-items: stretch).
//   · alignSelf: 'flex-start' redondance défensive — préserve l'aspect-ratio
//     dans tous les conteneurs flex.
//   · aspectRatio (prop optionnelle) — garde-fou explicite si un navigateur
//     n'arrive pas à déduire le ratio source avant le chargement complet.
function ImgWithFallback({ src, height, alt, fallback, style, aspectRatio }) {
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  if (failed) return fallback;
  return (
    <>
      {!loaded && fallback}
      <img
        src={src} alt={alt} draggable={false}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        style={{
          height, width:'auto',
          display: loaded ? 'inline-block' : 'none',
          alignSelf: 'flex-start',
          objectFit: 'contain',
          ...(aspectRatio ? { aspectRatio } : {}),
          imageRendering:'auto', ...style,
        }}
      />
    </>
  );
}

// Fallback typographique honnête du WordmarkEES (Fraunces italic SOFT).
// Réutilise la grammaire de lot4-primitives mais en version locale
// pour ne pas dépendre d'un cycle entre fichiers.
function WordmarkEESTypo({ size, color }) {
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

function WordmarkSESTypo({ size, color, withGlyph, gap }) {
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap,
      fontFamily: T.ffDisplay, fontWeight: 400,
      fontVariationSettings:`"opsz" 96, "wght" 400`,
      fontSize: size, color, letterSpacing:'.32em',
      textTransform:'uppercase', lineHeight: 1,
    }}>
      {withGlyph && <TriangleSesGeom size={size * 0.95} ink={color}/>}
      <span>SÉSÂMES</span>
    </span>
  );
}

// Géométrie pure du triangle (fallback)
function TriangleSesGeom({ size = 28, ink = T.sesInk, gold = T.sesGold, sky = T.sesSky }) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} aria-hidden="true" style={{display:'inline-block', verticalAlign:'middle'}}>
      <path d="M 40 10 L 67 62 L 13 62 Z" fill="none" stroke={ink} strokeWidth="2.4" strokeLinejoin="round"/>
      <ellipse cx="40" cy="47" rx="7" ry="3.2" fill={gold}/>
      <path d="M 40 33 Q 38 27 40 22 Q 42 27 40 33 Z" fill={sky} opacity="0.9"/>
    </svg>
  );
}

// ─── Versions <img>-first ───
// Signature identique aux versions typo de lot4-primitives →
// substitution transparente pour tous les composants existants.

function WordmarkEES({ size = 48, color = T.eesGold, src }) {
  const finalSrc = resolveSrc(src, 'LOGO_EES_WORDMARK_SRC', LOGO_EES_WORDMARK_SRC);
  // Le PNG est natural-coloured (or script) — le paramètre `color` est
  // ignoré quand le PNG charge (le pigment d'origine prime). Le fallback
  // typo respecte `color` pour rester cohérent avec l'API legacy.
  //
  // V3.0c · pas d'aspectRatio explicite (ratio source variable selon
  // version PNG) ; la combinaison inline-block + alignSelf:flex-start
  // dans ImgWithFallback suffit à empêcher l'étirement flex-column.
  return (
    <ImgWithFallback
      src={finalSrc}
      height={size * 1.15}
      alt="EssenCel’en Soi"
      fallback={<WordmarkEESTypo size={size} color={color}/>}
    />
  );
}

function WordmarkSES({ size = 28, color = T.sesInk, withGlyph = true, gap = 14, src }) {
  const wordmarkSrc = resolveSrc(src, 'LOGO_SESAMES_WORDMARK_SRC', LOGO_SESAMES_WORDMARK_SRC);
  // Le PNG sesames-wordmark inclut déjà le triangle intégré dans la
  // composition canonique → withGlyph=true rend juste le PNG complet,
  // withGlyph=false rend une version texte pure (fallback typo only).
  //
  // V3.0c · garde-fou explicite aspect-ratio 4.67/1 (ratio source PNG)
  // pour empêcher l'étirement horizontal dans les conteneurs flex/grid.
  // Doctrine cardinale entities-v3-FULL.css §I · aucune refonte vectorielle.
  if (withGlyph) {
    return (
      <ImgWithFallback
        src={wordmarkSrc}
        height={size * 1.4}
        aspectRatio="4.67/1"
        alt="SÉSÂMES"
        fallback={<WordmarkSESTypo size={size} color={color} withGlyph={true} gap={gap}/>}
      />
    );
  }
  return <WordmarkSESTypo size={size} color={color} withGlyph={false} gap={gap}/>;
}

function TriangleSes({ size = 28, ink = T.sesInk, gold = T.sesGold, sky = T.sesSky, src }) {
  const finalSrc = resolveSrc(src, 'LOGO_SESAMES_TRIANGLE_SRC', LOGO_SESAMES_TRIANGLE_SRC);
  return (
    <ImgWithFallback
      src={finalSrc}
      height={size}
      alt="SÉSÂMES triangle"
      fallback={<TriangleSesGeom size={size} ink={ink} gold={gold} sky={sky}/>}
      style={{verticalAlign:'middle'}}
    />
  );
}

// Surcharge finale — ces 3 fonctions remplacent celles de lot4-primitives.
Object.assign(window, { WordmarkEES, WordmarkSES, TriangleSes });
