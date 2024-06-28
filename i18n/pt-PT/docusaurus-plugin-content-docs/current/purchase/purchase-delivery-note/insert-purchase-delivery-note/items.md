---
title: Artigos
sidebar_position: 4
---

O **tipo linha** oferece a possibilidade de selecionar os artigos com características abaixo:

**Artigo codificado**: são os artigos codificados no registro e podem ser contabilizados na contabilidade analítica e registrados no depósito;

**Artigo não-codificado**: são os artigos codificados no registro e podem ser contabilizados na contabilidade analítica mas não podem ser movimentados no depósito;

**Artigo despesas**: são os artigos codificados ou não-codificados resumidos em maneira distinta nos resumos dos documentos; se o artigo despesa é codificado e de interesse fiscal vai ser movimentado no depósito, se não é codificado ou não tem interesse fiscal não vai ser movimentado no depósito;

**Artigo notas**: é uma simples nota, não implica na contabilidade e no depósito;

**Artigo brinde**: o artigo brinde é gerido como um artigo codificado ou não codificado com os fins fiscais e de depósito, mas como são brindes, vai ser contado separadamente nos resumos da nota de entrega;

Esses dados podem ser inseridos automaticamente quando inseridas diretamente a classe ou a matrícula por que o tipo linha 'Artigo codificado' vai ser selecionado em automático.

**Código**: refere-se ao 'Código artigo BarCode' inserido nos Artigos, tab 'Código BarCode'. No momento em que é inserido, o programa retoma automaticamente o artigo associado com todos os dados do seu registro.

A inserção da classe ou da matrícula pode acontecer manualmente ou com a ajuda da 'Ajuda artigos' (duplo click na seção amarela) a qual vai propor todos os dados relativos inseridos no registro artigo. Depois da inserção do artigo, a sua descrição vai ser retomada automaticamente pelo registro. Se o artigo tem variantes, vai precisar selecionar a variante desejada pela caixa de combinação 'Variantes'. O lote vai ser gerado automaticamente ou o usuário pode inserir manualmente o seu código.

**Quantidade**: representa a quantidade da UM principal; pode ser inserida manualmente ou pode ser retomada pelo documento de compra considerado para a execução (por exemplo da ordem fornecedor);

**Preço**: o preço é proposto pelo catálogo inserido no registro fornecedor; o catálogo de referência para o mesmo artigo é visualizado no tab 'Totais'. Se no registro fornecedor são associados mais catálogos em cascata (ver registro clientes/fornecedores), o mesmo documento de compra poderia conter artigos de catálogo diferentes. Através do duplo click no campo 'Catálogos' (tab 'Totais') o usuário tem a possibilidade de selecionar uma oferta diferente daquela de default, pela qual vai ser retomado o preço do artigo inserido. Em ausência do catálogo, o dado proposto é o custo último retomado pelo registro artigo;

**Imposto**: o dado inserido no campo Imposto do registro fornecedor é prioritário. Se esse não está presente, vai ser proposto o valor presente no registro artigo. É um campo obrigatório;

**Faturado compras**: é proposto o dado inserido no tab 'Generalidade' do registro artigos. Se esse não está presente, não vai ser proposto nenhum dado mas no momento da contabilização da fatura vai ser considerado o valor inserido no campo 'Custo/Lucro de contrapartida predefinida' do registro fornecedor;

**Unidade de media alternativa**: é proposta a UM presente no tab UM alternativas do registro artigo com o flag de 'Default' estabelecido;

**Quantidade alternativa**: é proposto o valor relativo a UM alternativa, calculado multiplicando ou dividindo a quantidade gestional (relativa a UM principal) com o fator de conversão estabelecido no registro artigo;

**Depósito e causal**: são propostos o depósito e a causal de referência que vão aparecer automaticamente no momento do carregamento dos artigos no depósito.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as operações efetuadas. O mesmo resultado se obtém movendo o cursor numa linha diferente daquela que se quer salvar. |
| Novo artigo | Botão para inserir um novo artigo. |
| Cancelar o artigo | Botão para cancelar o artigo inserido. |
| Expandir/Reduzir a grelha dos artigos | Permite visualizar ou esconder os tab 'Totais', 'Dados', 'Variantes', 'Lotes'. |
| Importação do Barcode | Permite a importação dos artigos do BarCode. |
| Cancelar os descontos | Botão para cancelar o desconto do artigo. |
| Gestão embalagens |  |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestão do armazenamento documental associado a máscara em uso. |






