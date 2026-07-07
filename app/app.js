(function() {
  'use strict';

  function renderMarkup() {
    return `<div class="grain" aria-hidden="true"></div>

<header>
  <div class="nav-strip">
    <div class="logo"><span class="logo-mark">A</span> Animation Studio</div>
    <nav class="links">
      <a href="#work" data-en="Work" data-ru="Работы">Work</a>
      <a href="#services" data-en="Services" data-ru="Услуги">Services</a>
      <a href="#process" data-en="Process" data-ru="Процесс">Process</a>
      <a href="#contact" class="btn" data-en="Start a project" data-ru="Начать проект">Start a project</a>
    </nav>
    <button class="lang-switch" id="langToggle" aria-label="Switch language">
      <span class="lang-option active" data-lang="en">EN</span><span class="lang-option" data-lang="ru">RU</span>
    </button>
    <button class="burger" aria-label="Open menu" onclick="document.querySelector('nav.links').classList.toggle('open')">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<section class="hero">
  <video class="hero-video" autoplay muted loop playsinline preload="auto">
  <source src="videos/background.mp4" type="video/mp4">
</video>

<div class="hero-overlay"></div>
  <div class="scrap-field" aria-hidden="true">
    <div class="scrap tape scrap-a draggable" style="top:8%; right:9%;">
      <svg viewBox="0 0 100 70"><rect width="100" height="70" fill="none"/><circle cx="50" cy="35" r="22" fill="#1c1812"/><polygon points="42,25 42,45 62,35" fill="#f2c230"/></svg>
      <div class="scrap-label">PLAY.MOV</div>
    </div>
    <div class="scrap tape scrap-b draggable" style="top:50%; right:22%;">
      <svg viewBox="0 0 100 60"><rect x="4" y="14" width="92" height="32" fill="none" stroke="#f3ecdd" stroke-width="3"/><line x1="4" y1="14" x2="4" y2="46" stroke="#f3ecdd" stroke-width="3"/><line x1="30" y1="10" x2="30" y2="50" stroke="#f3ecdd" stroke-width="3"/><line x1="70" y1="10" x2="70" y2="50" stroke="#f3ecdd" stroke-width="3"/></svg>
      <div class="scrap-label" style="color:#f3ecdd">FRAME 04</div>
    </div>
  </div>

  <div class="hero-inner">
    <span class="eyebrow" data-en="MOTION STUDIO&nbsp;— CUT, PASTE, PLAY" data-ru="СТУДИЯ МОУШН-ДИЗАЙНА&nbsp;— РЕЖЬ, КЛЕЙ, ИГРАЙ">MOTION STUDIO&nbsp;— CUT, PASTE, PLAY</span>
    <h1 class="cut-title" id="cutTitleEn" style="display:none;">
      <span class="row">
        <span class="paper-tile">STOP</span>
        <span class="orange-tile">THE</span>
      </span>
      <span class="row">
        <span class="yellow-tile">SCROLL,</span>
        <span class="cobalt-tile">NOT</span>
      </span>
      <span class="row">
        <span class="paper-tile">THE</span>
        <span class="orange-tile">SALE.</span>
      </span>
    </h1>
<h1 class="cut-title" id="cutTitleRu">
      <span class="row">
        <span class="paper-tile">СТОП</span>
        <span class="orange-tile">СКРОЛЛУ,</span>
      </span>
      <span class="row">
        <span class="yellow-tile">НЕ</span>
        <span class="cobalt-tile">ПРОДАЖАМ.</span>
      </span>
    </h1>
    <p class="hero-sub" data-en="We take your brand apart&nbsp;— story, product, pitch&nbsp;— and paste it back together as animation people actually stop for. Built for business owners who are done being ignored." data-ru="Мы разбираем ваш бренд на части&nbsp;— историю, продукт, питч&nbsp;— и склеиваем обратно в анимацию, ради которой люди останавливаются. Для владельцев бизнеса, которым надоело, что их пролистывают.">We take your brand apart&nbsp;— story, product, pitch&nbsp;— and paste it back together as animation people actually stop for. Built for business owners who are done being ignored.</p>
    <div class="hero-cta">
      <a href="#contact" class="btn" data-en="Start a project" data-ru="Начать проект">Start a project</a>
      <a href="#work" class="btn ghost" data-en="See the work" data-ru="Смотреть работы">See the work</a>
    </div>
    <div class="scroll-cue"><span class="arrow">✂</span> <span data-en="drag the scraps around&nbsp;— go on" data-ru="потаскай вырезки по доске&nbsp;— давай">drag the scraps around&nbsp;— go on</span></div>
  </div>
</section>

<section id="services">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow" data-en="WHAT WE MAKE" data-ru="ЧТО МЫ ДЕЛАЕМ">WHAT WE MAKE</span>
      <h2 data-en="Four ways to be remembered" data-ru="Четыре способа запомниться">Four ways to be remembered</h2>
      <p data-en="Every business needs a different cut. Here's where most projects start&nbsp;— mix and match as your story needs." data-ru="Каждому бизнесу нужен свой монтаж. Вот с чего обычно начинаются проекты&nbsp;— комбинируйте под свою историю.">Every business needs a different cut. Here's where most projects start&nbsp;— mix and match as your story needs.</p>
    </div>
    <div class="services-grid">
      <div class="service-card reveal">
        <span class="service-num">01</span>
        <svg class="service-icon" viewBox="0 0 44 44"><rect x="4" y="10" width="36" height="24" fill="none" stroke="#1c1812" stroke-width="2.5"/><polygon points="18,17 18,27 28,22" fill="#1c1812"/></svg>
        <h3 data-en="Explainer Animations" data-ru="Объясняющие ролики">Explainer Animations</h3>
        <p data-en="Turn a confusing pitch into 60 seconds people actually watch to the end." data-ru="Превращаем запутанный питч в 60 секунд, которые досматривают до конца.">Turn a confusing pitch into 60 seconds people actually watch to the end.</p>
      </div>
      <div class="service-card reveal">
        <span class="service-num">02</span>
        <svg class="service-icon" viewBox="0 0 44 44"><rect x="12" y="4" width="20" height="36" fill="none" stroke="#1c1812" stroke-width="2.5"/><line x1="12" y1="32" x2="32" y2="32" stroke="#1c1812" stroke-width="2.5"/></svg>
        <h3 data-en="Social Motion Ads" data-ru="Реклама для соцсетей">Social Motion Ads</h3>
        <p data-en="Scroll-stopping clips cut to size for Reels, TikTok and Shorts." data-ru="Ролики, которые останавливают скролл,&nbsp;— под формат Reels, TikTok и Shorts.">Scroll-stopping clips cut to size for Reels, TikTok and Shorts.</p>
      </div>
      <div class="service-card reveal">
        <span class="service-num">03</span>
        <svg class="service-icon" viewBox="0 0 44 44"><circle cx="22" cy="22" r="16" fill="none" stroke="#1c1812" stroke-width="2.5"/><circle cx="22" cy="22" r="5" fill="#1c1812"/></svg>
        <h3 data-en="Brand Idents" data-ru="Брендовые заставки">Brand Idents</h3>
        <p data-en="A few seconds of motion that says exactly who you are, every single time." data-ru="Несколько секунд движения, которые каждый раз точно говорят, кто вы.">A few seconds of motion that says exactly who you are, every single time.</p>
      </div>
      <div class="service-card reveal">
        <span class="service-num">04</span>
        <svg class="service-icon" viewBox="0 0 44 44"><rect x="6" y="14" width="32" height="20" rx="2" fill="none" stroke="#1c1812" stroke-width="2.5"/><line x1="6" y1="20" x2="38" y2="20" stroke="#1c1812" stroke-width="2.5"/></svg>
        <h3 data-en="Product Animations" data-ru="Анимация продукта">Product Animations</h3>
        <p data-en="Show how it works before anyone has to read a single word." data-ru="Показываем, как это работает, ещё до того, как прочитано хоть слово.">Show how it works before anyone has to read a single word.</p>
      </div>
    </div>
  </div>
</section>

<section id="process" class="filmstrip">
  <div class="sprockets top" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow" data-en="HOW WE BUILD IT" data-ru="КАК МЫ ЭТО ДЕЛАЕМ">HOW WE BUILD IT</span>
      <h2 data-en="One story, four frames" data-ru="Одна история, четыре кадра">One story, four frames</h2>
    </div>
    <div class="process-row">
      <div class="frame reveal"><span class="fnum">01</span><h3 data-en="Brief &amp; Snip" data-ru="Бриф и вырезка">Brief &amp; Snip</h3><p data-en="We take your story apart to find the bits worth keeping." data-ru="Разбираем вашу историю на части, чтобы найти то, что стоит оставить.">We take your story apart to find the bits worth keeping.</p></div>
      <div class="frame reveal"><span class="fnum">02</span><h3 data-en="Storyboard" data-ru="Раскадровка">Storyboard</h3><p data-en="The scraps get arranged into a shape that actually makes sense." data-ru="Вырезки складываются в форму, которая наконец обретает смысл.">The scraps get arranged into a shape that actually makes sense.</p></div>
      <div class="frame reveal"><span class="fnum">03</span><h3 data-en="Animate" data-ru="Анимация">Animate</h3><p data-en="Every frame moves&nbsp;— nothing on your page sits still." data-ru="Каждый кадр в движении&nbsp;— ничего на странице не стоит на месте.">Every frame moves&nbsp;— nothing on your page sits still.</p></div>
      <div class="frame reveal"><span class="fnum">04</span><h3 data-en="Deliver &amp; Play" data-ru="Сдача и запуск">Deliver &amp; Play</h3><p data-en="Cut for every platform, ready before your deadline." data-ru="Смонтировано под любую платформу и готово раньше дедлайна.">Cut for every platform, ready before your deadline.</p></div>
    </div>
  </div>
  <div class="sprockets bottom" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
</section>

<section id="work">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow" data-en="RECENT CUT-UPS" data-ru="ПОСЛЕДНИЕ ВЫРЕЗКИ">RECENT CUT-UPS</span>
      <h2 data-en="A few boards we've pinned up" data-ru="Несколько досок, что мы приколотили">A few boards we've pinned up</h2>
      <p data-en="Placeholder cuts from the studio wall&nbsp;— swap in your real reel when you're ready." data-ru="Черновые вырезки со стены студии&nbsp;— замените на свои готовые ролики, когда будете готовы.">Placeholder cuts from the studio wall&nbsp;— swap in your real reel when you're ready.</p>
    </div>
    <div class="portfolio-grid">
      <button class="clip reveal" type="button" data-video="videos/fastotc-collage.mp4" aria-label="Open case video">
        <video class="clip-bg" muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="videos/fastotc-collage.mp4" type="video/mp4">
        </video>
        <div class="halftone"></div>
        <div class="play">▶</div>
        <div class="tag" data-en="Nordway Coffee&nbsp;— brand ident, 8s" data-ru="Nordway Coffee&nbsp;— айдентика, 8с">Nordway Coffee&nbsp;— brand ident, 8s</div>
      </button>
      <button class="clip reveal" type="button" data-video="videos/fastotc.mp4" aria-label="Open case video">
        <video class="clip-bg" muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="videos/fastotc.mp4" type="video/mp4">
        </video>
        <div class="halftone"></div>
        <div class="play">▶</div>
        <div class="tag" data-en="Fenwick &amp; Row&nbsp;— product demo" data-ru="Fenwick &amp; Row&nbsp;— демо продукта">Fenwick &amp; Row&nbsp;— product demo</div>
      </button>
      <button class="clip reveal" type="button" data-video="videos/pepperpromo.mp4" aria-label="Open case video">
        <video class="clip-bg" muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="videos/pepperpromo.mp4" type="video/mp4">
        </video>
        <div class="halftone"></div>
        <div class="play">▶</div>
        <div class="tag" data-en="Loop Fitness&nbsp;— social ad series" data-ru="Loop Fitness&nbsp;— серия рекламы для соцсетей">Loop Fitness&nbsp;— social ad series</div>
      </button>
      <button class="clip reveal" type="button" data-video="videos/revolut-style.mp4" aria-label="Open case video">
        <video class="clip-bg" muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="videos/revolut-style.mp4" type="video/mp4">
        </video>
        <div class="halftone"></div>
        <div class="play">▶</div>
        <div class="tag" data-en="Harborline&nbsp;— explainer, 45s" data-ru="Harborline&nbsp;— объясняющий ролик, 45с">Harborline&nbsp;— explainer, 45s</div>
      </button>
      <button class="clip reveal" type="button" data-video="videos/utekayut.mp4" aria-label="Open case video">
        <video class="clip-bg" muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="videos/utekayut.mp4" type="video/mp4">
        </video>
        <div class="halftone"></div>
        <div class="play">▶</div>
        <div class="tag" data-en="Study Nook&nbsp;— launch teaser" data-ru="Study Nook&nbsp;— тизер запуска">Study Nook&nbsp;— launch teaser</div>
      </button>
      <button class="clip reveal" type="button" data-video="videos/teryaesh.mp4" aria-label="Open case video">
        <video class="clip-bg" muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="videos/teryaesh.mp4" type="video/mp4">
        </video>
        <div class="halftone"></div>
        <div class="play">▶</div>
        <div class="tag" data-en="Amberfield&nbsp;— brand ident, 6s" data-ru="Amberfield&nbsp;— айдентика, 6с">Amberfield&nbsp;— brand ident, 6s</div>
      </button>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow" data-en="WORD ON THE BOARD" data-ru="ОТЗЫВЫ НА ДОСКЕ">WORD ON THE BOARD</span>
      <h2 data-en="People we've made things for" data-ru="Люди, для которых мы это делали">People we've made things for</h2>
    </div>
    <div class="testi-board">
      <div class="testi reveal">
        <span data-en="&quot;They turned our clunky pitch deck into a 40-second clip. Our close rate on cold outreach doubled the month we started using it.&quot;" data-ru="«Они превратили нашу неуклюжую презентацию в 40-секундный ролик. В тот же месяц конверсия холодных обращений выросла вдвое.»">"They turned our clunky pitch deck into a 40-second clip. Our close rate on cold outreach doubled the month we started using it."</span>
        <div class="who" data-en="— Priya Kessler, Founder, Nordway Coffee" data-ru="— Прия Кесслер, основательница Nordway Coffee">— Priya Kessler, Founder, Nordway Coffee</div>
      </div>
      <div class="testi reveal">
        <span data-en="&quot;Every draft felt handmade, not templated. First animation we've ever made people rewatch on purpose.&quot;" data-ru="«Каждый вариант ощущался сделанным вручную, а не по шаблону. Впервые наша анимация&nbsp;— то, что люди пересматривают специально.»">"Every draft felt handmade, not templated. First animation we've ever made people rewatch on purpose."</span>
        <div class="who" data-en="— Tomas Vidal, Fenwick &amp; Row" data-ru="— Томас Видаль, Fenwick &amp; Row">— Tomas Vidal, Fenwick &amp; Row</div>
      </div>
      <div class="testi reveal">
        <span data-en="&quot;Fast, weird in the right places, and it actually looked like us. That's rarer than it should be.&quot;" data-ru="«Быстро, в меру странно там, где нужно, и это правда похоже на нас. Такое встречается реже, чем должно бы.»">"Fast, weird in the right places, and it actually looked like us. That's rarer than it should be."</span>
        <div class="who" data-en="— Dee Okafor, Loop Fitness" data-ru="— Ди Окафор, Loop Fitness">— Dee Okafor, Loop Fitness</div>
      </div>
    </div>
  </div>
</section>

<section class="cta-stamp" id="contact">
  <span class="eyebrow" style="background:var(--ink); color:var(--paper);" data-en="GOT A STORY WORTH ANIMATING?" data-ru="ЕСТЬ ИСТОРИЯ, ДОСТОЙНАЯ АНИМАЦИИ?">GOT A STORY WORTH ANIMATING?</span>
  <h2 data-en-html="LET'S CUT<br>SOMETHING UP." data-ru-html="ДАВАЙТЕ ЧТО-НИБУДЬ<br>ВЫРЕЖЕМ.">LET'S CUT<br>SOMETHING UP.</h2>
  <p data-en="Tell us about your business&nbsp;— we'll tell you what it looks like in motion." data-ru="Расскажите о своём бизнесе&nbsp;— мы покажем, как это выглядит в движении.">Tell us about your business&nbsp;— we'll tell you what it looks like in motion.</p>
  <a href="mailto:hello@animationdesignbureau.studio" class="btn">hello@animationdesignbureau.studio</a>
</section>

<footer>
  <div class="foot-grid">
    <div class="foot-col">
      <h4>ANIMATION STUDIO</h4>
      <a href="#work" data-en="Work" data-ru="Работы">Work</a>
      <a href="#services" data-en="Services" data-ru="Услуги">Services</a>
      <a href="#process" data-en="Process" data-ru="Процесс">Process</a>
    </div>
    <div class="foot-col">
      <h4 data-en="STUDIO" data-ru="СТУДИЯ">STUDIO</h4>
      <a href="#contact" data-en="Start a project" data-ru="Начать проект">Start a project</a>
      <a href="mailto:hello@animationdesignbureau.studio">hello@animationdesignbureau.studio</a>
    </div>
    <div class="foot-col">
      <h4 data-en="FOLLOW" data-ru="МЫ В СЕТИ">FOLLOW</h4>
      <a href="#">Instagram</a>
      <a href="#">Behance</a>
      <a href="#">LinkedIn</a>
    </div>
  </div>
  <div class="foot-bottom">
    <span data-en="© 2026 Animation Studio. All scraps reserved." data-ru="© 2026 Animation Studio. Все вырезки защищены.">© 2026 Animation Studio. All scraps reserved.</span>
    <span data-en="Cut, pasted &amp; animated in-house." data-ru="Вырезано, склеено и анимировано у нас в студии.">Cut, pasted &amp; animated in-house.</span>
  </div>
</footer>

<div class="video-modal" id="videoModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="videoModalTitle">
  <div class="video-modal__dialog">
    <div class="video-modal__bar">
      <div class="video-modal__title" id="videoModalTitle">Case video</div>
      <button class="video-modal__close" type="button" aria-label="Close video">×</button>
    </div>
    <video class="video-modal__video" controls playsinline preload="metadata"></video>
  </div>
</div>`;
  }

  function initInteractions() {
  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  // hero mouse parallax on scraps
  const scrapField = document.querySelector('.scrap-field');
  const hero = document.querySelector('.hero');
  if(hero && scrapField){
    hero.addEventListener('mousemove', (e)=>{
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left)/rect.width - 0.5;
      const y = (e.clientY - rect.top)/rect.height - 0.5;
      scrapField.querySelectorAll('.scrap').forEach((s, i)=>{
        const depth = (i+1)*10;
        s.style.setProperty('--px', (x*depth)+'px');
        s.style.setProperty('--py', (y*depth)+'px');
        if(!s.dataset.dragging && !s.dataset.wasDragged){
          s.style.transform = (s.style.transform || '').replace(/translate\([^)]*\)/,'') ;
          s.style.marginLeft = (x*depth)+'px';
          s.style.marginTop = (y*depth)+'px';
        }
      });
    });
  }

  // draggable scraps&nbsp;— position stays relative to the hero, so it scrolls
  // away with the section instead of sticking to the viewport after a drag.
  document.querySelectorAll('.draggable').forEach(el=>{
    let offsetX=0, offsetY=0, dragging=false;
    el.addEventListener('pointerdown', (e)=>{
      dragging = true;
      el.dataset.dragging = "1";
      el.setPointerCapture(e.pointerId);
      const heroRect = hero.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      offsetX = e.clientX - elRect.left;
      offsetY = e.clientY - elRect.top;
      el.style.position = 'absolute';
      el.style.left = (elRect.left - heroRect.left) + 'px';
      el.style.top = (elRect.top - heroRect.top) + 'px';
      el.style.right = 'auto'; el.style.margin = '0';
      el.style.zIndex = 600;
    });
    el.addEventListener('pointermove', (e)=>{
      if(!dragging) return;
      const heroRect = hero.getBoundingClientRect();
      el.style.left = (e.clientX - heroRect.left - offsetX) + 'px';
      el.style.top = (e.clientY - heroRect.top - offsetY) + 'px';
    });
    const stop = (e)=>{
      dragging = false;
      el.dataset.wasDragged = "1";
      delete el.dataset.dragging;
      try{ el.releasePointerCapture(e.pointerId); }catch(err){}
    };
    el.addEventListener('pointerup', stop);
    el.addEventListener('pointercancel', stop);
  });

  // language switch (EN / RU)
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

  function updateMeta(selector, value){
    const el = document.querySelector(selector);
    if(el) el.setAttribute('content', value);
  }

  function applySeoLang(lang){
    const seo = seoContent[lang] || seoContent.en;
    document.title = seo.title;
    updateMeta('meta[name="description"]', seo.description);
    updateMeta('meta[property="og:title"]', seo.title);
    updateMeta('meta[property="og:description"]', seo.ogDescription);
    updateMeta('meta[property="og:locale"]', seo.locale);
    updateMeta('meta[name="twitter:title"]', seo.title);
    updateMeta('meta[name="twitter:description"]', seo.ogDescription);
  }

  let currentLang = 'ru';
  applyLang('ru');
  function applyLang(lang){
    document.querySelectorAll('[data-en]').forEach(el=>{
      el.textContent = el.dataset[lang] || el.dataset.en;
    });
    document.querySelectorAll('[data-en-html]').forEach(el=>{
      el.innerHTML = el.dataset[lang+'Html'] || el.dataset.enHtml;
    });
    const en = document.getElementById('cutTitleEn');
    const ru = document.getElementById('cutTitleRu');
    if(en && ru){
      en.style.display = lang === 'en' ? 'flex' : 'none';
      ru.style.display = lang === 'ru' ? 'flex' : 'none';
    }
    document.querySelectorAll('.lang-option').forEach(o=>{
      o.classList.toggle('active', o.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
    applySeoLang(lang);
    currentLang = lang;
  }
  const langToggle = document.getElementById('langToggle');
  if(langToggle){
    langToggle.addEventListener('click', ()=> applyLang(currentLang === 'en' ? 'ru' : 'en'));
  }

  // portfolio videos and modal
  const caseClips = document.querySelectorAll('.clip[data-video]');
  const videoModal = document.getElementById('videoModal');
  const modalVideo = videoModal?.querySelector('.video-modal__video');
  const modalTitle = document.getElementById('videoModalTitle');
  const closeModalBtn = videoModal?.querySelector('.video-modal__close');

  caseClips.forEach(clip=>{
    const preview = clip.querySelector('video');
    clip.addEventListener('mouseenter', ()=> preview?.play().catch(()=>{}));
    clip.addEventListener('mouseleave', ()=>{
      if(preview){ preview.pause(); preview.currentTime = 0; }
    });
    clip.addEventListener('click', ()=>{
      if(!videoModal || !modalVideo) return;
      const tag = clip.querySelector('.tag');
      modalTitle.textContent = tag?.textContent || 'Case video';
      modalVideo.src = clip.dataset.video;
      videoModal.classList.add('is-open');
      videoModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      modalVideo.play().catch(()=>{});
    });
  });

  function closeVideoModal(){
    if(!videoModal || !modalVideo) return;
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  closeModalBtn?.addEventListener('click', closeVideoModal);
  videoModal?.addEventListener('click', (e)=>{
    if(e.target === videoModal) closeVideoModal();
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && videoModal?.classList.contains('is-open')) closeVideoModal();
  });

  // mobile nav toggle styling
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width:900px){
      nav.links.open{
        display:flex !important; position:fixed; top:64px; left:0; right:0;
        background:var(--canvas); flex-direction:column; padding:1.5rem 6vw;
        border-bottom:3px solid var(--paper); z-index:400;
      }
    }
  `;
  document.head.appendChild(style);
  }

  function launchApp() {
    const root = document.getElementById('app-root');
    if(!root) return;

    if(window.Ext && Ext.application) {
      Ext.application({
        name: 'AnimationStudio',
        launch: function() {
          Ext.create('Ext.container.Container', {
            renderTo: root,
            cls: 'animation-studio-app',
            html: renderMarkup(),
            listeners: {
              afterrender: initInteractions,
              single: true
            }
          });
        }
      });
      return;
    }

    root.innerHTML = renderMarkup();
    initInteractions();
  }

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', launchApp);
  } else {
    launchApp();
  }
}());
