---
title: Unos predložaka općeg knjigovodstva
sidebar_position: 3
---

:::tip[FAst Start]
Ova je tablica obuhvaćena postupkom [**Fast Start**](/docs/guide/fast-start)

U slučaju ručne konfiguracije, preporučujemo koristiti kontrolnu listu dostupnu na poveznici iznad.

Predlošci kreirani putem Fast Start postupka omogućuju izvođenje sljedećih knjiženja:

- Knjiženja kupnje i prodaje na području **Hrvatske**
- Kupnja i prodaja s **Reverse charge** u Hrvatskoj, interno preknjiženje i pripadajuće samofakturiranje
- Knjiženja kupnje i prodaje unutar **EU**, interno preknjiženje i pripadajuće samofakturiranje
- Knjiženja kupnje i prodaje iz **zemalja izvan EU** pripadajuće samofakturiranje i preknjiženje
- Odobrenja kao storna prethodnih knjiženja
- Kupnja i prodaja **osnovnih sredstava**
- Gotovinski promet
- **Naplate i plaćanja**
- Aktivni portfelj (izdavanje i slanje Ri.Ba dokumenata, naplata i evidencija neplaćenih stavki)
- Slobodna knjiženja u dnevniku (prva nota)
- Ostala knjiženja u dnevniku kao što su obračun plaća i slično
- Preknjiženje PDV-a
- Uplate poreza i doprinosa
- Ispravna knjiženja kao što su obračunani i plaćeni troškovi unaprijed ili unatrag (prijelazna razdoblja)
- Amortizacija
- Završna i početna knjiženja pri zatvaranju i otvaranju poslovnih knjiga
:::

## **1. Zaglavlje**

#### Specifična polja

**Predložak**: predstavlja alfanumerički kod od 5 znakova koji mora biti jedinstven.

**Opis predloška**: predstavlja opis predloška.

**Vrsta knjiženja**: označava vrstu knjiženja. Riječ je o fiksnoj internoj tablici koja nije dostupna za izmjenu od strane korisnika, a služi za razgraničavanje predložaka koji se odnose na ne-PDV knjiženja od onih koji se odnose na različite vrste PDV knjiženja.

**Vrsta dokumenta**: tablica je unaprijed popunjena, ali ju korisnik može mijenjati ili dopunjavati. U ovoj tablici posebnu pažnju treba obratiti na retke koji sadrže flag **‘Nota odobrenja'** i **‘Ispravna nota'**: Kod note odobrenja sustav provjerava je li PDV odjeljak popunjen s negativnim iznosima (radi se o provjeri ispravnosti znakova – također se provodi kontrola pri knjiženju storno dokumenata iz područja prodaje/kupnje: nije dopušteno imati retke s pozitivnim iznosima i istovremeno druge s negativnim iznosima za različite konta).
Za ispravnu notu, sustav će automatski, unutar PDV odjeljka knjiženja, aktivirati flag koji označava retke povezane s ispravnim notama, te će dodijeliti referentni datum dokumenta koji se ispravlja za potrebe PDV-a. Taj se datum ne smije miješati s poljem **Razdoblje PDV-a**: ota odobrenja (ili ispravna nota) ispravit će PDV za razdoblje navedeno u ovom drugom polju.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image02.png)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image03.png)
 
**Numeracija**: padajući izbornici omogućuju povezivanje svakog predloška s određenom numeracijom – zasebno za konačna i privremena knjiženja. Ova je funkcionalnost potrebna u nekim inozemnim lokalizacijama. Vidi više u **[Tablica numeracije računovodstvenih zapisa](/docs/configurations/tables/fluentis-numerations)**. Ako za predložak nije definirana posebna numeracija, sustav će prema zadanim postavkama pokušati dohvatiti numeraciju definiranu u **[Općim parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters/)** Ako ni tamo nije definirana, koristit će se opća tablica *Numeriranje računovodstvenih zapisa*.

**Knjigovodstvene knjige**: padajući izbornik koji se povezuje s posebnom tablicom u kojoj se definiraju kod i opis, a koji se zatim mogu povezati s predloškom, radi grupiranja i kategorizacije. Te se kategorije mogu povezati i s različitim numeracijama iz prethodnog polja (korisno za strane lokalizacije gdje se knjige dnevnika vode odvojeno ovisno o vrsti knjiženja). Primjer: kupnje mogu imati numeraciju a) povezanu s knjigom "Kupnje", prodaje numeraciju b) povezanu s knjigom "Prodaje", a bankovna knjiženja (naplate/plaćanja) numeraciju c) povezanu s knjigom "Bankovna knjiženja" itd.

**Krajni rok valjanosti**: omogućuje blokadu korištenja određenog predloška od navedenog datuma nadalje. Predložak neće biti vidljiv na popisu predložaka nakon tog datuma.

**Registro incassi e pagamenti**: NIJE AKTIVNO (označava predloške koji se odnose na registar naplate/plaćanja unutar pojednostavljenog knjigovodstva za obrtnike/profesionalce).

**Professionisti**: NIJE AKTIVNO (označava predložak namijenjen za knjigovodstvo profesionalaca).

### 1.1 Detalji karakteristike

#### Specifična polja

**Automatski predložak**: Prilikom spremanja knjiženja temeljenog na predlošku koji je trenutno u uređivanju, program će automatski generirati drugo knjiženje temeljeno na predlošku navedenom u ovom polju.
Da bi drugo knjiženje bilo ispravno popunjeno, potrebno je poštivati sljedeće logike odnosa između dvaju knjiženja:

a) prvi slučaj odnosi se na situaciju kada je prvo knjiženje tipa PDV-a „Kupnje unutar EU”, a drugo knjiženje je „PDV preknjiženje za kupnje unutar EU”. Ovdje je veza određena obvezom iskazivanja ulaznog PDV-a i u knjizi izlaznih računa; (isto vrijedi i za slučaj reverse charge-a, koristeći tipove PDV-a za kupnje u reverse charge-u i odgovarajuće PDV preknjiženje za te kupnje);

b) drugi slučaj: prvo knjiženje otvara stavku, dok drugo knjiženje odmah zatvara tu stavku;

c) treći slučaj odnosi se na zatvaranje stavke nastale knjiženjem s vrstom pokreta „PDV prodaja prema javnim tijelima” gdje je PDV bio u odgodi. U tom slučaju se povezuje s knjiženjem PDV preknjiženja za odgođeni PDV;

d) četvrti slučaj je kupnja s odgođenim PDV-om, suprotno od prethodnog slučaja;

e) peti slučaj: prvo knjiženje uključuje PDV, dok se drugo knjiženje temelji na automatskim podračunima definiranim u kontnom planu;

f) u svim drugim slučajevima program će pokušati generirati drugo knjiženje na temelju PDV podataka iz prvog knjiženja; ako to nije moguće, drugo će se knjiženje generirati s pripadajućim podračunima, ali bez dodijeljenih vrijednosti.

**Vrsta automatskog fakturiranja**: Vidi posebno poglavlje o [**konfiguraciji automatskih samofaktura**](/docs/finance-area/e-invoice/auto-invoice/ledger-templates)

**Zamjena kolona ako je iznos manji od nule**: Omogućuje sustavu da automatski zamijeni kolone Duguje/Potražuje u knjiženju na temelju znaka PDV iznosa, što je korisno npr. kod knjiženja nota odobrenja. Preporučuje se aktivacija ovog polja za sva PDV knjiženja.

**Upozorenje**: Ovo je polje aktivno samo ako je prethodno uključeno. Kada je aktivirano, korisniku će se prikazati upozorenje o zamjeni znakova.
Flag nema utjecaja na predloške koji se koriste u automatskim postupcima knjiženja.

**Dopusti podračune s iznosom nula**: ovim flagom omogućuju se sljedeće radnje:

a) korisnik može ručno unijeti retke s iznosom nula na obje strane (Duguje i Potražuje)

b) prilikom spremanja knjiženja, retci koji su preneseni iz predloška, ali ih korisnik nije popunio, neće biti automatski izbrisani;  

c) za retke koji u glavnoj knjizi prikazuju PDV obvezu/potraživanje, iznos nula će i dalje biti izbrisan — osim ako nije aktiviran i flag „Dopusti PDV 0 u GL” u tablici [Reference na objekt stopa PDV-a ](/docs/configurations/tables/finance/vat-rates).

#### PRIMJERI:

<details>
 
<summary>Clicca per l'esempio</summary>

- birajući da postavite flag na neaktivno, možete iskoristiti funkcionalnost za unos u model registracije predloženog od strane uzroka svih potencijalno korisnih računa koji, ako ne budu korišteni, neće biti sačuvani prilikom spremanja registracije. Na primjer, razmislite o knjiženjima zaposlenika, plaćama itd., za koje se ne koriste uvijek isti računi svaki mjesec, iako su mogući računi raznoliki.

- birajući da zadržite aktivni flag, mogu se unijeti podračuni s nultim kretanjem, što se često događa prilikom registracije telefonskih ili električnih usluga, na primjer. 

**Predmet koji identificira prototip analitičkog zapisa**: ova je osnovna (ali neobavezna) sekcija uzroka računovodstva, u koju se učitava tipična shema vrste računovodstvene evidencije koju treba upravljati. Moguće je unijeti i generičke kodove računa (npr. račun dobavljača), koji će se automatski ažurirati od strane programa na temelju popisa računa kupaca/dobavljača unesenih u Parametre općeg računovodstva. Ovi podračuni, kao i sekcije dugovanja/ potraživanja, usmjeravat će računovodstvene valorizacije, koje će se ipak moći mijenjati tijekom ručnog unosa evidencije.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image02.png)
 
</details>

#### [Vrsta iznosa]{#amount-type}

Zaslužuju posebna objašnjenja kodovi Vrste iznosa, koji su ključni za automatsko vrednovanje dnevnika na temelju podataka o PDV-u i knjiženju koji se obrađuju u registraciji. Konkretno:

**Priručnik**: označava da će redak biti ručno popunjen od strane korisnika prilikom knjiženja;

**Oporezivi podkonto**: označava da će redak biti ažuriran za svaki šifrirani podračun unesen u PDV sekciji, s iznosom koji odgovara oporezivom iznosu (osnovici) iz pripadajućih redaka. Ova se vrsta iznosa **preporučuje za sve prihode unesene u predloške za prodaju**;

**Ukupni oporezivi iznos**: redak će biti ažuriran s ukupnim iznosom osnovice iz cijelog knjiženja. Program neće uzimati u obzir šifru konta ili podračuna unesenog u retku. Primjeri: prodaja u režimu split payment ili unutar EU.

**Ukupni porez**: redak će biti ažuriran s ukupnim iznosom PDV-a iz knjiženja, neovisno o unesenom kontu/podračunu;

**Odbitni porez**: redak će biti ažuriran s ukupnim iznosom odbitnog PDV-a iz knjiženja, neovisno o kontu/podračunu;

**Ukupno – dokument/knjiženje**: redak će biti ažuriran s ukupnim iznosom dokumenta/knjiženja, uz uvjet da je podračun glavnog nositelja knjiženja u skladu s kombinacijama definiranima u parametrima kontnog plana;

**Oporezivo+porez koji se NE može odbiti**: Označava da će redak biti ažuriran zbrojem ukupne osnovice i ukupnog iznosa neodbitnog PDV-a iz knjiženja. Pritom se ne uzima u obzir koji je konto ili podračun unesen u retku.; Ova vrsta knjiženja rijetko se koristi – preporučuje se koristiti opciju **Osnovica po podračunu + neodbitni PDV po podračunu**.

**50% osnovice**: Redak će biti ažuriran s 50% ukupne osnovice iz knjiženja. Uneseni konto ili podračun neće biti uzeti u obzir;

**50% osnovice + neodbitni PDV**: Redak će biti ažuriran sa zbrojem 50% ukupne osnovice i cjelokupnog iznosa neodbitnog PDV-a iz knjiženja. Konto/podračun unesen u retku nema utjecaja;

**50% osnovice + 50% neodbitnog PDV-a**: Redak će biti ažuriran sa zbrojem 50% ukupne osnovice i 50% iznosa neodbitnog PDV-a iz knjiženja. Konto ili podračun se ne uzima u obzir.

KREIRANI IZ POREZNIH RAZLOGA I SMATRAJU SE ZASTARJELIMA

**Osnovica po podračunu + neodbitni PDV po podračunu**: Označava da će redak biti ažuriran za svaki kod podračuna unesen u odjeljak PDV-a s iznosom koji predstavlja zbroj osnovice redaka i pripadajućeg neodbitnog PDV-a; **korištenje ove vrste iznosa preporučuje se uglavnom za sve troškove unesene u predlošcima knjiženja troškova**;

**Zaokruživanje aktive**: označava da će redak biti ažuriran iznosom aktivnih zaokruživanja; koristi se u predlošcima za zatvaranje računa;

**Zaokruživanje pasive**: označava da će redak biti ažuriran iznosom pasivnih zaokruživanja; koristi se u predlošcima za zatvaranje računa;

**Iznos podračuna**: označava da će redak biti ažuriran iznosom uplata na račune unesene u knjiženje, prema znaku same uplate;  

**Dobitak na tečajnim razlikama**: označava da će redak biti ažuriran podračunom dobiti za valutu referentne razlike tečaja, s iznosom dobivenim razlikom valorizacije između povijesnog i završnog tečaja računa; ako je označena opcija zatvaranja po povijesnom tečaju, redak neće biti valoriziran;  

**Gubitak od valutnih razlika**: označava da će redak biti ažuriran podračunom gubitka za valutu referentne razlike tečaja, s iznosom dobivenim razlikom valorizacije između povijesnog i završnog tečaja računa; ako je označena opcija zatvaranja po povijesnom tečaju, redak neće biti valoriziran;

**Automatski**: vrsta iznosa koja se koristi u određenim procedurama automatskog knjiženja.

*PRIMJER*: koristi se u predlošcima za prodaju osnovnih sredstava za upravljanje plus-minus vrijednošću, inače je postavljena sustavom u procedurama automatskog knjiženja.  


Mreža se završava s: 

- un polje za kodiranje konta (nije preporučena upotreba: u računovodstvu već postoji ispis - "Izvještaj o stanju s kontima" - koji prikazuje konta neovisno o ovoj postavci). Osim toga, aktiviranjem flag-a koji omogućuje prikaz podračuna konta (tab Detalji knjiženja)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image03.png)

Ova polja će se upravljati automatski; iz tog razloga nije preporučljivo ručno ih postavljati u predlošku.  

U odgovarajućim računima PDV-a na odbitak (ili obvezu) i troška (ili prihoda), primjerice, unose se podaci o dobavljaču (ili kupcu), dok se na dobavljaču (ili kupcu) evidentira proturačun troška ili prihoda. U slučaju da postoji više proturačuna, odabire se onaj s najvećim iznosom (ostali se zanemaruju).  

- polje za detaljne bilješke: u ovom polju moguće je koristiti sve kodove prikazane na dnu obrasca.  

**Za predloške zatvaranja računa** upisati uz generički račun kupaca/dobavljača **kodove (8) ili (9)** zajedno s **flagom ‘Rif. doc. partita in pag.''** (nalazi se na kartici Detalji knjiženja) kako bi se u knjigovodstvu evidentirali podaci o plaćenim/primljenim dokumentima.  

Obratite pažnju da se generički račun prisutan u predlošku (npr. "Dobavljači Italija") zapravo upravlja u [Parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters)  u skladu s ispravnim tipom računa (npr. FIT u standardnoj Fluentis bazi podataka). Također provjerite je li tip iznosa na odgovarajućem retku kupca ili dobavljača ispravno postavljen na Iznos podračuna.  

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image04.png)

**Imposta detr. e sottoconto IVA**: tipo importo utilizzato per valorizzare la riga relativa all'IVA con l'importo detraibile dell'IVA e con il sottoconto individuato secondo il ‘Tipo contabilizzazione IVA' associato in via prioritaria all'anagrafica intestataria della registrazione o di default nei ‘Parametri di contabilità generale'.

Impostazione non utilizzata in Italia, utile per localizzazioni estere, esempio Croazia, per legare il conto dell'iva all'aliquota utilizzata (esempio se viene utilizzata l'aliquota IVA 10% verrà associato il conto "iva acquisti al 10%", quindi specifico per quell'aliquota anzichè un conto, esempio "iva a credito", generico come in Italia per tutte le aliquote).

**Descrizione parametrica della registrazione contabile**: all'interno di questa si possono codificare delle descrizioni standard che vengono compilate dal programma attraverso i vari codici indicati nella legenda posta immediatamente sopra al compo, descrizioni che saranno riportate nelle stampe contabili e in particolare negli Estratti conto e nel Libro giornale. 

Anche per ogni riga di movimentazione della sezione *Dettaglio conti / sottoconti - Prototipo registrazione* è possibile, come già illustrato sopra, codificare delle note preimpostate così come per la Descrizione generale. 

**ATTENZIONE**: in particolare i codici (8) e (9) sono gestiti solo per la descrizione specifica di riga e non sono considerati nella descrizione generale della registrazione di cui al campo in commento.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image05.png)

### 1.2 Dettagli registrazione

**Registro IVA**: il campo, obbligatorio solo per causali con tipo movimento IVA, consente di assegnare il registro IVA di riferimento alla causale in gestione.

**Data competenza IVA**: il campo consente di definire quale sia la data di competenza da assegnare al movimento IVA: il programma propone la data registrazione per i movimenti su registri acquisti e la data documento per movimenti su registri vendite. Si raccomanda di impostare la data competenza come data registrazione anche per le causali di giroconto IVA intra cee e reverse charge. 

E' fondamentale, infatti, controllare che le due causali, di acquisto e di giroconto, che sono coinvolte in questi tipi di "doppia registrazione", presentino il medesimo settaggio per evitare che l'iva detratta e l'iva esigibile in contropartita possano assumere periodi di competenza differenti. Lo vogliamo evidenziare in modo particolare perché, la causale di giroconto, essendo una causale iva lato vendite, propone di default il criterio data documento che va dunque modificato.

#### Opzioni tipo documento

**Tipo/N. documento**: l'impostazione di questo flag rende obbligatorio il campo del numero documento per il salvataggio della registrazione basata su questa causale.

**Data documento**: l'impostazione di questo flag rende obbligatorio il campo della data documento per il salvataggio della registrazione basata su questa causale.

**N. Doc. = Prot. IVA**: l'impostazione di questo flag implica che il programma proporrà il numero del documento sulla base del numero di protocollo IVA progressivo. Il campo, quindi, non va impostato per registrazioni d'acquisto per le quali il numero documento e protocollo non hanno alcun legame reciproco; per quanto riguarda le vendite, invece, l'uso è suggerito solo per causali di registrazioni effettuate manualmente direttamente in contabilità generale: l'impostazione di questo flag è sconsigliata per causali impostate nei tipi fatture di vendita e utilizzate nella contabilizzazione fatture.

**Prot. IVA = N. doc**: l'impostazione di questo flag implica che il programma cercherà di attribuire il protocollo iva sulla sulla base del numero di documento. Il campo, quindi, non va impostato per registrazioni d'acquisto per le quali il numero documento e protocollo non hanno alcun legame reciproco; per quanto riguarda le vendite, invece, **l'uso è suggerito per tutte le causali impostate nei tipi fatture di vendita e utilizzate quindi nella contabilizzazione automatica fatture**: la possibilità di utilizzare questa impostazione dipende dalla certezza che la numerazione dei tipi fatture sia la stessa per tutti i documenti da registrare nello stesso Registro IVA, diversamente si verrebbero a creare dei "salti" (o dei "doppioni" con conseguente rifiuto di salvataggio) nella protocollazione.

L'utilità di questa funzione nella contabilizzazione automatica delle fatture consiste nella possibilità di contabilizzare senza porre attenzione all'ordine di protocollazione: esempio posso contabilizzare la fattura nr. 2 e poi la nr. 1 ottenendo una corretta protocollazione che associa la fattura nr. 1 al protocollo 1 ecc...

A fine periodo IVA (mese o trimestre) basterà dunque accertarsi di aver contabilizzato tutte le fatture emesse.

#### Opzioni tipo registrazione

**Apertura partite**: la presenza di questo flag farà comparire il tabulatore di creazione dei partitari nella registrazione contabile che utilizzerà questa causale; l'impostazione di questo flag è quindi consigliata per tutte le registrazioni di tipo IVA e in generale per poter gestire lo scadenzario clienti/fornitori. Il flag può essere impostato anche per causali che rilevano un pagamento anticipato: in questo caso sarà aperta una partita di segno inverso da compensare successivamente con le partite che si creeranno al momento della rilevazione contabile del documento fiscale successivo.

**Dett. mov. in partite**: con questo flag il programma inserirà nelle **note delle partite** i testi inseriti nel campo 'Dettaglio movimento' della riga di contabilità d'origine della partita.![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail/image02.png)

Il flag è attivo solo quando il precedente *Apertura partite* è stato impostato.

**Apertura per ogni riga mov.**: con questo flag il programma inserirà, una partita per ogni riga movimento, nella quale è presente un sottoconto con il flag di gestione partite aperte impostato. Il flag è attivo solo quando il precedente *Apertura partite* è stato impostato.

Il flag si può attivare solo per causali non iva (esempio apertura conti) per ogni riga movimento fornitore o cliente apre una partita e riporta le indicazioni di pagamento che prende in anagrafica (serve nel caso in cui si apra più di una riga per un singolo cliente o fornitore).

**Chiusura partite**: la presenza di questo flag farà comparire il tabulatore di chiusura dei partitari nella registrazione contabile che utilizzerà questa causale. Si tratta tipicamente di tutte le registrazioni pagamento/incasso non IVA, ma può anche essere impostato in combinazione con apertura partite e compensazione partite per le causali delle note di credito e in generale per tutte le registrazioni che prevedono un'apertura partite con una contestuale compensazione di una situazione pregressa.

**Usa cambio storico**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, l'applicativo procederà a chiudere i partitari con il cambio storico di apertura, senza alcuna rilevazione automatica delle differenze di cambio (permettendo quindi di gestirle eventualmente in maniera manuale).

**Ragg. pag. in libro giornale**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, l'applicativo procederà a raggruppare in un unico movimento di contabilità tutti gli importi di chiusura partite legati ad uno stesso sottoconto (in particolare, raggrupperà i movimenti di stesso segno e stessa divisa).

**Escludi da provv. maturate**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, le chiusure partite effettuate con questa causale contabile non saranno ritenuti validi per il calcolo delle provvigioni maturate per agenti con calcolo di tipo 'Pagamento avvenuto'.

**Rif. doc. partita in pag.**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, l'applicativo procederà a gestire i codici (8) e (9) di rilevazione dei riferimenti delle chiusure partite nelle descrizioni di dettaglio dei movimenti.

**Compens. partite**: con questo flag, disponibile solo nel caso siano stati impostati entrambi i flag di apertura e chiusura partite, la procedura attiverà la possibilità di procedere ad una compensazione partite all'interno della registrazione basata su questa causale: questa combinazione di flag viene consigliata per tutte le causali collegate a documenti di tipo note di credito.

**Avviso comp.**: con questo flag si attiva, al salvataggio della registrazione contabile, un controllo che avvisa l'utente sulla presenza di partite da compensare.

**Ragg. partite**: il flag attiva la gestione dei raggruppamenti partite invece che la gestione standard ad apertura/chiusura partite, attraverso un tabulatore specifico di rilevazione nella registrazione contabile.

**Crea Gruppo**: il flag, se attivo ed in combinazione con il flag precedente, crea automaticamente un gruppo partite nei raggruppamenti partite, nel quale fa confluire le partite della registrazione (da attivarsi nelle causali delle fatture di acquisto/vendita).

**Ragg. partite – tipo pagamento**: è la tipologia di pagamento da assegnare ai movimenti dei raggruppamenti partite rilevati con questa causale.

**Progetti**: (ex Commesse): l'attivazione di questo flag farà comparire il campo *Progetto* nella testata della registrazione oltre ai campi di dettaglio el corpo della registrazione per il collegamento dei progetti (commesse) con i movimenti contabili di dettaglio.

Per ulteriori dettagli vedere **[qui](/docs/finance-area/ledger-records/records/ledger-record)**

**Centri di costo**: la presenza di questo flag farà comparire il tabulatore di gestione della valorizzazione centri di costo nelle registrazioni contabili.

**Centri di profitto**: la presenza di questo flag farà comparire il tabulatore di gestione della valorizzazione centri di profitto nelle registrazioni contabili.

**Gestione macchina**: NON ATTIVATO il flag visualizzerà in contabilità, nella scheda analitica, una griglia di valorizzazione dei costi/ricavi agli automezzi aziendali.

**Cespiti**: la presenza di questo flag farà comparire il tabulatore di gestione delle schede cespiti nella registrazione contabile.

**Tipo operazione**: si tratta del tipo di operazione da proporre di default per i nuovi movimenti rilevati all'interno della scheda cespiti in contabilità.

**Aggiornamento saldi**: flag impostato di default.

**Descr. mov. in giornale e pagamenti**: con questo flag la procedura andrà a copiare la descrizione generale della registrazione in tutte le descrizioni di dettaglio dei movimenti e anche nelle note dei pagamenti.

**Provvigioni**: il flag attiva un tabulatore specifico all'interno delle registrazioni contabili per gestire i dati di calcolo delle provvigioni dal modulo amministrazione (questo modulo, recentemente introdotto, opera in alternativa rispetto alla gestione provvigioni dal modulo vendite, ma non lo sostituisce rimanendo quest'ultimo comunque attivo).

**Intrastat**: il flag attiva un tabulatore specifico all'interno delle registrazioni contabili per gestire i dati, provenienti dalla fattura d'acquisto o di vendita contabilizzata automaticamente tramite l'apposita procedura, oppure inseriti al momento dell'inserimento della scrittura contabile di prima nota, e relativi alla creazione dei modelli intrastat. I dati così gestiti saranno acquisiti nella procedura di creazione dei modelli intrastat tramite la procedura *Acquisizione delle registrazioni contabili.* Si ricorda che è presenta in alternativa la procedura di *acquisizione dalle fatture* che non interagisce con i movimenti contabili andando a leggere direttamente e soltanto i documenti di acquisto / vendita.

#### Ulteriori colonne visualizzabili nella griglia delle registrazioni contabili

**Divisa**: la presenza di questo flag farà comparire il campo Divisa nella sezione del libro giornale.

**Cambio/data valuta**: la presenza di questo flag farà comparire i campi del cambio e della data valuta nella sezione del libro giornale.

**Importo valuta**: la presenza di questo flag farà comparire il campo Importo valuta nella sezione del libro giornale.

**Sottoconto di contropartita**: la presenza di questo flag farà comparire i campi dei sottoconti di contropartita nella sezione del libro giornale. La gestione dei campi di contropartita non è consigliata.

**Dettaglio del movimento**: la presenza di questo flag farà comparire il campo del Dettaglio movimento nella sezione del libro giornale: si consiglia di impostare questo flag per tutte le causali contabili, in modo da consentire sempre l'inserimento di note di dettaglio del singolo movimento contabile.

**Divisione**: la presenza di questo flag farà comparire il campo Divisione già a partite dalla sezione IVA, così come nella sezione del libro giornale. Con questa impostazione sarà possibile spezzare il caricamento dello stesso documento su più divisioni della società.

**Giorni banca**: la presenza di questo flag farà comparire il campo della data valuta banca nella sezione del libro giornale: il campo, quindi, è consigliato per tutte le causali contabili che rilevano movimenti finanziari. La gestione di questo campo può essere automatizzata sulla base dei giorni valuta (positivi/negativi) impostati nell'anagrafica banche per ogni singola causale.

**Numero progressivo**: la presenza di questo flag farà comparire il campo del Numero riga nella sezione del libro giornale: si consiglia di inserire questo flag per causali particolarmente lunghe, in modo da consentire all'utente di ordinare i record in modo fisso come nella causale (es. rilevazione paghe).

**Rif. manuale partite**: la presenza di questo flag farà comparire il campo del Rif. Manuale partita nella sezione del libro giornale. Il campo è indicato per collegare manualmente movimenti di contabilità senza passare per la gestione partite. In pratica si tratta di un campo note libero.

**Operazioni straordinarie**: la presenza di questo flag farà comparire il campo omonimo (di tipo bit ovvero un flag) al fine di evidenziare alcuni movimenti contabili (in particolare ad esempio un costo) come *straordinario* e permettere poi una facile ricerca o estrazione all'interno di una stampa degli stessi.
Questa possibilità si rivela utile a seguito delle modifiche agli schemi di bilancio introdotte con la direttiva 2013/34 (Dlgs 139/2015). Tali modifiche avevano introdotto, in sintesi, l'eliminazione dell'area "straordinaria" del Conto Economico. Ne consegue che tutti i componenti "eccezionali" non possono essere rappresentati da conti quali ad esempio le sopravvenienze attive dell'area straordinaria, ma devono essere iscritti direttamente nel conto cui si riferisce, ad esempio, la spesa (per natura).  Si presenta tuttavia la necessità di evidenziare  tali componenti di costo / ricavo per il necessario dettaglio in nota integrativa e per altre eventuali ragioni di tipo fiscali, ad esempio le riprese in diminuzione di costi nella dichiarazione dei redditi ecc...

**Tipo Operazione fiscale**: Rende visibile una combo box con la quale contrassegnare la riga di contabilita a supporto di una successiva elaborazione (esterna) della dichiarazione annuale iva, dove è richiesto di indicare se l'operazione corrisponda a:
- acquisto beni ammortizzabili
- acquisto beni strumentali non ammortizzabili
- acquisto beni / servizi destinati alla rivendita
- altri acquisti
 
**Riferimento documento**: Rende visibile, in corrispondenza delle righe del movimento contabile due campi ulteriori per annotare il riferimento alla data e numero documento (ad es. fattura sulla riga del conto di contropartita).

### 1.3 Parametri

#### Ordine dei tab nelle registrazioni contabili

E' dedicata all'impostazione dell'ordine con il quale presentare i tabulatori previsti, attraverso gli appositi pulsanti: **Sposta su** e **Sposta giù**. 

#### Parametri registrazione

**Controllo tipo conto**: la presenza di questo flag imporrà alla procedura di verificare la corrispondenza del sottoconto intestatario della registrazione rispetto alle impostazioni dei parametri di contabilità (es. uso di un conto cliente in una causale d'acquisto da fornitore): in caso di esito negativo sarà eseguito un semplice messaggio di avvertimento.

**Blocca registrazione se il tipo conto è incompatibile**: la presenza di questo flag imporrà alla procedura di annullare l'inserimento di un sottoconto intestatario della registrazione non valido rispetto alle impostazioni dei parametri di contabilità (es. uso di un conto cliente in una causale d'acquisto da fornitore).

**Permetti registrazione contabile con sbilancio**: la presenza di questo flag consentirà all'utente di salvare registrazioni contabili non bilanciate (sconsigliato). Può essere utile ad esempio (con le necessarie cautele) per forzare una contabilizzazione automatica che restituisce un messaggio di errore al fine di meglio comprendere il risultato della registarzione e correggere i settaggi.

**Blocca cancellazione registrazioni con partite pagate**: con questo flag non sarà possibile cancellare le registrazioni che abbiano all'interno almeno una partita con un pagamento collegato.

**Blocca registrazione se il valore delle partite non è uguale al movimento contabile**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali il valore dei movimenti contabili non corrisponde ai valori di movimentazione dei partitari (in apertura e in chiusura partite): nel caso in cui non sia impostato, la procedura, comunque eseguirà un messaggio di avviso della presenza di una differenza. Il controllo viene eseguito su tutti i sottoconti che nel piano dei conti hanno impostato il flag *Apertura partite*.

**Blocca registrazione se il totale documento è differente dal totale dei dati iva**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali il valore totale dei movimenti iva non corrisponde ai totali impostati in testata della registrazione: nel caso in cui il campo non sia impostato comunque la procedura eseguirà un messaggio di avviso.

**Aggiorna automaticamente il totale del documento al variare dei dati nella griglia dell'iva: l**a presenza di questo flag imporrà alla procedura di aggiornare, ma solo in incremento, i totali della testata della registrazione al variare della somma totale inserita nella sezione iva della registrazione.

**Aggiorna anche in decremento**: questo flag, attivo solo quando il precedente è impostato, forzerà la procedura ad aggiornare i totali della registrazione anche in decremento.

**Blocca registrazione se l'ordine di protocollo non è rispettato**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali l'ordine temporale di protocollazione non sia rispettato: in particolare, con questo flag la procedura recupererà numeri di protocolli solo nel caso in cui sia stata impostata una data registrazione valida per il numero stesso. Se il flag non viene inserito, comunque la procedura eseguirà un messaggio di avviso della mancanza di ordine di protocollazione: si ricorda, inoltre, che la stampa registri iva non consente, nell'impostazione di default, di stampare in definitivo registri iva che abbiano buchi nella numerazione oppure non seguano l'ordine di protocollazione corretto.

**Gestione separata Cdc/Cdp**: questo flag, attivo solo nel caso in cui la causale gestisca sia i centri di costo che di profitto, consentirà di assegnare i movimenti economici di contabilità sia ai centri di costo che ai centri di profitto. Se non è impostato, invece, il movimento può essere assegnato solo a uno delle due sezioni.

**Ricalcolo automatico CdC, CdP e commesse**: il flag in oggetto sarà riportato anche nelle registrazioni contabili basate su questa causale: il significato è quello di eseguire automaticamente o meno il ricalcolo delle sezioni analitiche dei centri di costo, profitto e delle commesse una volta entrati in modifica di una registrazione contabile già salvata. All'atto dell'inserimento di una nuova registrazione, fino al suo primo salvataggio, l'aggiornamento di queste sezioni sarà sempre automatico nel rispetto delle impostazioni di default definite.

**Blocca registrazione se il valore dei Cdc/Cdp non è uguale al movimento contabile**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali il valore totale dei movimenti analitici dei centri di costo e profitto non corrisponde agli importi economici movimentati nella sezione di contabilità generale: nel caso in cui il flag non sia inserito sarà comunque eseguito un messaggio di avviso della mancata corrispondenza dei valori.

**Raggruppa Iva in libro giornale**: la presenza di questo flag imporrà alla procedura di raggruppare nel libro giornale le righe Iva assegnate allo stesso sottoconto contabile (e alla stessa divisione).

**Blocca salvataggio con numero documento duplicato**: la presenza di questo flag, inserito di default, imporrà alla procedura di bloccare il salvataggio di registrazioni contabili con stesso numero documento, stesso anno, stesso tipo documento e anagrafica in testata della registrazione.

**Background colour**: impostare in questo campo il colore di sfondo per visualizzare nelle ricerche a video i movimenti basati su questa causale. L'uso dei colori può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

**Foreground colour**: impostare in questo campo il colore di dei testi da visualizzare nelle ricerche a video i movimenti basati su questa causale. L'uso dei colori può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

**Sample text**: il campo visualizza il risultato della combinazione di colori impostata.

**Carattere corsivo**: impostare in questo campo la visualizzazione in corsivo dei caratteri per questa causale nelle ricerche a video: può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

**Carattere grassetto**: impostare in questo campo la visualizzazione in grassetto dei caratteri per questa causale nelle ricerche a video: può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE CAUSALI CONTABILI**](/docs/video/finance/intro)
:::

### 1.4 Controllo aliquote IVA

In questo tab è possibile inserire alcune aliquote IVA (precedentemente codificate nella tabella [**Aliquote / Modalità IVA**](/docs/configurations/tables/finance/vat-rates/)) che vincoleranno l'utente all' utilizzo esclusivo delle stesse.

Rappresenta dunque una forma di controllo e di vincolo ad utilizzare solo codici iva ritenuti corretti e consoni alla scrittura contabili gestita dalla causale in oggetto.

La possibilità di inserire nella griglia e dunque di attivare il controllo è abilitata dal flag **Imposta aliquote IVA abilitate**.
 
E' presente accanto ai campi che riportano il codice / descrizione dell'aliquota inserita, un campo per impostare una data di fine validità della scelta precedentemente effettuata e dunque cambiare o concludere la politica di gestione.