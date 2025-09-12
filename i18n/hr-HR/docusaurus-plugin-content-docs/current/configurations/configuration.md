---
title: Konfiguracija
sidebar_position: 1
---

Područje konfiguracije sastoji se uglavnom od dva elementa: **Tablice** i **Parametri**.

Oba su grupirana prema funkcionalnom području, uz skup općih tablica i parametara koji su potrebni neovisno o funkcionalnom području kojim se korisnik bavi.  

:::danger[Pažnja]
Ako se ovi osnovni podaci ne postave ispravno, korištenje ERP sustava u određenim područjima može biti onemogućeno.  
:::

**TABLICE**: sadrže osnovne podatke koji su potrebni za kreiranje drugih podataka ili dokumenata. Na primjer, tablica Vrste računa sadrži različite tipove računa. Prilikom kreiranja novog računa, potrebno je prethodno odabrati odgovarajući tip iz padajućeg izbornika (combo box).  

**PARAMETRI**: sadrže postavke, opcije ili zadane vrijednosti koje omogućuju ispravno izvođenje automatskih procedura ili generiranje podataka. Ako parametri nisu postavljeni, a posebno ako nije spremljena zadana vrijednost nekog parametra, određene funkcionalnosti mogu ne raditi ispravno.  

:::important[**Fast Start**]
Nakon instalacije Fluentis ERP sustava, prije početka rada moguće je inicijalizirati [**ambiente *Fast Start* okruženje koje je spremno za upotrebu**](/docs/guide/fast-start).

Na poveznici se nalazi popis **tablica** i **parametara** koje ova procedura automatski popunjava.

Ključni uvjet za pokretanje Fast Start procedure je [**Kontni plan**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) (u okviru modula administracija).

Pokretanjem Fast Start procedure kreira se standardni kontni plan. Taj se plan može nadopuniti, izmijeniti opisi konta, ili izbrisati pojedini konti, ali samo ako ti konti već nisu korišteni u drugim podacima koje je procedura generirala (npr. kontni slogovi, modeli za rekategorizaciju bilance i sl.).  
U slučaju da standardni kontni plan nije primjeren poslovnoj stvarnosti poduzeća koje koristi Fluentis, preporučuje se ručna konfiguracija tablica i parametara za odgovarajuća funkcionalna područja. Također je potrebno ručno kreirati ili uvoziti željeni kontni plan.  
Na prethodno navedenoj poveznici dostupna je i**kontrolna lista** za detaljnu provjeru najvažnijih tablica.  
:::
