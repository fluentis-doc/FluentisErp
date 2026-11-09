---
title: Tehničke postavke
sidebar_position: 9
---

Kako bi se ispravno konfigurirala veza između sustava Fluentis i usluge Fluentis Business Hub, potrebno je:

1. Konfigurirati uslugu Fluentis BizLink Tools Service u ARM-u.
2. Dostaviti naziv instance SQL Servera i naziv baze podataka koju je potrebno omogućiti za povezivanje s uslugom Fluentis Business Hub. Ako ti podaci nisu dostavljeni prilikom sklapanja ugovora ili su se promijenili, moguće ih je dostaviti slanjem poruke e-pošte na adresu fatturazione.elettronica@fluentis.com.

**KONFIGURIRANJE USLUGE FLUENTIS BIZLINK TOOLS SERVICE**

Kako bi se ispravno uspostavila komunikacija između sustava Fluentis i usluge Fluentis Business Hub, potrebno je konfigurirati uslugu Fluentis BizLink Tools Service. Ta se usluga automatski instalira s aplikacijskom verzijom 538 i novijima te omogućuje upravljanje povezivanjem s više baza podataka putem jednog BizLink korisnika.

:::tip[NAPOMENA]
Za ispravno upravljanje tehničkim postavkama preporučuje se redovito ažuriranje sustava Fluentis instaliranjem svih zakrpa objavljenih za odgovarajuću verziju.
:::

Za konfiguriranje usluge Fluentis BizLink Tools Service potrebno je:

1. Zaustaviti izvođenje usluge Fluentis BizLink Tools Service (ako je aktivna).
2. U modulu ARM otvoriti stavku izbornika **Veze > BizLink korisnici** kako bi se kreirao korisnik kojem će se pridružiti pojedinačne veze.
3. U tablici **BizLink korisnici** provjeriti postoji li novi korisnik (konfiguriran od verzije 538) **FlConServiceUser** (Effe elle Con Service User), s postavljenom lozinkom **FlConServiceUserPwd** (Effe elle Con Service User Pwd).

   Za korisnika FlConServiceUser potrebno je odabrati veze s bazama podataka u tablici na desnoj strani zaslona. Odabrane veze određuju za koje će baze podataka biti aktivna usluga Fluentis BizLink Tools Service, odnosno na kojim se bazama podataka namjerava omogućiti elektroničko fakturiranje.

4. Ponovno pokrenuti uslugu Fluentis BizLink Tools Service.

Kako bi se provjerilo je li usluga preuzela postavke unesenog korisnika, moguće je pratiti datoteku zapisnika **Fluentis.Bizlink.Tools.Service.Exe.txt**, koja se nalazi u instalacijskoj mapi Fluentis poslužitelja, u podmapi `\Bin\Logs`.

Ako niste sigurni koja je instalacijska mapa sustava Fluentis, u prozoru svojstava iz točke 1 provjerite vrijednost polja **Putanja izvršne datoteke** usluge.

Zapisnik mora sadržavati zapis o pokretanju usluge („Starting service”) te INFO zapise o povezivanju konektora, među kojima je i:

`INFO Fluentis.BizLink.Tools.Service.FluentisBusinessHubInputConnector`

To su konektori koji se odnose na elektroničko fakturiranje.

Ako je prisutan samo redak koji označava pokretanje usluge, to znači da BizLink konektori nisu pronađeni ili da korisnik za povezivanje nije ispravno konfiguriran u ARM-u.

Ako se pojavi zapis vrste ERROR, potrebno je riješiti navedenu pogrešku nakon ažuriranja sustava Fluentis na najnoviju dostupnu zakrpu.

Primjerice, ako je poruka o pogrešci:

„Računalo mora biti pouzdano za delegiranje, a trenutačni korisnički račun mora biti konfiguriran tako da dopušta delegiranje.”

Riječ je o problemu povezanom s načinom na koji Windows upravlja sigurnosnim certifikatima. Problem se može riješiti izmjenom ključa u registru sustava:

1. Pritisnite **Windows + R**.
2. Upišite `regedit` i pritisnite Enter.
3. Otvorite ključ:
   `HKEY_LOCAL_MACHINE\Software\Microsoft\Cryptography\Protect\Providers\df9d8cd0-1501-11d1-8c7a-00c04fc297eb`
4. U mapi kliknite desnom tipkom miša i odaberite **Novo > DWORD vrijednost (32-bitna)**.
5. Preimenujte je u `ProtectionPolicy`.
6. Desnom tipkom miša kliknite `ProtectionPolicy`.
7. Kliknite **Izmijeni**, promijenite vrijednost u polju **Podaci o vrijednosti** na `1` i odaberite osnovu **Heksadecimalno**.

**DOSTAVLJANJE NAZIVA INSTANCE SQL SERVERA I NAZIVA BAZE PODATAKA**

Kako bi se baza podataka jednoznačno identificirala za komunikaciju s uslugom Fluentis Business Hub, potrebno je na poslužiteljima na kojima su instalirani sustavi Fluentis pronaći naziv instance SQL Servera i naziv baze podataka na kojoj se namjerava aktivirati elektroničko fakturiranje.

Te je podatke moguće pronaći izravno u vezi prikazanoj u aplikaciji SQL Server Management Studio.

Druga je mogućnost izvršiti SQL naredbu:

`select @@servername`

na aktivnoj vezi.

Ova je metoda posebno potrebna ako je naziv poslužitelja promijenjen nakon instalacije sustava Fluentis. U tom slučaju SQL Server, unatoč prikazu novog naziva, i dalje zadržava registriran stari naziv.

Navedene podatke potrebno je dostaviti tvrtki Fluentis slanjem poruke e-pošte na adresu fatturazione.elettronica@fluentis.com.

U suprotnom će se prilikom izvršavanja provjere veze s uslugom FBH, u stavci izbornika **Konfiguracija elektroničkog fakturiranja**, prikazati sljedeća pogreška:

„Vjerodajnice su valjane, ali izvršavanje u ovom kontekstu nije dopušteno.”