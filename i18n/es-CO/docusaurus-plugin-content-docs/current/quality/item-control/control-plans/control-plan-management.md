---
title: Plan de control
sidebar_position: 2
ai_generated: true
---

La gestión se encuentra en la ruta **Calidad > Controles de artículo > Planes de control > Nuevo plan de control<!-- Piano di controllo -->** o puede realizarse desde la **Búsqueda de planes de control<!-- Ricerca Piani di controllo -->**.   

:::important ¿Para qué sirve?<!-- A cosa serve -->
En los Planes de control<!-- Piani di controllo --> se catalogan todas las pruebas planificadas, verificaciones, mediciones necesarias y los valores a obtener para garantizar que los materiales y productos asociados se mantengan dentro de los límites de las propiedades requeridas.  
A través de los Planes de control<!-- Piani di controllo --> es posible predefinir los controles a realizar durante el ciclo de vida de un artículo: desde los controles en la aceptación de materiales, devoluciones de cuenta trabajo<!-- conto lavoro -->, hasta los controles durante el ciclo productivo de un artículo: antes, durante y después de la creación del producto.
Los Planes de control<!-- Piani di controllo -->, así como las Fichas técnicas<!-- Schede tecniche -->, pueden personalizarse para Cliente y/o Proveedor. También en este documento se gestionan las revisiones y la trazabilidad entre los Planes de control<!-- Piani di controllo --> deseados.  
En cada prueba planificada es posible indicar: si la prueba se realiza internamente o en terceros, la categoría y el instrumento de medición a utilizar, los tipos de valor requeridos (Sí/No o Numéricos), el valor nominal, los límites inferior y superior especificables en porcentaje o en valor absoluto, el número de mediciones a realizar y con qué frecuencia.  

Enumeramos algunos ejemplos de tipos posibles de Planes de control<!-- Piani di controllo -->: Controles en recepción, Controles en recepción para proveedores críticos, Controles de producción, Pruebas finales.  

Por estándar está disponible el informe de: **Plan de control<!-- Piano di controllo -->**.
:::

## Botones de comando<!-- Pulsanti di comando -->

### ![](/img/neutral/common/save.png) Guardar<!-- Salva -->

Al presionar este botón se almacenan todas las informaciones modificadas del *Plan de control<!-- Piano di controllo -->* visualizado.  

### ![](/img/neutral/common/duplicate.png) Duplicar Plan de control<!-- Duplica Piano di controllo -->

Es posible duplicar el *Plan de control<!-- Piano di controllo -->* mostrado en un nuevo *Plan de control<!-- Piano di controllo -->*. Solo hay que presionar el botón **Duplicar<!-- Duplica -->**.  
Se visualiza una solicitud de:
> **Tipo de plan de control<!-- Tipo piano di controllo -->**: es el *Tipo de plan de control<!-- Tipo piano di controllo -->* del nuevo *Plan de control<!-- Piano di controllo -->* (dato obligatorio).  
> Se propone el *Tipo de plan de control<!-- Tipo piano di controllo -->* del *Plan de control<!-- Piano di controllo -->* original.  
> **Número<!-- Numero -->**: es el *Número<!-- Numero -->* progresivo del nuevo *Plan de control<!-- Piano di controllo -->* (dato obligatorio).  
> Se propone según lo previsto por la *Numeración<!-- Numerazione -->* asociada al *Tipo de plan de control<!-- Tipo piano di controllo -->* y a la fecha actual.  
> **Duplicar con trazabilidad<!-- Duplica con rintracciabilità -->**: indica si se desea mantener la relación/trazabilidad, del *Plan de control<!-- Piano di controllo -->* de destino, en el *Plan de control<!-- Piano di controllo -->* de origen y en particular en la pestaña *Planes de control relacionados<!-- Piani di controllo correlati -->*.  

Luego, presione el botón **OK** o el botón **Cancelar<!-- Cancel -->** si desea continuar o no con la actividad de duplicación.  
Al finalizar el proceso, el nuevo *Plan de control<!-- Piano di controllo -->* se visualiza.

### ![](/img/neutral/common/execute.png) Crear nueva revisión<!-- Crea nuova revisione -->

Para poder crear una nueva *Revisión<!-- Revisione -->* de un *Plan de control<!-- Piano di controllo -->* existente es necesario presionar el botón **Crear nueva edición<!-- Crea nuova edizione -->**.  
Se crea un nuevo *Plan de control<!-- Piano di controllo -->*, con toda la información del *Plan de control<!-- Piano di controllo -->* de origen pero con el índice de *Revisión<!-- Revisione -->* incrementado y la *Fecha de inicio de validez<!-- Data di inizio validità -->* igual a la fecha actual.
El *Plan de control<!-- Piano di controllo -->* de origen termina su validez ajustando automáticamente la *Fecha de fin de validez<!-- Data fine validità -->* igual a la fecha actual.  
Al finalizar el proceso, se visualiza la nueva *Revisión<!-- Revisione -->* del *Plan de control<!-- Piano di controllo -->*.

### Crear nueva Ficha técnica<!-- Crea nuova Scheda tecnica -->

Desde el *Plan de control<!-- Piano di controllo -->* es posible crear una *Ficha técnica<!-- Scheda tecnica -->*; para hacer esto es necesario presionar el botón **Crear nueva Ficha técnica<!-- Crea nuova Scheda tecnica -->**.  
Se crea una nueva *Ficha técnica<!-- Scheda tecnica -->*, con toda la información del *Plan de control<!-- Piano di controllo -->* de origen pero con el índice de *Revisión<!-- Revisione -->* a *cero* y con la *Fecha de inicio de validez<!-- Data di inizio validità -->* igual a la fecha actual. Se visualizará una solicitud de:  
> **Tipo de ficha<!-- Tipo scheda -->**: es el *Tipo de ficha<!-- Tipo scheda -->* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio).  
> **Del cliente<!-- Del cliente -->**: es el *Cliente* de la nueva *Ficha técnica<!-- Scheda tecnica -->*, se propone la cuenta *Cliente* del *Plan de control<!-- Piano di controllo -->* de origen (solo si es de *Tipo cuenta cliente<!-- Tipo conto cliente -->*).  
> **Nuevo código<!-- Nuovo codice -->**: es el *Código* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio), se propone de acuerdo a lo previsto por el *Método de codificación<!-- Metodo di Codifica -->* asociado al *Tipo de ficha técnica<!-- Tipo scheda tecnica -->*.  
> **Rev.**: es el índice de *Revisión<!-- Revisione -->* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio), se propone en *cero*.  
> **Crear manteniendo la trazabilidad<!-- Crea mantenendo la rintracciabilità -->**: indica si se desea mantener la relación/trazabilidad, en la *Ficha técnica<!-- Scheda tecnica -->* de destino, en el *Plan de control<!-- Piano di controllo -->* de origen y en particular en la pestaña *Fichas correlacionadas<!-- Schede correlate -->*.  

Luego, presione el botón **OK** o el botón **Cancelar<!-- Cancel -->** si desea continuar o no con la actividad de creación.  
Al finalizar el proceso, la nueva *Ficha técnica<!-- Scheda tecnica -->* se visualiza.  

### ![](/img/neutral/common/duplicate.png) Duplicar prueba<!-- Duplica prova -->

Relacionado con la pestaña *Pruebas planificadas<!-- Prove pianificate -->*, el botón está habilitado solo si, desde la lista *Pruebas planificadas<!-- Prove pianificate -->*, se ha seleccionado solo una fila *Prueba<!-- Prova -->*.
Toda la información de la *Prueba planificada<!-- Prova pianificate -->* de origen se duplica en una nueva *Prueba planificada<!-- Prova pianificate -->* añadiéndose en *Secuencia<!-- Sequenza -->* a las *Pruebas planificadas<!-- Prove pianificate -->* ya existentes.

## Gestión de datos<!-- Gestione dati -->

### Datos de cabecera<!-- Dati di testata -->

La información gestionable es:  
> **Tipo**: es el *Tipo de plan de control<!-- Tipo piano di controllo -->* (dato obligatorio).  
> Al ingresar manualmente un nuevo *Plan de control<!-- Piano di controllo -->* se propone el *Tipo de plan de control<!-- Tipo piano di controllo -->* indicado en el expander *Planes de control<!-- Piani di controllo -->* de la pestaña *General<!-- Generale -->* presente en *Parámetros de control de artículos<!-- Parametri Controllo articoli -->*.   
>
> **Año/Número<!-- Anno/Numero -->**: son el *Año<!-- Anno -->* y *Número<!-- Numero -->* del *Plan de control<!-- Piano di controllo -->* (datos obligatorios).  
> Al ingresar un nuevo *Plan de control<!-- Piano di controllo -->* el *Año<!-- Anno -->* y el *Número<!-- Numero -->* se proponen según la fecha del día y la *Numeración<!-- Numerazione -->* asociada al *Tipo de plan de control<!-- Tipo piano di controllo -->*.  
>
> **Rev.**: es la *Revisión<!-- Revisione -->* del *Plan de control<!-- Piano di controllo -->* (dato obligatorio).  
La información es modificable si se está creando un nuevo *Plan de control<!-- Piano di controllo -->* de lo contrario es de solo lectura; se puede modificar de forma guiada mediante el botón *Crear nueva revisión<!-- Crea nuova revisione -->* que incrementa el valor anterior de *Revisión<!-- Revisione -->* en una unidad.  
>
> **Descripción**: es la descripción del *Plan de control<!-- Piano di controllo -->*.  
> **Para el cliente/proveedor<!-- Per il cliente/fornitore -->**: es la razón social del *Cliente* o *Proveedor*. Las *Pruebas planificadas<!-- Prove pianificate -->* se personalizan por *Cliente* o *Proveedor* y *Artículos asociados<!-- Articoli associati -->*.
> **Notas del cliente/proveedor<!-- Note del cliente/fornitore -->**: anotaciones libres para el cliente/proveedor.  
>
> **Especificación del cliente<!-- Specifica del cliente -->**: expander donde es posible ingresar:  
>
>> **Fecha de la especificación<!-- Data specifica -->**: es la fecha de la especificación recibida del cliente.  
>> **Referencia<!-- Riferimento -->**: anotaciones libres sobre la referencia de la especificación recibida del cliente que requiere controles específicos para los *Artículos asociados<!-- Articoli associati -->*.  
>> **Fecha de vencimiento<!-- Data scadenza -->**: es la fecha de fin de validez de la especificación recibida del cliente.  
>> **Notas<!-- Note -->**: anotaciones libres relativas a la especificación recibida del cliente.  
>
> **Fecha de solicitud/Solicitado por<!-- Data richiesta/Richiesta da -->**: solo las referencias de en qué fecha y quién solicitó la creación del *Plan de control<!-- Piano di controllo -->*.  
>
> **Validez: Inicio/Fin<!-- Validità: Inizio/Fine -->**: son las fechas de inicio y fin de validez del *Plan de control<!-- Piano di controllo -->*.  
> Las fechas se gestionan automáticamente al crear una nueva *Revisión<!-- Revisione -->* del *Plan de control<!-- Piano di controllo -->*.
>
> **Responsable**: es el *Empleado<!-- Dipendente -->* responsable del *Plan de control<!-- Piano di controllo -->*.  
> Al ingresar manualmente un nuevo *Plan de control<!-- Piano di controllo -->* se propone el *Responsable* indicado en el expander *Planes de control<!-- Piani di controllo -->* de la pestaña *General<!-- Generale -->* presente en *Parámetros de control de artículos<!-- Parametri Controllo articoli -->*.  
>
> **Notas**: anotaciones libres.  
>
> **Origen del plan de control<!-- Origine piano di controllo -->**: expander donde es posible ingresar:  
>
>> **Ficha de origen<!-- Scheda origine -->**: contiene las referencias de la *Ficha técnica de origen<!-- Scheda tecnica di origine -->* (*Tipo de ficha*, *Código* y *Revisión*).  
>> **Plan de control<!-- Piano di controllo -->**: contiene las referencias del *Plan de control de origen<!-- Piano di controllo di origine -->* (*Tipo de plan*, *Año*, *Número* y *Revisión*).  
>> **Motivo de la revisión<!-- Motivo della revisione -->**: una breve descripción del motivo que llevó a la revisión.  
>> La información puede ser modificada si el *Plan de control<!-- Piano di controllo -->* sigue siendo válido.  

### Atributos del plan de control<!-- Attributi piano di controllo -->
Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Plan de control<!-- Piano di controllo -->*.  
Se heredan de los *Extra data* asociados al *Tipo de plan de control<!-- Tipo piano di controllo -->*.

### Pruebas planificadas<!-- Prove pianificate -->
Contiene las *Pruebas planificadas<!-- Prove pianificate -->* de los *Artículos* o *Atributos del artículo<!-- Attributi articolo -->* del *Plan de control<!-- Piano di controllo -->*.
La lista se compone de la siguiente información:  
> **Secuencia<!-- Sequenza -->**: es la secuencia de realización de la *Prueba planificada<!-- Prova pianificata -->*.
> **Tipo de prueba<!-- Tipo prova -->**: es el código de la *Prueba planificada<!-- Prova pianificata -->*.
> **Descripción del tipo de prueba<!-- Descrizione tipo prova -->**: es la descripción de la *Prueba planificata<!-- Prova pianificata -->*. La información es de solo lectura.
> **Descripción**: es la descripción editable de la *Prueba planificada<!-- Prova pianificata -->*.
> **Referencia del plan de control estándar<!-- Riferimento piano di controllo standard -->**: es un campo descriptivo que contiene referencias a codificaciones de pruebas reconocidas globalmente.
> **Prueba interna<!-- Prova interna -->**: indica si la *Prueba<!-- Prova -->* se realiza internamente o en un laboratorio externo.
> **Laboratorio externo<!-- Laboratorio esterno -->**: es la razón social del *Proveedor<!-- Fornitore -->* que realizará la prueba. La información es de solo lectura si se indica *Prueba interna<!-- Prova interna -->*.
> **Categoría del instrumento de medición<!-- Categoria Strumento di misura -->**: es la *Categoría del instrumento de medición<!-- Categoria dello strumento di misura -->* a utilizar para registrar los *Valores<!-- Valori -->* expresados en la *Prueba<!-- Prova -->*.
> **Instrumento de medición<!-- Strumento di misura -->**: es el *Instrumento de medición<!-- Strumento di misura -->* a utilizar para registrar los *Valores<!-- Valori -->* expresados en la *Prueba<!-- Prova -->*.
> **Unidad de medida<!-- Unità di misura -->**: es la *Unidad de medida<!-- Unità di misura -->* en la que se expresan el *Valor nominal<!-- Valore nominale -->* y los *Límites mínimo y máximo<!-- Limiti minimo e massimo -->* si se expresan en valor y no en porcentaje.
> **Tipo de valor<!-- Tipo valore -->**: es el *Tipo de valor<!-- Tipo valore -->* para expresar el *Valor nominal<!-- Valore nominale -->*; los *Tipos de valor<!-- Tipi valore -->* posibles son: *Numérico*, *Sí/No* o *Texto*.
> **Tipo de límite<!-- Tipo limite -->**: habilitado si el *Tipo de valor<!-- Tipo valore -->* es *Numérico*, es el *Tipo de límite<!-- Tipo limite -->* que pilotará la habilitación de los *Límites<!-- Limiti -->* y valores de *Tolerancia<!-- Tolleranza -->*.
> **Valor nominal<!-- Valore nominale -->**: es el valor teórico esperado de la *Prueba planificada<!-- Prova pianificata -->*.
> **Límite mínimo<!-- Limite minimo -->**: límite mínimo permitido respecto al *Valor nominal<!-- Valore nominale -->*.
> **L.min.(tol-)<!-- L.min.(toll-) -->**: es el límite de tolerancia negativa sobre el límite mínimo.
> **L.min.(tol+)<!-- L.min.(toll+) -->**: es el límite de tolerancia positiva sobre el límite mínimo.
> **Límite máximo<!-- Limite massimo -->**: límite máximo permitido respecto al *Valor nominal<!-- Valore nominale -->*.
> **L.max.(tol-)<!-- L.max.(toll-) -->**: es el límite de tolerancia negativa sobre el límite máximo.
> **L.max.(tol+)<!-- L.max.(toll+) -->**: es el límite de tolerancia positiva sobre el límite máximo.
> **%**: indica si el *Límite mínimo<!-- Limite minimo -->* y el *Límite máximo<!-- Limite massimo -->* se expresan en porcentaje.
> **Tipo de control de la prueba<!-- Tipo controllo prova -->**: es el *Tipo de control<!-- Tipo controllo -->* a realizar sobre la *Prueba planificada<!-- Prova pianificata -->*.
> **Frecuencia**: anotaciones libres relativas a la frecuencia de muestreo.
> **Número de mediciones<!-- Numero rilevazioni -->**: es el número mínimo sugerido de mediciones a realizar.
> **Fecha de inicio de validez<!-- Data inizio validità -->**: es la fecha de inicio de validez de la *Prueba planificada<!-- Prova pianificata -->*.
> **Fecha de fin de validez<!-- Data fine validità -->**: es la fecha de fin de validez de la *Prueba planificada<!-- Prova pianificata -->*.
> **Impreso<!-- Stampato -->**: indica si la información es imprimible o no en el reporte: *Plan de control<!-- Piano di controllo -->*.
> **Notas**: anotaciones libres.
> **Descripción de la categoría del instrumento de medición<!-- Descrizione Categoria Strumento di misura -->**: es la *Descripción de la categoría del instrumento de medición<!-- Descrizione Categoria dello strumento di misura -->* a utilizar. La información es de solo lectura.
> **Descripción del instrumento de medición<!-- Descrizione Strumento di misura -->**: es la *Descripción del instrumento de medición<!-- Descrizione Strumento di misura -->* a utilizar. La información es de solo lectura.

#### Atributos de prueba planificada<!-- Attributi prova pianificata -->
Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para la *Prueba planificada<!-- Prova pianificata -->*.  
Se heredan de los *Atributos del tipo de prueba<!-- Attributi tipo prova -->* presentes en los *Tipos de prueba<!-- Tipi prova -->*.

#### Configuración de la prueba<!-- Configurazione della prova -->
Contiene [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) necesarios para que los operadores preparen todas las herramientas necesarias para iniciar una determinada prueba. Pueden considerarse configuraciones necesarias, información operativa previa a la ejecución de la prueba.  
Se heredan de los *Parámetros de configuración de prueba e instrumento de medición<!-- Parametri di configurazione prova e strumento di misura -->* presentes en los *Tipos de prueba<!-- Tipi prova -->*.

#### Funciones de registro y aprobación<!-- Funzioni di rilevamento ed approvazione -->
Es una asignación de derechos que enumera quién puede registrar y/o aprobar los valores de la prueba.  
Se hereda de las *Funciones de registro y aprobación<!-- Funzioni di rilevamento ed approvazione -->* presentes en los *Tipos de prueba<!-- Tipi prova -->*.
La lista se compone de la siguiente información:  
> **Función<!-- Funzione -->**: es el código de la *Función empresarial<!-- Funzione aziendale -->*.
> **Descripción de la función<!-- Descrizione funzione -->**: es la descripción de la *Función empresarial<!-- Funzione aziendale -->*.
> **Tipo de actividad<!-- Tipo attività -->**: es el derecho otorgado a la *Función empresarial<!-- Funzione aziendale -->* durante las actividades de registro y/o aprobación de una prueba. Los valores posibles son:  
> - *Puede registrar* - la *Función empresarial<!-- Funzione aziendale -->* tiene permisos solo para registrar valores;  
> - *Puede aprobar* - la *Función empresarial<!-- Funzione aziendale -->* tiene permisos solo para aprobar la prueba;  
> - *Puede registrar y aprobar* - la *Función empresarial<!-- Funzione aziendale -->* tiene permisos tanto para registrar valores como para aprobar la prueba.  
>
> Las demás *Funciones empresariales<!-- Funzioni aziendali -->* no listadas no tienen derecho para registrar valores ni aprobar la prueba.  
> Si no se especifican *Funciones empresariales<!-- Funzioni aziendali -->*, todos los operadores podrán registrar valores y aprobar la prueba.
>
> **Notas**: anotaciones libres.

#### Documentos adjuntos<!-- Documenti allegati -->
En esta lista es posible insertar y consultar posibles adjuntos; es posible visualizar la vista previa.

### Clientes/Proveedores<!-- Clienti/Fornitori -->
Contiene los *Clientes*, *Clientes finales* y *Proveedores* para los que realizar las *Pruebas planificadas<!-- Prove pianificate -->* a los *Artículos asociados<!-- Articoli associati -->*.  
La lista se compone de la siguiente información:  
> **Cliente/Proveedor<!-- Cliente/Fornitore -->**: es la razón social del *Cliente* o "Proveedor".
> **Cliente final<!-- Cliente finale -->**: es el código y descripción del *Cliente final*.
> **Fecha de la especificación<!-- Data specifica -->**: es la fecha de la especificación recibida del cliente.
> **Referencias de la especificación<!-- Riferimenti specifica -->**: anotaciones libres sobre la referencia de la especificación recibida del cliente que requiere controles específicos para los *Artículos asociados<!-- Articoli associati -->*.
> **Nota de la especificación<!-- Nota specifica -->**: anotaciones libres referidas a la especificación recibida del cliente.
> **Notas**: anotaciones libres.

### Artículos asociados<!-- Articoli associati -->
Contiene los *Artículos* con características similares y listados en la lista de *Pruebas planificadas<!-- Prove pianificate -->*.
La lista se compone de la siguiente información:  
> **Clase**: es la clase del *Artículo*.
> **Código del artículo<!-- Codice articolo -->**: es el código del *Artículo*.
> **Descripción del artículo<!-- Descrizione articolo -->**: es la descripción del *Artículo*.
> **Variante**: es el código de la *Variante del artículo<!-- Variante articolo -->*.
> **Descripción de la variante<!-- Descrizione variante -->**: es la descripción de la *Variante del artículo<!-- Variante articolo -->*. La información es de solo lectura.
> **Proveedor<!-- Fornitore -->**: es la razón social del *Proveedor<!-- Fornitore -->* que entrega el *Artículo* para el cual se activarán las *Pruebas planificadas<!-- Prove pianificate -->*.
> **Notas**: anotaciones libres.

### Atributos de artículo<!-- Attributi articolo -->
Como alternativa a la lista de *Artículos asociados<!-- Articoli associati -->* es posible ingresar características (en formato [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata)) para las cuales las *Pruebas planificadas<!-- Prove pianificate -->* del *Plan de control<!-- Piano di controllo -->* son válidas.

### Fichas correlacionadas<!-- Schede correlate -->
En este listado es posible visualizar las *Fichas técnicas<!-- Schede tecniche -->* creadas con trazabilidad desde el *Plan de control<!-- Piano di controllo -->* visualizado.  
Haciendo doble clic en la línea deseada, es posible gestionar la *Ficha técnica<!-- Scheda tecnica -->* seleccionada.

### Planes de control relacionados<!-- Piani di controllo correlati -->
En este listado es posible visualizar los *Planes de control<!-- Piani di controllo -->* duplicados con trazabilidad desde el *Plan de control<!-- Piano di controllo -->* visualizado.  
Haciendo doble clic en la línea deseada, es posible gestionar el *Plan de control<!-- Piano di controllo -->* seleccionado.

### Revisiones<!-- Revisioni -->
En este listado es posible visualizar el historial de *Revisiones<!-- Revisioni -->* anteriores al *Plan de control<!-- Piano di controllo -->* visualizado.  
Haciendo doble clic en la línea deseada, es posible gestionar el *Plan de control<!-- Piano di controllo -->* seleccionado.

### Documentos vinculados<!-- Documenti collegati -->
En este listado es posible insertar y consultar posibles adjuntos; es posible visualizar la vista previa.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).