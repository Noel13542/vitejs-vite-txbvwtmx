// src/components/ShadowExample/ShadowButton.jsx
import React, { useRef, useEffect } from 'react';
import styles from './ShadowButton.module.css';

export default function ShadowButton({ label }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const shadowRoot = hostRef.current.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    button.textContent = label;

    // 注入 Shadow DOM 内部样式
    const style = document.createElement('style');
    style.textContent = `
      button {
        background-color: #e11d48;
        color: #fff;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
      button:hover {
        background-color: #be123c;
      }
    `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(button);
  }, [label]);

  return <div ref={hostRef} className={styles.shadowHost} />;
}
