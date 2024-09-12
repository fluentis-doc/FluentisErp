---
title: Tipos ordem cliente
sidebar_position: 19
---

O tipo ordem cliente é utilizado para determinar as propriedades de uma ordem cliente.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para efetuar a pesquisa de um tipo documento. |
| Inserção | Botão para inserir um novo tipo documento. |
| Cancelamento | Botão para cancelar o tipo documento. |
| Pré-visualização de imprensa | Botão para executar a pré-visualização de imprensa. |
| Imprimir | Botão para executar a imprensa em relação os filtros estabelecidos e a configuração da impressora. |

**Tipo**: tipo ordem cliente.

**Descrição**: descrição do tipo ordem.

**Tipo Num. /Descrição**: tipo numeração associada com o tipo ordem. Numerazione Ordini clienti 

**Auto encomendas**: se estabelecido, quando é inserida uma ordem cliente se cria o cabeçalho da encomenda de venda com o mesmo número da ordem cliente, associada na encomenda com o mesmo número da ordem cliente e associada no cabeçalho da mesma ordem. 

**Auto execução**: se estabelecida, a ordem pode ser executada pelos documentos CT-e, Retirada, Faturas de venda. Condição: a ordem tem de ser imprimida e confirmada. O flag ativo permite a inserção automática da data de confirmação igual com a data de inserção da ordem. 

**Bloquear doc. imprim.**: se estabelecido, uma ordem imprimida não pode ser modificada.

**D-Execução tipo nota de entrega**: contém o tipo nota de entrega para a criação automática do CT-e do filtro ordens clientes. 

**D-Execução tipo fatura**: contém o tipo fatura para a criação automática das faturas de venda do filtro ordens clientes. 

**D-Execução tipo retirada**: contém o tipo retirada para a criação automática da retirada na execução das ordens disponíveis ou nos planos de carregamento. 

**Crédito**: se estabelecido, a ordem com este tipo ordem concorre com o cálculo do crédito.

**Excluir o bloqueio**: se estabelecido, a ordem com este tipo de ordem é excluída pelo bloqueio que deriva do cálculo do crédito.

**Fluxo de caixa**: se estabelecido, o tipo ordem calcula o cálculo do fluxo de caixa.

**Depósito/Descrição depósito**: depósito de utilização da mercadoria contida nas ordens deste tipo ordem.

**Causal/Descrição causal**: causal de movimentação da mercadoria utilizada contida na ordem deste tipo ordem.

**Sem somar a quantidade**: se estabelecido, na execução das ordens desse tipo as quantidades executadas vão ser reportadas no documento de execução para cada linha de execução. 

**Controle disponibilidade**: se estabelecido, as ordens deste tipo concorrem com o cálculo da disponibilidade. 

**Agr.Venda Imposto**: se estabelecido, é procurado pelo artigo, se existe, o código de Imposto agrícola; se não existe se pega o código Imposto normal.

**Tipo enc. prod.**: na definição PMP, a encomenda de produção a ordem cliente vai ser criada do tipo especificado nesse tipo. 

**Preço com Imposto**: se estabelecido os preços dos documentos são considerados com Imposto e através o preço se calcula o Imposto em base ao código Imposto e o preço sem Imposto. 

**Tipo inserção**: a inserção automática dos artigos na ordem pode acontecer ou pelo catálogo ou pela última ordem do mesmo cliente.

**Tipo ordens forn./Descrição tipo OF**: o tipo ordem fornecedor especificado é utilizado para a criação das ordens fornecedores das ordens clientes. 

**Controle cliente**: na inserção da subconta de título da ordem se verifica que o tipo conta é obrigatoriamente cliente.






