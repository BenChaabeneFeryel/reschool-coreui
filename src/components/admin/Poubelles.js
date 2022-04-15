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

const baseURL = 'http://127.0.0.1:8000/api/poubelle'

const Poubelles = () => {
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
            <h2 style={{ marginTop: 15, marginLeft: 30 }}>Poubelles</h2>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" color="light" hover responsive>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">ID Bloc</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">ID Poubelle</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Nom</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Type</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Etat</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Capacité Max</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Temps de remplissage
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Créé à</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Modifié à</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {value.map((item, i) => (
                    <CTableRow v-for="item in tableItems" key={item.i}>
                      <CTableDataCell className="text-center">
                        <strong>{item.id_bloc_poubelle}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">{item.id}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.nom}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.type}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.Etat}</CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.capacite_poubelle}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.temps_remplissage}
                      </CTableDataCell>
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

export default Poubelles
