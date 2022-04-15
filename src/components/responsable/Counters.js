import React from 'react'
import { useState, useEffect } from 'react'
import {
  CRow,
  CCol,
  CWidgetStatsF,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilMap,
  cilTrash,
  cilBuilding,
  cilUser,
  cilCarAlt,
  cilGroup,
} from '@coreui/icons'
import axios from 'axios'

const dashboardURL = 'http://127.0.0.1:8000/api/dashboard'
const DechetsURL = 'http://12s7.0.0.1:8000/api/somme-total-dechet-zone-depot'

const Counters = () => {
  const [value, setValue] = useState([])
  const getValue = async () => {
    await axios.get(dashboardURL).then((response) => {
      setValue(response.data)
    })
  }
  useEffect(() => getValue(), [])

  const [dechets, setDechets] = useState([])
  const getDechets = async () => {
    await axios.get(DechetsURL).then((response) => {
      setDechets(response.data)
    })
  }
  useEffect(() => getDechets(), [])

  return (
    <>
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilTrash} height={24} />}
            title="Quantité actuelle totale de plastique"
            value={dechets.somme_depot_actuelle_plastique}
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilMap} height={24} />}
            title="Zones de travail"
            value={value.nbr_zone_travail}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            icon={<CIcon icon={cilBuilding} height={24} />}
            title="Etablissements"
            value={value.nbr_etablissement}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="success"
            icon={<CIcon icon={cilTrash} height={24} />}
            title="Blocs poubelles"
            value={value.nbr_bloc_poubelle}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="danger"
            icon={<CIcon icon={cilUser} height={24} />}
            title="Acheteur de Déchets"
            value={value.nbr_client_dechet}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="info"
            icon={<CIcon icon={cilCarAlt} height={24} />}
            title="Camions"
            value={value.nbr_camion}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="dark"
            icon={<CIcon icon={cilGroup} height={24} />}
            title="Ouvriers"
            value={value.nbr_ouvrier}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="secondary"
            icon={<CIcon icon={cilUser} height={24} />}
            title="Fournisseurs"
            value={value.nbr_fournisseur}
          />
        </CCol>
      </CRow>
    </>
  )
}

export default Counters
