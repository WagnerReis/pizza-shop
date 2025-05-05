# Pizza Shop Web

## Visão Geral do Projeto

O Pizza Shop Web é uma aplicação web moderna projetada para gerenciar as operações de uma pizzaria. Esta aplicação frontend fornece uma interface intuitiva para lidar com pedidos, gerenciamento de cardápio e análises de negócios. É construída com React e TypeScript, com foco em desempenho e experiência do usuário.

## Tecnologias e Bibliotecas

### Principais
- **React** - Biblioteca UI para construção da interface do usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Ferramenta de build rápida e servidor de desenvolvimento

### Gerenciamento de Estado e Busca de Dados
- **@tanstack/react-query** - Busca de dados, cache e gerenciamento de estado
- **axios** - Cliente HTTP para requisições à API

### Estilização e UI
- **tailwind-merge** - Utilitário para mesclar classes do Tailwind CSS
- **clsx** - Utilitário para juntar nomes de classes condicionalmente
- **Tailwind CSS** - Framework CSS utilitário

### Ambiente e Configuração
- Manipulação personalizada de variáveis de ambiente via `@/env`

### Testes e Qualidade
- Ferramentas de relatório de cobertura de código

## Funcionalidades

- **Integração com API** - Configurada com axios para comunicação perfeita com o backend
- **Design Responsivo** - Construído com Tailwind CSS para uma experiência mobile-friendly
- **Otimizado para Performance** - Usa React Query para busca e cache eficientes de dados
- **Ferramentas de Desenvolvimento** - Inclui simulação opcional de atraso na API para testar estados de carregamento

## Começando

1. Clone o repositório
2. Instale as dependências com `npm install` ou `yarn install`
3. Configure as variáveis de ambiente (crie um arquivo `.env` baseado no `.env.example`)
4. Inicie o servidor de desenvolvimento com `npm run dev` ou `yarn dev`

## Variáveis de Ambiente

- `VITE_API_URL` - URL base para requisições à API
- `VITE_ENABLE_API_DELAY` - Alternativa para simular latência de rede (útil para testar estados de carregamento)

## Estrutura do Projeto

O projeto segue uma arquitetura modular com preocupações separadas:
- `src/lib` - Funções utilitárias e configuração
- API client setup com interceptadores para desenvolvimento
- Funções utilitárias personalizadas para estilização e gerenciamento de nomes de classes