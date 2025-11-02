import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Download, Copy, Database, FileOutput, Bot, Search, MessageSquare, Target, BookOpen, Zap, Award, ListChecks, BrainCircuit, Sparkles, FileText, CheckCircle } from 'lucide-react';

import { Button } from "@/components/ui/button";

// --- Componente de Card com Animação ---
const AnimatedCard = ({ children, className }) => {
    const { ref, inView } = useInView({ once: true, threshold: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`bg-card text-card-foreground rounded-2xl card-glow ${className}`}
        >
            {children}
        </motion.div>
    );
};

// --- Componente de Acordeão ---
const AccordionItem = ({ title, children, icon: Icon, isOpen, onToggle }) => {
    return (
        <div className="border border-border rounded-lg overflow-hidden bg-card card-glow">
            <button
                onClick={onToggle}
                className="w-full px-6 py-4 text-left hover:bg-accent/50 transition-colors flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{title}</span>
                </div>
                <ChevronRight className={`w-5 h-5 text-primary transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-muted-foreground">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function InfograficoPage() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const passos = [
        { title: "1. Estruture os dados na planilha", description: "O professor orienta a criação da planilha com dados relevantes (ex: despesas de empresas fictícias) para análise dos alunos.", icon: Database, detalhes: "Organize em colunas e linhas." },
        { title: "2. Exporte em CSV ou XLSX", description: "Os alunos aprendem a exportar os dados da planilha para formatos compatíveis com ferramentas de IA.", icon: FileOutput, detalhes: "Formatos universais para IA." },
        { title: "3. Suba na IA com prompt claro", description: "Utilização de plataformas de IA (Manus, ChatGPT, etc.) para análise dos dados, com prompts bem elaborados.", icon: Bot, detalhes: "Instruções claras geram melhores resultados." },
        { title: "4. Receba a planilha otimizada", description: "A IA retorna uma planilha com fórmulas aplicadas, gráficos gerados e um resumo executivo, otimizando o tempo de trabalho.", icon: Search, detalhes: "Economia de tempo e aprendizado." },
        { title: "5. Interpretação e análise", description: "Professor e alunos analisam e interpretam os resultados da IA, discutindo os insights e aprofundando o conhecimento.", icon: MessageSquare, detalhes: "Foco na análise crítica." },
        { title: "6. Dica bônus", description: "O desenvolvimento de um bom prompt de comando é essencial para analisar o máximo de desempenho da IA. Quer conferir um exemplo? Acesse o nosso material de apoio pelo QR Code.", icon: Lightbulb, detalhes: "Aprenda a criar prompts eficazes." },
    ];

    const competencias = [
        { titulo: "Análise Crítica", descricao: "Habilidade de ler, entender e extrair informações de representações visuais de dados.", exemplo: "Analisar um gráfico de barras para identificar o mês de maior faturamento." },
        { titulo: "Comunicação de Dados", descricao: "Capacidade de avaliar os dados e os resultados da IA de forma lógica e cética, questionando e validando as informações.", exemplo: "Questionar se um pico de vendas inesperado faz sentido no contexto do mercado." },
        { titulo: "Resolução de Problemas", descricao: "Saber expressar os achados e insights de forma clara e objetiva para diferentes públicos.", exemplo: "Criar um resumo executivo para a diretoria com base nos dados analisados." },
        { titulo: "Colaboração com IA", descricao: "Aprender a arte de criar comandos (prompts) eficazes para que a IA gere os resultados desejados.", exemplo: "Escrever um prompt pedindo à IA para '''analisar as vendas anuais e identificar os 3 produtos menos vendidos'''." },
    ];

    const downloadFile = (filename, content, type) => {
        const blob = new Blob([content], { type });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadCSV = () => {
        const csvContent = `Empresa,2022,2023,2024\nTechSolutions Ltda,150000,180000,220000\nInnovaServ S.A.,95000,110000,125000\nGlobalTrade Inc.,300000,285000,310000`;
        downloadFile('exemplo-empresas.csv', csvContent, 'text/csv;charset=utf-8;');
    };

    const downloadXLSX = () => {
        // A criação de XLSX real requer uma biblioteca. Para este exemplo, faremos o download de um arquivo CSV com a extensão .xlsx
        const csvContent = `Empresa,2022,2023,2024\nTechSolutions Ltda,150000,180000,220000\nInnovaServ S.A.,95000,110000,125000\nGlobalTrade Inc.,300000,285000,310000`;
        downloadFile('exemplo-empresas.xlsx', csvContent, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    };

    const copyPrompt = () => {
        const promptText = `Analise esta planilha de despesas empresariais e me ajude com o seguinte:\n\n1. Calcule o crescimento percentual de cada empresa entre 2022 e 2024\n2. Identifique qual empresa teve o maior crescimento absoluto\n3. Crie fórmulas para calcular a média de gastos por empresa\n4. Gere um gráfico de barras comparando as despesas por ano\n5. Forneça um resumo executivo com insights sobre as tendências\n\nPor favor, retorne uma planilha com as fórmulas aplicadas e um relatório com suas análises.`;
        navigator.clipboard.writeText(promptText).then(() => {
            alert('Prompt copiado para a área de transferência!');
        });
    };

    const downloadManualProfessor = () => {
        const link = document.createElement('a');
        link.href = '/manual-professor-bncc.pdf';
        link.download = 'Manual-Professor-Excel-Inteligente-BNCC.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <img src="/logo-uri.png" alt="URI Santo Ângelo" className="h-14" />
                    <img src="/logo-amanha.png" alt="Programa Professor do Amanhã" className="h-14" />
                </div>
            </header>

            <main className="container mx-auto px-6 py-16 sm:py-24 space-y-24">
                {/* --- Hero Section --- */}
                <section className="text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                        className="text-5xl sm:text-7xl font-extrabold hero-title mb-4"
                    >
                        Excel Inteligente
                    </motion.h1>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-2xl sm:text-3xl hero-subtitle text-muted-foreground"
                    >
                        Intervenção pedagógica com IA
                    </motion.h2>
                </section>

                {/* --- Contexto e Parceira --- */}
                <section className="grid md:grid-cols-2 gap-8">
                    <AnimatedCard className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <ListChecks className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">O Contexto</h3>
                        </div>
                        <p className="text-muted-foreground">
                            Alunos de cursos técnicos enfrentam dificuldades com fórmulas complexas em planilhas e a falta de ferramentas adequadas, o que pode desmotivar e comprometer o aprendizado de conceitos financeiros e administrativos.
                        </p>
                    </AnimatedCard>
                    <AnimatedCard className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <BrainCircuit className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">A IA como Parceira</h3>
                        </div>
                        <p className="text-muted-foreground">
                            A Inteligência Artificial auxilia alunos e professores na análise de planilhas, priorizando a interpretação prática em vez da memorização de fórmulas, o que democratiza o acesso e amplia o aprendizado.
                        </p>
                    </AnimatedCard>
                </section>

                {/* --- Passo a Passo --- */}
                <section>
                    <div className="section-title-bar">
                        <h2 className="text-2xl font-bold">Passo a Passo</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {passos.map((step, index) => (
                            <AnimatedCard key={index} className="p-8 flex flex-col text-center items-center">
                                <div className="text-primary text-6xl font-bold mb-4">{step.title.split('.')[0]}</div>
                                <step.icon className="w-12 h-12 text-primary mb-5" />
                                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title.split('. ')[1]}</h3>
                                <p className="text-muted-foreground flex-grow">{step.description}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </section>

                {/* --- Competências Trabalhadas --- */}
                <section>
                    <div className="section-title-bar">
                        <h2 className="text-2xl font-bold">Competências Trabalhadas (BNCC)</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {competencias.map((item, index) => (
                            <AccordionItem
                                key={index}
                                title={item.titulo}
                                icon={Sparkles}
                                isOpen={openAccordion === index}
                                onToggle={() => setOpenAccordion(openAccordion === index ? null : index)}
                            >
                                <p className="mb-2">{item.descricao}</p>
                                <p className="text-sm italic opacity-80">Exemplo: {item.exemplo}</p>
                            </AccordionItem>
                        ))}
                    </div>
                </section>

                {/* --- Exemplo Prático e Recursos --- */}
                <section>
                    <div className="section-title-bar">
                        <h2 className="text-2xl font-bold">Exemplo Prático e Recursos</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Coluna de Exemplo Prático */}
                        <AnimatedCard className="p-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">Experimente Agora!</h3>
                            <p className="text-muted-foreground mb-6">Use os recursos abaixo para testar a metodologia com sua ferramenta de IA favorita.</p>
                            
                            <div className="space-y-4">
                                {/* Card de Download CSV */}
                                <div className="flex flex-col items-center text-center bg-accent/20 p-4 rounded-lg border border-border">
                                    <FileText className="w-8 h-8 text-primary mb-2" />
                                    <h4 className="font-semibold mb-2">Planilha de Exemplo (CSV)</h4>
                                    <Button onClick={downloadCSV} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                        <Download className="w-4 h-4 mr-2" /> Baixar CSV
                                    </Button>
                                </div>

                                {/* Card de Download XLSX */}
                                <div className="flex flex-col items-center text-center bg-accent/20 p-4 rounded-lg border border-border">
                                    <FileText className="w-8 h-8 text-primary mb-2" />
                                    <h4 className="font-semibold mb-2">Planilha de Exemplo (XLSX)</h4>
                                    <Button onClick={downloadXLSX} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                        <Download className="w-4 h-4 mr-2" /> Baixar XLSX
                                    </Button>
                                </div>

                                {/* Card de Prompt */}
                                <div className="flex flex-col items-center text-center bg-accent/20 p-4 rounded-lg border border-border">
                                    <Bot className="w-8 h-8 text-primary mb-2" />
                                    <h4 className="font-semibold mb-2">Prompt Sugerido</h4>
                                    <Button onClick={copyPrompt} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                        <Copy className="w-4 h-4 mr-2" /> Copiar Prompt
                                    </Button>
                                </div>
                            </div>
                        </AnimatedCard>

                        {/* Coluna de Recursos para Professores */}
                        <AnimatedCard className="p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Recursos para Professores</h3>
                                <p className="text-muted-foreground mb-8">
                                    Baixe o manual completo com alinhamento à BNCC, sugestões de atividades e gabaritos para a aplicação em sala de aula.
                                </p>
                            </div>
                            <Button onClick={downloadManualProfessor} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300">
                                <FileText className="w-5 h-5 mr-3" /> Baixar Manual do Professor (PDF)
                            </Button>
                        </AnimatedCard>
                    </div>
                </section>

                {/* --- Footer --- */}
                <footer className="bg-card border-t border-border mt-24 py-8">
                    <div className="container mx-auto px-6 text-center text-muted-foreground">
                        <div className="flex justify-center items-center gap-8 mb-6">
                            <img src="/logo-uri.png" alt="URI Santo Ângelo" className="h-12" />
                            <img src="/logo-matematica.png" alt="Curso de Matemática" className="h-12" />
                            <img src="/logo-amanha.png" alt="Programa Professor do Amanhã" className="h-12" />
                        </div>
                        <p className="font-semibold">Programa Professor do Amanhã - URI Santo Ângelo</p>
                        <div className="text-xs opacity-70 mt-4">
                            <p><strong>Acadêmicos:</strong> Adriana S. Pereira, Ana Carolina Barichello, Anna Caroline R. da Luz e Lucas José G. da Silva</p>
                            <p><strong>Orientação:</strong> Profª. Dra. Rosangela Ferreira Prestes e Prof. Dr. João Carlos Krause</p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
