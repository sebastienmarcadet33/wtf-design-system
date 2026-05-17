// lot4-systeme.jsx — Section E · signatures email + headers newsletter
//
// Formats canoniques :
//   Signature email          600 × 200 px
//   Header newsletter        600 × 260 px
//
// Aucune ombre, aucun gradient. Filets en alpha modérés, photo
// de signature optionnelle avec liseré perso en em.
//
// Exports window : SysE1..E5

// ─────────────────────────────────────────────────────────────
// E1 — Signature email Sébastien
// ─────────────────────────────────────────────────────────────
function SysE1({ scale = 0.7 }) {
  return (
    <Frame w={600} h={200} bg={T.wtfLight} scale={scale}>
      <div style={{position:'absolute', inset:'24px 32px', display:'grid',
                   gridTemplateColumns:'auto 1fr', gap: 26, alignItems:'center'}}>

        {/* Vignette portrait + liseré pétrole */}
        <div style={{
          padding:'0.40em',
          border:`0.16em solid ${T.sebPetrol}`,
          fontSize: 14,
        }}>
          <PhotoSlot w={104} h={104} tint={`color-mix(in oklab, ${T.sebPetrol} 12%, ${T.wtfLight})`}
            instruction="Portrait carré"/>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap: 8}}>
          <SignatureL4 name="Sébastien" size={28}/>
          <div style={{display:'flex', alignItems:'center', gap: 10}}>
            <span style={{width: 7, height: 7, background: T.sebPetrol, borderRadius:'50%'}}/>
            <TaglineL4 color={T.ink2} size={11}>
              Co-fondateur Way To Freedom
            </TaglineL4>
          </div>
          <div style={{
            fontFamily: T.ffBody, fontSize: 12, color: T.ink2, lineHeight: 1.4,
            display:'flex', flexDirection:'column', gap: 2,
          }}>
            <span>sebastien@waytofreedom.fr</span>
            <span>sesames.fr · waytofreedom.fr</span>
          </div>
        </div>
      </div>
      <div style={{position:'absolute', left: 32, right: 32, bottom: 18, height: 1, background: T.inkLine}}/>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// E2 — Signature email Céline
// ─────────────────────────────────────────────────────────────
function SysE2({ scale = 0.7 }) {
  return (
    <Frame w={600} h={200} bg={T.eesCream} scale={scale}>
      <div style={{position:'absolute', inset:'24px 32px', display:'grid',
                   gridTemplateColumns:'auto 1fr', gap: 26, alignItems:'center'}}>

        <div style={{
          padding:'0.40em',
          border:`0.16em solid ${T.celCoral}`,
          fontSize: 14,
        }}>
          <PhotoSlot w={104} h={104} tint={T.eesRoseSoft}
            instruction="Portrait carré"/>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap: 8}}>
          <SignatureL4 name="Céline" size={28}/>
          <div style={{display:'flex', alignItems:'center', gap: 10}}>
            <span style={{width: 7, height: 7, background: T.celCoral, borderRadius:'50%'}}/>
            <TaglineL4 color={T.ink2} size={11}>
              Co-fondatrice Way To Freedom · EssenCel’en Soi
            </TaglineL4>
          </div>
          <div style={{
            fontFamily: T.ffBody, fontSize: 12, color: T.ink2, lineHeight: 1.4,
            display:'flex', flexDirection:'column', gap: 2,
          }}>
            <span>celine@essencelensoi.fr</span>
            <span>essencelensoi.fr · Sainte-Hélène en Médoc</span>
          </div>
        </div>
      </div>
      <div style={{position:'absolute', left: 32, right: 32, bottom: 18, height: 1, background: T.inkLine}}/>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// E3 — Signature email WTF institutionnelle
// Pas de signature perso. Wordmark + tagline + papillon en placeholder.
// ─────────────────────────────────────────────────────────────
function SysE3({ scale = 0.7 }) {
  return (
    <Frame w={600} h={200} bg={T.wtfLight} scale={scale}>
      <div style={{position:'absolute', inset:'30px 32px', display:'grid',
                   gridTemplateColumns:'auto 1fr', gap: 24, alignItems:'center'}}>

        <PapillonGold size={84}/>

        <div style={{display:'flex', flexDirection:'column', gap: 10}}>
          <WordmarkWTF size={24} color={T.wtfInk} weight={300}/>
          <Filet w={48} color={T.wtfGold} opacity={0.85}/>
          <div style={{
            fontFamily: T.ffBody, fontSize: 12, color: T.ink2, lineHeight: 1.45,
            display:'flex', flexDirection:'column', gap: 2,
          }}>
            <span>Une maison-mère. Trois chemins. Un hub.</span>
            <span>contact@waytofreedom.fr · waytofreedom.fr</span>
          </div>
        </div>
      </div>
      <div style={{position:'absolute', left: 32, right: 32, bottom: 18, height: 1, background: T.inkLine}}/>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// E4 — Header newsletter EES (600×260)
// Bandeau d'en-tête d'email · titre + sous-titre + filet rose
// ─────────────────────────────────────────────────────────────
function SysE4({ scale = 0.7 }) {
  return (
    <Frame w={600} h={260} bg={T.eesCream} scale={scale}>
      {/* Filet rose poudré tout le bord supérieur */}
      <div style={{position:'absolute', top: 0, left: 0, right: 0, height: 3, background: T.eesRose}}/>

      <div style={{position:'absolute', inset:'36px 36px', display:'flex', flexDirection:'column', gap: 16}}>
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
          <WordmarkEES size={32} color={T.eesGold}/>
          <TaglineL4 size={10} color={T.ink2}>
            Lettre du sanctuaire
          </TaglineL4>
        </div>

        <TitreL4
          before="Ce qui repose, "
          accent="restaure"
          after="."
          accentColor={T.eesGold}
          size={32}
          maxw="22ch"
        />

        <div style={{flex: 1}}/>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 12, borderTop:`1px solid ${T.inkLine}`}}>
          <TaglineL4 color={T.ink2} size={10}>
            Céline · pratique énergétique · Sainte-Hélène en Médoc
          </TaglineL4>
          <TaglineL4 color={T.ink2} size={10}>essencelensoi.fr</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// E5 — Header newsletter SÉSÂMES (600×260)
// Bandeau · triangle SÉSÂMES + titre + filet or canalisé
// ─────────────────────────────────────────────────────────────
function SysE5({ scale = 0.7 }) {
  return (
    <Frame w={600} h={260} bg={T.sesLight} scale={scale}>
      <div style={{position:'absolute', inset:'32px 36px', display:'grid',
                   gridTemplateColumns:'auto 1fr', gap: 28, alignItems:'flex-start'}}>

        <TriangleSes size={64} ink={T.sesInk} gold={T.sesGold} sky={T.sesSky}/>

        <div style={{display:'flex', flexDirection:'column', gap: 14}}>
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
            <WordmarkSES size={20} color={T.sesInk} withGlyph={false}/>
            <TaglineL4 size={10} color={T.ink2}>
              Cartographie · n° en cours
            </TaglineL4>
          </div>

          <TitreL4
            before="L’attention "
            accent="précède"
            after=" l’action."
            accentColor={T.sesGold}
            size={28}
            maxw="22ch"
          />

          <div style={{display:'flex', alignItems:'center', gap: 14}}>
            <Filet w={32} color={T.sesGold} opacity={0.85}/>
            <TaglineL4 color={T.ink2} size={10}>
              Sébastien · sesames.fr
            </TaglineL4>
          </div>
        </div>
      </div>
    </Frame>
  );
}

Object.assign(window, { SysE1, SysE2, SysE3, SysE4, SysE5 });
