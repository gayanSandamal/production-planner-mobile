import { Slot } from 'expo-router';
import { SessionProvider } from '../ctx';

export default function Root() {
  console.log('Root');
  
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
