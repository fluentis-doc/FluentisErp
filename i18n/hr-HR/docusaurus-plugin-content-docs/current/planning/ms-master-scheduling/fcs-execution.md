---
title: Izvršenja AFCS
sidebar_position: 6
---

## Izvršenja AFCS (glavna tablica)

Obrazac se sastoji od glavne tablice u kojoj se pritiskom na tipku **Traži** dobiva popis spremljenih simulacija. Odabirom simulacije učitavaju se pripadajući podaci na ostalim karticama obrasca.

Odabranu simulaciju moguće je obrisati pritiskom na tipku **Otkaži**.

Svi podaci vezani uz odabranu simulaciju dostupni su na sljedećim karticama:

### Parametri

Ova kartica prikazuje parametre koji su korišteni za odabranu simulaciju.

### Uvozne pogreške

Ova kartica prikazuje upozorenja generirana tijekom uvoza simulacije. Greške se ne prikazuju jer u tom slučaju simulaciju ne bi bilo moguće izvršiti.

### Izvršne pogreške

Ova kartica prikazuje eventualne greške zabilježene tijekom izvođenja simulacije.

### Narudžba dobavljačima

Ova kartica prikazuje planirane i potvrđene, a još neizvršene retke narudžbi dobavljačima, zajedno s pripadajućim planiranim datumom završetka.
Planirani datum završetka predstavlja simulirani datum isporuke koji je izračunao planer. Kod potvrđenih narudžbi planirani datum završetka odgovara planiranom datumu, uz eventualno pomicanje prema parametru planiranja **Dani kašnjenja raspoloživosti za nabavu**.
Ako bi takav datum bio raniji od datuma početka simulacije, automatski se usklađuje s datumom početka simulacije.
Ako je narudžba planirana i njezin datum početka prethodi datumu početka simulacije, datum početka pomiče se na datum početka simulacije. Posljedično se pomiče i datum završetka, dok se planirani datum završetka izračunava kao zbroj datuma završetka i parametra **Dani kašnjenja raspoloživosti za nabavu**.

### Narudžba podizvođači

Ova kartica prikazuje planirane i potvrđene, a još neizvršene retke naloga kooperantima.
Planirani datum početka predstavlja datum na koji je simulirano izdavanje robe kooperantu. Sva roba mora biti raspoloživa na skladištu kako bi se mogla otpremiti i kako bi nalog mogao započeti. Djelomična izdavanja robe ne simuliraju se ako cjelokupna potrebna količina nije raspoloživa, za razliku od proizvodnih naloga kod kojih je takva simulacija moguća.
Planirani datum završetka izračunava se kao zbroj datuma početka, vremena isporuke (*lead time*) naloga i parametra planiranja **Dani kašnjenja raspoloživosti za podizvođača**.

Ni kod povrata obrađene robe ne simuliraju se djelomične isporuke, za razliku od proizvodnih naloga.
Drugim riječima, za naloge kooperacije vrijednosti serija izdavanja i zaprimanja artikala definirane u MRP parametrima smatraju se jednakima nuli, odnosno nalozi kooperacije obrađuju se po serijama, a ne kao kontinuirani tok materijala.

### Proizvodni nalog

Ova kartica prikazuje planirane i potvrđene, a još neizvršene proizvodne naloge. Planirani datumi početka i završetka određeni su rezultatima raspoređivanja.

### Operacije

Ova kartica prikazuje faze povezane s proizvodnim nalozima prikazanima na odgovarajućoj kartici. Planirani datumi početka i završetka određeni su rezultatima raspoređivanja.
Na desnoj strani nalaze se dodatne kartice koje prikazuju alternativne strojeve, potrebne resurse i atribute podešavanja.

### Ovisna potražnja

Ova kartica prikazuje potrebe za materijalima svih proizvodnih naloga i naloga kooperacije.

### Narudžba kupaca

Ova kartica prikazuje neizvršene retke narudžbi kupaca. Planirani datum završetka predstavlja datum na koji je planer simulirao isporuku.
Taj datum nikada nije raniji od datuma isporuke navedenog na narudžbi, ali može biti kasniji ako isporuku nije moguće izvršiti na planirani datum zbog nedostupnosti robe na skladištu.

### Interni DDMRP nalozi

U DDMRP okruženju ova kartica prikazuje retke internih naloga za robu koja se isporučuje čvorovima opskrbnog lanca kojim upravlja DDMRP.
Svaki od tih naloga funkcionira poput narudžbe kupca, pri čemu je kupac zapravo čvor opskrbnog lanca.

### Zadaci

Ova kartica sadrži jezgru rezultata raspoređivanja. Zadaci predstavljaju pojedinačne aktivnosti (nedjeljive i neobjedinjive) koje se izvršavaju u proizvodnji.
Većina zadataka ima izravnu vezu s retcima na kartici **Operacije**. Neki od njih rezultat su objedinjavanja više operacija (na strojevima koji imaju pravilo grupiranja), pri čemu postoji odnos jedan-prema-više između zadataka i operacija.
U pojedinim slučajevima vrijedi i obrnuto, odnosno jednoj operaciji može odgovarati više zadataka (samo na strojevima koji imaju pravilo grupiranja), kada količina za proizvodnju premašuje kapacitet stroja pa je za izvršenje operacije potrebno više radnih ciklusa stroja.
Ako se zadatak ne može rasporediti, u stupcu **Upozorenja** prikazuje se poruka koja navodi jedan od razloga (često i jedini razlog) zbog kojeg raspoređivanje nije bilo moguće, kako bi se lakše utvrdilo što je potrebno poduzeti za uklanjanje problema.

### Skladišna kretanja

Ova kartica prikazuje sve simulacije zaprimanja robe (pozitivna količina) i izdavanja robe (negativna količina) iz skladišta, uz naznaku naloga na koji se pojedina evidencija odnosi.
Podaci se odnose na sve vrste naloga koje je planer uvezao.
Samo se neke evidencije ne odnose ni na jedan nalog. Za svaki artikl i svako skladište postoji jedna evidencija koja predstavlja stanje zalihe u trenutku uvoza podataka za simulaciju.
Ta evidencija ne prikazuje stanje zalihe na datum početka simulacije jer bi to imalo smisla samo kada bi bilo moguće uvoziti potvrđene i planirane naloge za bilo koji datum u prošlosti, što bi zahtijevalo pohranu vrlo velike količine podataka koja bi u većini slučajeva imala malu praktičnu vrijednost.

### Aktivnost radnika

Ova kartica prikazuje aktivnosti koje su radnici izvršavali tijekom simulacije, povezane sa zadacima prikazanima na odgovarajućoj kartici.
Za svaku aktivnost naznačeno je odnosi li se na podešavanje stroja ili na samu proizvodnu obradu.

### Aktivnost resursa

Ova kartica prikazuje korištenje općih proizvodnih resursa kojima se upravlja metodom planiranja s konačnim kapacitetima, a koji su povezani sa zadacima prikazanima na odgovarajućoj kartici.
Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom načinu rada obrazaca, pogledajte poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).