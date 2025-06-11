---
title: Liste ieșiri UdI/Listă ambalare (versione WPF e WMS) (Liste ieşiri UdI/Listă ambalare (versione WPF e WMS))
sidebar_position: 1
---

### Liste ieșiri UdI/Listă ambalare (versione WPF) (Liste ieşiri UdI/Listă ambalare (versione WPF))

:::important A cosa serve (Ce este util)
Lista de Prelevare UDC / Lista de Ambalare din Fluentis oferă o metodă inovatoare pentru gestionarea prelevării unităților de încărcare, în contrast cu procedura tradițională de picking care se bazează pe articole individuale. Această funcționalitate este deosebit de utilă atunci când doriți să expediați mărfuri unui client, permițând gruparea articolelor în unități de încărcare predefinite.

Crearea unei noi liste de prelevare necesită pur și simplu introducerea de informații precum tipul de picking, depozitul și utilizatorul. Operatorii pot apoi selecta unitățile de încărcare deja create și încărcate în depozit direct în tab-ul "Detaliu unitate de încărcare", facilitând astfel asocierea articolelor de expediat cu comanda client corespunzătoare. Datorită butonului "Ajutor UDC", utilizatorii pot naviga cu ușurință între unitățile de încărcare disponibile, făcând procesul de selecție rapid și eficient.

Listele de prelevare UDC nu doar simplifică pregătirea expedierilor, ci permit de asemenea generarea directă de documente de transport precum DDT și facturi, conținând toate informațiile necesare referitoare la articolele și unitățile de încărcare implicate în expediere. Această integrare garantează o gestionare mai fluidă și eficientă în procesul de logistică și expedieri.
:::

Cu **listele de prelevare (liste de prelevare)** este posibilă crearea unui picking de unități de încărcare, spre deosebire de picking-ul normal care este compus din articole individuale.  
Din masca de **Căutare (Ricerca)** este posibil să căutați listele introduse anterior.  
Pentru a crea o nouă listă, faceți clic pe **Nou (Nuovo)**.  

Datele obligatorii de introdus sunt:  
**Tip picking (Tipo picking)**: introduceți tipul de [picking](/docs/logistics/picking/picking-management) care urmează a fi utilizat;  
**Utilizator (Utente)**: introduceți angajatul codificat care creează documentul;  
**Utilizator pentru confirmare (Utente per conf.)**: introduceți angajatul care are dreptul de a confirma lista.  

După introducerea datelor necesare, este posibil să salvați lista de prelevare.  
Cu butonul din ribbon bar **ajutor UDC (help UDC)** este posibil să deschideți masca în care să selectați UDC-urile care trebuie prelevate.  
Căutarea poate fi efectuată pe unitățile de încărcare asociate comenzilor client (activând flag-ul **Căutare pe comenzi client (Ricerca su ordini clienti)**), deci, pentru fiecare comandă client putem vizualiza articolele care o compun și dacă acestea au fost introduse anterior în cadrul unei unități de încărcare; în tabelul de mai jos putem vedea toate detaliile referitoare la UDC-ul care le conține. Odată ce UDC-urile de interes sunt selectate, acestea sunt adăugate la listă.  
Alternativ, dezactivând flag-ul **Căutare pe comenzi client**, unitățile de încărcare pot fi căutate și între toate cele create, chiar dacă nu sunt legate de o comandă client, și la fel pot fi selectate și adăugate la lista de prelevare.  
În grila de *Detaliu* vor apărea doar UDC-urile în stare încărcată, după care este posibil să salvați *Lista* și să o închideți.  
Întorcându-ne la masca de *Căutare Liste de prelevare*, lista va fi prezentă cu starea **Suspendată (Sospeso)**. Este necesar să descărcați UDC-urile din listă (vezi *Butonii specifici* mai jos) pentru a trece la starea **Controlată (Controllato)**. Doar în această ultimă stare se vor activa butoanele din ribbon bar **Factură (Fattura)** și **DDT**.  

*Butonii specifici:* 
> **Facturi (Fatture)**: creează factura din *Lista* selectată; în masca care apare este solicitat [Tipul Facturii (Tipo Fattura)](/docs/configurations/tables/sales/invoices-type) care urmează a fi creat și eventual gruparea care trebuie adoptată; factura este creată deja *Descărcată (Scaricata)* (pentru a evita riscul unei descărcări duble).  
> **DDT**: creează DDT din *Lista* selectată; în masca care apare este solicitat [Tipul DDT (Tipo DDT)](/docs/configurations/tables/sales/delivery-notes-type) care urmează a fi creat și eventual gruparea care trebuie adoptată; DDT-ul este creat deja *Descărcat (Scaricato)* (pentru a evita riscul unei descărcări duble).  
> **Gestionare UDC (Gestione UDC)**: selectând o *Listă de prelevare* și făcând clic pe acest buton se deschide masca **Gestionare UDC** în care UDC-urile din listă sunt pre-filtrate. În această mască UDC-urile pot fi gestionate în depozit cu diversele butoane din ribbon bar.  

Pentru toate informațiile despre cum să utilizați această formă din WMS consultați [Liste ieșiri UdI/Listă ambalare](/docs/logistics/wms/udc/loading-unit-picking-list)

### Liste ieșiri UdI/Listă ambalare (versione WMS) (Liste ieșiri UdI/Listă ambalare (versione WMS))

:::important A cosa serve (Ce este util)
Funcția Liste de Prelevare / Lista de Ambalare din WMS-ul Fluentis permite crearea unui picking de unități de încărcare, facilitând pregătirea expedierilor direct legate de comenzile client.  
Datorită acestui instrument, utilizatorii pot selecta, modifica și gestiona eficient UDC-urile, optimizând procesul de prelevare și asigurând o documentație corectă pentru expedieri.
:::

Această procedură este utilizată pentru crearea de liste de prelevare cu unități de încărcare.  

Cu **Listele de prelevare UDC / Lista de ambalare** este posibil să creați un *picking* de unități de încărcare, spre deosebire de procedura normală de picking care creează o listă de prelevare formată din articole individuale.  
Listele de prelevare UDC sunt folosite în cazul în care se dorește expedierea mărfii către un client, în timp ce în cazul transferurilor de UDC în interiorul propriilor depozite este oportun să se utilizeze [Listele de Transfer UDC](/docs/logistics/wms/udc/loading-unit-transfer-list).  

În form-ul de filtrare este posibil să căutați listele de interes filtrând: după data introducerii, data expedierii și de asemenea după starea listei de prelevare; odată ce a fost selectată, este posibil să deschideți lista cu butonul **Deschide (Apri)**, în cadrul căreia utilizatorul are posibilitatea de a modifica unitățile de încărcare conținute în tab-ul *Detaliu UDC*.  
În acest tab este posibil să: selectați o unitate de încărcare existentă și să o eliminați din listă cu butonul **Șterge UDC (Cancella UDC)**; sau, să adăugați una nouă pur și simplu citind codul de bare corespunzător.  
Odată ce modificările sunt finalizate, este necesar să salvați lista prin butonul **Salvează (Salva)**.  

Din filtrare este posibil de asemenea să creați o nouă listă cu butonul **Nou (Nuovo)**.  
Automat sunt propuse: data curentă și depozitul indicat în tabelul Parametrii depozitului de Încărcare/Descărcare pentru utilizator; de asemenea, în funcție de tipul de picking, este propus și numărul listei. 
În acest moment, utilizatorul poate introduce, în tab-ul *Detaliu UDC*, unitățile de încărcare de adăugat la listă prin citirea codurilor de bare corespunzătoare. Odată ce introducerea s-a finalizat, va fi suficient să salvați lista cu butonul corespunzător.

**Parametrii de încărcare/descărcare (Parametri carico/scarico)** de introdus în tabelul [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | PickingList |

Pentru acest parametru, cauza de depozit poate fi lăsată liberă.

:::note Nota (Notă)
Dacă în [Parametrii Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) este asociat pentru acel utilizator un singur depozit, se propune implicit acela; altfel, dacă există mai multe asociate, implicit nu se propune niciunul și utilizatorul poate alege doar dintre cele introduse.
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod Barcode (Codice barcode)** consultați pagina relevantă pentru [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Confirmare transfer UDC (versione WMS) (Confirmare transfer UDC (versione WMS))

:::important A cosa serve (Ce este util)
Această procedură este utilizată pentru a căuta și a confirma o [Listă de Transfer UDC](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existentă pentru a efectua mișcarea în depozit.
:::

Form-ul **Confirmare transfer UDC** este utilizat pentru a confirma o [Listă de Transfer UDC](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existentă pentru a efectua mișcarea în depozit.

În filtrare este posibil să căutați lista de interes după: dată, număr și depozit, de asemenea, este posibil să o confirmați direct cu butonul **Confirmă (Conferma)** fără a fi necesar să o deschideți.  
Altfel, este posibil să intrați în listă prin butonul **Deschide (Apri)** și să vizualizați unitățile de încărcare care nu au fost încă descărcate și cele care au fost deja descărcate în tab-urile corespunzătoare: unități de încărcare netransferite și transferite, pentru a putea apoi să o confirmați și să creați mișcarea de depozit.

**Parametrii de încărcare/descărcare (Parametri carico/scarico)** de introdus în tabelul [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |

Parametrii sunt introduși de două ori deoarece form-ul utilizează: atât o cauză de încărcare cu ca depozit ceea ce este destinația listei, cât și una de descărcare cu ca depozit cel în care sunt stocate unitățile de încărcare care trebuie transferate.  
Ambele cauze utilizate trebuie să aibă flag-ul *Listă de materiale (Distinta base)* dezactivat și să nu aibă contraparte.  

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod Barcode (Codice barcode)** consultați pagina relevantă pentru [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Confirmare prelevare UDC (versione WMS) (Confirmare prelevare UDC (versione WMS))

:::important A cosa serve (Ce este util)
Form-ul **Confirmare prelevare UDC** este utilizat pentru a căuta și a confirma o [Lista de prelevare UDC / Lista de ambalare](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existentă pentru a efectua mișcarea de depozit de descărcare.
:::

În filtrare este posibil să căutați lista de interes după: dată, număr și depozit, de asemenea, este posibil să o confirmați direct cu butonul **Confirmă (Conferma)** fără a fi necesar să o deschideți.  
Altfel, este posibil să intrați în listă prin butonul **Deschide (Apri)** și să vizualizați unitățile de încărcare care nu au fost încă descărcate și cele care au fost deja descărcate în tab-urile corespunzătoare: unități de încărcare ne-descărcate și descărcate, pentru a putea apoi să o confirmați și să creați mișcarea de depozit.
   
**Parametrii de încărcare/descărcare (Parametri carico/scarico)** de introdus în tabelul [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmUnloadPickingList |

Acest parametru trebuie creat cu depozitul listelor de *prelevare* și cu cauza de depozit cu tip de descărcare și fără contraparte.

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod Barcode (Codice barcode)** consultați pagina relevantă pentru [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).