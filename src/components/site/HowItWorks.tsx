import Icon from '@/components/ui/icon';
import Section from './Section';

const STEPS = [
  {
    n: '01',
    icon: 'ScanLine',
    title: 'Загрузите бланк',
    text: 'Фото, PDF или скан из любой лаборатории. Приложение само распознаёт показатели, единицы и референсные интервалы.',
  },
  {
    n: '02',
    icon: 'BookOpen',
    title: 'Получите разбор',
    text: 'Каждая строка — обычными словами: что за показатель, о чём говорит отклонение и насколько оно заметное.',
  },
  {
    n: '03',
    icon: 'TrendingUp',
    title: 'Смотрите динамику',
    text: 'Новый анализ ложится рядом с прошлыми. Видно линию изменений за месяцы и годы, а не одну случайную цифру.',
  },
];

const HowItWorks = () => (
  <Section
    id="how"
    eyebrow="Как это работает"
    title="Три шага — и бланк перестаёт быть шифром"
    lead="Ничего заполнять вручную не нужно. От фотографии до понятного разбора проходит меньше минуты."
  >
    <ol className="grid gap-px border border-border bg-border md:grid-cols-3">
      {STEPS.map((step) => (
        <li key={step.n} className="group bg-background p-8 transition-colors duration-500 hover:bg-card lg:p-12">
          <div className="flex items-baseline justify-between">
            <span className="font-head text-[0.74rem] uppercase tracking-[0.24em] text-muted-foreground">
              {step.n}
            </span>
            <Icon
              name={step.icon}
              size={22}
              strokeWidth={1}
              className="text-primary opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
          <h3 className="mt-12 font-head text-xl font-normal tracking-[-0.01em]">{step.title}</h3>
          <p className="mt-4 text-[0.95rem] leading-[1.65] text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  </Section>
);

export default HowItWorks;
