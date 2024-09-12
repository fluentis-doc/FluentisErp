---
title: Liquidação Imposto periódico
sidebar_position: 5
---

Com este procedimento de imprensa se procede com o cálculo do Imposto a crédito/débito do período de referência: para esse relatório não é obrigatório que sejam já impressos os registros Imposto do período, mas tem que ser tida imprimida a imprensa definitiva da liquidação Imposto do período precedente (ou um carregamento manual na tabela 'Pagamentos Imposto' que da o mesmo resultado de bloquear o período Imposto na contabilidade) com o objetivo de reportar o eventual crédito do período precedente.

Uma vez estabelecido o período e o ano de referência (onde o período vai ser mensal ou trimestral em relação da periodicidade da liquidação Imposto periódica estabelecida nos parâmetros de contabilidade) vai ser possível definir em qual registro a liquidação é imprimida: normalmente a operação é efetuada no final do registro vendas ou no registro resumo dedicado (opção aconselhada). Se foi selecionado o último período do ano se habilita a possibilidade imprensa/cálculo da conta Imposto, em relação o relatório vai reportar as registrações até a data do 20/12/yyyy.

O flag 'Visualizar intestação' é proposto de default: tira-se só se a sociedade proceder a imprimir nos módulos carimbados. A opção de imprensa definitiva, invés, vai modificar o período de referência para faze-lo corresponder aquele sucessivo ao último imprimido em definitivo e vai ser também desabilitado o número de cópias a imprimir. A execução da pré-visualização de imprensa em definitivo não vai bloquear o período e atualizar os contadores: só a execução do processo de imprensa física vai operar o bloqueio do período na contabilidade e atualizar o contador das páginas da tabela Registros Imposto (e não é importante que o processo de imprensa termine com bom fim, poderia ser também uma imprensa no arquivo).

A imprensa definitiva vai habilitar a opção de contabilização do saldo do período: estabelecendo esta opção o aplicativo vai ativar a lista das contas a utilizar (retomando-os pelos parâmetros de contabilidade) e o usuário vai ter que simplesmente dar a causal e as datas de referência: uma vez executado o processo de imprensa vão ser acrescentados na contabilidade duas registrações de transferência do Imposto compras e vendas com as subcontas de Imposto a débito/crédito.

Para concluir, a opção de imprensa da Declaração Imposto periódico não é mais importante vista a abolição da mesma declaração da fiscalidade italiana.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Pré-visualização | Botão para executar a pré-visualização de imprensa da liquidação. |
| Imprimir | Botão para executar a imprensa física da liquidação. |






