---
title: "Šifarnik lotova i sledljivost"
sidebar_position: 3
sidebar_label: "Šifarnik lotova i sledljivost"
description: "Vodič za upotrebu šifarnika lotova i modula sledljivosti u sistemu Fluentis za efikasno upravljanje proizvodima."
schema: "TechArticle"
tags: ["Šifarnik lotova", "sledljivost", "Fluentis", "upravljanje proizvodima"]
keywords: ["Šifarnik lotova", "sledljivost proizvoda", "Fluentis"]
---

# Šifarnik lotova i sledljivost

:::important Čemu služi
Šifarnik lotova u sistemu Fluentis neophodan je alat za precizno i detaljno upravljanje lotovima unutar sistema sledljivosti proizvoda. Ova funkcionalnost omogućava korisnicima pretraživanje i pregled pojedinosti svakog lota jednostavnim dvostrukim klikom, čime se olakšava praćenje i upravljanje zalihama.

Na kartici pojedinog lota korisnici mogu menjati različite važne podatke, kao što su dobavljač, šifra lota dobavljača, posebne napomene i stanje lota. Stanje lota, koje se može jednostavno ažurirati, ima ključnu ulogu u određivanju mogućnosti upotrebe lota u prodajnim dokumentima i skladišnim knjiženjima. Sistem takođe omogućava upravljanje različitim stanjima lota koja direktno utiču na njegovu operativnu raspoloživost.

Posebna karakteristika šifarnika lotova jeste sekcija koja omogućava istorijski pregled dokumenata ulaza i izlaza u kojima je lot učestvovao, čime se obezbeđuje precizna sledljivost tokom vremena. Takođe je moguće pregledati trenutnu zalihu po pojedinim skladištima. Zahvaljujući ovim funkcionalnostima, šifarnik lotova u sistemu Fluentis pojednostavljuje operativno upravljanje i doprinosi obezbeđivanju usklađenosti sa propisima u sektorima u kojima je sledljivost ključna, kao što su prehrambena i farmaceutska industrija.
:::

## Šifarnik lotova

Forma prikazuje pojedinosti lota i sastoji se od 4 zasebne sekcije:

### Zaglavlje lota

U ovoj se sekciji prikazuju glavni podaci o lotu, pri čemu je neke od njih moguće menjati:

- **Artikal**: klasa, šifra i opis artikla na koji se lot odnosi. Reč je o artiklu sa aktiviranom oznakom *Upravljanje lotovima* u *šifarniku artikla* > kartica *Lotovi/SN*. U suprotnom ne bi bilo moguće izvršiti ulaz lota za taj artikal.
- **Varijanta**: šifra i opis varijante artikla na koji se lot odnosi, ako postoji.
- **Lot**: u ovom se polju prikazuje šifra lota. Polje korisnik može uređivati, iako se tokom postupaka ulaza može automatski generisati na osnovu pravila definisanih u *Tipu šifre lota* povezanom sa artiklom. Najpre se unose šifra i opis *tipa šifre lota*, red se čuva, a zatim se određuju parametri koji će se koristiti za sastavljanje upravo kreiranog *tipa šifre lota*. Za svaki korišćeni parametar moguće je odrediti broj znakova od kojih se sastoji i, prema potrebi, znak za popunjavanje. Na primer, ako se za parametar *Redni broj* kao znak za popunjavanje postavi `0`, a dužina na `5`, kreiraće se lotovi sa brojevima 00000, zatim 00001, 00002 i tako dalje. *Tip šifre lota* zatim je potrebno povezati sa šifarnikom artikla u odgovarajućem polju na kartici *Lotovi/Serijski brojevi*. Na taj način će se u postupcima koji automatski kreiraju šifru lota za predmetni artikal lot generisati prema pravilima definisanim u *tipu šifre lota* povezanom sa artiklom. Polje je alfanumeričko i može sadržati najviše 50 znakova. Ne predstavlja identifikator lota jer je isti lot moguće primiti više puta u različitim trenucima. U tom će se slučaju u mreži forme *Pretraživanje lotova* prikazati više redova sa istom *Šifrom lota*.
- **Dobavljač**: konto/podkonto/opis dobavljača.
- **Proizvođač**: skraćeni naziv/naziv preduzeća proizvođača.
- **Šifra dobavljača**: šifra *Lota dobavljača*, odnosno najčešće naziv koji dobavljač dodeljuje lotu. Polje korisnik može uređivati i ne može se automatski generisati tokom postupaka ulaza. Može sadržati najviše 50 znakova i može biti jednako i za različite lotove različitih artikala.
- **Tip izveštaja etikete**: tip etikete koja će se štampati za ovaj lot.
- **Datum početka**: datum ulaza lota koji korisnik može uređivati. Ako je lot primljen skladišnim knjiženjem, predlaže se datum kreiranja knjiženja. Ako je lot primljen putem ulaza prijemnice ili knjiženja povrata iz spoljne obrade, postavlja se datum prijemnice odnosno dokumenta spoljne obrade, osim ako ga korisnik nije ručno izmenio u dokumentu. Ako je lot primljen putem knjiženja dokumenata iz proizvodnje, predlaže se datum tih dokumenata.
- **Datum isteka**: datum isteka lota koji se izračunava prilikom njegovog kreiranja, odnosno prilikom evidentiranja odgovarajućeg skladišnog ulaza, tako što se datumu početka dodaje broj dana važenja lota unet na kartici *Lotovi/Serijski brojevi* u šifarniku artikla.
- **Početna količina**: početna količina primljena za lot putem prvog dokumenta kojim je lot primljen.
- **Broj pakovanja**: broj pakovanja primljenog lota.
- **Napomene**: napomene unete u skladišnom knjiženju prilikom ulaza lota. Polje korisnik može uređivati, a prikazuje se i u formi *Pretraživanje lotova*, kao što je prethodno navedeno.
- **Stanje lota**: stanje lota koje je moguće menjati, a preuzima se iz odgovarajuće tabele *Stanja lotova*.
- **Ocena lota**: neobavezan podatak koji se odnosi na ocenu lota. Stanje lota određuje da li se lot može koristiti u prodajnim i proizvodnim dokumentima i u knjiženjima skladišnog izlaza. Međutim, ova funkcionalnost nije obavezna pa korisnik ne mora koristiti upravljanje putem tabele *Stanja lotova*.
- **Lot raspoloživ za izdavanje**: ako je oznaka aktivirana, označava da je lot dostupan za izdavanje u prodajnim i proizvodnim dokumentima ili skladišnim knjiženjima. Korisniku omogućava da odredi da li se određeni lot može izdavati ili ne, kao jednostavnija alternativa složenijem i detaljnijem upravljanju stanjima lotova.
- **Zatvoreno**: ako je oznaka aktivirana, količina tog lota ne uzima se u obzir prilikom izračunavanja zalihe i raspoloživosti. Ova se oznaka može aktivirati samo ručno.

### Ulaz

U ovoj se sekciji prikazuju osnovni podaci o dokumentima na osnovu kojih je izvršen ulaz lota. Po pravilu se uvek prikazuju pojedinosti *Skladišnog knjiženja* kojim je lot primljen. Ako je skladišno knjiženje kreirano na osnovu ulaza dokumenta (otpremnice, povrata itd.), prikazuje se i red sa pojedinostima tog dokumenta.

*Dvostrukim klikom na red dokumenta moguće je, u zavisnosti od prava korisnika, otvoriti povezani dokument samo za pregled.*

- **Količina**: prikazuje količinu lota koja je obuhvaćena dokumentom.
- **Merna jedinica**: merna jedinica korišćena u dokumentu.
- **Broj pakovanja**: broj pakovanja.
- **Datum unosa**: datum unosa.
- **Stanje lota**: stanje lota.
- **Prisilno zatvoreno**: oznaka koja označava prisilno zatvaranje lota.
- **Referentni dokument**: tip dokumenta kojim je generisan ulaz.
- **Broj**: broj dokumenta.
- **Datum unosa**: datum dokumenta.
- **Skladište**: šifra i opis skladišta u koje je lot primljen.
- **Lokacija**: šifra i opis lokacije.
- **Predložak**: šifra i opis predloška korišćenog za kreiranje ulaznog skladišnog kretanja.
- **Kupac/Dobavljač**: konto, podkonto i opis kupca ili dobavljača.
- **Projekat**: prodajni projekat povezan sa lotom; podatak je moguće uređivati.

### Ostali ulazni dokumenti

U ovoj se sekciji prikazuju osnovni podaci o ostalim dokumentima u kojima je lot eventualno korišćen, povezano sa dokumentom odabranim u gornjoj mreži.  
Redovi se prikazuju kada je kretanje lota nasleđeno iz drugog dokumenta, odnosno kada se više dokumenata odnosi na iste redove kretanja lota.  
Na primer, kretanja lota iz prijemnica mogu se naslediti u ulaznim računima.  
U prvoj se mreži prikazuju glavni (izvorni) redovi kretanja lota koji potiču iz dokumenata, dok se u drugoj mreži prikazuju redovi kretanja lota iz dokumenata koji proizlaze iz reda odabranog u gornjoj mreži, odnosno nasleđeni redovi.

### Izlaz

U ovoj se sekciji hronološkim redosledom prikazuju osnovni podaci o svim dokumentima u kojima je lot korišćen:

- **Količina**: količina lota obuhvaćena dokumentom.
- **Merna jedinica**: merna jedinica korišćena u dokumentu.
- **Dokument**: prikazuje tip dokumenta u kojem je lot prvi put korišćen. To može biti proizvodni nalog, narudžbina kupca, izlazna otpremnica, izlazni račun, lista za izdavanje, otpremnica za spoljnu obradu ili povrat iz spoljne obrade.
- **Broj**: broj dokumenta.
- **Datum**: datum dokumenta.

*Dvostrukim klikom na red dokumenta moguće je, u zavisnosti od prava korisnika, otvoriti povezani dokument samo za pregled.*

- **Skladište**: šifra i opis skladišta.
- **Lokacija**: šifra i opis lokacije.
- **Predložak**: šifra i opis predloška.
- **Kupac/Dobavljač**: konto, podkonto i opis kupca ili dobavljača.
- **Projekat**: prodajni projekat povezan sa lotom koji korisnik može uređivati. Po pravilu je reč o prodajnom projektu povezanom sa redom artikla kojim je izvršen ulaz samog lota.

### Ostali izlazni dokumenti

U ovoj se sekciji prikazuju osnovni podaci o ostalim dokumentima u kojima je lot eventualno korišćen, povezano sa dokumentom odabranim u gornjoj mreži.  
Redovi se prikazuju kada je kretanje lota nasleđeno iz drugog dokumenta, odnosno kada se više dokumenata odnosi na iste redove kretanja lota.  
Na primer, kretanja lotova materijala iz proizvodnog naloga mogu se naslediti u materijalima prijavljenih artikala, dok se kretanja lotova iz narudžbine kupca mogu naslediti u planu utovara, izlaznim otpremnicama ili izlaznim računima.  
U prvoj se mreži prikazuju glavni (izvorni) redovi kretanja lota koji potiču iz dokumenata, dok se u drugoj mreži prikazuju redovi kretanja lota iz dokumenata koji proizlaze iz reda odabranog u gornjoj mreži, odnosno nasleđeni redovi.

**Tip dokumenta**: tip dokumenta u kojem se lot nalazi, povezano sa dokumentom odabranim u gornjoj mreži. To može biti izlazna otpremnica, izlazni račun, lista za izdavanje, otpremnica za spoljnu obradu ili povrat iz spoljne obrade.

*Dvostrukim klikom na red dokumenta moguće je, u zavisnosti od prava korisnika, otvoriti povezani dokument samo za pregled.*

### Pregled zaliha

Na ovoj je kartici moguće pregledati zalihu lota po pojedinačnim skladištima:

- **Šifra**: šifra skladišta.
- **Opis**: opis skladišta.
- **Ukupna ulazna količina**: ukupna količina tog artikla primljena za taj lot.
- **Količina na zalihi**: trenutna zaliha tog artikla za taj lot.
- **Raspoloživa količina**: raspoloživa zaliha tog artikla za taj lot.

## Sledljivost lota

:::important Čemu služi
Sledljivost lota u sistemu Fluentis modul je namenjen efikasnom i preciznom praćenju lotova proizvoda unutar proizvodnog i logističkog procesa. Ova funkcionalnost omogućava korisnicima praćenje i evidentiranje kretanja svakog lota od trenutka proizvodnje ili nabavke do njegove konačne upotrebe, čime doprinosi transparentnom i sigurnom upravljanju materijalima.

U sekciji namenjenoj sledljivosti korisnici mogu generisati detaljne izveštaje za odabrane lotove, ne samo radi pregleda podataka o samom lotu već i radi analize artikala u kojima je lot upotrebljen i sirovina koje su korišćene za njegovu proizvodnju. Postupak je olakšan nizom prilagodljivih filtera koji omogućavaju prilagođavanje pretrage specifičnim potrebama preduzeća.

Dva glavna alata za sledljivost su:

- **Sledljivost upotrebe**: prikazuje artikle u kojima je odabrani lot upotrebljen, čime omogućava detaljno praćenje sledljivosti prema napred.
- **Sledljivost sastava**: prikazuje artikle kojima se upravlja po lotovima, a koji su korišćeni za proizvodnju odabranog lota, čime omogućava jasan pregled sledljivosti prema nazad.

Ovom funkcionalnošću Fluentis pruža pouzdano rešenje za preduzeća, posebno u sektorima kao što su prehrambena i farmaceutska industrija, u kojima je sledljivost ključna za sigurnost i usklađenost sa važećim propisima.
:::

Ova forma omogućava štampanje izveštaja sa detaljnim podacima o sledljivosti odabranog lota.  
Nakon postavljanja željenih filtera kliknite na dugme **Traži** za prikaz rezultata.

### Dostupni filteri

- **Sledljivost upotrebe**: ako je aktivirano, omogućava prikaz artikala u kojima je upotrebljen lot posmatranog artikla, odnosno omogućava praćenje sledljivosti prema napred.
- **Sledljivost sastava**: ako je aktivirano, omogućava prikaz artikala kojima se upravlja po lotovima, a koji su upotrebljeni za proizvodnju lota posmatranog artikla, odnosno omogućava praćenje sledljivosti prema nazad.

Obe oznake su podrazumevano aktivirane, ali ih korisnik može uključiti ili isključiti u zavisnosti od potreba.

Nakon odabira željenog lota dovoljno je kliknuti na **Štampanje** ili **Pregled štampe** za prikaz izveštaja sa rezultatima pretrage.

## Sažetak i dodatne informacije

Šifarnik lotova i sledljivost u sistemu Fluentis ključni su alati za upravljanje lotovima proizvoda i njihov nadzor. Omogućavaju praćenje svakog koraka lota, od njegovog nastanka do konačne upotrebe. Zahvaljujući namenskim funkcionalnostima, preduzeća mogu osigurati usklađenost sa propisima i efikasno upravljanje materijalima.

Za dodatne informacije pogledajte povezane sekcije dokumentacije.