---
title: Secvență faze - TopDown grid
sidebar_position: 2
---

:::important Utilizare
Funcționalitatea "Secvența faze - TopDown grid", permite optimizarea gestionării fazelor de producție prin asamblarea secvențelor manual sau pe baza regulilor personalizate.      
După selectarea filtrelor, fazele care nu sunt încă ordonate sunt listate în tabelul superior. De aici, fazele sunt mutate în tabelul inferior pentru a atribui o secvență.      
Form-ul include instrumente pentru modificarea datelor asociate fazelor, calcularea timpilor și actualizarea datelor, asigurând un control precis al planificării producției. Butoane specifice facilitează calculul secvențelor, gestionarea stocurilor și actualizarea stării comenzilor, asigurând un flux productiv eficient.
:::

Oferă posibilitatea de a secvenția fazele manual sau conform regulilor stabilite de operator.

Form-ul este compus dintr-o primă zonă de filtre.

Partea centrală a form-ului este constituită din două tabele.           
Primul prezintă toate fazele de lucrări cărora nu le-a fost încă atribuită o secvență. Astfel, selectând o fază sau mai multe faze din primul tabel și apăsând butonul *Mută faze*, acestea sunt mutate în al doilea tabel (de mai jos) unde va fi posibil să se atribuie o secvență manual sau automat.          

:::note Notă
Nu este posibil să modificați informațiile unei faze deja declarate în producție.
:::

În partea inferioară a form-ului sunt prezente următoarele câmpuri:
> **Cantitate utilizare**: raportează totalul cantităților utilizate ale rândurilor selectate de utilizator;         
> **Unitate de măsură Timp**: indică unitatea de măsură a timpului cu care se dorește vizualizarea valorii prezente în **Timp total**;     
> **Timp total**: raportează totalul timpului (Timp mașină + Timp manoperă + Timp montaj) al rândurilor selectate de utilizator.

În plus, extinzând această parte sunt vizualizate în mod read-only detaliile referitoare la:
> **Cantitate**
> **Timp manoperă**
> **Timp mașină**
> **Timp montaj**

#### Butoane specifice 

> **Căută**: permite vizualizarea fazelor pe baza filtrelor inserate;           
> **Căută și consideră stocuri**: efectuează aceeași funcție ca butonul **Căută**, dar, în același timp, permite vizualizarea în roșu a tuturor fazelor fără stoc disponibil în acel moment;                   
> **Mută faze**: permite mutarea fazei sau fazelor selectate din primul tabel în al doilea tabel unde va fi posibil să se atribuie o secvență;         
> **Schimbă faze**: odată selectată o fază, această comandă permite *Actualizarea* fazei în sine modificând: faza, mașina, centrul de lucru, totalul timpului mașină, al timpului operator și al timpului de montaj. De asemenea, selectând opțiunea *Inserează* este posibil să adăugați o nouă fază sau, cu opțiunea *Șterge* să o eliminați definitiv;            
> **Schimbă ciclu/Versiune**: permite modificarea ciclului și/sau versiunii în acel ordin de producție;            
> **Schimbă date**: permite modificarea datei de început a fazei selectate;         
permite modificarea *Datei început* pentru toate ordinele planificate sau de producție selectate cu data indicată în pop-up. Ulterior, în baza fazei și a *Calendarului capacităților productive*, este recalculată și *Data sfârșit* a comenzii și datele de început și sfârșit ale fiecărei faze. Pe baza noilor date sunt recalculate și datele de utilizare ale materialelor.
Pe lângă actualizarea datelor în ordin, sunt actualizate și cele din comanda legată;        
> **Calculează timp**: permite recalcularea timpilor după ce a fost atribuită noua secvență sau după ce au fost modificate date cu procedura **Schimbă faze**;          
> **Calculează secvența**: după reordonarea rândurilor în al doilea tabel, acest buton permite asocierea secvenței la fazele selectate pe baza ordonării date;       
> **Actualizare dată marfă pregătită**: permite actualizarea *Datei marfii pregătite* a ordinelor client asociate cu *Data sfârșit comandă*;      
> **Recalculează disponibilitate**: permite recalcularea disponibilității, arătând disponibilitatea stocului în funcție de secvența care a fost dată;         
> **Eliberare ordine planificate**: permite eliberarea ordinelor planificate de producție în ordine de producție pentru fazele selectate;                     
> **Lansare ordine**: permite modificarea stării ordinelor de producție din lansat 
în executiv al fazei sau fazelor selectate.         
> **Extinde dimensiunile gridului**: permite ascunderea zonei de filtru a form-ului;         
> **Grid dublu**: permite ascunderea primului tabel pentru a putea lucra mai ușor în al doilea.          

Pentru detalii despre funcționarea comună a form-urilor citiți [Funcționalități, butoane și câmpuri comune (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).
