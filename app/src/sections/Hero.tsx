import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/textura-couro.jpg"
          alt="Textura artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-couro/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-couro/40 via-transparent to-couro/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <div className="animate-fade-in">
          <img
            src="/assets/logosite.png"
            alt="Arte do Livro"
            className="h-[240px] w-auto mx-auto mb-8 drop-shadow-lg"
          />
        </div>

        <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-ouro font-semibold tracking-wider uppercase mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A História<br />merece durar
        </h1>

        <p className="font-playfair text-xl md:text-2xl text-pergaminho italic mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          "A cada livro terminado, uma realização pessoal — e a certeza de que contribuí para a guarda da História."
        </p>

        <div className="w-20 h-[2px] bg-ouro mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }} />

        <p className="font-inter text-base md:text-lg text-pergaminho/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Restauração e encadernação artesanal de Livros Oficiais, realizada <em className="not-italic font-semibold text-ouro">in locu</em> nas serventias, com mais de 30 anos de ofício e a durabilidade que a História exige.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => handleScroll('#contato')}
            className="bg-ouro text-couro px-8 py-4 rounded font-inter text-sm font-semibold uppercase tracking-widest hover:bg-ouro-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </button>
          <button
            onClick={() => handleScroll('#sobre')}
            className="border border-pergaminho/50 text-pergaminho px-8 py-4 rounded font-inter text-sm font-medium uppercase tracking-widest hover:border-ouro hover:text-ouro transition-all duration-300"
          >
            Conheça Nosso Trabalho
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-pergaminho/60 hover:text-ouro transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
