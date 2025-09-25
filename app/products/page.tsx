"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import Link from "next/link"
import { Star, Filter } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Signature Blazer",
    price: 299,
    originalPrice: 399,
    image: "/elegant-black-blazer-on-hanger.jpg",
    category: "Outerwear",
    rating: 5,
    reviews: 24,
    isNew: false,
    isSale: true,
  },
  {
    id: 2,
    name: "Classic Silk Dress",
    price: 199,
    originalPrice: null,
    image: "/elegant-silk-dress-minimalist-style.jpg",
    category: "Dresses",
    rating: 5,
    reviews: 18,
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: "Premium Leather Bag",
    price: 399,
    originalPrice: null,
    image: "/luxury-leather-handbag-minimalist-design.jpg",
    category: "Accessories",
    rating: 5,
    reviews: 32,
    isNew: false,
    isSale: false,
  },
  {
    id: 4,
    name: "Cashmere Sweater",
    price: 249,
    originalPrice: 329,
    image: "/elegant-cashmere-sweater.png",
    category: "Knitwear",
    rating: 4,
    reviews: 15,
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Tailored Trousers",
    price: 179,
    originalPrice: null,
    image: "/elegant-tailored-trousers.jpg",
    category: "Bottoms",
    rating: 5,
    reviews: 21,
    isNew: true,
    isSale: false,
  },
  {
    id: 6,
    name: "Silk Scarf",
    price: 89,
    originalPrice: null,
    image: "/luxury-silk-scarf.png",
    category: "Accessories",
    rating: 4,
    reviews: 12,
    isNew: false,
    isSale: false,
  },
  {
    id: 7,
    name: "Wool Coat",
    price: 459,
    originalPrice: 599,
    image: "/elegant-wool-coat.jpg",
    category: "Outerwear",
    rating: 5,
    reviews: 28,
    isNew: false,
    isSale: true,
  },
  {
    id: 8,
    name: "Evening Gown",
    price: 349,
    originalPrice: null,
    image: "/elegant-evening-gown.png",
    category: "Dresses",
    rating: 5,
    reviews: 19,
    isNew: true,
    isSale: false,
  },
]

const categories = ["All", "Outerwear", "Dresses", "Accessories", "Knitwear", "Bottoms"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.isNew ? 1 : -1
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-light elegant-text mb-4">Our Collection</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated selection of premium fashion pieces, each designed to elevate your personal
              style.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
                      {product.isSale && <Badge variant="destructive">Sale</Badge>}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                    </div>
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-light">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Link href={`/products/${product.id}`}>
                      <Button className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
