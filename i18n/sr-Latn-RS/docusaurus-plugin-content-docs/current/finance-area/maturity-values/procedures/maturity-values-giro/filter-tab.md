---
title: Kartica filtera
sidebar_position: 1
---

| Funkcija | Značenje |
| --- | --- |
| Traži | Dugme za pretragu otvorenih stavki koje se odnose na podkonto sa kog će se izvršiti prenos na drugi podkonto. |
| Knjiži | Dugme za knjiženje prenosa između odabranih konta. |

### OPŠTA UPOTREBA

Obrazac se sastoji od gornjeg dela sa filterima, u kojem je obavezno navesti podkonto na kome se pretražuju otvorene stavke za prenos, pregleda za izbor stavki i donjeg dela sa podešavanjima obrasca knjiženja. Tu se takođe definišu datumi knjiženja i obračuna, kao i podkonto na kome će se stavke ponovo otvoriti. Konkretno, obrazac knjiženja mora imati aktivirane opcije za otvaranje i zatvaranje otvorenih stavki. Rezultat postupka biće zatvaranje odabranih otvorenih stavki i njihovo ponovno otvaranje na odredišnom podkontu, uz zadržavanje svih originalnih referenci.

### UPOTREBA U KONTEKSTU SUSPENDOVANOG PDV-a

Ovaj postupak može se koristiti i za upravljanje suspendovanim PDV-om (tzv. gotovinski PDV), kod kojeg se, po isteku jedne godine od izdavanja fakture, PDV mora obračunati odnosno priznati bez obzira na to da li je izvršena naplata ili plaćanje.

Aktiviranjem opcije **Prikaži dospeća suspendovanog PDV-a koja nisu zatvorena na datum** i popunjavanjem polja **Datum suspendovanog PDV-a**, u glavnom pregledu biće prikazane samo otvorene stavke koje se odnose na transakcije sa suspendovanim PDV-om (prepoznate preko posebno konfigurisanih obrazaca knjiženja) na zadati datum.

Nakon toga, izborom željenih stavki i odgovarajućeg obrasca knjiženja, pritiskom na dugme **Knjiži** kreira se knjiženje prenosa sa konta suspendovanog PDV-a na konto izlaznog ili ulaznog PDV-a, pri čemu otvorene stavke ostaju otvorene.

Računovodstveno knjiženje naplate ili plaćanja automatski će prepoznati da je prenos već izvršen i neće ponovo generisati automatsko knjiženje prenosa PDV-a.