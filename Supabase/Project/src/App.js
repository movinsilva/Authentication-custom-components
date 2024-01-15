import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://byxfoopydtgcodwmnaug.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5eGZvb3B5ZHRnY29kd21uYXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2MzE4MTYsImV4cCI6MjAyMDIwNzgxNn0.Ye68274FT81wc_qQNLLA605VPWa37hChWNIPgHt9gV0')

const App = () =>
  <>
    <div style={{ width: '35%', padding: "3rem", backgroundColor: "black" }}>
      <Auth 
        supabaseClient={supabase} 
        appearance={{ theme: ThemeSupa }} 
        theme='dark' 
        queryParams={{ prompt: 'consent' }} />
    </div>
  </>

export default App;