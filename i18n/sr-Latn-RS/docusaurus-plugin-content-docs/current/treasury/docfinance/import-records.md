---
title: Uvoz knjiženja
sidebar_position: 3
---

Ovom procedurom vrši se uvoz datoteke računovodstvenih knjiženja koju je kreirao DocFinance.

Uvoz se izvršava putem Bizlink *Folder Monitor* toka (*stream*).

Datoteka sa knjiženjima za uvoz smešta se u direktorijum koji nadzire servis, a koji će automatski izvršiti njen uvoz.

Tokom ovog procesa sistem kreira odgovarajuća računovodstvena knjiženja, zatvara stavke koje je označio DocFinance i evidentira finansijska kretanja na kontima definisanim u sistemu (računovodstveni predlošci moraju imati isti kod u ERP-u i u *DocFinance*-u).

Rezultat uvoza prikazuje se u donjoj tabeli, dok su prethodno izvršeni uvozi prikazani u gornjoj tabeli. Putem funkcija na alatnoj traci moguće je poništiti uvoz i pregledati detalje eventualnih grešaka nastalih tokom procesa.

:::danger PAŽNJA
Uvoz plaćanja zahteva da se ID otvorene stavke koja treba da bude zatvorena prosledi u *DocFinance* proces. Na osnovu tog identifikatora Fluentis generiše uplatu i povezuje je sa odgovarajućom stavkom.

Ako iz bilo kog razloga ID stavke ne odgovara ID-u koji se nalazi u knjiženju (na primer zbog ručnih izmena izvršenih nakon izvoza stavki koje su zatim obrađene u *DocFinance*-u), uplata će biti kreirana, ali neće biti pravilno povezana sa stavkom koja će ostati otvorena.

U tom slučaju moguće je izvršiti kompenzaciju otvorenih stavki ili pronaći tako uvezene uplate, obrisati ih i ručno ih ponovo kreirati sa ispravnim povezivanjem odgovarajuće stavke.

Postupak se izvodi tako što se nakon storniranja uplate klikne na dugme **Novo**, zatim **Kreiraj iz stavki/uplata**, a potom izabere stavka koju treba zatvoriti.
:::

:::note Info
[Link ka **DocFinance** tehničkoj specifikaciji](/pdf/it-IT/TRACCIATI_DocFinance_28_Luglio_2021.pdf)
:::