import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, AddRoom, DeleteRoom } from './components';
import {
  Rooms, RoomItem, Reservations, Profile, Splash, Register,
} from './Pages';

const App = () => (
  <Routes>
    <Route path="/" element={<Splash />} />
    <Route path="/register" element={<Register />} />
    <Route path="/app" element={<Layout />}>
      <Route index element={<Rooms />} />
      <Route path="room/:roomId" element={<RoomItem />} />
      <Route path="Reservations" element={<Reservations />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="AddRoom" element={<AddRoom />} />
      <Route path="DeleteRoom" element={<DeleteRoom />} />
    </Route>
  </Routes>
);

export default App;
