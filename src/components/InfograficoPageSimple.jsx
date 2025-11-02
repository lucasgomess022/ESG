import React from 'react';

export default function InfograficoPageSimple() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 p-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                Excel Inteligente — Intervenção pedagógica com IA
            </h1>
            <p className="text-center text-gray-400 mb-8">
                Como transformar o ensino de planilhas em cursos técnicos usando exportação para IA.
            </p>
            
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4">O Contexto</h2>
                    <p>
                        Alunos de cursos técnicos frequentemente enfrentam dificuldades com fórmulas complexas em planilhas 
                        e nem sempre têm acesso ao software Excel oficial. Essa barreira técnica pode desmotivar e limitar 
                        o aprendizado de conceitos financeiros e administrativos essenciais.
                    </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">A Oportunidade: IA como Parceira</h2>
                    <p>
                        A Inteligência Artificial surge como uma poderosa aliada, permitindo que alunos e professores 
                        utilizem ferramentas de IA para analisar dados de qualquer planilha (Excel, Google Sheets, LibreOffice), 
                        focando na interpretação e aplicação prática, e não apenas na memorização de fórmulas.
                    </p>
                </div>
            </div>
        </div>
    );
}

