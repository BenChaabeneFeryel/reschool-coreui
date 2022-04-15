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

const baseURL = 'http://127.0.0.1:8000/api/camion'

const Camions = () => {
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
            <h2 style={{ marginTop: 15, marginLeft: 30 }}>Camions</h2>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" color="light" hover responsive small>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">ID </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">ID Zone</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Matricule</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Capacité Max</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Volume Plastique</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Volume Carton</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Volume Composte</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Volume Canette</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Heure Sortie</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Heure Entrée</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Kilométrage</CTableHeaderCell>
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
                        {item.id_zone_travail}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">{item.matricule}</CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.volume_maximale_poubelle}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.volume_actuelle_plastique}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.volume_actuelle_papier}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.volume_actuelle_composte}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.volume_actuelle_canette}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">{item.heure_sortie}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.heure_entree}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.Kilometrage}</CTableDataCell>
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

export default Camions
