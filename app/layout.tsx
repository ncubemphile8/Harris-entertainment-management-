import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Harris OS | Event Operations',description:'Harris Entertainment event planning and management workspace'};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang='en'><body>{children}</body></html>; }
