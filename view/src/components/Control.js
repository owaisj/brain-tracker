import React from 'react';
import { Tile } from 'rbx';
import UserPanel from '../components/UserPanel';
import MoodForm from '../components/MoodForm';
import SleepForm from '../components/SleepForm';

export default function Control() {
  return (
    <Tile kind="parent" vertical size={4}>
      <UserPanel />
      <MoodForm />
      <SleepForm />
    </Tile>
  );
}
