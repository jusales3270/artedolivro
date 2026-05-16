import { BookOpen, Sparkles, Shield } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Restauração de Livros Oficiais',
    description:
      'Recuperação completa de livros deteriorados pelo tempo, com técnicas artesanais que respeitam a integridade do documento e preservam sua valor histórico e legal.',
  },
  {
    icon: Sparkles,
    title: 'Encadernação Artesanal',
    description:
      'Nova encadernação de Livros Oficiais utilizando materiais adequados e técnicas manuais que garantem durabilidade superior e melhor manuseio dos registros.',
  },
  {
    icon: Shield,
    title: 'Atendimento In Locu',
    description:
      'O trabalho é realizado na própria serventia, permitindo que o livro permaneça consultável durante todo o procedimento — sem interromper o fluxo do cartório.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-inter text-sm uppercase tracking-[0.2em] text-bronze mb-3 block">O Que Fazemos</span>
          <h2 className="font-cinzel text-3xl md:text-4xl text-couro font-semibold uppercase tracking-wide">
            Serviços
          </h2>
          <div className="w-16 h-[2px] bg-ouro mx-auto mt-6" />
          <p className="font-inter text-tinta/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Especializados em Livros Oficiais de Cartórios de Registros Públicos, Civil e de Imóveis. Cada serviço é executado com material adequado e técnica artesanal aprimorada ao longo de três décadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-papel border border-pergaminho/30 rounded-lg p-8 hover:shadow-xl hover:border-ouro/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-couro/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-ouro/10 transition-colors duration-500">
                <service.icon className="text-ouro" size={28} />
              </div>
              <h3 className="font-cinzel text-lg text-couro font-semibold uppercase tracking-wide mb-4">
                {service.title}
              </h3>
              <p className="font-inter text-tinta/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
