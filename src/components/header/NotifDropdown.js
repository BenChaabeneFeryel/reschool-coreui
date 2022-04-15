import React from 'react'
import { CBadge, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import { cilBell, cilUser, cilFlagAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const NotifDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CBadge
          color="danger"
          className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger"
        >
          5
        </CBadge>
        <CIcon icon={cilBell} size="lg" />
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end">
        <CDropdownItem href="#">
          <CIcon icon={cilFlagAlt} className="me-2" />
          Notif 1
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFlagAlt} className="me-2" />
          Notif 2
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default NotifDropdown
