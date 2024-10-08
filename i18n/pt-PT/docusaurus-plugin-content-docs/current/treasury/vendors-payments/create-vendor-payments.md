---
title: Criar
sidebar_position: 6
---

A partir dessa máscara se procede com a criação de uma nova lista de pagamento: a máscara é a mesma também para a abertura em mudança/visualização de uma lista já salva.

Na primeira caixa de combinação se seleciona o tipo de pagamento de referência da lista. Nos campos sucessivos o procedimento propõe o ano atual do sistema e a numeração progressiva da lista: como data de emissão é proposta a data atual.

**Banco**: dentro deste campo se insere normalmente o código da subconta do registro banco pela qual emitir a lista: a obrigatoriedade da ligação com um registro bancos é associado com a necessidade de ter as referências CIN/ABI/CAB/conta corrente necessários para o envio telemático do traçado das transferências bancárias Itália. Pelo ponto de vista da contabilização dos pagamentos, ao contrario, não tem nenhuma necessidade particular: essa subconta poderia ser uma qualquer subconta do plano das contas;

**Conta corrente**: é compilada automaticamente em relação o registro banco associado com a subconta inserida: eventualmente pode ser inserida e/ou modificada manualmente;

**Notas iniciais**: é um campo livre de notas do pagamento, não utilizado no padrão;

**Notas finais**: é utilizado na contabilidade pagamentos para valorizar a descrição de detalhe do movimento contábil da subconta banco.

O flag **Impor essa data moeda beneficiário** permite definir, no traçado telemático, qual é a data moeda a atribuir ao beneficiário do pagamento: se a data não foi especificada vai ser utilizada a data atual. Se o flag não foi estabelecido a data moeda vai ser igual a data vencimento.

Na direita estão presentes dois flag de estado da lista: o flag Imprimido não é gerido automaticamente pelo programa, ao contrário, o flag Arquivo emitido é atualizado em relação a criação do arquivo telemático. É possível procurar o arquivo mesmo sem retornar esse flag na lista.

A gestão dos detalhes dos pagamentos se efetua normalmente através do botão de 'Pagamentos das partidas': se trata de selecionar portanto a lista das partidas contábeis a fechar com o pagamento na lista. Nessa máscara de seleção das partidas, entre os vários filtros e flag disponíveis, é util avisar que: não se aconselha o utilizo do flag de visualização das partidas beneficiários, isso por que a gestão do pagamento tem de ser efetuada pelo módulo beneficiários para poder depois obter a certificação das retenções; o flag 'Impor banco de apoio pelo registro do fornecedor' significa ir a utilizar como banco beneficiário do pagamento o banco de default inserido no registro fornecedor na seção pagamentos, grelha dos bancos de apoio, isso independentemente do banco de apoio associado com a partida na sua registração contábil de criação. Esse segundo flag pode ser predefinido de default nos parâmetros do módulo.

Permite a mudança dos valores de pagamento inserido na grelha, com o objetivo de obter por exemplo pagamentos parciais, assim como o acréscimo de linhas pagamento manual: nesse segundo caso refere-se a uma forçatura que pode ir a criar uma diferença entre o saldo contábil da subconta inserida e o saldo do partitário, por que o procedimento de contabilização pagamentos não vai a gerir uma eventual abertura partida de sinal contrário de balançamento das seções se não foi estabelecido o flag 'Abertura partidas' na causal. O campo Bonificação permite relevar só Bonificações ativas.

Um último detalhe na gestão da grelha, refere-se ao campo **Notas**: esse é compilado automaticamente em relação as partidas pagadas em relação as referencias do documento que está fechado. Essas notas vão ser reportadas nas linhas de pagamento inseridas na contabilidade geral, em correspondência da subconta relativa.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Novo pagamento | Botão para inserir, manualmente, uma linha de pagamento fornecedor. |
| Salvar | Botão para salvar o cabeçalho do novo pagamento fornecedor, ativável depois de ter inserido, o tipo pagamento e a subconta do banco. |
| Cancelar os pagamentos selecionados | Botão para cancelar os pagamentos fornecedores criados manualmente ou pela criação pagamento das partidas. |
| Criar um pagamento pelas partidas | Botão, ativável depois de ter salvado o cabeçalho, para criar um pagamento, comprando os dados pelo arquivo partidas. |
| Numeração da |  |
|  [Documentos](/docs/guide/common/operations-with-data/document-manager)  | Botão para a ligação da gestão documental. |






