---
title: Alíquota imposto
sidebar_position: 2
---

A tabela em objeto é comum em todas as sociedades presentes no banco de dados e apresenta a lista das alíquotas imposto aplicáveis em todo o gestional.

Refere-se a uma tabela precarregada pela qual o usuário habilitado pode operar para modificar e/ou acrescentar quanto necessário para a atividade da sociedade.

A máscara se compõe de 3 seções: aquela superior com a lista das alíquotas imposto, a seção central consente definir para cada alíquota imposta mais subcontas compras/vendas a utilizar para cada 'Tipo contabilização Imposto' atribuído ao cliente/fornecedor (ou previsto de default nos parâmetros de contabilidade; o uso depende também das impostações específicas das causais de contabilidade geral) e abaixo um detalhe de notas codificadas específicas da alíquota, não utilizadas em nenhuma opção padrão do gestional.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Código | Código numérico de identificação da alíquota. |
| Descrição | Descrição que vai ser reportada em todas as imprensas fiscais padrão do gestional. |
| Porcentagem | Define a porcentagem imposto a aplicar. |
| Cat. imposto | Refere-se as tipologias de imposto fixos previstas pelo gestional. A tipologia é muito importante, por exemplo, para a totalização dos vários movimentos nas listas clientes/fornecedores assim como na comunicação Imposto anual. |
| Porc. indedutibilidade | Define a porcentagem de indedutibilidade a aplicar no imposto. |
| Plafond | O flag define quais alíquotas são gridas, em aumento ou diminuição se é em venda ou de compra, no cálculo do Plafond imposto. |
| Na decl. imposto | O flag estabelece quais alíquotas devem ser geridas na declaração/comunicação imposto anual. |
| Não Intra | O flag estabelece as alíquotas que, mesmo se utilizadas nos documentos (nos módulos faturas de compras/vendas) ou nas registrações de tipo intra-cee, não vão ser consideradas tais. Se lê na criação automática dos resumos Intrastat e no cálculo da comunicação imposto anual. |
| Rep. San Marino | O flag determina quais são as alíquotas utilizadas nas operações com San Marino. |
| % imposto Agr. Detr. | O campo estabelece a porcentagem de indedutibilidade da alíquota no caso de movimento no regime agrícola. |
| Permitir o imposto no LJ | O flag impõe a registração de linhas imposto com quantia 0 seja de débito que de crédito no livro jornal. A causal contábil de utilização, tem de prever o mesmo tipo de autorização das linhas a 0. |
| Importar oro prata | O flag permite estabelecer quais alíquotas vão ser resumidas nos campos previstos na camunicação imposto anual. |
| Importar sucatas | O flag permite estabelecer quais alíquotas vão ser resumidas nos campos previstos na comunicação imposto anual. |
| Não no cl./forn. | O flag permite excluir da lista clientes/fornecedores os movimentos imposto associados com esta alíquota. |

A seção central permite definir para cada alíquota imposto mais subcontas compras/vendas a utilizar para cada 'Tipo contabilização imposto' atribuído ao cliente/fornecedor (ou previsto de default nos parâmetros de contabilidade; o uso depende também das impostações específicas das causais de contabilidade geral).



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Tipo contab. imposto | Código alfanumérico do tipo de contabilização imposto. |
| Descr. tipo contab. | Descrição do tipo de contabilização imposto. |
| Conta compras | A conta de compra a propor para este tipo de contabilização imposto. |
| Subconta compras | A subconta de compra a propor para este tipo de contabilização imposto. |
| Descrição | Descrição da subconta de compra a propor para este tipo de contabilização imposto. |
| Conta vendas | A conta de venda a propor para este tipo de contabilização imposto. |
| Subconta vendas | A subconta de venda a propor para este tipo de contabilização imposto. |
| Descrição | Descrição da subconta de venda a propor para este tipo de contabilização imposto. |

A terceira seção permite definir um detalhe de notas codificadas específicas da alíquota, não utilizadas em nenhuma opção padrão do gestional.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Código | Código. |
| Notas | Campo notas. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar | Botão para efetuar uma pesquisa de uma alíquota imposto através do campo descrição. |
| Inserção | Botão para inserir uma nova alíquota imposto. |
| Cancelamento | Botão para cancelar uma alíquota imposta se essa já não foi utilizada. |
| Pré-visualização de imprensa | Botão para efetuar a pré-visualização de imprensa das alíquotas imposto. |
| Imprimir | Botão para efetuar a imprensa das alíquotas imposto. |






