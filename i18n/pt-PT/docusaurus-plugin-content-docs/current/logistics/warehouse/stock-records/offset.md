---
title: Contrapartida
sidebar_position: 5
---

Este tab é exatamente idêntico ao tab Registrações, mas resulta ativo só se a causal de depósito estabelecida no tab Registrações apresenta um depósito e uma causal de contrapartida. As causais de contrapartida são estabelecidas se quer gerir um duplo movimento de depósito, com uma só registração. Portanto é possível, na tabela das causais de depósito, estabelecer uma causal de carregamento como contrapartida de uma causal de descarregamento e vice-versa.

No tab Contrapartidas se reportam exatamente todos os dados estabelecidos dentro do tab Registrações, com a possibilidade ao usuário de modificar só alguns dos dados do cabeçalho, quais CdC, documento interno, Documento de referência, Data documento de referência e Encomenda de venda.

Os dados da linha do movimento tem de ser idênticos entre os 2 tab; o mesmo discurso para as grelhas Lotes, Números de série, Variantes, e Centros de custo de cada movimento.

Tem um caso particular cujo no tab Registrações se insere um artigo e no tab Contrapartida outros: isso acontece só quando a causal de contrapartida enganchada com a causal principal ativou o flag 'Estrutura de produtos', o flag que permite ao usuário carregar o artigo no tab Registrações (portanto utilizando a causal de carregamento) e ver a sua estrutura de produtos inserida no tab Contrapartida, dentro da qual vai estar presente uma causal de descarregamento. Obviamente pode ser gerida também o vice-versa.

Uma situação típica que pede a gestão de causais com a contrapartida enganchada é atribuível ao descarregamento automático da nota de entrega de empreiteiro, que executa o descarregamento dos materiais a entregar ao empreiteiro pelo depósito matérias-primas (ou semiacabados, dependendo dos casos), com consequente e imediato carregamento no depósito do empreiteiro dos mesmos materiais, que vão ter que ser utilizados para produzir aquilo que foi pedido através da ordem empreiteiro.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Nova registração | Botão que salva a registração criada ou as mudanças feitas e no mesmo tempo permite ao usuário inserir uma nova registração de depósito limpando todos os dados da janela já aberta.  |
| Salvar | Botão que salva a registração criada ou as mudanças feitas. |
| Inserir movimentos | Refere-se ao procedimento para inserir uma nova linha na grelha dos movimentos de depósito. |
| Cancelar movimentos selecionados | Refere-se ao procedimento que permite cancelar as linhas selecionadas na grelha dos movimentos. |
| Expandir a grelha | Refere-se ao procedimento que permite expandir em toda a tela a grelha dos movimentos de depósito, escondendo temporaneamente as grelhas abaixo. |
| Cancelar centros de custo | Refere-se ao procedimento que permite cancelar as linhas selecionadas na grelha dos centros de custo. |
| Cancelar número de série | Refere-se ao procedimento que permite cancelar as linhas selecionadas na grelha dos números de série. |
| Cancelar lotes | Refere-se ao procedimento que permite cancelar as linhas selecionadas na grelha dos lotes. |
| Importação | Refere-se ao procedimento para importar artigo de um arquivo. O arquivo tem de ser estabelecido no tab 'Importação' dos parâmetros iniciais de depósito. A pressão deste botão abre uma janela, chamada 'Importação', dentro da qual se visualizam todas as linhas presentes no arquivo numa adequada grelha. Selecionando as linhas da grelha e clicando no botão 'Importar', as mesmas linhas são inseridas na grelha dos movimentos da registração de depósito. |
| Importação do BarCode | Refere-se ao procedimento para importar artigos lendo o seu código a barras com um emulador de tastiera. A pressão desse botão abre uma janela, chamada 'Importação BarCode', dentro da qual se visualizam todas as linhas presentes no arquivo numa adequada grelha. Selecionando as linhas da grelha e clicando no botão 'Importar', as mesmas linhas são inseridas na grelha dos movimentos da registração de depósito. |
| Visualizar o estoque para o artigo | Refere-se ao procedimento que abre a janela de 'Visualização estoque' já filtrada para o artigo selecionado na grelha dos movimentos e para o depósito estabelecido no cabeçalho da registração. Se clicar no botão sem ter selecionado nenhum artigo na grelha, o procedimento abre a 'Visualização estoque' filtrada só por depósito, mas mostrando os estoques de todos os artigos presentes naquele depósito. |






