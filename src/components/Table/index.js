import React from 'react';

import {Wrap,TableNav,TableTitle,ItensArea} from './styles';

export default function MainTable({children}) {
  return(
    <Wrap>
      <TableNav>
        <TableTitle>Data</TableTitle>
        <TableTitle>Nome</TableTitle>
        <TableTitle>Valor</TableTitle>
      </TableNav>
      <ItensArea>
        {children}
      </ItensArea>
    </Wrap>
  );
}