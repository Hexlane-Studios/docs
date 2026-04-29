import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';

export const logo = (
  <>
    <Image
      alt="Flux"
      src={Logo}
      sizes="100px"
      className="hidden w-22 in-[.uwu]:block"
      aria-label="Flux"
    />
    {/* <span className="font-bold text-lg ml-2">Flux</span> */}
  </>
);

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {logo}
          
        </>
      ),
    },
  };
}
