import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    const addTasks = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(addTasks));

    options.resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };
  const applySchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .strict(true)
      .min(3, 'min 3 chars')
      .max(50, 'max 50 chars')
      .required('Required'),
    number: Yup.string()
      .min(3, 'min 3 chars')
      .max(50, 'max 50 chars')
      .required('Required'),
  });

  return (
    <div className={s.form}>
      <Formik
        validationSchema={applySchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className={s.form_box}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} type="text" name="name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>
            <span>Phone</span>
            <Field className={s.input} type="number" name="number" />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
