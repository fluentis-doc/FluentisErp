---
title: NABAVKA
sidebar_position: 1
---

Modul **Nabavka** u Fluentis ERP-u osmišljen je kako bi korisnicima omogućio brzo i efikasno upravljanje kompletnom dokumentacijom vezanom za upravljanje lancem snabdevanja.

Kreiranjem narudžbina dobavljača, ručno ili automatski, moguće je sprovesti nabavku robe potrebne za proizvodnju ili skladište i kreirati sve dokumente potrebne za proces nabavke, uključujući **prijem robe**, **ulazne račune**, **zahteve za nabavku** i **zahteve za ponudu**.

Povezanost sa modulom **Logistika** omogućava ažuriranje stanja zaliha i automatsko generisanje zahteva za obnovu zaliha, dok integracija sa modulom **Administracija** olakšava finansijsko upravljanje nabavkom, obezbeđujući efikasan tok procesa i tačno evidentiranje svih transakcija.

Modul **Nabavka** takođe je povezan sa modulom **Planiranje**, kroz automatsko generisanje zahteva za nabavku na osnovu potreba proizvodnje za materijalom, kao i sa modulom **Prodaja**, zahvaljujući mogućnosti kreiranja narudžbina dobavljača iz narudžbina kupaca.

## Moduli

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Zahtevi za nabavku</Link>
        <p>Obrada zahteva za nabavku materijala na osnovu zahteva drugih odeljenja ili prijavljenog manjka zaliha.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Zahtevi za ponudu</Link>
        <p>Upoređivanje ponuda dobavljača radi izbora najpovoljnije ponude i njenog pretvaranja u narudžbinu dobavljača.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Narudžbine dobavljača</Link>
        <p>Upravljanje i organizacija procesa nabavke robe i usluga od dobavljača.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Prijem robe</Link>
        <p>Evidentiranje prijema robe pre kreiranja otpremnice nabavke ili ulaznog računa.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">Prijem robe</Link>
        <p>Praćenje i dokumentovanje ulaza robe i evidentiranje skladišnih prijema.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Ulazni računi</Link>
        <p>Evidentiranje iznosa koji preduzeće duguje dobavljaču za isporučenu robu ili pružene usluge, uključujući troškove, PDV i uslove plaćanja.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-price-lists/general-overview">Cenovnici dobavljača</Link>
        <p>Upravljanje i ažuriranje cena ugovorenih sa dobavljačima uz automatsku primenu cena, popusta i posebnih uslova.</p>
    </div>
    <div className="card">
###     Nalog za nabavku
        <p>Upravljanje nalozima nabavke na osnovu prethodno ugovorenih uslova sa dobavljačem.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     Matrica konfiguracije popusta
        <p><Link to="/docs/purchase/price-control/definition" className="bold-link">Politike popusta</Link></p>
        <p>Primena popusta povezanih sa dobavljačem, klasom artikla i/ili kategorijama popusta.</p>
        <p><Link to="/docs/purchase/price-control/formulas" className="bold-link">Formule za ažuriranje politike cena/popusta</Link></p>
        <p>Definisanje pravila za ažuriranje cena u nabavnim i prodajnim cenovnicima.</p>
        <p><Link to="/docs/purchase/price-control/correspondence" className="bold-link">Povezivanje kategorija popusta nabavke i prodaje</Link></p>
        <p>Povezivanje opšte kategorije popusta sa uslovima popusta koji se primenjuju na kupce i dobavljače.</p>
    </div>
</div>

## Brzi početak (Fast Start)

:::important PAŽNJA
Pre korišćenja dostupnih funkcionalnosti potrebno je konfigurisati tabele i parametre modula.

Alternativno, možete koristiti postupak **Brzi početak**, opisan u nastavku.
:::

**Brzi početak** je postupak osmišljen za pojednostavljenje i ubrzavanje početne konfiguracije ERP sistema, omogućavajući automatsko popunjavanje osnovnih tabela i parametara. Ova funkcionalnost značajno smanjuje vreme i trud potreban za početnu konfiguraciju jer nije potrebno ručno unositi svako pojedinačno podešavanje.

Preporučujemo da pre početka rada sa ovim modulom pročitate odgovarajući [članak](/docs/guide/fast-start).