'use client';

import * as React from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <a href='/'>
            <Logo className='w-logo h-auto' />
          </a>
          <h1 className='mt-4 text-4xl'>RENEWABLE ENERGY For any task</h1>
        </div>
      </section>
    </main>
  );
}
