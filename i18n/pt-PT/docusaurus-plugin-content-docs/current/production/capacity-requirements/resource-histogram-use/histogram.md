---
title: Histograma
sidebar_position: 3
---

Neste tab, constituído por uma grelha de resultado e por uma parte gráfica, é possível visualizar uma linha para cada fase das ordens planejadas e/ou de produção filtradas de acordo com os critérios estabelecidos no tab 'Filtro'.

As colunas visualizadas na grelha de resultado são as seguintes:

**Documento**: a coluna visualiza a indicação relativa ao fato que a linha selecionada se refere a uma ordem de produção ou a uma ordem planejada;

**Estado documento**: a coluna visualiza o estado do documento, que se refere a uma ordem de produção. Os valores expostos podem ser 'Lançado', 'Executivo' e 'Executado';

**Prioridade**: a coluna visualiza a prioridade do documento;

**Tax.**: a coluna visualiza uma flag 'Taxativo' que se ativo permite ao usuário indicar que a ordem planejada seja absolutamente não movível;

**Ano**: a coluna visualiza o ano do documento;

**Ordem**: a coluna visualiza o número do documento;

**Código tipo ordem**: a coluna visualiza o código do documento;

**Descrição tipo ordem**: a coluna visualiza a descrição do documento;

**Ano encomenda**: a coluna visualiza o ano da encomenda de produção pela qual foi gerado o documento. A coluna resulta vazia se o mesmo documento foi gerado manualmente ou vem da elaboração PNR;

**Número encomenda**: a coluna visualiza o número da encomenda de produção pela qual foi gerado o documento. A coluna resulta vazia se o mesmo documento foi gerado manualmente ou vem da elaboração PNR;

**Código tipo encomenda**: a coluna visualiza o código do tipo encomenda de produção;

**Descrição tipo encomenda**: a coluna visualiza a descrição do tipo encomenda de produção;

**Data início ordem**: a coluna visualiza a data de previsto início do documento; esta data representa a data de previsto início da primeira fase de produção do ciclo do artigo;

**Data fim ordem**: a coluna visualiza a data de previsto fim do documento; esta data representa a data de previsto fim da última fase de produção do ciclo do artigo;

**Data mercadoria pronta**: a coluna visualiza a data de mercadoria pronta da linha da ordem cliente pela qual foi gerada a encomenda cujo plano de trabalho e elaboração PNR gerou a ordem selecionada. Obviamente o campo resulta vazio se a encomenda que gerou a ordem planejada ou de produção foi criada pelo 'Previsional' ou manualmente;

**Data prevista entrega**: a coluna visualiza a data de prevista entrega da linha da ordem cliente pela qual foi gerada a encomenda cujo plano de trabalho e elaboração PNR gerou a ordem selecionada. Obviamente o campo resulta vazio se a encomenda que gerou a ordem planejada ou de produção foi criada pelo 'Previsional' ou manualmente;

**Fase, subfase, descrição fase**: nestes campos são visualizados os dados relativos a fase de produção da ordem planejada ou de produção objeto da linha selecionada;

**CdT**: esta caixa de combinação, que visualiza o código do centro de trabalho desenhado para a fase selecionada permite eventualmente também modificar o CdT, atribuindo portanto a fase selecionada a um outro centro de trabalho;

**Data início fase/ Data fim fase**: se refere as datas de início e fim da fase selecionada. São calculadas de acordo com os tempos inseridos nas fases de produção, e mais precisamente de acordo com o maior entre o tempo operário e o tempo máquina total para a fase selecionada;

**UM tempo**: a coluna visualiza a unidade de medida utilizada, para a fase selecionada, para os tempos que aparecem nas colunas sucessivas. Podem ser segundos, minutos, horas ou dias;

**Tempo aparelh.**: a coluna visualiza o tempo de aparelhagem estabelecido para a fase selecionada;

**Tempo máquina**: a coluna visualiza o tempo da máquina unitária estabelecida, para a fase selecionada, pela quantidade por fase;

**Tempo atribuído**: a coluna visualiza o tempo operário estabelecido, para a fase selecionada, pela quantidade por fase;

**Classe**: a coluna visualiza a classe do artigo objeto do documento;

**Código artigo**: a coluna visualiza o código do artigo objeto do documento;

**Variante**: a coluna visualiza a eventual variante do artigo objeto do documento;

**Quantidade**: a coluna visualiza a quantidade a produzir para aquela ordem pela fase selecionada;

**Quantidade produzida**: a coluna visualiza a quantidade já produzida (e portanto avisada) para aquela ordem pela fase selecionada;

**Quantidade restante**: a coluna visualiza a diferença entra os 2 campos acima indicados, portanto a quantidade ainda a produzir para aquela ordem pela fase selecionada;

**Notas**: a coluna visualiza as notas inseridas no tab Notas da ordem planejada ou de produção para a fase selecionada;

**Encomenda**: a coluna visualiza a eventual encomenda de venda associada ao documento;

**Cliente**: a coluna visualiza a conta e a subconta do cliente associado ao documento;

**Descrição cliente**: a coluna visualiza a razão social do cliente associado ao documento;

**Descrição artigo**: a coluna visualiza a descrição do artigo objeto do documento;

**Descrição centro de trabalho**: a coluna visualiza a descrição do centro de trabalho desenhado pela fase selecionada.

Selecionando uma linha da grelha, a seção abaixo visualiza o gráfico relativo ao centro de trabalho utilizado na fase selecionada, evidenciando em amarelo o tempo utilizado para aquela fase. Em vermelho, evidência-se o histograma relativo à capacidade produtiva disponível do centro de trabalho representado no gráfico exposto, em azul, evidência-se o histograma relativo ao tempo utilizado nas ordens planejadas, enquanto o verde evidência o histograma relativo ao tempo utilizado nas ordens de produção. Nos eixos das abcissas se representam os dias do calendário de fábrica (os dias de trabalho são marcados pelo histograma com a cor vermelha), ao contrário nos eixos das ordenadas se indicam os minutos de trabalho disponíveis para um dia, calculados de acordo com o calendário de cada capacidade produtiva. Por exemplo, se um centro de trabalho tem a capacidade cotidiana de 8 horas, no gráfico a barra vertical vermelha vai chegar até o valor de 480 minutos figurados no eixo das ordenadas.

Exercitando um simples duplo click na linha da grelha, o usuário entra diretamente no documento (ordem planejada ou ordem de produção) que contém a fase representada na linha cujo se partiu, com a possibilidade, subordinada na presencia dos direitos do usuário, de modificar o documento e ver, depois de ter dado um 'Refresh' da visualização, a situação é atualizada também do ponto de vista do gráfico.






