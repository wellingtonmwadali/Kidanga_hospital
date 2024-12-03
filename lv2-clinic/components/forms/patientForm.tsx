"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/reusable/button";
import {
  Form,
} from "@/components/reusable/form";

import CustomFormField from "../reusable/formField";
import userIcon from '../../public/assets/icons/user.svg';
import emailIcon from '../../public/assets/icons/email.svg';

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
} 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  })
})
const PatientForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section>
          <h1 className="header">Hey There 👋</h1>
          <p className="text-dark-700 mt-5 ">Schedule your Appointment</p>
        </section>
        <CustomFormField 
        fieldType = {FormFieldType.INPUT}
        control = {form.control}
        name = 'name'
        label = 'Full Name'
        placeholder = 'John Doe'
        iconSrc = {userIcon}
        iconAlt = 'user'
        />
        <CustomFormField 
        fieldType = {FormFieldType.INPUT}
        control = {form.control}
        name = 'email'
        label = 'Email'
        placeholder = 'johndoe@gmail.com'
        iconSrc = {emailIcon}
        iconAlt = 'email icon'
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
