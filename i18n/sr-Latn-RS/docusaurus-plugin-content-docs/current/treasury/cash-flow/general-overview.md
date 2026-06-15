---
title: Uvod
sidebar_position: 1
---

Modul Novčani tok (*Cash Flow*) u Fluentis ERP-u predstavlja koristan alat za analizu planiranih novčanih tokova poslovanja.

Omogućava precizno praćenje priliva i odliva novca, pomažući kompanijama da održe jasan i ažuran pregled svoje likvidnosti. Modul je integrisan sa računovodstvenim i finansijskim podacima kako bi omogućio precizne analize i detaljne projekcije budućih novčanih tokova.

Modul takođe omogućava ručni unos dodatnih dospeća koja nisu evidentirana u sistemu, kao što su buduće projekcije zarada zaposlenih, planovi otplate ranije otpisanih dugovanja iz računovodstva i slično.

## Glavne funkcionalnosti

- Automatsko generisanje novčanog toka uz mogućnost uključivanja ili isključivanja pojedinih tipova finansijskih tokova pomoću jednostavnih opcija za označavanje.
- Mogućnost filtriranja po datumima za svaki pojedinačni tok.
- Detaljan pregled obrađenih podataka novčanog toka sa mogućnošću izvoza u različite formate, uključujući Excel.
- Izrada analitičkog izveštaja za pregled rezultata sa naglaskom na kretanje novčanog toka na kraju svakog meseca.
- Mogućnost pregleda analitičkog izveštaja grupisanog po matičnoj banci.
- Mogućnost definisanja planiranog datuma za svaki tok, paralelno sa njegovim prirodnim datumom dospeća.

## Lista tabela potrebnih za korišćenje modula

- [Tipovi finansijskih konta](/docs/configurations/tables/treasury/cash-flow-module-tables/financial-account-types)

- [Tipovi tokova](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types)

- [Tipovi datuma dospeća](/docs/configurations/tables/treasury/cash-flow-module-tables/due-date-types)

- [Tipovi narudžbina/otpremnica/faktura](/docs/configurations/tables/treasury/cash-flow-module-tables/order-dn-invoice-types)

- [Šifarnik kupaca/dobavljača/agenata](/docs/configurations/tables/treasury/cash-flow-module-tables/customer-vendor-agent-register)

Pored toga, za svaku aktiviranu vrstu finansijskog toka potrebno je izvršiti odgovarajuća podešavanja u povezanim tabelama, kao što su tipovi otpremnica, tipovi narudžbina (kupaca i dobavljača) i druge relevantne tabele, kako bi se definisalo koje vrste dokumenata treba uključiti u obračun novčanog toka.

Na primer, uobičajeno je da se iz obračuna isključe otpremnice koje nisu povezane sa prodajom, kao što su interni skladišni dokumenti, jer one ne generišu novčani tok.