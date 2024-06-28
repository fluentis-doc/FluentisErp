---
title: Artikli
sidebar_position: 3
---

U ovoj kartici unose se svi artikli sa pripadajućim podacima.

Za pojedinosti o zajedničkom funkcioniranju obrazaca pogledajte sljedeći link [Značajke, gumbe i zajednička polja](/docs/guide/common).

Podaci se unose **ručno**, uz **pomoć polja** za pomoć ili ih mogu predložiti povezane procedure.

## Artikli

Da biste unijeli **Novi artikl** u mrežu, dovoljno je postaviti se na red kako biste popunili različite **Novo** u traci s vrpcom.


### Obavezni podaci

**Broj linije**: ovo polje popunit će se automatski i postupno unosom podataka u redak.

**Tip linije**: pruža mogućnost odabira različitih artikla iz okvira za odabir.

:::note NAPOMENA
Ako se izravno krene s unosom artikla, njegova klasa, kod i vrsta retka - Kodirani artikl unose se automatski.
:::

> **Artikl sa klasom**: to su artikli kodirani u šifarniku i mogu se knjižiti u analitičkom računovodstvu i registrirati u skladištu.    
> **Artikl Ne-kodiran**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.    
> **Trošak**: to su kodirani ili nekodirani artikli koji su posebno sažeti u sažecima dokumenata; ako je artikl troškova kodiran i od interesa za poreze, bit će pomican u skladištu, ako nije kodiran ili nije od interesa za poreze, neće se pomicati u skladištu.    
> **Napomena o artiklu**: to su opisne napomene koje se prikazuju u ispisu dokumenta; ne utječe na računovodstvo i skladište.    

**Klasa/Kod/Opis artikla**: mogu se unijeti **ručno** ili uz **pomoć polja** za pomoć koje će predložiti sve povezane informacije unesene u Šifarnik artikla.

Nakon unosa artikla, njegov će opis automatski biti preuzet iz evidencije. Ako artikl ima *Varijacije*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*. 

**Jedinica mjere**: automatski se predlaže glavna jedinica mjere artikla, ali korisnik može odabrati drugu jedinicu mjere.

**Varijante**: ako odabrani artikl ima varijacije, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati različitu cijenu od postavljene standardne cijene. Stoga cijena artikla s varijacijama može biti različita od cijene artikla bez varijacija. To može zahtijevati upravljanje varijacijama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne jedinice mjere i pretpostavljena je vrijednost 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izvršenje (npr. iz narudžbenice).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakata; referentni cjenik za sam artikl prikazan je na kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u šifarniku subjekta povezani više cjenika u kaskadi (vidi **Šifarnik klijenta**), isti dokument može sadržavati artikle iz različitih cjenika. 

Dvoklikom u polje **Cjenici** (kartica *Popusti/Cjenici*) korisnik ima mogućnost odabira drugačije ponude od zadane, iz koje će se preuzeti cijena unesenog artikla.

Ako nema cjenika, predloženi podatak može se preuzeti iz *posljednje nabavne cijene* unesene u šifarnik artikla, ako u [Postavkama narudžbenica dobavljača](/docs/configurations/parameters/purchase/purchase-orders-parameters) nije postavljeno da se *Trošak postavlja na nulu u odsutnosti cjenika*.

**PDV**: prioritet ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako toga nema, predložena je vrijednost iz *Šifarnik artikla*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.


### Nije obavezno unijeti sljedeće podatke

**Vrsta prometa nabave**: predloženi podatak je onaj unesen u kartici 'Generalno' u šifarniku artikla. Ako to nije dostupno, neće biti predložen nikakav podatak. Međutim, prilikom evidentiranja računa, uzet će se u obzir vrijednost unesena u polju 'Trošak/Primitak prema zadanim postavkama' u šifarnik kontakta.

**Alternativna mjerna jedinica**: predložena je mjerna jedinica koja se nalazi u kartici Alternativne mjernih jedinica u šifarnik artikla s postavljenom opcijom 'Zadano'. Prijedlog će se pojaviti samo ako je u [Postavkama narudžbenica dobavljača](/docs/configurations/parameters/purchase/purchase-orders-parameters) aktivirana opcija 'Upravljanje dvostrukim mjerama'.

**Alternativna mjerna jedinica**: ova polja prikazuju količinu u alternativnoj mjeri ako je podatak dostupan u kartici **Alternativne mjernih jedinica u podacima artikla** (koristi se ona koja ima postavljenu zastavu za **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljanje dvostrukim mjerama i Automatski prijedlog alternativne mjere**.

**Alternativna količina**: predložena je vrijednost koja se odnosi na alternativnu mjeru, a izračunava se množenjem ili dijeljenjem upraviteljske količine (koja se odnosi na glavnu jedinicu mjere) s faktorom pretvorbe postavljenim u kartici Alternativne mjernih jedinica u šifarnik artikla.

**Zahtijevani datum dostave**: datum koji označava željeni datum isporuke za artikla;

**Skladište i Predložak**: predloženi su podaci o skladištu i uzroku koji će se automatski pojaviti prilikom utovara povezanih artikla u skladištu. Podaci se preuzimaju iz [Tipova narudžbenica](/docs/configurations/tables/purchase/purchase-orders-type).

**Težine**: prikazuju se Ukupne neto i Ukupne bruto težine redova artikla. Težine su dobivene množenjem težina iz šifarnika artikla s količinom reda.

**Godina/Broj/Opis narudžbenice za proizvodnju**: ako je narudžbenica dobavljača stvorena iz proizvodnog plana, prikazat će se referentna narudžbenica za proizvodnju (vidi *Automatsko stvaranje narudžbenice*).  

*Specifični gumbi*

> **Podijeli količinu u više datuma dostave**: koristi se za podjelu reda narudžbenice u više redova prema traženom datumu isporuke. Ovaj postupak otvorit će novi obrazac u kojem ćete morati unijeti novi datum isporuke i predviđenu količinu za taj datum.    
> **Pakiranje**: omogućuje definiranje pakiranja za artikl.  


## Popusti/Cjenici  

**Vrijednosti kataloga**: nudi se katalog iz kojeg je preuzet artikl, s datumom početka/završetka važenja te s posebnim uvjetima (npr. raspon popusta) dodijeljenim artiklu u katalogu;

**Popusti**: nudi se svi popusti povezani s artiklom, svaki s vlastitom osnovom izračuna i dodjelom.         
**Cjenik koji će biti ažuriran**: ako je ova zastava aktivna, odgovarajući katalog kupnje automatski se ažurira informacijama o artiklu prilikom spremanja.

*Poseban gumb*

> **Izbriši rabate**: omogućuje brisanje odabranog popusta iz odgovarajuće mreže.

## Podaci o artiklu  

Unutar ovog kartice navode/se unose dodatne informacije o artiklu.

**Projekt**: predstavlja projekt povezan s dokumentom. Može se unijeti i pomoću odgovarajuće pomoći za projekte.

**Artikl/Varijanta**: prikazuje odabrani artikl u gornjoj mreži i njegovu varijantu;

**Zahtjev za kupnju**: ako je narudžbenica stvorena iz zahtjeva, prikazat će se referentni zahtjev;

**Napomene**: napomene vezane uz redak artikla, mogu se unijeti i pomoću pomoći za bilješke. Bit će navedene u svim dokumentima generiranim iz ovog.

**Marka**: predstavlja marku artikla, preuzetu iz njegovog šifarnika ili iz kataloga artikla.
 
### Varijante

Prikazuje se varijante odabranog artikla, kodirane u kartici **Varijante** šifarnika artikla ili se mogu unijeti ručno.
Prilika je za upravljanje varijantama artikla na različit način od onoga što je ponuđeno na retku artikla.
Primjerice, na svakom retku artikla moguće je unijeti ukupnu količinu; zatim, u istoj kartici, mogu se odrediti različite količine za više varijanti odabranog artikla, čak i za varijantu i atribut, odnosno upravljanje veličinom/bojom.
Ova operacija je moguća samo ako su sve varijante artikla jednake cijene kao i standardna konfiguracija artikla. 


*Poseban gumb*
> **Otkaži**: omogućuje brisanje odabranog retka varijante.

### Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na koje su raspodijeljene vrijednosti artikla.

Ovi podaci se mogu unositi ručno ili automatski (u slučaju da su troškovni/profitni centri prethodno uneseni u šifarnik subjekta, šifarnik artikla ili u plan konta).


## Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, uz mogućnost, putem odgovarajuće oznake, odabira koje dodatne podatke isprintati.


## Dokumenti u privitku

Prikazuje pojedinosti o mogućem **Dokumenti u privitku** (naziv, vrsta dokumenta, eventualne napomene, naš/vaša referenca). Upute o tome kako priložiti dokument potražite u artiklu *Priloži dokumente*.


## Odjeljak s vrijednostima

Odjeljak prikazuje sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikla.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u liniji**: Cijena artikla* Količina artikla;

**Ukupno rabat**: zbroj popusta artikla, uključujući i konačne popuste;

**Osnovica**: Iznos bez popusta - Popusti;

**Porez**: Osnovica * stopa PDV-a artikla;

**Ukupno**: Osnovica + Porez.
