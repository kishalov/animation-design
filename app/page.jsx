'use client';

import { useEffect, useRef, useState } from 'react';

// Высококонверсионный SEO-контент, оптимизированный под стартапы и продуктовый маркетинг
const seoContent = {
  en: {
    title: 'Animation Studio — High-Impact Motion Design for Tech Startups & SaaS',
    description: 'We create premium explainer videos, slick interactive UI/UX animations, and photorealistic 3D product promos designed to drive conversions, hook investors, and stop the scroll.',
    ogDescription: 'We turn complex tech narratives into gorgeous, high-converting motion design. Built for startups that refuse to look average.',
    locale: 'en_US'
  },
  ru: {
    title: 'Animation Studio — Моушн-дизайн для взрывного роста стартапов и SaaS',
    description: 'Создаем премиальные эксплейнеры, плавную анимацию интерфейсов (UI/UX) и фотореалистичные 3D-демо продуктов для привлечения инвесторов, увеличения конверсии и остановки скролла.',
    ogDescription: 'Превращаем сложные технологические сценарии в эстетичный моушн-дизайн с высокой конверсией. Для стартапов, которые отказываются быть серыми.',
    locale: 'ru_RU'
  }
};

// Четыре ключевых направления работы студии с упором на современные IT-продукты
const services = [
  {
    num: '01',
    icon: 'play',
    enTitle: 'SaaS & Tech Explainers',
    ruTitle: 'Эксплейнеры для SaaS',
    enText: 'Turn complex technical architectures and data pipelines into a crystal-clear 60-second video that drives instant signups.',
    ruText: 'Превращаем сложные технические архитектуры и облачные процессы в понятные 60-секундные ролики, повышающие регистрацию.'
  },
  {
    num: '02',
    icon: 'phone',
    enTitle: 'Product Launch Promos',
    ruTitle: 'Промо запусков продуктов',
    enText: 'High-energy, cinematic 3D motion clips tailored to capture instant attention on Product Hunt, Twitter, and major platforms.',
    ruText: 'Динамичные 3D-ролики кинематографического уровня для яркого запуска на Product Hunt, в соцсетях и на презентациях.'
  },
  {
    num: '03',
    icon: 'target',
    enTitle: 'UI & Interaction Motion',
    ruTitle: 'Анимация UI и интерфейсов',
    enText: 'Bring your web app dashboards, mobile interactions, and digital platforms to life with buttery-smooth interface flows.',
    ruText: 'Оживляем веб-интерфейсы, дашборды приложений и мобильные сценарии с помощью идеально плавной плавающей графики.'
  },
  {
    num: '04',
    icon: 'product',
    enTitle: '3D & Hardware Rendering',
    ruTitle: '3D-презентация девайсов',
    enText: 'Showcase physical hardware, smart wearables, and premium microtech before they ever roll off the manufacturing line.',
    ruText: 'Демонстрируем физические устройства, умные девайсы и микроэлектронику в фотореалистичном 3D еще до запуска производства.'
  }
];

// Пошаговый пайплайн производства — прозрачный и понятный для фаундеров стартапов
const processSteps = [
  ['01', 'Script & Vision', 'Сценарий и концепт', 'We distill your product’s unique value proposition into a tight, engaging storytelling arc.', 'Выделяем ключевую ценность вашего продукта и упаковываем её в лаконичный, бьющий в цель сценарий.'],
  ['02', 'Premium Styleframes', 'Арт-дирекшн и стиль', 'We design fully custom visual directions and layouts tailored strictly to your brand aesthetic.', 'Разрабатываем уникальную визуальную концепцию и кадры, идеально отражающие ДНК вашего бренда.'],
  ['03', 'Motion & Sound Design', 'Анимация и саунд', 'We bring illustrations to life with flawless dynamic curves and deep cinematic sound effects.', 'Оживляем графику с помощью идеальной динамики и накладываем плотный, профессиональный звук.'],
  ['04', 'Multi-Format Delivery', 'Рендер и адаптация', 'We deliver pixel-perfect formats optimized for web, presentations, ad platforms, and investors.', 'Отдаем готовые файлы во всех нужных форматах для веба, рекламных кабинетов и питч-деков.']
];

// Высококачественные CDN-видео петли моушн-дизайна, заменяющие локальные заглушки
const cases = [
  ['https://assets.mixkit.co/videos/preview/mixkit-rotating-technological-glowing-elements-41712-large.mp4', 'Aether SaaS — Interactive Dashboard, 12s', 'Aether SaaS — Интерактивный интерфейс, 12с'],
  ['https://assets.mixkit.co/videos/preview/mixkit-technological-blue-glowing-particles-41715-large.mp4', 'Zenith Pay — Crypto Ledger Explainer', 'Zenith Pay — Эксплейнер крипто-кошелька'],
  ['https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-neon-city-street-42254-large.mp4', 'Nova Wearables — Smart Ring Promo, 15s', 'Nova Wearables — Промо смарт-кольца, 15с'],
  ['https://assets.mixkit.co/videos/preview/mixkit-fluid-wave-background-41711-large.mp4', 'Vellum AI — LLM Network Visualization', 'Vellum AI — Визуализация нейросети ИИ'],
  ['https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-1611-large.mp4', 'Spectra OS — Desktop Environment Teaser', 'Spectra OS — Тизер десктопной ОС'],
  ['https://assets.mixkit.co/videos/preview/mixkit-futuristic-scifi-digital-city-43187-large.mp4', 'Lumina Health — Biotech Showcase', 'Lumina Health — Демо биотех-интерфейса']
];

// Живые отзывы от фаундеров и руководителей технологических стартапов
const testimonials = [
  ['They transformed our complex developer platform into a stunning 45-second explainer. Our conversion rates on cold outreach doubled in under a month.', 'Они превратили нашу сложную платформу для разработчиков в потрясающий 45-секундный ролик. Конверсия холодных писем выросла вдвое меньше чем за месяц.', '— Alex Rivera, Co-Founder, Aether SaaS', '— Алекс Ривера, сооснователь Aether SaaS'],
  ['The attention to detail in UI animation was outstanding. They made our web app look 10x sleeker, more intuitive, and highly professional.', 'Внимание к деталям в анимации UI просто выдающееся. Наше веб-приложение стало выглядеть в 10 раз премиальнее, понятнее и профессиональнее.', '— Sarah Chen, VP of Product, Zenith Pay', '— Сара Чен, вице-президент по продукту Zenith Pay'],
  ['Super fast iterations, stellar custom sound design, and a team that genuinely understands how startups sell. Highly recommended.', 'Быстрые итерации, превосходный кастомный саунд-дизайн и команда, которая реально понимает, как стартапам продавать свой продукт.', '— Marcus Thorne, Growth Lead, Nova Wearables', '— Маркус Торн, директор по росту Nova Wearables']
];

const siteColors = ['#ff5a2a', '#2e4fe0', '#f2c230', '#f3ecdd'];

const achievementPhrases = [
  'Так держать!',
  'Новый рекорд!',
  'Комбо пошло!',
  'Красиво лопнуло!',
  'Скорость растёт!',
  'Вот это клик!',
  'XP машина!',
  'Уровень ап!'
];

const failPhrases = [
  'УПС!',
  'БАБАХ!',
  'БРАК!',
  'ГЛИТЧ!',
  'АККУРАТНО!',
  'НЕ ТОТ КАДР!'
];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

// Уникальный идентификатор
function uid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// Прогрессия опыта
function xpForLevel(level) {
  return Math.floor(42 * Math.pow(level - 1, 1.65));
}

function levelFromXp(xp) {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level += 1;
  return level;
}

function gameConfig(level) {
  if (level >= 20) {
    return { count: 6, minSize: 34, maxSize: 74, minDuration: 4.8, maxDuration: 8.5, gradients: true, evasive: true, pulse: true };
  }
  if (level >= 11) {
    return { count: 5, minSize: 38, maxSize: 80, minDuration: 6, maxDuration: 10, gradients: true, evasive: false, pulse: false };
  }
  if (level >= 6) {
    return { count: 5, minSize: 30, maxSize: 68, minDuration: 7, maxDuration: 12, gradients: true, evasive: false, pulse: false };
  }
  return { count: 4, minSize: 50, maxSize: 85, minDuration: 10, maxDuration: 15, gradients: false, evasive: false, pulse: false };
}

function blobPath(pointCount = 9) {
  const points = Array.from({ length: pointCount }, (_, index) => {
    const angle = (Math.PI * 2 * index) / pointCount;
    const radius = randomBetween(28, 48);
    return {
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius
    };
  });

  return points.map((point, index) => {
    const next = points[(index + 1) % points.length];
    const midX = (point.x + next.x) / 2;
    const midY = (point.y + next.y) / 2;
    return `${index === 0 ? `M ${midX} ${midY}` : ''} Q ${next.x} ${next.y} ${(next.x + points[(index + 2) % points.length].x) / 2} ${(next.y + points[(index + 2) % points.length].y) / 2}`;
  }).join(' ') + ' Z';
}

function createShape(level, sharedColor) {
  const config = gameConfig(level);
  
  // Прогрессивный выбор доступных цветов для плавного роста разнообразия
  let allowedColors = [siteColors[0]]; // Всегда доступен фирменный оранжевый (#ff5a2a)
  if (level >= 2) {
    allowedColors.push(siteColors[1]); // На 2 уровне добавляем кобальт (#2e4fe0)
  }
  if (level >= 3) {
    allowedColors.push(siteColors[2]); // На 3 уровне добавляем желтый (#f2c230)
  }
  // Бумажно-белый цвет (#f3ecdd) для контраста
  allowedColors.push(siteColors[3]);

  // Выбираем случайный цвет из разблокированного пула
  const colorA = allowedColors[Math.floor(Math.random() * allowedColors.length)];
  let colorB = siteColors[Math.floor(Math.random() * siteColors.length)];
  if (colorB === colorA) colorB = '#171512';

  // Прогрессивное открытие градиентов
  let hasGradient = false;
  if (level >= 4) {
    // На 4 уровне шанс 25%, на 5 уровне - 40%, на 6+ - согласно дефолтному конфигу
    const gradientChance = level === 4 ? 0.25 : level === 5 ? 0.40 : 0.65;
    hasGradient = Math.random() < gradientChance;
  } else if (config.gradients) {
    hasGradient = true;
  }

  // Фигуры спавнятся внутри правого контейнера (проценты по отношению к .game-sandbox)
  return {
    id: uid(),
    x: randomBetween(5, 80),
    y: randomBetween(5, 75),
    size: randomBetween(config.minSize, config.maxSize),
    colorA,
    colorB,
    gradient: hasGradient,
    path: blobPath(Math.floor(randomBetween(7, 12))),
    duration: randomBetween(config.minDuration, config.maxDuration),
    delay: randomBetween(-8, 0),
    floatX: randomBetween(-25, 25),
    floatY: randomBetween(-20, 20),
    rotate: randomBetween(-20, 20)
  };
}

function shapeXp(level) {
  return 5 + Math.floor(level / 3) * 2;
}

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

export default function App() {
  const [lang, setLang] = useState('ru');
  const [modalCase, setModalCase] = useState(null);
  const [xp, setXp] = useState(0);
  const [shapes, setShapes] = useState([]);
  const [bombs, setBombs] = useState([]);
  const [particles, setParticles] = useState([]);
  const [floatingScores, setFloatingScores] = useState([]);
  const [achievement, setAchievement] = useState(null);
  const [mouse, setMouse] = useState(null);
  const gameContainerRef = useRef(null);
  const sharedShapeColor = useRef(siteColors[Math.floor(Math.random() * siteColors.length)]);

  const t = (en, ru) => (lang === 'ru' ? ru : en);
  const level = levelFromXp(xp);
  const nextLevelXp = xpForLevel(level + 1);
  const previousLevelXp = xpForLevel(level);
  const levelProgress = Math.min(100, Math.round(((xp - previousLevelXp) / Math.max(1, nextLevelXp - previousLevelXp)) * 100));
  const currentConfig = gameConfig(level);

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
    setShapes((currentShapes) => {
      const config = gameConfig(level);
      if (currentShapes.length >= config.count) return currentShapes.slice(0, config.count);
      return [
        ...currentShapes,
        ...Array.from({ length: config.count - currentShapes.length }, () => createShape(level, sharedShapeColor.current))
      ];
    });
  }, [level]);

  // Логика циклического спавна бомб в зависимости от уровня прогрессии
  useEffect(() => {
    if (level < 2) {
      setBombs([]);
      return undefined; // На первом уровне бомбы не спавнятся
    }

    // Лимиты и интервалы, зависящие от уровня
    const maxActiveBombs = Math.min(1 + Math.floor((level - 2) / 3), 4); // Lvl 2: 1, Lvl 5: 2, Lvl 8: 3, Lvl 11+: 4
    const spawnCheckRate = Math.max(2500, 7000 - level * 300); // Чем выше уровень, тем чаще проверки (от 6.7с до 2.5с)

    const spawnInterval = setInterval(() => {
      setBombs((currentBombs) => {
        if (currentBombs.length >= maxActiveBombs) return currentBombs;

        // Шанс успешного спавна возрастает с уровнем
        const spawnChance = Math.min(0.3 + level * 0.05, 0.8);
        if (Math.random() > spawnChance) return currentBombs;

        // Создаем новую бомбу
        const duration = randomBetween(5, 8); // Время жизни бомбы на экране
        const newBomb = {
          id: uid(),
          x: randomBetween(8, 78),
          y: randomBetween(8, 70),
          size: randomBetween(54, 72),
          floatX: randomBetween(-30, 30),
          floatY: randomBetween(-30, 30),
          rotate: randomBetween(-45, 45),
          duration
        };

        // JS-таймер удаления синхронизирован с длительностью CSS-анимации
        setTimeout(() => {
          setBombs((latest) => latest.filter((b) => b.id !== newBomb.id));
        }, duration * 1000);

        return [...currentBombs, newBomb];
      });
    }, spawnCheckRate);

    return () => clearInterval(spawnInterval);
  }, [level]);

  useEffect(() => {
    const timers = [];
    particles.forEach((particle) => {
      timers.push(setTimeout(() => setParticles((items) => items.filter((item) => item.id !== particle.id)), 900));
    });
    floatingScores.forEach((score) => {
      timers.push(setTimeout(() => setFloatingScores((items) => items.filter((item) => item.id !== score.id)), 950));
    });
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [particles, floatingScores]);

  useEffect(() => {
    if (!achievement) return undefined;
    const timer = setTimeout(() => setAchievement(null), 1800);
    return () => clearTimeout(timer);
  }, [achievement]);

  const handleGameMouseMove = (event) => {
    if (!gameContainerRef.current) return;
    const rect = gameContainerRef.current.getBoundingClientRect();
    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100
    });
  };

  const popShape = (shape, event) => {
    event.stopPropagation();
    const gameContainer = gameContainerRef.current;
    const rect = gameContainer?.getBoundingClientRect();
    const burstX = rect ? event.clientX - rect.left : 0;
    const burstY = rect ? event.clientY - rect.top : 0;
    const points = shapeXp(level);
    const previousLevel = level;

    setShapes((items) => [
      ...items.filter((item) => item.id !== shape.id),
      createShape(level, sharedShapeColor.current)
    ].slice(0, gameConfig(level).count));

    setParticles((items) => [
      ...items,
      ...Array.from({ length: 24 }, () => ({
        id: uid(),
        x: burstX,
        y: burstY,
        color: shape.gradient ? shape.colorB : shape.colorA,
        dx: randomBetween(-170, 170),
        dy: randomBetween(-170, 170),
        size: randomBetween(10, 20),
        isBomb: false
      }))
    ]);

    setFloatingScores((items) => [
      ...items,
      { id: uid(), x: burstX, y: burstY, value: points, isNegative: false }
    ]);

    setXp((currentXp) => {
      const nextXp = currentXp + points;
      const nextLevel = levelFromXp(nextXp);
      if (nextLevel > previousLevel || nextXp % 50 < points) {
        const phrase = achievementPhrases[Math.floor(Math.random() * achievementPhrases.length)];
        setAchievement({
          text: nextLevel > previousLevel ? `${phrase} LVL ${nextLevel}` : phrase,
          isFail: false
        });
      }
      return nextXp;
    });
  };

  // Метод лопания бомбы
  const popBomb = (bomb, event) => {
    event.stopPropagation();
    const gameContainer = gameContainerRef.current;
    const rect = gameContainer?.getBoundingClientRect();
    const burstX = rect ? event.clientX - rect.left : 0;
    const burstY = rect ? event.clientY - rect.top : 0;
    
    // Существенный штраф, зависящий от уровня прогрессии
    const penalty = -(15 + level * 5); 
    const previousLevel = level;

    // Удаляем бомбу из стейта
    setBombs((items) => items.filter((item) => item.id !== bomb.id));

    // Спавним грубые "глитчевые" оранжево-черные квадратные частицы
    setParticles((items) => [
      ...items,
      ...Array.from({ length: 28 }, () => ({
        id: uid(),
        x: burstX,
        y: burstY,
        color: '#ff5a2a', // Ярко-оранжевый сигнальный цвет
        dx: randomBetween(-200, 200),
        dy: randomBetween(-200, 200),
        size: randomBetween(12, 24),
        isBomb: true
      }))
    ]);

    // Добавляем отрицательный счетчик
    setFloatingScores((items) => [
      ...items,
      { id: uid(), x: burstX, y: burstY, value: penalty, isNegative: true }
    ]);

    // Вычитаем очки, не опускаясь ниже 0
    setXp((currentXp) => {
      const nextXp = Math.max(0, currentXp + penalty);
      const nextLevel = levelFromXp(nextXp);
      
      const phrase = failPhrases[Math.floor(Math.random() * failPhrases.length)];
      setAchievement({
        text: nextLevel < previousLevel ? `LEVEL DOWN! ⬇` : phrase,
        isFail: true
      });
      
      return nextXp;
    });
  };

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

      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-grid-layout">
            
            {/* Левая часть: заголовки и тексты */}
            <div className="hero-content-side">
              <span className="eyebrow">{t('MOTION DESIGN FOR TECH & STARTUPS', 'МОУШН-ДИЗАЙН ДЛЯ ТЕХНОЛОГИЙ И СТАРТАПОВ')}</span>
              <h1 className="cut-title" style={{ display: lang === 'en' ? 'flex' : 'none' }}>
                <span className="row"><span className="paper-tile">STOP</span><span className="orange-tile">THE</span></span>
                <span className="row"><span className="yellow-tile">SCROLL,</span><span className="cobalt-tile">NOT</span></span>
                <span className="row"><span className="paper-tile">THE</span><span className="orange-tile">SALE.</span></span>
              </h1>
              <h1 className="cut-title" style={{ display: lang === 'ru' ? 'flex' : 'none' }}>
                <span className="row"><span className="paper-tile">СТОП</span><span className="orange-tile">СКРОЛЛУ,</span></span>
                <span className="row"><span className="yellow-tile">НЕ</span><span className="cobalt-tile">ПРОДАЖАМ.</span></span>
              </h1>
              <p className="hero-sub">{t('We translate complex tech narratives into sleek interactive UI flows, 3D product renders, and high-converting explainers. Tailored specifically for fast-growing startups that refuse to look average.', 'Мы переводим сложные технологические сценарии на язык плавной UI/UX анимации, 3D-рендеров продуктов и взрывных эксплейнеров. Создано для быстрорастущих стартапов, которые отказываются выглядеть посредственно.')}</p>
              <div className="hero-cta">
                <a href="#contact" className="btn">{t('Start a project', 'Начать проект')}</a>
                <a href="#work" className="btn ghost">{t('See the work', 'Смотреть работы')}</a>
              </div>
              <div className="scroll-cue">
                <span className="arrow">✂</span> 
                <span>{t('pop the blobs, avoid the glitch-bombs!', 'лопай фигуры, избегай бомб-глитчей!')}</span>
              </div>
            </div>

            {/* Правая часть: Локализованный контейнер игры */}
            <div className="hero-game-side">
              <div 
                className="game-sandbox" 
                ref={gameContainerRef}
                onMouseMove={handleGameMouseMove} 
                onMouseLeave={() => setMouse(null)}
                aria-label={t('XP blob popping mini-game', 'Мини-игра: лопайте XP-фигуры')}
              >
                {achievement && (
                  <div className={`achievement-pop ${achievement.isFail ? 'is-fail' : ''}`} aria-live="polite">
                    {achievement.text}
                  </div>
                )}
                
                {shapes.map((shape) => {
                  const centerX = shape.x;
                  const centerY = shape.y;
                  let dodgeX = 0;
                  let dodgeY = 0;
                  if (currentConfig.evasive && mouse) {
                    const dx = centerX - mouse.x;
                    const dy = centerY - mouse.y;
                    const distance = Math.max(1, Math.hypot(dx, dy));
                    if (distance < 18) {
                      const force = (18 - distance) * 1.8;
                      dodgeX = (dx / distance) * force;
                      dodgeY = (dy / distance) * force;
                    }
                  }

                  return (
                    <button
                      className={`game-shape ${currentConfig.pulse ? 'is-pulsing' : ''}`}
                      type="button"
                      key={shape.id}
                      onClick={(event) => popShape(shape, event)}
                      aria-label={t(`Pop shape for ${shapeXp(level)} XP`, `Лопнуть фигуру за ${shapeXp(level)} XP`)}
                      style={{
                        left: `${shape.x}%`,
                        top: `${shape.y}%`,
                        width: `${shape.size}px`,
                        height: `${shape.size}px`,
                        '--float-x': `${shape.floatX}px`,
                        '--float-y': `${shape.floatY}px`,
                        '--dodge-x': `${dodgeX}px`,
                        '--dodge-y': `${dodgeY}px`,
                        '--shape-rotate': `${shape.rotate}deg`,
                        animationDuration: `${shape.duration}s`,
                        animationDelay: `${shape.delay}s`
                      }}
                    >
                      <svg viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <linearGradient id={`blob-gradient-${shape.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={shape.colorA} />
                            <stop offset="100%" stopColor={shape.colorB} />
                          </linearGradient>
                        </defs>
                        <path d={shape.path} fill={shape.gradient ? `url(#blob-gradient-${shape.id})` : shape.colorA} />
                      </svg>
                    </button>
                  );
                })}

                {/* Отрендеренные бомбы */}
                {bombs.map((bomb) => (
                  <button
                    className="game-bomb"
                    type="button"
                    key={bomb.id}
                    onClick={(event) => popBomb(bomb, event)}
                    aria-label={t('Avoid bomb! Click will reduce XP', 'Избегай бомбу! Нажатие отнимет XP')}
                    style={{
                      left: `${bomb.x}%`,
                      top: `${bomb.y}%`,
                      width: `${bomb.size}px`,
                      height: `${bomb.size}px`,
                      '--float-x': `${bomb.floatX}px`,
                      '--float-y': `${bomb.floatY}px`,
                      '--shape-rotate': `${bomb.rotate}deg`,
                      '--bomb-duration': `${bomb.duration}s`
                    }}
                  />
                ))}

                {particles.map((particle) => (
                  <span
                    className={`burst-particle ${particle.isBomb ? 'is-bomb-particle' : ''}`}
                    key={particle.id}
                    style={{
                      left: `${particle.x}px`,
                      top: `${particle.y}px`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      background: particle.color,
                      '--particle-x': `${particle.dx}px`,
                      '--particle-y': `${particle.dy}px`
                    }}
                  />
                ))}

                {floatingScores.map((score) => (
                  <span 
                    className={`floating-xp ${score.isNegative ? 'is-negative' : ''}`} 
                    key={score.id} 
                    style={{ left: `${score.x}px`, top: `${score.y}px` }}
                  >
                    {score.isNegative ? '' : '+'}{score.value} XP
                  </span>
                ))}

                {/* Табло счета аккуратно вписано внутрь контейнера */}
                <div className="xp-score">
                  <span>{t('Score', 'Счёт')}: {xp} XP</span>
                  <strong>LVL {level}</strong>
                  <div className="xp-progress" aria-hidden="true">
                    <span style={{ width: `${levelProgress}%` }} />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        
        {/* Инжектируем стили для шипастого комиксного взрыва прямо в компонент */}
        <style dangerouslySetInnerHTML={{ __html: `
          .achievement-pop.is-fail {
            background: #ff2d55 !important; /* Яркий комиксный красный */
            color: #ffffff !important;
            border: none !important;
            box-shadow: none !important;
            padding: 1.5rem 2.5rem !important;
            font-weight: 900 !important;
            border-radius: 0px !important;
            font-family: 'Nozhik', sans-serif !important;
            
            /* Тень для текста - жирная черная комиксная тень */
            text-shadow: 
              2.5px 2.5px 0px #1c1812,
              -1px -1px 0px #1c1812,
              1px -1px 0px #1c1812,
              -1px 1px 0px #1c1812,
              2.5px -1px 0px #1c1812 !important;
            
            /* Эффектная обводка сложными тенями по всему контуру многоугольника + сочная черная комиксная тень снизу-справа */
            filter: 
              drop-shadow(3px 0 0 #1c1812) 
              drop-shadow(-3px 0 0 #1c1812) 
              drop-shadow(0 3px 0 #1c1812) 
              drop-shadow(0 -3px 0 #1c1812) 
              drop-shadow(6px 7px 0 #1c1812) !important;
            
            /* 24-конечная взрывная комиксная звезда */
            clip-path: polygon(
              100% 50%, 93% 62%, 98% 75%, 85% 78%, 88% 93%, 73% 88%, 65% 100%, 53% 88%,
              45% 100%, 37% 88%, 22% 95%, 25% 80%, 10% 83%, 15% 68%, 0% 68%, 8% 50%,
              0% 32%, 15% 32%, 10% 17%, 25% 20%, 22% 5%, 37% 12%, 45% 0%, 53% 12%,
              65% 0%, 73% 12%, 88% 7%, 85% 22%, 98% 25%, 93% 38%
            ) !important;
            
            transform: translate(-50%, -50%) rotate(-4deg) scale(1.1) !important;
            animation: comicBurstPop 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.45) forwards !important;
          }

          @keyframes comicBurstPop {
            0% {
              transform: translate(-50%, -50%) rotate(12deg) scale(0);
              opacity: 0;
            }
            85% {
              transform: translate(-50%, -50%) rotate(-6deg) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) rotate(-4deg) scale(1.1);
              opacity: 1;
            }
          }
        ` }} />
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t('WHAT WE MAKE', 'ЧТО МЫ ДЕЛАЕМ')}</span>
            <h2>{t('Four ways to stand out', 'Четыре способа выделиться')}</h2>
            <p>{t("We focus purely on what drives product growth and engagement. Here is how we turn abstract code and complexity into high-impact visual design.", 'Мы фокусируемся только на том, что развивает продукт и вовлекает пользователей. Вот как мы упаковываем абстрактный код и сложные смыслы в понятную графику.')}</p>
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
            <h2>{t('From raw concept to final render', 'От первой идеи до финального кадра')}</h2>
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
            <span className="eyebrow">{t('SELECTED PORTFOLIO', 'ИЗБРАННЫЕ КЕЙСЫ')}</span>
            <h2>{t("High-performance visual stories", 'Проекты, которые приносят конверсию')}</h2>
            <p>{t("Interactive UI dashboards, dynamic SaaS explainers, and physics-defying 3D renders. Hover on any card to see them in action.", 'Интерактивные интерфейсы дашбордов, динамичные эксплейнеры и реалистичное 3D. Наведите курсор, чтобы запустить просмотр.')}</p>
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
            <span className="eyebrow">{t('CLIENT STORIES', 'ОТЗЫВЫ КЛИЕНТОВ')}</span>
            <h2>{t("What tech founders say", 'Что говорят фаундеры')}</h2>
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
        <span className="eyebrow" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>{t('READY TO BUILD YOUR NEXT MOTION COMPONENT?', 'ГОТОВЫ ЗАПУСТИТЬ СВОЙ СЛЕДУЮЩИЙ РОЛИК?')}</span>
        <h2>{t("LET'S BUILD SOMETHING STUNNING.", 'ДАВАЙТЕ СДЕЛАЕМ ЭТО КРАСИВО.')}</h2>
        <p>{t("Drop us a line about your tech product — we'll sketch a visual concept of how it should look in motion.", 'Опишите ваш ИТ-продукт в паре предложений — а мы предложим визуальный концепт того, как показать его в движении.')}</p>
        <a href="mailto:hello@animationstudio.design" className="btn">hello@animationstudio.design</a>
      </section>

      <footer>
        <div className="foot-grid">
          <div className="foot-col"><h4>ANIMATION STUDIO</h4><a href="#work">{t('Work', 'Работы')}</a><a href="#services">{t('Services', 'Услуги')}</a><a href="#process">{t('Process', 'Процесс')}</a></div>
          <div className="foot-col"><h4>{t('STUDIO', 'СТУДИЯ')}</h4><a href="#contact">{t('Start a project', 'Начать проект')}</a><a href="mailto:hello@animationstudio.design">hello@animationstudio.design</a></div>
          <div className="foot-col"><h4>{t('FOLLOW', 'МЫ В СЕТИ')}</h4><a href="#">Instagram</a><a href="#">Behance</a><a href="#">LinkedIn</a></div>
        </div>
        <div className="foot-bottom"><span>{t('© 2026 Animation Studio. All rights reserved.', '© 2026 Animation Studio. Все права защищены.')}</span><span>{t('Handcrafted motion with absolute precision.', 'Премиальный моушн-дизайн с абсолютной точностью.')}</span></div>
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