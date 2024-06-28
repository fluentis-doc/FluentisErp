---
title: Actualizare consum mediu zilnic (ADU)
sidebar_position: 1
---

Această procedură actualizează câmpul **Consum mediu zilnic** din parametrii DDMRP pentru fiecare articol gestionat cu buffer.

Actualizarea are loc conform metodei indicate în parametrii DDMRP ai articolului:


  - 0) nicio actualizare  
  - 1) medie aritmetică a trecutului (se analizează consumurile efective din trecut și toate consumurile au aceeași importanță)  
  - 2) medie ponderată a trecutului (consumurile recente au o importanță mai mare decât cele trecute)  
  - 3) medie aritmetică a viitorului (se analizează tabelul previziunilor de consum zilnic)  
  - 4) medie aritmetică a trecutului și a viitorului (combinarea metodelor 1 și 3)  
  - 5) trecutul ponderat și viitorul aritmetic (combinarea metodelor 2 și 3)

Perioada de analiză luată în considerare este indicată pentru fiecare articol în parametrii DDMRP, în câmpurile **Zile în trecut** și **Zile în viitor**.

În ceea ce privește analiza trecutului, se recomandă utilizarea unei perioade de timp suficient de lungă pentru a fi semnificativă, adică o valoare de câteva ori mai mare decât lead time decuplat (DLT) al articolului. În caz contrar recalcularea ar putea fi prea sensibilă la ultimele variații.

Dacă se alege media aritmetică, calculul va fi puțin sensibil la variațiile aleatoare, dar va percepe noile tendințe de consum cu întârziere.

Dacă se alege media ponderată, calculul va percepe mai rapid noile tendințe de consum, dar va fi mai sensibil la variațiile aleatoare.

În ceea ce privesc previziunile de consum viitoare, acestea trebuie introduse cu suficient avans, cel puțin egal cu lead time-ul cumulativ al articolului (timpul necesar pentru a-l produce în cazul absenței complete a stocurilor componentelor sale).

De aceea, valoarea parametrului **Zile în viitor** trebuie să fie cel puțin egală cu lead time-ul cumulativ al articolului.

În ceea ce privește media care verifică consumurile din trecut, rețineți că în tabelul șabloanelor de gestiune să se activeze parametrul DDMRP ADU, pentru a indica procedurii care șabloane să fie considerate printre cele de descărcare din gestiunea în care este stocat articolul.

Dacă în tabelul șabloanelor de gestiune nu este activat parametrul DDMRP, înseamnă că în parametrii generali opțiunea DDMRP nu este setată.