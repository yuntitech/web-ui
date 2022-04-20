/*
 * @Author: fafa
 * @Date: 2022-03-18 09:48:52
 * @LastEditors: fafa
 * @LastEditTime: 2022-03-18 10:29:03
 * @Description:
 */

import React from "react";
import { Button as AntdButton } from "antd";
import classNames from "classnames";
import "./index.less";

declare type ButtonHTMLType = "submit" | "button" | "reset";
declare const ButtonTypes: [
  "default",
  "primary",
  "ghost",
  "dashed",
  "link",
  "text"
];
export declare type ButtonType = typeof ButtonTypes[number];
interface IABSButtonProps {
  /**设置按钮载入状态 */
  loading?: boolean;
  /**
   * 设置危险按钮
   * @default false
   */
  danger?: boolean;
  className?: string;
  /**按钮类型 */
  type?: ButtonType;
  style?: React.CSSProperties;
  /**设置按钮的图标组件 */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /**
   * 按钮失效状态
   * @default false
   */
  disabled?: boolean;
  block?: boolean;
  large?: boolean;
  htmlType?: ButtonHTMLType;
  /**按钮颜色 */
  color?: "blue" | "red" | "yellow" | "green" | "white";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IABSButtonProps> = (props: IABSButtonProps) => {
  const {
    danger,
    loading,
    style,
    children,
    large = false,
    className,
    onClick,
    type = "primary",
    icon,
    block = false,
    disabled,
    htmlType,
    color,
  } = props;

  let classes = classNames("fish-btn", className, {
    "fish-btn-large": large,
    "fish-btn-block": block,
    "fish-btn-link": type === "link",
  });
  const displayStyle = block ? "block" : "inline-block";

  let newTpye = type;
  let isDanger = danger;
  if (color) {
    switch (color) {
      case "blue":
        newTpye = "primary";
        break;
      case "red":
        isDanger = true;
        break;
      case "white":
        newTpye = "default";
        break;
      case "yellow":
        classes = classNames(classes, "fish-yellow-btn");
        break;
      case "green":
        classes = classNames(classes, "fish-green-btn");
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes} style={{ display: displayStyle, ...style }}>
      <AntdButton
        icon={icon}
        onClick={onClick}
        disabled={disabled}
        type={newTpye}
        block={block}
        htmlType={htmlType}
        danger={isDanger}
        loading={loading}
      >
        {children}
      </AntdButton>
    </div>
  );
};

export default Button;
