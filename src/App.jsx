import FormField from '@/components/form/form-field/FormField';
import { FormFieldContext } from '@/components/form/form-field/formFieldContext';

const App = () => {
  return (
    <div className='px-4'>
      <form className='mx-auto max-w-180 py-25'>
        <FormField error={'이메일 형식에 맞게 작성해주세요.'}>
          <FormField.Label htmlFor='email' required>
            이메일
          </FormField.Label>
          <FormField.Input
            id='email'
            name='email'
            type='email'
            placeholder='이메일을 입력해주세요.'
            autoComplete='email'
            context={FormFieldContext}
            required
          />
          <FormField.ErrorMsg context={FormFieldContext} />
        </FormField>
      </form>
    </div>
  );
};

export default App;
