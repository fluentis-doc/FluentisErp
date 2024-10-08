---
title: Artigos
sidebar_position: 3
---

O **tipo linha** oferece a possibilidade de selecionar os artigos com características diferentes:

**Artigo codificado**: são os artigos codificados no registro e podem ser contabilizados na contabilidade analítica e registrados no depósito;

**Artigo não codificado**: são os artigos descritivos que podem ser contabilizados na contabilidade analítica, mas não podem ser movimentados no depósito;

**Artigo despesas**: são os artigos codificados ou não codificados, e vão ser resumidos em maneira distinta nos resumos dos documentos, se o artigo despesa é codificado e de interesse fiscal vai ser movimentado no depósito, se é não codificado ou não de interesse fiscal não vão ser movimentados no depósito;

**Artigo notas**: é uma simples nota, não incide na contabilidade e no depósito. Esses dados podem ser inseridos automaticamente quando são inseridos diretamente a classe ou a matrícula por que o tipo linha 'Artigo codificado' é selecionado em automático.

**Código**: refere-se ao 'Código artigo BarCode' inserido nos Artigos, tab 'Código BarCode'. No momento da inserção o programa retoma automaticamente o artigo associado, com todos os dados do seu registro. A inserção da classe ou da matrícula pode acontecer manualmente ou com o auxílio da 'Ajuda artigos' (duplo click na seção amarela) pela qual vai propor todos os dados relativos inseridos no registro artigo. Depois da inserção do artigo, a sua descrição vai ser retomada automaticamente pelo registro. Se o artigo tem variantes, vai precisar selecionar a variante desejada pela caixa de combinação Variantes';

**Unidade de medida**: é proposta a UM principal do artigo, mas o usuário tem a possibilidade de escolher uma unidade de medida alternativa;

**Variantes**: refere-se as variantes do artigo selecionado, se essas existem. A escolha da variante é útil para os artigos com a mesma configuração particular, que podem ter um preço diferente daquele padrão estabelecido. De consequência, o preço do artigo com variantes pode ser diferente do preço do artigo sem variantes. Isso pode pedir, eventualmente, a gestão das variantes do artigo no catálogo de venda de referência;

**Quantidade**: representa a quantidade da UM principal, pode ser inserida manualmente, ou pode ser proposta automaticamente em relação a quantidade alternativa e ao fator de conversão;

**Preço**: o preço é proposto pelo catálogo inserido no registro fornecedor; o catálogo de referência para o mesmo artigo é visualizado no tab 'Totais'. A mesma ordem fornecedor poderia conter artigos com preços pegos pelos catálogos diferentes, se no registro fornecedor estão associados mais catálogos em cascata (ver registro clientes/fornecedores). Através do duplo click no campo Catálogos (tab 'Totais') o usuário tem a possibilidade de selecionar uma oferta diferente daquela proposta automaticamente, pela qual vai ser retomado o preço do artigo inserido. Em ausência do catálogo, o dado proposto poderia ser retomado pelo custo último de registro artigo, se nos parâmetros não foi estabelecido 'Custo a zero em ausência de catálogos'.

**Imposto**: é prioritário o dado inserido no campo Imposto do registro fornecedor. Se esse não estiver presente, vai ser proposto o valor presente no registro artigo. É um campo obrigatório;

**Faturado de compras**: é proposto o dado inserido no tab 'Generalidade' do registro artigos. Se esse não estiver presente, não vai ser proposto nenhum dado, mas, no momento da contabilização da fatura, vai ser considerado o valor inserido no campo 'Custo/Receita de contrapartida predefinida' do registro cliente;

**Unidade de medida alternativa**: é proposta a UM presente no tab UM alternativas do registro artigo com o flag de 'Default' estabelecido;

**Quantidade alternativa**: é proposto o valor relativo a UM alternativa, calculado multiplicando ou dividindo a quantidade gestional (relativa a UM principal) com o fator de conversão estabelecido no registro artigo.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as operações efetuadas. O mesmo resultado se obtém movendo o cursor numa linha diferente daquela que se quer salvar. |
| Várias | Permite procurar as condições de compra para o artigo nos documentos de venda precedenter e permite retomar o preço e o desconto. |
| Novo artigo | Botão para inserir um novo artigo. |
| Cancelar o artigo | Botão para cancelar o artigo inserido. |
| Abrir o filtro artigos (Depósito) | Botão para abrir o registro artigo. |
| Abrir o filtro artigos (Fornecedores) | Botão para abrir a tabela dos artigos fornecedores. |
| Navegador artigos | Botão para abrir o navegador artigos. |
| Parâmetros de inserção dos artigos | Abre a janela de parâmetros:- inserção automática dos artigos no registro, se estabelecido permite codificar os artigos inseridos na ordem diretamente no registro artigo.- inserção automática das variantes no registro, se estabelecido permite codificar as variantes do artigo na inserção da linha ordem.- proposta automática do código das variantes, se estabelecido permite criar em automático o código da variante e o usuário pode modificá-lo.- inserção automática dos artigos fornecedores no registro, se estabelecido permite codificar os códigos artigos forecedores inseridos na ordem diretamente na tabela artigos fornecedor.- atualização automática do catálogo fornecedor, se estabelecido permite inserir e atualizar os preços no catálogo do forneecedor, presente no tab catálogos a atualizar presente nesses parâmetros, com os artigos inseridos na ordem.- atualização automática do catálogo de venda, se estabelecido permite inserir e atualizar os preços no catálogo de venda presente no tab artigos da ordem fornecedor. |
| Atributos artigo | Botão para abrir a janela atributos pelo registro artigo. |
| Expandir/Reduzir a grelha dos artigos | Permite visualizar ou esconder os tab 'Totais', 'Dados', 'Variantes' e 'lotes. |
| Subdividir as quant. em mais datas de entrega | Permite acrescentar um artigo. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document manager](/docs/guide/common/operations-with-data/document-manager)  | Gestão do armazenamento documental associado a máscara em uso. |






