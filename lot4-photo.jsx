// lot4-photo.jsx — Section B · 7 posts photo + texte
//
// Registre 1 et 2 doctrine v3 : la photo authentique prime,
// le texte habille. PhotoSlot tinté de la couleur de présence
// du pôle, instruction de cadrage courte (≤ 14 mots).
//
// Exports window : PhotoB1..B7

// ─────────────────────────────────────────────────────────────
// B1 — EES photo dominante IG carré 1080×1080
// Registre 1 dominant. Photo 60% du carré, texte 40% en bas.
// ─────────────────────────────────────────────────────────────
function PhotoB1({ scale = 0.42 }) {
  return (
    <Frame w={1080} h={1080} bg={T.eesCream} scale={scale}>
      {/* Photo plein-largeur en haut */}
      <PhotoSlot
        w={1080} h={640}
        tint={T.eesRoseSoft}
        instruction="Mains de Céline posées sur la nuque · lumière de fenêtre · lin clair"
      />

      <div style={{position:'absolute', left: 0, right: 0, top: 640, bottom: 0,
                   padding:'56px 96px 80px', display:'flex', flexDirection:'column'}}>
        <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between'}}>
          <TitreL4
            before="Le souffle "
            accent="revient"
            after="."
            accentColor={T.eesGold}
            size={68}
            maxw="14ch"
          />
          <WordmarkEES size={28} color={T.eesGold}/>
        </div>
        <div style={{flex: 1}}/>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
          <SignatureL4 name="Céline" size={26}/>
          <TaglineL4 size={11}>Sanctuaire du corps · Sainte-Hélène</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// B2 — EES photo + texte IG portrait 1080×1350
// Photo en bandeau haut (740px), texte tagline + signature en bas.
// ─────────────────────────────────────────────────────────────
function PhotoB2({ scale = 0.35 }) {
  return (
    <Frame w={1080} h={1350} bg={T.eesCream} scale={scale}>
      <PhotoSlot
        w={1080} h={820}
        tint={T.eesRose}
        instruction="Bougie · ventre couvert d’un châle de laine · soir, lumière tungstène domestique"
      />
      <div style={{position:'absolute', top: 820, left: 0, right: 0, bottom: 0,
                   padding:'56px 112px 96px', display:'flex', flexDirection:'column'}}>
        <TitreL4
          before="Ce qui pèse "
          accent="se dépose"
          after="."
          accentColor={T.eesGold}
          size={72}
          maxw="13ch"
        />
        <div style={{flex: 1}}/>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 28, borderTop:`1px solid ${T.inkLine}`}}>
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <SignatureL4 name="Céline" size={28}/>
            <WordmarkEES size={20} color={T.eesGold}/>
          </div>
          <div style={{display:'flex', alignItems:'center', gap: 12}}>
            <span style={{width: 8, height: 8, background: T.eesRose, borderRadius:'50%'}}/>
            <TaglineL4 size={11}>essencelensoi.fr</TaglineL4>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// B3 — SÉSÂMES photo + texte LI carré 1200×1200
// Photo à gauche (50%), texte à droite. Sujet « intériorité ».
// ─────────────────────────────────────────────────────────────
function PhotoB3({ scale = 0.4 }) {
  return (
    <Frame w={1200} h={1200} bg={T.sesLight} scale={scale}>
      <PhotoSlot
        w={600} h={1200}
        tint={`color-mix(in oklab, ${T.sesViolet} 14%, ${T.sesLight})`}
        instruction="Sébastien de profil à la fenêtre · carnet ouvert · lumière froide d’hiver"
      />
      <div style={{position:'absolute', top: 0, left: 600, right: 0, bottom: 0,
                   padding:'128px 80px 96px', display:'flex', flexDirection:'column'}}>
        <WordmarkSES size={20} color={T.sesInk}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 36}}>
            <TitreL4
              before={<>Ce qu’on traverse<br/>laisse un </>}
              accent="passage"
              after="."
              accentColor={T.sesViolet}
              size={68}
              maxw="14ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 16, lineHeight: 1.55,
              color: T.ink2, maxWidth:'32ch', fontWeight: 300,
            }}>
              Le seuil ne se franchit pas en force.
              Il se reconnaît, il se nomme, il s’honore.
            </div>
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap: 6,
                     paddingTop: 28, borderTop:`1px solid ${T.inkLine}`}}>
          <SignatureL4 name="Sébastien" size={26}/>
          <TaglineL4 size={11}>L’attention précède l’action</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// B4 — SÉSÂMES photo + texte IG portrait 1080×1350
// Photo bandeau bas (60%), texte en haut sur crème.
// Sujet « éclaircie » → accent ses-sky (bleu lunaire).
// ─────────────────────────────────────────────────────────────
function PhotoB4({ scale = 0.35 }) {
  return (
    <Frame w={1080} h={1350} bg={T.sesLight} scale={scale}>
      <div style={{position:'absolute', left: 0, right: 0, top: 0, height: 540,
                   padding:'128px 112px 56px', display:'flex', flexDirection:'column', gap: 36}}>
        <WordmarkSES size={22} color={T.sesInk}/>
        <TitreL4
          before="Après la verrouillage, "
          accent="l’éclaircie"
          after="."
          accentColor={T.sesViolet}
          size={66}
          maxw="14ch"
        />
      </div>
      <PhotoSlot
        w={1080} h={810}
        tint={`color-mix(in oklab, ${T.sesSky} 60%, ${T.sesLight})`}
        instruction="Ciel matinal après pluie · contre-jour · silhouette en marge"
      />
      <div style={{position:'absolute', left: 112, right: 112, bottom: 56,
                   display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
        <SignatureL4 name="Sébastien" color={T.sesLight} size={26}/>
        <TaglineL4 color="rgba(250,247,242,.85)" size={11}>sesames.fr</TaglineL4>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// B5 — WTF banner LinkedIn 1584×396
// Format panoramique en-tête de page. Marcheur silhouette droite,
// papillon or à l'extrême droite, tagline à gauche.
// ─────────────────────────────────────────────────────────────
function PhotoB5({ scale = 0.36 }) {
  return (
    <Frame w={1584} h={396} bg={T.wtfLight} scale={scale}>
      <div style={{position:'absolute', inset:'56px 96px', display:'grid',
                   gridTemplateColumns:'7fr 3fr', gap: 48, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 22}}>
          <WordmarkWTF size={28} color={T.wtfInk} weight={300}/>
          <TitreL4
            before="Une maison-mère. Trois chemins. Un "
            accent="hub"
            after="."
            accentColor={T.wtfGold}
            size={42}
            maxw="36ch"
          />
          <div style={{display:'flex', alignItems:'center', gap: 22}}>
            <Filet w={48} color={T.wtfGold} opacity={0.85}/>
            <TaglineL4 size={11}>waytofreedom.fr</TaglineL4>
          </div>
        </div>

        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', gap: 28}}>
          <Filet w={1} h={140} color={T.inkLine} vertical opacity={1}/>
          <PapillonGold size={140}/>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// B6 — Voie photo + texte IG carré 1080×1080
// Photo à droite (45%), texte à gauche (55%). Cuivre + nuit accents.
// ─────────────────────────────────────────────────────────────
function PhotoB6({ scale = 0.42 }) {
  return (
    <Frame w={1080} h={1080} bg={T.voieCream} scale={scale}>
      <PhotoSlot
        w={485} h={1080}
        tint={`color-mix(in oklab, ${T.voieCopper} 20%, ${T.voieCream})`}
        instruction="Main qui écrit dans un carnet · ton cuivré naturel · matin"
      />
      <div style={{position:'absolute', top: 0, left: 0, width: 595, height: 1080,
                   padding:'112px 80px 96px', display:'flex', flexDirection:'column'}}>
        <WordmarkVoie size={28} color={T.voieCopper}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 32}}>
            <TitreL4
              before="Construire une "
              accent="activité durable"
              after="."
              accentColor={T.voieCopper}
              ink={T.voieNight}
              size={62}
              maxw="14ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 15, lineHeight: 1.55,
              color: T.ink2, maxWidth:'34ch', fontWeight: 300,
            }}>
              Au rythme propre. Sans urgence.
              Sur ce qui reste vrai dans dix ans.
            </div>
          </div>
        </div>

        <div style={{paddingTop: 24, borderTop:`1px solid ${T.inkLine}`,
                     display:'flex', flexDirection:'column', gap: 6}}>
          <TaglineL4 color={T.voieNight} size={11}>
            waytofreedom.fr / revenu-complementaire-independant
          </TaglineL4>
          <TaglineL4 color={T.voieCopper} size={11}>
            Le mouvement avant la méthode
          </TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// B7 — Voie photo dominante IG portrait 1080×1350
// Photo plein largeur en haut (75%), pied wordmark + tagline.
// ─────────────────────────────────────────────────────────────
function PhotoB7({ scale = 0.35 }) {
  return (
    <Frame w={1080} h={1350} bg={T.voieCream} scale={scale}>
      <PhotoSlot
        w={1080} h={1010}
        tint={`color-mix(in oklab, ${T.voieCopper} 22%, ${T.voieCream})`}
        instruction="Atelier domestique · ordinateur posé · tasse en céramique · soir d’hiver"
      />
      <div style={{position:'absolute', left: 0, right: 0, top: 1010, bottom: 0,
                   padding:'40px 96px', display:'flex', flexDirection:'column', justifyContent:'center', gap: 14}}>
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
          <WordmarkVoie size={36} color={T.voieCopper}/>
          <TaglineL4 color={T.voieNight} size={11}>
            sous-page Way To Freedom
          </TaglineL4>
        </div>
        <div style={{
          fontFamily: T.ffBody, fontSize: 16, fontWeight: 300, lineHeight: 1.5,
          color: T.ink2, maxWidth:'68ch',
        }}>
          Pour les entrepreneurs indépendants qui choisissent
          l’autonomie patiente sur la promesse pressée.
        </div>
      </div>
    </Frame>
  );
}

Object.assign(window, {
  PhotoB1, PhotoB2, PhotoB3, PhotoB4, PhotoB5, PhotoB6, PhotoB7,
});
