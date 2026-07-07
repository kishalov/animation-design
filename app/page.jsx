'use client';

import { useEffect, useRef, useState } from 'react';

const seoContent = {
  en: {
    title: 'Animation Studio — Motion that stops the scroll',
    description: 'Animation Studio creates scroll-stopping motion design, explainers, social ads, brand idents and product animations for businesses.',
    ogDescription: 'Scroll-stopping animation for business owners who are done being ignored.',
    locale: 'en_US'
  },
  ru: {
    title: 'Animation Studio — моушн-дизайн, который останавливает скролл',
    description: 'Animation Studio создаёт моушн-дизайн, объясняющие ролики, рекламу для соцсетей, брендовые заставки и продуктовую анимацию для бизнеса.',
    ogDescription: 'Анимация, которая останавливает скролл, для владельцев бизнеса, которым надоело, что их пролистывают.',
    locale: 'ru_RU'
  }
};

const services = [
  {
    num: '01',
    icon: 'play',
    enTitle: 'Explainer Animations',
    ruTitle: 'Объясняющие ролики',
    enText: 'Turn a confusing pitch into 60 seconds people actually watch to the end.',
    ruText: 'Превращаем запутанный питч в 60 секунд, которые досматривают до конца.'
  },
  {
    num: '02',
    icon: 'phone',
    enTitle: 'Social Motion Ads',
    ruTitle: 'Реклама для соцсетей',
    enText: 'Scroll-stopping clips cut to size for Reels, TikTok and Shorts.',
    ruText: 'Ролики, которые останавливают скролл, — под формат Reels, TikTok и Shorts.'
  },
  {
    num: '03',
    icon: 'target',
    enTitle: 'Brand Idents',
    ruTitle: 'Брендовые заставки',
    enText: 'A few seconds of motion that says exactly who you are, every single time.',
    ruText: 'Несколько секунд движения, которые каждый раз точно говорят, кто вы.'
  },
  {
    num: '04',
    icon: 'product',
    enTitle: 'Product Animations',
    ruTitle: 'Анимация продукта',
    enText: 'Show how it works before anyone has to read a single word.',
    ruText: 'Показываем, как это работает, ещё до того, как прочитано хоть слово.'
  }
];

const processSteps = [
  ['01', 'Brief & Snip', 'Бриф и вырезка', 'We take your story apart to find the bits worth keeping.', 'Разбираем вашу историю на части, чтобы найти то, что стоит оставить.'],
  ['02', 'Storyboard', 'Раскадровка', 'The scraps get arranged into a shape that actually makes sense.', 'Вырезки складываются в форму, которая наконец обретает смысл.'],
  ['03', 'Animate', 'Анимация', 'Every frame moves — nothing on your page sits still.', 'Каждый кадр в движении — ничего на странице не стоит на месте.'],
  ['04', 'Deliver & Play', 'Сдача и запуск', 'Cut for every platform, ready before your deadline.', 'Смонтировано под любую платформу и готово раньше дедлайна.']
];

const cases = [
  ['/videos/fastotc-collage.mp4', 'Nordway Coffee — brand ident, 8s', 'Nordway Coffee — айдентика, 8с'],
  ['/videos/fastotc.mp4', 'Fenwick & Row — product demo', 'Fenwick & Row — демо продукта'],
  ['/videos/pepperpromo.mp4', 'Loop Fitness — social ad series', 'Loop Fitness — серия рекламы для соцсетей'],
  ['/videos/revolut-style.mp4', 'Harborline — explainer, 45s', 'Harborline — объясняющий ролик, 45с'],
  ['/videos/utekayut.mp4', 'Study Nook — launch teaser', 'Study Nook — тизер запуска'],
  ['/videos/teryaesh.mp4', 'Amberfield — brand ident, 6s', 'Amberfield — айдентика, 6с']
];

const testimonials = [
  ['They turned our clunky pitch deck into a 40-second clip. Our close rate on cold outreach doubled the month we started using it.', 'Они превратили нашу неуклюжую презентацию в 40-секундный ролик. В тот же месяц конверсия холодных обращений выросла вдвое.', '— Priya Kessler, Founder, Nordway Coffee', '— Прия Кесслер, основательница Nordway Coffee'],
  ['Every draft felt handmade, not templated. First animation we\'ve ever made people rewatch on purpose.', 'Каждый вариант ощущался сделанным вручную, а не по шаблону. Впервые наша анимация — то, что люди пересматривают специально.', '— Tomas Vidal, Fenwick & Row', '— Томас Видаль, Fenwick & Row'],
  ['Fast, weird in the right places, and it actually looked like us. That\'s rarer than it should be.', 'Быстро, в меру странно там, где нужно, и это правда похоже на нас. Такое встречается реже, чем должно бы.', '— Dee Okafor, Loop Fitness', '— Ди Окафор, Loop Fitness']
];

function Icon({ type }) {
  if (type === 'phone') {
    return <svg className="service-icon" viewBox="0 0 44 44"><rect x="12" y="4" width="20" height="36" fill="none" stroke="#1c1812" strokeWidth="2.5"/><line x1="12" y1="32" x2="32" y2="32" stroke="#1c1812" strokeWidth="2.5"/></svg>;
  }
  if (type === 'target') {
    return <svg className="service-icon" viewBox="0 0 44 44"><circle cx="22" cy="22" r="16" fill="none" stroke="#1c1812" strokeWidth="2.5"/><circle cx="22" cy="22" r="5" fill="#1c1812"/></svg>;
  }
  if (type === 'product') {
    return <svg className="service-icon" viewBox="0 0 44 44"><rect x="6" y="14" width="32" height="20" rx="2" fill="none" stroke="#1c1812" strokeWidth="2.5"/><line x1="6" y1="20" x2="38" y2="20" stroke="#1c1812" strokeWidth="2.5"/></svg>;
  }
  return <svg className="service-icon" viewBox="0 0 44 44"><rect x="4" y="10" width="36" height="24" fill="none" stroke="#1c1812" strokeWidth="2.5"/><polygon points="18,17 18,27 28,22" fill="#1c1812"/></svg>;
}

function updateMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', value);
}

export default function HomePage() {
  const [lang, setLang] = useState('ru');
  const [modalCase, setModalCase] = useState(null);
  const heroRef = useRef(null);

  const t = (en, ru) => (lang === 'ru' ? ru : en);

  useEffect(() => {
    const seo = seoContent[lang];
    document.documentElement.lang = lang;
    document.title = seo.title;
    updateMeta('meta[name="description"]', seo.description);
    updateMeta('meta[property="og:title"]', seo.title);
    updateMeta('meta[property="og:description"]', seo.ogDescription);
    updateMeta('meta[property="og:locale"]', seo.locale);
    updateMeta('meta[name="twitter:title"]', seo.title);
    updateMeta('meta[name="twitter:description"]', seo.ogDescription);
  }, [lang]);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const scrapField = document.querySelector('.scrap-field');
    if (!hero || !scrapField) return undefined;

    const onMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      scrapField.querySelectorAll('.scrap').forEach((scrap, index) => {
        const depth = (index + 1) * 10;
        if (!scrap.dataset.dragging && !scrap.dataset.wasDragged) {
          scrap.style.marginLeft = `${x * depth}px`;
          scrap.style.marginTop = `${y * depth}px`;
        }
      });
    };

    hero.addEventListener('mousemove', onMouseMove);
    return () => hero.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;
    const cleanups = [];

    document.querySelectorAll('.draggable').forEach((el) => {
      let offsetX = 0;
      let offsetY = 0;
      let dragging = false;

      const onPointerDown = (event) => {
        dragging = true;
        el.dataset.dragging = '1';
        el.setPointerCapture(event.pointerId);
        const heroRect = hero.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        offsetX = event.clientX - elRect.left;
        offsetY = event.clientY - elRect.top;
        el.style.position = 'absolute';
        el.style.left = `${elRect.left - heroRect.left}px`;
        el.style.top = `${elRect.top - heroRect.top}px`;
        el.style.right = 'auto';
        el.style.margin = '0';
        el.style.zIndex = 600;
      };

      const onPointerMove = (event) => {
        if (!dragging) return;
        const heroRect = hero.getBoundingClientRect();
        el.style.left = `${event.clientX - heroRect.left - offsetX}px`;
        el.style.top = `${event.clientY - heroRect.top - offsetY}px`;
      };

      const stop = (event) => {
        dragging = false;
        el.dataset.wasDragged = '1';
        delete el.dataset.dragging;
        try { el.releasePointerCapture(event.pointerId); } catch {}
      };

      el.addEventListener('pointerdown', onPointerDown);
      el.addEventListener('pointermove', onPointerMove);
      el.addEventListener('pointerup', stop);
      el.addEventListener('pointercancel', stop);
      cleanups.push(() => {
        el.removeEventListener('pointerdown', onPointerDown);
        el.removeEventListener('pointermove', onPointerMove);
        el.removeEventListener('pointerup', stop);
        el.removeEventListener('pointercancel', stop);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(modalCase));
    return () => document.body.classList.remove('modal-open');
  }, [modalCase]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setModalCase(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const toggleMenu = () => document.querySelector('nav.links')?.classList.toggle('open');

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <header>
        <div className="nav-strip">
          <div className="logo"><span className="logo-mark">A</span> Animation Studio</div>
          <nav className="links">
            <a href="#work">{t('Work', 'Работы')}</a>
            <a href="#services">{t('Services', 'Услуги')}</a>
            <a href="#process">{t('Process', 'Процесс')}</a>
            <a href="#contact" className="btn">{t('Start a project', 'Начать проект')}</a>
          </nav>
          <button className="lang-switch" type="button" onClick={() => setLang(lang === 'en' ? 'ru' : 'en')} aria-label="Switch language">
            <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</span>
            <span className={`lang-option ${lang === 'ru' ? 'active' : ''}`}>RU</span>
          </button>
          <button className="burger" aria-label="Open menu" type="button" onClick={toggleMenu}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <section className="hero" ref={heroRef}>
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="scrap-field" aria-hidden="true">
          <div className="scrap tape scrap-a draggable" style={{ top: '8%', right: '9%' }}>
            <svg viewBox="0 0 100 70"><rect width="100" height="70" fill="none"/><circle cx="50" cy="35" r="22" fill="#1c1812"/><polygon points="42,25 42,45 62,35" fill="#f2c230"/></svg>
            <div className="scrap-label">PLAY.MOV</div>
          </div>
          <div className="scrap tape scrap-b draggable" style={{ top: '50%', right: '22%' }}>
            <svg viewBox="0 0 100 60"><rect x="4" y="14" width="92" height="32" fill="none" stroke="#f3ecdd" strokeWidth="3"/><line x1="4" y1="14" x2="4" y2="46" stroke="#f3ecdd" strokeWidth="3"/><line x1="30" y1="10" x2="30" y2="50" stroke="#f3ecdd" strokeWidth="3"/><line x1="70" y1="10" x2="70" y2="50" stroke="#f3ecdd" strokeWidth="3"/></svg>
            <div className="scrap-label" style={{ color: '#f3ecdd' }}>FRAME 04</div>
          </div>
        </div>

        <div className="hero-inner">
          <span className="eyebrow">{t('MOTION STUDIO — CUT, PASTE, PLAY', 'СТУДИЯ МОУШН-ДИЗАЙНА — РЕЖЬ, КЛЕЙ, ИГРАЙ')}</span>
          <h1 className="cut-title" style={{ display: lang === 'en' ? 'flex' : 'none' }}>
            <span className="row"><span className="paper-tile">STOP</span><span className="orange-tile">THE</span></span>
            <span className="row"><span className="yellow-tile">SCROLL,</span><span className="cobalt-tile">NOT</span></span>
            <span className="row"><span className="paper-tile">THE</span><span className="orange-tile">SALE.</span></span>
          </h1>
          <h1 className="cut-title" style={{ display: lang === 'ru' ? 'flex' : 'none' }}>
            <span className="row"><span className="paper-tile">СТОП</span><span className="orange-tile">СКРОЛЛУ,</span></span>
            <span className="row"><span className="yellow-tile">НЕ</span><span className="cobalt-tile">ПРОДАЖАМ.</span></span>
          </h1>
          <p className="hero-sub">{t('We take your brand apart — story, product, pitch — and paste it back together as animation people actually stop for. Built for business owners who are done being ignored.', 'Мы разбираем ваш бренд на части — историю, продукт, питч — и склеиваем обратно в анимацию, ради которой люди останавливаются. Для владельцев бизнеса, которым надоело, что их пролистывают.')}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn">{t('Start a project', 'Начать проект')}</a>
            <a href="#work" className="btn ghost">{t('See the work', 'Смотреть работы')}</a>
          </div>
          <div className="scroll-cue"><span className="arrow">✂</span> <span>{t('drag the scraps around — go on', 'потаскай вырезки по доске — давай')}</span></div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t('WHAT WE MAKE', 'ЧТО МЫ ДЕЛАЕМ')}</span>
            <h2>{t('Four ways to be remembered', 'Четыре способа запомниться')}</h2>
            <p>{t("Every business needs a different cut. Here's where most projects start — mix and match as your story needs.", 'Каждому бизнесу нужен свой монтаж. Вот с чего обычно начинаются проекты — комбинируйте под свою историю.')}</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card reveal" key={service.num}>
                <span className="service-num">{service.num}</span>
                <Icon type={service.icon} />
                <h3>{t(service.enTitle, service.ruTitle)}</h3>
                <p>{t(service.enText, service.ruText)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="filmstrip">
        <div className="sprockets top" aria-hidden="true">{Array.from({ length: 12 }).map((_, i) => <span key={i} />)}</div>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t('HOW WE BUILD IT', 'КАК МЫ ЭТО ДЕЛАЕМ')}</span>
            <h2>{t('One story, four frames', 'Одна история, четыре кадра')}</h2>
          </div>
          <div className="process-row">
            {processSteps.map(([num, enTitle, ruTitle, enText, ruText]) => (
              <div className="frame reveal" key={num}><span className="fnum">{num}</span><h3>{t(enTitle, ruTitle)}</h3><p>{t(enText, ruText)}</p></div>
            ))}
          </div>
        </div>
        <div className="sprockets bottom" aria-hidden="true">{Array.from({ length: 12 }).map((_, i) => <span key={i} />)}</div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t('RECENT CUT-UPS', 'ПОСЛЕДНИЕ ВЫРЕЗКИ')}</span>
            <h2>{t("A few boards we've pinned up", 'Несколько досок, что мы приколотили')}</h2>
            <p>{t("Placeholder cuts from the studio wall — swap in your real reel when you're ready.", 'Черновые вырезки со стены студии — замените на свои готовые ролики, когда будете готовы.')}</p>
          </div>
          <div className="portfolio-grid">
            {cases.map(([video, enTag, ruTag]) => (
              <button className="clip reveal" type="button" key={video} onClick={() => setModalCase({ video, title: t(enTag, ruTag) })} aria-label={t('Open case video', 'Открыть видео кейса')}>
                <video className="clip-bg" muted loop playsInline preload="metadata" aria-hidden="true" onMouseEnter={(event) => event.currentTarget.play().catch(() => {})} onMouseLeave={(event) => { event.currentTarget.pause(); event.currentTarget.currentTime = 0; }}>
                  <source src={video} type="video/mp4" />
                </video>
                <div className="halftone" />
                <div className="play">▶</div>
                <div className="tag">{t(enTag, ruTag)}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t('WORD ON THE BOARD', 'ОТЗЫВЫ НА ДОСКЕ')}</span>
            <h2>{t("People we've made things for", 'Люди, для которых мы это делали')}</h2>
          </div>
          <div className="testi-board">
            {testimonials.map(([enQuote, ruQuote, enWho, ruWho]) => (
              <div className="testi reveal" key={enWho}>
                <span>“{t(enQuote, ruQuote)}”</span>
                <div className="who">{t(enWho, ruWho)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-stamp" id="contact">
        <span className="eyebrow" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>{t('GOT A STORY WORTH ANIMATING?', 'ЕСТЬ ИСТОРИЯ, ДОСТОЙНАЯ АНИМАЦИИ?')}</span>
        <h2>{t("LET'S CUT SOMETHING UP.", 'ДАВАЙТЕ ЧТО-НИБУДЬ ВЫРЕЖЕМ.')}</h2>
        <p>{t("Tell us about your business — we'll tell you what it looks like in motion.", 'Расскажите о своём бизнесе — мы покажем, как это выглядит в движении.')}</p>
        <a href="mailto:hello@animationdesignbureau.studio" className="btn">hello@animationdesignbureau.studio</a>
      </section>

      <footer>
        <div className="foot-grid">
          <div className="foot-col"><h4>ANIMATION STUDIO</h4><a href="#work">{t('Work', 'Работы')}</a><a href="#services">{t('Services', 'Услуги')}</a><a href="#process">{t('Process', 'Процесс')}</a></div>
          <div className="foot-col"><h4>{t('STUDIO', 'СТУДИЯ')}</h4><a href="#contact">{t('Start a project', 'Начать проект')}</a><a href="mailto:hello@animationdesignbureau.studio">hello@animationdesignbureau.studio</a></div>
          <div className="foot-col"><h4>{t('FOLLOW', 'МЫ В СЕТИ')}</h4><a href="#">Instagram</a><a href="#">Behance</a><a href="#">LinkedIn</a></div>
        </div>
        <div className="foot-bottom"><span>{t('© 2026 Animation Studio. All scraps reserved.', '© 2026 Animation Studio. Все вырезки защищены.')}</span><span>{t('Cut, pasted & animated in-house.', 'Вырезано, склеено и анимировано у нас в студии.')}</span></div>
      </footer>

      {modalCase && (
        <div className="video-modal is-open" aria-hidden="false" role="dialog" aria-modal="true" aria-labelledby="videoModalTitle" onClick={(event) => { if (event.target === event.currentTarget) setModalCase(null); }}>
          <div className="video-modal__dialog">
            <div className="video-modal__bar">
              <div className="video-modal__title" id="videoModalTitle">{modalCase.title}</div>
              <button className="video-modal__close" type="button" aria-label={t('Close video', 'Закрыть видео')} onClick={() => setModalCase(null)}>×</button>
            </div>
            <video className="video-modal__video" controls playsInline preload="metadata" src={modalCase.video} autoPlay />
          </div>
        </div>
      )}
    </>
  );
}
