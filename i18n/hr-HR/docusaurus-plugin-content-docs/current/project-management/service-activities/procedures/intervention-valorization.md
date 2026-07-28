---
title: Valorizacija (vrednovanje) intervencija
sidebar_position: 1
---

Ovaj postupak omogućuje fakturiranje intervencija koje imaju status **Kontrolirano**. U području **Filtar** moguće je postaviti različite filtre kako bi se preciznije pretražile intervencije u sustavu.

Nakon postavljanja filtara dovoljno je kliknuti **Traži** na alatnoj traci kako bi se rezultati prikazali u donjoj tablici. Za valorizaciju intervencije dovoljno ju je odabrati i kliknuti **Valoriziraj** na alatnoj traci.

Na kartici **Parametri** moguće je definirati postavke valorizacije. Moguće je odabrati unos računa za intervencije različitih godina, vrsta i/ili valuta (podsjećamo da šifarnik mora imati uključenu oznaku **Grupiraj po projektu** kako bi se intervencije i računi razdvajali prema projektu). Također je moguće odabrati hoće li se zadržati načini plaćanja definirani na intervencijama ili će se vratiti oni iz šifarnika, grupirati dospijeća plaćanja, unijeti reference i drugo.

Napominjemo da je u šifarniku [Vrste intervencija](/docs/configurations/tables/project-management/intervention-type/) potrebno definirati odgovarajuću **Vrstu prometa** kako bi se postupak mogao uspješno izvršiti.

Uvjeti da bi se intervencija prikazala su sljedeći:

- u vrsti intervencije mora biti definirana **Vrsta prometa**
- status intervencije mora biti **Kontrolirano** ili **Djelomično fakturirano**
- na svim recima plana fakturiranja intervencije mora biti naveden **PDV kod**

Na kartici **Sažeci** moguće je pregledati rezultate valorizacije klikom na **Traži** na alatnoj traci. Odabirom retka rezultata moguće je pregledati pripadajuću **Intervenciju** i generirani **Izlazni račun**.

Na alatnoj traci dostupni su sljedeći gumbi:

![](/img/neutral/common/preview.png) **Pregled rezultata**: prikazuje pregled generiranog računa.

![](/img/neutral/common/execute-restore.png) **Povrati valorizaciju**: izvršava rollback postupka valorizacije.

![](/img/neutral/common/rollback.png) **Povrati račun**: izvršava rollback odabranog računa.