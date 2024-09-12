---
title: Parâmetros CT-e
sidebar_position: 3
---

Os parâmetros CT-e permite a impostação de base para gerir corretamente e de acorod com os específicos pedidos de cada sociedade.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restaurar os parâmetros | Permite restaurar os parâmetros nos valores iniciais. |

#1.1 Tab geral

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Propor comissões para todos os artigos | Não mais gerido. |
| Gestão dupla unidade de medidad | Se estabelecido, significa que é gerida a unidade de medida alternativa na nota de entrega. |
| Proposta automática UM alternativa | Este check se habilita só se a 'Gestão dupla unidade de medida' é ativada. Quando se insere um artigo que tem no seu registro o tab UM alternativa uma UM alternativa de default, essa UM é automaticamente proposta como UM alt. do artigo e se calcula também a quantidade alternativa utilizando o fator de conversão da mesma. |
| Proposta automática transporte pago pela transportadora | Se estabelecido, significa que o tipo de transporte vai ser Transportadora e vai ser proposta a transportadora de default. |
| Def. UM volume | Se estabelecido, significa que a unidade de medida de default para o volume no cálculo transporte da nota de entrega. |
| Def. UM pesos | Se estabelecido, significa que a unidade de medida de default para o peso no cálculo transporte da nota de e entrega. |
| Controle sequência data e número documento | Se estabelecido, significa que vai ser verificada a sequencialidade data/número para as notas de entrega. |
| Recuperar só no dia | Se estabelecido, significa que vão ser recuperados os números disponíveis só para o dia atual. |
| Recuperação automática | Se estabelecido, significa que vai ser proposto em automático o primeiro número disponível. |
| Controlar a disponibilidade | Se estabelecido, significa que vai ser verificada a disponibilidade do artigo nota de entrega. |
| Excluir as ordens clientes | Se estabelecido, significa que a utilização das ordens clientes não vai ser considerada no cálculo da disponibilidade do artigo nota de entrega. |
| Dispon. obrigatória | Se estabelecido, significa que a disponibilidade do artigo nota de entrega vai ser obrigatória, quer dizer, a quantidade não pode ser maior da disponibilidade. |
| Visualizar dispon. | Se estabelecido, significa que, inserindo a quantidade na linha, vai ser visualizada a disponibilidade artigo. |
| Empreiteiro | Se estabelecido, significa que os documentos de empreiteiro vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Compras | Se estabelecido, significa que os documentos de compra vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Vendas | Se estabelecido, significa que os documentos de venda vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Prod. planejada | Se estabelecido, significa que os documentos de necessidade materiais e encomenda de produção vão ser considerados no cálculo da disponibilidade do artigo nota de entrega. |
| Prod. libertada | Se estabelecido, significa que as ordens de produção vão ser consideradas no cálculo da disponibilidade do artigo nota de entrega. |
| Depósito | Se estabelecido, significa que as registrações de depósito vão ser consideradas no cálculo da disponibilidade do artigo nota de entrega. |
| Procurar os preços artigos em todos os catálogos predefinidos | Se estabelecido, significa que o artigo inserido na linha nota de entrega vai ser procurado também nos catálogos especificados no registro cliente, além do catálogo de default. |
| Código oper. obrigatória | Se estabelecido, significa que a específica o operador no cabeçalho da nota de entrega é obrigatória. |
| Uso BarCode | Se estabelecido, significa que a coluna BarCode artigo da grelha Artigos é gerida. |
| Gestão tamanho e cor | Se estabelecido significa que as colunas Lote da grelha Variantes são geridas. |
| Visualizar dimensões | Se estabelecido, significa que as colunas dimensões (altura, largura e profundidade) da grelha Artigo foram geridas. |
| Recalcular o transporte | Se estabelecido, significa que o transporte da nota de entrega é calculado em automático. |
| Consentir os descontos para os artigos de brinde | Se estabelecido, significa que os artigos de brinde geram os descontos. |
| Controlar a integridade | Se estabelecido, significa que é verificada a integridade da nota de entrega. |
| Ref. exterior da ordem | Se estabelecido, significa que vão ser geridos as referências exteriores da ordem cliente associada com a linha artigo nota de entrega. |
| Bloquear a inserção documento nos dias de feriado | Se estabelecido, significa que vão ser bloqueadas para o uso os dias de feriado. |
| Nº máximo linhas | Específica o número máximo permitido na grelha Artigos. |

#1.2 Tab execução

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Pagamentos | Específica o valor utilizado para o pagamento da nota de entrega no caso de execução múltipla das ordens: Primeira ordem, Registro ou Seleção manual. |
| Destinatário | Específica o valor utilizado para o destinatário da nota de entrega no caso de execução múltipla das ordens: Primeira ordem, Registro ou Seleção manual. |
| Controle coerência entre pagamentos nota de entrega e ordem  | Se estabelecido significa que vai ser permitida a execução das ordens com pagamentos diferentes. |

#1.3 Tab descarregamento

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Criar a registração com a data do documento | Quando é estabelecido, a registração de depósito é feita com a mesma data do CT-e, a não vai precisar especificar a data de registração na Form de descarregamento. |
| Prioridade depósito e causal de descarregamento das linhas artigos dos CT-e | Quando este parâmetro é estabelecido o depósito e a causal de descarregamento vão ser lidas pelas linhas do CT-e, se não for estabelecidos vão ser utilizados o depósito e a causal inseridas nesta form de parâmetros. |
| Depósito | Específica o depósito a utilizar para o descarregamento da nota de entrega quando o parâmetro Prioridade depósito e causal de descarregamento pela linhas artigos dos CT-e não estiver ativo. |
| Causal | Específica a causal a utilizar para o decarregamento da nota de entrega quando o parâmetro Prioridade depósito e causal de descarregamento das linhas artigos dos CT-e não é ativo. |
| Carregamento/Descarregamento automático | Se estabelecido, significa que o descarregamento da nota de entrega vai ser efetuado em automático na ativação do flag Imprimida. |
| Aviso artigos fictícios | Se este é estabelecido durante o descarregamento do CT-e se controla se no CT-e estão presentes alguns artigos fictícios, se estão presentes vem fora uma mensagem pedindo se quer descarregar o CT-e, respondendo se o CT-e vai ser de qualquer maneira descarregado. |

#1.4 Tab importaçãoNeste tab o usuário específica o nome e o caminho do arquivo para importar os artigos do BarCode. A Form de importação se abre pela barra de ferramentas da gestão do CT-e no tab artigos. Através dessa importação é possível inserir os artigos do arquivo no CT-e.

#1.5 Tab importação BarCodeNeste tab o usuário específica os parâmetros para estabelecer os dados contidos na tabela BL_ImpBCAll. A Form de importação se abre pela barra de ferramentas da gestão CT-e, no tab artigos. Através dessa importação é possível inserir os artigos de uma tabela configurada no CT-e.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| UM alternativa | Se estabelecido, significa que a coluna UM alt. da grelha Importação BarCode é gerida. |
| Localização | Se estabelecido, significa que a coluna Localização da grelha Importação BarCode é gerida. |
| Conta cliente/fornecedor | Se estabelecido, significa que as colunas Conta, Subconta, Descrição cliente/fornecedor da grelha Importação BarCode são geridas. |
| Preço artigo | Se estabelecido, significa que a coluna Preço da grelha Importação BarCode é gerida. |
| Opção | Se estabelecido, significa que a coluna Opção da grelha Importação BarCode é gerida. |
| Variante | Se estabelecido, significa que a coluna Variante da grelha Importação BarCode é gerida. |
| Tipo retirada artigo | Específica o tipo de retirada do artigo: classe/código artigo, lote e número de série. |

#1.6 Tab retirada

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Tipo fat. | Específica o tipo faturado a utizar na importação dos artigos na retirada no Ct-e. |
| Imposto | Específica o código imposto a utilizar na importação dos artigos na retirada no CT-e. |

#1.7 Tab analíticaEstes parâmetros indicam a prioridade de pesquisa dos centros de custo ou de lucro para atribuí-los nos artigos do CT-e. Quando o flag Recalcular é estabelecido, os centros de custo ou de lucro são inseridos/atualizados nos artigos através da prioridade escolhida.






