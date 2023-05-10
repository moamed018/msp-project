/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import EventsPage from "./pages/EventsPage";
import NewsPage from "./pages/NewsPage";
import HistoryPage from "./pages/HistoryPage";
import CommitteesPage from "./pages/CommitteesPage";

import EventDetails from "./pages/EventDetails";
import NewsDetails from "./pages/NewsDetails";
import CommitteeDetails from "./pages/CommitteeDetails";
import HistoryDetails from "./pages/HistoryDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/home" element={<Home />} />

                <Route path="/events" element={<EventsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/committees" element={<CommitteesPage />} />

                <Route path="/events/:eventId" element={<EventDetails />} />
                <Route path="/news/:newsId" element={<NewsDetails />} />
                <Route
                    path="/committees/:committeeName"
                    element={<CommitteeDetails />}
                />
                <Route
                    path="/history/:historyId"
                    element={<HistoryDetails />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
