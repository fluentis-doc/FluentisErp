---
title: Vrste POS-a
sidebar_position: 25
---

:::tip[FAst Start]
Ova je tablica obuhvaćena procedurom [**Fast Start**](/docs/guide/fast-start)

Ako se konfiguracija provodi ručno, potrebno je slijediti check listu na poveznici iznad.  
:::

Tablica se otvara putem izbornika **Tablice > Prodaja > Vrste POS-a**.

### Pretraga POS-a

Omogućuje unos novih zapisa te pretraživanje postojećih radi njihovog pregleda, izmjene ili brisanja.  

Forma se sastoji od područja filtra i područja rezultata. Nakon postavljanja željenih filtara, dovoljno je kliknuti tipku **Pretraga** kako bi se rezultati prikazali u mreži rezultata.  

Za pregled ili izmjenu vrste POS-a potrebno je dvokliknuti na željeni redak ili pritisnuti tipku **Uredi**.

Za unos novih zapisa potrebno je pritisnuti tipku **Novi**, čime se otvara nova forma za unos.  

### Unos / Uređivanje POS-a

U ovoj se formi unose svi podaci vezani uz novu vrstu POS-a koju se želi definirati:

**Vrsta i opis**: u ova se polja unosi vrsta i opis POS-a;

**Numeracija**: u ovo se polje upisuje šifra odgovarajuće numeracije. Za detalje o numeracijama pogledati članak [Numeracije Fluentis](/docs/configurations/tables/fluentis-numerations); 

**Default**: se attivo, questo flag indica il tipo POS di default che viene proposto alla creazione di un nuovo POS;

**Napomene**: slobodno tekstualno polje za eventualne napomene koje će biti prikazane u pripadajućim ispisima;  

**Cijena s PDV-om**: ako je aktivno, cijene prikazane u ponudi uključivat će PDV.  

**Zaduženje**: ako je aktivno, ovaj flag označava da je POS tipa predujma; predujam se može stornirati transakcijom s običnim tipom POS-a.  

**Server P.O.S / Baza podataka / Tablica**: polja u kojima se odabire server, baza podataka i tablica iz koje se čitaju i/ili u koju se upisuju podaci POS-a;  

**Tablica povezanih dokumenata**: tablica iz koje se čitaju i/ili u koju se upisuju podaci dokumenata povezanih s POS-om;  

**Zaokružena jedinica mjere**: šifra PDV-a koja se koristi pri kreiranju otpremnica i faktura iz POS-a;      

**PDV arr. / Opis PDV-a**: šifra PDV-a koja se koristi pri kreiranju otpremnica i faktura iz POS-a;    

**Prodajno mjesto**: prodajno mjesto na kojem se kreiraju POS dokumenti;  

**Blagajna**:  in questo campo va indicato il codice della cassa da collegare ai POS;

**Robna kategorija**: in questo campo viene riportata la categoria merceologica riportata sull'ordine;

**PDV**: šifra PDV-a koja se koristi u POS-u;  

**Skladište**: skladište iz kojeg se rezervira roba sadržana u POS-u ove vrste;  

**Predložak**: predložak kretanja robe rezervirane u POS-u ove vrste;  

**Vrsta plaćanja**: vrsta plaćanja koja se predlaže u POS-u ove vrste;  

**Rješenje plaćanja**: rješenje (modalitet) plaćanja koje se predlaže u POS-u ove vrste;  

**Cjenik**: šifra općeg cjenika iz kojeg se preuzimaju cijene artikala za POS;  

**Datum valjanosti**: datum valjanosti općeg cjenika;  

**Automatsko razduženje pri zatvaranju prometa**: ako je aktivno, pri ispisu POS-a roba se automatski razdužuje sa skladišta; ako nije aktivno, razduženje se mora obaviti ručno;  

**Potreban je fiskalni registar**: ako je aktivno, označava da je za korištenje POS-a potreban spojeni fiskalni registar radi ispisa fiskalnog računa;  

**Prikaži varijante**: ako je aktivno, mogu se koristiti i varijante artikla;  

**Prikaži atribute**: ako je aktivno, mogu se koristiti i atributi artikla.  

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcije formi, pogledati:[Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).