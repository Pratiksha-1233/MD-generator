import { useGeneratorStore } from "@/app/config"

export default function Mood() {
  const mood = useGeneratorStore(s => s.design).mood;
  const updateDesign = useGeneratorStore(s => s.updateDesign);

  return (
    <div className="w-full max-w-4xl ">
      <label className="mb-2 block text-lg font-medium">Mood</label>

      <textarea
        className="
          min-h-40
          w-full
          rounded-md
          dark:bg-taupe-800
          p-3
          border
          border-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-green-500
        "
        placeholder="Describe the desired mood..."
        defaultValue={mood}
        onChange={e => updateDesign({
          mood: e.currentTarget.value
        })}
      />
    </div>
  )
}
