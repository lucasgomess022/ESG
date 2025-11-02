# Excel Inteligente — Intervenção pedagógica com IA

Um site educacional interativo que apresenta uma metodologia inovadora para ensinar planilhas em cursos técnicos, utilizando Inteligência Artificial como ferramenta de apoio pedagógico.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido por acadêmicos da URI Santo Ângelo como parte do Programa Amanhã. O site apresenta uma abordagem pedagógica revolucionária que transforma o ensino tradicional de planilhas, focando na interpretação e análise de dados em vez da memorização de fórmulas complexas.

### Conceito Principal

A metodologia proposta utiliza a exportação de dados de planilhas (CSV/XLSX) para ferramentas de IA, permitindo que professores e alunos se concentrem na análise crítica e interpretação dos resultados, democratizando o acesso ao conhecimento independentemente do software utilizado.

## 🎯 Objetivos Pedagógicos

- **Intervenção do Professor**: Orientação na estruturação de dados, validação de planilhas, ensino de prompts eficazes e interpretação de resultados
- **Competências Desenvolvidas**: Interpretação de gráficos, análise crítica, comunicação técnica e noções de finanças
- **Benefícios da Abordagem**: Maior engajamento, foco na interpretação, acesso universal e preparação para o mercado

## 🚀 Funcionalidades

### Interativas
- **Acordeões Expansíveis**: Seções organizadas em acordeões para melhor navegação
- **Carrossel de Passos**: Fluxo de ensino em 5 etapas com navegação interativa
- **Download de Exemplos**: Botões funcionais para baixar planilhas de exemplo (CSV/XLSX)
- **Cópia de Prompt**: Funcionalidade para copiar prompt sugerido para a área de transferência

### Educacionais
- **Exemplo Prático**: Planilha de despesas empresariais com dados de 3 anos
- **Prompt Sugerido**: Modelo de prompt otimizado para análise de dados com IA
- **Expectativas de Retorno**: Explicação do que esperar dos resultados da IA

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e servidor de desenvolvimento
- **Tailwind CSS**: Framework de estilos
- **Framer Motion**: Animações e transições
- **Recharts**: Gráficos e visualizações de dados
- **Lucide React**: Ícones modernos
- **shadcn/ui**: Componentes de interface

## 📁 Estrutura do Projeto

```
excel-inteligente/
├── src/
│   ├── components/
│   │   ├── InfograficoPage.jsx    # Componente principal
│   │   └── ui/                    # Componentes de interface
│   ├── assets/
│   │   ├── logo-faculdade.png     # Logo URI Santo Ângelo
│   │   ├── logo-programa.jpg      # Logo Programa Amanhã
│   │   └── exemplo-empresas.csv   # Planilha de exemplo
│   ├── App.jsx                    # Componente raiz
│   ├── App.css                    # Estilos globais
│   └── main.jsx                   # Ponto de entrada
├── public/                        # Arquivos estáticos
├── package.json                   # Dependências e scripts
└── README.md                      # Este arquivo
```

## 🎨 Design e UX

O site utiliza um design moderno com tema escuro, gradientes coloridos e animações suaves. A interface é totalmente responsiva, adaptando-se perfeitamente a dispositivos móveis e desktop.

### Paleta de Cores
- **Fundo**: Tons de cinza escuro (#030712, #111827)
- **Texto**: Cinza claro (#f3f4f6, #d1d5db)
- **Acentos**: Gradientes azul-roxo-verde (#60a5fa, #a78bfa, #34d399)

## 📱 Responsividade

O site é totalmente responsivo, com:
- Layout adaptativo para diferentes tamanhos de tela
- Navegação otimizada para dispositivos móveis
- Componentes que se reorganizam automaticamente
- Tipografia escalável

## 🔧 Desenvolvimento

### Pré-requisitos
- Node.js 18+
- pnpm (gerenciador de pacotes)

### Instalação
```bash
# Clonar o repositório
git clone [URL_DO_REPOSITORIO]

# Instalar dependências
cd excel-inteligente
pnpm install

# Executar em desenvolvimento
pnpm run dev

# Build para produção
pnpm run build
```

### Scripts Disponíveis
- `pnpm run dev`: Servidor de desenvolvimento
- `pnpm run build`: Build de produção
- `pnpm run preview`: Preview do build de produção

## 🌐 Deploy

O projeto está configurado para deploy em plataformas como:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**

### Deploy Automático
O projeto inclui configurações para deploy automático via GitHub Actions quando há push na branch main.

## 👥 Equipe

**Desenvolvido por**: Acadêmicos da URI Santo Ângelo  
**Orientação**: Professora [Nome da Professora]  
**Programa**: Amanhã  
**Instituição**: URI Santo Ângelo

## 📄 Licença

Este projeto é desenvolvido para fins educacionais como parte do Programa Amanhã da URI Santo Ângelo.

## 🤝 Contribuições

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato com a equipe através da URI Santo Ângelo.

---

*Este projeto representa uma inovação no ensino de tecnologia, combinando pedagogia moderna com ferramentas de IA para criar uma experiência de aprendizado mais eficaz e inclusiva.*

