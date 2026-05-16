import { BookOpen, MapPin, Heart, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-papel relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-inter text-sm uppercase tracking-[0.2em] text-bronze mb-3 block">Nossa História</span>
          <h2 className="font-cinzel text-3xl md:text-4xl text-couro font-semibold uppercase tracking-wide">
            Mais de 30 anos de ofício
          </h2>
          <div className="w-16 h-[2px] bg-ouro mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="font-inter text-tinta/90 leading-relaxed mb-6 text-base md:text-lg">
              Fui convidado para aprender o ofício há mais de 30 anos. Quando pela primeira vez vi um livro de Registro de Imóveis, me encantei com o trabalho e vi a oportunidade de conhecer vários lugares e pessoas.
            </p>
            <p className="font-inter text-tinta/90 leading-relaxed mb-6 text-base md:text-lg">
              Comecei então a viajar aprimorando as técnicas aprendidas e, assim que possível, comecei a trabalhar sozinho — desde 1998. Percebo que não só tenho a oportunidade de sobreviver, mas tenho a oportunidade de fazer amigos.
            </p>
            <p className="font-inter text-tinta/90 leading-relaxed mb-8 text-base md:text-lg">
              A cada livro terminado sinto uma realização pessoal, além de contribuir com a <strong className="text-couro">guarda e conservação da História</strong>.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="text-ouro mt-1 shrink-0" size={20} />
                <div>
                  <span className="font-cinzel text-couro font-semibold block text-sm">Desde 1998</span>
                  <span className="font-inter text-tinta/70 text-sm">Trabalhando solo</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-ouro mt-1 shrink-0" size={20} />
                <div>
                  <span className="font-cinzel text-couro font-semibold block text-sm">Brasil</span>
                  <span className="font-inter text-tinta/70 text-sm">Atendimento nacional</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="text-ouro mt-1 shrink-0" size={20} />
                <div>
                  <span className="font-cinzel text-couro font-semibold block text-sm">Livros Oficiais</span>
                  <span className="font-inter text-tinta/70 text-sm">Restauração & encadernação</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-ouro mt-1 shrink-0" size={20} />
                <div>
                  <span className="font-cinzel text-couro font-semibold block text-sm">100% Artesanal</span>
                  <span className="font-inter text-tinta/70 text-sm">Feito à mão, com alma</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center items-center group">
            {/* Moldura leve e elegante */}
            <div className="w-[70%] relative rounded-xl shadow-2xl bg-pergaminho p-3 border border-ouro/20 transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.4)] cursor-pointer">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/assets/casal.png"
                  alt="Equipe Arte do Livro"
                  className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-couro/50 to-transparent opacity-80" />
              </div>
            </div>
            
            <div className="absolute -bottom-6 left-0 md:-left-8 bg-couro text-ouro p-6 rounded-lg shadow-xl max-w-[260px] hidden lg:block z-10 transition-all duration-700 ease-out group-hover:-translate-y-6 group-hover:scale-105">
              <p className="font-playfair italic text-sm leading-relaxed">
                "O trabalho artesanal e a durabilidade do mesmo são nosso maior ponto forte."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
