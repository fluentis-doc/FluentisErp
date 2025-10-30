---
title: Scenarij upravljanja agentom – primjeri
sidebar_position: 5
---

Na ovoj stranici prikazani su neki primjeri koji mogu poslužiti kao vodič za definiranje mogućeg scenarija upravljanja agentom.

Ovakav pristup koristan je za razumijevanje povezanosti između različitih funkcionalnosti i za ilustraciju primjera kriterija izračuna provizije.

Slijedit ćemo ovaj redoslijed:

- Definiranje razreda (raspona) provizija  
- Kreiranje šifre agenta i odgovarajuće konfiguracije  
- Povezivanje s kupcima  
- Kreiranje prodajnih dokumenata  
- Naplata računa  
- Provjera obračuna provizija  
- Likvidacija agenata  
- Upravljanje naknadama agenata  
- Uplate doprinosa Enasarco i poreza po odbitku (kratki osvrt)  
- Izrada potvrde o porezu po odbitku (kratki osvrt)

## Definiranje razreda provizija

Jedan od najčešće korištenih kriterija za izračun provizija — i s didaktičkog stajališta zanimljiviji od klasičnih pristupa poput fiksnog postotka ili postotka ovisnog o kupcu — temelji se na *rasponima popusta*.  

Cilj je definirati provizije koje se smanjuju s povećanjem popusta koji agent odobrava kupcu.

Posebnost konfiguracije ovog kriterija, u odnosu na jednostavnije, leži u potrebi prethodnog definiranja tablice raspona popusta koji su povezani s odgovarajućim postocima provizija.

Prvi korak je upravljanje tablicom **Definicija raspona provizija** (potrebno umetnuti poveznicu).

:::important[Važno]
**Obratite pozornost na zaglavlje maske** – preporučuje se da ga uvijek držite vidljivim pomoću ikone *pin* u gornjem desnom kutu. Zaglavlje sadrži ključni filter za upravljanje tablicom: [***raspon popusta***](/docs/configurations/tables/sales/discount-range).

Povezana tablica omogućuje definiranje tipova raspona (kod, opis i povezivanje s unaprijed definiranim kriterijem), ali **u zaglavlju maske potrebno je odabrati raspon popusta** kako bi bilo moguće vidjeti ili uređivati podatke tog raspona.
:::

Odabrani raspon popusta može biti tipa *Jedinstven* (jednostavan) ili se temeljiti na *klasi* artikla, *tipu artikla*, *karakteristici*, *kategoriji robe* kojoj artikl pripada, ili *prodajnom cjeniku* u kojem je artikl definiran. Za svaki od tih kriterija moguće je definirati odgovarajuće detalje.    

Ako ne odaberemo raspon popusta, prikazani podaci bit će dostupni samo za čitanje (sivi, neaktivni).  

U skladu s odabranim rasponom popusta, u zaglavlju će se pojaviti i dodatni (padajući) filter.  

Ako smo, primjerice, definirali raspon popusta prema kategoriji robe te imamo unaprijed definirane kategorije (npr. vijčana roba, alati itd.), tada bismo za svaku kategoriju prikazanu u lijevoj tablici mogli, u desnom panelu, definirati pripadajuće razrede provizija.  

Unosi se šifra i opis, primjerice raspon od nema popusta do 10% možemo označiti šifrom 010, a u opisu ga slobodno definirati kao "od 0 do 10%".
Zatim je potrebno u sljedeća dva polja unijeti postotke koji određuju raspon — u prvo polje unosimo vrijednost 0, a u drugo vrijednost 10.  


:::important[Važno]
Prilikom definiranja raspona potrebno je paziti da **nema preklapanja ni praznina** među vrijednostima.  
Kao što je naznačeno na oznakama polja, raspon vrijedi od vrijednosti **veće ili jednake** određenoj vrijednosti **do** vrijednosti **manje od** sljedeće.
:::

U polje **Vrijednost** unosimo **postotak provizije** koji vrijedi za taj raspon popusta, a u posljednjem stupcu biramo opciju **Postotak**.  
Ako želimo, možemo umjesto toga odabrati *Vrijednost* i unijeti iznos provizije u apsolutnom iznosu.

Ako smo odabrali kriterij „Jedinstven popust“, tada u lijevoj tablici neće biti detalja — definiramo samo globalne raspona s pripadajućim postocima.

![](/img/it-it/sales/agents/definizione-fasce-provvigionali.png)

U prikazanom primjeru, popust od 35% odgovara proviziji od 3%.  

## Kreiranje šifre agenta i konfiguracija  

Pri kreiranju šifre agenta — ovdje izdvajamo samo najvažnija polja — nakon što se definira [**kriterij obračuna provizija**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) za osnovne faze izrade šifre agenta, nakon što se postavi[**kriterij dospijeća provizija**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement), primjerice po potvrđenoj narudžbi, po izdanom računu ili po izvršenom plaćanju (posljednja je opcija u praksi najčešća jer priznaje proviziju u omjeru s naplaćenim iznosom) — te nakon što se popune ostala polja od fiskalnog i doprinosa značaja, kao što su **kategorija agenta i predujam poreza na dohodak** (ili režim izuzeća), prelazimo na izračun same provizije (vrijednosti provizije) te je povezujemo s prethodno odabranim kriterijem.  

U kartici [**Izravne provizije**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions) nalazi se mreža u kojoj odabiremo kriterij **Raspon popusta**.  

**Obratite pozornost na polje Prioritet** – po zadanim postavkama u šifri agenta postoji kriterij “Anagrafika agenta” s prioritetom 1. Taj kriterij treba ili ukloniti ili mu smanjiti prioritet (npr. na 2), a kriteriju *Raspon popusta* postaviti prioritet 1.  
Na taj način, ako kriterij s rasponom ne pronađe primjenu, koristi se rezervni (osnovni) kriterij iz šifre agenta.

:::danger[Upozorenje]
Za složene kriterije poput *Raspon popusta* potrebno je definirati detalje klikom na **tipku Detalj odabranih postotaka** u traci izbornika.
:::

![](/img/it-it/sales/agents/provvigioni-dirette.png)

**U novootvorenoj maski potrebno je ponovno odabrati odgovarajući raspon popusta kako bi se prikazale pripadajuće provizijske razrede.**

Nakon što se pritisne tipka i otvori odgovarajući prozor, prikazat će se rasponi koje su već definirane. Ti se rasponi smatraju standardnima.

Možemo prihvatiti standardne vrijednosti za ovog agenta, bez ikakvih izmjena, ili putem radio gumba ***Provizije*** prebaciti prikaz na **Prilagođene**.  
U tom slučaju stupac **Vrijednost** postaje **izmjenjiv**, te je moguće definirati vrijednosti koje vrijede isključivo za tog agenta.

Također je dostupan radio gumb ***Referentna cijena*** pomoću kojeg se određuje treba li za izračun koristiti cijenu iz šifrarnika artikla ili onu definiranu u retku prodajnog dokumenta.

:::danger[Upozorenje]
Potrebno je definirati i raspon **Datuma valjanosti**, barem polje *Od datuma valjanosti*.
:::

![](/img/it-it/sales/agents/definizione-provvigioni.png)

## Povezivanje s kupcima

:::tip[Upozorenje]
**U svakom slučaju**, bez obzira na odabrani kriterij izračuna, **agenta je potrebno povezati s kupcima** za koje će ostvarivati provizije.

Jednom kupcu može biti dodijeljeno više agenata.
:::

Za povezivanje, umjesto otvaranja pojedinačnih kartica kupaca i ručnog unosa agenta u tab [**Agenti**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) može se koristiti alat **Dodjela agenata** (*Početna > Kontakti > Dodjela agenata*).

Ovdje je moguće pokrenuti pretragu (s raznim filtrima u zaglavlju) koja prikazuje sve kupce te, prelaskom s retka na redak, vidjeti agente koji su već povezani s pojedinim kupcem.

Ova je procedura vrlo korisna i za održavanje — primjerice, u slučaju prestanka rada jednog agenta i preuzimanja kupaca od strane drugog.

Tipka **Dodaj** u alatnoj traci omogućuje dodavanje novog agenta svim odabranim kupcima.  

Ostale tipke omogućuju uobičajene radnje poput zamjene, brisanja i ažuriranja datuma valjanosti, u slučajevima prijenosa ili prestanka suradnje.

Na ovaj se način može masovno unijeti i postotak provizije za pojedinog kupca, no u našem primjeru koristimo izračun temeljen na *sustavu popusta*.


## Izrada prodajnih dokumenata

Izračun provizije u dokumentima kao što su narudžba, otpremnica i račun odvija se automatski prema ranije definiranim postavkama.  
Vrijednost popusta, koja određuje iznos provizije, može se unositi na različite načine bez utjecaja na točnost izračuna.

Za detalje pogledajte postupak [**definicije popusta**](/docs/sales/price-control/definition/) u području *Prodaje*.

Nota: nella testata dei documenti di vendita viene evidenziato l'agente o gli agenti agganciati, ma per controllare il valore della provvigione calcolata (già a partire dal documento in questione) occorre spostarsi nel tab [**Articoli**](/docs/sales/sales-invoices/invoicing/sales-invoice) 

## Incasso delle fatture

Nel nostro esempio abbiamo impostato una maturazione a **pagamento avvenuto**, pertanto ai fini della possibilità di procedere alla liquidazione della provvigione, previa verifica della sua maturazione, **rileva la registrazione contabile di chiusura della** (o delle) **partita aperta** che si è generata con la [contabilizzazione](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) della fattura di vendita.

Nota: si ricorda che in caso di incasso tramite ricevuta bancaria rileva l'effettiva data di **maturazione** dell' effetto, data che potrebbe essere incrementata secondo un parametro presente nel modulo [Rischio Cliente](/docs/configurations/parameters/treasury/customer-risk-parameters).
(N. giorni oltre la scadenza per effetti presentati al salvo buon fine - N. giorni oltre la scadenza per effetti presentati al dopo incasso)

## Controllo maturazione delle provvigioni

Per la verifica della maturazione delle provvigioni e dunque la possibilità di liquidarle ed i risultati attesi, sempre considerando il criterio scelto sull'avvenuto pagamento (che rende questa verifica importante) possiamo utilizzare la stampa di riferimento, [**Provvigioni maturate**](/docs/sales/agents/reports/accrued-commissions).

Infatti la stampa è in grado di rappresentare in anteprima quanto è maturato d il valore della liquidazione che andremo a generare e poi liquidare attraverso la conversione in un compenso percipiente (l'agente è di per se un percipiente a fronte delle ritenute d'acconto).

Altre stampe del modulo invece sono utili per verificare più in dettaglio gli importi astrattamente dovuti ma non necessariamente maturati, quali [**Cedolini agenti**](//docs/sales/agents/reports/agents-payslip).

## Liquidazione agenti

La procedura di [**Creazione automatica liquidazione provvigioni**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) permette di elaborare il calcolo e di considerare liquidate le provvigioni che verranno incluse.

Da quel momento queste provvigioni non saranno più visibili eseguendo la stampa [**Provvigioni maturate**](/docs/sales/agents/reports/accrued-commissions) la quale continuerà a mostrare eventuali residui nel caso, ad esempio, di pagamenti parziali delle partite aperte o comunque di pagamenti parziali delle fatture interessate.
Questi residui saranno chiaramente liquidabili e confluiranno in un liquidazione successiva nel momento in cui le rispettive partite saranno chiuse mediante una registrazione contabile di incasso. Ricordiamo infatti che il nostro esempio prevede il criterio del pagamento avvenuto (pro quota rispetto agli incassi) e che sono possibili criteri diversi quali la semplice emissione della fattura, che renderebbe le provvigioni subito maturate, oppure criteri ancora più restrittivi quali il **pagamento totale** (disponibile solo se le provvigioni vengono gestite con il [**modulo amministrativo**](/docs/finance-area/maturity-values/maturity-values/commissions)).

:::note[Nota]
Con il metodo del *pagamento avvenuto* la selezione delle provvigioni da liquidare sarà sempre "tutto" *fino alla data*, non è possibile selezionare quello che è maturato in uno specifico range di date e non è previsto un collegamento con il campo della periodicità di liquidazione presente in anagrafica agente.

I range di filtro presenti nella procedura infatti sono riferiti alle date di ordini/bolle/fatture, non a livello di date di **pagamento**. 

Ciò è necessario perchè mentre per i documenti non c'è modo di aggiungerne di nuovi / modificare in periodi già liquidati, il discorso è diverso per i pagamenti: niente vieta di creare un pagamento con data registrazione in un periodo già chiuso in un calcolo liquidazione agenti (magari perché non non sono state riconciliate le banche o si è commesso un errore in una vecchia registrazione), dunque il dato verrebbe "perso" nei calcoli successivi.
:::

Poichè nella griglia di selezione degli agenti sulla sinistra risulta visibile il criterio di maturazione (pro memoria) nel caso in cui si necessiti di lavorare liquidando le provvigioni in relazione ad un determinato periodo di riferimento dei documenti emessi, con criteri diversi dal pagamento avvenuto (vedi nota sopra) è possibile utilizzare i filtri sulle date dei documenti presenti nell'area di destra nella form.

Dopo aver selezionato gli agenti, anche per gruppi in relazione a possibili diversi criteri di maturazione e dunque esigenze di filtraggio documenti, è richiesto , in basso a destra, di impostare una descrizione della liquidazione, la data è proposta come data odierna e non ha influenza sul filtraggio dati, contraddistingue unicamente la data di elaborazione della liquidazione, è necessario infine compilare il mese e l'anno di competenza della liquidazione ai fini del calcolo del minimale e massimale per il contributo Enasarco.

E' bene prestare attenzione alla compilazione del periodo inquanto, ad esempio (in caso di errata imputazione) se in un determinato trimestre non verranno reperite provvigioni liquidate all'agente (ad esempio perchè erroneamente imputate al periodo successivo), il software stanzierà comunque una liquidazione di soli contributi a carico ditta che devono essere versati.

Eseguendo il calcolo il software ritorna un messaggio di conferma oppure un avviso riferito agli agenti per i quali non dovessero essere state trovate provvigioni da liquidare.

Al termine, nel caso si voglia effettuare dei controlli, è possibile [**aprire la liquidazione**](/docs/sales/agents/agent-settlement/insert-settlement) con doppio click dopo averla [**ricercata**](/docs/sales/agents/agent-settlement/search-agent-settlement).

All'interno è possibile ottenere la lista elle fatture considerate per la liquidazione, per fare questo spostarsi sul tab **Fatture** e premere il bottone nella ribbon bar **Ricerca**.

Il risultato è rappresentato nelle due griglie inferiori di cui la prima mostra le fatture considerate (a livello di dati di testata) e la seconda il dettaglio delle righe fattura con le relative provvigioni.

:::danger[Attenzione]
si tratta del valore delle provvigioni **astrattamente calcolate** sulle singole righe della fattura, non necessariamente maturate nella liquidazione di cui il valore totale potrebbe differire inquanto parzialmente incassate.

Nel caso di pagamenti parziali di una partita, dove il residuo, ad esempio viene saldato in un periodo successivo, la prima liquidazione che include la prima quota del pagamento verrà visualizzata nel dettaglio con il valore dell'intera provvigione, mentre la liquidazione che include la quota residua avrà sempre visibile il riferimento fattura nella griglia superiore, ma sarà vuota nella griglia inferiore.

E' in programma il rilascio di un ulteriore campo che indichi il di cui effettivamente confluito nella liquidazione.
:::



## Gestione dei compensi agenti

All'interno della liquidazione sono già inseriti i dati relativi alla ritenuta d'acconto ed alle quote a carico dell'agente (da trattenere e versare per suo conto) ed a carico ditta mandante del contributo Enasarco.

A questo punto utilizzando l'apposita procedura, dalla liquidazione [**creiamo il compenso**](/docs/sales/agents/procedures/create-professional-man-commission).

Il compenso creato automaticamente sarà ricercabile nel modulo amministrazione dei [**Compensi percipienti**](/docs/finance-area/professional-men/search-compensations/search-compensations-intro).

## Versamenti Enasarco e ritenute d'acconto 

L'inserimento automatico nel modulo percipienti attraverso il compenso consente anche la [**gestione del pagamento**](/docs/finance-area/professional-men/accounting/payments-accounting/payments-accounting-intro), sia che l'agente abbia emesso una fattura sia che la stessa sia una proforma, e gestisce automaticamente il debito verso l'erario per il [**versamento della ritenuta d'acconto**](/docs/finance-area/professional-men/procedures/model-f24/f24-management).

L'apposita procedura per la [**contabilizzazione del contributo enasarco**](/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro) da versare (sia a carico ditta sia trattenuta quota a carico agente) esegue la scrittura contabile che rileva il costo e il debito, il versamento fisico e la relativa scrittura contabile vanno eseguite manualmente.

## Elaborazione della certificazione delle ritenute d'acconto

Il percorso si conclude con [**l'elaborazione della certificazione per le ritenute d'acconto**](/docs/finance-area/declarations/declarations/withholding-tax-certification) operate nei confronti dell'agente.

Siamo ormai nel modulo amministrativo e si tratta di gestire un adempimento di tipo fiscale, quindi rinviamo i dettagli. Il cenno è utile per far capire come l'area vendite ed amministrativa siano collegati in questo caso a fronte delle caratteristiche dell'agente il quale, oltre alle necessità di calcolo delle provvigioni, subisce delle ritenute d'acconto e viene dunque fatto confluire nella gestione dei professionisti percipienti.