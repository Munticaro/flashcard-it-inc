import { Typography } from '@/component/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange: (checked: boolean) => void
}

export const Checkbox = (props: CheckboxProps) => {
  const { checked, disabled, id, label, onChange } = props

  return (
    <Typography as={'overline'} className={s.checkboxRoot}>
      <RadixCheckbox.Root checked={checked} disabled={disabled} id={id} onCheckedChange={onChange}>
        {checked && (
          <RadixCheckbox.Indicator className={s.indicator}>
            <CheckIcon />
          </RadixCheckbox.Indicator>
        )}
      </RadixCheckbox.Root>
      {label}
    </Typography>
  )
}
