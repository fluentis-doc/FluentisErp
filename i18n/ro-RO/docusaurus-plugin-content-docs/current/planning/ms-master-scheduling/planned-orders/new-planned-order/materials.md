---
title: Materiale
sidebar_position: 2
---

În gridul acestui tab, utilizatorul poate insera manual materialele care trebuie să fie utilizate pentru producerea articolului ordinului planificat (doar dacă este de producție). Acest grid este completat în cazul în care ordinul planificat provine din planificarea generală sau din elaborarea MRP, dar dacă ordinul a fost inserat manual, pentru a importa datele listei componentelor, utilizatorul trebuie să dea clic pe butonul 'Completare date ordin' prezent în toolbar. 

**Prioritate**: este afișată prioritatea componentei, inserată în lista componentelor. Poate fi modificată ca toate datele prezente în acest grid;

**Clasă/** **Cod articol/** **Variantă/** **Opțiune**: sunt informații care se referă la articol;

**S/L**: este preluat flag-ul prezent în parametrii MRP ai articolului, numit 'Curs lucrare';

**UMU**: reprezintă unitatea de măsură alternativă a articolului;

**Dată utilizată**: coincide cu data început prevăzută a ordinului planificat (când se modifică prima, se modifică automat și a doua);

**Cantitate utilizată**: este cantitatea unitară necesară pentru acest articol (prevăzut din DB); utilizatorul o poate modifica;

****Cantitate **totală**: este cantitatea care se obține multiplicând cantitatea utilizată cu cantitatea de produs;

**% pierderi**: în acest câmp se inserează sau este preluat din lista componentelor eventualul % de pierderi pentru acest articol;

**Fază/Subfază**: cu dublu clic se deschide help faze de lucru din care se poate selecta relativa fază și subfază, și apoi se atribuie materialul selectat la o anumită fază de lucru a articolului;

**Cant. disponibilă**: este afișată cantitatea disponibilă din articol la data utilizării lui.

Observație: în cazul completării automate a acestui grid, toate datele inserate sunt actualizate automat, cu posibilitatea de a le modifica și/sau adăuga ulterioare materiale la lista componentelor ordinului planificat. Dacă ordinul planificat este de achiziții, tab-ul Materiale nu este activ.






