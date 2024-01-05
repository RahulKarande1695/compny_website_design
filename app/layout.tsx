import './globals.css';
import { Inter } from 'next/font/google';
import RootStyleRegistry from './emotion';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'intelica Website',
    description: 'A fabric website description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className='pagesBox'>
                    <RootStyleRegistry>{children}</RootStyleRegistry>
                </div>
            </body>
        </html>
    );
}
