---
title: Pravila postavljanja
sidebar_position: 2
---

La tabella si trova sul percorso **Tablice > Proizvodnja > Tablice F.C.S. > Pravila postavljanja**.

Podaci iz ove tablice koriste se isključivo unutar postupka [F.C.S. Planiranja](/docs/planning/ms-master-scheduling/fcs-scheduling). 

Ova forma omogućuje definiranje pravila za izračun vremena postavljanja obrade koja se odvija na stroju za koji su prethodno definirani [Atributi postavljanja](/docs/configurations/tables/production/fcs-tables/setup-property).       
Jedno pravilo postavljanja može biti definirano putem više zapisa u ovoj tablici.
Svaki zapis omogućuje upravljanje s najviše 10 atributa postavljanja.
Za svaki od atributa definiranih u zapisu, postoji koeficijent množenja (zadano: 1) koji se primjenjuje na vrijednost promjene stanja atributa.
Vrijednosti dobivene množenjem s koeficijentima zatim se obrađuju prema odabranoj vrsti izračuna u zapisu (maksimum, minimum, zbroj, prosjek).
Nakon toga, rezultat se dodatno množi s ukupnim koeficijentom (zadano: 1).
Ako je pravilo definirano kroz više zapisa, konačno vrijeme postavljanja izračunava se kao zbroj rezultata svih zapisa.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja.

**Pretraživanje pravila postavljanja**

Forma se sastoji od područja za filtriranje i prikaza rezultata.
Nakon što postaviš željene filtere, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u mreži.  

**Unos pravila za postavljanje**

Za unos novih šifri potrebno je kliknuti na prvi prazan redak u mreži ili pritisnuti tipku **Novo**. 

Za novi zapis obavezno je unijeti barem one podatke koje sustav zahtijeva: **Šifra** i **Opis**.

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).