---
title: "Enseñarle ajedrez a una red sin volverse loco en el intento"
date: "2026-06-20"
excerpt: "Por qué terminé conectando Stockfish como maestro en vez de entrenar desde partidas aleatorias, y qué cambió con eso."
tags: ["Python", "PyTorch", "Stockfish"]
---

El primer intento fue el más ingenuo posible: una red que recibe el tablero como tensor y devuelve una jugada, entrenada por refuerzo puro contra sí misma desde cero. Después de días de entrenamiento, el resultado jugaba peor que alguien que aprendió las reglas ayer. El espacio de búsqueda del ajedrez es tan grande que aprender desde jugadas aleatorias es extremadamente lento sin una señal de por qué una posición es buena o mala.

Lo que cambió el resultado fue invertir el orden: usar **Stockfish como maestro** desde el principio, no como oponente final.

El pipeline que terminé usando:

- Stockfish evalúa millones de posiciones (no partidas completas, posiciones sueltas tomadas de partidas reales) y genera una evaluación en centipeones para cada una.
- La red se entrena primero en un problema de **regresión supervisada**: dado el tablero, predecir la evaluación de Stockfish. Esto no requiere que la red juegue nada todavía, solo que aprenda a "ver" por qué una posición es fuerte o débil.
- Recién después de que esa evaluación converge razonablemente, se introduce una fase de refuerzo, donde la red juega partidas y ajusta la política usando la evaluación aprendida como función de valor en vez de arrancar de cero.

La diferencia práctica fue enorme: el modelo pasó de perder material gratis en las primeras diez jugadas a entender conceptos básicos de desarrollo de piezas en una fracción del tiempo de entrenamiento.

Una decisión que discutí bastante conmigo mismo: **cuánta profundidad de búsqueda usa Stockfish al generar los datos de entrenamiento**. Profundidades muy altas dan evaluaciones más "correctas" pero generan un dataset carísimo de producir. Terminé usando una profundidad intermedia para la mayoría del dataset, y reservando evaluaciones profundas solo para posiciones tácticamente complejas (muchas piezas en juego, jaques, capturas posibles), detectadas con una heurística simple sobre el estado del tablero.

Sigue siendo, en el fondo, un motor que imita a otro motor mejor que él. Pero como base para experimentar con arquitecturas de red y funciones de recompensa alternativas, es un punto de partida mucho más honesto que "aprendé de cero y esperá lo mejor".
