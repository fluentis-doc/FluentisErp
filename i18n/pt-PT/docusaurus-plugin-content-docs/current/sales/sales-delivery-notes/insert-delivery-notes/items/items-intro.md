---
title: Artigos
sidebar_position: 1
---

O **tipo de linha** oferece a possibilidade de selecionar artigos com características diversas:

**Artigo codificado**: são os artigos codificados no registro e podem ser contabilizados na contabilidade analítica e registrados no depósito;

**Artigo não codificado**: são artigos descritivos que podem ser contabilizados na contabilidade analítica mas não podem ser movimentados no depósito;

**Artigo despesas**: são os artigos codificados ou não codificados e são resumidos em modo distinto nos resumos dos documentos, se o artigo despesa é codificado e de interesse fiscal será movimentado no depósito, se é não codificado ou de interesse fiscal não serão movimentados no depósito;

**Artigo notas**: é uma simples nota, não incide na contabilidade e no depósito;

**Artigo brinde**: o artigo brinde é gerido como um artigo codificado ou não codificado aos fins fiscais e de depósito mas sendo uma oferta é contado separadamente nos resumos da fatura, e de acordo com o flag ‘Compensação do imposto' é calculado a quantia do imposto de brinde pago pelo cliente ou não. Esses dados podem ser inseridos automaticamente quando inseridas diretamente a classe ou a matrícula por que o tipo linha ‘artigo codificado' é selecionado em automático.

**Código**: se refere ao código inserido nos Artigos, tab ‘Código de barra'. No momento em que este é inserido, o programa recupera automaticamente o artigo associado, com todos os dados do seu registro.

A inserção da classe ou da matrícula pode acontecer manualmente ou com a ajuda da ‘Ajuda artigos' (duplo click na seção amarela) que vai propor todos os dados relativos inseridos no registro artigo. Depois da inserção do artigo, a sua descrição vai ser retomada automaticamente pelo registro. Se o artigo há variantes, vai precisar selecionar a variante considerada pela caixa de combinação ‘Variantes';

**Unidade de medida**: é proposta a UM principal, mas o usuário tem a possibilidade de escolher uma unidade de medida alternativa;

**Variantes**: se refere a eventuais variantes do artigo selecionado. A escolha da variante é útil para os artigos com esta configuração particular, que podem tem um preço diferente daquele padrão estabelecido. Portanto, o preço do artigo com variantes pode ser diferente do preço do artigo sem variantes. O que pode pedir, eventualmente, a gestão das variantes do artigo no catálogo de venda de referência;

**Quantidade**: representa a quantidade da UM principal; pode ser inserida manualmente ou pode ser retomada pelo documento de venda considerado para a execução (por exemplo pela ordem cliente);

**Preço**: o preço é proposto pelo catálogo inserido no registro cliente; o catálogo de referência para o mesmo artigo é visualizado no tab ‘Totais'. O mesmo documento de venda poderia conter artigos dos catálogos diferentes se no registro cliente são associados mais catálogos em cascata (ver registro clientes/fornecedores). Através um duplo click no campo ‘Catálogos' (tab ‘Totais') o usuário tem a possibilidade de selecionar uma oferta diferente daquela de default, que vai ser retomado o preço do artigo inserido. Em ausência do catálogo, o dado proposto é o preço de venda retomado do registro artigo;

**Imposto**: é prioritário o dado inserido no campo ‘Imposto' do registro cliente; se este não está presente, é proposto o valor presente no registro artigo. É um campo obrigatório;

**Faturado de venda**: é proposto o dado inserido no tab ‘Generalidade' do registro artigos. Se este não está presente, não vai ser proposto nenhum dado mas no momento da contabilização da fatura, vai ser considerado o valor inserido no campo ‘Custo/Receita de contrapartida predefinido' pelo registro cliente ou vai ser gerada uma mensagem de erro;

**Unidade de medida alternativa**: é proposta UM presente no tab UM alternativas do registro artigo com o flag de ‘default' estabelecido;

**Quantidade alternativa**: é proposto o valor relativo a UM alternativa, calculado multiplicando ou dividindo a quantidade gestional (relativa a UM principal) com o fator de conversão estabelecido no registro artigo.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efeituar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as operações efetuadas. O mesmo resultado se obtém movendo o cursor em uma linha diferente daquela que se quer salvar. |
| Novo artigo | Botão para inserir um novo artigo. |
| Cancelar artigo | Botão para cancelar o artigo inserido. |
| Várias - Procurar os últimos preços | Permite procurar as condições de venda para o artigo nos documentos de venda precedentes e permite de retomar o preço e o desconto. |
| Abrir a disponibilidade | Botão para abrir a 'Disponibilidade artigo'. |
| Expandir/Reduzir a grelha dos artigos | Permite visualizar ou esconder os tab 'Totais', 'Dados', 'Variante', e 'Lotes'. |
| Importação artigos | Permite a importação dos artigos de um documento. |
| Importar código de barras | Permite a importação do código de barras. |
| Registrações de depósito | Permite acrescentar um artigo de tipo nota das registrações de depósito. |
| Atributos artigo | Botão para abrir a janela atributos pelo registro artigo. |
| Scan | Permite acrescentar um artigo. |
| Cancelar desconto | Permite cancelar o desconto associado a um artigo. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Document manager](/docs/guide/operations-with-data/document-manager)  | Gestione dell'archiviazione documentale associata alla maschera in uso. |






