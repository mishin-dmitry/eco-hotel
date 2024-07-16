import React, { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'

import styles from './styles.module.css'
import { EMAIL_REGEX } from 'lib/constants'
import { Input } from '../input'
import { ArrowIcon } from '../icons'
import clsx from 'clsx'

export interface SubscribeFormValues {
  email: string
}

interface SubscribeFormProps {
  onSubmit: (values: SubscribeFormValues) => Promise<void>
  className?: string
}

// TODO error messages
export const SubscribeForm: React.FC<SubscribeFormProps> = ({
  onSubmit,
  className
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: {
      // errors: { email: emailError },
      isDirty,
      isValid,
      isSubmitting
    }
  } = useForm<SubscribeFormValues>({ mode: 'onChange' })

  const submit = useMemo(
    () =>
      handleSubmit(async data => {
        try {
          await onSubmit(data)

          reset()

          // showSuccessSnackbar(isMobile)
        } catch {
          // showErrorSnackbar(isMobile)
        }
      }),
    [handleSubmit, onSubmit, reset]
  )

  return (
    <form className={clsx(styles.form, className)} onSubmit={submit}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Введите email'
          },
          pattern: {
            value: EMAIL_REGEX,
            message: 'Недопустимый email'
          }
        }}
        render={({ field }) => (
          // <FieldStatus
          //   message={emailError?.message}
          //   className={styles.fieldStatus}
          //   status={fieldState.error && 'error'}>
          <Input
            value={field.value}
            onChange={field.onChange}
            // status={fieldState.error && 'error'}
            placeholder="Введите свой E-mail"
            type="filled"
          />
          // </FieldStatus>
        )}
      />
      <button
        className={styles.button}
        disabled={!(isDirty && isValid) || isSubmitting}
        type="submit">
        Подписаться
        <ArrowIcon />
      </button>
    </form>
  )
}
