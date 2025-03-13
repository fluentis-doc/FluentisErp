---
title: Parametri necesar materiale
sidebar_position: 7
tags: [Necesar materiale]
---

Conține parametrii care se referă la setările principale din aria producției.

**Prima zi din săptămână pentru calcul capacitate productivă**: reprezintă ziua care trebuie să fie considerată ca fiind prima zi din săptămână în [Calendarul Capacităților productive](/docs/configurations/tables/production/factory-calendar), deci în calendarul Centrelor de lucru. De obicei se inserează luni.

**Ultimul ordin planificat utilizat în anul în curs**: reprezintă ultimul număr progresiv utilizat în anul în curs pentru ordinele planificate.

**Culori fond**: permite alegerea culorilor pentru diversele tipuri de ordine: de achiziții, de producție sau in SL, în timp ce secțiunea **Culori text** permite alegerea culorii textului pentru diversele tipuri de ordine: *în întârziere* și/sau *expirate*.

## Parametrii pentru lansare ordine planificate  

În această secțiune utilizatorul poate insera tipul cererii de achiziții și tipul ordinului în SL care trebuie să fie generate automat în timpul lansării ordinelor planificate de achiziții și sistem lohn.  

**Control terț obligatoriu pentru fazele externe**: dacă este activ, în cazul în care terțul nu este inserat, acesta va fi semnalat cu **Culoare text linie ordin** inserat dedesupt.  

**Gestionare simplificată producție**: este obsolete și este utilizată doar în versiunile mai vechi.

**Menține legătura între ordinele unei comenzi**: dacă este activ, permite, folosind și parametrii imediat succesivi, să se stabilească că atunci când se modifică manual data unui nou ordin planificat, procedura să efectueze modificarea și în ordinele planificate asociate.

**Control materiale obligatoriu**: activează controlul prezenței sau nu a materialelor în gestiune și, în baza disponibilității, vor fi evidențiate cu culori diferite (**Coloare fond linie ordin**: *Complet/Parțial/Absent*). În plus, se poate insera în **Tip control pe** dacă acesta trebuie să fie făcut pe stoc sau pe disponibilitatea materialului.

**Lansare ordine de producție în execuție**: dacă este activ, permite ca ordinele de producție generate cu procedura de lansare ordine planificate de producție să fie create deja cu statusul *Executive* și deci nu cer o procedură ulterioară de lansare.

**Vizualizare în format arbore a ordinelor** permite afișarea, în partea inferioară a ferestrei de *Căutare ordine planificate*, unui arbore care leagă elementele unei comenzi de producție, pe baza legăturilor listelor componentelor implicate în planificarea acelei comenzi.
**Numero giorni per il calcolo disponibilità**: indica fino a quanto spingersi avanti per la valutazione del calcolo della disponibilità, non considerando ordini e fabbisogni che superano quella data.

**Data utilizării materialelor în faza descărcării materialelor**: dacă este activ, data utilizării materialului indicată în ordinele planificate va fi egală cu cea mai mare dată de început dintre toate fazele, ceea ce înseamnă că va fi egală cu data de început a ultimei faze. Dacă acest flag nu este activ, data utilizării materialului indicată în ordinele planificate va fi egală cu data de început a ordinului, adică data de început a primei faze.

**Zile avans rezervare materiale**: valoarea inserată permite anticiparea cu acest număr de zile a disponibilității materialului în ceea ce privește începerea prelucrării(atât în ordiniele planificate de producție, cât și în ordiniele de producție), pentru a permite logisticii să aducă materialul la timp în producție.  
Acesta este luat înconsiderare de următoarele proceduri: toate planificările "cel mai devreme", "cel mai târziu", "pe capacitate finită", "MRP", "Completare date ordine" atât în ordiniele planificate, cât și în ordiniele de producție, "Recalculează dată începere" atât în ordiniele planificate de producție, cât și în ordiniele de producție, toate procedurile CRP ("Gantt", "Capacitate centre de lucru" și "Secvență faze") care operează la schimbarea datei început sau sfârșit a fazei ordinului.

**Zile istoric M.R.P. de păstrat**: permite definirea perioadei, în zile, pentru care rezultatele procesărilor M.R.P. vor fi menținute în istoric. Când o procesare depășește numărul de zile specificat în acest câmp, aceasta va fi eliminată din istoric la următoarea procesare M.R.P. Lăsând câmpul gol, nicio procesare nu va fi ștearsă din istoric.  

## Gestiuni pentru programare comenzi 

Tabelul este o simplă vizualizare a listei de gestiuni pentru care trebuie verificată disponibilitatea. Această listă este setată în *Calcul disponibilitate*, aflat în secțiunea *Utilități*.
## Parametri Gantt  

Permite introducerea parametrilor impliciți pentru gestionarea form-ului Gantt (*Tip simulare Gantt* și *Tip simulare Snapshot*).  

## Parametri Calcul Fezabilitate  

Permite introducerea indicațiilor pentru activarea și vizualizarea **Fezabilității** fazelor de producție.  

În versiunea actuală a produsului, activarea este posibilă doar în *Secvență faze*. În versiunile viitoare, vor fi incluse și alte proceduri.  

Este posibilă activarea controlului fezabilității:   
- **Consideră Materiale**: activează butonul *Detaliu Fezabilitate Material* și câmpul *Fezabilitate Materiale* din tabelul procedurilor active în secțiunea **Calcul fezabilitate aplicabil în**;  
- **Consideră Faze Anterioare**: activează butonul *Detaliu Fezabilitate Faze* și câmpul *Fezabilitate Faze* din tabelul procedurilor active în secțiunea **Calcul fezabilitate aplicabil în**.  

## Calcul fezabilitate de aplicat în  

Permite activarea fezabilității pentru procedurile individuale:  
- Secvența faze    
- Capacitate centre de lucru  
- Lansare comenzi planificate  
- Lista de ieșiri materiale  
- Filtrare comenzi de producție  

## Culori pentru calcul fezabilitate  

Se pot seta culori care evidențiază diverse informații despre disponibilitatea materialelor utilizate:  

- *Material indisponibil*: indică faptul că niciun material nu este disponibil, nici măcar parțial;  
- *Material disponibil parțial*: indică faptul că există cel puțin o cantitate parțială dintr-unul dintre materiale, dar nu întreaga disponibilitate necesară;  
- *Material disponibil*: indică faptul că toate materialele sunt disponibile în cantitatea totală necesară;  
- *Material nenecesar*: indică faptul că nu este nevoie de niciun material.  

De asemenea, culorile pot evidenția stadiul fazelor de producție anterioare celei analizate:  

- *Fază anterioară neîncepută*: indică faptul că faza precedentă celei analizate nu a fost începută;  
- *Fază anterioară începută*: indică faptul că faza precedentă celei analizate a fost începută, dar nu finalizată;  
- *Fază anterioară finalizată*: indică faptul că faza precedentă celei analizate a fost finalizată;  
- *Fază începută*: indică faptul că faza analizată a fost începută.  