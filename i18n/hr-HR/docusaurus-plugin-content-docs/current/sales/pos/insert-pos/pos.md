---
title: Unos maloprodajnog mjesta (POS-a)
sidebar_position: 2
---

# Novi POS

Obrazac **Unos maloprodajnog mjesta** otvara se putem izbornika **Prodaja > Maloprodajno mjesto > Unos maloprodajnog mjesta** ili klikom na gumb **Novi** u pregledu POS dokumenata. 

## 1. Obavezni podaci

Prilikom otvaranja obrasca sustav automatski predlaže trenutni **datum** i **godinu**, no korisnik ih može promijeniti.

Za nastavak izrade POS računa potrebno je ispuniti sljedeća obavezna polja:

- **Tip POS-a** – definira se u izborniku *Konfiguracija > Šifrarnici > Prodaja > Vrste POS-a*.

- **Broj dokumenta** – automatski se dodjeljuje prema definiranoj numeraciji POS dokumenata i vrsti dokumenta.

- **Kupac** – može se odabrati putem pomoći za unos ili ručnim unosom podataka.

:::warning Pažnja
Ovo polje nema utjecaja na knjiženje POS dokumenata. Kontna shema povezana s knjiženjem POS-a mora sadržavati fiksni konto kupca s definiranim podkontom (primjerice konto za gotovinske kupce). Iznos na stavci kupca treba biti postavljen kao ukupni iznos dokumenta.
:::

- **Poslovni partner (Šifarnik)** – alternativno polje u odnosu na konto, koristi se za unos kontakta koji nije povezan s podkontom.

- **Barkod** – omogućuje brzo dodavanje artikala. Unosom barkoda artikla automatski se kreira nova stavka s količinom 1.

### 1.1 Ukupni iznosi dokumenta

Na desnoj strani obrasca prikazuju se ukupni iznosi dokumenta.

- **Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala.

- **Zaduženje**: predstavlja iznos eventualnog predujma zaprimljenog za dokument.

- **Poklonjeni iznos**: predstavlja vrijednost artikala vrste *besplatni artikl* unesenih na kartici **Artikli**.

- **Ukupni primijenjeni popusti**: predstavlja ukupnu vrijednost popusta primijenjenih na artikle, ne uključujući završne popuste.

- **Neto iznos artikala**: Bruto iznos artikala − Ukupni primijenjeni popusti.

- **Ukupno konačnih rabata**: predstavlja vrijednost završnih popusta izraženih u postotku na bruto iznos artikala.

- **Iznos umanjen za ukupni popust**: Neto iznos artikala − Završni popusti.

- **Ukupan za stavke troškova**: predstavlja vrijednost troškova evidentiranih na prethodnoj kartici kao artikli vrste *trošak*.

- **Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u tablici **Troškovi**.

- **Trošak ovjere**: predstavlja zbroj troškova biljega unesenih u tablici **Troškovi**.

- **Ukupni troškovi / popusti / doplate**: predstavlja ukupnu vrijednost troškova evidentiranih u tablici **Troškovi**.

- **Porezna osnovica**: Neto iznos artikala − Završni popusti + Ukupan iznos artikala troška + Ukupni troškovi / popusti / uvećanja.

- **Porez**: predstavlja zbroj svih iznosa prikazanih u pregledima PDV-a.

- **Ukupno**: Porezna osnovica + PDV.

#### Dostupne funkcije

> **Fiskalni** – pokreće izdavanje fiskalnog računa putem povezane blagajne ili fiskalnog uređaja.

> **Automatsko razduženje skladišta** – provodi skladišno razduženje artikala ako su za njih definirani skladište i skladišna vrsta dokumenta.

## 2. Zaglavlje

Nakon unosa obaveznih podataka u gornjem dijelu obrasca korisnik može nastaviti unos sljedećih podataka ručno ili korištenjem pomoći za unos.

Nakon odabira **konta**, sustav automatski predlaže podatke definirane na kartici poslovnog partnera, uključujući adresu i podatke u sljedećim sekcijama:

- **Valuta**: valuta, tečaj i datum valute.
- **Država**: država, jezik i zona.
- **Pošiljka**: način dostave, prijevoz, pakiranje, cjenik i razdoblje važenja cjenika.

### Ostala polja

- **POS status**: prilikom kreiranja dokumenta nijedan status nije aktivan.

  Dostupni statusi su:

  - **Ispisano** – aktivira se nakon ispisa računa.
  - **Istovareno** – označava da je POS dokument razdužen sa skladišta, ručno ili automatskom procedurom.
  - **Knjiženo** – automatski se aktivira nakon knjiženja POS dokumenta.
  - **Opozvano** – omogućuje poništavanje POS dokumenta.

:::note Napomena
Aktivni statusi mogu se ukloniti korištenjem funkcije za vraćanje operacije.
:::

- **Naša referenca / Vaša referenca**: polja za unos internog i kupčevog referentnog broja povezanog s POS dokumentom.

- **Početne napomene**: moguće je odabrati unaprijed definirane napomene iz šifrarnika **Konfiguracija > Uslužni programi > Upravljanje šifriranim napomenama**.

  Za odabir napomene dvaput kliknite polje **Početne napomene** ili koristite pomoć za unos kako biste odabrali željenu vrijednost.

  Desnim klikom moguće je otvoriti prozor za unos duljeg teksta napomene. Ako polje sadrži vrijednost, pozadina polja mijenja boju.

- **Operater**: korisnik koji izrađuje dokument. Operateri moraju biti prethodno definirani u šifrarniku **Početna > Zaposlenici**.

- **Projekt**: omogućuje povezivanje dokumenta s projektom putem pomoći za unos.

  Ovo povezivanje vrijedi isključivo na razini zaglavlja dokumenta.

### 2.1 Plaćanja

Načini plaćanja automatski se preuzimaju s kartice kupca te ih je moguće izmijeniti ili obrisati.

#### Dostupna funkcija

> **Otkaži plaćanja** – uklanja odabrane stavke plaćanja.

## 2.2 Predviđen popust

Predlažu se samo zadani popusti preuzeti s kartice **Kupac > Popusti**, a korisnik ih može izmijeniti ili obrisati.

Popusti definirani u zaglavlju dokumenta automatski se prenose na svaku novu stavku artikla dodanu u dokument.

Ako se nakon unosa stavki artikala u zaglavlje dokumenta doda novi popust, taj se popust neće automatski primijeniti na već unesene stavke artikala.

### Dostupna funkcija

> **Izbriši zadane rabate** – briše odabrane redove s popustima.

### 2.3 Trgovački predstavnici

Prikazuju se agent i njegova provizija definirani na kartici kupca.

Ako agent nije povezan s kupcem, potrebno ga je dodati bez definirane provizije. Prazna vrijednost razlikuje se od provizije 0 %, koja označava da je agent povezan s kupcem, ali nema pravo na proviziju.

Ista kartica dostupna je i na razini pojedine stavke artikla.

#### Dostupna funkcija

> **Izbriši trgovačkog predstavnika** – uklanja odabrane agente.

## 3. Artikli

Na ovoj kartici unose se svi artikli i pripadajući podaci.

Podaci se mogu unositi ručno, pomoću pomoći za unos ili se automatski preuzimaju iz povezanih procedura.

Za unos novog artikla dovoljno je pozicionirati se na novi redak u tablici i unijeti podatke ili koristiti gumb **Novi** na alatnoj traci.

### 3.1 Obavezni podaci

- **Redni broj**: polje se automatski i uzastopno popunjava prilikom unosa novih stavki.

- **Tip linije**: omogućuje odabir različitih vrsta stavki:

  - **Artikl s klasom**: artikl definiran u šifrarniku koji se može knjižiti u analitičkom računovodstvu i evidentirati na skladištu.

  - **Artikl - bilješke**: tekstualna stavka koja nema utjecaj na računovodstvo ni skladišno poslovanje.

  - **Gratis artikl**: označava da se artikl isporučuje bez naplate kupcu.

- **Klasa / Šifra / Naziv artikla**: podaci se mogu unijeti ručno ili odabrati pomoću pomoći za unos koja prikazuje artikle definirane u šifrarniku artikala.

  Nakon odabira artikla njegov se naziv automatski preuzima iz kartice artikla.

  Ako artikl ima definirane varijante, željena varijanta može se odabrati na kartici **Podaci artikla**.

- **Jedinica mjere**: predlaže se osnovna jedinica mjere artikla. Ako su na kartici artikla definirane alternativne jedinice mjere, korisnik može odabrati drugu jedinicu.

- **Varijanta**: ako odabrani artikl ima definirane varijante, potrebno je odabrati željenu varijantu.

  Varijante mogu imati različite cijene pa cijena artikla s varijantom može biti različita od cijene osnovnog artikla.

  U nekim slučajevima za korištenje varijanti potrebno je održavati posebne cjenike.

- **Količina**: predstavlja količinu u osnovnoj jedinici mjere.

  Zadana vrijednost je **1**, ali se može ručno promijeniti ili preuzeti iz izvornog dokumenta.

- **Cijena s PDV-om**: predstavlja prodajnu cijenu uključujući PDV.

  Vrijednost se prethodno definira na kartici artikla u sekciji troškova/cijena te može biti različita po skladištima.

- **PDV** i **Porezna osnovica**: izračunavaju se automatski na temelju unesene cijene s PDV-om.

### Dostupne funkcije

- **Upravljanje ambalažom**: omogućuje otvaranje modula za upravljanje povratnom ambalažom korištenom u POS dokumentu.

  Funkcija postaje dostupna nakon spremanja dokumenta, pod uvjetom da dokument još nije skladišno razdužen.

  Klikom na gumb otvara se obrazac za povezivanje ambalaže sa stavkama dokumenta. Potrebno je odabrati količinu, označiti željeni redak te izvršiti prijenos ambalaže na stavke artikala klikom na gumb **Izvrši**.

  U obrascu se prikazuju svi artikli definirani kao ambalaža i evidentirani u šifrarniku povratne ambalaže.

- **Ažuriranje cjenika**: omogućuje ažuriranje cijene u cjeniku na temelju nove cijene unesene za artikl.

  Klikom na strelicu pored gumba moguće je kreirati novi cjenik ako još nije definiran.

### 3.2 Popusti / Cjenici

Na ovoj kartici moguće je pregledavati cjenik i popuste povezane s odabranom stavkom artikla.

U sekciji **Cjenik** prikazuje se cjenik iz kojeg je preuzeta cijena artikla, zajedno s datumom početka i završetka njegove valjanosti.

U polju **Vrsta popusta** predlaže se zadana vrsta popusta definirana za kupca ili povezana s odabranim cjenikom.

Ako nije definirana zadana vrsta popusta, moguće je ručno odabrati željenu vrstu popusta.

Potrebno je uzeti u obzir da jedan cjenik može sadržavati više različitih vrsta popusta za isti artikl, primjerice:

- količinske popuste
- opće popuste
- promotivne popuste

Ako oznaka **Ručna cijena** nije aktivna, sustav automatski izračunava:

- cjenik
- cijenu
- popuste stavke

Svaka ručna izmjena jednog od navedenih podataka automatski aktivira oznaku **Ručna cijena**.

U tablici **Popusti** prikazuju se svi popusti povezani s artiklom zajedno s njihovom osnovicom za obračun i načinom dodjele.

Popusti se mogu preuzeti iz:

- kartice kupca
- uvjeta plaćanja dodijeljenih dokumentu
- povezanog cjenika kupca

Sve predložene vrijednosti moguće je ručno izmijeniti.

### Dostupna funkcija

- **Izbriši zadane rabate** – briše popust povezan s odabranom stavkom artikla.

### 3.3 Podaci artikla/Detalj

Na ovoj kartici prikazuju se i unose dodatni podaci povezani s artiklom.

- **Artikl**: prikazuje podatke artikla odabranog u tablici stavki.

- **PDV**: prioritetno se preuzima iz PDV postavke definirane na kartici kupca.

  Ako na kartici kupca nije definiran PDV, sustav predlaže vrijednost definiranu na kartici artikla.

  Korisnik može odabrati drugu vrijednost. Polje je obavezno.

- **Projekt**: projekt povezan s dokumentom ili dodijeljen pojedinoj stavci pomoću pomoći za unos.

- **Marka**: preuzima se s kartice artikla ili iz cjenika artikla.

- **Promet prodaje**: preuzima se s kartice artikla u sekciji **Općenito**.

  Ako vrijednost nije definirana, tijekom knjiženja koristi se konto prihoda definiran u polju **Zadani prihod/trošak protustavke** na kartici kupca.

- **Skladište i predložak**: predlažu se skladište i skladišna vrsta dokumenta koji će se automatski koristiti prilikom skladišnog razduženja artikala.

  Vrijednosti se preuzimaju iz šifrarnika **Vrste POS-a**.

- **Napomene**: omogućuje unos dodatnih napomena za pojedinu stavku artikla.

### 3.4 Trgovački predstavnici

- **Agent**: prikazuje agenta povezanog s odabranom stavkom zajedno s pripadajućom provizijom.

  Podatak se preuzima iz kartice **Agenti** u zaglavlju dokumenta.

  Postotak provizije moguće je izmijeniti na razini pojedine stavke.

#### Dostupna funkcija

- **Izbriši trgovačkog predstavnika** – uklanja agenta povezanog s odabranom stavkom artikla.

### 3.5 Analitika

Kartica može sadržavati podatke o mjestima troška i profitnim centrima na koje se raspoređuju vrijednosti artikala.

Podaci se mogu:

- unijeti ručno
- automatski preuzeti s kartice kupca
- automatski preuzeti s kartice artikla
- automatski preuzeti iz kontnog plana

ako su prethodno definirani u odgovarajućim šifrarnicima.

## 4. Sažeci

### 4.1 Konačni popusti artikala

Završni popusti definirani na razini dokumenta raspoređuju se proporcionalno na sve stavke artikala. To znači da se ukupni iznos popusta dijeli između svih artikala na dokumentu, a pripadajući iznos popusta vidljiv je na svakoj pojedinoj stavci.

- **Vrsta / Naziv popusta**: omogućuje odabir vrste popusta definirane u šifrarniku vrsta popusta te određivanje prioriteta primjene i načina obračuna.

- **Prioritet**: određuje redoslijed primjene popusta. Popusti se obračunavaju prema rastućem prioritetu.

- **Kaskadno / Iznos**: određuje obračunava li se popust na osnovicu umanjenu za prethodno obračunate popuste ili na puni iznos stavke.

- **Vrijednost**: numerička vrijednost popusta koja će se primijeniti.

### 4.2 Konačni troškovi / popusti / doplate

Predlažu se troškovi i popusti definirani na kartici kupca u sekciji **Troškovi / Popusti**.

U ovoj tablici:

- troškovi se unose kao pozitivni iznosi
- popusti se unose kao negativni iznosi

Ove stavke primjenjuju se na cijeli dokument i ne raspoređuju se na pojedine artikle.

Mogu sadržavati:

- dodatne troškove
- opće popuste
- uvećanja vrijednosti dokumenta

Ako su definirani na kartici kupca, automatski se predlažu prilikom kreiranja dokumenta.

Dostupna polja:

- **Vrsta / Opis**: omogućuje odabir vrste troška definirane u šifrarniku vrsta troškova te određivanje postotka troška.

- **Iznos troška**: prikazuje iznos troška u valuti dokumenta.

- **PDV**: određuje poreznu stopu koja će se primijeniti na uneseni trošak.

- **Postotak / Vrijednost**: određuje obračunava li se trošak kao postotak ili kao unaprijed definiran novčani iznos.

  Ako se odabere vrijednost, iznos troška potrebno je unijeti u polje **Iznos troška**.

- **Postotak**: numerička vrijednost postotka troška.

### 4.3 Sažetak PDV-a

Prikazuje pregled PDV-a dokumenta grupiran po pojedinim poreznim stopama.

### 4.4 Pregled dospijeća plaćanja

Prikazuje pregled dospijeća dokumenta prema vrsti i načinu plaćanja.

Dostupna polja:

- **Redni broj**: redni broj stavke.

- **Način plaćanja**: šifra načina plaćanja preuzeta iz kartice **Plaćanja** u zaglavlju dokumenta.

- **Iznos**: obračunati iznos dospijeća.

  Vrijednost je moguće ručno izmijeniti. U tom slučaju automatski se aktivira oznaka **Ručna izmjena** te se pokreću kontrole usklađenosti između iznosa dospijeća i ukupnog iznosa dokumenta.

- **Datum dospijeća**: obračunati datum dospijeća.

  Vrijednost je moguće ručno promijeniti, pri čemu se automatski aktivira oznaka **Ručna izmjena**.

- **Troškovi naplate**: prikazuje obračunate troškove naplate.

- **PDV**: porezna stopa primijenjena na troškove naplate. Vrijednost se može ručno izmijeniti.

- **Predložak plaćanja**: omogućuje definiranje predloška koji će generirati automatsko knjiženje naplate ili plaćanja.

  Potrebno je obratiti pozornost na predložak knjiženja jer će se koristiti konto definiran u samom predlošku bez konta.

- **Konto / Opis kupca**: konto koji se koristi za evidentiranje naplate ili plaćanja (primjerice blagajna ili banka).

  Ova vrijednost prepisuje konto definiran u kontnoj shemi plaćanja ili naplate.