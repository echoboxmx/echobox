"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData) {
  // Extraer datos del formulario
  const name = formData.get("name") as string;
  const business = formData.get("business") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const city = formData.get("city") as string;
  
  const hasTv = formData.get("hasTv") === "on";
  const hasSpeakers = formData.get("hasSpeakers") === "on";
  const hasInternet = formData.get("hasInternet") === "on";
  const hasPc = formData.get("hasPc") === "on";
  const message = formData.get("message") as string;

  // 1. Enviar el correo usando Resend (solo si hay API Key configurada válida, ignorar si falla localmente para permitir redirección WP)
  try {
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "tu_api_key_de_resend_aqui") {
      await resend.emails.send({
        from: "EchoBox <onboarding@resend.dev>", // Cambia a tu dominio verificado cuando vayas a prod
        to: ["delivered@resend.dev"], // Pon aquí tu correo para recibir los leads locales
        subject: `Nuevo Lead Lead: ${business} de ${city}`,
        html: `
          <h1>Nuevo prospecto de EchoBox</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Negocio:</strong> ${business}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "No provisto"}</p>
          <p><strong>Ciudad:</strong> ${city}</p>
          <hr/>
          <h3>Checklist de Requisitos</h3>
          <ul>
            <li>TV / Pantallas: ${hasTv ? "Sí" : "No"}</li>
            <li>Bocinas: ${hasSpeakers ? "Sí" : "No"}</li>
            <li>Internet: ${hasInternet ? "Sí" : "No"}</li>
            <li>Laptop o PC: ${hasPc ? "Sí" : "No"}</li>
          </ul>
          <h3>Mensaje Adicional:</h3>
          <p>${message || "Sin mensaje adicional"}</p>
        `,
      });
    }
  } catch (error) {
    console.error("Error enviando email vía Resend:", error);
    // Continuamos silenciosamente para no bloquear al usuario y redirigirlo a WhatsApp
  }

  // 2. Construir mensaje estructurado para WhatsApp
  const wpText = `¡Hola! Me interesa instalar EchoBox en mi negocio.
  
*Datos del negocio:*
- Nombre: ${name}
- Negocio: ${business}
- Ciudad: ${city}

*Infraestructura:*
- Pantallas: ${hasTv ? "✅" : "❌"}
- Bocinas: ${hasSpeakers ? "✅" : "❌"}
- Internet: ${hasInternet ? "✅" : "❌"}
- PC/Laptop: ${hasPc ? "✅" : "❌"}

${message ? `*Mensaje adicional:* ${message}` : ""}`;

  // 3. Redirigir dinámicamente al enlace de wa.me
  // 521 indica México + 1 (móvil). Puedes poner tus 10 dígitos reemplazando XXXXXXXXXX
  const whatsappNumber = "521XXXXXXXXXX"; 
  const encodedText = encodeURIComponent(wpText);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  redirect(waUrl);
}
