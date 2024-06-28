---
title: Balanço de exercício
sidebar_position: 1
---

Este relatório tem a função de apresentar um prospeto base do balanço de empresa, subdividindo de default as quatro seções ativo/passivo/custos/receitas típicas. Se acentua que o relatório funciona unicamente para a data competência contábil inserida no cabeçalho da registração, independentemente portanto da data de registração da mesma no libro jornal.

Vamos ver as várias opções previstas na máscaras:

**Visualização quantias com sinal negativo**: se estabelecido o aplicativo vai inserir cada subconta na seção de pertence (em relação o seu tipo conta) com o eventual sinal negativo quando o saldo estivar na seção contrária. Se o flag não foi inserido, como de default, cada subconta vai ser visualizada na seção relativa o seu saldo;

**Detalhe do registro**: de default o aplicativo exclui todo o detalhe das subcontas associadas com os clientes/fornecedores e aos agentes. Só com o relativo flag vão ser visualizados os detalhe dessas subcontas de registro;

**Excluir contas de ordem**: as contas de ordem são visualizadas na parte inferior das seções do ativo e passivo. Com este flag as contas de ordem não vão ser visualizadas no relatório. Lembra-se, em particular, que as contas de ordem nunca são objetos de encerramento/abertura das contas no procedimento automático do aplicativo;

**Comparação ano precedente**: com esta opção vai ser executado o relatório CA_BilancioAnnoPrec.rpt que prevê a coluna do ano em curso e uma para o saldo do mesmo período mas do ano precedente aquele estabelecido como filtro;

**Excluir causal**: se foram relevadas as registrações de encerramento das contas, para obter os saldos de balanço vai precisar excluir os movimentos baseados na causal de encerramento. Executar o relatório sem excluir esse vai dar um relatório com todos os saldos zero: isso pode ser utilizado como controle de verificação do efetivo bom fim das operações de encerramento contas efetuadas;

É possível inserir na imprensa também os movimentos que derivam das registrações provisórias.

Última anotação, refere-se a outros arquivos associáveis através da gestão do procedimento: o relatório CA_BilancioSezioni.rpt visualiza o balanço com seções contraposta, o relatório CA_BilancioGruppi.rpt invés visualiza a estrutura de plano das contas com os relativos resultados dos agrupamentos das várias contas.

Se lembra que, com a máxima flessibilidade de reclassificação (p.ex. balanço em relação IV diretiva CEE) se obtém utilizando o módulo Balanço e os relativos modelos de reclassificação.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Pré-visualização | Botão para executar a pré-visualização de imprensa do balanço de exercício. |
| Imprimir | Botão para executar a imprensa física do balanço de exercício. |






