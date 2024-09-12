---
title: Tab Dados gerais
sidebar_position: 2
---

Na seção **Estrutura de produtos de referência** se estabelece, se necessário, o artigo cujo estrutura de produtos tem de ser tomada como referência para a programação de uma eventual encomenda de produção para o artigo/variante cujo parâmetros PNR esta trabalhando.

O campo **Política de gestão** permite ao usuário escolher se gerir o artigo a:

**Previsão**: neste caso o artigo vai ser gerido através da geração de previsões de venda ou através da inserção de um plano principal de produção. Esses dois tipos de documentos vão ser peneirados através do procedimento de Definição PNR;

**Sobra**: neste caso o artigo vai ser gerido em relação as informações relativas aos pontos de reabastecimento e de sobra mínima inserida no tab Aprovisionamento do registro artigo. Também nesse caso, a geração da encomenda de produção do artigo vai ser obtida através da utilização do procedimento de 'Definição PMP';

**Encomenda**: neste caso o artigo vai ser gerido através da Definição PMP, tab 'Ordens clientes';

**Necessidade**: neste caso o artigo vai ser considerado na máscara de análise do PNR presente na Programação geral e pode ser pego em consideração no caso de utilização do procedimento PNR no local do procedimento Programação geral. O artigo gerido a Necessidade vai poder também ser considerado pelo procedimento de Definição PMP, mas a diferença é que se pode, através dum adequado parâmetros colocado nos 'Parâmetros PMP, fazer em maneira que a encomenda seja gerada em automático justo quando se insere a linha ordem cliente, e portanto saltar o procedimento de Definição PMP.

O campo **Tipo de aprovisionamento** permite ao usuário escolher se o artigo tem de ser de:

**Compra**: neste caso a explosão das necessidades cria uma ordem planejada de compra para o artigo em questão;

**Produção**: neste caso a explosão das necessidades cria uma ordem planejada de produção para o artigo em questão;

**Empreiteiro**: neste caso a explosão das necessidades cria uma ordem planejada de empreiteiro para o artigo em questão.

O campo **Tipo de retirada** permite ao usuário escolher o tipo de retirada do artigo entre...

**Manual**: com esta impostação, o artigo vai ser retirado só durante o aviso de produção do nível da estrutura de produto a ele diretamente superior. A retirada vai acontecer contextualmente no aviso da fase de produção pela qual o material foi enganchado, ou, em ausência de uma fase associada, contextualmente ao aviso da última fase interna de produção. Precisa notar que no caso de utilização do Depósito WIP, o tipo de retirada manual comporta a passagem do material em questão pelo depósito matérias-primas no depósito WIP no curso da libertação da ordem de produção, e o seu carregamento pelo WIP durante o aviso;

**Automático**: com esta impostação o artigo vai ser retirado durante a libertação da ordem de produção com consequente passagem da ordem de produção de Lançado a Executivo;

**Com lista**: com esta impostação o artigo vai ser retirado através da geração de uma lista de retirada, através da utilização do homônimo procedimento presente na Área de produção a Productio in Progress > Ordens de produção.

O campo **Prioridade** permite ao usuário escolher o tipo de prioridade a atribuir ao artigo. Se refere a um dado retomado pela tabela Prioridade aprovisionamento presente na Home > Tabelas > Produção.

O flag **Enc. produção**, se ativo, indica que as linhas ordem cliente que apresentam este artigo tem de ser visualizadas no filtro ordens clientes da Definição PMP.

O campo **% sobra** permite ao usuário estabelecer uma porcentagem de sobra fixa para o artigo. Esta porcentagem é estabelecida sempre com este dado quando o artigo é retomado ao interno de uma estrutura de produtos;

O campo **Nº ciclo** permite indicar qual é o ciclo definido como de default para o artigo.

O flag **Considerar no empr.**, se ativo, permite ao usuário fazer em modo que o artigo seja considerado na compilação automática do tab Materiais a entregar e do tab Materiais a utilizar da ordem de empreiteiro.

A seção **Parâmetros de produção** resulta ativa se a política de gestão do artigo é produção. Nessa se pode estabelecer os seguintes campos:

**Tempo de espera**: neste campo o usuário que não utiliza os ciclos de produção pode estabelecer um tempo de espera de produção para o artigo em questão, tempo calculado nos dias de trabalho que se baseia no calendário de fábrica e que não varia ao variar da quantidade a produzir;

**Unidade de capacidade produtiva**: neste campo o usuário pode inserir a unidade de capacidade produtiva cujo tem de ser considerado o tempo de espera do artigo;

**Tempo de espera fixo**: neste campo o usuário pode decidir de querer considerar um valor de tempo de espera fixo e não calculado de acordo com a base dos seus ciclos de produção, inserindo portanto o valor em dias de trabalho e ativando esta modalidade através do flag;

**Loto econômico**: neste campo o usuário pode estabelecer um lote econômico de produção do artigo, que vai ser considerado pelos procedimentos de Definição PMP e Programação geral (só no caso de flag 'Considerar a disponibilidade para o primeiro nível' ativado);

**Múltiplos**: neste campo o usuário pode estabelecer os múltiplos do lote econômico de produção do artigo, que vão ser considerados pelos procedimentos de Definição PMP e Programação geral (só no caso de flag 'Considerar disponibilidade para o primeiro nível' ativado);

**Dias agrupamento**: neste campo o usuário determina o período temporal cujo procedimento agrupa as eventuais ordens planejadas. Se por exemplo esse parâmetro vale 5 por um dado artigo, vão ser agrupados todas as ordens planejadas que tem data compreendida no intervalo de 5 dias de trabalho (do calendário de fábrica);

**Dias tolerância adiantamentos, Dias tolerância atraso**: são os dias que o PNR tolera em adiantamento ou atraso um documento sem propor o efetivo múltiplo adiantamento ou atraso, mas usufruindo a eventual redundância sem propostas. Por esse motivo se por exemplo um artigo específico tem como valores Dias tol. adiant. = 2 e Dias tol. atraso = 5, significa que se o algoritmo PNR releve a exigência de adiantar ou atrasar um documento para aquele artigo, isso não vai ser comunicado ao usuário como pedido de adiantamento ou de atraso se no intervalo de 2 dias precedentes no caso de adiantamento e no intervalo de 5 dias sucessivos no caso de atraso (ao usuário vai ser só comunicado que a exigência foi satisfeita pelo particular documento);

**Tolerância em dias/porcentagem do tempo de espera**: determina o período temporal cujo se pode adiantar ou atrasar (além deste limite o PNR propõe de eliminar o documento) e até quando comunicar a eventual redundância de um artigo. Pode ser expresso em dias ou em porcentagem de tempo de espera. Portanto, se por exemplo para um artigo são definidos 90 dias de tolerância, os documentos relativos a este documento específico podem ser adiantados ou atrasados no máximo de 90 dias, se a exigência vai superar este limite, o PNR vai propor de eliminar o documento e de criar um novo no dia em que se relevou a exigência. Além disso, para o específico artigo, uma eventual disponibilidade em redundância pode ser disponível até um máximo de 90 dias.

Na seção **Leitura listas/ciclos** o usuário tem a possibilidade de estabelecer a versão da lista e do ciclo de produção que tem de ser considerada pelo procedimento PNR para o artigo em questão.

Na seção **Considerar as disponibilidades que vem da** o usuário tem a possibilidade de decidir quais são as áreas gestionais cujo documentos tem de ser pegos em consideração durante a elaboração do procedimento PNR. As áreas são Compras, Vendas, Depósito (e neste caso se pode decidir se tem de ser consideradas ou não os estoques de lotes no estado não disponível através da ativação do adequado flag, Empreiteiro, Planejamento (portanto Encomenda de produção, Ordens planejadas de compra, Empreiteiro e/ou Produção), Produção libertada (portanto Ordens de produção).

Na parte esquerda da janela se pode estabelecer uma série de dados que servem para a elaboração do procedimento PNR. Os flag que podem ser utilizados são os seguintes:

**Considerar as quantidades de acordo com o lote econômico**: se ativado, o flag permite fazer em modo que para o artigo se considera o lote econômico de produção ou de compra estabelecido;

**Considerar os múltiplos do lote econômico**: se ativado, o flag permite fazer em modo que para o artigo se considera o múltiplo do lote econômico de produção ou de compra estabelecido;

**Reintegração estoque mínimo do artigo**: se ativado, o flag permite fazer em modo que para o artigo se reintegra o estoque mínimo estabelecido no seu registro, tab ‘Aprovisionamento';

**Reintegração ponto de reabastecimento do artigo**: se ativado, o flag permite fazer em modo que para o artigo se reintegra o ponto de reabastecimento estabelecido no seu registro, tab ‘Aprovisionamento';

**Considerar o índice de cobertura**: se ativado, o flag permite fazer em modo que para o artigo se considera o índice de cobertura estabelecido no seu registro, tab ‘Aprovisionamento';

**Considerar também as alternativas dos materiais**: se ativado, o flag permite fazer em modo que para o artigo se considera o estoque mínimo estabelecido no seu registro, tab ‘Aprovisionamento';

**Considerar as fases alternativas**: se ativado, o flag permite fazer em modo que para o artigo se considera mas fases alternativas estabelecidas no ciclo de produção do mesmo artigo. Na caixa de combinação ‘Tolerância para a ocupação do CdT' é possível estabelecer uma porcentagem que permite decidir de quanto se pode ultrapassar a quantidade de trabalho disponível do centro de trabalho, ao invés na caixa de combinação ‘Tolerância de produção' é possível estabelecer, sempre em porcentagem, quanto a mais se pode produzir para o artigo em relação à quantidade prevista da ordem de produção;

**Bloqueio por produção**: se ativado, o flag faz em modo que se uma encomenda de produção deste artigo é elaborada pela Programação geral aparece a mensagem ‘Impossível programar, o artigo XXX é bloqueado pela produção'. Neste caso a programação se bloqueia e o usuário tem de libertá-la excluindo a encomenda relativa a este artigo.

Enfim é possível, utilizando o campo **Gestão previsão**, como deveriam ser geradas as encomendas de produção pela Definição PMP no caso de geração do previsional. As possibilidades são as seguintes: a maior entre as ordens clientes e previsões de venda; sempre a previsão de venda; o menor entre as ordens clientes e previsões de venda; sempre as ordens clientes; soma de ordens clientes e previsões de venda.

Na seção** P** **arâmetros de compra/empreiteiro**, que resulta ativa se a política de gestão do artigo é 'Compra' ou 'Empreiteiro', se podem visualizar e eventualmente modificar os dados inseridos dentro do tab Fornecedores preferenciais do registro artigo.






