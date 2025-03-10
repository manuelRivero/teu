import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Header from './header';
import Footer from './footer';
import BurgerMenu from './header/BurgerMenu';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <div className="relative">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
