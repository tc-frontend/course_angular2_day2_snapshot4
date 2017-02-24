


Angular 2: Reactive Forms - Snapshot 4
===================
En esta parte veremos estos contenidos del curso de Pluralshight:

 - Reacting to changes

----------
### 1 -  Reacting to changes
----------
En esta parte veremos como reaccionar a los cambios que le usuario realiza en le formulario 

#### Watching

Para reacionar a los cambios necesitamos observar si hay modificaciones. Para ello nos podemos suscribir con valueChanges a los cambios que se realizan en los FormControls y FormGroups

![enter image description here](https://i.imgur.com/lbCaku4.png)
![enter image description here](https://i.imgur.com/q2ZtOjk.png)


En muchas ocasiones es necesario cambiar determinadas reglas de validacion. Anteriormente hemos hecho esto mediate la creacion de eventos en la parte HTML pero es mucho mas elegante reacionar a un cambio. Utilizaremos la subscripción que nos da valuChanges para ello.


#### Reactive transformations

Existen muchas operaciones dentro de un objeto Observable. Una muy interesante es el debounceTime que nos permite ignorar eventos durente un tiempo determinad
![enter image description here](https://i.imgur.com/sWB1kIM.png)

Otras poeraciones que nos pieden ser de utilidad:

![enter image description here](https://i.imgur.com/r3107xg.png)

----------
### 2 - Práctica
----------
El objetivo de esta practica es eliminar el disparador para condicionar las validaciones sobre el contro outOfStockReason. El objetio es reacionar segun cambie el valor del selector de disponibilidad.

Ademas queremos quitar a logica de los mensajes de validacion, actualmente el el HTML y transladarlo a la clase. Nos apoyaremos en la propiedad valueChanges.




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
#### 2 - Implementar la logica de negocio necesaria para manejar mensajes de error en la validacion
Para ello utilizar valueChanges de cada uno de los controles en los cuales hemos definido validación.
El objetivo es tener al menos un control funcionando y que en el HTML no haya lógica ninguna
 
En git podeis encontrar una solucion mas estandar
 
https://goo.gl/ReS2Q5

----------
#### 3 -  Utilizar debounceTime para retrasar 700ms los cambios de valor
De este modo podemos por ejemplo dejar un poc de tiempo mientras el usuario teclea la confirmación de código de producto.

https://goo.gl/x7fw4U

----------
Si queremos ver la App en nuestro browser

    npm start

Si queremos ver la solucion final de este SnapShot:

    git checkout master
    npm install
    npm start









