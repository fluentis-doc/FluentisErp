---
title: Povezivanje centara i projekata/naloga
sidebar_position: 1
---

Obrazac se nalazi na putanji: **Tabele > Kontroling > Analitičko knjigovodstvo > Povezivanje centara/projekata**

:::tip Napomena
Ova tabela namenjena je isključivo preduzećima koja imaju aktiviran *Kontroling*.
:::

Kada preduzeće proizvodi prema projektu/nalogu, analiza ostvarenih vrednosti može biti usmerena na dva načina:

- pojedinačno, na određeni projekat/nalog, naročito kada projekti/nalozi nemaju zajednička obeležja;
- na grupu projekata/naloga izrađenih tokom određenog perioda, kada ti projekti/nalozi imaju obeležja na osnovu kojih se mogu svrstati u istu kategoriju.

U drugom slučaju ova tabela je ključna jer omogućava povezivanje poslovnih centara iz dimenzije *Projekti/Nalozi* sa određenim obeležjem projekata/naloga. Na taj način moguće je vrednovati ukupne podatke prema tim *centrima projekta/naloga*, bez potrebe za analizom svakog pojedinačnog posla.

:::tip Napomena
Ako preduzeće nema potrebu za analizom na širem nivou, konfiguracija ove tabele može se preskočiti i može se koristiti samo jedan *centar projekta/naloga*, označen oznakom *Podrazumevani centar za projekte*. Više detalja dostupno je u tabeli [**CENTRI TROŠKA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers).
:::

Dostupna konfiguraciona polja su:

- **ŠIFRA** povezivanja

:::tip Napomena
**FluentisERP** obrađuje povezivanja prema redosledu šifara. Kada se izabere projekat X, sistem najpre proverava da li prvo povezivanje omogućava određivanje centra koji treba dodeliti redu. Ako centar ne može da se odredi, proverava se drugo povezivanje i tako dalje, sve do prvog važećeg podudaranja.
:::

- **OPIS** povezivanja
- **VRSTA** povezivanja, odnosno objekat u okviru kojeg se traži razlikovno obeležje
- **SVOJSTVO** koje treba uzeti u obzir, a koje zavisi od izbora u prethodnom polju.

Dostupne opcije za ova poslednja dva polja su:

- *Projekat*
  - *Vrsta projekta*
  - *Godina projekta*
  - *Zona projekta*
  - *Država projekta*

- *Kupac*
  - *Vrsta konta*
  - *Konto kupca*
  - *Zona kupca*
  - *Država kupca*
  - *Administrativna kategorija*
  - *Komercijalna kategorija*
  - *Stavka troška*

- *Artikal*
  - *Klasa*
  - *Robna kategorija*
  - *Merna jedinica*
  - *Poreska kategorija*
  - *Obeležje*
  - *Vrsta artikla*

U zavisnosti od izbora, u donjoj mreži biće omogućeno povezivanje centra sa odgovarajućim izabranim elementom.

:::danger UPOZORENJE
Definisanje povezivanja koje se odnosi na *artikle* zahteva sledeće:

- u okviru svakog projekta mora postojati najmanje jedan red sa artiklom koji ima definisanu šifru;
- red nabavke ili prodaje, odnosno uopšteno red analitičkog knjigovodstva koji se knjiži kao direktni trošak ili prihod projekta/naloga, mora biti povezan sa redom artikla koji ima definisanu šifru u okviru projekta. U suprotnom **FluentisERP** neće moći da primeni ovo povezivanje i pokušaće da pronađe sledeće povezivanje.

Na primer, ako bi svaki projekat bio obeležen gotovim proizvodom za prodaju koji pripada različitoj *klasi*, verovatno bi bilo jednostavnije upravljati različitim *vrstama projekta* za svaku klasu nego zahtevati unos artikla u svaki pojedinačni projekat i njegov izbor u svakom povezanom dokumentu.
:::