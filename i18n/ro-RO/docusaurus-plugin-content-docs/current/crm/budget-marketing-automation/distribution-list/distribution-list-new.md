---
title: Nouă Listă de Distribuție
sidebar_position: 3
---

Procedura permite definirea caracteristicilor listei care va fi ulterior utilizată în procedura de expediere a [Newsletter](/docs/crm/budget-marketing-automation/newsletter/search-newsletter/), precum și definirea **contactelor CRM** care vor face parte din această listă. Pentru a crea o listă nouă este necesar să faceți clic pe butonul **Nou** din ribbon bar.

#### Câmpuri specifice

**Nume**: corespunde codului identificativ al listei de distribuție;

**Dată creare**: este data la care a fost creată lista;

**Notă**: câmp alfanumeric care permite introducerea unor note libere;

**Autor**: se indică utilizatorul care a generat lista;

**Tip**: permite definirea tipologiei listei de distribuție între **Static** sau **Dinamic**.

Tabelul inferior diferă în funcție de tipul listei: *Static* sau *Dinamic*.

### **Listă Statică**

Secțiunea este împărțită în 2 tab-uri.

#### Atribuit

Afișează subiecții care au fost deja adăugați la lista de distribuție.

#### Neatribuit

Afișează contactele care nu au fost încă incluse în lista vizată. 

Conține o secțiune de *Filtre*, unde este posibil să setați o serie de filtre referitoare la contactele care urmează să fie extrase și una de rezultate, unde se afișează contactele extrase pe baza filtrelor setate anterior, după apăsarea butonului *Caută*.
Butonul **Atribuie** mută contactul din tab-ul **Neatribuit** în tab-ul **Atribuit**, inserând astfel contactul în Lista de distribuție.

**Grupare după contact**: permite gruparea subiecților (contacte și referințe) într-un singur rând, pe baza contactului din care fac parte.


### Listă Dinamică

Secțiunea este împărțită în 2 tab-uri.

#### Configurare

Inițial, trebuie indicate următoarele 3 date:  
**Arie**: este folosită pentru a defini aria din Fluentis în care vor fi recuperate datele;  
**Modul**: este asociat ariei selectate anterior;  
**Sql Query**: trebuie selectată Query Sql creată anterior în Fluentis (pentru mai multe informații, consultați secțiunea *Fluentis Query Studio*).  
În tabelul următor sunt afișate proprietățile și modul în care au fost mapate.

#### Mapare

În acest tab sunt afișate, în timp real, contactele prelucrate și adăugate în lista de distribuție, conform Sql Query indicată în tab-ul *Configurare*.