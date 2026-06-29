---
title: Pregled stanja konta
sidebar_position: 8
---

Ovaj obrazac omogućava pregled računovodstvenih podataka na ekranu u formi koja je slična bilansu stanja, uz mogućnost primene različitih filtera, grupisanja podataka i dodatnih opcija za analizu.

## Područje filtera

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image01.png)

Omogućava filtriranje računovodstvenih podataka prema:
- rasponu **datuma obračuna**;
- rasponu konta ili podkonta;
- tipu konta;
- **šablonu knjiženja**;
- odeljenju (korisno kada kompanija koristi više organizacionih jedinica);
- **valuti**.

**Konvertuj i ostale iznose u valutu**: kada je ova opcija aktivna, a prethodno je odabrana određena **valuta**, pored knjiženja evidentiranih u toj valuti, i sva ostala knjiženja evidentirana u evrima ili drugim valutama biće preračunata u odabranu valutu prema kursu koji je važio na datum knjiženja.

## Parametri

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image02.png)

Pošto tabela rezultata prikazuje i polje **Nivo**, koje predstavlja hijerarhijski nivo odgovarajućeg konta ili podkonta u kontnom planu (gde je **99** najniži nivo sa najvećim stepenom detalja, dok je **0** korenski nivo koji obično predstavlja ukupan zbir), moguće je filtrirati prikaz prema nivou.

Dostupne su sledeće opcije:
**Sve**: prikazuje sve hijerarhijske nivoe.

**Prikaži ukupan iznos za nivo X...**: unosom željenog nivoa (na primer **98**) u polje **Nivo**, rezultati će biti grupisani po glavnim kontima, odnosno po nivou neposredno iznad podkonta.

**Prikaži ukupan iznos za nivo X... sa međuzbirovima**: osim grupisanja po odabranom nivou, prikazuju se i međuzbirovi svih nižih hijerarhijskih grupa.

**Prikaži ukupne iznose samo za podkonta**: prikazuju se samo nivoi koji sadrže podkonta, dok se viši hijerarhijski nivoi ne prikazuju.

**Isključi redove sa nultim iznosom**: konta i podkonta bez prometa neće biti prikazana.

**Dodaj (uključeno/isključeno)**: omogućava poseban način rada u kojem se, nakon promene perioda i ponovnog pokretanja pretrage, novi rezultat dodaje postojećem prikazu umesto da ga zameni. Na taj način moguće je uporediti rezultate različitih perioda. Zbog preglednosti preporučuje se korišćenje ove opcije samo kada su filteri konta ili podkonta dovoljno suženi.

## Tabela rezultata

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image03.png)

U tabeli rezultata prikazuju se konta i podkonta u skladu sa zadatim filterima i pravilima grupisanja.

Prikazuju se:
- šifra i naziv **grupe** (prema strukturi **[kontnog plana](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**);
- šifra i naziv konta ili podkonta;
- oznaka **Nivo**, koja predstavlja hijerarhijski nivo korišćen u ovom prikazu.

**Konačni**: ovo polje označava da li je konto ili grupa najviši hijerarhijski nivo u svojoj grani kontnog plana. Ova informacija je korisna kod složenijih struktura kontnog plana, jer prikazani nivo ne mora uvek predstavljati najviši nivo određene grupe.
Zbog toga je moguće koristiti filter nad kolonom **Konačni** i izdvojiti samo zapise kod kojih je ova oznaka aktivna, čime se dobijaju svi završni (najviši) nivoi hijerarhije.

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image04.png)

## Napomene

U kolonama koje sadrže numeričke podatke koriste se sledeće skraćenice:

- **VdS** = valuta kompanije (osnovna valuta u kojoj se vodi računovodstvo; za kompanije u Italiji to je evro).
- **VS** = valuta odabrana u početnom filteru.
- **Euroam** = *Euro Amount*, odnosno protivvrednost iznosa u stranoj valuti izražena u evrima.

:::tip INFO
Dodatne kolone, koje nisu prikazane u podrazumevanom prikazu obrasca, mogu se prikazati ili sakriti desnim klikom na zaglavlje tabele i izborom opcije **Prikaži meni kolona**.
:::

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image05.png)

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image06.png)

## Značenje kolona

**Početno stanje godine – Dugovno / Potražno** = vrednost poslednjeg obračunatog otvaranja konta **(A)**.

**Prethodni promet (Dugovno / Potražno)** = promet nastao u periodu između poslednjeg otvaranja konta **(A)** i početnog datuma definisanog u filteru datuma knjiženja **(B)**.

**Prethodno stanje (Dugovno / Potražno)** = **(A) + (B)**.

**Promet u periodu (Dugovno / Potražno)** = promet ostvaren u periodu definisanom filterom datuma **(C)**.

**Ukupno dugovno / potražno** = **(A) + (B) + (C)**.

**Konačno dugovno / potražno** = neto stanje ukupnih dugovnih i potražnih vrednosti.

**Kolona Filter**: predstavlja tehnički podatak koji se koristi prilikom izvoza podataka u Excel ili kopiranja podataka, kako bi se omogućilo pravilno formiranje tabela u Excelu.

## Ukupni iznosi

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image07.png)

**Ukupno za označene redove**: moguće je označiti jedan ili više konta ili podkonta (držanjem tastera **Ctrl**).

:::danger PAŽNJA
Ako su istovremeno odabrana podkonta i njima nadređena glavna konta ili grupe (koje već sadrže zbir tih podkonta), prikazani ukupan iznos biće označen **crvenom bojom**, kako bi se upozorilo da zbir nije ispravan zbog preklapanja vrednosti.
:::

**Ukupno za detaljna konta**: prikazuje zbir isključivo za podkonta koja se nalaze na najnižem hijerarhijskom nivou.

**Ukupno tabele**: prikazuje zbir svih redova prikazanih u tabeli rezultata. Ukoliko tabela sadrži i podkonta i njihove nadređene grupe ili konta, ukupni iznos predstavlja zbir svih prikazanih redova, pa zbog višestrukog uključivanja istih vrednosti nema analitički značaj.