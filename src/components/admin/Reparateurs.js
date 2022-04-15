import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const poubelleURL = 'http://127.0.0.1:8000/api/reparateur-poubelle'
const mecanisiensURL = 'http://127.0.0.1:8000/api/mecanicien'

const Reparateurs = () => {
  const [value, setValue] = useState([])
  const getValue = async () => {
    await axios.get(poubelleURL).then((response) => {
      setValue(response.data.data)
    })
  }
  useEffect(() => getValue(), [])

  const [mecan, setMecan] = useState([])
  const getMecan = async () => {
    await axios.get(mecanisiensURL).then((response) => {
      setMecan(response.data.data)
    })
  }
  useEffect(() => getMecan(), [])
  return (
    <div>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <h2 style={{ marginTop: 15, marginBottom: 15, marginLeft: 30 }}>Réparateurs</h2>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardBody>
                      <h5>Réparateurs de poubelles :</h5>
                      <br />
                      <CTable
                        align="middle"
                        className="mb-0 border"
                        color="light"
                        hover
                        responsive
                        small
                      >
                        <CTableHead color="dark">
                          <CTableRow>
                            <CTableHeaderCell className="text-center">ID </CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Photo</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">
                              Nom et Prénom
                            </CTableHeaderCell>
                            <CTableHeaderCell className="text-center">CIN</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Adresse</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Tel</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Email</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Créé à</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Modifié à</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          {value.map((item, i) => (
                            <CTableRow v-for="item in tableItems" key={item.i}>
                              <CTableDataCell className="text-center">
                                <strong>{item.id}</strong>
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                <img
                                  src={`http://127.0.0.1:8000/storage/images/reparateur_poubelle/${item.photo}`}
                                  height="30px"
                                  width="30px"
                                />
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.nom} {item.prenom}
                              </CTableDataCell>
                              <CTableDataCell className="text-center">{item.CIN}</CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.adresse}
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.numero_telephone}
                              </CTableDataCell>
                              <CTableDataCell className="text-center">{item.email}</CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.created_at}
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.updated_at}
                              </CTableDataCell>
                            </CTableRow>
                          ))}
                        </CTableBody>
                      </CTable>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
              <br />
              <CRow>
                <CCol>
                  <CCard>
                    <CCardBody>
                      <h5>Réparateurs de camions :</h5>
                      <br />
                      <CTable
                        align="middle"
                        className="mb-0 border"
                        color="light"
                        hover
                        responsive
                        small
                      >
                        <CTableHead color="dark">
                          <CTableRow>
                            <CTableHeaderCell className="text-center">ID </CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Photo</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">
                              Nom et Prénom
                            </CTableHeaderCell>
                            <CTableHeaderCell className="text-center">CIN</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Adresse</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Tel</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Email</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Créé à</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Modifié à</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          {mecan.map((item, i) => (
                            <CTableRow v-for="item in tableItems" key={item.i}>
                              <CTableDataCell className="text-center">
                                <strong>{item.id}</strong>
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                <img
                                  src={`http://127.0.0.1:8000/storage/images/mecanicien/${item.photo}`}
                                  height="30px"
                                  width="30px"
                                />
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.nom} {item.prenom}
                              </CTableDataCell>
                              <CTableDataCell className="text-center">{item.CIN}</CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.adresse}
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.numero_telephone}
                              </CTableDataCell>
                              <CTableDataCell className="text-center">{item.email}</CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.created_at}
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                {item.updated_at}
                              </CTableDataCell>
                            </CTableRow>
                          ))}
                        </CTableBody>
                      </CTable>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Reparateurs
