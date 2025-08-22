---
title: Parametri plaćanja dobavljača 
sidebar_position: 3
---

Parametri modula **Plaćanja Dobavljača** nalaze se u **Parametri > Riznica**.

U parametrima modula Plaćanja dobavljača možete unaprijed postaviti zadane elemente koji će se predložiti u procedurama modula. 

> **Put kreiranja Riba traga**: postavljanje standardnog imenika za kreiranje elektroničkog traga za talijanske bankovne transfere. Preporučljivo je stvoriti dijeljeni mrežni direktorij unutar poslužitelja kako biste mogli pristupiti postupku sa svih stanica  
PAŽNJA: polje je obavezno, ali Fluentis 2015 koristi integrirani sustav upravljanja dokumentima za pohranu .xml datoteke elektroničkog izgleda za. uplatnice. Datoteka se stoga može preuzeti izravno s obrasca uplatnice.  
> **Standard ABI**: postavljanje telematskog formata datoteke prema ABI standardu (preporučeno).  
> **HUB aplikacijski centar**: postavljanje ABI koda mogućeg aplikacijskog centra koji će nastaviti s prijenosom komunikacije (obično je ovo nepotrebno polje).  
> **Umetnite banku prisutnu u registru dobavljača**:  s aktivnom zastavom, nametnut će se upotreba prateće banke umetnute u registar dobavljača (mreža prateće banke) u usporedbi s pratećom bankom definiranom u računovodstvenom zapisu i povezanom s otvorenim stavka, preko mreže Vrste plaćanja u registru. Parametar je vidljiv (i može se povremeno deaktivirati) u postupku automatskog kreiranja plaćanja dobavljača. Međutim, nije vidljivo ako kreirate novu uplatnicu (Plaćanja dobavljača > Kreiraj plaćanje dobavljača) i stoga se u ovom slučaju mora upravljati odavde.  
> **Ref Iban**: postavljanje obveze upravljanja IBAN kodovima: u ovom slučaju neće biti kreiran izgled ako nedostaju Ibani nekih plaćanja u listi.