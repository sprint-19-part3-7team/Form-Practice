import ErrorMsg from '@/components/common/error-msg/ErrorMsg';
import Input from '@/components/common/input/Input';
import Label from '@/components/common/label/Label';
import { FormFieldContext } from '@/components/form/form-field/formFieldContext';

const FormField = ({ error, children, className = '' }) => {
  return (
    <FormFieldContext value={{ error }}>
      <div className={`flex w-full flex-col gap-2 ${className}`}>{children}</div>
    </FormFieldContext>
  );
};

FormField.Input = Input;
FormField.Label = Label;
FormField.ErrorMsg = ErrorMsg;

export default FormField;
