import React, { useState, useEffect } from "react";

const eventos = [
  { nome: "Festival de Música", cor: "bg-black" },
  { nome: "Peça Teatral", cor: "bg-black" },
  { nome: "Show de Rock", cor: "bg-black" },
  { nome: "Corrida Beneficente", cor: "bg-black" }
];

const Home: React.FC = () => {
  const [eventoAtual, setEventoAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventoAtual((prev) => (prev + 1) % eventos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <section className="mt-12">
        <div className="max-w-4xl mx-auto flex rounded-lg overflow-hidden shadow-lg">
          <div className={`${eventos[eventoAtual].cor} text-white p-6 w-1/3 flex flex-col justify-between`}>
            <div>
              <h2 className="text-2xl font-bold">{eventos[eventoAtual].nome}</h2>
              <button className="mt-4 border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
                Ver ingressos
              </button>
            </div>
            <div className="flex gap-2 mt-4">
              {eventos.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setEventoAtual(index)}
                  className={`h-2 w-2 rounded-full cursor-pointer ${index === eventoAtual ? "bg-orange-500" : "bg-gray-500"}`}
                ></span>
              ))}
            </div>
          </div>
          <div className="bg-gray-300 flex-1 relative">
            <button className="absolute top-4 right-4 text-black">❤️</button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Eventos Populares</h2>
        <div className="grid md:grid-cols-4 gap-4 grid-cols-4">
          {["Evento 1", "Evento 2", "Evento 3", "Evento 4"].map((evento, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800">{evento}</h3>
              <p className="text-gray-600 text-sm mt-2">Sáb, Mar 15 • 19:00h</p>
              <p className="text-gray-600 text-sm">Centro</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 w-full">
                Ver ingressos
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Categorias Populares</h2>
        <div className="flex gap-4">
          {["Música", "Teatro", "Esportes"].map((categoria, index) => (
            <span
              key={index}
              className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition duration-300"
            >
              {categoria}
            </span>
          ))}
        </div>
      </section>
      <section className="mt-10 text-center bg-gray-50 p-8 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Fique por dentro dos eventos</h2>
        <p className="text-gray-600 mb-4">Inscreva-se para receber atualizações sobre os melhores eventos.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="border border-gray-300 p-2 rounded-md w-1/2 max-w-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="ml-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
            Inscrever-se
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Ao se inscrever, você concorda com nossa{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Política de Privacidade
          </a>
          .
        </p>
      </section>
      <footer className="mt-10 text-center text-gray-600 border-t border-gray-200 pt-6">
        <p>© 2025 - TixUp. Todos os direitos reservados.</p>
        <p className="mt-2">
          O uso deste site significa que você concorda com nossos{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Termos de Uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Política de Privacidade
          </a>
          .
        </p>
        <p className="mt-2">
          Você está comprando ingressos de terceiros; a TixUp não é a vendedora dos ingressos. Os preços são definidos pelos vendedores e podem estar acima do valor nominal.
        </p>
      </footer>
    </main>
  );
};

export default Home;