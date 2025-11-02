# 🚀 Instruções de Deploy

## Deploy Rápido com Vercel (Recomendado)

1. **Acesse:** https://vercel.com
2. **Faça login** com sua conta GitHub
3. **Clique em "New Project"**
4. **Selecione este repositório**
5. **Clique em "Deploy"**

✅ Pronto! Seu site estará online em poucos minutos.

## Deploy com Netlify

1. **Acesse:** https://netlify.com
2. **Faça login** com GitHub
3. **"New site from Git" → GitHub**
4. **Selecione este repositório**
5. **Build command:** `npm run build`
6. **Publish directory:** `dist`
7. **Deploy site**

## Deploy com GitHub Pages

1. **Vá em Settings** do repositório
2. **Pages → Deploy from a branch**
3. **Selecione branch `gh-pages`**
4. **Save**

*Nota: Para GitHub Pages, você precisa configurar GitHub Actions primeiro.*

## Comandos Úteis

```bash
# Instalar dependências
npm install

# Executar localmente
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Estrutura do Projeto

```
excel-inteligente/
├── src/
│   ├── components/
│   │   ├── InfograficoPage.jsx  # Componente principal
│   │   └── ui/                  # Componentes shadcn/ui
│   ├── assets/
│   │   ├── logo-faculdade.png   # Logo URI Santo Ângelo
│   │   └── logo-programa.jpg    # Logo Programa Amanhã
│   ├── App.jsx                  # App principal
│   └── App.css                  # Estilos customizados
├── public/                      # Arquivos públicos
├── dist/                        # Build de produção
└── package.json                 # Dependências
```

## Tecnologias Incluídas

- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎭 Framer Motion
- 📊 Recharts
- 🎯 Lucide Icons
- 🧩 shadcn/ui

## Suporte

Para dúvidas sobre deploy, consulte:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Netlify](https://docs.netlify.com)
- [GitHub Pages](https://pages.github.com)

