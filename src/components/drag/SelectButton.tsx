interface SelectButtonProps {
  isSelected: boolean
  onChange: () => void
}

export const SelectButton = ({ isSelected, onChange }: SelectButtonProps) => {
  return <input type="checkbox" checked={isSelected} onChange={onChange} className="mb-2" />
}
