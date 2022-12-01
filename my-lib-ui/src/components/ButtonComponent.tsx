import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { 
  label: string 
};

const ButtonComponent: React.FC<Props> = (props) => {
  return (
    <div className="my-lib-ui-button-field">
      <button 
        className={`my-lib-ui-button" ${props.className}`}
        {...props}
      >
        { props.label }
      </button>
    </div>
  );
};


export default ButtonComponent;
