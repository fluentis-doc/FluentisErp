---
title: Logistička struktura
sidebar_position: 1
---

Fluentis DDMRP može upravljati ne samo jednom fabrikom, već i celokupnim lancem snabdevanja koji se sastoji od fabrike, različitih hubova i distributivnih centara.

Ova tabela prikazuje logističku strukturu, odnosno lanac snabdevanja, na kojem Fluentis DDMRP funkcioniše.

U sistemu Fluentis svaki čvor lanca snabdevanja naziva se „Facility“, a ova tabela sadrži spisak svih „Facilities“.

Razmatra se hijerarhijska struktura opisana u nastavku.

## Distributivni centri

To su logističke jedinice koje snabdevaju krajnje kupce direktno iz sopstvenih zaliha.

Geografski su smešteni na strateškim lokacijama kako bi se smanjilo vreme transporta do krajnjih kupaca.

Svaki distributivni centar snabdeva se iz *međuregionalnog huba* ili direktno iz fabrike.

## Hubovi

To su logističke jedinice koje snabdevaju distributivne centre.

Geografski su smešteni na strateškim lokacijama kako bi se smanjilo vreme transporta do distributivnih centara.

Hubovi omogućavaju održavanje visokog nivoa usluge za krajnje kupce, uz istovremeno smanjenje ukupnog nivoa zaliha u distributivnoj mreži.

Hubovi se snabdevaju iz fabrike ili, u veoma velikim mrežama, iz drugih hubova.

## Fabrika

U logističkoj strukturi razmatra se samo jedna fabrika.

Ona snabdeva hubove i/ili distributivne centre.

Između jedinica logističke strukture postoji odnos kupac-dobavljač (svaka logistička jedinica mora biti šifrirana i kao kupac i kao dobavljač).

Distributivni centri su kupci i nisu dobavljači unutar logističke strukture, hubovi su istovremeno kupci (fabrike ili drugih hubova) i dobavljači (distributivnih centara ili drugih hubova), dok fabrika ima distributivne centre ili hubove kao kupce, ali nema nijednu logističku jedinicu kao dobavljača.

Polja koja definišu logističku jedinicu su sledeća:

### Skladište

To je šifra skladišta povezana sa logističkom jedinicom.

Osim fabrike, svaka logistička jedinica jednoznačno je identifikovana skladištem koje joj je dodeljeno (ovaj izbor napravljen je radi veće kompatibilnosti sa spoljnim aplikacijama).

Fabrici se, međutim, može dodeliti više skladišta, a DDMRP sistem će uzimati u obzir samo ona skladišta koja su navedena u ovoj tabeli i koja sadrže bafer artikle fabrike. Skladišta unutar fabrike koja nisu navedena u ovoj tabeli ne smeju sadržati DDMRP bafere, jer bi ih sistem zanemario prilikom obračuna NFP-a.

Skladišta navedena u ovoj tabeli koja nisu označena kao fabrika biće ignorisana od strane MRP procedure, pošto se radi o skladištima za distribuciju robe, a ne za proizvodnju. Njima će se upravljati pojedinačno putem obračuna neto pozicije toka (NFP) iz MRP menija.

U sistemu Fluentis DDMRP, logistička jedinica „Fabrika“ identifikovaće se praznom šifrom skladišta, upravo zato što je to jedina logistička jedinica kojoj može biti pridruženo više skladišta, čime se gubi jednoznačna veza između skladišta i logističke jedinice.

**Kupac**

Njegova vrednost identifikuje logističku jedinicu kojoj će roba biti isporučena, a koja je identifikovana šifrom skladišta i/ili šifrom kupca u zapisu.

Ako je ta jedinica dobavljač druge logističke jedinice, tada mora imati i povezanu šifru dobavljača.

Ista šifra kupca stoga ne može biti povezana sa više skladišta (osim fabrike), kao što ni ista šifra skladišta ne može biti povezana sa više šifara kupaca.

**Dobavljač**

Njegova vrednost identifikuje logističku jedinicu koja će snabdevati robom onu jedinicu koja je identifikovana šifrom skladišta i/ili šifrom kupca u zapisu.

Samo za zapise povezane sa fabrikom (kada je aktiviran indikator Fabrika), ovo polje nije moguće uređivati i ostaje prazno, jer fabrika ne može biti snabdevana od strane druge logističke jedinice.

Kao dobavljač može se odabrati samo logistička jedinica koja je već uneta u ovu tabelu (nije moguće odabrati dobavljača iz opšteg registra dobavljača).

Sistem proverava šifru kupca povezanu sa šifrom dobavljača, a zatim traži tu šifru kupca u polju Kupac drugih zapisa u tabeli Facilities, pa logistička jedinica dobavljača mora imati povezane i šifru kupca i šifru dobavljača.

To znači da unos u ovu tabelu mora početi od najnižeg nivoa, odnosno od fabrike, zatim nastaviti preko eventualnih hubova i na kraju distributivnih centara. Dakle, unos se vrši prema opadajućem redosledu prioriteta.

Nije obavezno da svi artikli prisutni u logističkoj jedinici budu snabdevani od strane jedinice označene kao dobavljač.

Ta jedinica ostaje podrazumevani dobavljač koji će se koristiti prilikom kreiranja **planiranih internih narudžbina** koje generiše sistem planiranja i za izračunavanje razdvojenog vremena isporuke (DLT).

U tabeli DDMRP parametara za artikle mogu se definisati izuzeci, izborom druge logističke jedinice ili opšteg eksternog dobavljača van logističke strukture, zajedno sa pripadajućim vremenom transporta.

**Skladište dobavljača**

To je šifra skladišta povezana sa logističkom jedinicom dobavljača izabranom u zapisu; ova vrednost omogućava brzo pretraživanje u tabeli putem polja Skladište.

Ako je dobavljač fabrika, ovo polje će biti prazno, jer je fabrika jedina logistička jedinica kojoj može biti pridruženo više skladišta.

**Fabrika**

Ovo je indikator koji označava da se skladište u zapisu odnosi na fabriku (u tom slučaju polje Dobavljač ostaje prazno).

Za fabriku je moguće imati više zapisa, po jedan za svako skladište koje sistem planiranja treba da uzme u obzir.

Nakon unosa prvog skladišta sa aktivnim indikatorom Fabrika, za naredna skladišta proveravaće se da li je šifra kupca ista kao u zapisima sa aktivnim indikatorom Fabrika, jer će fabrici uvek biti dodeljena samo jedna šifra kupca (i jedna šifra dobavljača).

**Prioritet planiranja**

To je vrednost veća ili jednaka 0, a manja ili jednaka 100.

Zapisi povezani sa fabrikom imaju vrednost 100 prema Fluentis konvenciji, dok ostale logističke jedinice imaju niže vrednosti.

Ovaj element služi da sistemu planiranja odredi redosled obračuna; najpre će biti planirane logističke jedinice sa nižim vrednostima prioriteta, a zatim one sa višim vrednostima, dok će fabrika biti planirana poslednja, poštujući lanac odnosa kupac-dobavljač između logističkih jedinica, slično kao kod proizvodnih sastavnica, počevši od viših nivoa i postepeno prelazeći na niže.

Ovaj redosled je neophodan jer je za utvrđivanje potreba jedne logističke jedinice prvo potrebno isplanirati potrebe njenih kupaca.

Svaki zapis kupca mora imati niži prioritet od svoje dobavljačke jedinice.

**Vreme isporuke (Lead Time)**

To je vreme potrebno za transport robe od logističke jedinice dobavljača, izraženo u danima.

**Razlog izlaza iz skladišta dobavljača**

To je skladišni razlog koji će se koristiti za izvršenje interne narudžbine, odnosno za izdavanje robe iz ove logističke jedinice i njeno slanje logističkoj jedinici koja je robu zahtevala. Razlog mora biti povezan sa skladištem kako bi mogao biti izabran tokom unosa zapisa.

**Razlog ulaza u skladište kupca**

To je skladišni razlog koji će se koristiti za prijem robe nakon interne narudžbine, odnosno za prijem robe u ovu logističku jedinicu koja dolazi iz logističke jedinice koja je robu isporučila. Razlog mora biti povezan sa skladištem kako bi mogao biti izabran tokom unosa zapisa.