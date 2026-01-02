# Configuração de Workflow de Commit

Este documento descreve a configuração implementada para garantir a qualidade do código e a padronização das mensagens de commit no projeto.

## Ferramentas Utilizadas

1.  **Husky**: Gerencia os Git Hooks (ações disparadas em eventos do Git).
2.  **lint-staged**: Executa scripts apenas nos arquivos que estão no "stage" (prontos para o commit).
3.  **ESLint**: Linter para encontrar e corrigir problemas no código JavaScript/TypeScript.
4.  **Prettier**: Formatador de código para manter um estilo consistente.
5.  **prettier-plugin-tailwindcss**: Plugin do Prettier que organiza automaticamente as classes do Tailwind CSS.
6.  **Commitlint**: Valida se as mensagens de commit seguem o padrão [Conventional Commits](https://www.conventionalcommits.org/).

## Como Funciona

### 1. Pré-commit (Qualidade do Código)

Ao tentar realizar um commit (`git commit`), o Husky dispara o hook `pre-commit`, que executa o `lint-staged`.
O `lint-staged` está configurado para:

- Em arquivos `.js`, `.jsx`, `.ts`, `.tsx`: Executar `eslint --fix` e `prettier --write`.
- Em arquivos `.json`, `.md`, `.css`: Executar `prettier --write`.

Isso garante que o código commitado esteja sempre formatado e sem erros de lint básicos.

### 2. Mensagem de Commit (Padronização)

Após a verificação do código, o Husky dispara o hook `commit-msg`, que executa o `commitlint`.
O commit só será aceito se a mensagem seguir o padrão:
`tipo(escopo): descrição`

Exemplos de tipos válidos:

- `feat`: Nova funcionalidade.
- `fix`: Correção de bug.
- `docs`: Alteração em documentação.
- `style`: Alterações que não afetam o sentido do código (espaços, formatação, etc).
- `refactor`: Alteração de código que não corrige bug nem adiciona funcionalidade.
- `perf`: Melhoria de performance.
- `test`: Adição ou correção de testes.
- `chore`: Alterações em processos de build ou ferramentas auxiliares.

Exemplo de commit válido:
`feat(auth): adiciona suporte ao login com Google`

## Arquivos de Configuração

- `.husky/`: Contém os scripts dos hooks.
- `.lintstagedrc.json`: Define quais comandos rodar em quais arquivos no stage.
- `.prettierrc`: Configurações do Prettier e ativação do plugin Tailwind.
- `commitlint.config.js`: Configuração das regras de mensagem de commit.

## Comandos Úteis

Se precisar reinstalar os hooks (por exemplo, após um `npm install` ou `pnpm install` em uma nova máquina):

```bash
pnpm husky
```

ou

```bash
pnpm prepare
```
