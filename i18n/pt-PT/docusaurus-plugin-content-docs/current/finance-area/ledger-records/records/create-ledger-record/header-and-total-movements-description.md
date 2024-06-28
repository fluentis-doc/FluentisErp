---
title: Cabeçalho e descrição movimentos totais
sidebar_position: 1
---

Vamos ver os vários campos presentes no cabeçalho da registração, na ordem de carregamento.

**Data de registração**: esta é estabelecida como data atual de sistema, mas pode ser movida para frente ou para atrás no tempo, e pode ser mudada de acordo com o cronológico dos protocolos Imposto e os eventuais períodos imprimidos em definitivo e com a presença dos parâmetros. A importância dessa data é fundamental por que não existe a necessidade de continuar com um 'Câmbio exercício': a partir da data de registração o aplicativo vai procurar o ano dos parâmetros de contabilidade de referência (identificando dentro de qual gama de datas de exercício se encontra) e daqui vai retomar as outras gamas de datas de controle (datas de competência em linha e as datas período em linha). Essa data é aquela de base da imprensa do livro jornal e dos extratos de conto contábeis. Se foi apertado o botão de criação de uma 'Nova registração' daquela em gestão é possível estabelecer os parâmetros usuário em maneira que esse campo seja proposto também naquela nova;

**Número de registração**: é um contador cotidiano das registrações; a univocidade da registração é determinada sempre pela combinação 'Data registração' + 'Número registração'. A escolha de um contador cotidiano foi efetuada para dar a máxima liberdade ao usuário de registrar em mais datas. Esse número de registração é gerido automaticamente pelo procedimento: em particular, no momento do salvamento se atribui o número definitivo correto, recuperando eventualmente um buraco de numeração na data de registração relativa. Cancelar uma registração no dia X, vai deixar um buraco na numeração dessa data: só intervindo com a inserção/mudança de uma das registrações dessa data o número recuperado. No caso de registração provisória esse número vai ir em progressão negativa a partir do número -1000, para tornar visível ao usuário que se refere uma registração desse estado: os relatórios e as pesquisa contábeis são estabelecidos para filtrar de default só nas registrações definitivas;

**Data competência**: é a data de referência para o balanço de exercício: normalmente é sempre igual a data de registração, a não ser para as escrituras de ajustamento de balanço e para os relativos encerramentos/aberturas das contas, que podem ser datados também junho como data registração mas vão ser como 31/12 - 01/01 como data de competência. Atenção: essa data NÃO pode ser utilizada para relevar as faturas a receber de fim de ano. Aconselha-se de deixá-la sempre igual a data de registração: na contabilidade tem imprensas que trabalham por data registração, outras por data competência, outras que dão liberdade ao usuário de filtrar ambas, claramente se obtém resultados diferentes de acordo com os filtros aplicados. Nos parâmetros de gestão usuário é possível estabelecer que essa data seja alinhada automaticamente com a data de registração;

**Subconta titular da registração**: esse campo é obrigatório só para as registrações Imposto, por que está associado com o registro cliente/fornecedor titular do documento registrado. Esse campo, normalmente, não é compilado no caso de registrações de pagamento/cobrança, por que normalmente na mesma registração se efetuam N pagamentos/cobranças sobre objetos diferentes e esse é utilizado como filtro de partidas abertas na ficha 'Pagamentos'. Se foi apertado o botão de criação de uma 'Nova registração', daquela em gestão, é possível estabelecer os parâmetros usuário em modo que esse campo seja proposto também naquela nova. A causal contábil, enfim, pode prever um controle de coerência entre o tipo conta inserida nesse ponto e quanto previsto na causal: a substituição é autorizada de acordo com a impostação dos parâmetros de contabilidade, seção lista contas clientes/fornecedores;

**Causal**: este campo é obrigatório: cada registração se base numa causal de referência que regula as características e o funcionamento. Esse campo não é mais modificável uma vez salvada a registração (claramente vão ser bloqueados outros campos cujo foram imprimidos em definitivo o registro Imposto ou o jornal ou foi efetuado o encerramento automático das contas): se a causal está errada precisa cancelar e inserir a registração de novo com o código correto. Se foi apertado o botão de criação de uma 'Nova registração' daquela em gestão, é possível estabelecer os parâmetros usuário em modo que esse campo seja proposto também naquela nova;

**Registro Imposto**: é reportado pela causal de contabilidade selecionada: pode ser modificado manualmente pelo usuário mas a operação não é aconselhada (muito melhor ir a codificar uma nova causal específica do segundo registro Imposto);

**Protocolo Imposto**: é um campo numérico que é gerido automaticamente pelo procedimento para cada registro: na abertura da máscara vai ser proposto o máximo protocolo + 1 para o registro estabelecido, e durante o salvamento vai ser confirmado ou não se foram efetuados outros salvamentos para aquele registro ou protocolo Imposto a recuperar (para a recuperação dos protocolos: a recuperação muda se a causal foi inserida ou não o bloqueio do salvamento com numeração não progressiva; por que com o bloqueio se recupera um protocolo livre no mesmo dia da registração, sem o bloqueio vai ser proposto mesmo assim um protocolo não válido para aquela data, com as relativas mensagens de aviso ao usuário). O campo do protocolo é desabilitado com registração provisória.

**Tipo documento**: é proposto pelo procedimento em relação o valor estabelecido nas causais de contabilidade geral: é modificável, mas se refere a uma mudança normalmente não necessária (tipicamente serve para especificar os documentos das registrações Imposto, mas isso já está na causal, enquanto todos os outros movimentos vai ter sempre um documento de tipo 'Genérico');

**Data documento**: é um campo obrigatório ou não, de acorod com as impostações das causais de contabilidade (flag data documento no segundo tab): essa data não pode ser superior da data de registração e tem que ser dentro da gama de datas de validade relativa ao período em linha para o exercício de referência da registração. Se foi apertado o botão de criação de uma 'Nova registração' daquela em gestão, é possível estabelecer os parâmetros usuário em modo que esse campo seja proposto também naquela nova;

**Número documento**: é um campo alfanumérico de 20 caracteres: de acordo com as impostações da causal se bloca a inserção do mesmo número, do mesmo ano (pego da data documento), do mesmo tipo (campo tipo documento) para o mesmo código inserido no campo subconta do cabeçalho da registração (esse bloqueio é inserido de default em cada causal contábil, mas pode ser desabilitado). Se for o mesmo número/ano/subconta mas o tipo é diferente vai ser enviado uma simples mensagem de advertência ao usuário. Na mesma maneira, a mensagem de advertência é enviada mesmo se a referência foi salva numa registração provisória;

**Campo encomenda**: é ativo só se a causal de contabilidade prevê a gestão encomendas: essa encomenda é aquela de referência para toda a registração, mas vai ser possível atribuir de novo os valores dentro da ficha 'Encomendas'. A compilação do campo prevê de utilizar sempre a ajuda das encomendas para filtrar aquelas ativas nas encomendas de venda da área de venda;

**Moeda**: proposta com prioridade pelo registro titular da registração, em alternativa pela moeda da sociedade: pode ser modificada de vez em vez. Uma vez salva a registração, o campo não é mais modificável;

**Data moeda**: é a data de referência do câmbio, assim como inserido na tabela câmbios moeda: o procedimento vai ler nessa tabela a última data inserida precedente a essa. Nos parâmetros de gestão usuário essa data pode ser estabelecida como data registração (default) ou como data documento. É previsto um parâmetros usuário de aviso quando não foi estabelecido um câmbio na data de registração (e portanto se utiliza um câmbio diferente);

**Câmbio**: é o valor do câmbio assim como inserido na tabela câmbios moeda: se trata do valor INVERTIDO respeito aquele que normalmente se lê nos câmbios moedas (isso deriva do fato que o procedimento manteve a lógica 'incerto por certo' derivando da gestão libras - quantas libras por uma unidade da segunda moeda - enquanto o euro tem câmbios 'certo por incerto' - com 1 euro quantas unidades se obtém da segunda moeda -). Tal valor pode ser forçado manualmente pelo usuáro (caso típico: causais de pagamento/cobrança em moeda, o valor do câmbio aplicado pelo banco não vai ser nunca aquele oficial dos câmbios internacionais);

**Total moeda/Total documento**: são os campos associados entre eles através do câmbio, portanto nas registrações em euro vai ser indiferente escrever a quantia num ou noutro. A causal contábil pode prever que esses sejam atualizados automaticamente com o variar dos dados inseridos dentro da grelha Imposto, normalmente só em aumento mas também em diminuição se estabelecido na causal. O salvamento da registração pode ser bloqueado se essa quantia não é igual aos dados Imposto da registração;

**Total taxa**: é atualizada sempre automaticamente pelo procedimento, não é inserido manualmente.

Na base da registração contábil, na ficha registração, está presente a descrição da registração contábil: se trata de uma nota que se pode estabelecer dentro da causal de contabilidade através da utilização dos códigos numéricos (1) (2)... (10) (os códigos (8) e (9) se utilizam só nas descrições de detalhe das subcontas na seção do livro jornal). Com um duplo click no campo é possível abrir uma pesquisa dentro das notas codificadas (procedimento presente dentro dos 'Instrumentos' - 'Utilidade'): a mudança manual dessa descrição vai ser eventualmente ressetada na confirmação do usuário uma vez modificado um dos campos geridos automaticamente nas notas.

Na base da máscaras estão presentes outros campos de resumo dos dados Imposto e da registração: merecem uma particular anotação os campos dedicados as visualizações do desequilíbrio da registração, normalmente não consentido (mas que se pode habilitar nas impostações da causal em utilização). O desequilíbrio vai ser proposto como quantia nas novas linhas de contabilidade que vão ser inseridas manualmente na registração.

O procedimento Criação registração contábil é constituído na seguinte maneira:

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar a registração. |
| Nova registração | Botão para criar uma nova registração. |
| Parâmetros de inserção | Refere-se ao procedimento da primeira nota. |
| Abrir registro | Botão para chamar de novo, a gestão registro da subconta selecionada, ou em ausência, a pesquisa de um outro registro. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document Manager](/docs/guide/operations-with-data/document-manager)  | Botão para a ligação com a gestão documental. |






