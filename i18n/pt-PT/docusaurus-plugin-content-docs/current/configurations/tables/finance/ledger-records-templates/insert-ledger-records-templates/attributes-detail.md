---
title: Detalhe atributos
sidebar_position: 2
---

Os campos da Form Detalhe atributos são:

**Causal automática**: no momento do salvamento de uma registração baseada na causal que é em mudança, o programa vai criar automaticamente uma segunda registração baseada sobre a causal indicada nesse campo. Para que a segunda registração seja compilada corretamente precisa respeitar as seguintes lógicas de relação entre as duas registrações:

a) o primeiro caso é aquele onde a primeira registração é com tipo movimento Imposto compras IntraCEE e a segunda com Variação Imposto compras IntraCEE, pela qual a ligação é dada da relevação do Imposto compras também no registro vendas;

b) o segundo caso é aquele aonde a primeira registração abre uma partida enquanto a segunda opera o encerramento imediato;

c) o terceiro caso é relativo à registração de encerramento de uma partida nascida com o tipo movimento ‘Imposto venda no organismo público' pela qual o Imposto é em suspensão, se é associada com uma registração de Variação Imposto na suspensão;

d) o quarto caso é a compra com Imposto na suspensão, inverso ao precedente;

e) o quinto caso é aquele aonde a primeira registração é Imposto, a segunda é valorizada com a lógica das subcontas automáticas estabelecidas no plano das contas;

f) quando não estão presentes os casos precedentes o programa vai procurar de estabelecer os dados da segunda registração em relação aos dados Imposto da primeira; em alternativa a segunda registração vai ser gerada reportando as subcontas previstas sem algum valor estabelecido.

**Inversão colunas se a quantia é menor de zero**: é possível fazer em modo que o programa inverta as colunas Débito/Crédito de movimentação em relação o sinal da movimentação Imposto (deste campo se aconselha a seleção para todas as registrações Imposto).

**Aviso**: O campo é ativo só se o precedente foi ativado, consiste no retornar ao usuário uma mensagem de advertência de inversão do sinal. O flag é influente para as causais utilizadas nos procedimentos automáticos de contabilização.

**Permitir as subcontas com valores zero**:  Com este flag o procedimento:

a) vai permitir inserir manualmente as linhas com quantia seja de débito que de crédito igual a zero;

b) no momento do salvamento da registração NÃO vai cancelar as linhas reportadas pela causal e não valorizadas pelo usuário na registração;

c) as linhas que valorizam no livro jornal o débito/crédito Imposto este flag vai comportar o cancelamento da quantia a zero mas só com a condição que não foi também inserido o flag 'Permitir o Imposto 0 no LJ' na tabela das 'Alíquotas modalidade Imposto'.

**Protótipo da registração**: esta é a seção fundamental (mas não obrigatória) da causal de contabilidade, pela qual vai ser carregado o esquema típico do tipo de registração contábil a gerir. É possível inserir também os códigos gerais de conta (p.ex.: a conta fornecedores), que vão ser atualizados automaticamente pelo programa de acordo com a lista das contas clientes/fornecedores inseridos nos Parâmetros de contabilidade geral. Essas subcontas, assim como as seções débito/crédito, vão dirigir as valorizações contábeis, que vão ser modificáveis no curso do carregamento manual da registração.

Merecem explicações específicas os códigos de tipo quantia, fundamental para valorizar automaticamente o livro jornal em relação ao banco dos dados Imposto e do livro-razão movimentados na registração.

Em particular:

**Manual**: indica que a linha vai ser valorizada manualmente pelo usuário no ato da registração;

**Tributável subconta**: indica que a linha vai ser atualizada para cada código de subconta inserida na seção Imposto com a quantia obtida pelo tributável da/s mesma/s linha/s; o uso desse tipo de quantia é aconselhado tipicamente para todas as receitas inseridas nas causais de venda;

**Total tributável**: indica que a linha vai ser atualizada com o do total tributável da registração: nenhuma consideração vai ser efetuada no código de conta/subconta inserida;

**Total taxa**: indica que a linha vai ser atualizada com o do total da taxa da registração: nenhuma consideração vai ser efetuada no código de conta/subconta inserida;

**Taxa dedutível**: indica que a linha vai ser atualizada com o total da taxa dedutível da registração: nenhuma consideração vai ser feita no código da conta/subconta inserida;

**Tot. doc./registração**: indica que a linha vai ser atualizada com o código da subconta titular da registração (se conforme com as combinações inseridas nos Parâmetros de contabilidade) para o valor total do documento/registração;

**Tributável+Taxa inseduzível**: indica que a linha vai ser atualizada com o total tributável somado ao total taxa dedutível da registração: nenhuma consideração vai ser efetuada no código de conta/subconta inserida;

**50% tributável**: indica que a linha vai ser atualizada com o 50% do total tributável da registração: nenhuma consideração vai ser efetuada no código de conta/subconta inserida;

**50% tributável+imposto inseduzível**: indica que a linha vai ser atualizada com o 50% do total tributável somado ao total do imposto dedutível da mesma: nenhuma consideração vai ser efetuada no código de conta/subconta inserida;

**50% tribut.+50% imposto inseduzível**: indica que a linha vai ser atualizada com o 50% do total tributável da registração somado do 50% do imposto dedutível da mesma: nenhuma consideração vai ser efetuada no código de conta/subconta inserida;

**Tribut. subc+taxa indeduz. subc.**: indica que a linha vai ser atualizada para cada código de subconta inserida na seção Imposto com a quantia obtida pela soma do tributável da/s mesma/s linha/s e da relativa taxa inseduzível; o uso deste tipo de quantia é aconselhado tipicamente para todos os custos inseridos nas causais de compra;

**Arredondamentos ativos**: indica que a linha vai ser atualizada com a quantia dos arredondamentos ativos; o uso precisa associar com as causais de encerramento das partidas;

**Arredondamentos passivos**: indica que a linha vai ser atualizada com a quantia dos arredondamentos passivos; o uso precisa associar com as causais de encerramento das partidas;

**Quantia subconta**: indica que a linha vai ser atualizada com a quantia dos pagamentos das partidas inseridas na registração, de acordo com o sinal do mesmo pagamento;

**Útil dif. câmbios**: indica que a linha vai ser atualizada com a subconta útil da moeda de referência da diferença de câmbios, para a quantia obtida em relação ao diferencial de valorização entre o câmbio histórico e o câmbio de encerramento da partida; se já foi estabelecido o flag de encerramento no câmbio histórico a linha não vai ter nenhuma valorização;

**Perd. dif. câmbios**: indica que a linha vai ser atualizada com a subconta perda da moeda de referência da diferença de câmbios, para a quantia obtida em relação ao diferencial de valorização entre o câmbio histórico e o câmbio de encerramento da partida; se já foi estabelecido o flag de encerramento no câmbio histórico a linha não vai ter nenhuma valorização;

**Automático**: tipo quantia utilizada em nenhum procedimento de contabilização automática. A grelha se completa com um campo de codificação das contrapartidas (não se aconselha o uso: na contabilidade já está presente uma imprensa que visualiza as contrapartidas independentemente dessa impostação) e com um campo de notas de detalhe: nesse campo é possível utilizar todos os códigos reportados na base da máscara, e em particular para as causais de encerramento das partidas inserir em correspondência da conta clientes/fornecedores geral se aconselha de utilizar os códigos (8) ou (9) em concomitância com o flag ‘Ref. doc. partida em pag.' para anotar na contabilidade as referências dos documentos pagados/cobrados.

**Taxa dedut. e subconta imposto**: tipo de quantia utilizado para valorizar a linha relativa ao Imposto com a quantia dedutível do imposto e com a subconta individuada em relação ao ‘Tipo contabilização imposto' associado com prioridade no registro titular da registração ou de default nos ‘Parâmetros de contabilidade geral'.

**Descrição paramétrica da registração contábil**: Aqui se pode codificar algumas descrições padrão que vão ser compiladas pelo programa através dos vários códigos indicados, descrições que vão ser reportadas nas imprensas contábeis e em particular nos Extratos conta e no livro jornal. Também para cada linha de movimentação é possível codificar algumas notas preestabelecidas assim como para a descrição geral: em particular os códigos (8) e (9) são geridos só nesta seção específica de linha.






