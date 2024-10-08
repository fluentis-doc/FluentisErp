---
title: Artikli
sidebar_position: 3
---

U ovoj kartici unose se svi artikli s pripadajućim podacima.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sljedeći link [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih može predložiti povezane procedure.

### Artikli

Za unos **Novog artikla** u mrežu dovoljno je postaviti se na redak kako biste ispunili različite podatke ili koristiti gumb **Novo** prisutan na gornjem izborniku.


### Obvezni podaci

**Broj linije**: ovo polje automatski će se popuniti postupnim unosom podataka u redak.

**Vrsta linije**: pruža mogućnost odabira, iz padajućeg izbornika, artikala s različitim karakteristikama.

:::note BILJEŠKA
Ako se krene izravno s unosom artikla, njegova *klasa*, *šifra* i *vrsta retka* - *Šifrirani artikl* automatski će se unijeti.
:::

> **Artikl sa klasom**: to su artikli šifrirani u evidenciji i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.  
> **Artikl bez klase**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Trošak**: to su kodirani ili nekodirani artikli koji se zasebno sažimaju u pregledima dokumenata, ako je artikl trošak kodiran i od poreznog interesa, bit će knjižen u skladištu, ako nije kodiran ili nije od poreznog interesa, neće se knjižiti u skladištu.  
> **Bilješka**: to su opisne bilješke koje se pojavljuju u ispisu dokumenta; ne utječu na knjiženje ili skladište.  
> **Gratis artikl**: artikl poklon upravlja se kao kodirani ili nekodirani artikl u porezne i skladišne svrhe, ali budući da je to poklon, zasebno se broji u pregledima dokumenta i ovisno o zastupljenosti PDV-a, obračunava se iznos PDV-a poklona na teret subjekta ili ne.  
> **Račun za predujam**: artikl depozita koristi se za izradu depozitnih faktura;  
> **Storno račun**: linija artikla storno depozita zatvara liniju depozita i depoziti se mogu odabrati pomoću pomoći depozita. Ovi podaci mogu se automatski unijeti kada se unese klasa ili serija jer je automatski odabran tip reda *kodirani artikl*.

**Klasa/Šifra/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će predložiti sve povezane podatke unesene u Šifarnik artikala.

Nakon unosa artikla, njegov će se *Opis* automatski preuzeti iz evidencije. Ako artikl ima varijante, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: nudi se primarna jedinica mjere artikla, ali korisnik ima mogućnost odabrati drugu jedinicu mjere.

**Količina**: predstavlja količinu osnovne mjere, a pretpostavljena vrijednost je 1; može se unijeti ručno ili se može preuzeti iz razmatranog dokumenta za izvršenje (npr. iz narudžbe dobavljača).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakta; cjenik koji se odnosi na sami artikl prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u evidenciji subjekta povezani više cjenika u kaskadi (vidi **Šifarnik kontakata**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvostrukim klikom u polje **Cjenici** (kartica *Popusti/Cjenici*), korisnik ima mogućnost odabrati drugu ponudu osim zadane, iz koje će biti preuzeta cijena unesenog artikla.

U odsutnosti cjenika, predloženi podatak je **prodajna cijena** preuzeta iz *Šifarnik artikala > kartica [Troškovi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* ili će se povući prema postavkama parametara dokumenta. Ako ni to nije dostupno, bit će navedena cijena 0.

**PDV**: prednost ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako ovaj podatak nije prisutan, predložena je vrijednost iz *Šifarnika artikala*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.


### Neobvezni podaci

**Promet prodaje**: predložena je vrijednost unesena u *Šifarnik artikala > kartica Općenito*. 

Ako se ne preuzme, unesite ga odabirom jedne od ponuđenih stavki iz odgovarajućeg izbornika, inače nedostatak ovih podataka može uzrokovati pogreške u knjiženju fakture koja će biti generirana iz narudžbe, ako u *Podaci kupca > Računovodstveni podaci > kartica Administrativno* nije postavljena vrijednost u polju *Predefinirani prihod od kontrapartije*.

**Alternativna JMJ**: u ovim poljima bit će prikazana količina u alternativnoj jedinici mjere ako je u Šifarnik artikala ovaj podatak prisutan u kartici **Alternativne jedinice mjere** (uzima se ona koja ima postavljen zastavu **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljajte dvostrukom jedinicom mjere i Automatski prijedlog JM alternativa**.

**Alternativna količina**: predložena je vrijednost u vezi s alternativnom JM, izračunata množenjem ili dijeljenjem *količine za upravljanje* (vezane uz glavnu JM) s *faktorom konverzije* postavljenim u *Šifarnik artikala > kartica Alternativne jedinice mjere*.

**Težine**: ukupna neto težina i ukupna bruto težina stavki artikla. Prikazane su težine artikala u evidenciji pomnožene s količinom retka.

## Popusti/Cjenici

**Popusti**: Prikazuju se sva sniženja povezana s artiklom, svako s vlastitom osnovom i načinom dodjele. Sniženja se mogu preuzeti iz: podataka o klijentu, rješenja plaćanja dodijeljenog dokumentu, cjenika povezanog s klijentom. Svi prikazani podaci mogu se mijenjati

**Vrijednosti cjenika**: Prikazuje se cjenik iz kojeg je preuzet artikl, s datumom početka/kraja valjanosti i posebnim prodajnim uvjetima (npr. Razinama popusta) dodijeljenim artiklu u cjeniku. 

*Poseban gumb*   
> **Izbriši rabat**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjem retku.

## Podaci artikla

**Varijante**: sadrži eventualnu varijantu artikla;    

**Skladište, uzrok i lokacija**: ponuđeno je skladište i uzrok koji će se automatski pojaviti prilikom pražnjenja artikala iz skladišta. Podaci su preuzeti iz tabele *Tipovi računa*;  

**Artikl**: prikazuje odabrani artikl;     

**Projekt**: to je projekt povezan s dokumentom ili se može dodijeliti uz pomoć pomoći; 

**Pravo naplate PDV-a**: ako je postavljena, PDV na poklon bit će uzet u obzir za ukupni račun;   

**Detaljne deklaracije**: sadrži eventualnu [izjavu o namjeri ](/docs/finance-area/declarations/declarations/intent-declaration) klijenta;

**Referenca naloga**: odnosi se na narudžbu iz koje je stvoren račun;

**Marka**: prikazuje marku artikla, preuzetu iz njegove ankete ili iz cjenika artikla;

**Bilješke**: omogućuje unos bilješki za svaki artikl;

## Trgovački predstavnici

**Trgovački predstavnici**: predstavnik povezan s odgovarajućom provizijom za odabrani artikl; podatak odgovara onome što je navedeno u *Zaglavlje > kartica Trgovački predstavnici*. Postotak se može promijeniti. 

*Poseban gumb* 
> **Izbriši trgovačkog predstavnike**: omogućuje brisanje povezanog predstavnika s artiklom.

## Varijante 

Prikazuje se varijante odabranog artikla, kodirane u kartici **Varijante** u šifarnik artikla ili se mogu unijeti ručno.
Omogućuje upravljanje varijantama artikla na način koji se razlikuje od onoga što je ponuđeno na retku s artiklima. 
Na primjer, na svakom se retku s artiklima može unijeti ukupna količina; zatim, u istoj kartici mogu se definirati različite količine za više varijanti odabranog artikla i čak za varijantu i atribut, odnosno upravljanje veličinom/bojom. Ova operacija je moguća samo ako su sve varijante artikla cijenjene po istoj cijeni kao i standardna konfiguracija artikla.  

## Lotovi i serijski brojevi

U oba prikaza mogu se unijeti lotovi i serijski brojevi koji se moraju isprazniti iz skladišta, a koji su povezani s artiklom u *Šifarnik Artikla > kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* ili ih se može unijeti ručno. 

Ova operacija uvjetovana je prisustvom serija i serijskih brojeva u skladištu.  

Ako artikl ne podrazumijeva upravljanje lotovima/serijskim brojevima, ovaj će se karton onemogućiti.  

*Posebni gumbi*
> **Izbriši lot**: omogućuje brisanje odabranog retka lota.     
> **Izbriši serijski broj**: omogućuje brisanje odabranog retka serijskog broja.

### Analitika 

Može sadržavati informacije o troškovima/odbitku na koje su raspoređeni iznosi artikala. 
 
Ovi se podaci mogu unijeti ručno ili *automatski* (u slučaju da su centri troškova/profita unaprijed uneseni u *šifarnik kontakata*, *šifarnik artikla* ili *kontni plan*). 

## Dodatni podaci 

Prikazuje se popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka koji su korisni samo za trenutni dokument, s mogućnošću, putem odgovarajućeg okvira, odabira dodatnih podataka koje treba ispisati. 

## Priloženi dokumenti 

Prikazuje se pojedinosti o eventualnom **Priloženom dokumentu** (naziv, vrsta dokumenta, eventualne napomene, naše/vaše referencije). Za upute o tome kako priložiti dokument, pogledajte članak u **Priloženim dokumentima**.

## Odjeljak o vrijednostima  

Donji desni odjeljak sadrži sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikala. 

**Jedinična cijena**: vrijednost polja *Cijena*; 

**Količina**: vrijednost polja *Količina*; 

**Iznos u liniji**: Cijena artikla * *Količina artikla*; 

**Ukupno rabat**: zbroj popusta na artiklu, uključujući i konačne popuste; 
 
**Osnovica**: Brutalni iznos - Popusti; 
 
**Porez**: Osnovica * stopa PDV-a na artiklu; 
 
**Ukupno**: Osnovica + Porez.

