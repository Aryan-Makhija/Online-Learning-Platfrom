import {  SignIn } from '@clerk/nextjs'

export default async function SignInPage() {

    return (

        <div className='w-full h-screen flex justify-center items-center'>
         

            <SignIn />
            
        </div>
    )
}