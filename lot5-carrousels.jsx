// lot5-carrousels.jsx — Lot 5 production · 4 carrousels narratifs
//
// Format canonique : 1080×1350 (4:5 IG/LI portrait). 5-6 cards par
// carrousel selon le rythme narratif. Marges 128px. Pagination en
// points discrets bas-droite (pas de "1/5" magazine).
//
// Système :
// - Card 1 = cover citation pure (mot-cœur italique, signature pôle)
// - Cards 2-N = titre éditorial + body court (≤ 60 mots)
// - Card finale = invitation / signature, ouverte sans CTA
// - Wordmark pôle haut-gauche, pagination bas-droite
// - Aucun des 9 interdits cardinaux (anti-pattern 11bis)
//
// Exports window : 22 composants Carr* + helpers DotsCarr, FrameCarr

// ─────────────────────────────────────────────────────────────
// Helpers communs
// ─────────────────────────────────────────────────────────────

// FrameCarr — Frame 1080×1350 avec marges 128px standardisées
function FrameCarr({ bg, ink = T.ink, scale = 0.32, children }) {
  return (
    <Frame w={1080} h={1350} bg={bg} ink={ink} scale={scale}>
      <div style={{position:'absolute', inset:'128px 112px', display:'flex', flexDirection:'column'}}>
        {children}
      </div>
    </Frame>
  );
}

// DotsCarr — pagination en points pleins/creux, bas-droite
// Fonctionnelle, pas magazine : 5 petits points alignés horizontalement,
// le point actif est plein, les autres en cercle vide. Cohérence avec
// l'interdit 11bis #1 (pas de "01" en surimpression).
function DotsCarr({ index, total, color = T.ink2, opacityActive = 0.85, opacityIdle = 0.28 }) {
  return (
    <div style={{display:'inline-flex', alignItems:'center', gap: 9}}>
      {Array.from({length: total}, (_, i) => (
        <span key={i} style={{
          width: 7, height: 7, borderRadius:'50%',
          background: i === index ? color : 'transparent',
          border: i === index ? 'none' : `1px solid ${color}`,
          opacity: i === index ? opacityActive : opacityIdle,
          display:'inline-block',
        }}/>
      ))}
    </div>
  );
}

// HeaderCarr — wordmark en haut + tagline ponctuelle optionnelle
function HeaderCarr({ children, right }) {
  return (
    <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between',
                 paddingBottom: 6}}>
      <div>{children}</div>
      {right && <div>{right}</div>}
    </div>
  );
}

// FooterCarr — séparateur + pagination + signature/tagline
function FooterCarr({ index, total, left, dotsColor = T.ink2, borderColor, light = false }) {
  const lineColor = borderColor ?? (light ? 'rgba(250,247,242,.22)' : T.inkLine);
  return (
    <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between',
                 paddingTop: 32, borderTop:`1px solid ${lineColor}`}}>
      <div>{left}</div>
      <DotsCarr index={index} total={total} color={dotsColor}/>
    </div>
  );
}

// Bloc body simple — paragraphe en Inter Tight 300, mesure courte
function BodyCarr({ children, color, size = 26, maxw = '24ch' }) {
  return (
    <div style={{
      fontFamily: T.ffBody, fontSize: size, lineHeight: 1.55,
      color: color ?? T.ink2, maxWidth: maxw, fontWeight: 300,
      display:'flex', flexDirection:'column', gap: 16,
    }}>{children}</div>
  );
}

// ═════════════════════════════════════════════════════════════
// CARROUSEL A · EES — « Reposer le système nerveux »
// 5 cards · crème lin + or signature + rose poudré en touches
// ═════════════════════════════════════════════════════════════

// A1 — cover citation
function CarrA1({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.eesCream} scale={scale}>
      <HeaderCarr>
        <WordmarkEES size={40} color={T.eesGold}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', alignItems:'center'}}>
        <div style={{display:'flex', flexDirection:'column', gap: 48}}>
          <TitreL4
            before={<>Le corps sait<br/>avant </>}
            accent="nous"
            after="."
            accentColor={T.eesGold}
            size={108}
            maxw="10ch"
          />
          <Filet w={72} color={T.eesGold} opacity={0.85}/>
        </div>
      </div>

      <FooterCarr index={0} total={5} dotsColor={T.eesGold}
        left={
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <SignatureL4 name="Céline" size={30}/>
            <TaglineL4 size={12}>Sanctuaire du corps</TaglineL4>
          </div>
        }/>
    </FrameCarr>
  );
}

// A2 — quand le système est en alerte
function CarrA2({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.eesCream} scale={scale}>
      <HeaderCarr>
        <WordmarkEES size={28} color={T.eesGold}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 40}}>
        <TitreL4
          before={<>Quand le système est en </>}
          accent="alerte"
          after=","
          accentColor={T.eesGold}
          size={64}
          maxw="16ch"
        />
        <BodyCarr>
          <p>Le souffle se raccourcit. Les épaules montent. La nuit
          se fragmente. La digestion se ferme. Le corps ne ment pas.</p>
          <p>Il signale, longtemps, avant que la pensée ne le nomme.</p>
        </BodyCarr>
      </div>

      <FooterCarr index={1} total={5} dotsColor={T.eesGold}
        left={<TaglineL4 size={12}>Reconnaître les signaux</TaglineL4>}/>
    </FrameCarr>
  );
}

// A3 — ce qu'on dépose dans la pratique
function CarrA3({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.eesCream} scale={scale}>
      <HeaderCarr>
        <WordmarkEES size={28} color={T.eesGold}/>
        <span style={{width: 10, height: 10, background: T.eesRose, borderRadius:'50%'}}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 40}}>
        <TitreL4
          before={<>Une heure pour<br/></>}
          accent="déposer"
          after="."
          accentColor={T.eesGold}
          size={84}
          maxw="11ch"
        />
        <BodyCarr>
          <p>Vous arrivez. Vous vous allongez. Je pose les mains sans
          les imposer. Le corps reconnaît qu'il peut se relâcher.</p>
          <p>Rien n'est promis. Rien n'est forcé. Ce qui s'ouvre s'ouvre.</p>
        </BodyCarr>
      </div>

      <FooterCarr index={2} total={5} dotsColor={T.eesGold}
        left={<TaglineL4 size={12}>La pratique</TaglineL4>}/>
    </FrameCarr>
  );
}

// A4 — ce qui revient
function CarrA4({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.eesRoseSoft} scale={scale}>
      <HeaderCarr>
        <WordmarkEES size={28} color={T.eesGold}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 40}}>
        <TitreL4
          before={<>Ce qui revient<br/>quand on </>}
          accent="repose"
          after="."
          accentColor={T.eesGold}
          size={72}
          maxw="14ch"
        />
        <BodyCarr color={T.ink}>
          <p>La fluidité du souffle. La chaleur des extrémités. La
          capacité à dormir d'un trait. L'écoute fine de la faim,
          de la soif, de l'envie.</p>
          <p>Le rythme propre, simplement.</p>
        </BodyCarr>
      </div>

      <FooterCarr index={3} total={5} dotsColor={T.eesGold}
        borderColor="rgba(15,18,24,.16)"
        left={<TaglineL4 size={12} color={T.ink}>Ce qui se restaure</TaglineL4>}/>
    </FrameCarr>
  );
}

// A5 — invitation finale
function CarrA5({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.eesCream} scale={scale}>
      <HeaderCarr>
        <WordmarkEES size={28} color={T.eesGold}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 48}}>
        <TitreL4
          before={<>Si le corps<br/></>}
          accent="reconnaît"
          after=","
          accentColor={T.eesGold}
          size={92}
          maxw="11ch"
        />
        <BodyCarr size={28}>
          <p>il sait déjà s'il veut venir. Vous n'avez rien à décider.</p>
          <p>Sainte-Hélène en Médoc. Une heure. Sur rendez-vous.</p>
        </BodyCarr>
        <Filet w={88} color={T.eesGold} opacity={0.85}/>
      </div>

      <FooterCarr index={4} total={5} dotsColor={T.eesGold}
        left={
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <SignatureL4 name="Céline" size={30}/>
            <TaglineL4 size={12}>essencelensoi.fr</TaglineL4>
          </div>
        }/>
    </FrameCarr>
  );
}

// ═════════════════════════════════════════════════════════════
// CARROUSEL B · SÉSÂMES — « Pas par manque de sérieux »
// 6 cards · crème lumière + or canalisé + bleu lunaire
// ═════════════════════════════════════════════════════════════

// B1 — cover citation pivot post Éric
function CarrB1({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.sesLight} scale={scale}>
      <HeaderCarr>
        <WordmarkSES size={22} color={T.sesInk}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', alignItems:'center'}}>
        <div style={{display:'flex', flexDirection:'column', gap: 56}}>
          <h1 style={{
            fontFamily: T.ffDisplay, fontWeight: 400,
            fontVariationSettings:'"opsz" 96, "wght" 400',
            fontSize: 86, lineHeight: 1.14, color: T.sesInk,
            maxWidth: '13ch', textWrap:'balance', margin: 0,
          }}>
            Pas par manque de sérieux.<br/>
            Par manque de <em style={{
              fontFamily: T.ffItalic, fontStyle:'italic',
              color: T.sesGold, letterSpacing:'.005em',
            }}>système</em>.
          </h1>
          <Filet w={88} color={T.sesGold} opacity={0.9}/>
        </div>
      </div>

      <FooterCarr index={0} total={6} dotsColor={T.sesGold}
        left={
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <SignatureL4 name="Sébastien" size={30}/>
            <TaglineL4 size={12}>Clarification intérieure</TaglineL4>
          </div>
        }/>
    </FrameCarr>
  );
}

// B2 — reconnaître le seuil
function CarrB2({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.sesLight} scale={scale}>
      {/* Filet violet vertical signature */}
      <div style={{position:'absolute', left: 64, top: 200, bottom: 200, width: 2,
                   background: T.sesViolet, opacity: 0.85}}/>

      <HeaderCarr>
        <WordmarkSES size={22} color={T.sesInk} withGlyph={false}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 40}}>
        <TitreL4
          before={<>Un </>}
          accent="seuil"
          after={<>, ce n'est pas une étape de plus.</>}
          accentColor={T.sesGold}
          ink={T.sesInk}
          size={64}
          maxw="16ch"
        />
        <BodyCarr>
          <p>C'est un changement de niveau. Avant, on tournait dans la même
          pièce. Après, on est sorti — et la pièce ne ressemble plus à ce
          qu'on croyait.</p>
          <p>Reconnaître un seuil avant de l'avoir franchi, c'est déjà
          commencer à le passer.</p>
        </BodyCarr>
      </div>

      <FooterCarr index={1} total={6} dotsColor={T.sesGold}
        left={<TaglineL4 size={12}>Reconnaître</TaglineL4>}/>
    </FrameCarr>
  );
}

// B3 — cartographier ce qui se répète
function CarrB3({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.sesLight} scale={scale}>
      <HeaderCarr>
        <WordmarkSES size={22} color={T.sesInk} withGlyph={false}/>
        <TriangleSes size={32} ink={T.sesInk} gold={T.sesGold} sky={T.sesSky}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 40}}>
        <TitreL4
          before={<>Cartographier<br/>ce qui se </>}
          accent="répète"
          after="."
          accentColor={T.sesGold}
          ink={T.sesInk}
          size={80}
          maxw="11ch"
        />
        <BodyCarr>
          <p>Le même blocage. La même fatigue. La même phrase qui revient
          dans la bouche d'un proche.</p>
          <p>Tant que la carte reste interne, le territoire ressemble au
          chaos. Mise au dehors, elle devient lisible.</p>
        </BodyCarr>
      </div>

      <FooterCarr index={2} total={6} dotsColor={T.sesGold}
        left={<TaglineL4 size={12}>Nommer</TaglineL4>}/>
    </FrameCarr>
  );
}

// B4 — tenir l'espace
function CarrB4({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.sesLight} scale={scale}>
      <HeaderCarr>
        <WordmarkSES size={22} color={T.sesInk} withGlyph={false}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 40}}>
        <TitreL4
          before={<>Tenir l'espace<br/>pendant qu'on </>}
          accent="traverse"
          after="."
          accentColor={T.sesGold}
          ink={T.sesInk}
          size={72}
          maxw="14ch"
        />
        <BodyCarr>
          <p>Pas conseiller. Pas analyser. Pas guérir.</p>
          <p>Être présent au moment où la personne franchit son seuil,
          et ne pas céder à la tentation de tirer plus vite.</p>
        </BodyCarr>
      </div>

      <FooterCarr index={3} total={6} dotsColor={T.sesGold}
        left={<TaglineL4 size={12}>Accompagner</TaglineL4>}/>
    </FrameCarr>
  );
}

// B5 — l'attention précède l'action
function CarrB5({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.sesLight} scale={scale}>
      <HeaderCarr>
        <WordmarkSES size={22} color={T.sesInk} withGlyph={false}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', alignItems:'center'}}>
        <div style={{display:'flex', flexDirection:'column', gap: 48}}>
          <TitreL4
            before={<>L'attention<br/></>}
            accent="précède"
            after={<><br/>l'action.</>}
            accentColor={T.sesGold}
            ink={T.sesInk}
            size={108}
            maxw="11ch"
          />
          <Filet w={72} color={T.sesGold} opacity={0.85}/>
          <BodyCarr size={22} maxw="32ch">
            <p>Vingt-six ans de management m'ont appris une chose :
            ce qu'on regarde change. Le reste, c'est de la mise en œuvre.</p>
          </BodyCarr>
        </div>
      </div>

      <FooterCarr index={4} total={6} dotsColor={T.sesGold}
        left={<TaglineL4 size={12}>La règle qui tient</TaglineL4>}/>
    </FrameCarr>
  );
}

// B6 — signature ouverte
function CarrB6({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.sesLight} scale={scale}>
      <HeaderCarr>
        <WordmarkSES size={22} color={T.sesInk} withGlyph={false}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 48}}>
        <TitreL4
          before={<>Si vous<br/></>}
          accent="reconnaissez"
          after=","
          accentColor={T.sesGold}
          ink={T.sesInk}
          size={92}
          maxw="11ch"
        />
        <BodyCarr size={26}>
          <p>vous saurez si c'est le moment d'en parler. Pas avant.</p>
          <p>Un échange préalable, sans engagement, pour voir si nous
          sommes alignés sur le seuil à traverser.</p>
        </BodyCarr>
        <Filet w={88} color={T.sesGold} opacity={0.85}/>
      </div>

      <FooterCarr index={5} total={6} dotsColor={T.sesGold}
        left={
          <div style={{display:'flex', flexDirection:'column', gap: 6}}>
            <SignatureL4 name="Sébastien" size={30}/>
            <TaglineL4 size={12}>sesames.fr</TaglineL4>
          </div>
        }/>
    </FrameCarr>
  );
}

// ═════════════════════════════════════════════════════════════
// CARROUSEL C · WTF — « Une maison. Trois chemins. »
// 5 cards · présente l'écosystème (maison-mère + 3 entités + signature duo)
// ═════════════════════════════════════════════════════════════

// C1 — cover manifeste
function CarrC1({ scale = 0.32 }) {
  const bg = '#1F2438';
  return (
    <FrameCarr bg={bg} ink={T.wtfLight} scale={scale}>
      <HeaderCarr>
        <WordmarkWTF size={24} color="rgba(250,247,242,.85)" weight={300}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', alignItems:'center'}}>
        <div style={{display:'flex', flexDirection:'column', gap: 56}}>
          <TitreL4
            before={<>Une maison.<br/>Trois chemins.<br/>Un </>}
            accent="horizon"
            after="."
            accentColor={T.wtfGold}
            ink={T.wtfLight}
            size={108}
            maxw="11ch"
          />
          <Filet w={96} color={T.wtfGold} opacity={0.9}/>
        </div>
      </div>

      <FooterCarr index={0} total={5} dotsColor={T.wtfGold} light={true}
        left={<TaglineL4 color="rgba(250,247,242,.78)" size={12}>Way To Freedom</TaglineL4>}/>
    </FrameCarr>
  );
}

// C2 — SÉSÂMES présentation
function CarrC2({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.sesLight} scale={scale}>
      <HeaderCarr>
        <WordmarkWTF size={18} color={T.ink2} weight={300}/>
        <TaglineL4 size={10} color={T.inkMute}>chemin 1 · 3</TaglineL4>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 36}}>
        <div style={{display:'flex', alignItems:'center', gap: 24}}>
          <TriangleSes size={56} ink={T.sesInk} gold={T.sesGold} sky={T.sesSky}/>
          <WordmarkSES size={26} color={T.sesInk} withGlyph={false}/>
        </div>
        <TitreL4
          before={<>Reconnaître ce qui se </>}
          accent="répète"
          after="."
          accentColor={T.sesGold}
          ink={T.sesInk}
          size={56}
          maxw="18ch"
        />
        <BodyCarr>
          <p>La clarification intérieure portée par Sébastien.
          Pour les femmes et hommes engagés qui sentent un seuil sans
          encore pouvoir le nommer.</p>
        </BodyCarr>
        <div style={{display:'flex', alignItems:'center', gap: 18}}>
          <Filet w={40} color={T.sesGold} opacity={0.85}/>
          <TaglineL4 size={11}>L'attention précède l'action</TaglineL4>
        </div>
      </div>

      <FooterCarr index={1} total={5} dotsColor={T.sesGold}
        left={<TaglineL4 size={12}>sesames.fr</TaglineL4>}/>
    </FrameCarr>
  );
}

// C3 — EES présentation
function CarrC3({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.eesCream} scale={scale}>
      <HeaderCarr>
        <WordmarkWTF size={18} color={T.ink2} weight={300}/>
        <TaglineL4 size={10} color={T.inkMute}>chemin 2 · 3</TaglineL4>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 36}}>
        <WordmarkEES size={42} color={T.eesGold}/>
        <TitreL4
          before={<>Reposer ce qui demande à </>}
          accent="l'être"
          after="."
          accentColor={T.eesGold}
          size={54}
          maxw="18ch"
        />
        <BodyCarr>
          <p>Le sanctuaire du corps porté par Céline. Pratique
          énergétique et corporelle. Une heure pour reposer le système
          nerveux et retrouver la fluidité du souffle.</p>
        </BodyCarr>
        <div style={{display:'flex', alignItems:'center', gap: 18}}>
          <span style={{width: 10, height: 10, background: T.eesRose, borderRadius:'50%'}}/>
          <TaglineL4 size={11}>Sainte-Hélène en Médoc</TaglineL4>
        </div>
      </div>

      <FooterCarr index={2} total={5} dotsColor={T.eesGold}
        left={<TaglineL4 size={12}>essencelensoi.fr</TaglineL4>}/>
    </FrameCarr>
  );
}

// C4 — Voie présentation
function CarrC4({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.voieCream} ink={T.voieNight} scale={scale}>
      <HeaderCarr>
        <WordmarkWTF size={18} color={T.ink2} weight={300}/>
        <TaglineL4 size={10} color={T.inkMute}>chemin 3 · 3</TaglineL4>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 36}}>
        <div style={{display:'flex', alignItems:'center', gap: 20}}>
          <WordmarkVoie size={32} color={T.voieCopper}/>
        </div>
        <TitreL4
          before={<>Le mouvement<br/>avant la </>}
          accent="méthode"
          after="."
          accentColor={T.voieCopper}
          ink={T.voieNight}
          size={72}
          maxw="12ch"
        />
        <BodyCarr color={T.ink2}>
          <p>La voie d'autonomie économique pour les entrepreneurs
          indépendants qui choisissent l'autonomie patiente sur la
          promesse pressée.</p>
        </BodyCarr>
        <div style={{display:'flex', gap: 0, alignItems:'center'}}>
          <div style={{width: 16, height: 16, background: T.voieCopper}}/>
          <div style={{width: 16, height: 16, background: T.voieNight}}/>
          <div style={{width: 18}}/>
          <TaglineL4 size={11} color={T.voieNight}>Au rythme propre</TaglineL4>
        </div>
      </div>

      <FooterCarr index={3} total={5} dotsColor={T.voieCopper}
        left={<TaglineL4 size={11} color={T.voieNight}>waytofreedom.fr / revenu-complementaire-independant</TaglineL4>}/>
    </FrameCarr>
  );
}

// C5 — signature duo
function CarrC5({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.wtfLight} scale={scale}>
      <HeaderCarr>
        <WordmarkWTF size={22} color={T.wtfInk} weight={300}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 48}}>
        <LogoWTF size={140} tone="dark"/>
        <TitreL4
          before={<>Une maison portée par<br/></>}
          accent="Céline & Sébastien"
          after="."
          accentColor={T.wtfGold}
          size={56}
          maxw="20ch"
        />
        <BodyCarr size={22} maxw="40ch">
          <p>Trois chemins distincts qui se rejoignent dans une même
          intention : tenir l'espace au lieu de pousser. Reconnaître
          le seuil au lieu de promettre la traversée.</p>
        </BodyCarr>
        <Filet w={96} color={T.wtfGold} opacity={0.85}/>
      </div>

      <FooterCarr index={4} total={5} dotsColor={T.wtfGold}
        left={
          <div style={{display:'flex', flexDirection:'column', gap: 4}}>
            <TaglineL4 size={12}>waytofreedom.fr</TaglineL4>
          </div>
        }/>
    </FrameCarr>
  );
}

// ═════════════════════════════════════════════════════════════
// CARROUSEL D · Voie — « Le mouvement avant la méthode »
// 5 cards · cuivre + bleu nuit + crème lin
// ═════════════════════════════════════════════════════════════

// D1 — cover citation
function CarrD1({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.voieCream} ink={T.voieNight} scale={scale}>
      <HeaderCarr>
        <WordmarkVoie size={32} color={T.voieCopper}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', alignItems:'center'}}>
        <div style={{display:'flex', flexDirection:'column', gap: 56}}>
          <TitreL4
            before={<>Le mouvement<br/>avant la<br/></>}
            accent="méthode"
            after="."
            accentColor={T.voieCopper}
            ink={T.voieNight}
            size={108}
            maxw="11ch"
          />
          <div style={{display:'flex', alignItems:'center', gap: 20}}>
            <div style={{width: 22, height: 22, background: T.voieCopper}}/>
            <div style={{width: 22, height: 22, background: T.voieNight}}/>
          </div>
        </div>
      </div>

      <FooterCarr index={0} total={5} dotsColor={T.voieCopper}
        left={<TaglineL4 size={12} color={T.voieNight}>Voie d'autonomie économique</TaglineL4>}/>
    </FrameCarr>
  );
}

// D2 — la promesse pressée vs l'autonomie patiente
function CarrD2({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.voieCream} ink={T.voieNight} scale={scale}>
      <HeaderCarr>
        <WordmarkVoie size={22} color={T.voieCopper}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 36}}>
        <TitreL4
          before={<>La promesse pressée<br/>vous </>}
          accent="ment"
          after="."
          accentColor={T.voieCopper}
          ink={T.voieNight}
          size={68}
          maxw="14ch"
        />
        <BodyCarr color={T.ink2}>
          <p>« Six mois pour quitter votre job. » « Un système clé en
          main. » « Rejoignez les milliers qui... »</p>
          <p>Ce qui se construit en six mois se défait en six mois.
          L'autonomie réelle prend le temps qu'elle prend.</p>
        </BodyCarr>
        <div style={{display:'flex', alignItems:'center', gap: 18}}>
          <Filet w={48} color={T.voieCopper} opacity={0.85}/>
          <TaglineL4 size={11} color={T.voieNight}>Le réel d'abord</TaglineL4>
        </div>
      </div>

      <FooterCarr index={1} total={5} dotsColor={T.voieCopper}
        left={<TaglineL4 size={12} color={T.voieNight}>Sortir de l'urgence</TaglineL4>}/>
    </FrameCarr>
  );
}

// D3 — au rythme propre
function CarrD3({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.voieCream} ink={T.voieNight} scale={scale}>
      <HeaderCarr>
        <WordmarkVoie size={22} color={T.voieCopper}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 36}}>
        <TitreL4
          before={<>Au rythme<br/></>}
          accent="propre"
          after="."
          accentColor={T.voieCopper}
          ink={T.voieNight}
          size={108}
          maxw="11ch"
        />
        <BodyCarr color={T.ink2}>
          <p>Le vôtre. Pas celui d'une cohorte, pas celui d'un calendrier
          de lancement, pas celui d'un coach qui pousse.</p>
          <p>Vous savez ce qui tient pour vous. Le rôle de la voie,
          c'est de ne pas vous en éloigner.</p>
        </BodyCarr>
      </div>

      <FooterCarr index={2} total={5} dotsColor={T.voieCopper}
        left={<TaglineL4 size={12} color={T.voieNight}>Respecter le tempo</TaglineL4>}/>
    </FrameCarr>
  );
}

// D4 — construire un revenu qui tient
function CarrD4({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.voieCream} ink={T.voieNight} scale={scale}>
      <HeaderCarr>
        <WordmarkVoie size={22} color={T.voieCopper}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 36}}>
        <TitreL4
          before={<>Construire ce qui<br/></>}
          accent="tient"
          after="."
          accentColor={T.voieCopper}
          ink={T.voieNight}
          size={84}
          maxw="13ch"
        />
        <BodyCarr color={T.ink2}>
          <p>Un revenu complémentaire indépendant. Une expertise
          patiemment installée. Une posture qui ne se vend pas.</p>
          <p>Et la liberté discrète de ne plus dépendre d'un employeur
          unique pour exister économiquement.</p>
        </BodyCarr>
      </div>

      <FooterCarr index={3} total={5} dotsColor={T.voieCopper}
        left={<TaglineL4 size={12} color={T.voieNight}>L'autonomie patiente</TaglineL4>}/>
    </FrameCarr>
  );
}

// D5 — signature ouverte
function CarrD5({ scale = 0.32 }) {
  return (
    <FrameCarr bg={T.voieCream} ink={T.voieNight} scale={scale}>
      <HeaderCarr>
        <WordmarkVoie size={22} color={T.voieCopper}/>
      </HeaderCarr>

      <div style={{flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', gap: 48}}>
        <TitreL4
          before={<>Si l'autonomie<br/>patiente vous </>}
          accent="parle"
          after=","
          accentColor={T.voieCopper}
          ink={T.voieNight}
          size={72}
          maxw="14ch"
        />
        <BodyCarr size={26} color={T.ink2}>
          <p>la page d'entrée vous attend, sans formulaire.</p>
          <p>Lisez, prenez le temps. Si quelque chose s'aligne,
          vous saurez quoi faire ensuite.</p>
        </BodyCarr>
        <Filet w={88} color={T.voieCopper} opacity={0.85}/>
      </div>

      <FooterCarr index={4} total={5} dotsColor={T.voieCopper}
        left={<TaglineL4 size={11} color={T.voieNight}>waytofreedom.fr / revenu-complementaire-independant</TaglineL4>}/>
    </FrameCarr>
  );
}

Object.assign(window, {
  FrameCarr, DotsCarr, HeaderCarr, FooterCarr, BodyCarr,
  CarrA1, CarrA2, CarrA3, CarrA4, CarrA5,
  CarrB1, CarrB2, CarrB3, CarrB4, CarrB5, CarrB6,
  CarrC1, CarrC2, CarrC3, CarrC4, CarrC5,
  CarrD1, CarrD2, CarrD3, CarrD4, CarrD5,
});
