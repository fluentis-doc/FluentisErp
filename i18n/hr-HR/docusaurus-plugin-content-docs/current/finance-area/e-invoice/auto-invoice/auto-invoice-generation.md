---
title: Generazione automatica autofattura
sidebar_position: 4
---
:::note NOTA:
Le seguenti istruzioni riguardano la procedura di generazione automatizzata delle auto-fatture di vendita create al fine di comunicare allo SDI, tramite il circuito della fatturazione elettronica, i dati sugli acquisti precedentemente comunicati tramite l'abrogato adempimento noto come "Esterometro".
:::

Al momento del salvataggio della registrazione contabile Fluentis andrà a creare i documenti automatici impostati nella causale: quindi sia il giroconto contabile per neutralizzare l'iva sia l’autofattura nelle vendita. Chiudendo la maschera verranno quindi restituiti due messaggi, quello di apertura della registrazione automatica di giroconto ed il nuovo messaggio di visualizzazione dell’autofattura.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation1.png)

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation2.png)

Nell’autofattura generata automaticamente: nel campo del cedente abbiamo il fornitore estero, nei riferimenti il numero e la data della fattura fornitore

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation3.png)

La fattura è già stampata e contabilizzata (visto che c’è già il giroconto contabile automatico a rilevarla) 
Nelle righe abbiamo un articolo non codificato, con la descrizione ripresa dalla descrizione movimento della registrazione contabile d’origine, per l’imponibile iva della registrazione e l’aliquota della riga.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation4.png)

Siamo quindi pronti già all’interno del documento per eseguire il cambio stato di spedizione allo Sdi dell’autofattura.
Eventuali modifiche alla registrazione d’origine andranno a ricalcolare, se la fattura di vendita non è già stata oggetto di creazione file Sdi, sia il giroconto contabile che l’autofattura nelle vendite. L’operazione di aggiornamento automatico non viene eseguita neanche nel caso in cui nella causale contabile sia stato impostato il flag ‘Non ricalcolare la registrazione automatica’

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation5.png)

La cancellazione della registrazione originale (anche il rollback della contabilizzazione che l’ha creata) andrà ad eliminare l’autofattura nelle vendite, se questa non è stata oggetto di creazione file Sdi.

### **CASI PARTICOLARI**

A) Nel caso di fattura di acquisto mista, con parte di reverse charge interno e parte no, la registrazione contabile avrà una o più righe iva con il flag ‘Escludi da causali automatiche’ e queste non saranno riportate nel giro automatico e neanche nell’autofattura

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation6.png)

B) Nel caso di acquisto intra con detraibilità parziale, è possibile indicare nel campo ‘Iva per causali automatiche’ quale sarà l’aliquota da utilizzare nella registrazione automatica di giro. Questa aliquota sarà anche utilizzate nell’autofattura in vendita

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation7.png)

C) Acquisto di servizi esteri
In questo caso l’acquisto sarà rilevato con causale non iva. In questo caso è possibile impostare in questo modo: nella causale non iva che rileva questi servizi è possibile andare ad indicare l’autofattura TD17 da creare nelle vendite, senza una causale automatica

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation8.png)

Sarà necessario indicare nel fornitore l’aliquota iva da utilizzare nell’autofattura vendita, poi nella registrazione contabile dovrà avere in testata il fornitore e nel totale di testata il valore del servizio fatturato:

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation9.png)

Dato che la causale fornitore non ha una causale automatica ma solo il tipo fattura da creare, l’autofattura creata non avrà il flag ‘Contabilizzata’ per dar modo all’utente di contabilizzarla dalle vendite.

### ALTRE CONTABILIZZAZIONI
Le procedure di contabilizzazione fatture di acquisto, la contabilizzazione compensi e la registrazione da file acquisto Sdi verificano tutte questa nuova impostazione della causale contabile per eseguire automaticamente la creazione dei documenti di vendita così come mostrati nel caso di registrazioni manuali.
Nel caso di contabilizzazione da file acquisto Sdi, la registrazione contabile sarà collegata al file Sdi: in questo caso l’autofattura avrà valorizzato automaticamente, oltre ai riferimenti al numero/data fattura, anche il protocollo Sdi originale.
