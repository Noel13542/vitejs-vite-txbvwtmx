// src/components/DynamicForm/DynamicForm.jsx
import React, { useState } from 'react';
import styles from './DynamicForm.module.css';

export default function DynamicForm({ onSubmit, config = [] }) {
  const initialValues = config.reduce((acc, field) => {
    acc[field.id] = '';
    return acc;
  }, {});
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e, field) => {
    setFormValues({
      ...formValues,
      [field.id]: e.target.value
    });
  };

  const handleClick = (field) => {
    if (field.type === 'button' && onSubmit) {
      onSubmit(formValues);
    }
  };

  return (
    <div className={styles.formContainer}>
      {config.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <div className={styles.formField} key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  type="text"
                  id={field.id}
                  value={formValues[field.id]}
                  onChange={(e) => handleChange(e, field)}
                />
              </div>
            );
          case 'select':
            return (
              <div className={styles.formField} key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <select
                  id={field.id}
                  value={formValues[field.id]}
                  onChange={(e) => handleChange(e, field)}
                >
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          case 'button':
            return (
              <button
                key={field.id}
                type="button"
                onClick={() => handleClick(field)}
                className={styles.submitBtn}
              >
                {field.label}
              </button>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
