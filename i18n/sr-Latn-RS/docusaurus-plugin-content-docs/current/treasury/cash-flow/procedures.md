---
title: Automatsko generisanje novčanog toka
sidebar_position: 4
---

Simulacija novčanog toka se uobičajeno kreira putem ovog obrasca, koji omogućava definisanje parametara za svaki tip finansijskog toka.

Svaka nova obrada čuva rezultat izračuna pod jedinstvenim **Brojem**, koji sistem automatski dodeljuje. Takođe je moguće uneti detaljan **Opis** simulacije.

## Specifična polja

**Tip / Opis toka**  
Preuzima se iz tabele *Tipovi tokova*.
**Od datuma / Do datuma**  
Period koji se koristi za filtriranje podataka prema pravilima svakog pojedinačnog tipa toka.
**Omogući**  
Oznaka koja određuje da li će odgovarajući tip toka biti uključen u obračun.
**Privremena knjiženja**  
Određuje da li će se u obračun uključiti podaci iz računovodstvenih knjiženja sa statusom *Privremeno*.
**Nenaplativo**  
Određuje da li će se u obračun uključiti stavke označene kao nenaplative.
**Koristi preostalu količinu**  
Omogućava obračun narudžbina na osnovu preostale količine koja tek treba da bude isporučena.
**Koristi trenutnu raspoloživost**  
Uključuje vrednosne papire u portfelju koji nisu nenaplaćeni i čiji je rok dospeća nakon današnjeg datuma, prikazujući ih kao raspoloživa sredstva na današnji datum, iako će knjiženje biti izvršeno tek nakon naplate.
**Koristi dospeće**  
Omogućava uključivanje i faktura sa načinom plaćanja *po prijemu*.

:::danger PAŽNJA

Stavke će biti prikazane u novčanom toku samo ako imaju aktivnu oznaku **Knjiženo**, odnosno ako je izvršeno računovodstveno knjiženje.

Pošto je moguće uključiti vrednosne papire u prezentacionu listu i pre njihovog knjiženja, potrebno je obratiti pažnju na ovu situaciju.

Takođe, sistem automatski isključuje vrednosne papire čiji je datum dospeća stariji od datuma obrade novčanog toka, bez obzira na postavljene filtere.
:::

Ako se koristi tip toka **Avansi**, u obračun se uključuju iznosi iz lista avansa faktura koji još nisu knjiženi na bankovni račun, sa datumom jednakim datumu dospeća avansa.

:::danger PAŽNJA

Ako je aktiviran tip toka **Avansi**, ne smeju se istovremeno uključivati pomoćni bankovni računi korišćeni za početno finansijsko stanje kroz podešavanja *Tipova finansijskih računa*, jer bi se pozitivni tokovi evidentirali dvostruko i rezultati novčanog toka bili bi netačni.
:::

## Logika pojedinačnih tipova tokova

### Stanje glavne knjige

Period datuma koristi se za obračun računovodstvenog salda prema datumu knjiženja.

### Dospela potraživanja i obaveze

Period datuma filtrira podatke prema datumima dospeća.

Dostupne su dodatne opcije za:
- uključivanje privremenih knjiženja,
- uključivanje nenaplaćenih stavki.

### Narudžbine kupaca i dobavljača

Period datuma filtrira prema datumu narudžbine.

Uzimaju se u obzir samo tipovi dokumenata označeni za novčani tok koji su:
- odštampani,
- potvrđeni.

Preporučuje se korišćenje opcije **Koristi preostalu količinu** kako bi se simulirao samo neisporučeni deo narudžbine.

Sistem zatim izračunava očekivana dospeća na osnovu:
- načina plaćanja,
- tipa plaćanja definisanog u zaglavlju dokumenta.

Kao početni datum koristi se:
- datum isporuke sa stavke,
- datum isporuke iz zaglavlja narudžbine,
- ili današnji datum ako je planirani datum u prošlosti.

### Otpremnice i prijemnice

Period datuma filtrira prema datumu dokumenta.

Uzimaju se u obzir samo:
- dokumenti označeni za novčani tok,
- odštampani ili kontrolisani dokumenti,
- dokumenti koji još nisu fakturisani.

Dospeća se simuliraju na osnovu uslova plaćanja definisanih na dokumentu.

### Prodajne i nabavne fakture

Period datuma filtrira prema datumu dospeća fakture.

Uzimaju se u obzir dokumenti koji:
- nisu predračuni,
- imaju status odštampano ili kontrolisano,
- ili još nisu knjiženi.

### Narudžbine proizvodnje / Radni nalozi

Period datuma filtrira prema datumu naloga.

Uzimaju se u obzir samo:
- odštampani nalozi,
- nalozi koji nisu izvršeni.

Sistem generiše očekivana dospeća na osnovu:
- preostalog nenaplaćenog iznosa,
- procenjenih troškova proizvodnje.

### Povrati po radnom nalogu

Period datuma filtrira prema datumu povrata.

Prikazuju se samo:
- odštampani povrati,
- povrati koji nisu fakturisani.

Povrati moraju biti generisani iz radnog naloga. Ručno uneseni povrati neće biti uključeni u novčani tok.

### Vanbilansne stavke

Period datuma filtrira prema datumu dospeća vanbilansnih stavki.

## Generisanje novčanog toka

Kod tipa toka **Stanje glavne knjige**, završni datum se prilikom otvaranja obrasca automatski postavlja na današnji datum.

Nakon unosa opisa simulacije moguće je pokrenuti obračun.

:::note Napomena

Obrada može trajati duže vreme, naročito kada su uključene narudžbine, jer sistem mora simulirati očekivane tokove za svaku pojedinačnu stavku.
:::

Po završetku obračuna, novčani tok je moguće otvoriti i pregledati pomoću odgovarajuće funkcije za upravljanje.

## Aktivni portfelj

Potrebno je obratiti pažnju na vrednosne papire koji su uključeni u prezentacione liste, ali još nisu knjiženi.
Takva situacija može nastati kada su vrednosni papiri kreirani iz dospelih potraživanja i uključeni u prezentacionu listu bez prethodnog knjiženja. U tom slučaju neće biti uključeni u novčani tok.
Dodatno, bez obzira na postavljene filtere, datum dospeća vrednosnog papira mora biti jednak ili veći od datuma obrade novčanog toka.

| Funkcija | Opis |
|-----------|------|
| **Generiši** | Pokreće postupak generisanja novčanog toka prema zadatim parametrima. |
| **Izmeni** | Otvara prethodno generisani novčani tok u režimu za izmenu. |
