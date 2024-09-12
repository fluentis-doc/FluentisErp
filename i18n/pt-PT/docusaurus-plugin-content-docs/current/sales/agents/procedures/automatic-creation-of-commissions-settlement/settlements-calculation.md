---
title: Cálculo liquidações
sidebar_position: 2
---

Uma vez executada a procura, na seção **Lista agentes** vão ser visualizados todos os agentes definidos no sistema: nessa seção precisa selecionar a lista dos sujeitos pelas quais executar o cálculo. Precisa notar que é também visível o tipo de maturação da comissão agente, para poder estabelecer os filtros de direita em maneira idônea as impostações do agente.

Na direita se apresentam os seguintes filtros:

- um filtro para a moeda do documento, para criar uma liquidação agente diferenciada para a moeda;

- três seções de filtro de acordo com o documento de referência (ordem/nota de entrega/faturas, para os agentes com ordem confirmada, entrega efetuada e fatura emitida);

- uma seção de filtro nas partidas, para os agentes com vencimento maturado ou pagamento acontecido: de acordo com a data estabelecida vão ser portanto maturadas as partidas com prazos antecedentes no primeiro caso, no segundo caso, a quota-parte em relação aos adiantamentos registrados na contabilidade com data antecedente. No caso de efeitos, esses vão ser considerados maturados até o dia de maturação (quer dizer, data de vencimento mais os dias de risco cliente estabelecidos nos parâmetros do homônimo módulo).

O flag 'Conversão comissões utilizando a troca na data documento' prevê ao contrário que a quantia das comissões seja efetuada de acordo com a troca da data do documento, senão vai ser utilizado de default a troca da data de liquidação agente assim como estabelecido nos campos na base da máscara. 

Na seção inferior, 'Extremos para a criação da liquidação das comissões', é indicada a data da liquidação, uma sua descrição e o mês/ano de referência para o cálculo do Enasarco.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | O botão executa a procura dos agentes presentes na sociedade ativa. |
| Cálculo liquidações | Com este botão se executa o cálculo das liquidações para os agentes selecionados,de acordo com as impostações de filtro estabelecidas. |






