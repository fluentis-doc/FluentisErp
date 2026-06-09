---
title: Unos maloprodajnog mesta (POS)
sidebar_position: 2
---

# Novi POS

Obrazac **Unos maloprodajnog mesta** otvara se putem menija **Prodaja > Maloprodajno mesto > Unos maloprodajnog mesta** ili klikom na dugme **Novo** u pregledu POS dokumenata.

## 1. Obavezni podaci

Prilikom otvaranja obrasca sistem automatski predlaže trenutni **datum** i **godinu**, ali ih korisnik može promeniti.

Za nastavak izrade POS računa potrebno je popuniti sledeća obavezna polja:

- **Tip POS-a** – definiše se u meniju *Konfiguracija > Šifarnici > Prodaja > Vrste POS-a*.

- **Broj dokumenta** – automatski se dodeljuje prema definisanoj numeraciji POS dokumenata i vrsti dokumenta.

- **Kupac** – može se odabrati putem pomoći za unos ili ručnim unosom podataka.

:::warning Pažnja
Ovo polje nema uticaj na knjiženje POS dokumenata. Kontna šema povezana sa knjiženjem POS-a mora sadržati fiksni konto kupca sa definisanim podkontom (na primer konto za gotovinske kupce). Iznos na stavci kupca treba da bude postavljen kao ukupan iznos dokumenta.
:::

- **Poslovni partner (Šifarnik)** – alternativno polje u odnosu na konto, koristi se za unos kontakta koji nije povezan sa podkontom.

- **Barkod** – omogućava brzo dodavanje artikala. Unosom barkoda artikla automatski se kreira nova stavka sa količinom 1.

### 1.1 Ukupni iznosi dokumenta

Na desnoj strani obrasca prikazuju se ukupni iznosi dokumenta.

- **Iznos stavki bez popusta**: predstavlja zbir vrednosti svih artikala.

- **Zaduženje**: predstavlja iznos eventualnog avansa primljenog za dokument.

- **Poklonjeni iznos**: predstavlja vrednost artikala tipa *gratis artikl* unetih na kartici **Artikli**.

- **Ukupni primenjeni popusti**: predstavlja ukupnu vrednost popusta primenjenih na artikle, ne uključujući završne popuste.

- **Neto iznos artikala**: Bruto iznos artikala − Ukupni primenjeni popusti.

- **Ukupno završnih rabata**: predstavlja vrednost završnih popusta izraženih u procentu na bruto iznos artikala.

- **Iznos umanjen za ukupan popust**: Neto iznos artikala − Završni popusti.

- **Ukupno za stavke troškova**: predstavlja vrednost troškova evidentiranih na prethodnoj kartici kao artikli tipa *trošak*.

- **Troškovi naplate**: predstavlja zbir troškova naplate unetih u tabeli **Troškovi**.

- **Trošak overe**: predstavlja zbir troškova taksi unetih u tabeli **Troškovi**.

- **Ukupni troškovi / popusti / doplate**: predstavlja ukupnu vrednost troškova evidentiranih u tabeli **Troškovi**.

- **Poreska osnovica**: Neto iznos artikala − Završni popusti + Ukupan iznos artikala troška + Ukupni troškovi / popusti / doplate.

- **Porez**: predstavlja zbir svih iznosa prikazanih u pregledima PDV-a.

- **Ukupno**: Poreska osnovica + PDV.

#### Dostupne funkcije

> **Fiskalni** – pokreće izdavanje fiskalnog računa putem povezane kase ili fiskalnog uređaja.

> **Automatsko razduženje skladišta** – vrši skladišno razduženje artikala ukoliko su za njih definisani skladište i vrsta skladišnog dokumenta.

## 2. Zaglavlje

Nakon unosa obaveznih podataka u gornjem delu obrasca korisnik može nastaviti unos sledećih podataka ručno ili korišćenjem pomoći za unos.

Nakon odabira **konta**, sistem automatski predlaže podatke definisane na kartici poslovnog partnera, uključujući adresu i podatke u sledećim sekcijama:

- **Valuta**: valuta, kurs i datum kursa.
- **Država**: država, jezik i zona.
- **Pošiljka**: način isporuke, prevoz, pakovanje, cenovnik i period važenja cenovnika.

### Ostala polja

- **POS status**: prilikom kreiranja dokumenta nijedan status nije aktivan.

  Dostupni statusi su:

  - **Odštampano** – aktivira se nakon štampanja računa.
  - **Razduženo** – označava da je POS dokument razdužen sa skladišta, ručno ili automatskom procedurom.
  - **Knjiženo** – automatski se aktivira nakon knjiženja POS dokumenta.
  - **Opozvano** – omogućava poništavanje POS dokumenta.

:::note Napomena
Aktivni statusi mogu se ukloniti korišćenjem funkcije za vraćanje operacije.
:::

- **Naša referenca / Vaša referenca**: polja za unos internog i kupčevog referentnog broja povezanog sa POS dokumentom.

- **Početne napomene**: moguće je odabrati unapred definisane napomene iz šifarnika **Konfiguracija > Uslužni programi > Upravljanje šifriranim napomenama**.

  Za odabir napomene potrebno je dvostruki klik na polje **Početne napomene** ili koristite pomoć za unos.

  Desnim klikom moguće je otvoriti prozor za unos dužeg teksta napomene. Ako polje sadrži vrednost, pozadina polja menja boju.

- **Operater**: korisnik koji kreira dokument. Operateri moraju biti prethodno definisani u šifarniku **Početna > Zaposleni**.

- **Projekat**: omogućava povezivanje dokumenta sa projektom putem pomoći za unos.

  Ovo povezivanje važi isključivo na nivou zaglavlja dokumenta.

  ### 2.1 Plaćanja

Načini plaćanja automatski se preuzimaju sa kartice kupca i mogu se menjati ili brisati.

#### Dostupna funkcija

> **Otkaži plaćanja** – uklanja odabrane stavke plaćanja.

### 2.2 Predviđeni popust

Predlažu se samo podrazumevani popusti preuzeti sa kartice **Kupac > Popusti**, a korisnik ih može menjati ili brisati.

Popusti definisani u zaglavlju dokumenta automatski se prenose na svaku novu stavku artikla dodatu u dokument.

Ako se nakon unosa stavki artikala u zaglavlje dokumenta doda novi popust, taj popust neće automatski biti primenjen na već unete stavke artikala.

#### Dostupna funkcija

> **Obriši podrazumevane rabate** – briše odabrane redove sa popustima.

### 2.3 Trgovački predstavnici

Prikazuju se agent i njegova provizija definisani na kartici kupca.

Ako agent nije povezan sa kupcem, potrebno ga je dodati bez definisane provizije. Prazna vrednost razlikuje se od provizije 0%, koja označava da je agent povezan sa kupcem, ali nema pravo na proviziju.

Ista kartica dostupna je i na nivou pojedinačne stavke artikla.

#### Dostupna funkcija

> **Obriši trgovačkog predstavnika** – uklanja odabrane agente.

## 3. Artikli

Na ovoj kartici unose se svi artikli i pripadajući podaci.

Podaci se mogu unositi ručno, pomoću pomoći za unos ili se automatski preuzimaju iz povezanih procedura.

Za unos novog artikla dovoljno je pozicionirati se na novi red u tabeli i uneti podatke ili koristiti dugme **Novo** na alatnoj traci.

### 3.1 Obavezni podaci

- **Redni broj**: polje se automatski i uzastopno popunjava prilikom unosa novih stavki.

- **Tip reda**: omogućava izbor različitih vrsta stavki:

  - **Artikal sa klasom**: artikal definisan u šifrarniku koji se može knjižiti u analitičkom računovodstvu i evidentirati na skladištu.

  - **Artikal - napomena**: tekstualna stavka koja nema uticaj na računovodstvo ni skladišno poslovanje.

  - **Gratis artikal**: označava da se artikal isporučuje bez naplate kupcu.

- **Klasa / Šifra / Naziv artikla**: podaci se mogu uneti ručno ili odabrati pomoću pomoći za unos koja prikazuje artikle definisane u šifrarniku artikala.

  Nakon izbora artikla njegov naziv automatski se preuzima sa kartice artikla.

  Ako artikal ima definisane varijante, željena varijanta može se odabrati na kartici **Podaci artikla**.

- **Jedinica mere**: predlaže se osnovna jedinica mere artikla. Ako su na kartici artikla definisane alternativne jedinice mere, korisnik može odabrati drugu jedinicu.

- **Varijanta**: ako odabrani artikal ima definisane varijante, potrebno je odabrati željenu varijantu.

  Varijante mogu imati različite cene pa cena artikla sa varijantom može biti različita od cene osnovnog artikla.

  U nekim slučajevima za korišćenje varijanti potrebno je održavati posebne cenovnike.

- **Količina**: predstavlja količinu u osnovnoj jedinici mere.

  Podrazumevana vrednost je **1**, ali se može ručno promeniti ili preuzeti iz izvornog dokumenta.

- **Cena sa PDV-om**: predstavlja prodajnu cenu uključujući PDV.

  Vrednost se prethodno definiše na kartici artikla u sekciji troškova/cena i može biti različita po skladištima.

- **PDV** i **Poreska osnovica**: izračunavaju se automatski na osnovu unete cene sa PDV-om.

#### Dostupne funkcije

- **Upravljanje ambalažom**: omogućava otvaranje modula za upravljanje povratnom ambalažom korišćenom u POS dokumentu.

  Funkcija postaje dostupna nakon snimanja dokumenta, pod uslovom da dokument još nije skladišno razdužen.

  Klikom na dugme otvara se obrazac za povezivanje ambalaže sa stavkama dokumenta. Potrebno je odabrati količinu, označiti željeni red i izvršiti prenos ambalaže na stavke artikala klikom na dugme **Izvrši**.

  U obrascu se prikazuju svi artikli definisani kao ambalaža i evidentirani u šifrarniku povratne ambalaže.

- **Ažuriranje cenovnika**: omogućava ažuriranje cene u cenovniku na osnovu nove cene unete za artikal.

  Klikom na strelicu pored dugmeta moguće je kreirati novi cenovnik ukoliko još nije definisan.

### 3.2 Popusti / Cenovnici

Na ovoj kartici moguće je pregledati cenovnik i popuste povezane sa odabranom stavkom artikla.

U sekciji **Cenovnik** prikazuje se cenovnik iz kojeg je preuzeta cena artikla, zajedno sa datumom početka i završetka njegovog važenja.

U polju **Vrsta popusta** predlaže se podrazumevana vrsta popusta definisana za kupca ili povezana sa odabranim cenovnikom.

Ako nije definisana podrazumevana vrsta popusta, moguće je ručno odabrati željenu vrstu popusta.

Potrebno je uzeti u obzir da jedan cenovnik može sadržati više različitih vrsta popusta za isti artikal, na primer:

- količinske popuste
- opšte popuste
- promotivne popuste

Ako oznaka **Ručna cena** nije aktivna, sistem automatski izračunava:

- cenovnik
- cenu
- popuste stavke

Svaka ručna izmena jednog od navedenih podataka automatski aktivira oznaku **Ručna cena**.

U tabeli **Popusti** prikazuju se svi popusti povezani sa artiklom zajedno sa njihovom osnovicom za obračun i načinom dodele.

Popusti se mogu preuzeti iz:

- kartice kupca
- uslova plaćanja dodeljenih dokumentu
- povezanog cenovnika kupca

Sve predložene vrednosti moguće je ručno izmeniti.

#### Dostupna funkcija

- **Obriši podrazumevane rabate** – briše popust povezan sa odabranom stavkom artikla.

### 3.3 Podaci artikla

Na ovoj kartici prikazuju se dodatni podaci povezani sa odabranom stavkom artikla.

Dostupna polja su:

- **Opis artikla**: prikazuje naziv ili opis artikla koji će biti odštampan na dokumentu.

- **Opis za kupca**: omogućava unos alternativnog opisa namenjenog kupcu.

- **Varijanta**: prikazuje odabranu varijantu artikla.

- **Skladište**: prikazuje skladište iz kojeg će artikal biti razdužen.

- **Predviđeni datum isporuke**: omogućava unos planiranog datuma isporuke za pojedinačnu stavku.

- **Napomena**: polje za unos slobodnih beleški vezanih za stavku.

### 3.4 Trgovački predstavnici

Na ovoj kartici moguće je definisati agente povezane sa pojedinačnom stavkom artikla.

Ako je agent definisan u zaglavlju dokumenta, automatski će biti predložen i na nivou stavke.

Moguće je:

- promeniti predloženog agenta,
- dodati dodatne agente,
- definisati procenat provizije za svakog agenta.

#### Dostupna funkcija

> **Obriši trgovačkog predstavnika** – uklanja odabranog agenta sa stavke artikla.

## 4. Završni popusti

Na ovoj kartici mogu se definisati završni popusti koji se primenjuju na ukupan dokument.

Popusti uneseni u ovoj sekciji obračunavaju se nakon svih popusta definisanih na pojedinačnim stavkama.

Dostupna polja:

- **Tip popusta**: vrsta popusta definisana u šifrarniku tipova popusta.

- **Opis**: opis odabranog tipa popusta.

- **Prioritet**: redosled primene popusta.

- **Kaskadni / Osnovni**: određuje da li se popust obračunava na osnovicu ili na već umanjeni iznos.

- **Vrednost**: procenat popusta koji se primenjuje.

#### Dostupna funkcija

> **Obriši završni popust** – uklanja odabrani završni popust.

## 5. Troškovi / Popusti / Doplate

Na ovoj kartici moguće je evidentirati dodatne troškove, popuste ili doplate koji važe za ceo dokument.

Neki podaci mogu biti automatski preuzeti sa kartice kupca.

Dostupna polja:

- **Tip troška**: vrsta troška definisana u šifrarniku tipova troškova.

- **Opis**: opis odabranog troška.

- **Način obračuna**: određuje da li se trošak obračunava procentualno ili u fiksnom iznosu.

- **Procenat**: procenat troška.

- **Vrednost**: apsolutni iznos troška.

#### Dostupna funkcija

> **Obriši trošak** – uklanja odabrani trošak sa dokumenta.

## 6. Dodatni podaci

Na ovoj kartici moguće je unositi dodatne podatke definisane kroz sistem dodatnih podataka.

Prikazana polja zavise od konfiguracije dodatnih podataka povezane sa POS dokumentima.

## 7. Informacije o e-mailu

Na ovoj kartici moguće je definisati podatke koji će se koristiti za slanje dokumenta elektronskom poštom.

Dostupna polja:

- **Prima**: adresa primaoca.

- **Kopija (CC)**: adrese primalaca kopije.

- **Skrivena kopija (BCC)**: adrese primalaca skrivene kopije.

- **Predmet**: naslov poruke.

- **Tekst poruke**: sadržaj e-mail poruke.

Ovi podaci mogu biti automatski predloženi na osnovu podešavanja poslovnog partnera ili sistema.