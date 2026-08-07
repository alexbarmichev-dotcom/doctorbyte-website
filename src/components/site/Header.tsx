import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import logo from '@/assets/icon-final.png';
import { APP_URL, BRAND, NAV_LINKS } from './constants';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-10 px-6 py-4 md:px-12 lg:px-[120px] lg:py-[18px]">
        <a href="#top" className="flex items-center self-center" aria-label={BRAND}>
          <img src={logo} alt={BRAND} className="h-12 w-12 rounded-[8px] lg:h-14 lg:w-14" />
        </a>

        <nav className="hidden items-baseline gap-7 text-[0.8rem] tracking-[0.09em] lg:flex xl:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap border-b border-transparent pb-[3px] text-muted-foreground transition-colors duration-500 hover:border-border hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener"
            className="hidden whitespace-nowrap text-[0.8rem] tracking-[0.09em] text-primary transition-opacity hover:opacity-70 md:inline lg:hidden xl:inline"
          >
            Открыть приложение
          </a>
          <button
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          >
            <Icon name={open ? 'X' : 'Menu'} size={22} strokeWidth={1.25} />
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-6 py-4 md:px-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm tracking-[0.09em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="py-5 text-sm tracking-[0.09em] text-primary"
            >
              Открыть Лаб-Гид.РФ →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;