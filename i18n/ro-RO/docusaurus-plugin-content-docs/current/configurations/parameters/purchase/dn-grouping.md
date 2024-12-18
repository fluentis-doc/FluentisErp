---
title: Parametrii grupării Aviz de Achiziţie
sidebar_position: 10
---

Parametrii de grupare permit definirea modului în care să fie împărțite documentele în timpul procedurilor de execuție. În acest scop, este posibil să se folosească indicatori specifici pentru a grupa documentele pe baza diferitelor proprietăți, cum ar fi categoria, tipul documentului sau alte caracteristici relevante.            
Acești parametri generali de grupare trebuie configurați o singură dată și vor fi aplicați automat la toate procedurile, având valabilitate pentru toți clienții și furnizorii. Totuși, dacă un client sau un furnizor solicită un comportament diferit față de cel setat în parametrii generali, va fi necesară personalizarea parametrelor de grupare în cadrul specificului lor.           
În acest fel, se garantează o gestionare flexibilă și adaptabilă a execuțiilor, permițând satisfacerea nevoilor specifice ale fiecărui client sau furnizor, păstrând în același timp o configurare centralizată și coerentă pentru majoritatea operațiunilor.

În această mască se decid regulile de grupare pentru procedura de [**Execuție din comenzi**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).  

Este necesar să se marcheze coloanele care prezintă grupările pe care se doresc pentru aceste execuții. 

:::note Nota
Dacă în registrul furnizorului, în tab-ul *Parametri grupare pentru client/furnizor*, au fost introduse condiții de grupare diferite, acestea vor avea prioritate față de parametrii generali.
:::

Când DDT-ul este creat dintr-o singură comandă, toate datele de antet prezente în documentul de origine sunt incluse. Pentru DDT-urile create din mai multe comenzi, în schimb, sunt incluse datele din registrul furnizorului.    

*Campuri specifice*:

> **Rezumat**: dacă este activ, în momentul execuției comenzilor va fi creat un singur DDT pentru fiecare furnizor. Dacă nu este activ, va fi creat întotdeauna un DDT pentru fiecare comandă executată. Gruparea funcționează doar pentru *Tipurile de comandă* (de Achiziție sau de Vânzare, în funcție de operațiunea selecționată) care au codificat același *Tip DDT* de creat. Toți indicatorii următori trebuie utilizați împreună cu acest indicator.    
>
> **Grupare după tip de document (Raggruppamento per tipo documento)**: dacă este activ, toate documentele care au același *Tip de comandă* vor fi grupate într-un singur DDT.     
>
> **Grupare după an (Raggruppamento per anno)**: activând acest indicator, se va efectua o grupare pe baza anului de creare a comenzilor.   
>
> **Grupare după lună (Raggruppamento per mese)**: pentru a efectua o grupare pe luna de creare a comenzilor, este necesar să se activeze și indicatorul anterior.    
>
> **Grupare după valută (Raggruppamento per cambio)**: dacă este activ, documentele cu aceeași valută și același curs de schimb vor fi grupate într-un singur DDT.    
>
> **Grupare după comandă (Raggruppamento per ordine)**: acest indicator este utilizat doar pentru *Crearea DDT-urilor și facturilor de vânzare din Picking* (vezi [Parametri grupare DDT](/docs/configurations/parameters/sales/dn-grouping) și [facturi](/docs/configurations/parameters/sales/invoice-grouping)).    
>
> **Grupare după proiect (Raggruppamento per progetto)**: activând acest indicator, se va efectua o grupare pe baza proiectului. Gruparea funcționează și pentru proiectele introduse la nivelul liniei de articol; dacă unele dintre liniile de articol nu au un proiect asociat, se va crea un DDT diferit pentru toate articolele care nu îl conțin. Atunci când proiectul a fost introdus în antetul documentelor sursă, acesta va fi inclus și în antetul documentelor destinate, alternativ, va fi păstrat doar pe liniile de articol.    
>
> **Grupare pe tip şi soluţie de plată**: activând acest indicator, se va efectua o grupare pe baza tipului și soluției de plată introduse în comandă; această informație va fi inclusă în antetul DDT-ului creat.   
>
> **Grupare pe destinaţie**: activând acest indicator, se va efectua o grupare pe baza destinației introduse în cadrul comenzilor; această informație va fi inclusă în antetul DDT-ului creat, în tab-ul *Transport*.