import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Section from './Section';
import { APP_URL } from './constants';

const PLANS = [
  {
    name: 'Тихий старт',
    monthly: 0,
    yearly: 0,
    note: 'бесплатно',
    desc: 'Попробовать, как это читается.',
    features: ['1 бланк в месяц', 'Расшифровка основных показателей', 'Хранение истории 6 месяцев'],
  },
  {
    name: 'Кабинет',
    monthly: 290,
    yearly: 2490,
    note: 'популярный',
    desc: 'Для тех, кто сдаёт анализы регулярно.',
    features: [
      'Безлимитная загрузка бланков',
      'Полный разбор 200+ показателей',
      'Сравнение сдач и графики динамики',
      'Список вопросов к врачу',
      'Бессрочное хранение истории',
    ],
    accent: true,
  },
  {
    name: 'Семья и клиника',
    monthly: 690,
    yearly: 5900,
    note: 'до 5 профилей',
    desc: 'Для семьи, а также врачей и небольших клиник.',
    features: [
      'Всё из тарифа «Кабинет»',
      'До 5 профилей в одном аккаунте',
      'Выгрузка сводки в PDF для врача',
      'Приоритетная поддержка',
    ],
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <Section
      id="pricing"
      surface
      eyebrow="Цены и тарифы"
      title="Понятно и без скрытых списаний"
      lead="Начать можно бесплатно. Оплата — только когда история стала действительно нужна."
    >
      <div className="mb-12 inline-flex border border-border bg-background">
        {[
          { v: false, l: 'Помесячно' },
          { v: true, l: 'На год · −28%' },
        ].map((opt) => (
          <button
            key={opt.l}
            type="button"
            onClick={() => setYearly(opt.v)}
            className={`px-6 py-3 text-[0.82rem] tracking-[0.06em] transition-colors duration-500 ${
              yearly === opt.v
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {opt.l}
          </button>
        ))}
      </div>

      <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
        {PLANS.map((plan) => {
          const price = yearly ? plan.yearly : plan.monthly;
          return (
            <div
              key={plan.name}
              className={`flex flex-col p-8 lg:p-12 ${plan.accent ? 'bg-card' : 'bg-background'}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-head text-xl font-normal tracking-[-0.01em]">{plan.name}</h3>
                <span className="eyebrow shrink-0">{plan.note}</span>
              </div>

              <p className="mt-4 text-[0.92rem] text-muted-foreground">{plan.desc}</p>

              <p className="mt-10 font-head text-[2.6rem] font-light leading-none tracking-[-0.03em]">
                {price === 0 ? '0' : price.toLocaleString('ru-RU')}
                <span className="ml-2 align-middle text-base text-muted-foreground">
                  ₽ {price === 0 ? '' : yearly ? '/ год' : '/ мес'}
                </span>
              </p>

              <ul className="mt-10 flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[0.93rem] leading-[1.55]">
                    <Icon
                      name="Check"
                      size={15}
                      strokeWidth={1.25}
                      className="mt-[0.35em] shrink-0 text-primary"
                    />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={APP_URL}
                target="_blank"
                rel="noopener"
                className="tick-link mt-10 text-[0.88rem] text-foreground"
              >
                <span className="tick" />
                {price === 0 ? 'Попробовать бесплатно' : 'Выбрать тариф'}
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-[0.85rem] text-muted-foreground">
        Оплата картой, подписку можно отменить в один клик. Сервис не заменяет консультацию врача.
      </p>
    </Section>
  );
};

export default Pricing;