import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Section from './Section';

const FAQ = [
  {
    q: 'Это заменяет врача?',
    a: 'Нет. Лаб-Гид.РФ объясняет, что означают показатели, и помогает подготовиться к приёму. Диагноз ставит и лечение назначает только врач.',
  },
  {
    q: 'Какие анализы понимает приложение?',
    a: 'Биохимический анализ крови, общий анализ крови и мочи, липидный профиль, гормоны щитовидной железы, витамины и микроэлементы — более 200 показателей. Бланки любых лабораторий: фото, скан или PDF.',
  },
  {
    q: 'Насколько безопасно загружать медицинские данные?',
    a: 'Данные передаются по защищённому каналу и хранятся в зашифрованном виде на серверах в России в соответствии с 152-ФЗ. Мы не передаём их лабораториям, страховым и рекламодателям. Историю можно выгрузить или полностью удалить в любой момент.',
  },
  {
    q: 'Кто видит мои анализы?',
    a: 'Только вы. Доступ к профилю есть у вас и у тех, кому вы сами отправите сводку — например, у вашего врача по ссылке или в PDF.',
  },
  {
    q: 'Что такое сравнительный анализ?',
    a: 'Это отчёт, который ставит рядом две сдачи и показывает разницу по каждому показателю в цифрах и процентах, отмечая изменения, выходящие за пределы обычного разброса.',
  },
  {
    q: 'Нужно ли вводить показатели вручную?',
    a: 'Обычно нет: приложение распознаёт бланк само. Если лаборатория оформила результат необычно, значение можно поправить руками за пару секунд.',
  },
  {
    q: 'Работает ли это для детей и пожилых?',
    a: 'Да. Референсные интервалы учитывают возраст и пол, а в одном аккаунте можно вести профили всей семьи.',
  },
  {
    q: 'Можно ли отменить подписку?',
    a: 'Да, в один клик в настройках. История при этом сохраняется, а доступ к платным функциям действует до конца оплаченного периода.',
  },
];

const Faq = () => (
  <Section
    id="faq"
    eyebrow="Вопросы и ответы"
    title="Коротко о главном"
    className="scroll-mt-20"
  >
    <div itemScope itemType="https://schema.org/FAQPage">
      <Accordion type="single" collapsible className="border-t border-border">
        {FAQ.map((item, i) => (
          <AccordionItem
            key={item.q}
            value={`item-${i}`}
            className="border-b border-border"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <AccordionTrigger className="py-7 text-left font-head text-lg font-light tracking-[-0.01em] hover:no-underline">
              <span itemProp="name">{item.q}</span>
            </AccordionTrigger>
            <AccordionContent
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p
                itemProp="text"
                className="max-w-[46em] pb-6 text-[0.97rem] leading-[1.7] text-muted-foreground"
              >
                {item.a}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);

export default Faq;
