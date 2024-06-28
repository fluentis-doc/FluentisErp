---
title: Parâmetros de depósito
sidebar_position: 2
---

Depois de ter selecionado o ano cujo se quer estabelecer os parâmetros na adequada grelha em cima a esquerda, se visualizam os 'Dados do ano' selecionado.

**Dados do ano**: o primeiro destes dados é a 'Data último encerramento exercício', quer dizer a data cujo foi feito o último encerramento de depósito com a retomada dos saldos (ver os adequados procedimentos). Na maioria dos casos ela corresponde com o 31-12 do ano precedente. O dia sucessivo, portanto normalmente o 1º janeiro, são inseridos as registrações de depósito de carregamento para o inventário inicial, criadas automaticamente pelo procedimento de 'Valorização depósito', através da utilização da causal de carregamento dos restantes; essa causal tem de ter o flag 'Estoques' ativado.

Para cada depósito presente na sociedade tem de estar presente uma e só uma causal de carregamento dos estoques iniciais. Os estoques carregados com aquela causal no dia de 'Abertura' do depósito representam os estoques iniciais do depósito. Todos os movimentos sucessivos a esta registração de carregamento vão ser idênticos como entradas ou como saídas de depósito se é de carregamentos ou de descarregamentos.

**Cálculo estoque para o artigo, depósito**: os estoques de depósito e portanto a visualização estoque podem ser vistas em relação os parâmetros aqui definidos; portanto se pode obter um cálculo preciso dos estoques por variante, por localização, por lote, por encomenda ou por cliente/fornecedor segundo os flag ativos.

**Como se obtém a quantidade alternativa**: pelo que se concerne o cálculo da quantidade expressa na unidade de medida alternativa, essa pode ser executada dividindo ou multiplicando a quantidade gestional para o fator de conversão em relação à opção de escolha. Este parâmetro é definido e válido para todos os artigos. O fator de conversão é estabelecido a nível de registro artigos para cada unidade de medida alternativa estabelecida no registro.

**Modificar as registrações de depósito associadas com outros documentos**: permite modificar as registrações de depósito associadas com as notas de entrega de compra, faturas de compra, notas de entrega de venda, faturas de venda, etc. A ausência deste flag comporta o fato que os documentos de depósito criados na base de documentos de compra ou de venda não podem ser modificados. Neste caso vai aparecer uma mensagem dizendo que a mudança não é possível.

Em relação à mudança das registrações de depósito de documentos, precisa ter em mente que é possível escolher se modificar a quantidade, modificar o preço, modificar ambas ou nenhumas. Isto significa que quando um documento já registrado no depósito, por exemplo uma nota de entrega de compra, é modificado, a aplicação controla se o flag Modificar quantidade e o flag Modificar os preços são ativos ou não; em caso afirmativo a modifica executada no documento se transmite também na registração de depósito cujo documento é associado, diversamente a modifica do documento não intervêm na relativa registração de depósito. É possível ativar também um só dos flag.

**Valorizar por depósito**: permite decidir se o encerramento de depósito tem que pegar em consideração os custos médios (os últimos, ou o padrão, de acordo com qual tipo de custo se quer utilizar para o encerramento de depósito) associados com as movimentações efetuadas no curso do ano de cada depósito. Isto significa que se um artigo subiu movimentações em 3 depósitos, por exemplo, no caso de flag ativo vai ter 3 linhas diferentes no histórico de depósito para o ano pela qual se executa o encerramento, com provavelmente 3 custos médios e 3 custos últimos diferentes.

**Gestão lotes e números de série**: permite decidir se tenham que ser consentidos os movimentos de depósito a lotes e/ou a números de série. Se esse flag é desativado, todos os outros flag presentes no banco de dados que gerem as opções relativas a lotes e números de série resultam ineficazes.

**Lotes e NS obrigatórios**: se ativado, obriga o usuário a inserir em todos os documentos de compra e de venda o lote do artigo inserido no mesmo documento, sempre que o artigo seja gerido a lotes ou a números de série.

**Gestão tamanho e cor**: permite ativar ou não a possibilidade de gerir os artigos através da impostação 'Tamanho e cor', que permite estabelecer, em alguns documentos, uma grelha matricial aonde inserir com uma certa facilidade operativa, as quantidades de artigo a gerir no mesmo documento.

**Permitir o estoque negativo**: permite mandar abaixo de zero o estoque de um artigo. Se o flag não é ativado, o sistema sempre impede de salvar as registrações de depósito ou as operações de descarregamento que mandam para baixo de zero o estoque de qualquer artigo. Se precisa que se o artigo é gerido a lotes ou a números de série, ativar esse flag não significa ter a possibilidade de mandá-lo abaixo de zero, por que o artigo gerido a lotes ou a números de série nunca pode ser descarregado se o estoque do lote ou do número de série que se quer descarregar não existe.

**Permitir a mudança das contas dos artigos já utilizados**: permite modificar os dados de 'Faturado de compras' e 'Faturado de vendas' de artigos que já subiram movimentações de depósito. Se o flag é desativado, essa mudança é obviamente impedida.

**Obrigação de depósito para artigos geridos a lotes**: impede o usuário de inserir, nos documentos de descarregamento de artigos geridos a lotes, o depósito e a causal de descarregamento antes de selecionar o lote a descarregar. Diversamente o usuário pode decidir de descarregar, na mesma linha artigo do documento, um lote de um depósito e um outro lote de um outro depósito, não tendo mais a necessidade de indicar por qual depósito vão ser descarregados os lotes a nível de linha documento.

**Data início período e data fim período**: permitem ao usuário definir o período dentro o qual podem ser inseridas e/ou modificadas e/ou canceladas as registrações de depósito. Normalmente se estabelece como data de início período uma data precedente em relação a data de último encerramento do depósito, e como data fim período o final do ano solar em curso.

**Duplicar o artigo numa outra sociedade**: este flag permite decidir em qual outras sociedades podem ser duplicados os artigos utilizando a função 'Duplicar artigos', presente no módulo Depósito.






