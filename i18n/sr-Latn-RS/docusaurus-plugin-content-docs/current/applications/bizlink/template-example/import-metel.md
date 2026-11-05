---
title: Uvoz METEL cenovnika
sidebar_position: 6
---

**BizLink** omogućava uvoz METEL cenovnika. Za ovaj uvoz dostupna su dva toka. Korisnik treba samo da konfiguriše konektor za izvršavanje uvoza.

:::danger[Dužina datoteke]
Fluentis podržava samo dve vrste datoteka: one dužine 178 i 233 znaka!
:::

:::danger[Format datoteke]
Fluentis podržava samo datoteke u ANSI formatu!
:::

:::tip[Obrada datoteke u neispravnom formatu]
Ako datoteka ne ispunjava navedena dva uslova, BizLink će je premestiti u fasciklu obrađenih datoteka, a u dolaznim dokumentima neće zabeležiti ništa jer će datoteku odbaciti.
:::

### Preduslovi

- Instalirana i aktivna usluga BizLink.
- Važeći METEL cenovnik (datoteka u TXT formatu).

:::tip[Zvanična stranica METEL-a]
U slučaju bilo kakvih nedoumica u vezi sa datotekom, posetite zvaničnu stranicu: [https://listinipubblici.metel.it/](https://listinipubblici.metel.it/), na kojoj je dostupna funkcionalnost „Verifica Listino” (Provera cenovnika).
:::

### Pregled parsera i tokova

:::note[Napomena]
U ovom odeljku opisani su i objašnjeni tokovi koji su već dostupni u Fluentisu. U sledećem odeljku objašnjeno je kako da konfigurišete konektor i izvršite uvoz.
:::

#### Parser

Za METEL se koristi parser pod nazivom `FluentisEDIExtendedParser`.

![](/img/it-it/applications/bizlink/import-metel/1.png)

U okviru njega nalaze se dva objekta parsera: jedan za datoteke dužine 178 znakova, a drugi za datoteke dužine 233 znaka.

![](/img/it-it/applications/bizlink/import-metel/2.png)

Uzmimo za primer objekat parsera za datoteku dužine 233 znaka i pogledajmo kako se uvozi svako polje i na kojoj se poziciji nalazi u datoteci.

Ovo može biti korisno u slučaju grešaka pri uvozu jer na osnovu svojstva koje sadrži grešku možemo utvrditi na kojoj se poziciji u datoteci nalazi odgovarajući podatak.

![](/img/it-it/applications/bizlink/import-metel/3.png)

#### Tok

Za METEL je dostupan i tok pod nazivom `METEL`.

![](/img/it-it/applications/bizlink/import-metel/4.png)

Taj tok sadrži operaciju pod nazivom `FLOW_OP_MetlPriceList`.

![](/img/it-it/applications/bizlink/import-metel/5.png)

Navedena operacija sadrži dva dokumenta toka koji se razlikuju prema broju znakova u datoteci.

![](/img/it-it/applications/bizlink/import-metel/6.png)

Dokument toka zatim određuje koji će se objekat parsera koristiti za obradu datoteke.

![](/img/it-it/applications/bizlink/import-metel/7.png)

### Kreiranje konektora

Otvorite **BizLink > Konektori** i kliknite na **Novo**.

![](/img/it-it/applications/bizlink/import-metel/8.png)

Zatim podesite sledeće vrednosti:

- Šifra
- Opis
- Tip konektora = **Folder Monitor**
- Partner
- Tok
- Operacija toka
- Dokument toka (u zavisnosti od broja znakova u datoteci koju želite da uvezete)
- **Managed by Authentication Service**

Na kraju podesite putanje fascikli:

- **Incoming**: fascikla u koju će biti smeštena datoteka za obradu.
- **Processed**: fascikla u koju će usluga premestiti datoteku ako je uspešno uvezena.
- **Failed**: fascikla u koju će usluga premestiti datoteku ako tokom obrade dođe do grešaka.

![](/img/it-it/applications/bizlink/import-metel/9.png)

:::tip[Obrada obe vrste datoteka]
Za obradu obe vrste datoteka potrebno je kreirati dva različita konektora, svaki sa odgovarajućim dokumentom toka.

Pored toga, fascikla **Incoming** mora biti različita za svaki konektor. Fascikle **Failed** i **Processed** mogu biti zajedničke.
:::

### Testiranje uvoza

:::danger[Pažnja]
U slučaju grešaka ili ponovnog uvoza iste datoteke potrebno je ponovo pokrenuti uslugu BizLink jer ona ne može da obradi dokument sa istim nazivom kako bi se izbegli duplikati. Ponovnim pokretanjem usluge uklanja se ovo ograničenje.
:::

Da biste testirali uvoz, proverite da li je usluga aktivna, kopirajte TXT datoteku u fasciklu **Incoming** i sačekajte nekoliko sekundi.

U odeljku **Dolazni dokumenti** aplikacije BizLink pojaviće se red sa rezultatom uvoza.

![](/img/it-it/applications/bizlink/import-metel/10.png)