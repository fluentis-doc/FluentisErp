---
title: Regolarização moeda
sidebar_position: 2
---

Esta máscara foi desinhada para permitir ao usuário calcular em automático, por um certo dia, as diferenças de troca para as contas em moeda e para gerar as partidas e as registrações contábeis de regularização.

Na área dos 'Parâmetros' se definem uma série de parâmetros com as quais vai ser realizada a contabilização da regularização:

**Provisórias**: permite gerar a diferença de câmbio como registração contábil provisórias;

**Câmbio**: com a qual se calcula o valor acrescentado. É proposto em automático pelo programa (da tabela câmbio moeda), mas pode ser trocado pelo usuário;

**Data**, **Número** **documento** e **Causal contábil** relativa a registração contábil a regularizar. A data inserida representa também a data até a seleção das registrações contábeis;

**Contas de receita** e **custo**: utilizados para registrar as diferenças de câmbio;

Na área de 'Restauração' é possível visualizar o resultado das operações de regularização executadas em relação os filtros estabelecidos (da data/a data, a conta).

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para procurar as contas a regularizar em relação os filtros inseridos. |
| Contabilizar | Botão para executar a operação de regularização das contas selecionadas na área dos filtros e em correspondência dos parâmetros inseridas na área relativa. |
| Restaurar regularização | Botão para cancelar as operações de regularização selecionadas na grelha de resultado. |

ÁREA DE FILTRO: nessa área de pode ser selecionadas as contas a regularizar com o auxílio dos seguintes filtros: a moeda e a moeda das contas, o tipo conta (ativo/passivo ou de disponibilidade/partidas) e a conta.

GRELHA DE RESULTADO: a grelha de resultado é uma lista das contas que correspondem aos dados de filtro especificados acima e aos valores que vão ser elaborados com o procedimento de regularização (o valor histórico, o valor acrescentado em relação o câmbio inserido na área dos parâmetros e a diferença do câmbio).






