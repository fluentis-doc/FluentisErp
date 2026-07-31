---
title: NABAVA
sidebar_position: 1
---

Modul **Nabava** u Fluentis ERP-u osmišljen je kako bi korisnicima omogućio brzo i učinkovito upravljanje cjelokupnom dokumentacijom vezanom uz upravljanje lancem opskrbe.

Kreiranjem narudžbi dobavljača, ručno ili automatski, moguće je provesti nabavu robe potrebne za proizvodnju ili skladište te izraditi sve dokumente potrebne za proces nabave, uključujući **primke**, **ulazne račune**, **zahtjeve za nabavu** i **upite za ponudu**.

Povezanost s modulom **Logistika** omogućuje ažuriranje stanja zaliha i automatsko generiranje zahtjeva za obnovu zaliha, dok integracija s modulom **Administracija** olakšava financijsko upravljanje nabavom, osiguravajući učinkovit tijek procesa i točno evidentiranje svih transakcija.

Modul **Nabava** također je povezan s modulom **Planiranje**, kroz automatsko generiranje zahtjeva za nabavu na temelju potreba proizvodnje za materijalom, te s modulom **Prodaja**, zahvaljujući mogućnosti kreiranja narudžbi dobavljača iz narudžbi kupaca.

## Moduli

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Zahtjevi za nabavu</Link>
        <p>Obrada zahtjeva za nabavu materijala na temelju zahtjeva drugih odjela ili prijavljenog nedostatka zaliha.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Upiti za ponudu</Link>
        <p>Usporedba ponuda dobavljača radi odabira najpovoljnije ponude i njezina pretvaranja u narudžbu dobavljača.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Narudžbe dobavljača</Link>
        <p>Upravljanje i organizacija procesa nabave robe i usluga od dobavljača.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Prijem robe</Link>
        <p>Evidentiranje primitka robe prije kreiranja otpremnice nabave ili ulaznog računa.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">Primke</Link>
        <p>Praćenje i dokumentiranje ulaza robe te evidentiranje skladišnih primitaka.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Ulazni računi</Link>
        <p>Evidentiranje iznosa koji poduzeće duguje dobavljaču za isporučenu robu ili pružene usluge, uključujući troškove, PDV i uvjete plaćanja.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-price-lists/general-overview">Cjenici dobavljača</Link>
        <p>Upravljanje i ažuriranje cijena ugovorenih s dobavljačima uz automatsku primjenu cijena, popusta i posebnih uvjeta.</p>
    </div>
    <div className="card">
###     Nalog za nabavom
        <p>Upravljanje nalozima nabave na temelju prethodno ugovorenih uvjeta s dobavljačem.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     Matrica konfiguracije popusta
        <p><Link to="/docs/purchase/price-control/definition" className="bold-link">Politike popusta</Link></p>
        <p>Primjena popusta povezanih s dobavljačem, klasom artikla i/ili kategorijama popusta.</p>
        <p><Link to="/docs/purchase/price-control/formulas" className="bold-link">Formule ažuriranja politike cijena/popusta</Link></p>
        <p>Definiranje pravila za ažuriranje cijena u nabavnim i prodajnim cjenicima.</p>
        <p><Link to="/docs/purchase/price-control/correspondence" className="bold-link">Pridruživanje kategorija popusta nabave i prodaje</Link></p>
        <p>Povezivanje opće kategorije popusta s uvjetima popusta koji se primjenjuju na kupce i dobavljače.</p>
    </div>
</div>

## Brzi početak (Fast Start)

:::important PAŽNJA
Prije korištenja dostupnih funkcionalnosti potrebno je konfigurirati tablice i parametre modula.

Alternativno, možete koristiti postupak **Brzi početak**, opisan u nastavku.
:::

**Brzi početak** je postupak osmišljen za pojednostavljenje i ubrzavanje početne konfiguracije ERP sustava, omogućujući automatsko popunjavanje osnovnih tablica i parametara. Ova funkcionalnost značajno smanjuje vrijeme i trud potreban za početnu konfiguraciju jer nije potrebno ručno unositi svaku pojedinu postavku.

Preporučujemo da prije početka rada s ovim modulom pročitate odgovarajući [članak](/docs/guide/fast-start).