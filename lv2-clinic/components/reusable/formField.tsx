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
import Image from 'next/image';


interface CustomProps {
  control: Control<any>,
  fieldType: FormFieldType,
  name : string,
  label? : string,
  placeholder? : string,
  iconSrc? : string,
  iconAlt? : string,
  disabled? : boolean,
  dateFormat? : string,
  showTimeSelect? : boolean,
  children? : React.ReactNode,
  renderSkeleton? : (field : any) => React.ReactNode
}
const RenderInput = ({field, props} : {field : any; props : CustomProps})=>{
  // return(
  //   <Input
  //   type = 'text'
  //   placeholder = 'John Doe'
  //   />
  // )
  const {fieldType, iconSrc, iconAlt, placeholder} = props
  switch(fieldType){
    case FormFieldType.INPUT:
      return(
        <div className='flex rounded-md border-dark-500 bg-dark-400'>
          {
            iconSrc && (
              <Image
              src = {iconSrc}
              height = {24}
              width = {24}
              alt = { iconAlt || 'icon'}
              className='ml-2'
              />
            )
          }
          <FormControl>
            <Input
            placeholder={placeholder}
            {...field}
            className='shad-input border-0'/>
          </FormControl>
        </div>
      )

  }
}
const CustomFormField = ( props: CustomProps) => {
const {control, fieldType, name, label} = props

  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='flex-1'>
            {fieldType !== FormFieldType.CHECKBOX && label &&(
            <FormLabel>{label}</FormLabel>
            )}
            <RenderInput field={field} props={props}/>
            <FormMessage className='shad-error'/>
          </FormItem>
        )}
      />
    </div>
  )
}

export default CustomFormField