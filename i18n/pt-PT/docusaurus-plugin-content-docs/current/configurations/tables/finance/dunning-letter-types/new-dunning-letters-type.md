---
title: Novo tipo
sidebar_position: 3
---

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para procurar o tipo de cobrança através dos campos de filtro código e descrição. |
| Novo tipo | Botão para efetuar um novo tipo de cobrança. |
| Modificar o tipo | Botão para modificar o tipo de cobrança onde é colocado. |
| Visualizar o tipo | Botão para visualizar o tipo de cobrança onde é colocado. |
| Cancelar o tipo | Botão para efetuar o cancelamento do tipo de cobrança aonde é colocado. |

Os campos desta Form são:

**Código**: código de identificação do tipo cobrança.

**Descrição**: descrição do tipo cobrança.

**Cobrança para o grupo partidas**: o flag de gestão para o grupo de partidas, em particular, vai gerir uma letra de caobrança para um grupo de partidas contemporaneamente (gestão padrão), ao invés, sem o flag cada partida contábil vai ter a sua cobrança separada das outras

**Tipo interesse**: opcional é a ligação do tipo de taxa de interesse a aplicar ao atraso de pagamento, para obter um cálculo na data de emissão da cobrança.

Uma vez salvado o tipo de cobrança é possível criar os vários níveis com o botão 'Novo'.

**Código**: código de identificação da cobrança.

**Descrição**: descrição do tipo cobrança.

**Prioridade**: prioridade de criação de 1 a N níveis.

**Dias de atraso**: indicação dos dias de atraso que tem de decorrer antes de cobrar a partida.

**Dias**: o número de dias de vencimento da cobrança e se essas foram calculadas pela data de criação ou pela data de vencimento da cobrança precedente.

**Da data movimento precedente**: data de referência para os níveis sucessivos ao primeiro.

**Da data criação**: data de referência normalmente utilizada para o primeiro nível.

**Crédito**: a ligação com um tipo de controle crédito cliente não é gerido.

Para cada número de cobrança, pode-se proceder, uma vez salvado, com a inserção dos vários textos em língua: o primeiro que vai ser carregado é aquele que vai ser utilizado de default quando o registro cliente não tem uma língua atribuída.

Os textos são divididos em 4 seções: o objeto da letra, o cabeçalho, a conclusão e a seção de referências (ativa só para as cobranças nos grupos de partidas). Na seção referência, em particular, pode-se inserir um texto utilizando os códigos previstos na base da máscara: p.ex.: 'Ref. (3) nº (4) do (5), (9) de (8) (10) com vencimento ao (6)'.






