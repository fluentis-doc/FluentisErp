---
title: Tab Partidas
sidebar_position: 3
---

A ficha Partidas está presente só se a causal tem o flag 'Abertura partidas' estabelecido.

A primeira seção da ficha Partidas é dedicada a gestão dos dados de cálculo das partidas abaixo: para uma registração manual de tipo Imposto se encontra a grelha compilada com os dados de default assim como inseridos dentro do registro cliente/fornecedor/agente atribuída como subconta titular da mesma registração. Para outros tipos de registração (por exemplo, para os pagamentos adiantados é possível codificar uma causal que abre a partida, com sinal contrário, invés que fechá-la visto que o documento ainda não foi relevado): nesse caso a gestão dessa seção torna-se manual, de modo que o usuário possa inserir os dados essenciais do tipo de pagamento, da solução de pagamento e da subconta de referência, com o 100% inserido no campo 'Porcentagem'.

Para essa seção precisa avisar que:

- a partida pode ser criada também com subcontas não de registro que não tem o flag Abertura partidas no plano das contas (esse flag é relativo só para o controle que os dados do jornal e partidas correspondam para as subcontas que a estabeleceram);

- os apoios bancários são reportados tipicamente pelo registro ou pelo documento contabilizado pela área de compras/vendas/recebedores, mas podem ser de vez em vez forçados utilizando a ajuda ABI/CAB. O apoio bancário associado nessa seção vai ser o dado normalmente utilizado nos pagamentos fornecedores qual banco beneficiário do pagamento se não foi estabelecido o flag 'Impor banco de apoio presente no registro do fornecedor';

- normalmente se insere o campo 'Porcentagem'. O significado dos campos 'Quantia/Taxa' é a seguinte: no campo 'Quantia' se pode inserir uma quantia fixa a utilizar para a combinação tipo pag./solução pag. da linha em questão; o campo 'Taxa' permite de definir, dessa quantia, quanto se refere ao Imposto (isso serve se a solução pagamento prevê porcentagens tributável/taxa diferenciadas entre as várias parcelas, para obter um cálculo correto). É possível inserir uma combinação quantia/porcentagem (já no registro): o procedimento vai valorizar a partida com o tipo/solução de pagamento até a cobertura da quantia e o excedente vai ser calculado de acordo com a porcentagem da linha alternativa (p.ex. quantia 1000 para TB 30 dias, porcentagem 100 para RB 60/90: se a quantia é de 1500 vai ser criada uma partida para 1000 para TB 30 dias, duas partidas de 250 como RB a 60 e 90 dias);

- o flag Agrupar partidas que se encontra a esquerda é retomado pelo registro cliente/fornecedor: substancialmente não tem um uso prático, por que é difícil que duas partidas tenham o mesmo tipo de pagamento e a mesma data de vencimento dentro do mesmo documento;

- abaixo há alguns campos de resumo da situação cliente/fornecedor: a quantia do crédito concedido no módulo Risco cliente, o valor da exposição obtido em relação a situação das partidas abertas (sem considerar a registração em utilização) e o saldo contábil (considerando também a registração em utilização);

- no caso de registração que deriva da contabilização não pagos, a grelha superior NÃO tem nenhuma relevância para o cálculo das partidas abaixo (tipicamente o registro prevê partidas para o RB, mas os não pagos são inseridos como TB e não devem remeter em automático outros recebimentos bancários): se lê unicamente se serve o dado dos apoios bancários.

A grelha abaixo apresenta a lista das partidas calculadas em relação as impostações superiores: o usuário pode forçar o tipo de pagamento, a data vencimento para fazê-la corresponder com o dado do documento, pode também forçar as quantias das várias parcelas (tendo cura de respeitar manualmente os totais). Mais importante, talvez, é a possibilidade de bloquear o pagamento da partida: o procedimento vai memorizar a data e o usuário que bloqueou o pagamento (com a eventual nota explicativa) assim como a data e o usuário desbloqueador (para ambas as operações são previstos específicos direitos do usuário no ApplicationUserManager). Ulteriores elementos com gestão manual são: a posição da partida, que é uma tabela livre definível pelo usuário, permitindo de classificar em qualquer maneira as partidas contábeis desde o momento da sua criação; as notas da partida, que podem associar automaticamente na causal contábil a descrição de detalhe da subconta assim como inseridas na contabilidade. A grelha das partidas NÃO permite a inserção manual de uma nova parcela. O último campo prevê a possibilidade de atribuir (ou modificar) o agente de referência para a partida: isso é valorizado automaticamente em relação o agente inserido na fatura de venda no ato da contabilização (se estavam presentes mais agentes, vai ser atribuído aquele com comissões superiores. Se a causal prevê seja a abertura das partidas que o encerramento para a compensação e foi ativado também o flag 'Aviso', no momento do salvamento da registração vai ser restituído ao usuário uma mensagem de aviso da presença de partidas a poder compensar.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar a registração. |
| Nova registração | Botão para criar uma nova registração. |
| Parâmetros de inserção | Refere-se aos parâmetros de inserção da primeira nota. |
| Abrir registro | Botão para chamar de novo, a gestão registro da subconta selecionada, ou em ausência, a pesquisa de um outro registro. |
| Cancelar as partidas | Botão para cancelar a partida criada em automático em relação a tipologia de pagamento inserida. |
| Cancelamento da grelha dos pagamentos | Botão para cancelar a solução de pagamento, proposta em automático pelo registro, ou inserida manualmente. |
| Recalcular partidas | Botão para recalcular a partida forçada manualmente. |
| Agrupar partidas | Botão para agrupar as partidas em ausência de mais partidas com a mesma data de vencimento. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document Manager](/docs/guide/operations-with-data/document-manager)  | Botão para a ligação com a gestão documental. |






