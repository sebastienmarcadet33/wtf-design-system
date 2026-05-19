// lot4-gbp.jsx — Famille 1 · GBP + AveHeader · V3.0c (19 mai 2026)
//
// V3.0c · refonte AveHeader complète (brief §2 du 19 mai) :
//   · 3 formats redimensionnés · 3600×1203 desktop · 1800×603 email · 3240×963 mobile
//   · Acronyme "AVE" retiré · wordmark "Aloe Vera Excellence" dominant Fraunces
//   · Phénix sceau signe à côté du wordmark (15-20% largeur) · pas à sa place
//   · Bande sauge clair affinée 8px en pied · pas de mention territoriale
//
// V3.0c · garde-fou wordmark SÉSÂMES sur SesGbp (brief §4) :
//   · Le composant WordmarkSES (cf. lot5-logo-swap.jsx) impose désormais
//     aspectRatio: '4.67/1' au PNG sesames-wordmark + display:inline-block
//     + alignSelf:flex-start → l'étirement horizontal flex-column observé
//     sur les Lot 8 PNG ne peut plus se produire.
//   · Doctrine cardinale entities-v3-FULL.css §I respectée · aucune refonte
//     vectorielle du PNG, juste contrainte d'aspect-ratio à l'affichage.
//
// Doctrine GBP écosystème · seuls deux profils GBP existent dans la
// stratégie WTF :
//   · GBP EES        oui · canal de production EES Médoc
//   · GBP SÉSÂMES    oui · canal de production Sébastien praticien
//   · GBP AVE        n'existe pas (hub support discret)
//   · GBP WTF        n'existe pas (voix rare maison-mère)
// → Ce fichier produit EesGbp + SesGbp uniquement (pas AveGbp, pas WtfGbp).
//
// Doctrine V3.0b slots photo GBP formalisée (arbitrée 17 mai 2026) :
//   · Slot photo OPTIONNEL, pas par défaut.
//   · Variante A · typo pur dominante (cas standard, citation/annonce/tagline)
//   · Variante B · photo d'ambiance végétale ou objet (matière, lieu, seuil)
//     → JAMAIS portrait frontal, JAMAIS bureau personnel.
//   Le gabarit définit la zone + ratio. Le rédacteur dicte le sujet.
//   Instructions de cadrage génériques, ≤ 14 mots, sans préempter le sujet.
//
// Exports window : EesGbp, SesGbp, AveHeader, AveHeaderEmail, AveHeaderMobile


// ─────────────────────────────────────────────────────────────
// EesGbp — Google Business Profile EES · 1200×900 (4:3)
//
// Variante A par défaut (typo pur dominant). Variante B optionnelle via
// prop `variant='photo'` · photo d'ambiance végétale, jamais portrait.
// Bandeau rose poudré V3.0b restauré (#E8D2C6) en haut, or terre wordmark.
// ─────────────────────────────────────────────────────────────
function EesGbp({ scale = 0.45, variant = 'typo' }) {
  return (
    <Frame w={1200} h={900} bg={T.eesCream} scale={scale}>
      {/* Bandeau rose poudré horizontal en haut · présence diffuse signature V3.0b */}
      <div style={{
        position:'absolute', top: 0, left: 0, right: 0, height: 96,
        background: T.eesRose, opacity: 0.65,
      }}/>

      {variant === 'photo' ? (
        // ─── Variante B · photo d'ambiance végétale + texte droite ───
        <div style={{position:'absolute', inset:'128px 96px 96px 96px',
                     display:'grid', gridTemplateColumns:'5fr 6fr', gap: 80, alignItems:'center'}}>

          <div style={{
            padding: '0.55em',
            border: `0.12em solid ${T.eesGold}`,
            fontSize: 28, display:'inline-block',
          }}>
            <PhotoSlot
              w={420} h={520}
              tint={T.eesRose}
              instruction="Matière vivante · cadrage serré · lumière tamisée matinale"
            />
          </div>

          <div style={{display:'flex', flexDirection:'column', gap: 36}}>
            <div style={{display:'flex', alignItems:'center', gap: 16}}>
              <WordmarkEES size={42} color={T.eesGold}/>
              <Filet w={32} color={T.eesGold} opacity={0.65}/>
            </div>
            <TitreL4
              before={<>Reposer le<br/>système nerveux,<br/></>}
              accent="ici"
              after="."
              accentColor={T.eesGold}
              ink={T.eesDeep}
              size={68}
              maxw="13ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 17, lineHeight: 1.55,
              color: T.ink2, maxWidth:'40ch', fontWeight: 300,
            }}>
              Une heure à part. Pratique énergétique
              et corporelle, à votre rythme.
            </div>
            <Filet w={56} color={T.eesGold} opacity={0.85}/>
            <div style={{display:'flex', flexDirection:'column', gap: 10}}>
              <SignatureL4 name="Céline" color={T.eesDeep} size={28}/>
              <TaglineL4 color={T.eesSage} size={12}>
                Sanctuaire du corps · Sainte-Hélène en Médoc
              </TaglineL4>
              <TaglineL4 color={T.ink2} size={11}>
                essencelensoi.fr · sur rendez-vous
              </TaglineL4>
            </div>
          </div>
        </div>
      ) : (
        // ─── Variante A · typo pur dominante (cas standard) ───
        <div style={{position:'absolute', inset:'160px 144px 96px 144px',
                     display:'flex', flexDirection:'column'}}>

          <div style={{display:'flex', alignItems:'center', gap: 20}}>
            <WordmarkEES size={48} color={T.eesGold}/>
            <Filet w={48} color={T.eesGold} opacity={0.65}/>
          </div>

          <div style={{flex: 1, display:'flex', alignItems:'center'}}>
            <div style={{display:'flex', flexDirection:'column', gap: 44, maxWidth:'82%'}}>
              <TitreL4
                before={<>Le corps sait.<br/>Encore faut-il </>}
                accent="l'écouter"
                after="."
                accentColor={T.eesGold}
                ink={T.eesDeep}
                size={88}
                maxw="16ch"
              />
              <div style={{
                fontFamily: T.ffBody, fontSize: 18, lineHeight: 1.55,
                color: T.ink2, maxWidth:'46ch', fontWeight: 300,
              }}>
                Pratique énergétique et corporelle. Une heure à part,
                la fenêtre, la respiration, le poids qui se dépose.
              </div>
              <Filet w={64} color={T.eesGold} opacity={0.85}/>
            </div>
          </div>

          <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                       paddingTop: 28, borderTop:`1px solid ${T.inkLine}`}}>
            <div style={{display:'flex', flexDirection:'column', gap: 8}}>
              <SignatureL4 name="Céline" color={T.eesDeep} size={28}/>
              <TaglineL4 color={T.eesSage} size={12}>
                Sanctuaire du corps · Sainte-Hélène en Médoc
              </TaglineL4>
            </div>
            <TaglineL4 color={T.ink2} size={11}>
              essencelensoi.fr · sur rendez-vous
            </TaglineL4>
          </div>
        </div>
      )}
    </Frame>
  );
}


// ─────────────────────────────────────────────────────────────
// SesGbp — Google Business Profile SÉSÂMES · 1200×900 (4:3)
//
// Variante A par défaut (typo pur, clarification intérieure).
// Variante B optionnelle · photo d'ambiance objet/seuil/forêt, jamais
// portrait frontal. Filet violet vertical signature, or canalisé wordmark.
// ─────────────────────────────────────────────────────────────
function SesGbp({ scale = 0.45, variant = 'typo' }) {
  return (
    <Frame w={1200} h={900} bg={T.sesLight} scale={scale}>
      {/* Filet violet vertical discret signature en bord gauche */}
      <div style={{position:'absolute', left: 64, top: 128, bottom: 128, width: 2,
                   background: T.sesViolet, opacity: 0.85}}/>

      {variant === 'photo' ? (
        // ─── Variante B · texte gauche + photo d'ambiance droite ───
        <div style={{position:'absolute', inset:'128px 96px 96px 112px',
                     display:'grid', gridTemplateColumns:'6fr 5fr', gap: 80, alignItems:'center'}}>

          <div style={{display:'flex', flexDirection:'column', gap: 36}}>
            <WordmarkSES size={56} color={T.sesInk}/>
            <TitreL4
              before={<>Pas par manque<br/>de sérieux.<br/>Par manque<br/>de </>}
              accent="système"
              after="."
              accentColor={T.sesGold}
              ink={T.sesInk}
              size={64}
              maxw="14ch"
            />
            <div style={{
              fontFamily: T.ffBody, fontSize: 17, lineHeight: 1.55,
              color: T.ink2, maxWidth:'42ch', fontWeight: 300,
            }}>
              Vingt-six ans de management.
              Cartographier les seuils.
              Tenir l'espace pendant qu'on s'y avance.
            </div>
            <Filet w={56} color={T.sesGold} opacity={0.85}/>
            <div style={{display:'flex', flexDirection:'column', gap: 10}}>
              <SignatureL4 name="Sébastien" color={T.sesInk} size={28}/>
              <TaglineL4 color={T.ink2} size={12}>
                Clarification intérieure · accompagnement individuel
              </TaglineL4>
              <TaglineL4 color={T.ink2} size={11}>
                sesames.fr · entretien préalable
              </TaglineL4>
            </div>
          </div>

          <div style={{
            padding: '0.55em',
            border: `0.12em solid ${T.sesGold}`,
            fontSize: 28, display:'inline-block',
          }}>
            <PhotoSlot
              w={400} h={520}
              tint={`color-mix(in oklab, ${T.sesViolet} 8%, ${T.sesLight})`}
              instruction="Élément de seuil · vertical · contraste maîtrisé"
            />
          </div>
        </div>
      ) : (
        // ─── Variante A · typo pur dominante (cas standard) ───
        <div style={{position:'absolute', inset:'160px 144px 96px 144px',
                     display:'flex', flexDirection:'column'}}>

          <WordmarkSES size={64} color={T.sesInk}/>

          <div style={{flex: 1, display:'flex', alignItems:'center'}}>
            <div style={{display:'flex', flexDirection:'column', gap: 44, maxWidth:'82%'}}>
              <TitreL4
                before={<>Pas par manque de sérieux.<br/>Par manque de </>}
                accent="système"
                after="."
                accentColor={T.sesGold}
                ink={T.sesInk}
                size={84}
                maxw="18ch"
              />
              <div style={{
                fontFamily: T.ffBody, fontSize: 18, lineHeight: 1.55,
                color: T.ink2, maxWidth:'48ch', fontWeight: 300,
              }}>
                Vingt-six ans de management. Cartographier les seuils,
                tenir l'espace pendant qu'on s'y avance. L'attention
                précède l'action.
              </div>
              <Filet w={64} color={T.sesGold} opacity={0.85}/>
            </div>
          </div>

          <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                       paddingTop: 28, borderTop:`1px solid ${T.inkLine}`}}>
            <div style={{display:'flex', flexDirection:'column', gap: 8}}>
              <SignatureL4 name="Sébastien" color={T.sesInk} size={28}/>
              <TaglineL4 color={T.ink2} size={12}>
                Clarification intérieure · accompagnement individuel
              </TaglineL4>
            </div>
            <TaglineL4 color={T.ink2} size={11}>
              sesames.fr · entretien préalable
            </TaglineL4>
          </div>
        </div>
      )}
    </Frame>
  );
}


// ─────────────────────────────────────────────────────────────
// AveHeader — En-tête éditorial Aloe Vera Excellence · V3.0c
// ─────────────────────────────────────────────────────────────
//
// Doctrine V3.0c (brief 19 mai · arbitrage Patrimoine §VI scellé 17 mai) :
//   · Le sceau phénix est un symbole iconographique pur, SANS wordmark
//     associé. L'acronyme "AVE" n'a jamais été doctrine façade.
//   · Composition unique : wordmark "Aloe Vera Excellence" en Fraunces
//     régulier (60-65% largeur dominante), tagline italique sous filet,
//     sceau phénix (15-20%) en signature côté droit — il signe à côté
//     du wordmark, pas à sa place.
//   · Bande sauge clair affinée en pied (8px).
//   · Pas de mention territoriale (Médoc, Gironde, Sainte-Hélène) ·
//     doctrine fondatrice nomade Patrimoine §II.
//   · Pas de mention "Forever" · tri-distinction 3 mai 2026.
//
// Trois formats livrés :
//   · AveHeader        3600×1203  desktop hero web
//   · AveHeaderEmail   1800×603   signature email institutionnelle
//   · AveHeaderMobile  3240×963   mobile-first responsive
//
// Mood d'école : The Beauty Chef "Edit", Pukka Herbs "Wellness",
// Aesop Quarterly. Couche éditoriale-magazine de marques santé
// naturelle non-territorialisées.
// ─────────────────────────────────────────────────────────────


// AveHeader desktop — 3600×1203 hero web
function AveHeader({ scale = 0.22, tagline = '[Tagline AVE · à définir]' }) {
  return (
    <Frame w={3600} h={1203} bg={T.aveCream} scale={scale}>
      {/* Bande sauge clair affinée en pied · 8px doctrine V3.0c */}
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 0, height: 8,
        background: T.aveAloesClair, opacity: 0.95,
      }}/>

      <div style={{position:'absolute', inset:'240px 280px 200px 280px',
                   display:'grid', gridTemplateColumns:'minmax(0, 65fr) minmax(0, 20fr)',
                   gap: 160, alignItems:'center'}}>

        {/* Zone gauche dominante · wordmark + filet + tagline */}
        <div style={{display:'flex', flexDirection:'column', gap: 56, minWidth: 0}}>
          <h1 style={{
            fontFamily: T.ffDisplay, fontWeight: 400,
            fontVariationSettings:'"opsz" 144, "wght" 400, "SOFT" 0',
            fontSize: 240, lineHeight: 1.02,
            color: T.aveInk, letterSpacing:'.02em',
            maxWidth: '14ch', margin: 0,
            textWrap: 'balance',
          }}>
            Aloe Vera<br/>Excellence
          </h1>

          <div style={{display:'flex', flexDirection:'column', gap: 28}}>
            <div style={{
              width: 128, height: 1,
              background: T.aveAloesClair, opacity: 0.95,
            }}/>
            <div style={{
              fontFamily: T.ffItalic, fontStyle:'italic',
              fontSize: 44, lineHeight: 1.35,
              color: T.ink2, maxWidth:'34ch',
              fontStyle: tagline.startsWith('[') ? 'italic' : 'italic',
              opacity: tagline.startsWith('[') ? 0.6 : 1,
            }}>
              {tagline}
            </div>
          </div>
        </div>

        {/* Signature droite · phénix sceau à côté, pas à la place */}
        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
          <LogoAVE size={320}/>
        </div>
      </div>
    </Frame>
  );
}


// AveHeader email — 1800×603 signature email institutionnelle
function AveHeaderEmail({ scale = 0.44, tagline = '[Tagline AVE · à définir]' }) {
  return (
    <Frame w={1800} h={603} bg={T.aveCream} scale={scale}>
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 0, height: 6,
        background: T.aveAloesClair, opacity: 0.95,
      }}/>

      <div style={{position:'absolute', inset:'108px 140px 96px 140px',
                   display:'grid', gridTemplateColumns:'minmax(0, 65fr) minmax(0, 20fr)',
                   gap: 80, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 28, minWidth: 0}}>
          <h1 style={{
            fontFamily: T.ffDisplay, fontWeight: 400,
            fontVariationSettings:'"opsz" 144, "wght" 400, "SOFT" 0',
            fontSize: 128, lineHeight: 1.02,
            color: T.aveInk, letterSpacing:'.02em',
            margin: 0, whiteSpace: 'nowrap',
          }}>
            Aloe Vera Excellence
          </h1>

          <div style={{display:'flex', flexDirection:'column', gap: 14}}>
            <div style={{
              width: 72, height: 1,
              background: T.aveAloesClair, opacity: 0.95,
            }}/>
            <div style={{
              fontFamily: T.ffItalic, fontStyle:'italic',
              fontSize: 24, lineHeight: 1.4,
              color: T.ink2,
              opacity: tagline.startsWith('[') ? 0.6 : 1,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              {tagline}
            </div>
          </div>
        </div>

        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
          <LogoAVE size={200}/>
        </div>
      </div>
    </Frame>
  );
}


// AveHeader mobile — 3240×963 mobile-first
function AveHeaderMobile({ scale = 0.24, tagline = '[Tagline AVE · à définir]' }) {
  return (
    <Frame w={3240} h={963} bg={T.aveCream} scale={scale}>
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 0, height: 8,
        background: T.aveAloesClair, opacity: 0.95,
      }}/>

      <div style={{position:'absolute', inset:'180px 200px 160px 200px',
                   display:'grid', gridTemplateColumns:'minmax(0, 65fr) minmax(0, 20fr)',
                   gap: 120, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 44, minWidth: 0}}>
          <h1 style={{
            fontFamily: T.ffDisplay, fontWeight: 400,
            fontVariationSettings:'"opsz" 144, "wght" 400, "SOFT" 0',
            fontSize: 192, lineHeight: 1.02,
            color: T.aveInk, letterSpacing:'.02em',
            maxWidth: '14ch', margin: 0,
            textWrap: 'balance',
          }}>
            Aloe Vera<br/>Excellence
          </h1>

          <div style={{display:'flex', flexDirection:'column', gap: 20}}>
            <div style={{
              width: 96, height: 1,
              background: T.aveAloesClair, opacity: 0.95,
            }}/>
            <div style={{
              fontFamily: T.ffItalic, fontStyle:'italic',
              fontSize: 32, lineHeight: 1.4,
              color: T.ink2, maxWidth:'40ch',
              opacity: tagline.startsWith('[') ? 0.6 : 1,
            }}>
              {tagline}
            </div>
          </div>
        </div>

        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
          <LogoAVE size={240}/>
        </div>
      </div>
    </Frame>
  );
}


Object.assign(window, {
  EesGbp, SesGbp, AveHeader, AveHeaderEmail, AveHeaderMobile,
});
