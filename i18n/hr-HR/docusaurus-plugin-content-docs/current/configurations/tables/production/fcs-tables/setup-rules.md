---
title: Pravila postavljanja
sidebar_position: 2
---

La tabella si trova sul percorso **Tablice > Proizvodnja > Tablice F.C.S. > Pravila podešavanja**.

Podaci iz ove tablice koriste se isključivo unutar postupka [F.C.S. Planiranja](/docs/planning/ms-master-scheduling/fcs-scheduling). 

Ova forma omogućuje definiranje pravila za izračun vremena podešavanja obrade koja se odvija na stroju za koji su prethodno definirani [Atributi podešavanja](/docs/configurations/tables/production/fcs-tables/setup-property).       
Jedno pravilo podešavanja može biti definirano putem više zapisa u ovoj tablici.
Svaki zapis omogućuje upravljanje s najviše 10 atributa podešavanja.
Za svaki od atributa definiranih u zapisu, postoji koeficijent množenja (zadano: 1) koji se primjenjuje na vrijednost promjene stanja atributa.
Vrijednosti dobivene množenjem s koeficijentima zatim se obrađuju prema odabranoj vrsti izračuna u zapisu (maksimum, minimum, zbroj, prosjek).
Nakon toga, rezultat se dodatno množi s ukupnim koeficijentom (zadano: 1).
Ako je pravilo definirano kroz više zapisa, konačno vrijeme podešavanja izračunava se kao zbroj rezultata svih zapisa.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja.

**Pretraživanje pravila podešavanja**

Forma se sastoji od područja za filtriranje i prikaza rezultata.
Nakon što postaviš željene filtere, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u mreži.  

**Inserimento Regole attrezzaggio**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e la **Descrizione**.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).