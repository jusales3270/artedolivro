import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'História', href: '#sobre' },
  { label: 'Processo', href: '#processo' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/20 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" onClick={() => handleClick('#hero')} className="flex items-center">
          <img
            src="/assets/logosite.png"
            alt="Arte do Livro"
            className="h-[90px] w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-inter text-sm tracking-wide uppercase text-pergaminho/80 hover:text-ouro transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/5515997355446"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ouro text-couro px-5 py-2 rounded font-inter text-sm font-semibold uppercase tracking-wide hover:bg-ouro-light transition-colors duration-300 text-center inline-block"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ouro"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-pergaminho/20">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-inter text-sm tracking-wide uppercase text-pergaminho/80 hover:text-ouro transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/5515997355446"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ouro text-couro px-5 py-3 rounded font-inter text-sm font-semibold uppercase tracking-wide hover:bg-ouro-light transition-colors mt-2 text-center inline-block"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
