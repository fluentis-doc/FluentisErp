---
title: Provjera obračuna troškova resursa
sidebar_position: 4
---

Ovo je procedura u kojoj su vidljivi svi troškovi svih zaposlenika. Troškovi ističu eventualna odstupanja u odnosu na odobreni limit, a odgovorna osoba zadužena je za provjeru i odobravanje troškova. Po završetku odobravanja kreirat će se sažetak za svaki resurs.

### Filtri pretrage

**Period obračuna**:  
	prema zadanim postavkama predlaže se mjesec koji prethodi tekućem. Označava mjesec na temelju kojeg će se pretraživati troškovi.

**Od datuma troška do datuma troška**:  
	ovisno o odabranom obračunskom razdoblju, predlažu se prvi i posljednji datum mjeseca. Korisnik može izmijeniti datume i proširiti raspon pretrage.

**Resurs**: filtrira prema resursu; u slučaju zbirnih troškova (kada je trošak podmirio subjekt A za subjekte B i C), filtar će se uvijek primjenjivati na resurs koji je stvarno podmirio trošak (u ovom slučaju subjekt A).  
	Ovakav pristup koristi se kako bi se olakšao izračun ukupnih iznosa za refundaciju koji će biti priznati subjektu A, a istovremeno omogućila ispravna kontrola limita za svaki pojedini resurs (B i C).

**Vrsta troška**: filtar prema vrsti troška.

**Status troškova**: filtar prema statusu stavki troškova.

**Iznad limita (plafond)**: prikazuje samo troškove koji premašuju odobreni limit.

**Aktivnosti**: prikazuje troškove nastale iz prijava aktivnosti.

**Intervencije**: prikazuje troškove nastale iz intervencija.

**Vrsta intervencije / Od broja do broja / Od datuma do datuma**:  
	filtri za pretraživanje troškova povezanih s određenim intervencijama.

**Vrsta aktivnosti / Od broja do broja / Od datuma do datuma**:  
	filtri za pretraživanje troškova povezanih s određenim prijavama aktivnosti.

### Tablica rezultata

U mreži će biti prikazani svi troškovi uneseni kroz intervencije i aktivnosti koji zadovoljavaju kriterije odabrane u filtrima.

**Resurs**: resurs na koji se trošak odnosi.

**Datum troška**: datum kada je trošak nastao.

**Vrsta troška**: vrsta nastalog troška.

**Iznos**: iznos nastalog troška.

**Limit (plafond)**: maksimalni dnevni iznos definiran u šifarniku resursa za određenu vrstu troška. Ako je **limit = 0**, znači da ograničenje ne postoji.

**Plafon potrošena kvota**: ako za isti resurs, isti dan i istu vrstu troška već postoje drugi troškovi odobreni u drugim nalozima, raspoloživi limit smatra se djelomično iskorištenim (npr. dva intervencijska naloga istog dana za isti resurs i istu vrstu troška).

**Prekoračeni iznos**: dio iznosa koji premašuje limit. Izračunava se prema sljedećoj formuli:  
	Prekoračenje = Limit – Iznos troška – Već iskorišteni dio limita  
	U obzir se uzimaju samo negativne vrijednosti, odnosno one koje premašuju limit.

**Status troška**: označava je li trošak odobren / nije odobren / djelomično odobren / prisilno odobren.

**Dokument**: označava izvorni dokument iz kojeg trošak potječe – može se otvoriti dvostrukim klikom.

**Prilozi**: označava postoje li privici za trošak, koji se mogu pregledati na kartici **Privici**.

**Manualna izmjena**: ako je status prisilno promijenjen u odnosu na predloženi ili je izmijenjen iznos prekoračenja, oznaka se automatski uključuje.

**Način plaćanja**: način plaćanja korišten za nastali trošak.

**Za povrat**: označava treba li trošak biti refundiran kroz obračunsku listu plaće. Primjerice, ako resurs koristi službenu kreditnu karticu, ova će opcija biti isključena.

**Kumulativni trošak**: označava da je trošak dio zbirnog troška (stoga resurs može biti različit od onoga kojem će refundacija biti isplaćena).

**Bilješke**: napomene unesene za predmetni trošak.

#### Statusi retka troška

Prilikom pretraživanja troškova status će biti automatski postavljen prema definiranim pravilima.
Podržani statusi:

- **Uneseno**: trošak je unesen, ali još nije obrađen.
- **Odobreno**: status se dodjeljuje ako je trošak konfiguriran u šifarniku resursa i ne premašuje odobreni limit.
- **Nije autorizirano**: status se dodjeljuje ako trošak **nije** konfiguriran u šifarniku resursa ili ako u cijelosti premašuje odobreni limit. Polje **Prekoračeni iznos** imat će vrijednost jednaku iznosu troška.
- **Djelomično odobreno**: status se dodjeljuje ako je trošak konfiguriran u šifarniku resursa, ali samo djelomično premašuje odobreni limit. Polje **Prekoračeni iznos** može se ručno izmijeniti.
- **Prisilno odobreno**: koristi se kada trošak premašuje limit ili nije predviđen u šifarniku resursa, ali se ipak odluči prisilno odobriti. Polje **Prekoračeni iznos** bit će postavljeno na **0**.

U slučaju **Djelomično odobrenog troška**, polje **Prekoračeni iznos** može se uređivati.  
Time je omogućena prilagodba raspodjele raspoloživog limita (primjerice kada postoji više troškova iste vrste za isti resurs i isti dan ili kada je potrebno povećati limit za konkretan slučaj).

### Parametri (donji dio)

Za generiranje novog putnog naloga:

**Vrsta obračuna troškova**: vrsta putnog naloga koja će se koristiti prilikom generiranja novih dokumenata.

**Datum**: datum putnog naloga.

**Period obračuna**: određuje u koju će obračunsku listu plaće biti uključeni troškovi.

**Opis**: dodatni opis po potrebi.

### Ukupni iznosi

**Ukupan iznos troškova**: ukupan iznos prikazanih troškova.

**Ukupno prekoračeni iznos**: ukupan iznos prekoračenja za prikazane troškove.

### Prilozi

U proceduri je dostupna kartica **Priloženi dokumenti** koja prikazuje popis privitaka i njihov pregled.

Odabirom troškova koji imaju privitke prikazat će se popis svih privitaka.

Odabirom dokumenta iz popisa, u donjem dijelu prozora prikazat će se pregled odabranog dokumenta.

Privitke je moguće dodavati izravno iz ove procedure, pri čemu će oni automatski biti spremljeni uz odgovarajuće dokumente.

### Funkcionalnosti na alatnoj traci

- **Traži** funkcionira kao **Ponovni izračun** svih stavki. Ako postoje stavke označene kao **Ručno izmijenjene**, korisnik će biti upitan želi li zadržati te izmjene.
- **Promijeni status** omogućuje masovnu dodjelu odabranog statusa svim označenim troškovima.
- **Potvrdi validaciju** generira i sprema nalog za svaki resurs koristeći parametre definirane na ovom zaslonu.

Prilikom spremanja ponovno će se izvršiti provjere kako bi se osiguralo da su podaci usklađeni s definiranim pravilima i statusom pojedinih troškova.

Retci sa statusom **Prisilno odobreno** neće biti uključeni u ovu provjeru.

Svi ostali retci grupirat će se prema:

- Resurs / Datum troška / Vrsta troška

Nakon toga izvršit će se sljedeća provjera:

- ako je (**Limit + zbroj iznosa prekoračenja – zbroj iznosa troškova**) **veće ili jednako 0** → **U redu**

U suprotnom će se prikazati blokirajuća poruka:

> **"Pažnja! Postoje ručno izmijenjeni retci koji ne zadovoljavaju definirane uvjete. Prije potvrde potrebno je ispraviti podatke ili ponovno izvršiti pretraživanje i provjeru."**

Kod detaljnih redaka zbirnih troškova, čak i ako se u detaljima pojavljuje više resursa, svi će retci biti uključeni u nalog resursa koji je stvarno podmirio trošak. Time se osigurava ispravna refundacija kroz obračunsku listu plaće. Podaci o pojedinim resursima i dalje će biti potrebni radi provjere njihovih pojedinačnih limita.

Troškovi uključeni u nalog dobit će status **Provjereno** zajedno s datumom i korisnikom koji je izvršio provjeru.

Ako korisnik pokuša izmijeniti troškove u izvornim dokumentima (**Intervencije** ili **Aktivnosti**), prikazat će se poruka:

> **"Trošak je provjeren! Izmjena nije moguća."**

Kako bi se trošak ponovno mogao uređivati, potrebno ga je ukloniti iz putnog naloga ili izvršiti **Povrat** postupka generiranja putnog naloga.

### Povrat

Na kartici **Povrat** moguće je poništiti upravo izvršenu proceduru.

Dodani privici neće biti obrisani, već će ostati spremljeni uz odgovarajuće dokumente.

Povrat poništava isključivo generirani nalog.