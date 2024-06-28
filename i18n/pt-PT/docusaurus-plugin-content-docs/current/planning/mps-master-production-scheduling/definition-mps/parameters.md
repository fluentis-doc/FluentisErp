---
title: Parâmetros
sidebar_position: 2
---

Através desses tab são estabelecidos todos os parâmetros que concerne a gestão da criação das encomendas de produção e o modo pela qual devem ser geridas as fases sucessivas a geração das encomendas. Alguns desses estabelecimentos presentes nesse tab são retomados pela janela Parâmetros PMP, presente na seção Home  > Parâmetros > Produção.

Na seção **Método de geração da encomenda** tem de ser estabelecido o tipo de encomenda (Monoproduto/Multiproduto) que tem de ser proposto no tab Parâmetros da Definição PMP. No momento da geração da encomenda da Definição PMP é de qualquer maneira possível mudar essa impostação, assim como aquela relativa ao campo sucessivo chamado 'Agrupamento produtos para', pelo qual é possível indicar como devem ser eventualmente agrupados os artigos dentro da mesma encomenda Monoproduto ou Multiproduto.

Se o tipo encomenda é Monoproduto, o único agrupamento permitido é aquele para o Artigo: esse tipo de gestão permite ao usuário de fazer gerar automaticamente pelo sistema uma série de encomendas monoproduto, selecionando uma lista de linhas de ordens clientes, linhas que provêm da Previsões de venda ou pelo Plano principal de produção ou que provêm do Subestoque, fazendo em modo que cada encomenda que vai ser gerada apresente a soma das quantidades pedidas para o mesmo artigo. A data fim de uma encomenda agrupada é sempre igual aquela de necessidade mais perto da data cujo lança a elaboração.

Se o tipo encomenda é Multiproduto, os agrupamentos podem ser efetuados para o cliente, encomenda de venda, cliente/encomenda, e permitem ao usuário inserir na mesma encomenda Multiproduto mais artigos que provêm das linhas de ordem cliente associadas ao mesmo cliente, a mesma encomenda de venda ou com a mesma encomenda de venda do mesmo cliente.

O flag **Atualização encomendas já existentes** permite fazer em modo que, partindo do tab 'Previsional', se pode lançar diretamente um planejamento geral nas encomendas geradas automaticamente por aquele tab, que estão ainda no estado 'Não examinado' ou 'Planejado'.

Apenas embaixo, o usuário pode estabelecer com os adequados flag se a encomenda tem de ser gerada pelas ordens clientes ou pelo previsional (Previsões de venda, Plano principal de produção), ou, na última análise, pelo subestoque; nesse último caso vai ser visualizado um algoritmo particular que vai ser explicado no parágrafo dedicado ao tab 'Subestoque'.

Existe também a possibilidade de decidir, no caso de ativação do flag 'Previsional', com qual modalidade temporal devem ser geradas as encomendas de produção, através a ativação dos botões de opção pela qual é detalhado embaixo o funcionamento:

**Mensal**: nesse caso a encomenda de produção vai ser gerada no mês em que cai a data fim da previsão de venda ou no mês em que foi inserida a quantidade no Plano principal de produção. O usuário pode também estabelecer o dia dos mês em que precisa ser estabelecido pelo procedimento automático de criação encomenda a data de previsto fim da encomenda;

**Semanal**: nesse caso vai ser gerada a encomenda de produção para cada semana do mês em que cai a data fim da previsão de venda ou do mês em que foi inserida a quantidade no Plano principal de produção. O usuário pode também estabelecer o dia da semana em que tem de ser estabelecido pelo procedimento automático de criação encomenda de previsto fim da encomenda;

**Reais**: nesse caso vai ser gerada uma encomenda de produção para cada semana do mês em que cai a data fim da previsão de venda ou do mês em que foi inserida a quantidade no Plano principal de produção, mas considerando exatamente a data fim de cada linha da previsão de venda;

**Semanal considerando os dias de produção da área de entrega**: nesse caso vai ser gerada uma encomenda de produção que leva em conta os dias de produção da área de entrega associada com o cliente pela qual foi criada a Previsão de venda.

O flag **Agrupamento previsões para os clientes** serve para fazer em modo que as encomendas de produção sejam geradas agrupando as linhas de previsão dos mesmos clientes.

O flag **Gerar a encomenda no mês/semana precedente**, se ativado, permite fazer em modo que a encomenda de produção gerada pelas previsões de venda ou pelo plano principal de produção sejam criadas no mês precedente daquela da previsão ou do plano principal, ou na semana precedente aquela em que cai a data fim da previsão de venda.

Na seção **Se não foi especificada a data de entrega**, que concerne exclusivamente o tab Ordens clientes da definição PMP, o usuário pode decidir que, se falta a data mercadoria pronta na linha da ordem cliente que tem de ser analisada pelo procedimento, vai ser ignorada a linha sem data, ou vai ser aceitada uma certa data como previsto fim da encomenda que vai ser gerada, ou vai ser aceitada uma certa data como previsto início da encomenda que vai ser gerada.

O flag **Considerar a disponibilidade do artigo** permite, se ativo, fazer em modo que em todos os tab da Definição PMP vai ser exposta a disponibilidade do artigo na data de previsto fim da encomenda de produção que vai ter que ser criada. O mesmo acontece no tab Resumo. A disponibilidade vai ser pega em consideração na base dos flag ativados nos 'Parâmetros PMP' (Empreiteiro, Compras, Vendas, Produção, Depósito).

Logo embaixo, são expostos os **Depósitos de planejamento encomendas**, aonde aparecem os depósitos que foram inseridos na janela do 'Cálculo disponibilidade', que se encontra no percurso Home  > Utilidade > Cálculo disponibilidade; a partir desse tab Parâmetros só podem ser visualizados e não mudados.

A caixa de combinação** Local produtivo** permite ao usuário decidir de fazer considerar a disponibilidade no procedimento de geração das encomendas de acordo com o Local produtivo, se utilizado.

O flag **Cálculo quantidade de acordo com o lote econômico**, se ativado, faz em modo que o procedimento gere a encomenda de produção considerando o lote econômico de compra inserida no tab fornecedores preferenciais no fornecedor desenhado como de default se o artigo analisado na Definição PMP tem como tipo aprovisionamento 'Compra' ou 'Empreiteiro', e o lote econômico inserido nos parâmetros PMP se o artigo objeto da encomenda tem como tipo aprovisionamento 'Produção'.

O flag **Cálculo quantidade de acordo com os múltiplos do artigo**, se ativado, faz em modo que o procedimento gere a encomenda de produção considerando os múltiplos do lote econômico de compra inserida no tab fornecedores preferenciais desenhado como de default dos artigos se o artigo objeto da encomenda tem como tipo aprovisionamento 'Compra' ou 'Empreiteiro', e os múltiplos de lote econômico de produção inserido nos parâmetros PMP se o artigo analisado na Definição PMP tem como tipo aprovisionamento 'Produção'. Obviamente esse flag pode ser ativado só se resulta ativo o flag pela cujo parágrafo precedente.

O flag **Reintegração estoque mínimo do artigo**, se ativado, permite ao usuário fazer em modo que para o artigo analisado na Definição PMP seja reintegrado o estoque mínimo inserido no tab Aprovisionamento do registro artigo.

O flag **Reintegração ponto de reabastecimento do artigo**, se ativado, permite ao usuário fazer em modo que para o artigo analisado na Definição PMP seja reintegrado o estoque mínimo inserido no tab Aprovisionamento do registro artigo.

O flag **Excluir as ordens em atraso**, se ativado, permite ao usuário fazer em modo que o procedimento de geração da encomenda de produção exclua do cálculo de disponibilidade do artigo analisado as quantidades que provêm das linhas ordem cliente cuja Data mercadoria pronta resulta precedente da data atual.






