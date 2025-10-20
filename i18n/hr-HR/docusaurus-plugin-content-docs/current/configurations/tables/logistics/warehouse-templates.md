---
title: Predlošci zapisa skladišta
sidebar_position: 9
---

:::important Čemu služi 
Tablica Predlošci zapisa skladišta u Fluentisu ključna je za upravljanje skladišnim operacijama, omogućujući definiranje i prilagodbu razloga koji se koriste za knjiženje ulaza i izlaza robe. Korisnici jednostavno mogu dodavati nove razloge u tablicu, unoseći obavezne podatke poput skladišta, koda razloga

Jedna od glavnih značajki ove tablice je mogućnost dodjele specifičnih razloga za svako skladište, što daje veliku fleksibilnost u prilagodbi poslovnih procesa. Svaki razlog može biti definiran kao ulazni ili izlazni, što omogućuje precizno upravljanje utjecajem na stanje zaliha.

Osim toga, moguće je konfigurirati različite opcijske parametre, uključujući vidljivost u određenim područjima i definiranje predloženih troškova za knjiženja. Također, može se aktivirati automatsko ažuriranje prosječnih troškova, zadnjih troškova i prodajnih cijena ovisno o izvršenim skladišnim operacijama. Sve ove značajke čine ovu tablicu ključnim dijelom učinkovite kontrole skladišnih procesa i praćenja troškova.  
:::

Kroz ovaj prozor postavljaju se svi razlozi skladišnih knjiženja potrebni za premještanje artikala u i iz različitih skladišta upisanih u posebnu tablicu *Skladišta*.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.  

**Predlošci zapisa skladišta**

Forma se sastoji od područja za filtriranje i područja za rezultate. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na tipku **Pretraži** kako bi se rezultati prikazali u tablici rezultata.  

**Unos predložaka zapisa skladišta**

Za unos novih kodova potrebno je kliknuti u prazni prvi red tablice ili pritisnuti tipku **Novi**.

**Skladište**: u ovom stupcu korisnik treba postaviti, koristeći padajući izbornik koji dohvaća podatke iz tablice *Skladišta*, šifru skladišta za koje se želi unijeti predložak zapisa;

**Predložak**: u ovom stupcu korisnik unosi šifru predloška zapisa skladišta. Maksimalna duljina je 3 alfanumerička znaka. Moguće je kreirati više predložaka s istom šifrom, pod uvjetom da su za različita skladišta; dva predloška s istom šifrom za isto skladište nisu dopuštena;

**Opis**: u ovom stupcu korisnik unosi opis predloška zapisa skladišta, koji može imati maksimalno 80 alfanumeričkih znakova;

**Tip**: u ovom stupcu korisnik unosi *Tip pokreta* koji karakterizira predložak. Može biti *Zadužen*, gdje se količina pokreta u skladištu bilježi kao pozitivna, ili *Istovaren*, gdje se količina bilježi kao negativna;  

**Vidljivo u nabavi**: ako je aktivno, predložak je vidljiv u području nabave;

**Vidljivo u prodaji**: ako je aktivno, predložak je vidljiv u području prodaje;

**Vidljivo u proizvodnji**: ako je aktivno, predložak je vidljiv u području proizvodnje;

**Vidljivo u podizvođaču**: se attivo, rende visibile la causale nell’area conto lavoro;

**Visibile in Logistica**: se attivo, rende visibile la causale nell’area logistica;

**Predloženi trošak**: u ovom stupcu korisnik bira koji se trošak automatski predlaže prilikom ručnog unosa pokreta. Predloženi trošak može biti posljednji trošak, prosječni trošak, prodajna cijena ili standardni trošak artikla. Vrijednosti dolaze iz kartice artikla. Važno je napomenuti da predloženi trošak ima prioritet nad dokumentima; stoga predlošci koji će se koristiti u dokumentima trebaju imati vrijednost "Nijedan" za predloženi trošak kako bi se uzimao trošak iz dokumenta;  

**Ažuriraj prosječni trošak**: svi pokreti izvršeni korištenjem uzroka koji ima ovaj flag aktiviran doprinose izračunu prosječne ponderirane cijene artikla. Treba napomenuti da se flag ne može aktivirati ili deaktivirati nakon što je uzrok već korišten, čak i za samo jedan pokret skladišta. Obično se ovaj flag aktivira samo za pokrete utovara, ali se može aktivirati i za pokrete istovara, kada se želi osigurati da se prosječna ponderirana cijena artikla izračunava uzimajući u obzir i prodajne cijene povezane s istovarima skladišta samog artikla.  
Prosječna cijena u kartonu artikla ažurira se s iznosom pokreta samo ako su aktivni i flagovi *Ažuriraj trošak artikla* i *Porezni interes*;

**Ažuriraj posljednji trošak**: svi pokreti s predloškom koji ima ovaj označivač aktiviran sudjeluju u izračunu posljednjeg troška artikla. Ne može se mijenjati nakon prvog korištenja. Obično se koristi samo za prijeme.   
Posljednji trošak u kartici artikla ažurira se samo ako su aktivni i *Ažuriraj trošak artikla* i *Porezni interes*;    

**Ažuriraj prodajnu cijenu**: ne može se mijenjati nakon prvog korištenja. Koristi se uglavnom za otpremu. Prodajna cijena u kartici artikla ažurira se samo ako je aktivan označivač *Ažuriraj trošak artikla*;     

**Ažuriraj trošak artikla**: kada se unosi pokret skladišta koristeći u zaglavlju registracije predložak koji ima aktiviran flag **Ažuriraj trošak artikla**ažuriraju se prosječni trošak, posljednji trošak i/ili prodajna cijena u kartici artikla, ovisno o tome koji su od sljedećih flagova aktivirani: *Aggiorna costo medio*, *Aggiorna costo ultimo* e *Aggiorna prezzo di vendita*.      

**Porezni interes**: kada se unosi skladišni pokret koristeći u zaglavlju registracije predložak koji ima aktiviran flag **Porezni interes** sam pokret se uključuje u skladišni dnevnik te u izračun posljednjeg i prosječnog troška, kao i u valorizirani inventar po količini – pod uvjetom da i artikl koji se koristi ima aktiviran flag *Porezni interes* u kartici *Općenito*;

**Točka narudžbe**: kada se unosi skladišni pokret koristeći u zaglavlju registracije predložak koji ima aktiviran flag **Točka narudžbe** taj pokret se uzima u obzir prilikom obrade u postupku izračuna točke narudžbe;       

**Upravljanje serijama**: kada se unosi skladišni pokret koristeći u zaglavlju registracije predložak koji ima aktiviran flag **Upravljanje serijama** pokret omogućuje unos serije u odgovarajuću tablicu registracije skladišta za artikl koji se vodi po serijama.
Isti princip vrijedi i za upravljanje **Serijskim brojevima**;

**Integracija početne količine**: koristi se isključivo uz upravljanje serijama; omogućuje povećanje količine serije već unešene prethodnim pokretom, zadržavajući isti broj serije.  

**Kreiraj seriju iz serije**: ako je flag aktivan, omogućuje da se ta skladišna predložena zapisa prikaže kao predložak unutar procedure Kreiranje serije iz serije, kojom se omogućuje zamjena jedne serije drugom; program tada automatski kreira pokret za izlaz iz jedne serije i ulaz u drugu seriju istog artikla.
Dostupna je i dodatna procedura Kreiranje serije iz serije uz promjenu artikla, kojom je moguće iz jedne serije određenog artikla preći na drugu seriju drugog artikla.
Da bi se ovaj flag mogao aktivirati, predložak mora biti tipa **Istovar** a aktivni moraju biti i sljedeći flagovi: **Upravljanje serijama**, **Integracija početne količine**. Također, flag **Sastavnica materijala** e smije biti aktivna, a u polju **Predložak protupokreta za ulaz** mora biti postavljen odgovarajući predložak.;

**Nedostupne serije**: kada se unosi skladišni pokret koristeći predložak koji ima aktivan flag *Nedostupne serije* moguće je obaviti izlaz i iz serija koje se nalaze u statusu "nedostupno";

**Kreiraj serijske brojeve (S/N)**: ako je flag aktivan, omogućuje se upravljanje serijskim brojevima te njihovo automatsko generiranje pri unosu pokreta;  

**Obavezan dokument**: kada se unosi skladišni pokret koristeći predložak koji ima aktiviran flag **Obavezan dokument** obavezno je unijeti podatak u polje *Referentni dokument* unutar registracije skladišta – u suprotnom nije moguće nastaviti s unosom.;

**Conto obbligatorio**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag **Conto Obbligatorio** attivato, è obbligatorio specificare qualcosa nel campo *Cliente/Fornitore* della registrazione di magazzino. Viene usata di solito per le registrazioni relative al consumo e alla consegna materiali di conto lavoro, altrimenti non è possibile proseguire;

**Distinta base**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag ‘Distinta Base' attivato allora nel momento in cui si salva la riga del movimento, anziché inserire l'articolo selezionato (che deve obbligatoriamente avere una distinta base) vengono inseriti gli articoli di primo livello della distinta base. Viene spesso usato in causali di scarico di contropartita per scaricare i componenti di un articolo caricato dalla causale principale;

**Invantario fisico**: il flag **Inventario fisico** consente di decidere quali siano le causali di magazzino che debbano poter essere selezionabili nei [Parametri differenze inventariali](/docs/configurations/parameters/logistics/stock-difference) come causali da utilizzare nel calcolo delle differenze inventariali. Le registrazioni di magazzino che saranno create automaticamente dalla procedura *Differenze Inventariali* presenteranno in testata causali di questo tipo;

**Magazzino di Contropartita**: in questa colonna l'utente può specificare il codice del **Magazzino di contropartita**, attingendo tramite l'apposita combo box alla tabella dei *Magazzini*. Esso non è altro che il magazzino che deve comparire nel tab *Contropartita* della registrazione di magazzino;

**Causale di Contropartita**: in questa colonna l'utente può specificare il codice della **Causale di contropartita**. Ciò consente di fare in modo che quando venga creato un movimento di magazzino utilizzando la causale principale, venga automaticamente inserito anche un movimento di segno opposto. Ad esempio, si imposta la causale di contropartita per eseguire spostamenti tra magazzini diversi o per fare spostamenti tra ubicazioni diverse all'interno dello stesso magazzino;

**Rimanenze**: con questo flag l'utente può designare per una sola causale per ciascun magazzino quale debba essere la causale usata dalla procedura *Valorizzazione magazzino* che esegue la chiusura di magazzino per creare le registrazioni carico per inventario iniziale. Per far si che i movimenti creati con questa causale, vengano presi in considerazione dall'[Inventario a quantità valorizzato](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity), è necessario che siano attivi anche i flag di **Interesse fiscale** e, a seconda della necessità, anche quelli di **Aggiornamento costo ultimo** e **Aggiornamento costo medio**; inoltre, per far si che il movimento di rimanenza creato abbia un costo deve essere anche inserito un valore nel campo **Costo proposto**;       

**Tipo documento gestionale**: si usano nelle localizzazioni estere tipo Romania/Croazia dove i movimenti di magazzino devono essere registrati anche in contabilità;     

**Causale contabile**: si usano nelle localizzazioni estere tipo Romania/Croazia dove i movimenti di magazzino devono essere registrati anche in contabilità. Viene utilizzato per selezionare i modelli predefiniti del libro mastro principale che consentono di registrare i movimenti di magazzino nel libro mastro principale per ciascun magazzino e il relativo modello di moviemtno di magazzino dipendente dal tipo e dalle impostazioni precedentemente definite;           

**Tipo causale contabile**: si usano nelle localizzazioni estere tipo Romania/Croazia dove i movimenti di magazzino devono essere registrati anche in contabilità;    

**Ubicazione**: in questa colonna, l'utente può inserire, attingendo dall'apposito *Help ubicazioni*, che si apre con un doppio click sulla casella stessa, l'ubicazione predefinita che verrà proposta nel movimento di carico o di scarico qualora non sia passata dalla procedura che crea il movimento. L'impostazione dell'ubicazione di default è di solito utilizzata sulle causali di carico, in quanto lo scarico deve essere effettuato dall'ubicazione sulla quale si trova l'articolo nel momento in cui si esegue lo scarico stesso; quindi, l’ubicazione presente nel documento avrà la priorità su quella presente nella causale di magazzino;

**Indice rotazione**: se questo flag è attivo allora le registrazioni create con tale causale vengono considerate nella procedura del calcolo dell'**Indice di rotazione** di magazzino (Stampa);

**Alternative**: l'attivazione di questo flag avviene in contemporanea al flag *Distinta Base*; se attivo, quando si crea un movimento con una causale di scarico che abbia entrambi i flag attivati e uno dei componenti non ha quantità sufficiente per essere scaricato, la procedura controlla se un articolo alternativo (specificato nella distinta base) ha invece quantità sufficiente per essere scaricato in luogo del componente principale;

**Alternative Miste**: l'attivazione di questo flag avviene in contemporanea al flag *Distinta Base*; se attivo, la procedura scarica contemporaneamente più articoli alternativi fino al completamento della quantità necessaria. Esso è strettamente legato al flag *Alternative*;

**Considera movimenti a zero**: con l'attivazione di questo flag l'utente può decidere quali siano i movimenti di magazzino con quantità pari a zero che debbano concorrere al calcolo del costo medio ponderato degli articoli; questa è l'unica causale che permette di inserire un movimento con quantità pari a zero. Ovviamente il flag viene di solito attivato su casuali che abbiano il flag *Aggiornamento Costo Medio* attivato;

**Tracciabilità**: se attivo, indica che i movimenti generati con questa causale verranno usati per la [Tracciabilità dei lotti](/docs/logistics/lots-serial-numbers/lots-register); questa procedura garantisce la possibilità di risalire a quali materiali sono stati impiegati all'interno di un certo prodotto finito oppure, al contrario di capire in quali prodotti finiti è stato utilizzato un certo materiale.

**Scarto**: se attivo, rende visibile la causale per la definizione degli scarti nella form *Prelievi aggiuntivi produzione* e nel tab *Scarto* delle [Dichiarazioni di produzione](/docs/production/pp-production-in-progress/signals/sisgnals/);	

**Rettifica unità di carico**: se attivo, rende visibile la causale per le rettifiche delle unità di carico;      

**D.D.M.R.P. ADU**:  se attivo, indica che la causale è utilizzata per riconoscere tutti i movimenti di magazzino interessati al calcolo ADU (*Average Daily Use*) dell'articolo (questo flag è visibile sempre e solo se è stato impostato il menu DDMRP).        

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
