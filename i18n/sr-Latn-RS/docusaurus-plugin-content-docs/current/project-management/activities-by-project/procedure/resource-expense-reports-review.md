---
title: Provera obračuna troškova resursa
sidebar_position: 4
---

Ovo je procedura u kojoj su vidljivi svi troškovi svih zaposlenih. Troškovi ističu eventualna odstupanja u odnosu na odobreni limit, a odgovorno lice zaduženo je za proveru i odobravanje troškova. Po završetku odobravanja kreiraće se sažetak za svaki resurs.

### Filteri pretrage

**Obračunski period**:  
	prema podrazumevanim podešavanjima predlaže se mesec koji prethodi tekućem. Označava mesec na osnovu kojeg će se pretraživati troškovi.

**Od datuma troška do datuma troška**:  
	u zavisnosti od izabranog obračunskog perioda, predlažu se prvi i poslednji datum meseca. Korisnik može izmeniti datume i proširiti opseg pretrage.

**Resurs**: filtrira prema resursu; u slučaju zbirnih troškova (kada je trošak podmirio subjekt A za subjekte B i C), filter će se uvek primenjivati na resurs koji je stvarno podmirio trošak (u ovom slučaju subjekt A).  
	Ovakav pristup koristi se kako bi se olakšao obračun ukupnih iznosa za refundaciju koji će biti priznati subjektu A, a istovremeno omogućila ispravna kontrola limita za svaki pojedinačni resurs (B i C).

**Vrsta troška**: filter prema vrsti troška.

**Status troškova**: filter prema statusu stavki troškova.

**Iznad limita (plafona)**: prikazuje samo troškove koji premašuju odobreni limit.

**Aktivnosti**: prikazuje troškove nastale iz prijava aktivnosti.

**Intervencije**: prikazuje troškove nastale iz intervencija.

**Vrsta intervencije / Od broja do broja / Od datuma do datuma**:  
	filteri za pretraživanje troškova povezanih sa određenim intervencijama.

**Vrsta aktivnosti / Od broja do broja / Od datuma do datuma**:  
	filteri za pretraživanje troškova povezanih sa određenim prijavama aktivnosti.

### Tabela rezultata

U mreži će biti prikazani svi troškovi uneti kroz intervencije i aktivnosti koji zadovoljavaju kriterijume izabrane u filterima.

**Resurs**: resurs na koji se trošak odnosi.

**Datum troška**: datum kada je trošak nastao.

**Vrsta troška**: vrsta nastalog troška.

**Iznos**: iznos nastalog troška.

**Limit (plafon)**: maksimalni dnevni iznos definisan u šifarniku resursa za određenu vrstu troška. Ako je **limit = 0**, to znači da ograničenje ne postoji.

**Plafon potrošena kvota**: ako za isti resurs, isti dan i istu vrstu troška već postoje drugi troškovi odobreni u drugim nalozima, raspoloživi limit smatra se delimično iskorišćenim (npr. dva intervencijska naloga istog dana za isti resurs i istu vrstu troška).

**Prekoračeni iznos**: deo iznosa koji premašuje limit. Izračunava se prema sledećoj formuli:  
	Prekoračenje = Limit – Iznos troška – Već iskorišćeni deo limita  
	U obzir se uzimaju samo negativne vrednosti, odnosno one koje premašuju limit.

**Status troška**: označava da li je trošak odobren / nije odobren / delimično odobren / prinudno odobren.

**Dokument**: označava izvorni dokument iz kojeg trošak potiče – može se otvoriti dvostrukim klikom.

**Prilozi**: označava da li postoje prilozi za trošak, koji se mogu pregledati na kartici **Prilozi**.

**Ručna izmena**: ako je status prinudno promenjen u odnosu na predloženi ili je izmenjen iznos prekoračenja, oznaka se automatski uključuje.

**Način plaćanja**: način plaćanja korišćen za nastali trošak.

**Za povraćaj**: označava da li trošak treba da bude refundiran kroz obračunsku listu plate. Na primer, ako resurs koristi službenu kreditnu karticu, ova opcija će biti isključena.

**Kumulativni trošak**: označava da je trošak deo zbirnog troška (stoga resurs može biti različit od onog kojem će refundacija biti isplaćena).

**Beleške**: napomene unete za predmetni trošak.

#### Statusi reda troška

Prilikom pretrage troškova status će biti automatski postavljen prema definisanim pravilima.  
Podržani statusi:

- **Uneto**: trošak je unet, ali još nije obrađen.
- **Odobreno**: status se dodeljuje ako je trošak konfigurisan u šifarniku resursa i ne premašuje odobreni limit.
- **Nije autorizovano**: status se dodeljuje ako trošak **nije** konfigurisan u šifarniku resursa ili ako u potpunosti premašuje odobreni limit. Polje **Prekoračeni iznos** imaće vrednost jednaku iznosu troška.
- **Delimično odobreno**: status se dodeljuje ako je trošak konfigurisan u šifarniku resursa, ali samo delimično premašuje odobreni limit. Polje **Prekoračeni iznos** može se ručno izmeniti.
- **Prinudno odobreno**: koristi se kada trošak premašuje limit ili nije predviđen u šifarniku resursa, ali se ipak odluči da se prinudno odobri. Polje **Prekoračeni iznos** biće postavljeno na **0**.

U slučaju **Delimično odobrenog troška**, polje **Prekoračeni iznos** može se uređivati.  
Time je omogućeno prilagođavanje raspodele raspoloživog limita (na primer kada postoji više troškova iste vrste za isti resurs i isti dan ili kada je potrebno povećati limit za konkretan slučaj).

### Parametri (donji deo)

Za generisanje novog putnog naloga:

**Vrsta obračuna troškova**: vrsta putnog naloga koja će se koristiti prilikom generisanja novih dokumenata.

**Datum**: datum putnog naloga.

**Obračunski period**: određuje u koju će obračunsku listu plata biti uključeni troškovi.

**Opis**: dodatni opis po potrebi.

### Ukupni iznosi

**Ukupan iznos troškova**: ukupan iznos prikazanih troškova.

**Ukupno prekoračeni iznos**: ukupan iznos prekoračenja za prikazane troškove.

### Prilozi

U proceduri je dostupna kartica **Priloženi dokumenti** koja prikazuje spisak priloga i njihov pregled.

Izborom troškova koji imaju priloge prikazaće se spisak svih priloga.

Izborom dokumenta iz spiska, u donjem delu prozora prikazaće se pregled izabranog dokumenta.

Priloge je moguće dodavati direktno iz ove procedure, pri čemu će oni automatski biti sačuvani uz odgovarajuće dokumente.

### Funkcionalnosti na alatnoj traci

- **Traži** funkcioniše kao **Ponovni obračun** svih stavki. Ako postoje stavke označene kao **Ručno izmenjene**, korisnik će biti upitan da li želi da zadrži te izmene.
- **Promeni status** omogućava masovnu dodelu izabranog statusa svim označenim troškovima.
- **Potvrdi validaciju** generiše i čuva nalog za svaki resurs koristeći parametre definisane na ovom ekranu.

Prilikom čuvanja ponovo će se izvršiti provere kako bi se obezbedilo da su podaci usklađeni sa definisanim pravilima i statusom pojedinačnih troškova.

Redovi sa statusom **Prinudno odobreno** neće biti uključeni u ovu proveru.

Svi ostali redovi grupisaće se prema:

- Resurs / Datum troška / Vrsta troška

Nakon toga izvršiće se sledeća provera:

- ako je (**Limit + zbir iznosa prekoračenja – zbir iznosa troškova**) **veće ili jednako 0** → **U redu**

U suprotnom će se prikazati blokirajuća poruka:

> **"Pažnja! Postoje ručno izmenjeni redovi koji ne zadovoljavaju definisane uslove. Pre potvrde potrebno je ispraviti podatke ili ponovo izvršiti pretragu i proveru."**

Kod detaljnih redova zbirnih troškova, čak i ako se u detaljima pojavljuje više resursa, svi redovi biće uključeni u nalog resursa koji je stvarno podmirio trošak. Time se obezbeđuje ispravna refundacija kroz obračunsku listu plata. Podaci o pojedinačnim resursima i dalje će biti potrebni radi provere njihovih pojedinačnih limita.

Troškovi uključeni u nalog dobiće status **Provereno** zajedno sa datumom i korisnikom koji je izvršio proveru.

Ako korisnik pokuša da izmeni troškove u izvornim dokumentima (**Intervencije** ili **Aktivnosti**), prikazaće se poruka:

> **"Trošak je proveren! Izmena nije moguća."**

Da bi trošak ponovo mogao da se uređuje, potrebno ga je ukloniti iz putnog naloga ili izvršiti **Povrat** postupka generisanja putnog naloga.

### Povrat

Na kartici **Povrat** moguće je poništiti upravo izvršenu proceduru.

Dodati prilozi neće biti obrisani, već će ostati sačuvani uz odgovarajuće dokumente.

Povrat poništava isključivo generisani nalog.