'use client'

import { useState } from 'react'
import { usePredictions } from '@/hooks/usePredictions'
import { PredictionCard } from '@/components/ui/PredictionCard'
import { DataTable } from '@/components/ui/DataTable'

export default function PredictionsPage() {
  const [sport, setSport] = useState('nfl')
  const { predictions, isLoading, error } = usePredictions(sport)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Predictions</h1>
      <select value={sport} onChange={(e) => setSport(e.target.value)} className="mb-4">
        <option value="nfl">NFL</option>
        <option value="nba">NBA</option>
        <option value="pga">PGA</option>
        <option value="ncaa">NCAA Football</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {predictions.map((prediction) => (
          <PredictionCard key={prediction.id} prediction={prediction} />
        ))}
      </div>
      <DataTable data={predictions} columns={['Team', 'Outcome', 'Confidence']} />
    </div>
  )
}

