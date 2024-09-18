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
                headerRight: () => (
                    <Link asChild href="/about">
                        <Pressable>
                            <CircleInfoIcon />
                        </Pressable>
                    </Link>
                ),
            }}
        >
            <Stack.Screen name="home" />
            <Stack.Screen name="[slug]" />
            <Stack.Screen
                name="(tabs)"
                options={({ route }) => ({
                    headerRight: () => null,
                })}
            />
        </Stack>
    );
}
