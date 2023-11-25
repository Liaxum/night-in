import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  "https://winclligbidzgmvbhsby.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbmNsbGlnYmlkemdtdmJoc2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5NDQ0OTMsImV4cCI6MjAxNjUyMDQ5M30.k1_IhZaKbzOvlB4iHbxTKpbAHL4e2L9mmdk9VlFc2Cs"
);
