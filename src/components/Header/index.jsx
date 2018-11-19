import React from 'react'
import './index.css'
import './img/logo.png'

export default function Header() {
    return (        
        <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width="70" src="./img/logo.png"/>
            </td>
            <td width="15"/>
            <td>
              <h1>Movies Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
    );
}