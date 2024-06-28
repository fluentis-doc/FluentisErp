---
title: Parâmetros faturas de compra
sidebar_position: 7
---

Os parâmetros das faturas de compra permitem a impostação de base para gerir corretamente e de acordo com os específicos pedidos de cada sociedade.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restauração parâmetros | Permite restaurar os parâmetros nos valores iniciais. |

#1.1 Tab geral

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Gestão dupla unidade de medida | Quando é estabelecido se habilita a caixa de combinação UM alt e a Coluna quantidades alternativas na grelha artigos da fatura de compra. |
| Proposta automatica U.M. alternativa  | Este check se habilita só se a 'Gestão dupla unidade de medida' é ativa. Quando se insere um artigo que tem no seu registro o tab UM alternativas, uma UM alternativa de default, esta UM vai ser automaticamente proposta como UM alt. do artigo e vai ser calculada também a quantidade alternativa utilizando o fatir de conversão da mesma. |
| 'Tipo fatura', 'Alíquota imposto', 'Tipo faturado de compras' | Esses parâmetros são usados como default na criação das faturas das ordens. |
| Lotes e NS obrigatórios | Quando é estabelecido para os artigos geridos a lotes e número de série, é obrigatório especificar um lote ou os números de série nos relativos tab. |
| Procurar preços artigos em todos os catálogos predefinidos | Este parâmetro é utilizado para a pesquisa do preço nos catálogos fornecedores; a pesquisa acontece nos catálogos do tipo predefinido no registro fornecedor também se os catálogos não foram válidos (os catálogos são aqueles que tem a data início validade \<= a data atual e tem a data fim validade nula ou \>= a data atual). |
| Consentir os descontos para os artigos de brinde | Se é estabelecido, é possível inserir descontos também nas linhas de tipo brinde. |

#1.2 Tab carregamento

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Criar a registração com a data do documento | Quando é estabelecido, a registração de depósito é feita com a mesma data da fatura de compra, e não vai precisar especificar a data registração na form de carregamento. |
| Prioridade depósito e causais de carregamento | Quando este parâmetro é estabelecido, o depósito e a causal de carregamento são lidas pelas linhas da fatura de compra e se não há parâmetros da form carregamento, ao contrário se não foi estabelecido vão ser utilizados o depósito e a causal inseridas nesta form de parâmetros. |
| Aviso artigos fictícios | Se este é estabelecido durante o carregamento da fatura se controla se na fatura estão presentes alguns artigos fictícios; se esses são presentes, vai vir fora uma mensagem se quer carregar a fatura; respondendo se a fatura é carregada. |

#1.3 Tab importaçãoNeste tab o usuário específica o nome e o caminho do arquivo para importar os artigos do BarCode. A form de importação se abre pela barra de ferramentas da gestão faturas de compra, no tab artigos. Através desta importação é possível inserir os artigos do arquivo na fatura de compra.

#1.4 Tab importaçãoNeste tab o usuário específica os parâmetros para importar os dados contidos na tabela FA_ImpBCAll. A form de importação se abre pela barra de ferramentas da gestão da fatura de compra, no tab artigos. Através desta importação é possível inserir os artigos de uma tabela configurada na fatura.

#1.5 Tab analíticaEstes parâmetros indicam a prioridade de pesquisa dos centros de custo ou de lucro para atribuí-los aos artigos do pedido de compra. Quando o flag Recalcular for estabelecido, os centros de custo ou de lucro vão ser inseridos/atualizados nos artigos através da prioridade escolhida.






