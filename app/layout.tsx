import { Nunito } from "next/font/google";

import Navbar from "./components/Navbar/Navbar";
import LoginModal from './components/Modals/LoginModal';
import RegisterModal from './components/Modals/RegisterModal';
import Modal from './components/Modals/Modal';
import ToasterProvider from './providers/ToasterProvider';

import './globals.css'
import ClientOnly from './components/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from "./components/Modals/RentModal";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Project',
}

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>

        <div className="pb-20 pt-28">
          {children}
        </div>

      </body>
    </html>
  )
}
