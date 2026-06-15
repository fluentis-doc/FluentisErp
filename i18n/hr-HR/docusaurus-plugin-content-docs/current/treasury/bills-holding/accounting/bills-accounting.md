---
title: Knjiženje vrijednosnih papira
sidebar_position: 1
---

Obrazac se nalazi na putanji **Riznica > Vrijednosni papiri > Knjiženja > Knjiženje vrijednosnih papira**.

Ova funkcija služi za knjiženje vrijednosnih papira. Ovisno o postavkama odabranog konto-knjiženja, postupak zatvara otvorene stavke kupaca povezane s odabranim vrijednosnim papirima.

:::tip Napomena
U većini slučajeva ovu je proceduru moguće izvršiti izravno tijekom **automatskog preuzimanja vrijednosnih papira iz otvorenih stavki**, aktiviranjem odgovarajuće opcije za istovremeno knjiženje.

Posebno otvaranje ovog obrasca najčešće je potrebno kada je potrebno **poništiti prethodno knjiženje vrijednosnih papira**.
:::

## Kako knjižiti vrijednosni papir

1. U gornjem dijelu obrasca postavite filtre za pronalaženje vrijednosnih papira za knjiženje.
2. U središnjoj tablici označite vrijednosne papire koje želite knjižiti.
3. Unesite parametre knjiženja:
   - **Konto-knjiženje**
   - **Datum knjiženja**
   - **Datum obračunskog razdoblja**

:::note Napomena
Ove se vrijednosti mogu unaprijed definirati u parametrima modula **Portfelj vrijednosnih papira**.

- Opcija **Grupiranje po vrsti vrijednosnog papira** omogućuje generiranje jednog knjižnog naloga koji sadrži onoliko redaka koliko je vrijednosnih papira odabrano za knjiženje, uz protustavku na kontu definiranom za odgovarajuću vrstu vrijednosnog papira.

- Opcija **Privremeno knjiženje** generira knjižne naloge sa statusom privremenih knjiženja.

- Ako konto-knjiženje podržava otvaranje stavki, a vrijednosni papir je kreiran ručno bez povezane otvorene stavke (ili je njegov iznos veći od povezanih stavki), sustav će automatski otvoriti novu stavku kupca za naknadno usklađenje.

- Nije moguće knjižiti vrijednosne papire nastale iz računa koji još nisu knjiženi u glavnu knjigu.
:::

4. Kliknite **Knjiženje vrijednosnih papira** na alatnoj traci.

### Posebne funkcije

- **Pretraži**: prikazuje popis vrijednosnih papira spremnih za knjiženje.
- **Knjiženje vrijednosnih papira**: izvršava knjiženje označenih zapisa.

:::important Generirani knjižni nalog
Knjižna shema koja se koristi tijekom ove operacije fiksna je i ne ovisi o odabranom konto-knjiženju.

Tijekom knjiženja zatvara se potraživanje prema kupcu (osim ako parametri modula definiraju drugačije ponašanje), dok se na drugoj strani koristi konto portfelja vrijednosnih papira definiran za pojedinu vrstu vrijednosnog papira u tablici **Vrste vrijednosnih papira**.
:::

## Kartica Prethodna knjiženja

Na kartici **Prethodna knjiženja** moguće je poništiti prethodno izvršena knjiženja.

Poništenje je moguće samo ako je obračunsko razdoblje još uvijek otvoreno za izmjene (glavna knjiga nije zaključena i nisu izvršena završna zatvaranja konta).

Dvostrukim klikom na zapis moguće je otvoriti povezani knjižni nalog.

Dostupna je i kartica za pregled eventualnih pogrešaka nastalih tijekom knjiženja.

:::tip Napomena
Poništavanje knjiženja vrijednosnog papira mora se obavezno izvršiti iz ovog obrasca.

Prilikom kreiranja vrijednosnog papira moguće je odmah pokrenuti i njegovo knjiženje, ali nije moguće izravno poništiti knjiženje iz obrasca za unos vrijednosnog papira.

Zbog toga je potrebno najprije poništiti knjiženje ovdje, a tek nakon toga eventualno poništiti samo kreiranje vrijednosnog papira. Time se sustav vraća u početno stanje, u kojem je otvorena stavka kupca ponovno aktivna, a saldo kupca nije zatvoren.
:::

### Posebne funkcije

- **Pretraži**: prikazuje popis izvršenih knjiženja.
- **Poništi knjiženje**: poništava odabrana knjiženja za sve dokumente uključene u njih.
- **Poništi vrijednosni papir**: poništava knjiženje povezano s pojedinačnim vrijednosnim papirom.

> Ova opcija dostupna je samo ako tijekom knjiženja nije bila uključena funkcija grupiranja po vrsti vrijednosnog papira, jer grupiranje generira jedinstveni knjižni nalog za više vrijednosnih papira iste vrste.