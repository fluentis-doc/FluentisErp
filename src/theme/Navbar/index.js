import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  return (
    <div data-pagefind-ignore>
      <OriginalNavbar {...props} />
    </div>
  );
}