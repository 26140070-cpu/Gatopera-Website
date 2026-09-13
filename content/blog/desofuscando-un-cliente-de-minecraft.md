---
title: "Desofuscando un cliente de Minecraft: notas de campo"
date: "2026-02-14"
excerpt: "Cómo mapear un JAR ofuscado sin mappings oficiales, paso a paso, con las herramientas y los callejones sin salida reales."
tags: ["Reverse Engineering", "Java", "Bytecode"]
---

La primera vez que abrís un JAR ofuscado en un decompilador, la sensación es la de entrar a un edificio sin señalética: todas las clases se llaman `a`, `b`, `c`; todos los métodos `m`, `n`, `o`. No hay nombres que te orienten, así que tenés que reconstruir el mapa a partir de lo que el código hace, no de cómo se llama.

Mi flujo para esto arranca casi siempre igual:

1. **Decompilar con Vineflower** (o CFR si Vineflower se cuelga con alguna clase particular) para tener una vista legible en Java, aunque sea con nombres genéricos.
2. **Buscar anclas conocidas**: strings literales, IDs de paquete de red, nombres de shaders. Un solo `"disconnect.lost"` o una constante de protocolo te da un punto fijo desde el cual mapear todo lo que la rodea.
3. **Seguir el grafo de llamadas hacia atrás** desde esas anclas. Si una clase invoca al método que maneja el string de desconexión, esa clase probablemente sea el manejador de red.
4. **Renombrar de forma incremental** en el decompilador, guardando un mapping propio en YAML, y volver a decompilar para confirmar que el renombrado no rompió ninguna suposición.

Lo que nadie te cuenta es que el 80% del tiempo no lo pasás leyendo código nuevo, sino **verificando hipótesis que resultan falsas**. Pensás que una clase es el motor de renderizado porque tiene un campo `Matrix4f`, y resulta que es simplemente una utilidad de matrices que se usa en cuatro lugares distintos sin relación entre sí.

Con Gatopera Client, el punto de partida real no fue el cliente en sí sino **Fabric API**, que sí tiene mappings oficiales (Yarn). Cualquier símbolo que coincida entre el bytecode ofuscado y una llamada conocida a Fabric API se vuelve una ancla gratis: no tenés que adivinar qué hace ese método, ya lo sabés por la firma de la API que está invocando.

Una herramienta que subestimé al principio: el **diff de bytecode entre versiones**. Si tenés dos builds del mismo cliente para versiones consecutivas de Minecraft, gran parte del código no cambió — solo se re-ofuscó con nombres distintos. Diffear la estructura (no el texto) entre ambas versiones te deja quedarte con los mappings que ya hiciste y aplicarlos directamente a las clases que no cambiaron.

Nada de esto reemplaza tener paciencia. Pero ayuda mucho más que "leer todo de arriba a abajo", que es lo primero que probé y lo que menos funcionó.
