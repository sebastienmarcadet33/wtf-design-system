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
  // V3.0b · rebase automatique sur --wtf-nuit #1B1814 (palette chaude validée)
  const bg = T.wtfNuit;
  return (
    <Frame w={1080} h={1920} bg={bg} ink={T.wtfLin} scale={scale}>
      <div style={{position:'absolute', inset:'200px 112px', display:'flex', flexDirection:'column', color: T.wtfLin}}>

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

// ─────────────────────────────────────────────────────────────
// SECTION C → V3.0b · formats étendus profils co-fondateurs (dette mercredi)
// ─────────────────────────────────────────────────────────────
//
// Distinction critique avec PhotoB5 (lot4-photo.jsx) :
//   PhotoB5  · banner LI WTF maison-mère · sceau papillon-corps signature
//   ProfilC5 · banner LI personnel Sébastien · liseré pétrole, PAS de logo WTF
//   ProfilC9 · banner LI personnel Céline   · liseré coral, PAS de logo WTF
//
// Couches couleur fondateurs (#D55B47 coral, #2D5F6E pétrole) = couches
// au-dessus des palettes pôles. Liserés autour photos, italique mot-cœur,
// pastille tag. JAMAIS en fond dominant, JAMAIS en wordmark coloré.
//
// Doctrine V3.0b slots photo (arbitrée 17 mai 2026) :
//   · ProfilC5, C9 (banners LI)  · slot photo OPTIONNEL (prop withPhoto)
//     Instruction si présent : "Portrait éditorial 3:4 · pas frontal · contexte de travail"
//   · ProfilC6, C8 (FB)          · slot photo OPTIONNEL (prop withPhoto, default true)
//     Instruction libre rédacteur · "Photo libre · ratio 4:5 · cadrage rédacteur"
//   · ProfilC7, C10 (IG carré)   · pas de slot photo (typo pur grammaire CitaA)


// C5 — Sébastien LI Paysage 1584×396 · banner profil personnel
// Slot photo OPTIONNEL via prop `withPhoto` (default false · variante typo pur)
function ProfilC5({ scale = 0.36, withPhoto = false }) {
  return (
    <Frame w={1584} h={396} bg={T.wtfLin} scale={scale}>
      {/* Filet pétrole vertical à gauche · signature couche fondateur */}
      <div style={{position:'absolute', left: 80, top: 64, bottom: 64, width: 2,
                   background: T.sebPetrol, opacity: 0.90}}/>

      {withPhoto ? (
        <div style={{position:'absolute', inset:'48px 96px 48px 128px',
                     display:'grid', gridTemplateColumns:'auto 1fr', gap: 56, alignItems:'center'}}>
          <div style={{
            padding: '0.40em',
            border: `0.14em solid ${T.sebPetrol}`,
            fontSize: 24, display:'inline-block',
          }}>
            <PhotoSlot
              w={260} h={300}
              tint={`color-mix(in oklab, ${T.sebPetrol} 12%, ${T.wtfLin})`}
              instruction="Portrait éditorial 3:4 · pas frontal · contexte de travail"
            />
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 18}}>
            <SignatureL4 name="Sébastien" color={T.ink} size={48}/>
            <div style={{display:'flex', alignItems:'center', gap: 14}}>
              <span style={{width: 8, height: 8, background: T.sebPetrol, borderRadius:'50%'}}/>
              <TaglineL4 color={T.ink2} size={12}>
                Co-fondateur Way To Freedom · SÉSÂMES
              </TaglineL4>
            </div>
            <div style={{
              fontFamily: T.ffBody, fontSize: 16, lineHeight: 1.5,
              color: T.ink2, maxWidth:'48ch', fontWeight: 300,
            }}>
              Vingt-six ans de management. <MotCoeur color={T.sebPetrol}>Tenir l'espace</MotCoeur>{' '}
              sans peser. Reconnaître les passages.
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 20, marginTop: 4}}>
              <TaglineL4 color={T.ink2} size={11}>sesames.fr</TaglineL4>
              <LogoWTF size={24}/>
            </div>
          </div>
        </div>
      ) : (
        <div style={{position:'absolute', inset:'60px 96px 60px 128px',
                     display:'grid', gridTemplateColumns:'7fr 5fr', gap: 64, alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 20}}>
            <SignatureL4 name="Sébastien" color={T.ink} size={56}/>
            <div style={{display:'flex', alignItems:'center', gap: 14}}>
              <span style={{width: 8, height: 8, background: T.sebPetrol, borderRadius:'50%'}}/>
              <TaglineL4 color={T.ink2} size={12}>
                Co-fondateur Way To Freedom · SÉSÂMES
              </TaglineL4>
            </div>
            <div style={{
              fontFamily: T.ffBody, fontSize: 17, lineHeight: 1.5,
              color: T.ink2, maxWidth:'52ch', fontWeight: 300,
            }}>
              Vingt-six ans de management. <MotCoeur color={T.sebPetrol}>Tenir l'espace</MotCoeur>{' '}
              sans peser. Reconnaître les passages qui se répètent.
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap: 14}}>
            <Filet w={64} color={T.sebPetrol} opacity={0.85}/>
            <TaglineL4 color={T.ink2} size={11}>sesames.fr</TaglineL4>
            <LogoWTF size={28}/>
          </div>
        </div>
      )}
    </Frame>
  );
}


// C6 — Sébastien FB 1200×630 · slot photo optionnel (default true, instruction libre rédacteur)
function ProfilC6({ scale = 0.42, withPhoto = true }) {
  return (
    <Frame w={1200} h={630} bg={T.wtfLin} scale={scale}>
      {withPhoto ? (
        <div style={{position:'absolute', inset:'96px 96px',
                     display:'grid', gridTemplateColumns:'4fr 6fr', gap: 64, alignItems:'center'}}>
          <div style={{
            padding: '0.45em',
            border: `0.14em solid ${T.sebPetrol}`,
            fontSize: 28, display:'inline-block', alignSelf:'center',
          }}>
            <PhotoSlot
              w={300} h={380}
              tint={`color-mix(in oklab, ${T.sebPetrol} 12%, ${T.wtfLin})`}
              instruction="Photo libre · ratio 4:5 · cadrage rédacteur"
            />
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 24}}>
            <SignatureL4 name="Sébastien" color={T.ink} size={52}/>
            <div style={{display:'flex', alignItems:'center', gap: 12}}>
              <span style={{width: 8, height: 8, background: T.sebPetrol, borderRadius:'50%'}}/>
              <TaglineL4 color={T.ink2} size={12}>
                Co-fondateur Way To Freedom
              </TaglineL4>
            </div>
            <TitreL4
              before={<>Avant la méthode,<br/>la </>}
              accent="présence"
              after="."
              accentColor={T.sebPetrol}
              size={56}
              maxw="13ch"
            />
            <Filet w={56} color={T.sebPetrol} opacity={0.85}/>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 20}}>
              <TaglineL4 color={T.ink2} size={11}>
                sesames.fr · waytofreedom.fr
              </TaglineL4>
              <LogoWTF size={26}/>
            </div>
          </div>
        </div>
      ) : (
        <div style={{position:'absolute', inset:'96px 128px', display:'flex', flexDirection:'column'}}>
          <SignatureL4 name="Sébastien" color={T.ink} size={56}/>
          <div style={{display:'flex', alignItems:'center', gap: 12, marginTop: 14}}>
            <span style={{width: 8, height: 8, background: T.sebPetrol, borderRadius:'50%'}}/>
            <TaglineL4 color={T.ink2} size={12}>
              Co-fondateur Way To Freedom · SÉSÂMES
            </TaglineL4>
          </div>
          <div style={{flex: 1, display:'flex', alignItems:'center', paddingTop: 24}}>
            <div style={{display:'flex', flexDirection:'column', gap: 32}}>
              <TitreL4
                before={<>Avant la méthode,<br/>la </>}
                accent="présence"
                after="."
                accentColor={T.sebPetrol}
                size={72}
                maxw="14ch"
              />
              <Filet w={72} color={T.sebPetrol} opacity={0.85}/>
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 20}}>
            <TaglineL4 color={T.ink2} size={11}>
              sesames.fr · waytofreedom.fr
            </TaglineL4>
            <LogoWTF size={28}/>
          </div>
        </div>
      )}
    </Frame>
  );
}


// C7 — Sébastien IG Carré 1080×1080 · grammaire CitaA pure (pas de slot photo)
function ProfilC7({ scale = 0.42 }) {
  return (
    <Frame w={1080} h={1080} bg={T.wtfLin} scale={scale}>
      <div style={{position:'absolute', inset:'120px 128px', display:'flex', flexDirection:'column'}}>

        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
          <SignatureL4 name="Sébastien" color={T.ink} size={38}/>
          <TaglineL4 size={11} color={T.ink2}>
            Chronique du seuil
          </TaglineL4>
        </div>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56}}>
            <TitreL4
              before={<>On ne traverse pas<br/>un système.<br/>On traverse<br/>une </>}
              accent="personne"
              after="."
              accentColor={T.sebPetrol}
              size={86}
              maxw="13ch"
            />
            <Filet w={64} color={T.sebPetrol} opacity={0.85}/>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 32, borderTop:`1px solid ${T.inkLine}`}}>
          <TaglineL4 size={12} color={T.ink2}>sesames.fr</TaglineL4>
          <LogoWTF size={30}/>
        </div>
      </div>
    </Frame>
  );
}


// C8 — Céline FB 1200×630 · slot photo optionnel (default true)
function ProfilC8({ scale = 0.42, withPhoto = true }) {
  return (
    <Frame w={1200} h={630} bg={T.eesCream} scale={scale}>
      {withPhoto ? (
        <div style={{position:'absolute', inset:'96px 96px',
                     display:'grid', gridTemplateColumns:'6fr 4fr', gap: 64, alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 24}}>
            <SignatureL4 name="Céline" color={T.ink} size={52}/>
            <div style={{display:'flex', alignItems:'center', gap: 12}}>
              <span style={{width: 8, height: 8, background: T.celCoral, borderRadius:'50%'}}/>
              <TaglineL4 color={T.ink2} size={12}>
                Co-fondatrice Way To Freedom
              </TaglineL4>
            </div>
            <TitreL4
              before={<>Reconnaître,<br/>nommer,<br/></>}
              accent="accueillir"
              after="."
              accentColor={T.celCoral}
              size={56}
              maxw="12ch"
            />
            <Filet w={56} color={T.celCoral} opacity={0.85}/>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 20}}>
              <TaglineL4 color={T.ink2} size={11}>
                essencelensoi.fr · Sainte-Hélène en Médoc
              </TaglineL4>
              <LogoWTF size={26}/>
            </div>
          </div>
          <div style={{
            padding: '0.45em',
            border: `0.14em solid ${T.celCoral}`,
            fontSize: 28, display:'inline-block', alignSelf:'center', justifySelf:'flex-end',
          }}>
            <PhotoSlot
              w={300} h={380}
              tint={T.eesRose}
              instruction="Photo libre · ratio 4:5 · cadrage rédacteur"
            />
          </div>
        </div>
      ) : (
        <div style={{position:'absolute', inset:'96px 128px', display:'flex', flexDirection:'column'}}>
          <SignatureL4 name="Céline" color={T.ink} size={56}/>
          <div style={{display:'flex', alignItems:'center', gap: 12, marginTop: 14}}>
            <span style={{width: 8, height: 8, background: T.celCoral, borderRadius:'50%'}}/>
            <TaglineL4 color={T.ink2} size={12}>
              Co-fondatrice Way To Freedom · EES
            </TaglineL4>
          </div>
          <div style={{flex: 1, display:'flex', alignItems:'center', paddingTop: 24}}>
            <div style={{display:'flex', flexDirection:'column', gap: 32}}>
              <TitreL4
                before={<>Reconnaître, nommer,<br/></>}
                accent="accueillir"
                after="."
                accentColor={T.celCoral}
                size={72}
                maxw="13ch"
              />
              <Filet w={72} color={T.celCoral} opacity={0.85}/>
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 20}}>
            <TaglineL4 color={T.ink2} size={11}>
              essencelensoi.fr · Sainte-Hélène en Médoc
            </TaglineL4>
            <LogoWTF size={28}/>
          </div>
        </div>
      )}
    </Frame>
  );
}


// C9 — Céline LI Paysage 1584×396 · banner profil personnel
// Slot photo OPTIONNEL via prop `withPhoto` (default false)
function ProfilC9({ scale = 0.36, withPhoto = false }) {
  return (
    <Frame w={1584} h={396} bg={T.eesCream} scale={scale}>
      <div style={{position:'absolute', left: 80, top: 64, bottom: 64, width: 2,
                   background: T.celCoral, opacity: 0.90}}/>

      {withPhoto ? (
        <div style={{position:'absolute', inset:'48px 96px 48px 128px',
                     display:'grid', gridTemplateColumns:'auto 1fr', gap: 56, alignItems:'center'}}>
          <div style={{
            padding: '0.40em',
            border: `0.14em solid ${T.celCoral}`,
            fontSize: 24, display:'inline-block',
          }}>
            <PhotoSlot
              w={260} h={300}
              tint={T.eesRose}
              instruction="Portrait éditorial 3:4 · pas frontal · contexte de travail"
            />
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 18}}>
            <SignatureL4 name="Céline" color={T.ink} size={48}/>
            <div style={{display:'flex', alignItems:'center', gap: 14}}>
              <span style={{width: 8, height: 8, background: T.celCoral, borderRadius:'50%'}}/>
              <TaglineL4 color={T.ink2} size={12}>
                Co-fondatrice Way To Freedom · EES
              </TaglineL4>
            </div>
            <div style={{
              fontFamily: T.ffBody, fontSize: 16, lineHeight: 1.5,
              color: T.ink2, maxWidth:'48ch', fontWeight: 300,
            }}>
              Pratique énergétique et corporelle. <MotCoeur color={T.celCoral}>Reposer</MotCoeur>{' '}
              le système nerveux.
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 20, marginTop: 4}}>
              <TaglineL4 color={T.ink2} size={11}>essencelensoi.fr</TaglineL4>
              <LogoWTF size={24}/>
            </div>
          </div>
        </div>
      ) : (
        <div style={{position:'absolute', inset:'60px 96px 60px 128px',
                     display:'grid', gridTemplateColumns:'7fr 5fr', gap: 64, alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 20}}>
            <SignatureL4 name="Céline" color={T.ink} size={56}/>
            <div style={{display:'flex', alignItems:'center', gap: 14}}>
              <span style={{width: 8, height: 8, background: T.celCoral, borderRadius:'50%'}}/>
              <TaglineL4 color={T.ink2} size={12}>
                Co-fondatrice Way To Freedom · EES
              </TaglineL4>
            </div>
            <div style={{
              fontFamily: T.ffBody, fontSize: 17, lineHeight: 1.5,
              color: T.ink2, maxWidth:'52ch', fontWeight: 300,
            }}>
              Pratique énergétique et corporelle. <MotCoeur color={T.celCoral}>Reposer</MotCoeur>{' '}
              le système nerveux. Honorer ce qui se dépose.
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap: 14}}>
            <Filet w={64} color={T.celCoral} opacity={0.85}/>
            <TaglineL4 color={T.ink2} size={11}>essencelensoi.fr</TaglineL4>
            <LogoWTF size={28}/>
          </div>
        </div>
      )}
    </Frame>
  );
}


// C10 — Céline IG Carré 1080×1080 · grammaire CitaA pure (pas de slot photo)
function ProfilC10({ scale = 0.42 }) {
  return (
    <Frame w={1080} h={1080} bg={T.eesCream} scale={scale}>
      <div style={{position:'absolute', inset:'120px 128px', display:'flex', flexDirection:'column'}}>

        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
          <SignatureL4 name="Céline" color={T.ink} size={38}/>
          <TaglineL4 size={11} color={T.ink2}>
            Là où vous en êtes
          </TaglineL4>
        </div>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56}}>
            <TitreL4
              before={<>Rien à corriger.<br/>Rien à transformer.<br/></>}
              accent="Reconnaître"
              after="."
              accentColor={T.celCoral}
              size={84}
              maxw="13ch"
            />
            <Filet w={64} color={T.celCoral} opacity={0.85}/>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 32, borderTop:`1px solid ${T.inkLine}`}}>
          <TaglineL4 size={12} color={T.ink2}>essencelensoi.fr</TaglineL4>
          <LogoWTF size={30}/>
        </div>
      </div>
    </Frame>
  );
}


// ─────────────────────────────────────────────────────────────
// SECTION D → V3.0b · story conférence événement (dette mercredi)
// ─────────────────────────────────────────────────────────────

// D5 — EES Story Conférence 1080×1920 (9:16 IG + FB)
//
// Cohérent avec CitaA9 · fond rose poudré deep, or terre accents.
// Annonce conférence Céline (Mystika juin, Brantôme septembre).
// Slot date + lieu + titre paramétriques. Zone bas réservée swipe-up sticker.
// Pas de slot photo (le manifeste rose deep porte seul · doctrine TIP).
function StoryD5({ scale = 0.28,
                   date = '6–7 juin 2026',
                   lieu = 'Salon Mystika · Angoulême',
                   titre = 'Reposer le système nerveux.' }) {
  const cleanTitre = titre.replace(/\.$/, '');
  const words = cleanTitre.split(' ');
  const lastWord = words.slice(-1)[0];
  const before = words.slice(0, -1).join(' ') + ' ';
  return (
    <Frame w={1080} h={1920} bg={T.eesRoseDeep} ink={T.eesCream} scale={scale}>
      <div style={{position:'absolute', inset:'200px 112px 220px 112px',
                   display:'flex', flexDirection:'column', color: T.eesCream}}>

        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
          <WordmarkEES size={36} color={T.eesCream}/>
          <TaglineL4 color="rgba(246,241,232,.70)" size={11}>
            Conférence
          </TaglineL4>
        </div>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56}}>
            <div style={{display:'flex', flexDirection:'column', gap: 18}}>
              <TaglineL4 color={T.eesGoldSoft} size={16}>
                {date}
              </TaglineL4>
              <TaglineL4 color="rgba(246,241,232,.82)" size={13}>
                {lieu}
              </TaglineL4>
            </div>

            <h1 style={{
              fontFamily: T.ffDisplay, fontWeight: 400,
              fontVariationSettings:'"opsz" 96, "wght" 400, "SOFT" 0',
              fontSize: 112, lineHeight: 1.08,
              color: T.eesCream, maxWidth:'10ch', textWrap:'balance',
              margin: 0,
            }}>
              {before}
              <em style={{
                fontFamily: T.ffItalic, fontStyle:'italic',
                color: T.eesGold, fontWeight: 400, letterSpacing:'.005em',
              }}>{lastWord}</em>
              .
            </h1>

            <Filet w={96} color={T.eesGold} opacity={0.95}/>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid rgba(246,241,232,.28)`}}>
          <SignatureL4 name="Céline" color={T.eesCream} size={30}/>
          <TaglineL4 color="rgba(246,241,232,.70)" size={12}>
            essencelensoi.fr
          </TaglineL4>
        </div>
      </div>

      {/* Zone bas réservée swipe-up / sticker app · indication visuelle */}
      <div style={{
        position:'absolute', bottom: 80, left: 112, right: 112, height: 64,
        border: `1px dashed rgba(246,241,232,.40)`,
        display:'flex', alignItems:'center', justifyContent:'center',
        fontFamily: T.ffItalic, fontStyle:'italic', fontSize: 18,
        color:'rgba(246,241,232,.72)', letterSpacing:'.02em',
      }}>
        zone sticker lien · à poser dans l'app IG
      </div>
    </Frame>
  );
}


Object.assign(window, {
  ProfilC1, ProfilC2, ProfilC3, ProfilC4,
  ProfilC5, ProfilC6, ProfilC7, ProfilC8, ProfilC9, ProfilC10,
  StoryD1, StoryD2, StoryD3, StoryD4, StoryD5,
});
