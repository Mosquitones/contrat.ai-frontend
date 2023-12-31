/* eslint-disable @typescript-eslint/no-unused-vars */
import { CssBaseline, ThemeOptions } from '@mui/material'
import { genericTypography } from 'common/styles'

import {
  ButtonBaseStyleOverrides,
  ButtonStyleOverrides,
} from './button/button.theme'
import { CheckboxStyleOverrides } from './checkbox/checkbox.theme'
import { ChipStyleOverrides } from './chip/chip.theme'
import { CssBaselineStyleOverrides } from './cssBaseline/cssBaseline.theme'
import { DividerStyleOverrides } from './divider/divider.theme'
import { FormControlStyleOverrides } from './formControl/formControl.theme'
import { FormLabelStyleOverrides } from './formLabel/formLabel.theme'
import { IconButtonStyleOverrides } from './iconButton/iconButton.theme'
import {
  InputLabelStyleOverrides,
  InputStyleOverrides,
} from './input/input.theme'
import { LinkStyleOverrides } from './link/link.theme'
import { MenuItemStyleOverrides } from './menuItem/menuItem.theme'
import { ModalStyleOverrides } from './modal/modal.theme'
import { PaperStyleOverrides } from './paper/paper.theme'
import { SkeletonStyleOverrides } from './skeleton/skeleton.theme'
import { TypographyStyleOverrides } from './typography/typography.theme'

export const MuiComponents: ThemeOptions['components'] = {
  MuiButton: ButtonStyleOverrides,
  MuiButtonBase: ButtonBaseStyleOverrides,
  MuiLink: LinkStyleOverrides,
  MuiChip: ChipStyleOverrides,
  MuiTypography: TypographyStyleOverrides,
  MuiInput: InputStyleOverrides,
  MuiInputLabel: InputLabelStyleOverrides,
  MuiModal: ModalStyleOverrides,
  MuiCheckbox: CheckboxStyleOverrides,
  MuiSkeleton: SkeletonStyleOverrides,
  MuiDivider: DividerStyleOverrides,
  MuiPaper: PaperStyleOverrides,
  MuiFormLabel: FormLabelStyleOverrides,
  MuiFormControl: FormControlStyleOverrides,
  MuiMenuItem: MenuItemStyleOverrides,
  MuiIconButton: IconButtonStyleOverrides,
  MuiCssBaseline: CssBaselineStyleOverrides,
}
