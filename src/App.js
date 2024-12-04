// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/common/Navbar';
import FooterComponent from './Components/common/Footer';
import LoginPage from './Components/auth/LoginPage';
import RegisterPage from './Components/auth/RegisterPage';
import HomePage from './Components/home/HomePage';
import AllRoomsPage from './Components/booking_rooms/AllRoomsPage';
import RoomDetailsBookingPage from './Components/booking_rooms/RoomDetailsPage';
import FindBookingPage from './Components/booking_rooms/FindBookingPage';
import AdminPage from './Components/admin/AdminPage';
import ManageRoomPage from './Components/admin/ManageRoomPage';
import EditRoomPage from './Components/admin/EditRoomPage';
import AddRoomPage from './Components/admin/AddRoomPage';
import ManageBookingsPage from './Components/admin/ManageBookingsPage';
import EditBookingPage from './Components/admin/EditBookingPage';
import ProfilePage from './Components/profile/ProfilePage';
import EditProfilePage from './Components/profile/EditProfilePage';
import { ProtectedRoute, AdminRoute } from './service/guard';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/rooms" element={<AllRoomsPage />} />
            <Route path="/find-booking" element={<FindBookingPage />} />

          
            <Route path="/room-details-book/:roomId"
              element={<ProtectedRoute element={<RoomDetailsBookingPage />} />}
            />
            <Route path="/profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />
            <Route path="/edit-profile"
              element={<ProtectedRoute element={<EditProfilePage />} />}
            />

            {/* Admin Routes */}
            <Route path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route path="/admin/manage-rooms"
              element={<AdminRoute element={<ManageRoomPage />} />}
            />
            <Route path="/admin/edit-room/:roomId"
              element={<AdminRoute element={<EditRoomPage />} />}
            />
            <Route path="/admin/add-room"
              element={<AdminRoute element={<AddRoomPage />} />}
            />
            <Route path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageBookingsPage />} />}
            />
            <Route path="/admin/edit-booking/:bookingCode"
              element={<AdminRoute element={<EditBookingPage />} />}
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;