---
title: Scenarij upravljanja agentom – primjeri
sidebar_position: 5
---

Na ovoj stranici prikazujemo nekoliko primjera za sastavljanje mogućeg scenarija upravljanja agentom.

Ova vrsta putanje korisna je za razumijevanje poveznica između različitih funkcionalnosti i za davanje nekoliko primjera kriterija izračuna.

Slijedit ćemo ovu sekvencu:  
- Definiranje provizijskih razreda  
- Kreiranje kartice agenta i odgovarajuća konfiguracija  
- Povezivanje s klijentima
- Kreiranje prodajnih dokumenata
- Naplata faktura  
- Kontrola zaračunavanja provizija  
- Isplata agenata  
- Upravljanje naknadama agenata  
- Uplate Enasarco i porezne zadržavanja (osnovno)  
- Obrada potvrda o poreznim zadržavanjima (osnovno)  

## Definiranje provizijskih razreda

Jedan od najčešće korištenih kriterija za izračun provizija, a s didaktičkog gledišta i najzanimljiviji u odnosu na klasične metode poput fiksnog postotka ili postotka ovisno o klijentu, predstavlja *Razine popusta*.

Cilj je definirati opadajuće provizije kako raste popust koji agent odobrava klijentu.

Posebnost konfiguracije ovog kriterija, u usporedbi s jednostavnijim metodama, leži u potrebi da se unaprijed definiraju razine popusta povezane s pripadajućim postocima provizije.

Prvo stoga upravljamo tablicom **Definiranje provizijskih razreda** (umetnite link).  

:::important[Važno]
**Obratite pažnju na zaglavlje forme**: preporučuje se da bude uvijek vidljivo pomoću tipke za pin u gornjem desnom kutu. Zaglavlje sadrži ključni filter za upravljanje tablicom: [***raspon popusta***](/docs/configurations/tables/sales/discount-range).

Povezana tabela jednostavno omogućuje definiranje tipova koji su omogućeni, određujući kod i opis te se povezuje s unaprijed definiranim kriterijem među onima koji su prisutni, ali **u zaglavlju obrasca u komentaru potrebno je odabrati raspon popusta** kako bi se moglo vidjeti ili upravljati detaljima vezanim uz odabrani raspon.
:::

U vezi s odabranim rasponom popusta, koji može biti tipa *Jedinstveni* (jednostavni), ili prema *klasama* artikla, *tipologiji* artikla ili nekoj njegovoj *karakteristici* (sva polja prisutna u bazi podataka i povezana s artiklom te stoga mogu biti valorizirana), ili prema kategoriji robe kojoj artikal pripada, ili prema cjeniku prodaje u kojem je artikal uključen, možemo definirati detalje.

Ako ne odaberemo nikakav raspon popusta, pretraživanje će proizvesti podatke samo za čitanje (nepromjenjive, u sivoj boji).

Na temelju raspona popusta pojavit će se dodatni specifični filtar (u padajućem izborniku), uvijek u zaglavlju.

U ovom trenutku, ako bismo, na primjer, postavili raspon popusta na kategoriju robe i naravno imali naše kategorije u sustavu (npr. vijčana roba, alati itd.), za svaku od ovih kategorija prikazanih u lijevoj mreži našeg obrasca, mogli bismo definirati, na desnoj ploči, provizijske razrede.

Postupak započinje unosom koda i opisa, na primjer, raspon od nula popusta do 10% možemo kodirati kao 010, a u opisu slobodno definirati "od 0 do 10%". U ovom trenutku u dva sljedeća polja definiramo dvije postotne vrijednosti raspona, u prvom 0, a u drugom 10.

:::important[Važno]
Obratite posebnu pažnju na način definiranja razina, bez ostavljanja praznina, imajući na umu – kao što se vidi iz oznaka – da raspon ide od vrijednost **veće ili jednake** ... do vrijednosti **manje od**...
:::

U sljedećem polju **Vrijednost** definiramo **proviziju** agenta koja se odnosi na postavljeni raspon / interval, a u posljednjem stupcu odabiremo opciju **Postotak**, budući da namjeravamo koristiti postotne provizije, ali bismo također mogli prebaciti na opciju *Vrijednost* i koristiti polje za apsolutnu vrijednost provizije.

Ako bismo odabrali kriterij popusta **Jedinstveno**, ne bismo imali nikakve detalje s lijeve strane i izravno bismo prešli na definiranje razreda s valjanim postotnim rasponima.

![](/img/it-it/sales/agents/definizione-fasce-provvigionali.png)

U slici, 35% popusta odgovara proviziji od 3%.

## Kreiranje kartice agenta i odgovarajuća konfiguracija

Prilikom kreiranja kartice agenta, u primjeru ćemo prikazati samo najvažnija polja, uz napomenu da se za osnovne korake kreiranja kartice može konzultirati **odgovarajuće stranice**. Nakon što postavimo **kriterij obračuna provizije**, , npr. po potvrđenoj narudžbi, izdanoj fakturi ili izvršenoj uplati (najčešće korišteno jer priznaje proviziju proporcionalno naplaćenom iznosu), te popunimo ostala polja od interesa za porez i socijalno osiguranje, poput **kategorije agenta i poreznog zadržavanja** (ili režima oslobođenja), prelazimo na izračun provizije (vrijednost provizije) i povezujemo je s odabranim kriterijem.  

U kartici [**Direktne provizije**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions) osim polja za fiksnu naknadu i opći postotak provizije za tog agenta, s desne strane nalazi se tablica u kojoj se odabire kriterij **Razine popusta**.

**Obratite pažnju na polje Prioritet** također zbog toga što se prema zadanim postavkama kartica inicijalizira s kriterijem *Kartica agenta* i prioritetom 1. Moramo ukloniti ovaj kriterij, ili još bolje, postaviti ga s nižim prioritetom, na primjer 2, a s prioritetom 1 našu *Rasponi popusta*. Na taj način, ako se specifični kriterij koji nas zanima ne primijeni u konkretnom slučaju, imat ćemo preostali kriterij koji će dodijeliti postotak upisan u kartici agenta u susjednom polju o kojem smo govorili.

:::danger[Pažnja]
S kriterijem "složenim" poput *Razine popusta* i drugih, **potrebno je definirati detalje pritiskom na tipku *Detalj odabranih postotaka na traci izbornika***.
:::

![](/img/it-it/sales/agents/provvigioni-dirette.png)

**U otvorenom obrascu potrebno je ponovno odabrati referentni raspon popusta kako bi se prikazale provizijske kategorije.**

Svrha pritiskanja tipke i otvaranja ove forme je da vidimo učitane razine koje smo već definirali. Te se razine stoga smatraju standardnima.  

Stoga možemo prihvatiti standard za ovog agenta, i stoga ne napraviti nikakve izmjene, ili, putem odgovarajuće radio tipke ***Provizije***, prebaciti čitanje na **Prilagođene**. Tako postaje kolona **Vrijednost** **mogućnost izmjene** i možemo definirati valjane vrijednosti samo za tog agenta.

Također imamo radio tipku ***Referentna cijena*** kojom se definira hoće li referentna cijena za izračun biti cijena iz kartice artikla ili specifična cijena definirana u retku prodajnog dokumenta.

:::danger[Pažnja]
Podsjetimo se definirati i raspon **Datuma valjanosti**, barem polje Od datuma valjanosti.  
:::

![](/img/it-it/sales/agents/definizione-provvigioni.png)

## Povezivanje s klijentima

:::tip[Pažnja]
**U svakom slučaju**, bez obzira na odabrani kriterij izračuna, **agenta je potrebno povezati s klijentima** za koje će se obračunavati provizija.

Svakom klijentu može biti povezan više agenata.  
:::

Za povezivanje, umjesto otvaranja pojedinačnih kartica klijenata i unošenja agenta u kartici [**Agenti**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) na raspolaganju nam je alat u formi **Dodjela agenata** (Home > Kontakti > Dodjela agenata).  

Ovdje je moguće pokrenuti pretraživanje (opremljeno raznim filtrima u zaglavlju) koje prikazuje sve kupce, a pri prelasku s jednog retka na drugi prikazuje, za svakog kupca, agente koji su eventualno već povezani.

Postupak je osobito koristan i za održavanje, npr. u slučajevima prestanka rada jednog agenta i dolaska drugog.

Tipka **Dodaj**, na traci izbornika, omogućuje nam da dodamo novog agenta svim odabranim klijentima.

Ostale tipke nam intuitivno omogućuju druge operacije kao što su zamjena, brisanje, ažuriranje datuma valjanosti itd. u prethodno navedenim slučajevima zamjena i prestanka itd.  

Također je moguće unijeti, na ovaj masovni način, postotak provizije koji se odnosi na pojedinog kupca, ali to nije slučaj u našem primjeru gdje razmatramo na temelju popusta.

## Izrada prodajnih dokumenata

Izračun provizije u dokumentima kao što su narudžba, otpremnica i faktura (navodi se u koracima kreiranja sljedećeg dokumenta iz prethodnog) odvija se automatski na temelju postavki definiranih iznad. Vrijednost popusta koja određuje iznos provizije može se ostvariti na različite načine, a da to ne predstavlja problem za izračun provizije.

Upućuje se na postupke [**definiranja popusta**](/docs/sales/price-control/definition/) u području Prodaje.  

Napomena: u zaglavlju prodajnih dokumenata ističe se agent ili agenti povezani, ali za provjeru vrijednosti izračunate provizije (već od samog dokumenta) potrebno je preći na kartici [**Artikli**](/docs/sales/sales-invoices/invoicing/sales-invoice) 

## Naplata faktura

U našem primjeru postavili smo dospijeće na temelju **Izvršeno plaćanje**, pertanto ai fini della possibilità di procedere alla liquidazione della provvigione, previa verifica della sua maturazione, **rileva la registrazione contabile di chiusura della** (o delle) **partita aperta** che si è generata con la [contabilizzazione](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) della fattura di vendita.

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

**ATTENZIONE: si tratta del valore delle provvigioni astrattamente calcolate sulle singole righe della fattura, non necessariamente maturate nella liquidazione di cui il valore totale potrebbe differire inquanto parzialmente incassate.**

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