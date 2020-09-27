import React from 'react';
import { Pagination } from '@tdesign/react';

export default function PaginationExample() {
  const onChange = React.useCallback((index, event) => {
    console.log(`current: ${index}`, event);
  }, []);

  return <Pagination total={100} pageSize={5} onChange={onChange} />;
}