import ColorPalette from "./ColorPalette"
import ColorRamps from "./ColorRamps"

function App() {
  return (
    <main className="p-4">
      <header>
        <h1>Color Gen</h1>
      </header>

      <p>Programatically generated color palettes</p>

      <h2>Color Palette</h2>

      <p>When selecting colors for your palette, ensure that they have a contrast ratio against white between 4.5:1 and 4.65:1.</p>

      <ColorPalette />

      <h2>Color Ramps</h2>
      
      <ColorRamps />
    </main>
  )
}

export default App
