import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MailIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"
      fill={props.color}
    />
  </Svg>
);

export default MailIcon;
