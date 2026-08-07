import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import logo from '@/assets/icon-final.png';
import { APP_URL, BRAND, NAV_LINKS } from './constants';

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = 'Укажите имя';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = 'Проверьте почту';
    if (form.message.trim().length < 10) next.message = 'Опишите вопрос подробнее';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({
      title: 'Сообщение отправлено',
      description: 'Мы ответим на указанную почту в течение рабочего дня.',
    });
    setForm({ name: '', email: '', message: '' });
    setErrors({});
  };

  const field = 'rounded-none border-border bg-background focus-visible:ring-primary';

  return (
    <footer id="contacts" className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-[120px] lg:py-[120px]">
        <div>
          <p className="eyebrow">Контакты</p>
          <h2 className="mt-6 font-head text-[1.85rem] font-light leading-[1.14] tracking-[-0.02em] sm:text-[2.2rem]">
            Остались вопросы — напишите нам
          </h2>
          <p className="mt-6 max-w-[30em] leading-[1.65] text-muted-foreground">
            Отвечаем на вопросы о приложении, тарифах и данных. Клиникам и врачам — про совместную
            работу с пациентами.
          </p>

          <dl className="mt-12 space-y-5 text-[0.95rem]">
            <div className="flex items-center gap-4">
              <Icon name="Mail" size={17} strokeWidth={1.15} className="text-primary" />
              <dd>
                <a href="mailto:hello@doctorbyte.ru" className="hover:text-primary">
                  hello@doctorbyte.ru
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="Send" size={17} strokeWidth={1.15} className="text-primary" />
              <dd>
                <a href="https://t.me/labgid" target="_blank" rel="noopener" className="hover:text-primary">
                  Телеграм-канал ДокторБайт
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="Globe" size={17} strokeWidth={1.15} className="text-primary" />
              <dd>
                <a href={APP_URL} target="_blank" rel="noopener" className="hover:text-primary">
                  лаб-гид.рф
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-[0.78rem] uppercase tracking-[0.16em] text-muted-foreground">
              Имя
            </label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={field}
              placeholder="Как к вам обращаться"
            />
            {errors.name && <p className="mt-2 text-[0.8rem] text-destructive">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-[0.78rem] uppercase tracking-[0.16em] text-muted-foreground">
              Почта
            </label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={field}
              placeholder="you@mail.ru"
            />
            {errors.email && <p className="mt-2 text-[0.8rem] text-destructive">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-[0.78rem] uppercase tracking-[0.16em] text-muted-foreground">
              Вопрос
            </label>
            <Textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={field}
              placeholder="Коротко опишите, о чём хотите спросить"
            />
            {errors.message && (
              <p className="mt-2 text-[0.8rem] text-destructive">{errors.message}</p>
            )}
          </div>

          <button type="submit" className="tick-link text-[0.9rem] text-foreground">
            <span className="tick" />
            Отправить сообщение
          </button>
        </form>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 text-[0.78rem] tracking-[0.08em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-12 lg:px-[120px]">
          <span className="flex items-center gap-2 font-head uppercase tracking-[0.16em] text-foreground">
            <img src={logo} alt={BRAND} className="h-5 w-5 rounded-[4px]" />
            {BRAND}
          </span>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <span>© {new Date().getFullYear()} · Не является медицинской услугой</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;