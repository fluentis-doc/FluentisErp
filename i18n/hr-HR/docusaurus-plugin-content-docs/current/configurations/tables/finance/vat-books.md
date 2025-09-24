---
title: Knjige PDV-a
sidebar_position: 20
---

Putanja forme: **Konfiguracija > Tablice > Administracija > Knjige PDV-a**


:::tip[FAst Start]
Na ovu tablicu utječe procedura [**Fast Start**](/docs/guide/fast-start)

slučaju ručne konfiguracije potrebno je slijediti kontrolni popis na poveznici.

Knjige PDV-a kreirane pomoću Fast Start-a već su spremne za upravljanje:

- Kupnje i prodaje u Italiji
- Kupnje i prodaje s Reverse Charge-om, uz dodatnu pomoćnu knjigu za prijeboj kupnji
- Kupnje i prodaje unutar EU, uz dodatnu pomoćnu knjigu za prijeboj kupnji
- Kupnje i prodaje izvan EU
- Gotovinske prometne račune (corrispettivi)
- Sažetak za ispis obračuna PDV-a
:::

### Specifične tipke

**Novi**: omogućuje unos nove knjige PDV-a.  
**Unos godine**: omogućuje unos nove godine za knjigu PDV-a na kojoj se trenutno nalazite.  
**Obriši**: omogućuje brisanje knjige PDV-a na kojoj se trenutno nalazite.  
**Obriši godinu**: omogućuje brisanje godine knjige PDV-a na kojoj se trenutno nalazite.  
**Pregled**: omogućuje pregled ispisa.  
**Ispis**: omogućuje ispis.  
**Poništi konačne ispise**: omogućuje poništavanje konačnih ispisa knjiga PDV-a. Otvara se dijalog u kojem se odabire knjiga i razdoblje koje želite poništiti.  
:::

### Prvi odjeljak 

**Šifra**: alfanumerička šifra koja identificira knjigu PDV-a.

**Opis**: opis knjige PDV-a koji se obično ispisuje u službenim izvještajima.

**Vrsta knjige**: unaprijed definirana tipologija knjige PDV-a. Potrebno je obratiti pažnju na ispravno postavljanje, primjerice kod knjiga koje primaju prijeboj za unutarzajamne kupnje (intra) ili reverse charge, koje će biti postavljene na Prodaje, te ispravno razlikovati slučajeve kupnji/prodaja u suspenziji poreza i posebne režime prema čl. 74-ter DPR 633/72.

**Kontrola protokola**: postavljanje ove opcije blokira mogućnost konačnog ispisa knjige PDV-a koja ima praznine u protokolima ili nedosljednosti u njihovom redoslijedu.

**Za ventilaciju**: ova opcija zahtijeva da se knjiga PDV-a uključi u postupak ventilacije gotovinskih računa.

**Za obračun**: omogućuje određivanje koje će se knjige PDV-a koristiti u ispisu periodičnog obračuna PDV-a.

**Ref. knjige kupnji**: polje je aktivno samo za knjige prodaje/gotovinskih računa, kako bi se mogla naznačiti knjiga PDV-a kupnji iz koje potječe ventilacija gotovinskih računa.

**Opis**: opis referentne knjige kupnji.

**Numeracija**: omogućuje postavljanje brojača za svaku knjigu PDV-a s uobičajenim standardnim opcijama koje su zajedničke ostalim brojačima u sustavu, umjesto standardne numeracije predviđene za knjige PDV-a. U talijanskoj lokalizaciji ovo se polje ne koristi.

**Opis**: opis povezan s brojačem.

**Vrsta PDV aktivnosti**: padajući izbornik povezan je s tablicom Vrste PDV aktivnosti, gdje je moguće slobodno definirati različite tipove aktivnosti u svrhu PDV-a (npr. "Proizvodnja" ili "Nekretnine"), kojima se može pridružiti postotak Pro Rata odbitka PDV-a. Dostupna je i opcija za označavanje glavne aktivnosti, na kojoj će se totalizirati vrijednosti u obračunu PDV-a.

**Opis**: opis vrste PDV aktivnosti

### Drugi odjeljak

Omogućuje postavljanje brojača protokola za svaku poslovnu godinu u polju Početni PDV protokol.

**Godina**: referentna godina.

**Početni PDV protokol**: početni PDV protokol za referentnu godinu.

**Zadnji PDV protokol**: omogućuje pregled koji je zadnji PDV protokol ispisan kao konačan u samoj knjizi.

**Datum zadnjeg ispisa**: datum izvršenja zadnjeg konačnog ispisa.

**Zadnja ispisana stranica**: zadnji broj stranice ispisane u konačnoj verziji.

:::tip Napomena
Ispis ove tablice omogućuje pregled zadnjeg razdoblja koje je u cijelosti ispisano kao konačno za svaku knjigu PDV-a i godinu.
:::

:::important Vidi također
[**VIDEO TUTORIJALI O ADMINISTRATIVNIM TABLICAMA**](/docs/video/finance/intro)
:::