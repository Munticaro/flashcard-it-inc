import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

export type CheckboxProps = {
  checked: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange: (checked: boolean) => void
}

export const Checkbox = (props: CheckboxProps) => {
  const { checked, disabled, id, onChange } = props

  return (
    <RadixCheckbox.Root checked={checked} disabled={disabled} id={id} onCheckedChange={onChange}>
      {checked && (
        <RadixCheckbox.Indicator>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      )}
    </RadixCheckbox.Root>
  )
}
