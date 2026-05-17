// lot4-web-doctrine.jsx — Section F · hero web · Section G · doctrine
//
// Section F : 4 hero web 1440×720 (16:8) — un par pôle.
// Hauteur cible pour l'écran d'accueil au-dessus du fil.
// Photo placeholder à droite, texte éditorial à gauche.
//
// Section G : 2 notes doctrine — garde-fous transversaux + question
// retour DirCom. Rendus dans NoteCard primitive.
//
// Exports window : HeroF1..F4, DoctG1, DoctG2

// ─────────────────────────────────────────────────────────────
// F1 — Hero web WTF 1440×720
// Maison-mère · très minimal · papillon en marge droite
// ─────────────────────────────────────────────────────────────
function HeroF1({ scale = 0.5 }) {
  return (
    <Frame w={1440} h={720} bg={T.wtfLight} scale={scale}>
      <div style={{position:'absolute', inset:'80px 96px', display:'grid',
                   gridTemplateColumns:'7fr 3fr', gap: 64, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 32}}>
          <WordmarkWTF size={26} color={T.wtfInk} weight={300}/>
          <TitreL4
            before="Une maison-mère. Trois chemins. Un "
            accent="hub"
            after="."
            accentColor={T.wtfGold}
            size={68}
            maxw="22ch"
          />
          <div style={{
            fontFamily: T.ffBody, fontSize: 18, lineHeight: 1.6,
            color: T.ink2, maxWidth:'52ch', fontWeight: 300,
          }}>
            Way To Freedom rassemble trois chemins distincts, portés par
            Céline & Sébastien. Le sanctuaire du corps. La clarification
            intérieure. La voie d’autonomie économique.
          </div>
          <div style={{display:'flex', alignItems:'center', gap: 24, paddingTop: 8}}>
            <Filet w={48} color={T.wtfGold} opacity={0.85}/>
            <TaglineL4 size={12}>waytofreedom.fr</TaglineL4>
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap: 28}}>
          <PapillonGold size={180}/>
          <TaglineL4 color={T.inkMute} size={10}>
            logo en attente itération 3
          </TaglineL4>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// F2 — Hero web SÉSÂMES 1440×720
// Clarification intérieure · triangle + filet violet
// ─────────────────────────────────────────────────────────────
function HeroF2({ scale = 0.5 }) {
  return (
    <Frame w={1440} h={720} bg={T.sesLight} scale={scale}>
      {/* Filet violet vertical à gauche */}
      <div style={{position:'absolute', left: 64, top: 96, bottom: 96, width: 2,
                   background: T.sesViolet, opacity: 0.85}}/>

      <div style={{position:'absolute', inset:'80px 96px 80px 112px', display:'grid',
                   gridTemplateColumns:'6fr 4fr', gap: 64, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 28}}>
          <WordmarkSES size={22} color={T.sesInk}/>
          <TitreL4
            before="Cartographier ce qui se "
            accent="répète"
            after="."
            accentColor={T.sesGold}
            size={64}
            maxw="18ch"
          />
          <div style={{
            fontFamily: T.ffBody, fontSize: 17, lineHeight: 1.6,
            color: T.ink2, maxWidth:'48ch', fontWeight: 300,
          }}>
            Vingt-six ans de management. Reconnaître les passages,
            nommer les seuils, tenir l’espace pendant qu’on les traverse.
          </div>
          <div style={{display:'flex', alignItems:'center', gap: 24}}>
            <Filet w={40} color={T.sesGold} opacity={0.85}/>
            <TaglineL4 size={12}>L’attention précède l’action</TaglineL4>
          </div>
        </div>

        <PhotoSlot
          w={460} h={540}
          tint={`color-mix(in oklab, ${T.sesViolet} 14%, ${T.sesLight})`}
          instruction="Sébastien à la fenêtre · trois-quarts · carnet ouvert · lumière du matin"
        />
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// F3 — Hero web EES 1440×720
// Sanctuaire du corps · photo dominante à droite, rose poudré présent
// ─────────────────────────────────────────────────────────────
function HeroF3({ scale = 0.5 }) {
  return (
    <Frame w={1440} h={720} bg={T.eesCream} scale={scale}>
      {/* Filet rose poudré bord droit */}
      <div style={{position:'absolute', right: 0, top: 96, bottom: 96, width: 3,
                   background: T.eesRose, opacity: 0.85}}/>

      <div style={{position:'absolute', inset:'80px 112px 80px 96px', display:'grid',
                   gridTemplateColumns:'5fr 5fr', gap: 80, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 28}}>
          <WordmarkEES size={32} color={T.eesGold}/>
          <TitreL4
            before="Reposer ce qui demande à "
            accent="l’être"
            after="."
            accentColor={T.eesGold}
            size={62}
            maxw="18ch"
          />
          <div style={{
            fontFamily: T.ffBody, fontSize: 17, lineHeight: 1.6,
            color: T.ink2, maxWidth:'46ch', fontWeight: 300,
          }}>
            Pratique énergétique et corporelle. Une heure pour reposer
            le système nerveux, retrouver la fluidité du souffle,
            honorer ce qui se dépose.
          </div>
          <div style={{display:'flex', alignItems:'center', gap: 18, paddingTop: 8}}>
            <span style={{width: 10, height: 10, background: T.eesRose, borderRadius:'50%'}}/>
            <TaglineL4 size={12}>Sainte-Hélène en Médoc</TaglineL4>
          </div>
        </div>

        <PhotoSlot
          w={520} h={540}
          tint={T.eesRoseSoft}
          instruction="Cabinet de Céline · lin clair · main sur ventre · lumière matinale chaude"
        />
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// F4 — Hero web Voie 1440×720
// Voie d'autonomie · cuivre + bleu nuit + photo carnet
// ─────────────────────────────────────────────────────────────
function HeroF4({ scale = 0.5 }) {
  return (
    <Frame w={1440} h={720} bg={T.voieCream} scale={scale}>
      <div style={{position:'absolute', inset:'80px 96px', display:'grid',
                   gridTemplateColumns:'6fr 4fr', gap: 80, alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', gap: 28}}>
          <div style={{display:'flex', alignItems:'center', gap: 18}}>
            <WordmarkVoie size={28} color={T.voieCopper}/>
            <Filet w={28} color={T.voieCopper} opacity={0.85}/>
            <TaglineL4 color={T.voieNight} size={11}>
              sous-page Way To Freedom
            </TaglineL4>
          </div>
          <TitreL4
            before="Construire un revenu "
            accent="durable"
            after="."
            accentColor={T.voieCopper}
            ink={T.voieNight}
            size={62}
            maxw="18ch"
          />
          <div style={{
            fontFamily: T.ffBody, fontSize: 17, lineHeight: 1.6,
            color: T.ink2, maxWidth:'46ch', fontWeight: 300,
          }}>
            Pour les entrepreneurs indépendants qui choisissent l’autonomie
            patiente sur la promesse pressée. Sans urgence. Au rythme propre.
          </div>
          <div style={{display:'flex', alignItems:'center', gap: 18}}>
            <div style={{display:'flex', gap: 0}}>
              <div style={{width: 18, height: 18, background: T.voieCopper}}/>
              <div style={{width: 18, height: 18, background: T.voieNight}}/>
            </div>
            <TaglineL4 color={T.voieNight} size={11}>
              waytofreedom.fr / revenu-complementaire-independant
            </TaglineL4>
          </div>
        </div>

        <PhotoSlot
          w={420} h={520}
          tint={`color-mix(in oklab, ${T.voieCopper} 22%, ${T.voieCream})`}
          instruction="Atelier domestique · main qui écrit · tasse en céramique · soir d’hiver"
        />
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────
// G1 — Note doctrine · garde-fous transversaux Lot 4
// ─────────────────────────────────────────────────────────────
function DoctG1() {
  return (
    <NoteCard
      eyebrow="Garde-fous Lot 4 · transversal"
      title="Ce que le catalogue tient. Ce qu’il ne fait pas."
      accent={T.wtfGold}
      body={
        <>
          <p><strong>Tient.</strong> Tokens v3 (palettes pôle + or transversal alignement sujet),
            Fraunces 96 opsz pour titres, Inter Tight 300/400 pour body, Instrument Serif italique
            sur mot-cœur, marges 96–128 px, encre plancher <code>--ink-2</code> en raster 3×.</p>
          <p><strong>Tient.</strong> Aucun des 9 interdits cardinaux v2.2 : pas de numéro de série,
            pas d’eyebrow daté, pas de cartouche décoratif, pas de filets surlignants haut+bas,
            pas de glyphe inventé, pas de surligneur or paillette, pas de rose vif EES.</p>
          <p><strong>Tient.</strong> Conventions nominales par entité (wordmark + signature
            prénom seul + tagline canonique), liserés perso en em (chap XVI), pastilles de
            présence diffuse à la place des badges.</p>
          <p><strong>Ne fait pas.</strong> Aucune photographie réelle — toutes les vignettes
            sont des aplats provisoires avec instruction de cadrage courte. Le swap photos
            authentiques se fait au moment de la production (smartphone Céline / Sébastien).</p>
          <p><strong>Ne fait pas.</strong> Aucune illustration Folon ou Maier hand-drawn par
            mes soins. Placeholders typographiques propres (papillon géométrique simple,
            monogramme A en cartouche) en attendant les pistes itération 3 tranchées.</p>
        </>
      }
    />
  );
}

// ─────────────────────────────────────────────────────────────
// G2 — Question retour DirCom · logos WTF & AVE
// ─────────────────────────────────────────────────────────────
function DoctG2() {
  return (
    <NoteCard
      eyebrow="Question retour · Céline & Sébastien"
      title="Trois options pour les logos. Une à trancher."
      accent={T.eesGold}
      body={
        <>
          <p><strong>A.</strong> On respecte le CLAUDE.md racine : <em>WTF illustratif montagne
            conservé intégralement</em>. AVE redessiné par mes soins en typographie + monogramme
            sobre (3 pistes), pas d’illustration hand-drawn. Lot 4 production directe avec
            placeholders typographiques jusqu’au swap.</p>
          <p><strong>B.</strong> WTF est rouvert mais pas en reproduction Folon — en
            <em> traitement typographique original</em> (3 pistes : wordmark seul, wordmark +
            papillon géométrique, lettrage signature pivot). AVE idem typographique. Lot 4 inchangé.</p>
          <p><strong>C.</strong> On reconnaît que le niveau Hermès / Aesop demande un illustrateur
            externe (Bourthoumieux, Toutsy ou équivalent) pour le trait habité. Je produis le brief
            illustrateur formel transmissible. Le Lot 4 vit ses placeholders jusqu’à livraison externe.</p>
          <p>Mon recommandé technique : <strong>A.</strong> Le logo WTF illustratif montagne est validé
            doctrine 1<sup>er</sup> mai 2026 ; le rouvrir maintenant disperse l’itération. Pour AVE,
            le monogramme typographique en cartouche tient le seuil pour usages digitaux sans demander
            une commande externe.</p>
        </>
      }
    />
  );
}

Object.assign(window, { HeroF1, HeroF2, HeroF3, HeroF4, DoctG1, DoctG2 });
