import { Star } from "lucide-react"

interface RatingConverterProps {
  count: number,
}

const RatingConverter = ({ count }: RatingConverterProps) => {
  return (
    <div className="flex items-center gap-1 mb-1">
      {Array.from({ length: count }).map((_, i) => <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" key={i} />)}
    </div>
  )
}

export default RatingConverter 