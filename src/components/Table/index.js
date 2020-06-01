import React from 'react';

import { Wrap, TableNav, TableTitle, ItensArea , FinalLabel} from './styles';

export default function MainTable({ children , titles ,final}) {

  let i = 0;

  var payments = [];

  for(let i = 0; i < titles.length; i++){
		payments.push(
			<TableTitle key = {i}>{titles[i]}</TableTitle> 
		)
  }
  
  return (
    <Wrap>
      <TableNav>
        {payments}
      </TableNav>
      <ItensArea>
        {children}
        <FinalLabel>{final}</FinalLabel>
      </ItensArea>
    </Wrap>
  );
}
