import React from 'react'
import { stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="index" options={{ HeaderShown: false }} />
                <Stack.Screen
                    name="home" options={{ HeaderShown: false }} />
            </Stack >
            <Statusbar style='light' />
        </>
    )
}