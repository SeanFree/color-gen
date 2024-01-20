import { FC } from 'react'
import Color from 'color'
import colors from './colors'

const bgClasses: Record<string, string> = {
  pureGray: 'bg-pureGray',
  coolGray: 'bg-coolGray',
  warmGray: 'bg-warmGray',
  teal: 'bg-teal',
  slate: 'bg-slate',
  blue: 'bg-blue',
  mustard: 'bg-mustard',
  gold: 'bg-gold',
  red: 'bg-red',
  green: 'bg-green',
  turquoise: 'bg-turquoise',
}

const textClasses: Record<string, string> = {
  pureGray: 'text-pureGray',
  coolGray: 'text-coolGray',
  warmGray: 'text-warmGray',
  teal: 'text-teal',
  slate: 'text-slate',
  blue: 'text-blue',
  mustard: 'text-mustard',
  gold: 'text-gold',
  red: 'text-red',
  green: 'text-green',
  turquoise: 'text-turquoise',
}

const ColorPalette: FC = () => {
  return (
    <div className="border border-coolGray rounded">
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>White Contrast</th>
            <th>Black Contrast</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(colors).map(([name, color], i) => (!['black', 'white'].includes(name) &&
            <tr key={i}>
              <td className={textClasses[name]}>{name}</td>
              <td className='flex gap-2'>
                <span className={`${bgClasses[name]} h-4 w-4 rounded-sm`}></span>
                {color}
              </td>
              <td>{Color('#FFFFFF').contrast(Color((colors as never)[name])).toFixed(2)}:1</td>
              <td>{Color('#000000').contrast(Color((colors as never)[name])).toFixed(2)}:1</td>
              <td className={bgClasses[name]}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ColorPalette