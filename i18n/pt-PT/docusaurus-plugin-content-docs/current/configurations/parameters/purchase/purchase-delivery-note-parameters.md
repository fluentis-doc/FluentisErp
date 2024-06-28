---
title: Parâmetros notas de entrega de compra
sidebar_position: 6
---

Os parâmetros das notas de entrega de compra permitem a impostação de base para poder gerir corretamente e de acordo com os específicos pedidos de cada sociedade.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restaurar os parâmetros | Permite restaurar os parâmetros nos valores iniciais. |

#1.1 Tab geral

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Gestão dupla unidade de medida | Quando é estabelecido se habilita a caixa de combinação UM alt. e a coluna quantidades alternativas na grelha artigos da nota de entrega de compra. |
| Proposta automática UM alternativa | Este check se habilita só se a 'Gestão dupla unidade de medida' é ativa. Quando se insere um artigo que tem no seu registro o tab UM alternativas, uma UM alternativa de default, esta UM vai ser automaticamente proposta como UM alt. do artigo e vai ser calculada também a quantidade alternativa utilizando o fatir de conversão da mesma. |
| Visualizar as dimensões | Quando é ativo no tab artigo da gestão notas de entrega são visíveis as 3 colunas 'Altura', 'Largura' e 'Profundidade' (dados presentes no tab Pesos/Dimensões do registro artigos). |
| Permitir as notas de entrega com o mesmo número e fornecedor | Quando é estabelecido, é possível inserir as notas de entrega para o mesmo fornecedor com o mesmo número e se visualiza uma mensagem de aviso. |
| Lotes e NS obrigatórios | Quando foi estabelecido para os artigos geridos a lotes e número de série é obrigatório especificar um lote ou os números de série nos relativos tab. |
| Procurar os preços artigos em todos os catálogos predefinidos | Este parâmetro é utilizado para a pesquisa do preço nos catálogos fornecedores, a pesquisa acontece nos catálogos do tipo predefinido no registro fornecedor mesmo se os catálogos não são válidos (os catálogos são aqueles que tem a data início validade \<= a data atual e tem a data fim validade nula ou \>= a data atual). |
| Consentir descontos para os artigos de brindes | Se é estabelecido, é possível inseriri os descontons também nas linhas de tipo brinde. |

#1.2 Tab carregamento

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Criar registração com a data do documento | Quando é estabelecido, a registração de depósito é feita com a mesma data da nota de entrega, e não vai precisar especificar a data da registração na form de carregamento. |
| Prioridade depósito e causais de carregamento | Quando este parâmetro é estabelecido o depósito e a causal de carregamento são lidas pela linhas da nota de entrega de carregamento e, se não tiver, pelos parâmetros da form carregamento, ao contrário, se não for estabelecido vão ser utilizados o depósito e a causal inseridos nesta form de parâmetros. |
| Carregamento/Descarregamento automático | Se o flag é estabelecido quando a nota de entrega for colocada 'Controlada' automaticamente parte o procedimento de carregamento da nota de entrega a depósito. |
| Aviso artigos fictícios | Se é estabelecido, durante o carregamento da nota de entrega se controla se na nota de entrega estão presentes alguns artigos fictícios; se esses são presentes, vai vir fora uma mensagem se quer carregar a nota de entrega; respondendo se a nota de entrega é carregada ou não. |

#1.3 Tab importaçãoNeste tab o usuário específica o nome e o caminho do arquivo para importar os artigos do BarCode. A form de importação se abre pela barra de ferramentas de gestão da nota de entrega, no tab artigos. Através desta importação é possível inserir os artigos do arquivo na nota de entrega.

#1.4 Tab importação BarCodeNeste tab o usuário específica os parâmetros para importar os dados contidos na tabela BA_ImpBCAll. A form de importação se abre pela barra de ferramentas de gestão da nota de entrega, no tab artigos. Através desta importação é possível inserir os artigos de uma tabela configurada na nota de entrega.

#1.5 Tab analíticaEstes parâmetros indicam a prioridade de pesquisa dos centros de custo ou de lucro para atribuí-los aos artigos do pedido de compra. Quando o flag Recalcular for estabelecido, os centros de custo ou de lucro vão ser inseridos/atualizados nos artigos através da prioridade escolhida.






