import { useForm, type SubmitHandler } from "react-hook-form"
import type z from "zod"
import { registerSchema } from "../schema/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type formInputs = z.infer<typeof registerSchema>
function Register() {

    const form = useForm<formInputs>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<formInputs> = (data) => {
        console.log(data)
    }
    return <section className="flex h-[70vh] w-full justify-center items-center">
        <div className="w-1/3 border-2 border-gray-200 p-8 rounded-xl">
            <h2 className="font-bold text-center mb-4">FASH.COM</h2>
            <p className="text-xs font-medium text-gray-400 text-center mb-4">Enter your information to register</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fullname</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe  " {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <Button className="w-full">Register</Button>
                </form>
            </Form>
            <p className="text-xs text-center mt-6 font-medium">Already have an account? <Link to={"/login"} className="underline">Login Here</Link></p>
        </div>
    </section>
}

export default Register