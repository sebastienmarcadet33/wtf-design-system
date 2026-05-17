// lot4-app.jsx — Lot 4 production · assemblage canvas
//
// 34 composants livrés sur tokens v3, exposés en DesignCanvas
// pan/zoom. Sections A → G. Tailles d'artboard calculées sur
// le scale appliqué à chaque Frame (taille canonique × scale).

// Wrapper d'artboard : enveloppe ArtbgL4 + pied méta léger.
function Card({ bg = T.wtfLight, ink = T.ink, label, sub, light = false, children }) {
  return (
    <ArtbgL4 bg={bg} ink={ink}>
      <div style={{flex: 1, position:'relative', overflow:'hidden', display:'flex', alignItems:'flex-start', justifyContent:'flex-start', padding: 18}}>
        {children}
      </div>
      <MetaL4 label={label} sub={sub} light={light}/>
    </ArtbgL4>
  );
}

function Lot4App() {
  return (
    <DesignCanvas>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <DCSection id="intro-lot4" title="Lot 4 · production massive · 34 composants sur tokens v3"
                 subtitle="DirCom validé · logos WTF & AVE en placeholders typographiques · swap après tranchage itération 3">
        <DCArtboard id="lot4-intro" label="Périmètre & inventaire" width={620} height={520}>
          <NoteCard
            eyebrow="Lot 4 · 14 mai 2026"
            title="Le catalogue de production. 34 composants. Tokens v3 verrouillés."
            accent={T.wtfGold}
            body={
              <>
                <p><strong>Section A · 8 posts citation pure</strong> — typographie seule, mot-cœur italique, signature prénom. EES + SES + WTF + Voie en carré, portrait, et registre pivot.</p>
                <p><strong>Section B · 7 posts photo+texte</strong> — registre 1 et 2 doctrine v3, photo authentique prime, texte habille. Vignettes en aplat provisoire avec instruction de cadrage.</p>
                <p><strong>Section C · 4 profils personnels</strong> — Sébastien + Céline en LI carré et IG portrait, liseré perso en em (chap XVI), italique du mot-cœur, pastille tag couleur perso.</p>
                <p><strong>Section D · 4 stories 1080×1920</strong> — un par pôle majeur, tagline canonique, mot-cœur sur 2 lignes max.</p>
                <p><strong>Section E · 5 signatures email + headers newsletter</strong> — 600×200 pour signatures, 600×260 pour bandeaux d’en-tête.</p>
                <p><strong>Section F · 4 hero web</strong> — 1440×720 pour l’accueil au-dessus du fil, un par pôle.</p>
                <p><strong>Section G · 2 notes doctrine</strong> — garde-fous transversaux + question retour DirCom sur les logos.</p>
              </>
            }
          />
        </DCArtboard>
      </DCSection>

      {/* ── SECTION A · CITATIONS PURES ───────────────────────── */}
      <DCSection id="lot4-a" title="A · Posts citation pure"
                 subtitle="Typographie seule · mot-cœur italique · 8 composants">

        <DCArtboard id="A1" label="A1 · EES citation IG carré 1080×1080" width={485} height={500}>
          <Card label="EES · citation IG 1:1" sub="1080×1080"><CitaA1 scale={0.42}/></Card>
        </DCArtboard>

        <DCArtboard id="A2" label="A2 · EES citation IG portrait 4:5" width={400} height={520}>
          <Card label="EES · citation IG 4:5" sub="1080×1350"><CitaA2 scale={0.35}/></Card>
        </DCArtboard>

        <DCArtboard id="A3" label="A3 · SÉSÂMES citation LI carré 1200×1200" width={520} height={540}>
          <Card label="SÉSÂMES · citation LI 1:1" sub="1200×1200"><CitaA3 scale={0.4}/></Card>
        </DCArtboard>

        <DCArtboard id="A4" label="A4 · SÉSÂMES citation IG portrait" width={400} height={520}>
          <Card label="SÉSÂMES · citation IG 4:5" sub="1080×1350"><CitaA4 scale={0.35}/></Card>
        </DCArtboard>

        <DCArtboard id="A5" label="A5 · WTF citation LI carré" width={520} height={540}>
          <Card label="WTF · citation LI 1:1" sub="1200×1200"><CitaA5 scale={0.4}/></Card>
        </DCArtboard>

        <DCArtboard id="A6" label="A6 · WTF manifeste fond bleu nuit" width={400} height={520}>
          <Card bg="#1F2438" ink={T.wtfLight} light label="WTF · pivot signature" sub="1080×1350"><CitaA6 scale={0.35}/></Card>
        </DCArtboard>

        <DCArtboard id="A7" label="A7 · Voie citation IG carré" width={485} height={500}>
          <Card label="Voie · citation IG 1:1" sub="1080×1080"><CitaA7 scale={0.42}/></Card>
        </DCArtboard>

        <DCArtboard id="A8" label="A8 · EES manifeste rose poudré profond" width={400} height={520}>
          <Card bg={T.eesRoseDeep} ink={T.eesCream} light label="EES · pivot signature" sub="1080×1350"><CitaA8 scale={0.35}/></Card>
        </DCArtboard>
      </DCSection>

      {/* ── SECTION B · PHOTO + TEXTE ─────────────────────────── */}
      <DCSection id="lot4-b" title="B · Posts photo + texte"
                 subtitle="Photo authentique prime · texte habille · 7 composants">

        <DCArtboard id="B1" label="B1 · EES photo dominante IG carré" width={485} height={500}>
          <Card label="EES · photo IG 1:1" sub="1080×1080"><PhotoB1 scale={0.42}/></Card>
        </DCArtboard>

        <DCArtboard id="B2" label="B2 · EES photo + texte IG portrait" width={400} height={520}>
          <Card label="EES · photo IG 4:5" sub="1080×1350"><PhotoB2 scale={0.35}/></Card>
        </DCArtboard>

        <DCArtboard id="B3" label="B3 · SÉSÂMES photo + texte LI carré" width={520} height={540}>
          <Card label="SÉSÂMES · photo LI 1:1" sub="1200×1200"><PhotoB3 scale={0.4}/></Card>
        </DCArtboard>

        <DCArtboard id="B4" label="B4 · SÉSÂMES photo + texte IG portrait" width={400} height={520}>
          <Card label="SÉSÂMES · photo IG 4:5" sub="1080×1350"><PhotoB4 scale={0.35}/></Card>
        </DCArtboard>

        <DCArtboard id="B5" label="B5 · WTF banner LinkedIn 1584×396" width={600} height={200}>
          <Card label="WTF · banner LI" sub="1584×396"><PhotoB5 scale={0.36}/></Card>
        </DCArtboard>

        <DCArtboard id="B6" label="B6 · Voie photo + texte IG carré" width={485} height={500}>
          <Card label="Voie · photo IG 1:1" sub="1080×1080"><PhotoB6 scale={0.42}/></Card>
        </DCArtboard>

        <DCArtboard id="B7" label="B7 · Voie photo dominante IG portrait" width={400} height={520}>
          <Card label="Voie · photo IG 4:5" sub="1080×1350"><PhotoB7 scale={0.35}/></Card>
        </DCArtboard>
      </DCSection>

      {/* ── SECTION C · PROFILS PERSONNELS ────────────────────── */}
      <DCSection id="lot4-c" title="C · Profils personnels Sébastien & Céline"
                 subtitle="Liserés en em · italique mot-cœur · pastilles tag couleur perso">

        <DCArtboard id="C1" label="C1 · Sébastien LI carré" width={520} height={540}>
          <Card label="Sébastien · profil LI" sub="1200×1200"><ProfilC1 scale={0.4}/></Card>
        </DCArtboard>

        <DCArtboard id="C2" label="C2 · Sébastien IG portrait chronique" width={400} height={520}>
          <Card label="Sébastien · chronique IG 4:5" sub="1080×1350"><ProfilC2 scale={0.35}/></Card>
        </DCArtboard>

        <DCArtboard id="C3" label="C3 · Céline LI carré" width={520} height={540}>
          <Card label="Céline · profil LI" sub="1200×1200"><ProfilC3 scale={0.4}/></Card>
        </DCArtboard>

        <DCArtboard id="C4" label="C4 · Céline IG portrait chronique" width={400} height={520}>
          <Card label="Céline · chronique IG 4:5" sub="1080×1350"><ProfilC4 scale={0.35}/></Card>
        </DCArtboard>
      </DCSection>

      {/* ── SECTION D · STORIES ───────────────────────────────── */}
      <DCSection id="lot4-d" title="D · Stories 1080×1920"
                 subtitle="Format vertical Instagram · une par pôle majeur">

        <DCArtboard id="D1" label="D1 · EES story" width={330} height={580}>
          <Card label="EES · story 9:16" sub="1080×1920"><StoryD1 scale={0.28}/></Card>
        </DCArtboard>

        <DCArtboard id="D2" label="D2 · SÉSÂMES story" width={330} height={580}>
          <Card label="SÉSÂMES · story 9:16" sub="1080×1920"><StoryD2 scale={0.28}/></Card>
        </DCArtboard>

        <DCArtboard id="D3" label="D3 · WTF manifeste story fond bleu nuit" width={330} height={580}>
          <Card bg="#1F2438" ink={T.wtfLight} light label="WTF · manifeste 9:16" sub="1080×1920"><StoryD3 scale={0.28}/></Card>
        </DCArtboard>

        <DCArtboard id="D4" label="D4 · Voie story" width={330} height={580}>
          <Card label="Voie · story 9:16" sub="1080×1920"><StoryD4 scale={0.28}/></Card>
        </DCArtboard>
      </DCSection>

      {/* ── SECTION E · SYSTÈME EMAIL ─────────────────────────── */}
      <DCSection id="lot4-e" title="E · Signatures email & headers newsletter"
                 subtitle="600×200 signatures · 600×260 bandeaux d’en-tête">

        <DCArtboard id="E1" label="E1 · Signature email Sébastien" width={460} height={200}>
          <Card label="Sébastien · signature email" sub="600×200"><SysE1 scale={0.7}/></Card>
        </DCArtboard>

        <DCArtboard id="E2" label="E2 · Signature email Céline" width={460} height={200}>
          <Card label="Céline · signature email" sub="600×200"><SysE2 scale={0.7}/></Card>
        </DCArtboard>

        <DCArtboard id="E3" label="E3 · Signature email WTF institutionnelle" width={460} height={200}>
          <Card label="WTF · signature email" sub="600×200"><SysE3 scale={0.7}/></Card>
        </DCArtboard>

        <DCArtboard id="E4" label="E4 · Header newsletter EES" width={460} height={240}>
          <Card label="EES · header newsletter" sub="600×260"><SysE4 scale={0.7}/></Card>
        </DCArtboard>

        <DCArtboard id="E5" label="E5 · Header newsletter SÉSÂMES" width={460} height={240}>
          <Card label="SÉSÂMES · header newsletter" sub="600×260"><SysE5 scale={0.7}/></Card>
        </DCArtboard>
      </DCSection>

      {/* ── SECTION F · HERO WEB ──────────────────────────────── */}
      <DCSection id="lot4-f" title="F · Hero web 1440×720"
                 subtitle="Au-dessus du fil · un par pôle">

        <DCArtboard id="F1" label="F1 · WTF maison-mère" width={760} height={400}>
          <Card label="WTF · hero web" sub="1440×720"><HeroF1 scale={0.5}/></Card>
        </DCArtboard>

        <DCArtboard id="F2" label="F2 · SÉSÂMES clarification intérieure" width={760} height={400}>
          <Card label="SÉSÂMES · hero web" sub="1440×720"><HeroF2 scale={0.5}/></Card>
        </DCArtboard>

        <DCArtboard id="F3" label="F3 · EES sanctuaire du corps" width={760} height={400}>
          <Card label="EES · hero web" sub="1440×720"><HeroF3 scale={0.5}/></Card>
        </DCArtboard>

        <DCArtboard id="F4" label="F4 · Voie d’autonomie économique" width={760} height={400}>
          <Card label="Voie · hero web" sub="1440×720"><HeroF4 scale={0.5}/></Card>
        </DCArtboard>
      </DCSection>

      {/* ── SECTION G · DOCTRINE & QUESTIONS ──────────────────── */}
      <DCSection id="lot4-g" title="G · Doctrine & question retour DirCom"
                 subtitle="Garde-fous transversaux · trois options à trancher pour logos">

        <DCArtboard id="G1" label="G1 · Garde-fous Lot 4" width={620} height={520}>
          {DoctG1()}
        </DCArtboard>

        <DCArtboard id="G2" label="G2 · Question retour DirCom (logos)" width={620} height={520}>
          {DoctG2()}
        </DCArtboard>
      </DCSection>

    </DesignCanvas>
  );
}

window.Lot4App = Lot4App;
