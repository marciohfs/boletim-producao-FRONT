import React from "react";

export default function Cana(props) {
    return (
        <>
        <div class="slds-grid slds-p-top_medium slds-p-bottom_x-small">
          <div class="slds-col slds-size_9-of-12 slds-text-align_center slds-text-title_bold">HORAS MOAGEM / TRABALHADAS</div>
          <div class="slds-col slds-size_1-of-12 slds-text-align_center slds-text-title_bold">CANA(T)</div>  
        </div>
          <div class="slds-scope">
            {props.boletimData.map(boleData => (
            <table key={boleData.NUMERO_BOLE} class="slds-table">
              <thead>
                <tr class="slds-line-height_reset">
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">TRABALHADAS</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">PERDIDA</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">MOENDA A</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">MOENDA B</th>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">ENTRADA(T)</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">MOÍDA(T)</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">MOAGEM / HORA</th>
                </tr>
              </thead>
              <tbody>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>HOJE</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HTRAH || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HPERH || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HSMAH || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HSMBH || 0}</td>
                  <th class="slds-hidden"></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.CANAE_HOJE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.CANAM_HOJE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.MOAGH || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>ANTERIOR</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HTRAA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HPERA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HSMAA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HSMBA || 0}</td>
                  <th class="slds-hidden"></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.CANAE_ANTE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.CANAM_ANTE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.MOAGA || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>TOTAL</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HTRAT || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HPERT || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HSMAT || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HSMBT || 0}</td>
                  <th class="slds-hidden"></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.CANAE_TOTA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.CANAM_TOTA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.MOAGT || 0}</td>
                </tr>
              </tbody>
            </table>
            ))}       
          </div>
        </>
    )
}