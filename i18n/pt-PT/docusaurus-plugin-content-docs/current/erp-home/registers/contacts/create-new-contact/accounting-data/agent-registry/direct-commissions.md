---
title: Comissões diretas
sidebar_position: 4
---

A janela é fundamental para definir quais são os critérios de individuação das porcentagens de comissões.

Os primeiros dois campos permitem definir uma porcentagem geral e uma quantia fixa: a porcentagem geral vai ser utilizada só se na seção da direita, onde se definem em ordem de prioridade os critérios de valorização, é presente a tipologia '1 - Registro agente'.

A lista das opções possíveis é a seguinte:

**Registro agente**: em relação à porcentagem inserida no registro do mesmo agente;

**Registro cliente**: em relação à porcentagem que o agente tem no registro cliente;

**Área cliente**: em relação à área associada com o cliente;

**Catálogo cliente**: em relação os catálogos aplicáveis aos clientes (portanto catálogos gerais e/ou catálogos personalizados);

**Classe**: em relação à classe do artigo vendido;

**Artigo**: para cada artigo se define a porcentagem do agente em utilização;

**Catálogo-Classe**: em relação à combinação da classe artigo nos vários catálogos;

**Catálogo-Classe-Artigo**: em relação à combinação de cada artigo nos vários catálogos;

**Tipo artigo**: em relação o tipo de artigo;

**Reg. cliente-classe**: em relação à combinação da classe artigo para cada registro cliente;

**Reg. cliente-classe-artigo**: em relação à combinação da classe artigo para cada artigo;

**Faixas de desconto**: em relação o tipo de faixa de desconto (Home > Tabelas > Vendas > Gama de desconto), quer dizer a associação com os descontos que o mesmo agente aplica no cliente. Na sua vez, as faixas de desconto podem depender das classes artigo, dos catálogos, do tipo artigo, da característica artigo, da categoria produto ou ser uma estrutura de escalões fixos.

A logica de individuação da comissão a aplicar, portanto, depende das prioridades atribuídas às tipologias que se quer utilizar: se foram, por exemplo, presentes com prioridade 1, 2, 3 as tipologias '6 - artigo', '4 - catálogo cliente' e '1 - registro agente' o sistema iria avaliar, na inserção do artigo, se está na lista dos artigos pelas quais o agente tem uma porcentagem de comissões estabelecidas (se é entre esses se pega essa % de comissão), se não está entre esses vai passar a avaliar se a linha tem um preço que deriva de um catálogo particular (p.ex.: catálogo promocional) pela qual o usuário tem uma comissão definida (se é entre esse se prega essa % de comissão), se não é entre esses se vai utilizar a porcentagem fixa do registro agente.

Para algumas dessas opções precisa apertar o botão 'Detalhe porcentagens selecionadas...' com o objetivo de abrir a máscara de definição das combinações válidas para o mesmo agente. Nessas máscaras, que dependem do tipo de impostação de partida (p.ex.: se fala de artigos vai ter o campo de definição do artigo, se fala se catálogos vai ter o campo para o catálogo, etc...), é importante definir a gama de datas de validade dessa impostação: para o mesmo artigo, por exemplo, poderiam ter mais porcentagens de comissão com gama de datas de validade diferentes.

Precisa de uma particular explicação o detalhe de comissão definido na Gama desconto: é importante definir qual é a gama de desconto (como definido na tabela) a aplicar no agente e se as comissões vão ser aquelas padrão inserida nesse ou uma porcentagem personalizada para o agente nos escalões de desconto definidos para aquela gama; em segundo lugar, é fundamental dizer se o cálculo do desconto efetivo aplicado é definido em relação o preço do registro artigo, ou em relação a relação entre o preço bruto-líquido de cada linha artigo (se não for possível automatizar as comissões agentes quando se criam documento diretamente nos preços líquidos).

Ulterior anotação geral que se refere os catálogos: vão ser associados os específicos catálogos, não uma tipologia de catálogo. Se no módulo dos catálogos de venda se cria um novo catálogo do mesmo tipo precedente mas com uma nova data início validade, esse vai ser de novo associado com o registro agente com as suas porcentagens de comissão.

Na máscara tem um outro botão que permite inserir as impostações de um outro agente, selecionado pela ajuda agentes que se abre, naquele da utilização.

RIBBON BAR: representa o menu do módulo em questão, ou seja, a área na qual efetuar algumas ações. A lista de possíveis funcionalidades é sucessivamente representada:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Salvar agente | Botão para salvar as mudanças feitas no agente. |
| Cancelar a comissão | Botão para cancelar o detalhe das comissões selecionadas. |






