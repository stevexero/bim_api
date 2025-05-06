import SignUpForm from '../components/SignUpForm';
import FormHeader from '../components/FormHeader';
export default function page() {
  return (
    <>
      <FormHeader title='Create Account' />
      <SignUpForm />
    </>
  );
}
