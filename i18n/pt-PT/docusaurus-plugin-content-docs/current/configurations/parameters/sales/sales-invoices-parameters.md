---
title: Parâmetros faturas de venda
sidebar_position: 5
---

Os parâmetros das faturas de venda permitem a impostação de base para gerir corretamente e de acordo com os específicos pedidos de cada sociedade.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restaurar os parâmetros | Permite restaurar os parâmetros nos valores iniciais. |

#1.1 Tab geral

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Propor a comissão inserida no cabeçalho documento para todos os artigos | Não mais gerido. |
| Inserção comissões nos tipos linha 6 e 7 (adiantamento/estorno) | Avisa o fato que as linhas artigo adiantamento e estorno geram as comissões agentes. |
| Gestão dupla unidade de medida | Quando é estabelecido se habilita a caixa de combinação UM alt. e a Coluna quantidade alternativas na grelha Artigos de gestão das faturas. |
| Proposta automática UM alternativa | Este check se habilita só se a 'Gestão dupla unidade de medida' é ativada. Quando se insere um artigo que tem no seu registro o tab UM alternativa uma UM alternativa de default, essa UM é automaticamente proposta como UM alt. do artigo e se calcula também a quantidade alternativa utilizando o fator de conversão da mesma. |
| Proposta automática transporte pago pela transportadora | Se estabelecido, significa que o tipo de transporte vai ser transportadora e vai ser proposta a transportadora de default. |
| Def. UM volume | Se estabelecido, significa que é a unidade de medida de default para o volume no cálculo transporte da nota de entrega. |
| Def. UM pesos | Se estabelecido, significa que é a unidade de medida de default para o peso no cálculo transporte da nota de entrega. |
| Recuperar só no dia | Se estabelecido, significa que vão ser recuperadas os números disponíveis só para o dia atual. |
| Recuperação automática | Se estabelecido, significa que vai ser proposto em automático o primeiro número disponível. |
| Controlar a disponibilidade | Se estabelecido, significa que vai ser verificada a disponibilidade do artigo nota de entrega. |
| Preços negativos nas notas de crédito | Se estabelecido, significa que vai ser notificada a presencia dos preços positivos nas faturas com o tipo nota de crédito. |
| Excluir as ordens clientes | Se estabelecido, significa que a utilização das ordens clientes não vai ser considerada no cálculo da disponibilidade do artigo nota de entrega. |
| Dispon. obrigatória | Se estabelecido, significa que a disponibilidade do artigo nota de entrega vai ser obrigatória, quer dizer a quantidade não pode ser maior da disponibilidade. |
| Visualizar a disponibilidade | Se estabelecido, significa que, inserindo a quantidade na linha, vai ser visualizada a disponibilidade artigo. |
| Empreiteiro | Se estabelecido, significa que os documentos de empreiteiro vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Compras | Se estabelecido, significa que os documentos de compra vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Vendas | Se estabelecido, significa que os documentos de venda vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Prod. planejada | Se estabelecido, significa que os documentos de necessidade materiais e encomenda vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Prod. libertada | Se estabelecido, significa que as ordens de produção vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Depósito | Se estabelecido, significa que as registrações do depósito vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Check próximo catálogo | Avisa o fato que o artigo inserido na linha fatura vai ser procurado também nos catálogos especificados no registro cliente, além do catálogo de default. |
| Controle Intra-cee | Aviso o fato que vai ser verificado se o tipo fatura e o cliente tem o mesmo tipo Intra-cee. |
| Uso BarCode | Avisa o fato que a coluna BarCode artigo da grelha Artigos é gerida. |
| Gest. tamanho e cor | Avisa o fato que as colunas lote da grelha Variantes são geridas. |
| Visualizar as dimensões | Se estabelecido, significa que as colunas dimensões (altura, largura e profundidade) da grelha Artigos são geridas. |
| Consentir os descontos para os artigos de brinde | Avisa o fato que os artigos de brinde geram os descontos. |
| Controle integridade | Avisa o fato que se verificou a integridade da fatura. |
| Recalcular o transporte | Avisa o fato que o transporte da fatura é calculado em automático. |
| Sem despesas cobr. nas notas de crédito | Avisa o fato que as despesas cobradas não vão ser inseridas nos prazos das faturas com o tipo notas de crédito. |
| Bloquear a inserção documento nos dias de feriado | Avisa o fato que são bloquadas para o uso os dias de feriado. |
| Verificar as vendas preço lotes | Avisa o fato que vai ser feita uma verificação para a quantia unitária da linha fatura. |
| Código oper. obrigatório | Avisa o fato que a específica do operador no cabeçalho fatura é obrigatória. |
| Ref. exterior ordem | Avisa o fato que são geridas as referências exterior da ordem cliente associada com a linha artigo fatura. |
| Nº máximo linhas | Específica o número máximo permitido na grelha 'Artigos'. |

#1.2 Tab execução

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Pagamentos | Específica o valor utilizado para o pagamento da fatura no caso de execução múltipla das ordens: Primeira ordem, Registro ou Seleção manual. |
| Destinatário | Específica o valor utilizado para o destinatário da fatura no caso de execução múltipla das ordens: Primeira ordem, Registro ou Seleção manual. |

#1.3 Tab descarregamento

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Criar registração com a data do documentonto  | Se é estabelecido, a registração de depósito é feita com a mesma data da fatura de compra, e não vai ser possível especificar a data registração na Form de carregamento. |
| Propriedade depósito e causais de descarregamento | Quando esse parâmetro é estabelecido, o depósito e a causal de descarregamento são lidos através das linhas faturas, e invés, se não estabelecido se utilizam o depósito e a causal inseridos nessa Form de parâmetros. |
| Depósito | Específica o depósito a utilizar para o descarregamento da fatura quando o parâmetros Prioridade depósito e causal de descarregamento das linhas artigos dos CT-e não está ativo. |
| Causal | Específica a causal a utilizar para o descarregamento da fatura quando o parâmetro Prioridade depósito e causal de descarregamentos das linhas artigos dos CT-e não está ativo. |
| Aviso artigos fictícios | Se foi estabelecido, durante o descarregamento da fatura se controla se na fatura estão presentes alguns artigos fictícios, se estão presentes se envia uma mensagem se quer descarregar a fatura; respondendo se a fatura vai ser mesmo assim descarregada. |

#1.4 Tab importaçãoNeste tab o usuário específica o nome e o caminho do arquivo para estabelecer os artigos do BarCode. A Form de importação se abre através da barra de ferramentas da gestão faturas no tab artigos. Através desta impostação é possível inserir os artigos pelo arquivo na fatura.

#1.5 Tab importação BarCodeNeste tab o usuário específica os parâmetros para importar os dados contidos na tabela FT_ImpBCAll. A Form de importação se abre através da barra de ferramentas da gestão das faturas no tab artigos. Através desta importação é possível inserir os artigos de uma tabela configurada na fatura.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| UM alternativa | Se estabelecido, significa que a coluna UM alt. da grelha Importação BarCode é gerida. |
| Localização | Se estabelecido, significa que a coluna Localização da grelha Importação BarCode é gerida. |
| Conta cliente/fornecedor | Se estabelecido significa que as colunas Conta, Subconta, Descrição cliente/fornecedor da grelha Importação BarCode são geridas. |
| Preço artigo | Se estabelecido, significa que a coluna Preço da grelha Importação BarCode é gerida. |
| Opção | Se estabelecido, significa que a coluna Opção da grelha Importação BarCode é gerida. |
| Variante | Se estabelecido, significa que a coluna Variante da grelha Importação BarCode é gerida. |
| Tipo retirada artigo | Específica o tipo de retirada artigo: classe/código artigo, lote e número de série. |

#1.6 Tab retirada

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Tipo fat. | Específica o tipo de faturado a utilizar na importação artigos da retirada na fatura. |
| Imposto | Específica o código imposto a utilizar na importação artigos da retirada na fatura. |

#1.7 Tab valorização

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Valorização por causas adicionais | Específica os campos acrescentados para o agrupamento das notas de entrega no procedimento de valorização. |

#1.8 Tab analíticaEstes parâmetros indicam a prioridade de pesquisa dos centros de custo ou de lucro para atribuí-los aos artigos da fatura. Quando o flag é estabelecido, os centros de custo ou de lucro são inseridos/atualizados nos artigos através da prioridade escolhida.






