import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidCPF } from "../../utils/cpf-validator";
import { z } from "zod";

export const registerUserFormSchema = z
    .object({
        firstName: z
            .string()
            .min(1, "O primeiro nome é obrigatório"),

        secondName: z
            .string()
            .min(1, "O sobre nome é obrigatório"),

        email: z
            .email("E-mail inválido"),

        password: z
            .string()
            .min(8, "A senha deve ter no mínimo 8 caracteres"),

        confirmPassword: z
            .string()
            .min(1, "A confirmação de senha é obrigatória"),

        birthDate: z
            .string()
            .min(1, "A data de nascimento é obrigatória")
            .refine(
                (date) => !Number.isNaN(new Date(date).getTime()),
                "Digite uma data válida"
            ),

        cpf: z
            .string()
            .min(11, "CPF é obrigatório")
            .refine(isValidCPF, "CPF inválido"),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "As senhas não coincidem",
            path: ["confirmPassword"],
        }
    );

type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }, setError, reset
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerUserFormSchema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: ""
        },
        criteriaMode: "all",
    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
        reset
    }
}