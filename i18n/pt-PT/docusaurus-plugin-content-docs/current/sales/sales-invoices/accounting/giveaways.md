---
title: Brindes
sidebar_position: 3
---

No tab Brindes se estabelecem alguns elementos gerais da contabilizaçao faturas.

**Contabilização brindes**: com este flag se ativa a gestão da contabilização brindes, ativando os campos sucessivos associados. Se a fatura que se está contabilizando apresenta um brinde mas o parâmetro de gestão não foi estabelecido, o sistema vai perdir a confirmação para o usuário com um aviso de falta da impostação. Nesta situação vai ser registrada a fatura normalmente sem alguma gestão da linha brinde, que vai ser gerida manualmente na contabilidade. Se foi ativada a gestão brindes sem inserir alguma subconta nos campos sucessivos, o sistema vai acrescentar na fila, nos normais movimentos de contabilização, as necessárias linhas de estorno da receita utilizando a mesma subconta estabelecida para o artigo vendas.

Se, ao contrário, foi estabelecido o flag 'Substituir a conta do artigo' vai-se ativar o campo onde estabelecer a conta de (custo por) estorno contas, que vai ser utilizado no lugar da subconta do artigo nessas linhas acrescentadas. O campo da 'Conta estorno imposto', ao contrário, entra em causa se o artigo brinde na fatura não tenha o flag 'Recurso imposto', com a qual se indica se o imposto aplicado no artigo brinde é pago (com flag) o não (sem flag) pelo cliente. Esta quantia vai ser registrada e estornada só se foi inserida a conta de estorno imposto, sem esse, a operação vai ser gerida manualmente na contabilidade (também nesse campo tem a mensagem de confirmação/aviso ao usuário da falta da impostação).

**Criar arquivo XML**: com este flag o programa vai criar um traçado XML do resultado da contabilização, na ficha estabelecida no campo sucessivo;

**Subconta desconto financeiro**: este campo é utilizado para registrar o desconto financeiro associado ao prazo da fatura.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar parâmetros | Permite salvar os parâmetros inseridos. |






