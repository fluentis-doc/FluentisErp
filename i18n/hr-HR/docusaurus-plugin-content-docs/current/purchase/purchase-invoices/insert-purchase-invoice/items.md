---
title: Artikli
sidebar_position: 4
---

U ovoj kartici unose se svi artikli sa pripadajućim podacima.

Za pojedinosti o zajedničkom funkcioniranju obrazaca pogledajte sljedeći link [Značajke, gumbe i zajednička polja](/docs/guide/common).

Podaci se unose **ručno**, uz pomoć **polja za pomoć** ili ih mogu predložiti povezane procedure.

## Artikli

Da biste unijeli **Novi artikl** u mrežu, dovoljno je postaviti se na red kako biste popunili različite podatke ili koristiti gumb **Novo** u traci s vrpcom.


### Obavezni podaci

**Broj linije**: ovo polje popunit će se automatski i postupno unosom podataka u redak.

**Tip linije**: pruža mogućnost odabira različitih artikla iz okvira za odabir.

:::note NAPOMENA
Ako se izravno krene s unosom artikla, njegova *klasa*, *kod* i *vrsta retka* - *Kodirani artikl* unose se automatski.
:::

> **Artikl sa klasom**: to su artikli kodirani u šifarniku i mogu se knjižiti u analitičkom računovodstvu i registrirati u skladištu.  
> **Artikl Ne-kodiran**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Trošak**: to su kodirani ili nekodirani artikli koji su posebno sažeti u sažecima dokumenata; ako je artikl troškova kodiran i od interesa za poreze, bit će pomican u skladištu, ako nije kodiran ili nije od interesa za poreze, neće se pomicati u skladištu.  
> **Napomena o artiklu**: to su opisne napomene koje se prikazuju u ispisu dokumenta; ne utječe na računovodstvo i skladište.  
> **Gratis artikl**: artikl za poklon se tretira kao kodirani ili nekodirani artikl u fiskalne i skladišne svrhe, ali budući da je poklon, zasebno se evidentira u sažecima računa. Ako je postavljena zastavica 'Pravo naplate PDV-a' na kartici, izračunava se iznos PDV-a za poklon, koji može ili ne mora biti na teret dobavljača.  

**Klasa/Kod/Opis artikla**: mogu se unijeti ručno ili uz pomoć polja za pomoć koje će predložiti sve povezane informacije unesene u *Šifarnik artikla*.

Nakon unosa artikla, njegov će *Opis* automatski biti preuzet iz evidencije. Ako artikl ima *Varijacije*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*. 

**Varijante**: ako odabrani artikl ima varijacije, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati različitu cijenu od postavljene standardne cijene. Stoga cijena artikla s varijacijama može biti različita od cijene artikla bez varijacija. To može zahtijevati upravljanje varijacijama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne jedinice mjere i pretpostavljena je vrijednost 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izvršenje (npr. iz narudžbenice).

**Jedinica mjere**: automatski se predlaže glavna jedinica mjere artikla, ali korisnik može odabrati drugu jedinicu mjere. 

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakata; referentni cjenik za sam artikl prikazan je na kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u šifarniku subjekta povezani više cjenika u kaskadi (vidi **Šifarnik klijenta**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvoklikom u polje **Cjenici** (kartica *Popusti/Cjenici*) korisnik ima mogućnost odabira drugačije ponude od zadane, iz koje će se preuzeti cijena unesenog artikla.

Ako nema cjenika, predloženi podatak može se preuzeti iz **posljednje nabavne cijene** unesene u šifarnik artikla, ako u kartici [Postavkama narudžbenica dobavljača](/docs/erp-home/registers/items/create-new-items/item-registry/costs) nije postavljeno da se *trošak postavlja na nulu* u odsutnosti cjenika.

**PDV**: prioritet ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako toga nema, predložena je vrijednost iz *Šifarnik artikla*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.


### Nije obavezno unijeti sljedeće podatke

**Vrsta prometa nabave**: predloženi podatak je onaj unesen u kartici *Generalno* u šifarniku artikla. Ako to nije dostupno, neće biti predložen nikakav podatak.   

Moguće je da nedostatak te informacije uzrokuje pogreške u knjiženju računa koji će biti generiran iz otpremnice ako postupak također ne pronađe vrijednost u polju Predefinirani *Trošak/Prihod računa* u šifarnik kontakta. 

**Alternativna mjerna jedinica**: ova polja prikazuju količinu u alternativnoj mjeri ako je podatak dostupan u kartici **Alternativne mjernih jedinica u podacima artikla** (koristi se ona koja ima postavljenu zastavu za **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljanje dvostrukim mjerama** i **Automatski prijedlog alternativne mjere**.

**Alternativna količina**: predložena je vrijednost koja se odnosi na alternativnu mjeru, a izračunava se množenjem ili dijeljenjem *upraviteljske količine* (koja se odnosi na glavnu jedinicu mjere) s *faktorom pretvorbe* postavljenim u kartici *Alternativne mjernih jedinica u šifarnik artikla*.

**Skadište/Opis/Uzrok**: Ovi podaci su potrebni za evidentiranje ulaza u skladištu. Preuzimaju se na osnovu dokumenta nabave iz tablice *Vrste narudžbi/OTP/Primke* ili se unose ručno.

**Težine**: Navode se ukupne neto i bruto Težine stavki artikla. Navode se težine artikala iz šifarnika pomnožene s količinom stavke.


*Posebni gumbi*

> **Upravljanje pakiranjem**: omogućuje otvaranje upravljanja pakiranjem za vraćene stavke u dokumentima nabave. Gumb postaje aktivan kada je dokument spremljen, ali ne učitan. Klikom na ovaj gumb otvara se odgovarajući obrazac gdje možete unijeti količinu, odabrati stavku i izvršiti transfer odabranog pakiranja u stavke artikla pritiskom na gumb **Izvrši**. Na ovom se obrascu prikazuju artikli koji su uneseni s prirodom pakiranja i koji se nalaze u tablici **Vraćena pakiranja**.  
> **Storno**: omogućuje storniranje tipova dokumenata koji imaju prirodu povrata.    
> **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla prema novom cjeniku (ako je unesen ažurirani cjenik).
Klikom na padajući izbornik pored gumba, bit će moguće stvoriti novi cjenik ako još nije stvoren.


## Popusti/Cjenici  

**Cjenik**: nudi se cjenik iz kojeg je preuzet artikl, s datumom početka/završetka važenja te s posebnim uvjetima (npr. raspon popusta) dodijeljenim artiklu u cjeniku;

**Popusti**: nudi se svi popusti povezani s artiklom, svaki s vlastitom osnovom izračuna i dodjelom.

*Poseban gumb*
> **Izbriši rabate**: omogućuje brisanje odabranog popusta iz odgovarajuće mreže.


## Podaci 

**Lokacija**: ponuđuje se samo ako je za odabrani artikl odabran skladište.

**Projekt**: predstavlja projekt povezan s dokumentom. Može se unijeti i pomoću odgovarajuće pomoći za projekte.

**Referenca naloga**: u slučaju da je račun generiran iz narudžbe, referenca na narudžbu u ovom polju bit će automatski unesena.

**Napomena**: mogu se unijeti bilješke o artiklu koje će kasnije biti navedene u svim dokumentima generiranim iz ovoga.

**Pravo naplate PDV-a**: ako je postavljeno, PDV poklona uzima se u obzir za ukupni iznos računa.


## Podaci o artiklu 

**Lokacija**: nudi se samo ako je za odabrani artikl odabrano skladište.


## Varijante

Prikazuje se varijante odabranog artikla, kodirane u kartici **Varijante** šifarnika artikla ili se mogu unijeti ručno.Prilika je za upravljanje varijantama artikla na različit način od onoga što je ponuđeno na retku artikla.Primjerice, na svakom retku artikla moguće je unijeti ukupnu količinu; zatim, u istoj kartici, mogu se odrediti različite količine za više varijanti odabranog artikla, čak i za varijantu i atribut, odnosno upravljanje veličinom/bojom.Ova operacija je moguća samo ako su sve varijante artikla jednake cijene kao i standardna konfiguracija artikla.

*Poseban gumb*
> **Otkaži**: omogućuje brisanje odabranog retka varijante.


## Lotovi i Serijski broj

U oba mrežna polja mogu se unijeti i partije i serijski brojevi koji se moraju učitati u skladište i koji su povezani s artiklom *Šifarnik artikla > kartica* [Lotovi i Serijski broj](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) ili ih se može unijeti ručno. 

Ako artikl ne podržava upravljanje Partijama/Serijskim brojevima, ova će kartica biti onemogućena.

*Posebni gumbi*
> **Izbriši lot**: omogućuje brisanje odabrane partije.   
> **Izbriši serijski broj**: omogućuje brisanje odabrane linije serijskog broja


## Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na koje su raspodijeljene vrijednosti artikla.

Ovi podaci se mogu unositi ručno ili *automatski* (u slučaju da su troškovni/profitni centri prethodno uneseni u *šifarnik subjekta*, *šifarnik artikla* ili u *plan konta*).

*Posebni gumbi*
> **Obriši troškovna mjesta**: omogućuje brisanje odabrane linije troškovnog mjesta.     
> **Obriši profitna središta**: omogućuje brisanje odabrane linije profitnog središta.


## Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, uz mogućnost, putem odgovarajuće oznake, odabira koje dodatne podatke isprintati.


## Dokumenti u privitku

Prikazuje pojedinosti o mogućem **Dokumenti u privitku** (naziv, vrsta dokumenta, eventualne napomene, naš/vaša referenca). Upute o tome kako priložiti dokument potražite u artiklu **Priloži dokumente**.


## Odjeljak s vrijednostima

Odjeljak prikazuje sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikla.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u liniji**: Cijena artikla * Količina artikla;

**Ukupno rabat**: zbroj popusta artikla, uključujući i konačne popuste;

**Osnovica**: Iznos bez popusta - Popusti;

**Porez**: Osnovica* stopa PDV-a artikla;

**Ukupno**: Osnovica + Porez.