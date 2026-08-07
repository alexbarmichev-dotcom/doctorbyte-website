import Icon from '@/components/ui/icon';
import Section from './Section';

const POINTS = [
  {
    icon: 'Lock',
    title: 'Шифрование на всех этапах',
    text: 'Файлы и результаты передаются по защищённому каналу и хранятся в зашифрованном виде. Доступ — только по вашему входу.',
  },
  {
    icon: 'Server',
    title: 'Серверы в России',
    text: 'Данные обрабатываются и хранятся на территории РФ в соответствии с 152-ФЗ «О персональных данных».',
  },
  {
    icon: 'EyeOff',
    title: 'Мы не продаём данные',
    text: 'Ни лабораториям, ни страховым, ни рекламодателям. Обезличенная статистика используется только для качества разбора.',
  },
  {
    icon: 'Trash2',
    title: 'Удаление в один шаг',
    text: 'В любой момент можно выгрузить всю историю или полностью удалить аккаунт вместе с загруженными бланками.',
  },
];

const Security = () => (
  <Section
    id="security"
    eyebrow="Безопасность ваших данных"
    title="Медицинская история — самое личное, что у вас есть"
    lead="Поэтому правила простые и без мелкого шрифта."
  >
    <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
      {POINTS.map((p) => (
        <div key={p.title} className="bg-background p-8 lg:p-10">
          <Icon name={p.icon} size={22} strokeWidth={1} className="text-primary" />
          <h3 className="mt-8 font-head text-lg font-normal tracking-[-0.01em]">{p.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-[1.65] text-muted-foreground">{p.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Security;
