import React from "react";

export default function Dashboard({ selected, onRemove }) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">선택된 포켓몬 (최대 6마리)</h2>
            <div className="flex flex-wrap gap-4">
                {selected.map((pokemon) => (
                    <div key={pokemon.id} className="border p-2 rounded shadow">
                        <img src={pokemon.img_url} alt={pokemon.korean_name} />
                        <p className="font-bold">{pokemon.korean_name}</p>
                        <button
                            onClick={() => onRemove(pokemon.id)}
                            className="mt-2 px-2 py-1 bg-red-500 text-white rounded"
                        >
                            삭제
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
