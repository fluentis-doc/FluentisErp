---
title: Parâmetros empreiteiro
sidebar_position: 1
---

A janela dos Parâmetro empreiteiro se abre através do percurso Home > Parâmetros > Produção > Parâmetros empreiteiro. Através dessa janela são estabelecidos todos os parâmetros que se referem a gestão do empreiteiro e mais no específico o modo em que devem ser executas as movimentações de depósito desencadeadas pelos procedimentos do módulo.

Na seção **Entregas materiais a empreiteiros** são estabelecidos o depósito e a relativa causal que devem ser consideradas para o descarregamento dos materiais destinados aos empreiteiros. Portanto o depósito estabelecido é o depósito pela qual vão ser descarregados os materiais inseridos no tab Materiais a entregar na ordem de empreiteiro.

Na seção **Carregamentos materiais a empreiteiros** são estabelecidos o depósito e a relativa causal que devem ser considerados para o carregamento dos materiais destinados aos empreiteiros. Portanto os depósitos estabelecidos é o depósito onde vão ser carregados os materiais inseridos no tab Materiais a Entregar da ordem de empreiteiro. Esses dados são retomados pela causal de contrapartida inserida na tabela das causais em correspondência da causal que efetua o descarregamento dos materiais destinados aos empreiteiros (quer dizer a causal estabelecida na adequada caixa de combinação da seção 'Entregas materiais aos empreiteiros').

Na seção **Entregas materiais entre empreiteiros** são estabelecidos o depósito e a relativa causal que devem ser consideradas para o deslocamento dos materiais de um empreiteiro a um outro. Esses dados são utilizados na máscara chamada 'Transferência entre empreiteiros'.

Na seção **Consumações materiais utilizados** são estabelecidos o depósito e a relativa causal que devem ser considerados para o descarregamento dos materiais que os empreiteiros utilizaram. Portanto o depósito estabelecido é o depósito pela qual foram descarregados os materiais inseridos no tab Materiais utilizados do retorno empreiteiro. 

A seção **Retorno produto sujeito a CQ** é atualmente não ativa.

Na seção **Retorno produto** são estabelecidos o depósito e a relativa causal que devem ser consideradas para o carregamento dos produtos acabados (ou semiacabados) que os empreiteiros realizaram. Portanto o depósito estabelecido é o depósito pela qual vão ser carregados os artigos inseridos no tab Artigos retornados do Retorno de empreiteiro.

Na seção **Material retornado** são estabelecidos o depósito e a relativa causal que devem ser carregados para o descarregamento dos retornos. Portanto o depósito estabelecido é o depósito pela qual foram descarregados os artigos inseridos no tab Materiais utilizados do Retorno de empreiteiro e cujo foi associada uma quantidade retornada.

Na seção **Tipo nota de entrega** se estabelece o tipo nota de entrega de venda que tem de ser proposta de default quando se utiliza o procedimento de criação das notas de entrega de empreiteiro. Este tipo de nota de entrega vai utilizar em automático o depósito e a causal estabelecidos nas adequadas caixas de combinação do elemento 'Entregas materiais aos empreiteiros' que se encontra na janela dos parâmetros do empreiteiro.

O flag **Código operados obrigatório** permite decidir se é necessário inserir o código operador no momento me que se insere a nota de entrega de empreiteiro.

No último campo 'Último número ordem de empreiteiro inserido' é utilizado o último número progressivo utilizado nas ordens de empreiteiro.

**Dados materiais propostos**: visualiza as 4 diferentes possibilidades que o usuário tem a propor automaticamente ao procedimento os materiais no tab Materiais a entregar da ordem de empreiteiro. As possibilidades são as seguintes: 1. A partir da última entrega efetuada pelo mesmo empreiteiro: se controla a última ordem de empreiteiro gerada para o mesmo empreiteiro e pela qual é presente o mesmo artigo a produzir; 2. Explosão do nível da estrutura da lista: se controla a estrutura de produtos do artigo inserido no tab Artigos a produzir; 3. Entrega do mesmo artigo a produzir: se insere no tab Materiais a entregar o mesmo artigo inserido no tab Artigos a produzir; 4. Nenhum material: no tab Materiais a entregar não é proposto algum material.

O flag **Proposta do último preço de produção** efetuado se ativo, permite fazer propor na ordem de empreiteiro, na casa do preço unitário de produção do tab Artigos a produzir, o preço da última ordem de empreiteiro emitido para aquele artigo para o mesmo empreiteiro.

O botão de opção** Valor. produção materiais a custo** permitem definir se a valorização da produção dos materiais tenha que acontecer no custo último ou no custo médio. Portanto se refere a um método para decidir se os materiais utilizados pelos empreiteiros tenham de ser imputados na produção utilizando o custo último ou o custo médio entre aqueles inseridos no registro do artigo.

Os campos Versão/Opção: permitem selecionar a versão da estrutura de produtos e a relativa opção. Geralmente os dados são propostos de default iguais a versão ativa e a opção base.

A seção **Dados dos materiais propostos nas ordens de empreiteiro** é constituída por sua vez por outras 5 seções:

**Considerar as disponibilidades que vem da**: é possível decidir se considerar ou não as disponibilidades que vem do Empreiteiro/Produção/Compras/Depósito/Vendas; cada um desses flag indicam a vontade do usuário de fazer em modo que o procedimento de criação da ordem de empreiteiro considera a disponibilidade dos materiais de acordo com as informações que vem de cada área aplicativa do ERP. Portanto por exemplo, se o usuário escolhe de ativar o flag só nas Compras e não nas Vendas, significa que vão ser consideradas as disponibilidades que vem pelas ordens fornecedores, pelas notas de entrega e faturas de compra e pelos pedidos de compra e não aqueles que vem das ordens clientes, notas de entrega e faturas de venda;

**Produtos acabados** (flag): permite escolher, no momento da inserção de um artigo no tab Artigos a produzir da ordem de empreiteiro, se considerar as quantidades dos artigos em relação ao lote econômico, e/ou considerar eventualmente também os múltiplos do lote;

**Materiais**: permite escolher, no momento da inserção de um artigo no tab Artigos a produzir da ordem de empreiteiro, se considerar para os materiais a entregar as quantidades dos artigos em relação ao lote econômico, e/ou considerar eventualmente também os múltiplos do lote;

**Regeneração materiais na atualização do artigo**: se o flag é ativo, cada vez que se efetua uma mudança na linha artigo presente no tab Artigos a produzir da ordem de empreiteiro o procedimento regenera as informações relativas aos materiais a entregar e a utilizar a inserir no último tab do mesmo artigo;

**Depósitos**: permite escolher se considerar os depósitos em relação ao tipo de nota de entrega de retorno ou ao tipo de notas de entrega, invés que utilizar as impostações inseridas nas adequadas caixas de combinação dos elementos 'Entregas materiais aos empreiteiros' e 'Retorno produto'.

O flag **Controlar a disponibilidade** permite decidir se fazer em modo que o procedimento controle ou não a disponibilidade que vem dos flag estabelecidos na seção 'Considerar as disponibilidades que vem da'.

O flag **Disponibilidade obrigatória**, se ativo, impede a inserção de materiais nas ordens empreiteiro em ausência de disponibilidade na data da eventual entrega ao empreiteiro.

O flag **Nenhum material na entrega**, se ativo, faz em modo que no tab Materiais a entrega não seja inserido nenhum artigo para nenhum artigo a produzir.

O flag **Controlar a disponibilidade material**, se ativo, faz em modo que o procedimento considera também a disponibilidade dos materiais a utilizar no curso da efetuação do retorno empreiteiro.

O flag **Carregamento/Descarregamento automático**, se ativo, permite ao usuário fazer em modo que as movimentações de depósito em saída aconteçam automaticamente não apenas que a notas de entrega  seja imprimida. Isso permite saltar o step do descarregamento das notas de entrega de empreiteiro.

O flag **Bloquear a inserção documento nos dias de feriado**, se ativo, impede a inserção de uma ordem, de uma nota de entrega e de um retorno de empreiteiro nos dias de feriado.

O flag **Custo zero em ausência de catálogo**, se ativo, permite a inserção um artigo no tab Artigos a produzir na ordem empreiteiro sem que o procedimento insere como preço unitário de produção o custo último do artigo pego pelo registro; portanto se insere um preço unitário igual a zero.

O flag **Controle empreiteiro de referência para os artigos**, se ativo, permite ao usuário fazer em modo que o procedimento de criação das ordens empreiteiro controle se o artigo que se está inserindo no tab Artigos a produzir tenha, como fornecedor preferencial, o empreiteiro inserido no cabeçalho da mesma ordem.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as mudanças efetuadas nos Parâmetros empreiteiro. |






