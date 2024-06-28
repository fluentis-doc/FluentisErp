---
title: Fases
sidebar_position: 3
---

Este tab é constituído por uma grelha, onde o usuário pode inserir manualmente as fases de produção que deseja que sejam desenvolvidas para a produção do artigo objeto da ordem planejada (só se de produção). Vai resultar já compilado se a ordem planejada vem da programação geral ou da elaboração PNR, ao contrário, quando a ordem é inserida manualmente, precisa, para importar os dados do ciclo de produção do artigo, clicar no botão 'Conclusão dados ordem' presente na caixa de ferramentas. As colunas presentes na grelha são as seguintes:

**Código fase/Fase/Subfase**: com um duplo click se abre a relativa Ajuda fases de produção pela qual se pode selecionar a relativa fase e subfase. O código fase é simplesmente restituído;

**Ctrl Qty**: este flag indica se o material tem de ser submetido ao controle qualidade antes do seu utilizo;

**Fase prod.**: se o flag estiver assinalado, significa que a fase é uma fase produtiva, e que portanto vai ter que ser avisada;

**Centro de trabalho**: a partir deste campo se estabelece o centro de trabalho. É proposto em automático, retomado pela fase que foi precedentemente selecionada e inserida na grelha;

**Data início/fim previsto**: se refere as datas de início e fim da relativa fase; trocando as datas previstas de início e fim produção vai modificar também automaticamente essas últimas. São calculadas de acordo com os tempos inseridos nas fases de produção, e mais precisamente de acordo com o maior entre o tempo operário e o tempo máquina total para a fase selecionada;

**Tempo máquina**: é o tempo utilizado pela máquina para realizar a fase. Se refere a quantidade de peças por fase;

**Número máquinas**: indica o número de máquinas envolvidas nesta fase;

**Quant. peças por fase**: indica o número de peças por fase;

**Tempo operário**: é o tempo utilizado pelo operário para realizar esta fase, referido a quantidade de peças por fase;

**Número operários**: é o número de operários envolvidos nesta fase;

**Empreiteiro/Subconta empreiteiro**: com um duplo click na casa se abre uma Ajuda para poder selecionar a conta e a subconta do relativo empreiteiro. Esta casa é ativa só se a fase for desenhada como fase Externa. O empreiteiro vai ser também retomado pela fase de produção inserida no ciclo de produção do artigo;

**Descrição centro de trabalho**: neste campo aparece a descrição do centro de trabalho;

**Descrição empreiteiro**: neste campo aparece a razão social do empreiteiro;

**Descrição fase/subfase**: neste campo aparece a descrição da fase selecionada;

Logo embaixo a grelha estão presentes outros dados referidos sempre a fase selecionada na grelha:

**Máquina**: neste campo se pode selecionar o código (e descrição) da relativa máquina. Se propõe em automático, é retomada pelo centro de trabalho que foi precedentemente inserido na grelha;

**Grupo MDO**: neste campo se pode selecionar o código (e descrição) do relativo grupo mão de obra. Se propõe em automático, é retomado pelo centro de trabalho que foi precedentemente inserido na grelha;

**Tipo**: neste campo é possível estabelecer o tipo de produção (interna ou externa);

**Sobrep.**: através esse campo se insere a tipologia de uma eventual sobreposição entre as fases. Se pode ter uma sobreposição Total (neste caso a fase em objeto é sobreposta totalmente na fase indicada sucessiva), Em peças (neste caso precisa indicar depois de quantas peças produzidas desta fase vai começar a fase sucessiva), Em tempo (neste caso precisa indicar depois de quantos minutos de quando que começou a fase em objeto vai começar a fase sucessiva);

**UM tempos**: nesta caixa de combinação aparece a unidade de medida de tempos da fase; se pode decidir de gerir os tempos da fase em segundos, minutos, horas e dias. Normalmente se gerem em minutos os tempos das fases internas e a dias aqueles das fases externas, mas obviamente depende da tipologia de empresa pela qual se esta estabelecendo o trabalho;

**Valor**: aqui se indica o valor da eventual sobreposição, utilizando os critérios especificados em cima;

**Sobreposiç. referida a fase/subfase**: aqui se indica o código da fase e subfase, que apresentam uma sobreposição com a fase em objeto. Normalmente se indica a fase sucessiva, mas aqui também se refere só a uma de costume;

**Utizo**: se o flag é ativado, significa que se deseja que o tempo de espera/fila aumenta o tempo de utilizo do centro de trabalho naquela fase;

**Tempo de espera ou fila**: indica o eventual tempo de espera/fila previsto para esta máquina.






