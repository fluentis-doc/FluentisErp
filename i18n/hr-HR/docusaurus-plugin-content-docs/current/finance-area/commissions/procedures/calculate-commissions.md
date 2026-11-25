---
sidebar_position: 1
title: Obračun provizija
---

:::tip[Informacija]
Počevši od verzije 805, ovaj je obrazac premješten na ovu lokaciju u novom modulu namijenjenom upravljanju provizijama agenata – Postupci (administrativno područje).
:::

Ovaj postupak (koji pripada administrativnom području) namijenjen je obradi podataka o provizijama agenata, koji se unose izravno putem računovodstvenih knjiženja, uz prethodnu odgovarajuću konfiguraciju uključenih računovodstvenih predložaka.

Konkretno, računovodstveni predložak (ili predlošci) koji se upotrebljavaju za knjiženje prodajnih računa moraju imati aktiviranu oznaku **Provizije**.

**NAPOMENA**: Oznake za upravljanje provizijama potrebno je aktivirati i u odjeljku **Konfiguracija > Uslužni programi > Administracija > Računovodstveni parametri**, za željenu poslovnu godinu.

Prilikom otvaranja obrasca i pokretanja naredbe **Traži** na vrpci izbornika učitava se popis aktivnih agenata. Pomoću odgovarajuće oznake moguće je učitati i agente kojima je istekao datum završetka mandata.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image01.png)

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image02.png)

Na desnoj strani obrasca nalaze se filtri za odabir podataka na temelju kojih će se obračunati provizije, kao i elementi koje je potrebno definirati kako bi se pravilno obradile naknade na temelju obračuna koji se izrađuje.

**PAŽNJA:**

Za razliku od odgovarajućeg postupka u prodajnom području, nakon završetka ovog postupka ne izrađuju se obračuni (koji bi se mogli pretraživati, pregledavati i naknadno pretvarati u naknade), već se izravno izrađuju naknade agenata, koje je moguće pretraživati i dodatno obrađivati u području Primatelji naknada.

**Filtar valute**: omogućuje odabir i filtriranje otvorenih stavki koje će se uzeti u obzir pri obračunu provizija, a koje su izražene u određenoj valuti.

**Filtar otvorenih stavki**: filtri u ovoj grupi omogućuju postavljanje referentnog datuma za dospijeće provizije (prema zadanim postavkama postavljenog na trenutačni datum prilikom otvaranja obrasca) te dodatno filtriranje prema vrsti i datumu dokumenta. Dostupna je i oznaka koja aktivira konverziju otvorenih stavki u valuti primjenom tečaja na datum dokumenta, čime se zamjenjuje eventualno drukčiji tečaj primijenjen prilikom otvaranja stavki.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image03.png)

**PAŽNJA**: Ako agent ima postavljen način dospijeća provizije **Nakon potpune uplate**, a prodajni račun ima vrstu plaćanja **Bankovna potvrda (Ri.Ba.)**, provizija će u svakom slučaju dospjeti na datum dospijeća bankovne potvrde, neovisno o zatvaranju otvorene stavke nakon izdavanja Ri.Ba. i njezine prezentacije uz uvjet naplate i/ili odobrenja iznosa.

Osim toga, dodat će se broj dana koji se može postaviti u odjeljku **Parametri > Riznica > Parametri rizika kupca > Broj dana nakon dospijeća za vrijednosne papire prezentirane uz uvjet naplate / nakon naplate**.

**Podaci za izradu obračuna**: Polja u ovoj grupi potrebno je popuniti prije pokretanja izračuna kako bi se unijeli datum obračuna (prema zadanim postavkama predložen je trenutačni datum), opis obračuna te mjesec/godina obračunskog razdoblja ENASARCO. Ako se posljednji podatak ne unese, naknada će biti izrađena s odgovarajućim praznim poljima, koja će biti potrebno ručno popuniti u svakoj izrađenoj naknadi.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image04.png)

Nakon postavljanja prethodno opisanih filtara i unosa podataka za izradu obračuna, na popisu agenata odaberite osobe za koje želite izvršiti obračun i kliknite gumb **Izračunaj** na vrpci izbornika.

Nakon toga moguće je zatvoriti ovaj obrazac jer su naknade agenata već obračunate i automatski dostupne u području Primatelji naknada.