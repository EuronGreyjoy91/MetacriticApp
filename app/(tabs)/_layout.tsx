import { Tabs } from "expo-router";
import { GithubIcon, InfoIcon, HomeIcon } from "../../components/Icons/Icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "#000" },
                tabBarActiveTintColor: "yellow",
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color }) => <InfoIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="github"
                options={{
                    title: "Github",
                    tabBarIcon: ({ color }) => <GithubIcon color={color} />,
                }}
            />
        </Tabs>
    );
}
