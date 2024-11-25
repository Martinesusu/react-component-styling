/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
  return (
    <>
      <button 
        css={css`
          background-color: #074EE8;
          color: white;
          padding: 0 16px;
          border: none;
          border-radius: 4px;
          gap: 8px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          width: 171px;
          height: 50px;
        `}
        >
          {props.primary}
      </button>
      <button 
        css={css`
          background-color: #07A4E8;
          color: white;
          padding: 0 16px;
          border: none;
          border-radius: 4px;
          gap: 8px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          width: 171px;
          height: 50px;
        `}
        >
          {props.second}
      </button>
      <button 
        css={css`
          background-color: #DE5753;
          color: white;
          padding: 0 16px;
          border: none;
          border-radius: 4px;
          gap: 8px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          width: 171px;
          height: 50px;
        `}
        >
          {props.error}
      </button>
      <button
        css={css`
          background-color: #26B795;
          color: white;
          padding: 0 16px;
          border: none;
          border-radius: 4px;
          gap: 8px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          width: 171px;
          height: 50px;
        `} 
        >
          {props.success}
      </button>
    </>
  );
}

export default Button;