---
title: Audit Trail
sidebar_position: 2
---

**Audit Trail** este o funcționalitate aplicativă integrată în Fluentis care permite configurarea unui sistem complet de log pentru a monitoriza toate operațiile efectuate în Fluentis de către orice operator. Această funcționalitate este deosebit de utilă și, în anumite sectoare de activitate chiar obligatorie, atunci când este necesară generarea documentației detaliate despre “cine” a efectuat o operațiune specifică, “ce” operație și “când”, adică în ce interval de timp.

**Audit Trail** permite de asemenea înregistrarea detaliilor modificărilor efectuate, evidențiind ce valori au fost alterate și asupra căror date. Fluentis oferă deja două module de log preconfigurate care permit începerea imediată a urmăririi activităților, fără a fi necesare setări suplimentare:

1. **Monitorizare activitate**: afișează în timp real utilizatorii conectați la sistem și form-urile pe care le deschid.  
   Actualizarea form-ului se poate efectua:  
   - manual cu ajutorul butonului **Actualizare** sau 
   - automat cu ajutorul butonului **Actualizare automată date**.

2. **Cronologie activități**: înregistrează și memorează automat toate accesele utilizatorilor la diferitele ecrane (formulare) ale sistemului. Fiecare acces este urmărit și arhivat, garantând înregistrarea istorică a activităților.

### LOG-uri specifice

*Exemplu*: configurarea unui log de Audit Trail pentru a monitoriza modificările sau ștergerea datelor particulare din Fluentis ERP. De exemplu, această funcționalitate permite urmărirea modificărilor efectuate înregistrărilor contabile.

#### Procedură pentru configurare Log

1. Accesați **Configurare → Configurare Audit Trail** și faceți clic pe **Nou** pentru a crea noua configurare.

2. Definiți logul, inserându-i un cod unic și o descriere.

3. În grid-ul de configurare setați business object-ul de referință pentru care doriți să activați urmărirea (dacă este necesar, puteți specifica și părintele său). Această operație va determina afișarea proprietăților relative.
   
![](/img/it-it/applications/audittrail/audittrail.png)

Pentru **interogarea LOG-ului (interrogare il LOG)** deschide **Audit Trail (Audit Trail)**:

În formular, dacă se apasă simplu **Căutare (Ricerca)**, vor fi vizualizate toate operațiunile supuse monitorizării și va fi vizibil tipul de operațiune: Inserare, modificare, ștergere.

Pentru a vizualiza detaliile și astfel datele înainte și după modificare, **este necesar să selectezi** în zona de antet, atât tipul de LOG configurat anterior prin câmpul **Registru evenimente (Registro eventi)**, cât și **Obiectul (Oggetto)**. 

#### Procedură pentru interogare log

1. În form-ul Audit Trail, click pe butonul **Căutare** pentru a vizualiza toate operațiunile monitorizate și detalii precum tipul operațiunii efectuate: inserare, modificare sau ștergere.  
2. Vizualizarea detaliilor modificărilor. Pentru a accesa detaliile este necesar să filtrați în antet rezultatele după tipul de log (onfigurat anterior cu ajutorul câmpului **Registru evenimente**) și obiect.

![](/img/it-it/applications/audittrail/audittrail2.png)
