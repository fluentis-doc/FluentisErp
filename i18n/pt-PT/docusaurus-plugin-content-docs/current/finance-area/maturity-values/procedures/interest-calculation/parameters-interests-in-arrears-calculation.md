---
title: Parâmetros de cálculo interesses moratórios
sidebar_position: 3
---

No primeiro tabulador no lado esquerdo estão presentes uma lista de flag de seleção dos tipos de partidas pelas quais proceder com o cálculo das taxas de interesse, e em altro está presente um campo de filtro para os códigos de conta/subconta. Abaixo disso precisa estabelecer o tipo de taxa de default a aplicar e os flag que dirigem a lógica de cálculo.

**Calcular por partidas fechadas no período**: o procedimento vai verificar as partidas que se tornaram fechadas dentro da gama de datas estabelecidas e só para essas vai calcular o valor dos interesses, portanto para os pagamentos parciais não vai ser contado nenhum interesse;

**Calcular para os pagamentos do período**: o procedimento vai individuar os pagamentos registrados dentro da gama de datas e com essas quantias vai calcular o valor dos interesses relativos: essa impostação é aquela aconselhada.

Se não foi inserido nenhum flag o cálculo vai valorizar os interesses relativos os dias de atraso presentes na gama de datas estabelecidas.

**Tipo documento** e **Tipo pagamento**: são outros filtros de individuação as partidas pelas quais atribuir o cálculo dos interesses.

O botão de opção sucessivo permite definir o tipo de taxa a utilizar no cálculo dos interesses:

- calcular os interesses só para o clientes aonde foi inserido no registro uma data de acordo;

- calcular os interesses sobre os clientes com um acordo em relação as impostações de registro, a taxa de default inserida acima para todos os outros;

- calcular os interesses para todos os clientes em relação a taxa de interesse de default inserido acima.

Um último flag, já estabelecido de default, prevê a exclusão dos interesses das partidas pagas com efeitos do módulo carteira efeitos: tal impostação serve, em particular, para os tipos de taxa aonde foi estabelecido o cálculo também com o desconto, por que o encerramento da partida cliente é normalmente relevado diretamente na emissão do recebimento bancário/efeito cambiário.

O procedimento de cálculo é constituído na seguinte maneira:

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Cáculo interesses | O botâo executa o cálculo em relação os parâmetros estabelecidos. |






