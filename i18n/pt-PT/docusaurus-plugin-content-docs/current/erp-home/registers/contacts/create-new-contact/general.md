---
title: Dados comuns
sidebar_position: 3
---

Esta ficha representa o detalhe dos dados legais do registro em utilização. Todos os elementos da parte superior da máscara são comuns, como os dados da rubrica, para todas as sociedades ativas no banco de dados em utilização. Só a parte de atribuição das subcontas contábeis na grelha abaixo é específica da sociedade em uso e permite definir quais são as suas peculiares características administrativas/comerciais.

**Razão social** é o campo dentro da qual definir o nome do objeto: vai ser atribuído a todas as subcontas contábeis definidas para o registro em utilização e vai ser reportado através desse em cada imprensa contábil/documental.

Na base do texto aqui inserido, saindo do campo, o gestional vai gerar automaticamente um 'Sobrenome', quer dizer um código unívoco breve identificativo pelo mesmo registro: isso é modificável pelo usuário, mas tem de ser único na lista de todos os registros. 

Visto que a pesquisa do sujeito (se contábil) vai ser efetuada tipicamente na base da razão social, esse campo não é particularmente relevante.

O flag **Contábil**, presente de default nas novas inserção, vai permitir definir os detalhes de gestão administrativa/comercial para as subcontas associadas com o registro em utilização.

**Endereço**: é o endereço da sede legal;

**CPF**: é o cadastro de pessoas físicas; pode ser escrito manualmente ou derivar da seleção do município (campo sucessivo) através da ajuda dos município;

**Município**: campo editável dentro da qual inserir o município da sede legal. É presente uma ajuda municípios para procurar na lista alguns municípios assim como definidos na tabela (Home > Tabelas > Impostações gerais);

**Província**: campo editável dentro da qual inserir o código da província. É presente uma ajuda províncias para procurar na lista alguns municípios assim como definidos na tabela (Home > Tabelas > Impostações gerais);

**Notas**: campo livre dentro da qual é possível definir, por exemplo, o texto completo do endereço a reportar na imprensa dos documentos, sem ter que combinar o endereço + CPF + município + província;

**Nação**: código da nação para o registro em utilização, assim como definido na tabala (Home > Tabelas > Impostações gerais). Precisa lembrar que esse campo é a base para a individuação dos sujeitos presentes nas Nações com fiscalidade privilegiada (Home > Tabelas > Impostações gerais > Nações livro preto), para a relativa declaração fiscal da área administrativa;

**Região**: código da região de pertença (Home > Tabelas > Impostações gerais);

**Língua**: código da língua (Home > Tabelas > Impostações gerais) de referência para as comunicações endereçadas no registro em utilização. É possível gerar uma reportística automaticamente em língua na base do dicionário definido no ARM (Application Resource Manager);

**Data de nascimento**: campo não mais em utilização. Se devolve ao parágrafo 'Pessoas de referência' do presente documento;

**Partida Imposto**: campo composto pelo código ISO internacional da nação (definido na mesma tabela Nações) e pela relativa partida Imposto. O campo é sujeito ao teste de honestidade do carácter de controle para as partidas Imposto italianas (teste executado na saída do campo ou manualmente ou com o botão sucessivo);

**Código fiscal**: campo para a inserção do código fiscal do sujeito;

**Pessoa física/jurídica**: indica se o sujeito é privado ou não;

**Telefone**: campo para a inserção do telefone principal do contato;

**Fax**: campo para a inserção do fax principal do contato;

**Modem**: campo para a inserção do número de modem do contato;

**Telex**: campo para a inserção do número de telex do contato;

**Http**: campo para a inserção do site web do contato;

**E-mail**: campo para a inserção do endereço e-mail de default do contato;

**Data últ. variação**: campo que visualiza a data do último salvamento efetuado para o registro em utilização;

**Data fim validade**: campo para bloquear a utilização do registro em uso. Uma vez estabelecida essa data, o sistema vai perguntar se atribuir essa fim validade em todas as subcontas contábeis associadas com o mesmo registro; em nenhum, numa só sociedade em uso, em todas as sociedades ou se anular a mudança;

**Código EDI**: código de identificação do registro para o arquivo EDI;

**Número interno**: número interno para o arquivo EDI;

**Nº reg. autotransp.**: para os registros relativos aos transportadores, é o código do sujeito no registro dos autotransportadores;

Na seção **Acesso Web** é possível habilitar o acesso através da Internet Explorer do aplicativo, habilitando o registro e atribuindo o nome usuário e a password de acesso.

Na seção inferior é presente a grelha com a lista das subcontas contábeis associadas com o registro em utilização: esses vão compartilhar, portanto, os mesmos dados comuns gerais. A inserção prevê a identificação do tipo conta registro a criar (cliente, fornecedor, banco e agente) e na base disso, pelos parâmetros de contabilidade geral, é proposta a conta associada com o próximo número de subconta. Se estiver presentes mais contas para o tipo conta selecionado, não vai ser proposta nenhuma conta e vai ser tomada conta pelo usuário a sua indicação (através da ajuda das contas eventualmente). Elementos de despesa, derrogação, descrição2 e descrição 3 são dados estatísticos ou de completamento.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar | Botão para salvar as mudanças feitas no registro em utilização. |
| Abrir a gestão | Botão para a gestão de detalhe da subconta contábil selecionada. Em relação ao tipo de conta associada (cliente, fornecedor, banco e agente) vai se abrir uma máscara com características específicas, assim como detalhado abaixo nesse documento. |
| Inserção conta | Botão para posicionar o cursor na inserção de uma nova linha de conta/subconta para o registro em utilização. |
| Cancelar | Botão para cancelar a subconta selecionada. O cancelamento vai ser permitido se e só se não estiver presentes referências no programa da mesma subconta. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestão do documento. Se invia para o documento específico. |






