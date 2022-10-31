import React from 'react'
import './style.css'


const Article = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', width: '40%', margin: '10px auto', backgroundColor:'#55A9C5'}}>  Table    </h1>
        <table id="customers">
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
            </tr>
          </tbody>



        </table>
    </>

  );
}

export default Article;
