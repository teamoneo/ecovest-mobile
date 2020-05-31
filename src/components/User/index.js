import React from 'react';

import { UserControl, UserImage, UserTextControl, UserName, UserAccount } from './styles';

export default function User() {
  return(
    <UserControl>
      <UserImage source={{uri: 'https://i.pinimg.com/originals/89/02/39/8902391adb64cfb9a8ba4cbc13083a58.jpg'}} />
      <UserTextControl>
        <UserName>Raymond Holt</UserName>
        <UserAccount>ag 0005 c/c 12345-67</UserAccount>          
      </UserTextControl>
    </UserControl>
  );
}
