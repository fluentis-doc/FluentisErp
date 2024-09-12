---
title: Artigos
sidebar_position: 4
---

O** tipo linha** oferece a possibilidade de selecionar os artigos com características diferentes:

**Artigo codificado**: são os artigos codificados no registro e podem ser contabilizados na contabilidade analítica e registrados no depósito;

**Artigo não-codificado**: são os artigos descritivos que podem ser contabilizados na contabilidade analítica mas não podem ser movimentados no depósito;

**Artigo despesas**: são os artigos codificados ou não-codificados, e são resumidos em maneira distinta nos resumos dos documentos; se o artigo despesa é codificado e de interesse fiscal vai ser movimentado no depósito, se é não codificado ou não de interesse fiscal não vão ser movimentados no depósito;

**Artigo notas**: é uma simples nota, não incide na contabilidade e no depósito.

**Artigo brinde**: o artigo brinde é gerido como um artigo codificado ou não codificado aos fins fiscais e de depósito, mas como é um brinde, vai ser contado separadamente nos resumos da fatura; em relação o flag 'Recurso Imposto' é calculado a quantia Imposto do brinde que pode ser ou não carregado pelo cliente.

Esses dados podem ser inseridos automaticamente quando o usuário insere a classe ou a matrícula por que o tipo linha 'Artigo codificado' é selecionado em automático.

**Código**: refere-se ao código artigo BarCode inserido no 'Artigos', tab 'Código BarCode'. No momento em que é inserido, o programa retoma automaticamente o artigo associado com todos os dados do seu registro.

A inserção da classe ou da matrícula pode acontecer manualmente ou com o auxílio da 'Ajuda artigos' (duplo click na seção amarela) onde vão ser propostos todos os dados relativos inseridos no registro artigo. Depois da inserção do artigo, a sua descrição vai ser retomada automaticamente pelo registro. Se o artigo tem variantes, vai precisar selecionar a variante desejada pela caixa de combinação 'Variantes'. O lote é gerado automaticamente ou pode ser inserido o seu código.

**Variantes**: refere-se às possibilidades das variantes do artigo selecionado. A escolha da variante é útil para os artigos com essa particular configuração as quais podem ter um preço diferente daquele padrão estabelecido. De consequência, o preço do artigo com variantes pode ser diferente do preço do artigo sem variantes. Isso pode eventualmente pedir a gestão das variantes do artigo no catálogo de venda de referência;

**Unidade de medida**: é proposta a UM principal do artigo, mesmo assim o usuário tem a possibilidade de escolher uma unidade de medida alternativa;

**Quantidade**: representa a quantidade da UM principal; pode ser inserida manualmente ou pode ser retomada pelo documento de compras considerado para a execução (por exemplo pela ordem fornecedor);

**Preço**: o preço é proposto pelo catálogo inserido no registro fornecedor; o catálogo de referência para o mesmo artigo é visualizado no tab 'Totais'. O mesmo documento de compras poderia conter artigos de catálogos diferentes se no registro fornecedor foram associados mais catálogos em cascata (ver registro clientes/fornecedores). Através do duplo click no campo 'Catálogo' (tab Totais) o usuário tem a possibilidade de selecionar uma oferta diferente daquela de default, pela qual vai ser retomado o preço do artigo inserido. Em ausência do catálogo, o dado proposto é o custo último retomado pelo registro artigo;

**Imposto**: é prioritário o dado inserido no campo Imposto do registro fornecedor. Se esse não estiver, vai ser proposto o valor presente no registro artigo. É um campo obrigatório.

**Faturado de compras**: é proposto o dado inserido no tab 'Generalidade' do registro artigos. Se esse não estiver presente, não vai ser proposto nenhum dado, mas no momento da contabilização da fatura, vai ser considerado o valor inserido no campo 'Custo/Receita de contrapartida predefinida' do registro fornecedor;

**Unidade de medida alternativa**: é proposta a UM presente no tab 'UM alternativas' do registro artigo com o flag de 'Default' estabelecido;

**Quantidade alternativa**: é proposto o valor relativo a UM alternativa, calculado multiplicando ou dividindo a quantidade gestional (relativa a UM principal) com o fator de conversão estabelecido no registro artigo.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as operações efetuadas. O mesmo resultado se obtém movendo o cursor numa linha diferente daquela que se quer salvar. |
| Novo artigo | Botão para inserir um novo artigo. |
| Estorno fat. a receber | Procedimento que permite estornar as faturas a receber. |
| Modificar os faturados | Botão para modificar o tipo faturado de compras. |
| Cancelar o artigo | Botão para cancelar o artigo inserido. |
| Expandir/Reduzir a grelha dos artigos | Permite visualizar ou esconder os tab 'Totais', 'Dados', 'Variantes', e 'lotes'. |
| Importação do BarCode | Permite a impostação do BarCode. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document manager](/docs/guide/operations-with-data/document-manager)  | Gestão do armazenamento documental associado a máscara em uso. |






