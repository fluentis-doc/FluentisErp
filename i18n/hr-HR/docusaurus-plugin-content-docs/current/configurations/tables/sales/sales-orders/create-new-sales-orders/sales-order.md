---
title: Novi nalog kupca  
sidebar_position: 2
---

Forma **Kreiraj narudžbu kupca** otvara se putem puta **Prodaja > Narudžbe kupaca > Nova narudžba** ili putem tipke koja se nalazi u formi [Pretraga narudžbi kupaca](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

## *Kako kreirati narudžbu kupca*

## **1. Obavezni podaci**

Kako bi se nastavilo s kreiranjem narudžbe kupca, korisnik mora unijeti **obavezna** polja:  

- **Vrsta narudžbe**: zadano u  Konfiguracija > Tablice > Prodaja > [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types); za detaljno razumijevanje različitih mogućnosti konfiguracije pogledaj pripadajuću dokumentaciju. Za unos narudžbe potrebno je da vrsta narudžbe ima definiranu tipologiju numeracije, što je obavezan podatak. Ovisno o konfiguraciji vrste narudžbe, mogu se otvoriti različiti scenariji prilikom unosa narudžbe kupca — primjerice automatsko kreiranje projekta, upravljanje cijenama s PDV-om, upravljanje matricama itd.     
- **Broj**: svakom se dokumentu dodjeljuje broj prema numeraciji definiranoj u tablici [Numeracija narudžbi kupaca](/docs/configurations/tables/fluentis-numerations)  i prema vrsti dokumenta koja sadrži numeraciju. Numeracija povezana s vrstom narudžbe obično ima automatsku progresiju temeljenu na datumu i broju, s funkcijom „oporavka” koja pokriva eventualne praznine u slijedu (npr. zbog brisanja dokumenata). Ovo ponašanje reguliraju dva specifična flag-a u tablici numeracije. Ako korisnik želi ručno unijeti broj, može isključiti flag progresije datum-broj i flag oporavka brojeva. Također mora uključiti flag vanjske numeracije, čime se sustavu signalizira da će se numeracija unositi ručno.  
- **Kupac**: pomoću [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravnim unosom](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).   Nakon unosa kupca, automatski se popunjavaju, ako su definirani u registru, sljedeća polja: valuta, država, jezik, zona, isporuka, cjenik i eventualni popusti, plaćanja, popusti, troškovi, agenti, odredište, prijevoznici, dodatni podaci.                 
- **Datum narudžbe**: označava datum kreiranja narudžbe. Ovaj datum je važan za izračun rokova i eventualnih uvjeta plaćanja. Predlaže se današnji datum, ali se može izmijeniti; ako numeracija predviđa progresiju po datumu i broju, a korisnik unese datum u prošlosti, Fluentis će provjeriti dostupnost brojeva za taj datum i upozoriti ako ih nema.        
- **Vrsta zadržavanja**: ovo se polje vidi samo ako kupac koristi zadržavanje (ritenutu), odnosno ako je u njegovoj kartici označen istoimeni flag i vrsta zadržavanja u kartici [fiskalne informacije](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information). Zadržavanje je porezno zadržavanje primjenjivo na isplate za profesionalne usluge. Za ispravno funkcioniranje, u tablici vrsta zadržavanja mora biti ispravno definiran kod za elektroničko fakturiranje. Dokument automatski primjenjuje zadržavanje na redove gdje je to moguće i automatski računa iznos zadržavanja.  

Forma sadrži niz kartica.

## **2. Zaglavlje**

Nakon što su odabrani obavezni podaci u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  ili pomoću [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

:::note Zapamti
Ako se dokument *kreira automatski*, ti se podaci preuzimaju iz *izvornog dokumenta* iz kojeg je generiran.
:::


### 2.1 Podaci o kupcu

Unosom **Kupca**, automatski se *predlažu* svi specifični podaci u kartici **Zaglavlje**, prema podacima prethodno definiranim u [registru kupaca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima adrese i *sekcijama*:  
- **Valuta**: sadrži [valutu](/docs/guide/common/glossary/glossary-intro#currency), [tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: sadrži [državu](/docs/guide/common/glossary/glossary-intro#country), [jezik](/docs/guide/common/glossary/glossary-intro#language), [zonu](/docs/guide/common/glossary/glossary-intro#zone).
- **Isporuka**: sadrži [način isporuke](/docs/guide/common/glossary/glossary-intro#shipment), [prijevoz](/docs/guide/common/glossary/glossary-intro#carriage), [pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [cjenik prodaje](/docs/guide/common/glossary/glossary-intro#sales-price-list) i [vrijedi do](/docs/guide/common/glossary/glossary-intro#validity-date)
- Ostala polja koja se predlažu s izborom kupca, ali su izmjenjiva: [Odredište](/docs/guide/common/glossary/glossary-intro#destination), [Primatelj](/docs/guide/common/glossary/glossary-intro#recipient).

### 2.2 Neobavezni podaci zaglavlja

- **Datum isporuke**: datum predviđene isporuke robe.  
- **Datum spremnosti robe**: datum kada će roba biti spremna; mora biti manji ili jednak prethodnom datumu.      
- **Potvrđeno**: ovaj flag označava da je narudžba potvrđena i može se izvršiti; pored njega se nalazi **Datum potvrde**. Ovaj je uvjet obavezan ako se narudžba treba obraditi u kasnijim dokumentima (poput otpremnice ili računa), kao i za planiranje proizvodnje.        
- **Ispisano**: aktivira se kada se narudžba ispiše i označava da je dokument ispisan; flag je važan i za omogućavanje prijenosa narudžbe u druge dokumente.       
- **Arhivirano**: označava da se dokument treba arhivirati.     
- **Otkazano**: aktivni flag otkazuje narudžbu; status narudžbe prelazi u „prisilno izvršeno“, jer narudžba više ne smije biti prenosiva u druge dokumente.      
- **Jedinstveni kod projekta/CIG**: ako je u [fiskalnim informacijama](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) kupca omogućeno upravljanje CIG i CUP, ovdje se mogu unijeti ti podaci.    
- **Bilješke kupca**: preuzimaju se iz registra kupca, ali ih se može ručno unijeti.   
- **Naša referenca/Vaša referenca**: obično se koristi za unos interne i kupčeve reference; ako je narudžba generirana automatski, ova polja se popunjavaju podacima iz izvornog dokumenta (ako postoji samo jedan).       
- **Početne bilješke**: mogu se odabrati iz tablice *Konfiguracija > Alati > Upravljanje kodiranim bilješkama* pomoću dvostrukog klika i odabira kroz pomoć, ili se mogu unijeti ručno.         
- **Operater**: omogućuje unos korisnika koji kreira dokument. Zaposlenici su definirani u tablici *Home > Zaposlenici*; ovo polje postaje obavezno ako je tako definirano u [Parametrima](/docs/configurations/parameters/sales/sales-orders-parameters) dokumenta.         
- **Status izvršenja**: kada se narudžba realizira kroz dokumente poput otpremnice ili računa, status automatski prelazi iz *Neizvršeno* u *Djelomično izvršeno* ili *Izvršeno*. Korisnik može prisilno označiti narudžbu kao izvršenu; tada se bilježi i datum izvršenja.         

:::note
Ako se aktivira stanje *Prisilno izvršeno*, prikazuje se poruka:  
„Prisilno izvršenje retka uzrokuje automatsko brisanje eventualnih planiranih narudžbi povezanih s projektima u statusu ‘planirano’ te njihovo označavanje kao izvršeno. Projekti u statusu ‘pokrenuto’ ili ‘izvršno’ neće biti izmijenjeni.”
:::

- **Početak valjanosti**: datum od kojeg počinje izračun rokova plaćanja.   

#### Specifične tipke     
> **Izvršenje iz projekta**: pokreće postupak kreiranja narudžbe iz projekta.            
> **Zamijeni predviđeni datum isporuke u redovima**: omogućuje masovnu zamjenu datuma u redovima artikala nakon što je datum unesen u zaglavlju.             
> **Zamijeni agenta u redovima**: otvara prozor za unos agenta koji će se primijeniti na sve redove artikala.             
> **Zamijeni agenta u redovima**: otvara prozor za unos agenta koji će se primijeniti na sve redove artikala.               
> **Pomoć za primatelje/odredišta**: otvara pomoć za izbor primatelja/odredišta povezanih s kupcem.    

U zaglavlju su zatim dostupne neke dodatne kartice koje slijede u nastavku.     

### 2.3 Plaćanja

**Rješenja plaćanja** automatski se preuzimaju iz *Kartice kupca > kartica Plaćanja* i korisnik ih može mijenjati ili brisati.

Ako je **Vrsta plaćanja** povezana s financijskim popustom, taj se popust uzima u obzir samo u računovodstvenom smislu, tj. u rokovima dospijeća, ali ne u ukupnom iznosu dokumenta.

Specifična tipka u ovoj kartici je **Obriši plaćanja**, kojom se brišu označeni redovi plaćanja.

### 2.4 Popusti

Predlažu se samo unaprijed definirani popusti preuzeti iz *Kartice kupca > kartica Popusti*, a ne oni koji se odnose na uvjete plaćanja ili određene artikle. Korisnik ih može mijenjati ili brisati.  
  
Popusti definirani u zaglavlju dokumenta automatski se primjenjuju na svaki novi red artikla koji se doda u dokument.  

Ako se popust doda nakon što su redovi artikala već uneseni, neće se primijeniti retroaktivno.

:::important Zapamti
Za upravljanje popustima na iznos potrebno je aktivirati u bazi podatka parametar GEN-GlobalSettings_CalculateDiscountOnAmount za odgovarajuće društvo.  
Ako ovaj parametar nije aktivan, popusti na iznos pretvaraju se u popuste po kaskadi.
:::

Specifična tipka u ovoj kartici je **Obriši popuste**, kojom se brišu označeni redovi popusta.


### 2.5 Agenti

Ovdje se navodi šifra agenta i njegova provizija za svaki red artikla. Predlažu se šifra i postotak definirani u *Kartici kupca > kartica Agenti*.  

Ako provizija nije povezana s kupcem u njegovoj kartici, agent se ipak mora unijeti, ali s provizijom NULL, jer ako bi bila 0, to bi značilo da je agent povezan, ali ne prima proviziju.

U slučaju generiranja otpremnice iz narudžbe, ovi će se podaci, naravno, prenijeti jednako kao i u narudžbi kupca.

Ista će se sekcija prikazati za svaki red artikla u odgovarajućoj kartici Agenti.

Specifična tipka ove forme je **Obriši agente**, koja omogućuje brisanje odabranih agenata.

### 2.6 Odredište

Ovdje se predlažu informacije unesene u *Kartici kupca > kartica Isporuke*, ali samo ako postoje zadani podaci. Padajući izbornik nudi sve primatelje, odredišta i prijevoznike definirane u registru kupca.  

Adrese isporuke (primatelj/odredište i prijevoznik) mogu se unijeti i samo opisno, bez prethodnog unosa među kontakte.  

Ako u registru nije definiran ovaj zadani podatak, kao primatelj i odredište predlaže se adresa unesena u osnovne podatke kupca.  

### 2.7 Prijevoznici

U sekciji **Prijevoznici** predlažu se podaci uneseni u kartici [Isporuka](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) u registru kupca. Posebno se predlaže subjekt na čiji će teret biti prijevoz — pošiljatelj, primatelj ili prijevoznik.
Ovisno o odabiru, prikazuju se različita polja:    
- Ako je prijevoz na teret **pošiljatelja**, moguće je unijeti registarsku oznaku vozila, datum i vrijeme početka prijevoza, a automatski se predlaže adresa društva.    
- Ako je prijevoz na teret **primatelja**, moguće je unijeti registarsku oznaku vozila, datum i vrijeme početka prijevoza, s prijedlogom adrese odredišta.    
- Ako je prijevoz na teret **prijevoznika**, dostupna su polja: računovodstveni subjekt prijevoznika, registarska oznaka, datum i vrijeme prijevoza.  


### 2.8 Dodatni podaci

Ovdje se nudi informacija unesena u *Kartica subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

### 2.9 Zajednički nositelji

Ova je kartica aktivna samo ako je u kartici kupca, kartica [fiskalne informacije](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information).   Upravljanje suvlasnicima omogućuje da više osoba zajednički budu nositelji narudžbe.  
Suvlasnici moraju biti uneseni u alternativne adrese u registru, s adresom koja je [tipa](/docs/configurations/tables/general-settings/address-types) *suvlasnik*. Na taj se način pojavljuju u ovoj kartici, gdje je potrebno ručno unijeti postotke raspodjele troškova.

## **3.a Grupirani artikli**

Ova je kartica aktivna i vidljiva samo za one [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types) koje imaju postavljen flag *Upravljanje matricama dodatnih podataka* i odgovarajuću *konfiguraciju*. Ova kartica omogućuje generiranje varijanti artikla za različite kombinacije valjanih atributa, koje će se zatim prenijeti u sljedeću karticu *Artikli*. Za sva polja koja nisu objašnjena na ovoj stranici, možeš se pozvati na dokumentaciju kartice *Artikli*.     
Unosom [artikla koji se vodi kroz matricu](/docs/erp-home/registers/items/create-new-item) u mrežu artikala, u kartici *Matrice* prikazat će se matrica povezana s registracijom artikla. U ćelijama matrice moguće je unijeti naručene količine za svaku kombinaciju; moguće je popunjavati samo one ćelije koje imaju valjanu kombinaciju u registru.       
Nakon što su unesene količine za sve kombinacije, potrebno je kliknuti tipku na alatnoj traci *Potvrdi vrijednosti matrice* kako bi se generirale varijante prema svim mogućim kombinacijama.  
Svaka varijanta popunit će jedan red u sljedećoj kartici *Artikli*, s pripadajućom količinom.

## **3.b Artikli**

U ovoj se kartici unose svi artikli s pripadajućim podacima.

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz upotrebu [helpa na polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili mogu biti predloženi iz povezanih procedura.

Za unos **novog artikla** u mrežu dovoljno je pozicionirati se na redak i popuniti različite podatke ili koristiti tipku **Novi** koja se nalazi na traci izbornika.

U nastavku su objašnjena *obavezna* polja prisutna u glavnoj mreži:  
- **Redak**: ovo polje sadrži broj retka i automatski se popunjava progresivno prilikom unosa podataka u redak.  

- **Vrsta retka**: omogućuje odabir, putem padajućeg izbornika, artikala s različitim karakteristikama:  
>- *Kodirani artikal*: artikli koji su kodirani u registru i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.   
>- *Nekodirani artikal*: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu.    
>- *Artikal troškova*: artikli (kodirani ili nekodirani) koji se zasebno prikazuju u sažecima dokumenata; ako je artikal troška kodiran i od fiskalnog značaja, bit će evidentiran u skladištu, dok ako nije kodiran ili nije fiskalno relevantan, neće se evidentirati u skladištu.    
>- *Artikal bilješke*: opisne bilješke koje se prikazuju u ispisu dokumenta; ne utječu na računovodstvo ni na skladište.    
>- *Artikal poklon*: poklon-artikal se tretira kao kodirani ili nekodirani artikal s računovodstvenog i skladišnog aspekta, ali se kao poklon iskazuje zasebno u sažecima dokumenta; ovisno o flagu *Rivalsa IVA*, iznos PDV-a za poklon može biti obračunat na teret subjekta ili ne.

:::note[NAPOMENA]
Ako se započne izravno unosom artikla, njegova klasa, šifra i vrsta retka — *Kodirani artikal* — unose se automatski.
:::

**Klasa/Šifra/Opis artikla**: se ogu unijeti  [ručno ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz upotrebu  [helpa u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koji će prikazati sve unesene podatke u *Šifarniku artikla*.

Nakon unosa artikla, njegov *Opis* bit će automatski preuzet iz šifarnika. Ako artikl ima *Varijante*, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: predlaže se glavna mjerna jedinica artikla, ali korisnik ima mogućnost odabrati drugu mjernu jedinicu.

**Količina**: predstavlja količinu glavne mjerne jedinice i kao zadanu vrijednost ima 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izuzimanje (na primjer iz narudžbe dobavljača)..

**Cijena**: Cijena se preuzima iz cjenika unesenog u karticu kontakta; cjenik referentnog artikla prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako je u kartici subjekta povezano više cjenika u nizu. (vidi [Šifarnik kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) ), isti dokument može sadržavati artikle iz različitih cjenika.

Kroz dvostruki klik u polju **Cjenici** (kartica *Popusti/Cjenici*) Korisnik ima mogućnost odabrati preuzimanje koje nije zadano, a iz kojeg se želi preuzeti cijena unesenog artikla.

:::note[NOTA]
Ako cjenik nije dostupan, predloženi podatak bit će **prodajna cijena** preuzeta iz *Kartice artikla > kartica [Troškovi](/docs/erp-home/registers/items/create-new-item)* ili će se izračunati na temelju postavki parametara dokumenta. Ako ni taj podatak nije dostupan, prikazat će se cijena 0.
:::

- **Osnovica**: ovo polje sadrži jediničnu cijenu pomnoženu s količinom, umanjenu za popuste.  

- **Popusti na artikl**: sadrži popuste koji vrijede za artikl, a koji potječu iz zaglavlja, iz cjenika ili su uneseni ručno.  

- **Završni popusti na artikl**: sadrži završne popuste na artikl unesene u sažecima dokumenta, a koji se raspoređuju na sve artikle.  

**PDV**: *prioritetan* je podatak unesen u polje Šifra PDV-a u *Šifarniku kontakta*. Ako ne postoji, predlaže se vrijednost koja je se nalazi u'*Šifarniku artikla*, no korisnik ima mogućnost unijeti i neki drugi podatak. Ovo polje je obavezno.

#### Neobavezna polja

- **Barkod / Artikl kupca i Opis artikla kupca**: ovi se podaci preuzimaju iz informacija unesenih u *Kartici artikla*; za upravljanje barkodovima potrebno je aktivirati njihovo korištenje u [Parametrima narudžbe kupca](/docs/configurations/parameters/sales/sales-orders-parameters). Ovaj stupac omogućuje predlaganje artikla pretragom po njegovom barkodu. Budući da je barkod jedinstven, nakon što se unese barkod definiran u kartici artikla, sustav će automatski predložiti odgovarajući artikl.

- **Prihod od prodaje**: predlaže se podatak unesen u *Kartici artikla > kartica Opći podaci*; ako se ne može preuzeti automatski, potrebno ga je ručno odabrati između ponuđenih opcija u padajućem izborniku.  
U protivnom, izostanak ovog podatka može uzrokovati pogreške prilikom knjiženja računa koji će se generirati iz narudžbe, ako u *Kartici kupca > Računovodstveni podaci > kartica Administrativna* nije postavljena vrijednost u polju *Zadani prihod konta suprotnosti*.  

- **Prisilno realizirano**: ako je aktivno, ovaj **flag** označava da je red artikla prisilno realiziran — primjerice, zato što kupac više ne želi taj artikl ili jer je proizvedena i otpremljena količina manja od naručene, a ostatak se više neće proizvoditi, pa se količina zatvara prisilnim realiziranjem.   

:::note[NAPOMENA]
Ako se koristi proizvodnja, kada se ovaj *flag* aktivira, prikazuje se poruka koja upozorava korisnika: „Prisilno realiziranje retka uzrokuje automatsko brisanje eventualnih planiranih narudžbi povezanih s nalozima u statusu *planirano* te realizaciju naloga u statusu *planirano* i *neobrađeno*.“ Dokumenti generirani na temelju naloga u statusu *pokrenuto* ili *izvršno* neće biti izmijenjeni.    
:::

- **Data Merce pronta e Data consegna**: queste date indicano la data in cui il materiale sarà pronto (quindi quando la produzione sarà terminata) e la data in cui si prevede di consegnare il materiale; la Data Merce Pronta deve essere minore o uguale alla Data consegna.

Nella sezione Articoli sono presenti i seguenti pulsanti, nella barra degli strumenti: 

> **Distinta Base**: permette di aprire la distinta base dell'articolo selezionato per poterne visualizzare i dettagli; (per maggiori informazioni su questo argomento si rimanda alll'articolo Albero della disinta base e gestione strutture).  
> **Esplodi primo livello distinta**: permette di aggiungere nell'ordine cliente i materiali (materie prime e semilavorati) presenti nella distinta base dell'articolo; verranno quindi riportati nell'ordine i componenti di primo livello del prodotto finito. Questa opzione per esempio è molto utilizzata per i prodotti a Kit (quindi composti da più parti).  
> **Aggiornamento listini**: permette di aggiornare il prezzo dell'articolo in un listino esistente (salvare il documento per abilitare questi bottoni), oppure di creare un nuovo listino con l'articolo e il relativo prezzo selezionato.       
> **Suddividi quantità in più consegne**: consente di suddividere la quantità di una riga articolo in più righe in base alle date di consegna. Selezionando la riga e cliccando sul pulsante si aprirà la form **Consegne diverse** all'interno della quale verrà riportata la *Data merce pronta*, la *Data consegna* e la *Quantità* della riga. Nella riga successiva si dovrà andare ad indicare la *Data merce pronta* (che dovrebbe essere la stessa), la *Data di consegna* che sarà diversa e la *Quantità* che si andrà a spedire in quella data e poi bisognerà andare a modificare la data nella prima riga aggiornandola alla quantità rimanente in modo che la somma delle quantità delle due righe dia come risultato la quantità iniziale della riga prima dello sdoppiamento. Confermare l'operazione con il pulsante *OK*.  
> **Confezionamento**: permette di creare una UDC a partire dalla riga selezionata. La riga deve essere un articolo codificato e salvato nel documento. L'utente deve avere i diritti all'interno dei [Parametri di carico/scarico](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) per il caricamento del pallet. Inoltre l'articolo deve essere gestito a UDC ed in base alle impostazione del Tipo UDC inserite in anagrafica articolo, tab [Confezionamento](/docs/erp-home/registers/items/create-new-item), verrà creato l'UDC rispettando i criteri.      

Analizziamo a questo punto le tab presenti sotto la griglia articoli. 

### 3.b.1 Sconti/Listini

Questa tab ha come primo campo l'eventuale **Listino** valido per il cliente e collegato all'articolo, altrimenti è un campo che si può compilare manualmente per prendere il prezzo dell'articolo da uno specifico listino. Accanto ai dati del listino assegnato è presente il campo **Tipo scaglione**: esso riporta lo scaglione di sconto da utilizzare, che viene ripreso dall'anagrafica cliente oppure dal listino stesso.
Il flag **Prezzo manuale** permette di modificare il prezzo e gli sconti manualmente, e di mantenerli nei documenti che vengono creati dal documento dove la modifica è stata apportata.

Nella griglia invece vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione. Gli sconti possono essere ripresi: dall'anagrafica cliente, dalla soluzione di pagamento assegnata al documento, dal listino dall'associazione listino-cliente. Tutti i dati proposti sono modificabili.

Da questa griglia è possibile utilizzare il bottone **Cancell sconti** della barra degli strumenti. 

### 3.b.2 Dati articolo

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

import ItemVariant from './../../../import/fields/item-variant.md'

<ItemVariant />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Magazzino/descrizione/Causale**: in questi campi andrà indicato il magazzino di scarico del materiale con la relativa causale necessario per gli scarichi della merce al momento dell'emissione del DDT o della fattura; questi dati vengono impostati nella tabella dei [Tipi ordine](/docs/configurations/tables/sales/sales-order-types).

- **Progetto**: è il progetto associato al documento; questo può essere assegnata, nel caso dell'ordine cliente, con l'ausilio della procedura *Evasione da commessa* oppure può essere assegnata con l'ausilio del help di campo.

- **Rivalsa IVA**: se settato l'iva dell'omaggio viene considerata per il totale documento.

- **Offerta**: riporta il riferimento dell'offerta cliente se l'ordine proviene da [Offerta](/docs/sales/offers/search-offers).

- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

- **Note**: offre la possibilità di inserire note per ogni articolo che si vuole vengano riportate in tutti i documenti.  

### 3.b.3 Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.b.4 Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e i numeri seriali che devono essere scaricati dal magazzino e che sono collegati all'articolo nell'*Anagrafica articolo > tab [Lotti e Serial Number](/docs/erp-home/registers/items/create-new-item)* oppure possono essere inserite manualmente.

Questa operazione è condizionata dalla presenza dei lotti e dei numeri seriali nel magazzino. 

Se l'articolo non prevede la gestione dei Lotti/Numeri seriali, questo tab sarà disabilitato.  

#### Pulsanti specifici

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.b.5 Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.b.6 Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.b.7 Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.b.8 Matrici

Questo tab viene visualizzato esclusivamente per i [Tipi ordine](/docs/configurations/tables/sales/sales-order-types) che hanno il flag di gestione delle matrici Extra Data. 

### 3.b.9 Sezione valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

Il campo **Stato** in cima a questa sezione riporta la situazione dell'articolo nell'eventuale ciclo di produzione e si aggiorna in automatico in base allo stato della commessa collegata.
L'articolo può avere i seguenti stati:
- *Inserito* quando viene inserito l'articolo;
- *Confermato* quando l'ordine viene confermato, con i relativi flag e data in testata; 
- *In produzione* quando viene generata la commessa, attraverso la procedura di [Generazione commesse di produzione](/docs/planning/ms-master-scheduling/general-schedule) o automaticamente se il tipo ordine lo prevede; 
- *Prodotto* se la commessa collegata è in stato evaso;
- *Annullato* se l'articolo viene evaso forzatamente. 

## **4. Riepiloghi**

Nelle diverse sezioni di questo tab sono presentate le informazioni principali dell'intero documento e alcuni pulsanti specifici.

### 4.1 Sconti finali

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Riepilogo provvigioni agenti

In questa griglia vengono invece riepilogate le provvigioni totali maturate dall'agente per questo ordine, nel caso in cui vi sia l'agente collegato. Si troverà indicato l'agente e il valore della provvigione maturata.

### 4.3 Spese/Sconti/maggiorazioni finali

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.4 Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

### 4.5  Riepilogo scadenze    

In questa griglia vengono riportate le scadenze calcolate in base alle soluzioni delle tipologie di pagamento inserite. 

### 4.6 Altri campi 

**Note finali**: è un campo descrittivo che può essere compilato dall'utente anche con l'ausilio dell'*Help note codificate*. Possono essere inserite ulteriori note per il cliente riguardanti per esempio la consegna che verranno poi riportate nella stampa della Conferma d'Ordine nella parte finale della stampa.

### 4.7 Totali documento

Nella sezione destra di questa tab si possono consultare i riepiloghi del documento:       

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **5. Documenti collegati**

In questa tab è possibile consultare i documenti allegati.
Per allegare i documenti è possibile procedere in due modi:
- utilizzando il pulsante della barra degli strumenti **Documenti** si può scegliere se allegare un documento già codificato in Fluentis o se creare un nuovo Documento da allegare.       
- utilizzando direttamente nella griglia il tasto destro e selezionando *Allega file* si va in creazione di un nuovo Documento da allegare.     