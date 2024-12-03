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
import SubmitButton from "../ui/submitButton";
import { useState } from "react";
import { userFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
} 

const PatientForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({name, email, phone}: z.infer<typeof userFormValidation>) {
  setIsLoading(true)
  try {
    // const userData = {name, email, phone  }
    // const user = await createUser(userData)
    // if(user) router.push( `/patients/${user.$id}/register`)
  } catch (error) {
    console.log(error)
    
  }

   
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
        <CustomFormField 
        fieldType = {FormFieldType.PHONE_INPUT}
        control = {form.control}
        name = 'phone'
        label = 'Phone Number'
        placeholder = '(254)-456-6784'
       
        />
        {/* <Button type="submit">Submit</Button> */}
        <SubmitButton isloading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
