


Angular 2: Reactive Forms - Snapshot 4
===================
En esta parte veremos estos contenidos del curso de Pluralshight:

 - Reacting to changes

----------
### 1 -  Reacting to changes
----------
En esta parte veremos cómo reaccionar a los cambios que le usuario realiza en el formulario 

#### Watching

Para reaccionar a los cambios necesitamos observar si hay modificaciones. Para ello nos podemos suscribir con valueChanges a los cambios que se realizan en los FormControls y FormGroups

![enter image description here](https://i.imgur.com/lbCaku4.png)
![enter image description here](https://i.imgur.com/q2ZtOjk.png)


En muchas ocasiones es necesario cambiar determinadas reglas de validación. Anteriormente hemos hecho esto mediante la creación de eventos en la parte HTML pero es mucho más elegante reaccionar a un cambio. Utilizaremos la subscripción que nos da valueChanges para ello.


#### Reactive transformations

Existen muchas operaciones dentro de un objeto Observable. Una muy interesante es el debounceTime que nos permite ignorar eventos durante un tiempo determinado
![enter image description here](https://i.imgur.com/sWB1kIM.png)

Otras operaciones que nos pueden ser de utilidad:

![enter image description here](https://i.imgur.com/r3107xg.png)

----------
### 2 - Práctica
----------
El objetivo de esta práctica es eliminar el disparador para condicionar las validaciones sobre el control outOfStockReason. El objetivo es reaccionar según cambie el valor del selector de disponibilidad.

Además queremos quitar a lógica de los mensajes de validación, actualmente el HTML y trasladarlo a la clase. Nos apoyaremos en la propiedad valueChanges.




Para ello clonamos el **SnapShot 4** desde el primer commit:

    git clone https://github.com/tc-frontend/course_angular2_day2_snapshot4
    cd course_angular2_day2_snapshot4
    git checkout tags/init
    npm install

y hacer los pasos detallados en el historial de commits:

https://goo.gl/9m7jOj

----------
#### 1 - Usar valueChanges para cambio de regla de validacion en el selector de disponibilidad
Quitar los eventos del HTML y reacionar al camio de valor en la clase

https://goo.gl/ov9jBw

----------
#### 2 - Implementar la lógica de negocio necesaria para manejar mensajes de error en la validación
Para ello utilizar valueChanges de cada uno de los controles en los cuales hemos definido validación.
El objetivo es tener al menos un control funcionando y que en el HTML no haya lógica ninguna
 
En git podéis encontrar una solución más estándar
 
https://goo.gl/ReS2Q5

----------
#### 3 -  Utilizar debounceTime para retrasar 700ms los cambios de valor
De este modo podemos por ejemplo dejar un poco de tiempo mientras el usuario teclea la confirmación de código de producto.

https://goo.gl/x7fw4U

----------
Si queremos ver la App en nuestro browser

    npm start

Si queremos ver la solución final de este SnapShot:

    git checkout master
    npm install
    npm start









