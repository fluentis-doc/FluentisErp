---
title: Registros Imposto
sidebar_position: 9
---

A imprensa dos Registros Imposto tem de ser efetuada singularmente para cada registro: não é permitida a imprensa compressiva de todos os registros do período.

**Período Imposto**: é o primeiro campo que se encontra. Na abertura da máscara esse pode ser o mês precedente ao atual no caso de período mensal ou o trimestral se a periodicidade da liquidação estabelecida nos parâmetros de contabilidade for trimestral;

**Ano de referência**: é o segundo campo que se encontra;

**Registro Imposto a imprimir**: esse campo não é obrigatório só se o usuário pede a imprensa do registro resumo;

**Divisão**: não é normalmente a utilizar;

**Registro Imposto**: é impresso para a sociedade, realmente é consentida a impostação desse filtro no caso de imprensa provisória.

Os campos sucessivos visualizam qual é o último número da página imprimida para o registro estabelecido: esse dado é retomado pela tabela Registros Imposto.

O flag **Visualizar titular** já foi estabelecido de default: tirava-se quando precisava fazer autenticar os módulos carimbados onde imprimir os registros, obrigação que não é mais prevista. Com este flag se reporta o nome do registro Imposto, da sociedade e o número/ano das páginas.

O flag** Visualizar tipo documento** vai fazer acrescentar, nas referências dos documentos, também o tipo do documento: pode servir se as faturas de venda tenham mais numerações que estão no mesmo registro Imposto.

O título do registro é retomado pelo nome do registro Imposto e vai ser aquele reportado na imprensa com a opção 'Visualizar título'.

Apertando na opção 'Definitiva' o procedimento vai modificar o período de referência para faze-lo corresponder com aquele sucessivo ao último imprimido em definitivo: vão ser também desabilitados o filtro para a divisão e o número de cópias a imprimir. A execução da pré-visualização de imprensa em definitivo não vai bloquear o período e atualizar os contadores: só a execução do processo de imprensa física vai operar o bloqueio do período/registro na contabilidade e atualizar o contados das páginas da tabela Registros Imposto (e não é relevante que o processo de imprensa seja a bom fim, poderia ser também uma imprensa no arquivo). Executando a imprensa ou a pré-visualização, o aplicativo vai verificar se há buracos aonde se faz o protocolo e se a ordem cronológica foi respeitada, bloqueando a imprensa definitiva, só se para o registro Imposto não foi desabilitado o flag de controle na tabela. A imprensa definitiva NÃO é necessária para proceder com a imprensa da liquidação Imposto periódico.

A imprensa do registro resumo executa o relatório CA_RegistroRiep.rpt: esse tipo de relatório vai agrupar os totais das alíquotas registro por registro, com um resumo final de todas as compras e de todas as vendas.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Pré-visualização | Botão para executar a pré-visualização de imprensa do registro Imposto. |
| Imprimir | Botão para executar a imprensa física do registro Imposto. |






