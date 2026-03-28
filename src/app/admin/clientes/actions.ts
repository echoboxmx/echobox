"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function addClient(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const file = formData.get("logo") as File;

  if (!file || file.size === 0) {
    return { success: false, message: "Debe proveer una imagen válida" };
  }

  const supabase = createAdminClient();

  // 1. Subir a Supabase Storage Bucket 'logos'
  const ext = file.name.split('.').pop() || 'png';
  const fileName = `${Date.now()}_${name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${ext}`;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const { error: uploadError } = await supabase.storage
    .from("logos")
    .upload(fileName, buffer, {
      contentType: file.type,
      upsert: false
    });

  if (uploadError) return { success: false, message: "Error subiendo logo: " + uploadError.message };

  const { data: publicUrlData } = supabase.storage
    .from("logos")
    .getPublicUrl(fileName);

  const logo_url = publicUrlData.publicUrl;

  // 2. Insertar en la BD tabla 'clients'
  const { error: dbError } = await supabase
    .from("clients")
    .insert([{ name, logo_url, description }]);

  if (dbError) return { success: false, message: "Error insertando registro: " + dbError.message };

  // 3. Revalidar las rutas publicas para que aparezca el nuevo cliente inmediatamente
  revalidatePath("/admin/clientes");
  revalidatePath("/clientes");
  revalidatePath("/");
  
  return { success: true, message: "Cliente agregado exitosamente" };
}

export async function deleteClient(id: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("clients").delete().eq("id", id);
  if (error) return { success: false, message: error.message };
  
  revalidatePath("/admin/clientes");
  revalidatePath("/clientes");
  revalidatePath("/");

  return { success: true };
}

export async function editClient(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const file = formData.get("logo") as File | null;

  const supabase = createAdminClient();
  
  let updateData: any = { name, description };

  if (file && file.size > 0) {
    const ext = file.name.split('.').pop() || 'png';
    const fileName = `${Date.now()}_${name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${ext}`;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const { error: uploadError } = await supabase.storage
      .from("logos")
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false
      });

    if (uploadError) return { success: false, message: "Error subiendo imagen: " + uploadError.message };

    const { data: publicUrlData } = supabase.storage
      .from("logos")
      .getPublicUrl(fileName);

    updateData.logo_url = publicUrlData.publicUrl;
  }

  const { error: dbError } = await supabase
    .from("clients")
    .update(updateData)
    .eq("id", id);

  if (dbError) return { success: false, message: "Error actualizando registro: " + dbError.message };

  revalidatePath("/admin/clientes");
  revalidatePath("/clientes");
  revalidatePath("/");
  
  return { success: true, message: "Cliente actualizado exitosamente" };
}
