---
title: "Mixins en Fabric: lo que rompe cuando dos módulos tocan el mismo método"
date: "2026-04-02"
excerpt: "Order, cancellable y por qué inyectar en el mismo HEAD desde dos módulos distintos casi siempre termina mal."
tags: ["Java", "Fabric API", "Mixins"]
---

Un Mixin, en el fondo, es una promesa: "voy a modificar este método sin tocar el código fuente original". El problema aparece cuando dos módulos le hacen esa misma promesa al mismo método, sin saber uno del otro.

En Gatopera Client esto pasa constantemente porque hay casi 90 módulos que pueden estar activos a la vez, y varios compiten por los mismos puntos de inyección: `tick()`, `onUpdate()`, el método de renderizado de entidades. Con el tiempo aprendí tres reglas que me hubiera gustado tener escritas desde el día uno.

**1. `@Inject(at = "HEAD", cancellable = true)` no es gratis.** Si dos Mixins cancelan el mismo método desde el HEAD, gana el que se cargue después según el orden de Mixin — que no siempre es el orden en que vos esperás. La solución no es evitar `cancellable`, es declarar explícitamente `@Inject(..., require = 1)` y usar `ModifyExpressionValue` o un `LocalCapture` cuando el objetivo es leer un valor, no interrumpir el flujo entero.

**2. El orden de carga de Mixins se puede fijar con `mixins.json`,** pero solo dentro del mismo paquete/mod. Cuando el conflicto es entre dos módulos internos de un mismo cliente (como pasa acá, con casi 90 conviviendo), lo que realmente funciona es tener un único punto de verdad: un "bus" de eventos interno al que cada módulo se suscribe, en vez de que cada módulo tenga su propio Mixin sobre el mismo método vanilla. El Mixin único dispara el evento; los módulos escuchan el evento. Un solo punto de inyección, N consumidores.

**3. `@ModifyVariable` es más frágil de lo que parece.** Depende del índice de la variable local en el bytecode compilado, así que un cambio menor en cómo el compilador de Minecraft optimiza ese método entre versiones puede correr el índice y romper el Mixin en silencio — sin error de compilación, solo comportamiento incorrecto en runtime. Cuando el objetivo lo permite, prefiero `@Redirect` sobre una llamada a método específica: es más verboso pero mucho menos sensible a estos corrimientos.

Ninguna de estas reglas está en la documentación oficial de Mixin de forma explícita. Se aprenden debuggeando un crash a las tres de la mañana y dándote cuenta de que el problema no era tu módulo, sino el orden en que se cargó respecto a otro.
