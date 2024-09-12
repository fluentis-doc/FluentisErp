---
title: Sažeci
sidebar_position: 5
---

U Sažecima su prikazane osnovne informacije cijelog dokumenta.

## Konačni rabati

Mogu se unijeti samo popusti izraženi u postocima, primijenjeni na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji izračunavaju se i prikazuju na svakom artiklu dokumenta, na *kartici Artikli > kartici Popusti/Cjenici*.

**Tip/Opis popusta**: omogućuje odabir vrsta popusta (unaprijed definiranih u **Vrstama popusta**), dodjeljujući prioritet vrsti i određujući da li se popust primjenjuje na osnovicu ili se kumulativno primjenjuje na prethodno primijenjene popuste.  
**Prioritet**: predstavlja prioritet primjene popusta; redoslijed primjene je uzlazan.  
**Kaskada/Iznos**: za određivanje korištenja osnovice u izračunu popusta (cijena x količina) - (već izračunati popusti) ili (cijena x količina).  
**Vrijednost**: numerička vrijednost konačnog popusta koji se primjenjuje.  

## Troškovi

Ponuđeni su troškovi uneseni u registar kontakata, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Tip/Opis**: omogućuje odabir vrsta troškova (unaprijed definiranih u *Vrstama troškova*), dodjeljujući postotak troškova vrsti.  
**Postotak/Vrijednost**: polje koje određuje da li se troškovi izračunavaju postotkom ili predefiniranom novčanom vrijednošću.  
**Postotak**: numerička vrijednost postotka troška.


## Sažeci PDV-a

Prikazuje se sažetak PDV dokumenta, za svaki PDV kod.

## Pregled dospjeća plaćanja

Prikazuje se sažetak rokova dospijeća dokumenta, za svaki tip i način plaćanja.

**Broj**: progresivna vrijednost reda.  

**Plaćanje**: predstavlja alfanumerički kod tipa plaćanja preuzet iz *Zaglavlja dokumenta > kartice Plaćanja*.

**Iznos**: Izračunati iznos dospijeća. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća opcija Ručno uređivanje. (Automatski se provjerava i upozorava na kvadraturu između iznosa dospijeća i ukupnog iznosa računa).

**Datum dospijeća**: Datum izračunatog dospijeća. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća opcija Ručna izmjena.

**Troškovi naplate**: Polje u kojem se upisuju troškovi inkasa.

**PDV**: Primjenjuje se na troškove inkasa (također se može ručno postaviti)

**Predložak plaćanja**: Možete direktno unijeti u račun računovodstveni uzrok koji stvara automatski zapis o naplati/plaćanju. NB obratite pažnju na predložak uzroka, jer će koristiti račune koji su prisutni i bez podračuna, zbog čega postoji i sljedeće polje.

**Račun podračuna kupca/dobavljača**: Račun koji se koristi za inkaso/plaćanje (kao što su gotovina ili banka) dospijeća, zamjenjujući račun prisutan u računovodstvenom uzroku plaćanja (ili inkasa)
Primka broj: Eventualni broj primitka za primljene novce
Jed.: Aktivira knjiženje zatvaranja dospijeća u automatskom zapisu

**Vrsta popusta**: Vrsta financijskog popusta

**Vrijednost popusta**: Vrijednost financijskog popusta na naplatu

**Detalj izjava**: Referenca na izjavu o namjeri. PDV primijenjen na troškove inkasa može uvijek biti PDV prema omjeru, pa je stoga potrebno omogućiti unos povezane izjave o namjeri (kao što je slučaj s redovima artikala i troškovima)

**ULAZNI RAČUNI**:

**Znak**: samo dospijeća koja imaju ovu oznaku bit će zatvorena plaćanjem s postavljenim uzrokom i računom

**Modeli referentnih plaćanja**: Model kreiranja koda plaćanja. U nekim stranim lokalizacijama, svako dospijeće u računu ima kod dodijeljen od strane fakturanta: ovaj kod je strukturiran prema određenim specifičnim modelima (tablica MB_PaymentReferenceModels), tako da se kod može konstruirati prema određenim modelima.

**Kodovi modela plaćanja**: Ovo je kod (strukturiran kao prethodni model) koji se unosi u stavku, a zatim u plaćanja koja se šalju banci, kako bi ona obavijestila primatelja o tome koje dospijeće je plaćeno (i tako automatiziralo uvoz bankovnih transakcija s zatvaranjem stavke). Iz ovdje se popunjava stavka i datoteka Sepa.

**Datum roka plaćanja unaprijed**: Ovo je polje koje je predviđeno u formatu računa Sdi, krajnji rok za primjenu financijskog popusta.


## Druga polja

**Volumen**: prikazuje se kumulativni volumen, rezultat zbroja volumena artikala (vrijednost se preuzima iz kartice Artikli > kartice Težine/Dimenzije), kada jedinica mjere volumena artikala odgovara onoj unesenoj u parametre računa. U obzir se uzimaju samo artikli koji imaju ovu polje popunjeno;

**Neto težina**: prikazuje se kumulativna neto težina, rezultat zbroja težina artikala (vrijednost se preuzima iz *kartice Artikli > kartice Težine/Dimenzije*), kada jedinica mjere težine artikala odgovara onoj unesenoj u parametre računa. U obzir se uzimaju samo artikli koji imaju ovu polje popunjeno;

**Bruto težina**: Prikazuje se kumulativna bruto težina, rezultat zbroja težina artikala (vrijednost se preuzima iz *kartice Artikli > kartice Težine/Dimenzije*), kada jedinica mjere težine artikala odgovara onoj unesenoj u parametre računa. U obzir se uzimaju samo artikli koji imaju ovu polje popunjeno;

**Broj paketa**: prikazuje se broj paketa na temelju podataka unesenih u *kartici Artikli > kartici Težine/Dimenzije*, u poljima prisutni  *Artikli u paketu* ili *Paketi za artikl*. U obzir se uzimaju samo artikli koji imaju ovo polje popunjeno.

**Završne napomene**: ovo je slobodno polje koje korisnik može ispuniti uz *pomoćno polje za šifriranje*.

## Prijevoz

Automatski se predlaže *Prijevoz napravio* u kartici kupca.

## Ukupni dokumenti

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala;

**Zaduženje**: predstavlja iznos eventualne akontacije primljene za dokument;

**Poklonjeni iznos**: predstavlja iznos darovanih artikala unesenih u kartici *Artikli*;

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez konačnih popusta.

**Neto iznos artikala**: *Iznos stavki bez popusta – Ukupni primjenjeni rabati*;

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postocima na bruto iznos artikala;

**Neto iznos konačnih rabata**: *Neto iznos artikala - Ukupno konačnih rabata*;

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikli *Tipa troškova*;

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u mreži *Troškova*;

**Trošak ovjere**: predstavlja zbroj troškova marke unesenih u mreži *Troškova*;

**Trošak dokumentacije**: predstavlja vrijednost troškova unesenih u mrežu *Troškovi*;

**Osnovica**: *Neto iznos artikala – Konačni popusti + Ukupni nedokumentirani troškovi + Ukupni dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u riepilogima PDV-a;

**Ukupno**: *Osnovica + Porez*.
