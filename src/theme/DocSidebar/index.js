import React from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';

export default function DocSidebarWrapper(props) {
  return (
    <div data-pagefind-ignore>
      <OriginalDocSidebar {...props} />
    </div>
  );
}