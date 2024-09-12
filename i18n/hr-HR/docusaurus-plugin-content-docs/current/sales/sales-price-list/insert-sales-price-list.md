---
title: Novi Cjenik
sidebar_position: 2
---

Obrazac se otvara putem putanje **Prodaja > Cjenici prodaje > Pretraživanje cjenika prodaje** klikom na gumb **Novo**. 

Iz ove aplikacije moguće je unijeti prilagođene cjenike prodaje za klijente ili generičke. Za unos ovih potonjih potrebno je prethodno popuniti tablicu *Tipovi cjenika*. 

## Gornji odjeljak

U obrascu za unos automatski se nude vrijednosti polja  **Od datuma valjanosti** (trenutni datum za početak važenja) i [Valuta](/docs/guide/glossary/glossary-intro#currency) (valuta tvrtke), ali ih je moguće promijeniti.

Za nastavak stvaranja cjenika, korisnik mora unijeti:

**Cjenik** 
> *Generički*: potencijalno može biti važeći za sve klijente.     
> *Prilagođeni*: važeći za određenog klijenta.      
**Klijent**: odaberite samo u slučaju prilagođenog cjenika, koristeći  [pomoćno polje](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravno](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection)unosom podataka.   
**Tip cjenika**:  odaberite tip cjenika. Za stvaranje različitih tipova upućuje se na tablicu *Tipovi cjenika*.    
**Valuta**: pretpostavljena valuta tvrtke.  
**Datum početka/datum završetka važenja**: interval važenja unesenog cjenika.    
**Cijena s PDV-om**: aktivira se ako želite koristiti i prikazati cijenu s PDV-om u dostavnici i fakturama. Da biste aktivirali ovaj postupak, potrebno je postaviti odgovarajuću oznaku u *Tipovima dostavnice* i *Tipovima faktura*. NB. Ova oznaka nema učinka prilikom unosa narudžbi klijenta.   
**Konfiguracija pretraživanja**: ova se postavka koristi posebno u polju mode. Ova postavka ima dvije funkcije: možete prikazati neke dodatne podatke na razini cjenika ili upravljati nekim informacijama kao što su vrsta plaćanja za različite vrste operacija.

## Artikli

U ovom obrascu bit će navedeni artikli i evetualni popusti povezani s ovim cjenikom.

**Klasa/Artikl/Opis**: navedite kod artikla koji želite uključiti u cjenik. Opis će se automatski dohvatiti pomoću kodnog artikla. Za unos novog artikla u mrežu dovoljno je postaviti kursor na redak kako biste unijeli različite podatke ili koristili gumb *Novi artikl*prisutan na gornjem izborniku.

**Šifra/Opis varijante**: koristi se ako varijanta šifriranog artikla također razlikuje jedan artikl od drugog.

**Jedinica mjere**: može biti upravljačka jedinica mjere artikla ili jedna od njegovih alternativnih jedinica mjere.

**Marka artikla** ako je navedena.

**Količina**: pretpostavljena jednaka 1, referentna količina za cijenu; ako je različita od 1, kada se cijena mora izračunati, dijeli se s količinom cjenika.

**Cijena** u vezi s valutom cjenika.

**PDV**: ovaj se podatak dohvaća iz evidencije klijenta. Ako nije postavljen za klijenta, potrebno je popuniti ovo polje s kodom PDV-a. 

**Cijena s PDV-om**: sustav izračunava ovu cijenu na temelju cijene i stope PDV-a navedene kod unosa PDV-a. 

**Visina/Širina/Dubina**: informativni podaci o cjeniku. Sustav ne koristi ova polja za eventualne obrade. 

**Raspon cijena**: ova postavka koristi se za odabir cjenika klijenta na temelju raspona cijena koje se mogu postaviti u dodatnim podacima koji se odnose na artikle. Na primjer, mogu postojati diskriminatori zbog kojih će cjenik za isti artikl imati različite cijene: dovoljno je misliti na odjeću u kojoj će se promjenom veličine promijeniti i prodajna cijena.

Za svaki artikl cjenika moguće je unijeti nekoliko vrsta popusta, kako je objašnjeno u nastavku.

U istoimenom polju navedena je **Vrsta nosača** dok će u narednim poljima biti podaci koji se odnose na artikle koji se nalaze u cjeniku.

Ovi su rasponi navedeni u tablici *Tipovi popusta*.

U lijevom dijelu obrasca potrebno je navesti zadanu vrstu raspona koja će se ponuditi u dokumentima. Moguće je da isti članak cjenika ima različite povezane popuste, pa će se u dokumentu moći izravno promijeniti vrsta raspona koja će se koristiti. Zadana vrsta raspona može se postaviti i za svakog klijenta, u evidenciji klijenta kartica Cjenici. Na ovoj kartici potrebno je navesti vrstu cjenika koja će se koristiti za tog klijenta, a za svaku vrstu cjenika moguće je povezati i prilagođeni raspon.

U desnom dijelu obrasca nalazi se mreža u kojoj su navedeni svi mogući popusti za ovaj članak. Ovi će se popusti popuniti samo ako je odabran članak koji je već unesen u cjenik.

### Popusti

Ovi popusti su fiksni popusti koji se primjenjuju na Narudžbe/dostavnice i Fakture neovisno o količini ili drugim varijablama navedenim u narudžbi: tipičan primjer su trgovački popusti.

Evo kako ispravno popuniti ovu tablicu:

**Br**: automatski popunjen sustavom, označava redoslijed u kojem su popusti uzeti u obzir.

**Tip popusta/Opis**: odaberite tip popusta među dostupnima. Uobičajeno su dostupne 3 različite vrste: *Trgovački popust*, *Popust po količini* i *Popust po vrijednosti*.

**Vrijednost**: postavite postotak popusta koji se primjenjuje.

**Prioritet**: ovaj prioritet određuje postavke u tablici *Tipovi popusta*.

**Kaskadni/Osnovni**: popunjava se na temelju vrijednosti unesene u tablicu *Tipovi popusta*.

### Popust na količinu

Ova vrsta popusta može imati različite postotke ovisno o količini prodanih artikala.

**Vrsta**: postavite tip popusta koji će biti *Popust na količinu*. Ovaj opis bit će zatim naveden u ispisanom računu.

**Količina**: postavite količinu za koju će se popust primijeniti.  

**Postotak**: unesite postotak popusta kada se dostigne navedena količina.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

U primjeru, ako se prodaju 2 jedinice, imat ćemo popust od 7%, 3 jedinice će imati popust od 10%, i tako dalje.

Ovi popusti se zbrajaju s drugim eventualnim popustima prisutnim na narudžbi/dostavnici/Fakturi (vidi prethodni dio).

### Rabat za vrijednost

Ova vrsta popusta primjenjuje se kada se postigne određeni iznos po stavci narudžbe/fakture/dostavnice.

**Tip**: postavite tip popusta koji će biti *Popust po vrijednosti*. Ovaj opis bit će zatim naveden u ispisanom računu.

**Vrijednost**: postavite vrijednost koja će pokrenuti popust.

**Postotak**: unesite postotak popusta kada se dostigne navedena vrijednost.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

U primjeru, ako je vrijednost po stavci manja od 100 eura, neće biti popusta. S vrijednostima između 100 i 200 eura, bit će 2% popusta. Ako je vrijednost između 200 i 300 eura primijenit će se popust od 4%. Ako vrijednost premaši 300 eura primijenit će se popust od 6%.

Ovi popusti se zbrajaju s drugim eventualnim popustima prisutnim na narudžbi/dostavnici/Fakturi (vidi prethodni dio).

### Cijena po količini

U ovom slučaju, kada se postigne određena količina, jedinična cijena se mijenja.

**Količina**: postavite vrijednost nakon koje će se primijeniti *prilagođena* cijena.

**Jedinična cijena**: unesite jediničnu cijenu za naručenu količinu.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

U primjeru navedenom, ako je količina po stavci manja od 100 eura, cijena će biti ona iz cjenika. Za količinu između 100 i 120 imat ćemo jediničnu cijenu od 10. Za količinu između 120 i 140 imat ćemo jediničnu cijenu od 9 i tako dalje.

Ovi popusti se zbrajaju s drugim eventualnim popustima prisutnim na narudžbi/otpremnici/računu (vidi prethodni dio).

### Napomene

Na informativnoj razini moguće je dodati napomene povezane s određenim tipom popusta.

### Odredišta

Ovim parametrom moguće je odlučiti hoće li jedinična cijena biti različita za određeno odredište kupca. Također je moguće upravljati ovim posebnim tipom promocije za određeni datum.

**Odredište**: mora biti adresa kontakta povezana s fakturiranim klijentom.

**Datum OD/DO**: unesite raspon datuma za koje će se predložiti cijena različita od cjenika samo za navedeno odredište.

**Cijena**: unesite cijenu za odredište.

### Dodatni podaci

Prikazuje se lista **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka koji su korisni samo za trenutni dokument, uz mogućnost odabira putem odgovarajuće oznake, koji dodatni podaci će se ispisati.

### Dokumenti u privitku

Prikazuje se pojedinosti o eventualnom **Dokumentu u privitku** (naziv, vrsta dokumenta, eventualne napomene, referenca na nas/vaš). Za upute o tome kako priložiti dokument, pogledajte članak **Odlaganje dokumenata**.