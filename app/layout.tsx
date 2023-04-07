import './globals.css'
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from './components/ClientOnly';
import Modal from './components/Modals/Modal';
import ToasterProvider from './providers/ToasterProvider';
import { Nunito } from "next/font/google";
import RegisterModal from './components/Modals/RegisterModal';
import LoginModal from './components/Modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';



export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Project',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
