import { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = {
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<'button'>
