import { useForm, type SubmitHandler } from "react-hook-form"
import { LoginSchema } from "../schema/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { Link, useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLoginMutation } from "@/store/slices/userApi"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { setUserInfo } from "@/store/slices/auth"


type FormInputs = z.infer<typeof LoginSchema>

function Login() {
    const navigate = useNavigate();
    const [loginMutation, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            const res = await loginMutation(data).unwrap()
            dispatch(setUserInfo(res))
            form.reset()
            toast.success("Login in successfully.")
            navigate("/");
        } catch (error: any) {
            toast.error(error?.data.message)
        }
    }
    return (
        <section className="flex h-[70vh] w-full justify-center items-center">
            <div className="w-1/3 border-2 border-gray-200 p-8 rounded-xl">
                <h2 className="font-bold text-center mb-4">FASH.com</h2>
                <p className="text-xs font-medium text-gray-400 text-center mb-4">
                    Enter your information to login
                </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@hello.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="******" {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" disabled={isLoading}>Login</Button>
                    </form>
                </Form>
                <p className="text-xs text-center mt-6 font-medium">Don't have an account? <Link to={"/register"} className="underline">Register Here</Link></p>
            </div>

        </section>
    )
}

export default Login