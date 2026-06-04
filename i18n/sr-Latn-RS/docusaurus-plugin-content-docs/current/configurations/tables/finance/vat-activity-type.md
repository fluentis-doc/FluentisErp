---
title: Vrsta aktivnosti PDV-a
sidebar_position: 22
---

U ovoj tablici moguće je definirati vrste PDV aktivnosti koje provodi poduzeće (ako je primjenjivo) i svakom tipu aktivnosti eventualno pridružiti pro-rata za odbitak PDV-a.

Konfigurirane vrste aktivnosti zatim se povezuju s različitim [**PDV knjigama**](/docs/configurations/tables/finance/vat-books).

Moguće je označiti glavnu aktivnost koja će u ispisima periodičnih PDV obračuna grupirati PDV dugovanja ili potraživanja.

Prilikom ispisa obračuna automatski će se prikazati detalji za svaku pojedinu aktivnost i konačni sažetak.

**Šifra / Opis:** slobodno konfigurabilni za imenovanje unesenog tipa aktivnosti (npr. Proizvodnja, Nekretnine…).

**Pro-rata:** polje za unos postotka odbitka (100% puni odbitak ili niži postotci do 0% ako je odbitak ograničen). Polje ima istu logiku kao opći pro-rata definiran u [**računovodstvenim parametrima**](/docs/configurations/parameters/finance/accounting-parameters) i omogućuje detaljnije podešavanje za svaki pojedini tip aktivnosti.

**Glavna aktivnost:** oznaka koja se postavlja na tip aktivnosti koja se provodi primarno (u smislu prihoda, prema poreznim propisima).