---
title: Parâmetros
sidebar_position: 3
---

Nesta tab é possível estabelecer e salvar os parâmetros que servem para a libertação das ordens planejadas. O tab se compõe de 3 seções uma para cada tipo de ordem planejada a libertar.

Na seção **Ordens de produção** é possível, através da ativação do flag 'Geração ordens de empreiteiro para as operações externas', decidir que se na lista fases da ordem planejada de produção, que se esta libertando seja inserida uma fase externa, vai ser gerada de consequência uma ordem de empreiteiro para a fase externa. Normalmente este flag é ativo.

Na seção **Pedidos de compra** é possível:

- estabelecer, através da adequada caixa de combinação, o tipo de pedido de compra que tem de ser gerado pela libertação ordem planejada de compra. Nesta caixa de combinação é proposto automaticamente o tipo de pedido de compra já estabelecido nos parâmetros necessidades materiais;

- fazer em modo, ativando o flag 'Arredondar PC no inteiro superior', que o procedimento de libertação ordem planejada de compra arredonda ao inteiro superior a quantidade que foi inserida na linha de pedido de compra qua foi gerado pela libertação das ordens planejadas de compra, se presentes a quantidade com decimais;

- decidir o método de agrupamento: ativando o flag 'Agrupar o mais cedo', o procedimento de libertação efetua um agrupamento de ordens planejadas de compra geradas para o mesmo artigo; na casa 'Por um período em dias de' se estabelece o número de dias de gama pela qual se pode efetuar o agrupamento, considerando os dias de previsto recebimento dos artigos, portanto as datas de fim ordem planejada de compra;

- decidir, se não estiver presente o fornecedor na ordem planejada de compra, se aceitar as ordens sem o fornecedor, negligenciar as ordens sem o fornecedor ou aceitar como fornecedor aquilo que é abaixo especificado nas adequadas casas.

Na seção **Ordens de empreiteiro** é possível:

- estabelecer, através da caixa de combinação do 'Tipo ordem' e o campo 'Ano', se a ordem de empreiteiro a gerar tem de ser de tipo fechado ou aberto e de qual ano tem de ser;

- decidir o método de agrupamento: ativando o flag 'Agrupar as ordens do mesmo empreiteiro', o procedimento de libertação efetua um agrupamento de ordens planejadas de empreiteiro, inserindo na mesma ordem de empreiteiro os artigos que tem de ser lavorados pelo mesmo empreiteiro;

- decidir, se não estiver presente o empreiteiro na ordem planejada de empreiteiro, se negligenciar as ordens sem o empreiteiro ou aceitar como empreiteiro aquele que é abaixo especificado nas adequadas casas.

Enfim, sempre neste tab, é presente o ícone da Ribbon Bar que permite salvar os parâmetros como estão estabelecidos.






