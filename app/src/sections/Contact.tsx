import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    serventia: '',
    cidade: '',
    estado: '',
    servico: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ nome: '', serventia: '', cidade: '', estado: '', servico: '', mensagem: '' });
  };



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
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-ouro/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-ouro" size={28} />
                </div>
                <h3 className="font-cinzel text-xl text-couro font-semibold uppercase tracking-wide mb-2">Mensagem Enviada!</h3>
                <p className="font-inter text-tinta/70 text-sm">Entraremos em contato em breve. Obrigado!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-cinzel text-lg text-couro font-semibold uppercase tracking-wide mb-6">
                  Formulário de Contato
                </h3>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-inter text-tinta/70 text-xs uppercase tracking-wider block mb-2">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
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
                      value={formData.serventia}
                      onChange={handleChange}
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
                      value={formData.cidade}
                      onChange={handleChange}
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
                      value={formData.estado}
                      onChange={handleChange}
                      required
                      className="w-full bg-papel border border-pergaminho/40 rounded px-4 py-3 font-inter text-tinta text-sm focus:outline-none focus:border-ouro transition-colors"
                      placeholder="UF"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-inter text-tinta/70 text-xs uppercase tracking-wider block mb-2">Serviço Desejado</label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    required
                    className="w-full bg-papel border border-pergaminho/40 rounded px-4 py-3 font-inter text-tinta text-sm focus:outline-none focus:border-ouro transition-colors"
                  >
                    <option value="">Selecione...</option>
                    <option value="Restauração">Restauração de Livros Oficiais</option>
                    <option value="Encadernação">Encadernação de Livros Oficiais</option>
                    <option value="Ambos">Restauração + Encadernação</option>
                  </select>
                </div>

                <div>
                  <label className="font-inter text-tinta/70 text-xs uppercase tracking-wider block mb-2">Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
