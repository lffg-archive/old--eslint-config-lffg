# `eslint-config-lffg`

Minha configuração ESLint (com prettier) padrão.

Informações importantes em relação ao estilo do código:

- 2 espaços para indentação;
- Sem ponto e vírgula.

## O que faz?

- Linta o JavaScript baseando-se nos últimos padrões;
- Formata o código com Prettier;
- Linta e corrige erros nas tags script do HTML;
- Você pode verificar todas as [regras aqui](https://github.com/lffg/eslint-config-lffg/blob/master/.eslintrc.js).

## Instalação

Você pode usar o ESLint globalmente e/ou localmente por projeto.

### Instalação por projeto

1. Se você ainda não tiver um arquivo `package.json`, crie um usando `npm init -y`.

2. Em seguida, instale todas as dependências necessárias:

```shell
# Yarn:
npx install-peerdeps --dev --yarn eslint-config-lffg

# NPM:
npx install-peerdeps --dev eslint-config-lffg
```

3. Crie um arquivo `.eslintrc.json` na raiz do diretório do seu projeto (mesmo diretório do `package.json`). Seu arquivo `.eslintrc.json` deve conter:

```json
{
  "extends": ["lffg"]
}
```

4. **[Opcional]** Você pode adicionar `npm scripts` no seu `package.json` para lintar e corrigir o código:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

5. Agora você pode lintar o seu código manualmente através do comando `npm run lint` e corrigir todos os problemas _corrigíveis_ com `npm run lint:fix`. No entanto, você provavelmente preferirá que o seu editor de código faça isso.

### Instalação Global

1. Instale todas as dependências necessárias:

```shell
# Yarn:
npx install-peerdeps --global --yarn eslint-config-lffg

# NPM:
npx install-peerdeps --global eslint-config-lffg
```

2. Em seguida, crie um arquivo global `.eslintrc.json`:

O ESLint vai procurar por um no diretório do seu usuário.

- `~/.eslintrc.json` para Mac; ou:
- `C:\Users\<user>\.eslintrc.json` para Windows.

Seu arquivo global `.eslintrc.json` deve conter:

```json
{
  "extends": ["lffg"]
}
```

3. Para usar através da CLI, você agora pode executar o comando `eslint .` ou configurar o seu editor conforme será mostrado a seguir.

## Integração com o VSCode

Assim que você tiver concluido a instalação, você provavelmente irá desejar que seu editor linte e corrija os erros para você. Aqui estão as instruções para que isso seja possível no VSCode:

1. Instale a [extensão do ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint);
2. Abra as preferências do VSCode em `Code/File (Código/Arquivo)` → `Preferences (Preferências)` → `Settings (Configurações)`. É mais fácil configurar diretamente pelo arquivo `settings.json`. Para isso, clique no ícone `{}` no canto superior direito.

```js
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},

// [!] Yarn:
"eslint.packageManager": "yarn",

"eslint.autoFixOnSave": true,

// Opcional mas importante: Se você tiver a extensão do prettier ativada para outras linguagens como CSS ou HTML, desligue-a para JavaScript, já que estamos fazendo isso através do ESLint.
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```

## Configurações de Regras Adicionais

Se você quiser sobrescrever as regras do [ESLint](https://eslint.org/docs/rules/) ou [Prettier](https://prettier.io/docs/en/options.html), você pode editar o arquivo `.eslintrc.json`:

```js
{
  "extends": ["lffg"],
  "rules": {
    // Suas regras do ESLint aqui.
    // <https://eslint.org/docs/rules/>

    "prettier/prettier": [
      "error",
      {
        // Suas opções do Prettier aqui.
        // <https://prettier.io/docs/en/options.html>
      }
    ]
  }
}
```

---

Este pacote é distribuído sob a [Licença MIT](https://github.com/lffg/eslint-config-lffg/blob/master/LICENSE).

Isso é um _fork_ do [`eslint-config-wesbos`](https://github.com/wesbos/eslint-config-wesbos) e altamente inspirado nas regras do [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app).
