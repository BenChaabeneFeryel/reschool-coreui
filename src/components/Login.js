import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <center>
                    <h1>Connexion</h1>
                    <p className="text-medium-emphasis">Veuillez vous connecter à votre compte</p>
                  </center>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Mot de passe"
                      autoComplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CRow>
                      <CButton color="success" className="px-4" style={{ color: 'white' }}>
                        Se Connecter
                      </CButton>
                    </CRow>
                    <CRow xs={6} className="text-right">
                      <CButton color="link" className="px-0" style={{ color: 'grey' }}>
                        Avez-vous oublier votre mot de passe?
                      </CButton>
                    </CRow>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
