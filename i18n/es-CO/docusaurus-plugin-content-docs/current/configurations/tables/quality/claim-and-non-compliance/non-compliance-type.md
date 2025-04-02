---
title: tipi di non conformità
sidebar_position: 2
---

La tabla se encuentra en la ruta **Tablas > Calidad > Reclamaciones y No conformidades > tipi di non conformità**.

En esta tabla es posible codificar los *tipi di non conformità*.  
El *Tipo de no conformidad* es parte integral, junto con el *Año* y *Número*, del código único de la *No conformidad*.  
Algunos ejemplos de uso de los *tipi di non conformità* los encontramos en las gestiones:  
> **non conformità** - en los *dati di testata*;  
> **parametri reclami e non conformità** - en la pestaña *generale*;  
y en todas las gestiones donde se utiliza la *No conformidad*.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de tipi di non conformità (Ricerca Tipi di non conformità)**

El formulario se compone de un área de filtro y una de resultados. Una vez que se han configurado todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados en la cuadrícula de resultados.

**Inserción de tipi di non conformità (Inserimento Tipi di non conformità)**

Para poder insertar nuevos *tipi di non conformità*, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** y la **descrizione**.

## tipi di non conformità (Tipi di non conformità)

Es la lista donde se ingresan las principales informaciones de los *tipi di non conformità*.  
La lista se compone de la siguiente información:  
> **tipo di non conformità**  
>> **codice**: es el código del *Tipo de no conformidad*.  
>> **descrizione**: es la descripción del *Tipo de no conformidad*.  
>   
> **utilizzo in**  
>> **non conformità interne**: indica la activación de la *funzione/area/reparto* como sujeto destinatario de la *No conformidad*.  
>> **non conformità a fornitore**: indica la activación del *fornitore* como sujeto destinatario de la *No conformidad*.  
>> **non conformità a cliente**: indica la activación del *cliente* como sujeto destinatario de la *No conformidad*.  
>   
> **numerazione**  
>> **codice**: es el código de la *Numeración*.  
>> **descrizione**: es la descripción de la *Numeración*.  
>> **oggetto**: es el tipo de objeto sobre el cual se basa la *Numeración*.  
>   
> **tipo fattura**  
>> **codice**: es el código del *Tipo de factura* que se utiliza para la *valorizzazione* de la *No conformidad* para la creación de las *Notas de cargo (Note di addebito)*.  
>> **descrizione**: es la descripción del *Tipo de factura*.  
>   
> **tipo iva**  
>> **codice**: es el código del *Tipo de IVA* que se utiliza para la *valorizzazione* de la *No conformidad* para la creación de las *Notas de cargo (Note di addebito)* en caso de que el sujeto destinatario *fornitore* o *cliente* no lo tuviera.  
>> **descrizione**: es la descripción del *Tipo de IVA*.  
>   
> **note**: anotaciones libres.

### Atributos de Tipo de no conformidad (Attributi Tipo di non conformità)

Es posible insertar datos adicionales [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para el *Tipo de no conformidad*.  
Estos *Datos adicionales* se heredan en las *No conformidades* de esa determinada tipología.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).