import React from 'react'
import { stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


export default function RootLayout() {
    return (
        <>
            <stack>
                <stack.screen
                    name="index" options={{ HeaderShown: false }} />
                </stack.screen
                    name="home" options={{ HeaderShown: false }}/>
        </stack >
    </>
  )
}