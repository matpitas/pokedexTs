type CardPokemonProps = {
  imagePokemon?: string,
  namePokemon?: string
}

const CardPokemon = ({imagePokemon, namePokemon}:CardPokemonProps) => {
  return (
    <div className="w-1/4 h-3/4 flex flex-col justify-between items-center ">
        <img className="w-full h-full" src={imagePokemon} alt="" />
        <p className="text-center font-semibold text-sm capitalize py-2 px-8 w-auto rounded bg-slate-700">{namePokemon}</p>
    </div>
  )
}

export default CardPokemon