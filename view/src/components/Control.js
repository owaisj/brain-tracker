import React from 'react';
import { Tile } from 'rbx';
import MoodForm from '../components/MoodForm';
import SleepForm from '../components/SleepForm';

export default function Control() {
  return (
    <Tile kind="parent" vertical size={4}>
      <MoodForm />
      <SleepForm />
    </Tile>
  );
}
