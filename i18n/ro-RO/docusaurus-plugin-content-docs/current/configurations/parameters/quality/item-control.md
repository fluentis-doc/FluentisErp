---
title: Parametri control articole
sidebar_position: 1
---

Acești parametri sunt împărțiți în două tab-uri.

### General 

În acest tab se pot insera unele date care urmează să fie propuse în mod implicit în documentele modulului de calitate. 

**Tip fișă tehnică**: acest tip va fi propus în mod implicit la crearea unei Fișe tehnice noi;        

**Manager**: puteți conecta un Angajat;     

**Tip declarație în articole**: acest tip va fi propus în mod implicit în tab *Articole* asociat la Fișele tehnice;    

**Tip declarație în raport**: indica *Tipul declaratiei* propus in raportul *Fisă tehnică*, Definitiv sau Preliminar.       
      
**Tip plan de control**: conține tipul care urmează să fie propus în cazul creării unui nou plan de control.

### Control articole

În baza tipului de document din care se importă materialul cu procedura *Importați articole de verificat* în primul grid se poate insera: 

**Implicit**: documentul care conține acest flag va fi propus automat;      
   
**Detaliu articol**: conține detaliile articolului pe care dorim să-l gestionăm;

**Mult.**: permite detectarea mai multor valori pentru același test; parametrul general **Activează detectarea mai multor valori** trebuie să fie activat;   

**Tip plan de control**: conține tipul planului de control care trebuie luat în considerare înaintea celorlalte.       

În gridul **Culori linii control articole** se pot defini culori diferite în baza conținutului informațiilor controalelor detectate.       

**Activează detectarea mai multor valori**: permite detectarea mai multor valori pentru fiecare test, în toate documentele. Când această opțiune este activată, puteți selecta **Rezultat negativ propus**, care decide pe baza căruia calcul să propună rezultatul negativ al testului: prima valoare detectată neconformă sau media aritmetică a valorilor detectate.    
Apoi, se poate specifica un tip implicit pentru cazurile cu rezultat pozitiv și negativ. Această propunere nu este luată în considerare dacă tipurile de rezultate au fost specificate anterior în Tipuri test. 

**Aprobare automată valori detectate**  presupune că persoana care detectează valorile este identică cu cea care le aprobă; în caz contrar, trebuie dezactivat acest parametru.
