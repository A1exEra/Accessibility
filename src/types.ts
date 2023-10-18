export interface StyledProps {
  pathname: string;
}
export interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'date'; // Specify allowed input types
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  className?: string; // Use string for class names
  id?: string;
}
