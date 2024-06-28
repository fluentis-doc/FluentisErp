---
title: 分组模型的管理
sidebar_position: 6
---

分组模型是属于同一数据库的所有公司的共同因素。因此，在所有的公司内，分组模型的结构是可见的。每个公司的特点是会计科目表（成本中心/利润中心）的结构。通过本方式用户可以创建一个再分组的集团的合并财务报表。

创建新模型的程序需要只三个因素：重新分类的类型、模型的代码（由十个字母/数字组成的）以及模型的说明。本三个因素决定了之后，重新分类的按钮开始工作。通过“插入根节点”的按钮，用户可以创建结构的前三层次，通过随后的“插入节点”用户可以添加与某个结构层次有关的子层次。每个结构的层次具有某个代码（字母数字的）以及说明：本情况的特点是代码与说明的结合（例如，欧洲经济共同体的合并财务报表的不同部分有更多A层次）。下列的部分介绍与这些代码可联系起来的层次类型的细节，仅当层次不包括价值的公式（“子级的总和”或者“表达”），用户可以删除层次。

功能导航栏：功能导航栏包含格式菜单，在这里可以执行相关过程的操作。包含的功能如下表：



| RibbonFunction | RibbonMeaning |
| --- | --- |
| 新模型 | 用于创建分组的新模型 |
| 搜索连续的节点 | 用于搜索属于连续节点的文章 |
| 搜索之前的节点 | 用于搜索属于之前节点的文章 |
| 插入根节点 | 用于创建新的本来层次，无论选择的层次 |
| 插入节点 | 用于创建属于某个层次的子层次 |
| 删除节点 | 用于删除某个节点。仅当模型公式不利用节点，用户可以删除节点 |
| 增加选项卡 | 用于增加模型树形 |
| 减少选项卡 | 用于减少增加模型树形 |
| 展开节点 | 用于打开选中节点的层次 |
| 缩小节点 | 用于关闭某个节点的层次 |
| 删除明细账目 | 用于删除明细账目、成本/利润中心或者某个节点的细节网格包含的作业单 |
| 搜索缺失的明细账目 | 用于打开某个搜索明细账目的掩码。掩码搜索的明细账目不属于重新分类的节点。请按照a应用 |
| 搜索双重明细账目 | 用于打开某个搜索明细账目的掩码。掩码搜索的明细账目很多次被插入到重新分类中。请按照b 应用 |
| 插入多个明细账目 | 用于打开一个帮助账户，选择多个明细账目是启用的 |

APPLICAZIONI


 1. La maschera ricerca sottoconti mancanti consente di ricercare e stampare i sottoconti non inseriti in nessun punto del modello di riclassificazione. In particolare, se è stato inserito il generico conto, non saranno visualizzati i suoi sottoconti pur se questi non sono specificatamente inseriti nel modello stesso
 2. La maschera ricerca sottoconti doppi consente di ricercare e stampare la lista dei sottoconti che sono stati inseriti in più punti del modello. In particolare, se è stato inserito il generico conto e un suo sottoconto, questo sarà visualizzato in quanto considerato sia nel totale che come dettaglio

**A** - Il livello sottoconto è dedicato alla valorizzazione dei dati di contabilità generale, secondo i dettagli della struttura del piano dei conti della società.

Innanzi tutto, il **Tipo del dato** può essere ‘Valuta' o ‘Numero': nel primo caso il livello visualizzerà un valore monetario con il simbolo e relativi decimali dalla divisa della società; nel secondo caso, il livello visualizzerà un generico valore numerico arrotondato al numero di decimali impostato nel campo successivo.

**Inversione del segno del nodo selezionato** consente di invertire i segni negativi in positivi e viceversa: nei riclassificati di ERP qualsiasi dato con saldo dare sarà visualizzato con segno positivo, l'avere con segno negativo. Attraverso questo flag, quindi, si potranno visualizzare totali positivi per livelli che per natura hanno saldo avere (passività, ricavi). Attenzione che questa impostazione ha un'influenza determinante sul risultato delle sommatorie e delle espressioni in genere. L'inversione del segno è applicato al risultato del livello, non ai dettagli (sottoconti, cdc, cdp, commesse) che lo valorizzano: questi continueranno ad avere il segno del saldo (vedi oltre in questo documento per l'inversione dei segni dei sottoconti).

**Da stampare** indica se il livello va riportato in stampa o meno.

La sezione **Natura raggruppamento** consente di impostare i tipi di conto che si potranno assegnare a questo livello: in sostanza, all'atto dell'inserimento del sottoconto sarà applicato un filtro per tipo conto già limitato a quanti presentano flag coerenti con l'impostazione stessa. Ad esempio, se la natura è ‘Patrim. attivo', sarà possibile inserire i tipi conto che hanno questo flag in tabella: tipicamente l'attivo, i clienti e le banche. Nel caso in cui si modifichi questa impostazione con sottoconti già presenti nel livello, all'atto del salvataggio della modifica sarà richiesto se cancellare o meno i sottoconti non coerenti.

La griglia ‘Conti' consente di definire la lista dei conti e/o sottoconti che andranno a valorizzare questo livello del modello. Per prima cosa è da chiarire che non è consentito l'inserimento dello stesso conto o sottoconto con lo stesso tipo saldo nello stesso livello, mentre questo può essere inserito in altri punti del riclassificato senza alcun vincolo. È consentito l'inserimento del solo conto (mastro) generico: il caso tipico è il conto generico che contiene i sottoconti di anagrafica, senza dettagliare la lista dei clienti/fornitori nel modello che causerebbe la necessità di un continuo allineamento dei vari modelli.

Il tipo di saldo della singola riga di conto o sottoconto prevede le seguenti possibilità: ‘Generale' (sarà inserito il saldo del sottoconto indipendentemente dal suo segno; nel caso di conto generico, sarà inserita la somma dei saldi dei sottoconti appartenenti a quel conto), ‘Dare' (sarà inserito il saldo del sottoconto solo se questo ha segno dare; nel caso di conto generico, sarà inserita la somma dei saldi dare dei sottoconti appartenenti a quel conto), ‘Avere' (sarà inserito il saldo del sottoconto solo se questo ha segno avere; nel caso di conto generico, sarà inserita la somma dei saldi avere dei sottoconti appartenenti a quel conto), ‘Incremento' (per il sottoconto o conto sarà calcolato il valore come differenza tra la chiusura infrannuale del riclassificato e un'altra chiusura di riferimento: questa tipologia è utile in caso di analisi per flussi).

L'ultimo flag presente in griglia è denominato **Inv. col.**: significa che, sul sottoconto selezionato, il segno del saldo sarà invertito. Può tornare utile, ad esempio, per detrarre dal saldo di un conto il valore di un suo sottoconto.

L'inserimento, in questa griglia, può essere effettuato con due metodologie: il caricamento direttamente in griglia, digitando il codice o attraverso l'help conti che consente la selezione di un unico record, oppure l'uso del pulsante ‘Inserimento multiplo sottoconti' per avere un help conti con la selezione multipla attiva.

Per concludere, nella gestione di modelli basati sui sottoconti sono particolarmente utili due pulsanti di gestione della maschera: visualizza sottoconti mancanti e visualizza sottoconti doppi. Questi due vanno a presentare all'utente due liste particolarmente interessanti in configurazione del modello: una lista di conti/sottoconti che non si sono inseriti in nessun livello del riclassificato, una lista di conti/sottoconti che sono stati inseriti più volte in livelli differenti, con il relativo tipo saldo associato.

**B** - Il livello somma dei figli è un tipo predefinito di espressione valorizzata automaticamente dalla sommatoria algebrica dei valori dei livelli immediatamente sottostanti.

Innanzi tutto, il **Tipo del dato** può essere ‘Valuta' o ‘Numero': nel primo caso il livello visualizzerà un valore monetario con il simbolo e relativi decimali dalla divisa della società; nel secondo caso, il livello visualizzerà un generico valore numerico arrotondato al numero di decimali impostato nel campo successivo.

**Inversione del segno del nodo selezionato** consente di invertire i segni negativi in positivi e viceversa: nei riclassificati di ERP qualsiasi dato con saldo dare sarà visualizzato con segno positivo, l'avere con segno negativo. Attraverso questo flag, quindi, si potranno visualizzare totali positivi per livelli che per natura hanno saldo avere (passività, ricavi). Attenzione che questa impostazione ha un'influenza determinante sul risultato delle sommatorie e delle espressioni in genere.

**Da stampare** indica se il livello va riportato in stampa o meno.

Non sarà possibile cancellare un livello quando il suo livello superiore è di tipo ‘Somma dei figli', in quanto valorizzato nella sua formula: sarà sufficiente cambiare il tipo del livello superiore, cancellare e poi ristabilire la tipologia ‘Somma dei figli'.

**C** - Il livello espressione consente all'utente di definire liberamente la formula che valorizzerà il livello stesso.

Innanzi tutto, il **Tipo del dato** può essere ‘Valuta' o ‘Numero': nel primo caso il livello visualizzerà un valore monetario con il simbolo e relativi decimali dalla divisa della società; nel secondo caso, il livello visualizzerà un generico valore numerico arrotondato al numero di decimali impostato nel campo successivo.

**Inversione del segno del nodo selezionato** consente di invertire i segni negativi in positivi e viceversa: nei riclassificati di ERP qualsiasi dato con saldo dare sarà visualizzato con segno positivo, l'avere con segno negativo. Attraverso questo flag, quindi, si potranno visualizzare totali positivi per livelli che per natura hanno saldo avere (passività, ricavi). Attenzione che questa impostazione ha un'influenza determinante sul risultato delle sommatorie e delle espressioni in genere.

**Da stampare** indica se il livello va riportato in stampa o meno.

A differenza del tipo ‘Somma dei figli', per il livello espressione la sezione della formula è editabile: sono consentite le parentesi e le quattro operazioni algebriche base, così come valori numerici fissi. Per riportare nella formula un livello è necessario tenere premuto il pulsante CTRL e trascinare questo all'interno del campo formula.

**D** - Il livello centro di costo è dedicato alla valorizzazione dei dati di contabilità analitica, secondo i dettagli della struttura dei centri di costo della società.

Innanzi tutto, il **Tipo del dato** può essere ‘Valuta' o ‘Numero': nel primo caso il livello visualizzerà un valore monetario con il simbolo e relativi decimali dalla divisa della società; nel secondo caso, il livello visualizzerà un generico valore numerico arrotondato al numero di decimali impostato nel campo successivo.

**Inversione del segno del nodo selezionato** consente di invertire i segni negativi in positivi e viceversa: nei riclassificati di ERP qualsiasi dato con saldo dare sarà visualizzato con segno positivo, l'avere con segno negativo. Attraverso questo flag, quindi, si potranno visualizzare totali positivi per livelli che per natura hanno saldo avere (passività, ricavi). Attenzione che questa impostazione ha un'influenza determinante sul risultato delle sommatorie e delle espressioni in genere. L'inversione del segno è applicato al risultato del livello, non ai dettagli (sottoconti, cdc, cdp, commesse) che lo valorizzano: questi continueranno ad avere il segno del saldo (vedi oltre in questo documento per l'inversione dei segni dei centri di costo).

**Da stampare** indica se il livello va riportato in stampa o meno.

Con il flag **Considera c.d.c./c.d.p. figli** si potrà inserire nel livello il centro di costo X e ERP riporterà nel riclassificato tutti i suoi centri di costo interni che abbiano un valore. Il flag consente, quindi, di evitare di riportare e manutenere tutto il possibile dettaglio dei centri di costo ma solo il centro di costo superiore che li raggruppa.

Nella griglia dei centri di costo si vanno a caricare i centri di costo che valorizzeranno il livello: oltre al centro di costo è possibile indicare anche il conto/sottoconto, in modo da valorizzare il livello solo con il saldo dei movimenti della combinazione cdc/conto o cdc/sottoconto. L'ultimo flag presente in griglia è denominato **Inv. col.**: significa che, sulla riga selezionata, il segno del saldo sarà invertito.

**E** - Il livello centro di profitto è dedicato alla valorizzazione dei dati di contabilità analitica, secondo i dettagli della struttura dei centri di profitto della società.

Innanzi tutto, il **Tipo del dato** può essere ‘Valuta' o ‘Numero': nel primo caso il livello visualizzerà un valore monetario con il simbolo e relativi decimali dalla divisa della società; nel secondo caso, il livello visualizzerà un generico valore numerico arrotondato al numero di decimali impostato nel campo successivo.

**Inversione del segno del nodo selezionato** consente di invertire i segni negativi in positivi e viceversa: nei riclassificati di ERP qualsiasi dato con saldo dare sarà visualizzato con segno positivo, l'avere con segno negativo. Attraverso questo flag, quindi, si potranno visualizzare totali positivi per livelli che per natura hanno saldo avere (passività, ricavi). Attenzione che questa impostazione ha un'influenza determinante sul risultato delle sommatorie e delle espressioni in genere. L'inversione del segno è applicato al risultato del livello, non ai dettagli (sottoconti, cdc, cdp, commesse) che lo valorizzano: questi continueranno ad avere il segno del saldo (vedi oltre in questo documento per l'inversione dei segni dei centri di profitto).

**Da stampare** indica se il livello va riportato in stampa o meno.

Con il flag **Considera c.d.c./c.d.p. figli** si potrà inserire nel livello il centro di profitto X e ERP riporterà nel riclassificato tutti i suoi centri di profitto interni che abbiano un valore. Il flag consente, quindi, di evitare di riportare e manutenere tutto il possibile dettaglio dei centri di profitto ma solo il centro di profitto superiore che li raggruppa.

Nella griglia dei centri di profitto si vanno a caricare i centri di profitto che valorizzeranno il livello: oltre al centro di profitto è possibile indicare anche il conto/sottoconto, in modo da valorizzare il livello solo con il saldo dei movimenti della combinazione cdp/conto o cdp/sottoconto. L'ultimo flag presente in griglia è denominato **Inv. col.**: significa che, sulla riga selezionata, il segno del saldo sarà invertito.

**F** - Il livello commesse è dedicato alla valorizzazione dei dati della contabilità per commesse, secondo i dettagli della commessa.

Innanzi tutto, il **Tipo del dato** può essere ‘Valuta' o ‘Numero': nel primo caso il livello visualizzerà un valore monetario con il simbolo e relativi decimali dalla divisa della società; nel secondo caso, il livello visualizzerà un generico valore numerico arrotondato al numero di decimali impostato nel campo successivo.

**Inversione del segno del nodo selezionato** consente di invertire i segni negativi in positivi e viceversa: nei riclassificati di ERP qualsiasi dato con saldo dare sarà visualizzato con segno positivo, l'avere con segno negativo. Attraverso questo flag, quindi, si potranno visualizzare totali positivi per livelli che per natura hanno saldo avere (passività, ricavi). Attenzione che questa impostazione ha un'influenza determinante sul risultato delle sommatorie e delle espressioni in genere. L'inversione del segno è applicato al risultato del livello, non ai dettagli (sottoconti, cdc, cdp, commesse) che lo valorizzano: questi continueranno ad avere il segno del saldo (vedi oltre in questo documento per l'inversione dei segni del dettaglio commesse).

**Da stampare** indica se il livello va riportato in stampa o meno.

La sezione **Natura raggruppamento** consente di impostare i tipi di conto che si potranno assegnare a questo livello: in sostanza, all'atto dell'inserimento del sottoconto sarà applicato un filtro per tipo conto già limitato a quanti presentano flag coerenti con l'impostazione stessa. Ad esempio, se la natura è ‘Patrim. attivo', sarà possibile inserire i tipi conto che hanno questo flag in tabella: tipicamente l'attivo, i clienti e le banche. Bisogna comunque tener conto che la valorizzazione a commesse è automatica solo per i sottoconti economici, non per i patrimoniali.

La griglia ‘Conti' consente di definire la lista dei conti e/o sottoconti (che hanno valorizzato la contabilità per commessa) che andranno a valorizzare questo livello del modello. Per prima cosa è da chiarire che non è consentito l'inserimento dello stesso conto o sottoconto con lo stesso tipo saldo nello stesso livello, mentre questo può essere inserito in altri punti del riclassificato senza alcun vincolo. Anche qui è consentito l'inserimento del solo conto (mastro) generico.

Il tipo di saldo della singola riga di conto o sottoconto prevede le seguenti possibilità: ‘Generale' (sarà inserito il saldo del sottoconto indipendentemente dal suo segno; nel caso di conto generico, sarà inserita la somma dei saldi dei sottoconti appartenenti a quel conto), ‘Dare' (sarà inserito il saldo del sottoconto solo se questo ha segno dare; nel caso di conto generico, sarà inserita la somma dei saldi dare dei sottoconti appartenenti a quel conto), ‘Avere' (sarà inserito il saldo del sottoconto solo se questo ha segno avere; nel caso di conto generico, sarà inserita la somma dei saldi avere dei sottoconti appartenenti a quel conto), ‘Incremento' (per il sottoconto o conto sarà calcolato il valore come differenza tra la chiusura infrannuale del riclassificato e un'altra chiusura di riferimento: questa tipologia è utile in caso di analisi per flussi).

L'ultimo flag presente in griglia è denominato **Inv. col.**: significa che, sul sottoconto selezionato, il segno del saldo sarà invertito. Può tornare utile, ad esempio, per detrarre dal saldo di un conto il valore di un suo sottoconto.






