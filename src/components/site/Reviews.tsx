import Section from './Section';

const REVIEWS = [
  {
    text: 'Сдаю кровь четыре раза в год из-за щитовидной железы. Раньше бланки лежали в трёх местах, теперь вся история в одном списке, и я вижу линию, а не отдельные цифры.',
    name: 'Ирина',
    role: '52 года, наблюдается у эндокринолога',
  },
  {
    text: 'Понравилось, что нет запугивания. Про каждое отклонение написано спокойно: что это, насколько существенно и стоит ли идти к врачу прямо сейчас.',
    name: 'Максим',
    role: '38 лет, регулярный чекап',
  },
  {
    text: 'Веду ферритин и витамин D третий год. Сравнение до и после курса — ровно то, ради чего я это всё и затевал.',
    name: 'Дмитрий',
    role: '31 год, триатлон',
  },
  {
    text: 'Список вопросов к врачу — неожиданно полезная штука. Пришла на приём с одной страницей, уложились в пятнадцать минут и всё обсудили.',
    name: 'Ольга',
    role: '47 лет, профилактика',
  },
  {
    text: 'Пациенты приходят с нормальной историей показателей вместо пачки мятых распечаток. Экономит время на приёме, рекомендую своим.',
    name: 'Сергей Анатольевич',
    role: 'терапевт, частная клиника',
  },
];

const Reviews = () => (
  <Section
    id="reviews"
    surface
    eyebrow="Отзывы"
    title="Что говорят те, кто уже наблюдает за собой"
  >
    <div className="columns-1 gap-px md:columns-2 lg:columns-3 [&>*]:mb-px">
      {REVIEWS.map((r) => (
        <figure
          key={r.name}
          className="break-inside-avoid border border-border bg-background p-8 transition-colors duration-500 hover:bg-card lg:p-10"
        >
          <blockquote className="font-head text-[1.02rem] font-normal leading-[1.6] tracking-[-0.01em]">
            «{r.text}»
          </blockquote>
          <figcaption className="mt-8 border-t border-border pt-5">
            <span className="block text-[0.9rem]">{r.name}</span>
            <span className="mt-1 block text-[0.8rem] tracking-[0.04em] text-muted-foreground">
              {r.role}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  </Section>
);

export default Reviews;
