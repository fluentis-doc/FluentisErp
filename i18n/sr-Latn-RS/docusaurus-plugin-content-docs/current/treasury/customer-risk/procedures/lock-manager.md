---
title: Upravljanje zaključavanjem (Lock Manager)
sidebar_position: 3
---

Obrazac se nalazi na putanji **Blagajna > Rizik kupaca > Procedure > Upravljanje zaključavanjem (Lock Manager)**.

Ova funkcionalnost služi za upravljanje autorizacijama dokumenata koji prelaze odobreni kreditni limit kupca, kao i za ručno blokiranje kupaca nezavisno od raspoloživog kreditnog limita.

Podsećamo da upravljanje blokadama dokumenata zahteva prethodnu konfiguraciju [**matičnih podataka kupca**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) (za kupce koji podležu kontroli kreditnog limita), kao i odgovarajućih tabela [**vrsta prodajnih dokumenata**](/docs/configurations/tables/sales/sales-order-types) (npr. vrste porudžbina, vrste otpremnica i slično), kako bi se definisalo koji dokumenti podležu kontroli i eventualnoj blokadi.

## Kartica Autorizacija

Korisnici sa odgovarajućim ovlašćenjima mogu pregledati listu dokumenata koji su označeni za proveru, blokirani, odobreni ili obrađeni.

U tabeli je moguće promeniti status iz **Blokiran dokument** u **Odobrenje izdato**, čime se omogućava nastavak daljeg toka obrade povezanog dokumenta.

:::tip Informacija
Dvostrukim klikom na red moguće je otvoriti dokument i pregledati sve njegove detalje.
:::

## Kartica Blokada kupaca

Ova kartica omogućava prinudnu blokadu:

- porudžbina,
- otpremnica,
- ili oba tipa dokumenata istovremeno,

za izabrane kupce tokom definisanog perioda blokade.

### Kako blokirati kupca

Na primer, ukoliko kupac ima nenaplaćenu bankarsku menicu ili drugo neizmireno potraživanje, administracija može prinudno blokirati sve poslovne aktivnosti povezane sa tim kupcem.

1. Otvorite obrazac **Upravljanje zaključavanjem (Lock Manager)**.
2. U polju **Opis** izaberite kupca kojeg želite da blokirate.
3. Aktivirajte opcije **Blokada porudžbina** i/ili **Blokada otpremnica** i unesite datum početka i završetka blokade.

:::note Napomena
Za ponovno aktiviranje kupca dovoljno je:

- uneti **datum završetka važenja** blokade kako bi se sačuvao istorijski zapis ili
- obrisati zapis blokade iz sistema.

Sistem automatski evidentira korisnika, kao i datum blokiranja i deblokiranja.
:::

Opcije **Autorizuj porudžbinu** i **Autorizuj otpremnicu** zahtevaju autorizaciju svakog dokumenta bez obzira na raspoloživi kreditni limit.

**Napomene** omogućavaju unos slobodnih beleški vezanih za blokadu ili deblokadu kupca.