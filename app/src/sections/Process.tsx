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

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Vertical Video */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
              {/* Ambient glow */}
              <div className="absolute -inset-4 bg-ouro/10 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
              
              <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden border border-ouro/30 shadow-[0_20px_50px_rgba(212,175,55,0.15)] bg-black">
                {/* Overlay to block clicks and hover elements */}
                <div className="absolute inset-0 z-20 pointer-events-none" />
                
                <iframe
                  className="absolute inset-0 w-full h-full scale-[1.15] origin-center"
                  src="https://www.youtube.com/embed/ZctfUQK2x64?autoplay=1&mute=1&loop=1&playlist=ZctfUQK2x64&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
                  title="Processo de Restauração"
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Steps */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="relative border-l border-pergaminho/60 pl-6 md:pl-8 lg:pl-12 ml-2 md:ml-4 lg:ml-6 space-y-12 py-2">
              {steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Badge centered on the border-l line */}
                  <div className="absolute -left-10 md:-left-12 lg:-left-[68px] top-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-couro border border-ouro flex items-center justify-center text-ouro font-cinzel font-bold text-xs lg:text-sm shadow-md transition-all duration-300 group-hover:bg-ouro group-hover:text-couro group-hover:scale-110">
                    {step.number}
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-papel rounded-lg border border-pergaminho/30 text-bronze group-hover:text-ouro group-hover:border-ouro/30 transition-colors duration-300">
                      <step.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-cinzel text-lg text-couro font-semibold uppercase tracking-wide mb-2 group-hover:text-ouro transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="font-inter text-tinta/70 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
