---
title: Parâmetros ordens fornecedores
sidebar_position: 5
---

Os parâmetros das ordens fornecedores permitem a impostação de base para gerir corretamente e de acordo com os específicos pedidos de cada sociedade.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restauração parâmetros | Permite restaurar os parâmetros nos valores iniciais. |

#1.1 Tab geral

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Gestão dupla unidade de medida | Quando é estabelecido, se habilita a caixa de combinação da UM alt. e a coluna quantidades alternativas na grelha artigos da ordem. |
| Proposta automática UM alternativa | Este check se habilita só se a 'Gestão dupla unidade de medida' estiver ativa. Quando se insere um artigo que tem no seu registro o tab UM alternativas uma UM alternativa de default, essa UM é automaticamente proposta como UM alt. do artigo e se calcula também a quantidade alternativa utilizando o fator de conversão da mesma. |
| Recuperar só no diagiornata  | Quanto é estabelecido, a recuperação dos buracos de numeração acontece automaticamente no arco do dia. Se no dia foram criadas as ordens 7, 8, 11, 12 e o flag foi estabelecido, o próximo número proposto vai ser 10 quer dizer, o primeiro menor em relação aquele inserido pelo usuário que é um número livre. |
| Auto inserção variante nos atributos variantes | Quando é estabelecido, no tab artigos a gestão das ordens o código variante e a descrição variante tornam-se 2 campos editáveis e para os dados inseridos nos 2 campos se não estiver já presente no registro variantes, se pede se quer salvá-los no registro variante. Nesta maneira inserindo as linhas ordem são criadas também as variantes dos artigos. |
| Não permitir de executar a quant. superior | Se estabelecido, quando se cria um Recebimento mercadorias da ordem, o usuário não pode inserir uma quantidade superior aquela presente na ordem. |
| Controlar a sequência data e número  | Se estabelecido, não vai ser possível não ter a progressividade entre o número documento ou a data documento. Assim, se no dia 21/11/2011 há 3 ordens com número 7, 8, 10 e para o dia 22/11/2011 tem uma ordem número 11, e o usuário quer inserir uma ordem no dia 22/11/2011 - O único número possível em tal dia vai ser o 12 para manter a progressividade entre o número e o dia. |
| Custo zero em ausência de catálogos  | Quando é estabelecido e se não existem catálogos para os artigos inseridos na ordem, o preço proposto vai ser 0, se ao contrário não for estabelecido vai ser proposto o custo último do registro artigos. |
| Visualizar as dimensões | Quando é ativo no tab artigo da gestão notas de entrega de compra são visíveis as 3 colunas 'Altura', 'Largura' e 'Profundidade' (MGAD_Altezza, MGAS_Larghezza, MGAS_Profondita from MG_AnaDati – Tab Pesi/Dimensioni di Anagrafica Articoli). |
| Bloquear a inserção documento nos dias de feriado | Quando é ativo não é possível inserir os documentos com o dia de feriado do calendário das festividades da impresa. |
| Executar só as ordens autorizadas | Se é ativa quando no recebimento de mercadorias foram executadas as ordens, se visualizam só as ordens autorizadas. |
| Propor a marca com prioridade catálogo fornecedor/ordem cliente | Se é ativo, quando foram inseridos os artigos na ordem, se salva a marca do artigo no catálogo na ordem. A criação ordens fornecedores das ordens clientes com este check estabelecido, copia a marca da ordem cliente a ordem fornecedor. |
| Permitir a mudança imposto | Se ativo, na criação automática ordens pelos pedidos de compra o código imposto é proposto nas ordens. |
| Código operador obrigatório | Se ativo, na gestão ordens é obrigatório inserir o operador/empregado. |
| Procurar preços artigos em todos os catálogos predefinidos | Se ativo, este parâmetro é utilizado para a pesquisa do preço nos catálogos fornecedores, a pesquisa acontece nos catálogos do tipo predefinido no registro fornecedor também se os catálogos não foram válidos (os catálogos são aqueles que tem a data de início validade \<= o dia atual e tem a data fim validade nula ou \>=  o dia atual). |

#1.2 Tab importação do BarCodeNeste tab o usuário específica os parâmetros para importar os dados contidos na tabela OF_ImpBCAll. A form de importação se abre através da barra de ferramentas da gestão recebimento mercadorias no tab artigos.

#1.3 Tab carregamento

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Criar registração com o dia do documento | Quando é estabelecido, a registração de depósito é feita com o mesmo dia do recebimento mercadorias, e não vai ser necessário especificar a data da registração na Form de carregamento. |
| Prioridade parâmetros recebimento | Quando este parâmetro foi estabelecido o depósito e a causal de carregamento vão ser lidos pelas linhas do recebimento mercadorias e se não há parâmetros da form carregamento, ao contrário, se não foi estabelecido serão utilizados o depósito e a causal inseridas nesta form de parâmetros. |

#1.4 Tab analíticaEstes parâmetros indicam a prioridade de pesquisa dos centros de custo ou de lucro para atribuí-los aos artigos do pedido de compra. Quando o flag Recalcular for estabelecido, os centros de custo ou de lucro vão ser inseridos/atualizados nos artigos através da prioridade escolhida.






