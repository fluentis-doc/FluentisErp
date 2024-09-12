---
title: Detalhes registração
sidebar_position: 3
---

**Registro imposto**: O campo, obrigatório só para as causais com tipo movimento Imposto, permite atribuir o registro Imposto de referência na causal em gestão.

**Data competêcia Imposto**: O campo permite definir qual é a data de competência a atribuir no movimento Imposto: o programa propõe a data registração para os movimentos nos registros compras e a data documento apra movimentos nos registros vendas. Se recomenda de estabelecer a data competência como data registração também para as causais de variação Imposto Intra-cee.

**Opções tipo documento**:

**Tipo/Nº documento**: A impostação deste flag rende obrigatório o campo do número documento para o salvamento da registração baseada nesta causal.

**Nº doc = Prot. Imposto**: A impostação deste flag implica que o programa vai propor o número do documento na base do número de protocolo Imposto progressivo. O campo, portanto, não é estabelecido para as registrações de compra pelas quais o documento e o protocolo não têm nenhuma ligação reciproca; pelo que concerne as vendas, invés, o uso é sugerido só para as causais de registrações efetuadas manualmente diretamente na contabilidade geral: a impostação deste flag não é aconselhada para as causais estabelecidas nos tipos faturas de venda e utilizadas na contabilização das faturas.

**Data documento**: A impostação desse flag rende obrigatório o campo da data documento para o salvamento da registração baseada nesta causal.

**Prot. Imposto = Nº doc**: A impostação deste flag implica que o programa vai tentar de atribuir o protocolo Imposto na base do número de documetnto. O campo, portanto, não é estabelecido para as registrações de compra pelas quais o número documento e o protocolo não têm nenhuma ligação reciproca; pelo que concerne as vendas, invés, o uso é sugerido só para as causais estabelecidas nos tipos faturas de venda e utilizadas portanto na contabilização das faturas: a possibilidade de utilizar esta impostação depende da certeza que a numeração dos tipos de fatura seja a mesma para todos os documentos a registrar no mesmo registro Imposto.

**Opções tipo registração**:

**Abertura partidas**: A presença deste flag vai fazer aparecer o tabulador de criação dos livros-jornais na registração contábil que vai utilizar essa causal: a impostação desse flag é portanto aconselhada para todas as registrações de tipo Imposto e em geral para poder gerir o plano de trabalho clientes/fornecedores. O flag pode ser estabelecido também para as causais que relevam um pagamento adiantado: neste caso vai ser aberta uma partida de sinal inverso a para compensar sucessivamente com as partidas que se vão criar no momento da relevação contábil do documento fiscal sucessivo.

**Det. mov. nas partida**: Com este flag o programa vai inserir nas notas das partidas os textos inseridos no campo 'Detalhe movimento' da linha de contabilidade de origem da partida. O flag é ativo só quando o precedente 'Abertura partidas) foi estabelecido.

**Apertura per ogni riga mov.**: Con questo flag il programma inserirà, una partita per ogni riga movimento, nella quale è presente un sottoconto con il flag di gestione partite aperte impostato. Il flag è attivo solo quando il precedente 'Apertura partite' è stato impostato.

**Encerramento partidas**: A presença deste flag vai fazer aparecer o tabulador de encerramento dos livros-razão na registração contábil que vai utilizar esta causal. Refere-se tipicamente a as registrações de pagamento/adiantamento não o Imposto, mas pode ser também que se estabelece na combinação com a abertura das partidas e a compensação das partidas para as causais das notas de crédito e em geral para todas as registrações que preveem uma abertura das partidas com um contextual compensação de uma situação progressiva.

**Utilizar o câmbio histórico**: Com este flag, disponível só se foi estabelecido o encerramento das partidas, o aplicativo vai proceder a fechar os livros-razão com o câmbio histórico de abertura, sem nenhuma relevação automática das diferenças de câmbio.

**Agrup. pag. no livro-jornal**: Com este flag, disponível só se foi estabelecido o encerramento das partidas, o aplicativo vai proceder a agrupar num único movimento de contabilidade todas as quantias de encerramento partidas associadas com uma mesma subconta (em particular, vai agrupar os movimentos do mesmo sinal e mesma moeda).

**Excluir da com. maturadas**: Com este flag, disponível só se foi estabelecido o encerramento das partidas, os encerrametnos das partidas efetuados com esta causal contábil não vão ser considerados válidos para o cálculo das comissões maturadas para os agentes com o cálculo de tipo 'Pagamento acontecido'.

**Ref. doc. partida em pag.**: Com este flag, disponível só se foi estabelecido o encerramento das partidas, o aplicativo vai proceder a gerir os códigos (8) e (9) de relevação das referências dos encerramentos das partidas nas descrições de detalhe dos movimentos.

**Compens. partidas**: Com este flag, disponível só se foram estabelecidos ambos flag de abertura e encerramento das partidas, o procedimento vai ativar a possibilidade de proceder a uma compensação das partidas dentro da registração baseada nesta causal: essa combinação de flag se aconselha para todas as causais associadas aos documentos de tipo notas de crédito.

**Aviso comp.**: Com este flag se ativo, no salvamento da registração contábil, um controle que avisa o usuário na presença de partidas a compensar.

**Agrup. partidas**: O flag ativa a gestão dos agrupamentos das partidas invés que a gestão padrão na abertura/encerramento das partidas, através dum tabulador específico de relevação na registração contábil.

**Agrup. partidas – tipo pagamento**: É a tipologia de pagamento a atribuir aos movimentos dos agrupamentos das partidas relevados com esta causal.

**Encomendas**: A presença deste flag vai fazer aparecer o tabulador de gestão da valorização das encomendas nas registrações contábeis.

**Centros de custo**: A presença deste flag vai fazer aparecer o tabulador de gestão da valorização dos centros de custo nas registrações contábeis.

**Centros de lucro**: A presença deste flag vai fazer aparecer o tabulador de gestão da valorização dos centros de lucro nas registrações contábeis.

**Gestão máquina**: O flag vai visualizar na contabilidade, na ficha analítica, uma grelha de valorização dos custos/receitas dos automóveis da impresa.

**Retenção de adiantamento**: Campo não utilizado: a relevação da retenção de adiantamento se efetua automaticamente pelo procedimento de contabilização de pagamentos do módulo Beneficiários, independentemente da presença do flag em objeto.

**Ativos fixo**: A presença desse flag vai fazer aparecer o tabulador de gestão das fichas ativos fixo na registração contábil.

**Tipo operação**: Refere-se ao tipo de operação a propor de default para os novos movimentos relevados dentro da ficha ativos fixo na contabilidade.

**Atualização saldos**: Flag estabelecido de default.

**Descr. mov. no jornal pagamentos**: Com este flag o procedimento vai copiar a descrição geral da registração em todas as descrições de detalhe dos movimentos e também nas notas dos pagamentos.

**Empreitada**: O flag individua as registrações que nascem na empreitada, utilizado para os resumos fiscais.

**Outras colunas visualizáveis na grelha das registrações contábeis**:

**Moeda**: A presença deste flag vai fazer aparecer o campo moeda na seção do livro-jornal.

**Câmbio/data moeda**: A presença deste flag vai fazer aparecer os campos do câmbio e da data moeda na seção do livro jornal.

**Quantia moeda**: A presença deste flag vai fazer aparecer o campo Quantia moeda na seção do livro jornal.

**Subconta de contrapartida**: A presença deste flag vai fazer aparecer os campos das subcontas de contrapartida na seção do livro jornal. A gestão dos campos de contrapartida não é aconselhada.

**Detalhe do movimento**: A presença deste flag vai fazer aparecer o campo do Detalhe movimento na seção do livro jornal: se aconselha de estabelecer este flag para todas as causais contábeis, em modo de permitir sempre a inserção de notas de detalhe de cada movimento contábil.

**Divisão**: A presença deste flag vai fazer aparecer o campo Divisão já com partidas da seção Imposto, assim como na seção do livro jornal. Com essa impostação vai ser possível cortar o carregamento do mesmo documento em mais divisões da sociedade.

**Dias de banco**: A presença deste flag vai fazer aparecer o campo da data moeda banco na seção do livro jornal: o campo, portanto, é aconselhável para todas as causais contábeis que relevam os movimentos financeiros. A gestão desse campo pode ser automatizada em relação aos dias moeda (positivos/negativos) estabelecidos no registro bancos para cada causal.

**Número progressivo**: A presença deste flag vai fazer aparecer o campo do Número da linha na seção do livro jornal: se aconselha de inserir esse flag para as causais particularmente lungas, em modo de permitir ao usuário ordinar os relatórios em modo fixo como na causal (p.ex.: relevação dos pagamentos).

**Ref. manual partidas**: A presença desse flag vai fazer aparecer o campo de Ref manual da partida na seção do livro jornal. O campo é indicado para associar manualmente movimentos de contabilidade sem passar pela gestão das partidas.






