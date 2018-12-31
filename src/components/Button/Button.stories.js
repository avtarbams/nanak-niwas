import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { wInfo } from '../../../utils';
import { text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Components/Button', module).addWithJSX(
  'colored',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Button
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~`
)(() => (
    <Button
      label={text('label', 'Submit')}
      disabled={boolean('disabled', false)}
      onClick={() => alert('hello there')}
    />
  ))
).addWithJSX(
  'borderd',
  wInfo(`

  ### Notes

  This is a button with border

  ### Usage
  ~~~js
  <Button
  classProp={'Button_border'}
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~`
)(() => (
    <Button
    classProp ={text('classProp', 'Button_border')} 
      label={text('label', 'Submit')}
      disabled={boolean('disabled', false)}
      onClick={() => alert('hello there')}
    />
  ))
);