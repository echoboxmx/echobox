-- ==========================================
-- SCRIPT DE INICIALIZACIÓN: ECHOBOX SUPABASE
-- Pegar y Ejecutar este script en el SQL Editor de tu panel de Supabase
-- ==========================================

-- 1. Crear tabla "clients"
CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar la seguridad de filas (RLS) en clients
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- 3. Crear política para que la Web pública (visitantes) pueda ver los clientes
CREATE POLICY "Public profiles are viewable by everyone."
  ON clients FOR SELECT
  USING ( true );

-- Nota: Para Insertar, Borrar, o Actualizar clientes desde tu panel de admin /admin/clientes,
-- utiliza tu `SUPABASE_SERVICE_ROLE_KEY` en el Server Action, lo cual ignora la protección RLS.

-- 4. Asegurar el acceso general a BUCKETS (Storage)
-- (Debes crear manualmente un Bucket llamado "logos" desde el dashboard de Supabase 
-- si el comando de abajo presenta algún error de permisos por usuario).
INSERT INTO storage.buckets (id, name, public) 
VALUES ('logos', 'logos', true)
ON CONFLICT (id) DO NOTHING;

-- 5. Crear política para que todos puedan VER las imágenes de logos
CREATE POLICY "Logos públicos"
  ON storage.objects FOR SELECT
  USING ( bucket_id = 'logos' );
