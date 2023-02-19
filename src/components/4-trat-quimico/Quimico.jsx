import React from "react";

export default function Quimico(props) {
    return (
        <>
          <div class="slds-grid slds-p-top_x-small slds-p-bottom_x-small">
            <div class="slds-col slds-size_6-of-12 slds-text-align_center slds-text-title_bold">TRATAMENTO QUÍMICO</div>
            <div class="slds-col slds-text-align_center slds-text-title_bold">PARADAS MOENDA A / MOENDA B (H)</div>
          </div>
          <div class="slds-scope">
            {props.boletimData.map(boleData => (
            <table key={boleData.NUMERO_BOLE} class="slds-table">
              <thead>
                <tr class="slds-line-height_reset">
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-size_2-of-12">PRODUTO</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">HOJE</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">ANTERIOR</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">TOTAL</th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-size_1-of-12">PARADAS</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-size_1-of-12">M A</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-size_1-of-12">M B</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-size_1-of-12">PARADAS</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-size_1-of-12">M A</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-size_1-of-12">M B</th>
                </tr>
              </thead>
              <tbody>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Enxofre(kg)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small slds-size_1-of-12">{boleData.QH01 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small slds-size_1-of-12">{boleData.QAT1 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small slds-size_1-of-12">{boleData.QTT1 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Mesa Aliment.</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P00MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P00MB || 0}</td>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Danos elétricos</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P08MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P08MB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Cal(kg)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH02 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT2 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT2 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Danos elétricos</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P01MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P01MB || 0}</td>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Falta cana chuva</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P09MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P09MB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Ácido fosfórico(L)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH03 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT3 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT3 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Moenda</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P02MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P02MB || 0}</td>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Falta cana trans.</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P10MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P10MB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Polímero pó(kg)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH04 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT4 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT4 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Tratamento caldo</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P03MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P03MB || 0}</td>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Falta cana corte</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P11MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P11MB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Anti incrustante evap.(L)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH05 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT5 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT5 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Evap. / cozedores</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P04MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P04MB || 0}</td>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Limpeza / manut.</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P12MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P12MB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Bactericida moendas(L)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH06 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT6 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT6 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Centrif. / secador</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P05MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P05MB || 0}</td>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Geradores</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P13MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P13MB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Bactericida ferment.(L)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH07 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT7 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT7 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Fermentação</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P06MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P06MB || 0}</td>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Caldeiras</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P14MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P14MB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Soda Caldeiras(kg)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH08 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT8 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT8 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Fermentação</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P07MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P07MB || 0}</td>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Diversos</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P16MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P16MB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Soda destilarias(kg)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH09 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT9 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT9 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Energia</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P08MA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.P08MB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Ciclo hexano(L)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH010 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT10 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT10 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>HOJE</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.PHOMA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.PHOMB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Ácido sulfúrico(L)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH011 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT11 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT11 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>ANTERIOR</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.PANMA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.PANMB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Anti espumante(kg)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH012 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT12 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT12 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>TOTAL</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.PTOMA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.PTOMB || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Anti incrustante dest.(L)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QH013 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QAT13 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.QTT13 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Perda de moagem(T)</strong></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>Ind.</strong></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>Agríc.</strong></th>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.KGRD || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.KGRA || 0}</td>
                </tr>
              </tbody>
            </table>
            ))}       
          </div>
        </>
    )
}