---
title: Tab Ativos fixos
sidebar_position: 7
---

O tabulador Ativos fixos é dedicado a gestão dos bens para utilização plurianual: vai ser utilizado para relevar compras, aumentos, alinhamentos e destruições.

A seção superior é dedicada a codificação do novo ativo fixo comprado ou a seleção do ativo fixo existente para relevar uma nova operação no seu interno: para inserir um novo ativo fixo é suficiente proceder a compilar manualmente uma nova linha, enquanto para selecionar um ativo fixo existente precisa necessariamente utilizar o primeiro botão a esquerda nominado 'Selecionar ativo fixos existente'. No caso de inserção manual o usuário vai ter que selecionar a categoria ativo fixo de pertença, o tipo de propriedade (normalmente o ativo fixo 'de propriedade' proposta de default pode ser), atribuir se quer um pré-código (em modo de obter uma numeração dentro desse pré-código) e confirmar a numeração progressiva atribuída em automático, para depois passar a dar um nome a esse novo registro ativo fixo na inserção (que vai ser utilizada em todos os relatórios do módulo): todos esses campos vão ser retomados diretamente pelo ativo fixo já existente no caso de operação acrescentada.

**Tipo operação**: é proposto na base da impostação da causal contábil: tipicamente no caso de compra ou aumentos do tipo da operação o 'Custo originário' pode ser, enquanto para as vendas poderia variar entre 'Alienação parcial' e 'Alienação total' (e normalmente não se criam duas causais diferentes mas cada vez que se vai a trocá-la);

**Subconta geral**: é retomada pela categoria ativo fixo ou pelo mesmo ativo fixo, enquanto a conta industrial normalmente não é utilizada: a partir desse ponto se insere a quantia da operação (que é o custo de compra ou a quantia de venda no caso de alienação) e a alíquota Imposto da operação (no caso de compra com Imposto não dedutível, a quota de dedutibilidade vai aumentar o ativo fixo);

**Data de início atividade**: é proposta na base da data de registração: dessa data vai ser verificado o ano a partir do qual o ativo fixo pode ser amortizado;

**Data de fim atividade**: não está inserida (mas a visualização no livro ativo fixo depende também desse campo) por que as amortizações vão ser geridas em automático em respeito o restante amortizável;

**Gama de datas garantia**: não tem nenhuma relevância operativa.

Concluam a primeira grelha os seguintes flag:

**Utilizado**: identifica os ativos fixos que foram comprados usados (para esses ativos fixos na porcentagem de aplicação da amortização o primeiro ano é de 100% e a amortização adiantada é aplicável só para um ano);

**Em utilização**: (proposto de default no salvamento) indica que o ativo fixo é efetivamente em utilização (sem esse flag o ativo fixo não pode ser amortizado);

**Manut.**: indica que o ativo fixo tem de ser considerado para o cálculo das manutenções. O campo notas finais não é reportado em nenhum relatório nem procedimento;

**Medidor de receita** e **Sociedade simulada**: servem simplesmente para identificar os ativos fixos a considerar nas imprensas ativos fixos que estão nessas casuísticas fiscais;

**Tipo dedutibilidade**: permite estabelecer a dedutibilidade fiscal da amortização para o ativo fixo.

No salvamento da linha podem ser executadas, em relação os vários casos, diferentes mensagens de gestão:

- a categoria ativo fixo estabeleceu um valor no campo do 'limite amor. total' e o valor inserido para o novo ativo fixo é inferior: se refere aos ativos fixos de valor inferior a 516€ (o velho milhão de libras) que a normativa fiscal permite girar diretamente a custo (quer dizer amortizar ao 100%) diretamente no ano de compra. Nesse caso vai ser executada uma mensagem de confirmação da amortização de 100% o primeiro ano, que vai estabelecer o flag no cabeçalho do registro ativo fixo para ser gerido em modo específico no procedimento automático de amortização;

- a causal de contabilidade prevê a gestão dos centros de custo: neste caso vai ser executada uma mensagem de atribuição dos centros de custo no registro ativos fixos. Tal atribuição vai ser obrigatória se a causal prevê a obrigação de balancear os CdC com a contabilidade;

- a causal é de venda parcial e a categoria ativo fixo não tem o flag 'acréscimo': nesse caso vai ser executada uma mensagem de atribuição da quantia de alienação numa específica operação patrimonial do ativo fixo. Para esclarecer a situação, para um ativo fixo 'não de aumento' cada linha de operação é gerida a nível de amortizações: a alienação parcial (em relação a todo o ativo fixo) poderia ser na verdade gerida como venda total de cada operação (p.ex. você tem um computador, aumento com um scanner, depois se vende só o scanner).

Completado o salvamento a situação vai ser a seguinte: a linha superior vai ser selecionada e nos vários tabuladores de detalhe abaixo vai estar presente o detalhe do ativo fixo, seja como operação patrimonial (aonde foi acrescentada uma nova linha relativa a operação carregada acima), que como operação econômica (normalmente não utilizada), que enfim como amortizações. No caso de alienação parcial (sempre para o ativo fixo 'aumento' ou em caso de alienação parcial não associada para um não aumento) o usuário vai ter que incorporar a linha da operação parcial com as quantias de variação dos fundos (com sinal negativo) e valorizar a perda de capital ou o ganho de capital relativo: tais quantias devem ser inseridas também dentro da ficha 'Registração' para a contabilidade geral. Nos outros casos, ao contrário, o aplicativo vai atualizar corretamente a ficha ativo fixo, vai inserir o movimento também dentro da seção Imposto da registração e daqui vai atualizar a registração relativa. No caso de alienação, em particular, se foram codificadas as subcontas de perda e ganho de capital seja dentro da causal que nos parâmetros de contabilidade, vão ser acrescentadas também as linhas relativas a operação de venda (uma linha de variação do total patrimonial ativo, uma ou mais linhas de variação dos fundos de amortização e por diferença a perda/ganho de capital).

Ulteriores operações ativáveis na ficha ativos fixos: no momento do carregamento de um novo ativo fixo é possível continuar a subdividi-lo em N fichas diferentes. É possível que a compra seja relativa a um número de ativos fixos idênticos, como por exemplo 5 computadores iguais: o usuário, invés de carregar 5 ativos fixos manualmente, pode continuar carregando um para o total e depois dividir em 5 partes iguais automaticamente com o adequado botão (uma escolha ulterior poderia ser criar um ativo fixo que se compõe de 5 ativos fixos: esse, se de um lado simplifica a situação do livro ativos fixos, do outro lado cria uma certa dificuldade no gerir as alienações ativos fixos, por que vão ser geridas manualmente como alienações parciais).

É possível cancelar a linha ativo fixo inserida na grelha superior: neste caso vai ser executada uma mensagem de confirmação do cancelamento também do registro ativo fixo, pela qual o default é no 'Não' (a mensagem é executada também no momento de fechar a registração sem salvar). Se recomenda de fazer particular atenção na mensagem, para não deixar ativos fixos 'vazios' dentro do banco de dados.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar a registração. |
| Nova registração | Botão para criar uma nova registração. |
| Parâmetros de inserção | Refere-se aos parâmetros de inserção da primeira nota. |
| Abrir registro | Botão para chamar a gestão registro da subconta selecionada, ou em ausência, a pesquisa de um outro registro. |
| Selecionar um ativo fixo existente | Botão para selecionar um ativo fixo já existente e relevar uma nova operação no seu interno. |
| Cancelar ativo fixo | Botão para cancelar o ativo fixo selecionado. |
| Ligação ativo fixo | Botão para associar o ativo fixo selecionado com um ativo fixo pai. |
| Cancelar os dados selecionados pela grelha tributável amortizável |  |
| Cancelar os dados selecionados pela grelha tipo amortização |  |
| Subdividr ativo fixo | Botão para subdividir o ativo fixo em criação, em N fichas diferentes. |
| Detalhe reavalização |  |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document Manager | Botão para a ligação com a gestão documental. |






