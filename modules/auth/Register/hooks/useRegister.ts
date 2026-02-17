import { register } from "@/services/register";
import { useAuthStore } from "@/stores/authStorage";
import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

const useRegister = () => {
  const [user, setUser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuthStore();
  const router = useRouter();

  const showToast = (type: "success" | "error" | "info", text: string) => {
    Toast.show({
      type: type,
      text1: text,
    });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    if (!user || !email || !password) {
      showToast("error", "Todos los campos son obligatorios");
      return;
    }

    if (!validateEmail(email)) {
      showToast("error", "Por favor ingresa un email válido");
      return;
    }

    if (password.length < 5) {
      showToast("error", "La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setIsLoading(true);

    try {
      const dataRegister = await register({ user, email, password });

      if (dataRegister.status === 201 || dataRegister.status === 200) {
        // Save user data to Zustand store
        await login(dataRegister.data);

        // Wait for persist middleware to sync
        await new Promise((resolve) => setTimeout(resolve, 300));

        showToast("success", "¡Te has registrado exitosamente!");
        router.replace("/(tabs)");
      }
    } catch (err: any) {
      if (err.response) {
        const status = err.response.status;

        switch (status) {
          case 401:
            showToast("error", "Correo o contraseña incorrectos");
            break;
          case 400:
            showToast("error", "Datos inválidos");
            break;
          case 500:
            showToast("error", "Error del servidor. Intenta más tarde");
            break;
          default:
            showToast(
              "error",
              `Error: ${err.response.data?.message || "Error desconocido"}`,
            );
        }
      } else if (err.request) {
        showToast("error", "Sin conexión. Verifica tu internet");
      } else {
        showToast("error", "Error al procesar la solicitud");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleRegister,
  };
};

export default useRegister;
