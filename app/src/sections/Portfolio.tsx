import { Star, MapPin } from 'lucide-react';

const clients = {
  mg: ['Passos'],
  pr: ['Maringá', 'Toledo', 'Ponta Grossa', 'Curitiba'],
  sc: ['Itajaí', 'Araquari', 'Lages', 'Chapecó', 'Xaxim', 'Xanxerê', 'Seara', 'Concórdia'],
  rs: [
    'Palmeira das Missões', 'Cerro Largo', 'Santa Rosa', 'Ijuí',
    'Frederico Westphalen', 'Três Passos', 'Três Coroas', 'Passo Fundo',
    'Marau', 'Santa Maria', 'Novo Hamburgo', 'São Leopoldo', 'Gravataí',
    'Uruguaiana', 'Seberi', 'Santana do Livramento', 'Caxias do Sul'
  ],
};

export default function Portfolio() {
  return (
    <section id="clientes" className="py-24 md:py-32 bg-papel relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-inter text-sm uppercase tracking-[0.2em] text-bronze mb-3 block">Quem Confia em Nós</span>
          <h2 className="font-cinzel text-3xl md:text-4xl text-couro font-semibold uppercase tracking-wide">
            Clientes & Portfólio
          </h2>
          <div className="w-16 h-[2px] bg-ouro mx-auto mt-6" />
          <p className="font-inter text-tinta/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Cartórios de Registros Públicos, Civil e de Imóveis em Minas Gerais, Paraná, Santa Catarina e Rio Grande do Sul já confiam no nosso trabalho.
          </p>
        </div>

        {/* Featured case */}
        <div className="bg-couro rounded-lg p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-ouro/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-ouro fill-ouro" size={20} />
              <span className="font-inter text-ouro text-sm uppercase tracking-widest font-semibold">Caso de Destaque</span>
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl text-pergaminho italic mb-4">
              1º Registro de Imóveis de Itajaí/SC
            </h3>
            <p className="font-inter text-pergaminho/80 leading-relaxed max-w-2xl">
              O trabalho realizado no 1º Registro de Imóveis de Itajaí superou as expectativas da serventia. Como em todas as demais cidades atendidas, o resultado foi um livro restaurado com durabilidade garantida e manuseio significativamente melhorado.
            </p>
          </div>
        </div>

        {/* Clients by state */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-bronze" size={18} />
              <h4 className="font-cinzel text-sm text-couro font-semibold uppercase tracking-wider">Minas Gerais</h4>
            </div>
            <ul className="space-y-2">
              {clients.mg.map((city) => (
                <li key={city} className="font-inter text-tinta/70 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-ouro rounded-full" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-bronze" size={18} />
              <h4 className="font-cinzel text-sm text-couro font-semibold uppercase tracking-wider">Paraná</h4>
            </div>
            <ul className="space-y-2">
              {clients.pr.map((city) => (
                <li key={city} className="font-inter text-tinta/70 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-ouro rounded-full" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-bronze" size={18} />
              <h4 className="font-cinzel text-sm text-couro font-semibold uppercase tracking-wider">Santa Catarina</h4>
            </div>
            <ul className="space-y-2">
              {clients.sc.map((city) => (
                <li key={city} className="font-inter text-tinta/70 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-ouro rounded-full" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-bronze" size={18} />
              <h4 className="font-cinzel text-sm text-couro font-semibold uppercase tracking-wider">Rio Grande do Sul</h4>
            </div>
            <ul className="space-y-2 max-h-64 overflow-y-auto pr-2">
              {clients.rs.map((city) => (
                <li key={city} className="font-inter text-tinta/70 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-ouro rounded-full shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
