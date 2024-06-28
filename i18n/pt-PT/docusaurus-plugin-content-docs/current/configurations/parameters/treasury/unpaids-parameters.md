---
title: Parâmetros não pagos
sidebar_position: 2
---

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as impostações. |

 

 

Os parâmetros do módulo Não pagos se encontram no [Home > Parâmetros > Tesouraria].

Nos parâmetros dos nãos pagos se podem pré-estabelecer os elementos de default a produzir nos procedimentos do módulo. Em particular:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Conta transitória + despesas de protesto | Com tal impostação se vai avançar na reabertura das partidas cliente numa conta transitória, para a mesma quantia de efeito de origem, e debitar as despesas para a conta bancária. |
| Cliente + despesas de protesto | Se aconselha a impostação da escolha sobre 'Cliente + despesas de protesto' para poder reabrir a partida cliente, para a mesma quantia do efeito da origem, e debitar as despesas para a conta bancária. |
| Reabertura da partida relativa a fatura | Se aconselha a impostação da escolha da 'Reabertura da partida relativa a fatura'. Com esta opção, o procedimento vai abrir uma nova partida, mas com as mesmas referências ao número e data documento da fatura de origem.No caso de efeito de resumo de mais documentos, vai ser inserido o primeiro da lista, porém nas notas da partida vai ser gerida a lista de todas as referências. |
| Abertura de uma nova partida | A opção alternativa, abertura de uma nova partiva, vai criar uma nova partida com número e data documento atribuídos na base do número e data do efeito não pago. |
| Enfileirar a partida relativa a fatura | Campo não gerido. |
| Abertura de uma nova partida | Campo não gerido. |





A seção abaixo precisa ser estabelecida se quer ter um default a propor para a criação da fatura ao cliente para as despesas não pagas.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Tipo fatura | Permite estabelecer o tipo de fatura a utilizar. |
| Tipo pag. | Permite estabelecer o tipo de pagamento a utilizar. |
| Unidade de medida | Permite estabelecer a unidade de medida da linha artigo. |
| Sol. pagamento | Permite estabelcer a solucação de pagamento para gerar o vencimento relativo. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Tipo de faturação | Permite estabelecer o faturado de vendas, quer dizer a contrapartida de receita com a qual relevar a primeira nota operação. |
| Alíq. imposto | Permite estabelecer a alíquota imposto. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Tipo faturação | Campo não gerido. |
| Alíq. imposto | Campo não gerido. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Tipo faturação | Campo não gerido. |
| Alíq. imposto | Campo não gerido. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Causal de contabilidade | É a causal a propor nor procedimentos de contabilização não pagos. |
| Conta despesas de protesto | É a conta a utilizar para relevar as despesas debitadas pelo banco. |
| Conta transitória | É a subconta de trânsito que deveria ser utilizada para a contabilização se foi estabelecida a gestão 'Conta transitória + despesas de protesto'. Se aconselha de compilar o campo (talvez com a mesma conta das despesas) por que vai ser pedido obrigatoriamente para a execução do procedimento de contabilização. |
| Conta transitória banco | É a conta transitória banco a utilizar se o não pago se refere aos efeitos não apresentados com o procedimento (p.ex.: no caso de utilização do módulo DocFinance). |
| Conta débito despesa ao cliente | É a subconta de receita a utilizar no procedimento de contabilização não pagos na cessão se foi escolhida a opção de débito despesas ao cliente. |
| Tipo interesse | Ao não pago pode ser associado uma taxa de interesse de referência. Se for nota promissória pode ser simulado um cálculo inicial de interesses entre a data de vencimentos prevista do título e a data de relevação do não pago. |
| Criação cada partida | Este flag permite abrir uma única partida para o não pago de um recibo bancário criado por N diferentes partidas. |






