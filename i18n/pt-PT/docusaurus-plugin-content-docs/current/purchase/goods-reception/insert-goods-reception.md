---
title: Gestão recebimento mercadorias
sidebar_position: 3
---

Para inserir um novo recebimento mercadorias tem de ser inseridos:

**Fornecedor**: através da ajuda ou a inserção manual de conta e subconta;

**Data**: é proposta igual a data atual;

**Número**: é proposto o último número progressivo útil para a data;

**Tipo**: recebimento de mercadorias.

O tipo artigos que se podem inserir nos recebimentos mercadorias são só artigos codificados no registro e podem ser inseridos manualmente ou pela importação do BarCode ou pelas ordens fornecedores.

**Código**: refere-se ao 'Código artigo BarCode' inserido nos Artigos, tab 'Código BarCode'. No momento da inserção o programa retoma automaticamente o artigo associado, com todos os dados do seu registro. A inserção da classe ou da matrícula pode acontecer manualmente ou com o auxílio da 'Ajuda artigos' (duplo click na seção amarela) a qual vai propor todos os dados relativos inseridos no registro artigo. Depois da inserção do artigo, a sua descrição vai ser retomada automaticamente pelo registro. Se o artigo tem variantes, vai ser necessário selecionar a variante desejada pela caixa de combinação Variantes;

**Variantes**: refere-se as variantes do artigo selecionado, se esses existem. A escolha da variante é útil para os artigos com essa configuração particular, que podem ter um preço diferente daquele padrão estabelecido. De consequência, o preço do artigo com variantes pode ser diferente do preço do artigo sem variantes. Isso pode pedir, eventualmente, a gestão das variantes do artigo no catálogo de venda de referência;

**Artigo fornecedor**: refere-se a tabela dos artigos fornecedor, o artigo pode ser selecionado através da Ajuda ou inserido manualmente;

**Variante artigo fornecedor**: refere-se a tabela das variantes dos artigos fornecedor, a variante pode ser selecionada através da ajuda ou inserida manualmente;

**Unidade de medida**: é proposta a UM principal do artigo, mas o usuário tem a possibilidade de escolher uma unidade de medida alternativa;

**Quantidade documento**: representa a quantidade da UM principal; é inserida a quantidade que se refere a ordem fornecedor executada, não é um dado obrigatório;

**Quantidade recebida**: representa a quantidade efetivamente recebida;

**Unidade de medida alternativa**: é proposta a UM presente no tab UM alternativas do registro artigo com o flag de 'Default' estabelecido;

**Quantidade alternativa**: é proposto o valor relativo a UM alternativa, calculado multiplicando ou dividindo a quantidade gestional (relativa a UM principal) com o fator de conversão estabelecido no registro artigo;

**Preço**: representa o preço presente na ordem fornecedor ou o custo último do registro artigos;

**Opção**: o dado, obrigatório, corresponde a tabela das opções da estrutura de produtos;

**Depósito**: é o depósito de recebimento da mercadoria, é retomado pela ordem fornecedor se a linha recebimento tem executado uma linha ordem fornecedor ou pode ser inserido manualmente pelo usuário;

**Causal**: é a causal de recebimento da mercadoria, vai ser retomada  pela ordem fornecedor se a linha recebimento tem executado uma linha ordem fornecedor ou pode ser inserido manualmente pelo usuário;

**Descrição artigo**: é proposta a descrição do artigo e não é possível modificá-la;

**Referência ordem**: se a linha foi criada executando uma linha ordem fornecedor é reportado o número ordem executado;

**Localização**: se a causal tem uma localização de default vai ser proposta tal localização, se não, pode ser inserida manualmente se o depósito é gerido a localizações;

**Encomenda**: para cada linha recebimento é possível associar uma encomenda de venda.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada: 



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar o recebimento mercadorias | Salvar o recebimento. |
| Novo artigo | Se posiciona na grelha artigos para uma una nova inserção. |
| Cancelar os artigos | Cancela as linhas artigo selecionadas. |
| Propriedade do artigo | Se a linha artigo executou uma linha ordem fornecedor através dessa função é possível visualizar os dados da ordem fornecedor de referência e os dados da linha artigo resumidas. |
| Da ordem fornecedor | O procedimento permite criar as linhas recebimento executando as ordens fornecedores. Ver o procedimento ponto 6.1. |
| Importação do BarCode | Permite importar as linhas artigo por uma tabela configurada nos parâmetros. Ver o procedimento ponto 6.2. |






