import React from "react";
import dateFormat from 'dateformat';

export default function Processos(props) {
    return (
        <>
          <div class="slds-scope">
            {props.boletimData.map(boleData => (
            <table key={boleData.NUMERO_BOLE} class="slds-table">
              <thead>
                <tr class="slds-line-height_reset">
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-col slds-size_2-of-12">PROCESSO</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">HOJE</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">ANTERIOR</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade">TOTAL</th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden slds-size_2-of-12"></th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-size_2-of-12">HOJE</th>
                  <th class="slds-text-align_center slds-box slds-box_x-small slds-theme_shade slds-size_2-of-12">ATÉ {dateFormat(props.dataDia.datad, "UTC:dd/mm/yyyy")}</th>
                </tr>
              </thead>
              <tbody>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Álcool processo(L)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small slds-size_1-of-12"><strong>{boleData.D01H || 0}</strong></td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small slds-size_1-of-12"><strong>{boleData.D01A || 0}</strong></td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small slds-size_1-of-12"><strong>{boleData.D01T || 0}</strong></td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>UNICOP (kg açúcar / ton. cana)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.UNICH || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.UNICT || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Açúcar processo(50 kg)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"><strong>{boleData.D02H || 0}</strong></td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"><strong>{boleData.D02A || 0}</strong></td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"><strong>{boleData.D02T || 0}</strong></td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>POL%CANA</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.PCH || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.PCT || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Álcool / sc. açúcar(L)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D03H || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D03A || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"></td>
                  <th class="slds-hidden"></th>
                  <th class="slds-hidden"></th>
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>ATR</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ATRH || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.ATRT || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Óleo fusel(kg)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"></td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"></td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"></td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Tonel de melaço(m³)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D06H || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D06A || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D06T || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Vazão de melaço(m³)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D06HV || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D06AV || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D06TV || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Melaço etanol(t)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D06HE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D06AE || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D06TE || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Energia prod.(mWh)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08H || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08A || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08T || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Energia exp.(mWh)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D09H || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D09A || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D09T || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Açúcar silo em sc 50kg</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"></td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"></td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small"></td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Produção sacos de 50kg</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D12H || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D12A || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D12T || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Total de açúcar sc 50kg</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D13H || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D13A || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D13T || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Horas de Turbinagem(h)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D14H || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D14A || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D14T || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Horas de destilação(h)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D15H || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D15A || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D15T || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Vinhaça concent. prod.(m³)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D09HVIN || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D09AVIN || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D09TVIN || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Vapor produzido(t)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08HVAP || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08AVAP || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08TVAP || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Bagaço produzido(t)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08HBAG || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08ABAG || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08TBAG || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Bagaço consumido(t)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08HBAGC || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08ABAGC || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08TBAGC || 0}</td>
                </tr>
                <tr class="slds-line-height_reset">
                  <th class="slds-box slds-box_x-small slds-theme_shade"><strong>Lenha consumida(t)</strong></th>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08HLENHAC || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08ALENHAC || 0}</td>
                  <td class="slds-cell-wrap slds-text-align_center slds-box slds-box_x-small">{boleData.D08TLENHAC || 0}</td>
                </tr>
              </tbody>
            </table>
            ))}       
          </div>
        </>
    )
}