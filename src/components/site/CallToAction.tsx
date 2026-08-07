import useReveal from '@/hooks/use-reveal';
import Icon from '@/components/ui/icon';
import { APP_URL } from './constants';

const CallToAction = () => {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section id="cta" className="relative isolate overflow-hidden border-t border-border">
      <div className="hero-haze" aria-hidden="true" />
      <div
        ref={ref}
        className={`${className} mx-auto max-w-[1400px] px-6 py-28 text-center md:px-12 lg:px-[120px] lg:py-[150px]`}
      >
        <p className="eyebrow">Лаб-Гид.РФ</p>
        <h2 className="mx-auto mt-8 max-w-[16em] font-head text-[2rem] font-light leading-[1.1] tracking-[-0.03em] sm:text-[2.8rem]">
          Следующий бланк уже не будет непонятным.
        </h2>
        <p className="mx-auto mt-7 max-w-[30em] leading-[1.65] text-muted-foreground">
          Загрузите первый анализ бесплатно — и посмотрите, как выглядит ваша история здоровья,
          собранная в одном месте.
        </p>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener"
          className="tick-link mx-auto mt-14 text-[0.95rem] text-foreground"
        >
          <span className="tick" />
          Перейти в Лаб-Гид.РФ
          <Icon name="ArrowUpRight" size={17} strokeWidth={1.25} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
