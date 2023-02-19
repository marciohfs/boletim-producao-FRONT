import React from "react";

export default function Alcool(props) {
    return (
        <>
          <div class="slds-align_absolute-center slds-text-title_bold slds-p-top_x-small slds-p-bottom_x-small">ETANOL(L) E MELAÇO(KG) PRODUZIDO</div>
          <div class="slds-scope">
            {props.boletimData.map(boleData => (
            <table key={boleData.NUMERO_BOLE} class="slds-table slds-table_cell-buffer">
              <thead>
                <tr class="slds-line-height_reset">
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">ETANOL ANIDRO (L)</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">ETANOL HIDRATADO (L)</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">TOTAL (L)</th>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">TQ</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">L/CM</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">TEMP</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">MEDIDA</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">VOLUME</th> 
                </tr>
              </thead>
              <tbody>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>HOJE</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ANIDRO_HOJE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HIDRAT_HOJE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ALCOOL_HOJE || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>1</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1LCM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1TEM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1MED || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T1VOL || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>ANTERIOR</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ANIDRO_ANTE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HIDRAT_ANTE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ALCOOL_ANTE || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>2</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2LCM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2TEM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2MED || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T2VOL || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>TOTAL</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ANIDRO_TOTA || 0 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.HIDRAT_TOTA || 0 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ALCOOL_TOTA || 0 || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>3</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T3LCM || 0 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T3TEM || 0 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T3MED || 0 || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T3VOL || 0 || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>4</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4LCM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4TEM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4MED || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T4VOL || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>MELAÇO VENDIDO (KG)</strong></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>ART (%)</strong></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>5</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T5LCM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T5TEM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T5MED || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T5VOL || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>HOJE</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.MELVEND_HOJE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.MELART_HOJE || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>6</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6LCM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6TEM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6MED || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T6VOL || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>ANTERIOR</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.MELVEND_ACUM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.MELART_ACUM || 0}</td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>7</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7LCM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7TEM || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7MED || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.T7VOL || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <td class="slds-hidden"></td>
                  <td class="slds-hidden"></td>
                  <td class="slds-hidden"></td>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade"><strong>TOTAL</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.TT_TQ || 0}</td>
                </tr>
              </tbody>
            </table>
            ))}       
          </div>
        </>
    )
}