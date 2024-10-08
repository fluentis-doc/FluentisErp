---
title: Tab Pagamentos
sidebar_position: 4
---

A ficha 'Pagamentos' está presente só se a causal tem o flag 'Encerramento partidas' estabelecido.

A ficha Pagamentos permite visualizar as partidas abertas para proceder com os pagamentos/cobranças ou com as compensações: tipicamente todas as registrações de tipo Imposto tem o flag de 'Abertura partidas' e poderiam ter (as notas de crédito normalmente tem) também o flag de encerramento + compensação partidas: as causais de pagamento, cobrança, invés, preveem sempre o encerramento das partidas sem o flag de compensação; eventualmente podem ter o flag de abertura das partidas para gerir os casos de pagamento adiantados. Vamos esclarecer imediatamente os pagamentos das partidas e a compensação das partidas: a compensação, na terminologia contábil, pode ser intendida seja como compensação partidas (débito/crédito) da mesma subconta (p.ex. fatura com nota de crédito) mas também como compensação cliente/fornecedor (p.ex. remuneração do débito em respeito da subconta fornecedor com o crédito da subconta cliente). Na lógica do aplicativo, invés, a remuneração é associada com a situação de partidas que pertencem a mesma subconta, que podem ser gerida mais em geral simplesmente efetuando seja pagamentos partidas débito que crédito (que para o saldo se 'compensam' na contabilidade).

Se no cabeçalho da registração foi inserida uma subconta titular, esse vai ser reportada como filtro de pesquisa nos campos relativos iniciais da ficha pagamentos: para todas as registrações Imposto, portanto, o aplicativo vai propor as partidas só do cliente/fornecedor inserido no cabeçalho, para proceder com a remuneração da fatura/nota de crédito; no caso de registrações de pagamento/cobranças, invés, normalmente o campo vai ser vazio e vai ser o usuário que vai compilar os filtros em relação as exigências. Se sinaliza, em particular, o campo da subconta 'Banco': não refere-se ao filtro, mas é compilado com a subconta de pagamento inserida no registro do cliente/fornecedor titular da registração e daqui é atualizado e vai atualizar a registração contábil no campo que prevê o tipo quantia 'Tot. doc./registração' (se os parâmetros de contabilidade, na lista das contas clientes/fornecedores, autorizam a substituição).

Uma vez individuada, na primeira grelha, a partida (ou as partidas) a pagar é possível selecioná-las e pagá-las através dum duplo click em cada linha, ou utilizando o botão 'Criar pagamentos'. Se a causal prevê a compensação partida vai ser ativo o botão 'Remuneração partidas' (e o duplo click vai ter o mesmo significado). Um último botão a utilizar nesta seção é 'Criar pagamentos estendidos': abre-se uma máscara intermédia de impostação da quantia do pagamento com uma eventual quantia de bonificação, com a relativa subconta para a relevação contábil (detalhe: nessa máscara tem um único ponto aonde estabelecer o estado 'Forçamente fechado' numa partida: a utilização desse estado não é aconselhada); um resultado parecido pode ser obtido forçando a quantia do pagamento que o ERP vai reportar cada vez, para cada partida, na seção abaixo relativa aos pagamentos. Não é permitido forçar o pagamento com uma quantia superior ao restante da partida.

Para concluir: está presente uma relatório de imprensa (quitação) dos pagamentos da registração. Em segundo lugar, o pagamento vai ser gerido, em relação as impostações da causal, com o câmbio histórico da partida (nessa maneira não vai ser relevada nenhuma diferença câmbio automático, que se vai gerir manualmente na contabilidade: a opção facilita, e isso é particularmente útil, a gestão da igualdade entre as partidas abertas e o saldo contábil) ou o contravalor euro vai ser calculado com o câmbio da data registração (e nesse caso, se estabelecido corretamente na causal e nas moedas, o procedimento vai valorizar automaticamente as subcontas de útil/perda câmbios moeda por moeda). Enfim, se visualizar uma só das duas grelhas através do botão 'Expandir/Reduzir', vão ser visualizados os campos de totalização das quantias selecionadas na mesma: na base dos pagamentos efetivamente inseridos e das impostações da causal, o aplicativo vai atualizar a linha com o tipo quantia 'Tot. doc./registração' com o total dos pagamentos relevados, enquanto vai inserir uma linha para cada pagamento e agrupar os pagamentos débito/crédito, moeda por moeda, de cada subconta paga/cobrada.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar a registração. |
| Nova registração | Botão para criar uma nova registração. |
| Parâmetros de inserção | Refere-se aos parâmetros de inserção da primeira nota. |
| Abrir registro | Botão para chamar de novo a gestão registro da subconta selecionada, ou em ausência, a pesquisa de um outro registro. |
| Procurar partidas | Botão para procurar as partidas a pagar/cobrar. |
| Cancelar os pagamentos | Botão para cancelar os pagamentos precedentemente selecionados. |
| Criar pagamentos | Botão para criar o pagamento da partida selecionada. |
| Remuneração | Botão para operar a remuneração partidas se prevista na causal contábil. |
| Criar pagamentos estendidos | Botão para gerir o pagamento/cobrança com eventuais quantias de bonificação e relativa subconta de relevação contábil. |
| Expandir/Reduzir | Botão para reduzir a visualização só da parte das partidas ou pagamentos e vice-versa ou expandí-las ambas. |
| Imprimir | Botão para imprimir o pagamento/cobrado selecionado. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document Manager](/docs/guide/common/operations-with-data/document-manager)  | Botão para a ligação com a gestão documental. |






