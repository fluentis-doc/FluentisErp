---
sidebar_position: 1
title: Obračun provizija
---

:::tip[Informacija]
Počevši od verzije 805, ovaj obrazac je premešten na ovu lokaciju u okviru novog modula namenjenog upravljanju provizijama agenata – Postupci (administrativno područje).
:::

Ovaj postupak (koji pripada administrativnom području) namenjen je obradi podataka o provizijama agenata, koji se unose direktno putem računovodstvenih knjiženja, uz prethodnu odgovarajuću konfiguraciju uključenih računovodstvenih šablona.

Konkretno, računovodstveni šablon (ili šabloni) koji se koriste za knjiženje prodajnih faktura moraju imati aktiviranu oznaku **Provizije**.

**NAPOMENA**: Oznake za upravljanje provizijama potrebno je aktivirati i u odeljku **Konfiguracija > Uslužni programi > Administracija > Računovodstveni parametri**, za željenu poslovnu godinu.

Prilikom otvaranja obrasca i pokretanja komande **Pretraži** na traci menija učitava se lista aktivnih agenata. Pomoću odgovarajuće oznake moguće je učitati i agente kojima je istekao datum završetka mandata.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image01.png)

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image02.png)

Na desnoj strani obrasca nalaze se filteri za izbor podataka na osnovu kojih će se obračunati provizije, kao i elementi koje je potrebno definisati kako bi se pravilno obradile naknade na osnovu obračuna koji se kreira.

**PAŽNJA:**

Za razliku od odgovarajućeg postupka u prodajnom području, nakon završetka ovog postupka ne kreiraju se obračuni (koji bi mogli da se pretražuju, pregledaju i naknadno pretvaraju u naknade), već se direktno kreiraju naknade agenata, koje je moguće pretraživati i dodatno obrađivati u području Primaoci naknada.

**Filter valute**: omogućava izbor i filtriranje otvorenih stavki koje će se uzeti u obzir pri obračunu provizija, a koje su izražene u određenoj valuti.

**Filter otvorenih stavki**: filteri u ovoj grupi omogućavaju podešavanje referentnog datuma za dospeće provizije (podrazumevano je postavljen na trenutni datum prilikom otvaranja obrasca), kao i dodatno filtriranje prema tipu i datumu dokumenta. Dostupna je i oznaka koja aktivira konverziju otvorenih stavki u valuti primenom kursa na datum dokumenta, čime se zamenjuje eventualno drugačiji kurs primenjen prilikom otvaranja stavki.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image03.png)

**PAŽNJA**: Ako agent ima podešen način dospeća provizije **Nakon potpune uplate**, a prodajna faktura ima tip plaćanja **Bankarska potvrda (Ri.Ba.)**, provizija će u svakom slučaju dospeti na datum dospeća bankarske potvrde, nezavisno od zatvaranja otvorene stavke nakon izdavanja Ri.Ba. i njenog prezentovanja uz uslov naplate i/ili odobrenja iznosa.

Osim toga, dodaće se broj dana koji se može podesiti u odeljku **Parametri > Riznica > Parametri rizika kupca > Broj dana nakon dospeća za hartije od vrednosti prezentovane uz uslov naplate / nakon naplate**.

**Podaci za kreiranje obračuna**: Polja u ovoj grupi potrebno je popuniti pre pokretanja obračuna kako bi se uneli datum obračuna (podrazumevano je predložen trenutni datum), opis obračuna i mesec/godina obračunskog perioda ENASARCO. Ako se poslednji podatak ne unese, naknada će biti kreirana sa odgovarajućim praznim poljima, koja će biti potrebno ručno popuniti u svakoj kreiranoj naknadi.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image04.png)

Nakon podešavanja prethodno opisanih filtera i unosa podataka za kreiranje obračuna, na listi agenata izaberite osobe za koje želite da izvršite obračun i kliknite na dugme **Izračunaj** na traci menija.

Nakon toga moguće je zatvoriti ovaj obrazac jer su naknade agenata već obračunate i automatski dostupne u području Primaoci naknada.