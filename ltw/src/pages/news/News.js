import React from 'react';
import Header from '../../components/header/Header';
import CategoriesBar from '../../components/categories-bar/CategoriesBar';
import './News.css'
export default function News() {
  return (
    <>
      <header><Header /></header>
      <div class="body">
        <CategoriesBar />
      </div>
    </>
  )
}
