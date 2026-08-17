import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Section from './Section';
import DynamicsChart from './DynamicsChart';
import { APP_URL } from './constants';

const FEATURES = [
  {
    value: 'decode',
    tab: 'Расшифровка',
    icon: 'FileSearch',
    title: 'Биохимия построчно',
    text: 'АЛТ, АСТ, билирубин, глюкоза, липидный профиль, ферритин, креатинин — более 200 показателей. Для каждого: что это, зачем измеряют, что значит ваше значение и когда стоит показать врачу.',
    points: [
      'Учитываем пол, возраст и референсы вашей лаборатории',
      'Отмечаем пограничные значения, а не только «красное»',
      'Никаких диагнозов — только понятные объяснения',
    ],
  },
  {
    value: 'cabinet',
    tab: 'Медкабинет',
    icon: 'FolderLock',
    title: 'Все анализы в одном месте',
    text: 'Личный медицинский кабинет хранит бланки из разных лабораторий, выписки и заключения. История не теряется при смене клиники, а найти нужный результат можно за пару секунд.',
    points: [
      'Профили для всей семьи',
      'Поиск по показателю, дате и лаборатории',
      'Выгрузка истории одним PDF для врача',
    ],
  },
  {
    value: 'compare',
    tab: 'Сравнение',
    icon: 'GitCompareArrows',
    title: 'Прошлое рядом с настоящим',
    text: 'Сравнительный анализ показывает две сдачи бок о бок: что выросло, что вернулось в норму, что осталось прежним. Отдельно отмечаем изменения, которые выходят за пределы обычного разброса.',
    points: [
      'Разница в цифрах и процентах',
      'Пометки «в пределах нормы» и «стало заметно хуже/лучше»',
      'Короткий текстовый вывод по каждой паре',
    ],
  },
  {
    value: 'dynamics',
    tab: 'Динамика',
    icon: 'ChartLine',
    title: 'Линия вместо точки',
    text: 'График показателя во времени: видно тренд за год, сезонность и эффект от изменений образа жизни. Одна цифра пугает — линия объясняет.',
    points: [
      'Графики по любому показателю',
      'Отметки событий: курс лечения, диета, тренировки',
      'Прогнозная полоса нормы для вашего профиля',
    ],
  },
  {
    value: 'doctor',
    tab: 'К врачу',
    icon: 'ClipboardList',
    title: 'Список вопросов к врачу',
    text: 'Перед приёмом приложение собирает короткую выжимку: что изменилось, что стоит уточнить, какие обследования логично обсудить. Приём перестаёт быть импровизацией.',
    points: [
      'Персональный список вопросов',
      'Сводка на одну страницу для распечатки',
      'Напоминание о повторной сдаче',
    ],
  },
];

const Features = () => (
  <Section
    id="features"
    surface
    eyebrow="Возможности приложения"
    title="Лаб-Гид.РФ — не калькулятор нормы, а история вашего здоровья"
    lead="Пять вещей, ради которых люди возвращаются в приложение после каждой сдачи анализов."
  >
    <Tabs defaultValue="decode" className="w-full">
      <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
        {FEATURES.map((f) => (
          <TabsTrigger
            key={f.value}
            value={f.value}
            className="rounded-none border border-border bg-background px-5 py-3 text-[0.82rem] tracking-[0.06em] text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            {f.tab}
          </TabsTrigger>
        ))}
      </TabsList>

      {FEATURES.map((f) => (
        <TabsContent key={f.value} value={f.value} className="mt-10">
          <div className="grid animate-fade-in gap-px border border-border bg-border lg:grid-cols-2">
            <div className="bg-background p-8 lg:p-12">
              <Icon name={f.icon} size={26} strokeWidth={1} className="text-primary" />
              <h3 className="mt-8 font-head text-2xl font-normal tracking-[-0.02em]">{f.title}</h3>
              <p className="mt-5 leading-[1.65] text-muted-foreground">{f.text}</p>
              <ul className="mt-8 space-y-4">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-4 text-[0.95rem] text-foreground/85">
                    <span className="mt-[0.7em] h-px w-6 shrink-0 bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center bg-card p-8 lg:p-12">
              <DynamicsChart />
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>

    <a
      href={APP_URL}
      target="_blank"
      rel="noopener"
      className="tick-link mt-12 text-foreground lg:mt-14 font-semibold text-lg"
    >
      <span className="tick" />
      Открыть Лаб-Гид.РФ
      <Icon name="ArrowUpRight" size={17} strokeWidth={1.25} className="text-primary" />
    </a>
  </Section>
);

export default Features;