import { react, useState, useEffect } from "react";
//add api functions here when importing
import { Link, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";

export default function App() {
  return (
    <div>
      <h1>test</h1>
      <Posts />
    </div>
  );
}
