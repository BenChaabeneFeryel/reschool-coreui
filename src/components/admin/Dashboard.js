import React from 'react'
import WidgetsDropdown from './WidgetsDropdown'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react'
import { CChartLine, CChartBar } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import Select from 'react-select'

const prixdechetsURL = 'http://127.0.0.1:8000/api/prixdechets'

const Dashboard = () => {
  const [prixdechets, setPrixDechets] = useState([])
  const getPrixDechets = async () => {
    await axios.get(prixdechetsURL).then((response) => {
      setPrixDechets(response.data)
    })
  }
  useEffect(() => getPrixDechets(), [])

  const [ventes, setVentes] = React.useState([])
  useEffect(() => {
    ;(async function getStatus() {
      const vdata = await fetch('http://127.0.0.1:8000/api/somme-dechets-vendus')
      const vjson = await vdata.json()

      setTimeout(getStatus, 60000)
      setVentes(vjson)
    })()
  }, [])

  var voptions = []
  const [vAnnee, setVAnnee] = useState()
  const [ventesPlastique, setVentesPlastique] = useState([])
  const [ventesPapier, setVentesPapier] = useState([])
  const [ventesComposte, setVentesComposte] = useState([])
  const [ventesCanette, setVentesCanette] = useState([])

  if (ventes.length !== 0) {
    var vplastique = ventes.plastique
    var vpapier = ventes.papier
    var vcomposte = ventes.composte
    var vcanette = ventes.canette
    var vannees = ventes.annee

    if (vAnnee === undefined) {
      setVAnnee(vannees[0])
      setVentesPapier(vpapier[0])
      setVentesPlastique(vplastique[0])
      setVentesComposte(vcomposte[0])
      setVentesCanette(vcanette[0])
    } else {
      for (let i = 0; i < vannees.length; i++) {
        voptions.push({
          value: vannees[i],
          ventesPapier: vpapier[i],
          ventesPlastique: vplastique[i],
          ventesComposte: vcomposte[i],
          ventesCanette: vcanette[i],
        })
      }
      if (voptions.length !== 0) {
        var onchangeSelectV = (item) => {
          setVAnnee(item.value)
          setVentesPapier(item.ventesPapier)
          setVentesPlastique(item.ventesPlastique)
          setVentesComposte(item.ventesComposte)
          setVentesCanette(item.ventesCanette)
        }
      }
    }
  }

  const [quantitemois, setQuantiteMois] = React.useState([])
  useEffect(() => {
    ;(async function getStatus() {
      const response = await fetch('http://127.0.0.1:8000/api/somme-dechets-par-mois')
      const json = await response.json()

      setTimeout(getStatus, 60000)
      setQuantiteMois(json)
    })()
  }, [])

  var options = []
  const [annee, setAnnee] = useState()
  const [dataplastique, setDataplastique] = useState([])
  const [datapapier, setDatapapier] = useState([])
  const [datacomposte, setDatacomposte] = useState([])
  const [datacanette, setDatacanette] = useState([])

  if (quantitemois.length !== 0) {
    var plastique = quantitemois.plastique
    var papier = quantitemois.papier
    var composte = quantitemois.composte
    var canette = quantitemois.canette
    var annees = quantitemois.annee

    if (annee === undefined) {
      setAnnee(annees[0])
      setDatapapier(papier[0])
      setDataplastique(plastique[0])
      setDatacomposte(composte[0])
      setDatacanette(canette[0])
    } else {
      for (let i = 0; i < annees.length; i++) {
        options.push({
          value: annees[i],
          datapapier: papier[i],
          dataplastique: plastique[i],
          datacomposte: composte[i],
          datacanette: canette[i],
        })
      }
      if (options.length !== 0) {
        var onchangeSelect = (item) => {
          setAnnee(item.value)
          setDatapapier(item.datapapier)
          setDataplastique(item.dataplastique)
          setDatacomposte(item.datacomposte)
          setDatacanette(item.datacanette)
        }
      }
    }
  }

  const [quanEtab, setQuanEtab] = React.useState([])
  useEffect(() => {
    ;(async function getStatus() {
      const response = await fetch('http://127.0.0.1:8000/api/somme-dechets-par-mois')
      const json = await response.json()

      setTimeout(getStatus, 60000)
      setQuanEtab(json)
    })()
  }, [])

  var eoptions = []
  var etaboptions = []
  const [eannee, setEAnnee] = useState()
  const [etab, setEtab] = useState()
  const [edataplastique, setEDataplastique] = useState([])
  const [edatapapier, setEDatapapier] = useState([])
  const [edatacomposte, setEDatacomposte] = useState([])
  const [edatacanette, setEDatacanette] = useState([])

  if (quanEtab.length !== 0) {
    var eplastique = quanEtab.plastique
    var epapier = quanEtab.papier
    var ecomposte = quanEtab.composte
    var ecanette = quanEtab.canette
    var eannees = quanEtab.annee
    var etabli = quanEtab.etab

    if (eannee === undefined) {
      setAnnee(eannees[0])
      setEtab(etabli[0])
      setEDatapapier(epapier[0])
      setEDataplastique(eplastique[0])
      setEDatacomposte(ecomposte[0])
      setEDatacanette(ecanette[0])
    } else {
      for (let i = 0; i < eannees.length; i++) {
        eoptions.push({
          value: eannees[i],
          etab: etabli[i],
          edatapapier: epapier[i],
          edataplastique: eplastique[i],
          edatacomposte: ecomposte[i],
          edatacanette: ecanette[i],
        })
      }
      if (eoptions.length !== 0) {
        var onchangeSelect = (item) => {
          setEAnnee(item.value)
          setEtab(item.etab)
          setEDatapapier(item.edatapapier)
          setEDataplastique(item.edataplastique)
          setEDatacomposte(item.edatacomposte)
          setEDatacanette(item.edatacanette)
        }
      }
    }

    if (etab === undefined) {
      setAnnee(eannees[0])
      setEtab(etabli[0])
      setEDatapapier(epapier[0])
      setEDataplastique(eplastique[0])
      setEDatacomposte(ecomposte[0])
      setEDatacanette(ecanette[0])
    } else {
      for (let i = 0; i < etabli.length; i++) {
        etaboptions.push({
          value: eannees[i],
          etab: etabli[i],
          edatapapier: epapier[i],
          edataplastique: eplastique[i],
          edatacomposte: ecomposte[i],
          edatacanette: ecanette[i],
        })
      }
      if (etaboptions.length !== 0) {
        var onchangeSelect = (item) => {
          setEAnnee(item.value)
          setEtab(item.etab)
          setEDatapapier(item.edatapapier)
          setEDataplastique(item.edataplastique)
          setEDatacomposte(item.edatacomposte)
          setEDatacanette(item.edatacanette)
        }
      }
    }
  }

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Quantités vendus des déchets par mois
              </h4>
              <div className="small text-medium-emphasis">Janvier - Décembre 2022</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <Select
                className="float-end me-3"
                onChange={onchangeSelectV}
                value={vAnnee}
                options={voptions}
                getOptionValue={(option) => option.value}
                getOptionLabel={(option) => option.value}
                placeholder={vAnnee}
              />
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '400px', marginTop: '40px' }}
            data={{
              labels: [
                'Janvier',
                'Février',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Aout',
                'Septembre',
                'Octobre',
                'Novembre',
                'Decembre',
              ],
              datasets: [
                {
                  label: 'Plastique',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: ventesPlastique,
                  fill: true,
                },
                {
                  label: 'Papier et carton',
                  backgroundColor: hexToRgba(getStyle('--cui-warning'), 10),
                  borderColor: getStyle('--cui-warning'),
                  pointHoverBackgroundColor: getStyle('--cui-warning'),
                  borderWidth: 2,
                  data: ventesPapier,
                  fill: true,
                },
                {
                  label: 'Composte',
                  backgroundColor: hexToRgba(getStyle('--cui-success'), 10),
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: ventesComposte,
                  fill: true,
                },
                {
                  label: 'Canettes',
                  backgroundColor: hexToRgba(getStyle('--cui-danger'), 10),
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 2,
                  data: ventesCanette,
                  fill: true,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>
      <CRow>
        <CCard className="mb-4">
          <CCardBody>
            <CRow className="mb-4">
              <CCol sm={7}>
                <h4 className="card-title mb-0">
                  Quantités totales collectées par type de déchet et par année
                </h4>
              </CCol>
              <CCol sm={5} className="d-none d-md-block">
                <Select
                  className="float-end me-3"
                  onChange={onchangeSelect}
                  value={annee}
                  options={options}
                  getOptionValue={(option) => option.value}
                  getOptionLabel={(option) => option.value}
                  placeholder={annee}
                />
              </CCol>
            </CRow>

            <CRow>
              <CCol xs={6}>
                <CCard className="mb-4">
                  <CCardHeader>Quantité de plastique collectée en KG par mois</CCardHeader>
                  <CCardBody>
                    <CChartBar
                      data={{
                        labels: [
                          'Janvier',
                          'Février',
                          'Mars',
                          'Avril',
                          'Mai',
                          'Juin',
                          'Juillet',
                          'Aout',
                          'Septembre',
                          'Octobre',
                          'Novembre',
                          'Décembre',
                        ],
                        datasets: [
                          {
                            label: 'Plastique',
                            backgroundColor: '#321fdb',
                            data: dataplastique,
                          },
                        ],
                      }}
                      labels="mois"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={6}>
                <CCard className="mb-4">
                  <CCardHeader>Quantité de papier et carton collectée en KG par mois</CCardHeader>
                  <CCardBody>
                    <CChartBar
                      data={{
                        labels: [
                          'Janvier',
                          'Février',
                          'Mars',
                          'Avril',
                          'Mai',
                          'Juin',
                          'Juillet',
                          'Aout',
                          'Septembre',
                          'Octobre',
                          'Novembre',
                          'Décembre',
                        ],
                        datasets: [
                          {
                            label: 'Papier & carton',
                            backgroundColor: '#f9b115',
                            data: datapapier,
                          },
                        ],
                      }}
                      labels="mois"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={6}>
                <CCard className="mb-4">
                  <CCardHeader>Quantité de composte collectée en KG par mois</CCardHeader>
                  <CCardBody>
                    <CChartBar
                      data={{
                        labels: [
                          'Janvier',
                          'Février',
                          'Mars',
                          'Avril',
                          'Mai',
                          'Juin',
                          'Juillet',
                          'Aout',
                          'Septembre',
                          'Octobre',
                          'Novembre',
                          'Décembre',
                        ],
                        datasets: [
                          {
                            label: 'Composte',
                            backgroundColor: '#2eb85c',
                            data: datacomposte,
                          },
                        ],
                      }}
                      labels="mois"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={6}>
                <CCard className="mb-4">
                  <CCardHeader>Quantité de canette collectée en KG par mois</CCardHeader>
                  <CCardBody>
                    <CChartBar
                      data={{
                        labels: [
                          'Janvier',
                          'Février',
                          'Mars',
                          'Avril',
                          'Mai',
                          'Juin',
                          'Juillet',
                          'Aout',
                          'Septembre',
                          'Octobre',
                          'Novembre',
                          'Décembre',
                        ],
                        datasets: [
                          {
                            label: 'Canette',
                            backgroundColor: '#e55353',
                            data: datacanette,
                          },
                        ],
                      }}
                      labels="mois"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CRow>
      <CRow>
        <CCard className="mb-4">
          <CCardBody>
            <CRow className="mb-4">
              <CCol sm={7}>
                <h4 className="card-title mb-0">
                  Quantités totales collectées par zone et par type de décheth
                </h4>
              </CCol>
              <CCol sm={5} className="d-none d-md-block">
                <Select
                  className="float-end me-3"
                  onChange={onchangeSelect}
                  value={eannee}
                  options={eoptions}
                  getOptionValue={(option) => option.value}
                  getOptionLabel={(option) => option.value}
                  placeholder={eannee}
                />
                <Select
                  className="float-end me-3"
                  onChange={onchangeSelect}
                  value={etab}
                  options={etaboptions}
                  getOptionValue={(option) => option.value}
                  getOptionLabel={(option) => option.value}
                  placeholder={etab}
                />
              </CCol>
            </CRow>

            <CRow>
              <CCol xs={6}>
                <CCard className="mb-4">
                  <CCardHeader>Quantité de plastique collectée en KG par mois</CCardHeader>
                  <CCardBody>
                    <CChartBar
                      data={{
                        labels: [
                          'Janvier',
                          'Février',
                          'Mars',
                          'Avril',
                          'Mai',
                          'Juin',
                          'Juillet',
                          'Aout',
                          'Septembre',
                          'Octobre',
                          'Novembre',
                          'Décembre',
                        ],
                        datasets: [
                          {
                            label: 'Plastique',
                            backgroundColor: '#321fdb',
                            data: edataplastique,
                          },
                        ],
                      }}
                      labels="mois"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={6}>
                <CCard className="mb-4">
                  <CCardHeader>Quantité de papier et carton collectée en KG par mois</CCardHeader>
                  <CCardBody>
                    <CChartBar
                      data={{
                        labels: [
                          'Janvier',
                          'Février',
                          'Mars',
                          'Avril',
                          'Mai',
                          'Juin',
                          'Juillet',
                          'Aout',
                          'Septembre',
                          'Octobre',
                          'Novembre',
                          'Décembre',
                        ],
                        datasets: [
                          {
                            label: 'Papier & carton',
                            backgroundColor: '#f9b115',
                            data: edatapapier,
                          },
                        ],
                      }}
                      labels="mois"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={6}>
                <CCard className="mb-4">
                  <CCardHeader>Quantité de composte collectée en KG par mois</CCardHeader>
                  <CCardBody>
                    <CChartBar
                      data={{
                        labels: [
                          'Janvier',
                          'Février',
                          'Mars',
                          'Avril',
                          'Mai',
                          'Juin',
                          'Juillet',
                          'Aout',
                          'Septembre',
                          'Octobre',
                          'Novembre',
                          'Décembre',
                        ],
                        datasets: [
                          {
                            label: 'Composte',
                            backgroundColor: '#2eb85c',
                            data: edatacomposte,
                          },
                        ],
                      }}
                      labels="mois"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={6}>
                <CCard className="mb-4">
                  <CCardHeader>Quantité de canette collectée en KG par mois</CCardHeader>
                  <CCardBody>
                    <CChartBar
                      data={{
                        labels: [
                          'Janvier',
                          'Février',
                          'Mars',
                          'Avril',
                          'Mai',
                          'Juin',
                          'Juillet',
                          'Aout',
                          'Septembre',
                          'Octobre',
                          'Novembre',
                          'Décembre',
                        ],
                        datasets: [
                          {
                            label: 'Canette',
                            backgroundColor: '#e55353',
                            data: edatacanette,
                          },
                        ],
                      }}
                      labels="mois"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CRow>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Prix du marché des déchets par type</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Plastique</div>
                        <div className="fs-5 fw-semibold">{prixdechets.prix_plastique} DT</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Papier {'&'} carton</div>
                        <div className="fs-5 fw-semibold">{prixdechets.prix_papier} DT</div>
                      </div>
                    </CCol>
                  </CRow>
                  <hr className="mt-0" />
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Composte</div>
                        <div className="fs-5 fw-semibold">{prixdechets.prix_composte} DT</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Canette</div>
                        <div className="fs-5 fw-semibold">{prixdechets.prix_canette} DT</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
