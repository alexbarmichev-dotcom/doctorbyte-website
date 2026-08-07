import { APP_NAME, APP_URL } from './constants';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden px-6 pb-24 pt-32 md:px-12 lg:px-[120px] lg:pb-[58px] lg:pt-[46px]"
    >
      <div className="hero-haze" aria-hidden="true" />

      <p className="eyebrow mt-16 animate-rise lg:mt-[118px]">{APP_NAME}</p>

      <h1 className="mt-7 max-w-[15em] animate-rise font-head text-[2.35rem] font-extralight leading-[1.08] tracking-[-0.03em] [animation-delay:.12s] sm:text-[3rem] lg:mt-[30px] lg:text-[var(--hero-size-head)]">
        Прочитать свой анализ
        <br />
        спокойно.
      </h1>

      <p className="mt-7 max-w-[27em] animate-rise leading-[1.6] text-muted-foreground [animation-delay:.3s] lg:mt-[30px]">
        Разбираем каждую строку бланка обычными словами, помним прошлые сдачи и&nbsp;показываем,
        что&nbsp;изменилось за&nbsp;год.
      </p>

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
        <div className="hero-drop" />
      </div>

      <div className="mt-24 text-[0.74rem] uppercase tracking-[0.18em] text-muted-foreground lg:absolute lg:bottom-[46px] lg:left-[120px] lg:mt-0">
        Биохимия · Кабинет · Динамика
      </div>
    </section>
  );
};

export default Hero;
