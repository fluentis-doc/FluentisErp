---
title: Tab Gestão
sidebar_position: 2
---

A operação do procedimento prevê de indicar inicialmente para qual exercício contábil se quer proceder com o cálculo, depois disso, se indica a data de registração/competência a atribuir as registrações a criar assim como as causais a utilizar para a retificação a e integração. A opção de cada registração vai ou não acumular numa única registração todas as retificações e numa outra todas as integrações.

Uma vez salvas essas impostações se vai ativar o botão de cálculo que vai a popular a seção abaixo com a lista de ajustamentos propostos: dentro desses vai ser indicada a tipologia de operação, as referências da registração de origem, o número de dias da retificação e depois, editáveis, a quantia e a subconta de relevação. Se as causais estabelecidas preveem a gestão a CdC/CdL e o movimento de origem tem os relativos dados a retificar/integrar, na seção abaixo vão estar presentes também os detalhes dos cálculos relativos.

A fase sucessiva vai ser aquela de confirmar, linha por linha, que a quantia calculada é correta e completa através da imposição do flag 'controlado', operação que vai ativar de consequência a mudança e os relativos flag de controle também da seção abaixo relativa aos CdC/CdL. Todas as linhas com o estado 'controlado' vão ser objeto da relevação na contabilidade que vai ser executada apertando o botão de contabilização. O usuário pode proceder a criar mais contabilizações cada vez que são definidos os detalhes, assim como proceder a recalcular a lista para verificar que não foram acrescentadas outras operações (tipicamente de integração de registração do novo exercício com competência antecedente) ou criar ajustamentos novos para esses. Está presente também uma ficha de restauração da situação precedente.

Se foram efetuadas mudanças as registrações na contabilidade poderia ser útil utilizar o botão 'Verificar cálculo': este botão vai efetuar um recálculo linha por linha, mostrando eventuais diferenças respeito aquilo já proposto na grelha, com um botão para alienar as diferenças ou não, que vai também cancelar linhas de retificação/integração associadas com os movimentos contábeis não mais existentes (não vai ser possível contabilizar se presentes linhas com referências a movimentos não existentes, vai precisar passar para essa máscara a cancelá-los).

Um última anotação, muito importante, é reportada se os ajustamentos já foram contabilizados: atualmente não existe nenhum bloqueio na mudança da parte do usuário do movimento de origem que fez a retifica, o único bloqueio é o cancelamento da registração que não foi permitida. Portanto, precisa prestar a máxima atenção ao entrar em mudança de registrações que foram envolvidas nas operações de ajustamento de fim de ano.

Último detalhe a lembrar é relativo ao procedimento de Encerramento automática contas: é presente uma opção de transferência automática das operações de ajustamento relativo as registrações re reabertura das contas. Com esta opção o aplicativo vai proceder a relevar, na data de reabertura, a variação das retificações enquanto vai operar a transferência das integrações na data da registração de origem do mesmo ajustamento.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar o cabeçalho, ativável depois de ter completado os mesmos dados. |
| Calcular | Botão para o cálculo que vai popular a seção abaixo com a lista dos ajustamentos propostos. |
| Verificar o cálculo de ajustamento | Botão que vai efetuar um recálculo linha por linha, mostrando eventuais diferenças em relação ao já proposto na linha. |
| Contabilizar | Botão para a contabilização das linhas, com estabelecido o flag de controlado. |






