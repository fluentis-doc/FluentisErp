---
title: Tab Geral
---

**Matérias-primas**: são estabelecidos o depósito e a causal que tem de ser considerados pelos procedimentos que descarregam as matérias primas ou o nível imediatamente abaixo ao artigo objeto da ordem de produção que por sua vez não tem outros subníveis;**WIP**: são estabelecidos o depósito de Work in Progress a relativa causal e também as causais relativas ao carregamento dos materiais, a consumação dos materiais, aos retornos não utilizados, a sobra dos materiais, ao carregamento dos semiacabados, a consumação dos semiacabados. Quando são estabelecidos os dados relativos ao depósito WIP, o tipo de retirada do material que tem de transitar por este depósito pode ser estabelecido como 'Manual'; neste modo, quando a ordem de produção do produto acabado ou do semiacabado é libertado, o material contido é transferido do depósito desenhado com 'Matérias-primas' ao depósito WIP. Esse material é depois descarregado durante o aviso de produção da última fase de produção do artigo da ordem de produção, ou durante a fase de produção cujo material foi associado. Diversamente, se o tipo de retirada do material é 'Com lista', enquanto o deslocamento do material ao depósito WIP acontece no mesmo modo em relação com a impostação com a retirada manual, o descarregamento pelo WIP acontece através do procedimento da Lista de retirada;

**Semitrabalhados**: são estabelecidos o depósito e a relativa causal que tem de ser consideradas pelos procedimentos que movimentam os semitrabalhados ou o nível imediatamente abaixo ao artigo objeto da ordem de produção e que por sua vez não tem outros subníveis. Com essas impostações se movimenta também o produto acabado (portanto o artigo objeto da ordem de produção), se com ciclo de produção a mais fases, só na última fase. A casa da 'Denúncia semitrabalhado última fase' vai estabelecer se quer que o semitrabalhado seja carregado, pela última fase de produção da sua ordem de produção, no depósito diferente ou com uma causal diferente daquele padrão. **Semitrabalhados WIP**: são estabelecidos o depósito e a relativa causal que tem de ser consideradas pelos procedimentos que movimentam os semitrabalhados ou o nível imediatamente abaixo ao artigo objeto da ordem de produção e que por sua vez não tem outros subníveis. Com essas impostações se movimenta também o produto acabado (portanto o artigo objeto da ordem de produção), se com ciclo de produção a mais fases. Portanto as causais aqui estabelecidas são consideradas só quando o semitrabalhado passa de uma fase a uma outra que não é a última, por que para a última se considera o depósito e a causal estabelecidos na seção semitrabalhados;

**Produtos acabados**: são estabelecidos o depósito e a relativa causal que tem de ser consideradas pelos procedimentos que carregam os produtos acabados, portanto o artigo objeto da ordem de produção;

**Sobras**: são estabelecidos o depósito e a relativa causal que tem de ser consideradas quando o usuário insere uma quantidade de sobra na linha de aviso de produção ou na linha do material utilizado, sempre dentro do aviso de produção; O flag **Gestão automática dos lotes e dos números de série**, se ativo, permite ao usuário ver propostos em automático os lotes e/ou os números de série que são utilizados no curso da produção, diretamente dentro das adequadas grelhas colocadas em relação à grelha dos materiais utilizados do aviso de produção. Diversamente, o usuário vai poder estabelecer manualmente seja os lotes, seja os números de série dos artigos utilizados que tenham este tipo de gestão; O flag **Determinação tempos em automático nos avisos**, se ativo, permite ao usuário ver calculados automaticamente o tempo máquina e o tempo operário em relação aos horários dos avisos. Diversamente, o usuário vai ter que estabelecer manualmente os tempos na linha do aviso de produção;

O flag **Divisão ordem se os lotes materiais não são suficientes**, se ativo, permite ao usuário fazer em modo que o procedimento de Libertação das ordens de produção controle se as quantidades de material a descarregar automaticamente (portanto só se de tipo retirada automática ou manual mas com a gestão WIP) sejam suficientes no depósito cujo devem ser retiradas: se não foram, o procedimento divide a ordem de produção em 2 ordens diferentes que vão ter o mesmo número/ano mas lote diferente (o primeiro vai ter o lote 0, o segundo o lote 1; o primeiro vai ser aquele cujo materiais presentes no depósito são suficientes);

O flag **Gestão dupla unidade de medida**, se ativo, permite ao usuário gerir a dupla unidade de medida dentro dos avisos de produção, portando seja para os artigos produzidos seja para os materiais utilizados;

O flag **Proposta automática UM alternativa**, se ativo, permite ao usuário ver proposta automaticamente a unidade de medida alternativa estabelecida para o artigo dentro do aviso de produção. Normalmente, se é ativo o flag Gestão dupla unidade de medida, se ativa por comodidade esse também;

O flag **Mesmo lotes para sobras/sobras materiais** permite, se ativos, decidir que o lote carregado no depósito sobras é idêntico ao lote que foi produzido (em caso de sobra de produto acabado, portanto no caso do primeiro dos 2 flag) ou ao lote que foi utilizado (no caso de sobra do material, portanto no caso do segundo dos 2 flag);

O flag **Trocar data de encomenda no câmbio da data da ordem de produção** se ativo, permite ao usuário fazer em modo que na troca da data fim da ordem de produção seja modificada automaticamente também a data fim da encomenda, sempre que o artigo objeto da ordem de produção seja o mesmo objeto da encomenda de produção; portanto a ordem de produção tem de ser de nível 0;

O flag **Cálculo custo de produção para progressos**, se ativo, permite ao usuário fazer em modo que enquanto se registram os progressos de produção o custo da registração de depósito aumenta cada vez o custo efetivo calculado de acordo com o tempo efetiva declarado no aviso multiplicado pelo custo horário de máquina e/ou grupo mão-de-obra, portanto para o custo horário do centro de trabalho utilizado;

A seção **Folhas de trabalho geridas por** permite, através da ativação de uma dos botões de opções, escolher o tipo de agrupamento a utilizar durante a imprensa da folha de trabalho. Se refere a uma proposta, que pode ser modificada dentro da máscara de imprensa da folha de trabalho;

A seção **Período de análise**, permite, através da ativação de uma dos botões opção, escolher o período de filtragem das ordens de produção que vão ter que ser visualizados na janela da imprensa da folha de trabalho (semanal, cotidiana ou cada 2 dias);

A seção **Valorização materiais a custo** permite, através da ativação de um dos botões de opção, escolher o tipo de custo para a valorização dos materiais (último, médio ou padrão);

O flag **Associar o lote para a lista de retirada** se ativa são associados em automático os lotes nas retiradas de produção criadas pela lista de retirada materiais;

O flag **Controle progresso**, se ativo, na mudança da quantidade de aviso, aparece uma mensagem que pede se recalcular ou não os materiais associados ao aviso.






