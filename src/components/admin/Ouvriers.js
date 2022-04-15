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

const baseURL = 'http://127.0.0.1:8000/api/ouvrier'

const Ouvriers = () => {
  const [value, setValue] = useState([])
  const getValue = async () => {
    await axios.get(baseURL).then((response) => {
      console.log(response.data.data)
      setValue(response.data.data)
    })
  }
  useEffect(() => getValue(), [])

  return (
    <div>
      <CRow>
        <CCol>
          <CCard>
            <h2 style={{ marginTop: 15, marginLeft: 30 }}>Ouvriers</h2>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" color="light" hover responsive small>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">ID </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">ID Zone</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Photo</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Nom et Prénom</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">CIN</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Poste</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">ID Camion</CTableHeaderCell>
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
                        {item.id_etablissement}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <img
                          src={`http://127.0.0.1:8000/storage/images/ouvrier/${item.photo}`}
                          height="30px"
                          width="30px"
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.nom} {item.prenom}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">{item.CIN}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.poste}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.id_camion}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.numero_tel}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.email}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.created_at}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.updated_at}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Ouvriers
