import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, Copy, X, Database, FileOutput, Bot, Search, MessageSquare, Target, Users, Lightbulb, TrendingUp, CheckCircle, ArrowRight, FileText, ChevronDown, BrainCircuit, Sparkles, ListChecks, BookOpen, Zap, Award } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

// Importando as logos
import logoFaculdade from '../assets/logo-faculdade.png';
import logoPrograma from '../assets/logo-programa.jpg';

// --- Componente de Card com Animação ---
const AnimatedCard = ({ children, className }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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

export default function InfograficoPage() {
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
        const promptText = `Analise esta planilha de despesas empresariais e me ajude com o seguinte:

1. Calcule o crescimento percentual de cada empresa entre 2022 e 2024
2. Identifique qual empresa teve o maior crescimento absoluto
3. Crie fórmulas para calcular a média de gastos por empresa
4. Gere um gráfico de barras comparando as despesas por ano
5. Forneça um resumo executivo com insights sobre as tendências

Por favor, retorne uma planilha com as fórmulas aplicadas e um relatório com suas análises.`;

        navigator.clipboard.writeText(promptText).then(() => {
            alert('Prompt copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar prompt: ', err);
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
        <div className="min-h-screen bg-gray-950 text-gray-200 overflow-x-hidden">
            {/* --- Cabeçalho com Logos --- */}
            <header className="bg-white/10 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <img src={logoFaculdade} alt="URI Santo Ângelo" className="h-12" />
                    <img src={logoPrograma} alt="Programa Amanhã" className="h-12" />
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 space-y-16">
                {/* --- Hero Section --- */}
                <section className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                            Excel Inteligente
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300">
                            Aprenda Planilhas com Inteligência Artificial
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            Descubra como usar IA para analisar dados, criar gráficos e gerar insights incríveis. 
                            Foque no que realmente importa: entender e aplicar o conhecimento!
                        </p>
                    </motion.div>
                </section>

                {/* --- Por que usar IA? --- */}
                <section>
                    <AnimatedCard className="max-w-4xl mx-auto">
                        <div className="p-8 md:p-12 text-center">
                            <div className="flex justify-center mb-6">
                                <BrainCircuit className="w-16 h-16 text-purple-400" />
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Por que usar IA com planilhas?</h2>
                            <div className="grid md:grid-cols-2 gap-6 text-left">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-green-400">❌ Método Tradicional</h3>
                                    <ul className="text-gray-300 space-y-2">
                                        <li>• Memorizar fórmulas complexas</li>
                                        <li>• Gastar horas em cálculos</li>
                                        <li>• Dificuldade para criar gráficos</li>
                                        <li>• Foco na técnica, não no resultado</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-400">✅ Com IA</h3>
                                    <ul className="text-gray-300 space-y-2">
                                        <li>• Foco na interpretação dos dados</li>
                                        <li>• Resultados em minutos</li>
                                        <li>• Gráficos profissionais automáticos</li>
                                        <li>• Aprendizado através da prática</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedCard>
                </section>

                {/* --- Passo a Passo --- */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">Como fazer (Passo a Passo)</h2>
                    <AnimatedCard className="max-w-4xl mx-auto">
                        <div className="p-8 md:p-12">
                            <div className="flex items-center justify-between mb-8">
                                <Button onClick={prevStep} variant="outline" size="sm">
                                    <ArrowLeft className="w-4 h-4" />
                                </Button>
                                <div className="flex space-x-2">
                                    {passos.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-3 h-3 rounded-full transition-colors ${
                                                i === currentStep ? 'bg-blue-500' : 'bg-gray-600'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <Button onClick={nextStep} variant="outline" size="sm">
                                    <ArrowRight className="w-4 h-4" />
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
                                        {React.createElement(passos[currentStep].icon, { className: "w-16 h-16 text-blue-400" })}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{passos[currentStep].title}</h3>
                                    <p className="text-gray-300 text-lg mb-4">{passos[currentStep].description}</p>
                                    <p className="text-gray-400 text-sm italic">{passos[currentStep].detalhes}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </AnimatedCard>
                </section>

                {/* --- Exemplo Prático --- */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">Experimente Agora!</h2>
                    <AnimatedCard className="max-w-4xl mx-auto">
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-4 text-center">Planilha de Exemplo: Despesas de Empresas</h3>
                            <div className="overflow-x-auto mb-6">
                                <table className="w-full border-collapse border border-gray-600 text-sm">
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="border border-gray-600 p-3 text-left">Empresa</th>
                                            <th className="border border-gray-600 p-3 text-center">2022</th>
                                            <th className="border border-gray-600 p-3 text-center">2023</th>
                                            <th className="border border-gray-600 p-3 text-center">2024</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-600 p-3">TechSolutions Ltda</td>
                                            <td className="border border-gray-600 p-3 text-center">R$ 150.000</td>
                                            <td className="border border-gray-600 p-3 text-center">R$ 180.000</td>
                                            <td className="border border-gray-600 p-3 text-center">R$ 220.000</td>
                                        </tr>
                                        <tr className="bg-gray-800/50">
                                            <td className="border border-gray-600 p-3">InnovaServ S.A.</td>
                                            <td className="border border-gray-600 p-3 text-center">R$ 95.000</td>
                                            <td className="border border-gray-600 p-3 text-center">R$ 110.000</td>
                                            <td className="border border-gray-600 p-3 text-center">R$ 125.000</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-600 p-3">GlobalTrade Inc.</td>
                                            <td className="border border-gray-600 p-3 text-center">R$ 300.000</td>
                                            <td className="border border-gray-600 p-3 text-center">R$ 285.000</td>
                                            <td className="border border-gray-600 p-3 text-center">R$ 310.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center mb-6">
                                <Button onClick={downloadCSV} className="bg-green-600 hover:bg-green-700 text-white mr-4">
                                    <Download className="w-4 h-4 mr-2" />
                                    Baixar CSV
                                </Button>
                                <Button onClick={downloadXLSX} className="bg-blue-600 hover:bg-blue-700 text-white">
                                    <Download className="w-4 h-4 mr-2" />
                                    Baixar XLSX
                                </Button>
                            </div>
                            <div className="bg-gray-800/50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">🎯 Sua missão:</h4>
                                <p className="text-gray-300 text-sm">
                                    1. Baixe a planilha acima<br/>
                                    2. Acesse uma IA (ChatGPT, Claude, etc.)<br/>
                                    3. Faça upload da planilha<br/>
                                    4. Use o prompt da próxima seção<br/>
                                    5. Analise os resultados com seu professor!
                                </p>
                            </div>
                        </div>
                    </AnimatedCard>
                </section>

                {/* --- Prompt para IA --- */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">Prompt para usar na IA</h2>
                    <AnimatedCard className="max-w-4xl mx-auto">
                        <div className="p-8">
                            <div className="bg-gray-800/70 p-6 rounded-lg mb-4 font-mono text-sm">
                                <p className="text-gray-300 leading-relaxed">
                                    "Analise esta planilha de despesas empresariais e me ajude com o seguinte:<br/><br/>
                                    1. Calcule o crescimento percentual de cada empresa entre 2022 e 2024<br/>
                                    2. Identifique qual empresa teve o maior crescimento absoluto<br/>
                                    3. Crie fórmulas para calcular a média de gastos por empresa<br/>
                                    4. Gere um gráfico de barras comparando as despesas por ano<br/>
                                    5. Forneça um resumo executivo com insights sobre as tendências<br/><br/>
                                    Por favor, retorne uma planilha com as fórmulas aplicadas e um relatório com suas análises."
                                </p>
                            </div>
                            <div className="text-center">
                                <Button onClick={copyPrompt} className="bg-purple-600 hover:bg-purple-700 text-white">
                                    <Copy className="w-4 h-4 mr-2" />
                                    Copiar Prompt
                                </Button>
                            </div>
                        </div>
                    </AnimatedCard>
                </section>

                {/* --- Benefícios para o Aluno --- */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">O que você vai ganhar</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {beneficiosAluno.map((beneficio, i) => (
                            <AnimatedCard key={i}>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        {React.createElement(beneficio.icon, { className: "w-6 h-6 text-blue-400" })}
                                        <h3 className="font-semibold">{beneficio.title}</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm">{beneficio.content}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </section>

                {/* --- Competências Desenvolvidas --- */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10">Competências que você vai desenvolver</h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {competencias.map((comp, i) => (
                            <AccordionItem
                                key={i}
                                title={comp.titulo}
                                icon={Target}
                                isOpen={openAccordion === i}
                                onToggle={() => setOpenAccordion(openAccordion === i ? null : i)}
                            >
                                <p className="mb-3">{comp.descricao}</p>
                                <div className="bg-gray-800/50 p-3 rounded-lg">
                                    <strong className="text-blue-400">Exemplo prático:</strong> {comp.exemplo}
                                </div>
                            </AccordionItem>
                        ))}
                    </div>
                </section>

                {/* --- Call to Action --- */}
                <section className="text-center">
                    <AnimatedCard className="max-w-4xl mx-auto">
                        <div className="p-8 md:p-12">
                            <div className="flex justify-center mb-6">
                                <Users className="w-16 h-16 text-green-400" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
                            <p className="text-gray-300 text-lg mb-6">
                                Transforme sua forma de trabalhar com planilhas. Use a IA como sua parceira de aprendizado 
                                e desenvolva habilidades que o mercado valoriza!
                            </p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg">
                                        Manual do Professor
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-gray-900 border-gray-700 max-w-md">
                                    <DialogHeader>
                                        <DialogTitle className="text-white">Manual do Professor</DialogTitle>
                                        <DialogDescription className="text-gray-300">
                                            Guia completo para professores implementarem esta metodologia em suas aulas.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                        <p className="text-gray-300 text-sm">
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
                        </div>
                    </AnimatedCard>
                </section>
            </main>

            {/* --- Rodapé --- */}
            <footer className="bg-gray-900/50 text-gray-400 text-center py-8 px-4 border-t border-gray-700">
                <div className="container mx-auto">
                    <p className="mb-2">Desenvolvido por Acadêmicos da URI Santo Ângelo</p>
                    <p className="mb-2">Orientação: Professora [Nome da Professora]</p>
                    <p>Programa Amanhã</p>
                </div>
            </footer>
        </div>
    );
}
