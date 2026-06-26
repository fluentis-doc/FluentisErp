---
title: Saldo po podkontima
sidebar_position: 5
---

Ovaj izveštaj prikazuje **dugovni promet**, **potražni promet** i **saldo** za svaki podkonto.

Moguće je posebno filtrirati konta povezana sa određenim projektom (nalogom).

## SPECIFIČNE OPCIJE IZVEŠTAJA

**Prikaži duguje / potražuje**: opcija je podrazumevano uključena. Ako se isključi, kolone **Duguje** i **Potražuje** neće biti prikazane, već samo kolona **Saldo**.

**Prikaži saldo**: opcija je podrazumevano uključena. Ako se isključi, kolona **Saldo** neće biti prikazana. Napomena: ukoliko su isključene i ova i prethodna opcija, izveštaj će biti prazan i neupotrebljiv.

**Prikaži iznose u valuti**: aktiviranjem ove opcije podkonta će biti grupisana prema valuti, a ukupni iznosi po grupama biće prikazani kako u originalnoj valuti, tako i u protivvrednosti u evrima (ili u valuti preduzeća).

**Prikaži prethodni saldo**: aktiviranjem ove opcije prikazuju se dodatne dve kolone sa početnim stanjem svakog podkonta. Prikazane vrednosti preuzimaju se iz procedure **[Automatsko otvaranje konta](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/search)**.

**Prikaži konta sa saldom 0**: opcija je podrazumevano isključena, pa se podkonta sa saldom **0,00** neće prikazivati. Aktiviranjem opcije i ova podkonta biće uključena u izveštaj.

## KRITERIJUMI GRUPISANJA

**Bez grupisanja**: podaci se neće grupisati.

**Agent**: podkonta koja se odnose na kupce grupišu se prema agentu koji je povezan sa odgovarajućim zapisom. Ukoliko je kupcu dodeljeno više agenata, uzima se poslednji evidentirani agent.

**Zona**: podkonta koja se odnose na kupce grupišu se prema zoni definisanoj u **[Šifarniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)**.

**Agent / Zona**: primenjuje se dvostruko grupisanje – najpre po agentu, a zatim unutar svakog agenta po zoni.

| Funkcija | Značenje |
| --- | --- |
| Pregled | Otvara pregled štampe izveštaja. |
| Štampaj | Štampa izveštaj. |

:::important VIDI TAKOĐE
[**VIDEO TUTORIJALI ZA RAČUNOVODSTVENE IZVEŠTAJE**](/docs/video/finance/intro)
:::