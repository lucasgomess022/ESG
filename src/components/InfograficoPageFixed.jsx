import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, Copy, X, Database, FileOutput, Bot, Search, MessageSquare, Target, BookOpen, Zap, Award, ChevronDown } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

// Importando as logos
import logoFaculdade from '../assets/logo-faculdade.png';
import logoPrograma from '../assets/logo-programa-novo.png';

// --- Componente de Animação ---
const AnimatedSection = ({ children, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl ${className}`}
        >
            {children}
        </motion.div>
    );
};

// --- Componente de Acordeão ---
const AccordionItem = ({ title, children, icon: Icon, isOpen, onToggle }) => {
    return (
        <div className="border border-gray-700 rounded-lg overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full px-6 py-4 text-left bg-gray-800/70 hover:bg-gray-700/70 transition-colors flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">{title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 bg-gray-900/50 text-gray-300">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function InfograficoPageFixed() {
    // --- Estados ---
    const [currentStep, setCurrentStep] = useState(0);
    const [openAccordion, setOpenAccordion] = useState(null);

    // --- Dados para os alunos ---
    const passos = [
        { 
            title: "1. Organize seus dados", 
            description: "Crie uma planilha simples com seus dados. Pode ser no Excel, Google Sheets ou LibreOffice. O importante é ter os dados organizados em colunas e linhas.", 
            icon: Database,
            detalhes: "Exemplo: Nome da empresa, valores por ano, categorias, etc. Não se preocupe com fórmulas complexas!"
        },
        { 
            title: "2. Exporte para CSV ou XLSX", 
            description: "Salve sua planilha como CSV ou XLSX. Esses formatos são universais e funcionam com qualquer ferramenta de IA.", 
            icon: FileOutput,
            detalhes: "No Excel: Arquivo > Salvar Como > CSV. No Google Sheets: Arquivo > Fazer download > CSV"
        },
        { 
            title: "3. Acesse uma IA", 
            description: "Use ferramentas como ChatGPT, Claude, Gemini ou Manus. Faça upload da sua planilha e use um prompt claro.", 
            icon: Bot,
            detalhes: "Dica: Seja específico sobre o que você quer analisar. A IA entende melhor com instruções claras!"
        },
        { 
            title: "4. Receba análises prontas", 
            description: "A IA retornará sua planilha com fórmulas, gráficos e análises. Você economiza tempo e aprende no processo!", 
            icon: Search,
            detalhes: "Você receberá: fórmulas funcionais, gráficos profissionais e insights sobre seus dados."
        },
        { 
            title: "5. Aprenda com os resultados", 
            description: "Analise os resultados com seu professor. Entenda as fórmulas usadas e os insights gerados pela IA.", 
            icon: MessageSquare,
            detalhes: "O objetivo é aprender! Discuta com colegas e professor sobre os padrões encontrados."
        },
    ];

    const beneficiosAluno = [
        { 
            title: "Foco no que importa", 
            content: "Em vez de se perder em fórmulas complexas, você se concentra em entender e interpretar os dados.", 
            icon: Target 
        },
        { 
            title: "Aprenda fazendo", 
            content: "Veja como a IA resolve problemas reais e aprenda as técnicas que ela usa.", 
            icon: BookOpen 
        },
        { 
            title: "Economize tempo", 
            content: "Tarefas que levariam horas agora levam minutos, deixando mais tempo para análise e discussão.", 
            icon: Zap 
        },
        { 
            title: "Desenvolva habilidades", 
            content: "Aprenda a fazer perguntas certas, interpretar resultados e comunicar descobertas.", 
            icon: Award 
        },
    ];

    const competencias = [
        {
            titulo: "Análise Crítica",
            descricao: "Aprenda a questionar e validar os resultados da IA, desenvolvendo pensamento crítico.",
            exemplo: "Verificar se os cálculos fazem sentido no contexto do problema."
        },
        {
            titulo: "Comunicação de Dados",
            descricao: "Desenvolva a habilidade de explicar descobertas de forma clara e convincente.",
            exemplo: "Apresentar insights para colegas usando gráficos e explicações simples."
        },
        {
            titulo: "Resolução de Problemas",
            descricao: "Use dados para tomar decisões informadas e resolver problemas reais.",
            exemplo: "Identificar tendências de gastos e propor soluções de economia."
        },
        {
            titulo: "Colaboração com IA",
            descricao: "Aprenda a trabalhar com ferramentas de IA como um parceiro, não um substituto.",
            exemplo: "Formular prompts eficazes e interpretar resultados de forma inteligente."
        }
    ];

    // --- Funções ---
    const nextStep = () => setCurrentStep(prev => (prev + 1) % passos.length);
    const prevStep = () => setCurrentStep(prev => (prev - 1 + passos.length) % passos.length);

    const downloadCSV = () => {
        const csvContent = `Empresa,2022,2023,2024
TechSolutions Ltda,150000,180000,220000
InnovaServ S.A.,95000,110000,125000
GlobalTrade Inc.,300000,285000,310000`;
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'exemplo-empresas.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadXLSX = () => {
        const csvContent = `Empresa,2022,2023,2024
TechSolutions Ltda,150000,180000,220000
InnovaServ S.A.,95000,110000,125000
GlobalTrade Inc.,300000,285000,310000`;
        
        const blob = new Blob([csvContent], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'exemplo-empresas.xlsx');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const copyPrompt = () => {
        const prompt = `Analise esta planilha de dados financeiros e me ajude com o seguinte:

1. Crie fórmulas para calcular:
   - Crescimento percentual ano a ano para cada empresa
   - Média de crescimento por empresa
   - Ranking das empresas por performance

2. Gere gráficos que mostrem:
   - Evolução temporal de cada empresa
   - Comparação entre empresas
   - Tendências de crescimento

3. Forneça insights sobre:
   - Qual empresa teve melhor performance?
   - Há algum padrão nos dados?
   - Que recomendações você faria?

Por favor, explique cada fórmula usada e o raciocínio por trás das análises.`;

        navigator.clipboard.writeText(prompt).then(() => {
            alert('Prompt copiado para a área de transferência!');
        });
    };

    const downloadManualProfessor = () => {
        const link = document.createElement('a');
        link.href = '/manual-professor.pdf';
        link.download = 'Manual-Professor-Excel-Inteligente-BNCC.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-gray-200">
            {/* Header com logos */}
            <header className="bg-white/10 backdrop-blur-sm border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <img src={logoFaculdade} alt="URI Santo Ângelo" className="h-12" />
                    <img src={logoPrograma} alt="Programa Amanhã" className="h-12" />
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        Excel Inteligente
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                    >
                        Automatizando a Análise Financeira com IA
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-gray-400"
                    >
                        Aprenda Planilhas com Inteligência Artificial
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sm text-gray-500 mt-4"
                    >
                        Proposta desenvolvida para cursos técnicos, mas perfeitamente adaptável ao ensino médio
                    </motion.p>
                </div>
            </section>

            {/* Seção O Contexto */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">O Contexto</h2>
                        <div className="text-lg text-gray-300 space-y-6">
                            <p>
                                Alunos de cursos técnicos frequentemente enfrentam dificuldades com fórmulas complexas em planilhas 
                                e nem sempre têm acesso ao software Excel oficial. Essa barreira técnica pode desmotivar e limitar 
                                o aprendizado de conceitos financeiros e administrativos essenciais.
                            </p>
                            <p>
                                O professor, neste cenário, tem o papel fundamental de orientar os estudantes a superarem essas 
                                limitações através de estratégias pedagógicas inovadoras que aproveitem as tecnologias disponíveis 
                                para potencializar o aprendizado.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Seção A IA como Parceira */}
            <section className="py-16 px-4 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">A IA como Parceira de Aprendizado</h2>
                        <div className="text-lg text-gray-300 space-y-6">
                            <p>
                                A Inteligência Artificial surge como uma poderosa aliada educacional, permitindo que alunos e 
                                professores utilizem ferramentas de IA para analisar dados de qualquer planilha (Excel, Google Sheets, 
                                LibreOffice), focando na interpretação e aplicação prática dos conceitos.
                            </p>
                            <p>
                                <strong className="text-blue-400">Importante:</strong> O professor deve instigar o aluno a utilizar 
                                a IA como uma ferramenta de <strong>otimização do aprendizado</strong>, não de substituição do 
                                raciocínio. A IA deve ser vista como um parceiro que acelera processos técnicos, liberando tempo 
                                e energia mental para o desenvolvimento do pensamento crítico e analítico.
                            </p>
                            <p>
                                O objetivo é formar estudantes que compreendam <em>como</em> e <em>por que</em> usar a IA de forma 
                                estratégica, mantendo sempre o controle sobre o processo de aprendizagem e desenvolvendo autonomia 
                                intelectual.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Seção de Passos */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection className="p-8 mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Como Funciona (Passo a Passo)</h2>
                        
                        <div className="relative">
                            <div className="bg-gray-900/50 rounded-xl p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <Button 
                                        onClick={prevStep}
                                        variant="outline" 
                                        size="sm"
                                        className="bg-gray-800 border-gray-600 hover:bg-gray-700"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    
                                    <div className="flex items-center gap-2">
                                        {passos.map((_, index) => (
                                            <div 
                                                key={index}
                                                className={`w-3 h-3 rounded-full transition-colors ${
                                                    index === currentStep ? 'bg-blue-400' : 'bg-gray-600'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    
                                    <Button 
                                        onClick={nextStep}
                                        variant="outline" 
                                        size="sm"
                                        className="bg-gray-800 border-gray-600 hover:bg-gray-700"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                                
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-center"
                                    >
                                        <div className="flex justify-center mb-6">
                                            {React.createElement(passos[currentStep].icon, {
                                                className: "w-16 h-16 text-blue-400"
                                            })}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{passos[currentStep].title}</h3>
                                        <p className="text-gray-300 mb-4 text-lg">{passos[currentStep].description}</p>
                                        <p className="text-gray-400 text-sm">{passos[currentStep].detalhes}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Seção Experimente Agora */}
            <section className="py-16 px-4 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Experimente Agora!</h2>
                        <p className="text-center text-gray-300 mb-8">
                            Baixe nossa planilha de exemplo e teste com uma IA
                        </p>
                        
                        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-semibold mb-4">Dados de Exemplo: Faturamento de Empresas</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-600">
                                            <th className="text-left p-2">Empresa</th>
                                            <th className="text-left p-2">2022</th>
                                            <th className="text-left p-2">2023</th>
                                            <th className="text-left p-2">2024</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-700">
                                            <td className="p-2">TechSolutions Ltda</td>
                                            <td className="p-2">R$ 150.000</td>
                                            <td className="p-2">R$ 180.000</td>
                                            <td className="p-2">R$ 220.000</td>
                                        </tr>
                                        <tr className="border-b border-gray-700">
                                            <td className="p-2">InnovaServ S.A.</td>
                                            <td className="p-2">R$ 95.000</td>
                                            <td className="p-2">R$ 110.000</td>
                                            <td className="p-2">R$ 125.000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">GlobalTrade Inc.</td>
                                            <td className="p-2">R$ 300.000</td>
                                            <td className="p-2">R$ 285.000</td>
                                            <td className="p-2">R$ 310.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button onClick={downloadCSV} className="bg-green-600 hover:bg-green-700">
                                <Download className="w-4 h-4 mr-2" />
                                Baixar CSV
                            </Button>
                            <Button onClick={downloadXLSX} className="bg-blue-600 hover:bg-blue-700">
                                <Download className="w-4 h-4 mr-2" />
                                Baixar XLSX
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Seção do Prompt */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Prompt Sugerido para IA</h2>
                        <p className="text-center text-gray-300 mb-8">
                            Use este prompt quando fizer upload da planilha para a IA
                        </p>
                        
                        <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                            <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`Analise esta planilha de dados financeiros e me ajude com o seguinte:

1. Crie fórmulas para calcular:
   - Crescimento percentual ano a ano para cada empresa
   - Média de crescimento por empresa
   - Ranking das empresas por performance

2. Gere gráficos que mostrem:
   - Evolução temporal de cada empresa
   - Comparação entre empresas
   - Tendências de crescimento

3. Forneça insights sobre:
   - Qual empresa teve melhor performance?
   - Há algum padrão nos dados?
   - Que recomendações você faria?

Por favor, explique cada fórmula usada e o raciocínio por trás das análises.`}
                            </pre>
                        </div>
                        
                        <div className="text-center">
                            <Button onClick={copyPrompt} className="bg-purple-600 hover:bg-purple-700">
                                <Copy className="w-4 h-4 mr-2" />
                                Copiar Prompt
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Seção de Benefícios */}
            <section className="py-16 px-4 bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection className="p-8">
                        <h2 className="text-3xl font-bold text-center mb-12">O que você vai ganhar</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {beneficiosAluno.map((beneficio, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 p-6 rounded-lg text-center"
                                >
                                    {React.createElement(beneficio.icon, {
                                        className: "w-12 h-12 text-blue-400 mx-auto mb-4"
                                    })}
                                    <h3 className="text-xl font-semibold mb-3">{beneficio.title}</h3>
                                    <p className="text-gray-300 text-sm">{beneficio.content}</p>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Seção de Competências */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection className="p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Competências Trabalhadas</h2>
                        <div className="space-y-4">
                            {competencias.map((competencia, index) => (
                                <AccordionItem
                                    key={index}
                                    title={competencia.titulo}
                                    icon={Target}
                                    isOpen={openAccordion === index}
                                    onToggle={() => setOpenAccordion(openAccordion === index ? null : index)}
                                >
                                    <p className="mb-3">{competencia.descricao}</p>
                                    <p className="text-sm text-blue-300">
                                        <strong>Exemplo prático:</strong> {competencia.exemplo}
                                    </p>
                                </AccordionItem>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection className="p-8">
                        <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Transforme sua forma de trabalhar com planilhas. Use a IA como sua parceira de aprendizado e 
                            desenvolva habilidades que o mercado valoriza!
                        </p>
                        
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                                    Manual do Professor
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-gray-900 border-gray-700">
                                <DialogHeader>
                                    <DialogTitle className="text-white">Manual do Professor</DialogTitle>
                                    <DialogDescription className="text-gray-300">
                                        Guia completo para professores implementarem esta metodologia em suas aulas.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <p className="text-gray-300">
                                        O manual contém estratégias pedagógicas, planos de aula e orientações 
                                        detalhadas para usar IA no ensino de planilhas.
                                    </p>
                                    <Button 
                                        onClick={downloadManualProfessor}
                                        className="w-full bg-blue-600 hover:bg-blue-700"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Baixar Manual (PDF)
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </AnimatedSection>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900/50 py-8 px-4 text-center text-gray-400">
                <p className="mb-2">
                    <strong>Acadêmicos:</strong> Ana Carolina Barichello, Anna Caroline R. da Luz, Lucas José G. da Silva e Adriana S. Pereira.
                </p>
                <p className="mb-2">
                    <strong>Orientação:</strong> Profª. Dra. Rosangela Ferreira Prestes e Prof. Dr. João Carlos Krause.
                </p>
                <p className="mt-4 text-sm">Programa Professor do Amanhã - URI Santo Ângelo</p>
            </footer>
        </div>
    );
}
