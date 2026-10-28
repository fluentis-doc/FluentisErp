---
title: Parametri bankovne potvrde
sidebar_position: 5
---

Parametri modula bankovnih potvrda (Ri.Ba) nalaze se na putanji **Parametri > Riznica**.

U pripadajućim parametrima moguće je unaprijed definirati zadane vrijednosti koje će se predlagati u postupcima modula. Konkretno:

**Putanja za kreiranje Ri.Ba datoteka**: postavljanje zadane mape za kreiranje elektroničke datoteke s podacima o bankovnim potvrdama. Preporučuje se kreiranje zajedničke mrežne mape na poslužitelju kako bi joj se moglo pristupiti sa svih radnih stanica koje koriste postupak.

**Podaci o kupcu**: naziv aktivne tvrtke koji će se unijeti u CBI datoteku za predaju banci.

**Zadani opis potraživanja**: moguće je definirati tekst koji će se unijeti u datoteku kao opis dokumenta na temelju kojeg se izdaje Ri.Ba, koristeći kodove navedene u zagradama. Primjerice, tekst može biti u obliku „Rač. br. (2) od (3)”.

**Dodaj završni kontrolni znak**: neki programi za internetsko bankarstvo zahtijevaju završni prijelaz u novi redak u datoteci. Aktivirajte ovu opciju ako je to potrebno.

**Bez reference za uvoz neplaćenih stavki**: neki programi za internetsko bankarstvo omogućuju automatsko ažuriranje šifarnika na temelju podataka unesenih u Ri.Ba datoteku. Polje koje se koristi u postupku uvoza neplaćenih stavki može uzrokovati stalno ažuriranje šifarnika. To se može spriječiti aktiviranjem ove opcije, ali tada više neće biti moguće koristiti sam postupak uvoza neplaćenih stavki.

**Upravljanje drugim opisom**: ako je ova opcija aktivirana, opis kupca u datoteci sastojat će se od prvog i drugog opisa.