import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'
import { Logo } from '../../components/Logo'
import { Separator } from '../../components/Separator'
import { Link } from '@tanstack/react-router'
import GoogleIcon from '@/assets/images/google-icon.png'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: 'Login - SyntaxWear' }
    ]
  })
})

function RouteComponent() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-5 text-black">
      <div className="w-112.5 bg-white  rounded-2xl p-10 shadow-md">
        <div className='flex flex-col'>
          <Logo />

          <h2 className='text-black font-bold text-[21px] mb-2'>Entrar</h2>

          <p className='mb-3.5'>Escolha como gostaria de fazer Login:</p>

          <LoginForm />

          <Separator />

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
          <img src={GoogleIcon} alt="Ícone Google" className='w-5 h-5' />
          <span className='text-sm font-medium text-black'>Continuar com o Google</span>
        </button>

        <p className='mt-3.5'>Ainda não possui conta? <Link to='/sign-up' className='ml-1 text-[#5433EB] hover:underline'>Cadastre-se</Link></p>

        </div>
      </div>
    </section>
  )
}
