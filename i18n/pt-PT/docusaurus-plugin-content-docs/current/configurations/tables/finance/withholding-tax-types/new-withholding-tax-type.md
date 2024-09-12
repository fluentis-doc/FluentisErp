---
title: Novo
sidebar_position: 2
---

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar a inserção do tipo retenção. |
| Novo | Botão para a inserção de um novo tipo de retenção. |
| Cancelar | Botão para cancelar o tipo de retenção pela qual é colocado. |

Os campos da Form são: 

**Código retenção**: Código alfanumérico de 5 caracteres de identificação da retenção: normalmente se chama o código tributo

**Descrição retenção**: Descrição do código retenção.

**Quadro no mod. 770**: O campo 'Quando no modelo 770' é um campo obrigatório: o modelo 770, de qualquer modo, não é gerido

**Código tributo**: O código tributo chama a tabela dos códitos tributo: esta é precompilada no momento da instalação e contém a lista completa dos códigos tributo previstos para o modelo F24.

**Causal de contabilidade**: O campo causal prevê a impostação obrigatória para registrar a remuneração na contabilidade: se refere normalmente a uma causal Imposto, tipo uma normal compra Itália. É de qualquer modo prevista também a valorização de causais não Imposto para gerir os casos de gestão retenções aos colaboradores casuais não titulares da partida Imposto.

**Código de pag. no mod. 770**: Código de pagamento no 770 é um campo não obrigatório e não utilizado.

**Tipos partidas**: A escolhe é entre as partidas líquidas e partidas brutas. A distinção é relativa a criação dos prazos no líquido ou no bruto de todos os tributos pagos pelo beneficiário: a impostação padrão prevê as partidas líquidas, com o objetivo de ter um plano de trabalho com a efetiva quantia a pagar ao profissional, se a causal contábil de referência não vai ter que ter o bloqueio na registração de movimentos desequilibrados com as partidas.

**Grupos partidas**: Flag para ativar a gestão dos grupos partidas.

**Tipo retenção**: O tipo de retenção prevê a opção a título de adiantamento ou a título de taxa: a distinção não tem atualmente nenhuma relevância na operação do módulo.

**Débito Enasarco pago pelo agente**: O campo é dedicado a impostação da subconta de débito pela qual vai ser relevada a quantia paga pelo agente. Tal subconta vai ser utilizada na contabilização pagamentos ou na contabilização Enasarco se foi estabelecida a gestão Enasarco paga pela empresa ou não. O campo é obrigatório se foi estabelecido o campo sucessivo da categoria agente.

**Categoria agente**: A categoria agente é a tipologia de agente pela qual individuar as porcentagens de contribuição no instituto Enasarco. Se a categoria foi estabelecida vai precisar inserir também a precedente subconta de débito verso o Enasarco. O campo é obrigatório se foi inserida a gestão do Enasarco pago pela empresa.

**Cont. Enasarco pago pela empresa**: O flag 'Contabilização Enasarco pago pela empresa' ativa a impostação das suas subcontas sucessivas e rende obrigatória a atribuição de uma categoria agente e da subconta de débito para a quota paga pelo agente. A ativação desse flag vai ativar a relevação contábil das contribuições Enasarco com o procedimento de contabilização homônima. A opção é aconselhada com o objetivo de tornar autônoma tal relevação, visto que a contribuição Enasarco se releva por competência e não por caixa como a retenção

**Custo pago pela empresa**: Subconta a atribuir a relevação contábil de custo Enasarco pago pela empresa.

**Débito pago pela empresa**: Subconta a atribuir a relevação contábil de débito Enasarco pago pela empresa.

**Débito v tesouro**: A subconta de débito v tesouro memoriza a subconta de débito a utilizar para relevar o débito relativo a retenção de adiantamento. Essa subconta é utilizada no procedimento de contabilização dos pagamentos (com a contabilização dos pagamentos se releva o débito da retenção a pagar, que é um tributo que segue a lógica de caixa): quando o pagamento se refere as remunerações, precisa integrar a registração com os movimentos relativos a retenção e gerir as tabelas do módulo para garantir a possibilidade de obter a imprensa das certificações retenções

**Causal de contabilidade industrial**: O flag da causal de contabilidade industrial ativa a possibilidade de gerir na remuneração beneficiários os dados de contabilidade industrial. Normalmente essa opção não é ativada.

A seção Porcentagens contém os seguintes campos:

**% retenção**: Porcentagem de aplicação da retenção.

**% tributável**: Base da porcentagem de aplicação retenção.

**% caixa de previdência**: Porcentagem da caixa de previdência.

**% Red. forf. remuneração**: Campo não em uso.

A seção INPS não é atualmente mais necessária: permite ativar uma seção tributos ulterior dentro da remuneração beneficiários, para gerir os tributos INPS. Atualmente essas remunerações passam para o escritório pagamento e portanto não se refere mais ao módulo beneficiários.






