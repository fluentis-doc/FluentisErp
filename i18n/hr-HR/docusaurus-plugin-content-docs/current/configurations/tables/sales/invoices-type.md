---
title: Vrste prodajnih računa  
sidebar_position: 20
---

:::tip[FAst Start]
Tablica je obuhvaćena postupkom [**Fast Start**](/docs/guide/fast-start)

U slučaju da se želi konfigurirati ručno, potrebno je slijediti check listu na povezanoj stranici.  
:::

Tablica se otvara putem **Tablice > Prodaja > Tipovi izlaznih računa** i koristi se za određivanje svojstava računa;  

Omogućuje umetanje novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja;  

Forma se sastoji od područja filtra i područja rezultata. Nakon što se postave svi željeni filtri, potrebno je kliknuti na tipku **Pretraži**, nakon čega će se rezultati prikazati u rešetki rezultata;  

Za unos novog zapisa potrebno je kliknuti na prvu praznu liniju u rešetki ili pritisnuti tipku **Novi**; 

**Tip/Opis**: tip računa i opis tipa; uneseni šifra mora biti jedinstvena;  

**Numeracija:** u ovo se polje upisuje šifra odgovarajuće numeracije. Za više informacija pogledati članak o [fluentis numeracijama](/docs/configurations/tables/fluentis-numerations); 

**Priroda računa**: odabire se priroda vezana uz tip računa (račun, storno račun, itd.);  

**Narudžba**: ako je aktivno, račun se može kreirati iz izvršenja narudžbe putem odgovarajuće procedure; inače je tipka Evidentiranje iz narudžbi deaktivirana;  

**Neposredni račun**: ako je aktivno, račun je neposrednog tipa te je potrebno popuniti podatke o transportu; ako nije aktivno, račun je odgođenog tipa i podaci o transportu preuzimaju se iz otpremnice;  

**Priroda Intrastat transakcije**: ovdje se upisuje šifra transakcije za Intrastat prijavu. Za više informacija pogledati [Natura transazioni intrastatPriroda Intrastat transakcija](/docs/configurations/tables/finance/nature-of-intrastat-transaction); 

**U statistici**: ako je aktivno, računi ovog tipa bit će uključeni u statistike i vidljivi u ispisima *Fakturat*;

**Proforma**: ako je aktivno, račun je proforma i ne može se knjižiti;

**Predložak**: ovdje se upisuje računovodstveni predložak korišten za knjiženje računa. Za više informacija vidjeti [predloške glavne knjige](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates);

**Tip dokumenta**: ovdje se upisuje analitički predložak korišten za knjiženje u analitičkom računovodstvu;  

**Napomena**: slobodan tekst za unos napomena o tipu računa;

**Kontrola kupca**: ako je aktivno, ovaj flag omogućuje sustavu da izvrši provjeru vrste kartona računa/podračuna koji je unesen u dokument kako bi se osiguralo da je obavezno kupac; Ako to nije slučaj, sustav će obavijestiti korisnika prikazujući poruku o pogrešci; Bilo bi *obavezno* aktivirati ga za sve vrste prodajnih faktura;

**Zaključaj dokument; otisnut**: ako je aktivno, ovaj flag onemogućuje izmjenu računa koji već ima postavljen flag *Otisnuto* u zaglavlju;

**Intrakomunitarni**: ako je aktivno, sustav provjerava da li je država kupca *država EU*; Ovaj flag treba *postaviti samo za vrste faktura unutar zajednice*; Ako ne postoji veza između kupca i vrste fakture unutar zajednice, sustav će vratiti poruku upozorenja.;

**Evidentiranje fakture proforme**: ako je postavljeno i faktura je proforma, evidentiranjem se izvršava narudžba; u suprotnom narudžba ostaje neizvršena;  

**Predložak prijevoza**: slobodno tekstualno polje u koje se upisuje predložak prijevoza koji će biti otisnut na fakturi;  

**Kredit**: ako je aktivno, račun s ovom vrstom ulazit će u kontrolu limita;

**Isključi blokadu:** odnosi se na blokadu zbog prekoračenja fida, definiranu u Lock Manageru unutar područja Riznice u procedurama korištenja fida. Ako je aktivno, sustav za ovu vrstu fakture neće primjenjivati blokadu dokumenta zbog prekoračenja fida te korisnik može unijeti i ispisati dokument. Ako nije aktivno, vrsta fakture bit će blokirana pri prekoračenju fida i korisniku neće biti dopušten ispis dokumenta;   

**Skladište/Opis skladišta**: u ova se polja upisuje [skladište](/docs/configurations/tables/logistics/warehouses) iz kojeg se rezerviraju artikli za tu određenu vrstu fakture. Navedeno skladište prenosi se u sve retke artikala unutar fakture ove vrste;   

**Predložak / Opis predloška skladišta**: u ova polja upisuje se [predložak kretanja](/docs/configurations/tables/logistics/warehouse-templates) za artikle koji se rezerviraju unutar te vrste narudžbe. Navedeni predložak prenosi se u sve retke artikala unutar narudžbe ove vrste; 

**Grupiranje rata**: ako je aktivno, prilikom knjiženja faktura grupe rata se spajaju. Za detalje pogledati odjeljak o [grupiranju rata](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping); 

**Poljoprivredni PDV za prodaju**: ako je aktivno, u fazi kreiranja DDT-a, sustav će provjeriti je li za korišteni artikal prisutan kod za poljoprivredni PDV, inače će se koristiti kod PDV-a prisutan u kartonu artikla;  

**Kontrola preuzetog Pickinga**: ako je aktivno, pri izradi fakture iz preuzetog Pickinga automatski se aktivira flag “preuzeto” za otpremnicu. Ako nije aktivno, flag se ne aktivira;   

**Zaključaj količinu Pickinga**: ako je aktivno, zaključava količinu i alternativnu količinu u fakturi kreiranoj iz popisa UDC-a. Ako nije aktivno, količina je slobodna za uređivanje. Preporučuje se uvijek aktivirati ovaj flag pri korištenju Pickinga i UDC-a;  

**Izračun provizija**: ako je aktivno, fakture ove vrste uključuju se u obračun provizija agenata;  

**Odvoji otpremnicu**: ako je aktivno, a faktura je tipa “Immediata”, omogućuje istovremeno razduženje i otpremnice i fakture koja je valorizira. Koristi se kad je potrebno evidentirati kretanje robe prije stvarnog razduženja dokumenta. U otpremnici se navodi predložak razduženja s protustavkom za zaduženje (za premještaj u drugo skladište), a zatim se fakturom konačno razdužuje roba iz drugog skladišta;     

**Ne izvršava Picking**: ako je aktivno, prilikom generiranja fakture picking neće biti izvršen;  

**Cijena s PDV-om**: upravljanje cijenama s PDV-om aktivira se ovim parametrom (dostupnim u svim prodajnim dokumentima, od cjenika nadalje). Pri dohvaćanju cijena traže se cjenici sa istim aktivnim flagom i popusti se računaju uvijek na cijenu s PDV-om. Iz cijene s PDV-om, prema stopi PDV-a iz kartice kupca ili artikla, računa se cijena bez PDV-a. U dokumentima su vidljive kolone Cijena i Cijena s PDV-om.
Napomena: ako ne postoji valjan cjenik sa aktivnim flagom “Cijena s PDV-om”, a artikl u kartici ima definiranu prodajnu cijenu, ona se uzima kao cijena s PDV-om. Za detalje pogledati članak o dohvaćanju cijena i popusta u prodajnim dokumentima.  

**Ekonomska pripadnost**: ako je aktivno, vrsta fakture ima ekonomsku pripadnost te je potrebno postaviti datume razdoblja pripadnosti;  

**Predložak ekonomske pripadnosti**: U ovo polje upisuje se predložak ekonomske pripadnosti koji se koristi pri knjiženju faktura. Ova se vrijednost može odabrati s popisa. Za detalje pogledati [Predloške glavnog knjigovodstva](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates);

**Upravljanje matricama Extra Data**: ako je aktivno, kod upravljanja artiklima s matricom prikazuje se dodatna kartica za unos količina za svaku pojedinu ćeliju matrice. Ako nije aktivno, ta kartica i sama matrica nisu vidljive;  

**Ispis**: u ovom se polju može postaviti zadani ispis koji će se koristiti za ovu vrstu dokumenta. Podsjećamo da je prilikom ispisa dokumenta potrebno odabrati report Stampe multiple kako bi se zadani ispis primijenio automatski;  

**Broj kopija**: u ovom se polju postavlja broj kopija dokumenta koje će se ispisati;   

**Upravljanje Conai**: ova tipka aktivira CONAI za ovu vrstu fakture;

**Upravljanje osnovnim sredstvima**: ovaj flag aktivira upravljanje osnovnim sredstvima za ovu vrstu fakture, a u sljedećem polju potrebno je odabrati vrstu operacije;  

**Vrsta operacije**: u ovom padajućem izborniku odabire se vrsta operacije nad osnovnim sredstvima (revalorizacija, uništenje, kapitalni dobitak itd.).       

**Vrsta popusta / Opis**: u ovoj koloni moguće je pridružiti vrstu popusta koja se predlaže kada se popusti unose izravno u kolonu *Rabat stavke* u tablici artikala (za detalje pogledati članak o [Pojednostavljenom widgetu za popuste](/docs/sales/sales-flow/discount-widget)).