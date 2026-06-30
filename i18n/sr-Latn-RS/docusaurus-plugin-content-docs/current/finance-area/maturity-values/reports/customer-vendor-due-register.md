---
title: Pregled otvorenih stavki kupaca i dobavljača
sidebar_position: 1
---

Iz ovog obrasca moguće je definisati sve potrebne parametre za pokretanje izveštaja otvorenih stavki kupaca i dobavljača.

Obrazac je isti kao i za pokretanje drugih izveštaja zasnovanih na obradi otvorenih stavki, s tim da neka polja možda neće biti korišćena ili neće biti relevantna za ovaj izveštaj.

Na vrhu obrasca nalaze se različiti filteri sa osnovnim podacima:

**![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image01.png)**

**Konto:** glavni filter za podkonta kupaca i dobavljača. Ako nije unet nijedan podatak, izveštaj će biti obrađen za sva konta kupaca i dobavljača. Moguće je uneti samo glavno konto (bez podkonta) kako bi se dobio pregled samo kupaca ili samo dobavljača.

**Od/Do datuma dospeća:** filter prema datumu dospeća koji je sačuvan u otvorenoj stavci (generiše se prilikom kreiranja otvorene stavke prema uslovima plaćanja, osim ako nije ručno izmenjen).

**Status:** filter je podrazumevano postavljen na status **Otvorena stavka** (dostupni su i statusi **Zatvorena stavka** i **Delimično otvorena**), može se promeniti ili ostaviti praznim radi prikaza svih stavki.

**Pozicija:** padajuća lista sa dodatno definisanim statusima otvorenih stavki. U praksi se uglavnom ne koristi.

**Plaćanje:** filter prema načinu plaćanja sačuvanom u otvorenoj stavci (generiše se prilikom kreiranja otvorene stavke prema uslovima plaćanja, osim ako nije ručno izmenjen).

**Šifra dokumenta:** filtriranje prema šifri vrste dokumenta povezane sa otvorenom stavkom (na primer faktura ili knjižno odobrenje).

**Valuta:** filtriranje prema valuti u kojoj su otvorene stavke evidentirane (u izveštaju će biti prikazane i protivvrednosti u evrima).

**Predstavnik:** filtriranje prema agentu povezanom sa stavkama (samo za kupce).

**Banka:** filter prema banci povezanoj sa otvorenom stavkom.

**Projekat:** filter prema projektu povezanom sa otvorenom stavkom.

**Od/Do godine otvorene stavke; Od/Do broja otvorene stavke:** filtriranje prema godini i broju otvorene stavke.

**Odeljenje:** filter prema organizacionoj jedinici preduzeća (koristi se u bazama sa više odeljenja).

### Parametri prikaza

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image02.png)

**Otvorene stavke na datum:** ovo polje je podrazumevano popunjeno prilikom otvaranja obrasca, ali se može izmeniti radi dobijanja pregleda stanja otvorenih stavki na određeni datum.

Primer: ako faktura sa datumom 1. juna otvori stavku koja dospeva 1. jula, a njeno plaćanje bude evidentirano 28. juna, pregled otvorenih stavki sa datumom nakon 28. juna (na primer 30. juna) neće prikazati tu stavku jer je već zatvorena. Ako se, međutim, pregled radi za datum pre 28. juna (na primer 20. juna), stavka će biti prikazana jer je tog datuma još uvek bila otvorena.

**Dospeća i plaćanja po datumima:** kada je opcija uključena, prikazuju se samo otvorene stavke sa datumom otvaranja i datumom plaćanja. Kada je isključena, prikazuju se sve stavke.

**Sintetički prikaz:** kada je opcija uključena, sakrivaju se dodatne kolone koje se odnose na podatke o plaćanju. Kada je isključena, prikazuju se svi detalji.

**Sa računima koji dospevaju:** pošto se nakon knjiženja instrumenata naplate (menice, bankarske doznake i sl.) vrši storno potraživanja od kupca i istovremeno zatvaranje otvorene stavke, aktiviranjem ove opcije datum dospeća se koriguje kako bi bile obuhvaćene i takve stavke koje su formalno zatvorene.

**Preračun valuta:** izborom valute iz padajuće liste sve stavke će biti preračunate u izabranu valutu prema važećem kursu na dan obrade.

### MOGUĆI KRITERIJUMI GRUPISANJA KOJI SE MOGU AKTIVIRATI

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image03.png)

**Napomena:**

- **Naziv preduzeća** = grupisanje na osnovu podataka o kupcu ili dobavljaču.
- **Banka** = grupisanje prema banci plaćanja.
- **Datum dospeća** = grupisanje prema datumu dospeća plaćanja, pri čemu se sve otvorene stavke prikazuju hronološkim redosledom.

Područje **Dani** koristi se isključivo za izveštaj **Izveštaj o dospeću** i nije relevantno za ovaj izveštaj.

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image04.png)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WhWmjPGfF0Y" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>