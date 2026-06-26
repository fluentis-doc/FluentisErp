---
title: Automatsko generisanje računa
sidebar_position: 4
---

:::note NAPOMENA
Sledeća uputstva odnose se na postupak automatskog generisanja izlaznih računa kreiranih radi slanja podataka o nabavkama putem e-računa, koji su se ranije prijavljivali kroz ukinutu prijavu poznatu kao **Esterometro** (Italija).
:::

Prilikom čuvanja računovodstvenog knjiženja Fluentis automatski generiše dokumente definisane u knjigovodstvenom obrascu: administrativni (knjigovodstveni) prenos za obračun PDV-a i **samofakturu** izlaznog računa.

Nakon zatvaranja obrasca prikazuju se dve poruke: jedna za otvaranje automatski generisanog knjigovodstvenog prenosa, a druga za pregled automatski generisanog izlaznog računa.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation1.png)

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation2.png)

U automatski generisanom obračunu u polju izdavaoca nalazi se dobavljač, dok su u referencama prikazani broj i datum dobavljačevog računa.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation3.png)

Račun je već odštampan i proknjižen jer postoji automatski knjigovodstveni prenos koji ga evidentira.

U stavkama dokumenta nalazi se nešifrirani artikal sa opisom preuzetim iz opisa izvornog knjigovodstvenog knjiženja, zajedno sa PDV osnovicom i stopom PDV-a odgovarajuće stavke.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation4.png)

Unutar dokumenta moguće je odmah promeniti status slanja računa prema SDI sistemu.

Ako se naknadno izmeni izvorno knjiženje, sistem će automatski ponovo izračunati i knjigovodstveni prenos i automatski generisani izlazni račun, pod uslovom da za izlazni račun još nije generisana SDI datoteka.

Automatsko ažuriranje neće biti izvršeno ni ako je u knjigovodstvenom obrascu aktivirana opcija **Ne preračunavaj automatsko knjiženje**.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation5.png)

Poništavanjem izvornog knjiženja (odnosno knjigovodstvene operacije koja ga je kreirala) automatski generisani izlazni račun biće obrisan, pod uslovom da za njega nije već generisana SDI datoteka.

## Posebni slučajevi

### A) Mešoviti ulazni račun

Kod mešovitog ulaznog računa, gde jedan deo podleže domaćem **reverse charge** postupku, a drugi ne, knjigovodstveno knjiženje sadržaće jednu ili više PDV stavki sa aktiviranom oznakom **Isključi iz automatskih obrazaca**.

Takve stavke neće biti uključene ni u automatski knjigovodstveni prenos ni u automatski generisani izlazni račun.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation6.png)

### B) Intra nabavka sa delimičnim odbitkom

Kod **intra** nabavke sa delimičnim pravom na odbitak moguće je u polju **PDV za automatske obrasce** odrediti stopu PDV-a koja će se koristiti u automatskom knjigovodstvenom prenosu.

Ista stopa PDV-a koristiće se i u automatski generisanom izlaznom računu.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation7.png)

### C) Nabavka usluga iz inostranstva

U ovom slučaju nabavka se evidentira pomoću obrasca bez PDV-a.

U tom obrascu moguće je definisati automatsko generisanje izlaznog računa tipa **TD17**, bez kreiranja automatskog knjigovodstvenog prenosa.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation8.png)

Kod dobavljača je potrebno definisati stopu PDV-a koja će se koristiti na automatski generisanom izlaznom računu.

U knjigovodstvenom knjiženju dobavljač mora biti naveden u zaglavlju dokumenta zajedno sa ukupnim iznosom fakturisane usluge.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation9.png)

Pošto obrazac dobavljača ne sadrži automatski knjigovodstveni prenos, već samo vrstu računa koji treba generisati, automatski generisani izlazni račun neće imati aktiviranu oznaku **Obračunato**, kako bi korisnik mogao naknadno da izvrši obračun u modulu prodaje.

## Ostala knjigovodstvena knjiženja

Postupci knjiženja ulaznih računa, knjiženja naknada i evidentiranja podataka iz SDI datoteka za nabavku proveravaju ovu postavku knjigovodstvenog obrasca kako bi automatski generisali izlazne dokumente, na isti način kao i kod ručnih knjiženja.

Kod knjiženja iz SDI datoteke za nabavku, knjigovodstveno knjiženje biće povezano sa odgovarajućom SDI datotekom. U tom slučaju automatski generisani račun sadržaće ne samo broj i datum izvornog računa, već i izvorni SDI protokol.