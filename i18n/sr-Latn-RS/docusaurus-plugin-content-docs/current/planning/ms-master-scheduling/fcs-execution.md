---
title: Izvršenja AFCS
sidebar_position: 6
---

## Izvršenja AFCS (glavna tabela)

Obrazac se sastoji od glavne tabele u kojoj se pritiskom na dugme **Traži** dobija lista sačuvanih simulacija. Odabirom simulacije učitavaju se pripadajući podaci na ostalim karticama obrasca.

Odabranu simulaciju moguće je obrisati pritiskom na dugme **Otkaži**.

Svi podaci vezani za odabranu simulaciju dostupni su na sledećim karticama:

### Parametri

Ova kartica prikazuje parametre koji su korišćeni za odabranu simulaciju.

### Greške pri uvozu

Ova kartica prikazuje upozorenja generisana tokom uvoza simulacije. Greške se ne prikazuju jer u tom slučaju simulaciju ne bi bilo moguće izvršiti.

### Greške izvršavanja

Ova kartica prikazuje eventualne greške zabeležene tokom izvršavanja simulacije.

### Narudžbine dobavljačima

Ova kartica prikazuje planirane i potvrđene, a još neizvršene stavke narudžbina dobavljačima, zajedno sa pripadajućim planiranim datumom završetka.

Planirani datum završetka predstavlja simulirani datum isporuke koji je izračunao planer. Kod potvrđenih narudžbina planirani datum završetka odgovara planiranom datumu, uz eventualno pomeranje prema parametru planiranja **Dani kašnjenja raspoloživosti za nabavku**.
Ako bi takav datum bio raniji od datuma početka simulacije, automatski se usklađuje sa datumom početka simulacije.
Ako je narudžbina planirana i njen datum početka prethodi datumu početka simulacije, datum početka pomera se na datum početka simulacije. Posledično se pomera i datum završetka, dok se planirani datum završetka izračunava kao zbir datuma završetka i parametra **Dani kašnjenja raspoloživosti za nabavku**.

### Nalozi podizvođačima

Ova kartica prikazuje planirane i potvrđene, a još neizvršene stavke naloga podizvođačima.
Planirani datum početka predstavlja datum na koji je simulirano izdavanje robe podizvođaču. Sva roba mora biti raspoloživa na skladištu kako bi mogla biti otpremljena i kako bi nalog mogao započeti. Delimična izdavanja robe ne simuliraju se ako celokupna potrebna količina nije raspoloživa, za razliku od proizvodnih naloga kod kojih je takva simulacija moguća.
Planirani datum završetka izračunava se kao zbir datuma početka, vremena isporuke (*lead time*) naloga i parametra planiranja **Dani kašnjenja raspoloživosti za podizvođača**.
Ni kod povrata obrađene robe ne simuliraju se delimične isporuke, za razliku od proizvodnih naloga.
Drugim rečima, za naloge kooperacije vrednosti serija izdavanja i prijema artikala definisane u MRP parametrima smatraju se jednakim nuli, odnosno nalozi kooperacije obrađuju se po serijama, a ne kao kontinuirani tok materijala.

### Proizvodni nalog

Ova kartica prikazuje planirane i potvrđene, a još neizvršene proizvodne naloge. Planirani datumi početka i završetka određeni su rezultatima raspoređivanja.

### Operacije

Ova kartica prikazuje faze povezane sa proizvodnim nalozima prikazanim na odgovarajućoj kartici. Planirani datumi početka i završetka određeni su rezultatima raspoređivanja.

Na desnoj strani nalaze se dodatne kartice koje prikazuju alternativne mašine, potrebne resurse i atribute podešavanja.

### Zavisna potražnja

Ova kartica prikazuje potrebe za materijalima svih proizvodnih naloga i naloga kooperacije.

### Narudžbine kupaca

Ova kartica prikazuje neizvršene stavke narudžbina kupaca. Planirani datum završetka predstavlja datum na koji je planer simulirao isporuku.
Taj datum nikada nije raniji od datuma isporuke navedenog na narudžbini, ali može biti kasniji ako isporuku nije moguće izvršiti na planirani datum zbog nedostupnosti robe na skladištu.

### Interni DDMRP nalozi

U DDMRP okruženju ova kartica prikazuje stavke internih naloga za robu koja se isporučuje čvorovima lanca snabdevanja kojim upravlja DDMRP.
Svaki od tih naloga funkcioniše poput narudžbine kupca, pri čemu je kupac zapravo čvor lanca snabdevanja.

### Zadaci

Ova kartica sadrži jezgro rezultata raspoređivanja. Zadaci predstavljaju pojedinačne aktivnosti (nedeljive i neobjedinjive) koje se izvršavaju u proizvodnji.
Većina zadataka ima direktnu vezu sa stavkama na kartici **Operacije**. Neki od njih rezultat su objedinjavanja više operacija (na mašinama koje imaju pravilo grupisanja), pri čemu postoji odnos jedan-prema-više između zadataka i operacija.
U pojedinim slučajevima važi i obrnuto, odnosno jednoj operaciji može odgovarati više zadataka (samo na mašinama koje imaju pravilo grupisanja), kada količina za proizvodnju premašuje kapacitet mašine pa je za izvršenje operacije potrebno više radnih ciklusa mašine.
Ako se zadatak ne može rasporediti, u koloni **Upozorenja** prikazuje se poruka koja navodi jedan od razloga (često i jedini razlog) zbog kojeg raspoređivanje nije bilo moguće, kako bi se lakše utvrdilo šta je potrebno preduzeti za otklanjanje problema.

### Skladišna kretanja

Ova kartica prikazuje sve simulacije prijema robe (pozitivna količina) i izdavanja robe (negativna količina) iz skladišta, uz naznaku naloga na koji se pojedina evidencija odnosi.
Podaci se odnose na sve vrste naloga koje je planer uvezao.
Samo se neke evidencije ne odnose ni na jedan nalog. Za svaki artikl i svako skladište postoji jedna evidencija koja predstavlja stanje zaliha u trenutku uvoza podataka za simulaciju.
Ta evidencija ne prikazuje stanje zaliha na datum početka simulacije jer bi to imalo smisla samo kada bi bilo moguće uvoziti potvrđene i planirane naloge za bilo koji datum u prošlosti, što bi zahtevalo čuvanje veoma velike količine podataka koja bi u većini slučajeva imala malu praktičnu vrednost.

### Aktivnosti radnika

Ova kartica prikazuje aktivnosti koje su radnici izvršavali tokom simulacije, povezane sa zadacima prikazanim na odgovarajućoj kartici.
Za svaku aktivnost naznačeno je da li se odnosi na podešavanje mašine ili na samu proizvodnu obradu.

### Aktivnosti resursa

Ova kartica prikazuje korišćenje opštih proizvodnih resursa kojima se upravlja metodom planiranja sa konačnim kapacitetima, a koji su povezani sa zadacima prikazanim na odgovarajućoj kartici.
Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom načinu rada obrazaca pogledajte poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).