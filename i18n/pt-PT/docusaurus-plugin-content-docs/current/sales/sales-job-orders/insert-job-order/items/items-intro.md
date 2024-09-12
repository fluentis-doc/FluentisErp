---
title: Artigos
sidebar_position: 1
---

O **tipo linha** oferece a possibilidade de selecionar os artigos com características diferentes:

**Artigo codificado**: são os artigos codificados no registro e podem ser contabilizados na contabilidade analítica e registrados no depósito;

**Artigo não codificado**: são os artigos descritivos que podem ser contabilizados na contabilidade analítica, mas não podem ser movimentados no depósito;

**Artigo despesas**: são os artigos codificados ou não codificados e são resumidos em modo distinto nos resumos dos documentos, se o artigo despesa é codificado e de interesse fiscal vai ser movimentado no depósito; se é não codificado ou não de interesse fiscal não vão ser movimentados no depósito;

**Artigo notas**: é uma simples nota, não grava na contabilidade e no depósito.

Estes dados podem ser inseridos automaticamente quando o usuário insere diretamente a classe ou a matrícula por que o tipo linha 'artigo codificado' é selecionado em automático.

A inserção da classe ou da matrícula pode acontecer manualmente ou com o auxílio da 'Ajuda artigos' (duplo click na seção amarela) a qual vai propor todos os dados relativos inseridos no registro artigo. Após a inserção do artigo, a sua descrição vai ser retomada automaticamente pelo registro. Se o artigo há variantes, vai ser necessário selecionar a variante desejada pela caixa de combinação 'Variantes'.

**Quantidade**: representa a quantidade da UM principal; pode ser inserida manualmente ou pode ser retomada pelo documento de compras considerado para a execução;

**Preço**: o preço é proposto pelo catálogo inserido pelo registro cliente; o catálogo de referência para o mesmo artigo é visualizado no tab 'Total'. O mesmo documento de compras poderia conter artigos para os catálogos diferentes, se no registro cliente foram associados mais catálogos em cascata (controlar o registro clientes/fornecedores). Através do duplo click no campo Catálogos (tab 'Totais') o usuário tem a possibilidade de selecionar uma oferta diferente daquela de default, pela qual vai ser retomado o preço do artigo inserido. Em ausência do catálogo, o dado proposto é o preço de venda retomado pelo registro artigo;

**Imposto**: é prioritário o dado inserido no campo imposto pelo registro cliente. Se este não está presente, vai ser proposto o valor presente no registro artigo. É um campo obrigatório;

**Faturado de vendas**: é proposto o dado inserido no tab 'Generalidade' do registro artigos;

**Variantes**: se refere as variantes do artigo selecionado, se esses existem. A escolha da variante é útil para os artigos com esta configuração particular que podem ter um preço diferente daquele padrão estabelecido. De consequência, o preço do artigo com as variantes pode ser diferente do artigo sem variantes. Isso pode pedir eventual gestão das variantes do artigo no catálogo de vendas de referência;

**Unidade de medida**: é proposta a UM principal do artigo, mas o usuário tem a possibilidade de escolher uma unidade de medida alternativa;

**Unidade de medida alternativa**: é proposta a UM presente no tab UM alternativas do registro artigo com o flag de default estabelecido;

**Quantidade alternativa**: é proposto o valor relativo a UM alternativa, calculado multiplicando ou dividindo a quantidade de gestão (relativa a UM principal) com o fator de conversão estabelecido no registro artigo.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as operações efetuadas. O mesmo resultado se obtém movendo o cursor numa linha diferente daquela que se quer salvar. |
| Novo artigo | Botão para inserir um novo artigo. |
| Cancelar artigo | Botão para cancelar o artigo inserido. |
| Novo filho | Para as encomendas configuradas com estrutura hierárquica na <Tabelas/Vendas/Tipo encomendas vendas> se podem inserir artigos nesta estrutura. |
| Novo irmão | Para as encomendas configuradas com estrutura hierárquica na <Tabelas/Vendas/Tipo encomendas vendas> se podem inserir artigos nesta estrutura. |
| Expandir/Reduzir a grelha dos artigos | Permite visualizar ou esconder os tab 'totais', 'dados', 'variante', 'lotes', 'faturado' e 'pedido de intervenções'. |
| Cancelar descontos | Botão para cancelar o desconto do artigo inserido. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document manager](/docs/guide/operations-with-data/document-manager)  | Gestão do armazenamento documental associado a máscara em uso. |






