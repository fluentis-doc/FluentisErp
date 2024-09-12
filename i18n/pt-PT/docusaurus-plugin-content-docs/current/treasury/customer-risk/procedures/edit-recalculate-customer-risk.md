---
title: Modificar - Recalcular o risco cliente
sidebar_position: 1
---

As duas máscaras geram a visualização do estado compressivo do risco para um determinado cliente: 'Recalcular o risco cliente' é um simples pedido da situação atual do cliente, enquanto a máscara de mudança do procedimento 'Utilização crédito' permite memorizar cada cálculo efetuado e visualizar portanto uma série histórica.

Vamos ver em detalhe a lista dos campos visualizada, que é substancialmente a mesma presente na máscara da exposição clientes.

No cabeçalho estão presentes os parâmetros de cálculo: o código do cliente, a data de início cálculo (estabelecida de default pelos parâmetros do módulo risco cliente), a data final de referência (estabelecida hoje), o número de dias de atraso para os efeitos sbf e os efeitos depois da cobrança (estabelecidos pelos parâmetros do módulo) e o flag de consideração das partidas associadas com as registrações provisórias. Apertando o botão de cálculo vão aparecer os seguintes valores:

**Fat. 12M**: é o faturado (da área de venda, faturas de venda) dos 12 meses precedentes a data de referência;

**Faturado ano**: é o faturado (da área de venda, faturas de venda) do início do ano;

Na seção **Situação partidas abertas** vão ser visíveis os totais débito/crédito e o saldo relativo as partidas abertas;

Na seção **Pag. da re. prov.** são visualizados as eventuais quantias de pagamento inseridas nas registrações provisórias;

Na seção **Situação saldo contábil** vão ser visualizado os totais débito/crédito e o saldo do livro-razão da contabilidade geral;

**Saldo partidas/contábil**: repropõe os totais débito/crédito calculados pelas partidas ou pelo saldo assim como visualizado nas seções precedentes;

**Faturas a contabilizar**: são as quantias das faturas (dos tipos fatura associados com o crédito) imprimidas mas ainda não contabilizadas;

**CT-e a faturar**: são as quantias das notas de entrega (dos tipos notas de entrega associadas com o crédito) imprimidas mas ainda não faturadas;

**Ordens a executar**: são as quantias das ordens (dos tipos ordem associadas com o crédito) imprimidas, confirmadas mas ainda não executadas;

**Efeitos emitidos**: são as quantias dos efeitos (do módulo carteira efeitos) emitidas e contabilizadas, mas ainda não apresentadas;

**Efeitos apresentados no desconto - ao sbf - da cobrança**: são as quantias dos efeitos apresentados mas que tem a data de vencimento (mais os dias dos parâmetros inseridos no cabeçalho do cálculo) superior a data de referência;

Seção **Não pagos**: se visualizam os não pagos não contabilizados, ou (se o flag é inserido) mesmo aqueles já contabilizados, como quantia que relativo número;

A partir da soma dos valores precedentes se calcula o 'Risco cliente', que comparado com o crédito concedido, vai dar a ultrapassagem do crédito.

O campo **Vencido** visualiza a quantia das partidas abertas mas já vencidas, qual interior elemento de análise da situação do cliente.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | O botão, presente na mudança de um crédito já calculado, permite memorizar o resultado obtido. |
| Calcular | Refere-se ao procedimento para calcular a situação compressiva de risco para o cliente. |






