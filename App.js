import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Routes, Route } from 'react-router-native';
import PageOne from './pageOne';
import PageTwo from './pageTwo';

const Router = NativeRouter;

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne/>}/>
        <Route path="/pageTwo" element={<PageTwo/>}/>
      </Routes>    
    </Router>
  )
}
