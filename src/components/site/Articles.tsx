import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import Section from './Section';
import { APP_URL } from './constants';

interface Article {
  tag: string;
  title: string;
  excerpt: string;
  body: string[];
}

const ARTICLES: Article[] = [
  {
    tag: 'Профилактика',
    title: 'Одна цифра ничего не значит',
    excerpt:
      'Отклонение в бланке пугает сильнее, чем стоит. Смысл появляется, когда рядом есть прошлые сдачи.',
    body: [
      'Биохимический показатель — это моментальный снимок. Он зависит от того, что вы ели накануне, сколько спали, тренировались ли за день до сдачи и даже от того, как долго пробирка ехала в лабораторию.',
      'Поэтому единичное значение «чуть выше нормы» само по себе почти ничего не говорит. Важно другое: как этот показатель вёл себя раньше и куда он движется. Стабильные 45 при верхней границе 40 — это одна история. Рост с 20 до 45 за полгода — совсем другая.',
      'Лаб-Гид.РФ хранит все ваши сдачи и строит линию по каждому показателю. Вместо тревожной точки вы видите направление — и понимаете, идти ли к врачу завтра или спокойно пересдать через три месяца.',
    ],
  },
  {
    tag: 'Хронические состояния',
    title: 'Когда анализы сдают регулярно',
    excerpt:
      'Диабет, щитовидная железа, печень: контроль важнее разового результата. Нужна история, а не стопка бумажек.',
    body: [
      'Если вы сдаёте анализы четыре раза в год, за пять лет накапливается двадцать бланков. Хранить их в папке, в галерее телефона и в мессенджере — значит гарантированно потерять половину.',
      'Личный медицинский кабинет собирает всё в одну ленту: бланки из разных лабораторий, выписки, заключения. Показатель можно открыть отдельно и увидеть его историю целиком.',
      'Перед приёмом приложение соберёт сводку на одну страницу: что изменилось с прошлого визита и о чём стоит спросить. Врач получит историю, а не разрозненные фотографии.',
    ],
  },
  {
    tag: 'Спорт и биохакинг',
    title: 'Как понять, что режим работает',
    excerpt:
      'Тренировки, добавки, питание — эффект видно не в самочувствии, а в динамике показателей за месяцы.',
    body: [
      'Субъективное «стало легче» — плохой измеритель. Ферритин, витамин D, липидный профиль, креатинкиназа реагируют на нагрузку и питание медленно и честно.',
      'Отметьте в приложении начало курса или смену режима — и точка появится прямо на графике. Через два-три замера станет видно, изменил ли эксперимент хоть что-то.',
      'Это тот же принцип, что в тренировочном дневнике: без записей прогресс кажется больше, чем он есть.',
    ],
  },
  {
    tag: 'После 45',
    title: 'Диспансеризация без нервов',
    excerpt:
      'Раз в год — базовый набор. Разбор простыми словами и список вопросов делают визит к врачу коротким и по делу.',
    body: [
      'После сорока пяти базовый биохимический профиль стоит сдавать ежегодно: глюкоза, липиды, печёночные ферменты, креатинин. Это недорого и занимает одно утро.',
      'Сложность обычно не в сдаче, а в том, что бланк непонятен, а на приёме половина вопросов вылетает из головы.',
      'Лаб-Гид.РФ переводит бланк на человеческий язык и заранее готовит список вопросов именно по вашим отклонениям. Приём проходит спокойнее — и вы уходите с ответами.',
    ],
  },
];

const Articles = () => {
  const [active, setActive] = useState<Article | null>(null);

  return (
    <Section
      id="articles"
      eyebrow="Короткие статьи"
      title="Четыре причины начать наблюдать за собой"
      lead="Читается за две минуты. Нажмите на карточку, чтобы открыть текст целиком."
    >
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {ARTICLES.map((a) => (
          <article key={a.title} className="bg-background">
            <button
              type="button"
              onClick={() => setActive(a)}
              className="group h-full w-full p-8 text-left transition-colors duration-500 hover:bg-card lg:p-12"
            >
              <span className="eyebrow">{a.tag}</span>
              <h3 className="mt-6 font-head text-xl font-normal leading-snug tracking-[-0.01em]">
                {a.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.65] text-muted-foreground">{a.excerpt}</p>
              <span className="tick-link mt-8 text-[0.82rem] tracking-[0.08em] text-foreground">
                <span className="tick" />
                Читать
              </span>
            </button>
          </article>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-none border-border bg-background">
          {active && (
            <>
              <DialogHeader>
                <span className="eyebrow text-left">{active.tag}</span>
                <DialogTitle className="pt-4 text-left font-head text-2xl font-normal leading-snug tracking-[-0.02em]">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="sr-only">{active.excerpt}</DialogDescription>
              </DialogHeader>
              <div className="space-y-5 pt-2 text-[0.97rem] leading-[1.7] text-muted-foreground">
                {active.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener"
                className="tick-link mt-4 text-[0.9rem] text-foreground"
              >
                <span className="tick" />
                Открыть Лаб-Гид.РФ
                <Icon name="ArrowUpRight" size={16} strokeWidth={1.25} />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
};

export default Articles;
