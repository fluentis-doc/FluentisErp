---
title: Artikli
sidebar_position: 3
---

U ovoj kartici unose se svi artikli s pripadajućim podacima.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sljedeći link [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih može predložiti povezane procedure.

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

**Klasa/Šifra/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će predložiti sve povezane podatke unesene u Šifarnik artikala.

Nakon unosa artikla, njegov će se *Opis* automatski preuzeti iz evidencije. Ako artikl ima varijante, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: nudi se primarna jedinica mjere artikla, ali korisnik ima mogućnost odabrati drugu jedinicu mjere.

**Varijante**: ako odabrani artikl ima varijante, bit će potrebno odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom, koji mogu imati drugačiju cijenu od standardne postavljene cijene. Prema tome, cijena artikla s varijantama može biti različita od cijene artikla bez varijanti. To može eventualno zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu primarne jedinice mjere i pretpostavljena je vrijednost 1; može se unijeti ručno ili može biti preuzeta iz dokumenta koji se razmatra za obradu (npr. od narudžbe dobavljača).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakta; cjenik koji se odnosi na sami artikl prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u evidenciji subjekta povezani više cjenika u kaskadi (vidi **Šifarnik kontakata**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvostrukim klikom u polje **Cjenici** (kartica *Popusti/Cjenici*), korisnik ima mogućnost odabrati drugu ponudu osim zadane, iz koje će biti preuzeta cijena unesenog artikla.

U odsutnosti cjenika, predloženi podatak je **prodajna cijena** preuzeta iz *Šifarnik artikala > kartica [Troškovi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* ili će se povući prema postavkama parametara dokumenta. Ako ni to nije dostupno, bit će navedena cijena 0.

**PDV**: prednost ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako ovaj podatak nije prisutan, predložena je vrijednost iz *Šifarnika artikala*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.

### Neobvezni podaci

**Barkod/Artikl kupca i Opis artikla kupca**: ovi će podaci biti preuzeti iz informacija dostupnih u *Šifarnik artikala*;

**Promet prodaje**: predložena je vrijednost unesena u *Šifarnik artikala > kartica Općenito*. Ako se ne preuzme, unesite ga odabirom jedne od ponuđenih stavki iz odgovarajućeg izbornika, inače nedostatak ovih podataka može uzrokovati pogreške u knjiženju fakture koja će biti generirana iz narudžbe, ako u *Podaci kupca > Računovodstveni podaci > kartica Administrativno* nije postavljena vrijednost u polju *Predefinirani prihod od kontrapartije*.

**Alternativna JMJ**: u ovim poljima bit će prikazana količina u alternativnoj jedinici mjere ako je u Šifarnik artikala ovaj podatak prisutan u kartici **Alternativne jedinice mjere** (uzima se ona koja ima postavljen zastavu **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljajte dvostrukom jedinicom mjere i Automatski prijedlog JM alternativa**.

**Alternativna količina**: predložena je vrijednost u vezi s alternativnom JM, izračunata množenjem ili dijeljenjem *količine za upravljanje* (vezane uz glavnu JM) s *faktorom konverzije* postavljenim u *Šifarnik artikala > kartica Alternativne jedinice mjere*.

**Prisilno izuzeto**: ako je aktivno, ovaj znak ukazuje da je stavka artikla prisilno isporučena: jer kupac više ne želi taj artikl, ili proizvedena i otpremljena količina je manja od naručene količine, ali saldo neće biti proizveden pa će se količina prisilno isporučiti;

**Datum gotove robe i Procijenjeni datum dostave**: ove datume označavaju datum kada će materijal biti spreman (tj. kada će proizvodnja završiti) i datum kada se predviđa isporuka materijala;

**Skladište/Opis/Razlog**: u ovim poljima potrebno je navesti skladište za istovar materijala s odgovarajućim razlogom potrebnim za isporuku robe u trenutku izdavanja otpremnice ili fakture; ovi podaci postavljaju se u tablici [Tip naloga](/docs/configurations/tables/sales/sales-order-types) ;

**Ručna cijena**: omogućuje promjenu cijene i popusta te ih zadržavanje u dokumentima koji se stvaraju iz dokumenta u kojem je izmjena napravljena.

**Težine**: ukupna neto težina i ukupna bruto težina stavki artikla. Prikazane su težine artikala u evidenciji pomnožene s količinom retka.

*Posebni gumbi*

> **Sastavnica materijala**: omogućuje otvaranje osnovne razgradnje odabranog artikla kako biste mogli vidjeti detalje; (za više informacija o ovome obratite se članku Stablo sastavnica materijala i upravljanje strukturama).    
> **Proširi prvi nivo popisa**: : omogućuje dodavanje materijala (sirovina i poluproizvoda) iz osnovne razgradnje odabranog artikla u narudžbu kupca; stoga će biti prikazani materijali prvog nivoa sastava gotovog proizvoda. Ova opcija se, na primjer, često koristi za proizvode u Kitu (tj. sastavljene od više dijelova).    
> **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla u postojećem cjeniku (spremite dokument kako biste omogućili ove gumbe), ili stvaranje novog cjenika s odabranim artiklom i odgovarajućom cijenom.           
> **Podijeli količinu u više datuma dostave**: omogućuje podjelu količine stavke artikla u više redaka prema datumima isporuke. Odabirom retka i klikom na gumb otvorit će se obrazac **Različite dostave** unutar kojeg će biti navedeni *Datum pripravnosti robe*, *Datum isporuke* i *Količina* retka. U sljedećem retku trebat će navesti *Datum spremnosti robe* (koji bi trebao biti isti), *Datum isporuke* koji će biti različit i *Količinu* koja će biti poslana toga dana, a zatim će trebati promijeniti datum u prvom retku ažurirajući ga na preostalu količinu tako da zbroj količina dvaju redaka rezultira početnom količinom retka prije raspada. Potvrditi radnju gumbom *U redu*.      
> **Pakiranje**: omogućuje stvaranje UDC-a iz odabranog retka. Redak mora biti kodiran artikli spremljen u dokument. Korisnik mora imati prava unutar [Postavki unosa/izlaza](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) za utovar paleta. Osim toga, artikl mora biti upravljano kao UDC i prema postavkama Tipa UDC-a unesenim u evidenciju artikala, kartica  [Pakiranje](/docs/erp-home/registers/items/create-new-items/item-registry/packaging), stvorit će se UDC poštujući kriterije.

      
## Popusti/Cjenici

**Popusti**: Prikazuju se sva sniženja povezana s artiklom, svako s vlastitom osnovom i načinom dodjele. Sniženja se mogu preuzeti iz: podataka o klijentu, rješenja plaćanja dodijeljenog dokumentu, cjenika povezanog s klijentom. Svi prikazani podaci mogu se mijenjati. 

**Vrijednosti cjenika**: Prikazuje se cjenik iz kojeg je preuzet artikl, s datumom početka/kraja valjanosti i posebnim prodajnim uvjetima (npr. Razinama popusta) dodijeljenim artiklu u cjeniku. 

*Poseban gumb* 
> **Artikl/Varijanta**: prikazuje odabrani artikl u gornjoj mreži i,  ako postoji, varijantu artikla;   
 > **Tip platnog razreda**: U ovom se polju navodi vrsta popusta iz cjenika koji se treba primijeniti. Napominjemo da jedan cjenik može imati više različitih vrsta popusta za isti artikl. 


## Podaci artikla

Ovdje se unose/dodaju dodatne informacije o artiklu. 

**Artikl/Varijanta**: prikazuje odabrani artikl u gornjoj mreži i, ako postoji, varijantu artikla; 

**Projekt**: To je projekt povezan s dokumentom. To se može dodijeliti, u slučaju narudžbe kupca, uz pomoć postupka *Dobit iz naloga za posao* ili se može dodijeliti uz polje pomoći. 

**Marka**: predstavlja marku artikla, preuzetu iz njegove kartice ili iz cjenika artikla; 

**Napomene**: omogućuje unos napomena za svaki artikl koji želite da se pojavi u svim dokumentima.  

## Trgovački predstavnici  

**Trgovački predstavnici**: predstavnik povezan s odgovarajućom provizijom za odabrani artikl; podatak odgovara onome što je navedeno u *Zaglavlje > kartica Trgovački predstavnici*. Postotak se može promijeniti. 

*Poseban gumb* 
> **Izbriši trgovačkog predstavnike**: omogućuje brisanje povezanog predstavnika s artiklom.


## Varijante 

Prikazuje se varijante odabranog artikla, kodirane u kartici **Varijante** u šifarnik artikla ili se mogu unijeti ručno. 
Omogućuje upravljanje varijantama artikla na način koji se razlikuje od onoga što je ponuđeno na retku s artiklima. 
Na primjer, na svakom se retku s artiklima može unijeti ukupna količina; zatim, u istoj kartici mogu se definirati različite količine za više varijanti odabranog artikla i čak za varijantu i atribut, odnosno upravljanje veličinom/bojom. Ova operacija je moguća samo ako su sve varijante artikla cijenjene po istoj cijeni kao i standardna konfiguracija artikla. 

*Poseban gumb* 
> **Izbriši**: omogućuje brisanje odabranog retka varijante.


## Lotti e Serial number

U oba prikaza mogu se unijeti lotovi i serijski brojevi koji se moraju isprazniti iz skladišta, a koji su povezani s artiklom u *Šifarnik Artikla > kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* ili ih se može unijeti ručno. 

Ova operacija uvjetovana je prisustvom serija i serijskih brojeva u skladištu. 

Ako artikl ne podrazumijeva upravljanje lotovima/serijskim brojevima, ovaj će se karton onemogućiti.  

*Posebni gumbi*
> **Izbriši lot**: omogućuje brisanje odabranog retka lota.     
> **Izbriši serijski broj**: omogućuje brisanje odabranog retka serijskog broja.

## Analitika 

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
 
Polje **Stanje** prikazuje stanje artikla u eventualnom proizvodnom ciklusu i automatski se ažurira na temelju prisutnosti artikala u različitim dokumentima. Artikl ima stanje uneseno kada je narudžba spremljena i zadržava ga ako je narudžba potvrđena. Artikl je u proizvodnji kada se generira zadatak. Artikl je Proizveden nakon završetka proizvodnog ciklusa. 

