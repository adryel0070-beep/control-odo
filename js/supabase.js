import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://lpphtghkftlpkhpagleh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwcGh0Z2hrZnRscGtocGFnbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNzExNjYsImV4cCI6MjA4MTc0NzE2Nn0.lP2pHj0v1L61SRuayXuhHUHDfKAkSPf4yZUq5pXsIMU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
