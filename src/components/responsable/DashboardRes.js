import React from 'react'
import Counters from './Counters'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from '@coreui/react'
import { CChartLine, CChartBar } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

const prixdechetsURL = 'http://127.0.0.1:8000/api/prixdechets'

const DashboardRes = () => {
  const [prixdechets, setPrixDechets] = useState([])
  const getPrixDechets = async () => {
    await axios.get(prixdechetsURL).then((response) => {
      setPrixDechets(response.data)
    })
  }
  useEffect(() => getPrixDechets(), [])

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

  return (
    <>
      <Counters />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Quantités de déchets colléctés dans votre établissement par mois
              </h4>
              <div className="small text-medium-emphasis">Janvier - Décembre 2022</div>
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
                'Dècembre',
              ],
              datasets: [
                {
                  label: 'Plastique',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [86, 12, 30, 100, 112, 130, 150, 155, 173, 130, 50, 94],
                  fill: true,
                },
                {
                  label: 'Papier et carton',
                  backgroundColor: hexToRgba(getStyle('--cui-warning'), 10),
                  borderColor: getStyle('--cui-warning'),
                  pointHoverBackgroundColor: getStyle('--cui-warning'),
                  borderWidth: 2,
                  data: [76, 110, 100, 90, 134, 180, 182, 160, 150, 150, 111, 111],
                  fill: true,
                },
                {
                  label: 'Composte',
                  backgroundColor: hexToRgba(getStyle('--cui-success'), 10),
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [165, 65, 85, 65, 115, 65, 65, 65, 65, 70, 75, 77],
                  fill: true,
                },
                {
                  label: 'Canettes',
                  backgroundColor: hexToRgba(getStyle('--cui-danger'), 10),
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 2,
                  data: [65, 85, 90, 95, 111, 100, 96, 100, 129, 130, 80, 82],
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
        <CCard>
          <CCardBody>
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

export default DashboardRes
