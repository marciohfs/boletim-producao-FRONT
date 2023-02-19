import React from 'react';
import Cana from './components/1-cana/Cana';
import Sugar from './components/2-sugar/sugar';
import Alcool from './components/3-alcool/Alcool';
import Quimico from './components/4-trat-quimico/Quimico';
import Processos from './components/5-processos/Processos';
import './App.css';
import './components/print/Print.css';
import dateFormat from 'dateformat';

export default function App() {
  const [boletimData, setBoletimData] = React.useState([{}])
  const [dataDia, setDataDia] = React.useState({datad: ""})

  //Faz aparecer o form após clicar no botão buscar
  function Openform() {
    document.getElementById("form1").style.visibility = "visible";
  }

  //Grava as alterações de Data do Input
  function handleDataChange(event) {
    setDataDia(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  //Chama a API e passa a data selecionada para chamada da mesma
  const handleClick = async(event) => {
      event.preventDefault()
      try {
        Openform()
        await fetch(`http://staluciaweb:5002/boletim/${dataDia.datad}`)
        //await fetch(`http://localhost:5002/boletim/${dataDia.datad}`)
          .then(res => res.json())
          .then(data => setBoletimData(data))
      } catch {
        alert("Data indiponível!!!")
        history.go(0);
      }     
  }

  return (
    <div>
      <div>
      {boletimData.map(boleData => (
        <div key={boleData.NUMERO_BOLE} class="slds-grid">
          <div class="slds-size_x-small">
            <img src="./usl_logo.png" className="nav-logo" alt="Logo" />
          </div>
          <h1 class="slds-text-heading_large slds-align_absolute-center">BOLETIM DE PRODUÇÃO Nº {boleData.NUMERO_BOLE} - {dateFormat(dataDia.datad, "UTC:dd/mm/yyyy")}</h1>
          <div class="slds-p-top_large slds-p-bottom_large">
            <input 
              class="slds-no-print"
              type="date"
              onChange={handleDataChange}
              name="datad"
              value={dataDia.datad}
            />
          </div>
          <div class="slds-p-top_large slds-p-bottom_large">
            <button onClick={handleClick} class="slds-button slds-button_brand slds-no-print">BUSCAR</button>
          </div>
        </div>
        ))}
      </div>
       {/*<pre className="api">{JSON.stringify(boletimData, null, 2)}</pre> {/* MOSTRA API */}

      {/* TABELAS BOLETIM */}
      <br />
      <div id="form1" className="geral">
        <div class="slds-border_top slds-p-left_large slds-p-right_large slds-theme_default"> 
          < Cana boletimData={boletimData}/>
          < Sugar boletimData={boletimData}/>
          < Alcool boletimData={boletimData}/>
          < Quimico boletimData={boletimData}/>
          <br/>
          < Processos boletimData={boletimData} dataDia={dataDia}/>
        </div> 
      </div> 
    </div>
  )
}