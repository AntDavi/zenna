# Workflow de Commit e Controle de Qualidade de Código

Este documento descreve as ferramentas e processos utilizados no projeto para garantir a qualidade do código, padronização e consistência nos commits.

## 🛠 Tecnologias Utilizadas

### 1. ESLint

**O que é:** Uma ferramenta de análise estática de código para identificar padrões problemáticos em código JavaScript/TypeScript.
**Função no projeto:** Identificar erros de lógica, bugs potenciais e garantir que boas práticas de codificação sejam seguidas. Diferente do Prettier, o ESLint foca na _qualidade_ e _lógica_ do código.
**Comando:** `pnpm lint` (ou executado automaticamente via lint-staged).

### 2. Prettier

**O que é:** Um formatador de código opinativo.
**Função no projeto:** Garantir um estilo consistente de código (indentação, aspas, vírgulas, espaçamento) em todos os arquivos. Ele remove a necessidade de discutir estilo em Code Reviews.
**Configuração:** Definida no arquivo `.prettierrc`.

### 3. Husky

**O que é:** Uma ferramenta que facilita o uso de **Git Hooks**. Git Hooks são scripts que o Git executa antes ou depois de eventos como commit, push, etc.
**Função no projeto:** Automatizar a verificação do código. O Husky intercepta o processo de commit (`pre-commit`) e executa scripts de verificação antes que o commit seja efetivamente criado.
**Localização:** Configurado na pasta `.husky/`.

### 4. lint-staged

**O que é:** Uma ferramenta que permite rodar linters (como ESLint e Prettier) apenas nos arquivos que estão sendo "commitados" (staged files).
**Função no projeto:** Otimiza o processo de verificação. Em vez de rodar o ESLint no projeto inteiro (o que seria lento), ele roda apenas nos arquivos modificados. Se houver erros, o commit é bloqueado.
**Configuração:** Arquivo `.lintstagedrc.json`.

### 5. git-commit-msg-linter

**O que é:** Um utilitário que verifica se a mensagem do commit segue um padrão estabelecido (geralmente [Conventional Commits](https://www.conventionalcommits.org/)).
**Função no projeto:** Forçar mensagens de commit semânticas e padronizadas.
**Exemplo de formato aceito:** `feat: adiciona componente de botão` ou `fix: corrige erro de login`.

---

## 🔄 O Fluxo de Commit (Workflow)

Quando você realiza uma alteração e tenta fazer um commit, o seguinte fluxo acontece automaticamente:

1. **Stage Changes:** Você adiciona arquivos à área de stage (`git add .`).
2. **Commit:** Você executa o comando `git commit -m "feat: sua mensagem"`.
3. **Husky (hook: `pre-commit`):** O Husky intercepta o comando e executa o script configurado (neste caso, `lint-staged`).
4. **lint-staged:**
   - Verifica quais arquivos estão em stage.
   - Para arquivos `.ts`, `.tsx`, `.js`: Executa `eslint --fix` e `prettier --write`.
   - Para arquivos `.json`, `.md`, `.css`: Executa `prettier --write`.
   - Se o ESLint encontrar erros que não consegue corrigir automaticamente, o processo **para** e o commit falha. Você deve corrigir manualmente.
   - Se o Prettier formatar algo, ele atualiza o arquivo automaticamente.
5. **Validação da Mensagem (git-commit-msg-linter):**
   - Verifica semântica da mensagem (ex: deve começar com `feat:`, `fix:`, `chore:`, etc.).
   - Se a mensagem estiver fora do padrão, o commit é rejeitado com um aviso.
6. **Commit Concluído:** Se tudo passar, o commit é gravado no histórico.

---

## ⚙️ Configuração e Integração

### Estrutura de Arquivos

- `package.json`: Contém as dependências e scripts.
- `.lintstagedrc.json`: Define o que rodar para cada extensão de arquivo.
- `.husky/pre-commit`: Define que o `lint-staged` deve ser chamado antes do commit.

### Como foi configurado

1.  **Instalação das dependências:**

    ```bash
    pnpm add -D eslint prettier husky lint-staged git-commit-msg-linter
    ```

2.  **Inicialização do Husky:**

    ```bash
    pnpm exec husky init
    ```

    Isso cria a pasta `.husky` e o script `prepare` no `package.json`.

3.  **Configuração do Hook `pre-commit`:**
    O arquivo `.husky/pre-commit` foi editado para conter:

    ```sh
    npx lint-staged
    ```

4.  **Configuração do `lint-staged`:**
    Criado o arquivo `.lintstagedrc.json` na raiz:
    ```json
    {
      "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
      "*.{json,md,css}": ["prettier --write"]
    }
    ```

### Guia de Mensagens de Commit (Conventional Commits)

O `git-commit-msg-linter` espera que você siga este padrão:

`tipo(escopo?): descrição`

**Tipos comuns:**

- `feat`: Nova funcionalidade.
- `fix`: Correção de bug.
- `docs`: Alterações apenas na documentação.
- `style`: Alterações que não afetam o significado do código (espaços, formatação, etc).
- `refactor`: Alteração de código que não corrige bug nem adiciona funcionalidade.
- `perf`: Melhoria de performance.
- `test`: Adição ou correção de testes.
- `chore`: Alterações no processo de build ou ferramentas auxiliares (ex: mudar configs).

**Exemplos Válidos:**

- `feat: adiciona integração com Stripe`
- `fix(navbar): corrige alinhamento do logo`
- `docs: atualiza readme com instruções de setup`

**Exemplos Inválidos (serão bloqueados):**

- `adiciona botão` (falta o tipo)
- `WIP` (descrição vaga e sem tipo)
- `Corrigindo bug` (falta o padrão `fix:`)

---

## ✅ Benefícios deste Setup

1.  **Qualidade Automática:** Ninguém "esquece" de rodar o linter ou formatar o código.
2.  **Code Review Mais Limpo:** Os revisores focam na lógica, não em vírgulas ou indentação errada.
3.  **Histórico Organizado:** Commits semânticos facilitam gerar changelogs e entender a história do projeto.
4.  **Produtividade:** Erros simples são pegos localmente antes de chegarem ao CI/CD.
