---
title: Pretraga planiranih naloga
sidebar_position: 2
---

Obrazac za pretragu dokumenata omogućava pretragu svih dokumenata radi njihovog pregleda, izmene i eventualnog brisanja ili unosa novog dokumenta; prozor se sastoji od oblasti za filtriranje i tabele sa rezultatima.

Nakon podešavanja svih željenih filtera, dovoljno je kliknuti na dugme **Traži** na *Ribbon traci* kako bi se rezultati prikazali u tabeli.

Za otvaranje detalja dokumenta dovoljno je da ga odaberete i dvaput kliknete mišem ili kliknete na dugme **Izmena** (omogućava ulazak u detalje i njihovu izmenu) ili na dugme **Prikaži** (omogućava ulazak u detalje i njihov pregled bez mogućnosti izmene).

*Vidi takođe*:

*Funkcionalnosti, dugmad i zajednička polja*  
*Dodavanje novih polja u obrasce za pretragu*

### Specifična dugmad

> [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): ovim dugmetom možete otvoriti ekran sa MRP parametrima artikla;

> [Sastavnica](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućava otvaranje ekrana sa sastavnicom artikla;

> [Proizvodni ciklusi](/docs/erp-home/registers/production/routes/new-route): omogućava pregled radnog ciklusa i povezanih proizvodnih faza artikla.

### Specifična polja

**Datum početka**: za planirane naloge nabavke ili kooperacije označava datum kada treba poslati narudžbinu dobavljaču koja će biti generisana prilikom izdavanja samog naloga. Za planirane proizvodne naloge označava planirani datum početka prve proizvodne faze;
**FOB datum** (*Free On Board*): predstavlja datum koji se izračunava sabiranjem *Planiranog datuma početka* i *Vremena nabavke* unetog na kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item) artikla koji je predmet planiranog naloga za nabavku. Ovo se obrađuje samo za artikle čiji je tip nabavke *Kupovina*;
**ETA datum** (*Estimated Time of Arrival*): označava datum koji se izračunava dodavanjem *FOB datuma* i *Lead Time otpreme* unetog na kartici *Preferirani dobavljači* artikla koji je predmet planiranog naloga za nabavku. Ovo se obrađuje samo za artikle čiji je tip nabavke *Kupovina*;
**Datum završetka**: za planirane naloge nabavke ili kooperacije označava datum kada isporuka treba da bude primljena i poklapaće se sa planiranim datumom prijema na stavci narudžbine dobavljaču koja će biti generisana prilikom izdavanja naloga. Za planirane proizvodne naloge označava planirani datum završetka poslednje proizvodne faze;
**Od minimalne raspoloživosti**: ova funkcionalnost je aktivna samo ako je planirani nalog generisan procedurom *Opšteg planiranja* i ako je u [Parametrima planiranja](/docs/planning/ms-master-scheduling/general-schedule) aktivirana opcija *Uzimaj u obzir minimalnu raspoloživost* u periodu. Oznaka će biti aktivna ako je *Datum minimalne raspoloživosti* u periodu planiranja nakon datuma potrebe; u suprotnom će biti neaktivna;
**Potvrđena količina**: različita je od nule samo ako je nalog generisan MRP obradom;
**Korišćena količina**: količina koja je rezervisana za dati artikl na tekući datum;
**Obavezan**: ako je oznaka aktivna, planirani proizvodni nalog nije moguće pomeriti nakon njegovog internog datuma početka.

U tabeli će nalozi biti prikazani različitim bojama u zavisnosti od *Vrste planiranog naloga* (nabavni, proizvodni ili kooperantski). Ovo se podešava u [Parametrima potreba materijala](/docs/configurations/parameters/production/resource-requirements-parameters), u odgovarajućoj tabeli gde je moguće definisati različite boje pozadine ili teksta za pojedine vrste naloga.

Iz ovog obrasca moguće je uneti i novi nalog klikom na dugme [Unesi nalog](/docs/planning/ms-master-scheduling/planned-orders/new-planned-order).