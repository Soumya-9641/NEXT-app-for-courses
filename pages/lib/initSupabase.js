import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ztcogzsnscyycxyrejsl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0Y29nenNuc2N5eWN4eXJlanNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1NzA4NDUsImV4cCI6MjAwNjE0Njg0NX0.cnqGf0wZ9ZfZArB-uewH4vyzYv7otwCgmn07GThAHQU';

export const supabase = createClient(supabaseUrl, supabaseKey);