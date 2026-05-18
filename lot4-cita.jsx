// lot4-cita.jsx — Section A · 8 posts citation pure
//
// Typographie seule. Mot-cœur italique en accent or pôle. Aucune photo.
// Marges 96-128px. Filet or signature ponctuel sous le titre.
// Anti-pattern 11bis : aucun numéro, aucun cartouche, aucun eyebrow daté.
//
// Exports window : CitaA1..A8

// ─────────────────────────────────────────────────────────────
// A1 — EES citation IG carré 1080×1080
// « Le corps sait. Encore faut-il l'écouter. »
// Crème lin · or signature EES · pastille rose discrète en pied
// ─────────────────────────────────────────────────────────────
function CitaA1({ scale = 0.42 }) {
  return (
    <Frame w={1080} h={1080} bg={T.eesCream} scale={scale}>
      <div style={{
        position:'absolute', inset:'120px 128px',
        display:'flex', flexDirection:'column',
      }}>
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
          <WordmarkEES size={42} color={T.eesGold}/>
        </div>

        <div style={{flex: 1, display:'flex', alignItems:'center', paddingTop: 48}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56}}>
            <TitreL4
              before={<>Le corps sait. Encore faut-il<br/></>}
              accent="l’écouter"
              after="."
              accentColor={T.eesGold}
              size={92}
              maxw="14ch"
            />
            <Filet w={64} color={T.eesGold} opacity={0.8}/>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 32, borderTop:`1px solid ${T.inkLine}`}}>
          <div style={{display:'flex', flexDirection:'column', gap: 8}}>
            <SignatureL4 name="Céline" size={34}/>
            <TaglineL4 size={13}>Sanctuaire du corps</TaglineL4>
          </div>
          <div style={{display:'flex', alignItems:'center', gap: 14}}>
            <span style={{width: 10, height: 10, background: T.eesRose, borderRadius:'50%'}}/>
            <TaglineL4 size={13}>essencelensoi.fr</TaglineL4>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// A2 — EES citation IG portrait 1080×1350 (4:5)
// « Reposer le système nerveux. »
// Silence éditorial — beaucoup d'air haut + bas, mot-cœur sage.
// ─────────────────────────────────────────────────────────────
function CitaA2({ scale = 0.35 }) {
  return (
    <Frame w={1080} h={1350} bg={T.eesCream} scale={scale}>
      <div style={{position:'absolute', inset:'140px 128px', display:'flex', flexDirection:'column'}}>
        <WordmarkEES size={36} color={T.eesGold}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 48}}>
            <TitreL4
              before="Reposer le "
              accent="système nerveux"
              after="."
              accentColor={T.eesSage}
              size={106}
              maxw="11ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 22, lineHeight: 1.5,
              color: T.ink2, maxWidth:'32ch', fontWeight: 300,
            }}>
              Une heure suffit parfois. La fenêtre, la respiration,
              le poids qui se dépose.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid ${T.inkLine}`}}>
          <SignatureL4 name="Céline" size={30}/>
          <TaglineL4 size={13}>Sainte-Hélène en Médoc</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// A3 — SÉSÂMES citation LI carré 1200×1200
// « Pas par manque de sérieux. Par manque de système. »
// Blanc lumière · accent or canalisé (sujet « système »)
// ─────────────────────────────────────────────────────────────
function CitaA3({ scale = 0.4 }) {
  return (
    <Frame w={1200} h={1200} bg={T.sesLight} scale={scale}>
      <div style={{position:'absolute', inset:'128px 144px', display:'flex', flexDirection:'column'}}>
        <WordmarkSES size={26} color={T.sesInk}/>

        <div style={{flex: 1, display:'flex', alignItems:'center', paddingTop: 56}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56, maxWidth:'90%'}}>
            <TitreL4
              before={<>Pas par manque de sérieux.<br/>Par manque de </>}
              accent="système"
              after="."
              accentColor={T.sesGold}
              size={96}
              maxw="18ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 19, lineHeight: 1.55,
              color: T.ink2, maxWidth:'42ch', fontWeight: 300,
            }}>
              Cartographier vingt-six ans de management.
              Reconnaître les passages qui se répètent.
              Nommer les seuils sans les forcer.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid ${T.inkLine}`}}>
          <div style={{display:'flex', flexDirection:'column', gap: 8}}>
            <SignatureL4 name="Sébastien" size={32}/>
            <TaglineL4 size={13}>Co-fondateur Way To Freedom</TaglineL4>
          </div>
          <TaglineL4 size={13}>L’attention précède l’action</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// A4 — SÉSÂMES citation IG portrait 1080×1350
// « Tenir l'espace, c'est déjà transmettre. »
// Filet violet vertical à gauche, accent or canalisé.
// ─────────────────────────────────────────────────────────────
function CitaA4({ scale = 0.35 }) {
  return (
    <Frame w={1080} h={1350} bg={T.sesLight} scale={scale}>
      {/* Filet violet vertical discret en bord gauche */}
      <div style={{position:'absolute', left: 64, top: 140, bottom: 140, width: 2, background: T.sesViolet, opacity: 0.85}}/>

      <div style={{position:'absolute', inset:'140px 128px 140px 112px', display:'flex', flexDirection:'column'}}>
        <WordmarkSES size={22} color={T.sesInk}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 48}}>
            <TitreL4
              before={<>Tenir l’espace,<br/>c’est déjà </>}
              accent="transmettre"
              after="."
              accentColor={T.sesGold}
              size={104}
              maxw="13ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 20, lineHeight: 1.55,
              color: T.ink2, maxWidth:'34ch', fontWeight: 300,
            }}>
              Avant la méthode, la présence.
              Avant l’outil, le témoin.
              Avant la solution, le seuil.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid ${T.inkLine}`}}>
          <SignatureL4 name="Sébastien" size={30}/>
          <TaglineL4 size={13}>sesames.fr</TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// A5 — WTF citation LI carré 1200×1200
// « Une maison. Trois chemins. Un horizon. »
// Très minimal. Titre centré, filet or sous, papillon en pied droit.
// ─────────────────────────────────────────────────────────────
function CitaA5({ scale = 0.4 }) {
  return (
    <Frame w={1200} h={1200} bg={T.wtfLight} scale={scale}>
      <div style={{position:'absolute', inset:'160px 160px', display:'flex', flexDirection:'column'}}>

        <div style={{display:'flex', justifyContent:'flex-start'}}>
          <WordmarkWTF size={28} color={T.wtfInk} weight={300}/>
        </div>

        <div style={{flex: 1, display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56, alignItems:'flex-start'}}>
            <TitreL4
              before={<>Une maison. Trois chemins.<br/>Un </>}
              accent="horizon"
              after="."
              accentColor={T.wtfGold}
              size={112}
              maxw="14ch"
            />
            <Filet w={80} color={T.wtfGold} opacity={0.8}/>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
          <TaglineL4 size={13}>waytofreedom.fr</TaglineL4>
          <div style={{opacity: 0.85}}>
            <PapillonGold size={56}/>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// A6 — WTF manifeste fond bleu nuit IG portrait 1080×1350
// Registre pivot signature (1-2 / an max). Mono blanc + or signature.
// « Marcher porte ce qui doit l'être. »
// ─────────────────────────────────────────────────────────────
function CitaA6({ scale = 0.35 }) {
  // V3.0b · rebase automatique sur --wtf-nuit #1B1814 (palette chaude validée)
  const bg = T.wtfNuit;
  return (
    <Frame w={1080} h={1350} bg={bg} ink={T.wtfLin} scale={scale}>
      <div style={{position:'absolute', inset:'140px 128px', display:'flex', flexDirection:'column', color: T.wtfLin}}>

        <WordmarkWTF size={26} color="rgba(250,247,242,.85)" weight={300}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56}}>
            <TitreL4
              before={<>Marcher porte<br/>ce qui doit </>}
              accent="l’être"
              after="."
              accentColor={T.wtfGold}
              ink={T.wtfLight}
              size={108}
              maxw="13ch"
            />
            <Filet w={80} color={T.wtfGold} opacity={0.9}/>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid rgba(250,247,242,.18)`}}>
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <TaglineL4 color="rgba(250,247,242,.75)" size={13}>
              Manifeste fondateur
            </TaglineL4>
            <TaglineL4 color="rgba(250,247,242,.55)" size={11}>
              waytofreedom.fr
            </TaglineL4>
          </div>
          <PapillonGold size={68}/>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// A7 — Voie citation IG carré 1080×1080
// « L'autonomie patiente. »
// Crème lin · accent cuivre · paire de carrés cuivre/nuit en haut-droit
// ─────────────────────────────────────────────────────────────
function CitaA7({ scale = 0.42 }) {
  return (
    <Frame w={1080} h={1080} bg={T.voieCream} scale={scale}>
      <div style={{position:'absolute', inset:'120px 128px', display:'flex', flexDirection:'column'}}>

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
          <WordmarkVoie size={32} color={T.voieCopper}/>
          <div style={{display:'flex', gap: 0}}>
            <div style={{width: 22, height: 22, background: T.voieCopper}}/>
            <div style={{width: 22, height: 22, background: T.voieNight}}/>
          </div>
        </div>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 48}}>
            <TitreL4
              before="L’autonomie "
              accent="patiente"
              after="."
              accentColor={T.voieCopper}
              ink={T.voieNight}
              size={104}
              maxw="14ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 19, lineHeight: 1.55,
              color: T.ink2, maxWidth:'34ch', fontWeight: 300,
            }}>
              Construire un revenu complémentaire qui tient,
              au rythme propre de ce qu’on vit.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 32, borderTop:`1px solid ${T.inkLine}`}}>
          <TaglineL4 color={T.voieNight} size={12}>
            waytofreedom.fr / revenu-complementaire-independant
          </TaglineL4>
          <TaglineL4 color={T.voieCopper} size={12}>
            Le mouvement avant la méthode
          </TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// A8 — EES manifeste registre 3 fond rose poudré profond
// Signature pivot exceptionnelle (1-2 / mois max). Cream → rose-deep
// en bloc plein. Mot-cœur en or signature EES.
// « Le retour à soi commence par le souffle. »
// ─────────────────────────────────────────────────────────────
function CitaA8({ scale = 0.35 }) {
  return (
    <Frame w={1080} h={1350} bg={T.eesRoseDeep} ink={T.eesCream} scale={scale}>
      <div style={{position:'absolute', inset:'140px 128px', display:'flex', flexDirection:'column', color: T.eesCream}}>

        <WordmarkEES size={36} color={T.eesCream}/>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 48}}>
            <TitreL4
              before={<>Le retour à soi<br/>commence par le </>}
              accent="souffle"
              after="."
              accentColor={T.eesGold}
              ink={T.eesCream}
              size={100}
              maxw="13ch"
            />
            <Filet w={80} color={T.eesGold} opacity={0.95}/>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 36, borderTop:`1px solid rgba(246,241,232,.28)`}}>
          <div style={{display:'flex', flexDirection:'column', gap: 8}}>
            <SignatureL4 name="Céline" color={T.eesCream} size={32}/>
            <TaglineL4 color="rgba(246,241,232,.80)" size={12}>
              Registre signature pivot
            </TaglineL4>
          </div>
          <TaglineL4 color="rgba(246,241,232,.70)" size={12}>
            essencelensoi.fr
          </TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ────────────────────────────────────────────────────────────
// SECTION A → V3.0b · débord événement (dette mercredi)
// ────────────────────────────────────────────────────────────

// A9 — EES annonce conférence Céline IG portrait 1080×1350
//
// Fond rose poudré deep #D9B8A6 (registre signature pivot, cohérent
// CitaA8). Or terre V3.0b accents. Slot date + lieu + titre paramétriques.
// Usage canonique · Mystika 6-7 juin Angoulême, Brantôme 19-20 septembre.
// Signature Céline seule (sa conférence — pas duo).
function CitaA9({ scale = 0.35, date = '6–7 juin 2026', lieu = 'Salon Mystika · Angoulême',
                  titre = 'Le corps sait. Encore faut-il l’écouter.' }) {
  return (
    <Frame w={1080} h={1350} bg={T.eesRoseDeep} ink={T.eesCream} scale={scale}>
      <div style={{position:'absolute', inset:'140px 128px', display:'flex', flexDirection:'column', color: T.eesCream}}>

        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
          <WordmarkEES size={36} color={T.eesCream}/>
          <TaglineL4 color="rgba(246,241,232,.75)" size={11}>
            Conférence · entrée libre
          </TaglineL4>
        </div>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 56}}>
            <div style={{display:'flex', flexDirection:'column', gap: 14}}>
              <TaglineL4 color={T.eesGoldSoft} size={13}>
                {date}
              </TaglineL4>
              <TaglineL4 color="rgba(246,241,232,.80)" size={12}>
                {lieu}
              </TaglineL4>
            </div>

            <TitreL4
              before={<>{titre.split(' ').slice(0, -3).join(' ')} </>}
              accent={titre.split(' ').slice(-2, -1)[0]}
              after={` ${titre.split(' ').slice(-1)[0]}`}
              accentColor={T.eesGold}
              ink={T.eesCream}
              size={86}
              maxw="13ch"
            />

            <Filet w={64} color={T.eesGold} opacity={0.95}/>

            <div style={{
              fontFamily: T.ffBody, fontSize: 18, lineHeight: 1.55,
              color: 'rgba(246,241,232,.88)', maxWidth:'34ch', fontWeight: 300,
            }}>
              Une heure pour reposer le système nerveux,
              honorer ce qui demande à se déposer,
              reconnaître la fluidité du souffle.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 32, borderTop:`1px solid rgba(246,241,232,.28)`}}>
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <SignatureL4 name="Céline" color={T.eesCream} size={30}/>
            <TaglineL4 color="rgba(246,241,232,.72)" size={11}>
              Sanctuaire du corps
            </TaglineL4>
          </div>
          <TaglineL4 color="rgba(246,241,232,.70)" size={11}>
            essencelensoi.fr
          </TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// A10 — WTF annonce événement écosystème IG portrait 1080×1350
//
// Fond nuit V3.0b #1B1814 (registre manifeste structurant). Or terre
// doré bas accents. Sceau WTF papillon-corps live en signature.
// Slot date + lieu + titre paramétriques. Usage canonique · salon où le
// duo expose ensemble, conférence duo, journée portes ouvertes.
function CitaA10({ scale = 0.35,
                   date = '6–7 juin 2026',
                   lieu = 'Salon Mystika · Angoulême',
                   titre = 'Une maison.', accent = 'Trois chemins.', after = 'Un horizon.' }) {
  return (
    <Frame w={1080} h={1350} bg={T.wtfNuit} ink={T.wtfLin} scale={scale}>
      <div style={{position:'absolute', inset:'140px 128px', display:'flex', flexDirection:'column', color: T.wtfLin}}>

        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
          <WordmarkWTF size={26} color="rgba(246,241,232,.88)" weight={300}/>
          <TaglineL4 color="rgba(246,241,232,.72)" size={11}>
            Événement écosystème
          </TaglineL4>
        </div>

        <div style={{flex: 1, display:'flex', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap: 48}}>
            <div style={{display:'flex', flexDirection:'column', gap: 14}}>
              <TaglineL4 color={T.wtfDoreBas} size={13}>
                {date}
              </TaglineL4>
              <TaglineL4 color="rgba(246,241,232,.78)" size={12}>
                {lieu}
              </TaglineL4>
            </div>

            <h1 style={{
              fontFamily: T.ffDisplay, fontWeight: 400,
              fontVariationSettings:'"opsz" 144, "wght" 300, "SOFT" 0',
              fontSize: 92, lineHeight: 1.12,
              color: T.wtfLin, maxWidth:'14ch', textWrap:'balance',
              margin: 0,
            }}>
              {titre}<br/>
              <em style={{
                fontFamily: T.ffItalic, fontStyle:'italic',
                color: T.wtfDoreBas, fontWeight: 400, letterSpacing:'.005em',
              }}>{accent}</em><br/>
              {after}
            </h1>

            <Filet w={80} color={T.wtfDoreBas} opacity={0.92}/>

            <div style={{
              fontFamily: T.ffBody, fontSize: 17, lineHeight: 1.55,
              color: 'rgba(246,241,232,.82)', maxWidth:'34ch', fontWeight: 300,
            }}>
              Céline & Sébastien Marcadet exposent ensemble.
              Conférences, rencontres, accompagnements.
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                     paddingTop: 32, borderTop:`1px solid rgba(246,241,232,.18)`}}>
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <TaglineL4 color="rgba(246,241,232,.78)" size={12}>
              waytofreedom.fr / evenements
            </TaglineL4>
            <TaglineL4 color="rgba(246,241,232,.68)" size={11}>
              Céline & Sébastien Marcadet
            </TaglineL4>
          </div>
          <LogoWTF size={72}/>
        </div>
      </div>
    </Frame>
  );
}

Object.assign(window, {
  CitaA1, CitaA2, CitaA3, CitaA4, CitaA5, CitaA6, CitaA7, CitaA8,
  CitaA9, CitaA10,
});
