Para la búsqueda automática del *plan de control* a asociar a cada *articolo* presente en la línea del documento seleccionado, se utiliza esta metodología:  

- para los documentos de producción (*declaraciones de producción* y *Fases del pedido de producción*), se considera el *plan de control* indicado en la *Fase*;  
- para los otros documentos, se considera la cuenta del *cliente* o *proveedor* asociada al *tipo de documento* y la *fecha del documento*;  
con esta información se busca el *plan de control*, válido hasta la fecha del documento y para el *artículo* seleccionado, que se va a asociar;  
en cada búsqueda, si no se encuentra el *plan de control*, se prosigue con la siguiente combinación de valores;  
si se encuentra más de un *plan de control*, el *control* se inserta de todos modos, pero se deberá elegir cuál de los *plan de control* asociar entre los encontrados;  
la secuencia de búsqueda es la siguiente:  
    - búsqueda entre los *planos de control* del *Tipo de plan* indicado como *Tipo de plan de control* del *Tipo de documento para la importación* presente en los *Parámetros de controles del artículo* y cuenta del *cliente* o *proveedor* del documento y, posteriormente, aquellos sin cuenta de *cliente* o *proveedor*;    
    - búsqueda entre los *planos de control* de los otros *Tipos de plan* no indicados como *Tipo de plan de control* del *Tipo de documento para la importación* presente en los *Parámetros de controles del artículo* y cuenta del *cliente* o *proveedor* del documento, y, posteriormente, aquellos sin cuenta de *cliente* o *proveedor*.  
    - si no se encuentra, se visualizará un mensaje de aviso, el *Control de artículo* se inserta de todos modos pero sin el *plan de control*, sin las *pruebas* a controlar y se inserta una indicación en las *solicitudes de planes de control*.