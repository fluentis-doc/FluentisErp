---
title: Nova Intervencija
sidebar_position: 2
---

Podaci koje treba unijeti su:

**Vrsta intervencije**: sadrži [vrstu Intervencije](/docs/configurations/tables/project-management/intervention-type/);

**Kupac**: sadrži klijenta koji je primatelj intervencije;

**Godina/Broj/Datum**: sadrži podatke o intervenciji;

**Resurs**: sadrži resurs koji će obaviti intervenciju.

Postoje određene kartice.

**Kartica Zaglavlje**

Ova kartica sadrži opće informacije o intervenciji, poput **Valute**, **Tečaja**, eventualnih **Napomena**, **Pregleda Aktivnosti**. Postoji i mogući povezani **Cjenik**, oznaka koja označava je li intervencija **Naplativa** i **Status intervencije**: prema zadanim postavkama, ovo će polje biti postavljeno na **Umetnuto**; ako se status promijeni u **Provjereno**, a Tip intervencije ima oznaku **Automatsko stvaranje aktivnosti**, aktivnosti će se automatski stvoriti u **Izvještaju o aktivnostima za projekt**. 
Zaglavlje također sadrži dodatne kartice.

**Kartica Putni troškovi za fakturiranje**

Sadrži eventualne Troškove putovanja, identificirane prema:

**Vrsta troška**: sadrži vrstu troška s odgovarajućim **Opisom**;    
**KM**: contiene i chilometri percorsi con il relativo **Costo Km**;    
**Satnica**: moguće je alternativno navesti satnicu;   
**Datum/Vrijeme polaska**: sadrži datum i vrijeme polaska;   
**Datum/Vrijeme dolaska**: sadrži datum i vrijeme dolaska;   
**Putni sati**: pokazuje sate putovanja izračunate na temelju datuma i vremena; 
**Iznos paušala**: moguće je navesti fiksni iznos;  
**PDV**:pokazuje PDV koji treba primijeniti;      
**Ukupni trošak**: polje izračunato na temelju prethodno unesenih podataka koje sadrži ukupni trošak troškova;    
**Na računu**: pokazuje treba li trošak biti prikazan na računu;      
**Importo spesa**: è possibile indicare direttamente l’importo dell’onere, per esempio nel caso si trattasse del rimborso di un pasto;     
**Datum troška**: datum na koji treba knjižiti trošak;     
**Način plaćanja**: sadrži vrstu plaćanja s odgovarajućim **Opisom**;     
**Za povrat**: ova zastava označava je li trošak za povrat.

**Kartica Usluge**

Sadrži popis usluga predviđenih intervencijom. Svaki redak sadrži šifrirane podatke o usluzi i povezane podatke o Datumu početka i završetka, Vremenu početka i završetka, Stvarno utrošenom vremenu, Količini, Iznosu itd. Mogu se dodati dodatne informacije redcima u donjoj kartici **Ukupno servisi**, poput Cjenika, Prometa prodaje, Kategorije aktivnosti itd.

Postoje još dvije dodatne kartice: **Povezani dokumenti** i **Dodatni Podaci**, koje se mogu slobodno popuniti.

**Kartica Materijali**

Ova kartica sadrži materijale korištene u intervenciji, koji se mogu pojaviti jer su povezani s prethodno unesenim Uslugama ili ih se može slobodno popuniti. Materijali sadrže povezane podatke poput Šifre artikla i odgovarajućeg Opisa, Količine, Cijene itd. 
Odabirom reda materijala moguće je popuniti kartice ispod: **Ukupno materijali** (koje sadrže podatke poput povezanog Skladišta, Cjenika ili mogućih Popusta) i **Dodatni Podaci**. 

Specifične opcije Ribbon trake uključuju:

![](/img/neutral/common/delete.png) Izbriši materijale: briše odabrane materijale;

![](/img/neutral/common/new.png) Novi materijal: dodaje novi redak materijala;

![](/img/neutral/common/view-material.png) Prikaz materijala bez usluga: prikazuje samo materijale bez povezanih usluga;

![](/img/neutral/common/view-material.png) Prikaz materijala povezanih s uslugama: prikazuje samo materijale povezane s uslugama;

![](/img/neutral/common/view-material.png) Prikaz svih materijala: prikazuje sve materijale.

![](/img/neutral/common/delete-discount.png) Izbriši rabat materijala: briše popuste povezane s odabranim materijalom.

**Kartica Sažetka**

Ova kartica sadrži Sažetke intervencije, koje možete pregledavati. Također možete unijeti eventualne konačne troškove, naznačujući Vrstu, iznos, prisutnost Na fakturi s odgovarajućom oznakom i PDV-om. Ovi podaci će izmijeniti polja s desne strane.

Također možete dodati konačne Napomene.


