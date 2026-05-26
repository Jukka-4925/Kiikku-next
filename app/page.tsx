'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

type Lang = 'en' | 'fi';

const content = {
  en: {
    topStrip: ['Opening hours: May 10–18 · June–August 9–21 · September 10–18 ·', 'Private events available outside regular café hours'],
    nav: {
      kiikku: 'Kiikku',
      menu: 'Menu',
      hupikioski: 'Hupikioski',
      events: 'Private events',
      location: 'Location',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Ainolanpuisto · Oulu',
      title: 'Kahvila Kiikku',
      subtitle: 'Atmospheric café inside a greenhouse',
      text: 'Coffee, pastries, grill favourites, wine and relaxed summer moments in the greenery of Ainolanpuisto.',
      primary: 'Welcome to Kiikku',
      secondary: 'Explore the menu',
      eventTitle: "What's happening at Kiikku",
      eventText: 'Ask about private events, celebrations, meetings or seasonal updates directly by email.',
      email: 'Send email',
    },
    welcome: {
      label: 'Welcome to Kahvila Kiikku',
      title: 'A place to stay for a moment — or a little longer',
      paragraphs: [
        "In the middle of Oulu's beautiful park scenery, surrounded by the greenery of Ainolanpuisto, Kahvila Kiikku is waiting — a place where you can pause for a short while or settle in for longer.",
        'We serve a daily changing selection of sweet pastries, savoury bites, specialty coffees and refreshing drinks. Our selection brings together seasonal flavours, local treats and coffee moments that taste a little better than usual.',
        'The Hupisaaret playground next to Kiikku makes a visit enjoyable for the whole family — while the little ones play, adults can sit down for a coffee and enjoy the park atmosphere.',
        'Come for coffee, brunch or an ice cream stop. For us, what matters most is good taste, a relaxed atmosphere and enjoying time together.',
      ],
    },
    highlights: {
      label: 'Good to know',
      title: 'Small details that make the visit easy',
      text: 'Kiikku is made for relaxed park days, families, friends and summer evenings.',
      dogsTitle: 'Dogs welcome',
      dogsText: 'Dogs are welcome at Kiikku, so you can stop by during a walk in Ainolanpuisto.',
      soupTitle: 'Soup on weekends',
      soupText: 'On weekends we serve soup alongside our café selection, depending on the season and availability.',
    },
    experiences: {
      label: 'Experiences',
      title: 'Come for coffee, stay for the evening',
      text: 'Kiikku combines a café, terrace atmosphere and relaxed grill moments in one summer experience.',
      cards: [
        ['☕', 'Café & treats', "Specialty coffees, sweet treats and summer bites in Kiikku's warm atmosphere."],
        ['🔥', 'Grill it yourself', 'Choose your grill favourites and prepare them yourself at the grill tables.'],
        ['🍷', 'Wine & snacks', 'Licensed service with wine, beer and cocktails makes Kiikku a summer evening destination too.'],
      ],
    },
    menu: {
      label: 'Selection',
      title: 'Menu for summer days and evenings',
      mini: 'Explore the selection',
      sections: [
        { img: '/images/coffee.jpg', title: 'Coffee & treats', items: ['Specialty coffees', 'Fresh pastries', 'Waffles', 'Cakes', 'Ice cream'] },
        { img: '/images/grill.jpg', title: 'Grill favourites', items: ['Grill sausages', 'Burgers', 'Grill-it-yourself products', 'Evening bites'] },
        { img: '/images/wine.jpg', title: 'Wine & drinks', items: ['Wines', 'Beers', 'Long drinks', 'Summer cocktails'] },
      ],
    },
    hupi: {
      label: 'Hupikioski',
      title: 'The Summer Theatre Café in Hupisaaret',
      text: 'Hupikioski serves theatre guests next to Hupisaaret Summer Theatre. Quickbar is the pre-order system for theatre refreshments: you can order products before the performance and pick them up conveniently on site. Hupikioski is open on performance days at least one hour before the show begins.',
      available: 'Available at Hupikioski',
      items: ['Coffee & tea', 'Sweet treats', 'Savoury snacks', 'Soft drinks', 'Wine & beer', 'Theatre snacks'],
      link: 'Quickbar Pre-orders',
    },
    events: {
      label: 'Private events',
      title: 'Celebrations and gatherings at Kiikku',
      text: 'Kiikku can mainly be rented outside regular café opening hours. The space is suitable for birthdays, graduation parties, weddings, meetings, workplace wellbeing days, crayfish parties, Christmas parties and other private occasions.',
      link: 'Ask about a private event',
    },
    location: {
      title: 'Location',
      text: 'Kahvila Kiikku is located in Ainolanpuisto, surrounded by greenery. Hupikioski serves next to Hupisaaret Summer Theatre as its own service point.',
      kiikku: 'Kahvila Kiikku',
      kiikkuAddress: 'Ainolanpolku 1, 90100 Oulu',
      hupi: 'Hupikioski',
      hupiAddress: 'Next to Hupisaaret Summer Theatre',
      maps: 'Google Maps',
      hours: 'Opening hours',
      hoursText: 'May 10–18 · June–August 9–21 · September 10–18 ·.',
    },
    footer: {
      location: 'Kahvila Kiikku · Ainolanpuisto · Oulu',
      billing: 'Billing address: 003733517057 APIX',
      oiva: 'Oiva report',
    },
  },
  fi: {
    topStrip: ['Aukioloajat: Toukokuu 10–18 · Kesä–elokuu 9–21 · Syyskuu 10–18 ·', 'Yksityistilaisuudet kahvilan aukioloaikojen ulkopuolella'],
    nav: {
      kiikku: 'Kiikku',
      menu: 'Menu',
      hupikioski: 'Hupikioski',
      events: 'Yksityistilaisuudet',
      location: 'Sijainti',
      contact: 'Yhteystiedot',
    },
    hero: {
      eyebrow: 'Ainolanpuisto · Oulu',
      title: 'Kahvila Kiikku',
      subtitle: 'Tunnelmallinen kahvila kasvihuoneessa',
      text: 'Kahvia, leivonnaisia, grilliherkkuja, viiniä ja kiireettömiä kesähetkiä Ainolanpuiston vehreydessä.',
      primary: 'Tervetuloa Kiikkuun',
      secondary: 'Tutustu menuun',
      eventTitle: 'Kiikussa tapahtuu',
      eventText: 'Kysy yksityistilaisuuksista, juhlista, kokouksista tai ajankohtaisista kuulumisista suoraan sähköpostilla.',
      email: 'Lähetä sähköposti',
    },
    welcome: {
      label: 'Tervetuloa Kahvila Kiikkuun',
      title: 'Paikka, jossa voi viipyä hetken tai vähän pidempään',
      paragraphs: [
        'Keskellä Oulun kauneinta puistomaisemaa, Ainolanpuiston vehreydessä, odottaa Kahvila Kiikku — paikka jossa voi viipyä hetken tai vähän pidempään.',
        'Tarjoilemme päivittäin vaihtuvan valikoiman makeita leivonnaisia, suolaista purtavaa, erikoiskahveja ja virkistäviä juomia. Valikoimastamme löytyy sesongin makuja, paikallisia herkkuja ja kahvihetkiä, jotka maistuvat vähän tavallista paremmilta.',
        'Kiikun vieressä sijaitseva Hupisaarten leikkipuisto tekee vierailusta elämyksen koko perheelle — samalla kun pienimmät viihtyvät leikeissä, aikuiset voivat istahtaa hetkeksi nauttimaan kahvista ja puiston tunnelmasta.',
        'Tule kahville, brunssille tai piipahtamaan jäätelölle. Meille tärkeintä on hyvä maku, rento tunnelma ja yhdessä viihtyminen.',
      ],
    },
    highlights: {
      label: 'Hyvä tietää',
      title: 'Pieniä asioita, jotka tekevät vierailusta helpon',
      text: 'Kiikku sopii rentoihin puistopäiviin, perheille, ystäville ja kesäiltoihin.',
      dogsTitle: 'Koirat sallittu',
      dogsText: 'Koirat ovat tervetulleita Kiikkuun, joten meille voi poiketa myös Ainolanpuiston kävelyn lomassa.',
      soupTitle: 'Viikonloppuisin keittoa',
      soupText: 'Viikonloppuisin tarjoilemme keittoa kahvilavalikoiman rinnalla sesongin ja saatavuuden mukaan.',
    },
    experiences: {
      label: 'Elämykset',
      title: 'Tule kahville, jää iltaan',
      text: 'Kiikku yhdistää kahvilan, terassitunnelman ja rennot grillihetket samaan kesäiseen kokemukseen.',
      cards: [
        ['☕', 'Kahvila & herkut', 'Erikoiskahveja, makeita herkkuja ja kesäisiä annoksia Kiikun lämpimässä tunnelmassa.'],
        ['🔥', 'Grillaa itse', 'Valitse grilliherkut ja grillaa ne itse hiiligrillissä.'],
        ['🍷', 'Viiniä ja naposteltavaa', 'Anniskeluoikeudet, viinit, oluet ja drinkit tekevät Kiikusta myös kesäillan kohteen.'],
      ],
    },
    menu: {
      label: 'Valikoima',
      title: 'Menu kesäpäivään ja iltaan',
      mini: 'Tutustu valikoimaan',
      sections: [
        { img: '/images/coffee.jpg', title: 'Kahvit & herkut', items: ['Erikoiskahvit', 'Tuoreet leivonnaiset', 'Vohvelit', 'Kakut', 'Jäätelöt'] },
        { img: '/images/grill.jpg', title: 'Grilliherkut', items: ['Grillimakkarat', 'Burgerit', 'Grillattavat tuotteet', 'Iltapalat'] },
        { img: '/images/wine.jpg', title: 'Viinit & drinkit', items: ['Viinit', 'Oluet', 'Long drinkit', 'Kesädrinkit'] },
      ],
    },
    hupi: {
      label: 'Hupikioski',
      title: 'Hupisaarten kesäteatterin kahvila',
      text: 'Hupikioski palvelee teatterivieraita Hupisaarten kesäteatterin vieressä. Quickbar on kesäteatterin tarjoiluiden ennakkotilausjärjestelmä: voit tilata tuotteet ennen esitystä ja noutaa ne helposti paikan päältä. Hupikioski on avoinna esityspäivinä viimeistään tunti ennen esitystä.',
      available: 'Saatavilla Hupikioskista',
      items: ['Kahvi & tee', 'Makeat herkut', 'Suolaiset tuotteet', 'Virvokkeet', 'Viinit & oluet', 'Teatterieväät'],
      link: 'Quickbar ennakkotilaukset',
    },
    events: {
      label: 'Yksityistilaisuudet',
      title: 'Juhlat ja tilaisuudet Kiikussa',
      text: 'Kiikkua vuokrataan pääsääntöisesti kahvilan aukioloajan ulkopuolella. Tila soveltuu syntymäpäiviin, valmistujaisiin, häihin, kokouksiin, tykypäiviin, rapujuhliin, pikkujouluihin ja muihin yksityistilaisuuksiin.',
      link: 'Kysy yksityistilaisuudesta',
    },
    location: {
      title: 'Sijainti',
      text: 'Kahvila Kiikku sijaitsee Ainolanpuistossa vehreän puistoympäristön keskellä. Hupikioski palvelee Hupisaarten kesäteatterin vieressä omana palvelupisteenään.',
      kiikku: 'Kahvila Kiikku',
      kiikkuAddress: 'Ainolanpolku 1, 90100 Oulu',
      hupi: 'Hupikioski',
      hupiAddress: 'Hupisaarten kesäteatterin vieressä',
      maps: 'Google Maps',
      hours: 'Aukioloajat',
      hoursText: 'Toukokuu 10–18 · Kesä–elokuu 9–21 · Syyskuu 10–18 ·',
    },
    footer: {
      location: 'Kahvila Kiikku · Ainolanpuisto · Oulu',
      billing: 'Laskutusosoite: 003733517057 APIX',
      oiva: 'Oiva-raportti',
    },
  },
};

const eventSubject = {
  en: 'Private event inquiry - Kahvila Kiikku',
  fi: 'Yksityistilaisuus - Kahvila Kiikku',
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('fi');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  return (
    <main>
      <header className="nav">
        <div className="top-strip">
          <span>{t.topStrip[0]}</span>
          <span>{t.topStrip[1]}</span>
        </div>
        <div className="nav-inner">
          <a className="logo-wrap" href="#top" aria-label="Kahvila Kiikku home">
            <Image src="/images/kiikku-logo.png" alt="Kahvila Kiikku" width={180} height={60} className="logo" priority />
          </a>
          <nav className="links" aria-label="Main navigation">
            <a href="#menu">{t.nav.menu}</a>
            <a href="#hupikioski">{t.nav.hupikioski}</a>
            <a href="#events">{t.nav.events}</a>
            <a href="#location">{t.nav.location}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="nav-actions">
            <div className="language-switch" aria-label="Language selection">
              <button type="button" className={lang === 'fi' ? 'active' : ''} onClick={() => setLang('fi')}>FIN</button>
              <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>ENG</button>
            </div>
            <div className="social-links">
              <a
                href="https://instagram.com/kahvila_kiikku"
               target="_blank"
              rel="noopener noreferrer"
               aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                 href="https://facebook.com/KahvilaKiikku"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
          <button
            type="button"
            className="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav-panel" aria-label="Mobile navigation">
            <a href="#menu" onClick={() => setMenuOpen(false)}>{t.nav.menu}</a>
            <a href="#hupikioski" onClick={() => setMenuOpen(false)}>{t.nav.hupikioski}</a>
            <a href="#events" onClick={() => setMenuOpen(false)}>{t.nav.events}</a>
            <a href="#location" onClick={() => setMenuOpen(false)}>{t.nav.location}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <Image src="/images/hero-greenhouse.jpg" alt="Kahvila Kiikku summer atmosphere" fill className="hero-bg" priority />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="serif">{t.hero.title}</h1>
            <h2 className="serif">{t.hero.subtitle}</h2>
            <p>{t.hero.text}</p>
            <div className="cta-row">
              <a className="primary" href="#kiikku">{t.hero.primary} <span>→</span></a>
              <a className="secondary" href="#menu">{t.hero.secondary}</a>
            </div>
          </div>
          <aside className="float-card">
            <div className="float-icon">✉</div>
            <h3 className="serif">{t.hero.eventTitle}</h3>
            <p>{t.hero.eventText}</p>
            <a className="dark-button" href="mailto:kahvilakiikku@gmail.com">{t.hero.email}</a>
          </aside>
        </div>
      </section>

      <section className="split" id="kiikku">
        <div className="container split-grid">
          <div className="rounded-img">
            <Image src="/images/greenhouse-day.jpg" alt="Kahvila Kiikku interior" width={900} height={1200} />
          </div>
          <div>
            <p className="label">{t.welcome.label}</p>
            <h2 className="serif h2" style={{ marginBottom: '28px' }}>
              {t.welcome.title}
            </h2>
            <div className="copy long-copy">
              {t.welcome.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="cards" aria-label="Highlights">
        <div className="container">
          <p className="label">{t.highlights.label}</p>
          <div className="section-head">
            <h2 className="serif h2">{t.highlights.title}</h2>
            <p>{t.highlights.text}</p>
          </div>
          <div className="highlight-grid">
            <article className="highlight-card"><div className="highlight-icon">🐕</div><h3 className="serif">{t.highlights.dogsTitle}</h3><p>{t.highlights.dogsText}</p></article>
            <article className="highlight-card"><div className="highlight-icon">🥣</div><h3 className="serif">{t.highlights.soupTitle}</h3><p>{t.highlights.soupText}</p></article>
          </div>
        </div>
      </section>

      <section className="cards cards-tight">
        <div className="container">
          <p className="label">{t.experiences.label}</p>
          <div className="section-head">
            <h2 className="serif h2">{t.experiences.title}</h2>
            <p>{t.experiences.text}</p>
          </div>
          <div className="card-grid">
            {t.experiences.cards.map((card, index) => (
              <article className="card" key={card[1]}>
                <Image src={index === 0 ? '/images/dessert.jpg' : index === 1 ? '/images/grill.jpg' : '/images/wine.jpg'} alt={card[1]} width={700} height={520} className="card-img" />
                <div className="card-body"><div className="icon">{card[0]}</div><h3 className="serif">{card[1]}</h3><p>{card[2]}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="container">
          <p className="label">{t.menu.label}</p>
          <h2 className="serif h2">{t.menu.title}</h2>
          <div className="menu-grid">
            {t.menu.sections.map((section) => (
              <article className="menu-card" key={section.title}>
                <Image src={section.img} alt={section.title} width={600} height={420} />
                <div className="menu-card-body">
                  <h3 className="serif">{section.title}</h3>
                  <div className="mini">{t.menu.mini}</div>
                  <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hupi" id="hupikioski">
        <div className="container hupi-box">
          <div>
            <img
              src="/images/hupikioski-logo.png"
              alt="Hupikioski"
              className="hupi-logo"
              style={{
                width: '320px',
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <div
              className="hupi-photo"
              style={{
                marginTop: '2rem',
                overflow: 'hidden',
                borderRadius: '2rem',
                boxShadow: '0 24px 60px rgba(16, 37, 27, 0.18)',
              }}
            >
              <Image
                src="/images/hupikioski.jpg"
                alt={lang === 'fi' ? 'Hupikioski Hupisaarten kesäteatterin vieressä' : 'Hupikioski next to Hupisaaret Summer Theatre'}
                width={1000}
                height={700}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div>
            <p className="label">{t.hupi.label}</p>
            <h2 className="serif h2">{t.hupi.title}</h2>
            <p className="copy">{t.hupi.text}</p>
            <div className="hupi-panel">
              <p className="label">{t.hupi.available}</p>
              <div className="hupi-items">
                {t.hupi.items.map((item) => <div key={item}>{item}</div>)}
              </div>
            </div>
            <a className="hupi-link" href="https://teatteri.kiikku.fi" target="_blank" rel="noopener noreferrer">{t.hupi.link}</a>
          </div>
        </div>
      </section>

      <section className="private-events" id="events">
        <div className="container private-box">
          <div>
            <p className="label">{t.events.label}</p>
            <h2 className="serif h2">{t.events.title}</h2>
          </div>
          <div>
            <p className="copy">{t.events.text}</p>
            <a className="primary inline-primary" href={`mailto:kahvilakiikku@gmail.com?subject=${encodeURIComponent(eventSubject[lang])}`}>{t.events.link}</a>
          </div>
        </div>
      </section>

      <section className="location" id="location">
  <div className="container location-grid">
    <div>
      <h2 className="serif h2">{t.location.title}</h2>
    </div>

    <div>
      <p>{t.location.text}</p>

      <div className="info-grid">
        <div className="info-card">
          <strong>{t.location.kiikku}</strong>
          <span>{t.location.kiikkuAddress}</span>
        </div>

        <div className="info-card">
          <strong>{t.location.hupi}</strong>
          <span>{t.location.hupiAddress}</span>
        </div>
      </div>

      <div className="info-card hours">
        <strong>{t.location.hours}</strong>
        <span>{t.location.hoursText}</span>
      </div>

      <div className="map-section">
        <h3 className="map-title">{t.location.kiikku}</h3>
        <div className="map-embed">
          <iframe
            title="Kahvila Kiikku Google Maps"
            src="https://www.google.com/maps?q=Ainolanpolku%201,%2090100%20Oulu&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="map-section">
        <h3 className="map-title">{t.location.hupi}</h3>
        <div className="map-embed">
          <iframe
            title="Hupikioski Google Maps"
            src="https://www.google.com/maps?q=Hupisaarten%20kes%C3%A4teatteri%20Oulu&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      <footer id="contact">
        <div className="container footer-inner">
          <a className="logo-wrap" href="#top" aria-label="Kahvila Kiikku home"><Image src="/images/kiikku-logo.png" alt="Kahvila Kiikku" width={180} height={60} className="logo" /></a>
          <div className="footer-text">
            <p>{t.footer.location}</p>
            <p><a href="tel:+358444937528">+358 44 493 7528</a> · <a href="mailto:kahvilakiikku@gmail.com">kahvilakiikku@gmail.com</a></p>
            <p>{t.footer.billing}</p>
            <p>
              <a
                href="https://www.oivahymy.fi/yrityshaku?hakusana=kahvila%20kiikku"
                target="_blank"
                rel="noopener noreferrer"
            >
                 {t.footer.oiva}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
