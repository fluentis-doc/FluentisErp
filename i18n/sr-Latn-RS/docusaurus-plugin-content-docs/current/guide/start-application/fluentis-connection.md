---
title: Pristup sistemu Fluentis
sidebar_position: 1
---

Sistem **Fluentis** osmišljen je tako da obezbedi dosledno korisničko iskustvo na **više platformi**. Interfejs zadržava ujednačenu logiku navigacije nezavisno od platforme na kojoj se koristi, bilo da je reč o **WPF desktop aplikaciji** ili **veb klijentu**. Za mobilne uređaje, odnosno Android uređaje, dostupno je korisničko okruženje prilagođeno mobilnoj upotrebi, zasnovano na tehnologiji **MAUI**.

Klase, algoritmi i tokovi rada **standardizovani su**, što korisniku omogućava rad u različitim okruženjima, uz razlike isključivo na nivou interfejsa, bez promena u postupcima navigacije ili pristupu glavnim funkcionalnostima.

## WPF desktop klijent

Desktop klijent izrađen je pomoću tehnologije **Windows Presentation Foundation** i kompatibilan je isključivo sa operativnim sistemima zasnovanim na **Windowsu**.

Nakon instalacije WPF klijenta na Windows računar, dvostrukim klikom na odgovarajuću prečicu na radnoj površini pokreće se program **Fluentis**.

Obrazac za prijavu sadrži sledeća polja:

| Polje | Opis |
|---|---|
| Username | Korisničko ime korisnika sistema Fluentis |
| Password | Lozinka korisnika sistema Fluentis |
| ARM Server Endpoint | Adresa ARM servera |
| Single Sign On | Ako je označena, omogućava prijavu putem jedinstvene prijave (Single Sign-On) |

**Single Sign-On (SSO)** omogućava prijavu u Fluentis putem **Active Directory-ja**, bez potrebe za ručnim unosom korisničkog imena i lozinke. Podaci za prijavu automatski se preuzimaju iz trenutne korisničke sesije.

**ARM Server Endpoint** je adresa koja jedinstveno identifikuje ARM server za određenu verziju sistema Fluentis.

:::info
Primer: `server01\Arm804`
:::

## Blazor veb klijent

**Fluentis** je dostupan i u **veb-verziji**, kojoj se može direktno pristupiti putem ažuriranog veb-pregledača. Ovakav način rada obezbeđuje kompatibilnost sa različitim operativnim sistemima, uključujući macOS i Linux, bez potrebe za instalacijom posebne aplikacije. Dovoljno je koristiti noviju verziju veb-pregledača.

Obrazac za prijavu sadrži sledeća polja:

| Polje | Opis |
|---|---|
| Username | Korisničko ime korisnika sistema Fluentis |
| Password | Lozinka korisnika sistema Fluentis |
| ARM Server Endpoint | Adresa ARM servera |

Funkcionalnost **Single Sign-On (SSO)**, koja omogućava automatsko preuzimanje korisnika autentifikovanog u trenutnoj sesiji, nije dostupna. Ipak, moguća je prijava pomoću **domenskog naloga**, ali je potrebno ručno uneti podatke za prijavu u predviđena polja.

## MAUI mobilni klijent

**Fluentis** je dostupan i u **mobilnoj verziji za Android uređaje**, što omogućava pristup aplikaciji i njeno korišćenje direktno putem pametnog telefona.

Obrazac za prijavu sadrži sledeća polja:

| Polje | Opis |
|---|---|
| Username | Korisničko ime korisnika sistema Fluentis |
| Password | Lozinka korisnika sistema Fluentis |
| ARM Server Endpoint | Adresa ARM servera |

Funkcionalnost **Single Sign-On (SSO)**, koja omogućava automatsko preuzimanje korisnika autentifikovanog u trenutnoj sesiji, nije dostupna. Ipak, moguća je prijava pomoću **domenskog naloga**, ali je potrebno ručno uneti podatke za prijavu u predviđena polja.