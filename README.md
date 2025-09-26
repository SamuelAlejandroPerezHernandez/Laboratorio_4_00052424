# Laboratorio_4_00052424

Preguntas:

¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

JavaScript permite este tipo de acciones porque está diseñado para seguir las reglas matemáticas y ofrecer una manipulación flexible de las variables. En los ejemplos anteriores, se asignan valores a las variables x, y y z de la siguiente manera: let x = 1; let y = 2; let z = 3;.

x = y; (x ahora es 2)

x += z; (x ahora es 5, ya que x = x + z)

x -= y; (x ahora es 3, ya que x = x - y)

x *= z; (x ahora es 9, ya que x = x * z)

x /= y; (x ahora es 9/2, es decir, 4.5, ya que x = x / y)

x %= x; (x ahora es 0, ya que x = x % x)

Cada uno de estos operadores (como +=, -=, *=, /=, %=) es simplemente una forma abreviada de escribir operaciones matemáticas comunes, como x = x + y, x = x - y, etc., dependiendo del operador que queramos aplicar.

/*------------------------------------------------------------------*/

¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?


Sí, el comportamiento de los flujos de control en JavaScript es muy similar al de otros lenguajes y entornos de desarrollo. Todos siguen una lógica fundamental común, basada en la toma de decisiones. Un ejemplo clásico es el uso de la estructura if: si la condición dentro del bloque es verdadera, se ejecuta una acción específica; si la condición es falsa, el flujo de control pasa al bloque else, donde se realiza otra acción. Esta lógica es consistente en la mayoría de los lenguajes de programación, como C, Java y Python.