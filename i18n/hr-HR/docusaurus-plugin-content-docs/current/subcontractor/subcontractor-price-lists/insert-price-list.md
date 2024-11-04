---
title: Unos cjenika konta rada 
sidebar_position: 1
---

Iz ove aplikacije bit će moguće unositi cjenike konta rada.   

## Gornji dio 

U gornjem dijelu potrebno je unijeti **Dobavljača**.
U obrascu za unos automatski su predložene vrijednosti polja **Od datma valjanosti** (predložen je trenutni datum za početak valjanosti) i [Valuta](/docs/guide/common/glossary/glossary-intro#currency) (predložena je valuta tvrtke, ali ih je moguće izmijeniti).
Također je navedena eventualna **Cijena popusta iz šifarnika** i moguće je unijeti **Napomene**

U gornjem dijelu nalazi se i filtar za pretraživanje Artikala unutar cjenika.  

## Artikli 

U ovom obascu bit će prikazani članci i eventualni popusti povezani s ovim cjenikom. 

**Klasa/Članak/Opis**: upišite kod članka koji želite uključiti u cjenik. Opis će se automatski popuniti na temelju koda članka. Za unos novog članka u tablicu, dovoljno je pozicionirati se na redak i unijeti potrebne podatke ili koristiti gumb *Novi artikl* koji se nalazi u traci izbornika.  

**Kod/Opis varijante**: ovo se koristi da biste osim kôda artikla naveli i varijantu koja razlikuje jedan artikl od drugoga.  

**Šifra faze**: moguće je povezati s artiklom eventualnu [Vanjsku fazu](/docs/configurations/tables/production/standard-phases) koju će obaviti izvođač radova. Na ovaj način moguće je definirati cijenu za svaku fazu istog artikla; polja **Faza** i **Podfaza** automatski će se popuniti;  

**Mjerna jedinica**: može biti upravna jedinica za artikl ili jedna od njegovih alternativnih jedinica mjere.   

**Količina**: predloženo je da bude jednako 1, što je referentna količina za cijenu; ako je različito od 1, kada se izračunava cijena, podijelit će se s količinom iz cjenika.  

**Cijena**: vezana uz valutu cjenika.

**PDV**: ovo polje se automatski popunjava. Ako nije postavljeno na klijenta, potrebno je popuniti ovo polje s PDV-om.   

**Cijena s PDV-om**: sustav izračunava ovu cijenu na temelju cijene i stope PDV-a unesene u kodu PDV-a.   

**Visina/Širina/Dubina**: informativni podaci o cjeniku. Sustav ne koristi ova polja za eventualne obrade.  

Za svaki artikl u cjeniku moguće je unijeti nekoliko vrsta popusta kako je objašnjeno u nastavku.  

U polju **Tip skale** navodi se vrsta skale, dok se u sljedećim poljima navode podaci o artiklima unesenim u cjenik.  

Ove skale navedene su u tablici *Tipovi popusta*.  

Na desnoj strani forme nalazi se mreža u kojoj su navedeni svi mogući popusti za ovaj artikl. Ove se informacije unose samo odabirom artikla prisutnog u cjeniku. 

### Popusti 

Ovi popusti su fiksni popusti koji se primjenjuju u dokumentima.  

Evo ispravne popune ove mreže: 

**Br**: automatski popunjava sistem, označava redoslijed primjene popusta.   

**Tip popusta/Opis**: odaberite tip popusta iz ponuđenih opcija. Standardno su dostupne tri različite vrste: *Komercijalni popust*, *Količinski popust* i  *Vrijednosni popust*.

**Vrijednost**: postavite postotak popusta koji želite primijeniti. .

**Prioritet**: ova se prioritetnost preuzima iz postavki u tablici [Tipovi popusta](/docs/configurations/tables/general-settings/discount-types).

**Kaskadni/Osnovni**: automatski se popunjava na temelju vrijednosti unesene u tablici [Tipovi popusta](/docs/configurations/tables/general-settings/discount-types)

### Popusti na količinu

Ova vrsta popusta može imati različite postotke ovisno o količini.  

**Tip**: impostare il tipo sconto che dovrà essere *Sconto a quantità*. Questa dicitura verrà riportata poi nella stampa.  

**Količina**: postavite količinu pri kojoj će se popust aktivirati.  

**Postotak**: unesite postotak popusta koji će se primijeniti kada se dostigne navedena količina.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

### Popusti za vrijednost

U ovoj vrsti popusta, popust se primjenjuje kada se dostigne određeni iznos po stavci.  

**Tip**: postavite tip popusta na *Rabat po vrijednosti*.  

**Vrijednost**: postavite vrijednost iznad koje će se primijeniti popust.  

**Postotak**: unesite postotak popusta koji će se primijeniti kada se dostigne navedena vrijednost.  

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

### Cijena po količini  

U ovom slučaju, kada se dostigne određena količina, jedinična cijena se mijenja.  

**Količina**: postavite vrijednost iznad koje će se primijeniti *prilagođena* cijena. 

**Jedinična cijena**: unesite jediničnu cijenu za naručenu količinu.   

Ovi popusti će se zbrajati s drugim eventualnim popustima.  

### Napomene 

Informativno, moguće je dodati napomene koje se odnose na određeni tip popusta.  

### Priloženi dokumenti 

Prikazuje se detalj eventualnog **Priloženog dokumenta** (naziv, vrsta dokumenta, eventualne napomene, naša/vaša referenca). Za upute o tome kako priložiti dokument, molimo pogledajte članak *Priloži dokumente*.