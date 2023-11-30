"use client";
import { useState } from "react";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/validations/authSchema";
import {
  Text,
  Button,
  Spinner,
  Input,
  Label,
  FormContainer,
} from "@/components/ui";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/users";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const handleInputChange = async (field) => {
    await trigger(field);
  };

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const res = await loginUser({ email, password });
      console.log(res);
      reset();
      toast.success("Ingresando al sistema");
      setIsLoading(false);
      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          `Ocurrió un error al ingresar al sistema: ${error.message}`,
        );
      } else {
        toast.error("Ocurrió un error al ingresar al sistema");
      }
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <FormContainer className="text-black">
      <Text variant="title" className="text-center">
        Iniciar Sesión
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <Label id="email" label="Correo Electrónico" />
          <Input
            id="email"
            type="text"
            {...register("email")}
            onBlur={() => handleInputChange("email")}
            placeholder="correo@ejemplo.com"
            isError={!!errors?.email}
            aria-invalid={errors?.email}
            aria-describedby={errors?.email ? `email-error` : undefined}
          />
          {errors?.email && (
            <span id={`email-error`} className="font-bold text-red-600">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="my-2">
          <Label id="password" label="Contraseña" />
          <Input
            id="password"
            type="password"
            {...register("password")}
            onBlur={() => handleInputChange("password")}
            placeholder="********"
            isError={!!errors?.password}
            aria-invalid={errors?.password}
            aria-describedby={errors?.password ? `password-error` : undefined}
          />
          {errors?.password && (
            <span id={`password-error`} className="font-bold text-red-600">
              {errors?.password?.message}
            </span>
          )}
        </div>
        <Button type="submit" variant="formSubmit" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Aceptar"}
        </Button>
      </form>
      <p className="py-6 text-center text-black">
        ¿No tienes una cuenta?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-500 hover:text-blue-300"
        >
          Regístrate
        </Link>{" "}
      </p>
    </FormContainer>
  );
};
