import React, { useMemo } from 'react'
// import { useViewport } from 'lib/use-viewport'
import { Controller, useForm } from 'react-hook-form'

import styles from './styles.module.css'
import clsx from 'clsx'

import { EMAIL_REGEX } from 'lib/constants'
import { Input } from 'components/input'
import { ArrowIcon } from 'components/icons'

export interface ContactsFormValues {
  email: string
  name?: string
  message?: string
  phone?: string
}

interface ContactsFormProps {
  onSubmit: (values: ContactsFormValues) => Promise<void>
  className?: string
}

export const ContactsForm: React.FC<ContactsFormProps> = ({
  onSubmit,
  className
}) => {
  // const { isMobile } = useViewport()

  const {
    handleSubmit,
    control,
    reset,
    formState: {
      // errors: { email: emailError, name: nameError, phone: phoneError },
      isDirty,
      isValid,
      isSubmitting
    }
  } = useForm<ContactsFormValues>({ mode: 'onChange' })

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
        name="name"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Введите ваше имя'
          },
          pattern: {
            value: /^[\p{L}\s]+$/u,
            message: 'Допускаются только буквы'
          }
        }}
        render={({ field }) => (
          // <FieldStatus
          //   message={nameError?.message}
          //   className={styles.fieldStatus}
          //   status={fieldState.error && 'error'}>
          <Input
            value={field.value}
            onChange={field.onChange}
            // status={fieldState.error && 'error'}
            placeholder="Имя"
          />
          // </FieldStatus>
        )}
      />
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
            placeholder="E-mail"
            className={styles.input}
          />
          // </FieldStatus>
        )}
      />
      <Controller
        name="phone"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Введите номер телефона'
          }
        }}
        render={({ field }) => (
          // <FieldStatus
          //   message={phoneError?.message}
          //   className={styles.fieldStatus}
          //   status={fieldState.error && 'error'}>
          <Input
            value={field.value}
            onChange={field.onChange}
            // status={fieldState.error && 'error'}
            placeholder="Телефон"
            className={styles.input}
          />
          // </FieldStatus>
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          // <FieldStatus
          //   className={styles.fieldStatus}
          //   status={fieldState.error && 'error'}>
          <Input
            value={field.value}
            onChange={field.onChange}
            // status={fieldState.error && 'error'}
            placeholder="Ваше сообщение"
            className={styles.textarea}
          />
          // </FieldStatus>
        )}
      />
      <div className={styles.buttonRow}>
        <button
          type="submit"
          className={styles.button}
          disabled={!(isDirty && isValid) || isSubmitting}>
          Отправить
        </button>
        <div className={styles.arrowContainer}>
          <ArrowIcon />
        </div>
      </div>
    </form>
  )
}
