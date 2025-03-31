---
title: Razlika između otvorenih stavki i glavne knjige
sidebar_position: 4
---

Podaci koje je moguće izdvojiti iz ovog obrasca odgovaraju sadržaju **Ispisa razlike knjigovodstvenog stanja i otvorenih stavki**

Smisao istraživanja je provjeriti razlike (razdvajanja) između knjigovodstvenih stanja i stanja u glavnim knjigama za svakog kupca i dobavljača radi ispravljanja istih. Ove razlike mogu potjecati od pogrešaka u vođenju glavne knjige ili računovodstvenih zapisa (nedostatak usklađenosti između računovodstvenog kretanja i otvaranja stavki ili naplate/plaćanja i zatvaranja stavke).

:::danger VAŽNA NAPOMENA:
U slučaju **vanjskog suradnika**, ako se usvoji kriterij prikazivanja otvorenih stavki bez poreza po odbitku (u parametrima [vrste poreza po odbitku](/docs/configurations/tables/finance/withholding-tax-types)), razlike koje će biti istaknute moraju se zanemariti (i ne smatrati pogreškama), također uzimajući u obzir napomenu o računu da će se ponovno vratiti nakon plaćanja naknade i zatvaranja relevantne stavke.
:::


### **PODRUČJE FILTRA**:

**Konto**: Glavni filtar za izdvajanje samo podkonta kupca ili dobavljača. Bez filtriranja, bit će prijavljena podkonta svih kupaca i dobavljača s razlikama.

**Od/do datuma zapisivanja**: filtriranje datuma računovodstvenog knjiženja

**Isključi zatvorene dospjele vrijednosti**: aktiviranje zastavice zanemarit će dospijeća u zatvorenom stanju.

:::tip **KORISNO**
**Detalji**: aktiviranjem ove oznake rezultati će biti raščlanjeni (umjesto da budu grupirani) ističući moguću razliku za svako pojedinačno računovodstveno kretanje u usporedbi s povezanom stavkom (ili s povezanim plaćanjem u slučaju obračunskog kretanja naplate/plaćanja); Opcija je korisna u kombinaciji s filterom na podkontu određenog kupca ili dobavljača kako bi se analiziralo kako je formirano stanje (na kojim knjigovodstvenim kretanjima) i krenulo u njegovu korekciju.
:::

:::tip **VRLO KORISNO**
**Prikaži samo detaljna konta/zapise s razlikom različitom od nule**: (preporučen) aktivan flag omogućuje da se označe samo podkonta koja imaju razlike koje treba ispraviti, a ne prikazuju se oni koji su točni.
:::

**Grupiraj po valuti tvrtke**: aktivan flag određuje prikaz valutnih kretanja prema valuti poduzeća. 

### **PRIKAZ REZULTATA**:

![](/img/it-it/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance/image1.png)

Za svaki podkonto koji se odnosi na kupca ili dobavljača, ukupni iznosi, odnosno dugovanja i potraživanja prikazani su i za dio računovodstvenih kretanja i za dio glavne knjige i na kraju za računovodstveni i glavni saldo. Dakle, stupac s razlikom.

Na ovaj način također je moguće procijeniti mogući izvor nepodudaranja.

Kao primjer: Ukupni pozitivni račun duga (a time i pozitivan saldo duga) i ukupni račun duga sa nulama u odnosu na podkonto kupca mogu nastati uslijed otvaranja računa za koji nije bilo izvršeno i otvaranje stavki 

---

### **VIDEO TUTORIJALI**

:::important Vidi također
[**VIDEO TUTORIJALI O OTVORENIM DOSPIJEĆIMA**](/docs/video/finance/intro)
:::

