---
title: Tehnička podešavanja
sidebar_position: 9
---

Da bi se ispravno konfigurisala veza između sistema Fluentis i usluge Fluentis Business Hub, potrebno je:

1. Konfigurisati uslugu Fluentis BizLink Tools Service u ARM-u.
2. Dostaviti naziv instance SQL Server-a i naziv baze podataka koju je potrebno omogućiti za povezivanje sa uslugom Fluentis Business Hub. Ako ti podaci nisu dostavljeni prilikom sklapanja ugovora ili su se promenili, moguće ih je dostaviti slanjem poruke e-pošte na adresu fatturazione.elettronica@fluentis.com.

**KONFIGURISANJE USLUGE FLUENTIS BIZLINK TOOLS SERVICE**

Da bi se ispravno uspostavila komunikacija između sistema Fluentis i usluge Fluentis Business Hub, potrebno je konfigurisati uslugu Fluentis BizLink Tools Service. Ova usluga automatski se instalira sa aplikativnom verzijom 538 i novijim verzijama i omogućava upravljanje povezivanjem sa više baza podataka putem jednog BizLink korisnika.

:::tip[NAPOMENA]
Za ispravno upravljanje tehničkim podešavanjima preporučuje se redovno ažuriranje sistema Fluentis instaliranjem svih zakrpa objavljenih za odgovarajuću verziju.
:::

Za konfigurisanje usluge Fluentis BizLink Tools Service potrebno je:

1. Zaustaviti izvršavanje usluge Fluentis BizLink Tools Service (ako je aktivna).
2. U modulu ARM otvoriti stavku menija **Veze > BizLink korisnici** kako bi se kreirao korisnik kojem će se pridružiti pojedinačne veze.
3. U tabeli **BizLink korisnici** proveriti da li postoji novi korisnik (konfigurisan od verzije 538) **FlConServiceUser** (Effe elle Con Service User), sa podešenom lozinkom **FlConServiceUserPwd** (Effe elle Con Service User Pwd).

   Za korisnika FlConServiceUser potrebno je izabrati veze sa bazama podataka u tabeli na desnoj strani ekrana. Izabrane veze određuju za koje će baze podataka biti aktivna usluga Fluentis BizLink Tools Service, odnosno na kojim bazama podataka se namerava omogućiti elektronsko fakturisanje.

4. Ponovo pokrenuti uslugu Fluentis BizLink Tools Service.

Da bi se proverilo da li je usluga preuzela podešavanja unetog korisnika, moguće je pratiti datoteku zapisnika **Fluentis.Bizlink.Tools.Service.Exe.txt**, koja se nalazi u instalacionoj fascikli Fluentis servera, u podfascikli `\Bin\Logs`.

Ako niste sigurni koja je instalaciona fascikla sistema Fluentis, u prozoru svojstava iz tačke 1 proverite vrednost polja **Putanja izvršne datoteke** usluge.

Zapisnik mora da sadrži zapis o pokretanju usluge („Starting service”) i INFO zapise o povezivanju konektora, među kojima je i:

`INFO Fluentis.BizLink.Tools.Service.FluentisBusinessHubInputConnector`

To su konektori koji se odnose na elektronsko fakturisanje.

Ako je prisutan samo red koji označava pokretanje usluge, to znači da BizLink konektori nisu pronađeni ili da korisnik za povezivanje nije ispravno konfigurisan u ARM-u.

Ako se pojavi zapis vrste ERROR, potrebno je rešiti navedenu grešku nakon ažuriranja sistema Fluentis na najnoviju dostupnu zakrpu.

Na primer, ako je poruka o grešci:

„Računar mora biti pouzdan za delegiranje, a trenutni korisnički nalog mora biti konfigurisan tako da dozvoljava delegiranje.”

Reč je o problemu povezanom sa načinom na koji Windows upravlja bezbednosnim sertifikatima. Problem se može rešiti izmenom ključa u registru sistema:

1. Pritisnite **Windows + R**.
2. Upišite `regedit` i pritisnite Enter.
3. Otvorite ključ:
   `HKEY_LOCAL_MACHINE\Software\Microsoft\Cryptography\Protect\Providers\df9d8cd0-1501-11d1-8c7a-00c04fc297eb`
4. U fascikli kliknite desnim tasterom miša i izaberite **Novo > DWORD vrednost (32-bitna)**.
5. Preimenujte je u `ProtectionPolicy`.
6. Desnim tasterom miša kliknite na `ProtectionPolicy`.
7. Kliknite na **Izmeni**, promenite vrednost u polju **Podaci o vrednosti** na `1` i izaberite osnovu **Heksadecimalno**.

**DOSTAVLJANJE NAZIVA INSTANCE SQL SERVER-A I NAZIVA BAZE PODATAKA**

Da bi se baza podataka jednoznačno identifikovala za komunikaciju sa uslugom Fluentis Business Hub, potrebno je na serverima na kojima su instalirani sistemi Fluentis pronaći naziv instance SQL Server-a i naziv baze podataka na kojoj se namerava aktivirati elektronsko fakturisanje.

Ove podatke moguće je pronaći direktno u vezi prikazanoj u aplikaciji SQL Server Management Studio.

Druga mogućnost je izvršavanje SQL naredbe:

`select @@servername`

na aktivnoj vezi.

Ova metoda je posebno potrebna ako je naziv servera promenjen nakon instalacije sistema Fluentis. U tom slučaju SQL Server, uprkos prikazu novog naziva, i dalje zadržava registrovani stari naziv.

Navedene podatke potrebno je dostaviti kompaniji Fluentis slanjem poruke e-pošte na adresu fatturazione.elettronica@fluentis.com.

U suprotnom će se prilikom izvršavanja provere veze sa uslugom FBH, u stavci menija **Konfiguracija elektronskog fakturisanja**, prikazati sledeća greška:

„Akreditivi su ispravni, ali izvršavanje u ovom kontekstu nije dozvoljeno.”