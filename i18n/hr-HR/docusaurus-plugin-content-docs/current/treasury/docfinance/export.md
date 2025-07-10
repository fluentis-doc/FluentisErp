---
title: Izvozi
sidebar_position: 2
---

Iz ovog obrasca možete izvesti podatke za DocFinance, s tri različite opcije. 

**Izvoz šifarnika**: aktiviranje ove zastavice prisilit će sustav da kreira datoteku za usklađivanje kontnog plana i matičnih podataka. Nakon postavljanja, aktivirat će se sljedeća povezana polja, gdje možete postaviti naziv datoteke i zajednički put stvaranja (oba će se podatka pohraniti kako bi se ponovno predložila za sljedeću izradu). Prvo polje 'Datum zadnjeg izvoza' omogućuje definiranje referentnog datuma za izvoz samo izmijenjenih/dodanih podataka u kontnom planu: moguće je izbrisati ovaj datum kako bi se stvorila potpuna datoteka sa svim postavkama kontnog plana /osobni podaci (ovo ima značajan utjecaj na vrijeme potrebno za usklađivanje dva sustava)

**Automatsko stvaranje novčanog toka**: s ovom zastavom program će stvoriti novi novčani tok u istoimenom modulu, prije nego što nastavi s izvozom podataka sljedeće točke. Izrada će se odvijati sa zadanim parametrima postupka 'Automatsko stvaranje novčanog toka': molimo pogledajte posebnu dokumentaciju za dodatne pojedinosti.

**Izvoz novčanog toka**: s ovom zastavom sustav će stvoriti datoteku financijskog tijeka, poput računovodstvenih stavki i predviđanja. Kada je zastavica postavljena, aktiviraju se sljedeća zastavica "Može se odstupiti od osobnih podataka/vrsta plaćanja" i aktiviraju se polja s imenima i zajedničkom putanjom stvaranja datoteke (oba pohranjena). Detaljno, ovisno o tome je li zastavica 'Odstupanje od zapisa/vrsta plaćanja' postavljena ili ne, logika za dodjelu odstupanja se mijenja: ako nije postavljena, odstupanje za dobavljače će se detektirati prema vrsti plaćanja i za kupci iz registra; ako je postavljeno, odstupanje će potjecati iz registra kupaca/dobavljača, a ako nije postavljeno ovdje, izračunat će se s fiksnim kodovima ('01' za ribas, ili '01' – '02' – '03' – ' 04' jer ovisno o tome daje li razlika između datuma isteka i trenutnog datuma istekli rok, razliku manju od 30 dana, od 30 do 90 ili više od 90). 

Korisnik koji će kreirati datoteke mora biti definiran na dnu forme te mora imati pristup dijeljenim mapama postavljenim za stvaranje datoteke. 



| Funkcija | Značenje |
| --- | --- |
| Spremi | Ovim gumbom moguće je spremiti postavke koje će se prema zadanim postavkama predložiti u obrascu. |
| Izvoz | Stvara datoteke kako je postavljeno u obrascu.  |






