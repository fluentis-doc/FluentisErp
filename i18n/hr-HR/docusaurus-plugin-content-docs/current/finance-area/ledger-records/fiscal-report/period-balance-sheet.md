---
title: Bilancio d'esercizio
sidebar_position: 1
---

Questo report ha la funzione di presentare un prospetto base del bilancio aziendale, suddividendo di default le quattro sezioni attivo/passivo/costi/ricavi tipiche. Si sottolinea che il report funziona unicamente per data competenza contabile inserita nella testata della registrazione, indipendentemente quindi dalla data di registrazione della stessa a libro giornale.

Inoltre bisogna tener presente che le date di competenza sono state distinte per i conti dello stato patrimoniale, rispetto a quelli economici.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-balance-sheet/image01.png)

In questo modo è possibile, e raccomandato, mantenere il range di date economiche all'interno dell'anno in corso (esempio 01/01/2018 - 31/12/2018) e portare la data di inizio della competenza contabile patrimoniale fino all'ultima apertura conti (esempio 01/01/2017) nel caso in cui l'anno precedente (2017) non sia stato ancora chiuso. Ciò è necessario in tale situazione per ottenere il corretto saldo attuale dei conti in assenza dei valori di apertura per l'anno in corso che verrebbero altrimenti omessi filtrando normalmente.

 

Sono possibili vari layout tra i quali una rappresentazione a sezioni contrapposte ed una con raggruppamento al fine di ottenere i totali per conto e per livello della struttura del piano dei conti. La stampa desiderata si può selezionare dalla tendina in alto a sinistra.

 





**Visualizzazione importi segno negativo**: se impostato l'applicativo inserirà ogni sottoconto nella sezione di appartenenza (secondo il suo tipo conto) con eventualmente il segno negativo quando il saldo sia nella sezione opposta. Se il flag non è inserito, come di default, ogni sottoconto sarà visualizzato nella sezione relativa al suo saldo;

**Dettaglio della anagrafiche**: di default l'applicativo esclude tutto il dettaglio dei sottoconti collegati ai clienti/fornitori e agli agenti. Solo con il flag relativo saranno visualizzati i dettagli di questi sottoconti di anagrafica;

**Escludi conti d'ordine**: i conti d'ordine sono visualizzati in calce alle sezioni dell'attivo e passivo. Con questo flag i conti d'ordine non saranno visualizzati nel report. Si ricorda, in particolare, che i conti d'ordine non sono mai oggetto di chiusura/apertura conti nella procedura automatica dell'applicativo;

**Comparazione anno precedente**: con questa opzione sarà visualizzata la colonna dell'anno in corso e una per il saldo dello stesso periodo ma dell'anno precedente a quello impostato come filtro

**Escludi causale**: nel caso in cui siano state rilevate le registrazioni di chiusura dei conti, per ottenere i saldi di bilancio sarà necessario escludere i movimenti basati sulla causale di chiusura stessa. Eseguire il report senza escludere questa darà un report con tutti i saldi a zero (salvo i conti d'ordine per quanto detto sopra): questa può essere utilizzato come controllo di verifica dell'effettivo buon fine delle operazioni di chiusura conti effettuate;

È possibile inserire nella stampa anche i movimenti derivanti dalle registrazioni provvisorie.

<iframe width="560" height="315" src="https://www.youtube.com/embed/E_lIBlV2OXI" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

---

### Riclassificazione di bilancio per elaborazione bilancio civilistico (schema CEE)

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE STAMPE FISCALI**](/docs/video/finance/intro.md)
:::




