'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const equipamentos = [
    {
        id: 1,
        nome: 'Compressor Chiaperini',
        imagem: '/equipamentos/Compressor Chiaperini.jpeg',
        descricao: 'Compressor de ar industrial para aplicações diversas'
    },
    {
        id: 2,
        nome: 'Corte Plasma Fortg',
        imagem: '/equipamentos/Corte Plasma Fortg.jpeg',
        descricao: 'Equipamento de corte plasma para metais'
    },
    {
        id: 3,
        nome: 'Empilhadeira Manual Hidráulica',
        imagem: '/equipamentos/Empilhadeira manual hidráulica.png',
        descricao: 'Empilhadeira manual para movimentação de cargas'
    },
    {
        id: 4,
        nome: 'Esmeril Motomil',
        imagem: '/equipamentos/Esmeril Motomil.jpeg',
        descricao: 'Esmeril industrial para acabamento e afiação'
    },
    {
        id: 5,
        nome: 'Fresadora Ferramenteira Clever 4VS',
        imagem: '/equipamentos/Fresadora.png',
        descricao: 'Fresadora para usinagem de precisão'
    },
    {
        id: 6,
        nome: 'Furadeira de Bancada',
        imagem: '/equipamentos/Furadeira de Bancada.jpeg',
        descricao: 'Furadeira de bancada para perfurações precisas'
    },
    {
        id: 7,
        nome: 'Máquina de Solda Balmer',
        imagem: '/equipamentos/Máquina de Solda Balmer.jpeg',
        descricao: 'Máquina de solda profissional Balmer'
    },
    {
        id: 8,
        nome: 'Máquina de Solda MIG MAG',
        imagem: '/equipamentos/Máquina de solda MIG MAG com cilindro de gás.jpeg',
        descricao: 'Máquina de solda MIG MAG com cilindro de gás'
    },
    {
        id: 9,
        nome: 'Morsa de Bancada',
        imagem: '/equipamentos/Morsa de Bancada.jpeg',
        descricao: 'Morsa de bancada para fixação de peças'
    },
    {
        id: 10,
        nome: 'Serra Fita Nagano',
        imagem: '/equipamentos/Serra Fita Nagano.jpeg',
        descricao: 'Serra fita industrial Nagano'
    },
    {
        id: 11,
        nome: 'Torno Mecânico IMOR S-400 II 1500mm',
        imagem: '/equipamentos/Torno Mecânico.jpeg',
        descricao: 'Torno mecânico para usinagem'
    }
];

const equipe = [
    {
        id: 1,
        nome: 'José Luis Boaventura',
        profissao: 'Proprietário',
        imagem: '/equipe/ze.png',
        descricao: 'Uma frase que o define'
    },
    {
        id: 2,
        nome: 'Otavio Boaventura',
        profissao: 'Financeiro/Compras',
        imagem: '/equipe/otavio.png',
        descricao: 'Pratique a gratidão: Mesmo em meio ao caos, sempre existe algo pelo qual agradecer. Esse simples hábito muda seu foco e cria resiliência.'
    },
    {
        id: 3,
        nome: 'Marcelo Silveira Colmanetti',
        profissao: 'Planejamento/Vendas',
        imagem: '/equipe/colmanetti.png',
        descricao: 'Para aprender a ter sucesso, é preciso primeiro aprender a fracassar.'
    },
    {
        id: 4,
        nome: 'Marcelo Dias Santo',
        profissao: 'Marketing/T.I.',
        imagem: '/equipe/dias.png',
        descricao: 'Deus me trouxe até aqui.'
    },
    {
        id: 5,
        nome: 'Ederson',
        profissao: 'Engenharia',
        imagem: '/equipe/dias.png',
        descricao: 'Uma frase que o define'
    },
    {
        id: 6,
        nome: 'Serjo',
        profissao: 'Produção-Fresador',
        imagem: '/equipe/dias.png',
        descricao: 'Uma frase que o define'
    },
    {
        id: 7,
        nome: 'Eduardo',
        profissao: 'Produção-Torneiro-mecânico',
        imagem: '/equipe/dias.png',
        descricao: 'Uma frase que o define'
    },
    {
        id: 8,
        nome: 'Matheus',
        profissao: 'Ajudante geral',
        imagem: '/equipe/dias.png',
        descricao: 'Uma frase que o define'
    },
    {
        id: 9,
        nome: 'Alexandre',
        profissao: 'Produção',
        imagem: '/equipe/dias.png',
        descricao: 'Uma frase que o define'
    }
];

export default function SobrePageContent() {
    return (
        <div className="min-h-screen bg-gray-50">


            {/* Nossa História Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">
                            Nossa História
                        </h2>

                        {/* Imagem BV */}
                        <div className="text-center mb-8">
                            <Image
                                src="/image/bv.png"
                                alt="BV BoaVentura"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg max-w-4xl mx-auto"
                            />
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                <p className="mb-6">
                                    A <strong className="text-text">BV BoaVentura</strong> é uma empresa jovem, mas construída sobre uma base sólida: unir técnica, propósito e pessoas. Não nascemos apenas para fabricar máquinas ou estruturas metálicas. Nosso objetivo é gerar conhecimento, oferecer soluções inteligentes e ser parte do crescimento de quem acredita na força da prática.
                                </p>

                                <p className="mb-6">
                                    Nossa atuação abrange a fabricação de implementos agrícolas personalizados, produtos em caldeiraria sob medida e máquinas especiais adaptadas à necessidade do cliente. Hoje também desenvolvemos peças de reposição para colhedoras de cana-de-açúcar, além de serviços em ferramentaria, rebarba e cilindros, sempre com foco inegociável em qualidade, funcionalidade e durabilidade. Cada projeto é tratado com engenharia de valor, atenção ao detalhe e compromisso total com o resultado.
                                </p>

                                <p className="mb-6">
                                    Para nós, cada equipamento ou peça que sai da produção não é apenas um produto, mas uma extensão do trabalho de quem está no campo ou na indústria. Por isso, buscamos entregar soluções que representem confiança, eficiência e robustez, atendendo tanto à urgência de manter máquinas em funcionamento quanto à necessidade de inovação no processo produtivo.
                                </p>

                                <p className="mb-6">
                                    Mas a BV BoaVentura vai além do fornecimento de soluções industriais. Queremos também formar, inspirar e compartilhar conhecimento. Acreditamos que o crescimento do setor passa pela capacitação de pessoas, pela vivência real de chão de fábrica e pela valorização do saber fazer. Por isso, buscamos contribuir não apenas com resultados, mas também com aprendizado e transformação.
                                </p>

                                <p className="mb-6">
                                    Mais do que produtos, entregamos ética, responsabilidade e parceria. Queremos ser reconhecidos não só pelo que fabricamos, mas pelo impacto que deixamos: apoiar quem está começando, colaborar para o fortalecimento do setor e inspirar outras empresas a também acreditar na força coletiva.
                                </p>

                                <p className="mb-6">
                                    A meta da BV BoaVentura é clara: ser referência em produto e propósito. Porque cada solda, cada parafuso e cada projeto entregue carrega um compromisso com um futuro mais técnico, mais justo e mais humano.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Nossos Equipamentos Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                            Nossos Equipamentos
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Conheça os equipamentos que nos permitem entregar soluções de alta qualidade e precisão
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {equipamentos.map((equipamento, index) => (
                            <motion.div
                                key={equipamento.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                <div className="relative h-48 bg-gradient-to-r from-yellow-100 to-yellow-200">
                                    <Image
                                        src={equipamento.imagem}
                                        alt={equipamento.nome}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-yellow-600 transition-colors">
                                        {equipamento.nome}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {equipamento.descricao}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nossa Equipe Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                            Nossa Equipe
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Conheça os profissionais que fazem a diferença na BV BoaVentura
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {equipe.map((membro, index) => (
                            <motion.div
                                key={membro.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group text-center"
                            >
                                <div className="relative h-64 bg-gradient-to-r from-yellow-100 to-yellow-200">
                                    <Image
                                        src={membro.imagem}
                                        alt={membro.nome}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            // Fallback para quando a imagem não existir
                                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNTAgMTYwQzUwIDEzNS4xNDcgNzAuMTQ3IDExNSA5NSAxMTVIMTA1QzEyOS44NTMgMTE1IDE1MCAxMzUuMTQ3IDE1MCAxNjBWMjAwSDUwVjE2MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-yellow-600 transition-colors">
                                        {membro.nome}
                                    </h3>
                                    <p className="text-yellow-600 font-medium mb-3">
                                        {membro.profissao}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {membro.descricao}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-600">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Pronto para conhecer nossas soluções?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contatos"
                                className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                            >
                                Entre em Contato
                            </a>
                            <a
                                href="/produtos"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors duration-300"
                            >
                                Ver Produtos
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}