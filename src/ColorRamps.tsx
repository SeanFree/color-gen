import { FC } from 'react'
import * as ramps from './ramps'
import Color from 'color'

const ColorRamps: FC = () => {
  return (
    <section className="flex gap-8 flex-wrap">
      {Object.entries(ramps).map(([name, ramp]) => (
        <div>
          <h3>{name}</h3>

          <div className="border border-coolGray rounded">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Hex</th>
                  <th>White Contrast</th>
                  <th>Black Contrast</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(ramp).map(([level, value]) => {
                  const color = Color(value)

                  return (
                    <tr key={level}>
                      <td>{level}</td>
                      <td>{value}</td>
                      <td>{Color('#FFFFFF').contrast(color).toFixed(2)}:1</td>
                      <td>{Color('#000000').contrast(color).toFixed(2)}:1</td>
                      <td style={{ backgroundColor: value }}></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ColorRamps
