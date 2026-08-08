import dropImg from '@/assets/hero-drop-red.png';
import { APP_NAME, APP_URL } from './constants';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden px-6 pb-24 pt-32 md:px-12 lg:px-[120px] lg:pb-[58px] lg:pt-[46px]"
    >
      <div className="hero-haze" aria-hidden="true" />

      <p className="eyebrow mt-16 animate-rise lg:mt-[118px]">{APP_NAME}</p>

      <h1 className="mt-7 max-w-[15em] animate-rise font-head text-[2.35rem] font-light leading-[1.08] tracking-[-0.03em] [animation-delay:.12s] sm:text-[3rem] lg:mt-[30px] lg:text-[var(--hero-size-head)]">
        Прочитать свой анализ
        <br />
        спокойно.
      </h1>

      <div className="mt-7 max-w-[34em] animate-rise leading-[1.6] text-muted-foreground [animation-delay:.3s] lg:mt-[30px]">
        <p>
          Доктор Бит — это персональный цифровой ассистент, подключённый к&nbsp;мировой
          медицинской базе знаний, который объясняет результаты ваших лабораторных исследований
          простым и&nbsp;понятным языком, помогает разобраться в&nbsp;своих показателях
          и&nbsp;грамотно подготовиться к&nbsp;визиту к&nbsp;врачу.
        </p>
        <p className="mt-4">Это ваш личный медицинский дневник, в котором:</p>
        <ul className="mt-3 space-y-1.5">
          <li>— История всех загруженных анализов</li>
          <li>
            — Наглядные графики динамики показателей во времени (холестерин, глюкоза, гемоглобин
            и&nbsp;т.д.)
          </li>
          <li>— Визуальные тренды: растёт / падает / стабильно</li>
          <li>— Экспорт истории в PDF для врача</li>
        </ul>
        <p className="mt-4">
          У вас есть возможность увидеть не разовый снимок показателей, а&nbsp;динамику здоровья
          в&nbsp;целом.
        </p>
      </div>

      <a
        className="tick-link mt-12 animate-rise text-[0.92rem] text-foreground [animation-delay:.46s] lg:mt-[54px]"
        href={APP_URL}
        target="_blank"
        rel="noopener"
      >
        <span className="tick" />
        Открыть Лаб-Гид.РФ
      </a>

      <div className="hero-drop-stage hidden lg:block" aria-hidden="true">
        <div className="hero-ring" />
        <div className="hero-contact" />
        <img src={dropImg} alt="" className="hero-drop-img" />
      </div>

      <div className="mt-24 text-[0.74rem] uppercase tracking-[0.18em] text-muted-foreground lg:absolute lg:bottom-[46px] lg:left-[120px] lg:mt-0">
        Биохимия · Кабинет · Динамика
      </div>
    </section>
  );
};

export default Hero;