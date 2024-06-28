---
title: Visualização contas
sidebar_position: 2
---

A máscara Visualização contas permite visualizar os movimentos de qualquer conta ou subconta contábil, de qualquer tipologia (ativo, passivo, custos, receitas ou registro): todos os movimentos de todos os exercícios contábeis são sempre em línea, mas claramente podem ser modificados ou não em relação do encerramento do período como imprensas fiscais obrigatórias ou como operações de encerramento contas.

Na parte superior é obrigatório inserir um código de conta ou diretamente uma subconta de detalhe: os campos de filtro sucessivos, invés, são opcionais e preveem predefinidos o filtro para os movimentos da divisão ativa e o flag das registrações definitivas.

A grelha de dados visualiza, de default ordenada por data registração antecedente, a lista dos movimentos em relação os filtros estabelecidos: suponha que você tenha filtrado para a conta x com 'da data de registração' 01/01/yyyy, teremos nos campos na parte superior da seção 'Saldo precedente' os totais débito/crédito das registrações antecedentes ao 01/01/yyyy, na grelha das registrações o campo 'progressivo' vai mostrar na primeira linha essa quantia atualizada com o valor de cada linha e, em seguida, atualizada linha por linha (IMPORTANTE: isso significa que essa sequência só tem sentido no caso de ordenação ascendente para a data registração ou para a data de competência, e não em outros casos), nos totais na parte inferior da máscara em vez, tem-se como 'Saldo seleção' a soma de débito/crédito que são selecionadas na grelha, como 'Saldo atual' a soma de débito/crédito das linhas exibidas na grelha, como 'Total' será a soma de débito/crédito do saldo anterior e do saldo da conta corrente e enfim, no campo 'Saldos' vai ter efetivamente o saldo final em débito ou em crédito (que vai corresponder sempre com o progressivo visualizado na última linha).

Outro elemento que precisa levar em consideração na gestão da gelha é o seguinte: existem duas séries de subcontas visualizadas, a subconta titular (que é retomada pela subconta titular da registração pela qual foi retomado o movimento) e a subconta de detalhe que é realmente a subconta pela qual se está procurando os movimentos. Por exemplo, se você está vendo os movimentos de uma conta genérica de custo, teremos na subconta titular os códigos dos fornecedores que enviaram faturas registradas na conta do custo e na subconta de detalhe de cada subconta de custo específicas relevadas.

As operações que se podem efetuar com a 'Visualização das contas' são:

- duplo click em cada linha visualizada: nesse caso, se o usuário tem os direitos relativos, vai tentar abrir na mudança a registração de pertence do movimento;

- apertar o botão 'Modificar' vai ter o mesmo efeito do duplo click apenas descrito;

- apertar o botão 'Doc. origem', quando é ativo, vai abrir na Visualização (se o usuário tem o direito) a fatura de compra ou de venda que com a contabilização criou o movimento de contabilidade selecionada;

- apertar o botão 'Detalhes' (ativo se foi selecionada só uma linha) para visualizar numa grelha separada todos os movimentos da registração contábil de pertence. Quando o cursor vai ser movido num outro relatório superior, a grelha vai ser desabilitada.

O procedimento de visualização contas é constituída na seguinte maneira:

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Visualizar contas | Botão para visualizar as registrações contábeis precedentemente inseridas. |
| Modificar | Botão para modificar uma nova registração contábil precedentemente inserida. |
| Documento origem | Botão através da qual chamar de novo o documento de origem pela qual foi originada a registração contábil. |
| Detalhes | Visualizar, na grelha de resultado, o detalhe da registração contábil selecionada. |

AREA DI FILTRO: l'area di filtro è quella dedicata ad ospitare l'elenco dei possibili tipi di dati grazie ai quali è possibile effettuare una selezione. I Filtri sono tipicamente sempre in condizione 'AND' ed è possibile specificare più criteri di filtro contemporanei.

GRIGLIA DI RISULTATO: la griglia di risultato rappresenta l'elenco delle registrazioni che corrispondono ai dati di filtro sopra specificati. L'utente, dopo aver specificato i valori attraverso i quali desidera ottenere una ricerca delle registrazioni, se preme il pulsante [Ricerca ] presente nella relativa Ribbon, otterrà nella griglia di risultato l'elenco delle registrazioni desiderate.






