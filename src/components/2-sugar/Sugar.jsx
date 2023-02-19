import React from "react";

export default function Sugar(props) {
    return (
        <>
          <div class="slds-align_absolute-center slds-text-title_bold slds-p-top_x-small slds-p-bottom_x-small">AÇÚCAR PRODUZIDO</div>
          <div class="slds-scope">
            {props.boletimData.map(boleData => (
            <table key={boleData.NUMERO_BOLE} class="slds-table">
              <thead>
                <tr class="slds-line-height_reset">
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">ENSACADO HOJE (T)</th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ENSAQ_HOJE || 0}</td>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">ACUMULADO (T)</th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ENSAQ_ACUM || 0}</td>
                </tr>
              </thead>
              <thead>
                <tr class="slds-line-height_reset">
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade" scope="col">BIG BAG DIA</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade" scope="col">BIG BAG TOTAL</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade" scope="col">GRANEL(T) DIA</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade" scope="col">GRANEL(T) TOTAL</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade" scope="col">TOTAL PROD. DIA (T)</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade" scope="col">TOTAL PROD. SAFRA (T)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade" scope="col"><strong>TIPO 1</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1D_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1A_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1D_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1A_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1D_CO || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1A_CO || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade" scope="col"><strong>TIPO 2AH</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2D_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2A_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2D_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2A_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2D_CO || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2A_CO || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade" scope="col"><strong>TIPO 3A</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4D_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4A_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4D_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4A_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4D_CO || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4A_CO || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade" scope="col"><strong>TIPO 3C</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6D_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6A_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6D_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6A_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6D_CO || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6A_CO || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade" scope="col"><strong>TIPO VHP</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7D_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7A_SA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7D_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7A_GR || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7D_CO || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7A_CO || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade" scope="col"><strong>TOTAL</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.KSAD || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.KSAA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.KGRD || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.KGRA || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.KCOD || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.KCOA || 0}</td>
                </tr>
              </tbody>
            </table>
            ))}       
          </div>
        </>
    )
}