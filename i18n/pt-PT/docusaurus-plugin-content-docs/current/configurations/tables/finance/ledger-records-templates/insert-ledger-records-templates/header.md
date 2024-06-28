---
title: Inserção
sidebar_position: 1
---

As causais contábeis são compostas por um cabeçalho e por três seções chamadas respectivamente detalhe atributos, detalhe registração e parâmetros.

O cabeçalho comprende os seguintes campos:

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Causal  | código alfanumérico de 5 letras que tem de ser unívocos. |
| Descrição causal | rapresenta a descrição da causal. |
| Tipo movimento | o tipo de movimento da registração. Refere-se a uma tabela fixa interna, não disponível na modifica ao usuário, que divide as causais não imposto das várias tipologias de movimento Imposto. |
| Tipo documento | a tabela é precarregada mas pode ser modificada/integrada pelo usuário. Nesta tabela, em particular, são de interesse as linhas que preveem os flag ‘Crédito' e ‘Nota de variação': para o Crédito, o procedimento controla que a seção Imposto é valorizada com quantias negativas (um controle de coerência de sinais, além disso, se efetua na contabilização das notas de crédito da área de venda/compra: significa que não podem ser presentes linhas com quantias positivas e contemporaneamente outras para uma outra subconta com quantis negativas); para a Nota de variação o procedimento vai ativar, sempre na seção imposto da registração, um flag de identificação das linhas relativas as notas de variação e uma data de referência. |
| Registro adiantamentos e pagamentos | identifica as causais a reportar no registro adiantamentos/pagamentos da contabilidade simplificada dos profissionais. |
| Profissionais | identifica uma causal para a contabilidade dos profissionais. |
| Data fim validade | é possível bloquear a utilização de uma causal contábil a partir desta data. Não vai ser visível na lista das causais da data sucessiva. |






