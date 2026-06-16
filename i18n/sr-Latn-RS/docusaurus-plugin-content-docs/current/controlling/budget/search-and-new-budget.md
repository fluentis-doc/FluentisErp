---
title: Pretraživanje i Novi budžet
sidebar_position: 4
---

## Pretraživanje

Naredba **Budžet** omogućava pretraživanje, upravljanje i ispis budžeta. Moguće je kreirati nove zapise (pomoću dugmeta **Novi** na alatnoj traci ili opcijom **Novi budžet** u meniju), uređivati postojeće ili duplirati prethodno kreiran budžet. Prilikom dupliranja pojaviće se dijalog sa sledećim opcijama:

- određivanje da li se kreira **nova verzija** odabranog budžeta ili novi budžet sa novim brojem,
- unos **opisa** za kopiju koja se kreira,
- izbor da li će se primeniti **procenti promene** dodeljeni različitim podkontima.

Forma za pretragu budžeta podrazumevano prikazuje samo poslednju verziju svakog budžeta (sa istim *Brojem* budžeta, *Tipom* budžeta i *Tipom perioda*). Otvaranjem sekcije za filtriranje moguće je prikazati i prethodne verzije aktiviranjem opcije **Prikaži sve verzije**.

:::note Napomena
Tabela [**Procenti valorizacije**](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages), koja se nalazi među tabelama Controllinga, omogućava definisanje procentualne promene za fiksni i varijabilni deo vrednosti podkonta. Svaki kod može se dodeliti pojedinačnom podkontu troška ili prihoda u kontnom planu.
:::

:::tip Konsolidovani budžet
Opcije za pretragu i unos novog **Konsolidovanog budžeta** omogućavaju kreiranje obračuna na nivou realizacije radi prikaza **analize odstupanja** u odnosu na planirani budžet definisan u ovoj formi, kao i procenu rezultata poslovanja.
:::

## Novi budžet

1. Popuniti obavezne podatke u zaglavlju, kao što su *Tip budžeta*, *Tip perioda* i **Opis**. Po potrebi izmeniti ostale podatke, kao što su datum, godina i referentni datumi budžeta (**Datum početka – Datum završetka**). Obavezno je uneti godinu ili vremenski period. U slučaju unosa perioda, Fluentis automatski popunjava polje godine prema godini datuma početka.

   - **Definitivan** – budžet postaje neizmenjiv.
   - **Podrazumevani** – označava budžet koji je aktivan u odnosu na druge verzije koje se koriste, na primer za simulacije.
   - **Detaljno po organizacionoj jedinici** – omogućava povezivanje podbudžeta sa pojedinačnim organizacionim jedinicama.

2. Popuniti podatke u gornjoj tabeli unosom **vrsta vrednosti** koje će se koristiti u budžetu, izborom iz polja **Tip budžetskog objekta**:

   - Podkonta
   - Centri troška / prihoda
   - Modeli reklasifikacije
   - Artikli

   U zavisnosti od vrste podataka aktivira se odgovarajuća kolona za unos.

   Kolona **Opis** je opciona i omogućava unos dodatnih informacija o odabranim podacima.

   Kolona **Organizaciona jedinica** aktivna je samo ako je u zaglavlju uključena opcija budžetiranja po organizacionim jedinicama.

3. Upravljati donjim tabelama u skladu sa odabranom vrstom podbudžeta.

   Mreža u donjem levom delu sadrži detaljne vrednosti povezane sa odabranim podbudžetom. Dostupna polja zavise od vrste podbudžeta, pri čemu su zajednička polja *dugovanje*, *potraživanje*, *fiksni iznos* i *varijabilni iznos*. Procentualna valorizacija fiksnog i varijabilnog iznosa može se unapred definisati u kontnom planu, popunjavanjem polja *varijabilnost* na nivou podkonta ili kroz tabelu varijabilnosti podkonta po centru troška.

:::note Primer
Ako je podbudžet definisan po podkontima, prikazuje se lista podkonta. Ako je definisan po centrima troška, prikazuju se podkonto i centar troška. Ako je definisan po centrima prihoda, prikazuju se podkonto i centar prihoda. Ako je definisan po modelima reklasifikacije, moguće je birati čvorove povezanog modela.
:::

Nakon početka unosa detalja podbudžeta više nije moguće menjati povezani red u gornjoj tabeli.

Mreža **desno** omogućava unos podataka po periodima. Kod ručnog unosa trenutno ne postoji automatska valorizacija niti provera usklađenosti između podataka unetih u levu i desnu tabelu.

### Procedure automatskog popunjavanja podbudžeta

Unutar budžeta postoje dugmad koja omogućavaju automatsko popunjavanje različitih podbudžeta preuzimanjem podataka iz drugih delova Fluentis sistema, u zavisnosti od izabranog tipa podbudžeta.

**BUDŽET ZA PODKONTA**

Ovaj podbudžet može se popuniti pomoću sledećih funkcija:

- **Kreiraj iz knjiženja**: otvara dijalog za filtriranje datuma knjiženja, obračunskih perioda, eventualnih konta koja treba isključiti (na primer zatvaranja prethodnih perioda), uključivanje bilansnih konta (ekonomski deo se uvek uključuje), primenu procenata promene (iz tabele Procenti promene) i primenu vrednosti po periodima ili prema originalnim ekonomskim periodima knjiženja.

:::note Napomena
Opcije *Vrednost po periodu* i *Originalni ekonomski periodi* međusobno se isključuju. Fluentis popunjava detalje po periodima u desnoj tabeli koristeći ponderisane vrednosti ili originalne datume ekonomskog perioda knjiženja. Na primer, ako trošak ima jedno knjiženje od 01.03. do 31.08., u desnoj tabeli biće prikazane vrednosti od marta do avgusta proporcionalno broju dana u svakom mesecu.
:::

- **Kreiraj iz međugodišnjeg zatvaranja**: otvara dijalog za izbor izvora podataka i omogućava korišćenje istih opcija kao kod prethodne funkcije (uključivanje bilansnih konta, procenti promene, vrednosti po periodima ili originalni ekonomski periodi).

- **Grupiši detaljne redove**: koristi se kada je aktivirana opcija *Koristi originalne ekonomske periode*. Fluentis tada generiše poseban red za svaki ekonomski period, što olakšava kontrolu podataka, ali otežava pregled budžeta. Ova funkcija grupiše vrednosti po podkontima.

**BUDŽET ZA CENTRE TROŠKOVA / PRIHODA**

Za ovu vrstu podbudžeta dostupne su sledeće funkcije:

- **Kreiraj iz knjiženja**
- **Kreiraj iz međugodišnjeg zatvaranja**
- **Kreiraj centre troškova iz podkonta**
- **Kreiraj centre troškova iz istorije controlling knjiženja**
- **Grupiši detaljne redove**

Prve dve i poslednja funkcija imaju istu namenu kao kod budžeta za podkonta.

- **Kreiraj centre troškova iz podkonta**: otvara dijalog sa mogućnošću višestrukog izbora podbudžeta tipa *Podkonto* koji će se koristiti kao izvor podataka. Budžetske vrednosti iz odabranih podbudžeta prenose se na centre troškova koristeći podešavanja iz kontnog plana (veze sa centrima troškova i slično), uz eventualni ponovni obračun varijabilnosti.

- **Kreiraj centre troškova iz istorije controlling knjiženja**: otvara dijalog za izbor podataka iz *Istorije controlling knjiženja* (godina od–do, period od–do i područje), uz mogućnost primene procenata promene.

**BUDŽET PO MODELIMA REKLASIFIKACIJE**

Za ovu vrstu dostupna je samo funkcija **Kreiraj vrednosti modela**, koja otvara dijalog za izbor podbudžeta koji će služiti kao izvor podataka. U listi je omogućena višestruka selekcija pomoću tastera Ctrl ili Shift.

- Podbudžeti tipa **Podkonta** koriste se za popunjavanje čvorova (redova) modela reklasifikacije definisanih sa tipologijom *Podkonta*.
- Podbudžeti tipa **Centri troškova** koriste se za popunjavanje čvorova (redova) modela reklasifikacije definisanih sa tipologijom *Centri troškova*.