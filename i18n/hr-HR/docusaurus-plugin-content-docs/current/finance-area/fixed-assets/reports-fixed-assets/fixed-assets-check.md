---
title: Kontrola osnovnih sredstava  
sidebar_position: 4
---

Ovim izvješćem moguće je izvršiti bilancu, tj. provjeru usklađenja, konto po konto, između zapisa u administraciji (računovodstvu) koji se odnose na odabrano sredstvo i stanja knjige osnovnih sredstava. Ukupni iznosi prisutni u modulu osnovnih sredstava uspoređuju se s ukupnim iznosima prisutnim u glavnoj knjizi. 

Rezultat izvješća bit će popis računovodstvenih računa (identificiranih u kategorijama osnovnih sredstava odabranih u obrascu i valoriziranih u modulu osnovnih sredstva) s povezanim ukupnim vrijednostima zabilježenim u dva Fluentis modula, kako bi se olakšala provjera usklađenosti

Obrazac za parametriziranje ispisa sličan je onom kod drugih ispisa dostupnih u modulu osnovnih sredstava. Posebno se ističu 3 polja:  

**Referentni datum**: postavljen je prema zadanim postavkama s današnjim datumom i konačni je datum koji će Fluentis koristiti za traženje podataka unutar modula osnovnih sredstava. U biti, uzimaju se sve vrijednosti osnovnih sredstavakoje su manje ili jednake ovom datumu (dakle sva osnovna sredstva do ovog datuma), ali će se očitati amortizacija u godini samo do ovog datuma.


**Od datuma do datuma**: obavezno kako bi se moglo pokrenuti izvješće, biti će razdoblje pretraživanja podataka unutar računovodstva: za svaki podkonto (osnovno sredstvo, fond, amortizacija) koji se koristi u osnovnih sredstava odabranih kategorija, saldo će se izračunati unutar ovog datumskog raspona. S ciljem provjere stanja na kraju godine, referentni datum se postavi kao 31/12/gggg i raspon kao 01/01/gggg – 31/12/gggg.  

**Flag Detalji operacija**: aktiviranjem ove zastavice kreira se detalj za svaki datum kako bi se razumjelo postoji li relevantno kretanje u  kartici osnovnih sredstava za svaki datum bilježenja. 

Izvješće prikazuje popis računa korištenih u osnovnom sredstvu odabranih kategorija, stupac s vrijednošću dobivenom iz modula osnovnih sredstava, onu iz računovodstva i zatim sve razlike između te dvije vrijednosti

