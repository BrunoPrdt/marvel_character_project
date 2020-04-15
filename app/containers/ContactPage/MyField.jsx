import React from 'react';
import { useField } from '@formiz/core';

export const MyField = props => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props,
  );
  // eslint-disable-next-line react/prop-types
  const { label, type, required } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <div className={`demo-form-group ${showError ? 'is-error' : ''}`}>
      <div className="label">
        <label className="demo-label" htmlFor={id}>
          {label}
          {!!required && ' *'}
        </label>
      </div>
      <input
        id={id}
        type={type || 'text'}
        value={value || ''}
        className="demo-input"
        onChange={e => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        aria-describedby={showError ? `${id}-error` : null}
      />
      {showError && (
        <div id={`${id}-error`} className="demo-form-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
