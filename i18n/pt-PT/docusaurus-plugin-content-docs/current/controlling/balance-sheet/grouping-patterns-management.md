---
title: Gestão modelos de agrupamento
sidebar_position: 6
---

Antes de tudo precisa esclarecer que os modelos de agrupamento são elementos comuns em todas as sociedades carregadas no mesmo banco de dados: a estrutura do reclassificado, vai ser visível em todas as sociedades, ao contrário, aquela que vai ser específica para cada uma delas, vai ser atribuída pela própria estrutura de plano de contas (CdC/CdP etc.) nos vários modelos. Nesta maneira vai ser possível criar também um reclassificado consolidado de grupo.

Os elementos necessários para poder criar um novo modelo são somente três: o tipo reclassificação de pertença, um código do modelo (alfanumérico de 10 caracteres) e uma descrição do mesmo. Atribuídos esses três valores, vai-se ativar os vários botões de definição da estrutura de reclassificação: com o botão 'Inserção nó da raiz' vai-se criar os primeiros níveis da estrutura, ao contrário, com a sucessiva 'Inserção nó' vai-se acrescentar aquele selecionado na estrutura. Cada nível da estrutura, na sua vez, vai ser definido através um código (alfanumérico de caracteres) e uma descrição: a singularidade neste caso particular é a data da combinação de ambos valores, código e descrição juntas (isto por que num reclassificado Cee, por exemplo, são presentes mais níveis 'A' nas varias seções do modelo). Vamos ver em detalhe nos pontos sucessivos os tipos de nível que podem-se atribuir a esses códigos, levando em consideração que o cancelamento dos vários níveis é permitido só se esses não são valorizados numa fórmula ('soma dos filhos' ou 'expressões').

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Novo modelo | Executa a criação de um novo modelo de agrupamento. |
| Procurar nó sucessivo | Executa a procura do texto estabelecido no nó sucessivo ao selecionado. |
| Procurar nó precedente | Executa a procura do texto estabelecido no nó precedente ao selecionado. |
| Inserção nó raiz | Com este botão vai ser executada a criação de um novo nível de origem, indiferentemente do nível selecionado. |
| Inserção nó | Com este botão vai ser executada a criação de um novo nível filho ao interior do nível selecionado. |
| Cancelamento nó | O botão executa o cancelamento do nó selecionado. O cancelamento é permitido só se o nó não foi utilizado numa fórmula do mesmo modelo. |
| Aumentar a tabulação | O botão aumenta o espaço da árvore do modelo. |
| Diminuir a tabulação | O botão diminui o espaço da árvore do modelo. |
| Explosão do nó | Com este botão vão ser abertos todos os níveis internos ao nó selecionado. |
| Implosione del nodo | Con questo pulsante saranno chiusi tutti i livelli interni al nodo selezionato. |
| Cancelar a subconta | Cancela a subconta, o centro de custo/lucro ou as encomendas selecionadas na grelha de detalhe do nó selecionado. |
| Procurar as subcontas ausentes | O botão abre uma máscara de procura das subcontas não inseridas em nenhum nó do reclassificado. Ver aplicação '1'. |
| Procurar as subcontas duplas | O botão abre uma máscara de procura das subcontas inseridas mais vezes no reclassificado. Ver aplicação '2'. |
| Inserção múltipla das subcontas | Abre uma ajuda contas com habilitada a seleção múltipla das subcontas. |

APLICAÇÕES

       1. A máscara Procurar as subcontas ausentes permite procurar e imprimir as subcontas não inseridas em nenhum ponto do modelo de reclassificação. Em particular, se foi inserido a conta geral, não vão ser visualizadas as suas subcontas mesmo se essas não estão especificadamente inseridas no mesmo modelo.

       2. A máscara Procurar as subcontas duplas permite procurar e imprimir a lista das subcontas que foram inseridas em mais pontos do modelo. Em particular, se foi inserida a conta geral uma sua subconta, essa vai ser visualizada por que considerada seja no total que no detalhe.

**A** - O nível subconta é dedicado a valorização dos dados de contabilidade geral, de acordo com os detalhes da estrutura do plano das contas da sociedade.

Antes de tudo, o **Tipo do dado** pode ser 'Moeda' ou 'Número': no primeiro caso o nível vai visualizar um valor monetário com o símbolo e os relativos decimais da moeda da sociedade; no segundo caso, o nível vai visualizar um valor geral numérico arredondado ao número de decimais estabelecido no campo sucessivo.

**Inversão do sinal do nó selecionado** permite inverter os sinais negativos em positivos e vice-versa: nos reclassificados do ERP qualquer dado com saldo débito vai ser visualizado com sinal positivo, o crédito com sinal negativo. Através esse flag, se poderá visualizar os totais positivos para os níveis que por natura têm o saldo crédito (passividade, receitas). Atenção que esta impostação tem uma influência determinante no resultado dos somatórios e das expressões em gênero. A inversão do sinal é aplicada no resultado do nível, não nos detalhes (subcontas, CdC, CdP e encomendas) que os valorizam: esses vão continuar a ter o sinal do saldo (ver mais neste documento para a inversão dos sinas das subcontas).

**A imprimir** indica se o nível vai ser reportado em imprensa ou não.

A seção** Natura agrupamento** permite estabelecer os tipos de conta que poderão ser atribuídos neste nível: em substância, no ato da inserção da subconta vai ser aplicado um filtro por tipo conta já limitado naqueles que tem o flag coerentes com a mesma impostação. Por exemplo, se a natura é 'Patrim. ativo', vai ser possível inserir os tipos conta que tem esse flag na tabela: tipicamente o ativo, os clientes e os bancos. Se modificar essa impostação com subcontas já presentes no nível, no ato do salvamento da mudança vai-se querer saber se cancelar ou não as subcontas não coerentes.

A grelha 'Contas' permite definir a lista das contas e/ou subcontas que vão valorizar esse nível do modelo. Por primeira coisa precisa esclarecer que não é permitida a inserção da mesma conta ou subconta com o mesmo tipo saldo no mesmo nível, ao contrario, esse pode ser inserido em outros pontos do reclassificado sem algum vínculo. É permitida a inserção só da conta (mastro) geral: o caso típico é a conta geral que obtém as subcontas de registro, sem detalhar a lista dos clientes/fornecedores no modelo que iria causar a necessidade de um contínuo alinhamento dos vários modelos.

O tipo de saldo de cada linha de conta ou subconta prevê as seguintes possibilidades: 'Geral' (vai ser inserido o saldo da subconta independentemente do seu sinal; se conta geral, vai ser inserida a soma dos saldos das subcontas que pertencem aquela conta), 'Débito' (vai ser inserido o saldo da subconta só se esse tem um sinal débito; se conta geral, vai ser inserida a soma dos saldos débito das subcontas que pertencem aquela conta), 'Crédito' (vai ser inserido o saldo da subconta só se essa tem um sinal crédito, se conta geral, vai ser inserida a soma dos saldos crédito das subcontas que pertencem aquela conta), 'Aumento' (par essa subconta ou conta vai ser calculado o valor como diferença entre o encerramento infra-anual do reclassificado e um outro encerramento de referência: essa tipologia é útil para as analises por fluxos).

O último flag presente na grelha é denominado '**Inv. col.**: significa que, na subconta selecionada, o sinal do saldo vai ser invertido. Pode ser útil, por exemplo, para detrair do saldo de uma conta o valor da sua subconta.

A inserção, nesta grelha, pode ser efetuada com metodologias: o carregamento diretamente na grelha, digitando o código ou através a ajuda das contas que permite a seleção de um único relatório, ou a utilização do botão 'Inserção múltipla das subcontas' para ter uma ajuda das contas com a seleção múltipla ativo.

Para concluir, na gestão dos modelos baseados nas subcontas são particularmente úteis dois botões de gestão da máscara: visualiza as subcontas que faltam e visualiza as subcontas duplas. Esses dois vão apresentar ao usuário duas listas particularmente interessantes na configuração do modelo: uma lista de contas/subcontas que não foram inseridos em nenhum nível do reclassificado, uma lista de contas/subcontas que foram inseridas mais vezes em níveis diferentes, com o relativo tipo de saldo associado.

**B** - O nível da soma dos filhos é um tipo predefinido de expressão valorizada automaticamente pelo somatório algébrico dos valores dos níveis imediatamente abaixo.

Antes de tudo, o **Tipo do dado** pode ser 'Moeda' ou 'Número': no primeiro caso o nível vai visualizar um valor monetário com o símbolo e os relativos decimais da moeda da sociedade; no segundo caso, o nível vai visualizar um valor geral numérico arredondado ao número de decimais estabelecido no campo sucessivo.

**Inversão do sinal do nó selecionado** permite inverter os sinais negativos em positivos e vice-versa: nos reclassificados do ERP qualquer dado com saldo débito vai ser visualizado com sinal positivo, o crédito com sinal negativo. Através esse flag, então, se poderá visualizar os totais positivos para os níveis que por natura têm o saldo crédito (passividade, receitas). Atenção que esta impostação tem uma influência determinante no resultado dos somatórios e das expressões em gênero.

**A imprimir** indica se o nível vai ser reportado em imprensa ou não.

Não vai ser possível cancelar um nível quando o seu nível superior é de tipo 'Soma dos filhos', por que valorizado na sua fórmula: vai ser suficiente trocar o tipo do nível superior, cancelar e depois reconstituir a tipologia 'Soma dos filhos'.

**C** - O nível expressão permite ao usuário definir liberalmente a fórmula que vai valorizar o mesmo nível.

Antes de tudo, o **Tipo do dado** pode ser 'Moeda' ou 'Número': no primeiro caso o nível vai visualizar um valor monetário com o símbolo e os relativos decimais da moeda da sociedade; no segundo caso, o nível vai visualizar um valor geral numérico arredondado ao número de decimais estabelecido no campo sucessivo.

**Inversão do sinal do nó selecionado** permite inverter os sinais negativos em positivos e vice-versa: nos reclassificados do ERP qualquer dado com saldo débito vai ser visualizado com sinal positivo, o crédito com sinal negativo. Através esse flag, se poderá visualizar os totais positivos para os níveis que por natura têm o saldo crédito (passividade, receitas). Atenção que esta impostação tem uma influência determinante no resultado dos somatórios e das expressões em gênero.

**A imprimir** indica se o nível vai ser reportado em imprensa ou não.

A diferença do tipo 'Soma dos filhos', para o nível expressão a seção da fórmula é editável: são permitidas as parêntesis e as quatros operações algébricas de base, assim como os valores numéricos fixos. Para reportar na fórmula um nível precisa deixar apertado o botão Ctrl e arrastar esse dentro do campo fórmula.

D - O nível centro de custo é dedicado a valorização dos dados de contabilidade analítica, de acordo com os detalhes da estrutura dos centros de custo da sociedade.

Antes de tudo, o **Tipo do dado** pode ser 'Moeda' ou 'Número': no primeiro caso o nível vai visualizar um valor monetário com o símbolo e os relativos decimais da moeda da sociedade; no segundo caso, o nível vai visualizar um valor geral numérico arredondado ao número de decimais estabelecido no campo sucessivo.

**Inversão do sinal do nó selecionado** permite inverter os sinais negativos em positivos e vice-versa: nos reclassificados do ERP qualquer dado com saldo débito vai ser visualizado com sinal positivo, o crédito com sinal negativo. Através esse flag, então, se poderá visualizar os totais positivos para os níveis que por natura têm o saldo crédito (passividade, receitas). Atenção que esta impostação tem uma influência determinante no resultado dos somatórios e das expressões em gênero. A inversão do sinal é aplicada no resultado do nível, não nos detalhes (subcontas, CdC, CdP e encomendas) que os valorizam: esses vão continuar a ter o sinal do saldo (ver mais neste documento para a inversão dos sinas dos centros de custo).

**A imprimir** indica se o nível vai ser reportado em imprensa ou não.

Com o flag **Considerar CdC/CdP filhos** se poderá inserir no nível o centro de custo X e o ERP vai reportar no reclassificado todos os seus centros de custo internos que tem um valor. O flag permite, então, evitar de reportar ou manter todo o possível detalhe dos centros de custo mais só o centro de custo superior que os agrupa.

Na grelha dos centros de custo se vão carregar os centros de custo que vão valorizar o nível: além do centro de custo é possível indicar também a conta/subconta, para valorizar o nível só com o saldo dos movimentos da combinação CdC/conta ou CdC/subconta. O último flag presente na grelha é denominado **Inv.col.**: significa que, na grelha selecionada, o sinal do saldo vai ser invertido.

E - O nível centro de lucro é dedicado a valorização dos dados de contabilidade analítica, de acordo com os detalhes da estrutura dos centros de lucro da sociedade.

Antes de tudo, o **Tipo do dado** pode ser 'Moeda' ou 'Número': no primeiro caso o nível vai visualizar um valor monetário com o símbolo e os relativos decimais da moeda da sociedade; no segundo caso, o nível vai visualizar um valor geral numérico arredondado ao número de decimais estabelecido no campo sucessivo.

**Inversão do sinal do nó selecionado** permite inverter os sinais negativos em positivos e vice-versa: nos reclassificados do ERP qualquer dado com saldo débito vai ser visualizado com sinal positivo, o crédito com sinal negativo. Através esse flag, então, se poderá visualizar os totais positivos para os níveis que por natura têm o saldo crédito (passividade, receitas). Atenção que essa impostação tem uma influência determinante no resultado dos somatórios e das expressões em gênero. A inversão do sinal é aplicada no resultado do nível, não nos detalhes (subcontas, CdC, CdP e encomendas) que os valorizam: esses vão continuar a ter o sinal do saldo (ver mais neste documento para a inversão dos sinas dos centros de lucro).

**A imprimir** indica se o nível vai ser reportado em imprensa ou não.

Com o flag **Considerar CdC/CdP filhos** se poderá inserir no nível o centro de custo X e o ERP vai reportar no reclassificado todos os seus centros de lucro internos que tem um valor. O flag permite, então, evitar de reportar ou manter todo o possível detalhe dos centros de lucro mais só o centro de lucro superior que os agrupa.

Na grelha dos centros de lucro se vão carregar os centros de lucro que vão valorizar o nível: além do centro de lucro é possível indicar também a conta/subconta, para valorizar o nível só com o saldo dos movimentos da combinação CdP/conta ou CdP/subconta. O último flag presente na grelha é denominado **Inv.col.**: significa que, na grelha selecionada, o sinal do saldo vai ser invertido.

F - O nível encomendas é dedicado a valorização dos dados de contabilidade para as encomendas, de acordo com os detalhes da encomenda.

Antes de tudo, o **Tipo do dado** pode ser 'Moeda' ou 'Número': no primeiro caso o nível vai visualizar um valor monetário com o símbolo e os relativos decimais da moeda da sociedade; no segundo caso, o nível vai visualizar um valor geral numérico arredondado ao número de decimais estabelecido no campo sucessivo.

**Inversão do sinal do nó selecionado** permite inverter os sinais negativos em positivos e vice-versa: nos reclassificados do ERP qualquer dado com saldo débito vai ser visualizado com sinal positivo e o crédito com sinal negativo. Através esse flag, se poderá visualizar os totais positivos para os níveis que por natura têm o saldo crédito (passividade, receitas). Atenção que essa impostação tem uma influência determinante no resultado dos somatórios e das expressões em gênero. A inversão do sinal é aplicada no resultado do nível, não nos detalhes (subcontas, CdC, CdP e encomendas) que os valorizam: esses vão continuar a ter o sinal do saldo (ver mais neste documento para a inversão dos sinas das encomendas).

**A imprimir** indica se o nível vai ser reportado em imprensa ou não.

A seção** Natura agrupamento** permite estabelecer os tipos de conta que poderão ser atribuídos neste nível: em substância, no ato da inserção da subconta vai ser aplicado um filtro por tipo conta já limitado naqueles que tem o flag coerentes com a mesma impostação. Por exemplo, se a natura é 'Patrim. ativo', vai ser possível inserir os tipos conta que tem esse flag na tabela: tipicamente o ativo, os clientes e os bancos. Precisa, mesmo assim, levar em conta que a valorização a encomendas é automática só para as subcontas econômicas, não para os patrimoniais.

A grelha 'Contas' permite definir a lista das contas e/ou subcontas (que valorizaram a contabilidade por encomenda) que vão valorizar esse nível do modelo. Por primeira coisa precisa esclarecer que não é permitida a inserção da mesma conta ou subconta com o mesmo tipo saldo no mesmo nível, ao contrario, esse pode ser inserido em outros pontos do reclassificado sem algum vínculo. Também é permitida a inserção só da conta (mastro) geral.

O tipo de saldo de cada linha de conta ou subconta prevê as seguintes possibilidades: 'Geral' (vai ser inserido o saldo da subconta independentemente do seu sinal; se conta geral, vai ser inserida a soma dos saldos das subcontas que pertencem aquela conta), 'Débito' (vai ser inserido o saldo da subconta só se esse tem um sinal débito; se conta geral, vai ser inserida a soma dos saldos débito das subcontas que pertencem aquela conta), 'Crédito' (vai ser inserido o saldo da subconta só se essa tem um sinal crédito, se conta geral, vai ser inserida a soma dos saldos crédito das subcontas que pertencem aquela conta), 'Aumento' (par essa subconta ou conta vai ser calculado o valor como diferença entre o encerramento infra-anual do reclassificado e um outro encerramento de referência: essa tipologia é útil para as analises por fluxos).

O último flag presente na grelha é denominado '**Inv. col.**: significa que, na subconta selecionada, o sinal do saldo vai ser invertido. Pode ser útil, por exemplo, para detrair do saldo de uma conta o valor da sua subconta.






