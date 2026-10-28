---
title: Parametri bankovne potvrde
sidebar_position: 5
---

Parametri modula bankarskih potvrda (Ri.Ba) nalaze se na putanji **Parametri > Riznica (Trezor)**.

U odgovarajućim parametrima moguće je unapred definisati podrazumevane vrednosti koje će se predlagati u postupcima modula. Konkretno:

**Putanja za kreiranje Ri.Ba datoteka**: podešavanje podrazumevane fascikle za kreiranje elektronske datoteke sa podacima o bankarskim potvrdama. Preporučuje se kreiranje zajedničke mrežne fascikle na serveru kako bi joj se moglo pristupiti sa svih radnih stanica koje koriste ovaj postupak.

**Podaci o kupcu**: naziv aktivnog preduzeća koji će se uneti u CBI datoteku za predaju banci.

**Zadati opis potraživanja**: moguće je definisati tekst koji će se uneti u datoteku kao opis dokumenta na osnovu kojeg se izdaje Ri.Ba, koristeći kodove navedene u zagradama. Na primer, tekst može biti u obliku „Fakt. br. (2) od (3)”.

**Dodaj završni kontrolni znak**: neki programi za elektronsko bankarstvo zahtevaju završni prelazak u novi red u datoteci. Aktivirajte ovu opciju ako je to potrebno.

**Bez reference za uvoz neplaćenih stavki**: neki programi za elektronsko bankarstvo omogućavaju automatsko ažuriranje šifarnika na osnovu podataka unetih u Ri.Ba datoteku. Polje koje se koristi u postupku uvoza neplaćenih stavki može da uzrokuje stalno ažuriranje šifarnika. To se može sprečiti aktiviranjem ove opcije, ali tada više neće biti moguće koristiti sam postupak uvoza neplaćenih stavki.

**Upravljanje drugim opisom**: ako je ova opcija aktivirana, opis kupca u datoteci sastojaće se od prvog i drugog opisa.