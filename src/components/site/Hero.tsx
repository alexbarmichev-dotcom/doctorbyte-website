import dropImg from '@/assets/hero-drop-nurse.png';
import { APP_NAME, APP_URL } from './constants';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden px-6 pb-24 pt-32 md:px-12 lg:px-[120px] lg:pb-[58px] lg:pt-[46px]"
    >
      <div className="hero-haze" aria-hidden="true" />

      <p className="eyebrow mt-16 animate-rise lg:mt-[118px] text-center text-base">{APP_NAME}</p>

      <h1 className="mt-7 max-w-[15em] animate-rise font-head font-light leading-[1.08] tracking-[-0.03em] [animation-delay:.12s] sm:text-[3rem] lg:mt-[30px] lg:text-[var(--hero-size-head)] text-center text-3xl">Делаем расшифровку медицинских анализов на понятном языке. Сохраним анализы и сравним новые с прежними. Покажем динамику здоровья!</h1>

      <div className="mt-7 max-w-[30em] animate-rise leading-[1.6] text-muted-foreground [animation-delay:.3s] lg:mt-[30px]">
        <p>ДокторБайт - Знай свои показатели. Управляй своим здоровьем.</p>
        <p className="mt-4 text-[0.9rem] tracking-[0.02em] text-muted-foreground/85">
          ✓ Дневник здоровья ✓ Графики динамики ✓ Тренды ✓ PDF для врача
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
        <img src={dropImg} alt="" className="hero-drop-img mx-[54px] px-0" />
      </div>

      <div className="mt-24 text-[0.74rem] uppercase tracking-[0.18em] text-muted-foreground lg:absolute lg:bottom-[46px] lg:left-[120px] lg:mt-0">
        Биохимия · Кабинет · Динамика
      </div>
    </section>
  );
};

export default Hero;