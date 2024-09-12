---
title: Nouă Listă di distribuție
sidebar_position: 3
---

Procedura permite definirea caracteristiciilor noii liste care vor fi utilizate în procedura de expediere a [Newsletter](/docs/crm/budget-marketing-automation/newsletter/search-newsletter/), precum și inserarea **Contactelor CRM** care fac parte din listă. Pentru a crea o nouă listă utilizați butonul **Nou** din fereastra de căutare a listelor de distribuție.

## Secțiune superioară

*Câmpuri specifice*  
**Nume**: reprezintă codul listei de distribuție;  
**Dată creare**: reprezintă data în care a fost creată lista;  
**Notă**: câmp alfanumeric care permite inserarea notelor libere;  
**Autor**: reprezintă utilizatorul care a generat lista;  
**Tip**: permite alegerea tipului de listă de distribuție: **Statică** sau **Dinamică**.

## Secțiune inferioară  
Această secțiune diferă în baza tipului listei: statică sau dinamică

### Lista statică

#### Atribuit

În acest tabel sunt afișați subiecții care au fost deja atribuiți listei de distribuție.

#### Neatribuit

În acest tabel sunt afișați subiecții care nu au fost încă atribuiți listei de distribuție.

În secțiunea *Filtru* pot fi inserate filtrele pentru căutarea contactelor iar in secțiunea inferioară sunt afișate rezultatele căutării.

*Buton specific*

> **Atribuie**: mută contactul din tabelul **Neatribuit** în tabelul**Atribuit**, inserând astfel contactul în lista de distribuție.

**Grupare pe contact**: permite gruparea subiecților (contacte și referințe) pe o linie unică, pe baza contactului din care fac parte.

### Lista dinamică

#### Configurare

**Aria**: permite alegerea ariei aplicației din care sunt preluate datele;  
**Modul**: permite alegerea modulului ariei;  
**Sql Query**: impune selectarea unei Query Sql creat anterior în Fluentis (pentru mai multe informații consultați Fluentis Query Studio).  
În tabelul inferior sunt afișate proprietățile și maparea lor.  

![](/img/it-it/applications/crm/distribution-list/configuration.png)

#### Mapping

Afișează, în timp real, contactele elaborate și inserate în lista de distribuție în baza Sql Query inserată în tabelul **Configurare**.

![](/img/it-it/applications/crm/distribution-list/mapping.png)