import { useColorScheme } from "@/hooks/use-color-scheme";
import { useAuthStore } from "@/stores/authStorage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const toastConfig = {
  success: (props: any) => (
    <BaseToast {...props} style={{ borderLeftColor: "#4ade80" }} />
  ),
  error: (props: any) => <ErrorToast {...props} />,
};

function RootLayoutNav() {
  const { isAuthenticated, isLoading } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";

    // Small delay to avoid navigation conflicts
    const timeoutId = setTimeout(() => {
      if (!isAuthenticated && !inAuthGroup) {
        router.replace("/(auth)");
      } else if (isAuthenticated && inAuthGroup) {
        router.replace("/(tabs)");
      }
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [isAuthenticated, isLoading, segments, isMounted]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#008236" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <RootLayoutNav />
        <StatusBar style="auto" />
        <Toast config={toastConfig} />
      </ThemeProvider>
    </PaperProvider>
  );
}
