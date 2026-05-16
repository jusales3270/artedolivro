import { Check, MapPin, Hand, Users } from 'lucide-react';

const differentials = [
  {
    icon: Hand,
    title: 'Trabalho 100% Artesanal',
    description: 'Cada livro é tratado manualmente, com técnicas aprimoradas ao longo de mais de 30 anos. Não existe linha de produção: existe ofício, dedicação e respeito pelo documento.',
  },
  {
    icon: MapPin,
    title: 'Atendimento In Locu',
    description: 'Diferente dos concorrentes, realizamos o serviço dentro da própria serventia. O livro permanece consultável durante todo o procedimento, sem interromper a rotina do cartório.',
  },
  {
    icon: Users,
    title: 'Relação de Confiança',
    description: 'O trabalho é conquistado por indicação de clientes antigos e recentes satisfeitos. Muitas vezes superamos as expectativas — e as serventias mesmas indicam nossos serviços.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-couro relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src="/assets/textura-couro.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-inter text-sm uppercase tracking-[0.2em] text-pergaminho/60 mb-3 block">Por Que Escolher</span>
          <h2 className="font-cinzel text-3xl md:text-4xl text-ouro font-semibold uppercase tracking-wide">
            Nossos Diferenciais
          </h2>
          <div className="w-16 h-[2px] bg-ouro mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {differentials.map((diff, idx) => (
            <div
              key={idx}
              className="bg-couro-light/30 backdrop-blur-sm border border-pergaminho/10 rounded-lg p-8 hover:border-ouro/30 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-ouro/10 rounded-full flex items-center justify-center mb-6">
                <diff.icon className="text-ouro" size={28} />
              </div>
              <h3 className="font-cinzel text-lg text-ouro font-semibold uppercase tracking-wide mb-4">
                {diff.title}
              </h3>
              <p className="font-inter text-pergaminho/80 leading-relaxed text-sm">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison highlight */}
        <div className="bg-papel/5 backdrop-blur-sm border border-pergaminho/10 rounded-lg p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-playfair text-2xl text-ouro italic mb-4">
                "Restaurações e encadernações artesanais realizadas na serventia, permitindo consulta ao livro durante todo o procedimento."
              </h3>
              <p className="font-inter text-pergaminho/70 text-sm">
                Este é o diferencial que nos distingue da concorrência. Enquanto outros encadernadores retiram os livros de sua sede, nós vamos até o cartório e executamos o serviço no local, com total transparência e sem interromper o acesso aos registros.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-ouro/20 flex items-center justify-center shrink-0">
                  <Check className="text-ouro" size={14} />
                </div>
                <span className="font-inter text-pergaminho/90 text-sm">Material adequado para durabilidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-ouro/20 flex items-center justify-center shrink-0">
                  <Check className="text-ouro" size={14} />
                </div>
                <span className="font-inter text-pergaminho/90 text-sm">Consulta ao livro durante o procedimento</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-ouro/20 flex items-center justify-center shrink-0">
                  <Check className="text-ouro" size={14} />
                </div>
                <span className="font-inter text-pergaminho/90 text-sm">Técnica artesanal de 30 anos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-ouro/20 flex items-center justify-center shrink-0">
                  <Check className="text-ouro" size={14} />
                </div>
                <span className="font-inter text-pergaminho/90 text-sm">Atendimento em todo o Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-ouro/20 flex items-center justify-center shrink-0">
                  <Check className="text-ouro" size={14} />
                </div>
                <span className="font-inter text-pergaminho/90 text-sm">Pós-venda disponível e por indicação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
