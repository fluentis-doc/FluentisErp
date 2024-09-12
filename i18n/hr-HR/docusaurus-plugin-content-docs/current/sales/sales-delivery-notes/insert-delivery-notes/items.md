---
title: Artikli
sidebar_position: 3
---

## Artikli

U ovoj se kartici unose svi artikli s pripadajućim podacima.

Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkom radu obrazaca, obratite se na sljedeći link [ Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).

Podaci se mogu unositi [ručno](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) ili ih mogu predložiti povezane procedure.

## Artikli

Da biste unijeli **Novi artikl** u mrežu, dovoljno je postaviti se na red kako biste ispunili različite podatke ili koristiti gumb **Novo** koji se nalazi na gornjem izborniku.

### Obvezni podaci

**Broj linije**: ovo će se polje automatski popuniti progresivno prilikom unosa podataka u red.

**Tip linije** pruža mogućnost odabira artikala s različitim karakteristikama. 

:::note BILJEŠKA
Ako se krene izravno s unosom artikla, njegova *klasa*, *šifra* i *vrsta retka* - *Šifrirani artikl* automatski će se unijeti.
:::

> **Artikl sa klasom**: to su artikli šifrirani u evidenciji i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.  
> **Artikl bez klase**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Trošak**: to su kodirani ili nekodirani artikli koji se zasebno sažimaju u pregledima dokumenata, ako je artikl trošak kodiran i od poreznog interesa, bit će knjižen u skladištu, ako nije kodiran ili nije od poreznog interesa, neće se knjižiti u skladištu.  
> **Bilješka**: to su opisne bilješke koje se pojavljuju u ispisu dokumenta; ne utječu na knjiženje ili skladište.  
> **Gratis artikl**: artikl poklon upravlja se kao kodirani ili nekodirani artikl u porezne i skladišne svrhe, ali budući da je to poklon, zasebno se broji u pregledima dokumenta i ovisno o zastupljenosti PDV-a, obračunava se iznos PDV-a poklona na teret subjekta ili ne.  

**Klasa/Kod/Opis artikla**: mogu se unijeti [ručno](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) koje će ponuditi sve relativne podatke unesene u šifarnik artikla.

Nakon unosa artikla, njegov će *Opis* automatski biti preuzet iz šifarnika. Ako artikl ima *Varijante*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: ponuđena je glavna M.J. artikla, ali korisnik može odabrati drugu mjernu jedinicu.

**Varijante**: ako odabrani artikl ima varijante, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati drugačiju cijenu od standardne postavljene. Prema tome, cijena artikla s varijantama može biti različita od cijene artikla bez varijanti. To može zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne U.M. i po zadanim postavkama ima vrijednost 1; može se unijeti ručno ili se može preuzeti iz razmatranog dokumenta za isporuku (npr. iz narudžbe dobavljača).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakta; cjenik koji se odnosi na sami artikl prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u evidenciji subjekta povezani više cjenika u kaskadi (vidi **Šifarnik kontakata**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvostrukim klikom u polje **Cjenici** (kartica *Popusti/Cjenici*), korisnik ima mogućnost odabrati drugu ponudu osim zadane, iz koje će biti preuzeta cijena unesenog artikla.

U odsutnosti cjenika, predloženi podatak je **prodajna cijena** preuzeta iz *Šifarnik artikala > kartica [Troškovi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* ili će se povući prema postavkama parametara dokumenta. Ako ni to nije dostupno, bit će navedena cijena 0.

**PDV**: prvenstveno koristi PDV unesen u polje PDV u *Šifarnik kontakata*. Ako to nije dostupno, koristi se vrijednost iz *Šifarnika artikala*, ali korisnik ima mogućnost unosa druge vrijednosti. Ovo polje je obavezno.

### Neobvezni podaci

**Promet prodaje**: predložena je vrijednost unesena u *Šifarnik artikala > kartica Općenito*. Ako se ne preuzme, unesite ga odabirom jedne od ponuđenih stavki iz odgovarajućeg izbornika, inače nedostatak ovih podataka može uzrokovati pogreške u knjiženju fakture koja će biti generirana iz narudžbe, ako u *Šifarnik klijenta > Računovodstveni podaci > kartica Administrativno* nije postavljena vrijednost u polju *Predefinirani prihod od kontrapartije*.

**Alternativna JMJ**: u ovim poljima bit će prikazana količina u alternativnoj jedinici mjere ako je u Šifarnik artikala ovaj podatak prisutan u kartici **Alternativne jedinice mjere** (uzima se ona koja ima postavljen zastavu **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljajte dvostrukom jedinicom mjere i Automatski prijedlog JM alternativa**.

**Alternativna količina**: predložena je vrijednost u vezi s alternativnom JM, izračunata množenjem ili dijeljenjem količine za upravljanje (vezane uz glavnu JM) s faktorom konverzije postavljenim u Šifarnik artikala > kartica Alternativne jedinice mjere.

**Skladište i predložak**: predlažu se skladište i referentni razlog koji će se automatski pojaviti prilikom pražnjenja povezanih članaka iz skladišta. Podaci se preuzimaju iz Tipova otpremnica ili se unose ručno.

**Težine**: prikazane su neto i bruto težine svih stavki. Težine artikala iz ankete pomnožene su s količinom stavke.

*Posebni gumbi*
> **Upravljanje pakiranjem**: otvara upravljanje pakiranjem koje će se koristiti u dokumentu kupnje.
Gumb postaje aktivan ako je dokument spremljen, ali nije učitan.
Klikom na ovaj gumb otvara se odgovarajući obrazac gdje možete: unesite količinu, odaberite redak i izvršite prijenos odabranog pakiranja na retke artikla klikom na gumb **Izvrši**. U ovom obrascu prikazani su artikli koji su uneseni kao pakiranje i koji su prisutni u tablici **Pakiranja**.

> **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla prema novom cjeniku (ako je unesen novi cjenik).
Klikom na padajući izbornik pored gumba , moći ćete stvoriti novi cjenik ako ga još nema.

## Popusti/Cjenici

**Popusti**: ponuđeni su svi popusti povezani s artiklom, svaki s vlastitim izračunom i dodjelom. Popusti se mogu preuzeti: iz podataka o kupcu, iz rješenja plaćanja dodijeljenih dokumentu, iz cjenika iz asocijacije cjenika-kupac. Svi predloženi podaci mogu se mijenjati.

**Vrijednosti cjenika**: ponuđen je cjenik iz kojeg je artikl preuzet, s datumom početka/završetka važenja i s posebnim uvjetima prodaje (npr. razrede popusta) dodijeljenim artiklu u cjeniku.

*Posebni gumb*

> **Izbriši rabat**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjem izborniku.

## Podaci

Na ovoj kartici se unose dodatne informacije o artiklu.

**Artikl**: prikazuje opis artikla i, po potrebi, varijantu artikla;

**Projekt**: projekt povezan s dokumentom ili dodijeljen korištenjem pomoći;

**Referenca naloga**: odnosi se na narudžbu iz koje je stvoren dokument otpremnice;

**Marka**: predstavlja marku artikla, preuzetu iz njegove evidencije ili listina artikala;

**Bilješke**: omogućuju unos bilješki za svaki artikl.

**Pravo naplate PDV-a**: ako je postavljeno, PDV za poklon se uzima u obzir za ukupni dokument.

## Trgovački predstavnici

**Trgovački predstavnici**: predstavnik povezan s odgovarajućim postotkom za odabrani artikl; podatak odgovara onome što je navedeno u Zaglavlju > kartica Predstavnici. Postotak se može promijeniti.

*Posebni gumb*
> **Izbriši trgovačkog predstavnike**: omogućuje brisanje povezanog Predstavnikas odabranim artiklom.


### Varijante

Prikazuju se varijante odabranog artikla, kodirane u kartici **Varijante** šifarnika artikala ili se mogu unijeti ručno. Omogućuju upravljanje varijantama artikla na drugačiji način od onoga što je predloženo na retku artikla.   
Na primjer, u svakom retku artikla možete unijeti ukupnu količinu; nakon toga, u istoj kartici, možete definirati različite količine za više varijanti odabranog artikla, uključujući i varijacije u veličini/boji.  
Ova operacija je moguća samo ako sve varijante artikla imaju istu cijenu kao i cijena artikla u standardnoj konfiguraciji.

*Posebni gumb*
> **Obriši**: omogućuje brisanje odabrane varijante.


## Lotovi i serijski brojevi

U dvije tablice mogu se unijeti serije i serijski brojevi koji se moraju skinuti iz skladišta i koji su povezani s artiklom u *Šifarnik artikla > kartica [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* ili se mogu unijeti ručno.

Ova operacija ovisi o prisutnosti serija i serijskih brojeva u skladištu.

Ako artikl ne zahtijeva upravljanje lokotima/serijskim brojevima, ovaj će se tab onemogućiti.

*Posebni gumbi*
> **Izbriši lot**: omogućuje brisanje odabranog lota.  
> **Izbriši serijski broj**: omogućuje brisanje odabranog serijskog broja.

## Analitika

Može sadržavati informacije o troškovima/profitu na koje su raspoređene vrijednosti artikala.   
Ovi podaci mogu se unijeti ručno ili automatski (ako su centri troškova/profita prethodno uneseni u Šifarnik kontakata, Šifarnik artikala ili plan konta).

## Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, uz mogućnost odabira koje dodatne podatke želite ispisati putem odgovarajuće oznake.


## Dokumenti u privitku

Prikazuje pojedinosti o eventualnom **Priloženom dokumentu** (ime, vrsta dokumenta, eventualne bilješke, referenca na narudžbu/prodaju). Za upute o tome kako priložiti dokument, pogledajte članak **Priloži dokumente**.

## Vrijednost odjeljka

Donji desni dio prikazuje sažetak troškova koji sudjeluju u formiranju konačne cijene odabranog artikla u tablici artikala.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u liniji**: Cijena artikla * Količina artikla;

**Ukupno rabati**: zbroj popusta za artikl, uključujući i konačne popuste;

**Porezna osnovica**: Bruto iznos - Popusti;

**Porez**: Poreska osnovica * stopa PDV-a za artikl;

**Ukupno**: Poreska osnovica + Porez.

