---
title: Exposição clientes
sidebar_position: 2
---

A máscara 'Exposição clientes' permite ter um quadro geral compressivo de toda a situação de risco para os vários clientes, com a possibilidade de obter dados para o agente, nação, agrupamento mesmo para grupos sociais. Vamos ver em detalhe as impostações presentes e os valores devolvidos, considerando que os clientes apresentados na máscara são aqueles pelas quais no registro foi inserido o flag 'Exposição clientes'.

A seção inicial dos parâmetros de risco cliente repropõe os mesmos parâmetros de default de cálculo estabelecidos para o módulo, com a mais a gama de datas de registração utilizada para o controle das remessas (para os detalhes ver o documento sucessivo).

Na seção sucessiva do cabeçalho é possível filtrar por um determinado responsável (o empregado que foi associado com o registro cliente, primeiro tab 'Administração'), filtrar os clientes 'Estrangeiros' ou 'Itália', visualizar os dados agrupados para o 'grupo social' (vai ser visualizado só um total para a subconta inserida no campo do 'grupo social' presente no tab administração do registro cliente invés que cada subconta cliente de detalhe) e enfim agrupar (e filtrar) os dados por agente ou nação. A direita é prevista a possibilidade de ordenar os dados por código de conta/subconta ou por descrição (razão social) do cliente.

Abaixo se encontram os dados detalhados visualizados na grelha (pela qual serão visualizadas em vermelho as linhas com variação):

**Não pagos**: se visualiza a quantia dos não pagos não contabilizados, ou (se o flag foi inserido no cabeçalho) mesmo aqueles já contabilizados;

**Fat. últimos 12 meses**: é o faturado (da área venda, faturas de venda) dos 12 meses precedentes a data de referência;

**Variação dias**: indica o número de dias de variação entre o prazo médio e a data moeda de cobrança média, em relação com o calculado com a lógica da máscara 'Controle remessas';

**Variação dias venc.**: indica o número de dias de variação médios da data de vencimento em comparação com a data documento;

**Faturado**: é o faturado (da área venda, faturas de venda) do começo do ano;

**DSO**: Days of Sales Outstanding, os dias de rotação do crédito. A fórmula de cálculo é 365 * (Partidas débito - Partidas crédito + Efeitos no vencimento + Não pagos + Faturas a contabilizar) / Fat. últimos 12 meses. Se o faturado dos últimos 12 meses for 0, o DSO vai ser também 0;

**Crédito **e** Crédito assegurado**: quantia do crédito gestional e do crédito assegurado;

**Saldo livro-razão**: repropõe os totais débito/crédito calculados pelas partidas ou pelo saldo contábil;

**Pag. da reg. prov.**: quantia dos pagamentos das partidas associadas com as registrações provisórias;

**Efeitos no vencimento**: quantia dos efeitos em maturação (efeitos emitidos + apresentados);

**A contabilizar**: são as quantias das faturas (dos tipos fatura associados com o crédito) imprimidas mas ainda não contabilizadas;

**A faturar**: são as quantias das notas de entrega (dos tipos nota de entrega associados com o crédito) imprimidas mas ainda não faturadas;

**Tot. exposição**: soma das ordens abertas + CT-e do fat. + fat. a cont. + saldo partidas/cont. + efeitos a vencer + não pagos não cont.;

**Vencido**: quantia das partidas abertas e já vencidas;

**Vencido da reg. prov.**: como o precedente, mas derivam da registrações provisórias;

**Ordens**: são as quantias das ordens (dos tipos ordem associados com o crédito) imprimidos, confirmados mas ainda não executados.

A partir da máscara da exposição clientes é possível: efetuar uma imprensa dos dados visualizados, ou passar na máscara do 'Controle remessas' relativamente a linha do cliente selecionado, através do relativo botão de gestão.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Calcular | Botão para calcular o risco clientes em relação com os filtros e as impostações indicadas. |
| Pré-visualização | Refere-se ao procedimento de pré-visualização para o cálculo efetuado. |
| Imprimir | Refere-se ao procedimento de imprensa para o cálculo efetuado. |
| Controle remessas | Refere-se ao procedimento para abrir a máscara de controle das remessas. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção e uma pesquisa sobre os dados da exposição dos clientes. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos.

GRELHA DE RESULTADO: a grelha de resultado é uma lista dos cálculos que correspondem aos dados de filtro especificados acima. O usuário, depois de especificar os valores pelos quais deseja obter um cálculo exposição, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha a lista das exposições que quiser. 






