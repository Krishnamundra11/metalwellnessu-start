import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://iazslvcmkhljbbmxkynl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhenNsdmNta2hsamJibXhreW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NzY2OTQsImV4cCI6MjA1OTM1MjY5NH0.e2JfSU0tqb8ZP7NoR_-nb-rSPvL05KTq6prb1S19cXk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})