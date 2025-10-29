import { useForm, type SubmitHandler } from "react-hook-form"
import type z from "zod"
import { registerSchema } from "../schema/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router"

type formInputs = z.infer<typeof registerSchema>
function Register() {

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<formInputs>({
        resolver: zodResolver(registerSchema)
    })

    const submit: SubmitHandler<formInputs> = (data) => {
        console.log(data)
    }
    return <section className="flex h-[70vh] w-full justify-center items-center">
        <div className="w-1/2 border-2 border-gray-200 p-8 rounded-xl">
            <h2 className="font-bold text-center mb-4">FASH.COM</h2>
            <p className="text-sm font-medium text-gray-400 text-center ">Enter your information to register</p>
            <form onSubmit={handleSubmit(submit)} className="mt-4 space-y-4 ">
                <div>
                    <label htmlFor="username" className="text-sm font-medium mb-4">Username</label>
                    <input type="text" placeholder="fash.com" {...register("username")} className="text-sm font-medium border border-gray-400 rounded-xl py-2 ps-2 w-full" />
                    {errors.username && <span className="text-xs font-medium mt-2 text-red-600">{errors.username.message}</span>}
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium mb-4">Email</label>
                    <input type="text" placeholder="fash@gmail.com" {...register("email")} className="text-sm font-medium border border-gray-400 rounded-xl py-2 ps-2 w-full" />
                    {errors.email && <span className="text-xs font-medium mt-2 text-red-600">{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="password" className="text-sm font-medium mb-4">Password</label>
                    <input type="password" placeholder="******" {...register("password")} className="text-sm font-medium border border-gray-400 rounded-xl py-2 ps-2 w-full" />
                    {errors.password && <span className="text-xs font-medium mt-2 text-red-600">{errors.password.message}</span>}
                </div>
                <button className="bg-black w-full text-center text-white font-bold py-2 rounded-xl" disabled={isSubmitting}>
                    Register
                </button>
            </form>
            <p className="text-sm text-center mt-6 font-medium">Already have an account? <Link to={"/login"} className="underline">Login Here</Link></p>
        </div>
    </section>
}

export default Register