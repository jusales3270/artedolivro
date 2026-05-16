import { MessageCircle, ClipboardCheck, Truck, Headphones } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Contato',
    description: 'Entre em contato via WhatsApp ou telefone. Informe o tipo de serviço necessário e os dados da serventia para um orçamento personalizado.',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Agendamento In Locu',
    description: 'Marcamos a visita à sua serventia. O trabalho é realizado no próprio cartório, sem necessidade de retirar o livro do local.',
  },
  {
    icon: Truck,
    number: '03',
    title: 'Execução Artesanal',
    description: 'Restauração ou encadernação executada com material adequado e técnica artesanal. O livro permanece consultável durante todo o processo.',
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Pós-Venda',
    description: 'Nos colocamos à disposição permanentemente. Sempre que necessário, somos contactados — e muitas vezes a própria serventia indica nossos serviços.',
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-inter text-sm uppercase tracking-[0.2em] text-bronze mb-3 block">Como Funciona</span>
          <h2 className="font-cinzel text-3xl md:text-4xl text-couro font-semibold uppercase tracking-wide">
            Nosso Processo
          </h2>
          <div className="w-16 h-[2px] bg-ouro mx-auto mt-6" />
          <p className="font-inter text-tinta/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Um fluxo simples e transparente, pensado para não interromper a rotina do cartório e garantir total acesso ao livro durante o serviço.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-pergaminho/40" />
              )}
              <div className="text-center">
                <div className="w-16 h-16 bg-couro rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="font-cinzel text-ouro text-xl font-bold">{step.number}</span>
                  <step.icon className="absolute -bottom-2 -right-2 text-bronze bg-papel rounded-full p-1" size={20} />
                </div>
                <h3 className="font-cinzel text-lg text-couro font-semibold uppercase tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-tinta/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
