---
title: Tipovi narudžbi klijenta
sidebar_position: 23
---

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako se želi konfigurirati ručno, potrebno je pratiti kontrolni popis na poveznici.
:::

Tablica se otvara putem **Tablice > Prodaja > Tipovi narudžbi klijenta**.

Omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.

Forma se sastoji od područja za filtriranje i područja za rezultate. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na tipku **Ricerca** kako bi se rezultati prikazali u mreži rezultata.  
 
Za unos novih zapisa potrebno je kliknuti na prvu praznu red u mreži ili pritisnuti tipku **Novo**.  

**Tip/Opis:** polja u kojima se unosi šifra i opis tipologije narudžbe klijenta. Važno: šifra mora biti jedinstvena po tvrtki i diviziji;   

**Numeracija**: ovdje se unosi šifra odgovarajuće numeracije. Za više informacija o numeraciji dokumenata pogledati članak [Numeracije Fluentis](/docs/configurations/tables/fluentis-numerations); 

**Automatsko kreiranje projekta** i **Tip projekta**: ako je aktivno, sustav će prilikom unosa narudžbe klijenta automatski kreirati projekt tipa navedenog u stupcu Tip projekta unutar istog tipa narudžbe, s istim brojem narudžbe klijenta. Projekt se automatski povezuje s narudžbom i služi kao spremnik za povezane dokumente i njihove stavke. Projekt se ažurira prema promjenama u narudžbi i održava vezu stavka-projekt.  

**Automatska potvrda narudžbe**: ako je aktivno, pri unosu nove narudžbe datum potvrde narudžbe se automatski postavlja jednak datumu unosa narudžbe;   

**Isključi blokadu**: odnosi se na blokadu zbog prekoračenja limita, upravljanu putem Lock Managera u području blagajne u procedurama korištenja limita. Ako je aktivno, sustav neće blokirati narudžbu zbog prekoračenja limita, već će korisnik moći unijeti i ispisati dokument; ako nije aktivno, narudžba će se blokirati, a korisniku neće biti dopušten ispis dokumenta;   

**Evidencija tipa otpremnice**: sadrži tip otpremnice koji se generira pri pokretanju procedure automatsko Izvršenje otpremnice/primke dostupno u ribbon tipki Pretraživanje narudžbi klijenata;   

**Evidencija tipa fakture**: sadrži tip fakture koji se generira pri pokretanju procedure automatsko Izvršenje računa u ribbon tipki Pretraživanje narudžbi klijenata.; 

**Evidencija tipa picking**: sadrži tip picking-a koji se generira pri kreiranju picking dokumenta iz [Otpremnica](/docs/logistics/shipping/shippings); 

**Blokiraj ispisani dokument**: ako je aktivno, ne dopušta izmjenu narudžbe klijenta koja ima aktiviran flag Ispisano u zaglavlju;   

**Limit**: ako je aktivno, narudžba ovog tipa se uzima u obzir za izračun prekoračenja limita;   

**Cash flow**: ako je aktivno, tip narudžbe doprinosi izračunu [cash flow](/docs/treasury/cash-flow/cash-flow/search-cash-flow); 

**Skladište/Opis skladišta**: ovdje se navodi [skladište](/docs/configurations/tables/logistics/warehouses) u kojem se rezerviraju artikli za taj tip narudžbe; skladište se primjenjuje na sve stavke narudžbe tog tipa.  

**Predlošak /Opis predloška skladišta**: ovdje se navodi predlošak za kretanje artikala rezerviranih za taj tip narudžbe; *predložak se primjenjuje* na sve stavke narudžbe tog tipa.

**Ne zbrajaj količinu artikla pri isporuci**: ako je aktivno, prilikom djelomične isporuke iste stavke narudžbe u istom dokumentu (otpremnica, faktura itd.) količine se ne zbrajaju, nego se svaka isporuka pojavljuje kao zasebna stavka;   

**Provjera dostupnosti**: ako je aktivno, ovaj tip narudžbe se uzima u obzir u [izračunu dostupnosti](/docs/erp-home/registers/items/calculate-availability); 

**PDV ugovora nabave**: ako je aktivno, pri kreiranju narudžbe sustav provjerava postoji li za artikl kod poljoprivrednog PDV-a; inače se koristi PDV iz [kartice artikla](/docs/erp-home/registers/items/create-new-item); 

**Cijena s PDV-om**: upravljanje cijenama s PDV-om aktivira se ovim parametrom. Pri preuzimanju cijena za dokument s flagom Cijena s PDV-om, sustav traži odgovarajući cjenik i izračunava popuste na cijenu s PDV-om. Cijena bez PDV-a računa se prema stopi PDV-a iz kartice klijenta ili artikla. Ako ne postoji valjani cjenik s flagom Cijena s PDV-om, koristi se prodajna cijena iz kartice artikla. Razlike u obračunu nastaju prilikom dupliciranja narudžbi ili isporuke u dokumente s različitim flagom. Za detalje pogledati članak Preuzimanje cijena i popusta u dokumentima prodaje.      

**Tip proizvodne narudžbe**: ovdje se unosi tip proizvodne narudžbe koji će se generirati iz ovog tipa narudžbe klijenta u *Definiciji MPS*. Ako je aktivan flag *Generiranje proizvodne narudžbe*, narudžba se generira automatski po potvrdi narudžbe.   

**Tip narudžbi dobavljača/Opis tipa OF**: šifra tipa narudžbe dobavljača koja će se generirati ako se koristi procedura kreiranja narudžbe dobavljača iz narudžbe klijenta;   

**Kontrola klijenta**: ako je aktivno, u trenutku kada se kupac unese unutar narudžbe, sustav će izvršiti provjeru na karticama, provjeravajući da li uneseni kod obavezno odgovara kodu kartice kupca. Ako to nije slučaj, sustav će obavijestiti korisnika; bez ovog flag-a moguće je kreirati narudžbe i za tipove računa dobavljača.

**Upravljanje matrica Extra Data**: ako je aktivno, za artikle s matricom prikazuje se dodatna kartica za unos količina po ćelijama matrice. Ako nije aktivno, kartica i matrica se ne prikazuju. Za detalje pogledati članak Upravljanje Matrici Extra-Data.  

**Konfiguracija**: ovdje se unosi šifra za automatsko postavljanje ExtraData u zaglavlju narudžbe klijenta.  

**Ispis**: ovdje se postavlja zadani ispis za ovaj tip dokumenta; prilikom ispisa potrebno je odabrati Višestruki ispisi za automatsko korištenje zadanog ispisa;  

**Broj kopija**: ovdje se postavlja broj kopija dokumenta za ispis;   

**Generiranje proizvodne narudžbe**: ako je aktivno, proizvodna narudžba tipa navedenog u stupcu *Tip proizvodne narudžbe* kreira se automatski po potvrdi narudžbe. 

:::note
Kada se doda nova stavka u narudžbu klijenta za koju se automatski generiraju proizvodne narudžbe, nova stavka u proizvodnoj narudžbi dobiva status *Ne pregledano.*.
:::

**Upravljanje sredstvima**: ako je aktivno, u kartici artikala narudžbe prikazuje se kartica Osnovna sredstva za povezivanje narudžbe s prodajom sredstva.  

**Tip operacije**: uvijek povezan s upravljanjem sredstvima; ako je unesen, automatski se prikazuje u widgetu Tip operacije unutar kartice Osnovna sredstva u kartici artikala narudžbe.     

**Tip popusta/Opis**: u ovoj koloni moguće je povezati tip popusta koji će se primijeniti kada se popusti unose direktno u kolonu *Popusti artikla* u mreži artikala dokumenta (za više detalja pogledati članak [Upravljanje pojednostavljenim widgetom popusta](/docs/sales/sales-flow/discount-widget)).