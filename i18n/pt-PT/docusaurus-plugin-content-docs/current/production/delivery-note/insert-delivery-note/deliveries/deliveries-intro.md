---
title: Entregas
sidebar_position: 1
---

Neste tab são inseridos os materiais que devem ser entregados ao empreiteiro. Podem ser inseridos automaticamente através do procedimento de 'Execução da ordem' descrita no parágrafo precedente, ou manualmente pelo usuário.

Este tab é formado por uma grelha e por outros 2 subtab, chamados 'Dados materiais' e 'Lotes/NS'.

As colunas presentes na grelha são as seguintes:

**Ordem/Ano empreit.**: nesta coluna são visualizados o número e o ano da ordem de empreiteiro pela qual a linha artigo foi retirada. Se a linha foi inserida manualmente essa coluna vai resultar vazia;

**Data prevista entrega**: nesta coluna aparece a data de prevista entrega do material, retomada pelo tab 'Materiais a entregar' da ordem de empreiteiro cujo foi gerada a linha artigo da nota de entrega;

**Previsto retorno**: nesta coluna aparece a data de previsto retorno do produto acabado que vai ser realizado pelo empreiteiro utilizando o material em entrega, retomada pelo tab 'Artigos a produzir' da ordem de empreiteiro cujo foi gerada a linha artigo da nota de entrega;

**Nº linha**: nesta coluna aparece um simples número progressivo da linha do documento, editável pelo usuário;

**Classe/Código artigo/Variante/Descrição artigo/Descrição variante**: nestas colunas são visualizadas a classe, o código, a descrição, o código variante e a descrição variante do artigo inserido na nota de entrega;

**UM**: nesta coluna se visualiza a unidade de medida gestional do artigo em entrega;

**Opção**: nesta coluna se visualiza a opção da linha artigo;

**Fase/Subfase**: nestas colunas são visualizados o código de fase e o código de subfase da fase de produção da ordem de produção cujo artigo é eventualmente associado; isso acontece se a ordem de empreiteiro pela qual foi criada essa linha de nota de entrega foi gerada por uma fase externa de uma ordem de produção;

**Quantidade a entregar**: nesta coluna se visualiza a quantidade que se decidiu entregar ao empreiteiro, editável pelo usuário;

**Depósito de retirada**: nesta coluna se visualiza o código do depósito pela qual é retirada a mercadoria a entregar ao empreiteiro. O código do depósito é proposto igual aquele estabelecido na linha do tab 'Materiais a entregar' da ordem de empreiteiro cujo foi gerada a linha nota de entrega, porém é editável pelo usuário. Se, ao contrário, é ativo o flag presente nos parâmetros de empreiteiro, chamado 'Considerar os depósitos de acordo com o tipo nota de entrega', o depósito proposto vai ser aquele estabelecido na tabela dos 'tipos nota de entrega de venda' na adequada coluna 'Depósito';

**Causal de retirada**: nesta coluna se visualiza o código da causal do depósito pela qual vai ser utilizada para efetuar a retirada pelo depósito cujo precisa fazer sair a mercadoria a entregar para o empreiteiro. O código da causal de depósito é proposto igual aquele estabelecido na linha do tab 'Materiais a entregar' da ordem de empreiteiro pela qual foi gerada a linha nota de entrega, mas é ditável pelo usuário. Se ao contrário é ativo o flag, presente nos parâmetros de empreiteiro, chamado 'Considerar os depósitos de acordo com o tipo nota de entrega', a causal proposta vai ser aquela estabelecida na tabela dos 'Tipos nota de entrega de venda', na adequada coluna 'Causal';

**Preço unitário**: nesta coluna, visualiza-se o preço unitário do artigo inserido. Refere-se a uma coluna editável pelo usuário e não obrigatória. Se usa normalmente quando a nota de entrega tem de passar por uma alfandega.

**Valor**: nesta coluna, visualiza-se o valor total da linha que se está entregando. É uma coluna em só visualização e equivale a multiplicação dos valores da coluna Quantidade a entregar e da coluna Preço unitário;

**Imposto**: nesta coluna o usuário pode inserir o código imposto, ou vê-lo automaticamente proposto pelo procedimento que retira-o pelo registro do empreiteiro ou pelo registro do artigo presente na linha, segundo os casos. A caixa de combinação atinge a tabela 'Imposto' que se encontra nas 'Impostações gerais';

**Tipo fat.**: nesta coluna o usuário pode inserir o código do tipo faturado, ou vê-lo automaticamente proposto pelo procedimento que retira-o pelo registro do artigo presente na linha. A caixa de combinação atinge a tabela 'Tipo faturado de compra' que se encontra nas 'Tabelas área de compras';

**Descrição opção**: nesta coluna, visualiza-se a descrição da opção da linha artigo;

**Descrição depósito**: nesta coluna, visualiza-se a descrição do depósito inserido na linha artigo;

**Descrição causal**: nesta coluna, visualiza-se a descrição da causal de depósito inserida na linha artigo;

**Descrição imposto**: nesta coluna, visualiza-se a descrição do imposto inserido na linha artigo;

**Descrição fat.**: nesta coluna, visualiza-se a descrição do tipo faturado inserido na linha artigo;

Este tab contém 2 'subtab', dentro da qual são geridas algumas informações relativas a linha que se deixa selecionada na grelha.






