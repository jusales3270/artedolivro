import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tinta py-10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center">
            <img
              src="/assets/logosite.png"
              alt="Arte do Livro"
              className="h-[168px] w-auto"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Início', href: '#hero' },
              { label: 'História', href: '#sobre' },
              { label: 'Serviços', href: '#servicos' },
              { label: 'Clientes', href: '#clientes' },
              { label: 'Contato', href: '#contato' },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const el = document.querySelector(link.href);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-inter text-sm text-pergaminho/50 hover:text-ouro transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t border-pergaminho/10 pt-6 text-center">
          <p className="font-inter text-pergaminho/40 text-sm flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Arte do Livro. Feito com <Heart className="text-ouro fill-ouro" size={12} /> e 30 anos de ofício.
          </p>
          <p className="font-inter text-pergaminho/30 text-xs mt-2">
            Cartórios de todo o Brasil — atendimento in locu
          </p>
        </div>
      </div>
    </footer>
  );
}
