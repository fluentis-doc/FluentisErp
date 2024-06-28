---
title: Escrituras de integração
sidebar_position: 14
---

Estamos dentro do módulo Encerramentos infra-anuais e vamos selecionar o procedimento 'Escrituras de integração. A máscara permite gerir separadamente as operações de integração que podem executar contextualmente na criação de um novo encerramento infra-anual.

Para gerir o procedimento é suficiente estabelecer o encerramento de referência, a data de início competência de referência, o tipo de calendário a utilizar (se aconselha de deixar o calendário solar) e a causal a utilizar (que deve ter o flag CdC/CdL para gerir a integração dos centros de custo/lucro).

Com esse procedimento o sistema vai verificar, a partir da 'Data de início competência para as escrituras de integração', as linhas de custo/receita presentes na contabilidade e não inseridas no encerramento (quer dizer registrações fora da gama de datas registração/competência estabelecidas no momento da retomada da contabilidade), para criar os acréscimos dos dias dentro da gama de datas de competência econômica. As subcontas de acréscimos a utilizar vão ser aquelas inseridas no plano de contas em correspondência de cada subconta de custo/receita ou a subconta geral inserida nos parâmetros de contabilidade do ano do mesmo encerramento infra-anual. É presente um botão de restauração/cancelamento dos movimentos já relevados por esse procedimento.

Merece uma particular atenção na data de início a estabelecer, por que normalmente essa data vai ter que ser estabelecida igual a data da última abertura das contas relevadas na contabilidade. Exemplificamos: se estamos criando o encerramento do primeiro trimestre do exercício, a gama de datas para a seção econômica vai ser tipicamente 01/01/ano - 31/03/ano e se é presente a reabertura das contas do exercício precedente, então, dentro dessa gama vai ter diretamente a transferência a custo/receita dos acréscimos relevados no balanço 'ano-1' e por isso a data de início para as integrações vai ter que ser estabelecida como 01/01/ano em modo que o ERP controle se depois do 31/03 há linhas com competência no trimestre precedente. Se a reabertura não está presente, vai precisar estabelecer a data início como 01/01ano-1 para que o ERP controle também se todo o exercício precedente tenha custos/receitas que caem no trimestre inicial desse exercício. Se o usuário já tivesse relevado manualmente na contabilidade ao 31/12/ano-1 o acréscimo do período, mas não tinha o encerramento/reabertura, a escritura de integração poderia causar uma dupla relevação do acréscimo de competência.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Efetuar as escrituras | Executa a relevação extra-contábil das escrituras de integração para o encerramento selecionado. |
| Cancelar as escrituras | Anula as registrações extra-contábeis de integração para o encerramento selecionado. |






