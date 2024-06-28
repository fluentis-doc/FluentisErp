---
title: Exportações
sidebar_position: 2
---

A partir desta máscara se executam as exportações dos dados para o DocFinance, com três diferentes opções.

**Exportar registro**: a ativação deste flag vai impor ao sistema de criar o arquivo de alinhamento do plano das contas e dos registros. Uma vez estabelecido vão se ativar os campos associados sucessivos, aonde estabelecer o nome do arquivo e o percurso compartilhado de criação (ambos os dados vão ser memorizados para ser repropostos na criação sucessiva). O primeiro campo 'Data última exportação' permite definir a data de referência para a exportação só dos dados modificados/acrescentados no plano das contas: é permitido cancelar essa data para criar um arquivo completo de todas as impostações do plano das contas/registro (isso tem um impacto significativo nos tempos necessários no alinhamento entre os dois sistemas);

**Criação automática fluxo de caixa**: com este flag o programa vai criar um novo fluxo de caixa no módulo homônimo, antes de proceder com a eventual exportação dos dados do ponto sucessivo. A criação vai acontecer com os parâmetros de default do procedimento 'Criação automática fluxo de caixa': se envia a documentação específica para outros detalhes;

**Exportar o fluxo de caixa**: com este flag o sistema vai criar o arquivo dos fluxos financeiros, seja como partidas contábeis que como previsionais. Quando o flag é estabelecido, se ativa o sucessivo flag 'Derrogação dos registros/tipos pagamento' e os campos com os nomes e o percurso compartilhado de criação do arquivo (ambos memorizados). Em detalhe, se foi estabelecido o flag 'Derrogação dos registros/tipos pagamento' ou não, a lógica de atribuição da derrogação troca: se não foi estabelecido, a derrogação para os fornecedores vai ser relevada pelo tipo de pagamento e para os clientes do registro; se foi estabelecido, a derrogação vai derivar do registro cliente/fornecedor e se não foi estabelecido, vai ser calculado com códigos fixos ('01' para o recibo bancário, ou '01' - '02' - '03' - '04' se a diferença entre a data de vencimento e a data atual restitui uma data vencida, uma diferença inferior aos 30 dias, dos 30 aos 90, além dos 90).

Na base da máscara, define-se o usuário que vai executar a criação dos arquivos. É necessário que esse tenha acesso nas fichas compartilhadas estabelecidas para a criação dos arquivos.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Com este botão é possível salvar as impostações a produzir de default na máscara. |
| Exportação | Executa a criação do/s arquivo/s assim como estabelecidos na máscara. |






