// Component
export interface IMoveButtonProps {
  type: "left" | "top" | "right" | "bottom";
  onClick: () => void;
}

// Style
export interface IWrapperProps {
  type: "left" | "top" | "right" | "bottom";
}
