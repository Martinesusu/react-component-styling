/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import errorIcon from "../assets/frown.svg";
import warningIcon from "../assets/alert-triangle.svg";
import infoIcon from "../assets/alert-circle.svg";
import successIcon from "../assets/check-circle.svg";

// Component Alert
function Alert(props) {
  const alertStyles = css`
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 700;
    gap: 12px;
    width: 650px;
    height: 76px;

    ${props.type === "error" && `background-color: #F9C8C8; color: #444444;`}
    ${props.type === "warning" && `background-color: #F9D9C8; color: #444444;`}
    ${props.type === "info" && `background-color: #F9EBC8; color: #444444;`}
    ${props.type === "success" && `background-color: #CEF7CD; color: #444444;`}
  `;

  const iconStyles = css`
    width: 24px;
    height: 24px;
  `;
  const getIcon = (type) => {
    switch (type) {
      case "error":
        return <img css={iconStyles} src={errorIcon} alt="Error Icon" />;
      case "warning":
        return <img css={iconStyles} src={warningIcon} alt="Warning Icon" />;
      case "info":
        return <img css={iconStyles} src={infoIcon} alt="Info Icon" />;
      case "success":
        return <img css={iconStyles} src={successIcon} alt="Success Icon" />;
      default:
        return null;
    }
  };

  return (
    <div css={alertStyles}>
      <div>{getIcon(props.type)}</div> {/* เรียก getIcon เพื่อดึง JSX */}
      <span>{props.message}</span>
    </div>
  );
}

export default Alert;