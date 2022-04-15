import React from 'react'
import {
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const SettingsDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon icon={cilSettings} size="lg" />
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end">
        <CDropdownItem href="#">Paramétres 1</CDropdownItem>
        <CDropdownItem href="#">Paramétres 2</CDropdownItem>
        <CDropdownItem href="#">Paramétres 3</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default SettingsDropdown
