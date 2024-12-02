'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/reusable/form";
import { Input } from "@/components/reusable/input";
import { FormFieldType } from '../forms/patientForm';


  interface CustomProps{
    control : Control<any>,
    fieldType : FormFieldType,
  } 

const CustomFormField = ( {control, fieldType, name} : CustomProps ) => {
  

  return (
    <div>
            <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className='flex-1'>
              {fieldType !== FormFieldType.CHECKBOX && label}(
                <FormLabel>{label}</FormLabel>
              )
              
            </FormItem>
          )}
        />
    </div>
  )
}

export default CustomFormField