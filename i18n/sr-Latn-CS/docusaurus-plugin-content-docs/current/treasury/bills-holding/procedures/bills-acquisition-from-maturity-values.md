---
title: Preuzimanje vrijednosnih papira iz dospijeća plaćanja
sidebar_position: 2
---

Obrazac se nalazi u Blagajna > Portfelj dospijeća plaćanja > Postupci > Preuzimanje vrijednosnih papira iz dospijeća plaćanja

Putem ovog obrasca moguće je pokrenuti *čarobnjak* koji istovremeno izvršava::

- Pretragu otvorenih stavki kupaca koje su pogodne za kreiranje dospijeća plaćanja (na primjer, bankovna potvrda)
- Kreiranje dospijeća plaćanja (na primjer, bankovna potvrda) čitajući podatke iz stavke
- Knjiženje dospijeća plaćanja koje, zauzvrat, zatvara otvorenu stavku i stvara računovodstvenu promjenu storniranja potraživanja od kupca i odobrenja računa povezanog s vrstom korištenog dospijeća plaćanja.

## Kako automatski kreirati novo dospijeće plaćanja iz otvorenih stavki

1. Upotrijebi gornji dio obrasca za filtriranje pretrage otvorenih stavki koje treba pretvoriti u dospijeća plaćanja (na primjer, bankovne potvrde ili mjenice). 

:::note[Napomena]
U donjem dijelu zone za filtriranje nalaze se određene oznake za pretragu: 

- prema postavci [**grupiranja dospijeća**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) u matičnim podacima kupaca; zadane su aktivne i vidljive obje skupine - s grupiranjem dospijeća u dospijećima plaćanja i bez njega
-  Za prikaz i otvorenih stavki dobavljača (zadano deaktivirano), uz one kupaca (zadano aktivirano)
:::

:::tip[Pažnja]
U ovom su dijelu vidljive **SAMO** računovodstvene stavke povezane s vrstama plaćanja prirode bankovne potvrde ili mjenice.

Ovo je unaprijed postavljen sigurnosni filtar koji je moguće upravljati putem tablice [**Vrste plaćanja**](/docs/configurations/tables/general-settings/payment-types) gdje se svakoj vrsti plaćanja može pridružiti odgovarajuća vrsta dospijeća plaćanja.
:::

2. Odaberite mišem iz središnje mreže stavke koje želiš preuzeti kao dospijeća plaćanja. Na temelju postavki oznake *Grupiraj dospijeća / Grupiraj odobrenja u dospijećima plaćanja*, prisutne u [**Šifarik kupaca**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), i oznake *Grupiraj odobrenja prema datumu dospijeća*, prisutne u [**Parametri popisa vrijednosnih papira**](/docs/configurations/parameters/treasury/bills-portfolio-parameters), stavke će se grupirati (**ako imaju istu banku i datum dospijeća**) ili će se, u suprotnom, uvijek kreirati kao zasebna dospijeća plaćanja.

3. U donjem dijelu obrasca postavljaju se **datum kreiranja podataka** dospijeća plaćanja i **Vrsta računa**.

Sekcija za **Knjiženje** može se unaprijed postaviti unutar parametara modula Portfelj dospijeća plaćanja. Ipak, ovdje ju je moguće ručno uključiti ili isključiti prije nego što se pokrene preuzimanje.

Ako knjiženje nije aktivirano istovremeno s kreiranjem putem ovog obrasca, može se naknadno pokrenuti putem [**odgovarajućeg obrasca**](/docs/treasury/bills-holding/accounting/bills-accounting). Generirana računovodstvena promjena poništava potraživanje prema kupcu, zatvara pripadajuću otvorenu stavku i odobrava račun koji odgovara odabranoj [**vrsti dospijeća plaćanja**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) .

Oznaka  **Grupiranje po kontu računa** izvršava jedno knjiženje, unutar kojeg će biti onoliko redaka koliko je dospijeća plaćanja potrebno proknjižiti.

Oznaka **privremeno knjiženje** generira računovodstvene zapise u obliku privremenih knjiženja.

:::danger[Pažnja]
**Upravljanje preuzimanjem dospijeća plaćanja iz otvorenih stavki** isključuje mogućnost istovremenog preuzimanja iz računa.
:::

4. Pritisnite gumb **Preuzmi** na traci izbornika kako bi pokrenuo postupak.

#### Specifični gumbi

> **Traži**: Pretražuje popis stavki za koje treba kreirati dospijeća plaćanja.

> **Preuzmi** Izvršava kreiranje dospijeća plaćanja za odabrane stavke.

### Prethodni

Nakon što je kreiranje izvršeno, retci će nestati iz mreže u *filtru*, a rezultat će biti vidljiv u kartici *Prethodni*, unutar koje je moguće poništiti operaciju.

Nije moguće poništiti kreiranje dospijeća plaćanja ako su ona već proknjižena ili uključena u platnu listu.

#### Specifični gumbi

> **Traži**: Pretražuje popis izvršenih kreiranja.

> **Poništi preuzimanje**: Ovim se gumbom briše cijelo provedeno preuzimanje, zajedno sa svim povezanim dospijećima plaćanja.

> **Poništi dospijeće plaćanja**: Ovim se gumbom briše kreiranje pojedinačnog odabranog dospijeća plaćanja.