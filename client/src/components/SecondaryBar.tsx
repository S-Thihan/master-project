import { Menu } from "lucide-react"

const categories = [
    "T-shirts", "Hoodie", "Shirt", "Jeans", "Gym", "Shorts",
]

function SecondaryBar() {
    return (
        <main className="text-black bg-gray-200 py-3">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Menu />
                    <p className="text-lg  font-bold">Categories</p>
                </div>
                <div className="flex items-center gap-4 font-mediumt text-base">
                    {categories.map((category, index) => <p key={index}>{category}</p>)}
                </div>
            </div>
        </main>
    )


}

export default SecondaryBar