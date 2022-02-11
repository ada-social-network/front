import React from 'react'
import { useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props as any)
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val)

        console.log(val)
      }}
    />
  )
}
