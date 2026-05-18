// lot4-gbp.jsx — Famille 1 · GBP + AveHeader · V3.0b
//
// Transition V2.2 → V3.0b complète. Trois composants (+ deux variantes
// AveHeader) qui clôturent la dette mercredi famille 1 (cf. brief DirCom
// 17 mai 2026 + arbitrages doctrinaux post-questions).
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
// AveHeader · trois formats livrés (1200×400 web + 600×200 email
// + 1080×320 mobile bonus). Tagline en placeholder `[Tagline AVE · à définir]`,
// DirCom arbitre en parallèle avec Sébastien & Céline.
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
            <WordmarkSES size={24} color={T.sesInk}/>
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

          <WordmarkSES size={28} color={T.sesInk}/>

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
// AveHeader — En-tête site web AVE · 1200×400
//
// Composition typographique, aucune photo. Bandeau aloès V3.0b en filet
// bas (touche pigmentaire signature, JAMAIS aplat dominant). Sceau phénix
// bas droite. Tagline en placeholder `[Tagline AVE · à définir]`.
// DirCom arbitre avec Sébastien & Céline en parallèle (doctrine DGCCRF
// aloe vera = moins on affiche, mieux c'est · Forever jamais nommé).
// ─────────────────────────────────────────────────────────────
function AveHeader({ scale = 0.55, tagline = '[Tagline AVE · à définir]' }) {
  return (
    <Frame w={1200} h={400} bg={T.aveCream} scale={scale}>
      {/* Bandeau aloès en filet bas · touche pigmentaire signature V3.0b */}
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 0, height: 6,
        background: T.aveAloes, opacity: 0.90,
      }}/>
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 6, height: 22,
        background: T.aveAloesClair, opacity: 0.35,
      }}/>

      <div style={{position:'absolute', inset:'64px 96px 80px 96px',
                   display:'grid', gridTemplateColumns:'7fr 3fr', gap: 64, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 22}}>
          <div style={{display:'flex', alignItems:'center', gap: 20}}>
            <WordmarkAVE size={38} color={T.aveInk}/>
            <Filet w={48} color={T.aveAloes} opacity={0.85}/>
            <span style={{
              fontFamily: T.ffDisplay, fontStyle:'italic',
              fontVariationSettings:'"opsz" 96, "wght" 400',
              fontSize: 22, color: T.aveAloes, letterSpacing:'.005em',
            }}>
              Aloe Vera Excellence
            </span>
          </div>

          <div style={{
            fontFamily: T.ffBody, fontSize: 15, lineHeight: 1.6,
            color: T.ink2, maxWidth:'60ch', fontWeight: 300,
            fontStyle: tagline.startsWith('[') ? 'italic' : 'normal',
          }}>
            {tagline}
          </div>

          <TaglineL4 color={T.ink2} size={11}>
            aloeveraexcellence.com
          </TaglineL4>
        </div>

        {/* Sceau phénix or canalisé bas droite */}
        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
          <LogoAVE size={150}/>
        </div>
      </div>
    </Frame>
  );
}


// ─────────────────────────────────────────────────────────────
// AveHeaderEmail — Variante email · 600×200
// ─────────────────────────────────────────────────────────────
function AveHeaderEmail({ scale = 0.85, tagline = '[Tagline AVE · à définir]' }) {
  return (
    <Frame w={600} h={200} bg={T.aveCream} scale={scale}>
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 0, height: 4,
        background: T.aveAloes, opacity: 0.92,
      }}/>

      <div style={{position:'absolute', inset:'36px 48px 24px 48px',
                   display:'grid', gridTemplateColumns:'5fr 2fr', gap: 32, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 10}}>
          <div style={{display:'flex', alignItems:'center', gap: 14}}>
            <WordmarkAVE size={22} color={T.aveInk}/>
            <Filet w={24} color={T.aveAloes} opacity={0.85}/>
            <span style={{
              fontFamily: T.ffDisplay, fontStyle:'italic',
              fontVariationSettings:'"opsz" 96, "wght" 400',
              fontSize: 14, color: T.aveAloes, letterSpacing:'.005em',
            }}>
              Aloe Vera Excellence
            </span>
          </div>
          <div style={{
            fontFamily: T.ffBody, fontSize: 11, lineHeight: 1.5,
            color: T.ink2, fontWeight: 300,
            fontStyle: tagline.startsWith('[') ? 'italic' : 'normal',
          }}>
            {tagline}
          </div>
          <TaglineL4 color={T.ink2} size={10}>
            aloeveraexcellence.com
          </TaglineL4>
        </div>

        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
          <LogoAVE size={84}/>
        </div>
      </div>
    </Frame>
  );
}


// ─────────────────────────────────────────────────────────────
// AveHeaderMobile — Variante mobile-first · 1080×320 (bonus DirCom)
//
// Format pages mobiles aloeveraexcellence.com. Hauteur réduite,
// composition empilée : wordmark + tagline + sceau aligné droite.
// ─────────────────────────────────────────────────────────────
function AveHeaderMobile({ scale = 0.55, tagline = '[Tagline AVE · à définir]' }) {
  return (
    <Frame w={1080} h={320} bg={T.aveCream} scale={scale}>
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 0, height: 5,
        background: T.aveAloes, opacity: 0.90,
      }}/>
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 5, height: 18,
        background: T.aveAloesClair, opacity: 0.35,
      }}/>

      <div style={{position:'absolute', inset:'56px 80px 64px 80px',
                   display:'grid', gridTemplateColumns:'6fr 2fr', gap: 48, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 16}}>
          <div style={{display:'flex', alignItems:'center', gap: 16}}>
            <WordmarkAVE size={32} color={T.aveInk}/>
            <Filet w={32} color={T.aveAloes} opacity={0.85}/>
            <span style={{
              fontFamily: T.ffDisplay, fontStyle:'italic',
              fontVariationSettings:'"opsz" 96, "wght" 400',
              fontSize: 18, color: T.aveAloes, letterSpacing:'.005em',
            }}>
              Aloe Vera Excellence
            </span>
          </div>
          <div style={{
            fontFamily: T.ffBody, fontSize: 14, lineHeight: 1.55,
            color: T.ink2, maxWidth:'52ch', fontWeight: 300,
            fontStyle: tagline.startsWith('[') ? 'italic' : 'normal',
          }}>
            {tagline}
          </div>
          <TaglineL4 color={T.ink2} size={11}>
            aloeveraexcellence.com
          </TaglineL4>
        </div>

        <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
          <LogoAVE size={120}/>
        </div>
      </div>
    </Frame>
  );
}


Object.assign(window, {
  EesGbp, SesGbp, AveHeader, AveHeaderEmail, AveHeaderMobile,
});
