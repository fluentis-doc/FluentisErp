---
title: Causais de depósito
sidebar_position: 7
---

A janela das Causais de depósito se abre através do percurso Home > Tabelas > Logística > Causais de depósito. Através dessa janela são estabelecidas todas as causais de depósito que servem para a movimentação dos artigos de e para os vários depósitos inseridos na adequada tabela 'Depósitos'. Ela consta de uma pequena área de filtro, pela qual o usuário pode filtrar as causais inseridas para o Depósito (utilizando a adequada caixa de combinação que se refere aos depósitos da homônima tabela), por código e por descrição causal, e de uma grelha de resultado e de inserção.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para aplicar os filtros de pesquisa dentro do banco de dados das Causais de depósito inseridas. |
| Cancelamento | Refere-se ao procedimento para cancelar uma causal de depósito precedentemente inserida. Precisa notar que se a causal já foi utilizada não é mais possível eliminá-la. |
| Pré-visualização de imprensa | Visualiza uma pré-visualização de imprensa da tabela das Causais de depósito. |
| Imprimir | Lança a imprensa na impressora predefinida do relatório da tabela das Causais de depósito. |

GRELHA DE RESULTADO: a grelha de resultado é uma lista das causais de depósito que correspondem aos dados de filtro especificados acima. O usuário, depois de especificar os valores pelos quais deseja obter uma pesquisa das causais, pressionando o botão [Pesquisa] presente na relativa Ribbon, resultará na grelha a lista das causais que quiser. 

As colunas presentes na grelha de resultado são as seguintes:

**Dep.**: nesta coluna o usuário tem que estabelecer, utilizando a adequada caixa de combinação que se refere aos dados da tabela 'Depósitos', o código do depósito pela qual tem de inserir a causal de movimentação;

**Caus.**: nesta coluna o usuário tem de inserir o código da causal de depósito. Pode alcançar uma largura máxima de 3 caracteres alfanuméricos. É possível criar mais causais de depósito com o mesmo código, só se as causais são geradas por depósitos diferentes; duas causais com o mesmo código no mesmo depósito não são portanto amitidas;

**Descrição**: nesta coluna o usuário tem de inserir a descrição da causal de depósito, que pode alcançar uma largura máxima de 80 caracteres alfanuméricos;

**Tipo**: nesta coluna o usuário tem de inserir o tipo de movimentação que caracteriza a causal. Pode ser de Carregamento, nesse caso a quantidade do movimento de depósito criada com aquela causal vai se salvado no banco da dados como positiva, ou de Descarregamento, nesse caso a quantidade do movimento de depósito criada com aquela causal vai ser salvada como negativa;

**Custo proposto**: nesta coluna o usuário tem de escolher qual custo tem de ser proposto automaticamente quando se insere um movimento manualmente. O custo proposto pode ser o custo último, o custo médio, o preço de venda ou o custo padrão do artigo movimentado. Precisa notar que enquanto o preço de venda e o custo padrão vão ser retomados diretamente pelo registro do artigo, o custo médio e o custo último vão ser calculados Run time da aplicação no momento em que se insere o movimento, em relação aos movimentos efetuados com as causais que tem respectivamente o flag 'Atual. C.M.' e o flag 'Atual. C.Ú.' ativado;

**Atual. C.M.**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Atualização custo médio' ativado, é atualizado o custo médio no registro do artigo com a quantia do movimento. Além disso, todos os movimentos executados utilizando uma causal que tem esse flag ativado concorrem com o cálculo do custo médio ponderado do artigo. Precisa notar que o flag não é ativável ou desativável depois que a causal já foi utilizada também para um só movimento de depósito. Normalmente esse flag se ativa só para os movimentos de carregamento, mas pode ser ativado também para os movimentos de descarregamento, quando se quer fazer em modo que a média ponderada do custo do artigo seja calculada também considerando os preços de venda associados com os descarregamentos de depósito do mesmo artigo;

**Atual. C.Ú.**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Atualização custo último' ativado, é atualizado o custo último no registro do artigo com a quantia do movimento. Precisa notar que o flag não é ativável ou desativável depois que a causal foi utilizada também para um só movimento de depósito. Esse flag se ativa só para os movimentos de descarregamento;

**Atual. PV**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Atualização preço de venda' ativado, é atualizado o preço de venda no registro do artigo com a quantia do movimento. Precisa notar que o flag não é ativável ou desativável depois que a causal já foi utilizada também para um só movimento de depósito. Esse flag se ativa só para os movimentos de descarregamento;

**Int. fisc.**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Interesse fiscal' ativado, o mesmo movimento vai ser considerado no jornal de depósito e no cálculo do inventário quantidade valorizado, sempre que o artigo movimentado tem também o flag 'Interesse fiscal' ativado no tab 'Generalidade';

**Cál. ABC**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Cálculo ABC' ativado o movimento vai ser considerado para o cálculo ABC do artigo movimentado;

**Punto de reabast.**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Ponto de reabastecimento' ativado, o movimento é considerado pelo procedimento que executa o cálculo do ponto de reabastecimento. Normalmente o flag é ativo só para as causais de descarregamento;

**Gest. lotes**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Gestão lotes' ativado o movimento permite a inserção do lote na adequada grelha da registração de depósito por um dado artigo que foi gerido a lotes. O mesmo se diz para a gestão Número de série;

**Lotes não disponíveis**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Lotes não disponíveis' ativado com o movimento se vai poder descarregar os lotes que se encontram num estado que não é disponível;

**C.Ú. lote**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Custo último lote' e no mesmo tempo o custo proposto é custo último, quando se carrega um dado código lote, invés de propor na quantia do movimento o custo último pelo registro do artigo vai ser proposto o custo último do carregamento feito com tal código lote;

**Descarr. lote**: o flag 'Descarregamento lote' serve quando é necessário para fazer em modo que no documento de venda (ordem cliente, nota de entrega ou fatura de venda) a causal de descarregamento do lote é proposta automaticamente na grelha dos lotes do mesmo documento. Vai ser a causal desenhada com este flag a ser proposta em automático pelo procedimento; o usuário tem assim a opção de substituí-la com uma outra causal e em relação aos casos;

**Consum.**: os movimentos efetuados com uma causal que apresenta o flag 'Consumação' ativado vão ser visualizados na janela de custificação da encomenda de produção no tab Resumo custos e tempos na grelha dos Materiais utilizados;

**Doc. obrig.**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Documento obrigatório' ativado, é obrigatório especificar qualquer coisa no campo 'Documento de referência' da registração de depósito;

**Conta obrig.**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Conta obrigatória' ativado, é obrigatório especificar qualquer coisa no campo 'Cliente/Fornecedor' da registração de depósito. É utilizada normalmente para as registrações relativas as consumações e a entrega dos materiais de empreiteiro;

**Estrut. produtos**: quando se insere um movimento de depósito utilizando no cabeçalho da registração a causal que tem o flag 'Estrutura de produtos' ativado no momento em que se salva a linha do movimento, invés de inserir o artigo selecionado (que tem de ter obrigatoriamente uma estrutura de produtos) vão ser inseridos os artigos de primeiro nível da estrutura de produtos. É normalmente utilizado nas causais de descarregamento de contrapartida para descarregar os componentes de um artigo carregado pelo causal principal;

**Gest.inv.fís.**: o flag 'Gestão inventário físico' permite decidir quais são as causais de depósito devem poder ser selecionáveis nos Parâmetros iniciais de depósito como causais a utilizar no cálculo das diferenças de inventários. As registrações de depósito que vão ser criadas automaticamente pelo procedimento 'Diferenças de inventário' vão apresentar no cabeçalho as causais desse tipo;

**Dep. CPT**: nesta coluna o usuário pode especificar o código do depósito de contrapartida, atingindo através da adequada caixa de combinação a tabela dos Depósitos. Não é nada mais do que o depósito que tem de aparecer no tab 'Contrapartida' da registração de depósito;

**Caus. CPT**: nesta coluna o usuário pode especificar o código da causal a utilizar na contrapartida. Isso permite fazer em modo que quando vai ser criado um movimento de depósito utilizando a causal principal, vai ser automaticamente inserido também um movimento de sinal contrário. Por exemplo, se estabelece a causal de contrapartida para executar movimentos entre depósitos diferentes ou para fazer deslocações entre localizações diferentes dentro do mesmo depósito;

**Estoques**: com este flag o usuário pode desinhar para uma só causal e para cada depósito qual tem de ser a causal utilizada pelo procedimento 'Valorização depósito' que executa o encerramento de depósito para criar as registrações de carregamento para o inventário inicial;

**Localização**: nesta coluna, identificada com uma causal de cor amarela, o usuário pode inserir, pela adequada 'Ajuda localizações', se que explode com um duplo click na caixa, a localização predefinida que vai ser proposta no movimento de carregamento ou de descarregamento se não passou pelo procedimento que cria o movimento. A impostação da localização de default é normalmente utilizada nas causais de carregamento, por que o descarregamento tem de ser efetuado pela localização aonde se encontra o artigo no momento em que se executa o mesmo descarregamento;

**Índ. rotaç.**: se este flag é ativo as registrações criadas com tal causal vão ser consideradas no procedimento do cálculo de índice de rotação de depósito;

**Alternativas**: a ativação desse flag acontece em contemporânea com o flag 'Estrutura de produtos'; se ativo, quando e cria um movimento com uma causal de descarregamento que tem ambos os flag ativados e um dos componentes não tem a quantidade suficiente para ser descarregado, o procedimento controla se um artigo alternativo (especificado na estrutura de produtos) tem quantidade suficiente para ser descarregado no local do componente principal;

**Alternativas mistas**: a ativação deste flag acontece em contemporânea com o flag 'Estrutura de produtos'; se ativado, o procedimento vai descarregar contemporaneamente mais artigos alternativos até o completamento da quantidade necessária. É estreitamente associado com o flag 'Alternativas';

**Considerar os movimentos no zero**: com a ativação deste flag o usuário pode decidir quais são os movimentos de depósito com custo igual a zero que vão ter que calcular o cálculo do custo médio ponderado dos artigos. Obviamente o flag é normalmente ativado nas causais que têm o flag 'Atualização custo médio' ativado.






