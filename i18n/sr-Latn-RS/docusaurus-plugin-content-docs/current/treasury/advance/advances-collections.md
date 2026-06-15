---
title: Uvod
sidebar_position: 1
---

:::note[Info]
Praksa predfinansiranja (avansiranja) faktura kod banke predstavlja finansijsku operaciju koju preduzeća često koriste kako bi obezbijedila trenutnu likvidnost. Radi se o postupku u kojem se fakture izdate kupcima naplaćuju unaprijed, prije njihovog dospijeća. Na taj način komercijalna potraživanja pretvaraju se u gotovinu, što omogućava efikasnije upravljanje novčanim tokom, pravovremeno izmirenje obaveza i lakše planiranje investicija, bez potrebe čekanja na naplatu od kupaca.

Preduzeće banci dostavlja jednu ili više faktura koje kupci još nisu platili. Banka unaprijed isplaćuje dio vrijednosti fakture, najčešće između 70% i 90%, zadržavajući preostali dio kao garanciju do potpune naplate. Kada kupac plati fakturu, banka zadržava svoju proviziju, a ostatak sredstava prenosi preduzeću.

Sa računovodstvenog aspekta, preduzeće evidentira obavezu prema banci za iznos unaprijed isplaćenih sredstava. Kada kupac izvrši uplatu, zatvara se obaveza prema banci i evidentiraju se troškovi provizija i ostali povezani troškovi.
:::

Pomoću ovog modula Fluentis ERP-a moguće je upravljati listama predfinansiranja faktura koje se dostavljaju banci, uz obračun provizija i kamata, kao i knjiženje prezentacije i konačne naplate.

Prije unosa novih lista predfinansiranja potrebno je prethodno definisati tabelu **TIPOVI AVANSA**.

U ovoj tabeli definišu se dostupni tipovi avansa i pripadajući parametri.

![](/img/it-it/treasury/advance/advances-collections/image01.png)

**Tip / Opis**: slobodan unos šifre i opisa avansa.

**Vrsta obračuna** (šifra / opis): dostupne opcije su **Osnovica** ili **Ukupan dokument**. Ova postavka određuje da li će procenat koji banka predfinansira biti obračunat na osnovu ukupnog iznosa fakture ili samo na poresku osnovicu bez PDV-a.

**Procenat predfinansiranja fakture**: definiše procenat vrijednosti fakture koji će banka predfinansirati.

![](/img/it-it/treasury/advance/advances-collections/image02.png)

**Vrsta preuzimanja**: dostupne opcije su **Dospijeća** ili **Fakture**. Ova opcija kontroliše način prikaza podataka u prozoru za pretragu prilikom kreiranja nove liste avansa, odnosno da li će biti moguće odabrati cijelu fakturu ili pojedinačna dospijeća fakture. Bez obzira na odabrani način rada, sistem u pozadini uvijek upravlja dospijećima.

**Numeracija**: potrebno je definisati numeraciju iz odgovarajuće tabele numeratora za ovu vrstu dokumenta.

**Banka T/R**: (konto/podkonto/opis) određuje podkonto koji će se koristiti za knjiženja povezana sa bankarskim računom.

**Bankarski konto avansa**: konto koji će se koristiti za knjiženje bankarskog predfinansiranja odnosno avansa.

![](/img/it-it/treasury/advance/advances-collections/image03.png)

**Konto pasivne kamate**: konto koji će se koristiti za knjiženje obračunatih kamata.

**Konto provizija**: konto koji će se koristiti za knjiženje bankarskih provizija.