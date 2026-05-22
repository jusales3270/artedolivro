export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-couro relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <img src="/assets/textura-couro.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-inter text-sm uppercase tracking-[0.2em] text-pergaminho/60 mb-3 block">Vamos Conversar</span>
          <h2 className="font-cinzel text-3xl md:text-4xl text-ouro font-semibold uppercase tracking-wide">
            Solicite um Orçamento
          </h2>
          <div className="w-16 h-[2px] bg-ouro mx-auto mt-6" />
          <p className="font-inter text-pergaminho/80 mt-6 max-w-2xl mx-auto leading-relaxed">
            Cartórios de todo o país já confiam neste trabalho. Agora é a sua vez. Entre em contato e descubra como podemos preservar a História da sua serventia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          {/* Imagem com citação sobreposta */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-ouro/20 group h-full min-h-[450px]">
            <img
              src="/assets/casal2.png"
              alt="Equipe Arte do Livro"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-couro/95 via-couro/30 to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform transition-transform duration-700 group-hover:-translate-y-2">
              <div className="border-l-4 border-ouro pl-6">
                <p className="font-playfair italic text-pergaminho/95 text-xl md:text-2xl leading-relaxed drop-shadow-lg">
                  "A cada livro terminado, uma realização pessoal — e a certeza de que contribuí para a guarda da História."
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-papel rounded-lg p-8 shadow-2xl">
            <form action="https://formsubmit.co/aartedolivro@gmail.com" method="POST" className="space-y-5">
              <h3 className="font-cinzel text-lg text-couro font-semibold uppercase tracking-wide mb-6">
                Formulário de Contato
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-inter text-tinta/70 text-xs uppercase tracking-wider block mb-2">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    className="w-full bg-papel border border-pergaminho/40 rounded px-4 py-3 font-inter text-tinta text-sm focus:outline-none focus:border-ouro transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="font-inter text-tinta/70 text-xs uppercase tracking-wider block mb-2">Serventia</label>
                  <input
                    type="text"
                    name="serventia"
                    required
                    className="w-full bg-papel border border-pergaminho/40 rounded px-4 py-3 font-inter text-tinta text-sm focus:outline-none focus:border-ouro transition-colors"
                    placeholder="Nome do cartório"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-inter text-tinta/70 text-xs uppercase tracking-wider block mb-2">Cidade</label>
                  <input
                    type="text"
                    name="cidade"
                    required
                    className="w-full bg-papel border border-pergaminho/40 rounded px-4 py-3 font-inter text-tinta text-sm focus:outline-none focus:border-ouro transition-colors"
                    placeholder="Cidade"
                  />
                </div>
                <div>
                  <label className="font-inter text-tinta/70 text-xs uppercase tracking-wider block mb-2">Estado</label>
                  <input
                    type="text"
                    name="estado"
                    required
                    className="w-full bg-papel border border-pergaminho/40 rounded px-4 py-3 font-inter text-tinta text-sm focus:outline-none focus:border-ouro transition-colors"
                    placeholder="UF"
                  />
                </div>
              </div>

              <div>
                <label className="font-inter text-tinta/70 text-xs uppercase tracking-wider block mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-papel border border-pergaminho/40 rounded px-4 py-3 font-inter text-tinta text-sm focus:outline-none focus:border-ouro transition-colors"
                  placeholder="Seu e-mail"
                />
              </div>

              <div>
                <label className="font-inter text-tinta/70 text-xs uppercase tracking-wider block mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  className="w-full bg-papel border border-pergaminho/40 rounded px-4 py-3 font-inter text-tinta text-sm focus:outline-none focus:border-ouro transition-colors resize-none"
                  placeholder="Descreva sua necessidade..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ouro text-couro px-6 py-4 rounded font-inter text-sm font-semibold uppercase tracking-widest hover:bg-ouro-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
