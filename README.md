# Challenge Decodificador de Texto

Este projeto é uma aplicação web simples que realiza a criptografia e descriptografia de texto usando um conjunto específico de "chaves" de criptografia.

## Descrição

A aplicação converte letras minúsculas em strings codificadas e vice-versa, seguindo as seguintes regras:

- A letra **"e"** é convertida para **"enter"**.
- A letra **"i"** é convertida para **"imes"**.
- A letra **"a"** é convertida para **"ai"**.
- A letra **"o"** é convertida para **"ober"**.
- A letra **"u"** é convertida para **"ufat"**.

### Exemplo

- **Texto original:** `gato`
- **Texto criptografado:** `gaitober`
- **Texto descriptografado:** `gato`

## Requisitos

- A aplicação deve funcionar apenas com letras minúsculas.
- Não devem ser utilizados letras com acentos nem caracteres especiais.
- Deve ser possível converter um texto para a versão criptografada e também retornar uma versão criptografada para a versão original.

## Funcionalidades

- **Criptografia:** Converte o texto inserido para a versão criptografada com base nas chaves fornecidas.
- **Descriptografia:** Converte o texto criptografado de volta para o texto original.
- **Interface do Usuário:** A página possui campos para inserção do texto a ser criptografado ou descriptografado, e permite que o usuário escolha entre as duas opções.
- **Exibição dos Resultados:** O resultado da criptografia ou descriptografia é exibido na tela para o usuário.

## Como Usar

1. **Digite o texto:** Insira o texto que você deseja criptografar ou descriptografar no campo de entrada.
2. **Escolha a ação:** Selecione o botão **"Criptografar"** para converter o texto para a versão criptografada ou **"Descriptografar"** para converter de volta ao texto original.
3. **Veja o resultado:** O texto convertido será exibido na tela.
4. **Copie o texto:** Use o botão **"Copiar"** para copiar o texto exibido para a área de transferência.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização da página.
- **JavaScript**: Lógica de criptografia e descriptografia.
