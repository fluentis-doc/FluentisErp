---
title: "Šifarnik lotova i sljedivost"
sidebar_position: 3
sidebar_label: "Šifarnik lotova i sljedivost"
description: "Vodič za upotrebu šifarnika lotova i modula sljedivosti u sustavu Fluentis za učinkovito upravljanje proizvodima."
schema: "TechArticle"
tags: ["Šifarnik lotova", "sljedivost", "Fluentis", "upravljanje proizvodima"]
keywords: ["Šifarnik lotova", "sljedivost proizvoda", "Fluentis"]
---

# Šifarnik lotova i sljedivost

:::important Čemu služi
Šifarnika lotova u sustavu Fluentis neophodan su alat za precizno i detaljno upravljanje lotovima unutar sustava sljedivosti proizvoda. Ova funkcionalnost omogućuje korisnicima pretraživanje i pregled pojedinosti svakog lota jednostavnim dvostrukim klikom, čime se olakšava praćenje i upravljanje zalihama.

Na kartici pojedinog lota korisnici mogu mijenjati različite važne podatke, kao što su dobavljač, šifra lota dobavljača, posebne napomene i stanje lota. Stanje lota, koje se može jednostavno ažurirati, ima ključnu ulogu u određivanju mogućnosti upotrebe lota u prodajnim dokumentima i skladišnim knjiženjima. Sustav također omogućuje upravljanje različitim stanjima lota koja izravno utječu na njegovu operativnu raspoloživost.

Posebna značajka šifarnika lotova jest sekcija koja omogućuje povijesni pregled dokumenata ulaza i izlaza u kojima je lot sudjelovao, čime se osigurava precizna sljedivost tijekom vremena. Također je moguće pregledati trenutačnu zalihu po pojedinim skladištima. Zahvaljujući ovim funkcionalnostima, šifarnik lotova u sustavu Fluentis pojednostavljuju operativno upravljanje i pridonose osiguravanju usklađenosti s propisima u sektorima u kojima je sljedivost ključna, kao što su prehrambena i farmaceutska industrija.
:::

## Šifarnik lotova

Forma prikazuje pojedinosti lota i sastoji se od 4 zasebne sekcije:

### Zaglavlje lota

U ovoj se sekciji prikazuju glavni podaci o lotu, pri čemu je neke od njih moguće mijenjati:

- **Artikl**: klasa, šifra i opis artikla na koji se lot odnosi. Riječ je o artiklu s aktiviranom oznakom *Upravljanje lotovima* u *šifarniku artikla* > kartica *Lotovi/SN*. U suprotnom ne bi bilo moguće izvršiti ulaz lota za taj artikl.
- **Varijanta**: šifra i opis varijante artikla na koji se lot odnosi, ako postoji.
- **Lot**: u ovom se polju prikazuje šifra lota. Polje korisnik može uređivati, iako se tijekom postupaka ulaza može automatski generirati na temelju pravila definiranih u *Tipu šifre lota* povezanom s artiklom. Najprije se unose šifra i opis *tipa šifre lota*, redak se sprema, a zatim se određuju parametri koji će se koristiti za sastavljanje upravo kreiranog *tipa šifre lota*. Za svaki korišteni parametar moguće je odrediti broj znakova od kojih se sastoji te, prema potrebi, znak za popunjavanje. Primjerice, ako se za parametar *Redni broj* kao znak za popunjavanje postavi `0`, a duljina na `5`, kreirat će se lotovi s brojevima 00000, zatim 00001, 00002 i tako dalje. *Tip šifre lota* zatim je potrebno povezati s šifarnikom artikla u odgovarajućem polju na kartici *Lotovi/Serijski brojevi*. Na taj će se način u postupcima koji automatski kreiraju šifru lota za predmetni artikl lot generirati prema pravilima definiranima u *tipu šifre lota* povezanom s artiklom. Polje je alfanumeričko i može sadržavati najviše 50 znakova. Ne predstavlja identifikator lota jer je isti lot moguće zaprimiti više puta u različitim trenucima. U tom će se slučaju u mreži forme *Pretraživanje lotova* prikazati više redaka s istom *Šifrom lota*.
- **Dobavljač**: konto/podkonto/opis dobavljača.
- **Proizvođač**: skraćeni naziv/naziv poduzeća proizvođača.
- **Šifra dobavljača**: šifra *Lota dobavljača*, odnosno najčešće naziv koji dobavljač dodjeljuje lotu. Polje korisnik može uređivati i ne može se automatski generirati tijekom postupaka ulaza. Može sadržavati najviše 50 znakova te može biti jednako i za različite lotove različitih artikala.
- **Tip izvještaja etikete**: tip etikete koja će se ispisivati za ovaj lot.
- **Datum početka**: datum ulaza lota koji korisnik može uređivati. Ako je lot zaprimljen skladišnim knjiženjem, predlaže se datum kreiranja knjiženja. Ako je lot zaprimljen putem ulaza primke ili knjiženja povrata iz vanjske obrade, postavlja se datum primke odnosno dokumenta vanjske obrade, osim ako ga korisnik nije ručno izmijenio u dokumentu. Ako je lot zaprimljen putem knjiženja dokumenata iz proizvodnje, predlaže se datum tih dokumenata.
- **Datum isteka**: datum isteka lota koji se izračunava pri njegovu kreiranju, odnosno pri evidentiranju odgovarajućeg skladišnog ulaza, tako da se datumu početka dodaje broj dana valjanosti lota unesen na kartici *Lotovi/Serijski brojevi* u šifarniku artikla.
- **Početna količina**: početna količina zaprimljena za lot putem prvog dokumenta kojim je lot zaprimljen.
- **Broj pakiranja**: broj pakiranja zaprimljenog lota.
- **Napomene**: napomene unesene u skladišnom knjiženu prilikom ulaza lota. Polje korisnik može uređivati, a prikazuje se i u formi *Pretraživanje lotova*, kao što je prethodno navedeno.
- **Stanje lota**: stanje lota koje je moguće mijenjati, a preuzima se iz odgovarajuće tablice *Stanja lotova*.
- **Ocjena lota**: neobavezan podatak koji se odnosi na ocjenu lota. Stanje lota određuje može li se lot koristiti u prodajnim i proizvodnim dokumentima te u knjiženjima skladišnog izlaza. Međutim, ova funkcionalnost nije obavezna pa korisnik ne mora koristiti upravljanje putem tablice *Stanja lotova*.
- **Lot raspoloživ za izdavanje**: ako je oznaka aktivirana, označava da je lot dostupan za izdavanje u prodajnim i proizvodnim dokumentima ili skladišnim knjiženjima. Korisniku omogućuje da odredi može li se određeni lot izdavati ili ne, kao jednostavnija alternativa složenijem i detaljnijem upravljanju stanjima lotova.
- **Zatvoreno**: ako je oznaka aktivirana, količina tog lota ne uzima se u obzir pri izračunu zalihe i raspoloživosti. Ova se oznaka može aktivirati samo ručno.

### Ulaz

U ovoj se sekciji prikazuju osnovni podaci o dokumentima na temelju kojih je izvršen ulaz lota. U pravilu se uvijek prikazuju pojedinosti *Skladišnog knjiženja* kojom je lot zaprimljen. Ako je skladišno knjiženje kreirano na temelju ulaza dokumenta (otpremnice, povrata itd.), prikazuje se i redak s pojedinostima tog dokumenta.

*Dvostrukim klikom na redak dokumenta moguće je, ovisno o pravima korisnika, otvoriti povezani dokument samo za pregled.*

- **Količina**: prikazuje količinu lota koja je obuhvaćena dokumentom.
- **Mjerna jedinica**: mjerna jedinica korištena u dokumentu.
- **Broj pakiranja**: broj pakiranja.
- **Datum unosa**: datum unosa.
- **Stanje lota**: stanje lota.
- **Prisilno zatvoreno**: oznaka koja označava prisilno zatvaranje lota.
- **Referentni dokument**: tip dokumenta kojim je generiran ulaz.
- **Broj**: broj dokumenta.
- **Datum unosa**: datum dokumenta.
- **Skladište**: šifra i opis skladišta u koje je lot zaprimljen.
- **Lokacija**: šifra i opis lokacije.
- **Predložak**: šifra i opis predloška korištenog za kreiranje ulaznog skladišnog kretanja.
- **Kupac/Dobavljač**: konto, podkonto i opis kupca ili dobavljača.
- **Projekt**: prodajni projekt povezan s lotom; podatak je moguće uređivati.

### Ostali ulazni dokumenti

U ovoj se sekciji prikazuju osnovni podaci o ostalim dokumentima u kojima je lot eventualno korišten, povezano s dokumentom odabranim u gornjoj mreži.  
Retci se prikazuju kada je kretanje lota naslijeđeno iz drugog dokumenta, odnosno kada se više dokumenata odnosi na iste retke kretanja lota.  
Primjerice, kretanja lota iz primki mogu se naslijediti u ulaznim računima.  
U prvoj se mreži prikazuju glavni (izvorni) retci kretanja lota koji potječu iz dokumenata, dok se u drugoj mreži prikazuju retci kretanja lota iz dokumenata koji proizlaze iz retka odabranog u gornjoj mreži, odnosno naslijeđeni retci.

### Izlaz

U ovoj se sekciji kronološkim redoslijedom prikazuju osnovni podaci o svim dokumentima u kojima je lot korišten:

- **Količina**: količina lota obuhvaćena dokumentom.
- **Mjerna jedinica**: mjerna jedinica korištena u dokumentu.
- **Dokument**: prikazuje tip dokumenta u kojem je lot prvi put korišten. To može biti proizvodni nalog, narudžba kupca, izlazna otpremnica, izlazni račun, lista za izdavanje, otpremnica za vanjsku obradu ili povrat iz vanjske obrade.
- **Broj**: broj dokumenta.
- **Datum**: datum dokumenta.

*Dvostrukim klikom na redak dokumenta moguće je, ovisno o pravima korisnika, otvoriti povezani dokument samo za pregled.*

- **Skladište**: šifra i opis skladišta.
- **Lokacija**: šifra i opis lokacije.
- **Predložak**: šifra i opis predloška.
- **Kupac/Dobavljač**: konto, podkonto i opis kupca ili dobavljača.
- **Projekt**: prodajni projekt povezan s lotom koji korisnik može uređivati. U pravilu je riječ o prodajnom projektu povezanom s retkom artikla kojim je izvršen ulaz samog lota.

### Ostali izlazni dokumenti

U ovoj se sekciji prikazuju osnovni podaci o ostalim dokumentima u kojima je lot eventualno korišten, povezano s dokumentom odabranim u gornjoj mreži.  
Retci se prikazuju kada je kretanje lota naslijeđeno iz drugog dokumenta, odnosno kada se više dokumenata odnosi na iste retke kretanja lota.  
Primjerice, kretanja lotova materijala iz proizvodnog naloga mogu se naslijediti u materijalima prijavljenih artikala, dok se kretanja lotova iz narudžbe kupca mogu naslijediti u planu za utovar, izlaznim otpremnicama ili izlaznim računima.  
U prvoj se mreži prikazuju glavni (izvorni) retci kretanja lota koji potječu iz dokumenata, dok se u drugoj mreži prikazuju retci kretanja lota iz dokumenata koji proizlaze iz retka odabranog u gornjoj mreži, odnosno naslijeđeni retci.

**Tip dokumenta**: tip dokumenta u kojem se lot nalazi, povezano s dokumentom odabranim u gornjoj mreži. To može biti izlazna otpremnica, izlazni račun, lista za izdavanje, otpremnica za vanjsku obradu ili povrat iz vanjske obrade.

*Dvostrukim klikom na redak dokumenta moguće je, ovisno o pravima korisnika, otvoriti povezani dokument samo za pregled.*

### Pregled zaliha

Na ovoj je kartici moguće pregledati zalihu lota po pojedinim skladištima:

- **Šifra**: šifra skladišta.
- **Opis**: opis skladišta.
- **Ukupna ulazna količina**: ukupna količina tog artikla zaprimljena za taj lot.
- **Količina na zalihi**: trenutačna zaliha tog artikla za taj lot.
- **Raspoloživa količina**: raspoloživa zaliha tog artikla za taj lot.

## Sljedivost lota

:::important Čemu služi
Sljedivost lota u sustavu Fluentis modul je namijenjen učinkovitom i preciznom praćenju lotova proizvoda unutar proizvodnog i logističkog procesa. Ova funkcionalnost omogućuje korisnicima praćenje i evidentiranje kretanja svakog lota od trenutka proizvodnje ili nabave do njegove konačne upotrebe, čime pridonosi transparentnom i sigurnom upravljanju materijalima.

U sekciji namijenjenoj sljedivosti korisnici mogu generirati detaljne izvještaje za odabrane lotove, ne samo radi pregleda podataka o samom lotu već i radi analize artikala u kojima je lot upotrijebljen te sirovina koje su korištene za njegovu proizvodnju. Postupak je olakšan nizom prilagodljivih filtara koji omogućuju prilagodbu pretraživanja specifičnim potrebama poduzeća.

Dva glavna alata za sljedivost su:

- **Sljedivost upotrebe**: prikazuje artikle u kojima je odabrani lot upotrijebljen, čime omogućuje detaljno praćenje sljedivosti prema naprijed.
- **Sljedivost sastava**: prikazuje artikle kojima se upravlja po lotovima, a koji su korišteni za proizvodnju odabranog lota, čime omogućuje jasan pregled sljedivosti prema natrag.

Ovom funkcionalnošću Fluentis pruža pouzdano rješenje za poduzeća, posebno u sektorima kao što su prehrambena i farmaceutska industrija, u kojima je sljedivost ključna za sigurnost i usklađenost s važećim propisima.
:::

Ova forma omogućuje ispis izvještaja s detaljnim podacima o sljedivosti odabranog lota.  
Nakon postavljanja željenih filtara kliknite gumb **Traži** za prikaz rezultata.

### Dostupni filtri

- **Sljedivost upotrebe**: ako je aktivirano, omogućuje prikaz artikala u kojima je upotrijebljen lot promatranog artikla, odnosno omogućuje praćenje sljedivosti prema naprijed.
- **Sljedivost sastava**: ako je aktivirano, omogućuje prikaz artikala kojima se upravlja po lotovima, a koji su upotrijebljeni za proizvodnju lota promatranog artikla, odnosno omogućuje praćenje sljedivosti prema natrag.

Obje su oznake zadano aktivirane, ali ih korisnik može uključiti ili isključiti ovisno o potrebama.

Nakon odabira željenog lota dovoljno je kliknuti **Ispis** ili **Pregled ispisa** za prikaz izvještaja s rezultatima pretraživanja.

## Sažetak i dodatne informacije

Šifarnik lotova i sljedivost u sustavu Fluentis ključni su alati za upravljanje lotovima proizvoda i njihov nadzor. Omogućuju praćenje svakog koraka lota, od njegova nastanka do konačne upotrebe. Zahvaljujući namjenskim funkcionalnostima, poduzeća mogu osigurati usklađenost s propisima i učinkovito upravljanje materijalima.

Za dodatne informacije pogledajte povezane sekcije dokumentacije.