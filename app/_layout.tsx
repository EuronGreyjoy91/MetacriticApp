import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

import { Logo } from "../components/Logo/Logo";
import { CircleInfoIcon } from "../components/Icons/Icons";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTitle: "",
                headerLeft: () => <Logo />,
            }}
        >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="[slug]" />
        </Stack>
    );
}
