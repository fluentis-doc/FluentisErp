---
title: Obračun provizija
sidebar_position: 2
---

Ova procedura, koja pripada oblasti **Administracija**, služi za obračun provizija zastupnika/agenta na osnovu podataka evidentiranih u računovodstvenim knjiženjima, uz prethodno odgovarajuće konfigurisane računovodstvene šablone.

Da bi se provizije pravilno obračunavale, računovodstveni šablon (ili više njih) koji se koristi za knjiženje izlaznih računa mora imati aktiviranu opciju **Provizije**.

:::note Napomena
Potrebno je aktivirati i opciju **Upravljanje provizijama** u meniju **Konfiguracija > Uslužni programi > Administracija > Parametri računovodstva** za odgovarajuću poslovnu godinu.
:::

Nakon otvaranja forme i pokretanja funkcije **Traži** na traci sa alatkama, učitava se lista svih aktivnih zastupnika/agenta. Po potrebi je moguće uključiti i zastupnike kojima je istekao datum važenja ugovora o zastupanju.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image01.png)

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image02.png)

Na desnoj strani forme nalaze se kriterijumi za filtriranje podataka koji će biti uključeni u obračun provizija, kao i podaci potrebni za pravilnu izradu obračuna naknada.

:::warning Važno
Za razliku od istoimene procedure u oblasti **Prodaja**, ovde se **ne izrađuju obračuni provizija** koji se naknadno pretvaraju u naknade.

Po završetku postupka sistem **direktno generiše naknade zastupnika**, koje su odmah dostupne u oblasti **Primaoci naknada** za dalju obradu.
:::

## Filter valute

Omogućava filtriranje otvorenih stavki koje će biti uključene u obračun provizije prema izabranoj valuti.

## Filter otvorenih stavki

Ova grupa filtera omogućava određivanje:

- datuma prema kojem se utvrđuje pravo na proviziju (podrazumevano se predlaže tekući datum)
- vrste dokumenta
- datuma dokumenta.

Dostupna je i opcija kojom se otvorene stavke u stranoj valuti preračunavaju prema kursu na datum dokumenta, nezavisno od kursa korišćenog prilikom otvaranja stavke.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image03.png)

:::warning Važno
Ako zastupnik/agent koristi način obračuna provizije **Po potpunoj naplati**, a izlazni račun ima način plaćanja **Bankarska menica (Ri.Ba.)**, pravo na proviziju nastaje na datum dospeća bankarske menice, bez obzira na zatvaranje otvorene stavke prilikom izdavanja ili predaje menice na naplatu.

Na taj datum dodatno se dodaje broj dana definisan u:

**Parametri > Riznica > Parametri kreditnog rizika kupca > Broj dana nakon dospeća za menice predate na naplatu / nakon naplate**.
:::

## Podaci za izradu obračuna

Pre pokretanja obračuna potrebno je definisati:

- datum obračuna (podrazumevano tekući datum)
- opis obračuna
- mesec i godinu obračuna doprinosa ENASARCO.

Ako mesec i godina ENASARCO nisu uneti, naknade će biti izrađene bez tih podataka i biće potrebno da se oni naknadno ručno dopune u svakom generisanom dokumentu.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image04.png)

Nakon definisanja svih kriterijuma:

1. izaberite zastupnike za koje želite da izvršite obračun
2. kliknite **Izračunaj** na traci sa alatkama.

Po završetku postupka naknade zastupnika/agenta automatski se izrađuju i odmah su dostupne u oblasti **Primaoci naknada**, gde ih je moguće pregledati i nastaviti njihovu obradu.