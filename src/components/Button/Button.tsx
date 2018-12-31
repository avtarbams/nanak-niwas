import * as React from 'react';
import './Button.css';
export interface Props {
  /** this dictates what the button will say  */
  label: string;
  /** this dictates what the button will do  */
  onClick: (e:any) => any;
  /**
   * Disables onclick 
   *
   * @default false
   **/
  disabled?: boolean;
 
  /**
   * class name to change styling
   *
   * @default false
   **/
   classProp? :string;
}
const noop = (e:any) => {return e}; // tslint:disable-line
export const Button = (props: Props) => {
  const {classProp, label, onClick, disabled = false } = props;
  const disabledclass = disabled ? 'Button_disabled' : classProp ;
  
  return (
    <div
      className={`${disabledclass} Button`} id={label}
      onClick={!disabled ? onClick : noop}
    >
      <span>{label}</span>
    </div>
  );
};

