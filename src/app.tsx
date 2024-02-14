import { useState } from "react"

export const App = () => {
  const [streamUrl, setStreamUrl] = useState(localStorage.getItem("streamUrl") || "")
  const [secondVideoUrl, setSecondVideoUrl] = useState(localStorage.getItem("secondVideoUrl") || "")
  const [streamIsSet, setStreamIsSet] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  console.log(streamUrl)
  const setLocalStorage = (name: string, value: string) => {
    localStorage.setItem(name, value)
  }

  if (!streamIsSet) {
    return (
      <div className="w-screen h-screen flex justify-center items-center gap-3">
        <input 
          className="px-3 py-2 w-[40%] rounded-md"
          type="text" 
          placeholder="Escreva o link da stream"
          value={streamUrl}
          onChange={(event) => {
            setStreamUrl(event.target.value)
            setLocalStorage("streamUrl", event.target.value)
          }}
        />

        <button
          className="bg-slate-600 px-3 py-2 rounded-md"
          onClick={() => {
            setStreamIsSet(true);
          }}
        >
          Buscar
        </button>
      </div>
    )
  }

  return (
    <div className="w-screen h-screen">
      <div className="absolute">
        <button
          onClick={() => setShowMenu(v => !v)}
        >
          {showMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"/></svg>
          )}
        </button>
      </div>

      <div className={`${showMenu ? "" : "hidden"} absolute w-96 h-full right-0 p-3`}>
        <div className="bg-slate-600/70 h-full rounded-md p-3">
          
          <h1 className="text-2xl text-center">Ações</h1>

          <div className="flex flex-col mt-5">
            <h3 className="mb-1 ml-1">Vídeo secundário</h3>

            <input 
              className="px-3 py-2 w-full rounded-md"
              type="text" 
              value={secondVideoUrl}
              placeholder="Escreva o link do vídeo"
              onChange={(event) => {
                setSecondVideoUrl(event.target.value)
                setLocalStorage("secondVideoUrl", event.target.value)
              }}
            />

            <iframe 
              className="w-full h-full mt-3 rounded-md" 
              src={secondVideoUrl}
            />
          </div>
        </div>
      </div>

      <iframe 
        className="w-full h-full" 
        src={streamUrl}
      />
    </div>
  )
}
