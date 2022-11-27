import React from 'react'
import Card from '../../components/card/card'
import CategoriesBar from '../../components/categories-bar/CategoriesBar'

export default function ManageProducts() {
  return (
    <div class="body">
      <div class="container" style={{ padding: "0" }}>
        <h3>Quanr </h3>
        <CategoriesBar />
        <div class="row g-2 news-list">
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
        </div>
      </div>
    </div>
  )
}
