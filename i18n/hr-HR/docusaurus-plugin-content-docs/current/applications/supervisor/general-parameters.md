---
title: Opći parametri 
sidebar_label: Opći parametri 
sidebar_position: 1
---

Supervisor omogućuje definiranje parametara koji se uobičajeno koriste pri izvođenju specifičnih aktivnosti, zadataka ili događaja.
Prva podjela među različitim parametrima odnosi se na područje njihove primjene, i razlikujemo:
* *lokalne parametre*
* *Globalne parametre*

Lokalni parametri su operativni i vidljivi unutar specifičnih aktivnosti, zadataka ili događaja, ovisno o tome gdje su definirani.
Globalni parametri su pak operativni i vidljivi unutar svih aktivnosti, zadataka ili događaja te se mogu ponovno koristiti kad god je to potrebno.

Globalni parametri su vidljivi i mogu se konfigurirati otvaranjem izbornika sa strane **Konfiguracija** > **Parametri** > **Supervisor** > **Globalni parametri**

Klikom na globalne parametre otvorit će se obrazac za upravljanje globalnim parametrima pomoću kojeg ih je moguće definirati.  
Konkretno, dostupni su parametri koji se odnose na:
* *Email*
* *Vanjski database*
* *HTML*
* *Općenito*

![alt text](/img/it-it/applications/supervisor/supervisor4.jpg)

> <mark> Parametri Email</mark>  
Odnose se na parametre autentifikacije prema željenom SMTP poslužitelju elektroničke pošte.
* SMTPServer -> radi se o javnoj IP adresi poslužitelja e-pošte ili njegovom hostname-u u slučaju da je konfiguriran DNS poslužitelj.
* FromEmail -> radi se o punoj adresi e-pošte s koje želimo slati poruke, a koja mora biti definirana kao alias unutar poslužitelja e-pošte.
* UseTLS -> radi se o opciji enkripcije korištenoj za razmjenu poruka, što je u većini slučajeva standardna metoda za slanje pošte.
* AuthenticationUser i AuthenticationPassword -> radi se o korisniku definiranom na poslužitelju e-pošte, zajedno s pripadajućom lozinkom.
* SMTPServerPort -> radi se o portu koji koristi SMTP poslužitelj za slanje e-pošte (najčešće 587, 465 ili 25).

> <mark> Parametri Db esterno</mark>:  
Odnose se na mogućnost specificiranja baze podataka izvan one koju trenutno koristi Fluentis.
* Server -> radi se o endpointu SQL Server instance baze podataka.
* Database -> radi se o nazivu baze podataka.
* User i password -> radi se o korisniku (najčešće korisnik sa) kojim se pristupa instanci baze podataka, i pripadajućoj lozinki.

> <mark> Parametri HTML</mark>:  
Odnose se na mogućnost definiranja HTML stilskih elemenata pomoću CSS stilskih listova.

> <mark> Parametri Generali</mark>:  
Odnose se na korisničko ime i lozinku s kojima se izvršava Supervisor.


<!-- 
:::tip Video Tutorial
Na ovoj poveznici možete naći **[video](https://youtu.be/FCcnCDgtLV8)** koja pokazuje gore navedenu proceduru.
::: -->