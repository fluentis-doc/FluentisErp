---
title: Newsletter nou
sidebar_position: 2
---

Procedura de creare a unui nou **Newsletter** permite definirea caracteristicilor care vor fi asociate newsletter-ului ce urmează să fie trimis, de la template la listele de distribuție.

#### Câmpuri specifice

**Titlu**: corespunde codului newsletter-ului;

**Descriere**: câmp alfanumeric pentru a indica în detaliu semnificația newsletter-ului;

**Template**: permite  selecta un [Template](/docs/crm/budget-marketing-automation/template/new-template);

**Autor**: indică utilizatorul care a creat newsletter-ul;

**De la**: în acest câmp trebuie indicată adresa de e-mail de la care a fost trimis newsletter-ul către destinatar;

**Data creare**: corespunde datei de creare a newsletter-ului;

**Data și ora programată**: corespund datei și orei programate pentru trimiterea newsletter-ului (câmp cu caracter pur informativ);

**Subiect**: corespunde așa-numitului subiectului e-mailului;

**Planificată**: acest flag indică faptul că trimiterea newsletter-ului a fost programată (câmp cu caracter pur informativ);

**Expediat**: acest flag indică faptul că newsletter-ul a fost trimis.

În partea inferioară a form-ului trebuie selectate listele de distribuție care conțin destinatarii și adresele lor de e-mail către care trebuie trimis newsletter-ul.

![](/img/it-it/applications/crm/newsletter/distribution-list.png)

Apăsând butonul **+** din stânga fiecărei liste, se pot vizualiza contactele care aparțin respectivei liste.

### Procedură trimitere newsletter

Pentru a trimite newsletter-ul apăsați butonul **Expediază** din ribbon bar. Acesta va deschide form-ul de trimitere a newsletter-ului, care conține taburile **Home**, **Insert** și **Merge Data**, deja prezente în secțiunea *Template Document* (pentru mai multe informații consultați secțiunea [Template](/docs/crm/budget-marketing-automation/template/new-template)), precum și tabul **Email**, care prezintă următoarele funcții:  
- **Listează**: permite tipărirea fizică a newsletter-ului;  
- **Previzualizează raport**: permite previzualizarea înainte de tipărire a newsletter-ului;  
- **Salvează**: permite salvarea modificărilor aduse newsletter-ului;  
- **Expediază**: permite trimiterea newsletter-ului;  
- **Undo**: permite anularea ultimei modificări făcute newsletter-ului;  
- **Redo**: permite restabilirea ultimei modificări făcute newsletter-ului.

#### Câmpuri specifice

**Destinatari**: permite indicarea destinatarilor e-mailului, selectându-i dintre referințele contactelor CRM sau dintre utilizatorii Fluentis;  
**Subiect**: corespunde așa-numitului subiect al e-mailului;  
**Mail Template**: permite selectarea [Template-ului](/docs/crm/budget-marketing-automation/template/new-template);  
**Cc**: permite inserarea adreselor de e-mail care vor primi mailul în copie (Cc);  
**Bcc**: permite inserarea adreselor de e-mail care vor primi mailul în copie ascunsă (Bcc). Fluentis completează automat acest câmp cu adresele de e-mail ale contactelor CRM din Fluentis, astfel încât fiecare destinatar care primește newsletter-ul să nu vadă adresele de e-mail ale altor destinatari;  
**Embedded Image**: activând această opțiune, imaginile din template nu vor fi atașate la e-mail, ci vor fi incluse ca elemente efective ale e-mailului;  
**Atașamente**: prezintă fișierele care vor fi atașate newsletter-ului.