import { createClient } from '@supabase/supabase-js';

const EXTERNAL_SUPABASE_URL = 'https://kiokycpopjocvvlpfspr.supabase.co';
const EXTERNAL_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpb2t5Y3BvcGpvY3Z2bHBmc3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5OTc4NzksImV4cCI6MjA5MDU3Mzg3OX0.rBFs_x1M0K19XL3TePOHVKZIk-gEWTJ073fR9MeHleA';

export const externalSupabase = createClient(EXTERNAL_SUPABASE_URL, EXTERNAL_SUPABASE_ANON_KEY);
