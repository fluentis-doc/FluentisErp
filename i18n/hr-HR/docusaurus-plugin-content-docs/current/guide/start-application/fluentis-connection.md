---
title: Pristup Fluentisu
sidebar_position: 1
---

Sustav **Fluentis** osmišljen je kako bi osigurao dosljedno korisničko iskustvo na **više platformi**. Sučelje zadržava ujednačenu logiku navigacije neovisno o platformi na kojoj se koristi, bilo da je riječ o **WPF desktop aplikaciji** ili **web klijentu**. Za mobilne uređaje, odnosno Android uređaje, dostupno je sučelje prilagođeno mobilnoj upotrebi, temeljeno na tehnologiji **MAUI**.

Klase, algoritmi i tijekovi rada **standardizirani su**, što korisniku omogućuje rad u različitim okruženjima uz razlike isključivo na razini sučelja, bez promjena u postupcima navigacije ili pristupu glavnim funkcionalnostima.

## WPF desktop klijent

Desktop klijent izrađen je pomoću tehnologije **Windows Presentation Foundation** i kompatibilan je isključivo s operacijskim sustavima temeljenima na **Windowsu**.

Nakon instalacije WPF klijenta na Windows računalo, dvostrukim klikom na odgovarajući prečac na radnoj površini pokreće se program **Fluentis**.

Obrazac za prijavu sadržava sljedeća polja:

| Polje | Opis |
|---|---|
| Username | Korisničko ime korisnika Fluentisa |
| Password | Lozinka korisnika Fluentisa |
| ARM Server Endpoint | Adresa ARM poslužitelja |
| Single Sign On | Ako je označena, omogućuje prijavu putem jedinstvene prijave (Single Sign-On) |

**Single Sign-On (SSO)** omogućuje prijavu u Fluentis putem **Active Directoryja**, bez potrebe za ručnim unosom korisničkog imena i lozinke. Podaci za prijavu automatski se preuzimaju iz trenutačne korisničke sesije.

**ARM Server Endpoint** adresa je koja jedinstveno identificira ARM poslužitelj za određenu verziju Fluentisa.

:::info
Primjer: `server01\Arm804`
:::

## Blazor web klijent

**Fluentis** je dostupan i u **web-verziji**, kojoj se može izravno pristupiti putem ažuriranog web-preglednika. Ovakav način rada osigurava kompatibilnost s različitim operacijskim sustavima, uključujući macOS i Linux, bez potrebe za instalacijom posebne aplikacije. Dovoljno je koristiti noviju verziju web-preglednika.

Obrazac za prijavu sadržava sljedeća polja:

| Polje | Opis |
|---|---|
| Username | Korisničko ime korisnika Fluentisa |
| Password | Lozinka korisnika Fluentisa |
| ARM Server Endpoint | Adresa ARM poslužitelja |

Funkcionalnost **Single Sign-On (SSO)**, koja omogućuje automatsko preuzimanje korisnika autentificiranog u trenutačnoj sesiji, nije dostupna. Ipak, moguća je prijava pomoću **domenskog računa**, ali je potrebno ručno unijeti podatke za prijavu u predviđena polja.

## MAUI mobilni klijent

**Fluentis** je dostupan i u **mobilnoj verziji za Android uređaje**, što omogućuje pristup aplikaciji i njezino korištenje izravno putem pametnog telefona.

Obrazac za prijavu sadržava sljedeća polja:

| Polje | Opis |
|---|---|
| Username | Korisničko ime korisnika Fluentisa |
| Password | Lozinka korisnika Fluentisa |
| ARM Server Endpoint | Adresa ARM poslužitelja |

Funkcionalnost **Single Sign-On (SSO)**, koja omogućuje automatsko preuzimanje korisnika autentificiranog u trenutačnoj sesiji, nije dostupna. Ipak, moguća je prijava pomoću **domenskog računa**, ali je potrebno ručno unijeti podatke za prijavu u predviđena polja.