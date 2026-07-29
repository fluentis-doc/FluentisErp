---
title: Valorizacija (vrednovanje) intervencija
sidebar_position: 1
---

Ovaj postupak omogućava fakturisanje intervencija koje imaju status **Kontrolisano**. U oblasti **Filter** moguće je podesiti različite filtere kako bi se preciznije pretražile intervencije u sistemu.

Nakon podešavanja filtera dovoljno je kliknuti **Traži** na alatnoj traci kako bi se rezultati prikazali u donjoj tabeli. Za valorizaciju intervencije dovoljno je izabrati je i kliknuti **Valorizuj** na alatnoj traci.

Na kartici **Parametri** moguće je definisati podešavanja valorizacije. Moguće je odabrati unos računa za intervencije različitih godina, vrsta i/ili valuta (podsećamo da šifarnik mora imati uključenu oznaku **Grupiši po projektu** kako bi se intervencije i računi razdvajali prema projektu). Takođe je moguće odabrati da li će se zadržati načini plaćanja definisani na intervencijama ili će se vratiti oni iz šifarnika, grupisati dospeća plaćanja, uneti reference i drugo.

Napominjemo da je u šifarniku [Vrste intervencija](/docs/configurations/tables/project-management/intervention-type/) potrebno definisati odgovarajuću **Vrstu prometa** kako bi se postupak mogao uspešno izvršiti.

Uslovi da bi se intervencija prikazala su sledeći:

- u vrsti intervencije mora biti definisana **Vrsta prometa**
- status intervencije mora biti **Kontrolisano** ili **Delimično fakturisano**
- na svim redovima plana fakturisanja intervencije mora biti naveden **PDV kod**

Na kartici **Sažeci** moguće je pregledati rezultate valorizacije klikom na **Traži** na alatnoj traci. Izborom reda rezultata moguće je pregledati pripadajuću **Intervenciju** i generisani **Izlazni račun**.

Na alatnoj traci dostupna su sledeća dugmad:

![](/img/neutral/common/preview.png) **Pregled rezultata**: prikazuje pregled generisanog računa.

![](/img/neutral/common/execute-restore.png) **Vrati valorizaciju**: izvršava rollback postupka valorizacije.

![](/img/neutral/common/rollback.png) **Vrati račun**: izvršava rollback izabranog računa.