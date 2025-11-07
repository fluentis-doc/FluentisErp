---
title: Knjiženje izlaznih računa
sidebar_position: 1
---

Postupak se otvara putem izbornika **Prodaja > Izlazni računi > Knjiženje > Knjiženje izlaznih računa**. 

Račun, da bi bio knjižen, mora ispunjavati niz uvjeta: u svom zaglavlju mora imati postavljen flag *Ispisano*, ne smije biti tipa *pro-forma* i tip računa mora sadržavati opći razlog za knjiženje.

### Knjiženje

U gornjem dijelu forme nalaze se filteri pretrage za pronalazak i prikaz računa koji su spremni za knjiženje. 

U donjem dijelu nalaze se parametri upravljanja knjiženjem:  

**Datum knjiženja jednak datumu dokumenta**: ova oznaka nalaže sustavu da svaki račun knjiži s datumom izdavanja.

Ako se oznaka deaktivira, aktivira se polje **Datum knjiženja**, u kojem se može unijeti fiksni datum knjiženja;

**Koristi tečaj iz tablice tečajeva**: ako je uključeno, sustav koristi tečaj iz tablice koji vrijedi na datum knjiženja (ili posljednji prethodni).

Ako oznaka nije aktivna, koristi se *tečaj iz zaglavlja računa.*;

**Ažuriraj tečaj u dokumentu**: dostupno samo ako je prethodna oznaka aktivna; omogućuje ažuriranje tečaja i u samom računu, zamjenjujući postojeći;  

**Razdoblje PDV-a = datum dokumenta**: ako je oznaka uključena, razdoblje PDV-a se izjednačava s datumom računa. Ako se želi koristiti mogućnost odgođenog fakturiranja (do 15. u mjesecu nakon datuma isporuke), oznaka se mora isključiti, kako bi se datum PDV-a preuzeo iz izvornog dokumenta – u skladu s propisima o PDV-u.  

**Koristiti poslovnicu poduzeća za dodjelu odjela**: omogućuje da se, ako je u šifrarniku kupca navedena poslovnica i pridruženi odjel, knjiženje obavi na taj odjel.
Time se olakšava vođenje bilanci po odjelima u situacijama gdje se fakturiranje odvija odvojeno, ali se financijski rezultati konsolidiraju na glavnu poslovnu jedinicu.  

#### Posebne tipke    
> **Pretraži račune**: prikazuje sve ispisane, a još neproknjižene račune.  
> **Proknjiži račune**: pokreće knjiženje odabranih računa prema postavljenim parametrima.   

### Parametri

Ovdje se definiraju opće postavke knjiženja računa.

**Knjiženje poklona**: aktiviranjem ove oznake omogućuje se knjiženje poklon-artikala, otvarajući dodatna povezana polja:

1. Ako račun sadrži poklon, a upravljanje poklonima nije uključeno, sustav će upozoriti korisnika i račun će biti proknjižen bez posebnog knjiženja za poklon-redak (potrebna ručna intervencija).

2. Ako je opcija aktivna, ali nisu navedeni konti, sustav će automatski dodati redak storniranja prihoda koristeći isti konto prodaje kao i za artikl.

3. Ako je uključena oznaka **Zamijeni konto artikla**, koristi se poseban konto za storniranje unaprijed definiran u dodatnom polju.

**Codice IVA per omaggi in registro iva**: compilando questo campo (generalmente con un codice iva corrispondente alla casistica del "fuori campo iva" o "escluso..." verrà eseguita automaticamente una riga di storno del valore dell'omaggio sul registro iva, laddove non venga esercitata la rivalsa iva nei confronti del cliente)

**Conto storno IVA**: usato nel caso in cui l'articolo omaggio in fattura non abbia il flag **Rivalsa IVA**, con il quale si indica se l'iva applicata all'articolo omaggio è a carico (con flag) o meno (senza flag) del cliente. Questo importo sarà registrato e stornato solo nel caso in cui sia inserito il *Conto di storno iva*, senza del quale l'operazione sarà da gestire manualmente in contabilità (anche in questo campo c'è un messaggio di conferma/avviso utente della mancata impostazione).

**Raggruppa conti delle righe automatiche**: con il flag attivo i conti inseriti automaticamente nella sezione del libro giornale (come ad esempio nella contabilizzazione omaggi dove il cliente compare più volte, una volta per il totale fattura e poi gli vengono stornati gli omaggi) verranno raggruppati per sottoconto formando una registrazione compatta.

**Sottoconto sconto finanziario**: questo campo viene utilizzato per registrare lo sconto finanziario collegato alla scadenza fattura.

#### Pulsante specifico

> **Salva parametri**: permette di salvare i parametri impostati per la contabilizzazione omaggi.

Dopo aver selezionato le fatture (dal tab *Contabilizzazione*) e impostato i parametri, le fatture possono essere contabilizzate con l'aiuto del pulsante *Contabilizzazione fatture*.

### Precedenti

La form presenta la lista delle operazioni di contabilizzazione eseguite, al fine di visualizzarle ed eventualmente annullarle attraverso gli appositi pulsanti.

L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale, registro iva non stampato, liquidazione periodica non stampata, chiusura conti non eseguita, partite contabili chiuse in un incasso o in un effetto).

**Contabilizzazione fatture**: griglia con i dettagli delle operazioni eseguite. Viene popolata dopo la procedura di ricerca e possono essere selezionate le operazioni sulle quale applicare le funzioni del ribbon.

I dati nelle griglie in basso, **Fatture** e **Registrazione contabile** corrispondono all'operazione selezionata nella griglia superiore. Un doppio click nella sezione delle fatture/registrazioni consentirà di visualizzare la fattura/la registrazione contabile relativa.

#### Pulsanti specifici  
> **Ricerca contabilizzazione**: ricerca la lista delle contabilizzazioni eseguite.  
> **Anteprima contabilizzazione**: per visualizzare l'anteprima di stampa della contabilizzazione.  
> **Ripristina contabilizzazione**: con questo pulsante sarà cancellata tutta la contabilizzazione effettuata, con tutte le fatture associate.  
> **Ripristina fattura**: il pulsante esegue il ripristino della singola fattura selezionata.  

#### Messaggi di errore

Questi errori possono derivare, in alcuni casi da una errata gestione dei dati da parte dell’utente, ovvero mancano delle informazioni essenziali, in altri casi possono derivare da configurazioni o settaggi errati a livello di parametri o dati di base.

Gli errori di configurazione o mancanze nei dati di base si riferiscono perlopiù ad ambienti nei quali non è stata lanciata la procedura di Fast Start.

:::note[Messaggio]
La fattura con numero ... tipo ... anno ... di AAA S.p.a. non può essere contabilizzata perche **non esiste il conto di contropartita**.
:::

La contropartita contabile, nel contesto di una fattura di vendita o di acquisto, deve intendersi come l’indicazione del conto destinato ad accogliere il ricavo o il costo. 
Quindi, più in generale, la registrazione contabile di una fattura poggia normalmente su tre elementi essenziali che possiamo ricontrollare aprendo la [**causale contabile**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) con la quale stiamo tentando di contabilizzare questa fattura.
Per verificare prima di tutto quale sia questa causale, passiamo dalla tabella dei [**tipi fattura**](/docs/configurations/tables/sales/invoices-type) dove è definito il collegamento.
Ecco dunque i tre elementi, il cliente o fornitore, l’iva ed il costo o ricavo, se manca uno di questi elementi la registrazione non sta in piedi.

Dentro la causale contabile, creata o modificata manualmente rispetto allo standard generato dal Fast Start potrebbe trarci in inganno se in apparenza sembra che il conto di ricavo sia stato definito come un conto fisso essendoci il codice di conto e sottoconto e pertanto dovrebbe usarlo e limitarsi a sostituire il conto generico del cliente con il sottoconto di dettaglio che prende dalla testata della fattura.

In realtà essendo impostato il criterio di lettura dell’imponibile sottoconto, il programma cerca in ogni caso il dato per la sostituzione, e lo cerca in primo luogo nella fattura, in secondo luogo nell’anagrafica cliente.

**Dunque per risolvere occorre definire nella fattura il dato del fatturato vendite, dato che potrebbe essere associato direttamente all’anagrafica articolo codificato.
In alternativa possiamo inserire in anagrafica cliente il conto di default. In questo modo la contabilizzazione automatica può funzionare.**

Nota: anche il criterio di lettura *Totale imponibile* nella causale contabile non può funzionare perché tenterebbe di leggere comunque la griglia iva della registrazione dove manca un dato obbligatorio che è sempre il conto di contropartita. Dunque non è prevista una modalità di contabilizzazione con sottoconto fisso, occorre gestire sempre il fatturato vendite e acquisto o le anagrafiche cliente fornitore.

:::note[Messaggio]
La fattura con numero ... tipo ... anno ... di AAA S.p.a. non può essere contabilizzata perche **la registrazione è bilanciata**.
:::

Al di la del significato più ovvio del messaggio, ovvero quello che impedisce, in relazione ai settaggi dei parametri della causale contabile, di salvare una registrazione dove il totale dare non quadra con il totale avere, un possibile motivo di questa situazione potrebbe essere legato ancora ad un errato settaggio della causale stessa, ad esempio la mancanza nello schema contabile della riga relativa all'iva e dunque in presenza di una fattura che contiene iva e dello scorporo eseguito dalla prima parte della procedura, non riuscirebbe comunque a generare una scrittura contabile (nella parte relativa al libro giornale) che possa bilanciare, generando l'errore.

Nota: il blocco è sottoposto a parametro ma si sconsiglia vivamente di disattivarlo per accettare scritture sbilanciate, se non in casi del tutto eccezionali, oppure temporaneamente per verificare volutamente il risultato (sbagliato) della contabilizzazione.

:::note[Messaggio]
La fattura con numero ... tipo ... anno ... di AAA S.p.a. non può essere contabilizzata perche **nel libro giornale ci sono 1 righe con un conto senza un sottoconto**.
:::

Questo messaggio (meno immediato nell'interpretazione) fa riferimento al fatto che il software non può salvare registrazioni dve non sia definito il sottoconto di dettaglio.

Tra i vari motivi per i quali questo potrebbe accedere, ovviamente legati al fatto che lo schema della causale contabile definisce i mastri (senza sottoconto di dettaglio) anche per quanto riguarda i clienti e fornitori, potrebbe trattarsi del fatto che all'interno dei [**parametri di contabilità**](/docs/configurations/parameters/finance/accounting-parameters) manca l'abbinamento tra il tipo conto (magari una nuova tipologia aggiunta) ed il mastro di riferimento. Tale parametro mancante impedisce l'esecuzione dell'automatismo che completa la scrittura contabile.

:::note[Messaggio]
La fattura con numero ... tipo ... anno ... di AAA S.p.a. non può essere contabilizzata perche **il valore delle partite non corrisponde al movimento contabile**.
:::

Questo messaggio solitamente corrisponde alla mancanza dell'indicazione delle condizioni di pagamento in fattura, pertanto la partita non può aprirsi e chiaramente si cre la differenza e si viene bloccati dal software.

La scelta di essere bloccati nella contabilizzazione è settabile in un parametro della causale contabile.

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/NgroQvVOgD8" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>