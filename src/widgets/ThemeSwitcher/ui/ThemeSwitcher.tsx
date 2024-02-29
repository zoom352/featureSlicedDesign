import { useTheme } from 'app/providers/ThemeProvider'
import { FC } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

export const ThemeSwitcher: FC = () => {
  const { toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={() => { toggleTheme() }}>
      TOGGLE
    </Button>
  )
}
