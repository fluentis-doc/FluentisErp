---
title: Geral
sidebar_position: 2
---

O flag **Selecionar os dados para a divisão**: se estabelecido, o campo sucessivo de divisão torna-se um filtro com a qual retirar da contabilidade só os dados da divisão estabelecida.

**Excluir a causal**: se estiver retirando os dados de um inteiro ano contábil já fechado, permite excluir as registrações de encerramento das contas e assim obter os dados de balanço do exercício.

**A**- Seção **Retomada dos valores patrimoniais **

O flag de **Retomada dos valores de natural patrimonial**, presente de default, habilita a seção abaixo de filtro. Com essa opção, o ERP vai inserir no encerramento infra-anual também os saldos das subcontas associadas com os tipos conta que apresentam o flag** Patrimonial ativo** ou **Patrimonial passivo**. 

A seção dos filtros para a data de registração e data de competência abaixo permite definir as gamas de datas que vão ser utilizadas para recuperar os dados patrimoniais das registrações do período estabelecido (a referência é aos homônimos campos de cabeçalho das registrações, não as gamas de competências econômicas inseridas nas linhas de contabilidade, ver o arquivoCH_1.4_Raffronto_Periodo_Budget.doc). Em particular, se ainda não foi registrada na contabilidade o encerramento e a reabertura das contas, a data de início pode ser retrodatada com a data de última abertura das contas relevadas na contabilidade, para ter uma dado patrimonial correto. Precisa considerar que, vai ter uma diferença entre o saldo patrimonial e o saldo econômico do exercício em curso: essa diferença, visualizada com o desequilíbrio da registração de encerramento infra-anual, vai corresponder com o útil/perda do exercício precedente ainda não relevado no encerramento/reabertura das contas de contabilidade geral. 

Se o encerramento não prevê a recuperação patrimonial, a registração de encerramento infra-anual (só da seção econômica) vai, de novo, desequilibrar para o útil/perda do período.

**B** - Seção **Retomada dos valores econômicos**

O flag de **Retomada dos valores de natural econômica**, presente de default, habilita a seção abaixo de filtro. Com essa opção, o ERP vai inserir no encerramento infra-anual também os saldos das subcontas associadas aos tipos conta que apresentam o flag** Econômico custos** ou **Econômico receitas**. 

A seção dos filtros para a data de registração, competência e documentos abaixo permite definir as gamas de datas que vão ser utilizadas para recuperar os dados patrimoniais das registrações do período estabelecido (a referência é aos homônimos campos de cabeçalho das registrações, não as gamas de competências econômicas inseridas nas linhas de contabilidade, ver o arquivo CH_1.4_Raffronto_Periodo_Budget.doc). Em particular, a gama de datas documento, não proposto de default, normalmente não é estabelecido: não todas as registrações contábeis, portanto, apresentam as datas documento no cabeçalho (normalmente só as registrações de faturas de compra/venda).

Se o encerramento não prevê a recuperação econômica, a registração de encerramento infra-anual (só da seção patrimonial) vai, de novo, desequilibrar para o útil/perda do período.

**C **- Seção **Dados encerramento contas**

A seção apresenta os elementos identificativos desta simulação de balanço;

**Causal encerramento contas**: é a causal a utilizar para criar a registração de recuperação dos saldos. Tal causal tem de ter os flag CdC/CdP/encomendas de modo que esses elementos sejam considerados no mesmo encerramento infra-anual;

**Data encerramento**: é a data de criação desta simulação, que vai ser utilizada como data da registração extra contábil do mesmo encerramento e para as outras registrações. Não em nenhuma valência particular;

**Número encerramento**: é o número progressivo de encerramento, proposto automaticamente pelo sistema;

**Descrição encerramento**: é a descrição que vai aparecer em todas as máscaras do módulo Encerramentos infra-anuais, naquele do Balanço e do Orçamento. Se aconselha de descrever em maneira clara as gamas de datas estabelecidas em modo de entender o período simulado, por que os filtros estabelecidos na máscara não vão ser mais visíveis nas fases sucessivas;

**Parâmetros de contabilidade relevados pelo exercício contábil do ...**: se trata de associar o ano contábil de referência, para retomar dos parâmetros de contabilidade as subcontas e as impostações padrão (o encerramento poderia envolver mais exercícios, precisa ter um ano 'prioritário').

**D** - Seção **Comparação período orçamento**

A seção é de fundamental importância para a gama de datas de competência econômica: vamos ver no detalhe o significado dos vários campos presentes.

**Período orçamento**: neste campo se estabelece o tipo de periodicidade pela qual selecionar o detalhe do período de competência.

**Detalhe período de competência**: os valores evidenciados dependem de quanto definido no campo precedente e permitem valorizar a sucessiva gama de datas de competência. Se ambas estão estabelecidas, o encerramento infra-anual que se está criando vai ser considerado pelo software como um consuntivo a poder utilizar (para todos os orçamentos que apresentam a mesma gama de datas de competência) na análise de variações do módulo orçamento, após a 'Retomada dos dados' (verificar a documentação do módulo Orçamento);

**Competência econômico do/ao**: esta gama de datas é obrigatória para poder proceder com a criação do encerramento infra-anual. Indica o período de competência econômica que interessa: vai ser, portanto, pego como referência para o cálculo das escrituras de retificação/integração e para o cálculo da retomada das amortizações do período. Para exemplificar, se foram retomadas as registrações do primeiro semestre do exercício X e foi inserido o mesmo semestre com gama de datas de competência econômico, com os procedimentos de retificação o programa vai verificar se estão presentes as linhas de contabilidade com gamas de competência fora desse semestre para relevar o diferimento relativo.

**E** - Seção **Opções encerramento**

**Agrupamento subcontas**: não estabelecer esse flag se não são utilizados no momento (o flag Balanço, assim como o relatório do Balanço infra-anual), permite valorizar diretamente o saldo a nível das contas excluindo os registros, sem a necessidade de algum agrupamento na fase de registração de encerramento;

**Encerramento por encomenda**: com esse flag, o programa vai criar uma registração de encerramento infra-anual para cada encomenda de venda que foi valorizada nas registrações contábeis do período de filtro estabelecido. Se lembra que a causal de encerramento infra-anual tem de pretender a gestão das encomendas para gerir os dados;

**Considerar as registrações provisórias**: com esse flag, a retomada dos dados da contabilidade vai considerar também as registrações contábeis com o estado 'Provisórias';

**Valores calculados**: essa seção propõe os totais patrimoniais/econômicos calculados pela primeira registração de encerramento efetuada. (A referência é no flag **Encerramento por encomenda** que vai criar N registrações de encerramento, portanto essa seção vai visualizar só os dados da primeira encomenda individuada no período).






