import { useTheme } from "app/providers/ThemeProvider"
import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ThemeButton } from "shared/ui/Button/Button"

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={() => toggleTheme()}>
      TOGGLE
    </Button>
  )
}