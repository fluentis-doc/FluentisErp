---
title: macchine
sidebar_position: 9
---

En esta tabla se codifican todas las máquinas utilizadas dentro de los diferentes ciclos de trabajo, cada una conectada a un centro de costos.

Las tablas relacionadas con las máquinas y los grupos de mano de obra son importantes para definir el costo de las diferentes fases, ya que el costo horario de la máquina por el tiempo de la máquina sumado al costo horario del grupo de mano de obra por el costo horario del operario dará como resultado el costo de la fase de trabajo.

La tabla permite insertar nuevos registros o buscar aquellos que ya existen para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de macchine (Ricerca Macchine)**

El formulario se compone de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de macchine (Inserimento Macchine)**

Para poder insertar nuevas codificaciones es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.

Para el nuevo registro, en la cuadrícula *macchine*, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** y la **descrizione** de la máquina. Se puede especificar si la máquina es **attiva** o no, el centro empresarial vinculado a la máquina, etc.

*Campos específicos*: 

**macchina**: código de la máquina;  
**descrizione**: descripción de la máquina;  
**attiva**: indica si la máquina es activa o no, es decir, si es utilizable y planificable;  
**Declaración de material móvil (Dichiarazione materiale mobile)**: se utiliza en el formulario de declaraciones de producción del WMS; si está activa, al declarar se solicitará también ingresar los materiales consumidos;  
**stampa etichetta**: se utiliza en el formulario de declaraciones de producción del WMS; si está activa, al confirmar la declaración de producción permite imprimir las etiquetas correspondientes;  
**centri di lavoro**: indica en qué centro de trabajo está ubicada la máquina;  
**centro aziendale**: indica el centro de costos al que se refiere la máquina;  
**reparti**: indica el código del departamento en el que está inserta la máquina;  
**Clase de máquina (Classe macchina)**: indica la clase de la máquina (en caso de que la máquina esté codificada como artículo);  
**Código artículo máquina (Codice articolo macchina)**: indica el código del artículo (en caso de que la máquina esté codificada como artículo);  
**sito produzione**: en el caso de más plantas indica el código del sitio productivo en el que se encuentra la máquina;  
**Descripción sitio productivo (Descrizione sito produttivo)**: indica la descripción del sitio productivo;  
**ubicazione**:  
**data acquisto**: indica la fecha de compra de la máquina;  
**precodice cespite**: indica el precódigo del activo;  
**numero**: indica el número del activo;  
**descrizione**: indica la descripción del activo;  
**ordine di acquisto**: indica el número del documento de compra del activo;  
**data installazione**: indica la fecha de instalación de la máquina;  
**data inserimento**: indica la fecha de inserción de la máquina;  
**data ultima modifica**: indica la fecha de última modificación de la máquina;  
**descrizione centro di costo**: indica la descripción del centro de costos al que se refiere la máquina;  
**descr. reparto**: indica la descripción del departamento en el que está inserta la máquina;  
**descrizione articolo macchina**: indica la descripción del artículo (en caso de que la máquina esté codificada como artículo);  

En la segunda sección, se puede detallar la **Secuencia (Sequenze)** de las máquinas alternativas.

*Campos específicos*:  

**sequenza**: indica la secuencia de las máquinas alternativas;  
**macchina**: indica el código de la máquina;  
**descrizione macchina**: indica la descripción de la máquina;  
**attiva**: indica si la máquina es activa o no, es decir, si es utilizable y planificable;  
**centro aziendale**: indica el centro de costos al que se refiere la máquina;  
**descrizione centro di costo**: indica la descripción del centro de costos al que se refiere la máquina;  

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funciones, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).