---
title: Liste de Transfer UdI (versiune WPF și WMS)
sidebar_position: 2
---

### Liste de Transfer UdI (versiune WPF)

:::important Utilizare
*Lista de Transfer UdI* din Fluentis este un instrument conceput pentru a gestiona mișcările Unităților de Încărcare (UdI) în interiorul propriilor gestiuni, oferind o metodă sistematică și intuitivă pentru transferul de marfă. Spre deosebire de *Lista de ieșire UdI*, care este utilizată pentru expedierea către clienți, lista de transfer se concentrează pe optimizarea fluxurilor interne ale UdI între diferitele locații din magazin.

Procedură permite vizualizarea articolelor asociate ordinelor clienți, oferind o imagine clară a detaliilor UdI selectate. Odată finalizată lista de transfer, este posibil să se genereze un aviz de expediție direct din lista, garantând că toate informațiile referitoare la articole și unități de încărcare sunt prezentate în mod complet. Această abordare nu doar simplifică gestionarea mișcărilor interne, ci contribuie de asemenea la menținerea unei trasabilități precise a stocurilor.
:::

**Listele de Transfer UdI** sunt similare cu [Listele de ieșire UdI / Listă ambalare](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), cu excepția faptului că sunt utilizate în cazul mișcărilor UdI în gestiunile proprii, în timp ce **Listele de ieșire UdI / Listă ambalare** sunt folosite atunci când se dorește expedierea mărfii către un client. 

Fereastra de **Căutare** permite căutarea listelor introduse anterior. 

Pentru a crea o nouă listă, faceți clic pe **Nou**.  

### Date obligatorii  
- **Tip dispoziție de livrare**: selectați tipul [dispoziției de livrare](/docs/logistics/picking/picking-management).  
- **Utilizator**: angajatul care creează documentul.  
- **Confirmare utilizator**: angajatul responsabil cu validarea listei.

Fiind vorba de un transfer, este necesar să introduceți și **Gestiunea de expediere** și **Gestiunea de destinație**.  

#### Butoane specifice  
> **Șterge UdI**: permite ștergerea unei unități de încărcare prezente în listă;  
> **Restaurare transfer**: permite revenirea la starea anterioară a mișcării de confirmare a transferului; astfel, se șterge mișcarea de încărcare creată prin confirmarea transferului și se înlocuiește cu o mișcare de încărcare pe gestiunea de expediere;  
> **Help UdI**: permite adăugarea de noi unități de încărcare prin ajutor.  
> **Gestionare UdI**: selectând o Lista de transfer și făcând clic pe acest buton, se va deschide fereastra **Gestionare UdI** în care sunt propuse UdI disponibile pentru transfer. Puteți să transferați UdI cu butonul **Mută UdI**.  
> **Aviz**: creează avizul din **Lista de Transfer UdI** selectată.  

Pentru toate informațiile despre cum să utilizați acest form din WMS, consultați [Liste de Transfer UdI](/docs/logistics/wms/udc/loading-unit-transfer-list)

### Liste transfer UdI (versiune WMS)  

:::important Utilizare
Funcția *Liste de Transfer UdI* din WMS de Fluentis permite gestionarea mișcărilor unităților de încărcare în interiorul gestiunilor, facilitând organizarea și trasabilitatea UdI în timpul transferurilor între diferite locații.  
Această funcționalitate permite crearea și modificarea listelor de transfer în mod eficient, îmbunătățind astfel gestionarea logistică internă.
:::

Această procedură este utilizată pentru crearea listelor de transfer cu unități de încărcare.  
**Listele de Transfer UdI** sunt foarte similare cu [Listele de ieșire UdI / Listă ambalare](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), cu excepția faptului că sunt utilizate în cazul mișcărilor unităților de încărcare în interiorul gestiunilor proprii, în timp ce **Listele de ieșire UdI / Listă ambalare** sunt utilizate în cazul în care se dorește expedierea mărfii către un client.  

#### Căutare liste

După căutarea listelor dorite, acestea pot fi deschise cu butonul **Deschide** și apoi modificate în tab *Detaliu UdI*.  
În acest tab puteți să selectați o unitate de încărcare existentă și să o eliminați din listă cu butonul **Șterge UdI** sau să adăugați una nouă citind codul de bare corespunzător.  
Odată ce modificările sunt finalizate, este necesar să salvați lista cu butonul **Salvează**. 

#### Creare liste

Tot din form-ul principal se pote crea o nouă listă utilizând butonul **Nou**.  

Automat sunt propuse: data curentă și *gestiunea de expediere* indicată în tabelul [Parametrii Gestiuneaui de Încărcare/Descărcare pentru utilizator (Parametrii gestiune încărcare/descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping); astfel, operatorul va trebui să introducă datele referitoare la gestiunea și locația de destinație.  
În plus, cu introducerea *tipului dispoziției de livrare*, este propus și numărul listei.  
Utilizatorul poate introduce, în tab *Detaliu UdI*, unitățile de încărcare care vor fi adăugate listei prin citirea codurilor de bare corespunzătoare.   
De asemenea, în tab-ul de filtru, se poate deschide o listă selectată doar pentru vizualizare cu butonul **Vizualizează** și se poate șterge cu butonul omonim.

Mișcarea de gestiune relativă va fi generată numai prin procedura [Confirmă transfer](/docs/logistics/wms/udc/confirm-transfer).

**Parametrii încărcare/descărcare** de introdus în tabelul [Parametrii Încărcare/Descărcare pentru utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

Pentru acest parametru, șablonul de gestiune poate fi necompletat.

:::note Nota  
Dacă în [Parametrii încărcare/descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) este asociată pentru acel utilizator o singură gestiune, se propune implicit aceea. Dacă însă sunt mai multe asociate, nu este propus implicit niciunul și utilizatorul poate alege doar dintre cele existente.
:::

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod Barcode** consultați pagina [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).