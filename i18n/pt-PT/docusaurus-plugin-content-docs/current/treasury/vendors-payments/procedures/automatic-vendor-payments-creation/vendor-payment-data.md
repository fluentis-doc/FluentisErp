---
title: Dados pagamento fornecedor
sidebar_position: 2
---

Dentro da segunda ficha Parâmetros são estabelecidos os vários elementos de gestão do procedimento: antes de tudo, insere-se o banco de referência, que vai ser o banco titular da lista. Normalmente, refere-se um código associado com um registro bancos, com o objetivo de retomar o campo da conta corrente e ter todos os dados a inserir no envio telemático das transferências bancárias Itália.

O flag **Utilizar o banco de pagamento pela partida do fornecedor**, em ausência do registro vai impor ao procedimento de criar tantas listas quantas são os bancos de pagamento atribuídos as várias partidas selecionadas no procedimento de gestão apoio pagamento, ou inseridas no registro do fornecedor. Em ausência de ambas o pagamento vai ser inserido na lista para o código banco estabelecido no campo inicial.

O flag **Utilizar o banco de apoio presente no registro do fornecedor** força a atribuição dos códigos bancários do beneficiário lendo-os pela linha banco de default inserida na seção bancos de apoio da ficha pagamentos do registro fornecedor. Esse flag pode ser predefinido dentro dos parâmetros do módulo.

O tipo pagamento permite definir a tipologia de pagamento a atribuir à lista: o campo torna-se obrigatório só quando as partidas a pagar preveem tipologias de pagamento não uniforme.

O ano e a data de emissão são definidos de default em relação a data do sistema.

O flag** Imposição data moeda beneficiário** permite atribuir, dentro do traçado telemático, uma data moeda para o beneficiário do pagamento, que se não foi estabelecido vai ser atribuído como data atual. Se o flag não foi estabelecido a data moeda vai ser igual a data vencimento.

O campo** Notas iniciais** é um campo livre de notas do pagamento, não utilizado no padrão.

O campo **Notas finais** é utilizado na contabilização pagamentos para valorizar a descrição de detalhe do movimento contábil da subconta banco.

O flag **Contabilização da operação** permite relevar diretamente o encerramento das partidas e os relativos movimentos de partida dupla dos pagamentos em criação: se não for utilizada vai ser possível utilizar depois o procedimento separado de contabilização.

A causal de contabilidade a utilizar para a registração, das datas de registração e pagamento, da subconta de relevação das bonificações ativos inseridos no registro (essa subconta é proposta em relação a subconta 'Ocorrências ativas' inseridas nos parâmetros de contabilidade), uma data e número documento opcional a inserir como referência do cabeçalho da registração (poderia ser o número/data lista).

A direita esta presente um flag de default de** Relevação do encerramento partidas** (proposto de default, a não tirar) e o critério de gestão do agrupamento na contabilidade: a opção de default, agrupamento banco, permite relevar uma registração para cada subconta banco de saída, que é a gestão melhor com o objetivo de simplificar a reconciliação dos movimentos bancários das imprensas dos estrados de conta. Em alternativa é disponível um agrupamento para a subconta fornecedor e uma opção de registração detalhada pagamento por pagamento.

Se a causal contábil prevê a gestão da data moeda banco e dentro do registro bancos foi definido um número de dias para o seu cálculo em relação a causal contábil utilizada, o campo vai ser gerido em automático na registração resultante.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Iniciar a criação do pagamento das partidas | Botão pela qual proceder com a criação do pagamento/lista e se previsto também da contabilização do mesmo pagamento. O botão é ativo depois de ter selecionado ao menos uma partida no primeiro tab e depois de ter indicado o banco de pagamento do presente Tab. |






