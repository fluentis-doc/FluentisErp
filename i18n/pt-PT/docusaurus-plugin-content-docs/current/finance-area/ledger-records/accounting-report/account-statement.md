---
title: Extrato conto
sidebar_position: 3
---

Se trata do relatório base para obter o detalhe dos movimentos contábeis de cada subconta, qualquer for o tipo (ativo, passivo, custo, receita, registros): com o relatório padrão para cada subconta vai ter uma nova folha de imprensa.

Elementos característicos do relatório:

- é possível, através do filtro agente, pedir o extrato conto de todos os clientes cujo nos registros foi inserido esse agente;

- é possível pedir os dados através de 'Visualizar quantias na moeda' (formado A4 horizontal), ou sem esse flag, ver só os dados débito/crédito na moeda da sociedade (formado A4 vertical), ou estabelecer 'Visualizar contrapartidas' com o número de movimentos de contrapartida a mostrar (formado A4 horizontal), ou enfim os movimentos expressos numa específica moeda (formado A4 horizontal). Essas impostações são memorizadas no nível de cada usuário para faze-la visualizar na próxima reabertura da máscara;

- é possível ordenar as registrações por data registração ou por data competência. Essa impostação vai ser memorizada no nível da cada usuário para poder propor na próxima reabertura da máscara. A opção torna-se de particular interesse se o encerramento/reabertura das contas foi efetuada com data registração e competência diferentes, com o objetivo de ter um saldo progressivo significativo;

- é muito importante esclarecer a gestão dos filtros por data em relação o campo 'Data última abertura contas'. A diferença da 'Visualização contas', na qual estão sempre visíveis todos os movimentos de cada subconta, o relatório é um processo de imprensa pela qual é importante a numerosidade dos record a visualizar ao fim das prestações da máquina. Neste senso o aplicativo vai propor para a imprensa os movimentos considerando o saldo inicial a partia da data de última abertura das contas, que é proposta como a data mais alta que é antecedente aos filtros iniciais do relatório. Exemplificando, se o usuário filtra os movimentos do 01/09/2007 ao 31/12/2007 (seja como data reg. que comp.), o procedimento propõe a última abertura das contas com data 01/01/2007, o resultado vai ser: saldo inicial calculado do 01/01/2007 ao 31/08/2007, detalhe dos movimentos associados com as registrações com data dentro da gama 01/09-31/12/2007 (portanto, no relatório vão ser inseridas só as subcontas que tem ao menos um movimento entre a data última abertura contas e a data final de filtro). Se o usuário, invés, cancela a data última abertura contas o resultado vai ser igual aquele presente na visualização das contas.

Último detalhe que merece uma anotação específica é o arquivo padrão nominado CA_EstrattoConto(sint).rpt que se pode associar com o relatório em objeto: se trata de um relatório sintético que apresenta a lista de todas as subcontas sem nenhum salto de página. Se aconselha a utilização desse relatório para imprimir os livros-razões a associar as imprensas de encerramento do exercício contábil.

Os relatórios padrão CA_EstrattoConto(Controp).rpt e CA_EstrattoConto(NoValuta).rpt não são mais utilizados, mas foram integrados através de alguns parâmetros no mesmo relatório padrão CA_EstrattoConto.rpt.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Pré-visualização | Botão para executar a pré-visualização de imprensa do extrato conto. |
| Imprimir | Botão para executar a imprensa física do documento extrato conto. |






