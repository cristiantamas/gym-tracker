import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Navigation } from './src/infrastructure/navigation';

import { theme } from './src/infrastructure/theme';

import { useFonts as useOpenSans, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { CurrentWorkoutProvider } from './src/services/current-workout/current-workout.context';

export default function App() {
  let [openSansLoaded] = useOpenSans({ OpenSans_400Regular });
  let [latoLoaded] = useLato({ Lato_400Regular });

  if (!openSansLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CurrentWorkoutProvider>
          <Navigation />
        </CurrentWorkoutProvider>
      </ThemeProvider>
      <StatusBar style="light" />
    </>
  );
}
