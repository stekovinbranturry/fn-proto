import classNames from 'classnames';
import React from 'react';
// @ts-expect-error
import styles from './index.module.scss';

export interface ButtonProps {
  /**
   * style
   */
  style?: React.CSSProperties;
  /**
   * className
   */
  className?: string;
  /**
   * 类型
   * @default primary
   */
  type?: 'primary' | 'secondary';
  /**
   * children
   */
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  style,
  className,
  type = 'primary',
  children,
}) => {
  return (
    <div
      style={style}
      className={classNames(
        styles.button,
        {
          [styles.primary]: type === 'primary',
          [styles.secondary]: type === 'secondary',
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Button;
