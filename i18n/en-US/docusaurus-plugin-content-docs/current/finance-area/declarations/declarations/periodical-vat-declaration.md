---
title: Dichiarazione iva periodoca
sidebar_position: 6
---

Da questa form è possibile gestire manualmente alcuni valori che saranno riportati nella stampa della liquidazione iva periodica nel momento della generazione del report.

Tipicamente due campi utili e frequentemente utilizzati sono:

- l'indicazione del credito iva residuo (perché non completamente compensato nel modello F24 con altri tributi) da inserire nella liquidazione;

- l'indicazione del credito iva che emerge nella liquidazione e che si desidera estromettere al fine di compensarlo con altri tributi nel modello F24.

Poichè al momento dell'elaborazione della stampa della liquidazione periodica (in cui i valori vengono elaborati dall'applicativo per esporli nel report) i valori inseriti manualmente devono già essere presenti, prima di generare la liquidazione periodica inserire una nuova riga (pulsante **Nuovo**).

All'apertura della nuova form sarà proposto l'anno in corso ed il mese o trimestre successivo all'ultimo memorizzato.

Si ricorda che, nel caso la riga corrispondente al mese o trimestre di riferimento non venga creata manualmente (al fine di gestire i valori di cui sopra) tramite il tasto Nuovo, sarà comunque creata in fase di stampa in definitivo della liquidazione periodica.

**CREDITO RESIDUO DA RIPORTARE**:

Compilare SENZA INDICAZIONE DEL SEGNO il campo VP16

![](/img/it-it/finance-area/declarations/declarations/periodical-vat-declaration/image01.png)

Allo stesso modo possono essere inseriti altri importi che vanno ad incrementare il credito risultante nella liquidazione, quali lo scomputo dell'acconto iva di dicembre versato (campo VP 20).

**CREDITO IVA DA COMPENSARE IN F24**:

Compilare SENZA INDICAZIONE DEL SEGNO il campo VP32

![](/img/it-it/finance-area/declarations/declarations/periodical-vat-declaration/image02.png)

Al momento dell'elaborazione della stampa della liquidazione iva (sia in provvisorio che in definitivo) i valori con segno negativo (VP16) andranno a incrementare il credito iva, mentre quelli con valore positivo (VP32) lo andranno a ridurre (o ad aumentare il debito); tali valori vengono riportati nel riepilogo dopo i valori di debito e credito derivanti dalle operazioni del mese o trimestre.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>




