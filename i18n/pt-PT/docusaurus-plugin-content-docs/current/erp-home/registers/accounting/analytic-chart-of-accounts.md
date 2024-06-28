---
title: Plano das contas industrial
sidebar_position: 1
---

A codificação do plano das contas industrial prevê de partir pela inserção da lista dos grupos na seção superior da máscara: através dos botões de inserção agrupamentos/grupos, pode-se inserir novos primeiros níveis ou níveis inferiores aquele selecionado, atribuindo a cada um, um código alfanumérico unívoco, uma descrição e um tipo conta de referência. O tipo conta de referência é o mesmo tipo das contas de contabilidade geral.

Uma vez selecionado o grupo de nível mais baixo, vai ativar na grelha abaixo, a lista das contas industriais inseridas. A diferença do plano de contabilidade geral, na contabilidade industrial não é prevista a inserção do nível das contas (quer dizer um código de conta sem uma subconta) mas se procede diretamente com a criação do detalhe conta+subconta: cada um desses campos pode ser um código alfanumérico de 7 caracteres, mesmo se é aconselhado seguir um critério numérico progressivo com uniformidade de caracteres (p.ex.: todas as contas com 4 caracteres, todas as subcontas com 3). O tipo conta de cada linha que for inserido vai ser proposto como o tipo conta do grupo de pertença: refere-se a um código proposto que o usuário pode modificar.

Indo a ler nos detalhes as várias colunas presentes na lista, se podem ver:

**Conta/subconta** de contabilidade geral associada. O campo é opcional e permite definir qual é a subconta geral associada com a subconta industrial em uso, para valorizar automaticamente a geral da inserção do industrial;

**Data de inserção**: é a data de criação da conta/subconta;

**Data última variação**: é a data de última modifica do código de conta/subconta, atualizada automaticamente pelo sistema;

**Data de fim validade**: serve para bloquear a utilização da subconta de novas registrações industriais (a partir da data inserida), mantendo a visibilidade dos movimentos precedentemente inseridos;

**Processo de negócio**: o campo permite associar a subconta industrial com um processo de negócio. Atualmente o campo não está em uso;

**Cat. produto**: o campo permite associar a subconta industrial com uma categoria produto, para fins estatísticos.

Nas seções inferiores é possível associar cada subconta industrial com os centros de custo/lucro (e as atividades, não em uso): esta estrutura de valorização porcentagem no Centro de custo/lucro vai ser proposta automaticamente (para as suas subcontas econômicas), deixando ao usuário a possibilidade de modificar os valores manualmente se necessário.

A ligação é efetuada simplesmente selecionando a subconta de referência e inserindo a lista dos CdC/CdL nas duas grelhas (indicando obrigatoriamente também um processo de negócio associado): é possível associar a valorização em divisões de empresa diferentes, mas normalmente a divisão não é compilada. Não tem nenhum controle sobre a soma das porcentagens inseridas que tem de ser igual ao 100%.

Se lembra também que:

- a valorização na contabilidade industrial depende da presença dos flag relativos aos Cdc/CdL na causal industrial ou geral associada com o movimento;

- é possível prever uma dupla valorização: por exemplo, se uma subconta de custo é seja CdC que CdL associados, a causal pode prever de novo ambas com a opção 'Gestão separada CdC/CdP', que vão ser valorizados. Se não forem valorizados, vai ser só os CdC para os custos (e em caso de subconta de receita vão ser valorizados os CdL).

Há ulteriores pontos de codificação dos centros de custo/lucro: registros clientes/fornecedores/agentes, registros artigos, depósitos, ativos fixo. A prioridade de valorização é definida normalmente nos parâmetros de gestão de cada módulo.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Com este botão se executa a pesquisa das subconta em relação os filtros de pesquisa estabelecidos dentro do grupo selecionado. |
| Nova conta | Estabelece o cursor na inserção de uma nova subconta industrial dentro do grupo selecionado. |
| Procurar conta acima | Procurar a subconta de filtro nos grupos precedentes. |
| Procurar conta abaixo | Procurar a subconta de filtro nos grupos sucessivos. |
| Cancelar a conta | Executa o cancelamento da subconta industrial selecionada. Não é possível cancelar uma subconta se essa foi utilizada no sistema. |
| Nova classe | Executa a inserção de um novo grupo 'raiz' na estrutura do plano das contas industrial. |
| Nova conta | Executa a inserção de um novo subgrupo dentro do grupo selecionado na estrutura do plano das contas industrial. |
| Cancelar conta | Executa o cancelamento do grupo selecionado. |
| Aumentar | Aumenta a tabulação da estrutura da árvore. |
| Diminuir | Diminui a tabulação da estrutura da árvore. |
| Explodir | Explode a árvore abaixo do grupo selecionado. |
| Implodir | Implode a árvore abaixo do grupo selecionado. |
| Nova atividade | Estabelece o cursor na inserção de uma nova atividade para a subconta selecionada. |
| Cancelar a atividade | Cancela a atividade selecionada. |
| Novo CdC | Estabelece o cursor na inserção de um novo centro de custo para a subconta selecionada. |
| Cancelar o CdC | Cancela o centro de custo selecionado. |
| Novo CdL | Estabelece o cursor na inserção de um novo centro de lucro para a subconta selecionada. |
| Cancelar o CdL | Cancela o centro de lucro selecionado. |
| Pré-visualização | Executa a pré-visualização da imprensa das subcontas industriais para o grupo selecionado. |
| Imprimir | Executa a imprensa das subcontas industriais para o grupo selecionado. |






