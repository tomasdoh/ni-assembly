import React from 'react'

export default function convertTime(time) {
  let days = Math.floor(time / (60*60*1000*24));
  let hours = Math.floor(time / 3600000);
  let mins = Math.floor(time / 60000);
  let secs = Math.floor(time / 1000);
  let millisecs = Math.floor(time);
  return (
    <div>
      <h3>{days} days</h3>
      <h3>{hours} hours</h3>
      <h3>{mins} minutes</h3>
      <h3>{secs} seconds</h3>
      <h3>{millisecs} milliseconds</h3>
    </div>
  )
}
