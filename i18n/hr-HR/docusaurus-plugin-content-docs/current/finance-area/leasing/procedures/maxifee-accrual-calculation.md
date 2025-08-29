---
title: Izračun razgraničenja za maksimalnu naknadu  
sidebar_position: 1
---

Putem ovog obrasca moguće je pretražiti već izračunata razgraničenja te izvršiti novi godišnji izračun razgraničenja za maksimalne leasing naknade (maxicanone).  

ostupak je, slično kao i kod knjiženja obračuna razgraničenja u modulu Glavno knjigovodstvo, podijeljen u dvije faze: **najprije** se s ove pozicije izvršava **izračun** azgraničenja, a **zatim** se nastavlja s njegovim **knjiženjem** putem odgovarajuće računovodstvene procedure unutar modula.  

Pritiskom na tipku Novo inicijalizira se obrazac za unos parametara za izračun.  

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image01.png)

Potrebno je definirati sljedeće: **Računovodstvenu godinu**, **Vrstu naloga** koja će se koristiti za knjiženje korektivne stavke, **Datum** knjiženja i datum obračunskog razdoblja, koji će biti korišteni u knjiženju.  

Iako se unosi vrsta naloga, struktura knjiženja automatski se određuje logikom postupka.

Nakon spremanja moguće je pritisnuti gumb Izračunaj kako bi se dobio prijedlog vrijednosti koje se mogu potvrditi putem kvačice (opcija Označi sve za potvrdu obračuna vezanih uz sve prisutne leasinge), a zatim se može pristupiti knjiženju tih vrijednosti.

Prijedložene vrijednosti iz izračuna su podesive i mogu se ručno korigirati u slučaju da je potrebno napraviti manje prilagodbe, primjerice u broju dana obračuna ili u izračunatim iznosima. 

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image02.png)

Preuzimaju se sljedeći podaci: **Vrsta leasinga**, **Datum sklapanja**, **Broj leasinga**, **Opis** i **Datum isteka ugovora**.

**Izračun polja**: = razlika u danima između **datuma sklapanja** i **datuma isteka** leasing ugovora.

**Dnevni trošak**: = Ukupna vrijednost ugovora / Ukupno dana
(gdje je Ukupna vrijednost ugovora = Maksikanon + Troškovi obrade i administracije + Zbroj (Glavnica + Kamate + Troškovi za svaku pojedinu ratu)).  

**Dani obračuna**: = broj dana između (najnovijeg od datuma sklapanja i početka poslovne godine) i datuma knjiženja koji je postavljen za obračun maksikanona.  

**Trošak obračuna**: = Dnevni trošak * Dani obračuna  

**Plaćeno knjiženo**: izračun koliko je plaćeno unutar poslovne godine s računovodstvenog aspekta (knjižene rate + knjiženi maksikanon)

= Zbroj knjiženog maksikanona i rata (glavnica + kamata + troškovi) koje imaju označenu opciju Knjiženo i čiji je planirani datum dospijeća manji od datuma knjiženja maksikanona.  

Također se provjerava da godina sadržana u datumima rata i u zaglavlju leasing ugovora (datum ugovaranja) bude usklađena s godinom knjiženja obračuna, odnosno da postoji kontni parametar za dotičnu godinu.  

**Obračun prethodne godine**: u ovom se polju prikazuje vrijednost iz polja Vrijednost obračuna iz prethodne godine. Stoga će za prvu godinu u kojoj se ugovor o leasingu unosi u sustav, ovo polje imati vrijednost nula.  

**Vrijednost obračuna**: u ovom se polju izračunava iznos obračuna koji se treba primijeniti:  

= Plaćeno (knjiženo) + Obračun prethodne godine - Trošak obračunskog razdoblja  

**Kontrolirano**: potrebno je postaviti flag u retku kako bi se omogućilo knjiženje obračuna, bilo da je izračun automatski prihvaćen ili nakon ručnog uređivanja vrijednosti.

Također je moguće koristiti flag "Označi sve" (iznad tablice) za masovno potvrđivanje svih predloženih obračuna.

**Knjiženo**: ovaj flag se automatski aktivira nakon što je obračun potvrđen i knjižen. U tom trenutku se upisuju i referentni podaci o kreiranoj knjiženoj stavci.

Postupak knjiženja može se pokrenuti iz trenutnog obrasca putem tipki na traci izbornika ili, jednako tako, korištenjem procedure dostupne u izborniku računovodstvenih postupaka unutar modula.

S iste lokacije moguće je također izvršiti i poništavanje (vraćanje) postupka knjiženja.

Obračun Maxikanona, koji je prethodno izračunat i knjižen, može se automatski obraditi i tijekom faze automatskog otvaranja konta (koja se može aktivirati putem **[Automatsko zatvaranja konta](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**) uključivanjem flag Žiro račun - prilagodba zapisa.

U ovom slučaju bit će automatski izvršene uobičajene knjiženja ponovnog otvaranja predujma za maxicanone, pridružujući ih ostalim automatskim knjiženjima otvaranja salda i prebacivanja drugih aktivnih i pasivnih troškova i predujma.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image03.png)






