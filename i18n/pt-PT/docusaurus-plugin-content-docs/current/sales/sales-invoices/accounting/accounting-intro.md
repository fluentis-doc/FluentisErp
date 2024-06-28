---
title: Contabilização
sidebar_position: 2
---

A máscara apresenta na parte superior os filtros de pesquisa para individuar a lista das faturas a contabilizar presentes no sistema. 

Uma fatura, para ser contabilizada, precisa satisfazer uma série de condições: no seu cabeçalho precisa ter estabelecido o flag 'Imprimida'; o tipo fatura tem de conter a causal geral para a contabilização.

Na base da máscara são presentes alguns parâmetros de gestão da contabilização:

**Data registração igual a data documento**: este flag impõe a contabilização de cada fatura na própria data de emissão. Se o flag é estabelecido, se ativa o campo sucessivo ao interno da qual é possível estabelecer uma data fixa de registração.

**Utilizar o câmbio da tabela câmbios**: com este flag se impõe ao sistema de verificar a tabela câmbios para utilizar aquele presente na data registração/fatura (ou o último inserido em precedência). Se o flag não está estabelecido vai ser, ao contrário, utilizado o câmbio já presente no cabeçalho da fatura;

**Atualizar o câmbio no documento**: o campo é ativo só se o precedente flag foi estabelecido. O significado é aquele de atualizar também o câmbio presente no cabeçalho da fatura, sobrescrevendo aquele presente;

**Comp. imposto = data documento**: o flag impõe que a competência imposto dos movimentos seja igual a data fatura. No caso que se deseja aproveitar a possibilidade de faturar até o 15 do mês sucessivo na data de expedição (faturação diferida), o flag vai ser tirado para que a competência imposta seja retomado pela data de início transporte na nota de entrega de origem, assim como previso pela normativa Imposto;

**Contabilização industrial**: o campo é estabelecido para gerir contextualmente também a contabilização industrial. O campo da causal contábil que se habilita não é obrigatória, por que associado ao tipo fatura e codificada também a causal industrial a utilizar.

O procedimento de 'Contabilização faturas' é constituído no seguinte modo:

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Procurar fatura | Botão para procurar as faturas; são propostas todas as faturas imprimidas e não contabilizadas. |
| Contabilização faturas | Executa a contabilização das faturas selecionadas, de acordo com as impostações definidas. |






