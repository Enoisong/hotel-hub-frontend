import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomDetailsById } from '../redux/features/rooms/roomsSlice';

const RoomItem = () => {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const roomDetails = useSelector((state) => state.room.roomDetails);

  useEffect(() => {
    dispatch(fetchRoomDetailsById(roomId));
  }, [dispatch, roomId]);

  return (
    <div>
      <div key={roomDetails.name}>
        <p>{roomDetails.description}</p>
      </div>
      <button type="button">Reserve this room</button>
    </div>
  );
};

export default RoomItem;
