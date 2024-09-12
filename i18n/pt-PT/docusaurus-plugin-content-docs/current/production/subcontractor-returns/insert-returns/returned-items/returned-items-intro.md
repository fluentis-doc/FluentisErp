---
title: Artigos retornados
sidebar_position: 1
---

Neste tab se visualiza a lista de artigos que foram feitas retornar pelo empreiteiro, portanto as linhas que produziram uma evasão de linhas ordem de empreiteiro.

Este tab é constituído por uma grelha e por outros 2 'subtab', chamados 'Artigo' e 'Lotes/NS'. As colunas presentes na grelha são as seguintes:

**Classe/Código artigo/Descrição artigo/Variante**: nestas colunas são visualizadas a classe, o código, a descrição e a variante do artigo inserido no retorno do empreiteiro;

**Opção**: nesta coluna, visualiza-se a opção da linha artigo;

**Fase/subfase**: nestas colunas, visualizam-se o código de fase e o código de subfase de produção da ordem de produção cujo artigo é eventualmente associado; isso acontece se a ordem de empreiteiro executada com esta linha de retorno foi gerada por uma fase externa de uma ordem de produção;

**UM**: nesta coluna, visualiza-se a unidade de medida gestional do artigo retornado;

**UMU**: nesta coluna, visualiza-se a unidade de medida de utilizo do artigo retornado;

**Quantidade ordenada**: nesta coluna, visualiza-se a quantidade que foi inserida como quantidade a produzir na linha da ordem de empreiteiro cujo foi gerada esta linha de retorno. Se refere a uma coluna de 'só leitura';

**Quantidade retornada**: nesta coluna se visualiza a quantidade que foi feita retornar com esta linha de retorno de empreiteiro. A coluna é editável pelo usuário;

**Quantidade restante**: nesta coluna, visualiza-se a quantidade restante da linha da ordem de empreiteiro pela qual foi gerada a linha de retorno. Quando é igual a zero significa que a linha da ordem de empreiteiro foi completamente executada;

**Preço unitário de produção**: nesta coluna, visualiza-se o preço unitário de produção retomado diretamente pela linha da ordem de empreiteiro pela qual foi gerada a linha de retorno. Se refere a uma coluna editável pelo usuário;

**Valor**: nesta coluna, visualiza-se o valor total da produção que se esta fazendo retornar. É uma coluna de só visualização e equivale a multiplicação dos valores da coluna Quantidade retornada e da coluna Preço unitário de produção;

**UM alt.**: nesta coluna, visualiza-se a unidade de medida alternativa do artigo retornado, editável pelo usuário;

**Quantidade alternativa**: nesta coluna, visualiza-se a quantidade expressa na unidade de medida alternativa do artigo;

**Saldo**: nesta coluna, visualiza-se um flag que permite ao usuário, se ativado, efetuar a execução forçada da correspondente linha da ordem de empreiteiro;

**Depósito retorno**: nesta coluna, visualiza-se o código do depósito cujo precisa fazer retornar a mercadoria que vem do empreiteiro. O código do depósito é proposto igual aquele estabelecido na linha da ordem empreiteiro que foi executado com esta linha de retorno, mas é editável pelo usuário. Se ao contrário, foi inserido no cabeçalho um determinado tipo de retorno que prevê um depósito diferente, vai ser proposto, então, o depósito do tipo retorno, mas só se é ativo o flag, presente nos Parâmetros de empreiteiro, chamado 'Considerar depósitos de acordo com o tipo nota de entrega de retorno';

**Causal retorno**: nesta coluna, visualiza-se o código da causal de depósito que vai ser utilizado para efetuar o carregamento do artigo no depósito cujo precisa fazer retornar a mercadoria que provém do empreiteiro. O código da causal de depósito é proposto igual aquele estabelecido na linha da ordem de empreiteiro que foi executado como esta linha de retorno, mas é editável pelo usuário. Se, ao contrário, foi inserido no cabeçalho um determinado tipo retorno que prevê um depósito diferente, vai ser proposta a causal de depósito do tipo retorno, mas só se é ativo o flag, presente nos Parâmetros de empreiteiro, chamado 'Considerar os depósitos de acordo com o tipo nota de entrega de retorno';

**Ordem/Ano**: nesta coluna, visualiza-se o número e o ano da ordem de empreiteiro cujo foi gerada a linha de retorno;

**Descrição variante**: nesta coluna, visualiza-se a descrição da variante do artigo retornado;

**Descrição opção**: nesta coluna, visualiza-se a descrição da opção da linha artigo;

**Descrição depósito**: nesta coluna se visualiza a descrição do depósito inserido na linha artigo;

**Descrição causal**: nesta coluna, visualiza-se a descrição da causal de depósito inserida na linha artigo.

Este tab contém 2 subtab, dentro da qual são geridas algumas informações relativas a linha que se tem selecionada na grelha.






