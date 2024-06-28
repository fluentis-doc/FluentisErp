---
title: Plano das contas
sidebar_position: 2
---

A codificação do plano das contas prevê de partir pela inserção da lista dos grupos do plano das contas na seção superior da máscara: através dos botões de inserção agrupamentos/grupos se pode inserir os novos primeiros níveis ou os níveis inferiores aquele selecionado, atribuindo a cada um, um código alfanumérico unívoco, uma descrição (mais uma segunda alternativa) e um tipo conta de referência.

Uma vez selecionado o grupo de nível mais baixo, vai-se ativar, na grelha abaixo, a lista das contas e subcontas inseridas dentro desse. A inserção de um novo código tem que prever antes de tudo o nível da 'conta' ('mastro' na terminologia contábil) que é identificado pela ausência do código da subconta: cada um desses pode ser um código alfanumérico de 8 letras, mas é aconselhável seguir um critério numérico progressivo com uniformidade de letras (p.ex.: todas as contas a 4 letras, todas as subcontas a 3). O tipo conta de cada linha que foi inserida vai ser proposto como o tipo conta do grupo de pertença: refere-es a um código proposto que o usuário pode modificar (p.ex.: para inserir os fundos de amortização diretamente dentro da seção patrimonial ativa).

As contas NÃO podem ser associadas com os tipos conta de registro: só as subcontas de dentro vão poder ter um detalhe de registro associado. As subcontas de registro, podem ser inseridas e modificadas só pela gestão do Registro contatos, presente sempre dentro do menu 'Instrumentos' - 'Registros'. Enfim as subcontas de tipo 'contas de ordem' vão poder ser inseridas só dentro das contas a sua vez de tipo de ordem.

Indo a ler nos detalhes as várias colunas presentes na lista, se podem ver:

**Data de inserção**: é a data de criação da conta/subconta;

**Data última mudança**: é a data da última mudança do código de conta/subconta, atualizada automaticamente pelo ERP;

**Data de fim validade**: serve para bloquear a utilização da subconta em novas registrações contábeis (a partir da data inserida), mantendo a visibilidade dos movimentos precedentemente inseridos;

**Abertura partidas**: o flag vai a interagir com o controle de balanceamento dos movimentos contábeis com o dado das partidas. A partir de qualquer subconta, é possível criar manualmente uma partida contábil, mas só para quantos tenham estabelecido este flag o ERP vai verificar se isso vai ser efetuado ou não, bloqueando ou não o salvamento da registração em relação as impostações da causal contábil de referência;

**Ulterior descrição**: segunda descrição, normalmente não utilizada;

**Notas**: notas da subconta, normalmente não utilizado;

**Acréscimos e diferimentos ativos/passivos**: estas subcontas permitem associar em cada subconta os códigos de acréscimos e diferimentos específicos a utilizar em via prioritária no momento da relevação infra-anual ou de balanço das escrituras de retificação/integração. Se não estiver presente, vão ser utilizadas as contas de default inseridas nos parâmetros de contabilidade geral;

**Elemento de despesa**: campos de atribuição de um elemento despesa. Atualmente se utiliza para a exportação do plano das contas/plano de trabalho no DocFinance a fim estatístico; em relação a utilização é como filtro de pesquisa para o procedimento de 'Escrituras de dif. orçamento' do módulo Encerramento infra-anual. Pode ter também um valor estatístico nos cubos de dados da Inteligência mpresarial da área administrativa;

**Tipo periodicidade orçamento**: serve para associar um critério de repartição anual específico do dado do orçamento anual.

Não é possível cancelar um grupo que tenha dentro um subgrupo, assim como se esse tem contas/subcontas: na mesma maneira não é possível cancelar uma conta que tenha dentro subcontas, e nem eliminar os códigos utilizados em qualquer tabela do gestional.

**Sugestões para a codificação**:

- identificar antes de tudo qual são os dois níveis de detalhe máximo: esses vão indicar as subcontas e as contas a inserir e a partir dessas, ao inverso, se pode agrupar no nível superior;

- fazer atenção aos códigos dos registros clientes/fornecedores: em muitos software, o mastro cliente já é uma subconta cujo registro específica um nível ulterior NÃO visível no plano das contas. O ERP, prevê diretamente no plano das contas os níveis de detalhe do registro. O ponto fundamental para identificar o nível máximo cujo ponto a);

- evitar códigos numéricos: isso por razões de classificação;

- manter o mesmo número de letras para todas as contas e um mesmo número para as subcontas (com a exceção das subcontas de registro, pelas quais os códigos de subcontas preveem uma numerosidade certamente superior): isso novamente por razões de classificação (p.ex.: a ordem alfabética dos números 1, 2 e 10 é 1, 10 e 2, portanto a impostação correta tem de ser 01, 02, 10);

- limitar o número de letras as que são efetivamente necessárias: não tem sentido ter um código de subconta com 8 letras quando efetivamente dentro de uma conta vão ter no máximo poucas dezenas de subcontas (por ativo/passivo/custo/receita normalmente 3-4 letras bastam). Para o contábil é diferente digitar 4+4 letras que 8+8 em cada linha de contabilidade! Esses códigos vão ter que ser reportados em todas as imprensas e as folhas fisicamente não são infinitas;

- pode ser útil diferenciar a conta e a subconta com um caráter só maiúsculo: isso para ter em vista uma indicação do fato que se esta selecionando um em vez de outro, ainda mais em caso de homonímia;

- não 'sujar' o plano das contas com complexos detalhes que tem o objetivo de obter dados 'estatísticos': existem os centros de custo, de lucro, a contabilidade analítica, a inteligência empresarial para esses fins;

**Impostação centros de custo e de lucro**

Dentro do plano das contas é possível atribuir para cada subconta uma estrutura de valorização porcentagem no Centro de custo/lucro. O ERP vai propor automaticamente esta valorização (só para as subcontas econômicas), deixando ao usuário a possibilidade de modificar os valores manualmente se necessário.

A ligação se efetua simplesmente selecionando a subconta de referência e inserindo a lista dos CdC/CdL nas duas grelhas: é possível associar a valorização em divisões empresarias diferentes, mas normalmente a divisão não é compilada. Não tem nenhum controle que a soma das porcentagens inserida seja igual ao 100%.

Se lembra também que:

- a valorização na contabilidade dependa da presencia, na causal contábil utilizada, alguns flag relativos aos CdC/CdL;

- é possível prever uma dupla valorização: por exemplo, se uma subconta de custo tem seja o CdC que o CdL associados, a causal pode prever de novo ambas e com a opção 'Gestão separada CdC/CdL' que vão ser ambas valorizadas, senão vão ser valorizados só os CdC para os custos (e em caso de subconta de receita vão ser valorizados os CdL).

Há ulteriores pontos de codificação dos Centros de custo/lucro: registros clientes/fornecedores/agentes, registros artigos, depósitos e ativos fixos. A prioridade de valorização se define normalmente nos parâmetros de gestão de cada módulo.

**Impostação subcontas automáticas**

Para cada subconta é possível atribuir uma lista de subcontas a valorizar automaticamente em caso das causais automáticas. Em particular a lógica de funcionamento prevê:

- que a subconta seja utilizada na seção imposto da registração;

- que a registração se baseia numa causal que prevê uma causal automática;

- nessas condições o ERP vai acrescentar, na registração automática, as subcontas automáticas que são associadas com as subcontas;

- a valorização destas subcontas vai utilizar o tipo de quantia da seção 'subcontas automáticas' mas aplicando-a na linha imposto de origem.

Exemplo de utilização pode ser a registração de subcontas pelas quais devem ser valorizados em débito/crédito das contas da ordem.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar contas | Executa a pesquisa das contas/subcontas dentro do grupo selecionado. |
| Nova conta | Estabelece o cursor na inserção de uma nova conta/subconta dentro do grupo selecionado. |
| Deslocação contas | Abre uma máscara para mover uma conta de um grupo a um outro. |
| Abrir registros | Abre o registro associado com a subconta cliente/fornecedor/banca/agente selecionado. |
| Cancelar conta | Cancela a conta/subconta selecionada. Não é possível cancelar uma conta/subconta utilizada: estabelecer uma data de fim validade para tornar-la invisível ao usuário. |
| Procurar abaixo | Procurar o grupo abaixo em relação ao grupo selecionado. |
| Procurar acima | Procurar o grupo em alto em relação ao grupo selecionado. |
| Novo agrupamento | Executa a inserção de um novo grupo 'raiz' na estrutura do plano das contas, indipendentemente do grupo selecionado. |
| Novo grupo | Executa a inserção de um grupo dentro daquele selecionado. Não é possível inserir grupos dentro de um que já tem contas/subcontas associadas. |
| Cancelar grupo | Executa o cancelamento do grupo selecionado. |
| Aumentar | Aumenta a tabulação da árvore. |
| Diminuir | Diminui a tabulação da árvore. |
| Explodir a árvore | Abre os níveis abaixo ao grupo selecionado. |
| Implodir a árvore | Fechar os níveis abaixo ao grupo selecionado. |
| Novo centro de custo | Estabelece o curso na inserção de um novo centro de custo para a conta/subconta selecionada. |
| Cancelar os centro de custo | Executa o cancelamento do centro de custo selecionado. |
| Novo centro de lucro | Estabelece o curso na inserção de um novo centro de lucro para a conta/subconta selecionada. |
| Cancelar o centro de lucro | Executa o cancelamento do centro de lucro selecionado. |
| Pré-visualização | Executa a pré-visualização de imprensa do grupo selecionado. Na Ribbon há um elemento alternativo para imprimir todo o plano das contas. |
| Imprimir | Executa a imprensa do grupo selecionado. Na Ribbon há um elemento alternativa para imprimir todo o plano das contas. |






