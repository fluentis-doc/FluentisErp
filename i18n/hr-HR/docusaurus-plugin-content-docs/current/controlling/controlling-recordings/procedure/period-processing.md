---
title: Obrada perioda 
sidebar_position: 3
--- 

Postupak **obrade perioda** glavni je postupak u analizama kontrolinga. Ovaj modul podijeljen je na četiri zasebna postupka: obrada fizičkih kretanja, izračun amortizacije, obradu računovodstvenih podataka i proračun projekta.

## OBRADA FIZIČKIH KRETANJA
Prvi postupak očitava ***zapise fizičkih kretanja*** kako bi se stvorila osnovna bazu podataka za ***arhivu podataka fizičkih kretanja***. Očitavaju se količine statičkih mjernih jedinica (npr. kvadratni metri uredskih prostora) kako bi se replicirali kroz različite periode, dok se protok mjernih jedinica raspoređuje prema pravilima distribucijskih perioda. Potrebno je definirati:
-[***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
-***Godina***

## POVIJEST AMORTIZACIJE
Ovaj modul vrši obradu amortizacije u kontrolingu. Definiraju se sljedeći parametri:
-[***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) analize za dodjelu vrijednosti
- ***Godina*** obrade
- ***Do razdoblja***, (posljednji period u godini koji će se obraditi, obično odgovara posljednjem periodu privremenog zatvaranja)
- ***Početna godina za ponovni izračun*** (ako su promijenjene postavke kontrolinga na već obrađenim osnovnim sredstvima)

:::tip PRIMJER
Ako je osnovno sredstvo kupljeno 2015. godine i amortizira se po stopi od 15% godišnje, u kontrolingu bi bilo potpuno amortizirano nakon 6,5 godina. Ako se prvi izračun u ***FluentisERP-u*** radi 2022. godine, sustav će automatski izračunati amortizaciju od 2015. nadalje kako bi provjerio preostalu vrijednost u 2022. Ako se stopa amortizacije naknadno promijeni na 10%, sustav mora odlučiti hoće li zadržati prethodne izračune ili ponoviti obradu od početne godine za ponovni izračun. Nakon obrade, ***FluentisERP*** ažurira podatke na dva mjesta. To je arhiva (povijest) o amortizaciji, gdje su vidljivi podaci za područje, osnovno sredstvo, godinu i mjesec i u izvanbilančnim knjiženjima u kojima se briše i ponovno kreira godišnje knjiženje s mjesečnim
detaljima amortizacije, s ukupnim vrijednostima po podkontu i centru troškova. 
:::

Nakon što je obrada dovršena, ***FluentisERP*** će popuniti podatke u dvije maske: prva je maska ***Povijest amortizacija***, u kojoj ćemo imati pregled detalja po području, osnovnom sredstvu, godini i mjesecu obrađenih podataka za pojedino osnovno sredstvo. Kao i kod ostalih povijesnih maski, podaci u ovoj tablici nisu izmjenjivi od strane korisnika. Druga maska koja je popunjena bit će maska ***Izvanbilančnih knjiženja po području***, u kojoj će Fluentis izbrisati i ponovno stvoriti knjiženje za svaku godinu koje sadrži mjesečni detalj primijenjenih amortizacija, zbrajajući vrijednosti po podračunu i centru.


## OBRADA RAČUNOVODSTVENIH PODATAKA
Ova obrada očitava ***privremeno zatvaranje***, priprema podatke za mjesečnu obradu i primjenjuje nositelje troškova prema redoslijedu ciklusa. Potrebno je definirati:
- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) analize
- ***Privremeno zatvaranje*** (nije obavezno)
- ***Vrijeme uravnoteženja*** (za korekciju konta koja se ne koriste u kontrolingu)
- ***Datum*** 
- ***Godinu*** obrade
- ***Predložak*** knjiženja

Odabir ***privremenog zatvaranja*** nije obavezan. Na primjer, ako su podaci uvezeni iz vanjskog dokumenta, gdje su procijenjeni saldi po podkontima i centrima za sljedeću godinu, može se provesti analiza na temelju tih posebnih knjiženja. U tom slučaju, primijenit će se nositelji troškova specifični za neko područje, kako bi se podaci mjesečno rasporedili i usporedili s
konsolidiranim podacima iz računovodstva. Budući da izvor podataka dolazi iz knjigovodstva, privremeno zatvaranje neće se postavljati. 

Ako se, međutim, obrađuju stvarni podaci konsolidacije, ***FluentisERP*** omogućuje generiranje automatskih knjiženja ***poravnavanja***, uz opciju primjene korekcija na privremena ili ***godišnja*** zatvaranja konta.

Ovaj proces omogućuje usklađivanje podataka podkonta koji su definirani kao neupotrebljivi u kontrolingu, u odnosu na one koji su prethodno evidentirani kroz izvanbilančna knjiženja područja. 

:::tip NAPOMENA
Prema prethodno navedenim smjernicama u dokumentaciji, logike izjednačavanja mogu se primijeniti na dva načina: Samo na razini vrijednosti, zadržavajući proporcije već evidentiranih centara troškova i potpuno brisanje kontroling podataka, uz
storniranje zapisa kako bi se osigurala računovodstvena valorizacija i na razini vrijednosti i centra troškova.
:::

Tijekom tih obrada, ***FluentisERP*** će također pripremiti mjesečnu tablicu s podacima isključivo po projektu/nalogu, koja će poslužiti kao polazište za obradu konačnog izvještaja (konsuntiva). Ako obrada računovodstvenih podataka obuhvaća sve drivere tipova raspodjele od 01 do 12, tada će obrada konačnog izvještaja po projektu primijeniti posebne drivere specifične za projekt/nalog.

## OBRADA KONAČNOG PRORAČUNA PROJEKTA
Ovaj postupak analizira knjiženja obrađena u prethodnim koracima i povezana s projektima. Također uzima u obzir podatke iz  proizvodnje (uključujući internu i eksternu obradu), čime se obuhvaćaju svi izravni troškovi i prihodi projekta. Nakon toga se
primjenjuju nositelji troškova specifični za distribucijske vrste od 13 do 18. Detaljnije informacije dostupne su u dokumentaciji o ***nositeljima troškova***. Potrebni parametri:

- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) koje se obrađuje
- Raspon ***datuma od*** i ***datuma do***
- ***Šifra*** i ***opis*** obrade
- ***Datum*** 
- Referentna ***Godina*** 
- ***Predložak*** knjiženja



