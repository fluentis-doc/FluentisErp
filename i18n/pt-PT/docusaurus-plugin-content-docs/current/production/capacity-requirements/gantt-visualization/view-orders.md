---
title: Visualizar as ordens
sidebar_position: 4
---

A janela 'Visualizar as ordens' se compõe de 2 tab idênticos, cada um se compõe de 2 grelhas. A grelha inferior depende daquilo que se seleciona na grelha superior.

No primeiro tab, chamado 'Ordens no Gantt', se visualiza, na grelha superior, uma linha para cada fase de cada ordem de produção interessada pela utilização do centro de trabalho pela qual partiu o histograma para explodir a janela em objeto.

As colunas visualizadas na grelha de resultado são as seguintes:

**Tipo ordem**: a coluna visualiza o tipo de documento; pode ser 'Executivo', 'Lançado' e, no caso de ordem planejada, 'Planejado';

**Encomendas de produção**: a coluna visualiza o ano e o número da encomenda de produção pela qual foi gerada a ordem. A coluna resulta vazia se a ordem planejada foi gerada manualmente ou vem da elaboração PNR;

**Código tipo encomenda**: a coluna visualiza o código do tipo encomenda de produção;

**Descrição tipo encomenda**: a coluna visualiza a descrição do tipo encomenda de produção;

**Ordem**: a coluna visualiza o número da ordem planejada ou de produção;

**Código tipo ordem**: a coluna visualiza o código do tipo ordem planejada;

**Descrição tipo ordem**: a coluna visualiza a descrição do tipo ordem planejada;

**Data início ordem**: a coluna visualiza a data de previsto início da ordem planejada ou de produção; esta data representa a data de previsto início da primeira fase de produção do ciclo do artigo;

**Data fim ordem**: a coluna visualiza a data de previsto fim da ordem planejada ou de produção; esta data representa a data de previsto fim da última fase se produção do ciclo do artigo;

**Exec. ordem**: a coluna visualiza o valor '0' se a ordem não foi ainda atribuída, o valor '1' se já teve alguns avisos de produção;

**Classe**: a coluna visualiza a classe do artigo objeto da ordem;

**Código artigo**: a coluna visualiza o código do artigo objeto da ordem;

**Descrição artigo**: a coluna visualiza a descrição do artigo objeto da ordem planejada;

**Variante**: a coluna visualiza a eventual variante do artigo;

**Descrição variante**: a coluna visualiza a eventual descrição variante do artigo;

**Código/Descrição área de entr.**: as colunas visualizam o eventual código e descrição da área de entrega;

**Fase de produção**: a coluna visualiza os códigos da fase e subfase da fase de produção;

**Descrição fase**: a coluna visualiza o total do tempo que o centro de trabalho dedica àquela fase;

**%**: a coluna visualiza o valor do tempo em termos de porcentagem sobre o total da capacidade produtiva disponível para aquele dia;

Artigo, descrição, variante, descrição variante primeiro nível; as colunas visualizam as informações relativas ao semiacabado de primeiro nível presente na estrutura de produtos;

**Quantidade**: a coluna visualiza a quantidade da ordem planejada do artigo;

**Quantidade confirmada**: a coluna visualiza a quantidade confirmada da ordem planejada do artigo, diferente de zero só se a ordem planejada vem da elaboração PNR;

**Cliente**: a coluna visualiza a conta e a subconta do cliente associada com a ordem planejada;

**Fornecedor**: a coluna visualiza a conta e a subconta do fornecedor associado com a ordem planejada, se de compra ou de empreiteiro.

Na grelha abaixo são visualizadas as linhas das ordens clientes pela qual foram geradas as encomendas de produção cujo plano de trabalho levou a criação das ordens planejadas ou de produção representadas na grelha superior. As informações visualizadas são Tipo, Ano, Número e Data inserção da ordem cliente, o cliente presente no cabeçalho Ordem cliente, Classe, Código, Descrição, Variante e Descrição variante do artigo presente na linha da ordem cliente, como também o seu dia de prevista entrega.

No segundo tab são expostos, com uma estrutura idêntica aquela do tab 'Ordens no Gantt' e as 'Ordens não no Gantt'.

Existe também uma pequena Ribbon Bar que permite ao usuário substituir o centro de trabalho pelo documento selecionado e de mover de X dias ou numa determinada data o documento selecionado na grelha superior.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Importação simulação | Refere-se ao procedimento que confirma as mudanças executadas pelo usuário nos documentos visualizados no gráfico. |
| Salvar a simulação | Refere-se ao procedimento que salvar num arquivo a simulação executada pelo usuário mas sem as suas mudanças estabelecidas nos documentos no gráfico. |
| Carregar simulação | Refere-se ao procedimento que carrega no gráfico uma simulação precedentemente salvada. |
| Zoom Out | Permite aumentar o detalhe temporal no gráfico. |
| Zoom In | Permite diminuir o detalhe temporal no gráfico. |
| PNR | Refere-se ao procedimento que lança a elaboração PNR em todo o banco de dados. |
| CdT sobrecarregados | Abre uma janela de pop-up dentro da qual aparece uma grelha aonde são visualizados os centros de trabalho interessados pelos documentos no gráfico, com a evidência, no vermelho, dos dias em que os CdT resultam ser utilizados principalmente de acordo com as suas capacidades produtivas cotidiana. |
| Redução da simulação | Refere-se ao procedimento para executar a redução da simulação aonde se está trabalhando. |






