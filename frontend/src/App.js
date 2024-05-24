import InputField from './Components/InputField'
import ConfettiExplosion from 'react-confetti-explosion'
import { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [status, setStatus] = useState('success')
  const [statusText, setStatusText] = useState('')
  const [loading, setLoading] = useState(false)
  const [loginMode, setLoginMode] = useState('Login')

  const [isExploding, setIsExploding] = useState(false)

  const confirmUpdate = (e) => {
    setConfirm(e)
    if (e !== password) {
      setStatus('error')
      setStatusText('Passwords do not match')
    } else {
      setStatus('success')
      setStatusText('')
    }
  }

  const passwordUpdate = (e) => {
    setPassword(e)
    if (confirm != '' && confirm !== e) {
      setStatus('error')
      setStatusText('Passwords do not match')
    } else {
      setStatus('success')
      setStatusText('')
    }
  }

  return (
    <div class="flex bg-slate-950 bg-opacity-95 text-white h-screen w-center align-middle ">
      {isExploding && (
        <ConfettiExplosion
          force={2}
          duration={2200}
          particleCount={30}
          width={800}
          class="absolute left-1/2"
        />
      )}
      <div
        class="absolute right-5 bottom-5 bg-slate-900 shadow-2xl p-4 rounded-md"
        onMouseEnter={() => {
          setIsExploding(true)
        }}
        onMouseLeave={() => {
          if (isExploding) {
            setTimeout(() => {
              setIsExploding(false)
            }, 2000)
          }
        }}
      >
        <p>Template by Abhik Ray </p>
      </div>
      <div
        class={`flex-auto content-center justify-center py-12 w-1/4 m-auto max-w-md
      text-center rounded-xl bg-slate-900 border-2 border-solid  border-slate-950
        drop-shadow-xl transition-all max-h-full ${loading ? 'animate-pulse' : ''}`}
      >
        <h1 class="text-2xl text-white p-4 font-medium mb-2">
          Queryable Encryption Authentication
        </h1>
        <p class={`mb-4 ${status}`}>{statusText}</p>
        <InputField placeholder="Username" type="text" update={setUsername} value={username} />
        <InputField
          placeholder="Password"
          type="password"
          update={passwordUpdate}
          value={password}
        />
        {loginMode == 'Register' && (
          <InputField
            placeholder="Confirm Password"
            type="password"
            update={confirmUpdate}
            value={confirm}
          />
        )}
        <button
          class="w-2/3 transition-all bg-blue-400 bg-opacity-10 rounded-md p-3 mt-2 mb-4 border-4
         border-blue-900 border-opacity-30 login hover:cursor-pointer"
          disabled={
            loading ||
            username === '' ||
            password === '' ||
            (loginMode === 'Register' && confirm === '')
          }
          onClick={() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 1500)
          }}
        >
          {loginMode}
        </button>
        <p
          onClick={() => {
            setLoginMode(loginMode === 'Register' ? 'Login' : 'Register')
          }}
          class="text-slate-200 hover:underline"
        >
          {loginMode === 'Register' ? 'Already have an account?' : "Don't have an account?"}
        </p>
      </div>
      <div></div>
    </div>
  )
}

export default App
