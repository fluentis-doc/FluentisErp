---
title: Achiziţii
sidebar_position: 1
---

Gestionarea **Achiziţii** din Fluentis ERP este concepută pentru a sprijini operatorii din cadrul companiilor în gestionarea rapidă a întreagăi documentații referitoare la administrarea lanțului de aprovizionare.   

Prin emiterea comenzilor de furnizare, care pot avea loc în mod manual sau automat, este posibil să se procedeze cu aprovizionarea bunurilor necesare gestionării producției sau stocului și crearea tuturor documentelor necesare pentru procesul de furnizare, inclusiv *Avize de achiziţie*, *Facturi de Vânzare*, *Cereri de Achiziţie*, *Cereri de oferte*.   

Interconectarea cu domeniul **Logistică** garantează actualizarea stocurilor și generarea cererilor de refill pentru stocuri, în timp ce integrarea cu domeniul **Administrativ** facilitează gestionarea financiară a achizițiilor, asigurând un proces fluid și înregistrarea precisă a tranzacțiilor.    
Zona *Achiziţii* este, de asemenea, integrată cu **Planificare** prin generarea RDA (Cereri de Aprovizionare) pe baza cererilor de material necesar pentru producție și cu domeniul **Vânzări** datorită posibilității de a genera comenzi de furnizor pe baza comenzilor clienților.

## Modulele domeniului

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Cereri de achiziție (Richieste di acquisto)</Link>
        <p>Elaborarea cererii de material de achiziționat în baza cererilor provenite din alte departamente sau semnalărilor de lipsuri.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Cereri de ofertă (Richieste di offerta)</Link>
        <p>Compararea ofertelor furnizorilor pentru a alege cea mai bună ofertă și a o transforma în comandă de achiziție.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Comenzi furnizori (Ordini fornitori)</Link>
        <p>Gestionarea și organizarea procesului de achiziție a bunurilor și serviciilor de la furnizori.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Recepția bunurilor (Ricevimento merci)</Link>
        <p>Înregistrarea sosirii bunurilor înainte de crearea DDT-ului sau a facturii de achiziție.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">DDT de achiziție (DDT di acquisto)</Link>
        <p>Urmărirea și documentarea transferului bunurilor în intrare și înregistrarea la stoc.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Facturi de achiziție (Fatture di acquisto)</Link>
        <p>Atestarea sumei datorate de către companie unui furnizor pentru bunuri sau servicii primite, specificând costurile, TVA-ul și condițiile de plată.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-price-lists/general-overview">Listine furnizori (Listini fornitori)</Link>
        <p>Gestionarea și actualizarea prețurilor convenite cu furnizorii, automatizând aplicarea prețurilor, reducerilor și eventualelor condiții personalizate.</p>
    </div>
    <div className="card">
###     Comenzi de achiziție (Commesse di acquisto)
        <p>Gestionarea comenzilor de achiziție pe baza contractelor negociate anterior cu furnizorul.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     Gestionarea prețurilor (Gestione prezzi)
        <p><Link to="/docs/purchase/price-control/definition" className="bold-link">Definirea politicilor de reduceri (Definizione politiche sconti)</Link></p>
        <p>Aplicarea reducerilor asociate furnizorului, clasei de articole și/sau categoriilor de reducere.</p>
        <p><Link to="/docs/purchase/price-control/formulas" className="bold-link">Formulele de actualizare a politicilor de prețuri/reduceri (Formule di aggiornamento politiche prezzi/sconti)</Link></p>
        <p>Definirea regulilor de actualizare a prețurilor în listele de achiziție/vânzare.</p>
        <p><Link to="/docs/purchase/price-control/correspondence" className="bold-link">Corespondența categoriilor de discount achiziție/vânzare (Corrispondenza categorie sconto acq//ven)</Link></p>
        <p>Asocierea categoriei de discount generice la condițiile de discount care trebuie aplicate clienților/ furnizorilor proprii.</p>
    </div>
</div>

## Lansare rapidă (Fast start)

:::important ATENȚIE (ATTENZIONE)
Înainte de a utiliza funcționalitățile disponibile, este necesar să configurați Tabelele și Parametrii domeniului.

Alternativ, este disponibilă procedura de Lansare Rapidă descrisă mai jos. 
:::

Lansarea Rapidă este o procedură concepută pentru a simplifica și accelera inițializarea software-ului de gestionare, permițând popularea automată a sistemului cu parametrii și tabele de bază. Această funcționalitate reduce semnificativ timpul și efortul necesar pentru configurarea inițială, evitând introducerea manuală a fiecărei setări.    

Vă recomandăm să consultați articolul corespunzător [articol](/docs/guide/fast-start#tabelle-acquisti) înainte de a aborda modulul.