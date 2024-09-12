---
title: Operações patrimoniais
sidebar_position: 2
---

Uma vez salvados os dados de cabeçalho se vão ativar os tabuladores sucessivos: dentro da ficha 'Operações patrimoniais' são presentes os detalhes das várias operações a livro ativo fixo. A primeira linha vai ser relativa a compra inicial do ativo fixo: a data da operação, o seu número progressivo e a sucessiva quantia inserida na coluna relativa (eventualmente, se ha a gestão das quantidades, também a quantidade dos ativos fixos relativa a esse valor total). A direita da grelha são presentes o campo da 'Subconta cliente/fornecedor' e as outras referências da operação. Se o carregamento de um ativo histórico a quantia dos fundos amortização já calculados NÃO vai ser inserido diretamente nesta seção ma reportado na seção abaixo com o estado 'Contabilizado' para fazer em modo que essa seção seja calculada pelo ERP.

A grelha central apresenta a lista das amortizações calculadas para o ativo fixo: a inserção pode ser manual ou automática. A inserção manual prevê a indicação do ano de referência, do número linha progressivo de referência (mas só para a categoria não incrementais, para as outras o campo está escondido por que a amortização vai ser sempre associada com o progressivo 1), o tipo de amortização a aplicar: a partir desse ponto o ERP vai reportar as impostações da categoria ativo fixo de referência, com uma conta subconta porcentagem de aplicação e as quantias (valores que se podem forçar e modificar como preferir). No final da grelha é presente a data de referência da amortização, proposta como o fim exercício do ano contábil de referência da linha, e enfim as quantias da quota dedutível e não dedutível da amortização. A inserção automática prevê a definição do ano de referência no campo superior a grelha e a utilização do botão de gestão 'Executar amortização automática' que vai a reportar os dados das amortizações previstas na categoria para todo o ativo fixo em utilização.

O cálculo da amortização vai ser reportado na coluna 'Já amortizado' da grelha superior que vai servir a indicar uma quantia ainda não definitiva: só com a indicação do flag Contabilizado, nas várias linhas, as quantias superiores vão ser atribuídas na coluna do fundo relativo a tipologia da mesma amortização. A inserção manual do flag NÃO efetua uma registração na contabilidade (para isso tem um procedimento de contabilização amortizações): se utiliza normalmente só para o carregamento manual inicial da situação histórica, pela qual, se efetua uma inserção única da quantia total amortizada no ao precedente ao começo da utilização do ERP e não de todo o detalhe da amortização. No salvamento da linha com o flag Contabilizado, o ERP vai pedir se deseja associar uma registração contábil já existente, mensagem que normalmente (no caso de retomada dos dados históricos) se responde negativamente. O flag Amortização fiscal prevê a gestão fiscal da linha amortização: é proposto na base do mesmo flag previsto na categoria ativo fixo. Em alguns casos pode ser utilizado manualmente para relevar a livro ativos fixos, a rotação das amortizações adiantadas utilizadas no balanço ordinário com amortizações fiscais a gerir só para o cálculo da tributação. A gestão fiscal, se tem através da valorização dos campos com as quantias dedutíveis/não dedutíveis da amortização, valorizados automaticamente em relação a porcentagem de dedutibilidade associada com o ativo fixo ou com a sua categoria.

Na última seção está presente o detalhe de valorização a centro de custo/encomenda de venda das amortizações selecionadas na segunda grelha.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Nova operação | Ativa o cursor na primeira grelha das operações patrimoniais. |
| Cancelar operação | Cancela a operação selecionada na grelha da operação patrimonial. |
| Nova amortização | Ativa o cursor na segunda grelha das amortizações. |
| Cancelar amortização | Cancela a amortização selecionada na grelha amortizações. |
| Executar a amortização automática | Calcula a amortização do ativo fixo em utilização para o ano estabelecido no campo imediatamente acima a grelha amortizações. |
| Inserção CdC | Ativa o cursor na grelha dos centros de custo. |
| Cancelar CdC | Cancela o movimento do centro de custo selecionado na grelha. |
| Cálculo centros de custo | Executa o cálculo dos centros de custo para o valor da linha amortização selecionada. |
| Inserção encomendas | Ativa o cursor na grelha das encomendas. |
| Cancelar encomendas | Cancela o cálculo encomenda selecionada na grelha. |
| Cálculo encomendas | Executa o cálculo da encomenda para o valor da linha amortização selecionada. |
| Detalhes reavalizações | Abre a gestão dos detalhes de reavaliação. O botão é ativo só se o flag 'Reavaliações' é estabelecido para a categoria do ativo fixo em utilização. Ver a aplicação a. |
| Documentos | Gestão do armazenamento documental associado a máscara em uso. |

Aplicações:

a) Detalhes reavaliações: na máscara detalhes reavaliações é possível inserir os detalhes dos valores de reavaliação (tributável e quantia reavaliação, fundo e quantia do fundo reavaliado) do ativo fixo em utilização, com a referência do tipo reavaliação definido na tabela.






