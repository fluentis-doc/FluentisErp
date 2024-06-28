---
title: Procurar estoque
sidebar_position: 1
---

O procedimento Visualizar estoque foi estudado para permitir ao usuário extrapolar facilmente os estoques de depósito com o objetivo de controlar o depósito e a correspondência entre o estoque físico e lógico.

O procedimento da visualização estoque foi constituída na seguinte maneira:

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Recalculo estoques | Botão para recalcular os estoques depois das ações de importação movimentos do externo. |
| Procurar | Refere-se ao procedimento para procurar os estoque em relação os filtros inseridos. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Geração registrações | Executa o procedimento para criar uma registração de depósito. Presente só no tab depósito, encomenda de produção e detalhe estoque artigo. |
| Pré-visualização | Executa o procedimento para visualizar a pré-visualização de imprensa de um relatório padrão ou de um relatório personalizado. Presente só no tab detalhe estoque artigo. |
| Imprimir | Executa o procedimento para executar a imprensa física do relatório padrão ou de uma relatório personalizado. Presente só no tab detalhe estoque artigo. |

ÁREA DE FILTRO: a área de filtro é dedicada à hospedagem na lista de possíveis tipos de dados através do qual é possível fazer uma seleção e uma pesquisa sobre o total dos estoques de depósito. Os filtros são em condição 'E' e é possível especificar mais critérios de filtro contemporâneos.

Além dos filtros de base que identificam o artigo de acordo com os dados de registro se avisa a possibilidade de visualizar os diferentes tipos de custo, os estoques positivos, negativos e/ou nulos, os estoques num depósito e numa localização particular e além disso a data com a qual se quer interrogar os estoques. Nesta maneira é possível executar uma pesquisa também no passado.

GRELHA DE RESULTADO: a grelha de resultado é uma lista dos artigos que correspondem aos dados de filtro especificados acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa dos estoques, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha a lista dos artigos que quiser. 

A grelha de resultado é subdividida em 10 tab:

**Artigo**: os resultados são agrupados por artigo e vão ser especificados os valores de classe, código artigo, descrição, segunda descrição, variante (eventual), descrição variante (eventual), quantidade e unidade de medida;

**Depósito**: os resultados vão ser agrupados por depósito e são especificados, além dos valores do tab artigo, também os valores de depósito e descrição depósito;

**Localização**: os resultados são agrupados por localização e são especificados, além dos valores do tab artigo, também os valores de localização, descrição localização e estado localização;

**Encomenda**: os resultados vão ser agrupados por encomenda de venda e vão ser especificados, além dos valores do tab artigo, também os valores de número encomenda, ano encomenda e descrição artigo encomenda;

**Opção**: os resultados são agrupados por opção e são especificados, além dos valores do tab artigo, também os valores de opção e descrição opção;

**Cliente/fornecedor**: os resultados são agrupados por cliente/fornecedor (presentes nas registrações de depósito) e são especificados, além dos valores do tab artigo, também os valores do cliente/fornecedor;

**Lote**: se há artigos geridos por lotes os resultados são agrupados por lote e são especificados, além dos valores do tab artigo, também os valores de depósito, lote e quantidade disponível;

**Atributos**: os resultados são agrupados por atributo e são especificados, além dos valores do tab artigo, também os valores de segunda descrição artigo, opção, depósito, descrição depósito, atributo, valor atributo, localização, lote e data carregamento lote;

**Encomenda de produção**: os resultados são agrupados por encomenda de produção e são especificados, além dos valores do tab artigo, também os valores de depósito, descrição depósito, localização, número encomenda de produção e ano encomenda de produção;

**Detalhe estoque artigo**: é o detalhe másimo dos resultados agrupados para todos os tab precedentes. São especificados os valores de classe, código artigo, descrição artigo, segunda descrição artigo, variante, descrição variante, opção, descrição opção, depósito, localização, número encomenda, ano encomenda, descrição cliente/fornecedor, lote, quantidade disponível, quantidade estoque, unidade de medida e estado da localização.






