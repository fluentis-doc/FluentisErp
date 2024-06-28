---
title: Tab Parâmetros
sidebar_position: 2
---

Na abertura da janela 'Contabilidade-Encerramento contas' no primeiro tab chamado 'Parâmetros' precisa inserir os filtros de captura dos dados das registrações e os códigos de subconta e causais a utilizar nas escrituras do livro jornal.

Os primeiros três campos (data encerramento, versão, descrição) reportam a data cujo se efetua a operação (não tem nenhuma influencia com as datas de registração), o número progressivo do encerramento, e como o usuário define a mesma operação (tipicamente encerramento contas ano...). O ano contábil dos parâmetros de contabilidade a indicar serve para a gestão da reabertura das escrituras de ajustamento, a ativar na base da máscara com o flag de 'Transferência escrituras de ajustamento': se trata de gerir, na reabertura das contas, os movimentos de retribuição dos acréscimos e dos diferimentos aos custos/receitas relativos (os diferimentos vão ser registrados na mesma data de abertura das contas, os acréscimos invés na data da registração do documento de origem).

Nos campos de filtro para datas de registração e competência precisa inserir os parâmetros para a individuação das registrações a reportar no saldo contábil: em particular as datas de competência vão ser relativas ao período de balanço (1/1/...-31/12/...), enquanto o campo 'A data registração' poderia deslizar no exercício sucessivo para compreender as escrituras de retificação: aconselha-se mais simplesmente de não estabelecer o filtro para datas registração.

É também possível efetuar o flag para gerir o saldo de encerramento e reabertura para a moeda de movimentação: isso significa que o programa insere uma linha para cada moeda de movimentação da subconta específica, mantendo claramente o total da moeda da sociedade correta. Tal possibilidade é necessária para garantir a honestidade dos saldos iniciais da imprensa 'Extrato conta na moeda'.

Depois desses dados precisar dar ao programa as referências das causais contábeis, das datas de registração e das contas a utilizar nas operações de encerramento e de reabertura. Tais dados (salvo as datas de registração) são reportados automaticamente se inseridos dentro da tabela 'Parâmetros de contabilidade', tab 'Contas'. O flag 'Transferência das escrituras de ajustamento' faz procurar automaticamente a reabertura dos custos/receitas retificados com o procedimento 'Escrituras de ajustamento'.

A partir deste ponto é possível salvar as impostações com o relativo botão, em modo de ativar os outros presentes. Antes de continuar com as operações precisa verificar as impostações da tabela 'Tipos conta': em particular os tipos conta de registro cliente-fornecedor-agente-bancos além de ter um flag sobre as relativas colunas que tem que ter uma segunda numa das duas primeiras colunas, relativas ao ativo e ao passivo patrimonial. É portanto possível entrar no procedimento e iniciar a 'Retomada das subcontas' com o relativo botão, em modo de fazer calcular ao programa o saldo de cada subconta e de apresentar nas fichas 'lucros e perdas' e 'patrimonial' os dados relativos. Depois de ter os resultados é possível passar para a última fase do procedimento: entrando de novo da ficha parâmetros, pode-se clicar o botão 'Criar registração encerramento', que vai criar as registrações contábeis relativas e vai inserir o flag na 'Contabilizada'.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar o cabeçalho do encerramento das contas, ativável depois de ter inserido a descrição. |
| Retomada dos valores subcontas | Botão para fazer o programa calcular o saldo de cada subconta e de apresentar nas fichas 'lucros e perdas' e 'patrimonial' os dados relativos. |
| Criar registração para o encerramento das contas | Botão para criar a registração de encerramento contas. |
| Restaurar contabilização | Botão para restaurar a contabilização do encerramento das contas. |






