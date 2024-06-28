---
title: Parâmetros
sidebar_position: 4
---

A primeira parte dos parâmetros é aquela de dedicar a impostação da ordem com a qual apresentar os tabuladores previstos, através dos adequados botões.

A segunda parte contém as seguintes opções:

**Controle tipo conta**: a presencia desse flag vai impor ao procedimento de verificar a correspondência da subconta titular da registração em relação as impostações dos parâmetros de contabilidade (p.ex.: uso de uma conta cliente numa causal de compra ao fornecedor): em caso de exito negativo vai ser executado uma simples mensagem de advertência.

**Bloquear a registração se o tipo conta é incompatível**: a presencia desse flag vai impor ao procedimento de anular a inserção de uma subconta titular da registração não válida em relação as impostações dos parâmetros de contabilidade (p.ex.: uso de uma conta cliente numa causal de compra do fornecedor).

**Permitir a registração contábil com desequilíbrio**: a presencia desse flag vai permitir ao usuário salvar as registrações contábeis não equilibradas. Se quiser, claramente aconselhado, permitir registrações deste tipo, se lembra que é disponível um relatório de visualização das registrações desequilibradas, a associar a imprensa Agenda do módulo de contabilidade geral.

**Bloquear o cancelamento registrações com partidas pagas**: com esse flag não vai ser possível cancelar as registrações que têm dentro ao menos uma partida com um pagamento associado.

**Bloquear a registração se o valor das partidas não é igual ao movimento contábil**: a presencia desse flag vai impor ao procedimento de bloquear o salvamento de registrações pelas quais o valor dos movimentos contábeis não corresponde aos valores de movimentação dos livros-razões (em abertura e em encerramento das partidas): se não foi estabelecido, o procedimento, vai executar uma mensagem de aviso da presencia de uma diferença. O controle se executa em todas as subcontas que no plano das contas têm estabelecido o flag 'Abertura partidas'.

**Bloquear a registração se o total documento é diferente do total dos dados Imposto**: a presencia desse flag vai impor ao procedimento de bloquear o salvamento de registrações pelas quais o valor total dos movimentos Imposto não corresponde aos totais estabelecidos no cabeçalho da registração: se o campo não estiver estabelecido o procedimento vai executar uma mensagem de aviso.

**Atualizar automaticamente o total do documento ao variar dos dados na grelha de Imposto**: a presencia desse flag vai impor ao procedimento de atualizar, mas só no aumento, os totais do cabeçalho da registração ao variar da soma total inserida na seção Imposto da registração.

**Atualizar também na diminuição**: este flag, ativo só quando o precedente é estabelecido, vai forçar o procedimento a atualizar os totais da registração também em diminuição.

**Bloquear a registração se a ordem de protocolo não é respeitada**: a presencia deste flag vai impor ao procedimento de bloquear o salvamento de registrações pelas quais a ordem temporal de registro não é respeitada: em particular, com este flag o procedimento vai recuperar os números de protocolos só se foi estabelecida uma data de registração válida para o mesmo número. Se o flag não foi inserido, de qualquer modo o procedimento vai executar uma mensagem de aviso da carência de ordem de registro: se lembra, também, que a imprensa registros Imposto não permite, na impostação de default, imprimir em definitivo os registros Imposto que têm buracos na numeração ou não seguem a ordem de registro correta.

**Gestão separada CdC/CdL**: esse flag, ativo se a causal gere seja os centros de custo que de lucro, vai permitir atribuir os movimentos econômicos de contabilidade seja nos centro de custo que de lucro. Se não foi estabelecido, o movimento pode ser atribuído só numa das duas seções.

**Recalculo automático CdC, CdL e encomendas**: o flag em objeto vai ser reportado também nas registrações contábeis baseadas nesta causal: o significado é aquele de executar automaticamente ou não o recalculo das seções analíticas dos centros de custo, lucro e das encomendas uma vez ambas em modifica de uma registração contábil já salva. No ato de inserção de uma nova registração, até o seu primeiro salvamento, a atualização dessas seções vai ser sempre automática em relação as impostações de default definidas.

**Bloquear a registração se o valor dos CdC/CdL não é igual ao movimento contábil**: a presencia deste flag vai impor ao procedimento de bloquear o salvamento de registrações pela qual o valor total dos movimentos analíticos dos centros de custo e lucro não correspondem as quantias econômicas movimentadas na seção de contabilidade geral: se o flag não estiver inserido vai ser em qualquer modo executada uma mensagem de aviso de carência em correspondência dos valores.

**Agrupar o Imposto no livro-jornal**: a presencia deste flag vai impor ao procedimento de agrupar no livro jornal as linhas Imposto atribuídas na mesma subconta contábel (e na mesa divisão).

**Bloquear o salvamento com o número documento duplicado**: a presencia deste flag, inserido de default, vai impor ao procedimento de bloquear o salvamento de registrações contábeis com o mesmo número documento, mesmo ano, mesmo tipo documento e registro no cabeçalho da registração.

**Cor do fundo**: estabelecer neste campo a cor do fundo para visualizar nas pesquisas a video os movimentos baseados nesta causal. O uso das cores pode ser útil para individuar o tipo de movimento sem ter que ler as descrições ou códigos das causais.

**Primeiro plano da cor**: estabelecer neste campo a cor do dos textos a visualizar nas pesquisas a video os movimentos baseados nesta causal. O uso das cores pode ser útil para individuar o tipo de movimento sem ter que ler as descrições ou códigos das causais.

**Amostra de texto**: o campo visualiza o resultado da combinação de cores estabelecida.

**Caráter itálico**: estabelecer neste campo a visualização em itálico dos caracteres para essa causal nas pesquisa a video: pode ser útil para individuar o tipo de movimento sem ter que ler as descrições ou os códigos das causais.

**Caráter negrito**: estabelecer neste campo a visualização em negrito dos caracteres para esta causal nas pesquisas a video: pode ser útil para para individuar o tipo de movimento sem ter que ler as descrições ou os códigos das causais.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada: 



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar a inserção/mudança da causal contábil. |
| Cancelar | Botão para cancelar a causal contábil. |






