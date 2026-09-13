# Gatopera Website

Portfolio personal construido con Next.js 16 (App Router) y React 19.

## Stack

- **Next.js 16** + **React 19** — sobre la base original en Next 14, ahora en una versión con soporte activo (la 14.x quedó fuera de soporte y sin parches de seguridad).
- **Tailwind CSS 3** para utilidades puntuales, conviviendo con el sistema de diseño en CSS plano ya existente.
- **motion** (ex Framer Motion) para las animaciones de aparición en scroll.
- **@react-three/fiber** + **@react-three/drei** + **three.js** para la escena 3D interactiva del hero.
- **lenis** para el scroll suave.
- **react-hook-form** para el formulario de contacto.
- **gray-matter** + **marked** + **reading-time** para el motor de blog basado en Markdown.
- **resend** (opcional) para el envío real de los mensajes de contacto.

## Desarrollo local

\`\`\`bash
npm install
npm run dev
\`\`\`

## Blog

Los posts viven en \`content/blog/*.md\` con frontmatter:

\`\`\`md
---
title: "Título del post"
date: "2026-01-01"
excerpt: "Resumen corto."
tags: ["Tag1", "Tag2"]
---

Contenido en Markdown.
\`\`\`

Agregar un archivo nuevo ahí alcanza para que aparezca en \`/blog\` y en la vista previa de la home.

## Formulario de contacto

Por defecto, si no hay credenciales configuradas, el endpoint \`/api/contact\` solo registra el mensaje en el log del servidor y responde OK — útil para probar el formulario sin depender de un servicio externo.

Para que efectivamente envíe el email, crear una cuenta en Resend (resend.com), y definir en \`.env.local\` (usar \`.env.example\` como base):

\`\`\`
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=tu@email.com
\`\`\`

## Estructura

\`\`\`
app/
  page.tsx                 Home
  blog/page.tsx             Listado del blog
  blog/[slug]/page.tsx       Artículo individual
  api/contact/route.ts       Endpoint del formulario
components/                  Componentes de UI y de la escena 3D
content/blog/                 Posts en Markdown
lib/blog.ts                    Lectura y parseo de posts
\`\`\`
