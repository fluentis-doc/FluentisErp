---
title: Parâmetros PMP
sidebar_position: 3
---

A janela dos Parâmetros PMP se abre através do percurso Home > Parâmetros > Produção > Parâmetros PMP. Através desta janela se estabelecem todos os parâmetros que se referem a gestão das encomendas de produção e a maneira cujo devem ser geridas as fases sucessivas a geração das encomendas.

Na seção **Método geração encomenda** tem de ser estabelecido o tipo de encomenda (Monoproduto/Multiproduto) que tem de ser proposto no tab Parâmetros da Definição PMP. No momento da geração da encomenda da Definição PMP é de qualquer maneira possível modificar esta impostação, assim como aquela relativa ao campo sucessivo chamado **Agrupamento produtos para**, pela qual é possível indicar como devem ser eventualmente agrupados os artigos ao interno da mesma encomenda Monoproduto ou Multiproduto.

Se o tipo encomenda é Monoproduto, o único agrupamento aceitado é aquele por Artigo: esse tipo de gestão permite ao usuário fazer gerar automaticamente pelo sistema uma série de encomendas monoproduto, selecionando uma lista de linhas de ordens clientes, linhas que vem das Previsões de venda ou do Plano principal de produção ou vem do Substoque, fazendo em maneira que cada encomenda que vai ser gerada apresente a soma das quantidades pedidas para o mesmo artigo. A data de fim de uma encomenda agrupada é sempre igual aquela da necessidade mais perto da data cujo se lança a elaboração.

Se o tipo encomenda é multiproduto os agrupamentos podem ser efetuados para o cliente, encomenda de venda, cliente/encomenda e permitem ao usuário inserir na mesma encomenda multiproduto mais artigos que vem das linhas da ordem cliente associadas com o mesmo cliente, com a mesma encomenda de venda ou com a mesma encomenda de venda do mesmo cliente.

Na seção **Geração encomenda da** o usuário pode estabelecer com os adequados flag se a encomenda tem de ser gerada pelas Ordens cliente sou por um provisional (Previsões de venda, Plano principal de produção). Esses parâmetros são depois modificáveis pela janela de Definição PMP. No caso de geração encomenda de produção pelo previsional tem de ser especificado se prefere que a encomenda de produção seja gerada com prazo semanal ou mensal.

O flag **Cálculo quantidade em relação ao tempo de espera de artigo** é ativado se quer utilizar os ciclos de produção para calcular a duração de uma encomenda de produção; neste caso, aos fins do cálculo da duração da encomenda se refere ao campo Tempo de espera de produção presente nos Parâmetros PNR do artigo. No campo Último número da encomenda inserida se visualiza o último número progressivo de encomenda de produção inserida.

O flag **Geração encomenda das ordens clientes em automático**, se ativo, permite fazer em maneira que o procedimento cria automaticamente a encomenda de produção apenas se insere uma linha ordem cliente. A encomenda neste caso é criada no estado de 'Não examinada'. Geralmente se ativa quando para programar se utiliza o procedimento 'PNR' invez que a 'Programação geral'.

O flag **Geração automática encomendas das previsões de venda consolidadas**, se ativo, permite fazer em maneira que o procedimento cria automaticamente a encomenda de produção apenas se efetua a consolidação de uma previsão de venda anual. Neste caso a encomenda é criada no estado de 'Não examinada'.

O flag **Atualização data prevista entrega**, se ativo, permite ver automaticamente atualizada a data de prevista entrega da linha da ordem cliente associada com a linha de encomenda de produção cujo se modifica manualmente a data de prevista fim.

O flag **Considerar as disponibilidades que vem do empreiteiro, compras, vendas, produção, depósito** permitem ao usuário decidir de estabelecer a consideração da disponibilidade dos produtos acabados quando ha a geração encomenda de produção.

A grelha **Depósitos de programação encomendas** é a simples visualização da lista de depósitos cujo tem de ser controlada a disponibilidade quando há a geração da encomenda de produção. Esta lista é estabelecida na máscara chamada 'Cálculo disponibilidade' que se encontra entre as Unidades.

Na seção **Dados última programação** aparecem alguns dados resumidos da última programação (hora de início, número de erros gerados, hora final progressivo de programação).

A caixa de combinação **Primeiro dia da semana visualizado no calendário de fábrica** permite inserir o dia que se quer fazer aparecer como primeiro dia da semana de trabalho no calendário de fábrica. Normalmente se insere segunda-feira.

Na seção **Cores das encomendas** é possível estabelecer as cores do fundo e do texto das encomendas de produção em relação ao seu estado (não examinada, lançadas, etc...).

Na seção **Geração automática fluxo de produção**, que depende da ativação do homônimo flag, o usuário pode decidir de ativar o flag Programação, que permite ver já programadas as encomendas de produção acabadas de serem geradas pela Definição PMP. A ativação do flag Programação permite ativar o flag Libertação, que permite decidir se após a programação automática as ordens planejadas de compra, produção e/ou empreiteiro tenham que ser libertadas também em automático. Neste último caso, para as ordens planejadas de produção se pode ativar também o flag Libertação es., que permite gerar diretamente ordens de produção executivas, saltando portanto também o procedimento de Libertação ordens de produção. Enfim, ativando também o flag Libertação es., se pode decidir se ativar também o flag Aviso e o flag Elimiar mat. sem estoque, que servem respectivamente para fazer em maneira que para a ordem de produção que é gerada se insere automaticamente também o aviso de abertura e o aviso de encerramento de todas as fases da ordem, que sejam registradas a depósito e que os materiais que deveriam ser utilizados, mas que não tem estoque disponível, sejam eliminados do tab Materiais de aviso de produção da fase que descarrega os materiais.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as mudanças efetuadas nos Parâmetros PMP. |






