import { Link } from 'gatsby';
import React from 'react';

interface Props {
  href: string;
  text: string;
  isActive: boolean;
}

export default function CustomLink({ href, text, isActive }: Props) {
  return (
    <Link
      to={href}
      type="button"
      className={`text-customPurple-600 text-xs md:text-small group relative ${isActive && 'font-bold'}`}
    >
      {text}
      <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-customPurple-600 transition-all group-hover:w-full"></span>
    </Link>
  );
}
