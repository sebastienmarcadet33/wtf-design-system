// lot4-profils-stories.jsx — Section C · profils + Section D · stories
//
// Section C : signatures personnelles fondateurs (Sébastien, Céline)
// — liseré en em autour photo (chap XVI tokens-v3), italique du
// mot-cœur, pastille tag couleur perso.
//
// Section D : stories Instagram 1080×1920 (4:5 vertical), un par pôle
// majeur. Lecture immédiate, peu de texte, mot-cœur sur 2 lignes max.
//
// Exports window : ProfilC1..C4, StoryD1..D4

// ─────────────────────────────────────────────────────────────
// SECTION C — PROFILS PERSONNELS
// ─────────────────────────────────────────────────────────────

// C1 — Sébastien profil LI carré 1200×1200
// Photo cadrée portrait + liseré bleu pétrole · signature
// « Sébastien · Co-fondateur Way To Freedom »
function ProfilC1({ scale = 0.4 }) {
  return (
    <Frame w={1200} h={1200} bg={T.wtfLight} scale={scale}>
      <div style={{position:'absolute', inset:'128px 144px', display:'flex', flexDirection:'column'}}>
        <div style={{flex: 1, display:'grid', gridTemplateColumns:'5fr 4fr', gap: 80, alignItems:'center'}}>

          {/* Photo + liseré bleu pétrole en em */}
          <div style={{
            padding: '0.55em', /* --liz-air */
            border: `0.16em solid ${T.sebPetrol}`, /* --liz-base */
            fontSize: 32, /* échelle pour le liseré */
            display:'inline-block',
            alignSelf:'center',
            justifySelf:'center',
          }}>
            <PhotoSlot
              w={420} h={520}
              tint={`color-mix(in oklab, ${T.sebPetrol} 12%, ${T.wtfLight})`}
              instruction="Portrait Sébastien · trois-quarts · regard horizon · lumière fenêtre"
            />
          </div>

          {/* Bloc texte */}
          <div style={{display:'flex', flexDirection:'column', gap: 28}}>
            <SignatureL4 name="Sébastien" color={T.ink} size={64}/>
            <div style={{display:'flex', alignItems:'center', gap: 14}}>
              <span style={{width: 10, height: 10, background: T.sebPetrol, borderRadius:'50%'}}/>
              <TaglineL4 color={T.ink2} size={13}>
                Co-fondateur Way To Freedom
              </TaglineL4>
            </div>
            <div style={{
              fontFamily: T.ffBody, fontSize: 18, lineHeight: 1.55,
              color: T.ink2, maxWidth:'34ch', fontWeight: 300,
            }}>
              Vingt-six ans de management. <MotCoeur color={T.sebPetrol}>Tenir l’espace</MotCoeur>{' '}
              sans peser. Reconnaître les passages.
            </div>
            <Filet w={56} color={T.sebPetrol} opacity={0.9}/>
            <TaglineL4 color={T.inkMute} size={11}>
              sesames.fr · waytofreedom.fr
            </TaglineL4>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// C2 — Sébastien IG portrait chronique 1080×1350
function ProfilC2({ scale = 0.35 }) {
  return (
    <Frame w={1080} h={1350} bg={T.wtfLight} scale={scale}>
      <div style={{position:'absolute', inset:'128px 96px', display:'flex', flexDirection:'column', gap: 48}}>

        <div style={{display:'flex', alignItems:'center', gap: 32}}>
          {/* Photo carrée petite + liseré pétrole */}
          <div style={{
            padding: '0.40em',
            border: `0.16em solid ${T.sebPetrol}`,
            fontSize: 24,
            display:'inline-block',
          }}>
            <PhotoSlot
              w={180} h={180}
              tint={`color-mix(in oklab, ${T.sebPetrol} 12%, ${T.wtfLight})`}
              instruction="Portrait carré"
            />
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <SignatureL4 name="Sébastien" size={42}/>
            <TaglineL4 size={12}>Chronique du seuil</TaglineL4>
          </div>
        </div>

        <Filet w={64} color={T.sebPetrol} opacity={0.85}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 36}}>
            <TitreL4
              before={<>Avant la méthode,<br/>la </>}
              accent="présence"
              after="."
              accentColor={T.sebPetrol}
              size={96}
              maxw="11ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 18, lineHeight: 1.55,
              color: T.ink2, maxWidth:'34ch', fontWeight: 300,
            }}>
              On ne traverse pas un système.
              On traverse une personne qui tient l’espace
              pendant qu’on s’y avance.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 28, borderTop:`1px solid ${T.inkLine}`}}>
          <WordmarkSES size={20} color={T.sesInk}/>
          <TaglineL4 size={11}>sesames.fr</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// C3 — Céline profil LI carré 1200×1200
function ProfilC3({ scale = 0.4 }) {
  return (
    <Frame w={1200} h={1200} bg={T.eesCream} scale={scale}>
      <div style={{position:'absolute', inset:'128px 144px', display:'flex', flexDirection:'column'}}>
        <div style={{flex: 1, display:'grid', gridTemplateColumns:'5fr 4fr', gap: 80, alignItems:'center'}}>

          {/* Photo + liseré coral en em */}
          <div style={{
            padding: '0.55em',
            border: `0.16em solid ${T.celCoral}`,
            fontSize: 32, display:'inline-block',
            alignSelf:'center', justifySelf:'center',
          }}>
            <PhotoSlot
              w={420} h={520}
              tint={T.eesRoseSoft}
              instruction="Portrait Céline · trois-quarts · sourire intérieur · lumière chaude"
            />
          </div>

          <div style={{display:'flex', flexDirection:'column', gap: 28}}>
            <SignatureL4 name="Céline" color={T.ink} size={64}/>
            <div style={{display:'flex', alignItems:'center', gap: 14}}>
              <span style={{width: 10, height: 10, background: T.celCoral, borderRadius:'50%'}}/>
              <TaglineL4 color={T.ink2} size={13}>
                Co-fondatrice Way To Freedom
              </TaglineL4>
            </div>
            <div style={{
              fontFamily: T.ffBody, fontSize: 18, lineHeight: 1.55,
              color: T.ink2, maxWidth:'34ch', fontWeight: 300,
            }}>
              Pratique énergétique et corporelle.
              <MotCoeur color={T.celCoral}> Reposer </MotCoeur>
              le système nerveux. Honorer ce qui se dépose.
            </div>
            <Filet w={56} color={T.celCoral} opacity={0.9}/>
            <TaglineL4 color={T.inkMute} size={11}>
              essencelensoi.fr · Sainte-Hélène en Médoc
            </TaglineL4>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// C4 — Céline IG portrait chronique 1080×1350
function ProfilC4({ scale = 0.35 }) {
  return (
    <Frame w={1080} h={1350} bg={T.eesCream} scale={scale}>
      <div style={{position:'absolute', inset:'128px 96px', display:'flex', flexDirection:'column', gap: 48}}>

        <div style={{display:'flex', alignItems:'center', gap: 32}}>
          <div style={{
            padding: '0.40em',
            border: `0.16em solid ${T.celCoral}`,
            fontSize: 24, display:'inline-block',
          }}>
            <PhotoSlot
              w={180} h={180}
              tint={T.eesRoseSoft}
              instruction="Portrait carré"
            />
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <SignatureL4 name="Céline" size={42}/>
            <TaglineL4 size={12}>Sanctuaire du corps</TaglineL4>
          </div>
        </div>

        <Filet w={64} color={T.celCoral} opacity={0.85}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 36}}>
            <TitreL4
              before={<>Là où vous<br/>en </>}
              accent="êtes"
              after="."
              accentColor={T.celCoral}
              size={104}
              maxw="9ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 18, lineHeight: 1.55,
              color: T.ink2, maxWidth:'34ch', fontWeight: 300,
            }}>
              Rien à corriger. Rien à transformer.
              Reconnaître, nommer, accueillir
              ce qui demande à se reposer.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 28, borderTop:`1px solid ${T.inkLine}`}}>
          <WordmarkEES size={26} color={T.eesGold}/>
          <TaglineL4 size={11}>essencelensoi.fr</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION D — STORIES 1080×1920
// ─────────────────────────────────────────────────────────────

// D1 — EES story tagline
function StoryD1({ scale = 0.28 }) {
  return (
    <Frame w={1080} h={1920} bg={T.eesCream} scale={scale}>
      <div style={{position:'absolute', inset:'180px 112px', display:'flex', flexDirection:'column'}}>
        <WordmarkEES size={42} color={T.eesGold}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56}}>
            <TitreL4
              before={<>Le corps<br/></>}
              accent="sait"
              after="."
              accentColor={T.eesGold}
              size={148}
              maxw="8ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 26, lineHeight: 1.5,
              color: T.ink2, maxWidth:'24ch', fontWeight: 300,
            }}>
              Encore faut-il l’écouter.
              Encore faut-il l’honorer.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid ${T.inkLine}`}}>
          <SignatureL4 name="Céline" size={32}/>
          <TaglineL4 size={13}>essencelensoi.fr</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// D2 — SÉSÂMES story tagline
function StoryD2({ scale = 0.28 }) {
  return (
    <Frame w={1080} h={1920} bg={T.sesLight} scale={scale}>
      {/* Filet violet vertical à gauche */}
      <div style={{position:'absolute', left: 64, top: 200, bottom: 200, width: 2,
                   background: T.sesViolet, opacity: 0.85}}/>

      <div style={{position:'absolute', inset:'180px 112px 180px 96px', display:'flex', flexDirection:'column'}}>
        <WordmarkSES size={26} color={T.sesInk}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56}}>
            <TitreL4
              before={<>L’attention<br/>précède<br/></>}
              accent="l’action"
              after="."
              accentColor={T.sesGold}
              size={130}
              maxw="9ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 24, lineHeight: 1.55,
              color: T.ink2, maxWidth:'26ch', fontWeight: 300,
            }}>
              Nommer le seuil avant de le franchir.
              Tenir l’espace avant de transmettre.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid ${T.inkLine}`}}>
          <SignatureL4 name="Sébastien" size={32}/>
          <TaglineL4 size={13}>sesames.fr</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// D3 — WTF story manifeste fond bleu nuit
function StoryD3({ scale = 0.28 }) {
  const bg = '#1F2438';
  return (
    <Frame w={1080} h={1920} bg={bg} ink={T.wtfLight} scale={scale}>
      <div style={{position:'absolute', inset:'200px 112px', display:'flex', flexDirection:'column', color: T.wtfLight}}>

        <WordmarkWTF size={28} color="rgba(250,247,242,.85)" weight={300}/>

        <div style={{flex: 1, display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 64, alignItems:'flex-start'}}>
            <TitreL4
              before={<>Une maison.<br/>Trois chemins.<br/>Un </>}
              accent="horizon"
              after="."
              accentColor={T.wtfGold}
              ink={T.wtfLight}
              size={120}
              maxw="11ch"
            />
            <Filet w={120} color={T.wtfGold} opacity={0.9}/>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid rgba(250,247,242,.18)`}}>
          <TaglineL4 color="rgba(250,247,242,.78)" size={13}>
            waytofreedom.fr
          </TaglineL4>
          <PapillonGold size={72}/>
        </div>
      </div>
    </Frame>
  );
}

// D4 — Voie story
function StoryD4({ scale = 0.28 }) {
  return (
    <Frame w={1080} h={1920} bg={T.voieCream} scale={scale}>
      <div style={{position:'absolute', inset:'180px 112px', display:'flex', flexDirection:'column'}}>

        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <WordmarkVoie size={34} color={T.voieCopper}/>
          <div style={{display:'flex', gap: 0}}>
            <div style={{width: 22, height: 22, background: T.voieCopper}}/>
            <div style={{width: 22, height: 22, background: T.voieNight}}/>
          </div>
        </div>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56}}>
            <TitreL4
              before={<>Le mouvement<br/>avant la<br/></>}
              accent="méthode"
              after="."
              accentColor={T.voieCopper}
              ink={T.voieNight}
              size={128}
              maxw="11ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 24, lineHeight: 1.55,
              color: T.ink2, maxWidth:'24ch', fontWeight: 300,
            }}>
              Un revenu complémentaire qui tient.
              Au rythme propre.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid ${T.inkLine}`}}>
          <TaglineL4 color={T.voieNight} size={11}>
            waytofreedom.fr / revenu-complementaire-independant
          </TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

Object.assign(window, {
  ProfilC1, ProfilC2, ProfilC3, ProfilC4,
  StoryD1, StoryD2, StoryD3, StoryD4,
});
